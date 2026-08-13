/* N1 Forex Academy — Module 303 (Futures track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 303 ============================ */
{
  id: 303,
  track: 'futures',
  title: "Expiry, Rollover and the Shape of the Curve",
  tagline: "Every contract dies on a known date. What that costs you depends on the shape of a curve nobody shows you on the chart.",
  level: "Derivatives",
  duration: "90 min",

  objectives: [
    "Explain what happens as a contract approaches expiry, and what you must do about it",
    "Roll a position from one contract month to the next, and account for what the roll cost",
    "Read a futures curve and say whether it is in contango or backwardation",
    "Explain why a long-held futures position can lose money while the underlying goes nowhere",
    "Explain why a continuous chart is a construction rather than a real price history"
  ],

  misconceptions: [
    "**\"I can hold a future indefinitely.\"** You cannot. Every contract has a last trading day, and holding through it either delivers goods or settles you out at a price you did not choose.",
    "**\"Rolling is free.\"** You sell one month and buy another at a different price. That difference is a real cost or gain, and over a year of rolls it can dwarf your trading.",
    "**\"Contango means the market expects higher prices.\"** It mostly reflects the cost of storing and financing the underlying until delivery. Reading it as a forecast is one of the most common errors in commodities.",
    "**\"The chart shows what the price did.\"** A continuous chart is stitched together from many expired contracts, using an adjustment method somebody chose. Two providers can show two different histories of the same market."
  ],

  glossary: [
    { t: "Expiry / last trading day", d: "The final day a contract trades. After it, the contract no longer exists." },
    { t: "First notice day", d: "The first day a holder of a physically-settled contract can be assigned delivery. Usually earlier than expiry." },
    { t: "Front month", d: "The nearest expiry, usually the most heavily traded and the one quoted in the news." },
    { t: "Back month", d: "Any later expiry. Typically thinner, with a wider spread." },
    { t: "Roll", d: "Closing the expiring contract and opening the equivalent in a later month, to keep the exposure." },
    { t: "Roll yield", d: "The gain or loss caused purely by rolling from one month to another. Can be positive or negative." },
    { t: "Contango", d: "Later months priced higher than nearer ones. Rolling a long position costs money." },
    { t: "Backwardation", d: "Later months priced lower than nearer ones. Rolling a long position gains money." },
    { t: "Cost of carry", d: "Storage, insurance and financing until delivery — the main reason a curve slopes upward." },
    { t: "Continuous chart", d: "A single price history stitched from successive contracts, using a chosen adjustment method." },
    { t: "Calendar spread", d: "Simultaneously long one month and short another, trading the difference rather than the direction." }
  ],

  slides: [
    { kicker: "The deadline",
      title: "Every contract has a death date",
      bullets: [
        "A future is an agreement **on a date**. When that date arrives, the contract stops existing.",
        "**Last trading day** is when it stops trading. **First notice day** — on physically-settled contracts — can be considerably earlier.",
        "Do nothing and one of two things happens: **cash settlement at a price you did not choose**, or **delivery you did not want**.",
        "**Brokers close retail positions before delivery**, but on their schedule and at their convenience, not yours.",
        "**Both dates are published years in advance.** Not knowing them is a choice."
      ],
      note: "Ties directly to the equities events policy in Module 105: holding through a known date deliberately is a decision; not knowing the date is negligence. Same principle, different calendar." },

    { kicker: "Rolling",
      title: "Keeping exposure past the deadline",
      bullets: [
        "To keep a position past expiry you **roll**: close the expiring month, open the same position in a later month.",
        "**The two contracts trade at different prices.** That difference is the cost or gain of rolling.",
        "Roll **before liquidity drains** from the expiring month — the last few days can have a punishing spread.",
        "**Roll cost is not a fee and appears on no statement.** It shows up as a slightly worse entry price in the new month.",
        "**Over a year of monthly rolls, this can exceed everything your trading decisions did.**"
      ],
      note: "The invisibility is the teaching point. Students hunt for commission differences of pennies while ignoring roll costs an order of magnitude larger, because one appears on a statement and the other does not." },

    { kicker: "The curve",
      title: "Contango and backwardation",
      bullets: [
        "Plot the price of each delivery month against its date and you get **the futures curve**.",
        "**Contango:** later months cost more. Mostly the **cost of carry** — storing, insuring and financing the goods until delivery.",
        "**Backwardation:** later months cost less. Usually means people want the goods *now* — a shortage, or a supply disruption.",
        "**A long position rolls badly in contango** (selling cheap, buying dear) **and well in backwardation**.",
        "**This is not a forecast.** An upward-sloping curve mostly reflects storage costs, not an expectation of higher prices."
      ],
      note: "The forecast misreading is worth attacking directly. Ask students what it costs to keep a barrel of oil for six months; once they can name storage, insurance and financing, contango stops looking like a prediction and starts looking like arithmetic." },

    { kicker: "The consequence",
      title: "Losing money in a flat market",
      bullets: [
        "Hold a long commodity future through a year of contango, rolling monthly, with the spot price **unchanged**.",
        "Each roll sells the cheaper expiring month and buys the dearer next one. **You lose a little every time.**",
        "**Result: a loss, on a market that did not move.** Nothing went wrong with your analysis; the structure took it.",
        "This is why some commodity funds **track their index poorly over long periods**, and it is disclosed in every prospectus.",
        "**Futures are a poor instrument for a long-term buy-and-hold view** on a market in persistent contango. Know that before you build a strategy on one."
      ],
      note: "This is the module's most valuable slide. It explains a whole category of real-world disappointment that beginners blame on manipulation. Make sure they can state the mechanism in a sentence before moving on." },

    { kicker: "Charts",
      title: "The continuous chart is a construction",
      bullets: [
        "No single contract has years of history — they all expire. So platforms **stitch expired contracts together**.",
        "At each join the two contracts had different prices, so the joint must be **adjusted** — and there are several methods.",
        "**Back-adjusted** charts shift old prices so the joins are smooth, which means **historical prices on the chart are not prices that ever traded**.",
        "**Consequence:** support and resistance levels from years back may be adjusted artefacts, and backtested results differ by provider.",
        "**Ask which method your platform uses.** For anything longer than a few months, this materially changes what you are looking at."
      ],
      note: "This is the futures equivalent of the repainting lesson in Module 8. Not dishonest, just constructed — and the student needs to know a construction when they are testing a strategy on one." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "That every contract expires, and that both key dates are published years ahead",
        "How to roll, when to roll, and why the cost never appears on a statement",
        "Contango and backwardation, and why the curve is mostly carry rather than forecast",
        "How a long position loses money in a flat market, and what that means for long-term views",
        "That the continuous chart is stitched and adjusted, and why that matters when testing"
      ],
      note: "The lab makes the roll cost concrete over twelve months. Students who compute it stop treating rolling as an administrative chore." }
  ],

  practical: {
    title: "Cost a year of rolls",
    time: "40 min",
    intro: "Roll cost is invisible on statements and frequently larger than every commission you will pay. The only way to believe it is to add it up.",
    setup: [
      "Choose one commodity future with a visibly sloped curve and one index future.",
      "Record the quoted price of the next six delivery months for each."
    ],
    steps: [
      { h: "Draw both curves", d: "Plot price against delivery month. State plainly whether each is in contango or backwardation, and by how much between consecutive months." },
      { h: "Cost one roll", d: "For a long position of one contract, compute the cash cost of rolling from the front month to the next, in money rather than points." },
      { h: "Extrapolate a year", d: "Assuming the shape persists, estimate the twelve-month cost of holding that long position purely through rolling." },
      { h: "Compare to commission", d: "Work out a year of commission on those same twelve round trips. Put the two numbers side by side." },
      { h: "State the flat-market outcome", d: "If spot is unchanged after a year, what is the profit or loss on the rolled position? Show the arithmetic." }
    ],
    deliverable: "Two curve sketches, a per-roll cost, an annualised roll cost, the equivalent annual commission, and one sentence stating what a flat year would have returned.",
    rubric: [
      { c: "Curve reading", d: "Correctly identifies contango or backwardation and quantifies the gap between months." },
      { c: "Money not points", d: "Roll cost expressed in cash using the correct contract size and tick value." },
      { c: "Proportion", d: "Explicitly compares roll cost against commission, and comments on which dominates." },
      { c: "Conclusion", d: "States the flat-market result plainly, including that it can be a loss." }
    ],
    pitfalls: [
      "Comparing months quoted in different units or contract sizes.",
      "Assuming the curve shape is constant — note it as an assumption rather than a fact.",
      "Ignoring the wider spread in back months, which understates the true roll cost.",
      "Reporting the roll cost in points, where it looks trivially small."
    ]
  },

  homework: [
    "Find the last trading day and first notice day for the front month of one physically-settled contract, and write down your broker's stated auto-close policy alongside them.",
    "Check whether your charting platform uses back-adjusted or unadjusted continuous contracts, and write one sentence on what that means for a level you drew from two years ago.",
    "Find one commodity fund's prospectus and locate the paragraph disclosing roll cost. Summarise it in your own words in two sentences."
  ],

  quiz: [
    { q: "You hold a long future and do nothing as expiry approaches. What happens?",
      options: [
        "The position rolls automatically at no cost",
        "It is either cash-settled at a price you did not choose, or you face delivery — and brokers usually close you out on their schedule",
        "It converts into the underlying at your entry price",
        "It remains open indefinitely"
      ], a: 1,
      why: "Every contract dies on a published date. Doing nothing hands the timing and the price to somebody else, and both dates were public years in advance." },

    { q: "A market is in contango. Rolling a long position:",
      options: [
        "Gains money, since later months are cheaper",
        "Costs money — you sell the cheaper expiring month and buy the dearer later one",
        "Has no cost, since it is one transaction",
        "Only costs money on physically-settled contracts"
      ], a: 1,
      why: "Contango means later months are dearer, so each roll sells low and buys high. That cost appears nowhere on a statement — it shows up as a worse entry price in the new month." },

    { q: "Spot price is unchanged after a year of monthly rolls in a contango market. Your rolled long position is:",
      options: ["Flat", "Down, because each roll cost money", "Up, from the carry", "Impossible to determine"],
      a: 1,
      why: "This is the key consequence. Nothing was wrong with the analysis — the structure took the money. It is why futures suit a long-term holding view poorly in persistent contango." },

    { q: "An upward-sloping futures curve mainly reflects:",
      options: [
        "The market forecasting higher prices",
        "The cost of storing, insuring and financing the underlying until delivery",
        "Manipulation by large participants",
        "Higher demand in later months"
      ], a: 1,
      why: "Contango is mostly carry, not forecast. Reading the curve as a prediction is among the commonest errors in commodities, and it leads people to hold positions that bleed." },

    { q: "Why should you know how your platform builds its continuous chart?",
      options: [
        "It changes the commission you pay",
        "Back-adjusted histories show prices that never actually traded, so old levels and backtests are affected",
        "It determines your margin requirement",
        "It affects which contracts you may trade"
      ], a: 1,
      why: "The stitching is a construction, not a record. Two providers can show two different histories of the same market — which matters enormously the moment you test a strategy on one." }
  ]
}

]);
