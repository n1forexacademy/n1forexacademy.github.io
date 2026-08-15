# N1 Forex Academy — Architecture & Maintenance

Handover document. Read this before changing anything. It covers what each file does, how the
simulator works, how to add content, what the access gate is and is not, and how to upgrade.

**Live:** https://n1forexacademy.github.io
**Repo:** https://github.com/n1forexacademy/n1forexacademy.github.io

---

## 1. What this is

A static teaching site. **No build step, no framework, no package.json, no dependencies.**
Plain HTML/CSS/JS loaded with `<script>` tags. Open `index.html` through any web server and it runs.

Nine tracks, unlocked in sequence, each ending in its own certificate:

| Track | Modules | Lessons | Practical | Unlocks after |
|---|---|---|---|---|
| Forex | 12 (ids 1–12) | 48 | 7 simulator drills | — |
| Equities & Shares | 8 (ids 101–108) | 24 | 4 labs | Forex certificate |
| Bonds & Fixed Income | 6 (ids 201–206) | 12 | 3 labs | Equities certificate |
| Futures | 5 (ids 301–305) | 10 | 3 labs | Bonds certificate |
| Options | 6 (ids 401–406) | 12 | 4 labs | Futures certificate |
| Crypto & Digital Assets | 5 (ids 501–505) | 10 | 3 labs | Options certificate |
| Commodities | 5 (ids 601–605) | 10 | 3 labs | Crypto certificate |
| Spread Betting | 4 (ids 701–704) | 8 | 2 labs | Commodities certificate |
| Trading Automation | 6 (ids 801–806) | 12 | 3 labs + 5 code labs | Spread Betting certificate |

**57 modules, 146 lessons, 43 practical pieces.** Tracks unlock in a strict chain; each ends in its
own certificate. The order is pedagogical, not alphabetical — futures builds on forex margin and
equity exchange mechanics, options is the hardest instrument and assumes all of it, crypto sits late
because it is the easiest to start trading and the fastest to end you, commodities builds directly on
futures, and spread betting is last because it is a *wrapper* rather than a market and is almost
entirely transfer. Automation is last because it is the payoff to a promise module 12 makes — and
because it needs the written plan from module 11 to translate.

> ⚠️ **The last lesson of the last track sums up the whole course.** That is currently `l806.js`.
> **This has now caught us twice**: `l505.js` held the role when crypto was last, then `l704.js` when
> spread betting was. Both had to be narrowed and both carry the warning in their headers.
> **If you add or reorder tracks, narrow the previous last lesson BEFORE anything else.**

Each module is delivered lesson-by-lesson: read a short lesson, pass a two-question check on it,
then the next opens. The module test unlocks only when every lesson is passed.

Plus a **Trading Floor** carrying all 43 practical pieces: **10 simulator drills** (7 fx, 2 share,
1 futures), **3 options labs** on a live chain, **25 analysis labs**, and **5 code labs** where the
student writes an EA and runs it. Four surfaces, one progress store — the path engine cannot tell
them apart, which is why adding a surface never touches gating. See §4 for instrument kinds, §4.1
for options, §5 for labs, §5.1 for the code labs.

---

## 2. File map

```
index.html              Shell. Loads every script in dependency order. Edit here to add a file.
.nojekyll               Stops GitHub Pages hiding folders. Do not delete.
.gitattributes          Normalises line endings.

assets/
  style.css             Base design system. CSS custom properties at the top drive all colour.
  academy.css           Gate, terminal, drill and instructor styles.
  brand.css             Logo lockup and the certificate document.
  journey.css           Student path, certificate, demo period.
  tracks.css            Track selector strip.
  lesson.css            Lesson flow (read → check → next).
  tools.css             Calculators.
  labs.css              Analysis lab data blocks and answer widgets.
  present.css           Presenter mode (deliberately dark, whatever the theme).
  dashboard.css         Instructor dashboard.
  illustrations.css     Platform illustrations.

  app.js                Router, views, slide deck, module test. The entry point.
  loader.js             LAZY CONTENT LOADER — see §2.1. Fetches modules on demand.
  auth.js               Sign-in + progress. Local mode OR server mode — see §7.
  progress-engine.js    Tracks, gating, step state. Pure logic, no DOM.
  journey.js            Student path, certificates, supervised demo log.
  lesson.js             Lesson flow and per-lesson checks.
  dashboard.js          Instructor cohort view.
  present.js            Presenter mode for teaching live.
  engine.js             SIMULATION CORE. Market feed, account/margin model, risk guard. No DOM.
  terminal.js           Terminal UI. Canvas chart, order ticket, panels, guard modal.
  tools.js              Sixteen trader calculators.
  labs.js               Analysis lab renderer and marking. Read its header note.
  messages.js           Student/instructor messaging. Server mode only. §7.1.
  ea-editor.js          Code lab: editor, console, marking, and the run deadline.
  ea-runtime.js         RUNS IN A WEB WORKER. Never load this as a page script —
                        it is started by URL from ea-editor.js. See §5.1.
  options.js            Black-Scholes pricing and greeks. No DOM. See §4.1.
  optsim.js             Options practice surface: live chain, decay, IV crush.

worker/                 OPTIONAL backend. Only needed for server mode (§7).
  src/index.js          Auth + progress + messaging API (Worker). §7.1.
  schema.sql            D1 tables: students, sessions, progress.
  migrations/           002 invites, 003 usernames, 004 messages,
                        005 attachments, 006 deletion. Apply in order.
                        006 is NOT re-runnable — see its header.
  test/run-tests.sh     43-assertion suite against the live Worker.
  wrangler.toml         Config. database_id and ALLOWED_ORIGINS go here.

tools/
  build-catalog.mjs     REGENERATES content/catalog.js. Run after editing a
                        module's title, tagline, level or duration.
  bump-assets.mjs       Stamps ?v=N on every asset URL. RUN BEFORE EVERY DEPLOY
                        that touches assets/ or content/, or students keep the
                        cached old version.
  check-teaching.mjs    Reports which modules teach vs still fall back to
                        slides, and flags instructor wording leaking into
                        student-facing text. Exits non-zero on any problem.
  check-ea-tasks.mjs    Proves every code lab is solvable AND non-trivial: the
                        solution must pass every check, the starter must fail
                        at least one, and both runs must be deterministic.
                        Exits non-zero. RUN AFTER TOUCHING A TASK OR A SEED.

content/
  roster.js             API_BASE switch + local-mode access codes. EDIT THIS.
  catalog.js            GENERATED. Metadata for all 57 modules — see §2.1.
  tracks.js             The nine tracks and their stages. Eager, small.
  path.js               The forex track's stages + demo-period thresholds.
  modules/mN.js         One file per module. Lazy. 1–12 forex, 101–108 equities,
                        201–206 bonds, 301–305 futures, 401–406 options,
                        501–505 crypto.
  lessons/lN.js         One file per module's lessons. Lazy.
  drills.js             The 7 assessed simulator drills (forex only).
  labs-futures.js       3 analysis labs for the futures track.
  labs-options.js       4 analysis labs for the options track.
  labs-crypto.js        3 analysis labs for the crypto track.
  labs-commodities.js   3 analysis labs for the commodities track.
  labs-spreadbet.js     2 analysis labs for the spread betting track.
  labs-automation.js    3 analysis labs for the automation track.
  ea-tasks.js           5 CODE labs (kind: 'code'). Each carries a reference
                        solution used by tools/check-ea-tasks.mjs — see §5.1.
  drills-markets.js     3 SIMULATOR drills for shares and futures.
  drills-options.js     3 options-chain drills (kind: 'optsim').
  labs.js               7 analysis labs for equities and bonds. Worked exercises,
                        not simulator sessions — see §5 and assets/labs.js for why.
  illustrations.js      Annotated drawings of the academy's own terminal.
  brand.js              Logo, seal, signature, signatory details.
```

