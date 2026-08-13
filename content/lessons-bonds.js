/* N1 Forex Academy — lesson breakdown for the Bonds track (201–206).
   Merges into window.LESSONS. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  /* ================= MODULE 201 — What a bond is ================= */
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

  /* ================= MODULE 202 — Price and yield ================= */
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

  /* ================= MODULE 203 — Duration ================= */
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

  /* ================= MODULE 204 — Credit ================= */
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

  /* ================= MODULE 205 — The yield curve ================= */
  L[205] = [
    {
      title: 'Reading the curve',
      slides: [0, 1],
      check: [
        { q: 'Why does a normal yield curve slope upward?',
          options: ['Governments prefer it', 'The term premium — extra yield for the uncertainty and duration risk of lending longer', 'Inflation always rises', 'Short bonds are illiquid'],
          a: 1,
          why: 'Lending for thirty years means accepting decades of uncertainty plus duration risk. Upward slope is the default state, so only departures from it carry information.' },
        { q: 'Which part of the curve is most sensitive to current central bank policy?',
          options: ['The 30-year', 'The front end — short maturities', 'The whole curve equally', 'The 10-year only'],
          a: 1,
          why: 'Short maturities are dominated by where policy rates are now and over the next year or two. The long end reflects growth and inflation expectations over decades.' }
      ]
    },
    {
      title: 'Inversion, shape and currencies',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'An inverted yield curve means:',
          options: ['Bonds are mispriced', 'The market expects rates to be lower in future, usually because growth is expected to weaken', 'Inflation is surging', 'Governments are defaulting'],
          a: 1,
          why: 'Inversion prices future cuts, and cuts usually follow weakening growth. It has preceded recessions historically, but with a variable and sometimes very long lag, and with false signals.' },
        { q: 'Someone says "the curve steepened". The essential follow-up question is:',
          options: ['By how many basis points?', 'Which end moved, and why — falling short rates and rising long rates mean very different things', 'Who reported it?', 'What was the volume?'],
          a: 1,
          why: 'Steepening from falling short yields prices rate cuts and weakness. Steepening from rising long yields suggests inflation or supply concerns. Direction alone is nearly meaningless.' }
      ]
    }
  ];

  /* ================= MODULE 206 — Closing the loop ================= */
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
