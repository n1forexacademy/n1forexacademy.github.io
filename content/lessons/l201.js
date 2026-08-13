/* N1 Forex Academy — lessons for Module 201. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[201] = [
    {
      title: 'Lending rather than owning',
      slides: [0, 1],
      check: [
        { q: 'A bond is best described as:',
          options: ['A share of company profits', 'A tradeable loan with a scheduled set of payments', 'A currency contract', 'A derivative on interest rates'],
          a: 1,
          why: 'You hand over money and the issuer owes you a schedule. Four terms define it: the issuer, the coupon, the maturity and the face value. The payments do not depend on the issuer prospering, only on it not failing.' },
        { q: 'You hold a corporate bond and the company enters insolvency. Compared with a shareholder you are:',
          options: ['In the same position', 'Paid before shareholders, with a claim they only reach afterwards', 'Paid after shareholders', 'Entitled to nothing'],
          a: 1,
          why: 'Seniority is exactly what a bond buys, and you pay for it through lower expected returns than the same company\'s shares. Same business, two instruments, different queue position.' }
      ]
    },
    {
      title: 'Issuers, scale and honesty',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'Why does the currency a government borrows in matter?',
          options: ['It changes the payment date', 'A government can print its own currency but not a foreign one, so foreign-currency debt carries genuine default risk', 'Foreign debt is untaxed', 'It sets the maturity'],
          a: 1,
          why: 'Sovereign defaults cluster heavily in foreign-currency debt for this reason. Borrowing in your own currency means the obligation can always be met nominally, possibly at the cost of inflation.' },
        { q: 'Which word describes bonds most accurately?',
          options: ['Safe', 'Defined — the payment schedule is known, which is not the same as safe', 'Guaranteed', 'Risk-free'],
          a: 1,
          why: 'A long-dated government bond can lose a large share of its value in a year with nobody defaulting, purely from rate moves. The schedule is defined; the outcome is not guaranteed.' }
      ]
    }
  ];
})();