### 2.1 Lazy loading and the catalogue

Loading every module eagerly meant a 607 KB download before anything rendered, and the course has
since grown to 57 modules. Content is fetched **per module, on demand**.

The piece that makes this work is **`content/catalog.js`**: id, title, tagline,
level, duration and counts for every module, ~11 KB total. The journey, library
listings and route guards all render from it, so navigating the path fetches
nothing. Only opening a module pulls its slides, lab, quiz and lessons.

```
EAGER   catalog.js · tracks.js · path.js · drills.js · labs*.js · roster.js
        illustrations.js · brand.js                          ~52 KB
LAZY    content/modules/mN.js + content/lessons/lN.js    ~21 KB each
```

`assets/loader.js` owns this. Notes for anyone changing it:

- **Files within one module load sequentially.** Both append to shared arrays
  (`window.COURSE`, `window.LESSONS`); two running concurrently could read the
  same array and lose one another's work. Different modules load in parallel
  safely — the guard is per module.
- **An in-flight promise cache** means three concurrent requests for the same
  module resolve once.
- **A missing lessons file is not fatal.** The module falls back to the
  slides-then-one-test view, which is how an unauthored module behaves anyway.
- **`MODULES()` in app.js is a function, not a captured array.** Capturing it at
  boot would freeze it empty now that content arrives lazily.

> ⚠️ **`catalog.js` is generated.** After editing a module's title, tagline,
> level or duration — or adding/removing a module — run:
> ```
> node tools/build-catalog.mjs
> ```
> This is a maintenance command, not a build step; deploying never needs it. If
> it drifts, the journey shows a stale title while the module page shows the
> correct one.

**Load order matters.** `engine.js` must load before `terminal.js`; both before `app.js`.
Content files must load before `app.js`. If you add a file, add its `<script>` tag to `index.html`.

### Global objects

| Global | Set by | Contains |
|---|---|---|
| `window.CATALOG` | `catalog.js` | Metadata for every module. EAGER. |
| `window.COURSE` | `modules/mN.js` | Loaded module objects. Grows as modules are fetched. |
| `window.LESSONS` | `lessons/lN.js` | Lesson breakdown, keyed by module id. |
| `window.TRACKS` | `tracks.js` | Track definitions and their stages |
| `window.Content` | `loader.js` | `loadModule`, `loadTrack`, `meta`, `isModuleLoaded` |
| `window.Path` | `progress-engine.js` | Track gating and step state |
| `window.DRILLS` | `drills.js` + `labs.js` | Simulator drills and analysis labs. `kind: 'analysis'` marks a lab. |
| `window.Labs` | `labs.js` | `isLab`, `mount` — renderer for analysis labs |
| `window.ROSTER` | `roster.js` | Cohort name, instructor code, student seats |
| `window.FX` | `engine.js` | `Feed`, `Account`, `RiskGuard`, `INSTRUMENTS`, `pipValue` |
| `window.FXTerminal` | `terminal.js` | Terminal UI constructor |
| `window.Auth` | `auth.js` | Gate, session, progress |

---

## 3. Routes

Hash-based, so it works on any static host with no server rewrites.

| Route | View |
|---|---|
| `#/` | Student: their gated path. Instructor: cohort dashboard. |
| `#/m/:id` | Module. Students get the lesson list; instructors get the deck. |
| `#/m/:id/lesson/:n` | A single lesson: read pages, then its check |
| `#/certificate[/:track]` | Certificate for a track (forex if omitted) |
| `#/demo` | Supervised demo-trading log |
| `#/calculators` | The sixteen trader calculators |
| `#/library` | All modules (instructor) |
| `#/m/:id/lesson` | Deep link straight to a practical lab |
| `#/drills` | Trading Floor index |
| `#/drill/:id` | A drill's terminal. `#/drill/free` = unassessed practice |
| `#/plan` `#/toolkit` `#/glossary` | Course plan, instructor toolkit, glossary |
| `#/instructor` | Roster + code hash tool (instructor session only) |

---

## 4. The simulation engine (`engine.js`)

