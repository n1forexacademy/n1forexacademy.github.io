/* N1 Forex Academy — lessons for Module 3.

   VOICE: Jonathan talking to one student. This is the module where accounts
   actually die, so the analogies do real work: leverage as permission rather
   than borrowed money, margin as a security deposit, the stop-out as the
   broker deciding for you. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[3] = [
    {
      title: 'Getting in and getting out',
      slides: [0, 1],
      teach: {
        lead: [
          "There are only really three ways to enter a trade, and once you see what each one is *for*, you'll never mix them up again.",
          "**Buy it now.** You want in, at whatever the current price is. That's a market order.",
          "**Only if it gets cheaper.** You've decided the price is too high today, so you leave an instruction: if it drops to my number, buy it then. That's a limit order.",
          "**Only if it proves me right first.** You want to see the price actually push through a level before you commit. So you leave an instruction to buy *above* where it is now — deliberately paying more, in exchange for evidence. That's a stop order.",
          "Think of buying a house. Market order is offering the asking price today. Limit order is telling the agent \"call me if they drop it to £280,000\". Stop order is the odd one — it's saying \"if three other buyers pile in and the price starts climbing, get me in before I miss it entirely\"."
        ],
        terms: [
          { term: 'Market order',
            plain: 'Buy or sell right now at whatever price is available.',
            like: 'Paying the asking price. You definitely get it — you just might not love the price.' },
          { term: 'Limit order',
            plain: 'An instruction to trade only at your price or better.',
            like: 'A bid on a house below asking. You might get it cheap. You might never get it at all.' },
          { term: 'Stop order',
            plain: 'An instruction that triggers once price passes a level, used to enter on momentum or to exit a loser.',
            like: 'A tripwire. Nothing happens until price crosses it, then it fires.' },
          { term: 'Stop loss',
            plain: 'A resting order that closes a losing trade at a level you chose in advance.',
            like: 'Deciding before the auction what your absolute maximum bid is — while you are still calm.' }
        ],
        close: [
          "Now the rule that saves people the most money, and it's a bit lopsided on purpose.",
          "**Be patient getting in. Be certain getting out.**",
          "Waiting for your price to come to you costs nothing if it never arrives — you just don't trade. But *hoping* for a better price to get out of a losing trade is a different thing entirely. The market isn't coming back to you; that's precisely what a losing trade means.",
          "So never use a limit order to escape a loser. Use a stop, or close it at market. A small planned loss turns into a large unplanned one exactly at the moment you decide to wait for a nicer exit."
        ]
      },
      check: [
        { q: 'Price is 1.0850. You only want to buy if it pushes above 1.0900 first, to prove the move is real. Which order?',
          options: ['Buy limit at 1.0900', 'Buy stop at 1.0900', 'Market order right now', 'Sell stop at 1.0900'],
          a: 1,
          why: 'You are deliberately agreeing to pay more than today\'s price in exchange for evidence that the move is real. That is a stop order. A limit would mean the opposite — waiting for a better price.' },
        { q: 'Your trade is losing. Why should you not use a limit order to get out?',
          options: ['Limit orders are not allowed for exits', 'It may never fill — you would be waiting for a price the market is moving away from, while the loss grows', 'Limits cost more in commission', 'Limits execute too fast'],
          a: 1,
          why: 'A limit only fills at your price or better, and a losing trade is by definition moving the other way. Be patient getting in, certain getting out — waiting for a nicer exit is how a small planned loss becomes a large unplanned one.' }
      ]
    },

    {
      title: 'What leverage actually is (not what you think)',
      slides: [2, 3],
      teach: {
        lead: [
          "Almost everything you'll read about leverage online is wrong, so let me correct it now.",
          "**Leverage is not borrowed money. It is permission.**",
          "It's a rule about the minimum deposit your broker requires to hold a position. At 100:1, holding £100,000 worth of currency requires £1,000 set aside. That £1,000 isn't spent and isn't a fee — it's held while the trade is open and handed straight back when you close.",
          "Here's the part that surprises people. Take two traders with identical £1,000 accounts. Both buy exactly the same amount of EUR/USD. One is on 30:1 leverage, the other on 500:1. Price drops 20 pips.",
          "**They lose exactly the same amount.** Every penny the same. The leverage setting changed nothing about the outcome, because they placed the same trade."
        ],
        terms: [
          { term: 'Leverage',
            plain: 'The ratio setting your broker uses to decide the minimum deposit for a position. Permission, not a loan.',
            like: 'A gym letting you load 200kg on the bar. It does not make the weight lighter — it just means nobody stops you loading it.' },
          { term: 'Position size',
            plain: 'How much you actually bought or sold. This is the thing that decides your profit and loss.',
            like: 'How much weight you actually put on the bar. This is what your back feels.' }
        ],
        close: [
          "So if leverage doesn't change your loss, why does everyone say it's dangerous? And why do regulators cap it?",
          "**Because it removes the thing that used to stop you.** With £500 and no leverage, you could buy about £500 of currency — small trade, small outcomes. With 500:1, that same £500 lets you control £250,000.",
          "At that size, a 20-pip move — something EUR/USD does several times before lunch — wipes out the entire account.",
          "The danger was never the mechanism. **The danger is the temptation.** Leverage doesn't make you lose more on a trade you already placed; it lets you place a trade you had no business placing.",
          "Which brings us to the only thing that actually controls your risk: **position size.** Not leverage. Size. Everything in the risk module builds on that distinction, so make sure it's solid before you move on."
        ]
      },
      check: [
        { q: 'Two traders open identical trades on the same pair. One has 30:1 leverage, the other 500:1. Price moves 30 pips against both. Who loses more?',
          options: ['The 500:1 trader', 'The 30:1 trader', 'Neither — identical trades lose identical amounts', 'It depends on their balances'],
          a: 2,
          why: 'Leverage only sets the minimum deposit required to hold a position. Both placed the same trade, so both lose the same. Leverage is permission; position size is what decides your outcome.' },
        { q: 'So why do regulators cap leverage for retail traders?',
          options: ['Because it directly multiplies losses', 'Because it removes the natural limit on how large a position a small account can take', 'To increase broker profits', 'To slow down trading'],
          a: 1,
          why: 'The mechanism is harmless; the temptation is not. High leverage lets someone with £500 control £250,000, where a completely ordinary move wipes them out. Capping it caps the worst position an inexperienced trader can take.' }
      ]
    },

    {
      title: 'Margin, and the one number the broker watches',
      slides: [4, 5],
      teach: {
        lead: [
          "Your account screen shows four numbers, and most beginners watch the wrong one.",
          "**Balance** is your money from trades you've already closed. It sits completely still while a trade is open, no matter what the market does. That's why watching it feels reassuring and is useless.",
          "**Equity** is balance plus or minus whatever your open trades are currently worth. This moves every second. **This is what you actually have.**",
          "**Used margin** is the deposit locked up by your open positions — like the security deposit on a rented flat. Not spent, not gone, just not available while you're in.",
          "**Free margin** is equity minus that deposit. It's your breathing room."
        ],
        terms: [
          { term: 'Balance',
            plain: 'Money from closed trades only. Does not move while a trade is open.',
            like: 'Your bank statement from last month. Accurate, and it tells you nothing about today.' },
          { term: 'Equity',
            plain: 'Balance adjusted for open trades. Your real, live account value.',
            like: 'Your actual bank balance right now, including the payment that just went out.' },
          { term: 'Used margin',
            plain: 'The deposit held while your positions are open.',
            like: 'A rental deposit. Still yours, just not spendable until you move out.' },
          { term: 'Margin level',
            plain: 'Equity divided by used margin, shown as a percentage. The number the broker acts on.',
            like: 'The fuel gauge. You can ignore it for a long time and then it matters enormously all at once.' }
        ],
        close: [
          "**Margin level** is the one to watch, and here's the thing about it that catches people.",
          "It's equity ÷ used margin. When a trade goes against you, equity falls — but used margin stays roughly where it was. So the number on top shrinks while the number underneath doesn't. **The percentage drops much faster than it feels like it should.**",
          "Say you're sitting at 370%. That sounds like miles of room. But because only the top of that fraction is moving, it can reach the danger zone far quicker than you'd guess from watching your profit figure.",
          "Get into the habit now: when a trade is open, look at margin level, not at the profit number. Profit tells you how you feel. Margin level tells you how much rope you have left."
        ]
      },
      check: [
        { q: 'While a trade is open, which number tells you what you actually have?',
          options: ['Balance', 'Equity — balance adjusted for your open trades', 'Used margin', 'Free margin'],
          a: 1,
          why: 'Balance only updates when a trade closes, so it sits still while you are losing. Equity moves with your open positions and is what the broker judges you on.' },
        { q: 'Your equity is £1,200 and your used margin is £800. What is your margin level?',
          options: ['66.7%', '150%', '£400', '40%'],
          a: 1,
          why: '(1,200 ÷ 800) × 100 = 150%. Notice how close that already is to trouble — because losses shrink the top of the fraction while the bottom stays put, this figure falls much faster than the profit number suggests.' }
      ]
    },

    {
      title: 'Exactly how an account dies',
      slides: [6, 7, 8, 9],
      teach: {
        lead: [
          "This is the sequence that ends most trading accounts. It's completely mechanical, and once you've seen it written out you'll recognise it coming.",
          "As your margin level falls, you cross two lines. At the first — usually **100%** — the platform shows a warning. It's called a margin call, which is a leftover from decades ago when a broker genuinely telephoned you. **Nobody calls. Nobody emails.** A number changes colour on a screen you might not be looking at.",
          "If it keeps falling to the second line — often **50%** — the broker stops asking. It closes your positions for you, starting with the biggest loser, at whatever price happens to exist at that moment.",
          "You get no say in the timing. No say in the price. If it happens while you're asleep, you find out afterwards.",
          "It's the repossession model. Miss enough payments and nobody negotiates with you — a process simply runs."
        ],
        terms: [
          { term: 'Margin call',
            plain: 'A warning that your margin level has fallen too low. Just an on-screen alert.',
            like: 'The fuel light. Nobody pulls you over — it is on you to notice.' },
          { term: 'Stop out',
            plain: 'The broker automatically closing your positions because margin level fell too far.',
            like: 'The car simply stopping. You are no longer part of the decision.' },
          { term: 'Slippage',
            plain: 'Getting a worse price than you asked for, because price moved between order and fill.',
            like: 'Reaching the checkout and the shelf price has changed. Usually pennies; occasionally not.' },
          { term: 'Gap',
            plain: 'Price jumping from one level to another with no trading in between — over a weekend, or on sudden news.',
            like: 'Falling asleep with the score at 1-0 and waking to 4-0. You never saw the goals and could not react to any of them.' }
        ],
        close: [
          "One last thing, and it corrects something almost everyone believes.",
          "**A stop loss is not a guarantee.** It's an instruction to sell as soon as your level trades — but it does not reserve that price for you. If the market gaps clean over your level, you're filled wherever it lands, which can be far worse than you planned.",
          "This isn't a reason to skip stops. Most of the time they work exactly as intended, and trading without one is far worse. It's a reason to size your positions on the assumption that **the exit could be worse than planned** — because occasionally it will be.",
          "Two things to do before your next session. Find your own broker's margin call and stop-out levels — they're in your account terms, and almost nobody knows theirs. Then, in the drill that follows this module, you'll deliberately blow up a practice account and watch this whole sequence happen. It's the cheapest possible way to learn it."
        ]
      },
      check: [
        { q: 'What actually happens when you hit a margin call?',
          options: ['The broker telephones you', 'Trading is frozen until you deposit', 'A warning appears on screen — and if margin level keeps falling, positions are closed automatically, largest loser first', 'Everything closes immediately'],
          a: 2,
          why: 'Nobody calls; the name is a leftover from decades ago. You get an on-screen warning, and if the level keeps dropping the broker closes positions for you at whatever price exists — no say in the timing or the price.' },
        { q: 'Your stop loss sits at 1.0800, but Monday opens at 1.0710 after weekend news. What happens?',
          options: ['You are filled at exactly 1.0800', 'The trade is cancelled', 'You are filled near 1.0710 — the stop is an instruction to sell, not a reserved price', 'The broker covers the difference'],
          a: 2,
          why: 'If no trading happened between your level and the new price, there was nothing to fill you at. Stops still belong on every trade — but size your positions assuming the exit could be worse than planned.' }
      ]
    }
  ];
})();
