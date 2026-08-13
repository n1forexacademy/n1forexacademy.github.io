/* N1 Forex Academy — lessons for Module 305 (Futures track).

   VOICE: Jonathan talking to one student. Closes the track. Two things must
   land and neither is comfortable: cash reserve is what holds a position where
   margin only opens it, and for many accounts the honest conclusion is that
   futures are the wrong instrument. Ending on that rather than encouragement
   is deliberate. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[305] = [
    {
      title: 'Opening it and holding it are different questions',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Good news first: **you already have most of this policy.**",
          "Everything from module 10 carries straight over. Risk per trade as a fixed percentage. Stops placed where the idea is proven wrong. Never widen a stop. Never average down. Honour your daily and weekly stops. Count correlated positions once.",
          "**You need three additions, not a new document.** A cash rule, a roll rule, and a product rule.",
          "Start with the cash one, because it's where retail futures accounts actually die — more often than from bad analysis, and it looks like bad luck from the inside.",
          "**Initial margin answers one question: can I open this?**",
          "**It does not answer the question that matters: can I hold it through a bad week?**",
          "Remember module 302 — losses are debited in cash every evening. So your account doesn't just need enough to post margin. It needs enough to **absorb a run of adverse settlements** without dropping below maintenance and triggering a call."
        ],
        terms: [
          { term: 'Cash reserve',
            plain: 'Money held beyond initial margin, specifically to survive daily settlement.',
            like: 'Not spending your whole float on stock. You still need to pay the bills next week.' },
          { term: 'Margin-to-equity',
            plain: 'Total margin posted divided by your account equity. How committed you are.',
            like: 'What proportion of your wages is already spoken for before the month starts.' },
          { term: 'Roll rule',
            plain: 'A written rule saying exactly when you roll to the next contract month.',
            like: 'Booking the MOT in advance rather than the week it runs out.' },
          { term: 'Limit up / limit down',
            plain: 'Exchange-imposed daily price bounds. Trading halts there, so you cannot exit.',
            like: 'The shutters coming down mid-emergency. Same as the equity halts in module 102.' }
        ],
        close: [
          "So here's a workable starting rule: **hold at least twice the initial margin per contract in free cash.** More on volatile products.",
          "And watch **margin-to-equity** — total margin posted divided by your equity. Once you're above roughly 20–30% committed, an ordinary bad week becomes a margin call rather than an inconvenience.",
          "One more thing to build the reserve for: **exchanges raise margin requirements when volatility rises.** Not before it rises — during. So the requirement can move against you at exactly the moment your position is already under pressure. Your reserve has to survive that too.",
          "The second addition is the **roll rule**, and it's short: state how many days before expiry you roll, and what you do if liquidity has already drained out of the front month.",
          "Write it in advance for the same reason you wrote everything else in advance — **so rolling is never an improvised decision made at the worst possible moment.**",
          "Third is the product rule, and that's the next lesson. It's the one that might tell you this market isn't for you yet."
        ]
      },
      check: [
        { q: 'Initial margin is £1,200 per contract and you have £1,300 free. Should you open the position?',
          options: ['Yes — you can meet the margin requirement', 'No — margin opens a position, but a cash reserve is what holds it through daily settlement', 'Yes, provided you use a stop', 'Only if the contract is cash settled'],
          a: 1,
          why: 'You could open it and be unable to fund the first bad week. A workable starting rule is at least twice initial margin in free cash, and more where the product is volatile.' },
        { q: 'Why does it matter that futures trade nearly around the clock?',
          options: ['It guarantees you can always exit', 'Overnight sessions are thin, so the move that matters often lands when the book is emptiest and your stop fills far from its level', 'It lowers margin requirements', 'It removes gap risk'],
          a: 1,
          why: 'Continuous trading is not continuous liquidity. This is module 5\'s rollover lesson and module 102\'s halts arriving a third time — "my stop protects me" has an exception in every market.' }
      ]
    },

    {
      title: 'Choosing the product to fit the account',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Here's a reversal you need to make consciously.",
          "**In forex, you sized the position to fit the account.** Any stop distance, any account, the arithmetic gave you a lot size and it always worked.",
          "**In futures, you often have to choose the product to fit the account.**",
          "That's because of the whole-contract problem from module 302. The smallest position available is one contract, and one contract is frequently already larger than your risk policy allows.",
          "So the order of decisions changes:",
          "**Account size → which contracts you can actually size correctly → then, and only then, strategy.**",
          "Most people do this backwards. They pick the market they've read about, discover the contract is too big, and quietly adjust the risk rule to fit. **That's the failure this whole course exists to prevent**, arriving in a new costume.",
          "**Micros first.** For most retail accounts a micro contract isn't the lesser option — it's the correct one."
        ],
        terms: [
          { term: 'Product rule',
            plain: 'Deciding which contracts you will trade, on liquidity and size, before any strategy exists.',
            like: 'Checking what fits in your kitchen before choosing the fridge.' },
          { term: 'Micro contract',
            plain: 'A smaller version of a standard contract, often a tenth of the size.',
            like: 'Buying by the bottle rather than the case.' },
          { term: 'Notional exposure',
            plain: 'Contract size × price × contracts. What you actually control across the whole account.',
            like: 'The total value of everything you are carrying, not what you paid to carry it.' }
        ],
        close: [
          "Which leads to the sentence I'd rather say plainly than dress up:",
          "**If no available contract can be sized within your risk policy, that market is not available to you yet.**",
          "That's a real answer. Not a failure, not a reason to bend the rule, and not something to feel bad about. **Trading a product you cannot size correctly is how a good process produces a bad outcome** — and you now have the arithmetic to know that before it costs you anything.",
          "So let me close the track honestly, because you've earned a straight assessment rather than encouragement.",
          "**What futures genuinely give you:** transparent published volume, a central counterparty instead of a broker as your counterparty, deep liquidity in the major contracts, and no nightly financing charge eating a long-held position.",
          "**What they genuinely cost you:** whole-contract granularity that punishes small accounts, expiry and rolls to manage, cash settlement pressure that can force you out of a correct trade, and overnight gaps in thin hours.",
          "**Who it suits:** a properly funded account, or someone with an actual hedging need, who values exchange transparency.",
          "**Who it doesn't:** a small account where the minimum contract exceeds correct sizing, or anyone who can't comfortably fund daily settlement.",
          "If you work through the arithmetic and conclude **\"not with this account, not yet\"** — that is a competent, well-informed decision, and it's exactly what the last five modules were for. The market will still be there when the account is bigger."
        ]
      },
      check: [
        { q: 'Your correct position size works out at 0.4 of a standard contract and no micro exists. The honest response is:',
          options: ['Round up to one contract', 'Do not take the trade — that market is not available to you at this account size', 'Halve your stop distance so the arithmetic gives one contract', 'Raise risk to 2% just for this trade'],
          a: 1,
          why: 'Rounding up risks two and a half times your policy. Halving the stop is worse — it puts the stop somewhere the idea is not yet wrong. "Not this market, not yet" is a real and competent answer.' },
        { q: 'Which part of your existing risk policy does NOT carry over to futures?',
          options: ['Risk per trade as a fixed percentage', 'Never widening a stop', 'None of it — it all carries over, and futures simply adds cash reserve, roll and product rules', 'Never averaging down'],
          a: 2,
          why: 'The policy extends rather than being replaced. Having now stretched one policy across four markets is a more durable thing to own than any single market\'s technique.' }
      ]
    }
  ];
})();
