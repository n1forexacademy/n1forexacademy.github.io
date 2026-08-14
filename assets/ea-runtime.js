/* N1 Forex Academy — EA runtime. THIS FILE RUNS INSIDE A WEB WORKER.

   WHY A WORKER. This is the only place on the site that executes code a student
   wrote. Three properties matter and a Worker gives all three:

     1. TERMINABLE. `while(true){}` cannot be interrupted from inside a script.
        The main thread sets a deadline and calls worker.terminate(). In the page
        itself that same loop would freeze the tab permanently.
     2. NO DOM. A Worker has no document and no localStorage, so student code
        cannot reach the session token, the progress store, or the page.
     3. NO SHARED STATE. Every run is a fresh Worker, so one run cannot leave
        anything behind that changes the next one's result.

   WHY JAVASCRIPT AND NOT MQL5. The track teaches MQL5, and running MQL5 here
   would mean writing an interpreter for it — a far larger and much less useful
   piece of work. So the language is JavaScript and the API is deliberately
   shaped like MQL5: iMA, iClose, iTime, PositionsTotal, OrderSend's result
   check, GlobalVariableSet. The syntax does not transfer. THE STRUCTURE AND THE
   GUARDS DO, and those are what the track is actually about. The editor says
   this to the student in plain words rather than letting them assume otherwise.

   DETERMINISM. Same as everywhere else on this site: the feed is seeded, so a
   student's run and their instructor's run of the same code are bit-identical.
   That is what makes a failed check arguable rather than mysterious.

   THE RESTART. Task ea-5 sets `restartAt`. At that bar the compiled EA is
   THROWN AWAY and recompiled, which resets every variable the student declared,
   and OnInit runs again — exactly what a terminal restart does. Open positions
   survive, because those live with the broker, and GlobalVariableSet survives,
   because that is MQL5's answer to precisely this problem. An EA whose new-bar
   guard is a plain variable will act twice on one bar and the check will catch
   it. That failure is invisible in every backtest and this is the only place on
   the site a student can meet it. */

/* eslint-env worker */
'use strict';

/* engine.js ends with `window.FX = {...}`. A Worker has no window, so give it
   one that is the worker global. Nothing else in engine.js touches the DOM —
   that is stated at the top of the file and is why this works at all. */
self.window = self;

var BOOT_ERROR = null;
try {
  var V = (self.location.search.match(/[?&]v=(\d+)/) || [])[1];
  self.importScripts('engine.js' + (V ? '?v=' + V : ''));
} catch (e) {
  BOOT_ERROR = 'Could not load the simulation engine: ' + e.message;
}

/* Close the obvious doors. Student code runs in this worker's scope chain, so
   these are reachable unless removed. Nothing here is a security boundary —
   it is the student's own browser running the student's own code — but an
   accidental fetch() in a teaching exercise is still worth making impossible. */
try {
  self.fetch = undefined;
  self.XMLHttpRequest = undefined;
  self.importScripts = undefined;
  self.WebSocket = undefined;
  self.indexedDB = undefined;
} catch (e) { /* some of these are read-only in some engines; not important */ }

var MAX_PRINTS = 300;          // a student who prints every tick gets the first 300
var MAX_ORDER_ATTEMPTS = 20000; // hard stop, so a guardless EA still returns a result

/* A guardless EA opens positions until margin stops it, and every one of them is
   then re-priced on every tick — which turns the module 802 demonstration into a
   run slow enough that a student assumes the page has hung. Real brokers cap
   concurrent positions too, so this rejects past the cap with a plain reason
   rather than pretending the order vanished. The flood is still visible in the
   attempt count, which is the number the lesson is actually about. */
var MAX_OPEN_POSITIONS = 200;

