/* N1 Forex Academy — lessons for Module 9. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[9] = [
    {
      title: 'What drives a currency',
      slides: [0, 1],
      check: [
        { q: 'The dominant long-term driver of a currency is:',
          options: ['Chart patterns', 'Interest rates, and especially expectations about where rates are heading', 'Trading volume', 'The number of retail traders holding it'],
          a: 1,
          why: 'Capital flows toward higher expected returns. Expectations matter more than the current level, which is why a central bank statement often moves more than the decision itself.' },
        { q: 'In a risk-off event, capital typically moves toward:',
          options: ['AUD, NZD and emerging currencies', 'USD, JPY and CHF, largely regardless of rate differentials', 'Whichever currency has the highest rate', 'Cryptocurrencies only'],
          a: 1,
          why: 'In stress, the flight to safety overwhelms rate considerations — which is also why correlations tighten sharply exactly when you were relying on diversification.' }
      ]
    },
    {
      title: 'Reading the calendar',
      slides: [2, 3],
      check: [
        { q: 'US inflation prints 3.2% against a 3.5% forecast. Likely dollar reaction?',
          options: ['Rises, because 3.2% is still high', 'Tends to fall — the softer number lowers expectations of further tightening', 'No reaction, inflation is priced in', 'Rises because lower inflation is good news'],
          a: 1,
          why: 'Price is already positioned for the forecast, so the move comes from the surprise. The absolute level carries no new information.' },
        { q: 'An impact rating on a calendar tells you:',
          options: ['Which direction price will go', 'How much volatility to expect, not direction', 'Whether the number will beat forecast', 'How reliable the data is'],
          a: 1,
          why: 'Ratings are about expected movement only. Direction depends on the surprise, and even then the first move is frequently wrong.' }
      ]
    },
    {
      title: 'What news does to your execution',
      slides: [4, 5],
      check: [
        { q: 'Price spikes 40 pips on a release then reverses 70 within five minutes. Most likely because:',
          options: ['The data was revised', 'Algorithms traded the headline instantly while humans read the detail and revisions, producing rapid re-pricing', 'A broker manipulated price', 'A large trader made an error'],
          a: 1,
          why: 'The headline hits the wires first and is traded in milliseconds. Component detail and prior-month revisions take longer to digest and often tell a different story.' },
        { q: 'Normal spread is 1 pip; during NFP it reaches 18 for forty seconds. For a 20-pip stop this means:',
          options: ['Nothing — stops execute on the bid', 'It can be triggered by spread alone, and execution near the spike can cost far more than 20 pips', 'The broker widens the stop automatically', 'The stop is cancelled'],
          a: 1,
          why: 'A stop becomes a market order when its level trades. With an 18-pip spread, both trigger and fill can be far from where you intended.' }
      ]
    },
    {
      title: 'Your news policy',
      slides: [6, 7, 8],
      check: [
        { q: 'The appropriate news policy for a student at this stage is:',
          options: ['Trade the spike for quick profits', 'Avoid — flatten positions and place nothing within about 30 minutes either side of high-impact releases', 'Double size to capture the move', 'Ignore news and rely on technicals'],
          a: 1,
          why: 'Your position sizing assumed normal conditions, and those assumptions are void during a release. Declining a bet where your execution is worst is not timidity.' },
        { q: 'Long EUR/USD, long AUD/USD and short USD/CHF, each at 1%. True exposure?',
          options: ['1%, different instruments', '3% across three markets', 'Close to 3% on one view — all three profit from dollar weakness', '0%, they hedge'],
          a: 2,
          why: 'All three are dollar-negative. A dollar rally hurts all three at once, which is the standard route by which a disciplined trader takes a 3% hit in an hour.' }
      ]
    }
  ];
})();
