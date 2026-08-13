/* N1 Forex Academy — lessons for Module 106 (Equities track).

   VOICE: Jonathan talking to one student. The through-line is that most of a
   share's daily move has nothing to do with the company — which means picking
   good companies is not, by itself, risk management. Fund overlap is the
   concrete trap and it deserves the worked example. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[106] = [
    {
      title: 'What "the market is up" actually means',
      slides: [0, 1],
      teach: {
        lead: [
          "You'll hear \"the market rose 1% today\" every evening of your life. It's worth knowing how little that sentence sometimes means.",
          "An **index** tracks a defined basket of shares under published rules. The FTSE 100 is the hundred largest UK-listed companies; the S&P 500 is a similar idea in the US.",
          "The catch is in the **weighting**. Most big indices are **capitalisation-weighted**, meaning each company counts in proportion to its size. So the biggest few companies dominate the number, and the small ones barely register.",
          "In some major indices, **a handful of enormous companies drive most of the movement.**",
          "Which means \"the market is up 1%\" can quite easily mean **a few giants rose sharply while the majority of constituents fell.** The number is accurate and the impression it gives is wrong.",
          "There's a fix: look at the **equal-weighted** version of the same index, where every company gets an identical say. When those two disagree, you're learning something."
        ],
        terms: [
          { term: 'Index',
            plain: 'A measured basket of shares representing a market or a slice of it.',
            like: 'A shopping basket used to measure inflation. What is in it changes what it says.' },
          { term: 'Capitalisation weighting',
            plain: 'Companies counted in proportion to their size, so the biggest dominate.',
            like: 'A vote where shareholders get one vote per share. Not one person, one vote.' },
          { term: 'ETF',
            plain: 'A listed fund holding a whole basket, which you buy and sell like a single share.',
            like: 'A mixed case of wine. One purchase, twelve bottles.' },
          { term: 'Tracking difference',
            plain: 'The small gap between a fund\'s return and the index it follows, after costs.',
            like: 'The bit that goes missing to fees. Small, and it does not go away.' }
        ],
        close: [
          "An **ETF** is a listed fund that holds a basket for you. Buy one share of an index ETF and you own a slice of every company in that index, in a single trade.",
          "**Costs are low but not zero** — there's an ongoing charge, plus a small tracking difference between what the fund returns and what the index did.",
          "Now the important bit, and be precise about it because people overstate what they've bought:",
          "**An ETF removes single-company risk entirely.** No individual failure can ruin you. If one constituent collapses, it was one name among hundreds and you barely feel it. That's a genuine, valuable thing — it's the one risk in this track that diversification actually solves.",
          "**And it does absolutely nothing about market risk.** When the index falls 30%, your ETF falls 30%. There's nowhere to hide inside a market from the market.",
          "That distinction — **the risk you can diversify away versus the risk you can't** — is the whole idea of this module, and it decides how you build a portfolio in module 108."
        ]
      },
      check: [
        { q: 'A capitalisation-weighted index rose 1%. What does that tell you about the average constituent?',
          options: ['Most rose about 1%', 'Very little — a few giants can drive the index while most constituents fell', 'All rose', 'The median rose more'],
          a: 1,
          why: 'Cap weighting means the largest companies dominate the number. Comparing with the equal-weighted version of the same index often reveals a very different picture.' },
        { q: 'An index ETF removes which risk, and leaves which?',
          options: ['Removes all risk', 'Removes single-company risk, leaves market risk entirely intact', 'Removes market risk, leaves company risk', 'Removes currency risk only'],
          a: 1,
          why: 'Diversification within a market eliminates idiosyncratic risk, so no single failure ruins you. Systematic risk remains — when the index falls 30%, so does the fund.' }
      ]
    },

    {
      title: 'Most of the move is not about the company',
      slides: [2, 3],
      teach: {
        lead: [
          "Here's something that surprises people who've spent weeks researching a business.",
          "**On an ordinary day, most of what a share does has nothing to do with that company.** It's the market moving, and the sector moving, and your company being carried along.",
          "**Beta** is the measure of how much it gets carried. It compares a share's moves to its market.",
          "**Beta of 1.5** means that historically, when the market moved 1%, this share moved about 1.5%. It amplifies. **Beta below 1** means it's damped — utilities often behave this way, because people need electricity regardless of the economic mood.",
          "The consequence is worth being blunt about:",
          "**Picking a good company does not protect you from a falling market.** You can do the research properly, be entirely right about the business, and still lose 30% because everything lost 30%.",
          "That's not a flaw in your analysis. It's what market risk is."
        ],
        terms: [
          { term: 'Beta',
            plain: 'How much a share tends to move compared with its market. Above 1 amplifies.',
            like: 'How much a small boat rocks compared with the sea. Some boats rock more.' },
          { term: 'Sector',
            plain: 'A group of companies in related businesses, which tend to move together.',
            like: 'Every shop on the same street. One road closure affects all of them.' },
          { term: 'Rotation',
            plain: 'Money moving out of one sector and into another as expectations change.',
            like: 'The crowd shifting from one bar to the next. Same people, different room.' },
          { term: 'Systematic risk',
            plain: 'Market-wide risk that owning more shares cannot remove.',
            like: 'The weather. Owning more umbrellas does not change it.' }
        ],
        close: [
          "**Sectors** are the next layer down. Shares group into industries — banks, energy, technology, healthcare, retail — and each group responds together to the things that affect it.",
          "**Interest rates move banks. The oil price moves energy companies. Regulation moves healthcare.** When those drivers change, every company in the group moves, whether it's the best-run business in the sector or the worst.",
          "**Rotation** is money shifting between sectors as expectations change — out of one industry, into another, usually all at once.",
          "You've met this before. **Sector behaviour is exactly the currency correlation lesson from module 9, in equity form.** There it was an umbrella shop, a raincoat shop and a wellington shop. Here it's five banks.",
          "**Owning five banks is one position, not five.**",
          "They'll all rise together when rates move their way and all fall together when they don't. You've spread your money across five lines on a statement and taken a single concentrated bet on one industry.",
          "So the question from the forex track applies unchanged: **what does this position need to happen, and does anything else I own need the same thing?**"
        ]
      },
      check: [
        { q: 'A share has a beta of 1.6 and the market falls 5%. Roughly expect:',
          options: ['A 3% fall', 'An 8% fall', 'No change', 'An 8% rise'],
          a: 1,
          why: 'Beta above 1 means the share historically amplifies market moves. It is a tendency rather than a rule, and it is least reliable exactly when markets are most extreme.' },
        { q: 'You own ten shares, all technology companies. You are:',
          options: ['Well diversified', 'Holding essentially one sector bet with ten expressions of it', 'Protected from market risk', 'Diversified if they span countries'],
          a: 1,
          why: 'Sector holdings respond to the same drivers and fall together. This is the correlation lesson from the forex track, in equity form — count exposure by group, not by line.' }
      ]
    },

    {
      title: 'Counting what you actually own',
      slides: [4, 5],
      teach: {
        lead: [
          "Here's the trap that catches careful people, and it's easy to fall into precisely because you were being sensible.",
          "You buy a broad index ETF. Good decision — instant diversification, no single company can hurt you.",
          "Then you research three companies properly, like the last few modules taught you, and you buy them too.",
          "**All three are already inside the ETF, and they're among its largest holdings.**",
          "You now own them twice: once through the fund, once directly. Your statement shows four sensibly-sized lines. Your actual exposure to those three names is roughly **double** what you think it is.",
          "**Fund overlap is the most common source of accidental concentration**, and nothing on your account screen will tell you it's happening. You have to go and look."
        ],
        terms: [
          { term: 'Overlap',
            plain: 'Owning the same company twice — directly, and inside a fund you also hold.',
            like: 'Packing two of the same shirt because one was already in the case.' },
          { term: 'Idiosyncratic risk',
            plain: 'Risk specific to one company. This is the kind spreading out actually removes.',
            like: 'One shop burning down. Own twenty shops and it barely registers.' },
          { term: 'Concentration',
            plain: 'Having far more riding on one company, sector or theme than you intended.',
            like: 'Discovering three-quarters of the buffet is potatoes.' }
        ],
        close: [
          "So here's the discipline, and it's four steps:",
          "**Group your holdings by sector first, then count risk by group** rather than by line. Five banks is one number, not five.",
          "**Set a maximum exposure per sector**, not only per company. That's the limit that actually binds.",
          "**Before adding an individual share, check the top holdings of any fund you own.** Every ETF publishes them. It takes two minutes and it's the only way to catch overlap.",
          "**And assume that in a bad month, everything you own falls together.**",
          "That last one is the same lesson as the forex risk-on/risk-off section, and it bears repeating because it's counter-intuitive: **correlations tighten in a crash.** Holdings that behaved independently for three years all move as one, because everyone is selling everything at the same time and nobody is being selective on the way out.",
          "**The moment diversification matters most is the moment it works least.**",
          "Which is why you size for the bad month rather than for the calm one. Not because a crash is likely this year — because your position sizes have to be ones you can live with when it does happen."
        ]
      },
      check: [
        { q: 'You hold a broad index ETF and separately buy its three largest constituents. Your exposure to those three is:',
          options: ['Unchanged, the ETF is separate', 'Doubled — you own them inside the fund and again directly', 'Reduced by diversification', 'Neutralised'],
          a: 1,
          why: 'Fund overlap is the most common source of accidental concentration. Listing a fund\'s largest holdings before adding individual names prevents it.' },
        { q: 'What happens to correlations during a market crash?',
          options: ['They fall, giving better diversification', 'They tighten — things that looked independent fall together', 'They are unaffected', 'Only bonds are affected'],
          a: 1,
          why: 'The moment diversification matters most is the moment it stops working. Size for the assumption that in a bad month everything you own falls together.' }
      ]
    }
  ];
})();
