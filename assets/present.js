/* N1 Forex Academy — presenter mode.

   For teaching live in front of a class: true fullscreen, large type, speaker
   notes only the instructor sees, a slide grid for jumping, a session timer and
   a blackout key for when you want attention on you rather than the screen.

   Deliberately separate from the student experience. A student working at home
   gets lessons with checks; an instructor standing at a screen gets a deck. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                 .replace(/`(.+?)`/g, '<code>$1</code>')
                 .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  var S = null;   // active presentation state

  function slideHtml(mod, s) {
    return '<div class="pv-kicker">' + esc(s.kicker || mod.title) + '</div>' +
      '<h2>' + esc(s.title) + '</h2>' +
      (s.bullets ? '<ul>' + s.bullets.map(function (b) { return '<li>' + md(b) + '</li>'; }).join('') + '</ul>' : '') +
      (s.body ? '<div class="pv-body">' + md(s.body) + '</div>' : '') +
      (s.illus && window.ILLUS && window.ILLUS[s.illus]
        ? '<div class="pv-visual">' + window.ILLUS[s.illus] + '</div>' : '') +
      (s.visual ? '<div class="pv-visual">' + s.visual + '</div>' : '');
  }

  function draw() {
    if (!S) return;
    var mod = S.mod, s = mod.slides[S.i];
    var host = document.getElementById('pvStage');
    if (!host) return;

    host.innerHTML = '<div class="pv-slide">' + slideHtml(mod, s) + '</div>';

    document.getElementById('pvCount').textContent = (S.i + 1) + ' / ' + mod.slides.length;
    document.getElementById('pvFill').style.width =
      Math.round(((S.i + 1) / mod.slides.length) * 100) + '%';

    var notes = document.getElementById('pvNotes');
    notes.innerHTML = s.note
      ? '<b>Note</b>' + md(s.note)
      : '<span class="pv-nonote">No note for this slide.</span>';
    notes.hidden = !S.notes;

    var grid = document.getElementById('pvGrid');
    if (grid && !grid.hidden) buildGrid();
  }

  function buildGrid() {
    var grid = document.getElementById('pvGrid');
    grid.innerHTML = S.mod.slides.map(function (s, i) {
      return '<button class="pv-thumb' + (i === S.i ? ' on' : '') + '" data-i="' + i + '">' +
        '<span class="pv-tn">' + (i + 1) + '</span>' +
        '<span class="pv-tt">' + esc(s.title) + '</span></button>';
    }).join('');
    grid.querySelectorAll('.pv-thumb').forEach(function (b) {
      b.onclick = function () { S.i = +b.dataset.i; grid.hidden = true; draw(); };
    });
  }

  function go(d) {
    if (!S) return;
    var n = S.i + d;
    if (n >= 0 && n < S.mod.slides.length) { S.i = n; draw(); }
  }

  function tick() {
    if (!S) return;
    var el = document.getElementById('pvTimer');
    if (!el) return;
    var sec = Math.floor((Date.now() - S.started) / 1000);
    var m = Math.floor(sec / 60), r = sec % 60;
    el.textContent = m + ':' + (r < 10 ? '0' : '') + r;
  }

  function close() {
    if (!S) return;
    clearInterval(S.timer);
    document.onkeydown = S.prevKey || null;
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
    var root = document.getElementById('pvRoot');
    if (root) root.remove();
    document.body.classList.remove('pv-open');
    S = null;
  }

  function open(mod, startAt) {
    if (S) close();
    S = { mod: mod, i: startAt || 0, notes: true, started: Date.now(), prevKey: document.onkeydown };

    var root = document.createElement('div');
    root.id = 'pvRoot';
    root.className = 'pv-root';
    root.innerHTML =
      '<div class="pv-bar">' +
        '<span class="pv-mod">' + esc(mod.title) + '</span>' +
        '<span class="pv-count" id="pvCount"></span>' +
        '<span class="pv-timer" id="pvTimer">0:00</span>' +
        '<span class="pv-spacer"></span>' +
        '<button class="pv-btn" id="pvGridBtn" title="All slides (G)">Slides</button>' +
        '<button class="pv-btn" id="pvNotesBtn" title="Speaker notes (N)">Notes</button>' +
        '<button class="pv-btn" id="pvFullBtn" title="Fullscreen (F)">Full</button>' +
        '<button class="pv-btn pv-x" id="pvClose" title="Exit (Esc)">Exit</button>' +
      '</div>' +
      '<div class="pv-progress"><i id="pvFill"></i></div>' +
      '<div class="pv-stage" id="pvStage"></div>' +
      '<div class="pv-notes" id="pvNotes"></div>' +
      '<div class="pv-grid" id="pvGrid" hidden></div>' +
      '<button class="pv-edge pv-left"  id="pvPrev" aria-label="Previous slide">‹</button>' +
      '<button class="pv-edge pv-right" id="pvNext" aria-label="Next slide">›</button>' +
      '<div class="pv-black" id="pvBlack" hidden></div>';

    document.body.appendChild(root);
    document.body.classList.add('pv-open');

    root.querySelector('#pvClose').onclick = close;
    root.querySelector('#pvPrev').onclick = function () { go(-1); };
    root.querySelector('#pvNext').onclick = function () { go(1); };
    root.querySelector('#pvNotesBtn').onclick = function () {
      S.notes = !S.notes; document.getElementById('pvNotes').hidden = !S.notes;
    };
    root.querySelector('#pvGridBtn').onclick = function () {
      var g = document.getElementById('pvGrid');
      g.hidden = !g.hidden;
      if (!g.hidden) buildGrid();
    };
    root.querySelector('#pvFullBtn').onclick = function () {
      if (!document.fullscreenElement) {
        (root.requestFullscreen ? root.requestFullscreen() : Promise.reject()).catch(function () {});
      } else if (document.exitFullscreen) { document.exitFullscreen(); }
    };

    document.onkeydown = function (e) {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      var k = e.key;
      if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { e.preventDefault(); go(1); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(-1); }
      else if (k === 'Home') { S.i = 0; draw(); }
      else if (k === 'End') { S.i = S.mod.slides.length - 1; draw(); }
      else if (k === 'n' || k === 'N') { root.querySelector('#pvNotesBtn').click(); }
      else if (k === 'g' || k === 'G') { root.querySelector('#pvGridBtn').click(); }
      else if (k === 'f' || k === 'F') { root.querySelector('#pvFullBtn').click(); }
      else if (k === 'b' || k === 'B') {
        var bl = document.getElementById('pvBlack'); bl.hidden = !bl.hidden;
      }
      else if (k === 'Escape') {
        var g = document.getElementById('pvGrid');
        var blk = document.getElementById('pvBlack');
        if (!blk.hidden) { blk.hidden = true; }
        else if (!g.hidden) { g.hidden = true; }
        else close();
      }
    };

    S.timer = setInterval(tick, 1000);
    draw();
  }

  window.Present = { open: open, close: close };
})();
