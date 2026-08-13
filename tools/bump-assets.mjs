/* N1 Forex Academy — cache-bust every asset URL in index.html.

   GitHub Pages sets its own cache headers and we cannot change them, so a
   browser that already has assets/app.js will keep serving the old one after a
   deploy. That bit me three times during development, and it would bite every
   student after every update — they would see stale lessons and assume the
   course was broken.

   The fix: stamp ?v=<n> on every local script and stylesheet URL. A new value
   is a new URL, so the browser must fetch it.

   Run before deploying whenever assets/ or content/ changed:

     node tools/bump-assets.mjs

   Prints the new version. Idempotent — running it twice just bumps again. */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');
const INDEX = path.join(ROOT, 'index.html');

let html = fs.readFileSync(INDEX, 'utf8');

// Derive the next version from whatever is already stamped.
const seen = [...html.matchAll(/[?&]v=(\d+)/g)].map(m => +m[1]);
const next = (seen.length ? Math.max(...seen) : 0) + 1;

let stamped = 0;
html = html.replace(
  /(<(?:script\s+src|link\s+[^>]*href)=")((?:assets|content)\/[^"?]+)(?:\?v=\d+)?(")/g,
  (_all, head, url, tail) => { stamped++; return `${head}${url}?v=${next}${tail}`; }
);

fs.writeFileSync(INDEX, html, 'utf8');
console.log(`stamped ?v=${next} on ${stamped} asset URLs`);

// The lazy loader builds its URLs at runtime, so it needs the same version.
const LOADER = path.join(ROOT, 'assets', 'loader.js');
let loader = fs.readFileSync(LOADER, 'utf8');
const before = loader;
loader = loader.replace(/var ASSET_V = '\d+';/, `var ASSET_V = '${next}';`);
if (loader === before) {
  console.warn('WARNING: ASSET_V not found in loader.js — lazily loaded modules will not be busted.');
} else {
  fs.writeFileSync(LOADER, loader, 'utf8');
  console.log(`loader ASSET_V set to ${next}`);
}
