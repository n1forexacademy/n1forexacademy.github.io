/* N1 Forex Academy — the student journey UI.
   The gated path, the certificate, and the supervised demo log. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function moduleById(id) {
    return (window.COURSE || []).filter(function (m) { return m.id === +id; })[0] || null;
  }
  function drillById(id) {
    return (window.DRILLS || []).filter(function (d) { return d.id === id; })[0] || null;
  }

  /* Label, destination and description for one step. */
  function stepMeta(step) {
    if (step.type === 'module') {
      var m = moduleById(step.ref);
      return { kind: 'Module ' + step.ref, title: m ? m.title : 'Module ' + step.ref,
               desc: m ? m.tagline : '', href: '#/m/' + step.ref, icon: '📘' };
    }
    if (step.type === 'drill') {
      var d = drillById(step.ref);
      return { kind: 'Practical drill', title: d ? d.title : step.ref,
               desc: d ? d.brief : '', href: '#/drill/' + step.ref, icon: '📈' };
    }
    if (step.type === 'gate') {
      return { kind: 'Instructor check', title: step.title, desc: step.detail || '', href: null, icon: '🖊️' };
    }
    if (step.type === 'cert') {
      return { kind: 'Milestone', title: step.title, desc: 'Your certificate of completion.',
               href: '#/certificate', icon: '🎓' };
    }
    if (step.type === 'demo') {
      return { kind: 'Supervised practice', title: step.title,
               desc: 'Trade a real broker demo account and log every week.', href: '#/demo', icon: '🧭' };
    }
    if (step.type === 'live') {
      return { kind: 'Final review', title: step.title, desc: step.detail || '', href: null, icon: '🔑' };
    }
    return { kind: '', title: step.id, desc: '', href: null, icon: '•' };
  }

  /* ---------- the journey ---------- */
  function renderJourney(app, progress) {
    var st = Path.state(progress);
    var session = Auth.session() || {};
    var firstName = String(session.name || '').split(' ')[0] || 'there';

    var currentCard = '';
    if (st.current) {
      var meta = stepMeta(st.current.step);
      currentCard =
        '<div class="now-card">' +
          '<div class="now-tag">Your next step</div>' +
          '<h2>' + esc(meta.title) + '</h2>' +
          '<p>' + esc(meta.desc) + '</p>' +
          '<p class="now-req"><b>To unlock what follows:</b> ' + esc(st.current.requirement) + '</p>' +
          (meta.href
            ? '<a class="btn primary now-go" href="' + meta.href + '">Continue →</a>'
            : '<span class="now-wait">Waiting on your instructor</span>') +
        '</div>';
    } else if (st.finished) {
      currentCard =
        '<div class="now-card done">' +
          '<div class="now-tag">Path complete</div>' +
          '<h2>You have finished every stage</h2>' +
          '<p>Certificate issued and the live readiness review signed off. Trade small, keep journaling, ' +
          'and treat the risk policy as permanent.</p>' +
          '<a class="btn primary now-go" href="#/certificate">View certificate</a>' +
        '</div>';
    }

    var stagesHtml = st.stages.map(function (sg, si) {
      var steps = sg.steps.map(function (d) {
        var m = stepMeta(d.step);
        var cls = 'jstep ' + d.status;
        var inner =
          '<span class="jicon">' + (d.status === 'done' ? '✓' : d.status === 'locked' ? '🔒' : m.icon) + '</span>' +
          '<span class="jbody">' +
            '<span class="jkind">' + esc(m.kind) + (d.overridden ? ' · unlocked by instructor' : '') + '</span>' +
            '<span class="jtitle">' + esc(m.title) + '</span>' +
            (d.status === 'locked'
              ? '<span class="jreq">' + esc(d.requirement) + '</span>'
              : d.status === 'current'
                ? '<span class="jreq open">' + esc(d.requirement) + '</span>'
                : '') +
          '</span>';
        return (d.status !== 'locked' && m.href)
          ? '<a class="' + cls + '" href="' + m.href + '">' + inner + '</a>'
          : '<div class="' + cls + '">' + inner + '</div>';
      }).join('');

      return '<section class="jstage ' + sg.status + '">' +
        '<header class="jstage-h">' +
          '<span class="jnum">' + (si + 1) + '</span>' +
          '<div><h3>' + esc(sg.stage.title) + '</h3><p>' + esc(sg.stage.blurb) + '</p></div>' +
          '<span class="jbadge">' + (sg.status === 'done' ? 'Complete' : sg.status === 'current' ? 'In progress' : 'Locked') + '</span>' +
        '</header>' +
        '<div class="jsteps">' + steps + '</div>' +
      '</section>';
    }).join('');

    app.innerHTML =
      '<div class="jhero">' +
        '<div class="jhero-text">' +
          '<p class="jgreet">Welcome back, ' + esc(firstName) + '</p>' +
          '<h1>Your training path</h1>' +
          '<p class="lede">One step at a time. Nothing opens until the step before it is genuinely done — ' +
          'because the order is the teaching, not a suggestion.</p>' +
          '<div class="jprog"><div class="jprog-bar"><i style="width:' + st.percent + '%"></i></div>' +
          '<span>' + st.done + ' of ' + st.total + ' steps · ' + st.percent + '%</span></div>' +
        '</div>' +
        currentCard +
      '</div>' +
      (window.ILLUS
        ? '<div class="plat-card">' +
            '<h3>The platform you will train on</h3>' +
            '<p>Every practical drill runs on this terminal. It behaves like a real account — spread, commission, ' +
            'swap, margin, and a broker that closes you out at 50% margin level — but nothing here is real money and ' +
            'no broker is involved. What the slides show is what you will actually click.</p>' +
            window.ILLUS.terminalOverview +
          '</div>'
        : '') +
      '<div class="jstages">' + stagesHtml + '</div>' +
      '<div class="panel jfoot">' +
        '<h3>Struggling with a step?</h3>' +
        '<p>That is normal and it is not a reason to skip ahead. Tell your instructor which step you are stuck on — ' +
        'they can go through it with you, and if it makes sense they can unlock it manually so you are not blocked. ' +
        'Every override is recorded, so nobody quietly bypasses the risk stages.</p>' +
      '</div>';
  }

  /* ---------- certificate ---------- */
  function renderCertificate(app, progress) {
    var st = Path.state(progress);
    var session = Auth.session() || {};

    // Everything before the certificate step must be finished.
    var certIndex = st.steps.filter(function (d) { return d.step.type === 'cert'; })[0];
    var priorDone = st.steps.filter(function (d) {
      return d.index < (certIndex ? certIndex.index : 1e9);
    }).every(function (d) { return d.done; });

    if (!priorDone) {
      var remaining = st.steps.filter(function (d) {
        return d.index < (certIndex ? certIndex.index : 1e9) && !d.done;
      });
      app.innerHTML =
        '<div class="crumb"><a href="#/">Path</a> / Certificate</div>' +
        '<div class="panel"><h2>Not yet</h2>' +
        '<p>The certificate is issued once every stage before it is complete. ' +
        'You have <b>' + remaining.length + '</b> step' + (remaining.length === 1 ? '' : 's') + ' left:</p>' +
        '<ul class="tight">' + remaining.slice(0, 8).map(function (d) {
          return '<li>' + esc(stepMeta(d.step).title) + '</li>';
        }).join('') + '</ul>' +
        '<p><a href="#/">Back to your path</a></p></div>';
      return;
    }

    // Issue on first view, then keep the same date and id forever.
    if (!progress.certificate || !progress.certificate.issuedAt) {
      var id = 'N1-' + String(session.id || 'student').slice(0, 8).toUpperCase() + '-' +
               String(Date.now()).slice(-6);
      Auth.progress({ certificate: { issuedAt: Date.now(), id: id, name: session.name } });
      progress = Auth.progress();
    }
    var cert = progress.certificate;
    var issued = new Date(cert.issuedAt);

    var sig = window.BRAND ? BRAND.signatory : { name: 'Jonathan Afolayan', title: 'Founder & Head of Training' };

    app.innerHTML =
      '<div class="crumb"><a href="#/">Path</a> / Certificate</div>' +
      '<div class="cert-wrap">' +
        '<div class="cert" id="certDoc">' +
          '<div class="cert-frame">' +
            '<div class="cert-corner tl"></div><div class="cert-corner tr"></div>' +
            '<div class="cert-corner bl"></div><div class="cert-corner br"></div>' +

            '<div class="cert-head">' + (window.BRAND ? BRAND.lockup(52) : '') + '</div>' +

            '<p class="cert-kicker">Certificate of Completion</p>' +
            '<p class="cert-presented">This is to certify that</p>' +
            '<h1 class="cert-name">' + esc(cert.name || session.name) + '</h1>' +
            '<p class="cert-body">has successfully completed the twelve-module <b>N1 Forex Academy</b> programme — ' +
            'covering market structure, trade arithmetic, margin mechanics, chart reading, risk management and ' +
            'position sizing — together with every assessed practical drill on the academy trading simulator and a ' +
            'written trading plan reviewed by an instructor.</p>' +

            '<div class="cert-sign">' +
              '<div class="cert-sig-block">' +
                '<div class="cert-sig-mark">' + (window.BRAND ? BRAND.signature() : '') + '</div>' +
                '<div class="cert-sig-line"></div>' +
                '<b>' + esc(sig.name) + '</b>' +
                '<span>' + esc(sig.title) + '</span>' +
                '<em>Electronically signed</em>' +
              '</div>' +
              '<div class="cert-seal-block">' + (window.BRAND ? BRAND.seal(cert.id) : '') + '</div>' +
              '<div class="cert-sig-block">' +
                '<div class="cert-sig-mark cert-date-mark">' +
                  issued.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) +
                '</div>' +
                '<div class="cert-sig-line"></div>' +
                '<b>Date of issue</b>' +
                '<span>Reference ' + esc(cert.id) + '</span>' +
                '<em>Verify with the academy</em>' +
              '</div>' +
            '</div>' +

            '<p class="cert-disclaim">This certifies completion of training only. It is not a professional ' +
            'qualification, not a regulatory licence, and not a prediction of trading profitability. The large ' +
            'majority of retail traders lose money. No real funds were traded during this programme.</p>' +
          '</div>' +
        '</div>' +
        '<div class="cert-actions">' +
          '<button class="btn primary" onclick="window.print()">Print / save as PDF</button>' +
          '<a class="btn" href="#/demo">Next: supervised demo trading →</a>' +
        '</div>' +
      '</div>';
  }

  /* ---------- supervised demo period ---------- */
  function renderDemo(app, progress) {
    var st = Path.state(progress);
    var certStep = st.steps.filter(function (d) { return d.step.type === 'cert'; })[0];

    if (certStep && !certStep.done) {
      app.innerHTML =
        '<div class="crumb"><a href="#/">Path</a> / Demo trading</div>' +
        '<div class="panel"><h2>Finish the course first</h2>' +
        '<p>The supervised demo period opens once your certificate is issued. Trading a demo account before you have ' +
        'a written plan and a risk policy just builds habits you will have to unlearn.</p>' +
        '<p><a href="#/">Back to your path</a></p></div>';
      return;
    }

    var d = st.demo, req = window.PATH.demo;
    var log = (progress.demoLog || []).slice().sort(function (a, b) { return (b.week || 0) - (a.week || 0); });

    var checks = d.checks.map(function (c) {
      return '<div class="chk ' + (c.ok ? 'ok' : '') + '">' +
        '<span class="chk-i">' + (c.ok ? '✓' : '○') + '</span>' +
        '<span class="chk-l">' + esc(c.label) + '</span>' +
        '<span class="chk-v">' + esc(c.fmt(c.have)) + ' <small>/ ' +
          (c.invert ? 'max ' : '') + esc(c.fmt(c.need)) + '</small></span></div>';
    }).join('');

    var rows = log.map(function (w) {
      var comp = (+w.trades > 0) ? Math.round((+w.followed / +w.trades) * 100) : 0;
      return '<tr><td>' + (w.week || '—') + '</td><td>' + (w.trades || 0) + '</td>' +
        '<td>' + (w.followed || 0) + ' <small>(' + comp + '%)</small></td>' +
        '<td class="' + ((+w.r || 0) >= 0 ? 'good' : 'bad') + '">' + (+w.r || 0).toFixed(2) + 'R</td>' +
        '<td>' + esc(w.note || '') + '</td></tr>';
    }).join('');

    app.innerHTML =
      '<div class="crumb"><a href="#/">Path</a> / Supervised demo trading</div>' +
      '<div class="module-head"><h1>Supervised demo trading</h1>' +
      '<p class="lede">Everything so far was simulated inside the academy. This stage is a <b>real broker demo ' +
      'account</b> — real prices, real spreads, real overnight gaps — with no money at risk. It is the last stage ' +
      'before anyone talks about live funds, and it cannot be rushed.</p></div>' +

      '<div class="callout warn"><p><b>Why this takes weeks and not days.</b> A week of trading tells you nothing. ' +
      'Losing streaks arrive in clusters, and the point is to find out how <em>you</em> behave during one — while it ' +
      'is still free to find out.</p></div>' +

      '<div class="panel">' +
        '<h2>Requirements before a live account</h2>' +
        '<div class="chks">' + checks + '</div>' +
        (d.complete
          ? '<div class="callout good"><p><b>All requirements met.</b> Your instructor will book the live readiness ' +
            'review. Passing it means starting at the smallest size your broker allows — nothing more.</p></div>'
          : '<p class="muted">Every line must be green, and your instructor must sign off. There is no way to ' +
            'shortcut this from inside the academy.</p>') +

        '<h3>Log this week</h3>' +
        '<p class="muted">Fill this in once a week from your journal. Honest numbers only — the point is to find ' +
        'problems while they are free.</p>' +
        '<div class="admin-form">' +
          '<input id="dwWeek" type="number" min="1" placeholder="Week #" value="' + (d.weeks + 1) + '">' +
          '<input id="dwTrades" type="number" min="0" placeholder="Trades taken">' +
          '<input id="dwFollowed" type="number" min="0" placeholder="Followed the plan">' +
          '<input id="dwR" type="number" step="0.01" placeholder="Net R">' +
          '<input id="dwNote" placeholder="One lesson from this week">' +
          '<button class="btn primary" id="dwGo">Add week</button>' +
        '</div><p class="admin-msg" id="dwMsg"></p>' +
        '<div class="admin-form">' +
          '<input id="dwDD" type="number" step="0.1" min="0" placeholder="Worst drawdown so far (%)" value="' + (d.drawdown || '') + '">' +
          '<button class="btn" id="dwDDGo">Update drawdown</button>' +
        '</div>' +

        (log.length
          ? '<h3>Your weekly log</h3><div class="table-wrap"><table><thead><tr><th>Week</th><th>Trades</th>' +
            '<th>Followed plan</th><th>Net R</th><th>Lesson</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
          : '<p class="muted">No weeks logged yet.</p>') +
      '</div>';

    var msg = document.getElementById('dwMsg');
    document.getElementById('dwGo').onclick = function () {
      var wk = parseInt(document.getElementById('dwWeek').value, 10);
      var tr = parseInt(document.getElementById('dwTrades').value, 10);
      var fo = parseInt(document.getElementById('dwFollowed').value, 10);
      var r = parseFloat(document.getElementById('dwR').value);
      var note = document.getElementById('dwNote').value.trim();
      if (!(wk > 0) || !(tr >= 0) || !(fo >= 0) || isNaN(r)) {
        msg.textContent = 'Fill in week, trades, followed and net R.'; msg.className = 'admin-msg bad'; return;
      }
      if (fo > tr) { msg.textContent = 'Trades that followed the plan cannot exceed total trades.'; msg.className = 'admin-msg bad'; return; }
      Auth.progress({ demoWeek: { week: wk, trades: tr, followed: fo, r: r, note: note } });
      renderDemo(app, Auth.progress());
    };
    document.getElementById('dwDDGo').onclick = function () {
      var dd = parseFloat(document.getElementById('dwDD').value);
      if (isNaN(dd) || dd < 0) return;
      Auth.progress({ demoMaxDrawdown: dd });
      renderDemo(app, Auth.progress());
    };
  }

  window.Journey = {
    render: renderJourney,
    certificate: renderCertificate,
    demo: renderDemo,
    stepMeta: stepMeta
  };
})();
