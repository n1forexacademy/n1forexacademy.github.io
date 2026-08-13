/* N1 Forex Academy — lessons for Module 106. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[106] = [
    {
      title: 'Indices and funds',
      slides: [0, 1],
      check: [
        { q: 'A capitalisation-weighted index rose 1%. What does that tell you about the average constituent?',
          options: ['Most rose about 1%', 'Very little — a few giants can drive the index while most constituents fall', 'All rose', 'The median rose more'],
          a: 1,
          why: 'Cap weighting means the largest companies dominate the number. Comparing with the equal-weighted version of the same index often reveals a very different picture.' },
        { q: 'An index ETF removes which risk, and leaves which?',
          options: ['Removes all risk', 'Removes single-company risk, leaves market risk entirely intact', 'Removes market risk, leaves company risk', 'Removes currency risk only'],
          a: 1,
          why: 'Diversification within a market eliminates idiosyncratic risk, so no single failure ruins you. Systematic risk remains — when the index falls 30%, so does the fund.' }
      ]
    },
    {
      title: 'Beta and sectors',
      slides: [2, 3],
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
      title: 'Counting real exposure',
      slides: [4, 5],
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
