/* N1 Forex Academy — lessons for Module 107. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[107] = [
    {
      title: 'Sizing in shares',
      slides: [0, 1],
      check: [
        { q: '£20,000 portfolio, 1% risk, entry £50, stop £46. How many shares?',
          options: ['4', '50', '200', '400'],
          a: 1,
          why: 'Risk is £200; per-share risk is £4; 50 shares. That is a £2,500 position — 12.5% of the portfolio. Note both numbers: the risk is 1% but the concentration is 12.5%.' },
        { q: 'Why do stops behave differently in equities than in forex?',
          options: ['Brokers execute them differently', 'Overnight gaps and trading halts are routine, so the stop may fill far from its level or not at all', 'Stops are optional', 'Volatility is lower'],
          a: 1,
          why: 'In forex a catastrophic gap was a rare tail event. Here it is a scheduled quarterly possibility, so a bad exit is a planning assumption rather than an exception.' }
      ]
    },
    {
      title: 'Concentration and portfolio heat',
      slides: [2, 3],
      check: [
        { q: 'Why does concentration matter as much as risk percentage?',
          options: ['It does not', 'Because gaps bypass the stop entirely, exposing the full position rather than the intended risk', 'Because brokers charge by size', 'Because of commission'],
          a: 1,
          why: 'A stop only limits loss in a continuously trading market. When a share gaps 40% on a warning, your loss is driven by position size, not by where the stop sat.' },
        { q: 'You hold six positions, four of them banks. For portfolio heat, the banks count as:',
          options: ['Four separate positions', 'Approximately one, because they will fall together', 'Excluded', 'Double, for prudence'],
          a: 1,
          why: 'Sector holdings share drivers and their stops hit together. Heat measures what happens when every stop fires at once, which is precisely a market-wide fall.' }
      ]
    },
    {
      title: 'Your equity risk policy',
      slides: [4, 5],
      check: [
        { q: 'The practical test for whether a position is too large:',
          options: ['Whether the stop feels comfortable', 'Asking what a 40% overnight gap in that share would do to the portfolio', 'Whether it fits the commission budget', 'Whether the company is profitable'],
          a: 1,
          why: 'It turns an abstract limit into an imaginable event. If the answer is unacceptable, the position is too large regardless of where the stop sits.' },
        { q: 'In an equity portfolio, holding cash is:',
          options: ['A failure to deploy capital', 'A legitimate position and an active decision', 'Only for beginners', 'The same as being invested'],
          a: 1,
          why: 'Forex conditions traders to be either in or out of one trade. In a portfolio the cash proportion is itself a risk decision, and choosing not to hold is often correct.' }
      ]
    }
  ];
})();
