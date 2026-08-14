/* N1 Forex Academy — lessons for Module 701 (Spread Betting track).

   VOICE: Jonathan talking to one student. Short track, and the framing matters:
   this is a wrapper, not a market, so the value is transfer rather than new
   material. The safety point is that stake-per-point is genuinely more
   intuitive than lots — and that intuitiveness is exactly what hides the size. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[701] = [
    {
      title: 'A container, not a new market',
      slides: [0, 1],
      teach: {
        lead: [
          "Last track, and it's a short one — because **spread betting isn't a market at all.**",
          "**It's a wrapper.** A different container for markets you already understand completely.",
          "A spread bet on an index is still a bet on that index. Everything module 106 told you about what moves an index is still true. A spread bet on gold is still gold, with all of module 603 behind it.",
          "**So nothing here replaces your analysis. There is no new analysis.** What changes is how the position is expressed, how it's charged, and how it's treated legally.",
          "That makes this track mostly about **transfer** — recognising things you already own, in unfamiliar packaging.",
          "One thing to know up front: **this is a jurisdictional product.** It's predominantly a UK and Irish thing. Many countries don't permit it at all, and if you're not in one where it's offered, this track is background rather than something you'll use.",
          "The one genuinely new thing is **how you size a position** — and that's where the danger lives."
        ],
        terms: [
          { term: 'Spread bet',
            plain: 'A bet on the price movement of an underlying market, settled in cash.',
            like: 'A different envelope around a letter you have already read.' },
          { term: 'Stake per point',
            plain: 'How much you win or lose for each point the price moves.',
            like: 'A pound a mile. Intuitive — and it does not tell you how long the journey is.' },
          { term: 'Point',
            plain: 'One unit of price movement, defined by the provider for each market.',
            like: 'What counts as "a mile" — and different providers measure it differently.' },
          { term: 'Provider',
            plain: 'The firm you place the bet with. They are your counterparty.',
            like: 'The bookmaker. Not an exchange, and not a neutral party.' }
        ],
        close: [
          "So, sizing. **You bet an amount per point.** £2 a point means every point the market moves is £2 to you, up or down.",
          "**And honestly? That's a more intuitive way to size a position than anything else in this course.** No lots, no contract multipliers, no pip values. Just: how much per point.",
          "**Which is exactly the problem.**",
          "**It doesn't look like a position size.** It looks like a small amount of money, because it's written as one.",
          "**£10 a point on an index trading at 8,000 is roughly £80,000 of exposure.**",
          "Read that again. **The ticket says £10. You are controlling eighty thousand pounds.**",
          "You've met this before, in module 302, where a futures trader quotes their $12,000 of margin and is actually carrying $250,000 of notional. **Same error, much friendlier disguise** — because at least \"margin\" sounds like a technical term. \"£10 a point\" sounds like a tenner.",
          "**So build the habit now: stake per point × price level ≈ notional. Convert it every single time, before you click.**"
        ]
      },
      check: [
        { q: 'A spread bet is best described as:',
          options: ['A separate asset class with its own analysis', 'A wrapper around a market you already understand, sized in stake per point and settled in cash', 'A futures contract with no expiry', 'A form of share ownership'],
          a: 1,
          why: 'The underlying is unchanged, so every track you have completed still applies in full. The wrapper changes how the position is expressed and taxed, not what drives the price.' },
        { q: 'You bet £10 a point on an index trading at 8,000. Your approximate exposure is:',
          options: ['£10', '£800', '£8,000', '£80,000'],
          a: 3,
          why: 'Stake per point × price level ≈ notional. The ticket says £10 and you are controlling roughly £80,000 — module 302\'s notional lesson in the friendliest possible disguise.' }
      ]
    },

    {
      title: 'Who is on the other side, and where the cost hides',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "**You are betting with a firm. Not trading on an exchange.**",
          "That firm is your counterparty, exactly as a CFD broker was in module 103. Their prices are their own — derived from the real market, but quoted by them.",
          "Now contrast that with what you learned two tracks ago.",
          "**In futures, the moment your trade was agreed, a clearing house stepped in between you and whoever took the other side.** The person you traded with became irrelevant. That was the structural advantage.",
          "**Here there is nothing like that.** No central counterparty, no novation, nobody standing behind the firm.",
          "**Which makes module 4's questions exactly as important here as they were there.** Is this provider regulated in *your* country? Which legal entity is your account actually with — the one on the marketing page, or a subsidiary somewhere lighter? And the question that matters most: **can people get their money out?**",
          "Search the provider's name with the word \"withdrawal\" and read the first page. Same test. It still works."
        ],
        terms: [
          { term: 'Notional exposure',
            plain: 'Roughly stake per point × price level. What you actually control.',
            like: 'The value of the whole house, not the deposit.' },
          { term: 'Daily funded bet',
            plain: 'A rolling position charged financing every night, like a CFD.',
            like: 'A rolling contract with a nightly fee.' },
          { term: 'Quarterly bet',
            plain: 'A position with an expiry, with financing built into a wider spread up front.',
            like: 'Paying for the whole season in advance rather than monthly.' }
        ],
        close: [
          "Now the cost, and you'll recognise this immediately.",
          "**Spread betting usually charges no commission at all.**",
          "**And you already know what that means**, because module 4 taught you with a broker offering 1.6 pips and no commission against one offering 0.2 plus a fee.",
          "**The cost is in the spread.** The provider quotes wider than the underlying market, and that difference is the charge. **It didn't disappear. It moved somewhere less visible.**",
          "There are two flavours, and the difference is one you've also met before.",
          "**A daily funded bet** rolls indefinitely and charges you **financing every night** — exactly like the CFD in module 103.",
          "**A quarterly bet** has an expiry, and the financing is **baked into a wider spread up front** instead.",
          "**Which is cheap to open and expensive to hold, and which is the reverse?** You worked that out in module 103, and the answer is the same: **compare total cost over your actual holding period.**",
          "That's really the theme of this whole module. **Almost nothing here is new.** The counterparty question is module 4. The notional question is module 302. The cost question is module 4 and module 103.",
          "**If that feels repetitive — good. That's the framework working.** A wrapper you've never seen before turned out to be answerable entirely with things you already had."
        ]
      },
      check: [
        { q: 'Who is your counterparty in a spread bet?',
          options: ['A central clearing house', 'The provider you placed the bet with — nothing stands between you and them', 'The exchange where the underlying trades', 'Other spread bettors'],
          a: 1,
          why: 'Unlike the futures in module 301, there is no central counterparty and no novation. Module 4\'s questions about regulation, legal entity and withdrawals apply in full.' },
        { q: 'Spread betting usually charges no commission. This means:',
          options: ['It is cheaper than other routes', 'The cost is in a wider spread, and daily funded bets also carry overnight financing', 'There is no cost', 'Costs are charged only on winning bets'],
          a: 1,
          why: 'Exactly the commission-free broker from module 4. The charge moved somewhere less visible, and the comparison must still be made over your actual holding period.' }
      ]
    }
  ];
})();
