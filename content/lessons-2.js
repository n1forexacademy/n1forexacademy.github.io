/* N1 Forex Academy — lesson breakdown, Modules 5–12.
   Merges into window.LESSONS defined in lessons.js. Same contract: short
   lessons, a two-question check on that lesson, both must be right. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  /* ================= MODULE 5 — Sessions ================= */
  L[5] = [
    {
      title: 'The four sessions',
      slides: [0, 1],
      check: [
        { q: 'Which window generally has the deepest liquidity and largest ranges?',
          options: ['Tokyo', 'The London / New York overlap', 'Sydney', 'The hour after Friday close'],
          a: 1,
          why: 'Roughly 12:00–16:00 UTC both major centres are open at once, giving the tightest spreads and biggest ranges. Most day-trading setups are designed around it.' },
        { q: 'Tokyo is best described as:',
          options: ['Dead and not worth trading', 'Orderly and range-prone, with levels that tend to hold', 'The most volatile session', 'Identical to London but quieter'],
          a: 1,
          why: 'Narrow ranges and well-respected boundaries suit range and mean-reversion approaches. It is different, not worse — forcing breakout strategies into it produces false breaks.' }
      ]
    },
    {
      title: 'The Asian range and the London break',
      slides: [2],
      check: [
        { q: 'Why does the first break of the Asian range so often fail?',
          options: ['Brokers hunt individual stops', 'The range extremes are obvious to everyone, so stops cluster just beyond them and price is drawn to that resting liquidity', 'London always reverses Asia', 'Indicators are unreliable at that hour'],
          a: 1,
          why: 'Everyone sees the same range and places stops in the same zone. Pushing through fills a large volume of resting orders — which is exactly what a big participant needs to get in.' },
        { q: 'A failed breakout that reverses hard often produces:',
          options: ['A slow drift sideways', 'A faster, further move than a successful break, because trapped traders must exit', 'An exact return to the level and nothing more', 'Lower volatility'],
          a: 1,
          why: 'Trapped breakout traders have stops sitting in the reversal\'s path. Their forced exits add fuel on top of the traders deliberately positioning against the break.' }
      ]
    },
    {
      title: 'Cost, range and reality checks',
      slides: [3, 4],
      check: [
        { q: 'Spread is 1 pip at 14:00 UTC and 3 pips at 03:00. Why does this matter more than it looks?',
          options: ['It does not — 2 pips is trivial', 'Range collapses overnight too, so you pay three times as much to access a fraction of the opportunity', 'Commission triples at night', 'Stops are rejected overnight'],
          a: 1,
          why: 'The two effects compound. Cost relative to available range can rise five or ten times, which is why spread must always be compared to expected range rather than judged alone.' },
        { q: 'EUR/USD averages 70 pips a day and has moved 65 by midday. This suggests:',
          options: ['A trend day is guaranteed', 'The typical daily range is largely spent, so intraday continuation targets deserve scepticism', 'Price must now reverse', 'ADR is irrelevant intraday'],
          a: 1,
          why: 'ADR is an average, not a ceiling — trend days exceed it routinely. But once most of it is spent, the case for another large continuation move weakens. It argues for smaller targets, not for fading.' }
      ]
    },
    {
      title: 'Choosing your window',
      slides: [5, 6, 7],
      check: [
        { q: 'You can only trade during Tokyo. The sensible response is:',
          options: ['Trade breakouts anyway and accept worse results', 'Adopt range and mean-reversion approaches that suit those conditions', 'Give up trading', 'Increase size to compensate for smaller ranges'],
          a: 1,
          why: 'Match the strategy to the hours you actually have. Increasing size to compensate for a smaller range is the single worst available response.' },
        { q: 'Why avoid leaving a tight stop through the daily rollover window?',
          options: ['Trading is suspended', 'Spreads can widen dramatically for a minute or two, triggering stops on spread alone', 'Swap is only charged if a stop exists', 'Orders queue and execute late'],
          a: 1,
          why: 'Around 21:00–22:00 UTC liquidity thins as books are squared. A stop sitting inside that widened spread can fire without the underlying market moving at all.' }
      ]
    }
  ];

  /* ================= MODULE 6 — Reading price ================= */
  L[6] = [
    {
      title: 'Reading a single candle',
      slides: [0, 1],
      check: [
        { q: 'The most informative part of a candle is usually:',
          options: ['Its colour', 'Where the close sits within the range', 'The length of the upper wick alone', 'Its position on the screen'],
          a: 1,
          why: 'A close near the high means buyers won the period regardless of colour. Colour gives direction; the close relative to range gives conviction.' },
        { q: 'A long-legged pin bar forms in open space with no nearby level. How much does it mean?',
          options: ['It is a strong reversal signal wherever it appears', 'Very little — patterns carry information only where the location already mattered', 'It guarantees a move opposite the wick', 'It signals a volatility collapse'],
          a: 1,
          why: 'A rejection is only informative if it happened somewhere participants cared about. In open space it is ordinary fluctuation.' }
      ]
    },
    {
      title: 'Trend as a sequence',
      slides: [2, 3],
      check: [
        { q: 'What structurally defines an uptrend?',
          options: ['Price is higher than last month', 'A sequence of higher swing highs AND higher swing lows', 'A rising moving average', 'More green candles than red'],
          a: 1,
          why: 'Trend is defined by the sequence of swing points, which makes it a mechanical test two people can agree on. Everything else is derived or lagging.' },
        { q: 'You cannot decide which small bounces count as swings. The fix is:',
          options: ['Mark every one to be safe', 'Write a swing rule down and apply it identically every time, even if imperfect', 'Switch to a lower timeframe', 'Use an indicator instead'],
          a: 1,
          why: 'Consistency beats correctness here. A student who marks swings the same way every time builds reliable pattern recognition; one who changes the rule to suit the chart learns nothing.' }
      ]
    },
    {
      title: 'Pullback or reversal',
      slides: [4],
      check: [
        { q: 'In an uptrend price falls sharply but holds above the last higher low. This is:',
          options: ['A confirmed reversal', 'A break of structure', 'A pullback — the trend structure is intact', 'A range'],
          a: 2,
          why: 'Until price closes below the most recent significant swing low, the sequence of higher lows is unbroken, however uncomfortable the decline feels.' },
        { q: 'A single break of structure means:',
          options: ['A new downtrend has begun', 'The old uptrend has ended — a new trend still needs its own sequence of lower highs and lows', 'Price will retrace to the start', 'Nothing at all'],
          a: 1,
          why: 'The break ends the previous trend. What follows may be a new trend, a range, or chop. Treating the break itself as a new trend is how people get caught in the transition.' }
      ]
    },
    {
      title: 'Timeframes and narration',
      slides: [5, 6, 7, 8],
      check: [
        { q: 'H4 is in a clear uptrend but M15 shows a downtrend. What is happening?',
          options: ['The chart is untradeable', 'M15 overrules H4 because it is more current', 'The M15 downtrend is the pullback within the H4 uptrend — often the opportunity', 'One chart has a data error'],
          a: 2,
          why: 'A pullback on the higher timeframe IS a downtrend up close. That is the normal relationship and where with-trend entries come from.' },
        { q: 'The final step of the chart narration must always contain:',
          options: ['A profit target', 'The candlestick pattern name', 'A specific price at which the idea is proven wrong', 'The expected win probability'],
          a: 2,
          why: 'Stating invalidation as a specific price before entry gives you a meaningful stop and forces you to admit the trade can fail. "If it goes the other way" commits to nothing.' }
      ]
    }
  ];

  /* ================= MODULE 7 — Levels ================= */
  L[7] = [
    {
      title: 'Why levels work',
      slides: [0, 1, 2],
      check: [
        { q: 'Price reacts at a previous swing high because:',
          options: ['The number has mathematical significance', 'Resting orders accumulate there — earlier sellers, break-even buyers, and stops from shorts', 'Brokers program reactions', 'It is purely self-fulfilling with no other cause'],
          a: 1,
          why: 'Levels work because of order inventory. That framing also explains why they weaken with repeated testing — each test consumes some of the resting orders.' },
        { q: 'A level has been tested five times and held each time. This suggests:',
          options: ['It is extremely strong and will hold again', 'Each test consumed resting orders, so it is likely weaker now and increasingly likely to break', 'It should be redrawn', 'Nothing can be inferred'],
          a: 1,
          why: 'This contradicts the common belief that more touches means stronger. Repeated tests without a strong move away often mean the opposing side is absorbing supply.' }
      ]
    },
    {
      title: 'Role reversal',
      slides: [3, 4],
      check: [
        { q: 'Resistance at 1.0900 breaks impulsively and price returns to it two hours later. Most likely:',
          options: ['The break failed and price will keep falling', 'A role reversal — old resistance being retested as support', 'The level was never valid', 'Price is ranging'],
          a: 1,
          why: 'An impulsive break with a prompt retest is the classic flip. Both qualifiers matter: a grinding break with a slow return is more often a failed break.' },
        { q: 'Which supply or demand zone tends to be strongest?',
          options: ['One tested many times', 'A fresh zone that has not been revisited', 'The oldest one on the chart', 'One drawn on the lowest timeframe'],
          a: 1,
          why: 'Each return consumes remaining inventory. A fresh zone still has its unfilled orders intact — the same logic as levels weakening with repeated tests.' }
      ]
    },
    {
      title: 'Where the stops sit',
      slides: [5, 6],
      check: [
        { q: 'Where should you avoid placing a stop?',
          options: ['Below a demand zone', 'Exactly at the round number just beyond an obvious high, where stops visibly cluster', 'On a higher-timeframe level', 'More than 20 pips from entry'],
          a: 1,
          why: 'Stops cluster just beyond obvious highs, lows and round numbers, and that concentration attracts a sweep. Measure typical sweep distance and sit beyond it.' },
        { q: 'A large participant needs to buy heavily. Where do they find sellers?',
          options: ['At the lowest price of the day', 'Where stops from long positions will fire, below an obvious low', 'By waiting for a quiet session', 'From their own broker'],
          a: 1,
          why: 'They need a counterparty. Clustered stops provide the volume. This is arithmetic, not conspiracy — and reframing it that way turns paranoia into a placement decision.' }
      ]
    },
    {
      title: 'Confluence that means something',
      slides: [7, 8],
      check: [
        { q: 'RSI oversold, Stochastic oversold and MACD turning up. How many independent confluences?',
          options: ['Three', 'Four, counting price', 'Essentially one — all three are momentum measures from the same price series', 'Zero'],
          a: 2,
          why: 'Independence is the whole point. Three oscillators computed from the same closes agree almost by construction — one observation counted three times.' },
        { q: 'A great level with no entry trigger is:',
          options: ['Still a trade', 'Not a trade — location and timing are separate decisions', 'A reason to enter at market', 'A reason to widen the stop'],
          a: 1,
          why: 'Confluence improves location, not certainty. It tells you where to look, never whether this particular trade will work.' }
      ]
    }
  ];

  /* ================= MODULE 8 — Indicators ================= */
  L[8] = [
    {
      title: 'What indicators actually are',
      slides: [0, 1],
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
      title: 'Volatility — the underused half',
      slides: [5, 6],
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
      title: 'Judging any new indicator',
      slides: [7, 8, 9],
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

  /* ================= MODULE 9 — Fundamentals ================= */
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

  /* ================= MODULE 10 — Risk ================= */
  L[10] = [
    {
      title: 'The order of operations',
      slides: [0, 1],
      check: [
        { q: 'Account $8,000, risking 1%, GBP/USD, structural stop 45 pips away. Lot size?',
          options: ['0.18', '1.78', '0.045', '0.80'],
          a: 0,
          why: '$80 risk ÷ (45 pips × $10) = 0.178, rounded to 0.18. The stop came from the chart first and the lot size fell out of it — never the reverse.' },
        { q: 'Position size should be:',
          options: ['Chosen based on confidence', 'An output of stop distance and risk percentage', 'The largest the margin allows', 'Kept constant regardless of stop'],
          a: 1,
          why: 'If you ever find yourself choosing a lot size, you have skipped a step. Confidence is uncorrelated with outcome and peaks before the worst trades.' }
      ]
    },
    {
      title: 'Stops, and how much to risk',
      slides: [2, 3],
      check: [
        { q: 'Price moves toward your stop. You should:',
          options: ['Move the stop further away', 'Add to the position to improve the average', 'Nothing — the stop marks where the idea is wrong, and that has not changed', 'Close half and move the stop'],
          a: 2,
          why: 'Moving a stop converts a planned, sized loss into an unplanned one. Nearly every catastrophic retail loss involves a stop that was moved or a loser that was added to.' },
        { q: 'Ten consecutive losses at 1% risk costs roughly:',
          options: ['1%', '9.6%', '25%', '50%'],
          a: 1,
          why: 'About 9.6% — uncomfortable and entirely survivable. At 10% risk the same streak costs 65% and needs 186% to recover. Ten losses in a row is normal; plan for it.' }
      ]
    },
    {
      title: 'Expectancy over win rate',
      slides: [4, 5, 6],
      check: [
        { q: 'A trader wins 70% of trades but loses money overall. How?',
          options: ['Impossible', 'Their losses are much larger than their wins — expectancy depends on size of outcomes, not just frequency', 'The broker is manipulating results', 'Wrong pairs'],
          a: 1,
          why: 'At 70% wins of 0.5R and 30% losses of 2R, expectancy is −0.25R. This is the classic profile of taking profits quickly and letting losers run.' },
        { q: 'You lose 50% of your account. What return gets you back to level?',
          options: ['50%', '75%', '100%', '150%'],
          a: 2,
          why: 'Halving means the remainder must double. This asymmetry is the mathematical argument for small risk, not a matter of temperament.' }
      ]
    },
    {
      title: 'Portfolio limits and ruin',
      slides: [7, 8, 9, 10],
      check: [
        { q: 'Why does a martingale system eventually fail?',
          options: ['Brokers ban it', 'Doubling after each loss needs exponentially growing capital, and every finite account eventually meets a streak it cannot fund', 'Spreads are too wide', 'It does not, given a large enough account'],
          a: 1,
          why: 'Funding an n-loss streak needs roughly 2ⁿ units of capital. It produces a long run of small wins then one total loss — which is why its equity curve looks flawless until the end.' },
        { q: 'Beyond risk per trade, a complete risk policy must also specify:',
          options: ['Only the instruments traded', 'Maximum total open risk, a daily stop, and how correlated positions are counted', 'The preferred indicator settings', 'Which broker to use'],
          a: 1,
          why: 'Per-trade risk is only half of it. Daily stops matter most because the urge to trade is strongest right after a loss, when judgement is worst.' }
      ]
    }
  ];

  /* ================= MODULE 11 — Strategy ================= */
  L[11] = [
    {
      title: 'Choosing an approach that fits',
      slides: [0, 1],
      check: [
        { q: 'You can only trade during Tokyo. Which archetype fits best?',
          options: ['Breakout trading', 'Mean reversion or range trading', 'Momentum continuation on the daily', 'News trading'],
          a: 1,
          why: 'Tokyo produces compressed ranges with respected boundaries — good for fading extremes, poor for breakouts. Match the archetype to the hours you actually have.' },
        { q: 'A brilliant strategy you cannot execute in your available hours is:',
          options: ['Still worth using', 'Worth less than an ordinary one you can execute consistently', 'Fine if you check charts at night', 'Best automated immediately'],
          a: 1,
          why: 'Fit matters more than quality. Most "the strategy stopped working" stories are really a mismatch between the approach and the trader\'s timetable.' }
      ]
    },
    {
      title: 'The five components',
      slides: [2, 3, 4],
      check: [
        { q: 'Which is a properly specified entry trigger?',
          options: ['Enter when the trend looks strong', 'Enter on an M15 bullish engulfing candle closing above the demand zone high', 'Enter when momentum builds', 'Enter when several indicators align'],
          a: 1,
          why: 'It names the timeframe, the pattern and the precise condition, so two people would enter at the same moment. The others get resolved by whatever you feel at the time.' },
        { q: 'A setup missing its invalidation component:',
          options: ['Is fine if the target is clear', 'Cannot be tested or followed under pressure', 'Only matters for beginners', 'Can use a fixed pip stop instead'],
          a: 1,
          why: 'Without a defined invalidation there is no stop location, no position size, and no way to measure the setup afterwards. All five components or it is not yet a setup.' }
      ]
    },
    {
      title: 'Specificity and management',
      slides: [5, 6],
      check: [
        { q: 'The handover test — giving your plan to someone else — is valuable because:',
          options: ['It proves the strategy is profitable', 'Every disagreement exposes an ambiguity you would have resolved by improvising', 'Regulators require it', 'It speeds up backtesting'],
          a: 1,
          why: 'You cannot detect your own ambiguities; you fill them in automatically. Note what it does not do: it says nothing about whether the strategy makes money.' },
        { q: 'Adding partial exits and a trailing stop:',
          options: ['Always improves results', 'Reduces variance but often reduces expectancy too — the trade-off must be measured', 'Only affects commission', 'Simplifies the plan'],
          a: 1,
          why: 'Cutting winners early caps the large outcomes that carry a trend-following edge while doing nothing about losers. Measure with and without before committing.' }
      ]
    },
    {
      title: 'Keeping it testable',
      slides: [7, 8, 9],
      check: [
        { q: 'Your backtest improved when you excluded Tuesdays. You should:',
          options: ['Add the rule, the data supports it', 'Reject it unless there is a mechanism explaining why Tuesdays differ — otherwise it is overfitting', 'Add it for one instrument only', 'Test Wednesdays too'],
          a: 1,
          why: 'Reason versus evidence. "No trading through rollover" has a mechanism; "no Tuesdays" has only a backtest, and on limited data that is very likely coincidence.' },
        { q: 'Why lock a plan for a set number of trades before revising it?',
          options: ['Because changing it is forbidden', 'Because a plan modified after every loss generates no usable information about any version of it', 'Because brokers require consistency', 'To reduce commission'],
          a: 1,
          why: 'Evaluation needs a stable thing to evaluate. Rules changing mid-sample produce a mixture of several systems and tell you nothing about any of them.' }
      ]
    }
  ];

  /* ================= MODULE 12 — Proving it ================= */
  L[12] = [
    {
      title: 'Why backtests lie',
      slides: [0, 1],
      check: [
        { q: 'You scroll back through history and your strategy looks highly profitable. The problem:',
          options: ['Nothing, this is how strategies are validated', 'The future was visible, so hindsight made setups obvious and failures look avoidable', 'The period was too short', 'You should use a higher timeframe'],
          a: 1,
          why: 'With the outcome visible you unconsciously select the instances that worked and skip the ambiguous ones. Bar replay with rules locked beforehand is the only honest manual method.' },
        { q: 'When backtesting, you should also log:',
          options: ['Only the winning trades', 'Every instance where the conditions were met, including ones you skipped and why', 'Just the final profit figure', 'Nothing until the test is complete'],
          a: 1,
          why: 'The skipped instances are where the plan\'s ambiguity lives. A high skip count means the rules are not specific enough — the fix is in the plan, not the trader.' }
      ]
    },
    {
      title: 'Measuring properly',
      slides: [2, 3],
      check: [
        { q: 'Which metric should you examine first?',
          options: ['Total profit', 'Win rate', 'Maximum drawdown', 'Number of winning months'],
          a: 2,
          why: 'If you could not have sat through the drawdown, the strategy is unusable regardless of its profit — you would have abandoned it at the worst point.' },
        { q: 'In a forward test, following the rules and losing is:',
          options: ['A failure', 'A better outcome at this stage than breaking them and winning', 'Identical to breaking them and losing', 'A reason to change the plan immediately'],
          a: 1,
          why: 'Profiting by breaking rules teaches that breaking rules works — far more expensive long term than an honest losing sample.' }
      ]
    },
    {
      title: 'The journal that finds problems',
      slides: [4, 5],
      check: [
        { q: 'Your journal shows compliant trades at +0.3R and non-compliant at −0.8R. This tells you:',
          options: ['The plan is broken and needs rewriting', 'The plan has an edge and the problem is execution discipline', 'You need more indicators', 'The sample is meaningless'],
          a: 1,
          why: 'This split separates two problems that feel identical from the inside. Compliant trades performing better means the fix is mechanical countermeasures, not a new plan.' },
        { q: 'The most valuable column in a trading journal is:',
          options: ['Entry price', 'Whether you followed the plan — yes or no', 'The indicator readings', 'Time of day'],
          a: 1,
          why: 'It is what turns a diary into a diagnostic. Sorting by it and comparing expectancy is the single most informative analysis a retail trader can run on their own data.' }
      ]
    },
    {
      title: 'Psychology and automation',
      slides: [6, 7, 8, 9, 10],
      check: [
        { q: 'The biggest risk of relying on discipline to follow your rules:',
          options: ['Discipline is unnecessary with a good strategy', 'Willpower is finite and degrades under stress, fatigue and loss — exactly when rules matter most', 'It slows execution', 'It makes journaling harder'],
          a: 1,
          why: 'Design the process so it does not require you at your best: pre-set stops and targets, hard daily stops, checklists. Make the correct action the default.' },
        { q: 'An EA shows a smooth rising equity curve with tiny drawdown. Check first:',
          options: ['The report colour scheme', 'Whether every position carries a stop loss — martingale and grid systems produce exactly this curve until the sequence that ends them', 'Trades per day', 'Whether it works on other pairs'],
          a: 1,
          why: 'A suspiciously smooth curve is the signature of a system that never realises losses. Examine the position-sizing logic before anything else.' }
      ]
    }
  ];
})();
