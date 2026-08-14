/* N1 Forex Academy — lessons for Module 806 (Automation track).

   VOICE: Jonathan talking to one student. This is currently the FINAL lesson of
   the entire programme — nine tracks — so the second half closes it.

   IF A TRACK IS EVER ADDED AFTER THIS ONE: narrow the closing section and move
   the summing-up to the new last lesson. This has already happened TWICE —
   l505.js when crypto was last, l704.js when spread betting was — and both
   times the module deck (m704.js) was missed on the first pass. Narrow the
   lesson AND its module together. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[806] = [
    {
      title: 'The failures that only exist live',
      slides: [0, 1, 2, 3],
      teach: {
        lead: [
          "Your EA passed an honest backtest. **That tells you the rules had an edge on historical data.** It tells you nothing at all about what happens when it's connected to a live account, because a backtest is a very clean place.",
          "**There are no disconnections in a backtest.** No restarts. No requotes. No broker maintenance windows, no Windows updates, no power cuts, no expired demo accounts.",
          "**Every one of those happens eventually.**",
          "Let me give you the one that surprises people most, because it's silent and it breaks something you already built.",
          "**A terminal restart runs `OnInit()` again.**",
          "Remember the new-bar guard from module 802? It works by storing the last bar's time in a variable. **A restart wipes that variable.**",
          "So the EA comes back, sees a bar it has already acted on, thinks it's new — **and acts again.** No error, no warning. It just quietly does the thing twice.",
          "That's not a bug in your strategy. It's a bug in your assumption that the program runs forever without interruption."
        ],
        terms: [
          { term: 'Silent failure',
            plain: 'The EA stops working with no error at all. The most common live problem.',
            like: 'A smoke alarm with a flat battery. Looks identical to one that is working.' },
          { term: 'Heartbeat',
            plain: 'A regular log line proving the EA is alive and still evaluating.',
            like: 'A night watchman phoning in every hour. Silence means something.' },
          { term: 'Requote / rejection',
            plain: 'The broker refusing your order. The trade you think you placed did not happen.',
            like: 'A card declined at the till while you walk out assuming you paid.' },
          { term: 'Magic number',
            plain: 'An identifier on each order so the EA manages only its own trades.',
            like: 'Labelling your lunch in a shared fridge.' },
          { term: 'Reconciliation',
            plain: 'Comparing the EA\'s idea of open positions against the broker\'s.',
            like: 'Counting the till against the receipts.' }
        ],
        code: [
          { caption: 'Write the failure path FIRST. It is where accounts are actually lost.',
            lines: [
              'bool placeBuy(double lots, double sl)',
              '{',
              '   MqlTradeRequest req = {};',
              '   MqlTradeResult  res = {};',
              '',
              '   req.action    = TRADE_ACTION_DEAL;',
              '   req.symbol    = _Symbol;',
              '   req.volume    = lots;',
              '   req.type      = ORDER_TYPE_BUY;',
              '   req.sl        = sl;',
              '   req.magic     = MagicNumber;      // only touch our own trades',
              '   req.deviation = 20;',
              '',
              '   if(!OrderSend(req, res))',
              '   {',
              '      Print("ORDER FAILED. retcode=", res.retcode, " ", res.comment);',
              '      return(false);                  // caller must know it did not happen',
              '   }',
              '',
              '   if(res.retcode != TRADE_RETCODE_DONE)',
              '   {',
              '      Print("ORDER NOT FILLED. retcode=", res.retcode);',
              '      return(false);',
              '   }',
              '',
              '   Print("Bought ", lots, " sl=", sl, " ticket=", res.order);',
              '   return(true);',
              '}'
            ],
            note: 'Two separate checks, because `OrderSend` returning true is **not** the same as the order being filled. **A silent rejection is a position you believe you have and do not.**' },

          { caption: 'A heartbeat. Three lines that make silent death visible.',
            lines: [
              'datetime lastBeat = 0;',
              '',
              'void heartbeat()',
              '{',
              '   if(TimeCurrent() - lastBeat < 3600) return;    // hourly',
              '   lastBeat = TimeCurrent();',
              '   Print("ALIVE. filter=", filterOk(),',
              '         " positions=", PositionsTotal(),',
              '         " equity=", AccountInfoDouble(ACCOUNT_EQUITY));',
              '}'
            ],
            note: 'Without this, **a dead EA and an EA with no signals look exactly the same** — and they can look the same for weeks while you assume it is patiently waiting.' }
        ],
        close: [
          "So three habits, and they're all cheap.",
          "**Check the result of every order.** `OrderSend` returning doesn't mean the order exists. Check it, log the failure, and make sure the calling code knows.",
          "**Add the heartbeat.** One line an hour containing *state* — not just a timestamp, but what the EA currently thinks. Then silence means something, and so does a heartbeat saying something wrong.",
          "**Reconcile.** Every so often, compare what your EA believes it holds against what the broker reports. When those diverge you want to find it while it's small.",
          "And use a **magic number** on every order, so your EA manages only its own trades and never reaches for a position you opened by hand.",
          "**Then define your kill switch — in advance, in writing.**",
          "What drawdown makes you stop it? How many consecutive losses? What behaviour would make you pull it even if it were profitable?",
          "**Put what you can in code** — the daily stop from module 804 is one form of kill switch. And keep a manual one: **know exactly how you stop it, and have done it once deliberately** so you're not learning the sequence while something is going wrong.",
          "**Restarting after a stop needs a reason.** Not the passage of time, and not the feeling that it's probably fine now."
        ]
      },
      check: [
        { q: 'Which failure can a backtest never produce?',
          options: ['A losing streak', 'A terminal restart wiping the EA\'s memory of which bar it last acted on', 'A large drawdown', 'A period of no signals'],
          a: 1,
          why: 'Restarts, disconnections, requotes and broker changes are all live-only. The restart is the sneakiest because it silently breaks the new-bar guard from module 802 — the EA acts twice with no error.' },
        { q: 'Why does a running EA need a heartbeat log?',
          options: ['To measure performance', 'Because a dead EA and an EA with no signals look identical, potentially for weeks', 'Brokers require it', 'To satisfy the strategy tester'],
          a: 1,
          why: 'Silent failure is the most common live problem. A heartbeat converts it from invisible into obvious, and it takes about three lines.' }
      ]
    },

    {
      title: 'Automate, semi-automate, or neither — and the end',
      slides: [4, 5],
      teach: {
        lead: [
          "Before the close, the honest recommendation — and it isn't the one this track has been building towards.",
          "**Full automation** suits a genuinely mechanical strategy, honestly tested, on an account you can afford to leave running unattended. That's a narrow set of conditions and it's worth being strict about all three.",
          "**Semi-automation suits almost everybody else.** The EA watches, evaluates your conditions, and **alerts you.** You decide and you execute.",
          "Think about what that actually gives you. **Consistency of attention** — it never misses a setup because you were making dinner, never overlooks the pair you stopped watching. But **you keep judgement**, which is the thing that genuinely didn't survive translation in module 801.",
          "It's under-sold everywhere, because it isn't impressive. **It's also the right default for most retail traders**, and I'd rather present it as the default than as a consolation prize.",
          "**And neither is the right answer if your plan isn't producing results manually.** Automation changes the rate, not the sign. That was module 801's first sentence and it's still true at the end."
        ],
        terms: [
          { term: 'Semi-automation',
            plain: 'The EA watches and alerts; you decide and execute.',
            like: 'A smoke alarm rather than a sprinkler. It wakes you; you choose what to do.' },
          { term: 'Kill switch',
            plain: 'A condition that stops all trading and requires a human to restart it.',
            like: 'The big red button. Worth pressing once while nothing is wrong.' },
          { term: 'VPS',
            plain: 'A rented always-on machine to run the terminal, so your own computer need not stay awake.',
            like: 'Renting a shed with power. It solves where the machine lives, not whether it works.' }
        ],
        close: [
          "Right. **That's the end of the programme.**",
          "**Nine tracks.** Currencies, shares, bonds, futures, options, crypto, commodities, spread betting, and automation. Let me tell you what you actually learned, because it was never the nine markets.",
          "**You learned one risk policy.** You wrote it in module 10 and extended it eight times. **You never once replaced it.** Every market added clauses; not one of them broke the thing underneath.",
          "**You met one answer about analytical tools, over and over.** Open interest. Credit spreads. Positioning. Implied volatility. The greeks. Inventory. **Every single time: context, not signals.** That repetition is the most reliable way there is to tell a real analytical tool from something being sold to you as a system.",
          "**You met one return shape and learned to distrust it.** Many small wins, then one enormous loss. Martingale. Carry. Selling options. High leverage. And in module 805 you learned to look for it **hiding inside your own code**, where you can install it entirely by accident.",
          "**You met one correlation lesson, five times.** Dollar-negative pairs. Five banks. Ten tokens. Three energy positions. Always the same question: **what do all my positions need to happen?**",
          "**And seven of the nine tracks ended by telling you that walking away from a market is a competent conclusion.** That was deliberate, and it's the opposite of how any of this is normally sold.",
          "This last track added one thing to that, and it's worth stating on its own:",
          "**A machine is better at obeying your rules than you are.**",
          "Not better at finding trades — it can't find anything. **Better at obeying.** It won't skip the stop because this one feels different. It won't trade after the daily limit because it's annoyed. **That's what automation is genuinely for**, and it's a much smaller and more useful claim than the one in the advertising.",
          "So, where you finish:",
          "**You are not equipped to trade nine markets. Nobody is.**",
          "**You are equipped to evaluate any of them, size properly, walk away from most, and — now — build something that follows your own rules more faithfully than you would.**",
          "The certificates say you completed a programme and can demonstrate a process. **They don't promise an outcome, and neither do I.** What you have is a process and the ability to tell whether it's working. That's what almost nobody starting out has, and it's the only durable advantage in this entire business.",
          "**Now go and be boring about it. That's still the job.**"
        ]
      },
      check: [
        { q: 'For most retail traders, the honest recommendation is:',
          options: ['Full automation as soon as the backtest passes', 'Semi-automation — the EA watches and alerts, you decide and execute', 'Never use an EA', 'Automate only around news'],
          a: 1,
          why: 'You get consistency of attention without handing over judgement — which is the thing that genuinely did not survive translation in module 801. It is the right default, not a consolation prize.' },
        { q: 'Across nine tracks, what was actually being taught?',
          options: ['Nine separate sets of techniques', 'One risk policy extended eight times, one verdict on analytical tools, one return shape to distrust, and one correlation lesson — the markets were just the material', 'How to trade every market', 'Which market is most profitable'],
          a: 1,
          why: 'The recurrences are the curriculum. Automation is the last of them: a machine that obeys your own rules better than you do, which is a smaller and far more useful claim than the advertising makes.' }
      ]
    }
  ];
})();
