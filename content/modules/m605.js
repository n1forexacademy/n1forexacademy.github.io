/* N1 Forex Academy — Module 605 (Commodities track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 605 ============================ */
{
  id: 605,
  track: 'commodities',
  title: "Risk and Building a Commodities Approach",
  tagline: "The sixth extension of one risk policy, and an honest answer about how narrow a place this market should have.",
  level: "Physical Markets",
  duration: "85 min",

  objectives: [
    "Extend your risk policy for carry, storability and physical shocks",
    "Size for volatility that arrives in bursts rather than steadily",
    "Write a thesis that clears the carry hurdle as well as the direction hurdle",
    "Choose an analytical approach that matches the family you are trading",
    "Decide honestly what role commodities have in your process"
  ],

  misconceptions: [
    "**\"Commodities hedge inflation, so I should hold some permanently.\"** The relationship is far weaker and far less reliable than the claim suggests, and a long-only position pays carry every year while waiting to be right.",
    "**\"I can size these like equities.\"** Volatility arrives in bursts driven by physical events. A position sized for a quiet month is the wrong size for the week a pipeline closes.",
    "**\"Understanding the fundamentals means I can predict the price.\"** It means you can say what would have to be true. Being early is still indistinguishable from being wrong.",
    "**\"A commodity cannot go to zero, so it is safer than a share.\"** Prices have gone negative. And your position is usually leveraged, so zero was never the relevant floor anyway."
  ],

  glossary: [
    { t: "Carry hurdle", d: "The return a position must generate simply to cover roll and storage before any profit exists." },
    { t: "Event risk", d: "Exposure to a physical disruption that is unforecastable but not unlikely." },
    { t: "Burst volatility", d: "Long quiet periods punctuated by violent moves, rather than steady movement." },
    { t: "Family limit", d: "A cap on exposure to energy, metals or agriculture as a group, because members move together." },
    { t: "Route rule", d: "A written rule stating which instrument you use for which holding period." },
    { t: "Physical thesis", d: "A statement of what must happen in the real supply and demand balance for the trade to work." }
  ],

  slides: [
    { kicker: "The extension",
      title: "Sixth time, same document",
      bullets: [
        "**Unchanged:** risk per trade, structural stops, never widening, never averaging down, daily and weekly stops, correlated positions counted once.",
        "**Add: a carry rule.** State the annual cost of holding before entering, and require the thesis to clear it.",
        "**Add: a family limit.** Energy, metals and agriculture counted as three groups, because members of a family move together.",
        "**Add: a route rule.** Which instrument for which holding period — the Module 604 decision, written down in advance.",
        "**Add: an event allowance.** Size assuming a physical shock can arrive with no notice, because it can."
      ],
      note: "Sixth extension of one policy. By now the student should be able to predict the shape of this slide before it appears, which is exactly the intended outcome of the whole course structure." },

    { kicker: "Sizing",
      title: "Volatility arrives in bursts",
      bullets: [
        "Commodity markets are frequently **quiet for months and then violent for a fortnight**.",
        "**A position sized for the quiet period is the wrong size for the event**, and events are what these markets are for.",
        "**Use ATR as always** — but check it against the range during the last physical shock, not just the last month.",
        "**Stops must sit beyond ordinary noise**, and ordinary noise widens sharply when an event begins.",
        "**Which means smaller positions rather than wider stops**, exactly as in the crypto track."
      ],
      note: "The instruction to check ATR against the last shock rather than the last month is the practical addition. Recent calm systematically understates the size a commodity position can move." },

    { kicker: "The thesis",
      title: "Two hurdles, not one",
      bullets: [
        "In Module 108 an equity thesis had to be **falsifiable**. That requirement carries over unchanged.",
        "**Here it must also clear the carry hurdle.** State the annual cost of holding, then say what will beat it.",
        "**\"I think oil goes up\" is not a thesis.** \"Inventories are two standard deviations below the five-year average with no spare capacity, and I expect stocks-to-use to normalise within nine months\" is.",
        "**And it must state what would prove it wrong** — an inventory build, a demand figure, a capacity restart.",
        "**Review it against published data on a schedule**, not when the price makes you anxious."
      ],
      note: "The carry hurdle is what distinguishes a commodity thesis from an equity one. A share can grow into a valuation while you wait; a barrel simply costs you money, so waiting has a price that must be beaten." },

    { kicker: "Honesty",
      title: "How narrow a place this deserves",
      bullets: [
        "**Genuine uses:** hedging a real input cost, expressing a specific physical view, and diversification during periods when no macro factor dominates.",
        "**Genuine costs:** carry on almost every route, burst volatility, unforecastable physical events, and no income of any kind while you wait.",
        "**The inflation-hedge claim is weaker than advertised** — the relationship is unstable, and you pay carry every year regardless.",
        "**Most students should hold a narrow role for this market or none**: a specific thesis, sized small, with a written exit.",
        "**Sixth track, sixth time this course has said that declining a market on the arithmetic is a competent conclusion.**"
      ],
      note: "Consistent with the endings of futures, options and crypto. The repetition is the point: a student who has now been given permission four times to decline a market is far better protected than one who has been sold six." },

    { kicker: "Recap",
      title: "Where you finish this track",
      bullets: [
        "A risk policy extended for carry, family limits, route and event allowance",
        "Sizing that assumes bursts rather than steady volatility",
        "A thesis that clears both the direction hurdle and the carry hurdle",
        "An analytical approach matched to the family rather than to commodities in general",
        "An honest, probably narrow, role for this market in your process"
      ],
      note: "The gate is the written commodities addendum. Check specifically for the carry hurdle stated as a number — it is the clause students omit, and it is the one that stops a long-only position bleeding for years." }
  ],

  practical: {
    title: "Write the commodities section of your plan",
    time: "50 min",
    intro: "Sixth extension of the same document. You know the drill by now, which is the point.",
    setup: [
      "Bring your signed risk policy and every addendum so far.",
      "Bring the balance work from Module 602 and the route comparison from Module 604."
    ],
    steps: [
      { h: "State the carry hurdle", d: "For one commodity you would trade, compute the annual cost of holding on your chosen route. Write it as a percentage. This is the number your thesis must beat." },
      { h: "Write a physical thesis", d: "One paragraph: what the balance is, what you expect to change, over what period, and the specific published figure that would prove you wrong." },
      { h: "Set family limits", d: "Maximum exposure to energy, to metals and to agriculture as three separate groups, plus a total commodity cap." },
      { h: "Write the route rule", d: "Which instrument for which holding period, stated so somebody else could apply it. Include what you will check on any fund before buying it." },
      { h: "Stress an event", d: "Apply a sudden 25% adverse move to your intended position. State the loss against your account and whether the position size survives it." }
    ],
    deliverable: "A commodities addendum: a stated carry hurdle as a percentage, a falsifiable physical thesis, three family limits plus a total cap, a route rule, and a 25% event stress result.",
    rubric: [
      { c: "Carry as a number", d: "The hurdle is a computed percentage, not a general acknowledgement that carry exists." },
      { c: "Falsifiable thesis", d: "Names a specific published figure that would prove it wrong, with a timeframe." },
      { c: "Family limits", d: "Three group limits, not just a single overall commodity cap." },
      { c: "Route specificity", d: "Rule is precise enough for another person to apply, including the fund-holdings check." },
      { c: "Event survived", d: "The 25% stress is computed against real capital and the conclusion stated plainly." }
    ],
    pitfalls: [
      "Stating that carry 'should be considered' rather than computing it.",
      "A thesis whose invalidation is 'if the price falls', which is not a physical condition.",
      "Setting a total commodity cap and skipping the family limits, which is where the correlation bites.",
      "Choosing a 25% move as a worst case when the last shock was larger — use the real one."
    ]
  },

  homework: [
    "Compute the annual carry cost of holding one commodity on two different routes, and state which you would use for a nine-month view.",
    "Find the largest one-week move in a commodity you follow over the past five years, and state what that move would do to your intended position size.",
    "Write one honest paragraph on what role, if any, commodities have in your process — with the carry arithmetic that supports it."
  ],

  quiz: [
    { q: "What must a commodity thesis clear that an equity thesis does not?",
      options: [
        "A liquidity requirement",
        "The carry hurdle — the annual cost of holding, which must be beaten before any profit exists",
        "A regulatory approval",
        "Nothing; the requirements are identical"
      ], a: 1,
      why: "A share can grow into a valuation while you wait. A barrel simply costs you money, so waiting has a price and the thesis has to beat it." },

    { q: "How should you size for commodity volatility?",
      options: [
        "From the last month's range, as usual",
        "Checking ATR against the range during the last physical shock — volatility arrives in bursts, and recent calm understates it",
        "The same way as equities",
        "By the size of the contract only"
      ], a: 1,
      why: "These markets are often quiet for months then violent for a fortnight. A position sized for the quiet stretch is the wrong size for the event, and events are what the market is for." },

    { q: "Which of these is a properly formed physical thesis?",
      options: [
        "\"I think oil goes up\"",
        "\"Inventories are well below the five-year average with little spare capacity; I expect stocks-to-use to normalise within nine months, and an inventory build above trend would prove me wrong\"",
        "\"The chart looks bullish\"",
        "\"Analysts are positive\""
      ], a: 1,
      why: "It states the current balance, the expected change, a timeframe, and the specific published figure that would falsify it — the Module 108 rule with the physical detail added." },

    { q: "Why do family limits matter on top of a total commodity cap?",
      options: [
        "Regulators require them",
        "Members of a family move together, so three energy positions are closer to one bet than to three",
        "They reduce commission",
        "They are only relevant to hedgers"
      ], a: 1,
      why: "Fifth appearance of the correlation lesson. A total cap does not stop you putting the whole allocation into one family that then moves as a single position." },

    { q: "The claim that commodities reliably hedge inflation is:",
      options: [
        "Well established and dependable",
        "Weaker and less stable than advertised — and you pay carry every year while waiting to be right",
        "True only for gold",
        "Irrelevant to retail investors"
      ], a: 1,
      why: "The relationship is unstable, and a long-only position bleeds carry regardless of whether the thesis eventually works. That is why most students should hold a narrow role here or none." }
  ]
}

]);
