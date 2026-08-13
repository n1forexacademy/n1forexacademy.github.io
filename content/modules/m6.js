/* N1 Forex Academy — Module 6. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 6 ============================= */
{
  id: 6,
  title: "Reading Price — Candlesticks and Structure",
  tagline: "Learning to describe what a chart is doing, out loud, before ever deciding what to do about it.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Read a single candle and say who won that period, and how convincingly",
    "Decide mechanically whether a market is trending up, trending down, or going nowhere",
    "Tell the difference between a pullback and a trend that has genuinely ended",
    "Use three timeframes together without talking yourself into a contradiction",
    "Describe any chart out loud in five sentences, ending with what would prove you wrong"
  ],

  misconceptions: [
    "**\"Candlestick patterns predict price.\"** A pattern is a compressed record of what already happened. It shifts probability slightly, and only in the right *location*. A hammer in the middle of nowhere means nothing.",
    "**\"The trend is up because price is higher than last week.\"** Trend is defined by the *sequence of swing highs and lows*, not by the endpoints. Define it structurally or you will define it emotionally.",
    "**\"Lower timeframes give more detail so they're better.\"** They give more *noise*. The M1 chart contains almost no information about direction and enormous amounts of distraction.",
    "**\"A reversal is when price stops going up.\"** That is a pause. A reversal requires a broken structure: a failure to make a new extreme, then a break of the prior swing in the other direction."
  ],

  glossary: [
    { t: "Candlestick", d: "A bar showing open, high, low and close for one period. Body is open-to-close; wicks are the extremes." },
    { t: "Body", d: "The filled part between open and close. Long bodies mean directional conviction." },
    { t: "Wick / shadow", d: "The thin lines to the high and low. Long wicks show a price level that was reached and rejected." },
    { t: "Swing high", d: "A candle whose high is above the highs either side of it. A local peak." },
    { t: "Swing low", d: "A candle whose low is below the lows either side. A local trough." },
    { t: "Uptrend", d: "A sequence of higher highs and higher lows." },
    { t: "Downtrend", d: "A sequence of lower highs and lower lows." },
    { t: "Range / consolidation", d: "Price oscillating between roughly horizontal boundaries with no clear directional sequence." },
    { t: "Break of structure", d: "Price closing beyond a prior swing point, signalling that the prevailing sequence has changed." },
    { t: "Pullback / retracement", d: "A counter-move within a trend that does not break the trend's structure." },
    { t: "Impulse", d: "A strong directional move with large bodies and small wicks." },
    { t: "Timeframe", d: "The period each candle represents. M15, H1, H4 and D1 are the working set in this course." }
  ],

  slides: [
    {
      kicker: "Module 6 · Candles",
      title: "One candle is a story about a fight",
      bullets: [
        "Four numbers: **open, high, low, close**. Everything else is interpretation.",
        "**Body** = open to close. Long body means one side dominated the whole period.",
        "**Wicks** = how far price travelled and was rejected. A long upper wick means buyers pushed up there and could not hold it.",
        "**Close relative to range is the single most informative element.** A close near the high means buyers won the period, regardless of colour.",
        "**Colour tells you the direction. Structure tells you the conviction.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 560 190" role="img" aria-label="Anatomy of bullish and bearish candlesticks"><g stroke-width="2"><line class="up" x1="110" y1="20" x2="110" y2="45"/><rect x="96" y="45" width="28" height="70" class="up" opacity=".85"/><line class="up" x1="110" y1="115" x2="110" y2="150"/></g><text class="lbl-sm" x="140" y="26">high</text><text class="lbl-sm" x="140" y="52">close</text><text class="lbl-sm" x="140" y="118">open</text><text class="lbl-sm" x="140" y="154">low</text><text class="lbl" x="110" y="178" text-anchor="middle">bullish</text>' +
        '<g stroke-width="2"><line class="dn" x1="290" y1="20" x2="290" y2="45"/><rect x="276" y="45" width="28" height="70" class="dn" opacity=".85"/><line class="dn" x1="290" y1="115" x2="290" y2="150"/></g><text class="lbl-sm" x="320" y="52">open</text><text class="lbl-sm" x="320" y="118">close</text><text class="lbl" x="290" y="178" text-anchor="middle">bearish</text>' +
        '<g stroke-width="2"><line class="up" x1="450" y1="20" x2="450" y2="105"/><rect x="436" y="105" width="28" height="18" class="up" opacity=".85"/><line class="up" x1="450" y1="123" x2="450" y2="132"/></g><text class="lbl-sm" x="480" y="60">long upper wick =</text><text class="lbl-sm" x="480" y="74">pushed up, rejected</text><text class="lbl" x="450" y="178" text-anchor="middle">rejection</text></svg>',
      note: "Make the student narrate five real candles aloud: 'opened here, ran up to there, sellers pushed it back, closed near the low — sellers won.' Narration is the skill. Pattern names come later and matter less."
    },
    {
      kicker: "Module 6 · Candles",
      title: "The handful of patterns worth knowing",
      bullets: [
        "**Pin bar / hammer / shooting star** — tiny body, long wick. A level was tested and rejected hard.",
        "**Engulfing** — a body that entirely covers the previous body. Sentiment flipped within one period.",
        "**Inside bar** — the whole range sits inside the previous candle. Compression, and often a precursor to expansion.",
        "**Doji** — open and close nearly equal. Indecision, or a genuine balance point.",
        "**Every one of these is only meaningful at a level that already mattered.** A pin bar in open space is noise."
      ],
      note: "Resist teaching the full catalogue of forty patterns. Four, used at meaningful locations, outperform forty used everywhere. If a student has been memorising a pattern chart from social media, this is the slide that redirects them."
    },
    {
      kicker: "Module 6 · Structure",
      title: "Trend is a sequence, not a feeling",
      bullets: [
        "**Uptrend = higher highs and higher lows.** Both, in sequence.",
        "**Downtrend = lower highs and lower lows.**",
        "**Range = neither sequence holds.** Highs and lows are roughly level.",
        "This is a *mechanical* test. Mark the swings, read the sequence, state the answer. Two people should get the same result.",
        "**If you cannot mark the swings clearly, you are on the wrong timeframe.** Go up one."
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="Uptrend defined by higher highs and higher lows"><polyline class="acc" points="30,170 80,110 120,140 175,70 215,105 275,35 315,72 370,15"/><g fill="var(--bull)"><circle cx="80" cy="110" r="4"/><circle cx="175" cy="70" r="4"/><circle cx="275" cy="35" r="4"/><circle cx="370" cy="15" r="4"/></g><g fill="var(--bear)"><circle cx="120" cy="140" r="4"/><circle cx="215" cy="105" r="4"/><circle cx="315" cy="72" r="4"/></g><text class="lbl-sm" x="80" y="102" text-anchor="middle">H1</text><text class="lbl-sm" x="175" y="62" text-anchor="middle">H2</text><text class="lbl-sm" x="275" y="27" text-anchor="middle">H3</text><text class="lbl-sm" x="120" y="158">L1</text><text class="lbl-sm" x="215" y="123">L2</text><text class="lbl-sm" x="315" y="90">L3</text><text class="lbl" x="400" y="60">H3 &gt; H2 &gt; H1</text><text class="lbl" x="400" y="80">L3 &gt; L2 &gt; L1</text><text class="lbl" x="400" y="104" font-weight="700">= uptrend</text></svg>',
      note: "Give the student a chart with the swings unmarked and have them mark it. Then you mark the same chart. Compare. Where you disagree, the disagreement is almost always about which swings are significant — which is the real skill, and it needs the next slide."
    },
    {
      kicker: "Module 6 · Structure",
      title: "Which swings count",
      bullets: [
        "Not every wiggle is a swing. A swing that matters **produced a visible reaction** — a move away that other participants responded to.",
        "Practical filter: **if you have to squint to see it, ignore it.**",
        "Mark swings on the timeframe you are analysing, not a lower one. H4 swings for an H4 analysis.",
        "**Consistency beats correctness here.** A student who marks swings the same way every time will develop reliable pattern recognition even if their filter is imperfect.",
        "Write your own swing rule down and apply it mechanically."
      ],
      note: "This slide prevents the most common source of analysis paralysis. Students agonise over whether a small bounce counts. Tell them: pick a rule, write it, apply it identically every time — consistency is what makes the data readable, not perfection."
    },
    {
      kicker: "Module 6 · Structure",
      title: "Break of structure — where a trend actually ends",
      bullets: [
        "In an uptrend, the trend is intact while each pullback holds above the prior swing low.",
        "**The structure breaks when price closes below the most recent significant swing low.**",
        "Before that, a decline is a **pullback**, however uncomfortable it feels.",
        "A single break is not a new downtrend — it is the *end of the uptrend*. The new trend needs its own sequence of lower highs and lower lows.",
        "**Most beginner reversal trades are taken during pullbacks, before any structure has broken.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="Uptrend structure breaking when price closes below the prior swing low"><polyline class="acc" points="25,170 75,105 118,138 172,62 214,100 272,30 330,105 380,150 440,132 500,178"/><g fill="var(--bull)"><circle cx="172" cy="62" r="4"/><circle cx="272" cy="30" r="4"/></g><g fill="var(--bear)"><circle cx="118" cy="138" r="4"/><circle cx="214" cy="100" r="4"/></g><line x1="214" y1="100" x2="540" y2="100" class="dash" stroke="var(--bear)"/><text class="lbl-sm" x="222" y="94">last higher low</text><circle cx="336" cy="100" r="7" fill="none" stroke="var(--bear)" stroke-width="2.5"/><text class="lbl" x="348" y="82" font-weight="700">break of structure</text><text class="lbl-sm" x="348" y="98">close below the prior swing low</text><text class="lbl-sm" x="400" y="176">now: lower high, lower low</text></svg>',
      note: "Point at the region before the break and say: 'Everything here is a pullback. If you shorted at the peak, you were guessing.' Then point after: 'Here you have evidence.' The cost of that patience is a worse entry price; the benefit is a far higher hit rate."
    },
    {
      kicker: "Module 6 · Timeframes",
      title: "Three timeframes, three jobs",
      bullets: [
        "**Higher (H4 or D1) — direction.** What is the prevailing structure? This sets the bias, and you do not argue with it.",
        "**Middle (H1) — location.** Where within that structure is price? Near a level, or in open space?",
        "**Lower (M15) — timing.** Is there a trigger to enter now?",
        "**Always analyse top-down.** Starting on M15 and working up is how you talk yourself into a trade that contradicts the daily.",
        "**A lower timeframe never overrules a higher one.** It only refines timing within it."
      ],
      note: "The top-down rule is one of the highest-leverage habits in the course. Enforce the order literally in the lab — cover the lower timeframes until the higher-timeframe bias has been written down."
    },
    {
      kicker: "Module 6 · Timeframes",
      title: "The alignment question",
      bullets: [
        "**Best case:** all three agree. Higher timeframe up, price pulling back to a level, lower timeframe showing a reversal trigger. Take it.",
        "**Common case:** higher timeframe up, lower timeframe down. That is just a pullback — *the pullback is the opportunity*, not a warning.",
        "**Difficult case:** higher timeframe in a range. There is no bias to align with. Trade the range boundaries or stand aside.",
        "**Worst case:** you looked at M15 first, found a signal, and went looking for a story to support it. **This is where most bad trades come from.**",
        "Ask the alignment question before every trade: *what is the higher timeframe doing, and does this trade fit it?*"
      ],
      note: "The 'worst case' bullet describes confirmation bias precisely. Name it explicitly — students recognise the behaviour immediately once it is described, and naming it is most of the cure."
    },
    {
      kicker: "Module 6 · Method",
      title: "The chart narration script",
      bullets: [
        "**1. Higher timeframe structure:** \"On H4, EUR/USD is in an uptrend — higher highs and higher lows since the low of the 3rd.\"",
        "**2. Recent action:** \"The last swing high was 1.0920 and price has pulled back to 1.0865.\"",
        "**3. Location:** \"That pullback is sitting on the prior swing high, which is now acting as support.\"",
        "**4. Lower timeframe:** \"On M15 there is a bullish engulfing candle at that level.\"",
        "**5. Invalidation:** \"If price closes below 1.0840, the last higher low is broken and the idea is wrong.\"",
        "**Say all five, in order, out loud, before every trade for the rest of this course.**"
      ],
      note: "This script is the single most valuable artefact in the module. It forces higher-timeframe-first analysis, it forces a location, and — critically — it forces the student to state what would make them wrong before they enter. Make them do it aloud until it is automatic."
    },
    {
      kicker: "Module 6 · Wrap",
      title: "You can now describe a chart",
      bullets: [
        "Read any candle and say who won the period and how convincingly",
        "Mark swings consistently and classify the market mechanically",
        "Distinguish a pullback from a break of structure, and know why it matters",
        "Analyse top-down and detect when you have reasoned backwards",
        "Narrate any chart in five sentences, ending with what would prove you wrong"
      ],
      note: "Description before prediction. A student who can describe a chart accurately can be taught a strategy; one who cannot will apply any strategy to the wrong conditions. Do not move on until the narration is fluent."
    }
  ],

  practical: {
    title: "Lab 6 — Structure marking and chart narration",
    time: "70 min",
    intro: "This lab builds the core reading skill of the course. It is repetitive on purpose: the goal is that structure marking becomes automatic and narration becomes a reflex, not that any particular chart is analysed brilliantly.",
    setup: [
      "MT4/MT5 with the **Course** template applied",
      "TradingView with drawing tools available and the replay function accessible",
      "A screenshot folder named **Structure Log**",
      "The five-step narration script from the slides, printed and on the desk"
    ],
    steps: [
      { h: "Write your swing rule", d: "Before marking anything, the student writes their own definition of a significant swing in one sentence — for example, 'a high with at least three lower highs either side that produced a move of at least half the recent average candle range.' The rule must be applied identically for the rest of the course." },
      { h: "Narrate twenty candles", d: "On H1, step through twenty consecutive candles and narrate each aloud: what happened, who won, how convincingly. Do not let the student skip to patterns. This is slow and feels tedious, and it is the exercise that builds the eye." },
      { h: "Mark structure on five charts", d: "Take five instruments on H4. Mark every significant swing high and low using the written rule, then classify each chart as uptrend, downtrend or range. Screenshot each into the Structure Log with the classification written in the filename." },
      { h: "Instructor cross-check", d: "Mark the same five charts yourself, independently, then compare. Discuss every disagreement, and specifically identify whether the disagreement came from the rule or from inconsistent application of it. Refine the written rule if needed." },
      { h: "Find five breaks of structure", d: "Search back through history and find five clear examples where a trend's structure broke. For each, mark: the last swing that held, the candle that closed beyond it, and what happened over the following twenty candles. Note how many produced a clean new trend and how many chopped." },
      { h: "Pullback versus reversal drill", d: "Use TradingView's replay to move forward candle by candle through three trending sequences. At each pullback, the student calls 'pullback' or 'broken' before revealing the next candles. Tally the calls. Most students are heavily biased toward calling reversals too early — the tally makes that visible." },
      { h: "Top-down discipline", d: "For three instruments, the student writes the H4 bias *before being allowed to open H1 or M15*. Then H1 location, then M15 trigger. If the lower timeframes contradict, they must write down that the trade is skipped rather than rationalising it." },
      { h: "Ten full narrations", d: "Deliver the complete five-step narration aloud for ten different charts. Record them on a phone if possible. The fifth step — invalidation — must be a specific price, never 'if it goes the other way'." }
    ],
    deliverable: "A **Structure Log** containing: a written swing rule, five marked and classified H4 charts, five annotated break-of-structure examples with outcomes, a tally sheet from the pullback/reversal drill, three top-down analyses in strict order, and ten written five-step narrations each ending in a specific invalidation price.",
    rubric: [
      { c: "Rule consistency", d: "The same swing rule is visibly applied across all charts. An observer could predict which swings the student would mark." },
      { c: "Classification accuracy", d: "Trend classifications agree with the instructor's independent marking on at least four of five charts, with reasoned discussion of any disagreement." },
      { c: "Structural distinction", d: "Reliably distinguishes a pullback from a break of structure, and improved measurably across the replay drill." },
      { c: "Top-down order", d: "Higher-timeframe bias written before lower timeframes were opened, with no evidence of working backwards from a signal." },
      { c: "Narration fluency", d: "Delivers all five steps without prompting, in order, in under a minute per chart." },
      { c: "Invalidation quality", d: "Every narration ends with a specific price level, tied to a structural point rather than an arbitrary pip distance." }
    ],
    pitfalls: [
      "Marking every minor wiggle as a swing, producing an unreadable chart. Send them back to their written rule.",
      "Changing the swing rule mid-exercise to make a chart look cleaner. This destroys the whole point — consistency is the deliverable.",
      "Calling every pullback a reversal. The replay drill exists specifically to make this visible; make sure the tally is actually kept.",
      "Opening M15 first 'just to have a look'. Cover the screen if you have to.",
      "Vague invalidations like 'if it breaks down'. Demand a number every single time."
    ]
  },

  homework: [
    "Narrate five charts a day for a week using the five-step script, writing each one down. Thirty-five narrations by the next session.",
    "Find and screenshot three charts currently in a range, three in an uptrend and three in a downtrend, with swings marked.",
    "Review your break-of-structure examples and note what percentage led to a clean new trend versus choppy conditions."
  ],

  quiz: [
    {
      q: "What structurally defines an uptrend?",
      options: [
        "Price is higher than it was a month ago",
        "A sequence of higher swing highs and higher swing lows",
        "The 50-period moving average is rising",
        "More green candles than red"
      ],
      a: 1,
      why: "Trend is defined by the sequence of swing points, which makes it a mechanical test two people can agree on. Endpoints, moving averages and candle colour counts are all derived or lagging measures — useful, but not the definition. Define trend structurally and you remove most of the argument from your analysis."
    },
    {
      q: "In an uptrend, price falls sharply but holds above the last higher low. What is this?",
      options: [
        "A confirmed reversal",
        "A break of structure",
        "A pullback — the trend structure is still intact",
        "A range"
      ],
      a: 2,
      why: "Until price closes below the most recent significant swing low, the sequence of higher lows is unbroken and the decline is a pullback, however uncomfortable it feels. Trading a reversal here is guessing. The pullback is more usefully treated as a potential entry *with* the trend, not against it."
    },
    {
      q: "Your H4 chart is in a clear uptrend but M15 shows a downtrend. What is happening?",
      options: [
        "The timeframes contradict each other and the chart is untradeable",
        "M15 overrules H4 because it is more current",
        "The M15 downtrend is the pullback within the H4 uptrend — often the opportunity, not a warning",
        "One of the charts has a data error"
      ],
      a: 2,
      why: "A pullback on the higher timeframe *is* a downtrend on the lower one — that is what a pullback looks like up close. This is the normal, expected relationship and it is where with-trend entries come from. A lower timeframe refines timing within the higher-timeframe bias; it never overrules it."
    },
    {
      q: "A long-legged pin bar forms in the middle of a range with no nearby level. How much does it mean?",
      options: [
        "It is a strong reversal signal wherever it appears",
        "Very little — candlestick patterns carry information only at locations that already mattered",
        "It guarantees a move in the opposite direction to the wick",
        "It means volatility is about to collapse"
      ],
      a: 1,
      why: "A pin bar records a rejection, but a rejection is only informative if it happened somewhere participants cared about — a prior swing, a level, an edge of structure. In open space it is a normal fluctuation. This is why the course teaches four patterns applied at good locations rather than forty applied everywhere."
    },
    {
      q: "Why should analysis start on the higher timeframe?",
      options: [
        "Higher timeframes update less often, so there is less to read",
        "Because starting low means you find a signal first and then construct a story to justify it — confirmation bias in its purest form",
        "Lower timeframes are less accurate",
        "Brokers provide better data on higher timeframes"
      ],
      a: 1,
      why: "Top-down order forces you to establish context before you see a trigger. Bottom-up order means the trigger comes first and the context gets selectively interpreted to support it. The mechanics of the chart are identical either way; the difference is entirely in what your reasoning is anchored to."
    },
    {
      q: "What must the final step of the chart narration always contain?",
      options: [
        "A profit target",
        "The name of the candlestick pattern",
        "A specific price at which the idea is proven wrong",
        "The expected win probability"
      ],
      a: 2,
      why: "Stating invalidation as a specific, structurally-justified price before entry does two things: it gives you a stop location that means something, and it forces you to admit the trade can fail. 'If it goes the other way' is not an invalidation — it commits to nothing and can be redefined once you are losing."
    }
  ]
}

]);
