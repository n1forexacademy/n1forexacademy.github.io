# N1 Forex Academy

A forex trading academy that teaches risk management by **enforcing it**, not just describing it.

**Live:** https://n1forexacademy.github.io

Static site — no build step, no dependencies. Deploys to GitHub Pages or Cloudflare Pages as-is.

> **Maintaining or upgrading this?** Read [ARCHITECTURE.md](ARCHITECTURE.md) first. It covers the
> simulation engine, how to add content, what the access gate really is, and how to move to real
> authentication.

---

## What's in it

### Course — 12 modules

| | |
|---|---|
| **118 slides** | Presenter mode, instructor notes toggled with **N**, printable handouts |
| **12 practical labs** | 96 numbered steps, each ending in a markable deliverable + rubric |
| **72 quiz questions** | Auto-marked, with an explanation on every option |
| **131 glossary terms** | Searchable, linked to the module that teaches each |

**Foundation (M1–4)** — market structure · pips & lots · orders, leverage & margin · brokers & setup
**Chart reading (M5–8)** — sessions & timing · candlesticks & structure · levels & liquidity · indicators
**Risk & context (M9–10)** — fundamentals & news · **risk management and position sizing**
**Systemising (M11–12)** — strategy & trading plan · backtesting, journaling, psychology, automation

### Trading Floor — 7 assessed drills

A simulated market with a full account model: spread, commission, swap, margin, margin call, and a
broker that force-closes you at 50% margin level exactly as a real one does.

A **risk guard** sits between the student and the order button:

| Stage | Mode | Behaviour |
|---|---|---|
| Modules 2–10 | `guard` | Blocks oversized orders and explains the arithmetic |
| Module 11 | `advise` | Warns, allows, records that you overrode it |
| Module 12 | `off` | Exam conditions — no rails |

Drills assess **process, not profit**: correct position sizing, respected daily stops, survivable
drawdown, compliance rate. They cannot be passed by getting lucky.

Two interface skins over one engine — **Classic Terminal** (Market Watch + order ticket + terminal
panel) and **Pro Charts** (single large chart). Both are teaching replicas, unaffiliated with any
commercial platform.

The market is **deterministic from a seed**, so a drill replays identically for instructor and
student. That is what makes it teachable.

---

## Running a session

1. Student signs in with their access code (see below)
2. Open the module → **Present** → arrow keys or Space; **N** toggles instructor notes; **Esc** exits
3. Teach slides (~40 min) → Practical Lab (~60 min) → Quiz (~10 min)
4. Send them to the matching drill on the Trading Floor
5. Set the homework

Roughly **24 hours of contact time** — twelve ~2-hour sessions.

---

## Access codes

Edit `content/roster.js`. Ships with:

| Role | Code |
|---|---|
| Instructor | `n1-instructor` |
| Demo student | `n1-demo` |
| Seats 1–3 | `n1-seat-1`, `n1-seat-2`, `n1-seat-3` |

**Change these before teaching.** Sign in as instructor → `#/instructor` for the roster view and a
tool that converts a code to a SHA-256 hash, so plaintext isn't sitting in the page source.

> ⚠️ **This gate is not security.** It runs in the browser and can be bypassed by anyone who opens
> DevTools, and the repo is public so the content is readable regardless. It keeps student progress
> separate and keeps the site tidy for a private cohort — nothing more. For real access control see
> [ARCHITECTURE.md §7](ARCHITECTURE.md).

Progress is stored **per browser**. A student on another device starts fresh, and the instructor
roster only shows activity from the machine you're looking at.

---

## Local preview

Needs a web server — opening `index.html` directly (`file://`) will not load the content scripts.

```powershell
cd C:\Users\Jonathan\Forex_Teacher; python -m http.server 8777
```

Then http://localhost:8777

> **Windows PowerShell 5.1 does not support `&&`.** Use `;` to chain, or run commands one per line.
> Commands in this repo are written PowerShell-first for that reason.

---

## Deploying

Push to `main`; Pages rebuilds in 30–60 seconds.

```powershell
git add -A; git commit -m "Update course"; git push
```

Because the repo is named `<username>.github.io`, Pages is on automatically — no Settings change.
The `.nojekyll` file makes GitHub serve `assets/` and `content/` as-is; don't delete it.

### Cloudflare Pages

Same repo, no build. Framework preset **None**, build command **empty**, output directory `/`.

```bash
npx wrangler pages deploy . --project-name=n1forexacademy
```

Worth it if you want **real authentication** — Cloudflare Access is free for up to 50 users and puts
a genuine login in front of the site. See [ARCHITECTURE.md §7](ARCHITECTURE.md).

---

## Customising

Content is plain JavaScript data — no templating language.

- `content/modules/mN.js` — one file per module, loaded on demand
- `content/lessons/lN.js` — that module's lessons
- `content/catalog.js` — GENERATED metadata; rerun `node tools/build-catalog.mjs` after title changes
- `content/drills.js` — trading drills
- `content/roster.js` — students and access codes
- `assets/style.css` — change `--accent` and the brand colour propagates everywhere

Adding a module is appending an object; the home page, glossary, course plan and navigation pick it
up automatically. Full schemas in [ARCHITECTURE.md §5](ARCHITECTURE.md).

---

## Content note

Written from scratch for teaching. It covers standard, factual forex concepts — market structure,
pip arithmetic, margin mechanics, chart reading, risk formulas — in original wording, so it is yours
to publish, edit and rebrand.

---

## Risk disclaimer

Educational material only. Not investment advice. Trading FX and CFDs on margin carries a high risk
of losing all deposited funds, and the large majority of retail accounts lose money. **All trading in
this academy is simulated** — no real money, no broker, no live prices at any point. The disclaimers
in the site footer and on the Trading Floor should stay on any published version.
