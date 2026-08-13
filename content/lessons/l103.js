/* N1 Forex Academy — lessons for Module 103. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[103] = [
    {
      title: 'Two products, one price chart',
      slides: [0, 1],
      check: [
        { q: 'You hold a share CFD for six months versus owning the shares. You will have paid:',
          options: ['Less, CFDs are cheaper', 'The same, the price is identical', 'More, because of daily financing on the full position value', 'Nothing extra'],
          a: 2,
          why: 'CFDs are cheap to open and expensive to hold; owned shares are the reverse. Financing accrues nightly on the whole exposure, so over months it dominates.' },
        { q: 'The key structural advantage of owning shares outright is:',
          options: ['Higher returns', 'You cannot lose more than you paid, and there is no cost to hold', 'Tighter spreads', 'Faster execution'],
          a: 1,
          why: 'No financing, no margin call, and loss bounded at your outlay. Students routinely give that up by reaching for leverage out of impatience.' }
      ]
    },
    {
      title: 'Leverage, dividends and shorting',
      slides: [2, 3, 4],
      check: [
        { q: 'Why is leverage more dangerous in equities than in major currencies?',
          options: ['Brokers offer more of it', 'Equities gap overnight far more often — earnings and company news arrive while the exchange is shut', 'Spreads are wider', 'Stops are not allowed'],
          a: 1,
          why: 'A 20% earnings gap against a 5:1 leveraged position is a total loss, and the stop fills at the gapped open. Hence the rule: no leverage held through a scheduled earnings date.' },
        { q: 'You are short a share CFD across an ex-dividend date. What happens?',
          options: ['You receive the dividend adjustment', 'You pay the dividend adjustment', 'Nothing, CFDs ignore dividends', 'The position closes automatically'],
          a: 1,
          why: 'Long CFDs receive a cash adjustment mirroring the dividend; shorts pay it. It is an adjustment rather than a dividend, and the tax treatment differs.' }
      ]
    },
    {
      title: 'Choosing the right tool',
      slides: [5, 6],
      check: [
        { q: 'You have a six-month directional idea. Which product fits?',
          options: ['A CFD, for the capital efficiency', 'Owning the shares, because financing over six months dominates the capital advantage', 'Either, they are equivalent', 'Neither'],
          a: 1,
          why: 'The crossover is usually a matter of weeks. Match the product to the holding period rather than defaulting to the one that feels familiar from forex.' },
        { q: 'Shorting a share differs from shorting a currency pair because:',
          options: ['It is banned for retail', 'It needs the stock borrowed when done outright, borrow may be costly or unavailable, and the theoretical loss is unbounded', 'Shares cannot fall', 'The broker guarantees the price'],
          a: 1,
          why: 'In forex, long and short are structurally symmetrical. In equities they are not — a share can rise without limit but only fall to zero.' }
      ]
    }
  ];
})();
