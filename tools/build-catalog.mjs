/* N1 Forex Academy — regenerate content/catalog.js.

   The catalog holds just enough metadata about every module (id, title,
   tagline, level, duration, counts) for the journey and library to render
   without loading any module content. It is what makes per-module lazy
   loading possible.

   IT IS GENERATED. Run this whenever you change a module's title, tagline,
   level or duration, or add/remove a module:

     node tools/build-catalog.mjs

   This is a maintenance command, not a build step — deploying never needs it.
   If the catalog drifts, the journey shows stale titles while the module page
   itself shows the correct one. */
import fs from 'fs';
import path from 'path';
import vm from 'vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');
const C = (p) => path.join(ROOT, p);

const moduleDir = C('content/modules');
const files = fs.readdirSync(moduleDir)
  .filter(f => /^m\d+\.js$/.test(f))
  .sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));

const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(moduleDir, f), 'utf8'), ctx, { filename: f });
}

const course = (ctx.window.COURSE || []).slice().sort((a, b) => a.id - b.id);
if (!course.length) { console.error('No modules found'); process.exit(1); }

const entries = course.map(m => ({
  id: m.id,
  track: m.track || 'forex',
  title: m.title,
  tagline: m.tagline,
  level: m.level,
  duration: m.duration,
  slides: (m.slides || []).length,
  quiz: (m.quiz || []).length
}));

const body = entries.map(e =>
  '  { id: ' + e.id + ', track: ' + JSON.stringify(e.track) +
  ', title: ' + JSON.stringify(e.title) + ',\n' +
  '    tagline: ' + JSON.stringify(e.tagline) + ',\n' +
  '    level: ' + JSON.stringify(e.level) + ', duration: ' + JSON.stringify(e.duration) +
  ', slides: ' + e.slides + ', quiz: ' + e.quiz + ' }'
).join(',\n');

const out =
`/* N1 Forex Academy — module catalogue.

   GENERATED FILE. Do not edit by hand — run:  node tools/build-catalog.mjs

   Lightweight metadata for every module, loaded eagerly so the journey, the
   library and the route guards can render without fetching module content.
   Full content lives in content/modules/mN.js and loads on demand. */
window.CATALOG = [
${body}
];
`;

fs.writeFileSync(C('content/catalog.js'), out, 'utf8');
console.log('catalog written:', entries.length, 'modules,',
            (Buffer.byteLength(out) / 1024).toFixed(1), 'KB');
console.log('by track:', entries.reduce((a, e) => (a[e.track] = (a[e.track] || 0) + 1, a), {}));
