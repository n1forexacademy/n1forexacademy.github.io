/* N1 Forex Academy — lessons for Module 304 (Futures track).

   VOICE: Jonathan talking to one student. "The futures leg is supposed to lose"
   is the sentence that unlocks the whole module — until it lands, students keep
   reading commercial positioning as a forecast. The second lesson has to kill
   "follow the commercials", which is the commonest misuse of this data. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[304] = [
    {
      title: 'Most of this money is not trying to make money',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Here's something that changes how you read this entire market.",
          "**A large share of the money in futures is not trying to profit.** It's trying to stop worrying.",
          "An airline needs jet fuel next winter. A copper miner will have metal to sell next quarter. A bakery needs wheat in September. **None of them wants to guess the price. They want to know it**, so they can set their own prices and plan a business.",
          "So they take a futures position that moves **opposite** to their business.",
          "The miner will have copper to sell, so they **sell copper futures** now. The airline will need fuel, so they **buy fuel futures** now.",
          "And here's the sentence that unlocks the whole thing. It sounds wrong the first time:",
          "**The futures leg is supposed to lose when the business wins.**"
        ],
        terms: [
          { term: 'Hedger',
            plain: 'Someone using futures to remove price risk from a real business.',
            like: 'Buying insurance. You are not hoping the house burns down.' },
          { term: 'Speculator',
            plain: 'Someone taking price risk hoping to profit — and, in doing so, providing the other side of a hedge.',
            like: 'The insurance company. Takes on the risk somebody else wants rid of.' },
          { term: 'Short hedge',
            plain: 'A producer selling futures against output they will have later.',
            like: 'The farmer fixing a price for a harvest still in the ground.' },
          { term: 'Long hedge',
            plain: 'A consumer buying futures against an input they will need later.',
            like: 'Fixing your energy tariff before winter.' }
        ],
        close: [
          "Let me prove it, because it only clicks when you work both directions.",
          "**A miner sells copper futures at £8,000 a tonne.**",
          "**Copper falls to £6,000.** The mine sells its actual metal for £2,000 less than it hoped — painful. But the short futures position **gained** £2,000. **Net: about £8,000**, which is what they wanted.",
          "**Copper rises to £10,000.** The mine sells its actual metal for £2,000 more — lovely. But the short futures position **lost** £2,000. **Net: about £8,000**, which is what they wanted.",
          "**Either way they get their number.** The hedge worked in both cases, including the one where the futures lost money. That losing leg is not a failure — **it's the price of certainty**, paid in the good scenario.",
          "Which is where **speculators** come in, and it's worth defending them because they get a bad press.",
          "Somebody has to take the other side. Without speculators, the miner has to find a wire manufacturer who wants exactly that tonnage on exactly that date at exactly that price. **That's why these markets were nearly unusable before speculators showed up in volume.**",
          "One honest caveat before you get too comfortable: **no hedge is perfect.** If you hedge jet fuel using crude oil futures, they're different products and needn't move together. That gap is **basis risk**, and it means hedging converts a big uncertain risk into a small residual one. Good trade. Not magic."
        ]
      },
      check: [
        { q: 'A wheat farmer sells futures, and by harvest wheat has risen sharply. The futures leg loses money. Has the hedge failed?',
          options: ['Yes — they lost money on the futures', 'No — the business sold its wheat for more, and the two roughly cancel to the price they fixed', 'Yes, they should have bought futures instead', 'It depends on the contract month'],
          a: 1,
          why: 'The futures leg is supposed to lose when the business wins. That is the hedge working. They gave up the better price in exchange for having known their number back in March.' },
        { q: 'A jet fuel buyer hedges using crude oil futures. What risk remains?',
          options: ['None — the hedge is complete', 'Basis risk: crude and jet fuel are different products and need not move together', 'Only margin risk', 'Only the commission'],
          a: 1,
          why: 'The standardisation that makes a contract tradeable is exactly what creates basis risk. A hedge turns a large uncertain risk into a small residual one — genuinely useful, and not perfect protection.' }
      ]
    },

    {
      title: 'Reading who holds what',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Futures give you something no other market you've studied does. **You can see who holds what.**",
          "Regulators publish **positioning reports** breaking the open interest down by type of participant. The best known is the American COT report, and it's free.",
          "**Commercials** are hedgers with a real business use — the miners and the airlines. **Non-commercials** are large speculators, mostly funds.",
          "Now, here is where almost everybody goes wrong, and it costs them months.",
          "You'll read that commercials are \"the smart money\" and you should follow them. So you look at a rising market, see commercials heavily **short**, and conclude the clever people expect a fall.",
          "**They don't. They're selling their own output.**",
          "The miner sells futures because they will have copper, not because they have a view. As prices rise, more producers hedge more output — so commercials get *more* short *because* the market is rising. **Reading that as a forecast puts you against a trend for as long as it lasts.**"
        ],
        terms: [
          { term: 'Positioning report',
            plain: 'A published breakdown of who holds what, by participant type.',
            like: 'A guest list. Tells you who is in the room, not what they are about to do.' },
          { term: 'Commercial',
            plain: 'A participant with a business use for the underlying — a producer or a consumer.',
            like: 'The miner and the airline. Insuring, not forecasting.' },
          { term: 'Non-commercial',
            plain: 'Large speculative participants, typically funds.',
            like: 'The people who are there purely for the price.' },
          { term: 'Crowding',
            plain: 'A large share of participants positioned the same way.',
            like: 'Everyone standing on one side of the boat. Fine until it is not.' }
        ],
        close: [
          "So what *is* it good for?",
          "**Crowding.** When speculative positioning gets extremely one-sided, an eventual unwind has more fuel behind it — because everyone who wants to be in already is, and they all have to leave through the same door.",
          "That's genuinely useful. But be precise about what it means:",
          "**Crowding tells you about the severity of an unwind. It tells you nothing about the timing.**",
          "And the limits are real. **The data is stale** — most reports describe a date several days before publication. **Extremes persist**, and get more extreme; a crowded position can crowd considerably further before it breaks. **The categories are imperfect**, because some participants don't behave the way their classification suggests.",
          "You've met this shape of thing three times now: **open interest** in module 301, **credit spreads** in module 204, and now positioning. Same verdict every time.",
          "**Excellent context. Poor trigger.**",
          "Use it to be more sceptical of a crowded trade and to size a bit smaller. The moment you turn it into an entry signal you're doing exactly what module 12 warned you about — and it'll look like analysis right up until the backtest.",
          "The question I'd rather you took from this module is simpler, and you can ask it of any futures market you ever look at: **who needs this contract, and why?**"
        ]
      },
      check: [
        { q: 'Commercials are heavily net short in a rising market. The best reading is:',
          options: ['Smart money expects a fall, so you should sell', 'They are hedging output they will have — insuring, not forecasting', 'The report is wrong', 'A squeeze is imminent'],
          a: 1,
          why: 'Commercials sell futures against goods they will actually own. As prices rise, more producers hedge more output, so they get more short because the market is rising. Reading it as a view puts you against the trend.' },
        { q: 'Speculative positioning reaches a multi-year extreme. This tells you:',
          options: ['A reversal is imminent', 'The position is crowded, so an eventual unwind has more fuel — but nothing about when', 'Price will keep going the same way', 'The market is being manipulated'],
          a: 1,
          why: 'Extremes persist and get more extreme. Positioning speaks to the severity of an unwind, never its timing — which puts it alongside open interest and credit spreads as context rather than trigger.' }
      ]
    }
  ];
})();
