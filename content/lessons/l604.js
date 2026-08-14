/* N1 Forex Academy — lessons for Module 604 (Commodities track).

   VOICE: Jonathan talking to one student. The ETF roll-drag section explains a
   real and common disappointment — a student who was RIGHT and still lost money
   will otherwise conclude they were cheated. Producer equities get named as two
   bets rather than one. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[604] = [
    {
      title: 'The fund that falls while the price does not',
      slides: [0, 1],
      teach: {
        lead: [
          "You've decided a commodity is going up. **Now you have to choose how to express that**, and this is where a correct view most often turns into a losing trade.",
          "There are four routes. Start with the two most people use.",
          "**Futures** you already know completely. Tightest costs, deepest liquidity, a clearing house behind you — and expiry to manage, rolls to pay, margin to fund, cash settled nightly. **You know exactly what this route charges you**, which makes it the benchmark for the other three.",
          "**An ETF** is the convenient one. Buy it like a share, no futures account, no margin, no expiry. Lovely.",
          "**Except most commodity ETFs hold futures and roll them for you.**",
          "Read that again, because it's the whole lesson. **You have not avoided the roll cost. You have hired someone to pay it on your behalf, with your money.**",
          "In persistent contango, the fund bleeds against spot — **quietly, continuously, and by a lot over several years.**"
        ],
        terms: [
          { term: 'Commodity ETF',
            plain: 'A listed fund giving commodity exposure without a futures account. Usually holds futures.',
            like: 'A managed cupboard. Convenient, and somebody is still paying the storage.' },
          { term: 'Tracking difference',
            plain: 'The gap between the fund\'s return and the spot commodity, mostly caused by roll.',
            like: 'Arriving somewhere later than the timetable said, every single time.' },
          { term: 'Physically-backed fund',
            plain: 'A fund holding the actual metal rather than futures. No roll — it pays storage instead.',
            like: 'A vault rather than a rolling contract. Different cost, not no cost.' },
          { term: 'Operating leverage',
            plain: 'Why a producer\'s profits move more than the commodity: its costs are largely fixed.',
            like: 'A shop with fixed rent. A small change in takings is a big change in profit.' }
        ],
        close: [
          "This produces one of the most demoralising experiences in retail investing, and I want you to see it coming.",
          "**Someone forms a correct long-term view on oil. They buy an oil ETF. Three years later oil is where they said it would be — and they have lost money.**",
          "They conclude they were cheated. **They weren't.** It's module 303's roll arithmetic, quietly at work, and it's disclosed on page one of the prospectus.",
          "**So before buying any commodity fund: find out what it actually holds.** Futures, or the physical metal? If futures, what does the curve look like and how often does it roll?",
          "**For precious metals, physically-backed funds exist** and avoid roll entirely. They pay storage instead — a real cost, and a much smaller and more predictable one.",
          "Now the third route, which looks clever and is a different trade than people think.",
          "**Producer equities** — buying the miner instead of the metal.",
          "The appeal is genuine: **a miner's costs are largely fixed**, so if the metal rises 20% its profits can rise far more. That's **operating leverage**, and it works.",
          "**It works exactly as savagely in reverse.** And the number that tells you where the cliff is, is **all-in sustaining cost** — what it actually costs them to keep producing. Below that, they lose money on every unit."
        ]
      },
      check: [
        { q: 'A commodity ETF has fallen over three years while the spot price is unchanged. The most likely cause:',
          options: ['Management fraud', 'It holds futures and rolls them, so persistent contango has produced roll drag', 'The fund is illiquid', 'Currency effects only'],
          a: 1,
          why: 'This is module 303\'s arithmetic arriving as a real-world disappointment. It is disclosed in every prospectus, which is why checking what a fund actually holds matters more than its name.' },
        { q: 'All-in sustaining cost tells you:',
          options: ['The company\'s share price target', 'What it actually costs a producer to keep producing — the level at which a price fall becomes existential', 'The dividend cover', 'The cost of the futures roll'],
          a: 1,
          why: 'Below that level a producer loses money on every unit it sells. It is the most useful single number for judging how much commodity weakness a producer can absorb.' }
      ]
    },

    {
      title: 'Two bets in one, and choosing by the calendar',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Keep going on producers, because there's a catch people consistently miss.",
          "**When you buy a miner, you have not bought the metal. You have bought a business that happens to sell the metal.**",
          "That business has **management** who can make poor decisions. **Debt** that has to be refinanced. **A jurisdiction** whose government can change the tax regime or the licence. **Mines** that flood, and workforces that strike.",
          "**And it's an equity.** Which means module 106 applies in full — it has a beta, and it falls in a market-wide sell-off **even when the metal doesn't move at all.**",
          "So it's entirely possible for the metal to rise 15% while your miner falls, because they announced a bad quarter or the country changed its royalty rate.",
          "**That's not the trade failing. That's the trade being two bets, one of which you may not have thought about.**",
          "If you want a producer, fine — but understand you've taken a view on the commodity **and** a view on that company. Both have to work."
        ],
        terms: [
          { term: 'All-in sustaining cost',
            plain: 'What it genuinely costs a producer to keep producing, per unit.',
            like: 'What it costs to keep the shop open. Below that, every sale loses money.' },
          { term: 'Physical',
            plain: 'Owning the actual metal. No roll, no counterparty — and real storage costs.',
            like: 'The thing in a vault rather than a promise about the thing.' },
          { term: 'Allocated',
            plain: 'Specific physical units are yours, identified and set aside.',
            like: 'Your bag with your name on it in left luggage.' },
          { term: 'Unallocated',
            plain: 'You hold a claim on a pool rather than specific units. A solvency question if the custodian fails.',
            like: 'A cloakroom ticket for a pile of coats. Fine until the cloakroom goes bust.' }
        ],
        close: [
          "**Fourth route: physical.** Owning the actual metal.",
          "**It's the purest exposure there is** — no roll, no tracking difference, no counterparty. What you own is the thing.",
          "**And you pay for every bit of that purity.** Storage. Insurance. Dealer spreads that are far wider than anything you've met in this course. And the cost of verifying what you've actually got.",
          "One distinction that matters more than it sounds: **allocated versus unallocated.**",
          "**Allocated** means specific bars are yours, identified, set aside. **Unallocated** means you hold a claim on a pool — you're a **creditor of the custodian.**",
          "**You've met that exact distinction before**, in module 502: coins you control versus a balance on an exchange. Same question, much older market. If the custodian fails, allocated is yours and unallocated puts you in a queue.",
          "**So — which route?** And here's the thing that decides it, which isn't what most people use:",
          "**Holding period, not conviction.**",
          "**Weeks to months with a defined view** → futures, sized properly, with a written roll rule. **Short horizon, no futures account** → an ETF, holdings checked first. **A view on the commodity AND a specific company** → producer equity, understood as two bets. **Years, precious metal, no counterparty wanted** → physical, allocated, storage costed honestly.",
          "**This is module 103's question again** — CFD or shares — asked about four routes instead of two. **The answer still comes from the calendar**, and that transfer is worth more than either individual answer."
        ]
      },
      check: [
        { q: 'Buying shares in a gold miner rather than gold means you have:',
          options: ['The same exposure, more conveniently', 'A geared and impure version — operating leverage amplifies the metal move, but you also own management, debt, jurisdiction and equity market risk', 'Less risk than holding the metal', 'Exposure only to the metal price'],
          a: 1,
          why: 'Costs are largely fixed, so profits move more than the metal both ways. But it is still an equity — it falls in a market-wide sell-off even when the metal does not move at all.' },
        { q: 'Which factor should decide your route into a commodity?',
          options: ['Whichever is cheapest to open', 'Your holding period, and what each route actually exposes you to', 'Conviction in the view', 'Which has the tightest spread today'],
          a: 1,
          why: 'This is module 103\'s CFD-versus-shares question asked about four routes instead of two, and the answer still comes from holding period. Opening cost is the trap.' }
      ]
    }
  ];
})();
