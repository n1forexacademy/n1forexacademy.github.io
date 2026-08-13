/* N1 Forex Academy — lessons for Module 8. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[8] = [
    {
      title: 'What indicators actually are',
      slides: [0, 1],
      check: [
        { q: 'Every indicator is fundamentally:',
          options: ['A prediction of future price', 'Arithmetic performed on past prices', 'A measure of order flow', 'A signal from the exchange'],
          a: 1,
          why: 'None contains information the chart does not already have. What they add is consistency and objectivity — genuinely valuable, but not prediction.' },
        { q: 'You have RSI, Stochastic and CCI on one chart. The problem is:',
          options: ['Too many colours', 'All three are momentum oscillators from the same data, so it is one opinion repeated', 'They belong on separate charts', 'There is no problem'],
          a: 1,
          why: 'One from each family — trend, momentum, volatility — gives genuinely different views. Stacking within a family is self-deception.' }
      ]
    },
    {
      title: 'Trend and momentum tools',
      slides: [2, 3, 4],
      check: [
        { q: 'The most defensible use of a moving average is:',
          options: ['Taking every crossover as a signal', 'As an objective trend filter, so bias is defined identically every time', 'Predicting where price reverses', 'Replacing structural analysis'],
          a: 1,
          why: 'A moving average is a lagging average of past closes, so it cannot predict, and crossovers arrive late. Its value is that two people would apply the same rule identically.' },
        { q: 'RSI has been above 70 for fifteen candles in a strong uptrend. This means:',
          options: ['A reversal is overdue', 'The trend is strong — persistent overbought readings are what strong trends look like', 'The settings are wrong', 'Volatility is collapsing'],
          a: 1,
          why: 'RSI compares average gains to average losses; in a strong uptrend gains dominate for long stretches. Fading that is a known way to lose steadily.' }
      ]
    },
    {
      title: 'Volatility — the underused half',
      slides: [5, 6],
      check: [
        { q: 'EUR/USD ATR is 11 pips on H1; gold ATR is 340. You use a fixed 25-pip stop on both. What is wrong?',
          options: ['Nothing — consistency is good', 'It is over 2× ATR on EUR/USD but a fraction of ATR on gold, so it is too loose on one and certain to be hit on the other', 'Gold ATR must be miscalculated', 'Fixed stops are always correct'],
          a: 1,
          why: 'A fixed pip stop ignores how much the instrument actually moves. Scale the stop to a multiple of ATR, then size the position from that stop.' },
        { q: 'A Bollinger Band squeeze tells you:',
          options: ['Which direction price will break', 'That volatility has compressed and expansion is likely — but not which way', 'That price will touch the upper band', 'That the trend has ended'],
          a: 1,
          why: 'The squeeze is a timing tool with no directional content. Get direction from structure and use the squeeze for when.' }
      ]
    },
    {
      title: 'Judging any new indicator',
      slides: [7, 8, 9],
      check: [
        { q: 'An indicator\'s historical chart shows arrows calling almost every turn perfectly. Suspect:',
          options: ['You have found a superior tool', 'It repaints — it relocates signals after the fact, so its history will never match live behaviour', 'The timeframe is too high', 'Unusual broker data'],
          a: 1,
          why: 'Near-perfect history is the signature of repainting. The only valid test is bar-by-bar replay: watch whether a printed signal ever moves or disappears.' },
        { q: 'A rule works with a 50 EMA but fails with 45 or 55 over the same data. This means:',
          options: ['50 is optimal and should be used', 'It is likely curve-fitted — a robust idea survives small parameter changes', 'The other settings were tested wrongly', 'A fourth indicator is needed'],
          a: 1,
          why: 'If a small change destroys the result, the parameter was fitting historical noise. Robustness across nearby settings is far better evidence than a sharp peak at one.' }
      ]
    }
  ];
})();
