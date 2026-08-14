-- Adds two-way messaging between a student and the instructor.
--
-- Apply with:
--   npx wrangler d1 execute n1-academy --remote --file=./migrations/004_messages.sql
--
-- Safe to re-run: everything is IF NOT EXISTS.
--
-- ONE THREAD PER STUDENT. There is no recipient column and that is deliberate:
-- every message belongs to exactly one student's conversation with the
-- instructor, so `student_id` IS the thread. It makes the access rule trivial to
-- state and therefore trivial to enforce — a student may touch rows where
-- student_id = their own id, and nothing else. A general recipient field would
-- invite student-to-student messaging, which this academy does not want and
-- which would need moderation nobody is here to do.

CREATE TABLE IF NOT EXISTS messages (
  id          TEXT PRIMARY KEY,
  student_id  TEXT NOT NULL,             -- whose thread this is; NOT who it is addressed to
  sender      TEXT NOT NULL,             -- 'student' | 'instructor'
  sender_name TEXT NOT NULL,             -- captured at send time, so renaming later cannot rewrite history
  body        TEXT NOT NULL,
  created_at  INTEGER NOT NULL,
  read_at     INTEGER                    -- when the OTHER party read it. NULL = unread
);

-- Every query is "this student's thread, oldest first" or a count of unread.
CREATE INDEX IF NOT EXISTS idx_messages_thread ON messages(student_id, created_at);
CREATE INDEX IF NOT EXISTS idx_messages_unread ON messages(student_id, sender, read_at);
