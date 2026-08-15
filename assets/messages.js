/* N1 Forex Academy — messaging between a student and the instructor.

   WHY THIS EXISTS. Until now the platform could tell a student to "ask your
   instructor" and give them no way to do it. Three separate places said exactly
   that — a locked step, a missing access code, an expired invite — and a
   student who was stuck had to already know Jonathan's email address. The
   instructor side was no better: approving a gate changed a lock into a tick
   with no words attached, and the one field for a note was written by nothing
   and shown to nobody.

   ONE THREAD PER STUDENT, the instructor at the other end of all of them. There
   is no student-to-student messaging and the schema cannot express it — see
   worker/migrations/004_messages.sql.

   SERVER MODE ONLY. Messaging needs the Worker and D1. In local mode there is
   no other person to message, so the view says so plainly rather than rendering
   a box that silently does nothing.

   ACCESS IS THE SERVER'S JOB. This file hides buttons a student should not
   press, which is courtesy, not security. Every rule is enforced in
   threadIdFor() in worker/src/index.js, and verified there: a student asking
   for another student's thread by id gets 403, not an empty list. */
(function () {
  'use strict';

  var POLL_MS = 60000;      // gentle: a badge, not a chat client
  var pollTimer = null;
  var lastUnread = null;

  /* Attachments. The server's ceiling is 600 KB; aim well under it so a picture
     never bounces after the student has waited for the upload. */
  var MAX_IMAGES = 3;
  var TARGET_BYTES = 420 * 1024;
  var MAX_EDGE = 1600;      // a 4K screenshot is not more readable, only bigger

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Message bodies are plain text and are escaped, then newlines become breaks.
     No markdown: this is correspondence between two people, and the moment a
     student can write markup into something an instructor's browser renders,
     it stops being correspondence and starts being an attack surface. */
  function bodyHtml(s) {
    return esc(s).replace(/\n/g, '<br>');
  }

  function when(ts) {
    if (!ts) return '';
    var d = new Date(ts), now = new Date();
    var sameDay = d.toDateString() === now.toDateString();
    var time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return sameDay ? time : d.toLocaleDateString([], { day: 'numeric', month: 'short' }) + ', ' + time;
  }

  /* ---------------------------------------------------------------------------
     Pictures

     COMPRESSED IN THE BROWSER, ALWAYS. A Windows screenshot is a 2–6 MB PNG,
     and a phone photo of a screen is worse. Sending that raw would be slow on
     the student's connection, would blow the server's ceiling, and would fill
     a 5 GB database with pixels nobody needs — a chart is perfectly legible at
     1600px and JPEG quality 0.8.

     The re-encode has a second effect worth stating: whatever was in the file
     goes in one side of a canvas and comes out the other as fresh JPEG bytes.
     Metadata, appended payloads and anything hiding after the image data do not
     survive. That is not why it is done and it is NOT relied on — the server
     sniffs magic bytes on every upload regardless — but it is true.
     --------------------------------------------------------------------------- */
  function readImage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('That file is not a picture I can read.')); };
      img.src = url;
    });
  }

  function toBlob(canvas, quality) {
    return new Promise(function (resolve) {
      canvas.toBlob(function (b) { resolve(b); }, 'image/jpeg', quality);
    });
  }

  function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () {
        var s = String(fr.result);
        resolve(s.slice(s.indexOf(',') + 1));      // strip the data: prefix
      };
      fr.onerror = function () { reject(new Error('Could not read that picture.')); };
      fr.readAsDataURL(blob);
    });
  }

  async function compress(file) {
    var img = await readImage(file);
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    if (!w || !h) throw new Error('That picture has no size I can read.');

    var scale = Math.min(1, MAX_EDGE / Math.max(w, h));
    var cw = Math.max(1, Math.round(w * scale));
    var ch = Math.max(1, Math.round(h * scale));

    var canvas = document.createElement('canvas');
    canvas.width = cw; canvas.height = ch;
    var ctx = canvas.getContext('2d');
    /* Screenshots are usually pasted over nothing, and a transparent PNG would
       otherwise flatten to black once it becomes a JPEG. */
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, cw, ch);

    // Drop quality until it fits. Stop at 0.5 — below that a chart's gridlines go.
    var quality = 0.85, blob = null;
    for (var i = 0; i < 5; i++) {
      blob = await toBlob(canvas, quality);
      if (blob && blob.size <= TARGET_BYTES) break;
      quality -= 0.12;
      if (quality < 0.5) { quality = 0.5; }
    }
    if (!blob) throw new Error('That picture could not be prepared for sending.');
    if (blob.size > TARGET_BYTES * 1.4) {
      throw new Error('That picture is still too large after compressing. Try cropping it first.');
    }
    return { data: await blobToBase64(blob), width: cw, height: ch, size: blob.size,
             preview: URL.createObjectURL(blob) };
  }

  /* Fetching an image needs the bearer token, which an <img src> cannot carry —
     so the bytes come through the ordinary authenticated fetch and become a
     blob URL. No signed links, no public object store, no second access model. */
  async function attachmentUrl(id) {
    var base = (window.API_BASE || '').replace(/\/+$/, '');
    var token = null;
    try { token = JSON.parse(localStorage.getItem('n1fx:token') || 'null'); } catch (e) {}
    var res = await fetch(base + '/api/attachment/' + encodeURIComponent(id), {
      headers: token ? { Authorization: 'Bearer ' + token } : {}
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return URL.createObjectURL(await res.blob());
  }

  /* Images render as placeholders and fill in as each one arrives, so a thread
     with a dozen screenshots does not block on the first. */
  function loadImagesIn(root) {
    root.querySelectorAll('[data-att]').forEach(function (holder) {
      if (holder.getAttribute('data-loaded')) return;
      holder.setAttribute('data-loaded', '1');
      attachmentUrl(holder.getAttribute('data-att')).then(function (url) {
        var img = document.createElement('img');
        img.src = url;
        img.alt = 'Attached picture';
        img.loading = 'lazy';

        /* Remove ONLY the placeholder. Clearing innerHTML here would take the
           remove button with it — and its click handler, which is attached
           before this promise resolves. */
        var wait = holder.querySelector('.msg-pic-wait');
        if (wait) wait.remove();
        holder.insertBefore(img, holder.firstChild);

        holder.onclick = function () { openLightbox(url); };
        holder.classList.add('ready');
      }).catch(function () {
        var wait2 = holder.querySelector('.msg-pic-wait');
        if (wait2) wait2.textContent = 'This picture could not be loaded.';
        holder.classList.add('failed');
      });
    });
  }

  /* Deletion is permanent — there is no recycle bin on the server — so both
     controls confirm first, and both say what will actually go. */
  function wireDeletes(root, reload) {
    root.querySelectorAll('[data-delmsg]').forEach(function (b) {
      b.onclick = async function () {
        var hasPics = !!b.closest('.msg').querySelector('.msg-pic');
        if (!window.confirm(hasPics
          ? 'Remove this message and its picture? This cannot be undone.'
          : 'Remove this message? This cannot be undone.')) return;
        b.disabled = true;
        try {
          await Auth.call('/api/messages/delete', {
            method: 'POST', body: { messageId: b.getAttribute('data-delmsg') }
          });
          await reload();
        } catch (e) {
          b.disabled = false;
          window.alert((e && e.message) || 'That could not be removed.');
        }
      };
    });

    root.querySelectorAll('[data-delatt]').forEach(function (b) {
      b.onclick = async function (ev) {
        ev.stopPropagation();          // the picture itself opens the lightbox
        if (!window.confirm('Remove this picture? The message stays. This cannot be undone.')) return;
        b.disabled = true;
        try {
          await Auth.call('/api/attachment/delete', {
            method: 'POST', body: { attachmentId: b.getAttribute('data-delatt') }
          });
          await reload();
        } catch (e) {
          b.disabled = false;
          window.alert((e && e.message) || 'That picture could not be removed.');
        }
      };
    });
  }

  function openLightbox(url) {
    var box = document.createElement('div');
    box.className = 'msg-lightbox';
    box.innerHTML = '<img src="' + url + '" alt="Attached picture, full size">';
    box.onclick = function () { box.remove(); document.removeEventListener('keydown', onKey); };
    function onKey(e) { if (e.key === 'Escape') { box.remove(); document.removeEventListener('keydown', onKey); } }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(box);
  }

  function instructorName() {
    return (window.BRAND && BRAND.signatory && BRAND.signatory.name) || 'your instructor';
  }

  function serverMode() {
    return window.Auth && Auth.mode() === 'server';
  }

  /* ---------------------------------------------------------------------------
     Unread badge. Polled, because a student who is mid-lesson should still find
     out a reply arrived without reloading — but once a minute, not once a second.
     --------------------------------------------------------------------------- */
  async function refreshBadge() {
    if (!serverMode() || !Auth.session()) return;
    var n = 0;
    try {
      var r = await Auth.call('/api/messages/unread');
      n = (r && r.unread) || 0;
    } catch (e) { return; }          // offline or signed out: leave the badge alone
    lastUnread = n;
    paintBadge(n);
  }

  function paintBadge(n) {
    var links = document.querySelectorAll('[data-msg-link]');
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      var dot = el.querySelector('.msg-badge');
      if (n > 0) {
        if (!dot) {
          dot = document.createElement('span');
          dot.className = 'msg-badge';
          el.appendChild(dot);
        }
        dot.textContent = n > 99 ? '99+' : String(n);
        dot.hidden = false;
      } else if (dot) {
        dot.hidden = true;
      }
    }
  }

  function startPolling() {
    if (pollTimer) return;
    refreshBadge();
    pollTimer = setInterval(function () {
      if (document.visibilityState === 'hidden') return;   // don't poll a tab nobody is looking at
      refreshBadge();
    }, POLL_MS);
  }

  /* ---------------------------------------------------------------------------
     Rendering one thread
     --------------------------------------------------------------------------- */
  function threadHtml(messages, meIsInstructor) {
    if (!messages.length) {
      return '<p class="muted msg-empty">No messages yet.</p>';
    }
    return messages.map(function (m) {
      var mine = meIsInstructor ? m.sender === 'instructor' : m.sender === 'student';

      /* A removed message keeps its place in the thread. Vanishing it entirely
         would leave the replies around it answering nothing. */
      if (m.deleted_at) {
        var byWhom = m.deleted_by === 'instructor'
          ? (meIsInstructor ? 'You removed this' : 'Removed by ' + instructorName())
          : (mine || meIsInstructor ? (mine ? 'You removed this' : 'The student removed this') : 'Removed');
        return '<div class="msg gone' + (mine ? ' mine' : '') + '">' +
          '<div class="msg-meta"><span>' + esc(when(m.created_at)) + '</span></div>' +
          '<div class="msg-body"><i>' + esc(byWhom) + '</i></div>' +
        '</div>';
      }

      // An instructor may remove anything; a student only what they sent.
      var canRemove = meIsInstructor || m.sender === 'student';
      var pics = (m.attachments || []).map(function (a) {
        /* The box is sized from the stored dimensions so the thread does not
           jump about as each picture arrives. */
        var ratio = (a.width && a.height) ? (a.height / a.width) : 0.6;
        return '<div class="msg-pic" data-att="' + esc(a.id) + '" ' +
          'style="padding-bottom:' + Math.min(140, Math.max(20, ratio * 100)).toFixed(1) + '%">' +
          '<span class="msg-pic-wait">Loading picture…</span>' +
          (canRemove ? '<button type="button" class="msg-pic-x" data-delatt="' + esc(a.id) + '" ' +
            'title="Remove this picture" aria-label="Remove this picture">×</button>' : '') +
        '</div>';
      }).join('');

      return '<div class="msg' + (mine ? ' mine' : '') + '">' +
        '<div class="msg-meta"><b>' + esc(m.sender_name || (m.sender === 'instructor' ? instructorName() : 'Student')) +
          '</b><span>' + esc(when(m.created_at)) + '</span>' +
          (canRemove ? '<button type="button" class="msg-del" data-delmsg="' + esc(m.id) + '">Remove</button>' : '') +
        '</div>' +
        (m.body ? '<div class="msg-body">' + bodyHtml(m.body) + '</div>' : '') +
        (pics ? '<div class="msg-pics">' + pics + '</div>' : '') +
      '</div>';
    }).join('');
  }

  function composerHtml(placeholder) {
    return '<form class="msg-compose" id="msgForm">' +
      '<textarea id="msgBody" rows="3" maxlength="4000" placeholder="' + esc(placeholder) + '"></textarea>' +
      '<div class="msg-pending" id="msgPending" hidden></div>' +
      '<div class="msg-compose-foot">' +
        '<label class="btn ghost msg-attach">Add a picture' +
          '<input type="file" id="msgFile" accept="image/png,image/jpeg,image/webp" multiple hidden>' +
        '</label>' +
        '<span class="muted" id="msgStatus">Paste a screenshot straight in, or drop one here.</span>' +
        '<button class="btn primary" type="submit" id="msgSend">Send</button>' +
      '</div>' +
    '</form>';
  }

  function wireComposer(root, studentId, onSent) {
    var form = root.querySelector('#msgForm');
    if (!form) return;
    var box = root.querySelector('#msgBody');
    var btn = root.querySelector('#msgSend');
    var status = root.querySelector('#msgStatus');
    var fileInput = root.querySelector('#msgFile');
    var pendingBox = root.querySelector('#msgPending');
    var pending = [];        // [{ data, width, height, size, preview }]

    function paintPending() {
      pendingBox.hidden = pending.length === 0;
      pendingBox.innerHTML = pending.map(function (p, i) {
        return '<div class="msg-thumb"><img src="' + p.preview + '" alt="">' +
          '<button type="button" class="msg-thumb-x" data-i="' + i + '" ' +
            'aria-label="Remove this picture">×</button>' +
          '<span>' + Math.round(p.size / 1024) + ' KB</span></div>';
      }).join('');
      pendingBox.querySelectorAll('[data-i]').forEach(function (b) {
        b.onclick = function () {
          var i = parseInt(b.getAttribute('data-i'), 10);
          URL.revokeObjectURL(pending[i].preview);
          pending.splice(i, 1);
          paintPending();
        };
      });
    }

    async function addFiles(files) {
      var list = [].slice.call(files || []).filter(function (f) {
        return f && /^image\//.test(f.type);
      });
      if (!list.length) return;
      for (var i = 0; i < list.length; i++) {
        if (pending.length >= MAX_IMAGES) {
          status.textContent = 'Up to ' + MAX_IMAGES + ' pictures per message.';
          break;
        }
        status.textContent = 'Preparing picture…';
        try {
          pending.push(await compress(list[i]));
          status.textContent = '';
        } catch (err) {
          status.textContent = (err && err.message) || 'That picture could not be added.';
        }
      }
      paintPending();
    }

    fileInput.onchange = function () { addFiles(fileInput.files); fileInput.value = ''; };

    /* PASTE IS THE IMPORTANT ONE. Snipping Tool, PrtScn, macOS shift-cmd-4 and
       every trading platform's "copy chart" all put an image on the clipboard.
       Making the student save a file first and then find it is the difference
       between a feature people use and one they do not. */
    box.addEventListener('paste', function (e) {
      var items = (e.clipboardData && e.clipboardData.items) || [];
      var files = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].kind === 'file' && /^image\//.test(items[i].type)) {
          var f = items[i].getAsFile();
          if (f) files.push(f);
        }
      }
      if (files.length) { e.preventDefault(); addFiles(files); }
    });

    ['dragenter', 'dragover'].forEach(function (ev) {
      form.addEventListener(ev, function (e) { e.preventDefault(); form.classList.add('drop'); });
    });
    ['dragleave', 'drop'].forEach(function (ev) {
      form.addEventListener(ev, function (e) { e.preventDefault(); form.classList.remove('drop'); });
    });
    form.addEventListener('drop', function (e) {
      if (e.dataTransfer && e.dataTransfer.files) addFiles(e.dataTransfer.files);
    });

    form.onsubmit = async function (e) {
      e.preventDefault();
      var body = (box.value || '').trim();
      if (!body && !pending.length) { status.textContent = 'Nothing to send.'; return; }
      btn.disabled = true; status.textContent = pending.length ? 'Sending picture…' : 'Sending…';
      try {
        var payload = { body: body };
        if (studentId) payload.studentId = studentId;
        if (pending.length) {
          payload.images = pending.map(function (p) {
            return { data: p.data, width: p.width, height: p.height };
          });
        }
        await Auth.call('/api/messages', { method: 'POST', body: payload });
        box.value = '';
        pending.forEach(function (p) { URL.revokeObjectURL(p.preview); });
        pending = [];
        paintPending();
        status.textContent = '';
        await onSent();
      } catch (err) {
        status.textContent = (err && err.message) || 'That did not send.';
      } finally {
        btn.disabled = false;
      }
    };

    // Ctrl/Cmd+Enter sends, because a message can be several paragraphs and
    // plain Enter has to stay as a newline.
    box.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') form.requestSubmit();
    });
  }

  function scrollToEnd(root) {
    var pane = root.querySelector('.msg-thread');
    if (pane) pane.scrollTop = pane.scrollHeight;
  }

  /* ---------------------------------------------------------------------------
     Student view: one conversation
     --------------------------------------------------------------------------- */
  async function renderStudent(app) {
    app.innerHTML =
      '<div class="crumb"><a href="#/">Modules</a> / Messages</div>' +
      '<div class="module-head"><h1>Messages</h1>' +
      '<p class="lede">A direct line to ' + esc(instructorName()) + '. Ask about anything you are stuck ' +
      'on — a lab, a locked step, your demo period. <b>Send a screenshot of your chart</b> by pasting ' +
      'it straight into the box. Replies appear here.</p></div>' +
      '<div class="msg-panel"><div class="msg-thread" id="msgThread">' +
        '<p class="muted">Loading…</p>' +
      '</div>' + composerHtml('Type your message to ' + instructorName() + '…') + '</div>';

    async function load() {
      try {
        var r = await Auth.call('/api/messages');
        app.querySelector('#msgThread').innerHTML = threadHtml(r.messages || [], false);
        loadImagesIn(app);
        wireDeletes(app, load);
      } catch (e) {
        app.querySelector('#msgThread').innerHTML =
          '<p class="muted">Could not load your messages. ' + esc((e && e.message) || '') + '</p>';
      }
      scrollToEnd(app);
      paintBadge(0);            // reading the thread is what clears it, server-side too
      lastUnread = 0;
    }

    wireComposer(app, null, load);
    await load();
  }

  /* ---------------------------------------------------------------------------
     Instructor view: every conversation, one open at a time
     --------------------------------------------------------------------------- */
  async function renderInstructor(app, openId) {
    app.innerHTML =
      '<div class="crumb"><a href="#/">Dashboard</a> / Messages</div>' +
      '<div class="module-head"><h1>Messages</h1>' +
      '<p class="lede">Every student has one conversation with you. Unanswered ones sort to the top.</p></div>' +
      '<div class="msg-layout">' +
        '<div class="msg-list" id="msgList"><p class="muted">Loading…</p></div>' +
        '<div class="msg-panel" id="msgPanel">' +
          '<p class="muted msg-empty">Choose a student on the left.</p>' +
        '</div>' +
      '</div>';

    var threads = [];

    async function loadList() {
      try {
        var r = await Auth.call('/api/admin/threads');
        threads = r.threads || [];
      } catch (e) {
        app.querySelector('#msgList').innerHTML =
          '<p class="muted">Could not load conversations. ' + esc((e && e.message) || '') + '</p>';
        return;
      }
      app.querySelector('#msgList').innerHTML = threads.map(function (t) {
        var preview = t.last_body
          ? (t.last_sender === 'instructor' ? 'You: ' : '') + String(t.last_body).slice(0, 60)
          : (t.last_at ? (t.last_sender === 'instructor' ? 'You: ' : '') + 'Picture' : 'No messages yet');
        return '<button class="msg-item' + (t.id === openId ? ' on' : '') + '" data-sid="' + esc(t.id) + '">' +
          '<span class="msg-item-top"><b>' + esc(t.name) + '</b>' +
            (t.unread > 0 ? '<span class="msg-count">' + t.unread + '</span>' : '') + '</span>' +
          '<span class="msg-item-sub">' + esc(preview) + '</span>' +
        '</button>';
      }).join('') || '<p class="muted">No students yet.</p>';

      app.querySelectorAll('[data-sid]').forEach(function (b) {
        b.onclick = function () { openThread(b.getAttribute('data-sid')); };
      });
    }

    async function openThread(sid) {
      openId = sid;
      var who = threads.filter(function (t) { return t.id === sid; })[0];
      var panel = app.querySelector('#msgPanel');
      panel.innerHTML =
        '<div class="msg-head"><h3>' + esc((who && who.name) || sid) + '</h3>' +
          '<span class="muted">' + esc((who && who.username) ? '@' + who.username : '') + '</span></div>' +
        '<div class="msg-thread" id="msgThread"><p class="muted">Loading…</p></div>' +
        composerHtml('Reply to ' + ((who && who.name) || 'this student') + '…');

      async function load() {
        try {
          var r = await Auth.call('/api/messages?studentId=' + encodeURIComponent(sid));
          panel.querySelector('#msgThread').innerHTML = threadHtml(r.messages || [], true);
          loadImagesIn(panel);
          wireDeletes(panel, load);
        } catch (e) {
          panel.querySelector('#msgThread').innerHTML =
            '<p class="muted">Could not load. ' + esc((e && e.message) || '') + '</p>';
        }
        scrollToEnd(panel);
        await loadList();       // unread counts change the moment the thread is read
        refreshBadge();
      }

      wireComposer(panel, sid, load);
      await load();
    }

    await loadList();
    if (openId) await openThread(openId);
  }

  /* ---------------------------------------------------------------------------
     Entry
     --------------------------------------------------------------------------- */
  async function render(app, openId) {
    if (!serverMode()) {
      app.innerHTML =
        '<div class="crumb"><a href="#/">Modules</a> / Messages</div>' +
        '<div class="module-head"><h1>Messages</h1></div>' +
        '<div class="callout"><p><b>Messaging needs the server.</b> This copy of the site is running in ' +
        'local mode, where there is no account system and therefore nobody at the other end. Ask your ' +
        'instructor for a link to the hosted academy.</p></div>';
      return;
    }
    if (Auth.isInstructor()) return renderInstructor(app, openId);
    return renderStudent(app);
  }

  window.Messages = {
    render: render,
    refreshBadge: refreshBadge,
    startPolling: startPolling,
    /* A link students and instructors can drop anywhere. The badge attaches to
       any element carrying data-msg-link, so the top bar and an inline "ask
       about this" link stay in step with no extra wiring. */
    link: function (text) {
      return '<a href="#/messages" data-msg-link>' + esc(text || 'Messages') + '</a>';
    }
  };
})();
