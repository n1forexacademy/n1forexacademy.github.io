/* N1 Forex Academy — lessons for Module 802 (Automation track).

   VOICE: Jonathan talking to one student. Keep the language surface deliberately
   small — the relief of "you need about fifteen things" is what stops this
   feeling like a computing course. The OnTick frequency lesson and the two
   guards prevent most first-EA disasters and deserve the space they get. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[802] = [
    {
      title: 'Three functions, three moments',
      slides: [0, 1],
      teach: {
        lead: [
          "MQL is a big language. **You need a small corner of it**, and I'd rather hand you the corner than a textbook.",
          "An EA has **three functions**, and they run at three different moments.",
          "**`OnInit()`** runs **once**, when you attach the EA or restart the terminal. This is where you check the settings make sense and refuse to start if they don't.",
          "**`OnTick()`** runs **every time the price updates**. This is the whole EA. Everything else is support.",
          "**`OnDeinit()`** runs **once**, when the EA is removed. Tidy up anything you drew.",
          "That's the skeleton, and here's something worth knowing before you write any rules: **an EA with those three functions and nothing inside them compiles and runs perfectly.**",
          "**Start there.** Attach an empty one and watch it initialise. When something later doesn't work, you'll already know the plumbing is fine and the problem is your logic."
        ],
        terms: [
          { term: 'OnInit()',
            plain: 'Runs once when the EA starts. Validate settings here.',
            like: 'Checking you have the keys before you leave the house.' },
          { term: 'OnTick()',
            plain: 'Runs on every price update. The main loop.',
            like: 'A heartbeat. Everything you do hangs off it.' },
          { term: 'OnDeinit()',
            plain: 'Runs once when the EA is removed. Clean up here.',
            like: 'Turning the lights off on the way out.' },
          { term: 'Experts tab',
            plain: 'Where MetaTrader shows what your EA said and did.',
            like: 'The employee\'s notebook. Read it constantly.' }
        ],
        code: [
          { caption: 'The entire skeleton. This compiles and runs.',
            lines: [
              'int OnInit()',
              '{',
              '   Print("EA started on ", _Symbol);',
              '   return(INIT_SUCCEEDED);',
              '}',
              '',
              'void OnTick()',
              '{',
              '   // everything happens here',
              '}',
              '',
              'void OnDeinit(const int reason)',
              '{',
              '   Comment("");        // clear anything left on the chart',
              '}'
            ],
            note: 'Compile that, attach it, enable AutoTrading, and check the Experts tab says it started. **Do this before writing a single rule.**' }
        ],
        close: [
          "Now the thing that catches absolutely everyone, and it's about that middle function.",
          "**`OnTick()` runs far more often than you think.**",
          "Not once a bar. Not once a minute. **Every single price update** — which in an active market is many times a second.",
          "So think about what happens if you write the obvious thing:",
          "*\"If price is above the moving average, buy.\"*",
          "**That doesn't buy once.** Price is above the moving average on this tick, so it buys. Still above on the next tick, so it buys again. And again. **In a minute you have forty positions**, and you didn't write a bad strategy — you wrote a correct rule with no guard on it.",
          "**Two guards prevent almost every version of this disaster**, and they're about three lines each.",
          "**Only act once per bar**, and **check whether you already have a position open.**",
          "I want to be blunt about how much of the damage this accounts for: **most beginner EA catastrophes are one missing guard, not a flawed idea.** The strategy was fine. Nobody told the employee to stop."
        ]
      },
      check: [
        { q: 'How often does OnTick() run?',
          options: ['Once per bar', 'On every price update — potentially many times a second', 'Once per minute', 'Only when you have an open position'],
          a: 1,
          why: 'This shapes everything you write. A rule with no guard does not act once; it acts on every tick, which is how a first EA opens forty positions in a minute.' },
        { q: 'Your EA opens a position every tick while the condition holds. The fix is:',
          options: ['Slow the computer down', 'Guards — act only once per new bar, and check whether a position is already open', 'Use a higher timeframe chart', 'Reduce the lot size'],
          a: 1,
          why: 'Most beginner EA disasters are one missing guard rather than a flawed strategy. The strategy was fine — nobody told the employee to stop.' }
      ]
    },

    {
      title: 'Guards, inputs, and the corner you need',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Let's build the two guards, because they'll appear in everything you write from here.",
          "**The new-bar guard** works by remembering the time of the last bar you acted on. If the current bar's time is the same, you've already been here — do nothing.",
          "**The open-position guard** is simpler still: before opening anything, look at whether you already have one.",
          "Together they turn *\"buy whenever the condition is true\"* into *\"buy once, on the bar where the condition became true, if I'm not already in.\"*",
          "**That second sentence is what you actually meant.** The first is what you wrote."
        ],
        terms: [
          { term: 'input',
            plain: 'A variable the user can set in the EA\'s settings dialogue without touching code.',
            like: 'A dial on the outside of the machine, rather than a soldered wire inside it.' },
          { term: '_Symbol',
            plain: 'The instrument the EA is attached to. Never hard-code a symbol name.',
            like: 'Saying "this room" rather than naming one specific room.' },
          { term: '_Point',
            plain: 'The smallest price increment for this symbol.',
            like: 'The size of one notch on this particular ruler. Different rulers, different notches.' },
          { term: 'Print() / Comment()',
            plain: 'Write to the log, or to the chart corner. Your only real debugging tools.',
            like: 'Getting the employee to say out loud what they are doing.' }
        ],
        code: [
          { caption: 'The two guards. Learn these; you will use them every time.',
            lines: [
              'datetime lastBarTime = 0;',
              '',
              'bool isNewBar()',
              '{',
              '   datetime t = iTime(_Symbol, PERIOD_CURRENT, 0);',
              '   if(t == lastBarTime) return(false);   // same bar, already handled',
              '   lastBarTime = t;',
              '   return(true);',
              '}',
              '',
              'void OnTick()',
              '{',
              '   if(!isNewBar()) return;               // guard 1: once per bar',
              '   if(PositionsTotal() > 0) return;      // guard 2: not already in',
              '',
              '   // ... your actual rule goes here, and now it runs once ...',
              '}'
            ],
            note: 'Six lines of guard around your logic. **Without them, the same idea opens a position on every tick** — which is not a strategy problem, it is a missing full stop.' },

          { caption: 'Inputs — settings that live in a dialogue, not in the code',
            lines: [
              'input double RiskPercent = 1.0;    // % of account risked per trade',
              'input int    StopPoints  = 400;    // stop distance in points',
              'input int    MaPeriod    = 50;     // moving average length',
              '',
              'int OnInit()',
              '{',
              '   // Refuse to start on nonsense. An EA told to risk 50% will do it.',
              '   if(RiskPercent <= 0 || RiskPercent > 3)',
              '   {',
              '      Print("RiskPercent must be between 0 and 3. Refusing to start.");',
              '      return(INIT_PARAMETERS_INCORRECT);',
              '   }',
              '   return(INIT_SUCCEEDED);',
              '}'
            ],
            note: 'That validation is your risk policy from module 10, **enforced by the machine instead of by your willpower** — which is exactly what module 12 said countermeasures should be.' }
        ],
        close: [
          "Two things about `input` that matter more than convenience.",
          "**First: the strategy tester can only vary inputs.** A number typed directly into your code cannot be changed by the tester — which means you **cannot run the robustness check** from module 11. Remember: nudge a parameter by 20% each way, and if results collapse it was curve-fitted. **A hard-coded value quietly prevents the single most important test you can run.**",
          "**Second: validate them.** An EA told to risk 50% per trade will risk 50% per trade, cheerfully, forever. Refusing to start is your risk policy enforced by something that can't be talked round at 11pm.",
          "Now, the corner of MQL you actually need. **This is the whole list.**",
          "**Types:** `int`, `double`, `bool`, `string`, `datetime`. **Control:** `if`, `else`, `return`, the occasional loop.",
          "**Symbol facts:** `_Symbol`, `_Point`, `_Digits` — never hard-code the instrument or the tick size, or your EA works on exactly one chart.",
          "**Prices:** `SymbolInfoDouble()` for the current bid and ask, `iClose` / `iHigh` / `iLow` for history.",
          "**And output:** `Print()` to the log, `Comment()` to the chart corner.",
          "**Those two are your entire debugger.** There's no breakpoint, no inspector. When an EA does something strange, you make it tell you what it thinks is happening — and nine times out of ten the answer is obvious the moment it says it out loud.",
          "**That's the corner.** Everything else can be looked up when you actually need it, which will be less often than you expect."
        ]
      },
      check: [
        { q: 'Why put settings in `input` variables rather than hard-coding them?',
          options: ['It runs faster', 'They can be changed without recompiling, and the strategy tester can only vary inputs — so hard-coded values cannot be robustness-checked', 'MQL requires it', 'It reduces file size'],
          a: 1,
          why: 'The robustness test from module 11 — nudge a parameter 20% and see whether results collapse — is impossible on a hard-coded number. That is the real cost, well beyond convenience.' },
        { q: 'Which function should refuse to let the EA start on nonsense settings?',
          options: ['OnTick()', 'OnInit()', 'OnDeinit()', 'Any of them'],
          a: 1,
          why: 'OnInit runs once at startup and can return a failure code. An EA told to risk 50% per trade will do exactly that, forever, without complaint.' }
      ]
    }
  ];
})();
