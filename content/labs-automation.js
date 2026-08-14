/* N1 Forex Academy — analysis labs for the Automation track.

   Same contract as content/labs.js. EVERY NUMBER IS WORKED — change a figure in
   a `dataset` and you must re-derive every `answer` that reads it.

   These three target what actually destroys automated accounts, and none of it
   is strategy: the missing guard, the hard-coded lot size, and a backtest report
   that flatters. Deliberately arithmetic rather than syntax — a student who can
   do these can debug an EA they did not write. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'au-guards',
  kind: 'analysis',
  module: 802,
  title: 'Count what an unguarded EA actually does',
  brief: 'Your rule is correct. You forgot one line. Work out exactly how many times the machine acts on it before you notice.',
  dataset: [
    { type: 'table',
      title: 'The situation',
      head: ['', ''],
      rows: [
        ['Chart timeframe', 'M15'],
        ['Ticks arriving', 'about 4 per second'],
        ['Your rule', '"If price is above the 50 EMA, buy 0.10 lots"'],
        ['Guards written', 'none'],
        ['Condition stays true for', '3 bars']
      ],
      foot: '`OnTick()` runs once per tick. Your rule is inside it, with nothing stopping it repeating.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'How many ticks arrive during **one M15 bar** at 4 per second?',
      unit: 'ticks', placeholder: 'e.g. 500', answer: 3600, tol: 20,
      hint: 'Seconds in 15 minutes, times the tick rate.',
      why: '15 minutes × 60 = 900 seconds. 900 × 4 = **3,600 ticks in one bar.** Every one of them runs your OnTick from top to bottom.' },

    { kind: 'calc',
      q: 'The condition stays true for 3 bars. With no guards, how many buy orders does your EA attempt?',
      unit: 'orders', placeholder: 'e.g. 3', answer: 10800, tol: 50,
      why: '3,600 × 3 = **10,800 attempted orders.** Your strategy was fine. Your rule was correct. **You omitted a full stop**, and the machine did exactly what you wrote, 10,800 times.' },

    { kind: 'calc',
      q: 'Now add the new-bar guard. Over those same 3 bars, how many times does your logic run?',
      unit: 'times', placeholder: 'e.g. 10', answer: 3, tol: 0.5,
      why: 'Once per bar, so **3**. One guard took it from 10,800 to 3 — and 3 is what you meant all along. This is why most beginner EA disasters are a missing guard rather than a flawed idea.' },

    { kind: 'choice',
      q: 'With only the new-bar guard, the EA still opens a position on bars 2 and 3 while the first is open. What is the second guard?',
      options: [
        'Reduce the lot size so three positions is acceptable',
        'Check whether a position is already open, and return if it is',
        'Move to a higher timeframe',
        'Add a maximum-orders-per-day counter'
      ],
      a: 1,
      why: 'Two guards, three lines each. **`if(!isNewBar()) return;` and `if(PositionsTotal() > 0) return;`** Together they turn "buy whenever the condition is true" into "buy once, on the bar it became true, if I am not already in" — which is what you meant. Reducing size treats the symptom; a daily counter caps the damage without fixing the logic.' }
  ],
  onPass: 'The strategy was never the problem. Write the guards first, every time, before the rule they protect.'
},

{
  id: 'au-size',
  kind: 'analysis',
  module: 804,
  title: 'What a fixed lot size actually risks',
  brief: 'One line — a hard-coded 0.5 lots — across two different stops and one drawdown. Work out what it is really risking each time.',
  dataset: [
    { type: 'table',
      title: 'Your account and policy',
      head: ['', ''],
      rows: [
        ['Account equity', '£20,000'],
        ['Risk per trade (policy)', '1%'],
        ['Value of one pip, per lot', '£10'],
        ['Hard-coded size in the EA', '0.5 lots']
      ] },
    { type: 'table',
      title: 'Two setups, same week',
      head: ['Setup', 'Stop distance'],
      rows: [
        ['A — tight, quiet session', '20 pips'],
        ['B — wide, volatile session', '80 pips']
      ],
      foot: 'Correct size = risk amount ÷ (stop in pips × £10 per pip per lot).' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What is the **correct** lot size for setup A, the 20-pip stop?',
      unit: 'lots', placeholder: 'e.g. 0.5', answer: 1.0, tol: 0.05,
      hint: 'Risk amount is 1% of £20,000.',
      why: 'Risk = £200. Cost per lot = 20 pips × £10 = £200. **£200 ÷ £200 = 1.0 lots.**' },

    { kind: 'calc',
      q: 'What is the **correct** lot size for setup B, the 80-pip stop?',
      unit: 'lots', placeholder: 'e.g. 0.5', answer: 0.25, tol: 0.02,
      why: 'Cost per lot = 80 × £10 = £800. **£200 ÷ £800 = 0.25 lots.** Same account, same risk, a size four times smaller — because the stop is four times wider. **That is the whole point of sizing from the stop.**' },

    { kind: 'calc',
      q: 'Your EA ignores all that and trades 0.5 lots. On setup B, what percentage of the account does it risk?',
      unit: '%', placeholder: 'e.g. 1', answer: 2, tol: 0.1,
      why: '0.5 lots × 80 pips × £10 = **£400**, which is **2%** of £20,000 — double your policy. On setup A the same 0.5 lots risks £100, or 0.5%. **One line, and your risk swings between a quarter and double what you decided**, entirely at the mercy of where the chart put the stop.' },

    { kind: 'choice',
      q: 'Six months later the account is down to £8,000. The EA still trades 0.5 lots on setup B. What is the risk now?',
      options: [
        'Still 2% — the position size has not changed',
        '5% — £400 against £8,000, because the fixed size does not scale down with the account',
        '1%, since the policy is set to 1%',
        'Lower, because a smaller account means smaller positions'
      ],
      a: 1,
      why: '£400 ÷ £8,000 = **5%**. The loss did not shrink the position; it shrank the account underneath it. **A person would instinctively trade smaller after a drawdown. The machine will not** — and this is exactly why the bug is invisible in a backtest that starts at a fixed balance and only bites in a drawdown, which is the worst moment for it to appear.' }
  ],
  onPass: 'Stop first, size second — enforced in a function, not typed into an order call. This single change is the difference between an EA that survives a bad month and one that does not.'
},

{
  id: 'au-report',
  kind: 'analysis',
  module: 805,
  title: 'Read the report properly',
  brief: 'A backtest that looks superb. Read it in the right order and find what the summary is hiding.',
  dataset: [
    { type: 'table',
      title: 'Strategy tester report',
      head: ['', ''],
      rows: [
        ['Net profit', '£14,200'],
        ['Maximum drawdown', '62%'],
        ['Total trades', '87'],
        ['Win rate', '94%'],
        ['Average win', '£250'],
        ['Largest single loss', '£4,100'],
        ['Modelling quality', 'Low — open prices only'],
        ['Spread used', 'Fixed, 1.0 pip']
      ],
      foot: 'The strategy is a trend-following EA on H1 that reacts to intrabar price movement.' }
  ],
  tasks: [
    { kind: 'choice',
      q: 'Which number should you read **first**, and what does it say?',
      options: [
        'Net profit — £14,200 shows the strategy works',
        'Maximum drawdown — 62% means you would have had to sit through losing nearly two thirds of the account',
        'Win rate — 94% is exceptional',
        'Total trades — 87 is a reasonable sample'
      ],
      a: 1,
      why: 'Module 12\'s ordering, unchanged. **If you could not have sat through the drawdown, nothing else on the page matters** — you would have switched the EA off at the worst possible point and never collected the £14,200.' },

    { kind: 'calc',
      q: 'How many average wins does that **one** largest loss undo?',
      unit: 'wins', placeholder: 'e.g. 5', answer: 16.4, tol: 0.5,
      hint: 'Largest loss divided by average win.',
      why: '£4,100 ÷ £250 = **16.4 wins.** One bad trade erases sixteen good ones. That is a 94% win rate that means almost nothing, because the *size* of the outcomes is doing all the work — module 10\'s expectancy lesson, arriving in a backtest report.' },

    { kind: 'choice',
      q: 'A 94% win rate with occasional enormous losses most likely means:',
      options: [
        'An exceptionally accurate entry signal',
        'The exit logic is not realising losses — it holds losers until they recover, which is martingale behaviour you may have written by accident',
        'The spread setting is wrong',
        'The sample is too small to interpret'
      ],
      a: 1,
      why: 'This is module 10\'s return shape **hiding inside your own code.** You can install it entirely by accident with an exit rule that seemed reasonable — "close when it comes back to break-even" produces exactly this. **No summary statistic reveals it; fifty trades read by eye reveal it in a minute.**' },

    { kind: 'choice',
      q: 'The report says modelling quality is "low — open prices only" and the EA reacts to intrabar movement. What does that mean for this result?',
      options: [
        'Nothing — the strategy logic is unchanged',
        'The tester invented the price movement inside each bar, so the EA was tested against fiction and this report describes something that never happened',
        'It only affects the speed of the test',
        'It makes the result slightly conservative'
      ],
      a: 1,
      why: 'On open-prices-only modelling, the platform reconstructs intrabar movement rather than replaying it. **An EA that reacts within a bar is being tested against invented data.** Add a fixed 1.0 pip spread that ignores widening, and the report is a demonstration rather than evidence — before you even reach the 62% drawdown.' }
  ],
  onPass: 'Drawdown, sample size, distribution, then profit. And read the actual trades — the martingale shape is invisible in every summary line and obvious in the trade list.'
}

]);
