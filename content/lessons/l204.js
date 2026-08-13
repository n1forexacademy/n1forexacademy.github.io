/* N1 Forex Academy — lessons for Module 204 (Bonds track).

   VOICE: Jonathan talking to one student. Two things must land: high yield is
   not really the same asset class as investment grade, and credit spreads are
   an early-warning signal a forex trader can use without ever buying a bond. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[204] = [
    {
      title: 'What the extra yield is paying for',
      slides: [0, 1],
      teach: {
        lead: [
          "A government bond yields **4%**. A company's bond of the same maturity yields **7%**.",
          "**Why would anyone take the 4%?**",
          "Because that **3% gap is the credit spread**, and it's the market's price for the chance the company doesn't pay you back.",
          "**Wider spread, more perceived risk. Narrower spread, less.** And it moves every day — on the company's news, and on how nervous the market feels generally.",
          "Now the thing to hold on to: **a spread is a price, not a fact.**",
          "It's thousands of people's collective estimate of a probability, and collective estimates are wrong regularly and sometimes badly. The spread tells you what the market currently believes. It does not tell you what will happen.",
          "That's genuinely useful information — you're reading the crowd's opinion, priced. Just don't mistake it for a measurement."
        ],
        terms: [
          { term: 'Credit risk',
            plain: 'The risk the borrower fails to pay you the interest or the principal.',
            like: 'The chance the friend you lent to does not pay you back.' },
          { term: 'Credit spread',
            plain: 'The extra yield over a government bond, paid to compensate you for that risk.',
            like: 'Charging your unreliable cousin more interest than your reliable one.' },
          { term: 'Rating',
            plain: 'An agency\'s published opinion of creditworthiness, as a letter grade.',
            like: 'A credit score. Useful, backward-looking, and occasionally very wrong.' },
          { term: 'Investment grade / high yield',
            plain: 'The two broad tiers. High yield — also called junk — pays more because it defaults more.',
            like: 'The lending you would do without much thought, and the lending you would want a proper look at first.' }
        ],
        close: [
          "**Ratings** are letter grades published by agencies, running from the highest quality down to default. The one boundary that genuinely matters is the line between **investment grade** and **high yield**.",
          "Why that line and not any other? **Because enormous numbers of funds are only permitted to hold investment grade.** It's written into their rules.",
          "So when a bond gets downgraded across that boundary, **all of those funds have to sell it. Immediately. Regardless of price.**",
          "They may have no opinion whatsoever about the company. They might think it's fine. **They're simply not allowed to own it any more.**",
          "That's why a bond crossing that line — a \"fallen angel\" — moves so violently: it's forced selling into a market that knows the selling is forced.",
          "And be clear about what a rating is worth: **it's an opinion, and it's usually updated late.** Agencies frequently downgrade after the market has already repriced the bond. By the time the letter changes, the spread has often told the story weeks earlier.",
          "**Which is exactly why you watch the spread, not the rating.**"
        ]
      },
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
      title: 'Two tiers, recovery, and an early warning',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Here's the thing that surprises people most in this module.",
          "**\"Bonds\" is not one asset class. The two tiers barely behave like the same thing.**",
          "**Investment grade** trades mostly on **interest rates.** Default is unlikely enough that duration is the dominant risk — it moves for the reasons module 203 described.",
          "**High yield** trades mostly on **the economy and the individual company.** Default is a live possibility, so credit is the dominant risk.",
          "Watch what that means in a recession. Rates get cut, so **investment grade bonds may actually rise.** Meanwhile the economy is deteriorating, so **high yield falls — right alongside equities.**",
          "**High yield behaves far more like a share than like a government bond.**",
          "Which is a problem if you bought it thinking you were diversifying. You reached for the bond-shaped thing in your portfolio for protection, and it went down with everything else — **exactly when you needed it not to.**"
        ],
        terms: [
          { term: 'Recovery rate',
            plain: 'How much of the face value bondholders actually get back after a default.',
            like: 'Getting sixty pence in the pound. Not what you wanted, and not nothing.' },
          { term: 'Senior secured',
            plain: 'Debt backed by specific assets and first in line. Recovers the most.',
            like: 'A loan with the car as collateral. There is something to take.' },
          { term: 'Subordinated',
            plain: 'Debt ranking behind other debt. Recovers much less.',
            like: 'Further back in the same queue. The people ahead take what there was.' },
          { term: 'Spread widening',
            plain: 'Credit spreads increasing, meaning the market is demanding more to take the same risk.',
            like: 'Insurance premiums rising. Somebody has recalculated the odds.' }
        ],
        close: [
          "**A default doesn't usually mean zero.** Bondholders have a claim on assets, so you typically get something back — and how much depends on where you ranked and what the company owned.",
          "That's the **recovery rate**, and it varies enormously. Debt secured against real assets recovers far more than debt ranking behind other debt.",
          "**Shareholders, as module 101 promised, usually recover nothing at all.** That's the seniority point turning from theory into an actual outcome.",
          "So the honest calculation has two halves:",
          "**Expected loss = probability of default × (1 − recovery rate)**",
          "People look at the first half and forget the second. A bond with a fair chance of default but strong asset backing can be a better proposition than a safer-looking one where you'd recover nothing.",
          "**Finally — and this is the part that's useful to you even if you never buy a single bond.**",
          "**Credit spreads often widen before equity markets fall.** Bond investors are watching whether companies can survive; equity investors are watching whether they can grow. Survival questions tend to get asked first.",
          "**A fast widening in high yield spreads is one of the more reliable signs of stress** in the whole financial system. And that stress travels — credit turning risk-off means currencies turn risk-off too, which is module 9's regime lesson arriving from a different direction.",
          "**Watch the speed and direction, not the level.** A spread moving quickly says far more than a spread sitting high."
        ]
      },
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
