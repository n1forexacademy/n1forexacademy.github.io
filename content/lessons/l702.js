/* N1 Forex Academy — lessons for Module 702 (Spread Betting track).

   VOICE: Jonathan talking to one student. The £2.50-a-point-is-£20,000 arithmetic
   is the strongest thing in this track and it has to be computed rather than
   asserted. The two-limit structure is module 107 arriving again, and saying so
   is the point — the framework transfers. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[702] = [
    {
      title: 'One formula you already know',
      slides: [0, 1],
      teach: {
        lead: [
          "Sizing here uses the same line it has used in every market, with the units swapped.",
          "**Stake per point = (Account × Risk %) ÷ Stop distance in points**",
          "Work one. **£10,000 account. 1% risk. The chart puts your stop 40 points away.**",
          "Risk amount: £10,000 × 1% = **£100**.",
          "**Stake = £100 ÷ 40 points = £2.50 per point.**",
          "Same order of operations as always: **the chart sets the stop, and the stake falls out of it.** If you ever find yourself picking a stake first, you've skipped a step — that's module 10, unchanged, for the sixth market running.",
          "So far, so familiar. **Now do the second calculation**, and this is the one that should stop you."
        ],
        terms: [
          { term: 'Risk amount',
            plain: 'Account × risk percentage. The most this trade may cost if the stop works.',
            like: 'The cash you decided to take out, before you left the house.' },
          { term: 'Stop distance in points',
            plain: 'How far your stop sits from entry, in the provider\'s points.',
            like: 'How far the exit is. Measured in their units, not yours.' },
          { term: 'Notional exposure',
            plain: 'Stake per point × price level. What you actually control.',
            like: 'The value of the whole house, not the deposit you put down.' },
          { term: 'Exposure limit',
            plain: 'A cap on notional as a share of the account, separate from the risk limit.',
            like: 'A weight limit as well as a size limit. Both have to pass.' }
        ],
        close: [
          "**That £2.50 a point is sitting on an index trading at 8,000.**",
          "**Notional ≈ stake per point × price level.**",
          "**£2.50 × 8,000 = £20,000.**",
          "**On a £10,000 account.**",
          "Sit with that. **You are controlling twice your entire account, from a bet that risks 1% and reads as two pounds fifty on the ticket.**",
          "Nothing on the screen tells you this. The ticket says £2.50. The risk calculation says £100. **Both are correct, and both are describing something other than what you're holding.**",
          "**This is why stake-per-point sizing produces oversized positions so reliably.** It isn't that people are careless. It's that the vocabulary is genuinely friendly and genuinely uninformative at the same time.",
          "Lots at least *sound* like a technical unit you should look up. **\"£2.50 a point\" sounds like the cost of a coffee.**",
          "So: **compute the notional every single time, before you click.** It's one multiplication."
        ]
      },
      check: [
        { q: '£10,000 account, 1% risk, stop 40 points away. What is the correct stake per point?',
          options: ['£0.40', '£2.50', '£4.00', '£25.00'],
          a: 1,
          why: 'Risk amount is £100; £100 ÷ 40 points = £2.50 per point. Same order of operations as every other market — the chart sets the stop and the stake falls out of it.' },
        { q: 'That £2.50 a point sits on an index trading at 8,000. Your notional exposure is roughly:',
          options: ['£2,500', '£8,000', '£20,000', '£200'],
          a: 2,
          why: '£2.50 × 8,000 = £20,000 — twice a £10,000 account, from a bet that risks 1% and reads as £2.50 on the ticket. This is why the second calculation is not optional.' }
      ]
    },

    {
      title: 'Two limits, and knowing when to walk away',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "You've just seen a position that passes the risk test and is twice the account. **So the risk test alone is clearly not enough.**",
          "**You need two limits, and both have to pass.**",
          "**The risk limit** — what you lose if the stop works. Typically 1%.",
          "**The exposure limit** — notional as a share of the account, for the times when the stop *doesn't* work.",
          "**And you've met this exact pair before**, in module 107. There, a carefully sized 1% share position turned out to be 12% of the portfolio, and a 40% overnight gap cost 4.8% rather than the 1% intended — because a gap bypasses the stop entirely and the loss is then set by **exposure**, not by where the stop sat.",
          "**Same structure here. Same reason.**",
          "The difference is that these are high-leverage products, so **the exposure limit binds far more often here.** In equities it caught you occasionally. Here it will catch you constantly, and that's the limit doing its job."
        ],
        terms: [
          { term: 'Minimum stake',
            plain: 'The smallest bet a provider will accept on a market.',
            like: 'A minimum order value. Set by the shop, not by your budget.' },
          { term: 'Point value check',
            plain: 'Confirming what one point means on this market with this provider, before sizing.',
            like: 'Checking whether the recipe means US cups or UK cups. Same word, different answer.' }
        ],
        close: [
          "Two practical things before we finish.",
          "**First: check what a point actually means, on that market, with that provider, before you size anything.**",
          "Points are not universally pips. Providers define them per market, and they don't all agree. **Getting it wrong scales your position by a factor of ten**, and nothing on the ticket will warn you. It takes fifteen seconds to check.",
          "**Second: sometimes the minimum stake is already too big.**",
          "Every market has a minimum the provider will accept. **That's a commercial floor, not a risk-based one** — it's set to make the market worth offering, not to suit your account.",
          "On some markets, **the minimum stake breaches a small account's risk policy before you've done anything at all.**",
          "**Then that market simply isn't available to you.**",
          "You've reached this conclusion before. Module 302, where the correct futures size worked out at 0.4 contracts and you can't buy 0.4 of a contract. **Same shape, same answer.**",
          "**And do not solve it by tightening the stop** so the arithmetic fits. That puts your stop somewhere the idea isn't wrong yet, so you get taken out by ordinary noise on trades you were right about. **It's worse than the problem.**",
          "**Not trading is a real answer.** That's the fifth market in this course where I've told you so, and it's the same answer every time for the same reason."
        ]
      },
      check: [
        { q: 'Why do you need an exposure limit as well as a risk limit?',
          options: ['Regulators require both', 'Because a gap bypasses the stop, and then the loss is set by exposure rather than by where the stop sat', 'To reduce financing costs', 'Only for shares'],
          a: 1,
          why: 'Exactly module 107\'s pair of limits, for exactly the same reason. On a high-leverage wrapper the exposure limit binds far more often than it did in equities.' },
        { q: 'The provider\'s minimum stake on a market already breaches your 1% risk policy. What follows?',
          options: ['Raise the risk percentage for that market', 'That market is not available to you at this account size', 'Use a tighter stop so the arithmetic works', 'Trade it and monitor closely'],
          a: 1,
          why: 'A minimum stake is a commercial floor, not a risk-based one. Tightening the stop is worse — it puts the stop where the idea is not yet wrong. Same answer as the 0.4-contract problem in module 302.' }
      ]
    }
  ];
})();
