/* N1 Forex Academy — Module 803 (Automation track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 803 ============================ */
{
  id: 803,
  track: 'automation',
  title: "Translating Your Setup Into Code",
  tagline: "The five components you wrote in Module 11 become five functions. This is translation, not invention.",
  level: "Automation",
  duration: "100 min",

  objectives: [
    "Map each of the five setup components onto a separate function",
    "Write a filter, a location test and a trigger as functions returning true or false",
    "Express invalidation as a computed price rather than a fixed distance",
    "Assemble the components into an OnTick that reads like your written plan",
    "Explain why one function per component matters more than it looks"
  ],

  misconceptions: [
    "**\"I should write it all in OnTick.\"** You can, and you will never be able to test one part of it. One function per component means you can check each in isolation, which is the only way to find out which piece is wrong.",
    "**\"The EA needs to be clever.\"** It needs to be literal. If your plan is good, a literal reading of it is exactly what you want.",
    "**\"I will work out the details as I code.\"** Every detail you invent at the keyboard is a rule you never tested. Decide it in the plan, then transcribe it.",
    "**\"Once it compiles, it is right.\"** Compiling proves the grammar. It proves nothing about whether the function does what you meant."
  ],

  glossary: [
    { t: "Filter", d: "The conditions under which the setup is valid at all — session, bias, volatility, news." },
    { t: "Location", d: "Where on the chart you are looking. A level, a zone, a moving average." },
    { t: "Trigger", d: "The specific event that causes entry once filter and location are satisfied." },
    { t: "Invalidation", d: "The price at which the idea is proven wrong. Becomes the stop." },
    { t: "Management", d: "What you do after entry — break-even, partials, trailing. Written in advance." },
    { t: "Pure function", d: "A function that takes inputs and returns an answer without side effects. Easy to test." },
    { t: "Guard clause", d: "An early `return` that stops the rest of a function running when a condition fails." },
    { t: "Signal", d: "The combined result: filter AND location AND trigger, all true at once." }
  ],

  slides: [
    { kicker: "The mapping",
      title: "Five components, five functions",
      bullets: [
        "Module 11 made you write every setup with **five parts**. That structure was not arbitrary — **it is the shape of an EA.**",
        "**Filter → `filterOk()`** returns true or false.",
        "**Location → `atLocation()`** returns true or false.",
        "**Trigger → `triggerFired()`** returns true or false.",
        "**Invalidation → `stopPrice()`** returns a price.",
        "**Management → `manage()`** runs on every tick while a position is open.",
        "**If your plan was specific enough, this is transcription.** If it was not, you already found out in Module 801."
      ],
      note: "The one-to-one mapping is the reason this track is short. Students who wrote a proper Module 11 plan spend this module typing; students who did not spend it discovering what they never decided." },

    { kicker: "Booleans",
      title: "Three questions with yes-or-no answers",
      bullets: [
        "A filter, a location test and a trigger all answer **one question each**, and the answer is true or false.",
        "**Keep each in its own function.** Not because it is tidier — because you can then test one at a time.",
        "**Print what each returns** while developing. When the EA does not trade, you can see which of the three said no.",
        "**A function that returns true or false and changes nothing else is easy to reason about.** Resist the urge to open trades inside them.",
        "**One question, one function, one answer.**"
      ],
      note: "Testability is the argument, and it is worth making explicitly. A single 200-line OnTick cannot be debugged; three small functions each printing their answer can be debugged in minutes." },

    { kicker: "Invalidation",
      title: "The stop is a computed price, not a setting",
      bullets: [
        "Module 10: **the stop goes where the idea is proven wrong.** That is a place on the chart, not a fixed number of points.",
        "So `stopPrice()` should **compute** from structure — below the zone, beyond the swing, at a multiple of ATR.",
        "**A fixed `StopPoints` input is a fallback, not a strategy.** It ignores volatility, which is Module 8's lesson.",
        "**Never let the EA move a stop further away.** If you would not do it by hand, do not give the machine permission.",
        "**Compute the stop first, then the size.** That order is Module 10 and it does not change because a computer is doing it."
      ],
      note: "Students reach for a fixed point-distance because it is easy. Insisting the stop is computed keeps the structural discipline and sets up Module 804, where the size falls out of it." },

    { kicker: "Assembly",
      title: "OnTick should read like your plan",
      bullets: [
        "With the components written, `OnTick()` becomes short — **guards, then the three questions, then act.**",
        "**If it does not read like your written plan, one of them is wrong.** Usually the plan.",
        "Keep management separate: **check open positions first, then look for new entries.**",
        "**Nothing clever.** No shortcuts, no combining. The value is that a person can read it and check it against the plan.",
        "**A reviewer should be able to hold the plan beside the code and match them line for line.**"
      ],
      note: "The readability test is the Module 11 handover test in a new form: if someone cannot match code to plan, one of the two is not saying what its author thinks it says." },

    { kicker: "Recap",
      title: "What you can now build",
      bullets: [
        "Each of the five components as its own function",
        "Filter, location and trigger as clean true-or-false tests",
        "Invalidation as a computed price derived from structure",
        "An OnTick that reads like your written plan",
        "The habit of printing each component's answer while developing"
      ],
      note: "Module 804 supplies the missing piece — turning that computed stop into a position size, which is the one part students most often hard-code and most regret." }
  ],

  practical: {
    title: "Transcribe one setup, one function at a time",
    time: "60 min",
    intro: "Take a single setup from your plan and turn it into five functions. Test each one before writing the next.",
    setup: [
      "The written plan from Module 11 and the traffic-light exercise from Module 801.",
      "Your empty compiling EA from Module 802."
    ],
    steps: [
      { h: "Write filterOk()", d: "Transcribe your filter conditions. Compile, then Print its result every new bar for an hour. Does it say true when you would say true?" },
      { h: "Write atLocation()", d: "Transcribe your location test. Print its result alongside the filter. Check both against what you see on the chart." },
      { h: "Write triggerFired()", d: "Transcribe your trigger. Now print all three. Note every occasion all three are true and confirm you would have taken that trade." },
      { h: "Write stopPrice()", d: "Compute the stop from structure rather than a fixed distance. Print it and compare against where you would have placed it by hand." },
      { h: "Assemble", d: "Write OnTick with the two guards, the three questions and — for now — a Print instead of an order. Run it for a session and record every signal it generated." }
    ],
    deliverable: "Five functions, each tested in isolation, plus an OnTick that logs signals without trading — and a list of the signals produced in one session with your verdict on each.",
    rubric: [
      { c: "One per component", d: "Five separate functions, not one large block." },
      { c: "Tested individually", d: "Evidence that each was printed and checked before the next was written." },
      { c: "Computed stop", d: "stopPrice() derives from structure or volatility rather than returning a fixed input." },
      { c: "No orders yet", d: "OnTick logs rather than trades. Signals are verified before anything is placed." },
      { c: "Honest verdict", d: "Each logged signal is judged against what the student would actually have done." }
    ],
    pitfalls: [
      "Writing all five before testing any, which makes a wrong result impossible to locate.",
      "Placing orders inside the boolean functions, which makes them untestable.",
      "Returning a fixed StopPoints from stopPrice() and calling it structural.",
      "Skipping the log-only stage — the signals almost always surprise you."
    ]
  },

  homework: [
    "Run your log-only EA for a full session and compare its signals against the trades you would have taken manually. Write down every disagreement.",
    "For each disagreement, decide whether the code is wrong or the plan was vaguer than you thought. Record which it was.",
    "Take the function you are least confident in and write down exactly what you would print to prove it works."
  ],

  quiz: [
    { q: "Why write each setup component as its own function rather than one block in OnTick?",
      options: [
        "It compiles faster",
        "So each can be tested in isolation — when the EA does not trade, you can see which component said no",
        "MQL requires it",
        "It uses less memory"
      ], a: 1,
      why: "A 200-line OnTick cannot be debugged. Three small functions each printing their answer can be debugged in minutes, and that difference decides whether you ever find the fault." },

    { q: "Your stopPrice() function returns a fixed number of points from entry. What is wrong with that?",
      options: [
        "Nothing — fixed stops are consistent",
        "It ignores where the idea is actually proven wrong, and ignores volatility — Modules 8 and 10 both say the stop comes from the chart",
        "Fixed stops are not allowed in MQL",
        "It will not compile"
      ], a: 1,
      why: "A fixed distance is a fallback, not a strategy. The stop is a place on the chart, and it has to be computed from structure or volatility for the size in Module 804 to mean anything." },

    { q: "Your EA compiles without errors. What has that proven?",
      options: [
        "That the logic is correct",
        "That the grammar is correct — nothing at all about whether the functions do what you meant",
        "That it will be profitable",
        "That the parameters are optimal"
      ], a: 1,
      why: "A compiler checks syntax. A function can be perfectly formed and answer the wrong question, which is why each one gets printed and checked against the chart." },

    { q: "In what order should OnTick do its work?",
      options: [
        "Look for entries, then manage open positions",
        "Guards, then manage any open position, then look for a new entry",
        "Optimise, then trade",
        "Order does not matter"
      ], a: 1,
      why: "Guards first or everything runs on every tick. Management before entry, because an open position needs attention before a new one is considered." },

    { q: "You are writing the code and realise your plan never said which moving average period to use. What should you do?",
      options: [
        "Pick a sensible one and carry on",
        "Stop, decide it in the plan, and note that you have just found an untested rule",
        "Let the optimiser choose",
        "Use the default"
      ], a: 1,
      why: "Every detail invented at the keyboard is a rule you never tested. It also means the forward test from Module 12 was run on a different strategy from the one you are now coding." }
  ]
}

]);
