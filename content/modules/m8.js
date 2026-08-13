/* N1 Forex Academy — Module 8. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 8 ============================= */
{
  id: 8,
  title: "Indicators — What They Do and What They Cannot Do",
  tagline: "Every indicator is arithmetic on past prices. Knowing exactly which arithmetic tells you exactly what it can and cannot say.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Say in one plain sentence what any major indicator is actually calculating",
    "Recognise when two indicators are really telling you the same thing twice",
    "Use moving averages, RSI, MACD, Bollinger Bands and ATR for what each is good at",
    "Size a stop to how much the instrument actually moves, instead of a fixed pip count",
    "Test any indicator someone sells you — starting with whether it rewrites its own history"
  ],

  misconceptions: [
    "**\"Indicators predict price.\"** Every indicator is a transformation of past prices. None contains information that is not already on the chart — they reorganise it, which is genuinely useful, but they add nothing.",
    "**\"More indicators means more confirmation.\"** Indicators from the same family are near-duplicates. Three momentum oscillators is one opinion repeated.",
    "**\"There is an optimal setting.\"** A setting that was optimal historically is usually curve-fitted. Robustness across a range of settings matters far more than a peak at one.",
    "**\"This indicator has 90% accuracy.\"** Almost always a repainting indicator — it redraws its history so past signals look perfect. Test in real time or with bar-by-bar replay, never by eye on historical data."
  ],

  glossary: [
    { t: "Moving average (MA)", d: "The average closing price over N periods, plotted as a line. Smooths noise and shows trend direction." },
    { t: "EMA", d: "Exponential moving average — weights recent prices more heavily, so it responds faster than a simple MA." },
    { t: "RSI", d: "Relative Strength Index — measures the ratio of average gains to average losses over N periods, scaled 0–100." },
    { t: "MACD", d: "The difference between two EMAs, plus a signal line and histogram. A momentum and trend-change measure." },
    { t: "Stochastic", d: "Where the close sits within the recent high-low range, scaled 0–100." },
    { t: "Bollinger Bands", d: "A moving average with bands at a number of standard deviations above and below. A volatility envelope." },
    { t: "ATR", d: "Average True Range — the average size of recent candles, including gaps. A pure volatility measure with no direction." },
    { t: "Lag", d: "The delay between price moving and an indicator reflecting it. Inherent to any averaging." },
    { t: "Divergence", d: "Price making a new extreme while an oscillator does not. Suggests weakening momentum." },
    { t: "Repainting", d: "An indicator that changes its historical values after the fact, making past signals look far better than they were." },
    { t: "Curve fitting", d: "Tuning parameters until they fit past data closely, at the cost of any predictive value." }
  ],

  slides: [
    {
      kicker: "Module 8 · Framing",
      title: "Every indicator is arithmetic on the past",
      bullets: [
        "There is no exception. **All of them take past prices and compute something.**",
        "This means no indicator can contain information the chart does not already have.",
        "What they *do* provide is genuinely valuable: **consistency, objectivity, and a way to see something you would otherwise miss.**",
        "A moving average is a slower, more objective version of 'the trend looks up'.",
        "**Use indicators to make your judgement consistent, never to replace it.**"
      ],
      note: "Set the tone here. This module is deliberately deflationary — most students arrive believing indicators are the substance of trading. Reframing them as consistency tools rather than prediction engines is the whole point."
    },
    {
      kicker: "Module 8 · Families",
      title: "Four families — pick one from each at most",
      bullets: [
        "**Trend:** moving averages, MACD, SuperTrend, ADX. *Which way and how strongly?*",
        "**Momentum / oscillators:** RSI, Stochastic, CCI. *How stretched is the move?*",
        "**Volatility:** ATR, Bollinger Bands, standard deviation. *How much movement should I expect?*",
        "**Volume / participation:** tick volume, OBV. *Weak in forex — there is no consolidated volume.*",
        "**One from a family is enough. Two from the same family is one opinion counted twice.**"
      ],
      note: "Have the student list every indicator currently on their charts and sort them into these families. Nearly everyone finds three momentum oscillators and no volatility measure. That realisation does more than any lecture."
    },
    {
      kicker: "Module 8 · Trend",
      title: "Moving averages — the honest workhorse",
      bullets: [
        "**MA = average close over N periods.** That is the entire concept.",
        "**Longer N** = smoother, slower, fewer false signals, later entries. **Shorter N** = faster, noisier.",
        "Common uses: **direction** (is it rising?), **dynamic support/resistance** (does price bounce off it?), and **crossovers** (fast crossing slow).",
        "**Crossovers lag badly.** By the time a 50/200 cross happens, a large part of the move is gone. They confirm; they do not signal.",
        "**Best use: a single MA as an objective trend filter.** 'Only long above the 50 EMA on H4' is a rule two people would apply identically."
      ],
      visual: '<svg class="fig" viewBox="0 0 580 190" role="img" aria-label="Price with a fast and slow moving average showing lag at the turn"><polyline class="acc" points="30,150 70,120 110,135 150,90 190,105 230,50 270,70 310,35 350,60 390,95 430,80 470,120 510,140 550,165" stroke="var(--ink-3)" stroke-width="1.5"/><polyline fill="none" stroke="var(--bull)" stroke-width="2.5" points="30,155 70,140 110,133 150,120 190,113 230,95 270,85 310,72 350,68 390,72 430,74 470,88 510,105 550,125"/><polyline fill="none" stroke="var(--bear)" stroke-width="2.5" points="30,160 70,152 110,148 150,140 190,134 230,124 270,116 310,106 350,100 390,97 430,94 470,97 510,104 550,114"/><text class="lbl-sm" x="556" y="128" text-anchor="end" fill="var(--bull)">fast MA</text><text class="lbl-sm" x="556" y="152" text-anchor="end" fill="var(--bear)">slow MA</text><text class="lbl-sm" x="556" y="176" text-anchor="end">price</text><line x1="310" y1="20" x2="310" y2="175" class="dash"/><text class="lbl-sm" x="316" y="28">price turns</text><line x1="430" y1="20" x2="430" y2="175" class="dash" stroke="var(--bear)"/><text class="lbl-sm" x="436" y="28">cross confirms — much later</text></svg>',
      note: "The gap between the two dashed lines is the lesson. Measure it in pips on a real chart with the student. Lag is not a flaw to be engineered away — it is the unavoidable cost of smoothing, and every 'no lag' indicator is either repainting or just noisier."
    },
    {
      kicker: "Module 8 · Momentum",
      title: "RSI — and what overbought really means",
      bullets: [
        "**RSI compares average gains to average losses** over N periods, scaled 0–100. Default N is 14.",
        "Above 70 is conventionally 'overbought', below 30 'oversold'.",
        "**In a strong trend, RSI stays overbought for a long time.** Selling because RSI hit 70 is how you short a trend all the way up.",
        "**Better uses:** as a *filter* (only take longs when RSI is above 50), and for **divergence** — price makes a higher high, RSI does not.",
        "**Divergence signals weakening momentum, not a reversal.** Momentum can weaken for a long time before anything turns."
      ],
      note: "Show a strong trend where RSI sat above 70 for thirty candles. This single chart cures the reflexive fade-the-overbought habit better than any explanation, and it is easy to find."
    },
    {
      kicker: "Module 8 · Momentum",
      title: "MACD and Stochastic in one slide",
      bullets: [
        "**MACD** = fast EMA − slow EMA, with a signal line and a histogram of the difference. **It is a trend indicator wearing a momentum costume.**",
        "The histogram shrinking means the two EMAs are converging — momentum is fading. That is often the most useful part.",
        "**Stochastic** measures where the close sits within the recent high-low range. Fast, noisy, and prone to sitting pinned at an extreme in trends.",
        "Stochastic is most useful in **ranges**, where an extreme genuinely means the edge of the range.",
        "**Do not run RSI, Stochastic and MACD together.** They largely agree by construction."
      ],
      note: "If a student insists on multiple oscillators, have them plot RSI and Stochastic together and count how often they disagree meaningfully. It is rare, and seeing it is more persuasive than being told."
    },
    {
      kicker: "Module 8 · Volatility",
      title: "ATR — the most underused indicator in retail trading",
      illus: 'riskPanel',
      illusCap: "The Risk panel reads ATR for you and shows the 2x ATR stop distance in pips.",
      bullets: [
        "**ATR is the average size of recent candles**, including gaps. Pure volatility, no direction.",
        "**This is how you stop using fixed pip stops.** A 20-pip stop is enormous on EUR/USD in Tokyo and trivial on gold at the NY open.",
        "**Stop distance = a multiple of ATR** — commonly 1.5× to 2× — placed beyond structure.",
        "The same instrument needs different stop sizes on different days. **ATR tells you which day you are in.**",
        "Also use it to sanity-check targets: **a target beyond 2× ATR on an intraday trade is unlikely to be reached today.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 180" role="img" aria-label="ATR-scaled stop distance in quiet versus volatile conditions"><rect x="40" y="26" width="230" height="130" rx="8" fill="none" stroke="var(--line)"/><text class="lbl" x="155" y="18" text-anchor="middle">quiet: ATR = 12 pips</text><g stroke-width="5"><line class="up" x1="90" y1="80" x2="90" y2="100"/><line class="dn" x1="118" y1="76" x2="118" y2="98"/><line class="up" x1="146" y1="82" x2="146" y2="104"/><line class="up" x1="174" y1="74" x2="174" y2="96"/><line class="dn" x1="202" y1="78" x2="202" y2="100"/></g><line x1="60" y1="118" x2="250" y2="118" stroke="var(--bear)" stroke-width="2" stroke-dasharray="4 3"/><text class="lbl-sm" x="155" y="136" text-anchor="middle">stop ≈ 24 pips (2× ATR)</text>' +
        '<rect x="310" y="26" width="230" height="130" rx="8" fill="none" stroke="var(--line)"/><text class="lbl" x="425" y="18" text-anchor="middle">volatile: ATR = 45 pips</text><g stroke-width="5"><line class="up" x1="356" y1="52" x2="356" y2="112"/><line class="dn" x1="384" y1="44" x2="384" y2="118"/><line class="up" x1="412" y1="58" x2="412" y2="126"/><line class="dn" x1="440" y1="40" x2="440" y2="110"/><line class="up" x1="468" y1="50" x2="468" y2="120"/></g><line x1="330" y1="144" x2="520" y2="144" stroke="var(--bear)" stroke-width="2" stroke-dasharray="4 3"/><text class="lbl-sm" x="425" y="162" text-anchor="middle">stop ≈ 90 pips (2× ATR)</text></svg>',
      note: "This slide is the bridge into Module 10. Fixed pip stops are the reason so many students get stopped out repeatedly in volatile conditions and then take enormous losses in quiet ones. ATR-scaled stops fix both problems with one change."
    },
    {
      kicker: "Module 8 · Volatility",
      title: "Bollinger Bands — a volatility envelope, not a signal",
      bullets: [
        "A moving average with bands set a number of **standard deviations** away, usually two.",
        "**Touching the upper band does not mean sell.** In a strong trend price walks the band for extended periods.",
        "**The squeeze is the useful part:** bands contracting means volatility has compressed, and compression usually resolves into expansion.",
        "A squeeze tells you **a move is likely coming**. It says nothing about direction.",
        "**Combine with structure for direction, and use the squeeze for timing.**"
      ],
      note: "The squeeze-then-expansion idea connects directly back to the Asian range compression from Module 5. Same phenomenon, different tool. Make that link explicitly — it helps students see the market as one thing rather than a collection of separate techniques."
    },
    {
      kicker: "Module 8 · Scepticism",
      title: "How to evaluate any new indicator",
      bullets: [
        "**What does it compute?** If the seller cannot say in one sentence, walk away.",
        "**Does it repaint?** Check with bar-by-bar replay, never by looking at historical signals. **This one test eliminates most 'holy grail' indicators.**",
        "**How many parameters does it have?** More parameters means more scope for curve fitting.",
        "**Is it robust?** Change the settings by 20% either way. If performance collapses, it was fitted to the past, not to the market.",
        "**Which family is it in?** If you already have one from that family, you do not need it."
      ],
      note: "Test one downloaded indicator together in the lab using replay. Watching arrows appear and then relocate as new bars form is a genuinely memorable moment, and it inoculates against a large category of paid products."
    },
    {
      kicker: "Module 8 · Practice",
      title: "A sane default setup",
      bullets: [
        "**One trend filter:** a single EMA — 50 on H4 works fine — used only to define bias.",
        "**One volatility measure:** ATR(14), used for stop distance and target sanity checks.",
        "**Optionally one oscillator:** RSI(14), used as a filter or for divergence, never as a standalone signal.",
        "**That is it. Three indicators maximum, from three different families.**",
        "**The chart is the primary source. Indicators are there to keep you consistent, not to tell you what to do.**"
      ],
      note: "Students will resist the minimalism. The honest argument: a simple setup is testable and a complex one is not. If you cannot state your rules in five sentences, you cannot backtest them in Module 12 and you cannot follow them under pressure."
    },
    {
      kicker: "Module 8 · Wrap",
      title: "What indicators are for",
      bullets: [
        "Every indicator is arithmetic on past prices — useful, and not predictive",
        "Four families, and why stacking within a family is self-deception",
        "Moving averages as objective trend filters, with lag understood and accepted",
        "RSI and MACD used as filters and divergence, not as reversal signals",
        "ATR for volatility-scaled stops — the highest-value idea in the module",
        "A repeatable test for any new indicator, starting with whether it repaints"
      ],
      note: "Ask the student to remove every indicator from their charts and add back only the three from the sane-default slide. Most find their charts easier to read within a week, and it makes Module 11's rule-writing far simpler."
    }
  ],

  practical: {
    title: "Lab 8 — Indicator audit and ATR-based stops",
    time: "70 min",
    intro: "Two goals: strip the student's charts down to a defensible minimum, and replace fixed pip stops with volatility-scaled ones. The second change alone typically improves a beginner's results more than any new strategy.",
    setup: [
      "MT4/MT5 with the **Course** template",
      "TradingView with bar-replay available",
      "One downloaded third-party indicator, ideally one advertising very high accuracy",
      "A spreadsheet named **Indicator Audit**",
      "The **FX Calculator** from Lab 2"
    ],
    steps: [
      { h: "Audit what is already there", d: "List every indicator currently on the student's charts. For each, write: what it computes in one sentence, which family it belongs to, and how it changes a decision. Any indicator that cannot be described or that never changes a decision comes off the chart today." },
      { h: "Demonstrate lag", d: "Add a 50 EMA and a 200 EMA to H4. Find three historical crossovers. For each, measure how many pips price had already moved before the cross occurred, and record it. Then discuss what the crossover is actually good for — confirmation, not signal." },
      { h: "Break the overbought myth", d: "Find a strong trend and count how many consecutive candles RSI stayed above 70 or below 30. Then compute what would have happened to someone who shorted the first touch of 70 and held. Record the number in the spreadsheet — students refer back to it." },
      { h: "Test for repainting", d: "Load the downloaded indicator. In TradingView replay, or by stepping through MT4 with the strategy tester in visual mode, watch its signals form bar by bar. Record whether any signal appears and then moves or disappears. Screenshot before and after if it does." },
      { h: "Robustness test", d: "Take one rule — 'long when price is above the 50 EMA on H4' — and check how the picture changes with a 40 EMA and a 60 EMA over the same period. If the conclusion is stable, the rule is robust. If it flips, the setting was doing the work rather than the idea." },
      { h: "Build ATR stops", d: "Add ATR(14) to H1 and H4 for both instruments. Record the current ATR in pips on each. Then compute 1.5× and 2× ATR stop distances, and compare with the fixed stop the student has been using. The mismatch is usually large in at least one direction." },
      { h: "Size the position from the ATR stop", d: "Using the FX Calculator, compute the lot size that risks exactly 1% of a hypothetical $5,000 account with a 2× ATR stop, for both instruments. Note how the lot size differs between the quiet instrument and the volatile one for identical risk. **This is the single most important calculation in the lab.**" },
      { h: "Strip the charts", d: "Remove everything and rebuild with exactly three indicators from three families. Save it as an updated **Course** template. Write down, in one sentence each, what each indicator is there to do." }
    ],
    deliverable: "An **Indicator Audit** spreadsheet containing: the original indicator inventory with family classification and a keep/remove decision for each, three measured crossover lag figures, an RSI-overbought duration count with the hypothetical cost of fading it, a repainting test result with screenshots, a robustness comparison across three EMA settings, current ATR values with 1.5× and 2× stop distances for two instruments, and position sizes at 1% risk for both. Plus a rebuilt three-indicator template.",
    rubric: [
      { c: "Explanatory clarity", d: "Can state what each retained indicator computes in one sentence, without reading from notes." },
      { c: "Family discipline", d: "Final template has at most three indicators, from three different families, with a stated purpose for each." },
      { c: "Lag comprehension", d: "Measured crossover lag in pips and can articulate why a crossover confirms rather than signals." },
      { c: "Repainting test", d: "Tested bar by bar rather than by eye, and can explain why looking at historical signals proves nothing." },
      { c: "ATR application", d: "Computed ATR-based stops correctly for both instruments and can explain why a fixed pip stop is wrong on at least one of them." },
      { c: "Sizing integration", d: "Produced correct lot sizes at 1% risk from ATR stops, and can explain why the volatile instrument gets a smaller position for the same risk." }
    ],
    pitfalls: [
      "Keeping an indicator because it 'looks useful' without being able to say what it computes. Apply the one-sentence test strictly.",
      "Testing for repainting by scrolling through history. Historical signals on a repainting indicator always look perfect — that is the whole mechanism. Insist on replay.",
      "Computing ATR in price rather than pips and getting stops a hundred times too small. Watch this on JPY pairs especially.",
      "Concluding that a bigger ATR means a bigger position because 'there's more opportunity'. It means a *smaller* position for the same risk. If a student gets this backwards, stop and re-teach it before Module 10.",
      "Keeping two oscillators 'just in case'. Ask which decision differs when they disagree. There usually is not one."
    ]
  },

  homework: [
    "Trade the stripped-down three-indicator template exclusively for a week on demo, and note whether decisions became easier or harder.",
    "Record ATR daily for both instruments and observe how much it varies week to week.",
    "Find one indicator being sold on social media, apply the five evaluation questions to it, and write a verdict."
  ],

  quiz: [
    {
      q: "RSI has been above 70 for fifteen consecutive candles in a strong uptrend. What does this mean?",
      options: [
        "A reversal is overdue and increasingly likely",
        "The trend is strong — persistent overbought readings are what strong trends look like, and fading them is a known way to lose steadily",
        "The RSI settings are wrong",
        "Volatility is about to collapse"
      ],
      a: 1,
      why: "RSI measures the ratio of average gains to average losses. In a strong uptrend, gains dominate for long stretches, so a sustained high reading is a description of trend strength, not a warning. Using RSI as a filter — only take longs above 50 — or looking for divergence is far more defensible than fading extremes."
    },
    {
      q: "EUR/USD ATR(14) on H1 is 11 pips. Gold ATR(14) on H1 is 340 pips. You use a fixed 25-pip stop on both. What is wrong?",
      options: [
        "Nothing — consistency is good",
        "The stop is more than 2× ATR on EUR/USD but a tiny fraction of ATR on gold, so it is too loose on one and guaranteed to be hit on the other",
        "The gold ATR must be miscalculated",
        "Fixed stops are always correct"
      ],
      a: 1,
      why: "A fixed pip stop ignores how much the instrument actually moves. On gold, 25 pips is well inside normal noise and will be hit almost immediately regardless of whether the idea was right. Scaling the stop to a multiple of ATR — and then sizing the position from that stop — solves both problems at once."
    },
    {
      q: "You have RSI, Stochastic and CCI on your chart. What is the problem?",
      options: [
        "Too many colours",
        "All three are momentum oscillators computed from the same price data, so they mostly agree by construction — that is one opinion, not three confirmations",
        "They should be on separate charts",
        "There is no problem"
      ],
      a: 1,
      why: "Confluence only means something when the sources are independent. Three oscillators from the same family will agree the overwhelming majority of the time, which feels like confirmation but adds no information. One from each of trend, momentum and volatility gives genuinely different views."
    },
    {
      q: "An indicator's historical chart shows arrows that call almost every turn perfectly. What should you suspect first?",
      options: [
        "You have found a genuinely superior tool",
        "It repaints — it recalculates and relocates its signals after the fact, so its history will never resemble its live behaviour",
        "The timeframe is too high",
        "The broker's data is unusual"
      ],
      a: 1,
      why: "Near-perfect historical signals are the signature of repainting. The only valid test is bar-by-bar: use replay or the visual strategy tester and watch whether a signal, once printed, ever moves or disappears. Judging by scrolling through history is exactly the failure mode the indicator is designed to exploit."
    },
    {
      q: "A rule works well with a 50 EMA but produces poor results with a 45 or 55 EMA over the same data. What does that tell you?",
      options: [
        "50 is the optimal setting and should be used",
        "The result is likely curve-fitted to the past — a robust idea should survive small parameter changes",
        "The other settings were tested incorrectly",
        "The rule needs a fourth indicator"
      ],
      a: 1,
      why: "If a small parameter change destroys the result, the parameter was fitting historical noise rather than capturing anything about market behaviour. Robustness across a range of nearby settings is far better evidence than a sharp peak at one. This is one of the most reliable ways to spot an over-optimised system before risking money on it."
    },
    {
      q: "What is the most defensible use of a moving average?",
      options: [
        "Taking every crossover as a trade signal",
        "As an objective trend filter — for example, only taking longs while price is above it — so that bias is defined the same way every time",
        "Predicting where price will reverse",
        "Replacing structural analysis entirely"
      ],
      a: 1,
      why: "A moving average is a lagging average of past closes, so it cannot predict, and crossovers arrive well after a large part of the move. Its real value is consistency: 'only long above the 50 EMA on H4' is a rule two different people would apply identically, which makes it testable and repeatable — exactly what a discretionary eye is not."
    }
  ]
}

]);
