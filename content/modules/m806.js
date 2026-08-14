/* N1 Forex Academy — Module 806 (Automation track). Loaded on demand.

   NOTE: this is currently the LAST module of the LAST track, so its final
   lesson closes the whole programme. If a track is ever added after this one,
   narrow l806's closing section and move the summing-up — see the warning in
   ARCHITECTURE.md §1 and the header of l505.js, which has already been through
   exactly this once. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 806 ============================ */
{
  id: 806,
  track: 'automation',
  title: "Going Live, and the End of the Programme",
  tagline: "Every failure that only exists once real money is connected — and then the close of all nine tracks.",
  level: "Automation",
  duration: "95 min",

  objectives: [
    "List the failure modes that no backtest can produce",
    "Explain why a running EA needs monitoring rather than trust",
    "Write a go-live checklist and a stop-everything rule",
    "Decide honestly whether to automate, semi-automate, or neither",
    "Say what nine tracks did and did not equip you to do"
  ],

  misconceptions: [
    "**\"It passed the backtest, so it will behave live.\"** A backtest has no disconnections, no restarts, no requotes, no broker maintenance windows and no power cuts. Every one of those is a live-only failure.",
    "**\"Automation means I can stop watching.\"** It means you stop *executing*. You watch more carefully at first, not less, because now something can go wrong while you are not looking.",
    "**\"If it breaks, I will notice.\"** Silent failures are the norm. An EA that stopped trading looks identical to an EA with no signals, and the difference can be weeks of nothing.",
    "**\"A VPS solves reliability.\"** It solves your laptop being closed. It does not solve a bug, a broker change, or a strategy that stopped working."
  ],

  glossary: [
    { t: "VPS", d: "A rented always-on machine to run the terminal, so your own computer need not stay awake." },
    { t: "Requote / rejection", d: "The broker refusing your order at the requested price. A backtest rarely models it." },
    { t: "Slippage (live)", d: "Getting a worse fill than requested. Always worse in reality than in the tester." },
    { t: "Silent failure", d: "The EA stops working without any error — the most common live problem." },
    { t: "Heartbeat", d: "A regular log line proving the EA is alive and still evaluating." },
    { t: "Kill switch", d: "A condition that stops all trading and requires a human to restart it." },
    { t: "Magic number", d: "An identifier on each order so the EA manages only its own trades." },
    { t: "Semi-automation", d: "The EA watches and alerts; you decide and execute. Frequently the right answer." },
    { t: "Reconciliation", d: "Checking the EA's idea of open positions against the broker's. They can diverge." }
  ],

  slides: [
    { kicker: "Live only",
      title: "Failures a backtest cannot produce",
      bullets: [
        "**Disconnections.** The terminal loses its connection mid-trade. What does your EA do when it comes back and the world has moved?",
        "**Restarts.** A terminal restart runs `OnInit()` again. Any state you held in a variable is gone — including which bar you last acted on.",
        "**Requotes and rejections.** The order you sent did not happen. Does your code check, or assume?",
        "**Broker changes.** Symbol renamed, spread widened, minimum lot raised, instrument suspended.",
        "**And the ordinary ones:** power cuts, Windows updates, an expired demo account.",
        "**None of these appear in a backtest. All of them appear eventually.**"
      ],
      note: "The restart case is the one students find most surprising, because it silently breaks the new-bar guard from Module 802 — after a restart the EA has forgotten which bar it handled and may act twice." },

    { kicker: "Assume nothing worked",
      title: "Check the result of every order",
      bullets: [
        "`OrderSend` returning does **not** mean the order exists. **Check the return value, every time.**",
        "**If it failed, log why.** A silent rejection is a position you think you have and do not.",
        "**Reconcile.** Periodically compare the EA's idea of its open positions against what the broker reports.",
        "**Use a magic number** so the EA touches only its own trades and never your manual ones.",
        "**Write the failure path before the happy path.** The happy path is the easy half and it is not where accounts are lost."
      ],
      note: "Students write the success case and stop. Insisting the failure path is written first is the single most effective habit change available in this module." },

    { kicker: "Watching",
      title: "A running EA needs monitoring, not trust",
      bullets: [
        "**A heartbeat.** A log line every hour saying it is alive and what it currently thinks. Silence then means something.",
        "**Without one, a dead EA and an EA with no signals look identical** — for weeks.",
        "**Check the journal daily at first.** Not the profit — the behaviour. Did it do what you expected?",
        "**Reconcile positions weekly.** Divergence is a bug you want to find small.",
        "**Watch for the strategy quietly stopping working**, which looks like nothing at all and is the hardest failure to spot."
      ],
      note: "The heartbeat is trivial to implement and disproportionately valuable. It converts the most common live failure — silent death — from invisible into obvious." },

    { kicker: "Kill switch",
      title: "One condition that stops everything",
      bullets: [
        "**Define, in advance, what makes you switch it off.** A drawdown figure, a number of consecutive losses, behaviour you did not expect.",
        "**Put it in code where you can.** The daily stop from Module 804 is one form of it.",
        "**And keep a manual one:** know exactly how you stop it, and have done it once deliberately so you are not learning under pressure.",
        "**Restarting after a stop requires a reason**, not just the passage of time or the feeling that it should be fine now.",
        "**Deciding in advance is the whole point** — Module 12, arriving for the last time."
      ],
      note: "Have students actually perform an emergency stop during the lab. Knowing the sequence under calm conditions is worth more than any written procedure they have never executed." },

    { kicker: "Honesty",
      title: "Automate, semi-automate, or neither",
      bullets: [
        "**Full automation suits** a genuinely mechanical strategy, tested honestly, on an account you can afford to have run unattended.",
        "**Semi-automation suits almost everyone else.** The EA watches and alerts; you decide and execute. **You get consistency of attention without handing over judgement.**",
        "**Neither is the right answer** if your plan is not producing results manually. Automation changes the rate, not the sign.",
        "**Most students should start semi-automated** and stay there until the alerts have been right for a long time.",
        "**Concluding that automation is not for you is a competent conclusion.** Seventh time this course has said so."
      ],
      note: "Semi-automation is under-sold everywhere and is genuinely the right answer for most retail traders. Presenting it as the default rather than the consolation prize is the honest framing." },

    { kicker: "The end",
      title: "Nine tracks, one process",
      bullets: [
        "**Nine tracks:** currencies, shares, bonds, futures, options, crypto, commodities, spread betting, automation.",
        "**One risk policy**, written in Module 10 and extended eight times. Never replaced.",
        "**One verdict on analytical tools**, met repeatedly: context, not signals.",
        "**One return shape you learned to distrust:** many small wins, one enormous loss.",
        "**One correlation lesson**, met in currency pairs, equity sectors, token baskets and commodity families.",
        "**And a machine that obeys your rules better than you do** — which is what automation is actually for.",
        "**You are not equipped to trade nine markets. You are equipped to evaluate any of them and walk away from most.**"
      ],
      note: "Final teaching slide of the entire programme. The recurrences are the curriculum; the markets and the tooling were the material. Say it plainly, because students rarely see the structure while they are inside it." }
  ],

  practical: {
    title: "Go-live checklist and a deliberate emergency stop",
    time: "60 min",
    intro: "The last lab of the programme. You will write the checklist, then practise the thing you hope never to need.",
    setup: [
      "Your EA from Module 805, tested honestly.",
      "A demo account you are willing to leave running."
    ],
    steps: [
      { h: "Write the failure paths", d: "For every order your EA sends, add a check on the result and a log line on failure. Deliberately send an invalid order and confirm it is logged rather than silently lost." },
      { h: "Add a heartbeat", d: "Log one line per hour stating that the EA is alive, its current signal state, and how many positions it believes it holds." },
      { h: "Survive a restart", d: "Close the terminal with a position open and reopen it. Confirm the EA recovers correctly and does not act twice on the same bar." },
      { h: "Write the go-live checklist", d: "Everything to verify before switching to real money: settings, symbol, timeframe, risk percentage, daily stop, magic number, account type." },
      { h: "Practise the stop", d: "Define your kill-switch conditions in writing. Then actually perform an emergency stop — remove the EA, confirm no orders remain, verify the account state. Time yourself." }
    ],
    deliverable: "An EA that logs order failures and a heartbeat, evidence it survives a restart, a written go-live checklist, written kill-switch conditions, and a timed emergency-stop drill.",
    rubric: [
      { c: "Failure paths first", d: "Every order result is checked and logged, demonstrated with a deliberately invalid order." },
      { c: "Heartbeat present", d: "A regular log line proving liveness, containing state rather than just a timestamp." },
      { c: "Restart survived", d: "Demonstrated with a position open, confirming the new-bar guard recovers." },
      { c: "Checklist specific", d: "Items are checkable facts, not general intentions to be careful." },
      { c: "Stop practised", d: "The emergency stop was actually performed and timed, not merely described." }
    ],
    pitfalls: [
      "Writing the happy path only, which is where almost every live surprise originates.",
      "A heartbeat that proves the terminal is running but not that the EA is evaluating.",
      "Testing a restart with no position open, which skips the interesting case.",
      "Writing kill-switch conditions and never rehearsing the stop."
    ]
  },

  homework: [
    "Leave your EA running on demo for a week and read the journal daily. Write down every occasion its behaviour surprised you.",
    "Write your kill-switch conditions as specific numbers, then check whether any of them could be enforced in code rather than by you noticing.",
    "Write one honest paragraph deciding between full automation, semi-automation and neither — with the evidence that supports it."
  ],

  quiz: [
    { q: "Which failure can a backtest never produce?",
      options: [
        "A losing streak",
        "A terminal restart wiping the EA's memory of which bar it last acted on",
        "A large drawdown",
        "A period of no signals"
      ], a: 1,
      why: "Restarts, disconnections, requotes and broker changes are all live-only. The restart case is the sneakiest because it silently breaks the new-bar guard from Module 802." },

    { q: "Your EA sends an order. What must the code do next?",
      options: [
        "Assume it worked and carry on",
        "Check the return value and log the reason if it failed",
        "Wait one tick and check the chart",
        "Send it again to be sure"
      ], a: 1,
      why: "A silent rejection is a position you believe you have and do not. Write the failure path before the happy path — the happy path is the easy half and it is not where accounts are lost." },

    { q: "Why does a running EA need a heartbeat log?",
      options: [
        "To measure performance",
        "Because a dead EA and an EA with no signals look identical, potentially for weeks",
        "Brokers require it",
        "To satisfy the strategy tester"
      ], a: 1,
      why: "Silent failure is the most common live problem. A heartbeat converts it from invisible into obvious, and it takes about three lines." },

    { q: "For most retail traders, the honest recommendation is:",
      options: [
        "Full automation as soon as the backtest passes",
        "Semi-automation — the EA watches and alerts, you decide and execute",
        "Never use an EA",
        "Automate only during news"
      ], a: 1,
      why: "You get consistency of attention without handing over judgement. It is under-sold everywhere and it is the right default, not a consolation prize." },

    { q: "Across nine tracks, what was actually being taught?",
      options: [
        "Nine separate sets of techniques",
        "One risk policy extended eight times, one verdict on analytical tools, one return shape to distrust, and one correlation lesson — the markets were the material",
        "How to trade every market",
        "Which market is most profitable"
      ], a: 1,
      why: "The recurrences are the curriculum. Automation is the last of them: a machine that obeys your own rules better than you do, which is what it is genuinely for." }
  ]
}

]);
