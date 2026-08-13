/* N1 Forex Academy — Module 101. Loaded on demand; see assets/loader.js. */
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
}

]);
