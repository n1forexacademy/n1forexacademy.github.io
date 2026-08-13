/* N1 Forex Academy — lessons for Module 9.

   VOICE: Jonathan talking to one student. The exam-results analogy carries the
   whole actual-vs-forecast idea, and the umbrella/raincoat/wellington shops
   carry hidden correlation — which is the mechanism by which a careful student
   takes a 3% hit in an hour while following every rule. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[9] = [
    {
      title: 'What actually moves a currency',
      slides: [0, 1],
      teach: {
        lead: [
          "Charts tell you what price is doing. This lesson is about **why** it does it over weeks and months, and it comes down to one thing more than any other.",
          "**Interest rates.**",
          "Think about your own savings. If one bank pays 1% and another pays 5%, you move your money. Now scale that up to pension funds and banks moving billions, and add one step: **to put money in another country's higher-paying accounts, you first have to buy that country's currency.** That buying is what pushes it up.",
          "So money flows toward higher returns, and currency demand follows the money.",
          "But here's the part that catches people out. **It isn't the current rate that matters most — it's where rates are expected to go.**",
          "It's like a football transfer. The price moves on the rumour, weeks before anything is signed. By the time the announcement comes, everyone who was going to react has already reacted.",
          "That's why a central bank *hinting* at future rises often moves a currency more than an actual rise everyone saw coming — and why the **statement and press conference** usually matter more than the decision itself."
        ],
        terms: [
          { term: 'Central bank',
            plain: 'The institution that sets a country\'s interest rate — the Fed, the ECB, the Bank of England, the Bank of Japan.',
            like: 'The body that decides what every savings account in the country roughly pays.' },
          { term: 'Hawkish',
            plain: 'Leaning towards higher rates. Usually good for the currency.',
            like: 'A hawk — sharp, tightening its grip.' },
          { term: 'Dovish',
            plain: 'Leaning towards lower rates. Usually bad for the currency.',
            like: 'A dove — soft, easing off.' },
          { term: 'Rate differential',
            plain: 'The gap between two countries\' interest rates. This explains most multi-month currency trends.',
            like: 'The difference between two banks\' savings rates. The gap is what makes you move your money, not the number itself.' },
          { term: 'Risk-off',
            plain: 'A frightened market. Money leaves anything speculative and piles into the currencies seen as safe.',
            like: 'Everyone heading for the same exit at once. Nobody is checking the interest rate on the way out.' }
        ],
        close: [
          "A few other forces, in rough order of how much they matter:",
          "**Inflation.** High inflation pushes a central bank towards raising rates, so inflation figures get watched as a *rate* signal rather than for their own sake. **Employment** works the same way — strong jobs data supports tightening, which is why the US payrolls number is such a big deal.",
          "**Growth figures** move things too, but slowly and usually with plenty of warning.",
          "**Commodities** matter for some currencies specifically: the Canadian dollar tracks oil fairly closely, the Australian dollar tracks metals and Chinese demand.",
          "And then **fear**, which overrides everything else when it shows up. In a genuine crisis, money runs to the **US dollar, the Japanese yen and the Swiss franc** more or less regardless of what interest rates are doing anywhere.",
          "Remember that last one. We'll come back to it at the end of this module, because it's how a carefully diversified account manages to lose on everything at once."
        ]
      },
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
      title: 'Reading the calendar — good news, falling price',
      slides: [2, 3],
      teach: {
        lead: [
          "An economic calendar lists what's being released and when. Every entry shows three numbers: **previous, forecast, and actual.**",
          "Before the release, only two exist. And here's the thing everyone gets wrong at first:",
          "**Price has already moved for the forecast. That's what a forecast is.**",
          "If everyone expects inflation at 3.5%, the market is already positioned for 3.5%. The number arriving at 3.5% changes nothing — it was already in the price.",
          "**What moves price is the surprise.** How far the actual number lands from what was expected, and in which direction.",
          "Think about exam results. If everyone expected you to get 90% and you come back with 85%, that's a disappointment — even though 85% is a good mark. And if nobody expected more than 60% and you got 85%, that's a triumph. **Same 85%. Completely different reaction.**",
          "That's why you'll see a genuinely strong economic number arrive and the currency *fall*. The number was good. It just wasn't as good as everyone had already bet on."
        ],
        terms: [
          { term: 'Forecast (consensus)',
            plain: 'What the market expects the number to be. Price is already positioned for it.',
            like: 'The grade everyone predicted you would get. It is already priced into their expectations of you.' },
          { term: 'Surprise',
            plain: 'The gap between the actual number and the forecast. This is what moves price.',
            like: 'The difference between the predicted grade and the real one.' },
          { term: 'Impact rating',
            plain: 'High, medium or low — how much movement to expect. It says nothing about direction.',
            like: 'A storm warning. It tells you it will be rough, not which way the wind blows.' },
          { term: 'CPI',
            plain: 'The main measure of inflation, and the biggest input into rate decisions.',
            like: 'The number that tells the central bank whether the shopping basket is getting more expensive.' },
          { term: 'NFP',
            plain: 'US employment change, released the first Friday of most months. Reliably violent.',
            like: 'The one fixture in the calendar everyone clears their diary for.' }
        ],
        close: [
          "You don't need to follow everything. **Know the three or four releases that matter for what you actually trade, and ignore the rest.**",
          "For most people that's: **central bank rate decisions** (roughly every six weeks — and the statement matters more than the number), **inflation**, **US payrolls**, and the monthly business surveys that give early warning about growth.",
          "Watch out for **unscheduled central bank speeches** too. Someone talking off the cuff can move a market as much as a scheduled release, and they turn up with very little notice.",
          "There's also \"**buy the rumour, sell the fact**\", which is the same positioning idea one step further. People buy in *anticipation* for weeks. When the event finally lands, those same people take their profit — and price falls on news that was exactly as good as expected.",
          "And one honest warning: **the first move after a release is often wrong.** Computers trade the headline number in milliseconds. Humans then read the detail and the revisions to last month's figure — which frequently tell a different story — and price reverses hard within minutes.",
          "Which brings us to what all this does to your actual trade.",
          "**Check the calendar before every session. Not after.**"
        ]
      },
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
      title: 'What news does to your actual trade',
      slides: [4, 5],
      teach: {
        lead: [
          "Everything so far has been about direction. This lesson is about something more immediate: **for a minute or two around a big release, your trade stops behaving the way you assumed it would.**",
          "**The spread widens.** Not slightly. A pair that normally costs you 1 pip can cost 18 for forty seconds. It's surge pricing in a storm — everyone wants the taxi at once and the price goes wherever it likes.",
          "**Orders fill nowhere near where you asked.** You click at one price and get another, sometimes far away, because price is moving faster than the round trip to the broker.",
          "**And your stop loss stops behaving.** Remember from module 3 that a stop is an instruction, not a reserved price. During a release that distinction stops being theoretical. Your carefully measured 20-pip stop can easily cost you 60.",
          "There's a worse version too: with an 18-pip spread, a 20-pip stop can be **triggered by the spread alone**, while the actual market never reached your level at all."
        ],
        terms: [
          { term: 'Slippage',
            plain: 'Getting filled at a worse price than you asked for, because price moved in between.',
            like: 'Surge pricing. Same journey, and the fare has doubled while you were tapping.' },
          { term: 'Whipsaw',
            plain: 'A sharp move one way immediately followed by a bigger move the other.',
            like: 'A door slamming open and then rebounding harder than it opened.' },
          { term: 'Revision',
            plain: 'A correction to a previous month\'s figure, published alongside the new one.',
            like: 'Finding out last month\'s score was wrong. Sometimes it matters more than today\'s.' },
          { term: 'Flatten',
            plain: 'Closing your positions so you are holding nothing.',
            like: 'Getting off the road before the storm rather than driving through it.' }
        ],
        close: [
          "Here's the sentence I most want you to take away from this lesson:",
          "**You worked out your position size assuming normal conditions. During a release, that assumption is void.**",
          "Everything you'll learn in the next module about risking 1% depends on your stop costing roughly what you planned. When the spread multiplies by fifteen and fills land wherever they land, the 1% you carefully calculated might turn out to be 3%.",
          "That's not a reason to be frightened of news. It's a reason to be **out of the market** for the few minutes when your arithmetic doesn't hold.",
          "Some brokers won't even accept new pending orders around high-impact releases — which tells you something about how they view those minutes.",
          "So the question isn't whether you can predict the number. It's whether you want to be holding a position at the exact moment your costs are at their worst and your stop is least reliable."
        ]
      },
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
      title: 'Your news policy, and the trap of fake diversification',
      slides: [6, 7, 8],
      teach: {
        lead: [
          "Decide your news policy **now**, in writing, while you're calm. Not in the ninety seconds before a release with a position open.",
          "There are three defensible ones.",
          "**Avoid.** Close your positions and place nothing within about thirty minutes either side of a high-impact release. **This is the right policy for you at this stage**, and I'd rather be direct about that than pretend all three are equal.",
          "**Reduce.** Halve your size and widen your stops through the news window. This needs enough experience to judge which events actually warrant it.",
          "**Trade the aftermath.** Wait fifteen or thirty minutes, let the initial nonsense resolve, then trade whatever structure the move left behind. Completely legitimate, and far safer than trading the spike.",
          "**Notice what isn't on that list: trading the release itself.** Not because it's morally wrong — because the execution costs make it a bad bet for a retail account. You're taking a coin-flip on direction while paying fifteen times the normal spread. Declining a bet where your costs are worst isn't timidity; it's arithmetic."
        ],
        terms: [
          { term: 'News policy',
            plain: 'Your written rule about what you do around releases, decided in advance.',
            like: 'Deciding you are not drinking before you get to the party, not while you are at the bar.' },
          { term: 'Correlation',
            plain: 'How much two instruments tend to move together.',
            like: 'Umbrellas and wellingtons. Different products, one weather forecast.' },
          { term: 'Risk-on',
            plain: 'A confident market. Money moves towards higher-risk, higher-yielding currencies.',
            like: 'Everyone feeling flush and booking the expensive holiday.' },
          { term: 'True exposure',
            plain: 'How much you actually stand to lose if the one thing you are really betting on goes wrong.',
            like: 'Adding up all your bets that need the same team to win.' }
        ],
        close: [
          "Now the trap — and this one catches **careful** people, not reckless ones. It'll catch you precisely because you're following the rules.",
          "Say you're long EUR/USD, long AUD/USD, and short USD/CHF. Three different pairs, three different regions, each risking a careful 1%. Feels diversified. Feels like sensible practice.",
          "Look at what they have in common. **Every single one of them profits if the dollar falls.** You haven't got three trades. **You've got one trade in three costumes**, and you're risking 3% on it.",
          "It's an umbrella shop, a raincoat shop and a wellington shop. Three businesses on paper. One bet on rain.",
          "The dollar rallies on some release, and all three lose together. Nothing went wrong with your rules. You followed every one of them and still took a 3% hit in an hour.",
          "And it gets worse in exactly the moment you'd want it not to. **In a crisis, correlations tighten.** Positions that behaved independently for months suddenly move as one, because everyone is running for the same exit and nobody is being selective on the way.",
          "So from now on, before you open a second position, ask: **what does this trade need to happen, and does anything else I'm holding need the same thing?** If the answer is yes, you're adding to an existing bet, not making a new one — and you should size it accordingly.",
          "That's fundamentals covered. Next module is risk, which is the one that decides whether any of this ever matters."
        ]
      },
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
