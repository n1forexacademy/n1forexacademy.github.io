/* N1 Forex Academy — Module 11. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

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
}

]);
