/* N1 Forex Academy — lessons for Module 204. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[204] = [
    {
      title: 'Spreads and ratings',
      slides: [0, 1],
      check: [
        { q: 'A government bond yields 4% and a similar-maturity corporate yields 7%. The 3% gap is:',
          options: ['The company\'s profit margin', 'The credit spread — the market\'s price for the chance it fails to pay', 'A tax adjustment', 'The coupon difference'],
          a: 1,
          why: 'The spread compensates for default risk. It moves daily on company news and general risk appetite, and it is an opinion with a number attached rather than a measurement.' },
        { q: 'A bond is downgraded from investment grade to high yield. Why can the price move so violently?',
          options: ['The coupon is cut', 'Many funds may only hold investment grade and must sell regardless of price', 'The maturity shortens', 'Trading is suspended'],
          a: 1,
          why: 'Forced selling by mandate-constrained holders creates moves unrelated to fresh information. Those sellers may have no view at all — they simply are no longer permitted to hold it.' }
      ]
    },
    {
      title: 'Behaviour, recovery and early warning',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'In a recession, investment grade and high yield bonds typically:',
          options: ['Both rise together', 'Behave similarly, both being bonds', 'Diverge — investment grade may rise as rates fall while high yield falls with equities', 'Both become risk-free'],
          a: 2,
          why: 'Investment grade trades mainly on rates; high yield trades mainly on the economy and issuer, so it behaves far more like equity — exactly when diversification was wanted.' },
        { q: 'Expected loss on a bond depends on:',
          options: ['Default probability alone', 'Both default probability and the recovery rate', 'The coupon only', 'The rating alone'],
          a: 1,
          why: 'Expected loss = probability of default × (1 − recovery rate). Ignoring recovery misses half the calculation, and explains why senior secured debt trades so differently from subordinated.' }
      ]
    }
  ];
})();
