/* N1 Forex Academy — Module 304 (Futures track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 304 ============================ */
{
  id: 304,
  track: 'futures',
  title: "Who Is Actually On The Other Side",
  tagline: "Most of the money in this market is not trying to make money. Understanding why changes how you read it.",
  level: "Derivatives",
  duration: "75 min",

  objectives: [
    "Explain what a hedger is trying to achieve, and why it is not profit",
    "Describe how a hedge actually works, including the leg that loses on purpose",
    "Explain what a speculator provides, and why the market needs one",
    "Read a positioning report and say what each group of participants is doing",
    "Say honestly what positioning data can and cannot tell you"
  ],

  misconceptions: [
    "**\"Everyone here is trying to profit.\"** A large share of the open interest belongs to producers and consumers who are deliberately giving up the chance of a better price. Their futures leg is *supposed* to lose when their business wins.",
    "**\"Speculators are parasites on the market.\"** Somebody has to take the other side of a hedge. Without speculators the farmer has to find a bakery who wants exactly that quantity on exactly that date, which is why these markets were illiquid before they existed.",
    "**\"Commercials are the smart money, so I should follow them.\"** Commercials are hedgers. They are frequently positioned against a rising market because they are *selling their own output*, not because they predict a fall.",
    "**\"Extreme positioning means a reversal is imminent.\"** Extremes can persist for months and get more extreme. Positioning describes crowding, not timing."
  ],

  glossary: [
    { t: "Hedger", d: "A participant using futures to remove price risk from an existing business exposure." },
    { t: "Speculator", d: "A participant taking price risk in the hope of profit, and providing the other side of hedges." },
    { t: "Commercial", d: "In positioning reports, a participant with a business use for the underlying — a producer or a consumer." },
    { t: "Non-commercial", d: "Large speculative participants, typically funds." },
    { t: "Basis", d: "The difference between the spot price and the futures price. A hedge is only as good as the basis is stable." },
    { t: "Basis risk", d: "The risk that spot and futures do not move together, leaving a hedge imperfect." },
    { t: "Short hedge", d: "A producer selling futures to lock in a price for output they will have later." },
    { t: "Long hedge", d: "A consumer buying futures to lock in a price for input they will need later." },
    { t: "Positioning report", d: "A published breakdown of who holds what, by participant category. The US COT report is the best known." },
    { t: "Crowding", d: "A large share of participants positioned the same way, which makes an unwind more violent when it comes." }
  ],

  slides: [
    { kicker: "The point of the market",
      title: "Most of this money is buying certainty, not profit",
      bullets: [
        "An airline needs fuel next winter. A miner will have copper next quarter. A baker needs wheat in September.",
        "None of them wants to *guess* the price. They want to **know** it, so they can plan.",
        "So they take a futures position that **moves opposite to their business exposure**.",
        "**The futures leg is supposed to lose when the business wins.** That is the hedge working, not failing.",
        "**This is what the market is for.** Speculation is what makes it liquid enough to work at all."
      ],
      note: "Students find 'the futures leg is supposed to lose' genuinely surprising, and it is the fastest route to understanding a hedger's behaviour. Until they grasp it they will keep misreading commercial positioning as a forecast." },

    { kicker: "Mechanics",
      title: "How a hedge actually works",
      bullets: [
        "**Short hedge:** a producer sells futures now against output they will have later.",
        "If prices **fall**, the business sells its goods for less, and the short future gains. **Net: roughly the price they locked.**",
        "If prices **rise**, the business sells its goods for more, and the short future loses. **Net: roughly the price they locked.**",
        "**Either way they get the price they fixed** — which is precisely what they wanted.",
        "**Long hedge** is the mirror: a consumer buys futures against an input they will need."
      ],
      note: "Work both directions on the board. Students often accept the falling case and quietly assume the rising case means the hedge failed. Make them state the outcome themselves in both directions before moving on." },

    { kicker: "The catch",
      title: "Basis risk — why hedges are imperfect",
      bullets: [
        "A hedge assumes the futures price and the actual price you face **move together**.",
        "**Basis** is the gap between them. When it is stable, the hedge works.",
        "**Basis risk** is that gap changing — different grade, different location, different timing from the standard contract.",
        "A jet fuel buyer hedging with crude oil futures carries basis risk, **because they are not the same product**.",
        "**No hedge is perfect.** It converts a large uncertain risk into a small residual one, which is a good trade rather than a magic trick."
      ],
      note: "Honesty here prevents the opposite error — students who leave believing hedging eliminates risk. It reduces and transforms it. The standardisation that makes the contract tradeable is exactly what creates basis risk." },

    { kicker: "Positioning",
      title: "You can see who holds what",
      bullets: [
        "Several regulators publish **positioning reports** breaking open interest down by participant type. The US COT report is the best known.",
        "**Commercials** are hedgers with a business use. **Non-commercials** are large speculators, typically funds.",
        "**Commercials are usually net short in a rising market** — because they are selling their own future output, not predicting a fall.",
        "**So 'follow the commercials' is a misreading.** They are not forecasting; they are insuring.",
        "**What it genuinely shows is crowding** — when speculative positioning gets extremely one-sided, an unwind has more fuel."
      ],
      note: "This is the module's most misused dataset. The rule to leave them with: positioning describes who is crowded, never when the crowd breaks. Same category as open interest and credit spreads — context, not trigger." },

    { kicker: "Limits",
      title: "What positioning cannot tell you",
      bullets: [
        "**It is a snapshot, and usually a stale one.** Most reports are published days after the date they describe.",
        "**Extremes persist.** A crowded position can get considerably more crowded before it unwinds, and 'early' is indistinguishable from 'wrong'.",
        "**Categories are imperfect.** Some participants are classified in ways that do not match how they actually behave.",
        "**It says nothing about price.** Crowding raises the *severity* of an unwind, not its timing.",
        "**Use it to size and to be sceptical — never as a trigger.**"
      ],
      note: "Close the loop with Module 12: any dataset that gets used as a signal generator eventually gets curve-fitted. This one has all the hallmarks — vivid, public, and weakly related to next week's price." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "What a hedger wants, and why their futures leg is meant to lose when their business wins",
        "How short and long hedges work in both directions",
        "Basis risk, and why no hedge is perfect",
        "How to read a positioning report without misreading commercials as forecasters",
        "Why crowding tells you about severity rather than timing"
      ],
      note: "After this module the student should be able to look at any futures market and answer 'who needs this contract, and why?' That question is the foundation of the approach they write in Module 305." }
  ],

  practical: {
    title: "Build a hedge, then break it",
    time: "40 min",
    intro: "You will construct a hedge for a real business exposure, prove it works in both directions, then introduce basis risk and see what survives.",
    setup: [
      "Choose a business with a genuine commodity exposure — an airline, a bakery, a copper miner.",
      "Find a futures contract that approximately matches that exposure."
    ],
    steps: [
      { h: "State the exposure", d: "Write in one sentence what the business will need to buy or sell, how much, and roughly when. Decide whether it needs a long or short hedge." },
      { h: "Size the hedge", d: "Using the contract size, work out how many contracts approximately cover the exposure. Note the rounding — you will not match exactly." },
      { h: "Test it upward", d: "Assume the price rises 20%. Compute the effect on the business AND on the futures leg, and state the net position." },
      { h: "Test it downward", d: "Repeat for a 20% fall. Confirm the net outcome is roughly the same as the upward case." },
      { h: "Break it", d: "Now assume the futures contract moves 20% but the business's actual price moves only 14% — a basis change. Recompute the net and state how much protection was lost." }
    ],
    deliverable: "A one-page hedge design: the exposure, contracts used, net outcomes in both directions, and the residual loss once basis risk is introduced.",
    rubric: [
      { c: "Direction", d: "Chooses long or short hedge correctly from the direction of the business exposure." },
      { c: "Both directions", d: "Demonstrates that the net result is similar whether price rises or falls, and does not treat the losing futures leg as a failure." },
      { c: "Basis honesty", d: "Quantifies the residual risk rather than describing the hedge as complete protection." },
      { c: "Rounding", d: "Acknowledges that whole contracts cannot match the exposure exactly, and states which way the mismatch leans." }
    ],
    pitfalls: [
      "Choosing the hedge direction from a price opinion rather than from the business exposure.",
      "Calling the hedge a failure in the direction where the futures leg loses.",
      "Ignoring the whole-contract rounding, which is itself a small unhedged exposure.",
      "Setting the basis change to zero, which removes the entire point of the last step."
    ]
  },

  homework: [
    "Find one company's annual report and locate the note describing its commodity or currency hedging. Summarise in two sentences what it hedges and roughly how far ahead.",
    "Look up the latest positioning report for one contract. Write down whether non-commercials are net long or short, and one sentence on what that does and does not tell you.",
    "Name one hedge you could not construct precisely with a standard contract, and state exactly where the basis risk would sit."
  ],

  quiz: [
    { q: "A wheat farmer sells futures, and by harvest wheat has risen sharply. Their futures leg loses money. Has the hedge failed?",
      options: [
        "Yes — they lost money on the futures",
        "No — the business sold its wheat for more, and the two roughly cancel to the price they fixed",
        "Yes, they should have bought futures instead",
        "It depends on the contract month"
      ], a: 1,
      why: "The futures leg is supposed to lose when the business wins. That is the hedge working. They gave up the better price in exchange for having known their number in March." },

    { q: "What does a speculator provide to a futures market?",
      options: [
        "Nothing — they extract value from genuine users",
        "The other side of hedges, so a producer does not have to find a consumer wanting the identical quantity on the identical date",
        "Price forecasts",
        "Regulatory oversight"
      ], a: 1,
      why: "Without speculators these markets were thin and hard to use. Taking risk somebody else wants to shed is the function, and it is what makes hedging practical at all." },

    { q: "Commercials are heavily net short in a rising market. The best reading is:",
      options: [
        "Smart money expects a fall, so you should sell",
        "They are hedging future output — insuring, not forecasting",
        "The report is wrong",
        "A squeeze is imminent"
      ], a: 1,
      why: "Commercials sell futures against goods they will have. Reading their position as a price view is the commonest misuse of this data, and it puts people on the wrong side of a trend for months." },

    { q: "A jet fuel buyer hedges using crude oil futures. What risk remains?",
      options: [
        "None — the hedge is complete",
        "Basis risk: crude and jet fuel are different products and need not move together",
        "Margin risk only",
        "Only the commission"
      ], a: 1,
      why: "Standardisation is what makes a contract tradeable and it is exactly what creates basis risk. A hedge converts a large uncertain risk into a small residual one — good, but not magic." },

    { q: "Speculative positioning has reached a multi-year extreme. This tells you:",
      options: [
        "A reversal is imminent",
        "The position is crowded, so an eventual unwind has more fuel — but nothing about timing",
        "Price will continue in the same direction",
        "The market is being manipulated"
      ], a: 1,
      why: "Extremes persist and get more extreme. Positioning speaks to the severity of an unwind, never its timing, which puts it with open interest and credit spreads: context, not trigger." }
  ]
}

]);
