/* N1 Forex Academy — lessons for Module 5. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[5] = [
    {
      title: 'The four sessions',
      slides: [0, 1],
      check: [
        { q: 'Which window generally has the deepest liquidity and largest ranges?',
          options: ['Tokyo', 'The London / New York overlap', 'Sydney', 'The hour after Friday close'],
          a: 1,
          why: 'Roughly 12:00–16:00 UTC both major centres are open at once, giving the tightest spreads and biggest ranges. Most day-trading setups are designed around it.' },
        { q: 'Tokyo is best described as:',
          options: ['Dead and not worth trading', 'Orderly and range-prone, with levels that tend to hold', 'The most volatile session', 'Identical to London but quieter'],
          a: 1,
          why: 'Narrow ranges and well-respected boundaries suit range and mean-reversion approaches. It is different, not worse — forcing breakout strategies into it produces false breaks.' }
      ]
    },
    {
      title: 'The Asian range and the London break',
      slides: [2],
      check: [
        { q: 'Why does the first break of the Asian range so often fail?',
          options: ['Brokers hunt individual stops', 'The range extremes are obvious to everyone, so stops cluster just beyond them and price is drawn to that resting liquidity', 'London always reverses Asia', 'Indicators are unreliable at that hour'],
          a: 1,
          why: 'Everyone sees the same range and places stops in the same zone. Pushing through fills a large volume of resting orders — which is exactly what a big participant needs to get in.' },
        { q: 'A failed breakout that reverses hard often produces:',
          options: ['A slow drift sideways', 'A faster, further move than a successful break, because trapped traders must exit', 'An exact return to the level and nothing more', 'Lower volatility'],
          a: 1,
          why: 'Trapped breakout traders have stops sitting in the reversal\'s path. Their forced exits add fuel on top of the traders deliberately positioning against the break.' }
      ]
    },
    {
      title: 'Cost, range and reality checks',
      slides: [3, 4],
      check: [
        { q: 'Spread is 1 pip at 14:00 UTC and 3 pips at 03:00. Why does this matter more than it looks?',
          options: ['It does not — 2 pips is trivial', 'Range collapses overnight too, so you pay three times as much to access a fraction of the opportunity', 'Commission triples at night', 'Stops are rejected overnight'],
          a: 1,
          why: 'The two effects compound. Cost relative to available range can rise five or ten times, which is why spread must always be compared to expected range rather than judged alone.' },
        { q: 'EUR/USD averages 70 pips a day and has moved 65 by midday. This suggests:',
          options: ['A trend day is guaranteed', 'The typical daily range is largely spent, so intraday continuation targets deserve scepticism', 'Price must now reverse', 'ADR is irrelevant intraday'],
          a: 1,
          why: 'ADR is an average, not a ceiling — trend days exceed it routinely. But once most of it is spent, the case for another large continuation move weakens. It argues for smaller targets, not for fading.' }
      ]
    },
    {
      title: 'Choosing your window',
      slides: [5, 6, 7],
      check: [
        { q: 'You can only trade during Tokyo. The sensible response is:',
          options: ['Trade breakouts anyway and accept worse results', 'Adopt range and mean-reversion approaches that suit those conditions', 'Give up trading', 'Increase size to compensate for smaller ranges'],
          a: 1,
          why: 'Match the strategy to the hours you actually have. Increasing size to compensate for a smaller range is the single worst available response.' },
        { q: 'Why avoid leaving a tight stop through the daily rollover window?',
          options: ['Trading is suspended', 'Spreads can widen dramatically for a minute or two, triggering stops on spread alone', 'Swap is only charged if a stop exists', 'Orders queue and execute late'],
          a: 1,
          why: 'Around 21:00–22:00 UTC liquidity thins as books are squared. A stop sitting inside that widened spread can fire without the underlying market moving at all.' }
      ]
    }
  ];
})();
