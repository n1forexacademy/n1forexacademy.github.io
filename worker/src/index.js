/* N1 Forex Academy — auth, enrolment and progress API.
   Cloudflare Worker bound to a D1 database. Never sleeps, no cold start.

   AUTHORISATION MODEL
     Student/instructor sign-in ....... access code -> session token (Bearer)
     Day-to-day administration ........ instructor SESSION (done in the website UI)
     Bootstrap only ................... ADMIN_KEY header, to create the first
                                        instructor before any session can exist.

   ADMIN_KEY is deliberately needed once. Everything after that is the admin panel.

   Endpoints
     POST /api/login                {name, code}          -> {token, user}
     POST /api/logout               Bearer                -> {ok}
     GET  /api/me                   Bearer                -> {user}
     GET  /api/progress             Bearer                -> {progress}
     POST /api/progress             Bearer {patch}        -> {progress}

     GET  /api/invite/:token        (public)              -> {valid, label}
     POST /api/signup               {token, name, code}   -> {token, user}

     GET  /api/admin/students       instructor            -> {students}
     POST /api/admin/students       instructor            -> create / update
     POST /api/admin/revoke         instructor {id}       -> {ok}
     POST /api/admin/reset          instructor {id, code} -> {ok}
     GET  /api/admin/invites        instructor            -> {invites}
     POST /api/admin/invites        instructor            -> {invite, token}   (token shown once)
     POST /api/admin/invites/revoke instructor {id}       -> {ok}

     POST /api/enroll               x-admin-key           -> bootstrap only
*/

/* PBKDF2 cost.
   Cloudflare Workers allow roughly 10ms CPU per request on the free plan, and
   PBKDF2 is the only expensive thing here. 150k iterations exceeded that and
   the Worker was killed with error 1101 on every sign-in.

   Login now does exactly ONE hash (indexed username lookup, then verify), so
   this figure only has to fit a single derivation. Do not raise it without
   re-running test/run-tests.sh against the deployed Worker — the failure mode
   is a hard 1101, not a slow response. */
const PBKDF2_ITERATIONS = 25000;
const SESSION_DAYS = 30;
const MIN_CODE_LENGTH = 8;
const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/;

const enc = new TextEncoder();

/* ---------- crypto helpers ---------- */

function b64(bytes) { return btoa(String.fromCharCode(...new Uint8Array(bytes))); }

function randomHex(n) {
  return [...crypto.getRandomValues(new Uint8Array(n))]
    .map((x) => x.toString(16).padStart(2, '0')).join('');
}

async function pbkdf2(code, saltB64) {
  const key = await crypto.subtle.importKey('raw', enc.encode(code), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: Uint8Array.from(atob(saltB64), (c) => c.charCodeAt(0)),
      iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    key, 256
  );
  return b64(bits);
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hashCode(code) {
  const salt = b64(crypto.getRandomValues(new Uint8Array(16)));
  return { hash: await pbkdf2(code, salt), salt };
}

/* ---------- http helpers ---------- */

function corsHeaders(env, request) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = request.headers.get('Origin') || '';
  const ok = allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : (allowed[0] || ''),
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,x-admin-key',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function json(data, status, env, request) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(env, request) }
  });
}

async function bearerUser(request, env) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token) return null;
  const hash = await sha256Hex(token);
  const row = await env.DB.prepare(
    `SELECT s.student_id, s.display_name, s.expires_at, st.name, st.role, st.active
       FROM sessions s JOIN students st ON st.id = s.student_id
      WHERE s.token_hash = ?`
  ).bind(hash).first();
  if (!row || !row.active) return null;
  if (row.expires_at < Date.now()) {
    await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(hash).run();
    return null;
  }
  return { id: row.student_id, name: row.display_name || row.name,
           seat: row.name, role: row.role, tokenHash: hash };
}

async function newSession(env, studentId, displayName) {
  const token = randomHex(32);
  const now = Date.now();
  await env.DB.prepare(
    'INSERT INTO sessions (token_hash, student_id, display_name, created_at, expires_at) VALUES (?,?,?,?,?)'
  ).bind(await sha256Hex(token), studentId, displayName, now, now + SESSION_DAYS * 86400000).run();
  await env.DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(now).run();
  return token;
}

function slugify(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24) || 'student';
}

/* Merges a progress patch. Students may write their own learning progress and
   demo log; only an instructor may set `overrides`, `gates`, `demoSignoff` and
   `liveApproved` — those are gated by `allowInstructorFields`. */
