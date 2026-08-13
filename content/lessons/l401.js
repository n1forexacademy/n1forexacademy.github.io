/* N1 Forex Academy — lessons for Module 401 (Options track).

   VOICE: Jonathan talking to one student. The insurance framing carries the
   whole module — it explains the premium, the asymmetry, why sellers need
   capital, and why "most options expire worthless" is a terrible argument.
   The 103 case matters: being right about direction and still losing is where
   beginner option buyers actually go wrong. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[401] = [
    {
      title: 'One side gets to choose',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "You've just spent five modules on futures, where **both sides were obligations.** The farmer had to sell, the bakery had to buy, and neither could change their mind.",
          "**An option breaks that symmetry, and that break is the entire instrument.**",
          "**The buyer gets a right. The seller takes on an obligation.**",
          "Four things define one. Whether it's a **call** (the right to *buy* at a set price) or a **put** (the right to *sell* at a set price). The **strike** — the price it can be done at. The **expiry** — the date the right runs out. And the **premium** — what the buyer pays for it.",
          "Now, a right that cost nothing would be free money, so the buyer pays that premium up front. **It is non-refundable.** Gone the moment the trade is done, whatever happens next. And **the seller keeps it in every single scenario** — that's their entire compensation.",
          "If that arrangement sounds familiar, it should. **This is insurance.**",
          "You pay a known, modest amount to remove a risk you can't predict. The insurer takes the money and carries the risk. **An option is structurally the same trade**, and holding that comparison in your head will explain almost everything else in this track."
        ],
        terms: [
          { term: 'Call',
            plain: 'The right to buy the underlying at the strike price.',
            like: 'A voucher letting you buy at a fixed price. Use it or bin it.' },
          { term: 'Put',
            plain: 'The right to sell the underlying at the strike price.',
            like: 'An insurance policy on something you own. Claim it or let it lapse.' },
          { term: 'Strike price',
            plain: 'The price at which the option can be exercised. Fixed when it is created.',
            like: 'The price printed on the voucher.' },
          { term: 'Premium',
            plain: 'What the buyer pays for the right. Non-refundable, and the seller keeps it whatever happens.',
            like: 'The insurance premium. You do not get it back for not claiming.' },
          { term: 'Writer (seller)',
            plain: 'The party who sold the option and took on the obligation.',
            like: 'The insurance company. Paid up front, on the hook afterwards.' }
        ],
        close: [
          "Let's put numbers on it, because the shape only lands with numbers.",
          "**You buy a call. Strike 100. Premium 5.** You've spent 5, and that is **the most you can ever lose.**",
          "**Underlying finishes at 95.** Your right to buy at 100 is worthless — you'd buy at 95 in the market. **You lose your 5.** That's the cap working.",
          "**Underlying finishes at 103.** Your right is worth 3. And you paid 5. **So you lost 2.**",
          "**Stop on that one**, because it's where most beginner option buyers actually go wrong. **You were right about direction and you still lost money.**",
          "Your break-even isn't the strike — **it's the strike plus the premium.** 105. You need the move to be right *and* big enough to clear what you paid.",
          "**Underlying at 130?** Your right is worth 30, you paid 5, **you made 25.** And there's no ceiling — at 200 you'd make 95.",
          "**Small capped loss, large uncapped gain, and a hurdle to clear first.** That's what buying an option is."
        ]
      },
      check: [
        { q: 'You buy a call, strike 100, premium 5. At expiry the underlying is 103. Your result:',
          options: ['A profit of 3, since you were right about direction', 'A loss of 2 — the option is worth 3 but you paid 5', 'Break even', 'A loss of the full 5'],
          a: 1,
          why: 'Break-even is strike plus premium, so 105. Being right about direction is not enough — you have to be right by more than you paid. That gap is where most beginner option buyers lose.' },
        { q: 'What does the buyer of an option own?',
          options: ['An obligation to buy at the strike', 'The right, but not the obligation, to trade at the strike by expiry', 'The underlying itself', 'A guarantee against loss'],
          a: 1,
          why: 'The buyer can simply walk away and lose only the premium. That asymmetry is the whole instrument — the seller took the matching obligation and was paid the premium for carrying it.' }
      ]
    },

    {
      title: 'The other side of the trade',
      slides: [3, 4, 5, 6],
      teach: {
        lead: [
          "Now turn the same trade round, because somebody sold you that call.",
          "**They received 5. That is the most they will ever make** — no matter how well it goes for them.",
          "**Underlying finishes at 95.** The option expires worthless. **They keep the 5.** A clean win.",
          "And here's the thing that makes selling so seductive: **that happens a lot.** Most options do expire worthless. Sellers win frequently, and the wins feel effortless — money arrives and nothing is asked of you.",
          "**Underlying finishes at 130.** Now they must hand over, at 100, something worth 130. **They lose 30, having been paid 5. Net −25.**",
          "**Underlying at 300?** They lose 195. **There is no upper bound on a sold call.**",
          "**Capped gain. Uncapped loss.** The exact mirror of what you held."
        ],
        terms: [
          { term: 'Exercise',
            plain: 'The buyer choosing to use their right.',
            like: 'Making the claim on your policy.' },
          { term: 'Assignment',
            plain: 'The seller being required to deliver, because a buyer exercised.',
            like: 'The claim landing on the insurer\'s desk. They do not get to decline it.' },
          { term: 'Expire worthless',
            plain: 'Reaching expiry with no value — buyer loses the premium, seller keeps it.',
            like: 'A policy year with no claim. Everyone goes home; the insurer keeps the money.' },
          { term: 'Multiplier',
            plain: 'How much underlying one contract covers. Equity options usually cover 100 shares.',
            like: 'Buying eggs by the dozen. The quoted price is per egg; the bill is not.' }
        ],
        close: [
          "**So look at the shape of a seller's returns: many small wins, then occasionally one enormous loss.**",
          "**You have seen that shape before.** Module 10, the martingale. Module 206, the carry trade. **Same profile every time, and it ends people who size for the calm periods.**",
          "Selling options is a legitimate, widely used strategy. It is **not the safe side** — it's the **frequently-right side**, and those are very different things. \"Most options expire worthless\" is exactly as good an argument for underwriting insurance without reserves.",
          "One more distinction that catches everybody, and it's the reason direction is the *smallest* part of an options decision.",
          "**A long call and a short put both profit when the underlying rises.** Same direction. Completely different animal.",
          "**Long call:** you pay to be there, loss capped, gain unlimited. **Short put:** you're paid to be there, gain capped, loss very large if the thing collapses.",
          "**So choosing between them isn't a directional decision at all — it's a decision about which risk shape you want to own.** That's the hardest adjustment coming from four tracks where picking a direction *was* the job.",
          "Finally, one practical thing that costs people real money through pure carelessness. **One equity option usually covers 100 shares.** A premium quoted at 2.50 costs **250** per contract, not 2.50. **Check the multiplier before you assume the quoted price is what leaves your account.**"
        ]
      },
      check: [
        { q: 'Why is selling options not simply "the safe side"?',
          options: ['Because most options expire worthless', 'Because the gain is capped at the premium while the loss can be very large — many small wins then one enormous loss', 'Because sellers pay more commission', 'Because sellers cannot close early'],
          a: 1,
          why: 'That is the martingale shape from module 10 and the carry shape from module 206, arriving a third time. Selling is the frequently-right side, which is a different thing from the safe side.' },
        { q: 'An equity option is quoted at 2.50 with a multiplier of 100. One contract costs:',
          options: ['2.50', '25', '250', '2,500'],
          a: 2,
          why: '2.50 × 100 = 250. The multiplier catches people constantly, and it is the difference between the position you intended and one a hundred times larger.' }
      ]
    }
  ];
})();
