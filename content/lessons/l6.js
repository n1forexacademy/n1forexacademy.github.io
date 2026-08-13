/* N1 Forex Academy — lessons for Module 6.

   VOICE: Jonathan talking to one student. This is the first chart-reading
   module, so the priority is a mechanical definition of trend the student can
   apply the same way twice — and the narration script, which is the habit the
   rest of the course leans on. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[6] = [
    {
      title: 'Reading a single candle',
      slides: [0, 1],
      teach: {
        lead: [
          "A candlestick looks like a strange little symbol until someone tells you it's only four numbers. Then it never looks strange again.",
          "Every candle covers one slice of time — an hour, a day, whatever you've chosen — and records four things: **where price opened, the highest it got, the lowest it got, and where it closed.** That's the lot. Everything else people say about candles is interpretation on top of those four numbers.",
          "The thick part in the middle is the **body**, stretching from open to close. The thin lines poking out are the **wicks**, reaching to the high and the low.",
          "Think of one candle as the score of a round in a boxing match. The body tells you who was ahead when the bell went. The wicks tell you how far each fighter got before being pushed back.",
          "**A long upper wick means buyers shoved price up there and couldn't hold it.** They tried, they got there, they lost the ground. That's genuinely useful information — someone was willing to sell hard at that price."
        ],
        terms: [
          { term: 'Body',
            plain: 'The thick part, from where the period opened to where it closed.',
            like: 'The final score of the round. Big body, decisive round.' },
          { term: 'Wick (or shadow)',
            plain: 'The thin line to the highest and lowest prices reached.',
            like: 'How far a punch landed before being driven back. Ground taken and then lost.' },
          { term: 'Pin bar / hammer',
            plain: 'A candle with a tiny body and one long wick — price went somewhere and was firmly rejected.',
            like: 'Touching a hot pan. The hand went there once and came straight back.' },
          { term: 'Engulfing candle',
            plain: 'A body that completely covers the previous one — sentiment flipped inside a single period.',
            like: 'A crowd changing its mind all at once. Loud, and hard to miss.' },
          { term: 'Doji',
            plain: 'Open and close in almost the same place. Neither side got anywhere.',
            like: 'A tug of war where the rope ends up exactly where it started.' }
        ],
        close: [
          "Here's the part most people miss, and it's the single most useful thing in this lesson.",
          "**Where the close sits inside the range matters more than the colour.** A candle that opened low, dropped a long way, then finished right up near its high is a strong candle — even though it may still be red. Buyers took the period back. Colour tells you direction; **the close relative to the range tells you conviction.**",
          "And now the honest bit about patterns, because the internet will drown you in them.",
          "**A pattern only means something where the location already mattered.** A pin bar sitting at a level price has bounced off three times before is worth your attention. The identical pin bar in the middle of nowhere is just a candle that happened to have a long wick — and on any chart you'll find dozens of them.",
          "So learn the handful above, then spend your attention on *where* they appear rather than collecting more names. Patterns don't predict anything. They're a compressed record of what already happened, and they nudge the odds slightly — but only in the right place."
        ]
      },
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
      title: 'Trend is a sequence, not a feeling',
      slides: [2, 3],
      teach: {
        lead: [
          "Ask ten beginners whether a chart is in an uptrend and you'll get ten answers, because most of them are answering from the shape of the picture rather than from a rule.",
          "So here's the rule, and it's mechanical enough that two people should reach the same answer.",
          "**An uptrend is a sequence of higher highs AND higher lows.** Both. In order. **A downtrend is lower highs and lower lows.** If neither sequence holds — if the peaks and troughs are roughly level — **it's a range**, and you should say so rather than squint until it looks like a trend.",
          "Picture a staircase going up. The question isn't \"am I higher than I was ten minutes ago\" — that's just the endpoints. The question is **\"does each step land higher than the one before it?\"** That's a trend.",
          "This matters because if you don't define trend structurally, you'll define it emotionally: you'll see an uptrend when you want to buy."
        ],
        terms: [
          { term: 'Swing high',
            plain: 'A peak — a point with lower prices on both sides of it.',
            like: 'The top of a step on the staircase.' },
          { term: 'Swing low',
            plain: 'A trough — a point with higher prices on both sides of it.',
            like: 'The corner where the next step begins.' },
          { term: 'Range / consolidation',
            plain: 'Price bouncing between roughly level boundaries with no clear sequence either way.',
            like: 'Pacing a corridor. Movement, but you are not going anywhere.' },
          { term: 'Impulse',
            plain: 'A strong directional push — big bodies, small wicks, little hesitation.',
            like: 'Someone taking the stairs two at a time.' }
        ],
        close: [
          "The practical difficulty is deciding **which wiggles count as swings.** Charts are full of tiny bumps, and if you mark every one you'll end up with noise.",
          "My filter: **if you have to squint to see it, ignore it.** A swing that matters produced a visible reaction — price moved away from it and other people clearly responded.",
          "Also, mark swings on the timeframe you're actually analysing. If you're reading the 4-hour chart, use 4-hour swings. Borrowing swings from a lower chart is how an analysis turns into a mess.",
          "And here's the thing I'd most like you to take from this lesson: **consistency beats correctness.**",
          "A student who marks swings the same way every single time will build genuine pattern recognition, even if their rule isn't perfect. A student who adjusts the rule to suit whatever the chart is doing today learns nothing at all, because they never see the same thing twice.",
          "So write your swing rule down in your own words. Then apply it even when you don't like the answer it gives."
        ]
      },
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
      title: 'Is it a pullback, or is it over?',
      slides: [4],
      teach: {
        lead: [
          "This is the distinction that costs beginners the most money, so read it twice.",
          "Price is in an uptrend. It drops. Sharply. Your position is in the red and it feels like the whole thing has turned.",
          "**Has it?** There's an actual answer, and it isn't a matter of opinion.",
          "In an uptrend, the trend is intact for as long as each dip **holds above the previous swing low.** Each step still landing higher than the last. Until price *closes* below the most recent significant swing low, what you're looking at is a **pullback** — no matter how unpleasant it feels while it's happening.",
          "When price does close below that low, **the structure has broken.** The sequence of higher lows is finished. That's not an opinion either; it's a thing that either happened or didn't."
        ],
        terms: [
          { term: 'Pullback (retracement)',
            plain: 'A move against the trend that does not break the structure.',
            like: 'Stopping halfway up the stairs to catch your breath. You have not gone back down.' },
          { term: 'Break of structure',
            plain: 'Price closing beyond a previous swing point, ending the sequence that defined the trend.',
            like: 'A step that lands lower than the last landing. The staircase is no longer going up.' },
          { term: 'Reversal',
            plain: 'A genuine change of direction — the old trend ends AND a new sequence starts the other way.',
            like: 'Turning the car round. Braking is not turning round.' }
        ],
        close: [
          "Now the nuance, because people overcorrect once they learn this.",
          "**A single break of structure is not a new downtrend.** It's the *end of the uptrend*. Those are different things.",
          "What comes next might be a downtrend, or a range, or a long stretch of directionless chop that punishes everyone. A new downtrend has to earn the name by building **its own** sequence of lower highs and lower lows. Until it has, you're in a transition, and transitions are where confident people lose money.",
          "Two mistakes, opposite directions, both common:",
          "**Selling into a pullback**, calling it a reversal, when the structure never broke. That's most beginner reversal trades.",
          "**Assuming one break means the market has flipped** and piling in the other way, when in fact price is just wandering.",
          "The discipline is the same in both cases: **say out loud what would have to happen for you to be wrong, and check whether it has actually happened yet.** Not whether it feels like it has."
        ]
      },
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
      title: 'Three timeframes, and saying it out loud',
      slides: [5, 6, 7, 8],
      teach: {
        lead: [
          "You'll flip between chart timeframes constantly, and there's a right way round to do it.",
          "Think of planning a drive. You look at the **country map** to decide which direction you're heading. Then the **town map** to work out where you are within that. Then the **street view** to see exactly where to turn.",
          "Charts work identically:",
          "**The higher timeframe (4-hour or daily) gives you direction.** What's the prevailing structure? This sets your bias and you don't argue with it.",
          "**The middle one (1-hour) gives you location.** Where is price inside that structure — sitting at a level that matters, or floating in open space?",
          "**The lower one (15-minute) gives you timing.** Is there a reason to get in right now?",
          "**Always work top-down, in that order.** Starting at the 15-minute chart and working upward is how you find a signal first and then go hunting for a story that justifies it. That is where a genuinely large share of bad trades come from — and it feels like analysis the whole time you're doing it."
        ],
        terms: [
          { term: 'Timeframe',
            plain: 'How much time each candle represents. M15, H1, H4 and D1 are the set we use.',
            like: 'Zoom level on a map. Same place, different amount of detail.' },
          { term: 'Top-down analysis',
            plain: 'Reading the big picture first and letting it constrain the small one.',
            like: 'Choosing the motorway before choosing the turning. The other order gets you lost.' },
          { term: 'Alignment',
            plain: 'When direction, location and timing all point the same way.',
            like: 'Green lights the whole way. Not required — just much easier when it happens.' },
          { term: 'Invalidation',
            plain: 'The specific price that would prove your idea wrong.',
            like: 'The point on a journey where you admit you took the wrong exit, decided before you set off.' }
        ],
        close: [
          "One thing to get straight: **a lower timeframe never overrules a higher one.** If the 4-hour is in an uptrend and the 15-minute looks like a downtrend, that 15-minute downtrend **is** the pullback. That's not a contradiction — that's what a pullback looks like up close, and it's usually the opportunity rather than the warning.",
          "Now the habit I want you to build, and I'd like you to actually say it out loud, because saying it exposes gaps that thinking it hides.",
          "**Before every single trade, narrate the chart in five sentences:**",
          "**1. Higher timeframe structure.** \"On H4, EUR/USD is in an uptrend — higher highs and higher lows since the 3rd.\"",
          "**2. What just happened.** \"The last swing high was 1.0920 and price has pulled back to 1.0865.\"",
          "**3. Where price is.** \"That pullback is sitting on the old swing high, which should now act as support.\"",
          "**4. The trigger.** \"On M15 there's a bullish engulfing candle right at that level.\"",
          "**5. What would prove me wrong.** \"If price closes below 1.0840, the last higher low is broken and this idea is dead.\"",
          "That fifth sentence is the one that matters most, and it must contain **a specific price**. \"If it goes the other way\" commits you to nothing and gives you nowhere to put a stop.",
          "Do this for every trade for the rest of the course. If you can't produce all five sentences, **you don't have a trade** — you have a feeling, and you've just caught it before it cost you anything."
        ]
      },
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
})();
