/* N1 Forex Academy — Module 406 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 406 ============================ */
{
  id: 406,
  track: 'options',
  title: "Structures, Assignment and Building an Options Approach",
  tagline: "A handful of structures worth knowing, the obligation that can arrive uninvited, and an honest answer about whether this belongs in your account.",
  level: "Derivatives",
  duration: "95 min",

  objectives: [
    "Describe the small number of structures worth learning, and what each is actually for",
    "Explain what a spread gives up and what it removes",
    "Explain assignment risk, including early assignment, and how to avoid meeting it by surprise",
    "Extend your risk policy to cover defined-risk and undefined-risk option positions",
    "Decide honestly whether options belong in your process at all"
  ],

  misconceptions: [
    "**\"More legs means more sophisticated.\"** More legs means more spreads paid, more assignment surfaces, and more ways to be wrong. Complexity is a cost, not a signal of skill.",
    "**\"A covered call is free income.\"** You have sold your upside for a premium. In a strong rally that is an expensive trade, and the fact it feels safe is exactly the problem.",
    "**\"Defined risk means safe.\"** It means the maximum loss is knowable in advance. Losing the full defined amount repeatedly is a perfectly good way to empty an account.",
    "**\"I will close before expiry so assignment does not apply.\"** Some options can be assigned early, without warning, and typically when it is least convenient. If you sold an option, assignment is your risk to manage."
  ],

  glossary: [
    { t: "Vertical spread", d: "Buying one option and selling another of the same type and expiry at a different strike." },
    { t: "Defined risk", d: "A position whose maximum loss is known and capped when you enter." },
    { t: "Undefined risk", d: "A position whose loss has no practical cap — typically anything with a naked short option." },
    { t: "Covered call", d: "Selling a call against shares you own. Income now, upside surrendered." },
    { t: "Protective put", d: "Buying a put against shares you own. Insurance, paid for with premium." },
    { t: "Naked short option", d: "A sold option with no offsetting position. Undefined risk, and the fastest route to disaster." },
    { t: "Early assignment", d: "Being assigned before expiry. Possible on American-style options, and rarely convenient." },
    { t: "Exercise style", d: "American options may be exercised any time before expiry; European only at expiry." },
    { t: "Max loss / max gain", d: "The bounded outcomes of a defined-risk structure, computable before entry." },
    { t: "Legging in", d: "Entering a multi-leg position one leg at a time, which briefly leaves you holding something else entirely." }
  ],

  slides: [
    { kicker: "Structures",
      title: "A short list is enough",
      bullets: [
        "There are hundreds of named structures. **Four cover almost everything a retail trader genuinely needs.**",
        "**Long call / long put:** a directional view with capped loss. Simple, and it needs to be right about three things.",
        "**Vertical spread:** buy one strike, sell another. **Cheaper, defined risk, capped gain.**",
        "**Covered call:** sell a call against shares you own. Income now, upside surrendered.",
        "**Protective put:** buy a put against shares you own. Straightforward insurance.",
        "**Every extra leg costs another spread and adds another way to be wrong.** Complexity is a cost."
      ],
      note: "Students arrive wanting condors and butterflies because they sound expert. The honest position is that exotic structures mostly serve people with lower costs and better fills, and that a retail trader paying two spreads on each of four legs has given away the edge before the market moves." },

    { kicker: "Spreads",
      title: "What you give up to cap what you risk",
      bullets: [
        "**Buy a call at strike 100 and sell one at 110.** You have built a vertical spread.",
        "**The sold leg reduces your cost**, because you collected a premium against the one you paid.",
        "**It also caps your gain** at the difference between the strikes, less what you paid.",
        "**And it reduces your vega**, so IV crush hurts less — you are short some volatility as well as long some.",
        "**Max gain, max loss and break-even are all computable before you enter.** Compute them. Every time."
      ],
      note: "The vega point is the underrated one. Students who lost to IV crush in Module 404 often conclude options are a trap; the spread is the structural answer, because the sold leg absorbs part of the volatility collapse." },

    { kicker: "Covered calls",
      title: "The one that feels safest and is not free",
      bullets: [
        "You own 100 shares. You sell a call against them and collect a premium. **Income, immediately.**",
        "**If the shares stay flat or fall, you keep the premium.** It feels like being paid for owning something you already own.",
        "**If the shares rally hard, your upside is capped** and you deliver them at the strike.",
        "**That is the cost, and it is invisible** — it shows up as a gain you did not get rather than a loss you did.",
        "**It is not free income. It is selling your upside**, and it works best when you genuinely would have been happy to sell at that price."
      ],
      note: "The invisible cost is the teaching point. A capped rally does not appear on a statement as a loss, so students repeat the trade through a bull market and are quietly poorer than simply holding. Say that plainly." },

    { kicker: "Assignment",
      title: "The obligation that arrives uninvited",
      bullets: [
        "**If you sold an option, the buyer can exercise and you must deliver.** That is assignment.",
        "**American-style options can be assigned at any time**, not only at expiry. European-style only at expiry.",
        "**Know which style you sold.** It is on the specification, and it changes what can happen to you overnight.",
        "**Early assignment usually arrives when it is least convenient** — around dividends, or after a sharp move.",
        "**If you cannot fund or deliver on assignment, you do not have a position, you have a problem.**"
      ],
      note: "Assignment is the operational risk students consistently underestimate because it has no equivalent in the earlier tracks. The rule to leave them with: never sell an option whose assignment you could not comfortably handle tomorrow morning." },

    { kicker: "Risk policy",
      title: "Three additions to what you already signed",
      bullets: [
        "**Unchanged:** risk per trade, position limits, never averaging down, daily and weekly stops, correlation counted once.",
        "**Add: defined risk only, at least at first.** No naked short options. The undefined-risk side is not a beginner's instrument.",
        "**Add: premium paid counts as risk in full.** A bought option can and does go to zero — size it as though it will.",
        "**Add: an event rule.** Know every scheduled event before expiry, and treat IV crush as a cost you have chosen.",
        "**And a liquidity rule:** only strikes and expiries you could exit in a hurry."
      ],
      note: "The second addition is the one that matters most for capital preservation. A student who only ever holds defined-risk positions can be wrong repeatedly without a catastrophic outcome, which is exactly the protection a beginner needs while learning an unforgiving instrument." },

    { kicker: "Honesty",
      title: "Whether options belong in your process",
      bullets: [
        "**Genuine uses:** insuring a holding you want to keep, expressing a view with a capped and known loss, generating income from shares you were content to sell anyway.",
        "**Genuine costs:** wide spreads, three things to get right at once, decay while nothing happens, and volatility exposure you did not ask for.",
        "**Options do not make a weak directional view profitable.** They add requirements to it.",
        "**If your equity or forex process is not yet producing consistent results, options will not rescue it.**",
        "**Deciding they are not for you, or are for one narrow purpose only, is a competent conclusion.**"
      ],
      note: "End the track here rather than on encouragement, as with futures. The most useful outcome for many students is 'protective puts on holdings I want to keep, and nothing else', which is a perfectly respectable place to stop." }
  ],

  practical: {
    title: "Write the options section of your plan",
    time: "50 min",
    intro: "Extend the policy you signed in Module 10 and have already extended for equities, bonds and futures. Same document, three more clauses.",
    setup: [
      "Bring your signed risk policy and your existing plan.",
      "Bring the chain you used in the Module 402 lab."
    ],
    steps: [
      { h: "Choose your permitted structures", d: "List the structures you will allow yourself. Justify each in one sentence. If naked short options are not on the list, say so explicitly." },
      { h: "Size a bought option", d: "Take one trade idea. Treat the entire premium as at risk, and compute the number of contracts your risk percentage permits. Include the multiplier." },
      { h: "Build the spread version", d: "Express the same idea as a vertical spread. Compute max gain, max loss and break-even. Compare its cost and vega to the single option." },
      { h: "Write the assignment rule", d: "State what you will check before selling any option: exercise style, dividend dates, and whether you could deliver or fund assignment tomorrow." },
      { h: "Write the event rule", d: "State how you will check for scheduled events before expiry, and what you will do when one falls inside your holding period." }
    ],
    deliverable: "An options addendum: permitted structures with justification, a sized single-option trade, the same idea as a spread with all three bounds computed, an assignment checklist, and an event rule.",
    rubric: [
      { c: "Extension", d: "Builds on the existing signed policy rather than creating a separate and inconsistent one." },
      { c: "Full premium at risk", d: "Sizes the bought option as though the premium goes to zero, because it can." },
      { c: "Spread arithmetic", d: "Max gain, max loss and break-even all computed correctly, with the multiplier applied." },
      { c: "Assignment", d: "Checklist names exercise style and dividend dates specifically, not a general intention to be careful." },
      { c: "Restraint", d: "Permitted structure list is short and justified rather than comprehensive." }
    ],
    pitfalls: [
      "Sizing a bought option by its delta-equivalent share exposure rather than by the premium at risk.",
      "Forgetting the multiplier, understating the position by a factor of a hundred.",
      "Permitting naked short options 'only in special cases', which is how they end up permitted.",
      "Computing a spread's max loss as the net premium without checking the strike width."
    ]
  },

  homework: [
    "Take one share you would be content to sell at 10% above today's price. Price the covered call at that strike and write two sentences on what you would be giving up.",
    "Find one option that can be assigned early and state the two circumstances in which that is most likely.",
    "Write one honest paragraph on whether options belong in your process, naming the single purpose you would use them for if any."
  ],

  quiz: [
    { q: "You buy a call at 100 and sell a call at 110, same expiry. Compared with the single long call, this position:",
      options: [
        "Costs more and has unlimited upside",
        "Costs less, caps the gain at the strike width less premium paid, and reduces volatility exposure",
        "Has the same risk profile",
        "Cannot lose money"
      ], a: 1,
      why: "The sold leg pays for part of the bought one, caps the gain, and absorbs some volatility exposure — which is why spreads survive IV crush better than a single long option." },

    { q: "A covered call in a strong rally:",
      options: [
        "Produces the best possible outcome",
        "Caps your upside — the cost is a gain you did not receive rather than a loss on a statement",
        "Loses the premium",
        "Converts into a protective put"
      ], a: 1,
      why: "The cost is invisible, which is why people repeat the trade through a bull market and end up quietly poorer than if they had simply held. It is selling upside, not free income." },

    { q: "You have sold an American-style option. When can you be assigned?",
      options: [
        "Only at expiry",
        "At any time before expiry, often when least convenient — around dividends or after a sharp move",
        "Only if the option is deep in the money",
        "Only if you agree to it"
      ], a: 1,
      why: "Assignment is not something you consent to. Never sell an option whose assignment you could not comfortably handle tomorrow morning." },

    { q: "Why should a beginner restrict themselves to defined-risk option positions?",
      options: [
        "Because they are more profitable",
        "Because the maximum loss is known in advance, so being wrong repeatedly is survivable",
        "Because they require no analysis",
        "Because brokers require it"
      ], a: 1,
      why: "Defined risk is not the same as safe — losing the full defined amount repeatedly empties an account. But it removes the catastrophic outcome, which is the protection a beginner needs in an unforgiving instrument." },

    { q: "Your equity process is not yet producing consistent results. Should you add options?",
      options: [
        "Yes — the leverage will improve returns",
        "No — options add requirements to a view rather than improving it, so a weak view gets harder to express, not easier",
        "Yes, but only covered calls",
        "Yes, provided you use defined risk"
      ], a: 1,
      why: "Options require direction, size and timing simultaneously. They do not rescue a directional edge that is not yet there — they raise the bar it has to clear." }
  ]
}

]);
