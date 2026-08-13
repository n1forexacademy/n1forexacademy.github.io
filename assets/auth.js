/* N1 Forex Academy — sign-in and progress.

   Two modes, chosen automatically from window.API_BASE (see content/roster.js):

   SERVER MODE (API_BASE set)
     Codes are verified by the Cloudflare Worker against PBKDF2 hashes in D1.
     The browser never sees the check, so it cannot be bypassed in DevTools.
     Progress is stored centrally, so a student's work follows them between
     devices and the instructor roster shows everyone.

   LOCAL MODE (no API_BASE)
     Falls back to codes in content/roster.js and progress in localStorage.
     Convenient for offline teaching, but it is NOT security — see ARCHITECTURE.md.

   The public surface is deliberately synchronous where app.js needs it:
   progress reads hit an in-memory cache and writes are posted in the background. */
(function () {
  'use strict';

  var SESSION_KEY = 'n1fx:session';
  var TOKEN_KEY = 'n1fx:token';
  var PROGRESS_PREFIX = 'n1fx:progress:';

  function store(k, v) {
    try {
      if (v === undefined) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      localStorage.setItem(k, JSON.stringify(v));
      return v;
    } catch (e) { return null; }
  }
  function drop(k) { try { localStorage.removeItem(k); } catch (e) {} }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var API = (window.API_BASE || '').replace(/\/+$/, '');
  var serverMode = !!API;
  var cache = null;          // in-memory progress, kept in sync with the server
  var flushTimer = null;
  var pendingPatches = [];

  async function api(path, opts) {
    opts = opts || {};
    var headers = { 'Content-Type': 'application/json' };
    var token = store(TOKEN_KEY);
    if (token) headers.Authorization = 'Bearer ' + token;
    var res = await fetch(API + path, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    var data = null;
    try { data = await res.json(); } catch (e) {}
    if (!res.ok) throw Object.assign(new Error((data && data.error) || ('HTTP ' + res.status)), { status: res.status, data: data });
    return data;
  }

  async function sha256(text) {
    if (!(window.crypto && crypto.subtle)) return null;
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  // Local-mode code check against content/roster.js.
  async function matchesLocal(entry, entered) {
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

  function localProgressKey(id) { return PROGRESS_PREFIX + id; }

  // Batch progress writes so a burst of drill ticks is one request.
  function scheduleFlush() {
    if (!serverMode || flushTimer) return;
    flushTimer = setTimeout(async function () {
      flushTimer = null;
      var batch = pendingPatches.splice(0, pendingPatches.length);
      for (var i = 0; i < batch.length; i++) {
        try {
          var r = await api('/api/progress', { method: 'POST', body: batch[i] });
          if (r && r.progress) cache = r.progress;
        } catch (e) {
          // Offline or the API is down. The local cache still has it, and the
          // next successful write re-syncs. Never block the lesson on this.
          if (e.status === 401) { Auth.signOut(); return; }
        }
      }
    }, 700);
  }

  var Auth = {
    mode: function () { return serverMode ? 'server' : 'local'; },

    session: function () { return store(SESSION_KEY); },

    isInstructor: function () {
      var s = this.session();
      return !!(s && s.role === 'instructor');
    },

    signOut: function () {
      if (serverMode) { try { api('/api/logout', { method: 'POST' }); } catch (e) {} }
      drop(SESSION_KEY); drop(TOKEN_KEY);
      location.hash = '#/';
      location.reload();
    },

    /* Synchronous read, background write — app.js calls this inline. */
    progress: function (patch) {
      var s = this.session();
      if (!s) return null;

      if (!cache) {
        cache = serverMode
          ? { student: s.id, name: s.name, modules: {}, drills: {} }
          : (store(localProgressKey(s.id)) || { student: s.id, name: s.name, modules: {}, drills: {}, startedAt: Date.now() });
      }

      if (patch) {
        // Apply locally first so the UI is instant and works offline.
        cache.modules = cache.modules || {};
        cache.drills = cache.drills || {};
        if (patch.module) {
          var m = cache.modules[patch.module] || {};
          if (patch.visited) m.visited = true;
          if (typeof patch.quiz === 'number') m.quiz = Math.max(m.quiz || 0, patch.quiz);
          cache.modules[patch.module] = m;
        }
        if (patch.drill) cache.drills[patch.drill] = { passed: !!patch.passed, at: Date.now() };
        cache.updatedAt = Date.now();

        if (serverMode) { pendingPatches.push(patch); scheduleFlush(); }
        else store(localProgressKey(s.id), cache);
      }
      return cache;
    },

    sha256: sha256,

    /* Renders sign-in, then calls onReady(session). */
    gate: function (mount, onReady) {
      var self = this;
      var s = this.session();

      if (s) {
        if (!serverMode) { cache = store(localProgressKey(s.id)) || null; onReady(s); return; }
        // Server mode: confirm the session is still valid and pull progress.
        api('/api/progress').then(function (r) {
          cache = (r && r.progress) || { student: s.id, name: s.name, modules: {}, drills: {} };
          onReady(s);
        }).catch(function (e) {
          if (e.status === 401) { drop(SESSION_KEY); drop(TOKEN_KEY); self.gate(mount, onReady); }
          else { cache = { student: s.id, name: s.name, modules: {}, drills: {} }; onReady(s); }
        });
        return;
      }

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
              '<button class="btn primary wide" type="submit" id="gGo">Enter the academy</button>' +
              '<p class="gate-err" id="gErr" hidden></p>' +
            '</form>' +
            (serverMode
              ? '<p class="gate-note"><b>Your progress follows you.</b> Modules, quiz scores and drill results are saved to your ' +
                'account, so you can pick up on any device and your instructor can see how you are getting on. ' +
                'Course content itself is public — the sign-in tracks your progress, it does not hide the material.</p>'
              : '<p class="gate-note"><b>Note on privacy.</b> This gate keeps each student\'s progress separate — it is not security, ' +
                'and it does not protect the course content, which is public. Your progress is saved only in this browser on this device. ' +
                'Clearing site data erases it, and using another device starts you fresh.</p>') +
          '</div>' +
          '<p class="gate-risk">Trading FX and CFDs on margin carries a high risk of losing all deposited funds. ' +
          'Everything in this academy is educational and simulated. No real money is ever involved.</p>' +
        '</div>';

      var form = mount.querySelector('#gForm');
      var errEl = mount.querySelector('#gErr');
      var goBtn = mount.querySelector('#gGo');

      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var name = mount.querySelector('#gName').value.trim();
        var code = mount.querySelector('#gCode').value;
        errEl.hidden = true;

        if (serverMode) {
          goBtn.disabled = true; goBtn.textContent = 'Checking…';
          try {
            var r = await api('/api/login', { method: 'POST', body: { name: name, code: code } });
            store(TOKEN_KEY, r.token);
            store(SESSION_KEY, r.user);
            location.reload();
            return;
          } catch (err) {
            goBtn.disabled = false; goBtn.textContent = 'Enter the academy';
            errEl.textContent = err.status === 401
              ? 'That code was not recognised. Check it with your instructor — codes are case sensitive.'
              : 'Could not reach the academy server. Check your connection and try again.';
            errEl.hidden = false;
            return;
          }
        }

        // Local mode
        if (await matchesLocal(roster.instructor, code)) {
          store(SESSION_KEY, { id: 'instructor', name: name || 'Instructor', role: 'instructor', at: Date.now() });
          location.reload();
          return;
        }
        for (var i = 0; i < roster.seats.length; i++) {
          if (await matchesLocal(roster.seats[i], code)) {
            var seat = roster.seats[i];
            store(SESSION_KEY, { id: seat.id, name: name || seat.name, seat: seat.name, role: 'student', at: Date.now() });
            location.reload();
            return;
          }
        }
        errEl.textContent = 'That code was not recognised. Check it with your instructor — codes are case sensitive.';
        errEl.hidden = false;
      });
    },

    /* Direct API access for the admin panel. */
    call: function (path, opts) { return api(path, opts); },

    /* Student self-enrolment from an invite link: #/join/<token> */
    renderJoin: async function (mount, token, onDone) {
      var self = this;
      mount.innerHTML = '<div class="gate"><div class="gate-card"><p class="muted">Checking your invite…</p></div></div>';

      if (!serverMode) {
        mount.innerHTML = '<div class="gate"><div class="gate-card"><h1>Invites unavailable</h1>' +
          '<p class="gate-sub">This academy is running without a server, so self-enrolment is switched off. ' +
          'Ask your instructor for an access code.</p>' +
          '<p><a class="btn primary wide" href="#/" style="display:block;text-align:center;text-decoration:none">Back to sign in</a></p>' +
          '</div></div>';
        return;
      }

      var info;
      try { info = await api('/api/invite/' + encodeURIComponent(token)); }
      catch (e) { info = { valid: false, reason: 'Could not reach the academy server.' }; }

      if (!info.valid) {
        mount.innerHTML = '<div class="gate"><div class="gate-card">' +
          '<div class="gate-brand"><span class="brand-mark">N1</span><b>N1 Forex Academy</b></div>' +
          '<h1>Invite not valid</h1><p class="gate-sub">' + esc(info.reason || 'This link cannot be used.') + '</p>' +
          '<p class="gate-note">Invite links expire and can only be used a limited number of times. ' +
          'Ask your instructor for a fresh one.</p>' +
          '<a class="btn primary wide" href="#/" style="display:block;text-align:center;text-decoration:none">Go to sign in</a>' +
          '</div></div>';
        return;
      }

      mount.innerHTML =
        '<div class="gate"><div class="gate-card">' +
          '<div class="gate-brand"><span class="brand-mark">N1</span><b>N1 Forex Academy</b></div>' +
          '<h1>Create your account</h1>' +
          '<p class="gate-sub">' + esc(info.label) + '</p>' +
          '<form id="jForm">' +
            '<label>Your full name<input id="jName" autocomplete="name" placeholder="e.g. Sam Okoye" required></label>' +
            '<label>Choose a password<input id="jCode" type="password" autocomplete="new-password" placeholder="At least 8 characters" required></label>' +
            '<label>Confirm password<input id="jCode2" type="password" autocomplete="new-password" required></label>' +
            '<button class="btn primary wide" type="submit" id="jGo">Create account</button>' +
            '<p class="gate-err" id="jErr" hidden></p>' +
          '</form>' +
          '<p class="gate-note"><b>Choose something only you know.</b> This password is how you sign in — your instructor ' +
          'never sees it and cannot recover it, but they can reset it for you. Progress is saved to your account, so you ' +
          'can carry on from any device. The course content itself is public; signing in tracks your progress.</p>' +
        '</div>' +
        '<p class="gate-risk">Trading FX and CFDs on margin carries a high risk of losing all deposited funds. ' +
        'Everything in this academy is educational and simulated. No real money is ever involved.</p></div>';

      var f = mount.querySelector('#jForm'), err = mount.querySelector('#jErr'), go = mount.querySelector('#jGo');
      f.addEventListener('submit', async function (e) {
        e.preventDefault();
        err.hidden = true;
        var name = mount.querySelector('#jName').value.trim();
        var c1 = mount.querySelector('#jCode').value, c2 = mount.querySelector('#jCode2').value;
        if (c1 !== c2) { err.textContent = 'The two passwords do not match.'; err.hidden = false; return; }
        if (c1.length < 8) { err.textContent = 'Use at least 8 characters.'; err.hidden = false; return; }

        go.disabled = true; go.textContent = 'Creating…';
        try {
          var r = await api('/api/signup', { method: 'POST', body: { token: token, name: name, code: c1 } });
          store(TOKEN_KEY, r.token);
          store(SESSION_KEY, r.user);
          location.hash = '#/';
          location.reload();
        } catch (e2) {
          go.disabled = false; go.textContent = 'Create account';
          err.textContent = e2.message || 'Could not create the account.';
          err.hidden = false;
        }
      });
      if (onDone) onDone();
    },

    /* Instructor admin panel. */
    renderInstructor: async function (mount) {
      if (!serverMode) return this.renderInstructorLocal(mount);
      var self = this;
      var origin = location.origin + location.pathname;

      mount.innerHTML =
        '<div class="crumb"><a href="#/">Modules</a> / Admin</div>' +
        '<div class="module-head"><h1>Admin</h1>' +
        '<p class="lede">Students, invite links and progress — live from the academy database.</p></div>' +
        '<div class="tabs" role="tablist">' +
          '<button data-a="students" aria-selected="true">Students</button>' +
          '<button data-a="invites" aria-selected="false">Invite links</button>' +
        '</div><div id="adminPane"><p class="muted">Loading…</p></div>';

      var pane = mount.querySelector('#adminPane');
      mount.querySelectorAll('.tabs button[data-a]').forEach(function (b) {
        b.onclick = function () {
          mount.querySelectorAll('.tabs button[data-a]').forEach(function (x) { x.setAttribute('aria-selected', 'false'); });
          b.setAttribute('aria-selected', 'true');
          b.dataset.a === 'students' ? students() : invites();
        };
      });

      function err(e) {
        pane.innerHTML = '<div class="panel"><div class="callout danger"><p><b>Could not load.</b> ' +
          esc((e && e.message) || 'The academy server did not respond.') + '</p></div></div>';
      }

      async function students() {
        pane.innerHTML = '<div class="panel"><p class="muted">Loading students…</p></div>';
        var data;
        try { data = await api('/api/admin/students'); } catch (e) { return err(e); }
        var totalModules = (window.COURSE || []).length, totalDrills = (window.DRILLS || []).length;

        var rows = (data.students || []).map(function (s) {
          var mods = Object.keys(s.modules || {}).length;
          var qk = Object.keys(s.modules || {}).filter(function (k) { return typeof s.modules[k].quiz === 'number'; });
          var avg = qk.length ? Math.round(qk.reduce(function (a, k) { return a + s.modules[k].quiz; }, 0) / qk.length) : null;
          var passed = Object.keys(s.drills || {}).filter(function (k) { return s.drills[k].passed; }).length;
          return '<tr' + (s.active ? '' : ' style="opacity:.45"') + '>' +
            '<td><b>' + esc(s.name) + '</b>' + (s.role === 'instructor' ? ' <span class="chip">instructor</span>' : '') +
              '<br><small>' + esc(s.id) + (s.active ? '' : ' — revoked') + '</small></td>' +
            '<td>' + mods + ' / ' + totalModules + '</td>' +
            '<td>' + (avg === null ? '—' : avg + '%') + '</td>' +
            '<td>' + passed + ' / ' + totalDrills + '</td>' +
            '<td>' + (s.updatedAt ? new Date(s.updatedAt).toLocaleDateString() : '—') + '</td>' +
            '<td><button class="btn-x" data-reset="' + esc(s.id) + '">Reset code</button> ' +
              (s.active && s.role !== 'instructor'
                ? '<button class="btn-x" data-revoke="' + esc(s.id) + '">Revoke</button>' : '') +
            '</td></tr>';
        }).join('');

        pane.innerHTML =
          '<div class="panel">' +
            '<h2>Students</h2>' +
            '<div class="table-wrap"><table><thead><tr><th>Student</th><th>Modules</th><th>Avg quiz</th>' +
            '<th>Drills</th><th>Last active</th><th>Actions</th></tr></thead><tbody>' +
            (rows || '<tr><td colspan="6"><em>Nobody enrolled yet. Create an invite link.</em></td></tr>') +
            '</tbody></table></div>' +
            '<h3>Add someone directly</h3>' +
            '<p class="muted">Use this if you want to set the code yourself. An invite link is usually better — ' +
            'the student chooses their own password and you never handle it.</p>' +
            '<div class="admin-form">' +
              '<input id="nsName" placeholder="Full name">' +
              '<input id="nsCode" placeholder="Access code (8+ chars)">' +
              '<select id="nsRole"><option value="student">Student</option><option value="instructor">Instructor</option></select>' +
              '<button class="btn primary" id="nsGo">Add</button>' +
            '</div><p class="admin-msg" id="nsMsg"></p>' +
          '</div>';

        pane.querySelectorAll('[data-revoke]').forEach(function (b) {
          b.onclick = async function () {
            if (!confirm('Revoke ' + b.dataset.revoke + '? They will be signed out and unable to sign back in. Their progress is kept.')) return;
            try { await api('/api/admin/revoke', { method: 'POST', body: { id: b.dataset.revoke } }); students(); }
            catch (e) { alert(e.message); }
          };
        });
        pane.querySelectorAll('[data-reset]').forEach(function (b) {
          b.onclick = async function () {
            var code = prompt('New access code for ' + b.dataset.reset + ' (8+ characters).\nGive it to them privately — it is not shown again.');
            if (!code) return;
            try { await api('/api/admin/reset', { method: 'POST', body: { id: b.dataset.reset, code: code } });
                  alert('Code updated. They have been signed out and must use the new one.'); }
            catch (e) { alert(e.message); }
          };
        });
        pane.querySelector('#nsGo').onclick = async function () {
          var msg = pane.querySelector('#nsMsg');
          try {
            await api('/api/admin/students', { method: 'POST', body: {
              name: pane.querySelector('#nsName').value.trim(),
              code: pane.querySelector('#nsCode').value,
              role: pane.querySelector('#nsRole').value
            }});
            msg.textContent = 'Added.'; msg.className = 'admin-msg ok';
            students();
          } catch (e) { msg.textContent = e.message; msg.className = 'admin-msg bad'; }
        };
      }

      async function invites() {
        pane.innerHTML = '<div class="panel"><p class="muted">Loading invites…</p></div>';
        var data;
        try { data = await api('/api/admin/invites'); } catch (e) { return err(e); }

        var rows = (data.invites || []).map(function (i) {
          var dead = i.revoked || (i.expires_at && i.expires_at < Date.now()) || i.uses >= i.max_uses;
          return '<tr' + (dead ? ' style="opacity:.45"' : '') + '>' +
            '<td><b>' + esc(i.label) + '</b><br><small>' + esc(i.id) + '</small></td>' +
            '<td>' + i.uses + ' / ' + i.max_uses + '</td>' +
            '<td>' + (i.expires_at ? new Date(i.expires_at).toLocaleDateString() : 'never') + '</td>' +
            '<td>' + (i.revoked ? 'revoked' : dead ? 'used up' : 'active') + '</td>' +
            '<td>' + (i.revoked ? '' : '<button class="btn-x" data-inv="' + esc(i.id) + '">Revoke</button>') + '</td></tr>';
        }).join('');

        pane.innerHTML =
          '<div class="panel">' +
            '<h2>Invite links</h2>' +
            '<p>Send a link to a student. They open it, choose their own password, and their account is created. ' +
            'You never see or handle their password.</p>' +
            '<div class="admin-form">' +
              '<input id="ivLabel" placeholder="Label, e.g. October cohort">' +
              '<input id="ivUses" type="number" min="1" max="200" value="1" title="How many people may use this link">' +
              '<input id="ivDays" type="number" min="1" max="365" value="14" title="Days until it expires">' +
              '<button class="btn primary" id="ivGo">Create link</button>' +
            '</div>' +
            '<div id="ivOut"></div>' +
            '<div class="table-wrap"><table><thead><tr><th>Label</th><th>Used</th><th>Expires</th>' +
            '<th>Status</th><th></th></tr></thead><tbody>' +
            (rows || '<tr><td colspan="5"><em>No invite links yet.</em></td></tr>') + '</tbody></table></div>' +
            '<div class="callout warn"><p>The link is shown <b>once</b>, right after you create it. It is stored hashed, ' +
            'so it cannot be shown again — create a new one if you lose it.</p></div>' +
          '</div>';

        pane.querySelectorAll('[data-inv]').forEach(function (b) {
          b.onclick = async function () {
            if (!confirm('Revoke this invite link? Anyone holding it will no longer be able to join.')) return;
            try { await api('/api/admin/invites/revoke', { method: 'POST', body: { id: b.dataset.inv } }); invites(); }
            catch (e) { alert(e.message); }
          };
        });
        pane.querySelector('#ivGo').onclick = async function () {
          try {
            var r = await api('/api/admin/invites', { method: 'POST', body: {
              label: pane.querySelector('#ivLabel').value.trim(),
              maxUses: pane.querySelector('#ivUses').value,
              expiresDays: pane.querySelector('#ivDays').value
            }});
            var link = origin + '#/join/' + r.token;
            pane.querySelector('#ivOut').innerHTML =
              '<div class="callout good"><p><b>Link created — copy it now.</b></p>' +
              '<div class="hashrow"><input id="ivLink" readonly value="' + esc(link) + '">' +
              '<button class="btn" id="ivCopy">Copy</button></div></div>';
            pane.querySelector('#ivLink').select();
            pane.querySelector('#ivCopy').onclick = function () {
              navigator.clipboard.writeText(link).then(function () {
                pane.querySelector('#ivCopy').textContent = 'Copied ✓';
              });
            };
            var t = pane.querySelector('#ivOut').innerHTML;
            invites();
            pane.querySelector('#ivOut').innerHTML = t;
            pane.querySelector('#ivCopy').onclick = function () {
              navigator.clipboard.writeText(link).then(function () {
                pane.querySelector('#ivCopy').textContent = 'Copied ✓';
              });
            };
          } catch (e) { alert(e.message); }
        };
      }

      students();
    },

    /* Local mode fallback: this-device roster and the code hashing tool. */
    renderInstructorLocal: async function (mount) {
      var totalModules = (window.COURSE || []).length;
      var drills = window.DRILLS || [];
      var self = this;

      mount.innerHTML =
        '<div class="crumb"><a href="#/">Modules</a> / Instructor</div>' +
        '<div class="module-head"><h1>Instructor</h1>' +
        '<p class="lede">Cohort progress' + (serverMode ? ' — live from the academy database.' : ' — this device only.') + '</p></div>' +
        '<div class="panel" id="instrPanel"><p class="muted">Loading…</p></div>';

      var panel = mount.querySelector('#instrPanel');

      function table(rows) {
        return '<div class="table-wrap"><table><thead><tr><th>Student</th><th>Modules opened</th>' +
          '<th>Avg quiz</th><th>Drills passed</th><th>Last active</th></tr></thead><tbody>' +
          (rows || '<tr><td colspan="5"><em>No activity yet.</em></td></tr>') + '</tbody></table></div>';
      }
      function row(name, id, prog, updatedAt) {
        var mods = Object.keys(prog.modules || {}).length;
        var qk = Object.keys(prog.modules || {}).filter(function (k) { return typeof prog.modules[k].quiz === 'number'; });
        var avg = qk.length ? Math.round(qk.reduce(function (a, k) { return a + prog.modules[k].quiz; }, 0) / qk.length) : null;
        var passed = Object.keys(prog.drills || {}).filter(function (k) { return prog.drills[k].passed; }).length;
        return '<tr><td><b>' + name + '</b><br><small>' + id + '</small></td>' +
          '<td>' + mods + ' / ' + totalModules + '</td>' +
          '<td>' + (avg === null ? '—' : avg + '%') + '</td>' +
          '<td>' + passed + ' / ' + drills.length + '</td>' +
          '<td>' + (updatedAt ? new Date(updatedAt).toLocaleString() : '—') + '</td></tr>';
      }

      var body = '';
      if (serverMode) {
        try {
          var r = await api('/api/roster');
          body = (r.students || []).map(function (s) {
            return row(s.name || s.seat, s.id, s, s.updatedAt);
          }).join('');
          panel.innerHTML = '<h2>Cohort progress</h2>' + table(body) +
            '<div class="callout good"><p><b>Central tracking is on.</b> These figures come from the academy database, ' +
            'so they include work students did at home on their own devices.</p></div>';
        } catch (e) {
          panel.innerHTML = '<div class="callout danger"><p><b>Could not load the roster.</b> ' +
            (e.status === 403 ? 'This account is not an instructor.' : 'The academy server did not respond.') + '</p></div>';
          return;
        }
      } else {
        var all = [];
        try {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(PROGRESS_PREFIX) === 0) all.push(store(k));
          }
        } catch (e) {}
        body = all.filter(Boolean).map(function (p) {
          return row(p.name || p.student, p.student, p, p.updatedAt);
        }).join('');
        panel.innerHTML = '<h2>Cohort progress</h2>' +
          '<div class="callout warn"><p><b>Progress is per-device.</b> These figures come from this browser only. ' +
          'A student working at home will not appear. Connect the academy API for central tracking — see ' +
          '<code>ARCHITECTURE.md</code>.</p></div>' + table(body);
      }

      panel.innerHTML +=
        '<h3>Access codes</h3>' +
        (serverMode
          ? '<p>Codes live in the academy database, hashed. Add or revoke a student with the commands in ' +
            '<code>ARCHITECTURE.md §7</code> — they are two lines each and take a few seconds.</p>'
          : '<p>Type a code to get its SHA-256 hash. Put it in <code>content/roster.js</code> as <code>hash:</code> ' +
            'instead of <code>code:</code>. This stops casual reading of the source — it is still not security.</p>' +
            '<div class="hashrow"><input id="hIn" placeholder="Type a code…"><button class="btn" id="hGo">Hash it</button></div>' +
            '<pre class="hashout" id="hOut">—</pre>');

      var hGo = panel.querySelector('#hGo');
      if (hGo) hGo.onclick = async function () {
        var v = panel.querySelector('#hIn').value;
        if (!v) return;
        panel.querySelector('#hOut').textContent = (await self.sha256(v)) || 'SHA-256 needs HTTPS or localhost.';
      };
    }
  };

  window.Auth = Auth;
})();
