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

function mergeProgress(current, patch) {
  const p = current && typeof current === 'object' ? current : {};
  p.modules = p.modules || {};
  p.drills = p.drills || {};
  if (patch && patch.module) {
    const key = String(patch.module);
    const m = p.modules[key] || {};
    if (patch.visited) m.visited = true;
    if (typeof patch.quiz === 'number') m.quiz = Math.max(m.quiz || 0, patch.quiz);
    p.modules[key] = m;
  }
  if (patch && patch.drill) {
    const prev = p.drills[patch.drill] || {};
    p.drills[patch.drill] = { passed: !!(patch.passed || prev.passed), at: Date.now() };
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

  if (!inv || inv.revoked) return json({ error: 'This invite link is not valid.' }, 400, env, request);
  if (inv.expires_at && inv.expires_at < Date.now())
    return json({ error: 'This invite link has expired.' }, 400, env, request);
  if (inv.uses >= inv.max_uses)
    return json({ error: 'This invite link has already been used.' }, 400, env, request);

  // One indexed lookup. Two students may now share a password — that is normal
  // and safe, because the username identifies them.
  if (await usernameTaken(env, username)) {
    return json({ error: 'That username is taken. Please choose another.' }, 409, env, request);
  }

  const id = slugify(name) + '-' + randomHex(3);
  await upsertStudent(env, { id, name, role: inv.role, code, username });
  await env.DB.prepare('UPDATE invites SET uses = uses + 1 WHERE id = ?').bind(inv.id).run();
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
        const row = await env.DB.prepare('SELECT data FROM progress WHERE student_id = ?').bind(user.id).first();
        let current = {};
        try { current = row ? JSON.parse(row.data) : {}; } catch (e) {}
        const next = mergeProgress(current, patch);
        next.student = user.id; next.name = user.name;
        await env.DB.prepare(
          `INSERT INTO progress (student_id, data, updated_at) VALUES (?,?,?)
           ON CONFLICT(student_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
        ).bind(user.id, JSON.stringify(next), Date.now()).run();
        return json({ progress: next }, 200, env, request);
      }

      // Instructor-only from here.
      const admin = path === '/api/roster' || path.startsWith('/api/admin/');
      if (admin && user.role !== 'instructor') {
        return json({ error: 'Instructor only.' }, 403, env, request);
      }

      if (path === '/api/roster' || (path === '/api/admin/students' && request.method === 'GET')) {
        return listStudents(env, request);
      }
      if (path === '/api/admin/students' && request.method === 'POST') return createStudent(user, request, env);
      if (path === '/api/admin/revoke' && request.method === 'POST') return revokeStudent(user, request, env);
      if (path === '/api/admin/reset' && request.method === 'POST') return resetStudent(user, request, env);
      if (path === '/api/admin/invites' && request.method === 'GET') return listInvites(env, request);
      if (path === '/api/admin/invites' && request.method === 'POST') return createInvite(user, request, env);
      if (path === '/api/admin/invites/revoke' && request.method === 'POST') return revokeInvite(request, env);

      return json({ error: 'Not found.' }, 404, env, request);
    } catch (err) {
      return json({ error: 'Server error.', detail: String((err && err.message) || err) }, 500, env, request);
    }
  }
};
