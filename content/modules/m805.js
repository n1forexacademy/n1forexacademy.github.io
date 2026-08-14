/* N1 Forex Academy — Module 805 (Automation track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 805 ============================ */
{
  id: 805,
  track: 'automation',
  title: "Testing It Honestly",
  tagline: "The strategy tester will tell you almost anything you want to hear. Module 12's biases, plus the ones automation adds.",
  level: "Automation",
  duration: "95 min",

  objectives: [
    "Configure a backtest whose result means something",
    "Explain modelling quality, spread assumptions and why defaults flatter",
    "Explain why optimisation is the fastest route to curve fitting ever invented",
    "Run a walk-forward test and read what it tells you",
    "Decide whether a result is evidence or decoration"
  ],

  misconceptions: [
    "**\"The tester removes hindsight bias.\"** It removes the manual kind. It adds several of its own — modelling quality, optimistic fills, a fixed spread and perfect execution.",
    "**\"Optimisation finds the best settings.\"** It finds the settings that best fit the past. Module 11 called that overfitting; automation lets you do it ten thousand times in an afternoon.",
    "**\"A 95% win rate proves it works.\"** It usually proves the exit logic never realises losses. Check drawdown and the trade list before the profit figure.",
    "**\"More data is always better.\"** Testing over a decade that includes regimes your strategy was never designed for produces an average that describes nothing."
  ],

  glossary: [
    { t: "Modelling quality", d: "How faithfully the tester reconstructed price movement inside each bar. Low quality means invented ticks." },
    { t: "Every tick / real ticks", d: "The most faithful modelling modes. Slower, and the only ones worth trusting for intrabar logic." },
    { t: "Optimisation", d: "Automatically testing many parameter combinations to find the best historical result." },
    { t: "Overfitting", d: "Settings tuned so closely to past data that they describe noise rather than behaviour." },
    { t: "In-sample / out-of-sample", d: "Data used to develop, versus data deliberately held back to check the result generalises." },
    { t: "Walk-forward", d: "Optimise on a window, test on the next, roll forward. The closest a backtest gets to honest." },
    { t: "Parameter surface", d: "Results plotted across settings. A broad plateau is robust; a lone spike is a fluke." },
    { t: "Slippage model", d: "What the tester assumes about fills. Usually generous, and always better than reality." }
  ],

  slides: [
    { kicker: "Setup",
      title: "The defaults flatter you",
      bullets: [
        "**Modelling quality matters most.** Low-quality modelling invents price movement inside each bar, so any intrabar logic is being tested against fiction.",
        "**Use every-tick or real-tick modelling** for anything that reacts within a bar. It is slower and it is the only honest option.",
        "**Set the spread realistically**, and remember it widens — Module 5. A fixed tight spread is a gift the tester gives you and the market does not.",
        "**Include commission and swap.** Omitting them can flip the sign of the result, as Module 12 said.",
        "**A test with default settings is a demonstration, not evidence.**"
      ],
      note: "Students run one test on defaults, see a profit, and stop. Making them re-run the same strategy with honest settings — and watch the result change — is the most persuasive minute in the module." },

    { kicker: "Optimisation",
      title: "The fastest way ever invented to fool yourself",
      bullets: [
        "The optimiser will try thousands of parameter combinations and report the best.",
        "**The best result on past data is, almost by definition, the one most fitted to that data's noise.**",
        "Module 11 warned about adding rules until history fits. **Automation lets you do it ten thousand times before lunch.**",
        "**Look at the parameter surface, not the winning row.** A broad plateau where many nearby settings all work is a real effect.",
        "**A single towering spike surrounded by losses is a fluke** — and it is exactly what the optimiser hands you at the top of the list.",
        "**Prefer a good result in a wide plateau over a spectacular one on a spike.** Always."
      ],
      note: "The plateau-versus-spike image is the most transferable idea in the module. It gives students a visual test for robustness that survives long after the specific tool is forgotten." },

    { kicker: "Walk-forward",
      title: "Optimise here, test there, roll forward",
      bullets: [
        "**Optimise on one window. Test on the next window, untouched.** Then roll both forward and repeat.",
        "The out-of-sample results are the ones that matter. **The in-sample results are the ones you fitted.**",
        "**If out-of-sample performance collapses, you optimised noise.** That is the whole test, and it is unambiguous.",
        "It is slower and less flattering than a single optimisation. **That is why it is worth doing.**",
        "**This is Module 12's out-of-sample rule, mechanised.**"
      ],
      note: "Walk-forward is the single most valuable technique in automated testing and the one students skip because it takes longer and produces worse numbers. Both of those are the point." },

    { kicker: "Reading it",
      title: "What to look at, in order",
      bullets: [
        "**Maximum drawdown first.** Module 12, unchanged — if you could not have sat through it, nothing else matters.",
        "**Then the trade list.** Read actual trades. A 95% win rate with occasional enormous losses is visible in seconds and invisible in a summary.",
        "**Then the number of trades.** Under 100 is noise, however good it looks.",
        "**Then the distribution.** One monstrous winner carrying the whole result is not an edge.",
        "**Profit is still the least informative number on the report**, and still the one everybody reads first."
      ],
      note: "Identical ordering to Module 12, deliberately. The addition is 'read the actual trade list', which catches martingale-like exit logic that no summary statistic reveals." },

    { kicker: "Recap",
      title: "What you can now judge",
      bullets: [
        "How to configure a test whose result means something",
        "Why modelling quality, spread and costs decide whether a backtest is fiction",
        "Why the optimiser's top row is usually the least trustworthy line on it",
        "How to run walk-forward, and what a collapse out-of-sample proves",
        "What to read on a report, in what order, and why profit comes last"
      ],
      note: "Module 806 covers what only exists live: disconnections, restarts, broker behaviour and the failure modes no backtest can produce." }
  ],

  practical: {
    title: "Test the same strategy three ways",
    time: "70 min",
    intro: "One EA, three tests, three different stories. The point is to watch a result change while the strategy does not.",
    setup: [
      "Your EA from Module 804, with correct sizing.",
      "The strategy tester and at least a year of data."
    ],
    steps: [
      { h: "Test on defaults", d: "Run it with the tester's default settings. Record net profit, maximum drawdown and trade count. Do not adjust anything yet." },
      { h: "Test honestly", d: "Re-run with every-tick modelling, a realistic spread, commission and swap included. Record the same three numbers and note how much changed." },
      { h: "Optimise, then look properly", d: "Optimise one parameter across a wide range. Plot the results. Identify whether the best value sits on a plateau or a spike, and say which." },
      { h: "Walk forward", d: "Optimise on the first six months, test on the next three untouched. Roll forward twice more. Record in-sample and out-of-sample results side by side." },
      { h: "Read the trades", d: "Open the trade list from the honest test and read fifty actual trades. Note anything the summary did not tell you." }
    ],
    deliverable: "Three result sets side by side, a parameter surface with plateau-or-spike identified, walk-forward in-sample against out-of-sample, and at least one observation from reading the trade list that no summary showed.",
    rubric: [
      { c: "The gap quantified", d: "States how much the result changed between default and honest settings." },
      { c: "Surface read", d: "Judges plateau versus spike from the shape, not from the top row of the table." },
      { c: "Walk-forward honest", d: "Out-of-sample windows genuinely untouched during optimisation." },
      { c: "Trades read", d: "At least one finding that came from the trade list rather than the summary." },
      { c: "Verdict", d: "States plainly whether this is evidence or decoration." }
    ],
    pitfalls: [
      "Optimising on all the data and then 'testing' on part of it, which is not out-of-sample.",
      "Reporting the optimiser's best row without looking at its neighbours.",
      "Skipping the trade list, where exit-logic problems are obvious and summary-invisible.",
      "Concluding a strategy works because the honest test was still profitable, on 40 trades."
    ]
  },

  homework: [
    "Take your best optimisation result and change each parameter by 20% either way. Record whether performance survives, and write one sentence on what that tells you.",
    "Find the difference in net profit between your default-settings test and your honest test, as a percentage. Write down which assumptions caused most of it.",
    "Read fifty trades from your test and write two sentences on anything that surprised you."
  ],

  quiz: [
    { q: "Why does modelling quality matter in a backtest?",
      options: [
        "It affects how fast the test runs",
        "Low quality invents price movement inside each bar, so any intrabar logic is tested against fiction",
        "It changes the spread",
        "It only matters for scalping"
      ], a: 1,
      why: "If your EA reacts within a bar and the tester made that bar's internal movement up, the result describes invented data rather than the market." },

    { q: "The optimiser reports a spectacular result at one specific parameter value, with losses on either side. This is:",
      options: [
        "The optimal setting to use",
        "A fluke fitted to noise — prefer a good result on a broad plateau over a spectacular one on a spike",
        "Evidence of a strong edge",
        "A sign to optimise more finely"
      ], a: 1,
      why: "A real effect survives a nudge, which is Module 11's robustness test. A lone spike is the shape of curve fitting, and it is exactly what the optimiser puts at the top of the list." },

    { q: "What does a walk-forward test actually prove?",
      options: [
        "That the strategy is profitable",
        "Whether performance survives on data that was not used to choose the settings",
        "That the parameters are optimal",
        "That the modelling quality was adequate"
      ], a: 1,
      why: "In-sample results are the ones you fitted. If out-of-sample performance collapses, you optimised noise — and that verdict is unambiguous." },

    { q: "Which should you read first on a backtest report?",
      options: ["Net profit", "Maximum drawdown", "Win rate", "Profit factor"],
      a: 1,
      why: "Module 12, unchanged. If you could not have sat through the drawdown, the strategy is unusable regardless of what it made — you would have abandoned it at the worst point." },

    { q: "A test shows a 95% win rate and a healthy profit. What should you check?",
      options: [
        "Nothing — it is clearly working",
        "The actual trade list, because that win rate usually means losses are not being realised",
        "Whether to increase the lot size",
        "The commission setting only"
      ], a: 1,
      why: "Martingale-like exit logic produces exactly that profile, and no summary statistic reveals it. Fifty trades read by eye will." }
  ]
}

]);
