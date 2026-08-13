/* N1 Forex Academy — Module 103. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

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
