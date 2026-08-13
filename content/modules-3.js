/* Modules 9–12 — Risk, context and systemising */
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
},

/* ============================= MODULE 10 ============================= */
{
  id: 10,
  title: "Risk Management and Position Sizing",
  tagline: "The most important module in this course. Everything before it was preparation for this.",
  level: "Advanced",
  duration: "150 min",

  objectives: [
    "Calculate correct position size from account, risk percentage and stop distance, every time",
    "Place stops at structural levels rather than at arbitrary pip distances",
    "Explain expectancy and compute it for a set of trades",
    "Model the effect of a losing streak and explain why survival dominates returns",
    "Write and commit to a complete personal risk policy"
  ],

  misconceptions: [
    "**\"Risk management limits my profits.\"** It limits your *losses*, which is what keeps you in the game long enough for an edge to appear. A trader who cannot lose twenty times in a row and continue does not have a strategy — they have a bet.",
    "**\"I'll increase size when I'm confident.\"** Confidence is uncorrelated with outcome, and generally peaks right before the worst trades. Size from the stop distance, never from the feeling.",
    "**\"A 50% loss just needs a 50% gain to recover.\"** It needs 100%. Losses and gains are not symmetric, and this asymmetry is the whole reason to cap risk.",
    "**\"Martingale works because price always comes back.\"** It works until the one time it does not, and that one time takes everything. Doubling down converts many small wins into a single total loss."
  ],

  glossary: [
    { t: "Risk per trade", d: "The maximum you will lose if the stop is hit, expressed as a percentage of account equity." },
    { t: "R", d: "One unit of risk. A trade that makes three times what it risked made 3R. The universal unit for comparing trades." },
    { t: "Position size", d: "The lot size that makes your stop distance equal your intended risk. An output, never an input." },
    { t: "Expectancy", d: "Average profit or loss per trade in R. Positive expectancy is the definition of an edge." },
    { t: "Drawdown", d: "The decline from an equity peak to a trough. The measure that determines whether a trader survives." },
    { t: "Risk of ruin", d: "The probability of losing enough capital to be unable to continue." },
    { t: "Risk:reward ratio", d: "Planned reward divided by planned risk, measured before entry." },
    { t: "Break-even win rate", d: "The win rate at which a given R:R produces zero expectancy." },
    { t: "Correlation risk", d: "Aggregate exposure across positions that move together." },
    { t: "Martingale", d: "Increasing size after losses to recover. Mathematically guaranteed to fail given a finite account." },
    { t: "Kelly criterion", d: "A formula for theoretically optimal sizing. Far too aggressive in practice; traders use small fractions of it." }
  ],

  slides: [
    {
      kicker: "Module 10 · Foundation",
      title: "The order of operations",
      bullets: [
        "**Wrong:** decide a lot size, place a trade, put a stop somewhere convenient.",
        "**Right:** find the level → **place the stop where the idea is wrong** → decide the risk percentage → **calculate the lot size**.",
        "**Position size is an output, not a choice.** It falls out of the other three decisions.",
        "This one reordering removes the single largest cause of blown accounts.",
        "**If you ever find yourself choosing a lot size, you have skipped a step.**"
      ],
      note: "Write both orderings on the board side by side and leave them up for the whole session. Every subsequent slide is an elaboration of this one. If the student takes nothing else from the course, take this."
    },
    {
      kicker: "Module 10 · The formula",
      title: "The calculation, in full",
      bullets: [
        "**Lots = (Equity × Risk%) ÷ (Stop in pips × Pip value per lot)**",
        "Example: $5,000 account, 1% risk, EUR/USD, 35-pip stop.",
        "Risk amount = 5000 × 0.01 = **$50**.",
        "Denominator = 35 × $10 = **$350**.",
        "**Lots = 50 ÷ 350 = 0.14.**",
        "Same account, gold, 400-pip stop, pip value $1 per 0.01 lot — **the lot size will be completely different for identical risk.**"
      ],
      note: "Have the student compute this five times with different inputs before moving on. It must be automatic. If they need to think about it in a live market they will skip it, and skipping it is how accounts end."
    },
    {
      kicker: "Module 10 · Stops",
      title: "Where the stop actually goes",
      bullets: [
        "**The stop goes where the trade idea is proven wrong.** Not at a round number, not at a fixed pip distance, not at 'what I can afford'.",
        "For a long at support: **below the support zone**, beyond the likely sweep distance you measured in Lab 7.",
        "Cross-check with **ATR**: is the distance sensible for current volatility?",
        "**If the correct stop makes the position uncomfortably small, the position is correct and your expectations are wrong.**",
        "**Never move a stop further away.** Widening a stop to avoid a loss is how a planned 1% becomes an unplanned 8%."
      ],
      note: "That last bullet deserves emphasis. Almost every catastrophic retail loss involves a stop that was moved. Ask the student to commit out loud that they will never widen a stop, and write it as rule one of their risk policy."
    },
    {
      kicker: "Module 10 · Sizing",
      title: "How much to risk per trade",
      bullets: [
        "**Beginner: 0.5% or less.** Learning costs money; make the tuition affordable.",
        "**Experienced with a tested edge: 1–2%.**",
        "**Above 2%: you are relying on being right rather than on being sized correctly.**",
        "At 1%, ten consecutive losses cost about **9.6%** — uncomfortable and completely survivable.",
        "At 10%, ten consecutive losses cost about **65%**, needing a **186% gain** to recover. That account is finished.",
        "**Ten losses in a row is normal. Plan for it or be ended by it.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="Equity remaining after ten consecutive losses at different risk levels"><line x1="70" y1="20" x2="70" y2="170" class="axis"/><line x1="70" y1="170" x2="560" y2="170" class="axis"/><text class="lbl-sm" x="62" y="24" text-anchor="end">100%</text><text class="lbl-sm" x="62" y="172" text-anchor="end">0%</text>' +
        '<rect x="100" y="34" width="60" height="136" class="up" opacity=".8"/><text class="lbl" x="130" y="186" text-anchor="middle">1%</text><text class="lbl-sm" x="130" y="28" text-anchor="middle">90.4%</text>' +
        '<rect x="200" y="47" width="60" height="123" class="up" opacity=".65"/><text class="lbl" x="230" y="186" text-anchor="middle">2%</text><text class="lbl-sm" x="230" y="41" text-anchor="middle">81.7%</text>' +
        '<rect x="300" y="80" width="60" height="90" fill="var(--warn)" opacity=".8"/><text class="lbl" x="330" y="186" text-anchor="middle">5%</text><text class="lbl-sm" x="330" y="74" text-anchor="middle">59.9%</text>' +
        '<rect x="400" y="118" width="60" height="52" class="dn" opacity=".75"/><text class="lbl" x="430" y="186" text-anchor="middle">10%</text><text class="lbl-sm" x="430" y="112" text-anchor="middle">34.9%</text>' +
        '<rect x="500" y="154" width="60" height="16" class="dn" opacity=".9"/><text class="lbl" x="530" y="186" text-anchor="middle">20%</text><text class="lbl-sm" x="530" y="148" text-anchor="middle">10.7%</text>' +
        '<text class="lbl" x="315" y="14" text-anchor="middle">equity remaining after 10 consecutive losses</text></svg>',
      note: "Do not just show this — build it live in a spreadsheet, multiplying by 0.99 ten times and then by 0.80 ten times. The visceral difference between watching it and being told it is enormous, and it is why the Module 3 blow-up lab exists."
    },
    {
      kicker: "Module 10 · Asymmetry",
      title: "Losses and gains are not symmetric",
      bullets: [
        "Lose **10%** → need **11.1%** to recover.",
        "Lose **25%** → need **33.3%**.",
        "Lose **50%** → need **100%**.",
        "Lose **75%** → need **300%**.",
        "**Every percentage point of drawdown is more expensive than the last.**",
        "**This is why capital preservation dominates return chasing. The maths is not a preference.**"
      ],
      note: "Have the student compute the recovery percentages themselves rather than reading them. Working out that 50% requires 100% back is a small shock that lands much harder than being shown the table."
    },
    {
      kicker: "Module 10 · Expectancy",
      title: "Expectancy — the only measure that matters",
      bullets: [
        "**Expectancy = (Win% × Avg win in R) − (Loss% × Avg loss in R)**",
        "Example: 40% win rate, average win 2.5R, average loss 1R → (0.4 × 2.5) − (0.6 × 1) = **+0.4R per trade**.",
        "**A 40% win rate can be highly profitable. A 70% win rate can lose money.** Win rate alone tells you nothing.",
        "**Costs must be inside the calculation.** An edge of 0.1R disappears entirely once spread is included.",
        "**Measure in R, not in currency.** R is comparable across instruments, account sizes and time."
      ],
      note: "Students obsess over win rate because it is the number sold to them by signal providers. Reframing everything in R and expectancy is the antidote, and it makes the Module 12 journal analysis meaningful."
    },
    {
      kicker: "Module 10 · Expectancy",
      title: "Risk:reward and the break-even win rate",
      bullets: [
        "**1:1** needs a **50%** win rate to break even. **1:2** needs **33%**. **1:3** needs **25%**.",
        "**2:1 against you** — risking 2 to make 1 — needs **67%**, before costs.",
        "Higher R:R means a lower required win rate, but **also fewer winners and longer losing streaks**. It is psychologically harder.",
        "**Do not force a target to achieve a ratio.** A 1:3 target that price never reaches is a 0% win rate.",
        "**Set the target where price is realistically likely to go, then check whether the resulting ratio is acceptable. If not, skip the trade.**"
      ],
      note: "The last two bullets correct a widespread bad habit — students place targets at 3R because they were told to, regardless of whether any structure exists there. The target should come from the chart and the ADR, and the ratio is then a filter, not a goal."
    },
    {
      kicker: "Module 10 · Portfolio",
      title: "Total risk, not just per-trade risk",
      bullets: [
        "**Per-trade risk** is only half the policy. You also need **maximum total open risk**.",
        "Suggested: **no more than 3% at risk across all open positions**.",
        "**Correlated positions count as one.** Long EUR/USD and long GBP/USD at 1% each is a 2% bet on the dollar, not two 1% trades.",
        "**Daily stop:** after losing 3% in a day, stop trading. The day is over.",
        "**Weekly and monthly stops** too. A bad week should not become a bad quarter.",
        "**These limits protect you from yourself on the days when judgement is worst.**"
      ],
      note: "The daily stop is the rule students break most often, because the urge to recover a loss is strongest immediately after taking one. Have them write it down and, ideally, physically close the platform when it triggers."
    },
    {
      kicker: "Module 10 · Danger",
      title: "The strategies that guarantee ruin",
      bullets: [
        "**Martingale** — double after a loss. Wins consistently until one sequence takes everything. The maths is not ambiguous.",
        "**Grid without a stop** — adding positions as price moves against you. Same failure mode, dressed differently.",
        "**Averaging down** — adding to a loser. Turns a small planned loss into an enormous unplanned one.",
        "**No stop loss** — 'I'll close it manually.' You will not. Under pressure, you will hope.",
        "**Revenge trading** — sizing up to recover a loss. The single fastest way to convert a bad day into a finished account.",
        "**Every one of these feels like it works right up until it ends you.**"
      ],
      note: "Many EAs marketed to beginners are martingale or grid systems with impressive-looking equity curves — because the curve looks perfect until the day it goes vertical downward. If the student is drawn to one, have them look at its maximum drawdown and ask what happens on the sequence that has not occurred yet."
    },
    {
      kicker: "Module 10 · Policy",
      title: "Your written risk policy",
      bullets: [
        "**Risk per trade:** a fixed percentage. Written down. Never varied by confidence.",
        "**Maximum open risk:** total across all positions, with correlated positions counted once.",
        "**Daily / weekly stop:** specific numbers at which you stop trading.",
        "**Stop placement rule:** structural, verified against ATR, never widened.",
        "**Minimum acceptable R:R:** below which you skip the trade.",
        "**News policy** from Module 9.",
        "**Sign it and date it. A policy you have not committed to is a preference.**"
      ],
      note: "Have the student physically write and sign this in the lab. It sounds theatrical and it works — a signed document is much harder to quietly ignore at 2am than a vague intention."
    },
    {
      kicker: "Module 10 · Wrap",
      title: "Why this module is the course",
      bullets: [
        "Position size as an output of stop distance and risk percentage",
        "Stops at structure, checked against volatility, never widened",
        "Expectancy in R — and why win rate on its own is meaningless",
        "The arithmetic of drawdown and why survival dominates returns",
        "Portfolio-level limits and daily stops",
        "A signed, specific risk policy"
      ],
      note: "Close by saying it plainly: a mediocre strategy with excellent risk management survives long enough to improve. An excellent strategy with poor risk management does not survive at all. The order of importance is not what most beginners assume."
    }
  ],

  practical: {
    title: "Lab 10 — Build the risk engine and write the policy",
    time: "90 min",
    intro: "The longest lab in the course, and the most important. The student extends their FX Calculator into a full position-sizing tool, models drawdown themselves, computes expectancy on real trade data, and writes and signs a risk policy.",
    setup: [
      "The **FX Calculator** from Lab 2",
      "The **Level Map** from Lab 7 and the **ATR** figures from Lab 8",
      "A spreadsheet named **Risk Engine**",
      "Any existing demo trade history — even a handful of trades — for the expectancy work",
      "A printed blank risk policy template, and a pen"
    ],
    steps: [
      { h: "Build the sizing calculator", d: "Extend the FX Calculator with inputs for equity, risk percentage and stop distance in pips, and an output of lot size. It must handle USD-quoted pairs, JPY pairs and gold correctly. Test it against three worked examples computed by hand first — the hand calculation is what proves the formula, not the spreadsheet." },
      { h: "Size ten real setups", d: "Using the Level Map, identify ten historical setups. For each: mark where the stop belongs structurally, measure that distance in pips, cross-check against ATR, and compute the lot size at 1% risk. Note how widely the lot sizes vary for identical risk." },
      { h: "Model the drawdown curve", d: "In a fresh sheet, model 20 consecutive losses at 0.5%, 1%, 2%, 5%, 10% and 20% risk. Chart the six equity curves on one axis. Then add a column computing the gain required to recover from each. Do not copy the numbers from the slides — build it." },
      { h: "Simulate a realistic sequence", d: "Model 100 trades at a 45% win rate with 2R winners and 1R losers, at 1% risk. Use a random-number column so it can be recalculated. Recalculate ten times and record the worst drawdown seen in each run. The student discovers that even a positive-expectancy system produces alarming stretches." },
      { h: "Compute expectancy on real trades", d: "Take the student's existing demo history. Convert every trade to R, then compute win rate, average win in R, average loss in R, and expectancy. Include costs. If expectancy is negative — which is normal at this stage — identify which trades did the damage." },
      { h: "Find the biggest loss and diagnose it", d: "Locate the single largest loss in the history. Compute what it should have been at correct sizing with a structural stop. The gap between actual and correct is almost always the difference between the account being up and down. Write the number down." },
      { h: "Build the R:R filter", d: "For the ten sized setups, mark a realistic target based on structure and ADR — not on a desired ratio. Compute the resulting R:R for each. Then apply a minimum threshold and count how many setups survive. This is what a filter actually does to trade frequency." },
      { h: "Write and sign the policy", d: "Complete the template: risk per trade, maximum open risk, correlation rule, daily stop, weekly stop, stop placement rule, never-widen commitment, minimum R:R, and news policy. Every entry must be a specific number or a specific action. Then sign and date it, and photograph it." }
    ],
    figure: '<figure><svg class="fig" viewBox="0 0 580 210" role="img" aria-label="Equity curves for twenty consecutive losses at different risk percentages"><line x1="55" y1="16" x2="55" y2="172" class="axis"/><line x1="55" y1="172" x2="560" y2="172" class="axis"/><text class="lbl-sm" x="48" y="20" text-anchor="end">100%</text><text class="lbl-sm" x="48" y="176" text-anchor="end">0%</text><text class="lbl-sm" x="300" y="196" text-anchor="middle">consecutive losses →</text>' +
      '<polyline fill="none" stroke="var(--bull)" stroke-width="2.5" points="55,16 80,20 105,24 130,28 155,32 180,36 205,40 230,44 255,47 280,51 305,54 330,58 355,61 380,65 405,68 430,71 455,74 480,77 505,80 530,83 555,86"/><text class="lbl-sm" x="558" y="84" fill="var(--bull)">1%</text>' +
      '<polyline fill="none" stroke="var(--accent)" stroke-width="2.5" points="55,16 80,23 105,30 130,36 155,42 180,48 205,54 230,59 255,64 280,69 305,74 330,78 355,83 380,87 405,91 430,95 455,98 480,102 505,105 530,109 555,112"/><text class="lbl-sm" x="558" y="110" fill="var(--accent)">2%</text>' +
      '<polyline fill="none" stroke="var(--warn)" stroke-width="2.5" points="55,16 80,32 105,47 130,60 155,72 180,83 205,93 230,102 255,110 280,117 305,124 330,130 355,136 380,141 405,145 430,150 455,153 480,157 505,160 530,163 555,166"/><text class="lbl-sm" x="558" y="164" fill="var(--warn)">5%</text>' +
      '<polyline fill="none" stroke="var(--bear)" stroke-width="2.5" points="55,16 80,45 105,71 130,94 155,114 180,132 205,148 230,155 255,161 280,165 305,167 330,169 355,170 380,171 405,171 430,172 455,172 480,172 505,172 530,172 555,172"/><text class="lbl-sm" x="558" y="146" fill="var(--bear)">10%</text></svg><figcaption>The student builds this themselves. The point is not the shape — it is that the 1% line is still recoverable after twenty losses and the 10% line is not.</figcaption></figure>',
    deliverable: "A **Risk Engine** workbook containing: a verified position-size calculator handling three instrument types, ten sized historical setups with structural stops and ATR cross-checks, a built drawdown model with recovery requirements, a 100-trade Monte Carlo sheet with worst-drawdown results across ten runs, an expectancy calculation on real trade history including costs, a diagnosis of the largest historical loss, and an R:R filter applied to the ten setups. Plus a signed, dated risk policy.",
    rubric: [
      { c: "Calculator correctness", d: "Produces correct lot sizes for USD-quoted, JPY and gold instruments, verified against hand calculations rather than assumed." },
      { c: "Stop discipline", d: "All ten stops placed at structural levels beyond likely sweep distance, cross-checked against ATR. None placed at round pip numbers." },
      { c: "Drawdown comprehension", d: "Built the model independently and can state, unprompted, the recovery requirement from a 50% loss." },
      { c: "Expectancy literacy", d: "Computed expectancy in R including costs, and can explain why a 40% win rate can beat a 70% one." },
      { c: "Honest diagnosis", d: "Identified the largest historical loss, computed what correct sizing would have made it, and named the specific rule that was missing." },
      { c: "Policy specificity", d: "Every policy entry is a number or a concrete action. No entry says 'be careful' or 'as appropriate'. Signed and dated." }
    ],
    pitfalls: [
      "Building the calculator without hand-checking it. A spreadsheet error here propagates into every trade for the rest of their career — verify on paper first.",
      "Placing stops at a fixed pip distance and then finding structure to justify it. The stop comes from the structure, in that order.",
      "Choosing targets to hit a desired R:R rather than reading them from the chart. Watch for targets floating in open space.",
      "Computing expectancy without costs and concluding an edge exists. Reject any expectancy figure that omits spread.",
      "Treating the Monte Carlo sheet as a prediction. It illustrates variance, not the future.",
      "Writing the policy without signing it. The commitment step is not decoration — make it happen."
    ]
  },

  homework: [
    "Apply the position-size calculator to every demo trade for the next week. No trade may be entered without a computed lot size.",
    "Recalculate the Monte Carlo sheet twenty more times and record the distribution of worst drawdowns.",
    "Pin the signed risk policy where you can see it while trading, and log any occasion you were tempted to break it."
  ],

  quiz: [
    {
      q: "Account $8,000, risking 1%, GBP/USD, structural stop 45 pips away. What lot size?",
      options: ["0.18 lots", "1.78 lots", "0.045 lots", "0.80 lots"],
      a: 0,
      why: "Risk amount = 8000 × 0.01 = $80. Denominator = 45 pips × $10 per pip per standard lot = $450. Lots = 80 ÷ 450 = 0.178, rounded to 0.18. Note the order: the stop distance came from the chart first, and the lot size fell out of it. Choosing 0.18 lots and then finding somewhere to put a stop is the reversed, dangerous version."
    },
    {
      q: "A trader wins 70% of trades but is losing money overall. How?",
      options: [
        "Impossible — a 70% win rate is always profitable",
        "Their losses are much larger than their wins; expectancy depends on the size of outcomes, not just their frequency",
        "The broker is manipulating results",
        "They are trading the wrong pairs"
      ],
      a: 1,
      why: "Expectancy = (win% × avg win) − (loss% × avg loss). At a 70% win rate with 0.5R wins and 2R losses, expectancy is (0.7 × 0.5) − (0.3 × 2) = −0.25R per trade. This is the classic profile of someone who takes profits quickly and lets losers run — high win rate, negative expectancy. Win rate in isolation carries no information about profitability."
    },
    {
      q: "You lose 50% of your account. What return is needed to get back to the starting balance?",
      options: ["50%", "75%", "100%", "150%"],
      a: 2,
      why: "Halving the account means the remaining capital must double. This asymmetry is why capital preservation matters more than return chasing — each additional percentage point of drawdown is more expensive to recover than the last, and by 75% down you need 300%. The maths is the argument for small risk per trade, not caution as a personality trait."
    },
    {
      q: "Price moves against your position toward your stop. What should you do?",
      options: [
        "Move the stop further away to give the trade room",
        "Add to the position to improve your average price",
        "Nothing — the stop was placed where the idea is wrong, and that has not changed",
        "Close half and move the stop"
      ],
      a: 2,
      why: "The stop was placed at the level that invalidates the idea, decided when you were objective. Moving it converts a planned, sized loss into an unplanned, unsized one, and adding to the position doubles exposure to an idea the market is currently disagreeing with. Almost every catastrophic retail loss involves one of the first two options."
    },
    {
      q: "You are long EUR/USD, long AUD/USD and short USD/CHF, each risking 1%. What is your true exposure?",
      options: [
        "1%, since they are different instruments",
        "3%, spread across three markets",
        "Close to 3% on a single view — all three profit from dollar weakness",
        "0%, because they hedge"
      ],
      a: 2,
      why: "All three are dollar-negative expressions: two have USD as the quote currency and the third is short USD outright. A dollar rally hurts all three simultaneously. This is why a portfolio-level risk limit exists and why correlated positions must be counted once — it is the standard route by which a disciplined 1%-per-trade trader takes a 3% hit in an hour."
    },
    {
      q: "Why does a martingale system eventually fail?",
      options: [
        "Brokers ban it",
        "Because doubling after each loss requires exponentially growing capital, and any finite account eventually meets a losing sequence it cannot fund",
        "Because spreads are too wide",
        "It does not fail if the account is large enough"
      ],
      a: 1,
      why: "Position size doubles with each loss, so funding an n-loss streak needs roughly 2^n units of capital. Every account is finite, and long streaks are certain over enough trades. Martingale produces a long run of small wins followed by one total loss — which is exactly why its equity curve looks flawless right up until the end."
    }
  ]
},

/* ============================= MODULE 11 ============================= */
{
  id: 11,
  title: "Building a Strategy and Writing the Plan",
  tagline: "Turning everything so far into a specific, written, testable set of rules that another person could follow.",
  level: "Advanced",
  duration: "120 min",

  objectives: [
    "Describe the main strategy archetypes and match them to market conditions",
    "Write entry, exit and filter rules specific enough to be tested",
    "Assemble a complete written trading plan",
    "Explain why a discretionary approach must still be rule-bounded",
    "Test whether a plan is truly unambiguous by having someone else apply it"
  ],

  misconceptions: [
    "**\"I need to find the best strategy.\"** There is no best. There are strategies suited to conditions, to timeframes, and to the trader's own schedule and temperament. Fit matters more than quality.",
    "**\"Discretionary means I decide in the moment.\"** Discretionary means judgement *within* defined rules. Deciding freshly each time is not a strategy, it is a series of opinions.",
    "**\"More rules means a better system.\"** Each rule is another parameter to overfit and another thing to fail to follow. Five clear rules beat twenty vague ones.",
    "**\"I'll write the plan once I'm profitable.\"** Backwards. Without a plan there is no way to know whether profits came from process or luck, and no way to reproduce them."
  ],

  glossary: [
    { t: "Trading plan", d: "A written document specifying what you trade, when, how you enter and exit, and how much you risk." },
    { t: "Setup", d: "A specific, recognisable configuration you have decided in advance to trade." },
    { t: "Trigger", d: "The precise event that causes entry once a setup is present." },
    { t: "Filter", d: "A condition that must hold for a setup to be valid at all — session, trend, volatility." },
    { t: "Trend following", d: "Entering in the direction of the prevailing trend, usually on pullbacks." },
    { t: "Mean reversion", d: "Trading a return toward an average or a range midpoint. Suits ranging conditions." },
    { t: "Breakout", d: "Entering as price leaves a defined range or level, expecting continuation." },
    { t: "Scalping", d: "Very short holds, small targets. Highly sensitive to costs." },
    { t: "Swing trading", d: "Holding days to weeks. Sensitive to swap and to overnight gap risk." },
    { t: "Trade management", d: "What you do after entry — partial exits, trailing stops, moving to break-even." },
    { t: "Overfitting", d: "Adding rules until past data fits perfectly, destroying the ability to generalise." }
  ],

  slides: [
    {
      kicker: "Module 11 · Archetypes",
      title: "Four archetypes and their conditions",
      bullets: [
        "**Trend following** — enter with the trend on pullbacks. Lower win rate, larger winners. Needs trending conditions and patience through chop.",
        "**Mean reversion** — fade extremes back toward the middle. Higher win rate, smaller winners, occasional large losses when a range breaks.",
        "**Breakout** — enter as price leaves a range. Many false starts, occasional very large winners. Needs volatility expansion.",
        "**Momentum continuation** — enter into an established move, in the strongest part of it. Needs good timing and disciplined exits.",
        "**Each one fails in exactly the conditions where another one works. That is why matching the strategy to conditions is most of the job.**"
      ],
      note: "Ask which archetype fits the student's available session from Module 5. Someone who can only trade Tokyo should be building a mean-reversion approach; someone who can only trade the London open should be building breakout or momentum. Fit first, refine later."
    },
    {
      kicker: "Module 11 · Fit",
      title: "Fit the strategy to your actual life",
      bullets: [
        "**When can you genuinely watch charts?** That determines your session, and your session constrains your archetype.",
        "**How often do you want to trade?** Higher timeframes mean fewer, larger, slower trades.",
        "**How do you handle losing streaks?** Trend following will hand you six losses in a row routinely.",
        "**How much do costs matter to you?** Scalping only works with very low costs and excellent execution.",
        "**A brilliant strategy you cannot actually execute is worth less than an ordinary one you can.**"
      ],
      note: "Have the student answer these four questions in writing before choosing anything. Nearly everyone initially picks the strategy that sounds most exciting rather than the one that fits their timetable, and the mismatch surfaces two months later as 'the strategy stopped working'."
    },
    {
      kicker: "Module 11 · Structure",
      title: "The five components of a setup",
      bullets: [
        "**1. Filter** — the conditions under which this setup is valid at all. Session, higher-timeframe bias, volatility, news.",
        "**2. Location** — where on the chart you will look. A marked zone, a structural level, a moving average.",
        "**3. Trigger** — the specific event that causes entry. A candle close, a break, a rejection.",
        "**4. Invalidation** — where the stop goes, expressed structurally.",
        "**5. Target and management** — where you exit, and what you do in between.",
        "**Write all five. A setup missing any one of them cannot be tested and cannot be followed under pressure.**"
      ],
      note: "This template is the core deliverable of the module. Every setup the student ever develops should be expressible in these five components — if it cannot be, it is not yet a setup, it is an impression."
    },
    {
      kicker: "Module 11 · Example",
      title: "A worked setup — trend pullback",
      bullets: [
        "**Filter:** H4 in an uptrend (higher highs and higher lows). London or overlap session only. No high-impact news within 30 minutes.",
        "**Location:** price pulls back into a marked H4 demand zone that coincides with the prior swing high — a role reversal.",
        "**Trigger:** on M15, a bullish engulfing candle closing above the zone high.",
        "**Invalidation:** stop below the zone low, plus the measured sweep distance for this instrument.",
        "**Target:** the prior swing high. If that is less than 1.5R away, skip the trade.",
        "**Management:** move stop to break-even at 1R. No other intervention."
      ],
      note: "Walk through this on a live chart, then have the student find three historical instances. Ambiguity shows up fast — 'is that a valid engulfing candle?' is exactly the kind of question the plan must answer in advance."
    },
    {
      kicker: "Module 11 · Example",
      title: "A worked setup — range fade",
      bullets: [
        "**Filter:** H1 in a range — at least two touches of each boundary, no clear directional sequence. Tokyo session. No news.",
        "**Location:** price returns to a range boundary zone.",
        "**Trigger:** on M15, a rejection candle with the close back inside the range.",
        "**Invalidation:** stop beyond the boundary zone plus sweep distance.",
        "**Target:** the range midpoint for a partial exit, the opposite boundary for the remainder.",
        "**Management:** if price closes outside the range against you, exit immediately — the range has broken and the premise is gone."
      ],
      note: "Contrast the two setups explicitly. Same five components, opposite logic, different conditions and sessions. The student should see that a plan can contain several setups as long as each has clearly defined conditions that prevent them being applied in the wrong regime."
    },
    {
      kicker: "Module 11 · Precision",
      title: "The specificity test",
      bullets: [
        "**Vague:** \"Enter when the trend looks strong.\" **Specific:** \"Enter when price closes above the 50 EMA on H4 with a body larger than the previous three candles.\"",
        "**Vague:** \"Exit when it looks like reversing.\" **Specific:** \"Exit at the prior swing high, or on an M15 close below the entry candle low.\"",
        "**The test:** could someone else read your plan and take the same trades you would, without asking you a question?",
        "If not, the ambiguity will be resolved by your mood — and your mood is worst exactly when it matters most.",
        "**A rule that cannot be tested is not a rule. It is a hope with a rule's grammar.**"
      ],
      note: "Actually run the test in the lab: give the plan to another student, or apply it yourself to charts they have not seen, and see whether you take the same trades. Every disagreement is an ambiguity that must be written out."
    },
    {
      kicker: "Module 11 · Management",
      title: "Trade management — less is usually more",
      bullets: [
        "**Break-even stops** — protect capital, but move too early and you convert winners into scratches. Move at 1R, not at 0.3R.",
        "**Partial exits** — bank some at the first target. Reduces variance and reduces expectancy. That trade-off is a choice, not a free lunch.",
        "**Trailing stops** — capture extended moves, but a trail that is too tight is just an early exit with extra steps.",
        "**Every management rule must be written in advance.** Deciding to take partials mid-trade is emotion, not management.",
        "**Test with and without.** Most beginners' management rules reduce their expectancy, and they only find out by measuring."
      ],
      note: "The 'management reduces expectancy' point surprises students. Have them measure it in Module 12: take their journal and recompute results as if every trade had simply run to stop or target. It is often better, and it is always informative."
    },
    {
      kicker: "Module 11 · Overfitting",
      title: "Why fewer rules survive longer",
      bullets: [
        "Every added rule fits the data you have seen a little better and the data you have not seen a little worse.",
        "A strategy with fifteen conditions will look flawless historically and fail immediately.",
        "**Symptom:** rules that exist to exclude specific past losses. \"Except on Tuesdays\" is overfitting with a calendar.",
        "**Test:** does each rule have a *reason*, or does it only have *evidence*?",
        "**Aim for five to eight rules total across the whole setup.** If it does not fit on one page, it is too complex to follow."
      ],
      note: "The reason-versus-evidence distinction is the most useful heuristic here. A rule like 'no trading during rollover' has a mechanism — spreads widen. A rule like 'no trading on Tuesdays' has only a backtest. Mechanisms generalise; coincidences do not."
    },
    {
      kicker: "Module 11 · The document",
      title: "What a complete trading plan contains",
      bullets: [
        "**Instruments** — which two or three, and why.",
        "**Timeframes** — for bias, location and timing.",
        "**Trading window** — specific hours, from Module 5.",
        "**Setups** — each with all five components.",
        "**Risk policy** — the signed document from Module 10, incorporated in full.",
        "**News policy** — from Module 9.",
        "**Review process** — when you review, what you measure, what would make you change the plan.",
        "**One or two pages. If it is longer, you will not read it.**"
      ],
      note: "Insist on brevity. A twelve-page plan is a document written to feel thorough; a one-page plan is a document written to be used at 7am with a live position on."
    },
    {
      kicker: "Module 11 · Wrap",
      title: "From ideas to a system",
      bullets: [
        "Four archetypes, and matching one to your conditions and your life",
        "The five components every setup must specify",
        "The specificity test — could someone else follow this?",
        "Management rules written in advance, and measured rather than assumed",
        "Fewer rules, each with a mechanism behind it",
        "A complete plan on one or two pages"
      ],
      note: "The plan produced here is what gets tested in Module 12. Make clear that the first version will be wrong in places, and that this is expected — the point is having something specific enough that its errors are visible."
    }
  ],

  practical: {
    title: "Lab 11 — Write, stress-test and hand over your plan",
    time: "90 min",
    intro: "The student writes their complete trading plan, then it gets attacked. The stress test is the valuable part: an unambiguous plan survives someone else trying to misread it, and a vague plan does not.",
    setup: [
      "Every previous deliverable: Session Map, Structure Log, Level Map, Indicator Audit, Risk Engine and signed risk policy",
      "A document named **Trading Plan v1**",
      "Charts for the student's two instruments across D1, H4, H1 and M15",
      "Ideally a second person — another student, or the instructor acting as a naive reader"
    ],
    steps: [
      { h: "Answer the fit questions", d: "In writing: when can you actually trade, how often do you want to trade, how will you handle six losses in a row, and how sensitive is your approach to costs? Then choose an archetype that is consistent with all four answers. If the archetype contradicts the session, change the archetype." },
      { h: "Draft setup one", d: "Write all five components — filter, location, trigger, invalidation, target and management — for the primary setup. Use specific, checkable language throughout. No sentence may contain 'looks', 'seems' or 'strong' without a definition." },
      { h: "Find twenty historical instances", d: "Scroll back and find twenty instances where the setup's filter and location conditions were met. For each, record whether the trigger fired, and what the outcome would have been in R. This is not a backtest yet — it is a check that the setup occurs often enough to be worth having." },
      { h: "Fix what the instances revealed", d: "Nearly every ambiguity surfaces during step three. Where the student hesitated over whether a condition was met, rewrite the rule until hesitation is impossible. Log each rewrite — the pattern of rewrites shows where their thinking is fuzziest." },
      { h: "Draft setup two, or deliberately do not", d: "Add a second setup only if it covers conditions the first cannot trade — for example, a range setup alongside a trend setup. If the second setup is just a variation, drop it. One well-defined setup beats two half-defined ones." },
      { h: "Assemble the full plan", d: "Combine instruments, timeframes, trading window, setups, the signed risk policy, the news policy and the review process into a single document. Maximum two pages. Cut anything that does not change a decision." },
      { h: "The handover test", d: "Give the plan to a second person with no explanation. They apply it to five charts the student has not seen and record which trades they would take. Compare with what the student would have taken. **Every disagreement is a defect in the plan, not in the reader.** Fix each one." },
      { h: "The adversarial read", d: "Instructor reads the plan looking specifically for loopholes: places where a rule could be interpreted to justify a trade the student wants to take. Read every ambiguity in the most self-serving way possible and show them the result. Close each loophole." },
      { h: "Commit to a test period", d: "The student writes: 'I will follow this plan without modification for the next 30 trades, then review.' Locking the plan is essential — a plan changed mid-test produces no information at all." }
    ],
    deliverable: "**Trading Plan v1** — a one-to-two page document covering instruments, timeframes, trading window, one or two fully specified setups, the incorporated risk policy, the news policy and a review process. Plus a log of twenty historical instances with outcomes in R, a record of every rewrite made during stress testing, handover-test results with disagreements resolved, and a signed 30-trade commitment.",
    rubric: [
      { c: "Internal consistency", d: "Archetype, session and timeframe are mutually consistent, and consistent with the student's stated availability." },
      { c: "Setup completeness", d: "Every setup specifies all five components. No component is left implicit." },
      { c: "Specificity", d: "No rule contains an undefined subjective term. Every condition is checkable by looking at a chart." },
      { c: "Handover success", d: "A second reader takes the same trades on at least four of five unseen charts, with disagreements traced to specific wording and fixed." },
      { c: "Loophole resistance", d: "Survives an adversarial reading. No rule can be self-servingly reinterpreted to justify a trade the student wants." },
      { c: "Brevity", d: "Two pages maximum. Everything present changes a decision." }
    ],
    pitfalls: [
      "Writing a plan for the strategy that sounds most impressive rather than the one that fits their session. Check consistency against the Session Map explicitly.",
      "Rules containing 'strong', 'clean' or 'obvious' without definitions. These are the exact words that get reinterpreted under pressure.",
      "Adding a rule for every historical loss. Ask for the mechanism; if there is only evidence, cut the rule.",
      "Skipping the handover test because it feels awkward. It is the single most effective step in the lab — do not let it be skipped.",
      "Producing a plan longer than two pages. Length is a symptom of unresolved thinking, not thoroughness.",
      "Refusing to lock the plan for 30 trades. A plan modified after every loss can never be evaluated."
    ]
  },

  homework: [
    "Apply the plan to ten more historical instances and confirm that no new ambiguities appear.",
    "Read the plan aloud every morning before trading for a week.",
    "Log any occasion where you wanted to take a trade the plan did not allow, and write down which rule prevented it."
  ],

  quiz: [
    {
      q: "You can only trade during the Tokyo session. Which archetype fits best?",
      options: [
        "Breakout trading, since ranges must eventually break",
        "Mean reversion or range trading, because Tokyo conditions are typically orderly and range-bound",
        "Momentum continuation on the daily chart",
        "News trading"
      ],
      a: 1,
      why: "Tokyo generally produces compressed ranges with well-respected boundaries and limited follow-through — good conditions for fading extremes and poor conditions for breakouts. Forcing a breakout strategy into that session produces a long, expensive record of false breaks. Match the archetype to the conditions you can actually access."
    },
    {
      q: "Which of these is a properly specified entry trigger?",
      options: [
        "Enter when the trend looks strong",
        "Enter on an M15 bullish engulfing candle that closes above the demand zone high",
        "Enter when momentum builds",
        "Enter when several indicators align"
      ],
      a: 1,
      why: "The second option names the timeframe, the pattern, and the precise condition for validity — two people reading it would enter at the same moment. The others contain undefined subjective terms, which means the ambiguity gets resolved by whatever you feel at the time, and feelings are least reliable exactly when the trade matters most."
    },
    {
      q: "Why is the handover test the most valuable part of writing a plan?",
      options: [
        "It proves the strategy is profitable",
        "Because a second person applying the plan exposes every ambiguity — each disagreement is a place where you would have improvised",
        "It is required by regulators",
        "It speeds up backtesting"
      ],
      a: 1,
      why: "You cannot detect your own ambiguities, because you fill them in automatically with intent the words do not carry. Someone else reading the plan cold hits every gap. Note what the test does *not* do: it says nothing about whether the strategy makes money, only about whether it is a strategy at all."
    },
    {
      q: "Your backtest improved when you added a rule excluding Tuesday trades. What should you do?",
      options: [
        "Add the rule — the data supports it",
        "Reject it unless there is a mechanism explaining why Tuesdays would behave differently; otherwise it is overfitting to noise",
        "Add it but only for one instrument",
        "Test Wednesdays too"
      ],
      a: 1,
      why: "The test is reason versus evidence. 'No trading through rollover' has a mechanism — spreads widen measurably. 'No Tuesdays' has only a backtest result, which on limited data is very likely to be coincidence. Rules built on mechanisms generalise to future data; rules built on coincidences do not, and they make the historical curve look better while making live results worse."
    },
    {
      q: "Why should a trading plan be locked for a set number of trades before revision?",
      options: [
        "Because changing it is not allowed",
        "Because a plan modified after every loss generates no usable information — you can never tell whether the plan or the deviations produced the result",
        "Because brokers require consistency",
        "To reduce commission costs"
      ],
      a: 1,
      why: "Evaluation requires a stable thing to evaluate. If rules change mid-sample, the resulting record is a mixture of several different systems and tells you nothing about any of them. Committing to a fixed number of trades — 30 is a reasonable minimum — is what converts trading activity into data you can actually learn from."
    },
    {
      q: "What is the risk of adding partial exits and a trailing stop to a setup?",
      options: [
        "None — active management always improves results",
        "They reduce variance but often also reduce expectancy, so the trade-off must be measured rather than assumed",
        "They increase commission only",
        "They make the plan shorter"
      ],
      a: 1,
      why: "Cutting winners early caps the large outcomes that carry a trend-following edge, while doing nothing about the losers. That may still be worth it if the reduced variance keeps you following the plan — but it is a trade, not a free improvement. Measure results with and without management before committing to either."
    }
  ]
},

/* ============================= MODULE 12 ============================= */
{
  id: 12,
  title: "Testing, Journaling, Psychology and Automation",
  tagline: "Proving whether the plan works, learning from what it does, and deciding whether to automate it.",
  level: "Advanced",
  duration: "150 min",

  objectives: [
    "Backtest a plan honestly and recognise the biases that make backtests lie",
    "Run a structured forward test on demo and interpret the results",
    "Maintain a journal that produces actionable findings rather than a diary",
    "Identify their own dominant psychological failure mode and design a countermeasure",
    "Evaluate expert advisors and automation realistically"
  ],

  misconceptions: [
    "**\"My backtest was profitable, so the strategy works.\"** Backtests are riddled with hindsight, survivorship and optimisation bias. A profitable backtest is a reason to forward test, not a reason to fund an account.",
    "**\"Psychology is about staying positive.\"** It is about designing a process that does not require you to be at your best. Willpower is not a risk control.",
    "**\"An EA removes emotion.\"** It removes execution emotion and replaces it with intervention emotion — turning it off after a drawdown, tweaking parameters, restarting it after a run it missed.",
    "**\"I'll journal when I have something worth recording.\"** The value comes from the boring entries. A journal that only contains dramatic trades cannot show you a pattern."
  ],

  glossary: [
    { t: "Backtest", d: "Applying a strategy to historical data to estimate how it would have performed." },
    { t: "Forward test", d: "Running a strategy on live or demo data going forward, with no knowledge of the outcome." },
    { t: "Hindsight bias", d: "Seeing past charts as obvious because the outcome is visible. The main reason manual backtests flatter." },
    { t: "Bar replay", d: "Stepping through historical data one candle at a time so the future is hidden. The only honest way to backtest manually." },
    { t: "Optimisation", d: "Tuning parameters for best historical performance. Easily degenerates into curve fitting." },
    { t: "Out-of-sample", d: "Data deliberately held back from development, used to check whether a strategy generalises." },
    { t: "Maximum drawdown", d: "The largest peak-to-trough equity decline in a test. The number that determines whether the strategy is survivable." },
    { t: "Trading journal", d: "A structured record of every trade with both the mechanics and the reasoning." },
    { t: "Revenge trading", d: "Trading to recover a loss rather than because a setup exists." },
    { t: "FOMO", d: "Entering because a move is happening, without a setup." },
    { t: "Expert Advisor (EA)", d: "An automated program that executes a strategy inside MetaTrader." },
    { t: "Prop firm", d: "A company offering funded accounts after a paid evaluation, with strict drawdown rules." }
  ],

  slides: [
    {
      kicker: "Module 12 · Backtesting",
      title: "Why most backtests lie",
      bullets: [
        "**Hindsight bias** — the chart's future is visible, so every setup looks obvious and every failure looks avoidable.",
        "**Optimisation bias** — you adjust rules as you go, fitting the sample you are testing on.",
        "**Selection bias** — you test the period you remember, which is usually a trending one.",
        "**Survivorship in the process** — you skip the ambiguous instances and count the clean ones.",
        "**Cost omission** — spread, commission and swap left out entirely, which alone can flip the sign of the result.",
        "**A backtest that ignores these will show a profit for almost any strategy.**"
      ],
      note: "Ask whether the student has ever done a manual backtest by scrolling through history. Almost everyone has, and almost everyone found it profitable. This slide explains why that finding meant nothing."
    },
    {
      kicker: "Module 12 · Backtesting",
      title: "How to backtest honestly",
      bullets: [
        "**Use bar replay.** The future must be hidden. Scrolling through visible history is not testing.",
        "**Lock the rules before you start.** Any change means starting over on fresh data.",
        "**Log every instance where the filter and location conditions were met**, including the ones you skipped and why.",
        "**Include costs on every trade.** Spread, commission, and swap if held overnight.",
        "**Hold back a period as out-of-sample** — develop on one range, verify on another you have not looked at.",
        "**Minimum 100 trades**, across trending and ranging conditions."
      ],
      note: "The 'log the skipped instances' point is the one students resist most, and it is the one that reveals whether the rules are actually being followed. A large number of skips means the plan is not specific enough — send them back to Module 11."
    },
    {
      kicker: "Module 12 · Metrics",
      title: "What to measure, and in what order",
      bullets: [
        "**Maximum drawdown first.** If you could not have sat through it, nothing else matters.",
        "**Expectancy in R.** The edge per trade, costs included.",
        "**Number of trades.** Fewer than 100 and the result is noise.",
        "**Longest losing streak.** Can you follow the plan through it? Be honest.",
        "**Distribution of outcomes.** Did one enormous winner carry the whole result? If so, the edge may not be real.",
        "**Profit is the least informative number on this list.**"
      ],
      note: "Students look at total profit first and drawdown last. Reverse the order explicitly. A strategy making 40% with a 35% drawdown will not be followed by any real person through the drawdown."
    },
    {
      kicker: "Module 12 · Forward testing",
      title: "Forward testing on demo",
      bullets: [
        "The backtest says the rules had an edge historically. **The forward test says whether you can execute them.**",
        "Trade the plan on demo, in real time, at the real position sizes, for **at least 30 trades**.",
        "**Change nothing during the test.** A plan modified mid-test produces no information.",
        "Log every trade, including the ones you should have taken and did not.",
        "**Compare execution to the plan, not just the profit.** Following the rules and losing is a better outcome at this stage than breaking them and winning."
      ],
      note: "That last line is the most important sentence in the module. A student who profits by breaking their rules has learned that breaking rules works, which is far more expensive in the long run than an honest losing sample."
    },
    {
      kicker: "Module 12 · Journal",
      title: "A journal that produces findings",
      bullets: [
        "**Mechanics:** date, time, instrument, timeframe, direction, setup name, entry, stop, target, lots, risk %, result in R.",
        "**Reasoning:** why you took it, what the higher-timeframe context was, what you expected.",
        "**Compliance:** did you follow the plan — yes or no. **This column is the most valuable one in the journal.**",
        "**Screenshot:** the chart at entry, and again at exit.",
        "**One line of lesson.** Not 'be more patient' — something specific and testable.",
        "**Review weekly. A journal that is never analysed is a diary.**"
      ],
      note: "The compliance column is what turns a journal into a diagnostic tool. Sorting by it — comparing the expectancy of compliant trades against non-compliant ones — is the single most informative analysis a retail trader can run on their own data."
    },
    {
      kicker: "Module 12 · Journal",
      title: "The weekly review",
      bullets: [
        "**Expectancy of compliant trades versus non-compliant trades.** If compliant trades are better, the problem is discipline. If they are worse, the problem is the plan.",
        "**Which setup performed best?** Which is worth dropping?",
        "**Which session, which day, which conditions?**",
        "**What rule did I break most often?** That is next week's single focus.",
        "**One process change per week. Not five.**",
        "**Change the plan only on evidence from at least 30 trades — never after a single loss.**"
      ],
      note: "The compliant-versus-non-compliant comparison is the central diagnostic. It separates 'my plan is bad' from 'I am not following my plan', and those two problems have completely different solutions that students routinely confuse."
    },
    {
      kicker: "Module 12 · Psychology",
      title: "The five failure modes",
      bullets: [
        "**Revenge trading** — trading to recover a loss. Countermeasure: a hard daily stop, platform closed.",
        "**FOMO** — entering because a move is happening. Countermeasure: no entry without a written setup, no exceptions.",
        "**Cutting winners early** — taking 0.4R because it feels safe. Countermeasure: pre-set targets, no discretionary exits.",
        "**Letting losers run** — moving or removing a stop. Countermeasure: stop set at entry, never touched.",
        "**Over-trading in boredom** — trading because nothing is happening. Countermeasure: a maximum trades-per-day limit.",
        "**Every countermeasure is a rule, not an intention.**"
      ],
      note: "Have the student identify which of these is *theirs*. Most people know immediately. Then design the specific countermeasure together and write it into the plan. Naming the failure mode without a mechanical countermeasure changes nothing."
    },
    {
      kicker: "Module 12 · Psychology",
      title: "Design a process that survives a bad day",
      bullets: [
        "**Do not rely on discipline.** Discipline is a finite resource and it is lowest exactly when the market is hardest.",
        "**Automate what you can:** pre-set stops and targets, pending orders, alerts instead of screen-watching.",
        "**Make rule-breaking physically harder:** close the platform after the daily stop, use a pre-trade checklist you must complete.",
        "**Reduce decisions.** Every decision is an opportunity to decide badly.",
        "**Trade smaller when life is difficult.** Sleep, stress and illness measurably degrade decision quality.",
        "**The goal is a process that produces acceptable results on your worst day, not your best.**"
      ],
      note: "This reframe matters more than any specific technique. Students think of psychology as self-improvement; it is more usefully treated as system design under the constraint that the operator is unreliable."
    },
    {
      kicker: "Module 12 · Automation",
      title: "Expert advisors, honestly",
      bullets: [
        "**What they do well:** execute a mechanical rule set consistently, monitor markets while you sleep, remove hesitation.",
        "**What they cannot do:** adapt to a regime change, exercise judgement, or make a losing strategy profitable.",
        "**Most EAs sold to beginners are martingale or grid systems.** Their equity curves look perfect until they do not.",
        "**Always check maximum drawdown and whether it uses a stop loss on every position.** No stop means unlimited risk with a nice-looking curve.",
        "**A backtest supplied by a seller is a marketing document.** Test it yourself, on your own broker's data, forward, on demo.",
        "**If you cannot code the rules yourself, you do not understand them well enough to run them.**"
      ],
      note: "Be balanced but firm. Automation is genuinely valuable for mechanical strategies. The problem is almost never automation itself — it is automating an untested strategy, or buying an automated one whose rules are hidden."
    },
    {
      kicker: "Module 12 · Automation",
      title: "Prop firms and funded accounts",
      bullets: [
        "**The model:** pay a fee, pass an evaluation with profit targets and drawdown limits, trade the firm's capital for a profit share.",
        "**Legitimate for some traders** — it is a genuine route to trading larger size without personal capital at risk.",
        "**But:** the evaluation fee is revenue regardless of outcome, and pass rates are low.",
        "**Read the rules before paying:** daily drawdown, total drawdown, consistency requirements, news restrictions, minimum trading days.",
        "**Daily drawdown limits often force worse risk management**, not better — they punish normal variance.",
        "**Never fund a challenge with money you need. Never take one before you have 100 profitable forward-tested trades.**"
      ],
      note: "Students hear about prop firms constantly through advertising. Give them the framework rather than a verdict: it is a business with a fee, the rules are strict and often stricter than good risk management would require, and it is a step after competence rather than a substitute for it."
    },
    {
      kicker: "Module 12 · Wrap",
      title: "What happens after this course",
      bullets: [
        "**Backtest the plan honestly** — 100 trades with bar replay, costs included, out-of-sample checked.",
        "**Forward test on demo** — 30 trades minimum, plan unchanged, everything journaled.",
        "**Review weekly**, compare compliant against non-compliant, change one thing at a time.",
        "**Go live only if:** the forward test showed positive expectancy, compliance was above 90%, and you sat through the worst drawdown without breaking a rule.",
        "**Start live at the smallest size your broker allows**, for at least another 30 trades.",
        "**Nothing here promises profit. It gives you a process, and the ability to tell whether it is working.**"
      ],
      note: "End on the honest note the course started with. The deliverable is competence and a measurable process, not a guarantee. Students who understand that keep going after a losing month; students sold a promise quit or double down."
    }
  ],

  practical: {
    title: "Lab 12 — Backtest, journal system, and the go-live gate",
    time: "90 min",
    intro: "The final lab assembles everything into an ongoing practice. It does not finish in this session — it sets up the work the student will do for the next several months, and defines the specific conditions under which they may risk real money.",
    setup: [
      "**Trading Plan v1** from Lab 11",
      "TradingView bar replay, or the MT4/MT5 strategy tester in visual mode",
      "A spreadsheet named **Journal & Test**",
      "The **FX Calculator** and **Risk Engine**",
      "Any EA the student is considering, if applicable"
    ],
    steps: [
      { h: "Set up the backtest properly", d: "Choose a historical period the student has not studied in detail, spanning both trending and ranging conditions. Set replay to start there. Confirm the plan is locked and printed. Then close every other chart — the temptation to peek at the future is the main threat to validity." },
      { h: "Run 30 replay trades in session", d: "Step forward candle by candle. Log every instance where the filter and location conditions were met, whether or not the trigger fired, and record the outcome in R with costs deducted. Thirty in the session, with the remaining seventy set as homework." },
      { h: "Log the skips honestly", d: "Every time the student hesitates or skips a qualifying instance, record it with the reason. At the end, count them. A high skip count means the rules are ambiguous, and the fix is in the plan, not in the student." },
      { h: "Compute the metrics in the right order", d: "From the 30 trades: maximum drawdown first, then expectancy in R, then longest losing streak, then the outcome distribution. Only then look at total profit. Check specifically whether one outsized winner is carrying the result." },
      { h: "Build the journal template", d: "Create the full journal with mechanics, reasoning, compliance and screenshot columns, plus automatic calculations for running expectancy, compliance rate, and expectancy split by compliant versus non-compliant. The split calculation must be automatic — a manual one will not get done." },
      { h: "Backfill and analyse", d: "Enter the 30 replay trades into the journal. Run the compliant-versus-non-compliant comparison. Discuss what the result implies: better compliance means a discipline problem, worse means a plan problem." },
      { h: "Name the failure mode and design the countermeasure", d: "The student identifies which of the five psychological failure modes is most theirs, based on evidence from the journal rather than self-assessment. Then design one mechanical countermeasure and add it to the plan as a rule. It must be enforceable without willpower." },
      { h: "Evaluate an EA, if relevant", d: "If the student is considering one: check whether every position carries a stop loss, examine the maximum drawdown, look for martingale or grid behaviour in the position-sizing logic, and run it on demo on the student's own broker. Never on the seller's backtest." },
      { h: "Write the go-live gate", d: "The student writes the specific, numeric conditions under which they will trade real money: minimum forward-test trades, minimum expectancy, minimum compliance rate, maximum drawdown survived, and starting position size. Sign and date it alongside the risk policy." }
    ],
    deliverable: "A **Journal & Test** workbook containing: 30 in-session replay trades with full logs including skips and costs, metrics computed in the correct order, a complete journal template with automatic compliance-split analysis, a named psychological failure mode with a mechanical countermeasure added to the plan, an EA evaluation if applicable, and a signed, numeric go-live gate. Plus a homework commitment to complete 100 backtest trades and 30 forward-test trades.",
    rubric: [
      { c: "Test integrity", d: "Used bar replay with the future hidden. Rules locked before starting. Costs deducted on every trade. No mid-test rule changes." },
      { c: "Honest logging", d: "Recorded skipped and ambiguous instances as well as taken trades, and can state the skip count." },
      { c: "Metric priority", d: "Reported maximum drawdown and longest losing streak before profit, and checked whether one trade carried the result." },
      { c: "Journal design", d: "Compliance column present and the compliant-versus-non-compliant expectancy split calculates automatically." },
      { c: "Self-diagnosis", d: "Named a failure mode supported by journal evidence, with a countermeasure that is a mechanical rule rather than an intention." },
      { c: "Gate specificity", d: "Go-live conditions are numeric and verifiable. No condition reads 'when I feel ready'." }
    ],
    pitfalls: [
      "Scrolling through visible history instead of using replay. This invalidates everything — check the setup before they start.",
      "Adjusting a rule mid-test because it 'obviously should have been' different. Any change means restarting on fresh data.",
      "Omitting costs. A strategy with 0.15R expectancy before costs frequently has negative expectancy after them.",
      "Recording only the trades taken. The skipped instances are where the plan's ambiguity lives.",
      "Declaring success from 30 trades. It is a signal to continue, not a conclusion — 100 is the minimum for a real read.",
      "Writing a go-live gate that says 'when I'm consistently profitable'. Demand numbers: how many trades, what expectancy, what compliance rate.",
      "Buying an EA on the strength of a seller's backtest. If it has no stop loss on every position, the equity curve is meaningless."
    ]
  },

  homework: [
    "Complete the backtest to 100 trades using bar replay, with full logs and costs.",
    "Begin the 30-trade forward test on demo, journaling every trade including compliance.",
    "Run a weekly review every week: compliant versus non-compliant expectancy, most-broken rule, and one process change.",
    "Do not trade real money until every condition in the signed go-live gate has been met."
  ],

  quiz: [
    {
      q: "You scroll back through historical charts and find your strategy would have been highly profitable. What is wrong with this?",
      options: [
        "Nothing — historical testing is how strategies are validated",
        "The future was visible, so hindsight made setups look obvious and failures look avoidable — this is not a test, it is a retelling",
        "The period was too short",
        "You should have used a higher timeframe"
      ],
      a: 1,
      why: "With the outcome visible, you unconsciously select the instances that worked and skip the ambiguous ones, and every failed setup looks like something you would have avoided. Bar replay, with the future hidden and the rules locked beforehand, is the only manual method that produces information rather than reassurance."
    },
    {
      q: "Which metric should you examine first when evaluating a test?",
      options: ["Total profit", "Win rate", "Maximum drawdown", "Number of winning months"],
      a: 2,
      why: "If you could not have sat through the drawdown, the strategy is unusable regardless of its profit — you would have abandoned it at the worst point. Drawdown determines survivability, and survivability is the precondition for every other number mattering. Profit is the least informative figure in a test."
    },
    {
      q: "Your journal shows compliant trades have +0.3R expectancy and non-compliant trades −0.8R. What does this tell you?",
      options: [
        "The plan is broken and needs rewriting",
        "The plan has an edge and the problem is execution discipline — the fix is countermeasures, not new rules",
        "You need more indicators",
        "The sample is meaningless"
      ],
      a: 1,
      why: "This split is the most useful analysis in a trading journal because it separates two problems that look identical from the inside. Compliant trades performing better means the rules work and the deviations are costing money; the response is mechanical countermeasures against the specific rule being broken, not redesigning a plan that is already working."
    },
    {
      q: "What is the biggest risk of relying on discipline to follow your rules?",
      options: [
        "Discipline is unnecessary if the strategy is good",
        "Willpower is finite and degrades under stress, fatigue and loss — precisely the conditions where following the rules matters most",
        "Discipline slows down execution",
        "It makes journaling harder"
      ],
      a: 1,
      why: "Relying on being at your best means your risk control fails exactly when it is needed. The alternative is design: pre-set stops and targets, pending orders, hard daily stops that close the platform, checklists that must be completed. Make the correct action the default and the incorrect one physically harder."
    },
    {
      q: "An EA's backtest shows a smooth rising equity curve with a tiny drawdown. What should you check first?",
      options: [
        "The colour scheme of the report",
        "Whether every position carries a stop loss — a martingale or grid system with no stop produces exactly this curve until the sequence that ends it",
        "The number of trades per day",
        "Whether it works on other instruments"
      ],
      a: 1,
      why: "A suspiciously smooth curve is the signature of a system that never realises losses — it adds to losers and waits for a return instead. That works for a long time and then removes the account in one sequence. Check for stops on every position and examine the position-sizing logic before anything else; the historical curve tells you nothing about the event that has not happened yet."
    },
    {
      q: "What is a valid condition for moving from demo to live trading?",
      options: [
        "Feeling confident and ready",
        "A minimum number of forward-test trades with positive expectancy, a compliance rate above a stated threshold, and having sat through the worst drawdown without breaking a rule",
        "Having enough money to fund an account",
        "Completing this course"
      ],
      a: 1,
      why: "A go-live gate must be numeric and verifiable, because 'feeling ready' is exactly the judgement that trading conditions distort. The compliance requirement matters as much as the expectancy one — a profitable forward test achieved by breaking rules has taught you that breaking rules works, which is far more expensive later than an honest losing sample now."
    }
  ]
}

]);
