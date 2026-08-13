#!/usr/bin/env bash
# N1 Forex Academy — backend test runner.
#
#   bash test/run-tests.sh
#
# Seeds a temporary instructor and a single-use invite straight into D1 (both
# normally require a session that does not exist yet), runs the suite against
# the live Worker, then deletes everything it created.
#
# Safe against production: every row it touches is prefixed `test-`.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
unset CLOUDFLARE_API_TOKEN

API="${API_BASE:-https://n1-academy-api.n1forexacademy.workers.dev}"
DB="n1-academy"
# MUST match PBKDF2_ITERATIONS in src/index.js, or the seeded instructor's hash
# will never verify and every session test fails with a misleading 401.
ITER=25000

CODE="test-instructor-$(node -e 'console.log(require("crypto").randomBytes(6).toString("hex"))')"
TOKEN=$(node -e 'console.log(require("crypto").randomBytes(24).toString("hex"))')

# Hash the instructor code exactly as the Worker does: PBKDF2-SHA256, 150k
# iterations, 16-byte salt, both stored base64.
read -r SALT HASH <<<"$(node -e "
  const c=require('crypto');
  const salt=c.randomBytes(16);
  const hash=c.pbkdf2Sync(process.argv[1], salt, $ITER, 32, 'sha256');
  console.log(salt.toString('base64'), hash.toString('base64'));
" "$CODE")"

TOKEN_HASH=$(node -e "console.log(require('crypto').createHash('sha256').update(process.argv[1]).digest('hex'))" "$TOKEN")
NOW=$(node -e 'console.log(Date.now())')
EXP=$(node -e 'console.log(Date.now()+3600000)')

# wrangler's --command takes a single statement; multi-statement batches must
# come from a file, so both seed and cleanup are written to temp .sql files.
TMPDIR_T=$(mktemp -d)

cleanup() {
  echo ""
  echo "--- cleaning up test data"
  cat > "$TMPDIR_T/cleanup.sql" <<'SQL'
DELETE FROM sessions WHERE student_id LIKE 'test-%' OR student_id IN (SELECT id FROM students WHERE name LIKE 'Test %');
DELETE FROM progress WHERE student_id LIKE 'test-%' OR student_id IN (SELECT id FROM students WHERE name LIKE 'Test %');
DELETE FROM invite_uses WHERE invite_id LIKE 'test-%';
DELETE FROM invites WHERE id LIKE 'test-%' OR label LIKE 'Automated test%';
DELETE FROM students WHERE id LIKE 'test-%' OR name LIKE 'Test %';
SQL
  npx wrangler d1 execute "$DB" --remote --file="$TMPDIR_T/cleanup.sql" >/dev/null 2>&1
  rm -rf "$TMPDIR_T"
  echo "--- done"
}
trap cleanup EXIT

echo "--- seeding temporary instructor and invite"
cat > "$TMPDIR_T/seed.sql" <<SQL
INSERT OR REPLACE INTO students (id,name,username,role,code_hash,code_salt,active,created_at)
  VALUES ('test-instructor','Test Instructor','test-instructor','instructor','$HASH','$SALT',1,$NOW);
INSERT OR REPLACE INTO invites (id,token_hash,label,role,max_uses,uses,created_by,created_at,expires_at,revoked)
  VALUES ('test-invite','$TOKEN_HASH','Automated test invite','student',1,0,'test-instructor',$NOW,$EXP,0);
SQL
npx wrangler d1 execute "$DB" --remote --file="$TMPDIR_T/seed.sql" >/dev/null 2>&1 \
  || { echo "seed failed"; exit 1; }

echo "--- running suite against $API"
node test/api-test.mjs "$API" "$CODE" "$TOKEN"
