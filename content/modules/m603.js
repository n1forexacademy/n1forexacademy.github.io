/* N1 Forex Academy — Module 603 (Commodities track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 603 ============================ */
{
  id: 603,
  track: 'commodities',
  title: "Three Families, Not One Asset Class",
  tagline: "Energy, metals and agriculture share a shelf and almost nothing else. Treating them as one thing produces confident nonsense.",
  level: "Physical Markets",
  duration: "80 min",

  objectives: [
    "Describe what makes energy, metals and agriculture behave differently",
    "Explain why some commodities are storable and others effectively are not",
    "Explain why gold behaves unlike every other metal",
    "Match an analytical approach to the family it actually suits",
    "Avoid drawing a conclusion in one family from evidence in another"
  ],

  misconceptions: [
    "**\"Commodities move together.\"** They move together when a broad driver dominates — a currency move, a growth scare. The rest of the time they are driven by their own physical situations and can trend in opposite directions for years.",
    "**\"Gold is an industrial metal.\"** Very little of it gets consumed. Almost all the gold ever mined still exists, which makes it behave far more like a currency than like copper.",
    "**\"Agriculture is unpredictable so it is untradeable.\"** It is unusually well documented — planted area, crop condition and stocks are published on a schedule. The uncertainty is weather, and weather has known distributions.",
    "**\"Storable and non-storable is a technicality.\"** It decides whether a curve can hold contango at all, and therefore whether the carry lesson from Module 601 even applies."
  ],

  glossary: [
    { t: "Storable", d: "Can be held over time at reasonable cost — metals, grains, crude. Carry applies and curves can sit in contango." },
    { t: "Non-storable", d: "Impractical or ruinous to store — electricity above all. Prices can behave wildly because carry cannot arbitrage them." },
    { t: "Above-ground stock", d: "How much has ever been produced and still exists. Enormous for gold, tiny for wheat." },
    { t: "Crack spread", d: "The difference between crude and the refined products made from it. A refiner's actual margin." },
    { t: "Base metal", d: "Industrially consumed metal — copper, aluminium, zinc. Tracks construction and manufacturing." },
    { t: "Precious metal", d: "Held rather than consumed. Behaves more like a monetary asset than an industrial input." },
    { t: "Growing season", d: "The window in which weather can still change a harvest. Volatility concentrates here." },
    { t: "Stocks-to-use", d: "Ending stocks divided by annual consumption. Agriculture's days-of-cover equivalent." }
  ],

  slides: [
    { kicker: "Energy",
      title: "Disruption, refining, and a curve that means something",
      bullets: [
        "**Driven by disruption** — outages, storms, conflict, sanctions — and by economic activity on the demand side.",
        "**Storable, but expensively.** Tanks are finite, which is why storage costs can spike when a surplus fills them up.",
        "**Crude is an input, not a product.** What people actually use is refined — the **crack spread** is the refiner's margin between them.",
        "**Highly financialised**, with deep futures markets and heavy participation from both hedgers and funds.",
        "**Spare capacity is the number that matters** — it decides how far any disruption can travel."
      ],
      note: "The crude-versus-products distinction is worth spending time on. Students who understand that crude is a feedstock stop being surprised when crude and petrol prices diverge, which happens routinely." },

    { kicker: "Metals",
      title: "Two categories wearing one name",
      bullets: [
        "**Base metals** — copper, aluminium, zinc — are **consumed by industry**. They track construction, manufacturing and the electrical grid.",
        "Copper is watched as an economic indicator for exactly that reason, though it is a rougher signal than its reputation suggests.",
        "**Precious metals are different in kind.** Gold is **held, not used up**.",
        "**Almost all the gold ever mined still exists**, so above-ground stock dwarfs annual production — mine supply barely matters.",
        "**Which is why gold trades on real interest rates, currency moves and fear**, far more than on any supply and demand balance."
      ],
      note: "The above-ground stock point is the cleanest explanation of why gold ignores mine output. Once students see that annual production is a rounding error against existing stock, the monetary framing follows on its own." },

    { kicker: "Agriculture",
      title: "A clock you cannot restart",
      bullets: [
        "**Supply arrives once a year.** Miss the season and you wait — there is no equivalent of switching a well back on.",
        "**Weather is the dominant variable**, and its influence concentrates in the growing season.",
        "**Extremely well documented.** Planted area, crop condition and ending stocks are published on a schedule.",
        "**Stocks-to-use** is the key ratio — ending stocks divided by annual consumption. Agriculture's days of cover.",
        "**Volatility is seasonal in a structural way**: it lives where weather can still change the outcome, and collapses once the harvest is in."
      ],
      note: "The 'clock you cannot restart' framing explains why agricultural markets react so hard to forecasts. A drought does not reduce supply gradually; it removes a year's worth that cannot be recovered until the next cycle." },

    { kicker: "Non-storable",
      title: "Electricity, and what happens without carry",
      bullets: [
        "**Electricity cannot practically be stored** at scale. It must be produced at the moment it is used.",
        "**So carry cannot arbitrage the curve**, which means the whole cost-of-carry logic from Module 601 simply does not apply.",
        "The result is **prices that behave unlike anything else you have studied** — including, in stressed conditions, negative prices.",
        "**Negative prices are not a glitch.** They mean it is cheaper to pay someone to take power than to shut a plant down and restart it.",
        "**Storability is therefore not a technicality.** It decides whether the curve carries information at all."
      ],
      note: "Include this even though few students will trade power. It is the cleanest proof that the carry framework is a consequence of storability rather than a law, and it prevents students applying contango logic where it cannot hold." },

    { kicker: "Together",
      title: "When they move as one, and when they do not",
      bullets: [
        "They **do** move together when a broad driver dominates — a large currency move, a growth scare, a liquidity shock.",
        "Most of the time they are driven by **their own physical situations** and can trend opposite ways for years.",
        "**So a basket of commodities is not automatically diversified**, and it is not automatically concentrated either. It depends what is driving.",
        "**Never carry a conclusion across families.** Tight copper inventories say nothing about wheat.",
        "**Correlation here is regime-dependent**, which is the same warning you have had in every track — and the same answer: size for the correlated case."
      ],
      note: "Fourth appearance of the correlation lesson. By now the student should recognise it before it is stated; the useful addition here is that commodity correlation is driven by whether a macro factor is dominant, which is observable." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "Energy as disruption plus refining, with spare capacity setting the bounds",
        "Base metals as industrial demand, and gold as a monetary asset with irrelevant mine supply",
        "Agriculture as an annual clock where volatility lives in the growing season",
        "Why storability decides whether carry logic applies at all",
        "Why a commodity basket is diversified only when no macro factor is dominant"
      ],
      note: "Module 604 is the practical one: having understood what drives these, how do you actually get exposure — and every route has a cost the brochure does not lead with." }
  ],

  practical: {
    title: "Three families, three approaches",
    time: "40 min",
    intro: "One analytical checklist per family, built from what actually drives each. The point is that the three lists should look genuinely different.",
    setup: [
      "Pick one energy, one base metal and one agricultural commodity.",
      "Use the inventory and balance work from the Module 602 lab where it applies."
    ],
    steps: [
      { h: "List the drivers", d: "For each, write the three variables that most affect price. Do not reuse a variable across families unless you can justify it." },
      { h: "Find the key dataset", d: "Name the single published dataset you would watch for each, with its release schedule." },
      { h: "State the volatility shape", d: "For each, say when in the year volatility is structurally highest and why. For one of them the honest answer may be 'no seasonal pattern'." },
      { h: "Test gold against the list", d: "Apply your base-metal checklist to gold and record exactly where it fails. Then write the checklist gold actually needs." },
      { h: "Check correlation", d: "Look at how your three moved over the past year. Identify any period where they moved together, and name the macro factor that was dominant." }
    ],
    deliverable: "Three driver checklists that visibly differ, one key dataset and schedule each, a volatility-timing note, a gold comparison showing where the metals checklist breaks, and one identified correlated episode with its cause.",
    rubric: [
      { c: "Genuinely different", d: "The three checklists do not collapse into the same generic list of supply, demand and dollar." },
      { c: "Named datasets", d: "Specific published series with real release schedules, not 'supply data'." },
      { c: "Gold contrast", d: "States concretely why mine supply is near-irrelevant, referencing above-ground stock." },
      { c: "Correlation cause", d: "Identifies a dominant macro factor rather than simply noting that prices moved together." }
    ],
    pitfalls: [
      "Producing three near-identical checklists, which means the module has not landed.",
      "Treating gold as a base metal, which is exactly the error the step is designed to expose.",
      "Claiming a seasonal volatility pattern where none exists.",
      "Explaining a correlated episode as coincidence rather than naming the driver."
    ]
  },

  homework: [
    "Find the ratio of above-ground gold stock to annual mine production, and write one sentence on what that implies for supply-driven analysis.",
    "Find one period in the last five years when a base metal and an agricultural commodity moved sharply together, and identify what was driving both.",
    "Look up whether your market has ever had negative electricity prices, and write two sentences on what physically caused it."
  ],

  quiz: [
    { q: "Why does gold behave unlike copper?",
      options: [
        "Gold is rarer",
        "Gold is held rather than consumed, so above-ground stock dwarfs mine production and supply analysis barely applies",
        "Gold has no futures market",
        "Copper is not storable"
      ], a: 1,
      why: "Almost all the gold ever mined still exists. That is why it trades on real rates, currencies and fear rather than on a supply and demand balance." },

    { q: "What makes agricultural supply different from energy supply?",
      options: [
        "It is unregulated",
        "It arrives once a year — miss the season and there is no equivalent of switching a well back on",
        "It cannot be stored",
        "It is not published"
      ], a: 1,
      why: "It is a clock you cannot restart, which is why these markets react so hard to weather forecasts. A drought removes a year that is not recoverable until the next cycle." },

    { q: "Electricity prices can go negative because:",
      options: [
        "Of a pricing error",
        "It cannot practically be stored, so at times it is cheaper to pay someone to take it than to shut a plant down and restart it",
        "Regulators subsidise consumption",
        "Demand is always inelastic"
      ], a: 1,
      why: "Without storability, carry cannot arbitrage the curve and the whole cost-of-carry framework from Module 601 stops applying. Storability is not a technicality." },

    { q: "The crack spread is:",
      options: [
        "The gap between two delivery months",
        "The difference between crude and the refined products made from it — a refiner's margin",
        "The bid-ask spread on crude",
        "The gap between two grades of crude"
      ], a: 1,
      why: "Crude is a feedstock rather than a product. Once students see that, crude and petrol prices diverging stops being surprising." },

    { q: "A basket of different commodities is:",
      options: [
        "Always well diversified",
        "Diversified only when no single macro factor is dominant — in a growth scare or a large currency move they behave as one",
        "Always a single concentrated bet",
        "Uncorrelated by definition"
      ], a: 1,
      why: "Fourth appearance of the correlation lesson. The useful addition here is that commodity correlation depends on whether a macro driver is dominant, which is observable rather than mysterious." }
  ]
}

]);
