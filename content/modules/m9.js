/* N1 Forex Academy — Module 9. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 9 ============================= */
{
  id: 9,
  title: "Fundamentals, News and Why Currencies Move",
  tagline: "The forces that actually drive a currency over weeks and months — and how to survive the ten seconds around a release.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain how interest rates and rate expectations drive currency value",
    "Identify the high-impact releases and know roughly when each occurs",
    "Read an economic calendar and interpret actual, forecast and previous",
    "Explain why price often moves opposite to a 'good' number",
    "Apply a written news policy rather than improvising during a release"
  ],

  misconceptions: [
    "**\"Good news means the currency rises.\"** Markets price *expectations*. A strong number that is weaker than forecast usually sells off. What matters is the surprise, not the level.",
    "**\"I'll trade the news for quick profits.\"** In the seconds around a release, spreads widen enormously, slippage is severe, and direction frequently reverses twice. Retail execution is at its worst precisely when volatility is at its highest.",
    "**\"Fundamentals don't matter for day trading.\"** You may not trade them, but they set the day's tone and they will run over your technical setup without noticing it. Knowing when they land is not optional.",
    "**\"Technical and fundamental analysis are opposing camps.\"** Fundamentals explain the direction of the tide. Technicals tell you where to get in. Most professionals use both without any sense of conflict."
  ],

  glossary: [
    { t: "Interest rate", d: "The policy rate set by a central bank. The dominant long-term driver of a currency's value." },
    { t: "Central bank", d: "The institution setting monetary policy — the Fed, ECB, Bank of England, Bank of Japan and others." },
    { t: "Hawkish", d: "Leaning toward higher rates or tighter policy. Generally supportive of the currency." },
    { t: "Dovish", d: "Leaning toward lower rates or easier policy. Generally negative for the currency." },
    { t: "CPI", d: "Consumer Price Index — the primary inflation measure, and the main input to rate decisions." },
    { t: "NFP", d: "US Non-Farm Payrolls — monthly employment change, released on the first Friday of most months. Historically the highest-impact scheduled release." },
    { t: "GDP", d: "Gross Domestic Product — total economic output. Slower-moving and usually well anticipated." },
    { t: "Consensus / forecast", d: "The market's expected value for a release. Price is already positioned for this number." },
    { t: "Surprise", d: "The gap between actual and forecast. This is what moves price, not the absolute value." },
    { t: "Risk-on / risk-off", d: "Broad sentiment regimes. Risk-off favours USD, JPY and CHF; risk-on favours AUD, NZD and emerging currencies." },
    { t: "Carry trade", d: "Borrowing in a low-rate currency to hold a high-rate one, collecting the rate differential." },
    { t: "Economic calendar", d: "A schedule of upcoming releases with impact ratings, forecasts and prior values." }
  ],

  slides: [
    {
      kicker: "Module 9 · Drivers",
      title: "Interest rates are the engine",
      bullets: [
        "Capital flows toward higher returns. **Higher rates attract capital, and buying the currency is how capital gets there.**",
        "It is not the current rate that matters most — it is **where rates are expected to go**.",
        "A central bank *hinting* at future hikes moves a currency more than an actual hike everyone expected.",
        "This is why the **statement and press conference** usually matter more than the decision itself.",
        "**Rate differentials between two countries explain most multi-month currency trends.**"
      ],
      note: "Give a concrete example the student can verify: pick a period where one central bank was tightening while another was cutting, and show the pair's trend over those months. It makes the abstraction real in about ninety seconds."
    },
    {
      kicker: "Module 9 · Drivers",
      title: "What else moves a currency",
      bullets: [
        "**Inflation** — high inflation pressures a central bank to raise rates. CPI is watched as a *rate* signal.",
        "**Employment** — strong jobs data supports tightening. This is why NFP matters so much.",
        "**Growth** — GDP and PMI surveys. Slower-moving and usually well anticipated.",
        "**Risk sentiment** — in a crisis, capital moves to USD, JPY and CHF regardless of rates.",
        "**Commodities** — CAD tracks oil, AUD tracks industrial metals and Chinese demand.",
        "**Politics and geopolitics** — elections, conflict, trade disputes. Unpredictable and occasionally dominant."
      ],
      note: "Ask the student which of these would matter most for the two instruments they chose in Module 2. If they picked gold, this is where you explain that it trades on real yields and risk sentiment, not on a country's rate — a distinction that catches a lot of people out."
    },
    {
      kicker: "Module 9 · The calendar",
      title: "Reading an economic calendar properly",
      bullets: [
        "Every release shows **previous, forecast and actual**. Only two of these matter before the event.",
        "**Price is already positioned for the forecast.** That is what the forecast means.",
        "**The move comes from the surprise** — how far actual differs from forecast, and in which direction.",
        "**Impact ratings** (high/medium/low) tell you how much volatility to expect, not which way.",
        "**Check the calendar before every session. Not after.**"
      ],
      note: "Open a live calendar and walk through today's entries together. Most students have looked at one but never used it to make a decision. The habit you are building is: check it first, then look at charts."
    },
    {
      kicker: "Module 9 · The calendar",
      title: "The releases worth knowing",
      bullets: [
        "**Central bank rate decisions** — Fed, ECB, BoE, BoJ. Scheduled, roughly every six weeks. The statement matters more than the number.",
        "**CPI / inflation** — monthly. Currently the most closely watched data in most economies.",
        "**NFP** — first Friday of the month, US employment. Reliably violent.",
        "**PMI surveys** — monthly, forward-looking, decent early warning of turns in growth.",
        "**Unscheduled central bank speeches** — can move markets as much as data, and appear with little notice.",
        "**Know the three or four that matter for your instruments. Ignore the rest.**"
      ],
      note: "Do not let students try to follow everything. Two instruments means perhaps six recurring events. Have them build that short list in the lab — a manageable list gets checked, an exhaustive one gets ignored."
    },
    {
      kicker: "Module 9 · Reaction",
      title: "Why price moves the 'wrong' way",
      bullets: [
        "**\"Buy the rumour, sell the fact.\"** Positioning happens *before* the release. Once it lands, those positions are taken off.",
        "A strong number that is **weaker than forecast** is a negative surprise, even though the number is good.",
        "**Whisper numbers** — the market's real expectation sometimes differs from the published consensus.",
        "**The revision to the previous figure** can matter more than the current release.",
        "**The first move is often wrong.** Algorithms react to the headline, humans read the detail, and price frequently reverses within minutes."
      ],
      note: "This slide prevents a very specific frustration: the student sees great data, buys, and gets run over. Naming 'buy the rumour, sell the fact' gives them a framework instead of a grievance."
    },
    {
      kicker: "Module 9 · Reaction",
      title: "What actually happens to your execution",
      bullets: [
        "**Spreads widen** — often by a factor of five to twenty for anything from seconds to minutes.",
        "**Slippage becomes severe** — market orders fill far from the requested price.",
        "**Stops are filled at whatever exists.** Your carefully placed 20-pip stop can cost 60.",
        "**Some brokers restrict pending orders** around high-impact releases.",
        "**Your position size assumed a normal stop. During news, that assumption is void.**"
      ],
      note: "Connect this back to the Module 3 slippage lesson. It is the same mechanism, but now the student can predict *when* it will happen. Predictability is what makes it manageable."
    },
    {
      kicker: "Module 9 · Policy",
      title: "Three defensible news policies",
      bullets: [
        "**Avoid** — flatten positions and place nothing within 30 minutes either side of high-impact releases. **This is the correct policy for every student in this course.**",
        "**Reduce** — halve position size and widen stops during news windows. Requires experience to judge.",
        "**Trade the aftermath** — wait 15 to 30 minutes for the initial noise to resolve, then trade the resulting structure. Legitimate and much safer than trading the spike.",
        "**Not on the list: trading the release itself.** The execution costs alone make it a poor bet for retail.",
        "**Pick one, write it into your plan, and treat violations as rule breaks.**"
      ],
      note: "Be firm that Avoid is the policy for this course. Students will want to trade NFP because it is exciting. Point out that the excitement is the tell — the parts of trading that feel exciting are almost always the parts that cost money."
    },
    {
      kicker: "Module 9 · Regimes",
      title: "Risk-on and risk-off",
      bullets: [
        "In **risk-off** conditions — crisis, conflict, market stress — capital moves to **USD, JPY and CHF** regardless of rate differentials.",
        "In **risk-on** conditions, capital moves toward **AUD, NZD and emerging-market currencies**.",
        "Gold generally rises in risk-off, but it is also sensitive to real yields, so the relationship is not clean.",
        "**Correlations tighten sharply in a crisis.** Positions that looked independent suddenly all lose together.",
        "**This is the mechanism by which a portfolio of 'diversified' 1% trades becomes a single 5% loss.**"
      ],
      note: "This closes the loop with the correlation slide in Module 2. It is worth being explicit: the moment diversification matters most is exactly the moment it stops working."
    },
    {
      kicker: "Module 9 · Wrap",
      title: "Enough fundamentals to stay safe",
      bullets: [
        "Rates and rate expectations as the primary long-term driver",
        "The four or five releases that matter for your instruments, and when they land",
        "Actual versus forecast — why the surprise moves price and the level does not",
        "What happens to spreads, slippage and stops during a release",
        "A written news policy, applied consistently",
        "Risk-on and risk-off, and what they do to correlation"
      ],
      note: "The realistic goal here is not fundamental analysis skill — that takes years. It is that the student is never blindsided, and never holds an oversized position into a scheduled release."
    }
  ],

  practical: {
    title: "Lab 9 — Calendar discipline and a news observation study",
    time: "60 min",
    intro: "The student builds a personal event watchlist and then observes — without trading — exactly what a release does to price and to execution conditions. Watching a release with a stopwatch is far more instructive than trading one.",
    setup: [
      "A free economic calendar open, with the timezone set correctly and verified against the local clock",
      "MT4/MT5 with M1 and M5 charts on the student's two instruments",
      "A spreadsheet named **News Study**",
      "A timer, and the willingness to sit and watch without clicking anything"
    ],
    steps: [
      { h: "Configure the calendar", d: "Set the timezone and verify it against a known event time. Filter to high impact only, and to the currencies relevant to the student's two instruments. Most students leave the calendar on a default timezone and are hours out — check this explicitly." },
      { h: "Build the event watchlist", d: "List every recurring high-impact event that affects the two chosen instruments, with its typical day and time in local terms. This should end up as four to eight entries, not forty. Print it and keep it by the screen." },
      { h: "Record the pre-release state", d: "Ten minutes before a scheduled high-impact release, record: current spread, ATR on M5, the previous hour's range, and the levels marked from Lab 7. Predict in writing which way price will go and how far." },
      { h: "Observe the release", d: "**Place no trades.** At the release, record at 10-second intervals for two minutes: the spread, and the price. Note the exact moment the spread peaked and how long it took to normalise. This is the data most retail traders never gather." },
      { h: "Measure the damage", d: "Compute: peak spread as a multiple of normal, the largest 10-second price move, and whether the first directional move held or reversed. Then calculate what a 20-pip stop placed before the release would have cost in reality." },
      { h: "Compare with the prediction", d: "Check the written prediction against what happened. Also check the actual versus forecast on the calendar and note whether the surprise direction matched the price direction. Where it did not, discuss 'buy the rumour, sell the fact'." },
      { h: "Study the aftermath", d: "Thirty minutes after the release, examine the structure that has formed. Is there a clean level, a defined range, a new trend? Mark it. This is what the 'trade the aftermath' policy actually looks like in practice." },
      { h: "Write the news policy", d: "The student writes their news policy in specific, testable terms — which events, how long before and after, what happens to open positions, and what happens to pending orders. Vague policies do not count." }
    ],
    deliverable: "A **News Study** spreadsheet containing: a configured personal event watchlist with local times, a pre-release state record with a written prediction, a 10-second spread-and-price log covering the release, calculated peak spread multiple and realised stop cost, a prediction-versus-outcome comparison, an aftermath structure screenshot, and a written news policy in testable terms.",
    rubric: [
      { c: "Calendar accuracy", d: "Timezone verified independently. Watchlist is short, relevant to the actual instruments traded, and in local time." },
      { c: "Observation discipline", d: "Placed no trades during the observation. Logged spread and price at regular intervals throughout." },
      { c: "Execution insight", d: "Can state the peak spread multiple and the realised cost of a stop during the release, from their own measurements." },
      { c: "Surprise comprehension", d: "Correctly identifies whether the surprise was positive or negative relative to forecast, and can explain a price move that contradicted the headline." },
      { c: "Aftermath reading", d: "Identified usable structure after the noise resolved, rather than concluding that news makes charts unreadable." },
      { c: "Policy quality", d: "News policy names specific events, specific time windows, and specific actions for both open positions and pending orders." }
    ],
    pitfalls: [
      "Trading during the observation. If the student cannot sit still for two minutes, that is diagnostic information for Module 12 — note it.",
      "Leaving the calendar on the wrong timezone and missing the release entirely. Verify before the session, not during.",
      "Building a watchlist of thirty events. Long lists get ignored. Cut it to the events that actually affect their instruments.",
      "Concluding that news is unpredictable and therefore irrelevant. The opposite — its *timing* is highly predictable, which is exactly what makes it manageable.",
      "Writing 'I will be careful around news' as a policy. Demand specific windows and specific actions."
    ]
  },

  homework: [
    "Check the calendar every morning for a week before opening any chart, and log which events applied to your instruments.",
    "Observe a second release without trading, and compare the spread behaviour with your first study.",
    "Find one historical example where price moved opposite to the headline surprise, and write down your explanation."
  ],

  quiz: [
    {
      q: "US inflation comes in at 3.2% against a forecast of 3.5%. What is the likely dollar reaction?",
      options: [
        "The dollar rises, because 3.2% is still high inflation",
        "The dollar tends to fall — the softer-than-forecast number reduces expectations of further tightening",
        "No reaction, because inflation is priced in",
        "The dollar rises because lower inflation is good economic news"
      ],
      a: 1,
      why: "Markets price the forecast in advance, so the move comes from the surprise. A softer inflation print lowers the expected path of interest rates, which reduces the currency's yield advantage. Note that the absolute level being 'high' is irrelevant — only the deviation from expectation carries new information."
    },
    {
      q: "What is the appropriate news policy for a student at this stage?",
      options: [
        "Trade the spike for quick profits",
        "Avoid — flatten positions and place nothing within about 30 minutes either side of high-impact releases",
        "Double position size to capture the larger move",
        "Ignore news entirely and rely on technicals"
      ],
      a: 1,
      why: "During a release, spreads widen several-fold, slippage is severe, and the first move frequently reverses. Your position sizing assumed normal conditions and those assumptions are void. Avoiding is not timidity — it is declining a bet where your execution costs are at their worst precisely when volatility is highest."
    },
    {
      q: "What is the dominant long-term driver of a currency's value?",
      options: [
        "Chart patterns",
        "Interest rates and, more importantly, expectations about where rates are heading",
        "Trading volume",
        "The number of retail traders holding it"
      ],
      a: 1,
      why: "Capital flows toward higher expected returns, and buying the currency is the mechanism. Expectations matter more than the current level because markets price ahead — which is why a central bank statement hinting at future policy usually moves a currency more than the rate decision itself."
    },
    {
      q: "Why do 'diversified' correlated positions fail exactly when you need diversification most?",
      options: [
        "Brokers close them together",
        "In risk-off conditions capital moves uniformly toward USD, JPY and CHF, so correlations tighten sharply and previously independent-looking positions lose together",
        "Because spreads widen",
        "It is a coincidence"
      ],
      a: 1,
      why: "Correlation is not a fixed property — it rises in stress. In a risk-off event, the specific characteristics of individual currencies matter less than the flight to safety, so positions that behaved independently in calm markets suddenly move as one. This is the mechanism that turns five 1% trades into a single 5% loss."
    },
    {
      q: "Price spikes up 40 pips on a release, then reverses 70 pips within five minutes. What is the most likely explanation?",
      options: [
        "The data was revised",
        "Algorithms reacted instantly to the headline number while humans read the detail and the accompanying revisions, producing a rapid re-pricing",
        "The broker manipulated the price",
        "A large trader made an error"
      ],
      a: 1,
      why: "The headline number hits the wires first and is traded algorithmically within milliseconds. The detail — component breakdowns, revisions to prior months, forward guidance — takes longer to digest and often tells a different story. This two-stage reaction is exactly why the first move after a release is unreliable and why the 'trade the aftermath' policy exists."
    },
    {
      q: "Your normal EUR/USD spread is 1 pip. During NFP it reaches 18 pips for forty seconds. What does this mean for a 20-pip stop?",
      options: [
        "Nothing — stops are executed on the bid",
        "It can be triggered by the spread alone, and even if not, execution near the spike can cost far more than 20 pips",
        "The stop is automatically widened by the broker",
        "The stop is cancelled during news"
      ],
      a: 1,
      why: "A stop becomes a market order when its level trades, and with an 18-pip spread the effective trigger and the effective fill can be far from where you intended. A stop sized for normal conditions is simply not the risk control you think it is during a release — which is the concrete reason behind the avoid policy."
    }
  ]
}

]);
