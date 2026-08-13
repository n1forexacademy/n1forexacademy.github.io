/* N1 Forex Academy — Equities & Shares track (Modules 101–108).

   Unlocks after the forex certificate. Written for someone who already knows
   pips, margin, expectancy and position sizing, so it does not re-teach those —
   it concentrates on what is genuinely different about owning a slice of a
   company rather than a currency pair.

   Module ids are 101+ so they never collide with the forex track (1–12) or
   bonds (201+), and existing student progress stays valid. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 101 ============================= */
{
  id: 101, track: 'equities',
  title: "What a Share Actually Is",
  tagline: "You stop betting on a relative price and start owning a claim on a real business.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Explain what a shareholder actually owns and what rights come with it",
    "Describe how shares come into existence and how they change hands afterwards",
    "Distinguish an exchange from an over-the-counter market and say why it matters",
    "Explain why an equity has an upward long-run drift that a currency pair does not",
    "State honestly what owning shares can and cannot do for you"
  ],

  misconceptions: [
    "**\"A share is just another instrument to trade.\"** It is a legal claim on the assets and future earnings of a company. That claim is why it can be worth something in twenty years, and why it can go to zero in a way a major currency cannot.",
    "**\"Buying shares gives the company my money.\"** Only in the primary market. Buying on an exchange transfers money to another investor — the company sees none of it.",
    "**\"Shares always go up over time.\"** *Indices* have historically drifted upward. Individual companies fail permanently and regularly. Those are very different claims.",
    "**\"Equities are safer than forex because there's no leverage.\"** Shares bought outright cannot go below zero, which is a real advantage. But a single company can lose 90% and never recover, which no major currency does."
  ],

  glossary: [
    { t: "Share / stock / equity", d: "A unit of ownership in a company. The three words are used interchangeably." },
    { t: "Shareholder", d: "An owner of shares, holding a residual claim on the company's assets and earnings." },
    { t: "Residual claim", d: "Shareholders are paid last — after employees, suppliers, lenders and bondholders. This is why equity is riskier than debt." },
    { t: "Primary market", d: "Where new shares are issued and the company receives the proceeds, such as an IPO." },
    { t: "Secondary market", d: "Where existing shares trade between investors. The exchange most people mean by 'the stock market'." },
    { t: "IPO", d: "Initial public offering — the first sale of a company's shares to the public." },
    { t: "Exchange", d: "A centralised, regulated venue with a single order book and published prices — unlike forex." },
    { t: "Ticker", d: "The short code identifying a listed company on a given exchange." },
    { t: "Market capitalisation", d: "Share price multiplied by shares outstanding. The market's price for the whole company." },
    { t: "Free float", d: "The proportion of shares actually available to trade, excluding locked-up or insider holdings." },
    { t: "Delisting", d: "Removal from an exchange, whether through takeover, failure to meet requirements, or collapse." }
  ],

  slides: [
    {
      kicker: "Module 101 · The instrument",
      title: "You now own part of something",
      bullets: [
        "A share is a **legal claim on a company's assets and future earnings**, divided into units.",
        "Buy 100 shares of a company with 100 million outstanding and you own **one millionth of it**.",
        "That entitles you to a share of profits distributed as **dividends**, and usually a **vote**.",
        "**This is the fundamental break from forex.** A currency has no earnings, pays no dividend, and represents no enterprise.",
        "It also means an equity can be **worth more in ten years because the business grew** — a currency pair has no such mechanism."
      ],
      note: "Anchor everything here. Students arriving from forex are used to a pure relative-price bet. Ownership changes what analysis even means: you can now ask 'is this business worth more than the market says', a question that has no forex equivalent."
    },
    {
      kicker: "Module 101 · Where shares come from",
      title: "Primary and secondary markets",
      bullets: [
        "**Primary market:** the company issues new shares and receives the money. An IPO, or a later fundraising.",
        "**Secondary market:** those shares then trade between investors. The company receives **nothing** from this.",
        "Almost everything you will ever do is secondary-market trading.",
        "**Practical consequence:** when you buy, someone else is selling. The company's fortunes and the share's daily price are connected only loosely and often slowly.",
        "New issuance **dilutes** existing holders — the same claim divided into more pieces."
      ],
      note: "The dilution point matters later, in Module 105 on corporate actions. Students often assume share count is fixed; it is not, and a company issuing shares to fund itself is quietly reducing what each existing share represents."
    },
    {
      kicker: "Module 101 · Market structure",
      title: "An exchange is not the forex market",
      bullets: [
        "Equities trade on a **centralised exchange** with a **single visible order book**.",
        "That means **real published volume**, one official closing price, and the same price for everyone.",
        "Remember Module 1: forex has no central tape, so 'volume' on your chart was your broker's guess.",
        "**Exchanges have opening and closing bells**, so the day has a structure — an open, a close, and a gap between them.",
        "**Trading halts** exist. A stock can simply stop trading pending news. No such mechanism exists in major forex."
      ],
      note: "Have students pull up a real order book (depth of market) if the platform allows. Seeing actual resting bids and offers makes Module 1's 'why price moves' concrete in a way forex never could — here you can literally watch the orders being consumed."
    },
    {
      kicker: "Module 101 · Rights",
      title: "What ownership actually gets you",
      bullets: [
        "**Dividends** — a share of distributed profits, if the company chooses to pay them. Many deliberately do not.",
        "**Voting rights** — usually one vote per share on directors and major decisions. In practice, negligible influence for a small holder.",
        "**A residual claim** — in liquidation you are paid *last*, after every creditor and bondholder.",
        "**Information rights** — listed companies must publish audited accounts. You can actually read what you own.",
        "**That last one is the real prize.** In forex there is nothing to read about EUR itself. Here there is a whole annual report."
      ],
      note: "The residual-claim point sets up the bonds track directly: bondholders get paid before shareholders, which is exactly why bonds pay less and are less volatile. Flag that link now so Module 201 lands."
    },
    {
      kicker: "Module 101 · Behaviour",
      title: "Why equities drift upward and currencies do not",
      bullets: [
        "A broad equity index has historically **risen over long periods**, because the companies in it retain and reinvest earnings.",
        "A currency pair has **no such drift**. EUR/USD is a ratio between two economies and can sit in the same range for years.",
        "**Consequence for strategy:** buy-and-hold is a defensible approach in an index. It is not, in a currency pair.",
        "**But:** the drift belongs to the *index*, not to any individual company.",
        "Indices survive by **replacing** their failures. The company that dropped out is gone; the index carries on. **Your individual holding does not get that treatment.**"
      ],
      note: "This is the survivorship point and it matters enormously. Students hear 'stocks go up over time', buy one company, and are shocked when it does not participate. The index's record is partly a record of continuously removing losers."
    },
    {
      kicker: "Module 101 · Honesty",
      title: "What equities can and cannot do",
      bullets: [
        "**Can:** grow with a real business over years, pay income while you hold, and be researched from published accounts.",
        "**Can:** go to **zero permanently**. Companies fail. Major currencies do not vanish.",
        "**Cannot:** be relied upon to recover. 'It'll come back' is a statement about indices, not about the company you happen to own.",
        "**Cannot:** be traded round the clock. Exchange hours mean overnight gap risk you cannot hedge or exit through.",
        "**Nothing here is a recommendation to buy anything.** This course teaches how the instrument works, not what to own."
      ],
      note: "Keep the same discipline as the forex track. You are teaching mechanics and process, never specific holdings. If a student asks 'should I buy X', the answer is that neither you nor this course does that."
    },
    {
      kicker: "Module 101 · Wrap",
      title: "What you should be able to say now",
      bullets: [
        "What a shareholder owns, and where they sit in the queue if things go wrong",
        "The difference between primary and secondary markets, and who gets your money",
        "Why a centralised exchange gives you real volume and a real closing price",
        "Why indices drift upward and individual companies do not inherit that",
        "What ownership genuinely offers, stated without exaggeration"
      ],
      note: "Ask a student to explain to you the difference between buying EUR/USD and buying a share, in their own words. If ownership and the residual claim do not appear in their answer, revisit slide one before moving on."
    }
  ],

  practical: {
    title: "Lab 101 — Read what you would be buying",
    time: "50 min",
    intro: "No trading. The point is to establish that an equity is a real company with published numbers, and that this information exists and is free — a resource with no forex equivalent.",
    setup: [
      "A free market data site or broker platform showing listed companies",
      "The **investor relations** page of any large listed company",
      "A blank spreadsheet named **Company Notes**"
    ],
    steps: [
      { h: "Pick three companies you already know", d: "Choose businesses whose products you personally use. For each record: ticker, exchange, market capitalisation, and shares outstanding. Familiarity is a starting point for understanding, not a reason to invest." },
      { h: "Work out what one share represents", d: "Divide market cap by shares outstanding to confirm the share price. Then compute what fraction of the company one share is. Write it as '1 share = 1/N of this business'." },
      { h: "Find the annual report", d: "On each company's investor relations page, locate the most recent annual report. Note revenue, net income, and whether a dividend was paid. You are not analysing it yet — just proving to yourself the document exists and is public." },
      { h: "Check the dividend", d: "Record whether each pays a dividend, how much per share, and the yield. Note that some very large companies pay nothing at all, and write down the reason the company gives for that." },
      { h: "Look at the order book", d: "If your platform shows depth of market, screenshot the resting bids and offers for one company. Compare it with Module 1's explanation of why price moves. Here you can see the orders." },
      { h: "Compare the exchange calendar", d: "Record the exchange's trading hours in your local time, plus the dates it is closed for holidays. Contrast with forex's continuous week." }
    ],
    deliverable: "A **Company Notes** spreadsheet covering three companies: ticker, exchange, market cap, shares outstanding, the fraction one share represents, revenue, net income, dividend status and yield, plus one order-book screenshot and the exchange calendar.",
    rubric: [
      { c: "Ownership comprehension", d: "Can state what fraction of a business one share represents and where a shareholder sits in the payment queue." },
      { c: "Source literacy", d: "Located the actual annual report rather than a third-party summary." },
      { c: "Dividend awareness", d: "Recorded dividend status accurately and can explain why a profitable company might pay none." },
      { c: "Structural contrast", d: "Can name three concrete differences between an exchange and the forex market." }
    ],
    pitfalls: [
      "Confusing share price with company size. A £2 share can be a larger company than a £400 one — market cap is the measure.",
      "Reading a broker's summary page instead of the annual report. The habit of going to the primary source starts here.",
      "Assuming a high dividend yield is good news. It often means the price has fallen sharply, which is Module 104."
    ]
  },

  homework: [
    "Read the first ten pages of one annual report — usually the chief executive's review — and write a paragraph on what the business actually does.",
    "Record the closing price of your three companies each day for a week and note any day the move exceeded 3%.",
    "Find one company that was delisted or went bankrupt in the last decade and write down what happened to its shareholders."
  ],

  quiz: [
    { q: "You buy 500 shares of a company on the exchange. Who receives your money?",
      options: ["The company, as new capital", "Another investor who sold those shares", "The exchange", "The company's bondholders"],
      a: 1,
      why: "That is a secondary-market transaction — the shares already existed and you bought them from another holder. The company only receives money in the primary market, such as an IPO or a fresh issuance." },
    { q: "In a liquidation, shareholders are paid:",
      options: ["First, as owners", "After employees and suppliers but before bondholders", "Last, after every creditor and bondholder", "At the same time as bondholders"],
      a: 2,
      why: "Equity is a residual claim — you receive whatever is left, which is frequently nothing. This is precisely why equity carries higher expected return and higher risk than the same company's debt." },
    { q: "Broad indices have drifted upward over long periods. Does that apply to an individual company you hold?",
      options: ["Yes, all shares trend up eventually", "No — indices survive partly by replacing their failures, and your individual holding gets no such treatment", "Only for dividend payers", "Only over periods above ten years"],
      a: 1,
      why: "The index's record is partly a record of continuously removing losers and adding winners. An individual company can fail permanently. 'It'll come back' is a statement about indices, not about any specific holding." },
    { q: "What does a centralised exchange give you that forex does not?",
      options: ["Round-the-clock trading", "A single visible order book, real published volume and one official closing price", "Guaranteed liquidity at all times", "Freedom from gap risk"],
      a: 1,
      why: "Centralisation means one order book and genuine volume data. Note the trade-off: exchanges close, so you get overnight gap risk you cannot trade through — the opposite of forex's continuous week." },
    { q: "A company issues a large number of new shares to raise money. For existing shareholders this is:",
      options: ["Always positive — the company has more cash", "Dilution — the same ownership claim is now divided into more pieces", "Irrelevant to share count", "A guaranteed dividend increase"],
      a: 1,
      why: "Each existing share now represents a smaller fraction of the business. Whether that is worthwhile depends entirely on what the raised money achieves, but the dilution itself is arithmetic." }
  ]
},

