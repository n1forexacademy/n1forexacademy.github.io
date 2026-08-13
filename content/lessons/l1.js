/* N1 Forex Academy — lessons for Module 1.

   VOICE: this is Jonathan talking directly to one student. Second person, plain
   words, everyday comparisons before any jargon. The slides are the summary;
   `teach` is the actual lesson. Warnings only where they change a decision —
   a student who is warned constantly stops reading warnings. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[1] = [
    {
      title: 'What you are actually buying',
      slides: [0, 1],
      teach: {
        lead: [
          "Let's start with the thing almost nobody explains properly.",
          "When you trade forex, you are always doing **two things at once**. You are buying one country's money and paying for it with another country's money. Always both. There is no way to buy just one.",
          "Think about going on holiday. You walk into a bureau de change with £500 and walk out with euros. You didn't just \"buy euros\" — you sold pounds to get them. If the euro gets stronger before you come home, you bring back more pounds than you started with. You made money without doing anything clever. That is a forex trade. The only difference is the size and the speed.",
          "So when you see **EUR/USD 1.0850** on a screen, read it exactly like a price tag: *one euro costs 1.0850 US dollars.* That's it. Nothing more complicated is happening."
        ],
        terms: [
          { term: 'Base currency',
            plain: 'The first one in the pair. The thing being priced.',
            like: 'In "EUR/USD", the euro. Like the loaf of bread in "bread costs £2" — the loaf is what you are pricing.' },
          { term: 'Quote currency',
            plain: 'The second one. What you are paying with.',
            like: 'In "EUR/USD", the dollar. The pounds in "bread costs £2".' },
          { term: 'Going long',
            plain: 'Buying. You want the price to go up.',
            like: 'Buying a house because you think it will be worth more later.' },
          { term: 'Going short',
            plain: 'Selling something first, hoping to buy it back cheaper.',
            like: 'A shop taking orders for a product before it arrives, betting the wholesale price will drop before they have to buy it.' }
        ],
        close: [
          "Here is the part that trips people up, so let me be blunt about it.",
          "If you buy EUR/USD and the price falls, it does **not** automatically mean the euro got weaker. It might mean the dollar got stronger. Both currencies could have weakened against everything else, and you would still lose money if the dollar weakened less.",
          "You are never betting on one currency. You are betting on the **gap between two of them**. Get comfortable with that now and a lot of confusing days will make sense later."
        ]
      },
      check: [
        { q: 'You buy GBP/USD. What do you now hold?',
          options: ['Pounds, funded by selling dollars', 'Both pounds and dollars', 'Dollars, funded by selling pounds', 'A share of the UK economy'],
          a: 0,
          why: 'Buying the pair means buying the first currency and selling the second. You hold pounds and owe dollars — and you profit only if the pound gains ground on the dollar specifically.' },
        { q: 'EUR/USD falls from 1.0900 to 1.0850. What definitely happened?',
          options: ['The euro definitely got weaker', 'The dollar definitely got stronger', 'The euro lost ground against the dollar — but either one could have moved', 'Both currencies got weaker'],
          a: 2,
          why: 'A pair only shows the gap between two currencies. The euro may have fallen, the dollar may have risen, or both moved in the same direction by different amounts. You are always trading the relationship, never one side alone.' }
      ]
    },

    {
      title: 'How the market is put together',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Most markets have a building. The stock market has an exchange with an address, opening hours and a bell.",
          "Forex has none of that. There is no forex building, no central computer, no single official price. What exists instead is a network — banks quoting prices to each other, then to smaller banks, then to brokers, then finally to you.",
          "Picture wholesale fruit. The grower sells to a big distributor, who sells to a regional supplier, who sells to your corner shop. By the time an apple reaches you it has changed hands three times, and each pair of hands added a little to the price. **Your broker's price works exactly the same way.**",
          "That is why two brokers can show you slightly different prices at the same instant, and neither is cheating. They are buying from different suppliers."
        ],
        terms: [
          { term: 'Liquidity',
            plain: 'How easy it is to buy or sell without shifting the price.',
            like: 'Selling a Toyota is easy — buyers everywhere, price barely moves. Selling a rare vintage car is hard: few buyers, and asking for a quick sale means dropping your price.' },
          { term: 'Bid and ask',
            plain: 'Bid is what you can sell at. Ask is what you can buy at. The ask is always higher.',
            like: 'A bureau de change board with two columns — "we buy" and "we sell". They never match, and the gap is their profit.' },
          { term: 'Spread',
            plain: 'The gap between bid and ask. Your cost of entry.',
            like: 'The difference between the two numbers on that bureau board.' },
          { term: 'Over the counter (OTC)',
            plain: 'Traded directly between two parties, not through a central exchange.',
            like: 'Buying a car privately rather than at auction. No public record of the price you agreed.' }
        ],
        close: [
          "Now the important bit — **why does a price move at all?**",
          "At any moment there is a queue of people willing to buy and a queue willing to sell, each at their own price. When someone comes in wanting to buy a large amount right now, they take the cheapest sellers first. Then the next cheapest. Then the next. Once the cheap sellers are used up, the only ones left are asking more — and the price has risen.",
          "That's it. Price rises because buyers ran out of cheap sellers. Price falls because sellers ran out of willing buyers.",
          "Everything you will ever learn about support, resistance and levels is really just a way of guessing **where those queues of resting orders are sitting**. Hold on to that idea — it makes the rest of this course far easier."
        ]
      },
      check: [
        { q: 'Two regulated brokers show slightly different EUR/USD prices at the same moment. Why?',
          options: ['One of them is cheating', 'Each builds its price from its own suppliers and adds its own margin — like shops buying from different wholesalers', 'Their clocks are out of sync', 'It only happens on demo accounts'],
          a: 1,
          why: 'There is no single official forex price. Each broker sources its pricing from the liquidity providers it deals with and adds a margin, so small differences between brokers are completely normal.' },
        { q: 'What actually makes a price move up?',
          options: ['A chart pattern completing', 'Buyers using up the cheap sellers, so only more expensive ones remain', 'Indicators crossing over', 'The broker updating on a timer'],
          a: 1,
          why: 'Price moves when one side is more urgent and eats through the orders resting at the current level. Once those are gone, the next available price is worse — and that is the move you see on the chart.' }
      ]
    },

    {
      title: 'What a trade costs you before you are even right',
      slides: [5, 6, 7],
      teach: {
        lead: [
          "I want you to understand this before you place a single trade, because it changes what counts as a good idea.",
          "**Every trade you open starts as a small loss.** Not because you did anything wrong — it's simply how the pricing works.",
          "Back to the bureau de change. Walk in with £100, swap it for euros, then immediately swap it straight back. You will not get £100 back. You'll get maybe £96. You didn't make a mistake and the rate didn't move. That's just the shop's margin, taken twice.",
          "Your broker does the same thing. You buy at the higher price and sell at the lower one, and the gap between them is theirs."
        ],
        terms: [
          { term: 'Spread cost',
            plain: 'What you pay just to get in. Charged on every single trade.',
            like: 'The bureau de change margin. Unavoidable, and it applies whether you end up right or wrong.' },
          { term: 'Commission',
            plain: 'A separate fee some brokers charge per trade instead of widening the spread.',
            like: 'A booking fee on concert tickets — a visible charge rather than one hidden in the price.' },
          { term: 'Swap (or rollover)',
            plain: 'A small interest charge or credit for holding a trade overnight.',
            like: 'Renting a tool. Keep it one afternoon and you barely notice. Keep it three months and the rental costs more than the job was worth.' }
        ],
        close: [
          "Here's why this matters more than it sounds.",
          "If a trading idea only wins you a tiny amount when it works, the costs eat it. You can be **right more often than wrong and still lose money**. I have seen this happen to people who were genuinely good at reading charts.",
          "It also tells you something useful about style. If you trade many times a day, the spread is what will hurt you — it gets charged again and again. If you hold trades for weeks, the spread barely matters but the overnight charge quietly grinds away at you.",
          "Match how you trade to which cost you can live with. That single decision saves people a great deal of money."
        ]
      },
      check: [
        { q: 'You open a trade and close it one second later, with the price completely unchanged. What happens?',
          options: ['You break even', 'You lose the spread — you bought at the higher price and sold at the lower one', 'You make a small gain', 'Nothing, the trade is cancelled'],
          a: 1,
          why: 'You always buy at the ask and sell at the bid, and the gap between them belongs to the broker. Every trade therefore begins slightly underwater, which is exactly why a strategy with a very small edge can still lose money overall.' },
        { q: 'You plan to hold trades for several weeks at a time. Which cost should worry you most?',
          options: ['The spread', 'Commission', 'The overnight swap charge, because it is charged every single night', 'The deposit fee'],
          a: 2,
          why: 'Spread and commission are one-off costs per trade, so they punish frequent traders. Swap is charged every night the trade stays open, so over weeks it adds up quietly — like renting a tool for far longer than the job needed.' }
      ]
    },

    {
      title: 'The part most courses skip',
      slides: [8, 9, 10],
      teach: {
        lead: [
          "I'd rather tell you this at the start than let you find out with your own money.",
          "Brokers are legally required to publish how many of their customers lose money. Across the industry that figure sits somewhere around **seven or eight out of every ten**. That is not a scare tactic — it's an audited number you can check on any regulated broker's own website in about thirty seconds.",
          "But here's the part that should actually encourage you. When people study *why* those accounts fail, it is very rarely because someone read a chart badly. It's almost always the same three things: **positions far too big, no exit plan, and revenge trading after a loss.**",
          "All three are fixable. None of them require you to predict the future. That is genuinely good news, and it's why this course spends more time on risk than on entry signals."
        ],
        terms: [
          { term: 'Overleveraging',
            plain: 'Taking a position far too large for the money in your account.',
            like: 'Betting your month\'s rent on one football match. You might win. But you only need to be wrong once.' },
          { term: 'Revenge trading',
            plain: 'Placing a bigger, hastier trade to win back what you just lost.',
            like: 'Doubling your stake after losing a hand of cards. The urge feels logical and it is how people empty an account in an afternoon.' },
          { term: 'Edge',
            plain: 'A small, repeatable advantage that pays off over many trades.',
            like: 'A casino only wins about 51 times in 100 on some games. That tiny margin, repeated thousands of times, builds the whole building.' }
        ],
        close: [
          "One last thing before you move on, and then I'll stop lecturing.",
          "If anyone ever promises you a guaranteed monthly return from trading, they are either lying or they aren't trading. Nobody can guarantee an outcome that depends on other people's decisions. You will see those promises constantly — now you know exactly what they are.",
          "What I can promise is this: by the end of this course you will know how to size a position properly, where to put a stop and why, and how to tell whether what you're doing is actually working. That's what a real trading education looks like."
        ]
      },
      check: [
        { q: 'Someone advertises "15% monthly returns, guaranteed". What is the giveaway?',
          options: ['15% is too small to be worth it', 'The word "guaranteed" — nobody can promise an outcome that depends on an uncertain market', 'They quoted it monthly instead of yearly', 'Nothing, if they show verified results'],
          a: 1,
          why: 'The number does not matter — the guarantee does. Trading outcomes depend on what other people do, so any promised fixed return means something other than trading is going on.' },
        { q: 'Studies of failed retail accounts point mainly to which cause?',
          options: ['Poor chart reading', 'Position sizes far too large, missing exit plans, and revenge trading', 'Choosing the wrong currency pairs', 'Bad luck with the timing'],
          a: 1,
          why: 'The failures cluster around risk behaviour rather than analysis. That is encouraging, because all three are things you can fix by following rules — and none of them require predicting the market.' }
      ]
    }
  ];
})();