The most important file. Pure logic, no DOM, testable from the browser console.

### Determinism

Every feed is seeded. **Same seed → identical market, every time.** This is deliberate: an
instructor and a student running the same drill see the same candles, so a lesson is reproducible.
`FX.mulberry32(seed)` is the PRNG; `FX.hashSeed(string)` turns a drill id into one.

Never introduce `Math.random()` into price generation or you lose this property.

### `FX.Feed(instrumentId, opts)`

Generates an M1 candle series with volatility clustering, regime switching (trend/range), and
occasional "news" spikes that widen the spread 5–14×. Ticks move price inside a forming bar;
every `ticksPerBar` (12) ticks the bar closes.

```js
feed.bid() / feed.ask()      // spread applied symmetrically around mid
feed.series('M15', 200)      // aggregate M1 → any timeframe on demand
feed.atr('H1', 14)           // ATR in PIPS (not price)
```

Options: `seed`, `trend` (-1/0/+1), `regimeLock`, `volMult`, `history`.

### Instrument kinds

Specs carry `kind`, which decides how size, margin and P/L are computed. Adding a kind means
touching exactly three places — `pipValue`, `Account.marginFor`, and the terminal's unit label.
Stops, stop-out, the risk guard and every drill `test()` already generalise.

| kind | Size unit | Margin | P/L per increment |
|---|---|---|---|
| `fx` | lots | notional ÷ account leverage | contract × pip |
| `share` | shares (`contract: 1`) | notional ÷ leverage — **leverage 1 pays in full** | contract × pip |
| `future` | contracts | **fixed `initialMargin` per contract**, set by the exchange | `tickValue` |

Shares may also carry `gap: { every, pct, dir?, label }` — a scheduled overnight jump fired on a
bar boundary. Price moves with nothing traded in between, so a stop inside the jump fills at the
reopen rather than at its level. That is what makes Module 107's "size it, then gap it" something a
student experiences rather than reads.

> ⚠️ **The feed is deterministic from a seed**, so a drill replays identically for a student and
> their instructor. Any new `this.rnd()` call inside `Feed._step` or the bar-close branch shifts
> every existing forex drill. The gap logic is therefore guarded on `spec.gap` existing. After any
> engine change, re-run the two documented regressions below — the module 3 stop-out must still
> land at balance ~206, and the module 10 guard must still suggest 0.16 lots.

**Options are simulated separately** — see §4.1. Bonds, crypto, commodities and spread betting are
lab-only, and that is deliberate: those tracks turn on judgement rather than execution.

### 4.1 The options surface

Options do not fit the candle-feed engine. `engine.js` is built around a price series, a margin model
and a risk guard, none of which describe an options book, so options got their own pair of files
rather than a compromise bolted onto both.

| File | Role |
|---|---|
| `assets/options.js` | Black-Scholes pricing and greeks. No DOM, no dependencies, `window.OPT`. |
| `assets/optsim.js` | The practice surface: live chain, take a position, advance time. `window.OptSim`. |
| `content/drills-options.js` | Three drills with `kind: 'optsim'`. |

**It is a teaching model, not a trading system, and the Trading Floor says so.** Real chains carry
skew, dividends and early-exercise premium this omits. What matters pedagogically is that the
*relationships* are faithful, and they are: extrinsic peaks at the money, decay accelerates into
expiry, gamma is highest at the money, delta runs 0 to 1, and vega collapses when uncertainty
resolves. Validated against textbook values — S=100, K=100, T=1, v=0.20, r=0.05 gives 10.4506 call
and 5.5735 put with delta 0.6368, and put-call parity holds.

At or past expiry `price()` returns intrinsic value and degenerate greeks rather than NaN, so a
position can be walked all the way into expiry without the surface breaking. Do not "tidy" that
branch away.

Scenarios are staged, not simulated: a drill's `sim.schedule` says what happens on which day, which
is the only way to produce an IV crush on demand. That also keeps it deterministic, so a drill
replays identically for a student and their instructor.

### Instruments

Defined in `FX.INSTRUMENTS`. To add one, copy an entry and set `contract`, `pip`, `digits`,
`quote`, `start`, `vol`, `spread`, `commission`, `swap*`.

**The three pip-value cases are the whole point of the arithmetic** and are implemented in
`FX.pipValue()`:

- **USD-quoted** (EURUSD, GBPUSD, XAUUSD) → `pip × contract`, constant. EURUSD = $10/lot.
- **JPY-quoted** (USDJPY) → `(pip × contract) / price`, so it drifts with the rate (~$6.75).
- **Gold** → contract is **100 oz**, not 100,000. Pip 0.01 → $1/lot.

Getting these wrong silently breaks every risk calculation. Verified in §8.

### `FX.Account(opts)`

Models a real margin account: `balance`, `equity`, `usedMargin`, `freeMargin`, `marginLevel`.

- `open()` rejects orders that exceed free margin (a real broker behaviour students should meet).
- `update(feeds)` runs each tick: SL/TP fills (checked against bid/ask, not mid), pending order
  triggers, then margin call at 100% and **stop out at 50%** — force-closing the largest loser
  repeatedly until margin level recovers, exactly as a broker does.
- `stats()` returns win rate, expectancy in R, profit factor, drawdown, day P&L.

Trades store `riskAmount` at open, so closed trades carry a true **R multiple**.

### `FX.RiskGuard(policy)` — the teaching layer

Sits between the student and the order button. This is what makes the academy teach risk rather
than just describe it.

```js
{ mode: 'guard' | 'advise' | 'off',
  requireStop, maxRiskPct, maxOpenRiskPct, dailyStopPct, requireRR, minRR, maxLotsAbsolute }
```

`check()` returns `{ok, issues[], risk, suggested}`. Each issue carries a plain-English `detail`
explaining the arithmetic — that text is the lesson, so keep it concrete if you edit it.

Checks: no stop loss · position too large · total open risk · daily stop reached · reward:risk
below minimum · absolute lot cap.

