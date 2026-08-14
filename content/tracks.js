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
          { id: 'd-share-size', type: 'drill', ref: 'share-size' },
          { id: 'd-share-gap', type: 'drill', ref: 'share-gap' },
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
          { id: 'm302', type: 'module', ref: 302, pass: 85 },
          { id: 'd-futures-margin', type: 'drill', ref: 'futures-margin' }
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
  },
  {
    id: 'options',
    title: 'Options',
    subtitle: 'The right, not the obligation',
    blurb: 'The hardest instrument in the course. One side gets to choose, and everything follows from that — time decay, volatility you did not ask for, and three things to get right at once instead of one.',
    requires: 'futures',
    certificateTitle: 'Certificate in Options Markets',
    stages: [
      {
        id: 'op-instrument',
        title: 'The instrument',
        blurb: 'Rights against obligations, and what a premium is actually made of.',
        steps: [
          { id: 'm401', type: 'module', ref: 401, pass: 80 },
          { id: 'm402', type: 'module', ref: 402, pass: 80 },
          { id: 'd-op-split', type: 'drill', ref: 'op-split' }
        ]
      },
      {
        id: 'op-forces',
        title: 'Time and volatility',
        blurb: 'The clock that runs against a buyer, and the exposure nobody chooses but everybody has.',
        steps: [
          { id: 'm403', type: 'module', ref: 403, pass: 85 },
          { id: 'd-opt-decay', type: 'drill', ref: 'opt-decay' },
          { id: 'm404', type: 'module', ref: 404, pass: 80 },
          { id: 'd-op-crush', type: 'drill', ref: 'op-crush' },
          { id: 'd-opt-crush', type: 'drill', ref: 'opt-crush' },
          { id: 'm405', type: 'module', ref: 405, pass: 80 }
        ]
      },
      {
        id: 'op-process',
        title: 'Structures and process',
        blurb: 'A short list of structures worth knowing, the obligation that arrives uninvited, and an honest answer about whether this belongs in your account.',
        steps: [
          { id: 'm406', type: 'module', ref: 406, pass: 85 },
          { id: 'd-op-spread', type: 'drill', ref: 'op-spread' },
          { id: 'd-opt-spread', type: 'drill', ref: 'opt-spread' },
          { id: 'd-op-assign', type: 'drill', ref: 'op-assign' },
          { id: 'g-options-plan', type: 'gate', title: 'Submit your options plan',
            detail: 'The addendum from Lab 406. Your instructor checks that bought options are sized with the full premium ' +
                    'at risk, that the multiplier has been applied, that all three bounds of the spread are computed, that ' +
                    'naked short options are excluded rather than conditionally permitted, and that the assignment ' +
                    'checklist names exercise style and dividend dates. Concluding that options serve one narrow purpose ' +
                    'in your process, or none, is a pass.' }
        ]
      },
      {
        id: 'op-certificate',
        title: 'Certificate',
        blurb: 'Recognition that you completed the options programme.',
        steps: [{ id: 'cert-options', type: 'cert', title: 'Certificate in Options Markets' }]
      }
    ]
  },
  {
    id: 'crypto',
    title: 'Crypto & Digital Assets',
    subtitle: 'Where every earlier risk lesson matters most',
    blurb: 'Deliberately last. Technically the simplest of the six to start trading, and the one where custody, leverage and correlation can end you fastest — so it is taught with every lesson from the five tracks behind it already in hand.',
    requires: 'options',
    certificateTitle: 'Certificate in Digital Asset Markets',
    stages: [
      {
        id: 'cr-instrument',
        title: 'The asset and the keys',
        blurb: 'What you would actually own, and the custody failures that have cost retail holders more than price ever has.',
        steps: [
          { id: 'm501', type: 'module', ref: 501, pass: 80 },
          { id: 'd-cr-supply', type: 'drill', ref: 'cr-supply' },
          { id: 'm502', type: 'module', ref: 502, pass: 85 },
          { id: 'd-cr-custody', type: 'drill', ref: 'cr-custody' }
        ]
      },
      {
        id: 'cr-market',
        title: 'The market and the leverage',
        blurb: 'Thin books, liquidation cascades, and the perpetual contract where most leveraged trading actually happens.',
        steps: [
          { id: 'm503', type: 'module', ref: 503, pass: 80 },
          { id: 'm504', type: 'module', ref: 504, pass: 85 },
          { id: 'd-cr-liq', type: 'drill', ref: 'cr-liq' }
        ]
      },
      {
        id: 'cr-close',
        title: 'Risk, and six tracks in',
        blurb: 'A fifth extension of your risk policy, and an honest account of what six tracks did and did not equip you to do.',
        steps: [
          { id: 'm505', type: 'module', ref: 505, pass: 85 },
          { id: 'g-final-plan', type: 'gate', title: 'Submit your complete cross-market plan',
            detail: 'The capstone from Lab 505, and the final gate of the course. Your instructor checks that the crypto ' +
                    'section states a total exposure cap and a per-venue cap as specific numbers, that maximum leverage ' +
                    'is derived from liquidation distance against daily range rather than from platform limits, that ' +
                    'both stress tests are computed against real capital, and that the six-market statement assigns at ' +
                    'least one market a limited role or none. It must read as ONE policy covering six markets, not six ' +
                    'separate documents.' }
        ]
      },
      {
        id: 'cr-certificate',
        title: 'Certificate',
        blurb: 'Certificate in Digital Asset Markets.',
        steps: [{ id: 'cert-crypto', type: 'cert', title: 'Certificate in Digital Asset Markets' }]
      }
    ]
  },
  {
    id: 'commodities',
    title: 'Commodities',
    subtitle: 'Things that must be dug up, grown, shipped and stored',
    blurb: 'The only market in this course where the thing you trade physically exists — so storage, grades, harvests and pipelines sit inside the price rather than beside it. Builds directly on the futures track.',
    requires: 'crypto',
    certificateTitle: 'Certificate in Commodity Markets',
    stages: [
      {
        id: 'cm-instrument',
        title: 'The physical thing',
        blurb: 'Grade, place and window are all price — and a commodity generates nothing while carry runs against you.',
        steps: [
          { id: 'm601', type: 'module', ref: 601, pass: 80 },
          { id: 'm602', type: 'module', ref: 602, pass: 80 },
          { id: 'd-cm-balance', type: 'drill', ref: 'cm-balance' }
        ]
      },
      {
        id: 'cm-families',
        title: 'Families and routes',
        blurb: 'Energy, metals and agriculture behave differently — and there are four ways in, each charging you differently.',
        steps: [
          { id: 'm603', type: 'module', ref: 603, pass: 80 },
          { id: 'm604', type: 'module', ref: 604, pass: 80 },
          { id: 'd-cm-route', type: 'drill', ref: 'cm-route' }
        ]
      },
      {
        id: 'cm-process',
        title: 'Risk and process',
        blurb: 'Burst volatility, the carry hurdle, and an honest answer about how narrow a place this deserves.',
        steps: [
          { id: 'm605', type: 'module', ref: 605, pass: 85 },
          { id: 'd-cm-carry', type: 'drill', ref: 'cm-carry' },
          { id: 'g-commodities-plan', type: 'gate', title: 'Submit your commodities plan',
            detail: 'The addendum from Lab 605. Your instructor checks that the carry hurdle is a computed ' +
                    'percentage rather than an acknowledgement that carry exists, that the thesis names a specific ' +
                    'published figure that would falsify it, that family limits are set separately from the total ' +
                    'cap, and that the event stress uses a move at least as large as the last real shock. ' +
                    'Concluding that commodities have a narrow role or none is a pass.' }
        ]
      },
      {
        id: 'cm-certificate',
        title: 'Certificate',
        blurb: 'Recognition that you completed the commodities programme.',
        steps: [{ id: 'cert-commodities', type: 'cert', title: 'Certificate in Commodity Markets' }]
      }
    ]
  },
  {
    id: 'spreadbet',
    title: 'Spread Betting',
    subtitle: 'A wrapper, not a market',
    blurb: 'Deliberately last and deliberately short. This is a different container for markets you already understand, so almost everything in it is transfer — which is exactly the point. Availability is jurisdictional; much of the world does not offer it.',
    requires: 'commodities',
    certificateTitle: 'Certificate in Leveraged Wrappers',
    stages: [
      {
        id: 'sb-wrapper',
        title: 'The wrapper and the sizing',
        blurb: 'What it actually is, who your counterparty is, and why the friendliest sizing vocabulary in trading is also the least informative.',
        steps: [
          { id: 'm701', type: 'module', ref: 701, pass: 80 },
          { id: 'm702', type: 'module', ref: 702, pass: 85 },
          { id: 'd-sb-size', type: 'drill', ref: 'sb-size' }
        ]
      },
      {
        id: 'sb-close',
        title: 'Protection, tax and the close',
        blurb: 'The one genuine innovation in this wrapper, the tax position stated with its qualifications intact, and eight markets behind you.',
        steps: [
          { id: 'm703', type: 'module', ref: 703, pass: 80 },
          { id: 'm704', type: 'module', ref: 704, pass: 85 },
          { id: 'd-sb-cost', type: 'drill', ref: 'sb-cost' },
          { id: 'g-final-crossmarket', type: 'gate', title: 'Submit your complete eight-market plan',
            detail: 'The capstone from Lab 704 and the gate on the spread betting certificate. Your instructor checks that the ' +
                    'cost comparison uses the student’s own realistic trade count rather than a generic example, that ' +
                    'the tax section acknowledges losses are generally not relievable rather than treating treatment as ' +
                    'pure benefit, that the protection rule states explicitly that protection is added AFTER sizing, and ' +
                    'that several of the eight markets are assigned a limited role or none. It must read as ONE policy ' +
                    'covering eight markets, not eight documents.' }
        ]
      },
      {
        id: 'sb-certificate',
        title: 'Certificate',
        blurb: 'Certificate in Leveraged Wrappers.',
        steps: [{ id: 'cert-spreadbet', type: 'cert', title: 'Certificate in Leveraged Wrappers' }]
      }
    ]
  },
  {
    id: 'automation',
    title: 'Trading Automation',
    subtitle: 'Teaching a machine to follow your rules',
    blurb: 'The payoff to a promise module 12 made. An EA is an execution engine, not a strategy — so this is translating the plan you already wrote, not learning to program. The five components of a module 11 setup map one-to-one onto five functions.',
    requires: 'spreadbet',
    certificateTitle: 'Certificate in Trading Automation',
    stages: [
      {
        id: 'au-foundation',
        title: 'What it is, and the language',
        blurb: 'An execution engine multiplies whatever you already had, the small corner of MQL an EA lives in — and then you write one and watch it act 3,800 times.',
        steps: [
          { id: 'm801', type: 'module', ref: 801, pass: 80 },
          { id: 'm802', type: 'module', ref: 802, pass: 80 },
          { id: 'd-au-guards', type: 'drill', ref: 'au-guards' },
          { id: 'd-ea-guards', type: 'drill', ref: 'ea-guards' }
        ]
      },
      {
        id: 'au-build',
        title: 'Translation and sizing',
        blurb: 'Five components become five functions, written and run — and the one line that has ended more automated accounts than any strategy flaw.',
        steps: [
          { id: 'm803', type: 'module', ref: 803, pass: 80 },
          { id: 'd-ea-translate', type: 'drill', ref: 'ea-translate' },
          { id: 'm804', type: 'module', ref: 804, pass: 85 },
          { id: 'd-au-size', type: 'drill', ref: 'au-size' },
          { id: 'd-ea-size', type: 'drill', ref: 'ea-size' }
        ]
      },
      {
        id: 'au-live',
        title: 'Testing, going live, and the close',
        blurb: 'The biases the tester adds, the limits that stop an EA, a terminal restart you have to survive, and the end of all nine tracks.',
        steps: [
          { id: 'm805', type: 'module', ref: 805, pass: 85 },
          { id: 'd-au-report', type: 'drill', ref: 'au-report' },
          { id: 'd-ea-limits', type: 'drill', ref: 'ea-limits' },
          { id: 'm806', type: 'module', ref: 806, pass: 85 },
          { id: 'd-ea-restart', type: 'drill', ref: 'ea-restart' },
          { id: 'g-ea-review', type: 'gate', title: 'Submit your EA for review',
            detail: 'The capstone of the whole programme. Your instructor reads the CODE, not the results: that both guards ' +
                    'are present, that no lot size is hard-coded anywhere, that the stop is computed from structure rather ' +
                    'than returned from an input, that every OrderSend result is checked and logged, that a daily stop is ' +
                    'enforced in code, and that a heartbeat exists. They will also ask to see the log-only session from ' +
                    'Lab 803 and the timed emergency stop from Lab 806. Concluding that semi-automation is the right ' +
                    'answer for you is a pass.' }
        ]
      },
      {
        id: 'au-certificate',
        title: 'Certificate',
        blurb: 'The final certificate of the programme. Nine tracks, one process.',
        steps: [{ id: 'cert-automation', type: 'cert', title: 'Certificate in Trading Automation' }]
      }
    ]
  }
];
