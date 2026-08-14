/* N1 Forex Academy — Module 501 (Crypto track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 501 ============================ */
{
  id: 501,
  track: 'crypto',
  title: "What a Crypto Asset Actually Is",
  tagline: "A ledger, a token, and a question worth answering before anything else: what exactly would you own?",
  level: "Digital Assets",
  duration: "80 min",

  objectives: [
    "Describe what a blockchain records, in plain terms and without jargon",
    "Say what a token entitles the holder to, and what it does not",
    "Explain what actually backs the value of a crypto asset",
    "Distinguish the main categories without treating them as one thing",
    "Judge a project by what it does rather than by how it is described"
  ],

  misconceptions: [
    "**\"Crypto is one asset class.\"** A settlement network, a platform token, a stablecoin and a joke coin have almost nothing in common beyond the technology they sit on. Treating them as one thing is the first analytical mistake.",
    "**\"It is backed by nothing, so it must be worthless.\"** Nothing backs a fiat currency either, beyond a state and its institutions. The honest question is not whether something is *backed* but what actually supports demand for it.",
    "**\"Blockchain technology is valuable, therefore the token is valuable.\"** A useful network does not automatically make its token appreciate. Those are two separate claims and they need separating.",
    "**\"Owning a token means owning a share of the project.\"** Almost never. Tokens usually carry no claim on assets, no claim on revenue, and no vote that binds anyone. That is the opposite of the share you studied in Module 101."
  ],

  glossary: [
    { t: "Blockchain", d: "A shared record of transactions, maintained by many independent computers rather than one institution." },
    { t: "Token / coin", d: "An entry on that record showing who controls what. Not a certificate and not a claim on a company." },
    { t: "Decentralised", d: "No single party controls the record. A spectrum, not a yes or no — many projects are far less decentralised than they claim." },
    { t: "Consensus mechanism", d: "How the network agrees which transactions are valid. Proof of work and proof of stake are the common approaches." },
    { t: "Private key", d: "The secret that controls your holdings. Whoever has it owns the coins, in every practical sense." },
    { t: "Stablecoin", d: "A token designed to hold a fixed value, usually against a currency. Only as good as whatever backs it." },
    { t: "Market capitalisation (crypto)", d: "Price × circulating supply. Frequently misleading, because circulating supply and total supply differ." },
    { t: "Tokenomics", d: "How supply is issued, distributed and unlocked over time. Often the single most important document." },
    { t: "Whitepaper", d: "The project's own description of itself. A marketing document until independently verified." }
  ],

  slides: [
    { kicker: "The technology",
      title: "A shared record with no single keeper",
      bullets: [
        "A **blockchain** is a record of transactions kept by many independent computers at once, rather than by one bank.",
        "Everyone holds a copy, and a **consensus mechanism** decides which new entries are valid.",
        "**What it actually records is control**, not ownership in any legal sense — a private key controls an entry.",
        "**That is genuinely useful** for moving value without a trusted intermediary, and genuinely limited: no chargebacks, no appeals, no reversal.",
        "**The technology being interesting is a separate question from the token being valuable.** Keep those apart."
      ],
      note: "Keep the technical detail minimal. Students do not need to understand hashing to trade this any more than they needed to understand SWIFT to trade currencies. What they need is control-versus-ownership and irreversibility." },

    { kicker: "What you own",
      title: "A token is not a share",
      bullets: [
        "In Module 101 a share gave you **a claim on assets, a claim on profits, and a vote**.",
        "**A typical token gives you none of those.** No claim on the project's assets, no right to its revenue, and no legally binding vote.",
        "Some tokens grant governance rights — which are usually advisory, and heavily concentrated among early holders.",
        "**So what supports the price?** Demand for use, demand for speculation, and scarcity rules written by the project itself.",
        "**That is not automatically worthless.** It is a different thing from equity, and it must be judged on its own terms."
      ],
      note: "This is the module's central comparison and the reason crypto sits after equities and bonds. Students who have studied a residual claim and a contractual coupon can see clearly what a token does and does not offer." },

    { kicker: "Value",
      title: "The honest question about backing",
      bullets: [
        "**\"It is backed by nothing\"** is a weak criticism, because a modern currency is not backed by a commodity either.",
        "The better question: **what supports demand, and would it survive scepticism?**",
        "**For a settlement network:** are people genuinely using it to move value, and would they still if the price fell?",
        "**For a platform token:** does the platform host activity people would pay for regardless of speculation?",
        "**For most tokens the honest answer is that demand is largely speculative** — and knowing that is far better than pretending otherwise."
      ],
      note: "Neither dismiss nor promote. The analytical stance is the same one used on a low P/E in Module 104: ask what supports the number, and be willing to reach an unflattering answer." },

    { kicker: "Categories",
      title: "Not one thing",
      bullets: [
        "**Settlement networks:** designed primarily to move and store value.",
        "**Platform tokens:** used to pay for computation on a network that hosts applications.",
        "**Stablecoins:** designed to hold a fixed value. **Only as sound as whatever backs them**, which ranges from audited reserves to an algorithm that has failed before.",
        "**Governance and application tokens:** tied to a specific service.",
        "**Meme coins:** explicitly no fundamental claim. Traded on attention, and honest about it.",
        "**Judge each category on its own terms.** Comparing a stablecoin to a meme coin is meaningless."
      ],
      note: "The stablecoin caveat deserves emphasis: students treat them as cash equivalents, and some have failed. 'Only as sound as the reserves' is the sentence to leave them with." },

    { kicker: "Supply",
      title: "Read the tokenomics before the whitepaper",
      bullets: [
        "**Tokenomics** describes how tokens are issued, who holds them, and when locked ones become sellable.",
        "**Circulating supply is not total supply.** A market capitalisation computed on circulating supply can hide an enormous overhang.",
        "**Unlock schedules matter.** Large tranches becoming tradeable is a supply event you can see coming, published in advance.",
        "**Concentration matters.** If a handful of wallets hold most of the supply, the market is thinner than it appears.",
        "**This is the closest thing crypto has to reading a company's accounts.** It is public, it is dull, and almost nobody reads it."
      ],
      note: "This is the practical analytical skill of the module and it maps directly onto Module 104. Dilution, share count and insider holdings have exact equivalents here, and students who did that lab can do this one." },

    { kicker: "Recap",
      title: "What you should be able to say now",
      bullets: [
        "What a blockchain records, and that it records control rather than legal ownership",
        "What a token does and does not entitle you to, against the share from Module 101",
        "How to ask what supports demand instead of arguing about backing",
        "The main categories, and why comparing across them is meaningless",
        "Where to find supply, unlocks and concentration — and why that beats the whitepaper"
      ],
      note: "Module 502 covers custody, which is where the largest and most permanent retail losses in this asset class actually occur — more than from price moves." }
  ],

  practical: {
    title: "Read the supply, not the story",
    time: "40 min",
    intro: "You will assess three assets on published supply data alone, without reading a single marketing page. This is the crypto equivalent of the two-company comparison in Module 104.",
    setup: [
      "Choose three assets from different categories — say a settlement network, a platform token and an application token.",
      "Use public data sources for supply figures; do not use the projects' own promotional material."
    ],
    steps: [
      { h: "Record supply", d: "For each: circulating supply, total supply, and maximum supply if capped. Compute circulating as a percentage of total." },
      { h: "Compute both caps", d: "Work out market capitalisation on circulating supply, then on total supply. Note the gap for each." },
      { h: "Find the unlocks", d: "Identify any scheduled unlock of locked tokens in the next twelve months, with dates and approximate sizes." },
      { h: "Check concentration", d: "Find what share of supply the largest holders control. Note where the data is unavailable — that absence is itself a finding." },
      { h: "Rank and justify", d: "Rank the three by supply-side risk alone, ignoring price and narrative entirely. Justify in one sentence each." }
    ],
    deliverable: "A three-column table of supply figures, both market capitalisations, upcoming unlocks, holder concentration, and a supply-risk ranking with one-sentence justifications.",
    rubric: [
      { c: "Both caps", d: "Computes market capitalisation on circulating AND total supply, and comments on the gap." },
      { c: "Unlocks", d: "Identifies scheduled unlocks with dates, or states clearly that none were found." },
      { c: "Sourcing", d: "Figures come from public data rather than the project's own promotional material." },
      { c: "Absence as evidence", d: "Where data cannot be found, says so explicitly rather than omitting the row." }
    ],
    pitfalls: [
      "Using market capitalisation on circulating supply only, which hides the overhang.",
      "Taking supply figures from the project's own site without cross-checking.",
      "Ranking by price performance rather than by supply risk, which is the whole exercise.",
      "Treating a missing concentration figure as though it were a zero."
    ]
  },

  homework: [
    "Take one stablecoin and find out precisely what backs it, who audits that, and how often. Summarise in two sentences.",
    "Find one project where circulating supply is under half of total supply, and write down when the difference becomes tradeable.",
    "Write two sentences comparing what a shareholder owns under Module 101 with what a token holder owns, without using the word 'better'."
  ],

  quiz: [
    { q: "A typical crypto token gives the holder:",
      options: [
        "A claim on the project's assets and revenue, like a share",
        "Usually no claim on assets, no right to revenue, and no legally binding vote",
        "A contractual interest payment",
        "Priority over creditors in a wind-up"
      ], a: 1,
      why: "This is the opposite of the share in Module 101. That does not make it worthless — it makes it a different instrument that must be judged on what actually supports demand." },

    { q: "Which is the better analytical question about a crypto asset?",
      options: [
        "Is it backed by anything?",
        "What supports demand for it, and would that survive if the price fell?",
        "How advanced is the technology?",
        "How many people are talking about it?"
      ], a: 1,
      why: "Modern currencies are not commodity-backed either, so 'backed by nothing' is a weak criticism. Asking what supports demand forces an honest answer, which is frequently that demand is largely speculative." },

    { q: "Market capitalisation computed on circulating supply can mislead because:",
      options: [
        "Prices change constantly",
        "Circulating supply may be far below total supply, hiding tokens due to become tradeable later",
        "It excludes stablecoins",
        "Exchanges report different prices"
      ], a: 1,
      why: "A large locked allocation is an overhang you can see coming, because unlock schedules are published. Computing both figures takes two minutes and changes the picture." },

    { q: "A stablecoin is:",
      options: [
        "Guaranteed to hold its value",
        "Designed to hold a fixed value, and only as sound as whatever actually backs it",
        "Backed by a government",
        "The same as holding cash in a bank"
      ], a: 1,
      why: "Students treat stablecoins as cash equivalents. Some have failed. What backs it, who audits that, and how often are the three questions that matter." },

    { q: "The technology behind a project is genuinely impressive. What does that tell you about the token's value?",
      options: [
        "That it should appreciate",
        "Very little on its own — a useful network and an appreciating token are two separate claims",
        "That it is safe to hold",
        "That demand is guaranteed"
      ], a: 1,
      why: "Keeping those two claims separate is the discipline of this module. Plenty of useful technology has existed alongside tokens that went nowhere." }
  ]
}

]);
