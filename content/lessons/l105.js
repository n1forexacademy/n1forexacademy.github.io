/* N1 Forex Academy — lessons for Module 105. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[105] = [
    {
      title: 'The earnings cycle',
      slides: [0, 1],
      check: [
        { q: 'A company beats on revenue and earnings, and the share falls 9%. Most likely:',
          options: ['The market is irrational', 'Guidance was weak, and the beat was already priced in', 'The results were fraudulent', 'A trading error'],
          a: 1,
          why: 'Price is positioned for consensus before the release. Guidance describes the future, which is what the market prices — the same mechanism as economic surprises in the forex track.' },
        { q: 'Most companies report outside trading hours. The consequence is:',
          options: ['The move is smaller', 'The reaction arrives as an overnight gap that no stop protects against', 'You can exit during the announcement', 'Spreads narrow'],
          a: 1,
          why: 'The exchange is shut when the news lands. Your stop fills at the gapped open, which is why scheduled earnings are a sizing decision rather than a trading opportunity.' }
      ]
    },
    {
      title: 'Corporate actions and surprises',
      slides: [2, 3],
      check: [
        { q: 'A 4-for-1 stock split turns your 100 shares into 400. Your holding is now worth:',
          options: ['Four times as much', 'The same — the price adjusts proportionally', 'A quarter as much', 'It depends on the dividend'],
          a: 1,
          why: 'A split divides the same claim into more pieces. It can improve liquidity and accessibility, but nothing about the business or the value of your stake changed.' },
        { q: 'Which event typically produces the largest single-day fall?',
          options: ['A scheduled earnings miss', 'An unscheduled profit warning', 'A dividend cut', 'A stock split'],
          a: 1,
          why: 'Scheduled results are partly anticipated and hedged. An unscheduled warning arrives with no positioning, and repricing is immediate and severe.' }
      ]
    },
    {
      title: 'Your events policy',
      slides: [4, 5],
      check: [
        { q: 'The non-negotiable part of an events policy is:',
          options: ['Always closing before earnings', 'Always knowing the earnings date before opening a position', 'Never holding overnight', 'Trading only after results'],
          a: 1,
          why: 'Holding through earnings on a properly sized unleveraged position is defensible. Not knowing the date is negligence rather than risk-taking, and checking takes ten seconds.' },
        { q: 'You ignore the paperwork for a rights issue. What happens?',
          options: ['Nothing, they are optional and harmless', 'You are diluted — others bought discounted new shares and your stake shrinks', 'Your shares are sold', 'You get the discount anyway'],
          a: 1,
          why: 'A rights issue lets existing holders maintain their proportion by buying discounted shares. Declining means the company is divided into more pieces and your slice is smaller.' }
      ]
    }
  ];
})();
