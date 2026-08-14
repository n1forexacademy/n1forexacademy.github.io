/* N1 Forex Academy — lessons for Module 801 (Automation track).

   VOICE: Jonathan talking to one student. The framing has to land before any
   code appears: an EA is an execution engine, so automation multiplies whatever
   you already had and manufactures nothing. The traffic-light idea is the most
   useful thing here even for a student who never writes a line of MQL. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[801] = [
    {
      title: 'It carries out decisions, it does not make them',
      slides: [0, 1],
      teach: {
        lead: [
          "Ninth track, and the last one. You've spent module 11 writing a plan and module 12 testing it. **Now you're going to teach a computer to run it.**",
          "Before anything else, one correction — because almost everyone arrives with the wrong idea of what this is.",
          "**An EA does not find trades.**",
          "It is a program that sits inside MetaTrader and can place, modify and close orders without you. But **every decision it makes is one you already made**, in advance, in writing.",
          "Think of it as hiring the most literal employee imaginable. It never gets bored, never gets frightened, never decides to skip one. It also has **no judgement whatsoever** — it will do exactly what you wrote down, including the parts you got wrong, at three in the morning, forever.",
          "**The honest description is an execution engine.**",
          "Everything in this track depends on you accepting that, so let me put the consequence plainly."
        ],
        terms: [
          { term: 'Expert Advisor (EA)',
            plain: 'A program running inside MetaTrader that can place, modify and close orders automatically.',
            like: 'An extremely literal employee. Tireless, obedient, and with no judgement at all.' },
          { term: 'MQL',
            plain: 'The language EAs are written in. MQL4 for MT4, MQL5 for MT5.',
            like: 'The language you write the employee\'s instructions in.' },
          { term: 'Execution engine',
            plain: 'Something that carries out decisions already made, rather than making them.',
            like: 'A dishwasher. It does not decide what needs washing.' },
          { term: 'Tick',
            plain: 'One price update. The EA\'s main function runs once per tick.',
            like: 'A heartbeat. Everything else hangs off it.' }
        ],
        close: [
          "**Automation multiplies whatever you already had. It manufactures nothing.**",
          "**A plan with a small edge, automated, repeats that small edge** — reliably, at 3am, without hesitating, without deciding this one feels wrong. That's genuinely valuable.",
          "**A plan with no edge, automated, loses money faster than you ever could by hand.** Not differently. Faster.",
          "Be precise about what you're actually buying. Automation improves **consistency**, **speed** and **availability**. That's the complete list.",
          "**It cannot make a bad entry good.** It cannot make an unsized position safe. **It cannot supply an edge that was never there.**",
          "So there's an honest prerequisite for this whole track, and I'd rather say it now than after you've spent three weeks coding:",
          "**If your plan isn't producing acceptable results manually, coding it changes only the rate at which you find out.**",
          "That's module 12's forward test — 30 trades, plan unchanged, journaled. **If you haven't done it, this track is premature**, and the most useful thing you could do today is go and do that instead."
        ]
      },
      check: [
        { q: 'An EA is best described as:',
          options: ['A program that finds profitable trades', 'An execution engine that carries out decisions you already made in writing', 'A way to remove risk from trading', 'A replacement for a trading plan'],
          a: 1,
          why: 'Every decision it makes is one you made in advance. It does not find opportunities — it applies a test you defined to data as it arrives.' },
        { q: 'You automate a plan that loses money manually. What happens?',
          options: ['It becomes profitable, because emotion is removed', 'It loses money faster and more consistently', 'Results become unpredictable', 'The EA refuses to trade'],
          a: 1,
          why: 'Automation improves consistency, speed and availability, and supplies no edge. A plan with none, repeated reliably, produces losses reliably.' }
      ]
    },

    {
      title: 'Which of your rules are actually rules',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Here's the exercise that makes this module worth doing **even if you never write a line of MQL.**",
          "Go through your plan and mark every instruction with a colour.",
          "**GREEN** — a computer could evaluate this with no interpretation at all. *\"Price closed above the 50 EMA on H4.\"* True or false, no argument.",
          "**AMBER** — definable, but you'd have to decide exactly what you mean. *\"Price is at a support level.\"* Which level? Defined how? It's codeable once you answer that, and **you have to answer it.**",
          "**RED** — requires judgement. *\"The chart looks strong.\"* *\"I don't like this one.\"*",
          "Now here's the thing about the red lines, and it's the whole point:",
          "**A red line is a finding, not a failure. It tells you exactly which part of your plan was never actually a rule.**",
          "You've had that plan reviewed. Module 11 had you hand it to another person. **But a human reader fills gaps automatically** — they read \"enter at support\" and quietly supply a meaning, because that's what people do.",
          "**A compiler does not.** It is the most honest reviewer your plan will ever get."
        ],
        terms: [
          { term: 'Magic number',
            plain: 'An identifier stamped on every order the EA places, so it can tell its trades from yours.',
            like: 'Labelling your lunch in a shared fridge.' },
          { term: 'Semi-automation',
            plain: 'The EA watches and alerts you; you make the decision.',
            like: 'A smoke alarm rather than a sprinkler. Often the right answer.' },
          { term: 'Optimisation',
            plain: 'Automatically trying many parameter combinations to find the best historical result.',
            like: 'Trying every key in the lock. You will get in, and you have learned nothing about locks.' }
        ],
        code: [
          { caption: 'Green — a computer can evaluate this with no interpretation',
            lines: [
              'bool trendIsUp()',
              '{',
              '   double ema = iMA(_Symbol, PERIOD_H4, 50, 0, MODE_EMA, PRICE_CLOSE, 1);',
              '   double closePrice = iClose(_Symbol, PERIOD_H4, 1);',
              '   return (closePrice > ema);',
              '}'
            ],
            note: 'Six lines, no ambiguity. Two people reading this get the same answer every time — which is exactly what module 11 said a rule had to be.' },

          { caption: 'Amber — codeable, but only once YOU decide what it means',
            lines: [
              '// "Enter at support." Support defined how?',
              '//   the lowest low of the last N bars?',
              '//   a level touched at least twice?',
              '//   a round number?',
              '// The plan never said. You must choose, and the choice is now the rule.',
              '',
              'double supportLevel(int lookback)',
              '{',
              '   int idx = iLowest(_Symbol, PERIOD_H4, MODE_LOW, lookback, 1);',
              '   return iLow(_Symbol, PERIOD_H4, idx);',
              '}'
            ],
            note: 'Notice what happened: writing this **forced a decision your plan had been quietly avoiding.** That decision was always being made — previously by your mood, on the day.' }
        ],
        close: [
          "One last thing, and it's the argument for writing your own rather than buying one.",
          "You met this in module 12: **an EA with a smooth rising equity curve and almost no drawdown is not showing you skill.** It's showing you a system that **doesn't realise losses** — martingale or grid, which produce exactly that shape until the sequence that ends them.",
          "**The first thing to check on any EA is whether every position carries a stop.** No stop means unlimited risk behind a beautiful chart.",
          "But here's the deeper problem with buying one: **if you can't read the code, you can't know what it does.** You're trusting a seller's description of their own product, and their backtest is a marketing document.",
          "**Learning to read MQL means you can inspect any EA you're ever offered.** That alone is worth this track, even if you never write one from scratch.",
          "So before module 802, do the traffic-light exercise on your own plan properly. **The red and amber lines are the syllabus for everything that follows** — they're the decisions you've been making unconsciously, and this is where you finally have to name them."
        ]
      },
      check: [
        { q: 'A line in your plan says "enter when the trend looks strong". In an EA this is:',
          options: ['Easily coded with an indicator', 'Not yet a rule — the attempt to code it exposes vagueness a human reader would have filled in automatically', 'Best left to the EA\'s discretion', 'Handled by the optimiser'],
          a: 1,
          why: 'A person reads that sentence and quietly supplies a meaning; a compiler cannot. It is module 11\'s specificity test, finally enforced by something that does not do you the favour of guessing.' },
        { q: 'An EA\'s advertised equity curve rises smoothly with almost no drawdown. Check first:',
          options: ['How many trades per day it makes', 'Whether every position carries a stop loss — martingale and grid produce exactly that shape until the sequence that ends them', 'Which broker it was tested on', 'How many parameters it has'],
          a: 1,
          why: 'A suspiciously smooth curve is the signature of a system that never realises losses. Module 10\'s return shape, wearing yet another costume.' }
      ]
    }
  ];
})();
