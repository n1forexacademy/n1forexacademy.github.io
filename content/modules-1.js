/* Modules 1–4 — Foundation phase */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 1 ============================= */
{
  id: 1,
  title: "What the Forex Market Actually Is",
  tagline: "The market, its participants, and why a price moves at all — before any chart appears.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Explain in plain language what is being bought and sold in a forex trade",
    "Name the main participant tiers and say who sets price and who takes it",
    "Describe why forex is decentralised and what that means practically for a retail trader",
    "Distinguish spot forex from CFDs, futures and physical currency exchange",
    "State honestly what the realistic outcome distribution for a new retail trader looks like"
  ],

  misconceptions: [
    "**\"Forex is a place.\"** There is no exchange building and no single order book. There is a network of banks, brokers and electronic venues quoting each other. Two brokers can show slightly different prices at the same instant and neither is wrong.",
    "**\"Someone must be making the price go up.\"** Price moves because the best available bid or offer changes. Nobody decides it. Sustained moves happen when one side keeps having to pay up to get filled.",
    "**\"Trading is like investing in a company.\"** A currency has no earnings and pays no dividend. You are betting on a *relative* value between two economies, which means a forex position is always two-sided.",
    "**\"The 24-hour market means I can always trade.\"** It is open 24 hours on weekdays, but liquidity is wildly uneven. Trading a major pair at 03:00 UTC is a different game from trading it at 14:00 UTC."
  ],

  glossary: [
    { t: "Forex (FX)", d: "The market for exchanging one currency for another. Also called the foreign exchange or currency market." },
    { t: "Spot forex", d: "An agreement to exchange currencies at the current price, conventionally settled in two business days. Retail platforms roll positions forward instead of settling." },
    { t: "CFD", d: "Contract for difference — a derivative where you settle the price difference in cash rather than exchange the underlying. Most retail forex is traded as CFDs." },
    { t: "Interbank market", d: "The top tier where large banks quote prices to each other. Retail prices are ultimately derived from here." },
    { t: "Liquidity", d: "How much can be traded near the current price without moving it. High liquidity means tight spreads and reliable fills." },
    { t: "Liquidity provider", d: "An institution that continuously quotes both a bid and an offer, earning the spread for taking the other side of trades." },
    { t: "Retail trader", d: "An individual trading their own money through a broker. The smallest and least informed tier of the market." },
    { t: "Volatility", d: "How much price moves over a period. Not the same as direction — a market can be violently volatile and go nowhere." },
    { t: "OTC", d: "Over the counter. Traded directly between two parties rather than through a central exchange." },
    { t: "Counterparty", d: "The other side of your trade. With a retail broker, that is often the broker itself." }
  ],

  slides: [
    {
      kicker: "Module 1 · Opening",
      title: "Every forex trade is one sentence",
      bullets: [
        "**\"I am selling one currency to buy another, and I think the one I am buying will get stronger.\"**",
        "That is the entire product. Everything else in this course is *how* and *how much*.",
        "A price of **EUR/USD 1.0850** means: one euro costs 1.0850 US dollars.",
        "If you buy EUR/USD you own euros and owe dollars. You profit if the euro strengthens against the dollar — *not* if \"the market goes up\"."
      ],
      note: "Ask the room to say the sentence back to you using a different pair before you move on. If a student cannot state which currency they own after a buy, nothing later in this course will land. Spend five minutes here if you need to."
    },
    {
      kicker: "Module 1 · Scale",
      title: "The size of the thing",
      bullets: [
        "Roughly **$7–8 trillion** changes hands every day across global FX — more than all equity markets combined.",
        "The vast majority is **not speculation**: it is companies paying overseas suppliers, funds hedging foreign holdings, central banks managing reserves, tourists buying holiday money.",
        "Speculative retail trading is a **rounding error** in that flow.",
        "Practical consequence: **you cannot move this market, and it does not know you exist.** Your job is to read flow, never to fight it."
      ],
      note: "This is the humility slide. The scale point matters because it kills two beginner fantasies at once — that a broker is 'hunting' their individual 20-dollar position, and that their own analysis can somehow overrule what the market is doing."
    },
    {
      kicker: "Module 1 · Structure",
      title: "There is no building",
      bullets: [
        "Forex is **decentralised** and **over the counter**. No exchange, no central order book, no closing bell.",
        "It is a tiered network: banks quote each other, then quote brokers, then brokers quote you.",
        "Each tier adds a little to the price. That markup is where your **spread** comes from.",
        "Two brokers can show 1.08501 and 1.08504 at the same instant. Both are legitimate.",
        "**No consolidated tape** means volume on your chart is your broker's volume, not the market's."
      ],
      visual: '<svg class="fig" viewBox="0 0 560 220" role="img" aria-label="Tiered structure of the forex market from interbank down to retail"><rect x="140" y="12" width="280" height="38" rx="8" class="acc"/><text class="lbl" x="280" y="36" text-anchor="middle">Tier 1 — major banks quote each other (interbank)</text><rect x="105" y="70" width="350" height="38" rx="8" class="acc"/><text class="lbl" x="280" y="94" text-anchor="middle">Tier 2 — prime brokers, ECNs, liquidity providers</text><rect x="70" y="128" width="420" height="38" rx="8" class="acc"/><text class="lbl" x="280" y="152" text-anchor="middle">Tier 3 — retail brokers aggregate and re-quote</text><rect x="35" y="182" width="490" height="30" rx="8" class="acc" stroke-dasharray="5 4"/><text class="lbl" x="280" y="201" text-anchor="middle">You</text><line x1="280" y1="50" x2="280" y2="70" class="dash"/><line x1="280" y1="108" x2="280" y2="128" class="dash"/><line x1="280" y1="166" x2="280" y2="182" class="dash"/><text class="lbl-sm" x="520" y="36" text-anchor="end">tightest pricing</text><text class="lbl-sm" x="520" y="201" text-anchor="end">widest pricing</text></svg>',
      note: "Draw the pyramid on a whiteboard as you talk rather than just showing it. The point students must leave with: the spread is not a fee someone invented to annoy them, it is the accumulated cost of every tier between them and the interbank market."
    },
    {
      kicker: "Module 1 · Participants",
      title: "Who you are actually trading against",
      bullets: [
        "**Central banks** — set interest rates, occasionally intervene directly. The largest single force on a currency.",
        "**Commercial banks** — market makers. They quote both sides and earn the spread.",
        "**Corporations** — hedge real cash flows. They trade on need and on schedule, not on opinion.",
        "**Hedge funds and asset managers** — large, informed, well-capitalised directional bets.",
        "**Retail brokers** — sell you access, and often take the other side of your trade.",
        "**You** — last in line, smallest size, least information."
      ],
      note: "Ask: 'Of these, which one is trading against your specific position?' The honest answer is usually the broker's B-book, and that is a Module 4 topic. The bigger lesson is that price is set by participants whose motives have nothing to do with technical analysis — a corporate hedger will buy at any price on the last day of the quarter."
    },
    {
      kicker: "Module 1 · Mechanics",
      title: "Why price moves",
      bullets: [
        "At any instant there is a **best bid** (highest anyone will pay) and a **best offer** (lowest anyone will accept).",
        "A **market buy** consumes the offers sitting there. When they run out, the next-best offer is higher — and price has moved.",
        "So price moves because **one side is more urgent than the other**, not because of a chart pattern.",
        "Big moves happen where there is little resting interest: thin sessions, after news, over weekends.",
        "**Everything you will learn about levels and structure is a way of guessing where resting interest sits.**"
      ],
      note: "This is the single most important conceptual slide in the module. If a student understands price as consumption of resting orders, then support, resistance, liquidity, stop hunts and gaps all become one idea rather than five memorised rules. Do not rush it."
    },
    {
      kicker: "Module 1 · Mechanics",
      title: "Bid, ask and the cost of entry",
      bullets: [
        "**Bid** — what the broker will buy from you at. **Ask** (or offer) — what they will sell to you at.",
        "The gap between them is the **spread**, and it is your first cost on every single trade.",
        "You buy at the ask and sell at the bid, so **every trade starts at a small loss**.",
        "Example: EUR/USD bid 1.08500, ask 1.08512. Spread is 1.2 pips. Buy at 1.08512 and you need price at 1.08512 on the bid just to break even.",
        "Spreads widen when liquidity thins — overnight, around news, at the weekly open."
      ],
      visual: '<svg class="fig" viewBox="0 0 520 140" role="img" aria-label="Bid ask spread on a price ladder"><line x1="60" y1="20" x2="60" y2="120" class="axis"/><text class="lbl-sm" x="50" y="24" text-anchor="end">higher</text><text class="lbl-sm" x="50" y="120" text-anchor="end">lower</text><line x1="60" y1="45" x2="330" y2="45" class="dn" stroke-width="2.5"/><text class="lbl" x="342" y="49">ASK 1.08512 — you BUY here</text><line x1="60" y1="90" x2="330" y2="90" class="up" stroke-width="2.5"/><text class="lbl" x="342" y="94">BID 1.08500 — you SELL here</text><line x1="200" y1="45" x2="200" y2="90" class="dash"/><rect x="150" y="58" width="100" height="20" rx="5" fill="none" class="acc"/><text class="lbl" x="200" y="72" text-anchor="middle">spread 1.2 pips</text></svg>',
      note: "Have a live platform open and point at the two numbers. Then say: 'Open a trade and close it one second later — what is your P&L?' The answer, negative by the spread, is a shock to most beginners and sets up the Module 10 point that costs decide whether a marginal edge survives."
    },
    {
      kicker: "Module 1 · Instruments",
      title: "Spot, CFD, futures — know what you hold",
      bullets: [
        "**Spot FX** — the underlying market. Institutional, large minimum sizes.",
        "**CFD on FX** — what nearly all retail platforms actually offer. You never own the currency; you settle the price difference in cash.",
        "**FX futures** — standardised, exchange-traded, centrally cleared. Transparent volume, fixed contract sizes.",
        "**Physical exchange** — the bureau de change. Terrible rates, no leverage, not trading.",
        "Why it matters: CFDs mean your **counterparty is your broker**, you pay **overnight swap**, and in some jurisdictions retail CFDs are restricted or banned."
      ],
      note: "Check your student's jurisdiction here — CFD rules vary enormously between the UK/EU, the US, and most of Africa and Asia. In the US retail forex is not CFD-based at all. Getting this wrong wastes their time later."
    },
    {
      kicker: "Module 1 · Costs",
      title: "The three ways a position costs you money",
      bullets: [
        "**Spread** — paid on entry, every trade, unavoidable.",
        "**Commission** — a per-lot charge on raw-spread accounts. Often cheaper overall than a 'zero commission' wide-spread account.",
        "**Swap / rollover** — interest charged or paid for holding overnight, based on the rate difference between the two currencies. Can be positive, but usually is not after the broker's markup.",
        "Triple swap is charged on one day of the week (usually Wednesday) to cover the weekend.",
        "**A scalper is destroyed by spread. A swing trader is destroyed by swap.** Match your cost structure to your style."
      ],
      note: "Get the student to find the swap rates in their own platform during the lab. Most retail traders have never looked at them, then wonder why a position held for three weeks underperforms the chart."
    },
    {
      kicker: "Module 1 · Reality",
      title: "The number nobody wants on a slide",
      bullets: [
        "Regulators require brokers to publish retail loss rates. Across the industry these sit around **70–80% of accounts losing money**.",
        "That is a published, audited figure — not a discouraging opinion.",
        "The losses are not mostly bad analysis. They are **oversized positions, no stop loss, and revenge trading**.",
        "This course spends more time on risk than on entries *because that is where the failures actually are*.",
        "**Nothing here can promise profit. The honest goal is to make you a competent, controlled operator.**"
      ],
      note: "Do not soften this. A student who starts with realistic expectations survives a losing month; one sold a dream quits or blows up. If they push back, ask them to open their own broker's homepage and read the risk disclosure aloud — it is legally required to be there."
    },
    {
      kicker: "Module 1 · Reality",
      title: "How to spot the scam before it costs you",
      bullets: [
        "**Guaranteed returns, or a fixed monthly percentage.** No legitimate trader can promise this. This is the single clearest signal.",
        "**Screenshots of profits with no losses and no account statement.** Demo accounts and photo editors are free.",
        "**Signal groups charging for entries with no track record and no risk parameters.**",
        "**\"Send me your funds and I'll trade them.\"** That is regulated fund management. Almost nobody offering it in a chat group is licensed.",
        "**Unregulated brokers with huge bonuses.** The bonus is bait; the withdrawal terms are the trap.",
        "**Verify the licence number on the regulator's own website**, never on the broker's."
      ],
      note: "Do this practically in the lab: pick a broker the student has actually seen advertised and look up its licence together on the FCA, ASIC, CySEC or local regulator register. Half the time it is not there. That five-minute exercise has saved students more money than any strategy in this course."
    },
    {
      kicker: "Module 1 · Wrap",
      title: "What you should be able to say now",
      bullets: [
        "What is bought and sold in a forex trade, and which currency you own after a buy",
        "Why the market is decentralised, and what that means for price differences and volume data",
        "Why price moves — resting orders being consumed, not patterns causing motion",
        "The three costs of holding a position, and which style each one punishes",
        "The realistic outcome distribution, and the warning signs of a scam"
      ],
      note: "Close by asking the student to teach the 'why price moves' slide back to you in their own words. Explaining it is the test; recognising it is not."
    }
  ],

  practical: {
    title: "Lab 1 — Market orientation and broker verification",
    time: "50 min",
    intro: "No trading in this lab. The goal is that the student can find, read and interpret the raw facts of the market they are about to enter — and can verify a broker is real before ever depositing.",
    setup: [
      "A free **MT4 or MT5 demo account** installed on a laptop",
      "A **TradingView** free account open in a browser tab",
      "The **regulator register** for their jurisdiction bookmarked (FCA, ASIC, CySEC, FSCA, SEC/NFA, or local equivalent)",
      "A blank spreadsheet titled *Market Orientation*"
    ],
    steps: [
      { h: "Read a live quote out loud", d: "Open EUR/USD. Have the student say: the bid, the ask, the spread in pips, and — in a full sentence — what they would own if they clicked Buy. Repeat for USD/JPY and for gold. Do not accept a mumbled answer; make them say the whole sentence." },
      { h: "Measure the real cost of a round trip", d: "On the **demo** account, open a 0.01-lot buy on EUR/USD and close it immediately. Record the exact loss. Then repeat on GBP/JPY and on gold. Enter the three numbers in the spreadsheet. This is the toll before any analysis exists." },
      { h: "Watch the spread change", d: "Note the EUR/USD spread now. Then check it again at a quiet hour and again in the first minute of the London open. Record all three. The student should see the spread double or worse in thin conditions, entirely on its own." },
      { h: "Find the swap rates", d: "In MT4/MT5, right-click the symbol, open **Specification**, and locate the long and short swap. Record them for EUR/USD, AUD/JPY and gold. Then compute: if you held 0.10 lots for 30 days, what would swap alone cost or pay? Most students have never seen this number." },
      { h: "Compare two brokers on the same instant", d: "Open a second platform or a public quote page and compare the EUR/USD price with the demo platform at the same moment. They will differ slightly. Ask the student to explain why using the tier diagram from the slides." },
      { h: "Verify a licence", d: "Pick a broker the student has genuinely seen advertised — ideally from a social media ad. Find the claimed licence number on the broker's site, then search that number on the **regulator's own register**. Record: is the entity listed, is the licence active, does the registered name match the trading name, and is the licence for the right activity?" },
      { h: "Audit a promise", d: "Find one social media post promising a specific return. Write down which of the six warning signs from the slides it triggers. Keep it in the spreadsheet — it becomes a useful reference when the student is tempted later." }
    ],
    deliverable: "A completed *Market Orientation* spreadsheet containing: three round-trip costs, three spread readings across different hours, swap rates for three instruments with a 30-day projection, a two-broker price comparison, one regulator verification with a verdict, and one scam audit.",
    rubric: [
      { c: "Quote literacy", d: "States bid, ask and spread correctly and unprompted, and can say which currency is owned after a buy on any pair — including a JPY pair and gold." },
      { c: "Cost awareness", d: "Correctly reports that a round trip loses money before any price movement, and can explain that the loss equals the spread." },
      { c: "Spread behaviour", d: "Observed the spread widening in thin hours and can name at least two conditions that cause it." },
      { c: "Swap comprehension", d: "Located swap rates independently and produced a correct 30-day projection with the right sign (charge vs credit)." },
      { c: "Verification skill", d: "Searched the regulator's own register rather than the broker's site, and noticed if the registered entity name differed from the brand name." },
      { c: "Scam recognition", d: "Identified at least two concrete warning signs in a real advert and explained why each one is a red flag." }
    ],
    pitfalls: [
      "Students record the spread in *price* rather than *pips*. Make them convert and state the unit every time.",
      "On JPY pairs they count decimal places wrongly and get a spread ten times too large or small. Catch this now — it is the same error that later ruins their position sizing.",
      "They compare broker prices minutes apart and conclude one is 'cheating'. Insist on the same instant, side by side.",
      "They find the broker's licence page and stop there. The whole point is checking the regulator's register instead. Watch for this — nearly everyone shortcuts it."
    ]
  },

  homework: [
    "Read the risk disclosure on the homepage of the broker you are considering, and write down the exact percentage of retail accounts that lose money there.",
    "Track the EUR/USD spread at three fixed times each day for the next three days and chart the result.",
    "Write one paragraph, in your own words, explaining why price moves. Bring it to the next session — you will read it aloud."
  ],

  quiz: [
    {
      q: "You buy EUR/USD. Which statement is correct?",
      options: [
        "You own euros and are short dollars; you profit if the euro strengthens against the dollar",
        "You own both euros and dollars",
        "You own dollars and are short euros",
        "You own a share of the European economy"
      ],
      a: 0,
      why: "Every forex position is two-sided. Buying the pair means buying the base currency (EUR) and selling the quote currency (USD). You profit only from the euro strengthening *relative to* the dollar — both could weaken against a third currency and you could still win."
    },
    {
      q: "Why can two regulated brokers show different EUR/USD prices at the same instant?",
      options: [
        "One of them is manipulating the price",
        "Forex is decentralised — each broker aggregates its own liquidity sources and adds its own markup",
        "Prices update on a fixed schedule and they are out of sync",
        "It only happens on demo accounts"
      ],
      a: 1,
      why: "There is no central exchange and no consolidated tape in forex. Each broker builds its price from the liquidity providers it has relationships with, then applies a markup. Small differences are normal and expected — they are not evidence of manipulation."
    },
    {
      q: "You open and immediately close a position without price moving at all. What happens?",
      options: [
        "You break even",
        "You make a small profit from the rebate",
        "You lose the spread, because you bought at the ask and sold at the bid",
        "Nothing — the trade is cancelled"
      ],
      a: 2,
      why: "You always buy at the higher ask and sell at the lower bid. That gap is the spread, and it is charged the moment you enter. Every trade therefore starts underwater by the spread plus any commission — which is exactly why high-frequency scalping with a wide spread is close to unwinnable."
    },
    {
      q: "Which cost most damages a trader who holds positions for several weeks?",
      options: [
        "The spread",
        "Commission",
        "Swap / overnight rollover",
        "The deposit fee"
      ],
      a: 2,
      why: "Spread and commission are paid once per trade, so they hurt high-frequency traders most. Swap is charged every single night a position is open, so it compounds against a long-hold swing or position trader. Match your cost structure to your holding period."
    },
    {
      q: "A signal service advertises '15% monthly returns, guaranteed, verified results'. What is the single clearest problem?",
      options: [
        "15% is too low to be worth paying for",
        "No legitimate trading operation can guarantee a return, because returns depend on an uncertain market",
        "Monthly is the wrong reporting period",
        "There is no problem if the results are verified"
      ],
      a: 1,
      why: "The word *guaranteed* is the giveaway, and it is independent of the number. Trading outcomes are probabilistic; anyone promising a fixed return is either lying about the outcomes or running something other than trading. 'Verified' claims made by the seller are not verification — regulator registers and independently audited statements are."
    },
    {
      q: "Roughly what proportion of the daily forex volume is retail speculation?",
      options: [
        "About half",
        "About a quarter",
        "A very small fraction — most volume is commercial, hedging and institutional flow",
        "Nearly all of it"
      ],
      a: 2,
      why: "Retail speculation is a tiny slice of a market dominated by corporate payments, hedging, reserve management and institutional positioning. The practical consequence is that your orders cannot move price, and that much of the flow you are trading against is driven by needs and mandates rather than by charts."
    }
  ]
},

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
},

