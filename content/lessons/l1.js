/* N1 Forex Academy — lessons for Module 1. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[1] = [
    {
      title: 'What you are actually buying',
      slides: [0, 1],
      check: [
        { q: 'You buy GBP/USD. What do you now hold?',
          options: ['Pounds, funded by selling dollars', 'Both pounds and dollars', 'Dollars, funded by selling pounds', 'A share of the UK economy'],
          a: 0,
          why: 'Buying a pair means buying the base currency and selling the quote currency. You profit only if the pound strengthens relative to the dollar.' },
        { q: 'Most daily forex volume comes from:',
          options: ['Retail speculators', 'Commercial payments, hedging and institutional flow', 'Central bank intervention', 'Automated retail robots'],
          a: 1,
          why: 'Speculation is a small slice. Much of the flow comes from businesses and funds acting on need or mandate, not on charts — which is why your analysis cannot move price.' }
      ]
    },
    {
      title: 'How the market is put together',
      slides: [2, 3, 4],
      check: [
        { q: 'Two regulated brokers show slightly different EUR/USD prices at the same moment. Why?',
          options: ['One is manipulating price', 'Forex is decentralised — each broker builds its price from its own liquidity sources and markup', 'Their clocks are out of sync', 'It only happens on demo accounts'],
          a: 1,
          why: 'There is no central exchange and no consolidated tape. Small differences between brokers are normal and expected.' },
        { q: 'What actually makes price move?',
          options: ['Chart patterns completing', 'Resting buy and sell orders being consumed until the next best price is different', 'Indicators crossing', 'Broker servers updating on a timer'],
          a: 1,
          why: 'Price moves when one side is more urgent and eats through the orders resting at the current level. Everything about levels and structure is a way of guessing where that resting interest sits.' }
      ]
    },
    {
      title: 'What a trade costs before you are right',
      slides: [5, 6, 7],
      check: [
        { q: 'You open and immediately close a position, with no price movement. What happens?',
          options: ['You break even', 'You lose the spread — you bought at the ask and sold at the bid', 'You make a tiny rebate', 'The trade is cancelled'],
          a: 1,
          why: 'Every trade begins underwater by the spread, plus any commission. This is why a strategy with a tiny edge can still lose money overall.' },
        { q: 'Which cost hurts a trader holding positions for several weeks the most?',
          options: ['Spread', 'Commission', 'Swap, charged every night the position is open', 'The deposit fee'],
          a: 2,
          why: 'Spread and commission are paid once per trade. Swap compounds nightly, so it punishes long holds specifically. Match your cost structure to your holding period.' }
      ]
    },
    {
      title: 'The honest picture',
      slides: [8, 9, 10],
      check: [
        { q: 'A service advertises "15% monthly returns, guaranteed". What is the clearest problem?',
          options: ['15% is too low to bother with', 'No legitimate trading operation can guarantee a return, because outcomes are uncertain', 'Monthly is the wrong period to quote', 'Nothing, if the results are verified'],
          a: 1,
          why: 'The word "guaranteed" is the giveaway and it is independent of the number. Trading outcomes are probabilistic; a fixed promised return means something other than trading is going on.' },
        { q: 'Published regulatory figures put the share of retail accounts that lose money at roughly:',
          options: ['10–20%', '30–40%', '70–80%', 'Nobody measures it'],
          a: 2,
          why: 'Brokers are legally required to publish this and it consistently sits around 70–80%. Most of that is oversized positions and missing stops, not bad analysis — which is why this course weights risk so heavily.' }
      ]
    }
  ];
})();
