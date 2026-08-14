/* N1 Forex Academy — Module 702 (Spread Betting track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 702 ============================ */
{
  id: 702,
  track: 'spreadbet',
  title: "Sizing When the Ticket Hides the Position",
  tagline: "One formula, used every time, converts the friendliest sizing vocabulary in trading back into something you can actually judge.",
  level: "Wrappers",
  duration: "75 min",

  objectives: [
    "Compute stake per point from a risk percentage and a stop distance",
    "Convert any stake into notional exposure and judge it against a position limit",
    "Explain why stake-per-point sizing produces oversized positions so reliably",
    "Apply both a risk limit and an exposure limit, as you did in equities",
    "Recognise when a minimum stake is already too large for your account"
  ],

  misconceptions: [
    "**\"Small stake means small position.\"** Stake per point says nothing about exposure until you multiply by the price level. £1 a point on a high-priced index is a substantial position.",
    "**\"If I use a stop, the notional does not matter.\"** It matters for exactly the reason it mattered in Module 107: a gap bypasses the stop, and then the loss is set by exposure rather than by where the stop sat.",
    "**\"The provider's minimum stake is a sensible starting size.\"** It is a commercial minimum, not a risk-based one. On some markets the minimum stake already breaches a small account's risk policy.",
    "**\"Points and pips are the same.\"** Sometimes, and not always. Providers define a point per market, and getting it wrong scales your position by a factor of ten."
  ],

  glossary: [
    { t: "Stake per point", d: "Your position size. Everything else in this module is derived from it." },
    { t: "Stop distance in points", d: "How far your stop sits from entry, measured in the provider's points." },
    { t: "Risk amount", d: "Account × risk percentage. The most the trade may cost if the stop works." },
    { t: "Minimum stake", d: "The smallest bet a provider accepts on a market. A commercial floor, not a risk-based one." },
    { t: "Exposure limit", d: "A cap on notional as a percentage of the account, separate from the risk limit." },
    { t: "Point value check", d: "Confirming what one point means on this market with this provider, before sizing." }
  ],

  slides: [
    { kicker: "The formula",
      title: "One line, used every time",
      bullets: [
        "**Stake per point = (Account × Risk %) ÷ Stop distance in points**",
        "Example: £10,000 account, 1% risk, stop 40 points away.",
        "Risk amount = **£100**. **Stake = 100 ÷ 40 = £2.50 per point.**",
        "**Same order of operations as every other market.** The chart sets the stop; the stake falls out.",
        "**If you ever pick a stake first, you have skipped a step** — Module 10, unchanged, for the sixth time."
      ],
      note: "Deliberately identical in structure to the forex, equity and futures formulas. The point is that students recognise it rather than learn it, which is the whole argument of this track." },

    { kicker: "The second number",
      title: "Now check what you are actually holding",
      bullets: [
        "The risk calculation is only half the job — Module 107 taught you why.",
        "**Notional ≈ stake per point × price level.** Compute it every time.",
        "£2.50 a point on an index at 8,000 is roughly **£20,000 of exposure** on a £10,000 account.",
        "**That is 200% of the account**, from a bet that risks 1% and reads as £2.50.",
        "**A gap does not care about your stop.** It cares about your exposure — which is why the second number exists."
      ],
      note: "This is the crucial slide. The arithmetic is genuinely startling and it is the strongest available argument for the exposure limit. Have students compute it themselves rather than reading it." },

    { kicker: "Two limits",
      title: "Risk limit and exposure limit, as in equities",
      bullets: [
        "**Risk limit:** what you lose if the stop works. Typically 1%.",
        "**Exposure limit:** notional as a share of the account, for when the stop does not work.",
        "**Both must pass.** If the stake satisfies the risk limit but breaches the exposure limit, the position is too large.",
        "**This is exactly Module 107's pair of limits**, and it exists here for exactly the same reason.",
        "**Leverage is high on these products**, so the exposure limit binds far more often than students expect."
      ],
      note: "Students who did the equities gap drill will accept this immediately. Those who did not will need the arithmetic from the previous slide to believe it." },

    { kicker: "The floor",
      title: "When the minimum stake is already too big",
      bullets: [
        "Every market has a **minimum stake** the provider will accept.",
        "**That is a commercial floor, not a risk-based one.**",
        "On some markets, the minimum stake **already breaches a small account's risk policy** before you have done anything.",
        "**Then that market is not available to you** — the same conclusion as the futures whole-contract problem in Module 302.",
        "**Not trading is a real answer**, and by now it should be a familiar one."
      ],
      note: "Fifth market in which 'this instrument does not fit your account' is a legitimate outcome. The consistency is doing more work than any individual instance." },

    { kicker: "Recap",
      title: "What you can now do",
      bullets: [
        "Compute stake per point from risk and stop distance",
        "Convert any stake into notional and judge it against an exposure limit",
        "Apply both limits, and know which one binds more often here",
        "Check the point definition before sizing anything",
        "Recognise a minimum stake that is already too large"
      ],
      note: "Module 703 covers the protections providers sell against exactly the gap risk this module has just made vivid — and what those protections cost." }
  ],

  practical: {
    title: "Size five bets, then check the second number",
    time: "35 min",
    intro: "Five trades, two calculations each. The second calculation is the one that will surprise you.",
    setup: [
      "Assume a £10,000 account, a 1% risk limit and a 25% exposure limit.",
      "Take five markets across different asset classes from one provider."
    ],
    steps: [
      { h: "Confirm the point", d: "For each market, record what one point means with this provider. Note any that differ from your assumption." },
      { h: "Size for risk", d: "Choose a realistic stop distance in points for each. Compute the stake per point that risks exactly 1%." },
      { h: "Compute notional", d: "For each resulting stake, compute stake × price level. Express it as a percentage of the £10,000 account." },
      { h: "Apply both limits", d: "Mark each bet as passing or failing the 25% exposure limit. For any that fail, compute the stake that would satisfy both limits." },
      { h: "Check the floor", d: "Compare your final stakes against the provider's minimum stake. Note any market where the minimum already exceeds your correct size." }
    ],
    deliverable: "A five-row table: market, point definition, stop distance, risk-based stake, notional, notional as a percentage of account, pass or fail on exposure, corrected stake, and whether the provider's minimum permits it.",
    rubric: [
      { c: "Both calculations", d: "Every row carries a risk-based stake AND a notional figure." },
      { c: "Binding limit identified", d: "States which limit bound on each row, rather than only reporting the risk figure." },
      { c: "Point definitions", d: "Taken from the provider, with discrepancies noted." },
      { c: "Floor honesty", d: "Names any market where the minimum stake makes correct sizing impossible." }
    ],
    pitfalls: [
      "Computing the risk stake and stopping there, which is the error the lab exists to catch.",
      "Assuming a point equals a pip on every market.",
      "Choosing a stop distance to make the arithmetic tidy rather than one the chart would justify.",
      "Treating a breached exposure limit as acceptable because the risk limit passed."
    ]
  },

  homework: [
    "Take your usual position size in one market and compute the stake per point that matches it. Compare with the stake you would have guessed.",
    "Find the provider's minimum stake on three markets and state whether each is compatible with a 1% risk on a £5,000 account.",
    "Write one sentence explaining why stake per point conceals position size more effectively than lots do."
  ],

  quiz: [
    { q: "£10,000 account, 1% risk, stop 40 points away. What is the correct stake per point?",
      options: ["£0.40", "£2.50", "£4.00", "£25.00"],
      a: 1,
      why: "Risk amount is £100; £100 ÷ 40 points = £2.50 per point. Same order of operations as every other market — the chart sets the stop and the stake falls out of it." },

    { q: "That £2.50 a point sits on an index trading at 8,000. Your notional exposure is roughly:",
      options: ["£2,500", "£8,000", "£20,000", "£200"],
      a: 2,
      why: "£2.50 × 8,000 = £20,000 — twice a £10,000 account, from a bet that risks 1% and reads as £2.50 on the ticket. This is why the second calculation is not optional." },

    { q: "Why do you need an exposure limit as well as a risk limit?",
      options: [
        "Regulators require both",
        "Because a gap bypasses the stop, and then the loss is set by exposure rather than by where the stop sat",
        "To reduce financing costs",
        "Only for shares"
      ], a: 1,
      why: "Exactly Module 107's pair of limits, for exactly the same reason. On a high-leverage wrapper the exposure limit binds far more often than students expect." },

    { q: "The provider's minimum stake on a market already breaches your 1% risk policy. What follows?",
      options: [
        "Raise the risk percentage for that market",
        "That market is not available to you at this account size",
        "Use a tighter stop so the arithmetic works",
        "Trade it and monitor closely"
      ], a: 1,
      why: "A minimum stake is a commercial floor, not a risk-based one. Tightening the stop is worse — it puts the stop where the idea is not yet wrong. Fifth market in which 'not with this account' is the honest answer." },

    { q: "Before sizing any bet, you must first check:",
      options: [
        "The provider's rating",
        "What one point actually means on that market with that provider",
        "Yesterday's range",
        "The financing rate"
      ], a: 1,
      why: "Point definitions vary by market and by provider. Getting it wrong scales your position by a factor of ten, and the ticket will not warn you." }
  ]
}

]);
