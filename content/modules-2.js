/* Modules 5–8 — Reading the chart */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 5 ============================= */
{
  id: 5,
  title: "Sessions, Timing and Volatility",
  tagline: "The same strategy wins in one hour and loses in another. When you trade is a strategy decision, not a convenience.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Map the four sessions onto their own local clock and their broker's server clock",
    "Predict the typical behaviour of a pair in each session and explain why",
    "Identify the overlap window and justify why most day-trading setups live there",
    "Explain how volatility, spread and range interact across the day",
    "Choose a trading window that fits their own life and defend the choice"
  ],

  misconceptions: [
    "**\"24-hour market means I can trade any time.\"** You *can*. But liquidity, spread and range differ by a factor of several between the best and worst hours. The market is open; the opportunity is not.",
    "**\"More volatility is better.\"** Volatility without direction just means you get stopped out more often. What you want is *range with follow-through*, which is a specific and narrower thing.",
    "**\"The Asian session is dead.\"** It is orderly and range-bound, which is ideal for range strategies and terrible for breakout strategies. Different, not dead.",
    "**\"I'll just trade whenever I'm free.\"** Trading a breakout strategy during the Tokyo lull produces a long, expensive record of false breaks. Match the strategy to the hour or change the strategy."
  ],

  glossary: [
    { t: "Trading session", d: "The hours when a major financial centre is active. Sydney, Tokyo, London and New York." },
    { t: "Overlap", d: "Hours when two sessions are open simultaneously. London/New York is the highest-liquidity window of the day." },
    { t: "Average daily range (ADR)", d: "The typical high-to-low distance an instrument covers in a day. A reality check on targets and stops." },
    { t: "Server time", d: "The broker's clock, which determines where the daily candle opens and closes. Rarely your local time." },
    { t: "Rollover", d: "The daily point when swap is applied, usually around 21:00–22:00 UTC. Spreads often widen briefly." },
    { t: "Liquidity gap", d: "A period of thin resting orders where price can move a long way on modest volume." },
    { t: "Session high / low", d: "The extremes established during one session, often tested or broken by the next." },
    { t: "Killzone", d: "A common name for a high-activity window near a session open, when directional moves often begin." }
  ],

  slides: [
    {
      kicker: "Module 5 · The clock",
      title: "Four sessions, one continuous market",
      bullets: [
        "The market opens Sunday evening in Sydney and runs to Friday evening in New York, with no close in between.",
        "**Sydney** ≈ 21:00–06:00 UTC. Thin. AUD and NZD get their local news here.",
        "**Tokyo** ≈ 00:00–09:00 UTC. Orderly, range-prone. JPY pairs are most active.",
        "**London** ≈ 07:00–16:00 UTC. The largest single centre by volume. EUR and GBP move.",
        "**New York** ≈ 12:00–21:00 UTC. News-heavy. USD pairs and gold.",
        "**These drift with daylight saving. Verify against your broker's clock, not a printed table.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 600 200" role="img" aria-label="Trading sessions across a 24 hour UTC timeline"><line x1="50" y1="176" x2="580" y2="176" class="axis"/><g class="lbl-sm">' +
        '<text x="50" y="192">00</text><text x="138" y="192">04</text><text x="226" y="192">08</text><text x="314" y="192">12</text><text x="402" y="192">16</text><text x="490" y="192">20</text><text x="573" y="192">24 UTC</text></g>' +
        '<rect x="50" y="24" width="132" height="22" rx="4" fill="var(--ink-3)" opacity=".45"/><rect x="512" y="24" width="66" height="22" rx="4" fill="var(--ink-3)" opacity=".45"/><text class="lbl" x="192" y="40">Sydney</text>' +
        '<rect x="50" y="56" width="198" height="22" rx="4" fill="var(--accent)" opacity=".4"/><text class="lbl" x="258" y="72">Tokyo</text>' +
        '<rect x="204" y="88" width="198" height="22" rx="4" fill="var(--bull)" opacity=".55"/><text class="lbl" x="412" y="104">London</text>' +
        '<rect x="314" y="120" width="198" height="22" rx="4" fill="var(--bear)" opacity=".5"/><text class="lbl" x="522" y="136">New York</text>' +
        '<rect x="314" y="88" width="88" height="54" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/><text class="lbl" x="358" y="163" text-anchor="middle" font-weight="700">OVERLAP</text></svg>',
      note: "Have the student mark their own local equivalents on this chart during the lab. An abstract UTC table is forgotten by next week; 'London opens at 9am my time' is remembered permanently."
    },
    {
      kicker: "Module 5 · Character",
      title: "Each session has a personality",
      bullets: [
        "**Tokyo** — narrow ranges, respected levels, low follow-through. Good for range strategies. Punishing for breakouts.",
        "**London open** — the day's first real directional move, often a sharp expansion out of the Asian range.",
        "**Overlap (≈12:00–16:00 UTC)** — deepest liquidity, tightest spreads, largest ranges. Most day-trading setups belong here.",
        "**Late New York** — the overlap's move exhausts, spreads widen into rollover, trends stall.",
        "**Friday afternoon** — position squaring ahead of the weekend. Moves are often unrelated to any analysis."
      ],
      note: "Ask the student to describe the character of a session before you say it, after they have watched a week of charts. Discovery is far more durable than being told, and they will be right more often than they expect."
    },
    {
      kicker: "Module 5 · Structure",
      title: "The Asian range and the London break",
      bullets: [
        "Tokyo typically builds a **compressed range** — low volatility, defined high and low.",
        "London arrives with real volume and frequently **expands out of that range**.",
        "This produces one of the most-traded patterns in forex: mark the Asian high and low, then trade the break.",
        "**The catch:** the first break is often false. Price sweeps the range extreme, takes the stops sitting there, then reverses.",
        "**Because everyone can see the same range, the stops sit in predictable places — and predictable stops attract price.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 210" role="img" aria-label="Asian range compression followed by a false break and a real London expansion"><line x1="40" y1="185" x2="560" y2="185" class="axis"/><line x1="40" y1="70" x2="300" y2="70" class="dash"/><text class="lbl-sm" x="44" y="64">Asian high</text><line x1="40" y1="130" x2="300" y2="130" class="dash"/><text class="lbl-sm" x="44" y="144">Asian low</text><rect x="60" y="70" width="230" height="60" fill="var(--accent)" opacity=".09"/><text class="lbl-sm" x="175" y="104" text-anchor="middle">compression</text>' +
        '<g stroke-width="5"><line class="dn" x1="80" y1="88" x2="80" y2="118"/><line class="up" x1="102" y1="96" x2="102" y2="124"/><line class="dn" x1="124" y1="82" x2="124" y2="112"/><line class="up" x1="146" y1="94" x2="146" y2="126"/><line class="dn" x1="168" y1="86" x2="168" y2="116"/><line class="up" x1="190" y1="92" x2="190" y2="122"/><line class="dn" x1="212" y1="84" x2="212" y2="114"/><line class="up" x1="234" y1="90" x2="234" y2="120"/><line class="dn" x1="256" y1="86" x2="256" y2="118"/></g>' +
        '<g stroke-width="5"><line class="up" x1="286" y1="52" x2="286" y2="96"/><line class="dn" x1="308" y1="58" x2="308" y2="128"/></g><text class="lbl-sm" x="300" y="44" text-anchor="middle">false break ↑</text>' +
        '<g stroke-width="5"><line class="dn" x1="330" y1="112" x2="330" y2="150"/><line class="dn" x1="352" y1="128" x2="352" y2="164"/><line class="dn" x1="374" y1="140" x2="374" y2="172"/><line class="dn" x1="396" y1="150" x2="396" y2="178"/></g>' +
        '<text class="lbl" x="440" y="150">real move: down</text><line x1="300" y1="60" x2="300" y2="185" class="dash" stroke="var(--accent)"/><text class="lbl-sm" x="304" y="200">London open</text></svg>',
      note: "This single diagram explains why so many beginners feel personally targeted by the market. They are not being targeted — they are placing stops where everyone else places them, and price seeks liquidity. Reframing 'stop hunt' as 'liquidity is where stops cluster' removes the paranoia and leaves a usable insight."
    },
    {
      kicker: "Module 5 · Volatility",
      title: "Volatility, range and spread move together",
      bullets: [
        "**Spread is inversely related to liquidity.** Thin hours mean wide spreads.",
        "**Range is proportional to participation.** Few participants means small ranges.",
        "So the worst hours are doubly bad: **you pay more to access less opportunity**.",
        "A 20-pip target costs 3 pips of spread at 03:00 UTC and 1 pip at 14:00. That is the difference between an edge and no edge.",
        "**Compare spread as a percentage of expected range, not in isolation.**"
      ],
      note: "This ties directly back to the Module 2 lab table. Same principle applied to time instead of instrument: cost only means something relative to opportunity."
    },
    {
      kicker: "Module 5 · Practical",
      title: "Average daily range as a reality check",
      bullets: [
        "**ADR** is the typical high-to-low distance for an instrument over a day.",
        "If EUR/USD averages 70 pips, a 150-pip target on an intraday trade is a fantasy on most days.",
        "If price has already run 65 of its 70-pip average by lunchtime, **the easy part of the move is over**.",
        "Use ADR to sanity-check targets, to judge whether a stop is realistic, and to decide when to stop trading for the day.",
        "**ADR is not a boundary.** It is an average — trend days exceed it routinely, which is precisely why they are worth catching."
      ],
      note: "Have the student compute ADR manually for five days before ever using an indicator for it. The manual version teaches what the number means; the indicator version teaches nothing."
    },
    {
      kicker: "Module 5 · Practical",
      title: "Choose a window and defend it",
      bullets: [
        "Most students cannot trade the overlap — it collides with work. **That is a real constraint, not a failure.**",
        "If you can only trade during Tokyo, **trade ranges** and stop trying to catch trends that are not there.",
        "If you can only look at charts in the evening, **trade the daily chart** and place pending orders. Do not force intraday trading into an hour that has none.",
        "Consistency of window matters more than which window. **You cannot learn a market you observe randomly.**",
        "Write your trading window into your plan and treat trades outside it as rule breaks."
      ],
      note: "This is the slide that makes the course usable for someone with a job. Be explicit: the wrong response to a bad window is to change strategy, not to trade badly during a window that does not suit the strategy."
    },
    {
      kicker: "Module 5 · Traps",
      title: "Times to be careful or absent",
      bullets: [
        "**Rollover (≈21:00–22:00 UTC)** — spreads can spike enormously for a minute. Stops sitting there get taken on spread alone.",
        "**Sunday open** — thin, gappy, unrepresentative. Nothing good starts here.",
        "**The minute around a high-impact release** — spread widens, slippage is severe, direction is random.",
        "**Friday close** — position squaring, then a weekend of gap risk.",
        "**Holidays** — a market that looks quiet can move violently on almost no volume."
      ],
      note: "The rollover spread spike is worth demonstrating live if the session timing allows. Students who have watched a 1-pip spread become 30 pips for forty seconds never leave a tight stop through rollover again."
    },
    {
      kicker: "Module 5 · Wrap",
      title: "Timing as part of the strategy",
      bullets: [
        "The four sessions, their local equivalents, and their character",
        "Why the overlap holds the best conditions, and what it costs to trade outside it",
        "The Asian-range/London-break structure, and why the first break so often fails",
        "ADR as a reality check on targets, stops, and when to stop",
        "A chosen, written trading window that matches your life and your strategy"
      ],
      note: "From here on, every setup the student brings should be annotated with the session it occurred in. Making that automatic now means the pattern recognition builds itself over the remaining modules."
    }
  ],

  practical: {
    title: "Lab 5 — Build your personal session map",
    time: "60 min",
    intro: "The student produces a timing document specific to their own timezone, broker and life. Generic session tables are forgotten; a map that says 'London opens while I'm on the bus' is used every day.",
    setup: [
      "MT4/MT5 with the **Course** template from Lab 4",
      "The **server-time offset** recorded in Lab 4",
      "A blank spreadsheet named **Session Map**",
      "Two weeks of M15 and H1 history loaded on EUR/USD and one JPY pair"
    ],
    steps: [
      { h: "Establish three clocks", d: "Build a table with three columns: UTC, broker server time, and the student's local time. Fill in the open and close of all four sessions in all three columns. Every later step uses this table, so check the arithmetic twice." },
      { h: "Measure the Asian range for ten days", d: "On EUR/USD M15, for each of the last ten trading days, record the high and low between 00:00 and 07:00 UTC, and the range in pips. Compute the average. This is the number a London-break strategy has to work with." },
      { h: "Score the London break", d: "For the same ten days, record: did price break the Asian high or low first, did that first break continue or reverse, and how far did the eventual move run. Tally how often the first break failed. The student's own number is far more convincing than any statistic you could quote." },
      { h: "Measure hourly range", d: "Pick one instrument. For five days, record the high-to-low range of each H1 candle from 00:00 to 21:00 UTC. Average each hour across the five days and chart it. The shape — quiet Asia, London expansion, overlap peak, late decay — emerges from their own data." },
      { h: "Measure hourly spread", d: "Over one day, record the EUR/USD spread at the top of every hour. Chart it against the hourly range from the previous step. Then compute spread as a percentage of range for each hour and identify the worst three hours of the day to trade." },
      { h: "Compute ADR by hand", d: "Record the daily high-to-low range for EUR/USD and for gold over ten days and average each. Then check today's move against the average and state whether the day's typical range is spent. Do this manually — no indicator." },
      { h: "Watch rollover live", d: "If the session timing allows, have the student watch the spread through the rollover window and record the peak. If not, set it as homework with a screenshot required. This must be observed, not described." },
      { h: "Write the timing rules", d: "The student writes three to five specific rules for their own plan. Examples in the right form: 'I trade only between 13:00 and 16:00 local.' 'I do not open positions within 30 minutes of rollover.' 'On days when ADR is already spent by 14:00 I stop looking for entries.' Vague rules do not count." }
    ],
    deliverable: "A **Session Map** spreadsheet containing: a three-clock conversion table, ten days of Asian-range measurements with the average, a first-break success tally, an hourly range chart, an hourly spread chart with spread-as-percentage-of-range, a hand-computed ten-day ADR for two instruments, and three to five written timing rules.",
    rubric: [
      { c: "Clock accuracy", d: "All three columns correct, including the daylight-saving caveat. Student can convert any session boundary to local time without recalculating." },
      { c: "Measurement discipline", d: "Ten days of Asian ranges recorded consistently from the same window, with pips computed correctly on both instruments." },
      { c: "Evidence over belief", d: "The first-break tally is based on the student's own reading of the chart, and they can state their observed failure rate." },
      { c: "Range/spread reasoning", d: "Identifies the worst hours using spread as a percentage of range, not raw spread, and explains why that is the right comparison." },
      { c: "ADR usage", d: "Computed by hand, and the student can use it to judge whether a target is realistic on a given day." },
      { c: "Rule specificity", d: "Timing rules are testable — specific hours and specific conditions. 'I'll trade when the market is active' is rejected." }
    ],
    pitfalls: [
      "Recording the Asian range in local time on some days and server time on others. Fix the window in UTC and convert once.",
      "Concluding from ten days that the first break 'always' fails. Ten days is an observation, not a statistic — say so explicitly and note it for the Module 12 backtesting work.",
      "Using an ADR indicator instead of counting. The manual version is the lesson.",
      "Writing timing rules that describe a preference rather than a constraint. If it cannot be violated, it is not a rule.",
      "Ignoring daylight saving and being an hour out for half the year. Note the two annual shift dates in the spreadsheet."
    ]
  },

  homework: [
    "Watch the rollover window on one evening and screenshot the peak spread.",
    "Continue the Asian-range log for another ten days so you have twenty observations by Module 11.",
    "Observe the London open live on three separate days and write one sentence per day describing what happened in the first thirty minutes."
  ],

  quiz: [
    {
      q: "Which window generally offers the deepest liquidity and largest ranges?",
      options: ["Tokyo session", "The London/New York overlap", "Sydney session", "The hour after the Friday close"],
      a: 1,
      why: "The overlap, roughly 12:00–16:00 UTC, has both major centres active simultaneously. That produces the tightest spreads and the largest ranges of the day, which is why most day-trading setups are designed around it. Note the trade-off: it is also when most participants are watching the same levels."
    },
    {
      q: "Why does the first break of the Asian range so often fail?",
      options: [
        "Brokers deliberately move price to hunt individual stops",
        "The range highs and lows are visible to everyone, so stops cluster just beyond them — and price is drawn to that resting liquidity",
        "The London session always reverses the Asian direction",
        "Indicators give false signals at that hour"
      ],
      a: 1,
      why: "Every participant can see the same range extremes and places stops in the same predictable zone. A push through that zone fills a large volume of resting orders, which is exactly what a large participant needs to enter. Reframing it as 'liquidity sits where stops cluster' turns a paranoid story into a usable observation."
    },
    {
      q: "EUR/USD has a 70-pip average daily range and has already moved 65 pips by midday. What does this suggest?",
      options: [
        "A big trend day is guaranteed",
        "The typical daily range is largely spent, so intraday continuation targets should be treated sceptically",
        "Price must now reverse",
        "ADR is irrelevant intraday"
      ],
      a: 1,
      why: "ADR is an average, not a boundary — trend days exceed it regularly. But when most of the typical range is already spent, the probability-weighted case for a fresh large continuation move weakens. It is a reason for smaller targets and more scepticism, not a reason to fade the move."
    },
    {
      q: "You can only trade during the Tokyo session. What is the sensible response?",
      options: [
        "Trade breakout strategies anyway and accept worse results",
        "Adopt strategies suited to orderly, range-bound conditions and JPY pairs",
        "Give up on trading",
        "Increase position size to compensate for smaller ranges"
      ],
      a: 1,
      why: "Tokyo is not a worse session, it is a different one — narrow ranges and well-respected levels favour range and mean-reversion approaches. Forcing a breakout strategy into it produces a long record of false breaks. Increasing size to compensate for smaller ranges is the single worst available response."
    },
    {
      q: "Why should you avoid leaving a tight stop through the daily rollover window?",
      options: [
        "Trading is suspended at rollover",
        "Spreads can widen dramatically for a minute or two, taking out stops on spread alone with no real price movement",
        "Swap is only charged if a stop is present",
        "Orders are queued and executed late"
      ],
      a: 1,
      why: "At rollover, around 21:00–22:00 UTC, liquidity thins as books are squared and spreads can spike many times their normal width. A stop sitting inside that widened spread can be triggered without the underlying market moving at all. Either widen the stop, close before rollover, or avoid holding through it with tight stops."
    },
    {
      q: "Spread is 1 pip at 14:00 UTC and 3 pips at 03:00 UTC. Why does this matter more than it looks?",
      options: [
        "It doesn't — 2 pips is negligible",
        "Because range also collapses overnight, so you pay three times as much to access a fraction of the opportunity",
        "Because commission triples at night",
        "Because stops are not accepted overnight"
      ],
      a: 1,
      why: "The two effects compound. Cost triples while the available range shrinks, so spread as a percentage of opportunity may rise by five or ten times. Comparing spread in isolation understates the problem — always express cost relative to the range you are actually trying to capture."
    }
  ]
},

/* ============================= MODULE 6 ============================= */
{
  id: 6,
  title: "Reading Price — Candlesticks and Structure",
  tagline: "Learning to describe what a chart is doing, out loud, before ever deciding what to do about it.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Read a candlestick and state what happened inside that period",
    "Classify a market as uptrend, downtrend or range using swing highs and lows",
    "Identify where a trend structurally breaks, rather than guessing at a reversal",
    "Use multiple timeframes coherently without contradicting yourself",
    "Describe any chart aloud in a consistent, repeatable format"
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
},

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
},

/* ============================= MODULE 8 ============================= */
{
  id: 8,
  title: "Indicators — What They Do and What They Cannot Do",
  tagline: "Every indicator is arithmetic on past prices. Knowing exactly which arithmetic tells you exactly what it can and cannot say.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "State what each major indicator actually computes, in one sentence",
    "Classify indicators by family and avoid stacking redundant ones",
    "Use moving averages, RSI, MACD, Bollinger Bands and ATR appropriately",
    "Use ATR to size stops to volatility rather than to a fixed pip count",
    "Explain lag, repainting and curve-fitting, and evaluate any new indicator sceptically"
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