**Progression across the course:** `guard` (blocks and explains) → `advise` (warns, allows,
records that you ignored it) → `off` (exam conditions). Every block is logged to
`guard.violations`, which several drills assess on.

---

## 5. Adding and editing content

### A module

Create `content/modules/mN.js` with the shape below, add a matching step to the right track in
`content/tracks.js` (or `content/path.js` for forex), then regenerate the catalogue:

```
node tools/build-catalog.mjs
```

The loader finds `content/modules/mN.js` and `content/lessons/lN.js` by id — there is no manifest
to update. Module ids: 1–12 forex, 101–108 equities, 201–206 bonds, 301–305 futures,
401–406 options, 501–505 crypto. Set `track:` on the module to match.

```js
{
  id, title, tagline, level, duration,
  objectives: [],                 // SHOWN TO STUDENTS — write in plain second person
  misconceptions: [],             // instructor only, gated behind Auth.isInstructor()
  glossary: [{t, d}],             // feeds the site-wide glossary
  slides:  [{ kicker, title, bullets:[], body, visual, note }],
  practical: { title, time, intro, setup:[], steps:[{h,d}], figure,
               deliverable, rubric:[{c,d}], pitfalls:[] },
  homework: [],
  quiz: [{ q, options:[], a, why }]   // a = INDEX of the correct option
}
```

- Inline markup in any string: `**bold**`, `*italic*`, `` `code` ``.
- `visual` / `figure` take raw inline SVG. Use the `.fig` classes (`.up`, `.dn`, `.acc`, `.dash`,
  `.lbl`, `.lbl-sm`) so diagrams follow the light/dark theme.
- `note` is the instructor note — hidden with the **N** key during presenting.

**What students see and what they do not.** `slides`, `misconceptions`, `note`, `practical.rubric`
and `homework` are instructor material, gated behind `Auth.isInstructor()` in `renderLesson` and
`renderNotes` (`assets/app.js`). `objectives` and `glossary` are shown to *both*, so they must read
as plain second-person English — no "the student can", no jargon defined with more jargon. Two
separate leaks of instructor content into the student view have already happened; both were caught
by reading the live student page rather than the source.

### A lesson file

`content/lessons/lN.js` is what a student actually reads. **Every lesson needs a `teach` block.**
Without one, `assets/lesson.js` falls back to paging the student through the presenter slides —
which is precisely what they must never see.

```js
window.LESSONS[N] = [{
  title: 'Plain-language lesson title',
  slides: [0, 1],                    // instructor only; students never page these
  teach: {
    lead:  ['paragraph', 'paragraph with **bold**'],   // teach BEFORE testing
    terms: [{ term, plain, like }],  // `like` is the everyday comparison — required
    close: ['paragraph', '…']
  },
  check: [{ q, options: [], a, why }]   // a = INDEX of the correct option
}];
```

House style, established across all 26 modules and worth keeping:

- Second person, addressed to one student. Never "the student", never "students".
- **Everyday comparison first, jargon second.** Every `terms` entry carries a `like`.
- State the correction rather than hedging it. No repeated risk disclaimers — the site footer
  carries the standing one, and students told us the constant repetition was wearing.
- Reuse earlier analogies as callbacks across modules; the tracks are meant to build.

Run `node tools/check-teaching.mjs` after editing. It reports any module still falling back to
slides, missing `like` comparisons, instructor-register wording, and answer indices pointing at
nothing. It exits non-zero on any problem.

### A drill

Append to `content/drills.js`:

```js
{
  id, module, title, brief,
  instrument, allowInstruments: [],
  account: { balance, leverage },
  policy:  { …RiskGuard policy… },
  scenario:{ trend, regimeLock, volMult },   // optional market shaping
  objectives: [], hint,
  test: function (ctx) {                      // ctx = {account, guard, stats, feeds}
    return { pass: bool, progress: 0..1, detail: 'shown under the progress bar' };
  }
}
```

`test()` runs continuously against live account state. Keep it cheap — it is called several times
a second.

### An analysis lab

The simulator carries four instruments — EURUSD, GBPUSD, USDJPY, XAUUSD. It has no shares, no
order book, no earnings gaps and no bonds, so the equities and bonds tracks cannot have terminal
drills. Adding those instruments to the engine would be the wrong fix: those tracks turn on
judgement rather than execution, and a faked order book teaches the wrong thing.

So a lab is a **worked exercise over supplied data**. Append to `content/labs.js`:

```js
{
  id, module, kind: 'analysis',
  title, brief,
  dataset: [                       // what the student reasons about
    { type: 'note',   body },
    { type: 'table',  title, head: [], rows: [[]], foot },
    { type: 'ladder', title, offers: [{price, size}], bids: [{price, size}], foot }
  ],
  tasks: [
    { kind: 'calc',   q, answer, tol, unit, prefix, placeholder, hint, why },
    { kind: 'choice', q, options: [], a, why },        // a = INDEX
    { kind: 'sort',   q, buckets: [], items: [{label, bucket}], why }
  ],
  onPass
}
```

Then add a `{ type: 'drill', ref: '<id>' }` step to the right stage in `content/tracks.js`. Labs
record into `progress.drills` exactly as terminal drills do, so the path engine, the certificates
and the Trading Floor listing need no changes.

- **All tasks must be right to pass.** Retries are unlimited and the reasoning shows either way —
  a lab that only reports a score teaches nothing.
- `calc` answers are marked within `tol`. Input is cleaned of commas, spaces and currency symbols
  before parsing, because students paste from a calculator.
- **Every figure must be re-derivable from the `dataset`.** If you change a number in a table you
  must re-derive every `answer` that reads it, or correct work gets marked wrong. Write the
  arithmetic into `why` so the student sees it and the next editor can check it.

`assets/labs.js` holds the renderer; `assets/labs.css` the three answer widgets. Both are eager
(the Trading Floor needs `Labs.isLab` to list cards), so keep them small.

