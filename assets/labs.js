/* N1 Forex Academy — analysis labs.

   WHY THIS EXISTS. The seven Trading Floor drills all run on the simulator, and
   the simulator carries four instruments: EURUSD, GBPUSD, USDJPY and gold. It
   has no shares, no order book, no earnings gaps, no bonds. So the equities and
   bonds tracks had modules and no practical work at all — a student finished
   them having read and answered, never having done anything.

   Adding shares and bonds to the engine would be the wrong fix. Those tracks are
   about judgement, not execution: reading a book, comparing two companies,
   counting real exposure, sizing for a gap, ranking rate sensitivity. None of
   that needs a live price feed, and faking one would teach the wrong thing.

   So an analysis lab is a worked exercise over supplied data. It records into
   `progress.drills` exactly as a terminal drill does, so the path engine,
   the Trading Floor listing and the certificates all work unchanged.

   A drill with `kind: 'analysis'` comes here. Everything else goes to the
   terminal. See content/labs.js for the exercises themselves.

   TASK KINDS
     calc   — numeric answer, marked within a tolerance
     choice — one correct option from several
     sort   — assign every item to the right bucket

   All tasks must be right to pass. Retries are unlimited and the reasoning is
   shown either way, because a lab that only tells you the score teaches nothing.
*/
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Same inline markup as the rest of the site: **bold**, *italic*, `code`. */
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[^*])\*([^*]+)\*/g, '$1<i>$2</i>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  /* ---------- the data a lab reasons about ---------- */

  function renderBlock(b) {
    if (b.type === 'note') {
      return '<div class="callout"><p>' + md(b.body) + '</p></div>';
    }
    if (b.type === 'table') {
      return '<div class="lab-data">' +
        (b.title ? '<h4>' + esc(b.title) + '</h4>' : '') +
        '<div class="table-wrap"><table><thead><tr>' +
          b.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
          b.rows.map(function (r) {
            return '<tr>' + r.map(function (c, i) {
              return '<td' + (i ? ' class="num"' : '') + '>' + md(c) + '</td>';
            }).join('') + '</tr>';
          }).join('') +
        '</tbody></table></div>' +
        (b.foot ? '<p class="muted">' + md(b.foot) + '</p>' : '') +
      '</div>';
    }
    if (b.type === 'ladder') {
      // An order book, offers descending above bids descending — the way a
      // depth ladder is actually displayed.
      var rows = b.offers.slice().reverse().map(function (o) {
        return '<tr class="ask"><td></td><td class="px">' + esc(o.price) + '</td><td class="num">' + esc(o.size) + '</td></tr>';
      }).concat(b.bids.map(function (o) {
        return '<tr class="bid"><td class="num">' + esc(o.size) + '</td><td class="px">' + esc(o.price) + '</td><td></td></tr>';
      }));
      return '<div class="lab-data lab-ladder">' +
        (b.title ? '<h4>' + esc(b.title) + '</h4>' : '') +
        '<div class="table-wrap"><table><thead><tr><th>Bid size</th><th>Price</th><th>Offer size</th></tr></thead>' +
        '<tbody>' + rows.join('') + '</tbody></table></div>' +
        (b.foot ? '<p class="muted">' + md(b.foot) + '</p>' : '') +
      '</div>';
    }
    return '';
  }

  /* ---------- tasks ---------- */

  function renderTask(t, i) {
    var head = '<p class="lab-q">' + (i + 1) + '. ' + md(t.q) + '</p>';
    var body;

    if (t.kind === 'calc') {
      body = '<div class="lab-calc">' +
        (t.prefix ? '<span class="fix">' + esc(t.prefix) + '</span>' : '') +
        '<input type="text" inputmode="decimal" autocomplete="off" data-ti="' + i + '" ' +
          'aria-label="Your answer"' + (t.placeholder ? ' placeholder="' + esc(t.placeholder) + '"' : '') + '>' +
        (t.unit ? '<span class="fix">' + esc(t.unit) + '</span>' : '') +
      '</div>';
    } else if (t.kind === 'choice') {
      body = t.options.map(function (o, oi) {
        return '<label data-oi="' + oi + '"><input type="radio" name="t' + i + '" value="' + oi + '">' + md(o) + '</label>';
      }).join('');
    } else if (t.kind === 'sort') {
      body = '<div class="lab-sort">' + t.items.map(function (it, ii) {
        return '<div class="lab-row"><span class="lab-item">' + md(it.label) + '</span>' +
          '<select data-ti="' + i + '" data-ii="' + ii + '" aria-label="Bucket for ' + esc(it.label) + '">' +
            '<option value="">— choose —</option>' +
            t.buckets.map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + '</option>'; }).join('') +
          '</select></div>';
      }).join('') + '</div>';
    } else {
      body = '';
    }

    return '<div class="q lab-task" data-ti="' + i + '">' + head + body +
      (t.hint ? '<p class="muted lab-hint">' + md(t.hint) + '</p>' : '') +
      '<div class="explain" hidden>' + md(t.why) + '</div></div>';
  }

  /* Read what the student entered, and say whether it is right. */
  function markTask(t, i, form) {
    var box = form.querySelector('.lab-task[data-ti="' + i + '"]');

    if (t.kind === 'calc') {
      var el = box.querySelector('input');
      // Accept 1,234.5 and £1234.5 — students paste from a calculator.
      var raw = String(el.value || '').replace(/[,\s£$€%]/g, '');
      var v = parseFloat(raw);
      var ok = isFinite(v) && Math.abs(v - t.answer) <= (t.tol == null ? 0.01 : t.tol);
      el.classList.toggle('correct', ok);
      el.classList.toggle('wrong', !ok);
      return ok;
    }

    if (t.kind === 'choice') {
      var picked = form.querySelector('input[name="t' + i + '"]:checked');
      box.querySelectorAll('label').forEach(function (l) {
        l.classList.remove('correct', 'wrong');
        if (+l.dataset.oi === t.a) l.classList.add('correct');
      });
      if (picked && +picked.value !== t.a) {
        box.querySelector('label[data-oi="' + picked.value + '"]').classList.add('wrong');
      }
      return !!picked && +picked.value === t.a;
    }

    if (t.kind === 'sort') {
      var all = true;
      box.querySelectorAll('select').forEach(function (sel) {
        var want = t.items[+sel.dataset.ii].bucket;
        var got = sel.value === want;
        sel.classList.toggle('correct', got);
        sel.classList.toggle('wrong', !got);
        if (!got) all = false;
      });
      return all;
    }

    return false;
  }

  /* ---------- mount ---------- */

  function mount(host, d, onProgress) {
    var tasks = d.tasks || [];

    host.innerHTML =
      '<div class="panel lab">' +
        (d.dataset || []).map(renderBlock).join('') +
        '<form id="labForm">' +
          '<div class="section-head" style="margin-top:1.4rem"><h3>Work it out</h3></div>' +
          '<p class="muted">Every answer must be right to pass. There is no penalty for retaking it, ' +
          'and the reasoning is shown either way — getting one wrong and reading why is the point.</p>' +
          tasks.map(renderTask).join('') +
          '<div class="lsn-nav">' +
            (d.module ? '<a class="btn" href="#/m/' + d.module + '">← Revise the module</a>' : '<span></span>') +
            '<button type="submit" class="btn primary">Mark my work</button>' +
          '</div>' +
          '<div class="score" id="labScore"></div>' +
        '</form>' +
      '</div>';

    host.querySelector('#labForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target, right = 0;

      tasks.forEach(function (t, i) {
        if (markTask(t, i, form)) right++;
        form.querySelector('.lab-task[data-ti="' + i + '"] .explain').hidden = false;
      });

      var passed = right === tasks.length;
      var scoreEl = host.querySelector('#labScore');

      if (passed) {
        scoreEl.innerHTML =
          '<div class="callout good"><p><b>Lab passed.</b> ' + md(d.onPass || 'That is the whole exercise.') + '</p></div>' +
          '<div class="lsn-nav"><a class="btn" href="#/drills">Trading Floor</a>' +
          '<a class="btn primary" href="#/">Back to my path →</a></div>';
      } else {
        scoreEl.innerHTML =
          '<div class="callout danger"><p><b>' + right + ' of ' + tasks.length + ' correct.</b> ' +
          'Read the reasoning under each one, then try again. Nothing is recorded until every answer is right.</p></div>';
      }

      if (onProgress) onProgress({ drill: d.id, passed: passed });
      scoreEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  window.Labs = {
    isLab: function (d) { return !!d && d.kind === 'analysis'; },
    mount: mount
  };
})();
