/* N1 Forex Academy — analysis labs for the Spread Betting track.

   Same contract as content/labs.js. EVERY NUMBER IS WORKED.

   Two labs only — this is a short track about a wrapper, and both target the
   thing that actually harms people here: stake per point conceals position
   size, and the tax headline conceals a cost that runs the other way. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'sb-size',
  kind: 'analysis',
  module: 702,
  title: 'What £2.50 a point is really holding',
  brief: 'Size four bets correctly for risk, then do the second calculation. The gap between the two numbers is the whole reason this lab exists.',
  dataset: [
    { type: 'table',
      title: 'Your account and your limits',
      head: ['', ''],
      rows: [
        ['Account', '£10,000'],
        ['Risk limit per trade', '1%'],
        ['Exposure limit (notional)', '25% of account'],
        ['Stake formula', '(Account × Risk %) ÷ stop distance in points']
      ] },
    { type: 'table',
      title: 'Four markets',
      head: ['Market', 'Current level', 'Your stop distance'],
      rows: [
        ['UK index',     '8,000',  '40 points'],
        ['Wall St index','40,000', '200 points'],
        ['Gold',         '2,400',  '60 points'],
        ['A major pair', '1.2500', '25 points']
      ],
      foot: 'Notional ≈ stake per point × current level.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What stake per point risks exactly 1% on the **UK index**, with a 40-point stop?',
      prefix: '£', unit: '/point', placeholder: 'e.g. 1.00', answer: 2.50, tol: 0.05,
      hint: 'Risk amount ÷ stop distance in points.',
      why: '£10,000 × 1% = £100 risk. £100 ÷ 40 points = **£2.50 per point.** Same order of operations as every other market — the chart sets the stop and the stake falls out of it.' },

    { kind: 'calc',
      q: 'What is the **notional exposure** of that £2.50 a point bet, in pounds?',
      prefix: '£', placeholder: 'e.g. 5000', answer: 20000, tol: 100,
      why: '£2.50 × 8,000 = **£20,000** — twice the entire account. The ticket says £2.50, the risk calculation says £100, and you are controlling twenty thousand pounds. **Both earlier numbers are correct and neither describes what you are holding.**' },

    { kind: 'calc',
      q: 'Your exposure limit is 25% of a £10,000 account. What is the **largest stake per point** the UK index bet may use?',
      prefix: '£', unit: '/point', placeholder: 'e.g. 1.00', answer: 0.3125, tol: 0.02,
      hint: 'Maximum notional ÷ the index level.',
      why: 'Exposure limit = £2,500. £2,500 ÷ 8,000 = **£0.3125 per point** — call it £0.31. The risk-based stake was £2.50, so **the exposure limit cuts the position to about an eighth of it.** This is why you need both limits, and here the exposure limit binds hard.' },

    { kind: 'choice',
      q: 'The risk calculation allowed £2.50 a point and the exposure limit allows £0.31. Which do you use, and why?',
      options: [
        'The £2.50 — it satisfies the 1% risk policy, which is the important one',
        '£0.31 — both limits must pass, and the exposure limit exists for the times the stop does not work',
        'Split the difference at around £1.40',
        'Raise the exposure limit, since the risk limit is already met'
      ],
      a: 1,
      why: '**Both must pass, and the smaller wins.** The risk limit protects you when the stop works. The exposure limit protects you when it does not — a gap bypasses the stop entirely and the loss is then set by exposure, exactly as it was in module 107. On a high-leverage wrapper the exposure limit binds far more often than students expect, and that is the limit doing its job rather than being too strict.' }
  ],
  onPass: 'Stake per point is the friendliest sizing vocabulary in trading and the least informative. Convert to notional before every bet — it is one multiplication.'
},

{
  id: 'sb-cost',
  kind: 'analysis',
  module: 704,
  title: 'Does the tax headline survive the spread?',
  brief: 'A tax saving is contingent on making a profit. A wider spread is charged whatever happens. Do the arithmetic on realistic numbers and see which one wins.',
  dataset: [
    { type: 'table',
      title: 'Two routes to the same index trade',
      head: ['', 'Spread bet', 'Direct route'],
      rows: [
        ['Spread charged', '2.0 points', '0.8 points'],
        ['Commission', 'None', 'Included in the spread'],
        ['Typical position', '£2 per point', 'Equivalent size'],
        ['Trades per year', '150', '150']
      ],
      foot: 'Assume you close every position, so each trade pays the spread once on entry and once on exit — **a round trip costs two spreads**.' },
    { type: 'note',
      body: 'Two scenarios for the year: **(A)** you finish **£3,000 up**, and **(B)** you finish **£1,200 down**. Assume a 20% rate would apply to gains on the direct route, and that on the direct route a loss would be relievable against other gains.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'How much wider is the spread bet, in points, per **round trip**?',
      unit: 'points', placeholder: 'e.g. 1.0', answer: 2.4, tol: 0.1,
      hint: 'The difference per side, doubled for entry and exit.',
      why: '2.0 − 0.8 = 1.2 points wider per side. A round trip pays it twice: **2.4 points**. Costs are quoted per side and paid twice — the same round-trip point module 4 made about brokers.' },

    { kind: 'calc',
      q: 'At £2 per point and 150 trades a year, what does that extra spread cost annually?',
      prefix: '£', placeholder: 'e.g. 300', answer: 720, tol: 10,
      why: '2.4 points × £2 per point = £4.80 per round trip. × 150 trades = **£720 a year.** Charged whatever happens, in every scenario, win or lose.' },

    { kind: 'calc',
      q: 'Scenario A: you finish £3,000 up. At 20%, what tax would the direct route have cost on that gain?',
      prefix: '£', placeholder: 'e.g. 500', answer: 600, tol: 10,
      why: '£3,000 × 20% = **£600**. So in a good year the wrapper saves £600 in tax and costs £720 in extra spread — **it is £120 worse off even when you win.** The headline advantage did not survive a realistic trade count.' },

    { kind: 'choice',
      q: 'Scenario B: you finish £1,200 down. How do the two routes compare?',
      options: [
        'Identical — there is no tax on a loss either way',
        'The spread bet is worse twice over: you paid £720 more in spread, and the £1,200 loss is generally not relievable, whereas on the direct route it could have reduced tax on other gains',
        'The spread bet is better, because losses are not taxed',
        'It cannot be determined without knowing the tax rate'
      ],
      a: 1,
      why: 'This is the half the advertising never mentions. **If gains sit outside the tax net, losses generally do too** — so the loss simply disappears instead of reducing tax elsewhere. **A tax saving is contingent on a profit; the spread is certain.** Note who that asymmetry hurts most: people with losses, which is nearly everyone early on. None of this is tax advice — your own position depends on your circumstances and is a question for a qualified adviser.' }
  ],
  onPass: 'Ten minutes of arithmetic on your own trade count, and the most quoted feature of this wrapper turns out to be conditional while its cost is certain.'
}

]);
