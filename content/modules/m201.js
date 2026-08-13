/* N1 Forex Academy — Module 201. Loaded on demand; see assets/loader.js. */
window.COURSE = (window.COURSE || []).concat([

/* ============================= MODULE 201 ============================= */
{
  id: 201, track: 'bonds',
  title: "What a Bond Actually Is",
  tagline: "You stop owning and start lending — and the whole risk profile inverts.",
  level: "Foundation",
  duration: "90 min",

  objectives: [
    "Say exactly what you are owed when you hold a bond, and by whom",
    "Name the four things that define any bond",
    "Explain why lenders are paid before owners, and what that protection costs you",
    "Tell the difference between lending to a government and lending to a company",
    "Say plainly what a bond can and cannot do for you"
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
}

]);
