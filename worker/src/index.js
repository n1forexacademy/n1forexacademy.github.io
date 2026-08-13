/* N1 Forex Academy — auth + progress API.
   Cloudflare Worker, bound to a D1 database. Never sleeps, no cold start.

   The frontend stays on GitHub Pages; this Worker does the two things a static
   host cannot: verify a credential server-side, and keep progress centrally.

   Endpoints
     POST /api/login      {name, code}            -> {token, user}
     POST /api/logout     Bearer                  -> {ok}
     GET  /api/me         Bearer                  -> {user}
     GET  /api/progress   Bearer                  -> {progress}
     POST /api/progress   Bearer {patch}          -> {progress}
     GET  /api/roster     Bearer (instructor)     -> {students:[…]}
     POST /api/enroll     x-admin-key {id,name,code,role}
     POST /api/revoke     x-admin-key {id}
*/

const PBKDF2_ITERATIONS = 150000;
const SESSION_DAYS = 30;

/* ---------- helpers ---------- */

const enc = new TextEncoder();

function b64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}
function randomHex(n) {
  const b = crypto.getRandomValues(new Uint8Array(n));
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
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

// Constant-time-ish comparison. Both values are base64 of equal length here.
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function corsHeaders(env, request) {
  // Only the configured origins may call this API from a browser.
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
  return {
    id: row.student_id,
    name: row.display_name || row.name,
    seat: row.name,
    role: row.role,
    tokenHash: hash
  };
}

// Shallow-merges a progress patch. Mirrors the shape the frontend uses so that
// adding a module or drill never needs a schema change.
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

/* ---------- routes ---------- */

async function handleLogin(request, env) {
  const body = await request.json().catch(() => ({}));
  const code = String(body.code || '').trim();
  const name = String(body.name || '').trim().slice(0, 60);
  if (!code) return json({ error: 'Access code required.' }, 400, env, request);

  // Check every active student. Small cohort, so a full scan is fine and it
  // keeps timing roughly uniform whether or not a code matches.
  const { results } = await env.DB.prepare(
    'SELECT id, name, role, code_hash, code_salt FROM students WHERE active = 1'
  ).all();

  let matched = null;
  for (const row of results || []) {
    const attempt = await pbkdf2(code, row.code_salt);
    if (safeEqual(attempt, row.code_hash)) { matched = row; break; }
  }
  if (!matched) return json({ error: 'That code was not recognised.' }, 401, env, request);

  const token = randomHex(32);
  const now = Date.now();
  await env.DB.prepare(
    'INSERT INTO sessions (token_hash, student_id, display_name, created_at, expires_at) VALUES (?,?,?,?,?)'
  ).bind(await sha256Hex(token), matched.id, name || matched.name, now,
         now + SESSION_DAYS * 86400000).run();

  // Housekeeping: drop anything already expired.
  await env.DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(now).run();

  return json({
    token,
    user: { id: matched.id, name: name || matched.name, seat: matched.name, role: matched.role }
  }, 200, env, request);
}

async function handleGetProgress(user, env, request) {
  const row = await env.DB.prepare('SELECT data FROM progress WHERE student_id = ?')
    .bind(user.id).first();
  let data = {};
  try { data = row ? JSON.parse(row.data) : {}; } catch (e) { data = {}; }
  return json({ progress: data }, 200, env, request);
}

async function handlePostProgress(user, request, env) {
  const patch = await request.json().catch(() => ({}));
  const row = await env.DB.prepare('SELECT data FROM progress WHERE student_id = ?')
    .bind(user.id).first();
  let current = {};
  try { current = row ? JSON.parse(row.data) : {}; } catch (e) { current = {}; }

  const next = mergeProgress(current, patch);
  next.student = user.id;
  next.name = user.name;

  await env.DB.prepare(
    `INSERT INTO progress (student_id, data, updated_at) VALUES (?,?,?)
     ON CONFLICT(student_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
  ).bind(user.id, JSON.stringify(next), Date.now()).run();

  return json({ progress: next }, 200, env, request);
}

async function handleRoster(user, env, request) {
  if (user.role !== 'instructor') return json({ error: 'Instructor only.' }, 403, env, request);
  const { results } = await env.DB.prepare(
    `SELECT st.id, st.name, st.role, st.active, p.data, p.updated_at
       FROM students st LEFT JOIN progress p ON p.student_id = st.id
      WHERE st.role = 'student'
      ORDER BY st.name`
  ).all();
  const students = (results || []).map((r) => {
    let data = {};
    try { data = r.data ? JSON.parse(r.data) : {}; } catch (e) {}
    return {
      id: r.id, seat: r.name, active: !!r.active,
      name: data.name || r.name,
      modules: data.modules || {}, drills: data.drills || {},
      updatedAt: r.updated_at || null
    };
  });
  return json({ students }, 200, env, request);
}

async function handleEnroll(request, env) {
  if (!env.ADMIN_KEY || request.headers.get('x-admin-key') !== env.ADMIN_KEY) {
    return json({ error: 'Unauthorised.' }, 401, env, request);
  }
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  const name = String(b.name || '').trim();
  const code = String(b.code || '').trim();
  const role = b.role === 'instructor' ? 'instructor' : 'student';
  if (!id || !name || !code) return json({ error: 'id, name and code are required.' }, 400, env, request);
  if (code.length < 8) return json({ error: 'Use a code of at least 8 characters.' }, 400, env, request);

  const salt = b64(crypto.getRandomValues(new Uint8Array(16)));
  const hash = await pbkdf2(code, salt);
  await env.DB.prepare(
    `INSERT INTO students (id, name, role, code_hash, code_salt, active, created_at)
     VALUES (?,?,?,?,?,1,?)
     ON CONFLICT(id) DO UPDATE SET name=excluded.name, role=excluded.role,
       code_hash=excluded.code_hash, code_salt=excluded.code_salt, active=1`
  ).bind(id, name, role, hash, salt, Date.now()).run();

  return json({ ok: true, id, name, role }, 200, env, request);
}

async function handleRevoke(request, env) {
  if (!env.ADMIN_KEY || request.headers.get('x-admin-key') !== env.ADMIN_KEY) {
    return json({ error: 'Unauthorised.' }, 401, env, request);
  }
  const b = await request.json().catch(() => ({}));
  const id = String(b.id || '').trim();
  if (!id) return json({ error: 'id required.' }, 400, env, request);
  await env.DB.prepare('UPDATE students SET active = 0 WHERE id = ?').bind(id).run();
  await env.DB.prepare('DELETE FROM sessions WHERE student_id = ?').bind(id).run();
  return json({ ok: true, revoked: id }, 200, env, request);
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
    if (!env.DB) {
      return json({ error: 'Database binding missing. Check wrangler.toml.' }, 500, env, request);
    }

    try {
      if (path === '/api/login' && request.method === 'POST') return handleLogin(request, env);
      if (path === '/api/enroll' && request.method === 'POST') return handleEnroll(request, env);
      if (path === '/api/revoke' && request.method === 'POST') return handleRevoke(request, env);

      // Everything below needs a valid session.
      const user = await bearerUser(request, env);
      if (!user) return json({ error: 'Not signed in.' }, 401, env, request);

      if (path === '/api/me') return json({ user }, 200, env, request);
      if (path === '/api/logout' && request.method === 'POST') {
        await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(user.tokenHash).run();
        return json({ ok: true }, 200, env, request);
      }
      if (path === '/api/progress' && request.method === 'GET') return handleGetProgress(user, env, request);
      if (path === '/api/progress' && request.method === 'POST') return handlePostProgress(user, request, env);
      if (path === '/api/roster') return handleRoster(user, env, request);

      return json({ error: 'Not found.' }, 404, env, request);
    } catch (err) {
      return json({ error: 'Server error.', detail: String(err && err.message || err) }, 500, env, request);
    }
  }
};
