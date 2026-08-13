# N1 Forex Academy — Architecture & Maintenance

Handover document. Read this before changing anything. It covers what each file does, how the
simulator works, how to add content, what the access gate is and is not, and how to upgrade.

**Live:** https://n1forexacademy.github.io
**Repo:** https://github.com/n1forexacademy/n1forexacademy.github.io

---

## 1. What this is

A static teaching site. **No build step, no framework, no package.json, no dependencies.**
Plain HTML/CSS/JS loaded with `<script>` tags. Open `index.html` through any web server and it runs.

Two halves:

- **Course** — 12 modules of presenter slides, practical labs, quizzes, glossary.
- **Trading Floor** — a simulated market with a full account model and 7 assessed drills.

---

## 2. File map

```
index.html              Shell. Loads every script in dependency order. Edit here to add a file.
.nojekyll               Stops GitHub Pages hiding folders. Do not delete.
.gitattributes          Normalises line endings.

assets/
  style.css             Base design system. CSS custom properties at the top drive all colour.
  academy.css           Gate, terminal, drill and instructor styles. Loaded second.
  app.js                Router, views, slide deck, quiz. The entry point.
  auth.js               Cohort gate + per-student progress (localStorage).
  engine.js             SIMULATION CORE. Market feed, account/margin model, risk guard. No DOM.
  terminal.js           Terminal UI. Canvas chart, order ticket, panels, guard modal.

content/
  roster.js             Cohort + access codes. EDIT THIS to add students.
  modules-1.js          Modules 1–4   (foundation)
  modules-2.js          Modules 5–8   (chart reading)
  modules-3.js          Modules 9–12  (risk, strategy, systemising)
  drills.js             The 7 assessed trading drills.
```

**Load order matters.** `engine.js` must load before `terminal.js`; both before `app.js`.
Content files must load before `app.js`. If you add a file, add its `<script>` tag to `index.html`.

### Global objects

| Global | Set by | Contains |
|---|---|---|
| `window.COURSE` | `modules-*.js` | Array of module objects (each file `.concat()`s onto it) |
| `window.DRILLS` | `drills.js` | Array of drill definitions |
| `window.ROSTER` | `roster.js` | Cohort name, instructor code, student seats |
| `window.FX` | `engine.js` | `Feed`, `Account`, `RiskGuard`, `INSTRUMENTS`, `pipValue` |
| `window.FXTerminal` | `terminal.js` | Terminal UI constructor |
| `window.Auth` | `auth.js` | Gate, session, progress |

---

## 3. Routes

Hash-based, so it works on any static host with no server rewrites.

| Route | View |
|---|---|
| `#/` | Home — Trading Floor promo + module grid |
| `#/m/:id` | Module (tabs: `slides`, `lesson`, `quiz`, `notes`) |
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

Append an object to any `content/modules-*.js`. Home page, glossary, course plan and navigation
pick it up automatically — nothing else to register.

```js
{
  id, title, tagline, level, duration,
  objectives: [],                 // "by the end the student can…"
  misconceptions: [],             // attack head-on
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

**Design drills so they cannot be passed by luck.** Assess on process (correct sizing, blocked
attempts, drawdown, compliance), not on profit. Note that `expectancy` deliberately passes on
30 trades regardless of whether they made money.

---

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

## 7. Real authentication (answering "would Cloudflare make a difference?")

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

## 8. Verifying a change

No test framework. Verify in the browser console — the engine is deliberately DOM-free so you can
drive it directly. Serve locally first:

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

```bash
cd C:/Users/Jonathan/Forex_Teacher && git add -A && git commit -m "message" && git push
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
