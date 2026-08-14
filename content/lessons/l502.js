/* N1 Forex Academy — lessons for Module 502 (Crypto track).

   VOICE: Jonathan talking to one student. This is the most valuable module in
   the track and the tone stays flat and procedural. The line that has to land:
   none of the big failure modes is being wrong about the price. Rules, not
   intentions — module 12's countermeasures lesson applied where mistakes
   cannot be undone. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[502] = [
    {
      title: 'Nobody is standing behind this',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "This is the most important module in the track, and it isn't about price at all.",
          "Cast your mind back to module 4. You spent a whole lesson asking whether a broker was properly regulated, whether client money was held separately, and what compensation existed if the firm collapsed. Sensible questions with real answers.",
          "**In much of this market the honest answers are: sometimes, often not, and none.**",
          "**There is no chargeback. No dispute process. No ombudsman. No deposit protection scheme.**",
          "And underneath all of that sits the thing that changes everything:",
          "**Transactions are irreversible.**",
          "Send to the wrong address and it's gone. Send on the wrong network and it's gone. Approve the wrong thing and it's gone. **There is nobody to ring, nothing to appeal, and no mechanism that could reverse it even if everyone agreed you'd made a mistake.**",
          "**That one fact should change your procedures. Not your enthusiasm — your procedures.**"
        ],
        terms: [
          { term: 'Custody',
            plain: 'Who actually controls the asset — you, or an institution holding it for you.',
            like: 'Cash in your pocket versus money in a bank. Different risks, both real.' },
          { term: 'Self-custody',
            plain: 'Holding your own private keys. Full control, and full responsibility.',
            like: 'Keeping the cash at home. Nobody can freeze it and nobody will replace it.' },
          { term: 'Custodial exchange',
            plain: 'A platform holding assets on your behalf. Convenient — and it makes you a creditor.',
            like: 'A cloakroom. You hold a ticket, not the coat.' },
          { term: 'Seed phrase',
            plain: 'A list of words that regenerates your keys. Anyone with it has your assets; losing it loses them.',
            like: 'The only key to a safe, with no locksmith and no spare.' }
        ],
        close: [
          "So you have a choice about how to hold, and **neither option is safe.**",
          "**Leave it on an exchange:** convenient, easy to trade, and you hold **a claim against that exchange** rather than the coins. If the exchange fails, **you become an unsecured creditor.**",
          "That's module 101's queue — staff, suppliers, lenders, then you — except **without a regulator standing behind it.** Large exchanges have failed. Holders waited years for partial recovery, and some got nothing.",
          "**Hold your own keys:** no counterparty risk at all. Nobody can freeze your assets or lose them in a bankruptcy.",
          "**And you now carry the entire operational risk.** Lose the keys and it's permanent. No reset, no recovery, no support line. A great deal has been lost exactly that way, quietly, by careful people.",
          "**So don't ask which is safe. Ask which failure you're better equipped to prevent.**",
          "You've answered that question before — about selling options, and about running carry. **Same question, third time.** It's the one that matters when neither option is comfortable."
        ]
      },
      check: [
        { q: 'Assets held on a custodial exchange are:',
          options: ['Coins you control directly', 'A claim against that exchange — if it fails, you are an unsecured creditor', 'Protected by deposit insurance', 'Held in your name on the blockchain'],
          a: 1,
          why: 'This is module 101\'s queue with no regulator behind it. Exchanges have failed and holders waited years for partial recovery, which is why you keep on-exchange only what you are actively trading.' },
        { q: 'Is self-custody the safe option?',
          options: ['Yes — it removes all risk', 'No — it removes counterparty risk and hands you the entire operational risk, and lost keys are permanent', 'Yes, provided you use a hardware device', 'Only for large holdings'],
          a: 1,
          why: 'Neither is safe; they fail differently. Choose the failure you are better equipped to prevent — the same question you answered about selling options and running carry.' }
      ]
    },

    {
      title: 'Rules, not intentions',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Here's what has actually cost retail holders the most money in this asset class. Read the list, then read the last line.",
          "**Exchange failure or fraud** — the largest single category.",
          "**Lost or destroyed keys** — permanent, and far more common than the dramatic news stories suggest.",
          "**Phishing** — and the successful ones don't look like scams. They look like a support person being helpful. A browser extension you installed months ago. An airdrop from a project you genuinely use.",
          "**Forgotten approvals** — an application you connected to once, years ago, that still holds permission to move your tokens whenever it likes.",
          "**Sending to the wrong address, or the right address on the wrong network** — irreversible, and remarkably easy to do.",
          "**Now the line that matters: not one of those is being wrong about the price.**",
          "Five tracks taught you to worry about market risk. **Here, operational risk has historically been the bigger destroyer of retail capital**, and almost nobody prepares for it."
        ],
        terms: [
          { term: 'Phishing',
            plain: 'Being tricked into revealing keys or approving a transaction, usually by something that looks legitimate.',
            like: 'Someone in a high-vis jacket walking out with your equipment. The jacket is the whole trick.' },
          { term: 'Approval (allowance)',
            plain: 'Permission you granted an application to move your tokens. Often unlimited, and usually forgotten.',
            like: 'A spare key you gave a contractor in 2022 and never asked back.' },
          { term: 'Cold storage',
            plain: 'Keys kept offline on a dedicated device. Less convenient, much harder to attack remotely.',
            like: 'A safe in the cellar rather than a wallet on the hall table.' },
          { term: 'Proof of reserves',
            plain: 'An exchange showing it holds client assets. Meaningless without showing liabilities too.',
            like: 'Showing you the till and not the invoices.' }
        ],
        close: [
          "So here are the procedures. **Procedures, not intentions** — module 12's point, applied somewhere mistakes cannot be undone.",
          "**Test every new address with a small amount first. Always.** It costs a fee and it prevents a permanent loss. No exceptions for addresses that feel trusted, because attackers work by manufacturing exceptions.",
          "**Check the network as well as the address.** A correct address on the wrong network loses the funds just as completely.",
          "**Write your seed phrase on paper.** Never a photo. Never a cloud note. Never in a password manager you also use for your email — that merges two separate compromises into one.",
          "**Review and revoke old approvals periodically.** Most people have never done this once. Go and look at yours.",
          "**Assume anyone who contacts you first is an attacker.** Real support does not message you, and nobody legitimate will ever ask for your seed phrase. Make that rule absolute, with no exceptions, because the moment it has exceptions it stops protecting you.",
          "And if you're using an exchange, use it deliberately.",
          "**Check its regulatory status in your own country**, not the one on the marketing page — that's module 4's entity lesson arriving again, and it still applies.",
          "**Proof of reserves without proof of liabilities proves nothing.** Showing you the assets says nothing about what's owed against them. A balance sheet has two sides, and this is widely marketed as though it were an audit.",
          "**And search the exchange's name with the word \"withdrawal\".** Same test as module 4. If people can't get their money out, it's never a secret."
        ]
      },
      check: [
        { q: 'Which has historically cost retail holders the most?',
          options: ['Being wrong about the price', 'Custody failures and irreversible operational mistakes', 'Trading fees', 'Tax liabilities'],
          a: 1,
          why: 'Exchange failure, lost keys, phishing and misdirected transfers all sit above market risk. Five tracks taught you to worry about price; here operational risk is the bigger destroyer of capital.' },
        { q: 'An exchange publishes proof of reserves. This tells you:',
          options: ['That client funds are fully backed', 'Very little on its own — reserves without liabilities is one side of a balance sheet', 'That it is regulated', 'That withdrawals are guaranteed'],
          a: 1,
          why: 'Assets alone say nothing about what is owed against them. Proof of reserves without proof of liabilities is theatre, and it is marketed as though it were an audit.' }
      ]
    }
  ];
})();
