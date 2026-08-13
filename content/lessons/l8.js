/* N1 Forex Academy — lessons for Module 8.

   VOICE: Jonathan talking to one student. Two jobs here: kill the belief that
   an indicator can predict, and sell ATR properly — volatility-scaled stops are
   the single most valuable idea in the module and the one students skip. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[8] = [
    {
      title: 'What an indicator actually is',
      slides: [0, 1],
      teach: {
        lead: [
          "Before we touch a single indicator, one sentence that applies to every one of them ever written.",
          "**An indicator is arithmetic performed on prices that have already happened.**",
          "There is no exception to this. Not the free ones, not the £300 ones, not the one with the impressive name. Every one takes prices from the past and does a sum with them.",
          "Which means something important: **no indicator can contain information the chart doesn't already have.** It's all in there already. The indicator is a rearrangement.",
          "So why use them at all? Because a rearrangement can genuinely help.",
          "Think of the rolling seven-day average you see on any news chart. It doesn't know anything the daily numbers don't. But it smooths out the noise so you can actually see which way things are heading — and, crucially, **it gives everyone the same answer.** \"Is it going up?\" is an opinion. \"Is the seven-day average rising?\" is a fact.",
          "**That's what indicators are for: making your judgement consistent. Not replacing it.**"
        ],
        terms: [
          { term: 'Indicator',
            plain: 'A calculation drawn on your chart from prices that already happened.',
            like: 'A rolling average on a news chart. Same data, easier to read, no crystal ball.' },
          { term: 'Trend indicator',
            plain: 'Answers "which way, and how strongly?" Moving averages, MACD.',
            like: 'A compass.' },
          { term: 'Oscillator (momentum)',
            plain: 'Answers "how stretched is this move?" RSI, Stochastic.',
            like: 'A rev counter. How hard the engine is working, not where you are going.' },
          { term: 'Volatility indicator',
            plain: 'Answers "how much movement should I expect?" ATR, Bollinger Bands.',
            like: 'A weather forecast for roughness. No direction, just how bumpy.' },
          { term: 'Lag',
            plain: 'The delay between price moving and the indicator showing it.',
            like: 'Hearing thunder after the lightning. Always behind, by design.' }
        ],
        close: [
          "Those four families are the whole map, and the practical rule that comes out of it is short:",
          "**One from a family is enough. Two from the same family is one opinion counted twice.**",
          "If you have RSI, Stochastic and CCI on a chart, you don't have three views. You have one view wearing three hats. They're all momentum measures built from the same closing prices, so they agree because of how they're built, not because three separate things are true. It's the fake-confluence problem from the last module, and it's harder to spot here because they *look* different.",
          "One note on the fourth family: **volume is weak in forex.** There's no central exchange, so nobody sees the real total — your platform is showing you tick counts from one broker. Useful on shares, don't lean on it in currencies.",
          "So: pick one trend tool. Maybe one volatility tool. Possibly one oscillator. And stop.",
          "**Indicators are there to keep you consistent, not to tell you what to do.**"
        ]
      },
      check: [
        { q: 'Every indicator is fundamentally:',
          options: ['A prediction of future price', 'Arithmetic performed on past prices', 'A measure of order flow', 'A signal from the exchange'],
          a: 1,
          why: 'None contains information the chart does not already have. What they add is consistency and objectivity — genuinely valuable, but not prediction.' },
        { q: 'You have RSI, Stochastic and CCI on one chart. The problem is:',
          options: ['Too many colours', 'All three are momentum oscillators from the same data, so it is one opinion repeated', 'They belong on separate charts', 'There is no problem'],
          a: 1,
          why: 'One from each family — trend, momentum, volatility — gives genuinely different views. Stacking within a family is self-deception.' }
      ]
    },

    {
      title: 'Trend and momentum tools',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "**A moving average is the average closing price over the last N candles.** That's it — that's the whole thing. A 50 EMA is roughly \"the average price over the last fifty periods, weighted so recent ones count more\".",
          "Longer setting: smoother, slower, fewer false alarms, later entries. Shorter setting: faster, noisier, more false alarms. There's no correct answer, only that trade-off.",
          "The honest use of a moving average is as **an objective trend filter.** A rule like \"I only go long when price is above the 50 EMA on the 4-hour\" is one that you and I would apply identically, on any chart, on any day. That's worth a lot — it takes the mood out of deciding what the trend is.",
          "The dishonest use is **crossovers as signals.** Fast line crosses slow line, buy. The problem is arithmetic: both lines are averages of the past, so by the time a 50 crosses a 200 the move has been running for ages. **Crossovers confirm what already happened. They don't signal what's about to.**"
        ],
        terms: [
          { term: 'Moving average',
            plain: 'The average closing price over the last N periods, drawn as a line.',
            like: 'The rolling average on a news chart. Smooths the noise, always a step behind.' },
          { term: 'EMA',
            plain: 'A moving average that weights recent prices more heavily, so it reacts faster.',
            like: 'An average that pays more attention to this week than to last month.' },
          { term: 'RSI',
            plain: 'Compares average gains to average losses over the last N periods, scaled 0 to 100.',
            like: 'A win-to-loss ratio for recent days. High means winning days have dominated.' },
          { term: 'Divergence',
            plain: 'Price makes a new high but the oscillator does not — the push is getting weaker.',
            like: 'A car still speeding up while the engine noise drops. Something has changed.' },
          { term: 'MACD',
            plain: 'The gap between a fast and a slow moving average, plus a line and bars showing that gap.',
            like: 'The distance between two runners. Growing means one is pulling away; shrinking means the gap is closing.' }
        ],
        close: [
          "Now **RSI**, and the single most expensive misunderstanding in retail trading.",
          "RSI above 70 gets labelled \"overbought\" and people read that as \"about to fall\". It doesn't mean that. It means **gains have dominated losses recently** — and in a strong uptrend, that is exactly what you'd expect, for a long time.",
          "RSI can sit above 70 for weeks. Selling because it hit 70 is how people short a trend the entire way up, adding to the position, absolutely certain it's \"due\". A hot streak lasting a while isn't evidence that it must end.",
          "**Better uses:** as a filter — \"only take longs when RSI is above 50\" — and for **divergence**, where price makes a higher high but RSI doesn't.",
          "Even then, be careful what divergence means: **it says momentum is weakening, not that price is turning.** Momentum can fade for a very long time while price grinds higher.",
          "**MACD** is a trend indicator dressed as a momentum one — it's just the gap between two moving averages. The genuinely useful part is the histogram shrinking, which means the two averages are converging and the push is fading. **Stochastic** is faster and noisier and works best in ranges, where hitting an extreme actually means you're at the edge of something.",
          "And don't run RSI, Stochastic and MACD together. You already know why."
        ]
      },
      check: [
        { q: 'The most defensible use of a moving average is:',
          options: ['Taking every crossover as a signal', 'As an objective trend filter, so bias is defined identically every time', 'Predicting where price reverses', 'Replacing structural analysis'],
          a: 1,
          why: 'A moving average is a lagging average of past closes, so it cannot predict, and crossovers arrive late. Its value is that two people would apply the same rule identically.' },
        { q: 'RSI has been above 70 for fifteen candles in a strong uptrend. This means:',
          options: ['A reversal is overdue', 'The trend is strong — persistent overbought readings are what strong trends look like', 'The settings are wrong', 'Volatility is collapsing'],
          a: 1,
          why: 'RSI compares average gains to average losses; in a strong uptrend gains dominate for long stretches. Fading that is a known way to lose steadily.' }
      ]
    },

    {
      title: 'ATR — the one most people skip',
      slides: [5, 6],
      teach: {
        lead: [
          "If you take one thing from this whole module, take this one. It's the least glamorous indicator on the list and it will do more for you than the rest combined.",
          "**ATR — Average True Range — is simply the average size of recent candles.** How far this thing typically travels in a period. No direction, no signal, no prediction. Just: how bumpy is it right now.",
          "Here's why it matters. Beginners use fixed stops — \"I always use 25 pips\". Think about what that actually means.",
          "On EUR/USD during Tokyo, an hourly candle might be 11 pips. Your 25-pip stop is more than twice the size of the whole hour — enormous, far more room than the trade needs, and you're risking more than you had to.",
          "On gold at the New York open, an hourly candle might be 340. Your 25-pip stop is a rounding error. **It will be hit by completely ordinary noise, on a trade that was right.**",
          "Same number. Wildly wrong in both directions. It's one size of shoe for everybody."
        ],
        terms: [
          { term: 'ATR',
            plain: 'The average size of recent candles, including gaps. How much this thing normally moves.',
            like: 'Measuring the room before you buy the rug. Obvious, and people still skip it.' },
          { term: 'Volatility-scaled stop',
            plain: 'A stop set as a multiple of ATR rather than a fixed number of pips.',
            like: 'Clothes sized to the person, not one size for the whole family.' },
          { term: 'Bollinger Bands',
            plain: 'A moving average with a band above and below it, set by how volatile things have been.',
            like: 'Lane markings that widen on a bumpy road and narrow on a smooth one.' },
          { term: 'Squeeze',
            plain: 'The bands pulling in tight, meaning movement has gone quiet.',
            like: 'The air going still before a storm. Something is coming; nobody said which way.' }
        ],
        close: [
          "So the method: **set your stop as a multiple of ATR** — 1.5× or 2× is common — placed beyond the structure that would prove you wrong. Then **size the position from that stop**, which is the module after next.",
          "The same pair needs a different stop on different days, and ATR is what tells you which day you're in. That's the whole idea.",
          "It's also a good sanity check on targets. If ATR says the typical daily move is 70 pips and you're 50 in already, a target another 80 away is not going to be reached today.",
          "**Bollinger Bands** are a related idea — a moving average with bands that widen when things get lively and pull in when they go quiet.",
          "The mistake is treating a band touch as a signal. **Price touching the upper band does not mean sell.** In a strong trend price will walk along that band for days, and every touch will look like a shorting opportunity to someone who hasn't been told.",
          "**The useful part is the squeeze.** When the bands pull in tight, movement has compressed — and compression tends to resolve into expansion. That tells you something is probably coming. It tells you **absolutely nothing about which way.**",
          "Get direction from structure, which is what modules 6 and 7 were for. Use the squeeze for timing. Don't ask either one to do the other's job."
        ]
      },
      check: [
        { q: 'EUR/USD ATR is 11 pips on H1; gold ATR is 340. You use a fixed 25-pip stop on both. What is wrong?',
          options: ['Nothing — consistency is good', 'It is over 2× ATR on EUR/USD but a fraction of ATR on gold, so it is too loose on one and certain to be hit on the other', 'Gold ATR must be miscalculated', 'Fixed stops are always correct'],
          a: 1,
          why: 'A fixed pip stop ignores how much the instrument actually moves. Scale the stop to a multiple of ATR, then size the position from that stop.' },
        { q: 'A Bollinger Band squeeze tells you:',
          options: ['Which direction price will break', 'That volatility has compressed and expansion is likely — but not which way', 'That price will touch the upper band', 'That the trend has ended'],
          a: 1,
          why: 'The squeeze is a timing tool with no directional content. Get direction from structure and use the squeeze for when.' }
      ]
    },

    {
      title: 'How to judge any indicator someone sells you',
      slides: [7, 8, 9],
      teach: {
        lead: [
          "You will be sold indicators for the rest of your trading life. Here's a test that takes five minutes and rules out most of them.",
          "**One: what does it compute?** If whoever is selling it can't tell you in one plain sentence, walk away. \"Proprietary algorithm\" means either they don't know or they don't want you to.",
          "**Two: does it repaint?** This is the big one.",
          "A repainting indicator **changes its own history after the fact.** It prints an arrow, price does something else, and the arrow quietly moves or vanishes. Scroll back through the chart and every signal looks perfect — because every wrong one was erased.",
          "It's a weather forecaster who goes back and edits yesterday's forecast to match what actually happened, then shows you their flawless record.",
          "**You cannot detect this by looking at the historical chart.** That's exactly what's been tampered with. The only valid test is bar-by-bar replay: step forward one candle at a time and watch whether a printed signal ever moves. **This single test eliminates most 'holy grail' indicators**, and it's why a near-perfect history should make you suspicious rather than excited."
        ],
        terms: [
          { term: 'Repainting',
            plain: 'An indicator that changes its past signals after the fact, so its history looks far better than its live behaviour.',
            like: 'A forecaster editing yesterday\'s forecast to match the weather, then showing you a perfect record.' },
          { term: 'Curve fitting',
            plain: 'Tuning settings until they fit past data beautifully, at the cost of working on anything new.',
            like: 'A key filed down to one worn lock. Opens that door perfectly, no other door at all.' },
          { term: 'Robustness',
            plain: 'Whether an idea still works when you nudge its settings.',
            like: 'A recipe that survives being a bit off with the quantities. If it only works to the gram, it was luck.' },
          { term: 'Bar-by-bar replay',
            plain: 'Stepping through history one candle at a time, so you see signals as they appeared live.',
            like: 'Watching the match rather than reading the edited highlights.' }
        ],
        close: [
          "**Three: how many settings does it have?** Every adjustable number is another opportunity to fit it to the past. Two settings is a tool. Nine is a machine for fooling yourself.",
          "**Four: is it robust?** Take whatever settings are recommended and change them by 20% each way. If the results collapse, the setting was fitted to past noise — it was a key filed to one lock.",
          "This is why a rule that works with a 50 EMA but fails with 45 or 55 is a warning, not a discovery. **A genuine effect survives a nudge.** A sharp peak at exactly one number is the signature of curve fitting, and it will not survive contact with next month.",
          "**Five: which family is it in?** If you already have a trend tool, you don't need another trend tool with a different name.",
          "Here's the setup I'd actually recommend, and it's deliberately boring:",
          "**One trend filter** — a single 50 EMA, used only to define bias. **One volatility measure** — ATR(14), for stop distance and target checks. **Optionally one oscillator** — RSI(14), as a filter or for divergence, never on its own.",
          "Three indicators, three different families, and that's the lot. The chart is your primary source. Everything on top of it is there to stop you being inconsistent — not to make the decision for you."
        ]
      },
      check: [
        { q: 'An indicator\'s historical chart shows arrows calling almost every turn perfectly. Suspect:',
          options: ['You have found a superior tool', 'It repaints — it relocates signals after the fact, so its history will never match live behaviour', 'The timeframe is too high', 'Unusual broker data'],
          a: 1,
          why: 'Near-perfect history is the signature of repainting. The only valid test is bar-by-bar replay: watch whether a printed signal ever moves or disappears.' },
        { q: 'A rule works with a 50 EMA but fails with 45 or 55 over the same data. This means:',
          options: ['50 is optimal and should be used', 'It is likely curve-fitted — a robust idea survives small parameter changes', 'The other settings were tested wrongly', 'A fourth indicator is needed'],
          a: 1,
          why: 'If a small change destroys the result, the parameter was fitting historical noise. Robustness across nearby settings is far better evidence than a sharp peak at one.' }
      ]
    }
  ];
})();
