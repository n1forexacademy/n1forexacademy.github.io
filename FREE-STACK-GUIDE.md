# Building a Real Server-Side Web App for £0

**GitHub Pages + Cloudflare Workers + D1 — the protocol, the reasoning, and the traps.**

This document exists because "free hosting" usually means one of two disappointments: a static site
that cannot log anyone in, or a free dyno that sleeps and wakes on a URL you would be embarrassed to
give a client.

This is a third option. It runs a **real** application — genuine accounts, hashed passwords, server-
side sessions, a database, an admin panel — with **no monthly cost, no cold starts, and no credit
card**. It is what N1 Forex Academy runs on today.

It is written so another developer can reproduce it from scratch for any project. Everything here
was learned by building it, including the parts that went wrong.

---

## Contents

1. [The problem, stated properly](#1-the-problem-stated-properly)
2. [The architecture, and why these three pieces](#2-the-architecture-and-why-these-three-pieces)
3. [What each free tier actually gives you](#3-what-each-free-tier-actually-gives-you)
4. [Build it: step by step](#4-build-it-step-by-step)
5. [The auth design, and the constraint that shaped it](#5-the-auth-design-and-the-constraint-that-shaped-it)
6. [The seven traps](#6-the-seven-traps)
7. [Operating it](#7-operating-it)
8. [When you outgrow this, and what it costs then](#8-when-you-outgrow-this-and-what-it-costs-then)
9. [What I rejected, and why](#9-what-i-rejected-and-why)
10. [Checklist](#10-checklist)

---

## 1. The problem, stated properly

A static host serves files. That is all it does. GitHub Pages will serve your HTML, CSS and
JavaScript to the world, free, on a decent domain, forever — and it will never run a line of your
code on a server.

Which means **no static host can, on its own**:

- check a password (the check would have to happen in the browser, where anyone can read it)
- keep a session (there is nothing to keep it on)
- store progress centrally (a student's laptop is not a database)
- hide a secret (everything shipped to the browser is public, including your API keys)
- enforce anything (if the rule lives in the browser, the user owns the rule)

The usual answers all cost something:

| Option | Why it disappoints |
|---|---|
| A VPS | Real money every month, plus patching, plus you are now a sysadmin |
| Free PaaS tiers | Cold starts measured in tens of seconds; awkward subdomains; services that sleep |
| Firebase / similar | Generous free tier, but your data model is now someone's proprietary product |
| "Just use localStorage" | Not a backend. Clear site data and the account never existed |

**The insight:** you do not need a server. You need *server-side execution* and *persistence*. Those
are different things, and both are now available free at the edge.

---

## 2. The architecture, and why these three pieces

```
   ┌─────────────────────────────┐
   │   BROWSER                   │
   │   your HTML/CSS/JS          │
   └──────────────┬──────────────┘
                  │  1. loads the site (static files)
                  ▼
   ┌─────────────────────────────┐
   │   GITHUB PAGES              │   free, unlimited bandwidth in practice,
   │   username.github.io        │   HTTPS, CDN, deploy = git push
   └─────────────────────────────┘

                  │  2. fetch() with a bearer token  ── CORS ──┐
                  ▼                                            │
   ┌─────────────────────────────┐                             │
   │   CLOUDFLARE WORKER         │   your server-side code.     │
   │   api.you.workers.dev       │   100k requests/day free.    │
   │   • password hashing        │   No cold start.             │
   │   • session tokens          │                              │
   │   • authorisation           │                              │
   │   • secrets live HERE       │ ◄────────────────────────────┘
   └──────────────┬──────────────┘
                  │  3. SQL
                  ▼
   ┌─────────────────────────────┐
   │   CLOUDFLARE D1             │   SQLite at the edge.
   │   • students                │   5 GB storage free.
   │   • sessions                │   Real SQL, real indexes.
   │   • progress                │
   └─────────────────────────────┘
```

**Three separate free tiers, from two companies, doing three different jobs.** That separation is
the whole trick — nobody offers all of this free as one product, but each piece individually is free
and they compose cleanly over HTTPS.

### Why each piece

**GitHub Pages** for the frontend, because it is the best free static host there is: real HTTPS on a
real domain, a CDN in front of it, and **deployment is `git push`**. No build pipeline, no deploy
key, no CI minutes. Your repository *is* the deployment.

**Cloudflare Workers** for the backend, because it is the only free serverless tier I found with **no
cold start**. This matters enormously and it is the reason the free PaaS options are unusable: a
sleeping dyno taking 30 seconds to wake makes your login screen look broken. Workers run at the
edge, always warm, on 100,000 requests a day.

**Cloudflare D1** for the database, because it is SQLite with real SQL, real indexes and real
migrations, on the same platform as the Worker — so the Worker talks to it through a **binding**
rather than a network call with credentials. There is no connection string to leak.

### What connects them

**CORS.** The browser loads from `github.io` and calls an API on `workers.dev` — two different
origins, so the browser blocks the request unless the API explicitly allows it. Getting this right
is step one of "why does nothing work".

**A bearer token.** The Worker issues an opaque token on login. The browser stores it and sends it
as `Authorization: Bearer <token>` on every subsequent call. Standard, boring, correct.

---

## 3. What each free tier actually gives you

Verified at the time of writing. **Check current limits before you rely on them** — free tiers move.

| Service | Free allowance | What that means in practice |
|---|---|---|
| **GitHub Pages** | 1 GB site, 100 GB/month soft bandwidth | Thousands of users. Not a concern for most projects. |
| **Workers** | 100,000 requests/day | ~1 req/sec sustained, and bursts far above it. |
| **Workers CPU** | **10 ms per request** | **The real constraint. See §5.** |
| **D1 storage** | 5 GB | Millions of rows of text. |
| **D1 reads** | 5 million rows/day | Plenty, *if you index*. Unindexed scans burn this fast. |
| **D1 writes** | 100,000 rows/day | Generous unless you write on every keystroke. |
| **Custom domain** | Free on both | HTTPS included, no certificate management. |

**No credit card is required for any of it.** That matters if you are building for someone else, or
if you simply do not want a bill arriving because a page went viral.

### The one that will actually bite you

**10 ms of CPU per request.** Not wall-clock — CPU. Waiting on the database is free; *computing* is
not. That budget is generous for ordinary work and immediately hostile to password hashing, which is
deliberately slow by design.

§5 is entirely about living inside that number.

---

## 4. Build it: step by step

Assumes Node.js installed and a GitHub account. Commands are PowerShell-first because that is what
Windows gives you; they work in bash unchanged unless noted.

### Step 1 — the static site

Create a repository named **exactly** `<your-username>.github.io`. The name is not cosmetic; it is
what makes Pages serve it at the root domain.

```bash
git init
git remote add origin https://github.com/<username>/<username>.github.io.git
```

Add an `index.html`, then:

```bash
git add -A
git commit -m "Initial site"
git push -u origin main
```

In the repo: **Settings → Pages → Source: Deploy from a branch → main → / (root)**.

Live at `https://<username>.github.io` within a couple of minutes.

> **Add an empty `.nojekyll` file at the repository root.** Without it, GitHub runs Jekyll over your
> site and silently refuses to serve any folder starting with an underscore. This wastes an
> afternoon the first time it happens because there is no error — the file is simply 404.

### Step 2 — the Worker

```bash
mkdir worker
cd worker
npm install -D wrangler
npx wrangler login
```

`wrangler login` opens a browser. **Watch which account you authorise** — see trap 4.

Create `wrangler.toml`:

```toml
name = "my-api"
main = "src/index.js"
compatibility_date = "2025-01-01"

workers_dev = true
preview_urls = false          # see trap 6

[vars]
ALLOWED_ORIGINS = "https://<username>.github.io,http://localhost:8777"
```

Create `src/index.js`:

```js
export default {
  async fetch(request, env) {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

Deploy:

```bash
npx wrangler deploy
```

You now have server-side code running at `https://my-api.<subdomain>.workers.dev`.

### Step 3 — the database

```bash
npx wrangler d1 create my-db
```

It prints a `database_id`. Paste it into `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "paste-the-id-here"
```

`binding = "DB"` is what makes `env.DB` exist inside your Worker. **No connection string, no
password, nothing to leak** — the platform wires it up.

Write `schema.sql`:

```sql
CREATE TABLE users (
  id         TEXT PRIMARY KEY,
  username   TEXT NOT NULL,
  pass_hash  TEXT NOT NULL,
  pass_salt  TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE UNIQUE INDEX idx_users_username ON users(username);   -- see §5

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);
```

Apply it. **`--remote` is not optional** — without it you have modified a local file and the
deployed Worker sees nothing:

```bash
npx wrangler d1 execute my-db --remote --file=./schema.sql
```

### Step 4 — CORS, or nothing will work

```js
function corsHeaders(env, request) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim());
  const origin = request.headers.get('Origin') || '';
  const ok = allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : (allowed[0] || ''),
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Max-Age': '86400'
  };
}
```

And handle the preflight **before any authentication check**:

```js
if (request.method === 'OPTIONS') {
  return new Response(null, { status: 204, headers: corsHeaders(env, request) });
}
```

> Browsers send an `OPTIONS` request before any request carrying an `Authorization` header. If your
> auth middleware runs first, it will reject the preflight — which has no token by design — and the
> browser reports a CORS error while your logs show a 401. You will look for a CORS bug that is not
> there.

**Echo the origin rather than using `*`.** Wildcard is incompatible with credentialed requests and
lets any site call your API.

### Step 5 — secrets

Anything sensitive is a **secret**, not a `[vars]` entry. Vars are in `wrangler.toml`, which is in
git, which is public.

```bash
npx wrangler secret put ADMIN_KEY
```

It prompts, stores it encrypted, and exposes it as `env.ADMIN_KEY`. It never touches your repo.

Add to `.gitignore` before you write a single secret anywhere:

```
node_modules/
.wrangler/
.dev.vars
*secret*
*_KEY.md
*.key
```

### Step 6 — point the frontend at the API

One line, in one file, so it is trivial to switch between local and production:

```js
window.API_BASE = 'https://my-api.<subdomain>.workers.dev';
```

Then every call:

```js
const res = await fetch(API_BASE + '/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
});
```

### Step 7 — test locally

```bash
npx wrangler dev            # Worker on localhost:8787
python -m http.server 8777  # static site on localhost:8777
```

Keep `http://localhost:8777` in `ALLOWED_ORIGINS` so the browser permits it.

---

## 5. The auth design, and the constraint that shaped it

**This section is the reason the guide exists.** Everything else is setup; this is where a naive
implementation fails in a way that is genuinely hard to diagnose.

### Password hashing on a 10 ms CPU budget

Passwords must be hashed with a **deliberately slow** function so that a stolen database cannot be
brute-forced. PBKDF2 is available in the Workers runtime via WebCrypto.

The usual advice is 100,000+ iterations. On Workers, **that exceeds the CPU budget and the request
dies with error 1101** — a generic "Worker threw an exception" with nothing useful in it.

```js
const PBKDF2_ITERATIONS = 25000;   // fits the budget; see the note below

async function hashPassword(password, saltHex) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: hexToBytes(saltHex),
      iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    key, 256
  );
  return bytesToHex(new Uint8Array(bits));
}
```

**25,000 iterations is a deliberate trade-off and you should record it as one.** It is weaker than
you would choose on a machine you controlled. It is enormously stronger than a plain hash, and it is
what fits. Document the number and the reason next to it, so the next person does not "improve" it
into an outage.

### The mistake that made it worse

The first version identified a user by their access code alone — no username. Login therefore had to
**try every row in the table**, running PBKDF2 against each one until something matched.

That is `O(n)` deliberately-expensive crypto per login. It blew the CPU budget **with a single
account in the database**, and the symptom was error 1101 on every attempt — which reads like a
platform problem, not a design problem.

**The fix was structural, not a tuning knob:**

```js
// One indexed lookup, then exactly ONE hash. Constant cost regardless of how
// many users exist.
const row = await env.DB.prepare(
  'SELECT id, name, pass_hash, pass_salt FROM users WHERE username = ? AND active = 1'
).bind(username.toLowerCase()).first();

// Same message either way, so the response cannot be used to discover which
// usernames exist.
const GENERIC = 'Username or password not recognised.';
if (!row) return json({ error: GENERIC }, 401);

const attempt = await hashPassword(password, row.pass_salt);
if (!safeEqual(attempt, row.pass_hash)) return json({ error: GENERIC }, 401);
```

**Compare the hashes in constant time.** A plain `!==` returns as soon as it finds a differing
character, so how long the comparison takes leaks how much of the hash was correct. It is a small
leak and it costs nothing to close:

```js
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;                 // one branch, whatever the input
}
```

> **The general rule: on a CPU-metered platform, any per-request work that scales with your data is
> a bug waiting for your second user.** It will pass every test you write on an empty database.

### Sessions

Issue an opaque random token. **Store only its hash**, so a database dump cannot be replayed as a
live session:

```js
const token = bytesToHex(crypto.getRandomValues(new Uint8Array(32)));
await env.DB.prepare(
  'INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)'
).bind(await sha256Hex(token), userId, Date.now() + 30 * 86400000).run();
// Return `token` to the client. Keep only the hash.
```

Plain SHA-256 is correct here and PBKDF2 would be wrong: a 256-bit random token has no guessable
structure, so there is nothing to slow an attacker down — and you would be paying that CPU cost on
**every authenticated request**, not just at login.

### Never say which half was wrong

Return the same error for an unknown username and a wrong password — as the login code above does.
Distinguishing them hands an attacker a way to enumerate valid accounts: they try usernames until
the message changes, and now they know who to target.

---

## 6. The seven traps

Each of these cost real time. The symptoms are listed because that is how you will meet them.

### Trap 1 — Stale caches after deploy

**Symptom:** you deploy a fix, reload, and the old version is still there. It works in a private
window, so you conclude you are going mad.

**Cause:** GitHub Pages sets its own cache headers and you cannot change them.

**Fix:** stamp a version on every asset URL. A new URL is a new file as far as the browser is
concerned.

```html
<script src="assets/app.js?v=24"></script>
```

Automate it — doing it by hand guarantees you will forget once and ship a broken mix of old and new:

```js
// tools/bump-assets.mjs — rewrite every ?v=N in index.html
const next = Math.max(...[...html.matchAll(/[?&]v=(\d+)/g)].map(m => +m[1])) + 1;
html = html.replace(/((?:assets|content)\/[^"?]+)(?:\?v=\d+)?/g, `$1?v=${next}`);
```

**If any code builds URLs at runtime, it needs the same version number** or you will bust the cache
on everything except the files you load dynamically — which is a genuinely confusing half-broken
state.

### Trap 2 — `--remote` on every D1 command

**Symptom:** migration reports success, deployed app behaves as though nothing changed.

**Cause:** without `--remote`, wrangler operates on a **local** SQLite file used by `wrangler dev`.

```bash
npx wrangler d1 execute my-db --remote --file=./migrations/002.sql   # production
npx wrangler d1 execute my-db --file=./migrations/002.sql            # local only
```

Two databases, one command, one flag between them.

### Trap 3 — CORS preflight rejected by your own auth

Covered in §4 step 4. **Handle `OPTIONS` before authentication.** The symptom is a browser CORS
error with a 401 in your logs, which sends you hunting in entirely the wrong place.

### Trap 4 — Deploying to the wrong Cloudflare account

**Symptom:** deploy succeeds, the URL 404s or shows someone else's Worker.

**Cause:** `CLOUDFLARE_API_TOKEN` in your environment silently overrides `wrangler login`. If you
have ever set one for another project, every wrangler command in that shell targets that account —
with no warning.

```powershell
$env:CLOUDFLARE_API_TOKEN = ""      # PowerShell
```
```bash
unset CLOUDFLARE_API_TOKEN          # bash
```

**Verify before you deploy anything that matters:**

```bash
npx wrangler whoami
```

### Trap 5 — Secrets committed to a public repo

**Symptom:** you notice a key in a file you pushed. Deleting it in a new commit does **not** help —
it remains in the history and on `raw.githubusercontent.com` forever.

**The order matters:**

1. **Rotate the key first.** Assume it is compromised the moment it was pushed.
2. Untrack the file and add it to `.gitignore`.
3. Purge it from history:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch path/to/secret" \
     --prune-empty --tag-name-filter cat -- --all
   git push --force-with-lease origin main
   ```
4. **Verify** the raw URL now 404s. Do not assume.

Better: make it impossible. `.gitignore` patterns like `*secret*` and `*_KEY.md` from day one, and
never write a key into a tracked file even temporarily.

### Trap 6 — Preview URLs leaving old auth code live

**Symptom:** none, which is the problem.

**Cause:** Workers can publish a permanent URL for every deployed version. For an authentication
API this means **a bug you fixed is still reachable at its old address**, indefinitely.

```toml
preview_urls = false
```

### Trap 7 — Underscore folders vanishing

Covered above: add `.nojekyll`. Files 404 with no error anywhere.

---

## 7. Operating it

### Deploying

```bash
# Frontend
node tools/bump-assets.mjs      # if you touched assets
git add -A && git commit -m "..." && git push       # Pages redeploys itself

# Backend
cd worker && npx wrangler whoami && npx wrangler deploy
```

Two independent deploys. **The frontend can ship without touching the API**, which is most changes.

### Migrations

Numbered, forward-only, each with a comment saying *why*:

```
migrations/
  002_invites.sql
  003_username.sql
```

Apply in order with `--remote`. Never edit an applied migration; add a new one.

### Inspecting the database

```bash
npx wrangler d1 execute my-db --remote --command "SELECT id, username FROM users LIMIT 10"
```

### Testing the API

A shell script hitting the live endpoints is worth more than mocks here, because the failures you
care about — CPU limits, CORS, bindings — only exist in the real environment.

```bash
curl -s -X POST "$API/api/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"..."}'
```

> This project's 43-assertion suite found that **authentication had never worked at all**. Nothing
> in local testing revealed it, because the CPU limit does not exist locally. Test against the
> deployed thing.

---

## 8. When you outgrow this, and what it costs then

Be honest about the ceiling.

| Signal | Roughly |
|---|---|
| 100k Worker requests/day | ~1,000 daily active users on a normal app |
| 5 GB D1 | Millions of text rows |
| 5M D1 row reads/day | Comfortable **if indexed**; a single unindexed scan can eat it |

**Growing costs about $5/month** for the Workers paid plan, which raises limits by orders of
magnitude. **No rewrite.** Same code, same architecture, a different plan — which is the real
argument for this stack over a free tier you would have to escape from.

### Where it is genuinely the wrong choice

- **Long-running or CPU-heavy work.** Video processing, large PDF generation, ML inference. The
  10 ms budget is not negotiable.
- **You need Postgres specifically.** D1 is SQLite. Different feature set.
- **Persistent connections.** WebSockets need Durable Objects, which is a different model.
- **Heavy relational querying at scale.** D1 is excellent for straightforward work and it is not a
  data warehouse.

---

## 9. What I rejected, and why

| Considered | Why not |
|---|---|
| **GitHub Pages alone** | No server. Cannot authenticate anyone. This was the starting point and the reason for everything else. |
| **Free PaaS (sleeping dynos)** | Cold starts of 30+ seconds make a login screen look broken. Also an awkward subdomain. |
| **Cloudflare Pages + Functions** | Genuinely good and would consolidate to one provider. Rejected only because GitHub Pages was already live and `git push` deployment was working. **If starting fresh, seriously consider this instead** — one provider, one deploy. |
| **Cloudflare Access (Zero Trust)** | Free for up to 50 users and requires *no code at all* — it gates the whole site at the edge. Rejected because it authenticates people into a site rather than giving you accounts you control, and this project needed per-student progress. **If you only need "keep strangers out", use this and skip the entire guide.** |
| **Firebase / Supabase** | Excellent products with real free tiers. Rejected to avoid coupling the data model to one vendor's SDK, and because the Worker gives full control of the auth logic. |
| **A VPS** | Costs money monthly and makes you responsible for patching an internet-facing box. |

**That Cloudflare Access row deserves emphasis.** A meaningful share of "I need a login" is actually
"I need to keep strangers out", and that is a configuration screen rather than a codebase. Ask which
one you have before building anything.

---

## 10. Checklist

Reproducing this from scratch:

- [ ] Repo named `<username>.github.io`, Pages enabled on `main` / root
- [ ] Empty `.nojekyll` at the repository root
- [ ] `.gitignore` covering `.wrangler/`, `.dev.vars`, `*secret*`, `*_KEY.md`, `*.key`
- [ ] `npx wrangler whoami` shows the account you intend
- [ ] `wrangler.toml` with `preview_urls = false` and an `ALLOWED_ORIGINS` var
- [ ] D1 created, `database_id` pasted in, schema applied **with `--remote`**
- [ ] `binding = "DB"` matches `env.DB` in the code
- [ ] `OPTIONS` handled **before** any auth check
- [ ] CORS echoes the origin; no `*`
- [ ] Password hashing sized to the CPU budget, with the number and reason commented
- [ ] Login is **one indexed lookup + one hash**, never a scan
- [ ] Session tokens stored **hashed**
- [ ] Same error message for unknown user and wrong password, compared in constant time
- [ ] Secrets via `wrangler secret put`, never in `wrangler.toml`
- [ ] Asset cache-busting automated, including any runtime-built URLs
- [ ] Tests run against the **deployed** API, not a local mock

---

## The short version

**Static files on GitHub Pages. Server-side code on Cloudflare Workers. Data in D1. Joined by CORS
and a bearer token.**

Three free tiers, two companies, one architecture that scales to about a thousand daily users before
it costs roughly the price of a coffee per month — and no rewrite when it does.

The hard parts are not the setup. They are the **10 ms CPU budget** (which dictates your auth
design), the **cache busting** (which will convince you a fix did not deploy), and the **`--remote`
flag** (which will convince you a migration did not apply).

Everything else is twenty minutes.

---

*Written from the N1 Forex Academy build. The live implementation is in this repository —
`worker/src/index.js` for the API, `worker/schema.sql` and `worker/migrations/` for the database,
`tools/bump-assets.mjs` for cache busting, and `ARCHITECTURE.md` §7 for project-specific setup.*
