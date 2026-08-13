/* N1 Forex Academy — lesson breakdown for the Equities track (101–108).
   Merges into window.LESSONS. Same contract as the forex lessons: short
   lessons, a two-question check on that lesson, both answers must be right. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  /* ================= MODULE 101 — What a share is ================= */
  L[101] = [
    {
      title: 'Ownership, and where your money goes',
      slides: [0, 1],
      check: [
        { q: 'You buy 500 shares on the exchange. Who receives your money?',
          options: ['The company, as new capital', 'Another investor who sold those shares', 'The exchange', 'The company\'s lenders'],
          a: 1,
          why: 'That is a secondary-market trade — the shares already existed. The company only receives money in the primary market, such as an IPO or a fresh issuance.' },
        { q: 'The fundamental break from forex is that a share:',
          options: ['Trades on a chart', 'Is a claim on a real business with earnings, so it can be worth more in ten years because the business grew', 'Has tighter spreads', 'Cannot fall in value'],
          a: 1,
          why: 'A currency has no earnings and pays no dividend. An equity represents an enterprise, which is why buy-and-hold is defensible in an index and meaningless in a currency pair.' }
      ]
    },
    {
      title: 'Exchanges and what ownership gets you',
      slides: [2, 3],
      check: [
        { q: 'What does a centralised exchange give you that forex does not?',
          options: ['Round-the-clock trading', 'A single visible order book, real published volume and one official closing price', 'Guaranteed liquidity', 'Freedom from gaps'],
          a: 1,
          why: 'Forex has no central tape, so volume on your chart was your broker\'s. The trade-off is that exchanges close, giving overnight gap risk you cannot trade through.' },
        { q: 'In a liquidation, shareholders are paid:',
          options: ['First, as owners', 'Before lenders but after employees', 'Last, after every creditor and bondholder', 'At the same time as bondholders'],
          a: 2,
          why: 'Equity is a residual claim — you get whatever is left, frequently nothing. This is exactly why the same company\'s bonds are less volatile and yield less.' }
      ]
    },
    {
      title: 'Drift, and an honest account',
      slides: [4, 5, 6],
      check: [
        { q: 'Broad indices have drifted upward historically. Does that apply to a single company you hold?',
          options: ['Yes, shares recover eventually', 'No — indices survive partly by replacing their failures, and your holding gets no such treatment', 'Only for dividend payers', 'Only above ten years'],
          a: 1,
          why: 'The index record is partly a record of continuously removing losers. Individual companies fail permanently, so "it\'ll come back" is a claim about indices, not about your holding.' },
        { q: 'Compared with a major currency, an individual share:',
          options: ['Is inherently safer', 'Can go to zero permanently, which a major currency does not', 'Moves less', 'Has no gap risk'],
          a: 1,
          why: 'Fully paid shares cannot go below zero, which is a genuine advantage. But permanent total loss is a real outcome for a single company in a way it is not for a major currency.' }
      ]
    }
  ];

  /* ================= MODULE 102 — Pricing and trading ================= */
  L[102] = [
    {
      title: 'The order book and liquidity',
      slides: [0, 1],
      check: [
        { q: 'The price on a quote screen is:',
          options: ['What you will pay', 'The price of the last completed trade', 'The best offer', 'The closing auction price'],
          a: 1,
          why: 'The headline figure is the last trade. You will pay the current best offer, and a larger order reaches further up the book — that extra cost is market impact and never appears on your contract note.' },
        { q: 'A name with a tight spread but almost nothing resting on the book is:',
          options: ['Highly liquid', 'Thin — your own order would move the price', 'Safe to trade in size', 'Mispriced'],
          a: 1,
          why: 'Spread and depth are different things. A name can quote tightly with very little behind it, and then your order becomes the news.' }
      ]
    },
    {
      title: 'Orders and the shape of the day',
      slides: [2, 3],
      check: [
        { q: 'A market buy order in equities:',
          options: ['Adds liquidity to the book', 'Removes liquidity by consuming resting offers', 'Always fills at the last traded price', 'Waits for the closing auction'],
          a: 1,
          why: 'Market orders consume what is resting; limit orders rest and provide it. This also explains why a limit may not fill even when price touches your level — you were behind others in the queue.' },
        { q: 'Why do the first and last thirty minutes behave differently?',
          options: ['Exchanges widen spreads deliberately', 'Auctions concentrate huge volume at the open and close, and price discovery after an overnight break is unsettled', 'Retail traders are more active', 'Algorithms switch off'],
          a: 1,
          why: 'The opening auction resolves everything accumulated overnight, and the closing auction carries index-fund flow that must trade at the official close.' }
      ]
    },
    {
      title: 'Settlement, halts and costs',
      slides: [4, 5, 6],
      check: [
        { q: 'A stock is halted pending news while you hold it with a stop loss. What happens?',
          options: ['The stop executes at the last price', 'The broker closes it for you', 'Nothing — the stop waits until trading resumes, then fills at whatever price appears', 'The exchange guarantees your stop'],
          a: 2,
          why: 'You cannot exit during a halt, and the resumption price is frequently far away. This has no equivalent in major forex and must be allowed for by sizing, not assumed away.' },
        { q: 'Which cost applies to a share CFD but not to shares you own outright?',
          options: ['Spread', 'Commission', 'Overnight financing', 'Market impact'],
          a: 2,
          why: 'Fully paid shares have nothing to finance. A CFD is a leveraged position carrying a daily charge — the same mechanism as forex swap, and it punishes long holds equally.' }
      ]
    }
  ];

  /* ================= MODULE 103 — Shares vs CFDs ================= */
  L[103] = [
    {
      title: 'Two products, one price chart',
      slides: [0, 1],
      check: [
        { q: 'You hold a share CFD for six months versus owning the shares. You will have paid:',
          options: ['Less, CFDs are cheaper', 'The same, the price is identical', 'More, because of daily financing on the full position value', 'Nothing extra'],
          a: 2,
          why: 'CFDs are cheap to open and expensive to hold; owned shares are the reverse. Financing accrues nightly on the whole exposure, so over months it dominates.' },
        { q: 'The key structural advantage of owning shares outright is:',
          options: ['Higher returns', 'You cannot lose more than you paid, and there is no cost to hold', 'Tighter spreads', 'Faster execution'],
          a: 1,
          why: 'No financing, no margin call, and loss bounded at your outlay. Students routinely give that up by reaching for leverage out of impatience.' }
      ]
    },
    {
      title: 'Leverage, dividends and shorting',
      slides: [2, 3, 4],
      check: [
        { q: 'Why is leverage more dangerous in equities than in major currencies?',
          options: ['Brokers offer more of it', 'Equities gap overnight far more often — earnings and company news arrive while the exchange is shut', 'Spreads are wider', 'Stops are not allowed'],
          a: 1,
          why: 'A 20% earnings gap against a 5:1 leveraged position is a total loss, and the stop fills at the gapped open. Hence the rule: no leverage held through a scheduled earnings date.' },
        { q: 'You are short a share CFD across an ex-dividend date. What happens?',
          options: ['You receive the dividend adjustment', 'You pay the dividend adjustment', 'Nothing, CFDs ignore dividends', 'The position closes automatically'],
          a: 1,
          why: 'Long CFDs receive a cash adjustment mirroring the dividend; shorts pay it. It is an adjustment rather than a dividend, and the tax treatment differs.' }
      ]
    },
    {
      title: 'Choosing the right tool',
      slides: [5, 6],
      check: [
        { q: 'You have a six-month directional idea. Which product fits?',
          options: ['A CFD, for the capital efficiency', 'Owning the shares, because financing over six months dominates the capital advantage', 'Either, they are equivalent', 'Neither'],
          a: 1,
          why: 'The crossover is usually a matter of weeks. Match the product to the holding period rather than defaulting to the one that feels familiar from forex.' },
        { q: 'Shorting a share differs from shorting a currency pair because:',
          options: ['It is banned for retail', 'It needs the stock borrowed when done outright, borrow may be costly or unavailable, and the theoretical loss is unbounded', 'Shares cannot fall', 'The broker guarantees the price'],
          a: 1,
          why: 'In forex, long and short are structurally symmetrical. In equities they are not — a share can rise without limit but only fall to zero.' }
      ]
    }
  ];

  /* ================= MODULE 104 — Reading a company ================= */
  L[104] = [
    {
      title: 'The figures that matter',
      slides: [0, 1],
      check: [
        { q: 'Which figure is hardest to massage through accounting choices?',
          options: ['Revenue', 'Net income', 'Free cash flow', 'Earnings per share'],
          a: 2,
          why: 'Cash either arrived or it did not. Revenue recognition and the judgements feeding net income leave far more legitimate room for presentation.' },
        { q: 'A company grows revenue strongly for three years while free cash flow falls. This is:',
          options: ['Normal and unimportant', 'A warning worth investigating — sales are rising but cash is not', 'Proof of fraud', 'Only relevant to lenders'],
          a: 1,
          why: 'Revenue is what comes in the door. A business can grow sales for years while losing money on every one, and cash flow is where that shows up first.' }
      ]
    },
    {
      title: 'Valuation and income',
      slides: [2, 3],
      check: [
        { q: 'A company trades on a P/E of 5 while its sector averages 15. The correct response is:',
          options: ['Buy, it is clearly cheap', 'Ask why the market prices it lower and look for the reason', 'Ignore it', 'Compare it to a technology company'],
          a: 1,
          why: 'A low P/E means the market expects earnings to fall or sees a risk you have not found. Sometimes it is mispriced; often it is a value trap. The ratio is where research begins.' },
        { q: 'A dividend yield rose from 3% to 9% with the dividend unchanged. What happened?',
          options: ['The payout increased', 'The share price fell by roughly two thirds', 'More shares were issued', 'Yields track inflation'],
          a: 1,
          why: 'Yield is dividend divided by price. A tripled yield on an unchanged dividend means the price collapsed — and a market pricing in a probable cut.' }
      ]
    },
    {
      title: 'Debt, and the limits of ratios',
      slides: [4, 5, 6],
      check: [
        { q: 'Why does net debt matter more than total borrowings?',
          options: ['It is easier to compute', 'It subtracts cash, showing what is actually owed on balance', 'Regulators require it', 'It excludes long-term debt'],
          a: 1,
          why: 'A company with large borrowings and equally large cash is in a very different position. Compare net debt to earnings or cash flow — the ability to service it decides survival.' },
        { q: 'The honest limit of ratio analysis is that ratios are:',
          options: ['Always wrong', 'Backward-looking, shaped by accounting choices, and only comparable within a sector', 'Only useful for large companies', 'Superior to reading the accounts'],
          a: 1,
          why: 'They describe what has happened, filtered through legitimate judgement calls. Fundamental analysis narrows the field and rules out obvious problems; it does not produce certainty.' }
      ]
    }
  ];

  /* ================= MODULE 105 — Earnings and catalysts ================= */
  L[105] = [
    {
      title: 'The earnings cycle',
      slides: [0, 1],
      check: [
        { q: 'A company beats on revenue and earnings, and the share falls 9%. Most likely:',
          options: ['The market is irrational', 'Guidance was weak, and the beat was already priced in', 'The results were fraudulent', 'A trading error'],
          a: 1,
          why: 'Price is positioned for consensus before the release. Guidance describes the future, which is what the market prices — the same mechanism as economic surprises in the forex track.' },
        { q: 'Most companies report outside trading hours. The consequence is:',
          options: ['The move is smaller', 'The reaction arrives as an overnight gap that no stop protects against', 'You can exit during the announcement', 'Spreads narrow'],
          a: 1,
          why: 'The exchange is shut when the news lands. Your stop fills at the gapped open, which is why scheduled earnings are a sizing decision rather than a trading opportunity.' }
      ]
    },
    {
      title: 'Corporate actions and surprises',
      slides: [2, 3],
      check: [
        { q: 'A 4-for-1 stock split turns your 100 shares into 400. Your holding is now worth:',
          options: ['Four times as much', 'The same — the price adjusts proportionally', 'A quarter as much', 'It depends on the dividend'],
          a: 1,
          why: 'A split divides the same claim into more pieces. It can improve liquidity and accessibility, but nothing about the business or the value of your stake changed.' },
        { q: 'Which event typically produces the largest single-day fall?',
          options: ['A scheduled earnings miss', 'An unscheduled profit warning', 'A dividend cut', 'A stock split'],
          a: 1,
          why: 'Scheduled results are partly anticipated and hedged. An unscheduled warning arrives with no positioning, and repricing is immediate and severe.' }
      ]
    },
    {
      title: 'Your events policy',
      slides: [4, 5],
      check: [
        { q: 'The non-negotiable part of an events policy is:',
          options: ['Always closing before earnings', 'Always knowing the earnings date before opening a position', 'Never holding overnight', 'Trading only after results'],
          a: 1,
          why: 'Holding through earnings on a properly sized unleveraged position is defensible. Not knowing the date is negligence rather than risk-taking, and checking takes ten seconds.' },
        { q: 'You ignore the paperwork for a rights issue. What happens?',
          options: ['Nothing, they are optional and harmless', 'You are diluted — others bought discounted new shares and your stake shrinks', 'Your shares are sold', 'You get the discount anyway'],
          a: 1,
          why: 'A rights issue lets existing holders maintain their proportion by buying discounted shares. Declining means the company is divided into more pieces and your slice is smaller.' }
      ]
    }
  ];

  /* ================= MODULE 106 — Indices and sectors ================= */
  L[106] = [
    {
      title: 'Indices and funds',
      slides: [0, 1],
      check: [
        { q: 'A capitalisation-weighted index rose 1%. What does that tell you about the average constituent?',
          options: ['Most rose about 1%', 'Very little — a few giants can drive the index while most constituents fall', 'All rose', 'The median rose more'],
          a: 1,
          why: 'Cap weighting means the largest companies dominate the number. Comparing with the equal-weighted version of the same index often reveals a very different picture.' },
        { q: 'An index ETF removes which risk, and leaves which?',
          options: ['Removes all risk', 'Removes single-company risk, leaves market risk entirely intact', 'Removes market risk, leaves company risk', 'Removes currency risk only'],
          a: 1,
          why: 'Diversification within a market eliminates idiosyncratic risk, so no single failure ruins you. Systematic risk remains — when the index falls 30%, so does the fund.' }
      ]
    },
    {
      title: 'Beta and sectors',
      slides: [2, 3],
      check: [
        { q: 'A share has a beta of 1.6 and the market falls 5%. Roughly expect:',
          options: ['A 3% fall', 'An 8% fall', 'No change', 'An 8% rise'],
          a: 1,
          why: 'Beta above 1 means the share historically amplifies market moves. It is a tendency rather than a rule, and it is least reliable exactly when markets are most extreme.' },
        { q: 'You own ten shares, all technology companies. You are:',
          options: ['Well diversified', 'Holding essentially one sector bet with ten expressions of it', 'Protected from market risk', 'Diversified if they span countries'],
          a: 1,
          why: 'Sector holdings respond to the same drivers and fall together. This is the correlation lesson from the forex track, in equity form — count exposure by group, not by line.' }
      ]
    },
    {
      title: 'Counting real exposure',
      slides: [4, 5],
      check: [
        { q: 'You hold a broad index ETF and separately buy its three largest constituents. Your exposure to those three is:',
          options: ['Unchanged, the ETF is separate', 'Doubled — you own them inside the fund and again directly', 'Reduced by diversification', 'Neutralised'],
          a: 1,
          why: 'Fund overlap is the most common source of accidental concentration. Listing a fund\'s largest holdings before adding individual names prevents it.' },
        { q: 'What happens to correlations during a market crash?',
          options: ['They fall, giving better diversification', 'They tighten — things that looked independent fall together', 'They are unaffected', 'Only bonds are affected'],
          a: 1,
          why: 'The moment diversification matters most is the moment it stops working. Size for the assumption that in a bad month everything you own falls together.' }
      ]
    }
  ];

  /* ================= MODULE 107 — Risk without leverage ================= */
  L[107] = [
    {
      title: 'Sizing in shares',
      slides: [0, 1],
      check: [
        { q: '£20,000 portfolio, 1% risk, entry £50, stop £46. How many shares?',
          options: ['4', '50', '200', '400'],
          a: 1,
          why: 'Risk is £200; per-share risk is £4; 50 shares. That is a £2,500 position — 12.5% of the portfolio. Note both numbers: the risk is 1% but the concentration is 12.5%.' },
        { q: 'Why do stops behave differently in equities than in forex?',
          options: ['Brokers execute them differently', 'Overnight gaps and trading halts are routine, so the stop may fill far from its level or not at all', 'Stops are optional', 'Volatility is lower'],
          a: 1,
          why: 'In forex a catastrophic gap was a rare tail event. Here it is a scheduled quarterly possibility, so a bad exit is a planning assumption rather than an exception.' }
      ]
    },
    {
      title: 'Concentration and portfolio heat',
      slides: [2, 3],
      check: [
        { q: 'Why does concentration matter as much as risk percentage?',
          options: ['It does not', 'Because gaps bypass the stop entirely, exposing the full position rather than the intended risk', 'Because brokers charge by size', 'Because of commission'],
          a: 1,
          why: 'A stop only limits loss in a continuously trading market. When a share gaps 40% on a warning, your loss is driven by position size, not by where the stop sat.' },
        { q: 'You hold six positions, four of them banks. For portfolio heat, the banks count as:',
          options: ['Four separate positions', 'Approximately one, because they will fall together', 'Excluded', 'Double, for prudence'],
          a: 1,
          why: 'Sector holdings share drivers and their stops hit together. Heat measures what happens when every stop fires at once, which is precisely a market-wide fall.' }
      ]
    },
    {
      title: 'Your equity risk policy',
      slides: [4, 5],
      check: [
        { q: 'The practical test for whether a position is too large:',
          options: ['Whether the stop feels comfortable', 'Asking what a 40% overnight gap in that share would do to the portfolio', 'Whether it fits the commission budget', 'Whether the company is profitable'],
          a: 1,
          why: 'It turns an abstract limit into an imaginable event. If the answer is unacceptable, the position is too large regardless of where the stop sits.' },
        { q: 'In an equity portfolio, holding cash is:',
          options: ['A failure to deploy capital', 'A legitimate position and an active decision', 'Only for beginners', 'The same as being invested'],
          a: 1,
          why: 'Forex conditions traders to be either in or out of one trade. In a portfolio the cash proportion is itself a risk decision, and choosing not to hold is often correct.' }
      ]
    }
  ];

  /* ================= MODULE 108 — Building an approach ================= */
  L[108] = [
    {
      title: 'Horizon and screening',
      slides: [0, 1],
      check: [
        { q: 'Which filter should come first in an equity screen?',
          options: ['Valuation', 'Liquidity — an untradeable name is not a candidate whatever its numbers', 'Dividend yield', 'Sector'],
          a: 1,
          why: 'Screening on valuation first surfaces spectacular-looking companies that trade a few thousand shares a day with a wide spread. Liquidity first prevents wasted research.' },
        { q: 'Mixing holding horizons is dangerous because:',
          options: ['It increases commission', 'A losing short-term trade gets silently reclassified as a long-term hold', 'Brokers forbid it', 'It complicates tax'],
          a: 1,
          why: 'This is the most common failure in equities. Naming your horizon in advance is the only reliable defence against rationalising a loser into an investment.' }
      ]
    },
    {
      title: 'Thesis and exits',
      slides: [2, 3],
      check: [
        { q: 'A well-formed thesis:',
          options: ['Explains why the company is excellent', 'States a specific, checkable condition that would prove it wrong', 'Predicts a target price', 'Cites analyst ratings'],
          a: 1,
          why: 'This is the invalidation rule from the forex track applied to a business. "It\'s a good company" can never tell you to sell; a checkable condition can.' },
        { q: 'A holding rose sharply and now exceeds your concentration limit. The rule says:',
          options: ['Let winners run regardless', 'Trim it back toward the limit', 'Sell the whole position', 'Raise the limit'],
          a: 1,
          why: 'The limit bounds gap damage, and a larger position means larger damage regardless of how it got there. Trimming a winner feels wrong, which is when the rule earns its place.' }
      ]
    },
    {
      title: 'Review, and choosing your market',
      slides: [4, 5, 6],
      check: [
        { q: 'The central difficulty of an equity process compared with forex is:',
          options: ['Higher costs', 'Slower feedback — a flawed process can take years to reveal itself', 'Less information', 'Lower liquidity everywhere'],
          a: 1,
          why: 'In forex a bad process shows within weeks. On a multi-month horizon you can hold a broken thesis for years, which is why written records and scheduled reviews matter more.' },
        { q: 'The honest comparison between forex and equities is:',
          options: ['Equities are safer', 'Forex is more profitable', 'Neither is easier — forex punishes over-leverage, equities punish over-concentration', 'They are identical'],
          a: 2,
          why: 'They fail in different ways and suit different temperaments, timetables and capital levels. Choosing where to focus is about your circumstances, not about which market is superior.' }
      ]
    }
  ];
})();
