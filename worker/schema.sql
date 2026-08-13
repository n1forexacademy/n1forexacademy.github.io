-- N1 Forex Academy — D1 schema.
-- Apply with:  wrangler d1 execute n1-academy --remote --file=./schema.sql

DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS progress;
DROP TABLE IF EXISTS students;

-- One row per person who can sign in. `code_hash` is PBKDF2-SHA256; the plaintext
-- access code is never stored and never leaves the instructor's hands.
CREATE TABLE students (
  id          TEXT PRIMARY KEY,        -- stable, never reused
  name        TEXT NOT NULL,
  role        TEXT NOT NULL DEFAULT 'student',   -- 'student' | 'instructor'
  code_hash   TEXT NOT NULL,
  code_salt   TEXT NOT NULL,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  INTEGER NOT NULL
);

-- Opaque bearer tokens. Stored hashed so a leaked database dump cannot be
-- replayed as a live session.
CREATE TABLE sessions (
  token_hash  TEXT PRIMARY KEY,
  student_id  TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  display_name TEXT,                   -- what the student typed at sign-in
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX idx_sessions_student ON sessions(student_id);
CREATE INDEX idx_sessions_expiry  ON sessions(expires_at);

-- One row per student. The whole progress object is stored as JSON — the shape
-- is owned by the frontend, so adding a module or drill needs no migration.
CREATE TABLE progress (
  student_id  TEXT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
  data        TEXT NOT NULL DEFAULT '{}',
  updated_at  INTEGER NOT NULL
);
