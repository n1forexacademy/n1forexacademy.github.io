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
          { id: 'd-eq-book', type: 'drill', ref: 'eq-book' },
          { id: 'm103', type: 'module', ref: 103, pass: 80 }
        ]
      },
      {
        id: 'eq-analysis',
        title: 'Reading a company',
        blurb: 'The published numbers, the events that move them, and what moves together.',
        steps: [
          { id: 'm104', type: 'module', ref: 104, pass: 80 },
          { id: 'd-eq-compare', type: 'drill', ref: 'eq-compare' },
          { id: 'm105', type: 'module', ref: 105, pass: 80 },
          { id: 'm106', type: 'module', ref: 106, pass: 80 },
          { id: 'd-eq-exposure', type: 'drill', ref: 'eq-exposure' }
        ]
      },
      {
        id: 'eq-risk',
        title: 'Risk and process',
        blurb: 'Position sizing where gaps are routine, and a written equity process reviewed by an instructor.',
        steps: [
          { id: 'm107', type: 'module', ref: 107, pass: 85 },
          { id: 'd-eq-gap', type: 'drill', ref: 'eq-gap' },
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
          { id: 'm202', type: 'module', ref: 202, pass: 85 },
          { id: 'd-bd-inverse', type: 'drill', ref: 'bd-inverse' }
        ]
      },
      {
        id: 'bd-risk',
        title: 'Risk in fixed income',
        blurb: 'Rate sensitivity and credit — the two ways a bond loses money.',
        steps: [
          { id: 'm203', type: 'module', ref: 203, pass: 80 },
          { id: 'd-bd-duration', type: 'drill', ref: 'bd-duration' },
          { id: 'm204', type: 'module', ref: 204, pass: 80 }
        ]
      },
      {
        id: 'bd-system',
        title: 'The whole system',
        blurb: 'The yield curve, and how one central bank decision moves all three markets.',
        steps: [
          { id: 'm205', type: 'module', ref: 205, pass: 80 },
          { id: 'd-bd-curve', type: 'drill', ref: 'bd-curve' },
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
        blurb: 'Certificate in Fixed Income. Three markets, one system.',
        steps: [{ id: 'cert-bonds', type: 'cert', title: 'Certificate in Fixed Income' }]
      }
    ]
  },
  {
    id: 'futures',
    title: 'Futures',
    subtitle: 'Obligations with a date on them',
    blurb: 'The exchange-traded, centrally-cleared version of the leverage you already met — plus expiry, daily cash settlement, and a market where most of the money is buying certainty rather than chasing profit.',
    requires: 'bonds',
    certificateTitle: 'Certificate in Futures Markets',
    stages: [
      {
        id: 'ft-instrument',
        title: 'The instrument',
        blurb: 'What you have actually agreed to, and why the clearing house means you never ask who took the other side.',
        steps: [
          { id: 'm301', type: 'module', ref: 301, pass: 80 },
          { id: 'd-ft-spec', type: 'drill', ref: 'ft-spec' },
          { id: 'm302', type: 'module', ref: 302, pass: 85 }
        ]
      },
      {
        id: 'ft-structure',
        title: 'Expiry and participants',
        blurb: 'Every contract dies on a known date, and most of the open interest belongs to people who are not speculating.',
        steps: [
          { id: 'm303', type: 'module', ref: 303, pass: 80 },
          { id: 'd-ft-roll', type: 'drill', ref: 'ft-roll' },
          { id: 'm304', type: 'module', ref: 304, pass: 80 }
        ]
      },
      {
        id: 'ft-risk',
        title: 'Risk and process',
        blurb: 'Whole contracts, daily cash settlement, and an honest answer about whether this market suits your account.',
        steps: [
          { id: 'm305', type: 'module', ref: 305, pass: 85 },
          { id: 'd-ft-margin', type: 'drill', ref: 'ft-margin' },
          { id: 'g-futures-plan', type: 'gate', title: 'Submit your futures plan',
            detail: 'The addendum from Lab 305. Your instructor checks that the product list follows from the sizing ' +
                    'arithmetic rather than from interest, that a specific cash reserve and margin-to-equity ceiling are ' +
                    'stated, that the roll rule is precise enough for someone else to apply, and that the three-day ' +
                    'stress test uses real tick values. Concluding that no contract suits the account is a pass.' }
        ]
      },
      {
        id: 'ft-certificate',
        title: 'Certificate',
        blurb: 'Recognition that you completed the futures programme.',
        steps: [{ id: 'cert-futures', type: 'cert', title: 'Certificate in Futures Markets' }]
      }
    ]
  }
];
