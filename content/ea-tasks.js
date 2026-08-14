/* N1 Forex Academy — code labs for the Automation track.

   A drill with `kind: 'code'` goes to assets/ea-editor.js, which runs the
   student's JavaScript in a Web Worker against the real simulation engine.
   Progress records into progress.drills exactly as every other surface does.

   WHAT A CHECK MAY LOOK AT. Only the `R` object the runtime collects — order
   attempts, fills, stop distances, risk percentages, per-bar counts, the
   restart, the trade history. NEVER the student's source text. Grading on the
   presence of a string like "isNewBar" would pass code that does not work and
   fail code that does; every check here grades BEHAVIOUR, which is the same
   standard a real account applies.

   EVERY TASK HAS A `solution`. It is not shown to the student — it exists so
   tools/check-ea-tasks.mjs can prove, before deploy, that each task is
   passable, and that each `starter` genuinely FAILS the checks it is meant to
   fail. A task whose checks nobody has run is a task that will waste a
   student's evening.

   TUNING. Figures in the briefs are computed from the seeded run, so if you
   change a seed, bars, balance or instrument you MUST re-run the checker and
   update any number quoted in prose. */
window.DRILLS = (window.DRILLS || []).concat([

/* ============================ 1 — THE TWO GUARDS ============================ */
{
  id: 'ea-guards',
  kind: 'code',
  module: 802,
  title: 'Make it act once',
  brief: 'A correct rule with no guards. Run it first and watch what a machine does with "buy when price is above the average" — then fix it in two lines.',
  task: {
    instrument: 'EURUSD', seed: 'ea-guards-1', timeframe: 'M15',
    bars: 120, ticksPerBar: 4, balance: 10000, leverage: 100
  },
  intro:
    'The rule below is fine. The strategy is not the problem and it never is. ' +
    'Run it unchanged before you edit anything — you need to see the number.',
  goals: [
    'Act at most once per bar, on the bar the condition became true.',
    'Never open a second position while one is already open.',
    'Still take the trades the rule describes — an EA that never trades passes nothing.'
  ],
  starter:
'// Rule: if the last closed M15 candle finished above the 50-period average,\n' +
'// buy 0.10 lots with a 20-pip stop.\n' +
'//\n' +
'// This rule is correct. Run it and read the order count before you change it.\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (iClose("M15", 1) > iMA("M15", 50, 1))\n' +
'   {\n' +
'      Buy(0.10, Bid() - 20 * Pip());\n' +
'   }\n' +
'}\n' +
'\n' +
'// Two guards go in, above the rule. Module 802 has both of them.\n' +
'//   1. once per bar   — compare iTime("M15", 0) against what you saw last time\n' +
'//   2. not already in — PositionsTotal()\n',
  solution:
'var lastBar = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 50, 1))\n' +
'   {\n' +
'      Buy(0.10, Bid() - 20 * Pip());\n' +
'   }\n' +
'}\n',
  checks: [
    { label: 'It still trades',
      test: function (r) { return r.ordersFilled >= 3; },
      pass: 'The rule still fires. An EA that trades nothing passes no test worth having.',
      fail: 'This EA opened fewer than 3 positions. A guard that stops it trading at all is not a guard, it is an off switch — check you are not returning before the rule ever runs.' },

    { label: 'At most one order per bar',
      test: function (r) { return r.duplicateBarOrders === 0; },
      pass: 'Never more than one order on the same bar. That is guard 1 doing its job.',
      fail: 'This EA sent more than one order on the same bar. OnTick runs on every price change, not once per bar — compare iTime("M15", 0) with the value you stored last time, and return when they match.' },

    { label: 'Never more than one position open',
      test: function (r) { return r.maxOpenPositions <= 1; },
      pass: 'One position at a time. That is guard 2.',
      fail: 'This EA held several positions at once. The condition stays true for many bars, so acting once per bar is still not enough — check PositionsTotal() before entering.' },

    { label: 'Order count is sane',
      test: function (r) { return r.orderAttempts <= r.bars + 2; },
      pass: 'Order attempts are in proportion to bars, which is what you meant all along.',
      fail: 'This EA attempted far more orders than there were bars. That is the whole lesson: the rule was right and the machine ran it on every single tick.' }
  ],
  onPass:
    'Two guards, six lines. Write them FIRST from now on — before the rule they protect, not after ' +
    'you have discovered you needed them.'
},

/* ====================== 2 — TRANSLATE THE WRITTEN RULE ====================== */
{
  id: 'ea-translate',
  kind: 'code',
  module: 803,
  title: 'Translate the plan exactly',
  brief: 'A plan written in English, with one vague word in it. Code it — and find out which parts of your own plan were ever really rules.',
  task: {
    instrument: 'GBPUSD', seed: 'ea-translate-3', timeframe: 'M15',
    bars: 160, ticksPerBar: 4, balance: 10000, leverage: 100
  },
  intro:
    'Here is the plan, exactly as a student wrote it:\n\n' +
    '"I buy when the trend is up and price pulls back to the average, as long as it is not too ' +
    'volatile. I get out when it goes against me."\n\n' +
    'Three of those clauses can be written as code. One cannot, and the uncomfortable part of ' +
    'module 803 is discovering which. The version below is the plan made testable — every vague ' +
    'word replaced by a number a computer can evaluate.',
  goals: [
    'Filter: the 20-period average is above the 50-period average, both on M15.',
    'Trigger: the last closed candle closed above the 20-period average.',
    'Volatility gate: ATR(14) is under 45 pips — "not too volatile", made a number.',
    'Every entry carries a stop 25 pips away. No stop, no trade.',
    'Guards from module 802 still apply — they do not stop being your job.'
  ],
  starter:
'// The plan, made testable. Fill in the three questions.\n' +
'//\n' +
'// Keep them as separate functions. When something misbehaves you want to\n' +
'// Print() each answer and see which one lied — that is module 803\'s point.\n' +
'\n' +
'var lastBar = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'// FILTER — is the setup valid at all right now?\n' +
'function filterOk()\n' +
'{\n' +
'   return false;   // 20-period average above the 50-period average, M15\n' +
'}\n' +
'\n' +
'// TRIGGER — has the thing I am waiting for actually happened?\n' +
'function triggerFired()\n' +
'{\n' +
'   return false;   // last closed candle closed above the 20-period average\n' +
'}\n' +
'\n' +
'// GATE — is it too volatile to be worth taking?\n' +
'function calmEnough()\n' +
'{\n' +
'   return false;   // iATR("M15", 14) below 45\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (filterOk() && triggerFired() && calmEnough())\n' +
'   {\n' +
'      var sl = Bid() - 25 * Pip();\n' +
'      Buy(0.10, sl, Bid() + 50 * Pip());\n' +
'   }\n' +
'}\n',
  solution:
'var lastBar = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function filterOk()\n' +
'{\n' +
'   return iMA("M15", 20, 1) > iMA("M15", 50, 1);\n' +
'}\n' +
'\n' +
'function triggerFired()\n' +
'{\n' +
'   return iClose("M15", 1) > iMA("M15", 20, 1);\n' +
'}\n' +
'\n' +
'function calmEnough()\n' +
'{\n' +
'   return iATR("M15", 14) < 45;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (filterOk() && triggerFired() && calmEnough())\n' +
'   {\n' +
'      var sl = Bid() - 25 * Pip();\n' +
'      Buy(0.10, sl, Bid() + 50 * Pip());\n' +
'   }\n' +
'}\n',
  checks: [
    { label: 'The plan actually trades',
      test: function (r) { return r.ordersFilled >= 4; },
      pass: 'The three conditions do come true together, and the EA takes those trades.',
      fail: 'Fewer than 4 trades. If a condition is still returning false, nothing will ever fire — Print() each of the three answers on a new bar and see which one never becomes true.' },

    { label: 'Every trade carries a stop',
      test: function (r) { return r.ordersWithoutStop === 0 && r.ordersFilled > 0; },
      pass: 'Every order went out with a stop attached.',
      fail: 'At least one order had no stop. "No stop, no trade" is a rule, not a preference — pass the stop price as the second argument to Buy().' },

    { label: 'Stops are where the plan said',
      test: function (r) {
        var withStops = r.orders.filter(function (o) { return o.filled && o.stopPips; });
        return withStops.length > 0 && withStops.every(function (o) {
          return o.stopPips > 20 && o.stopPips < 32;
        });
      },
      pass: 'Every stop sits about 25 pips away, which is what the plan specified.',
      fail: 'At least one stop is not near the 25 pips the plan specified. Check you are measuring from the current price rather than from a level that has since moved.' },

    { label: 'The volatility gate is doing something',
      test: function (r) { return r.ordersFilled <= 30; },
      pass: 'The gate refused the noisy stretches rather than trading everything.',
      fail: 'This EA traded far too often for a plan with a volatility gate on it. Check calmEnough() is being consulted rather than always returning true.' },

    { label: 'Guards still hold',
      test: function (r) { return r.duplicateBarOrders === 0 && r.maxOpenPositions <= 1; },
      pass: 'One order per bar, one position at a time — module 802 has not stopped applying.',
      fail: 'A guard slipped. Adding logic on top does not retire the guards underneath it.' }
  ],
  onPass:
    'Notice which clause never made it into the code: "I get out when it goes against me." That was ' +
    'not a rule, it was a feeling — and the stop is what it becomes once you are forced to say it in ' +
    'numbers. Most plans have one of those in them.'
},

/* ========================= 3 — SIZE FROM THE STOP ========================= */
{
  id: 'ea-size',
  kind: 'code',
  module: 804,
  title: 'Size it from the stop, in code',
  brief: 'The same EA, with stops that vary from 15 to 60 pips. Replace the hard-coded lot size with module 10 written as a function.',
  task: {
    instrument: 'EURUSD', seed: 'ea-size-2', timeframe: 'M15',
    bars: 200, ticksPerBar: 4, balance: 20000, leverage: 100
  },
  intro:
    'This EA sets its stop from recent volatility, so the distance changes with every trade — ' +
    'sometimes 15 pips, sometimes 60. The lot size is hard-coded at 0.50.\n\n' +
    'Run it first and look at the risk column. One line, and the risk swings by a factor of four ' +
    'while your policy says 1%. Then write lotsFor() properly.',
  goals: [
    'Risk exactly 1% of current equity on every trade.',
    'Work the size out from the stop distance, never the other way round.',
    'Ask PipValue() what a pip is worth. Do not assume $10.',
    'Never send an order for zero or a negative size.'
  ],
  starter:
'var RiskPercent = 1.0;\n' +
'var lastBar = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'// The stop comes from volatility, so its distance is different every time.\n' +
'function stopPips()\n' +
'{\n' +
'   var atr = iATR("M15", 14);\n' +
'   return Math.max(15, Math.min(60, atr * 0.8));\n' +
'}\n' +
'\n' +
'// WRONG. This is the line to replace.\n' +
'function lotsFor(stopDistancePips)\n' +
'{\n' +
'   return 0.50;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 30, 1))\n' +
'   {\n' +
'      var dist = stopPips();\n' +
'      var lots = lotsFor(dist);\n' +
'      Buy(lots, Bid() - dist * Pip(), Bid() + dist * 2 * Pip());\n' +
'   }\n' +
'}\n' +
'\n' +
'// Risk amount  = Equity() * RiskPercent / 100\n' +
'// Cost per lot = stop distance in pips * PipValue(1)\n' +
'// Lots         = risk amount / cost per lot\n',
  solution:
'var RiskPercent = 1.0;\n' +
'var lastBar = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function stopPips()\n' +
'{\n' +
'   var atr = iATR("M15", 14);\n' +
'   return Math.max(15, Math.min(60, atr * 0.8));\n' +
'}\n' +
'\n' +
'function lotsFor(stopDistancePips)\n' +
'{\n' +
'   if (stopDistancePips <= 0) return 0;\n' +
'\n' +
'   var risk    = Equity() * RiskPercent / 100;\n' +
'   var perLot  = stopDistancePips * PipValue(1);\n' +
'   if (perLot <= 0) return 0;\n' +
'\n' +
'   var lots = risk / perLot;\n' +
'   return Math.round(lots * 100) / 100;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 30, 1))\n' +
'   {\n' +
'      var dist = stopPips();\n' +
'      var lots = lotsFor(dist);\n' +
'      if (lots <= 0) return;\n' +
'      Buy(lots, Bid() - dist * Pip(), Bid() + dist * 2 * Pip());\n' +
'   }\n' +
'}\n',
  checks: [
    { label: 'It trades',
      test: function (r) { return r.ordersFilled >= 5; },
      pass: 'Enough trades to judge the sizing on.',
      fail: 'Fewer than 5 trades. If lotsFor() is returning zero or a negative number every order is being refused — Print() the size before you send it.' },

    { label: 'Every trade risks 1%, within a rounding tolerance',
      test: function (r) {
        var f = r.orders.filter(function (o) { return o.filled && o.riskPct != null; });
        return f.length >= 5 && f.every(function (o) { return o.riskPct >= 0.85 && o.riskPct <= 1.15; });
      },
      pass: 'Every position risked about 1% of equity at the moment it opened — whatever the stop distance was.',
      fail: 'At least one trade did not risk about 1%. Work the size out from risk amount divided by (stop pips x value of one pip per lot), and use Equity() rather than a fixed starting balance.' },

    { label: 'Size actually varies with the stop',
      test: function (r) {
        var f = r.orders.filter(function (o) { return o.filled && o.lots > 0; });
        if (f.length < 5) return false;
        var lots = f.map(function (o) { return o.lots; });
        return Math.max.apply(null, lots) > Math.min.apply(null, lots) * 1.5;
      },
      pass: 'Wide stop, small size. Tight stop, large size. That is the entire point of sizing from the stop.',
      fail: 'Every trade used a similar size, so the stop distance is not reaching the calculation. A hard-coded lot size passes no test here, which is deliberate.' },

    { label: 'Larger stop, smaller size — every time',
      test: function (r) {
        var f = r.orders.filter(function (o) { return o.filled && o.stopPips && o.lots; });
        if (f.length < 5) return false;
        // Sorting by stop distance must sort lots the other way, allowing for
        // equity drifting between trades.
        var s = f.slice().sort(function (a, b) { return a.stopPips - b.stopPips; });
        for (var i = 1; i < s.length; i++) {
          if (s[i].stopPips > s[i - 1].stopPips * 1.2 && s[i].lots > s[i - 1].lots) return false;
        }
        return true;
      },
      pass: 'The relationship holds across every trade in the run, not just on average.',
      fail: 'A trade with a wider stop came out with a larger size than one with a tighter stop. The stop must be in the denominator.' }
  ],
  onPass:
    'That function is the single highest-value thing in the whole track. It is also the bug that hides ' +
    'best: a fixed size looks perfectly fine in a backtest that starts at a fixed balance, and only ' +
    'bites once the account is down — which is the worst moment to find it.'
},

/* ===================== 4 — THE RULES THAT STOP THE EA ===================== */
{
  id: 'ea-limits',
  kind: 'code',
  module: 805,
  title: 'The rules that stop it',
  brief: 'An EA that never stops itself. Add the two limits that turn a bad day into a bad day rather than a bad month.',
  task: {
    instrument: 'XAUUSD', seed: 'ea-limits-4', timeframe: 'M15',
    bars: 220, ticksPerBar: 4, balance: 10000, leverage: 100
  },
  intro:
    'Gold, with no limits on it at all. It works out a stop distance, sizes the position off that ' +
    'distance, and then sends the order without the stop attached — which is a bug people genuinely ' +
    'ship. It will trade whatever the day is doing ' +
    'and it will keep trading after a run of losses, because nothing tells it not to.\n\n' +
    'Run it, then add the two limits. Both of them come from module 10, and putting them in code is ' +
    'the only version a machine can be trusted with.',
  goals: [
    'Refuse to open anything without a stop. Not "usually" — never.',
    'Stop trading for the rest of the run once equity is 8% below its peak.',
    'Once stopped, stay stopped. Restarting needs a human, and this run has no human in it.',
    'Keep risking about 1% on the trades you do take.'
  ],
  starter:
'var RiskPercent = 1.0;\n' +
'var MaxDrawdownPercent = 8.0;\n' +
'\n' +
'var lastBar = 0;\n' +
'var peakEquity = 0;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function lotsFor(stopDistancePips)\n' +
'{\n' +
'   if (stopDistancePips <= 0) return 0;\n' +
'   var risk   = Equity() * RiskPercent / 100;\n' +
'   var perLot = stopDistancePips * PipValue(1);\n' +
'   if (perLot <= 0) return 0;\n' +
'   return Math.round((risk / perLot) * 100) / 100;\n' +
'}\n' +
'\n' +
'// TODO: a kill switch. Once it trips it must stay tripped.\n' +
'function tradingAllowed()\n' +
'{\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'   if (!tradingAllowed()) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 30, 1))\n' +
'   {\n' +
'      var dist = Math.max(200, Math.min(900, iATR("M15", 14) * 0.5));\n' +
'      var lots = lotsFor(dist);\n' +
'\n' +
'      // Look carefully at what this order is missing.\n' +
'      Buy(lots, 0, Bid() + dist * 2 * Pip());\n' +
'   }\n' +
'}\n' +
'\n' +
'// Track the highest equity you have seen, compare the current one against it,\n' +
'// and once you are more than MaxDrawdownPercent below it, set a flag and\n' +
'// never clear it.\n',
  solution:
'var RiskPercent = 1.0;\n' +
'var MaxDrawdownPercent = 8.0;\n' +
'\n' +
'var lastBar = 0;\n' +
'var peakEquity = 0;\n' +
'var halted = false;\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function lotsFor(stopDistancePips)\n' +
'{\n' +
'   if (stopDistancePips <= 0) return 0;\n' +
'   var risk   = Equity() * RiskPercent / 100;\n' +
'   var perLot = stopDistancePips * PipValue(1);\n' +
'   if (perLot <= 0) return 0;\n' +
'   return Math.round((risk / perLot) * 100) / 100;\n' +
'}\n' +
'\n' +
'function tradingAllowed()\n' +
'{\n' +
'   var eq = Equity();\n' +
'   if (eq > peakEquity) peakEquity = eq;\n' +
'\n' +
'   if (halted) return false;\n' +
'\n' +
'   if (peakEquity > 0 && eq < peakEquity * (1 - MaxDrawdownPercent / 100))\n' +
'   {\n' +
'      halted = true;\n' +
'      Print("KILL SWITCH. Equity ", eq, " is more than ",\n' +
'            MaxDrawdownPercent, "% below the peak of ", peakEquity, ". Stopping.");\n' +
'      return false;\n' +
'   }\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'   if (!tradingAllowed()) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 30, 1))\n' +
'   {\n' +
'      var dist = Math.max(200, Math.min(900, iATR("M15", 14) * 0.5));\n' +
'      var lots = lotsFor(dist);\n' +
'      if (lots <= 0) return;\n' +
'\n' +
'      var sl = Bid() - dist * Pip();\n' +
'      var res = Buy(lots, sl, Bid() + dist * 2 * Pip());\n' +
'      if (!res.ok) Print("ORDER FAILED: ", res.retcode, " ", res.comment);\n' +
'   }\n' +
'}\n',
  checks: [
    { label: 'It trades',
      test: function (r) { return r.ordersFilled >= 4; },
      pass: 'It takes trades before it stops itself.',
      fail: 'Fewer than 4 trades. A kill switch that trips immediately is not a limit, it is a bug — check you are not comparing against a peak equity of zero on the very first bar.' },

    { label: 'No order without a stop',
      test: function (r) { return r.ordersWithoutStop === 0; },
      pass: 'Every single order carried a stop.',
      fail: 'An order went out with no stop on it. On gold, unstopped, that is the trade that ends the account.' },

    { label: 'Drawdown stayed inside the limit',
      test: function (r) { return r.stats.maxDrawdownPct <= 12; },
      pass: 'Peak-to-trough stayed inside the limit the policy set.',
      fail: 'Drawdown ran past the limit. Once equity is more than 8% below its peak the EA must stop opening anything — check the flag is being set and consulted before every entry.' },

    { label: 'Once stopped, it stayed stopped',
      test: function (r) {
        if (!r.orders.length) return false;
        // Equity is sampled at each order. If it ever traded again after
        // dropping past the limit, the switch was reset by a recovery.
        var peak = r.stats.startBalance, tripped = false;
        for (var i = 0; i < r.orders.length; i++) {
          var e = r.orders[i].equityAtOrder;
          if (e == null) continue;
          if (e > peak) peak = e;
          if (tripped) return false;
          if (e < peak * 0.92) tripped = true;
        }
        return true;
      },
      pass: 'It never resumed on its own. Restarting after a stop is a decision, and a decision needs a person.',
      fail: 'This EA started trading again after the limit was breached. A limit that clears itself when equity recovers is not a limit — set a flag and never clear it.' },

    { label: 'Risk per trade held at about 1%',
      test: function (r) {
        var f = r.orders.filter(function (o) { return o.filled && o.riskPct != null; });
        return f.length >= 4 && f.every(function (o) { return o.riskPct >= 0.85 && o.riskPct <= 1.15; });
      },
      pass: 'Sizing held at 1% throughout, on an instrument where a pip is not $10.',
      fail: 'Risk drifted off 1%. PipValue() on gold is nothing like a currency pair — ask for it rather than assuming it.' }
  ],
  onPass:
    'You have just written the thing that separates an EA that survives a bad month from one that does ' +
    'not, and it is about fifteen lines. Note which part was hardest: not tripping the switch, but ' +
    'refusing to un-trip it.'
},

