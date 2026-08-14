/* N1 Forex Academy — options simulator drills.

   `kind: 'optsim'` — rendered by assets/optsim.js, priced by assets/options.js.

   These stage the three things the options track describes but cannot make a
   student believe: decay while nothing happens, IV crush after a correct call,
   and the spread that survives it. Each `sim` block is a deterministic
   scenario — the schedule decides what happens on which day, so a drill replays
   identically for a student and their instructor.

   test(ctx) receives {state, book, cfg, legs}. Keep it cheap; it runs on
   every redraw. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'opt-decay',
  kind: 'optsim',
  module: 403,
  title: 'Watch it lose while nothing happens',
  brief: 'Buy an at-the-money call and then do nothing at all. The underlying barely moves. Watch what the passage of time does to the position you paid for.',
  sim: {
    underlying: 100, strikeStep: 5, strikes: 7,
    daysToExpiry: 45, iv: 0.30, rate: 0.04, qty: 1, multiplier: 100,
    driftPct: 0.0002,
    note: 'The underlying drifts by about 0.02% a day here — effectively nothing. **Buy the at-the-money call and advance time.** Watch the Extr column, and watch Θ.'
  },
  objectives: [
    'Buy the at-the-money call — the one carrying the most extrinsic value',
    'Advance at least 30 days without closing it',
    'Watch extrinsic value drain while the underlying goes nowhere'
  ],
  hint: 'Theta is shown in cash per day. That is the rent on the position. Ask yourself whether you would agree to pay that as a daily fee — Module 403 says if the answer is no, do not hold it.',
  test: function (ctx) {
    var longs = ctx.legs.filter(function (l) { return l.pos.qty > 0; });
    if (!longs.length) {
      return { pass: false, progress: 0, detail: 'Buy the at-the-money call, then advance time and leave it alone.' };
    }
    var held = ctx.state.day - longs[0].pos.openedDay;
    var l = longs[0];
    var extrinsicLost = l.pos.premium - l.mark;
    var pctOfPremium = (extrinsicLost / l.pos.premium) * 100;
    return {
      pass: held >= 30 && l.pl < 0,
      progress: Math.min(1, held / 30),
      detail: held < 30
        ? 'Held ' + held + ' of 30 days. Keep advancing — do not close it.'
        : 'You have held ' + held + ' days. The underlying moved ' +
          (((ctx.state.underlying - l.pos.openUnderlying) / l.pos.openUnderlying) * 100).toFixed(1) + '%, and the position is ' +
          (l.pl < 0 ? 'down ' : 'up ') + '$' + Math.abs(l.pl).toFixed(0) + ' — ' + pctOfPremium.toFixed(0) +
          '% of the premium gone to time alone. **A bought option loses money while nothing happens.**'
    };
  }
},

{
  id: 'opt-crush',
  kind: 'optsim',
  module: 404,
  title: 'Be right, and lose anyway',
  brief: 'Results are announced on day 3 and the share rises exactly as you expect. Buy the call beforehand and find out why you still lose.',
  sim: {
    underlying: 200, strikeStep: 5, strikes: 7,
    daysToExpiry: 20, iv: 0.70, rate: 0.04, qty: 1, multiplier: 100,
    driftPct: 0,
    schedule: [
      { onDay: 3, movePct: 0.04, setIv: 0.32,
        label: 'Results published. Shares +4%. Implied volatility collapses from 70 to 32.' }
    ],
    note: 'Implied volatility is **70** because results land on day 3 — that elevated figure is the event premium, and you can see it before you buy. **Buy the at-the-money call, then advance past day 3.**'
  },
  objectives: [
    'Buy the at-the-money 200 call before day 3, while implied volatility is 70',
    'Advance past the announcement',
    'Compare the intrinsic value you gained against the extrinsic value you lost'
  ],
  hint: 'You are paying for uncertainty. Once results are published there is no uncertainty left to pay for, so it evaporates — and it can evaporate faster than a correct 4% move creates intrinsic value.',
  test: function (ctx) {
    var longs = ctx.legs.filter(function (l) { return l.pos.qty > 0 && l.pos.openIv > 0.5; });
    if (!longs.length) {
      return { pass: false, progress: 0, detail: 'Buy the at-the-money call while implied volatility is still 70, then advance past day 3.' };
    }
    if (!ctx.state.eventFired) {
      return { pass: false, progress: 0.5, detail: 'Position open at IV 70. Now advance past day 3 and watch what the announcement does.' };
    }
    var l = longs[0];
    var moved = ((ctx.state.underlying - l.pos.openUnderlying) / l.pos.openUnderlying) * 100;
    return {
      pass: true,
      progress: 1,
      detail: 'The share rose ' + moved.toFixed(1) + '% exactly as predicted. Your call now holds $' + l.intrinsic.toFixed(2) +
              ' of intrinsic value it did not have before — and the position is ' + (l.pl < 0 ? 'DOWN ' : 'up ') + '$' +
              Math.abs(l.pl).toFixed(0) + '. **The extrinsic value you paid for collapsed with the uncertainty.** ' +
              'The event premium was visible on the chain before you bought.'
    };
  }
},

{
  id: 'opt-spread',
  kind: 'optsim',
  module: 406,
  title: 'The spread that survives the crush',
  brief: 'Same announcement, same correct call. This time sell a higher strike against your long one and see what the second leg does to the outcome.',
  sim: {
    underlying: 200, strikeStep: 5, strikes: 9,
    daysToExpiry: 20, iv: 0.70, rate: 0.04, qty: 1, multiplier: 100,
    driftPct: 0,
    schedule: [
      { onDay: 3, movePct: 0.04, setIv: 0.32,
        label: 'Results published. Shares +4%. Implied volatility collapses from 70 to 32.' }
    ],
    note: 'The identical scenario to the last drill. **Buy the 200 call AND sell the 210 call**, then advance past day 3. You are long vega on one leg and short it on the other.'
  },
  objectives: [
    'Buy the 200 call and sell the 210 call, both before day 3',
    'Advance past the announcement',
    'Compare this outcome against the single long call in the previous drill'
  ],
  hint: 'Selling the higher strike collects premium that is ALSO inflated by the event. When implied volatility collapses, the leg you sold falls too — and that gain offsets part of your loss. That is why spreads survive IV crush better.',
  test: function (ctx) {
    var longs = ctx.legs.filter(function (l) { return l.pos.qty > 0; });
    var shorts = ctx.legs.filter(function (l) { return l.pos.qty < 0; });
    if (!longs.length || !shorts.length) {
      return {
        pass: false,
        progress: longs.length ? 0.4 : 0,
        detail: longs.length
          ? 'Long leg open. Now SELL a higher strike call to build the spread, before day 3.'
          : 'Buy the 200 call, then sell the 210 call against it.'
      };
    }
    if (!ctx.state.eventFired) {
      return { pass: false, progress: 0.6, detail: 'Spread is on. Advance past day 3 and compare the outcome with the single-option drill.' };
    }
    var net = ctx.book.pl;
    var longOnly = longs.reduce(function (a, l) { return a + l.pl; }, 0);
    return {
      pass: true,
      progress: 1,
      detail: 'Spread result: ' + (net < 0 ? 'down ' : 'up ') + '$' + Math.abs(net).toFixed(0) +
              '. The long leg alone would have been ' + (longOnly < 0 ? 'down ' : 'up ') + '$' + Math.abs(longOnly).toFixed(0) +
              '. **The sold leg was inflated by the same event premium, so it fell too — and that gain offset part of your loss.** ' +
              'The cost is a capped upside. Net vega now ' + ctx.book.vega.toFixed(1) + ' against a single long call\'s.'
    };
  }
}

]);
