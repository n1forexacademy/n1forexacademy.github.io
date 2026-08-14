/* N1 Forex Academy — lessons for Module 601 (Commodities track).

   VOICE: Jonathan talking to one student who has done futures already. Two
   things must land: a contract names a grade, a place and a window — all three
   are price — and a commodity generates nothing, so contango stops being a
   technicality and becomes the fundamental fact of the instrument. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[601] = [
    {
      title: 'There is no such thing as "oil"',
      slides: [0, 1],
      teach: {
        lead: [
          "Seventh track, and the first one where the thing you're trading has to be **dug up, grown, shipped and stored.** Every one of those verbs costs money, and that changes the instrument completely.",
          "Start with something that sounds pedantic and isn't.",
          "**You cannot buy 'oil'.**",
          "There are dozens of grades pumped out of different fields with genuinely different chemistry — some thick and full of sulphur, some light and clean. A refinery built for one can't simply switch to the other. **They are different products with different prices.**",
          "So a futures contract doesn't say 'oil'. It says **one specific grade, delivered to one specific place, in one specific window.**",
          "And here's the bit people skip: **location is part of the price.** The same grade sitting in the wrong place is worth less, because moving it costs real money — a pipeline, a tanker, a fortnight.",
          "**Grade, place, window. All three are price.**"
        ],
        terms: [
          { term: 'Grade',
            plain: 'The precise quality standard a contract requires — sulphur content, moisture, purity.',
            like: 'Flour grades. Bread flour and plain flour are both flour and you cannot swap them.' },
          { term: 'Delivery point',
            plain: 'Where the goods must physically change hands.',
            like: 'The difference between a sofa in the warehouse and one in your living room. Same sofa, different value.' },
          { term: 'Cost of carry',
            plain: 'Storage, insurance and financing until delivery.',
            like: 'A warehouse invoice. It arrives whether or not the price moved.' },
          { term: 'Convenience yield',
            plain: 'What someone will pay extra to have the physical goods NOW rather than later.',
            like: 'Paying over the odds for next-day delivery because the job starts tomorrow.' }
        ],
        close: [
          "Now the cost that no other instrument in this course has.",
          "**A share sits in your account for free. A bond pays you while you hold it. A commodity has to sit somewhere, and somewhere costs money.**",
          "Storage. Insurance. And the cash tied up in it, earning nothing.",
          "That's **cost of carry**, and you've already met what it does — it's the contango from module 303. But there you met it as a technicality about futures curves.",
          "**Here it's the fundamental fact of the thing.** An upward-sloping commodity curve is a warehouse invoice, not a forecast. When you understand that a barrel has to physically sit in a tank for six months, the slope stops being mysterious.",
          "And now the flip side, which module 303 described but didn't explain.",
          "**Sometimes later months cost less.** Why would anyone pay *more* for oil today than for oil in six months?",
          "**Because they need it today.** A refinery has to run this week. A pipeline burst. Somebody will pay a premium for a cargo now rather than a promise later.",
          "**That premium is the convenience yield, and it's what puts a market into backwardation.** Physical urgency is the cause; the inverted curve is just the symptom showing up on your screen."
        ]
      },
      check: [
        { q: 'A futures contract on crude oil specifies:',
          options: ['Any crude oil, anywhere', 'One grade, at one delivery point, in one delivery window — all three are part of the price', 'Only the quantity', 'The average of global prices'],
          a: 1,
          why: 'There is no such thing as "oil" as a tradeable object. That specificity is exactly what creates the basis risk you met in module 304 — your real exposure is rarely the exact grade at the exact point the contract names.' },
        { q: 'What puts a commodity market into backwardation?',
          options: ['Expectations of falling prices', 'Convenience yield — people paying a premium to have the physical goods now, usually from a shortage or disruption', 'High storage costs', 'Low trading volume'],
          a: 1,
          why: 'Physical urgency is the cause and the inverted curve is the symptom. Someone with a refinery to run this week will pay up for a cargo now rather than a promise later.' }
      ]
    },

    {
      title: 'It generates nothing, and high prices cure themselves',
      slides: [2, 3, 4],
      teach: {
        lead: [
          "Here's the sentence that should change how you think about every commodity trade you ever consider.",
          "**A commodity produces nothing. Ever.**",
          "A share has **earnings** — the business does something and money arrives. A bond pays a **coupon**, contractually, on a schedule. Even a currency pays you an **interest differential**.",
          "**A tonne of copper next year is still a tonne of copper.** It doesn't grow, doesn't pay you, doesn't compound. It just sits there.",
          "So your **entire return has to come from the price going up** — and while you wait, carry is running against you.",
          "Which means the bar for a commodity thesis is genuinely higher than for a share. In module 108 you wrote a falsifiable thesis for an equity. Here you need one that clears an extra hurdle:",
          "**What will make this worth more than the carry I'm paying to hold it?**",
          "If you can't answer that specifically, you don't have a trade. And this is exactly why long-only commodity funds have so reliably disappointed the people who bought them expecting an inflation hedge."
        ],
        terms: [
          { term: 'Substitution',
            plain: 'Buyers switching to a cheaper alternative when a price rises.',
            like: 'Beef gets dear, so people buy more chicken. Nobody announces it; it just happens.' },
          { term: 'Elasticity',
            plain: 'How much supply and demand respond to price. Low over months, high over years.',
            like: 'A supertanker turning. Nothing seems to happen, then it has completely changed course.' },
          { term: 'Inventory',
            plain: 'How much is currently sitting in storage. Published for many commodities.',
            like: 'Checking the stockroom. Dull, public, and more informative than most opinions.' }
        ],
        close: [
          "Now the mechanism that undoes most commodity stories, and it's the single most useful thing in this module.",
          "**High prices are the cure for high prices.**",
          "When a price goes up sharply, two things start happening at once, and neither needs anyone to decide anything.",
          "**Supply increases.** Mines that weren't worth operating suddenly are. Wells get drilled. Fields get planted. Marginal production that made no sense at $40 makes excellent sense at $90.",
          "**And demand falls away.** Buyers substitute — a cheaper alloy, a different feedstock, a smaller portion. Some just use less.",
          "**Both take time.** You can't open a mine in a fortnight or grow a crop in a month. But over two or three years, both are powerful.",
          "**Low prices work in reverse.** Production shuts in, cheap inputs get used more freely, and the shortage builds quietly while nobody's paying attention.",
          "**Which is why commodity prices tend to be cyclical rather than trending.** They're more self-correcting than almost any market you've studied.",
          "It also explains why the scarcity story — *the world is running out of X* — so reliably fails to pay. It's not that it's wrong about the shortage. **It's that the shortage is what causes the cure.**",
          "**Elasticity is low in the short run and high in the long run.** Almost every commodity mistake lives somewhere in that gap."
        ]
      },
      check: [
        { q: 'Compared with a share or a bond, a commodity:',
          options: ['Generates a small yield', 'Generates nothing at all, so the entire return must come from price while carry runs against you', 'Pays a dividend in kind', 'Has a book value'],
          a: 1,
          why: 'A tonne of copper next year is still a tonne of copper. That is why the thesis bar is higher here — you must say what will make it worth more than the carry you are paying.' },
        { q: 'A commodity price has risen sharply on a scarcity story. What usually follows over a few years?',
          options: ['Prices continue rising as the scarcity worsens', 'Supply increases and buyers substitute away — high prices are the cure for high prices', 'Nothing changes', 'Governments fix the price'],
          a: 1,
          why: 'Marginal production becomes worth operating and buyers switch to alternatives. The shortage is what causes the cure — which is why scarcity theses so reliably fail to pay.' }
      ]
    }
  ];
})();
