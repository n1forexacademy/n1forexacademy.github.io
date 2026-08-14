/* N1 Forex Academy — Module 604 (Commodities track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 604 ============================ */
{
  id: 604,
  track: 'commodities',
  title: "Four Ways In, Each With a Cost",
  tagline: "You have decided a commodity is going up. Now choose how — because every route charges you differently and one of them is not really the commodity at all.",
  level: "Physical Markets",
  duration: "85 min",

  objectives: [
    "Compare futures, ETFs, producer equities and physical as routes to the same view",
    "Explain why a commodity ETF can fall while the spot price is unchanged",
    "Explain why a producer's shares are a leveraged and impure version of the commodity",
    "Choose a route deliberately, with its specific cost stated",
    "Explain why the right route depends on holding period more than on conviction"
  ],

  misconceptions: [
    "**\"An ETF tracks the spot price.\"** Most commodity ETFs hold futures and must roll them. In persistent contango they bleed relative to spot — Module 303's arithmetic, disclosed in every prospectus and read by almost nobody.",
    "**\"Buying miners is buying the metal.\"** You are buying a business with costs, debt, management and jurisdiction risk, whose profits are geared to the metal price. Related, and not the same thing.",
    "**\"Physical is the pure play.\"** It is the purest exposure and the most expensive to hold — storage, insurance, wide spreads and verification costs all apply.",
    "**\"The best route is whichever is cheapest to open.\"** As with CFDs versus shares in Module 103, the honest comparison is total cost over your actual holding period."
  ],

  glossary: [
    { t: "Futures route", d: "Direct exposure with the tightest costs, an expiry to manage and margin to fund." },
    { t: "Commodity ETF", d: "A listed fund giving exposure without a futures account. Usually holds futures and rolls them for you." },
    { t: "Tracking difference", d: "The gap between the fund's return and the spot commodity, driven mostly by roll." },
    { t: "Producer equity", d: "Shares in a company that extracts or grows the commodity." },
    { t: "Operating leverage", d: "Why a producer's profits move more than the commodity price: costs are largely fixed." },
    { t: "All-in sustaining cost", d: "What it actually costs a producer to keep producing. The level at which a price fall becomes existential." },
    { t: "Physical", d: "Owning the actual metal or goods. Pure exposure, real storage costs." },
    { t: "Allocated / unallocated", d: "Whether specific physical units are yours, or you hold a claim on a pool. A solvency question, not a technicality." }
  ],

  slides: [
    { kicker: "Futures",
      title: "The direct route",
      bullets: [
        "**Tightest costs and deepest liquidity** in the major contracts, with a central counterparty behind you — Module 301.",
        "**But: expiry to manage, rolls to pay, margin to fund and daily settlement in cash** — Modules 302 and 303 in full.",
        "**Contract sizes are often large**, which is why micros matter for a retail account.",
        "**Best suited to a defined view over weeks or months**, held deliberately and rolled on a written rule.",
        "**Worst suited to a long-term hold in contango**, where the rolls quietly do the damage."
      ],
      note: "Nothing new here — the point is that the student already knows this route's costs precisely, which makes it the benchmark against which the other three are judged." },

    { kicker: "ETFs",
      title: "Convenient, and it usually holds futures",
      bullets: [
        "**Buy it like a share.** No futures account, no margin, no expiry to manage.",
        "**But most commodity ETFs hold futures and roll them for you**, so you inherit the roll cost you were avoiding.",
        "**In persistent contango the fund bleeds relative to spot.** Over years the gap can be very large.",
        "**Physically-backed funds exist for precious metals** and avoid roll entirely — they pay storage instead.",
        "**Read what the fund actually holds before assuming it tracks the price you are watching.** It is on page one and almost nobody looks."
      ],
      note: "This is the module's most practically useful slide, because it explains a real and common disappointment. A student who bought an oil ETF for a correct long-term view and lost money will otherwise conclude they were cheated." },

    { kicker: "Producers",
      title: "A geared, impure version of the commodity",
      bullets: [
        "A miner's costs are **largely fixed**, so profits move much more than the metal price. That is **operating leverage**.",
        "**Metal up 20% can mean profits up far more** — and the same works savagely in reverse.",
        "**All-in sustaining cost** is the number to know: below it, a producer is losing money on every unit.",
        "**But you have also bought a business** — management, debt, jurisdiction, strikes, a mine that floods.",
        "**And it is an equity**, so it falls in a market-wide sell-off even when the commodity does not — Module 106's beta.",
        "**Related to the commodity. Not the same trade.**"
      ],
      note: "The impurity is the teaching point. Students reach for miners as a convenient proxy and are then surprised when the metal rises and the share falls on a debt refinancing or a country risk event." },

    { kicker: "Physical",
      title: "The purest and the dearest",
      bullets: [
        "**No roll, no counterparty, no tracking difference.** What you own is the thing itself.",
        "**And you pay for all of it:** storage, insurance, wide dealer spreads, and the cost of verifying what you have.",
        "**Allocated** means specific units are yours. **Unallocated** means you hold a claim on a pool — which is a solvency question, not a technicality.",
        "**Practical only for precious metals** at retail scale. Nobody is storing crude in a garage.",
        "**Best suited to very long horizons** where roll costs would otherwise dominate, and to holders who want no counterparty at all."
      ],
      note: "Allocated versus unallocated deserves the emphasis: it is exactly the custody-versus-claim distinction from the crypto track, arriving in a much older market." },

    { kicker: "Choosing",
      title: "Holding period decides more than conviction does",
      bullets: [
        "**Weeks to months, defined view:** futures, sized properly, with a written roll rule.",
        "**No futures account, short horizon:** an ETF, with its holdings and roll behaviour checked first.",
        "**A view on the commodity AND on a specific company:** producer equity, understood as two bets rather than one.",
        "**Years, precious metal, no counterparty wanted:** physical, allocated, with storage costed honestly.",
        "**This is Module 103's question again** — CFD or shares — asked about four routes instead of two. **The answer still comes from holding period.**"
      ],
      note: "Naming the repetition matters. The student has now met 'match the product to the holding period' in equities and commodities; it is one of the transferable decisions rather than a market-specific trick." },

    { kicker: "Recap",
      title: "What you can now decide",
      bullets: [
        "Four routes to the same view, and the specific cost each one charges",
        "Why an ETF can fall while spot is flat, and where to check before buying",
        "Why a producer is a geared and impure version of the commodity",
        "What physical genuinely costs, and what allocated means",
        "That holding period, not conviction, picks the route"
      ],
      note: "Module 605 assembles this into a written approach and gives the honest closing assessment of where commodities fit — which for most students is narrow." }
  ],

  practical: {
    title: "Price the same view four ways",
    time: "45 min",
    intro: "One view, four routes, one year. The arithmetic decides, not the conviction.",
    setup: [
      "Take one commodity you have a genuine twelve-month view on.",
      "Identify a futures contract, an ETF, a listed producer and a physical option if one exists."
    ],
    steps: [
      { h: "Cost the futures route", d: "Estimate twelve months of rolls from the current curve shape, plus commission. Express as a percentage of the position." },
      { h: "Cost the ETF route", d: "Find the ongoing charge, and check what the fund actually holds. If it holds futures, estimate its roll drag too. Compare the fund's last three years against spot." },
      { h: "Assess the producer", d: "Find its all-in sustaining cost and its net debt. State what commodity price would make it unprofitable, and name one company-specific risk that has nothing to do with the commodity." },
      { h: "Cost physical", d: "If applicable, find dealer buy and sell prices to get the real round-trip spread, plus annual storage and insurance." },
      { h: "Choose and justify", d: "Pick one route. Justify it against total twelve-month cost and against what you would actually be exposed to — not against which was cheapest to open." }
    ],
    deliverable: "A four-column comparison of twelve-month total cost, plus what each route actually exposes you to, and a justified choice.",
    rubric: [
      { c: "Roll included", d: "Both the futures and the ETF routes carry an estimated roll cost, not just commission and management fee." },
      { c: "ETF holdings checked", d: "States what the fund holds rather than assuming it tracks spot." },
      { c: "Producer impurity", d: "Names at least one company-specific risk unrelated to the commodity price." },
      { c: "Holding period", d: "The justification turns on the twelve-month horizon rather than on conviction." }
    ],
    pitfalls: [
      "Comparing an ETF's management fee against futures commission and calling that the cost comparison.",
      "Treating a producer as a pure proxy for the metal.",
      "Using a dealer's headline physical price rather than the buy-and-sell round trip.",
      "Choosing on opening cost, which is the exact error Module 103 warned about."
    ]
  },

  homework: [
    "Take one commodity ETF and compare its three-year return against the spot commodity. Write two sentences explaining the gap.",
    "Find one producer's all-in sustaining cost and the current commodity price, and state the margin between them.",
    "Write one sentence on what allocated storage means and why unallocated is a different risk."
  ],

  quiz: [
    { q: "A commodity ETF has fallen over three years while the spot price is unchanged. The most likely cause:",
      options: [
        "Management fraud",
        "It holds futures and rolls them, so persistent contango has produced roll drag",
        "The fund is illiquid",
        "Currency effects only"
      ], a: 1,
      why: "This is Module 303's arithmetic arriving as a real-world disappointment. It is disclosed in every prospectus, and it is why checking what a fund actually holds takes precedence over its headline name." },

    { q: "Buying shares in a gold miner rather than gold means you have:",
      options: [
        "The same exposure, more conveniently",
        "A geared and impure version — operating leverage amplifies the metal move, but you also own management, debt, jurisdiction and equity market risk",
        "Less risk than holding the metal",
        "Exposure only to the metal price"
      ], a: 1,
      why: "Costs are largely fixed, so profits move more than the metal in both directions. But it is still an equity, so it falls in a market-wide sell-off even when gold does not." },

    { q: "All-in sustaining cost tells you:",
      options: [
        "The company's share price target",
        "What it actually costs to keep producing — the level at which a price fall becomes existential",
        "The dividend cover",
        "The cost of the futures roll"
      ], a: 1,
      why: "Below that level a producer loses money on every unit it sells. It is the single most useful number when judging how much commodity weakness a producer can absorb." },

    { q: "The difference between allocated and unallocated physical storage is:",
      options: [
        "Only the fee",
        "Whether specific units are yours, or you hold a claim on a pool — which becomes a solvency question if the custodian fails",
        "The purity of the metal",
        "Whether it is insured"
      ], a: 1,
      why: "It is the custody-versus-claim distinction from the crypto track, in a much older market. Unallocated makes you a creditor, exactly as an exchange balance does." },

    { q: "Which factor should decide your route into a commodity?",
      options: [
        "Whichever is cheapest to open",
        "Your holding period, and what each route actually exposes you to",
        "Conviction in the view",
        "Which has the tightest spread today"
      ], a: 1,
      why: "This is Module 103's CFD-versus-shares question asked about four routes instead of two, and the answer still comes from holding period. Opening cost is the trap." }
  ]
}

]);
