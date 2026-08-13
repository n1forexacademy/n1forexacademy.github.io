/* N1 Forex Academy — lessons for Module 12.

   VOICE: Jonathan talking to one student, and this is the last forex module, so
   it closes the track. The biscuit-tin framing of discipline is the important
   one — willpower is finite, so the answer is process design rather than
   character. The final lesson states plainly what to do after the course. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[12] = [
    {
      title: 'Why your backtest is lying to you',
      slides: [0, 1],
      teach: {
        lead: [
          "You've got a plan. Now you need to find out whether it makes money — and the obvious way to check is the way that fools almost everyone.",
          "You scroll back through the charts, look for your setup, and count how it would have done. It looks excellent. It always looks excellent.",
          "**Here's why.** You are watching a match you already know the score of.",
          "The future is right there on the screen. So when you spot your setup, you can already see which way it went. The ones that worked look obvious. The ones that failed look like something you'd \"obviously have skipped\". You're not testing — **you're being marked by someone who's read your answers.**",
          "That's **hindsight bias**, and it's only the first of five.",
          "**Optimisation bias** — you tweak the rules as you go, so the plan quietly moulds itself to the very data you're testing on. **Selection bias** — you test the period you remember, and people remember trending periods. **Skipping the awkward ones** — the ambiguous instances get quietly left out and the clean ones counted. And **leaving costs out entirely**, which on its own can turn a profit into a loss."
        ],
        terms: [
          { term: 'Backtest',
            plain: 'Applying your rules to past data to see how they would have done.',
            like: 'A dress rehearsal. Only useful if you do not skip to the last page of the script.' },
          { term: 'Hindsight bias',
            plain: 'Past charts looking obvious because you can already see what happened next.',
            like: 'Watching a match you know the score of. Every decision looks easy.' },
          { term: 'Bar replay',
            plain: 'Stepping through history one candle at a time so the future stays hidden.',
            like: 'Reading a whodunnit properly, rather than checking the last chapter first.' },
          { term: 'Out-of-sample',
            plain: 'Data you deliberately kept back, used to check whether the plan works on something it was not built on.',
            like: 'A question you have not seen before. The only kind that tests anything.' }
        ],
        close: [
          "So here's how to do it honestly.",
          "**Use bar replay.** Every platform has it. The future must be hidden — scrolling through visible history is not a test, it's a story.",
          "**Lock your rules before you start.** If you change anything, you start again on fresh data. That's the deal.",
          "**Log every instance where your filter and location conditions were met**, including the ones you skipped and why you skipped them.",
          "That skip log matters more than it sounds. **A high skip count means your rules aren't specific enough** — and that's a problem with the plan, not with you. It's exactly the ambiguity the handover test was designed to find.",
          "**Include costs on every trade.** Spread, commission, and swap if you held it overnight.",
          "**Hold back a chunk of data you haven't looked at.** Build on one period, then verify on another. If it only works on the period you built it on, you built a memory, not a strategy.",
          "**Minimum 100 trades**, and across both trending and ranging conditions. Fewer than that and you're reading noise."
        ]
      },
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
      title: 'What to measure, and in what order',
      slides: [2, 3],
      teach: {
        lead: [
          "When the test is done you'll have a pile of numbers. Read them in this order, because the order matters.",
          "**Maximum drawdown first.** The deepest hole the account went into at any point. Not profit — drawdown.",
          "Why first? Because **if you couldn't have sat through it, nothing else on the list matters.** A strategy that made 40% a year but spent four months down 30% is a strategy you'd have abandoned in month three, at the worst possible point. Its historical profit is irrelevant; you were never going to be there to collect it.",
          "**Then expectancy in R**, costs included. That's your actual edge per trade.",
          "**Then the number of trades.** Under 100 and you're looking at noise dressed as a result.",
          "**Then your longest losing streak** — and be honest with yourself about whether you'd have kept following the plan through it.",
          "**Then the spread of outcomes.** If one enormous winner produced the entire result, you don't have an edge, you have an anecdote.",
          "**Profit is the least informative number on that list.** It's the one everyone looks at first."
        ],
        terms: [
          { term: 'Maximum drawdown',
            plain: 'The deepest fall from a peak the account suffered during the test.',
            like: 'The worst point in the journey. If you would have got out of the car there, the destination is irrelevant.' },
          { term: 'Forward test',
            plain: 'Running the plan on demo in real time, with the future genuinely unknown.',
            like: 'The practical driving test. The theory paper did not tell you whether you can drive.' },
          { term: 'Compliance',
            plain: 'Whether you actually followed your own rules on a given trade.',
            like: 'Whether you followed the recipe. Worth knowing before blaming the recipe.' }
        ],
        close: [
          "Once the backtest passes, you're not finished — you've only established that **the rules had an edge historically.** You still don't know whether **you** can execute them.",
          "That's what a **forward test** is for: trading the plan on demo, in real time, at real sizes, for **at least 30 trades**.",
          "Two rules make it worth doing:",
          "**Change nothing during the test.** A plan modified halfway through produces information about nothing.",
          "**Log the trades you should have taken and didn't.** Those are as informative as the ones you took — often more.",
          "And when you review it, **compare your execution to the plan, not just your profit.**",
          "Here's the part that sounds strange and isn't:",
          "**Following the rules and losing is a better outcome, right now, than breaking them and winning.**",
          "A loss while compliant tells you something real about the plan. A win from breaking the rules teaches you that breaking the rules works — and that's a lesson you'll pay for later, with interest, on a much bigger position."
        ]
      },
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
      title: 'A journal that finds your problem',
      slides: [4, 5],
      teach: {
        lead: [
          "Most trading journals are diaries. They record what happened and they change nothing, because nobody ever goes back and asks a question of them.",
          "A journal that works has one column the diaries don't:",
          "**Did I follow the plan? Yes or no.**",
          "That single column is what turns a record into a diagnostic, and here's the analysis it lets you run — the most useful thing a retail trader can do with their own data.",
          "**Sort your trades into compliant and non-compliant, and work out the expectancy of each pile separately.**",
          "**If compliant trades do better than non-compliant ones**, your plan has an edge and your problem is discipline. Don't touch the plan. Build countermeasures.",
          "**If compliant trades do worse**, your discipline is fine and your plan is the problem. Don't beat yourself up about willpower. Change the rules.",
          "Those two situations feel completely identical from the inside — both feel like \"I'm losing money and I don't know why\". The compliance column is the only thing that tells them apart, and the fixes are opposites."
        ],
        terms: [
          { term: 'Trading journal',
            plain: 'A structured record of every trade — the mechanics, your reasoning, and whether you followed the plan.',
            like: 'A mechanic\'s service log rather than a travel diary.' },
          { term: 'Weekly review',
            plain: 'A set time each week to read your own journal and draw one conclusion.',
            like: 'Checking the accounts on a Friday. Nobody enjoys it; the business needs it.' },
          { term: 'Actionable lesson',
            plain: 'A specific, testable change — not a mood.',
            like: '"Leave ten minutes earlier" rather than "stop being late".' }
        ],
        close: [
          "What goes in each entry:",
          "**The mechanics** — date, time, instrument, timeframe, direction, which setup, entry, stop, target, lot size, risk %, result in R. **The reasoning** — why you took it, what the higher timeframe was doing, what you expected. **The compliance column.** **Screenshots** at entry and exit. And **one line of lesson**.",
          "Make that last line specific. \"Be more patient\" is not a lesson, it's a mood. \"I entered before the M15 candle closed on three of five trades\" is a lesson — you can count it, and you can check next week whether it changed.",
          "**Then review weekly, and change one thing.** Not five.",
          "Ask: which setup performed best, and is any one worth dropping? Which session and which conditions suited me? And **which rule did I break most often?** That one becomes next week's single focus.",
          "**Change the plan only on evidence from at least 30 trades. Never after a single loss.**",
          "A journal that never gets analysed is a diary. Thirty minutes on a Friday is what makes the difference between trading for two years and improving for two years."
        ]
      },
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
      title: 'Discipline, robots, and what happens next',
      slides: [6, 7, 8, 9, 10],
      teach: {
        lead: [
          "Last lesson of the forex track. It's about the gap between knowing what to do and doing it.",
          "There are five ways people break, and you'll recognise at least one as yours:",
          "**Revenge trading** — trading to win back a loss. **FOMO** — jumping in because a move is happening, with no setup. **Cutting winners early** — taking 0.4R because it feels safe. **Letting losers run** — moving or deleting the stop. **Boredom trading** — trading because nothing is happening and you're restless.",
          "Now the important part, and it's not what most courses tell you.",
          "**Don't try to fix these with discipline.**",
          "Willpower is finite and it runs lowest exactly when the market is hardest — when you're tired, when you're down, when it matters. Relying on it is like trying to stop eating biscuits through sheer determination while keeping the tin on your desk.",
          "**You don't need more willpower. You need to not buy the biscuits.**"
        ],
        terms: [
          { term: 'Countermeasure',
            plain: 'A rule or physical obstacle that makes the wrong action harder, so willpower is not required.',
            like: 'Not keeping the biscuits in the house. Far more reliable than deciding not to eat them.' },
          { term: 'Expert Advisor (EA)',
            plain: 'A program that trades your rules automatically inside MetaTrader.',
            like: 'Cruise control. Excellent at holding a speed, useless at deciding where to go.' },
          { term: 'Prop firm',
            plain: 'A company that lets you trade their money for a share of profits, after you pass a paid evaluation.',
            like: 'An audition with an entry fee.' },
          { term: 'Regime change',
            plain: 'The market\'s character shifting — trending becomes ranging, quiet becomes volatile.',
            like: 'The weather turning. Your route was fine; the conditions are not.' }
        ],
        close: [
          "So build the countermeasures into the process, as **rules rather than intentions**:",
          "Revenge trading → **a hard daily stop, with the platform actually closed.** FOMO → **no entry without a written setup, no exceptions.** Cutting winners → **targets pre-set on entry, no discretionary exits.** Letting losers run → **stop set at entry and never touched.** Boredom → **a maximum number of trades per day.**",
          "Then reduce how many decisions you have to make at all. Pre-set stops and targets. Use pending orders. Set alerts instead of staring at screens. **Every decision is a chance to decide badly.**",
          "And trade smaller when life is hard. Bad sleep, stress and illness measurably degrade judgement, and pretending otherwise is not toughness.",
          "**Design a process that gives acceptable results on your worst day, not your best.**",
          "**On EAs, briefly.** They execute mechanical rules consistently and watch markets while you sleep. They cannot adapt when conditions change, and they absolutely cannot make a losing strategy profitable. Most sold to beginners are martingale or grid systems — you know what those equity curves look like and why. **Check first whether every position carries a stop loss.** And if you can't write the rules yourself, you don't understand them well enough to run them.",
          "**So — what happens after this course.**",
          "**Backtest honestly.** 100 trades, bar replay, costs in, out-of-sample checked. **Then forward test on demo** — at least 30 trades, plan unchanged, everything journaled. **Review weekly**, compare compliant against non-compliant, change one thing at a time.",
          "**Go live only when all three are true:** the forward test showed positive expectancy, you followed your rules more than 90% of the time, and you sat through the worst drawdown without breaking one.",
          "Then **start at the smallest size your broker allows** for another 30 trades. Not because you're not ready — because real money feels different from demo money, and you want to find that out cheaply.",
          "I'm not going to promise you profit, and you should be suspicious of anyone who does. What you have now is **a process, and the ability to tell whether it's working.** That's the thing almost nobody starting out has, and it's what the certificate at the end of this track actually certifies."
        ]
      },
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
