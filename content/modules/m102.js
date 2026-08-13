/* N1 Forex Academy — Module 102. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 102 ============================= */
{
  id: 102, track: 'equities',
  title: "How Shares Are Priced and Traded",
  tagline: "Order books, liquidity and settlement — the mechanics that decide what you actually pay.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Read an order book and say what the waiting orders on each side represent",
    "Choose the right order type now that you can see what is waiting at your price",
    "Spot a thinly traded name, and understand why your own order would move its price",
    "Explain why the first and last half-hour of the day behave differently from the rest",
    "Say what actually happens after you press buy — and why a halted stock cannot be exited"
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
}

]);
