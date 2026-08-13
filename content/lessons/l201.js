/* N1 Forex Academy — lessons for Module 201 (Bonds track).

   VOICE: Jonathan talking to one student who has finished forex and equities.
   Third instrument, third relationship: a bet, then ownership, now lending.
   The landlord-versus-partner analogy carries seniority, and the module has to
   land "defined" rather than "safe" before module 202 shows a bond losing 8%. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});

  L[201] = [
    {
      title: 'Lending rather than owning',
      slides: [0, 1],
      teach: {
        lead: [
          "Third track, and third kind of relationship with a market. It's worth naming all three, because the differences explain everything that follows.",
          "**A currency was a bet** — a ratio between two economies, owning nothing.",
          "**A share was ownership** — a piece of a business, entitled to whatever is left over.",
          "**A bond is a loan.** You hand over money, and the borrower owes you a schedule of payments. That's it.",
          "**Four things define any bond:** who's borrowing, the **coupon** (the interest rate), the **maturity** (when you get your money back), and the **face value** (how much comes back).",
          "So a ten-year bond with a 4% coupon and a face value of 100 pays you **4 a year for ten years, then hands you 100 back.** Written down, agreed in advance.",
          "Here's the crucial difference from a share: **those payments don't depend on the borrower doing well.** A brilliant year doesn't pay you more. A dreadful year doesn't pay you less. **The only thing that matters is whether they can pay at all.**"
        ],
        terms: [
          { term: 'Bond',
            plain: 'A loan you can sell on to someone else.',
            like: 'An IOU that you are allowed to hand to a third party, who then gets paid instead of you.' },
          { term: 'Coupon',
            plain: 'The fixed interest rate paid on the face value. Set at issue and never changes.',
            like: 'The rent on a lease. Agreed at the start, and it does not care how business is going.' },
          { term: 'Maturity',
            plain: 'The date the loan is repaid and the bond stops existing.',
            like: 'The end of the lease. A date everyone knew from the beginning.' },
          { term: 'Face value (par)',
            plain: 'The amount repaid at maturity, quoted as 100 by convention.',
            like: 'The amount written on the IOU, regardless of what anyone will pay for it today.' }
        ],
        close: [
          "Now the thing a bond actually buys you, and it's the reason this track exists.",
          "**You're further up the queue.**",
          "Back in module 101 you learned that shareholders are paid **last** — after staff, suppliers, the bank, everyone. **Bondholders are ahead of them.**",
          "Think of it as the difference between being a **business partner** and being the **landlord**. The partner shares the upside and gets whatever's left when things go wrong. The landlord gets the rent whether the shop had a good month or a terrible one — and if the business collapses, the landlord is a creditor while the partner is simply out.",
          "**Interest on a bond is a contractual obligation. A dividend is a decision.** A company can stop paying dividends whenever it likes. Skipping a bond payment is a default, with all the consequences that carries.",
          "**That seniority is precisely what you're paying for. And you do pay for it** — bonds return less than equities over long periods, and that gap is the price of standing nearer the front of the queue.",
          "**Less risk, less reward.** No free lunch here either."
        ]
      },
      check: [
        { q: 'A bond is best described as:',
          options: ['A share of company profits', 'A tradeable loan with a scheduled set of payments', 'A currency contract', 'A derivative on interest rates'],
          a: 1,
          why: 'You hand over money and the issuer owes you a schedule. Four terms define it: the issuer, the coupon, the maturity and the face value. The payments do not depend on the issuer prospering, only on it not failing.' },
        { q: 'You hold a corporate bond and the company enters insolvency. Compared with a shareholder you are:',
          options: ['In the same position', 'Paid before shareholders, with a claim they only reach afterwards', 'Paid after shareholders', 'Entitled to nothing'],
          a: 1,
          why: 'Seniority is exactly what a bond buys, and you pay for it through lower expected returns than the same company\'s shares. Same business, two instruments, different queue position.' }
      ]
    },

    {
      title: 'Who is borrowing, and the honest word',
      slides: [2, 3, 4, 5],
      teach: {
        lead: [
          "**Who's doing the borrowing matters more than anything else about a bond.**",
          "**Government bonds** from a stable country, borrowing in its own currency, carry very low risk of not being repaid. These are called gilts in the UK, Treasuries in the US, Bunds in Germany.",
          "**Corporate bonds** carry the risk of that particular company — which is module 204's whole subject.",
          "**The gap in yield between the two is the market's price for that extra risk**, and it's readable. If a company's bonds yield 3% more than the government's, the market is telling you what it thinks of that company's chances.",
          "Now a distinction that decides whether a country defaults, and it isn't wealth:",
          "**A government can print its own currency. It cannot print a foreign one.**",
          "A country that borrowed in its own currency can always meet the payment in nominal terms — it may debase the money doing it, but the obligation gets met. A country that borrowed in dollars has to *find* dollars, and if it can't, it defaults.",
          "**That's why sovereign defaults cluster so heavily in foreign-currency debt.** Not because those countries are poorer, but because they promised something they can't manufacture."
        ],
        terms: [
          { term: 'Government bond',
            plain: 'Money lent to a country. Gilts in the UK, Treasuries in the US, Bunds in Germany.',
            like: 'Lending to the biggest, most established borrower in the room.' },
          { term: 'Corporate bond',
            plain: 'Money lent to a company. Pays more than a government bond, because it might not be repaid.',
            like: 'Lending to a local business. Better rate, and you think harder about it.' },
          { term: 'Default',
            plain: 'Failing to make a scheduled payment.',
            like: 'The rent not arriving. Everything else follows from that.' },
          { term: 'Seniority',
            plain: 'Where your claim ranks for repayment if the borrower fails.',
            like: 'Your position in the queue. It only matters on the day it matters, and then it is everything.' }
        ],
        close: [
          "One thing worth knowing about the scale of this: **the global bond market is bigger than the global stock market.** It's the largest financial market there is, and government bonds are among the deepest and most liquid anywhere.",
          "More importantly for you: **this is the market that central bank policy actually operates through.**",
          "Every rate decision you watched in module 9 — the ones that moved your currency pairs — was transmitted through bonds first. **You've spent this whole course trading the consequences of this market without ever looking at it.** That's what module 206 will close the loop on.",
          "Finally, let me be straight about the word people use for bonds, because it's wrong.",
          "**Bonds are not \"safe\". They are \"defined\".**",
          "**What a bond can do:** give you a known payment schedule and a known end date, and put you ahead of shareholders if things go badly.",
          "**What it cannot do:** protect you from the price moving before maturity — which is the next module, and it will surprise you. Protect the buying power of those payments against inflation. Or guarantee you get repaid at all, because issuers default, including some governments.",
          "**A long-dated government bond can lose a fifth of its value in a year with nobody defaulting on anything.** \"Defined\" is the honest word. Hold on to it."
        ]
      },
      check: [
        { q: 'Why does the currency a government borrows in matter?',
          options: ['It changes the payment date', 'A government can print its own currency but not a foreign one, so foreign-currency debt carries genuine default risk', 'Foreign debt is untaxed', 'It sets the maturity'],
          a: 1,
          why: 'Sovereign defaults cluster heavily in foreign-currency debt for this reason. Borrowing in your own currency means the obligation can always be met nominally, possibly at the cost of inflation.' },
        { q: 'Which word describes bonds most accurately?',
          options: ['Safe', 'Defined — the payment schedule is known, which is not the same as safe', 'Guaranteed', 'Risk-free'],
          a: 1,
          why: 'A long-dated government bond can lose a large share of its value in a year with nobody defaulting, purely from rate moves. The schedule is defined; the outcome is not guaranteed.' }
      ]
    }
  ];
})();
