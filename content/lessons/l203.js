/* N1 Forex Academy — lessons for Module 203. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[203] = [
    {
      title: 'Measuring rate sensitivity',
      slides: [0, 1],
      check: [
        { q: 'A bond has a duration of 9 and yields rise 0.5%. Its price roughly:',
          options: ['Rises 4.5%', 'Falls 4.5%', 'Falls 9%', 'Is unchanged'],
          a: 1,
          why: 'Price change ≈ − duration × yield change = −9 × 0.5% = −4.5%. Duration is the single most useful number for judging a bond\'s rate risk.' },
        { q: 'Two bonds mature in ten years. One has a 2% coupon, the other 8%. Which has longer duration?',
          options: ['The 8% bond', 'The 2% bond, because more of its value arrives at maturity', 'They are identical', 'Depends on the issuer'],
          a: 1,
          why: 'Duration is the weighted average time to receive the cash. A high coupon returns money earlier, shortening duration; a low coupon concentrates value at the end.' }
      ]
    },
    {
      title: 'Using duration, and its limits',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'Which carries the most interest rate risk?',
          options: ['A two-year bond with an 8% coupon', 'A ten-year bond with a 5% coupon', 'A thirty-year zero-coupon bond', 'A one-year bond'],
          a: 2,
          why: 'A zero-coupon bond pays nothing until maturity, so duration equals maturity — the maximum possible. Thirty years of sensitivity makes it the most rate-sensitive of the four.' },
        { q: 'An investor buys long-dated bonds because they yield more. What have they actually done?',
          options: ['Secured higher returns with no extra risk', 'Taken a substantial directional position on interest rates, intended or not', 'Reduced portfolio risk', 'Eliminated reinvestment risk'],
          a: 1,
          why: 'Extending duration for yield is a rate bet. The extra yield is compensation for that risk, and a rate rise can erase several years of the additional income in weeks.' }
      ]
    }
  ];
})();
