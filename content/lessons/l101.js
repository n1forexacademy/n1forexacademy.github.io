/* N1 Forex Academy — lessons for Module 101 (Equities track).

   VOICE: Jonathan talking to one student who has already finished forex, so it
   can lean on that. The survivorship point is the one that matters most — the
   index record is partly a record of quietly deleting the failures, and
   students arrive believing "it always comes back" applies to their holding. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[101] = [
    {
      title: 'Ownership, and where your money actually goes',
      slides: [0, 1],
      teach: {
        lead: [
          "Welcome to the second track. You've earned your way here, and the first thing to say is that **you are now trading something fundamentally different.**",
          "In forex you were trading a ratio. EUR/USD isn't a thing — it's the price of one currency measured in another, and neither has earnings, or a chief executive, or an annual report.",
          "**A share is a piece of an actual business.**",
          "Buy 100 shares in a company that has 100 million of them, and you own one millionth of the whole enterprise. Its factories, its brand, its contracts, its profits. Not a bet on it — a piece of it. You are one of the owners, alongside everybody else who holds shares.",
          "That gets you a claim on the profits, paid out as **dividends** if the company chooses to pay them, and usually a **vote** on big decisions.",
          "And it introduces something no currency pair has: **a share can be worth more in ten years because the business genuinely grew.** EUR/USD has no such mechanism. It can sit in the same range for a decade."
        ],
        terms: [
          { term: 'Share (stock, equity)',
            plain: 'A unit of ownership in a company. The three words mean the same thing.',
            like: 'One brick of a building you jointly own with thousands of others.' },
          { term: 'Dividend',
            plain: 'A slice of profit paid out to shareholders. Optional — many companies never pay one.',
            like: 'Rent arriving from a property you part-own.' },
          { term: 'Primary market',
            plain: 'Where a company issues brand new shares and receives the money itself.',
            like: 'Buying a new car from the dealer. The manufacturer gets paid.' },
          { term: 'Secondary market',
            plain: 'Where existing shares change hands between investors. The company gets nothing.',
            like: 'Buying that same car second-hand. The previous owner gets paid; the manufacturer sees none of it.' },
          { term: 'Dilution',
            plain: 'A company issuing more shares, so each existing one represents a smaller slice.',
            like: 'The same cake cut into more pieces.' }
        ],
        close: [
          "That primary/secondary distinction catches people out, so let's be blunt about it.",
          "**When you buy shares on an exchange, the company receives nothing.** Not a penny. You're buying from another investor who happens to be selling, and your money goes to them.",
          "The company only receives money in the **primary market** — at its flotation, or when it later issues fresh shares to raise more.",
          "Almost everything you will ever do is secondary-market trading. It's worth understanding because it explains something you'll notice: **a company's fortunes and its share price move together only loosely, and often slowly.** Great results don't hand the company your money, and a falling share price doesn't take money out of its bank account.",
          "One thing to watch for: when a company **issues new shares** to raise money, your slice gets smaller. Same cake, more pieces. That's dilution, and it's a real cost to existing holders even when the fundraising itself is sensible."
        ]
      },
      check: [
        { q: 'You buy 500 shares on the exchange. Who receives your money?',
          options: ['The company, as new capital', 'Another investor who sold those shares', 'The exchange', 'The company\'s lenders'],
          a: 1,
          why: 'That is a secondary-market trade — the shares already existed. The company only receives money in the primary market, such as an IPO or a fresh issuance.' },
        { q: 'The fundamental break from forex is that a share:',
          options: ['Trades on a chart', 'Is a claim on a real business with earnings, so it can be worth more in ten years because the business grew', 'Has tighter spreads', 'Cannot fall in value'],
          a: 1,
          why: 'A currency has no earnings and pays no dividend. An equity represents an enterprise, which is why buy-and-hold is defensible in an index and meaningless in a currency pair.' }
      ]
    },

    {
      title: 'A real exchange, and where you stand in the queue',
      slides: [2, 3],
      teach: {
        lead: [
          "Remember module 1, where I told you forex has no central marketplace — that your broker shows you their own prices and the 'volume' on your chart was really their tick count?",
          "**Shares are the opposite, and it's a genuine upgrade.**",
          "Equities trade on a **centralised exchange**: one venue, one order book, one set of published prices that everybody sees. It's the difference between a public auction room where every bid is called out, and a thousand private dealers each quoting you separately in the dark.",
          "What that gets you in practice:",
          "**Real volume.** Not an estimate — the actual number of shares traded. **One official closing price**, the same for everyone. **And a trading day with a shape** — an opening bell, a closing bell, and a gap in between where nothing trades.",
          "There's also something forex simply doesn't have: **trading halts.** A stock can be stopped dead pending an announcement. You cannot get out while it's halted. We'll come back to that, because it has to change how you size."
        ],
        terms: [
          { term: 'Exchange',
            plain: 'A single regulated venue where all trading in a share happens, with published prices.',
            like: 'A public auction room. Everyone hears the same bids.' },
          { term: 'Ticker',
            plain: 'The short code identifying a company on an exchange.',
            like: 'A registration plate. Short, unique, and it tells you which one you mean.' },
          { term: 'Market capitalisation',
            plain: 'Share price multiplied by the number of shares. What the market thinks the whole company is worth.',
            like: 'The asking price for the entire building, worked out from what one brick just sold for.' },
          { term: 'Residual claim',
            plain: 'Shareholders get paid last, after everyone else the company owes.',
            like: 'Last in the queue when a business is wound up. Often there is nothing left by the time you reach the front.' }
        ],
        close: [
          "Now the part people skip past, and it's the reason shares are riskier than they feel.",
          "**If the company fails, you are paid last.**",
          "Staff get paid. Suppliers get paid. The bank that lent money gets paid. Bondholders get paid. **Then**, if anything at all remains, shareholders divide it — and very often nothing remains.",
          "That's what \"residual claim\" means, and it's not a technicality. It's the whole reason the same company's *bonds* are steadier and pay you less. You're being paid more for standing further back in the queue.",
          "One genuinely good thing to balance that: **information rights.**",
          "A listed company must publish audited accounts. You can sit down and read exactly what you own — the revenue, the debts, the margins, what management says about next year.",
          "There was nothing to read about the euro. There is an entire annual report about a company. **That's the real prize of this track**, and modules 104 and 105 are about learning to read it."
        ]
      },
      check: [
        { q: 'What does a centralised exchange give you that forex does not?',
          options: ['Round-the-clock trading', 'A single visible order book, real published volume and one official closing price', 'Guaranteed liquidity', 'Freedom from gaps'],
          a: 1,
          why: 'Forex has no central tape, so volume on your chart was your broker\'s. The trade-off is that exchanges close, giving overnight gap risk you cannot trade through.' },
        { q: 'In a liquidation, shareholders are paid:',
          options: ['First, as owners', 'Before lenders but after employees', 'Last, after every creditor and bondholder', 'At the same time as bondholders'],
          a: 2,
          why: 'Equity is a residual claim — you get whatever is left, frequently nothing. This is exactly why the same company\'s bonds are less volatile and yield less.' }
      ]
    },

    {
      title: 'Why "it always comes back" is a half-truth',
      slides: [4, 5, 6],
      teach: {
        lead: [
          "You'll hear constantly that the stock market always recovers. Over long periods, broad indices really have drifted upward — that part is true, and there's a reason for it: the companies inside them retain profits and reinvest them, so the whole thing compounds.",
          "A currency pair has nothing like that. It's a ratio between two economies, and it can go nowhere for years.",
          "**So buy-and-hold is a defensible strategy in an index. In a currency pair it's meaningless.** That's a real difference, and it's why this track opens up approaches forex never offered you.",
          "**But here is the catch, and almost nobody explains it.**",
          "**The drift belongs to the index. It does not belong to the company you happen to own.**",
          "An index survives by **replacing its failures.** A company that collapses gets quietly removed and something healthier takes its place. The index carries on with a clean record — the failure is simply no longer in the list.",
          "It's a school boasting about its average exam results while quietly moving on the students who were struggling. The average is real. It just isn't a promise to any individual pupil."
        ],
        terms: [
          { term: 'Index',
            plain: 'A basket of shares tracked together — the FTSE 100, the S&P 500 — with members added and removed over time.',
            like: 'A league table. Teams get relegated, and the league average never mourns them.' },
          { term: 'Survivorship',
            plain: 'A record looking better than reality because the failures were removed from it.',
            like: 'A school\'s average grade, after the strugglers have quietly left.' },
          { term: 'Delisting',
            plain: 'A company leaving the exchange — through takeover, failure to meet requirements, or collapse.',
            like: 'A shop with the shutters permanently down. It is not reopening.' },
          { term: 'Gap risk',
            plain: 'The market being shut when news lands, so it reopens at a completely different price.',
            like: 'Sleeping through the whole second half. You could not have reacted to any of it.' }
        ],
        close: [
          "So let me put both sides down honestly, and then we move on.",
          "**What shares can do:** grow alongside a real business over years. Pay you income while you hold them. Be researched properly from published accounts. And — a genuine advantage over leveraged forex — **fully paid shares cannot take you below zero.** The worst case is you lose what you put in.",
          "**What shares can also do:** go to zero, permanently, and stay there. Companies fail. That happens, and \"it'll come back\" is a statement about indices, not about the one you own.",
          "**And what they cannot do:** be traded round the clock. The exchange shuts. News lands overnight anyway, and the market reopens wherever it reopens — straight past your stop if that's where the news points.",
          "You already know from module 3 that a stop is an instruction, not a reserved price. **On shares that matters more**, because there's a guaranteed gap in the middle of every single night.",
          "One last thing, and I'll say it once rather than at the end of every lesson: **this course teaches you how the instrument works. It does not tell you what to buy.** Anyone who does that for you, for a fee, is selling something else entirely."
        ]
      },
      check: [
        { q: 'Broad indices have drifted upward historically. Does that apply to a single company you hold?',
          options: ['Yes, shares recover eventually', 'No — indices survive partly by replacing their failures, and your holding gets no such treatment', 'Only for dividend payers', 'Only above ten years'],
          a: 1,
          why: 'The index record is partly a record of continuously removing losers. Individual companies fail permanently, so "it\'ll come back" is a claim about indices, not about your holding.' },
        { q: 'Compared with a major currency, an individual share:',
          options: ['Is inherently safer', 'Can go to zero permanently, which a major currency does not', 'Moves less', 'Has no gap risk'],
          a: 1,
          why: 'Fully paid shares cannot go below zero, which is a genuine advantage. But permanent total loss is a real outcome for a single company in a way it is not for a major currency.' }
      ]
    }
  ];
})();
