/* N1 Forex Academy — Module 4. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

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
