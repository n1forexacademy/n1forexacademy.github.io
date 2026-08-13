/* N1 Forex Academy — Module 2. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 2 ============================= */
{
  id: 2,
  title: "Pairs, Quotes, Pips and Lots",
  tagline: "The arithmetic of a trade. Get this wrong and every risk calculation later in the course is wrong too.",
  level: "Foundation",
  duration: "120 min",

  objectives: [
    "Decompose any quote into base and quote currency and state what a move means",
    "Classify pairs as major, minor or exotic and predict the cost and behaviour differences",
    "Calculate pip value correctly for USD-quoted, JPY-quoted and USD-base pairs",
    "Convert between lots, units and volume, and compute the cash value of a price move",
    "Compute profit and loss on a completed trade from first principles, without a calculator tool"
  ],

  misconceptions: [
    "**\"A pip is always ten dollars.\"** It is ten dollars *per standard lot* on a *USD-quoted* pair. Change any of those three conditions and the number changes.",
    "**\"A pip is the last decimal place.\"** Most brokers quote a fractional fifth decimal (the pipette). The pip is the fourth decimal on most pairs and the *second* on JPY pairs.",
    "**\"Bigger lots mean bigger profits.\"** Bigger lots mean bigger *outcomes*, in both directions, and disproportionately bigger risk of ruin. Lot size is a risk decision, not an ambition.",
    "**\"Exotic pairs move more so they're better.\"** They also have spreads five to twenty times wider, gap harder, and can be untradeable during local political events."
  ],

  glossary: [
    { t: "Base currency", d: "The first currency in a pair. The one you buy when you buy the pair. In EUR/USD, the euro." },
    { t: "Quote currency", d: "The second currency in a pair, and the one the price is expressed in. In EUR/USD, the dollar." },
    { t: "Pip", d: "The standard smallest price increment. The fourth decimal place on most pairs, the second on JPY pairs." },
    { t: "Pipette", d: "A tenth of a pip — the fractional fifth (or third) decimal many brokers display." },
    { t: "Lot", d: "The standard contract size. One standard lot is 100,000 units of the base currency." },
    { t: "Pip value", d: "The cash change in your account per pip of movement, for a given position size." },
    { t: "Major pair", d: "A pair containing the US dollar and another top-tier currency. Tightest spreads and deepest liquidity." },
    { t: "Cross / minor", d: "A pair of two major currencies without the US dollar, such as EUR/GBP." },
    { t: "Exotic", d: "A major currency paired with an emerging-market one. Wide spreads, thin liquidity, gap risk." },
    { t: "Appreciation", d: "A currency gaining value relative to another." },
    { t: "Depreciation", d: "A currency losing value relative to another." }
  ],

  slides: [
    {
      kicker: "Module 2 · Reading a quote",
      title: "Base, quote, and what the number means",
      bullets: [
        "**GBP/USD = 1.2740**. GBP is the **base**. USD is the **quote**. One pound costs 1.2740 dollars.",
        "The base currency is always **exactly 1**. The price tells you how many units of the quote currency that costs.",
        "Price **rises** → the base strengthened, or the quote weakened, or both. Price **falls** → the reverse.",
        "**Buy** the pair = buy the base, sell the quote. **Sell** the pair = sell the base, buy the quote.",
        "There is no such thing as being flat in one currency while holding a pair — you are always long one and short the other."
      ],
      note: "Drill this cold. Point at any pair on screen and ask 'price just fell — what happened?' Accept both valid answers (base weakened OR quote strengthened) and make sure they know both are possible. That ambiguity is the seed of correlation, which returns in Module 9."
    },
    {
      kicker: "Module 2 · Pair families",
      title: "Majors, minors and exotics behave differently",
      bullets: [
        "**Majors** — EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD. All contain USD. Tightest spreads, deepest liquidity, most news coverage.",
        "**Minors / crosses** — EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY. No USD. Wider spreads, often larger daily ranges.",
        "**Exotics** — USD/TRY, USD/ZAR, USD/MXN, EUR/PLN. One emerging-market currency. Spreads can be **20× a major**, and they gap on local politics.",
        "**Beginners trade majors. Full stop.** Costs are lowest, information is best, and behaviour is most orderly.",
        "GBP/JPY has a reputation for violence for a real reason: it inherits volatility from *both* sides."
      ],
      note: "Have the student pull up the spread for EUR/USD and USD/TRY side by side. The comparison does the teaching for you. Then point out that a 40-pip stop is normal on one and meaningless on the other — which previews the ATR-based stop sizing in Module 8."
    },
    {
      kicker: "Module 2 · The pip",
      title: "What a pip actually is",
      bullets: [
        "A **pip** is the conventional unit of price movement. On most pairs it is the **fourth decimal place**: 0.0001.",
        "On **JPY pairs it is the second decimal place**: 0.01. This is the most common beginner arithmetic error in forex.",
        "The extra digit brokers display is a **pipette** — one tenth of a pip. `1.08512` is 1.0851 and 2 pipettes.",
        "EUR/USD 1.0850 → 1.0870 is **20 pips**. USD/JPY 148.20 → 148.40 is also **20 pips**.",
        "**Always confirm the decimal convention on a new instrument before sizing a position.** Gold, indices and crypto CFDs each use their own."
      ],
      visual: '<svg class="fig" viewBox="0 0 540 170" role="img" aria-label="Decimal place breakdown for a standard pair and a JPY pair"><text class="lbl" x="20" y="30">EUR/USD</text><text x="130" y="36" font-family="ui-monospace,monospace" font-size="30" fill="currentColor">1.0851</text><text x="248" y="36" font-family="ui-monospace,monospace" font-size="30" class="up" stroke="none">2</text><line x1="225" y1="46" x2="225" y2="62" class="acc"/><text class="lbl" x="225" y="78" text-anchor="middle">pip (4th dp)</text><line x1="258" y1="46" x2="258" y2="62" class="dash"/><text class="lbl-sm" x="300" y="78" text-anchor="middle">pipette (5th dp)</text><text class="lbl" x="20" y="122">USD/JPY</text><text x="130" y="128" font-family="ui-monospace,monospace" font-size="30" fill="currentColor">148.2</text><text x="228" y="128" font-family="ui-monospace,monospace" font-size="30" class="up" stroke="none">4</text><line x1="212" y1="138" x2="212" y2="152" class="acc"/><text class="lbl" x="212" y="166" text-anchor="middle">pip (2nd dp)</text><line x1="240" y1="138" x2="240" y2="152" class="dash"/><text class="lbl-sm" x="285" y="166" text-anchor="middle">pipette (3rd dp)</text></svg>',
      note: "Write four prices on the board — two standard, two JPY — and have the student compute the pip difference for each. Do not move on until they get all four right without hesitation. Every position-sizing error in Module 10 traces back to this slide."
    },
    {
      kicker: "Module 2 · Position size",
      title: "Lots: the size of the bet",
      illus: 'orderTicket',
      illusCap: "The order ticket you will use on every drill. Volume is computed, never chosen.",
      bullets: [
        "**Standard lot** = 100,000 units of base currency. Volume field reads `1.00`.",
        "**Mini lot** = 10,000 units. Volume `0.10`.",
        "**Micro lot** = 1,000 units. Volume `0.01`. **This is where every student starts.**",
        "Some brokers offer nano lots at `0.001`.",
        "Lot size is not a measure of ambition or skill. **It is the output of a risk calculation** — you will compute it, not choose it."
      ],
      note: "Say plainly: 'For the whole of this course you will trade 0.01 lots on demo. If you feel the urge to increase it because progress feels slow, that urge is the thing this course exists to train out of you.'"
    },
    {
      kicker: "Module 2 · Pip value",
      title: "Turning pips into money",
      bullets: [
        "**Pip value = (pip in decimal ÷ current price) × units**, converted into your account currency.",
        "**Shortcut for USD-quoted pairs** (EUR/USD, GBP/USD, AUD/USD) with a USD account: **exactly $10 per standard lot**, $1 per mini, $0.10 per micro. No calculation needed.",
        "**JPY pairs:** pip value per standard lot ≈ **1000 ÷ USD/JPY rate**. At 148.00, about $6.76.",
        "**USD-base pairs** (USD/CHF, USD/CAD): pip value ≈ **$10 ÷ current rate**, so it drifts as price moves.",
        "**Check it, never assume it.** Broker specifications show contract size and tick value for every symbol."
      ],
      note: "Give them the shortcut, then immediately break it with USD/JPY so they cannot over-generalise. The lab makes them verify each case against the platform's own numbers, which is the habit that actually sticks."
    },
    {
      kicker: "Module 2 · Worked example",
      title: "Worked example — a long that wins",
      bullets: [
        "Buy **EUR/USD** at **1.0850**, size **0.20 lots** (20,000 units). Account in USD.",
        "Exit at **1.0895**.",
        "Move: 1.0895 − 1.0850 = 0.0045 = **45 pips**.",
        "Pip value at 0.20 lots on a USD-quoted pair: 0.20 × $10 = **$2.00 per pip**.",
        "**Gross P&L = 45 × $2.00 = $90.00.**",
        "Now subtract a 1.2-pip spread (already in your entry) and any commission — call it $88. **Costs are not optional in the arithmetic.**"
      ],
      note: "Work this on the board line by line, then have the student do the identical calculation for a short that loses, and again for USD/JPY. Three reps, not one. Make them state the units at every step — 'pips', 'dollars per pip', 'dollars'."
    },
    {
      kicker: "Module 2 · Worked example",
      title: "Worked example — the JPY trap",
      bullets: [
        "Sell **USD/JPY** at **148.40**, size **0.50 lots**. Exit at **147.90**.",
        "Move: 148.40 − 147.90 = 0.50 → because the pip is the **second** decimal, that is **50 pips**, not 5 and not 5000.",
        "Pip value per standard lot ≈ 1000 ÷ 147.90 ≈ **$6.76**. At 0.50 lots: **$3.38 per pip**.",
        "**Gross P&L = 50 × $3.38 ≈ $169.**",
        "Get the decimal wrong and you would size the position **ten times too large** — the most common way a beginner blows an account by accident."
      ],
      note: "This slide exists purely to inoculate against one specific expensive error. Ask what would have happened if they had assumed $10 a pip and a 500-pip move: they would think they were risking a tenth of what they actually were. Let that sit."
    },
    {
      kicker: "Module 2 · Direction",
      title: "Long and short are symmetrical",
      bullets: [
        "**Long (buy)** — profit if price rises. **Short (sell)** — profit if price falls.",
        "In forex, shorting needs no borrowing and has no extra step. Selling EUR/USD is just buying USD/EUR.",
        "There is **no structural bias upward** in forex, unlike an equity index. Both directions are equally natural.",
        "The arithmetic is identical, with the subtraction reversed: **short P&L = (entry − exit) × pip value**.",
        "Students who only ever go long are ignoring half the market — usually from stock-market habit."
      ],
      note: "Ask the student directly whether they feel more comfortable buying than selling. Almost all do. Naming that bias now makes it easier to catch in their journal in Module 12."
    },
    {
      kicker: "Module 2 · Correlation",
      title: "Pairs are not independent bets",
      bullets: [
        "EUR/USD and GBP/USD usually move together — both are 'short dollar' expressions.",
        "Long EUR/USD **and** long GBP/USD **and** long AUD/USD at 1% risk each is not three 1% trades. It is close to **one 3% bet against the dollar**.",
        "Negative correlation exists too: EUR/USD and USD/CHF typically move opposite each other.",
        "Correlations are **unstable** — they tighten in crises and break in calm markets.",
        "**Rule for this course: count correlated positions as one position when totalling risk.**"
      ],
      note: "This is the bridge to Module 10. The most common way a disciplined 1%-per-trade student takes a 5% loss in an hour is five correlated positions opened on the same view. Say that sentence exactly."
    },
    {
      kicker: "Module 2 · Wrap",
      title: "The arithmetic you must own",
      bullets: [
        "Identify base and quote on any pair, and say what a rise means",
        "Count pips correctly on standard pairs, JPY pairs and gold",
        "Convert lots to units and to dollars-per-pip for the three pair types",
        "Compute P&L on a long and a short from first principles, including costs",
        "Recognise when two positions are really the same bet"
      ],
      note: "Do not proceed to Module 3 until the pip and lot arithmetic is automatic. It is the foundation of every risk calculation in the rest of the course, and re-teaching it later inside a risk lesson never works."
    }
  ],

  practical: {
    title: "Lab 2 — Build your own pip and P&L calculator",
    time: "70 min",
    intro: "The student builds a spreadsheet calculator from scratch rather than downloading one. Building it forces the arithmetic to be understood; downloading it hides the arithmetic forever. This spreadsheet is reused in Module 10 for position sizing, so it must be correct.",
    setup: [
      "A blank spreadsheet (Excel, Google Sheets or LibreOffice) named **FX Calculator**",
      "MT4/MT5 demo open, with **Market Watch** showing EUR/USD, GBP/USD, USD/JPY, USD/CAD and XAU/USD",
      "The **Specification** dialog available for each symbol (right-click the symbol in Market Watch)"
    ],
    steps: [
      { h: "Set up the input row", d: "Create labelled input cells: Pair, Account currency, Entry price, Exit price, Direction (Buy/Sell), Lots, Pip decimal (0.0001 or 0.01). Keep inputs in one colour and calculations in another — the student should never type into a formula cell." },
      { h: "Compute pip movement", d: "Write a formula for pips moved that respects direction: for a buy, `(Exit − Entry) / PipDecimal`; for a sell, `(Entry − Exit) / PipDecimal`. Use an IF on the direction cell so one sheet handles both. Test it with a losing trade and confirm you get a negative number." },
      { h: "Compute pip value", d: "Add a formula giving dollars per pip: `(PipDecimal / ExitPrice) × Lots × 100000`, then a second cell that overrides it with the simple `Lots × 10` for USD-quoted pairs. Compare the two on EUR/USD — they should agree closely. On USD/JPY they should not, and the student must explain why." },
      { h: "Compute P&L including costs", d: "Add cells for spread in pips and commission per lot. Final P&L must be `PipsMoved × PipValue − (Spread × PipValue) − (Commission × Lots × 2)`. Label it clearly as net, not gross." },
      { h: "Verify against the platform", d: "Place five 0.01-lot demo trades: one long and one short on EUR/USD, one on USD/JPY, one on USD/CAD, one on gold. Close each after a visible move. Enter each into the calculator and compare with the platform's reported profit. **They must match within rounding.** If one does not, find out why before continuing — that discrepancy is the lesson." },
      { h: "Handle the awkward cases", d: "For USD/CAD, note that pip value changes as price moves and confirm the calculator handles it. For gold, look up the contract size in Specification (it is usually 100 ounces, not 100,000) and add a contract-size input rather than hard-coding 100,000." },
      { h: "Build the pair comparison table", d: "In a second sheet, record for each of eight instruments: typical spread in pips, cost of that spread in dollars at 0.01 lots, the average daily range, and the spread as a percentage of that range. Sort by the last column. The student discovers on their own which instruments are structurally expensive to trade." }
    ],
    figure: '<figure><svg class="fig" viewBox="0 0 560 200" role="img" aria-label="Spread as a proportion of average daily range across instrument types"><line x1="120" y1="18" x2="120" y2="176" class="axis"/><line x1="120" y1="176" x2="540" y2="176" class="axis"/><rect x="120" y="26" width="34" height="20" class="up" opacity=".8"/><text class="lbl" x="112" y="41" text-anchor="end">EUR/USD</text><text class="lbl-sm" x="162" y="41">~1% of daily range</text><rect x="120" y="60" width="60" height="20" class="up" opacity=".7"/><text class="lbl" x="112" y="75" text-anchor="end">GBP/USD</text><text class="lbl-sm" x="188" y="75">~2%</text><rect x="120" y="94" width="105" height="20" fill="var(--warn)" opacity=".8"/><text class="lbl" x="112" y="109" text-anchor="end">GBP/JPY</text><text class="lbl-sm" x="233" y="109">~4%</text><rect x="120" y="128" width="175" height="20" class="dn" opacity=".7"/><text class="lbl" x="112" y="143" text-anchor="end">XAU/USD</text><text class="lbl-sm" x="303" y="143">~7%</text><rect x="120" y="162" width="330" height="12" class="dn" opacity=".85"/><text class="lbl" x="112" y="172" text-anchor="end">USD/TRY</text><text class="lbl-sm" x="458" y="172">~15%+</text></svg><figcaption>Indicative only — the student fills in real numbers from their own broker. The shape of the result is what matters: cost relative to opportunity, not cost alone.</figcaption></figure>',
    deliverable: "A working **FX Calculator** spreadsheet that reproduces the platform's P&L within rounding on all five verification trades, including one JPY pair, one USD-base pair and gold — plus the eight-instrument comparison table sorted by spread-as-percentage-of-range.",
    rubric: [
      { c: "Direction handling", d: "One sheet correctly computes both long and short P&L, returning negative numbers for losses without manual sign flipping." },
      { c: "Pip decimal handling", d: "JPY pairs use 0.01 and standard pairs 0.0001, driven by an input cell rather than hard-coded per sheet." },
      { c: "Pip value accuracy", d: "Matches the platform on EUR/USD, USD/JPY and USD/CAD. Student can explain why the USD/JPY figure is not $10." },
      { c: "Cost inclusion", d: "Spread and commission are subtracted, and the student states P&L as net rather than gross without being reminded." },
      { c: "Contract size awareness", d: "Gold uses its actual contract size from Specification, not the 100,000 assumption. Student found this without being told." },
      { c: "Comparative judgement", d: "Can name which instruments are expensive relative to their opportunity, and justify it with the percentage figure rather than raw spread." }
    ],
    pitfalls: [
      "Hard-coding 0.0001 everywhere, so the JPY case is silently wrong by a factor of 100. Check this specifically.",
      "Using entry price rather than exit price in the pip-value formula. It is a small error on majors and a visible one on USD/JPY.",
      "Assuming gold has a 100,000 contract size. It usually does not, and the resulting numbers are absurd — a useful teaching moment if you let them run into it.",
      "Reporting gross P&L and calling it profit. Reject any deliverable that omits costs.",
      "Comparing raw spreads across instruments and concluding gold is 'expensive'. Only spread relative to typical range is meaningful."
    ]
  },

  homework: [
    "Complete ten paper P&L calculations across at least three pair types, and check each against your own calculator.",
    "Record the daily range of EUR/USD and GBP/JPY every day for a week, and compute the spread as a percentage of each.",
    "Write down which two instruments you will trade for the rest of this course, and justify the choice using cost and liquidity."
  ],

  quiz: [
    {
      q: "USD/JPY moves from 148.20 to 148.75. How many pips is that?",
      options: ["5.5 pips", "55 pips", "550 pips", "0.55 pips"],
      a: 1,
      why: "On JPY pairs the pip is the second decimal place, so 0.55 in price equals 55 pips. Applying the four-decimal convention here would give 5,500 and lead directly to a position sized 100 times wrong. Always confirm the decimal convention before sizing."
    },
    {
      q: "You are long 0.30 lots of GBP/USD with a USD account. What is your approximate pip value?",
      options: ["$0.30 per pip", "$3.00 per pip", "$30.00 per pip", "It cannot be determined without the current price"],
      a: 1,
      why: "GBP/USD is USD-quoted, so pip value is exactly $10 per standard lot regardless of price. At 0.30 lots that is $3.00 per pip. The 'cannot be determined' answer would be correct for USD/CHF or USD/CAD, where the dollar is the base and pip value does depend on the current rate."
    },
    {
      q: "You short EUR/USD at 1.0920 and cover at 1.0885, using 0.50 lots. What is the gross P&L?",
      options: ["−$175", "+$175", "+$35", "+$17.50"],
      a: 1,
      why: "A short profits when price falls. Pips gained = (1.0920 − 1.0885) / 0.0001 = 35 pips. Pip value at 0.50 lots on a USD-quoted pair = $5. So 35 × $5 = +$175 gross, before spread and commission. Note that this is *gross* — the net figure is always a little lower."
    },
    {
      q: "You are long EUR/USD, long GBP/USD and long AUD/USD, each at 1% risk. What is your realistic total exposure?",
      options: [
        "1%, because they are all separate trades",
        "3%, spread across three uncorrelated markets",
        "Close to 3% on a single view — all three are effectively short-dollar positions",
        "Zero, because the positions hedge each other"
      ],
      a: 2,
      why: "All three pairs have USD as the quote currency, so all three profit if the dollar weakens. They are highly correlated and will typically lose together on a dollar-strength move. Treat correlated positions as one position when totalling risk — this is how disciplined 1%-per-trade students still take 3% and 4% hits."
    },
    {
      q: "Why do beginners get told to trade major pairs rather than exotics?",
      options: [
        "Exotics move too slowly to be profitable",
        "Majors have far tighter spreads, deeper liquidity, and behave more orderly",
        "Exotics are not available on most platforms",
        "Majors are less risky in the sense that they cannot lose money"
      ],
      a: 1,
      why: "Exotics can have spreads twenty times wider than a major, thin overnight liquidity, and gap violently on domestic political or central-bank news. That combination means a beginner's stop is both more expensive to place and less reliable. Note that majors are not 'safe' — they are simply cheaper and better behaved."
    },
    {
      q: "A trader's spreadsheet says a 40-pip winner made $400, but the platform reports $388. What is the most likely explanation?",
      options: [
        "The platform is wrong",
        "The spreadsheet reports gross P&L and omits spread and commission",
        "The pip value changed mid-trade",
        "The trade was closed at the wrong price"
      ],
      a: 1,
      why: "A gap of that size is almost always transaction costs. Spread is embedded in the entry fill and commission is charged on both sides. A calculator that reports gross figures will flatter every result and quietly make a break-even strategy look profitable — which is why the lab requires costs in the formula."
    }
  ]
}

]);
