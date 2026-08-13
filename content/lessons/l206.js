/* N1 Forex Academy — lessons for Module 206. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[206] = [
    {
      title: 'One decision, three markets',
      slides: [0, 1],
      check: [
        { q: 'A central bank signals higher rates for longer. Markets typically respond in which order?',
          options: ['Equities, then bonds, then currency', 'Bonds reprice first, the currency follows the rate expectation, and equity valuations compress', 'All simultaneously and identically', 'Currency first, bonds last'],
          a: 1,
          why: 'Rate expectations are priced in bonds first. The currency follows because capital chases expected yield, and equities compress because future earnings are discounted more heavily.' },
        { q: 'The real risk of a carry trade is:',
          options: ['The differential narrowing slowly', 'A rapid risk-off unwind erasing years of accumulated carry in weeks', 'Commission', 'Rollover timing'],
          a: 1,
          why: 'Carry produces many small gains and rare very large losses — the same return shape as a martingale, reached by a respectable route. It ruins traders who size for calm periods.' }
      ]
    },
    {
      title: 'Reading across, and its limits',
      slides: [2, 3, 4, 5, 6],
      check: [
        { q: 'Why do high-growth companies fall more than income stocks when rates rise?',
          options: ['They are more leveraged', 'Their value sits further in the future, so a higher discount rate reduces it more — equity duration', 'They pay no dividends', 'They are heavily shorted'],
          a: 1,
          why: 'Valuation is future earnings discounted to today. A company whose profits are mostly distant is a long-duration asset and behaves like one — the concept transfers directly from bonds.' },
        { q: 'The honest limit of cross-market analysis is that:',
          options: ['It works only in stable markets', 'Relationships break down and lags vary, so it gives context and sizing discipline rather than predictions', 'It applies only to bonds', 'It needs institutional data'],
          a: 1,
          why: 'Correlations are unstable and fail exactly when most valuable. Being early is indistinguishable from being wrong for long stretches, so this informs position sizing, not signals.' }
      ]
    }
  ];
})();
