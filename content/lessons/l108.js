/* N1 Forex Academy — lessons for Module 108 (Equities track).

   VOICE: Jonathan talking to one student. Closes the equities track, so the
   final lesson gives an honest comparison rather than selling either market.
   The horizon-drift point is the most valuable thing here: a losing trade
   silently becoming "a long-term investment" is the defining equity failure. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[108] = [
    {
      title: 'Decide what you are actually doing',
      slides: [0, 1],
      teach: {
        lead: [
          "Before any of the process, one decision — and getting it wrong quietly ruins everything downstream.",
          "**How long do you intend to hold?**",
          "**Investing** — months to years, driven by the business itself, tolerant of drawdowns, very little activity. **Position trading** — weeks to months, driven by trends and catalysts. **Swing trading** — days to weeks, mostly technical, and paying financing if you're leveraged. **Day trading shares** — possible, and you'd be competing with extremely well-resourced people on their own ground.",
          "**Pick one. Write it down.**",
          "Here's why this matters more than it sounds, and it's the single most common way equity accounts go wrong:",
          "**A losing short-term trade gets silently reclassified as a long-term investment.**",
          "It goes against you. The stop is close. And instead of taking the loss, you decide you actually rather like the company and you're happy to hold it for a few years. The trade didn't fail — it got promoted.",
          "**That isn't a change of mind. It's a stop loss being removed with extra steps.**"
        ],
        terms: [
          { term: 'Horizon',
            plain: 'How long you intend to hold, decided before you buy.',
            like: 'Booking a return ticket. You knew when you were coming back before you set off.' },
          { term: 'Screen',
            plain: 'A filter applied across the whole market to produce a shortlist.',
            like: 'A sieve. It removes what you did not want; it does not find gold.' },
          { term: 'Watchlist',
            plain: 'The shortlist you actively follow, sitting between screening and owning.',
            like: 'Houses you have viewed but not bid on.' },
          { term: 'Horizon drift',
            plain: 'A short-term trade quietly becoming a long-term hold because it went against you.',
            like: 'A weekend guest who never leaves. Nobody ever decided that.' }
        ],
        close: [
          "Now **screening**, which is how you get from thousands of companies to a handful you'll actually research.",
          "A screen applies your stated criteria to the whole market and hands back what passes. The usual filters: a **liquidity floor**, a **size range**, **sector**, **profitability**, **debt level**, and a **valuation band**.",
          "**Start with liquidity. Always.**",
          "Screen on valuation first and you'll surface wonderful-looking companies that trade a few thousand shares a day with a wide spread. You'll do a fortnight of research on a business you cannot buy without moving the price and cannot sell without giving it back. Module 102 told you why — **an untradeable name isn't a candidate, whatever its numbers say.**",
          "And be clear about what a screen is for:",
          "**A screen does not find winners. It removes what you've decided not to consider.**",
          "Everything that survives still needs the actual work from module 104. The screen just means you're doing that work on twelve companies instead of four thousand."
        ]
      },
      check: [
        { q: 'Which filter should come first in an equity screen?',
          options: ['Valuation', 'Liquidity — an untradeable name is not a candidate whatever its numbers', 'Dividend yield', 'Sector'],
          a: 1,
          why: 'Screening on valuation first surfaces spectacular-looking companies that trade a few thousand shares a day with a wide spread. Liquidity first prevents wasted research.' },
        { q: 'Mixing holding horizons is dangerous because:',
          options: ['It increases commission', 'A losing short-term trade gets silently reclassified as a long-term hold', 'Brokers forbid it', 'It complicates tax'],
          a: 1,
          why: 'This is the most common failure in equities. Naming your horizon in advance is the only reliable defence against rationalising a loser into an investment.' }
      ]
    },

    {
      title: 'Write down why, and how you leave',
      slides: [2, 3],
      teach: {
        lead: [
          "For every position you take, write two things down **before** you buy.",
          "**Why you own it.** And **what would prove you wrong.**",
          "That second half should feel familiar — it's the invalidation rule from module 6, the fifth sentence of the chart narration, applied to a business instead of a chart.",
          "The test of a good thesis is whether it's **checkable**.",
          "**\"Margins will recover above 12% within four quarters\"** is a thesis. You can look it up. It either happened or it didn't, and if it didn't, you know what to do.",
          "**\"It's a good company\"** is not a thesis. It cannot be checked, it can never be wrong, and it will therefore **never tell you to sell.** You can hold something for six years on that sentence while the business quietly deteriorates, and at no point will your own reasoning object.",
          "**Then review your thesis on a schedule — not when the price makes you anxious.** Price moves will drag you into looking at exactly the wrong moments, in both directions."
        ],
        terms: [
          { term: 'Thesis',
            plain: 'Your written reason for holding, and the specific thing that would prove it wrong.',
            like: 'A bet with the terms written down, so you cannot argue about it afterwards.' },
          { term: 'Falsifiable',
            plain: 'Stated so it can actually be checked and found wrong.',
            like: '"Back by six" rather than "back later".' },
          { term: 'Rebalancing',
            plain: 'Restoring your intended sizes after prices have moved things out of shape.',
            like: 'Redistributing the weight in a rucksack that has gone lopsided.' },
          { term: 'Opportunity cost',
            plain: 'What holding this stops you from holding instead.',
            like: 'The seat is taken. Someone better cannot sit there.' }
        ],
        close: [
          "**Four legitimate reasons to sell**, and one that isn't on the list:",
          "**Your thesis broke.** The specific thing you said would prove you wrong happened. Leave. This is why you wrote it down.",
          "**Your stop hit** — for trades rather than investments. Honour it exactly as you always have.",
          "**Something better appeared.** Your capital is finite, and holding one thing prevents holding another. That's a real cost even when the current holding is fine.",
          "**It outgrew its limit.** A winner can breach your 10% concentration cap just by going up. **Trim it back.**",
          "That last one feels wrong every single time — you're selling the thing that's working. But the limit exists to bound gap damage, and **a bigger position means bigger damage regardless of how it got that big.** The market has no memory of the fact that this one was a good idea. A rule that only feels right when it's easy isn't doing any work.",
          "**And the one that isn't an exit rule: \"it's down, I'll wait.\"**",
          "That isn't a decision. It's the absence of one, wearing the costume of patience."
        ]
      },
      check: [
        { q: 'A well-formed thesis:',
          options: ['Explains why the company is excellent', 'States a specific, checkable condition that would prove it wrong', 'Predicts a target price', 'Cites analyst ratings'],
          a: 1,
          why: 'This is the invalidation rule from the forex track applied to a business. "It\'s a good company" can never tell you to sell; a checkable condition can.' },
        { q: 'A holding rose sharply and now exceeds your concentration limit. The rule says:',
          options: ['Let winners run regardless', 'Trim it back toward the limit', 'Sell the whole position', 'Raise the limit'],
          a: 1,
          why: 'The limit bounds gap damage, and a larger position means larger damage regardless of how it got there. Trimming a winner feels wrong, which is when the rule earns its place.' }
      ]
    },

    {
      title: 'Reviewing slowly, and choosing your market',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "Your forex journal recorded **trades**. Your equity journal records **theses and reviews**, because the clock runs completely differently here.",
          "For each holding: why you entered, your thesis, what would prove it wrong, and the outcome of each scheduled review.",
          "**Review quarterly, aligned with company reporting** — not whenever the price moves enough to make you look.",
          "**Keep the compliance column.** Same as before, same question: did I follow my own process, yes or no. It's still the most valuable thing in the whole record.",
          "Now the genuine difficulty of this track, and it's not the maths:",
          "**Feedback here is slow.**",
          "In forex a flawed process showed up within weeks. You took thirty trades in a month and the numbers told you something. **On a multi-month horizon you can hold a broken thesis for two years** before reality forces the issue — and you'll spend that whole time feeling like a patient long-term investor rather than someone who was wrong in January.",
          "**That's exactly why the written record matters more here, not less.** It's the only thing that remembers what you actually thought at the time."
        ],
        terms: [
          { term: 'Review cadence',
            plain: 'How often you formally re-examine each holding, set in advance.',
            like: 'An annual service. It happens on the date, not when the noise gets bad enough.' },
          { term: 'Systematic risk',
            plain: 'Market-wide risk that owning more companies cannot remove.',
            like: 'The tide. It lifts and drops every boat in the harbour.' },
          { term: 'Compliance',
            plain: 'Whether you followed your own process on a given decision.',
            like: 'Did you follow the recipe. Worth knowing before you blame the recipe.' }
        ],
        close: [
          "That's the equities track finished. Let me give you an honest comparison rather than a sales pitch, because you've now done both and you should choose deliberately.",
          "**Forex:** open continuously, extremely liquid, leverage on tap, no ownership of anything, no dividends, shorting as natural as buying, and **fast feedback** — you find out quickly.",
          "**Equities:** exchange hours with gaps in between, genuine ownership, dividends, an entire annual report you can read, awkward shorting, and **slow feedback** — you find out eventually.",
          "**Forex punishes over-leverage. Equities punish over-concentration.**",
          "**Neither is easier.** They fail in different ways, and they suit different temperaments, different timetables, and different amounts of capital. Anyone who tells you one is objectively better is telling you which one they sell.",
          "You don't have to pick one forever. **But do pick which one gets your attention now**, because splitting your focus across two markets you half-follow is worse than committing to either.",
          "Next track is bonds — and that one will change how you read both of these, because interest rates sit underneath everything you've learned so far."
        ]
      },
      check: [
        { q: 'The central difficulty of an equity process compared with forex is:',
          options: ['Higher costs', 'Slower feedback — a flawed process can take years to reveal itself', 'Less information', 'Lower liquidity everywhere'],
          a: 1,
          why: 'In forex a bad process shows within weeks. On a multi-month horizon you can hold a broken thesis for years, which is why written records and scheduled reviews matter more.' },
        { q: 'The honest comparison between forex and equities is:',
          options: ['Equities are safer', 'Forex is more profitable', 'Neither is easier — forex punishes over-leverage, equities punish over-concentration', 'They are identical'],
          a: 2,
          why: 'They fail in different ways and suit different temperaments, timetables and capital levels. Choosing where to focus is about your circumstances, not about which market is superior.' }
      ]
    }
  ];
})();
