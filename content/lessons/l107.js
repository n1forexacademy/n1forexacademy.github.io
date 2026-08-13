/* N1 Forex Academy — lessons for Module 107 (Equities track).

   VOICE: Jonathan talking to one student. The key move is that risk% and
   concentration are two different numbers, and a student who only watches the
   first will be destroyed by a gap. The 40% gap test converts an abstract
   limit into something imaginable. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[107] = [
    {
      title: 'The same formula, different units',
      slides: [0, 1],
      teach: {
        lead: [
          "Good news first: **the position sizing you learned in module 10 carries over completely.** Same logic, same order of operations, same principle that size is an output rather than a choice. Only the units change.",
          "No pips, no lot sizes, no pip value. Just pounds per share.",
          "**Shares to buy = (Portfolio × Risk %) ÷ (Entry price − Stop price)**",
          "Work it through. £20,000 portfolio. You've decided on 1% risk. You want to buy at £50, and the chart says your stop belongs at £46.",
          "Risk amount: 20,000 × 0.01 = **£200.**",
          "Per-share risk: 50 − 46 = **£4.**",
          "**Shares = 200 ÷ 4 = 50 shares.**",
          "Now look at what you've actually bought. **50 shares at £50 is a £2,500 position** — that's **12.5% of your entire portfolio**, to risk 1%.",
          "**Two numbers, and you need to watch both.**"
        ],
        terms: [
          { term: 'Position size (shares)',
            plain: 'How many shares to buy, worked out from your risk amount and your stop distance.',
            like: 'Same recipe as forex. Different measuring jug.' },
          { term: 'Concentration',
            plain: 'How much of your whole portfolio is sitting in one company.',
            like: 'How many eggs are in that basket, regardless of how carefully you are carrying it.' },
          { term: 'Gap risk',
            plain: 'Price reopening far from where it closed, straight past your stop.',
            like: 'Sleeping through the whole thing. You could not have reacted.' }
        ],
        close: [
          "That 1%-versus-12.5% split is the whole lesson, so let me be blunt about why.",
          "**Your stop only protects you while the market is trading.**",
          "In forex that was a minor caveat — a real gap meant a weekend or a genuine shock. **In equities it's a quarterly certainty.** Every company you own has scheduled dates when the market is shut, big news lands, and the shares reopen somewhere completely different.",
          "When that happens, your stop doesn't limit your loss. **Your position size does.**",
          "So if that £2,500 holding gaps down 40% overnight on a profit warning, you don't lose the £200 you planned. **You lose about £1,000** — 5% of your portfolio, on a trade you'd carefully sized to risk 1%.",
          "Nothing went wrong with your maths. The stop simply had nothing to fill against.",
          "**Stops are still worth having** — most exits happen perfectly normally, and trading without one is worse in every market. But in equities you have to **size assuming a bad exit rather than the planned one.** That's the discipline this whole module is about."
        ]
      },
      check: [
        { q: '£20,000 portfolio, 1% risk, entry £50, stop £46. How many shares?',
          options: ['4', '50', '200', '400'],
          a: 1,
          why: 'Risk is £200; per-share risk is £4; 50 shares. That is a £2,500 position — 12.5% of the portfolio. Note both numbers: the risk is 1% but the concentration is 12.5%.' },
        { q: 'Why do stops behave differently in equities than in forex?',
          options: ['Brokers execute them differently', 'Overnight gaps and trading halts are routine, so the stop may fill far from its level or not at all', 'Stops are optional', 'Volatility is lower'],
          a: 1,
          why: 'In forex a catastrophic gap was a rare tail event. Here it is a scheduled quarterly possibility, so a bad exit is a planning assumption rather than an exception.' }
      ]
    },

    {
      title: 'Two limits, and total heat',
      slides: [2, 3],
      teach: {
        lead: [
          "Because a gap bypasses your stop, **one limit is no longer enough.** You need two.",
          "**Risk per trade** — what you lose if the stop does its job. Typically 1%, exactly as before.",
          "**Concentration per position** — how much of the portfolio sits in that one company. **This is your defence against the gap**, and it's the limit forex never needed.",
          "A sensible starting point: **no single company above 10% of your portfolio.**",
          "And from module 106, **a sector limit too** — perhaps 25% to 30% in any one industry, because five banks are one position.",
          "Here's the test that makes this real rather than abstract. Before you buy, ask:",
          "**\"If this company gapped down 40% overnight, what would that do to me?\"**",
          "Not \"could it?\" — it could, that's the point. What would it *do*? If the answer is anything worse than uncomfortable, **the position is too large**, regardless of where your stop is sitting."
        ],
        terms: [
          { term: 'Concentration limit',
            plain: 'The most you will hold in one company, as a share of the whole portfolio.',
            like: 'How much of the meal you will let be potatoes.' },
          { term: 'Portfolio heat',
            plain: 'What you would lose if every stop you currently have were hit at once.',
            like: 'Adding up every bet on the table, not just the one you are watching.' },
          { term: 'Rebalancing',
            plain: 'Trimming things back to your intended sizes after prices have moved them out of shape.',
            like: 'Repacking a bag that has gone lopsided.' }
        ],
        close: [
          "**Portfolio heat** is the last piece: add up what you'd lose if **every stop you hold were hit at the same time.**",
          "That sounds pessimistic. It isn't — it's a description of an ordinary bad month. **In a market-wide fall, all your stops hit together**, because correlations tighten and everything drops at once. Heat is measuring exactly that scenario.",
          "**Keep total heat bounded — around 5% to 6% across everything.**",
          "And as always, **correlated positions count once.** Four banks in a six-position portfolio isn't four separate risks; it's approximately one, and your heat calculation should say so.",
          "One last thing, and it's a genuine mental shift coming from forex:",
          "**Cash is a position.**",
          "In forex you were either in a trade or you weren't, and being out felt like doing nothing. In a portfolio, **how much you're holding in cash is itself a decision** — an active one, made deliberately.",
          "Choosing not to be fully invested is frequently the correct call. It isn't a failure to act, and it isn't money going to waste. It's the only thing that lets you buy anything during the month everyone else is forced to sell."
        ]
      },
      check: [
        { q: 'Why does concentration matter as much as risk percentage?',
          options: ['It does not', 'Because gaps bypass the stop entirely, exposing the full position rather than the intended risk', 'Because brokers charge by size', 'Because of commission'],
          a: 1,
          why: 'A stop only limits loss in a continuously trading market. When a share gaps 40% on a warning, your loss is driven by position size, not by where the stop sat.' },
        { q: 'You hold six positions, four of them banks. For portfolio heat, the banks count as:',
          options: ['Four separate positions', 'Approximately one, because they will fall together', 'Excluded', 'Double, for prudence'],
          a: 1,
          why: 'Sector holdings share drivers and their stops hit together. Heat measures what happens when every stop fires at once, which is precisely a market-wide fall.' }
      ]
    },

    {
      title: 'Extending your risk policy',
      slides: [4, 5],
      teach: {
        lead: [
          "You already have a signed risk policy from module 10. **You don't need a new one. You need to extend it.**",
          "**Everything carries over unchanged:**",
          "Risk per trade, typically 1%. Stops placed where the idea is proven wrong. **Never widen a stop. Never average down.** Honour your daily and weekly stops. Count correlated positions once.",
          "**Four things get added:**",
          "**Maximum position size** as a percentage of the portfolio — around 10%. This is the gap defence.",
          "**Maximum sector exposure** — around 25% to 30%, from module 106.",
          "**Total portfolio heat** — around 5% to 6% if every stop fired together.",
          "**An events rule** — what you do into scheduled earnings, from module 105, including the non-negotiable one about always knowing the date."
        ],
        terms: [
          { term: 'Overnight risk',
            plain: 'Exposure you are holding while the exchange is shut and you cannot get out.',
            like: 'Leaving the car somewhere overnight. Nothing you can do about it until morning.' },
          { term: 'Trimming',
            plain: 'Selling part of a position that has grown beyond your limit.',
            like: 'Taking some off the top so the pile stops wobbling.' },
          { term: 'Dry powder',
            plain: 'Cash deliberately held back so you can act when something worth buying appears.',
            like: 'Keeping a bit back at an auction. Useless if you spent it all in the first ten minutes.' }
        ],
        close: [
          "**The principles are unchanged. Only the specific limits are new.**",
          "That's worth noticing, because it tells you something about what you actually learned in the forex track. You didn't learn a set of currency facts. **You learned a way of thinking about not being destroyed**, and it transfers.",
          "The failure modes just look different:",
          "**Forex punished over-leverage.** You watched an account die from a margin call in the module 3 drill.",
          "**Equities punish over-concentration.** Nobody gets a margin call here — they simply have too much in one company on the wrong Tuesday morning, and find out that a 1% risk and a 12.5% position are very different things.",
          "**Same lesson, different mechanism.** Which is why the 40% gap test is worth doing every single time until you no longer need to."
        ]
      },
      check: [
        { q: 'The practical test for whether a position is too large:',
          options: ['Whether the stop feels comfortable', 'Asking what a 40% overnight gap in that share would do to the portfolio', 'Whether it fits the commission budget', 'Whether the company is profitable'],
          a: 1,
          why: 'It turns an abstract limit into an imaginable event. If the answer is unacceptable, the position is too large regardless of where the stop sits.' },
        { q: 'In an equity portfolio, holding cash is:',
          options: ['A failure to deploy capital', 'A legitimate position and an active decision', 'Only for beginners', 'The same as being invested'],
          a: 1,
          why: 'Forex conditions traders to be either in or out of one trade. In a portfolio the cash proportion is itself a risk decision, and choosing not to hold is often correct.' }
      ]
    }
  ];
})();
