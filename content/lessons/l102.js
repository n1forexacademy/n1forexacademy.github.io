/* N1 Forex Academy — lessons for Module 102. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[102] = [
    {
      title: 'The order book and liquidity',
      slides: [0, 1],
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
      title: 'Orders and the shape of the day',
      slides: [2, 3],
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
      title: 'Settlement, halts and costs',
      slides: [4, 5, 6],
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