**Design drills so they cannot be passed by luck.** Assess on process (correct sizing, blocked
attempts, drawdown, compliance), not on profit. Note that `expectancy` deliberately passes on
30 trades regardless of whether they made money.

---

### 5.1 Code labs — running a student's own EA

A drill with `kind: 'code'` opens `assets/ea-editor.js`. The student writes an expert advisor and it
runs against the same `assets/engine.js` every other drill uses.

**The language is JavaScript, not MQL5, and the editor says so on the page.** Running MQL5 in a
browser means writing an interpreter for it — much larger, much less useful. The API is instead
*named* after MQL5 (`iMA`, `iClose`, `iTime`, `PositionsTotal`, `GlobalVariableSet`) so that the
structure and the guards transfer even though the syntax does not. That is the honest claim and it
is the one the track cares about.

**Student code runs in a Web Worker.** Three properties, all needed:

| Property | Why |
|---|---|
| Terminable | `while(true){}` cannot be interrupted from inside a script. The main thread terminates the worker. In the page it would freeze the tab. |
| No DOM | A Worker has no `document` and no `localStorage`, so student code cannot reach the session token or the progress store. |
| Fresh each run | One run cannot leave state behind that changes the next one's result. |

> ⚠️ **`assets/ea-runtime.js` must NEVER be added to `index.html`.** It is started by URL as a
> Worker. Loading it as a page script would run worker-only code in the page. It reads its cache
> version from `Content.ASSET_V`, which is why `loader.js` exports it.

**The run deadline counts only time the tab is visible.** A plain `setTimeout` is wrong here:
browsers throttle background tabs, delaying both the timer and delivery of the worker's reply. A
five-bar run measured **23.7 seconds** to report back from a hidden tab. With a naive timer, a
student who clicks Run and switches tabs is told their correct EA contains an infinite loop. There
is also a 120-second wall-clock backstop so a worker cannot spin forever — and when *that* is what
tripped, the message says the page was backgrounded rather than blaming the code.

**Marking is behavioural, never textual.** A check reads the run report — order attempts, fills,
stop distances, risk percentages, per-bar counts, the restart — and never the source. Grading on the
presence of a string like `isNewBar` would pass code that does not work and fail code that does.

**The restart is mid-bar, deliberately.** `restartAt` recompiles the EA halfway through a bar, which
resets every variable the student declared while leaving positions (broker-side) and
`GlobalVariableSet` (terminal-side) intact. On a bar *boundary* it would prove nothing — the EA has
not acted on that bar yet. The bar chosen for `ea-restart` was found by sweeping every candidate for
one where the naive guard demonstrably duplicates and the correct one demonstrably does not.

**Every task carries a `solution` that students never see.** `tools/check-ea-tasks.mjs` uses it to
prove the task is possible, and proves the `starter` fails at least one check so the exercise is not
free. On first run it caught three real defects: a volatility gate set at 18 pips on a feed whose
ATR never drops below 32, a gold stop clamp that pinned every trade to the same distance, and the
bar-boundary restart above.

```bash
node tools/check-ea-tasks.mjs
```

## 6. The access gate — read this carefully

`auth.js` + `content/roster.js`.

### What it does

- Student enters a name and an access code → a session in `localStorage`.
- Progress (modules opened, quiz scores, drills passed) stored per student id.
- An instructor code unlocks `#/instructor`: roster view and a SHA-256 code hashing tool.
- Codes may be plaintext (`code:`) or hashed (`hash:`). Hashing keeps the plaintext out of the
  page source.

### What it is NOT

**It is not security, and it must never be treated as security.**

- Every check runs in the student's browser. Anyone can open DevTools and bypass it in seconds.
- The repo is public, so all course content is readable without signing in at all.
- Hashed codes only stop casual reading of the source. The hash list ships to the client and
  short codes are trivially brute-forced.
- Progress is **per-device**. A student working at home does not appear in the instructor roster
  on the classroom machine. There is no central record.

It is a register that keeps progress separate and keeps the site tidy for a private cohort.
That is all it is for.

### Adding a student

Edit `content/roster.js`, add a seat, give the code out privately:

```js
{ id: 'student-4', name: 'Seat 4', code: 'pick-something' }
```

`id` must be unique and must never be reused — progress is keyed on it.

To hash instead: sign in as instructor → `#/instructor` → Hash tool → replace `code:` with `hash:`.

---

## 7. Server mode — real login and central progress

The academy runs in one of two modes, chosen by `window.API_BASE` in `content/roster.js`.

| | LOCAL mode (`API_BASE = ''`) | SERVER mode (`API_BASE` set) |
|---|---|---|
| Code check | In the browser, against `roster.js` | On the server, against PBKDF2 hashes in D1 |
| Bypassable in DevTools | Yes | No |
| Progress stored | `localStorage`, per device | D1 database, per account |
| Follows a student between devices | No | Yes |
| Instructor sees work done at home | No | Yes |
| Cost | Free | Free |

**The frontend can stay on GitHub Pages either way.** The Worker is a separate service the browser
calls; it does not need to host the site. That is why `n1forexacademy.github.io` can keep real login.

### What server mode does and does not do

- **Does:** make authentication real, make progress central and tamper-resistant, keep sessions
  revocable.
- **Does not:** hide the course content. The files still come from public GitHub Pages. Hiding the
  material is a separate decision — see §7.4.

### 7.1 One-time setup

All of this is free tier. Run from the `worker/` directory.

> **Windows PowerShell users:** PowerShell 5.1 does not support `&&` as a command separator.
> Every command below is therefore on its own line — run them one at a time. (Use `;` if you want
> to chain unconditionally.)

```powershell
cd C:\Users\Jonathan\Forex_Teacher\worker
```

```powershell
npx wrangler login
```

```powershell
npx wrangler d1 create n1-academy
```

Copy the printed `database_id` into `worker/wrangler.toml`, then create the tables:

```powershell
npx wrangler d1 execute n1-academy --remote --file=./schema.sql
```

Set the admin key — pick a long random string. It protects *enrolment*, not student sign-in:

