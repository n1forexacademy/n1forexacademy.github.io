/* N1 Forex Academy — Module 401 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 401 ============================ */
{
  id: 401,
  track: 'options',
  title: "The Right, Not the Obligation",
  tagline: "One side gets to choose. Everything else about options follows from that single asymmetry.",
  level: "Derivatives",
  duration: "90 min",

  objectives: [
    "State what the buyer of an option owns and what the seller has taken on",
    "Name the four terms that define any option contract",
    "Explain why the buyer pays a premium, and what the seller is being paid for",
    "Describe the payoff of a bought option and of a sold one, in both directions",
    "Explain why buying and selling options are not mirror images of each other"
  ],

  misconceptions: [
    "**\"An option is just a cheaper way to take a position.\"** It is a different exposure. Your directional view can be exactly right and the option can still expire worthless, because you were also wrong about *when* — which is Module 403.",
    "**\"Selling options is safer because most expire worthless.\"** Selling wins often and loses large. That is the martingale return shape from Module 10, reached by a respectable route, and it ends people who size for the calm periods.",
    "**\"Buying is limited risk, so it is the safe side.\"** Limited risk is not small risk. Buying options repeatedly can lose 100% of what you spend, again and again, while every individual loss is technically capped.",
    "**\"A call and a short put are the same trade.\"** Both profit from a rise. One has capped loss and unlimited upside; the other has capped gain and enormous downside. They are opposite shapes wearing the same direction."
  ],

  glossary: [
    { t: "Option", d: "A contract giving the buyer the right, but not the obligation, to buy or sell the underlying at a set price by a set date." },
    { t: "Call", d: "The right to BUY the underlying at the strike price." },
    { t: "Put", d: "The right to SELL the underlying at the strike price." },
    { t: "Strike price", d: "The price at which the option can be exercised. Fixed when the contract is created." },
    { t: "Expiry", d: "The date the right ends. After it, the contract is worth nothing." },
    { t: "Premium", d: "The price paid by the buyer to the seller for the right. Paid up front, and non-refundable." },
    { t: "Writer / seller", d: "The party who sold the option and took on the obligation. They keep the premium whatever happens." },
    { t: "Exercise", d: "The buyer choosing to use their right." },
    { t: "Assignment", d: "The seller being required to fulfil the obligation because a buyer exercised." },
    { t: "Contract multiplier", d: "How much underlying one option covers. Equity options typically cover 100 shares." },
    { t: "Expire worthless", d: "The option reaching expiry with no value, so the buyer loses the whole premium and the seller keeps it." }
  ],

  slides: [
    { kicker: "The instrument",
      title: "One side gets to choose",
      bullets: [
        "In Module 301, **both sides of a future were obligations**. Neither party could change their mind.",
        "**An option breaks that symmetry.** The buyer gets a *right*; the seller takes on an *obligation*.",
        "**Four terms define it:** call or put, the **strike price**, the **expiry date**, and the **premium**.",
        "**Call** = the right to buy at the strike. **Put** = the right to sell at the strike.",
        "**Everything else in this track follows from that asymmetry.** Pricing, time decay, volatility, the greeks — all of it exists because one side has a choice and the other does not."
      ],
      note: "Open by contrasting with futures explicitly, because the student has just spent five modules on obligations. The word 'right' is the whole module. If they leave able to say who chooses and who must, the rest of the track has somewhere to attach." },

    { kicker: "Why pay",
      title: "The premium is the price of the choice",
      bullets: [
        "A right that costs nothing would be free money, so the buyer pays a **premium** up front.",
        "**The premium is non-refundable.** It is spent the moment the trade is done, whatever happens afterwards.",
        "**The seller keeps it in every scenario.** That is their entire compensation for taking on an open-ended obligation.",
        "It is **insurance, structurally**: the buyer pays a known amount to remove an unknown risk; the seller collects that amount and carries the risk.",
        "**Which tells you who is comfortable on each side.** Insurers are well capitalised and diversified for a reason."
      ],
      note: "The insurance framing does more work than any diagram. It explains the premium, the asymmetry of outcomes, why sellers need capital, and why 'most policies never claim' is a terrible argument for underwriting without reserves." },

    { kicker: "Payoff",
      title: "What a bought call actually does",
      bullets: [
        "Buy a call at strike 100 for a premium of 5. Your total outlay is 5, and that is the **most you can lose**.",
        "**Underlying at 95 at expiry:** the right to buy at 100 is worthless. You lose the 5. **Loss capped.**",
        "**Underlying at 103:** the right is worth 3. You still lose 2 overall — **being right is not enough**.",
        "**Underlying at 105:** worth 5. You break even.",
        "**Underlying at 130:** worth 30. You made 25 on an outlay of 5. **Gain uncapped.**",
        "**Small capped loss, large uncapped gain — and it needs a big enough move to clear the premium.**"
      ],
      note: "The 103 case is the one to dwell on. Students consistently assume that a correct direction means a profit. The break-even is strike plus premium, and that gap is where most beginner option buyers actually lose." },

    { kicker: "The other side",
      title: "What the seller signed up for",
      bullets: [
        "The seller of that call received 5, and that is the **most they can ever make**.",
        "**Underlying at 95:** the option expires worthless. They keep 5. **A win, and it happens often.**",
        "**Underlying at 130:** they must deliver at 100 something worth 130. **They lose 25**, having been paid 5.",
        "**Underlying at 300:** they lose 195. There is no upper bound on a sold call.",
        "**Capped gain, uncapped loss** — the exact mirror of the buyer.",
        "**This is why selling options is not the safe side.** It is the frequently-right side, which is a different thing."
      ],
      note: "Return to the Module 10 martingale shape here by name. Many small wins then one enormous loss is a profile the student has already been taught to distrust; naming the resemblance transfers the caution intact." },

    { kicker: "Not mirrors",
      title: "A call is not a short put",
      bullets: [
        "**Both a long call and a short put profit if the underlying rises.** Same direction, completely different shape.",
        "**Long call:** loss capped at the premium, gain unlimited. You pay to be there.",
        "**Short put:** gain capped at the premium, loss very large if the underlying collapses. You are paid to be there.",
        "Choosing between them is **not a directional decision** — it is a decision about which risk shape you want.",
        "**Direction is the smallest part of an options decision.** That is the hardest adjustment coming from the earlier tracks."
      ],
      note: "This slide reframes what an options trade even is. In four previous tracks, picking a direction was most of the work. Here it is one of four decisions — direction, size of move, timing, and volatility — and Modules 403 and 404 supply the rest." },

    { kicker: "Practicalities",
      title: "Multipliers, exercise and assignment",
      bullets: [
        "**One equity option usually covers 100 shares.** A premium quoted at 2.50 costs 250 per contract.",
        "**That multiplier catches people constantly.** Check it before you assume a quoted price is what you pay.",
        "**Exercise** is the buyer using their right. **Assignment** is the seller being made to fulfil it.",
        "**Sellers do not control when they are assigned.** It can arrive early on some option styles, and at the worst moment on any.",
        "**Most positions are closed by trading out**, not by exercise — but the possibility is what defines the risk."
      ],
      note: "The multiplier error is genuinely common and genuinely expensive. Have the student compute the cash cost of three real option quotes before Module 402; it takes two minutes and prevents a whole category of surprise." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "Who holds the right and who holds the obligation, and what each is paid or pays",
        "The four terms that define any option",
        "The payoff of a bought call in all four regions, including where being right still loses",
        "Why selling is the frequently-right side rather than the safe side",
        "Why a long call and a short put are opposite shapes sharing a direction"
      ],
      note: "Before Module 402, the student should be able to draw a long call payoff freehand and mark break-even without prompting. If they cannot, do not proceed — the four basic positions will not land." }
  ],

  practical: {
    title: "Draw all four payoffs and find every break-even",
    time: "45 min",
    intro: "Options are the one instrument where a drawing genuinely beats a paragraph. You will draw the four basic positions by hand and mark exactly where each one turns profitable.",
    setup: [
      "Take a single underlying priced at 100.",
      "Use a strike of 100 and a premium of 5 for every position, so the four drawings are comparable."
    ],
    steps: [
      { h: "Long call", d: "Draw profit and loss against underlying price from 70 to 130. Mark maximum loss, break-even, and the direction of the unbounded end." },
      { h: "Long put", d: "Same axes. Mark maximum loss, break-even, and the maximum possible gain — note that a put's upside is bounded, because the underlying cannot go below zero." },
      { h: "Short call", d: "Draw the exact mirror of your long call. Mark maximum gain and state what bounds the loss." },
      { h: "Short put", d: "Mirror the long put. Mark maximum gain and the worst case." },
      { h: "Tabulate", d: "Build a four-row table: position, maximum gain, maximum loss, break-even price, and the direction you need the underlying to move." }
    ],
    deliverable: "Four hand-drawn payoff diagrams on identical axes, plus a four-row table of maximum gain, maximum loss, break-even, and required direction.",
    rubric: [
      { c: "Break-evens", d: "Correctly computes strike plus premium for calls and strike minus premium for puts, rather than using the strike itself." },
      { c: "Boundedness", d: "States correctly which ends are unbounded, and notes that a put's gain is bounded by the underlying reaching zero." },
      { c: "Mirroring", d: "Short positions are exact reflections of the corresponding long positions." },
      { c: "Insight", d: "Table makes plain that long call and short put share a direction while having opposite risk shapes." }
    ],
    pitfalls: [
      "Using the strike as break-even and forgetting the premium.",
      "Drawing an unbounded gain on a long put, which cannot happen.",
      "Ignoring the multiplier when converting a premium into cash.",
      "Treating the short positions as merely 'the opposite bet' rather than drawing them."
    ]
  },

  homework: [
    "Find three real option quotes on one underlying and compute the actual cash cost of one contract of each, applying the multiplier.",
    "For one of them, write down the exact underlying price at which you break even at expiry, and how far that is from today's price in percentage terms.",
    "Write two sentences on why an insurer holds capital, and what the equivalent is for someone selling options."
  ],

  quiz: [
    { q: "You buy a call option. What do you own?",
      options: [
        "An obligation to buy at the strike price",
        "The right, but not the obligation, to buy at the strike price by expiry",
        "The underlying shares",
        "A guarantee against loss"
      ], a: 1,
      why: "The buyer holds a right and can walk away. That asymmetry is the entire instrument — the seller took on the matching obligation and was paid the premium for it." },

    { q: "You buy a call, strike 100, premium 5. At expiry the underlying is 103. Your result:",
      options: [
        "A profit of 3, since you were right about direction",
        "A loss of 2 — the option is worth 3 but you paid 5",
        "Break even",
        "A loss of 5"
      ], a: 1,
      why: "Break-even is strike plus premium, so 105. Being right about direction is not enough — you must be right by more than the premium. That gap is where most beginner option buyers lose." },

    { q: "Why is selling options not simply 'the safe side'?",
      options: [
        "Because most options expire worthless",
        "Because the gain is capped at the premium while the loss can be very large — many small wins then one enormous loss",
        "Because sellers pay more commission",
        "Because sellers cannot close early"
      ], a: 1,
      why: "That is the martingale return shape from Module 10, reached by a respectable route. Selling is the frequently-right side, which is a completely different thing from the safe side." },

    { q: "A long call and a short put both profit when the underlying rises. The key difference is:",
      options: [
        "There is none — they are equivalent",
        "The call has capped loss and unlimited gain; the short put has capped gain and very large potential loss",
        "The call expires sooner",
        "The short put cannot be closed early"
      ], a: 1,
      why: "Same direction, opposite risk shapes. Choosing between them is not a directional decision, which is the hardest adjustment coming from the earlier tracks." },

    { q: "An equity option is quoted at 2.50 with a multiplier of 100. One contract costs:",
      options: ["2.50", "25", "250", "2,500"],
      a: 2,
      why: "2.50 × 100 = 250. The multiplier catches people constantly, and it is the difference between a position you intended and one four hundred times larger than you thought." }
  ]
}

]);
