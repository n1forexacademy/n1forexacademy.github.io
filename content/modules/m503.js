/* N1 Forex Academy — Module 503 (Crypto track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 503 ============================ */
{
  id: 503,
  track: 'crypto',
  title: "What Actually Moves the Price",
  tagline: "Thin books, reflexive flows and a market that trades every hour of every day — including the ones where nobody is watching.",
  level: "Digital Assets",
  duration: "80 min",

  objectives: [
    "Explain why liquidity in this market is thinner than the headline volume suggests",
    "Describe how leverage and liquidation cascades amplify ordinary moves",
    "Explain why crypto trades continuously and what that does to your risk",
    "Identify the recurring drivers that genuinely move prices",
    "Apply the correlation lesson from earlier tracks to a portfolio of tokens"
  ],

  misconceptions: [
    "**\"Huge daily volume means deep liquidity.\"** Reported volume includes wash trading on some venues and is fragmented across dozens of others. Depth at the price you want to trade is the number that matters, and it is much thinner.",
    "**\"A 20% move must mean major news.\"** It frequently means a leveraged cascade — liquidations forcing sales that trigger further liquidations, with no new information involved at all.",
    "**\"Diversifying across ten tokens spreads my risk.\"** Most tokens move together, and correlations rise sharply in a sell-off. Ten tokens is usually one bet with ten names on it.",
    "**\"Trading 24/7 means I can always get out.\"** The worst moves land in the thinnest hours, when the book is emptiest and you are least likely to be awake."
  ],

  glossary: [
    { t: "Order book depth", d: "How much is resting near the current price. The honest measure of liquidity." },
    { t: "Fragmentation", d: "The same asset trading across many venues, so no single book holds the true depth." },
    { t: "Wash trading", d: "Fake volume created by trading with oneself, inflating reported activity on some venues." },
    { t: "Liquidation cascade", d: "Forced closures of leveraged positions triggering price moves that force further closures." },
    { t: "Reflexivity", d: "Price movement causing behaviour that causes more of the same movement." },
    { t: "Dominance", d: "The share of total market value held by the largest asset. A rough gauge of risk appetite within the sector." },
    { t: "Correlation (crypto)", d: "How closely tokens move together. Usually high, and higher in a sell-off." },
    { t: "Unlock event", d: "A scheduled release of previously locked tokens. A supply increase with a published date." }
  ],

  slides: [
    { kicker: "Liquidity",
      title: "Thinner than the headline suggests",
      bullets: [
        "Reported volumes look enormous. **Depth at the price you actually want to trade is a different number.**",
        "**Trading is fragmented** across dozens of venues, so no single book shows the real picture.",
        "**Some reported volume is not real.** Wash trading has inflated figures on parts of this market for years.",
        "**Outside the largest assets, books thin out sharply**, and your own order becomes the news — Module 102's lesson, in a market where it bites harder.",
        "**Judge liquidity by depth on the venue you would actually use**, never by a headline volume figure."
      ],
      note: "Students transfer 'high volume equals liquid' from equities without checking. Have them look at a real book for a mid-sized token and compare it to the reported daily volume; the gap does the teaching." },

    { kicker: "Leverage",
      title: "Why ordinary moves become violent ones",
      bullets: [
        "Very high leverage is widely available here, and widely used.",
        "When price moves against a crowd of leveraged positions, they are **closed automatically** — Module 302's mechanism, applied at speed.",
        "**Those forced closures are market orders**, which push price further, which triggers the next tier of liquidations.",
        "**That is a liquidation cascade**, and it can produce a 20% move with no news whatsoever.",
        "**Reflexivity:** the move causes the behaviour that causes more of the move. **Nothing was learned; positions were merely unwound.**"
      ],
      note: "This is the single most useful mechanical insight in the track. It explains the violence of the market without invoking manipulation, and it tells students exactly why their stops get taken in moves that later look meaningless." },

    { kicker: "Hours",
      title: "It never closes, and that is not a benefit",
      bullets: [
        "**No opening bell, no weekend, no holidays.** There is always somewhere to trade.",
        "**Liquidity still has a rhythm.** Depth thins overnight and at weekends, exactly as it did in forex.",
        "**The largest moves cluster in the thinnest hours**, because it takes less to move a thin book.",
        "**A stop left through those hours can fill a long way from your level** — Module 5's rollover lesson, in a harsher market.",
        "**Continuous trading is not continuous liquidity.** You have now met that sentence in three different markets."
      ],
      note: "The weekend point is worth making concrete: traditional markets are shut, so crypto absorbs weekend news alone, on the thinnest book of the week. That combination produces a disproportionate share of large moves." },

    { kicker: "Drivers",
      title: "What genuinely moves prices",
      bullets: [
        "**Broad risk appetite.** In risk-off conditions crypto has generally behaved like a high-beta risk asset, not a safe haven — Module 9's regime lesson.",
        "**Interest rates and liquidity conditions**, for the same reason: cheap money supports speculative assets.",
        "**Regulatory news**, which can be sudden and jurisdiction-specific.",
        "**Supply events**, including scheduled unlocks you can read about in advance — Module 501.",
        "**Leverage positioning**, which sets how violently any of the above gets expressed.",
        "**Notice how much of this you already learned in earlier tracks.**"
      ],
      note: "The final bullet is deliberate. Students expect crypto to require an entirely new framework; in fact the drivers are largely familiar, and the differences are in liquidity, leverage and custody rather than in analysis." },

    { kicker: "Correlation",
      title: "Ten tokens, one bet",
      bullets: [
        "**Most tokens move with the largest assets**, and the relationship tightens in a sell-off.",
        "Holding ten different names commonly means **one position expressed ten ways** — Module 106's sector lesson, more extreme.",
        "**Correlations rise exactly when you were relying on diversification.** You have met this in forex, in equities and now here.",
        "**Count exposure by theme, not by line.** Ask what all your holdings need in order to work.",
        "**If the answer is 'the same thing', you have one position.**"
      ],
      note: "Third appearance of the correlation lesson, and worth naming as such. Repetition across asset classes is what converts it from a fact students can recite into an instinct they act on." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "Why headline volume overstates the liquidity you can actually access",
        "How liquidation cascades manufacture large moves out of no information",
        "Why continuous trading is not continuous liquidity",
        "The drivers that genuinely matter, most of which you already knew",
        "Why a basket of tokens is usually a single position"
      ],
      note: "Module 504 covers perpetual futures and funding rates, which is where the leverage described here actually lives and where liquidation stops being an abstraction." }
  ],

  practical: {
    title: "Measure the book, not the headline",
    time: "35 min",
    intro: "You will compare reported volume against the depth you could actually trade, and see how far a modest order would move the price.",
    setup: [
      "Choose three assets: the largest by market value, one mid-sized, and one small.",
      "Use one venue you would realistically trade on, and view its order book."
    ],
    steps: [
      { h: "Record the headline", d: "Note each asset's reported 24-hour volume across all venues." },
      { h: "Measure real depth", d: "On your chosen venue, sum the resting orders within 0.5% of the current price, on both sides." },
      { h: "Compute the ratio", d: "Express that depth as a percentage of reported daily volume. Compare the three." },
      { h: "Walk the book", d: "Work out how far price would move if you sold a position worth 1% of that near-price depth, then 10%, then 50%." },
      { h: "Set your limit", d: "For each asset, state the largest position you would be willing to hold given what you found. Justify against the exit, not the entry." }
    ],
    deliverable: "A three-asset table of reported volume, measured near-price depth, depth as a percentage of volume, the price impact of three order sizes, and a stated maximum position with justification.",
    rubric: [
      { c: "Depth measured", d: "Sums actual resting orders rather than quoting a liquidity score." },
      { c: "The gap", d: "Explicitly compares measured depth against reported volume and comments on the difference." },
      { c: "Exit thinking", d: "Position limits justified by how the position would be exited, not by how it would be entered." },
      { c: "Small asset honesty", d: "Reports plainly if the smallest asset cannot support a meaningful position." }
    ],
    pitfalls: [
      "Using aggregated volume from a data site as though it were tradeable depth.",
      "Measuring depth only on the buy side.",
      "Sizing on the entry, where liquidity is always better than on a rushed exit.",
      "Choosing three assets of similar size, which removes the contrast the lab depends on."
    ]
  },

  homework: [
    "Find a day when a major crypto asset moved more than 10% and check whether any significant news was published. If not, write two sentences on what else could produce that move.",
    "Compare the weekend price range of one asset against a typical weekday range over a month. Note which is larger and suggest why.",
    "List every crypto position you would consider holding and write one sentence stating what they all need in order to work."
  ],

  quiz: [
    { q: "Reported 24-hour volume is enormous but the order book is thin. Which matters for your trade?",
      options: [
        "Reported volume, since it shows overall interest",
        "Depth near the price on the venue you would actually use",
        "Both equally",
        "Neither; use the market capitalisation"
      ], a: 1,
      why: "Volume is fragmented across venues and some of it is not real. Depth at the price you want to trade is the number that decides your fill — Module 102's lesson, biting harder here." },

    { q: "A token falls 20% in an hour with no news at all. The most likely mechanism:",
      options: [
        "Coordinated manipulation",
        "A liquidation cascade — forced closures of leveraged positions triggering further forced closures",
        "An exchange outage",
        "A scheduled unlock"
      ], a: 1,
      why: "Forced closures are market orders, which push price into the next tier of liquidations. It is reflexivity: the move causes the behaviour that causes more of the move, with no new information at all." },

    { q: "Crypto trades continuously. What does that mean for your risk?",
      options: [
        "You can always exit at a fair price",
        "Liquidity still thins overnight and at weekends, and the largest moves cluster in exactly those hours",
        "Gap risk is eliminated",
        "Stops always fill at their level"
      ], a: 1,
      why: "Continuous trading is not continuous liquidity — a sentence you have now met in forex, futures and crypto. Weekends are worse still, because traditional markets are shut and the book is at its thinnest." },

    { q: "You hold ten different tokens. Your diversification is:",
      options: [
        "Strong — ten separate assets",
        "Weak — most tokens move together, and correlations tighten in a sell-off",
        "Complete if they span different categories",
        "Irrelevant to risk"
      ], a: 1,
      why: "This is the third appearance of the correlation lesson, after forex pairs and equity sectors. Count exposure by theme, and if every holding needs the same thing to happen, you have one position." },

    { q: "In a broad risk-off event, crypto has generally behaved:",
      options: [
        "As a safe haven, rising while equities fall",
        "As a high-beta risk asset, falling with equities",
        "Independently of other markets",
        "Like a government bond"
      ], a: 1,
      why: "This is Module 9's risk-on and risk-off regime, applied here. It matters most for anyone holding crypto as a hedge against exactly the conditions in which it has historically fallen hardest." }
  ]
}

]);
