/* N1 Forex Academy — Module 801 (Automation track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 801 ============================ */
{
  id: 801,
  track: 'automation',
  title: "What an EA Actually Is",
  tagline: "An execution engine, not a strategy. It will follow your rules perfectly, including the wrong ones.",
  level: "Automation",
  duration: "70 min",

  objectives: [
    "Say what an EA does and, more importantly, what it cannot do",
    "Explain why automating a losing plan produces losses faster rather than profits",
    "Identify which parts of your written plan can be automated and which cannot",
    "Explain why most EAs sold to beginners have the same equity curve",
    "Decide honestly whether your own plan is ready to be coded"
  ],

  misconceptions: [
    "**\"An EA finds trades for me.\"** It executes rules you gave it. Every decision it makes is one you already made, in advance, in writing. If you have no rules, you have nothing to automate.",
    "**\"Automation removes emotion.\"** It removes emotion from *execution*. It does nothing about the emotion that switches the EA off after three losses, or the emotion that tinkers with the settings on a Sunday night.",
    "**\"A profitable EA is a machine that prints money.\"** It is a machine that repeats one decision endlessly. If the decision has a small edge, it repeats a small edge. If it has none, it repeats that faster than you ever could by hand.",
    "**\"I need to learn programming first.\"** You need to learn *translation*. The hard work was Module 11 — five components, written precisely enough that another person could follow them. Code is the easy half."
  ],

  glossary: [
    { t: "Expert Advisor (EA)", d: "A program that runs inside MetaTrader and can place, modify and close orders automatically." },
    { t: "MQL", d: "The language EAs are written in. MQL4 for MT4, MQL5 for MT5. C-like, and you need a small subset of it." },
    { t: "Terminal", d: "The MetaTrader application. Your EA runs inside it, so it only runs while the terminal is running." },
    { t: "Tick", d: "One price update. An EA's main function runs once per tick, which is the beat everything else hangs off." },
    { t: "Backtest", d: "Running the EA over historical data to see how the rules would have behaved." },
    { t: "Optimisation", d: "Automatically trying many parameter combinations. Powerful, and the fastest route to curve fitting." },
    { t: "Magic number", d: "An identifier stamped on every order the EA places, so it can tell its own trades from yours." },
    { t: "Semi-automation", d: "The EA watches and alerts; you decide. Frequently the right answer, and rarely the one people want." },
    { t: "Execution engine", d: "The honest description of what an EA is: something that carries out decisions already made." }
  ],

  slides: [
    { kicker: "The instrument",
      title: "It carries out decisions, it does not make them",
      bullets: [
        "An EA is a program running inside MetaTrader that can **place, modify and close orders** without you.",
        "**Every decision it makes is one you already made**, in advance, in writing.",
        "It is a very fast, very obedient, completely literal assistant. **It will do exactly what you said**, including when what you said was wrong.",
        "**It does not find opportunities.** It applies a test you defined to data as it arrives.",
        "**The honest word is execution engine.** Everything that follows in this track depends on accepting that."
      ],
      note: "Students arrive wanting a machine that finds trades. Establishing 'execution engine' in the first five minutes reframes the whole track: they are not building an oracle, they are building a very literal employee." },

    { kicker: "The multiplier",
      title: "Automation multiplies whatever you already had",
      bullets: [
        "**A plan with a small edge, automated, repeats a small edge** — reliably, without tiring, without hesitating.",
        "**A plan with no edge, automated, loses faster than you could by hand.** That is the whole of it.",
        "Automation improves **consistency**, **speed** and **availability**. It improves **nothing else**.",
        "It cannot make a bad entry good. It cannot make an unsized position safe. **It cannot supply an edge that was never there.**",
        "**So the honest prerequisite is Module 12's forward test.** If your plan is not producing acceptable results manually, coding it changes only the rate."
      ],
      note: "This is the module's central argument and it must land before any code appears. Students who skip it write a technically correct EA around an untested idea and conclude that automation does not work." },

    { kicker: "What can be automated",
      title: "Not every rule survives translation",
      bullets: [
        "**Automates cleanly:** a moving average cross, a candle close beyond a level, a stop at a computed distance, a position size from a formula, a time-of-day filter.",
        "**Automates with effort:** structure, swing highs and lows, a level you would have drawn — all definable, and only if your definition is genuinely mechanical.",
        "**Does not automate:** \"the chart looks strong\", \"the news feels risky\", \"I do not like this one\".",
        "**That last category is a finding, not a failure.** It tells you exactly which part of your plan was never a rule.",
        "**Trying to code your plan is the strictest test of Module 11's specificity check** — the compiler is a more honest reviewer than a friend."
      ],
      note: "This is the most useful slide for a student who never writes an EA. Attempting the translation exposes vagueness that survives every other review, because a human reader fills gaps automatically and a compiler does not." },

    { kicker: "Honesty",
      title: "Why most EAs sold to beginners look identical",
      bullets: [
        "A smooth rising equity curve with almost no drawdown is **not evidence of skill**. It is the signature of a system that does not realise losses.",
        "**Martingale and grid** produce exactly that shape — many small wins, then one sequence that takes everything. Module 10, in a costume.",
        "**Check first whether every position carries a stop.** No stop means unlimited risk with a beautiful chart.",
        "**A seller's backtest is a marketing document.** Test it yourself, forward, on demo, on your own broker's data.",
        "**And if you cannot read the code, you cannot know what it does.** Which is the real argument for writing your own."
      ],
      note: "Module 12 made this point about buying EAs; here it becomes the argument for building. A student who can read MQL can inspect any EA they are offered, which is worth the track on its own." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "That an EA executes decisions rather than making them",
        "Why automation multiplies an existing edge and manufactures none",
        "Which of your own rules can be automated, and which were never rules",
        "Why a suspiciously smooth equity curve usually means unrealised losses",
        "Whether your plan is actually ready — and what to do if it is not"
      ],
      note: "Before Module 802, have the student mark up their own written plan: green for mechanical, amber for definable with work, red for judgement. The red lines are the syllabus for the rest of the track." }
  ],

  practical: {
    title: "Traffic-light your own plan",
    time: "35 min",
    intro: "Before writing a line of code, find out how much of your plan is actually code-able. This is the strictest specificity test in the course.",
    setup: [
      "Bring the written plan from Module 11 and its five components per setup.",
      "You need no software for this lab."
    ],
    steps: [
      { h: "Split into single instructions", d: "Rewrite your plan as a numbered list of individual instructions. One decision per line, no compound sentences." },
      { h: "Traffic-light each line", d: "GREEN: a computer could evaluate this with no interpretation. AMBER: definable, but you would have to decide exactly what you mean. RED: requires judgement." },
      { h: "Define one amber line", d: "Take a single amber line and write the precise rule that would make it green. Note how many decisions you had to make that your plan never stated." },
      { h: "Interrogate the reds", d: "For each red line, answer honestly: is this genuine judgement worth keeping a human for, or is it vagueness you never noticed?" },
      { h: "Score it", d: "Count each colour. State what percentage of your plan is currently automatable, and whether that is enough to be worth coding." }
    ],
    deliverable: "Your plan as numbered single instructions, each traffic-lighted, one amber line fully specified, an honest verdict on each red, and a percentage.",
    rubric: [
      { c: "Genuinely atomic", d: "Lines are single instructions, not paragraphs with several decisions hidden inside." },
      { c: "Honest ambers", d: "The specified amber line exposes decisions the original plan left unstated." },
      { c: "Reds examined", d: "Each red is judged as real judgement or as vagueness, rather than all being excused as intuition." },
      { c: "Conclusion", d: "States plainly whether the plan is ready to code, including 'not yet' where that is true." }
    ],
    pitfalls: [
      "Marking lines green that contain a hidden decision — 'enter at support' names no level.",
      "Calling everything red to avoid the work; almost every plan is more mechanical than it feels.",
      "Skipping the amber specification, which is where the lab's value sits.",
      "Concluding you are ready when the forward test from Module 12 has not been done."
    ]
  },

  homework: [
    "Find one EA advertised online and write two sentences on what its equity curve shape suggests about whether it uses stops.",
    "Take the reddest line in your plan and write one paragraph on whether a human is genuinely required, or whether you have simply never defined it.",
    "Write down the result of your Module 12 forward test. If you have not run one, write that instead — it is the honest answer and it decides whether this track is premature."
  ],

  quiz: [
    { q: "An EA is best described as:",
      options: [
        "A program that finds profitable trades",
        "An execution engine that carries out decisions you already made in writing",
        "A way to remove risk from trading",
        "A replacement for a trading plan"
      ], a: 1,
      why: "Every decision it makes is one you made in advance. It does not find opportunities; it applies a test you defined to data as it arrives." },

    { q: "You automate a plan that loses money manually. What happens?",
      options: [
        "It becomes profitable, because emotion is removed",
        "It loses money faster and more consistently",
        "Results are unpredictable",
        "The EA refuses to trade"
      ], a: 1,
      why: "Automation improves consistency, speed and availability. It supplies no edge. A plan with none, repeated reliably, produces losses reliably." },

    { q: "A line in your plan says \"enter when the trend looks strong\". In an EA this is:",
      options: [
        "Easily coded with an indicator",
        "Not yet a rule — the attempt to code it exposes vagueness a human reader would have filled in automatically",
        "Best left to the EA's discretion",
        "Handled by the optimiser"
      ], a: 1,
      why: "The compiler is a more honest reviewer than a friend, because a person reads that sentence and quietly supplies a meaning. This is Module 11's specificity test, enforced." },

    { q: "An EA's advertised equity curve rises smoothly with almost no drawdown. Check first:",
      options: [
        "How many trades per day it makes",
        "Whether every position carries a stop loss — martingale and grid systems produce exactly that shape until the sequence that ends them",
        "Which broker it was tested on",
        "The number of parameters"
      ], a: 1,
      why: "A suspiciously smooth curve is the signature of a system that never realises losses. It is Module 10's return shape, wearing a different costume." },

    { q: "Which is the honest prerequisite before coding your plan?",
      options: [
        "Learning MQL properly first",
        "A completed forward test showing the plan produces acceptable results manually",
        "Buying a VPS",
        "Having at least three setups"
      ], a: 1,
      why: "Coding an untested plan changes the rate at which you find out, not the answer. Module 12's forward test is what tells you there is something worth automating." }
  ]
}

]);
