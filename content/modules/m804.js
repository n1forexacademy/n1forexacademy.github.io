/* N1 Forex Academy — Module 804 (Automation track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 804 ============================ */
{
  id: 804,
  track: 'automation',
  title: "Position Sizing in Code",
  tagline: "The one place a beginner's EA is most often wrong, and it is always the same wrong: a hard-coded lot size.",
  level: "Automation",
  duration: "90 min",

  objectives: [
    "Write a sizing function that computes lots from account, risk percentage and stop distance",
    "Explain why a hard-coded lot size is the commonest and costliest EA bug",
    "Handle broker constraints — minimum, maximum and step — without silently breaking the risk rule",
    "Refuse to trade when a correctly sized position is not possible",
    "Enforce account-level limits in code rather than by intention"
  ],

  misconceptions: [
    "**\"I will just use 0.1 lots.\"** Then your risk varies with every stop distance and every account balance. It is the exact error Module 10 exists to prevent, written into a machine that will repeat it forever.",
    "**\"The broker will round my lot size for me.\"** It will reject the order, or round it in a direction you did not choose. Handle the step yourself and know which way you rounded.",
    "**\"If the size comes out too small, round up to the minimum.\"** That is a decision to exceed your risk policy. The honest response is to skip the trade.",
    "**\"Risk limits are a discipline thing.\"** In an EA they are three lines of code. Anything you leave to discipline, the machine will happily override at 3am."
  ],

  glossary: [
    { t: "Lot step", d: "The increment a broker accepts — often 0.01. A size between steps is invalid." },
    { t: "Minimum lot", d: "The smallest position the broker will accept. A commercial floor, not a risk-based one." },
    { t: "Tick value", d: "What one price increment is worth per lot. The bridge between a stop in points and money." },
    { t: "Normalisation", d: "Rounding a computed size to a valid lot step, deliberately and in a known direction." },
    { t: "Risk amount", d: "Account equity × risk percentage. The most a trade may cost if the stop works." },
    { t: "Portfolio heat", d: "Total risk across all open positions if every stop were hit." },
    { t: "Daily stop", d: "A loss level at which the EA stops trading for the day. Enforced, not intended." },
    { t: "Free margin check", d: "Confirming the account can actually support the order before sending it." }
  ],

  slides: [
    { kicker: "The formula",
      title: "The same arithmetic, now in a function",
      bullets: [
        "**Lots = (Equity × Risk%) ÷ (Stop distance in points × value of one point per lot)**",
        "Module 10, unchanged. **The chart sets the stop; the size falls out of it.**",
        "In code that is four lines: get equity, compute the risk amount, get the stop distance, divide.",
        "**Nothing about automation changes the order of operations.** If your EA picks a lot size first, it has skipped a step exactly as a person would.",
        "**Use `SYMBOL_TRADE_TICK_VALUE`** rather than assuming $10 a pip — that assumption is wrong on most instruments, as Module 2 showed."
      ],
      note: "The tick-value point matters: students hard-code 10 because EURUSD taught them that number, and it is wrong on JPY pairs, gold, indices and everything else. The platform will tell you if you ask." },

    { kicker: "The bug",
      title: "Why a fixed lot size is the costliest line in a beginner's EA",
      bullets: [
        "`OrderSend(..., 0.1, ...)` compiles, runs, and looks completely reasonable.",
        "**But the risk on that position changes every time the stop distance changes.** A 20-point stop and a 200-point stop risk ten times different amounts on the same 0.1 lots.",
        "**And it does not scale with the account.** Halve the balance and 0.1 lots is now twice the risk it was.",
        "**A person notices. A machine does not.** It will place that size after a 40% drawdown as cheerfully as on day one.",
        "**This single line has ended more automated accounts than any strategy flaw.**"
      ],
      note: "This is the module's central point and worth dwelling on. The failure is invisible in a backtest that starts at a fixed balance and only appears in a drawdown, which is exactly when it does the most damage." },

    { kicker: "Broker reality",
      title: "Minimum, maximum, step",
      bullets: [
        "Your computed size will rarely be a valid lot. **Brokers accept increments** — often 0.01 — with a floor and a ceiling.",
        "**Round DOWN to the step, always.** Rounding up exceeds the risk you just computed.",
        "**If the result is below the broker's minimum, the correct action is to skip the trade** — not to trade the minimum.",
        "That is the Module 302 whole-contract problem again: **the minimum is a commercial floor, not a risk-based one.**",
        "**Check free margin before sending.** An order rejected for margin is a silent failure your EA may not notice."
      ],
      note: "The round-down rule and the skip rule are both one line each and both are routinely omitted. Rounding up feels like nothing; it is a decision to breach the policy the student signed in Module 10." },

    { kicker: "Limits",
      title: "The policy becomes code",
      bullets: [
        "**Risk per trade** — already handled by the sizing function.",
        "**Maximum open risk** — before opening, sum what every existing position would lose at its stop. Refuse if the total would breach.",
        "**Daily stop** — track equity at the start of the day; if today's loss exceeds your limit, stop trading until tomorrow.",
        "**Correlated positions counted once** — if the EA trades several instruments, group them.",
        "**Every one of these is a few lines.** Module 12 said countermeasures should be rules rather than intentions; **this is what that looks like when it is literally true.**"
      ],
      note: "This slide is the payoff of the whole course for an automation student. The daily stop in particular is the rule most often broken by hand and the easiest to enforce in code — the EA simply stops answering." },

    { kicker: "Recap",
      title: "What your EA can now do safely",
      bullets: [
        "Compute lots from equity, risk percentage and a computed stop",
        "Use the platform's real tick value instead of an assumed one",
        "Round down to a valid lot step and skip when the size is too small",
        "Refuse to open when total open risk or the daily stop would be breached",
        "Enforce the risk policy mechanically rather than relying on discipline"
      ],
      note: "Module 805 tests all of it honestly. The sizing work has to come first, because a backtest of an incorrectly sized strategy tells you nothing useful about the strategy." }
  ],

  practical: {
    title: "Write the sizing function and try to break it",
    time: "55 min",
    intro: "This function decides whether your EA survives. You will write it, then deliberately feed it awkward inputs.",
    setup: [
      "Your EA from Module 803 with a working stopPrice().",
      "The strategy tester, or a demo chart with the log open."
    ],
    steps: [
      { h: "Write lotsFor()", d: "Take a stop price, compute the distance from the current price, and return the lot size that risks exactly your RiskPercent. Use the platform's tick value, not an assumed one." },
      { h: "Print it against reality", d: "For five different stop distances, print the computed lots and hand-check each against the Module 10 formula. They must agree." },
      { h: "Break it deliberately", d: "Feed it a stop distance of zero, a negative distance, and a stop the wrong side of price. Confirm it returns zero rather than a nonsense size or a crash." },
      { h: "Handle the broker", d: "Round down to the lot step. Then test with a tiny account balance so the computed size falls below the minimum — confirm it returns zero and the EA skips." },
      { h: "Add the limits", d: "Implement a daily stop and a maximum open risk check. Prove the daily stop works by setting it to a value already breached and confirming the EA refuses to trade." }
    ],
    deliverable: "A sizing function agreeing with hand calculations on five cases, returning zero on all four awkward inputs, rounding down to the step, and a demonstrated daily stop that blocks trading.",
    rubric: [
      { c: "Agrees by hand", d: "Five computed sizes match the Module 10 arithmetic exactly." },
      { c: "Fails safely", d: "Zero stop, negative stop and wrong-side stop all return zero rather than a size." },
      { c: "Rounds down", d: "Demonstrably rounds down to the lot step, never up." },
      { c: "Skips rather than shrinks the stop", d: "Below-minimum size results in no trade, not a widened risk or a tightened stop." },
      { c: "Daily stop proven", d: "Shown actually blocking a trade, not merely written." }
    ],
    pitfalls: [
      "Assuming $10 per pip, which is wrong on most instruments.",
      "Rounding up to the broker minimum and calling it close enough.",
      "Dividing by a stop distance of zero, which produces infinity and an enormous order.",
      "Writing the daily stop and never testing that it fires."
    ]
  },

  homework: [
    "Compute by hand what your EA should trade for three different account balances, then confirm the function returns the same three numbers.",
    "Find your broker's minimum lot and step for two instruments, and work out the smallest account that could correctly size a trade on each.",
    "Write one sentence on what your EA does if the sizing function returns zero, and check the code actually does that."
  ],

  quiz: [
    { q: "Why is a hard-coded lot size the costliest line in a beginner's EA?",
      options: [
        "It is slower to execute",
        "Risk then varies with every stop distance and every account balance — and a machine will keep placing it through a drawdown",
        "Brokers reject fixed sizes",
        "It cannot be optimised"
      ], a: 1,
      why: "A 20-point stop and a 200-point stop risk ten times different amounts on the same 0.1 lots. A person notices after a drawdown; the EA places the same size on day one and at minus 40%." },

    { q: "Your computed size is 0.007 lots and the broker minimum is 0.01. What should the EA do?",
      options: [
        "Round up to 0.01",
        "Return zero and skip the trade",
        "Tighten the stop until 0.01 fits the risk",
        "Trade it and accept the extra risk"
      ], a: 1,
      why: "Rounding up breaches the policy; tightening the stop is worse because it puts the stop where the idea is not yet wrong. This is Module 302's whole-contract problem in a new place." },

    { q: "Which value should you use to convert a stop distance into money?",
      options: [
        "$10 per pip",
        "The platform's tick value for that specific symbol",
        "The spread",
        "The account leverage"
      ], a: 1,
      why: "The $10 assumption comes from EURUSD and is wrong on JPY pairs, gold, indices and most other instruments — Module 2's lesson. The platform will tell you if you ask." },

    { q: "How should a daily stop be implemented in an EA?",
      options: [
        "As a note in the plan to check each day",
        "In code — record equity at the start of the day and refuse to trade once the loss limit is hit",
        "By turning the EA off manually",
        "It is not needed in automation"
      ], a: 1,
      why: "Module 12 said countermeasures must be rules rather than intentions. In an EA that is literally true: it is a few lines, and the machine simply stops answering." },

    { q: "Your stopPrice() returns a value equal to the current price, so the distance is zero. What must lotsFor() do?",
      options: [
        "Divide anyway",
        "Return zero — dividing by zero produces an enormous or infinite size",
        "Use a default stop",
        "Open a minimum position"
      ], a: 1,
      why: "This is the awkward-input case that turns a bug into a catastrophe. A size computed by dividing by zero is not a small error." }
  ]
}

]);
