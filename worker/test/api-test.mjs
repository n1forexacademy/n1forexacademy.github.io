/* N1 Forex Academy — backend test suite.
   Runs against the LIVE deployed Worker. Creates its own throwaway data and
   deletes it afterwards, so it is safe to run against production.

   Usage:
     node test/api-test.mjs <API_BASE> <TEST_INSTRUCTOR_CODE> <INVITE_TOKEN>

   The caller seeds a temporary instructor and invite via `wrangler d1 execute`
   (see test/run-tests.sh) because creating either normally requires a session
   that does not exist yet. */

const [API, INSTRUCTOR_CODE, INVITE_TOKEN] = process.argv.slice(2);
if (!API || !INSTRUCTOR_CODE || !INVITE_TOKEN) {
  console.error('usage: node api-test.mjs <API_BASE> <INSTRUCTOR_CODE> <INVITE_TOKEN>');
  process.exit(2);
}

let pass = 0, fail = 0;
const failures = [];

function check(name, condition, detail) {
  if (condition) { pass++; console.log(`  PASS  ${name}`); }
  else { fail++; failures.push(name + (detail ? ` — ${detail}` : '')); console.log(`  FAIL  ${name}${detail ? ' — ' + detail : ''}`); }
}

async function call(path, { method = 'GET', body, token, adminKey, origin } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (adminKey) headers['x-admin-key'] = adminKey;
  if (origin) headers.Origin = origin;
  const res = await fetch(API + path, {
    method, headers, body: body ? JSON.stringify(body) : undefined
  });
  let data = null;
  try { data = await res.json(); } catch {}
  return { status: res.status, data, headers: res.headers };
}

const rnd = () => Math.random().toString(36).slice(2, 10);

console.log('\n=== N1 Academy backend tests ===\n');

/* ---------- 1. health & auth basics ---------- */
console.log('1. Health and authentication');
{
  const r = await call('/');
  check('health endpoint responds', r.status === 200 && r.data?.ok === true, `status ${r.status}`);

  const bad = await call('/api/login', { method: 'POST', body: { username: 'nobody-here', code: 'not-a-real-code-at-all' } });
  check('wrong code rejected with 401', bad.status === 401, `got ${bad.status}`);

  const noAuth = await call('/api/progress');
  check('progress requires a session', noAuth.status === 401, `got ${noAuth.status}`);

  const badToken = await call('/api/progress', { token: 'forged-token-value' });
  check('forged bearer token rejected', badToken.status === 401, `got ${badToken.status}`);

  const noKey = await call('/api/enroll', { method: 'POST', body: { id: 'x', name: 'x', code: 'abcdefgh' } });
  check('bootstrap enroll requires admin key', noKey.status === 401, `got ${noKey.status}`);
}

/* ---------- 2. instructor session ---------- */
console.log('\n2. Instructor session');
let instructorToken = null;
{
  const r = await call('/api/login', { method: 'POST', body: { username: 'test-instructor', code: INSTRUCTOR_CODE } });
  check('instructor can sign in', r.status === 200 && !!r.data?.token, `status ${r.status}`);
  instructorToken = r.data?.token;

  const me = await call('/api/me', { token: instructorToken });
  check('session reports instructor role', me.data?.user?.role === 'instructor', JSON.stringify(me.data?.user));

  const roster = await call('/api/admin/students', { token: instructorToken });
  check('instructor can list students', roster.status === 200 && Array.isArray(roster.data?.students), `status ${roster.status}`);
}

/* ---------- 3. invite redemption ---------- */
console.log('\n3. Invite links and signup');
let studentToken = null, studentId = null;
const studentPassword = 'test-pw-' + rnd();
const studentUser = 'test-stu-' + rnd();
{
  const look = await call('/api/invite/' + INVITE_TOKEN);
  check('valid invite reports valid', look.data?.valid === true, JSON.stringify(look.data));

  const bogus = await call('/api/invite/definitely-not-a-token');
  check('unknown invite reports invalid', bogus.data?.valid === false, JSON.stringify(bogus.data));

  const short = await call('/api/signup', { method: 'POST', body: { token: INVITE_TOKEN, name: 'Too Short', username: 'test-short', code: 'abc' } });
  check('signup rejects short password', short.status === 400, `got ${short.status}`);

  const noName = await call('/api/signup', { method: 'POST', body: { token: INVITE_TOKEN, name: '', username: 'test-noname', code: 'longenough123' } });
  check('signup rejects empty name', noName.status === 400, `got ${noName.status}`);

  const ok = await call('/api/signup', { method: 'POST', body: { token: INVITE_TOKEN, name: 'Test Student', username: studentUser, code: studentPassword } });
  check('signup succeeds with a valid invite', ok.status === 200 && !!ok.data?.token, JSON.stringify(ok.data));
  studentToken = ok.data?.token;
  studentId = ok.data?.user?.id;

  const reuse = await call('/api/signup', { method: 'POST', body: { token: INVITE_TOKEN, name: 'Second Person', username: 'test-second', code: 'another-pw-' + rnd() } });
  check('single-use invite cannot be reused', reuse.status === 400, `got ${reuse.status}`);
}