/* ---------------------------------------------------------------------------
   Indicator helpers. Shift 0 is the forming bar, 1 is the last closed bar —
   the same convention as MQL5, which is why the taught code uses shift 1.

   AGGREGATION IS INCREMENTAL, AND THAT IS NOT A MICRO-OPTIMISATION.
   Feed.series() rebuilds the whole timeframe from the entire M1 history on every
   call, allocating an object per bar. That is right for terminal.js, which calls
   it once per rendered frame. Here it is called several times per tick and tens
   of thousands of times per run: one 120-bar run measured at 15 SECONDS that way,
   against well under one second folding in only the M1 bars that are new.

   The forming M1 bar is deliberately NOT overlaid. It means indicators read only
   closed data — which is the honest behaviour anyway — and, more importantly,
   the runtime's own bar counter calls this same function, so the student's
   iTime(tf, 0) and the runtime's idea of the current bar can never disagree.
   Two sources of truth for "which bar is it" is exactly how a grader ends up
   failing correct code.
   --------------------------------------------------------------------------- */
var AGG = null;    // { tf: { bars: [], done: <m1 bars folded in> } }

function resetSeries() { AGG = null; }

function seriesOf(feed, tf) {
  tf = tf || 'M15';
  if (!AGG) AGG = Object.create(null);
  var n = (self.FX.TIMEFRAMES[tf] || 15);
  var st = AGG[tf];
  var src = feed.m1;

  // Feed.m1 shifts once it passes 6000 bars, which invalidates our index.
  if (!st || st.done > src.length) st = AGG[tf] = { bars: [], done: 0 };

  for (var i = st.done; i < src.length; i++) {
    var b = src[i], slot = Math.floor(b.t / (n * 60000));
    var last = st.bars.length ? st.bars[st.bars.length - 1] : null;
    if (!last || last.slot !== slot) {
      st.bars.push({ slot: slot, t: slot * n * 60000, o: b.o, h: b.h, l: b.l, c: b.c });
    } else {
      last.h = Math.max(last.h, b.h);
      last.l = Math.min(last.l, b.l);
      last.c = b.c;
    }
  }
  st.done = src.length;
  if (st.bars.length > 2000) st.bars.splice(0, st.bars.length - 2000);
  return st.bars;
}

function sma(feed, tf, period, shift) {
  var s = seriesOf(feed, tf);
  var end = s.length - 1 - (shift || 0);
  if (end < period - 1) return 0;
  var sum = 0;
  for (var i = end - period + 1; i <= end; i++) sum += s[i].c;
  return sum / period;
}

function ema(feed, tf, period, shift) {
  var s = seriesOf(feed, tf);
  var end = s.length - 1 - (shift || 0);
  if (end < period) return 0;
  var k = 2 / (period + 1);
  var start = Math.max(0, end - period * 3);
  var v = s[start].c;
  for (var i = start + 1; i <= end; i++) v = s[i].c * k + v * (1 - k);
  return v;
}

function barAt(feed, tf, shift, field) {
  var s = seriesOf(feed, tf);
  var b = s[s.length - 1 - (shift || 0)];
  return b ? b[field] : 0;
}

/* ---------------------------------------------------------------------------
   The run
   --------------------------------------------------------------------------- */
