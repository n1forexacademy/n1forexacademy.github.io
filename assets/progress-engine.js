/* N1 Forex Academy — progression engine.

   Decides what is done, what is open now, and what stays locked. Pure logic,
   no DOM, so it can be reasoned about and tested on its own.

   Rule: a step opens only when every step before it is complete. There is no
   partial credit and no skipping ahead — the sequence of the curriculum is the
   teaching, not a suggestion.

   An instructor override marks a single step complete for one student. It is
   recorded in `progress.overrides` so it is visible in the roster, never silent. */
(function () {
  'use strict';

  function flatSteps() {
    var out = [];
    (window.PATH.stages || []).forEach(function (stage) {
      (stage.steps || []).forEach(function (step) {
        out.push(Object.assign({}, step, { stage: stage.id, stageTitle: stage.title }));
      });
    });
    return out;
  }

  /* Demo-period figures derived from the weekly log the student submits. */
  function demoSummary(progress) {
    var req = window.PATH.demo;
    var log = (progress && progress.demoLog) || [];
    var weeks = log.length;
    var trades = 0, followed = 0, rSum = 0;
    log.forEach(function (w) {
      trades += (+w.trades || 0);
      followed += (+w.followed || 0);
      rSum += (+w.r || 0);
    });
    var compliance = trades > 0 ? (followed / trades) * 100 : 0;
    var dd = (progress && progress.demoMaxDrawdown) || 0;
    var signed = !!(progress && progress.demoSignoff);

    var checks = [
      { key: 'weeks', label: 'Weeks logged', have: weeks, need: req.minWeeks,
        ok: weeks >= req.minWeeks, fmt: function (v) { return v + ' wk'; } },
      { key: 'trades', label: 'Trades logged', have: trades, need: req.minTrades,
        ok: trades >= req.minTrades, fmt: function (v) { return v; } },
      { key: 'compliance', label: 'Plan compliance', have: Math.round(compliance), need: req.minCompliance,
        ok: compliance >= req.minCompliance, fmt: function (v) { return v + '%'; } },
      { key: 'drawdown', label: 'Max drawdown', have: dd, need: req.maxDrawdown,
        ok: dd <= req.maxDrawdown, invert: true, fmt: function (v) { return v + '%'; } },
      { key: 'signoff', label: 'Instructor sign-off', have: signed ? 'yes' : 'no', need: 'yes',
        ok: signed || !req.requireSignoff, fmt: function (v) { return v; } }
    ];

    return {
      weeks: weeks, trades: trades, compliance: compliance, rSum: rSum,
      drawdown: dd, signed: signed, checks: checks,
      complete: checks.every(function (c) { return c.ok; })
    };
  }

  /* Is this individual step complete, ignoring whether it was reachable? */
  function stepComplete(step, progress) {
    progress = progress || {};
    if (progress.overrides && progress.overrides[step.id]) return true;

    if (step.type === 'module') {
      var m = (progress.modules || {})[String(step.ref)];
      return !!(m && typeof m.quiz === 'number' && m.quiz >= (step.pass || 80));
    }
    if (step.type === 'drill') {
      var d = (progress.drills || {})[step.ref];
      return !!(d && d.passed);
    }
    if (step.type === 'cert') return !!(progress.certificate && progress.certificate.issuedAt);
    if (step.type === 'demo') return demoSummary(progress).complete;
    if (step.type === 'live') return !!progress.liveApproved;
    if (step.type === 'gate') return !!(progress.gates && progress.gates[step.id]);
    return false;
  }

  /* What the student must do to finish this step. Shown on locked and current cards. */
  function requirement(step) {
    if (step.type === 'module') {
      return 'Work through the slides and lab, then score ' + (step.pass || 80) + '% or better on the quiz.';
    }
    if (step.type === 'drill') return 'Pass the assessed drill on the trading floor.';
    if (step.type === 'gate') return step.detail || 'Instructor sign-off required.';
    if (step.type === 'cert') return 'Issued automatically once every stage before this is complete.';
    if (step.type === 'demo') {
      var r = window.PATH.demo;
      return 'Log at least ' + r.minWeeks + ' weeks and ' + r.minTrades + ' trades on a broker demo account, ' +
             'keeping compliance above ' + r.minCompliance + '% and drawdown under ' + r.maxDrawdown + '%.';
    }
    if (step.type === 'live') return step.detail || 'Reviewed and approved by your instructor.';
    return '';
  }

  /* Full state of the path for one student. */
  function state(progress) {
    progress = progress || {};
    var steps = flatSteps();
    var blockedFrom = -1;

    var decorated = steps.map(function (step, i) {
      var done = stepComplete(step, progress);
      if (!done && blockedFrom < 0) blockedFrom = i;
      return { step: step, done: done, index: i };
    });

    decorated.forEach(function (d, i) {
      if (d.done) d.status = 'done';
      else if (blockedFrom === i) d.status = 'current';
      else d.status = 'locked';
      d.overridden = !!(progress.overrides && progress.overrides[d.step.id]);
      d.requirement = requirement(d.step);
    });

    var doneCount = decorated.filter(function (d) { return d.done; }).length;

    // Group back into stages for display.
    var stages = (window.PATH.stages || []).map(function (stage) {
      var mine = decorated.filter(function (d) { return d.step.stage === stage.id; });
      var allDone = mine.length > 0 && mine.every(function (d) { return d.done; });
      var anyOpen = mine.some(function (d) { return d.status === 'current'; });
      return {
        stage: stage, steps: mine,
        status: allDone ? 'done' : anyOpen ? 'current' : (mine.some(function (d) { return d.done; }) ? 'current' : 'locked')
      };
    });

    var current = decorated.filter(function (d) { return d.status === 'current'; })[0] || null;

    return {
      steps: decorated,
      stages: stages,
      current: current,
      done: doneCount,
      total: steps.length,
      percent: steps.length ? Math.round((doneCount / steps.length) * 100) : 0,
      demo: demoSummary(progress),
      finished: doneCount === steps.length
    };
  }

  /* Route guards — used to stop someone opening a locked module by URL. */
  function moduleUnlocked(moduleId, progress) {
    var st = state(progress);
    var hit = st.steps.filter(function (d) {
      return d.step.type === 'module' && +d.step.ref === +moduleId;
    })[0];
    return hit ? (hit.status !== 'locked') : true;   // modules outside the path stay open
  }

  function drillUnlocked(drillId, progress) {
    var st = state(progress);
    var hit = st.steps.filter(function (d) {
      return d.step.type === 'drill' && d.step.ref === drillId;
    })[0];
    return hit ? (hit.status !== 'locked') : true;
  }

  /* What must be finished first, phrased for a human. */
  function blockedBy(kind, ref, progress) {
    var st = state(progress);
    if (!st.current) return null;
    var target = st.steps.filter(function (d) {
      return d.step.type === kind && String(d.step.ref) === String(ref);
    })[0];
    if (!target || target.status !== 'locked') return null;
    return st.current;
  }

  window.Path = {
    flatSteps: flatSteps,
    state: state,
    stepComplete: stepComplete,
    requirement: requirement,
    demoSummary: demoSummary,
    moduleUnlocked: moduleUnlocked,
    drillUnlocked: drillUnlocked,
    blockedBy: blockedBy
  };
})();
