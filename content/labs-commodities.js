/* N1 Forex Academy — analysis labs for the Commodities track.

   Same contract as content/labs.js. EVERY NUMBER IS WORKED — change a figure in
   a `dataset` and you must re-derive every `answer` that reads it.

   The three labs target the three ideas students most reliably get wrong:
   a small imbalance producing a large price move, the carry hurdle a thesis has
   to clear, and an ETF that falls while spot is flat. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'cm-balance',
  kind: 'analysis',
  module: 602,
  title: 'A small surplus, a large fall',
  brief: 'Read a physical balance from published inventory, work out how small the imbalance actually is, and see why price had to move so much further than it did.',
  dataset: [
    { type: 'table',
      title: 'Crude oil — published weekly inventory (millions of barrels)',
      head: ['Week', 'Inventory', 'Five-year average for that week'],
      rows: [
        ['1',  '420', '435'],
        ['5',  '432', '437'],
        ['9',  '447', '438'],
        ['13', '461', '440'],
        ['17', '476', '441']
      ],
      foot: 'Estimated consumption is **20 million barrels per day**. The five-year average column is where inventory would normally sit for that week of the year.' },
    { type: 'note',
      body: 'Over these 16 weeks the price fell from **$82 to $58**. No supply disruption occurred and no demand collapse was reported.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'Inventory rose from 420m to 476m over 16 weeks (112 days). What is the **average daily surplus**, in millions of barrels per day?',
      unit: 'm bbl/day', placeholder: 'e.g. 1.0', answer: 0.5, tol: 0.03,
      hint: 'Total build divided by the number of days.',
      why: '476 − 420 = 56m barrels built up over 112 days = **0.5m barrels per day**. That is the whole imbalance: half a million barrels a day more produced than consumed.' },

    { kind: 'calc',
      q: 'Against consumption of 20m barrels a day, what percentage of demand is that surplus?',
      unit: '%', placeholder: 'e.g. 5', answer: 2.5, tol: 0.2,
      why: '0.5 ÷ 20 = **2.5%**. The market was oversupplied by two and a half percent — and the price fell 29%, from $82 to $58. **A 2.5% imbalance produced a 29% move.**' },

    { kind: 'calc',
      q: 'What is the current **days of cover** — inventory divided by daily consumption?',
      unit: 'days', placeholder: 'e.g. 20', answer: 23.8, tol: 0.4,
      why: '476 ÷ 20 = **23.8 days**. This is more useful than the raw inventory figure because it scales with demand — 476m barrels means something very different in a world using 20m a day than one using 40m.' },

    { kind: 'choice',
      q: 'Why did a 2.5% surplus produce a 29% price fall?',
      options: [
        'Speculators exaggerated a small imbalance',
        'Short-run supply and demand barely respond to price, so price is the only thing that can adjust — and it must move a long way before anyone changes behaviour',
        'The inventory data was wrong',
        'Because storage was full'
      ],
      a: 1,
      why: 'You still heat the house and drive to work when the price falls 29%, and nobody shuts a producing well over a 2.5% surplus. **Neither side adjusts quickly, so price does all the work.** This is why commodity prices are far more volatile than the physical balance underneath them — and it is not evidence of manipulation.' }
    ],
  onPass: 'A small number in the physical balance is a large number in the price. That asymmetry is the single most useful thing to carry out of this track.'
},

{
  id: 'cm-carry',
  kind: 'analysis',
  module: 605,
  title: 'The hurdle before the profit',
  brief: 'You are right about direction. Work out what a year of holding costs you first, and whether your view actually clears it.',
  dataset: [
    { type: 'table',
      title: 'Natural gas futures curve today',
      head: ['Delivery month', 'Price'],
      rows: [
        ['Front month',   '$3.00'],
        ['Second month',  '$3.09'],
        ['Third month',   '$3.18'],
        ['Fourth month',  '$3.27']
      ],
      foot: 'Contract size **10,000 units**. You are long **one contract** and intend to hold the exposure for twelve months, rolling monthly.' },
    { type: 'note',
      body: 'Your view: gas rises from $3.00 to **$3.45** over the next year — a **15%** move you are reasonably confident about.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What does **one roll** cost, in dollars?',
      prefix: '$', placeholder: 'e.g. 500', answer: 900, tol: 10,
      hint: 'The gap between consecutive months, times the contract size.',
      why: '$3.09 − $3.00 = **$0.09 per unit**, on 10,000 units = **$900** per roll. It appears on no statement — only as a worse entry price in the new month.' },

    { kind: 'calc',
      q: 'Assuming the curve shape persists, what do twelve monthly rolls cost over the year?',
      prefix: '$', placeholder: 'e.g. 5000', answer: 10800, tol: 50,
      why: '12 × $900 = **$10,800**. Against a position worth $3.00 × 10,000 = $30,000, that is a carry hurdle of **36% a year**.' },

    { kind: 'calc',
      q: 'Your view is that gas rises from $3.00 to $3.45. What is that worth on one contract, in dollars?',
      prefix: '$', placeholder: 'e.g. 2000', answer: 4500, tol: 50,
      why: '$0.45 × 10,000 units = **$4,500**. That is what being completely right is worth.' },

    { kind: 'choice',
      q: 'Your correct 15% view earns $4,500 while the rolls cost $10,800. What does that tell you?',
      options: [
        'Take the trade — a 15% move is a good return',
        'The thesis does not clear the carry hurdle: being exactly right still loses about $6,300, so either the view must be far larger or the route must change',
        'Use more leverage to make the profit worth having',
        'Hold the position longer so the view has time to work'
      ],
      a: 1,
      why: 'This is the discipline the whole module exists for. **You can be completely right and still lose**, because you never checked what waiting cost. Note the two honest responses: require a much larger expected move, or change route — a physically-backed holding or a producer equity carries no roll. **Holding longer makes it worse**, and leverage multiplies a losing structure.' }
  ],
  onPass: 'State the carry cost as a number before you enter, then say what will beat it. A view that does not clear the hurdle is not a trade, however correct it turns out to be.'
},

{
  id: 'cm-route',
  kind: 'analysis',
  module: 604,
  title: 'Four ways in, one correct view',
  brief: 'Same commodity, same view, four routes. Work out what each actually exposes you to and which one your holding period points at.',
  dataset: [
    { type: 'table',
      title: 'Copper is $4.00/lb. You expect $4.80 within two years.',
      head: ['Route', 'Cost to hold', 'What you are exposed to'],
      rows: [
        ['Futures',          'Roll cost ~8% a year in current contango', 'The metal, plus expiry and margin management'],
        ['Futures-based ETF','0.75% fee + the same roll drag',           'The metal, less the roll the fund pays for you'],
        ['Producer equity',  'None to hold; pays a small dividend',      'The metal, geared — plus management, debt, jurisdiction and equity beta'],
        ['Physical copper',  'Storage ~2% a year, wide dealer spread',   'The metal only']
      ],
      foot: 'The producer has an all-in sustaining cost of **$2.90/lb** and material net debt.' }
    ],
  tasks: [
    { kind: 'calc',
      q: 'Your view is +20% over two years. Roughly what does the **futures** route cost in roll over that period, as a percentage?',
      unit: '%', placeholder: 'e.g. 10', answer: 16, tol: 1,
      why: '8% a year × 2 years = **16%**. Against a 20% expected move, roll consumes most of the profit before anything else is counted — which is exactly the module 605 carry hurdle applied to a route decision.' },

    { kind: 'choice',
      q: 'Copper rises to $4.80 exactly as you predicted, but the **producer equity** falls. What is the most likely explanation?',
      options: [
        'The prediction was wrong after all',
        'You owned two bets — the metal AND the company. Debt, jurisdiction, management or a market-wide sell-off can move the share against the metal',
        'Producer shares do not track their commodity at all',
        'The dividend was cut'
      ],
      a: 1,
      why: 'Operating leverage means profits move more than the metal — in both directions. But it is still an equity, so it carries a beta and falls in a broad sell-off even when copper does not. **A producer is related to the commodity; it is not the commodity.**' },

    { kind: 'calc',
      q: 'Copper falls to $2.80 instead. The producer\'s all-in sustaining cost is $2.90/lb. How much is it losing per pound produced?',
      prefix: '$', unit: '/lb', placeholder: 'e.g. 0.50', answer: 0.10, tol: 0.02,
      why: '$2.90 − $2.80 = **$0.10 per pound**, lost on every pound it digs up. With material net debt, that is the point at which a producer stops being a geared way to own copper and starts being a solvency question.' },

    { kind: 'choice',
      q: 'Given a two-year horizon and a wish to avoid roll drag entirely, which route fits best?',
      options: [
        'Futures, for the tightest costs',
        'Physical or a physically-backed holding — roughly 2% a year in storage against 16% in roll, with no expiry to manage',
        'The futures-based ETF, since it is easiest to buy',
        'Producer equity, because the dividend offsets the cost'
      ],
      a: 1,
      why: '2% a year beats 8% a year when the horizon is long, and there is no expiry to roll. Note the ETF is the trap here — it looks convenient and inherits the very roll drag you were trying to escape. **This is module 103\'s question again: the holding period picks the route, not the opening cost.**' }
  ],
  onPass: 'Four routes to one view, four different exposures and four different costs. Decide by the calendar, then check what the thing you bought is actually made of.'
}

]);