/* ---------- 4. privilege separation ---------- */
console.log('\n4. Privilege separation');
{
  const asStudent = await call('/api/admin/students', { token: studentToken });
  check('student blocked from admin student list', asStudent.status === 403, `got ${asStudent.status}`);

  const invites = await call('/api/admin/invites', { token: studentToken });
  check('student blocked from invite list', invites.status === 403, `got ${invites.status}`);

  const create = await call('/api/admin/students', { method: 'POST', token: studentToken, body: { name: 'Sneaky', username: 'test-sneaky', code: 'abcdefgh' } });
  check('student cannot create accounts', create.status === 403, `got ${create.status}`);

  const revoke = await call('/api/admin/revoke', { method: 'POST', token: studentToken, body: { id: 'instructor' } });
  check('student cannot revoke anyone', revoke.status === 403, `got ${revoke.status}`);
}

/* ---------- 5. progress storage and isolation ---------- */
console.log('\n5. Progress storage');
{
  await call('/api/progress', { method: 'POST', token: studentToken, body: { module: 3, visited: true } });
  await call('/api/progress', { method: 'POST', token: studentToken, body: { module: 3, quiz: 83 } });
  await call('/api/progress', { method: 'POST', token: studentToken, body: { drill: 'position-sizing', passed: true } });

  const got = await call('/api/progress', { token: studentToken });
  const p = got.data?.progress || {};
  check('module visit persisted', p.modules?.['3']?.visited === true, JSON.stringify(p.modules));
  check('quiz score persisted', p.modules?.['3']?.quiz === 83, JSON.stringify(p.modules));
  check('drill pass persisted', p.drills?.['position-sizing']?.passed === true, JSON.stringify(p.drills));

  // A lower score must not overwrite a higher one.
  await call('/api/progress', { method: 'POST', token: studentToken, body: { module: 3, quiz: 40 } });
  const after = await call('/api/progress', { token: studentToken });
  check('lower quiz score does not overwrite a higher one', after.data?.progress?.modules?.['3']?.quiz === 83,
        'quiz = ' + after.data?.progress?.modules?.['3']?.quiz);

  // Progress must survive a fresh session — proves it is server-side, not local.
  const relogin = await call('/api/login', { method: 'POST', body: { username: studentUser, code: studentPassword } });
  const fresh = await call('/api/progress', { token: relogin.data?.token });
  check('progress survives a new session on a different client',
        fresh.data?.progress?.modules?.['3']?.quiz === 83, JSON.stringify(fresh.data?.progress?.modules));

  // The instructor's own progress must be untouched by the student's writes.
  const instrProgress = await call('/api/progress', { token: instructorToken });
  check('progress is isolated between accounts',
        !instrProgress.data?.progress?.modules?.['3'], JSON.stringify(instrProgress.data?.progress?.modules));
}

/* ---------- 6. instructor sees student progress ---------- */
console.log('\n6. Central roster');
{
  const roster = await call('/api/admin/students', { token: instructorToken });
  const found = (roster.data?.students || []).find((s) => s.id === studentId);
  check('student appears in the instructor roster', !!found, 'id ' + studentId);
  check('roster shows the quiz score', found?.modules?.['3']?.quiz === 83, JSON.stringify(found?.modules));
  check('roster shows the drill pass', found?.drills?.['position-sizing']?.passed === true, JSON.stringify(found?.drills));
}

/* ---------- 7. admin actions ---------- */
console.log('\n7. Admin actions');
{
  const newCode = 'reset-pw-' + rnd();
  const reset = await call('/api/admin/reset', { method: 'POST', token: instructorToken, body: { id: studentId, code: newCode } });
  check('instructor can reset a student code', reset.status === 200, `got ${reset.status}`);

  const oldFails = await call('/api/login', { method: 'POST', body: { username: studentUser, code: studentPassword } });
  check('old code stops working after reset', oldFails.status === 401, `got ${oldFails.status}`);

  const newWorks = await call('/api/login', { method: 'POST', body: { username: studentUser, code: newCode } });
  check('new code works after reset', newWorks.status === 200, `got ${newWorks.status}`);

  const shortReset = await call('/api/admin/reset', { method: 'POST', token: instructorToken, body: { id: studentId, code: 'abc' } });
  check('reset rejects a short code', shortReset.status === 400, `got ${shortReset.status}`);

  const rev = await call('/api/admin/revoke', { method: 'POST', token: instructorToken, body: { id: studentId } });
  check('instructor can revoke a student', rev.status === 200, `got ${rev.status}`);

  const afterRevoke = await call('/api/login', { method: 'POST', body: { username: studentUser, code: newCode } });
  check('revoked student cannot sign in', afterRevoke.status === 401, `got ${afterRevoke.status}`);

  const selfRevoke = await call('/api/admin/revoke', { method: 'POST', token: instructorToken, body: { id: 'test-instructor' } });
  check('instructor cannot revoke their own account', selfRevoke.status === 400, `got ${selfRevoke.status}`);
}

