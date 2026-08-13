/* N1 Forex Academy — lessons for Module 105 (Equities track).

   VOICE: Jonathan talking to one student. Earnings are the forex news lesson
   applied to one company, so the module can lean on that. The one rule that
   must land: holding through earnings unleveraged is a defensible choice;
   not knowing the date is not a choice at all. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[105] = [
    {
      title: 'A shock you can see coming',
      slides: [0, 1],
      teach: {
        lead: [
          "Listed companies have to publish their results on a **known calendar** — every three months in some markets, every six in others. The dates are announced well in advance.",
          "Sit with that for a second, because it's genuinely useful:",
          "**You know, in advance, the day the biggest scheduled move of the quarter is going to happen.**",
          "That's a gift, and it's the same gift the economic calendar gave you in module 9. The difference is that this one is about **one specific company** — the one you're holding.",
          "How big? **Moves of 5% to 15% on earnings day are perfectly ordinary.** Bigger happens regularly.",
          "**And it usually arrives as a gap**, because most companies report outside trading hours. The exchange is shut, the news lands, and the shares open somewhere else entirely.",
          "That's why earnings are a **sizing decision** rather than a trading opportunity. Your stop doesn't help you across a gap — you knew that from module 3, and here the gap is scheduled."
        ],
        terms: [
          { term: 'Earnings report',
            plain: 'The scheduled publication of a company\'s results.',
            like: 'Exam results day. The date is on the calendar; the contents are not.' },
          { term: 'Consensus estimate',
            plain: 'The average of analysts\' forecasts. What the price is already positioned for.',
            like: 'The grade everyone predicted. Already baked into what people expect of you.' },
          { term: 'Beat / miss',
            plain: 'Reporting above or below what was expected.',
            like: 'Coming in over or under the predicted grade.' },
          { term: 'Guidance',
            plain: 'Management\'s own forecast for the coming period. Often moves the price more than the results.',
            like: 'The teacher saying next term looks difficult. More alarming than this term\'s mark.' }
        ],
        close: [
          "Now the part that confuses people every single results season.",
          "**A company beats on revenue, beats on profit, and the share drops 9%.**",
          "You already know why, because you learned it in module 9. **The price was already positioned for the consensus estimate** — that's what a forecast means. Beating an expectation everyone held isn't new information.",
          "**The move comes from the surprise, and from the guidance.**",
          "And guidance is usually the bigger of the two. Management saying \"next quarter looks harder than we thought\" outweighs an excellent quarter that's already finished — because **the market is pricing the future, not the past three months.**",
          "It's exactly \"buy the rumour, sell the fact\", applied to a single business instead of an economy.",
          "So when you read a results announcement, **go to the outlook section first.** The headline numbers are history. The paragraph about next year is what people are actually trading."
        ]
      },
      check: [
        { q: 'A company beats on revenue and earnings, and the share falls 9%. Most likely:',
          options: ['The market is irrational', 'Guidance was weak, and the beat was already priced in', 'The results were fraudulent', 'A trading error'],
          a: 1,
          why: 'Price is positioned for consensus before the release. Guidance describes the future, which is what the market prices — the same mechanism as economic surprises in the forex track.' },
        { q: 'Most companies report outside trading hours. The consequence is:',
          options: ['The move is smaller', 'The reaction arrives as an overnight gap that no stop protects against', 'You can exit during the announcement', 'Spreads narrow'],
          a: 1,
          why: 'The exchange is shut when the news lands. Your stop fills at the gapped open, which is why scheduled earnings are a sizing decision rather than a trading opportunity.' }
      ]
    },

    {
      title: 'Things that happen to your holding',
      slides: [2, 3],
      teach: {
        lead: [
          "Companies do things to their own shares, and some of them will land in your account with paperwork attached. Here's what each one actually means.",
          "**Stock split.** The company divides existing shares into more units — a 4-for-1 split turns your 100 shares into 400, and the price becomes a quarter of what it was. **Your holding is worth exactly the same.** Slicing a pizza into eight instead of four doesn't give you more pizza. It can make the shares easier to buy in small amounts, and that's genuinely the whole story.",
          "**Buyback.** The company uses its own cash to buy its own shares and cancel them. Fewer shares exist, so **each remaining one is a bigger slice** of the same business. Whether that's good depends entirely on the price they paid — a company buying its own shares expensively is wasting your money as elegantly as any other bad purchase.",
          "**Rights issue.** The company needs money, and offers **existing holders** the chance to buy new shares at a discount. This one you have to act on.",
          "**Takeover.** Someone bids for the company. The target usually jumps towards the offer price and then stops behaving like a normal share at all — it's now trading on whether the deal completes, not on the business."
        ],
        terms: [
          { term: 'Stock split',
            plain: 'Dividing existing shares into more units. The total value is unchanged.',
            like: 'Cutting the pizza into eight slices instead of four. Same pizza.' },
          { term: 'Share buyback',
            plain: 'The company buying and cancelling its own shares, so each remaining one is a larger slice.',
            like: 'Buying out one of your business partners. Everyone left owns more.' },
          { term: 'Rights issue',
            plain: 'Existing holders offered new shares at a discount. Ignore it and your stake shrinks.',
            like: 'Everyone chipping in to keep their equal share. Sit it out and your share gets smaller.' },
          { term: 'Profit warning',
            plain: 'An unscheduled announcement that results will fall short of expectations.',
            like: 'A call at an hour nobody rings with good news.' }
        ],
        close: [
          "**Take the rights issue seriously.** If you ignore the paperwork, you don't just miss a discount — **you get diluted.** Everyone else bought their cheap new shares, the company is now divided into more pieces, and your slice is genuinely smaller than it was. Doing nothing is a decision here.",
          "Then there are the events with **no date attached**, and these are the ones that actually hurt.",
          "**Profit warnings.** Unscheduled, and typically the largest single-day falls a share ever sees. Nobody was positioned for it, so the repricing is instant and brutal — worse than a scheduled miss, which was at least partly anticipated.",
          "**Regulatory action, lawsuits, fraud allegations.** These can be existential rather than merely bad. A company can be worth a fraction of yesterday's price and stay there.",
          "**Key people leaving.** For some companies the founder walking out is the entire story.",
          "**Sector-wide news.** A rate decision or an oil move can hit every company in an industry at once, regardless of how well any of them is run.",
          "**You cannot schedule around any of these.** There's exactly one defence, and it's the same one as always: **be sized so that the worst case is survivable.**"
        ]
      },
      check: [
        { q: 'A 4-for-1 stock split turns your 100 shares into 400. Your holding is now worth:',
          options: ['Four times as much', 'The same — the price adjusts proportionally', 'A quarter as much', 'It depends on the dividend'],
          a: 1,
          why: 'A split divides the same claim into more pieces. It can improve liquidity and accessibility, but nothing about the business or the value of your stake changed.' },
        { q: 'Which event typically produces the largest single-day fall?',
          options: ['A scheduled earnings miss', 'An unscheduled profit warning', 'A dividend cut', 'A stock split'],
          a: 1,
          why: 'Scheduled results are partly anticipated and hedged. An unscheduled warning arrives with no positioning, and repricing is immediate and severe.' }
      ]
    },

    {
      title: 'Your events policy',
      slides: [4, 5],
      teach: {
        lead: [
          "Same idea as your news policy in module 9: decide in advance, in writing, while nothing is happening.",
          "**Before you open any position, check when the company reports.** Every time. It takes ten seconds and it's on the company's own investor page.",
          "Then pick your approach and write it down:",
          "**Close before earnings.** Simplest. You avoid the gap entirely and you give up whatever the gap might have given you.",
          "**Reduce into earnings.** Cut the position down so the plausible gap is within what you're willing to lose.",
          "**Hold through it deliberately.** This is a completely legitimate choice — **as long as you own the shares outright and the position is small enough that a 20% overnight move is survivable.** For a long-term holding in a business you understand, riding out results is often the right call.",
          "**And the rule from module 103, restated because it's the one that matters: no leverage held through a scheduled earnings date.** Not a preference. A rule."
        ],
        terms: [
          { term: 'Events policy',
            plain: 'Your written rule for what you do around known company events.',
            like: 'Checking the weather before a long drive. Cheap, quick, and only annoying when you skip it.' },
          { term: 'Quiet period',
            plain: 'The stretch before results when a company will not comment on its performance.',
            like: 'Nobody answering the phone. Not a signal — just the rules.' },
          { term: 'Dilution',
            plain: 'Your stake shrinking because more shares now exist.',
            like: 'A cake cut into more slices while you were out of the room.' }
        ],
        close: [
          "Here's the distinction I want you to hold on to, because it separates risk-taking from carelessness:",
          "**Holding through earnings on a properly sized, unleveraged position is a decision.** You looked at the date, thought about the worst case, decided you could live with it, and stayed in. That's fine. That's what investing looks like.",
          "**Not knowing the date is not a decision.** It's negligence with a nice outcome attached, when the outcome happens to be nice.",
          "You'll get away with it repeatedly. That's the problem — it teaches you it's fine, and then one quarter it isn't, and you find out you were leveraged into a 30% gap you could have read about on the company's website.",
          "**So the one non-negotiable in your events policy: always know the date.** Everything else is a judgement call you're entitled to make however you like."
        ]
      },
      check: [
        { q: 'The non-negotiable part of an events policy is:',
          options: ['Always closing before earnings', 'Always knowing the earnings date before opening a position', 'Never holding overnight', 'Trading only after results'],
          a: 1,
          why: 'Holding through earnings on a properly sized unleveraged position is defensible. Not knowing the date is negligence rather than risk-taking, and checking takes ten seconds.' },
        { q: 'You ignore the paperwork for a rights issue. What happens?',
          options: ['Nothing, they are optional and harmless', 'You are diluted — others bought discounted new shares and your stake shrinks', 'Your shares are sold', 'You get the discount anyway'],
          a: 1,
          why: 'A rights issue lets existing holders maintain their proportion by buying discounted shares. Declining means the company is divided into more pieces and your slice is smaller.' }
      ]
    }
  ];
})();
