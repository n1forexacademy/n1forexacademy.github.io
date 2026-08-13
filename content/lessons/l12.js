/* N1 Forex Academy — lessons for Module 12. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[12] = [
    {
      title: 'Why backtests lie',
      slides: [0, 1],
      check: [
        { q: 'You scroll back through history and your strategy looks highly profitable. The problem:',
          options: ['Nothing, this is how strategies are validated', 'The future was visible, so hindsight made setups obvious and failures look avoidable', 'The period was too short', 'You should use a higher timeframe'],
          a: 1,
          why: 'With the outcome visible you unconsciously select the instances that worked and skip the ambiguous ones. Bar replay with rules locked beforehand is the only honest manual method.' },
        { q: 'When backtesting, you should also log:',
          options: ['Only the winning trades', 'Every instance where the conditions were met, including ones you skipped and why', 'Just the final profit figure', 'Nothing until the test is complete'],
          a: 1,
          why: 'The skipped instances are where the plan\'s ambiguity lives. A high skip count means the rules are not specific enough — the fix is in the plan, not the trader.' }
      ]
    },
    {
      title: 'Measuring properly',
      slides: [2, 3],
      check: [
        { q: 'Which metric should you examine first?',
          options: ['Total profit', 'Win rate', 'Maximum drawdown', 'Number of winning months'],
          a: 2,
          why: 'If you could not have sat through the drawdown, the strategy is unusable regardless of its profit — you would have abandoned it at the worst point.' },
        { q: 'In a forward test, following the rules and losing is:',
          options: ['A failure', 'A better outcome at this stage than breaking them and winning', 'Identical to breaking them and losing', 'A reason to change the plan immediately'],
          a: 1,
          why: 'Profiting by breaking rules teaches that breaking rules works — far more expensive long term than an honest losing sample.' }
      ]
    },
    {
      title: 'The journal that finds problems',
      slides: [4, 5],
      check: [
        { q: 'Your journal shows compliant trades at +0.3R and non-compliant at −0.8R. This tells you:',
          options: ['The plan is broken and needs rewriting', 'The plan has an edge and the problem is execution discipline', 'You need more indicators', 'The sample is meaningless'],
          a: 1,
          why: 'This split separates two problems that feel identical from the inside. Compliant trades performing better means the fix is mechanical countermeasures, not a new plan.' },
        { q: 'The most valuable column in a trading journal is:',
          options: ['Entry price', 'Whether you followed the plan — yes or no', 'The indicator readings', 'Time of day'],
          a: 1,
          why: 'It is what turns a diary into a diagnostic. Sorting by it and comparing expectancy is the single most informative analysis a retail trader can run on their own data.' }
      ]
    },
    {
      title: 'Psychology and automation',
      slides: [6, 7, 8, 9, 10],
      check: [
        { q: 'The biggest risk of relying on discipline to follow your rules:',
          options: ['Discipline is unnecessary with a good strategy', 'Willpower is finite and degrades under stress, fatigue and loss — exactly when rules matter most', 'It slows execution', 'It makes journaling harder'],
          a: 1,
          why: 'Design the process so it does not require you at your best: pre-set stops and targets, hard daily stops, checklists. Make the correct action the default.' },
        { q: 'An EA shows a smooth rising equity curve with tiny drawdown. Check first:',
          options: ['The report colour scheme', 'Whether every position carries a stop loss — martingale and grid systems produce exactly this curve until the sequence that ends them', 'Trades per day', 'Whether it works on other pairs'],
          a: 1,
          why: 'A suspiciously smooth curve is the signature of a system that never realises losses. Examine the position-sizing logic before anything else.' }
      ]
    }
  ];
})();
