/* N1 Forex Academy — lessons for Module 402 (Options track).

   VOICE: Jonathan talking to one student. The intrinsic/extrinsic split is a
   two-second calculation that reframes every option they will ever look at, and
   most retail traders never do it. The second lesson has to kill "cheap options
   are good value", which is how beginners lose money slowly and repeatedly. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[402] = [
    {
      title: 'Every premium has exactly two parts',
      slides: [0, 1],
      teach: {
        lead: [
          "Here's a calculation that takes two seconds, changes how you see every option, and almost nobody bothers with.",
          "**Any premium splits into exactly two parts.**",
          "**Intrinsic value** is what the option would pay if you exercised it this instant. **Extrinsic value** is everything else you're paying on top.",
          "Work one. **Call, strike 100, underlying at 108, premium 11.**",
          "The right to buy at 100 something worth 108 is worth **8**. That's the intrinsic value — real, checkable, arithmetic.",
          "But you paid 11. So the other **3 is extrinsic**.",
          "One rule about intrinsic worth stating: **it can never be negative.** A call with strike 100 and the underlying at 95 has intrinsic value of **zero**, not minus five. You simply wouldn't exercise a right to buy at 100 when the market sells at 95 — you'd walk away."
        ],
        terms: [
          { term: 'Intrinsic value',
            plain: 'What the option would pay if exercised right now. Floors at zero.',
            like: 'What the voucher saves you today. Never less than nothing — you can bin it.' },
          { term: 'Extrinsic value (time value)',
            plain: 'Everything above intrinsic. What the market charges for time and uncertainty.',
            like: 'The bit of the price that is hope. It has a shelf life.' },
          { term: 'In the money',
            plain: 'The option has intrinsic value — a call below the underlying, a put above it.',
            like: 'A voucher worth using today.' },
          { term: 'At the money',
            plain: 'The strike sits at roughly the current price. Zero intrinsic, maximum extrinsic.',
            like: 'A genuine coin flip. Nothing decided yet, which is exactly why it costs most.' },
          { term: 'Out of the money',
            plain: 'No intrinsic value at all. The whole premium is extrinsic.',
            like: 'A voucher for a price the shop is not charging. Only useful if things change.' }
        ],
        close: [
          "Now, which options carry the most extrinsic value? People guess the cheap far-out ones, or the expensive deep ones. **It's neither — it's the ones at the money.**",
          "Here's why, and it's more intuitive than it sounds.",
          "**Extrinsic value is the price of uncertainty.** So ask yourself what you'd pay for a bet that's already 99% settled. Almost nothing — it's basically decided. What about a bet that's genuinely even? **That's worth real money, because anything could happen.**",
          "A **deep in-the-money** option is nearly certain to finish in the money. A **deep out-of-the-money** option is nearly certain to finish worthless. Both are, in their different ways, mostly decided — so there's little uncertainty left to charge for.",
          "**At the money is the genuine coin flip. Maximum uncertainty, maximum extrinsic value.**",
          "And one thing to file away for the next module, because it's the hinge everything turns on:",
          "**At expiry, extrinsic value is zero.** The premium equals the intrinsic value and nothing else. Every scrap of that time value has to disappear between now and then.",
          "**Where it goes, and how fast, is the next module — and it's why most bought options lose.**"
        ]
      },
      check: [
        { q: 'A call has strike 100, the underlying is 108, and the premium is 11. The extrinsic value is:',
          options: ['11', '8', '3', '0'],
          a: 2,
          why: 'Intrinsic is 108 − 100 = 8, so the remaining 3 is extrinsic. That split takes two seconds and reframes every option you look at — most retail traders never perform it.' },
        { q: 'Which option carries the most extrinsic value, all else equal?',
          options: ['Deep in the money', 'At the money', 'Deep out of the money', 'They all carry the same'],
          a: 1,
          why: 'Extrinsic value is the price of uncertainty, and at the money is the genuine coin flip. Both extremes are largely decided already, so there is much less to charge for.' }
      ]
    },

    {
      title: 'Why cheap usually means unlikely',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "An out-of-the-money call is worth **nothing** if you exercised it today. So why would anyone pay for one?",
          "**Because there's time left**, and in that time the underlying might move far enough to make it valuable.",
          "That's all extrinsic value is. **You're buying possibility, priced by probability.** Nothing mystical about it.",
          "Which gives you two dials, and they work exactly the way you'd expect:",
          "**Further out of the money → less likely → cheaper.** **More time remaining → more chance → dearer.**",
          "Now here's where that leads, and it's the instinct this lesson exists to break.",
          "You'll look at a chain, see an option costing 0.15 while the ones nearby cost 4.00, and think you've found value. **You haven't.**",
          "**A cheap option is almost always cheap for the correct reason: it is unlikely to pay, and the market has priced that accurately.**"
        ],
        terms: [
          { term: 'Option chain',
            plain: 'The table of every listed strike and expiry, with prices, volume and open interest.',
            like: 'A full price list. Every combination, all at once.' },
          { term: 'Bid-ask spread',
            plain: 'The gap between what you can sell at and buy at. Often wide on options.',
            like: 'The bureau de change spread from module 1 — except sometimes it is 20% rather than 2%.' },
          { term: 'Open interest',
            plain: 'How many contracts are outstanding at that strike. Thin means a hard exit.',
            like: 'How many people are in the room. Easy to walk into an empty one; awkward when you want a lift home.' }
        ],
        close: [
          "Buying far-out cheap options is a **lottery ticket** strategy. That's not a moral judgement — lottery tickets are cheap, occasionally pay enormously, and lose almost every time. **Just know which game you've entered.** People who think they're finding bargains are usually buying tickets.",
          "Two practical things about reading a chain, and they're the ones that cost money quietly.",
          "**Option spreads are frequently wide.** Not 2 pips wide — sometimes **several percent of the premium**. A 0.10 spread sounds trivial until you notice the premium is 0.50. **That's 20%, and you pay it twice** — going in and coming out. The trade has to clear 40% before you're level.",
          "**And check the open interest at your strike.** A strike nobody trades is easy to buy and genuinely unpleasant to sell. You'll be quoted a price that assumes you have nowhere else to go, because you don't.",
          "This is module 102's lesson arriving again: **only trade the liquid strikes and the liquid expiries.** It is easy to accept \"only trade deep order books\" for shares and then abandon it completely in options, because the strike you want looks so tidy on the payoff diagram.",
          "**A strategy that only works at an illiquid strike does not work.**"
        ]
      },
      check: [
        { q: 'An out-of-the-money option is very cheap. The most likely reason is:',
          options: ['The market has mispriced it', 'It is unlikely to pay out, and the price reflects that probability correctly', 'Nobody is trading it', 'It must be close to expiry'],
          a: 1,
          why: 'Cheap usually means unlikely. The market is quoting a probability, not offering a bargain — and treating low premium as good value is how beginners lose slowly and repeatedly.' },
        { q: 'Why does the bid-ask spread matter more in options than in a liquid share?',
          options: ['It does not', 'Spreads are frequently several percent of the premium, and you pay it both entering and leaving', 'Options carry no commission', 'Because options settle differently'],
          a: 1,
          why: 'A 0.10 spread sounds trivial until the premium is 0.50 — that is 20%, paid twice, so the trade must clear 40% before you break even. Trade liquid strikes for the same reason you trade liquid names.' }
      ]
    }
  ];
})();
