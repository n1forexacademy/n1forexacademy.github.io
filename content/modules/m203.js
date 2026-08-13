/* N1 Forex Academy — Module 203. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 203 ============================= */
{
  id: 203, track: 'bonds',
  title: "Duration and Interest Rate Risk",
  tagline: "Why a twenty-year bond is a completely different risk from a two-year one with the same coupon.",
  level: "Core skill",
  duration: "90 min",

  objectives: [
    "Explain duration as a measure of sensitivity to rate changes",
    "Estimate the price impact of a rate move using duration",
    "Explain why longer maturities are more sensitive",
    "Describe convexity in plain terms without the mathematics",
    "Choose a maturity appropriate to a rate view and a risk tolerance"
  ],

  misconceptions: [
    "**\"Duration is just maturity.\"** They are related but not the same. Duration weights each cash flow by when it arrives, so a high-coupon bond has a shorter duration than its maturity suggests.",
    "**\"Government bonds can't lose much.\"** A long-dated government bond can fall 30% or more when rates rise sharply. No default required.",
    "**\"Short-dated bonds are pointless, the yield is low.\"** They are far less rate-sensitive. You are being paid less because you are taking less risk.",
    "**\"Duration tells me exactly what will happen.\"** It is a linear approximation that becomes less accurate for large moves — which is what convexity describes."
  ],

  glossary: [
    { t: "Duration", d: "Approximate percentage price change for a 1% change in yield. Also the weighted average time to receive the cash flows." },
    { t: "Modified duration", d: "The version used for price sensitivity, adjusted for the yield level." },
    { t: "Convexity", d: "The curvature in the price-yield relationship, meaning duration under- or over-estimates large moves." },
    { t: "Interest rate risk", d: "The risk of price loss from a rise in market yields." },
    { t: "Reinvestment risk", d: "The risk that coupons must be reinvested at lower rates than the original." },
    { t: "Short duration", d: "Low sensitivity to rate moves. Typically short maturity or high coupon." },
    { t: "Long duration", d: "High sensitivity. Typically long maturity and low coupon." }
  ],

  slides: [
    {
      kicker: "Module 203 · The measure",
      title: "Duration in one sentence",
      bullets: [
        "**Duration ≈ the percentage a bond's price moves for a 1% change in yield.**",
        "A bond with duration **7** falls roughly **7%** if yields rise 1%.",
        "It also has a second meaning: the **weighted average time** until you receive your money.",
        "**Both meanings point the same way** — the longer you wait, the more sensitive you are.",
        "**This one number tells you more about a bond's risk than its credit rating does.**"
      ],
      note: "Lead with the practical meaning and mention the weighted-average-time definition second. Students who meet the formal definition first often lose the intuition entirely."
    },
    {
      kicker: "Module 203 · Why length matters",
      title: "The further away the money, the more it moves",
      bullets: [
        "A **two-year** bond returns your principal soon. Rate changes have little time to matter.",
        "A **thirty-year** bond has payments stretching decades out. Discounting those over a longer period magnifies any yield change enormously.",
        "**Same 1% rate rise:** a two-year bond might fall about 2%; a thirty-year might fall 20% or more.",
        "**Higher coupons shorten duration** — you get more of your money back sooner.",
        "**Zero-coupon bonds have the longest duration** of all: everything arrives at the end."
      ],
      note: "The zero-coupon case is the cleanest illustration. All the money arrives at maturity, so duration equals maturity exactly, and sensitivity is at its maximum. It makes the weighted-average-time definition click."
    },
    {
      kicker: "Module 203 · Using it",
      title: "Estimating the damage",
      bullets: [
        "**Price change ≈ − duration × yield change.**",
        "Duration 12, yields rise 0.5% → price falls about **6%**.",
        "Duration 3, same move → about **1.5%**.",
        "**This is your position sizing tool for bonds**, the equivalent of ATR in the forex track.",
        "**Ask before buying: what does a 1% rate rise do to this?** If the answer is unacceptable, the duration is too long."
      ],
      note: "Frame duration as the fixed-income equivalent of ATR — a volatility measure you size against. That connection makes it immediately usable for students who did the Module 8 lab."
    },
    {
      kicker: "Module 203 · Convexity",
      title: "Duration is an approximation",
      bullets: [
        "The price-yield relationship is a **curve**, not a straight line.",
        "Duration is the **slope at a point**, so it is accurate for small moves and less so for large ones.",
        "**Convexity is that curvature.** For a normal bond it works in the holder's favour.",
        "Prices rise slightly **more** than duration predicts when yields fall, and fall slightly **less** when yields rise.",
        "**You do not need the mathematics.** You need to know duration underestimates large moves in your favour, not against you."
      ],
      note: "Keep this conceptual. The formal treatment adds nothing for a student at this level, and the practical takeaway — duration is a good estimate that errs slightly in your favour — is genuinely all they need."
    },
    {
      kicker: "Module 203 · Choosing",
      title: "Matching duration to your view",
      bullets: [
        "**Expect rates to fall?** Long duration gains most — and loses most if you are wrong.",
        "**Expect rates to rise?** Short duration protects you.",
        "**No view?** Short to intermediate duration takes less risk for less yield.",
        "**Need the money on a date?** Match duration to that date — rate moves matter far less if the horizon lines up.",
        "**Reaching for yield by extending duration is a rate bet**, whether or not you meant to make one."
      ],
      note: "The final bullet describes a very common error: someone wants more income, buys longer-dated bonds, and has unknowingly taken a large directional position on interest rates. Name it explicitly."
    },
    {
      kicker: "Module 203 · Wrap",
      title: "The risk measure you now have",
      bullets: [
        "Duration as approximate price sensitivity to a 1% yield change",
        "Why longer maturities and lower coupons mean higher sensitivity",
        "How to estimate the damage from a given rate move",
        "Convexity in plain terms, and why it errs in your favour",
        "That reaching for yield through duration is a rate bet"
      ],
      note: "The parallel with the forex track is worth stating: there, students learned to scale stops to ATR. Here they scale exposure to duration. Same discipline, measured differently."
    }
  ],

  practical: {
    title: "Lab 203 — Measure rate sensitivity",
    time: "60 min",
    intro: "The student extends the pricing sheet to compute duration empirically and sees directly how maturity and coupon change sensitivity.",
    setup: [
      "The **Bond Pricing** sheet from Lab 202",
      "Historical yield data for your government's two-year and long-dated bonds",
      "A spreadsheet tab named **Duration**"
    ],
    steps: [
      { h: "Compute duration empirically", d: "For a 5% coupon, ten-year bond, price it at a 5% yield, then at 6%. The percentage price change is your empirical duration for a 1% move. No formula required — you measured it." },
      { h: "Vary the maturity", d: "Repeat for 2, 5, 10, 20 and 30 year maturities with the same coupon. Chart duration against maturity and note the shape — it rises but not linearly." },
      { h: "Vary the coupon", d: "Hold maturity at ten years and compute duration for coupons of 0%, 2%, 5% and 8%. Confirm that higher coupons produce shorter duration and explain why in one sentence." },
      { h: "Test the approximation", d: "Compare the duration estimate against the actual repriced value for yield moves of 0.25%, 1% and 3%. Record the error at each. The growing gap at 3% is convexity." },
      { h: "Find a real drawdown", d: "Locate a period when long-dated government yields rose sharply. Estimate the price loss on a thirty-year bond using duration, and compare with what a long-bond index actually did." },
      { h: "Size a position", d: "Set a maximum tolerable loss from a 1% rate rise, as a percentage of a notional portfolio. Work out the maximum duration you can hold within that limit." }
    ],
    deliverable: "A **Duration** tab: empirically measured duration for five maturities with a chart, duration across four coupon levels with an explanation, approximation error measured at three yield moves demonstrating convexity, a real historical drawdown estimated and compared with actual, and a maximum duration derived from a stated loss tolerance.",
    rubric: [
      { c: "Empirical method", d: "Derived duration by repricing rather than by applying a formula, and can state what the number means." },
      { c: "Maturity relationship", d: "Chart shows sensitivity rising with maturity, and the student can explain why distant cash flows move more." },
      { c: "Coupon effect", d: "Correctly shows higher coupons shortening duration, with the reasoning about earlier cash flows." },
      { c: "Convexity observed", d: "Measured the growing approximation error at larger yield moves and identified it as curvature." },
      { c: "Position sizing", d: "Derived a maximum duration from a stated loss tolerance — the fixed income equivalent of ATR-based sizing." }
    ],
    pitfalls: [
      "Treating duration as identical to maturity. The coupon exercise disproves it directly.",
      "Assuming government bonds cannot fall far. The historical drawdown step exists to settle that.",
      "Using duration for very large yield moves without noting the error. That error is the point of the convexity step."
    ]
  },

  homework: [
    "Find the duration of a long-dated bond fund from its published factsheet and compute what a 1% rate rise would do to it.",
    "Compare the last three years of returns for a short-duration and a long-duration bond fund and explain the difference.",
    "Write your own duration limit into the risk policy."
  ],

  quiz: [
    { q: "A bond has a duration of 9. Yields rise 0.5%. What roughly happens to its price?",
      options: ["Rises about 4.5%", "Falls about 4.5%", "Falls about 9%", "Unchanged"],
      a: 1,
      why: "Price change ≈ − duration × yield change = −9 × 0.5% = −4.5%. Duration is the single most useful number for judging a bond's rate risk, and it works as a first approximation for modest moves." },
    { q: "Two bonds both mature in ten years. One has a 2% coupon, the other 8%. Which has the longer duration?",
      options: ["The 8% coupon bond", "The 2% coupon bond, because more of its value arrives at maturity", "They are identical", "Depends on the issuer"],
      a: 1,
      why: "Duration is the weighted average time to receive the cash. A high coupon returns more money earlier, shortening duration; a low coupon concentrates value at maturity, lengthening it." },
    { q: "Which bond carries the most interest rate risk?",
      options: ["A two-year bond with an 8% coupon", "A ten-year bond with a 5% coupon", "A thirty-year zero-coupon bond", "A one-year bond"],
      a: 2,
      why: "A zero-coupon bond pays nothing until maturity, so its duration equals its maturity — the maximum possible. Thirty years of sensitivity makes it the most rate-sensitive instrument of the four." },
    { q: "What does convexity mean for a bondholder in practice?",
      options: ["Duration overestimates losses and underestimates gains, so the error works slightly in your favour", "Duration is useless", "Prices move in straight lines", "Convexity only affects corporate bonds"],
      a: 0,
      why: "The price-yield relationship is curved. For a normal bond that curvature means prices rise a little more than duration predicts when yields fall, and fall a little less when they rise." },
    { q: "An investor buys long-dated bonds because they yield more than short-dated ones. What have they actually done?",
      options: ["Secured a higher return with no additional risk", "Taken a substantial directional position on interest rates, whether or not they intended to", "Reduced their portfolio risk", "Eliminated reinvestment risk"],
      a: 1,
      why: "Extending duration to capture extra yield is a rate bet. The additional yield is compensation for that risk, and a rate rise can erase several years of the extra income in a matter of weeks." }
  ]
}

]);
