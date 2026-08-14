/* N1 Forex Academy — analysis labs for the Options track.

   Same contract as content/labs.js — `kind: 'analysis'`, rendered by
   assets/labs.js. Read that file's header for why these are worked exercises.

   EVERY NUMBER HERE IS WORKED. Change a figure in a `dataset` and you must
   re-derive every `answer` that reads it. Premiums are quoted per share and the
   multiplier is 100 throughout, matching standard equity options — the lab makes
   students apply it, because forgetting it is a factor-of-a-hundred error.

   Quotes are invented but realistic in shape. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'op-split',
  kind: 'analysis',
  module: 402,
  title: 'Split the premium, then find the real cost',
  brief: 'Six quotes on one share. Separate what is arithmetic from what is hope, work out what a round trip costs before the market moves, and decide which strike is actually tradeable.',
  dataset: [
    { type: 'note',
      body: '**Kestrel Aviation is trading at 108p.** All options below are calls with the same expiry. Multiplier is **100 shares per contract**.' },
    { type: 'table',
      title: 'Call options, same expiry',
      head: ['Strike', 'Bid', 'Ask', 'Mid', 'Open interest'],
      rows: [
        ['90p',  '19.0p', '19.6p', '19.3p', '2,400'],
        ['100p', '11.4p', '11.8p', '11.6p', '8,100'],
        ['108p', '6.0p',  '6.4p',  '6.2p',  '9,700'],
        ['115p', '3.2p',  '3.6p',  '3.4p',  '5,200'],
        ['130p', '0.6p',  '1.0p',  '0.8p',  '140']
      ],
      foot: '**Mid** is the midpoint of bid and ask. Intrinsic value has a floor of zero.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What is the **extrinsic value** of the 100p call, in pence?',
      unit: 'p', placeholder: 'e.g. 4.0', answer: 3.6, tol: 0.1,
      hint: 'Intrinsic first: the right to buy at 100 when the share is 108.',
      why: 'Intrinsic = 108 − 100 = **8.0p**. Mid premium is 11.6p, so extrinsic = 11.6 − 8.0 = **3.6p**. That two-second split reframes every option you will ever look at, and most retail traders never perform it.' },

    { kind: 'calc',
      q: 'What is the **intrinsic value** of the 115p call, in pence?',
      unit: 'p', placeholder: 'e.g. 0', answer: 0, tol: 0.05,
      why: 'The right to buy at 115 when the share is 108 is worth **nothing** today — you would buy in the market instead. Intrinsic floors at zero, never −7. So the entire 3.4p premium is extrinsic: you are paying purely for what might happen before expiry.' },

    { kind: 'choice',
      q: 'Which of these five carries the **most extrinsic value**, and why?',
      options: [
        'The 90p call, because it is the most expensive',
        'The 108p call, because it is at the money and therefore the most genuinely uncertain',
        'The 130p call, because it has the furthest to travel',
        'They all carry the same extrinsic value'
      ],
      a: 1,
      why: 'Extrinsic values are 1.3p, 3.6p, **6.2p**, 3.4p and 0.8p. The at-the-money 108p strike carries the most, because extrinsic value is the price of uncertainty and 108 is the genuine coin flip. The 90p call is dearest overall but almost all of that is intrinsic — it is nearly decided.' },

    { kind: 'calc',
      q: 'The 130p call has a bid-ask spread of 0.4p on a 0.8p mid. What percentage of the premium is that spread?',
      unit: '%', placeholder: 'e.g. 10', answer: 50, tol: 2,
      why: '0.4 ÷ 0.8 = **50%**. You pay half the premium in spread just to get in and out, before the share moves at all. Add its open interest of 140 — barely anyone trades it — and this is a strike that is easy to enter and genuinely unpleasant to leave. **A strategy that only works at an illiquid strike does not work.**' }
  ],
  onPass: 'Split first, check liquidity second, form an opinion third. That order prevents most of what goes wrong for beginners in options.'
},

{
  id: 'op-crush',
  kind: 'analysis',
  module: 404,
  title: 'Right about the move, wrong about the price',
  brief: 'You predict the direction of a results announcement correctly and get the move you expected. Work out why you still lost money.',
  dataset: [
    { type: 'table',
      title: 'Northbrook Retail — the day before results',
      head: ['', ''],
      rows: [
        ['Share price', '200p'],
        ['Call strike', '200p'],
        ['Premium (mid)', '14.0p'],
        ['Implied volatility', '70'],
        ['Multiplier', '100 shares']
      ] },
    { type: 'table',
      title: 'The morning after results',
      head: ['', ''],
      rows: [
        ['Share price', '208p'],
        ['Same call, premium (mid)', '10.5p'],
        ['Implied volatility', '32']
      ],
      foot: 'You bought **one contract** of the 200p call the day before results, expecting a rise. You got one.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'Before results, what was the **extrinsic value** of that call, in pence?',
      unit: 'p', placeholder: 'e.g. 10', answer: 14, tol: 0.2,
      why: 'The strike and the share price were both 200p, so intrinsic was **zero** — it was exactly at the money. The whole **14.0p** was extrinsic, and much of it was event premium: the market charging for the uncertainty of results.' },

    { kind: 'calc',
      q: 'After results, the share is 208p. What is the call\'s **intrinsic value** now, in pence?',
      unit: 'p', placeholder: 'e.g. 5', answer: 8, tol: 0.2,
      why: '208 − 200 = **8.0p**. You were right: the share rose and your option now has real, checkable value it did not have yesterday.' },

    { kind: 'calc',
      q: 'What did your one contract actually make or lose, in pounds? Use a negative number for a loss.',
      prefix: '£', placeholder: 'e.g. -20', answer: -3.5, tol: 0.3,
      hint: 'Premium then versus premium now, times the multiplier. Remember 100p = £1.',
      why: 'You paid 14.0p and it is now worth 10.5p — down **3.5p per share**. Times 100 shares = **−350p = −£3.50** per contract. **You called the direction correctly, got an 8p move, and still lost.**' },

    { kind: 'choice',
      q: 'You were right about direction and the share moved 4%. Why did the position lose?',
      options: [
        'Time decay over a single day',
        'IV crush — implied volatility fell from 70 to 32, and the extrinsic value you paid for evaporated faster than intrinsic value arrived',
        'The broker mispriced the option',
        'The move was too small to matter'
      ],
      a: 1,
      why: 'You gained **8p of intrinsic** value. But extrinsic collapsed from 14.0p to 2.5p — a loss of **11.5p** — because the uncertainty you paid for was resolved the moment results landed. Net −3.5p. **This is the single commonest way beginners lose on options, it is entirely visible in advance, and it feels exactly like being cheated.** Compare the IV of the expiry after the event against one before it, and the event premium is right there on the screen.' }
  ],
  onPass: 'Now you can price an event before you trade it — and decide deliberately whether to pay for it or express the view in the underlying instead.'
},

{
  id: 'op-spread',
  kind: 'analysis',
  module: 406,
  title: 'Size it properly, then build the spread',
  brief: 'Take one bullish idea. Size it as a bought call with the whole premium at risk, then rebuild it as a vertical spread and see exactly what you traded away.',
  dataset: [
    { type: 'table',
      title: 'Your account and the trade',
      head: ['', ''],
      rows: [
        ['Account', '£20,000'],
        ['Risk per trade (your policy)', '1%'],
        ['Share price', '250p'],
        ['Buy the 250p call at', '12.0p'],
        ['Sell the 275p call at', '5.0p'],
        ['Multiplier', '100 shares per contract']
      ],
      foot: 'Treat the **entire premium paid** as at risk, because a bought option genuinely can expire worthless.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'Buying the 250p call outright: what does **one contract** cost, in pounds?',
      prefix: '£', placeholder: 'e.g. 50', answer: 12, tol: 0.5,
      hint: 'Premium in pence × 100 shares. Then convert pence to pounds.',
      why: '12.0p × 100 shares = 1,200p = **£12.00** per contract. The multiplier is where people lose track — a premium quoted at 12 is not £12 per share, and it is not 12 pence total either.' },

    { kind: 'calc',
      q: 'Your policy risks 1% of £20,000. Treating the whole premium as at risk, how many **whole contracts** can you buy?',
      unit: 'contracts', placeholder: 'e.g. 5', answer: 16, tol: 0.7,
      hint: 'Work out the exact figure, then round in the direction your policy allows.',
      why: 'Risk budget = £200. Each contract puts £12 at risk. £200 ÷ £12 = **16.67**, so you buy **16** — you round *down*, because rounding up would breach the policy you wrote. Note what you did NOT do: size by the share-equivalent exposure. A bought option can go to zero, so the premium is the risk, in full.' },

    { kind: 'calc',
      q: 'Now the vertical spread: buy the 250p call and sell the 275p call. What is the **net cost** of one spread, in pounds?',
      prefix: '£', placeholder: 'e.g. 10', answer: 7, tol: 0.3,
      why: 'You pay 12.0p and receive 5.0p, so the net is **7.0p** × 100 = 700p = **£7.00** per spread. The sold leg has paid for over 40% of the position — and it has also capped what you can make.' },

    { kind: 'calc',
      q: 'What is the **maximum gain** on one spread, in pounds?',
      prefix: '£', placeholder: 'e.g. 20', answer: 18, tol: 0.5,
      hint: 'The gap between the strikes, less what you paid for the spread.',
      why: 'Strike width = 275 − 250 = 25p. Less the 7.0p net cost = **18.0p** × 100 = **£18.00** maximum gain per spread. So you risk £7 to make at most £18 — and above 275p you watch the rest happen without you. **That is the trade: a cheaper position with less volatility exposure, in exchange for a ceiling.** Compute all three bounds before you enter, every time.' }
  ],
  onPass: 'Premium at risk in full, multiplier applied, and all three bounds computed before entry. That is the whole discipline, and it survives every structure you will ever be sold.'
},

{
  id: 'op-assign',
  kind: 'analysis',
  module: 406,
  title: 'The obligation that arrives uninvited',
  brief: 'Four positions. Work out which ones can land an obligation on you, what it would cost, and whether you could actually meet it tomorrow morning.',
  dataset: [
    { type: 'table',
      title: 'Four positions on Ashdown Pharma, currently 420p',
      head: ['#', 'Position', 'Strike', 'Style', 'Notes'],
      rows: [
        ['1', 'Long call',          '450p', 'American', 'You paid 6p'],
        ['2', 'Short put (naked)',  '400p', 'American', 'You received 9p'],
        ['3', 'Short call, covered','405p', 'American', 'You own 100 shares'],
        ['4', 'Long put',           '400p', 'European', 'You paid 7p']
      ],
      foot: 'Account cash available: **£1,500**. Multiplier 100 shares. A dividend goes ex next week.' }
  ],
  tasks: [
    { kind: 'sort',
      q: 'For each position, say whether **you** could be assigned an obligation.',
      buckets: ['You can be assigned', 'You cannot be assigned'],
      items: [
        { label: '1 — Long call (you bought)',    bucket: 'You cannot be assigned' },
        { label: '2 — Short put (you sold)',      bucket: 'You can be assigned' },
        { label: '3 — Short call (you sold)',     bucket: 'You can be assigned' },
        { label: '4 — Long put (you bought)',     bucket: 'You cannot be assigned' }
      ],
      why: '**Only sellers get assigned.** If you bought the option you hold the right and can simply walk away — the worst case is losing the premium. The two short positions carry obligations you do not control and did not get to decline.' },

    { kind: 'calc',
      q: 'Position 2 is assigned: you must buy 100 shares at the 400p strike. What cash do you need, in pounds?',
      prefix: '£', placeholder: 'e.g. 200', answer: 400, tol: 5,
      why: '400p × 100 shares = 40,000p = **£400**. You hold £1,500, so this one you could meet. **But that is the question to ask before selling, not after being assigned** — and the answer changes with every contract you add.' },

    { kind: 'choice',
      q: 'A dividend goes ex next week. Which position is most likely to be assigned **early**, and why?',
      options: [
        'Position 1 — long calls get exercised automatically before a dividend',
        'Position 3 — a short American call that is already in the money, because a call holder must exercise to receive the dividend',
        'Position 2 — short puts are always assigned before dividends',
        'Position 4 — European puts settle early when a dividend is declared'
      ],
      a: 1,
      why: 'A call holder receives no dividend unless they exercise and actually own the shares. So an in-the-money short call is the classic early-assignment case around a dividend — and yours is in the money, with the strike at 405p and the share at 420p. **Position 4 is European and cannot be assigned early at all.** Note the timing: you would be delivering your shares at 405p and the dividend would go to somebody else. Early assignment arrives when it is least convenient, and that is not coincidence.' },

    { kind: 'choice',
      q: 'Which of these four positions has genuinely **undefined** risk?',
      options: [
        'Position 1 — the long call, since the share could fall to zero',
        'Position 2 — the naked short put, whose loss grows all the way down to zero',
        'Position 3 — the covered call, since the share could rise indefinitely',
        'None; all four have capped losses'
      ],
      a: 1,
      why: 'Position 1 and 4 are capped at the premium paid. Position 3 is covered — you own the shares, so you deliver them rather than buying at any price; the cost is upside surrendered. **Position 2 is the naked short put**: if the shares collapse you buy at 400p regardless, and the loss runs all the way to zero. **This is exactly the position the defined-risk-only rule exists to keep off your list while you learn.**' }
  ],
  onPass: 'Never sell an option whose assignment you could not comfortably handle tomorrow morning. That single rule prevents the operational failures that have no equivalent in any earlier track.'
}

]);