/* ============================= MODULE 3 ============================= */
{
  id: 3,
  title: "Orders, Leverage and Margin",
  tagline: "How a trade is actually placed and financed — and the exact mechanism by which accounts get wiped out.",
  level: "Foundation",
  duration: "120 min",

  objectives: [
    "Choose the correct order type for a given intention and place it accurately",
    "Explain leverage as a margin requirement rather than as borrowed money",
    "Compute required margin, free margin and margin level for a position",
    "Describe the stop-out sequence step by step and identify what triggers it",
    "Anticipate slippage and gaps, and explain why a stop loss is not a guarantee"
  ],

  misconceptions: [
    "**\"Leverage causes losses.\"** Leverage sets the *minimum deposit* to hold a position. **Position size** causes losses. A 500:1 account trading 0.01 lots is far safer than a 10:1 account trading 5 lots.",
    "**\"High leverage means bigger profits.\"** It means you are *permitted* to hold a bigger position on the same deposit. Whether you should is a risk decision, and the answer is nearly always no.",
    "**\"My stop loss guarantees my maximum loss.\"** It guarantees an *order*, not a *price*. Over a weekend gap or during a central-bank surprise, you can be filled far worse.",
    "**\"A margin call means the broker will call me.\"** Nobody calls. Positions are closed automatically, starting with the biggest loser, with no warning you will notice in time."
  ],

  glossary: [
    { t: "Market order", d: "Buy or sell immediately at the best price currently available. Certain execution, uncertain price." },
    { t: "Limit order", d: "An order to buy below the current price or sell above it. Certain price, uncertain execution." },
    { t: "Stop order", d: "An order to buy above the current price or sell below it, used to enter on momentum or to exit a loser." },
    { t: "Stop loss", d: "A resting exit order that closes a losing position at a defined level." },
    { t: "Take profit", d: "A resting exit order that closes a winning position at a target level." },
    { t: "Leverage", d: "The ratio between position size and required margin. 100:1 means $1,000 of margin controls $100,000 of currency." },
    { t: "Margin", d: "The deposit locked as collateral while a position is open. It is not a fee and it is not spent." },
    { t: "Free margin", d: "Equity minus used margin — what is available to open new positions or absorb losses." },
    { t: "Margin level", d: "Equity divided by used margin, as a percentage. The number the broker watches to decide when to close you out." },
    { t: "Stop out", d: "Automatic forced closure of positions when margin level falls below the broker's threshold." },
    { t: "Slippage", d: "The difference between the price you expected and the price you received." },
    { t: "Gap", d: "A jump between one price and the next with no trading in between — typically at the weekly open or on major news." },
    { t: "Equity", d: "Balance plus or minus the floating profit and loss of open positions. The number that actually matters." }
  ],

  slides: [
    {
      kicker: "Module 3 · Orders",
      title: "Four order types cover everything",
      bullets: [
        "**Market** — execute now at whatever is available. Use when being in matters more than the price.",
        "**Buy limit / sell limit** — get a *better* price than now. Buy below, sell above. You are waiting for price to come to you.",
        "**Buy stop / sell stop** — get a *worse* price than now, on purpose. Buy above, sell below. You are waiting for confirmation of momentum.",
        "**Stop loss / take profit** — resting exits attached to an open position.",
        "The mental shortcut: **limit = patience, stop = confirmation, market = urgency.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 560 200" role="img" aria-label="Order types positioned relative to current price"><line x1="80" y1="100" x2="500" y2="100" class="acc" stroke-dasharray="0"/><text class="lbl" x="510" y="104">now</text><line x1="80" y1="40" x2="440" y2="40" class="dash"/><text class="lbl" x="90" y="34">BUY STOP — enter long on breakout above</text><line x1="80" y1="64" x2="440" y2="64" class="dash"/><text class="lbl" x="90" y="58">SELL LIMIT — sell into strength above</text><line x1="80" y1="140" x2="440" y2="140" class="dash"/><text class="lbl" x="90" y="134">BUY LIMIT — buy into weakness below</text><line x1="80" y1="168" x2="440" y2="168" class="dash"/><text class="lbl" x="90" y="162">SELL STOP — enter short on breakdown below</text><text class="lbl-sm" x="20" y="44">higher</text><text class="lbl-sm" x="20" y="172">lower</text></svg>',
      note: "Students confuse buy limit and buy stop constantly. The fix is to stop teaching it as vocabulary and ask instead: 'do you want a better price than now, or do you want proof first?' The order type falls out of the answer."
    },
    {
      kicker: "Module 3 · Orders",
      title: "Market versus limit — the real trade-off",
      bullets: [
        "**Market order:** guaranteed to fill, not guaranteed at your price. In fast conditions you can slip several pips.",
        "**Limit order:** guaranteed price if it fills, but it may never fill — and the trades that do not fill are often the best ones, because price ran without you.",
        "Missing a trade costs you nothing. **Chasing a missed trade with a market order costs real money**, repeatedly.",
        "Exiting is different: **always use a market order or a stop to exit a loser.** Never use a limit to get out of a losing trade — hoping for a better exit is how a small loss becomes an account.",
        "Enter with patience. **Exit with certainty.**"
      ],
      note: "That last pair of lines is the takeaway. Write it on the board. The asymmetry — patient entries, certain exits — is a discipline point disguised as a mechanics point, and it comes back in Module 12."
    },
    {
      kicker: "Module 3 · Leverage",
      title: "Leverage is not a loan",
      bullets: [
        "Leverage is the **ratio between position size and the margin required to hold it**.",
        "At **100:1**, controlling $100,000 (one standard lot) requires **$1,000** locked as margin.",
        "That $1,000 is **not spent and not borrowed** — it is collateral, returned when you close.",
        "Higher leverage does not increase your loss on a given position by one cent. **It only permits a larger position on the same deposit.**",
        "**Leverage is permission. Position size is risk. Never confuse the two.**"
      ],
      note: "This slide corrects the most persistent misconception in retail trading. Make it concrete: two traders, identical $1,000 account, identical 0.01-lot EUR/USD trade, one on 30:1 and one on 500:1. Ask what each loses if price drops 20 pips. Identical. The leverage difference changed nothing about the risk."
    },
    {
      kicker: "Module 3 · Leverage",
      title: "So why is leverage dangerous?",
      bullets: [
        "Because it **removes the natural constraint** that used to stop people over-sizing.",
        "With $500 and no leverage you could buy 500 units. With 500:1 you can control 250,000 — **2.5 standard lots**.",
        "At 2.5 lots, EUR/USD moving **20 pips against you costs $500**. The whole account. On a move the market makes several times a day.",
        "The danger is entirely in the **temptation**, not the mechanism.",
        "Regulators cap retail leverage at **30:1 or lower** in the UK, EU and Australia for exactly this reason. Offshore brokers offering 1000:1 are not being generous."
      ],
      note: "Ask: 'If leverage does not change your loss on a given trade, why do regulators cap it?' The answer — because it caps the maximum position an inexperienced trader can take — is the real lesson, and students remember it because they worked it out."
    },
    {
      kicker: "Module 3 · Margin",
      title: "The four numbers on your account panel",
      bullets: [
        "**Balance** — closed-trade cash. Does not move while a trade is open.",
        "**Equity** — balance ± floating P&L. **This is your real account value.**",
        "**Used margin** — collateral locked by open positions.",
        "**Free margin** — equity − used margin. Your capacity to absorb losses and open new trades.",
        "**Margin level = (equity ÷ used margin) × 100%.** This one number decides whether you get closed out."
      ],
      visual: '<svg class="fig" viewBox="0 0 560 175" role="img" aria-label="Relationship between balance, equity, used margin and free margin"><rect x="40" y="20" width="480" height="34" rx="6" class="acc"/><text class="lbl" x="280" y="42" text-anchor="middle">EQUITY = balance ± floating P&amp;L (what you actually have)</text><rect x="40" y="72" width="170" height="34" rx="6" fill="none" stroke="var(--bear)" stroke-width="2"/><text class="lbl" x="125" y="94" text-anchor="middle">USED MARGIN</text><rect x="222" y="72" width="298" height="34" rx="6" fill="none" stroke="var(--bull)" stroke-width="2"/><text class="lbl" x="371" y="94" text-anchor="middle">FREE MARGIN — your buffer</text><rect x="40" y="124" width="480" height="34" rx="6" fill="none" class="dash"/><text class="lbl" x="280" y="146" text-anchor="middle">MARGIN LEVEL = equity ÷ used margin × 100%</text><line x1="280" y1="54" x2="280" y2="72" class="dash"/><line x1="280" y1="106" x2="280" y2="124" class="dash"/></svg>',
      note: "Have the platform open with a position running and point at each field live. Students who only ever look at Balance are genuinely surprised when they realise a floating loss has already reduced what they own. Equity is the number, not balance."
    },
    {
      kicker: "Module 3 · Margin",
      title: "Worked example — margin in practice",
      bullets: [
        "Account: **$2,000**. Leverage **100:1**. Open **0.50 lots** EUR/USD at 1.0850.",
        "Position value = 50,000 × 1.0850 = **$54,250**. Required margin = ÷100 = **$542.50**.",
        "Free margin = $2,000 − $542.50 = **$1,457.50**. Margin level = 2000 ÷ 542.50 = **369%**.",
        "Price falls 100 pips → floating loss $500. Equity = $1,500. Margin level = **276%**.",
        "Price falls 250 pips → floating loss $1,250. Equity = $750. Margin level = **138%** — approaching the warning threshold."
      ],
      note: "Walk each line slowly and let the student compute the next one before you reveal it. The point they should feel: margin level falls much faster than it feels like it should, because equity falls while used margin stays roughly fixed."
    },
    {
      kicker: "Module 3 · Danger",
      title: "The stop-out sequence",
      bullets: [
        "**Margin level falls below the call level** (commonly 100%) — the platform flags a warning. You may not see it.",
        "**No one telephones you.** The term 'margin call' is a historical fossil.",
        "**Margin level falls below the stop-out level** (commonly 50%, sometimes 20%) — the broker begins **automatically closing positions**, largest loser first.",
        "It closes at market, in fast conditions, at whatever price exists. **You have no say and no warning.**",
        "In extreme gaps an account can go **negative**. Negative-balance protection exists in some jurisdictions and not others — **check yours**."
      ],
      note: "Ask the student to find their own broker's specific call and stop-out levels right now, in the platform or the contract terms. Almost nobody knows them. Those two numbers define exactly how much room their account has, and they should be written at the top of their trading plan."
    },
    {
      kicker: "Module 3 · Danger",
      title: "Why your stop loss is not a guarantee",
      bullets: [
        "A stop loss is an **instruction to sell at market once a level trades**. It does not reserve a price for you.",
        "**Slippage:** in fast conditions the next available price may be several pips past your stop. Normal, and usually small.",
        "**Gaps:** the weekly open, central-bank surprises and geopolitical shocks can jump straight past your level. Your fill can be far worse.",
        "**Guaranteed stops** exist at some brokers for a premium. They genuinely do cap your loss.",
        "**Practical rule: assume your worst case is bigger than your stop, and size so that even the bad version is survivable.**"
      ],
      note: "Give a historical example the student can look up themselves — the Swiss franc de-pegging in January 2015 is the standard one, where stops were filled hundreds of pips away and some accounts went deeply negative. Have them read about it as homework rather than taking your word for it."
    },
    {
      kicker: "Module 3 · Execution",
      title: "Execution details that quietly cost you",
      bullets: [
        "**Requotes** — the broker offers a different price instead of filling. Common on dealing-desk accounts, rare on ECN.",
        "**Maximum deviation / slippage tolerance** — set this in the order dialog so a market order does not fill 15 pips away.",
        "**Weekend risk** — positions held over the weekend can gap on Monday's open with no way to exit in between.",
        "**Rollover time** — the daily swap point, usually around 21:00–22:00 UTC. Spreads often widen sharply for a minute either side.",
        "**News windows** — many brokers widen spreads or restrict order placement around high-impact releases."
      ],
      note: "These are the details that separate someone who has traded from someone who has read about trading. Set the deviation field together in the platform during the lab — most students have never noticed it exists."
    },
    {
      kicker: "Module 3 · Wrap",
      title: "The mechanics you now own",
      bullets: [
        "Which order type expresses which intention, and why exits differ from entries",
        "Leverage as permission, not as risk — and position size as the thing that actually matters",
        "How to compute margin, free margin and margin level, and why equity is the real number",
        "The exact sequence by which an account gets closed out",
        "Why a stop loss is a strong protection and not a guarantee"
      ],
      note: "If the student can recite the stop-out sequence unprompted, this module has done its job. It is the mechanism behind almost every blown account, and understanding it makes the risk rules in Module 10 feel obvious rather than arbitrary."
    }
  ],

  practical: {
    title: "Lab 3 — Order drills and a controlled margin blow-up",
    time: "70 min",
    intro: "Two halves. First, mechanical accuracy with order types until placement is automatic. Then a deliberate, controlled account destruction on a demo account — the single most memorable exercise in the course. Students who have watched their own equity get force-closed do not over-leverage afterwards.",
    setup: [
      "**A second, disposable MT4/MT5 demo account** funded with a small amount — $500 or less. This account will be destroyed.",
      "The primary demo account for the order drills",
      "The broker's **call level and stop-out level** located in advance and written down",
      "A screen-recording tool or phone camera, so the blow-up can be replayed"
    ],
    steps: [
      { h: "Order-type drill", d: "On EUR/USD, place all four pending order types 30 pips from current price, each in the correct direction: buy stop above, sell limit above, buy limit below, sell stop below. Then have the student delete them and place the same four again from memory, saying aloud what each one expresses. Repeat until there is no hesitation." },
      { h: "Attach and modify exits", d: "Open a 0.01-lot market position. Attach a stop loss and take profit by editing the position, then modify both by dragging them on the chart, then modify both again through the order dialog. The student must be able to do all three routes — dragging is fast but easy to fumble under pressure." },
      { h: "Set slippage tolerance", d: "Find the maximum deviation setting in the order window. Set it to 3 pips. Discuss with the student what happens if the market moves faster than that: the order is rejected rather than filled badly. Ask which they would prefer for an entry, and which for an exit." },
      { h: "Record the four account numbers", d: "With one 0.10-lot position open, write down balance, equity, used margin, free margin and margin level. Then compute margin level by hand and confirm it matches the platform. Do not accept 'it says 380%' — they must derive it." },
      { h: "Predict, then verify", d: "Before opening a second position, have the student predict the new used margin and margin level. Open it. Compare prediction with reality. Repeat until predictions are accurate." },
      { h: "THE BLOW-UP — set the stage", d: "On the **disposable** account, open a deliberately oversized position — enough that a normal daily move threatens the account. Note the margin level. Have the student state, out loud, how many pips they think it will survive." },
      { h: "THE BLOW-UP — watch it happen", d: "Leave it running while you continue the session. Watch the margin level fall. Do not intervene. When the stop out triggers, screenshot the account history showing the forced closure. If the market is quiet, add positions until it triggers — the point is the mechanism, not the timing." },
      { h: "Debrief honestly", d: "Ask three questions and write the answers down. How many pips did it actually survive versus the prediction? At what moment did it stop feeling survivable? What position size would have made this a routine losing trade instead of a wipeout? Keep this page — it is referred back to in Module 10." }
    ],
    deliverable: "A one-page **Execution & Margin Report** containing: a screenshot of all four pending order types correctly placed, a hand-computed margin level matching the platform, a prediction-versus-actual table for two positions, a screenshot of the forced stop-out on the disposable account, and the written debrief answers.",
    rubric: [
      { c: "Order accuracy", d: "Places all four pending types in the correct direction and on the correct side of price, from memory, with no hesitation." },
      { c: "Exit fluency", d: "Can attach and modify a stop and target through the dialog and by dragging, and knows which is faster under pressure." },
      { c: "Margin arithmetic", d: "Derives margin level by hand and it matches the platform. Correctly predicts the effect of adding a position before opening it." },
      { c: "Equity comprehension", d: "Refers to equity rather than balance when describing account state, without being corrected." },
      { c: "Stop-out understanding", d: "Can narrate the full sequence from call level through forced closure, and knows their own broker's two thresholds." },
      { c: "Debrief quality", d: "Debrief identifies position size — not direction, not analysis — as the cause, and names a specific size that would have survived." }
    ],
    pitfalls: [
      "Doing the blow-up on the account they have been using for other work. Insist on a separate disposable account or the exercise gets diluted by reluctance.",
      "Students explain the wipeout as 'the market went against me'. Push back until they name position size. The market goes against everyone routinely; only the size made it fatal.",
      "Confusing buy limit and buy stop under time pressure. If this is still happening at the end of the drill, repeat it next session before starting Module 4.",
      "Reading margin level off the platform and calling it derived. Make them show the division.",
      "Treating the blow-up as entertainment. Frame it seriously — the same sequence with real money ends the same way, and that is the entire point."
    ]
  },

  homework: [
    "Read a written account of the January 2015 Swiss franc de-pegging and write a paragraph on what it means for stop-loss reliability.",
    "Find and record your broker's margin call level, stop-out level, and whether negative-balance protection applies to your account type.",
    "Place ten pending orders on demo across the week — five limits and five stops — and record whether each filled and whether the outcome justified the order type chosen."
  ],

  quiz: [
    {
      q: "Price is at 1.0850 and you want to go long only if the market breaks above 1.0900. Which order?",
      options: ["Buy limit at 1.0900", "Buy stop at 1.0900", "Market order now", "Sell stop at 1.0900"],
      a: 1,
      why: "You want a *worse* price than current on purpose, because you want proof of momentum first — that is a buy stop, placed above the market. A buy limit at 1.0900 would be invalid here since limits to buy sit below current price. The shortcut: limit = patience, stop = confirmation."
    },
    {
      q: "Two traders both open 0.10 lots of EUR/USD. One has 30:1 leverage, the other 500:1. Price falls 30 pips. Who loses more?",
      options: [
        "The 500:1 trader, because higher leverage magnifies losses",
        "The 30:1 trader, because less margin is available",
        "Neither — both lose exactly $30, because loss depends on position size, not leverage",
        "It depends on the account balance"
      ],
      a: 2,
      why: "Leverage determines the margin *required* to hold a position, not the profit or loss the position produces. Both traders hold 0.10 lots, so both lose $1 per pip, so both lose $30. Leverage is dangerous only because it permits a larger position — it never magnifies the loss on a position you have already sized."
    },
    {
      q: "Your equity is $1,200 and used margin is $800. What is your margin level?",
      options: ["66.7%", "150%", "$400", "40%"],
      a: 1,
      why: "Margin level = (equity ÷ used margin) × 100 = (1200 ÷ 800) × 100 = 150%. Note how close this is to a typical 100% call level and a 50% stop out — an account at 150% has far less room than it feels like, because equity falls with the loss while used margin stays roughly fixed."
    },
    {
      q: "What actually happens at a modern margin call?",
      options: [
        "The broker telephones you to request more funds",
        "Trading is suspended until you deposit",
        "A warning appears in the platform; if margin level keeps falling to the stop-out level, positions are auto-closed starting with the largest loser",
        "All positions close immediately at the call level"
      ],
      a: 2,
      why: "Nobody calls — the name is a historical leftover. The platform flags a warning at the call level, and only if margin level continues down to the stop-out level does the system force-close positions, largest loser first, at whatever price is available. You have no input into timing or price."
    },
    {
      q: "You have a stop loss at 1.0800. Over the weekend, news causes Monday to open at 1.0710. What happens?",
      options: [
        "You are filled at exactly 1.0800 because the stop guarantees it",
        "The trade is cancelled because the price gapped",
        "You are filled near 1.0710 — the stop becomes a market order at the first available price",
        "The broker covers the difference"
      ],
      a: 2,
      why: "A stop loss is an instruction to exit at market once the level trades, not a reservation of that price. If no trading occurs between 1.0800 and 1.0710, your fill is near the open — roughly 90 pips worse than planned. This is why position size must assume a worse-than-planned exit, and why guaranteed stops exist as a paid product."
    },
    {
      q: "Why should you never use a limit order to exit a losing position?",
      options: [
        "Limit orders are not permitted for exits",
        "Because it may never fill, leaving you in a losing trade that keeps growing while you wait for a better price",
        "Because limits cost more in commission",
        "Because limits execute too quickly"
      ],
      a: 1,
      why: "A limit only fills at your price or better, so a limit exit on a loser depends on the market coming back to you — which is exactly what a losing trade is not doing. Enter with patience if you like, but exit with certainty: use a stop or a market order. Holding out for a better exit is the mechanism that turns a planned small loss into an unplanned large one."
    }
  ]
},

/* ============================= MODULE 4 ============================= */
{
  id: 4,
  title: "Brokers, Platforms and Account Setup",
  tagline: "Choosing a counterparty you can get your money back from, and configuring a workspace you can actually work in.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Evaluate a broker on regulation, execution model, costs and withdrawal record",
    "Explain the difference between dealing-desk and agency execution and why it matters",
    "Set up MT4/MT5 and TradingView to a consistent, readable working configuration",
    "Install and troubleshoot indicators and expert advisors without guessing",
    "Identify the account features that quietly damage returns"
  ],

  misconceptions: [
    "**\"Zero-commission accounts are cheaper.\"** The cost is in a wider spread. On active trading, a raw-spread-plus-commission account is usually cheaper overall. Compare total cost per round trip, never one component.",
    "**\"Regulated means my money is safe.\"** Regulation means recourse, segregated funds and some compensation cover. It does not mean the trades will work or that the broker cannot fail.",
    "**\"A bonus is free money.\"** Bonuses come with volume requirements that effectively force over-trading, and often lock your own deposit until they are met.",
    "**\"My indicator is broken.\"** Nine times out of ten it is in the wrong folder, on the wrong platform version, or AutoTrading is switched off."
  ],

  glossary: [
    { t: "Dealing desk / market maker", d: "A broker that takes the other side of client trades internally rather than passing them to the market." },
    { t: "STP / ECN / agency", d: "Execution models that pass client orders to external liquidity providers, with the broker earning commission rather than client losses." },
    { t: "A-book / B-book", d: "Whether a broker hedges a client's trade externally (A) or absorbs it internally (B)." },
    { t: "Segregated funds", d: "Client money held separately from the broker's own operating funds, so it survives the broker's insolvency." },
    { t: "Raw spread account", d: "Near-interbank spreads with an explicit per-lot commission." },
    { t: "Terminal / Market Watch", d: "The MT4/MT5 panels showing account state and the instrument list." },
    { t: "Expert Advisor (EA)", d: "An automated trading program that runs inside MetaTrader." },
    { t: "Custom indicator", d: "A user-installed chart study, distinct from the platform's built-ins." },
    { t: "Data folder", d: "The MetaTrader directory where indicators, EAs and scripts must be installed. Reached via File → Open Data Folder." },
    { t: "Slippage tolerance", d: "The maximum price deviation you will accept on a market order before it is rejected." }
  ],

  slides: [
    {
      kicker: "Module 4 · Broker choice",
      title: "The only question that matters first",
      bullets: [
        "**Can you get your money out?**",
        "Every other consideration — spreads, platform, bonuses, leverage — is worthless if withdrawals do not work.",
        "Check, in this order: **regulator register → segregated funds → compensation scheme → independent withdrawal reports**.",
        "A broker regulated by a serious authority in your jurisdiction is worth a slightly wider spread. Every time.",
        "**Search the broker's name with the word 'withdrawal' before you deposit anything.**"
      ],
      note: "Have them do the search live. It takes ninety seconds and it is the highest-value ninety seconds in the module. If a broker has a withdrawal problem, it is never a secret — it is on every forum."
    },
    {
      kicker: "Module 4 · Broker choice",
      title: "Regulation tiers, honestly",
      bullets: [
        "**Strong:** FCA (UK), ASIC (Australia), and the major EU regulators. Segregated funds, compensation schemes, leverage caps, real enforcement.",
        "**Moderate:** CySEC (Cyprus), FSCA (South Africa), FSA (Japan), and comparable national regulators.",
        "**Weak or nominal:** various offshore registrations that exist mainly to print a licence number on a website.",
        "Many brokers hold **several licences** and route clients by country — you may be onboarded to the offshore entity while reading about the UK one.",
        "**Check which entity your account is actually with**, in the client agreement, not the marketing page."
      ],
      note: "This is the trap nearly everyone falls into. The website shows the FCA licence; the signup routes you to a Seychelles entity with different protections. Show them where in the client agreement to find the actual contracting entity."
    },
    {
      kicker: "Module 4 · Execution",
      title: "Who is on the other side of your trade",
      bullets: [
        "**Dealing desk (B-book):** the broker internalises your trade. Your loss is their revenue. This is legal and disclosed, but the incentive is obvious.",
        "**Agency (A-book, STP/ECN):** your order is passed to external liquidity providers. The broker earns commission, and is indifferent to whether you win.",
        "Most brokers run **hybrid** models — profitable clients get A-booked, consistently losing clients get B-booked.",
        "Signs you are B-booked: frequent requotes, slippage that is consistently against you, spread widening precisely at your stop.",
        "**Agency accounts cost more per trade and align incentives better.** For most students that is the right trade."
      ],
      note: "Be measured here. B-booking is not automatically fraud, and a good market maker gives tighter fills on small size. The point is that the student should know the model they are on and be able to spot behaviour inconsistent with it."
    },
    {
      kicker: "Module 4 · Costs",
      title: "Compare total round-trip cost, not spread",
      bullets: [
        "**Standard account:** 1.6-pip spread, no commission → **1.6 pips** per round trip.",
        "**Raw account:** 0.2-pip spread, $7 per lot round trip → 0.2 + 0.7 = **0.9 pips** per round trip.",
        "The 'zero commission' account is nearly **twice as expensive**.",
        "Also compare: **swap markup**, **inactivity fees**, **deposit and withdrawal charges**, **currency conversion** on your deposits.",
        "**Build the comparison in a spreadsheet.** Marketing pages are designed to prevent exactly this comparison."
      ],
      note: "Do this arithmetic live. It is the moment students realise 'commission-free' is a marketing frame rather than a discount, and it transfers directly to how they should read any financial product."
    },
    {
      kicker: "Module 4 · Platforms",
      title: "MT4, MT5 and TradingView",
      bullets: [
        "**MT4** — ancient, ubiquitous, enormous library of free indicators and EAs. Still the default for most retail brokers.",
        "**MT5** — more timeframes, better backtesting, an economic calendar built in. **Not backward compatible** — MT4 indicators do not run on it.",
        "**TradingView** — far better charting and drawing tools, huge community script library, weaker as an execution platform unless your broker integrates.",
        "**Common professional setup: analyse in TradingView, execute in MetaTrader.**",
        "Pick one execution platform and learn it properly. Switching platforms mid-course wastes a session."
      ],
      note: "Ask which the student's broker actually supports before recommending anything. If the broker is MT5-only, the MT4 indicator libraries they have been browsing on social media are irrelevant to them, and it is better they learn that now."
    },
    {
      kicker: "Module 4 · Setup",
      title: "A workspace you can read in a hurry",
      bullets: [
        "**One instrument per chart window. Never two.** Overlaid pairs cause direction errors under pressure.",
        "Set a **consistent colour scheme** across every chart: bull, bear, background, grid. Consistency lets you read a chart in a glance.",
        "Turn on the **period separators** and the **ask line**. Turn off anything you do not actively use.",
        "Save your configuration as a **template** and apply it to every new chart. Save the whole layout as a **profile**.",
        "**Time on the chart is broker server time, not your local time.** Work out the offset now and write it down."
      ],
      note: "The server-time offset trips up almost every student when they start studying sessions in Module 5. Have them note it now: 'my broker's midnight is X my time.' Five seconds here saves a confused hour later."
    },
    {
      kicker: "Module 4 · Setup",
      title: "Installing indicators and EAs without guessing",
      bullets: [
        "**File → Open Data Folder → MQL4 (or MQL5) → Indicators** for indicators; **→ Experts** for EAs.",
        "Copy the `.ex4`/`.ex5` (compiled) or `.mq4`/`.mq5` (source) file in, then **restart the terminal** or right-click Navigator → Refresh.",
        "For EAs: enable **AutoTrading** in the toolbar, and tick **Allow algorithmic trading** in the EA's properties.",
        "**MT4 files do not work in MT5 and never will.** The extension is the giveaway.",
        "If it does not appear: wrong folder, wrong platform version, or you dropped it into a different MetaTrader installation than the one you have open."
      ],
      note: "That last point catches everyone with two brokers installed. Always reach the folder via File → Open Data Folder from the running terminal, never by browsing to a Program Files path you remember."
    },
    {
      kicker: "Module 4 · Troubleshooting",
      title: "The five-minute fault checklist",
      bullets: [
        "**Nothing appears in Navigator** → wrong data folder, or the terminal needs a restart.",
        "**Indicator loads but draws nothing** → wrong timeframe, wrong instrument, or its parameters need more history than is loaded. Scroll back to load bars.",
        "**EA shows a sad face** → AutoTrading is off, or algorithmic trading is disallowed in the EA properties.",
        "**EA runs but never trades** → check the Experts and Journal tabs. The reason is almost always written there in plain English.",
        "**Read the Journal tab.** Most students have never opened it, and it answers most of these questions directly."
      ],
      note: "Sabotage the setup deliberately in the lab — put a file in the wrong folder, disable AutoTrading — and make the student diagnose it. Being able to fix their own platform is the difference between losing five minutes and losing a session."
    },
    {
      kicker: "Module 4 · Traps",
      title: "Account features that quietly cost you",
      bullets: [
        "**Deposit bonuses** — come with volume requirements that force over-trading, and can lock your own funds.",
        "**Very high leverage offers** — a signal about the broker's target customer, not a benefit to you.",
        "**Copy-trading and PAMM** — you are trusting a stranger's risk management with no ability to intervene.",
        "**Inactivity fees** — silently drain a dormant account.",
        "**Islamic / swap-free accounts** — legitimate, but often carry an administration fee that replaces swap. Compare it.",
        "**Prop firm challenges** — a legitimate model for some, but the fee is revenue whether you pass or not. Never fund one from money you need."
      ],
      note: "Prop firms come up constantly with new students because of how heavily they are marketed. Be balanced: the good ones are a real route to trading larger size, but the business model is fee-driven and the pass rates are low. Read the rules on consistency and drawdown before paying anything."
    },
    {
      kicker: "Module 4 · Wrap",
      title: "Before you deposit a single unit",
      bullets: [
        "Verified the licence on the regulator's own register, and confirmed which entity you are contracting with",
        "Confirmed segregated funds and any compensation scheme",
        "Searched for independent withdrawal reports",
        "Computed total round-trip cost, not spread alone",
        "Configured and saved a template and profile, and noted the server-time offset",
        "Successfully installed one indicator and one EA, and know where to look when one fails"
      ],
      note: "Make this a literal checklist the student ticks off. Deposits made in enthusiasm at 11pm are how people end up with an offshore entity and a bonus they cannot withdraw around."
    }
  ],

  practical: {
    title: "Lab 4 — Broker due diligence and workspace build",
    time: "60 min",
    intro: "Two deliverables: a broker comparison the student can defend, and a saved platform configuration they will use for every remaining module. This is the last session before charts, so the workspace must be finished today.",
    setup: [
      "MT4 or MT5 installed, with the demo account logged in",
      "TradingView open in a browser",
      "The regulator register for the student's jurisdiction",
      "A blank spreadsheet named **Broker Comparison**",
      "One free custom indicator downloaded and ready to install (any simple one — it is the process being taught, not the tool)"
    ],
    steps: [
      { h: "Shortlist three brokers", d: "Pick three the student is genuinely considering, including at least one they saw advertised on social media. For each, record: brand name, the exact legal entity they would be contracting with, the regulator, and the licence number." },
      { h: "Verify each on the regulator's register", d: "Search each licence number on the regulator's own site. Record: is it active, does the entity name match, is it authorised for the right activity, and are there published warnings or enforcement actions. Note if the entity you would be signing with is not the one advertised." },
      { h: "Compute true round-trip cost", d: "For each broker, find the EUR/USD spread and the commission for the account type they would open. Compute total cost per round trip in pips, then in dollars at 0.10 lots. Rank the three. The ranking often reverses the marketing." },
      { h: "Check the exit path", d: "For each, record withdrawal methods, stated processing time, fees, and any minimum. Then search '[broker name] withdrawal' and read the first page of independent results. Write a one-line verdict per broker." },
      { h: "Build the chart template", d: "Configure one chart exactly as it will be used all course: colour scheme, grid off, period separators on, ask line on, one instrument. Save it as a template named **Course**. Apply it to four other charts to confirm it works." },
      { h: "Save a profile and note the offset", d: "Arrange four charts — EUR/USD on H4, H1, M15 and one other instrument — and save the layout as a profile. Then compare a candle's timestamp with the student's local clock and write the server-time offset at the top of the spreadsheet." },
      { h: "Install an indicator, then break it", d: "Install the downloaded indicator via File → Open Data Folder, restart, and confirm it appears and draws. Then **you** move the file to the wrong folder while the student is not looking, and have them diagnose and fix it using the checklist. Repeat with AutoTrading disabled." },
      { h: "Mirror the setup in TradingView", d: "Recreate the same colour scheme and the same four-chart layout in TradingView and save it. The student should be able to move between the two without re-reading the chart from scratch." }
    ],
    deliverable: "A **Broker Comparison** spreadsheet covering three brokers on entity, regulator verification, true round-trip cost in pips and dollars, and withdrawal verdict — with a written recommendation and justification. Plus a saved MetaTrader template and profile, a matching TradingView layout, and a screenshot of a successfully installed custom indicator.",
    rubric: [
      { c: "Entity awareness", d: "Identified the actual contracting entity for each broker, and noticed where it differed from the brand or the advertised regulator." },
      { c: "Independent verification", d: "Searched the regulator's own register rather than the broker's licence page, and checked for warnings as well as listing." },
      { c: "Cost analysis", d: "Computed total round-trip cost including commission, and can explain why the cheapest headline spread was not the cheapest account." },
      { c: "Withdrawal diligence", d: "Looked for independent evidence about withdrawals and formed a defensible verdict rather than repeating marketing copy." },
      { c: "Workspace discipline", d: "Template and profile save and reload correctly. All charts are visually identical. Server-time offset is recorded." },
      { c: "Self-sufficiency", d: "Diagnosed both sabotaged faults using the checklist, without being told what was changed." }
    ],
    pitfalls: [
      "Comparing spreads alone and declaring the standard account cheapest. Force the full round-trip calculation in dollars.",
      "Accepting the broker's own 'regulated by' badge as verification. Only the regulator's register counts.",
      "Missing that the signup entity differs from the advertised one. Have them open the actual client agreement, not the homepage footer.",
      "Building a chart configuration and never saving it as a template, then rebuilding it every session for the rest of the course.",
      "Assuming chart time is local time. Check the offset explicitly — it will otherwise cause confusion for the whole of Module 5."
    ]
  },

  homework: [
    "Complete the broker recommendation with a written paragraph justifying the choice on regulation, cost and withdrawals — in that order.",
    "Install one more custom indicator unaided and screenshot it working.",
    "Locate and read the section of your chosen broker's client agreement covering negative balance protection and stop-out level."
  ],

  quiz: [
    {
      q: "Broker A offers a 1.6-pip EUR/USD spread with no commission. Broker B offers 0.2 pips plus $7 per lot round turn. Which is cheaper per round trip?",
      options: [
        "Broker A, because there is no commission",
        "Broker B — 0.2 pips plus 0.7 pips of commission equals 0.9 pips total",
        "They are identical",
        "It cannot be compared"
      ],
      a: 1,
      why: "$7 per standard lot round turn equals 0.7 pips at $10 per pip, so Broker B's total is 0.9 pips against Broker A's 1.6. The 'commission-free' account is nearly twice as expensive. Always convert commission into pips and compare the total — headline spread alone is a marketing figure."
    },
    {
      q: "What is the most important thing to establish about a broker before depositing?",
      options: [
        "Whether they offer high leverage",
        "Whether the spread is the lowest available",
        "Whether they are genuinely regulated, hold segregated funds, and have a clean withdrawal record",
        "Whether they offer a deposit bonus"
      ],
      a: 2,
      why: "Every other feature is worthless if you cannot withdraw. Verify the licence on the regulator's own register, confirm which legal entity you are contracting with, check segregated funds and any compensation scheme, and search for independent withdrawal reports. High leverage and bonuses are signals about the broker's target customer, not benefits."
    },
    {
      q: "Why does a dealing-desk (B-book) broker have a conflict of interest?",
      options: [
        "They charge higher commission",
        "They take the other side of your trade internally, so your losses are their revenue",
        "They are always unregulated",
        "They cannot offer stop losses"
      ],
      a: 1,
      why: "In a B-book model the broker internalises the trade rather than hedging it externally, so client losses become broker revenue. This is legal and disclosed, and a good market maker can give excellent fills on small size — but the incentive is structurally misaligned. Agency execution costs more per trade and removes that conflict."
    },
    {
      q: "You copied an MT4 indicator file into MT5 and it does not appear. Why?",
      options: [
        "The file is corrupt",
        "MT5 requires a paid licence for custom indicators",
        "MT4 and MT5 use different, incompatible formats — an .ex4 will never run on MT5",
        "You need to restart the computer"
      ],
      a: 2,
      why: "MT5 is not backward compatible with MT4. An `.ex4` or `.mq4` file will never load in MT5 regardless of which folder it is in; it needs an `.ex5`/`.mq5` version. The extension tells you immediately. This is worth checking before spending an hour on folder paths."
    },
    {
      q: "A broker offers a 100% deposit bonus. What is the realistic catch?",
      options: [
        "There is no catch — it is genuinely free capital",
        "Volume requirements that force over-trading, and terms that can lock your own deposit until they are met",
        "The bonus is taxed at a higher rate",
        "You must trade only exotic pairs"
      ],
      a: 1,
      why: "Bonuses are tied to trading-volume conditions that typically require far more turnover than a sensible strategy would generate, and the terms often restrict withdrawal of your own funds until those conditions are met. The bonus changes your behaviour, which is exactly what it is designed to do."
    },
    {
      q: "Your EA is attached to the chart but shows a sad face and never trades. What do you check first?",
      options: [
        "Reinstall MetaTrader",
        "AutoTrading enabled in the toolbar, and 'allow algorithmic trading' in the EA's properties — then read the Journal tab",
        "Change the broker",
        "Switch to a different timeframe"
      ],
      a: 1,
      why: "The sad face means algorithmic trading is disabled — either globally via the AutoTrading toolbar button or in the EA's own properties dialog. Once that is fixed, the Experts and Journal tabs state in plain English why an EA is or is not trading. Most students never open the Journal, and it answers the majority of platform faults directly."
    }
  ]
}

]);
