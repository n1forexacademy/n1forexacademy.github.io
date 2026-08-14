/* N1 Forex Academy — trading terminal UI.
   Renders the chart and panels, drives the engine, and enforces the risk guard.
   Two skins over one engine: 'mt' (classic 4-panel terminal) and 'pro' (single-chart).
   These are teaching replicas, not clones of, or affiliated with, any real platform. */
(function () {
  'use strict';

  var TF_ORDER = ['M1', 'M5', 'M15', 'M30', 'H1', 'H4'];

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function fmt(n, d) { return (n === null || n === undefined || !isFinite(n)) ? '—' : n.toFixed(d === undefined ? 2 : d); }
  function money(n) { return (n < 0 ? '-$' : '$') + Math.abs(n).toFixed(2); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function utc(ms) {
    var d = new Date(ms);
    var p = function (x) { return (x < 10 ? '0' : '') + x; };
    return p(d.getUTCDate()) + '/' + p(d.getUTCMonth() + 1) + ' ' + p(d.getUTCHours()) + ':' + p(d.getUTCMinutes());
  }

  function Terminal(container, opts) {
    opts = opts || {};
    this.container = container;
    this.drill = opts.drill || null;
    this.skin = opts.skin || 'mt';
    this.onProgress = opts.onProgress || function () {};
    this.tf = 'M15';
    this.speed = 0;
    this.accum = 0;
    this.lastFrame = 0;
    this.uiClock = 0;
    this.crosshair = null;

    var d = this.drill;
    this.allowed = (d && d.allowInstruments) || ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD'];
    this.symbol = (d && d.instrument) || this.allowed[0];

    // One feed per tradeable instrument, all advancing together.
    this.feeds = {};
    var scen = (d && d.scenario) || {};
    var self = this;
    this.allowed.forEach(function (id, i) {
      self.feeds[id] = new FX.Feed(id, {
        seed: FX.hashSeed((d ? d.id : 'free') + ':' + id + ':' + (opts.seed || 1)),
        trend: scen.trend || 0,
        regimeLock: !!scen.regimeLock,
        volMult: scen.volMult || 1,
        history: 420
      });
    });

    this.account = new FX.Account((d && d.account) || { balance: 5000, leverage: 100 });
    this.guard = new FX.RiskGuard((d && d.policy) || {});

    this.build();
    this.attach();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  /* ---------- DOM ---------- */
  Terminal.prototype.build = function () {
    var d = this.drill;
    this.container.innerHTML = '';
    this.root = el('<div class="term skin-' + this.skin + '"></div>');

    var tfBtns = TF_ORDER.map(function (t) {
      return '<button class="tf" data-tf="' + t + '">' + t + '</button>';
    }).join('');

    this.root.innerHTML =
      '<div class="term-top">' +
        '<div class="term-sym" id="tSym"></div>' +
        '<div class="term-tfs">' + tfBtns + '</div>' +
        '<div class="term-speed">' +
          '<button class="spd" data-s="0">❚❚</button>' +
          '<button class="spd" data-s="1">1×</button>' +
          '<button class="spd" data-s="5">5×</button>' +
          '<button class="spd" data-s="20">20×</button>' +
          '<button class="btn-mini" id="tStep">Step</button>' +
        '</div>' +
        '<div class="term-skin">' +
          '<button class="skn" data-k="mt">Classic Terminal</button>' +
          '<button class="skn" data-k="pro">Pro Charts</button>' +
        '</div>' +
      '</div>' +

      '<div class="term-body">' +
        '<aside class="term-watch"><div class="pane-h">Market Watch</div><div id="tWatch"></div>' +
          '<div class="pane-h">Account</div><div id="tAcct" class="acct"></div>' +
        '</aside>' +

        '<main class="term-chart-wrap">' +
          '<canvas id="tCanvas"></canvas>' +
          '<div class="chart-tag" id="tTag"></div>' +
        '</main>' +

        '<aside class="term-ticket">' +
          '<div class="pane-h">Order</div>' +
          '<div class="ticket">' +
            '<div class="side-row">' +
              '<button class="side sell" data-side="sell">SELL<span id="tBid">—</span></button>' +
              '<button class="side buy" data-side="buy">BUY<span id="tAsk">—</span></button>' +
            '</div>' +
            // Units differ by instrument kind: lots for fx, whole shares, whole contracts.
            // A share or futures ticket that says "lots" teaches the wrong vocabulary, and a
            // 0.01 step on a futures ticket invites a position that cannot exist.
            '<label>Volume (' + (this.spec().unit || 'lots') + ')' +
            '<input type="number" id="tLots" step="' + this.sizeStep() + '" min="' + this.sizeStep() +
            '" value="' + this.defaultSize() + '"></label>' +
            '<label>Stop loss (pips)<input type="number" id="tSL" step="1" min="0" value="30"></label>' +
            '<label>Take profit (pips)<input type="number" id="tTP" step="1" min="0" value="60"></label>' +
            '<button class="btn-size" id="tSize">Size it to policy risk</button>' +
            '<div class="risk-read" id="tRisk"></div>' +
            '<button class="btn-place" id="tPlace">Place order</button>' +
          '</div>' +
          '<div class="pane-h">Risk</div><div id="tRiskPane" class="riskpane"></div>' +
        '</aside>' +
      '</div>' +

      '<div class="term-tabs">' +
        '<button data-p="pos" class="on">Positions</button>' +
        '<button data-p="hist">History</button>' +
        '<button data-p="jrnl">Journal</button>' +
        '<button data-p="log">Log</button>' +
        '<span class="term-tabs-sp"></span>' +
        '<button class="btn-mini" id="tReset">Reset drill</button>' +
      '</div>' +
      '<div class="term-pane" id="tPane"></div>' +

      (d ? '<div class="drill-box" id="tDrill"></div>' : '');

    this.container.appendChild(this.root);

    this.canvas = this.root.querySelector('#tCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.paneKey = 'pos';

    if (d) this.renderDrill();
    this.syncButtons();
  };

  Terminal.prototype.syncButtons = function () {
    var self = this;
    this.root.querySelectorAll('.tf').forEach(function (b) {
      b.classList.toggle('on', b.dataset.tf === self.tf);
    });
    this.root.querySelectorAll('.spd').forEach(function (b) {
      b.classList.toggle('on', +b.dataset.s === self.speed);
    });
    this.root.querySelectorAll('.skn').forEach(function (b) {
      b.classList.toggle('on', b.dataset.k === self.skin);
    });
  };

  /* ---------- events ---------- */
  Terminal.prototype.attach = function () {
    var self = this, r = this.root;

    r.querySelectorAll('.tf').forEach(function (b) {
      b.onclick = function () { self.tf = b.dataset.tf; self.syncButtons(); };
    });
    r.querySelectorAll('.spd').forEach(function (b) {
      b.onclick = function () { self.speed = +b.dataset.s; self.syncButtons(); };
    });
    r.querySelectorAll('.skn').forEach(function (b) {
      b.onclick = function () {
        self.skin = b.dataset.k;
        self.root.className = 'term skin-' + self.skin;
        self.syncButtons();
        self.resize();
      };
    });
    r.querySelector('#tStep').onclick = function () {
      var f = self.feeds; for (var k in f) for (var i = 0; i < f[k].ticksPerBar; i++) f[k].tick();
      self.account.update(f);
    };
    r.querySelectorAll('.side').forEach(function (b) {
      b.onclick = function () { self.place(b.dataset.side); };
    });
    r.querySelector('#tPlace').onclick = function () { self.place(self.lastSide || 'buy'); };
    r.querySelector('#tSize').onclick = function () { self.sizeIt(); };
    r.querySelector('#tReset').onclick = function () { self.reset(); };

    r.querySelectorAll('.term-tabs button[data-p]').forEach(function (b) {
      b.onclick = function () {
        self.paneKey = b.dataset.p;
        r.querySelectorAll('.term-tabs button[data-p]').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        self.renderPane();
      };
    });

    this.canvas.addEventListener('mousemove', function (e) {
      var b = self.canvas.getBoundingClientRect();
      self.crosshair = { x: e.clientX - b.left, y: e.clientY - b.top };
    });
    this.canvas.addEventListener('mouseleave', function () { self.crosshair = null; });

    this._resize = function () { self.resize(); };
    window.addEventListener('resize', this._resize);
    this.resize();
  };

  Terminal.prototype.destroy = function () {
    this.dead = true;
    window.removeEventListener('resize', this._resize);
  };

  Terminal.prototype.resize = function () {
    var wrap = this.canvas.parentElement;
    var dpr = window.devicePixelRatio || 1;
    var w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.cw = w; this.ch = h;
  };

  /* Instrument-kind helpers. fx trades in fractional lots; shares and futures do not.
     Rounding a futures order up to one whole contract is not a rounding error — it is a decision
     to risk several times the intended amount — so the ticket does not offer fractions at all. */
  Terminal.prototype.spec = function () { return FX.INSTRUMENTS[this.symbol]; };

  Terminal.prototype.sizeStep = function () {
    return this.spec().kind === 'fx' ? 0.01 : 1;
  };

  Terminal.prototype.defaultSize = function () {
    var k = this.spec().kind;
    return k === 'future' ? 1 : k === 'share' ? 100 : 0.10;
  };

  Terminal.prototype.sizeLabel = function (n) {
    var k = this.spec().kind;
    return (k === 'fx' ? n.toFixed(2) : String(Math.round(n))) + ' ' + (this.spec().unit || 'lots');
  };

  /* ---------- ordering ---------- */
  Terminal.prototype.readTicket = function (side) {
    var feed = this.feeds[this.symbol], spec = feed.spec;
    var lots = parseFloat(this.root.querySelector('#tLots').value) || 0;
    if (spec.kind !== 'fx') lots = Math.floor(lots);   // no half contracts, no fractional shares
    var slPips = parseFloat(this.root.querySelector('#tSL').value) || 0;
    var tpPips = parseFloat(this.root.querySelector('#tTP').value) || 0;
    var entry = side === 'buy' ? feed.ask() : feed.bid();
    var sl = null, tp = null;
    if (slPips > 0) sl = side === 'buy' ? entry - slPips * spec.pip : entry + slPips * spec.pip;
    if (tpPips > 0) tp = side === 'buy' ? entry + tpPips * spec.pip : entry - tpPips * spec.pip;
    return { side: side, lots: lots, sl: sl, tp: tp, slPips: slPips, tpPips: tpPips };
  };

  Terminal.prototype.sizeIt = function () {
    var side = this.lastSide || 'buy';
    var req = this.readTicket(side);
    if (!req.sl) { this.toast('Set a stop loss first — without one there is no risk to size against.'); return; }
    var s = this.guard.suggestLots(req, this.feeds[this.symbol], this.account, this.feeds);
    if (s && s > 0) {
      this.root.querySelector('#tLots').value = this.spec().kind === 'fx' ? s.toFixed(2) : String(Math.floor(s));
      this.toast('Sized to ' + this.sizeLabel(s) + ' — that makes your ' + req.slPips +
                 ' pip stop cost exactly ' + this.guard.policy.maxRiskPct + '% of equity.');
    } else {
      this.toast('Cannot size — check the stop distance.');
    }
  };

  Terminal.prototype.place = function (side) {
    this.lastSide = side;
    var feed = this.feeds[this.symbol];
    var req = this.readTicket(side);
    if (!(req.lots > 0)) { this.toast('Enter a volume above zero.'); return; }

    var verdict = this.guard.check(req, feed, this.account, this.feeds);
    if (verdict.issues.length) this.showGuard(verdict, req, side);
    if (verdict.blocked) return;

    var res = this.account.open(req, feed, this.feeds);
    if (!res.ok) { this.toast(res.error); return; }

    // Stamp risk metadata so drills and the journal can assess the trade later.
    if (verdict.risk) {
      res.position.riskAmount = verdict.risk.amount;
      res.position.riskAtOpen = verdict.risk.pct;
    }
    res.position.atrAtOpen = feed.atr(this.tf, 14);
    this.renderPane();
  };

  Terminal.prototype.showGuard = function (verdict, req, side) {
    var self = this;
    var blocking = verdict.issues.filter(function (i) { return i.severity === 'block'; });
    if (!blocking.length) return;
    var advisory = this.guard.policy.mode === 'advise';

    var items = blocking.map(function (i) {
      return '<div class="g-item"><h4>' + esc(i.title) + '</h4><p>' + esc(i.detail) + '</p></div>';
    }).join('');

    var fix = blocking.filter(function (i) { return i.fix; })[0];

    var modal = el(
      '<div class="g-back"><div class="g-modal">' +
        '<div class="g-head ' + (advisory ? 'advise' : 'block') + '">' +
          (advisory ? '⚠ Risk warning — you may proceed' : '⛔ Order blocked by your risk policy') +
        '</div>' +
        items +
        '<div class="g-actions">' +
          (fix ? '<button class="btn primary" id="gFix">Set ' + fix.fix.toFixed(2) + ' lots</button>' : '') +
          (advisory ? '<button class="btn" id="gGo">Place anyway</button>' : '') +
          '<button class="btn" id="gNo">' + (advisory ? 'Cancel' : 'Understood') + '</button>' +
        '</div>' +
      '</div></div>');

    document.body.appendChild(modal);
    var close = function () { modal.remove(); };
    modal.querySelector('#gNo').onclick = close;
    if (fix) modal.querySelector('#gFix').onclick = function () {
      self.root.querySelector('#tLots').value = fix.fix.toFixed(2);
      close();
    };
    if (advisory) modal.querySelector('#gGo').onclick = function () {
      close();
      var r2 = self.account.open(req, self.feeds[self.symbol], self.feeds);
      if (r2.ok && verdict.risk) {
        r2.position.riskAmount = verdict.risk.amount;
        r2.position.riskAtOpen = verdict.risk.pct;
        r2.position.atrAtOpen = self.feeds[self.symbol].atr(self.tf, 14);
      }
      self.renderPane();
    };
    modal.onclick = function (e) { if (e.target === modal) close(); };
  };

  Terminal.prototype.toast = function (msg) {
    var t = el('<div class="toast">' + esc(msg) + '</div>');
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('go'); }, 10);
    setTimeout(function () { t.remove(); }, 4200);
  };

  Terminal.prototype.reset = function () {
    if (!confirm('Reset this drill? All positions, history and progress on it are cleared.')) return;
    var d = this.drill, self = this;
    this.account = new FX.Account((d && d.account) || { balance: 5000, leverage: 100 });
    this.guard = new FX.RiskGuard((d && d.policy) || {});
    var scen = (d && d.scenario) || {};
    this.allowed.forEach(function (id) {
      self.feeds[id] = new FX.Feed(id, {
        seed: FX.hashSeed((d ? d.id : 'free') + ':' + id + ':' + Math.floor(Math.random() * 1e6)),
        trend: scen.trend || 0, regimeLock: !!scen.regimeLock,
        volMult: scen.volMult || 1, history: 420
      });
    });
    this.renderPane();
  };

  /* ---------- main loop ---------- */
  Terminal.prototype.loop = function (ts) {
    if (this.dead || !document.body.contains(this.root)) return;

    // A hidden tab still fires rAF in some hosts, and at 20x speed each frame
    // can advance 120 ticks across four feeds. Idle instead of burning CPU in
    // the background — and drop the accumulator so returning does not stampede.
    if (document.hidden) {
      this.lastFrame = 0;
      this.accum = 0;
      requestAnimationFrame(this.loop);
      return;
    }

    var dt = this.lastFrame ? Math.min(ts - this.lastFrame, 250) : 16;
    this.lastFrame = ts;

    if (this.speed > 0) {
      this.accum += (dt / 1000) * this.speed * 4;      // ticks per second
      var steps = Math.floor(this.accum);
      if (steps > 0) {
        this.accum -= steps;
        steps = Math.min(steps, 120);
        for (var s = 0; s < steps; s++) {
          for (var k in this.feeds) this.feeds[k].tick();
          this.account.update(this.feeds);
        }
      }
    }

    this.drawChart();
    this.uiClock += dt;
    if (this.uiClock > 120) { this.uiClock = 0; this.renderPanels(); }

    requestAnimationFrame(this.loop);
  };

  /* ---------- chart ---------- */
  Terminal.prototype.drawChart = function () {
    if (!this.cw) { this.resize(); if (!this.cw) return; }
    var ctx = this.ctx, W = this.cw, H = this.ch;
    var feed = this.feeds[this.symbol], spec = feed.spec;
    var css = getComputedStyle(document.body);
    var cBg = css.getPropertyValue('--term-bg') || '#0e1116';
    var cGrid = css.getPropertyValue('--term-grid') || '#1e2532';
    var cUp = css.getPropertyValue('--bull') || '#0f9d58';
    var cDn = css.getPropertyValue('--bear') || '#e0402b';
    var cTx = css.getPropertyValue('--term-ink') || '#b3bccd';

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = cBg; ctx.fillRect(0, 0, W, H);

    var padR = 66, padB = 22, padT = 8, padL = 6;
    var plotW = W - padR - padL, plotH = H - padB - padT;
    if (plotW < 40 || plotH < 40) return;

    var maxBars = Math.max(30, Math.min(170, Math.floor(plotW / 7)));
    var bars = feed.series(this.tf, maxBars);
    if (!bars.length) return;

    var hi = -Infinity, lo = Infinity, i;
    for (i = 0; i < bars.length; i++) { hi = Math.max(hi, bars[i].h); lo = Math.min(lo, bars[i].l); }

    // Keep this instrument's stops and targets inside the view.
    var lines = [];
    this.account.positions.forEach(function (p) {
      if (p.instrument !== spec.id) return;
      lines.push({ p: p.entry, c: cTx, t: '#' + p.id + ' ' + p.side });
      if (p.sl) lines.push({ p: p.sl, c: cDn, t: 'SL #' + p.id });
      if (p.tp) lines.push({ p: p.tp, c: cUp, t: 'TP #' + p.id });
    });
    lines.forEach(function (l) { hi = Math.max(hi, l.p); lo = Math.min(lo, l.p); });

    var pad = (hi - lo) * 0.08 || spec.pip * 10;
    hi += pad; lo -= pad;
    var span = hi - lo || 1;
    var y = function (price) { return padT + (hi - price) / span * plotH; };
    var bw = plotW / bars.length;

    // grid + price axis
    ctx.strokeStyle = cGrid; ctx.fillStyle = cTx;
    ctx.lineWidth = 1; ctx.font = '10px ui-monospace, monospace'; ctx.textBaseline = 'middle';
    for (i = 0; i <= 5; i++) {
      var gy = padT + (plotH / 5) * i, gp = hi - (span / 5) * i;
      ctx.beginPath(); ctx.moveTo(padL, gy); ctx.lineTo(padL + plotW, gy); ctx.stroke();
      ctx.fillText(gp.toFixed(spec.digits - 1), padL + plotW + 6, gy);
    }

    // candles
    for (i = 0; i < bars.length; i++) {
      var b = bars[i], cx = padL + i * bw + bw / 2;
      var up = b.c >= b.o;
      ctx.strokeStyle = up ? cUp : cDn;
      ctx.fillStyle = up ? cUp : cDn;
      ctx.beginPath(); ctx.moveTo(cx, y(b.h)); ctx.lineTo(cx, y(b.l)); ctx.stroke();
      var bodyT = y(Math.max(b.o, b.c)), bodyH = Math.max(1, Math.abs(y(b.o) - y(b.c)));
      ctx.fillRect(cx - Math.max(1, bw * 0.32), bodyT, Math.max(2, bw * 0.64), bodyH);
    }

    // time axis
    ctx.fillStyle = cTx; ctx.textAlign = 'center';
    var stepT = Math.max(1, Math.floor(bars.length / 6));
    for (i = 0; i < bars.length; i += stepT) {
      ctx.fillText(utc(bars[i].t), padL + i * bw + bw / 2, H - padB / 2);
    }
    ctx.textAlign = 'left';

    // position / SL / TP lines
    lines.forEach(function (l) {
      var ly = y(l.p);
      ctx.strokeStyle = l.c; ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, ly); ctx.lineTo(padL + plotW, ly); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = l.c; ctx.font = '9px ui-monospace, monospace';
      ctx.fillText(l.t, padL + 3, ly - 5);
    });

    // live bid/ask
    var by = y(feed.bid()), ay = y(feed.ask());
    ctx.strokeStyle = cTx; ctx.globalAlpha = 0.5; ctx.setLineDash([2, 3]);
    ctx.beginPath(); ctx.moveTo(padL, by); ctx.lineTo(padL + plotW, by); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    ctx.fillStyle = cTx; ctx.fillRect(padL + plotW, by - 8, padR, 16);
    ctx.fillStyle = cBg; ctx.font = 'bold 10px ui-monospace, monospace';
    ctx.fillText(feed.bid().toFixed(spec.digits - 1), padL + plotW + 5, by);
    ctx.fillStyle = cDn; ctx.font = '9px ui-monospace, monospace';
    ctx.fillText('ask ' + feed.ask().toFixed(spec.digits - 1), padL + plotW + 5, ay + (Math.abs(ay - by) < 12 ? -14 : 0));

    // crosshair
    if (this.crosshair) {
      var ch = this.crosshair;
      if (ch.x < padL + plotW && ch.y < padT + plotH) {
        ctx.strokeStyle = cTx; ctx.globalAlpha = 0.35; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(ch.x, padT); ctx.lineTo(ch.x, padT + plotH);
        ctx.moveTo(padL, ch.y); ctx.lineTo(padL + plotW, ch.y); ctx.stroke();
        ctx.setLineDash([]); ctx.globalAlpha = 1;
        var pAt = hi - (ch.y - padT) / plotH * span;
        ctx.fillStyle = cTx; ctx.font = '10px ui-monospace, monospace';
        ctx.fillText(pAt.toFixed(spec.digits - 1), padL + plotW + 6, ch.y);
      }
    }

    this.root.querySelector('#tTag').textContent =
      spec.name + '  ·  ' + this.tf + '  ·  spread ' + feed.spread().toFixed(1) + 'p' +
      (feed.spread() > spec.spread * 2.5 ? '  ⚠ WIDENED' : '');
  };

  /* ---------- panels ---------- */
  Terminal.prototype.renderPanels = function () {
    var self = this, a = this.account, f = this.feeds;
    var stats = a.stats(f), eq = stats.equity, um = a.usedMargin();
    var ml = a.marginLevel(f);
    var feed = f[this.symbol], spec = feed.spec;

    this.root.querySelector('#tSym').innerHTML =
      '<select id="tSymSel">' + this.allowed.map(function (id) {
        return '<option value="' + id + '"' + (id === self.symbol ? ' selected' : '') + '>' +
               FX.INSTRUMENTS[id].name + '</option>';
      }).join('') + '</select>';
    var sel = this.root.querySelector('#tSymSel');
    sel.onchange = function () { self.symbol = sel.value; };

    this.root.querySelector('#tBid').textContent = feed.bid().toFixed(spec.digits - 1);
    this.root.querySelector('#tAsk').textContent = feed.ask().toFixed(spec.digits - 1);

    // market watch
    this.root.querySelector('#tWatch').innerHTML = this.allowed.map(function (id) {
      var fd = f[id], sp = fd.spec;
      return '<div class="mw' + (id === self.symbol ? ' on' : '') + '" data-s="' + id + '">' +
             '<span>' + sp.name + '</span><b>' + fd.bid().toFixed(sp.digits - 1) + '</b>' +
             '<i>' + fd.spread().toFixed(1) + '</i></div>';
    }).join('');
    this.root.querySelectorAll('.mw').forEach(function (m) {
      m.onclick = function () { self.symbol = m.dataset.s; };
    });

    // account panel
    var mlTxt = isFinite(ml) ? ml.toFixed(0) + '%' : '—';
    var mlCls = !isFinite(ml) ? '' : ml <= a.stopOutLevel ? 'bad' : ml <= a.callLevel ? 'warn' : 'good';
    this.root.querySelector('#tAcct').innerHTML =
      '<div><span>Balance</span><b>' + money(a.balance) + '</b></div>' +
      '<div><span>Equity</span><b class="' + (eq >= a.startBalance ? 'good' : 'bad') + '">' + money(eq) + '</b></div>' +
      '<div><span>Used margin</span><b>' + money(um) + '</b></div>' +
      '<div><span>Free margin</span><b>' + money(a.freeMargin(f)) + '</b></div>' +
      '<div><span>Margin level</span><b class="' + mlCls + '">' + mlTxt + '</b></div>' +
      '<div><span>Today</span><b class="' + (stats.dayPL >= 0 ? 'good' : 'bad') + '">' +
        money(stats.dayPL) + ' (' + stats.dayPLPct.toFixed(2) + '%)</b></div>';

    // live risk readout on the ticket
    var req = this.readTicket(this.lastSide || 'buy');
    var risk = this.guard.riskOf(req, feed, a, f);
    var pv = FX.pipValue(spec, req.lots || 0, feed.price);
    var pol = this.guard.policy;
    var over = risk && risk.pct > pol.maxRiskPct + 0.001;
    this.root.querySelector('#tRisk').innerHTML =
      '<div><span>Pip value</span><b>' + money(pv) + ' / pip</b></div>' +
      (risk
        ? '<div><span>Risk</span><b class="' + (over ? 'bad' : 'good') + '">' + money(risk.amount) +
          '  (' + risk.pct.toFixed(2) + '%)</b></div>'
        : '<div><span>Risk</span><b class="warn">undefined — no stop</b></div>');

    // risk pane
    var atr = feed.atr(this.tf, 14);
    var openRisk = this.guard.openRiskPct(a, f);
    this.root.querySelector('#tRiskPane').innerHTML =
      '<div><span>Policy</span><b>' + (pol.mode === 'guard' ? 'Enforced' : pol.mode === 'advise' ? 'Advisory' : 'Off') + '</b></div>' +
      '<div><span>Max risk / trade</span><b>' + pol.maxRiskPct + '%</b></div>' +
      '<div><span>Open risk</span><b class="' + (openRisk > pol.maxOpenRiskPct ? 'bad' : '') + '">' + openRisk.toFixed(2) + '%</b></div>' +
      '<div><span>ATR(14) ' + this.tf + '</span><b>' + atr.toFixed(1) + ' pips</b></div>' +
      '<div><span>2× ATR stop</span><b>' + (atr * 2).toFixed(0) + ' pips</b></div>' +
      '<div><span>Leverage</span><b>1:' + a.leverage + '</b></div>' +
      '<div><span>Blocked attempts</span><b class="' + (this.guard.violations.length > 3 ? 'warn' : '') + '">' +
        this.guard.violations.length + '</b></div>';

    this.renderPane();
    if (this.drill) this.renderDrill();
  };

  Terminal.prototype.renderPane = function () {
    var a = this.account, f = this.feeds, self = this, html = '';

    if (this.paneKey === 'pos') {
      if (!a.positions.length) html = '<p class="empty">No open positions.</p>';
      else {
        html = '<table class="tt"><thead><tr><th>#</th><th>Symbol</th><th>Side</th><th>Lots</th>' +
               '<th>Entry</th><th>SL</th><th>TP</th><th>P&amp;L</th><th></th></tr></thead><tbody>' +
          a.positions.map(function (p) {
            var sp = FX.INSTRUMENTS[p.instrument], pl = a.positionPL(p, f[p.instrument]);
            return '<tr><td>' + p.id + '</td><td>' + sp.name + '</td>' +
              '<td class="' + (p.side === 'buy' ? 'good' : 'bad') + '">' + p.side.toUpperCase() + '</td>' +
              '<td>' + p.lots.toFixed(2) + '</td><td>' + p.entry.toFixed(sp.digits - 1) + '</td>' +
              '<td>' + (p.sl ? p.sl.toFixed(sp.digits - 1) : '—') + '</td>' +
              '<td>' + (p.tp ? p.tp.toFixed(sp.digits - 1) : '—') + '</td>' +
              '<td class="' + (pl >= 0 ? 'good' : 'bad') + '">' + money(pl) + '</td>' +
              '<td><button class="btn-x" data-close="' + p.id + '">Close</button></td></tr>';
          }).join('') + '</tbody></table>';
      }
    } else if (this.paneKey === 'hist') {
      if (!a.history.length) html = '<p class="empty">No closed trades yet.</p>';
      else {
        html = '<table class="tt"><thead><tr><th>#</th><th>Symbol</th><th>Side</th><th>Lots</th>' +
               '<th>Entry</th><th>Exit</th><th>Reason</th><th>R</th><th>P&amp;L</th></tr></thead><tbody>' +
          a.history.slice().reverse().map(function (h) {
            var sp = FX.INSTRUMENTS[h.instrument];
            return '<tr><td>' + h.id + '</td><td>' + sp.name + '</td>' +
              '<td>' + h.side.toUpperCase() + '</td><td>' + h.lots.toFixed(2) + '</td>' +
              '<td>' + h.entry.toFixed(sp.digits - 1) + '</td><td>' + h.exit.toFixed(sp.digits - 1) + '</td>' +
              '<td class="' + (h.reason === 'STOP OUT' ? 'bad' : '') + '">' + h.reason + '</td>' +
              '<td>' + (typeof h.r === 'number' ? h.r.toFixed(2) + 'R' : '—') + '</td>' +
              '<td class="' + (h.pl >= 0 ? 'good' : 'bad') + '">' + money(h.pl) + '</td></tr>';
          }).join('') + '</tbody></table>';
      }
    } else if (this.paneKey === 'jrnl') {
      var s = a.stats(f);
      html = '<div class="jr">' +
        '<div><span>Trades</span><b>' + s.trades + '</b></div>' +
        '<div><span>Win rate</span><b>' + s.winRate.toFixed(0) + '%</b></div>' +
        '<div><span>Expectancy</span><b class="' + (s.expectancyR >= 0 ? 'good' : 'bad') + '">' +
          s.expectancyR.toFixed(2) + 'R</b></div>' +
        '<div><span>Profit factor</span><b>' + (isFinite(s.profitFactor) ? s.profitFactor.toFixed(2) : '—') + '</b></div>' +
        '<div><span>Net P&amp;L</span><b class="' + (s.netPL >= 0 ? 'good' : 'bad') + '">' + money(s.netPL) + '</b></div>' +
        '<div><span>Max drawdown</span><b class="' + (s.drawdownPct > 8 ? 'bad' : '') + '">' +
          s.drawdownPct.toFixed(1) + '%</b></div>' +
        '<div><span>Blocked attempts</span><b>' + this.guard.violations.length + '</b></div>' +
        '</div>' +
        '<p class="empty">Expectancy is the only number here that describes an edge. Win rate on its own describes nothing.</p>';
    } else {
      var ev = a.events.slice().reverse().slice(0, 60);
      html = ev.length
        ? '<ul class="lg">' + ev.map(function (e) {
            return '<li class="' + e.type + '">' + esc(e.msg) + '</li>';
          }).join('') + '</ul>'
        : '<p class="empty">No activity yet.</p>';
    }

    var pane = this.root.querySelector('#tPane');
    pane.innerHTML = html;
    pane.querySelectorAll('[data-close]').forEach(function (b) {
      b.onclick = function () {
        var id = +b.dataset.close;
        var p = a.positions.filter(function (x) { return x.id === id; })[0];
        if (p) { a.close(id, f[p.instrument], 'manual'); self.renderPane(); }
      };
    });
  };

  Terminal.prototype.renderDrill = function () {
    var d = this.drill, box = this.root.querySelector('#tDrill');
    if (!d || !box) return;
    var stats = this.account.stats(this.feeds);
    var res = d.test({ account: this.account, guard: this.guard, stats: stats, feeds: this.feeds });
    var pct = Math.round((res.progress || 0) * 100);

    box.className = 'drill-box' + (res.pass ? ' passed' : '');
    box.innerHTML =
      '<div class="drill-h">' + (res.pass ? '✓ Drill passed' : 'Drill objective') + '</div>' +
      '<div class="drill-bar"><i style="width:' + pct + '%"></i></div>' +
      '<p class="drill-detail">' + esc(res.detail) + '</p>';

    if (res.pass && !this._passed) {
      this._passed = true;
      this.onProgress({ drill: d.id, passed: true, stats: stats });
      this.toast('Drill passed — ' + d.title);
    }
  };

  window.FXTerminal = Terminal;
})();
