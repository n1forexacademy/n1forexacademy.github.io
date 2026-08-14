/* N1 Forex Academy — Module 802 (Automation track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 802 ============================ */
{
  id: 802,
  track: 'automation',
  title: "The Three Functions That Matter",
  tagline: "MQL is a large language and you need a small corner of it. This is that corner.",
  level: "Automation",
  duration: "90 min",

  objectives: [
    "Describe what OnInit, OnTick and OnDeinit are for and when each runs",
    "Explain why OnTick running on every price update shapes everything you write",
    "Read and write the handful of MQL types and calls an EA actually needs",
    "Use input parameters so settings are changeable without editing code",
    "Compile an empty EA, attach it to a chart, and see it run"
  ],

  misconceptions: [
    "**\"I need to learn the whole language.\"** You need about fifteen constructs. An EA is mostly `if` statements, arithmetic and half a dozen platform calls.",
    "**\"OnTick runs once per candle.\"** It runs on every price update — potentially many times a second. Anything that should happen once per bar needs guarding, or it happens hundreds of times.",
    "**\"I can hard-code my settings.\"** Then changing a stop distance means recompiling, and the strategy tester cannot vary it. Use `input` and the settings appear in a dialogue.",
    "**\"MQL4 and MQL5 are basically the same.\"** Similar syntax, genuinely different order-handling APIs. Pick one platform and stay on it while learning."
  ],

  glossary: [
    { t: "OnInit()", d: "Runs once when the EA is attached or the terminal restarts. Validate settings here." },
    { t: "OnTick()", d: "Runs on every price update. The main loop of the EA, and where most mistakes live." },
    { t: "OnDeinit()", d: "Runs once when the EA is removed or the terminal closes. Clean up here." },
    { t: "input", d: "A variable the user can set in the EA's dialogue without touching code." },
    { t: "_Symbol", d: "The instrument the EA is attached to. Never hard-code a symbol name." },
    { t: "_Point", d: "The smallest price increment for this symbol. Used to convert points into price." },
    { t: "Bars / iTime", d: "Access to historical bars, used to detect that a new bar has formed." },
    { t: "Print / Comment", d: "Write to the log, or to the chart. Your only real debugging tools." },
    { t: "Compile", d: "Turning source into a runnable EA. Errors here are cheaper than errors live." },
    { t: "Journal / Experts tab", d: "Where MetaTrader shows what your EA said and did. Read it constantly." }
  ],

  slides: [
    { kicker: "Structure",
      title: "Three functions, three moments",
      bullets: [
        "**`OnInit()`** — once, when the EA starts. Check the settings make sense; refuse to run if they do not.",
        "**`OnTick()`** — every time the price updates. **This is the whole EA.** Everything else is support.",
        "**`OnDeinit()`** — once, when the EA is removed. Tidy up anything you drew or opened.",
        "That is the skeleton. **An EA with those three functions and nothing else compiles and runs.**",
        "**Start there.** Attach an empty one to a chart and watch the Experts tab before writing a single rule."
      ],
      note: "Insist on compiling and attaching an empty EA before any logic. It removes an entire class of confusion later — when nothing happens, the student already knows the plumbing works." },

    { kicker: "The main loop",
      title: "OnTick runs far more often than you think",
      bullets: [
        "It fires on **every price update** — many times a second in an active market.",
        "**Everything you write inside it happens at that rate**, unless you stop it.",
        "So a rule like *\"if price is above the moving average, buy\"* does not buy once. **It buys, and buys, and buys.**",
        "Two guards fix almost everything: **only act once per bar**, and **check whether a position is already open**.",
        "**Most beginner EA disasters are one missing guard**, not a flawed strategy."
      ],
      note: "This is the single most valuable slide in the module. The new-bar guard and the already-open check between them prevent the majority of first-EA catastrophes, and both are three lines." },

    { kicker: "Inputs",
      title: "Settings belong in a dialogue, not in the code",
      bullets: [
        "An `input` variable appears in the EA's settings window when a user attaches it.",
        "**Change a stop distance without recompiling.** Test three risk levels without editing anything.",
        "**The strategy tester can only vary inputs**, so hard-coded numbers cannot be optimised — or checked for robustness, which matters more.",
        "**Give them honest names and sane defaults.** `RiskPercent = 1.0` beats `x = 1`.",
        "**Validate them in `OnInit()`** and refuse to start on nonsense. An EA that runs with `RiskPercent = 50` will do exactly that."
      ],
      note: "The robustness link back to Module 11 is worth making: inputs are what let a student nudge a parameter by 20% and check the result does not collapse. Hard-coded values quietly prevent the most important test." },

    { kicker: "The small corner",
      title: "What you actually need to know",
      bullets: [
        "**Types:** `int`, `double`, `bool`, `string`, `datetime`. That is enough.",
        "**Control:** `if`, `else`, `return`. Loops occasionally. That is enough.",
        "**Symbol facts:** `_Symbol`, `_Point`, `_Digits` — never hard-code the instrument or the tick size.",
        "**Prices:** `SymbolInfoDouble()` for bid and ask, `iClose`/`iHigh`/`iLow` for history.",
        "**Output:** `Print()` to the log, `Comment()` to the chart corner. **These are your debugger.**",
        "**That is the corner of MQL an EA lives in.** Everything else can be looked up when needed."
      ],
      note: "Students expect to learn a language and are relieved to be given a list of fifteen things. Keeping the surface small is what makes the track feel like translation rather than a computing course." },

    { kicker: "Recap",
      title: "What you can now do",
      bullets: [
        "Name the three functions and say when each runs",
        "Explain why OnTick's frequency shapes everything, and name the two guards",
        "Use `input` so settings are changeable and testable",
        "Recognise the small set of MQL an EA actually needs",
        "Compile an empty EA, attach it, and read the Experts tab"
      ],
      note: "Module 803 does the translation proper — the five components of the student's own setup, one at a time. This module exists so that nothing in 803 is about the language." }
  ],

  practical: {
    title: "Compile an empty EA and watch it breathe",
    time: "45 min",
    intro: "Before any trading logic, prove the plumbing works. Everything in this lab is about seeing your own code run.",
    setup: [
      "MetaTrader with MetaEditor (F4 opens it), and a demo account attached.",
      "A chart on any instrument you follow."
    ],
    steps: [
      { h: "Create and compile", d: "New → Expert Advisor. Give it a name, accept the skeleton, compile it. Fix any errors before continuing — a clean compile is the baseline." },
      { h: "Attach and observe", d: "Drag it onto a chart. Enable AutoTrading. Confirm the smiley face appears in the corner and the Experts tab shows it initialising." },
      { h: "Make it speak", d: "Add a `Print()` in OnInit and a `Comment()` in OnTick showing the current bid. Recompile, reattach, and watch both appear." },
      { h: "Count the ticks", d: "Add a counter that increments in OnTick and shows in the Comment. Watch it for two minutes and record roughly how many ticks arrive." },
      { h: "Add the new-bar guard", d: "Print a line only when a new bar forms. Compare that count against the tick count from the previous step, and write down the ratio." }
    ],
    deliverable: "A compiling EA that prints on init, comments the live bid and a tick counter, and prints once per new bar — plus the recorded tick count and the ratio between ticks and bars.",
    rubric: [
      { c: "Clean compile", d: "No errors, no warnings left unexplained." },
      { c: "It runs", d: "Experts tab shows initialisation and the chart shows the comment updating." },
      { c: "The ratio", d: "Records an actual measured tick-to-bar ratio rather than guessing it." },
      { c: "New-bar guard", d: "Fires exactly once per bar, demonstrated by the log." }
    ],
    pitfalls: [
      "Forgetting to enable AutoTrading, then debugging code that was never allowed to run.",
      "Testing on a market that is closed, where no ticks arrive at all.",
      "Putting Print() inside OnTick without a guard and flooding the log.",
      "Skipping the ratio measurement, which is the whole point of the lab."
    ]
  },

  homework: [
    "Record how many ticks arrive per minute on two different instruments, one liquid and one thin, and write a sentence on what that implies for anything you put in OnTick.",
    "Add three input parameters to your empty EA with sensible defaults, and validate one of them in OnInit so the EA refuses to start on a bad value.",
    "Find the Experts and Journal tabs in your terminal and write down the difference between what each one shows."
  ],

  quiz: [
    { q: "How often does OnTick() run?",
      options: [
        "Once per bar",
        "On every price update — potentially many times a second",
        "Once per minute",
        "Only when you have an open position"
      ], a: 1,
      why: "This shapes everything you write. A rule with no guard does not act once; it acts on every tick, which is how a first EA opens forty positions in a minute." },

    { q: "Your EA opens a position every tick while the condition holds. The fix is:",
      options: [
        "Slow the computer down",
        "Guards — act only once per new bar, and check whether a position is already open",
        "Use a bigger timeframe chart",
        "Reduce the lot size"
      ], a: 1,
      why: "Most beginner EA disasters are one missing guard rather than a flawed strategy. Both guards are about three lines each." },

    { q: "Why put settings in `input` variables rather than hard-coding them?",
      options: [
        "It runs faster",
        "They can be changed without recompiling, and the strategy tester can only vary inputs — so hard-coded values cannot be robustness-checked",
        "MQL requires it",
        "It reduces file size"
      ], a: 1,
      why: "The robustness test from Module 11 — nudge a parameter 20% and see whether results collapse — is impossible on a hard-coded number. That is the real cost, more than the convenience." },

    { q: "Which function should refuse to let the EA start on nonsense settings?",
      options: ["OnTick()", "OnInit()", "OnDeinit()", "Any of them"],
      a: 1,
      why: "OnInit runs once at startup and can return a failure code. An EA that happily starts with RiskPercent = 50 will trade at 50%." },

    { q: "Before writing any trading logic you should:",
      options: [
        "Learn the full MQL language",
        "Compile an empty EA, attach it, and confirm it initialises and receives ticks",
        "Buy a VPS",
        "Optimise the parameters"
      ], a: 1,
      why: "It removes an entire class of confusion later. When nothing happens, you already know the plumbing works and the problem is in your logic." }
  ]
}

]);
