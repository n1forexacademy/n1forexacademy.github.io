/* N1 Forex Academy — lessons for Module 501 (Crypto track).

   VOICE: Jonathan talking to one student, deliberately unglamorous. The
   comparison with the share from module 101 does the analytical work, and the
   stance is neither dismissal nor promotion — the same "ask what supports the
   number" discipline used on a low P/E in module 104. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[501] = [
    {
      title: 'What would you actually own?',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Last track. And I'm going to teach this one exactly the way I've taught the other five, which means no excitement and no dismissal — just the same questions you'd ask of anything.",
          "Start with the technology, briefly, because you need less of it than you think.",
          "**A blockchain is a record of transactions kept by lots of independent computers at once**, rather than by one bank. Everyone holds a copy, and there's an agreed process for deciding which new entries are valid.",
          "You don't need more than that to trade this, any more than you needed to understand how banks message each other to trade currencies.",
          "But you do need **two consequences**, because they shape everything.",
          "**First: what the record actually shows is control, not legal ownership.** Whoever holds the secret key controls the coins. There's no account in your name at an institution that knows who you are.",
          "**Second: it's irreversible.** No chargebacks, no appeals, nobody to ring. Send it to the wrong place and it's gone. That's not a bug — it's the design — and module 502 is about what it means for you."
        ],
        terms: [
          { term: 'Blockchain',
            plain: 'A shared record of transactions kept by many independent computers rather than one institution.',
            like: 'A ledger everyone in the room keeps their own copy of, and they all have to agree on each new line.' },
          { term: 'Token (coin)',
            plain: 'An entry on that record showing who controls what. Not a certificate, not a claim on a company.',
            like: 'A name written next to an amount. The paperwork is the whole thing.' },
          { term: 'Private key',
            plain: 'The secret that controls your holdings. Whoever has it owns the coins in every practical sense.',
            like: 'The only key to a safe with no locksmith and no spare.' },
          { term: 'Irreversible',
            plain: 'Transactions cannot be undone, reversed or disputed.',
            like: 'Cash handed to a stranger. There is no one to complain to.' }
        ],
        close: [
          "Now the question this whole track turns on, and it's one you're well equipped to ask because of module 101.",
          "**What would you actually own?**",
          "Remember what a share gave you. **A claim on the company's assets. A claim on its profits, paid as dividends. And a vote.** Three concrete things, legally enforceable, with you sitting somewhere in a queue if things went wrong.",
          "**A typical crypto token gives you none of those.**",
          "No claim on the project's assets. No right to its revenue. No legally binding vote — some tokens carry governance rights, but those are usually advisory and heavily concentrated among people who got in first.",
          "**So what supports the price?**",
          "Three things, honestly: **demand from people actually using it**, **demand from people speculating on it**, and **scarcity rules the project wrote for itself.**",
          "**That doesn't make it worthless.** It makes it a different instrument from anything else in this course, and one that has to be judged on its own terms rather than by borrowing the vocabulary of shares."
        ]
      },
      check: [
        { q: 'A typical crypto token gives the holder:',
          options: ['A claim on the project\'s assets and revenue, like a share', 'Usually no claim on assets, no right to revenue, and no legally binding vote', 'A contractual interest payment', 'Priority over creditors if the project fails'],
          a: 1,
          why: 'This is the opposite of the share in module 101. It does not make a token worthless — it makes it a different instrument, which has to be judged on what actually supports demand rather than on borrowed vocabulary.' },
        { q: 'What does a blockchain record actually establish?',
          options: ['Legal ownership registered in your name', 'Control — whoever holds the private key controls the coins', 'A debt owed to you by the network', 'A share of the project\'s profits'],
          a: 1,
          why: 'There is no institution holding an account in your name. Control is the whole thing, which is why key management in module 502 is not an administrative detail.' }
      ]
    },

    {
      title: 'Asking better questions than "is it backed?"',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "You'll hear \"it's backed by nothing, so it's worthless\" constantly. **It's a weak criticism, and I'd rather you had a better one.**",
          "The pound in your pocket isn't backed by gold either. It's backed by a state, its institutions, and the fact that everyone accepts it. That's a genuinely stronger position — but it's not \"backing\" in the sense people mean.",
          "**So ask a better question: what supports demand, and would it survive scepticism?**",
          "That's the same discipline you used on a low P/E in module 104. Don't argue about the label — go and find what's holding the number up, and be willing to reach an unflattering answer.",
          "**For a settlement network:** are people genuinely using it to move value? Would they still, if the price fell 70%?",
          "**For a platform token:** does the platform host activity people would pay for regardless of speculation?",
          "**And for most tokens, the honest answer is that demand is largely speculative.**",
          "**Say that out loud rather than dressing it up.** Knowing you're in a speculative position is far safer than believing you're in a fundamental one."
        ],
        terms: [
          { term: 'Stablecoin',
            plain: 'A token designed to hold a fixed value. Only as sound as whatever actually backs it.',
            like: 'A cloakroom ticket. Worth a coat only if the coat is really there.' },
          { term: 'Tokenomics',
            plain: 'How tokens are issued, who holds them, and when locked ones become sellable.',
            like: 'The share register and the issuance plan, from module 101 — same job, different name.' },
          { term: 'Circulating supply',
            plain: 'How many tokens are actually tradeable now, as opposed to how many exist in total.',
            like: 'Seats on sale versus seats in the stadium.' },
          { term: 'Unlock schedule',
            plain: 'The published dates when locked tokens become sellable.',
            like: 'A published date when a lot more supply walks into the market.' }
        ],
        close: [
          "**And stop treating crypto as one thing.** It's the first analytical mistake and it makes everything after it sloppy.",
          "A **settlement network**, a **platform token**, a **stablecoin** and a **meme coin** have almost nothing in common beyond the technology underneath. Comparing them is meaningless.",
          "One warning on **stablecoins**, because people treat them as cash. **They're only as sound as whatever backs them** — and that ranges from properly audited reserves to an algorithm that has, in more than one case, failed completely. **Find out what backs it, who audits that, and how often.** Three questions, ten minutes.",
          "**Meme coins**, to be fair, are at least honest. They claim no fundamental value and are traded on attention. Just know which game you've entered.",
          "Now the practical skill of this module, and it maps straight onto module 104.",
          "**Read the tokenomics before the whitepaper.**",
          "The whitepaper is the project describing itself — a marketing document until somebody independent verifies it. **The supply data is the closest thing crypto has to a company's accounts.**",
          "**Circulating supply is not total supply.** A market capitalisation computed on circulating supply can hide an enormous overhang of tokens waiting to become sellable. **Compute both** — it takes two minutes and it frequently changes the picture entirely.",
          "**Check the unlock schedule**, because large tranches becoming tradeable is a supply event published in advance. **And check concentration** — if a handful of wallets hold most of the supply, the market is far thinner than it looks.",
          "It's public, it's dull, and almost nobody reads it. **Which is exactly why it's worth your time.**"
        ]
      },
      check: [
        { q: 'Which is the better analytical question about a crypto asset?',
          options: ['Is it backed by anything?', 'What supports demand for it, and would that survive if the price fell sharply?', 'How advanced is the technology?', 'How many people are talking about it?'],
          a: 1,
          why: 'Modern currencies are not commodity-backed either, so "backed by nothing" is weak. Asking what supports demand forces an honest answer — frequently that demand is largely speculative, which is much safer to know than to deny.' },
        { q: 'Market capitalisation computed on circulating supply can mislead because:',
          options: ['Prices change constantly', 'Circulating supply may be far below total supply, hiding tokens due to become tradeable later', 'It excludes stablecoins', 'Exchanges report different prices'],
          a: 1,
          why: 'A large locked allocation is an overhang you can see coming, because unlock schedules are published in advance. Computing both figures takes two minutes and often changes the picture entirely.' }
      ]
    }
  ];
})();
