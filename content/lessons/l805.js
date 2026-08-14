/* N1 Forex Academy — lessons for Module 805 (Automation track).

   VOICE: Jonathan talking to one student. Module 12 taught why backtests lie;
   this teaches the extra lies the tester adds. The plateau-versus-spike image is
   the most transferable idea here — it gives a visual robustness test that
   outlives the specific tool. Walk-forward is the technique students skip
   because it is slower and produces worse numbers, which is exactly the point. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[805] = [
    {
      title: 'The defaults are a gift the market will not give you',
      slides: [0, 1],
      teach: {
        lead: [
          "Module 12 taught you why backtests lie: hindsight, optimisation bias, testing the period you remember, skipping the awkward instances, and leaving costs out.",
          "**Automation removes the first one and adds four new ones.** The tester can't cheat by seeing the future — but it flatters you in ways a manual test never could.",
          "**Modelling quality** is the big one. To test an EA the platform has to reconstruct how price moved *inside* each bar. On low-quality modelling, **it makes that movement up.**",
          "So if your EA reacts within a bar — most do — **you're testing it against invented data.** Use every-tick or real-tick modelling. It's much slower, and it's the only honest option.",
          "**Spread** is next. The tester will happily assume a tight fixed spread all the way through. You know from module 5 that spread widens overnight, at rollover and around news — precisely when a lot of signals fire.",
          "**And costs.** Commission and swap left out can flip the sign of a result, exactly as module 12 said.",
          "**A test on default settings is a demonstration, not evidence.**"
        ],
        terms: [
          { term: 'Modelling quality',
            plain: 'How faithfully the tester reconstructed price movement inside each bar.',
            like: 'The difference between a recording and someone\'s impression of it.' },
          { term: 'Optimisation',
            plain: 'Automatically testing many parameter combinations to find the best historical result.',
            like: 'Trying every key in the lock. You will get in, and you have learned nothing about locks.' },
          { term: 'Parameter surface',
            plain: 'Results plotted across a range of settings, so you can see the shape rather than the winner.',
            like: 'Looking at the whole landscape instead of standing on the highest rock.' },
          { term: 'Walk-forward',
            plain: 'Optimise on one window, test on the next untouched, then roll forward and repeat.',
            like: 'Revising from last term\'s paper, then sitting this term\'s.' }
        ],
        close: [
          "Now the optimiser, which is the most dangerous button in this entire course.",
          "It'll try thousands of parameter combinations and hand you the best one. That sounds like exactly what you want.",
          "**The best result on past data is, almost by definition, the one most closely fitted to that data's noise.**",
          "Module 11 warned you about overfitting — adding rules until history looks perfect, then watching it fall apart on next month. **The optimiser lets you do that ten thousand times before lunch.**",
          "So here's the habit that saves you, and it's visual.",
          "**Don't read the winning row. Look at the shape.**",
          "Plot the results across the whole parameter range and ask what it looks like.",
          "**A broad plateau** — where 45, 50 and 55 all work reasonably — means you've found something real. The exact number doesn't matter much, which is what a genuine effect looks like.",
          "**A single towering spike** — where 50 is spectacular and 45 and 55 both lose — is a fluke. You've found one lucky number.",
          "**And the spike is exactly what the optimiser puts at the top of its list**, because it sorts by result.",
          "**Always prefer a good result on a plateau over a spectacular one on a spike.** That's module 11's robustness test, made visible."
        ]
      },
      check: [
        { q: 'Why does modelling quality matter in a backtest?',
          options: ['It affects how fast the test runs', 'Low quality invents price movement inside each bar, so any intrabar logic is tested against fiction', 'It changes the spread', 'It only matters for scalping'],
          a: 1,
          why: 'If your EA reacts within a bar and the tester made that bar\'s internal movement up, the result describes invented data rather than the market.' },
        { q: 'The optimiser reports a spectacular result at one parameter value, with losses on either side. This is:',
          options: ['The optimal setting to use', 'A fluke fitted to noise — prefer a good result on a broad plateau over a spectacular one on a spike', 'Evidence of a strong edge', 'A sign to optimise more finely'],
          a: 1,
          why: 'A real effect survives a nudge. A lone spike is the shape of curve fitting — and it is exactly what the optimiser puts at the top, because it sorts by result.' }
      ]
    },

    {
      title: 'Walk forward, then read the actual trades',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "There's one testing technique that's genuinely honest, and almost nobody uses it — because it takes longer and produces worse numbers.",
          "**Both of those are the point.**",
          "**Walk-forward** works like this. Optimise your settings on one window of data — say six months. Then take those settings, unchanged, and test them on the **next** three months, which the optimiser never saw.",
          "Then roll both windows forward and do it again. And again.",
          "**The out-of-sample results are the only ones that mean anything.** The in-sample results are the ones you fitted — of course they look good, you chose them to.",
          "And the verdict is refreshingly unambiguous:",
          "**If out-of-sample performance collapses, you optimised noise.** Not a judgement call, not a matter of interpretation. The settings that fitted the past didn't survive contact with data they weren't chosen from.",
          "**This is module 12's out-of-sample rule, mechanised** — and it's the closest a backtest ever gets to telling you the truth."
        ],
        terms: [
          { term: 'In-sample',
            plain: 'The data you used to choose the settings. Results here are guaranteed to flatter.',
            like: 'The exam paper you revised from.' },
          { term: 'Out-of-sample',
            plain: 'Data deliberately held back. The only results that carry information.',
            like: 'A question you have not seen before.' },
          { term: 'Slippage model',
            plain: 'What the tester assumes about fills. Usually generous, always better than reality.',
            like: 'A quote that assumes no traffic.' }
        ],
        close: [
          "When you finally read the report, read it in the same order module 12 gave you — **it does not change because a computer produced it.**",
          "**Maximum drawdown first.** If you couldn't have sat through it, nothing else on the page matters, because you'd have switched the EA off at the worst possible moment.",
          "**Then the number of trades.** Under 100 is noise however good it looks.",
          "**Then the distribution.** One monstrous winner carrying the entire result is an anecdote, not an edge.",
          "**And profit last**, still the least informative number on the report and still the one everybody reads first.",
          "But there's one addition for automation, and it catches something no summary statistic will.",
          "**Read the actual trade list. Fifty real trades, by eye.**",
          "Here's why. A report showing a **95% win rate** and a healthy profit looks superb. Open the trades and you might find dozens of tiny wins and a handful of enormous losses — because the exit logic never realises a loser, it just holds until it comes back.",
          "**That's the martingale shape from module 10, hiding inside your own code**, and you can put it there completely by accident with an exit rule that seemed reasonable.",
          "**No summary line reveals it. Fifty trades read by eye reveal it in about a minute.**"
        ]
      },
      check: [
        { q: 'What does a walk-forward test actually prove?',
          options: ['That the strategy is profitable', 'Whether performance survives on data that was not used to choose the settings', 'That the parameters are optimal', 'That modelling quality was adequate'],
          a: 1,
          why: 'In-sample results are the ones you fitted. If out-of-sample performance collapses, you optimised noise — and that verdict is unambiguous rather than a judgement call.' },
        { q: 'A test shows a 95% win rate and a healthy profit. What should you check?',
          options: ['Nothing — it is clearly working', 'The actual trade list, because that win rate usually means losses are not being realised', 'Whether to increase the lot size', 'The commission setting only'],
          a: 1,
          why: 'That is module 10\'s martingale shape hiding inside your own exit logic, and you can put it there by accident. No summary statistic shows it; fifty trades read by eye show it in a minute.' }
      ]
    }
  ];
})();
