/* N1 Forex Academy — lessons for Module 202. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[202] = [
    {
      title: 'The inverse relationship',
      slides: [0, 1],
      check: [
        { q: 'You hold a 4% coupon bond. Market yields for comparable bonds rise to 6%. Your bond\'s price:',
          options: ['Rises, because rates are higher', 'Falls, until its remaining cash flows yield about 6%', 'Stays at par', 'Depends on issuer profits'],
          a: 1,
          why: 'Nobody pays par for a 4% bond when 6% is available. Nothing changed about your bond — the alternatives changed, and price is always relative to alternatives.' },
        { q: 'A bond trades at 92 with a 5% coupon. Its yield to maturity is:',
          options: ['Exactly 5%', 'Below 5%', 'Above 5%, because you also gain as the price pulls to par', 'Indeterminable'],
          a: 2,
          why: 'You buy at a discount and receive 100 at maturity, so the capital gain adds to the coupon return. YTM counts both, which is why it exceeds the coupon on any bond bought below par.' }
      ]
    },
    {
      title: 'Premiums, discounts and what it means',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'A bond trading at 108 is:',
          options: ['Overpriced and best avoided', 'Priced so its coupon advantage over current yields is fairly valued', 'About to default', 'Mispriced'],
          a: 1,
          why: 'A premium means the coupon beats what new issues offer, so buyers pay for that advantage. Price has already adjusted so comparable bonds deliver similar returns.' },
        { q: 'You hold to maturity through sharply rising rates. Your final cash flows are:',
          options: ['Reduced by the rate rise', 'Unchanged — every coupon and the face value, assuming no default', 'Increased', 'Set by the market price'],
          a: 1,
          why: 'Holding to maturity removes price risk on the cash flows if the issuer pays. What you lost is opportunity: your money earned the old rate while better ones appeared.' }
      ]
    }
  ];
})();
