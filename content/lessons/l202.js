/* N1 Forex Academy — lessons for Module 202 (Bonds track).

   VOICE: Jonathan talking to one student. This is the module everything else in
   the track depends on. The locked savings account is the analogy that makes the
   inverse relationship obvious rather than memorised — nobody buys your 4%
   account at full price when 6% is on offer. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[202] = [
    {
      title: 'Why prices fall when rates rise',
      slides: [0, 1],
      teach: {
        lead: [
          "This is the mechanic the whole of fixed income runs on, and it catches everyone the first time. It sounds backwards. It isn't.",
          "**When interest rates go up, the price of bonds you already own goes down.**",
          "Here's why, and once you see it you'll never need to memorise it.",
          "Imagine you've locked money into a savings account paying **4%** for five years. Perfectly good deal at the time.",
          "A month later, the banks start offering **6%** on new accounts.",
          "Now suppose you wanted to sell your account to somebody — hand over the rights to it. **Would anyone pay you full value for a 4% account when they can walk into a bank and get 6%?**",
          "Of course not. They'd only take yours at a **discount** — a discount big enough that the return works out about the same as the 6% they could get elsewhere.",
          "**That's it. That's the entire inverse relationship.**",
          "**Nothing changed about your bond.** Same coupon, same issuer, same maturity. **The alternatives changed** — and a price is always relative to the alternatives."
        ],
        terms: [
          { term: 'Par',
            plain: 'Face value, quoted as 100. What gets repaid at maturity.',
            like: 'The number printed on the ticket.' },
          { term: 'Discount',
            plain: 'A price below 100, because this bond pays less than new ones do.',
            like: 'Selling a ticket below face value because a better seat is available elsewhere.' },
          { term: 'Premium',
            plain: 'A price above 100, because this bond pays more than new ones do.',
            like: 'A ticket going above face value because it is genuinely a better seat.' },
          { term: 'Yield to maturity (YTM)',
            plain: 'Your total annual return if you hold to the end — every coupon, plus the gain or loss as price drifts back to 100.',
            like: 'The all-in figure. Not the headline rate — what you actually end up with.' }
        ],
        close: [
          "Three different \"yields\" get quoted, so let's separate them:",
          "**Coupon** is fixed at issue and never changes. A 5% coupon pays 5 a year on 100 of face value, forever, regardless of what the bond costs today.",
          "**Current yield** is coupon ÷ price. Quick and rough — it ignores what happens at the end.",
          "**Yield to maturity** is the one that matters, and it's what bonds are actually quoted on. It's your total annualised return if you hold to maturity, counting **every coupon and the gain or loss as the price drifts back to 100.**",
          "That last part is called **pull to par**, and it's reliable: whatever a bond costs today, it converges on 100 as maturity approaches. It has to — that's what gets repaid.",
          "Which gives you a shortcut worth remembering:",
          "**Buy below 100 and your yield to maturity is higher than the coupon**, because you also collect the climb back up to 100. **Buy above 100 and it's lower**, because you'll watch the price drift down to 100 while collecting that generous coupon.",
          "Both are already priced in. Neither is a bargain."
        ]
      },
      check: [
        { q: 'You hold a 4% coupon bond. Market yields for comparable bonds rise to 6%. Your bond\'s price:',
          options: ['Rises, because rates are higher', 'Falls, until its remaining cash flows yield about 6%', 'Stays at par', 'Depends on issuer profits'],
          a: 1,
          why: 'Nobody pays par for a 4% bond when 6% is available. Nothing changed about your bond — the alternatives changed, and price is always relative to alternatives.' },
        { q: 'A bond trades at 92 with a 5% coupon. Its yield to maturity is:',
          options: ['Exactly 5%', 'Below 5%', 'Above 5%, because you also gain as the price pulls to par', 'Indeterminable'],
          a: 2,
          why: 'You buy at a discount and receive 100 at maturity, so the capital gain adds to the coupon return. YTM counts both, which is why it exceeds the coupon on any bond bought below par.' }
      ]
    },

    {
      title: 'A rate rise, worked all the way through',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Let me run a real one, because the numbers make it land in a way the principle doesn't.",
          "**You own a bond: 5% coupon, five years left, bought at 100.** You're getting 5% a year. Everyone's happy.",
          "**Market yields for comparable five-year bonds rise to 7%.**",
          "Your bond's price falls to roughly **92** — the level where its remaining payments work out to about 7% for a new buyer.",
          "**You are down 8%.**",
          "Sit with that for a second. **Nobody defaulted. Nobody missed a payment. The company or government behind it is exactly as sound as it was yesterday.** You've lost 8% on what people describe as a safe asset, purely because rates moved.",
          "**This is why \"bonds are safe\" is such a misleading sentence.** They're a different exposure with their own volatility, not an absence of volatility."
        ],
        terms: [
          { term: 'Pull to par',
            plain: 'A bond price drifting back towards 100 as maturity approaches.',
            like: 'A ticket becoming worth exactly face value on the day of the event.' },
          { term: 'Market yield',
            plain: 'What comparable bonds are yielding right now. The benchmark yours is judged against.',
            like: 'What the bank down the road is paying today.' },
          { term: 'Opportunity cost',
            plain: 'What you gave up by having your money in this rather than something better.',
            like: 'Being locked into a fixed deal while better ones appear in the window.' },
          { term: 'Accrued interest',
            plain: 'Coupon earned but not yet paid, added to the price when a bond changes hands.',
            like: 'Settling up the rent for the part-month when a tenant moves out.' }
        ],
        close: [
          "**Now the other side of it, which is genuinely reassuring.**",
          "**Hold that bond to maturity and you still get everything you were promised.** 5 a year for five years, then 100 back. The 8% \"loss\" was a market price, and market prices pull back to par.",
          "**So what did you actually lose?**",
          "**Opportunity.** Your money spent five years earning 5% while 7% was sitting there. That's a real cost — but it's a completely different kind of cost from a permanent loss, and confusing the two leads people to panic-sell bonds at exactly the wrong moment.",
          "**The rule that falls out of this: it matters enormously whether you're a holder or a trader.** If you'll hold to maturity and the issuer pays, price moves in between are noise. If you might need the money early, they're the entire risk.",
          "Two more things to take away.",
          "**Falling rates are good for existing holders** — your old, higher-paying bond becomes more attractive, so its price rises. **Rising rates hurt existing holders** and reward new buyers. This is why bond investors watch central banks obsessively.",
          "**And bond markets react violently to central bank language.** You saw that from the currency side in module 9 — the statement mattering more than the decision. **This is the other side of that same event**, and it's usually where the reaction happens first."
        ]
      },
      check: [
        { q: 'A bond trading at 108 is:',
          options: ['Overpriced and best avoided', 'Priced so its coupon advantage over current yields is fairly valued', 'About to default', 'Mispriced'],
          a: 1,
          why: 'A premium means the coupon beats what new issues offer, so buyers pay for that advantage. Price has already adjusted so comparable bonds deliver similar returns.' },
        { q: 'You hold to maturity through sharply rising rates. Your final cash flows are:',
          options: ['Reduced by the rate rise', 'Unchanged — every coupon and the face value, assuming no default', 'Increased', 'Set by the market price'],
          a: 1,
          why: 'Holding to maturity removes price risk on the cash flows if the issuer pays. What you lost is opportunity: your money earned the old rate while better ones appeared.' }
      ]
    }
  ];
})();
