/* N1 Forex Academy — lessons for Module 406 (Options track).

   VOICE: Jonathan talking to one student. Closes the options track. Two things
   must land: the covered call's cost is invisible (a gain not received rather
   than a loss on a statement), and defined-risk-only is the clause that lets a
   beginner be wrong repeatedly without a catastrophe. Ends without
   encouragement, same as futures. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[406] = [
    {
      title: 'Four structures, and what each really costs',
      slides: [0, 1, 2],
      teach: {
        lead: [
          "There are hundreds of named option structures with impressive names. **Four cover almost everything you'll genuinely need**, and I'd rather you knew four properly than twelve badly.",
          "**Long call or long put.** A directional view with your loss capped at the premium. Simple — and it needs all three things right.",
          "**Vertical spread.** Buy one strike, sell another. Cheaper, defined risk, capped gain.",
          "**Covered call.** Sell a call against shares you already own. Income now.",
          "**Protective put.** Buy a put against shares you own. Straightforward insurance.",
          "Before the details, one warning about the ones you'll be tempted by.",
          "**Every extra leg costs another spread and adds another way to be wrong.** You met option spreads in module 402 — several percent of premium, paid twice. **Now pay that four times over on a four-legged structure and you've given away your edge before the market has moved.**",
          "**Complexity is a cost, not a sign of skill.**"
        ],
        terms: [
          { term: 'Vertical spread',
            plain: 'Buying one option and selling another of the same type and expiry at a different strike.',
            like: 'Buying a full ticket and selling on a partial one. Cheaper net, and you gave something up.' },
          { term: 'Defined risk',
            plain: 'A position whose maximum loss is known and capped before you enter.',
            like: 'A fixed-price quote. You know the worst case before you agree to it.' },
          { term: 'Covered call',
            plain: 'Selling a call against shares you own. Income now, upside surrendered.',
            like: 'Renting out your house with an option for the tenant to buy at a fixed price.' },
          { term: 'Protective put',
            plain: 'Buying a put against shares you own — insurance on a holding.',
            like: 'Contents insurance. You hope it is wasted money.' }
        ],
        close: [
          "Take the **vertical spread**, because it solves a problem you already have.",
          "**Buy a call at 100, sell a call at 110.** The sold leg brings in premium, so the whole thing costs less. In exchange, **your gain is capped** at the gap between the strikes, less what you paid.",
          "Here's the underrated part: **it also cuts your volatility exposure.** You're long vega on the leg you bought and short vega on the leg you sold, so **IV crush hurts less.**",
          "If module 404 left you thinking options were rigged against buyers, **the spread is the structural answer to that.**",
          "And crucially: **max gain, max loss and break-even are all computable before you enter.** So compute them. Every time.",
          "Now the **covered call**, which feels like the safest trade in this module and quietly isn't.",
          "You own 100 shares, sell a call against them, collect a premium. If the shares go nowhere or drift down, **you keep it.** It feels like being paid simply for owning what you already own.",
          "**But if the shares rally hard, your upside is gone.** You deliver at the strike and watch the rest happen without you.",
          "**And here's why people repeat this mistake for years: the cost is invisible.** A capped rally doesn't show up on a statement as a loss. It shows up as **a gain you never received**, and nothing anywhere records it.",
          "**A covered call is not free income. It's selling your upside** — and it only makes sense when you'd genuinely have been happy to sell at that price anyway."
        ]
      },
      check: [
        { q: 'You buy a call at 100 and sell a call at 110, same expiry. Compared with the single long call, this position:',
          options: ['Costs more and keeps unlimited upside', 'Costs less, caps the gain at the strike width less premium paid, and reduces volatility exposure', 'Has an identical risk profile', 'Cannot lose money'],
          a: 1,
          why: 'The sold leg pays for part of the bought one, caps the gain, and absorbs some volatility exposure — which is why spreads survive IV crush far better than a single long option.' },
        { q: 'A covered call during a strong rally:',
          options: ['Produces the best possible outcome', 'Caps your upside — and the cost is a gain you never received rather than a loss on a statement', 'Loses you the premium', 'Turns into a protective put'],
          a: 1,
          why: 'Because the cost is invisible, people repeat this through a whole bull market and end up quietly poorer than if they had simply held. It is selling upside, not free income.' }
      ]
    },

    {
      title: 'Assignment, your policy, and an honest answer',
      slides: [3, 4, 5],
      teach: {
        lead: [
          "There is one operational risk here with no equivalent in any earlier track, and it is easy to underestimate because nothing so far has worked this way.",
          "**If you sold an option, the buyer can exercise, and you must deliver. That's assignment.** You don't get asked. You don't get to decline.",
          "And the timing depends on something you have to check: **exercise style.**",
          "**American-style options can be assigned at any time** before expiry. **European-style only at expiry.** It's on the contract specification and it changes what can happen to you overnight.",
          "**Early assignment tends to arrive when it's least convenient** — around dividend dates, or straight after a sharp move. That isn't bad luck; those are precisely the moments exercising becomes worthwhile for the holder.",
          "So the rule is short: **never sell an option whose assignment you couldn't comfortably handle tomorrow morning.**",
          "If you couldn't fund it or deliver the shares, you don't have a position. **You have a problem that hasn't arrived yet.**"
        ],
        terms: [
          { term: 'Assignment',
            plain: 'Being required to deliver because the option you sold was exercised.',
            like: 'The insurance claim landing. You do not get to decline it.' },
          { term: 'Exercise style',
            plain: 'American options can be exercised any time before expiry; European only at expiry.',
            like: 'An open ticket versus one valid on a single date.' },
          { term: 'Naked short option',
            plain: 'A sold option with nothing offsetting it. Undefined risk.',
            like: 'Underwriting insurance with no reserves and no reinsurance.' },
          { term: 'Undefined risk',
            plain: 'A position whose loss has no practical ceiling.',
            like: 'A bill with no upper limit printed on it.' }
        ],
        close: [
          "**Now your policy — and once again, three additions rather than a new document.**",
          "Everything carries over: risk per trade, position limits, never averaging down, daily and weekly stops, correlated positions counted once.",
          "**Add: defined risk only, at least while you're learning. No naked short options.** This is the clause that matters most. It means you can be wrong repeatedly — and you will be — **without a single trade being able to end you.**",
          "**Add: the premium you paid counts as risk in full.** A bought option genuinely can go to zero, so size it as though it will. Not as though it'll retain some value, because plenty don't.",
          "**Add: an event rule.** Check every scheduled event before your expiry, and if IV crush is coming, treat it as a cost you've chosen rather than a surprise you suffered.",
          "**And a liquidity rule**, from module 402: only strikes and expiries you could actually exit in a hurry.",
          "Right — the honest close, because you've earned a straight answer rather than encouragement.",
          "**What options genuinely give you:** insurance on a holding you want to keep. A way to express a view with a known, capped loss. Income from shares you were content to sell anyway.",
          "**What they genuinely cost you:** wide spreads, three things to get right at once, decay while nothing happens, and a volatility exposure you didn't ask for.",
          "And the sentence I'd most like you to remember from this track:",
          "**Options do not make a weak directional view profitable. They add requirements to it.**",
          "**So if your equity or forex process isn't yet producing consistent results, options will not rescue it.** They raise the bar rather than lowering it. That's not discouragement — it's the order of operations.",
          "Plenty of sensible people finish this track and conclude: *protective puts on holdings I want to keep, and nothing else.* **That is a completely respectable place to stop**, and it's a better outcome than a clever structure you don't fully understand."
        ]
      },
      check: [
        { q: 'You have sold an American-style option. When can you be assigned?',
          options: ['Only at expiry', 'At any time before expiry — often when least convenient, around dividends or after a sharp move', 'Only if it is deep in the money', 'Only if you agree to it'],
          a: 1,
          why: 'Assignment is not something you consent to. The rule that follows: never sell an option whose assignment you could not comfortably handle tomorrow morning.' },
        { q: 'Your equity process is not yet producing consistent results. Should you add options?',
          options: ['Yes — the leverage will improve returns', 'No — options add requirements to a view rather than improving it, so a weak view becomes harder to express, not easier', 'Yes, but only covered calls', 'Yes, provided everything is defined risk'],
          a: 1,
          why: 'Options need direction, size and timing simultaneously. They cannot rescue a directional edge that is not there yet — they raise the bar it has to clear.' }
      ]
    }
  ];
})();
