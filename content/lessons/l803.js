/* N1 Forex Academy — lessons for Module 803 (Automation track).

   VOICE: Jonathan talking to one student. This is the module where the whole
   track's argument pays off: the five components of module 11 map one-to-one
   onto functions, so a properly written plan is transcribed rather than
   invented. The log-only stage before placing real orders is the discipline
   that matters most here. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[803] = [
    {
      title: 'Five components, five functions',
      slides: [0, 1],
      teach: {
        lead: [
          "Back in module 11 I made you write every setup with **five parts**: filter, location, trigger, invalidation, management.",
          "**That structure wasn't arbitrary. It's the shape of an EA.**",
          "Here's the mapping, and it really is one-to-one:",
          "**Filter** → a function returning true or false. **Location** → a function returning true or false. **Trigger** → a function returning true or false. **Invalidation** → a function returning a price. **Management** → a function that runs while a position is open.",
          "That's it. That's the translation.",
          "**If you wrote a proper module 11 plan, this module is typing.** If you didn't, you already found out in 801 when the traffic-light exercise turned half your plan amber.",
          "One rule about how you write those three boolean functions, and it matters more than it looks: **keep each one separate, and don't let it do anything except answer its question.**"
        ],
        terms: [
          { term: 'Filter',
            plain: 'The conditions under which the setup is valid at all — session, bias, volatility, news.',
            like: 'Checking the shop is open before deciding what to buy.' },
          { term: 'Location',
            plain: 'Where on the chart you are looking — a level, a zone, a moving average.',
            like: 'Being in the right aisle.' },
          { term: 'Trigger',
            plain: 'The specific event that causes entry once filter and location are satisfied.',
            like: 'Actually reaching for the item.' },
          { term: 'Pure function',
            plain: 'A function that takes inputs and returns an answer, changing nothing else.',
            like: 'Asking someone a question rather than sending them on an errand.' }
        ],
        code: [
          { caption: 'Three questions, three functions, three yes-or-no answers',
            lines: [
              '// FILTER — is this setup valid at all right now?',
              'bool filterOk()',
              '{',
              '   double ema = iMA(_Symbol, PERIOD_H4, MaPeriod, 0, MODE_EMA, PRICE_CLOSE, 1);',
              '   double c   = iClose(_Symbol, PERIOD_H4, 1);',
              '   return(c > ema);                     // H4 uptrend only',
              '}',
              '',
              '// LOCATION — is price somewhere I care about?',
              'bool atLocation()',
              '{',
              '   double support = supportLevel(20);   // from module 801',
              '   double bid     = SymbolInfoDouble(_Symbol, SYMBOL_BID);',
              '   return(MathAbs(bid - support) < 20 * _Point);',
              '}',
              '',
              '// TRIGGER — has the thing I am waiting for actually happened?',
              'bool triggerFired()',
              '{',
              '   double o = iOpen(_Symbol, PERIOD_M15, 1);',
              '   double c = iClose(_Symbol, PERIOD_M15, 1);',
              '   return(c > o);                       // last M15 candle closed up',
              '}'
            ],
            note: 'Each answers **one** question and changes nothing. That is what makes them testable — and testability is the entire argument for splitting them up.' }
        ],
        close: [
          "Why separate functions, when you could write it all in one block inside `OnTick`?",
          "**Because when your EA doesn't trade, you need to know which part said no.**",
          "With three functions you print all three and look:",
          "*filter: true, location: true, trigger: false* — right, it's waiting for the candle. Fine.",
          "*filter: false* all day — ah, my H4 trend test is inverted.",
          "**With one 200-line block, you get nothing.** The EA is silent and you have no idea whether it's working perfectly and waiting, or broken and never going to fire.",
          "**Print each one while you're developing.** Every new bar, three values. It's the most useful ten minutes of work in this whole track.",
          "And resist one specific temptation: **don't open trades inside those functions.** The moment `triggerFired()` also places an order, you can't run it to see what it thinks — checking it and acting on it become the same thing.",
          "**One question, one function, one answer.**"
        ]
      },
      check: [
        { q: 'Why write each setup component as its own function rather than one block in OnTick?',
          options: ['It compiles faster', 'So each can be tested in isolation — when the EA does not trade, you can see which component said no', 'MQL requires it', 'It uses less memory'],
          a: 1,
          why: 'A 200-line OnTick cannot be debugged. Three small functions each printing their answer can be debugged in minutes, and that difference decides whether you ever find the fault.' },
        { q: 'Your EA compiles without errors. What has that proven?',
          options: ['That the logic is correct', 'That the grammar is correct — nothing about whether the functions do what you meant', 'That it will be profitable', 'That the parameters are optimal'],
          a: 1,
          why: 'A compiler checks syntax. A function can be perfectly formed and answer entirely the wrong question, which is why each gets printed and checked against the chart.' }
      ]
    },

    {
      title: 'The stop, the assembly, and the stage before trading',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Now invalidation, and there's a temptation here I want you to resist.",
          "The easy thing is an input: `StopPoints = 400`. It compiles, it works, and **it quietly throws away module 10.**",
          "**The stop goes where the idea is proven wrong.** That's a place on the chart. It moves when the chart moves, and it's different on a quiet Tuesday than during a news week — which is module 8's ATR lesson.",
          "**So `stopPrice()` should compute, not return a setting.**",
          "Below the zone. Beyond the swing low. A multiple of ATR. Whatever your plan actually said — but derived from something real.",
          "A fixed point distance is a fallback for when you genuinely have nothing better. **It is not a strategy**, and it makes the position sizing in the next module meaningless, because the size is supposed to fall out of the stop."
        ],
        terms: [
          { term: 'Invalidation',
            plain: 'The price at which the idea is proven wrong. It becomes the stop.',
            like: 'The point where you admit you took the wrong turning — decided before you set off.' },
          { term: 'Guard clause',
            plain: 'An early return that stops the rest of a function running when a condition fails.',
            like: 'Turning back at the door because you forgot your keys, rather than walking to the car first.' },
          { term: 'Signal',
            plain: 'Filter AND location AND trigger, all true at the same moment.',
            like: 'All three lights green at once.' }
        ],
        code: [
          { caption: 'Invalidation computed from structure, not from a setting',
            lines: [
              'double stopPrice()',
              '{',
              '   // Below the support we entered at, plus room for the sweep',
              '   // we learned to expect in module 7.',
              '   double support = supportLevel(20);',
              '   double atr     = iATR(_Symbol, PERIOD_H4, 14, 1);',
              '   return(support - (atr * 0.5));',
              '}'
            ],
            note: 'This moves with the market. A fixed 400 points does not — it is too wide in a quiet week and too tight in a violent one, and it is **the same number in both.**' },

          { caption: 'OnTick assembled. It should read like your written plan.',
            lines: [
              'void OnTick()',
              '{',
              '   if(!isNewBar()) return;              // guard 1',
              '',
              '   if(PositionsTotal() > 0)             // manage first, then look',
              '   {',
              '      manage();',
              '      return;                           // guard 2: no new entries while in',
              '   }',
              '',
              '   bool f = filterOk();',
              '   bool l = atLocation();',
              '   bool t = triggerFired();',
              '',
              '   Print("filter=", f, " location=", l, " trigger=", t);   // while developing',
              '',
              '   if(f && l && t)',
              '   {',
              '      double sl = stopPrice();',
              '      Print("SIGNAL. Would buy. Stop at ", sl);            // NOT an order. Yet.',
              '   }',
              '}'
            ],
            note: 'Hold your written plan beside that and read them together. **If they do not match line for line, one of the two is not saying what you think it says** — and it is usually the plan.' }
        ],
        close: [
          "Now the discipline that matters most in this module, and the one people skip.",
          "**Look at that last line. It prints. It does not trade.**",
          "**Run your EA in log-only mode for a full session before it places a single order.**",
          "Every time all three conditions align, it writes a line saying what it *would* have done. At the end of the session you have a list of signals — and you go through them one by one and ask: **would I actually have taken that?**",
          "**The signals almost always surprise you.** It fires on things you'd have skipped. It stays silent through setups you'd have taken. And every one of those disagreements is worth understanding **before** money is involved.",
          "And when you find one, there are only two possible explanations, so name which:",
          "**Either the code is wrong** — you transcribed something incorrectly, and you fix the function.",
          "**Or the plan was vaguer than you thought** — the code did exactly what you wrote, and what you wrote wasn't what you meant.",
          "**The second one is more common, and far more valuable.** It's module 11's handover test happening for real, with a reviewer that cannot be polite about it.",
          "Only once the log matches your judgement do you replace that `Print` with an actual order. And by then you'll know precisely what you're switching on."
        ]
      },
      check: [
        { q: 'Your stopPrice() function returns a fixed number of points from entry. What is wrong with that?',
          options: ['Nothing — fixed stops are consistent', 'It ignores where the idea is actually proven wrong, and ignores volatility — modules 8 and 10 both say the stop comes from the chart', 'Fixed stops are not allowed in MQL', 'It will not compile'],
          a: 1,
          why: 'A fixed distance is too wide in a quiet week and too tight in a violent one, and it is the same number in both. It also makes position sizing meaningless, since size is supposed to fall out of the stop.' },
        { q: 'Your log-only EA fires on a setup you would personally have skipped. What are the two possible explanations?',
          options: ['The market was wrong, or the broker lagged', 'Either the code is wrong, or the plan was vaguer than you thought — and the second is more common', 'The EA needs optimising', 'The timeframe is wrong'],
          a: 1,
          why: 'The code did exactly what you wrote. When that differs from what you meant, you have found a gap the plan hid — module 11\'s handover test, with a reviewer who cannot be polite about it.' }
      ]
    }
  ];
})();