function mergeProgress(current, patch, allowInstructorFields) {
  const p = current && typeof current === 'object' ? current : {};
  p.modules = p.modules || {};
  p.drills = p.drills || {};
  p.demoLog = Array.isArray(p.demoLog) ? p.demoLog : [];
  if (!patch) return p;

  if (patch.module) {
    const key = String(patch.module);
    const m = p.modules[key] || {};
    if (patch.visited) m.visited = true;
    if (typeof patch.quiz === 'number') m.quiz = Math.max(m.quiz || 0, patch.quiz);
    // Lesson-level checks. Merge rather than replace, and never un-pass one.
    if (patch.lessons && typeof patch.lessons === 'object') {
      m.lessons = Object.assign({}, m.lessons || {});
      for (const k of Object.keys(patch.lessons)) {
        if (patch.lessons[k]) m.lessons[k] = true;
      }
    }
    p.modules[key] = m;
  }
  if (patch.drill) {
    const prev = p.drills[patch.drill] || {};
    p.drills[patch.drill] = { passed: !!(patch.passed || prev.passed), at: Date.now() };
  }

  // Certificates are write-once: the issue date and reference never change.
  // `certificate` (singular) is the forex track, kept for existing records.
  function sanitiseCert(c) {
    return {
      issuedAt: Number(c.issuedAt) || Date.now(),
      id: String(c.id || '').slice(0, 40),
      name: String(c.name || '').slice(0, 80),
      track: String(c.track || '').slice(0, 24),
      title: String(c.title || '').slice(0, 80)
    };
  }
  if (patch.certificate && !p.certificate) {
    p.certificate = sanitiseCert(patch.certificate);
  }
  if (patch.certificates && typeof patch.certificates === 'object') {
    p.certificates = p.certificates || {};
    for (const k of Object.keys(patch.certificates).slice(0, 12)) {
      const key = String(k).slice(0, 24);
      if (!p.certificates[key] && patch.certificates[k]) {
        p.certificates[key] = sanitiseCert(patch.certificates[k]);
      }
    }
  }

  // One row per week; re-submitting a week replaces it rather than duplicating.
  if (patch.demoWeek && patch.demoWeek.week) {
    const w = {
      week: Math.max(1, Math.min(520, parseInt(patch.demoWeek.week, 10) || 1)),
      trades: Math.max(0, parseInt(patch.demoWeek.trades, 10) || 0),
      followed: Math.max(0, parseInt(patch.demoWeek.followed, 10) || 0),
      r: Number(patch.demoWeek.r) || 0,
      note: String(patch.demoWeek.note || '').slice(0, 300),
      at: Date.now()
    };
    if (w.followed > w.trades) w.followed = w.trades;
    p.demoLog = p.demoLog.filter((x) => x.week !== w.week).concat([w]).slice(-200);
  }
  if (typeof patch.demoMaxDrawdown === 'number' && patch.demoMaxDrawdown >= 0) {
    p.demoMaxDrawdown = Math.min(100, patch.demoMaxDrawdown);
  }

  if (allowInstructorFields) {
    if (patch.overrides && typeof patch.overrides === 'object') {
      p.overrides = Object.assign({}, p.overrides || {}, patch.overrides);
    }
    if (patch.gates && typeof patch.gates === 'object') {
      p.gates = Object.assign({}, p.gates || {}, patch.gates);
    }
    if (typeof patch.demoSignoff === 'boolean') p.demoSignoff = patch.demoSignoff;
    if (typeof patch.liveApproved === 'boolean') p.liveApproved = patch.liveApproved;
    if (typeof patch.instructorNote === 'string') p.instructorNote = patch.instructorNote.slice(0, 600);
  }

  p.updatedAt = Date.now();
  return p;
}

async function upsertStudent(env, { id, name, role, code, username }) {
  const { hash, salt } = await hashCode(code);
  await env.DB.prepare(
    `INSERT INTO students (id, name, role, code_hash, code_salt, active, created_at, username)
     VALUES (?,?,?,?,?,1,?,?)
     ON CONFLICT(id) DO UPDATE SET name=excluded.name, role=excluded.role,
       code_hash=excluded.code_hash, code_salt=excluded.code_salt, active=1,
       username=excluded.username`
  ).bind(id, name, role || 'student', hash, salt, Date.now(), String(username).toLowerCase()).run();
}

