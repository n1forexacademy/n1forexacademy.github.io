/* N1 Forex Academy — lessons for Module 703 (Spread Betting track).

   VOICE: Jonathan talking to one student. The genuinely important idea here is
   risk compensation: a safety feature that changes behaviour has become a risk
   feature. Protection is added AFTER sizing, never before. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[703] = [
    {
      title: 'A stop that actually holds',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "This wrapper has one genuine innovation, and it addresses a problem you've had since module 3.",
          "**An ordinary stop is an instruction, not a reserved price.** You've known that for a while. And in the share-gap drill you watched it fail properly — a stop filling **20% beyond its level** because the market gapped and there was nothing in between to fill against.",
          "**A guaranteed stop fixes exactly that.**",
          "It's a **contractual commitment by the provider** to close you at your level, whatever happens. Gap, crash, weekend, announcement — **you get your price.**",
          "**They take the gap risk instead of you.** That's genuinely valuable, and it's the only thing in this track you can't get elsewhere.",
          "**Which is exactly why it isn't free.** Somebody is now carrying a risk they didn't have before, and firms don't do that for nothing."
        ],
        terms: [
          { term: 'Guaranteed stop',
            plain: 'A stop the provider commits to honouring at your exact level, including across a gap.',
            like: 'A fixed-price quote rather than an estimate. They carry the overrun.' },
          { term: 'Premium',
            plain: 'What the guarantee costs — a wider spread, a fee, or a fee only if it triggers.',
            like: 'The insurance premium. Paid whether or not you claim.' },
          { term: 'Minimum distance',
            plain: 'How far from the current price a guaranteed stop must sit.',
            like: 'A minimum excess on a policy. It limits what you can insure against.' },
          { term: 'Gap event',
            plain: 'Price reopening a long way from where it closed, with nothing traded in between.',
            like: 'Sleeping through the whole second half. You could not have reacted.' }
        ],
        close: [
          "**Three ways providers charge for it**, and which one you're on changes when the cost lands.",
          "**A wider spread on entry** — you pay every time, whether or not the stop is ever touched.",
          "**An explicit premium** — a stated charge for the guarantee.",
          "**Or a premium charged only if it triggers** — cheaper in the common case, and note that the case where it fires is precisely the bad one.",
          "**And there's a fourth cost that isn't money.** Guaranteed stops have a **minimum distance** — they must sit at least so far from the current price.",
          "**That may be wider than the stop your chart actually wanted.** And since your position size comes from the stop distance, **a forced wider stop means a smaller position.** That's a real cost before any premium is charged, and it's the one people overlook.",
          "**So when is the premium worth paying?** Judge it as insurance.",
          "**Worth it:** holding through a scheduled event where a gap is genuinely likely — results, a rate decision, a vote. Or a market with a history of violent gaps. Or one you simply cannot watch.",
          "**Usually not worth it:** a short intraday position in a liquid market during active hours, where the gap risk you're insuring barely exists.",
          "**And judge it by what it would have prevented in the last real gap on that market — not by whether you've ever used one.** Insurance you never claim on is insurance working."
        ]
      },
      check: [
        { q: 'What does a guaranteed stop do that an ordinary stop cannot?',
          options: ['Execute faster', 'Commit the provider to closing you at your exact level even across a gap', 'Prevent losses entirely', 'Remove financing costs'],
          a: 1,
          why: 'An ordinary stop is an instruction, as module 3 established and the share-gap drill demonstrated. A guaranteed stop transfers the gap risk to the provider — which is why it is charged for.' },
        { q: 'A guaranteed stop has a minimum distance requirement. Why does that matter?',
          options: ['It does not affect anything', 'A wider forced stop means a smaller correctly sized position — a real cost even before any premium', 'It only affects the premium', 'It applies only to shares'],
          a: 1,
          why: 'Sizing comes from the stop distance, so a forced wider stop shrinks the stake. That constraint is the cost students most reliably overlook.' }
      ]
    },

    {
      title: 'When protection makes you less safe',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "Now the most important thing in this module, and it isn't about money at all.",
          "**The commonest harm from a guaranteed stop is behavioural.**",
          "Here's how it goes. You add the guarantee. The worst case is now genuinely bounded — you *know* what you can lose. It feels safer. **So you size larger.**",
          "**And at that moment the protection has cost you more than it saved.**",
          "You've bought a feature that caps your downside and then immediately used the comfort it gave you to raise your downside. **Net effect: worse than not having it.**",
          "This isn't a hypothetical quirk — it's a well-documented pattern. Give people a safety feature and a meaningful share of them spend the safety rather than banking it.",
          "**So the rule is about sequence: size exactly as you would have without the guarantee. Then add it, if the event justifies it.**",
          "**Protection is added after sizing. Never before.**",
          "**A safety feature that changes your behaviour has become a risk feature.**"
        ],
        terms: [
          { term: 'Negative balance protection',
            plain: 'A rule stopping your account going below zero. Availability varies.',
            like: 'A floor under the drop. It does not stop you hitting the floor.' },
          { term: 'Tail risk',
            plain: 'The rare, large loss the ordinary risk calculation does not capture.',
            like: 'The once-a-decade flood. Not in the average, and it is what ruins people.' }
        ],
        close: [
          "One last feature, and it's the one most often misread as reassurance.",
          "**Negative balance protection** stops your account going below zero after a catastrophic move. Whether you have it depends on your **jurisdiction and your client classification** — go and check, because people assume they have it and don't.",
          "**What it does:** stops you owing the provider money after a disaster.",
          "**What it does not do: stop you losing everything you deposited.**",
          "You'll hear it framed as *\"you can't lose more than your deposit\"*, which sounds like protection. **Read it the other way round: you can lose all of it.**",
          "**It's a backstop against a debt. It isn't a risk management tool**, and nothing about having it should change your position size by a single point of stake.",
          "That's the same reasoning as the guaranteed stop, applied to a different feature. **Both are worth having. Neither is a reason to hold more.**",
          "**Every protection in this module protects the downside you already chose. None of them licenses a bigger one.**"
        ]
      },
      check: [
        { q: 'You now have a guaranteed stop. Should you size larger?',
          options: ['Yes — the worst case is bounded', 'No — if the protection tempts you into a bigger position it has cost you more than it saved', 'Yes, up to double', 'Only on index markets'],
          a: 1,
          why: 'This is the commonest harm from the feature and it is behavioural rather than financial. Size exactly as you would without it, then add the guarantee if the event justifies it.' },
        { q: 'Negative balance protection means:',
          options: ['You cannot lose money', 'Your account cannot go below zero — you can still lose everything you deposited', 'Your stops are guaranteed', 'Losses are refunded'],
          a: 1,
          why: 'It is a backstop against owing the provider money, not a risk management tool. Nothing about having it should change your position size.' }
      ]
    }
  ];
})();
