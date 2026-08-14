/* N1 Forex Academy — lessons for Module 605 (Commodities track).

   VOICE: Jonathan talking to one student. Closes the track. The carry hurdle is
   the distinguishing requirement — a share can grow into a valuation while you
   wait, a barrel just costs you money. Ends without encouragement, and says
   plainly that the inflation-hedge claim is weaker than advertised. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[605] = [
    {
      title: 'Sizing for bursts, and the second hurdle',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Sixth extension of the same policy. **By now you can probably guess the shape of this**, which is exactly what I hoped for.",
          "**Unchanged:** risk per trade, stops where the idea is wrong, never widening, never averaging down, daily and weekly stops, correlated positions counted once.",
          "**Four additions.** A **carry rule** — state the annual cost of holding before you enter. A **family limit** — energy, metals and agriculture counted as three separate groups. A **route rule** — which instrument for which holding period, from module 604. And an **event allowance** — size assuming a physical shock can arrive with no notice.",
          "Now sizing, because commodities move in a shape you haven't met yet.",
          "**Volatility here arrives in bursts.** Quiet for months, then violent for a fortnight.",
          "**Which means a position sized during the quiet stretch is the wrong size for the event** — and events are the entire reason anyone is in this market.",
          "So use ATR as always, but with one adjustment: **check it against the range during the last physical shock, not just the last month.** Recent calm systematically understates how far these things can move."
        ],
        terms: [
          { term: 'Carry hurdle',
            plain: 'The return a position must make simply to cover roll and storage, before any profit exists.',
            like: 'The rent on a shop. You are not making money until you have covered it.' },
          { term: 'Burst volatility',
            plain: 'Long quiet periods punctuated by violent moves, rather than steady movement.',
            like: 'A quiet street with an occasional lorry. Averages tell you nothing useful.' },
          { term: 'Family limit',
            plain: 'A cap on energy, metals or agriculture as a group, because members move together.',
            like: 'Not filling the plate with three kinds of potato.' },
          { term: 'Event allowance',
            plain: 'Sizing on the assumption that an unforecastable physical shock can arrive at any time.',
            like: 'Building for the storm you cannot predict but know will come.' }
        ],
        close: [
          "Now the requirement that separates a commodity thesis from every other one in this course.",
          "In module 108 you wrote an equity thesis and it had to be **falsifiable** — a specific, checkable condition that would prove you wrong. **That carries over unchanged.**",
          "**But here your thesis has to clear a second hurdle as well.**",
          "**A share can grow into a valuation while you wait.** Earnings arrive, the business compounds, and time is broadly on your side.",
          "**A barrel does nothing while you wait, and costs you money.** So waiting has a price, and your thesis has to beat it.",
          "**State the carry cost as a number before you enter, then say what will beat it.**",
          "Which means this isn't a thesis: *\"I think oil goes up.\"*",
          "**This is:** *\"Inventories are two standard deviations below the five-year average with very little spare capacity. I expect stocks-to-use to normalise within nine months. An inventory build above trend for three consecutive releases proves me wrong.\"*",
          "**Balance, expected change, timeframe, and the published figure that kills it.** Then review it against the data on a schedule — not when the price makes you anxious."
        ]
      },
      check: [
        { q: 'What must a commodity thesis clear that an equity thesis does not?',
          options: ['A liquidity requirement', 'The carry hurdle — the annual cost of holding, which must be beaten before any profit exists', 'A regulatory approval', 'Nothing; the requirements are identical'],
          a: 1,
          why: 'A share can grow into a valuation while you wait. A barrel does nothing and costs you money, so waiting has a price and the thesis has to beat it.' },
        { q: 'How should you size for commodity volatility?',
          options: ['From the last month\'s range, as usual', 'Check ATR against the range during the last physical shock — volatility arrives in bursts, and recent calm understates it', 'The same way as equities', 'By contract size alone'],
          a: 1,
          why: 'These markets go quiet for months then violent for a fortnight. A position sized for the quiet stretch is the wrong size for the event — and events are what the market is for.' }
      ]
    },

    {
      title: 'How narrow a place this deserves',
      slides: [3, 4],
      teach: {
        lead: [
          "Time for the honest close, same as the last three tracks.",
          "**What commodities genuinely offer:** a way to hedge a real input cost if you have one. A way to express a specific physical view when you have done the balance work. And genuine diversification during periods when no macro factor is dominant.",
          "**What they genuinely cost:** carry on almost every route. Burst volatility. Physical events nobody can forecast. And **no income of any kind while you wait** — no dividend, no coupon, no interest differential. Nothing.",
          "Now let me address the claim you'll hear most often, because it's the reason most retail money ends up here.",
          "**\"Commodities hedge inflation, so hold some permanently.\"**",
          "**The relationship is weaker and far less stable than that sentence implies.** It has held in some periods and failed badly in others, and \"commodities\" isn't even one thing — the families behave differently, so which ones are you holding?",
          "**And meanwhile you're paying carry every single year, whether or not the thesis ever comes good.**",
          "That's the part the pitch leaves out. A permanent long-only commodity position isn't a neutral hedge sitting quietly in the background. **It's a position that bleeds while it waits.**"
        ],
        terms: [
          { term: 'Physical thesis',
            plain: 'A statement of what must change in the real supply and demand balance for the trade to work.',
            like: 'Naming the actual thing that has to happen, not the price you hope to see.' },
          { term: 'Route rule',
            plain: 'A written rule saying which instrument you use for which holding period.',
            like: 'Deciding whether to drive or take the train before you look at the weather.' }
        ],
        close: [
          "So where does this leave commodities in your process? I'll give you my honest view.",
          "**For most people: a narrow role, or none.**",
          "A specific thesis, on a specific commodity, where you've done the balance work — sized small, with a written exit and a carry cost you've actually computed. **Not a permanent allocation held because somebody said it hedges inflation.**",
          "And if you work through the arithmetic and conclude this market has no place in your process at all — **that's a competent conclusion, and it's the fourth time this course has told you so.**",
          "Futures said it. Options said it. Crypto said it. **Commodities says it now.**",
          "I want to be clear about why I keep repeating that, because it's the opposite of how these markets are usually sold to you.",
          "**Every one of these tracks could have ended by encouraging you into the market it just taught.** That would have been easier to write and more flattering to read.",
          "**But the whole point of teaching you six markets is not that you should trade six markets.** Nobody does that well. **It's so that you can look at any of them and make an informed decision — including the decision to walk away.**",
          "**Being able to say \"I understand this market and it is not for me\" is a skill.** It's rarer than it should be, and it will save you more money than any setup I could have taught you."
        ]
      },
      check: [
        { q: 'The claim that commodities reliably hedge inflation is:',
          options: ['Well established and dependable', 'Weaker and less stable than advertised — and you pay carry every year while waiting to be right', 'True only for gold', 'Irrelevant to retail investors'],
          a: 1,
          why: 'The relationship has held in some periods and failed badly in others, and meanwhile a long-only position bleeds carry regardless. It is not a neutral hedge sitting quietly in the background.' },
        { q: 'Why do family limits matter on top of a total commodity cap?',
          options: ['Regulators require them', 'Members of a family move together, so three energy positions are closer to one bet than to three', 'They reduce commission', 'They only matter to hedgers'],
          a: 1,
          why: 'Fifth appearance of the correlation lesson. A total cap does not stop you putting the whole allocation into one family that then moves as a single position.' }
      ]
    }
  ];
})();
