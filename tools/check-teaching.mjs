/* N1 Forex Academy — which modules actually teach, and which still dump slides.

   A module is "written" when every one of its lessons carries a `teach` block.
   Without one, assets/lesson.js falls back to paging the student through the
   presenter slides — which is precisely what students must never see.

   Also flags instructor-register wording that leaks into student-facing text,
   and answer indices that point at nothing.

     node tools/check-teaching.mjs          # summary
     node tools/check-teaching.mjs --todo   # just the unwritten module ids

   Exits 1 if anything is structurally broken, so it is safe in a hook. */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');

/* The content files are browser scripts: IIFEs writing to window. Give them a
   window and run them, rather than parsing JS with regexes. */
function loadDir(dir) {
  const win = { COURSE: [], LESSONS: {} };
  const files = fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith('.js'));
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, dir, f), 'utf8');
    new Function('window', src)(win);
  }
  return win;
}

const modules = loadDir('content/modules').COURSE;
const lessons = loadDir('content/lessons').LESSONS;

/* Phrases that address the instructor about the student, or frame the work as
   homework. Harmless in slides and notes; wrong in anything a student reads. */
const LEAKS = [
  /\bthe student\b/i, /\bstudents\b/i, /\byour student\b/i,
  /\bmarking (scheme|rubric|guide|criteria)\b/i, /\brubric\b/i, /\bhomework\b/i,
  /\bask the class\b/i, /\bhave them\b/i
];

let broken = 0;
const todo = [];
const rows = [];

for (const m of modules.sort((a, b) => a.id - b.id)) {
  const ls = lessons[m.id] || [];
  const withTeach = ls.filter(l => l.teach).length;
  const written = ls.length > 0 && withTeach === ls.length;
  if (!written) todo.push(m.id);

  const problems = [];
  if (!ls.length) problems.push('no lessons file');

  for (const [i, l] of ls.entries()) {
    const tag = `L${i + 1}`;
    for (const c of l.check || []) {
      if (typeof c.a !== 'number' || !(c.options || [])[c.a]) {
        problems.push(`${tag}: answer index points at nothing`);
      }
    }
    if (!l.teach) continue;
    const t = l.teach;
    if (!(t.lead || []).length) problems.push(`${tag}: teach block has no lead`);
    if (!(l.check || []).length) problems.push(`${tag}: teaching with nothing to check`);

    const prose = [].concat(t.lead || [], t.close || [],
      (t.terms || []).flatMap(x => [x.term, x.plain, x.like]));
    for (const p of prose) {
      for (const rx of LEAKS) {
        if (rx.test(p)) problems.push(`${tag}: instructor register — "${String(p).slice(0, 60)}…"`);
      }
    }
    for (const x of t.terms || []) {
      if (!x.term || !x.plain || !x.like) problems.push(`${tag}: term "${x.term}" missing plain or like`);
    }
  }

  /* Objectives are shown to students too, so they cannot say "the student". */
  for (const o of m.objectives || []) {
    if (/\btheir own\b|\bthe student\b|\bstudents\b/i.test(o)) {
      problems.push(`objectives: instructor register — "${o.slice(0, 60)}…"`);
    }
  }

  if (problems.length) broken += problems.length;
  rows.push({ id: m.id, track: m.track || 'forex', title: m.title, ls: ls.length, written, problems });
}

if (process.argv.includes('--todo')) {
  console.log(todo.join(' '));
  process.exit(0);
}

let lastTrack = null;
for (const r of rows) {
  if (r.track !== lastTrack) { console.log(`\n── ${r.track} ──`); lastTrack = r.track; }
  console.log(`${r.written ? '  written' : '  SLIDES '} m${String(r.id).padEnd(4)} ${r.ls} lessons  ${r.title}`);
  for (const p of r.problems) console.log(`            ! ${p}`);
}

const done = rows.filter(r => r.written).length;
console.log(`\n${done}/${rows.length} modules teach. ${todo.length ? 'Still on slides: ' + todo.join(', ') : 'All written.'}`);
if (broken) console.log(`${broken} problem(s) above.`);
process.exit(broken ? 1 : 0);
