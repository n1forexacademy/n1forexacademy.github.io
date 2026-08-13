/* N1 Forex Academy — Module 205. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 205 ============================= */
{
  id: 205, track: 'bonds',
  title: "The Yield Curve",
  tagline: "One chart that shows what the market expects rates, growth and inflation to do.",
  level: "Advanced",
  duration: "90 min",

  objectives: [
    "Read a yield curve and describe what its shape is telling you",
    "Explain what an upside-down curve has historically meant, and its real caveats",
    "Ask the right question when someone says the curve steepened — which end moved",
    "Explain in plain words why lending for longer normally pays more",
    "Use the curve to read rate expectations before they show up in your currency pairs"
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
}

]);
