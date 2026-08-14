/* N1 Forex Academy — Module 703 (Spread Betting track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 703 ============================ */
{
  id: 703,
  track: 'spreadbet',
  title: "Guaranteed Stops and What Protection Costs",
  tagline: "The one genuine innovation in this wrapper: a stop that actually holds across a gap. It is not free, and knowing what it is worth is the skill.",
  level: "Wrappers",
  duration: "70 min",

  objectives: [
    "Explain what a guaranteed stop does that an ordinary stop cannot",
    "Say what it costs and how that cost is charged",
    "Decide when the premium is worth paying and when it is not",
    "Explain negative balance protection and what it does not cover",
    "Judge a protection feature by what it would have paid in a real event"
  ],

  misconceptions: [
    "**\"A guaranteed stop is just a stop.\"** An ordinary stop is an instruction, and a gap can fill it far away. A guaranteed stop is a contractual commitment by the provider to close you at your level whatever happens.",
    "**\"It is free because the premium is only charged if triggered by some providers.\"** It is priced into a wider spread, or charged as a premium, or both. Free protection does not exist and a firm offering it would not survive.",
    "**\"With a guaranteed stop I can size larger.\"** That is exactly backwards and it is how the feature causes harm. If the protection tempts you into a bigger position, it has cost you more than it saved.",
    "**\"Negative balance protection means I cannot lose more than I deposited, so I am safe.\"** It caps your loss at your deposit. Losing your entire deposit is not a good outcome, and it says nothing about position sizing."
  ],

  glossary: [
    { t: "Guaranteed stop", d: "A stop the provider commits to honouring at your exact level, including across a gap." },
    { t: "Premium", d: "The charge for that guarantee — a wider spread, a fee, or a fee charged only if it triggers." },
    { t: "Minimum distance", d: "How far from the current price a guaranteed stop must sit. Providers set this and it can be wide." },
    { t: "Negative balance protection", d: "A rule preventing an account going below zero. Availability varies by jurisdiction." },
    { t: "Gap event", d: "Price reopening far from where it closed, with nothing traded in between." },
    { t: "Tail risk", d: "The rare, large loss the ordinary risk calculation does not capture." },
    { t: "Insurance framing", d: "Judging a protection by the loss it would have prevented, not by whether it was used." }
  ],

  slides: [
    { kicker: "The feature",
      title: "A stop that actually holds",
      bullets: [
        "You have known since Module 3 that **an ordinary stop is an instruction, not a reserved price.**",
        "You watched that fail in the Module 107 gap drill, where a stop filled 20% beyond its level.",
        "**A guaranteed stop is a contractual commitment** by the provider to close you at your exact level, gap or no gap.",
        "**They take the gap risk instead of you.** That is genuinely valuable, and it is the one real innovation in this wrapper.",
        "**Which is precisely why it is not free.**"
      ],
      note: "Students who did the share-gap drill will value this immediately, because they have seen a stop fail. Those who have not will need reminding what the drill demonstrated." },

    { kicker: "The cost",
      title: "Three ways it is charged",
      bullets: [
        "**A wider spread** on entry — you pay whether or not the stop is ever hit.",
        "**An explicit premium** — a stated charge for the guarantee.",
        "**A premium charged only if triggered** — cheaper in the common case, and the case where it fires is exactly the bad one.",
        "**Plus a minimum distance requirement.** The stop must sit at least so far away, which may be wider than you wanted.",
        "**Read which model your provider uses**, because it changes when the cost lands."
      ],
      note: "The minimum-distance requirement is the constraint students overlook. A guaranteed stop that must sit 2% away may force a smaller position than an ordinary stop at 1% — which is a cost, even before the premium." },

    { kicker: "When it is worth it",
      title: "Buy it for the gap you can see coming",
      bullets: [
        "**Worth paying for:** holding through a scheduled event — results, a rate decision, a referendum — where a gap is genuinely likely.",
        "**Worth paying for:** a market with a history of violent gaps, or one you cannot watch.",
        "**Usually not worth paying for:** a short intraday position in a liquid market during active hours.",
        "**Judge it as insurance:** what loss would it have prevented in the last real gap on this market? That is what you are buying.",
        "**Not by whether you have ever used one.** Insurance you never claim on is insurance working."
      ],
      note: "The insurance framing is the correct one and it echoes Module 401. Students who evaluate a guaranteed stop by whether it 'paid off' will conclude it is a waste, which is the same error as cancelling house insurance because the house did not burn down." },

    { kicker: "The trap",
      title: "Protection that makes you take more risk",
      bullets: [
        "**The most common harm from this feature is behavioural**, not financial.",
        "A guaranteed stop makes the worst case feel bounded, **so people size larger**.",
        "**If the protection tempts you into a bigger position, it has cost you more than it saved.**",
        "**Size exactly as you would have without it.** Then add the guarantee if the event justifies it.",
        "**A safety feature that changes your behaviour has become a risk feature.**"
      ],
      note: "This is the module's most important slide. Risk compensation is well documented in other domains and it applies here exactly. The rule to leave students with is that protection is added after sizing, never before." },

    { kicker: "Negative balance",
      title: "What it does and does not do",
      bullets: [
        "**Negative balance protection** prevents your account going below zero after a catastrophic move.",
        "**Availability varies by jurisdiction** and by client classification. Check whether you actually have it.",
        "**What it does:** stops you owing the provider money.",
        "**What it does not do:** prevent you losing everything you deposited.",
        "**It is a backstop against a debt, not a risk management tool.** Nothing about it should change your position size."
      ],
      note: "Students hear 'cannot lose more than you deposit' as reassurance. Restating it as 'you can still lose all of it' is the honest reading and prevents it being used as a sizing justification." },

    { kicker: "Recap",
      title: "What you can now judge",
      bullets: [
        "What a guaranteed stop commits the provider to, and why it is valuable",
        "The three charging models and the minimum distance constraint",
        "When the premium is worth paying, judged as insurance against a real event",
        "Why sizing must be decided before the protection is added",
        "What negative balance protection covers, and what it does not"
      ],
      note: "Module 704 closes the track with the tax question — handled carefully, because it is jurisdictional, changeable, and the single most misunderstood aspect of this wrapper." }
  ],

  practical: {
    title: "Price the protection against a real event",
    time: "35 min",
    intro: "Guaranteed stops are judged properly by looking at what they would have paid in an event that actually happened.",
    setup: [
      "Choose one market that has gapped significantly in the past two years.",
      "Find your provider's guaranteed stop terms for it: charging model, premium and minimum distance."
    ],
    steps: [
      { h: "Find the gap", d: "Identify the event and record the closing price before and the opening price after. Express the gap as a percentage." },
      { h: "Size a position", d: "Using Module 702's method, size a bet risking 1% of a £10,000 account with an ordinary stop." },
      { h: "Compute both outcomes", d: "What would that position have lost with an ordinary stop filling at the reopen? What would it have lost with a guaranteed stop holding at your level?" },
      { h: "Price the guarantee", d: "Find the premium, and work out how many times you could have paid it before it exceeded the loss it prevented in that one event." },
      { h: "Check the constraint", d: "Note the minimum distance requirement. If it forces a wider stop, recompute the stake and state how much smaller the position becomes." }
    ],
    deliverable: "A one-page note: the real gap event, both loss outcomes, the premium, how many premiums the single event would have funded, and the effect of the minimum distance on position size.",
    rubric: [
      { c: "Real event", d: "Uses an actual historical gap with real prices, not a hypothetical." },
      { c: "Both outcomes", d: "Computes the ordinary-stop loss at the reopen AND the guaranteed-stop loss at the level." },
      { c: "Break-even count", d: "States how many premiums the prevented loss would have covered." },
      { c: "Constraint noted", d: "Accounts for the minimum distance and its effect on the correct stake." }
    ],
    pitfalls: [
      "Assuming the ordinary stop would have filled at its level, which removes the entire comparison.",
      "Ignoring the minimum distance, which is a real cost even when no premium is charged.",
      "Concluding the guarantee is worthless because gaps are rare — that is the insurance error.",
      "Using the guarantee as a reason to size larger in the recomputation."
    ]
  },

  homework: [
    "Find your provider's guaranteed stop charging model and minimum distance for two markets, and note which model costs you more if you rarely get stopped.",
    "Check whether negative balance protection applies to your account and client classification. Write down the answer.",
    "Write two sentences on one scheduled event in the next quarter where you would consider paying for a guaranteed stop, and why."
  ],

  quiz: [
    { q: "What does a guaranteed stop do that an ordinary stop cannot?",
      options: [
        "Execute faster",
        "Commit the provider to closing you at your exact level even across a gap",
        "Prevent losses entirely",
        "Remove financing costs"
      ], a: 1,
      why: "An ordinary stop is an instruction, as Module 3 established and the Module 107 gap drill demonstrated. A guaranteed stop transfers the gap risk to the provider — which is why it is charged for." },

    { q: "You now have a guaranteed stop. Should you size larger?",
      options: [
        "Yes — the worst case is bounded",
        "No — if the protection tempts you into a bigger position it has cost you more than it saved",
        "Yes, up to double",
        "Only on index markets"
      ], a: 1,
      why: "This is the commonest harm from the feature and it is behavioural rather than financial. Size exactly as you would without it, then add the guarantee if the event justifies it." },

    { q: "How should you judge whether a guaranteed stop premium is worth paying?",
      options: [
        "By whether you have ever needed one",
        "As insurance: what loss would it have prevented in the last real gap on this market",
        "By comparing it to commission",
        "By the provider's marketing"
      ], a: 1,
      why: "Judging it by whether it paid off is the same error as cancelling house insurance because the house did not burn down. Insurance you never claim on is insurance working." },

    { q: "A guaranteed stop has a minimum distance requirement. Why does that matter?",
      options: [
        "It does not affect anything",
        "A wider forced stop means a smaller correctly sized position — a real cost even before any premium",
        "It only affects the premium",
        "It applies only to shares"
      ], a: 1,
      why: "Sizing comes from the stop distance, so a forced wider stop shrinks the stake. That constraint is the cost students most reliably overlook." },

    { q: "Negative balance protection means:",
      options: [
        "You cannot lose money",
        "Your account cannot go below zero — you can still lose everything you deposited",
        "Your stops are guaranteed",
        "Losses are refunded"
      ], a: 1,
      why: "It is a backstop against owing the provider money, not a risk management tool. Nothing about having it should change your position size." }
  ]
}

]);