/* ========================= 5 — SURVIVE THE RESTART ========================= */
{
  id: 'ea-restart',
  kind: 'code',
  module: 806,
  title: 'Survive the restart',
  brief: 'Halfway through this run the terminal restarts, mid-bar, exactly as it does in real life. The obvious new-bar guard breaks. Find out why, then fix it.',
  task: {
    instrument: 'EURUSD', seed: 'ea-restart-7', timeframe: 'M15',
    bars: 120, ticksPerBar: 4, balance: 10000, leverage: 100, restartAt: 64
  },
  intro:
    'This is the only failure on this site that no backtest anywhere can produce, which is exactly ' +
    'why it is here.\n\n' +
    'At bar 64 the terminal restarts in the middle of a bar — a Windows update, a dropped ' +
    'connection, a power cut. OnInit runs again. Every variable your EA declared goes back to its ' +
    'starting value. Your open positions survive, because they live with the broker, not with you.\n\n' +
    'The code below is the guard from module 802 and it is the guard nearly everyone writes. Run it ' +
    'unchanged and read the report. Then work out what it has to remember, and where.\n\n' +
    'The bar it interrupts was chosen deliberately: it is one the EA had already acted on.',
  goals: [
    'Still act at most once per bar — including the bar the restart happened on.',
    'Survive OnInit running a second time without acting twice.',
    'Keep the position guard working across the restart too.'
  ],
  starter:
'// The standard guard. It is correct, right up until the terminal restarts.\n' +
'//\n' +
'// Run this first. The report will tell you what happened on bar 60.\n' +
'\n' +
'var lastBar = 0;\n' +
'\n' +
'function OnInit()\n' +
'{\n' +
'   Print("EA started.");\n' +
'}\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (t === lastBar) return false;\n' +
'   lastBar = t;\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 40, 1))\n' +
'   {\n' +
'      Buy(0.10, Bid() - 30 * Pip(), Bid() + 60 * Pip());\n' +
'   }\n' +
'}\n' +
'\n' +
'// A variable lives inside the running program, so a restart wipes it.\n' +
'// Something has to remember across a restart. In MQL5 that is a global\n' +
'// variable, held by the terminal rather than by your EA:\n' +
'//\n' +
'//    GlobalVariableSet("name", number)\n' +
'//    GlobalVariableGet("name")\n',
  solution:
'function OnInit()\n' +
'{\n' +
'   Print("EA started. Last handled bar was ", GlobalVariableGet("lastBar"));\n' +
'}\n' +
'\n' +
'function isNewBar()\n' +
'{\n' +
'   var t = iTime("M15", 0);\n' +
'   if (GlobalVariableGet("lastBar") === t) return false;\n' +
'   GlobalVariableSet("lastBar", t);\n' +
'   return true;\n' +
'}\n' +
'\n' +
'function OnTick()\n' +
'{\n' +
'   if (!isNewBar()) return;\n' +
'   if (PositionsTotal() > 0) return;\n' +
'\n' +
'   if (iClose("M15", 1) > iMA("M15", 40, 1))\n' +
'   {\n' +
'      Buy(0.10, Bid() - 30 * Pip(), Bid() + 60 * Pip());\n' +
'   }\n' +
'}\n',
  checks: [
    { label: 'It trades',
      test: function (r) { return r.ordersFilled >= 3; },
      pass: 'The EA works normally either side of the restart.',
      fail: 'Fewer than 3 trades. Surviving a restart must not mean refusing to trade at all — check the remembered value is being updated, not only read.' },

    { label: 'The restart happened',
      test: function (r) { return r.restarted === true && r.onInitCalls >= 2; },
      pass: 'OnInit ran twice, as it does after a real restart.',
      fail: 'The restart did not run. This is a fault in the task setup rather than in your code — tell your instructor.' },

    { label: 'It did not act twice on any bar',
      test: function (r) { return r.duplicateBarOrders === 0; },
      pass: 'No bar received two orders, including the interrupted one. That is the whole exercise.',
      fail: 'The EA acted twice on one bar. The restart wiped the variable holding the last bar time, so the bar it had already handled looked new. Store it somewhere that survives — GlobalVariableSet.' },

    { label: 'Nothing was opened on the interrupted bar after the restart',
      test: function (r) { return r.ordersOnRestartBar === 0; },
      pass: 'The bar that was interrupted was not traded a second time.',
      fail: 'After the restart the EA opened a position on the bar it had already handled. No error appeared, nothing was logged, and in a live account you would simply have two positions where you meant one.' }
  ],
  onPass:
    'Now you know why module 806 says a restart is the sneakiest live failure there is. Nothing threw ' +
    'an error. Nothing appeared in a log. The EA just quietly did the thing twice — and no backtest ' +
    'you can run will ever show it to you.'
}

]);