async function writeProgress(env, studentId, displayName, patch, allowInstructorFields) {
  const row = await env.DB.prepare('SELECT data FROM progress WHERE student_id = ?').bind(studentId).first();
  let current = {};
  try { current = row ? JSON.parse(row.data) : {}; } catch (e) {}
  const next = mergeProgress(current, patch, allowInstructorFields);
  next.student = studentId;
  if (displayName) next.name = displayName;
  await env.DB.prepare(
    `INSERT INTO progress (student_id, data, updated_at) VALUES (?,?,?)
     ON CONFLICT(student_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
  ).bind(studentId, JSON.stringify(next), Date.now()).run();
  return next;
}

async function usernameTaken(env, username) {
  const row = await env.DB.prepare('SELECT id FROM students WHERE username = ?')
    .bind(String(username).toLowerCase()).first();
  return !!row;
}

/* ---------- public routes ---------- */

async function handleLogin(request, env) {
  const body = await request.json().catch(() => ({}));
  const username = String(body.username || '').trim().toLowerCase();
  const code = String(body.code || '');
  if (!username || !code) {
    return json({ error: 'Username and password are required.' }, 400, env, request);
  }

  // Indexed lookup, then exactly one PBKDF2. Constant cost regardless of how
  // many students exist — see the note on PBKDF2_ITERATIONS.
  const row = await env.DB.prepare(
    'SELECT id, name, role, code_hash, code_salt FROM students WHERE username = ? AND active = 1'
  ).bind(username).first();

  // Same message whether the username or the password was wrong, so the
  // response does not reveal which usernames exist.
  const GENERIC = 'Username or password not recognised.';
  if (!row) return json({ error: GENERIC }, 401, env, request);

  const attempt = await pbkdf2(code, row.code_salt);
  if (!safeEqual(attempt, row.code_hash)) return json({ error: GENERIC }, 401, env, request);

  const token = await newSession(env, row.id, row.name);
  return json({ token, user: { id: row.id, name: row.name, username: username,
                               seat: row.name, role: row.role } }, 200, env, request);
}

async function handleInviteLookup(token, env, request) {
  const row = await env.DB.prepare(
    'SELECT id, label, role, max_uses, uses, expires_at, revoked FROM invites WHERE token_hash = ?'
  ).bind(await sha256Hex(token)).first();

  if (!row || row.revoked) return json({ valid: false, reason: 'This invite link is not valid.' }, 200, env, request);
  if (row.expires_at && row.expires_at < Date.now())
    return json({ valid: false, reason: 'This invite link has expired.' }, 200, env, request);
  if (row.uses >= row.max_uses)
    return json({ valid: false, reason: 'This invite link has already been used.' }, 200, env, request);

  return json({ valid: true, label: row.label, role: row.role }, 200, env, request);
}

async function handleSignup(request, env) {
  const b = await request.json().catch(() => ({}));
  const token = String(b.token || '').trim();
  const name = String(b.name || '').trim().slice(0, 60);
  const username = String(b.username || '').trim().toLowerCase();
  const code = String(b.code || '');

  if (!name) return json({ error: 'Please enter your name.' }, 400, env, request);
  if (!USERNAME_RE.test(username)) {
    return json({ error: 'Username must be 3–32 characters: lowercase letters, numbers, dot, dash or underscore.' },
                400, env, request);
  }
  if (code.length < MIN_CODE_LENGTH)
    return json({ error: `Choose a password of at least ${MIN_CODE_LENGTH} characters.` }, 400, env, request);

  const inv = await env.DB.prepare(
    'SELECT id, label, role, max_uses, uses, expires_at, revoked FROM invites WHERE token_hash = ?'
  ).bind(await sha256Hex(token)).first();

  // These three checks exist for the ERROR MESSAGE only. The actual enforcement
  // is the conditional UPDATE below — see the note there.
  if (!inv || inv.revoked) return json({ error: 'This invite link is not valid.' }, 400, env, request);
  if (inv.expires_at && inv.expires_at < Date.now())
    return json({ error: 'This invite link has expired.' }, 400, env, request);
  if (inv.uses >= inv.max_uses)
    return json({ error: 'This invite link has already been used.' }, 400, env, request);

  // One indexed lookup. Two students may now share a password — that is normal
  // and safe, because the username identifies them. The UNIQUE index on
  // students.username is the real guarantee; this check is for a civil message.
  if (await usernameTaken(env, username)) {
    return json({ error: 'That username is taken. Please choose another.' }, 409, env, request);
  }

  /* CLAIM A SLOT ATOMICALLY, BEFORE creating anything.
     The earlier `uses >= max_uses` check cannot enforce the limit on its own:
     read-then-check-then-write is three statements, so two people submitting at
     the same instant both read uses=0, both pass the check, and both increment.
     A single-use link would issue two accounts.

     Putting the condition INSIDE the UPDATE makes the check and the increment
     one atomic operation. Exactly one of two simultaneous requests changes a
     row; the loser sees changes === 0 and is turned away.

     Revocation and expiry are re-tested here too, so a link revoked between the
     SELECT and this line cannot still be used. */
  const claim = await env.DB.prepare(
    `UPDATE invites SET uses = uses + 1
      WHERE id = ? AND uses < max_uses AND revoked = 0
        AND (expires_at IS NULL OR expires_at > ?)`
  ).bind(inv.id, Date.now()).run();

  if (!claim || !claim.meta || claim.meta.changes !== 1) {
    return json({ error: 'This invite link has already been used.' }, 409, env, request);
  }

  // From here the slot is spent. Anything that fails must hand it back, or a
  // failed signup silently burns a use and the instructor cannot tell why.
  const id = slugify(name) + '-' + randomHex(3);
  try {
    await upsertStudent(env, { id, name, role: inv.role, code, username });
  } catch (err) {
    await env.DB.prepare('UPDATE invites SET uses = uses - 1 WHERE id = ? AND uses > 0')
      .bind(inv.id).run();
    // Almost always the UNIQUE index on username: someone took it between our
    // check above and this insert. That is the same race, one table along.
    return json({ error: 'That username is taken. Please choose another.' }, 409, env, request);
  }

  await env.DB.prepare(
    'INSERT OR IGNORE INTO invite_uses (invite_id, student_id, used_at) VALUES (?,?,?)'
  ).bind(inv.id, id, Date.now()).run();

  const sessionToken = await newSession(env, id, name);
  return json({ token: sessionToken,
                user: { id, name, username, seat: name, role: inv.role } }, 200, env, request);
}

/* ---------- instructor admin routes ---------- */

async function listStudents(env, request) {
  const { results } = await env.DB.prepare(
    `SELECT st.id, st.name, st.username, st.role, st.active, st.created_at, p.data, p.updated_at
       FROM students st LEFT JOIN progress p ON p.student_id = st.id
      ORDER BY st.role DESC, st.name`
  ).all();
  const students = (results || []).map((r) => {
    let data = {};
    try { data = r.data ? JSON.parse(r.data) : {}; } catch (e) {}
    return {
      id: r.id, seat: r.name, name: data.name || r.name, username: r.username, role: r.role,
      active: !!r.active, createdAt: r.created_at,
      modules: data.modules || {}, drills: data.drills || {},
      updatedAt: r.updated_at || null
    };
  });
  return json({ students }, 200, env, request);
}

async function createStudent(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const name = String(b.name || '').trim();
  const code = String(b.code || '');
  const username = String(b.username || '').trim().toLowerCase();
  const role = b.role === 'instructor' ? 'instructor' : 'student';
  if (!name) return json({ error: 'Name is required.' }, 400, env, request);
  if (!USERNAME_RE.test(username)) {
    return json({ error: 'Username must be 3–32 characters: lowercase letters, numbers, dot, dash or underscore.' },
                400, env, request);
  }
  if (code.length < MIN_CODE_LENGTH)
    return json({ error: `Password must be at least ${MIN_CODE_LENGTH} characters.` }, 400, env, request);
  if (await usernameTaken(env, username)) {
    return json({ error: 'That username is taken.' }, 409, env, request);
  }

  const id = String(b.id || '').trim() || slugify(name) + '-' + randomHex(3);
  await upsertStudent(env, { id, name, role, code, username });
  return json({ ok: true, id, name, username, role }, 200, env, request);
}

async function revokeStudent(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  if (!id) return json({ error: 'id required.' }, 400, env, request);
  if (id === user.id) return json({ error: 'You cannot revoke your own account.' }, 400, env, request);
  await env.DB.prepare('UPDATE students SET active = 0 WHERE id = ?').bind(id).run();
  await env.DB.prepare('DELETE FROM sessions WHERE student_id = ?').bind(id).run();
  return json({ ok: true, revoked: id }, 200, env, request);
}

async function resetStudent(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  const code = String(b.code || '');
  if (!id) return json({ error: 'id required.' }, 400, env, request);
  if (code.length < MIN_CODE_LENGTH)
    return json({ error: `Code must be at least ${MIN_CODE_LENGTH} characters.` }, 400, env, request);
  const { hash, salt } = await hashCode(code);
  const res = await env.DB.prepare(
    'UPDATE students SET code_hash = ?, code_salt = ?, active = 1 WHERE id = ?'
  ).bind(hash, salt, id).run();
  if (!res.meta || !res.meta.changes) return json({ error: 'No such student.' }, 404, env, request);
  // Force them to sign in again with the new code.
  await env.DB.prepare('DELETE FROM sessions WHERE student_id = ?').bind(id).run();
  return json({ ok: true, id }, 200, env, request);
}

async function listInvites(env, request) {
  const { results } = await env.DB.prepare(
    `SELECT id, label, role, max_uses, uses, created_at, expires_at, revoked
       FROM invites ORDER BY created_at DESC`
  ).all();
  return json({ invites: results || [] }, 200, env, request);
}

async function createInvite(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const label = String(b.label || '').trim().slice(0, 80) || 'Student invite';
  const role = b.role === 'instructor' ? 'instructor' : 'student';
  const maxUses = Math.max(1, Math.min(200, parseInt(b.maxUses, 10) || 1));
  const days = Math.max(0, Math.min(365, parseInt(b.expiresDays, 10) || 14));

  const token = randomHex(24);
  const id = randomHex(5);
  await env.DB.prepare(
    `INSERT INTO invites (id, token_hash, label, role, max_uses, uses, created_by, created_at, expires_at, revoked)
     VALUES (?,?,?,?,?,0,?,?,?,0)`
  ).bind(id, await sha256Hex(token), label, role, maxUses, user.id, Date.now(),
         days > 0 ? Date.now() + days * 86400000 : null).run();

  // The raw token is returned exactly once and never stored.
  return json({ ok: true, id, token, label, role, maxUses, expiresDays: days }, 200, env, request);
}

async function revokeInvite(request, env) {
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  if (!id) return json({ error: 'id required.' }, 400, env, request);
  await env.DB.prepare('UPDATE invites SET revoked = 1 WHERE id = ?').bind(id).run();
  return json({ ok: true }, 200, env, request);
}

/* ---------- bootstrap (admin key) ---------- */

async function handleEnroll(request, env) {
  if (!env.ADMIN_KEY || request.headers.get('x-admin-key') !== env.ADMIN_KEY) {
    return json({ error: 'Unauthorised.' }, 401, env, request);
  }
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  const name = String(b.name || '').trim();
  const code = String(b.code || '').trim();
  const username = String(b.username || b.id || '').trim().toLowerCase();
  const role = b.role === 'instructor' ? 'instructor' : 'student';
  if (!id || !name || !code) return json({ error: 'id, name and code are required.' }, 400, env, request);
  if (!USERNAME_RE.test(username)) {
    return json({ error: 'username must be 3–32 chars: lowercase letters, numbers, dot, dash or underscore.' },
                400, env, request);
  }
  if (code.length < MIN_CODE_LENGTH)
    return json({ error: `Use a password of at least ${MIN_CODE_LENGTH} characters.` }, 400, env, request);

  await upsertStudent(env, { id, name, role, code, username });
  return json({ ok: true, id, name, username, role }, 200, env, request);
}

/* ---------- messages ----------

   One thread per student, the instructor at the other end of all of them. See
   the header of migrations/004_messages.sql for why there is no recipient
   column.

   THE ACCESS RULE, STATED ONCE: a student may read and write rows where
   student_id equals their own id. An instructor may read and write any. It is
   enforced here, in threadIdFor(), and nowhere else — every handler below goes
   through it, so there is one place to check rather than four. The UI never
   gets a say; hiding a button is not access control. */

const MAX_BODY = 4000;
const MAX_PER_DAY = 60;      // a civil ceiling, not a real rate limiter

/* Attachments. The browser compresses before sending (see assets/messages.js),
   so anything arriving near this ceiling did not come from our own UI. */
const MAX_IMAGE_BYTES = 600 * 1024;
const MAX_IMAGES_PER_MESSAGE = 3;

/* Magic bytes, checked on EVERY upload.

   The client re-encodes through a canvas, so in practice these are always JPEG.
   That is not a reason to trust them. Anything the Worker will later serve back
   under its own origin has to be proven an image HERE — a file that is actually
   HTML, served as HTML from the API origin, is script running with the API's
   origin, and the session token lives there.

   Detected type wins over anything the client claims the file is. */
function sniffImage(bytes) {
  if (bytes.length < 12) return null;
  if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) return 'image/jpeg';
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47 &&
      bytes[4] === 0x0D && bytes[5] === 0x0A && bytes[6] === 0x1A && bytes[7] === 0x0A) return 'image/png';
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return 'image/webp';
  return null;
}

/* base64 (with or without a data: prefix) to bytes. Returns null on anything
   that is not decodable, rather than throwing into the generic 500 handler. */
function decodeBase64Image(input) {
  let s = String(input || '');
  const comma = s.indexOf(',');
  if (s.startsWith('data:') && comma > 0) s = s.slice(comma + 1);
  s = s.replace(/\s+/g, '');
  if (!s || !/^[A-Za-z0-9+/]+={0,2}$/.test(s)) return null;
  let bin;
  try { bin = atob(s); } catch (e) { return null; }
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/* Which thread is this request allowed to touch? Returns null if it may not. */
function threadIdFor(user, requestedId) {
  const asked = String(requestedId || '').trim();
  if (user.role === 'instructor') return asked || null;   // instructor must name a student
  if (!asked || asked === user.id) return user.id;        // a student gets their own, always
  return null;
}

async function listMessages(user, url, env, request) {
  const threadId = threadIdFor(user, url.searchParams.get('studentId'));
  if (!threadId) {
    return json({ error: 'Which conversation?' }, user.role === 'instructor' ? 400 : 403, env, request);
  }

  const { results } = await env.DB.prepare(
    `SELECT id, sender, sender_name, body, created_at, read_at, deleted_at, deleted_by
       FROM messages WHERE student_id = ? ORDER BY created_at ASC LIMIT 500`
  ).bind(threadId).all();

  /* Attachment METADATA only — never `data`. The bytes are fetched one at a
     time from /api/attachment/<id>, so opening a thread with twenty
     screenshots in it does not mean downloading twenty screenshots. */
  const att = await env.DB.prepare(
    `SELECT id, message_id, mime, bytes, width, height
       FROM attachments WHERE student_id = ? ORDER BY created_at ASC LIMIT 500`
  ).bind(threadId).all();
  const byMessage = {};
  (att.results || []).forEach((a) => {
    (byMessage[a.message_id] = byMessage[a.message_id] || []).push({
      id: a.id, mime: a.mime, bytes: a.bytes, width: a.width, height: a.height
    });
  });
  (results || []).forEach((m) => { m.attachments = byMessage[m.id] || []; });

  /* Reading the thread marks the OTHER side's messages read. Doing it here
     rather than in a separate call means an unread badge cannot get stuck
     showing a message the person has plainly already seen. */
  const theirs = user.role === 'instructor' ? 'student' : 'instructor';
  await env.DB.prepare(
    `UPDATE messages SET read_at = ?
      WHERE student_id = ? AND sender = ? AND read_at IS NULL AND deleted_at IS NULL`
  ).bind(Date.now(), threadId, theirs).run();

  return json({ messages: results || [], studentId: threadId }, 200, env, request);
}

async function sendMessage(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const threadId = threadIdFor(user, b.studentId);
  if (!threadId) {
    return json({ error: 'Which conversation?' }, user.role === 'instructor' ? 400 : 403, env, request);
  }

  const body = String(b.body || '').trim().slice(0, MAX_BODY);

  /* Validate every image BEFORE writing anything. A message that half-sent —
     text stored, picture rejected — is worse than one that did not send. */
  const incoming = Array.isArray(b.images) ? b.images.slice(0, MAX_IMAGES_PER_MESSAGE) : [];
  const images = [];
  for (const img of incoming) {
    const bytes = decodeBase64Image(img && img.data);
    if (!bytes) return json({ error: 'That picture could not be read.' }, 400, env, request);
    if (bytes.length > MAX_IMAGE_BYTES) {
      return json({ error: 'That picture is too large. The limit is ' +
        Math.round(MAX_IMAGE_BYTES / 1024) + ' KB after compression.' }, 413, env, request);
    }
    const mime = sniffImage(bytes);
    if (!mime) return json({ error: 'Only JPEG, PNG and WebP pictures can be sent.' }, 415, env, request);
    images.push({
      bytes, mime,
      width: Math.max(0, Math.min(20000, parseInt(img.width, 10) || 0)) || null,
      height: Math.max(0, Math.min(20000, parseInt(img.height, 10) || 0)) || null
    });
  }

  if (!body && !images.length) return json({ error: 'The message is empty.' }, 400, env, request);

  // An instructor writing to a student who does not exist is a typo, not a thread.
  const target = await env.DB.prepare('SELECT id FROM students WHERE id = ? AND active = 1')
    .bind(threadId).first();
  if (!target) return json({ error: 'No such student.' }, 404, env, request);

  const since = Date.now() - 86400000;
  const recent = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM messages WHERE student_id = ? AND sender = ? AND created_at > ?`
  ).bind(threadId, user.role === 'instructor' ? 'instructor' : 'student', since).first();
  if (recent && recent.n >= MAX_PER_DAY) {
    return json({ error: 'That is a lot of messages in one day. Try again tomorrow.' }, 429, env, request);
  }

  const id = randomHex(8);
  const now = Date.now();
  await env.DB.prepare(
    `INSERT INTO messages (id, student_id, sender, sender_name, body, created_at, read_at)
     VALUES (?,?,?,?,?,?,NULL)`
  ).bind(id, threadId, user.role === 'instructor' ? 'instructor' : 'student',
         String(user.name || 'Unknown').slice(0, 80), body, now).run();

  const saved = [];
  for (const img of images) {
    const aid = randomHex(8);
    await env.DB.prepare(
      `INSERT INTO attachments (id, message_id, student_id, mime, bytes, width, height, data, created_at)
       VALUES (?,?,?,?,?,?,?,?,?)`
    /* .buffer, NOT the Uint8Array view.

       Binding the view stores the ARRAY'S TO-STRING — a 72-byte PNG came back
       as the 152-character text "137,80,78,71,13,10,26,10,7,7,7,…". Every
       picture would have been silently corrupted, with a successful-looking
       upload and a broken image at the other end. Caught only by comparing the
       bytes that came back against the bytes that went in, which is why that
       check exists rather than a check that the request returned 200. */
    ).bind(aid, id, threadId, img.mime, img.bytes.length, img.width, img.height, img.bytes.buffer, now).run();
    saved.push({ id: aid, mime: img.mime, bytes: img.bytes.length, width: img.width, height: img.height });
  }

  return json({ ok: true, message: { id, sender: user.role === 'instructor' ? 'instructor' : 'student',
    sender_name: user.name, body, created_at: now, read_at: null, attachments: saved } }, 200, env, request);
}

