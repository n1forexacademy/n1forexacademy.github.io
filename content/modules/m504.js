/* N1 Forex Academy — Module 504 (Crypto track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 504 ============================ */
{
  id: 504,
  track: 'crypto',
  title: "Perpetuals, Funding and Liquidation",
  tagline: "A futures contract that never expires, a fee that keeps it tethered, and an automatic closure that does not wait for you.",
  level: "Digital Assets",
  duration: "85 min",

  objectives: [
    "Explain what a perpetual future is and how it differs from the futures you studied",
    "Explain what the funding rate does and who pays whom",
    "Compute the cost of holding a perpetual position over time",
    "Describe liquidation, and why it is harsher here than the stop-out you already met",
    "Size a leveraged crypto position so that ordinary volatility cannot end it"
  ],

  misconceptions: [
    "**\"No expiry means no cost to hold.\"** Funding replaces expiry as the mechanism keeping the contract tethered to spot. It is charged repeatedly through the day and can be substantial.",
    "**\"100x leverage means I can make 100 times as much.\"** It means an adverse move of roughly 1% removes your entire margin. High leverage here is a shorter fuse, not a larger engine.",
    "**\"Liquidation is like the stop-out I met in futures.\"** It is faster, it happens on a thinner book, and there is often a liquidation fee on top. Some venues also apply socialised losses when the system cannot cover a shortfall.",
    "**\"My stop protects me from liquidation.\"** Only if it fills. In a cascade, price can travel through your stop and reach your liquidation level within seconds."
  ],

  glossary: [
    { t: "Perpetual future (perp)", d: "A futures-style contract with no expiry date, kept near spot by a funding mechanism." },
    { t: "Funding rate", d: "A periodic payment between longs and shorts that keeps the perpetual price close to spot." },
    { t: "Mark price", d: "A smoothed reference price used for liquidation, designed to resist manipulation on a single venue." },
    { t: "Liquidation price", d: "The price at which your position is closed automatically because margin is exhausted." },
    { t: "Maintenance margin (crypto)", d: "The minimum margin required to keep a position open. Below it, liquidation triggers." },
    { t: "Isolated margin", d: "Margin allocated to one position only, so a loss cannot reach the rest of the account." },
    { t: "Cross margin", d: "The whole account balance supports every position. One bad position can take everything." },
    { t: "Liquidation fee", d: "A charge applied when a position is force-closed, on top of the loss itself." },
    { t: "Insurance fund", d: "A venue's buffer covering shortfalls when liquidations fill worse than the liquidation price." },
    { t: "Socialised loss", d: "A mechanism where profitable traders absorb losses the insurance fund cannot cover." }
  ],

  slides: [
    { kicker: "The instrument",
      title: "A future with no expiry date",
      bullets: [
        "In Module 303, every futures contract died on a published date and you had to roll.",
        "**A perpetual has no expiry.** You can hold it indefinitely, which removes rollover entirely.",
        "**But something must keep its price tethered to spot**, or the two would drift apart with nothing to close the gap.",
        "**That something is the funding rate** — a payment made repeatedly through the day between longs and shorts.",
        "**Funding replaces expiry.** It is the price of never having to roll, and it is not free."
      ],
      note: "Framing funding as the replacement for expiry is what makes it intuitive. Students who studied roll cost in Module 303 immediately understand that the cost did not vanish; it changed shape." },

    { kicker: "Funding",
      title: "Who pays whom, and why",
      bullets: [
        "**If the perpetual trades above spot**, longs are crowded — so **longs pay shorts**.",
        "**If it trades below spot**, shorts are crowded — so **shorts pay longs**.",
        "That payment makes the crowded side more expensive to hold, **which pulls the price back toward spot**.",
        "**It is charged several times a day**, typically every eight hours, on the full position value.",
        "**Persistently high funding is expensive.** Over weeks it can exceed the move you were waiting for — Module 303's roll cost, in a new costume."
      ],
      note: "Have students annualise a funding rate at least once. A rate that reads as a fraction of a percent per period becomes an alarming annual figure, and that conversion is the point of the lab." },

    { kicker: "Liquidation",
      title: "Faster and harsher than the stop-out you met",
      bullets: [
        "**Liquidation is Module 302's stop-out with less warning.** Margin falls below maintenance and the position is closed automatically.",
        "**No margin call. No deadline. No opportunity to wire funds.** It happens in seconds.",
        "**A liquidation fee is usually charged on top** of the loss itself.",
        "**Liquidation triggers on the mark price**, a smoothed reference — which protects you from a single venue's wick and means your own venue's price is not the whole story.",
        "**And it happens on a thin book, during a cascade**, which is precisely when fills are worst."
      ],
      note: "The comparison to the futures stop-out is the anchor. Students have already blown up a practice account watching margin level fall; this is that experience compressed into seconds with a fee attached." },

    { kicker: "Leverage",
      title: "High leverage is a shorter fuse, not a bigger engine",
      bullets: [
        "**At 100x, roughly a 1% adverse move exhausts your margin.** Crypto moves 1% routinely, in both directions, most days.",
        "**Higher leverage does not increase your profit on a given position size** — Module 3's lesson, unchanged. It shortens the distance to liquidation.",
        "**Isolated margin** confines a loss to one position. **Cross margin** lets one position consume the entire account.",
        "**Use isolated margin while learning.** It converts a catastrophic outcome into a contained one.",
        "**Size from the liquidation price**, not from the leverage number. Ask: how far can price move before this position ends?"
      ],
      note: "The final bullet is the practical rule of the module. Traders quote leverage; the number that matters is the distance to liquidation, expressed as a percentage of price and compared against the asset's typical daily range." },

    { kicker: "The tail",
      title: "When the venue cannot cover it",
      bullets: [
        "If a liquidation fills worse than the liquidation price, someone must absorb the shortfall.",
        "**Venues hold an insurance fund** for exactly this.",
        "**If that fund is exhausted, some venues apply socialised losses** — profitable traders have gains clawed back.",
        "**So on the worst days, being right does not guarantee being paid** on some platforms.",
        "**Read your venue's policy before you need it.** It is published, and almost nobody looks."
      ],
      note: "This is unfamiliar to students from traditional markets, where a clearing house and its members absorb this. Naming it prevents the shock, and it is a legitimate factor in choosing a venue." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "That a perpetual replaces expiry with funding, and funding is a real recurring cost",
        "Who pays funding, why, and how to convert a period rate into an annual one",
        "That liquidation is faster and harsher than the futures stop-out, with a fee attached",
        "That high leverage shortens the fuse rather than enlarging the engine",
        "That some venues socialise losses, and that this is published in advance"
      ],
      note: "Module 505 assembles all of this into a written policy, and gives the honest closing assessment of whether this market belongs in a student's process at all." }
  ],

  practical: {
    title: "Find your liquidation price before you enter",
    time: "40 min",
    intro: "Traders quote leverage. The number that decides your survival is the distance to liquidation, measured against how far the asset actually moves in a day.",
    setup: [
      "Choose one liquid crypto asset and record its price and typical daily range as a percentage.",
      "Use a venue's published maintenance margin and funding history."
    ],
    steps: [
      { h: "Compute three liquidation prices", d: "For a long position at 5x, 20x and 100x leverage, work out roughly how far price can fall before liquidation. Express each as a percentage of the entry price." },
      { h: "Compare to reality", d: "Put each of those distances against the asset's typical daily range. State plainly which leverage levels would be ended by an ordinary day." },
      { h: "Annualise funding", d: "Take the current funding rate per period, multiply by the number of periods per day and then by 365. Report the annualised cost of holding the position." },
      { h: "Cost a month", d: "At that rate, what would holding your position cost over thirty days in cash, assuming the rate persists?" },
      { h: "Choose", d: "State the maximum leverage you would use, justified by the liquidation distance against the daily range — not by what the venue permits." }
    ],
    deliverable: "A table of three leverage levels with liquidation distances as percentages, the asset's typical daily range for comparison, an annualised funding figure, a thirty-day holding cost, and a stated maximum leverage with justification.",
    rubric: [
      { c: "Distance not multiple", d: "Expresses liquidation as a percentage move, not as a leverage number." },
      { c: "Against reality", d: "Compares each distance to the asset's actual daily range and says which are unsurvivable." },
      { c: "Annualised funding", d: "Converts the period rate correctly and reports an annual figure." },
      { c: "Own limit", d: "Maximum leverage justified by arithmetic rather than by what the platform allows." }
    ],
    pitfalls: [
      "Quoting leverage rather than the distance to liquidation.",
      "Forgetting that funding is charged several times a day when annualising.",
      "Using a single quiet day as the typical range.",
      "Assuming a stop guarantees an exit before liquidation, which a cascade disproves."
    ]
  },

  homework: [
    "Find your venue's maintenance margin schedule and note how it changes as position size increases. Write one sentence on what that means for a large position.",
    "Look up whether your venue uses socialised losses, and summarise the policy in two sentences.",
    "Take the highest funding rate of the past month, annualise it, and write one sentence on whether you would pay that to hold a position."
  ],

  quiz: [
    { q: "A perpetual future has no expiry. What keeps its price close to spot?",
      options: [
        "The exchange sets it manually",
        "The funding rate — a periodic payment between longs and shorts that makes the crowded side more expensive to hold",
        "Nothing; the prices drift apart",
        "Arbitrage is not possible"
      ], a: 1,
      why: "Funding replaces expiry. The cost of holding did not vanish when rollover disappeared — it changed shape, exactly as roll cost worked in Module 303." },

    { q: "The perpetual is trading above spot. Who pays funding?",
      options: [
        "Shorts pay longs",
        "Longs pay shorts",
        "Both pay the exchange",
        "Nobody until expiry"
      ], a: 1,
      why: "Trading above spot means longs are crowded, so longs pay. That makes the crowded side more expensive to hold and pulls the price back toward spot." },

    { q: "At 100x leverage, roughly how far can price move against you before liquidation?",
      options: ["About 10%", "About 1%", "About 25%", "It depends only on your stop"],
      a: 1,
      why: "Roughly 1% — a move crypto makes routinely, most days, in both directions. High leverage is a shorter fuse, not a bigger engine; Module 3's lesson is unchanged." },

    { q: "How does crypto liquidation differ from the futures stop-out you studied?",
      options: [
        "It is identical",
        "It is faster, has no margin call or deadline, usually carries a fee, and happens on a thinner book",
        "It always fills at your stop price",
        "It only applies to short positions"
      ], a: 1,
      why: "In futures you got a call with a deadline measured in hours. Here the position closes in seconds, on a thin book, during a cascade — which is precisely when fills are worst." },

    { q: "Isolated margin rather than cross margin means:",
      options: [
        "You cannot be liquidated",
        "A loss is confined to that one position rather than being able to consume the whole account",
        "Lower funding rates",
        "Higher leverage is available"
      ], a: 1,
      why: "It converts a catastrophic outcome into a contained one, which is exactly what a learner needs. Cross margin lets a single bad position reach everything you hold on the venue." }
  ]
}

]);
