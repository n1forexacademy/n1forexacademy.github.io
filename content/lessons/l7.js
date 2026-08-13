/* N1 Forex Academy — lessons for Module 7. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[7] = [
    {
      title: 'Why levels work',
      slides: [0, 1, 2],
      check: [
        { q: 'Price reacts at a previous swing high because:',
          options: ['The number has mathematical significance', 'Resting orders accumulate there — earlier sellers, break-even buyers, and stops from shorts', 'Brokers program reactions', 'It is purely self-fulfilling with no other cause'],
          a: 1,
          why: 'Levels work because of order inventory. That framing also explains why they weaken with repeated testing — each test consumes some of the resting orders.' },
        { q: 'A level has been tested five times and held each time. This suggests:',
          options: ['It is extremely strong and will hold again', 'Each test consumed resting orders, so it is likely weaker now and increasingly likely to break', 'It should be redrawn', 'Nothing can be inferred'],
          a: 1,
          why: 'This contradicts the common belief that more touches means stronger. Repeated tests without a strong move away often mean the opposing side is absorbing supply.' }
      ]
    },
    {
      title: 'Role reversal',
      slides: [3, 4],
      check: [
        { q: 'Resistance at 1.0900 breaks impulsively and price returns to it two hours later. Most likely:',
          options: ['The break failed and price will keep falling', 'A role reversal — old resistance being retested as support', 'The level was never valid', 'Price is ranging'],
          a: 1,
          why: 'An impulsive break with a prompt retest is the classic flip. Both qualifiers matter: a grinding break with a slow return is more often a failed break.' },
        { q: 'Which supply or demand zone tends to be strongest?',
          options: ['One tested many times', 'A fresh zone that has not been revisited', 'The oldest one on the chart', 'One drawn on the lowest timeframe'],
          a: 1,
          why: 'Each return consumes remaining inventory. A fresh zone still has its unfilled orders intact — the same logic as levels weakening with repeated tests.' }
      ]
    },
    {
      title: 'Where the stops sit',
      slides: [5, 6],
      check: [
        { q: 'Where should you avoid placing a stop?',
          options: ['Below a demand zone', 'Exactly at the round number just beyond an obvious high, where stops visibly cluster', 'On a higher-timeframe level', 'More than 20 pips from entry'],
          a: 1,
          why: 'Stops cluster just beyond obvious highs, lows and round numbers, and that concentration attracts a sweep. Measure typical sweep distance and sit beyond it.' },
        { q: 'A large participant needs to buy heavily. Where do they find sellers?',
          options: ['At the lowest price of the day', 'Where stops from long positions will fire, below an obvious low', 'By waiting for a quiet session', 'From their own broker'],
          a: 1,
          why: 'They need a counterparty. Clustered stops provide the volume. This is arithmetic, not conspiracy — and reframing it that way turns paranoia into a placement decision.' }
      ]
    },
    {
      title: 'Confluence that means something',
      slides: [7, 8],
      check: [
        { q: 'RSI oversold, Stochastic oversold and MACD turning up. How many independent confluences?',
          options: ['Three', 'Four, counting price', 'Essentially one — all three are momentum measures from the same price series', 'Zero'],
          a: 2,
          why: 'Independence is the whole point. Three oscillators computed from the same closes agree almost by construction — one observation counted three times.' },
        { q: 'A great level with no entry trigger is:',
          options: ['Still a trade', 'Not a trade — location and timing are separate decisions', 'A reason to enter at market', 'A reason to widen the stop'],
          a: 1,
          why: 'Confluence improves location, not certainty. It tells you where to look, never whether this particular trade will work.' }
      ]
    }
  ];
})();
