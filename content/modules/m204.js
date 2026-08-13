/* N1 Forex Academy — Module 204. Loaded on demand; see assets/loader.js. */
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
}

]);
