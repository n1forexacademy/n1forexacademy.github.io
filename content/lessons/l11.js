/* N1 Forex Academy — lessons for Module 11.

   VOICE: Jonathan talking to one student. The recipe analogy runs through the
   whole module: a setup written well enough that someone else could cook from
   it. The handover test is the payoff, and the overfitting section has to make
   "reason versus evidence" concrete or it will not stick. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[11] = [
    {
      title: 'Choosing an approach that fits you',
      slides: [0, 1],
      teach: {
        lead: [
          "Everything so far has been components. This module bolts them together into something you could hand to another person.",
          "Start with the four broad approaches. There are only four worth knowing, and each one is simply a different bet about what the market is about to do.",
          "**Trend following.** Buy the dips in an uptrend. You'll be wrong a lot — six losses in a row is a normal Tuesday — but your winners are big. Needs a market that's actually trending, and patience while it isn't.",
          "**Mean reversion.** Price has stretched too far, so you bet on it snapping back. You win often and win small, and every so often the range breaks and hands you a nasty one.",
          "**Breakout.** Get in as price leaves a range. Lots of false starts, and occasionally an enormous run that pays for all of them.",
          "**Momentum continuation.** Join a move that's already going, in its strongest part. Needs sharp timing and a hard exit rule.",
          "Here's the thing worth noticing: **each of these fails precisely in the conditions where another one works.** That's not a flaw. It means most of the job is matching the approach to what's actually in front of you."
        ],
        terms: [
          { term: 'Setup',
            plain: 'A specific chart situation you have decided in advance that you will trade.',
            like: 'A dish you know how to cook. You are not inventing dinner at the stove.' },
          { term: 'Filter',
            plain: 'A condition that must be true before a setup counts at all — session, trend, volatility, news.',
            like: 'Checking you have the ingredients before starting.' },
          { term: 'Trigger',
            plain: 'The precise event that puts you in, once the setup is there.',
            like: 'The timer going off. Not "when it looks about ready".' },
          { term: 'Trend following',
            plain: 'Entering with the prevailing direction, usually on a pullback.',
            like: 'Swimming with the current and waiting for a lull to get in.' },
          { term: 'Mean reversion',
            plain: 'Betting that a stretched price comes back toward the middle.',
            like: 'A stretched elastic band. Usually snaps back — until the day it snaps.' }
        ],
        close: [
          "Now pick one, and pick it around **your actual life** rather than around which sounds most impressive.",
          "**When can you genuinely look at charts?** That decides your session, and your session largely decides your approach. You did this work in module 5.",
          "**How often do you want to trade?** Higher timeframes mean fewer trades, bigger and slower. If you need action, you'll break a daily-chart plan out of boredom.",
          "**How do you handle losing streaks?** Be honest. Trend following will hand you six losses in a row routinely, and if that makes you abandon the plan on loss five, trend following isn't for you regardless of how good it looks on paper.",
          "**How much do costs bite?** Scalping only works with very low costs and good execution. On a retail account with a 1.6-pip spread it's arithmetic you cannot win.",
          "And the sentence to remember:",
          "**A brilliant strategy you can't actually execute is worth less than an ordinary one you can.**",
          "Most \"my strategy stopped working\" stories are really a mismatch between the approach and the person's timetable. It's a gym routine that requires 6am starts, chosen by someone who doesn't get up at 6am."
        ]
      },
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
      title: 'The five things every setup must say',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "A setup is a recipe. And a recipe that says \"cook until it looks right\" isn't a recipe — it's a memory, and only the person who already knows can use it.",
          "**Every setup you write needs five parts.**",
          "**1. Filter.** When is this setup even valid? Which session, which higher-timeframe direction, what volatility, what news conditions.",
          "**2. Location.** Where on the chart are you looking? A marked zone, a structural level, a moving average.",
          "**3. Trigger.** What exact event puts you in? A candle closing, a level breaking, a rejection printing.",
          "**4. Invalidation.** Where does the stop go, described structurally — not as a pip count.",
          "**5. Target and management.** Where do you get out, and what are you allowed to do in between?",
          "**Write all five.** A setup missing any one of them can't be tested, and can't be followed when you're under pressure — which is the only time it matters."
        ],
        terms: [
          { term: 'Invalidation',
            plain: 'The point at which your reason for the trade is proven wrong.',
            like: 'The moment you accept you took the wrong turning, decided before you set off.' },
          { term: 'Trade management',
            plain: 'What you are allowed to do after entry — move to break-even, take partials, trail the stop.',
            like: 'Whether you are allowed to open the oven door, and when.' },
          { term: 'Break-even stop',
            plain: 'Moving your stop to your entry price so the trade can no longer lose.',
            like: 'Getting your stake back off the table. Comforting — and it can also end the trade early.' },
          { term: 'Partial exit',
            plain: 'Closing some of the position at a first target and letting the rest run.',
            like: 'Banking half your winnings. Smoother ride, smaller peak.' }
        ],
        close: [
          "Here's one written out properly, so you can see the level of detail I mean.",
          "**Setup: trend pullback.**",
          "**Filter** — H4 in an uptrend (higher highs and higher lows). London or overlap session only. No high-impact news within 30 minutes.",
          "**Location** — price pulls back into a marked H4 demand zone that also sits on a prior swing high, so it's a role reversal.",
          "**Trigger** — on M15, a bullish engulfing candle that closes above the zone high.",
          "**Invalidation** — stop below the zone low, plus the sweep distance you measured for that instrument.",
          "**Target** — the prior swing high. If that's less than 1.5R away, skip it.",
          "**Management** — move the stop to break-even at 1R. Nothing else. No improvising.",
          "Notice there's nothing clever in there. Every line is something you learned in an earlier module, now written down in a form you could hand to somebody else.",
          "**That's what a strategy is.** Not a secret. A set of decisions you made while calm, so you don't have to make them while nervous."
        ]
      },
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
      title: 'Could someone else follow it?',
      slides: [5, 6],
      teach: {
        lead: [
          "Here's the test that finds every weak spot in a plan, and it takes ten minutes.",
          "**Give your written plan to someone else. Ask them to mark up a chart with it. Then compare against what you'd have done.**",
          "Every place you disagree is a place your plan is vague. And you cannot find these on your own, because when *you* read your own plan you automatically fill the gaps with what you meant. Someone else reads what you actually wrote.",
          "It's the difference between \"turn at the big tree\" and \"turn left after the petrol station\". You know which tree. Nobody else does.",
          "Compare these:",
          "**Vague:** \"Enter when the trend looks strong.\" **Specific:** \"Enter when price closes above the 50 EMA on H4 with a body larger than the previous three candles.\"",
          "**Vague:** \"Exit when it looks like it's reversing.\" **Specific:** \"Exit at the prior swing high, or on an M15 close below the entry candle's low.\"",
          "**A rule that can't be tested isn't a rule. It's a hope with a rule's grammar.**"
        ],
        terms: [
          { term: 'Handover test',
            plain: 'Giving your plan to someone else and seeing whether they trade it the way you would.',
            like: 'Handing your recipe to a friend. Whatever they get wrong is what you left out.' },
          { term: 'Trailing stop',
            plain: 'A stop that follows price as the trade goes your way.',
            like: 'A dog on a lead of fixed length. Too short and you are dragging it back constantly.' },
          { term: 'Variance',
            plain: 'How bumpy your results are, trade to trade.',
            like: 'A smoother road, but not necessarily a shorter journey.' }
        ],
        close: [
          "Be clear about what the handover test does and doesn't prove. It tells you your plan is **unambiguous**. It says **absolutely nothing** about whether it makes money — that's the next module.",
          "One more thing, on trade management, and it surprises most people:",
          "**Doing less is usually better.**",
          "**Break-even stops** protect you, but move one too early and you turn a winner into nothing. Move at 1R, not at 0.3R.",
          "**Partial exits** feel prudent, and they do smooth the ride — but they also **reduce your expectancy**, because you've capped the big winners while doing nothing about the losers. That's a genuine trade-off, and it's a choice, not free.",
          "**Trailing stops** catch extended moves, but trail too tight and you've just built an early exit with extra steps.",
          "The rule: **every management action must be written before you enter.** Deciding to take a partial mid-trade isn't management, it's nerves with a respectable name.",
          "And test with and without. Most beginners' management rules **reduce** their results, and the only way anyone finds that out is by measuring it."
        ]
      },
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
      title: 'Why fewer rules last longer',
      slides: [7, 8, 9],
      teach: {
        lead: [
          "There's a failure that feels exactly like getting better at this, and I want you to be able to recognise it.",
          "You test your plan. Results are decent. You notice it would have done better without a couple of losers, so you add a rule that excludes them. Test again — better. Repeat.",
          "After a month you have fifteen conditions, a historical record that looks magnificent, and **a strategy that will fall apart the moment it meets a week it hasn't seen.**",
          "That's **overfitting**, and it's the trading version of memorising the answers to last year's exam paper. Perfect score on that paper. Useless on this year's.",
          "**Every rule you add fits the data you've seen slightly better, and the data you haven't seen slightly worse.**",
          "Here's the symptom to watch for: **rules that exist only to exclude specific past losses.** \"Don't trade on Tuesdays\" is overfitting with a calendar attached."
        ],
        terms: [
          { term: 'Overfitting',
            plain: 'Adding rules until the past fits perfectly, at the cost of working on anything new.',
            like: 'Memorising last year\'s exam answers. Flawless on that paper, no use on this one.' },
          { term: 'Mechanism',
            plain: 'An actual reason something should work, beyond the fact that it did in your sample.',
            like: 'Knowing why the medicine works, not just that one patient got better.' },
          { term: 'Sample',
            plain: 'The set of trades you are judging from. Small samples lie confidently.',
            like: 'Judging a restaurant on one visit.' }
        ],
        close: [
          "The test that separates a real rule from a fitted one is short: **does this rule have a reason, or does it only have evidence?**",
          "\"Don't hold through rollover\" has a **reason** — spreads widen, you saw why in module 5. You'd expect it to keep being true next year.",
          "\"Don't trade Tuesdays\" has only **evidence** — a number in a backtest. There's no mechanism, so on a limited sample it's almost certainly coincidence, and it will stop being true the moment you rely on it.",
          "**Aim for five to eight rules across the whole setup.** If your plan doesn't fit on one page, you won't read it, and a plan you don't read isn't doing anything.",
          "Which is also why you **lock the plan for a set number of trades before changing anything.** A plan that gets modified after every loss produces no usable information about *any* version of it — you end up with a blend of six different systems and data on none of them.",
          "Here's what the finished document holds: **the instruments** you trade and why. **The timeframes** for direction, location and timing. **Your trading window** from module 5. **Your setups**, each with all five parts. **Your risk policy** from module 10, in full. **Your news policy** from module 9. And **your review process** — when you review, what you measure, and what evidence would make you change the plan.",
          "**One or two pages.** That's a strategy. Next module is finding out whether it actually works."
        ]
      },
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
