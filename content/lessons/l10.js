/* N1 Forex Academy — lessons for Module 10.

   VOICE: Jonathan talking to one student. This is the module the course exists
   for, so nothing is hedged. Position size as an OUTPUT is the reordering that
   saves accounts; the £100 shirt makes drawdown asymmetry concrete; and the
   ruin list is stated as arithmetic rather than as advice. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[10] = [
    {
      title: 'Doing it in the right order',
      slides: [0, 1],
      teach: {
        lead: [
          "This is the most important lesson in the course, and it's about the *order* you do four things in. That's all. Get the order right and a whole category of disaster stops being available to you.",
          "Here's how most people trade:",
          "**Pick a lot size** — usually whatever they used last time, or a bit more because this one feels good — place the trade, then put a stop somewhere that seems reasonable.",
          "Here's the order that works:",
          "**One.** Find the setup on the chart. **Two.** Put the stop where the idea would be *proven wrong*. **Three.** Decide what percentage of your account you're willing to lose. **Four.** Calculate the lot size that makes those two numbers agree.",
          "**Your position size is an output. It is not a choice.**",
          "A joiner measures the gap, then cuts the wood. He doesn't cut a nice round length first and hope the gap cooperates. Your stop distance is the gap. Your lot size is the cut.",
          "**If you ever catch yourself choosing a lot size, you've skipped a step.**"
        ],
        terms: [
          { term: 'Risk per trade',
            plain: 'The most you will lose if the stop is hit, written as a percentage of your account.',
            like: 'The amount of cash you take to a night out, decided at home.' },
          { term: 'Position size',
            plain: 'The lot size that makes your stop distance cost exactly your intended risk.',
            like: 'How much rice to cook. It follows from the number of people, it is not a free choice.' },
          { term: 'R',
            plain: 'One unit of risk. A trade that made three times what it risked made 3R.',
            like: 'Counting in "bets" rather than pounds, so a small account and a large one can be compared.' }
        ],
        close: [
          "The arithmetic, once, in full:",
          "**Lots = (Equity × Risk%) ÷ (Stop in pips × Pip value per lot)**",
          "Work an example. £5,000 account. You've decided on 1% risk. EUR/USD, and the chart says your stop belongs 35 pips away.",
          "Risk amount: 5,000 × 0.01 = **£50**. That's the most this trade can cost you.",
          "Bottom of the sum: 35 pips × £10 per pip per lot = **£350**.",
          "**Lots = 50 ÷ 350 = 0.14.**",
          "Now run the same account, same 1% risk, on gold with a 400-pip stop. The lot size that comes out is **completely different** — as it should be. Same risk, different instrument, different stop, different size.",
          "That's the whole point. **The pounds you risk stay constant. The lot size varies to make that true.** Most people do it exactly backwards: they hold the lot size constant and let the pounds at risk swing wildly depending on where they happened to put the stop.",
          "Put this formula in the calculator on the Toolkit page and use it every single time until you no longer need to."
        ]
      },
      check: [
        { q: 'Account $8,000, risking 1%, GBP/USD, structural stop 45 pips away. Lot size?',
          options: ['0.18', '1.78', '0.045', '0.80'],
          a: 0,
          why: '$80 risk ÷ (45 pips × $10) = 0.178, rounded to 0.18. The stop came from the chart first and the lot size fell out of it — never the reverse.' },
        { q: 'Position size should be:',
          options: ['Chosen based on confidence', 'An output of stop distance and risk percentage', 'The largest the margin allows', 'Kept constant regardless of stop'],
          a: 1,
          why: 'If you ever find yourself choosing a lot size, you have skipped a step. Confidence is uncorrelated with outcome and peaks before the worst trades.' }
      ]
    },

    {
      title: 'Where the stop goes, and how much to risk',
      slides: [2, 3],
      teach: {
        lead: [
          "**The stop goes where your idea is proven wrong.** Nowhere else.",
          "Not at a round number. Not at a fixed pip distance because that's what you always use. And absolutely not at \"what I can afford to lose\" — that's deciding where the fire alarm goes based on how loud you'd like it to be.",
          "If you're long because price is holding a support zone, then the idea is wrong when that zone gives way. So the stop goes **below the zone**, past the sweep distance you learned to expect in module 7. Then cross-check it against ATR: is this a sensible distance given how much the thing is actually moving today?",
          "Now the moment that decides what kind of trader you become.",
          "**You do the sum and the position comes out uncomfortably small.**",
          "Everyone hits this. The temptation is to pull the stop closer so you can trade bigger. Understand what that actually does: **it puts your stop somewhere the idea isn't wrong yet**, so you get taken out by ordinary noise on trades that were correct.",
          "**The small position is the right answer. Your expectation of how much you should be making is the thing that's wrong.**"
        ],
        terms: [
          { term: 'Structural stop',
            plain: 'A stop placed beyond the level that would disprove your reason for being in the trade.',
            like: 'A smoke alarm where a fire would actually start, not wherever the wire reaches.' },
          { term: 'Drawdown',
            plain: 'How far your account has fallen from its highest point.',
            like: 'How deep the hole is. Not how it feels — how deep.' },
          { term: 'Losing streak',
            plain: 'Several losses in a row. Completely normal, and it will happen to you.',
            like: 'Five tails in a row. Surprising, unremarkable, and not evidence the coin is broken.' }
        ],
        close: [
          "**And never, ever move a stop further away.**",
          "This is the single behaviour behind most destroyed accounts. Price approaches your stop, you decide it just needs a bit more room, you drag it. You've now converted a loss you had measured and sized into one you haven't. The next drag is easier. The one after that is easier still.",
          "**A planned 1% becomes an unplanned 8% one small reasonable-feeling decision at a time.**",
          "Now, how much per trade?",
          "**Starting out: 0.5% or less.** You are going to lose money while you learn. That's tuition, and you should make it affordable rather than pretending it won't happen.",
          "**With a tested edge and real experience: 1% to 2%.**",
          "**Above 2%, you're relying on being right rather than on being sized properly** — and being right is not something you control.",
          "Here's why the number matters so much. **Ten losses in a row is normal.** Not a catastrophe, not evidence something's broken — normal, and it will happen to you.",
          "At **1% risk**, ten straight losses costs you about **9.6%**. Unpleasant. Entirely survivable. You trade on.",
          "At **10% risk**, the same ten losses costs about **65%** — and you now need a **186% gain** just to get back to where you started. That account is finished. Not damaged. Finished.",
          "**Same streak. Same skill. The only difference was the size.**"
        ]
      },
      check: [
        { q: 'Price moves toward your stop. You should:',
          options: ['Move the stop further away', 'Add to the position to improve the average', 'Nothing — the stop marks where the idea is wrong, and that has not changed', 'Close half and move the stop'],
          a: 2,
          why: 'Moving a stop converts a planned, sized loss into an unplanned one. Nearly every catastrophic retail loss involves a stop that was moved or a loser that was added to.' },
        { q: 'Ten consecutive losses at 1% risk costs roughly:',
          options: ['1%', '9.6%', '25%', '50%'],
          a: 1,
          why: 'About 9.6% — uncomfortable and entirely survivable. At 10% risk the same streak costs 65% and needs 186% to recover. Ten losses in a row is normal; plan for it.' }
      ]
    },

    {
      title: 'Why win rate tells you nothing',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "First, the piece of arithmetic that underpins everything else in this module.",
          "**Losses and gains are not symmetric.**",
          "Take a £100 shirt. Knock 50% off and it's £50. Now put 50% back on — you get £75, not £100. **To undo a 50% fall you need a 100% rise.**",
          "Run that up the scale:",
          "Down **10%** needs **11.1%** back. Down **25%** needs **33.3%**. Down **50%** needs **100%**. Down **75%** needs **300%**.",
          "**Every percentage point you lose costs more to recover than the one before it.** That's not a philosophy about being careful — it's the shape of the maths, and it's why keeping what you have beats chasing returns. Not because caution is a virtue. Because the hole gets steeper the deeper it goes."
        ],
        terms: [
          { term: 'Expectancy',
            plain: 'What you make on average per trade, once wins and losses are both counted properly.',
            like: 'Profit per customer, not number of customers. A busy shop can still lose money.' },
          { term: 'Risk:reward',
            plain: 'How much you stand to make compared with what you are risking, worked out before you enter.',
            like: 'The odds on the bet. You would want to know them before handing over the money.' },
          { term: 'Break-even win rate',
            plain: 'How often you need to be right, at given odds, just to come out level.',
            like: 'The pass mark. Different exam, different pass mark.' }
        ],
        close: [
          "Now the number everyone brags about and nobody should: **win rate.**",
          "**Expectancy = (Win% × average win in R) − (Loss% × average loss in R)**",
          "Take a trader who wins only **40%** of the time. Sounds poor. But their average win is 2.5R and their average loss is 1R:",
          "(0.4 × 2.5) − (0.6 × 1) = **+0.4R per trade.** They make money steadily while being wrong most of the time.",
          "Now take one who wins **70%** — and cannot stop grabbing profits early while letting losers run. Average win 0.5R, average loss 2R:",
          "(0.7 × 0.5) − (0.3 × 2) = **−0.25R per trade.** They lose money while being right most of the time, and they cannot understand why.",
          "**A shop with few customers and a good margin beats a busy one selling at a loss.** Win rate is the customer count. Expectancy is the profit.",
          "One thing people leave out: **costs go inside this calculation.** An edge of 0.1R per trade sounds real and vanishes completely once spread and commission are counted. If you didn't include costs, you didn't measure your edge.",
          "And the trap on the other side, because this idea gets overcorrected:",
          "**Don't stretch a target just to make the ratio look good.** A 1:3 target price never reaches is a 100% loss rate. Put the target where price is realistically likely to go, *then* check whether the ratio is acceptable — and if it isn't, **skip the trade.** That's an option, and it's free."
        ]
      },
      check: [
        { q: 'A trader wins 70% of trades but loses money overall. How?',
          options: ['Impossible', 'Their losses are much larger than their wins — expectancy depends on size of outcomes, not just frequency', 'The broker is manipulating results', 'Wrong pairs'],
          a: 1,
          why: 'At 70% wins of 0.5R and 30% losses of 2R, expectancy is −0.25R. This is the classic profile of taking profits quickly and letting losers run.' },
        { q: 'You lose 50% of your account. What return gets you back to level?',
          options: ['50%', '75%', '100%', '150%'],
          a: 2,
          why: 'Halving means the remainder must double. This asymmetry is the mathematical argument for small risk, not a matter of temperament.' }
      ]
    },

    {
      title: 'Account-level limits, and the ways to guarantee ruin',
      slides: [7, 8, 9, 10],
      teach: {
        lead: [
          "Risk per trade is only half a risk policy. You also need limits on **everything at once**, because six carefully sized 1% trades can still be a 6% afternoon.",
          "**Maximum total open risk: 3% across everything you're holding.** That's a reasonable number to start from.",
          "**Correlated positions count as one.** You met this at the end of module 9 — long EUR/USD and long GBP/USD at 1% each isn't two trades, it's a 2% bet on the dollar falling. Count it that way.",
          "**A daily stop: down 3% on the day, you're done.** Close the laptop. Not \"be careful\" — done, until tomorrow.",
          "This is the rule that saves the most money, and here's why. **The urge to trade is strongest immediately after a loss, which is exactly when your judgement is worst.** A daily stop is you, calm, this morning, overruling you, rattled, this afternoon. Set weekly and monthly versions too, so a bad week can't become a bad quarter."
        ],
        terms: [
          { term: 'Daily stop',
            plain: 'A loss for the day at which you stop trading, decided in advance.',
            like: 'Closing time. It arrives whether or not you feel finished.' },
          { term: 'Martingale',
            plain: 'Doubling your size after every loss to win it all back in one go.',
            like: 'Doubling up at roulette. Works beautifully until the one time it does not, and that time takes everything.' },
          { term: 'Averaging down',
            plain: 'Adding more to a trade that is already losing, to improve your average price.',
            like: 'Bailing water faster instead of plugging the hole.' },
          { term: 'Revenge trading',
            plain: 'Trading bigger straight after a loss to win it back.',
            like: 'Chasing a bad bet with a bigger one. The fastest route from a bad day to no account.' }
        ],
        close: [
          "Now the list of things that reliably end accounts. Every one of these **feels like it's working** right up until the end, which is precisely what makes them dangerous.",
          "**Martingale.** Double after every loss and you'll recover everything on the next win. And you will — again and again, which is why the equity curve looks immaculate. But funding a run of *n* losses needs roughly **2ⁿ** times your starting stake. Ten losses in a row — which, remember, is *normal* — needs about a thousand times your first bet. Your account is finite. The streak that exceeds it is not a possibility, it's a matter of when.",
          "**Grid systems without a stop.** Same failure in different clothing.",
          "**Averaging down.** Adding to a loser because it's \"better value now\". You've just increased your size on the trade the market is telling you is wrong, and turned a small planned loss into a large unplanned one.",
          "**No stop loss — \"I'll close it manually.\"** You won't. Under real pressure, with real money, you will hope. Everyone does. That's what the stop is for.",
          "**Revenge trading.** Sizing up right after a loss to win it back quickly.",
          "Finally, write your policy down. Actually write it:",
          "**Risk per trade** — a fixed percentage, never varied because a trade feels good. **Maximum open risk**, with correlated positions counted once. **Daily and weekly stops**, as specific numbers. **Your stop placement rule** — structural, checked against ATR, never widened. **Minimum acceptable risk:reward**, below which you skip. And **your news policy** from module 9.",
          "**Sign it and date it.** A policy you haven't committed to isn't a policy — it's a preference, and preferences bend at exactly the moment you need them not to.",
          "That's the module the whole course was building towards. Everything from here is about doing this consistently."
        ]
      },
      check: [
        { q: 'Why does a martingale system eventually fail?',
          options: ['Brokers ban it', 'Doubling after each loss needs exponentially growing capital, and every finite account eventually meets a streak it cannot fund', 'Spreads are too wide', 'It does not, given a large enough account'],
          a: 1,
          why: 'Funding an n-loss streak needs roughly 2ⁿ units of capital. It produces a long run of small wins then one total loss — which is why its equity curve looks flawless until the end.' },
        { q: 'Beyond risk per trade, a complete risk policy must also specify:',
          options: ['Only the instruments traded', 'Maximum total open risk, a daily stop, and how correlated positions are counted', 'The preferred indicator settings', 'Which broker to use'],
          a: 1,
          why: 'Per-trade risk is only half of it. Daily stops matter most because the urge to trade is strongest right after a loss, when judgement is worst.' }
      ]
    }
  ];
})();
