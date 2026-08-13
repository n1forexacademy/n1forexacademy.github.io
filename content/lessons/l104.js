/* N1 Forex Academy — lessons for Module 104 (Equities track).

   VOICE: Jonathan talking to one student. The core moves are: cash is harder to
   massage than profit, a low P/E is a question rather than a bargain, and a
   soaring dividend yield is usually a falling price. Ratios narrow the field;
   they do not produce verdicts, and the lesson has to say so plainly. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[104] = [
    {
      title: 'Six numbers describe most of a business',
      slides: [0, 1],
      teach: {
        lead: [
          "This is the part with no forex equivalent. There was nothing to read about the euro. Here you can sit down with a company's audited accounts and find out what you actually own.",
          "It sounds like a mountain of numbers. It's really about six.",
          "**Revenue** — how much money came in the door. **Net income** — how much survived after every cost, interest and tax. **Free cash flow** — how much actual cash the business generated. **Net debt** — what it owes, after subtracting the cash it holds. **Shares outstanding** — how many pieces the ownership is divided into. And **market capitalisation** — what the market says the whole thing is worth.",
          "**Everything else is a ratio built from those six.** Every clever-sounding metric you'll ever be shown is a combination of numbers on that list.",
          "Now the sentence that should shape how you read them:",
          "**Revenue is vanity. Profit is opinion. Cash is fact.**"
        ],
        terms: [
          { term: 'Revenue (turnover)',
            plain: 'Total sales before any costs. The top line.',
            like: 'Everything through the till. It says nothing about what you kept.' },
          { term: 'Net income',
            plain: 'What is left after all costs, interest and tax. The bottom line.',
            like: 'What you actually took home after the bills.' },
          { term: 'Free cash flow',
            plain: 'Cash generated after the spending needed to keep the business running.',
            like: 'What is genuinely in the bank at the end of the month, not what you were owed.' },
          { term: 'Margin',
            plain: 'Profit as a percentage of sales. How much of each pound survives.',
            like: 'How much of each pound taken actually stays in your pocket.' }
        ],
        close: [
          "Let me unpack that, because it's the most useful thing in this lesson.",
          "**Revenue can rise for years while a company loses money on every single sale.** Selling pounds for ninety pence grows revenue beautifully. It's still a disaster.",
          "**Net income is better, but it's an accounting figure.** Not dishonest — shaped by legitimate judgement calls about when to recognise a sale, how fast to write things down, how to treat a one-off. Two honest companies in identical situations can report different profits.",
          "**Free cash flow is the hardest to massage**, because cash either arrived in the bank or it didn't. That's why it's the number to check when the story sounds too good.",
          "**So watch for the split: revenue climbing while cash flow falls.** That's the pattern worth investigating. Sales are being made, and the money isn't turning up.",
          "**Margins** tell you how much of each pound of sales survives. Falling margins with rising revenue is another warning — the company is buying growth by selling more cheaply.",
          "**And only compare margins within a sector.** A supermarket runs on thin margins by design; a software company on enormous ones. Comparing them tells you which industry they're in, nothing more."
        ]
      },
      check: [
        { q: 'Which figure is hardest to massage through accounting choices?',
          options: ['Revenue', 'Net income', 'Free cash flow', 'Earnings per share'],
          a: 2,
          why: 'Cash either arrived or it did not. Revenue recognition and the judgements feeding net income leave far more legitimate room for presentation.' },
        { q: 'A company grows revenue strongly for three years while free cash flow falls. This is:',
          options: ['Normal and unimportant', 'A warning worth investigating — sales are rising but cash is not', 'Proof of fraud', 'Only relevant to lenders'],
          a: 1,
          why: 'Revenue is what comes in the door. A business can grow sales for years while losing money on every one, and cash flow is where that shows up first.' }
      ]
    },

    {
      title: 'Cheap is a question, not an answer',
      slides: [2, 3],
      teach: {
        lead: [
          "The **P/E ratio** is the most quoted number in investing and the most misused.",
          "**P/E = share price ÷ earnings per share.** Roughly, how many years of the company's current earnings you're paying for it. A P/E of 15 means you're paying fifteen years of current profits.",
          "**A high P/E** means the market expects earnings to grow. That expectation can be perfectly reasonable, or it can be hope with a price tag.",
          "**A low P/E** means the market expects earnings to fall, or sees a risk you haven't found yet.",
          "And that's the bit people get backwards. They see a P/E of 5 against a sector average of 15 and think they've spotted a bargain nobody noticed.",
          "**The market noticed.** That's what the low number *is* — thousands of people who looked and priced it that way.",
          "**The correct response to a low P/E is to ask why.** Sometimes the answer is that the market's wrong, and that's where real returns come from. Far more often there's a reason, and finding it takes an afternoon rather than a lifetime."
        ],
        terms: [
          { term: 'P/E ratio',
            plain: 'Share price divided by earnings per share. Roughly how many years of current profits you are paying.',
            like: 'Paying fifteen years of a shop\'s profits to buy the shop. Sensible or not, depending on the shop.' },
          { term: 'Value trap',
            plain: 'A share that looks statistically cheap and stays cheap, because the business really is deteriorating.',
            like: 'A house priced well under the street. There is a reason, and it is usually structural.' },
          { term: 'Dividend yield',
            plain: 'Annual dividend divided by share price, as a percentage.',
            like: 'Rental income as a percentage of what the property costs.' },
          { term: 'Payout ratio',
            plain: 'How much of its earnings a company hands out as dividends. Over 100% means paying out more than it earns.',
            like: 'Spending more than you earn and covering it from savings. Fine briefly, not a plan.' }
        ],
        close: [
          "That's a **value trap** — statistically cheap, and cheap for a reason. Companies stay cheap for a decade, comfortably, while everyone who bought the ratio waits for a re-rating that isn't coming.",
          "Now **dividends**, where there's a similar trap dressed as good news.",
          "First, understand what a dividend actually is: **cash leaving the company and arriving in your account.** On the day the shares go ex-dividend, **the price typically drops by roughly the dividend amount.** It has to — that money left the business. **It's a transfer, not a windfall.**",
          "**Yield = annual dividend ÷ price.** Look at that fraction and notice something: **the yield can soar without the dividend changing at all**, simply because the price collapsed.",
          "So when you see an eye-catching 9% yield, check which number moved. A yield that tripled on an unchanged dividend means the share price fell by about two thirds — and the market is very likely pricing in a cut that hasn't been announced yet.",
          "**Check the payout ratio.** If a company is paying out more than it earns, that's being funded from borrowings or reserves, and it doesn't last.",
          "**A dividend cut is one of the more reliable signals that management sees trouble coming.** They hate cutting. By the time they do, they've usually exhausted the alternatives."
        ]
      },
      check: [
        { q: 'A company trades on a P/E of 5 while its sector averages 15. The correct response is:',
          options: ['Buy, it is clearly cheap', 'Ask why the market prices it lower and look for the reason', 'Ignore it', 'Compare it to a technology company'],
          a: 1,
          why: 'A low P/E means the market expects earnings to fall or sees a risk you have not found. Sometimes it is mispriced; often it is a value trap. The ratio is where research begins.' },
        { q: 'A dividend yield rose from 3% to 9% with the dividend unchanged. What happened?',
          options: ['The payout increased', 'The share price fell by roughly two thirds', 'More shares were issued', 'Yields track inflation'],
          a: 1,
          why: 'Yield is dividend divided by price. A tripled yield on an unchanged dividend means the price collapsed — and a market pricing in a probable cut.' }
      ]
    },

    {
      title: 'Debt, and being honest about the limits',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "**Debt decides who survives a bad year.** Two companies with identical products and identical sales can have completely different fates in a downturn, and the difference is usually borrowing.",
          "Use **net debt** — borrowings minus the cash the company holds. A business with £500m of loans and £500m in the bank is in a very different position from one with £500m of loans and nothing.",
          "**Debt isn't inherently bad.** It funds expansion, and used sensibly it raises the return owners get on their own money. Plenty of excellent businesses carry debt deliberately.",
          "**But the interest has to be paid whatever happens.** In a good year that's easy. In a bad year it's the same bill against smaller earnings.",
          "And remember where you stand from module 101: **lenders get paid before you do.** A struggling company will protect its lenders — it has to — and that protection comes out of your side.",
          "**Compare debt to earnings or cash flow, never to the share price.** What matters isn't how big the debt looks, it's whether the business generates enough to service it."
        ],
        terms: [
          { term: 'Net debt',
            plain: 'Borrowings minus cash held. What the company owes on balance.',
            like: 'Your mortgage minus your savings. The honest figure.' },
          { term: 'Refinancing risk',
            plain: 'Needing to replace a loan when it falls due, at whatever terms are available then.',
            like: 'Your fixed-rate deal ending in a year when rates have doubled.' },
          { term: 'Return on equity',
            plain: 'Profit compared with the owners\' money in the business — how hard that capital is working.',
            like: 'The return on a rental property, against what you actually put in.' },
          { term: 'One-off item',
            plain: 'A gain or cost that will not repeat, distorting a single year\'s figures.',
            like: 'The month you sold the car. Great income; do not budget for it again.' }
        ],
        close: [
          "Now let me be straight with you about what all of this can and can't do, because plenty of people sell fundamental analysis as if it produced answers.",
          "**The numbers are backward-looking.** Every one of them describes what already happened. Last year's earnings say nothing certain about next year's, and next year's is what the price is actually about.",
          "**Accounting choices are legitimate but consequential.** Two honest companies can present the same underlying reality quite differently.",
          "**One-off items distort a single year** in both directions — a big disposal flatters, a restructuring charge flatters the other way.",
          "**Sector context is everything.** These ratios are only comparable within an industry, and a screen that ignores that will hand you nonsense.",
          "**And they cannot price a story.** Some of the largest companies in the world lost money for years before they didn't. Plenty of other loss-making companies simply failed. The accounts didn't distinguish them at the time, and anyone claiming otherwise is describing hindsight.",
          "So here's the honest summary: **fundamental analysis narrows the field and rules out obvious problems.** It tells you what you're buying, whether the business can survive a hard year, and whether the price implies something the numbers don't support.",
          "**It does not produce certainty, and it does not replace your risk policy.** That's still module 10, and it still applies here."
        ]
      },
      check: [
        { q: 'Why does net debt matter more than total borrowings?',
          options: ['It is easier to compute', 'It subtracts cash, showing what is actually owed on balance', 'Regulators require it', 'It excludes long-term debt'],
          a: 1,
          why: 'A company with large borrowings and equally large cash is in a very different position. Compare net debt to earnings or cash flow — the ability to service it decides survival.' },
        { q: 'The honest limit of ratio analysis is that ratios are:',
          options: ['Always wrong', 'Backward-looking, shaped by accounting choices, and only comparable within a sector', 'Only useful for large companies', 'Superior to reading the accounts'],
          a: 1,
          why: 'They describe what has happened, filtered through legitimate judgement calls. Fundamental analysis narrows the field and rules out obvious problems; it does not produce certainty.' }
      ]
    }
  ];
})();
