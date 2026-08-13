/* N1 Forex Academy — Module 3. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

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
      illus: 'accountPanel',
      illusCap: "The live account panel. Equity is the number that matters, not balance.",
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
      illus: 'marginLadder',
      illusCap: "Margin level is the figure the broker acts on. You will watch this fall for real in Drill 2.",
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
}

]);
