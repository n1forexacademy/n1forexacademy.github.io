/* N1 Forex Academy — Module 107. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 107 ============================= */
{
  id: 107, track: 'equities',
  title: "Risk Without Leverage",
  tagline: "Position sizing when there is no margin, no pip value, and gaps arrive overnight.",
  level: "Advanced",
  duration: "120 min",

  objectives: [
    "Size an equity position from a stop and a risk percentage, without leverage",
    "Explain why stops behave differently in equities than in forex",
    "Apply concentration limits per company and per sector",
    "Quantify gap risk and size so that a bad open is survivable",
    "Translate the forex risk policy into an equity risk policy"
  ],

  misconceptions: [
    "**\"No leverage means no risk management needed.\"** Concentration alone can ruin you. A single company at 40% of a portfolio does not need leverage to be reckless.",
    "**\"My stop caps my loss.\"** It caps it in a continuously trading market. Equities gap overnight routinely, and the stop fills wherever the shares reopen.",
    "**\"I'll just use the same 1% rule.\"** The principle transfers; the arithmetic does not. There are no pips and no lots — you size in shares.",
    "**\"Diversification replaces position sizing.\"** They solve different problems. Diversification addresses which risks you hold; sizing addresses how much of each."
  ],

  glossary: [
    { t: "Position size", d: "Number of shares, derived from risk amount and stop distance." },
    { t: "Stop distance", d: "The gap between entry and stop, expressed in cash or as a percentage of price." },
    { t: "Concentration limit", d: "The maximum share of a portfolio permitted in one company or sector." },
    { t: "Gap risk", d: "The risk that price reopens far from the previous close, past your stop." },
    { t: "Portfolio heat", d: "Total risk across all open positions if every stop were hit." },
    { t: "Overnight risk", d: "Exposure held while the exchange is shut and cannot be exited." },
    { t: "Position sizing in shares", d: "Risk amount divided by per-share stop distance, giving a share count." }
  ],

  slides: [
    {
      kicker: "Module 107 · Sizing",
      title: "The same formula, different units",
      bullets: [
        "**Shares to buy = (Portfolio × Risk %) ÷ (Entry price − Stop price)**",
        "Example: £20,000 portfolio, 1% risk, entry £50, stop £46.",
        "Risk amount = **£200**. Per-share risk = **£4**. Shares = **50**.",
        "That is a **£2,500 position**, or 12.5% of the portfolio, risking 1%.",
        "**Notice both numbers matter.** The risk is 1%, but the concentration is 12.5% — and a gap ignores the stop entirely."
      ],
      note: "The dual-number point is the heart of the module. In forex, position size and risk were effectively the same conversation. In equities, a modest risk can still be a large concentration, and gaps make concentration the binding constraint."
    },
    {
      kicker: "Module 107 · Stops",
      title: "Why stops behave differently here",
      bullets: [
        "**Overnight gaps are routine**, not exceptional. Earnings, warnings, sector news.",
        "**Trading halts** mean you may be unable to exit at all for a period.",
        "**Wider natural volatility** in individual shares than in major currency pairs.",
        "A stop is still worth having — most exits happen normally.",
        "**But size assuming a bad exit, not the planned one.** That is the whole discipline."
      ],
      note: "Connect this to the Swiss franc lesson from Module 3. There, a catastrophic gap was a rare event. Here it is a scheduled quarterly possibility, so what was a tail risk becomes a planning assumption."
    },
    {
      kicker: "Module 107 · Concentration",
      title: "Two limits, not one",
      bullets: [
        "**Risk per trade:** what you lose if the stop works. Typically 1%.",
        "**Concentration per position:** how much of the portfolio sits in one company. **This is the gap defence.**",
        "A reasonable starting point: **no single company above 10%** of the portfolio.",
        "**And a sector limit** — from Module 106 — of perhaps 25–30%.",
        "**Ask: if this company gapped down 40% overnight, what would it do to me?** If the answer is unacceptable, the position is too large."
      ],
      note: "The 40% gap question is the practical test students should apply to every position. It converts an abstract limit into a concrete, imaginable event, and it is the equity equivalent of the Module 3 blow-up lab."
    },
    {
      kicker: "Module 107 · Portfolio",
      title: "Total heat and correlated risk",
      bullets: [
        "**Portfolio heat:** add up what you would lose if every stop were hit at once.",
        "Keep it bounded — perhaps **5–6% total** across all positions.",
        "**Correlated positions count once**, exactly as in forex.",
        "**In a market-wide fall, all stops hit together.** That is the scenario heat is measuring.",
        "**Cash is a position.** Holding some is a decision, not a failure to act."
      ],
      note: "The 'cash is a position' point matters for students conditioned by forex to be always in the market. In equities, choosing not to hold is a legitimate and often correct action."
    },
    {
      kicker: "Module 107 · Policy",
      title: "Translating your forex risk policy",
      bullets: [
        "**Risk per trade:** carries over directly, typically 1%.",
        "**Add: maximum position size** as a percentage of portfolio.",
        "**Add: maximum sector exposure.**",
        "**Add: an events rule** — what you do into earnings, from Module 105.",
        "**Keep: never widen a stop, never average down, honour the daily and weekly stops.**",
        "**The principles are unchanged. The specific limits are new.**"
      ],
      note: "Have students physically extend the signed risk policy from the forex track rather than writing a separate one. One document, two asset classes — it reinforces that risk management is a single discipline."
    },
    {
      kicker: "Module 107 · Wrap",
      title: "The risk model you now have",
      bullets: [
        "Sizing in shares from a stop and a risk percentage",
        "Why concentration matters as much as risk when gaps are routine",
        "Two limits — per position and per sector — plus total portfolio heat",
        "The 40% gap test as a practical sizing check",
        "One risk policy extended, not replaced"
      ],
      note: "If a student can state both their risk per trade and their concentration limit without looking, this module has worked. Those two numbers govern almost everything that follows."
    }
  ],

  practical: {
    title: "Lab 107 — Build the equity risk engine",
    time: "80 min",
    intro: "The student extends the Risk Engine from the forex track to handle share position sizing, concentration limits and gap scenarios. One workbook, both asset classes.",
    setup: [
      "The **Risk Engine** workbook from the forex track",
      "The **Exposure Map** from Lab 106",
      "Historical gap data from Lab 105",
      "A notional portfolio value"
    ],
    steps: [
      { h: "Add the share sizing calculator", d: "Inputs: portfolio value, risk percentage, entry price, stop price. Outputs: share count, cash position size, and that position as a percentage of the portfolio. Verify by hand on three examples before trusting the sheet." },
      { h: "Add the concentration check", d: "Flag automatically when a computed position exceeds your chosen per-company limit. Note how often a 1% risk with a tight stop produces an over-concentrated position — this is the tension the module is about." },
      { h: "Add the gap test", d: "For any position, compute the portfolio loss if the share gapped down 20%, 40% and 60% overnight. Use the largest real gap from Lab 105 as a sanity check that these are not hypothetical." },
      { h: "Model portfolio heat", d: "List six hypothetical positions with their stops. Total the loss if all stops hit. Then group by sector and recompute treating each sector as one position." },
      { h: "Find the binding constraint", d: "For a tight stop and a wide stop on the same share, work out which limit binds first — risk or concentration. Record the stop distance at which they cross." },
      { h: "Stress a market fall", d: "Apply a 25% market decline using rough betas from Lab 106. Compute portfolio loss and compare with your stated maximum drawdown tolerance." },
      { h: "Extend the signed policy", d: "Add to the existing risk policy: risk per trade for equities, maximum position size, maximum sector exposure, the events rule, and the gap assumption. Sign and date the addition." }
    ],
    deliverable: "An extended **Risk Engine** with a verified share sizing calculator, an automatic concentration flag, gap loss modelling at three severities, portfolio heat computed both per-position and per-sector, the crossover point where concentration binds before risk, a 25% market stress test, and a signed addition to the risk policy.",
    rubric: [
      { c: "Sizing accuracy", d: "Share counts verified by hand on three examples and correct in cash terms." },
      { c: "Dual awareness", d: "Reports both risk percentage and concentration percentage, and flags when concentration binds." },
      { c: "Gap modelling", d: "Computes losses at three gap severities and anchors them to a real historical gap." },
      { c: "Heat discipline", d: "Portfolio heat computed with correlated positions counted once by sector." },
      { c: "Policy integration", d: "Extended the existing signed policy rather than writing a separate document, with specific numeric limits." }
    ],
    pitfalls: [
      "Reporting only risk percentage and ignoring concentration. Both numbers, every time.",
      "Using a very tight stop to justify a large position. The gap test exists to catch exactly this.",
      "Treating gap scenarios as hypothetical. Anchor them to the real gaps measured in Lab 105.",
      "Forgetting that in a market fall, every stop hits at once. That is what heat measures."
    ]
  },

  homework: [
    "Size ten hypothetical positions using the calculator, recording both risk and concentration for each.",
    "Find three shares that gapped more than 25% overnight in the last year and compute what each would have done to a 10% position.",
    "Read your extended risk policy aloud and check every limit is a number rather than an intention."
  ],

  quiz: [
    { q: "£20,000 portfolio, 1% risk, entry £50, stop £46. How many shares?",
      options: ["4 shares", "50 shares", "200 shares", "400 shares"],
      a: 1,
      why: "Risk amount is £200; per-share risk is £4; £200 ÷ £4 = 50 shares. That is a £2,500 position — 12.5% of the portfolio. Note both numbers: the risk is 1% but the concentration is 12.5%, and a gap ignores the stop." },
    { q: "Why does concentration matter as much as risk percentage in equities?",
      options: ["It does not, risk percentage is sufficient", "Because overnight gaps bypass the stop entirely, so the full position is exposed, not just the intended risk", "Because brokers charge by position size", "Because concentration affects commission"],
      a: 1,
      why: "A stop only limits loss in a continuously trading market. When a share gaps down 40% on a warning, your loss is driven by position size, not by where the stop was placed." },
    { q: "You hold six positions, four of them banks. Computing portfolio heat, the banks should be:",
      options: ["Counted as four separate positions", "Counted as approximately one position, because they will fall together", "Excluded from the calculation", "Counted twice for prudence"],
      a: 1,
      why: "Sector holdings respond to the same drivers and their stops hit together. This is the correlation rule from the forex track applied to equities — count exposure by group." },
    { q: "The practical test for whether a position is too large is:",
      options: ["Whether the stop feels comfortable", "Asking what a 40% overnight gap in that share would do to the portfolio", "Whether it fits within commission budgets", "Whether the company is profitable"],
      a: 1,
      why: "It converts an abstract limit into an imaginable event. If the answer to the gap question is unacceptable, the position is too large regardless of where the stop sits." },
    { q: "In an equity portfolio, holding cash is:",
      options: ["A failure to deploy capital", "A legitimate position and an active decision", "Only appropriate for beginners", "The same as being fully invested"],
      a: 1,
      why: "Forex conditions traders to be either in or out of a single trade. In a portfolio, the proportion held in cash is itself a risk decision, and choosing not to hold is often the correct action." }
  ]
}

]);
