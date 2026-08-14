/* N1 Forex Academy — proves the code labs are gradeable before they go live.

   For every task in content/ea-tasks.js it runs BOTH programs through the real
   assets/ea-runtime.js and asserts:

     1. the `solution` passes every check                   — the task is possible
     2. the `starter` fails at least one check              — the task is not free
     3. each specific check the starter is meant to catch actually fires
     4. the run is deterministic                            — same code, same result

   Point 2 is the one that matters. A starter that already passes is worse than
   no exercise at all: the student learns nothing and believes they have.

   Exits non-zero on any problem. Run it after touching a task, a seed, or the
   runtime.  node tools/check-ea-tasks.mjs
*/
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import url from 'node:url';

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');

/* ---- a worker-shaped context to run assets/ea-runtime.js in ---- */
function makeRuntime() {
  const ctx = vm.createContext({ console });
  ctx.self = ctx;
  ctx.globalThis = ctx;
  ctx.location = { search: '' };
  ctx.importScripts = (rel) => {
    const file = path.join(ROOT, 'assets', String(rel).split('?')[0]);
    vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  };
  let posted = null;
  ctx.postMessage = (m) => { posted = m; };
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/ea-runtime.js'), 'utf8'), ctx,
                  { filename: 'ea-runtime.js' });
  return (code, task) => {
    posted = null;
    ctx.onmessage({ data: { id: 1, code, task } });
    return posted;
  };
}

function loadTasks() {
  const ctx = { window: {} };
  ctx.window.window = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'content/ea-tasks.js'), 'utf8'), ctx);
  return (ctx.window.DRILLS || []).filter((d) => d.kind === 'code');
}

const run = makeRuntime();
const tasks = loadTasks();
let problems = 0;

if (!tasks.length) {
  console.error('No code tasks found in content/ea-tasks.js.');
  process.exit(1);
}

const digest = (r) => JSON.stringify({ o: r.orders, s: r.stats, h: r.history, p: r.prints.length });

for (const t of tasks) {
  console.log(`\n── ${t.id} — ${t.title} (module ${t.module})`);

  for (const field of ['starter', 'solution', 'checks', 'task', 'brief', 'onPass']) {
    if (!t[field]) { console.log(`  ✗ missing "${field}"`); problems++; }
  }
  if (!t.checks || !t.checks.length) continue;

  // ---- 1. the solution must pass everything ----
  const sol = run(t.solution, t.task);
  if (!sol.ok) {
    console.log(`  ✗ SOLUTION DID NOT RUN (${sol.phase}): ${sol.error}`);
    problems++;
    continue;
  }
  if (sol.result.error) {
    console.log(`  ✗ solution threw at runtime: ${sol.result.error} (line ${sol.result.errorLine})`);
    problems++;
  }

  const solFails = [];
  t.checks.forEach((c) => { if (!c.test(sol.result)) solFails.push(c.label); });
  if (solFails.length) {
    console.log(`  ✗ SOLUTION FAILS: ${solFails.join(', ')}`);
    problems++;
  } else {
    console.log(`  ✓ solution passes all ${t.checks.length} checks`);
  }

  // ---- 2. the starter must NOT pass ----
  const start = run(t.starter, t.task);
  if (!start.ok) {
    console.log(`  ✗ STARTER DID NOT COMPILE (${start.phase}): ${start.error}`);
    problems++;
  } else {
    const startFails = t.checks.filter((c) => !c.test(start.result)).map((c) => c.label);
    if (!startFails.length) {
      console.log('  ✗ STARTER ALREADY PASSES EVERY CHECK — this task teaches nothing.');
      problems++;
    } else {
      console.log(`  ✓ starter fails ${startFails.length}/${t.checks.length}: ${startFails.join(', ')}`);
    }
  }

  // ---- 3. determinism ----
  const again = run(t.solution, t.task);
  if (digest(sol.result) !== digest(again.result)) {
    console.log('  ✗ NOT DETERMINISTIC — two runs of the same code differed.');
    problems++;
  }

  // ---- 4. the figures a student will actually see ----
  const r = sol.result;
  console.log(`    solution: ${r.ordersFilled} trades, ${r.orderAttempts} attempts, ` +
              `net ${r.stats.netPL >= 0 ? '+' : ''}$${r.stats.netPL.toFixed(2)}, ` +
              `maxDD ${r.stats.maxDrawdownPct.toFixed(1)}%, bars ${r.bars}`);
  if (start.ok) {
    const s = start.result;
    console.log(`    starter:  ${s.ordersFilled} trades, ${s.orderAttempts} attempts, ` +
                `dupBar ${s.duplicateBarOrders}, maxOpen ${s.maxOpenPositions}` +
                (s.restarted ? `, onRestartBar ${s.ordersOnRestartBar}` : ''));
  }
}

console.log('');
if (problems) {
  console.error(`${problems} problem(s) found in the code labs.`);
  process.exit(1);
}
console.log(`All ${tasks.length} code labs are solvable, non-trivial and deterministic.`);