/* ---------- 8. invite management ---------- */
console.log('\n8. Invite management');
{
  const made = await call('/api/admin/invites', { method: 'POST', token: instructorToken,
    body: { label: 'Automated test invite', maxUses: 1, expiresDays: 1 } });
  check('instructor can create an invite', made.status === 200 && !!made.data?.token, `status ${made.status}`);

  const lookup = await call('/api/invite/' + made.data?.token);
  check('newly created invite validates', lookup.data?.valid === true, JSON.stringify(lookup.data));

  const revoked = await call('/api/admin/invites/revoke', { method: 'POST', token: instructorToken, body: { id: made.data?.id } });
  check('instructor can revoke an invite', revoked.status === 200, `got ${revoked.status}`);

  const afterRevoke = await call('/api/invite/' + made.data?.token);
  check('revoked invite stops validating', afterRevoke.data?.valid === false, JSON.stringify(afterRevoke.data));

  const signupOnRevoked = await call('/api/signup', { method: 'POST',
    body: { token: made.data?.token, name: 'Nope', username: 'test-nope', code: 'longenoughpw123' } });
  check('cannot sign up through a revoked invite', signupOnRevoked.status === 400, `got ${signupOnRevoked.status}`);

  /* THE RACE. A single-use invite, two signups fired simultaneously.

     The old code read `uses`, checked it, created the student, then incremented
     — three statements. Both requests read uses=0, both passed the check, and a
     one-use link issued two accounts. Enforcement now lives in a conditional
     UPDATE, so exactly one request can change the row.

     This is genuinely racy, so it is not a perfect test — but firing both with
     Promise.all on the same link is the closest thing to the real failure, and
     it fails reliably against the old code. */
  const raceInv = await call('/api/admin/invites', { method: 'POST', token: instructorToken,
    body: { label: 'Race test', maxUses: 1, expiresDays: 1 } });
  const raceToken = raceInv.data?.token;
  const stamp = Date.now().toString(36).slice(-5);

  const [a, b] = await Promise.all([
    call('/api/signup', { method: 'POST',
      body: { token: raceToken, name: 'Race A', username: 'race-a-' + stamp, code: 'longenoughpw123' } }),
    call('/api/signup', { method: 'POST',
      body: { token: raceToken, name: 'Race B', username: 'race-b-' + stamp, code: 'longenoughpw123' } })
  ]);

  const winners = [a, b].filter((r) => r.status === 200).length;
  check('a one-use invite issues exactly one account under a simultaneous race',
        winners === 1, `${winners} of 2 signups succeeded — expected exactly 1`);

  const losers = [a, b].filter((r) => r.status !== 200);
  check('the losing request is refused cleanly, not with a 500',
        losers.every((r) => r.status === 409 || r.status === 400),
        losers.map((r) => r.status).join(','));

  const spent = await call('/api/invite/' + raceToken);
  check('the raced invite reports itself used afterwards',
        spent.data?.valid === false, JSON.stringify(spent.data));
}

/* ---------- 9. CORS ---------- */
console.log('\n9. CORS');
{
  const good = await call('/', { origin: 'https://n1forexacademy.github.io' });
  check('configured origin is allowed',
        good.headers.get('access-control-allow-origin') === 'https://n1forexacademy.github.io',
        good.headers.get('access-control-allow-origin'));

  const bad = await call('/', { origin: 'https://attacker.example.com' });
  check('unknown origin is not echoed back',
        bad.headers.get('access-control-allow-origin') !== 'https://attacker.example.com',
        bad.headers.get('access-control-allow-origin'));
}

/* ---------- 10. sign out ---------- */
console.log('\n10. Session lifecycle');
{
  const out = await call('/api/logout', { method: 'POST', token: instructorToken });
  check('logout succeeds', out.status === 200, `got ${out.status}`);

  const afterLogout = await call('/api/me', { token: instructorToken });
  check('token is dead after logout', afterLogout.status === 401, `got ${afterLogout.status}`);
}

/* ---------- summary ---------- */
console.log(`\n=== ${pass} passed, ${fail} failed ===`);
if (fail) { console.log('\nFailures:'); failures.forEach((f) => console.log('  - ' + f)); }
process.exit(fail ? 1 : 0);
