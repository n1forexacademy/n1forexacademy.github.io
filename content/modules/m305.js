/* N1 Forex Academy — Module 305 (Futures track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 305 ============================ */
{
  id: 305,
  track: 'futures',
  title: "Risk and Building a Futures Approach",
  tagline: "The same risk policy you already signed, extended for whole contracts, cash settlement and a market that trades while you sleep.",
  level: "Derivatives",
  duration: "90 min",

  objectives: [
    "Extend your existing risk policy to cover futures rather than writing a new one",
    "Hold enough cash to survive daily settlement, not merely enough to open the position",
    "Choose contracts and sizes that suit the account you actually have",
    "Write a futures plan that specifies session, product, roll rule and events",
    "Judge honestly whether futures suit you at all"
  ],

  misconceptions: [
    "**\"I need a new risk policy for futures.\"** You need three additions to the one you already signed. Risk per trade, structural stops, never widening and never averaging down all carry over unchanged.",
    "**\"If I can post the margin I can hold the position.\"** Margin opens it. Cash reserve holds it through daily settlement. A position you can open but not fund is a liquidation waiting for a bad week.",
    "**\"Nearly 24-hour trading means I can always exit.\"** Overnight sessions are thin. The move that matters often happens when the book is at its emptiest and your stop fills a long way from your level.",
    "**\"Futures are the natural next step up.\"** For many accounts they are the wrong instrument, purely because the minimum position is larger than a correctly sized one. That is an honest finding, not a failure."
  ],

  glossary: [
    { t: "Cash reserve", d: "Money held beyond initial margin, specifically to meet daily settlement without a forced exit." },
    { t: "Margin-to-equity", d: "Total margin posted divided by account equity. A blunt measure of how committed you are." },
    { t: "Roll rule", d: "A written rule stating when you roll — a fixed number of days before expiry, or on a liquidity condition." },
    { t: "Overnight session", d: "The hours a future trades outside the main session. Thin, and where gaps get made." },
    { t: "Limit up / limit down", d: "Exchange-imposed daily price bounds. Trading halts at the limit, so you cannot exit." },
    { t: "Notional exposure", d: "Contract size × price × contracts. What you actually control across the whole account." },
    { t: "Product selection", d: "Choosing which contracts to trade, on liquidity and size, before considering any strategy." }
  ],

  slides: [
    { kicker: "Carry it over",
      title: "You already have most of this policy",
      bullets: [
        "**Unchanged:** risk per trade as a fixed percentage, stops placed where the idea is wrong, never widen a stop, never average down, honour daily and weekly stops, count correlated positions once.",
        "**Add: a cash reserve rule.** Margin opens a position; cash holds it through settlement.",
        "**Add: a roll rule.** Written in advance, so rolling is never an improvised decision at the worst moment.",
        "**Add: a product rule.** Which contracts you trade, chosen on liquidity and size before any strategy exists.",
        "**Three additions. Not a new document.**"
      ],
      note: "Say explicitly that the transfer is the point. A student who has now extended one policy across four markets has learned something more durable than any market-specific technique." },

    { kicker: "Cash",
      title: "Opening it and holding it are different questions",
      bullets: [
        "Initial margin answers **can I open this?** It does not answer **can I hold it through a bad week?**",
        "Losses are debited nightly. **The account must be able to absorb a run of them without breaching maintenance.**",
        "A workable starting rule: **hold at least twice initial margin per contract in free cash**, and more on volatile products.",
        "**Margin-to-equity** is the blunt check. Above roughly 20–30% committed, a normal adverse week becomes a margin call.",
        "**Exchanges also raise margin when volatility rises**, so your reserve must survive the requirement moving against you."
      ],
      note: "This is the module's most practical slide. Retail futures accounts fail far more often from thin cash than from bad analysis, and the failure looks like bad luck from the inside." },

    { kicker: "Sizing",
      title: "Choose the product to fit the account",
      bullets: [
        "In forex you sized the position to the account. **In futures you often have to choose the product to fit the account.**",
        "**Order of decisions:** account size → which contracts are correctly sizeable → then strategy.",
        "**Micros first.** For most retail accounts the micro contract is not a lesser option; it is the correct one.",
        "**If no available contract can be sized within your risk policy, that market is not available to you yet.**",
        "**That is a real answer.** Trading a product you cannot size is how a good process produces a bad outcome."
      ],
      note: "Do not soften this. The most common futures mistake among small accounts is trading a standard contract because it is the one everyone discusses, when a micro or nothing was the honest choice." },

    { kicker: "Hours",
      title: "It trades while you are asleep",
      bullets: [
        "Most futures trade nearly around the clock, which sounds like an advantage and is a mixed one.",
        "**Overnight sessions are thin.** Spreads widen, and a modest order moves price further.",
        "**The move that matters often lands in those hours** — an overseas central bank, an overnight news event.",
        "**A stop left through the overnight session can fill far from its level**, exactly as it would in forex rollover.",
        "**Limit up and limit down** can halt trading entirely, so on the most violent days you may not be able to exit at all."
      ],
      note: "Connect to Module 5's rollover lesson and Module 102's trading halts. The student has now met three markets where 'my stop protects me' has an exception; the pattern is the lesson." },

    { kicker: "The plan",
      title: "What a futures plan must specify",
      bullets: [
        "**Products:** which two or three contracts, chosen on liquidity and correct sizing.",
        "**Session:** which hours you trade, and which you will not hold through.",
        "**Risk:** per trade, total notional exposure, cash reserve, margin-to-equity ceiling.",
        "**Roll rule:** how many days before expiry, and what you do if liquidity has already gone.",
        "**Events:** which scheduled releases you will be flat for — the Module 9 news policy, applied here.",
        "**Setups:** all five components from Module 11, unchanged."
      ],
      note: "The gate for this track is the written plan. Check specifically for the cash reserve and the roll rule, which are the two additions students omit most often." },

    { kicker: "Honesty",
      title: "Whether futures suit you at all",
      bullets: [
        "**Suits:** a funded account, a hedging need, an appetite for exchange transparency and central clearing.",
        "**Does not suit:** a small account where the minimum contract exceeds correct sizing, or anyone who cannot fund daily settlement.",
        "**Genuine advantages:** transparent volume, central counterparty, deep liquidity in major contracts, no financing charges.",
        "**Genuine costs:** whole-contract granularity, expiry and rolls, cash settlement pressure, overnight gaps.",
        "**Deciding this market is not for you yet is a competent decision**, and you now have enough to make it properly."
      ],
      note: "End the track here rather than on encouragement. A student who correctly concludes 'not with this account' has got full value from the module, and will be right to revisit it later." }
  ],

  practical: {
    title: "Write the futures section of your plan",
    time: "50 min",
    intro: "Extend the risk policy you signed in Module 10 and the plan you wrote in Module 11. You are adding sections, not starting again.",
    setup: [
      "Bring your signed risk policy and your written plan.",
      "Bring the contract specification table from the Module 301 lab."
    ],
    steps: [
      { h: "Select products", d: "From your specification table, identify every contract you could size correctly at your risk percentage with your actual account. If the list is empty, say so — that is the finding." },
      { h: "Set the cash rule", d: "State the free cash you will hold per contract beyond initial margin, and a margin-to-equity ceiling you will not exceed." },
      { h: "Write the roll rule", d: "State how many days before expiry you roll, and what you do if liquidity has already drained. Make it specific enough that somebody else could apply it." },
      { h: "Set session and events", d: "Which hours you trade, which you will not hold through, and which scheduled releases you will be flat for." },
      { h: "Stress it", d: "Take your largest planned position and apply three consecutive adverse daily settlements at the contract's typical daily range. Show whether a margin call occurs." }
    ],
    deliverable: "A futures addendum to your existing plan: eligible products with sizing arithmetic, cash reserve rule, margin-to-equity ceiling, roll rule, session and events policy, and the three-day stress result.",
    rubric: [
      { c: "Extension not replacement", d: "Builds on the signed risk policy rather than writing a fresh and inconsistent one." },
      { c: "Sizing honesty", d: "Product list follows from the arithmetic, including concluding that no contract qualifies if that is true." },
      { c: "Cash reserve", d: "States a specific figure per contract and a margin-to-equity ceiling, not a general intention to be careful." },
      { c: "Roll specificity", d: "Roll rule is precise enough for another person to apply identically." },
      { c: "Stress test", d: "Three adverse settlements computed with real tick values, and the margin outcome stated plainly." }
    ],
    pitfalls: [
      "Selecting products by interest rather than by whether they can be sized.",
      "Setting a cash reserve equal to initial margin, which funds opening but not holding.",
      "A roll rule that says 'before expiry' without a number.",
      "Running the stress test with unrealistically small daily moves."
    ]
  },

  homework: [
    "Compute your margin-to-equity ratio if you held your maximum planned positions simultaneously, and state whether it is inside your own ceiling.",
    "Find one contract that has been limit up or limit down in the past two years, and write two sentences on what a holder could and could not do that day.",
    "Write one honest paragraph on whether futures suit your current account, with the arithmetic that supports your conclusion."
  ],

  quiz: [
    { q: "Initial margin is £1,200 per contract and you have £1,300 free. Should you open the position?",
      options: [
        "Yes — you can meet the margin requirement",
        "No — margin opens a position, but a cash reserve is what holds it through daily settlement",
        "Yes, provided you use a stop",
        "Only if the contract is cash settled"
      ], a: 1,
      why: "You could open it and be unable to fund the first bad week. A workable starting rule is at least twice initial margin in free cash, and more on volatile products." },

    { q: "Your correct position size works out at 0.4 of a standard contract and no micro exists. What is the honest response?",
      options: [
        "Round up to one contract",
        "Do not take the trade — that market is not available to you at this account size",
        "Halve your stop distance so the arithmetic gives one contract",
        "Increase risk to 2% for this trade only"
      ], a: 1,
      why: "Rounding up risks two and a half times your policy. Halving the stop is worse — it puts the stop somewhere the idea is not yet wrong. Not trading is a real and competent answer." },

    { q: "Why does it matter that futures trade nearly around the clock?",
      options: [
        "It guarantees you can always exit",
        "Overnight sessions are thin, so the move that matters often lands when the book is emptiest and your stop fills far from its level",
        "It reduces margin requirements",
        "It removes gap risk entirely"
      ], a: 1,
      why: "Continuous trading is not continuous liquidity. This is Module 5's rollover lesson and Module 102's halts, arriving a third time — 'my stop protects me' has exceptions in every market." },

    { q: "Which of these does NOT carry over from your existing risk policy?",
      options: [
        "Risk per trade as a fixed percentage",
        "Never widening a stop",
        "Nothing — it all carries over, and futures adds cash reserve, roll and product rules",
        "Never averaging down"
      ], a: 2,
      why: "The policy extends rather than being replaced. That transfer across four markets is more durable than any single market's technique." },

    { q: "You conclude that no available contract can be sized within your risk policy. This means:",
      options: [
        "You should raise your risk percentage",
        "This market is not available to you at this account size — a competent conclusion, not a failure",
        "You should trade it smaller than one contract",
        "You should use a CFD on the same underlying at full size instead"
      ], a: 1,
      why: "Trading a product you cannot size correctly is how a good process produces a bad outcome. Concluding 'not yet, with this account' is exactly what the arithmetic is for." }
  ]
}

]);
