/* N1 Forex Academy — lessons for Module 206 (Bonds track).

   VOICE: Jonathan talking to one student. This is the last lesson of the whole
   course, so it closes all three tracks rather than just this one. The carry
   trade gets the module 10 callback it deserves — the same return shape as a
   martingale, arrived at by a respectable route. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[206] = [
    {
      title: 'One decision, three markets',
      slides: [0, 1],
      teach: {
        lead: [
          "You've now studied three markets separately. **They were never separate.** This lesson shows you the wiring.",
          "Follow one event all the way through. **A central bank signals that rates will be higher for longer.**",
          "**Bonds move first.** Yields rise, prices of existing bonds fall, and the curve reshapes. That's modules 202 and 205, happening within seconds.",
          "**The currency follows.** Higher expected returns pull money in, and to get in, people have to buy the currency. That's module 9 — and notice it happens *because* of what just happened in bonds.",
          "**Equities react too.** Two reasons: future company earnings get discounted more heavily, and bonds have just become a more attractive alternative to owning shares. Valuations compress.",
          "**One event. Three markets. One mechanism.**",
          "This is why the forex traders who genuinely know what they're doing watch bonds. Not because they trade them — because that's where the thing they're trading gets decided."
        ],
        terms: [
          { term: 'Transmission',
            plain: 'How one central bank decision spreads out through every market.',
            like: 'One stone, and the ripples reaching every edge of the pond in order.' },
          { term: 'Carry trade',
            plain: 'Borrowing in a low-rate currency to hold a higher-rate one, and pocketing the difference.',
            like: 'Borrowing at 1% to lend at 5%. Lovely, right up until the borrower wants it back at once.' },
          { term: 'Carry unwind',
            plain: 'Everyone exiting carry positions at the same time, usually in a panic.',
            like: 'A crowded room and one door.' },
          { term: 'Discount rate',
            plain: 'The rate used to work out what future money is worth today. Higher rates mean distant money is worth less now.',
            like: 'How much you would knock off a promise of £100 next year. The impatient you knocks off more.' }
        ],
        close: [
          "**Now the carry trade, honestly**, because it's sold constantly and the risk is systematically understated.",
          "Borrow in a currency with low rates, hold one with high rates, collect the difference. It's the swap credit from module 1, harvested deliberately.",
          "**It works. For long stretches.** Sometimes years of steady, boring accumulation while everyone involved feels rather clever.",
          "**Then it unwinds, violently.** A risk-off shock arrives, everybody heads for the exit at the same moment, and the high-yielding currency collapses. **Years of carry can be erased in weeks.**",
          "Look carefully at that return shape: **many small gains, then a rare enormous loss.**",
          "**You have seen that shape before.** It's the same profile as the martingale system from module 10 — an equity curve that looks immaculate right up until the sequence that ends it.",
          "Carry isn't a scam, and it isn't martingale. It's a real return for taking a real risk. **But it has the same shape**, which means it destroys people the same way: by looking safe for long enough that they size it for the calm periods.",
          "**If you ever run a carry position, size it for the unwind. Not for the four quiet years before it.**"
        ]
      },
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
      title: 'Reading across markets — and where it fails',
      slides: [2, 3, 4, 5, 6],
      teach: {
        lead: [
          "One more idea that ties the tracks together, and it's a lovely one because a concept you learned for bonds turns out to explain something in equities.",
          "**A share is worth its future earnings, brought back to what they're worth today.** When interest rates rise, future money is worth less right now — so that calculation produces a smaller number.",
          "Now, which companies get hurt most?",
          "**The ones whose value sits furthest in the future.** A fast-growing business making little today, whose whole case rests on enormous profits in ten years' time, gets hammered. A dull company making steady money right now barely notices.",
          "**That is duration, applied to shares.**",
          "It's the exact see-saw from module 203. **Money far away swings hardest when rates move** — and it makes no difference whether that money is a bond coupon in 2050 or a technology company's projected earnings in 2035.",
          "A high-growth share is a long-duration asset, and it behaves like one."
        ],
        terms: [
          { term: 'Equity duration',
            plain: 'The same idea as bond duration — companies whose profits are further away move more when rates change.',
            like: 'Still the see-saw. Distant money, bigger swing.' },
          { term: 'Real yield',
            plain: 'A bond\'s yield after subtracting expected inflation. What you actually gain in buying power.',
            like: 'Your pay rise minus the rise in your bills. Only one of those numbers is real.' },
          { term: 'Correlation breakdown',
            plain: 'A reliable relationship suddenly not holding, usually during stress.',
            like: 'The shortcut being closed on the one morning you were late.' },
          { term: 'Cross-market analysis',
            plain: 'Reading several markets together for context none of them gives alone.',
            like: 'Checking the sky, the forecast and the barometer. Still not a guarantee of the weather.' }
        ],
        close: [
          "**So what does each market tell you?**",
          "**The front end of the curve:** what the market thinks the central bank will do. **Credit spreads:** whether the market is worried about companies surviving. **Equities:** general appetite for risk. **Currencies:** the relative version of all of the above, one country against another.",
          "**And when they disagree with each other, something is being repriced.** Disagreement is information. If credit spreads are widening while equities keep rising, two groups of professionals are looking at the same world and reaching different conclusions — that's worth noticing.",
          "**Now the honest limits, because this is the part that gets left out of the books that sell.**",
          "**These relationships break down** — and they tend to break down precisely when you were relying on them most.",
          "**Correlations are unstable.** That's been the recurring lesson of this entire course: module 9's dollar trades, module 106's sectors, and now here.",
          "**Lags vary enormously.** An inverted curve might precede a recession by fourteen months. For those fourteen months, **being early is completely indistinguishable from being wrong** — and it will feel like being wrong, because your account will say so.",
          "**And central banks change how they react.** What drove markets in the last cycle may simply not drive this one.",
          "**So use all of this for context and for position sizing. Never as a signal generator.** It tells you what kind of weather you're in. It doesn't tell you what happens next."
        ]
      },
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
