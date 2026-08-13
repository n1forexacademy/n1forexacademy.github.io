/* N1 Forex Academy — lessons for Module 108. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[108] = [
    {
      title: 'Horizon and screening',
      slides: [0, 1],
      check: [
        { q: 'Which filter should come first in an equity screen?',
          options: ['Valuation', 'Liquidity — an untradeable name is not a candidate whatever its numbers', 'Dividend yield', 'Sector'],
          a: 1,
          why: 'Screening on valuation first surfaces spectacular-looking companies that trade a few thousand shares a day with a wide spread. Liquidity first prevents wasted research.' },
        { q: 'Mixing holding horizons is dangerous because:',
          options: ['It increases commission', 'A losing short-term trade gets silently reclassified as a long-term hold', 'Brokers forbid it', 'It complicates tax'],
          a: 1,
          why: 'This is the most common failure in equities. Naming your horizon in advance is the only reliable defence against rationalising a loser into an investment.' }
      ]
    },
    {
      title: 'Thesis and exits',
      slides: [2, 3],
      check: [
        { q: 'A well-formed thesis:',
          options: ['Explains why the company is excellent', 'States a specific, checkable condition that would prove it wrong', 'Predicts a target price', 'Cites analyst ratings'],
          a: 1,
          why: 'This is the invalidation rule from the forex track applied to a business. "It\'s a good company" can never tell you to sell; a checkable condition can.' },
        { q: 'A holding rose sharply and now exceeds your concentration limit. The rule says:',
          options: ['Let winners run regardless', 'Trim it back toward the limit', 'Sell the whole position', 'Raise the limit'],
          a: 1,
          why: 'The limit bounds gap damage, and a larger position means larger damage regardless of how it got there. Trimming a winner feels wrong, which is when the rule earns its place.' }
      ]
    },
    {
      title: 'Review, and choosing your market',
      slides: [4, 5, 6],
      check: [
        { q: 'The central difficulty of an equity process compared with forex is:',
          options: ['Higher costs', 'Slower feedback — a flawed process can take years to reveal itself', 'Less information', 'Lower liquidity everywhere'],
          a: 1,
          why: 'In forex a bad process shows within weeks. On a multi-month horizon you can hold a broken thesis for years, which is why written records and scheduled reviews matter more.' },
        { q: 'The honest comparison between forex and equities is:',
          options: ['Equities are safer', 'Forex is more profitable', 'Neither is easier — forex punishes over-leverage, equities punish over-concentration', 'They are identical'],
          a: 2,
          why: 'They fail in different ways and suit different temperaments, timetables and capital levels. Choosing where to focus is about your circumstances, not about which market is superior.' }
      ]
    }
  ];
})();
