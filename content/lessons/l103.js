/* N1 Forex Academy — lessons for Module 103 (Equities track).

   VOICE: Jonathan talking to one student. The point of this module is that a
   student who just spent twelve modules learning to control leverage will be
   offered it back immediately, in a market that gaps every night. The earnings
   rule is stated as a rule, not a suggestion. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[103] = [
    {
      title: 'Two products, one identical chart',
      slides: [0, 1],
      teach: {
        lead: [
          "Your broker will offer you two ways to trade the same company, and the charts look identical. Almost everything else is different.",
          "**Owning the shares.** You pay the full amount. Your name goes on the register. You get dividends, you get a vote, and you genuinely own a piece of the business.",
          "**A share CFD.** You put down a deposit, you own nothing at all, and you settle up in cash for whatever the price does. It's a bet on the price with a contract wrapped round it.",
          "It's the difference between buying a house and taking a bet on house prices. **You end up with roughly the same financial outcome and completely different circumstances.** One of them can't be repossessed.",
          "The differences that matter:",
          "**Owned shares** — no leverage, no cost to hold, and **you cannot lose more than you paid.**",
          "**A CFD** — leverage, a charge every night, easy shorting, and **every single risk from module 3 comes straight back.**"
        ],
        terms: [
          { term: 'Share CFD',
            plain: 'A contract that tracks a share price and settles in cash. Nothing changes hands but money.',
            like: 'Betting on house prices rather than buying the house.' },
          { term: 'Outright ownership',
            plain: 'Buying the actual shares, paid in full, held in your name or your broker\'s nominee account.',
            like: 'Buying the house. The deeds exist and they have your name on them.' },
          { term: 'Overnight financing',
            plain: 'A daily charge on a leveraged position, for the money you have effectively borrowed.',
            like: 'Interest on a loan. Small each night, relentless over months.' },
          { term: 'Nominee account',
            plain: 'Your broker holding the shares on your behalf. Normal, and they are still yours.',
            like: 'A left-luggage office. They hold the bag; the bag is yours.' }
        ],
        close: [
          "The trade-off is a genuinely useful one, and it comes down to time.",
          "**A CFD is cheap to open and expensive to hold.** You tie up far less cash to get the same exposure — but you pay financing on the **full** position value, every single night it stays open.",
          "**Owned shares are expensive to open and free to hold.** You pay the whole amount up front, and then it costs you nothing to hold them for ten years.",
          "**There's a crossover point, and it's usually a matter of weeks.**",
          "Over a few days, the CFD's smaller capital requirement can genuinely be the better tool. Over six months, financing eats the advantage and keeps going.",
          "You've met this before — it's the swap lesson from module 1 wearing different clothes. **Match the product to how long you intend to hold it**, rather than defaulting to whichever feels familiar.",
          "And be honest with yourself about *why* you'd reach for the leveraged one. If the answer is \"because my account is small\", that's the reasoning that ends accounts, and it doesn't get better because the instrument changed."
        ]
      },
      check: [
        { q: 'You hold a share CFD for six months versus owning the shares. You will have paid:',
          options: ['Less, CFDs are cheaper', 'The same, the price is identical', 'More, because of daily financing on the full position value', 'Nothing extra'],
          a: 2,
          why: 'CFDs are cheap to open and expensive to hold; owned shares are the reverse. Financing accrues nightly on the whole exposure, so over months it dominates.' },
        { q: 'The key structural advantage of owning shares outright is:',
          options: ['Higher returns', 'You cannot lose more than you paid, and there is no cost to hold', 'Tighter spreads', 'Faster execution'],
          a: 1,
          why: 'No financing, no margin call, and loss bounded at your outlay. Students routinely give that up by reaching for leverage out of impatience.' }
      ]
    },

    {
      title: 'Everything from module 3 comes back',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "The moment you take a leveraged position, **margin, margin level and the stop-out all return.** Same machinery, same failure mode, same sequence you watched play out in the module 3 drill.",
          "But there's something that makes it **worse here than it was in forex**, and it's the reason I'm giving you a hard rule at the end of this lesson.",
          "**Shares gap overnight far more than currencies do.**",
          "In forex, a real gap meant a weekend or a genuine shock. In equities, the market is shut for two-thirds of every day and companies deliberately release their biggest news into that gap — results, profit warnings, guidance changes, regulatory decisions.",
          "A 20% overnight move on earnings is not exotic. It's Tuesday.",
          "Now put that against a 5:1 leveraged position. A 20% gap against you is **the entire position**, and your stop fills at the gapped open because there was no trading in between for it to fill at. You don't get a partial loss. You get all of it, plus whatever's beyond."
        ],
        terms: [
          { term: 'Earnings date',
            plain: 'The scheduled day a company publishes its results. Known well in advance.',
            like: 'Exam results day. You know exactly when it is, and not what it says.' },
          { term: 'Profit warning',
            plain: 'An unscheduled announcement that results will be worse than expected.',
            like: 'A phone call you were not expecting, at a time nobody rings with good news.' },
          { term: 'Dividend adjustment',
            plain: 'A cash credit or debit on a CFD around the dividend date, mirroring the real dividend.',
            like: 'A stand-in. Looks like the real thing, is not the real thing, and the tax office knows the difference.' },
          { term: 'Ex-dividend date',
            plain: 'The cut-off. Own the shares before it and the dividend is yours; buy after and it is not.',
            like: 'The guest list closing. One day either side decides everything.' }
        ],
        close: [
          "**So here's the rule for this track, and it isn't a preference: no leverage held through a scheduled earnings date.**",
          "You know the date in advance. It's published. There is no excuse for being leveraged into a known event where a 20% gap is ordinary. Either close the position, or hold the shares outright where your loss is bounded at what you paid.",
          "Now, **who actually gets the dividend**, because it differs and it catches people:",
          "**Own the shares on the right date and the dividend is yours**, along with your vote.",
          "**Long a CFD** and you typically get a **cash adjustment** that mirrors the dividend. It looks the same in your account. It isn't the same thing, and it isn't taxed the same way.",
          "**Short a CFD across the dividend date and you pay it.** People forget this and are surprised by a debit. If you're short through an ex-dividend date, that cost is coming.",
          "**No CFD ever carries a vote.** You're not on the register, so there's nothing to vote with.",
          "On tax: it differs between the two products and between countries, and it's a question for someone qualified in your jurisdiction. I'm not going to guess at it."
        ]
      },
      check: [
        { q: 'Why is leverage more dangerous in equities than in major currencies?',
          options: ['Brokers offer more of it', 'Equities gap overnight far more often — earnings and company news arrive while the exchange is shut', 'Spreads are wider', 'Stops are not allowed'],
          a: 1,
          why: 'A 20% earnings gap against a 5:1 leveraged position is a total loss, and the stop fills at the gapped open. Hence the rule: no leverage held through a scheduled earnings date.' },
        { q: 'You are short a share CFD across an ex-dividend date. What happens?',
          options: ['You receive the dividend adjustment', 'You pay the dividend adjustment', 'Nothing, CFDs ignore dividends', 'The position closes automatically'],
          a: 1,
          why: 'Long CFDs receive a cash adjustment mirroring the dividend; shorts pay it. It is an adjustment rather than a dividend, and the tax treatment differs.' }
      ]
    },

    {
      title: 'Shorting is not the mirror image',
      slides: [5, 6],
      teach: {
        lead: [
          "In forex, going short felt as natural as going long — selling EUR/USD is just buying USD/EUR. Perfectly symmetrical.",
          "**In equities it is not symmetrical at all**, and the asymmetry runs in the dangerous direction.",
          "To short a share properly you have to **borrow it** from someone who owns it, sell it, and buy it back later to return it. That borrowing costs a fee, and in a heavily shorted company it can be brutally expensive — or simply unavailable, because everyone's already borrowed them.",
          "**CFDs make shorting easy**, which is a real advantage and a real trap in the same feature.",
          "Here's the asymmetry that matters most. **A share you own can only fall to zero. A share you're short can rise without limit.**",
          "Your downside going long is 100% of what you put in. Your downside going short is not bounded at all. That's not a scare story — it's just the shape of the arithmetic, and it's why short positions need a stop and a size in a way long positions can survive without."
        ],
        terms: [
          { term: 'Short selling',
            plain: 'Profiting from a fall. Easy with a CFD; needs the stock borrowed if done outright.',
            like: 'Selling a borrowed lawnmower and hoping to replace it cheaper. You still owe a lawnmower.' },
          { term: 'Borrow cost',
            plain: 'The fee for borrowing shares to short them. High when lots of people want to.',
            like: 'Peak-season hire prices. Everyone wants the same thing at the same time.' },
          { term: 'Short squeeze',
            plain: 'A crowded short position forced to buy back at once, driving price violently up.',
            like: 'A fire drill through one door. Everyone leaving at the same moment is the problem.' }
        ],
        close: [
          "**Short squeezes** are worth knowing about. When a lot of people are short the same name and price starts rising, they all have to buy to get out — and their buying pushes price higher, forcing more of them out. It's everyone trying to leave through one door.",
          "These moves are violent and they're not related to anything about the business.",
          "So, **which product for which job**:",
          "**Holding for months or years, want the dividends, don't want financing** → own the shares.",
          "**A short-term directional trade measured in days** → a CFD may genuinely be the right tool.",
          "**Want to be short** → practically, a CFD, with the risks above understood and a stop in place.",
          "**Learning, which is where you are** → own the shares, or trade CFDs at sizes so small the leverage is irrelevant.",
          "**And never**: reach for leverage because your capital feels too small. You know exactly where that ends — you watched an account die in the module 3 drill. The instrument changed. The arithmetic didn't."
        ]
      },
      check: [
        { q: 'You have a six-month directional idea. Which product fits?',
          options: ['A CFD, for the capital efficiency', 'Owning the shares, because financing over six months dominates the capital advantage', 'Either, they are equivalent', 'Neither'],
          a: 1,
          why: 'The crossover is usually a matter of weeks. Match the product to the holding period rather than defaulting to the one that feels familiar from forex.' },
        { q: 'Shorting a share differs from shorting a currency pair because:',
          options: ['It is banned for retail', 'It needs the stock borrowed when done outright, borrow may be costly or unavailable, and the theoretical loss is unbounded', 'Shares cannot fall', 'The broker guarantees the price'],
          a: 1,
          why: 'In forex, long and short are structurally symmetrical. In equities they are not — a share can rise without limit but only fall to zero.' }
      ]
    }
  ];
})();
