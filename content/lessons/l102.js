/* N1 Forex Academy — lessons for Module 102 (Equities track).

   VOICE: Jonathan talking to one student. The order book is the first time they
   can SEE the mechanism module 1 described, so the lesson leans on that. Market
   impact and halts are the two things with no forex equivalent, and both have to
   land as sizing decisions rather than trivia. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[102] = [
    {
      title: 'You can finally see the orders',
      slides: [0, 1],
      teach: {
        lead: [
          "Back in module 1 I told you price moves because resting orders get consumed. You had to take that on trust, because in forex there was nothing to look at.",
          "**On an exchange you can watch it happen.**",
          "The **order book** shows every waiting buy and sell order, at every price, with the quantity sitting at each one. Buyers stacked on one side, sellers on the other.",
          "So when you place a market buy, you can see exactly what it does. It takes the cheapest offer available. If your order is bigger than that, it takes the next one up — **at a worse price** — then the next.",
          "Buying all the milk in a corner shop works the same way. The first few are the shelf price. Then you're into the back room, paying whatever's there.",
          "**That's why order size matters here in a way it didn't before.** A small order takes the top of the book and you barely notice. A large one eats through several levels, and the average price you end up paying is worse than the one you saw."
        ],
        terms: [
          { term: 'Order book (depth of market)',
            plain: 'The live list of every waiting buy and sell order at each price.',
            like: 'An auction where all the bids are written on a board, instead of shouted in the dark.' },
          { term: 'Best bid / best offer',
            plain: 'The most anyone will currently pay, and the least anyone will currently accept.',
            like: 'The highest offer on the table and the lowest asking price. The gap between them is the spread.' },
          { term: 'Liquidity',
            plain: 'How much you could trade without shifting the price.',
            like: 'How much stock is on the shelf. Two tins means your shopping changes the price.' },
          { term: 'Market impact',
            plain: 'How far your own order pushes the price against you as it eats through the book.',
            like: 'Bidding at a tiny local auction. Your bid IS the market.' }
        ],
        close: [
          "Now the thing that surprises people coming from forex: **liquidity varies enormously between companies.** Far more than it ever varied between currency pairs.",
          "A big index name might have thousands of shares waiting at every single penny. You could trade all day without anyone noticing you exist.",
          "A small company might have a wide spread and **almost nothing behind it.** Trade there in any size and **your own order becomes the news.** You push the price up buying in, then find nobody to sell to on the way out.",
          "**Spread and depth are two different things**, and this is where people get caught. A name can quote a tight spread with only a handful of shares behind it. The quote looks fine. It just can't take your order.",
          "How to spot a thin one: wide spread, small quantities on the book, a gappy-looking chart, and low average daily volume.",
          "**The rule for this course: trade only names with deep books and high daily volume.** Same reasoning as majors-only in forex, and it removes a category of problem you don't need yet.",
          "One more thing on prices: **the big number on a quote screen is the last completed trade.** It's not what you'll pay. You'll pay the current best offer — and if your order is large, more than that. **That extra cost never appears on your contract note.** It's real all the same."
        ]
      },
      check: [
        { q: 'The price on a quote screen is:',
          options: ['What you will pay', 'The price of the last completed trade', 'The best offer', 'The closing auction price'],
          a: 1,
          why: 'The headline figure is the last trade. You will pay the current best offer, and a larger order reaches further up the book — that extra cost is market impact and never appears on your contract note.' },
        { q: 'A name with a tight spread but almost nothing resting on the book is:',
          options: ['Highly liquid', 'Thin — your own order would move the price', 'Safe to trade in size', 'Mispriced'],
          a: 1,
          why: 'Spread and depth are different things. A name can quote tightly with very little behind it, and then your order becomes the news.' }
      ]
    },

    {
      title: 'Orders, and the shape of the trading day',
      slides: [2, 3],
      teach: {
        lead: [
          "**Market, limit and stop orders work exactly as they did in forex.** Everything you learned in module 3 carries straight over. But now there's a visible book to place them against, which adds one idea worth having.",
          "**A limit order adds liquidity.** Your order goes and sits on the book, and somebody else eventually trades against it. You're providing the stock.",
          "**A market order removes liquidity.** You're consuming what's already sitting there.",
          "That distinction explains something that frustrates beginners: **your limit order can fail to fill even though price touched your level.** You were in a queue. Others got there first, the available shares went to them, and price moved away before it reached you.",
          "**Stop orders still turn into market orders when triggered** — same as forex, same slippage risk, same warning.",
          "The new advantage: **you can see roughly how much is waiting at your intended price.** If you want to sell 5,000 shares and there are 200 resting at your level, you now know what's going to happen. Use that."
        ],
        terms: [
          { term: 'Adding liquidity',
            plain: 'Placing an order that rests on the book for others to trade against.',
            like: 'Putting stock on the shelf.' },
          { term: 'Removing liquidity',
            plain: 'Placing an order that consumes what is already resting.',
            like: 'Taking stock off the shelf.' },
          { term: 'Opening auction',
            plain: 'A period before the bell where orders pile up and one fair opening price is calculated.',
            like: 'The queue outside before the doors open. Everyone arrives at once.' },
          { term: 'Closing auction',
            plain: 'The same at the end of the day, setting the official closing price.',
            like: 'Last orders. Enormous, concentrated, and over quickly.' }
        ],
        close: [
          "The trading day has a **shape**, which forex never had, and it's worth knowing.",
          "Before the bell, orders accumulate in an **opening auction** that works out one fair price to start everybody at. At the end of the day the **closing auction** does the same, and sets the official close.",
          "Those auctions carry **enormous volume**, particularly the close — index funds have to trade at the official closing price to track their benchmark, so a wall of money arrives in a few minutes whether anyone has an opinion or not.",
          "So **the first and last half-hour behave differently from the middle of the day**: wider spreads, faster moves, more noise, and a lot of activity that has nothing to do with anyone's view of the company. It's module 5's session lesson in a different costume — some hours suit you and some don't.",
          "And then the bit with no forex equivalent at all:",
          "**Overnight, the market is shut.** News doesn't wait for the bell. A company can announce something dreadful at 7pm, and the next morning it opens wherever it opens — straight past your stop, with no opportunity for you or anyone else to have traded in between.",
          "This isn't a reason to avoid shares. It's a reason to **size positions on the assumption that the overnight gap is a real cost that will land on you sooner or later.**"
        ]
      },
      check: [
        { q: 'A market buy order in equities:',
          options: ['Adds liquidity to the book', 'Removes liquidity by consuming resting offers', 'Always fills at the last traded price', 'Waits for the closing auction'],
          a: 1,
          why: 'Market orders consume what is resting; limit orders rest and provide it. This also explains why a limit may not fill even when price touches your level — you were behind others in the queue.' },
        { q: 'Why do the first and last thirty minutes behave differently?',
          options: ['Exchanges widen spreads deliberately', 'Auctions concentrate huge volume at the open and close, and price discovery after an overnight break is unsettled', 'Retail traders are more active', 'Algorithms switch off'],
          a: 1,
          why: 'The opening auction resolves everything accumulated overnight, and the closing auction carries index-fund flow that must trade at the official close.' }
      ]
    },

    {
      title: 'Settlement, halts, and what it really costs',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "Two bits of machinery that don't exist in forex, and one of them can genuinely trap you.",
          "**Settlement.** When you buy shares, the trade happens instantly but the legal transfer of ownership catches up a business day or two later. It's a house sale in miniature — you agree the price today, completion comes afterwards.",
          "This rarely affects you day to day, but it **decides whether you qualify for a dividend**, which matters enough that module 105 comes back to it.",
          "**Trading halts.** This is the one to take seriously.",
          "A stock can be **suspended** — stopped dead, pending an announcement, or after an extreme move triggers an automatic pause. While it's halted, nothing trades.",
          "**Which means you cannot get out.** Not with a stop, not at market, not by ringing anyone. Your stop loss sits there doing nothing, because a stop can only fill if trading is happening.",
          "And when it resumes, it frequently resumes a long way from where it stopped — because a halt usually means something significant just happened."
        ],
        terms: [
          { term: 'Settlement',
            plain: 'The legal transfer of shares and cash, completing a business day or two after the trade.',
            like: 'A house sale. You agree today; completion is later.' },
          { term: 'Trading halt',
            plain: 'A stock temporarily suspended, usually pending news. Nobody can trade it.',
            like: 'The shutters coming down while you are still inside wanting to leave.' },
          { term: 'Circuit breaker',
            plain: 'An automatic pause triggered by an extreme move, on one stock or a whole market.',
            like: 'A fuse tripping. Deliberate, protective, and it stops everything.' },
          { term: 'Stamp duty / transaction tax',
            plain: 'A charge some countries apply when you buy shares.',
            like: 'The tax on a car purchase. Nothing to do with the seller\'s price.' }
        ],
        close: [
          "**None of this exists in major forex**, and it changes how you size. In forex your worst case was a gap. Here your worst case includes **being unable to trade at all for an unknown period**, then reopening somewhere else entirely.",
          "You can't hedge that or stop-loss your way out of it. **You can only size for it.**",
          "Now what a share trade actually costs, since the pieces differ from forex:",
          "**Spread** — as before, and much wider in thin names. **Commission** — usually charged per trade or per share here, not per lot. **Market impact** — the cost of eating through the book, invisible on your statement and entirely real in your fill. And **transaction taxes**, which some markets charge on purchases. Check whether yours does before you assume a strategy is profitable.",
          "One genuinely good bit of news to end on:",
          "**Shares you own outright carry no overnight financing charge.** There's nothing to finance — you paid for them, you own them, you can hold for ten years for free.",
          "That's a real advantage, and it's the exact thing the next module is about. Because there's another way to trade shares that looks cheaper up front and charges you every single night."
        ]
      },
      check: [
        { q: 'A stock is halted pending news while you hold it with a stop loss. What happens?',
          options: ['The stop executes at the last price', 'The broker closes it for you', 'Nothing — the stop waits until trading resumes, then fills at whatever price appears', 'The exchange guarantees your stop'],
          a: 2,
          why: 'You cannot exit during a halt, and the resumption price is frequently far away. This has no equivalent in major forex and must be allowed for by sizing, not assumed away.' },
        { q: 'Which cost applies to a share CFD but not to shares you own outright?',
          options: ['Spread', 'Commission', 'Overnight financing', 'Market impact'],
          a: 2,
          why: 'Fully paid shares have nothing to finance. A CFD is a leveraged position carrying a daily charge — the same mechanism as forex swap, and it punishes long holds equally.' }
      ]
    }
  ];
})();
