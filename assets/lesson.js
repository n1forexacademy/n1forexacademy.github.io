/* N1 Forex Academy — lesson flow.

   A module is delivered as: read a short lesson, take a two-question check on
   that lesson, then the next lesson opens. The module test unlocks only after
   every lesson is passed.

   Lesson progress lives in progress.modules[id].lessons = {0:true, 1:true, ...}
   so it syncs to the server with everything else.

   Modules with no entry in window.LESSONS fall back to the original
   read-everything-then-one-test view, so nothing breaks while lessons are
   being authored for the remaining modules. */
(function () {
  'use strict';

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                 .replace(/`(.+?)`/g, '<code>$1</code>')
                 .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  /* Matches the icon set used on the path — emoji rendered inconsistently and
     looked out of place beside the serif headings. */
  var I = {
    tick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5.5 5.5L20 7"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M8.2 13.4 7 22l5-2.5L17 22l-1.2-8.6"/></svg>'
  };

  function lessonsFor(moduleId) {
    return (window.LESSONS && window.LESSONS[moduleId]) || null;
  }

  function doneMap(moduleId) {
    var p = Auth.progress() || {};
    var m = (p.modules || {})[String(moduleId)] || {};
    return m.lessons || {};
  }

  function lessonsComplete(moduleId) {
    var ls = lessonsFor(moduleId);
    if (!ls) return true;                       // no lesson data = nothing to gate
    var done = doneMap(moduleId);
    for (var i = 0; i < ls.length; i++) if (!done[i]) return false;
    return true;
  }

  /* Index of the first unfinished lesson. */
  function currentIndex(moduleId) {
    var ls = lessonsFor(moduleId) || [];
    var done = doneMap(moduleId);
    for (var i = 0; i < ls.length; i++) if (!done[i]) return i;
    return ls.length;
  }

  /* ---------- the lesson list for a module ---------- */
  function renderList(mod, mount) {
    var ls = lessonsFor(mod.id);
    var done = doneMap(mod.id);
    var cur = currentIndex(mod.id);

    var rows = ls.map(function (L, i) {
      var status = done[i] ? 'done' : (i === cur ? 'current' : 'locked');
      var written = !!L.teach;
      var inner =
        '<span class="lsn-i">' + (status === 'done' ? I.tick : status === 'locked' ? I.lock : (i + 1)) + '</span>' +
        '<span class="lsn-b">' +
          '<span class="lsn-k">Lesson ' + (i + 1) + ' · ' + (written ? 'read' : 'read') +
            ' + ' + (L.check || []).length + '-question check</span>' +
          '<span class="lsn-t">' + esc(L.title) + '</span>' +
        '</span>';
      return status === 'locked'
        ? '<div class="lsn locked">' + inner + '</div>'
        : '<a class="lsn ' + status + '" href="#/m/' + mod.id + '/lesson/' + i + '">' + inner + '</a>';
    }).join('');

    var allDone = lessonsComplete(mod.id);
    mount.innerHTML =
      '<div class="panel">' +
        '<h2>Lessons</h2>' +
        '<p class="muted">Work through these in order. Each one is a short read followed by two questions, ' +
        'so you find out straight away whether it landed. Take them at your own pace — there is no timer.</p>' +
        '<div class="lsn-list">' + rows + '</div>' +
        '<div class="lsn-final ' + (allDone ? 'open' : 'shut') + '">' +
          '<span class="lsn-i">' + (allDone ? I.cert : I.lock) + '</span>' +
          '<span class="lsn-b"><span class="lsn-k">Final</span>' +
          '<span class="lsn-t">Module test — ' + (mod.quiz || []).length + ' questions</span>' +
          '<span class="lsn-r">' + (allDone
            ? 'Unlocked. Pass this to complete the module.'
            : 'Opens once every lesson above is passed.') + '</span></span>' +
          (allDone ? '<a class="btn primary" href="#/m/' + mod.id + '/quiz">Take the test</a>' : '') +
        '</div>' +
      '</div>';
  }

  /* ---------- a single lesson: read, then check ---------- */
  function renderLesson(mod, index, mount) {
    var ls = lessonsFor(mod.id);
    if (!ls || !ls[index]) { location.hash = '#/m/' + mod.id; return; }

    // Cannot open a lesson beyond the current one.
    if (index > currentIndex(mod.id)) {
      mount.innerHTML = '<div class="panel locked-panel"><div class="lock-big">' + I.lock + '</div>' +
        '<h2>Finish the lesson before this one</h2>' +
        '<p>Lessons open in order. <a href="#/m/' + mod.id + '">Back to the lesson list</a></p></div>';
      return;
    }

    var L = ls[index];
    var slides = (L.slides || []).map(function (si) { return mod.slides[si]; }).filter(Boolean);

    /* The teaching layer.

       Slides are presenter aids — deliberately terse so an instructor can talk
       over them. A student reading alone got bullet points and then a test,
       with no actual teaching in between. `teach` is the lesson in the
       instructor's own voice: plain words, everyday comparisons, jargon broken
       down as it appears. The slides follow as the summary. */
    function teachHtml() {
      var t = L.teach;
      if (!t) return '';
      var paras = function (arr) {
        return (arr || []).map(function (p) { return '<p>' + md(p) + '</p>'; }).join('');
      };
      var terms = (t.terms || []).length
        ? '<div class="tlex">' +
            '<p class="tlex-h">Words you will keep meeting</p>' +
            (t.terms || []).map(function (x) {
              return '<div class="tlex-i">' +
                '<b>' + esc(x.term) + '</b>' +
                '<span class="tlex-p">' + md(x.plain) + '</span>' +
                (x.like ? '<span class="tlex-l"><i>Think of it like:</i> ' + md(x.like) + '</span>' : '') +
              '</div>';
            }).join('') +
          '</div>'
        : '';
      /* Optional code listings, added for the automation track. A lesson that
         teaches someone to write an EA has to show them the code — inline
         `backticks` are fine for a variable name and useless for a function.

         Shape:  code: [{ caption, note, lines: ['...','...'] }]
         Placed between the terms and the closing paragraphs, because by then the
         vocabulary has been introduced and the listing is readable. */
      var code = (t.code || []).map(function (b) {
        return '<figure class="lcode">' +
          (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') +
          '<pre><code>' + (b.lines || []).map(esc).join('\n') + '</code></pre>' +
          (b.note ? '<p class="lcode-n">' + md(b.note) + '</p>' : '') +
        '</figure>';
      }).join('');

      return '<div class="teach">' + paras(t.lead) + terms + code + paras(t.close) + '</div>';
    }

    /* Students never see slides.

       Slides are presenter aids for the instructor's own screen during a
       face-to-face session. A student working alone gets the written lesson and
       then the check — nothing else. Where written teaching has not been
       authored yet the slides stand in as a stopgap so the course still works,
       but that is temporary and should disappear as `teach` is written for
       every lesson. */
    var hasTeach = !!L.teach;
    var showSlides = !hasTeach && slides.length > 0;
    var state = { page: 0, phase: hasTeach ? 'teach' : 'read' };

    function draw() {
      if (state.phase === 'teach') {
        mount.innerHTML =
          '<div class="lsn-head">' +
            '<div><span class="lsn-k">Lesson ' + (index + 1) + ' of ' + ls.length + '</span>' +
            '<h2>' + esc(L.title) + '</h2></div>' +
          '</div>' +
          teachHtml() +
          '<div class="lsn-nav">' +
            '<a class="btn" href="#/m/' + mod.id + '">All lessons</a>' +
            '<button class="btn primary" id="lToPoints">Got it — check what I have learned →</button>' +
          '</div>';
        mount.querySelector('#lToPoints').onclick = function () {
          state.phase = 'check'; state.page = 0; draw(); window.scrollTo(0, 0);
        };
        return;
      }

      if (state.phase === 'read') {
        var s = slides[state.page];
        mount.innerHTML =
          '<div class="lsn-head">' +
            '<div><span class="lsn-k">Lesson ' + (index + 1) + ' of ' + ls.length + '</span>' +
            '<h2>' + esc(L.title) + '</h2></div>' +
            '<span class="lsn-page">Page ' + (state.page + 1) + ' / ' + slides.length + '</span>' +
          '</div>' +
          '<div class="lsn-dots">' + slides.map(function (_, i) {
            return '<i class="' + (i <= state.page ? 'on' : '') + '"></i>';
          }).join('') + '</div>' +
          '<div class="slide lsn-slide">' +
            '<div class="kicker">' + esc(s.kicker || mod.title) + '</div>' +
            '<h2>' + esc(s.title) + '</h2>' +
            (s.bullets ? '<ul>' + s.bullets.map(function (b) { return '<li>' + md(b) + '</li>'; }).join('') + '</ul>' : '') +
            (s.body ? '<div>' + md(s.body) + '</div>' : '') +
            (s.illus && window.ILLUS && window.ILLUS[s.illus]
              ? '<div class="slide-visual">' + window.ILLUS[s.illus] +
                (s.illusCap ? '<p class="illus-cap">' + esc(s.illusCap) + '</p>' : '') + '</div>' : '') +
            (s.visual ? '<div class="slide-visual">' + s.visual + '</div>' : '') +
          '</div>' +
          (Auth.isInstructor() && s.note
            ? '<div class="notes"><b>Instructor note.</b> ' + md(s.note) + '</div>' : '') +
          '<div class="lsn-nav">' +
            '<button class="btn" id="lPrev"' + ((state.page === 0 && !hasTeach) ? ' disabled' : '') + '>← Back</button>' +
            '<button class="btn primary" id="lNext">' +
              (state.page === slides.length - 1 ? 'Take the check →' : 'Next page →') + '</button>' +
          '</div>';

        mount.querySelector('#lPrev').onclick = function () {
          if (state.page > 0) { state.page--; }
          else if (hasTeach) { state.phase = 'teach'; }
          else return;
          draw(); window.scrollTo(0, 0);
        };
        mount.querySelector('#lNext').onclick = function () {
          if (state.page < slides.length - 1) { state.page++; draw(); }
          else { state.phase = 'check'; draw(); }
          window.scrollTo(0, 0);
        };
        return;
      }

      // Check phase
      var qs = L.check || [];
      mount.innerHTML =
        '<div class="lsn-head">' +
          '<div><span class="lsn-k">Lesson ' + (index + 1) + ' check</span>' +
          '<h2>' + esc(L.title) + '</h2></div>' +
        '</div>' +
        '<div class="panel">' +
          '<p class="muted">Both answers must be right. These are short and specific — a wrong answer means go back a page, not bad luck.</p>' +
          '<form id="lForm">' +
            qs.map(function (q, qi) {
              return '<div class="q" data-qi="' + qi + '"><p>' + (qi + 1) + '. ' + md(q.q) + '</p>' +
                q.options.map(function (o, oi) {
                  return '<label data-oi="' + oi + '"><input type="radio" name="lq' + qi + '" value="' + oi + '">' + md(o) + '</label>';
                }).join('') +
                '<div class="explain" hidden>' + md(q.why) + '</div></div>';
            }).join('') +
            '<div class="lsn-nav">' +
              '<button type="button" class="btn" id="lBack">← Re-read the lesson</button>' +
              '<button type="submit" class="btn primary">Check my answers</button>' +
            '</div>' +
            '<div class="score" id="lScore"></div>' +
          '</form>' +
        '</div>';

      mount.querySelector('#lBack').onclick = function () {
        state.phase = hasTeach ? 'teach' : 'read'; state.page = 0; draw(); window.scrollTo(0, 0);
      };

      mount.querySelector('#lForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var form = e.target, right = 0;
        qs.forEach(function (q, qi) {
          var box = form.querySelector('.q[data-qi="' + qi + '"]');
          var picked = form.querySelector('input[name="lq' + qi + '"]:checked');
          box.querySelectorAll('label').forEach(function (l) {
            l.classList.remove('correct', 'wrong');
            if (+l.dataset.oi === q.a) l.classList.add('correct');
          });
          if (picked) {
            if (+picked.value === q.a) right++;
            else box.querySelector('label[data-oi="' + picked.value + '"]').classList.add('wrong');
          }
          box.querySelector('.explain').hidden = false;
        });

        var passed = right === qs.length;
        var scoreEl = document.getElementById('lScore');
        if (passed) {
          // Record the pass, then offer the next lesson.
          var p = Auth.progress() || {};
          var mods = p.modules || {};
          var mine = mods[String(mod.id)] || {};
          var lessons = mine.lessons || {};
          lessons[index] = true;
          Auth.progress({ module: mod.id, lessons: lessons });

          var isLast = index === ls.length - 1;
          scoreEl.innerHTML =
            '<div class="callout good"><p><b>Lesson passed.</b> ' +
            (isLast
              ? 'That was the last lesson — the module test is now unlocked.'
              : 'Lesson ' + (index + 2) + ' is now open.') + '</p></div>' +
            '<div class="lsn-nav">' +
              '<a class="btn" href="#/m/' + mod.id + '">Lesson list</a>' +
              (isLast
                ? '<a class="btn primary" href="#/m/' + mod.id + '/quiz">Take the module test →</a>'
                : '<a class="btn primary" href="#/m/' + mod.id + '/lesson/' + (index + 1) + '">Next lesson →</a>') +
            '</div>';
        } else {
          scoreEl.innerHTML =
            '<div class="callout danger"><p><b>' + right + ' of ' + qs.length + ' correct.</b> ' +
            'Read the explanations above, then go back through the lesson and try again. ' +
            'There is no penalty for retaking it.</p></div>';
        }
        scoreEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    draw();
  }

  window.Lessons = {
    forModule: lessonsFor,
    complete: lessonsComplete,
    currentIndex: currentIndex,
    renderList: renderList,
    renderLesson: renderLesson
  };
})();
