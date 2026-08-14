/* N1 Forex Academy — Module 405 (Options track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 405 ============================ */
{
  id: 405,
  track: 'options',
  title: "The Greeks, In Plain Language",
  tagline: "Five numbers that answer five questions you already know to ask. No mathematics required to use them.",
  level: "Derivatives",
  duration: "80 min",

  objectives: [
    "State in one sentence what each of the five greeks measures",
    "Use delta to say how much an option moves when the underlying moves",
    "Explain gamma as the reason delta will not stay where you found it",
    "Read a position's combined greeks and say what it is actually exposed to",
    "Explain why the greeks describe this instant and not the trade as a whole"
  ],

  misconceptions: [
    "**\"The greeks are advanced mathematics.\"** Using them is arithmetic. Deriving them is mathematics, and you do not need to derive them any more than you need to build a speedometer to drive.",
    "**\"Delta is the probability of finishing in the money.\"** It is roughly similar in size, which is why the myth persists, but it is a sensitivity measure. Treating it as a probability is a shortcut that breaks exactly when it matters.",
    "**\"If my greeks are fine now, my position is fine.\"** They describe this instant. Gamma exists precisely because delta will not stay where you found it, and near expiry it changes with alarming speed.",
    "**\"I need all five.\"** Delta and theta cover most retail decisions. Vega matters around events. Gamma matters near expiry. Rho almost never matters."
  ],

  glossary: [
    { t: "Delta", d: "How much the option price moves for a one-point move in the underlying. Between 0 and 1 for calls, 0 and −1 for puts." },
    { t: "Gamma", d: "How much delta itself changes as the underlying moves. Highest at the money and near expiry." },
    { t: "Theta", d: "How much value the option loses per day from time passing. Negative for buyers, positive for sellers." },
    { t: "Vega", d: "How much the option price changes for a one-point change in implied volatility." },
    { t: "Rho", d: "Sensitivity to interest rates. Rarely decisive for short-dated retail positions." },
    { t: "Position greeks", d: "The greeks of every leg added together, giving the exposure of the whole position." },
    { t: "Delta hedging", d: "Trading the underlying to offset a position's delta, leaving the other exposures behind." },
    { t: "Pin risk", d: "The danger near expiry when the underlying sits right at the strike and delta swings violently." }
  ],

  slides: [
    { kicker: "The idea",
      title: "Five questions, five numbers",
      bullets: [
        "Each greek answers a question you would ask anyway: **if this changes, what happens to my option?**",
        "**Delta:** what if the underlying moves? **Gamma:** how fast does delta itself change?",
        "**Theta:** what if a day passes? **Vega:** what if volatility changes? **Rho:** what if interest rates change?",
        "**They are the dashboard.** You do not need to build a speedometer to use one.",
        "**You have already met three of them by their effects** — decay in Module 403, volatility exposure in Module 404, and the payoff slope in Module 401."
      ],
      note: "The point of sequencing greeks last is that every exposure has already been felt. Naming them now is labelling things students understand, rather than presenting five letters to memorise." },

    { kicker: "Delta",
      title: "How much it moves when the underlying moves",
      bullets: [
        "**Delta 0.60 means the option gains about 0.60 for every 1.00 the underlying rises.**",
        "Calls run **0 to 1**; puts run **0 to −1** because they move the opposite way.",
        "**Deep in the money → delta near 1**, and the option behaves almost like the underlying itself.",
        "**Deep out of the money → delta near 0**, and the option barely reacts.",
        "**At the money → delta around 0.5.** Roughly half the move comes through.",
        "**It is a sensitivity, not a probability** — the numbers happen to be similar, which is why that myth survives."
      ],
      note: "The 'delta equals probability' shortcut is close enough to be seductive and wrong exactly when it matters, near expiry and in skewed markets. Correct it once, plainly, and move on." },

    { kicker: "Gamma",
      title: "Delta will not stay where you found it",
      bullets: [
        "**Gamma measures how much delta changes as the underlying moves.**",
        "It is why a position that felt modest this morning can feel enormous by the afternoon, without you doing anything.",
        "**Gamma is highest at the money and highest near expiry.** Both at once is where things get quick.",
        "**Buyers are long gamma:** the position gets more responsive in your favour as it works.",
        "**Sellers are short gamma:** losses accelerate against them, which is why an option sold cheaply can become expensive suddenly.",
        "**Pin risk:** at expiry with the underlying sitting on the strike, delta swings between 0 and 1 on tiny moves."
      ],
      note: "Gamma explains the felt experience of options — the sense that positions change character. Connect it to short gamma being the engine behind the many-small-wins-then-one-large-loss profile students already distrust." },

    { kicker: "Theta and vega",
      title: "The two you have already met",
      bullets: [
        "**Theta** is Module 403 with a name: what a day costs you. **Negative if you bought, positive if you sold.**",
        "Convert it to money per day and judge it as a fee. **If you would not pay it daily, do not hold the position.**",
        "**Vega** is Module 404 with a name: what a change in implied volatility does to you.",
        "**Long options are long vega. Short options are short vega.** Longer-dated positions carry more of it.",
        "**Theta and vega usually work against each other for a buyer** — you are paying rent while hoping uncertainty grows."
      ],
      note: "The final bullet frames the buyer's genuine difficulty. Time is charging them while they need volatility to hold up or rise. That tension is why buyers need to be right quickly." },

    { kicker: "Position greeks",
      title: "Add them up and look at what you actually own",
      bullets: [
        "**Greeks add across legs.** A position's exposure is the sum of its parts.",
        "**Two long calls at delta 0.4 give a position delta of 0.8** — like holding 80 shares, for now.",
        "**A long call and a short call at different strikes** may leave you nearly delta-neutral but very much short vega.",
        "**Read the totals before entering.** Most surprising outcomes come from an exposure nobody intended to take.",
        "**Rho** exists, is about interest rates, and rarely decides anything on short-dated retail positions."
      ],
      note: "This is the practical payoff of the module. A student who reads position greeks before entering will avoid the commonest failure in multi-leg trades: a structure that expresses a view they did not hold." },

    { kicker: "Limits",
      title: "A snapshot, not a forecast",
      bullets: [
        "**The greeks describe this instant only.** Every one of them changes as price, time and volatility change.",
        "**Delta changes because of gamma. Gamma changes too.** Nothing here is fixed.",
        "They tell you **what happens next**, never **what will happen**.",
        "**They are risk management tools, not signals** — a familiar verdict by now.",
        "**Use them to size, to check exposure, and to avoid surprises.** Nothing more."
      ],
      note: "Close on the same note as every other analytical tool in the course. The student has now heard 'context, not signal' about open interest, credit spreads, positioning, implied volatility and the greeks — the repetition is the teaching." }
  ],

  practical: {
    title: "Read a position before you take it",
    time: "40 min",
    intro: "You will build three positions on paper, read their combined greeks, and say in plain English what each one is actually exposed to.",
    setup: [
      "Choose one liquid underlying and record its price.",
      "From the chain, note delta, gamma, theta and vega for the strikes you use."
    ],
    steps: [
      { h: "Single long call", d: "Take an at-the-money call. Record all four greeks. Write one sentence: what does this position need in order to make money?" },
      { h: "Add a second leg", d: "Sell a higher-strike call in the same expiry. Add the greeks together and record the position totals." },
      { h: "Describe the change", d: "In plain English, state what changed. Which exposures got smaller? Which reversed sign? What did you give up, and what did you stop being exposed to?" },
      { h: "Build a third", d: "Construct a position that is close to delta-neutral but clearly long vega. Say what view it expresses without reference to direction." },
      { h: "Convert theta", d: "For all three, express theta as cash per day using the multiplier, and state whether you would accept it as a daily fee." }
    ],
    deliverable: "Three positions with combined greeks, a plain-English sentence per position describing what it needs to work, and theta expressed in cash per day for each.",
    rubric: [
      { c: "Addition", d: "Greeks correctly summed across legs, with signs handled properly for short legs." },
      { c: "Plain English", d: "Each position described in terms of what must happen, not in greek letters." },
      { c: "Non-directional", d: "The third position genuinely expresses a volatility view rather than a disguised directional one." },
      { c: "Daily fee", d: "Theta converted to cash and judged as a fee rather than quoted as a decimal." }
    ],
    pitfalls: [
      "Forgetting to flip the sign on short legs when adding.",
      "Describing positions in greeks rather than in plain English, which hides misunderstanding.",
      "Building a 'volatility' position that is really a directional bet with extra steps.",
      "Ignoring the multiplier when converting theta to cash."
    ]
  },

  homework: [
    "Take one option and record its delta today, then again after the underlying has moved 2%. Report how much delta itself changed, and name the greek responsible.",
    "Find an at-the-money option expiring this week and one expiring in three months. Compare their gamma and write one sentence on what that means for holding either into expiry.",
    "Write one sentence per greek, in your own words, without using the word 'sensitivity'."
  ],

  quiz: [
    { q: "An option has a delta of 0.60. The underlying rises 1.00. The option gains roughly:",
      options: ["0.06", "0.60", "1.00", "1.60"],
      a: 1,
      why: "Delta is how much the option moves per one-point move in the underlying. Deep in the money it approaches 1 and the option behaves almost like the underlying itself." },

    { q: "Why does gamma matter?",
      options: [
        "It measures time decay",
        "It measures how much delta itself changes — so a position's exposure will not stay where you found it",
        "It measures interest rate risk",
        "It only matters to market makers"
      ], a: 1,
      why: "Gamma is why a position that felt modest in the morning can feel enormous by the afternoon without you doing anything. It is highest at the money and near expiry." },

    { q: "You are short options. Your gamma exposure means:",
      options: [
        "Losses accelerate against you as the underlying moves",
        "Gains accelerate in your favour",
        "Nothing changes",
        "Your theta becomes negative"
      ], a: 0,
      why: "Short gamma is the engine behind many small wins and one large loss. It is the same profile as martingale and carry, arriving in yet another costume." },

    { q: "Delta is often described as the probability of finishing in the money. This is:",
      options: [
        "Exactly correct",
        "A rough approximation that breaks precisely when it matters — delta is a sensitivity measure",
        "Only true for puts",
        "Only true at expiry"
      ], a: 1,
      why: "The numbers are similar enough for the myth to survive, but delta measures price sensitivity. Treating it as probability fails near expiry and in skewed markets — the moments you most need it right." },

    { q: "The honest limit of the greeks is that they:",
      options: [
        "Are too complex for retail traders",
        "Describe this instant only, and change as price, time and volatility change",
        "Only work on liquid options",
        "Are calculated differently by every broker"
      ], a: 1,
      why: "They tell you what happens next, never what will happen. Risk management tools, not signals — the same verdict as open interest, credit spreads, positioning and implied volatility." }
  ]
}

]);
