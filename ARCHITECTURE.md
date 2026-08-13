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
  auth.js               Sign-in + progress. Local mode OR server mode — see §7.
  engine.js             SIMULATION CORE. Market feed, account/margin model, risk guard. No DOM.
  terminal.js           Terminal UI. Canvas chart, order ticket, panels, guard modal.

worker/                 OPTIONAL backend. Only needed for server mode (§7).
  src/index.js          Auth + progress API (Cloudflare Worker).
  schema.sql            D1 tables: students, sessions, progress.
  wrangler.toml         Config. database_id and ALLOWED_ORIGINS go here.

content/
  roster.js             API_BASE switch + local-mode access codes. EDIT THIS.
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
