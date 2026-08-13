/* N1 Forex Academy — lessons for Module 203 (Bonds track).

   VOICE: Jonathan talking to one student. Duration is this track's ATR — the
   number you size from — so it is framed that way explicitly. The see-saw
   carries why distant money moves more, and the closing point is that reaching
   for yield through duration is a rate bet whether or not it was intended. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[203] = [
    {
      title: 'Measuring how much rates hurt',
      slides: [0, 1],
      teach: {
        lead: [
          "Last module showed you that rate moves change bond prices. This one gives you the number that says **by how much** — and it's the single most useful figure in fixed income.",
          "**Duration is roughly the percentage a bond's price moves for a 1% change in yields.**",
          "A bond with a duration of 7 falls about **7%** if yields rise 1%. Duration of 2, falls about 2%. That's the whole idea.",
          "It has a second meaning that sounds unrelated and isn't: **duration is also the weighted average time until you actually receive your money.** A bond that pays you back sooner has a shorter duration.",
          "**Both meanings point the same way, and here's the picture that explains why.**",
          "Think of a see-saw. **The further from the pivot you sit, the more you move** when it tips. Money you receive next year sits close to the pivot — a rate change barely shifts what it's worth. Money you receive in twenty-five years sits right out at the end, and the same tip throws it a long way.",
          "**This one number tells you more about a bond's risk than its credit rating does.**"
        ],
        terms: [
          { term: 'Duration',
            plain: 'Roughly the percentage price change for a 1% move in yields. Also the average wait for your money.',
            like: 'How far out on the see-saw you are sitting. Further out, bigger swing.' },
          { term: 'Interest rate risk',
            plain: 'The risk of losing money because market yields rose, with no default involved.',
            like: 'Your fixed savings deal looking worse because the bank next door raised its rate.' },
          { term: 'Zero-coupon bond',
            plain: 'A bond paying no interest at all — you buy below 100 and receive 100 at the end.',
            like: 'All the money in one lump at the finish. Nothing along the way.' },
          { term: 'Reinvestment risk',
            plain: 'The risk that when coupons arrive, you can only reinvest them at lower rates.',
            like: 'A good deal ending and nothing as good available to replace it.' }
        ],
        close: [
          "So what makes duration long or short?",
          "**Maturity is the big one.** A two-year bond hands your principal back soon — rate changes have little time to do damage. A thirty-year bond has payments stretching decades out, all of them sitting far from the pivot.",
          "**Same 1% rate rise: a two-year bond might fall about 2%. A thirty-year bond might fall 20% or more.** Identical event, wildly different consequence.",
          "**A higher coupon shortens duration**, which surprises people. If you're getting a lot of money back early, your average wait is shorter and you're sitting closer to the pivot.",
          "**And a zero-coupon bond has the longest duration of all** — it pays you nothing until the very end, so every penny of it sits right out at the tip of the see-saw. For a zero-coupon bond, duration equals maturity exactly.",
          "That's why a thirty-year zero-coupon bond is the most rate-sensitive ordinary bond you can buy. It sounds dull and it moves like a leveraged position."
        ]
      },
      check: [
        { q: 'A bond has a duration of 9 and yields rise 0.5%. Its price roughly:',
          options: ['Rises 4.5%', 'Falls 4.5%', 'Falls 9%', 'Is unchanged'],
          a: 1,
          why: 'Price change ≈ − duration × yield change = −9 × 0.5% = −4.5%. Duration is the single most useful number for judging a bond\'s rate risk.' },
        { q: 'Two bonds mature in ten years. One has a 2% coupon, the other 8%. Which has longer duration?',
          options: ['The 8% bond', 'The 2% bond, because more of its value arrives at maturity', 'They are identical', 'Depends on the issuer'],
          a: 1,
          why: 'Duration is the weighted average time to receive the cash. A high coupon returns money earlier, shortening duration; a low coupon concentrates value at the end.' }
      ]
    },

    {
      title: 'Sizing with duration, and its limits',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "Here's how you actually use it, and it should feel familiar.",
          "**Price change ≈ − duration × yield change**",
          "Duration 12, yields rise 0.5% → price falls about **6%**. Duration 3, same move → about **1.5%**.",
          "**This is your position sizing tool for bonds.** It's the direct equivalent of ATR in the forex track — the number that tells you how much this thing actually moves, so you can size to it rather than guessing.",
          "And it gives you the same kind of test the 40% gap question gave you in equities. **Before you buy anything, ask:**",
          "**\"What does a 1% rate rise do to this?\"**",
          "Multiply the duration by one. That's roughly your loss. If the answer is unacceptable, **the duration is too long** — and the fix is a shorter-dated bond, not hoping rates behave."
        ],
        terms: [
          { term: 'Modified duration',
            plain: 'The version of duration actually used for price sensitivity. The one your platform quotes.',
            like: 'The everyday version of a measurement, adjusted so it works in practice.' },
          { term: 'Convexity',
            plain: 'The fact that the price-yield relationship is a curve, so duration is only exact for small moves.',
            like: 'A road that looks straight from close up and bends over a distance.' },
          { term: 'Short duration',
            plain: 'Low sensitivity to rates. Usually short maturity or a high coupon.',
            like: 'Sitting near the middle of the see-saw. Not much happens to you.' },
          { term: 'Long duration',
            plain: 'High sensitivity to rates. Usually long maturity and a low coupon.',
            like: 'Sitting right out on the end. Every tip throws you.' }
        ],
        close: [
          "**One honest caveat: duration is an approximation.**",
          "The relationship between price and yield is a **curve**, not a straight line, and duration is the slope measured at one point. So it's accurate for small moves and progressively less accurate for large ones.",
          "That curvature is called **convexity**, and here's the good news: **for an ordinary bond it works in your favour.** Prices rise slightly *more* than duration predicted when yields fall, and fall slightly *less* than predicted when yields rise.",
          "**You don't need the mathematics.** You need to know that duration errs on the pessimistic side for big moves, which is the right direction for an error to run.",
          "**Now, matching duration to what you actually think:**",
          "**Expect rates to fall?** Long duration gains most — and loses most if you're wrong. **Expect rates to rise?** Short duration protects you. **No view at all?** Short-to-intermediate takes less risk for less yield, and having no view is a perfectly respectable position.",
          "**Need the money on a particular date?** Match the maturity to that date. If the timing lines up, price moves in between stop mattering much.",
          "**And the trap this whole module exists to warn you about:**",
          "Long-dated bonds yield more. So people reach for the higher yield without thinking about what came attached to it. **Extending duration for yield is a directional bet on interest rates, whether or not you intended to make one.**",
          "The extra yield isn't free money — it's the compensation for that risk. And a rate rise can wipe out several years of the extra income inside a few weeks."
        ]
      },
      check: [
        { q: 'Which carries the most interest rate risk?',
          options: ['A two-year bond with an 8% coupon', 'A ten-year bond with a 5% coupon', 'A thirty-year zero-coupon bond', 'A one-year bond'],
          a: 2,
          why: 'A zero-coupon bond pays nothing until maturity, so duration equals maturity — the maximum possible. Thirty years of sensitivity makes it the most rate-sensitive of the four.' },
        { q: 'An investor buys long-dated bonds because they yield more. What have they actually done?',
          options: ['Secured higher returns with no extra risk', 'Taken a substantial directional position on interest rates, intended or not', 'Reduced portfolio risk', 'Eliminated reinvestment risk'],
          a: 1,
          why: 'Extending duration for yield is a rate bet. The extra yield is compensation for that risk, and a rate rise can erase several years of the additional income in weeks.' }
      ]
    }
  ];
})();
