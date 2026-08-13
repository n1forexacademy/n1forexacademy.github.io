/* N1 Forex Academy — the student journey UI.
   The gated path, the certificate, and the supervised demo log. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Prefers the eager catalogue so step cards render without fetching module
     content; falls back to loaded content if the catalogue is stale. */
  function moduleById(id) {
    var meta = window.Content && Content.meta(id);
    if (meta) return meta;
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
      // Each track has its own certificate page.
      return { kind: 'Milestone', title: step.title, desc: 'Your certificate of completion.',
               href: '#/certificate' + (step.track && step.track !== 'forex' ? '/' + step.track : ''),
               icon: '🎓' };
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

  /* Which track the student is currently viewing. Defaults to the furthest
     unlocked one so a returning student lands where they left off. */
  var viewingTrack = null;
  function currentTrackId(progress) {
    var list = Path.tracks(progress);
    if (viewingTrack && list.some(function (t) { return t.track.id === viewingTrack && t.unlocked; })) {
      return viewingTrack;
    }
    var open = list.filter(function (t) { return t.unlocked && !t.finished; });
    if (open.length) return open[0].track.id;
    var unlocked = list.filter(function (t) { return t.unlocked; });
    return (unlocked[unlocked.length - 1] || list[0]).track.id;
  }
  function setTrack(id) { viewingTrack = id; }

  /* The track selector strip. Only shown once more than one track exists. */
  function trackBar(progress, activeId) {
    var list = Path.tracks(progress);
    if (list.length < 2) return '';
    return '<div class="trackbar">' + list.map(function (t) {
      var cls = 'tchip' + (t.track.id === activeId ? ' on' : '') +
                (t.unlocked ? '' : ' locked') + (t.certificate ? ' certified' : '');
      var sub = t.unlocked
        ? (t.certificate ? 'Certified' : t.percent + '% complete')
        : 'Needs the ' + Path.trackById(t.requires).title + ' certificate';
      return (t.unlocked
        ? '<button class="' + cls + '" data-track="' + esc(t.track.id) + '">'
        : '<div class="' + cls + '">') +
          '<span class="tchip-t">' + esc(t.track.title) + (t.certificate ? ' ✓' : '') + '</span>' +
          '<span class="tchip-s">' + esc(sub) + '</span>' +
          (t.unlocked ? '<span class="tchip-bar"><i style="width:' + t.percent + '%"></i></span>' : '') +
        (t.unlocked ? '</button>' : '</div>');
    }).join('') + '</div>';
  }

  /* ---------- the journey ---------- */
  function renderJourney(app, progress) {
    var trackId = currentTrackId(progress);

    // No content fetch needed here — the journey renders entirely from the
    // eager catalogue and track definitions.
    var st = Path.state(progress, trackId);
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
      trackBar(progress, trackId) +
      '<div class="jhero">' +
        '<div class="jhero-text">' +
          '<p class="jgreet">Welcome back, ' + esc(firstName) + '</p>' +
          '<h1>' + esc(st.track.title) + '</h1>' +
          (st.track.subtitle ? '<p class="jsub">' + esc(st.track.subtitle) + '</p>' : '') +
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

    // Track switching. renderJourney fetches the curriculum if needed.
    app.querySelectorAll('.tchip[data-track]').forEach(function (b) {
      b.onclick = function () {
        setTrack(b.dataset.track);
        renderJourney(app, Auth.progress());
        window.scrollTo(0, 0);
      };
    });
  }

  /* Where a student goes after earning a certificate. Forex leads into the
     supervised demo period; the later tracks lead into whichever track they
     have just unlocked, or nowhere if this was the last one. */
  function certNext(trackId, progress) {
    if (trackId === 'forex') {
      return '<a class="btn" href="#/demo">Next: supervised demo trading →</a>';
    }
    var next = Path.tracks(progress).filter(function (t) {
      return t.requires === trackId;
    })[0];
    if (next) {
      return '<button class="btn" data-goto-track="' + esc(next.track.id) + '">' +
             'Next: ' + esc(next.track.title) + ' →</button>';
    }
    return '<a class="btn" href="#/">Back to your path</a>';
  }

  /* Certificate wording, specific to the track that earned it. */
  function certBody(trackId, st) {
    var n = st.steps.filter(function (d) { return d.step.type === 'module'; }).length;
    if (trackId === 'equities') {
      return 'has successfully completed the ' + n + '-module <b>Equity Markets</b> programme at N1 Forex Academy — ' +
        'covering share ownership and market structure, order books and settlement, the distinction between owned ' +
        'shares and leveraged derivatives, company analysis from published accounts, earnings and corporate actions, ' +
        'index and sector behaviour, and position sizing without leverage — together with a written equity process ' +
        'reviewed by an instructor.';
    }
    if (trackId === 'bonds') {
      return 'has successfully completed the ' + n + '-module <b>Fixed Income</b> programme at N1 Forex Academy — ' +
        'covering bond structure and seniority, the inverse relationship between price and yield, duration and ' +
        'interest rate risk, credit risk and ratings, the yield curve, and the transmission of monetary policy ' +
        'across bond, currency and equity markets — together with a cross-market capstone study reviewed by an ' +
        'instructor.';
    }
    return 'has successfully completed the ' + n + '-module <b>Forex Trading</b> programme at N1 Forex Academy — ' +
      'covering market structure, trade arithmetic, margin mechanics, chart reading, risk management and position ' +
      'sizing — together with every assessed practical drill on the academy trading simulator and a written trading ' +
      'plan reviewed by an instructor.';
  }

  /* ---------- certificate ---------- */
  function renderCertificate(app, progress, trackId) {
    trackId = trackId || currentTrackId(progress);
    var st = Path.state(progress, trackId);
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
    // Forex keeps the original singular key; later tracks are keyed by track id.
    var existing = Path.certOf(progress, trackId);
    if (!existing || !existing.issuedAt) {
      var prefix = trackId === 'equities' ? 'EQ' : trackId === 'bonds' ? 'FI' : 'FX';
      var rec = {
        issuedAt: Date.now(),
        id: 'N1-' + prefix + '-' + String(session.id || 'student').slice(0, 6).toUpperCase() +
            '-' + String(Date.now()).slice(-6),
        name: session.name,
        track: trackId,
        title: st.track.certificateTitle || 'Certificate of Completion'
      };
      Auth.progress(trackId === 'forex'
        ? { certificate: rec }
        : { certificates: (function () { var o = {}; o[trackId] = rec; return o; })() });
      progress = Auth.progress();
      existing = Path.certOf(progress, trackId);
    }
    var cert = existing;
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

            '<p class="cert-kicker">' + esc(cert.title || 'Certificate of Completion') + '</p>' +
            '<p class="cert-presented">This is to certify that</p>' +
            '<h1 class="cert-name">' + esc(cert.name || session.name) + '</h1>' +
            '<p class="cert-body">' + certBody(trackId, st) + '</p>' +

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
          certNext(trackId, progress) +
        '</div>' +
      '</div>';

    var goto = app.querySelector('[data-goto-track]');
    if (goto) goto.onclick = function () {
      setTrack(goto.dataset.gotoTrack);
      location.hash = '#/';
      renderJourney(app, Auth.progress());
      window.scrollTo(0, 0);
    };
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
