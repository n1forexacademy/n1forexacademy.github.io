/* N1 Forex Academy — Module 404 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 404 ============================ */
{
  id: 404,
  track: 'options',
  title: "Volatility — What You Are Really Trading",
  tagline: "Two people can agree exactly where the price is going and still disagree on what the option is worth. Volatility is the argument.",
  level: "Derivatives",
  duration: "90 min",

  objectives: [
    "Explain what volatility measures, and that it has no direction",
    "Tell the difference between realised volatility and implied volatility",
    "Explain why implied volatility is a price rather than a measurement",
    "Describe what happens to option prices around a known event, and afterwards",
    "Explain how a correct directional call can still lose money on the option"
  ],

  misconceptions: [
    "**\"High volatility means the price is going up.\"** Volatility has no direction. It measures how far price moves, not which way. A market can be violently volatile and finish exactly where it started.",
    "**\"Implied volatility tells me what volatility will be.\"** It tells you what the market is *charging* for it. It is a price set by supply and demand for options, and it is frequently wrong in both directions.",
    "**\"Buying options before earnings is a good way to play the news.\"** Everybody has that idea, so implied volatility is bid up beforehand and collapses afterwards. You can be right about the direction and still lose.",
    "**\"Volatility is risk.\"** It is a measure of movement. Whether movement is risk depends entirely on your position — a seller fears it, a buyer needs it."
  ],

  glossary: [
    { t: "Volatility", d: "How much a price moves about, usually expressed as an annualised percentage. No direction." },
    { t: "Realised (historical) volatility", d: "How much the underlying actually moved over some past period. A measurement." },
    { t: "Implied volatility (IV)", d: "The volatility figure implied by the option's current price. A price, not a forecast." },
    { t: "Vega", d: "How much an option's price changes for a one-point change in implied volatility." },
    { t: "IV crush", d: "A sharp fall in implied volatility once a known event has passed, taking option prices down with it." },
    { t: "Volatility smile / skew", d: "The pattern where different strikes imply different volatilities, rather than one number for all." },
    { t: "Event premium", d: "The extra extrinsic value carried by options that expire after a known event." },
    { t: "Rich / cheap", d: "Shorthand for implied volatility being high or low relative to what has actually been realised." }
  ],

  slides: [
    { kicker: "The measure",
      title: "Volatility has no direction",
      bullets: [
        "**Volatility measures how far a price moves, not which way.** A market can be wildly volatile and end the year unchanged.",
        "It is normally quoted as an **annualised percentage**: 20% volatility means roughly a 20% range of typical annual movement.",
        "**Realised volatility** is what actually happened — a measurement of the past.",
        "**Implied volatility** is what the option price implies about the future — and it is **a price, not a measurement**.",
        "**That distinction is the whole module.** One is history; the other is what the market is charging today."
      ],
      note: "Students conflate volatility with danger and with direction, sometimes in the same sentence. Separating 'how far' from 'which way' early prevents most of the confusion in the rest of the track." },

    { kicker: "Implied volatility",
      title: "A price wearing the clothes of a forecast",
      bullets: [
        "Option prices are set by supply and demand, exactly like everything else you have traded.",
        "**Implied volatility is what you get by working backwards from the price** — the volatility figure that would justify what people are paying.",
        "**High IV means options are expensive. Low IV means they are cheap.** That is the honest translation.",
        "It is **not a forecast**. It is the market's current price for uncertainty, and it is wrong in both directions regularly.",
        "**When lots of people want protection, IV rises** — the same way insurance costs more after a storm, regardless of tomorrow's weather."
      ],
      note: "The insurance-after-a-storm comparison does the work here. It explains why IV rises on fear, why it is not predictive, and why selling into elevated IV is being paid more precisely when the danger is real." },

    { kicker: "Vega",
      title: "Your position has a volatility exposure whether you wanted one or not",
      bullets: [
        "**Vega** is how much an option's price moves when implied volatility changes by one point.",
        "**Every bought option is long vega.** Rising IV helps you; falling IV hurts you, even if the underlying does not move.",
        "**Every sold option is short vega.** You profit if IV falls, and you are hurt if it spikes.",
        "So buying a call is **not purely a bet on direction** — it is also a bet that volatility does not collapse.",
        "**Longer-dated options have more vega**, because there is more future for a volatility change to act on."
      ],
      note: "This is where students realise their 'simple directional trade' had a second exposure they never chose. That realisation is the point of the module, and it makes the greeks in 405 feel necessary rather than academic." },

    { kicker: "Events",
      title: "IV crush, and why being right can lose",
      bullets: [
        "Before a known event — results, a decision, a ruling — **implied volatility rises**, because a large move is genuinely possible.",
        "Options expiring after the event carry an **event premium** on top of ordinary time value.",
        "**The moment the event passes, the uncertainty is gone and IV collapses.** This is **IV crush**.",
        "**So you can be right about direction, get the move you predicted, and still lose**, because the volatility you paid for evaporated.",
        "**This is the single most common way beginners lose money on options**, and it looks like being cheated."
      ],
      note: "Work a concrete case: a share rises 4% on results, the call gains intrinsic value, and the position still loses because IV fell from 70 to 35. Students who have not seen this worked through will meet it with real money instead." },

    { kicker: "Rich or cheap",
      title: "Comparing what you pay to what actually happens",
      bullets: [
        "**Compare implied volatility to realised volatility.** IV far above what the underlying has actually been doing means options are expensive.",
        "**High IV favours sellers; low IV favours buyers** — all else equal, which it rarely is.",
        "**But high IV is usually high for a reason.** Being paid more to sell insurance before a storm is not obviously a bargain.",
        "**Different strikes imply different volatilities** — the skew. Downside puts are typically dearer, because people want protection more than they want upside.",
        "**Treat IV as context for choosing structure, not as a signal.** Same verdict as open interest, credit spreads and positioning."
      ],
      note: "The skew detail is worth including because it is visible on any chain and explains an apparent inconsistency students will otherwise puzzle over. Downside protection costing more is a statement about demand, not about probability." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "That volatility measures distance, not direction",
        "The difference between realised volatility and implied volatility, and that IV is a price",
        "That every option position carries a volatility exposure whether you chose one or not",
        "IV crush, and why a correct directional call can still lose money",
        "How to judge whether options are rich or cheap, and why that is context rather than a signal"
      ],
      note: "Module 405 names the exposures the student now knows they have. Having met vega through IV crush first, the greeks arrive as labels for things already understood rather than as five letters to memorise." }
  ],

  practical: {
    title: "Watch an event premium build and collapse",
    time: "45 min",
    intro: "IV crush is the commonest way beginners lose on options, and it is completely visible in advance. You will track it on a real event without risking anything.",
    setup: [
      "Choose a liquid company with a results date at least a week away.",
      "Pick the at-the-money call and put for the first expiry AFTER the results date, and the same strikes for an expiry well before it."
    ],
    steps: [
      { h: "Record the baseline", d: "For all four options, note the premium and the implied volatility. Compute the extrinsic value of each." },
      { h: "Note the gap", d: "Compare implied volatility on the post-event expiry against the pre-event expiry. That difference is the event premium. State it in both IV points and cash." },
      { h: "Track it daily", d: "Record the same figures each day up to the event. Note whether the event premium grows as the date approaches." },
      { h: "Record the aftermath", d: "On the first day after results, record the premiums and IV again, along with how far the underlying actually moved." },
      { h: "Score the hypothetical", d: "Had you bought the at-the-money call the day before, what would it be worth now? Break the change into the part from the underlying move and the part from the IV fall." }
    ],
    deliverable: "A daily table of premium and IV for four options, the event premium quantified, and a final breakdown separating the underlying's contribution from the volatility contribution.",
    rubric: [
      { c: "Separation", d: "Cleanly separates the price change caused by the underlying from the change caused by falling IV." },
      { c: "Event premium", d: "Quantifies the difference between pre- and post-event expiries rather than describing it." },
      { c: "Honesty", d: "Reports the hypothetical outcome even where a correct directional call still lost money." },
      { c: "Discipline", d: "No position was actually taken — this is an observation exercise." }
    ],
    pitfalls: [
      "Comparing two expiries at different strikes, which confuses skew with event premium.",
      "Recording only the premium and not the implied volatility, making the split impossible.",
      "Choosing an illiquid name where the quotes are stale.",
      "Skipping the final breakdown, which is the entire lesson."
    ]
  },

  homework: [
    "Find one underlying where implied volatility is far above what it has actually realised over the last month, and write two sentences on what the market might be pricing.",
    "Look at one chain and note whether downside puts imply higher volatility than upside calls. Write one sentence on what that says about demand.",
    "Describe in two sentences a trade where you would want to be a buyer of volatility, and one where you would want to be a seller — without reference to direction."
  ],

  quiz: [
    { q: "Implied volatility is best described as:",
      options: [
        "A forecast of how much the price will move",
        "The market's current price for uncertainty, backed out of the option price",
        "A measurement of how much the price has moved",
        "The same thing as realised volatility"
      ], a: 1,
      why: "It is a price, not a prediction. High IV means options are expensive; low IV means they are cheap. It is set by supply and demand and is regularly wrong in both directions." },

    { q: "A share rises 4% on results, exactly as you predicted, but your call loses money. The most likely reason:",
      options: [
        "The broker mispriced it",
        "IV crush — the event premium collapsed once the uncertainty was resolved",
        "The move was in the wrong direction",
        "Time decay over one day"
      ], a: 1,
      why: "You paid for elevated implied volatility, and the moment results landed that uncertainty disappeared. This is the commonest way beginners lose on options, and it feels like being cheated." },

    { q: "You buy a call and the underlying does not move, but implied volatility falls sharply. Your position:",
      options: [
        "Is unchanged",
        "Loses money — every bought option is long vega",
        "Gains money",
        "Is unaffected until expiry"
      ], a: 1,
      why: "Buying an option is not purely a directional trade. It carries a volatility exposure whether or not you chose one, and a collapse in IV hurts even with the underlying still." },

    { q: "High volatility means:",
      options: [
        "Price is likely to rise",
        "Price is moving a long way, in either direction",
        "The market is falling",
        "Options are cheap"
      ], a: 1,
      why: "Volatility measures distance, not direction. A market can be violently volatile and finish exactly where it started — and high volatility means options are expensive, not cheap." },

    { q: "Downside puts on an index typically imply higher volatility than equivalent upside calls. This mainly reflects:",
      options: [
        "A mathematical error in pricing",
        "Demand — more people want protection against falls than exposure to rises",
        "That falls are always larger than rises",
        "Regulatory requirements"
      ], a: 1,
      why: "The skew is a statement about demand rather than about probability. Insurance costs what people will pay for it, and protection is wanted more urgently than upside." }
  ]
}

]);