/* ============================= MODULE 102 ============================= */
{
  id: 102, track: 'equities',
  title: "How Shares Are Priced and Traded",
  tagline: "Order books, liquidity and settlement — the mechanics that decide what you actually pay.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Read a depth-of-market ladder and explain what each side represents",
    "Choose between market, limit and stop orders in an exchange context",
    "Explain how liquidity affects your fill and why it varies enormously between companies",
    "Describe the auction periods at the open and close and why they matter",
    "Explain settlement and what actually happens after you press buy"
  ],

  misconceptions: [
    "**\"The price on screen is the price I'll get.\"** That is the price of the *last trade*. What you will pay is the current best offer, and for a large order, several levels above it.",
    "**\"All shares are equally easy to trade.\"** Liquidity varies by orders of magnitude. A large index constituent and a small company are barely the same activity.",
    "**\"The closing price is just the last trade of the day.\"** On most exchanges it is set by a closing auction — a separate mechanism with its own dynamics.",
    "**\"I own it the moment I buy.\"** Legal settlement takes a day or more. It rarely matters, but it explains dividend eligibility dates."
  ],

  glossary: [
    { t: "Order book / depth of market", d: "The live list of resting buy and sell orders at each price level." },
    { t: "Best bid / best offer", d: "The highest price anyone will currently pay, and the lowest anyone will accept." },
    { t: "Level 2", d: "A view of the order book beyond the best prices, showing depth at each level." },
    { t: "Liquidity", d: "How much can be traded near the current price without moving it." },
    { t: "Market impact", d: "The amount your own order moves the price against you by consuming resting orders." },
    { t: "Opening auction", d: "A period before the open where orders accumulate and a single opening price is calculated." },
    { t: "Closing auction", d: "The equivalent at the end of the day, which sets the official closing price." },
    { t: "Settlement", d: "The legal transfer of ownership and cash, typically one or two business days after the trade." },
    { t: "Trading halt", d: "A temporary suspension, often pending an announcement or after an extreme move." },
    { t: "Circuit breaker", d: "An automatic pause triggered by a large move, applied to a stock or a whole market." }
  ],

  slides: [
    {
      kicker: "Module 102 · The book",
      title: "You can finally see the orders",
      bullets: [
        "The **order book** lists every resting buy and sell order at each price level.",
        "**Bids** on one side, **offers** on the other, with the **quantity** available at each price.",
        "Module 1 explained that price moves when resting orders are consumed. **Here you can watch it happen.**",
        "A market buy takes the best offer, then the next, then the next — **each level is a worse price**.",
        "**This is why order size matters.** Small orders take the top of the book; large ones eat through it."
      ],
      note: "Put a real depth ladder on screen. Nothing in the forex track could show this directly. Watching a large order sweep several levels turns 'market impact' from a phrase into something the student has seen."
    },
    {
      kicker: "Module 102 · Liquidity",
      title: "Liquidity varies more than you expect",
      bullets: [
        "A large index constituent may have **thousands of shares resting at every penny**.",
        "A small company might have a **wide spread and almost nothing behind it**.",
        "**Signs of thin liquidity:** wide spread, small quantities on the book, gappy chart, low average daily volume.",
        "In thin names your own order becomes **the news** — you move the price simply by participating.",
        "**Practical rule for this course: trade only names with deep books and high average volume.** Same logic as majors-only in forex."
      ],
      note: "This maps exactly onto the majors-versus-exotics lesson from Module 2. The principle is identical: cost and reliability of execution beat exciting price movement, especially while learning."
    },
    {
      kicker: "Module 102 · Orders",
      title: "The same order types, a different context",
      bullets: [
        "**Market, limit and stop** work as they did in forex — but now there is a visible book to place them against.",
        "**Limit orders add liquidity**: your order rests on the book and someone else trades against it.",
        "**Market orders remove liquidity**: you consume what is resting.",
        "**Stop orders become market orders when triggered** — the same caveat as forex, and the same slippage risk.",
        "**New consideration:** you can see roughly how much is resting at your intended price. Use it."
      ],
      note: "The add/remove liquidity framing is worth teaching because it explains fee structures at many brokers and, more importantly, why limit orders may not fill even when price touches your level — you were behind others in the queue."
    },
    {
      kicker: "Module 102 · The day's shape",
      title: "Auctions, open and close",
      bullets: [
        "Before the open, orders accumulate in an **opening auction** that calculates a single fair opening price.",
        "The same happens at the end in a **closing auction**, which sets the **official closing price**.",
        "Those auctions carry **enormous volume** — index funds must trade at the close to track their benchmark.",
        "**The first and last thirty minutes behave differently** from the middle of the day: wider spreads, faster moves, more noise.",
        "**Overnight, the market is shut.** News arrives anyway, and the next open can gap straight past your stop."
      ],
      note: "Gap risk is the single biggest practical difference from forex for a student's risk management. In forex a gap is a weekend event; in equities it is a nightly possibility, and earnings season makes it routine."
    },
    {
      kicker: "Module 102 · After the trade",
      title: "Settlement, halts and the machinery",
      bullets: [
        "**Settlement:** legal ownership transfers a business day or two after the trade, depending on the market.",
        "This rarely affects a trader directly, but it **determines dividend eligibility** — Module 105.",
        "**Trading halts:** a stock can be suspended pending an announcement. You cannot exit while halted.",
        "**Circuit breakers:** extreme moves trigger automatic pauses, on a single stock or market-wide.",
        "**None of these exist in major forex.** Your risk model has to allow for being unable to trade."
      ],
      note: "Ask the student what happens to a stop loss during a halt. The answer — nothing, it sits there until trading resumes and then fills at whatever price appears — is a genuinely new risk for someone from forex."
    },
    {
      kicker: "Module 102 · Costs",
      title: "What a share trade actually costs",
      bullets: [
        "**Spread** — as before, and much wider in thin names.",
        "**Commission** — often per trade or per share rather than per lot.",
        "**Market impact** — the cost of eating through the book. Invisible on the statement, real in the fill.",
        "**Taxes and levies** — some markets charge a transaction tax on purchases. Check yours.",
        "**No overnight swap on owned shares** — a real advantage over CFDs, which we cover next module."
      ],
      note: "Have students total the cost of a realistic round trip in their own market, including any transaction tax. The absence of swap on outright ownership is a genuine structural advantage and is worth making explicit."
    },
    {
      kicker: "Module 102 · Wrap",
      title: "The mechanics you now own",
      bullets: [
        "How to read a depth ladder and what each side represents",
        "Why liquidity differs by orders of magnitude and how to spot thin names",
        "Adding versus removing liquidity, and why a limit may not fill",
        "Auctions, the shape of the trading day, and overnight gap risk",
        "Settlement, halts, and the fact that you cannot always get out"
      ],
      note: "The takeaway that matters most: in equities you can be prevented from trading. Halts, closes and gaps are structural, not exceptional, and they must be in the risk plan from the start."
    }
  ],

  practical: {
    title: "Lab 102 — Read the book and measure the cost",
    time: "60 min",
    intro: "The student learns to judge whether a name is tradeable before considering whether it is attractive. Liquidity assessment comes before analysis, exactly as broker verification came before strategy in the forex track.",
    setup: [
      "A platform showing depth of market, or a free Level 2 viewer",
      "Two large, heavily traded companies and two small ones",
      "A spreadsheet named **Liquidity Study**"
    ],
    steps: [
      { h: "Record the top of book", d: "For all four companies note the best bid, best offer, the spread in cash and as a percentage of price, and the quantity resting at each." },
      { h: "Measure the depth", d: "Count the total shares resting within 0.5% of the current price on each side. The difference between the large and small companies will be dramatic — record the ratio." },
      { h: "Estimate market impact", d: "Work out how far up the book a hypothetical order of £5,000 would have to reach on each name. In a thin one it may consume several levels. Record the estimated average fill price versus the best offer." },
      { h: "Spread as a share of daily range", d: "Find each company's average daily range and express the spread as a percentage of it — the same test used on instruments in the forex track. Rank all four." },
      { h: "Watch the open and close", d: "Observe one company during the first and last fifteen minutes of the session. Record how the spread and the size on the book change compared with the middle of the day." },
      { h: "Find a gap", d: "Look back three months on a daily chart and find the largest overnight gap. Measure it as a percentage and note what caused it. Then calculate what that gap would have done to a position with a 3% stop." }
    ],
    deliverable: "A **Liquidity Study** spreadsheet covering four companies: top-of-book figures, depth within 0.5%, estimated market impact on a £5,000 order, spread as a percentage of daily range with a ranking, open/close observations, and one measured overnight gap with its effect on a 3% stop.",
    rubric: [
      { c: "Book literacy", d: "Reads a depth ladder accurately and can state what is resting on each side and at what price." },
      { c: "Liquidity judgement", d: "Can identify a thin name from its book and volume without being told, and explains the risk in execution terms." },
      { c: "Impact awareness", d: "Estimated how far an order would move price and understands this cost never appears on a contract note." },
      { c: "Gap comprehension", d: "Measured a real gap and can state what it would have done to a stop — with the correct conclusion that the stop offers no protection through it." }
    ],
    pitfalls: [
      "Judging liquidity by share price rather than volume and depth. They are unrelated.",
      "Assuming a tight spread means a deep book. A name can quote tightly with almost nothing behind it.",
      "Concluding that stops are useless because of gaps. The correct conclusion is that position size must assume a worse-than-planned exit — the same lesson as Module 3."
    ]
  },

  homework: [
    "Track the spread and top-of-book size on one liquid and one illiquid company at three fixed times daily for a week.",
    "Find three overnight gaps above 5% in any listed company and record what caused each.",
    "Write your own liquidity rule: the minimum average daily volume and maximum spread percentage you will accept before trading a name."
  ],

  quiz: [
    { q: "The price displayed on a quote screen is:",
      options: ["What you will pay", "The price of the last completed trade", "The best offer", "The closing auction price"],
      a: 1,
      why: "The headline price is the last trade. What you will pay is the current best offer, and a larger order will reach further up the book — that additional cost is market impact, and it never appears on your contract note." },
    { q: "A market buy order in equities:",
      options: ["Adds liquidity to the book", "Removes liquidity by consuming resting offers", "Always fills at the last traded price", "Is queued until the closing auction"],
      a: 1,
      why: "Market orders consume what is resting; limit orders rest and provide it. This distinction explains many broker fee structures and why a limit order may not fill even when price touches your level — you were behind others in the queue." },
    { q: "Why do the first and last thirty minutes of the session behave differently?",
      options: ["Exchanges widen spreads deliberately", "Auctions concentrate enormous volume at the open and close, and price discovery after an overnight break is unsettled", "Retail traders are more active", "Algorithms are switched off"],
      a: 1,
      why: "The opening auction resolves everything that accumulated overnight, and the closing auction carries index-fund flow that must trade at the official close. Both produce wider spreads and faster moves than the middle of the day." },
    { q: "A stock is halted pending an announcement while you hold a position with a stop loss. What happens?",
      options: ["The stop executes immediately at the last price", "The broker closes the position for you", "Nothing — the stop sits there until trading resumes, then fills at whatever price appears", "The exchange guarantees your stop price"],
      a: 2,
      why: "You cannot exit during a halt, and the resumption price is frequently far from the halt price. This has no equivalent in major forex and must be allowed for in position sizing rather than assumed away." },
    { q: "Which cost exists when trading share CFDs but not when owning shares outright?",
      options: ["Spread", "Commission", "Overnight financing", "Market impact"],
      a: 2,
      why: "Owned shares are fully paid for, so there is nothing to finance overnight. CFDs are leveraged positions and carry a daily financing charge — the same mechanism as forex swap, and it punishes long holds equally." }
  ]
},

