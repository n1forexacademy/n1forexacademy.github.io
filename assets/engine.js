/* N1 Forex Academy — simulation engine.
   Pure logic, no DOM. Market feed, account/margin model, and the risk guard.
   Everything is deterministic from a seed so a lesson replays identically
   for instructor and student. */
(function () {
  'use strict';

  /* ---------- deterministic RNG ---------- */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function gauss(rnd) {
    var u = 0, v = 0;
    while (u === 0) u = rnd();
    while (v === 0) v = rnd();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function hashSeed(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  /* ---------- instrument specifications ----------
     contract = units per 1.00 lot. pip = price increment of one pip.
     quote    = currency the pip value lands in before conversion. */
  /* INSTRUMENTS
     `kind` decides how size, margin and P/L are computed:

       'fx'      lots × contract. Margin = notional / account leverage. The original four.
       'share'   size is a NUMBER OF SHARES (contract 1). Margin = notional / leverage, so an
                 account at leverage 1 pays in full, exactly like owning the stock. Shares also
                 carry `gap`, which fires a scheduled overnight jump — see Feed._step. That is
                 what lets Module 107's "size it, then gap it" be practised rather than read.
       'future'  size is a NUMBER OF CONTRACTS. Margin is a FIXED amount per contract set by the
                 exchange (`initialMargin`), NOT notional / leverage, and P/L comes from
                 `tickValue` rather than from contract × pip.

     Adding a kind means touching exactly three places: pipValue, marginFor, and the unit label.
     Everything else — stops, stop-out, the risk guard, the drill tests — already generalises.

     IMPORTANT: the feed is deterministic from a seed, so a drill replays identically for a
     student and their instructor. Any new call to this.rnd() inside _step would shift every
     existing forex drill. The gap logic is therefore guarded on `spec.gap` existing. */
  var INSTRUMENTS = {
    EURUSD: { id: 'EURUSD', name: 'EUR/USD', kind: 'fx', unit: 'lots', contract: 100000, pip: 0.0001, digits: 5, quote: 'USD',
              start: 1.0850, vol: 0.00042, spread: 1.2, commission: 7, swapLong: -0.68, swapShort: 0.21 },
    GBPUSD: { id: 'GBPUSD', name: 'GBP/USD', kind: 'fx', unit: 'lots', contract: 100000, pip: 0.0001, digits: 5, quote: 'USD',
              start: 1.2740, vol: 0.00055, spread: 1.6, commission: 7, swapLong: -0.94, swapShort: 0.32 },
    USDJPY: { id: 'USDJPY', name: 'USD/JPY', kind: 'fx', unit: 'lots', contract: 100000, pip: 0.01, digits: 3, quote: 'JPY',
              start: 148.40, vol: 0.055, spread: 1.4, commission: 7, swapLong: 0.86, swapShort: -1.42 },
    XAUUSD: { id: 'XAUUSD', name: 'Gold (XAU/USD)', kind: 'fx', unit: 'lots', contract: 100, pip: 0.01, digits: 2, quote: 'USD',
              start: 2338.00, vol: 1.35, spread: 22, commission: 9, swapLong: -3.10, swapShort: 1.05 },

    /* ---- shares. Size in shares; step is one penny. ----
       `gap` schedules an overnight jump: after `every` bars, price moves by `pct` in a direction
       chosen by the seed. Stops do not protect across it, which is the entire teaching point. */
    NBR:  { id: 'NBR', name: 'Northbrook Retail', kind: 'share', unit: 'shares', contract: 1, pip: 0.01, digits: 2, quote: 'USD',
            start: 412.00, vol: 0.62, spread: 3, commission: 0.02, swapLong: 0, swapShort: 0,
            gap: { every: 240, pct: 0.11, label: 'Results published overnight' } },
    KAV:  { id: 'KAV', name: 'Kestrel Aviation', kind: 'share', unit: 'shares', contract: 1, pip: 0.01, digits: 2, quote: 'USD',
            // Low vol on purpose: an ordinary stop must SURVIVE to the announcement, or the
            // student is simply stopped out normally and never meets the lesson the drill exists
            // to teach. Quiet share, one violent scheduled event — which is the realistic shape.
            start: 108.00, vol: 0.10, spread: 2, commission: 0.02, swapLong: 0, swapShort: 0,
            // dir: -1 because a profit warning only goes one way. Fixing the direction makes the
            // share-gap drill deterministic — a long position always meets the lesson, rather than
            // the student passing or failing on a coin flip they did not control.
            gap: { every: 45, pct: 0.22, dir: -1, label: 'Profit warning' } },

    /* ---- futures. Size in contracts; margin is fixed per contract. ---- */
    MESZ: { id: 'MESZ', name: 'Micro Index Future', kind: 'future', unit: 'contracts', contract: 5, pip: 0.25, digits: 2, quote: 'USD',
            start: 5000.00, vol: 1.10, spread: 1, commission: 0.75, swapLong: 0, swapShort: 0,
            tickValue: 1.25, initialMargin: 1200, maintMargin: 1000 },
    MCLZ: { id: 'MCLZ', name: 'Micro Crude Future', kind: 'future', unit: 'contracts', contract: 100, pip: 0.01, digits: 2, quote: 'USD',
            start: 78.00, vol: 0.030, spread: 2, commission: 0.50, swapLong: 0, swapShort: 0,
            tickValue: 1.00, initialMargin: 620, maintMargin: 520 }
  };

  var TIMEFRAMES = { M1: 1, M5: 5, M15: 15, M30: 30, H1: 60, H4: 240, D1: 1440 };

  /* ---------- market feed ----------
     Builds an M1 series with volatility clustering and regime switching,
     then aggregates on demand. Ticks move price inside the forming bar. */
  function Feed(instrumentId, opts) {
    opts = opts || {};
    this.spec = INSTRUMENTS[instrumentId];
    if (!this.spec) throw new Error('Unknown instrument ' + instrumentId);
    this.seed = typeof opts.seed === 'number' ? opts.seed : hashSeed(instrumentId + ':' + (opts.scenario || 'default'));
    this.rnd = mulberry32(this.seed);
    this.volMult = opts.volMult || 1;
    this.trend = opts.trend || 0;          // -1 down, 0 neutral, +1 up
    this.regimeLock = !!opts.regimeLock;   // keep one regime for teaching clarity
    this.ticksPerBar = opts.ticksPerBar || 12;

    this.m1 = [];
    this.tickInBar = 0;
    this.barTime = opts.startTime || Date.UTC(2025, 0, 6, 0, 0);
    this.price = this.spec.start;
    this.regime = this.trend ? { dir: this.trend, len: 1e9, vol: 1 } : this._newRegime();
    this.forming = null;
    this.spreadPips = this.spec.spread;
    this.newsCountdown = 90 + Math.floor(this.rnd() * 260);

    /* Scheduled overnight gap, for shares only. Counted in bars rather than ticks so the
       announcement lands on a bar boundary the way a real one does. `gaps` records each jump
       so a drill's test() can prove the student was holding through it. */
    this.gapBars = this.spec.gap ? this.spec.gap.every : 0;
    this.gaps = [];
    this.barsSeen = 0;

    this._warm(opts.history || 600);
  }

  Feed.prototype._newRegime = function () {
    var r = this.rnd();
    var dir = r < 0.36 ? 1 : r < 0.72 ? -1 : 0;
    return { dir: dir, len: 40 + Math.floor(this.rnd() * 150), vol: 0.65 + this.rnd() * 0.9 };
  };

  // One price step. Drift from regime, shock from clustered volatility.
  Feed.prototype._step = function () {
    var s = this.spec;
    if (!this.regimeLock) {
      if (--this.regime.len <= 0) this.regime = this._newRegime();
    }
    var base = s.vol * this.volMult * this.regime.vol / Math.sqrt(this.ticksPerBar);
    var shock = gauss(this.rnd) * base;
    var drift = this.regime.dir * base * 0.30;

    // Scheduled "news" — a rare, sharp expansion. Teaches spread widening.
    if (--this.newsCountdown <= 0) {
      shock *= 6 + this.rnd() * 5;
      this.spreadPips = s.spread * (5 + this.rnd() * 9);
      this.newsCountdown = 700 + Math.floor(this.rnd() * 900);
    } else {
      this.spreadPips += (s.spread - this.spreadPips) * 0.12;   // decay back to normal
    }

    this.price = Math.max(s.pip * 10, this.price + shock + drift);
    return this.price;
  };

  Feed.prototype._warm = function (bars) {
    for (var i = 0; i < bars; i++) {
      for (var t = 0; t < this.ticksPerBar; t++) this.tick(true);
    }
  };

  // Advance one tick. Closes the forming bar every ticksPerBar ticks.
  Feed.prototype.tick = function (silent) {
    var p = this._step();
    if (!this.forming) {
      this.forming = { t: this.barTime, o: p, h: p, l: p, c: p };
    } else {
      this.forming.h = Math.max(this.forming.h, p);
      this.forming.l = Math.min(this.forming.l, p);
      this.forming.c = p;
    }
    if (++this.tickInBar >= this.ticksPerBar) {
      this.m1.push(this.forming);
      if (this.m1.length > 6000) this.m1.shift();
      this.barTime += 60000;
      this.forming = null;
      this.tickInBar = 0;
      this.barsSeen++;

      /* The gap. Guarded on spec.gap so no forex feed ever reaches this branch, which keeps
         every existing drill's seeded sequence bit-identical. Price jumps between bars with
         nothing traded in between — so a stop inside the jump does not fill at its level, it
         fills at the reopen. That is the whole lesson, and it cannot be taught by reading. */
      if (this.spec.gap && !silent && --this.gapBars <= 0) {
        var g = this.spec.gap;
        var dir = g.dir || (this.rnd() < 0.5 ? -1 : 1);
        var before = this.price;
        this.price = Math.max(this.spec.pip * 10, this.price * (1 + dir * g.pct));
        this.gaps.push({ at: this.barTime, from: before, to: this.price, pct: dir * g.pct, label: g.label });
        this.gapBars = g.every;
      }
    }
    if (!silent) this.lastTickAt = Date.now();
    return p;
  };

  Feed.prototype.bid = function () {
    return this.price - (this.spreadPips * this.spec.pip) / 2;
  };
  Feed.prototype.ask = function () {
    return this.price + (this.spreadPips * this.spec.pip) / 2;
  };
  Feed.prototype.spread = function () { return this.spreadPips; };

  // Aggregate M1 into the requested timeframe.
  Feed.prototype.series = function (tf, limit) {
    var n = TIMEFRAMES[tf] || 1;
    var src = this.m1;
    if (n === 1) {
      var outM1 = src.slice(-(limit || 240));
      if (this.forming) outM1 = outM1.concat([this.forming]);
      return outM1;
    }
    var out = [], bucket = null;
    for (var i = 0; i < src.length; i++) {
      var b = src[i], slot = Math.floor(b.t / (n * 60000));
      if (!bucket || bucket.slot !== slot) {
        if (bucket) out.push(bucket.bar);
        bucket = { slot: slot, bar: { t: slot * n * 60000, o: b.o, h: b.h, l: b.l, c: b.c } };
      } else {
        bucket.bar.h = Math.max(bucket.bar.h, b.h);
        bucket.bar.l = Math.min(bucket.bar.l, b.l);
        bucket.bar.c = b.c;
      }
    }
    if (bucket) out.push(bucket.bar);
    if (this.forming && out.length) {
      var last = out[out.length - 1];
      last.h = Math.max(last.h, this.forming.h);
      last.l = Math.min(last.l, this.forming.l);
      last.c = this.forming.c;
    }
    return out.slice(-(limit || 240));
  };

  // Average true range in pips, over the given timeframe.
  Feed.prototype.atr = function (tf, period) {
    period = period || 14;
    var s = this.series(tf, period + 60);
    if (s.length < period + 1) return 0;
    var sum = 0;
    for (var i = s.length - period; i < s.length; i++) {
      var prev = s[i - 1].c;
      sum += Math.max(s[i].h - s[i].l, Math.abs(s[i].h - prev), Math.abs(s[i].l - prev));
    }
    return (sum / period) / this.spec.pip;
  };

  /* ---------- pip value ----------
     Returns account-currency value of one pip for the given lots.
     Account currency is USD throughout the academy. */
  /* Value of one `pip` (one minimum increment) for a given size.
     Futures state it directly as tickValue, because contract × pip does not describe a
     futures contract's economics. Shares fall out of the fx maths with contract = 1:
     0.01 × 1 × 625 shares = $6.25 per penny, which is correct. */
  function pipValue(spec, lots, price) {
    if (spec.kind === 'future') return spec.tickValue * lots;

    var perLot;
    if (spec.quote === 'USD') {
      perLot = spec.pip * spec.contract;                 // e.g. 0.0001 * 100000 = $10
    } else {
      perLot = (spec.pip * spec.contract) / price;       // JPY-quoted: convert back to USD
    }
    return perLot * lots;
  }

  /* ---------- account ---------- */
  function Account(opts) {
    opts = opts || {};
    this.startBalance = opts.balance || 5000;
    this.balance = this.startBalance;
    this.leverage = opts.leverage || 100;
    this.currency = 'USD';
    this.callLevel = opts.callLevel || 100;
    this.stopOutLevel = opts.stopOutLevel || 50;
    this.positions = [];
    this.pending = [];
    this.history = [];
    this.nextId = 1;
    this.events = [];
    this.dayStartEquity = this.startBalance;
    this.peakEquity = this.startBalance;
    this.commissionEnabled = opts.commission !== false;
  }

  Account.prototype.log = function (type, msg) {
    this.events.push({ type: type, msg: msg, at: Date.now() });
    if (this.events.length > 400) this.events.shift();
  };

  /* Margin required to hold a position.

     Futures do NOT use account leverage. The exchange sets a fixed amount per contract, and it
     can be raised mid-position when volatility rises — which is why Module 302 insists a cash
     reserve is what holds a position where margin only opens it.

     Shares use notional / leverage, so an account created with leverage 1 pays the full amount,
     exactly like owning the stock outright. That is what makes the Module 107 gap drill honest:
     the loss comes from position size, not from a margin call. */
  Account.prototype.marginFor = function (spec, lots, price) {
    if (spec.kind === 'future') return (spec.initialMargin || 0) * lots;

    var notional = lots * spec.contract * (spec.quote === 'USD' ? price : 1);
    if (spec.id === 'USDJPY') notional = lots * spec.contract;   // USD is the base here
    return notional / this.leverage;
  };

  /* What a position is actually worth, as opposed to what it cost to open. Notional is the
     honest measure of exposure and the terminal shows it for every position. */
  Account.prototype.notionalFor = function (spec, lots, price) {
    return lots * spec.contract * price;
  };

  Account.prototype.floating = function (feeds) {
    var t = 0;
    for (var i = 0; i < this.positions.length; i++) {
      t += this.positionPL(this.positions[i], feeds[this.positions[i].instrument]);
    }
    return t;
  };

  Account.prototype.positionPL = function (pos, feed) {
    if (!feed) return 0;
    var spec = feed.spec;
    var exit = pos.side === 'buy' ? feed.bid() : feed.ask();
    var diff = pos.side === 'buy' ? exit - pos.entry : pos.entry - exit;
    var pips = diff / spec.pip;
    return pips * pipValue(spec, pos.lots, exit) - (pos.commission || 0);
  };

  Account.prototype.equity = function (feeds) { return this.balance + this.floating(feeds); };

  Account.prototype.usedMargin = function () {
    var m = 0;
    for (var i = 0; i < this.positions.length; i++) m += this.positions[i].margin;
    return m;
  };

  Account.prototype.marginLevel = function (feeds) {
    var um = this.usedMargin();
    if (um <= 0) return Infinity;
    return (this.equity(feeds) / um) * 100;
  };

  Account.prototype.freeMargin = function (feeds) { return this.equity(feeds) - this.usedMargin(); };

  Account.prototype.open = function (req, feed, feeds) {
    var spec = feed.spec;
    var lots = Math.round(req.lots * 100) / 100;
    if (!(lots > 0)) return { ok: false, error: 'Lot size must be greater than zero.' };

    var entry = req.side === 'buy' ? feed.ask() : feed.bid();
    var margin = this.marginFor(spec, lots, entry);
    if (margin > this.freeMargin(feeds)) {
      return { ok: false, error: 'Not enough free margin. Required $' + margin.toFixed(2) +
                                 ', available $' + this.freeMargin(feeds).toFixed(2) + '.' };
    }
    var commission = this.commissionEnabled ? (spec.commission * lots) : 0;
    var pos = {
      id: this.nextId++, instrument: spec.id, side: req.side, lots: lots, entry: entry,
      sl: req.sl || null, tp: req.tp || null, margin: margin, commission: commission,
      openedAt: feed.barTime, openBar: feed.m1.length, note: req.note || ''
    };
    this.positions.push(pos);
    this.log('open', pos.side.toUpperCase() + ' ' + lots.toFixed(2) + ' ' + spec.name + ' @ ' + entry.toFixed(spec.digits));
    return { ok: true, position: pos };
  };

  Account.prototype.close = function (id, feed, reason) {
    var idx = -1;
    for (var i = 0; i < this.positions.length; i++) if (this.positions[i].id === id) { idx = i; break; }
    if (idx < 0) return { ok: false, error: 'Position not found.' };
    var pos = this.positions[idx];
    var pl = this.positionPL(pos, feed);
    var exit = pos.side === 'buy' ? feed.bid() : feed.ask();
    this.balance += pl;
    this.positions.splice(idx, 1);
    var rec = {
      id: pos.id, instrument: pos.instrument, side: pos.side, lots: pos.lots,
      entry: pos.entry, exit: exit, sl: pos.sl, tp: pos.tp, pl: pl,
      reason: reason || 'manual', closedAt: feed.barTime, note: pos.note,
      riskAtOpen: pos.riskAtOpen || null
    };
    // Result in R, when the trade was opened with a stop.
    if (pos.riskAmount && pos.riskAmount > 0) rec.r = pl / pos.riskAmount;
    this.history.push(rec);
    this.log(pl >= 0 ? 'win' : 'loss',
      'Closed #' + pos.id + ' (' + rec.reason + ') ' + (pl >= 0 ? '+' : '') + '$' + pl.toFixed(2));
    return { ok: true, record: rec };
  };

  // Called every tick: SL/TP fills, then margin call / stop out.
  Account.prototype.update = function (feeds) {
    var i, pos, feed, spec, out = { closed: [], stopOut: false, call: false };

    for (i = this.positions.length - 1; i >= 0; i--) {
      pos = this.positions[i]; feed = feeds[pos.instrument];
      if (!feed) continue;
      spec = feed.spec;
      var bid = feed.bid(), ask = feed.ask();
      if (pos.side === 'buy') {
        if (pos.sl && bid <= pos.sl) out.closed.push(this.close(pos.id, feed, 'stop loss').record);
        else if (pos.tp && bid >= pos.tp) out.closed.push(this.close(pos.id, feed, 'take profit').record);
      } else {
        if (pos.sl && ask >= pos.sl) out.closed.push(this.close(pos.id, feed, 'stop loss').record);
        else if (pos.tp && ask <= pos.tp) out.closed.push(this.close(pos.id, feed, 'take profit').record);
      }
    }

    // Pending order triggers.
    for (i = this.pending.length - 1; i >= 0; i--) {
      var o = this.pending[i]; feed = feeds[o.instrument];
      if (!feed) continue;
      var px = o.side === 'buy' ? feed.ask() : feed.bid(), fire = false;
      if (o.type === 'limit') fire = o.side === 'buy' ? px <= o.price : px >= o.price;
      else fire = o.side === 'buy' ? px >= o.price : px <= o.price;
      if (fire) {
        this.pending.splice(i, 1);
        var r = this.open({ side: o.side, lots: o.lots, sl: o.sl, tp: o.tp }, feed, feeds);
        if (r.ok) { r.position.riskAmount = o.riskAmount; r.position.riskAtOpen = o.riskAtOpen; }
      }
    }

    var ml = this.marginLevel(feeds);
    if (this.positions.length) {
      if (ml <= this.stopOutLevel) {
        // Force-close the largest loser, repeatedly, exactly as a broker does.
        var guard = 0;
        while (this.positions.length && this.marginLevel(feeds) <= this.stopOutLevel && guard++ < 40) {
          var worst = null, worstPL = Infinity;
          for (i = 0; i < this.positions.length; i++) {
            var p2 = this.positions[i], pl2 = this.positionPL(p2, feeds[p2.instrument]);
            if (pl2 < worstPL) { worstPL = pl2; worst = p2; }
          }
          if (!worst) break;
          out.closed.push(this.close(worst.id, feeds[worst.instrument], 'STOP OUT').record);
          out.stopOut = true;
        }
        if (out.stopOut) this.log('danger', 'STOP OUT — positions force-closed by the broker.');
      } else if (ml <= this.callLevel) {
        out.call = true;
      }
    }

    var eq = this.equity(feeds);
    if (eq > this.peakEquity) this.peakEquity = eq;
    return out;
  };

  Account.prototype.stats = function (feeds) {
    var h = this.history, wins = 0, losses = 0, grossWin = 0, grossLoss = 0, rs = [];
    for (var i = 0; i < h.length; i++) {
      if (h[i].pl >= 0) { wins++; grossWin += h[i].pl; } else { losses++; grossLoss += -h[i].pl; }
      if (typeof h[i].r === 'number') rs.push(h[i].r);
    }
    var n = h.length;
    var avgR = rs.length ? rs.reduce(function (a, b) { return a + b; }, 0) / rs.length : 0;
    var eq = this.equity(feeds);
    return {
      trades: n,
      winRate: n ? (wins / n) * 100 : 0,
      wins: wins, losses: losses,
      grossWin: grossWin, grossLoss: grossLoss,
      profitFactor: grossLoss > 0 ? grossWin / grossLoss : (grossWin > 0 ? Infinity : 0),
      expectancyR: avgR,
      netPL: this.balance - this.startBalance,
      equity: eq,
      drawdownPct: this.peakEquity > 0 ? ((this.peakEquity - eq) / this.peakEquity) * 100 : 0,
      dayPL: eq - this.dayStartEquity,
      dayPLPct: this.dayStartEquity > 0 ? ((eq - this.dayStartEquity) / this.dayStartEquity) * 100 : 0
    };
  };

  /* ---------- risk guard ----------
     The teaching layer. Sits between the student and the order button.
     mode 'guard'  — blocks the order and explains (Modules 1–10)
     mode 'advise' — warns but allows (Module 11)
     mode 'off'    — silent (exam conditions) */
  function RiskGuard(policy) {
    this.policy = Object.assign({
      mode: 'guard',
      requireStop: true,
      maxRiskPct: 1,
      maxOpenRiskPct: 3,
      dailyStopPct: 3,
      minRR: 1.5,
      requireRR: false,
      maxLotsAbsolute: null
    }, policy || {});
    this.violations = [];
  }

  RiskGuard.prototype.riskOf = function (req, feed, account, feeds) {
    var spec = feed.spec;
    if (!req.sl) return null;
    var entry = req.side === 'buy' ? feed.ask() : feed.bid();
    var dist = Math.abs(entry - req.sl) / spec.pip;
    if (dist <= 0) return null;
    var amount = dist * pipValue(spec, req.lots, entry);
    var eq = account.equity(feeds);
    return { pips: dist, amount: amount, pct: eq > 0 ? (amount / eq) * 100 : 0, entry: entry };
  };

  // Lot size that makes the stop distance equal the policy risk.
  RiskGuard.prototype.suggestLots = function (req, feed, account, feeds) {
    var spec = feed.spec;
    if (!req.sl) return null;
    var entry = req.side === 'buy' ? feed.ask() : feed.bid();
    var dist = Math.abs(entry - req.sl) / spec.pip;
    if (dist <= 0) return null;
    var eq = account.equity(feeds);
    var riskAmount = eq * (this.policy.maxRiskPct / 100);
    var perLot = dist * pipValue(spec, 1, entry);
    if (perLot <= 0) return null;
    return Math.floor((riskAmount / perLot) * 100) / 100;
  };

  RiskGuard.prototype.openRiskPct = function (account, feeds) {
    var total = 0;
    for (var i = 0; i < account.positions.length; i++) {
      var p = account.positions[i];
      if (p.riskAmount) total += p.riskAmount;
    }
    var eq = account.equity(feeds);
    return eq > 0 ? (total / eq) * 100 : 0;
  };

  RiskGuard.prototype.check = function (req, feed, account, feeds) {
    var pol = this.policy, issues = [], spec = feed.spec;
    var stats = account.stats(feeds);
    var risk = this.riskOf(req, feed, account, feeds);
    var suggested = this.suggestLots(req, feed, account, feeds);

    if (pol.dailyStopPct && stats.dayPLPct <= -pol.dailyStopPct) {
      issues.push({
        code: 'daily-stop', severity: 'block',
        title: 'Daily stop reached',
        detail: 'You are down ' + stats.dayPLPct.toFixed(2) + '% today, past your ' + pol.dailyStopPct +
                '% limit. The trading day is over. This rule exists because the urge to trade is strongest ' +
                'right after a loss, and that is when judgement is worst.'
      });
    }

    if (pol.requireStop && !req.sl) {
      issues.push({
        code: 'no-stop', severity: 'block',
        title: 'No stop loss',
        detail: 'Without a stop you cannot size the position, because risk is undefined. ' +
                'Decide where the idea is proven wrong, put the stop there, and the lot size follows.'
      });
    }

    if (risk) {
      if (risk.pct > pol.maxRiskPct + 0.001) {
        issues.push({
          code: 'oversize', severity: 'block',
          title: 'Position too large — ' + risk.pct.toFixed(2) + '% risk',
          detail: 'Your stop is ' + risk.pips.toFixed(1) + ' pips away. At ' + req.lots.toFixed(2) +
                  ' lots that risks $' + risk.amount.toFixed(2) + ', which is ' + risk.pct.toFixed(2) +
                  '% of equity against your ' + pol.maxRiskPct + '% limit.' +
                  (suggested ? ' Correct size for this stop is ' + suggested.toFixed(2) + ' lots.' : ''),
          fix: suggested
        });
      }
      var openRisk = this.openRiskPct(account, feeds);
      if (pol.maxOpenRiskPct && openRisk + risk.pct > pol.maxOpenRiskPct + 0.001) {
        issues.push({
          code: 'portfolio', severity: 'block',
          title: 'Total open risk too high',
          detail: 'You already have ' + openRisk.toFixed(2) + '% at risk. Adding ' + risk.pct.toFixed(2) +
                  '% takes you past your ' + pol.maxOpenRiskPct + '% portfolio limit. ' +
                  'Correlated positions are one bet, not several.'
        });
      }
    }

    if (pol.requireRR && req.tp && req.sl) {
      var entry = risk ? risk.entry : (req.side === 'buy' ? feed.ask() : feed.bid());
      var rDist = Math.abs(entry - req.sl), tDist = Math.abs(req.tp - entry);
      var rr = rDist > 0 ? tDist / rDist : 0;
      if (rr < pol.minRR) {
        issues.push({
          code: 'rr', severity: 'block',
          title: 'Reward:risk below ' + pol.minRR + ':1',
          detail: 'This target is ' + rr.toFixed(2) + ':1. At that ratio you need a ' +
                  (100 / (1 + rr)).toFixed(0) + '% win rate just to break even before costs.'
        });
      }
    }

    if (pol.maxLotsAbsolute && req.lots > pol.maxLotsAbsolute) {
      issues.push({
        code: 'cap', severity: 'block', title: 'Above the lot cap for this drill',
        detail: 'This exercise caps size at ' + pol.maxLotsAbsolute.toFixed(2) + ' lots.'
      });
    }

    var blocking = issues.filter(function (i) { return i.severity === 'block'; });
    var allowed = pol.mode === 'off' ? true : (pol.mode === 'advise' ? true : blocking.length === 0);

    if (blocking.length && pol.mode !== 'off') {
      this.violations.push({ at: Date.now(), codes: blocking.map(function (i) { return i.code; }), allowed: allowed });
      if (this.violations.length > 200) this.violations.shift();
    }

    return { ok: allowed, issues: issues, risk: risk, suggested: suggested, blocked: !allowed };
  };

  /* ---------- exports ---------- */
  window.FX = {
    INSTRUMENTS: INSTRUMENTS,
    TIMEFRAMES: TIMEFRAMES,
    Feed: Feed,
    Account: Account,
    RiskGuard: RiskGuard,
    pipValue: pipValue,
    mulberry32: mulberry32,
    hashSeed: hashSeed
  };
})();
