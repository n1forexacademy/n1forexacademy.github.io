/* Forex Trading Academy — hash-router + slide engine.
   Content lives in content/modules-*.js which push onto window.COURSE. */
(function () {
  'use strict';

  var MODULES = (window.COURSE || []).slice().sort(function (a, b) { return a.id - b.id; });
  var app = document.getElementById('app');

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Content is authored by us, so a small inline markup dialect is safe here.
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function lvlClass(l) {
    return l === 'Foundation' ? 'lvl-1' : l === 'Core skill' ? 'lvl-2' : 'lvl-3';
  }

  /* ---------- home ---------- */
  function viewHome() {
    var totalSlides = MODULES.reduce(function (n, m) { return n + m.slides.length; }, 0);
    var totalLabs = MODULES.filter(function (m) { return m.practical; }).length;

    var cards = MODULES.map(function (m) {
      return '<a class="card" href="#/m/' + m.id + '">' +
        '<span class="num">Module ' + m.id + '</span>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<p>' + esc(m.tagline) + '</p>' +
        '<div class="chips">' +
          '<span class="chip ' + lvlClass(m.level) + '">' + esc(m.level) + '</span>' +
          '<span class="chip">' + m.slides.length + ' slides</span>' +
          '<span class="chip">' + esc(m.duration) + '</span>' +
        '</div></a>';
    }).join('');

    app.innerHTML =
      '<section class="hero">' +
        '<h1>N1 Forex Academy</h1>' +
        '<p class="lede">A complete 12-module teaching kit: presenter slides with instructor notes, a hands-on practical lab for every module, quizzes with answer explanations, and a glossary. Built to be taught, not just read.</p>' +
        '<div class="stat-row">' +
          '<div class="stat"><b>' + MODULES.length + '</b>modules</div>' +
          '<div class="stat"><b>' + totalSlides + '</b>slides</div>' +
          '<div class="stat"><b>' + totalLabs + '</b>practical labs</div>' +
          '<div class="stat"><b>~24h</b>contact time</div>' +
        '</div>' +
      '</section>' +
      '<div class="section-head"><h2>Trading Floor</h2>' +
        '<span class="muted">Theory is half of it. This is the other half.</span></div>' +
      '<div class="panel">' +
        '<p>Seven assessed drills on a simulated market with a full account model — spread, commission, swap, margin, ' +
        'and a broker that will close you out exactly as a real one does. A <b>risk guard</b> sits between the student and ' +
        'the order button: at first it blocks anything oversized and explains the arithmetic, then it drops to advisory, ' +
        'then it disappears entirely for the final assessment.</p>' +
        '<p class="muted">Students cannot progress by being lucky. Passing requires correct position sizing, respected ' +
        'daily stops, and survivable drawdown — measured, not self-reported.</p>' +
        '<p><a class="btn primary" href="#/drills" style="display:inline-block;text-decoration:none">Enter the Trading Floor →</a></p>' +
      '</div>' +
      '<div class="section-head"><h2>Curriculum</h2>' +
        '<span class="muted">Teach in order — each module assumes the one before it.</span></div>' +
      '<div class="grid">' + cards + '</div>' +
      '<div class="section-head"><h2>How to run a session</h2></div>' +
      '<div class="panel">' +
        '<ol class="steps">' +
          '<li><h4>Open the module and hit <em>Present</em></h4><p>The deck goes fullscreen-style. Arrow keys or Space move between slides. Press <code>N</code> to show or hide your instructor notes — the student never needs to see them, so mirror your screen rather than duplicating if you want them hidden.</p></li>' +
          '<li><h4>Teach the slides (~35–45 min)</h4><p>Stop at every slide that has a "Ask the room" note. The deck is deliberately light on text so you do the explaining.</p></li>' +
          '<li><h4>Switch to the Practical Lab (~40–60 min)</h4><p>The student works on a live MT4/MT5 or TradingView chart while you supervise. Every lab ends in a concrete deliverable you can mark.</p></li>' +
          '<li><h4>Close with the quiz (~10 min)</h4><p>Answers reveal on submit with an explanation of why each option is right or wrong. Anything below 80% means re-teach that slide before moving on.</p></li>' +
          '<li><h4>Set the homework</h4><p>Each module ends with between-session work — usually demo trades or journal entries. Review it at the start of the next session.</p></li>' +
        '</ol>' +
      '</div>';
  }

  /* ---------- course plan ---------- */
  function viewPlan() {
    var rows = MODULES.map(function (m) {
      return '<tr><td><b>' + m.id + '</b></td><td><a href="#/m/' + m.id + '">' + esc(m.title) + '</a></td>' +
        '<td>' + esc(m.level) + '</td><td>' + esc(m.duration) + '</td>' +
        '<td>' + esc(m.practical ? m.practical.deliverable : '—') + '</td></tr>';
    }).join('');

    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Course plan</div>' +
      '<div class="module-head"><h1>Course Plan</h1>' +
      '<p class="lede">Twelve sessions of roughly two hours each. The suggested cadence is two sessions a week over six weeks, with demo trading between every session.</p></div>' +

      '<div class="panel">' +
        '<h2>Entry requirements</h2>' +
        '<ul class="tight">' +
          '<li>A laptop or desktop — phone-only students cannot complete the charting labs.</li>' +
          '<li>A free MT4 or MT5 demo account, plus a free TradingView account.</li>' +
          '<li>A spreadsheet app for the trading journal and position-size calculator labs.</li>' +
          '<li>No prior trading experience required. Basic arithmetic and percentages are assumed.</li>' +
        '</ul>' +

        '<h3>Phases</h3>' +
        '<div class="kv">' +
          '<dt>Modules 1–4</dt><dd><b>Foundation.</b> What the market is, how a trade is actually priced and executed, and how to set up an account safely. No strategy yet — mechanics only.</dd>' +
          '<dt>Modules 5–8</dt><dd><b>Reading the chart.</b> Sessions and timing, candlesticks, market structure, levels, and indicators. The student learns to describe a chart out loud before ever placing a trade on it.</dd>' +
          '<dt>Modules 9–10</dt><dd><b>Risk and context.</b> Fundamentals and news, then the single most important module in the course: risk management and position sizing.</dd>' +
          '<dt>Modules 11–12</dt><dd><b>Systemising.</b> Turning observations into a written, testable strategy, then backtesting, journaling, psychology and automation.</dd>' +
        '</div>' +

        '<div class="callout warn"><p><b>Non-negotiable rule for this course:</b> the student stays on demo until they have completed Module 10 <em>and</em> logged 30 journaled demo trades with a written plan. Teaching risk after someone has already lost real money is teaching it too late.</p></div>' +

        '<h3>Session-by-session</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>#</th><th>Module</th><th>Level</th><th>Length</th><th>Lab deliverable</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +

        '<h3>Assessment weighting</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>Component</th><th>Weight</th><th>Pass mark</th></tr></thead><tbody>' +
          '<tr><td>Module quizzes (12)</td><td>20%</td><td>80% average</td></tr>' +
          '<tr><td>Practical lab deliverables (12)</td><td>40%</td><td>All submitted, 10 of 12 rated competent</td></tr>' +
          '<tr><td>Written trading plan (Module 11)</td><td>20%</td><td>Meets every rubric item</td></tr>' +
          '<tr><td>Journal of 30 demo trades + review (Module 12)</td><td>20%</td><td>Complete, with a self-review</td></tr>' +
        '</tbody></table></div>' +

        '<div class="callout danger"><p><b>What a pass does not mean.</b> Completing this course means the student can read a chart, size a position and follow a written process. It does not mean they will be profitable. Most retail accounts lose money. Say this out loud in session one and again in session twelve.</p></div>' +
      '</div>';
  }

  /* ---------- toolkit ---------- */
  function viewToolkit() {
    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Toolkit</div>' +
      '<div class="module-head"><h1>Instructor Toolkit</h1>' +
      '<p class="lede">The reference tables you will reach for mid-session, plus the printable templates the labs depend on.</p></div>' +

      '<div class="panel">' +
        '<h2>Position size — the one formula that matters</h2>' +
        '<p>Every risk decision in this course reduces to this. Write it on the board in session one and leave it there.</p>' +
        '<div class="callout good"><p><code>Lots = (Account balance &times; Risk %) &divide; (Stop distance in pips &times; Pip value per lot)</code></p></div>' +
        '<div class="table-wrap"><table><thead><tr><th>Pair type</th><th>Pip = </th><th>Pip value, 1.00 standard lot</th><th>Notes</th></tr></thead><tbody>' +
          '<tr><td>USD-quoted (EUR/USD, GBP/USD, AUD/USD)</td><td>0.0001</td><td>$10.00 exactly</td><td>The easy case — teach with these first</td></tr>' +
          '<tr><td>JPY-quoted (USD/JPY, EUR/JPY)</td><td>0.01</td><td>≈ $10 &divide; USDJPY rate &times; 100 ≈ $6–7</td><td>Two decimal places, not four — the classic beginner error</td></tr>' +
          '<tr><td>USD-base (USD/CHF, USD/CAD)</td><td>0.0001</td><td>$10 &divide; current rate</td><td>Varies with price</td></tr>' +
          '<tr><td>Gold (XAU/USD)</td><td>0.01 or 0.1</td><td>Broker-dependent</td><td>Always verify in the platform before sizing</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><p><b>Teaching point.</b> Never let a student memorise "one pip is ten dollars". It is ten dollars per <em>standard</em> lot on a <em>USD-quoted</em> pair. Make them state all three conditions.</p></div>' +

        '<h3>Lot size reference</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>Name</th><th>Units</th><th>Volume field</th><th>Pip value (USD-quoted)</th></tr></thead><tbody>' +
          '<tr><td>Standard lot</td><td>100,000</td><td>1.00</td><td>$10.00</td></tr>' +
          '<tr><td>Mini lot</td><td>10,000</td><td>0.10</td><td>$1.00</td></tr>' +
          '<tr><td>Micro lot</td><td>1,000</td><td>0.01</td><td>$0.10</td></tr>' +
          '<tr><td>Nano lot (some brokers)</td><td>100</td><td>0.001</td><td>$0.01</td></tr>' +
        '</tbody></table></div>' +

        '<h3>What risk of ruin actually looks like</h3>' +
        '<p>Losing streaks are longer than students expect. At a 50% win rate, a run of 7 losses happens roughly once every 128 trades — that is a normal month, not a disaster.</p>' +
        '<div class="table-wrap"><table><thead><tr><th>Risk per trade</th><th>After 5 losses</th><th>After 10 losses</th><th>Gain needed to recover from 10</th></tr></thead><tbody>' +
          '<tr><td>1%</td><td>−4.9%</td><td>−9.6%</td><td>+10.6%</td></tr>' +
          '<tr><td>2%</td><td>−9.6%</td><td>−18.3%</td><td>+22.4%</td></tr>' +
          '<tr><td>5%</td><td>−22.6%</td><td>−40.1%</td><td>+67.0%</td></tr>' +
          '<tr><td>10%</td><td>−41.0%</td><td>−65.1%</td><td>+186.5%</td></tr>' +
          '<tr><td>20%</td><td>−67.2%</td><td>−89.3%</td><td>+733.8%</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout danger"><p><b>Run this live.</b> Do not just show the table — open a spreadsheet and multiply by 0.98 ten times in front of them, then by 0.80 ten times. The 20% row is what a martingale or over-leveraged account does in a single bad week.</p></div>' +

        '<h3>Risk : reward and the break-even win rate</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>R:R</th><th>Win rate to break even</th><th>Expectancy at a 50% win rate</th></tr></thead><tbody>' +
          '<tr><td>1 : 1</td><td>50.0%</td><td>0.00 R</td></tr>' +
          '<tr><td>1 : 1.5</td><td>40.0%</td><td>+0.25 R</td></tr>' +
          '<tr><td>1 : 2</td><td>33.3%</td><td>+0.50 R</td></tr>' +
          '<tr><td>1 : 3</td><td>25.0%</td><td>+1.00 R</td></tr>' +
          '<tr><td>2 : 1</td><td>66.7%</td><td>−0.25 R</td></tr>' +
        '</tbody></table></div>' +
        '<p class="muted">Expectancy per trade = (win rate &times; reward) − (loss rate &times; risk), expressed in R, where 1R is the amount risked. Costs are excluded — add spread and commission before believing any of it.</p>' +

        '<h3>Session clock (all times UTC)</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>Session</th><th>Approx. hours</th><th>Character</th><th>Best for</th></tr></thead><tbody>' +
          '<tr><td>Sydney</td><td>21:00–06:00</td><td>Thin, slow</td><td>AUD, NZD ranges</td></tr>' +
          '<tr><td>Tokyo</td><td>00:00–09:00</td><td>Orderly, range-prone</td><td>JPY pairs, range strategies</td></tr>' +
          '<tr><td>London</td><td>07:00–16:00</td><td>Highest volume of the day</td><td>EUR, GBP trends and breakouts</td></tr>' +
          '<tr><td>New York</td><td>12:00–21:00</td><td>News-driven</td><td>USD pairs, gold</td></tr>' +
          '<tr><td><b>London/NY overlap</b></td><td><b>12:00–16:00</b></td><td><b>Peak liquidity and range</b></td><td><b>Most day-trading setups</b></td></tr>' +
        '</tbody></table></div>' +
        '<p class="muted">Daylight saving shifts London and New York by an hour at different times of year, so these drift. Have students verify against their own broker’s server clock rather than trusting a fixed table.</p>' +

        '<h3>Printable templates the labs use</h3>' +
        '<ul class="tight">' +
          '<li><b>Trade journal columns:</b> date/time, pair, timeframe, direction, setup name, entry, stop, target, lots, risk %, R planned, R achieved, screenshot link, did-I-follow-my-plan (Y/N), one-line lesson.</li>' +
          '<li><b>Pre-trade checklist:</b> Is the session right? Is there red-folder news in the next 60 minutes? Is my direction aligned with the higher timeframe? Is my stop at a level rather than a round number of pips? Is my risk at or below the plan? Would I take this trade if the last one had been a loss?</li>' +
          '<li><b>Weekly review sheet:</b> trades taken, rules broken, best trade and why, worst trade and why, one process change for next week.</li>' +
        '</ul>' +
        '<p class="muted">Build these as a shared spreadsheet before session one. Handing students an empty template on day one is far more effective than asking them to design one in Module 12.</p>' +
      '</div>';
  }

  /* ---------- glossary ---------- */
  function viewGlossary() {
    var all = [];
    MODULES.forEach(function (m) {
      (m.glossary || []).forEach(function (g) { all.push({ t: g.t, d: g.d, m: m.id }); });
    });
    all.sort(function (a, b) { return a.t.toLowerCase().localeCompare(b.t.toLowerCase()); });

    var rows = all.map(function (g) {
      return '<tr><td><b>' + esc(g.t) + '</b></td><td>' + md(g.d) +
        '</td><td><a href="#/m/' + g.m + '">M' + g.m + '</a></td></tr>';
    }).join('');

    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Glossary</div>' +
      '<div class="module-head"><h1>Glossary</h1>' +
      '<p class="lede">' + all.length + ' terms, in the module where each is first taught. Give this to students as a handout on day one.</p></div>' +
      '<div class="panel"><input id="gsearch" class="btn" style="width:100%;padding:.6rem .9rem;margin-bottom:1rem" placeholder="Filter terms…">' +
      '<div class="table-wrap"><table id="gtable"><thead><tr><th>Term</th><th>Meaning</th><th>Taught in</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>';

    var search = document.getElementById('gsearch');
    search.addEventListener('input', function () {
      var q = search.value.toLowerCase();
      Array.prototype.forEach.call(document.querySelectorAll('#gtable tbody tr'), function (tr) {
        tr.style.display = tr.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none';
      });
    });
  }

  /* ---------- module ---------- */
  /* Shown when someone reaches a locked step by typing the URL. */
  function lockedNotice(kindLabel, title) {
    var st = Path.state(Auth.progress());
    var cur = st.current ? Journey.stepMeta(st.current.step) : null;
    app.innerHTML =
      '<div class="crumb"><a href="#/">Your path</a> / Locked</div>' +
      '<div class="panel locked-panel">' +
        '<div class="lock-big">🔒</div>' +
        '<h2>' + esc(title) + ' is not open yet</h2>' +
        '<p>' + esc(kindLabel) + ' unlock in order. The sequence is deliberate — each one assumes the work before it, ' +
        'and skipping ahead is how people end up sizing positions they do not understand.</p>' +
        (cur ? '<div class="callout"><p><b>Your next step is:</b> ' + esc(cur.title) + '<br>' +
               esc(st.current.requirement) + '</p></div>' +
               (cur.href ? '<p><a class="btn primary" href="' + cur.href + '" style="display:inline-block;text-decoration:none">Go there →</a></p>' : '')
             : '') +
        '<p class="muted">Genuinely stuck on the step before this? Ask your instructor — they can work through it ' +
        'with you and unlock it manually if that is the right call.</p>' +
      '</div>';
  }

  function viewModule(id, tab) {
    var m = MODULES.find(function (x) { return x.id === id; });
    if (!m) { app.innerHTML = '<div class="panel"><h2>Module not found</h2><p><a href="#/">Back to your path</a></p></div>'; return; }
    if (!Auth.isInstructor() && !Path.moduleUnlocked(id, Auth.progress())) {
      return lockedNotice('Modules', 'Module ' + id + ' — ' + m.title);
    }
    tab = tab || 'slides';
    Auth.progress({ module: m.id, visited: true });

    // Modules with authored lessons are delivered lesson-by-lesson.
    var hasLessons = !!(window.Lessons && Lessons.forModule(m.id));

    var prev = MODULES.find(function (x) { return x.id === id - 1; });
    var next = MODULES.find(function (x) { return x.id === id + 1; });

    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Module ' + m.id + '</div>' +
      '<div class="module-head">' +
        '<h1>' + esc(m.title) + '</h1>' +
        '<p class="lede">' + esc(m.tagline) + '</p>' +
        '<div class="chips"><span class="chip ' + lvlClass(m.level) + '">' + esc(m.level) + '</span>' +
        '<span class="chip">' + esc(m.duration) + '</span>' +
        '<span class="chip">' + m.slides.length + ' slides</span></div>' +
      '</div>' +
      '<div class="tabs" role="tablist">' +
        (hasLessons
          ? ['slides|Lessons', 'lab|Practical Lab', 'quiz|Module test', 'notes|Objectives &amp; Terms']
          : ['slides|Slides', 'lab|Practical Lab', 'quiz|Quiz', 'notes|Objectives &amp; Terms']
        ).map(function (t) {
          var p = t.split('|');
          return '<button role="tab" data-tab="' + p[0] + '" aria-selected="' + (tab === p[0]) + '">' + p[1] + '</button>';
        }).join('') +
      '</div>' +
      '<div id="tabpanel"></div>' +
      '<div class="pager">' +
        (prev ? '<a href="#/m/' + prev.id + '">← M' + prev.id + ' · ' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a href="#/m/' + next.id + '">M' + next.id + ' · ' + esc(next.title) + ' →</a>' : '<span></span>') +
      '</div>';

    Array.prototype.forEach.call(app.querySelectorAll('.tabs button'), function (b) {
      b.addEventListener('click', function () { location.hash = '#/m/' + m.id + '/' + b.dataset.tab; });
    });

    var panel = document.getElementById('tabpanel');
    if (tab === 'slides') {
      if (hasLessons && !Auth.isInstructor()) Lessons.renderList(m, panel);
      else renderDeck(m, panel);
    }
    else if (tab === 'lab') renderLesson(m, panel);
    else if (tab === 'quiz') {
      // The module test stays shut until every lesson is passed.
      if (hasLessons && !Auth.isInstructor() && !Lessons.complete(m.id)) {
        var left = Lessons.forModule(m.id).length - Lessons.currentIndex(m.id);
        panel.innerHTML = '<div class="panel locked-panel"><div class="lock-big">🔒</div>' +
          '<h2>Module test not open yet</h2>' +
          '<p>You have <b>' + left + '</b> lesson' + (left === 1 ? '' : 's') + ' left. Each one ends in a short ' +
          'check, and the test opens when they are all passed.</p>' +
          '<p><a class="btn primary" href="#/m/' + m.id + '" style="display:inline-block;text-decoration:none">Back to the lessons</a></p></div>';
      } else renderQuiz(m, panel);
    }
    else renderNotes(m, panel);
  }

  /* ---------- slide deck ---------- */
  var deckState = { i: 0, notes: true, key: null };

  function renderDeck(m, panel) {
    if (deckState.key !== m.id) { deckState.key = m.id; deckState.i = 0; }

    panel.innerHTML =
      '<div class="deck-bar">' +
        '<span class="counter" id="deckCount"></span>' +
        '<div class="deck-controls">' +
          '<button class="btn" id="tNotes" aria-pressed="' + deckState.notes + '">Instructor notes</button>' +
          '<button class="btn primary" id="tPresent">▶ Present</button>' +
          '<button class="btn" id="tPrint">Print handout</button>' +
        '</div>' +
      '</div>' +
      '<div id="slideHost"></div>' +
      '<div class="deck-nav">' +
        '<button class="btn" id="bPrev">← Previous</button>' +
        '<button class="btn primary" id="bNext">Next →</button>' +
      '</div>';

    function draw() {
      var s = m.slides[deckState.i];
      document.getElementById('deckCount').textContent =
        'Slide ' + (deckState.i + 1) + ' / ' + m.slides.length + '  ·  Module ' + m.id;
      document.getElementById('slideHost').innerHTML =
        '<div class="slide">' +
          '<div class="kicker">' + esc(s.kicker || m.title) + '</div>' +
          '<h2>' + esc(s.title) + '</h2>' +
          (s.bullets ? '<ul>' + s.bullets.map(function (b) { return '<li>' + md(b) + '</li>'; }).join('') + '</ul>' : '') +
          (s.body ? '<div>' + md(s.body) + '</div>' : '') +
          (s.illus && window.ILLUS && window.ILLUS[s.illus]
            ? '<div class="slide-visual">' + window.ILLUS[s.illus] +
              (s.illusCap ? '<p class="illus-cap">' + esc(s.illusCap) + '</p>' : '') + '</div>'
            : '') +
          (s.visual ? '<div class="slide-visual">' + s.visual + '</div>' : '') +
        '</div>' +
        (deckState.notes && s.note ? '<div class="notes"><b>Instructor note.</b> ' + md(s.note) + '</div>' : '');
      document.getElementById('bPrev').disabled = deckState.i === 0;
      document.getElementById('bNext').disabled = deckState.i === m.slides.length - 1;
    }
    function go(d) {
      var n = deckState.i + d;
      if (n >= 0 && n < m.slides.length) { deckState.i = n; draw(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    }

    document.getElementById('bPrev').addEventListener('click', function () { go(-1); });
    document.getElementById('bNext').addEventListener('click', function () { go(1); });
    document.getElementById('tNotes').addEventListener('click', function () {
      deckState.notes = !deckState.notes;
      this.setAttribute('aria-pressed', deckState.notes);
      draw();
    });
    document.getElementById('tPresent').addEventListener('click', function () {
      // Full presenter mode: fullscreen stage, speaker notes, slide grid, timer.
      Present.open(m, deckState.i);
    });
    document.getElementById('tPrint').addEventListener('click', function () { printDeck(m); });

    document.onkeydown = function (e) {
      if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
      else if (e.key === 'n' || e.key === 'N') { document.getElementById('tNotes').click(); }
      else if (e.key === 'Escape' && document.body.classList.contains('presenting')) { document.getElementById('tPresent').click(); }
    };

    draw();
  }

  function printDeck(m) {
    var w = window.open('', '_blank');
    var body = m.slides.map(function (s, i) {
      return '<section><div class="k">Slide ' + (i + 1) + ' · ' + esc(s.kicker || m.title) + '</div>' +
        '<h2>' + esc(s.title) + '</h2>' +
        (s.bullets ? '<ul>' + s.bullets.map(function (b) { return '<li>' + md(b) + '</li>'; }).join('') + '</ul>' : '') +
        (s.body ? '<p>' + md(s.body) + '</p>' : '') +
        (s.note ? '<div class="n"><b>Notes:</b> ' + md(s.note) + '</div>' : '') +
        '<div class="write"><b>Student notes</b></div></section>';
    }).join('');
    w.document.write(
      '<!doctype html><meta charset="utf-8"><title>Module ' + m.id + ' handout — ' + esc(m.title) + '</title>' +
      '<style>body{font:14px/1.55 system-ui,sans-serif;max-width:52em;margin:2em auto;padding:0 1em;color:#111}' +
      'section{page-break-inside:avoid;border-bottom:1px solid #ccc;padding-bottom:1.2em;margin-bottom:1.6em}' +
      '.k{font:700 10px/1 ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#1e5eff;margin-bottom:.5em}' +
      'h1{font-size:1.5em}h2{font-size:1.15em;margin:.2em 0 .5em}ul{margin:.3em 0 .8em;padding-left:1.2em}' +
      '.n{background:#fff6e5;border-left:3px solid #b26a00;padding:.5em .8em;font-size:.9em;margin:.6em 0}' +
      '.write{border:1px dashed #bbb;border-radius:6px;height:5em;padding:.4em .6em;font-size:.75em;color:#888}' +
      '</style><h1>Module ' + m.id + ' — ' + esc(m.title) + '</h1><p>' + esc(m.tagline) + '</p>' + body);
    w.document.close();
  }

  /* ---------- practical lab ---------- */
  function renderLesson(m, panel) {
    var p = m.practical;
    if (!p) { panel.innerHTML = '<div class="panel"><p>No lab for this module.</p></div>'; return; }

    panel.innerHTML =
      '<div class="panel">' +
        '<h2>' + esc(p.title) + '</h2>' +
        '<p class="muted">' + esc(p.time || m.duration) + ' · Student works on a live chart while you supervise.</p>' +
        (p.intro ? '<p>' + md(p.intro) + '</p>' : '') +

        '<h3>What the student needs open</h3>' +
        '<ul class="tight">' + p.setup.map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ul>' +

        '<h3>Procedure</h3>' +
        '<ol class="steps">' + p.steps.map(function (s) {
          return '<li><h4>' + esc(s.h) + '</h4><p>' + md(s.d) + '</p></li>';
        }).join('') + '</ol>' +

        (p.figure || '') +

        '<div class="callout good"><p><b>Deliverable.</b> ' + md(p.deliverable) + '</p></div>' +

        '<h3>Marking rubric</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>Criterion</th><th>Competent looks like</th></tr></thead><tbody>' +
          p.rubric.map(function (r) { return '<tr><td><b>' + esc(r.c) + '</b></td><td>' + md(r.d) + '</td></tr>'; }).join('') +
        '</tbody></table></div>' +

        (p.pitfalls ? '<h3>Where students go wrong</h3><ul class="tight">' +
          p.pitfalls.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '') +

        (m.homework ? '<h3>Homework before the next session</h3><ul class="tight">' +
          m.homework.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '') +
      '</div>';
  }

  /* ---------- quiz ---------- */
  function renderQuiz(m, panel) {
    var qs = m.quiz || [];
    panel.innerHTML =
      '<div class="panel">' +
        '<h2>Module ' + m.id + ' check</h2>' +
        '<p class="muted">' + qs.length + ' questions. 80% or better to move on.</p>' +
        '<form id="quizForm">' +
          qs.map(function (q, qi) {
            return '<div class="q" data-qi="' + qi + '"><p>' + (qi + 1) + '. ' + md(q.q) + '</p>' +
              q.options.map(function (o, oi) {
                return '<label data-oi="' + oi + '"><input type="radio" name="q' + qi + '" value="' + oi + '">' + md(o) + '</label>';
              }).join('') +
              '<div class="explain" hidden>' + md(q.why) + '</div></div>';
          }).join('') +
          '<button type="submit" class="btn primary">Check answers</button>' +
          '<button type="button" class="btn" id="qReset">Reset</button>' +
          '<div class="score" id="score"></div>' +
        '</form>' +
      '</div>';

    var form = document.getElementById('quizForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var right = 0;
      qs.forEach(function (q, qi) {
        var box = form.querySelector('.q[data-qi="' + qi + '"]');
        var picked = form.querySelector('input[name="q' + qi + '"]:checked');
        Array.prototype.forEach.call(box.querySelectorAll('label'), function (l) {
          l.classList.remove('correct', 'wrong');
          if (+l.dataset.oi === q.a) l.classList.add('correct');
        });
        if (picked) {
          if (+picked.value === q.a) right++;
          else box.querySelector('label[data-oi="' + picked.value + '"]').classList.add('wrong');
        }
        box.querySelector('.explain').hidden = false;
      });
      var pct = Math.round(right / qs.length * 100);
      Auth.progress({ module: m.id, quiz: pct });
      document.getElementById('score').innerHTML =
        right + ' / ' + qs.length + ' correct (' + pct + '%) — ' +
        (pct >= 80 ? '<span style="color:var(--bull)">ready for the next module.</span>'
                   : '<span style="color:var(--bear)">re-teach the slides behind the missed questions before moving on.</span>');
    });
    document.getElementById('qReset').addEventListener('click', function () { renderQuiz(m, panel); });
  }

  /* ---------- objectives & terms ---------- */
  function renderNotes(m, panel) {
    panel.innerHTML =
      '<div class="panel">' +
        '<h2>Learning objectives</h2>' +
        '<p class="muted">By the end of this module the student can:</p>' +
        '<ul class="tight">' + m.objectives.map(function (o) { return '<li>' + md(o) + '</li>'; }).join('') + '</ul>' +
        (m.misconceptions ? '<h3>Misconceptions to attack head-on</h3><ul class="tight">' +
          m.misconceptions.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '') +
        '<h3>Key terms introduced here</h3>' +
        '<div class="table-wrap"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>' +
          (m.glossary || []).map(function (g) { return '<tr><td><b>' + esc(g.t) + '</b></td><td>' + md(g.d) + '</td></tr>'; }).join('') +
        '</tbody></table></div>' +
      '</div>';
  }

  /* ---------- trading floor ---------- */
  var activeTerminal = null;

  function killTerminal() {
    if (activeTerminal) { activeTerminal.destroy(); activeTerminal = null; }
  }

  function viewDrills() {
    var drills = window.DRILLS || [];
    var prog = Auth.progress() || { drills: {} };
    var done = Object.keys(prog.drills || {}).filter(function (k) { return prog.drills[k].passed; }).length;

    var cards = drills.map(function (d) {
      var passed = prog.drills && prog.drills[d.id] && prog.drills[d.id].passed;
      return '<a class="card drill-card' + (passed ? ' done' : '') + '" href="#/drill/' + d.id + '">' +
        '<span class="num">Drill ' + (passed ? '· <span class="tick">passed ✓</span>' : '· Module ' + d.module) + '</span>' +
        '<h3>' + esc(d.title) + '</h3>' +
        '<p>' + esc(d.brief) + '</p>' +
        '<div class="chips">' +
          '<span class="chip">' + esc(FX.INSTRUMENTS[d.instrument].name) + '</span>' +
          '<span class="chip">Risk guard: ' +
            (d.policy.mode === 'guard' ? 'enforced' : d.policy.mode === 'advise' ? 'advisory' : 'off') +
          '</span>' +
        '</div></a>';
    }).join('');

    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Trading Floor</div>' +
      '<div class="module-head"><h1>Trading Floor</h1>' +
      '<p class="lede">Seven assessed drills on a simulated market. The risk guard sits between you and the order button — ' +
      'early on it blocks anything oversized and explains why, then it steps back as you progress, until the final drill ' +
      'has no rails at all.</p>' +
      '<div class="chips"><span class="chip">' + done + ' of ' + drills.length + ' passed</span></div></div>' +

      '<div class="callout warn"><p><b>Everything here is simulated.</b> The price feed is generated, not live, and no broker ' +
      'or real money is involved at any point. The market is deterministic from a seed, so a drill replays identically for ' +
      'you and your instructor — which is what makes it teachable.</p></div>' +

      '<div class="grid">' + cards + '</div>' +

      '<div class="section-head"><h2>Free practice</h2></div>' +
      '<div class="panel"><p>No objective, no assessment, all four instruments and the risk guard set to 1% enforced. ' +
      'Use it to explore before a drill or to demonstrate something mid-lesson.</p>' +
      '<p><a class="btn primary" href="#/drill/free" style="display:inline-block;text-decoration:none">Open free practice →</a></p></div>';
  }

  function viewDrill(id) {
    var drills = window.DRILLS || [];
    var d = drills.filter(function (x) { return x.id === id; })[0] || null;

    if (id === 'free') {
      d = {
        id: 'free', module: 0, title: 'Free practice', brief: 'Unassessed practice.',
        instrument: 'EURUSD', allowInstruments: ['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD'],
        account: { balance: 5000, leverage: 100 },
        policy: { mode: 'guard', requireStop: true, maxRiskPct: 1, maxOpenRiskPct: 3, dailyStopPct: 3 },
        objectives: [], hint: '', test: null
      };
    }
    if (!d) { app.innerHTML = '<div class="panel"><h2>Drill not found</h2><p><a href="#/drills">Back to the trading floor</a></p></div>'; return; }
    if (id !== 'free' && !Auth.isInstructor() && !Path.drillUnlocked(id, Auth.progress())) {
      return lockedNotice('Drills', d.title);
    }

    var mod = MODULES.find(function (m) { return m.id === d.module; });

    app.innerHTML =
      '<div class="crumb"><a href="#/drills">Trading Floor</a> / ' + esc(d.title) + '</div>' +
      '<div class="module-head"><h1>' + esc(d.title) + '</h1>' +
      '<p class="lede">' + esc(d.brief) + '</p>' +
      (mod ? '<div class="chips"><span class="chip">Pairs with Module ' + mod.id + ' — ' + esc(mod.title) + '</span></div>' : '') +
      '</div>' +
      (d.objectives && d.objectives.length
        ? '<div class="panel" style="margin-bottom:1rem"><h3 style="margin-top:0">Objective</h3><ul class="tight">' +
          d.objectives.map(function (o) { return '<li>' + md(o) + '</li>'; }).join('') + '</ul>' +
          (d.hint ? '<div class="callout"><p><b>Hint.</b> ' + esc(d.hint) + '</p></div>' : '') + '</div>'
        : '') +
      '<div id="termHost"></div>' +
      (mod ? '<div class="pager"><a href="#/m/' + mod.id + '">← Revise Module ' + mod.id + '</a>' +
             '<a href="#/drills">All drills →</a></div>' : '');

    killTerminal();
    activeTerminal = new FXTerminal(document.getElementById('termHost'), {
      drill: d.test ? d : Object.assign({}, d, { test: null }),
      onProgress: function (p) { if (p.drill && p.drill !== 'free') Auth.progress({ drill: p.drill, passed: p.passed }); }
    });
  }

  /* ---------- chrome ---------- */
  function renderChrome() {
    var s = Auth.session();
    if (!s) return;
    document.getElementById('topbar').hidden = false;
    document.getElementById('sitefooter').hidden = false;

    // Swap the placeholder badge for the real mark, and give instructors
    // navigation that matches their job rather than the student's.
    var badge = document.querySelector('.brand .brand-mark');
    if (badge && window.BRAND) badge.outerHTML = BRAND.mark(32);
    var tb = document.getElementById('themeBtn');
    if (tb && !tb._wired) {
      tb._wired = true;
      var saved = null;
      try { saved = localStorage.getItem('n1fx:theme'); } catch (e) {}
      if (saved) document.documentElement.setAttribute('data-theme', saved);
      tb.onclick = function () {
        var now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', now);
        try { localStorage.setItem('n1fx:theme', now); } catch (e) {}
      };
    }

    var nav = document.querySelector('.topnav');
    if (nav) {
      nav.innerHTML = Auth.isInstructor()
        ? '<a href="#/">Dashboard</a><a href="#/instructor">Admin</a><a href="#/library">Library</a>' +
          '<a href="#/drills">Trading Floor</a><a href="#/calculators">Calculators</a>' +
          '<a href="#/toolkit">Toolkit</a><a href="#/glossary">Glossary</a>'
        : '<a href="#/">My path</a><a href="#/drills">Trading Floor</a>' +
          '<a href="#/calculators">Calculators</a><a href="#/glossary">Glossary</a>';
    }
    var chip = document.getElementById('userchip');
    chip.innerHTML =
      '<span class="role' + (s.role === 'instructor' ? ' instructor' : '') + '">' + esc(s.role) + '</span>' +
      '<b>' + esc(s.name) + '</b>' +
      (s.role === 'instructor' ? '<a href="#/instructor">Instructor</a>' : '') +
      '<button id="signout">Sign out</button>';
    chip.querySelector('#signout').onclick = function () { Auth.signOut(); };
  }

  /* ---------- router ---------- */
  function route() {
    document.onkeydown = null;
    document.body.classList.remove('presenting');
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);

    if (parts[0] !== 'drill') killTerminal();

    if (parts[0] === 'm' && parts[1] && parts[2] === 'lesson' && parts[3] !== undefined) {
      var lm = MODULES.find(function (x) { return x.id === +parts[1]; });
      if (!lm) { app.innerHTML = '<div class="panel"><h2>Module not found</h2></div>'; return; }
      if (!Auth.isInstructor() && !Path.moduleUnlocked(+parts[1], Auth.progress())) {
        return lockedNotice('Modules', 'Module ' + parts[1] + ' — ' + lm.title);
      }
      app.innerHTML = '<div class="crumb"><a href="#/">Path</a> / <a href="#/m/' + lm.id + '">' +
        esc(lm.title) + '</a> / Lesson</div><div id="lessonHost"></div>';
      Lessons.renderLesson(lm, +parts[3], document.getElementById('lessonHost'));
      window.scrollTo(0, 0);
      return;
    }
    if (parts[0] === 'm' && parts[1]) viewModule(+parts[1], parts[2]);
    else if (parts[0] === 'drills') viewDrills();
    else if (parts[0] === 'drill' && parts[1]) viewDrill(parts[1]);
    else if (parts[0] === 'certificate') Journey.certificate(app, Auth.progress());
    else if (parts[0] === 'demo') Journey.demo(app, Auth.progress());
    else if (parts[0] === 'library') viewHome();
    else if (parts[0] === 'plan') viewPlan();
    else if (parts[0] === 'calculators') Tools.render(app);
    else if (parts[0] === 'toolkit') viewToolkit();
    else if (parts[0] === 'glossary') viewGlossary();
    else if (parts[0] === 'instructor') {
      if (Auth.isInstructor()) Auth.renderInstructor(app);
      else app.innerHTML = '<div class="panel"><h2>Instructor only</h2>' +
        '<p>Sign out and sign back in with the instructor code to reach this page.</p></div>';
    }
    else if (Auth.isInstructor()) Dashboard.render(app);
    else Journey.render(app, Auth.progress());

    if (!parts.length || parts[0] !== 'm') window.scrollTo(0, 0);
  }

  /* ---------- boot ---------- */
  // An invite link must work for someone with no account, so it is handled
  // before the sign-in gate rather than behind it.
  function joinToken() {
    var m = (location.hash || '').match(/^#\/join\/(.+)$/);
    return m ? m[1] : null;
  }

  function boot() {
    var token = joinToken();
    if (token) {
      document.getElementById('topbar').hidden = true;
      document.getElementById('sitefooter').hidden = true;
      Auth.renderJoin(app, token);
      return;
    }
    Auth.gate(app, function () {
      renderChrome();
      route();
    });
  }

  window.addEventListener('hashchange', function () {
    if (joinToken()) { boot(); return; }
    if (!Auth.session()) { boot(); return; }
    route();
  });

  boot();
})();
