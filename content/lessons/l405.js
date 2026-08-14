/* N1 Forex Academy — lessons for Module 405 (Options track).

   VOICE: Jonathan talking to one student. The greeks come LAST deliberately —
   every exposure has already been felt, so this is labelling things they
   understand rather than five letters to memorise. The dashboard framing does
   the work: you do not build a speedometer to drive. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[405] = [
    {
      title: 'Five questions you already know to ask',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "\"The greeks\" sound like the hard part. They're not, and here's why you're meeting them last rather than first.",
          "**You've already felt every one of them.** You just haven't been told their names.",
          "Time decay in module 403 — **that's theta.** The volatility exposure you didn't know you had in module 404 — **that's vega.** The way an option's payoff slope changes across the range in module 401 — **that's delta.**",
          "So this isn't new material. **It's labels for things you already understand.**",
          "Each greek answers one question you'd ask anyway: **if this changes, what happens to my option?**",
          "**Delta:** what if the underlying moves? **Gamma:** how fast does delta itself change? **Theta:** what if a day passes? **Vega:** what if volatility changes? **Rho:** what if interest rates change?",
          "**They're a dashboard.** You don't need to know how to build a speedometer to use one."
        ],
        terms: [
          { term: 'Delta',
            plain: 'How much the option moves for a one-point move in the underlying.',
            like: 'The gearing. How much of the wheel\'s turn reaches the road.' },
          { term: 'Gamma',
            plain: 'How much delta itself changes as the underlying moves.',
            like: 'How quickly the gearing changes underneath you while you drive.' },
          { term: 'Theta',
            plain: 'What a day costs you. Negative if you bought, positive if you sold.',
            like: 'The daily rent on the position.' },
          { term: 'Vega',
            plain: 'What a change in implied volatility does to your option price.',
            like: 'How much your premium moves when the insurer revises their view of risk.' },
          { term: 'Rho',
            plain: 'Sensitivity to interest rates. Rarely decides anything on short-dated retail positions.',
            like: 'The dial nobody looks at. It exists; it is seldom the problem.' }
        ],
        close: [
          "Start with **delta**, because it's the one you'll use daily.",
          "**Delta 0.60 means the option gains about 0.60 for every 1.00 the underlying rises.** That's it.",
          "Calls run from 0 to 1. Puts run from 0 to −1, because they move the opposite way.",
          "**Deep in the money, delta approaches 1** — the option behaves almost exactly like the underlying. **Deep out of the money, delta approaches 0** — the option barely reacts to anything. **At the money, delta is around 0.5**, so roughly half the move comes through.",
          "One correction while we're here, because you'll read it everywhere: **delta is not the probability of finishing in the money.**",
          "The numbers are close enough for the myth to survive. But delta measures **price sensitivity**, and treating it as a probability breaks down exactly where it matters — near expiry, and in skewed markets. Use it for what it is.",
          "Now **gamma**, which explains something you'd otherwise find unnerving.",
          "**Gamma measures how much delta itself changes as the underlying moves.** It's why a position that felt modest this morning can feel enormous by the afternoon **without you having done anything.**",
          "**Gamma is highest at the money, and highest near expiry.** Both at once is where things get quick.",
          "**Buyers are long gamma** — the position becomes more responsive in your favour as it works. **Sellers are short gamma** — losses accelerate against them, which is precisely why an option sold cheaply can become expensive very suddenly. **That's the engine behind the many-small-wins-then-one-large-loss shape** you've now met four times."
        ]
      },
      check: [
        { q: 'An option has a delta of 0.60. The underlying rises 1.00. The option gains roughly:',
          options: ['0.06', '0.60', '1.00', '1.60'],
          a: 1,
          why: 'Delta is how much the option moves per one-point move in the underlying. Deep in the money it approaches 1 and the option starts behaving almost like the underlying itself.' },
        { q: 'You are short options. What does your gamma exposure mean?',
          options: ['Losses accelerate against you as the underlying moves', 'Gains accelerate in your favour', 'Nothing changes', 'Your theta turns negative'],
          a: 0,
          why: 'Short gamma is the engine behind many small wins and one large loss — the same profile as martingale and carry, arriving in yet another costume.' }
      ]
    },

    {
      title: 'Adding them up, and what they cannot tell you',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "**Theta** and **vega** you already know from modules 403 and 404. Two things worth adding.",
          "**Convert theta into money per day and judge it as a fee.** If you wouldn't pay that daily to hold the position, don't hold it. That single habit prevents more slow bleeding than any technique.",
          "And notice the tension a buyer lives with: **theta and vega usually pull against each other.** Time is charging you rent while you're hoping uncertainty holds up or grows. **That's why buyers need to be right quickly** — it isn't impatience, it's the structure.",
          "Now the practical payoff of the whole module.",
          "**Greeks add up across legs.** Your position's real exposure is the sum of its parts, and you can read it before you commit.",
          "Two long calls at delta 0.4 give you a **position delta of 0.8** — for now, that's like holding 80 shares.",
          "Buy one call and sell another at a higher strike, and you might end up **nearly delta-neutral but distinctly short vega.** Which means you've built a position that barely cares about direction and cares a great deal about volatility.",
          "**Was that the view you held?** If not, you've just built something that expresses somebody else's opinion."
        ],
        terms: [
          { term: 'Position greeks',
            plain: 'The greeks of every leg added together — the exposure of the whole thing.',
            like: 'Weighing the whole bag, not each item.' },
          { term: 'Delta-neutral',
            plain: 'A position whose value barely changes when the underlying moves a little.',
            like: 'Balanced scales. Not immune to everything — just not tipping on direction.' },
          { term: 'Pin risk',
            plain: 'Near expiry with the underlying sitting on the strike, delta swings wildly on tiny moves.',
            like: 'A coin balanced on its edge. Any nudge decides it.' }
        ],
        close: [
          "So the habit: **read the position greeks before you enter, not afterwards.**",
          "Most genuinely surprising options outcomes come from an exposure nobody intended to take. Reading the totals costs thirty seconds and catches almost all of them.",
          "**Rho** exists, measures interest rate sensitivity, and rarely decides anything on short-dated retail positions. Know the name; move on.",
          "Now the honest limitation, and it's the same one you've met with every analytical tool in this course.",
          "**The greeks describe this instant. Nothing more.**",
          "Every one of them changes as price, time and volatility change. Delta shifts because of gamma — and gamma shifts too. **Nothing here is fixed**, which is exactly why a position needs re-reading rather than setting and forgetting.",
          "**They tell you what happens next. They never tell you what will happen.**",
          "You've now heard that verdict about **open interest** in module 301, **credit spreads** in module 204, **positioning** in module 304, **implied volatility** in module 404, and now the greeks.",
          "**Five different tools, one answer: context, not signal.** The repetition isn't laziness on my part — it's the single most reliable way to tell a genuine analytical tool from something being sold to you as a trading system.",
          "Use them to size, to check your exposure, and to avoid surprises. That's the job."
        ]
      },
      check: [
        { q: 'Delta is often described as the probability of finishing in the money. This is:',
          options: ['Exactly correct', 'A rough approximation that breaks precisely when it matters — delta measures price sensitivity', 'Only true for puts', 'Only true at expiry'],
          a: 1,
          why: 'The numbers are similar enough for the myth to survive, but delta is a sensitivity measure. Treating it as probability fails near expiry and in skewed markets — the moments you most need it right.' },
        { q: 'The honest limit of the greeks is that they:',
          options: ['Are too complex for retail traders', 'Describe this instant only, and change as price, time and volatility change', 'Only work on liquid options', 'Are calculated differently by every broker'],
          a: 1,
          why: 'They tell you what happens next, never what will happen. Risk management tools, not signals — the same verdict as open interest, credit spreads, positioning and implied volatility.' }
      ]
    }
  ];
})();
