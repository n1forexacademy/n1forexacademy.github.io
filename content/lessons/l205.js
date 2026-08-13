/* N1 Forex Academy — lessons for Module 205 (Bonds track).

   VOICE: Jonathan talking to one student. The curve is the most useful thing in
   this track for a forex trader, so the second lesson explicitly hands it back
   to module 9. Inversion is stated with its real caveats — a signal, not a
   schedule — rather than as the folklore version. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[205] = [
    {
      title: 'One issuer, every maturity, one line',
      slides: [0, 1],
      teach: {
        lead: [
          "Take one borrower — say the UK government — and plot the yield on every one of its bonds against how long until each matures. Yield up the side, time along the bottom.",
          "**That line is the yield curve**, and it is probably the single most information-dense chart in finance.",
          "It has two ends that mean different things.",
          "**The front end** — the short maturities, out to a year or two — is dominated by what the central bank is doing right now and is about to do. It's almost a direct readout of policy expectations.",
          "**The long end** — ten, twenty, thirty years — reflects what people think about growth and inflation over decades. The current central bank meeting barely registers out there.",
          "**Normally the line slopes upward.** Longer bonds pay more than shorter ones.",
          "And the crucial thing to understand: **the shape is the information, not the level.** Whether yields are 2% or 7% matters far less than what the line is doing."
        ],
        terms: [
          { term: 'Yield curve',
            plain: 'Yield plotted against maturity for one issuer\'s bonds.',
            like: 'A price list for lending money, by how long you are lending it for.' },
          { term: 'Front end',
            plain: 'The short maturities. Driven by what the central bank is doing now.',
            like: 'Tomorrow\'s weather forecast. Fairly confident, and about the near term only.' },
          { term: 'Long end',
            plain: 'The long maturities. Driven by expectations about growth and inflation over decades.',
            like: 'The seasonal outlook. Vaguer, and about something much bigger.' },
          { term: 'Term premium',
            plain: 'The extra yield demanded simply for lending over a longer period.',
            like: 'Charging more to lend your car for a month than for an afternoon.' }
        ],
        close: [
          "**Why does longer normally pay more?** Two reasons, and both are things you already know.",
          "**Uncertainty.** Lending for thirty years means thirty years of not knowing what inflation does, what policy does, or what happens to the borrower. You want paying for accepting that.",
          "**Duration risk.** From module 203 — a long bond swings much harder on any rate move. You're sitting out at the end of the see-saw, and you want compensating for the ride.",
          "Together those make up the **term premium**, and it's the reason an upward slope is simply the **default state** of a yield curve.",
          "That matters for how you read it. **A normal upward curve isn't a signal. It's the absence of one.** It's what you'd expect when nothing unusual is being priced.",
          "**So the interesting question is always: what happens when it stops looking normal?**",
          "That's the next lesson, and it's the bit that gets written about in newspapers."
        ]
      },
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
      title: 'Inversion, shape, and your currency pairs',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Sometimes the curve turns upside down. **Short-term bonds yield more than long-term ones.** That's an **inverted curve**, and it's strange enough to be worth understanding properly.",
          "What does it actually mean? Work it back. If people accept less to lend for ten years than for two, **they must expect rates to be lower in future than they are now.**",
          "**And why would rates be cut? Because growth is weakening.** Central banks cut when the economy needs help.",
          "So an inverted curve is the bond market collectively saying: *we think this slows down.*",
          "**Historically, inversions have preceded recessions.** That's a real pattern with a genuine mechanism behind it — and it's also where the folklore gets ahead of the evidence, so let me give you the caveats properly.",
          "**The lag varies enormously** — sometimes more than a year between the inversion and anything happening. **And it has given false signals.** It's a signal, not a schedule, and anyone who tells you otherwise is reading a headline rather than the record."
        ],
        terms: [
          { term: 'Inverted curve',
            plain: 'Short-dated bonds yielding more than long-dated ones. The market expects rate cuts.',
            like: 'Being charged less for a long hire than a short one. Something odd is being assumed.' },
          { term: 'Steepening',
            plain: 'The gap between short and long yields getting wider.',
            like: 'The slope getting steeper. Which end lifted is the whole question.' },
          { term: 'Flattening',
            plain: 'That gap narrowing.',
            like: 'The slope levelling out.' },
          { term: 'Parallel shift',
            plain: 'The whole curve moving up or down together.',
            like: 'The entire price list going up. Everything repriced, shape unchanged.' }
        ],
        close: [
          "There's one more mechanism worth knowing, because it makes inversion partly self-fulfilling.",
          "**Banks borrow short and lend long.** They pay you a bit on deposits and charge more on mortgages, and they live on the difference. **When the curve inverts, that difference disappears** — so lending becomes less profitable, so banks lend less, so the economy slows. The prediction helps cause the thing predicted.",
          "**Now, shape changes — and the question people forget to ask.**",
          "When someone says \"the curve steepened\", the essential follow-up is: **which end moved?**",
          "**Steepening because short yields fell** means the market is pricing rate cuts — that's weakness. **Steepening because long yields rose** means inflation worries or concerns about how much debt is being issued. **Completely different situations, identical description.**",
          "Direction alone is nearly meaningless. Always ask which end, and why.",
          "**And here's why this matters to you even if you never buy a bond.**",
          "Module 9 told you currencies are driven by **rate expectations**. **The yield curve is those expectations, drawn as a picture.** A front end pricing in cuts is a currency-negative signal that's visible **before the cut happens.**",
          "Compare two countries' curves and you're looking at the rate differential that drives their currency pair — which is the carry trade, and module 206's subject.",
          "**The curve is very often a cleaner read on what the market expects than any amount of commentary about it.** Learn to glance at it. It costs you nothing and it's usually ahead of the news."
        ]
      },
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
})();
