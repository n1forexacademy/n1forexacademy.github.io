/* N1 Forex Academy — lessons for Module 804 (Automation track).

   VOICE: Jonathan talking to one student. The hard-coded lot size is the single
   costliest line in a beginner's EA and the failure is invisible in a backtest
   that starts at a fixed balance — it only shows up in a drawdown, which is
   exactly when it does most damage. The risk policy becoming literal code is
   module 12's countermeasure argument arriving at its logical end. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[804] = [
    {
      title: 'The costliest line in a beginner\'s EA',
      slides: [0, 1],
      teach: {
        lead: [
          "There is one line that has ended more automated accounts than every strategy flaw put together, and it looks completely harmless.",
          "**`OrderSend(..., 0.1, ...)`**",
          "A fixed lot size. It compiles. It runs. It looks reasonable — 0.1 lots is a modest position, after all.",
          "**Here is what it actually does.**",
          "Your stop distance changes with every setup. A tight one might be 20 points; a wide one 200. **On the same 0.1 lots, those risk ten times different amounts.** Your risk is now whatever the chart happened to give you that morning.",
          "**And it doesn't scale with the account.** If your balance halves, 0.1 lots is suddenly twice the risk it was — and the EA has no idea. It'll place that size after a 40% drawdown exactly as cheerfully as on day one.",
          "**A person would notice.** You'd look at a shrunken balance and instinctively trade smaller. **The machine will not.** It was told 0.1, so it does 0.1, forever."
        ],
        terms: [
          { term: 'Risk amount',
            plain: 'Account equity × risk percentage. The most a trade may cost if the stop works.',
            like: 'The cash you decided to take out, recalculated every time.' },
          { term: 'Tick value',
            plain: 'What one price increment is worth per lot. The bridge from a stop in points to money.',
            like: 'The exchange rate between "points" and "pounds".' },
          { term: 'Lot step',
            plain: 'The increment a broker accepts — often 0.01. A size between steps is invalid.',
            like: 'Shoe sizes. There is no 9.37.' },
          { term: 'Minimum lot',
            plain: 'The smallest position the broker will accept. A commercial floor, not a risk-based one.',
            like: 'A minimum order value. Set by the shop, not by your budget.' }
        ],
        code: [
          { caption: 'What it should be instead — module 10, in a function',
            lines: [
              'double lotsFor(double stopLevel)',
              '{',
              '   double price = SymbolInfoDouble(_Symbol, SYMBOL_BID);',
              '   double dist  = MathAbs(price - stopLevel);',
              '',
              '   if(dist <= 0) return(0);           // never divide by zero',
              '',
              '   double equity = AccountInfoDouble(ACCOUNT_EQUITY);',
              '   double risk   = equity * RiskPercent / 100.0;',
              '',
              '   // Ask the platform what a point is worth. Do NOT assume $10.',
              '   double tickVal  = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);',
              '   double tickSize = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_SIZE);',
              '   double perLot   = (dist / tickSize) * tickVal;',
              '',
              '   if(perLot <= 0) return(0);',
              '   return(risk / perLot);             // the size falls OUT of the stop',
              '}'
            ],
            note: 'Notice the order: **stop first, size second.** Same as module 10, unchanged by the fact a computer is doing it. And note the platform is asked what a point is worth rather than told.' }
        ],
        close: [
          "That `$10 a pip` assumption deserves a sentence of its own, because everyone makes it.",
          "**It comes from EUR/USD, and it is wrong nearly everywhere else.** Module 2 taught you this — it's about $6.74 on USD/JPY, $1 on gold, and something else again on an index.",
          "**Ask the platform.** `SYMBOL_TRADE_TICK_VALUE` will tell you. An EA that assumes ten works correctly on one instrument and silently mis-sizes on every other.",
          "And here's why this whole bug is so dangerous: **it is invisible in a backtest.**",
          "A backtest starts at a fixed balance. If you never have a serious drawdown in the test, a fixed lot size looks entirely fine — the risk was roughly constant because the balance was roughly constant.",
          "**The failure only appears in a drawdown**, which is precisely the moment you least want your position sizes to be too big.",
          "**So it passes the test and fails in the one situation the test was supposed to protect you from.**"
        ]
      },
      check: [
        { q: 'Why is a hard-coded lot size the costliest line in a beginner\'s EA?',
          options: ['It is slower to execute', 'Risk then varies with every stop distance and every account balance — and a machine keeps placing it right through a drawdown', 'Brokers reject fixed sizes', 'It cannot be optimised'],
          a: 1,
          why: 'A 20-point stop and a 200-point stop risk ten times different amounts on the same 0.1 lots. Worse, it is invisible in a backtest that starts at a fixed balance — it only shows up in a drawdown.' },
        { q: 'Which value should you use to convert a stop distance into money?',
          options: ['$10 per pip', 'The platform\'s tick value for that specific symbol', 'The spread', 'The account leverage'],
          a: 1,
          why: 'The $10 assumption comes from EUR/USD and is wrong on JPY pairs, gold and indices — module 2\'s lesson. Ask the platform rather than telling it.' }
      ]
    },

    {
      title: 'Broker reality, and the policy as code',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Your function now returns something like **0.0734 lots**. No broker will accept that.",
          "Brokers take **increments** — usually 0.01 — with a floor and a ceiling. So you have to round. And **which way you round is a risk decision.**",
          "**Always round down.**",
          "Rounding up feels like nothing. It is a decision to risk more than you just carefully computed, taken by a machine, on every single trade, forever.",
          "Then there's the case where rounding down gives you zero — the computed size was below the broker's minimum.",
          "**The correct action is to skip the trade.**",
          "Not to trade the minimum. **The minimum is a commercial floor, not a risk-based one** — it exists to make the market worth the broker offering, and it knows nothing about your account.",
          "You've reached exactly this conclusion twice before: **module 302's 0.4 contracts, and module 702's minimum stake.** Same shape, same answer, third market."
        ],
        terms: [
          { term: 'Normalisation',
            plain: 'Rounding a computed size to a valid lot step, deliberately and in a known direction.',
            like: 'Rounding your bid down to the nearest pound, never up.' },
          { term: 'Portfolio heat',
            plain: 'Total risk across all open positions if every stop were hit at once.',
            like: 'Adding up every bet on the table, not just the one you are watching.' },
          { term: 'Daily stop',
            plain: 'A loss level at which the EA stops trading for the day.',
            like: 'Closing time. It arrives whether or not you feel finished.' },
          { term: 'Free margin check',
            plain: 'Confirming the account can support the order before sending it.',
            like: 'Checking the card will go through before you get to the till.' }
        ],
        code: [
          { caption: 'Broker constraints, handled deliberately',
            lines: [
              'double normaliseLots(double lots)',
              '{',
              '   double minLot  = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MIN);',
              '   double maxLot  = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MAX);',
              '   double step    = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_STEP);',
              '',
              '   lots = MathFloor(lots / step) * step;    // round DOWN, never up',
              '',
              '   if(lots < minLot) return(0);             // too small = no trade',
              '   if(lots > maxLot) lots = maxLot;',
              '   return(lots);',
              '}'
            ],
            note: '`MathFloor` is doing real work there. **`MathRound` would round up half the time** — which is a decision to breach your own risk policy on every second trade.' },

          { caption: 'Your risk policy, enforced by the machine instead of by willpower',
            lines: [
              'double  dayStartEquity = 0;',
              'datetime dayStartTime  = 0;',
              '',
              'bool canTradeToday()',
              '{',
              '   // Reset the marker when a new day begins',
              '   datetime today = iTime(_Symbol, PERIOD_D1, 0);',
              '   if(today != dayStartTime)',
              '   {',
              '      dayStartTime   = today;',
              '      dayStartEquity = AccountInfoDouble(ACCOUNT_EQUITY);',
              '   }',
              '',
              '   double equity = AccountInfoDouble(ACCOUNT_EQUITY);',
              '   double lossPct = (dayStartEquity - equity) / dayStartEquity * 100.0;',
              '',
              '   if(lossPct >= DailyStopPercent)',
              '   {',
              '      Comment("Daily stop hit. No more trades today.");',
              '      return(false);',
              '   }',
              '   return(true);',
              '}'
            ],
            note: 'Twenty lines. **That is your daily stop from module 10** — the rule people break most often by hand, because the urge to trade is strongest right after a loss. Here it simply stops answering.' }
        ],
        close: [
          "Add the same treatment for **total open risk** — before opening anything, add up what every existing position would lose at its stop, and refuse if the new one would breach your ceiling.",
          "And **check free margin before sending the order.** A rejection your EA doesn't notice is a silent failure, and it'll keep trying.",
          "Now step back and look at what you've just built, because it's the point of the whole course arriving somewhere unexpected.",
          "**Module 12 told you not to rely on discipline.** Willpower is finite and runs lowest exactly when the market is hardest, so you build countermeasures that are **rules rather than intentions.**",
          "**In an EA that stops being a metaphor.**",
          "The daily stop isn't a promise you make to yourself on a Sunday. It's twenty lines of code that will refuse, at 3am, on the fourth losing trade, while you're asleep — and it cannot be talked round, cannot make an exception, cannot decide that tonight is different.",
          "**You don't need the biscuits out of the house. The house won't open the tin.**",
          "That's the genuine argument for automation, and notice it has nothing to do with finding trades. **It's that a machine is better at obeying your own rules than you are.**"
        ]
      },
      check: [
        { q: 'Your computed size is 0.007 lots and the broker minimum is 0.01. What should the EA do?',
          options: ['Round up to 0.01', 'Return zero and skip the trade', 'Tighten the stop until 0.01 fits the risk', 'Trade it and accept the extra risk'],
          a: 1,
          why: 'Rounding up breaches the policy; tightening the stop is worse, because it puts the stop where the idea is not yet wrong. Third time this course has reached that answer — module 302, module 702, and here.' },
        { q: 'How should a daily stop be implemented in an EA?',
          options: ['As a note in the plan to check each day', 'In code — record equity at the start of the day and refuse to trade once the loss limit is hit', 'By turning the EA off manually', 'It is not needed in automation'],
          a: 1,
          why: 'Module 12 said countermeasures must be rules rather than intentions. In an EA that is literally true: twenty lines, and it cannot be talked round at 3am.' }
      ]
    }
  ];
})();
