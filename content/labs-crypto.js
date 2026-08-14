/* N1 Forex Academy — analysis labs for the Crypto track.

   Same contract as content/labs.js. Read the header of assets/labs.js for why
   these are worked exercises rather than simulator sessions.

   EVERY NUMBER HERE IS WORKED. Change a figure in a `dataset` and you must
   re-derive every `answer` that reads it.

   Kept deliberately unglamorous, matching the track: supply overhangs, the
   arithmetic of liquidation distance, annualised funding, and a custody
   decision with no comfortable answer. Token names are invented. */
window.DRILLS = (window.DRILLS || []).concat([

{
  id: 'cr-supply',
  kind: 'analysis',
  module: 501,
  title: 'Read the supply, not the story',
  brief: 'Three tokens, no whitepapers, no narratives. Work out what is actually outstanding, what is waiting to arrive, and which market is thinner than it looks.',
  dataset: [
    { type: 'table',
      title: 'Published supply data',
      head: ['Token', 'Price', 'Circulating', 'Total supply', 'Top 10 wallets hold'],
      rows: [
        ['Aldan',   '$2.00',  '800m',  '1,000m', '12% of supply'],
        ['Brightt', '$4.00',  '250m',  '1,000m', '61% of supply'],
        ['Corvid',  '$0.50',  '900m',  '1,000m', 'Data unavailable']
      ],
      foot: 'All three have the same **total supply of 1,000m tokens**, which makes the comparison clean. Market capitalisation on circulating supply = price × circulating.' },
    { type: 'note',
      body: '**Brightt** has a scheduled unlock in four months releasing **250m tokens** — equal to its entire current circulating supply. The date is published.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What is **Brightt\'s** market capitalisation on **circulating** supply, in millions of dollars?',
      prefix: '$', unit: 'm', placeholder: 'e.g. 500', answer: 1000, tol: 5,
      why: '$4.00 × 250m = **$1,000m**. This is the figure quoted everywhere, and on its own it is the smaller half of the story.' },

    { kind: 'calc',
      q: 'What is **Brightt\'s** market capitalisation on **total** supply, in millions of dollars?',
      prefix: '$', unit: 'm', placeholder: 'e.g. 500', answer: 4000, tol: 20,
      why: '$4.00 × 1,000m = **$4,000m** — four times the headline. Only 25% of the supply is currently tradeable, so three quarters of the eventual float is not yet in the market. That gap is the overhang, and computing both figures takes two minutes.' },

    { kind: 'choice',
      q: 'Brightt\'s unlock releases 250m tokens in four months, equal to its entire circulating supply. What does that mean?',
      options: [
        'Nothing — unlocks are already priced in by definition',
        'The tradeable supply doubles on a published date, which is a supply event you can see coming',
        'The price will definitely halve',
        'It only affects the team, not the market'
      ],
      a: 1,
      why: 'The tradeable float goes from 250m to 500m. Whether holders sell is unknown — but **the supply increase is scheduled, published, and visible to anyone who looks.** Claiming it is "priced in" is an assumption, not an observation. Claiming the price must halve is equally unfounded. What you can say is that a known supply event is coming.' },

    { kind: 'sort',
      q: 'Rank the three by supply-side risk, ignoring price action and narrative entirely.',
      buckets: ['Highest supply risk', 'Middling', 'Lowest supply risk'],
      items: [
        { label: 'Brightt — 25% circulating, huge unlock due, 61% held by ten wallets', bucket: 'Highest supply risk' },
        { label: 'Corvid — 90% circulating, but concentration data unavailable',        bucket: 'Middling' },
        { label: 'Aldan — 80% circulating, no unlock noted, 12% concentration',          bucket: 'Lowest supply risk' }
      ],
      why: '**Brightt** has all three problems at once: most of the supply not yet tradeable, a doubling event on a published date, and majority control in ten wallets. **Corvid** looks cleaner on supply but the concentration data is missing — **treat an absent figure as unknown, never as zero.** That is why it sits in the middle rather than at the bottom. **Aldan** is the cleanest of the three on supply alone, which is not a recommendation, only a reading of one dimension.' }
  ],
  onPass: 'This is the closest thing crypto has to reading a company\'s accounts. It is public, it is dull, and almost nobody does it — which is exactly why it is worth your time.'
},

{
  id: 'cr-liq',
  kind: 'analysis',
  module: 504,
  title: 'Find your liquidation price before you enter',
  brief: 'Traders quote leverage. Work out the number that actually decides whether you survive — how far price can move before the position ends — and compare it to what this asset does on an ordinary day.',
  dataset: [
    { type: 'table',
      title: 'The asset and the venue',
      head: ['', ''],
      rows: [
        ['Asset price', '$50,000'],
        ['Typical daily range', '4% of price'],
        ['Larger but ordinary day', '8% of price'],
        ['Funding rate', '0.01% per period'],
        ['Funding periods per day', '3'],
        ['Your position size', '$20,000 notional']
      ],
      foot: 'For this lab, treat the liquidation distance as approximately **100% ÷ leverage** — close enough to the real figure once maintenance margin is included, and the lesson does not depend on the last decimal.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'At **20x** leverage, roughly what percentage can price move against you before liquidation?',
      unit: '%', placeholder: 'e.g. 10', answer: 5, tol: 0.3,
      hint: '100 divided by the leverage.',
      why: '100 ÷ 20 = **5%**. Now hold that against the data above: an ordinary larger day moves this asset 8%. **A completely unremarkable day would end this position**, and no analysis was involved in that outcome.' },

    { kind: 'calc',
      q: 'At **100x** leverage, roughly what percentage move ends the position?',
      unit: '%', placeholder: 'e.g. 5', answer: 1, tol: 0.15,
      why: '100 ÷ 100 = **1%**. This asset moves 4% on a typical day. **At 100x you are not taking a risky position — you are taking one that a quiet Tuesday closes.** High leverage is a shorter fuse, not a bigger engine.' },

    { kind: 'calc',
      q: 'Funding is 0.01% per period, three periods a day. What is the **annualised** funding cost, as a percentage?',
      unit: '%', placeholder: 'e.g. 5', answer: 10.95, tol: 0.3,
      hint: 'Rate × periods per day × 365.',
      why: '0.01% × 3 × 365 = **10.95% a year**, charged on the full notional value. A figure that reads as a rounding error per period is an eleven percent annual cost — which is exactly why module 303 made you annualise roll cost too. **The cost never appears as a line item called "fee".**' },

    { kind: 'choice',
      q: 'Given a 4% typical daily range and an 8% ordinary larger day, what is the most defensible maximum leverage?',
      options: [
        'Whatever the venue permits, since it manages its own risk',
        'Low single digits at most — the liquidation distance must comfortably exceed an ordinary large day, which rules out 20x and above',
        '20x, because 5% is more than the 4% typical range',
        'It does not matter provided you use a stop loss'
      ],
      a: 1,
      why: 'At 20x the liquidation distance is 5%, against an ordinary larger day of 8% — **an unremarkable session ends you.** Even matching the typical 4% range leaves no margin at all. And a stop does not save you: in the liquidation cascade from module 503, price can travel through your stop and reach liquidation within seconds. **Platform limits describe what is allowed, never what is sensible.**' }
  ],
  onPass: 'Size from the liquidation distance, not from the leverage number. If an ordinary day would end the position, the leverage is not risky — it is simply wrong.'
},

{
  id: 'cr-custody',
  kind: 'analysis',
  module: 502,
  title: 'Choose your failure mode',
  brief: 'No comfortable answer here. Work out what you are actually exposed to under each way of holding, and decide which failure you are better equipped to prevent.',
  dataset: [
    { type: 'table',
      title: 'Your holdings',
      head: ['Where', 'Amount', 'Notes'],
      rows: [
        ['Exchange A',      '£8,000', 'Large venue, you trade here weekly'],
        ['Exchange B',      '£3,000', 'Smaller venue, used once for one token'],
        ['Hardware wallet', '£4,000', 'Seed phrase written on paper at home'],
        ['Hot wallet',      '£1,000', 'Connected to three applications since 2023']
      ],
      foot: 'Total holdings **£16,000**. Your written policy caps any single venue at **25% of crypto holdings**.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What percentage of your crypto holdings sits on **Exchange A**?',
      unit: '%', placeholder: 'e.g. 20', answer: 50, tol: 1,
      why: '£8,000 ÷ £16,000 = **50%**, against a policy cap of 25%. You are at double your own limit on a single venue — and this is the commonest state for someone who has been trading a while, because balances accumulate where you are active rather than where you decided they should be.' },

    { kind: 'calc',
      q: 'To bring Exchange A within the 25% cap, how much must you move off it?',
      prefix: '£', placeholder: 'e.g. 1000', answer: 4000, tol: 50,
      why: '25% of £16,000 = £4,000 permitted. You hold £8,000, so **£4,000 must move.** Note the cap is on your total holdings, so moving funds between venues changes the numerator, not the denominator.' },

    { kind: 'sort',
      q: 'Match each holding to the failure it is most exposed to.',
      buckets: ['Venue failure or frozen withdrawals', 'Lost keys — permanent and unrecoverable', 'Forgotten approvals draining it'],
      items: [
        { label: 'Exchange A — £8,000',                          bucket: 'Venue failure or frozen withdrawals' },
        { label: 'Exchange B — £3,000, used once',               bucket: 'Venue failure or frozen withdrawals' },
        { label: 'Hardware wallet — seed phrase on paper at home', bucket: 'Lost keys — permanent and unrecoverable' },
        { label: 'Hot wallet — connected to three apps since 2023', bucket: 'Forgotten approvals draining it' }
      ],
      why: 'Anything on an exchange is **a claim against that exchange** — module 101\'s queue with no regulator behind it. The hardware wallet removes that entirely and hands you the whole operational risk: a single paper copy is one house fire from permanent loss. The hot wallet carries standing approvals granted years ago, each of which is a spare key you never asked back. **Three different failures, none of them being wrong about the price.**' },

    { kind: 'choice',
      q: 'Exchange B holds £3,000 and you used it once, for one token. What does your policy suggest?',
      options: [
        'Leave it — £3,000 is within the 25% cap so nothing is wrong',
        'Move it off: it is inside the cap, but it carries full venue risk for a platform you no longer use, which is exposure bought for nothing',
        'Move everything there, since it is under the cap',
        'Nothing, because smaller venues are lower risk'
      ],
      a: 1,
      why: 'Being inside a cap is not a reason to hold something. **Venue risk is the price you pay for the convenience of trading there** — and you are not trading there. You are paying the risk and receiving none of the benefit. Note also that a smaller venue is generally *more* exposed to failure, not less, so the £3,000 is on the worse of the two platforms for the least reason.' }
  ],
  onPass: 'Neither custody option is safe; they fail differently. Balances drift to wherever you are active, so the cap has to be checked on a schedule rather than assumed.'
}

]);
