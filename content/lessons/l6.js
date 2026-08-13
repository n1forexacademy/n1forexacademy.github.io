/* N1 Forex Academy — lessons for Module 6. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[6] = [
    {
      title: 'Reading a single candle',
      slides: [0, 1],
      check: [
        { q: 'The most informative part of a candle is usually:',
          options: ['Its colour', 'Where the close sits within the range', 'The length of the upper wick alone', 'Its position on the screen'],
          a: 1,
          why: 'A close near the high means buyers won the period regardless of colour. Colour gives direction; the close relative to range gives conviction.' },
        { q: 'A long-legged pin bar forms in open space with no nearby level. How much does it mean?',
          options: ['It is a strong reversal signal wherever it appears', 'Very little — patterns carry information only where the location already mattered', 'It guarantees a move opposite the wick', 'It signals a volatility collapse'],
          a: 1,
          why: 'A rejection is only informative if it happened somewhere participants cared about. In open space it is ordinary fluctuation.' }
      ]
    },
    {
      title: 'Trend as a sequence',
      slides: [2, 3],
      check: [
        { q: 'What structurally defines an uptrend?',
          options: ['Price is higher than last month', 'A sequence of higher swing highs AND higher swing lows', 'A rising moving average', 'More green candles than red'],
          a: 1,
          why: 'Trend is defined by the sequence of swing points, which makes it a mechanical test two people can agree on. Everything else is derived or lagging.' },
        { q: 'You cannot decide which small bounces count as swings. The fix is:',
          options: ['Mark every one to be safe', 'Write a swing rule down and apply it identically every time, even if imperfect', 'Switch to a lower timeframe', 'Use an indicator instead'],
          a: 1,
          why: 'Consistency beats correctness here. A student who marks swings the same way every time builds reliable pattern recognition; one who changes the rule to suit the chart learns nothing.' }
      ]
    },
    {
      title: 'Pullback or reversal',
      slides: [4],
      check: [
        { q: 'In an uptrend price falls sharply but holds above the last higher low. This is:',
          options: ['A confirmed reversal', 'A break of structure', 'A pullback — the trend structure is intact', 'A range'],
          a: 2,
          why: 'Until price closes below the most recent significant swing low, the sequence of higher lows is unbroken, however uncomfortable the decline feels.' },
        { q: 'A single break of structure means:',
          options: ['A new downtrend has begun', 'The old uptrend has ended — a new trend still needs its own sequence of lower highs and lows', 'Price will retrace to the start', 'Nothing at all'],
          a: 1,
          why: 'The break ends the previous trend. What follows may be a new trend, a range, or chop. Treating the break itself as a new trend is how people get caught in the transition.' }
      ]
    },
    {
      title: 'Timeframes and narration',
      slides: [5, 6, 7, 8],
      check: [
        { q: 'H4 is in a clear uptrend but M15 shows a downtrend. What is happening?',
          options: ['The chart is untradeable', 'M15 overrules H4 because it is more current', 'The M15 downtrend is the pullback within the H4 uptrend — often the opportunity', 'One chart has a data error'],
          a: 2,
          why: 'A pullback on the higher timeframe IS a downtrend up close. That is the normal relationship and where with-trend entries come from.' },
        { q: 'The final step of the chart narration must always contain:',
          options: ['A profit target', 'The candlestick pattern name', 'A specific price at which the idea is proven wrong', 'The expected win probability'],
          a: 2,
          why: 'Stating invalidation as a specific price before entry gives you a meaningful stop and forces you to admit the trade can fail. "If it goes the other way" commits to nothing.' }
      ]
    }
  ];
})();
