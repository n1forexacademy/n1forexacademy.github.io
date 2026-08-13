/* N1 Forex Academy — lessons for Module 2.

   VOICE: Jonathan talking to one student. Second person, plain words, an
   everyday comparison before any jargon. This module is the arithmetic, and
   arithmetic is where people quietly give up — so every number is worked
   through in full rather than stated. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[2] = [
    {
      title: 'Reading a quote without getting confused',
      slides: [0, 1],
      teach: {
        lead: [
          "Every price you will ever see is written the same way, and once you can read it properly a lot of confusion disappears.",
          "**GBP/USD = 1.2740.** The first currency is always the one being priced. The second is what you're paying with. So this says: *one pound costs 1.2740 dollars.*",
          "Supermarket shelf label: \"Rice — £2.40 per kg\". The rice is the thing being priced, pounds are what you pay with. Nobody writes it the other way round, and forex doesn't either. The first currency is the rice.",
          "The first currency is always exactly **one unit**. You never see \"3 euros cost...\". It's always one euro, one pound, one dollar. The price just tells you how many of the second currency that one unit costs today."
        ],
        terms: [
          { term: 'Majors',
            plain: 'The most heavily traded pairs, all involving the US dollar.',
            like: 'The best-selling items in a supermarket — always in stock, priced keenly, and you can buy or sell any amount without fuss.' },
          { term: 'Crosses (or minors)',
            plain: 'Pairs of two big currencies that do not include the US dollar.',
            like: 'Still stocked, still popular, but a slightly smaller shelf and a slightly worse price.' },
          { term: 'Exotics',
            plain: 'A big currency paired with a smaller economy\'s currency.',
            like: 'A specialist item ordered in. Available, but you pay well over the odds and it can be out of stock without warning.' }
        ],
        close: [
          "One habit to build now, because it will save you real money later.",
          "**Start on the majors and stay there while you learn.** Not because exotic pairs are forbidden, but because the cost of trading them is several times higher and they can jump violently on news from a country you don't follow.",
          "You already saw in Module 1 that every trade starts as a small loss. On an exotic pair that starting loss can be twenty times bigger. When you're learning, you want the cheapest possible mistakes."
        ]
      },
      check: [
        { q: 'GBP/USD is quoted at 1.2740. What does that actually mean?',
          options: ['One dollar costs 1.2740 pounds', 'One pound costs 1.2740 dollars', 'You must buy 1.2740 units', 'The pair has risen 1.2740%'],
          a: 1,
          why: 'The first currency is always the one being priced, and always exactly one unit of it. Read it like a shelf label: one pound costs 1.2740 dollars.' },
        { q: 'Why should you stick to major pairs while learning?',
          options: ['Exotic pairs move too slowly to profit from', 'Majors cost far less to trade and behave more predictably, so your mistakes are cheaper', 'Exotic pairs are not offered by brokers', 'Majors cannot lose money'],
          a: 1,
          why: 'Exotic pairs can cost many times more just to enter, and they can gap violently on local news. Majors are not safer in terms of direction — they are simply cheaper and better behaved while you are still learning.' }
      ]
    },

    {
      title: 'Pips and lot sizes, made simple',
      slides: [2, 3],
      teach: {
        lead: [
          "Two words come up constantly, and they sound far more technical than they are.",
          "A **pip** is just the standard small step a price moves in. Like saying a share moved \"three pence\" or a temperature rose \"two degrees\" — it's a unit of movement, nothing more.",
          "For most pairs, one pip is the **fourth number after the decimal point**. So EUR/USD going from 1.0850 to 1.0870 has moved 20 pips.",
          "**Now the one exception that catches everybody.** Anything with the Japanese yen in it uses the **second** number after the decimal. USD/JPY moving from 148.20 to 148.40 has also moved 20 pips — not 2, and not 2000.",
          "I'm labouring this because getting it wrong doesn't just make your maths untidy. It makes you trade a position **a hundred times bigger than you meant to.** More on that in a moment."
        ],
        terms: [
          { term: 'Pip',
            plain: 'The standard unit a price moves in. Fourth decimal place normally, second for yen pairs.',
            like: 'A pence in a share price. Everyone quotes movement in the same unit so they can compare.' },
          { term: 'Lot',
            plain: 'The size of your trade. One standard lot is 100,000 units of the first currency.',
            like: 'Buying eggs. A single egg, a half dozen, a tray of thirty. Same product, different quantity — and the quantity decides how much a price change costs you.' },
          { term: 'Micro lot (0.01)',
            plain: '1,000 units. The smallest size most brokers allow, and where you will start.',
            like: 'The single egg. Cheap enough that a mistake costs you pennies rather than your week.' },
          { term: 'Volume',
            plain: 'The box on the order screen where you type your lot size.',
            like: 'The quantity field on any online order form.' }
        ],
        close: [
          "Here's how the two ideas fit together, and it's genuinely all there is to it.",
          "**The pip tells you how far price moved. The lot size tells you how much each of those pips was worth to you.**",
          "Same 20-pip move. On a micro lot it's about two dollars. On a standard lot it's about two hundred. The market did exactly the same thing both times — the only thing that changed was how much you had riding on it.",
          "That's why, for this entire course, you will trade the smallest size available. Not because you're not capable of more, but because while you're learning you want the market to teach you lessons at two dollars a time rather than two hundred."
        ]
      },
      check: [
        { q: 'USD/JPY moves from 148.20 to 148.75. How many pips is that?',
          options: ['5.5 pips', '55 pips', '550 pips', '0.55 pips'],
          a: 1,
          why: 'Yen pairs count pips at the second decimal place, so 0.55 in price is 55 pips. If you had used the usual fourth-decimal rule you would get 5,500 — and size your trade a hundred times wrong.' },
        { q: 'The same 20-pip move happens on a micro lot and on a standard lot. What differs?',
          options: ['The number of pips', 'How much money that move is worth to you', 'The direction of the move', 'The spread you paid'],
          a: 1,
          why: 'The market moved identically both times. Lot size alone decides what those pips are worth — roughly two dollars on a micro lot, roughly two hundred on a standard one.' }
      ]
    },

    {
      title: 'Turning pips into actual money',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "This is the calculation that everything later in the course depends on, so let's walk one all the way through.",
          "For pairs that end in USD — EUR/USD, GBP/USD, AUD/USD — the arithmetic is as easy as it gets. **One pip on one standard lot is worth exactly $10.** Not roughly. Exactly.",
          "So scale it down as you shrink the trade: a mini lot (0.10) is $1 a pip, a micro lot (0.01) is 10 cents a pip.",
          "**A worked example.** You buy EUR/USD at 1.0850 with 0.20 lots. It rises to 1.0895 and you close.",
          "The move is 1.0895 − 1.0850 = 0.0045, which is **45 pips**. Your size is 0.20 lots, so each pip is worth 0.20 × $10 = **$2**. So 45 × $2 = **$90**.",
          "Then subtract what it cost you to get in — the spread and any commission — and you land somewhere near $86. That's your real result. Always do that last subtraction; a number that ignores costs is a number that flatters you."
        ],
        terms: [
          { term: 'Pip value',
            plain: 'What one pip is worth in your account, at the size you are trading.',
            like: 'The price per mile on a taxi meter. The meter rate is fixed; how far you travel decides the fare.' },
          { term: 'Gross vs net',
            plain: 'Gross is before costs. Net is what actually reaches your account.',
            like: 'Your salary before tax versus what lands in your bank. Only one of them is real to you.' }
        ],
        close: [
          "Now the trap I promised you.",
          "**Yen pairs are not $10 a pip.** Because of that second-decimal rule, a standard lot on USD/JPY works out closer to **$6.75** a pip, and it drifts slightly as the price moves.",
          "Gold is different again — a gold contract is usually 100 ounces rather than 100,000 units, so its pip is worth something else entirely.",
          "So never carry \"$10 a pip\" around in your head as a universal fact. It is true for one specific situation: **a standard lot, on a pair that ends in USD.** Change any part of that and the number changes. When in doubt, your platform will show you the value — check it before you size a trade, not after."
        ]
      },
      check: [
        { q: 'You are long 0.30 lots of GBP/USD. Roughly what is each pip worth?',
          options: ['$0.30', '$3.00', '$30.00', 'You cannot tell without the current price'],
          a: 1,
          why: 'GBP/USD ends in USD, so a standard lot is exactly $10 a pip. At 0.30 lots that is $3.00 per pip, and it stays that regardless of where price is trading.' },
        { q: 'You buy EUR/USD at 1.0850 with 0.20 lots and close at 1.0895. Roughly what did you make before costs?',
          options: ['$45', '$90', '$450', '$9'],
          a: 1,
          why: 'The move is 45 pips. At 0.20 lots each pip is worth $2, so 45 × $2 = $90 gross. Take off spread and commission and you keep somewhere around $86 — always finish with that subtraction.' }
      ]
    },

    {
      title: 'Why five trades can secretly be one bet',
      slides: [7, 8, 9],
      teach: {
        lead: [
          "Two ideas to finish the module, and the second one quietly wrecks more accounts than bad analysis does.",
          "**First: selling is as normal as buying.** In forex there's no extra step to bet on something falling — selling EUR/USD is just buying dollars with euros. Same trade, other direction. If you've come from shares, this will feel strange for about a week and then feel obvious.",
          "Most beginners only ever buy, out of habit rather than reasoning. Notice if you're doing that, because you're ignoring half of every market.",
          "**Second, and this is the important one.** Say you open three trades: buy EUR/USD, buy GBP/USD, buy AUD/USD. Three different pairs. Feels like sensible spreading of risk.",
          "Look again at what they have in common. Every one of them is dollars on the other side. If the dollar has a strong day, **all three lose at once.** You didn't place three separate bets. You placed one bet against the dollar, three times over."
        ],
        terms: [
          { term: 'Correlation',
            plain: 'When two things tend to move together.',
            like: 'Buying shares in three different airlines. Different companies, but one oil price spike and all three drop together.' },
          { term: 'Long / short',
            plain: 'Long is betting on a rise. Short is betting on a fall.',
            like: 'Long is buying a house expecting prices to climb. Short is selling before a crash you think is coming.' },
          { term: 'Total exposure',
            plain: 'How much you really have riding on one idea, once you group the trades that move together.',
            like: 'Three tickets on the same horse. It looks like three bets on the racecard, but the horse either wins or it doesn\'t.' }
        ],
        close: [
          "So the rule to carry forward is simple: **before you open a trade, check what it has in common with what you already hold.**",
          "If the dollar is on one side of everything you own, you are making a single dollar bet in several costumes. That's allowed — but you should be doing it deliberately, at a size you chose, not by accident because it felt like diversifying.",
          "When we get to the risk module, this is exactly how careful people who risk only 1% per trade still manage to lose 4% in an afternoon. Now you'll see it coming."
        ]
      },
      check: [
        { q: 'You buy EUR/USD, GBP/USD and AUD/USD, each with the same small risk. What have you really done?',
          options: ['Placed three independent trades', 'Spread your risk across three markets', 'Placed roughly one bet against the dollar, three times over', 'Hedged yourself'],
          a: 2,
          why: 'All three have the dollar on the other side, so a strong day for the dollar sinks all three together. Check what your open trades have in common before adding another — that is how careful traders still take an unexpectedly large loss.' },
        { q: 'In forex, betting that a pair will fall:',
          options: ['Requires borrowing first, like shorting a share', 'Is just as normal as betting it will rise — selling one currency is buying the other', 'Costs more in commission', 'Is only possible on major pairs'],
          a: 1,
          why: 'Selling EUR/USD simply means buying dollars with euros. There is no borrowing step and no extra cost, so both directions are equally available — most beginners only buy out of habit rather than reasoning.' }
      ]
    }
  ];
})();
