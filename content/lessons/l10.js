/* N1 Forex Academy — lessons for Module 10. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[10] = [
    {
      title: 'The order of operations',
      slides: [0, 1],
      check: [
        { q: 'Account $8,000, risking 1%, GBP/USD, structural stop 45 pips away. Lot size?',
          options: ['0.18', '1.78', '0.045', '0.80'],
          a: 0,
          why: '$80 risk ÷ (45 pips × $10) = 0.178, rounded to 0.18. The stop came from the chart first and the lot size fell out of it — never the reverse.' },
        { q: 'Position size should be:',
          options: ['Chosen based on confidence', 'An output of stop distance and risk percentage', 'The largest the margin allows', 'Kept constant regardless of stop'],
          a: 1,
          why: 'If you ever find yourself choosing a lot size, you have skipped a step. Confidence is uncorrelated with outcome and peaks before the worst trades.' }
      ]
    },
    {
      title: 'Stops, and how much to risk',
      slides: [2, 3],
      check: [
        { q: 'Price moves toward your stop. You should:',
          options: ['Move the stop further away', 'Add to the position to improve the average', 'Nothing — the stop marks where the idea is wrong, and that has not changed', 'Close half and move the stop'],
          a: 2,
          why: 'Moving a stop converts a planned, sized loss into an unplanned one. Nearly every catastrophic retail loss involves a stop that was moved or a loser that was added to.' },
        { q: 'Ten consecutive losses at 1% risk costs roughly:',
          options: ['1%', '9.6%', '25%', '50%'],
          a: 1,
          why: 'About 9.6% — uncomfortable and entirely survivable. At 10% risk the same streak costs 65% and needs 186% to recover. Ten losses in a row is normal; plan for it.' }
      ]
    },
    {
      title: 'Expectancy over win rate',
      slides: [4, 5, 6],
      check: [
        { q: 'A trader wins 70% of trades but loses money overall. How?',
          options: ['Impossible', 'Their losses are much larger than their wins — expectancy depends on size of outcomes, not just frequency', 'The broker is manipulating results', 'Wrong pairs'],
          a: 1,
          why: 'At 70% wins of 0.5R and 30% losses of 2R, expectancy is −0.25R. This is the classic profile of taking profits quickly and letting losers run.' },
        { q: 'You lose 50% of your account. What return gets you back to level?',
          options: ['50%', '75%', '100%', '150%'],
          a: 2,
          why: 'Halving means the remainder must double. This asymmetry is the mathematical argument for small risk, not a matter of temperament.' }
      ]
    },
    {
      title: 'Portfolio limits and ruin',
      slides: [7, 8, 9, 10],
      check: [
        { q: 'Why does a martingale system eventually fail?',
          options: ['Brokers ban it', 'Doubling after each loss needs exponentially growing capital, and every finite account eventually meets a streak it cannot fund', 'Spreads are too wide', 'It does not, given a large enough account'],
          a: 1,
          why: 'Funding an n-loss streak needs roughly 2ⁿ units of capital. It produces a long run of small wins then one total loss — which is why its equity curve looks flawless until the end.' },
        { q: 'Beyond risk per trade, a complete risk policy must also specify:',
          options: ['Only the instruments traded', 'Maximum total open risk, a daily stop, and how correlated positions are counted', 'The preferred indicator settings', 'Which broker to use'],
          a: 1,
          why: 'Per-trade risk is only half of it. Daily stops matter most because the urge to trade is strongest right after a loss, when judgement is worst.' }
      ]
    }
  ];
})();
