/* N1 Forex Academy — Module 301 (Futures track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 301 ============================ */
{
  id: 301,
  track: 'futures',
  title: "What a Futures Contract Actually Is",
  tagline: "An obligation with a date on it — standardised, exchange-traded, and guaranteed by someone who has never met you.",
  level: "Derivatives",
  duration: "75 min",

  objectives: [
    "Say what you have actually agreed to when you buy or sell a futures contract",
    "Explain what standardisation means and why it is what makes the market work",
    "Describe what the clearing house does, and why you never worry who is on the other side",
    "Tell the difference between a contract that settles in cash and one that settles in goods",
    "Explain how a futures position differs from the CFD you already know"
  ],

  misconceptions: [
    "**\"Futures are just leveraged bets.\"** They are *obligations with a date*. The leverage is a consequence of the margin system, not the point of the instrument. Farmers and airlines use these to remove risk, not to take it.",
    "**\"I might end up with a lorry of wheat.\"** Only if you hold a physically-settled contract into delivery, which retail brokers close out long before. But you must know which kind you hold — that is your job, not the broker's.",
    "**\"The counterparty might not pay.\"** Once the trade is done the clearing house stands between you and whoever took the other side. That is precisely what it is for, and it is the structural advantage futures have over an OTC product.",
    "**\"It is the same as a CFD.\"** A CFD is a private contract with your broker, priced off the market. A future is a standardised contract traded on an exchange with published volume and a central counterparty. The chart looks similar; the plumbing does not."
  ],

  glossary: [
    { t: "Futures contract", d: "A binding agreement to buy or sell a set quantity of something at a set price on a set date." },
    { t: "Long / short", d: "Long means you have agreed to buy at the agreed price; short means you have agreed to sell. Both are obligations." },
    { t: "Standardisation", d: "The exchange fixes quantity, quality and delivery date, so only the price is negotiated." },
    { t: "Contract size", d: "How much of the underlying one contract represents. Fixed by the exchange, and often larger than beginners expect." },
    { t: "Tick / tick value", d: "The smallest price increment, and what that increment is worth per contract. The futures equivalent of a pip." },
    { t: "Clearing house", d: "The central counterparty that steps between buyer and seller once a trade is agreed, guaranteeing both sides." },
    { t: "Novation", d: "The moment the clearing house replaces the original counterparties, so each side now faces the clearer instead of a stranger." },
    { t: "Cash settlement", d: "Settling the difference in money at expiry. Index and rate futures work this way." },
    { t: "Physical delivery", d: "Actually delivering the goods at expiry. Some commodity contracts work this way." },
    { t: "Open interest", d: "The number of contracts currently outstanding. Unlike volume, it tells you whether positions are being opened or closed." },
    { t: "Underlying", d: "The thing the contract is written on — an index, a barrel of oil, a currency, a bond." }
  ],

  slides: [
    { kicker: "The instrument",
      title: "An agreement with a date on it",
      bullets: [
        "A futures contract is **a binding agreement to buy or sell a set quantity of something, at a price agreed now, on a date in the future**.",
        "**Buy (long):** you have agreed to *take* delivery at that price. **Sell (short):** you have agreed to *make* delivery.",
        "**Both sides are obligations.** Neither party has a choice later — that is the whole difference from an option, which is Module 401.",
        "No money changes hands for the goods today. You post **margin** as a performance bond, which is Module 302.",
        "**This existed long before speculation.** A farmer fixing a price for a harvest that has not grown yet is the original use, and it is still the main one."
      ],
      note: "Students arrive believing futures are an exotic gambling instrument. Opening with the farmer resets that: this is the oldest risk-transfer tool in finance, and the speculator exists to take the other side of the hedge. If they leave believing only that, the module has done its job." },

    { kicker: "Standardisation",
      title: "Only the price is negotiable",
      bullets: [
        "The exchange fixes **everything except the price**: quantity, quality, delivery month, delivery location, tick size.",
        "One contract of a given type is **identical to every other**, which is what makes them tradeable at all.",
        "**Contract sizes are often large.** One crude oil contract is 1,000 barrels; one E-mini S&P is 50 × the index. Check before you assume.",
        "**Tick value is the pip value of this world.** Smallest price move × contract size = what one tick costs you.",
        "**Micro contracts exist** on many products — a tenth of the standard size. For a small account they are frequently the only sensible choice."
      ],
      note: "Have the student look up the contract specification for one product before the lab. The specification page is public on every exchange, and the habit of reading it before trading is the single most useful thing in this module." },

    { kicker: "The clearing house",
      title: "Why you never ask who is on the other side",
      bullets: [
        "In an ordinary private contract, you carry the risk that the other party does not pay.",
        "On a futures exchange, the moment a trade is agreed the **clearing house steps in between**. You now face the clearer; so does the seller.",
        "That substitution is called **novation**, and it means **the person you traded with becomes irrelevant to you**.",
        "The clearer protects itself with **margin from both sides, daily settlement, and a default fund** — Module 302.",
        "**This is the structural advantage over an OTC product.** A CFD leaves you facing your broker; a future leaves you facing the market's central counterparty."
      ],
      note: "Tie this straight back to Module 4's broker section. There the question was 'can I get my money out?' — a question about one firm's solvency. Here that question is largely answered by the market's structure rather than by your choice of broker." },

    { kicker: "Settlement",
      title: "Cash, or actual goods",
      bullets: [
        "**Cash settled:** at expiry the difference is settled in money. Index futures, rate futures, most financial products.",
        "**Physically settled:** at expiry the goods actually change hands. Many commodity contracts, including crude oil.",
        "**Retail brokers close physically-settled positions before delivery**, often days ahead, sometimes without much warning.",
        "**But knowing which type you hold is your responsibility.** The specification says so plainly and takes a minute to read.",
        "**The famous 'lorry of wheat' story is mostly myth** — and the reason it is a myth is that people check. Be one of them."
      ],
      note: "Do not let this become the comedy slide. The real lesson is procedural: read the specification, know your first notice day, and know your broker's auto-close policy. Those three facts prevent every version of this problem." },

    { kicker: "Comparison",
      title: "A future is not a CFD",
      bullets: [
        "**CFD:** a private contract with your broker. Your broker sets the price, may take the other side, and is your counterparty.",
        "**Future:** a standardised contract on an exchange, with one visible order book, published volume, and a central counterparty.",
        "**Costs differ in shape.** CFDs charge a spread and nightly financing. Futures charge commission and exchange fees, with financing built into the price of later months — Module 303.",
        "**Futures have an expiry.** A CFD can be held indefinitely; a future cannot, and pretending otherwise causes the rollover problems in Module 303.",
        "**The chart looks nearly identical. The plumbing is completely different**, and the plumbing is what decides what happens when things go wrong."
      ],
      note: "The student has traded CFDs in the equities track, so this comparison lands. Emphasise that neither is superior in the abstract — CFDs are more flexible in size and duration, futures are more transparent and better capitalised. The choice is about which trade-offs suit the job." },

    { kicker: "Open interest",
      title: "A number the other markets could not give you",
      bullets: [
        "**Volume** tells you how many contracts changed hands. **Open interest** tells you how many are still outstanding.",
        "Rising price with **rising open interest** suggests new money entering — the move has participation behind it.",
        "Rising price with **falling open interest** suggests shorts closing out — a squeeze, which can end abruptly.",
        "**This is genuinely new information**, and forex could never give it to you because there is no central register of positions.",
        "**Treat it as context, not a signal.** It describes participation; it does not predict direction."
      ],
      note: "Resist letting students turn open interest into a trading system. It belongs in the same category as credit spreads in Module 204: excellent context, poor trigger. If they want a rule, the honest one is 'be more sceptical of a rally on falling open interest'." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "What you have actually agreed to when you go long or short a future",
        "Why standardisation is what makes the contract tradeable, and where to read the specification",
        "What the clearing house does, and why the person on the other side stops mattering",
        "The difference between cash and physical settlement, and whose job it is to know",
        "How a future differs from the CFD you already traded, in plumbing rather than in chart"
      ],
      note: "Before Module 302, have the student pull up one contract specification and read out the contract size, tick value, settlement type and expiry schedule. Everything in the rest of the track assumes they can find that page." }
  ],

  practical: {
    title: "Read a contract specification before you ever trade it",
    time: "30 min",
    intro: "Every exchange publishes a full specification for every contract, free, in public. Almost nobody reads it, which is why almost everybody is surprised by something. This lab is the habit, not the knowledge.",
    setup: [
      "Pick three contracts on different underlyings — say a stock index, a commodity, and a currency.",
      "Find each one's specification page on the exchange's own site, not a broker's summary."
    ],
    steps: [
      { h: "Record the size", d: "For each contract, write down the contract size and what one tick is worth in money. Then work out what a 1% move in the underlying does to one contract." },
      { h: "Record the settlement", d: "Cash or physical? If physical, find the first notice day and the last trading day. Write both down." },
      { h: "Record the schedule", d: "Which delivery months are listed, and which is currently the most actively traded? Note that the front month is not always the busiest." },
      { h: "Find the micro version", d: "Check whether a micro or mini contract exists for each. Record its size relative to the standard one." },
      { h: "Compare to your account", d: "For each contract, work out what one contract's 1% move is as a percentage of a £5,000 account. Some will be alarming. That is the finding." }
    ],
    deliverable: "A one-page table: three contracts, with size, tick value, settlement type, notice dates, available micro version, and what a 1% underlying move costs as a percentage of a £5,000 account.",
    rubric: [
      { c: "Sourcing", d: "Figures taken from the exchange specification rather than a broker's marketing summary." },
      { c: "Tick arithmetic", d: "Tick value correctly converted into the cost of a 1% underlying move." },
      { c: "Settlement literacy", d: "Correctly identifies settlement type and, where physical, records first notice and last trading day." },
      { c: "Honest scaling", d: "States plainly which of the three contracts are too large for a £5,000 account, rather than rounding the problem away." }
    ],
    pitfalls: [
      "Using a broker's summary page, which often omits notice dates entirely.",
      "Confusing tick size with tick value — one is a price increment, the other is money.",
      "Assuming the micro contract has the same tick value as the standard one.",
      "Skipping the last step, which is the only one that connects the specification to their own account."
    ]
  },

  homework: [
    "Pick one physically-settled contract and write, in one sentence each, what would happen if you held it through first notice day and what your broker's policy actually says about that.",
    "Find the current open interest for the front month and the next month of one index future. Which is larger, and what does that tell you about where the active market is?",
    "Write two sentences comparing the total cost of holding one micro index future for a month against the equivalent CFD exposure, including financing."
  ],

  quiz: [
    { q: "You buy one futures contract. What have you agreed to?",
      options: [
        "The right to buy at that price if you choose",
        "An obligation to buy the set quantity at the agreed price on the agreed date",
        "A bet on the price with your broker",
        "Ownership of the underlying today"
      ], a: 1,
      why: "Both sides of a future are obligations. The right to choose is an option, which is a different instrument entirely — that is Module 401." },

    { q: "What does the clearing house do?",
      options: [
        "Sets the price of each contract",
        "Steps between buyer and seller after the trade, so each faces the clearer rather than a stranger",
        "Guarantees you will not lose money",
        "Chooses which contracts you may trade"
      ], a: 1,
      why: "That substitution is novation, and it is why you never need to ask who took the other side. It guarantees settlement, not profit." },

    { q: "The main structural difference between a future and a CFD is:",
      options: [
        "Futures charts move differently",
        "A CFD is a private contract with your broker; a future is standardised, exchange-traded and centrally cleared",
        "CFDs cannot be shorted",
        "Futures have no costs"
      ], a: 1,
      why: "The charts look nearly identical. The plumbing decides what happens when something goes wrong, and that is where they diverge completely." },

    { q: "A crude oil contract is 1,000 barrels. Oil moves $1. Your one contract moves:",
      options: ["$1", "$100", "$1,000", "$10,000"],
      a: 2,
      why: "$1 × 1,000 barrels = $1,000 per contract. Contract sizes are frequently larger than beginners expect, which is exactly why the specification is the first thing to read." },

    { q: "Price is rising while open interest falls. The most reasonable reading is:",
      options: [
        "New buyers are entering aggressively",
        "Existing short positions are closing out — a squeeze rather than fresh conviction",
        "The data is wrong",
        "The contract is about to expire"
      ], a: 1,
      why: "Falling open interest means contracts are being closed, not opened. A rally driven by forced closing can end as abruptly as it began. Context, not a signal." }
  ]
}

]);
