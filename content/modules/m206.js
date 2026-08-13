/* N1 Forex Academy — Module 206. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 206 ============================= */
{
  id: 206, track: 'bonds',
  title: "Bonds, Rates and Currencies — Closing the Loop",
  tagline: "The three markets you have studied are one system. This module shows you the wiring.",
  level: "Advanced",
  duration: "120 min",

  objectives: [
    "Trace how a central bank decision transmits through bonds to currencies and equities",
    "Explain the carry trade in terms of rate differentials and its real risks",
    "Describe how rates affect equity valuations",
    "Use cross-market signals as context without treating them as predictions",
    "Decide where your own effort is best spent across the three asset classes"
  ],

  misconceptions: [
    "**\"These are three separate markets.\"** They are three views of the same expectations about growth, inflation and policy. A move in one is usually visible in the others.",
    "**\"Carry trades are free money.\"** You collect a rate differential and take currency risk. They work for long stretches and then unwind violently, wiping out years of accumulated carry in weeks.",
    "**\"Rates don't affect share prices.\"** Higher rates raise the discount applied to future earnings and make bonds a more competitive alternative. Long-duration growth companies are hit hardest.",
    "**\"Cross-market analysis tells you what happens next.\"** It gives context and occasionally early warning. It is not a forecast, and relationships break down exactly when they matter most."
  ],

  glossary: [
    { t: "Transmission mechanism", d: "How a central bank decision propagates through markets and the real economy." },
    { t: "Carry trade", d: "Borrowing in a low-rate currency to hold a higher-rate one, collecting the differential." },
    { t: "Carry unwind", d: "A rapid, disorderly reversal of carry positions, usually in a risk-off shock." },
    { t: "Discount rate", d: "The rate used to value future cash flows. Higher rates reduce the present value of distant earnings." },
    { t: "Real yield", d: "Nominal yield minus expected inflation." },
    { t: "Risk-on / risk-off", d: "Broad sentiment regimes, visible simultaneously in credit, equities and currencies." },
    { t: "Cross-market analysis", d: "Reading several markets together for context that no single one provides." },
    { t: "Correlation breakdown", d: "A historical relationship ceasing to hold, often during stress." }
  ],

  slides: [
    {
      kicker: "Module 206 · The chain",
      title: "One decision, three markets",
      bullets: [
        "A central bank signals **higher rates for longer**.",
        "**Bonds move first:** yields rise, prices fall, and the curve reshapes — Modules 202 and 205.",
        "**Currency follows:** higher expected rates attract capital, so the currency strengthens — Module 9.",
        "**Equities react:** future earnings are discounted more heavily, and bonds become a more competitive alternative — so valuations compress.",
        "**Same event. Three markets. One mechanism.**"
      ],
      note: "This slide is the reason the bonds track exists. Draw the chain on the board and walk through a real recent decision. Students should feel three separate courses snapping into one picture."
    },
    {
      kicker: "Module 206 · Carry",
      title: "The carry trade, honestly",
      bullets: [
        "Borrow in a **low-rate currency**, hold a **high-rate** one, collect the difference.",
        "It is the swap credit from Module 1, deliberately harvested.",
        "**It works for long stretches** — sometimes years of steady accumulation.",
        "**Then it unwinds violently.** In risk-off shocks, everyone exits at once and the high-yielder collapses.",
        "**Years of carry can be erased in weeks.** The return profile is many small gains and rare large losses — the shape that ruins people who size for the calm periods."
      ],
      note: "The return shape is the lesson: frequent small wins and rare enormous losses is precisely the martingale profile from Module 10, arrived at by a respectable route. Make that connection explicit."
    },
    {
      kicker: "Module 206 · Rates and equities",
      title: "Why higher rates compress valuations",
      bullets: [
        "A share's value depends on **future earnings discounted back to today**.",
        "**Higher rates mean a heavier discount**, so distant earnings are worth less now.",
        "**Companies whose value sits far in the future** — high-growth, low current profit — are hit hardest.",
        "**Companies with earnings now** are less affected.",
        "**This is duration, applied to equities.** The concept from Module 203 transfers directly."
      ],
      note: "Equity duration is a genuinely useful frame that most retail investors never encounter. A high-growth company is a long-duration asset, and it behaves like one when rates move."
    },
    {
      kicker: "Module 206 · Reading across",
      title: "What each market tells you",
      bullets: [
        "**The front end of the curve:** what the market expects the central bank to do.",
        "**Credit spreads:** whether the market is worried about solvency — Module 204.",
        "**Equity behaviour:** appetite for risk generally.",
        "**Currency:** the relative version of all of the above.",
        "**When these disagree, something is being repriced.** Disagreement is information."
      ],
      note: "Divergence is the practically useful signal. When credit widens while equities keep rising, one of them is wrong, and historically credit has been right more often. Frame it as a question to investigate, not a trade."
    },
    {
      kicker: "Module 206 · Limits",
      title: "Where cross-market analysis fails",
      bullets: [
        "**Relationships break down**, and usually when they would have been most valuable.",
        "**Correlations are unstable** — the Module 2 and Module 9 lesson, one final time.",
        "**Lags vary enormously.** Being early is indistinguishable from being wrong for a long time.",
        "**Central banks change reaction functions.** What drove markets last cycle may not drive this one.",
        "**Use it for context and position sizing, never as a signal generator.**"
      ],
      note: "End the analytical content honestly, as every track has. Cross-market reading makes a trader better informed, not clairvoyant, and students who treat it as predictive will size accordingly and be hurt."
    },
    {
      kicker: "Module 206 · Choosing",
      title: "Where should your effort go",
      bullets: [
        "**Forex:** continuous, liquid, leverage available, fast feedback, punishes over-leverage.",
        "**Equities:** ownership, research available, gap risk, slow feedback, punishes over-concentration.",
        "**Bonds:** defined cash flows, rate sensitivity, the machinery under the other two.",
        "**Most people should pick one to trade** and understand the others as context.",
        "**Understanding all three makes you better at whichever you choose.** That was the point of this progression."
      ],
      note: "Do not push students toward any one market. The honest position is that all three reward process and punish carelessness differently, and knowing the system makes them better wherever they focus."
    },
    {
      kicker: "Module 206 · Wrap",
      title: "The system, complete",
      bullets: [
        "How one central bank decision transmits through bonds, currencies and equities",
        "The carry trade, its real return shape, and why it ruins people who size for calm",
        "Why higher rates compress valuations, and equity duration as a concept",
        "What each market tells you, and why disagreement between them is information",
        "The honest limits of all of it",
        "Where your own effort is best spent"
      ],
      note: "This closes the academy. A student here has completed forex, equities and fixed income, holds three certificates, and has a supervised demo record. Remind them that none of it promises profit — it gives them a process and the ability to tell whether it is working."
    }
  ],

  practical: {
    title: "Lab 206 — Trace one decision across three markets",
    time: "80 min",
    intro: "The capstone. The student takes a single real central bank decision and follows its transmission through bonds, currencies and equities, then writes an honest assessment of where their own effort belongs.",
    setup: [
      "A recent significant central bank decision, ideally one that surprised the market",
      "Data for that country's yield curve, currency, and main equity index around the date",
      "All previous track deliverables",
      "A document named **Cross-Market Study**"
    ],
    steps: [
      { h: "Establish expectations before the decision", d: "Record what the market expected: the priced probability of a move, and the shape of the front end of the curve the day before." },
      { h: "Record the decision and the surprise", d: "What was announced, and how it differed from expectations — including the statement and any guidance, not just the rate." },
      { h: "Track the bond reaction", d: "Record 2-year and 10-year yields the day before, the day of, and a week after. Classify the curve change as a shift, steepening or flattening." },
      { h: "Track the currency", d: "Record the main pair over the same three points. Compare the direction with what the rate-differential logic from Module 9 would have predicted." },
      { h: "Track equities", d: "Record the main index over the same points. Then compare a high-growth sector with a value or income sector and note which moved more — the equity duration effect." },
      { h: "Check credit", d: "Record what high yield spreads did over the same period. Note whether credit corroborated or contradicted the equity reaction." },
      { h: "Find the disagreement", d: "Identify any point where two markets implied different things. Write down which turned out to be right, and whether that was knowable at the time." },
      { h: "Write the capstone assessment", d: "Two paragraphs: what the transmission chain looked like in this real case including where it did not behave as theory suggests, and an honest statement of which asset class suits your circumstances, capital and available time — with reasons." }
    ],
    deliverable: "A **Cross-Market Study**: pre-decision expectations, the announcement and its surprise, bond reaction at two maturities with the curve change classified, currency reaction compared with rate-differential logic, equity reaction including a growth-versus-value comparison, credit spread behaviour, one documented disagreement between markets with its resolution, and a two-paragraph capstone assessment.",
    rubric: [
      { c: "Expectation baseline", d: "Established what was priced beforehand, demonstrating that surprise rather than level drives the reaction." },
      { c: "Transmission tracing", d: "Followed the chain through all three markets with real figures at consistent time points." },
      { c: "Equity duration", d: "Compared growth against value sectors and connected the difference to the discount rate effect." },
      { c: "Intellectual honesty", d: "Recorded where markets did not behave as theory predicts, rather than fitting the data to the story." },
      { c: "Self-assessment", d: "Capstone states a reasoned choice of asset class grounded in the student's actual circumstances." }
    ],
    pitfalls: [
      "Choosing a decision that was fully expected, where there is little reaction to trace. Pick a surprise.",
      "Fitting the data to the theory. Where the chain broke down is the most valuable part of the exercise.",
      "Comparing markets at inconsistent time points. Use the same three timestamps throughout.",
      "Writing a capstone that names the most exciting market rather than the one that fits the student's life."
    ]
  },

  homework: [
    "Repeat the transmission trace for a second decision and compare how similar the pattern was.",
    "Track the front end of two countries' curves and their currency pair weekly for a month.",
    "Review all three tracks and write a one-page summary of the process you will actually follow."
  ],

  quiz: [
    { q: "A central bank signals higher rates for longer. In what order do markets typically respond?",
      options: ["Equities first, then bonds, then currency", "Bonds reprice first, the currency follows the rate expectation, and equity valuations compress", "All simultaneously and identically", "Currency first, bonds last"],
      a: 1,
      why: "Rate expectations are priced in the bond market first. The currency follows because capital chases expected yield, and equities compress because future earnings are discounted more heavily and bonds become more competitive." },
    { q: "The real risk of a carry trade is:",
      options: ["The interest differential narrowing slowly", "A rapid risk-off unwind that erases years of accumulated carry in weeks", "Commission costs", "Rollover timing"],
      a: 1,
      why: "Carry produces many small gains and rare very large losses. That shape is the same profile as a martingale arrived at by a respectable route, and it ruins traders who size for the calm periods." },
    { q: "Why do high-growth companies fall more than income stocks when rates rise?",
      options: ["They are more leveraged", "Their value sits further in the future, so a higher discount rate reduces it more — equity duration", "They pay no dividends", "They are more heavily shorted"],
      a: 1,
      why: "Valuation is future earnings discounted to today. A company whose profits are mostly distant is a long-duration asset, and behaves like one — the concept from Module 203 transfers directly." },
    { q: "Credit spreads widen sharply while equities keep making new highs. What does this mean?",
      options: ["Nothing, they are unrelated markets", "Two markets disagree about risk — worth investigating, since credit has often registered stress earlier", "Equities are definitely wrong", "Bonds are definitely wrong"],
      a: 1,
      why: "Disagreement between markets is information, not a signal. Credit has historically registered solvency stress earlier, but it has also been wrong — the correct response is to investigate and adjust sizing, not to take a position on the divergence." },
    { q: "The honest limit of cross-market analysis is:",
      options: ["It works perfectly in stable markets only", "Relationships break down and lags vary, so it gives context and sizing discipline rather than predictions", "It only applies to bonds", "It requires institutional data"],
      a: 1,
      why: "Correlations are unstable and tend to fail exactly when they would be most valuable. Being early is indistinguishable from being wrong for long stretches, which is why this is context for position sizing rather than a signal generator." }
  ]
}

]);
