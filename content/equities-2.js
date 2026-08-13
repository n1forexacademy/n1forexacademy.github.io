/* N1 Forex Academy — Equities track, Modules 104–108. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 104 ============================= */
{
  id: 104, track: 'equities',
  title: "Reading a Company by the Numbers",
  tagline: "What the published figures tell you, what they hide, and why a cheap-looking share is often cheap for a reason.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Identify the handful of figures that describe a business's size, profitability and debt",
    "Compute and interpret the common ratios without treating them as verdicts",
    "Explain why a low price-to-earnings ratio is a question rather than an answer",
    "Recognise the limits of ratio analysis and where it misleads",
    "Compare two companies in the same sector on a like-for-like basis"
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
},

/* ============================= MODULE 105 ============================= */
{
  id: 105, track: 'equities',
  title: "Earnings, Catalysts and Corporate Actions",
  tagline: "The scheduled and unscheduled events that move a share far more than any chart pattern.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain the earnings cycle and why the reaction often contradicts the result",
    "Identify the scheduled events that create predictable gap risk",
    "Describe the main corporate actions and what each does to your holding",
    "Apply an events policy that prevents being caught leveraged through a known catalyst",
    "Explain why guidance usually matters more than the reported figures"
  ],

  misconceptions: [
    "**\"Good earnings mean the share rises.\"** The market priced expectations in advance. A strong result that misses expectations sells off — the identical mechanism as economic data in Module 9.",
    "**\"A stock split makes the shares cheaper.\"** You own more pieces of exactly the same company. Nothing about the value of your holding changed.",
    "**\"Buybacks are always good for shareholders.\"** They reduce the share count and flatter EPS. Whether they were a good use of cash depends entirely on the price paid.",
    "**\"I can trade the earnings announcement.\"** The move happens in seconds, often gaps overnight, and reverses regularly. Retail execution is at its worst exactly then."
  ],

  glossary: [
    { t: "Earnings report", d: "The scheduled publication of results, quarterly in some markets and half-yearly in others." },
    { t: "Consensus estimate", d: "The average of analysts' forecasts. What price is already positioned for." },
    { t: "Beat / miss", d: "Reporting above or below consensus." },
    { t: "Guidance", d: "Management's own forecast for coming periods. Frequently moves the price more than the results themselves." },
    { t: "Ex-dividend date", d: "The date from which buying no longer entitles you to the declared dividend." },
    { t: "Stock split", d: "Dividing existing shares into more units. Purely cosmetic in value terms." },
    { t: "Share buyback", d: "The company purchasing its own shares, reducing the count outstanding." },
    { t: "Rights issue", d: "Existing holders offered new shares, usually at a discount. Dilutive if you do not participate." },
    { t: "Merger and acquisition", d: "One company buying another. The target usually jumps toward the offer price." },
    { t: "Profit warning", d: "An unscheduled announcement that results will fall short. Typically produces the largest single-day falls." }
  ],

  slides: [
    {
      kicker: "Module 105 · The cycle",
      title: "Earnings are a scheduled shock",
      bullets: [
        "Listed companies report on a **known calendar** — quarterly or half-yearly.",
        "You therefore know **in advance** when the largest scheduled volatility of the period will occur.",
        "**That is a gift.** Economic releases in forex were the same idea; here it is company-specific.",
        "Typical earnings-day moves of **5–15%** are ordinary. Larger is common.",
        "**And it usually gaps**, because most companies report outside trading hours."
      ],
      note: "Emphasise the overnight gap. In forex, news hit a live market you could at least try to exit. Here the market is closed, the stock reopens at a new price, and no stop protects you through it."
    },
    {
      kicker: "Module 105 · The reaction",
      title: "Why a strong result can sell off",
      bullets: [
        "Price already reflects the **consensus estimate**. That is what a forecast means.",
        "The move comes from the **surprise**, and from **guidance** about what happens next.",
        "**A company can beat on both revenue and profit and still fall sharply** on weak guidance.",
        "This is precisely 'buy the rumour, sell the fact' from Module 9, applied to a single business.",
        "**Guidance usually matters more than the reported numbers** — the market prices the future, not the past quarter."
      ],
      note: "The link back to Module 9 is worth making explicit. Students who understood why a strong inflation print can sell a currency will grasp this immediately; the mechanism is identical."
    },
    {
      kicker: "Module 105 · Corporate actions",
      title: "Things that change your holding",
      bullets: [
        "**Stock split:** more shares, proportionally lower price, **same total value**. Cosmetic.",
        "**Buyback:** fewer shares outstanding, so each remaining share is a larger slice. Good or bad depending on the price paid.",
        "**Rights issue:** you are offered new shares, usually at a discount. **Ignore it and you are diluted.**",
        "**Dividend:** covered in Module 104 — price adjusts on the ex-date.",
        "**Takeover:** the target typically jumps toward the offer price and then stops behaving like a normal share."
      ],
      note: "Rights issues catch passive holders. A student who ignores the correspondence is diluted, and the price drop looks inexplicable if they do not know why. Worth a specific example."
    },
    {
      kicker: "Module 105 · The unscheduled",
      title: "The events with no date attached",
      bullets: [
        "**Profit warnings** — unscheduled, and typically the largest single-day falls a share ever sees.",
        "**Regulatory action, litigation, fraud allegations** — can be existential rather than merely bad.",
        "**Key personnel** — the departure of a founder or chief executive moves some companies violently.",
        "**Sector and macro news** — a rate decision or oil price move can hit an entire industry at once.",
        "**You cannot schedule around these. You can only be sized so that they are survivable.**"
      ],
      note: "This is where position sizing earns its keep. The forex track taught sizing against a measurable stop; here the honest position is that some risks cannot be stopped out of at all, so size is the only control."
    },
    {
      kicker: "Module 105 · Policy",
      title: "Your events policy",
      bullets: [
        "**Know the earnings date before you open a position.** Every time. It takes ten seconds to check.",
        "**No leverage held through a scheduled earnings date.** The rule from Module 103, restated because it matters.",
        "**Reduce or close outright positions into earnings** if the potential gap exceeds your risk tolerance.",
        "**Or accept the gap deliberately** — a legitimate choice, if the position is small enough that the worst case is survivable.",
        "**What is not acceptable is not knowing the date.** That is negligence, not risk-taking."
      ],
      note: "Note the difference in tone from the forex news policy. There, avoidance was recommended for everyone. Here, holding through earnings on a properly sized unleveraged position is defensible. The non-negotiable part is knowing."
    },
    {
      kicker: "Module 105 · Wrap",
      title: "What you now anticipate",
      bullets: [
        "The earnings calendar as scheduled, foreseeable volatility",
        "Why the reaction follows the surprise and the guidance, not the headline result",
        "What each corporate action does to your holding",
        "Which risks have no date attached, and why size is the only defence against them",
        "A written events policy with one non-negotiable: always know the date"
      ],
      note: "Have each student check the next earnings date for the companies from Lab 101 and write them in a calendar. Building the habit now is worth more than the theory."
    }
  ],

  practical: {
    title: "Lab 105 — Study an earnings reaction",
    time: "60 min",
    intro: "The student examines a real earnings event after the fact, measures the gap, and works out what would have happened to positions of different sizes and leverage. No trading.",
    setup: [
      "A market data site showing historical earnings dates and results",
      "Three companies with recent earnings, at least one that fell despite beating expectations",
      "A spreadsheet named **Earnings Study**"
    ],
    steps: [
      { h: "Build the calendar", d: "For your chosen companies, record the last four earnings dates and the next scheduled one. Note whether each was published before the open, after the close, or during the session." },
      { h: "Record result versus expectation", d: "For the most recent report, find the consensus estimate and the actual figure for both revenue and earnings. Record whether each beat or missed, and what guidance was given." },
      { h: "Measure the reaction", d: "Record the closing price before the announcement and the opening price after. Compute the gap as a percentage, and the full move over the following three sessions." },
      { h: "Find the contradiction", d: "Identify at least one case where the company beat expectations and the share still fell. Read the coverage and write down what the market reacted to — usually guidance." },
      { h: "Model the damage", d: "For the largest gap you found, compute the loss on: an unleveraged holding sized at 5% of a portfolio, and a 5:1 leveraged CFD of the same exposure. Express both as a percentage of the account." },
      { h: "Test the stop", d: "Work out where a stop 8% below entry would actually have filled given the gap. Compare the intended loss with the realised one." },
      { h: "Write the policy", d: "A short written events policy: how you check dates, what you do with leveraged positions into earnings, and what size you will accept holding through one." }
    ],
    deliverable: "An **Earnings Study** spreadsheet covering three companies: four historical earnings dates each plus the next scheduled one, result versus consensus with guidance, measured gap and three-day move, one documented beat-but-fell case with the explanation, loss modelling at unleveraged 5% and 5:1 leveraged, a stop-slippage calculation, and a written events policy.",
    rubric: [
      { c: "Calendar discipline", d: "Located earnings dates independently and recorded whether each fell outside trading hours." },
      { c: "Expectation literacy", d: "Correctly distinguishes the reported figure from the consensus, and identifies guidance as separate from both." },
      { c: "Contradiction found", d: "Documented a real beat-but-fell case and explained the market's actual reason." },
      { c: "Loss modelling", d: "Correctly computed both scenarios and reached the right conclusion about leverage through scheduled events." },
      { c: "Stop realism", d: "Shows the stop filling at the gapped open, not the intended level, and states the realised loss." }
    ],
    pitfalls: [
      "Using the post-announcement close instead of the open, which understates the gap.",
      "Assuming a beat should mean a rise. Find a counterexample before accepting the lesson.",
      "Forgetting that a stop does not protect through a gap — the same lesson as Module 3, now routine rather than rare."
    ]
  },

  homework: [
    "Add the next earnings date for every company you follow to a calendar with a reminder a week ahead.",
    "Find a profit warning from the last two years and record the single-day fall.",
    "Find a rights issue and write down what happened to holders who did not take up their rights."
  ],

  quiz: [
    { q: "A company beats revenue and earnings expectations, and the share falls 9%. The most likely explanation:",
      options: ["The market is irrational", "Guidance for coming periods was weak, and price already reflected the beat", "The results were fraudulent", "A trading error"],
      a: 1,
      why: "Price is positioned for consensus before the release, so the beat itself may already be in the price. Guidance describes the future, which is what the market is pricing — the identical mechanism as economic surprises in Module 9." },
    { q: "A company announces a 4-for-1 stock split. Your 100 shares become 400. What happened to the value of your holding?",
      options: ["It quadrupled", "It is unchanged — the price adjusts proportionally", "It fell by three quarters", "It depends on the dividend"],
      a: 1,
      why: "A split divides the same claim into more pieces. It can improve liquidity and accessibility, but nothing about the underlying business or the value of your stake changed." },
    { q: "Why is leverage through a scheduled earnings date prohibited on this course?",
      options: ["Brokers do not allow it", "Most companies report outside trading hours, so the move arrives as an overnight gap that no stop can protect against", "Earnings are unpredictable in timing", "Spreads widen permanently"],
      a: 1,
      why: "The exchange is shut when the news lands. A 20% gap against a 5:1 leveraged position is a total loss, and the stop fills at the gapped open rather than the intended level." },
    { q: "You hold shares and ignore the paperwork for a rights issue. What happens?",
      options: ["Nothing, rights issues are optional and harmless", "You are diluted — others bought new shares at a discount and your stake now represents less", "Your shares are sold automatically", "You receive the discount anyway"],
      a: 1,
      why: "A rights issue offers existing holders the chance to maintain their proportion by buying discounted new shares. Declining means the same company is divided into more pieces and your slice shrinks." },
    { q: "Which event typically produces the largest single-day fall in a share?",
      options: ["A scheduled earnings miss", "An unscheduled profit warning", "A dividend cut", "A stock split"],
      a: 1,
      why: "Scheduled results are at least partly anticipated and hedged. An unscheduled warning arrives with no positioning and no warning, and repricing is immediate and severe." }
  ]
},

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
},

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
},

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
