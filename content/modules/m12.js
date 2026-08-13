/* N1 Forex Academy — Module 12. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 12 ============================= */
{
  id: 12,
  title: "Testing, Journaling, Psychology and Automation",
  tagline: "Proving whether the plan works, learning from what it does, and deciding whether to automate it.",
  level: "Advanced",
  duration: "150 min",

  objectives: [
    "Test a plan against history honestly, and spot the habits that make such tests flatter you",
    "Run a proper demo test going forward, and understand what its results are telling you",
    "Keep a journal that produces findings you can act on, rather than a diary",
    "Work out which way you personally tend to break under pressure, and build a guard against it",
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
