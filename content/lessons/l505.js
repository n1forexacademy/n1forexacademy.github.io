/* N1 Forex Academy — lessons for Module 505 (Crypto track).

   VOICE: Jonathan talking to one student. This closes the crypto track and, at
   the time it was written, closed the course. Commodities and spread betting now
   follow, so the summing-up here was narrowed to "the six tracks behind you" and
   the final close moved to l704. If tracks are ever added or reordered, check
   both files — a lesson that claims to be last and is not reads badly. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[505] = [
    {
      title: 'Sizing for a market that falls 80%',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Fifth time extending the same policy. **You know the drill by now, which is itself the point.**",
          "**Unchanged:** risk per trade, stops where the idea is wrong, never widening, never averaging down, daily and weekly stops, correlated positions counted once.",
          "**Four additions here.**",
          "**A total exposure cap** — crypto as a percentage of everything you have, decided before you buy anything. **A venue cap** — how much may sit on any single platform, from module 502. **A leverage rule** — set by liquidation distance against typical daily range from module 504, not by what the venue permits. And **your custody procedure**, which you've already written.",
          "Now sizing, and there's one number that matters more than any formula.",
          "**A 10% daily move here is unremarkable.** In the equities track that was a significant event worth investigating. Here it's a Tuesday.",
          "**And falls of 70 to 80% from a peak are a recurring historical feature of major crypto assets.** Not a crash, not an anomaly — something that has happened repeatedly and will presumably happen again."
        ],
        terms: [
          { term: 'Total exposure',
            plain: 'Everything you hold across all venues and wallets, counted as one number.',
            like: 'Adding up every account before deciding whether you can afford something.' },
          { term: 'Venue cap',
            plain: 'The most you will hold on any single platform.',
            like: 'Not keeping all your cash in one place, for reasons that have nothing to do with interest rates.' },
          { term: 'Withdrawal test',
            plain: 'Periodically moving a small amount off a venue to check you still can.',
            like: 'Testing the fire door occasionally, rather than on the night of the fire.' },
          { term: 'Capital you can lose',
            plain: 'Money whose complete loss would change nothing important about your life.',
            like: 'The amount you would take to a casino, decided at home.' }
        ],
        close: [
          "So **size so that an 80% fall is survivable and boring** — something you can sit through without needing to act. If you'd have to do something about it, the position was too big before it fell.",
          "Note what that means practically: **smaller positions, not tighter stops.** Ordinary noise here is wide, so a stop that sits inside it just gets taken by nothing happening. ATR from module 8 applies here exactly as it did there.",
          "Now the limit of everything I've just said, and it's important because it's a false comfort people carry.",
          "**Position sizing is a defence against market risk. That is all it is.**",
          "**It does nothing about an exchange failing. Nothing about withdrawals freezing. Nothing about a lost key or a phishing approval.** And from module 502, you know those have historically cost retail holders more than being wrong about the price.",
          "**Those risks are handled by procedure and by distribution, not by arithmetic.**",
          "So one rule, plainly: **never hold on a single venue an amount whose total loss would matter to you.** Not because failure is likely. **Because it's possible and irreversible**, and those two words together change what caution means.",
          "**And test withdrawals periodically.** A venue that has quietly stopped paying people out is much better discovered with a small amount than a large one."
        ]
      },
      check: [
        { q: 'You have sized your crypto positions carefully. What risk remains untouched?',
          options: ['None — sizing addresses risk', 'Custody and venue risk: an exchange failure, a lost key or a phishing approval is unaffected by position size', 'Only tax risk', 'Correlation risk'],
          a: 1,
          why: 'Sizing defends against market risk and nothing else. The historically larger threat in this asset class is operational, and it is handled by procedure and distribution instead.' },
        { q: 'Historic falls of 70–80% from a peak in major crypto assets are:',
          options: ['Unprecedented events', 'A recurring historical feature you should size for in advance', 'Only seen in small tokens', 'Prevented by using stops'],
          a: 1,
          why: 'Size so that such a fall is survivable and boring rather than something you must react to. Genuinely accepting this leads to sizing an order of magnitude more sensibly.' }
      ]
    },

    {
      title: 'What all of this was for',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "That closes the crypto track — six markets behind you now. Before we move on, let me be straight about this one, and then about what the six have actually been teaching you.",
          "**What's genuinely here:** a real technology, real use in moving value across borders without permission, and deep liquidity in the largest assets.",
          "**Also genuinely here:** thin books outside the top few names, irreversible mistakes, uneven regulation, venue failures, and a great deal of outright fraud.",
          "**Both lists are true.** Anyone giving you only one of them is selling you something.",
          "One more thing before the close, because it's a specific trap in this market:",
          "**Being early and being right are not the same thing.** In a market driven substantially by flows and attention, a correct idea can be unprofitable for years. That's not an analytical problem you can study your way out of — **it's a survivability problem**, and the answer is sizing rather than conviction.",
          "**So only commit capital whose total loss would change nothing important.** Say that number out loud before you fund an account, not after."
        ],
        terms: [
          { term: 'Attention risk',
            plain: 'The risk a position depends on continued interest rather than on anything you can measure.',
            like: 'A restaurant that is busy because it is busy. Fine, until it is not.' },
          { term: 'Venue risk',
            plain: 'The risk the platform itself fails, freezes withdrawals, or is compromised.',
            like: 'The bank being the problem, rather than the market.' }
        ],
        close: [
          "**Six tracks so far. Let me tell you what you have actually been learning**, because it isn't the six markets.",
          "**You learned one risk policy.** You wrote it in module 10, and then extended it five times — for equities, for bonds, for futures, for options, and now for crypto. **You never replaced it.** Not once. Every market added clauses; none of them broke the thing underneath.",
          "**That transfer is the course.** The markets were the material it was taught through.",
          "**You met one answer about analytical tools, five times.** Open interest, credit spreads, positioning, implied volatility, the greeks. Every single one: **context, not signal.** That repetition is the most reliable way there is to tell a genuine analytical tool from something being sold to you as a trading system.",
          "**You met one return shape and learned to distrust it, four times.** Many small wins, then one enormous loss. Martingale in module 10. Carry in module 206. Selling options in 401. High leverage here. **Different names, same profile, same ending** — and it ends people who size for the calm periods.",
          "**You met one correlation lesson, three times.** Dollar-negative currency pairs. Five banks. Ten tokens. **Always the same answer: ask what all your positions need to happen, and if it's the same thing, you have one position.**",
          "**And you were told three separate times that declining a market is a competent conclusion** — in futures, in options, and here.",
          "So here's where you finish, stated honestly:",
          "**You are not equipped to trade six markets. Nobody is, and anyone claiming otherwise is describing a marketing page.**",
          "**You are equipped to evaluate any of them, size properly, and decide which deserve your attention.** That's a rarer and considerably more useful thing.",
          "Two tracks remain — commodities, where the thing you trade physically exists, and spread betting, which is a wrapper rather than a market. **Both will feel familiar**, and that familiarity is the point: by now you should be able to meet a new market and know which questions to ask before anybody tells you."
        ]
      },
      check: [
        { q: 'Across six tracks, what did the recurring verdict on analytical tools turn out to be?',
          options: ['They are all unreliable', 'Context, not signals — true of open interest, credit spreads, positioning, implied volatility and the greeks alike', 'Only price matters', 'Use as many as possible together'],
          a: 1,
          why: 'Five different tools across five markets, one answer every time. That repetition is the most reliable way to tell a genuine analytical tool from something sold to you as a trading system.' },
        { q: 'Having completed all six tracks, you are:',
          options: ['Ready to trade every market actively', 'Equipped to evaluate any of them and decide which deserve your attention — including deciding against some', 'Guaranteed to be profitable', 'Qualified to advise others'],
          a: 1,
          why: 'Nobody can certify an outcome. What you have is a process, a risk policy extended across six markets, and the ability to decline one on the arithmetic — which is a skill rather than a failure.' }
      ]
    }
  ];
})();
