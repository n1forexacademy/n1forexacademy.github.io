/* N1 Forex Academy — the learning path.

   The student sees one journey, not a menu. Each step unlocks only when the
   one before it is genuinely complete, so nothing can be skipped and the
   sequence of the curriculum is enforced rather than suggested.

   Step types
     module  — read the slides, pass the quiz at `pass`%
     drill   — pass the assessed simulator drill
     gate    — an instructor sign-off or a written submission
     cert    — the certificate, issued automatically once everything before it is done
     demo    — the supervised demo-trading period, logged weekly
     live    — the final readiness review; never automatic

   An instructor can override any step for a struggling student from the admin
   panel. Overrides are recorded, not silent. */

window.PATH = {

  /* Requirements for the supervised demo period. Deliberately strict: this is
     the stage that decides whether someone risks real money. */
  demo: {
    minWeeks: 8,
    minTrades: 100,
    minCompliance: 90,      // % of trades that followed the written plan
    maxDrawdown: 15,        // % peak-to-trough over the period
    requireSignoff: true
  },

  stages: [
    {
      id: 'stage-orientation',
      title: 'Orientation',
      blurb: 'What the market actually is, and what a trade costs before you have any opinion at all.',
      steps: [
        { id: 'm1', type: 'module', ref: 1, pass: 80 },
        { id: 'm2', type: 'module', ref: 2, pass: 80 },
        { id: 'd-quote-cost', type: 'drill', ref: 'quote-cost' }
      ]
    },
    {
      id: 'stage-mechanics',
      title: 'Mechanics',
      blurb: 'How an order is placed and financed — and the exact sequence by which accounts are destroyed.',
      steps: [
        { id: 'm3', type: 'module', ref: 3, pass: 80 },
        { id: 'd-margin', type: 'drill', ref: 'margin-blowup' },
        { id: 'm4', type: 'module', ref: 4, pass: 80 }
      ]
    },
    {
      id: 'stage-reading',
      title: 'Reading price',
      blurb: 'Learning to describe a chart out loud before ever deciding what to do about it.',
      steps: [
        { id: 'm5', type: 'module', ref: 5, pass: 80 },
        { id: 'm6', type: 'module', ref: 6, pass: 80 },
        { id: 'm7', type: 'module', ref: 7, pass: 80 }
      ]
    },
    {
      id: 'stage-tools',
      title: 'Tools',
      blurb: 'Indicators as consistency aids, and the single change that fixes most beginner stop placement.',
      steps: [
        { id: 'm8', type: 'module', ref: 8, pass: 80 },
        { id: 'd-atr', type: 'drill', ref: 'atr-stops' }
      ]
    },
    {
      id: 'stage-risk',
      title: 'Risk — the core',
      blurb: 'The most important stage in the academy. Everything before it was preparation.',
      steps: [
        { id: 'm9', type: 'module', ref: 9, pass: 80 },
        { id: 'm10', type: 'module', ref: 10, pass: 85 },
        { id: 'd-sizing', type: 'drill', ref: 'position-sizing' },
        { id: 'd-streak', type: 'drill', ref: 'survive-streak' }
      ]
    },
    {
      id: 'stage-system',
      title: 'Your system',
      blurb: 'Turning observations into rules specific enough that another person could follow them.',
      steps: [
        { id: 'm11', type: 'module', ref: 11, pass: 80 },
        { id: 'g-plan', type: 'gate', title: 'Submit your written trading plan',
          detail: 'Upload or hand your instructor the one-to-two page plan from Lab 11. They will check it against the ' +
                  'rubric — every setup specified in all five components, a signed risk policy, and no rule containing ' +
                  'an undefined subjective term. This is marked by a person, not a machine.' },
        { id: 'd-discipline', type: 'drill', ref: 'plan-discipline' }
      ]
    },
    {
      id: 'stage-proof',
      title: 'Proving it',
      blurb: 'Backtesting honestly, journaling properly, and building a sample worth analysing.',
      steps: [
        { id: 'm12', type: 'module', ref: 12, pass: 80 },
        { id: 'd-expectancy', type: 'drill', ref: 'expectancy' }
      ]
    },
    {
      id: 'stage-certificate',
      title: 'Certificate',
      blurb: 'Recognition that you completed the training. Not a prediction that you will profit.',
      steps: [
        { id: 'cert', type: 'cert', title: 'Certificate of Completion' }
      ]
    },
    {
      id: 'stage-demo',
      title: 'Supervised demo trading',
      blurb: 'Now do it on a real broker demo account, for real weeks, with everything logged. This stage cannot be rushed.',
      steps: [
        { id: 'demo', type: 'demo', title: 'Demo trading period' }
      ]
    },
    {
      id: 'stage-live',
      title: 'Live readiness review',
      blurb: 'A conversation with your instructor, not a button. Most people need more demo time than they expect.',
      steps: [
        { id: 'live', type: 'live', title: 'Live readiness review',
          detail: 'Your instructor reviews the full demo record: expectancy, worst drawdown, rule compliance, and how ' +
                  'you behaved during the worst week. Passing this is permission to start at the smallest size your ' +
                  'broker allows — nothing more.' }
      ]
    }
  ]
};
