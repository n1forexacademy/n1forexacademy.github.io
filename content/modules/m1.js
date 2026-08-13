/* N1 Forex Academy — Module 1. Loaded on demand; see assets/loader.js. */
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
      illus: 'marketWatch',
      illusCap: "Market Watch on the academy terminal. Note the spread column — and that gold is 18x EUR/USD.",
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
}

]);
