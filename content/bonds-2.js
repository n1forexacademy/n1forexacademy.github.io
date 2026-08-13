/* N1 Forex Academy — Bonds track, Modules 204–206.
   Module 206 deliberately closes the loop back to the forex track. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 204 ============================= */
{
  id: 204, track: 'bonds',
  title: "Credit Risk and Ratings",
  tagline: "The extra yield a company pays is the market's estimate of how likely it is to fail.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain what a credit spread represents and what widens it",
    "Interpret rating categories without treating them as guarantees",
    "Distinguish investment grade from high yield and describe how each behaves",
    "Explain why credit spreads and equities tend to move together",
    "State honestly what ratings do and do not tell you"
  ],

  misconceptions: [
    "**\"AAA means it cannot default.\"** It means default is considered very unlikely by an agency using published criteria. Highly rated instruments have failed before, sometimes spectacularly.",
    "**\"High yield just means higher return.\"** It means higher promised return in exchange for materially higher default probability. Realised returns are frequently lower than promised.",
    "**\"Credit risk is separate from equity risk.\"** They are two views of the same underlying business. When a company deteriorates, its spread widens and its shares fall together.",
    "**\"Spreads only matter for bond investors.\"** Widening spreads are one of the more reliable early signals of stress across every asset class, including the currencies you trade."
  ],

  glossary: [
    { t: "Credit risk", d: "The risk the issuer fails to pay interest or principal as scheduled." },
    { t: "Credit spread", d: "The extra yield over a comparable government bond, compensating for default risk." },
    { t: "Rating", d: "An agency's published opinion on creditworthiness, expressed as a letter grade." },
    { t: "Investment grade", d: "The higher rating bands, considered relatively low default risk." },
    { t: "High yield / junk", d: "Below investment grade. Higher promised yield, materially higher default risk." },
    { t: "Downgrade", d: "A rating cut. Often forces selling by funds mandated to hold only investment grade." },
    { t: "Fallen angel", d: "A bond downgraded from investment grade to high yield." },
    { t: "Recovery rate", d: "The proportion of face value bondholders eventually recover after a default." },
    { t: "Default rate", d: "The percentage of issuers in a category defaulting over a period." },
    { t: "Spread widening", d: "Credit spreads increasing, meaning the market is demanding more compensation for risk." }
  ],

  slides: [
    {
      kicker: "Module 204 · The spread",
      title: "What the extra yield is buying",
      bullets: [
        "A government bond yields **4%**. A company's bond of similar maturity yields **7%**.",
        "That **3% gap is the credit spread** — the market's price for the chance the company fails to pay.",
        "**Wider spread = more perceived risk.** Narrower = less.",
        "The spread moves **daily**, on company news and on the market's general appetite for risk.",
        "**This is a price, not a fact.** It is the market's estimate, and estimates are wrong regularly."
      ],
      note: "Emphasise that a spread is an opinion with a number attached. Students treat rating and spread as measurements of reality; they are the market's and an agency's best guesses, and both have been badly wrong."
    },
    {
      kicker: "Module 204 · Ratings",
      title: "What a letter grade actually says",
      bullets: [
        "Agencies publish opinions on creditworthiness as **letter grades**, from the highest quality down to default.",
        "The important boundary is between **investment grade** and **high yield**.",
        "That line matters because **many funds are mandated to hold only investment grade**.",
        "**A downgrade across it forces selling**, regardless of price. That is why fallen angels move so violently.",
        "**A rating is an opinion, updated after the fact.** Agencies frequently downgrade after the market has already repriced."
      ],
      note: "The forced-selling mechanic is worth understanding because it creates price moves unrelated to fresh information. A downgrade can trigger selling from holders who have no view at all — they simply are not permitted to hold it."
    },
    {
      kicker: "Module 204 · Two tiers",
      title: "Investment grade and high yield behave differently",
      bullets: [
        "**Investment grade** tends to trade on **interest rates** — duration is the dominant risk.",
        "**High yield** tends to trade on **the economy and the issuer** — credit is the dominant risk.",
        "In a downturn, investment grade may **rise** as rates fall, while high yield **falls** with equities.",
        "**High yield behaves more like equity than like a government bond.**",
        "**Do not think of 'bonds' as one thing.** The two tiers are barely the same asset class."
      ],
      note: "This is the most practically useful slide in the module. Students who bought a high yield fund expecting bond-like behaviour in a crisis discovered otherwise. The correlation with equity is high precisely when diversification was wanted."
    },
    {
      kicker: "Module 204 · Recovery",
      title: "Default is not the whole loss",
      bullets: [
        "A default does not usually mean **zero**. Bondholders have a claim on assets.",
        "**Recovery rates** vary enormously by seniority and by what the company owns.",
        "**Senior secured** debt recovers more than **subordinated** debt.",
        "**Shareholders typically recover nothing** — the Module 101 seniority point, realised.",
        "**Expected loss = probability of default × (1 − recovery rate).** Both halves matter."
      ],
      note: "The expected loss formula is worth writing out. Students focus entirely on default probability and ignore recovery, which is half the calculation and the reason senior secured debt trades so differently from subordinated."
    },
    {
      kicker: "Module 204 · Signal",
      title: "Spreads as an early warning",
      bullets: [
        "Credit spreads often **widen before equity markets fall**. Bond investors are typically watching solvency more closely.",
        "**Sharply widening high yield spreads** are among the more reliable indicators of stress.",
        "That stress transmits: risk-off in credit means **risk-off in currencies too** — Module 9's regime lesson.",
        "**Watch the direction and the speed**, not the level. A fast widening says more than a high level.",
        "**This is useful to you as a forex trader**, whether or not you ever buy a bond."
      ],
      note: "This is where the track starts paying back for a student who only wants to trade currencies. Credit spreads are a genuine leading indicator of the risk-on/risk-off regime that drives their pairs."
    },
    {
      kicker: "Module 204 · Wrap",
      title: "What you can now assess",
      bullets: [
        "What a credit spread is and what makes it move",
        "What a rating says, and the forced-selling consequence of the investment grade boundary",
        "Why investment grade trades on rates and high yield trades on the economy",
        "Recovery rates, and why expected loss has two components",
        "Spreads as an early warning that matters across every asset class"
      ],
      note: "Ask students to explain why a company's bonds and shares can move in opposite directions on the same news. The answer — seniority and different sensitivities — shows whether the track is cohering."
    }
  ],

  practical: {
    title: "Lab 204 — Price the risk",
    time: "60 min",
    intro: "The student measures real credit spreads, compares tiers, and checks whether spreads moved ahead of equities during a stress episode.",
    setup: [
      "A market data site showing corporate bond yields and government benchmarks",
      "Two corporate bonds from Lab 201, ideally one investment grade and one high yield",
      "A spreadsheet named **Credit Study**"
    ],
    steps: [
      { h: "Compute the spreads", d: "For each corporate bond, find a government bond of similar maturity and subtract its yield. Record the spread in basis points and state what the market is charging for that issuer's risk." },
      { h: "Find the ratings", d: "Record each issuer's rating and whether it sits above or below the investment grade boundary. Note what the agency's published definition of that grade actually says." },
      { h: "Compare the tiers", d: "Find a broad investment grade index yield and a high yield index yield. Record the gap and how it has changed over the last two years." },
      { h: "Check behaviour in stress", d: "Find a month in the last five years when equities fell more than 8%. Record what investment grade and high yield spreads did over the same period, and what the government bond did." },
      { h: "Test the leading indicator", d: "For that same episode, plot high yield spreads and the equity index on the same timeline. Record whether spreads began widening before equities fell, and by how long." },
      { h: "Look up recovery", d: "Find published average recovery rates by seniority. Compute expected loss for a hypothetical bond with a 5% default probability and a 40% recovery rate." },
      { h: "Write the linkage", d: "One paragraph connecting credit spreads to the risk-on/risk-off regime from Module 9, and stating how you would use spread data as a forex trader." }
    ],
    deliverable: "A **Credit Study** spreadsheet: spreads in basis points for two issuers against matched government benchmarks, ratings with the agency definition, an investment grade versus high yield index comparison over two years, spread behaviour during an equity drawdown, a lead-lag observation, an expected loss calculation, and a written paragraph linking spreads to currency regimes.",
    rubric: [
      { c: "Spread computation", d: "Matched maturities correctly and expressed spreads in basis points against the right benchmark." },
      { c: "Rating literacy", d: "Located ratings, identified the investment grade boundary, and read the agency's own definition rather than assuming." },
      { c: "Tier distinction", d: "Demonstrated with data that investment grade and high yield behaved differently in stress." },
      { c: "Lead-lag evidence", d: "Compared spread widening against equity falls on a timeline and stated what was observed, including if there was no lead." },
      { c: "Cross-asset thinking", d: "Written paragraph connects credit conditions to currency regimes with a specific, usable observation." }
    ],
    pitfalls: [
      "Comparing a corporate bond against a government bond of a very different maturity. The spread then mixes credit and duration.",
      "Assuming spreads always lead equities. Sometimes they do not — record what you actually observe.",
      "Treating a rating as a fact rather than an opinion. Note how often ratings changed after the market repriced.",
      "Ignoring recovery rates and equating default with total loss."
    ]
  },

  homework: [
    "Track a high yield spread index weekly for a month and note any sharp widening.",
    "Find a fallen angel from the last decade and record what its price did around the downgrade.",
    "Add a line to your risk policy about what widening credit spreads would mean for your currency positions."
  ],

  quiz: [
    { q: "A government bond yields 4% and a company's similar-maturity bond yields 7%. The 3% gap is:",
      options: ["The company's profit margin", "The credit spread — the market's price for the chance the company fails to pay", "A tax adjustment", "The coupon difference"],
      a: 1,
      why: "The spread compensates for default risk. It moves daily on company news and on general risk appetite, and it is an opinion with a number attached rather than a measurement of fact." },
    { q: "In a recession, investment grade and high yield bonds typically:",
      options: ["Both rise together", "Behave similarly since both are bonds", "Diverge — investment grade may rise as rates fall while high yield falls with equities", "Both become risk-free"],
      a: 2,
      why: "Investment grade trades mainly on interest rates, so falling rates support it. High yield trades mainly on the economy and the issuer, so it behaves far more like equity — which is exactly when diversification was wanted." },
    { q: "A bond is downgraded from investment grade to high yield. Why can the price move so violently?",
      options: ["The coupon is reduced", "Many funds are mandated to hold only investment grade and must sell regardless of price", "The maturity is shortened", "Trading is suspended"],
      a: 1,
      why: "Forced selling by mandate-constrained holders creates moves unrelated to any fresh information. Those sellers may have no view at all — they simply are no longer permitted to hold it." },
    { q: "Expected loss on a bond depends on:",
      options: ["Default probability alone", "Both the probability of default and the recovery rate", "The coupon only", "The credit rating alone"],
      a: 1,
      why: "Expected loss = probability of default × (1 − recovery rate). Focusing only on default probability ignores half the calculation, and explains why senior secured debt trades so differently from subordinated debt of the same issuer." },
    { q: "Why should a forex trader watch credit spreads?",
      options: ["They should not, it is a different market", "Sharply widening spreads signal risk-off conditions, which drive the currency regimes covered in Module 9", "Spreads determine exchange rates directly", "For tax purposes"],
      a: 1,
      why: "Credit markets often register stress early because bond investors watch solvency closely. Risk-off in credit tends to mean risk-off in currencies — capital moving toward the safe-haven currencies you already know." }
  ]
},

