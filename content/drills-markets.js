/* N1 Forex Academy — simulator drills for shares and futures.

   These run on the real engine, not as analysis labs. They exist because two lessons in this
   course cannot honestly be taught by reading:

     Module 107  a stop does not protect you across a gap
     Module 302  an open futures loss is cash leaving the account tonight

   Both are things students accept intellectually and do not believe until it happens to them.
   The share instruments carry a scheduled `gap` (see assets/engine.js) and the futures
   instruments use fixed per-contract margin, so the engine can now stage both.

   Ordinary drill contract: `test(ctx)` where ctx = {account, guard, stats, feeds}. It runs
   several times a second, so keep it cheap. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'share-size',
  module: 107,
  title: 'Size in shares, from the stop',
  brief: 'The same arithmetic as the forex sizing drill, in a market where the unit is shares and there is no leverage to hide behind. Five trades, each risking no more than 1%.',
  instrument: 'KAV',
  allowInstruments: ['KAV', 'NBR'],
  account: { balance: 25000, leverage: 1 },
  policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 2, dailyStopPct: 3 },
  objectives: [
    'Place five trades, each with a stop, risking no more than 1% of the account',
    'Let the stop set the share count — never pick a round number first',
    'Notice that with leverage 1 you pay for the shares in full, so margin is the position'
  ],
  hint: 'The Risk panel shows what your stop costs per share. Shares to buy = risk amount ÷ that figure. The guard will block anything oversized and show you the correct number — but every block counts against you.',
  test: function (ctx) {
    var trades = ctx.account.history.filter(function (h) { return h.riskAtOpen != null; });
    var clean = trades.filter(function (h) { return h.riskAtOpen <= 1.02; });
    var blocks = ctx.guard.violations.length;   // same counter the forex sizing drill uses
    return {
      pass: clean.length >= 5 && blocks <= 2,
      progress: Math.min(1, clean.length / 5),
      detail: clean.length + ' of 5 correctly sized trades closed. ' +
              blocks + ' block(s) — 2 allowed.' +
              (clean.length >= 5 && blocks > 2 ? ' Too many oversized attempts; reset and size before clicking.' : '')
    };
  }
},

{
  id: 'share-gap',
  module: 107,
  title: 'Hold one through an earnings gap',
  brief: 'You have read that a stop is an instruction rather than a reserved price. Now watch it happen. Size a share position properly, put a stop on it, and hold it through a scheduled overnight announcement.',
  instrument: 'KAV',
  allowInstruments: ['KAV'],
  account: { balance: 25000, leverage: 1 },
  policy: { mode: 'advise', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 2, dailyStopPct: 100 },
  scenario: { volMult: 1.0 },
  objectives: [
    'Go LONG a correctly sized share position, WITH a stop loss',
    'Hold it through the overnight announcement — do not close early',
    'Compare what you actually lost against the 1% you intended to risk'
  ],
  hint: 'Go long, then turn the speed up and leave the position alone. The announcement here is a profit warning, so it only goes one way. The announcement lands between one bar and the next, so there is no trading in between for your stop to fill at. That is the entire point — the daily stop is switched off here so nothing rescues you from the lesson.',
  test: function (ctx) {
    // A gap has hit the student if a stop filled materially worse than its own level.
    var slipped = ctx.account.history.filter(function (h) {
      if (h.reason !== 'stop loss' || !h.sl) return false;
      return Math.abs(h.exit - h.sl) / h.sl > 0.02;      // more than 2% beyond the stop
    });
    var held = ctx.account.positions.length > 0 || ctx.account.history.length > 0;
    var worst = slipped.reduce(function (m, h) {
      var s = Math.abs(h.exit - h.sl) / h.sl * 100; return s > m ? s : m;
    }, 0);
    return {
      pass: slipped.length > 0,
      progress: slipped.length ? 1 : (held ? 0.5 : 0),
      detail: slipped.length
        ? 'Gap experienced. Your stop filled ' + worst.toFixed(1) + '% beyond its level — the loss was set by ' +
          'your position size, not by where the stop sat.'
        : (held ? 'Position open. Hold it through the announcement — do not close early.'
                : 'Open a correctly sized position with a stop, then wait.')
    };
  }
},

{
  id: 'futures-margin',
  module: 302,
  title: 'Whole contracts, and cash leaving nightly',
  brief: 'Futures do not let you size to two decimal places, and your losses are settled in real cash rather than floating on a screen. Trade micro contracts within your risk policy and watch what the margin does.',
  instrument: 'MESZ',
  allowInstruments: ['MESZ', 'MCLZ'],
  account: { balance: 9000, leverage: 1 },
  policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: 4 },
  objectives: [
    'Place four trades in whole contracts, each risking no more than 1%',
    'Keep total margin posted below a third of the account at all times',
    'Notice that margin here is a fixed amount per contract, not notional divided by leverage'
  ],
  hint: 'One micro index contract needs $1,200 of margin whatever your account leverage says — the exchange sets it, not your broker. If the correct size works out below one contract, that trade is not available to you; the honest answers are a smaller-tick product or no trade.',
  test: function (ctx) {
    var trades = ctx.account.history.filter(function (h) { return h.riskAtOpen != null; });
    var clean = trades.filter(function (h) { return h.riskAtOpen <= 1.02; });
    var whole = trades.every(function (h) { return Math.abs(h.lots - Math.round(h.lots)) < 1e-9; });
    // margin-to-equity right now, the number that decides whether an ordinary week is survivable
    var posted = 0;
    ctx.account.positions.forEach(function (p) { posted += p.margin || 0; });
    var eq = ctx.account.equity(ctx.feeds) || 1;
    var m2e = posted / eq * 100;
    return {
      pass: clean.length >= 4 && whole && m2e <= 34,
      progress: Math.min(1, clean.length / 4),
      detail: clean.length + ' of 4 correctly sized trades. Margin-to-equity now ' + m2e.toFixed(0) + '% (keep under 33%).' +
              (whole ? '' : ' Fractional contracts recorded — that should not be possible.')
    };
  }
}

]);