/* Serve one image.

   NOT a public URL. There is no signed-link scheme and no unauthenticated
   read: the caller presents their bearer token like any other API call, and
   the same threadIdFor() rule decides whether they may have it. That is why
   the front end fetches images with Auth.call and turns them into blob URLs
   rather than putting the API path straight into an <img src>, which could not
   carry the token.

   The response headers matter as much as the access check. Content-Type comes
   from the SNIFFED type, never from anything the uploader said; nosniff stops
   a browser second-guessing it; the CSP makes the response inert even if some
   future bug let a non-image through; and attachment disposition means a
   browser that ignored all of the above would still download rather than
   render it. */
async function serveAttachment(user, id, env, request) {
  const row = await env.DB.prepare(
    'SELECT student_id, mime, data FROM attachments WHERE id = ?'
  ).bind(String(id || '')).first();
  if (!row) return json({ error: 'Not found.' }, 404, env, request);

  const allowed = threadIdFor(user, row.student_id);
  if (allowed !== row.student_id) return json({ error: 'Not yours.' }, 403, env, request);

  const mime = ['image/jpeg', 'image/png', 'image/webp'].includes(row.mime) ? row.mime : 'application/octet-stream';

  /* D1 hands a BLOB back as an ArrayBuffer, but has returned a plain number
     array in some runtimes. Normalise rather than assume — passing an Array to
     Response() would serialise it as text and ship a broken image. */
  let data = row.data;
  if (Array.isArray(data)) data = Uint8Array.from(data);

  return new Response(data, {
    status: 200,
    headers: {
      'Content-Type': mime,
      'Content-Disposition': 'attachment',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; sandbox",
      'Cache-Control': 'private, max-age=86400',
      ...corsHeaders(env, request)
    }
  });
}

