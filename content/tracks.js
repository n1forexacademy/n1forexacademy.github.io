/* N1 Forex Academy — track definitions.

   Three tracks, unlocked in sequence. Each ends in its own certificate, and a
   track only opens once the previous one's certificate has been issued.

   Forex     -> certificate -> Equities -> certificate -> Bonds -> certificate
                                                                 -> demo -> live

   The supervised demo period and the live readiness review sit at the end of
   the FOREX track, because that is the market the student will actually trade
   first. The later tracks are knowledge tracks: they end at their certificate.

   Module ids: forex 1–12, equities 101–108, bonds 201–206. */

window.TRACKS = [
  {
    id: 'forex',
    title: 'Forex',
    subtitle: 'Currencies, risk and the trading process',
    blurb: 'The foundation. Market structure, trade arithmetic, margin mechanics, chart reading, and the risk discipline everything else is built on.',
    requires: null,
    certificateTitle: 'Certificate in Forex Trading',
    stagesRef: 'PATH'          // the existing window.PATH.stages
  },
  {
    id: 'equities',
    title: 'Equities & Shares',
    subtitle: 'Owning companies rather than betting on ratios',
    blurb: 'What changes when you own part of a real business: order books, company accounts, earnings, sectors, and risk management without leverage.',
    requires: 'forex',
    certificateTitle: 'Certificate in Equity Markets',
    stages: [
      {
        id: 'eq-foundation',
        title: 'The instrument',
        blurb: 'What a share is, how it trades, and why the leveraged version is a different product entirely.',
        steps: [
          { id: 'm101', type: 'module', ref: 101, pass: 80 },
          { id: 'm102', type: 'module', ref: 102, pass: 80 },
          { id: 'm103', type: 'module', ref: 103, pass: 80 }
        ]
      },
      {
        id: 'eq-analysis',
        title: 'Reading a company',
        blurb: 'The published numbers, the events that move them, and what moves together.',
        steps: [
          { id: 'm104', type: 'module', ref: 104, pass: 80 },
          { id: 'm105', type: 'module', ref: 105, pass: 80 },
          { id: 'm106', type: 'module', ref: 106, pass: 80 }
        ]
      },
      {
        id: 'eq-risk',
        title: 'Risk and process',
        blurb: 'Position sizing where gaps are routine, and a written equity process reviewed by an instructor.',
        steps: [
          { id: 'm107', type: 'module', ref: 107, pass: 85 },
          { id: 'm108', type: 'module', ref: 108, pass: 80 },
          { id: 'g-equity-plan', type: 'gate', title: 'Submit your written equity plan',
            detail: 'Hand your instructor the Equity Plan from Lab 108. They will check the screen order starts with ' +
                    'liquidity, that every thesis is falsifiable, that both risk and concentration are sized, and that ' +
                    'the exit rules include trimming a winner. Marked by a person.' }
        ]
      },
      {
        id: 'eq-certificate',
        title: 'Certificate',
        blurb: 'Recognition that you completed the equity programme.',
        steps: [{ id: 'cert-equities', type: 'cert', title: 'Certificate in Equity Markets' }]
      }
    ]
  },
  {
    id: 'bonds',
    title: 'Bonds & Fixed Income',
    subtitle: 'The machinery underneath the other two',
    blurb: 'Lending rather than owning. Yields, duration, credit and the yield curve — and how the rates you meet here drive the currencies you started with.',
    requires: 'equities',
    certificateTitle: 'Certificate in Fixed Income',
    stages: [
      {
        id: 'bd-foundation',
        title: 'The instrument',
        blurb: 'What a bond is, and the inverse relationship that surprises everyone.',
        steps: [
          { id: 'm201', type: 'module', ref: 201, pass: 80 },
          { id: 'm202', type: 'module', ref: 202, pass: 85 }
        ]
      },
      {
        id: 'bd-risk',
        title: 'Risk in fixed income',
        blurb: 'Rate sensitivity and credit — the two ways a bond loses money.',
        steps: [
          { id: 'm203', type: 'module', ref: 203, pass: 80 },
          { id: 'm204', type: 'module', ref: 204, pass: 80 }
        ]
      },
      {
        id: 'bd-system',
        title: 'The whole system',
        blurb: 'The yield curve, and how one central bank decision moves all three markets.',
        steps: [
          { id: 'm205', type: 'module', ref: 205, pass: 80 },
          { id: 'm206', type: 'module', ref: 206, pass: 80 },
          { id: 'g-crossmarket', type: 'gate', title: 'Submit your cross-market study',
            detail: 'The capstone from Lab 206. Your instructor checks that you established what was priced before the ' +
                    'decision, traced the reaction through all three markets with real figures, and recorded honestly ' +
                    'where the chain did NOT behave as theory suggests.' }
        ]
      },
      {
        id: 'bd-certificate',
        title: 'Certificate',
        blurb: 'The final certificate. All three markets, one system.',
        steps: [{ id: 'cert-bonds', type: 'cert', title: 'Certificate in Fixed Income' }]
      }
    ]
  }
];
