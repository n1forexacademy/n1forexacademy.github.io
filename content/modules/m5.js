/* N1 Forex Academy — Module 5. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 5 ============================= */
{
  id: 5,
  title: "Sessions, Timing and Volatility",
  tagline: "The same strategy wins in one hour and loses in another. When you trade is a strategy decision, not a convenience.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Work out when each of the four sessions runs in your own time, and in your broker's",
    "Say what a pair usually does in each session, and why it behaves that way",
    "Explain why the London–New York overlap holds the best conditions of the day",
    "Understand why the quiet hours cost you more and offer you less, at the same time",
    "Choose a trading window that fits your actual life, and say why it suits your strategy"
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
    { t: "Liquidity gap", d: "A stretch where hardly anyone is trading, so a modest order can push price a surprisingly long way." },
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
}

]);
