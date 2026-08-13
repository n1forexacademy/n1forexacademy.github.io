/* N1 Forex Academy — lessons for Module 303 (Futures track).

   VOICE: Jonathan talking to one student. Two things must land: roll cost is
   invisible on statements and frequently larger than every commission they will
   ever fuss about, and contango is arithmetic rather than a forecast. The
   flat-market loss is the payoff — it explains a whole category of real-world
   disappointment that beginners blame on manipulation. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[303] = [
    {
      title: 'Every contract has a death date',
      slides: [0, 1],
      teach: {
        lead: [
          "Here's something no instrument you've traded so far has done. **A future expires.**",
          "A share can sit in your account for thirty years. A currency pair never ends. Even a bond runs for a known term and pays you out properly at the end.",
          "**A futures contract simply stops existing on a published date**, and if you're still holding it, something happens to you.",
          "Two dates matter. **Last trading day** is when it stops trading. **First notice day** — on contracts that settle in actual goods — is when you could be assigned delivery, and it's usually *earlier* than expiry, which is the bit that catches people.",
          "Do nothing and one of two things happens: you're **cash-settled at a price you didn't pick**, or you're facing **delivery you didn't want**.",
          "In practice your broker will close you out beforehand. But **on their schedule, at their convenience** — which is a polite way of saying at whatever price happens to exist when they get round to it.",
          "**Both dates are published years in advance.** Not knowing them isn't bad luck."
        ],
        terms: [
          { term: 'Last trading day',
            plain: 'The final day the contract can be traded. After that it does not exist.',
            like: 'The last day of a ticket\'s validity. Nothing ambiguous about it.' },
          { term: 'First notice day',
            plain: 'The first day a holder of a physically-settled contract can be assigned delivery. Often before expiry.',
            like: 'The date the removal van can turn up. Earlier than you assumed, and it is in the paperwork.' },
          { term: 'Roll',
            plain: 'Closing the expiring contract and opening the same position in a later month, to keep your exposure.',
            like: 'Renewing a tenancy by signing a new one. Same flat, new agreement, new terms.' },
          { term: 'Front month',
            plain: 'The nearest expiry — usually the busiest and the one quoted in the news.',
            like: 'The next train. Most people are on it.' }
        ],
        close: [
          "So if you want to keep a position past expiry, you **roll**: close the expiring month, open the same position in a later one.",
          "Now the part that costs money quietly.",
          "**The two contracts trade at different prices.** You're not simply moving a position sideways — you're selling one thing and buying a different thing at a different price. **That difference is a real cost or a real gain.**",
          "And here's why it's so easily missed: **it appears on no statement.** There's no line item, no fee, no charge. It just shows up as a slightly worse entry price in the new month.",
          "People will hunt for a broker charging fifty pence less in commission while paying roll costs an order of magnitude larger, **because one appears on a statement and the other doesn't.**",
          "Practical note: **roll before liquidity drains out of the expiring month.** The last few days can carry a punishing spread as everyone else leaves — and you're paying that spread twice, once on each leg."
        ]
      },
      check: [
        { q: 'You hold a long future and do nothing as expiry approaches. What happens?',
          options: ['It rolls automatically at no cost', 'It is either cash-settled at a price you did not choose, or you face delivery — and your broker usually closes you out on their schedule', 'It converts to the underlying at your original entry price', 'It stays open indefinitely'],
          a: 1,
          why: 'Every contract dies on a published date. Doing nothing hands both the timing and the price to somebody else — and both dates were public years in advance.' },
        { q: 'Why is roll cost so easily overlooked?',
          options: ['It is very small', 'It appears on no statement — it shows up only as a worse entry price in the new month', 'Brokers hide it deliberately', 'It only applies to physical delivery'],
          a: 1,
          why: 'There is no fee, no line item, no charge. People compare commissions down to the penny while paying roll costs many times larger, purely because one is itemised and the other is not.' }
      ]
    },

    {
      title: 'The curve, and losing money in a flat market',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Plot the price of each delivery month against its date and you get **the futures curve**. Its shape decides whether rolling helps you or hurts you.",
          "**Contango** is when later months cost more than nearer ones. **Backwardation** is when they cost less.",
          "Now — why would oil for delivery in six months cost more than oil today? People immediately assume it means the market expects prices to rise.",
          "**That's mostly wrong, and it's one of the most expensive misreadings in commodities.**",
          "Ask a simpler question: **what does it cost to keep a barrel of oil for six months?** You need somewhere to put it. You need to insure it. And the money tied up in it isn't earning anything else.",
          "**That's contango.** It's storage, insurance and financing — arithmetic, not a forecast. An upward-sloping curve is mostly just the cost of carrying the stuff until the delivery date.",
          "**Backwardation is the interesting one.** Later months *cheaper* usually means people want the goods **now** — a shortage, a disruption, somebody who needs physical supply this week and will pay up for it."
        ],
        terms: [
          { term: 'Contango',
            plain: 'Later delivery months priced higher than nearer ones. Rolling a long position costs money.',
            like: 'Paying more for a later delivery slot because someone has to store the thing meanwhile.' },
          { term: 'Backwardation',
            plain: 'Later months priced lower than nearer ones. Rolling a long position gains money.',
            like: 'Paying a premium to get it today, because today is when you need it.' },
          { term: 'Cost of carry',
            plain: 'Storage, insurance and financing until delivery — the main reason a curve slopes up.',
            like: 'What a warehouse charges. Nothing to do with anyone\'s opinion of the price.' },
          { term: 'Continuous chart',
            plain: 'One long price history stitched together from many expired contracts.',
            like: 'A photo panorama. Looks like one image; it is several, joined and adjusted.' }
        ],
        close: [
          "Now put the two ideas together, because this is the payoff of the whole module.",
          "**You hold a long commodity future for a year. You roll it every month. The market is in contango throughout. And at the end of the year, the spot price is exactly where it started.**",
          "Every single roll, you sold the cheaper expiring month and bought the dearer next one. A little gone, twelve times.",
          "**You are down. On a market that did not move.**",
          "Nothing was wrong with your analysis — you were right, the price went nowhere and you expected nothing. **The structure took the money.**",
          "This is exactly why some commodity funds track their own index poorly over long periods. It's disclosed in every prospectus and almost nobody reads it, so people conclude they've been cheated. They haven't. It's carry.",
          "**So: futures are a poor instrument for a long-term buy-and-hold view on a market in persistent contango.** Know that before you build a strategy on one, not after.",
          "One last thing, about the chart in front of you.",
          "**No futures contract has years of history — they all expire.** So platforms stitch expired contracts together into one continuous line. But at every join the two contracts had different prices, so the joint has to be **adjusted**.",
          "Which means on a back-adjusted chart, **the historical prices are not prices that ever traded.** Levels you drew from two years ago may be artefacts of the adjustment, and two providers can show you two different histories of the same market.",
          "It's not dishonest — it's constructed. But you should know a construction when you're testing a strategy on one. **Go and find out which method your platform uses.**"
        ]
      },
      check: [
        { q: 'Spot price is unchanged after a year of monthly rolls in a contango market. Your rolled long position is:',
          options: ['Flat', 'Down, because every roll sold the cheaper month and bought the dearer one', 'Up, from the carry', 'Impossible to determine'],
          a: 1,
          why: 'Nothing was wrong with the analysis — the structure took it. This is why futures suit a long-term holding view badly in persistent contango, and why some commodity funds track their index poorly.' },
        { q: 'An upward-sloping futures curve mainly reflects:',
          options: ['The market forecasting higher prices', 'The cost of storing, insuring and financing the underlying until delivery', 'Manipulation by large traders', 'Stronger demand in later months'],
          a: 1,
          why: 'Contango is mostly carry, not forecast. Ask what it costs to keep a barrel of oil for six months and the slope stops looking like a prediction and starts looking like a warehouse invoice.' }
      ]
    }
  ];
})();
