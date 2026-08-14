/* N1 Forex Academy — Module 704 (Spread Betting track). Loaded on demand.

   NOTE ON TAX. This module discusses tax treatment because it is the single
   most misunderstood aspect of the wrapper and omitting it would leave students
   with the promotional version. It is written to be accurate, hedged and
   non-advisory: jurisdiction-specific, dependent on personal circumstances,
   subject to change, and explicitly a question for a qualified adviser. The
   genuinely useful teaching — that losses are correspondingly not relievable —
   is the part promotional material leaves out. Do not "simplify" this section
   into a claim. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 704 ============================ */
{
  id: 704,
  track: 'spreadbet',
  title: "Tax, Suitability and the End of the Course",
  tagline: "The most misunderstood feature of this wrapper, stated honestly — and then the close of all eight tracks.",
  level: "Wrappers",
  duration: "80 min",

  objectives: [
    "State the tax position accurately, including what it depends on and what it cuts both ways",
    "Explain why losses not being relievable is a real cost, not a footnote",
    "Complete the final extension of your risk policy",
    "Decide whether this wrapper suits you at all",
    "Say what eight tracks did and did not equip you to do"
  ],

  misconceptions: [
    "**\"Spread betting is tax free.\"** Too strong. In some jurisdictions, for most individuals, profits are currently outside certain taxes. That is several qualifications, every one of which matters.",
    "**\"Tax free is purely an advantage.\"** If gains are outside the tax net, losses generally are too — so you cannot set them against other gains. For anyone with losses, and most people have some, that is a genuine cost.",
    "**\"The tax treatment is a reason to prefer it.\"** It is one input. A wider spread can quietly cost more than the tax saved, and that comparison is arithmetic rather than opinion.",
    "**\"It applies to everyone the same way.\"** Treatment can depend on your circumstances, including whether the activity looks like a trade or profession. That is a question for a qualified adviser, not for a course."
  ],

  glossary: [
    { t: "Jurisdiction", d: "Which country's rules apply to you. Decides availability and treatment, and neither is universal." },
    { t: "Relievable loss", d: "A loss that can be set against gains elsewhere to reduce tax. Generally not available where gains are outside the net." },
    { t: "Stamp duty", d: "A transaction tax on share purchases in some markets. Not charged on a bet, because no shares change hands." },
    { t: "Suitability", d: "Whether a product fits your circumstances, knowledge and objectives — not whether it is available to you." },
    { t: "Wrapper cost", d: "The total of spread, financing and premiums, which must be compared against any tax benefit." }
  ],

  slides: [
    { kicker: "Tax",
      title: "Stated carefully, because the usual version is not",
      bullets: [
        "**In the UK, and currently, spread betting profits are generally outside capital gains tax and stamp duty for most individual bettors.**",
        "**Count the qualifications:** in the UK — currently — generally — for most — individual. Every one is doing work.",
        "**Treatment can depend on your circumstances**, including whether the activity amounts to a trade or profession.",
        "**Tax law changes**, and a treatment that exists today is not a guarantee about next year.",
        "**This is not tax advice and cannot be.** It is a question for a qualified adviser who knows your situation."
      ],
      note: "Do not soften this into a selling point and do not omit it either. Students will meet the confident version everywhere; the accurate version with its qualifications intact is more useful than both silence and a slogan." },

    { kicker: "The other side",
      title: "Losses are not relievable either",
      bullets: [
        "**If gains sit outside the tax net, losses generally do too.**",
        "So a loss on a spread bet **cannot usually be set against gains elsewhere** to reduce your tax.",
        "Trade the same view through shares or a CFD and a loss may well be relievable.",
        "**For anyone with losses — which is most people, especially early — that is a real and quantifiable cost.**",
        "**The treatment cuts both ways.** It is a trade-off, not a free gift, and the promotional version never mentions the second half."
      ],
      note: "This is the most valuable slide in the module. The asymmetry is genuine, it is routinely omitted from marketing, and it particularly disadvantages exactly the students most likely to be attracted by the headline." },

    { kicker: "Arithmetic",
      title: "Compare the wrapper cost against the benefit",
      bullets: [
        "**A tax saving on a profit you do not make is worth nothing.**",
        "**A wider spread is charged on every trade regardless of outcome.**",
        "So compare: **the spread difference over your expected number of trades** against **the tax you would actually pay** on your realistic results.",
        "**For an active trader with modest results, the wrapper cost frequently exceeds the tax benefit.**",
        "**Do the sum on your own numbers.** It is one calculation and almost nobody performs it."
      ],
      note: "The framing that lands is that a tax benefit is contingent on profit while a spread cost is certain. Students who compute this often discover the headline advantage does not survive their own trading frequency." },

    { kicker: "The policy",
      title: "The final extension",
      bullets: [
        "**Unchanged, for the seventh time:** risk per trade, structural stops, never widening, never averaging down, daily and weekly stops, correlation counted once.",
        "**Add: a notional conversion rule.** Compute exposure from stake before every bet, without exception.",
        "**Add: an exposure limit**, alongside the risk limit — Module 702.",
        "**Add: a protection rule.** When you will pay for a guaranteed stop, and the standing instruction that it never changes your size.",
        "**Add: a point-definition check** before sizing anything on a new market."
      ],
      note: "Seventh and final extension. Students should be able to write this slide themselves by now, which is the intended endpoint of the whole structure." },

    { kicker: "Suitability",
      title: "Whether this wrapper suits you",
      bullets: [
        "**Suits:** someone in a jurisdiction where it is offered, trading short-term, who values guaranteed stops and has done the cost arithmetic.",
        "**Does not suit:** long holding periods, where nightly financing compounds against you.",
        "**Does not suit:** anyone who would use the protections as a reason to hold more.",
        "**Does not suit:** anyone outside the jurisdictions where it exists — which is most of the world.",
        "**And as with every track: concluding it has no place in your process is a competent conclusion.** Sixth time."
      ],
      note: "Consistent with futures, options, crypto and commodities. This is the last of the six permissions to decline, and it should be delivered as plainly as the others." },

    { kicker: "The end",
      title: "Eight tracks, one process",
      bullets: [
        "**Eight markets and wrappers:** currencies, shares, bonds, futures, options, crypto, commodities, spread betting.",
        "**One risk policy**, written in Module 10 and extended seven times. Never replaced.",
        "**One verdict on analytical tools**, met repeatedly: context, not signals.",
        "**One return shape you learned to distrust:** many small wins, one enormous loss.",
        "**One correlation lesson**, met in currency pairs, equity sectors, token baskets and commodity families.",
        "**You are not equipped to trade eight markets. You are equipped to evaluate any of them and to walk away from most.**"
      ],
      note: "Final teaching slide of the entire course. The recurrences are the curriculum; the markets were the material. Say it plainly, because students rarely see the structure while they are inside it." }
  ],

  practical: {
    title: "The final section of your plan",
    time: "50 min",
    intro: "The last lab of eight tracks. Complete the policy, do the tax arithmetic on your own numbers, and state where every market stands.",
    setup: [
      "Bring the risk policy from Module 10 and all seven addenda.",
      "Bring your realistic expected trade count and average position size."
    ],
    steps: [
      { h: "Do the cost arithmetic", d: "Compare the provider's spread against the underlying market's on two instruments. Multiply the difference by your expected annual trade count. Set that against the tax you would pay on a realistic annual result." },
      { h: "Write the notional rule", d: "State the conversion you will perform before every bet, and the exposure limit it must satisfy." },
      { h: "Write the protection rule", d: "When you will buy a guaranteed stop, and the standing instruction that it never increases your size." },
      { h: "Check suitability", d: "State whether this wrapper is available to you, and whether your holding period suits it. If either answer is no, write that as the conclusion." },
      { h: "Close the course", d: "For each of the eight markets, write one sentence stating its role in your process over the next twelve months — including 'none' wherever that is honest." }
    ],
    deliverable: "A completed cross-market policy: the wrapper cost arithmetic on your own figures, a notional conversion rule, an exposure limit, a protection rule, a suitability conclusion, and eight one-sentence statements of role.",
    rubric: [
      { c: "Own numbers", d: "The cost comparison uses the student's realistic trade count, not a generic example." },
      { c: "Both sides of tax", d: "Acknowledges that losses are generally not relievable, rather than treating treatment as pure benefit." },
      { c: "Protection sequencing", d: "The rule states explicitly that protection is added after sizing." },
      { c: "Honest roles", d: "Several of the eight markets are assigned a limited role or none, with reasoning." },
      { c: "One document", d: "The result is a single coherent policy across eight markets." }
    ],
    pitfalls: [
      "Treating the tax position as a settled advantage rather than a trade-off with qualifications.",
      "Assigning all eight markets an active role, which nobody can sustain.",
      "Using a generic trade count rather than a realistic personal one.",
      "Writing a protection rule that permits larger sizing 'when guaranteed'."
    ]
  },

  homework: [
    "Compare the spread on one market between a spread betting provider and a direct route, and compute the annual difference at your expected trade count.",
    "Write down, in one sentence each, what you would ask a qualified adviser about your own tax position before relying on any treatment.",
    "Write the closing paragraph of your plan: which market gets your attention for the next twelve months, and why that one."
  ],

  quiz: [
    { q: "The tax position of spread betting is best stated as:",
      options: [
        "It is tax free",
        "In some jurisdictions, currently, profits are generally outside certain taxes for most individuals — with treatment depending on circumstances and subject to change",
        "It is taxed like shares",
        "It depends only on profit size"
      ], a: 1,
      why: "Every qualification in that sentence is doing work. The confident one-word version is the one you will meet everywhere, and it is not accurate enough to plan around." },

    { q: "If gains sit outside the tax net, what happens to losses?",
      options: [
        "They can still be set against other gains",
        "They generally cannot be relieved either — which is a real cost, especially early on",
        "They are refunded",
        "They carry forward indefinitely"
      ], a: 1,
      why: "The treatment cuts both ways, and the promotional version never mentions the second half. It particularly disadvantages the students most likely to be attracted by the headline." },

    { q: "How should you weigh the tax treatment against the wrapper's cost?",
      options: [
        "Tax always wins",
        "A tax saving is contingent on making a profit; a wider spread is charged on every trade regardless — compare both on your own trade count",
        "Costs are irrelevant if tax is saved",
        "They cannot be compared"
      ], a: 1,
      why: "One is certain and one is conditional. For an active trader with modest results, the wrapper cost frequently exceeds the tax benefit — and the sum takes minutes." },

    { q: "Across eight tracks, what was actually being taught?",
      options: [
        "Eight separate sets of techniques",
        "One risk policy extended seven times, one verdict on analytical tools, one return shape to distrust, and one correlation lesson — the markets were the material",
        "How to trade every market actively",
        "Which market is most profitable"
      ], a: 1,
      why: "The recurrences are the curriculum. Students rarely notice the structure while they are inside it, which is why the final module names it explicitly." },

    { q: "Having completed all eight tracks, you are:",
      options: [
        "Ready to trade eight markets",
        "Equipped to evaluate any of them, size properly, and walk away from most — which is the rarer and more useful skill",
        "Guaranteed to be profitable",
        "Qualified to advise others"
      ], a: 1,
      why: "Nobody trades eight markets well. Six of the eight tracks ended by telling you that declining a market on the arithmetic is a competent conclusion, and that repetition was deliberate." }
  ]
}

]);
