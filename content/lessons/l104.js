/* N1 Forex Academy — lessons for Module 104. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[104] = [
    {
      title: 'The figures that matter',
      slides: [0, 1],
      check: [
        { q: 'Which figure is hardest to massage through accounting choices?',
          options: ['Revenue', 'Net income', 'Free cash flow', 'Earnings per share'],
          a: 2,
          why: 'Cash either arrived or it did not. Revenue recognition and the judgements feeding net income leave far more legitimate room for presentation.' },
        { q: 'A company grows revenue strongly for three years while free cash flow falls. This is:',
          options: ['Normal and unimportant', 'A warning worth investigating — sales are rising but cash is not', 'Proof of fraud', 'Only relevant to lenders'],
          a: 1,
          why: 'Revenue is what comes in the door. A business can grow sales for years while losing money on every one, and cash flow is where that shows up first.' }
      ]
    },
    {
      title: 'Valuation and income',
      slides: [2, 3],
      check: [
        { q: 'A company trades on a P/E of 5 while its sector averages 15. The correct response is:',
          options: ['Buy, it is clearly cheap', 'Ask why the market prices it lower and look for the reason', 'Ignore it', 'Compare it to a technology company'],
          a: 1,
          why: 'A low P/E means the market expects earnings to fall or sees a risk you have not found. Sometimes it is mispriced; often it is a value trap. The ratio is where research begins.' },
        { q: 'A dividend yield rose from 3% to 9% with the dividend unchanged. What happened?',
          options: ['The payout increased', 'The share price fell by roughly two thirds', 'More shares were issued', 'Yields track inflation'],
          a: 1,
          why: 'Yield is dividend divided by price. A tripled yield on an unchanged dividend means the price collapsed — and a market pricing in a probable cut.' }
      ]
    },
    {
      title: 'Debt, and the limits of ratios',
      slides: [4, 5, 6],
      check: [
        { q: 'Why does net debt matter more than total borrowings?',
          options: ['It is easier to compute', 'It subtracts cash, showing what is actually owed on balance', 'Regulators require it', 'It excludes long-term debt'],
          a: 1,
          why: 'A company with large borrowings and equally large cash is in a very different position. Compare net debt to earnings or cash flow — the ability to service it decides survival.' },
        { q: 'The honest limit of ratio analysis is that ratios are:',
          options: ['Always wrong', 'Backward-looking, shaped by accounting choices, and only comparable within a sector', 'Only useful for large companies', 'Superior to reading the accounts'],
          a: 1,
          why: 'They describe what has happened, filtered through legitimate judgement calls. Fundamental analysis narrows the field and rules out obvious problems; it does not produce certainty.' }
      ]
    }
  ];
})();
