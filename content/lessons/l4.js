/* N1 Forex Academy — lessons for Module 4.

   VOICE: Jonathan talking to one student. This module is practical admin —
   choosing a broker and setting up. The tone is a friend who has been stung
   before telling you what to check, not a compliance lecture. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[4] = [
    {
      title: 'Choosing who holds your money',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Before spreads, before platforms, before anything else, there is one question that matters more than the rest combined.",
          "**Can you get your money back out?**",
          "Everything else is decoration if the answer is no. A broker with the tightest spreads in the world is worthless if withdrawals take three months and six emails.",
          "So here is the check, and it takes about five minutes.",
          "Every legitimate broker is licensed by a financial regulator, and every regulator publishes a **public register** of who they license. Look up the licence number on **the regulator's own website** — never on the broker's. Anyone can print a licence number on a webpage. Only the regulator can confirm it's real and active.",
          "Then search the broker's name together with the word \"withdrawal\" and read the first page of results. If people are struggling to get paid, it is never a secret — it will be all over the forums."
        ],
        terms: [
          { term: 'Regulator',
            plain: 'The government-backed body that licenses and polices financial firms in a country.',
            like: 'The food hygiene inspector. You can eat somewhere unrated — you just have no comeback when something goes wrong.' },
          { term: 'Segregated funds',
            plain: 'Your money held in a separate account from the broker\'s own money.',
            like: 'A solicitor holding your deposit in a client account rather than their business account. If they go under, your money was never theirs to lose.' },
          { term: 'Market maker (B-book)',
            plain: 'A broker that takes the opposite side of your trade itself, rather than passing it to the wider market.',
            like: 'A bookmaker. Perfectly legal and regulated — but when you win, they pay, so the incentives are not aligned with yours.' },
          { term: 'Agency broker (A-book / ECN)',
            plain: 'A broker that passes your order to the real market and charges commission.',
            like: 'An estate agent taking a fee. They earn whether the house goes up or down, so they do not mind which.' }
        ],
        close: [
          "One trap to know about, because it catches careful people.",
          "Large brokers often hold **several licences** across different countries, and route customers to different legal entities depending on where they live. The website may proudly show a strong UK or Australian licence while the account you actually open is with a subsidiary registered somewhere with far lighter rules.",
          "So check **which entity you are actually signing with** — it's in the client agreement, not the marketing page. Same brand, same logo, very different protection.",
          "None of this means offshore brokers are all bad. It means you should know what you've chosen rather than assume."
        ]
      },
      check: [
        { q: 'Where should you verify a broker\'s licence?',
          options: ['On the broker\'s own website', 'On the regulator\'s own public register', 'On a review site', 'In the trading platform'],
          a: 1,
          why: 'Anyone can print a licence number on a webpage. Only the regulator\'s register confirms it is genuine, active, and covers the right activity — and it takes about a minute to check.' },
        { q: 'A broker takes the other side of your trades itself. What does that mean for you?',
          options: ['It is illegal', 'Your losses are their revenue, so the incentives are not aligned — legal and disclosed, but worth knowing', 'They will always give better prices', 'They cannot offer stop losses'],
          a: 1,
          why: 'This is the market-maker model — legal, regulated, and often perfectly fine on small trades. But like a bookmaker, they pay when you win. An agency broker charges commission instead and does not mind which way you go.' }
      ]
    },

    {
      title: 'What it really costs (the headline lies)',
      slides: [3],
      teach: {
        lead: [
          "Brokers advertise on spread, because it's the number that looks smallest. Let me show you why that comparison is nearly useless.",
          "**Broker A:** 1.6 pip spread, no commission. Sounds clean — nothing extra to pay.",
          "**Broker B:** 0.2 pip spread, plus £7 per lot in commission. Sounds like they're charging you twice.",
          "Now convert them to the same unit. On a standard lot, £7 of commission is the same as 0.7 pips. So Broker B costs you 0.2 + 0.7 = **0.9 pips** all in.",
          "Broker A costs **1.6 pips**. The \"commission-free\" broker is nearly **twice as expensive**.",
          "It's the same trick as a \"free\" bank transfer with a poor exchange rate built in. The fee didn't vanish — it moved somewhere less visible."
        ],
        terms: [
          { term: 'Commission',
            plain: 'A stated per-trade fee, usually quoted per lot.',
            like: 'A visible booking fee. Annoying to see, but at least you can add it up.' },
          { term: 'Round trip',
            plain: 'The full cost of opening and closing one trade.',
            like: 'A return fare. Quoting one-way makes the price look better than the journey costs.' },
          { term: 'Swap markup',
            plain: 'The broker\'s margin added on top of the real overnight interest.',
            like: 'The mark-up on hotel minibar drinks. Small each time; noticeable over a long stay.' }
        ],
        close: [
          "So the habit to build: **always compare total round-trip cost**, converted into one unit, on the account type you would actually open.",
          "And look past the spread at the things nobody advertises — the overnight swap markup, inactivity fees on a dormant account, withdrawal charges, and the currency conversion applied when you deposit.",
          "Five minutes with a calculator before you open an account is worth more than any amount of clever trading afterwards. These costs are charged on every single trade you will ever make, forever, whether you win or lose."
        ]
      },
      check: [
        { q: 'Broker A: 1.6 pip spread, no commission. Broker B: 0.2 pip spread plus £7 per lot. Which is cheaper?',
          options: ['Broker A — no commission to pay', 'Broker B — 0.2 plus 0.7 pips of commission is 0.9 pips total', 'They cost the same', 'You cannot compare them'],
          a: 1,
          why: '£7 per standard lot is the same as 0.7 pips, so Broker B totals 0.9 pips against Broker A\'s 1.6. "Commission-free" simply moves the fee into the spread where it is harder to see.' },
        { q: 'Besides spread and commission, which cost is most often overlooked?',
          options: ['The overnight swap markup on positions held for days or weeks', 'The cost of the platform', 'Chart data fees', 'Order routing fees'],
          a: 0,
          why: 'Swap is charged every night a position stays open and brokers add their own margin on top. Also check inactivity fees, withdrawal charges and the conversion rate applied to deposits — none of it appears in the headline.' }
      ]
    },

    {
      title: 'Setting up so you can actually work',
      slides: [4, 5, 6, 7],
      teach: {
        lead: [
          "This lesson is housekeeping, and it's worth ten minutes because a messy setup causes real mistakes.",
          "**Pick one platform and learn it properly.** MT4 and MT5 are the common ones; TradingView has better charting but is usually not where you place trades. Plenty of people analyse in one and trade in the other. What you must not do is keep switching — every hour spent relearning a menu is an hour not spent learning to trade.",
          "**One instrument per chart window. Never two.** It sounds trivial. It is how people accidentally sell the wrong pair.",
          "**Use the same colours on every chart** and save it as a template, so any chart you open looks identical. When you can read a chart at a glance, you notice odd things faster.",
          "**Find out what time your platform thinks it is.** This one genuinely catches everyone."
        ],
        terms: [
          { term: 'Template',
            plain: 'A saved chart setup you can apply to any new chart in one click.',
            like: 'A saved document format. Set it once, stop fiddling forever.' },
          { term: 'Server time',
            plain: 'The clock your broker uses, which decides when each daily candle opens and closes.',
            like: 'A train timetable in the destination\'s time zone. Read it as your own and you will miss the train.' },
          { term: 'Indicator',
            plain: 'A calculation drawn on your chart from past prices.',
            like: 'A speedometer. Useful, and it only ever tells you what already happened.' }
        ],
        close: [
          "On the server clock: your chart's timestamps almost certainly are **not** your local time, and probably aren't London or New York either. Brokers pick their own.",
          "Work out the difference now and write it down somewhere you'll see it — *\"my platform's midnight is X o'clock my time.\"*",
          "It takes thirty seconds and it will save you an entire confused evening in the next module, where trading sessions and market hours matter enormously. People who skip this spend a week wondering why their charts disagree with everything they read."
        ]
      },
      check: [
        { q: 'The timestamps on your chart show:',
          options: ['Your local time', 'Always UTC', 'Your broker\'s own server time, which is often neither', 'Time set by your operating system'],
          a: 2,
          why: 'Brokers choose their own clock, and it decides where each daily candle opens and closes. Work out the offset from your own time now — it will save you a confused evening when sessions and market hours come up.' },
        { q: 'Why keep one instrument per chart window?',
          options: ['Charts load faster', 'It prevents the very ordinary mistake of acting on the wrong pair', 'Brokers require it', 'It uses less memory'],
          a: 1,
          why: 'It sounds trivial until it happens. Overlaid or duplicated charts are how people place a trade on a pair they were not looking at — and it usually happens when they are rushing.' }
      ]
    },

    {
      title: 'Offers designed to catch you',
      slides: [8, 9],
      teach: {
        lead: [
          "Last lesson of the foundation block. This one is about the things brokers offer that sound generous and are not.",
          "**Deposit bonuses.** \"Deposit £500, get £500 free.\" There is no free £500. It comes with conditions requiring you to trade an enormous volume before you can withdraw anything — and often that lock applies to *your own* deposit too, not just the bonus.",
          "The bonus isn't a gift. **It's designed to change your behaviour**, and it works: people trade far more than they intended, chasing a number that lets them access their own money.",
          "**Very high leverage offers.** After Module 3 you know leverage is permission, not power. A broker leading with 1000:1 is telling you who they're built for — customers who take huge positions and don't last long.",
          "**Copy trading.** Handing your money to a stranger's decisions, with no idea of their risk management, and no ability to intervene when they double down."
        ],
        terms: [
          { term: 'Deposit bonus',
            plain: 'Extra credit added to your account, tied to conditions requiring heavy trading.',
            like: 'A casino chip you cannot cash until you have bet through it many times over.' },
          { term: 'Volume requirement',
            plain: 'How much you must trade before a bonus — sometimes your own deposit — can be withdrawn.',
            like: 'The small print on a "free" phone: free, across a two-year contract you cannot leave.' },
          { term: 'Prop firm challenge',
            plain: 'A paid evaluation. Pass it and you trade the firm\'s money for a share of the profits.',
            like: 'An audition with an entry fee. Some are legitimate routes in; the fee is revenue whether you pass or not.' }
        ],
        close: [
          "Prop firms deserve a fair word, because they're advertised at you constantly and they're not all bad.",
          "The good ones are a genuine route to trading larger size without risking your own capital. But read the rules **before** paying: daily loss limits, total drawdown limits, minimum trading days, restrictions around news. Some of those rules will force you into worse risk decisions than you'd make on your own account.",
          "And never pay a challenge fee with money you need. It's a fee, not an investment.",
          "That's the foundation done. You now know what you're trading, what it costs, how orders and margin work, and how to pick somewhere to trade that will actually pay you. **From here we start reading charts** — and everything from this point assumes the four modules behind you."
        ]
      },
      check: [
        { q: 'A broker offers a 100% deposit bonus. What is the realistic catch?',
          options: ['There is none — it is free money', 'Volume conditions that push you to over-trade, often locking your own deposit until they are met', 'It is taxed at a higher rate', 'You must trade only exotic pairs'],
          a: 1,
          why: 'The bonus is tied to trading far more than any sensible strategy would, and the lock frequently applies to your own money too. It is designed to change your behaviour, and it works.' },
        { q: 'Before paying for a prop firm challenge, the most important thing to do is:',
          options: ['Check the profit share percentage', 'Read the drawdown and trading-day rules, since some force worse risk decisions than your own account would', 'Check which platform they use', 'Compare their spreads'],
          a: 1,
          why: 'Daily loss limits and minimum trading days can push you into decisions you would never make otherwise. Read the rules before paying — and never use money you need, because the fee is revenue whether you pass or not.' }
      ]
    }
  ];
})();
