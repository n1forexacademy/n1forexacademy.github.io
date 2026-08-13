/* N1 Forex Academy — trader calculators.

   Sixteen calculators built from the standard formulas, implemented here from
   first principles. They share FX.INSTRUMENTS with the simulator, so a number
   worked out here matches what the terminal does in a drill — that consistency
   is the point, otherwise students learn two different sets of arithmetic.

   Anything requiring a live market feed (streaming rates, heat maps,
   correlation matrices, an economic calendar) is deliberately absent: it cannot
   be computed, only fetched, and that needs a data provider. Where a rate is
   needed it is typed in, and the UI says so plainly. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function money(n) {
    if (!isFinite(n)) return '—';
    return (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function num(n, d) { return isFinite(n) ? n.toFixed(d === undefined ? 2 : d) : '—'; }
  function pct(n, d) { return isFinite(n) ? n.toFixed(d === undefined ? 2 : d) + '%' : '—'; }

  function specOf(id) { return (window.FX && FX.INSTRUMENTS[id]) || null; }
  function instrumentOptions() {
    return Object.keys((window.FX && FX.INSTRUMENTS) || {}).map(function (k) {
      return { v: k, t: FX.INSTRUMENTS[k].name };
    });
  }
  /* Account-currency value of one pip for one standard lot. */
  function pipPerLot(spec, price) {
    if (!spec) return 10;
    return spec.quote === 'USD'
      ? spec.pip * spec.contract
      : (spec.pip * spec.contract) / (price || spec.start);
  }
  function notionalUSD(spec, lots, price) {
    if (!spec) return 0;
    if (spec.quote === 'USD') return lots * spec.contract * price;
    return lots * spec.contract;              // USD is the base currency here
  }

  /* ---------- calculator definitions ---------- */
  var CALCS = [

  /* ============ RISK MANAGEMENT ============ */
  {
    id: 'lot-size', group: 'Risk management', title: 'Position size',
    blurb: 'The one calculation that matters most. Stop distance and risk decide the lot size — never the other way round.',
    teach: 'Module 10. If you ever find yourself picking a lot size first, you have skipped a step.',
    fields: [
      { k: 'equity', label: 'Account equity', type: 'number', value: 5000, step: 100, prefix: '$' },
      { k: 'risk', label: 'Risk per trade', type: 'number', value: 1, step: 0.1, suffix: '%' },
      { k: 'pair', label: 'Instrument', type: 'select', value: 'EURUSD', options: instrumentOptions() },
      { k: 'price', label: 'Current price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'stop', label: 'Stop distance', type: 'number', value: 35, step: 1, suffix: 'pips' }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var riskAmt = v.equity * (v.risk / 100);
      var perLot = pipPerLot(spec, v.price);
      var costPerLot = v.stop * perLot;
      var lots = costPerLot > 0 ? riskAmt / costPerLot : 0;
      return [
        { label: 'Lot size', value: num(Math.floor(lots * 100) / 100), big: true,
          note: 'rounded down to 0.01' },
        { label: 'Risk amount', value: money(riskAmt) },
        { label: 'Pip value at that size', value: money(lots * perLot) + ' / pip' },
        { label: 'Pip value per standard lot', value: money(perLot),
          note: spec && spec.quote !== 'USD' ? 'not $10 — this is a JPY-quoted pair' : '' }
      ];
    }
  },
  {
    id: 'lot-optimiser', group: 'Risk management', title: 'Volatility-scaled size',
    blurb: 'Sets the stop from current ATR instead of a fixed pip count, then sizes to that stop.',
    teach: 'Module 8. A 25-pip stop is loose on EUR/USD and meaningless on gold. Scale it to what the instrument is actually doing.',
    fields: [
      { k: 'equity', label: 'Account equity', type: 'number', value: 5000, step: 100, prefix: '$' },
      { k: 'risk', label: 'Risk per trade', type: 'number', value: 1, step: 0.1, suffix: '%' },
      { k: 'pair', label: 'Instrument', type: 'select', value: 'EURUSD', options: instrumentOptions() },
      { k: 'price', label: 'Current price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'atr', label: 'Current ATR', type: 'number', value: 18, step: 0.1, suffix: 'pips' },
      { k: 'mult', label: 'ATR multiple', type: 'number', value: 2, step: 0.1, suffix: '×' }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var stop = v.atr * v.mult;
      var perLot = pipPerLot(spec, v.price);
      var riskAmt = v.equity * (v.risk / 100);
      var lots = stop * perLot > 0 ? riskAmt / (stop * perLot) : 0;
      return [
        { label: 'Stop distance', value: num(stop, 1) + ' pips', big: true },
        { label: 'Lot size', value: num(Math.floor(lots * 100) / 100), big: true },
        { label: 'Risk amount', value: money(riskAmt) },
        { label: 'Sanity check', value: v.mult < 1 ? 'Too tight' : v.mult > 3.5 ? 'Very wide' : 'Reasonable',
          cls: v.mult < 1 ? 'bad' : v.mult > 3.5 ? 'warn' : 'good',
          note: '1.5×–2.5× ATR is the usual working range' }
      ];
    }
  },
  {
    id: 'risk-reward', group: 'Risk management', title: 'Risk : reward',
    blurb: 'What win rate a given ratio needs just to break even, and what it earns at your actual win rate.',
    teach: 'Module 10. A 40% win rate can be highly profitable. A 70% win rate can lose money. Win rate alone tells you nothing.',
    fields: [
      { k: 'entry', label: 'Entry price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'stop', label: 'Stop price', type: 'number', value: 1.0815, step: 0.0001 },
      { k: 'target', label: 'Target price', type: 'number', value: 1.0920, step: 0.0001 },
      { k: 'win', label: 'Your win rate', type: 'number', value: 45, step: 1, suffix: '%' }
    ],
    compute: function (v) {
      var risk = Math.abs(v.entry - v.stop), reward = Math.abs(v.target - v.entry);
      var rr = risk > 0 ? reward / risk : 0;
      var be = rr > 0 ? 100 / (1 + rr) : 100;
      var p = v.win / 100;
      var exp = p * rr - (1 - p);
      return [
        { label: 'Reward : risk', value: '1 : ' + num(rr), big: true },
        { label: 'Break-even win rate', value: pct(be, 1),
          note: 'before spread and commission' },
        { label: 'Expectancy at ' + num(v.win, 0) + '%', value: num(exp) + ' R', big: true,
          cls: exp > 0 ? 'good' : 'bad' },
        { label: 'Verdict', value: exp > 0 ? 'Positive edge' : 'Loses money over time',
          cls: exp > 0 ? 'good' : 'bad',
          note: exp > 0 ? 'costs will reduce this' : 'raise the ratio or the win rate' }
      ];
    }
  },
  {
    id: 'drawdown', group: 'Risk management', title: 'Drawdown recovery',
    blurb: 'What gain is needed to get back to level after a loss. The asymmetry is the whole argument for small risk.',
    teach: 'Module 10. Lose 50% and you need 100% back. Every extra point of drawdown costs more than the last.',
    fields: [
      { k: 'dd', label: 'Drawdown taken', type: 'number', value: 20, step: 1, suffix: '%' },
      { k: 'start', label: 'Starting equity', type: 'number', value: 5000, step: 100, prefix: '$' }
    ],
    compute: function (v) {
      var d = Math.min(99.9, Math.max(0, v.dd)) / 100;
      var need = d / (1 - d) * 100;
      var left = v.start * (1 - d);
      var rows = [
        { label: 'Equity remaining', value: money(left), big: true },
        { label: 'Gain needed to recover', value: pct(need, 1), big: true,
          cls: need > 50 ? 'bad' : need > 25 ? 'warn' : '' },
        { label: 'Profit required', value: money(v.start - left) }
      ];
      rows.push({ label: 'For scale', value: '10% → 11.1%  ·  25% → 33.3%  ·  50% → 100%  ·  75% → 300%',
                  note: 'this is why capital preservation beats return chasing' });
      return rows;
    }
  },
  {
    id: 'risk-of-ruin', group: 'Risk management', title: 'Risk of ruin',
    blurb: 'Simulates thousands of runs of your edge to estimate how often you would hit a given drawdown.',
    teach: 'Module 12. Even a positive-expectancy system produces alarming stretches. This shows how alarming.',
    fields: [
      { k: 'win', label: 'Win rate', type: 'number', value: 45, step: 1, suffix: '%' },
      { k: 'rr', label: 'Reward : risk', type: 'number', value: 2, step: 0.1, suffix: ': 1' },
      { k: 'risk', label: 'Risk per trade', type: 'number', value: 1, step: 0.1, suffix: '%' },
      { k: 'ruin', label: 'Count as ruin at', type: 'number', value: 30, step: 1, suffix: '% down' },
      { k: 'trades', label: 'Trades simulated', type: 'number', value: 200, step: 50 }
    ],
    compute: function (v) {
      // Fixed work budget. Previously this was 4,000 sims x up to 2,000 trades
      // = 8 million iterations, run synchronously on every keystroke, which is
      // enough to freeze the browser tab. Total iterations are now capped at
      // ~250k regardless of inputs; that is still ample for a percentage
      // estimate and completes in a few milliseconds.
      var ITER_BUDGET = 250000;
      var p = v.win / 100, f = v.risk / 100, floor = 1 - v.ruin / 100;
      var n = Math.max(10, Math.min(500, v.trades | 0));
      var sims = Math.max(400, Math.min(3000, Math.floor(ITER_BUDGET / n)));
      var ruined = 0, worstSum = 0, ends = [];
      for (var s = 0; s < sims; s++) {
        var eq = 1, peak = 1, worst = 0, dead = false;
        for (var t = 0; t < n; t++) {
          var r = eq * f;
          eq += (Math.random() < p) ? r * v.rr : -r;
          if (eq > peak) peak = eq;
          var dd = (peak - eq) / peak;
          if (dd > worst) worst = dd;
          if (eq <= floor) { dead = true; break; }
        }
        if (dead) ruined++;
        worstSum += worst; ends.push(eq);
      }
      // Report the MEDIAN outcome, not the mean. With fixed-fractional sizing a
      // few runs compound explosively and drag the average to a figure no
      // typical trader would ever see — the median describes the middle result.
      ends.sort(function (a, b) { return a - b; });
      var median = ends[Math.floor(ends.length / 2)];
      var exp = p * v.rr - (1 - p);
      return [
        { label: 'Chance of hitting ' + num(v.ruin, 0) + '% down', value: pct(ruined / sims * 100, 1), big: true,
          cls: ruined / sims > 0.2 ? 'bad' : ruined / sims > 0.05 ? 'warn' : 'good' },
        { label: 'Average worst drawdown', value: pct(worstSum / sims * 100, 1) },
        { label: 'Median ending equity', value: pct((median - 1) * 100, 1),
          cls: median >= 1 ? 'good' : 'bad',
          note: 'the middle outcome — the average is distorted by a few runs that compound wildly' },
        { label: 'Expectancy per trade', value: num(exp) + ' R',
          cls: exp > 0 ? 'good' : 'bad',
          note: exp <= 0 ? 'negative edge — ruin is a matter of time, not chance' : '' },
        { label: 'Method', value: sims.toLocaleString() + ' simulated runs of ' + n + ' trades',
          note: 'results shift slightly each time — that variance is the lesson' }
      ];
    }
  },
  {
    id: 'consistency', group: 'Risk management', title: 'Journal review',
    blurb: 'Turns a set of results into the numbers that actually describe an edge.',
    teach: 'Module 12. Expectancy in R is the only figure here that means anything on its own.',
    fields: [
      { k: 'trades', label: 'Trades taken', type: 'number', value: 40, step: 1 },
      { k: 'wins', label: 'Winners', type: 'number', value: 18, step: 1 },
      { k: 'avgWin', label: 'Average win', type: 'number', value: 210, step: 10, prefix: '$' },
      { k: 'avgLoss', label: 'Average loss', type: 'number', value: 100, step: 10, prefix: '$' },
      { k: 'risk', label: 'Risk per trade (1R)', type: 'number', value: 100, step: 10, prefix: '$' }
    ],
    compute: function (v) {
      var n = Math.max(1, v.trades), w = Math.min(n, Math.max(0, v.wins)), l = n - w;
      var wr = w / n;
      var expCash = wr * v.avgWin - (1 - wr) * v.avgLoss;
      var expR = v.risk > 0 ? expCash / v.risk : 0;
      var pf = (l * v.avgLoss) > 0 ? (w * v.avgWin) / (l * v.avgLoss) : Infinity;
      return [
        { label: 'Win rate', value: pct(wr * 100, 1) },
        { label: 'Expectancy', value: num(expR) + ' R per trade', big: true,
          cls: expR > 0 ? 'good' : 'bad' },
        { label: 'Expectancy in cash', value: money(expCash) + ' per trade' },
        { label: 'Profit factor', value: isFinite(pf) ? num(pf) : '—',
          cls: pf >= 1.3 ? 'good' : pf >= 1 ? 'warn' : 'bad',
          note: 'gross profit ÷ gross loss' },
        { label: 'Projected over ' + n + ' trades', value: money(expCash * n),
          cls: expCash > 0 ? 'good' : 'bad' },
        { label: 'Sample health', value: n < 30 ? 'Too small to trust' : n < 100 ? 'Indicative only' : 'Usable',
          cls: n < 30 ? 'bad' : n < 100 ? 'warn' : 'good',
          note: '100+ trades before believing any of it' }
      ];
    }
  },

  /* ============ TRADE CALCULATORS ============ */
  {
    id: 'pip-value', group: 'Trade calculators', title: 'Pip value',
    blurb: 'What one pip is worth at your size — the number beginners assume is always $10.',
    teach: 'Module 2. It is $10 per standard lot on a USD-quoted pair. Change any of those three conditions and it changes.',
    fields: [
      { k: 'pair', label: 'Instrument', type: 'select', value: 'USDJPY', options: instrumentOptions() },
      { k: 'price', label: 'Current price', type: 'number', value: 148.40, step: 0.001 },
      { k: 'lots', label: 'Lot size', type: 'number', value: 0.10, step: 0.01 }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var perLot = pipPerLot(spec, v.price);
      return [
        { label: 'Value per pip', value: money(perLot * v.lots), big: true },
        { label: 'Per standard lot', value: money(perLot) },
        { label: 'One pip is', value: spec ? spec.pip.toString() : '—',
          note: spec && spec.pip === 0.01 ? 'second decimal place — JPY convention' : 'fourth decimal place' },
        { label: 'Contract size', value: spec ? spec.contract.toLocaleString() + ' units' : '—',
          note: spec && spec.contract === 100 ? 'gold is 100 ounces, not 100,000' : '' }
      ];
    }
  },
  {
    id: 'profit-loss', group: 'Trade calculators', title: 'Profit / loss',
    blurb: 'What a completed trade actually made, after the costs most calculators leave out.',
    teach: 'Module 2. A calculator that reports gross figures flatters every result and hides a losing system.',
    fields: [
      { k: 'pair', label: 'Instrument', type: 'select', value: 'EURUSD', options: instrumentOptions() },
      { k: 'side', label: 'Direction', type: 'select', value: 'buy', options: [{ v: 'buy', t: 'Buy' }, { v: 'sell', t: 'Sell' }] },
      { k: 'entry', label: 'Entry price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'exit', label: 'Exit price', type: 'number', value: 1.0895, step: 0.0001 },
      { k: 'lots', label: 'Lot size', type: 'number', value: 0.20, step: 0.01 },
      { k: 'spread', label: 'Spread', type: 'number', value: 1.2, step: 0.1, suffix: 'pips' },
      { k: 'comm', label: 'Commission per lot round turn', type: 'number', value: 7, step: 0.5, prefix: '$' }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var diff = v.side === 'buy' ? (v.exit - v.entry) : (v.entry - v.exit);
      var pips = spec ? diff / spec.pip : 0;
      var perLot = pipPerLot(spec, v.exit);
      var gross = pips * perLot * v.lots;
      var spreadCost = v.spread * perLot * v.lots;
      var commCost = v.comm * v.lots;
      var net = gross - spreadCost - commCost;
      return [
        { label: 'Pips moved', value: num(pips, 1), cls: pips >= 0 ? 'good' : 'bad' },
        { label: 'Gross result', value: money(gross), cls: gross >= 0 ? 'good' : 'bad' },
        { label: 'Spread cost', value: '-' + money(spreadCost) },
        { label: 'Commission', value: '-' + money(commCost) },
        { label: 'Net result', value: money(net), big: true, cls: net >= 0 ? 'good' : 'bad' },
        { label: 'Costs as share of gross', value: gross !== 0 ? pct(Math.abs((spreadCost + commCost) / gross) * 100, 1) : '—',
          note: 'if this is large, the edge may not survive' }
      ];
    }
  },
  {
    id: 'margin', group: 'Trade calculators', title: 'Margin required',
    blurb: 'The collateral locked by a position, and what it leaves you to absorb losses.',
    teach: 'Module 3. Margin is not spent and not borrowed — it is returned when you close.',
    fields: [
      { k: 'pair', label: 'Instrument', type: 'select', value: 'EURUSD', options: instrumentOptions() },
      { k: 'price', label: 'Current price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'lots', label: 'Lot size', type: 'number', value: 0.50, step: 0.01 },
      { k: 'lev', label: 'Leverage 1 :', type: 'number', value: 100, step: 10 },
      { k: 'equity', label: 'Account equity', type: 'number', value: 5000, step: 100, prefix: '$' }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var notional = notionalUSD(spec, v.lots, v.price);
      var margin = v.lev > 0 ? notional / v.lev : 0;
      var free = v.equity - margin;
      var level = margin > 0 ? (v.equity / margin) * 100 : Infinity;
      return [
        { label: 'Position value', value: money(notional) },
        { label: 'Margin required', value: money(margin), big: true,
          cls: margin > v.equity ? 'bad' : '' },
        { label: 'Free margin', value: money(free), cls: free < 0 ? 'bad' : '' },
        { label: 'Margin level', value: isFinite(level) ? pct(level, 0) : '—', big: true,
          cls: level <= 50 ? 'bad' : level <= 150 ? 'warn' : 'good',
          note: 'call at 100%, stop out at 50% on a typical account' },
        { label: 'Order accepted?', value: margin <= v.equity ? 'Yes' : 'No — not enough free margin',
          cls: margin <= v.equity ? 'good' : 'bad' }
      ];
    }
  },
  {
    id: 'leverage', group: 'Trade calculators', title: 'Effective leverage',
    blurb: 'Not what your broker allows — what you are actually using right now.',
    teach: 'Module 3. Leverage is permission. The number that matters is how much of it you chose to use.',
    fields: [
      { k: 'pair', label: 'Instrument', type: 'select', value: 'EURUSD', options: instrumentOptions() },
      { k: 'price', label: 'Current price', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'lots', label: 'Total open lots', type: 'number', value: 0.50, step: 0.01 },
      { k: 'equity', label: 'Account equity', type: 'number', value: 5000, step: 100, prefix: '$' }
    ],
    compute: function (v) {
      var spec = specOf(v.pair);
      var notional = notionalUSD(spec, v.lots, v.price);
      var eff = v.equity > 0 ? notional / v.equity : 0;
      var move1 = notional * 0.01;
      return [
        { label: 'Exposure', value: money(notional) },
        { label: 'Effective leverage', value: '1 : ' + num(eff, 1), big: true,
          cls: eff > 20 ? 'bad' : eff > 10 ? 'warn' : 'good' },
        { label: 'A 1% market move costs', value: money(move1),
          note: pct(v.equity > 0 ? (move1 / v.equity) * 100 : 0, 1) + ' of your account' },
        { label: 'Assessment',
          value: eff > 20 ? 'Very high' : eff > 10 ? 'High' : eff > 3 ? 'Moderate' : 'Conservative',
          cls: eff > 20 ? 'bad' : eff > 10 ? 'warn' : 'good' }
      ];
    }
  },
  {
    id: 'swap', group: 'Trade calculators', title: 'Overnight swap',
    blurb: 'What holding a position overnight costs or pays, including the triple-charge day.',
    teach: 'Module 1. Spread destroys a scalper. Swap destroys a swing trader.',
    fields: [
      { k: 'lots', label: 'Lot size', type: 'number', value: 0.10, step: 0.01 },
      { k: 'rate', label: 'Swap per standard lot per night', type: 'number', value: -0.68, step: 0.01, prefix: '$' },
      { k: 'nights', label: 'Nights held', type: 'number', value: 30, step: 1 },
      { k: 'triple', label: 'Include triple-swap days', type: 'select', value: 'yes',
        options: [{ v: 'yes', t: 'Yes' }, { v: 'no', t: 'No' }] }
    ],
    compute: function (v) {
      var extra = v.triple === 'yes' ? Math.floor(v.nights / 7) * 2 : 0;
      var charged = v.nights + extra;
      var total = v.lots * v.rate * charged;
      return [
        { label: 'Nights charged', value: charged + '',
          note: extra ? extra + ' extra from the weekly triple-swap day' : '' },
        { label: 'Per night', value: money(v.lots * v.rate) },
        { label: 'Total over the period', value: money(total), big: true,
          cls: total >= 0 ? 'good' : 'bad' },
        { label: 'Direction', value: v.rate >= 0 ? 'You are paid to hold' : 'You pay to hold',
          cls: v.rate >= 0 ? 'good' : 'warn',
          note: 'positive swap is rarer than it looks once broker markup is applied' }
      ];
    }
  },
  {
    id: 'converter', group: 'Trade calculators', title: 'Currency converter',
    blurb: 'Straight conversion at a rate you supply.',
    teach: 'The rate is typed in, not fetched. A live feed needs a market data provider — see the note at the foot of this page.',
    fields: [
      { k: 'amount', label: 'Amount', type: 'number', value: 1000, step: 10 },
      { k: 'rate', label: 'Exchange rate', type: 'number', value: 1.0850, step: 0.0001 },
      { k: 'dir', label: 'Direction', type: 'select', value: 'mul',
        options: [{ v: 'mul', t: 'Multiply by rate' }, { v: 'div', t: 'Divide by rate' }] }
    ],
    compute: function (v) {
      var out = v.dir === 'mul' ? v.amount * v.rate : (v.rate ? v.amount / v.rate : 0);
      return [
        { label: 'Converted amount', value: num(out, 2), big: true },
        { label: 'Inverse rate', value: v.rate ? num(1 / v.rate, 6) : '—' },
        { label: 'Reminder', value: 'Broker conversion adds a markup',
          note: 'the rate you get on a deposit is rarely the rate you see quoted' }
      ];
    }
  },

  /* ============ TECHNICAL ============ */
  {
    id: 'fibonacci', group: 'Technical', title: 'Fibonacci levels',
    blurb: 'Retracements and extensions between a swing high and low.',
    teach: 'Module 7. These are reference lines, not instructions. They matter where they coincide with structure you already marked.',
    fields: [
      { k: 'high', label: 'Swing high', type: 'number', value: 1.0920, step: 0.0001 },
      { k: 'low', label: 'Swing low', type: 'number', value: 1.0790, step: 0.0001 },
      { k: 'dir', label: 'Direction', type: 'select', value: 'up',
        options: [{ v: 'up', t: 'Up move (retrace down)' }, { v: 'down', t: 'Down move (retrace up)' }] }
    ],
    compute: function (v) {
      var hi = Math.max(v.high, v.low), lo = Math.min(v.high, v.low), range = hi - lo;
      var up = v.dir === 'up';
      var lvl = function (r) { return up ? hi - range * r : lo + range * r; };
      var ext = function (r) { return up ? hi + range * (r - 1) : lo - range * (r - 1); };
      var rows = [{ label: 'Range', value: num(range, 5) }];
      [0.236, 0.382, 0.5, 0.618, 0.786].forEach(function (r) {
        rows.push({ label: 'Retrace ' + (r * 100).toFixed(1) + '%', value: num(lvl(r), 5),
                    cls: r === 0.618 ? 'good' : '', note: r === 0.618 ? 'most watched' : '' });
      });
      [1.272, 1.618, 2.618].forEach(function (r) {
        rows.push({ label: 'Extension ' + (r * 100).toFixed(1) + '%', value: num(ext(r), 5) });
      });
      return rows;
    }
  },
  {
    id: 'pivots', group: 'Technical', title: 'Pivot points',
    blurb: 'Classic and Fibonacci pivots from the previous period high, low and close.',
    teach: 'Module 7. Useful because many participants watch the same numbers — which is also why price is drawn to them.',
    fields: [
      { k: 'high', label: 'Previous high', type: 'number', value: 1.0910, step: 0.0001 },
      { k: 'low', label: 'Previous low', type: 'number', value: 1.0820, step: 0.0001 },
      { k: 'close', label: 'Previous close', type: 'number', value: 1.0875, step: 0.0001 },
      { k: 'method', label: 'Method', type: 'select', value: 'classic',
        options: [{ v: 'classic', t: 'Classic' }, { v: 'fib', t: 'Fibonacci' }] }
    ],
    compute: function (v) {
      var h = v.high, l = v.low, c = v.close, r = h - l;
      var pp = (h + l + c) / 3, rows = [];
      if (v.method === 'classic') {
        rows = [
          { label: 'R3', value: num(h + 2 * (pp - l), 5) },
          { label: 'R2', value: num(pp + r, 5) },
          { label: 'R1', value: num(2 * pp - l, 5) },
          { label: 'Pivot', value: num(pp, 5), big: true },
          { label: 'S1', value: num(2 * pp - h, 5) },
          { label: 'S2', value: num(pp - r, 5) },
          { label: 'S3', value: num(l - 2 * (h - pp), 5) }
        ];
      } else {
        rows = [
          { label: 'R3', value: num(pp + r, 5) },
          { label: 'R2', value: num(pp + r * 0.618, 5) },
          { label: 'R1', value: num(pp + r * 0.382, 5) },
          { label: 'Pivot', value: num(pp, 5), big: true },
          { label: 'S1', value: num(pp - r * 0.382, 5) },
          { label: 'S2', value: num(pp - r * 0.618, 5) },
          { label: 'S3', value: num(pp - r, 5) }
        ];
      }
      rows.push({ label: 'Period range', value: num(r, 5) + '  (' + num(r / 0.0001, 0) + ' pips at 4dp)' });
      return rows;
    }
  },
  {
    id: 'compounding', group: 'Technical', title: 'Compounding',
    blurb: 'What a steady return rate does over time — and how unrealistic most projections are.',
    teach: 'Module 12. Try 10% a month. The result is absurd, which tells you something about anyone promising it.',
    fields: [
      { k: 'start', label: 'Starting balance', type: 'number', value: 5000, step: 100, prefix: '$' },
      { k: 'rate', label: 'Return per period', type: 'number', value: 3, step: 0.5, suffix: '%' },
      { k: 'periods', label: 'Number of periods', type: 'number', value: 24, step: 1 },
      { k: 'add', label: 'Added each period', type: 'number', value: 0, step: 50, prefix: '$' }
    ],
    compute: function (v) {
      var bal = v.start, r = v.rate / 100, n = Math.max(0, Math.min(600, v.periods | 0));
      for (var i = 0; i < n; i++) bal = bal * (1 + r) + v.add;
      var contributed = v.start + v.add * n;
      var growth = bal - contributed;
      var multiple = v.start > 0 ? bal / v.start : 0;
      return [
        { label: 'Final balance', value: money(bal), big: true, cls: bal >= contributed ? 'good' : 'bad' },
        { label: 'Total contributed', value: money(contributed) },
        { label: 'Growth from returns', value: money(growth), cls: growth >= 0 ? 'good' : 'bad' },
        { label: 'Multiple of starting balance', value: num(multiple) + '×' },
        { label: 'Reality check',
          value: v.rate >= 10 ? 'Not sustainable' : v.rate >= 5 ? 'Very optimistic' : 'Plausible if the edge is real',
          cls: v.rate >= 10 ? 'bad' : v.rate >= 5 ? 'warn' : 'good',
          note: 'compounding assumes no losing periods, which never happens' }
      ];
    }
  },
  {
    id: 'sessions', group: 'Technical', title: 'Session clock',
    blurb: 'Which centres are open right now, and how long until the next one.',
    teach: 'Module 5. Liquidity, spread and range all follow this clock. Trading a breakout in the Tokyo lull is a choice with consequences.',
    fields: [
      { k: 'offset', label: 'Your offset from UTC', type: 'number', value: 0, step: 1, suffix: 'hours' }
    ],
    compute: function () {
      var now = new Date();
      var h = now.getUTCHours() + now.getUTCMinutes() / 60;
      var S = [
        { n: 'Sydney', o: 21, c: 6 }, { n: 'Tokyo', o: 0, c: 9 },
        { n: 'London', o: 7, c: 16 }, { n: 'New York', o: 12, c: 21 }
      ];
      var open = function (s) { return s.o < s.c ? (h >= s.o && h < s.c) : (h >= s.o || h < s.c); };
      var rows = S.map(function (s) {
        return { label: s.n, value: open(s) ? 'OPEN' : 'closed', cls: open(s) ? 'good' : '',
                 note: String(s.o).padStart(2, '0') + ':00–' + String(s.c).padStart(2, '0') + ':00 UTC' };
      });
      var overlap = open(S[2]) && open(S[3]);
      rows.push({ label: 'London / New York overlap', value: overlap ? 'ACTIVE NOW' : 'not now', big: true,
                  cls: overlap ? 'good' : '', note: '12:00–16:00 UTC — deepest liquidity of the day' });
      rows.push({ label: 'Time now', value: now.toUTCString().slice(17, 22) + ' UTC',
                  note: 'daylight saving shifts London and New York — verify against your broker clock' });
      return rows;
    }
  }
  ];

  /* ---------- rendering ---------- */
  function fieldHtml(c, f) {
    var id = 'f_' + c.id + '_' + f.k;
    if (f.type === 'select') {
      return '<label class="tf"><span>' + esc(f.label) + '</span><select id="' + id + '" data-k="' + f.k + '">' +
        f.options.map(function (o) {
          return '<option value="' + esc(o.v) + '"' + (o.v === f.value ? ' selected' : '') + '>' + esc(o.t) + '</option>';
        }).join('') + '</select></label>';
    }
    return '<label class="tf"><span>' + esc(f.label) + '</span><div class="tf-in">' +
      (f.prefix ? '<i>' + esc(f.prefix) + '</i>' : '') +
      '<input id="' + id + '" data-k="' + f.k + '" type="number" step="' + (f.step || 1) + '" value="' + f.value + '">' +
      (f.suffix ? '<u>' + esc(f.suffix) + '</u>' : '') + '</div></label>';
  }

  function cardHtml(c) {
    return '<section class="tcard" id="card_' + c.id + '">' +
      '<header><h3>' + esc(c.title) + '</h3><p>' + esc(c.blurb) + '</p></header>' +
      '<div class="tfields">' + c.fields.map(function (f) { return fieldHtml(c, f); }).join('') + '</div>' +
      '<div class="tout" id="out_' + c.id + '"></div>' +
      '<p class="tteach">' + esc(c.teach) + '</p>' +
    '</section>';
  }

  function readValues(c) {
    var v = {};
    c.fields.forEach(function (f) {
      var el = document.getElementById('f_' + c.id + '_' + f.k);
      if (!el) { v[f.k] = f.value; return; }
      v[f.k] = f.type === 'select' ? el.value : parseFloat(el.value);
      if (f.type !== 'select' && !isFinite(v[f.k])) v[f.k] = 0;
    });
    return v;
  }

  function recompute(c) {
    var out = document.getElementById('out_' + c.id);
    if (!out) return;
    var rows;
    try { rows = c.compute(readValues(c)); }
    catch (e) { out.innerHTML = '<p class="tnote">Check the inputs.</p>'; return; }
    out.innerHTML = rows.map(function (r) {
      return '<div class="trow' + (r.big ? ' big' : '') + '">' +
        '<span class="trow-l">' + esc(r.label) + '</span>' +
        '<span class="trow-v ' + (r.cls || '') + '">' + esc(r.value) + '</span>' +
        (r.note ? '<span class="trow-n">' + esc(r.note) + '</span>' : '') +
      '</div>';
    }).join('');
  }

  function render(app) {
    var groups = [];
    CALCS.forEach(function (c) { if (groups.indexOf(c.group) < 0) groups.push(c.group); });

    app.innerHTML =
      '<div class="crumb"><a href="#/">Home</a> / Calculators</div>' +
      '<div class="module-head"><h1>Trader calculators</h1>' +
      '<p class="lede">Sixteen calculators covering the arithmetic this course teaches. They use the same instrument ' +
      'data as the trading simulator, so a figure worked out here matches what the terminal does in a drill.</p></div>' +
      groups.map(function (g) {
        return '<div class="section-head"><h2>' + esc(g) + '</h2></div>' +
          '<div class="tgrid">' + CALCS.filter(function (c) { return c.group === g; })
            .map(cardHtml).join('') + '</div>';
      }).join('') +
      '<div class="panel" style="margin-top:2rem">' +
        '<h3>What is deliberately missing</h3>' +
        '<p>Live rates, currency heat maps, correlation matrices and an economic calendar are not here. They cannot ' +
        'be calculated — they have to be fetched from a market data provider, which is a commercial decision about ' +
        'cost and licence terms rather than a piece of code. Everything on this page is computed from figures you ' +
        'supply, so it works offline and never shows a stale number as if it were live.</p>' +
        '<div class="callout warn"><p>These are teaching aids. A calculator will happily size a position for a bad ' +
        'idea — it checks your arithmetic, not your reasoning.</p></div>' +
      '</div>';

    // Debounce so a burst of keystrokes triggers one recompute, not one per
    // character. Without this, holding a key on a heavier calculator queues
    // enough synchronous work to lock the page.
    var timers = {};
    function queue(c) {
      clearTimeout(timers[c.id]);
      timers[c.id] = setTimeout(function () { recompute(c); }, 160);
    }

    CALCS.forEach(function (c) {
      c.fields.forEach(function (f) {
        var el = document.getElementById('f_' + c.id + '_' + f.k);
        if (el) {
          el.addEventListener('input', function () { queue(c); });
          el.addEventListener('change', function () { queue(c); });
        }
      });
      recompute(c);
    });
  }

  window.Tools = { render: render, calcs: CALCS };
})();