/* ============================= MODULE 103 ============================= */
{
  id: 103, track: 'equities',
  title: "Owning Shares versus Trading CFDs",
  tagline: "The same company, two completely different products — and only one of them makes you an owner.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "State the concrete differences between owned shares and a share CFD",
    "Explain how leverage and financing change the risk profile",
    "Describe what happens to dividends and voting rights under each",
    "Choose the appropriate product for a given holding period and objective",
    "Explain why the leveraged version reintroduces every forex risk you just learned to control"
  ],

  misconceptions: [
    "**\"A share CFD is just a cheaper way to buy shares.\"** It is a leveraged derivative with daily financing. Cheaper to open, more expensive to hold, and you own nothing.",
    "**\"Leverage is fine because I'll use it carefully.\"** You said that in Module 3. The arithmetic has not changed just because the instrument has.",
    "**\"CFDs pay dividends too.\"** Long CFD positions typically receive a dividend adjustment, and short positions **pay** it. It is a cash adjustment, not a dividend, and the tax treatment differs.",
    "**\"Owning shares has no risk of losing more than I put in.\"** True for outright ownership — a genuine and underrated advantage. Not true for CFDs."
  ],

  glossary: [
    { t: "Share CFD", d: "A contract for difference tracking a share price, settled in cash. No ownership transfers." },
    { t: "Outright ownership", d: "Buying the actual shares, fully paid, held in your name or your broker's nominee." },
    { t: "Nominee account", d: "An arrangement where the broker holds shares on your behalf. Common, and the beneficial ownership remains yours." },
    { t: "Overnight financing", d: "A daily charge on a leveraged position, reflecting the cost of the money you effectively borrowed." },
    { t: "Dividend adjustment", d: "A cash credit or debit on a CFD position around the ex-dividend date, mirroring the dividend." },
    { t: "Short selling", d: "Profiting from a fall. Simple with a CFD; requires borrowing the stock when done outright." },
    { t: "Borrow cost", d: "The fee for borrowing shares in order to short them. Can be very high in heavily shorted names." },
    { t: "Negative balance protection", d: "A jurisdictional rule preventing a retail account going below zero. Availability varies." }
  ],

  slides: [
    {
      kicker: "Module 103 · Two products",
      title: "The same company, two different things",
      bullets: [
        "**Owning shares:** you paid the full amount, you are on the register, you receive dividends and votes.",
        "**Share CFD:** you posted margin, you own nothing, you settle the price difference in cash.",
        "The **price chart is identical**. Almost everything else differs.",
        "**Ownership** has no leverage, no financing, and no way to lose more than you paid.",
        "**CFD** has leverage, daily financing, easy shorting — and every risk from Module 3 returns in full."
      ],
      note: "Draw two columns on the board and fill them in together. Students arriving from forex will instinctively reach for the CFD because it feels familiar. That instinct is precisely what this module exists to interrupt."
    },
    {
      kicker: "Module 103 · Cost over time",
      title: "Cheap to open, expensive to hold",
      bullets: [
        "A CFD needs only **margin**, so a given exposure ties up far less cash upfront.",
        "But it carries **daily financing** on the full position value, every night it is open.",
        "**Owned shares cost nothing to hold.** No swap, no financing, indefinitely.",
        "**The crossover point matters.** Over days, the CFD's lower capital requirement may win. Over months, financing dominates.",
        "**This is the swap lesson from Module 1, in a new costume.** Match the product to the holding period."
      ],
      note: "Work a concrete example: same exposure, held for one week versus held for six months, with realistic financing. The crossover is usually a matter of weeks, and seeing it computed stops students defaulting to leverage for long-term ideas."
    },
    {
      kicker: "Module 103 · Leverage returns",
      title: "Everything from Module 3 comes back",
      bullets: [
        "Leverage on a CFD means **margin, margin level, and stop out** — the same machinery, the same failure mode.",
        "**But equities gap overnight far more often than currencies do.** Earnings, guidance, regulatory news.",
        "A leveraged position through an earnings gap can lose **many multiples of the intended risk**.",
        "**Owning shares outright caps your loss at what you paid.** Unpleasant, but bounded.",
        "**Rule for this track: no leverage through a scheduled earnings date.** Not a preference — a rule."
      ],
      note: "This is the most important slide in the module. A 20% overnight earnings gap on a 5:1 leveraged position is a 100% loss. Students who internalised the Module 3 blow-up will feel this immediately; make the connection explicit."
    },
    {
      kicker: "Module 103 · Dividends and rights",
      title: "Who actually gets the dividend",
      bullets: [
        "**Own the shares on the right date and the dividend is yours**, along with your vote.",
        "**Long a CFD:** you typically receive a **cash adjustment** mirroring the dividend. Not the dividend itself.",
        "**Short a CFD:** you **pay** the adjustment. Shorting through a dividend costs you.",
        "**No voting rights on a CFD, ever.** You are not on the register.",
        "**Tax treatment differs between the two and between jurisdictions.** That is a question for a qualified adviser, not for this course."
      ],
      note: "Be firm about the tax boundary. It varies enormously by country and by individual circumstance, and it is regulated advice. Teach the mechanics, name the difference, and send them to a professional."
    },
    {
      kicker: "Module 103 · Shorting",
      title: "Going short is not symmetrical here",
      bullets: [
        "In forex, short was as natural as long — selling EUR/USD is buying USD/EUR.",
        "In equities it is **not symmetrical**. Shorting outright requires **borrowing the stock**, and the borrow can be expensive or unavailable.",
        "**CFDs make shorting easy**, which is a genuine advantage — and a genuine trap.",
        "**A short has unlimited theoretical loss.** The share can rise without bound; it can only fall to zero.",
        "**Short squeezes** happen when a crowded short forces buying, and they move violently."
      ],
      note: "The asymmetry is real and worth dwelling on. In forex both directions were equivalent; here the risk profiles genuinely differ, and a student who treats a short as a mirror image of a long has misunderstood the instrument."
    },
    {
      kicker: "Module 103 · Choosing",
      title: "Which product, for which job",
      bullets: [
        "**Holding for months or years, want dividends and no financing:** own the shares.",
        "**Short-term directional trade, days not months:** a CFD may be the appropriate tool.",
        "**Want to short:** practically, a CFD — with the risks understood.",
        "**Learning:** own the shares, or trade CFDs at sizes so small that leverage is irrelevant.",
        "**Never:** use leverage because your capital feels too small. That is the reasoning that ends accounts."
      ],
      note: "That last bullet is the one to say slowly. 'My account is small so I need leverage' is the single most common and most destructive piece of reasoning a retail trader brings, and it appears in every asset class."
    },
    {
      kicker: "Module 103 · Wrap",
      title: "The choice you now understand",
      bullets: [
        "What each product actually is, and what you own under each",
        "Why one is cheap to open and the other free to hold",
        "That leverage reintroduces margin, stop out and gap risk in a market that gaps nightly",
        "How dividends, adjustments and voting rights differ",
        "Why shorting is not the mirror image of going long"
      ],
      note: "End by asking which product each student would use for a six-month idea and why. If anyone says CFD, walk through the financing arithmetic again before moving on."
    }
  ],

  practical: {
    title: "Lab 103 — Compare the two products on the same company",
    time: "60 min",
    intro: "The student prices the identical exposure both ways and finds the crossover point where financing overtakes the capital advantage. The number is specific to their broker, which is the point.",
    setup: [
      "A broker offering both share dealing and share CFDs, or published rate cards for each",
      "One large, liquid company",
      "The **FX Calculator** from the forex track, extended for this lab"
    ],
    steps: [
      { h: "Price the same exposure both ways", d: "Choose an exposure of about £5,000. Record: capital required to own outright, versus margin required for the CFD. Note the ratio." },
      { h: "Find the financing rate", d: "Locate the broker's overnight financing rate for share CFDs. Convert it into a daily cash cost on £5,000 of exposure." },
      { h: "Compute the crossover", d: "Work out how many days of financing equal the opportunity cost of the extra capital tied up by owning. Chart total cost for both products over 1, 7, 30, 90 and 365 days. Identify where the lines cross." },
      { h: "Model an earnings gap", d: "Find the company's next scheduled earnings date and its largest historical earnings gap. Compute the loss on a 5:1 leveraged CFD versus outright ownership if that gap repeated against you." },
      { h: "Check the dividend treatment", d: "Find the next ex-dividend date. Record what happens to an owned position, a long CFD and a short CFD across that date." },
      { h: "Price a short", d: "Record the borrow cost to short the stock outright if your broker publishes it, and compare with the CFD short financing. Note whether the stock is even available to borrow." },
      { h: "Write your product rule", d: "One paragraph stating which product you will use for which holding period and why, including an explicit rule about leverage through earnings." }
    ],
    deliverable: "A comparison sheet showing capital versus margin for identical exposure, the daily financing cost, a total-cost chart across five holding periods with the crossover identified, an earnings-gap loss comparison at 5:1 versus outright, dividend treatment across all three positions, short costs, and a written product rule.",
    rubric: [
      { c: "Cost modelling", d: "Correctly computed financing over time and identified where it overtakes the capital advantage." },
      { c: "Gap risk", d: "Quantified an earnings gap on a leveraged position and reached the right conclusion about leverage through scheduled events." },
      { c: "Dividend mechanics", d: "Correctly states what happens to owned, long CFD and short CFD positions across an ex-dividend date." },
      { c: "Rule quality", d: "Product rule names specific holding periods and contains an unambiguous prohibition on leverage through earnings." }
    ],
    pitfalls: [
      "Comparing only the upfront cost. The whole point is that the ranking reverses over time.",
      "Forgetting that a short CFD pays the dividend adjustment rather than receiving it.",
      "Treating 'unlimited loss on a short' as theoretical. Squeezes are real and the loss is real.",
      "Concluding CFDs are bad. They are a tool with a specific job — the error is using them for the wrong holding period."
    ]
  },

  homework: [
    "Track the financing charge on a small demo CFD position daily for a week and compare with your projection.",
    "Find a real short squeeze from the last five years and write down how far the price moved and over what period.",
    "Add your product rule to the trading plan you wrote in the forex track."
  ],

  quiz: [
    { q: "You hold a share CFD for six months. Compared with owning the shares outright, you will have paid:",
      options: ["Less, because CFDs are cheaper", "The same, since the price is identical", "More, because of daily overnight financing on the full position value", "Nothing extra, financing applies only to forex"],
      a: 2,
      why: "CFDs are cheap to open and expensive to hold; owned shares are the reverse. Financing accrues nightly on the whole exposure, so over months it dominates. This is the swap lesson from the forex track in a new form." },
    { q: "You are short a share CFD across an ex-dividend date. What happens?",
      options: ["You receive the dividend adjustment", "You pay the dividend adjustment", "Nothing — CFDs ignore dividends", "The position is closed automatically"],
      a: 1,
      why: "Long CFD positions receive a cash adjustment mirroring the dividend; short positions pay it. It is an adjustment rather than a dividend, and the tax treatment differs from actual dividend income." },
    { q: "Why is leverage more dangerous in equities than in major currencies?",
      options: ["Brokers offer more of it", "Equities gap overnight far more often — earnings and company news arrive while the exchange is shut", "Spreads are wider", "Stops are not permitted"],
      a: 1,
      why: "Major currencies trade continuously through the week; a listed share gaps every night it has news. A 20% earnings gap against a 5:1 leveraged position is a total loss, which is why leverage through a scheduled earnings date is prohibited on this course." },
    { q: "What is the key structural advantage of owning shares outright?",
      options: ["Higher returns", "You cannot lose more than you paid, and there is no cost to hold", "Tighter spreads", "Faster execution"],
      a: 1,
      why: "Fully paid shares carry no financing and no margin call, and the loss is bounded at your outlay. That combination is genuinely valuable and is routinely given up by students who reach for leverage out of impatience." },
    { q: "Shorting a share differs from shorting a currency pair because:",
      options: ["It is not permitted for retail traders", "It requires borrowing the stock when done outright, the borrow may be costly or unavailable, and the theoretical loss is unbounded", "Shares cannot fall in value", "The broker guarantees the price"],
      a: 1,
      why: "In forex, short and long are structurally symmetrical. In equities they are not: a share can rise without limit but only fall to zero, and outright shorting depends on locating stock to borrow." }
  ]
}

]);
