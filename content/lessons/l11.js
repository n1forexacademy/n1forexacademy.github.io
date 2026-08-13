/* N1 Forex Academy — lessons for Module 11. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[11] = [
    {
      title: 'Choosing an approach that fits',
      slides: [0, 1],
      check: [
        { q: 'You can only trade during Tokyo. Which archetype fits best?',
          options: ['Breakout trading', 'Mean reversion or range trading', 'Momentum continuation on the daily', 'News trading'],
          a: 1,
          why: 'Tokyo produces compressed ranges with respected boundaries — good for fading extremes, poor for breakouts. Match the archetype to the hours you actually have.' },
        { q: 'A brilliant strategy you cannot execute in your available hours is:',
          options: ['Still worth using', 'Worth less than an ordinary one you can execute consistently', 'Fine if you check charts at night', 'Best automated immediately'],
          a: 1,
          why: 'Fit matters more than quality. Most "the strategy stopped working" stories are really a mismatch between the approach and the trader\'s timetable.' }
      ]
    },
    {
      title: 'The five components',
      slides: [2, 3, 4],
      check: [
        { q: 'Which is a properly specified entry trigger?',
          options: ['Enter when the trend looks strong', 'Enter on an M15 bullish engulfing candle closing above the demand zone high', 'Enter when momentum builds', 'Enter when several indicators align'],
          a: 1,
          why: 'It names the timeframe, the pattern and the precise condition, so two people would enter at the same moment. The others get resolved by whatever you feel at the time.' },
        { q: 'A setup missing its invalidation component:',
          options: ['Is fine if the target is clear', 'Cannot be tested or followed under pressure', 'Only matters for beginners', 'Can use a fixed pip stop instead'],
          a: 1,
          why: 'Without a defined invalidation there is no stop location, no position size, and no way to measure the setup afterwards. All five components or it is not yet a setup.' }
      ]
    },
    {
      title: 'Specificity and management',
      slides: [5, 6],
      check: [
        { q: 'The handover test — giving your plan to someone else — is valuable because:',
          options: ['It proves the strategy is profitable', 'Every disagreement exposes an ambiguity you would have resolved by improvising', 'Regulators require it', 'It speeds up backtesting'],
          a: 1,
          why: 'You cannot detect your own ambiguities; you fill them in automatically. Note what it does not do: it says nothing about whether the strategy makes money.' },
        { q: 'Adding partial exits and a trailing stop:',
          options: ['Always improves results', 'Reduces variance but often reduces expectancy too — the trade-off must be measured', 'Only affects commission', 'Simplifies the plan'],
          a: 1,
          why: 'Cutting winners early caps the large outcomes that carry a trend-following edge while doing nothing about losers. Measure with and without before committing.' }
      ]
    },
    {
      title: 'Keeping it testable',
      slides: [7, 8, 9],
      check: [
        { q: 'Your backtest improved when you excluded Tuesdays. You should:',
          options: ['Add the rule, the data supports it', 'Reject it unless there is a mechanism explaining why Tuesdays differ — otherwise it is overfitting', 'Add it for one instrument only', 'Test Wednesdays too'],
          a: 1,
          why: 'Reason versus evidence. "No trading through rollover" has a mechanism; "no Tuesdays" has only a backtest, and on limited data that is very likely coincidence.' },
        { q: 'Why lock a plan for a set number of trades before revising it?',
          options: ['Because changing it is forbidden', 'Because a plan modified after every loss generates no usable information about any version of it', 'Because brokers require consistency', 'To reduce commission'],
          a: 1,
          why: 'Evaluation needs a stable thing to evaluate. Rules changing mid-sample produce a mixture of several systems and tell you nothing about any of them.' }
      ]
    }
  ];
})();
