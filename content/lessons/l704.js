/* N1 Forex Academy — lessons for Module 704 (Spread Betting track).

   VOICE: Jonathan talking to one student. This is now the FINAL lesson of all
   eight tracks — l505 was written when crypto was last and has been amended.

   TAX: handled deliberately. The qualifications are the content, not padding
   around it, and the losses-not-relievable point is the part promotional
   material omits. Do not compress this into a claim. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[704] = [
    {
      title: 'The tax question, stated properly',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "This is the feature that brings most people to spread betting, and it's the one most often stated badly. So let me be careful, because careful is more useful to you than confident.",
          "You'll hear: **\"spread betting is tax free.\"**",
          "**That's too strong.** Here's the accurate version:",
          "**In the UK, currently, spread betting profits are generally outside capital gains tax and stamp duty, for most individual bettors.**",
          "**Count the qualifications, because every one is doing work.** *In the UK* — it's a jurisdictional product and most of the world doesn't have it. *Currently* — tax law changes. *Generally* — there are situations where it doesn't hold. *For most individuals* — treatment can depend on your circumstances, including whether what you're doing looks like a trade or profession rather than betting.",
          "**I can't tell you your position and neither can any course.** That's a question for a qualified adviser who knows your actual circumstances. What I can do is make sure you know which questions to ask."
        ],
        terms: [
          { term: 'Jurisdiction',
            plain: 'Which country\'s rules apply to you. Decides both availability and treatment.',
            like: 'Which side of the road you drive on. Not a matter of preference.' },
          { term: 'Relievable loss',
            plain: 'A loss you can set against gains elsewhere to reduce tax.',
            like: 'A receipt you can claim back. Only useful if the system accepts it.' },
          { term: 'Stamp duty',
            plain: 'A transaction tax on share purchases in some markets.',
            like: 'The tax on buying a car. Charged on the purchase, not on the outcome.' }
        ],
        close: [
          "Now the half that the advertising never mentions, and it's the genuinely useful part of this lesson.",
          "**If your gains sit outside the tax net, your losses generally do too.**",
          "Think about what that means. **A loss on a spread bet usually cannot be set against gains elsewhere.** Trade the same view through shares or a CFD, and a loss may well be relievable — it can reduce the tax you owe on something else.",
          "**Here, it just disappears.**",
          "**And who does that disadvantage most? People with losses.** Which is nearly everyone at some point, and disproportionately people who are early in this.",
          "**So the treatment cuts both ways. It's a trade-off, not a gift.**",
          "One more piece of arithmetic, and then we're done with tax.",
          "**A tax saving is contingent on making a profit. A wider spread is charged on every single trade, regardless of outcome.**",
          "One is conditional. **The other is certain.**",
          "So do the sum on your own numbers: **the spread difference multiplied by your realistic annual trade count**, against **the tax you'd actually pay on a realistic annual result.**",
          "**For an active trader with modest results, the wrapper cost frequently exceeds the tax benefit entirely.** It takes about ten minutes to check, and almost nobody does."
        ]
      },
      check: [
        { q: 'The tax position of spread betting is best stated as:',
          options: ['It is tax free', 'In some jurisdictions, currently, profits are generally outside certain taxes for most individuals — with treatment depending on circumstances and subject to change', 'It is taxed the same as shares', 'It depends only on how much you make'],
          a: 1,
          why: 'Every qualification is doing work. The confident one-word version is what you will meet everywhere, and it is not accurate enough to plan around — your own position is a question for a qualified adviser.' },
        { q: 'If gains sit outside the tax net, what happens to losses?',
          options: ['They can still be set against other gains', 'They generally cannot be relieved either — a real cost, especially early on', 'They are refunded', 'They carry forward indefinitely'],
          a: 1,
          why: 'The treatment cuts both ways, and the promotional version never mentions the second half. It particularly disadvantages the people most likely to be attracted by the headline.' }
      ]
    },

    {
      title: 'The end of eight tracks',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Seventh and final extension of the policy. **You could write this yourself by now** — which was the whole idea.",
          "**Unchanged:** risk per trade, stops where the idea is wrong, never widening, never averaging down, daily and weekly stops, correlated positions counted once.",
          "**Add: a notional conversion rule.** Stake × price level, before every bet, no exceptions. **Add: an exposure limit** alongside the risk limit. **Add: a protection rule** — when you'll pay for a guaranteed stop, and the standing instruction that it never changes your size. **Add: a point-definition check** before sizing anything on a market you haven't traded.",
          "**And does this wrapper suit you?**",
          "**It suits** someone in a jurisdiction where it's offered, trading short-term, who values guaranteed stops and has done the cost arithmetic honestly.",
          "**It doesn't suit** long holding periods, where nightly financing compounds against you. It doesn't suit anyone who'd use the protections as a licence to hold more. And it doesn't suit anyone outside the handful of jurisdictions where it exists — **which is most of the world.**",
          "**And if you conclude it has no place in your process — that's a competent conclusion. Sixth time this course has said so.**"
        ],
        terms: [
          { term: 'Suitability',
            plain: 'Whether a product fits your circumstances and objectives — not whether you are allowed to use it.',
            like: 'Whether the shoes fit, rather than whether they are in stock.' },
          { term: 'Wrapper cost',
            plain: 'Spread, financing and premiums combined — what the container charges you.',
            like: 'The delivery fee. Nothing to do with the thing you bought.' }
        ],
        close: [
          "Right. **That's the end.**",
          "**Eight tracks. Currencies, shares, bonds, futures, options, crypto, commodities, and this.** Let me tell you what you actually learned, because it was never the eight markets.",
          "**You learned one risk policy.** You wrote it in module 10 and extended it seven times. **You never replaced it — not once.** Every market added clauses; none of them broke what was underneath.",
          "**You met one answer about analytical tools, over and over.** Open interest. Credit spreads. Positioning. Implied volatility. The greeks. Inventory. **Every single one: context, not signals.** That repetition is the most reliable way there is to tell a real analytical tool from something being sold to you as a system.",
          "**You met one return shape and learned to distrust it.** Many small wins, then one enormous loss. Martingale. Carry. Selling options. High leverage. **Same profile, four costumes, same ending** — and it destroys people who size for the calm periods.",
          "**You met one correlation lesson, five times.** Dollar-negative pairs. Five banks. Ten tokens. Three energy positions. **Always the same question: what do all my positions need to happen? If it's the same thing, you have one position.**",
          "**And six of the eight tracks ended by telling you that walking away from a market is a competent conclusion.** That wasn't modesty. It was the point.",
          "So here's where you finish, and I'll say it as plainly as I can:",
          "**You are not equipped to trade eight markets. Nobody is. Anyone claiming otherwise is describing a marketing page.**",
          "**You are equipped to evaluate any of them, size properly, and walk away from most.** That's rarer and considerably more valuable.",
          "The certificates say you completed a programme and can demonstrate a process. **They don't promise an outcome, and neither do I.** What you have is a process, and the ability to tell whether it's working. That's what almost nobody starting out has, and it's the only durable advantage in this entire business.",
          "**Now go and be boring about it. Genuinely. That's the job.**"
        ]
      },
      check: [
        { q: 'Across eight tracks, what was actually being taught?',
          options: ['Eight separate sets of techniques', 'One risk policy extended seven times, one verdict on analytical tools, one return shape to distrust, and one correlation lesson — the markets were just the material', 'How to trade every market actively', 'Which market is most profitable'],
          a: 1,
          why: 'The recurrences are the curriculum. Students rarely notice the structure while they are inside it, which is why the final lesson names it explicitly.' },
        { q: 'Having completed all eight tracks, you are:',
          options: ['Ready to trade eight markets', 'Equipped to evaluate any of them, size properly, and walk away from most — the rarer and more useful skill', 'Guaranteed to be profitable', 'Qualified to advise others'],
          a: 1,
          why: 'Nobody trades eight markets well. Six of the eight tracks ended by saying that declining a market on the arithmetic is a competent conclusion, and that repetition was deliberate.' }
      ]
    }
  ];
})();
