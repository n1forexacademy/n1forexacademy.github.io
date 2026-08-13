/* N1 Forex Academy — lessons for Module 301 (Futures track).

   VOICE: Jonathan talking to one student who has finished forex, equities and
   bonds. The opening move matters: futures arrive with a reputation as an
   exotic gambling instrument, and the honest correction is that this is the
   oldest risk-transfer tool there is. The farmer comes before the speculator. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[301] = [
    {
      title: 'An agreement with a date on it',
      slides: [0, 1],
      teach: {
        lead: [
          "Fourth track. You've bet on a ratio, owned a business, and lent money. **Now you're going to agree to do something later.**",
          "A futures contract is simpler than its reputation. It's **a binding agreement to buy or sell a set quantity of something, at a price fixed today, on a date in the future.** That's it.",
          "Before any of it involved trading screens, it involved farmers.",
          "Imagine you grow wheat. It's March, your harvest comes in September, and you have no idea what wheat will be worth by then. It might be a great price. It might be ruinous. **You cannot plan a business on that.**",
          "So you find a buyer — a bakery, say — who has the opposite problem: they need wheat in September and dread it being expensive. **The two of you agree a price now, for wheat that does not yet exist.**",
          "You've both given up the chance of a better outcome in exchange for **knowing where you stand.** That's a futures contract, and that is still what it's mainly for."
        ],
        terms: [
          { term: 'Futures contract',
            plain: 'A binding agreement to buy or sell a set amount of something at a set price on a set date.',
            like: 'Fixing next year\'s energy tariff. You might win, you might lose, and you have stopped worrying about it.' },
          { term: 'Long',
            plain: 'You have agreed to buy at the agreed price when the date comes.',
            like: 'The bakery. Committed to buying, whatever wheat costs by then.' },
          { term: 'Short',
            plain: 'You have agreed to sell at the agreed price when the date comes.',
            like: 'The farmer. Committed to selling, whatever wheat costs by then.' },
          { term: 'Underlying',
            plain: 'The thing the contract is written on — wheat, oil, an index, a currency.',
            like: 'The actual goods behind the paperwork.' }
        ],
        close: [
          "Now the single most important thing in this lesson, and it's the difference between this track and the next one.",
          "**Both sides are obligations. Neither of you gets to change your mind.**",
          "If wheat is expensive in September, the farmer still has to sell at the agreed price and watch the better price go past. If wheat is cheap, the bakery still has to buy high. **Nobody has a choice later.** That's what makes it a future.",
          "Hold on to that, because in the options track you'll meet an instrument where **one side does** get a choice — and everything about how it's priced follows from that one difference.",
          "One last thing that surprises people: **no money changes hands for the goods today.** You've agreed a price, not made a payment. What you do post is **margin** — a deposit proving you can honour the deal.",
          "That's the next lesson, and it works differently from the margin you met in module 3."
        ]
      },
      check: [
        { q: 'You buy one futures contract. What have you agreed to?',
          options: ['The right to buy at that price if you choose to', 'An obligation to buy the set quantity at the agreed price on the agreed date', 'A bet on the price with your broker', 'To own the underlying starting today'],
          a: 1,
          why: 'Both sides of a future are obligations — neither party can change their mind later. The right to choose belongs to an option, which is a completely different instrument and the next track.' },
        { q: 'A farmer sells wheat futures in March for a September harvest. Why?',
          options: ['To speculate on wheat rising', 'To fix a price now and stop the business depending on where wheat happens to be in September', 'Because futures are cheaper than selling wheat', 'To avoid growing the wheat'],
          a: 1,
          why: 'This is the original and still the main use. The farmer gives up the chance of a better price in exchange for certainty — and a speculator exists largely to take the other side of that.' }
      ]
    },

    {
      title: 'Standardised, cleared, and not a CFD',
      slides: [2, 3, 4, 5, 6],
      teach: {
        lead: [
          "For a market like this to work, the contracts have to be interchangeable. So **the exchange fixes everything except the price.**",
          "Quantity, quality, delivery month, delivery location, the smallest price increment — all set in advance. **The only thing anybody negotiates is the price.** That's what makes one contract identical to every other one, and therefore tradeable.",
          "Which brings the first practical warning: **contract sizes are often much bigger than beginners expect.**",
          "One crude oil contract is **1,000 barrels**. So a $1 move in oil — nothing, a quiet afternoon — moves your position by **$1,000**. One contract.",
          "Every exchange publishes a full **specification** for every contract, free and public: size, tick value, settlement type, expiry dates. Almost nobody reads it, which is why almost everybody is surprised by something.",
          "**Read it before you trade the thing.** And check whether a **micro** version exists — often a tenth of the size, and for a small account frequently the only sensible choice."
        ],
        terms: [
          { term: 'Standardisation',
            plain: 'The exchange fixes quantity, quality and dates, so only price is negotiated.',
            like: 'Shoe sizes. You argue about the price, not about what a size 9 means.' },
          { term: 'Contract size',
            plain: 'How much of the underlying one contract represents.',
            like: 'Buying wine by the case, not the bottle. The unit is bigger than you assumed.' },
          { term: 'Tick value',
            plain: 'What the smallest price move is worth per contract. The pip value of this world.',
            like: 'The pip value you learned in module 2, wearing a different name.' },
          { term: 'Clearing house',
            plain: 'The body that steps between buyer and seller after a trade, guaranteeing both sides.',
            like: 'An escrow agent holding a house sale together, so neither party has to trust the other.' },
          { term: 'Open interest',
            plain: 'How many contracts are still outstanding, as opposed to how many changed hands.',
            like: 'How many people are still in the building, rather than how many walked through the door.' }
        ],
        close: [
          "Now the part that makes futures structurally different from everything you've traded so far.",
          "In an ordinary private agreement, you carry the risk that the other side simply doesn't pay. In module 4 you spent a whole lesson on that question — *can I get my money back out of this broker?*",
          "**On a futures exchange, the moment your trade is agreed, the clearing house steps in between.** You now face the clearer. So does whoever took the other side. **The person you actually traded with becomes irrelevant to you.**",
          "It's an escrow agent on a house sale: neither party has to trust the other, because neither is relying on the other.",
          "**That is the real advantage over a CFD.** A CFD is a private contract with your broker, priced off the market, with your broker as your counterparty. A future is a standardised contract on an exchange, with one visible order book, published volume, and a central counterparty standing behind it.",
          "**The charts look nearly identical. The plumbing is completely different** — and the plumbing decides what happens when something goes wrong.",
          "Two differences to keep in mind. **A future expires; a CFD doesn't.** That creates work you'll meet in module 303. And futures give you **open interest** — how many contracts are still outstanding — which is genuinely new information. Forex could never tell you that, because nobody keeps a central register of positions.",
          "Rising price on rising open interest means new money is arriving. Rising price on *falling* open interest means shorts are being forced out — a squeeze, which can stop as suddenly as it started. **Context, not a signal.**"
        ]
      },
      check: [
        { q: 'A crude oil contract is 1,000 barrels. Oil moves $1. Your one contract moves:',
          options: ['$1', '$100', '$1,000', '$10,000'],
          a: 2,
          why: '$1 × 1,000 barrels = $1,000 per contract, from a move that barely counts as news. This is exactly why the contract specification is the first thing to read and why micro contracts exist.' },
        { q: 'The main structural difference between a future and a CFD is:',
          options: ['Futures charts move differently', 'A CFD is a private contract with your broker; a future is standardised, exchange-traded, and guaranteed by a central clearing house', 'CFDs cannot be shorted', 'Futures have no costs'],
          a: 1,
          why: 'The charts look nearly identical. With a CFD your broker is your counterparty; with a future the clearing house steps in between and the person you traded with stops mattering.' }
      ]
    }
  ];
})();
