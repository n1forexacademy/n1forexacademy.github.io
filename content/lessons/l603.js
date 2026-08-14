/* N1 Forex Academy — lessons for Module 603 (Commodities track).

   VOICE: Jonathan talking to one student. The above-ground stock argument is
   what makes gold's behaviour obvious rather than mystical, and electricity is
   included as the cleanest proof that carry logic is a consequence of
   storability rather than a law. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[603] = [
    {
      title: 'Energy, metals, and why gold is the odd one',
      slides: [0, 1],
      teach: {
        lead: [
          "\"Commodities\" is a shelf, not an asset class. What's on it behaves so differently that treating it as one thing produces confident nonsense.",
          "**Energy** runs on **disruption**. Outages, storms, strikes, conflict, sanctions — supply vanishes without notice, and the demand side tracks how busy the economy is.",
          "One distinction worth having: **crude oil is an input, not a product.** Nobody puts crude in their car. It gets refined into petrol, diesel and the rest, and the gap between the crude price and the product price is the refiner's actual margin — the **crack spread**.",
          "Once you know that, crude and petrol prices moving apart stops being surprising. **They're different things with a factory in between.**",
          "**Metals** split into two categories that share a name and little else.",
          "**Base metals** — copper, aluminium, zinc — are **consumed**. They get built into buildings, wiring and machines, so they track construction and manufacturing. Copper gets watched as an economic indicator for that reason, though it's a rougher signal than its reputation suggests.",
          "**And then there's gold, which is a different animal entirely.**"
        ],
        terms: [
          { term: 'Crack spread',
            plain: 'The difference between crude and the refined products made from it. A refiner\'s margin.',
            like: 'The gap between the price of flour and the price of bread.' },
          { term: 'Base metal',
            plain: 'Industrially consumed metal — copper, aluminium, zinc.',
            like: 'Bricks. Bought to be used up in something else.' },
          { term: 'Above-ground stock',
            plain: 'How much has ever been produced and still exists.',
            like: 'Every wedding ring ever made, still sitting in the world somewhere.' },
          { term: 'Spare capacity',
            plain: 'Production that can be switched on quickly. It caps how far a disruption travels.',
            like: 'A reserve tank. Its size decides how worried to be about a leak.' }
        ],
        close: [
          "Here's what makes gold different, and it's one fact rather than a philosophy.",
          "**Gold is held, not consumed.**",
          "Copper gets built into a building and effectively leaves the market. **Gold doesn't go anywhere.** Almost all the gold ever mined still exists — in vaults, in jewellery, in central bank reserves. It gets melted down and reused, not used up.",
          "**Which means above-ground stock utterly dwarfs annual mine production.**",
          "Think about what that does to supply analysis. For copper, this year's mine output is a meaningful share of what's available. **For gold, mine supply is a rounding error against the stock that already exists.**",
          "**So a supply-and-demand analysis of gold is close to pointless.** A mine strike doesn't matter. New discoveries don't matter much either.",
          "**What moves gold is real interest rates, currency moves and fear** — because those change whether people want to *hold* the stock that already exists, and holding is the entire demand.",
          "**Gold is much closer to a currency than to a metal.** File it that way and its behaviour stops being mysterious."
        ]
      },
      check: [
        { q: 'Why does gold behave unlike copper?',
          options: ['Gold is rarer', 'Gold is held rather than consumed, so above-ground stock dwarfs mine production and supply analysis barely applies', 'Gold has no futures market', 'Copper cannot be stored'],
          a: 1,
          why: 'Almost all the gold ever mined still exists. Mine supply is a rounding error against it, which is why gold trades on real rates, currencies and fear rather than a supply balance.' },
        { q: 'The crack spread is:',
          options: ['The gap between two delivery months', 'The difference between crude and the refined products made from it — a refiner\'s margin', 'The bid-ask spread on crude', 'The gap between two grades of crude'],
          a: 1,
          why: 'Crude is a feedstock rather than a product. Once you see that, crude and petrol prices diverging stops being surprising — there is a factory in between.' }
      ]
    },

    {
      title: 'An annual clock, and the one that cannot be stored',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "**Agriculture has a feature no other commodity family shares: supply arrives once a year.**",
          "An oil well can be turned back on. A mine can add a shift. **A harvest cannot be re-run.** Miss the season, or lose it to drought, and you wait for the next one — there is no recovery inside the year.",
          "**It's a clock you cannot restart**, and that's why these markets react so violently to a weather forecast. A drought doesn't reduce supply gradually; it removes a year's worth that nobody can replace.",
          "Which gives agriculture a **structurally seasonal volatility pattern**. It's highest during the growing season, when weather can still change the outcome, and it collapses once the harvest is in and the number is known.",
          "The compensation is that agriculture is **unusually well documented.** Planted area, crop condition, ending stocks — all published on a schedule, free.",
          "**The key ratio is stocks-to-use** — ending stocks divided by annual consumption. It's days of cover wearing a different name, and it does the same job."
        ],
        terms: [
          { term: 'Stocks-to-use',
            plain: 'Ending stocks divided by annual consumption. Agriculture\'s days of cover.',
            like: 'How much is left in the cupboard as a fraction of what you eat in a year.' },
          { term: 'Growing season',
            plain: 'The window in which weather can still change the harvest. Volatility concentrates here.',
            like: 'The stretch of a match where the result is still genuinely open.' },
          { term: 'Storable',
            plain: 'Can be held over time at a reasonable cost, so carry applies and curves can sit in contango.',
            like: 'Tinned food. Keeps, at a price.' },
          { term: 'Non-storable',
            plain: 'Impractical to store at scale — electricity above all. Carry cannot arbitrage the curve.',
            like: 'A fresh sandwich. There is no holding it until next month.' }
        ],
        close: [
          "Now one family that breaks the entire framework, and it's worth knowing even if you never trade it.",
          "**Electricity cannot be stored at scale.** It has to be produced at the exact moment it's used.",
          "Think about what that removes. **The whole cost-of-carry logic from module 601 depends on being able to buy now, store it, and sell later.** If you can't store it, nobody can arbitrage the curve, and the relationship between today's price and next month's simply doesn't hold.",
          "**The result is prices that behave unlike anything else in this course — including going negative.**",
          "**A negative price is not a glitch.** It means it is genuinely cheaper for a generator to pay somebody to take the power than to shut the plant down and restart it. Shutting down and restarting a large plant costs real money and takes real time.",
          "**So storability isn't a technicality.** It decides whether the carry framework applies at all — which means the framework is a *consequence* of physical facts, not a law of markets.",
          "Last thing, and you'll recognise it.",
          "**Do these families move together?** Sometimes. When a big macro driver dominates — a large currency move, a growth scare, a liquidity shock — everything on the shelf moves as one.",
          "**The rest of the time they're driven by their own physical situations and can trend opposite ways for years.**",
          "**So a commodity basket is not automatically diversified, and not automatically concentrated either. It depends what's driving.**",
          "That's the correlation lesson for the fourth time — currency pairs, equity sectors, tokens, and now here. **The useful addition is that in commodities you can usually see whether a macro factor is dominant**, which tells you which case you're in.",
          "**And never carry a conclusion across families. Tight copper inventories tell you precisely nothing about wheat.**"
        ]
      },
      check: [
        { q: 'What makes agricultural supply different from energy supply?',
          options: ['It is unregulated', 'It arrives once a year — miss the season and there is no equivalent of switching a well back on', 'It cannot be stored', 'It is not published'],
          a: 1,
          why: 'It is a clock you cannot restart, which is why these markets react so hard to weather forecasts. A drought removes a year that is not recoverable until the next cycle.' },
        { q: 'Electricity prices can go negative because:',
          options: ['Of a pricing error', 'It cannot practically be stored, so at times it is cheaper to pay someone to take it than to shut a plant down and restart it', 'Regulators subsidise consumption', 'Demand is always inelastic'],
          a: 1,
          why: 'Without storability, carry cannot arbitrage the curve and the whole framework from module 601 stops applying. That framework is a consequence of physical facts, not a law of markets.' }
      ]
    }
  ];
})();