```powershell
npx wrangler secret put ADMIN_KEY
```

```powershell
npx wrangler deploy
```

Wrangler prints the Worker URL. Put it in `content/roster.js`:

```js
window.API_BASE = 'https://n1-academy-api.YOUR-SUBDOMAIN.workers.dev';
```

Commit and push. The site switches to server mode on the next Pages build.

### 7.2 Enrolling people — the admin panel

Day-to-day enrolment happens **in the website**, not the command line. Sign in as instructor and go
to `#/instructor`.

**Students tab** — every account with modules opened, average quiz score, drills passed and last
activity. Per row you can **Reset code** (they are signed out and must use the new one) or
**Revoke** (signed out, cannot sign back in, progress retained). There is also a direct-add form if
you want to set someone's code yourself.

**Invite links tab** — the normal route. Create a link with a label, a use limit and an expiry, then
send it to the student. They open it, choose **their own password**, and the account creates itself.
You never see or handle their credential, and there is nothing to read out over the phone.

The link is shown **once** — the token is stored only as a SHA-256 hash, so it cannot be recovered.
Create a new one if it is lost. Links can be revoked at any time, and `invite_uses` records who
joined through which link.

Authorisation for all of the above is the **instructor session**, not `ADMIN_KEY`.

### 7.2.1 Bootstrap — creating the very first instructor

Something has to create the first admin before any admin session can exist. That is the *only* thing
`ADMIN_KEY` is for, and it is needed exactly once.

Set a key (do **not** save it inside the repo folder — `.gitignore` blocks the obvious filenames,
but keep it elsewhere entirely):

```powershell
npx wrangler secret put ADMIN_KEY
```

Then create your instructor account, choosing your own code:

```powershell
$API="https://n1-academy-api.n1forexacademy.workers.dev"; $KEY="your-admin-key"
```

```powershell
Invoke-RestMethod -Uri "$API/api/enroll" -Method Post -Headers @{"x-admin-key"=$KEY} -ContentType "application/json" -Body '{"id":"instructor","name":"Your Name","code":"your-own-code","role":"instructor"}'
```

Sign in with that code and everything else is in the admin panel. If you ever lose instructor access,
rotate `ADMIN_KEY` and repeat this to recover.

### 7.2.2 Direct API (rarely needed)

In **PowerShell** (note `Invoke-RestMethod`, not curl — PowerShell aliases `curl` to something else
and the flags will not work):

```powershell
$API="https://n1-academy-api.YOUR-SUBDOMAIN.workers.dev"; $KEY="your-admin-key"
```

```powershell
Invoke-RestMethod -Uri "$API/api/enroll" -Method Post -Headers @{"x-admin-key"=$KEY} -ContentType "application/json" -Body '{"id":"instructor","name":"Instructor","code":"a-long-private-code","role":"instructor"}'
```

```powershell
Invoke-RestMethod -Uri "$API/api/enroll" -Method Post -Headers @{"x-admin-key"=$KEY} -ContentType "application/json" -Body '{"id":"student-1","name":"Sam","code":"another-long-code"}'
```

In **Git Bash / macOS / Linux**:

```bash
curl -X POST "$API/api/enroll" -H "x-admin-key: $KEY" -H "Content-Type: application/json" -d '{"id":"student-1","name":"Sam","code":"another-long-code"}'
```

Codes must be at least 8 characters. Re-running `enroll` with an existing `id` **changes that
person's code** — that is the password-reset path. `id` must never be reused for a different person,
because progress is keyed on it.

To remove someone (deactivates the account and kills their live sessions):

```powershell
Invoke-RestMethod -Uri "$API/api/revoke" -Method Post -Headers @{"x-admin-key"=$KEY} -ContentType "application/json" -Body '{"id":"student-1"}'
```

### 7.3 Operational notes

- **CORS** — `ALLOWED_ORIGINS` in `wrangler.toml` lists who may call the API. It must contain the
  exact site origin, no trailing slash. Add `http://localhost:8777` for local work. Change the
  site's domain and you must update this or every login fails.
- **Sessions** last 30 days, stored hashed, and are deleted on sign-out or revoke.
- **Offline tolerance** — if the API is unreachable mid-lesson, progress keeps accumulating in
  memory and posts when it returns. A lesson never blocks on the network.
- **Free tier headroom** — 100k Worker requests/day and a 5GB D1. A cohort of a few students uses a
  rounding error of this.
- **Never commit `ADMIN_KEY`.** It lives in `wrangler secret`, not in any file.

### 7.4 If you also want the content private

Only needed if the material itself must not be publicly readable. It costs you the `github.io`
domain and adds a second login for students, so do not do it unless you actually need it.

1. Make the GitHub repo **private** and turn **GitHub Pages off** — otherwise it remains an open
   back door serving the same files.
2. Host on **Cloudflare Pages** (`npx wrangler pages deploy . --project-name=n1forexacademy`).
   It deploys from private repos fine.
3. Put **Cloudflare Access** in front of it (Zero Trust → Access → self-hosted app). Free for up to
   50 users. Unauthenticated requests never reach the site.

Note the UX cost: students would sign in to Access *and* to the academy. If you go this route it is
usually better to drop the academy's own login and read the identity from the Access JWT header
instead — more work, one login.

> 📘 **Reproducing this stack on another project?** `FREE-STACK-GUIDE.md` in this repository is a
> standalone, project-agnostic guide to the whole architecture — the free-tier limits, the build
> steps, the auth design forced by the CPU budget, and the seven traps that cost real time. This
> section stays project-specific; that document is the general one.

## 7.5 Background: why GitHub alone cannot do this

**Yes — substantially.** GitHub Pages serves static files and nothing else, so real auth is
impossible there. Cloudflare's free tier gives you server-side execution, which changes it
completely. Three options, cheapest effort first.

### Option A — Cloudflare Access (recommended; no code)

