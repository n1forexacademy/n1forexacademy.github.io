/* N1 Forex Academy — Module 602 (Commodities track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 602 ============================ */
{
  id: 602,
  track: 'commodities',
  title: "Inventory, Weather and What Actually Moves It",
  tagline: "Boring published numbers beat compelling stories in this market more reliably than in any other you have studied.",
  level: "Physical Markets",
  duration: "80 min",

  objectives: [
    "Read an inventory report and say what it implies about the physical balance",
    "Explain why a small surplus or deficit can move price a long way",
    "Describe seasonality without treating it as a schedule",
    "Explain how weather and disruption feed into agricultural and energy prices",
    "Say honestly what you can and cannot know about supply and demand"
  ],

  misconceptions: [
    "**\"A 2% surplus means a 2% price fall.\"** Short-run demand barely responds to price, so a small imbalance has to be cleared by a large price move. Modest surpluses have produced enormous falls.",
    "**\"Seasonality tells me when to buy.\"** It describes a tendency across many years, not a calendar you can trade. A single season can run the other way for entirely good reasons.",
    "**\"I need better data than everyone else.\"** The important inventory figures are public and scheduled. The edge, where there is one, is in interpretation and positioning, not in secret numbers.",
    "**\"Production cuts always raise the price.\"** Only if inventory is tight. Announced cuts into a large surplus frequently do nothing at all."
  ],

  glossary: [
    { t: "Inventory report", d: "A scheduled public release of how much is in storage. Weekly for some energy products, monthly for many others." },
    { t: "Days of cover", d: "Inventory divided by daily consumption. More useful than the raw number, because it scales with demand." },
    { t: "Surplus / deficit", d: "Production minus consumption over a period. Small numbers with large price consequences." },
    { t: "Spare capacity", d: "Production that could be switched on quickly. Its size caps how far a supply shock can travel." },
    { t: "Seasonality", d: "A recurring within-year pattern driven by weather, planting, harvest or heating demand. A tendency, not a schedule." },
    { t: "Crop report", d: "Official estimates of planted area, condition and expected yield. Moves agricultural markets sharply." },
    { t: "Disruption", d: "An unplanned loss of supply — a strike, a storm, a conflict, an outage." },
    { t: "Demand destruction", d: "Consumption falling because the price got too high. The upper bound on most rallies." }
  ],

  slides: [
    { kicker: "The core number",
      title: "Inventory is the balance made visible",
      bullets: [
        "You cannot observe global production and consumption directly. **You can observe what is in storage.**",
        "**Inventory rising** means more is being produced than used. **Inventory falling** means the reverse.",
        "Better than the raw figure: **days of cover** — inventory divided by daily consumption — because it scales with demand.",
        "**Many of these numbers are public and scheduled.** Weekly for some energy products, monthly for many others.",
        "**This is the closest thing commodities have to a company's accounts** — dull, published, and more informative than any narrative."
      ],
      note: "Ties to Module 501's tokenomics lab and Module 104's accounts: in every track, the boring published dataset beats the story. Students who internalise that pattern across four asset classes stop chasing narrative." },

    { kicker: "Leverage in the balance",
      title: "Why small imbalances move price a long way",
      bullets: [
        "Over months, **almost nobody changes consumption because the price moved.** You still heat the house and drive to work.",
        "Supply is just as slow — **you cannot open a mine or grow a crop this quarter**.",
        "So when a **1 or 2% imbalance** appears, price is the only thing that can adjust, and it has to move a long way to force anyone's hand.",
        "**That is why commodity prices are so much more volatile than the underlying physical balance.**",
        "**Small surplus, large fall. Small deficit, violent rally.** The asymmetry between the two numbers is the whole point."
      ],
      note: "This is the module's central insight and it explains behaviour students otherwise attribute to manipulation. A 2% surplus producing a 40% fall is not irrational; it is inelastic demand doing what inelastic demand does." },

    { kicker: "Seasonality",
      title: "A tendency, never a schedule",
      bullets: [
        "Heating demand rises in winter. Crops are planted and harvested on a calendar. Driving peaks in summer.",
        "**These produce genuine recurring patterns**, and they are visible across many years of data.",
        "**They are tendencies, not schedules.** A single season can run the other way for perfectly good reasons.",
        "**The pattern is also known to everyone**, so a normal seasonal move is largely priced before it happens.",
        "**Use seasonality as context for what is normal**, and be sceptical of anyone selling it as a calendar of entries — that is Module 11's overfitting, with months instead of Tuesdays."
      ],
      note: "The link to overfitting is worth making explicitly. Seasonal calendars are the most seductive curve-fit in commodities: vivid, mechanical, and derived from a small number of independent observations." },

    { kicker: "Shocks",
      title: "Weather and disruption",
      bullets: [
        "**Agriculture is weather.** Drought, frost and flood reduce a harvest that cannot be replaced until next season.",
        "**Energy is disruption.** Outages, storms, strikes, conflict and sanctions all remove supply without warning.",
        "**What caps the move is spare capacity** — production that can be switched on quickly. Ample spare capacity, muted reaction.",
        "**What ends the move is demand destruction** — the price rising far enough that buyers genuinely use less.",
        "**So a supply shock is bounded at both ends**, and knowing where those bounds sit is worth more than predicting the shock."
      ],
      note: "The two bounds are the practical takeaway. Students cannot forecast a hurricane, but they can know beforehand roughly how much spare capacity exists and roughly where past demand destruction occurred." },

    { kicker: "Limits",
      title: "What you cannot know",
      bullets: [
        "**Production figures are estimates**, often revised, sometimes political.",
        "**Consumption is estimated even more loosely**, and usually late.",
        "**Inventory outside reporting regimes is largely invisible** — a great deal of the world's storage is not published.",
        "**So the balance you construct is approximate.** Treat it as a range, never a number.",
        "**Position for being roughly right, not precisely right.** That is a sizing decision, not an analytical one."
      ],
      note: "Same honesty as the limits slide in Module 104 and Module 206. The recurring instruction across the course is to convert analytical uncertainty into smaller positions rather than into more research." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "Inventory and days of cover as the visible form of the physical balance",
        "Why a 1–2% imbalance produces a far larger price move",
        "Seasonality as a tendency that is already largely priced",
        "Spare capacity and demand destruction as the two bounds on any shock",
        "That your constructed balance is a range, and what that means for size"
      ],
      note: "Module 603 splits the three families apart, because energy, metals and agriculture behave differently enough that treating them as one asset class produces confident nonsense." }
  ],

  practical: {
    title: "Build a balance from public data",
    time: "45 min",
    intro: "You will construct an approximate supply and demand picture for one commodity from published figures, and state plainly how wide the error bars are.",
    setup: [
      "Choose one commodity with a public inventory series.",
      "Gather twelve months of inventory data and whatever production and consumption estimates you can find."
    ],
    steps: [
      { h: "Plot inventory", d: "Chart the last twelve months. Mark the five-year average for the same weeks if available, and note where current inventory sits against it." },
      { h: "Convert to days of cover", d: "Divide inventory by estimated daily consumption. State why this is more useful than the raw number." },
      { h: "Infer the balance", d: "From the direction of inventory, state whether the market has been in surplus or deficit, and roughly how large. Show the reasoning." },
      { h: "Find the bounds", d: "Estimate spare production capacity, and find the price level at which demand destruction was observed in the last major rally." },
      { h: "State the error bars", d: "List every figure you had to estimate, and say how wrong each could plausibly be. Then state what position size that uncertainty justifies." }
    ],
    deliverable: "An inventory chart against its historical range, days of cover, an inferred surplus or deficit with reasoning, both bounds on a shock, and an explicit list of estimates with their uncertainty.",
    rubric: [
      { c: "Days of cover", d: "Computed and explained, not just quoted as a raw inventory figure." },
      { c: "Reasoning shown", d: "The inferred balance follows visibly from the inventory direction rather than being asserted." },
      { c: "Both bounds", d: "Identifies spare capacity AND a historical demand-destruction level." },
      { c: "Honest error bars", d: "Names each estimated input and translates the total uncertainty into a position size." }
    ],
    pitfalls: [
      "Quoting inventory without comparing it to its own history, where the level means nothing.",
      "Presenting estimated production and consumption as though they were measured.",
      "Skipping the final step, which is the only one that changes what you would actually do.",
      "Assuming unpublished storage is zero."
    ]
  },

  homework: [
    "Find the most recent inventory release for one commodity and write two sentences on what it implied about the balance, then check how price reacted.",
    "Find one commodity's seasonal pattern over ten years and note how many of those years actually followed it.",
    "Write one sentence stating the spare capacity that would cap a supply shock in a market you follow, or state that you could not find it."
  ],

  quiz: [
    { q: "Inventory is rising steadily. This implies:",
      options: [
        "Demand is rising",
        "More is being produced than consumed — the market is in surplus",
        "Prices must rise",
        "Production has stopped"
      ], a: 1,
      why: "You cannot observe global production and consumption directly, but you can observe storage. Inventory is the physical balance made visible, and days of cover is the more useful form of it." },

    { q: "Why can a 2% surplus produce a far larger price fall?",
      options: [
        "Speculators exaggerate it",
        "Short-run supply and demand barely respond to price, so price must move a long way to clear even a small imbalance",
        "Inventory reports are unreliable",
        "It cannot; the fall would also be about 2%"
      ], a: 1,
      why: "You still heat the house whatever the price, and nobody opens a mine this quarter. Price is the only thing that can adjust quickly, which is why these markets are far more volatile than the physical balance." },

    { q: "Seasonality in commodities is best treated as:",
      options: [
        "A reliable calendar of entries",
        "A tendency describing what is normal — largely priced already, and capable of failing in any single year",
        "Irrelevant noise",
        "A guarantee of direction"
      ], a: 1,
      why: "It is genuine and it is public, so a normal seasonal move is mostly in the price before it happens. Trading it as a calendar is Module 11's overfitting with months instead of Tuesdays." },

    { q: "What usually caps a supply-shock rally?",
      options: [
        "Regulation",
        "Spare capacity being switched on, and eventually demand destruction as buyers genuinely use less",
        "Speculative positioning limits",
        "Nothing; shocks are unbounded"
      ], a: 1,
      why: "A shock is bounded at both ends. You cannot forecast the hurricane, but you can know beforehand how much spare capacity exists and roughly where demand destruction occurred last time." },

    { q: "Your constructed supply and demand balance should be treated as:",
      options: [
        "A precise figure",
        "A range, because production and consumption are estimates and much storage is unpublished",
        "Irrelevant to trading",
        "Superior to price action"
      ], a: 1,
      why: "Convert analytical uncertainty into a smaller position rather than into more research. That instruction has now appeared in the equities, bonds and commodities tracks alike." }
  ]
}

]);
