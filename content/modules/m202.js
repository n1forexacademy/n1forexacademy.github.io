/* N1 Forex Academy — Module 202. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 202 ============================= */
{
  id: 202, track: 'bonds',
  title: "Price, Yield and the Inverse Relationship",
  tagline: "The single most important mechanic in fixed income, and the one that surprises everyone.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Explain why the price of a bond you already own falls when interest rates rise",
    "Tell apart the three different yields people quote at you",
    "Read a bond priced above or below 100 and say what that tells you",
    "Work out a simple yield, and read a yield to maturity properly",
    "Say what a rate change does to a bond you hold — and what it does not"
  ],

  misconceptions: [
    "**\"Rising rates are good for bond holders.\"** They are good for future buyers and bad for current holders. Higher yields mean lower prices on bonds already issued.",
    "**\"The yield is the coupon.\"** Only if you paid exactly par. Any other price and they differ.",
    "**\"A bond above 100 is overpriced.\"** It means its coupon beats current market rates, so buyers pay a premium for that advantage. It is priced correctly.",
    "**\"I'll hold to maturity so price doesn't matter.\"** It does not affect your final cash flows, but it absolutely affects what your money could have been earning meanwhile."
  ],

  glossary: [
    { t: "Par", d: "Face value, conventionally 100. The amount repaid at maturity." },
    { t: "Premium", d: "A price above par, because the coupon exceeds current market yields." },
    { t: "Discount", d: "A price below par, because the coupon is below current market yields." },
    { t: "Current yield", d: "Annual coupon divided by current price. A quick approximation ignoring maturity." },
    { t: "Yield to maturity", d: "The total annualised return if held to maturity, counting coupons and the pull toward par." },
    { t: "Pull to par", d: "The tendency of a bond's price to converge on face value as maturity approaches." },
    { t: "Market yield", d: "The prevailing yield demanded for comparable bonds today." },
    { t: "Accrued interest", d: "Coupon earned but not yet paid, added to the price when a bond changes hands." }
  ],

  slides: [
    {
      kicker: "Module 202 · The mechanic",
      title: "Why price falls when yields rise",
      bullets: [
        "You hold a bond paying **4%**. New bonds are suddenly issued paying **6%**.",
        "**Nobody will pay you 100 for a 4% bond** when they can get 6% elsewhere.",
        "Your bond's price must **fall** until its return matches what is available — until buying it yields about 6%.",
        "**That is the inverse relationship.** Rates up, price of existing bonds down.",
        "**Nothing changed about your bond.** The alternatives changed, and price is relative to alternatives."
      ],
      note: "Work this on the board with real numbers before showing the slide. Once a student has derived the price fall themselves, the inverse relationship stops being a rule to memorise and becomes obvious."
    },
    {
      kicker: "Module 202 · Three yields",
      title: "Coupon, current yield, yield to maturity",
      bullets: [
        "**Coupon:** fixed at issue, a percentage of face value. Never changes.",
        "**Current yield = coupon ÷ price.** Quick, and ignores what happens at maturity.",
        "**Yield to maturity (YTM):** the total annualised return if held to the end, counting every coupon *and* the gain or loss as price pulls to par.",
        "**YTM is the number that matters** and the one bonds are quoted on.",
        "Buy at a **discount** and YTM exceeds the coupon. Buy at a **premium** and it is less."
      ],
      note: "Students conflate these three constantly. Give them one bond and have them compute all three figures — the differences make the distinction concrete far better than definitions do."
    },
    {
      kicker: "Module 202 · Reading a price",
      title: "What a premium or discount tells you",
      bullets: [
        "**Price above 100 (premium):** this bond's coupon beats current market yields.",
        "**Price below 100 (discount):** its coupon is below current market yields.",
        "**Price at 100:** its coupon is roughly the current market yield.",
        "**Neither is a bargain or a rip-off.** The price has already adjusted so all comparable bonds offer similar returns.",
        "**Pull to par:** whatever the price today, it converges on 100 as maturity approaches."
      ],
      note: "The pull to par explains why a discounted bond delivers a capital gain over time even with no change in rates. It is a mechanical certainty as long as the issuer pays, and students find it genuinely reassuring once seen."
    },
    {
      kicker: "Module 202 · Worked example",
      title: "A rate rise, worked through",
      bullets: [
        "You hold a bond: **5% coupon**, **five years** left, bought at **100**. Yield 5%.",
        "Market yields for comparable five-year bonds rise to **7%**.",
        "Your bond's price falls to roughly **92** — where its remaining cash flows yield about 7%.",
        "**You are down about 8%**, on a bond nobody defaulted on.",
        "**Hold to maturity and you still get 5% a year and 100 back.** You just spent five years earning less than you could have."
      ],
      note: "This example carries the whole module. It shows a real loss with no default, and it explains what 'safe' actually fails to mean. Have them repeat it with a twenty-year bond to preview Module 203."
    },
    {
      kicker: "Module 202 · Implications",
      title: "What this means in practice",
      bullets: [
        "**Bond prices move daily**, driven by rate expectations rather than issuer news.",
        "**Falling rates are good for existing holders.** Prices rise.",
        "**Rising rates hurt existing holders** and help new buyers.",
        "**This is why bond markets react so violently to central bank language** — Module 9's lesson, seen from the other side.",
        "**Bonds are not a way to avoid volatility.** They are a different exposure with its own volatility."
      ],
      note: "Tie this back explicitly to Module 9. When a central bank signals higher rates, students learned the currency rises. Now they can see the mechanism: bond yields moved first, and the currency followed the rate expectation."
    },
    {
      kicker: "Module 202 · Wrap",
      title: "The core mechanic",
      bullets: [
        "Why existing bond prices must fall when market yields rise",
        "The difference between coupon, current yield and yield to maturity",
        "How to read a premium or discount and why neither is a bargain",
        "That a bond can lose value badly with no default whatsoever",
        "Why bond markets react so sharply to central bank language"
      ],
      note: "If a student can explain the inverse relationship without hesitation, the rest of this track follows easily. If they cannot, nothing in Modules 203 to 206 will make sense — go back to the worked example."
    }
  ],

  practical: {
    title: "Lab 202 — Price a bond under changing rates",
    time: "70 min",
    intro: "The student builds a simple bond pricing sheet and watches the inverse relationship emerge from their own arithmetic rather than being told about it.",
    setup: [
      "A spreadsheet named **Bond Pricing**",
      "The three bonds from Lab 201",
      "A market data site showing current government bond yields"
    ],
    steps: [
      { h: "Lay out the cash flows", d: "For a 5% coupon, five-year, 100 face value bond, list every payment and its date: five coupons of 5, plus 100 at maturity. Total the undiscounted cash." },
      { h: "Discount them", d: "Build a column that discounts each cash flow at a market yield you input. Sum the discounted values to get the price. Set the yield to 5% and confirm the price comes out at 100 — that check validates the sheet." },
      { h: "Move the yield", d: "Recompute the price at market yields of 3%, 4%, 6%, 7% and 9%. Chart price against yield. The downward slope is the inverse relationship, derived by you." },
      { h: "Compute all three yields", d: "For a bond priced at 92 with a 5% coupon and five years remaining, compute the current yield and estimate the YTM. Explain in one sentence why YTM exceeds the current yield." },
      { h: "Compare maturities", d: "Repeat the price-versus-yield chart for a two-year and a twenty-year bond with the same coupon. Note which moves most for the same yield change — this previews Module 203." },
      { h: "Check against reality", d: "Look up your government's current ten-year yield and compare it with the coupon on the bond you found in Lab 201. Predict whether it trades above or below par, then check." }
    ],
    deliverable: "A **Bond Pricing** spreadsheet: a discounted cash flow model validated at par, a price-versus-yield chart across six yield levels, current yield and YTM computed for a discounted bond with an explanation, comparative charts for two-, five- and twenty-year maturities, and a verified prediction of premium or discount on a real bond.",
    rubric: [
      { c: "Model validity", d: "The sheet returns exactly 100 when the yield equals the coupon — the check that proves the discounting is right." },
      { c: "Inverse relationship", d: "Chart clearly shows price falling as yield rises, and the student can explain the mechanism in terms of alternatives." },
      { c: "Yield distinction", d: "Correctly computes current yield and can explain why YTM differs on a discounted bond." },
      { c: "Maturity insight", d: "Identified that longer maturities move more for the same yield change, and can say why." },
      { c: "Real-world check", d: "Predicted premium or discount from the coupon-versus-yield comparison and verified it." }
    ],
    pitfalls: [
      "Forgetting the principal repayment in the final period. It is the largest single cash flow.",
      "Discounting at the coupon rate rather than the market yield. The market yield is the input; the coupon is fixed.",
      "Confusing current yield with YTM on a discounted bond. The difference is the pull to par.",
      "Being surprised that a bond lost value with no default. That is precisely the lesson."
    ]
  },

  homework: [
    "Track your government's ten-year yield daily for a week and note how bond prices moved inversely.",
    "Find a bond trading well below par and work out what its coupon and remaining maturity imply.",
    "Explain the inverse relationship in writing to someone who has never encountered it, in under 100 words."
  ],

  quiz: [
    { q: "You hold a 4% coupon bond. Market yields for comparable bonds rise to 6%. What happens to your bond's price?",
      options: ["It rises, because rates are higher", "It falls, until its remaining cash flows yield about 6%", "It stays at par", "It depends on the issuer's profits"],
      a: 1,
      why: "Nobody pays par for a 4% bond when 6% is available elsewhere. Price falls until the return matches the alternatives. Nothing changed about your bond — the alternatives changed, and price is relative to alternatives." },
    { q: "A bond trades at 92 with a 5% coupon. Its yield to maturity is:",
      options: ["Exactly 5%", "Below 5%", "Above 5%, because you also gain as the price pulls to par", "Impossible to determine"],
      a: 2,
      why: "You buy at a discount and receive 100 at maturity, so the capital gain adds to the coupon return. YTM counts both, which is why it exceeds the coupon on any bond bought below par." },
    { q: "A bond trading at 108 is:",
      options: ["Overpriced and should be avoided", "Priced so its coupon advantage over current market yields is fairly valued", "About to default", "Mispriced by the market"],
      a: 1,
      why: "A premium simply means the coupon beats what new issues offer, so buyers pay for that advantage. The price has already adjusted so comparable bonds deliver similar returns — neither premium nor discount is a bargain in itself." },
    { q: "You hold a bond to maturity through a period of sharply rising rates. Your final cash flows are:",
      options: ["Reduced by the rate rise", "Unchanged — you receive every coupon and the face value, assuming no default", "Increased", "Determined by the price at the time"],
      a: 1,
      why: "Holding to maturity removes price risk on the cash flows, provided the issuer pays. What you did lose is opportunity: your money earned the old rate while better ones became available." },
    { q: "Why do bond markets react so violently to central bank language?",
      options: ["Bonds are illiquid", "Because rate expectations directly determine bond prices through the inverse relationship", "Because bonds are riskier than shares", "Because coupons are reset"],
      a: 1,
      why: "A shift in expected rates immediately reprices every existing bond. This is the other side of Module 9: the currency moved because rate expectations changed, and those expectations are priced in bonds first." }
  ]
}

]);
