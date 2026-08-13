/* N1 Forex Academy — cohort gate and per-student progress.

   IMPORTANT: this is not security. It runs entirely in the browser, so the
   codes and the content are both readable by anyone who looks. It exists to
   keep student progress separate and to keep the site tidy for a private
   cohort. See ARCHITECTURE.md → "Real authentication" for the server-backed
   option if you ever need actual access control. */
(function () {
  'use strict';

  var SESSION_KEY = 'n1fx:session';
  var PROGRESS_PREFIX = 'n1fx:progress:';

  function store(k, v) {
    try {
      if (v === undefined) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      localStorage.setItem(k, JSON.stringify(v));
      return v;
    } catch (e) { return null; }
  }
  function drop(k) { try { localStorage.removeItem(k); } catch (e) {} }

  async function sha256(text) {
    if (!(window.crypto && crypto.subtle)) return null;
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  // A seat matches if its plaintext `code` matches, or its `hash` matches SHA-256(entered).
  async function matches(entry, entered) {
    if (!entry) return false;
    var v = String(entered || '').trim();
    if (!v) return false;
    if (entry.code && v === entry.code) return true;
    if (entry.hash) {
      var h = await sha256(v);
      if (h && h.toLowerCase() === String(entry.hash).toLowerCase()) return true;
    }
    return false;
  }

  var Auth = {
    session: function () { return store(SESSION_KEY); },

    signOut: function () { drop(SESSION_KEY); location.hash = '#/'; location.reload(); },

    isInstructor: function () {
      var s = this.session();
      return !!(s && s.role === 'instructor');
    },

    progress: function (patch) {
      var s = this.session();
      if (!s) return null;
      var key = PROGRESS_PREFIX + s.id;
      var p = store(key) || { student: s.id, name: s.name, modules: {}, drills: {}, startedAt: Date.now() };
      if (patch) {
        if (patch.module) {
          var m = p.modules[patch.module] || {};
          if (patch.visited) m.visited = true;
          if (typeof patch.quiz === 'number') m.quiz = Math.max(m.quiz || 0, patch.quiz);
          p.modules[patch.module] = m;
        }
        if (patch.drill) {
          p.drills[patch.drill] = { passed: !!patch.passed, at: Date.now() };
        }
        p.updatedAt = Date.now();
        store(key, p);
      }
      return p;
    },

    allProgress: function () {
      var out = [];
      try {
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k && k.indexOf(PROGRESS_PREFIX) === 0) out.push(store(k));
        }
      } catch (e) {}
      return out.filter(Boolean);
    },

    sha256: sha256,

    /* Renders the sign-in screen. Calls onReady() once a session exists. */
    gate: function (mount, onReady) {
      var s = this.session();
      if (s) { onReady(s); return; }

      var roster = window.ROSTER || { cohort: 'Academy', seats: [], instructor: {} };
      mount.innerHTML =
        '<div class="gate">' +
          '<div class="gate-card">' +
            '<div class="gate-brand"><span class="brand-mark">N1</span><b>N1 Forex Academy</b></div>' +
            '<h1>Sign in</h1>' +
            '<p class="gate-sub">' + roster.cohort + '</p>' +
            '<form id="gForm">' +
              '<label>Your name<input id="gName" autocomplete="name" placeholder="e.g. Sam Okoye" required></label>' +
              '<label>Access code<input id="gCode" type="password" autocomplete="off" placeholder="Issued by your instructor" required></label>' +
              '<button class="btn primary wide" type="submit">Enter the academy</button>' +
              '<p class="gate-err" id="gErr" hidden></p>' +
            '</form>' +
            '<p class="gate-note"><b>Note on privacy.</b> This gate keeps each student\'s progress separate — it is not security, ' +
            'and it does not protect the course content, which is public. Your progress is saved only in this browser on this device. ' +
            'Clearing site data erases it, and using another device starts you fresh.</p>' +
          '</div>' +
          '<p class="gate-risk">Trading FX and CFDs on margin carries a high risk of losing all deposited funds. ' +
          'Everything in this academy is educational and simulated. No real money is ever involved.</p>' +
        '</div>';

      var form = mount.querySelector('#gForm');
      var errEl = mount.querySelector('#gErr');

      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var name = mount.querySelector('#gName').value.trim();
        var code = mount.querySelector('#gCode').value;
        errEl.hidden = true;

        if (await matches(roster.instructor, code)) {
          store(SESSION_KEY, { id: 'instructor', name: name || 'Instructor', role: 'instructor', at: Date.now() });
          location.reload();
          return;
        }
        for (var i = 0; i < roster.seats.length; i++) {
          if (await matches(roster.seats[i], code)) {
            var seat = roster.seats[i];
            store(SESSION_KEY, {
              id: seat.id, name: name || seat.name, seat: seat.name, role: 'student', at: Date.now()
            });
            location.reload();
            return;
          }
        }
        errEl.textContent = 'That code was not recognised. Check it with your instructor — codes are case sensitive.';
        errEl.hidden = false;
      });
    },

    /* Instructor-only: roster overview and the code hashing tool. */
    renderInstructor: function (mount) {
      var roster = window.ROSTER || { seats: [] };
      var all = this.allProgress();
      var totalModules = (window.COURSE || []).length;
      var drills = window.DRILLS || [];

      var rows = roster.seats.map(function (seat) {
        var p = all.filter(function (x) { return x.student === seat.id; })[0];
        if (!p) return '<tr><td><b>' + seat.name + '</b><br><small>' + seat.id + '</small></td>' +
                       '<td colspan="4"><em>No activity on this device</em></td></tr>';
        var mods = Object.keys(p.modules).length;
        var quizzes = Object.keys(p.modules).filter(function (k) { return typeof p.modules[k].quiz === 'number'; });
        var avg = quizzes.length
          ? Math.round(quizzes.reduce(function (a, k) { return a + p.modules[k].quiz; }, 0) / quizzes.length)
          : null;
        var passed = Object.keys(p.drills).filter(function (k) { return p.drills[k].passed; }).length;
        return '<tr><td><b>' + (p.name || seat.name) + '</b><br><small>' + seat.id + '</small></td>' +
               '<td>' + mods + ' / ' + totalModules + '</td>' +
               '<td>' + (avg === null ? '—' : avg + '%') + '</td>' +
               '<td>' + passed + ' / ' + drills.length + '</td>' +
               '<td>' + (p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : '—') + '</td></tr>';
      }).join('');

      mount.innerHTML =
        '<div class="crumb"><a href="#/">Modules</a> / Instructor</div>' +
        '<div class="module-head"><h1>Instructor</h1>' +
        '<p class="lede">Roster, progress and the code tool. Visible only while signed in with the instructor code.</p></div>' +

        '<div class="panel">' +
          '<h2>Cohort progress</h2>' +
          '<div class="callout warn"><p><b>Progress is per-device.</b> These figures come from this browser\'s local storage only. ' +
          'A student working at home will not appear here. For centrally tracked progress you need a server — ' +
          'see <code>ARCHITECTURE.md</code>.</p></div>' +
          '<div class="table-wrap"><table><thead><tr><th>Student</th><th>Modules opened</th><th>Avg quiz</th>' +
          '<th>Drills passed</th><th>Last active</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +

          '<h3>Access code tool</h3>' +
          '<p>Type a code to get its SHA-256 hash. Put the hash in <code>content/roster.js</code> as <code>hash:</code> ' +
          'instead of <code>code:</code> so the plaintext is not sitting in the page source. ' +
          'This raises the bar against casual snooping — it is still not security.</p>' +
          '<div class="hashrow"><input id="hIn" placeholder="Type a code…"><button class="btn" id="hGo">Hash it</button></div>' +
          '<pre class="hashout" id="hOut">—</pre>' +

          '<h3>Danger zone</h3>' +
          '<p>Clears all stored progress for every student in this browser. Cannot be undone.</p>' +
          '<button class="btn" id="wipe">Wipe local progress</button>' +
        '</div>';

      var self = this;
      mount.querySelector('#hGo').onclick = async function () {
        var v = mount.querySelector('#hIn').value;
        if (!v) return;
        var h = await self.sha256(v);
        mount.querySelector('#hOut').textContent = h || 'SHA-256 unavailable (needs HTTPS or localhost).';
      };
      mount.querySelector('#wipe').onclick = function () {
        if (!confirm('Wipe all stored progress in this browser? This cannot be undone.')) return;
        try {
          var keys = [];
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(PROGRESS_PREFIX) === 0) keys.push(k);
          }
          keys.forEach(drop);
        } catch (e) {}
        location.reload();
      };
    }
  };

  window.Auth = Auth;
})();
