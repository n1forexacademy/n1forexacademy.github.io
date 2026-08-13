/* N1 Forex Academy — instructor dashboard.

   Deliberately NOT the student view. A student sees one path and one next step.
   An instructor sees the cohort: who is stuck, who is waiting on them, who is
   ready for a live review — and shortcuts into the teaching material.

   The old "grid of every module" home is gone; teaching material now lives in
   the Library, reachable but not the front door. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function stat(value, label, cls) {
    return '<div class="dstat ' + (cls || '') + '"><b>' + value + '</b><span>' + esc(label) + '</span></div>';
  }

  async function render(app) {
    var session = Auth.session() || {};
    var first = String(session.name || 'Instructor').split(' ')[0];

    app.innerHTML =
      '<div class="dash-head">' +
        '<div><p class="dgreet">Instructor</p><h1>Good to see you, ' + esc(first) + '</h1>' +
        '<p class="lede">Your cohort at a glance. Students see a single locked path; you see everyone on it.</p></div>' +
      '</div>' +
      '<div id="dashBody"><p class="muted">Loading cohort…</p></div>';

    var body = document.getElementById('dashBody');

    if (Auth.mode() !== 'server') {
      body.innerHTML =
        '<div class="callout warn"><p><b>Running without a server.</b> Cohort tracking needs the academy API. ' +
        'Teaching material is available from the Library.</p></div>' + quickLinks();
      return;
    }

    var data;
    try { data = await Auth.call('/api/admin/students'); }
    catch (e) {
      body.innerHTML = '<div class="callout danger"><p><b>Could not load the cohort.</b> ' +
        esc(e.message || 'The academy server did not respond.') + '</p></div>' + quickLinks();
      return;
    }

    var students = (data.students || []).filter(function (s) { return s.role !== 'instructor'; });
    var totalSteps = window.Path ? Path.flatSteps().length : 0;

    // Work out where each student actually is.
    var rows = students.map(function (s) {
      var st = window.Path ? Path.state(s) : null;
      var cur = (st && st.current && window.Journey) ? Journey.stepMeta(st.current.step) : null;
      var waiting = st && st.current && (st.current.step.type === 'gate' || st.current.step.type === 'live');
      var demoReady = st && st.demo && st.demo.complete && !s.liveApproved;
      var stale = s.updatedAt && (Date.now() - s.updatedAt) > 14 * 86400000;
      return {
        s: s, st: st, cur: cur, waiting: waiting, demoReady: demoReady, stale: stale,
        pct: st ? st.percent : 0
      };
    });

    var needsYou = rows.filter(function (r) { return r.waiting || r.demoReady; });
    var stalled = rows.filter(function (r) { return r.stale && !r.waiting; });
    var certified = rows.filter(function (r) { return r.s.certificate && r.s.certificate.issuedAt; });

    var attention = needsYou.length
      ? '<div class="dsection"><h2>Waiting on you</h2><div class="dcards">' +
          needsYou.map(function (r) {
            return '<div class="dcard urgent">' +
              '<div class="dcard-h"><b>' + esc(r.s.name) + '</b><span class="chip">' +
                (r.demoReady ? 'demo complete' : 'needs sign-off') + '</span></div>' +
              '<p>' + esc(r.demoReady
                ? 'Has met every demo requirement. Book the live readiness review.'
                : (r.cur ? r.cur.title : 'Awaiting an instructor check.')) + '</p>' +
              '<button class="btn" data-open="' + esc(r.s.id) + '">Open student</button>' +
            '</div>';
          }).join('') + '</div></div>'
      : '<div class="dsection"><h2>Waiting on you</h2>' +
        '<p class="muted">Nothing right now. Students in progress are working through their own steps.</p></div>';

    var table = students.length
      ? '<div class="table-wrap"><table><thead><tr><th>Student</th><th>Progress</th>' +
        '<th>Currently on</th><th>Last active</th><th></th></tr></thead><tbody>' +
        rows.map(function (r) {
          return '<tr' + (r.s.active ? '' : ' style="opacity:.5"') + '>' +
            '<td><b>' + esc(r.s.name) + '</b><br><small>' + esc(r.s.username || r.s.id) + '</small></td>' +
            '<td><div class="dbar"><i style="width:' + r.pct + '%"></i></div>' +
              '<small>' + (r.st ? r.st.done : 0) + '/' + totalSteps + ' · ' + r.pct + '%</small></td>' +
            '<td>' + esc(r.cur ? r.cur.title : (r.st && r.st.finished ? 'Finished' : '—')) + '</td>' +
            '<td>' + (r.s.updatedAt ? new Date(r.s.updatedAt).toLocaleDateString() : '—') +
              (r.stale ? ' <span class="chip warnchip">quiet</span>' : '') + '</td>' +
            '<td><button class="btn-x" data-open="' + esc(r.s.id) + '">Help</button></td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p class="muted">Nobody enrolled yet. Create an invite link from Admin → Invite links.</p>';

    body.innerHTML =
      '<div class="dstats">' +
        stat(students.length, 'students enrolled') +
        stat(needsYou.length, 'waiting on you', needsYou.length ? 'urgent' : '') +
        stat(certified.length, 'certified') +
        stat(stalled.length, 'quiet 2+ weeks', stalled.length ? 'warn' : '') +
      '</div>' +
      attention +
      '<div class="dsection"><h2>Everyone</h2>' + table + '</div>' +
      quickLinks();

    body.querySelectorAll('[data-open]').forEach(function (b) {
      b.onclick = function () { location.hash = '#/instructor'; };
    });
  }

  function quickLinks() {
    return '<div class="dsection"><h2>Teaching tools</h2><div class="dlinks">' +
      '<a class="dlink" href="#/instructor"><b>Admin</b><span>Students, invite links, overrides</span></a>' +
      '<a class="dlink" href="#/library"><b>Library</b><span>All 12 modules, slides and labs</span></a>' +
      '<a class="dlink" href="#/drills"><b>Trading floor</b><span>Run any drill yourself</span></a>' +
      '<a class="dlink" href="#/toolkit"><b>Toolkit</b><span>Pip values, risk tables, session clock</span></a>' +
      '<a class="dlink" href="#/plan"><b>Course plan</b><span>Session-by-session delivery guide</span></a>' +
      '<a class="dlink" href="#/glossary"><b>Glossary</b><span>Every term, searchable</span></a>' +
      '</div></div>';
  }

  window.Dashboard = { render: render };
})();
