/* N1 Forex Academy — analysis labs for the equities and bonds tracks.

   These append to window.DRILLS with `kind: 'analysis'`, so the path engine,
   the Trading Floor listing and the certificates treat them exactly like the
   seven simulator drills. The renderer is assets/labs.js — read the note at the
   top of that file for why these are worked exercises rather than terminal
   drills.

   EVERY NUMBER HERE IS WORKED. If you edit a figure in a `dataset` table you
   must re-derive the `answer` on every task that reads it, or the lab will mark
   correct work as wrong. The derivations are written into each `why` so the
   student sees the arithmetic and the next editor can check it.

   Company and instrument names are invented. Any resemblance to a real listed
   company is accidental and none of this is a comment on any real business. */
window.DRILLS = (window.DRILLS || []).concat([

/* ========================= EQUITIES ========================= */

{
  id: 'eq-book',
  kind: 'analysis',
  module: 102,
  title: 'What the order book actually costs you',
  brief: 'The quote screen says one price. You pay another. Walk a real depth ladder, work out what your order genuinely cost, and see the charge that never appears on a contract note.',
  dataset: [
    { type: 'note', body: 'Northbrook Retail (NBR) — live depth, prices in pence. The last traded price on your broker\'s quote screen reads **412.0p**.' },
    { type: 'ladder',
      title: 'NBR — order book',
      offers: [
        { price: '412.0', size: '400' },
        { price: '412.5', size: '600' },
        { price: '413.0', size: '900' },
        { price: '414.0', size: '2,000' }
      ],
      bids: [
        { price: '411.5', size: '500' },
        { price: '411.0', size: '800' },
        { price: '410.0', size: '1,500' }
      ],
      foot: 'Offers above, bids below. You buy from the offers, starting at the cheapest and working up.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'You place a market order to buy **1,800 shares**. What average price per share do you actually pay, in pence?',
      unit: 'p', placeholder: 'e.g. 412.00', answer: 412.61, tol: 0.05,
      hint: 'Take the cheapest offers first and keep going until the order is filled.',
      why: '400 at 412.0 = 164,800p. 600 at 412.5 = 247,500p. That is 1,000 shares, so the last 800 come from the 413.0 level = 330,400p. Total 742,700p ÷ 1,800 shares = **412.61p**. You ate through three price levels, and each one was worse than the last.' },

    { kind: 'calc',
      q: 'Had the whole order filled at the 412.0p best offer, what would it have cost? How much **more** did you actually pay, in pounds?',
      prefix: '£', placeholder: 'e.g. 25.00', answer: 11, tol: 0.5,
      why: '1,800 × 412.0p = 741,600p. You paid 742,700p. The difference is 1,100p = **£11.00**. That is market impact: a genuine cost, caused entirely by your own order, and it appears nowhere on your statement. On a small order it is pennies. Scale the order up and it stops being pennies.' },

    { kind: 'choice',
      q: 'A different company quotes a **1p spread** — as tight as NBR — but has only **150 shares** resting on each side. It is:',
      options: [
        'More liquid than NBR, since the spread is comparable',
        'Thin — spread and depth are different things, and your own order would move the price',
        'Safe to trade in any size, because the spread is what matters',
        'Mispriced, and worth buying'
      ],
      a: 1,
      why: 'A tight quote with nothing behind it is the classic trap. The spread describes the price of the first few shares; **depth** describes how many you can actually get. Trade size in a name like that and you push the price up buying in, then find nobody to sell to on the way out.' },

    { kind: 'choice',
      q: 'Your broker\'s quote screen showed 412.0p before you traded. What was that number?',
      options: [
        'The price you were guaranteed',
        'The best offer available to you',
        'The price of the last completed trade — not necessarily what you can buy at',
        'The closing auction price'
      ],
      a: 2,
      why: 'The headline figure on a quote screen is the **last trade**. It might have been a sale hitting the bid, at a completely different price from the one you can buy at. Look at the book, not the headline.' }
  ],
  onPass: 'You now know why a fill can disappoint even when nothing went wrong — and why "trade only names with deep books" is a rule rather than a preference.'
},

{
  id: 'eq-compare',
  kind: 'analysis',
  module: 104,
  title: 'Two companies, six numbers',
  brief: 'Two builders in the same sector. One looks half the price of the other on every measure. Work the ratios yourself and decide whether that is an opportunity or a warning.',
  dataset: [
    { type: 'table',
      title: 'Both companies build houses in the same market. Latest published figures.',
      head: ['', 'Halewood Group', 'Trentbridge plc'],
      rows: [
        ['Share price', '240p', '90p'],
        ['Shares in issue', '200m', '300m'],
        ['Net income (last year)', '£48m', '£45m'],
        ['Free cash flow', '£52m', '£12m'],
        ['Net debt', '£60m', '£185m'],
        ['Dividend per share', '12p', '18p']
      ],
      foot: 'Everything you need is on this table. Work in pence per share where it helps.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'What are **Trentbridge\'s** earnings per share, in pence?',
      unit: 'p', placeholder: 'e.g. 20', answer: 15, tol: 0.2,
      hint: 'Net income divided by the number of shares.',
      why: '£45m ÷ 300m shares = **15p per share**. (Halewood, for comparison: £48m ÷ 200m = 24p.)' },

    { kind: 'calc',
      q: 'What is **Trentbridge\'s** price-to-earnings ratio?',
      placeholder: 'e.g. 12', answer: 6, tol: 0.15,
      why: '90p ÷ 15p = **6**. Halewood trades on 240p ÷ 24p = 10. So Trentbridge looks 40% cheaper on earnings — which is a question, not an answer.' },

    { kind: 'calc',
      q: 'What percentage of its earnings is **Trentbridge** paying out as dividends?',
      unit: '%', placeholder: 'e.g. 60', answer: 120, tol: 1,
      why: '18p paid out of 15p earned = **120%**. It is distributing more than it makes, funded from borrowings or reserves. Halewood pays 12p of 24p = 50%, which is comfortably covered.' },

    { kind: 'choice',
      q: 'Trentbridge is on a P/E of 6 and yields 20% (18p on a 90p share). Halewood is on 10 and yields 5%. What is the best reading?',
      options: [
        'Trentbridge is the obvious buy — cheaper and a far better income',
        'Trentbridge shows the classic value-trap profile: a payout above 100%, cash flow far below reported profit, and net debt more than 15× free cash flow',
        'Both are equally attractive, since they are in the same sector',
        'The figures are not comparable between two companies'
      ],
      a: 1,
      why: 'Every "cheap" signal has the same cause. Free cash flow of £12m against £45m of reported profit says the earnings are not turning into cash. Net debt of £185m against £12m of free cash flow is over 15 years of cash to clear it — Halewood\'s is barely over one. And a 120% payout cannot continue. **The 20% yield is not generosity; it is a share price that has already fallen because the market expects the dividend to be cut.** Cheap for a reason.' }
  ],
  onPass: 'That is what "a low P/E is a question, not an answer" means in practice. The ratio told you where to look; the cash flow and the debt told you what you found.'
},

{
  id: 'eq-exposure',
  kind: 'analysis',
  module: 106,
  title: 'Count what you actually own',
  brief: 'Six sensible-looking holdings on a statement. Group them properly, find the company you own twice without realising, and discover the concentration nobody put there on purpose.',
  dataset: [
    { type: 'table',
      title: 'Your portfolio — total value £40,000',
      head: ['Holding', 'Value', 'Business'],
      rows: [
        ['Broad market index ETF', '£12,000', 'Tracks the whole market'],
        ['Marlow Bank', '£5,000', 'High-street bank'],
        ['Severn Union Bank', '£4,000', 'High-street bank'],
        ['Kestrel Financial', '£4,000', 'Business lender'],
        ['Calder Energy', '£6,000', 'Oil and gas producer'],
        ['Ashdown Pharma', '£9,000', 'Drug manufacturer']
      ] },
    { type: 'note',
      body: 'The ETF publishes its largest holdings. **8% of the fund is Marlow Bank**, 6% is Calder Energy and 5% is Ashdown Pharma. Your written policy sets a **maximum of 30% in any one sector**.' }
  ],
  tasks: [
    { kind: 'sort',
      q: 'Group the five individual holdings by sector.',
      buckets: ['Banking & finance', 'Energy', 'Healthcare'],
      items: [
        { label: 'Marlow Bank', bucket: 'Banking & finance' },
        { label: 'Severn Union Bank', bucket: 'Banking & finance' },
        { label: 'Kestrel Financial', bucket: 'Banking & finance' },
        { label: 'Calder Energy', bucket: 'Energy' },
        { label: 'Ashdown Pharma', bucket: 'Healthcare' }
      ],
      why: 'Kestrel is the one people miss. It does not have "Bank" in the name, but a business lender responds to the same interest rates and the same credit conditions as the other two. **Group by what drives the business, not by what it is called.**' },

    { kind: 'calc',
      q: 'Counting only the direct holdings, what percentage of the portfolio sits in banking and finance?',
      unit: '%', placeholder: 'e.g. 20', answer: 32.5, tol: 0.3,
      why: '£5,000 + £4,000 + £4,000 = £13,000, out of £40,000 = **32.5%**. Three separate lines on a statement, one bet on interest rates and credit conditions — and it is already over your 30% limit before the ETF is counted at all.' },

    { kind: 'calc',
      q: 'What is your **true** exposure to Marlow Bank in pounds, counting what you hold inside the ETF?',
      prefix: '£', placeholder: 'e.g. 5000', answer: 5960, tol: 5,
      hint: 'The fund is £12,000 and 8% of it is Marlow Bank.',
      why: '£5,000 directly, plus 8% of £12,000 = £960 inside the fund. **£5,960 in total** — nearly 20% more than the statement suggests. Nothing on your account screen tells you this. You have to go and read the fund\'s holdings.' },

    { kind: 'choice',
      q: 'Your policy caps any sector at 30%. What does the rule require here?',
      options: [
        'Nothing — the individual positions are each under 15%',
        'Trim the banking exposure: it is 32.5% on the direct holdings alone, and the ETF pushes it higher still',
        'Sell the ETF, since it causes the overlap',
        'Raise the limit to 35%, since three banks is reasonable diversification'
      ],
      a: 1,
      why: 'The limit binds on the **group**, not the line. Banking is over the cap before the fund is counted, and the fund adds more of the same. Note that selling the ETF is the wrong fix — it is the one holding genuinely spreading your risk. The concentration came from three separate decisions that each looked modest on their own.' }
  ],
  onPass: 'Nobody sets out to put a third of a portfolio into one industry. It happens one reasonable-looking purchase at a time, which is exactly why the limit is counted by group and checked on a schedule.'
},

{
  id: 'eq-gap',
  kind: 'analysis',
  module: 107,
  title: 'Size it, then gap it',
  brief: 'Size a position properly at 1% risk, exactly as the module taught. Then find out what a scheduled overnight gap does to it — and why the stop was never going to help.',
  dataset: [
    { type: 'table',
      title: 'The trade',
      head: ['', ''],
      rows: [
        ['Portfolio value', '£25,000'],
        ['Risk per trade (your policy)', '1%'],
        ['Entry price', '480p'],
        ['Stop price (below the support zone)', '440p'],
        ['Maximum position size (your policy)', '10% of portfolio']
      ] },
    { type: 'note',
      body: 'The company reports results in nine days. You have not checked that date. Work through the sizing first.' }
  ],
  tasks: [
    { kind: 'calc',
      q: 'How many shares should you buy?',
      unit: 'shares', placeholder: 'e.g. 500', answer: 625, tol: 1,
      hint: 'Risk amount ÷ per-share stop distance.',
      why: 'Risk amount = £25,000 × 1% = £250. Stop distance = 480p − 440p = 40p = £0.40 per share. **£250 ÷ £0.40 = 625 shares.** The chart set the stop, and the share count fell out of it — never the other way round.' },

    { kind: 'calc',
      q: 'What percentage of your portfolio is that position worth?',
      unit: '%', placeholder: 'e.g. 8', answer: 12, tol: 0.2,
      why: '625 shares × £4.80 = **£3,000**, which is 12% of £25,000. Look carefully at those two numbers: **you are risking 1% and holding 12%.** They are not the same thing, and only one of them is protected by your stop. It is also already over your own 10% position limit.' },

    { kind: 'calc',
      q: 'Results land overnight and the shares open 40% lower, at 288p. What is your loss in pounds?',
      prefix: '£', placeholder: 'e.g. 250', answer: 1200, tol: 10,
      hint: 'The market was shut. Your stop at 440p had nothing to fill against.',
      why: '480p − 288p = 192p lost per share. 625 × £1.92 = **£1,200** — which is 4.8% of your portfolio, not the 1% you sized for. The stop at 440p never traded, because no trading happened between 480p and 288p for it to fill at.' },

    { kind: 'choice',
      q: 'You sized carefully to risk 1% and lost 4.8%. What actually drove that loss?',
      options: [
        'The stop was placed badly and should have been tighter',
        'Position size — a gap bypasses the stop entirely, so concentration decides the loss, not your risk percentage',
        'Bad luck; a 40% gap is not something anyone can plan for',
        'The risk percentage was too high and should have been 0.5%'
      ],
      a: 1,
      why: 'A tighter stop would have made it **worse** — it would have bought more shares for the same 1% risk, so the gap would have cost more. A lower risk percentage helps a little, but the real control is the **position size cap**, which is why equities need two limits where forex needed one. And the date was published nine days in advance. Ask the question before you buy: *what would a 40% overnight gap do to me?*' }
  ],
  onPass: 'This is the single most important exercise in the equities track. Risk percentage protects you while the market is trading. Position size protects you when it is not.'
},

/* ========================= BONDS ========================= */

{
  id: 'bd-inverse',
  kind: 'analysis',
  module: 202,
  title: 'Rates move, and your bond moves',
  brief: 'Watch a bond nobody defaulted on lose 8% of its value. Then work out what you actually lost — which is not what the screen says.',
  dataset: [
    { type: 'table',
      title: 'The bond you hold',
      head: ['', ''],
      rows: [
        ['Issuer', 'Government, own currency'],
        ['Coupon', '5% a year'],
        ['Face value', '100'],
        ['Years to maturity', '5'],
        ['Price you paid', '100 (par)'],
        ['Duration', '4.3']
      ] },
    { type: 'note',
      body: 'A month later, comparable five-year bonds are being issued at **7%**. Nothing about your bond has changed — same issuer, same coupon, same maturity date.' }
  ],
  tasks: [
    { kind: 'choice',
      q: 'What happens to the market price of the bond you already hold?',
      options: [
        'It rises, because interest rates are now higher',
        'It falls, until its remaining payments offer a buyer around 7%',
        'It stays at 100, because the coupon is fixed',
        'It depends on whether the government issues more debt'
      ],
      a: 1,
      why: 'Nobody pays full value for a 5% bond when 7% is available on the shelf. It is the locked savings account: you are stuck at 5% while the bank next door advertises 7%, so anyone taking yours off your hands wants a discount. **Nothing changed about your bond — the alternatives changed, and price is always relative to alternatives.**' },

    { kind: 'calc',
      q: 'Yields rose by 2 percentage points. Using the duration of 4.3, roughly what percentage does the price fall?',
      unit: '%', placeholder: 'e.g. 5', answer: 8.6, tol: 0.3,
      hint: 'Price change ≈ − duration × yield change.',
      why: '4.3 × 2% = **8.6%**, taking the price from 100 to about 91.4. Down 8.6% on a government bond, with nobody defaulting on anything. This is why "bonds are safe" is a misleading sentence — they are *defined*, which is a different word.' },

    { kind: 'calc',
      q: 'You decide to hold to maturity and the issuer pays everything as promised. Over the five years, how much do you receive in coupons per 100 of face value?',
      placeholder: 'e.g. 20', answer: 25, tol: 0.2,
      why: '5 a year × 5 years = **25**, plus your 100 back at maturity. Every payment arrives exactly as contracted. The 8.6% "loss" was a market price along the way, and market prices pull back to par as maturity approaches.' },

    { kind: 'choice',
      q: 'So what did you genuinely lose by holding this bond through the rate rise?',
      options: [
        'Nothing at all — the loss was imaginary',
        '8.6% of your capital, permanently',
        'Opportunity: your money earned 5% for five years while 7% was available',
        'The coupons, which are reduced when rates rise'
      ],
      a: 2,
      why: 'You got every promised payment, so nothing was permanently destroyed — but your capital sat earning 5% while better was on offer. **That is a real cost and a completely different kind of cost from a permanent loss.** Confusing the two is what makes people sell perfectly sound bonds at the worst possible moment. It also means the answer depends entirely on whether you can hold: if you might need the money early, that price move is your whole risk.' }
  ],
  onPass: 'Price risk and default risk are two different things, and only one of them disappears if you hold to maturity.'
},

{
  id: 'bd-duration',
  kind: 'analysis',
  module: 203,
  title: 'Which bond hurts most',
  brief: 'Four bonds, one rate rise. Work out which one does the damage — and what an investor reaching for a higher yield has actually signed up for.',
  dataset: [
    { type: 'table',
      title: 'Four bonds, same issuer, same credit quality',
      head: ['Bond', 'Maturity', 'Coupon', 'Duration'],
      rows: [
        ['A', '2 years', '8%', '1.9'],
        ['B', '10 years', '5%', '7.8'],
        ['C', '30 years', 'None (zero-coupon)', '30.0'],
        ['D', '10 years', '2%', '9.1']
      ],
      foot: 'Credit quality is identical across all four, so the only thing that differs is sensitivity to interest rates.' }
  ],
  tasks: [
    { kind: 'sort',
      q: 'Sort each bond into its rate-sensitivity band.',
      buckets: ['Barely moves', 'Moves noticeably', 'Moves violently'],
      items: [
        { label: 'A — 2 years, 8% coupon', bucket: 'Barely moves' },
        { label: 'B — 10 years, 5% coupon', bucket: 'Moves noticeably' },
        { label: 'D — 10 years, 2% coupon', bucket: 'Moves noticeably' },
        { label: 'C — 30 years, zero-coupon', bucket: 'Moves violently' }
      ],
      why: 'Duration is the whole answer: 1.9, 7.8, 9.1 and 30.0. **C is the extreme case** — a zero-coupon bond pays nothing until the very end, so every penny of it sits right out at the tip of the see-saw and its duration equals its maturity exactly. It sounds like the dullest asset on the list and it moves like a leveraged position.' },

    { kind: 'choice',
      q: 'B and D both mature in ten years. Why does D have the longer duration?',
      options: [
        'Longer-dated bonds always have higher duration, and D matures later',
        'D pays a smaller coupon, so more of its value arrives at the end — the average wait for your money is longer',
        'D is riskier credit',
        'Lower coupons are more heavily taxed'
      ],
      a: 1,
      why: 'Duration is the weighted average time until you actually receive your money. B hands you 5 a year along the way, pulling your average wait shorter. D only hands you 2, so far more of its value is sitting at the maturity date — out at the end of the see-saw. **Same maturity, different sensitivity, purely because of the coupon.**' },

    { kind: 'calc',
      q: 'Yields rise by 0.5%. Roughly what percentage does bond **C** lose?',
      unit: '%', placeholder: 'e.g. 10', answer: 15, tol: 0.5,
      why: '30.0 × 0.5% = **15%**. A half-point move in interest rates — barely a headline — takes 15% off a government bond of the highest credit quality. For comparison, bond A loses 1.9 × 0.5 = about 0.95%.' },

    { kind: 'choice',
      q: 'An investor sells bond A and buys bond C, purely because C offers a higher yield. What have they actually done?',
      options: [
        'Secured a better return with no additional risk, since the credit quality is the same',
        'Taken a large directional bet on interest rates, whether or not they meant to',
        'Reduced their portfolio risk by holding a longer-dated government bond',
        'Removed reinvestment risk, which makes it the safer choice'
      ],
      a: 1,
      why: 'They went from duration 1.9 to duration 30 — a **fifteen-fold increase** in rate sensitivity. The extra yield is not free money; it is the compensation for exactly that risk. A single 0.5% rate rise erases several years of the additional income in a few weeks. **Reaching for yield by extending duration is a rate bet, and most people making it have not noticed they made it.**' }
  ],
  onPass: 'Duration is your position sizing tool here, the way ATR was in the forex track. Before buying anything: multiply the duration by one, and ask whether you could live with that number.'
},

{
  id: 'bd-curve',
  kind: 'analysis',
  module: 205,
  title: 'Read the curve, then follow it through',
  brief: 'Three snapshots of the same government\'s borrowing costs. Say what each one is pricing, work out which end of the curve moved, and trace one decision through all three markets you have studied.',
  dataset: [
    { type: 'table',
      title: 'Yields by maturity, two different days',
      head: ['Maturity', 'Curve X', 'Curve Y', 'Curve Y, six months later'],
      rows: [
        ['2 years', '3.0%', '5.2%', '4.2%'],
        ['5 years', '3.6%', '4.6%', '4.2%'],
        ['10 years', '4.0%', '4.1%', '4.3%'],
        ['30 years', '4.4%', '4.0%', '4.5%']
      ],
      foot: 'Same issuer throughout. Only the shape has changed.' }
  ],
  tasks: [
    { kind: 'choice',
      q: 'Which curve is inverted, and what is it pricing?',
      options: [
        'Curve X — long-dated bonds yield more, which means inflation is expected',
        'Curve Y — short-dated bonds yield more than long, so the market expects rates to be lower in future',
        'Neither; both slope upward',
        'Both, since each has a downward segment'
      ],
      a: 1,
      why: 'Curve Y runs 5.2% at two years down to 4.0% at thirty. People are accepting **less** to lend for thirty years than for two, which only makes sense if they expect rates to be cut. And rates get cut when growth is weakening. Curve X is the ordinary upward slope — that is the default state, and therefore **the absence of a signal** rather than a signal.' },

    { kind: 'calc',
      q: 'Take Curve Y and the same curve six months later. By how many percentage points did the gap between the 10-year and the 2-year change?',
      unit: 'points', placeholder: 'e.g. 0.5', answer: 1.2, tol: 0.05,
      hint: 'Work out (10-year − 2-year) on each day, then compare.',
      why: 'Before: 4.1 − 5.2 = **−1.1**. After: 4.3 − 4.2 = **+0.1**. The gap moved by **1.2 points**, and the curve has gone from inverted to normal. That is a steepening.' },

    { kind: 'choice',
      q: 'Someone tells you "the curve steepened". Looking at which end actually moved, what is being priced?',
      options: [
        'Rising long-end yields, suggesting inflation or heavy government borrowing',
        'The front end fell a full point while the long end barely moved — the market is pricing interest rate cuts',
        'Nothing meaningful; steepening is a technical description only',
        'Both ends rose equally, so it is a parallel shift'
      ],
      a: 1,
      why: 'The 2-year fell from 5.2% to 4.2% — a whole point. The 10-year went the other way by just 0.2%. **Almost all the movement was at the front end**, which is dominated by expectations of the central bank. That is the market pricing cuts, and it means something completely different from a steepening driven by long yields rising. This is why "which end moved?" is the essential follow-up question — the direction alone is nearly meaningless.' },

    { kind: 'choice',
      q: 'Instead, the central bank now signals rates will be **higher for longer**. In what order do the three markets you have studied respond?',
      options: [
        'Equities fall first, then bonds reprice, then the currency follows',
        'Bonds reprice first, the currency strengthens as capital chases the higher expected yield, and equity valuations compress',
        'All three move simultaneously and by the same amount',
        'The currency moves first, and bonds are unaffected'
      ],
      a: 1,
      why: 'Rate expectations live in the bond market, so bonds price it first — yields up, existing prices down, curve reshaped. The **currency** follows because higher expected returns pull money in, and buying the currency is how money gets there. **Equities** compress for two reasons at once: future earnings are discounted more heavily, and bonds have just become a more competitive alternative to owning shares. One event, three markets, one mechanism — which is why forex traders who know what they are doing watch bonds.' }
  ],
  onPass: 'That closes the loop. The rates you met in this track are the same rates driving the currency pairs you started with twenty-five modules ago.'
}

]);
