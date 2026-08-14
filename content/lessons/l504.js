/* N1 Forex Academy — lessons for Module 504 (Crypto track).

   VOICE: Jonathan talking to one student. Funding is framed as the replacement
   for expiry, which lands instantly for anyone who did the roll-cost lab in
   module 303. "High leverage is a shorter fuse, not a bigger engine" is the
   sentence to carry away, and socialised losses get named because they have no
   equivalent in traditional markets. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[504] = [
    {
      title: 'A future that never expires',
      slides: [0, 1],
      teach: {
        lead: [
          "Most crypto trading with leverage happens on an instrument called a **perpetual future** — a perp. It's worth understanding properly, because it's where the leverage from the last module actually lives.",
          "Think back to module 303. **Every futures contract died on a published date**, and to keep your exposure you had to roll — selling one month, buying the next, paying the difference every time.",
          "**A perpetual has no expiry at all.** You can hold it indefinitely. No rollover, no contract months, no first notice day.",
          "Which raises an obvious question. **If it never settles against anything, what stops its price drifting away from the actual asset entirely?**",
          "**The funding rate.**",
          "It's a payment made repeatedly through the day — usually every eight hours — **between the people who are long and the people who are short.**",
          "**Funding replaces expiry.** And that should tell you something immediately: **the cost of holding didn't disappear when rollover did. It changed shape.**"
        ],
        terms: [
          { term: 'Perpetual future (perp)',
            plain: 'A futures-style contract with no expiry, kept near the spot price by funding payments.',
            like: 'A rolling monthly contract that renews itself, with a fee instead of paperwork.' },
          { term: 'Funding rate',
            plain: 'A periodic payment between longs and shorts that keeps the perpetual tethered to spot.',
            like: 'A congestion charge on whichever side is crowded.' },
          { term: 'Mark price',
            plain: 'A smoothed reference price used to decide liquidations, resistant to one venue\'s spike.',
            like: 'An average of several clocks, so one broken clock cannot set your alarm off.' },
          { term: 'Liquidation price',
            plain: 'The price at which your position is closed automatically because margin is exhausted.',
            like: 'The line on the fuel gauge where the engine actually stops.' }
        ],
        close: [
          "So who pays whom? It follows from the crowding.",
          "**If the perpetual is trading above spot, longs are crowded — so longs pay shorts.**",
          "**If it's trading below spot, shorts are crowded — so shorts pay longs.**",
          "The logic is neat: making the crowded side pay makes it more expensive to hold, **which pulls the price back toward spot.** That's the tether.",
          "Now the practical bit, and it's the module 303 lesson arriving in new clothes.",
          "**Funding is charged on your full position value, several times a day.** A rate that looks like a tiny fraction of a percent per period is not tiny once you multiply it by three payments a day and then by a year.",
          "**Annualise it. Once. Properly.** Most people never do, and it's the same reason nobody costed their rolls in the futures track — the number never appears as a line item that says \"fee\".",
          "**Persistently high funding can cost you more than the move you were waiting for.** If you're on the crowded side of a strong trend, you are paying, continuously, for the privilege of agreeing with everybody else."
        ]
      },
      check: [
        { q: 'A perpetual future has no expiry. What keeps its price close to spot?',
          options: ['The exchange sets it manually', 'The funding rate — a periodic payment between longs and shorts that makes the crowded side more expensive to hold', 'Nothing; the prices drift apart', 'Arbitrage is impossible'],
          a: 1,
          why: 'Funding replaces expiry. The cost of holding did not vanish when rollover disappeared — it changed shape, exactly as roll cost worked in module 303.' },
        { q: 'The perpetual is trading above spot. Who pays funding?',
          options: ['Shorts pay longs', 'Longs pay shorts', 'Both pay the exchange', 'Nobody, until expiry'],
          a: 1,
          why: 'Above spot means longs are crowded, so longs pay. That makes the crowded side more expensive to hold and pulls the price back toward spot — which is the whole mechanism.' }
      ]
    },

    {
      title: 'A shorter fuse, not a bigger engine',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "**Liquidation is module 302's stop-out, with the warnings removed.**",
          "In futures, your losses were debited nightly, your balance fell, and once it dropped below maintenance you got a **margin call** — a demand with a deadline measured in hours. Uncomfortable, and at least a window.",
          "**Here there is no call, no deadline, and no opportunity to wire funds.** Margin falls below maintenance and the position closes **in seconds.**",
          "**And there's usually a liquidation fee on top of the loss.**",
          "Two details worth knowing. Liquidation triggers on the **mark price** — a smoothed reference rather than your own venue's last trade. That protects you from one exchange's momentary spike, and it means your screen isn't the whole story.",
          "And remember from last module **when** liquidations happen: during a cascade, on a thin book. **Which is precisely when fills are at their worst.**",
          "So the honest summary: **your stop only protects you if it fills.** In a cascade, price can travel through your stop and reach your liquidation level within seconds."
        ],
        terms: [
          { term: 'Isolated margin',
            plain: 'Margin allocated to one position only, so its loss cannot reach the rest of your account.',
            like: 'Watertight compartments in a ship. One floods; the ship stays up.' },
          { term: 'Cross margin',
            plain: 'Your whole balance supports every position. One bad position can consume everything.',
            like: 'One big open hold. Water anywhere is water everywhere.' },
          { term: 'Insurance fund',
            plain: 'A venue buffer covering shortfalls when a liquidation fills worse than the liquidation price.',
            like: 'A contingency pot. Fine until the day it is not big enough.' },
          { term: 'Socialised loss',
            plain: 'Profitable traders having gains clawed back to cover shortfalls the insurance fund cannot.',
            like: 'Everyone at the table chipping in because one player could not pay.' }
        ],
        close: [
          "Now the sentence I'd like you to leave this module with.",
          "**High leverage is a shorter fuse, not a bigger engine.**",
          "**At 100x, roughly a 1% adverse move exhausts your margin.** Crypto moves 1% routinely — most days, both directions, often before breakfast.",
          "And notice this is **module 3's lesson, completely unchanged.** Higher leverage does not increase your profit on a given position size. **It shortens the distance to the point where you stop having a position at all.**",
          "So here's the rule that replaces quoting leverage numbers:",
          "**Size from the liquidation price, not from the leverage.** Ask the only question that matters: **how far can price move before this position ends — and is that further than this asset moves on an ordinary day?**",
          "If an ordinary day would end your position, the leverage is wrong. Not risky. **Wrong.**",
          "Two more things. **Use isolated margin while you're learning.** It confines a loss to one position instead of letting it eat the whole account. Watertight compartments — the ship survives one flooded hold.",
          "And one mechanism with no equivalent in any traditional market, so it catches people completely off guard.",
          "**If a liquidation fills worse than the liquidation price, somebody has to absorb the shortfall.** Venues hold an **insurance fund** for that. But **if the fund runs out, some venues apply socialised losses** — profitable traders have gains clawed back to cover it.",
          "**Which means on the very worst days, on some platforms, being right does not guarantee being paid.**",
          "It's published. It's in the venue's documentation. **Read it before you need it**, because you won't be reading anything on the day it matters."
        ]
      },
      check: [
        { q: 'At 100x leverage, roughly how far can price move against you before liquidation?',
          options: ['About 10%', 'About 1%', 'About 25%', 'It depends only on where your stop is'],
          a: 1,
          why: 'Roughly 1% — a move crypto makes routinely, most days, in both directions. High leverage is a shorter fuse, not a bigger engine; module 3\'s lesson is completely unchanged here.' },
        { q: 'How does crypto liquidation differ from the futures stop-out you studied?',
          options: ['It is identical', 'It is faster, has no margin call or deadline, usually carries a fee, and happens on a thinner book', 'It always fills at your stop price', 'It only applies to short positions'],
          a: 1,
          why: 'In futures you got a call with a deadline measured in hours. Here the position closes in seconds, on a thin book, during a cascade — precisely when fills are at their worst.' }
      ]
    }
  ];
})();
