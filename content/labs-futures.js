/* N1 Forex Academy — analysis labs for the Futures track.

   Same contract as content/labs.js — `kind: 'analysis'`, rendered by
   assets/labs.js, recorded into progress.drills like any drill. Read the header
   of assets/labs.js for why these are worked exercises rather than simulator
   sessions.

   EVERY NUMBER HERE IS WORKED. Change a figure in a `dataset` table and you
   must re-derive every `answer` that reads it. The arithmetic is written into
   each `why` so the student sees it and the next editor can check it.

   Contract specifications below are realistic in shape but simplified, and the
   names are generic. Always send students to the exchange's own specification
   page for live figures — that habit is the point of the first lab. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'ft-spec',
  kind: 'analysis',
  module: 301,
  title: 'Read the specification before you trade it',
  brief: 'Four contracts, four specifications. Work out what one tick is really worth, what you would actually be controlling, and which of them a £15,000 account has any business touching.',
  dataset: [
    { type: 'table',
      title: 'Contract specifications (simplified)',
      head: ['Contract', 'Size', 'Tick', 'Tick value', 'Price', 'Initial margin'],
      rows: [
        ['Crude oil',        '1,000 barrels',      '$0.01', '$10.00', '$78.00',  '$6,200'],
        ['E-mini index',     '50 × index',         '0.25',  '$12.50', '5,000',   '$12,000'],
        ['Micro index',      '5 × index',          '0.25',  '$1.25',  '5,000',   '$1,200'],
        ['Micro crude oil',  '100 barrels',        '$0.01', '$1.00',  '$78.00',  '$620']
      ],
      foot: 'Tick is the smallest price increment. **Tick value** is what that increment is worth on one contract — the two are different things, and confusing them is the commonest error in this lesson.' },
    { type: 'note',
      body: 'Your account is **£15,000** and your policy risks **1% per trade**. Treat £1 = $1 throughout; the exchange-rate step would add arithmetic without adding a lesson.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'Crude oil moves $1.00 — a quiet afternoon. What does that do to **one standard crude contract**, in dollars?',
      prefix: '$', placeholder: 'e.g. 500', answer: 1000, tol: 5,
      hint: 'How many ticks is $1.00, and what is each one worth?',
      why: '$1.00 ÷ $0.01 per tick = 100 ticks. 100 × $10.00 = **$1,000**. A move that barely registers as news moves one contract by a thousand dollars — which is precisely why the specification is the first page to read.' },

    { kind: 'calc',
      q: 'What is the **notional value** of one E-mini index contract at 5,000?',
      prefix: '$', placeholder: 'e.g. 100000', answer: 250000, tol: 100,
      why: '50 × 5,000 = **$250,000**. The margin is $12,000, so people quote twelve thousand and believe that is their position. It is not — they are carrying a quarter of a million dollars of exposure. **Judge a position by notional, never by margin posted.**' },

    { kind: 'calc',
      q: 'Your stop is 40 ticks away on the **micro index**. How many contracts does your 1% risk allow?',
      unit: 'contracts', placeholder: 'e.g. 2', answer: 3, tol: 0.4,
      hint: 'Risk amount ÷ (stop in ticks × tick value).',
      why: 'Risk = £15,000 × 1% = £150. Stop cost per contract = 40 × $1.25 = $50. **£150 ÷ $50 = 3 contracts.** Whole number, comfortably inside the policy — which is exactly what micro contracts exist for.' },

    { kind: 'choice',
      q: 'The same 40-tick stop on the **standard E-mini** costs 40 × $12.50 = $500 per contract, against £150 of allowed risk. What should you do?',
      options: [
        'Round up to one contract — it is only slightly over',
        'Trade the micro instead, or do not take the trade',
        'Halve the stop to 20 ticks so one contract fits the risk',
        'Raise risk to 3.5% for this trade only'
      ],
      a: 1,
      why: 'One standard contract risks $500 against a £150 policy — **over three times** what you allow. Halving the stop is worse than rounding up: it puts the stop somewhere the idea is not yet wrong, so you get taken out by noise on trades you were right about. **The micro or no trade are the only honest answers**, and the micro sizes perfectly at 3 contracts.' }
  ],
  onPass: 'That is the habit this whole track rests on: read the specification, convert to money, and check it against your own account before any strategy exists.'
},

{
  id: 'ft-roll',
  kind: 'analysis',
  module: 303,
  title: 'Cost a year of rolls',
  brief: 'A market in contango, a long position held twelve months, and a spot price that finishes exactly where it started. Work out what you made.',
  dataset: [
    { type: 'table',
      title: 'Crude oil futures curve today',
      head: ['Delivery month', 'Price'],
      rows: [
        ['Front month',        '$78.00'],
        ['Second month',       '$78.60'],
        ['Third month',        '$79.20'],
        ['Fourth month',       '$79.80']
      ],
      foot: 'Contract size **1,000 barrels**. Commission is **$4 per round trip** per contract. Assume the shape of this curve persists all year.' },
    { type: 'note',
      body: 'You are **long one contract** and intend to hold the exposure for twelve months, rolling monthly. Twelve months later, **spot crude is back at exactly $78.00** — the market went precisely nowhere.' }
  ],
  tasks: [
    { kind: 'choice',
      q: 'Looking at that curve, the market is in:',
      options: [
        'Backwardation — later months are cheaper',
        'Contango — later months are dearer, which mostly reflects storage, insurance and financing',
        'Neither; the curve is flat',
        'Contango, which means the market forecasts higher prices'
      ],
      a: 1,
      why: 'Each later month costs $0.60 more. That slope is mostly **cost of carry** — what it costs to store, insure and finance a barrel until delivery. It is arithmetic, not a forecast, and reading it as a prediction is the commonest error in commodities.' },

    { kind: 'calc',
      q: 'You roll from the front month to the second. What does that single roll cost, in dollars?',
      prefix: '$', placeholder: 'e.g. 100', answer: 600, tol: 5,
      hint: 'You sell at the front-month price and buy at the second-month price. How many barrels?',
      why: 'You sell your contract at $78.00 and buy the next at $78.60 — **$0.60 worse per barrel**, on 1,000 barrels = **$600**. There is no fee and no line item. It appears purely as a worse entry price in the new month, which is exactly why people miss it.' },

    { kind: 'calc',
      q: 'Assuming that shape holds, what do twelve monthly rolls cost over the year?',
      prefix: '$', placeholder: 'e.g. 1000', answer: 7200, tol: 20,
      why: '12 × $600 = **$7,200**. For comparison, twelve round trips of commission is 12 × $4 = **$48**. The roll cost is **150 times** the commission — and only one of those two numbers appears on your statement. People shop for brokers over the $48.' },

    { kind: 'choice',
      q: 'Spot crude finishes the year at exactly $78.00, where it began. Your rolled long position is:',
      options: [
        'Flat — the market went nowhere',
        'Down roughly $7,200, because every roll sold the cheaper expiring month and bought the dearer next one',
        'Up roughly $7,200, from collecting the carry',
        'Impossible to determine without knowing the volatility'
      ],
      a: 1,
      why: 'Nothing was wrong with the analysis — you expected nothing and got nothing. **The structure took the money.** This is why some commodity funds track their own index poorly over long periods, and why futures suit a long-term buy-and-hold view badly in persistent contango. It is disclosed in every prospectus, and almost nobody reads it.' }
  ],
  onPass: 'Roll cost is invisible, unavoidable and frequently larger than every commission you will ever fuss about. Now you can price it before you commit to holding anything.'
},

{
  id: 'ft-margin',
  kind: 'analysis',
  module: 305,
  title: 'Survive the week, not just the entry',
  brief: 'Margin lets you open the position. Cash is what holds it. Run one contract through five evenings of settlement and find the night it goes wrong.',
  dataset: [
    { type: 'table',
      title: 'Your account and the contract',
      head: ['', ''],
      rows: [
        ['Account equity', '$9,000'],
        ['Contract', 'Micro index, $1.25 per tick'],
        ['Initial margin per contract', '$1,200'],
        ['Maintenance margin per contract', '$1,000'],
        ['Contracts held', '4'],
        ['Total initial margin posted', '$4,800']
      ] },
    { type: 'table',
      title: 'The week, in ticks per contract',
      head: ['Evening', 'Move against you (ticks)'],
      rows: [
        ['Monday',    '120'],
        ['Tuesday',   '90'],
        ['Wednesday', '240'],
        ['Thursday',  '60'],
        ['Friday',    '30']
      ],
      foot: 'Every evening the loss is debited in cash. Four contracts, $1.25 per tick each.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What does **Monday** evening cost you, across all four contracts?',
      prefix: '$', placeholder: 'e.g. 250', answer: 600, tol: 5,
      hint: 'Ticks × tick value × number of contracts.',
      why: '120 ticks × $1.25 × 4 contracts = **$600**, debited that night in real cash. Not a floating figure — your balance is genuinely $600 smaller on Tuesday morning.' },

    { kind: 'calc',
      q: 'After **Wednesday** evening, what is your account equity?',
      prefix: '$', placeholder: 'e.g. 8000', answer: 6750, tol: 10,
      hint: 'Add up Monday, Tuesday and Wednesday, then subtract from $9,000.',
      why: 'Monday $600, Tuesday 90 × $1.25 × 4 = $450, Wednesday 240 × $1.25 × 4 = $1,200. Total $2,250. **$9,000 − $2,250 = $6,750.**' },

    { kind: 'choice',
      q: 'Your four contracts require $4,000 of maintenance margin. After Wednesday you hold $6,750. Are you called?',
      options: [
        'Yes — equity has fallen sharply',
        'No — $6,750 is still above the $4,000 maintenance requirement, though the cushion is thinning fast',
        'Yes, because you are down more than 20%',
        'It cannot be determined without the initial margin'
      ],
      a: 1,
      why: 'Not yet. 4 × $1,000 = $4,000 maintenance, and you hold $6,750. **But look at the direction of travel**: you have lost a quarter of the account in three evenings on moves that are unremarkable for the contract. The call is not the danger — the trajectory is.' },

    { kind: 'choice',
      q: 'Your policy risks 1% per trade — $90. Wednesday alone cost $1,200. What actually went wrong?',
      options: [
        'The market moved unusually far; nothing could have prevented it',
        'The position was far too large for the account — four contracts committed $4,800 of $9,000 in margin before the week even started',
        'The stop was set too wide',
        'Daily settlement is unfair to small accounts'
      ],
      a: 1,
      why: 'Margin-to-equity was $4,800 ÷ $9,000 = **53%** on day one, against a sensible ceiling of 20–30%. At that commitment an ordinary week becomes an emergency. Note also that the $90 policy risk was never real: with no stop and daily settlement, the loss is set by **position size**, not by intention. **Margin opened the position; cash was supposed to hold it, and there was not enough.**' }
  ],
  onPass: 'Retail futures accounts fail more often from thin cash than from bad analysis — and from the inside it feels like bad luck. Now you can spot it on day one, from the margin-to-equity ratio alone.'
}

]);