function run(msg) {
  if (BOOT_ERROR) return { ok: false, error: BOOT_ERROR, phase: 'boot' };

  var FX = self.FX;
  var t = msg.task || {};
  var symbol = t.instrument || 'EURUSD';
  var spec = FX.INSTRUMENTS[symbol];
  if (!spec) return { ok: false, error: 'Unknown instrument ' + symbol, phase: 'boot' };

  /* Feed is (instrumentId, opts) and seeds itself from `scenario` unless given a
     numeric seed — same call shape terminal.js uses, so a task's seed string
     produces the same market here as it would anywhere else on the site. */
  var TICKS_PER_M1 = t.ticksPerBar || 4;

  var feed = new FX.Feed(symbol, {
    scenario: t.seed || 'ea-default',
    ticksPerBar: TICKS_PER_M1,
    history: t.history || 400,
    volMult: t.volMult || 1,
    trend: t.trend || 0,
    regimeLock: !!t.regimeLock
  });
  var feeds = {}; feeds[symbol] = feed;

  /* In production each run gets its own Worker, so this is belt and braces —
     but a cache surviving into a second run in the same worker silently breaks
     determinism, and determinism is the property the whole site rests on. */
  resetSeries();

  var account = new FX.Account({
    balance: t.balance || 10000,
    leverage: t.leverage || 100,
    commission: t.commission !== false
  });

  /* Everything the checks are allowed to look at. Collected by the runtime, not
     by the student, so it cannot be faked from inside their code. */
  var R = {
    bars: 0, ticks: 0,
    orderAttempts: 0, ordersFilled: 0, ordersRejected: 0,
    ordersWithoutStop: 0,
    maxOpenPositions: 0,
    barsWithOrders: 0, maxOrdersOnOneBar: 0, duplicateBarOrders: 0,
    orders: [],            // { bar, side, lots, stopPips, riskPct, filled, afterRestart }
    prints: [], printsTruncated: false,
    restarted: false, restartBar: null, ordersOnRestartBar: 0,
    onInitCalls: 0,
    error: null, errorLine: null, errorPhase: null,
    aborted: null
  };

  /* Globals that survive the restart, exactly as MQL5's global variables do. */
  var GLOBALS = {};

  var barAttemptCount = 0;    // order ATTEMPTS on the bar currently being traded
  var currentBarTime = 0;
  var restartBarTime = null;

  function record(type, msg2) {
    if (R.prints.length >= MAX_PRINTS) { R.printsTruncated = true; return; }
    R.prints.push({ bar: R.bars, type: type, text: msg2 });
  }

  function stopPipsOf(side, entry, sl) {
    if (!sl) return null;
    return Math.abs(entry - sl) / spec.pip;
  }

  /* One order. Returns an MQL5-flavoured result so the student can practise the
     module 806 habit of checking it rather than assuming. */
  function send(side, lots, sl, tp) {
    R.orderAttempts++;
    if (R.orderAttempts > MAX_ORDER_ATTEMPTS) {
      R.aborted = 'order-flood';
      throw { __eaAbort: true, why: 'This EA attempted more than ' + MAX_ORDER_ATTEMPTS +
        ' orders. That is the missing-guard failure from module 802, and the run was stopped.' };
    }

    lots = Number(lots);
    if (!isFinite(lots) || lots <= 0) {
      R.ordersRejected++;
      return { ok: false, retcode: 'INVALID_VOLUME', comment: 'Lot size must be a positive number.' };
    }

    if (account.positions.length >= MAX_OPEN_POSITIONS) {
      R.ordersRejected++;
      barAttemptCount++;
      if (barAttemptCount > 1) R.duplicateBarOrders++;
      R.orders.push({ bar: R.bars, side: side, lots: lots, stopPips: null, riskPct: null,
                      filled: false, afterRestart: R.restarted });
      return { ok: false, retcode: 'LIMIT_POSITIONS',
               comment: 'This account already holds ' + MAX_OPEN_POSITIONS + ' open positions. ' +
                        'Nothing is wrong with the broker — your EA has no guard.' };
    }

    var entry = side === 'buy' ? feed.ask() : feed.bid();
    sl = (sl === undefined || sl === null || sl === 0 || !isFinite(sl)) ? null : Number(sl);
    tp = (tp === undefined || tp === null || tp === 0 || !isFinite(tp)) ? null : Number(tp);

    /* A stop on the wrong side of price is a rejection at a real broker too. */
    if (sl !== null && ((side === 'buy' && sl >= entry) || (side === 'sell' && sl <= entry))) {
      R.ordersRejected++;
      return { ok: false, retcode: 'INVALID_STOPS', comment: 'The stop is on the wrong side of the entry price.' };
    }

    var res = account.open({ side: side, lots: lots, sl: sl, tp: tp }, feed, feeds);

    var pips = stopPipsOf(side, entry, sl);
    var riskPct = null;
    if (res.ok && pips) {
      var amount = FX.pipValue(spec, lots, entry) * pips;
      var eq = account.equity(feeds);
      riskPct = eq > 0 ? (amount / eq) * 100 : null;
      res.position.riskAmount = amount;
      res.position.riskAtOpen = riskPct;
    }

    var rec = {
      bar: R.bars, side: side, lots: lots, stopPips: pips, riskPct: riskPct,
      filled: !!res.ok, afterRestart: R.restarted,
      /* Equity at the moment of the attempt. A check cannot replay the run, so
         a limit rule ("stop once 5% below peak") can only be graded from a
         sample taken here, at each decision the EA made. */
      equityAtOrder: account.equity(feeds)
    };
    R.orders.push(rec);

    if (!sl) R.ordersWithoutStop++;

    /* Counted on the ATTEMPT, not the fill. "It acted twice on one bar" is the
       module 802 failure whether or not the broker happened to accept the
       second one — a rejection for margin is luck, not a guard. */
    barAttemptCount++;
    if (barAttemptCount === 1) R.barsWithOrders++;
    if (barAttemptCount > 1) R.duplicateBarOrders++;
    if (barAttemptCount > R.maxOrdersOnOneBar) R.maxOrdersOnOneBar = barAttemptCount;
    if (restartBarTime !== null && currentBarTime === restartBarTime) R.ordersOnRestartBar++;

    if (res.ok) {
      R.ordersFilled++;
      if (account.positions.length > R.maxOpenPositions) R.maxOpenPositions = account.positions.length;
      return { ok: true, ticket: res.position.id, retcode: 'DONE', comment: '' };
    }

    R.ordersRejected++;
    return { ok: false, retcode: 'REJECTED', comment: res.error || 'Order rejected.' };
  }

  /* -------------------------------------------------------------------------
     The API handed to student code. Named parameters of a Function, so the
     student calls them bare — Buy(0.1, sl) — with no `api.` prefix, which is
     what makes it read like the MQL5 in the lessons.
     ------------------------------------------------------------------------- */
  var API = {
    Print: function () {
      var parts = [];
      for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        parts.push(typeof a === 'number' ? (Math.round(a * 100000) / 100000) : String(a));
      }
      record('print', parts.join(' '));
    },

    // ---- price and time ----
    Bid: function () { return feed.bid(); },
    Ask: function () { return feed.ask(); },
    Spread: function () { return feed.spread(); },
    Point: function () { return spec.pip / 10; },
    Pip: function () { return spec.pip; },
    Digits: function () { return spec.digits; },
    Symbol: function () { return spec.id; },

    iTime: function (tf, shift) { return barAt(feed, tf, shift, 't'); },
    iOpen: function (tf, shift) { return barAt(feed, tf, shift, 'o'); },
    iHigh: function (tf, shift) { return barAt(feed, tf, shift, 'h'); },
    iLow: function (tf, shift) { return barAt(feed, tf, shift, 'l'); },
    iClose: function (tf, shift) { return barAt(feed, tf, shift, 'c'); },
    Bars: function () { return R.bars; },

    // ---- indicators ----
    iMA: function (tf, period, shift, mode) {
      // Clamped so period*3 can never exceed the series cache depth.
      period = Math.min(200, Math.max(1, Math.floor(period || 50)));
      return (mode === 'EMA' || mode === 'ema')
        ? ema(feed, tf, period, shift || 0)
        : sma(feed, tf, period, shift || 0);
    },
    iATR: function (tf, period) { return feed.atr(tf || 'M15', period || 14); },

    // ---- account ----
    Equity: function () { return account.equity(feeds); },
    Balance: function () { return account.balance; },
    FreeMargin: function () { return account.freeMargin(feeds); },
    AccountLeverage: function () { return account.leverage; },

    /* Value of one pip for a given size, in account currency. Module 804's
       "ask the platform, do not assume $10" — here it is a function call. */
    PipValue: function (lots) { return FX.pipValue(spec, Number(lots) || 0, feed.bid()); },

    // ---- positions ----
    PositionsTotal: function () { return account.positions.length; },
    PositionGet: function (i) {
      var p = account.positions[i | 0];
      if (!p) return null;
      return {
        ticket: p.id, side: p.side, lots: p.lots, entry: p.entry,
        sl: p.sl, tp: p.tp, pl: account.positionPL(p, feed), openBar: p.openBar
      };
    },
    PositionClose: function (ticket) {
      var res = account.close(Number(ticket), feed, 'closed by EA');
      return { ok: !!res.ok, comment: res.error || '' };
    },

    // ---- orders ----
    Buy:  function (lots, sl, tp) { return send('buy', lots, sl, tp); },
    Sell: function (lots, sl, tp) { return send('sell', lots, sl, tp); },

    /* Survives a restart. MQL5's answer to the exact problem in module 806, and
       the reason task ea-5 is solvable at all. */
    GlobalVariableSet: function (name, value) { GLOBALS[String(name)] = Number(value) || 0; return true; },
    GlobalVariableGet: function (name) { return GLOBALS[String(name)] || 0; },
    GlobalVariableCheck: function (name) { return Object.prototype.hasOwnProperty.call(GLOBALS, String(name)); }
  };

  var API_NAMES = Object.keys(API);
  var API_VALUES = API_NAMES.map(function (k) { return API[k]; });

  /* Compile. Function declarations inside the body are local to it, so the tail
     hands back whatever the student defined without polluting anything. */
  function compile(code) {
    var body = code + '\n;return {' +
      'OnInit: typeof OnInit === "function" ? OnInit : null,' +
      'OnTick: typeof OnTick === "function" ? OnTick : null' +
    '};';
    var fn;
    try {
      fn = Function.apply(null, API_NAMES.concat([body]));
    } catch (e) {
      throw { __eaCompile: true, message: e.message, line: lineOf(e) };
    }
    return fn.apply(null, API_VALUES);
  }

  /* Best effort. V8 reports `<anonymous>:LINE:COL`, where the generated wrapper
     puts the student's line 1 at line 3. Labelled "about line N" in the UI
     because it can be off by one in some browsers, and a wrong number stated
     confidently is worse than an approximate one stated honestly. */
  function lineOf(e) {
    var m = /<anonymous>:(\d+):/.exec(String(e && e.stack || ''));
    if (!m) return null;
    var n = parseInt(m[1], 10) - 2;
    return n > 0 ? n : null;
  }

  var ea;
  try {
    ea = compile(msg.code || '');
  } catch (e) {
    if (e && e.__eaCompile) return { ok: false, error: e.message, errorLine: e.line, phase: 'compile' };
    return { ok: false, error: String(e && e.message || e), phase: 'compile' };
  }

  if (!ea.OnTick) {
    return { ok: false, phase: 'compile',
      error: 'No OnTick function found. Your EA must define `function OnTick() { ... }` — that is the ' +
             'one the platform calls on every price change.' };
  }

  function callInit() {
    R.onInitCalls++;
    if (!ea.OnInit) return;
    try { ea.OnInit(); }
    catch (e) {
      if (e && e.__eaAbort) throw e;
      throw { __eaRun: true, message: String(e && e.message || e), line: lineOf(e), where: 'OnInit' };
    }
  }

  /* `bars` counts bars OF THE TASK'S TIMEFRAME, because that is the bar the
     student's guard keys on. One of those is TIMEFRAMES[tf] M1 bars, each of
     ticksPerBar ticks — so an M15 task at 4 ticks per M1 bar calls OnTick 60
     times per bar the EA can act on. Real feeds deliver thousands; the failure
     is identical and the editor says so rather than implying otherwise. */
  var TF = t.timeframe || 'M15';
  var tfMinutes = FX.TIMEFRAMES[TF] || 15;
  var ticksPerM1 = TICKS_PER_M1;
  var ticksPerTfBar = tfMinutes * ticksPerM1;
  var totalTicks = (t.bars || 200) * ticksPerTfBar;
  var restartAt = t.restartAt || null;                   // index of the tf bar
  var restartTick = Math.floor(ticksPerTfBar / 2);       // mid-bar, deliberately

  R.ticksPerTfBar = ticksPerTfBar;
  R.timeframe = TF;

  function tfBarTime() { return barAt(feed, TF, 0, 't'); }

  try {
    callInit();

    currentBarTime = tfBarTime();
    var ticksIntoBar = 0;

    for (var n = 0; n < totalTicks; n++) {
      /* THE RESTART, AND WHY IT IS MID-BAR.

         A restart on a bar boundary proves nothing — the EA has not acted on
         that bar yet, so starting it fresh changes nothing. Real restarts
         happen at 10:37, inside the 10:30 bar, AFTER the EA already handled it.
         That is the case where a new-bar guard held in an ordinary variable
         acts on the same bar a second time, and it is the only failure on this
         site that no backtest anywhere can produce.

         Recompiling discards every variable the student declared. The account
         survives, because positions live with the broker. GLOBALS survive,
         because that is MQL5's answer to this exact problem. Getting that
         division right is the whole exercise. */
      if (restartAt !== null && R.bars === restartAt && ticksIntoBar === restartTick && !R.restarted) {
        R.restarted = true;
        R.restartBar = R.bars;
        restartBarTime = currentBarTime;
        record('system', '--- TERMINAL RESTARTED, mid-bar. Every variable your EA declared is back to its ' +
                         'starting value. Open positions and global variables survived. ---');
        ea = compile(msg.code || '');
        callInit();
      }

      feed.tick();
      account.update(feeds);
      R.ticks++;
      ticksIntoBar++;

      /* A new bar on the EA's own timeframe: reset the per-bar counters, so
         "acted twice on one bar" means what the student thinks it means. */
      var nowBar = tfBarTime();
      if (nowBar !== currentBarTime) {
        currentBarTime = nowBar;
        barAttemptCount = 0;
        ticksIntoBar = 0;
        R.bars++;
      }

      try {
        ea.OnTick();
      } catch (e) {
        if (e && e.__eaAbort) throw e;
        throw { __eaRun: true, message: String(e && e.message || e), line: lineOf(e), where: 'OnTick' };
      }

      if (account.equity(feeds) <= 0) {
        record('system', '--- Equity reached zero. The run was stopped. ---');
        break;
      }
    }
  } catch (e) {
    if (e && e.__eaAbort) {
      R.error = e.why;
      R.errorPhase = 'flood';
    } else if (e && e.__eaRun) {
      R.error = e.message;
      R.errorLine = e.line;
      R.errorPhase = e.where;
    } else {
      R.error = String(e && e.message || e);
      R.errorPhase = 'run';
    }
  }

  /* Close anything still open, at the market, so the statistics describe a
     finished run rather than a snapshot with unrealised P/L hanging off it. */
  for (var z = account.positions.length - 1; z >= 0; z--) {
    account.close(account.positions[z].id, feed, 'end of run');
  }

  var stats = account.stats(feeds);
  R.stats = {
    trades: stats.trades, wins: stats.wins, losses: stats.losses,
    winRate: stats.winRate, netPL: stats.netPL, equity: stats.equity,
    profitFactor: isFinite(stats.profitFactor) ? stats.profitFactor : null,
    expectancyR: stats.expectancyR,
    maxDrawdownPct: account.peakEquity > 0
      ? ((account.peakEquity - Math.min(account.balance, stats.equity)) / account.peakEquity) * 100
      : 0,
    startBalance: account.startBalance
  };
  R.history = account.history.map(function (h) {
    return { lots: h.lots, side: h.side, pl: h.pl, reason: h.reason, r: h.r == null ? null : h.r };
  });

  return { ok: true, result: R };
}

self.onmessage = function (ev) {
  var msg = ev.data || {};
  var out;
  try {
    out = run(msg);
  } catch (e) {
    out = { ok: false, phase: 'runtime', error: 'The runtime failed: ' + String(e && e.message || e) };
  }
  out.id = msg.id;
  self.postMessage(out);
};
