-- Adds a username so sign-in is an indexed lookup instead of a scan.
--
-- WHY: the original design identified a person by their access code alone, so
-- login had to try every student row and run PBKDF2 against each. That is O(n)
-- expensive crypto per sign-in and blew the Cloudflare Workers CPU budget
-- (error 1101) even with a single account.
--
-- With a username, login is: one indexed SELECT, then exactly one PBKDF2.
-- Constant cost no matter how many students are enrolled. It also removes the
-- need to reject duplicate passwords, which was only ever a workaround for
-- codes being the identifier.
--
-- Apply with:
--   npx wrangler d1 execute n1-academy --remote --file=./migrations/003_username.sql

ALTER TABLE students ADD COLUMN username TEXT;

-- Existing rows: fall back to the id, which is already unique.
UPDATE students SET username = id WHERE username IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_students_username ON students(username);
