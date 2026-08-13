/* N1 Forex Academy — Module 302 (Futures track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 302 ============================ */
{
  id: 302,
  track: 'futures',
  title: "Margin, Daily Settlement and Real Cash",
  tagline: "Your profit and loss stops being a number on a screen and starts being money moving in and out of your account every single evening.",
  level: "Derivatives",
  duration: "90 min",

  objectives: [
    "Explain what futures margin is, and why it is not a deposit on a purchase",
    "Describe what happens to your account at the end of every trading day",
    "Tell the difference between initial and maintenance margin, and what happens between them",
    "Explain why a position can be closed even though your view eventually proves right",
    "Size a futures position from a stop and a risk percentage, in contracts"
  ],

  misconceptions: [
    "**\"Margin is a part-payment towards the goods.\"** It is not a payment at all. It is a performance bond — money held to prove you can meet tomorrow's losses. You get it back when you close.",
    "**\"My loss is not real until I close.\"** In futures it is real every evening. Daily settlement moves actual cash out of your account, which is why running out of cash and being wrong are two different ways to lose.",
    "**\"A margin call means I have lost everything.\"** It means your account has fallen below maintenance margin and must be topped back up to the initial level. It is a demand for cash, and it has a deadline.",
    "**\"Higher leverage than forex means more danger.\"** The danger is the same as it always was — position size. What is genuinely different here is that the losses are settled in cash daily, so you can be forced out of a correct trade purely by running out of money."
  ],

  glossary: [
    { t: "Initial margin", d: "The cash you must post to open one contract. Set by the exchange and changed when volatility changes." },
    { t: "Maintenance margin", d: "The lower level your account must stay above. Fall below it and you get a margin call." },
    { t: "Variation margin", d: "The cash actually moved in or out of your account each day to settle that day's price move." },
    { t: "Mark to market", d: "Revaluing every open position at the day's settlement price, and settling the difference in cash." },
    { t: "Settlement price", d: "The official end-of-day price the exchange uses for marking to market. Not simply the last trade." },
    { t: "Margin call", d: "A demand to restore your account to the initial margin level, with a deadline measured in hours." },
    { t: "Liquidation", d: "The broker closing your positions because the call was not met. You have no say in timing or price." },
    { t: "Notional value", d: "Contract size × price. What you actually control, as opposed to what you posted." },
    { t: "Leverage (implied)", d: "Notional value divided by initial margin. A consequence of the margin rules, not a setting you choose." },
    { t: "SPAN margin", d: "A risk-based system many exchanges use to set margin on a whole portfolio rather than contract by contract." }
  ],

  slides: [
    { kicker: "What margin is",
      title: "A performance bond, not a payment",
      bullets: [
        "You are not buying anything today, so there is nothing to part-pay for. **Margin is money held to prove you can meet tomorrow's losses.**",
        "**Initial margin** opens the position. **Maintenance margin** is the lower level you must stay above.",
        "It is **returned in full** when you close, less whatever the trade actually lost.",
        "**The exchange sets it, and moves it.** When volatility rises, margin requirements rise — sometimes mid-position, sometimes sharply.",
        "**That last point catches people.** A margin increase can force a smaller position at exactly the moment the market is most difficult."
      ],
      note: "Module 3 taught margin as permission rather than borrowed money. That framing survives intact here. What is new is that the number is set by the exchange rather than by the broker's leverage setting, and that it moves." },

    { kicker: "Daily settlement",
      title: "Every evening, real money moves",
      bullets: [
        "At the end of each session the exchange sets a **settlement price** and revalues every open position against it.",
        "**Winners are credited in cash. Losers are debited in cash. That night.** Not at expiry, not when you close.",
        "This is **marking to market**, and the money moved is **variation margin**.",
        "**Your open loss is not a floating number here — it is a withdrawal.** Contrast that with a share you hold at a loss, where nothing leaves your account at all.",
        "**Consequence:** you can be right about direction and still be finished, because you ran out of cash on the way."
      ],
      note: "This is the module's central idea and it is worth slowing down on. Students carry over an intuition from shares and CFDs that an unrealised loss is somehow provisional. In futures it is settled in cash daily. Say plainly: being right eventually is worthless if you are liquidated in the meantime." },

    { kicker: "The sequence",
      title: "What a margin call actually is",
      bullets: [
        "Losses are debited nightly. Your account balance falls.",
        "Fall below **maintenance margin** and you receive a **margin call**: restore the account to the **initial** level, not merely back above maintenance.",
        "**The deadline is short** — often the next morning, sometimes same-day in fast markets.",
        "**Fail to meet it and the broker liquidates**, at whatever price exists, in whatever order suits them.",
        "**This is Module 3's stop-out, with a cash deadline bolted on.** Same failure, extra step, less warning."
      ],
      note: "Draw the parallel to the forex stop-out explicitly — the student has already blown up a practice account watching margin level fall. The new element is the call: a window in which a human is expected to wire money. Retail traders rarely meet one in time." },

    { kicker: "Sizing",
      title: "Position size, in contracts",
      bullets: [
        "Same order of operations as Module 10. **The stop comes from the chart; the contract count falls out.**",
        "**Contracts = (Account × Risk%) ÷ (Stop distance in ticks × Tick value)**",
        "The awkward part: **contracts are whole numbers.** You cannot buy 0.4 of one.",
        "If the arithmetic says 0.4 contracts, **the honest answers are: trade the micro contract, or do not take the trade.**",
        "**Rounding up to one is not a rounding error — it is deciding to risk two and a half times what you intended.**"
      ],
      note: "This is where futures punish small accounts, and it should be said without euphemism. The lot-size flexibility of forex hid this problem; here the minimum position is frequently larger than a correctly sized one. Micros exist precisely for this, and 'no trade' is always available." },

    { kicker: "Leverage",
      title: "Notional value is the number that matters",
      bullets: [
        "**Notional value = contract size × price.** That is what you actually control.",
        "One E-mini S&P at 5,000 index points is 50 × 5,000 = **$250,000 of exposure**, on margin of perhaps $12,000.",
        "That is roughly **20:1**, but the ratio is a *consequence* of the margin rules, not a dial you set.",
        "**Always judge a position by its notional value, never by the margin posted.** The margin tells you what it costs to open; the notional tells you what you are exposed to.",
        "**The Module 3 rule is unchanged: size, not leverage, is what hurts you.**"
      ],
      note: "Students often quote margin as though it were the position. Insist on notional. The habit of asking 'what am I actually controlling?' transfers to every leveraged product they will ever meet, including the perpetuals in the crypto track." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "Margin as a performance bond that the exchange sets and can raise",
        "Daily settlement, and why an open loss here is cash leaving your account",
        "The margin call sequence, its deadline, and what liquidation costs",
        "Sizing in whole contracts, and why 'no trade' is a real answer",
        "Notional value as the honest measure of what you are exposed to"
      ],
      note: "The lab makes daily settlement concrete by running a position through a week of moves as a cash ledger. Students who have done that arithmetic stop describing open losses as unrealised." }
  ],

  practical: {
    title: "Run a position through a week of daily settlement",
    time: "40 min",
    intro: "The fastest way to internalise mark-to-market is to keep the ledger yourself. One position, five days, cash in and out every evening.",
    setup: [
      "Take a contract with a tick value you can state exactly, from the Module 301 lab.",
      "Assume a £10,000 account and initial margin of £1,200 with maintenance at £1,000 per contract."
    ],
    steps: [
      { h: "Open one contract", d: "Record the entry price, the notional value, and the cash left after posting initial margin." },
      { h: "Invent five daily settlements", d: "Write five closing prices, at least three of which go against you and one of which is a large adverse move. Realism matters more than drama." },
      { h: "Settle each evening", d: "For each day, compute the tick move, multiply by tick value, and add or subtract that cash from the account. Show the running balance." },
      { h: "Mark the breach", d: "Identify the first evening the balance falls below maintenance margin. State the size of the call — the amount needed to restore the INITIAL level, not merely maintenance." },
      { h: "Run it again, half the size", d: "Repeat with the position halved, or with a micro contract. Record whether the call still occurs." }
    ],
    deliverable: "A five-row cash ledger showing daily settlement, running balance, the evening any margin call is triggered, the size of that call, and the same table at half size for comparison.",
    rubric: [
      { c: "Cash discipline", d: "Treats each evening's settlement as money moving, not as a running unrealised figure." },
      { c: "Call arithmetic", d: "Restores to initial margin, not to maintenance — the commonest error, and an expensive one." },
      { c: "Sizing insight", d: "The halved run demonstrates explicitly that the call was a sizing decision, not bad luck." },
      { c: "Honesty", d: "The adverse days are plausible for the instrument rather than chosen to make the sums easy." }
    ],
    pitfalls: [
      "Topping up only to maintenance margin, which does not satisfy a call.",
      "Forgetting that margin is also returned when the position closes.",
      "Choosing daily moves so small that no call ever triggers, which defeats the exercise.",
      "Using tick size instead of tick value in the arithmetic."
    ]
  },

  homework: [
    "Find the current initial and maintenance margin for one contract you follow, and check whether the exchange has changed it in the past year. Note what was happening in that market when it changed.",
    "Work out the largest number of contracts you could hold with a £10,000 account without a 2% adverse move triggering a margin call. Compare that with the largest number the broker would permit.",
    "Write three sentences on the difference between an unrealised loss on a share and an unrealised loss on a future, in terms of what happens to your cash."
  ],

  quiz: [
    { q: "Futures margin is best described as:",
      options: [
        "A part-payment towards the goods",
        "A performance bond held to prove you can meet tomorrow's losses, returned when you close",
        "A fee charged by the exchange",
        "Interest on borrowed money"
      ], a: 1,
      why: "Nothing is being purchased today, so there is nothing to part-pay for. It is collateral, and the exchange can raise the requirement when volatility rises." },

    { q: "What happens to an open losing futures position at the end of each trading day?",
      options: [
        "Nothing until you close it",
        "The loss is debited from your account in cash, that evening",
        "It is added to a running unrealised total",
        "The broker charges overnight financing"
      ], a: 1,
      why: "Mark to market settles every position daily in real cash. This is why you can be right about direction and still be finished — running out of money and being wrong are two different ways to lose." },

    { q: "Your account falls below maintenance margin. What does the call require?",
      options: [
        "Topping up to just above maintenance",
        "Restoring the account to the initial margin level, within a short deadline",
        "Closing half the position",
        "Nothing, provided the position recovers"
      ], a: 1,
      why: "Back to initial, not to maintenance — and the deadline is usually hours. Miss it and the broker liquidates at whatever price exists, with no say from you." },

    { q: "£20,000 account, 1% risk, stop 30 ticks away, tick value $12.50. How many contracts?",
      options: ["Half a contract", "One contract", "Two contracts", "Five contracts"],
      a: 0,
      why: "£200 risk ÷ (30 × $12.50 = $375) is roughly 0.53 contracts. You cannot trade half. The honest answers are the micro contract or no trade — rounding up to one risks nearly twice what you intended." },

    { q: "One contract has a notional value of $250,000 on $12,000 of margin. Which number should you judge the position by?",
      options: [
        "The margin, since that is what you have committed",
        "The notional value, since that is what you are actually exposed to",
        "Neither; only the tick value matters",
        "The difference between them"
      ], a: 1,
      why: "Margin tells you what it costs to open. Notional tells you what a move does to you. Judging positions by margin posted is how people end up with far more exposure than they believe." }
  ]
}

]);
