/* N1 Forex Academy — lessons for Module 2. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[2] = [
    {
      title: 'Reading a quote',
      slides: [0, 1],
      check: [
        { q: 'EUR/USD falls from 1.0900 to 1.0850. What happened?',
          options: ['The euro definitely weakened', 'The dollar definitely strengthened', 'Either, or both — the pair only shows their relative value', 'Both currencies weakened'],
          a: 2,
          why: 'A pair price is relative. A fall means the base weakened, the quote strengthened, or some combination. That ambiguity is the seed of correlation later on.' },
        { q: 'Why are beginners told to trade majors rather than exotics?',
          options: ['Exotics move too slowly', 'Majors have far tighter spreads, deeper liquidity and more orderly behaviour', 'Exotics are not offered by most brokers', 'Majors cannot lose money'],
          a: 1,
          why: 'Exotic spreads can be twenty times wider, with thin overnight liquidity and violent gaps on local news. Majors are cheaper and better behaved — not safe.' }
      ]
    },
    {
      title: 'Pips and lots',
      slides: [2, 3],
      check: [
        { q: 'USD/JPY moves from 148.20 to 148.75. How many pips?',
          options: ['5.5', '55', '550', '0.55'],
          a: 1,
          why: 'On JPY pairs the pip is the SECOND decimal place, so 0.55 in price is 55 pips. Using the four-decimal convention here would size a position a hundred times wrong.' },
        { q: 'What is a volume of 0.01 on most platforms?',
          options: ['One standard lot, 100,000 units', 'One mini lot, 10,000 units', 'One micro lot, 1,000 units', 'One unit'],
          a: 2,
          why: '0.01 is a micro lot — 1,000 units of the base currency, worth about $0.10 per pip on a USD-quoted pair. This is where every student starts.' }
      ]
    },
    {
      title: 'Turning pips into money',
      slides: [4, 5, 6],
      check: [
        { q: 'You are long 0.30 lots of GBP/USD with a USD account. Pip value?',
          options: ['$0.30', '$3.00', '$30.00', 'Cannot be determined without the price'],
          a: 1,
          why: 'GBP/USD is USD-quoted, so pip value is exactly $10 per standard lot whatever the price. At 0.30 lots that is $3.00. The "cannot be determined" answer would be right for USD/CHF, where the dollar is the base.' },
        { q: 'You short EUR/USD at 1.0920 and cover at 1.0885 with 0.50 lots. Gross result?',
          options: ['−$175', '+$175', '+$35', '+$17.50'],
          a: 1,
          why: '35 pips gained × $5 per pip (0.50 lots on a USD-quoted pair) = +$175 gross. Shorts profit when price falls; the arithmetic is identical with the subtraction reversed.' }
      ]
    },
    {
      title: 'Direction and hidden overlap',
      slides: [7, 8, 9],
      check: [
        { q: 'Long EUR/USD, long GBP/USD and long AUD/USD, each risking 1%. Real exposure?',
          options: ['1% — they are separate trades', '3% across three independent markets', 'Close to 3% on one view — all three profit from dollar weakness', 'Zero, they hedge each other'],
          a: 2,
          why: 'All three are short-dollar expressions and will lose together on dollar strength. Count correlated positions once — this is how disciplined 1%-per-trade traders still take 3% hits.' },
        { q: 'In forex, going short:',
          options: ['Requires borrowing the currency first', 'Is structurally identical to going long, with the subtraction reversed', 'Costs more in commission', 'Is only possible on majors'],
          a: 1,
          why: 'Selling EUR/USD is just buying USD/EUR. There is no borrowing step and no upward structural bias as in an equity index, so both directions are equally natural.' }
      ]
    }
  ];
})();
