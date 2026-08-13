/* N1 Forex Academy — Module 402 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 402 ============================ */
{
  id: 402,
  track: 'options',
  title: "What an Option Is Actually Worth",
  tagline: "Every premium splits into two parts. One is arithmetic you can check; the other is everything anyone believes about the future.",
  level: "Derivatives",
  duration: "80 min",

  objectives: [
    "Split any premium into intrinsic and extrinsic value",
    "Say whether an option is in, at or out of the money, and what that implies",
    "Explain why an out-of-the-money option has value at all",
    "Explain why at-the-money options carry the most extrinsic value",
    "Read an option chain and say what each column is telling you"
  ],

  misconceptions: [
    "**\"A cheap option is good value.\"** Cheap usually means far out of the money and close to expiry — a lottery ticket. Price and value are different questions, and cheapness is often the market pricing a low probability correctly.",
    "**\"Out-of-the-money options are worthless.\"** They have no *intrinsic* value. They have extrinsic value, because there is still time for them to become useful, and that is what you are buying.",
    "**\"Deep in-the-money options are safest.\"** They cost far more and behave almost like the underlying. Safer in one sense, and a much larger cash commitment for a similar exposure.",
    "**\"The option price should equal the intrinsic value.\"** Only at expiry. Before then, every option is worth intrinsic *plus* whatever the market pays for the remaining time and uncertainty."
  ],

  glossary: [
    { t: "Intrinsic value", d: "What the option would be worth if exercised right now. Never negative — the floor is zero." },
    { t: "Extrinsic value", d: "Everything above intrinsic. Also called time value. It is what the market charges for uncertainty and remaining time." },
    { t: "In the money (ITM)", d: "The option has intrinsic value — a call below the underlying, a put above it." },
    { t: "At the money (ATM)", d: "Strike sits at or near the current underlying price. Carries the most extrinsic value." },
    { t: "Out of the money (OTM)", d: "No intrinsic value. All premium is extrinsic." },
    { t: "Moneyness", d: "Where the strike sits relative to the underlying price." },
    { t: "Option chain", d: "The table of every listed strike and expiry, with prices and volumes." },
    { t: "Bid-ask spread", d: "The gap between buying and selling price. Frequently wide on options, and a real cost." },
    { t: "Open interest (options)", d: "Contracts outstanding at each strike. Thin open interest means a hard exit." },
    { t: "Intrinsic floor", d: "The rule that an option cannot be worth less than its intrinsic value, since it could be exercised." }
  ],

  slides: [
    { kicker: "The split",
      title: "Every premium has exactly two parts",
      bullets: [
        "**Intrinsic value:** what the option would pay if exercised this instant. **Extrinsic value:** everything else.",
        "Call, strike 100, underlying 108. **Intrinsic = 8.** If the premium is 11, **extrinsic = 3**.",
        "**Intrinsic can never be negative.** A call with the underlying at 95 has intrinsic zero, not minus five — you would simply not exercise it.",
        "**Extrinsic is what you are really buying** when you buy an option, and it is the part that disappears.",
        "**At expiry, extrinsic is zero and the premium equals intrinsic.** That is the one moment the two agree."
      ],
      note: "Make the student perform this split on three live quotes before moving on. It is a two-second calculation that reframes every option they will ever look at, and most retail traders never do it." },

    { kicker: "Moneyness",
      title: "In, at, and out of the money",
      bullets: [
        "**In the money:** has intrinsic value. A call with strike below the underlying; a put with strike above.",
        "**At the money:** strike sits roughly at the current price. **Zero intrinsic, maximum extrinsic.**",
        "**Out of the money:** no intrinsic value at all. **The entire premium is extrinsic.**",
        "**Why is at-the-money the most expensive in extrinsic terms?** Because it is the most genuinely uncertain — a coin flip has more time value than a near-certainty.",
        "**Deep in or deep out, extrinsic shrinks.** Both ends are, in their different ways, nearly decided."
      ],
      note: "The uncertainty explanation is the one that makes extrinsic value intuitive rather than memorised. Ask what you would pay for a bet that is 99% settled versus one that is genuinely even, and the shape falls out on its own." },

    { kicker: "Why OTM has value",
      title: "Paying for what might happen",
      bullets: [
        "An out-of-the-money call is worthless *today*. So why would anyone pay for it?",
        "**Because there is time left**, and in that time the underlying might move far enough to make it valuable.",
        "**You are buying possibility, priced by probability.** Nothing more mystical than that.",
        "**Further out of the money = less likely = cheaper.** **More time remaining = more chance = dearer.**",
        "**So a cheap option is usually cheap for the correct reason.** It is unlikely to pay, and the market has priced that accurately."
      ],
      note: "This kills the 'cheap options are good value' instinct, which is how beginners lose money slowly and repeatedly. The market is not offering a bargain; it is quoting a low probability." },

    { kicker: "The chain",
      title: "Reading the table",
      bullets: [
        "An **option chain** lists every strike for every expiry, with bid, ask, volume and open interest.",
        "**Bid-ask spreads on options are frequently wide** — sometimes several percent of the premium. That is a real cost, paid twice.",
        "**Check open interest at your chosen strike.** Thin strikes are easy to enter and unpleasant to leave.",
        "**Trade the liquid strikes and the liquid expiries**, exactly as you trade the liquid names in equities.",
        "**A strategy that only works at an illiquid strike does not work.**"
      ],
      note: "Ties straight back to Module 102's depth lesson. Students who accept 'only trade deep books' for shares often abandon it entirely in options because the strike they want looks tidy on a diagram." },

    { kicker: "Recap",
      title: "What you can now do",
      bullets: [
        "Split any premium into intrinsic and extrinsic in two seconds",
        "State moneyness and know that at-the-money carries the most time value",
        "Explain why out-of-the-money options have value, and why cheap usually means unlikely",
        "Read a chain and judge whether a strike is actually tradeable",
        "Know that at expiry the premium collapses to intrinsic — which sets up Module 403"
      ],
      note: "The final bullet is the hinge into time decay. Extrinsic value must reach zero by expiry, and the path it takes to get there is the next module and the reason most bought options lose." }
  ],

  practical: {
    title: "Split ten premiums",
    time: "35 min",
    intro: "Ten quotes, ten splits. This is the calculation that reframes every option you will ever look at, and it takes seconds once the habit is formed.",
    setup: [
      "Pick one liquid underlying and record its current price.",
      "Take five call strikes and five put strikes across a range, all with the same expiry."
    ],
    steps: [
      { h: "Record the chain", d: "For each of the ten, write the strike, the mid price between bid and ask, and the bid-ask spread as a percentage of the mid." },
      { h: "Split each one", d: "Compute intrinsic, then extrinsic as premium minus intrinsic. Remember intrinsic has a floor of zero." },
      { h: "Plot extrinsic", d: "Sketch extrinsic value against strike. Confirm it peaks at the money and falls away in both directions." },
      { h: "Rank by spread", d: "Sort by bid-ask spread as a percentage of premium. Note which strikes would cost you most simply to get in and out." },
      { h: "Pick and justify", d: "Choose the one strike you would actually trade for a modest bullish view, and write two sentences saying why — including its liquidity." }
    ],
    deliverable: "A ten-row table with strike, mid, spread percentage, intrinsic, extrinsic; a sketch of extrinsic against strike; and a two-sentence justified choice.",
    rubric: [
      { c: "Split accuracy", d: "Intrinsic floored at zero, extrinsic computed as the remainder, on all ten." },
      { c: "The curve", d: "Sketch shows extrinsic peaking at the money and decaying both ways." },
      { c: "Cost awareness", d: "Spread expressed as a percentage of premium, not in absolute terms where it looks trivial." },
      { c: "Justification", d: "Choice references liquidity and the extrinsic being paid, not only the direction of the view." }
    ],
    pitfalls: [
      "Allowing negative intrinsic value.",
      "Using the ask price for some and the bid for others, making the table inconsistent.",
      "Quoting spread in absolute terms where 0.10 sounds trivial and is 20% of the premium.",
      "Choosing a strike from the diagram without checking whether anyone trades it."
    ]
  },

  homework: [
    "Find the option on your underlying with the largest extrinsic value and write one sentence explaining why it is that one.",
    "Find one strike where the bid-ask spread exceeds 10% of the mid price, and state what a round trip there would cost you before the underlying moves at all.",
    "Take one out-of-the-money option and write in a sentence what the market is implicitly saying about the probability of it paying out."
  ],

  quiz: [
    { q: "A call has strike 100, the underlying is 108, and the premium is 11. The extrinsic value is:",
      options: ["11", "8", "3", "0"],
      a: 2,
      why: "Intrinsic is 108 − 100 = 8. Extrinsic is the remaining 3. That split takes two seconds and most retail traders never perform it." },

    { q: "A call has strike 100 and the underlying is 95. Its intrinsic value is:",
      options: ["−5", "0", "5", "Cannot be determined"],
      a: 1,
      why: "Intrinsic has a floor of zero — you would simply not exercise a right to buy at 100 when the market offers 95. Any premium it carries is entirely extrinsic." },

    { q: "Which option carries the most extrinsic value, all else equal?",
      options: [
        "Deep in the money",
        "At the money",
        "Deep out of the money",
        "They all carry the same"
      ], a: 1,
      why: "At the money is the most genuinely uncertain, and uncertainty is what extrinsic value prices. Both extremes are, in their different ways, nearly decided — so there is less to pay for." },

    { q: "An out-of-the-money option is cheap. The most likely reason is:",
      options: [
        "The market has mispriced it",
        "It is unlikely to pay out, and the price reflects that probability correctly",
        "Nobody is trading it",
        "It is close to expiry only"
      ], a: 1,
      why: "Cheap usually means unlikely. Treating low premium as good value is how beginners lose money slowly and repeatedly — the market is quoting a probability, not offering a bargain." },

    { q: "Why does the bid-ask spread matter more in options than in a liquid share?",
      options: [
        "It does not",
        "Spreads are frequently several percent of the premium, and you pay it entering and leaving",
        "Options have no commission",
        "Because options settle differently"
      ], a: 1,
      why: "A 0.10 spread sounds trivial until you notice the premium is 0.50 — that is 20%, paid twice. Trade the liquid strikes for the same reason you trade the liquid names." }
  ]
}

]);
