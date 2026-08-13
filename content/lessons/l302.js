/* N1 Forex Academy — lessons for Module 302 (Futures track).

   VOICE: Jonathan talking to one student. The idea that has to land is that an
   open loss here is cash leaving the account tonight, not a provisional number
   on a screen — so running out of money and being wrong are two different ways
   to lose. The whole-contract sizing problem is stated without euphemism,
   because it is where futures genuinely punish a small account. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[302] = [
    {
      title: 'Every evening, real money moves',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "You've met margin before, in module 3, and the framing there holds: **it isn't borrowed money and it isn't a part-payment.** You aren't buying anything today, so there's nothing to part-pay for.",
          "**Futures margin is a performance bond.** Money held to prove you can cover tomorrow's losses. You get it back when you close, less whatever the trade actually lost.",
          "Two levels matter. **Initial margin** is what it takes to open. **Maintenance margin** is the lower level you have to stay above.",
          "One difference from forex worth knowing: **the exchange sets these, and moves them.** When a market gets volatile, margin requirements go up — sometimes while you're holding, sometimes sharply. Your position can become more expensive to keep at exactly the moment it's hardest.",
          "But here's the thing that genuinely separates futures from everything you've traded so far, and it's not the leverage.",
          "**Your losses are settled in cash. Every single evening.**"
        ],
        terms: [
          { term: 'Initial margin',
            plain: 'The cash you must post to open a contract.',
            like: 'A rental deposit. Held, not spent, and returned at the end.' },
          { term: 'Maintenance margin',
            plain: 'The lower level your account must stay above while the position is open.',
            like: 'The minimum balance on an account. Dip below it and someone gets in touch.' },
          { term: 'Mark to market',
            plain: 'Revaluing every position at the day\'s official closing price and settling the difference in cash.',
            like: 'Settling up at the end of every evening rather than running a tab all week.' },
          { term: 'Variation margin',
            plain: 'The cash actually moved in or out of your account each night.',
            like: 'The money that genuinely leaves your account, not a figure on a statement.' }
        ],
        close: [
          "Sit with what that means, because it contradicts an instinct you've built over three tracks.",
          "Hold a share at a loss and **nothing leaves your account.** The number on screen is worse, and that's all. You can sit there for a year.",
          "Hold a future at a loss and **the money is debited that night.** Actually gone. Your balance is genuinely smaller in the morning.",
          "**So an open loss here isn't provisional. It's a withdrawal.**",
          "And that produces a failure with no real equivalent in the earlier tracks:",
          "**You can be completely right about direction and still be finished, because you ran out of cash on the way there.**",
          "The sequence is mechanical. Losses debit nightly, your balance falls, and once it drops below maintenance margin you get a **margin call** — a demand to put the account back up to the **initial** level, not merely back above maintenance. That trips people constantly.",
          "**The deadline is short.** Often next morning, sometimes same day. Miss it and the broker liquidates at whatever price exists, in whatever order suits them.",
          "It's module 3's stop-out with a cash deadline bolted on. Same ending, one extra step, and less warning."
        ]
      },
      check: [
        { q: 'What happens to an open losing futures position at the end of each trading day?',
          options: ['Nothing until you close it', 'The loss is debited from your account in cash that evening', 'It accumulates as an unrealised figure', 'The broker charges overnight financing on it'],
          a: 1,
          why: 'Mark to market settles every position nightly in real cash. Unlike a share held at a loss, the money actually leaves — which is why running out of money and being wrong are two different ways to lose.' },
        { q: 'Your account falls below maintenance margin. What does the margin call require?',
          options: ['Topping up to just above maintenance', 'Restoring the account to the initial margin level, within a short deadline', 'Closing half the position', 'Nothing, as long as the trade recovers'],
          a: 1,
          why: 'Back to initial, not to maintenance — and the deadline is usually hours rather than days. Miss it and you are liquidated with no say in the timing or the price.' }
      ]
    },

    {
      title: 'Sizing in whole contracts',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Sizing works exactly as module 10 taught it. **The chart sets the stop, and the number of contracts falls out.** Nothing about that changes.",
          "**Contracts = (Account × Risk%) ÷ (Stop distance in ticks × Tick value)**",
          "Let's run one. £20,000 account, 1% risk, and the chart puts your stop 30 ticks away on a contract with a tick value of $12.50.",
          "Risk amount: **£200**. Stop cost per contract: 30 × $12.50 = **$375**.",
          "**Contracts = 200 ÷ 375 = 0.53.**",
          "And here is where futures are genuinely harder than anything you've traded. **You cannot buy half a contract.**",
          "In forex you could size to 0.14 lots and the arithmetic always worked. Here the smallest position is one whole contract — and quite often, one whole contract is already more than a correctly sized position."
        ],
        terms: [
          { term: 'Tick value',
            plain: 'What one minimum price move is worth per contract.',
            like: 'Pip value from module 2, under a new name.' },
          { term: 'Notional value',
            plain: 'Contract size × price. What you are actually exposed to.',
            like: 'The value of the whole house, not the deposit you put down on it.' },
          { term: 'Micro contract',
            plain: 'A smaller version of a standard contract, often a tenth of the size.',
            like: 'The same wine sold by the bottle instead of the case.' },
          { term: 'Liquidation',
            plain: 'The broker closing you out because a margin call went unmet.',
            like: 'Repossession. A process runs; nobody negotiates with you.' }
        ],
        close: [
          "So what do you do when the sum says 0.53 contracts? There are exactly two honest answers.",
          "**Trade the micro contract**, if one exists — often a tenth of the size, which turns 0.53 into a comfortable 5.3.",
          "**Or don't take the trade.**",
          "What you must not do is round up to one. That isn't a rounding error — **that's deciding to risk nearly twice what your policy allows**, and dressing it up as a technicality.",
          "Now the last idea, and it's the one that keeps you honest about size.",
          "**Judge every position by its notional value, never by the margin you posted.**",
          "One E-mini S&P contract at 5,000 index points is 50 × 5,000 = **$250,000 of exposure.** The margin might be $12,000. People quote the $12,000 and think that's their position. **It isn't. They're carrying a quarter of a million dollars.**",
          "The ratio works out around 20:1, but notice it's a *consequence* of the exchange's margin rules — not a dial you chose. Which is exactly what module 3 told you about leverage, in a different market.",
          "**Ask it every time: what am I actually controlling?** That question will still be doing useful work when you get to the perpetual futures in the crypto track."
        ]
      },
      check: [
        { q: '£20,000 account, 1% risk, stop 30 ticks away, tick value $12.50. How many contracts?',
          options: ['About half a contract — so trade the micro version or skip it', 'One contract', 'Two contracts', 'Five contracts'],
          a: 0,
          why: '£200 ÷ (30 × $12.50 = $375) is about 0.53. You cannot trade half a contract, and rounding up to one risks nearly twice your policy. The micro contract or no trade are the two honest answers.' },
        { q: 'One contract has a notional value of $250,000 on $12,000 of margin. Which number should you judge the position by?',
          options: ['The margin, since that is what you committed', 'The notional value, since that is what you are actually exposed to', 'Neither — only tick value matters', 'The difference between the two'],
          a: 1,
          why: 'Margin tells you what it costs to open. Notional tells you what a move does to you. Judging by margin posted is how people end up carrying far more exposure than they believe they have.' }
      ]
    }
  ];
})();
