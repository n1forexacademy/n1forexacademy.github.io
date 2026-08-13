/* N1 Forex Academy — assessed practical drills.
   Each drill configures the engine, sets a risk policy, and defines a pass test
   evaluated live against the account. Ordered to match the module sequence. */
window.DRILLS = [

{
  id: 'quote-cost',
  module: 2,
  title: 'The cost of a round trip',
  brief: 'Before any strategy exists, feel what it costs simply to be in a trade. Open and close small positions on three different instruments and watch the spread take its cut.',
  instrument: 'EURUSD',
  allowInstruments: ['EURUSD', 'USDJPY', 'XAUUSD'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'off', requireStop: false, maxRiskPct: 100, maxOpenRiskPct: 100, dailyStopPct: null },
  objectives: [
    'Open a 0.01 lot position and close it immediately — record the loss',
    'Repeat on a JPY pair and on gold',
    'Notice that pip value is not $10 on every instrument'
  ],
  hint: 'Watch the Risk panel as you change lot size. It shows pip value for the selected instrument — it differs on every one.',
  test: function (ctx) {
    var instruments = {};
    ctx.account.history.forEach(function (h) { instruments[h.instrument] = true; });
    var n = Object.keys(instruments).length;
    return {
      pass: ctx.account.history.length >= 3 && n >= 2,
      progress: Math.min(1, ctx.account.history.length / 3),
      detail: ctx.account.history.length + ' of 3 trades closed, across ' + n + ' instrument(s). Need 2+ instruments.'
    };
  }
},

{
  id: 'margin-blowup',
  module: 3,
  title: 'Watch an account get closed out',
  brief: 'The safest possible way to learn the stop-out sequence: cause one deliberately. Size a position far too large and watch margin level fall until the broker closes you out. Nothing here is recoverable, and that is the point.',
  instrument: 'XAUUSD',
  allowInstruments: ['XAUUSD', 'GBPUSD'],
  account: { balance: 1000, leverage: 200 },
  policy: { mode: 'off', requireStop: false, maxRiskPct: 100, maxOpenRiskPct: 100, dailyStopPct: null },
  scenario: { volMult: 1.6 },
  objectives: [
    'Open a position large enough that margin level starts near 200%',
    'Do not close it — let the market decide',
    'Watch margin level fall and the stop out fire'
  ],
  hint: 'Around 0.40 lots puts margin level near 200%. Go much bigger and the broker simply refuses the order for lack of margin — which is its own lesson. Then turn the speed to 20x and watch Margin Level, not profit: that is the number the broker acts on.',
  test: function (ctx) {
    var forced = ctx.account.history.filter(function (h) { return h.reason === 'STOP OUT'; }).length;
    return {
      pass: forced > 0,
      progress: forced > 0 ? 1 : (ctx.account.positions.length ? 0.5 : 0),
      detail: forced > 0
        ? 'Stop out experienced. Note how little say you had in the timing or the price.'
        : 'No stop out yet. Open an oversized position and let it run.'
    };
  }
},

{
  id: 'atr-stops',
  module: 8,
  title: 'Stops scaled to volatility',
  brief: 'A fixed pip stop is wrong on almost every instrument. Place five trades where the stop sits between 1.5x and 2.5x current ATR — tight enough to mean something, wide enough to survive normal noise.',
  instrument: 'GBPUSD',
  allowInstruments: ['GBPUSD', 'EURUSD', 'XAUUSD'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: 5 },
  objectives: [
    'Read current ATR from the Risk panel',
    'Place five trades with stops between 1.5x and 2.5x ATR',
    'Let each one resolve at its stop or target'
  ],
  hint: 'The Risk panel shows ATR in pips for the chart timeframe. Multiply by 2, then set your stop that far from entry.',
  test: function (ctx) {
    var good = 0;
    ctx.account.history.forEach(function (h) {
      if (!h.sl) return;
      var spec = FX.INSTRUMENTS[h.instrument];
      var dist = Math.abs(h.entry - h.sl) / spec.pip;
      if (h.atrAtOpen && dist >= h.atrAtOpen * 1.5 && dist <= h.atrAtOpen * 2.5) good++;
    });
    return {
      pass: good >= 5,
      progress: Math.min(1, good / 5),
      detail: good + ' of 5 trades had an ATR-appropriate stop (1.5x–2.5x).'
    };
  }
},

{
  id: 'position-sizing',
  module: 10,
  title: 'Size every position correctly, first time',
  brief: 'The core skill of the course. Ten trades, each risking no more than 1% of equity. The risk guard will block anything oversized and show you the correct lot size — but every block counts against you. Aim for ten clean trades.',
  instrument: 'EURUSD',
  allowInstruments: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: 3 },
  objectives: [
    'Place the stop first, based on the chart',
    'Then compute the lot size that makes that stop cost 1%',
    'Ten trades with three or fewer blocked attempts'
  ],
  hint: 'Set your stop, then press "Size it" — but only after you have worked the number out yourself. Guessing and letting the button correct you teaches nothing.',
  test: function (ctx) {
    var blocks = ctx.guard.violations.length;
    var n = ctx.account.history.length;
    return {
      pass: n >= 10 && blocks <= 3,
      progress: Math.min(1, n / 10),
      detail: n + ' of 10 trades closed. ' + blocks + ' blocked attempt(s) — 3 or fewer to pass.'
    };
  }
},