/* ---------- deletion ----------

   WHO MAY REMOVE WHAT, in one place because there are two endpoints and they
   must not drift:

     A student  — their own messages, in their own thread. Nothing else. They
                  cannot remove something the instructor sent them, which would
                  let a student quietly delete feedback they did not like.
     Instructor — anything, in any thread. They are the authority here, and a
                  student sending something that should not be on the platform
                  is exactly the case this has to cover.

   There is deliberately NO time limit on a student unsending. The usual reason
   a screenshot has to go is that it showed an account balance or a real name,
   and that reason does not expire after five minutes. */
async function messageIfDeletable(user, messageId, env) {
  const row = await env.DB.prepare(
    'SELECT id, student_id, sender, deleted_at FROM messages WHERE id = ?'
  ).bind(String(messageId || '')).first();
  if (!row) return { status: 404, error: 'No such message.' };
  if (threadIdFor(user, row.student_id) !== row.student_id) {
    return { status: 403, error: 'Not yours.' };
  }
  if (user.role !== 'instructor' && row.sender !== 'student') {
    return { status: 403, error: 'You can only remove your own messages.' };
  }
  return { row };
}

async function deleteMessage(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const check = await messageIfDeletable(user, b.messageId, env);
  if (check.error) return json({ error: check.error }, check.status, env, request);
  const row = check.row;

  /* Bytes first. If the tombstone write failed after this, the worst case is a
     message that still reads as present but has lost its picture — which is
     the harmless direction. The other order can leave orphaned pixels behind
     for a message that claims to be gone. */
  await env.DB.prepare('DELETE FROM attachments WHERE message_id = ?').bind(row.id).run();
  await env.DB.prepare(
    `UPDATE messages SET body = '', deleted_at = ?, deleted_by = ? WHERE id = ?`
  ).bind(Date.now(), user.role === 'instructor' ? 'instructor' : 'student', row.id).run();

  return json({ ok: true, messageId: row.id }, 200, env, request);
}

