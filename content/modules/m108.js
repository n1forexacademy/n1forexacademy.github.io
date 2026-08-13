/* N1 Forex Academy — Module 108. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 108 ============================= */
{
  id: 108, track: 'equities',
  title: "Building an Equity Approach",
  tagline: "Turning everything into a written process — and an honest comparison with the forex track.",
  level: "Advanced",
  duration: "120 min",

  objectives: [
    "Choose between investing and trading timeframes and justify the choice",
    "Build a repeatable screening process that narrows a market to a shortlist",
    "Write entry, exit and review rules specific enough to be followed",
    "Adapt the journal and review process to a longer holding period",
    "Compare the two asset classes honestly and decide where your effort belongs"
  ],

  misconceptions: [
    "**\"I'll apply my forex strategy to shares.\"** The instruments differ in gap behaviour, holding cost, shorting, and information availability. The *process* transfers; the strategy usually does not.",
    "**\"Longer holding periods mean less discipline is needed.\"** They mean fewer decisions, each with more weight, and far longer to discover you were wrong.",
    "**\"Screening finds winners.\"** Screening removes what you have decided not to consider. What remains still needs work.",
    "**\"More research means better returns.\"** Beyond a point, more research mainly produces more confidence, which is not the same thing."
  ],

  glossary: [
    { t: "Screen", d: "A filter applied to a market to produce a shortlist meeting stated criteria." },
    { t: "Watchlist", d: "The shortlist you actively follow, between screening and holding." },
    { t: "Investing horizon", d: "The intended holding period, from months to decades." },
    { t: "Rebalancing", d: "Restoring target weights after price moves have shifted them." },
    { t: "Thesis", d: "The written reason for holding, and what would prove it wrong." },
    { t: "Review cadence", d: "How often positions are formally re-examined." },
    { t: "Opportunity cost", d: "What holding one thing prevents you from holding instead." }
  ],

  slides: [
    {
      kicker: "Module 108 · Horizon",
      title: "Decide what you are actually doing",
      bullets: [
        "**Investing:** months to years, driven by the business, tolerant of drawdown, low turnover.",
        "**Position trading:** weeks to months, driven by trend and catalysts.",
        "**Swing trading:** days to weeks, technical, and now paying financing if leveraged.",
        "**Day trading equities:** possible, but competing with well-resourced participants on their terms.",
        "**Pick one and write it down.** Mixing horizons is how a trade becomes an investment because it went against you."
      ],
      note: "The final bullet describes the most common failure in equities: a short trade that loses is silently reclassified as a long-term hold. Naming it in advance is the only reliable defence."
    },
    {
      kicker: "Module 108 · Screening",
      title: "Narrowing thousands to a handful",
      bullets: [
        "A **screen** applies your stated criteria to the whole market and returns what passes.",
        "Typical filters: **liquidity floor, market cap range, sector, profitability, debt level, valuation band**.",
        "**Start with liquidity** — from Module 102, an untradeable name is not a candidate whatever the numbers say.",
        "**A screen does not find winners.** It removes what you have decided not to consider.",
        "**Everything that survives still needs the work from Module 104.**"
      ],
      note: "Emphasise liquidity first. Students screen on valuation, find something spectacular, and discover it trades a few thousand shares a day with a 4% spread. Order the filters so that never happens."
    },
    {
      kicker: "Module 108 · The thesis",
      title: "Write down why you hold it",
      bullets: [
        "For every position, write **why you own it** and **what would prove you wrong**.",
        "The second half is the Module 6 invalidation rule, applied to a business rather than a chart.",
        "**A thesis is falsifiable:** 'margins will recover above 12% within four quarters' can be checked.",
        "**'It's a good company' cannot be checked** and will never tell you to sell.",
        "**Review the thesis on a schedule**, not when the price makes you anxious."
      ],
      note: "This is the equity equivalent of the five-step chart narration. Without a written falsifiable thesis, a losing position gets rationalised indefinitely — the timeframe is long enough that you can avoid the question for years."
    },
    {
      kicker: "Module 108 · Exits",
      title: "Knowing when to leave",
      bullets: [
        "**Thesis broken:** the specific thing you said would prove you wrong happened. Exit.",
        "**Stop hit:** for trades rather than investments, honour it as always.",
        "**Better opportunity:** capital is finite; holding one thing prevents holding another.",
        "**Position outgrew its limit:** a winner can breach your concentration cap. Trim it.",
        "**Not on the list: 'it's down and I'll wait'.** That is not an exit rule, it is the absence of one."
      ],
      note: "The 'winner outgrew its limit' case is genuinely difficult and worth discussing. Trimming a position that is working feels wrong, and the concentration limit exists precisely for the moment it feels wrong."
    },
    {
      kicker: "Module 108 · Review",
      title: "Journaling on a longer clock",
      bullets: [
        "The forex journal recorded **trades**. The equity journal records **theses and reviews**.",
        "For each holding: entry reasoning, thesis, invalidation, and the outcome of each scheduled review.",
        "**Review quarterly**, aligned with reporting, not whenever price moves.",
        "**Track compliance** as before: did I follow my own process, yes or no.",
        "**Feedback is slower here.** Months instead of days, which makes writing it down more important, not less."
      ],
      note: "The slow feedback loop is the central difficulty of equity investing. In forex a bad process shows up within weeks; here it can take years, and a written record is the only way to shorten that."
    },
    {
      kicker: "Module 108 · Comparison",
      title: "An honest comparison of the two",
      bullets: [
        "**Forex:** continuous, highly liquid, leverage available, no ownership, no dividends, symmetric shorting, fast feedback.",
        "**Equities:** exchange hours, gap risk, ownership and dividends, research available, asymmetric shorting, slow feedback.",
        "**Forex punishes over-leverage. Equities punish over-concentration.**",
        "**Neither is easier.** They fail in different ways.",
        "**You do not have to choose one forever** — but do choose which gets your attention now."
      ],
      note: "Resist declaring a winner. Students want to be told which is better; the useful answer is that they suit different temperaments, timetables and capital levels, and the honest comparison is what lets them decide."
    },
    {
      kicker: "Module 108 · Wrap",
      title: "You now have a second process",
      bullets: [
        "A chosen horizon, written down",
        "A screening sequence that starts with liquidity",
        "A falsifiable thesis for every holding",
        "Exit rules that include trimming winners",
        "A review cadence tied to reporting, not to anxiety",
        "An honest view of where equities fit alongside forex"
      ],
      note: "This closes the equities track. The certificate follows, and then bonds — which will explain why the rates that drive currencies also drive share valuations, tying all three together."
    }
  ],

  practical: {
    title: "Lab 108 — Write your equity plan",
    time: "80 min",
    intro: "The student produces a written equity process and subjects it to the same handover test that the forex plan survived. Same discipline, different asset class.",
    setup: [
      "The forex trading plan from the forex track",
      "The extended Risk Engine from Lab 107",
      "A screening tool, or a market data site with filters",
      "A document named **Equity Plan v1**"
    ],
    steps: [
      { h: "State your horizon", d: "Write which of the four horizons you are adopting and why, referencing the hours you actually have and the feedback speed you can tolerate. If it contradicts your forex window, say how you will handle both." },
      { h: "Build the screen", d: "Write your filters in order, starting with liquidity. Give each a specific threshold. Run it and record how many companies survive — adjust until the shortlist is between ten and forty." },
      { h: "Research three survivors", d: "Apply the Module 104 process to three names from the shortlist. Produce the six figures and six ratios for each." },
      { h: "Write three theses", d: "For each, write why you would hold it and the specific, checkable condition that would prove you wrong. Reject any thesis you cannot falsify." },
      { h: "Size them", d: "Using the Lab 107 engine, size each position with both risk and concentration recorded, and check the sector limit across all three." },
      { h: "Write the exit rules", d: "Cover all five cases from the slides, including trimming a winner that breaches concentration. Each must be specific." },
      { h: "Set the review cadence", d: "State when you review, what you check, and what evidence would change the plan itself rather than a single holding." },
      { h: "Handover test", d: "Give the plan to another person with no explanation. Have them apply the screen and check whether they arrive at a similar shortlist and would size positions the same way. Every disagreement is a defect in the plan." }
    ],
    deliverable: "**Equity Plan v1** — a two-page document stating horizon, an ordered screen with specific thresholds, three researched candidates with falsifiable theses, sized positions showing risk and concentration, five exit rules, and a review cadence. Plus handover test results with disagreements resolved.",
    rubric: [
      { c: "Horizon clarity", d: "One horizon chosen, justified against actual available time, with any conflict with the forex plan addressed." },
      { c: "Screen order", d: "Liquidity filtered first, every threshold a specific number, shortlist a workable size." },
      { c: "Falsifiability", d: "Every thesis states a checkable condition that would prove it wrong. Nothing rests on 'it's a good company'." },
      { c: "Dual sizing", d: "Both risk and concentration recorded for each position, with the sector limit respected across the set." },
      { c: "Exit completeness", d: "All five exit cases covered, including trimming winners. No rule reads 'wait for recovery'." },
      { c: "Handover success", d: "A second reader reaches a similar shortlist and similar sizing, with disagreements traced to wording and fixed." }
    ],
    pitfalls: [
      "Screening on valuation before liquidity, producing untradeable candidates.",
      "Writing a thesis that cannot be proven wrong. If nothing would change your mind, it is not a thesis.",
      "Omitting the trim-a-winner rule because it feels counterintuitive. It is the one most often needed.",
      "Producing a plan longer than two pages. Length signals unresolved thinking, exactly as in the forex track."
    ]
  },

  homework: [
    "Run your screen weekly for a month and record how the shortlist changes.",
    "Review your three theses after the next reporting round and record whether any invalidation condition was triggered.",
    "Write one paragraph on whether forex or equities suits your circumstances better, and why."
  ],

  quiz: [
    { q: "Which filter should come first in an equity screen?",
      options: ["Valuation", "Liquidity — an untradeable name is not a candidate whatever its numbers", "Dividend yield", "Sector"],
      a: 1,
      why: "Screening on valuation first surfaces spectacular-looking companies that trade a few thousand shares a day with a wide spread. Filtering for liquidity first prevents wasting research on names you could never trade sensibly." },
    { q: "A well-formed thesis is one that:",
      options: ["Explains why the company is excellent", "States a specific, checkable condition that would prove it wrong", "Predicts a target price", "Cites analyst recommendations"],
      a: 1,
      why: "This is the invalidation rule from Module 6 applied to a business. 'It's a good company' can never tell you to sell; 'margins recover above 12% within four quarters' can be checked against the next report." },
    { q: "A holding has risen sharply and now exceeds your concentration limit. The rule says:",
      options: ["Let winners run regardless", "Trim it back toward the limit", "Sell the entire position", "Raise the limit"],
      a: 1,
      why: "The limit exists to bound gap damage, and a larger position means larger damage regardless of how it got there. Trimming a winner feels wrong, which is precisely the moment the rule earns its place." },
    { q: "Compared with forex, the central difficulty of an equity process is:",
      options: ["Higher costs", "Slower feedback — a flawed process can take years to reveal itself", "Less information available", "Lower liquidity in all names"],
      a: 1,
      why: "In forex a bad process shows up within weeks. On a multi-month horizon you can hold a broken thesis for years, which is exactly why the written record and scheduled reviews matter more, not less." },
    { q: "The honest comparison between the two asset classes is:",
      options: ["Equities are safer", "Forex is more profitable", "Neither is easier — forex punishes over-leverage, equities punish over-concentration", "They are functionally identical"],
      a: 2,
      why: "They fail in different ways and suit different temperaments, timetables and capital levels. Choosing where to focus is a decision about your own circumstances, not about which market is superior." }
  ]
}

]);
