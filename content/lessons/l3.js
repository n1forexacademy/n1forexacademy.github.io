/* N1 Forex Academy — lessons for Module 3. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[3] = [
    {
      title: 'Getting in and out',
      slides: [0, 1],
      check: [
        { q: 'Price is 1.0850. You want to go long only if it breaks above 1.0900. Which order?',
          options: ['Buy limit at 1.0900', 'Buy stop at 1.0900', 'Market order now', 'Sell stop at 1.0900'],
          a: 1,
          why: 'You want a worse price than now on purpose, because you want proof of momentum first. That is a buy stop. Limit = patience, stop = confirmation.' },
        { q: 'Why should you never use a limit order to exit a loser?',
          options: ['Limits are not allowed for exits', 'It may never fill, so the loss keeps growing while you wait for a better price', 'Limits cost more commission', 'Limits fill too fast'],
          a: 1,
          why: 'A limit exit depends on the market coming back to you — exactly what a losing trade is not doing. Enter with patience, exit with certainty.' }
      ]
    },
    {
      title: 'What leverage really is',
      slides: [2, 3],
      check: [
        { q: 'Two traders both open 0.10 lots of EUR/USD. One has 30:1 leverage, the other 500:1. Price falls 30 pips. Who loses more?',
          options: ['The 500:1 trader', 'The 30:1 trader', 'Neither — both lose $30, because loss depends on position size', 'Depends on the balance'],
          a: 2,
          why: 'Leverage sets the margin required to hold a position, not the profit or loss it produces. Both hold 0.10 lots, so both lose $1 per pip. Leverage is permission; position size is risk.' },
        { q: 'So why do regulators cap retail leverage?',
          options: ['Because it directly magnifies losses', 'Because it caps the maximum position an inexperienced trader can take on a small deposit', 'To reduce broker profits', 'To slow down trading'],
          a: 1,
          why: 'The danger is temptation, not mechanism. With £500 and 500:1 you can control 2.5 standard lots, where a normal 20-pip move wipes the account.' }
      ]
    },
    {
      title: 'Margin, and the number that matters',
      slides: [4, 5],
      check: [
        { q: 'Which figure is your real account value while trades are open?',
          options: ['Balance', 'Equity — balance plus or minus floating profit and loss', 'Free margin', 'Used margin'],
          a: 1,
          why: 'Balance only changes when a trade closes. Equity moves with your open positions and is what the broker uses to judge you.' },
        { q: 'Equity is $1,200 and used margin is $800. Margin level?',
          options: ['66.7%', '150%', '$400', '40%'],
          a: 1,
          why: '(1200 ÷ 800) × 100 = 150%. Uncomfortably close to a typical 100% call level — margin level falls faster than it feels like it should, because equity drops while used margin stays roughly fixed.' }
      ]
    },
    {
      title: 'Exactly how accounts die',
      slides: [6, 7, 8, 9],
      check: [
        { q: 'What actually happens at a modern margin call?',
          options: ['The broker telephones you', 'Trading is suspended until you deposit', 'A warning appears; if margin level keeps falling to the stop-out level, positions are auto-closed largest loser first', 'Everything closes immediately at the call level'],
          a: 2,
          why: 'Nobody calls — the name is a historical leftover. Below the stop-out level the system closes positions for you, at whatever price exists, with no input from you.' },
        { q: 'Your stop is at 1.0800 but Monday opens at 1.0710. What happens?',
          options: ['Filled at exactly 1.0800', 'The trade is cancelled', 'Filled near 1.0710 — a stop becomes a market order at the first available price', 'The broker covers the difference'],
          a: 2,
          why: 'A stop is an instruction to exit once a level trades, not a reservation of that price. Size positions assuming the exit can be worse than planned.' }
      ]
    }
  ];
})();