{
  id: 'survive-streak',
  module: 10,
  title: 'Survive a losing run',
  brief: 'This market is set against you. Losses will come in clusters. The task is not to win — it is to still be trading at the end, having never breached your 3% daily stop. Twenty trades, drawdown under 8%.',
  instrument: 'EURUSD',
  allowInstruments: ['EURUSD', 'GBPUSD'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 2, dailyStopPct: 3 },
  scenario: { trend: -1, regimeLock: true, volMult: 1.15 },
  objectives: [
    'Twenty trades, all correctly sized',
    'Never breach the 3% daily stop',
    'Finish with maximum drawdown under 8%'
  ],
  hint: 'Losing streaks are normal, not evidence you are doing something wrong. Ten losses at 1% costs under 10% — uncomfortable, survivable, and completely recoverable.',
  test: function (ctx) {
    var n = ctx.account.history.length;
    var dd = ctx.stats.drawdownPct;
    return {
      pass: n >= 20 && dd < 8,
      progress: Math.min(1, n / 20),
      detail: n + ' of 20 trades. Max drawdown ' + dd.toFixed(1) + '% — must stay under 8%.'
    };
  }
},

{
  id: 'plan-discipline',
  module: 11,
  title: 'Trade your written plan',
  brief: 'The guard drops to advisory — it will warn you but no longer stop you. Fifteen trades, each meeting a minimum 1.5:1 reward-to-risk. Nobody is enforcing it now except you.',
  instrument: 'GBPUSD',
  allowInstruments: ['GBPUSD', 'EURUSD', 'USDJPY'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'advise', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: 3, requireRR: true, minRR: 1.5 },
  objectives: [
    'Every trade carries a stop and a target',
    'Reward:risk of at least 1.5:1 on every entry',
    'Fifteen trades with 90% or better compliance'
  ],
  hint: 'Advisory mode is the real test. The warnings still appear — the only thing that changed is whether you choose to listen.',
  test: function (ctx) {
    var n = ctx.account.history.length;
    var ignored = ctx.guard.violations.filter(function (v) { return v.allowed; }).length;
    var rate = n > 0 ? ((n - ignored) / n) * 100 : 0;
    return {
      pass: n >= 15 && rate >= 90,
      progress: Math.min(1, n / 15),
      detail: n + ' of 15 trades. Compliance ' + rate.toFixed(0) + '% — 90% or better to pass.'
    };
  }
},

{
  id: 'expectancy',
  module: 12,
  title: 'Build a sample worth analysing',
  brief: 'Thirty trades under exam conditions — the guard is off entirely. The pass mark is not profit. It is thirty journaled trades with a positive expectancy in R, or an honest negative result you can explain.',
  instrument: 'EURUSD',
  allowInstruments: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD'],
  account: { balance: 5000, leverage: 100 },
  policy: { mode: 'off', requireStop: false, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: null },
  objectives: [
    'Thirty trades, no guard rails',
    'Every trade sized as if the guard were still watching',
    'Review expectancy in R at the end'
  ],
  hint: 'Nothing stops you over-sizing now. That is the exam. Check the Journal tab as you go — expectancy in R is the only number that matters.',
  test: function (ctx) {
    var n = ctx.account.history.length;
    return {
      pass: n >= 30,
      progress: Math.min(1, n / 30),
      detail: n + ' of 30 trades. Expectancy ' + ctx.stats.expectancyR.toFixed(2) + 'R, win rate ' +
              ctx.stats.winRate.toFixed(0) + '%.'
    };
  }
}

];
