/* N1 Forex Academy — Module 601 (Commodities track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 601 ============================ */
{
  id: 601,
  track: 'commodities',
  title: "What a Commodity Actually Is",
  tagline: "The only thing in this course that has to be dug up, grown, shipped and stored — and every one of those verbs costs money.",
  level: "Physical Markets",
  duration: "75 min",

  objectives: [
    "Say what makes something a commodity, and why grade and location matter",
    "Explain why storage and transport sit inside the price rather than beside it",
    "Distinguish spot from futures pricing and say which one you can actually trade",
    "Explain why a commodity has no earnings, no dividend and no book value",
    "Say what you would actually be exposed to before choosing how to get exposure"
  ],

  misconceptions: [
    "**\"Oil is oil.\"** There are dozens of grades from different fields, priced differently, and a contract specifies exactly one of them at exactly one delivery point. Buying 'oil' is not a thing you can do.",
    "**\"The price on the news is the price I can trade.\"** That headline is usually a specific futures contract for a specific delivery month. Spot exists but is mostly inaccessible to anyone without a tank.",
    "**\"Commodities are a good long-term hold.\"** They generate nothing. A share has earnings and a bond has coupons; a barrel of oil sits there costing you storage — Module 303's contango, arriving as a fundamental rather than a technicality.",
    "**\"Scarcity means the price must rise.\"** High prices call forth supply and destroy demand, usually within a couple of years. Commodity markets are more self-correcting than almost any other."
  ],

  glossary: [
    { t: "Commodity", d: "A raw material traded in standardised units, where one unit of a given grade is interchangeable with another." },
    { t: "Grade / quality spec", d: "The precise standard a contract requires — sulphur content, moisture, purity. Different grades trade at different prices." },
    { t: "Delivery point", d: "Where the goods must physically change hands. Location is part of the price, not an afterthought." },
    { t: "Spot price", d: "The price for immediate delivery of physical goods. Real, and mostly inaccessible to retail." },
    { t: "Cost of carry", d: "Storage, insurance and financing until delivery. The main reason a futures curve slopes upward." },
    { t: "Convenience yield", d: "The premium someone pays to have the physical goods NOW rather than later. What drives backwardation." },
    { t: "Inventory", d: "How much is currently in storage. Published for many commodities, and one of the few genuinely useful datasets." },
    { t: "Producer / consumer", d: "The two commercial sides — someone who digs it up or grows it, and someone who needs it as an input." },
    { t: "Substitution", d: "Buyers switching to a cheaper alternative when a price rises. The mechanism that caps most commodity rallies." },
    { t: "Elasticity", d: "How much supply or demand responds to price. Low in the short run, much higher over years." }
  ],

  slides: [
    { kicker: "The instrument",
      title: "Standardised, but only within a grade",
      bullets: [
        "A commodity is a raw material traded in standardised units, **where one unit of a given grade is interchangeable with another**.",
        "**That last clause carries all the weight.** There is no such thing as 'oil' — there are dozens of grades from different fields with different chemistry.",
        "A contract specifies **one grade, one delivery point, one delivery window.** Change any of those and you have a different price.",
        "**Location is part of the price.** The same grade sitting in the wrong place is worth less, because moving it costs money.",
        "**This is why basis risk from Module 304 is unavoidable here.** Your exposure is rarely the exact grade at the exact point the contract names."
      ],
      note: "Students arrive thinking of commodities as simpler than shares — one product, one price. The opposite is true: a share of a company is genuinely fungible; a barrel is not, and the difference between grades and locations is where most real commodity trading happens." },

    { kicker: "The cost",
      title: "It has to sit somewhere, and that costs money",
      bullets: [
        "Every other instrument in this course costs nothing to hold. **A commodity has to be stored, insured and financed.**",
        "That is **cost of carry**, and it is the main reason later delivery months usually cost more — Module 303's contango.",
        "**So the upward slope is a warehouse invoice, not a forecast.** You met this as a technicality; here it is the fundamental.",
        "Occasionally it inverts. When people need the goods **now** — a shortage, a disrupted pipeline — they pay a premium for immediate delivery.",
        "**That premium is the convenience yield**, and it is what puts a market into backwardation."
      ],
      note: "Naming convenience yield gives students the mechanism behind backwardation, which Module 303 described but did not explain. Physical urgency is the cause; the curve shape is the symptom." },

    { kicker: "No income",
      title: "It generates nothing, ever",
      bullets: [
        "A share has **earnings**. A bond pays a **coupon**. A currency pays an **interest differential**.",
        "**A commodity produces nothing at all.** A tonne of copper next year is still a tonne of copper.",
        "**Your entire return has to come from price**, and holding it through futures costs carry — Module 303's arithmetic, as a structural feature.",
        "**Which is why 'buy and hold a commodity' is a much weaker idea than it sounds**, and why long-only commodity funds have historically disappointed.",
        "**Say this plainly to yourself before any commodity trade: what will make this worth more than the carry I am paying?**"
      ],
      note: "This is the module's central discipline and it maps onto the equity thesis rule in Module 108. The bar is higher here, because a share can grow into a valuation and a barrel cannot." },

    { kicker: "Self-correction",
      title: "High prices are the cure for high prices",
      bullets: [
        "A high price does two things at once: it makes **more supply worth producing**, and it makes buyers **look for substitutes**.",
        "Both take time — mines and fields cannot respond in a week — but over a couple of years both are powerful.",
        "**Low prices do the reverse.** Production shuts in, and cheap inputs get used more.",
        "**This is why commodity prices tend to be cyclical rather than trending**, and why the scarcity argument almost never plays out as stated.",
        "**Elasticity is low in the short run and high in the long run.** Almost every commodity mistake lives in that gap."
      ],
      note: "The cure-for-high-prices framing is the single most useful mental model in commodities and it explains why long-term scarcity theses so reliably disappoint. Make sure students can state both halves — supply response and demand substitution." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "That a contract names one grade, one place and one window — and all three are price",
        "Why storage and financing sit inside the curve rather than beside it",
        "Why a commodity generates nothing, and what that demands of a thesis",
        "Why high prices are self-correcting, and where the short-run/long-run gap sits",
        "That your real exposure is rarely the exact thing the contract names"
      ],
      note: "Module 602 covers what actually moves these prices week to week, which is inventory and weather far more than narrative." }
  ],

  practical: {
    title: "Read one contract specification as a physical thing",
    time: "35 min",
    intro: "You read a futures specification for size and tick value in Module 301. Read one again for what it physically is.",
    setup: [
      "Choose one energy contract and one agricultural contract.",
      "Use the exchange's own specification page."
    ],
    steps: [
      { h: "Name the grade", d: "Write down the exact quality standard each contract requires. Note at least two properties that would disqualify a delivery." },
      { h: "Name the place", d: "Record the delivery point or points. Find out roughly what it would cost to move the goods there from somewhere else, or state that you could not find out." },
      { h: "Find the storage cost", d: "For the energy contract, find or estimate the monthly storage cost per unit. Compare it to the gap between two consecutive delivery months." },
      { h: "Check the curve", d: "Record six delivery months. State whether the market is in contango or backwardation and whether the slope roughly matches the carry cost you found." },
      { h: "State the mismatch", d: "Name one real-world exposure this contract would hedge imperfectly, and say exactly where the basis risk sits." }
    ],
    deliverable: "A one-page note per contract: grade standard, delivery point, estimated carry, curve shape, whether slope matches carry, and one named basis mismatch.",
    rubric: [
      { c: "Physical literacy", d: "Names actual quality properties rather than describing the contract generically." },
      { c: "Carry against slope", d: "Compares estimated storage cost to the observed month-to-month gap, and comments on the fit." },
      { c: "Basis honesty", d: "Names a specific real exposure and the specific reason the contract does not match it." },
      { c: "Sourcing", d: "Specification figures taken from the exchange, with any estimates labelled as estimates." }
    ],
    pitfalls: [
      "Describing the contract in financial terms only, which skips the entire point of the lab.",
      "Assuming the curve slope must equal carry exactly — note the gap rather than forcing it.",
      "Treating an unfindable figure as zero instead of saying it could not be found."
    ]
  },

  homework: [
    "Find two grades of the same commodity trading at different prices today, and write one sentence on why the difference exists.",
    "Find one commodity currently in backwardation and write two sentences on what physical situation might explain it.",
    "Write one sentence stating what would have to happen for a commodity you follow to be worth more in two years than the carry cost of holding it."
  ],

  quiz: [
    { q: "A futures contract on crude oil specifies:",
      options: [
        "Any crude oil, anywhere",
        "One grade, at one delivery point, in one delivery window — all three are part of the price",
        "Only the quantity",
        "The average of global prices"
      ], a: 1,
      why: "There is no such thing as 'oil' as a tradeable object. Grade, location and timing are all specified, and that specificity is exactly what creates the basis risk from Module 304." },

    { q: "Why do later delivery months usually cost more?",
      options: [
        "The market expects higher prices",
        "Cost of carry — storage, insurance and financing until delivery",
        "Later contracts are less liquid",
        "Exchanges charge more for them"
      ], a: 1,
      why: "It is a warehouse invoice, not a forecast. You met contango as a technicality in Module 303; in commodities it is the fundamental fact of the instrument." },

    { q: "What puts a commodity market into backwardation?",
      options: [
        "Expectations of falling prices",
        "Convenience yield — people paying a premium to have the physical goods now, usually from a shortage or disruption",
        "High storage costs",
        "Low trading volume"
      ], a: 1,
      why: "Physical urgency is the cause and the inverted curve is the symptom. Someone with a refinery to run will pay up for a cargo this week." },

    { q: "Compared with a share or a bond, a commodity:",
      options: [
        "Generates a small yield",
        "Generates nothing at all, so the entire return must come from price while carry runs against you",
        "Pays a dividend in kind",
        "Has a book value"
      ], a: 1,
      why: "A tonne of copper next year is still a tonne of copper. That is why long-only commodity holding is a much weaker idea than it sounds and why the thesis bar is higher here." },

    { q: "A commodity price has risen sharply on a scarcity story. What usually follows over a few years?",
      options: [
        "Prices continue rising as scarcity worsens",
        "Supply increases and buyers substitute away — high prices are the cure for high prices",
        "Nothing changes",
        "Governments fix the price"
      ], a: 1,
      why: "Elasticity is low in the short run and high in the long run. Almost every commodity mistake lives in that gap, and the scarcity thesis is the commonest version of it." }
  ]
}

]);
