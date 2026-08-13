/* N1 Forex Academy — lessons for Module 101. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[101] = [
    {
      title: 'Ownership, and where your money goes',
      slides: [0, 1],
      check: [
        { q: 'You buy 500 shares on the exchange. Who receives your money?',
          options: ['The company, as new capital', 'Another investor who sold those shares', 'The exchange', 'The company\'s lenders'],
          a: 1,
          why: 'That is a secondary-market trade — the shares already existed. The company only receives money in the primary market, such as an IPO or a fresh issuance.' },
        { q: 'The fundamental break from forex is that a share:',
          options: ['Trades on a chart', 'Is a claim on a real business with earnings, so it can be worth more in ten years because the business grew', 'Has tighter spreads', 'Cannot fall in value'],
          a: 1,
          why: 'A currency has no earnings and pays no dividend. An equity represents an enterprise, which is why buy-and-hold is defensible in an index and meaningless in a currency pair.' }
      ]
    },
    {
      title: 'Exchanges and what ownership gets you',
      slides: [2, 3],
      check: [
        { q: 'What does a centralised exchange give you that forex does not?',
          options: ['Round-the-clock trading', 'A single visible order book, real published volume and one official closing price', 'Guaranteed liquidity', 'Freedom from gaps'],
          a: 1,
          why: 'Forex has no central tape, so volume on your chart was your broker\'s. The trade-off is that exchanges close, giving overnight gap risk you cannot trade through.' },
        { q: 'In a liquidation, shareholders are paid:',
          options: ['First, as owners', 'Before lenders but after employees', 'Last, after every creditor and bondholder', 'At the same time as bondholders'],
          a: 2,
          why: 'Equity is a residual claim — you get whatever is left, frequently nothing. This is exactly why the same company\'s bonds are less volatile and yield less.' }
      ]
    },
    {
      title: 'Drift, and an honest account',
      slides: [4, 5, 6],
      check: [
        { q: 'Broad indices have drifted upward historically. Does that apply to a single company you hold?',
          options: ['Yes, shares recover eventually', 'No — indices survive partly by replacing their failures, and your holding gets no such treatment', 'Only for dividend payers', 'Only above ten years'],
          a: 1,
          why: 'The index record is partly a record of continuously removing losers. Individual companies fail permanently, so "it\'ll come back" is a claim about indices, not about your holding.' },
        { q: 'Compared with a major currency, an individual share:',
          options: ['Is inherently safer', 'Can go to zero permanently, which a major currency does not', 'Moves less', 'Has no gap risk'],
          a: 1,
          why: 'Fully paid shares cannot go below zero, which is a genuine advantage. But permanent total loss is a real outcome for a single company in a way it is not for a major currency.' }
      ]
    }
  ];
})();
