/* N1 Forex Academy — lessons for Module 5.

   VOICE: Jonathan talking to one student. The job of this module is to make a
   student with a job feel that their constraint is workable rather than
   disqualifying — and to defuse the "the broker hunted my stop" paranoia by
   explaining where stops actually sit. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[5] = [
    {
      title: 'The four sessions',
      slides: [0, 1],
      teach: {
        lead: [
          "You'll hear people say forex is a 24-hour market, as if every hour is the same. It isn't, and this is one of the easiest edges to pick up because it costs you nothing to act on.",
          "Think of a high street. The shops are technically open from early morning to late evening, but nobody would tell you 7am and 1pm are the same experience. One is you and the delivery driver; the other is the whole town.",
          "The currency market works the same way, except the high street moves around the planet. **Sydney** opens, then **Tokyo**, then **London**, then **New York**, and by the time New York closes Sydney is waking up again. No bell, no gap, just the busy part sliding around the world.",
          "Each one behaves differently, and the difference is consistent enough to plan around.",
          "**Tokyo** is orderly. Narrow ranges, levels that tend to hold, not much follow-through. **London** is the biggest by volume and usually produces the day's first proper directional move. **New York** is news-heavy — it's where most of the numbers that move the dollar get released."
        ],
        terms: [
          { term: 'Session',
            plain: 'The hours when one major financial centre is properly awake and trading.',
            like: 'A city\'s working day. Same street, completely different atmosphere at 8am and 8pm.' },
          { term: 'Overlap',
            plain: 'The hours when two centres are open at once. London and New York overlap in the afternoon.',
            like: 'Rush hour. Everyone is on the road at the same time, so things move.' },
          { term: 'Liquidity',
            plain: 'How many people are actually there to trade with you.',
            like: 'How many buyers are at the car boot sale. At 6am you will get a poor price simply because there is nobody there.' },
          { term: 'Session high / low',
            plain: 'The highest and lowest price reached during one session. The next session often tests them.',
            like: 'Yesterday\'s record on a scoreboard. Everyone can see it, so everyone reacts to it.' }
        ],
        close: [
          "The window that matters most is the **London–New York overlap**, roughly 12:00 to 16:00 UTC. Both of the biggest centres are open at the same time, so you get the tightest costs and the largest moves of the day. Most day-trading setups you'll ever read about were designed for these hours, whether or not the person writing them said so.",
          "One warning about the times: **they drift**. Daylight saving shifts them twice a year, and different countries shift on different dates. Don't trust a printed table — check against your own broker's clock, which is why I told you to work that out in the last module.",
          "And keep this in mind as we go: **the market being open is not the same as there being an opportunity.** Those are two different things, and confusing them is expensive."
        ]
      },
      check: [
        { q: 'Which window generally has the deepest liquidity and largest ranges?',
          options: ['Tokyo', 'The London / New York overlap', 'Sydney', 'The hour after Friday close'],
          a: 1,
          why: 'Roughly 12:00–16:00 UTC both major centres are open at once, giving the tightest spreads and biggest ranges. Most day-trading setups are designed around it.' },
        { q: 'Tokyo is best described as:',
          options: ['Dead and not worth trading', 'Orderly and range-prone, with levels that tend to hold', 'The most volatile session', 'Identical to London but quieter'],
          a: 1,
          why: 'Narrow ranges and well-respected boundaries suit range and mean-reversion approaches. It is different, not worse — forcing breakout strategies into it produces false breaks.' }
      ]
    },

    {
      title: 'The Asian range, and why your stop keeps getting hit',
      slides: [2],
      teach: {
        lead: [
          "This lesson explains something that makes a lot of beginners genuinely angry, and I want to take the anger out of it because underneath there's a useful idea.",
          "During Tokyo, price usually drifts in a **fairly tight band** — a clear high and a clear low with not much happening between them. Then London arrives with real volume and pushes out of that band.",
          "So a very popular approach is: mark the Asian high and low, wait for London, trade the break.",
          "Here's what happens over and over. Price pushes just past the edge of the range — far enough that everyone trading the break gets in and everyone trading the other way gets stopped out — and then it **turns straight around** and goes the other way.",
          "People conclude their broker is watching them personally. It isn't. The explanation is much simpler and much more useful."
        ],
        terms: [
          { term: 'Asian range',
            plain: 'The high and low that build up during the quiet Tokyo hours.',
            like: 'The tide mark left overnight. Obvious, and everybody sees the same line.' },
          { term: 'Breakout',
            plain: 'Price pushing beyond the edge of a range.',
            like: 'A crowd finally pushing through a gate. Sometimes they all pour out; sometimes the first few get shoved back.' },
          { term: 'False break',
            plain: 'Price pushing past the edge, then immediately reversing back inside.',
            like: 'A queue surging forward because someone shouted "it\'s open", then shuffling back when it turns out it is not.' },
          { term: 'Liquidity pool',
            plain: 'A place where lots of stop orders are sitting, because lots of people chose the same obvious level.',
            like: 'The one free car park everyone knows about. It is not a secret, which is exactly the point.' }
        ],
        close: [
          "Here's the reframe. **Everybody can see the same range.** So everybody puts their stop just beyond the same edge. Thousands of orders end up sitting in a small band of price.",
          "Now think about someone who needs to buy a genuinely large amount. They can't just buy — there aren't enough sellers sitting there at a quiet moment. But if price pushes through that edge, every one of those stops fires, and each firing stop is somebody being forced to sell. **Suddenly there's exactly the volume of sellers they needed.**",
          "Nobody hunted you. **You put your stop where everyone else put theirs, and price goes where the orders are.** That's it.",
          "Which also explains why a *failed* break so often runs further and faster than a successful one. Everyone who bought the break now has a stop sitting in the path of the reversal, and every one of those stops adds fuel on the way down.",
          "You don't have to trade this. But from now on, when you place a stop, ask yourself one question: **is this exactly where everyone else would put it?** If the answer is yes, consider giving it a bit more room."
        ]
      },
      check: [
        { q: 'Why does the first break of the Asian range so often fail?',
          options: ['Brokers hunt individual stops', 'The range extremes are obvious to everyone, so stops cluster just beyond them and price is drawn to that resting liquidity', 'London always reverses Asia', 'Indicators are unreliable at that hour'],
          a: 1,
          why: 'Everyone sees the same range and places stops in the same zone. Pushing through fills a large volume of resting orders — which is exactly what a big participant needs to get in. Nobody targeted you personally.' },
        { q: 'A failed breakout that reverses hard often produces:',
          options: ['A slow drift sideways', 'A faster, further move than a successful break, because trapped traders must exit', 'An exact return to the level and nothing more', 'Lower volatility'],
          a: 1,
          why: 'Trapped breakout traders have stops sitting in the reversal\'s path. Their forced exits add fuel on top of the traders deliberately positioning against the break.' }
      ]
    },

    {
      title: 'What the quiet hours actually cost you',
      slides: [3, 4],
      teach: {
        lead: [
          "Two numbers move together through the day, and once you see how, you'll understand why trading at 3am is worse than it looks.",
          "**When few people are trading, the spread widens.** Fewer people means the gap between buying and selling price grows. **And when few people are trading, price doesn't travel far either.** Not much happens.",
          "So the quiet hours are bad twice over: **you pay more to reach less**.",
          "Put numbers on it. A 20-pip target at 14:00 UTC might cost you 1 pip of spread — 5% of what you're going for. The same target at 03:00 costs 3 pips, and the market may only be offering half the movement anyway. Suddenly you're paying 30% of the move just to be in it.",
          "That's the difference between a strategy that works and the identical strategy that doesn't. **Same setup, same rules, different hour.**"
        ],
        terms: [
          { term: 'Average daily range (ADR)',
            plain: 'How far, on a typical day, a pair travels from its low to its high.',
            like: 'Knowing your car does about 400 miles on a tank. Not a rule — a sense of what is normal.' },
          { term: 'Volatility',
            plain: 'How much price is moving about.',
            like: 'How choppy the sea is. Choppy is not the same as going somewhere.' },
          { term: 'Follow-through',
            plain: 'Whether a move keeps going after it starts, rather than snapping back.',
            like: 'The difference between a push that shifts the sofa and a push that just rocks it.' }
        ],
        close: [
          "The second habit here is **average daily range**, and it's the cheapest reality check in trading.",
          "If EUR/USD typically covers about 70 pips in a day, then a 150-pip target on a trade you plan to close today is a fantasy on most days. Not impossible — just not what usually happens.",
          "More usefully: if it's lunchtime and price has already covered 65 of those 70 pips, **the easy part is over.** That doesn't mean it must reverse — it means the case for another big move in the same direction is weaker than it feels while you're watching it run.",
          "ADR is an average, not a wall. Big trend days blow straight through it, and those are the days worth catching. But it stops you setting targets that the market almost never delivers, and it tells you when to close the laptop.",
          "One last thing about volatility, because the word gets used carelessly. **More volatility is not automatically better.** Price thrashing about without going anywhere just means you get stopped out more often. What you actually want is **range with follow-through** — movement that keeps going. That's a narrower and rarer thing than 'volatility', and it lives in specific hours."
        ]
      },
      check: [
        { q: 'Spread is 1 pip at 14:00 UTC and 3 pips at 03:00. Why does this matter more than it looks?',
          options: ['It does not — 2 pips is trivial', 'Range collapses overnight too, so you pay three times as much to access a fraction of the opportunity', 'Commission triples at night', 'Stops are rejected overnight'],
          a: 1,
          why: 'The two effects compound. Cost relative to available range can rise five or ten times, which is why spread must always be compared to expected range rather than judged alone.' },
        { q: 'EUR/USD averages 70 pips a day and has moved 65 by midday. This suggests:',
          options: ['A trend day is guaranteed', 'The typical daily range is largely spent, so intraday continuation targets deserve scepticism', 'Price must now reverse', 'ADR is irrelevant intraday'],
          a: 1,
          why: 'ADR is an average, not a ceiling — trend days exceed it routinely. But once most of it is spent, the case for another large continuation move weakens. It argues for smaller targets, not for fading.' }
      ]
    },

    {
      title: 'Choosing your window around your actual life',
      slides: [5, 6, 7],
      teach: {
        lead: [
          "Now the practical part, and I want to be straight with you because most courses skip it.",
          "**You probably can't trade the overlap.** It lands in the middle of the working day for a lot of people. That's a real constraint and it is not a failure — but it does mean something, and the something is not 'try harder'.",
          "**Match the strategy to the hours you actually have.**",
          "If Tokyo is your window, trade ranges. Stop trying to catch trends that aren't in those hours to be caught. If evenings are your window, work off the daily chart and leave orders waiting rather than forcing intraday trading into hours that don't contain any.",
          "The wrong response — and it's the common one — is to keep the strategy and trade it badly in the wrong hours. That produces a long, expensive record of false breaks, and it looks like the strategy failing when it's the timing failing."
        ],
        terms: [
          { term: 'Trading window',
            plain: 'The hours you have decided in advance that you will trade, written into your plan.',
            like: 'Gym opening hours you actually keep to. The commitment is the point, not which hours.' },
          { term: 'Rollover',
            plain: 'The daily moment, usually around 21:00–22:00 UTC, when overnight interest is applied and the market briefly thins out.',
            like: 'A shop cashing up. Still open, but nobody is really serving.' },
          { term: 'Pending order',
            plain: 'An instruction left waiting at a price, so you do not have to be watching.',
            like: 'A note for the milkman. It happens whether you are awake or not.' }
        ],
        close: [
          "Whichever window you pick, **pick one and stick to it.** Consistency matters more than the choice itself, because you cannot learn a market you only glance at randomly. Someone who watches the same two hours every day for a month knows those hours. Someone who watches whenever they're free for a month knows nothing.",
          "Write your window into your plan and treat trades outside it as rule breaks. Not disasters — rule breaks, which you note down.",
          "And a short list of hours to simply be absent for:",
          "**Rollover.** Spreads can go from 1 pip to 30 for a minute or two while books are squared. A tight stop sitting in there gets taken by the spread alone, with the market never actually moving. It's a genuinely maddening way to lose.",
          "**Sunday open**, which is thin and gappy and unrepresentative. **The minute either side of a big news release**, where the spread balloons and direction is a coin flip. **Friday afternoon**, which is people flattening positions before the weekend rather than anyone having a view. And **public holidays**, where a quiet-looking market can move violently on almost nothing.",
          "That's timing done. From here we start actually reading charts — and every setup you bring me from now on, I want you to tell me which session it happened in."
        ]
      },
      check: [
        { q: 'You can only trade during Tokyo. The sensible response is:',
          options: ['Trade breakouts anyway and accept worse results', 'Adopt range and mean-reversion approaches that suit those conditions', 'Give up trading', 'Increase size to compensate for smaller ranges'],
          a: 1,
          why: 'Match the strategy to the hours you actually have. Increasing size to compensate for a smaller range is the single worst available response.' },
        { q: 'Why avoid leaving a tight stop through the daily rollover window?',
          options: ['Trading is suspended', 'Spreads can widen dramatically for a minute or two, triggering stops on spread alone', 'Swap is only charged if a stop exists', 'Orders queue and execute late'],
          a: 1,
          why: 'Around 21:00–22:00 UTC liquidity thins as books are squared. A stop sitting inside that widened spread can fire without the underlying market moving at all.' }
      ]
    }
  ];
})();
