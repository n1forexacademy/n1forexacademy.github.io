/* N1 Forex Academy — Module 106. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 106 ============================= */
{
  id: 106, track: 'equities',
  title: "Indices, Sectors and What Moves Together",
  tagline: "Most of a share's daily move has nothing to do with the company itself.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain what an index is and how weighting changes its behaviour",
    "Describe what an ETF is and how it differs from owning the constituents",
    "Explain beta and why a share moves with its market",
    "Identify sector groupings and why they move together",
    "Apply correlation discipline to an equity portfolio"
  ],

  misconceptions: [
    "**\"The index is the average share.\"** Most major indices are capitalisation-weighted, so a handful of giants dominate. The 'average' constituent may be doing something completely different.",
    "**\"I'm diversified because I own ten shares.\"** Ten technology companies is one bet. This is the correlation lesson from Module 2, in a market where it is even easier to get wrong.",
    "**\"An ETF is risk-free because it's diversified.\"** It removes single-company risk. It does nothing about market risk, and indices fall hard.",
    "**\"Good company, so the share will rise.\"** On a typical day, a large share of the move comes from the market and the sector, not the company."
  ],

  glossary: [
    { t: "Index", d: "A measured basket of shares representing a market or segment." },
    { t: "Capitalisation weighting", d: "Constituents weighted by market value, so the largest dominate." },
    { t: "Equal weighting", d: "Every constituent given the same weight, giving a very different picture." },
    { t: "ETF", d: "Exchange-traded fund — a listed fund that holds a basket, tradeable like a share." },
    { t: "Beta", d: "How much a share tends to move relative to its market. Above 1 means it amplifies market moves." },
    { t: "Sector", d: "A grouping of companies in related businesses, which tend to move together." },
    { t: "Rotation", d: "Money moving between sectors as expectations change." },
    { t: "Systematic risk", d: "Market-wide risk that diversification within the market cannot remove." },
    { t: "Idiosyncratic risk", d: "Risk specific to one company, which diversification does reduce." },
    { t: "Tracking difference", d: "The gap between a fund's return and the index it follows, after costs." }
  ],

  slides: [
    {
      kicker: "Module 106 · Indices",
      title: "An index is a measurement, not an average",
      bullets: [
        "An index tracks a **defined basket** of shares under published rules.",
        "**Capitalisation weighting** means the largest companies dominate the number.",
        "In some major indices, **a handful of companies drive most of the movement**.",
        "**Equal weighting** gives every constituent the same say — and often a very different result.",
        "**'The market is up' can mean a few giants rose while most constituents fell.**"
      ],
      note: "This is worth demonstrating with real data: compare a cap-weighted index with its equal-weighted version over the same period. The divergence is often startling and makes the point instantly."
    },
    {
      kicker: "Module 106 · Funds",
      title: "ETFs and what you actually hold",
      bullets: [
        "An **ETF** is a listed fund holding a basket, tradeable like a single share.",
        "Buying one index ETF gives you exposure to **every constituent at once**, in one trade.",
        "**Costs are low but not zero** — an ongoing charge, plus tracking difference.",
        "**It removes single-company risk entirely.** No individual failure can ruin you.",
        "**It does nothing about market risk.** When the index falls 30%, so does the ETF."
      ],
      note: "Be clear about what diversification does and does not solve. It removes idiosyncratic risk and leaves systematic risk untouched — which is precisely why an index fund still had terrible years."
    },
    {
      kicker: "Module 106 · Beta",
      title: "Most of the daily move is not about the company",
      bullets: [
        "**Beta** measures how much a share moves relative to its market.",
        "**Beta of 1.5:** when the market moves 1%, this share has historically moved about 1.5%.",
        "**Beta below 1:** damped relative to the market. Utilities often behave this way.",
        "On an ordinary day, **market and sector explain a large part of a share's move**.",
        "**Consequence:** picking a good company does not protect you from a falling market."
      ],
      note: "Have students check a single share's move against its index on ten random days. The correlation is usually obvious, and it reframes 'my analysis was right but the share fell' as a normal outcome rather than a mystery."
    },
    {
      kicker: "Module 106 · Sectors",
      title: "Companies in the same business move together",
      bullets: [
        "Shares group into **sectors** — banks, energy, technology, healthcare, consumer goods and so on.",
        "A sector responds together to the things that affect it: **rates for banks, oil for energy, regulation for healthcare**.",
        "**Rotation** is money moving between sectors as expectations change.",
        "**Sector behaviour is the equity version of currency correlation** from Module 2.",
        "**Owning five banks is one position, not five.**"
      ],
      note: "That last line is the whole slide. Students who learned correlation discipline in forex will transfer it instantly; those who did not will build a concentrated portfolio and call it diversified."
    },
    {
      kicker: "Module 106 · Discipline",
      title: "Counting your real exposure",
      bullets: [
        "**Group your holdings by sector first**, then count risk by group rather than by line.",
        "**Set a maximum exposure per sector**, not just per company.",
        "**Watch hidden overlap:** an index ETF plus individual holdings may double you into the same names.",
        "**Correlations tighten in a crash** — exactly as they did in the forex risk-on/risk-off lesson.",
        "**Assume that in a bad month, everything you own falls together.** Size for that, not for the calm case."
      ],
      note: "The hidden-overlap point catches thoughtful students. Someone holding a broad index ETF and separately buying its largest constituents is far more concentrated than their holdings list suggests."
    },
    {
      kicker: "Module 106 · Wrap",
      title: "What you now see",
      bullets: [
        "What an index measures and how weighting shapes the number",
        "What an ETF removes and what it leaves untouched",
        "Beta, and why most of a daily move is market and sector",
        "Sectors as the equity form of correlation",
        "How to count real exposure rather than counting lines on a statement"
      ],
      note: "Close by asking how many genuinely independent positions a student thinks they could hold. The honest answer, in one market, is far fewer than most expect."
    }
  ],

  practical: {
    title: "Lab 106 — Find your real exposure",
    time: "60 min",
    intro: "The student builds a hypothetical portfolio, then discovers how much less diversified it is than it looks. The exercise mirrors the correlation lab from the forex track.",
    setup: [
      "A market data site with sector classifications and index constituents",
      "A hypothetical portfolio of eight shares chosen by the student",
      "A spreadsheet named **Exposure Map**"
    ],
    steps: [
      { h: "Build a portfolio", d: "Choose eight companies you would plausibly hold, with a notional weight for each summing to 100%. Choose them before doing any of the analysis below." },
      { h: "Classify by sector", d: "Record each company's sector and total the weight per sector. Most students discover two sectors dominate." },
      { h: "Measure co-movement", d: "For twenty trading days, record the daily percentage change of each holding and of the main index. Count how many days each holding moved the same direction as the index." },
      { h: "Estimate beta roughly", d: "For two holdings, compare their average absolute daily move with the index's. A ratio above 1 suggests amplification. This is an estimate, not a formal calculation — the concept is the objective." },
      { h: "Find the overlap", d: "If you hold any ETF, list its ten largest constituents and check whether you also hold any individually. Record the doubled exposure." },
      { h: "Stress the portfolio", d: "Assume a market fall of 20% and apply each holding's rough beta. Estimate the portfolio loss. Then note which holdings you assumed would protect you and whether that assumption survives." },
      { h: "Rewrite the portfolio", d: "Adjust the weights to bring any single sector below a limit you set yourself, and write down the limit and why you chose it." }
    ],
    deliverable: "An **Exposure Map** spreadsheet: eight holdings with weights, sector totals, twenty days of co-movement against the index, rough beta estimates for two holdings, any ETF overlap identified, a −20% market stress test with estimated portfolio loss, and a revised allocation with a written sector limit.",
    rubric: [
      { c: "Sector honesty", d: "Correctly classified holdings and recognised concentration that was not apparent from the list." },
      { c: "Co-movement evidence", d: "Twenty days recorded, with the student able to state how often holdings moved with the market." },
      { c: "Overlap detection", d: "Identified doubled exposure through any fund holdings, or confirmed none existed." },
      { c: "Stress realism", d: "Applied beta sensibly and did not assume any holding would rise in a broad fall." },
      { c: "Limit reasoning", d: "Sector limit is a specific number with a stated rationale." }
    ],
    pitfalls: [
      "Counting eight holdings as eight independent bets. The whole exercise exists to disprove that.",
      "Assuming defensive sectors rise in a crash. They typically fall less, which is a different claim.",
      "Ignoring fund overlap. It is the most common source of accidental concentration."
    ]
  },

  homework: [
    "Compare a capitalisation-weighted index with its equal-weighted equivalent over the last three years and write down the difference.",
    "Track one share and its index daily for two weeks, recording how often they moved in the same direction.",
    "Add a sector exposure limit to your written trading plan."
  ],

  quiz: [
    { q: "A capitalisation-weighted index rose 1% today. What does that tell you about its average constituent?",
      options: ["Most constituents rose about 1%", "Very little — a few large companies can drive the index while most constituents fall", "All constituents rose", "The median company rose more than 1%"],
      a: 1,
      why: "Cap weighting means the largest companies dominate the number. Comparing against the equal-weighted version of the same index frequently reveals a very different picture of what most companies did." },
    { q: "You own ten shares, all technology companies. You are:",
      options: ["Well diversified across ten positions", "Holding essentially one sector bet with ten expressions of it", "Protected from market risk", "Diversified only if they are in different countries"],
      a: 1,
      why: "Companies in one sector respond to the same drivers and fall together. This is the correlation lesson from Module 2 in equity form — count exposure by group, not by number of lines." },
    { q: "A share has a beta of 1.6. The market falls 5%. What would you roughly expect?",
      options: ["The share falls about 3%", "The share falls about 8%", "The share is unaffected", "The share rises 8%"],
      a: 1,
      why: "Beta above 1 means the share historically amplifies market moves, so about 1.6 × 5% ≈ 8%. Beta is a historical tendency rather than a rule, and it is least reliable exactly when markets are most extreme." },
    { q: "What does an index ETF remove, and what does it leave?",
      options: ["Removes all risk", "Removes single-company risk, leaves market risk entirely intact", "Removes market risk, leaves company risk", "Removes currency risk only"],
      a: 1,
      why: "Diversification within a market eliminates idiosyncratic risk — no single failure can ruin you — but systematic risk remains. When the index falls 30%, so does the fund." },
    { q: "You hold a broad index ETF and separately buy its three largest constituents. Your exposure to those three is:",
      options: ["Unchanged, the ETF is separate", "Doubled up — you own them inside the fund and again directly", "Reduced by diversification", "Neutralised"],
      a: 1,
      why: "Fund overlap is the most common source of accidental concentration. Listing a fund's largest holdings before adding individual names avoids quietly becoming far more concentrated than the statement suggests." }
  ]
}

]);
