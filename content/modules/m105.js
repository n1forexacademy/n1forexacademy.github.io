/* N1 Forex Academy — Module 105. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 105 ============================= */
{
  id: 105, track: 'equities',
  title: "Earnings, Catalysts and Corporate Actions",
  tagline: "The scheduled and unscheduled events that move a share far more than any chart pattern.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain the earnings cycle, and why a good result often sends a share down",
    "Know which company events create gap risk you can see coming",
    "Say what each corporate action actually does to the shares you hold",
    "Follow an events policy that stops you being caught leveraged into a known date",
    "Explain why what management says about next year outweighs what they just reported"
  ],

  misconceptions: [
    "**\"Good earnings mean the share rises.\"** The market priced expectations in advance. A strong result that misses expectations sells off — the identical mechanism as economic data in Module 9.",
    "**\"A stock split makes the shares cheaper.\"** You own more pieces of exactly the same company. Nothing about the value of your holding changed.",
    "**\"Buybacks are always good for shareholders.\"** They reduce the share count and flatter EPS. Whether they were a good use of cash depends entirely on the price paid.",
    "**\"I can trade the earnings announcement.\"** The move happens in seconds, often gaps overnight, and reverses regularly. Retail execution is at its worst exactly then."
  ],

  glossary: [
    { t: "Earnings report", d: "The scheduled publication of results, quarterly in some markets and half-yearly in others." },
    { t: "Consensus estimate", d: "The average of analysts' forecasts. What price is already positioned for." },
    { t: "Beat / miss", d: "Reporting above or below consensus." },
    { t: "Guidance", d: "Management's own forecast for coming periods. Frequently moves the price more than the results themselves." },
    { t: "Ex-dividend date", d: "The date from which buying no longer entitles you to the declared dividend." },
    { t: "Stock split", d: "Dividing existing shares into more units. Purely cosmetic in value terms." },
    { t: "Share buyback", d: "The company purchasing its own shares, reducing the count outstanding." },
    { t: "Rights issue", d: "Existing holders offered new shares, usually at a discount. Dilutive if you do not participate." },
    { t: "Merger and acquisition", d: "One company buying another. The target usually jumps toward the offer price." },
    { t: "Profit warning", d: "An unscheduled announcement that results will fall short. Typically produces the largest single-day falls." }
  ],

  slides: [
    {
      kicker: "Module 105 · The cycle",
      title: "Earnings are a scheduled shock",
      bullets: [
        "Listed companies report on a **known calendar** — quarterly or half-yearly.",
        "You therefore know **in advance** when the largest scheduled volatility of the period will occur.",
        "**That is a gift.** Economic releases in forex were the same idea; here it is company-specific.",
        "Typical earnings-day moves of **5–15%** are ordinary. Larger is common.",
        "**And it usually gaps**, because most companies report outside trading hours."
      ],
      note: "Emphasise the overnight gap. In forex, news hit a live market you could at least try to exit. Here the market is closed, the stock reopens at a new price, and no stop protects you through it."
    },
    {
      kicker: "Module 105 · The reaction",
      title: "Why a strong result can sell off",
      bullets: [
        "Price already reflects the **consensus estimate**. That is what a forecast means.",
        "The move comes from the **surprise**, and from **guidance** about what happens next.",
        "**A company can beat on both revenue and profit and still fall sharply** on weak guidance.",
        "This is precisely 'buy the rumour, sell the fact' from Module 9, applied to a single business.",
        "**Guidance usually matters more than the reported numbers** — the market prices the future, not the past quarter."
      ],
      note: "The link back to Module 9 is worth making explicit. Students who understood why a strong inflation print can sell a currency will grasp this immediately; the mechanism is identical."
    },
    {
      kicker: "Module 105 · Corporate actions",
      title: "Things that change your holding",
      bullets: [
        "**Stock split:** more shares, proportionally lower price, **same total value**. Cosmetic.",
        "**Buyback:** fewer shares outstanding, so each remaining share is a larger slice. Good or bad depending on the price paid.",
        "**Rights issue:** you are offered new shares, usually at a discount. **Ignore it and you are diluted.**",
        "**Dividend:** covered in Module 104 — price adjusts on the ex-date.",
        "**Takeover:** the target typically jumps toward the offer price and then stops behaving like a normal share."
      ],
      note: "Rights issues catch passive holders. A student who ignores the correspondence is diluted, and the price drop looks inexplicable if they do not know why. Worth a specific example."
    },
    {
      kicker: "Module 105 · The unscheduled",
      title: "The events with no date attached",
      bullets: [
        "**Profit warnings** — unscheduled, and typically the largest single-day falls a share ever sees.",
        "**Regulatory action, litigation, fraud allegations** — can be existential rather than merely bad.",
        "**Key personnel** — the departure of a founder or chief executive moves some companies violently.",
        "**Sector and macro news** — a rate decision or oil price move can hit an entire industry at once.",
        "**You cannot schedule around these. You can only be sized so that they are survivable.**"
      ],
      note: "This is where position sizing earns its keep. The forex track taught sizing against a measurable stop; here the honest position is that some risks cannot be stopped out of at all, so size is the only control."
    },
    {
      kicker: "Module 105 · Policy",
      title: "Your events policy",
      bullets: [
        "**Know the earnings date before you open a position.** Every time. It takes ten seconds to check.",
        "**No leverage held through a scheduled earnings date.** The rule from Module 103, restated because it matters.",
        "**Reduce or close outright positions into earnings** if the potential gap exceeds your risk tolerance.",
        "**Or accept the gap deliberately** — a legitimate choice, if the position is small enough that the worst case is survivable.",
        "**What is not acceptable is not knowing the date.** That is negligence, not risk-taking."
      ],
      note: "Note the difference in tone from the forex news policy. There, avoidance was recommended for everyone. Here, holding through earnings on a properly sized unleveraged position is defensible. The non-negotiable part is knowing."
    },
    {
      kicker: "Module 105 · Wrap",
      title: "What you now anticipate",
      bullets: [
        "The earnings calendar as scheduled, foreseeable volatility",
        "Why the reaction follows the surprise and the guidance, not the headline result",
        "What each corporate action does to your holding",
        "Which risks have no date attached, and why size is the only defence against them",
        "A written events policy with one non-negotiable: always know the date"
      ],
      note: "Have each student check the next earnings date for the companies from Lab 101 and write them in a calendar. Building the habit now is worth more than the theory."
    }
  ],

  practical: {
    title: "Lab 105 — Study an earnings reaction",
    time: "60 min",
    intro: "The student examines a real earnings event after the fact, measures the gap, and works out what would have happened to positions of different sizes and leverage. No trading.",
    setup: [
      "A market data site showing historical earnings dates and results",
      "Three companies with recent earnings, at least one that fell despite beating expectations",
      "A spreadsheet named **Earnings Study**"
    ],
    steps: [
      { h: "Build the calendar", d: "For your chosen companies, record the last four earnings dates and the next scheduled one. Note whether each was published before the open, after the close, or during the session." },
      { h: "Record result versus expectation", d: "For the most recent report, find the consensus estimate and the actual figure for both revenue and earnings. Record whether each beat or missed, and what guidance was given." },
      { h: "Measure the reaction", d: "Record the closing price before the announcement and the opening price after. Compute the gap as a percentage, and the full move over the following three sessions." },
      { h: "Find the contradiction", d: "Identify at least one case where the company beat expectations and the share still fell. Read the coverage and write down what the market reacted to — usually guidance." },
      { h: "Model the damage", d: "For the largest gap you found, compute the loss on: an unleveraged holding sized at 5% of a portfolio, and a 5:1 leveraged CFD of the same exposure. Express both as a percentage of the account." },
      { h: "Test the stop", d: "Work out where a stop 8% below entry would actually have filled given the gap. Compare the intended loss with the realised one." },
      { h: "Write the policy", d: "A short written events policy: how you check dates, what you do with leveraged positions into earnings, and what size you will accept holding through one." }
    ],
    deliverable: "An **Earnings Study** spreadsheet covering three companies: four historical earnings dates each plus the next scheduled one, result versus consensus with guidance, measured gap and three-day move, one documented beat-but-fell case with the explanation, loss modelling at unleveraged 5% and 5:1 leveraged, a stop-slippage calculation, and a written events policy.",
    rubric: [
      { c: "Calendar discipline", d: "Located earnings dates independently and recorded whether each fell outside trading hours." },
      { c: "Expectation literacy", d: "Correctly distinguishes the reported figure from the consensus, and identifies guidance as separate from both." },
      { c: "Contradiction found", d: "Documented a real beat-but-fell case and explained the market's actual reason." },
      { c: "Loss modelling", d: "Correctly computed both scenarios and reached the right conclusion about leverage through scheduled events." },
      { c: "Stop realism", d: "Shows the stop filling at the gapped open, not the intended level, and states the realised loss." }
    ],
    pitfalls: [
      "Using the post-announcement close instead of the open, which understates the gap.",
      "Assuming a beat should mean a rise. Find a counterexample before accepting the lesson.",
      "Forgetting that a stop does not protect through a gap — the same lesson as Module 3, now routine rather than rare."
    ]
  },

  homework: [
    "Add the next earnings date for every company you follow to a calendar with a reminder a week ahead.",
    "Find a profit warning from the last two years and record the single-day fall.",
    "Find a rights issue and write down what happened to holders who did not take up their rights."
  ],

  quiz: [
    { q: "A company beats revenue and earnings expectations, and the share falls 9%. The most likely explanation:",
      options: ["The market is irrational", "Guidance for coming periods was weak, and price already reflected the beat", "The results were fraudulent", "A trading error"],
      a: 1,
      why: "Price is positioned for consensus before the release, so the beat itself may already be in the price. Guidance describes the future, which is what the market is pricing — the identical mechanism as economic surprises in Module 9." },
    { q: "A company announces a 4-for-1 stock split. Your 100 shares become 400. What happened to the value of your holding?",
      options: ["It quadrupled", "It is unchanged — the price adjusts proportionally", "It fell by three quarters", "It depends on the dividend"],
      a: 1,
      why: "A split divides the same claim into more pieces. It can improve liquidity and accessibility, but nothing about the underlying business or the value of your stake changed." },
    { q: "Why is leverage through a scheduled earnings date prohibited on this course?",
      options: ["Brokers do not allow it", "Most companies report outside trading hours, so the move arrives as an overnight gap that no stop can protect against", "Earnings are unpredictable in timing", "Spreads widen permanently"],
      a: 1,
      why: "The exchange is shut when the news lands. A 20% gap against a 5:1 leveraged position is a total loss, and the stop fills at the gapped open rather than the intended level." },
    { q: "You hold shares and ignore the paperwork for a rights issue. What happens?",
      options: ["Nothing, rights issues are optional and harmless", "You are diluted — others bought new shares at a discount and your stake now represents less", "Your shares are sold automatically", "You receive the discount anyway"],
      a: 1,
      why: "A rights issue offers existing holders the chance to maintain their proportion by buying discounted new shares. Declining means the same company is divided into more pieces and your slice shrinks." },
    { q: "Which event typically produces the largest single-day fall in a share?",
      options: ["A scheduled earnings miss", "An unscheduled profit warning", "A dividend cut", "A stock split"],
      a: 1,
      why: "Scheduled results are at least partly anticipated and hedged. An unscheduled warning arrives with no positioning and no warning, and repricing is immediate and severe." }
  ]
}

]);
