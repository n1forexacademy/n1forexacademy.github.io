/* N1 Forex Academy — Module 10. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 10 ============================= */
{
  id: 10,
  title: "Risk Management and Position Sizing",
  tagline: "The most important module in this course. Everything before it was preparation for this.",
  level: "Advanced",
  duration: "150 min",

  objectives: [
    "Work out the right position size every single time, from your account, your risk and your stop",
    "Put stops where the trade idea is proven wrong, rather than at a convenient number",
    "Work out whether a set of trades actually makes money, and why win rate alone cannot tell you",
    "Understand what a losing streak does to an account, and why staying in beats chasing returns",
    "Write a complete risk policy of your own, and commit to it"
  ],

  misconceptions: [
    "**\"Risk management limits my profits.\"** It limits your *losses*, which is what keeps you in the game long enough for an edge to appear. A trader who cannot lose twenty times in a row and continue does not have a strategy — they have a bet.",
    "**\"I'll increase size when I'm confident.\"** Confidence is uncorrelated with outcome, and generally peaks right before the worst trades. Size from the stop distance, never from the feeling.",
    "**\"A 50% loss just needs a 50% gain to recover.\"** It needs 100%. Losses and gains are not symmetric, and this asymmetry is the whole reason to cap risk.",
    "**\"Martingale works because price always comes back.\"** It works until the one time it does not, and that one time takes everything. Doubling down converts many small wins into a single total loss."
  ],

  glossary: [
    { t: "Risk per trade", d: "The maximum you will lose if the stop is hit, expressed as a percentage of account equity." },
    { t: "R", d: "One unit of risk. A trade that makes three times what it risked made 3R. The universal unit for comparing trades." },
    { t: "Position size", d: "The lot size that makes your stop distance equal your intended risk. An output, never an input." },
    { t: "Expectancy", d: "Average profit or loss per trade in R. Positive expectancy is the definition of an edge." },
    { t: "Drawdown", d: "The decline from an equity peak to a trough. The measure that determines whether a trader survives." },
    { t: "Risk of ruin", d: "The probability of losing enough capital to be unable to continue." },
    { t: "Risk:reward ratio", d: "Planned reward divided by planned risk, measured before entry." },
    { t: "Break-even win rate", d: "The win rate at which a given R:R produces zero expectancy." },
    { t: "Correlation risk", d: "Aggregate exposure across positions that move together." },
    { t: "Martingale", d: "Increasing size after losses to recover. Mathematically guaranteed to fail given a finite account." },
    { t: "Kelly criterion", d: "A formula for theoretically optimal sizing. Far too aggressive in practice; traders use small fractions of it." }
  ],

  slides: [
    {
      kicker: "Module 10 · Foundation",
      title: "The order of operations",
      illus: 'riskBlock',
      illusCap: "The risk guard on the academy terminal. Early on it blocks you and shows the correct size.",
      bullets: [
        "**Wrong:** decide a lot size, place a trade, put a stop somewhere convenient.",
        "**Right:** find the level → **place the stop where the idea is wrong** → decide the risk percentage → **calculate the lot size**.",
        "**Position size is an output, not a choice.** It falls out of the other three decisions.",
        "This one reordering removes the single largest cause of blown accounts.",
        "**If you ever find yourself choosing a lot size, you have skipped a step.**"
      ],
      note: "Write both orderings on the board side by side and leave them up for the whole session. Every subsequent slide is an elaboration of this one. If the student takes nothing else from the course, take this."
    },
    {
      kicker: "Module 10 · The formula",
      title: "The calculation, in full",
      illus: 'orderTicket',
      illusCap: "Set the stop first, then press 'Size it' — but only after working the number out yourself.",
      bullets: [
        "**Lots = (Equity × Risk%) ÷ (Stop in pips × Pip value per lot)**",
        "Example: $5,000 account, 1% risk, EUR/USD, 35-pip stop.",
        "Risk amount = 5000 × 0.01 = **$50**.",
        "Denominator = 35 × $10 = **$350**.",
        "**Lots = 50 ÷ 350 = 0.14.**",
        "Same account, gold, 400-pip stop, pip value $1 per 0.01 lot — **the lot size will be completely different for identical risk.**"
      ],
      note: "Have the student compute this five times with different inputs before moving on. It must be automatic. If they need to think about it in a live market they will skip it, and skipping it is how accounts end."
    },
    {
      kicker: "Module 10 · Stops",
      title: "Where the stop actually goes",
      bullets: [
        "**The stop goes where the trade idea is proven wrong.** Not at a round number, not at a fixed pip distance, not at 'what I can afford'.",
        "For a long at support: **below the support zone**, beyond the likely sweep distance you measured in Lab 7.",
        "Cross-check with **ATR**: is the distance sensible for current volatility?",
        "**If the correct stop makes the position uncomfortably small, the position is correct and your expectations are wrong.**",
        "**Never move a stop further away.** Widening a stop to avoid a loss is how a planned 1% becomes an unplanned 8%."
      ],
      note: "That last bullet deserves emphasis. Almost every catastrophic retail loss involves a stop that was moved. Ask the student to commit out loud that they will never widen a stop, and write it as rule one of their risk policy."
    },
    {
      kicker: "Module 10 · Sizing",
      title: "How much to risk per trade",
      bullets: [
        "**Beginner: 0.5% or less.** Learning costs money; make the tuition affordable.",
        "**Experienced with a tested edge: 1–2%.**",
        "**Above 2%: you are relying on being right rather than on being sized correctly.**",
        "At 1%, ten consecutive losses cost about **9.6%** — uncomfortable and completely survivable.",
        "At 10%, ten consecutive losses cost about **65%**, needing a **186% gain** to recover. That account is finished.",
        "**Ten losses in a row is normal. Plan for it or be ended by it.**"
      ],
      visual: '<svg class="fig" viewBox="0 0 580 200" role="img" aria-label="Equity remaining after ten consecutive losses at different risk levels"><line x1="70" y1="20" x2="70" y2="170" class="axis"/><line x1="70" y1="170" x2="560" y2="170" class="axis"/><text class="lbl-sm" x="62" y="24" text-anchor="end">100%</text><text class="lbl-sm" x="62" y="172" text-anchor="end">0%</text>' +
        '<rect x="100" y="34" width="60" height="136" class="up" opacity=".8"/><text class="lbl" x="130" y="186" text-anchor="middle">1%</text><text class="lbl-sm" x="130" y="28" text-anchor="middle">90.4%</text>' +
        '<rect x="200" y="47" width="60" height="123" class="up" opacity=".65"/><text class="lbl" x="230" y="186" text-anchor="middle">2%</text><text class="lbl-sm" x="230" y="41" text-anchor="middle">81.7%</text>' +
        '<rect x="300" y="80" width="60" height="90" fill="var(--warn)" opacity=".8"/><text class="lbl" x="330" y="186" text-anchor="middle">5%</text><text class="lbl-sm" x="330" y="74" text-anchor="middle">59.9%</text>' +
        '<rect x="400" y="118" width="60" height="52" class="dn" opacity=".75"/><text class="lbl" x="430" y="186" text-anchor="middle">10%</text><text class="lbl-sm" x="430" y="112" text-anchor="middle">34.9%</text>' +
        '<rect x="500" y="154" width="60" height="16" class="dn" opacity=".9"/><text class="lbl" x="530" y="186" text-anchor="middle">20%</text><text class="lbl-sm" x="530" y="148" text-anchor="middle">10.7%</text>' +
        '<text class="lbl" x="315" y="14" text-anchor="middle">equity remaining after 10 consecutive losses</text></svg>',
      note: "Do not just show this — build it live in a spreadsheet, multiplying by 0.99 ten times and then by 0.80 ten times. The visceral difference between watching it and being told it is enormous, and it is why the Module 3 blow-up lab exists."
    },
    {
      kicker: "Module 10 · Asymmetry",
      title: "Losses and gains are not symmetric",
      bullets: [
        "Lose **10%** → need **11.1%** to recover.",
        "Lose **25%** → need **33.3%**.",
        "Lose **50%** → need **100%**.",
        "Lose **75%** → need **300%**.",
        "**Every percentage point of drawdown is more expensive than the last.**",
        "**This is why capital preservation dominates return chasing. The maths is not a preference.**"
      ],
      note: "Have the student compute the recovery percentages themselves rather than reading them. Working out that 50% requires 100% back is a small shock that lands much harder than being shown the table."
    },
    {
      kicker: "Module 10 · Expectancy",
      title: "Expectancy — the only measure that matters",
      bullets: [
        "**Expectancy = (Win% × Avg win in R) − (Loss% × Avg loss in R)**",
        "Example: 40% win rate, average win 2.5R, average loss 1R → (0.4 × 2.5) − (0.6 × 1) = **+0.4R per trade**.",
        "**A 40% win rate can be highly profitable. A 70% win rate can lose money.** Win rate alone tells you nothing.",
        "**Costs must be inside the calculation.** An edge of 0.1R disappears entirely once spread is included.",
        "**Measure in R, not in currency.** R is comparable across instruments, account sizes and time."
      ],
      note: "Students obsess over win rate because it is the number sold to them by signal providers. Reframing everything in R and expectancy is the antidote, and it makes the Module 12 journal analysis meaningful."
    },
    {
      kicker: "Module 10 · Expectancy",
      title: "Risk:reward and the break-even win rate",
      bullets: [
        "**1:1** needs a **50%** win rate to break even. **1:2** needs **33%**. **1:3** needs **25%**.",
        "**2:1 against you** — risking 2 to make 1 — needs **67%**, before costs.",
        "Higher R:R means a lower required win rate, but **also fewer winners and longer losing streaks**. It is psychologically harder.",
        "**Do not force a target to achieve a ratio.** A 1:3 target that price never reaches is a 0% win rate.",
        "**Set the target where price is realistically likely to go, then check whether the resulting ratio is acceptable. If not, skip the trade.**"
      ],
      note: "The last two bullets correct a widespread bad habit — students place targets at 3R because they were told to, regardless of whether any structure exists there. The target should come from the chart and the ADR, and the ratio is then a filter, not a goal."
    },
    {
      kicker: "Module 10 · Portfolio",
      title: "Total risk, not just per-trade risk",
      bullets: [
        "**Per-trade risk** is only half the policy. You also need **maximum total open risk**.",
        "Suggested: **no more than 3% at risk across all open positions**.",
        "**Correlated positions count as one.** Long EUR/USD and long GBP/USD at 1% each is a 2% bet on the dollar, not two 1% trades.",
        "**Daily stop:** after losing 3% in a day, stop trading. The day is over.",
        "**Weekly and monthly stops** too. A bad week should not become a bad quarter.",
        "**These limits protect you from yourself on the days when judgement is worst.**"
      ],
      note: "The daily stop is the rule students break most often, because the urge to recover a loss is strongest immediately after taking one. Have them write it down and, ideally, physically close the platform when it triggers."
    },
    {
      kicker: "Module 10 · Danger",
      title: "The strategies that guarantee ruin",
      bullets: [
        "**Martingale** — double after a loss. Wins consistently until one sequence takes everything. The maths is not ambiguous.",
        "**Grid without a stop** — adding positions as price moves against you. Same failure mode, dressed differently.",
        "**Averaging down** — adding to a loser. Turns a small planned loss into an enormous unplanned one.",
        "**No stop loss** — 'I'll close it manually.' You will not. Under pressure, you will hope.",
        "**Revenge trading** — sizing up to recover a loss. The single fastest way to convert a bad day into a finished account.",
        "**Every one of these feels like it works right up until it ends you.**"
      ],
      note: "Many EAs marketed to beginners are martingale or grid systems with impressive-looking equity curves — because the curve looks perfect until the day it goes vertical downward. If the student is drawn to one, have them look at its maximum drawdown and ask what happens on the sequence that has not occurred yet."
    },
    {
      kicker: "Module 10 · Policy",
      title: "Your written risk policy",
      bullets: [
        "**Risk per trade:** a fixed percentage. Written down. Never varied by confidence.",
        "**Maximum open risk:** total across all positions, with correlated positions counted once.",
        "**Daily / weekly stop:** specific numbers at which you stop trading.",
        "**Stop placement rule:** structural, verified against ATR, never widened.",
        "**Minimum acceptable R:R:** below which you skip the trade.",
        "**News policy** from Module 9.",
        "**Sign it and date it. A policy you have not committed to is a preference.**"
      ],
      note: "Have the student physically write and sign this in the lab. It sounds theatrical and it works — a signed document is much harder to quietly ignore at 2am than a vague intention."
    },
    {
      kicker: "Module 10 · Wrap",
      title: "Why this module is the course",
      bullets: [
        "Position size as an output of stop distance and risk percentage",
        "Stops at structure, checked against volatility, never widened",
        "Expectancy in R — and why win rate on its own is meaningless",
        "The arithmetic of drawdown and why survival dominates returns",
        "Portfolio-level limits and daily stops",
        "A signed, specific risk policy"
      ],
      note: "Close by saying it plainly: a mediocre strategy with excellent risk management survives long enough to improve. An excellent strategy with poor risk management does not survive at all. The order of importance is not what most beginners assume."
    }
  ],

  practical: {
    title: "Lab 10 — Build the risk engine and write the policy",
    time: "90 min",
    intro: "The longest lab in the course, and the most important. The student extends their FX Calculator into a full position-sizing tool, models drawdown themselves, computes expectancy on real trade data, and writes and signs a risk policy.",
    setup: [
      "The **FX Calculator** from Lab 2",
      "The **Level Map** from Lab 7 and the **ATR** figures from Lab 8",
      "A spreadsheet named **Risk Engine**",
      "Any existing demo trade history — even a handful of trades — for the expectancy work",
      "A printed blank risk policy template, and a pen"
    ],
    steps: [
      { h: "Build the sizing calculator", d: "Extend the FX Calculator with inputs for equity, risk percentage and stop distance in pips, and an output of lot size. It must handle USD-quoted pairs, JPY pairs and gold correctly. Test it against three worked examples computed by hand first — the hand calculation is what proves the formula, not the spreadsheet." },
      { h: "Size ten real setups", d: "Using the Level Map, identify ten historical setups. For each: mark where the stop belongs structurally, measure that distance in pips, cross-check against ATR, and compute the lot size at 1% risk. Note how widely the lot sizes vary for identical risk." },
      { h: "Model the drawdown curve", d: "In a fresh sheet, model 20 consecutive losses at 0.5%, 1%, 2%, 5%, 10% and 20% risk. Chart the six equity curves on one axis. Then add a column computing the gain required to recover from each. Do not copy the numbers from the slides — build it." },
      { h: "Simulate a realistic sequence", d: "Model 100 trades at a 45% win rate with 2R winners and 1R losers, at 1% risk. Use a random-number column so it can be recalculated. Recalculate ten times and record the worst drawdown seen in each run. The student discovers that even a positive-expectancy system produces alarming stretches." },
      { h: "Compute expectancy on real trades", d: "Take the student's existing demo history. Convert every trade to R, then compute win rate, average win in R, average loss in R, and expectancy. Include costs. If expectancy is negative — which is normal at this stage — identify which trades did the damage." },
      { h: "Find the biggest loss and diagnose it", d: "Locate the single largest loss in the history. Compute what it should have been at correct sizing with a structural stop. The gap between actual and correct is almost always the difference between the account being up and down. Write the number down." },
      { h: "Build the R:R filter", d: "For the ten sized setups, mark a realistic target based on structure and ADR — not on a desired ratio. Compute the resulting R:R for each. Then apply a minimum threshold and count how many setups survive. This is what a filter actually does to trade frequency." },
      { h: "Write and sign the policy", d: "Complete the template: risk per trade, maximum open risk, correlation rule, daily stop, weekly stop, stop placement rule, never-widen commitment, minimum R:R, and news policy. Every entry must be a specific number or a specific action. Then sign and date it, and photograph it." }
    ],
    figure: '<figure><svg class="fig" viewBox="0 0 580 210" role="img" aria-label="Equity curves for twenty consecutive losses at different risk percentages"><line x1="55" y1="16" x2="55" y2="172" class="axis"/><line x1="55" y1="172" x2="560" y2="172" class="axis"/><text class="lbl-sm" x="48" y="20" text-anchor="end">100%</text><text class="lbl-sm" x="48" y="176" text-anchor="end">0%</text><text class="lbl-sm" x="300" y="196" text-anchor="middle">consecutive losses →</text>' +
      '<polyline fill="none" stroke="var(--bull)" stroke-width="2.5" points="55,16 80,20 105,24 130,28 155,32 180,36 205,40 230,44 255,47 280,51 305,54 330,58 355,61 380,65 405,68 430,71 455,74 480,77 505,80 530,83 555,86"/><text class="lbl-sm" x="558" y="84" fill="var(--bull)">1%</text>' +
      '<polyline fill="none" stroke="var(--accent)" stroke-width="2.5" points="55,16 80,23 105,30 130,36 155,42 180,48 205,54 230,59 255,64 280,69 305,74 330,78 355,83 380,87 405,91 430,95 455,98 480,102 505,105 530,109 555,112"/><text class="lbl-sm" x="558" y="110" fill="var(--accent)">2%</text>' +
      '<polyline fill="none" stroke="var(--warn)" stroke-width="2.5" points="55,16 80,32 105,47 130,60 155,72 180,83 205,93 230,102 255,110 280,117 305,124 330,130 355,136 380,141 405,145 430,150 455,153 480,157 505,160 530,163 555,166"/><text class="lbl-sm" x="558" y="164" fill="var(--warn)">5%</text>' +
      '<polyline fill="none" stroke="var(--bear)" stroke-width="2.5" points="55,16 80,45 105,71 130,94 155,114 180,132 205,148 230,155 255,161 280,165 305,167 330,169 355,170 380,171 405,171 430,172 455,172 480,172 505,172 530,172 555,172"/><text class="lbl-sm" x="558" y="146" fill="var(--bear)">10%</text></svg><figcaption>The student builds this themselves. The point is not the shape — it is that the 1% line is still recoverable after twenty losses and the 10% line is not.</figcaption></figure>',
    deliverable: "A **Risk Engine** workbook containing: a verified position-size calculator handling three instrument types, ten sized historical setups with structural stops and ATR cross-checks, a built drawdown model with recovery requirements, a 100-trade Monte Carlo sheet with worst-drawdown results across ten runs, an expectancy calculation on real trade history including costs, a diagnosis of the largest historical loss, and an R:R filter applied to the ten setups. Plus a signed, dated risk policy.",
    rubric: [
      { c: "Calculator correctness", d: "Produces correct lot sizes for USD-quoted, JPY and gold instruments, verified against hand calculations rather than assumed." },
      { c: "Stop discipline", d: "All ten stops placed at structural levels beyond likely sweep distance, cross-checked against ATR. None placed at round pip numbers." },
      { c: "Drawdown comprehension", d: "Built the model independently and can state, unprompted, the recovery requirement from a 50% loss." },
      { c: "Expectancy literacy", d: "Computed expectancy in R including costs, and can explain why a 40% win rate can beat a 70% one." },
      { c: "Honest diagnosis", d: "Identified the largest historical loss, computed what correct sizing would have made it, and named the specific rule that was missing." },
      { c: "Policy specificity", d: "Every policy entry is a number or a concrete action. No entry says 'be careful' or 'as appropriate'. Signed and dated." }
    ],
    pitfalls: [
      "Building the calculator without hand-checking it. A spreadsheet error here propagates into every trade for the rest of their career — verify on paper first.",
      "Placing stops at a fixed pip distance and then finding structure to justify it. The stop comes from the structure, in that order.",
      "Choosing targets to hit a desired R:R rather than reading them from the chart. Watch for targets floating in open space.",
      "Computing expectancy without costs and concluding an edge exists. Reject any expectancy figure that omits spread.",
      "Treating the Monte Carlo sheet as a prediction. It illustrates variance, not the future.",
      "Writing the policy without signing it. The commitment step is not decoration — make it happen."
    ]
  },

  homework: [
    "Apply the position-size calculator to every demo trade for the next week. No trade may be entered without a computed lot size.",
    "Recalculate the Monte Carlo sheet twenty more times and record the distribution of worst drawdowns.",
    "Pin the signed risk policy where you can see it while trading, and log any occasion you were tempted to break it."
  ],

  quiz: [
    {
      q: "Account $8,000, risking 1%, GBP/USD, structural stop 45 pips away. What lot size?",
      options: ["0.18 lots", "1.78 lots", "0.045 lots", "0.80 lots"],
      a: 0,
      why: "Risk amount = 8000 × 0.01 = $80. Denominator = 45 pips × $10 per pip per standard lot = $450. Lots = 80 ÷ 450 = 0.178, rounded to 0.18. Note the order: the stop distance came from the chart first, and the lot size fell out of it. Choosing 0.18 lots and then finding somewhere to put a stop is the reversed, dangerous version."
    },
    {
      q: "A trader wins 70% of trades but is losing money overall. How?",
      options: [
        "Impossible — a 70% win rate is always profitable",
        "Their losses are much larger than their wins; expectancy depends on the size of outcomes, not just their frequency",
        "The broker is manipulating results",
        "They are trading the wrong pairs"
      ],
      a: 1,
      why: "Expectancy = (win% × avg win) − (loss% × avg loss). At a 70% win rate with 0.5R wins and 2R losses, expectancy is (0.7 × 0.5) − (0.3 × 2) = −0.25R per trade. This is the classic profile of someone who takes profits quickly and lets losers run — high win rate, negative expectancy. Win rate in isolation carries no information about profitability."
    },
    {
      q: "You lose 50% of your account. What return is needed to get back to the starting balance?",
      options: ["50%", "75%", "100%", "150%"],
      a: 2,
      why: "Halving the account means the remaining capital must double. This asymmetry is why capital preservation matters more than return chasing — each additional percentage point of drawdown is more expensive to recover than the last, and by 75% down you need 300%. The maths is the argument for small risk per trade, not caution as a personality trait."
    },
    {
      q: "Price moves against your position toward your stop. What should you do?",
      options: [
        "Move the stop further away to give the trade room",
        "Add to the position to improve your average price",
        "Nothing — the stop was placed where the idea is wrong, and that has not changed",
        "Close half and move the stop"
      ],
      a: 2,
      why: "The stop was placed at the level that invalidates the idea, decided when you were objective. Moving it converts a planned, sized loss into an unplanned, unsized one, and adding to the position doubles exposure to an idea the market is currently disagreeing with. Almost every catastrophic retail loss involves one of the first two options."
    },
    {
      q: "You are long EUR/USD, long AUD/USD and short USD/CHF, each risking 1%. What is your true exposure?",
      options: [
        "1%, since they are different instruments",
        "3%, spread across three markets",
        "Close to 3% on a single view — all three profit from dollar weakness",
        "0%, because they hedge"
      ],
      a: 2,
      why: "All three are dollar-negative expressions: two have USD as the quote currency and the third is short USD outright. A dollar rally hurts all three simultaneously. This is why a portfolio-level risk limit exists and why correlated positions must be counted once — it is the standard route by which a disciplined 1%-per-trade trader takes a 3% hit in an hour."
    },
    {
      q: "Why does a martingale system eventually fail?",
      options: [
        "Brokers ban it",
        "Because doubling after each loss requires exponentially growing capital, and any finite account eventually meets a losing sequence it cannot fund",
        "Because spreads are too wide",
        "It does not fail if the account is large enough"
      ],
      a: 1,
      why: "Position size doubles with each loss, so funding an n-loss streak needs roughly 2^n units of capital. Every account is finite, and long streaks are certain over enough trades. Martingale produces a long run of small wins followed by one total loss — which is exactly why its equity curve looks flawless right up until the end."
    }
  ]
}

]);
