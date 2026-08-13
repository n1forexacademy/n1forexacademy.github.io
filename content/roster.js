/* N1 Forex Academy — cohort configuration.
   ---------------------------------------------------------------------------
   READ THIS BEFORE CHANGING ANYTHING.

   This is a CLASSROOM GATE, not security. The site is static, so every check
   below runs in the student's own browser and can be bypassed by anyone who
   opens developer tools. Treat it as a register that keeps each student's
   progress separate and keeps casual visitors out — nothing more.

   Never put anything genuinely confidential behind it. If you need real
   protection, see the "Real authentication" section of ARCHITECTURE.md.

   TO ADD A STUDENT
     Add an entry to `seats`. Give them the `code` privately.
     `code` is plaintext and readable in the page source. To make it a little
     less casual, open the site, sign in as instructor, and use the Hash tool
     to convert a code to a `hash` value, then replace `code:` with `hash:`.

   TO CHANGE THE INSTRUCTOR CODE
     Edit `instructor` below. Same plaintext/hash choice applies.
   --------------------------------------------------------------------------- */
window.ROSTER = {
  cohort: 'N1 Forex Academy — Cohort 1',

  // Instructor access. Unlocks slide notes by default, the roster view and the hash tool.
  instructor: { code: 'n1-instructor' },

  // One entry per student. `id` must be unique and never reused.
  seats: [
    { id: 'demo',      name: 'Demo Student', code: 'n1-demo' },
    { id: 'student-1', name: 'Seat 1',       code: 'n1-seat-1' },
    { id: 'student-2', name: 'Seat 2',       code: 'n1-seat-2' },
    { id: 'student-3', name: 'Seat 3',       code: 'n1-seat-3' }
  ]
};
