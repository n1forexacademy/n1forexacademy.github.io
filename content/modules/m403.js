/* N1 Forex Academy — Module 403 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 403 ============================ */
{
  id: 403,
  track: 'options',
  title: "Time Decay — The Clock You Are Trading Against",
  tagline: "Extrinsic value must reach zero by expiry. Every day you hold a bought option, some of it goes, and it goes faster near the end.",
  level: "Derivatives",
  duration: "85 min",

  objectives: [
    "Explain why extrinsic value must fall to zero by expiry",
    "Describe how decay accelerates as expiry approaches, rather than running evenly",
    "Explain why a buyer needs to be right about direction, size AND timing",
    "State who decay helps and who it hurts, and why that does not settle the argument",
    "Choose an expiry deliberately, with the decay cost stated"
  ],

  misconceptions: [
    "**\"Time decay is a slow drip I can ignore over a few days.\"** It accelerates sharply in the final weeks. The last month of an option's life typically loses more extrinsic value than the three before it.",
    "**\"Decay means I should always sell options.\"** Decay favours the seller, and the seller carries the large loss. Collecting decay is being paid to hold a risk, not being handed free money.",
    "**\"Buying more time is expensive, so I should buy short-dated.\"** Short-dated options are cheap because they decay fastest. You are not saving money, you are buying a shorter deadline.",
    "**\"If the underlying does not move, I break even.\"** If the underlying does not move, a bought option loses. Standing still is a losing outcome for a buyer, which has no equivalent in any earlier track."
  ],

  glossary: [
    { t: "Time decay", d: "The steady loss of extrinsic value as expiry approaches. Also called theta decay." },
    { t: "Theta", d: "The greek measuring decay — roughly how much value the option loses per day, all else equal." },
    { t: "Days to expiry (DTE)", d: "How long the option has left. The single biggest driver of how fast decay bites." },
    { t: "Decay curve", d: "The shape of extrinsic value over time. Gentle early, steep at the end." },
    { t: "Weekly options", d: "Very short-dated contracts. Cheap, fast-decaying, and unforgiving of timing errors." },
    { t: "LEAPS", d: "Long-dated options, typically a year or more out. Slow decay, large premium." },
    { t: "Break-even by expiry", d: "The underlying price at which a bought option recovers its premium at expiry." },
    { t: "Standing still", d: "The underlying going nowhere. Neutral for a share, and a loss for a bought option." }
  ],

  slides: [
    { kicker: "The certainty",
      title: "Extrinsic value has a deadline",
      bullets: [
        "Module 402: premium = **intrinsic + extrinsic**, and at expiry the premium equals intrinsic alone.",
        "So **every scrap of extrinsic value must disappear** between now and the expiry date. This is not a risk; it is arithmetic.",
        "**If you bought the option, that disappearance is your loss.** If you sold it, it is your gain.",
        "**This is the only certainty in the instrument.** Direction is uncertain, volatility is uncertain — decay is guaranteed.",
        "**A bought option is a position that loses money while nothing happens.**"
      ],
      note: "The final bullet is the sentence that reorganises everything students think they know. In four previous tracks, a flat market was a neutral outcome. Here it is a loss, and that changes what 'being right' has to mean." },

    { kicker: "The shape",
      title: "Decay is not a straight line",
      bullets: [
        "Extrinsic value does not fall evenly. **It falls slowly at first and then accelerates sharply.**",
        "Roughly: an option loses a modest share of its time value in its first months and **the bulk of it in the final weeks**.",
        "**The last month is the steep part of the curve**, and the last week is steeper still.",
        "**Consequence for buyers:** holding through the final stretch is the most expensive place to be.",
        "**Consequence for sellers:** the final stretch is where the income arrives — and where a sudden move does the most damage."
      ],
      note: "Draw the curve. Students remember the shape long after they forget the numbers, and the shape is what drives the practical rule about choosing expiries with room." },

    { kicker: "Three things right",
      title: "Direction is not enough",
      bullets: [
        "To profit from a bought option you must be right about **direction**, about **size of move**, and about **timing**.",
        "**Right direction, move too small:** the premium is not recovered. You lose. (Module 401, the 103 case.)",
        "**Right direction, right size, too late:** the option expired first. You lose everything.",
        "**Right direction, arrives immediately:** you win, and decay never got the chance to matter.",
        "**Every earlier track required one of those three. This one requires all three at once**, which is why buying options is harder than it looks."
      ],
      note: "Frame this as the honest difficulty of the instrument rather than a warning against it. Students who understand that they are taking three simultaneous bets choose expiries far more sensibly and size far more conservatively." },

    { kicker: "Choosing",
      title: "Buying time is buying room to be wrong",
      bullets: [
        "**Short-dated options are cheap because they decay fastest.** You are not saving money; you are shortening your deadline.",
        "**Longer-dated options cost more and decay more slowly.** You are buying room to be wrong about timing.",
        "A workable habit: **choose an expiry with meaningfully more time than your expected move needs**, then treat the extra as the cost of being human.",
        "**Weekly options are the extreme case.** Cheap, thrilling, and they punish a timing error absolutely.",
        "**State the decay cost before entering**, in money per day. If you would not accept that as a daily fee, do not take the trade."
      ],
      note: "The last bullet is the practical takeaway of the module. Converting theta into 'money per day' makes it real in a way the greek letter never does, and it is the arithmetic behind the lab." },

    { kicker: "Both sides",
      title: "Who decay helps, and why that settles nothing",
      bullets: [
        "**Buyers fight decay. Sellers collect it.** That much is simple.",
        "It does not follow that selling is better. **The seller is being paid to hold a risk**, and the payment is capped while the risk is not.",
        "**Collecting decay is an income with a tail** — many small gains and a rare large loss. Module 10's shape, again.",
        "**Neither side is free money.** The buyer pays for possibility; the seller is paid for danger.",
        "**Choose the side whose failure mode you can survive**, not the one whose success looks more frequent."
      ],
      note: "Students reliably conclude 'so I should sell options' at this point. The answer is not that they should not, but that the decision is about which failure they can withstand — which is the same question asked in every risk module so far." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "Why extrinsic value must reach zero, and that this is arithmetic rather than risk",
        "That decay accelerates, and where the steep part of the curve sits",
        "That a buyer needs direction, size and timing all correct",
        "That a flat market is a losing outcome for a bought option",
        "How to choose an expiry deliberately and state the decay cost per day before entering"
      ],
      note: "Module 404 answers the question this module raises: what actually sets the size of that extrinsic value in the first place? The answer is volatility, and it is the thing students are really trading without knowing it." }
  ],

  practical: {
    title: "Price the clock",
    time: "40 min",
    intro: "Theta is abstract. Money per day is not. You will convert decay into a daily cost and decide whether you would accept it as a fee.",
    setup: [
      "Choose one liquid underlying.",
      "Take the same strike at three expiries: roughly one week, one month, and three months out."
    ],
    steps: [
      { h: "Record the three", d: "For each expiry, note the premium, the intrinsic value, and therefore the extrinsic value." },
      { h: "Cost per day", d: "Divide each option's extrinsic value by its days to expiry. This is the crude average decay per day. Express it in cash using the multiplier." },
      { h: "Compare", d: "Which expiry costs most per day? Which costs most in total? Note that these are usually different answers, and say why." },
      { h: "Set the hurdle", d: "For each, compute how far the underlying must move, and by when, simply to recover the premium." },
      { h: "Decide", d: "Pick the expiry you would actually use for a view you expect to play out over about two weeks. Justify it against the daily cost, not the headline premium." }
    ],
    deliverable: "A three-row table: expiry, premium, extrinsic, days remaining, cash decay per day, required move to break even; plus a two-sentence justified choice.",
    rubric: [
      { c: "Split first", d: "Extrinsic correctly separated before any decay figure is computed." },
      { c: "Cash not points", d: "Daily decay expressed in money using the correct multiplier." },
      { c: "The distinction", d: "Notes clearly that the cheapest option is usually the most expensive per day." },
      { c: "Choice", d: "Selects an expiry with room beyond the expected timing, and says so explicitly." }
    ],
    pitfalls: [
      "Dividing the whole premium rather than only the extrinsic value.",
      "Treating decay as even, when it accelerates — say so in the write-up.",
      "Choosing the weekly because it is cheapest in absolute terms.",
      "Forgetting the multiplier, which understates the daily cost by a factor of a hundred."
    ]
  },

  homework: [
    "Take one option and record its price today and in three days without trading it. Report how much value went purely to the passage of time.",
    "Find the same strike at a weekly and a three-month expiry, and write one sentence on what the price difference actually buys you.",
    "Write two sentences describing a situation where you were right about direction in an earlier track and it cost you nothing — then say what would have happened had you expressed it with a short-dated option."
  ],

  quiz: [
    { q: "Why must extrinsic value fall to zero by expiry?",
      options: [
        "Because sellers force it down",
        "Because at expiry the premium equals intrinsic value alone — there is no time left to pay for",
        "Because volatility always falls",
        "It does not; it can persist after expiry"
      ], a: 1,
      why: "It is arithmetic, not risk. Direction and volatility are uncertain; decay is the one guaranteed feature of the instrument." },

    { q: "How does time decay behave as expiry approaches?",
      options: [
        "Evenly, day by day",
        "It accelerates — the final weeks lose far more extrinsic value than earlier periods",
        "It slows down near the end",
        "It stops a month before expiry"
      ], a: 1,
      why: "The curve is gentle early and steep at the end. Holding a bought option through the final stretch is the most expensive place to be." },

    { q: "You buy a call. The underlying does not move at all for three weeks. Your position is:",
      options: [
        "Unchanged, since the underlying is unchanged",
        "Down, because extrinsic value decayed while nothing happened",
        "Up slightly",
        "Impossible to say"
      ], a: 1,
      why: "A bought option loses money while nothing happens. In four earlier tracks a flat market was neutral; here standing still is a losing outcome, and that changes what being right has to mean." },

    { q: "A weekly option is much cheaper than a three-month one at the same strike. This means:",
      options: [
        "It is better value",
        "It has less time to work and decays fastest — you are buying a shorter deadline, not saving money",
        "It has more intrinsic value",
        "It is more liquid"
      ], a: 1,
      why: "Cheap short-dated options are cheap because the deadline is close. Buying time is buying room to be wrong about timing, which is one of the three things you must get right." },

    { q: "Decay favours the option seller. Does it follow that selling is the better side?",
      options: [
        "Yes — collect the decay",
        "No — the seller is paid a capped amount to carry an uncapped risk; choose the side whose failure you can survive",
        "Yes, provided you sell out-of-the-money options",
        "Only for professional traders"
      ], a: 1,
      why: "Collecting decay is an income with a tail: many small gains and a rare large loss. It is Module 10's shape again, and the decision is about which failure mode you can withstand." }
  ]
}

]);