Zero Trust → Access → self-hosted application in front of the site. Free for **up to 50 users**.
Students sign in with a real identity (email one-time PIN, Google, etc.) and unauthenticated
requests **never reach the site at all**.

Requirements:
1. Host on **Cloudflare Pages**, not GitHub Pages (Access cannot protect a github.io domain).
2. Make the **GitHub repo private** — otherwise the content is still public regardless of the gate.
   Cloudflare Pages deploys from private repos fine.

This is the right answer if the goal is "only my students can see this".

### Option B — Pages Functions + KV (real accounts and central progress)

Cloudflare Pages Functions (free: ~100k requests/day) plus Workers KV (free: 100k reads/day,
1k writes/day) or D1. Add a `/functions/api/` directory; it deploys automatically with the site.

Gives you: server-verified passwords (hash with bcrypt/scrypt server-side — never in the browser),
HttpOnly session cookies, and **central progress**, so the instructor sees every student's results
from any device. That last point is the real win over the current build.

### Option C — stay as-is

Fine if the content is genuinely public and the gate is only separating progress. Costs nothing
and has no moving parts.

### Honest comparison

| | GitHub Pages (now) | Cloudflare Pages + Access | + Functions/KV |
|---|---|---|---|
| Cost | Free | Free ≤50 users | Free at this scale |
| Real auth | ✗ | ✓ | ✓ |
| Content hidden from public | ✗ | ✓ (repo must be private) | ✓ |
| Central progress | ✗ | ✗ | ✓ |
| Effort | — | ~30 min, no code | ~a day |

Migrating hosting is not disruptive: Cloudflare Pages builds from the same repo with build command
empty and output directory `/`. The site itself needs no changes.

---

### 7.1 Messaging

Two-way, student to instructor only. Added 14 August 2026 because the platform
told students to "ask your instructor" in three places and gave them no way to do it.

**One thread per student.** There is no recipient column in `messages` — `student_id` *is* the
thread, and the instructor is the other end of all of them. That makes the access rule short enough
to state in one sentence, which is why it is enforceable. A general recipient field would invite
student-to-student messaging, which needs moderation nobody is here to do.

**Access is decided in exactly one function**, `threadIdFor(user, requested)` in
`worker/src/index.js`. A student gets their own thread and nothing else; an instructor must name a
student. Every messaging handler goes through it. Verified against the live Worker:

| Attempt | Result |
|---|---|
| Student reads another student's thread by id | **403** |
| Student posts into another student's thread | **403** |
| Student calls `/api/admin/threads` | **403** |
| No token at all | **401** |
| Empty body | **400** |

**Reading a thread marks the other side's messages read**, in the same request. A separate
mark-as-read call is one round trip that can fail, and a badge stuck on a message the person has
plainly read is worse than no badge.

**Message bodies are escaped and rendered as text with line breaks. No markdown, deliberately.**
The moment a student can write markup into something that renders in the instructor's browser, it
stops being correspondence. Verified: `<img onerror>` and `<script>` sent by a student appear as
literal text in the instructor's view, create no elements, and execute nothing.

**Endpoints** (`GET`/`POST /api/messages`, `GET /api/messages/unread`, `GET /api/admin/threads`)
sit *above* the instructor-only gate on purpose — both sides use the same routes, and who may see
what is decided by `threadIdFor`, not by which side of a gate a route is written on.

The unread badge attaches to any element carrying `data-msg-link` and polls once a minute, skipping
hidden tabs.

#### Attachments

Up to three pictures per message, both directions. A student pastes a screenshot straight into the
box — Snipping Tool, PrtScn, a platform's "copy chart" all put an image on the clipboard, and making
someone save a file first is the difference between a feature people use and one they do not. Drag
and drop and a file picker also work.

**Compressed in the browser before it is ever sent**: downscaled to 1600px on the long edge and
re-encoded as JPEG, quality stepped down until it fits under 420 KB. Measured: a 2560×1440 chart
capture → **54 KB**; a 3840×2160 image of pure noise, a deliberate worst case, 27.2 MB → **375 KB**.
That compression is what makes storing bytes in D1 viable at all.

**The bytes live in D1, not R2.** R2 is the right home for objects and would be the obvious choice,
but enabling it requires a payment method on the account, and this platform's premise is free tiers
with no card attached (see `FREE-STACK-GUIDE.md`). D1's free tier is 5 GB. Moving to R2 later means
changing where `data` is read and written and nothing else, which is why the bytes sit in their own
table rather than in a column on `messages`.

> ⚠️ **Bind `.buffer`, never the `Uint8Array` view.** Binding the view stores its *toString* — a
> 72-byte PNG came back as the 152-character text `"137,80,78,71,13,10,26,10,7,7,…"`. Every picture
> would have been silently corrupted behind a successful-looking upload. Caught only by comparing
> the bytes that came back against the bytes that went in; a check that the request returned 200
> would have passed. There is now a SHA-256 round-trip check over 40 KB of random data.

**Serving is authenticated, not a public URL.** `GET /api/attachment/<id>` takes the same bearer
token as any other call and the same `threadIdFor()` rule decides access — which is why the front
end fetches images with `fetch` and turns them into blob URLs rather than putting the path into an
`<img src>`, which could not carry the token.

Tested against the live Worker:

| Attempt | Result |
|---|---|
| HTML uploaded as an image | **415** |
| SVG uploaded (scriptable — not allowlisted) | **415** |
| Real PNG bytes claiming `mime: text/html` | stored as `image/png` — the sniffed type wins |
| Another student fetching an attachment by id | **403** |
| No token | **401** |
| 900 KB payload | **413** (D1 itself accepted 600 KB through the binding) |

Responses carry `X-Content-Type-Options: nosniff`, `Content-Security-Policy: default-src 'none';
sandbox` and `Content-Disposition: attachment`, so even a hypothetical non-image that got past the
sniffer would be inert.

#### Removing a message or a picture

Two controls: **Remove** on a message, and an **×** on an individual picture that leaves the message
it belonged to. Both confirm first, because neither can be undone.

