/* N1 Forex Academy — Bonds & Fixed Income track (Modules 201–206).

   Unlocks after the equities certificate. The final track, and deliberately the
   one that ties the other two together: bond yields are what central banks
   actually move, which is what drives currencies, which is what the forex track
   opened with. A student finishing this should see all three as one system. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 201 ============================= */
{
  id: 201, track: 'bonds',
  title: "What a Bond Actually Is",
  tagline: "You stop owning and start lending — and the whole risk profile inverts.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Explain what a bondholder is owed and by whom",
    "Identify the four defining terms of any bond",
    "Explain why bondholders rank above shareholders and what that buys them",
    "Distinguish government from corporate issuance",
    "State plainly what a bond can and cannot do"
  ],

  misconceptions: [
    "**\"Bonds are safe.\"** They have a defined payment schedule, which is not the same as safety. Their price still moves daily, sometimes sharply, and issuers do default.",
    "**\"A bond pays a fixed return.\"** It pays a fixed *coupon*. Your actual return depends entirely on the price you paid, which is Module 202.",
    "**\"Holding to maturity means no risk.\"** It removes price risk if the issuer pays. It does nothing about inflation eroding what those payments buy, or about the issuer failing.",
    "**\"Bonds are for retirees and don't matter to traders.\"** The bond market is larger than the equity market and it sets the rates that move every currency pair you have traded."
  ],

  glossary: [
    { t: "Bond", d: "A tradeable loan. The issuer owes the holder scheduled interest and the return of principal at maturity." },
    { t: "Issuer", d: "The borrower — a government, agency or company." },
    { t: "Principal / face value / par", d: "The amount repaid at maturity, conventionally quoted as 100." },
    { t: "Coupon", d: "The fixed interest rate paid on the face value, usually annually or semi-annually." },
    { t: "Maturity", d: "The date the principal is repaid and the bond ceases to exist." },
    { t: "Government bond", d: "Issued by a sovereign state. Gilts in the UK, Treasuries in the US, Bunds in Germany." },
    { t: "Corporate bond", d: "Issued by a company. Higher yield than a government bond of the same maturity, reflecting greater default risk." },
    { t: "Seniority", d: "Where a claim ranks for repayment if the issuer fails. Bondholders rank above shareholders." },
    { t: "Default", d: "Failure to make a scheduled payment." },
    { t: "Issue size", d: "The total amount borrowed in a single bond, which strongly affects how liquid it is." }
  ],

  slides: [
    {
      kicker: "Module 201 · The instrument",
      title: "You are the lender now",
      bullets: [
        "A bond is a **tradeable loan**. You hand over money; the issuer owes you a schedule of payments.",
        "**Four terms define it:** who issued it, the **coupon**, the **maturity**, and the **face value**.",
        "A ten-year bond with a 4% coupon and face value 100 pays **4 a year for ten years, then 100 back**.",
        "**This is a contract**, not a claim on profits. The payments do not depend on the issuer doing well — only on it not failing.",
        "**Third instrument, third relationship.** Currency: a relative bet. Share: ownership. Bond: a loan."
      ],
      note: "Put the three side by side on the board. Students who see forex, equities and bonds as three unrelated products will struggle with Module 206; those who see them as three positions in the same financial system will find it obvious."
    },
    {
      kicker: "Module 201 · Seniority",
      title: "You are further up the queue",
      bullets: [
        "In Module 101 you learned shareholders are paid **last**.",
        "**Bondholders are paid before them.** Interest is a contractual obligation, not a discretionary distribution.",
        "If a company fails, bondholders have a claim on assets that shareholders only get after them.",
        "**That seniority is what you are paying for**, and you pay in returns — bonds yield less than equity over long periods.",
        "**Less risk, less reward. There is no free lunch here either.**"
      ],
      note: "This is the cleanest illustration in the whole academy of risk and return being linked. Same company, two instruments, different position in the queue, predictably different returns and volatility."
    },
    {
      kicker: "Module 201 · Issuers",
      title: "Who is borrowing matters most",
      bullets: [
        "**Government bonds** from a stable sovereign in its own currency carry very low default risk.",
        "**Corporate bonds** carry the credit risk of the company — Module 204.",
        "**The yield difference between them is the market's price for that extra risk.**",
        "**Emerging market sovereigns** can and do default, particularly on foreign-currency debt.",
        "**A government can print its own currency but cannot print a foreign one.** That distinction matters enormously."
      ],
      note: "The own-currency versus foreign-currency point is worth dwelling on. It explains why sovereign defaults cluster in foreign-currency debt, and it previews the currency linkage in Module 206."
    },
    {
      kicker: "Module 201 · Scale",
      title: "The market you have been trading around",
      bullets: [
        "The global bond market is **larger than the global equity market**.",
        "Government bond markets are among the **deepest and most liquid** anywhere.",
        "**Central bank policy operates through this market.** Rates and bond purchases are the mechanism.",
        "Every rate decision you watched in Module 9 was transmitted through bonds first.",
        "**You have been trading the consequences of this market without looking at it.**"
      ],
      note: "This slide reframes the whole track. Students think of bonds as a separate, duller asset class. Positioning it as the machinery underneath everything they already trade changes how they engage with it."
    },
    {
      kicker: "Module 201 · Honesty",
      title: "What a bond can and cannot do",
      bullets: [
        "**Can:** provide a defined payment schedule and a known maturity date.",
        "**Can:** rank above equity if things go wrong.",
        "**Cannot:** protect you from price movement before maturity — Module 202.",
        "**Cannot:** protect the purchasing power of those payments against inflation.",
        "**Cannot:** guarantee repayment. Issuers default, including some governments.",
        "**'Safe' is the wrong word. 'Defined' is the right one.**"
      ],
      note: "Insist on the language distinction. Defined is accurate; safe is not. A long-dated government bond can lose a third of its value in a year without anyone defaulting, which Module 203 makes concrete."
    },
    {
      kicker: "Module 201 · Wrap",
      title: "What you should be able to say now",
      bullets: [
        "What a bondholder is owed, and the four terms that define any bond",
        "Why seniority above equity is what you are buying, and what it costs in return",
        "How government and corporate issuance differ, and why the currency of the debt matters",
        "The scale of the market and its role in transmitting policy",
        "Why 'defined' is the honest word and 'safe' is not"
      ],
      note: "Ask the student to explain why a company's bonds and its shares behave differently in a crisis. If seniority appears in the answer, the module has landed."
    }
  ],

  practical: {
    title: "Lab 201 — Read a real bond",
    time: "50 min",
    intro: "The student locates real issues and extracts their defining terms, establishing that a bond is a specific contract rather than a vague category.",
    setup: [
      "A market data site listing government and corporate bonds",
      "One government bond and two corporate bonds from companies studied in the equities track",
      "A spreadsheet named **Bond Notes**"
    ],
    steps: [
      { h: "Find a government bond", d: "Locate a ten-year bond from your own government. Record issuer, coupon, maturity date, face value convention, and current price. Note whether the price is above or below 100." },
      { h: "Find two corporate bonds", d: "Ideally from companies you analysed in Module 104. Record the same five items for each, plus the issue size." },
      { h: "Compute the payment schedule", d: "For each bond, write out what a holder of 10,000 face value receives and when, through to maturity. Total the cash received over the life." },
      { h: "Compare the coupons", d: "Line up the government and corporate coupons for similar maturities. Record the difference and write one sentence on what the market is charging for the extra risk." },
      { h: "Check the seniority", d: "Find whether each corporate bond is senior or subordinated. Record what that means for repayment order." },
      { h: "Look up a default", d: "Find one corporate or sovereign default from the last twenty years. Record what bondholders eventually recovered as a percentage, and compare with what shareholders received." }
    ],
    deliverable: "A **Bond Notes** spreadsheet: three bonds with issuer, coupon, maturity, price and issue size; a full payment schedule for 10,000 face value of each; the government-versus-corporate coupon comparison with an explanation; seniority status; and one researched default with recovery rates for bondholders and shareholders.",
    rubric: [
      { c: "Term literacy", d: "Correctly identifies all four defining terms for each bond and reads price relative to par." },
      { c: "Schedule accuracy", d: "Payment schedule correct in amount and timing, including the principal repayment." },
      { c: "Risk pricing", d: "Can explain the corporate-government coupon gap as the price of default risk." },
      { c: "Seniority understanding", d: "Located seniority and can state its consequence, referencing the equities track." },
      { c: "Default evidence", d: "Found real recovery rates and can contrast the bondholder and shareholder outcomes." }
    ],
    pitfalls: [
      "Assuming price is always 100. It rarely is, and Module 202 explains why.",
      "Confusing coupon with yield. The coupon is fixed at issue; the yield depends on the price you pay.",
      "Assuming government means risk-free. It means low default risk in the issuer's own currency, which is a narrower claim."
    ]
  },

  homework: [
    "Track the price of your chosen ten-year government bond daily for a week and note the size of the moves.",
    "Find the credit rating of your two corporate bonds and record what the rating agency says it means.",
    "Write a paragraph explaining to someone who has only traded forex what a bond is and why it matters to them."
  ],

  quiz: [
    { q: "You hold a corporate bond and the company enters insolvency. Compared with a shareholder, you are:",
      options: ["In the same position", "Paid before shareholders, with a claim on assets they only reach afterwards", "Paid after shareholders", "Not entitled to anything"],
      a: 1,
      why: "Bondholders hold a contractual claim ranking above equity. That seniority is exactly what a bond buys, and it is paid for through lower expected returns than the same company's shares." },
    { q: "A bond has a 4% coupon and face value 100. What does the coupon tell you about your return?",
      options: ["Your return will be 4% a year", "It tells you the cash payment, but your return depends on the price you paid", "Your return will exceed 4%", "Nothing at all"],
      a: 1,
      why: "The coupon is fixed at issue as a percentage of face value. Buy the bond below 100 and your return exceeds 4%; buy above and it is less. This is the whole subject of Module 202." },
    { q: "Why does the currency a government borrows in matter?",
      options: ["It affects the coupon payment date", "A government can print its own currency but cannot print a foreign one, so foreign-currency debt carries genuine default risk", "Foreign-currency bonds are untaxed", "It determines the maturity"],
      a: 1,
      why: "Sovereign defaults cluster heavily in foreign-currency debt for exactly this reason. Borrowing in your own currency means the obligation can always be met nominally, though possibly at the cost of inflation." },
    { q: "Which word describes bonds most accurately?",
      options: ["Safe", "Defined — the payment schedule is known, which is not the same as safe", "Guaranteed", "Risk-free"],
      a: 1,
      why: "A long-dated government bond can lose a substantial share of its value in a year with nobody defaulting, purely from rate moves. The schedule is defined; the outcome is not guaranteed." },
    { q: "Why should a forex trader care about the bond market?",
      options: ["They should not, it is a separate asset class", "Central bank policy is transmitted through bonds, and rate expectations are what drive currencies", "Bonds and currencies are unrelated", "Only for tax reasons"],
      a: 1,
      why: "Module 9 established that rate expectations are the dominant driver of currency values. Those expectations are priced in the bond market first — you have been trading its consequences all along." }
  ]
},

/* ============================= MODULE 202 ============================= */
{
  id: 202, track: 'bonds',
  title: "Price, Yield and the Inverse Relationship",
  tagline: "The single most important mechanic in fixed income, and the one that surprises everyone.",
  level: "Core skill",
  duration: "120 min",

  objectives: [
    "Explain why bond prices fall when yields rise",
    "Distinguish coupon, current yield and yield to maturity",
    "Read a bond quoted at a premium or a discount and say what it implies",
    "Compute a simple current yield and interpret a yield to maturity",
    "Explain what a change in market rates does to a bond you already hold"
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
},

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
