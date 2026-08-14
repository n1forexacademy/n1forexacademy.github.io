/* N1 Forex Academy — lessons for Module 602 (Commodities track).

   VOICE: Jonathan talking to one student. The central insight is that a 1–2%
   imbalance produces a far larger price move, because neither side responds
   quickly — which explains behaviour students otherwise blame on manipulation.
   Seasonality gets tied explicitly to module 11's overfitting. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[602] = [
    {
      title: 'Inventory is the balance made visible',
      slides: [0, 1],
      teach: {
        lead: [
          "To know where a commodity price is going, you'd want to know how much is being produced and how much is being used. **Neither of those is observable.** Nobody measures global consumption in real time.",
          "**But you can observe what's sitting in storage.**",
          "And storage tells you the answer indirectly, which is good enough:",
          "**Inventory rising** means more is being produced than used. **Inventory falling** means the reverse. That's it — you're reading the balance through its shadow.",
          "A refinement worth adopting: **days of cover** — inventory divided by daily consumption. Better than the raw figure because it scales. Ten million barrels means something different in a world using five million a day than one using twenty.",
          "**And a great deal of this is public and scheduled.** Weekly releases for some energy products, monthly for many others. Free.",
          "**This is the closest thing commodities have to a company's accounts.** Dull, published, and consistently more informative than anybody's narrative."
        ],
        terms: [
          { term: 'Inventory report',
            plain: 'A scheduled public release of how much is in storage.',
            like: 'A stocktake. Boring, and it settles arguments.' },
          { term: 'Days of cover',
            plain: 'Inventory divided by daily consumption — how long the stockpile would last.',
            like: 'How many days of food are in the cupboard, rather than how many tins.' },
          { term: 'Surplus / deficit',
            plain: 'Production minus consumption over a period. Usually a small number.',
            like: 'Whether the bath is filling or draining, and how fast.' },
          { term: 'Spare capacity',
            plain: 'Production that could be switched on quickly if needed.',
            like: 'A spare tank in the shed. Its size decides how worried you should be.' }
        ],
        close: [
          "Now the thing that explains behaviour you'd otherwise put down to manipulation.",
          "**A 1 or 2% imbalance can move price 30 or 40%.** That looks insane until you see why it has to.",
          "Ask yourself: **if petrol goes up 20% this month, how much less do you drive?**",
          "Realistically, barely any. You still get to work. You still heat the house. Over months, **almost nobody changes consumption because the price moved.**",
          "And supply is just as stubborn in the other direction. **You cannot open a mine this quarter or grow a crop by Thursday.**",
          "So when a small imbalance appears, **neither side can adjust — which means price is the only thing that can.** And it has to move a very long way indeed before anybody's behaviour changes at all.",
          "**That's why commodity prices are so much more volatile than the physical balance underneath them.** Small surplus, large fall. Small deficit, violent rally.",
          "**The asymmetry between those two numbers is the whole point of this module.** A 2% surplus producing a 40% fall isn't irrational. It's inelastic demand doing exactly what inelastic demand does."
        ]
      },
      check: [
        { q: 'Inventory is rising steadily. This implies:',
          options: ['Demand is rising', 'More is being produced than consumed — the market is in surplus', 'Prices must rise', 'Production has stopped'],
          a: 1,
          why: 'You cannot observe global production and consumption directly, but you can observe storage. Inventory is the physical balance made visible — and days of cover is the more useful form of it.' },
        { q: 'Why can a 2% surplus produce a far larger price fall?',
          options: ['Speculators exaggerate it', 'Short-run supply and demand barely respond to price, so price must move a long way to clear even a small imbalance', 'Inventory reports are unreliable', 'It cannot — the fall would also be about 2%'],
          a: 1,
          why: 'You still heat the house whatever it costs, and nobody opens a mine this quarter. Price is the only thing that can adjust quickly, which is why these markets are far more volatile than the balance underneath them.' }
      ]
    },

    {
      title: 'Seasons, shocks, and what you cannot know',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "**Seasonality is real here in a way it isn't in most markets.** Heating demand genuinely rises in winter. Crops genuinely get planted and harvested on a calendar. Driving genuinely peaks in summer.",
          "These produce recurring patterns you can see across many years of data. So far so useful.",
          "**But be careful, because this is the most seductive curve-fit in commodities.**",
          "**It's a tendency, not a schedule.** A single season can run entirely the other way for perfectly good reasons — a mild winter, an early harvest, a demand shock from somewhere else.",
          "**And everybody knows about it.** The pattern is public and has been for decades, so a *normal* seasonal move is largely in the price before it happens. What moves price is the season being **abnormal**.",
          "Notice what a seasonal trading calendar actually is: a rule derived from a small number of independent observations, with a plausible-sounding story attached. **That's module 11's overfitting, with months instead of Tuesdays.**",
          "**Use it as context for what's normal. Be very sceptical of anyone selling it as a calendar of entries.**"
        ],
        terms: [
          { term: 'Seasonality',
            plain: 'A recurring within-year pattern driven by weather, planting, harvest or heating.',
            like: 'Ice cream selling better in July. True, obvious, and already in everyone\'s plans.' },
          { term: 'Demand destruction',
            plain: 'Consumption genuinely falling because the price got too high.',
            like: 'The point where you finally cancel the trip. Everyone has one; nobody knows exactly where.' },
          { term: 'Disruption',
            plain: 'An unplanned loss of supply — a storm, a strike, an outage, a conflict.',
            like: 'A road closure. Not on any timetable, and everything reroutes around it.' }
        ],
        close: [
          "**Agriculture is weather. Energy is disruption.**",
          "A drought or a frost removes a harvest that **cannot be replaced until next season** — that's why agricultural markets can move so violently on a forecast. Energy loses supply to outages, storms, strikes and conflict, with no notice at all.",
          "You can't predict any of that. **But a supply shock is bounded at both ends, and you can know roughly where those bounds sit before anything happens.**",
          "**What caps the move is spare capacity** — production that can be switched on quickly. If there's plenty sitting idle, the reaction is muted. If there's almost none, the same shock goes a very long way.",
          "**What ends the move is demand destruction** — price rising far enough that buyers genuinely use less. That's the upper bound, and you can find roughly where it sat in the last big rally.",
          "**Knowing those two numbers in advance is worth more than trying to forecast the shock**, because one is knowable and the other isn't.",
          "Finally, the honest limits, and they matter for sizing rather than for analysis.",
          "**Production figures are estimates**, often revised, occasionally political. **Consumption is estimated more loosely still**, and late. **And a great deal of the world's storage simply isn't published** — it sits in tanks and warehouses nobody reports.",
          "**So the balance you construct is approximate. Treat it as a range, never a number.**",
          "Which leads to the same instruction you've now had in equities, in bonds and here: **when the analysis is uncertain, the answer is a smaller position — not more research.**"
        ]
      },
      check: [
        { q: 'Seasonality in commodities is best treated as:',
          options: ['A reliable calendar of entries', 'A tendency describing what is normal — largely priced already, and capable of failing in any single year', 'Irrelevant noise', 'A guarantee of direction'],
          a: 1,
          why: 'It is genuine and public, so a normal seasonal move is mostly priced before it happens. Trading it as a calendar is module 11\'s overfitting with months instead of Tuesdays.' },
        { q: 'What usually caps a supply-shock rally?',
          options: ['Regulation', 'Spare capacity being switched on, and eventually demand destruction as buyers genuinely use less', 'Position limits', 'Nothing — shocks are unbounded'],
          a: 1,
          why: 'A shock is bounded at both ends. You cannot forecast the hurricane, but you can know beforehand how much spare capacity exists and roughly where demand destruction happened last time.' }
      ]
    }
  ];
})();