**Who may remove what** is decided by `messageIfDeletable()`, which both endpoints share so they
cannot drift apart:

| | May remove |
|---|---|
| Student | Their own messages, in their own thread. Nothing else |
| Instructor | Anything, in any thread |

A student deliberately **cannot** remove something the instructor sent them — otherwise a student
could quietly delete feedback they did not like. There is deliberately **no time limit** on a
student unsending: the usual reason a screenshot has to go is that it showed an account balance or a
real name, and that reason does not expire after five minutes.

**Messages are tombstoned; attachment rows are deleted outright.** The message row keeps its place
with `deleted_at` set and the body blanked, so the replies around it still read as replies to
something. The pixels genuinely leave the database — "hidden but still stored" is not removed, and
the person removing a picture of their own account balance needs it gone. Verified by querying D1
directly after a deletion: **zero rows, zero bytes.**

**Every read path is tombstone-aware.** A removed message stops counting toward unread badges, stops
being marked read, and stops appearing as a thread preview. That is four separate queries in
`worker/src/index.js`; a tombstone that only half-applies leaves a badge pointing at nothing.

Tested against the live Worker:

| Attempt | Result |
|---|---|
| Another student removes a message | **403** |
| Student removes the instructor's message | **403** |
| Another student removes just the picture | **403** |
| Owner removes one picture of two | **200** — message and the other picture survive |
| Serving the removed picture afterwards | **404** |
| Instructor removes a student's message | **200**, shown as removed by the instructor |
| Student unsends an unread message | instructor's unread drops 3 → 2 |

## 8. Verifying a change

**Content changes.** Two scripts, both cheap, both worth running every time:

```bash
node tools/check-teaching.mjs
```

Reports which modules teach and which still fall back to slides, plus structural problems. Should
say `26/26 modules teach. All written.` and exit 0. Add `--todo` for just the unwritten ids.

```bash
node tools/bump-assets.mjs
```

**Run this before every deploy that touches `assets/` or `content/`.** GitHub Pages sets its own
cache headers, so without a new `?v=` a returning student keeps the old lesson text. This bit us
three times during development.

**Verifying the live student view.** Screenshots do not work reliably here (the Browser pane needs
a visible compositing surface), so read the rendered text instead with `get_page_text`, or drive
the renderers directly in the page console. To inspect locked modules without faking server state,
wrap `Auth.progress` so it returns unlocked progress for reads and **swallows every patch** — then
reload to discard. Nothing reaches the database:

```js
var real = Auth.progress.bind(Auth);
Auth.progress = function (patch) {
  if (patch) return real();                      // writes go nowhere
  var p = real() || {}; p.overrides = {};
  (window.CATALOG || []).forEach(function (c) { p.overrides['m' + c.id] = 1; });
  return p;
};
```

**Engine changes.** No test framework. Verify in the browser console — the engine is deliberately
DOM-free so you can drive it directly. Serve locally first:

```bash
cd C:/Users/Jonathan/Forex_Teacher && python -m http.server 8777
```

**Pip values** (regressions here corrupt every risk figure):

```js
FX.pipValue(FX.INSTRUMENTS.EURUSD, 1, 1.085)   // 10      exactly $10/lot
FX.pipValue(FX.INSTRUMENTS.USDJPY, 1, 148.4)   // ~6.74   NOT 10
FX.pipValue(FX.INSTRUMENTS.XAUUSD, 1, 2338)    // 1       100oz contract
```

**Stop out** — expect a forced close and a heavy loss:

```js
const f=new FX.Feed('XAUUSD',{seed:99,volMult:1.6,history:200});
const a=new FX.Account({balance:1000,leverage:200}); const fs={XAUUSD:f};
a.open({side:'buy',lots:0.42},f,fs);        // margin level starts ~200%
for(let i=0;i<60000;i++){ f.tick(); if(a.update(fs).stopOut) break; }
a.balance;                                   // ~206 — was 1000
```

**Risk guard** — 2 lots with a 30-pip stop on $5,000 is 12%, must be blocked with a 0.16 suggestion.

Also check by hand: sign in with a student code, open a module, submit a quiz, run a drill, confirm
the progress bar advances, and check no console errors.

---

## 9. Known limitations

- **Progress is per-browser.** Clearing site data erases it. No cross-device sync. Fix = §7 Option B.
- **The gate is not security.** §6.
- **Simulated prices are not real market data.** Realistic in behaviour, not a historical replay.
  Do not present it as backtesting against real history.
- **No mobile-first design for the terminal.** It stacks below 900px and is usable, but the drills
  really want a laptop.
- **Session times in Module 5 and the Toolkit are UTC** and drift with daylight saving. Students are
  told to verify against their broker's clock.
- **`slides` count on the home page** is computed live, so it self-corrects when modules change.

---

## 10. Deploying

Push to `main`; GitHub Pages rebuilds in 30–60s.

PowerShell (no `&&` — use `;` or separate lines):

```powershell
cd C:\Users\Jonathan\Forex_Teacher; git add -A; git commit -m "message"; git push
```

Auth on this machine is GitHub CLI (`gh auth login`) as `n1forexacademy`, stored in Windows
Credential Manager. Commit identity is set **repo-locally** so the global `mrjoetheukman` identity
used by another project is untouched — check with `git config --get user.name` inside this folder.

Verify a deploy:

```bash
curl -s -o /dev/null -w "%{http_code}" https://n1forexacademy.github.io/
```

---

## 11. If you are an AI agent picking this up

- Read `engine.js` before changing anything in `terminal.js` — the UI is a thin shell over it.
- Content edits are data edits. Do not add a templating language or build step; the no-build
  property is deliberate so a non-developer can maintain the course text.
- Preserve determinism: no `Math.random()` in price generation.
- The risk-guard `detail` strings are teaching copy, not UI chrome. Keep them specific and numeric.
- Do not present the access gate as security anywhere in the UI or docs.
- The disclaimers in the footer and on the Trading Floor are deliberate and should stay.
