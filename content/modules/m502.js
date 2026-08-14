/* N1 Forex Academy — Module 502 (Crypto track). Loaded on demand. */
window.COURSE = (window.COURSE || []).concat([

/* ============================ MODULE 502 ============================ */
{
  id: 502,
  track: 'crypto',
  title: "Custody, Exchanges and How People Actually Lose Everything",
  tagline: "More retail money has been lost here to custody failures and irreversible mistakes than to being wrong about the price.",
  level: "Digital Assets",
  duration: "85 min",

  objectives: [
    "Explain what it means to control an asset with no institution standing behind it",
    "Describe the trade-off between holding your own keys and leaving assets on an exchange",
    "List the failure modes that have historically cost retail holders the most",
    "Explain why irreversibility changes every operational decision",
    "Write a custody procedure you would actually follow"
  ],

  misconceptions: [
    "**\"My coins are safe on a big exchange.\"** Assets on an exchange are a claim against that exchange, not coins you control. Large exchanges have failed, and holders became unsecured creditors — the Module 101 queue, with no regulator behind it.",
    "**\"Self-custody is the safe option.\"** It removes exchange risk and hands you the entire operational risk instead. Lost keys are permanent, and a great deal has been lost that way.",
    "**\"I would never fall for a scam.\"** The successful ones do not look like scams. They look like support staff, browser extensions, and airdrops from projects you actually use.",
    "**\"If I send it to the wrong address I can get it back.\"** You cannot. There is no reversal mechanism, no dispute process and nobody to appeal to. This is the single largest behavioural difference from every earlier track."
  ],

  glossary: [
    { t: "Custody", d: "Who actually controls the asset — you, or an institution holding it for you." },
    { t: "Self-custody", d: "Holding your own private keys. Full control and full responsibility." },
    { t: "Custodial exchange", d: "A platform holding assets on your behalf. Convenient, and it makes you a creditor." },
    { t: "Hot wallet", d: "A wallet connected to the internet. Convenient, more exposed." },
    { t: "Cold storage", d: "Keys kept offline, typically on a dedicated device. Less convenient, far harder to attack remotely." },
    { t: "Seed phrase", d: "A list of words that regenerates your keys. Anyone with it has your assets. Losing it loses them." },
    { t: "Counterparty risk", d: "The risk the institution holding your assets fails or misuses them." },
    { t: "Proof of reserves", d: "An exchange attempting to demonstrate it holds client assets. Useful only if liabilities are shown too." },
    { t: "Phishing", d: "Being tricked into revealing keys or approving a transaction, usually by something that looks legitimate." },
    { t: "Approval / allowance", d: "Permission granted to an application to move your tokens. Frequently unlimited and frequently forgotten." }
  ],

  slides: [
    { kicker: "The difference",
      title: "Nobody is standing behind this",
      bullets: [
        "In Module 4 you asked whether a broker was regulated, whether client funds were segregated, and what compensation existed.",
        "**In much of this market the honest answers are: sometimes, often not, and none.**",
        "**There is no chargeback. No dispute process. No ombudsman. No deposit protection.**",
        "**And transactions are irreversible.** A mistake is permanent in a way nothing in the previous five tracks was.",
        "**That single fact should change your procedures, not your enthusiasm.**"
      ],
      note: "Set the tone plainly. This is not an argument against the asset class; it is a statement about what safety nets exist. Students who internalise irreversibility behave completely differently around transfers." },

    { kicker: "The choice",
      title: "Two ways to hold, two sets of risk",
      bullets: [
        "**On an exchange:** convenient, easy to trade, and you hold **a claim against that exchange** rather than the coins themselves.",
        "**Exchanges have failed**, and holders became unsecured creditors. That is Module 101's queue, without a regulator behind it.",
        "**Self-custody:** you hold the keys. **No counterparty risk, and all the operational risk.**",
        "**Lost keys are permanent.** No recovery, no reset, no support line.",
        "**Neither option is safe. They fail differently**, and you must choose which failure you are better equipped to prevent."
      ],
      note: "The framing that lands is 'choose your failure mode', which is the same question asked about option selling and carry. Students who want a safe answer must be told plainly that there is not one." },

    { kicker: "Failure modes",
      title: "What has actually cost people the most",
      bullets: [
        "**Exchange failure or fraud** — the largest single category historically.",
        "**Lost or destroyed keys** — permanent, and more common than the dramatic stories suggest.",
        "**Phishing** — fake support staff, fake browser extensions, fake airdrops from projects you genuinely use.",
        "**Forgotten approvals** — an application you used once retains permission to move your tokens indefinitely.",
        "**Sending to the wrong address or the wrong network** — irreversible, and remarkably easy.",
        "**Notice that none of these is being wrong about the price.**"
      ],
      note: "The final bullet is the module in one line. Every earlier track taught students to worry about market risk; here operational risk has historically been the bigger destroyer of retail capital." },

    { kicker: "Procedure",
      title: "Rules that do not rely on being careful",
      bullets: [
        "**Test every new address with a small amount first.** Always. It costs a fee and prevents a permanent loss.",
        "**Check the network as well as the address.** Correct address on the wrong network loses the funds.",
        "**Write the seed phrase on paper, never a photo, never a cloud note, never a password manager you also use for email.**",
        "**Review and revoke old approvals periodically.** Most people have never done this once.",
        "**Assume anyone contacting you first is an attacker.** Real support does not message you, and never asks for a seed phrase.",
        "**These are procedures, not intentions** — Module 12's point, applied where mistakes cannot be undone."
      ],
      note: "This maps directly onto the countermeasures lesson: do not rely on discipline, build a process that does not need you at your best. The test-transaction rule alone prevents a large share of permanent losses." },

    { kicker: "Choosing an exchange",
      title: "If you use one, use it deliberately",
      bullets: [
        "**Check the regulatory status in your own country**, not the one on the marketing page — the Module 4 entity lesson, again.",
        "**Proof of reserves without proof of liabilities proves nothing.** Assets alone say nothing about what is owed.",
        "**Withdrawal record matters more than fees.** Search the name with 'withdrawal' and read the first page.",
        "**Keep on-exchange only what you are actively trading.** Convenience has a cost and the cost is counterparty risk.",
        "**Enable every security feature offered**, and never use SMS as your only second factor."
      ],
      note: "The proof-of-reserves point is worth labouring, because it is widely misunderstood and widely marketed. A balance sheet needs both sides; showing only assets is theatre." },

    { kicker: "Recap",
      title: "What you now understand",
      bullets: [
        "That irreversibility removes every safety net you relied on in earlier tracks",
        "The genuine trade-off between exchange custody and self-custody, and that neither is safe",
        "The failure modes that have actually cost retail holders the most",
        "A written procedure for transfers, keys and approvals",
        "How to choose an exchange deliberately, including what proof of reserves does not prove"
      ],
      note: "This module matters more than the price analysis that follows. A student who trades brilliantly and loses their holdings to a phishing approval has learned nothing useful from the rest of the track." }
  ],

  practical: {
    title: "Write your custody procedure",
    time: "40 min",
    intro: "A written procedure, followed every time, prevents the losses that no amount of market skill can recover. This is the most valuable lab in the track.",
    setup: [
      "You do not need to hold any crypto to complete this.",
      "If you do hold some, complete the approval review step for real."
    ],
    steps: [
      { h: "Decide the split", d: "State what proportion you would keep on an exchange and what proportion in self-custody, with one sentence justifying each. Name the failure you are accepting in each case." },
      { h: "Write the transfer procedure", d: "Write the exact steps for sending funds to a new address, including the test transaction and the network check. Number them." },
      { h: "Write the key procedure", d: "State where the seed phrase lives, in what form, who else could access it, and what happens to it if you are unavailable for a month." },
      { h: "Review approvals", d: "If you hold assets, list every application with a standing approval to move your tokens and revoke those you no longer use. If you do not hold any, write the steps you would follow." },
      { h: "Write the contact rule", d: "State plainly what you will do when anyone contacts you claiming to be support. One sentence, absolute." }
    ],
    deliverable: "A one-page custody procedure: the custody split with named failure modes, a numbered transfer procedure, a key procedure covering the unavailable-for-a-month case, an approvals review, and an absolute contact rule.",
    rubric: [
      { c: "Named failures", d: "States which failure mode is being accepted on each side of the split, rather than asserting one is safe." },
      { c: "Test transaction", d: "The transfer procedure includes a small test send and a network check as numbered, non-optional steps." },
      { c: "Key realism", d: "Addresses the unavailable-for-a-month case honestly, including who else could recover the assets." },
      { c: "Absolute rules", d: "The contact rule admits no exceptions, because attackers work by manufacturing exceptions." }
    ],
    pitfalls: [
      "Writing 'be careful with links' rather than an absolute rule.",
      "Storing a seed phrase in a password manager used for email, which merges two separate compromises into one.",
      "Skipping the unavailable-for-a-month question, which is where most self-custody plans quietly fail.",
      "Treating a test transaction as optional for 'trusted' addresses."
    ]
  },

  homework: [
    "Find one exchange failure from the past decade and write two sentences on what holders recovered and how long it took.",
    "Check whether the exchange you would use is regulated in your own country, and note which legal entity your account would actually be with.",
    "Write down, in one sentence, what would happen to your holdings if you were unreachable for a month. If you cannot answer, that is the finding."
  ],

  quiz: [
    { q: "Assets held on a custodial exchange are:",
      options: [
        "Coins you control directly",
        "A claim against that exchange — if it fails, you are an unsecured creditor",
        "Protected by deposit insurance",
        "Held in your name on the blockchain"
      ], a: 1,
      why: "This is Module 101's queue with no regulator behind it. Exchanges have failed and holders waited years for partial recovery, which is why you keep on-exchange only what you are actively trading." },

    { q: "Is self-custody the safe option?",
      options: [
        "Yes — it removes all risk",
        "No — it removes counterparty risk and hands you the entire operational risk, and lost keys are permanent",
        "Yes, provided you use a hardware device",
        "Only for large holdings"
      ], a: 1,
      why: "Neither option is safe; they fail differently. Choose the failure you are better equipped to prevent — the same question you answered about selling options and running carry." },

    { q: "Which has historically cost retail holders the most?",
      options: [
        "Being wrong about the price",
        "Custody failures and irreversible operational mistakes",
        "Trading fees",
        "Tax liabilities"
      ], a: 1,
      why: "Exchange failure, lost keys, phishing and misdirected transfers all sit above market risk. Every earlier track taught you to worry about price; here operational risk is the bigger destroyer." },

    { q: "You are about to send a large amount to a new address. What must happen first?",
      options: [
        "Nothing, if you copied the address carefully",
        "A small test transaction, plus a check that the network is correct",
        "Contact support to confirm",
        "Wait for lower fees"
      ], a: 1,
      why: "Transactions are irreversible. A correct address on the wrong network loses the funds just as completely as a wrong address. A test send costs a fee and prevents a permanent loss." },

    { q: "An exchange publishes proof of reserves. This tells you:",
      options: [
        "That client funds are fully backed",
        "Very little on its own — reserves without liabilities is one side of a balance sheet",
        "That it is regulated",
        "That withdrawals are guaranteed"
      ], a: 1,
      why: "Assets alone say nothing about what is owed. Proof of reserves without proof of liabilities is theatre, and it is widely marketed as though it were an audit." }
  ]
}

]);