/* Remove one picture and leave the message that carried it. */
async function deleteAttachment(user, request, env) {
  const b = await request.json().catch(() => ({}));
  const att = await env.DB.prepare(
    'SELECT id, message_id FROM attachments WHERE id = ?'
  ).bind(String(b.attachmentId || '')).first();
  if (!att) return json({ error: 'No such picture.' }, 404, env, request);

  const check = await messageIfDeletable(user, att.message_id, env);
  if (check.error) return json({ error: check.error }, check.status, env, request);

  await env.DB.prepare('DELETE FROM attachments WHERE id = ?').bind(att.id).run();
  return json({ ok: true, attachmentId: att.id }, 200, env, request);
}

/* How many messages are waiting for whoever is asking. Cheap enough to poll. */
async function unreadCount(user, env, request) {
  if (user.role === 'instructor') {
    const { results } = await env.DB.prepare(
      `SELECT student_id, COUNT(*) AS n FROM messages
        WHERE sender = 'student' AND read_at IS NULL AND deleted_at IS NULL
        GROUP BY student_id`
    ).all();
    const byStudent = {};
    let total = 0;
    (results || []).forEach((r) => { byStudent[r.student_id] = r.n; total += r.n; });
    return json({ unread: total, byStudent }, 200, env, request);
  }
  const row = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM messages
      WHERE student_id = ? AND sender = 'instructor' AND read_at IS NULL AND deleted_at IS NULL`
  ).bind(user.id).first();
  return json({ unread: (row && row.n) || 0 }, 200, env, request);
}

/* Instructor's list of conversations: last message and unread count per student,
   including students who have never written, so starting one is one click. */
async function listThreads(env, request) {
  const { results } = await env.DB.prepare(
    `SELECT st.id, st.name, st.username,
            (SELECT body       FROM messages m WHERE m.student_id = st.id AND m.deleted_at IS NULL ORDER BY m.created_at DESC LIMIT 1) AS last_body,
            (SELECT sender     FROM messages m WHERE m.student_id = st.id AND m.deleted_at IS NULL ORDER BY m.created_at DESC LIMIT 1) AS last_sender,
            (SELECT created_at FROM messages m WHERE m.student_id = st.id AND m.deleted_at IS NULL ORDER BY m.created_at DESC LIMIT 1) AS last_at,
            (SELECT COUNT(*)   FROM messages m WHERE m.student_id = st.id AND m.sender = 'student' AND m.read_at IS NULL AND m.deleted_at IS NULL) AS unread
       FROM students st
      WHERE st.role != 'instructor' AND st.active = 1
      ORDER BY unread DESC, last_at DESC, st.name`
  ).all();
  return json({ threads: results || [] }, 200, env, request);
}

/* ---------- entry ---------- */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env, request) });
    }
    if (path === '/' || path === '/api') {
      return json({ service: 'n1-academy-api', ok: true }, 200, env, request);
    }
    if (!env.DB) return json({ error: 'Database binding missing.' }, 500, env, request);

    try {
      // Public
      if (path === '/api/login' && request.method === 'POST') return handleLogin(request, env);
      if (path === '/api/signup' && request.method === 'POST') return handleSignup(request, env);
      if (path.startsWith('/api/invite/') && request.method === 'GET') {
        return handleInviteLookup(decodeURIComponent(path.slice('/api/invite/'.length)), env, request);
      }
      // Bootstrap
      if (path === '/api/enroll' && request.method === 'POST') return handleEnroll(request, env);

      // Everything below needs a session.
      const user = await bearerUser(request, env);
      if (!user) return json({ error: 'Not signed in.' }, 401, env, request);

      if (path === '/api/me') return json({ user }, 200, env, request);
      if (path === '/api/logout' && request.method === 'POST') {
        await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(user.tokenHash).run();
        return json({ ok: true }, 200, env, request);
      }
      if (path === '/api/progress' && request.method === 'GET') {
        const row = await env.DB.prepare('SELECT data FROM progress WHERE student_id = ?').bind(user.id).first();
        let data = {};
        try { data = row ? JSON.parse(row.data) : {}; } catch (e) {}
        return json({ progress: data }, 200, env, request);
      }
      if (path === '/api/progress' && request.method === 'POST') {
        const patch = await request.json().catch(() => ({}));
        // A student writing their own progress can never set instructor fields.
        const next = await writeProgress(env, user.id, user.name, patch, false);
        return json({ progress: next }, 200, env, request);
      }

      /* Messaging. Deliberately ABOVE the instructor-only gate: both sides use
         the same three routes, and who may see which thread is decided by
         threadIdFor(), not by which side of a gate the route sits on. */
      if (path === '/api/messages' && request.method === 'GET') return listMessages(user, url, env, request);
      if (path === '/api/messages' && request.method === 'POST') return sendMessage(user, request, env);
      if (path === '/api/messages/unread' && request.method === 'GET') return unreadCount(user, env, request);
      if (path === '/api/messages/delete' && request.method === 'POST') return deleteMessage(user, request, env);
      if (path === '/api/attachment/delete' && request.method === 'POST') return deleteAttachment(user, request, env);
      if (path.startsWith('/api/attachment/') && request.method === 'GET') {
        return serveAttachment(user, decodeURIComponent(path.slice('/api/attachment/'.length)), env, request);
      }

      // Instructor-only from here.
      const admin = path === '/api/roster' || path.startsWith('/api/admin/');
      if (admin && user.role !== 'instructor') {
        return json({ error: 'Instructor only.' }, 403, env, request);
      }

      if (path === '/api/roster' || (path === '/api/admin/students' && request.method === 'GET')) {
        return listStudents(env, request);
      }
      if (path === '/api/admin/progress' && request.method === 'POST') {
        // Instructor helping a specific student: unlock a step, sign off the
        // demo period, approve live, or leave a note. Recorded, never silent.
        const b = await request.json().catch(() => ({}));
        const target = String(b.studentId || '').trim();
        if (!target) return json({ error: 'studentId required.' }, 400, env, request);
        const exists = await env.DB.prepare('SELECT name FROM students WHERE id = ?').bind(target).first();
        if (!exists) return json({ error: 'No such student.' }, 404, env, request);
        const next = await writeProgress(env, target, exists.name, b.patch || {}, true);
        return json({ ok: true, progress: next }, 200, env, request);
      }
      if (path === '/api/admin/students' && request.method === 'POST') return createStudent(user, request, env);
      if (path === '/api/admin/revoke' && request.method === 'POST') return revokeStudent(user, request, env);
      if (path === '/api/admin/reset' && request.method === 'POST') return resetStudent(user, request, env);
      if (path === '/api/admin/invites' && request.method === 'GET') return listInvites(env, request);
      if (path === '/api/admin/invites' && request.method === 'POST') return createInvite(user, request, env);
      if (path === '/api/admin/invites/revoke' && request.method === 'POST') return revokeInvite(request, env);
      if (path === '/api/admin/threads' && request.method === 'GET') return listThreads(env, request);

      return json({ error: 'Not found.' }, 404, env, request);
    } catch (err) {
      return json({ error: 'Server error.', detail: String((err && err.message) || err) }, 500, env, request);
    }
  }
};
