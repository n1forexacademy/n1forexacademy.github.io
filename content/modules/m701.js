/* N1 Forex Academy — Module 701 (Spread Betting track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 701 ============================ */
{
  id: 701,
  track: 'spreadbet',
  title: "A Wrapper, Not a Market",
  tagline: "Spread betting is not an asset class. It is a different container for markets you already understand — and the container changes the arithmetic without changing the risk.",
  level: "Wrappers",
  duration: "70 min",

  objectives: [
    "Explain what a spread bet actually is and who your counterparty is",
    "Convert between stake per point and the position sizes you already know",
    "Explain why the wrapper changes the arithmetic but not the underlying risk",
    "Say where spread betting is available and why that matters",
    "Compare a spread bet with a CFD and with owning the underlying"
  ],

  misconceptions: [
    "**\"Spread betting is a separate market.\"** It is a wrapper around markets you have already studied. The underlying is still a currency pair, a share, an index or a commodity, and everything you learned about them still applies.",
    "**\"Stake per point is simpler than lots.\"** It is more intuitive and it hides the position size. £10 a point on an index at 8,000 is roughly £80,000 of exposure, and nothing on the ticket says so.",
    "**\"No commission means it is cheap.\"** The cost is in the spread, exactly as with the commission-free broker in Module 4. It has not gone away; it has moved somewhere less visible.",
    "**\"It is not real trading.\"** The money is entirely real. The name is a legal and tax classification, not a description of the seriousness of the losses."
  ],

  glossary: [
    { t: "Spread bet", d: "A bet on the price movement of an underlying market, settled in cash, sized as an amount per point of movement." },
    { t: "Stake per point", d: "How much you win or lose for each point the price moves. The spread-betting equivalent of position size." },
    { t: "Point", d: "One unit of price movement, defined by the provider for each market. Check it — it is not always what you assume." },
    { t: "Underlying", d: "The real market being tracked — a pair, a share, an index, a commodity." },
    { t: "Provider", d: "The firm you are betting with. They are your counterparty, exactly as a CFD broker is." },
    { t: "Notional exposure", d: "Stake per point × the price level, roughly. What you actually control." },
    { t: "Daily funded bet", d: "A rolling position charged financing each night, like a CFD." },
    { t: "Quarterly / forward bet", d: "A position with an expiry, with financing built into a wider spread instead of charged nightly." }
  ],

  slides: [
    { kicker: "What it is",
      title: "A container, not a new market",
      bullets: [
        "A spread bet is **a bet on the price movement of a market you already understand**, settled in cash.",
        "**The underlying is unchanged.** A bet on an index is still a bet on that index, driven by everything Module 106 described.",
        "**So every track you have completed still applies in full.** Nothing here replaces the analysis; the wrapper only changes how the position is expressed and taxed.",
        "**Sizing is in stake per point** rather than lots, shares or contracts.",
        "**Available in some jurisdictions and not others.** Predominantly a UK and Irish product; many countries do not permit it at all."
      ],
      note: "Establish immediately that this is a short track about a wrapper, not a seventh asset class. Students who think they are learning a new market will look for new analysis and find none, because there is none." },

    { kicker: "Sizing",
      title: "Stake per point hides the position",
      bullets: [
        "**You bet an amount per point.** £2 a point means every point of movement is £2 to you.",
        "It feels intuitive, and **that is precisely the problem** — it does not look like a position size.",
        "**£10 a point on an index at 8,000 is roughly £80,000 of exposure.** The ticket says '£10'.",
        "**Convert to notional every single time:** stake per point × price level ≈ what you actually control.",
        "**This is Module 302's notional lesson**, arriving in the friendliest possible disguise."
      ],
      note: "This is the module's central safety point. The vocabulary of stake per point is genuinely more intuitive than lots, and that intuitiveness is what conceals the size. Insist on the notional conversion." },

    { kicker: "Counterparty",
      title: "The provider is the other side",
      bullets: [
        "**You are betting with a firm, not trading on an exchange.** They are your counterparty, exactly like a CFD broker — Module 4.",
        "**Their prices are their own**, derived from the underlying market but quoted by them.",
        "**Check regulation in your own country**, and which legal entity your account sits with. Module 4's multi-entity trap applies unchanged.",
        "**No central clearing house.** Unlike the futures in Module 301, nothing stands between you and the firm.",
        "**So the withdrawal question from Module 4 is exactly as important here as it was there.**"
      ],
      note: "Students arriving from the futures track have just learned to value central clearing. Making the contrast explicit prevents them assuming a spread bet carries the same structural protection." },

    { kicker: "Costs",
      title: "It is in the spread",
      bullets: [
        "**Usually no separate commission.** That does not mean no cost.",
        "**The spread is wider than the underlying market's**, and that difference is the charge.",
        "**Daily funded bets carry overnight financing**, exactly like a CFD — Module 103.",
        "**Quarterly bets bury the financing in a wider spread instead**, so the cost is paid up front.",
        "**Compare total cost over your actual holding period.** Module 4's arithmetic, Module 103's question, same answer."
      ],
      note: "Every cost idea here is one the student already owns. Say so — the point of this track is transfer, not new material, and naming the transfer builds confidence in the framework." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "That the underlying market and all its analysis are unchanged",
        "How to convert stake per point into notional exposure, and why you must",
        "Who your counterparty is and what does not stand behind them",
        "Where the cost lives, and how it differs between daily and quarterly bets",
        "That this is a wrapper, and wrappers change arithmetic rather than risk"
      ],
      note: "Module 702 does the sizing arithmetic properly, because stake-per-point sizing is where the genuine danger of this wrapper sits." }
  ],

  practical: {
    title: "Convert five bets into positions you recognise",
    time: "30 min",
    intro: "The entire safety of this wrapper rests on one habit: converting stake per point into notional exposure before clicking.",
    setup: [
      "Take a provider's market list covering an index, a major currency pair, a share and a commodity.",
      "Record the current level and the point definition for each — providers differ."
    ],
    steps: [
      { h: "Record point definitions", d: "For each market, write down exactly what one point means. Note any where it is not what you assumed." },
      { h: "Convert to notional", d: "For a £5 per point bet on each, compute the approximate notional exposure. Show the arithmetic." },
      { h: "Express in familiar units", d: "Convert each notional into the unit you already know — lots for the pair, shares for the equity, contracts for the commodity." },
      { h: "Compare to your account", d: "State each notional as a percentage of a £10,000 account. Mark any that exceed your position limit." },
      { h: "Find the cost", d: "Compare the provider's spread to the underlying market's spread for two of them, and state the difference as the real charge." }
    ],
    deliverable: "A five-row table: market, point definition, £5/point notional, the same position in familiar units, notional as a percentage of £10,000, and the spread difference for two markets.",
    rubric: [
      { c: "Point definitions", d: "Taken from the provider rather than assumed, with any surprises noted." },
      { c: "Notional shown", d: "Arithmetic visible, not just a final figure." },
      { c: "Familiar units", d: "Correctly converts to lots, shares or contracts, demonstrating the wrapper is a relabelling." },
      { c: "Limit check", d: "Flags any bet that breaches the student's own position limit at only £5 a point." }
    ],
    pitfalls: [
      "Assuming a point means the same thing across providers or markets.",
      "Treating £5 a point as a £5 position, which is the exact error the lab exists to prevent.",
      "Comparing the provider's spread to nothing, so the cost stays invisible."
    ]
  },

  homework: [
    "Take one market you follow and work out what stake per point would give you the same exposure as your normal position size in that market.",
    "Find the provider's point definition for a share, an index and a commodity, and note which one surprised you.",
    "Write one sentence on who your counterparty is in a spread bet, and what stands behind them."
  ],

  quiz: [
    { q: "A spread bet is best described as:",
      options: [
        "A separate asset class with its own analysis",
        "A wrapper around a market you already understand, sized in stake per point and settled in cash",
        "A futures contract with no expiry",
        "A form of share ownership"
      ], a: 1,
      why: "The underlying is unchanged, so every track you have completed still applies. The wrapper changes how the position is expressed and taxed, not what drives the price." },

    { q: "You bet £10 a point on an index trading at 8,000. Your approximate exposure is:",
      options: ["£10", "£800", "£8,000", "£80,000"],
      a: 3,
      why: "Stake per point × price level ≈ notional. The ticket says £10 and you are controlling roughly £80,000 — which is Module 302's notional lesson in the friendliest possible disguise." },

    { q: "Who is your counterparty in a spread bet?",
      options: [
        "A central clearing house",
        "The provider you placed the bet with — nothing stands between you and them",
        "The exchange where the underlying trades",
        "Other spread bettors"
      ], a: 1,
      why: "Unlike the futures in Module 301, there is no central counterparty. Module 4's questions about regulation, legal entity and withdrawals apply in full." },

    { q: "Spread betting usually charges no commission. This means:",
      options: [
        "It is cheaper than other routes",
        "The cost is in a wider spread, and daily bets also carry overnight financing",
        "There is no cost",
        "Costs are charged only on winning bets"
      ], a: 1,
      why: "Exactly the commission-free broker from Module 4. The charge did not disappear; it moved somewhere less visible, and the comparison must still be made over your actual holding period." },

    { q: "How does a quarterly bet differ from a daily funded bet?",
      options: [
        "It cannot be closed early",
        "Financing is built into a wider spread up front rather than charged each night",
        "It has no costs",
        "It settles in the underlying"
      ], a: 1,
      why: "Same trade-off as CFDs versus shares in Module 103: cheap to open and expensive to hold, or the reverse. Match the product to the holding period." }
  ]
}

]);