/* ============================= MODULE 205 ============================= */
{
  id: 205, track: 'bonds',
  title: "The Yield Curve",
  tagline: "One chart that shows what the market expects rates, growth and inflation to do.",
  level: "Advanced",
  duration: "90 min",

  objectives: [
    "Read a yield curve and describe its shape",
    "Explain what normal, flat and inverted curves have historically signalled",
    "Distinguish a curve steepening from a parallel shift",
    "Explain the term premium in plain language",
    "Use the curve as context for both bond and currency positioning"
  ],

  misconceptions: [
    "**\"An inverted curve means a recession is coming.\"** It has historically preceded recessions with a variable and sometimes very long lag, and it has given false signals. It is a signal, not a schedule.",
    "**\"The curve tells you where rates will be.\"** It tells you where the market currently *expects* them to be, plus compensation for uncertainty. Expectations are revised constantly.",
    "**\"A steeper curve is always good.\"** It depends entirely on which end moved and why. Steepening from falling short rates means something very different from steepening from rising long rates.",
    "**\"Only bond traders need this.\"** The curve is one of the clearest available summaries of what the market expects from a central bank — which is what drives its currency."
  ],

  glossary: [
    { t: "Yield curve", d: "A plot of yield against maturity for bonds from the same issuer." },
    { t: "Normal curve", d: "Upward sloping — longer maturities yield more." },
    { t: "Flat curve", d: "Little difference in yield across maturities." },
    { t: "Inverted curve", d: "Downward sloping — short maturities yield more than long." },
    { t: "Term premium", d: "Extra yield demanded for the uncertainty of lending for longer." },
    { t: "Steepening", d: "The gap between short and long yields widening." },
    { t: "Flattening", d: "That gap narrowing." },
    { t: "Parallel shift", d: "The whole curve moving up or down together." },
    { t: "Front end", d: "Short maturities, most sensitive to current central bank policy." },
    { t: "Long end", d: "Long maturities, more driven by growth and inflation expectations." }
  ],

  slides: [
    {
      kicker: "Module 205 · Reading it",
      title: "One issuer, every maturity, one line",
      bullets: [
        "Plot **yield on the vertical axis** and **maturity on the horizontal**, for one issuer's bonds.",
        "The **front end** reflects current and near-term central bank policy.",
        "The **long end** reflects expectations for growth and inflation over decades.",
        "**Normally it slopes upward** — you demand more to lend for longer.",
        "**The shape is the information**, not the level."
      ],
      note: "Have a real curve on screen throughout. Students find the abstraction hard until they see an actual plot with real numbers on it, and then it becomes one of the more intuitive things in finance."
    },
    {
      kicker: "Module 205 · Term premium",
      title: "Why longer normally pays more",
      bullets: [
        "Lending for thirty years means **thirty years of uncertainty** — inflation, policy, the issuer.",
        "The **term premium** is the extra yield demanded for accepting that.",
        "It is also compensation for the **duration risk** from Module 203.",
        "**This is why a normal curve slopes upward** — it is the default state, not a signal.",
        "**When that stops being true, something notable is being priced.**"
      ],
      note: "Establishing the normal case as the baseline matters. Students who meet inversion first treat upward slope as remarkable; it is the ordinary state and only departures carry information."
    },
    {
      kicker: "Module 205 · Inversion",
      title: "When short rates exceed long",
      bullets: [
        "An **inverted curve** means the market expects rates to be **lower in future than now**.",
        "Rates are usually cut because **growth is weakening**.",
        "**Historically, inversions have preceded recessions** — with a variable lag, sometimes over a year.",
        "**It has also given false signals.** It is a signal, not a schedule.",
        "**And it is uncomfortable for banks**, which borrow short and lend long — which is why lending tightens."
      ],
      note: "Be careful with the recession claim. It is a genuine historical regularity, not a mechanism that must recur, and the lag has been long enough that acting on it immediately has been costly."
    },
    {
      kicker: "Module 205 · Movement",
      title: "Shifts, steepening and flattening",
      bullets: [
        "**Parallel shift:** the whole curve moves up or down. Rate expectations changed across the board.",
        "**Steepening:** the gap between short and long widens.",
        "**Flattening:** it narrows.",
        "**Which end moved matters enormously.** Steepening from *falling short rates* means cuts are expected — very different from steepening from *rising long rates*, which suggests inflation or supply concerns.",
        "**Always ask which end moved and why.**"
      ],
      note: "The bull/bear steepening distinction is where students go wrong. 'The curve steepened' is almost meaningless without knowing which end moved, and the two versions have opposite implications."
    },
    {
      kicker: "Module 205 · Currency link",
      title: "Why this matters for your currency pairs",
      bullets: [
        "Module 9: currencies are driven by **rate expectations**. The curve is those expectations, drawn.",
        "**A front end pricing cuts** is a currency-negative signal, and it is visible before the cut happens.",
        "**Rate differentials between two countries** are the two curves compared — that is the carry trade.",
        "**The curve is often a cleaner read on policy expectations than the commentary is.**",
        "**You can read this without ever buying a bond.**"
      ],
      note: "This slide is the payoff for forex-focused students. The curve gives them a market-priced view of policy expectations rather than opinion, and comparing two countries' front ends is exactly the rate differential that drives their pair."
    },
    {
      kicker: "Module 205 · Wrap",
      title: "What the curve tells you",
      bullets: [
        "How to read shape, and why shape carries the information",
        "The term premium as the reason upward slope is normal",
        "What inversion has historically signalled, with honest caveats about lag and false signals",
        "Why which end moved matters more than the direction of the move",
        "How to use the curve as context for currency positioning"
      ],
      note: "Ask students to compare two countries' curves and say what it implies for the pair. If they connect front-end differentials to the currency, the whole academy has cohered."
    }
  ],

  practical: {
    title: "Lab 205 — Read and compare curves",
    time: "60 min",
    intro: "The student plots real curves, tracks how they change, and connects two countries' curves to a currency pair they have traded.",
    setup: [
      "A source for government bond yields across maturities for two countries",
      "One of the currency pairs studied in the forex track",
      "A spreadsheet named **Curve Study**"
    ],
    steps: [
      { h: "Plot today's curve", d: "For your own government, record yields at 2, 5, 10 and 30 years and plot them. Describe the shape in one sentence — normal, flat or inverted." },
      { h: "Compare with a year ago", d: "Find the same four yields twelve months earlier and plot both curves together. Identify whether the change was a parallel shift, a steepening or a flattening, and state which end moved most." },
      { h: "Find a historical inversion", d: "Locate a period when the 2-year yield exceeded the 10-year. Record the dates and what happened to growth over the following two years. Note the lag honestly, including if the signal was early or wrong." },
      { h: "Plot a second country", d: "Repeat the current curve for the other currency in your chosen pair. Put both on one chart." },
      { h: "Compute the differential", d: "For the 2-year point, record the difference between the two countries' yields. Then chart that differential against your currency pair over the last two years." },
      { h: "Assess the relationship", d: "Write down whether the pair tended to move with the differential, and note any periods where it clearly did not. Do not force a relationship that is not there." },
      { h: "Write the read", d: "One paragraph stating what the two curves currently imply about policy expectations in each country, and what that would suggest for the pair — framed as context, not a trade signal." }
    ],
    deliverable: "A **Curve Study** spreadsheet: today's curve for two countries plotted at four maturities, a year-on-year comparison with the change classified, one historical inversion with the subsequent outcome and honest lag, a 2-year yield differential charted against a currency pair over two years, an assessment of the relationship including where it broke down, and a written policy read.",
    rubric: [
      { c: "Curve reading", d: "Plots correctly and describes shape accurately using the right vocabulary." },
      { c: "Change classification", d: "Correctly distinguishes a parallel shift from a steepening or flattening, and identifies which end moved." },
      { c: "Historical honesty", d: "Records the inversion's lag accurately, including any false or very early signal, without overstating the relationship." },
      { c: "Cross-market linkage", d: "Charted the differential against the pair and described the relationship as it actually appeared, including exceptions." },
      { c: "Framing discipline", d: "Written read is context for positioning, not presented as a trade signal or a forecast." }
    ],
    pitfalls: [
      "Describing a curve move without saying which end moved. The two versions have opposite meanings.",
      "Overstating the inversion-recession link. Note the lag and any false signals — the honest record is the useful one.",
      "Forcing a relationship between the differential and the pair. Where it broke down is as informative as where it held.",
      "Treating the curve as a forecast. It is the market's current expectation, revised continuously."
    ]
  },

  homework: [
    "Record your government's 2-year and 10-year yields weekly for a month and note whether the gap widened or narrowed.",
    "Find the current curve for three different countries and rank them by how much easing each is pricing.",
    "Write one paragraph on what the curve you follow implies for the currency pair you trade most."
  ],

  quiz: [
    { q: "An inverted yield curve means:",
      options: ["Bonds are mispriced", "The market expects rates to be lower in future than they are now, usually because growth is expected to weaken", "Inflation is rising sharply", "Governments are defaulting"],
      a: 1,
      why: "Inversion prices future cuts, and cuts usually follow weakening growth. It has preceded recessions historically, but with a variable and sometimes very long lag, and it has produced false signals." },
    { q: "Why does a normal yield curve slope upward?",
      options: ["Because governments prefer it", "The term premium — extra yield demanded for the uncertainty and duration risk of lending for longer", "Because inflation is always rising", "Because short bonds are less liquid"],
      a: 1,
      why: "Lending for thirty years means accepting decades of uncertainty about inflation and policy, plus the duration risk from Module 203. Upward slope is the default state, so only departures from it carry information." },
    { q: "The curve steepened. What is the essential follow-up question?",
      options: ["By how many basis points?", "Which end moved, and why — falling short rates and rising long rates mean very different things", "Which agency reported it?", "What was the trading volume?"],
      a: 1,
      why: "Steepening from falling short yields prices rate cuts and a weakening economy. Steepening from rising long yields suggests inflation or supply concerns. Direction alone is nearly meaningless." },
    { q: "Which part of the curve is most sensitive to current central bank policy?",
      options: ["The 30-year", "The front end — short maturities", "The whole curve equally", "The 10-year only"],
      a: 1,
      why: "Short maturities are dominated by where policy rates are now and over the next year or two. The long end reflects growth and inflation expectations over decades and is far less tied to the current meeting." },
    { q: "How can a forex trader use the yield curve?",
      options: ["They cannot, it is a bond market tool", "Comparing two countries' front ends gives a market-priced read on the rate differential that drives their pair", "It predicts exchange rates precisely", "Only for carry trades"],
      a: 1,
      why: "Module 9 established that rate expectations drive currencies. The curve is those expectations drawn as a chart, and the differential between two countries' front ends is exactly what a carry trade is positioned on." }
  ]
},

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
