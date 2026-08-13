/* N1 Forex Academy — lessons for Module 7.

   VOICE: Jonathan talking to one student. The whole module hangs off one idea:
   a level is inventory, not magic. Once that lands, weakening-with-tests, role
   reversal, supply zones and stop placement all follow from it rather than
   having to be memorised separately. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[7] = [
    {
      title: 'Why levels work at all',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Draw a line at an old high on any chart and price will very often react when it comes back. Beginners find this spooky, and the usual explanation — \"the market remembers\" — explains nothing.",
          "So here's what's actually there.",
          "Picture a second-hand car pitch. A car was up for £5,000 last month and didn't sell. That price isn't magic. But it does tell you something real: **there were people who said no at £5,000.** Some of them are still around, still thinking the same thing.",
          "An old high on a chart is exactly that. Three different groups have orders sitting there:",
          "**People who sold there last time** and thought it was a good price — they'll do it again. **People who bought earlier and got trapped** as price fell — they want out at break-even, and break-even is that level. And **the stop orders of everyone currently betting on a fall** — those fire as buy orders if price gets there.",
          "That pile of waiting orders is why price reacts. **The level is a record of where decisions got made.**"
        ],
        terms: [
          { term: 'Support',
            plain: 'An area where buying has previously been enough to stop a fall.',
            like: 'A shelf. Things land on it rather than continuing down.' },
          { term: 'Resistance',
            plain: 'An area where selling has previously been enough to stop a rise.',
            like: 'A ceiling. You can get through it, but not by accident.' },
          { term: 'Zone',
            plain: 'A band of price rather than one exact number, drawn as a rectangle.',
            like: '"Meet me by the station" rather than "meet me at the third lamppost".' },
          { term: 'Resting order',
            plain: 'An order sitting and waiting at a price for someone to trade against it.',
            like: 'Stock on a shelf. There until somebody buys it.' }
        ],
        close: [
          "Once you see a level as **inventory**, everything else in this module follows — including something that contradicts what you'll read everywhere else.",
          "**Levels get weaker each time they're tested, not stronger.**",
          "Think of a bakery with twenty loaves. The first rush buys some. The second rush buys more. By the fifth rush there's nothing left, and the people who show up walk straight through the empty shop. **Each test consumes some of the orders that were making the level work.**",
          "So a level tested five times and \"holding\" isn't proof of strength. Very often it means the other side has been quietly eating through the inventory, and the next push goes clean through.",
          "Two practical rules while you're marking up a chart:",
          "**Draw rectangles, not lines.** Price almost never turns at exactly the same tick twice. Run the box from the wicks to the bodies of the candles that reacted there.",
          "**Mark from the higher timeframe downward, and keep it to three to five levels.** A daily level matters more than a 15-minute one, always — more people can see it. And if you've got fifteen levels on a chart, you've effectively got none, because price is always near one of them."
        ]
      },
      check: [
        { q: 'Price reacts at a previous swing high because:',
          options: ['The number has mathematical significance', 'Resting orders accumulate there — earlier sellers, break-even buyers, and stops from shorts', 'Brokers program reactions', 'It is purely self-fulfilling with no other cause'],
          a: 1,
          why: 'Levels work because of order inventory. That framing also explains why they weaken with repeated testing — each test consumes some of the resting orders.' },
        { q: 'A level has been tested five times and held each time. This suggests:',
          options: ['It is extremely strong and will hold again', 'Each test consumed resting orders, so it is likely weaker now and increasingly likely to break', 'It should be redrawn', 'Nothing can be inferred'],
          a: 1,
          why: 'This contradicts the common belief that more touches means stronger. Repeated tests without a strong move away often mean the opposing side is absorbing supply.' }
      ]
    },

    {
      title: 'When the ceiling becomes the floor',
      slides: [3, 4],
      teach: {
        lead: [
          "When a level breaks, it doesn't stop existing. It **swaps jobs**.",
          "Resistance that gets broken tends to become support. Support that gets broken tends to become resistance. Climb through a hatch in the ceiling and the thing that was above you is now the floor you're standing on.",
          "The reason is the same order-inventory idea as before, just one step on.",
          "**The people who sold at that level are now trapped.** Price went through and they're losing. Their exit is to buy back — and the least painful place to do that is right at the level, where they'd break even.",
          "**And the people who missed the breakout are waiting.** They watched it go, they didn't want to chase, and they've decided they'll buy if it comes back to the level.",
          "Both groups want to buy in the same place. That's why the retest of a broken level is one of the cleanest entries you'll get: **the location is defined, and so is the point where you're wrong.**"
        ],
        terms: [
          { term: 'Role reversal (flip)',
            plain: 'A broken level switching from resistance to support, or the other way round.',
            like: 'A ceiling becoming a floor once you have climbed through it.' },
          { term: 'Retest',
            plain: 'Price coming back to touch a level it has just broken.',
            like: 'Testing the ice you just stepped onto before putting your weight down.' },
          { term: 'Demand zone',
            plain: 'The area a sharp rally launched from, suggesting unfilled buying is still waiting there.',
            like: 'A shop that sold out in an hour. Somebody clearly wanted a lot of it.' },
          { term: 'Supply zone',
            plain: 'The area a sharp decline launched from, suggesting unfilled selling is still waiting there.',
            like: 'The same thing in reverse — a wall of stock that came out of nowhere.' }
        ],
        close: [
          "Two qualifiers, and they do real work:",
          "**The break should be impulsive** — price leaving decisively, not drifting through. And **the retest should be prompt.** A slow grinding break that immediately sags back is usually a failed break, not a flip, and treating it as a flip is a good way to buy something that's about to fall.",
          "**Supply and demand zones** are the same idea from a different angle. If a rally left an area violently, that usually means somebody had a large order they couldn't get filled all at once. If price comes back, **the rest of that order may still be sitting there.**",
          "The quality signal is **how hard price left**. A lazy drift away means a weak zone; you're guessing. A violent departure means something real happened.",
          "And by the same inventory logic as before: **a fresh zone that's never been revisited is the strongest one.** Every return eats into whatever was left. You'll also hear this called an 'order block' — same observation, different vocabulary, and you don't need both names."
        ]
      },
      check: [
        { q: 'Resistance at 1.0900 breaks impulsively and price returns to it two hours later. Most likely:',
          options: ['The break failed and price will keep falling', 'A role reversal — old resistance being retested as support', 'The level was never valid', 'Price is ranging'],
          a: 1,
          why: 'An impulsive break with a prompt retest is the classic flip. Both qualifiers matter: a grinding break with a slow return is more often a failed break.' },
        { q: 'Which supply or demand zone tends to be strongest?',
          options: ['One tested many times', 'A fresh zone that has not been revisited', 'The oldest one on the chart', 'One drawn on the lowest timeframe'],
          a: 1,
          why: 'Each return consumes remaining inventory. A fresh zone still has its unfilled orders intact — the same logic as levels weakening with repeated tests.' }
      ]
    },

    {
      title: 'Where the stops sit — and where to put yours',
      slides: [5, 6],
      teach: {
        lead: [
          "We touched this in the sessions module. Now let's make it something you act on every time you place a trade.",
          "Ask yourself where the stop orders are on any chart. It isn't a mystery.",
          "**Just above an obvious high** sit the stops of everyone betting on a fall, plus the buy orders of everyone waiting to trade the breakout. **Just below an obvious low**, the mirror image. And **round numbers** — 1.1000, 150.00 — collect far more orders than the numbers either side of them, purely because humans like round numbers.",
          "Now put yourself in the position of someone who has to buy a genuinely large amount. They can't just buy at the market — there aren't enough sellers standing there. **They need a crowd of sellers to appear.**",
          "Push price below that obvious low and every stop from every long position fires. Each one is a forced sale. **The sellers they needed have just been manufactured.**",
          "So the sequence you keep seeing — push past the obvious level, then reverse — isn't anyone plotting against you. **It's the arithmetic of needing someone to trade with.**"
        ],
        terms: [
          { term: 'Liquidity pool',
            plain: 'A price area where a lot of stop orders are likely bunched together.',
            like: 'The one free car park everyone knows about. Not a secret — that is the whole point.' },
          { term: 'Stop run (sweep)',
            plain: 'A push just past an obvious level that sets off the clustered stops, then turns back.',
            like: 'Shaking a tree to see what falls out.' },
          { term: 'Round number',
            plain: 'A price like 1.1000 or 150.00, where orders bunch up for no reason other than that humans like round numbers.',
            like: 'Prices ending in 99p. Nothing mathematical about it — people just behave that way.' },
          { term: 'Equal highs / lows',
            plain: 'Two or more peaks or troughs at almost the same price. An unusually obvious target.',
            like: 'A row of identical windows. Easy to point at, so everyone points at the same one.' }
        ],
        close: [
          "Two things to change in how you trade, starting now.",
          "**Don't buy the breakout above equal highs just because it broke.** When you do that, you're the person supplying the sellers to somebody who wanted to sell. Wait and see whether the break **holds** or snaps straight back.",
          "A sweep that reverses hard back into the range is a genuinely strong signal — the breakout failed, and everyone who bought it now has to get out. **Failed breaks routinely run further and faster than successful ones**, because forced exits are added on top of the people deliberately trading the other way.",
          "**And put your stop beyond the liquidity, not inside it.**",
          "If there's an obvious low at 1.0850 and a round number at 1.0800, a stop at 1.0845 is sitting right in the middle of the zone that gets swept. Give it room to sit past the cluster — or accept a smaller position so that a wider stop still risks the same amount of money. That's a trade-off you make deliberately, not a reason to trade bigger.",
          "This one adjustment removes a whole category of loss that feels like being cheated and is actually just placement."
        ]
      },
      check: [
        { q: 'Where should you avoid placing a stop?',
          options: ['Below a demand zone', 'Exactly at the round number just beyond an obvious high, where stops visibly cluster', 'On a higher-timeframe level', 'More than 20 pips from entry'],
          a: 1,
          why: 'Stops cluster just beyond obvious highs, lows and round numbers, and that concentration attracts a sweep. Measure typical sweep distance and sit beyond it.' },
        { q: 'A large participant needs to buy heavily. Where do they find sellers?',
          options: ['At the lowest price of the day', 'Where stops from long positions will fire, below an obvious low', 'By waiting for a quiet session', 'From their own broker'],
          a: 1,
          why: 'They need a counterparty. Clustered stops provide the volume. This is arithmetic, not conspiracy — and reframing it that way turns paranoia into a placement decision.' }
      ]
    },

    {
      title: 'Confluence that actually means something',
      slides: [7, 8],
      teach: {
        lead: [
          "\"Confluence\" just means several reasons pointing at the same place. It's a useful idea and it's abused constantly, so let me give you the test that separates the real thing from the fake.",
          "**Three witnesses who saw the same crash from three different streets is strong evidence.**",
          "**One witness telling you the same story three times is not.**",
          "That's the whole distinction. The question is never *how many* reasons you have — it's **how many of them are independent.**",
          "Real confluence looks like this: a 4-hour demand zone, an old resistance level that broke and should now act as support, and a round number, all landing in the same small area. Three genuinely separate reasons that happen to agree.",
          "Fake confluence looks like this: RSI is oversold, Stochastic is oversold, and MACD is turning up. That sounds like three. It's **one**. All three are calculated from the same closing prices — they agree because they're arithmetic variations of each other, not because three different things are true."
        ],
        terms: [
          { term: 'Confluence',
            plain: 'Two or more separate reasons pointing at the same area.',
            like: 'Three witnesses on three different streets. Their agreement means something.' },
          { term: 'Independent reason',
            plain: 'A reason that comes from different information, not a rearrangement of the same information.',
            like: 'A second witness — not the first one repeating himself.' },
          { term: 'Trigger',
            plain: 'The specific thing that tells you to enter now, as opposed to the reason this area is interesting.',
            like: 'The green light. Knowing your route is not the same as being told to go.' }
        ],
        close: [
          "The best locations usually have **two or three independent reasons**, not ten. If you've stacked ten, you've almost certainly counted the same thing repeatedly — and the effort of finding all ten is usually you talking yourself into something.",
          "Now the limit, which matters more than the technique:",
          "**Confluence improves your location. It does not improve your certainty.** It tells you where to look. It never tells you whether this particular trade will work. Plenty of beautiful three-reason setups fail, and that's normal rather than evidence you did something wrong.",
          "And the rule people break the most:",
          "**A great level with no trigger is not a trade.**",
          "Location and timing are two separate decisions and you need both. Finding a gorgeous zone and buying just because price arrived there — with no candle, no reaction, no confirmation — is how you end up long inside something that's still falling.",
          "Mark the level. Wait for it to do something. Then decide."
        ]
      },
      check: [
        { q: 'RSI oversold, Stochastic oversold and MACD turning up. How many independent confluences?',
          options: ['Three', 'Four, counting price', 'Essentially one — all three are momentum measures from the same price series', 'Zero'],
          a: 2,
          why: 'Independence is the whole point. Three oscillators computed from the same closes agree almost by construction — one observation counted three times.' },
        { q: 'A great level with no entry trigger is:',
          options: ['Still a trade', 'Not a trade — location and timing are separate decisions', 'A reason to enter at market', 'A reason to widen the stop'],
          a: 1,
          why: 'Confluence improves location, not certainty. It tells you where to look, never whether this particular trade will work.' }
      ]
    }
  ];
})();
