/* N1 Forex Academy — Module 104. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 104 ============================= */
{
  id: 104, track: 'equities',
  title: "Reading a Company by the Numbers",
  tagline: "What the published figures tell you, what they hide, and why a cheap-looking share is often cheap for a reason.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Find the handful of figures that tell you a company's size, profitability and debt",
    "Work out the common ratios, and read them as questions rather than verdicts",
    "Explain why a share that looks cheap is usually cheap for a reason",
    "Know where these numbers mislead, and say so honestly",
    "Compare two companies in the same industry on a fair, like-for-like basis"
  ],

  misconceptions: [
    "**\"A low P/E means the share is cheap.\"** It means the market expects earnings to fall, or sees a risk you have not identified yet. Cheap and mispriced are not the same thing.",
    "**\"High revenue means a good business.\"** Revenue is what comes in the door. A company can grow revenue for years while destroying money.",
    "**\"Dividends are free money.\"** A dividend is cash leaving the company. The share price adjusts on the ex-dividend date. It is a transfer, not a gain.",
    "**\"The numbers tell you what will happen.\"** They describe what *has* happened, filtered through accounting choices. They are evidence, not prophecy."
  ],

  glossary: [
    { t: "Revenue", d: "Total sales in a period, before any costs. Also called turnover or the top line." },
    { t: "Net income", d: "What remains after every cost, interest and tax. The bottom line." },
    { t: "EPS", d: "Earnings per share — net income divided by shares outstanding." },
    { t: "P/E ratio", d: "Share price divided by earnings per share. How many years of current earnings the price represents." },
    { t: "Dividend yield", d: "Annual dividend per share divided by share price, as a percentage." },
    { t: "Payout ratio", d: "The share of earnings paid out as dividends. Above 100% means paying out more than it earns." },
    { t: "Free cash flow", d: "Cash generated after the spending needed to maintain the business. Harder to massage than earnings." },
    { t: "Net debt", d: "Borrowings minus cash. What the company actually owes on balance." },
    { t: "Margin", d: "Profit as a percentage of revenue. Gross, operating and net margins measure different stages." },
    { t: "Return on equity", d: "Net income divided by shareholders' equity — how efficiently the company uses owners' capital." },
    { t: "Value trap", d: "A share that looks statistically cheap and stays cheap because the business is genuinely deteriorating." }
  ],

  slides: [
    {
      kicker: "Module 104 · The short list",
      title: "Six numbers describe most of a business",
      bullets: [
        "**Revenue** — how much comes in.",
        "**Net income** — how much survives after everything.",
        "**Free cash flow** — how much actual cash the business generates.",
        "**Net debt** — what it owes, net of cash.",
        "**Shares outstanding** — how many pieces the claim is divided into.",
        "**Market capitalisation** — what the market says the whole thing is worth.",
        "**Everything else is a ratio built from these.**"
      ],
      note: "Resist the urge to teach forty metrics. Six figures and four ratios, understood properly, beat a screen full of numbers nobody interrogates. This mirrors the three-indicator discipline from Module 8."
    },
    {
      kicker: "Module 104 · Profitability",
      title: "Revenue is vanity, cash is fact",
      bullets: [
        "A company can grow **revenue** for years while losing money on every sale.",
        "**Net income** is better, but it is an accounting figure shaped by legitimate judgement calls.",
        "**Free cash flow** is the hardest to massage — it is cash that actually arrived.",
        "**Margins** tell you how much of each pound of sales survives. Falling margins with rising revenue is a warning.",
        "**Compare margins only within a sector.** A supermarket and a software company are not comparable on this."
      ],
      note: "The sector caveat matters. Students who compare a retailer's 3% net margin with a software firm's 30% and conclude the retailer is badly run have learned nothing. Like-for-like or not at all."
    },
    {
      kicker: "Module 104 · Valuation",
      title: "The P/E ratio is a question, not an answer",
      bullets: [
        "**P/E = share price ÷ earnings per share.** Roughly, how many years of current earnings you are paying.",
        "A **high P/E** means the market expects growth. It can be justified or it can be hope.",
        "A **low P/E** means the market expects decline, or sees a risk you have not found yet.",
        "**The correct response to a low P/E is to ask why**, not to buy.",
        "**Value trap:** statistically cheap, and cheap for a reason. Staying cheap for a decade is common."
      ],
      note: "This is the central discipline of the module. The parallel with the forex track is exact: an indicator reading is information, not an instruction. A P/E of 6 is the beginning of research, not the end of it."
    },
    {
      kicker: "Module 104 · Income",
      title: "What a dividend actually is",
      bullets: [
        "A dividend is **cash leaving the company and arriving in your account**.",
        "On the **ex-dividend date the share price typically drops by roughly the dividend**. It is a transfer, not a windfall.",
        "**Yield = annual dividend ÷ price.** A yield that looks unusually high is often the result of a **falling price**.",
        "**Payout ratio** above 100% means paying out more than it earns — funded by debt or reserves, and rarely sustainable.",
        "**A dividend cut is one of the more reliable signals that management sees trouble.**"
      ],
      note: "The 'high yield because the price collapsed' point catches almost everyone. Have them find a real example: a company whose yield rose sharply, then cut the dividend, and watch what the price did afterwards."
    },
    {
      kicker: "Module 104 · Debt",
      title: "Debt decides who survives a bad year",
      bullets: [
        "**Net debt = borrowings − cash.** The honest figure.",
        "Debt is not inherently bad — it funds growth and can raise returns on equity.",
        "**But interest must be paid whatever happens**, and remember from Module 101: **lenders are paid before you**.",
        "A heavily indebted company in a downturn faces **refinancing risk**, dilution, or failure.",
        "**Compare debt to earnings or cash flow**, not to the share price. Ability to service it is what matters."
      ],
      note: "This links directly into the bonds track. A company's ability to service debt is exactly what credit ratings assess, and it explains why the same company's bonds and shares behave so differently in a crisis."
    },
    {
      kicker: "Module 104 · Limits",
      title: "Where the numbers mislead",
      bullets: [
        "They are **backward-looking**. The past year's earnings say nothing certain about the next.",
        "**Accounting choices** are legitimate but consequential — two honest companies can present the same reality differently.",
        "**One-off items** distort a single year in both directions.",
        "**Sector context is everything.** Ratios are only comparable within an industry.",
        "**They cannot price a story.** Some of the largest companies were unprofitable for years. Some unprofitable companies simply failed."
      ],
      note: "End the analytical section honestly. Fundamental analysis narrows the field and rules out obvious problems. It does not produce certainty, and a student who thinks it does will be badly surprised."
    },
    {
      kicker: "Module 104 · Wrap",
      title: "What you can now read",
      bullets: [
        "The six figures that describe a business, and the four ratios worth building from them",
        "Why free cash flow is harder to massage than earnings",
        "Why a low P/E is a question and what a value trap looks like",
        "What a dividend really is, and why a high yield is often bad news",
        "Why debt determines who survives a downturn",
        "The genuine limits of all of it"
      ],
      note: "Ask each student to name one company they would rule out on the numbers alone, and why. Ruling things out is a more achievable skill than picking winners, and it is where fundamental analysis is genuinely strong."
    }
  ],

  practical: {
    title: "Lab 104 — Compare two companies properly",
    time: "80 min",
    intro: "The student builds a like-for-like comparison of two competitors in the same sector, computing every ratio by hand from the published accounts rather than reading them off a summary page.",
    setup: [
      "Two competing companies in the same industry, both listed",
      "The latest annual report for each, from their investor relations pages",
      "A spreadsheet named **Company Compare**"
    ],
    steps: [
      { h: "Pull the six core figures", d: "For both companies record revenue, net income, free cash flow, net debt, shares outstanding and market capitalisation. Take them from the accounts, not from a summary site — the numbers sometimes differ and you need to know which you are using." },
      { h: "Compute the ratios by hand", d: "Calculate EPS, P/E, net margin, dividend yield, payout ratio, and net debt divided by net income. Do the arithmetic yourself; the point is knowing what goes into each." },
      { h: "Chart three years of trend", d: "Record revenue, net income and free cash flow for the last three years for both. Direction of travel matters more than any single year's level." },
      { h: "Interrogate the cheaper one", d: "Whichever has the lower P/E, write down three specific reasons the market might be pricing it lower. Then look for evidence for or against each in the annual report." },
      { h: "Test the dividend", d: "For any dividend payer, check whether free cash flow covers it. Record the payout ratio and state plainly whether the dividend looks funded by earnings or by something else." },
      { h: "Stress the debt", d: "For both, work out how many years of current free cash flow it would take to repay net debt. Then ask what happens to that figure if earnings fell 30%." },
      { h: "Write a verdict you can defend", d: "One paragraph on each company covering what the numbers show, what they do not show, and what you would need to know before considering an investment. No buy or sell recommendation — a description of what you found." }
    ],
    deliverable: "A **Company Compare** workbook with six core figures and six hand-computed ratios for two sector competitors, three-year trends for revenue, income and cash flow, three researched reasons for any valuation gap, a dividend coverage check, a debt stress test at −30% earnings, and a written verdict on each.",
    rubric: [
      { c: "Source discipline", d: "Figures taken from the annual reports, with any discrepancy against summary sites noted." },
      { c: "Arithmetic", d: "All six ratios computed correctly and the student can explain what each input is." },
      { c: "Like-for-like", d: "Compares two genuine sector competitors and does not draw conclusions from cross-sector margin differences." },
      { c: "Scepticism", d: "Treated the lower valuation as a question, researched specific reasons, and did not assume cheap means mispriced." },
      { c: "Honest verdict", d: "States what the numbers do not show, and stops short of a recommendation." }
    ],
    pitfalls: [
      "Reading ratios off a data provider without knowing whether earnings are trailing or forecast. They differ substantially.",
      "Comparing across sectors and drawing conclusions from structurally different margins.",
      "Treating one strong year as a trend. Three years minimum, and note any one-off items.",
      "Concluding the cheaper company is the better buy. That conclusion needs the reasons researched, not the ratio alone."
    ]
  },

  homework: [
    "Find a company whose dividend yield rose above 8% and then check what happened to the dividend within the following year.",
    "Pick one company and read its annual report's risk factors section, then list the three risks you consider most serious.",
    "Find a historical value trap — a share that stayed statistically cheap for over three years — and write down what the market saw that the ratio did not."
  ],

  quiz: [
    { q: "A company trades on a P/E of 5 while its sector averages 15. The correct response is:",
      options: ["Buy — it is clearly undervalued", "Ask why the market prices it so much lower, and look for the reason", "Ignore it, low P/E companies never recover", "Compare it to a technology company"],
      a: 1,
      why: "A low P/E means the market expects earnings to fall or sees a risk you have not found. Sometimes it is genuinely mispriced; often it is a value trap. The ratio is where research begins." },
    { q: "Which figure is hardest for a company to massage through accounting choices?",
      options: ["Revenue", "Net income", "Free cash flow", "Earnings per share"],
      a: 2,
      why: "Cash either arrived or it did not. Revenue recognition and the many judgements feeding net income leave far more legitimate room for presentation, which is why cash flow is the more reliable check." },
    { q: "A share's dividend yield has risen from 3% to 9% while the dividend was unchanged. What happened?",
      options: ["The company increased the payout", "The share price fell by roughly two thirds", "The company issued more shares", "Yields rise automatically with inflation"],
      a: 1,
      why: "Yield is dividend divided by price. With the dividend fixed, a tripled yield means the price collapsed — and a market pricing in a probable dividend cut. An unusually high yield is more often a warning than an opportunity." },
    { q: "Why does net debt matter more than the absolute level of borrowings?",
      options: ["It is easier to calculate", "It subtracts cash, showing what the company actually owes on balance", "Regulators require it", "It excludes long-term debt"],
      a: 1,
      why: "A company with large borrowings and equally large cash is in a very different position from one with the same borrowings and none. Compare net debt to earnings or cash flow — the ability to service it is what decides survival." },
    { q: "A dividend is paid. What typically happens to the share price on the ex-dividend date?",
      options: ["It rises, reflecting the good news", "It falls by roughly the dividend amount", "It is unaffected", "Trading is suspended"],
      a: 1,
      why: "Cash left the company, so the shares are worth correspondingly less. The dividend is a transfer from company to shareholder, not a gain created out of nothing — which is why chasing yield without checking the business is a poor strategy." }
  ]
}

]);
