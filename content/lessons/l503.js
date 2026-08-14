/* N1 Forex Academy — lessons for Module 503 (Crypto track).

   VOICE: Jonathan talking to one student, still deliberately flat. The
   liquidation cascade is the most useful mechanical insight in the track — it
   explains the market's violence without invoking manipulation, and it tells a
   student exactly why their stop got taken in a move that later looked
   meaningless. Correlation appears for the third time and is named as such. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[503] = [
    {
      title: 'Thinner than it looks, and why that matters',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Look up the daily volume of a major crypto asset and you'll see a number in the billions. It looks like one of the deepest markets on earth.",
          "**Then look at the actual order book, and it isn't.**",
          "Three reasons the headline overstates things.",
          "**Trading is fragmented.** The same asset trades on dozens of venues at once, so no single book holds anything like the total. You can only trade the book in front of you.",
          "**Some of that volume isn't real.** Wash trading — trading with yourself to inflate the figures — has been documented across parts of this market for years.",
          "**And outside the largest few assets, books thin out sharply.** You met this in module 102: a tight spread with nothing behind it, where your own order becomes the news. **It bites much harder here.**",
          "So the habit is the same one you already have: **judge liquidity by the depth on the venue you'd actually use.** Never by a headline volume figure on a data site."
        ],
        terms: [
          { term: 'Order book depth',
            plain: 'How much is actually resting near the current price. The honest measure of liquidity.',
            like: 'How many are on the shelf, not how many the shop sold last year.' },
          { term: 'Fragmentation',
            plain: 'The same asset trading across many venues, so no single book shows the real depth.',
            like: 'One crowd split across twenty rooms. No room is as full as the total suggests.' },
          { term: 'Liquidation cascade',
            plain: 'Forced closures of leveraged positions pushing price into more forced closures.',
            like: 'One car braking hard on a motorway, and the pile-up behind it.' },
          { term: 'Reflexivity',
            plain: 'Price movement causing behaviour that causes more of the same movement.',
            like: 'A queue forming because a queue formed.' }
        ],
        close: [
          "Now the mechanism that explains why this market moves the way it does — and it isn't manipulation.",
          "**Very high leverage is widely available here, and widely used.**",
          "You know from module 302 what happens when a leveraged position goes wrong: it gets closed automatically, whether you like it or not. Here that happens at speed, on a thin book, to thousands of positions at once.",
          "**And those forced closures are market orders.** They don't wait for a good price. They sell into whatever depth exists — which pushes price further — **which triggers the next tier of liquidations.** Which pushes it further again.",
          "**That's a liquidation cascade, and it can produce a 20% move with no news whatsoever.**",
          "It's a pile-up. One car brakes hard, and what follows has nothing to do with why the first one braked.",
          "**Nothing was learned. Positions were unwound.** That's the whole event.",
          "This matters to you practically, because it explains something you'd otherwise take personally: **your stop getting taken out in a violent move that, a day later, looks like it meant nothing.** It probably didn't mean anything. That's the point."
        ]
      },
      check: [
        { q: 'Reported 24-hour volume is enormous but the order book is thin. Which matters for your trade?',
          options: ['Reported volume, since it shows overall interest', 'Depth near the price, on the venue you would actually use', 'Both equally', 'Neither — use market capitalisation'],
          a: 1,
          why: 'Volume is fragmented across dozens of venues and some of it is not real. Depth at the price you want to trade decides your fill — module 102\'s lesson, biting harder here.' },
        { q: 'A token falls 20% in an hour with no news at all. The most likely mechanism:',
          options: ['Coordinated manipulation', 'A liquidation cascade — forced closures triggering further forced closures', 'An exchange outage', 'A scheduled token unlock'],
          a: 1,
          why: 'Forced closures are market orders that sell into whatever depth exists, pushing price into the next tier of liquidations. Nothing was learned; positions were unwound.' }
      ]
    },

    {
      title: 'Drivers you already know, and one bet with ten names',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "**This market never closes.** No opening bell, no weekend, no bank holidays. There's always somewhere to trade.",
          "That sounds like an advantage. **It's the same mixed blessing you met in futures.**",
          "**Liquidity still has a rhythm.** Books thin overnight and at weekends, exactly as they did in forex. And **the largest moves cluster in exactly those thin hours**, because it takes far less to move an empty book.",
          "Weekends are worse still, and for a specific reason: **traditional markets are shut.** So when something significant happens on a Saturday, crypto absorbs it alone, on the thinnest book of the week, with nowhere else for anyone to hedge.",
          "**A stop left through those hours can fill a very long way from your level.**",
          "**Continuous trading is not continuous liquidity.** You've now met that sentence in forex, in futures, and here. Third market, same truth."
        ],
        terms: [
          { term: 'Dominance',
            plain: 'The share of total crypto value held by the largest asset. A rough gauge of appetite within the sector.',
            like: 'How much of the shopping basket is one item.' },
          { term: 'Unlock event',
            plain: 'A scheduled release of previously locked tokens — a supply increase with a published date.',
            like: 'A known delivery of more stock arriving on a date everyone can look up.' },
          { term: 'High beta',
            plain: 'Moves further than the broad market in both directions.',
            like: 'The small boat in module 106, on rougher water.' }
        ],
        close: [
          "So what actually drives prices? Here's the list — and notice how much of it you already know.",
          "**Broad risk appetite.** In genuine risk-off conditions, crypto has generally behaved like a **high-beta risk asset**, not a safe haven. It falls with equities, harder. That's module 9's regime lesson, and it matters most for anyone holding crypto as protection against precisely the conditions in which it has historically dropped hardest.",
          "**Interest rates and liquidity conditions**, for the same underlying reason cheap money supports any speculative asset. That's the bonds track.",
          "**Regulatory news**, which can be sudden and specific to one country.",
          "**Supply events** — the scheduled unlocks from module 501, published in advance and readable by anyone who looks.",
          "**And leverage positioning**, which decides how violently any of the above gets expressed.",
          "**Almost none of that is new to you.** It's tempting to assume crypto needs an entirely fresh framework. It doesn't. The genuine differences are in **liquidity, leverage and custody** — not in how you analyse.",
          "Last thing, and it's the third time this course has told you.",
          "**Most tokens move together, and they move together harder in a sell-off.**",
          "Holding ten different names is usually **one position wearing ten labels.** You saw it with dollar-negative currency pairs in module 9. You saw it with five banks in module 106. **Here it's more extreme, not less.**",
          "**Ask what all your holdings need in order to work. If the answer is the same thing — you have one position.** Size it that way."
        ]
      },
      check: [
        { q: 'You hold ten different tokens. Your diversification is:',
          options: ['Strong — ten separate assets', 'Weak — most tokens move together, and correlations tighten in a sell-off', 'Complete, if they span different categories', 'Irrelevant to risk'],
          a: 1,
          why: 'Third appearance of this lesson, after dollar-negative currency pairs and five banks. Count exposure by theme: if every holding needs the same thing to happen, you hold one position.' },
        { q: 'In a broad risk-off event, crypto has generally behaved:',
          options: ['As a safe haven, rising while equities fall', 'As a high-beta risk asset, falling alongside equities', 'Independently of other markets', 'Like a government bond'],
          a: 1,
          why: 'This is module 9\'s risk-on and risk-off regime applied here. It matters most for anyone holding crypto as a hedge against exactly the conditions in which it has historically fallen hardest.' }
      ]
    }
  ];
})();
