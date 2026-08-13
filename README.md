# N1 Forex Academy — Teaching Materials

A complete 12-module forex curriculum built for **slides + practical lesson** delivery.
Static site, no build step, no dependencies. Deploys to GitHub Pages or Cloudflare Pages as-is.

---

## What's in it

| | |
|---|---|
| **12 modules** | Foundation → chart reading → risk → systemising |
| **~125 slides** | Each with an instructor note you can toggle off |
| **12 practical labs** | Hands-on, supervised, each ending in a markable deliverable |
| **12 quizzes** | Auto-marked, with an explanation on every option |
| **~130 glossary terms** | Searchable, linked to the module that teaches each one |
| **Instructor toolkit** | Pip value tables, risk-of-ruin table, R:R table, session clock |

Roughly **24 hours of contact time** — twelve ~2-hour sessions.

### Curriculum

**Foundation (M1–4)** — what the market is · pips & lots · orders, leverage & margin · brokers & platform setup
**Reading the chart (M5–8)** — sessions & timing · candlesticks & structure · levels & liquidity · indicators
**Risk & context (M9–10)** — fundamentals & news · **risk management and position sizing**
**Systemising (M11–12)** — strategy & trading plan · backtesting, journaling, psychology & automation

---

## Running a session

1. Open the module, hit **Present**
2. Arrow keys / Space to move, **N** toggles instructor notes, **Esc** exits present mode
3. **Print handout** generates a student handout with note-taking space
4. Teach slides (~40 min) → Practical Lab (~60 min) → Quiz (~10 min) → set homework

Every lab lists what the student needs open, numbered steps, the deliverable, a marking rubric, and a "where students go wrong" section.

---

## Local preview

No server needed — just open `index.html`. Or:

```bash
python -m http.server 8000
```

---

## Deploy to GitHub Pages

Account: **n1forexacademy** → the site lives at **https://n1forexacademy.github.io**

First, on github.com: **New repository** → name it exactly `n1forexacademy.github.io` → **Public** → do *not* tick "Add a README" → Create.

Then from this folder:

```bash
git init && git add -A && git commit -m "N1 Forex Academy teaching materials"
```

```bash
git remote add origin https://github.com/n1forexacademy/n1forexacademy.github.io.git && git branch -M main && git push -u origin main
```

Because the repo is named `<username>.github.io`, Pages turns itself on — no Settings change needed. Live at **https://n1forexacademy.github.io** within a couple of minutes.

To publish an update later:

```bash
git add -A && git commit -m "Update course" && git push
```

The `.nojekyll` file is already included so GitHub serves the `assets/` and `content/` folders as-is.

---

## Deploy to Cloudflare Pages

**From the dashboard (no git needed):** Workers & Pages → Create → Pages → *Upload assets* → drag the whole folder in.

**From a git repo:** Connect the repo, then set:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

Or via CLI:

```bash
npx wrangler pages deploy . --project-name=n1forexacademy
```

---

## Customising

Content is plain JavaScript data — no templating language to learn.

- `content/modules-1.js` — Modules 1–4
- `content/modules-2.js` — Modules 5–8
- `content/modules-3.js` — Modules 9–12

Each module object:

```js
{
  id, title, tagline, level, duration,
  objectives: [],        // "by the end the student can…"
  misconceptions: [],    // things to attack head-on
  glossary: [{t, d}],    // feeds the site-wide glossary
  slides: [{ kicker, title, bullets, visual, note }],
  practical: { title, intro, setup, steps, deliverable, rubric, pitfalls },
  homework: [],
  quiz: [{ q, options, a, why }]   // a = index of correct option
}
```

Inline markup in any string: `**bold**`, `*italic*`, `` `code` ``.
`visual` takes raw inline SVG — use the `.fig` CSS classes (`.up`, `.dn`, `.acc`, `.dash`, `.lbl`) so diagrams follow the theme.

Adding a module: append an object to any content file. The home page, glossary, course plan and navigation all pick it up automatically.

**Colours** live as CSS custom properties at the top of `assets/style.css` — change `--accent` and the brand colour propagates everywhere. Light and dark themes are both defined.

---

## Content note

This material was written from scratch for teaching. It covers standard, factual forex concepts — market structure, pip arithmetic, margin mechanics, chart reading, risk formulas — expressed in original wording, so it's yours to publish, edit and rebrand.

---

## Risk disclaimer

Educational material only. Not investment advice. Trading FX and CFDs on margin carries a high risk of losing all deposited funds; the large majority of retail accounts lose money. The disclaimer in the site footer should stay on any published version.
