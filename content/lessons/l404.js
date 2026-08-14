/* N1 Forex Academy — lessons for Module 404 (Options track).

   VOICE: Jonathan talking to one student. The insurance-after-a-storm framing
   explains IV in one move: why it rises on fear, why it is not predictive, and
   why being paid more to sell is not obviously a bargain. IV crush is the
   commonest way beginners lose on options and it must be worked with numbers,
   because in the abstract it sounds like an excuse. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[404] = [
    {
      title: 'Volatility has no direction',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "Here's a question that will feel like a trick and isn't.",
          "**Two people agree exactly where a share is heading. Can they still disagree about what the option is worth?**",
          "**Yes — completely.** Because direction is only half the question, and this module is the other half.",
          "**Volatility measures how far a price moves, not which way.** That's the whole definition. A market can be violently volatile all year and finish exactly where it started.",
          "It's usually quoted as an annual percentage. 20% volatility means roughly a 20% range of typical yearly movement.",
          "Now the split that matters, and it's the heart of this module.",
          "**Realised volatility** is how much the underlying *actually* moved. That's a measurement of the past — checkable, factual.",
          "**Implied volatility** is what the current option price implies about the future. And this is the bit people get wrong: **it is a price, not a forecast.**"
        ],
        terms: [
          { term: 'Volatility',
            plain: 'How much a price moves about. No direction attached.',
            like: 'How rough the sea is. It says nothing about which way the boat ends up.' },
          { term: 'Realised volatility',
            plain: 'How much the underlying actually moved over a past period. A measurement.',
            like: 'Last month\'s weather records.' },
          { term: 'Implied volatility (IV)',
            plain: 'The volatility figure implied by what people are currently paying. A price.',
            like: 'What the insurance costs today. Not a forecast of the weather.' },
          { term: 'Vega',
            plain: 'How much an option\'s price moves when implied volatility changes.',
            like: 'How sensitive your premium is to the insurer changing their mind about risk.' }
        ],
        close: [
          "Think about what happens to home insurance premiums the week after a storm. **They go up.** Not because anyone knows another storm is coming — because everyone wants cover at once, and that demand sets the price.",
          "**Implied volatility works exactly like that.** When lots of people want protection, options get expensive and IV rises. **It's the price of uncertainty, set by supply and demand**, and it's wrong in both directions regularly.",
          "So the honest translation is short: **high IV means options are expensive. Low IV means they're cheap.** That's it. Anyone telling you IV predicts the future is reading a price tag as a weather forecast.",
          "Now the consequence that catches people, because it means your simple trade wasn't simple.",
          "**Every bought option is long volatility.** If IV rises, you gain — even with the underlying still. If IV falls, you lose — even if you were right about direction.",
          "**Every sold option is short volatility.** The mirror image.",
          "So when you buy a call, **you haven't placed one bet. You've placed two.** One on direction, and one that volatility doesn't collapse underneath you.",
          "**You may not have chosen that second bet. You are in it regardless.** That's the next lesson."
        ]
      },
      check: [
        { q: 'Implied volatility is best described as:',
          options: ['A forecast of how much the price will move', 'The market\'s current price for uncertainty, worked backwards out of the option price', 'A measurement of how much the price has already moved', 'The same thing as realised volatility'],
          a: 1,
          why: 'It is a price, not a prediction — like insurance premiums rising after a storm. High IV means options are expensive; low IV means cheap. It is set by demand and is wrong in both directions regularly.' },
        { q: 'You buy a call, the underlying does not move, but implied volatility falls sharply. Your position:',
          options: ['Is unchanged', 'Loses money — every bought option is long volatility', 'Gains money', 'Is unaffected until expiry'],
          a: 1,
          why: 'Buying an option is not purely a directional trade. You also bet that volatility would not collapse, whether or not you realised you were making that bet.' }
      ]
    },

    {
      title: 'Right about the move, wrong about the price',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "This lesson is about the single most common way beginners lose money on options. It's completely predictable, entirely visible in advance, and it feels exactly like being cheated.",
          "Think about what happens before a company reports results.",
          "**Everybody knows something big might happen.** So everybody wants options. Demand goes up, prices go up, and **implied volatility rises** in the days beforehand. Options expiring after the results carry an **event premium** on top of ordinary time value.",
          "Then the results come out.",
          "**And the uncertainty is gone.** Whatever was going to happen has happened. Nobody needs to pay for the possibility any more, so **implied volatility collapses**, often within minutes.",
          "That's **IV crush**. And here's what it does to you.",
          "**You can predict the direction correctly, get the move you expected, and still lose money on the option.**"
        ],
        terms: [
          { term: 'Event premium',
            plain: 'The extra value carried by options expiring after a known event.',
            like: 'Hotel prices during a festival. Everyone knows the date, so everyone is charged for it.' },
          { term: 'IV crush',
            plain: 'The sharp fall in implied volatility once a known event has passed.',
            like: 'Those same hotel prices, the morning after the festival ends.' },
          { term: 'Skew',
            plain: 'Different strikes implying different volatilities — downside puts usually dearer.',
            like: 'Flood cover costing more than sunshine cover. A statement about demand, not about odds.' },
          { term: 'Rich / cheap',
            plain: 'Whether implied volatility is high or low compared with what the underlying actually does.',
            like: 'Whether the insurance looks dear relative to how often the thing actually breaks.' }
        ],
        close: [
          "Let me put numbers on it, because in the abstract this sounds like an excuse.",
          "**You buy an at-the-money call before results. Implied volatility is 70 — expensive, because everyone is bracing.** You pay a fat premium.",
          "**Results land. The share rises 4%, exactly as you predicted.** Your call gains some intrinsic value. Good.",
          "**But IV falls from 70 to 35**, because the uncertainty has been resolved. **All that event premium evaporates.**",
          "**The intrinsic value you gained is smaller than the extrinsic value you lost. The position is down.** You were right and it cost you.",
          "So how do you avoid it? Notice the event premium **before** you buy. Compare the implied volatility of the expiry after the event against one before it — **that gap is what you're being charged for the event**, and it's visible on any chain, free, in advance.",
          "Then decide deliberately. If you want the event, you might be better expressing it in the underlying itself, where there's no volatility to collapse.",
          "One last habit: **compare implied volatility to what the underlying has actually been doing.** IV far above realised volatility means options are expensive; far below means cheap.",
          "**But high IV is usually high for a reason.** Being paid more to sell insurance right before a storm is not obviously a bargain — you're being paid more precisely because the danger is real.",
          "**Context for choosing structure. Not a signal.** Same verdict as open interest, credit spreads and positioning — you've now met that answer four times, which should tell you something."
        ]
      },
      check: [
        { q: 'A share rises 4% on results, exactly as you predicted, but your call loses money. The most likely reason:',
          options: ['The broker mispriced it', 'IV crush — the event premium you paid for collapsed once the uncertainty was resolved', 'The move went the wrong way', 'One day of time decay'],
          a: 1,
          why: 'You bought elevated implied volatility, and the moment results landed that uncertainty disappeared. The intrinsic value gained was smaller than the extrinsic value lost.' },
        { q: 'Downside puts on an index typically imply higher volatility than equivalent upside calls. This mainly reflects:',
          options: ['A mathematical error in the pricing model', 'Demand — more people want protection against falls than exposure to rises', 'That falls are always bigger than rises', 'A regulatory requirement'],
          a: 1,
          why: 'The skew is a statement about demand, not about probability. Insurance costs what people will pay for it, and protection is wanted more urgently than upside.' }
      ]
    }
  ];
})();
