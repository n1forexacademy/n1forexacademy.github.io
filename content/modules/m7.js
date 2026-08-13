/* N1 Forex Academy — Module 7. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 7 ============================= */
{
  id: 7,
  title: "Levels — Support, Resistance and Liquidity",
  tagline: "Where price is likely to react, why it reacts there, and how to mark levels that are actually useful.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Mark support and resistance objectively and consistently",
    "Explain why levels work in terms of resting orders rather than as chart magic",
    "Identify supply and demand zones and distinguish them from single-price levels",
    "Recognise where stop liquidity accumulates and how price interacts with it",
    "Combine levels with structure to identify high-quality trade locations"
  ],

  misconceptions: [
    "**\"Levels are exact prices.\"** They are zones. Insisting on a precise line produces stops that are far too tight and endless frustration about being 'almost right'.",
    "**\"A level that breaks is invalid.\"** A broken resistance frequently becomes support. The level did not fail — its role changed.",
    "**\"More lines is better analysis.\"** A chart with fifteen levels tells you nothing, because price is always near one. Three to five levels that matter is the target.",
    "**\"The market hunts my stop personally.\"** Price moves toward *clusters* of resting orders. Your order is not the target; the cluster is. The distinction matters because it turns paranoia into a placement decision."
  ],

  glossary: [
    { t: "Support", d: "A zone where buying interest has previously been sufficient to halt or reverse a decline." },
    { t: "Resistance", d: "A zone where selling interest has previously halted or reversed an advance." },
    { t: "Role reversal / flip", d: "Broken resistance acting as support, or broken support acting as resistance." },
    { t: "Supply zone", d: "An area from which a sharp decline originated, implying unfilled selling interest." },
    { t: "Demand zone", d: "An area from which a sharp advance originated, implying unfilled buying interest." },
    { t: "Order block", d: "A common name for the last opposing candle before a strong impulsive move — a proxy for where large orders were placed." },
    { t: "Liquidity pool", d: "A price area where many stop orders are likely clustered, typically just beyond an obvious high or low." },
    { t: "Stop run / sweep", d: "A move that pushes just beyond an obvious level, triggering clustered stops, then reverses." },
    { t: "Round number", d: "A psychologically significant price like 1.1000 or 150.00, where orders cluster disproportionately." },
    { t: "Confluence", d: "Two or more independent reasons pointing at the same area." }
  ],

  slides: [
    {
      kicker: "Module 7 · Why levels work",
      title: "Levels are memory, not magic",
      bullets: [
        "A level matters because of the **orders resting there**, not because the price has a special property.",
        "Three sources of resting orders at an old high: traders who **sold there before** and will again; traders who **bought earlier** and want out at break-even; and **stops** from anyone short.",
        "That accumulation is why price reacts. **The level is a record of where decisions were made.**",
        "It also explains why levels **weaken with each test** — each test consumes some of the resting orders.",
        "**If you understand a level as inventory, everything else in this module follows.**"
      ],
      note: "Connect explicitly back to Module 1's 'why price moves' slide. Same mechanism, applied to a specific location. Students who got that slide will find this module easy; students who did not should be sent back to it."
    },
    {
      kicker: "Module 7 · Marking",
      title: "Mark zones, not lines",
      bullets: [
        "Price rarely turns at the same tick twice. **Use a rectangle, not a line.**",
        "A useful zone spans from the **wicks to the bodies** of the reaction candles.",
        "Zone width should scale with timeframe and volatility. A daily zone on gold might be several dollars wide; an M15 zone on EUR/USD a few pips.",
        "**Mark from the higher timeframe down.** Daily and H4 levels matter more than M15 levels, always.",
        "**Three to five levels per chart.** If you have fifteen, you have none."
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="A resistance zone drawn from wicks to bodies across multiple touches"><rect x="40" y="38" width="500" height="30" fill="var(--bear)" opacity=".16"/><line x1="40" y1="38" x2="540" y2="38" stroke="var(--bear)" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="40" y1="68" x2="540" y2="68" stroke="var(--bear)" stroke-width="1.5" stroke-dasharray="4 3"/><text class="lbl-sm" x="546" y="42">wicks</text><text class="lbl-sm" x="546" y="72">bodies</text>' +
        '<g stroke-width="5"><line class="up" x1="110" y1="42" x2="110" y2="110"/><line class="dn" x1="132" y1="52" x2="132" y2="128"/><line class="dn" x1="154" y1="80" x2="154" y2="150"/></g>' +
        '<g stroke-width="5"><line class="up" x1="270" y1="46" x2="270" y2="105"/><line class="dn" x1="292" y1="40" x2="292" y2="120"/><line class="dn" x1="314" y1="72" x2="314" y2="140"/></g>' +
        '<g stroke-width="5"><line class="up" x1="430" y1="58" x2="430" y2="112"/><line class="dn" x1="452" y1="50" x2="452" y2="132"/></g>' +
        '<text class="lbl" x="132" y="176" text-anchor="middle">touch 1</text><text class="lbl" x="292" y="176" text-anchor="middle">touch 2</text><text class="lbl" x="452" y="176" text-anchor="middle">touch 3 — weaker</text></svg>',
      note: "Have students draw a level as a line first and then as a zone on the same chart, and count how many times price 'missed' the line but hit the zone. The zone version is obviously more useful and they will not go back."
    },
    {
      kicker: "Module 7 · Quality",
      title: "What makes a level worth marking",
      bullets: [
        "**The reaction was strong.** Price left the area impulsively, not by drifting.",
        "**It is recent enough to be relevant.** A level from three years ago on an M15 chart is archaeology.",
        "**It is visible on a higher timeframe.** If it only exists on M15, only M15 traders can see it.",
        "**It has not been tested repeatedly.** The first or second test is the strongest; the fifth is usually broken.",
        "**Fewer touches is often better than more.** An untouched zone still has its inventory intact."
      ],
      note: "The 'fewer touches is better' point contradicts what many students have been taught — that more touches means a stronger level. Explain via inventory: each test consumes orders. A level touched five times has had most of its resting interest eaten."
    },
    {
      kicker: "Module 7 · Role reversal",
      title: "Broken levels flip",
      bullets: [
        "Resistance that breaks frequently becomes **support**, and vice versa.",
        "**Why:** traders who sold at the level are now trapped and will buy back at break-even. Traders who missed the breakout wait to buy the retest.",
        "The **retest of a broken level** is one of the highest-quality entries available, because the location is defined and invalidation is obvious.",
        "It works best when the break was **impulsive** and the retest is **prompt**.",
        "**A slow, grinding break that immediately comes back is usually a failed break, not a flip.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="Resistance breaking and becoming support on the retest"><rect x="40" y="88" width="500" height="24" fill="var(--accent)" opacity=".15"/><text class="lbl-sm" x="46" y="82">level</text>' +
        '<g stroke-width="5"><line class="dn" x1="90" y1="94" x2="90" y2="150"/><line class="up" x1="118" y1="100" x2="118" y2="155"/><line class="dn" x1="146" y1="92" x2="146" y2="148"/></g><text class="lbl-sm" x="118" y="176" text-anchor="middle">resistance</text>' +
        '<g stroke-width="5"><line class="up" x1="206" y1="40" x2="206" y2="100"/><line class="up" x1="234" y1="28" x2="234" y2="62"/></g><text class="lbl-sm" x="220" y="20" text-anchor="middle">impulsive break</text>' +
        '<g stroke-width="5"><line class="dn" x1="300" y1="48" x2="300" y2="96"/><line class="up" x1="328" y1="58" x2="328" y2="108"/></g><text class="lbl-sm" x="330" y="128" text-anchor="middle">retest</text>' +
        '<g stroke-width="5"><line class="up" x1="392" y1="42" x2="392" y2="96"/><line class="up" x1="420" y1="26" x2="420" y2="70"/><line class="up" x1="448" y1="16" x2="448" y2="52"/></g><text class="lbl" x="480" y="40">now support</text></svg>',
      note: "This is the single most practical pattern in the module because both entry and invalidation are unambiguous: enter at the retest, stop below the zone. Have them find ten historical examples in the lab — and importantly, also find three where it failed."
    },
    {
      kicker: "Module 7 · Zones",
      title: "Supply and demand — where moves originated",
      bullets: [
        "A **demand zone** is the base a sharp rally launched from. A **supply zone** is the base a sharp decline launched from.",
        "The logic: a move that violent implies **large orders that were not fully filled**. If price returns, the remainder may still be waiting.",
        "The **strength of the departure** is the quality signal. A lazy move away means a weak zone.",
        "**Fresh zones — never revisited — are strongest.** Each return consumes the remaining inventory.",
        "The 'order block' idea is the same observation with different vocabulary: **the last opposing candle before the impulse**."
      ],
      note: "Be honest that supply/demand and order-block frameworks are interpretations, not observable facts — nobody can see institutional orders on a retail chart. What is observable is that price often reacts at these areas, which is enough to trade. Overclaiming here is how students end up in cult-like methodology communities."
    },
    {
      kicker: "Module 7 · Liquidity",
      title: "Where the stops are",
      bullets: [
        "**Above an obvious high** sit the stops of everyone short, plus breakout buy orders.",
        "**Below an obvious low** sit the stops of everyone long, plus breakout sell orders.",
        "That concentration is exactly what a large participant needs to fill a big order — **they need someone to trade against**.",
        "Hence the common sequence: **push beyond the obvious level, fill on the resulting flow, then reverse**.",
        "**This is not a conspiracy against you. It is the arithmetic of needing a counterparty.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 210" role="img" aria-label="Stop liquidity clustering above equal highs and a sweep followed by reversal"><line x1="40" y1="60" x2="440" y2="60" class="dash" stroke="var(--bear)"/><rect x="40" y="40" width="400" height="20" fill="var(--bear)" opacity=".13"/><text class="lbl-sm" x="46" y="34">stops cluster here</text>' +
        '<g stroke-width="5"><line class="up" x1="90" y1="62" x2="90" y2="120"/><line class="dn" x1="118" y1="66" x2="118" y2="130"/><line class="up" x1="180" y1="61" x2="180" y2="118"/><line class="dn" x1="208" y1="70" x2="208" y2="135"/><line class="up" x1="270" y1="63" x2="270" y2="125"/></g>' +
        '<text class="lbl-sm" x="180" y="152" text-anchor="middle">equal highs — obvious to everyone</text>' +
        '<g stroke-width="5"><line class="up" x1="330" y1="30" x2="330" y2="80"/></g><text class="lbl-sm" x="330" y="22" text-anchor="middle">sweep</text>' +
        '<g stroke-width="5"><line class="dn" x1="366" y1="42" x2="366" y2="118"/><line class="dn" x1="394" y1="80" x2="394" y2="150"/><line class="dn" x1="422" y1="110" x2="422" y2="178"/></g>' +
        '<text class="lbl" x="452" y="130">reversal</text></svg>',
      note: "Ask: 'If you needed to buy 500 million euros, where would you look for sellers?' The answer — where stops from long positions will fire — makes the whole concept click without any conspiratorial framing."
    },
    {
      kicker: "Module 7 · Liquidity",
      title: "Trading with the sweep instead of into it",
      bullets: [
        "**Naive:** buy the breakout above equal highs. You are supplying liquidity to someone who wants to sell.",
        "**Better:** wait to see whether the break **holds** or **reverses immediately**.",
        "A sweep that reverses hard back into the range is a strong signal — the breakout **failed**, and trapped traders must exit.",
        "**Failed breaks often move further and faster than successful ones**, because trapped positions have to unwind.",
        "**Practical rule: do not place stops at the obvious round number just beyond a high. Place them beyond the liquidity, not inside it.**"
      ],
      note: "That last bullet is the concrete, immediately-actionable takeaway. It costs a few pips of extra stop distance and avoids a large proportion of the 'stopped out then it went my way' experiences that demoralise beginners."
    },
    {
      kicker: "Module 7 · Confluence",
      title: "Confluence — real and fake",
      bullets: [
        "**Real confluence:** independent reasons agreeing. An H4 demand zone, a broken resistance flipping to support, and a round number, all in the same place.",
        "**Fake confluence:** five indicators derived from the same price data all saying the same thing. That is one reason counted five times.",
        "The best locations usually have **two or three independent reasons**, not ten.",
        "**Confluence improves location, not certainty.** It tells you where to look, not whether the trade will win.",
        "**A great level with no trade trigger is still not a trade.** Location and timing are separate decisions."
      ],
      note: "The fake-confluence point matters enormously for Module 8. Students who stack RSI, Stochastic and MACD think they have three confirmations; they have one, three times, since all three are momentum measures on the same series."
    },
    {
      kicker: "Module 7 · Wrap",
      title: "A chart with useful levels on it",
      bullets: [
        "Levels understood as resting inventory, not as chart magic",
        "Zones rather than lines, marked from the higher timeframe down",
        "Role reversal and the retest entry, with clear invalidation",
        "Supply and demand as origins of impulsive moves, honestly framed",
        "Where stops cluster, and how to place your own outside that cluster",
        "Confluence that is genuinely independent"
      ],
      note: "The student should now be able to open any chart and mark three to five levels that another trader would recognise as reasonable. That is the deliverable. Trading them comes in Module 11."
    }
  ],

  practical: {
    title: "Lab 7 — Level marking and liquidity mapping",
    time: "70 min",
    intro: "The student produces a marked-up level map they will use for the rest of the course. Quality is measured by restraint as much as accuracy — the discipline of marking few levels is harder than marking many.",
    setup: [
      "MT4/MT5 and TradingView with rectangle and horizontal-line tools",
      "The **Structure Log** from Lab 6",
      "A screenshot folder named **Level Map**",
      "Two instruments chosen in Module 2 homework, on D1, H4 and H1"
    ],
    steps: [
      { h: "Top-down level marking", d: "For each instrument, mark levels on D1 first — no more than four. Then move to H4 and add only levels not already visible, again no more than four. Then H1, same restraint. Colour-code by timeframe so their origin is obvious at a glance." },
      { h: "Justify every level in writing", d: "For each level, write one sentence: why it is there and what makes it significant. Any level the student cannot justify in a sentence gets deleted. This step typically removes a third of them, which is the point." },
      { h: "Convert lines to zones", d: "Redraw each level as a rectangle spanning wicks to bodies. Then step back and check: does price actually respect these zones historically, or did they get drawn where the student wished a level was? Delete any that do not hold up." },
      { h: "Find ten role reversals", d: "Search history for ten clear cases where a broken level flipped role. For each, record whether the break was impulsive or grinding, how promptly the retest came, and whether the flip held. Then find three cases where it failed and note what was different about them." },
      { h: "Map the liquidity", d: "On current charts, mark every location where stops are likely to be clustered: equal highs, equal lows, obvious swing extremes, and round numbers. Use a distinct colour. The student should see that these are usually just beyond the levels they already marked." },
      { h: "Find five sweeps", d: "Locate five historical examples of price pushing just beyond an obvious high or low and then reversing. Measure how far past the level it went. That distance is the practical answer to 'how far beyond the level should my stop sit'." },
      { h: "Confluence audit", d: "Identify the three best locations across both instruments — places where two or more *independent* reasons agree. For each, list the reasons explicitly and check that they are genuinely independent rather than restatements of the same observation." },
      { h: "Blind test", d: "Instructor opens an unfamiliar instrument. The student has five minutes to mark levels and narrate using the Module 6 script. Then compare against how price subsequently behaved by scrolling forward. This is the assessment step." }
    ],
    deliverable: "A **Level Map** for two instruments containing: colour-coded zones marked top-down with a written justification for each, ten annotated role-reversal examples plus three failures, a liquidity overlay showing likely stop clusters, five measured sweep distances, a confluence audit of the three best locations, and one blind-test chart with narration.",
    rubric: [
      { c: "Restraint", d: "No more than five levels per chart per timeframe. Every level has a written justification that survives scrutiny." },
      { c: "Zone construction", d: "Zones are rectangles of sensible width for the timeframe and instrument, drawn from actual reaction candles rather than wishful placement." },
      { c: "Top-down order", d: "Higher-timeframe levels marked first and colour-coded, so their relative importance is visible without being explained." },
      { c: "Role-reversal insight", d: "Can articulate what distinguished the successful flips from the failures — typically impulsiveness of break and promptness of retest." },
      { c: "Liquidity awareness", d: "Correctly identifies where stops cluster and can state, with a measured number, where their own stop should sit instead." },
      { c: "Genuine confluence", d: "The listed reasons are independent. Student catches and rejects any case of counting one observation twice." }
    ],
    pitfalls: [
      "Marking twenty levels because everything looks significant. Enforce the limit hard — restraint is a skill being taught here.",
      "Drawing zones where they wish a level existed rather than where price reacted. The historical check catches this; make sure it is actually done.",
      "Treating supply/demand or order-block terminology as revealed fact. Keep the framing honest: price often reacts there, and that is the claim.",
      "Placing stops exactly at the round number just beyond a high, which is inside the liquidity pool. The measured sweep distances exist precisely to fix this.",
      "Counting three momentum indicators as three confluences. Call this out every time it appears — it recurs throughout Module 8."
    ]
  },

  homework: [
    "Maintain the level map daily for a week — add new levels, remove ones price has invalidated, and note which held.",
    "Screenshot every occasion in the week where price reacted at one of your marked zones, and one where it ignored a zone entirely.",
    "Measure the sweep distance on five live examples and compare with your historical five. Write down your working rule for stop placement beyond a level."
  ],

  quiz: [
    {
      q: "Why does price tend to react at a previous swing high?",
      options: [
        "The price level has intrinsic mathematical significance",
        "Resting orders accumulate there — sellers who acted before, buyers wanting break-even exits, and stops from short positions",
        "Brokers program their servers to react there",
        "It is a self-fulfilling prophecy with no other cause"
      ],
      a: 1,
      why: "Levels work because of order inventory, not because of any property of the number. That framing also explains why levels weaken with repeated testing — each test consumes some of the resting orders — and why a fresh, untested zone is often stronger than a heavily tested one."
    },
    {
      q: "A level has been tested five times and held each time. What does this suggest?",
      options: [
        "It is extremely strong and will certainly hold again",
        "Each test has consumed resting orders, so the level is likely weaker now than it was — and increasingly likely to break",
        "The level should be redrawn",
        "Nothing can be inferred"
      ],
      a: 1,
      why: "This contradicts the common belief that more touches means a stronger level. If a level works because orders rest there, each test depletes that inventory. Repeated tests without a strong move away also indicate that the opposing side is absorbing supply — often a precursor to a break rather than a reversal."
    },
    {
      q: "Resistance at 1.0900 breaks impulsively and price returns to it two hours later. What is the most likely interpretation?",
      options: [
        "The break has failed and price will continue falling",
        "A role reversal — the old resistance is being retested as support, one of the cleaner entries available",
        "The level was never valid",
        "Price is ranging"
      ],
      a: 1,
      why: "An impulsive break followed by a prompt retest is the classic flip. Trapped sellers buy back at break-even and traders who missed the break buy the retest. The two qualifiers matter: a grinding break with a slow return is more often a failed break than a genuine flip."
    },
    {
      q: "Where should you avoid placing a stop loss?",
      options: [
        "Below a demand zone",
        "Exactly at the round number just beyond an obvious high, where stop orders visibly cluster",
        "Anywhere on a higher timeframe level",
        "More than 20 pips from entry"
      ],
      a: 1,
      why: "Stops cluster just beyond obvious highs, lows and round numbers, and that concentration is exactly what attracts a sweep. Placing yours inside the cluster maximises the chance of being taken out by a move that then reverses in your favour. Measure typical sweep distance on your instrument and sit beyond it."
    },
    {
      q: "You have RSI oversold, Stochastic oversold and MACD turning up. How many independent confluences is that?",
      options: ["Three", "Four, counting price", "Essentially one — all three are momentum measures derived from the same price series", "Zero"],
      a: 2,
      why: "Independence is the whole point of confluence. Three momentum oscillators computed from the same closes will agree almost by construction, so they are one observation counted three times. Genuine confluence combines different *kinds* of evidence — a higher-timeframe zone, a structural flip, a round number."
    },
    {
      q: "What does a failed breakout — a sweep beyond a high that immediately reverses — often produce?",
      options: [
        "A slow drift sideways",
        "A move that is faster and further than a successful breakout, because trapped breakout traders must exit",
        "An exact return to the level and nothing more",
        "Reduced volatility"
      ],
      a: 1,
      why: "A failed break leaves a group of traders positioned in the wrong direction with stops now in the market's path. Their forced exits add fuel to the reversal, on top of the traders deliberately positioning against the break. This is why waiting to see whether a break holds is usually better than buying it immediately."
    }
  ]
}

]);
