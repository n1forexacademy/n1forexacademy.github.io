/* N1 Forex Academy — lessons for Module 403 (Options track).

   VOICE: Jonathan talking to one student. "A bought option loses money while
   nothing happens" is the sentence that reorganises everything they learned in
   four earlier tracks, where a flat market was neutral. The three-things-right
   framing is the honest difficulty of the instrument, and converting theta into
   money per day is what makes it real. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[403] = [
    {
      title: 'The one thing that is certain',
      slides: [0, 1],
      teach: {
        lead: [
          "Last module you learned that a premium splits into **intrinsic plus extrinsic**, and that at expiry **the premium equals intrinsic alone**.",
          "Put those two sentences together and something follows that has no equivalent in any market you've traded.",
          "**Every scrap of extrinsic value must disappear between now and expiry.**",
          "Not might. Must. **This isn't a risk — it's arithmetic.** The extrinsic value is priced for time and uncertainty, and on expiry day there's no time left and nothing left uncertain.",
          "**If you bought the option, that disappearance is your loss. If you sold it, it's your gain.**",
          "Which makes decay the only genuinely certain thing in the whole instrument. Direction is uncertain. Volatility is uncertain. **Decay is guaranteed.**",
          "And that produces a sentence you need to sit with, because it contradicts four tracks of instinct:",
          "**A bought option loses money while nothing happens.**"
        ],
        terms: [
          { term: 'Time decay',
            plain: 'The steady loss of extrinsic value as expiry approaches.',
            like: 'An ice cube on the counter. Nobody has to do anything to it.' },
          { term: 'Theta',
            plain: 'The measure of decay — roughly what the option loses per day, all else equal.',
            like: 'The size of the puddle each hour.' },
          { term: 'Days to expiry',
            plain: 'How long the option has left. The biggest driver of how fast decay bites.',
            like: 'How long the ice has been out. Late on, it goes quickly.' },
          { term: 'Decay curve',
            plain: 'The shape of extrinsic value over time — gentle early, steep at the end.',
            like: 'A slope that starts as a gentle path and finishes as a cliff.' }
        ],
        close: [
          "Think about what a flat market meant in every earlier track. **Nothing.** A share that doesn't move costs you nothing. A currency pair that goes sideways is neutral. A bond you hold pays its coupon regardless.",
          "**Here, standing still is a losing outcome.** Every day the underlying does nothing, some of what you paid quietly leaves.",
          "Now the second thing, which is where people get caught even when they know the first.",
          "**Decay is not a straight line.** It doesn't shed value evenly across its life.",
          "**It falls slowly at first, then accelerates sharply.** An option loses a modest share of its time value over its early months and **the bulk of it in the final weeks.** The last month is the steep part. The last week is steeper still.",
          "It's ice on a counter — hardly anything for a while, then all of a sudden it's water.",
          "**For a buyer, holding through the final stretch is the most expensive place to be.** For a seller, that stretch is where the income actually arrives — and also where a sudden move does the most damage."
        ]
      },
      check: [
        { q: 'You buy a call. The underlying does not move at all for three weeks. Your position is:',
          options: ['Unchanged, since the underlying is unchanged', 'Down, because extrinsic value decayed while nothing happened', 'Up slightly', 'Impossible to say'],
          a: 1,
          why: 'A bought option loses money while nothing happens. In four earlier tracks a flat market was neutral; here standing still is a losing outcome, and that changes what being right has to mean.' },
        { q: 'How does time decay behave as expiry approaches?',
          options: ['Evenly, day by day', 'It accelerates — the final weeks lose far more extrinsic value than earlier periods', 'It slows down near the end', 'It stops a month before expiry'],
          a: 1,
          why: 'Gentle early, steep at the end. Like ice on a counter — hardly anything for a while, then suddenly it is water. Holding a bought option through the final stretch is the most expensive place to be.' }
      ]
    },

    {
      title: 'Three things right, and choosing your deadline',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Here's the honest difficulty of buying options, and I'd rather you heard it plainly than discovered it.",
          "**To profit, you have to be right about three things at once.**",
          "**Direction.** **Size of move** — big enough to clear the premium. **And timing** — it has to happen before expiry.",
          "Miss any one and you lose:",
          "**Right direction, move too small** — you don't recover the premium. That was the 103 case in module 401.",
          "**Right direction, right size, arrives too late** — the option expired first and you got nothing. This is the painful one, because you were completely right and the market proved it a fortnight after you stopped owning the position.",
          "**Right direction, arrives immediately** — you win, and decay never got a chance to matter.",
          "**Every earlier track asked you to get one of those right. This one asks for all three simultaneously.** That's not a reason to avoid options. It's a reason to stop treating them as a cheaper way to express a view you'd otherwise trade directly."
        ],
        terms: [
          { term: 'Weekly options',
            plain: 'Very short-dated contracts. Cheap, fast-decaying, unforgiving of timing errors.',
            like: 'A ticket that expires on Friday. Cheap for an obvious reason.' },
          { term: 'Long-dated options',
            plain: 'Contracts running a year or more. Slow decay, large premium.',
            like: 'An annual pass. Costs more, and you are not watching the clock.' },
          { term: 'Break-even by expiry',
            plain: 'The price the underlying must reach for a bought option to recover its premium.',
            like: 'The number you have to hit just to get your stake back.' }
        ],
        close: [
          "So how do you choose an expiry? There's a habit worth forming.",
          "**Short-dated options are cheap because they decay fastest. You are not saving money — you are shortening your deadline.**",
          "**Longer-dated options cost more and decay more slowly. You are buying room to be wrong about timing.**",
          "Given that timing is one of three things you have to get right, **buying room is usually worth paying for.** So: pick an expiry with meaningfully more time than your expected move needs, and treat the extra as the cost of being human.",
          "**Weekly options are the extreme case.** Cheap, thrilling, and they punish a timing error absolutely — right view, wrong week, nothing.",
          "And here's the practical rule I'd actually like you to use, because it converts an abstract greek into something you can judge:",
          "**Before entering, work out the decay in money per day. If you wouldn't accept that as a daily fee for holding the position, don't take the trade.**",
          "Last thing. Having heard all this, you'll be thinking: *decay favours the seller, so I should sell.*",
          "**Slow down.** Decay does favour the seller. But the seller is being **paid a capped amount to carry an uncapped risk.** Collecting decay is an income with a tail — many small gains and a rare large loss.",
          "**You've seen that shape three times now**: martingale in module 10, carry in module 206, selling options here. **Neither side is free money.** The buyer pays for possibility; the seller is paid for danger.",
          "**Choose the side whose failure mode you can survive** — not the one whose success looks more frequent."
        ]
      },
      check: [
        { q: 'A weekly option is much cheaper than a three-month one at the same strike. This means:',
          options: ['It is better value', 'It has less time to work and decays fastest — you are buying a shorter deadline, not saving money', 'It has more intrinsic value', 'It is more liquid'],
          a: 1,
          why: 'Cheap short-dated options are cheap because the deadline is close. Since timing is one of the three things you must get right, buying room is usually worth paying for.' },
        { q: 'Decay favours the option seller. Does it follow that selling is the better side?',
          options: ['Yes — collect the decay', 'No — the seller is paid a capped amount to carry an uncapped risk; choose the side whose failure you can survive', 'Yes, provided you only sell out-of-the-money options', 'Only for professional traders'],
          a: 1,
          why: 'Collecting decay is an income with a tail: many small gains and a rare large loss. Same shape as martingale and carry — the decision is about which failure mode you can withstand.' }
      ]
    }
  ];
})();
