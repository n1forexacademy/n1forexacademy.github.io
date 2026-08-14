/* N1 Forex Academy — the code lab surface.

   A drill with `kind: 'code'` comes here. This is the fourth practical surface
   and, like the other three, it records into progress.drills through the same
   callback, so the path engine, the Trading Floor and the certificates need no
   knowledge of it whatsoever.

   WHAT THIS FILE DOES AND DOES NOT DO.
     It owns the editor, the run button, the console and the marking display.
     It does NOT execute a single line of student code — that happens in
     assets/ea-runtime.js, inside a Worker, for the reasons set out at the top
     of that file. This file's only defence is the deadline: start a Worker,
     give it EIGHT SECONDS, and terminate it if it has not answered. That is
     what makes `while (true) {}` a failed run with a clear message rather than
     a frozen tab and a lost evening.

   NO SYNTAX HIGHLIGHTER, DELIBERATELY. Highlighting a textarea properly means
   an overlay that must track scroll, wrap, tabs and IME composition, and it
   breaks in exactly the ways that make a student think their code is wrong
   when it is not. The site has no build step and no dependencies; a plain
   monospace textarea with a line gutter is honest, works everywhere, and is
   about a hundred lines lighter.

   MARKING IS BEHAVIOURAL. Every check reads the run report, never the source
   text. See the header of content/ea-tasks.js for why that matters. */
(function () {
  'use strict';

  var RUN_TIMEOUT_MS = 8000;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Same inline markup as the rest of the site: **bold**, *italic*, `code`. */
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\*([^*]+)\*/g, '<i>$1</i>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function paras(list) {
    return (list || []).map(function (p) { return '<p>' + md(p) + '</p>'; }).join('');
  }

  function money(n) {
    var v = Number(n) || 0;
    return (v < 0 ? '-$' : '$') + Math.abs(v).toFixed(2);
  }

  /* ---------------------------------------------------------------------------
     The API card. Kept here rather than in the task files because it describes
     the runtime, not any one exercise — if ea-runtime.js grows a function, this
     is the one place that has to learn about it.
     --------------------------------------------------------------------------- */
  var API_DOCS = [
    { group: 'Price and time', items: [
      ['Bid()', 'current bid price'],
      ['Ask()', 'current ask price'],
      ['Pip()', 'size of one pip, as a price'],
      ['Point()', 'a tenth of a pip'],
      ['Spread()', 'current spread, in pips'],
      ['iTime(tf, shift)', 'bar time. shift 0 is the current bar'],
      ['iOpen / iHigh / iLow / iClose (tf, shift)', 'bar prices. shift 1 is the last CLOSED bar'],
      ['Bars()', 'bars elapsed in this run']
    ] },
    { group: 'Indicators', items: [
      ['iMA(tf, period, shift)', 'simple moving average'],
      ['iMA(tf, period, shift, "EMA")', 'exponential moving average'],
      ['iATR(tf, period)', 'average true range, in pips']
    ] },
    { group: 'Account', items: [
      ['Equity()', 'balance plus open profit and loss'],
      ['Balance()', 'closed balance'],
      ['FreeMargin()', 'what is left to open with'],
      ['PipValue(lots)', 'what one pip is worth for that size. ASK, do not assume $10']
    ] },
    { group: 'Positions', items: [
      ['PositionsTotal()', 'how many are open right now'],
      ['PositionGet(i)', '{ ticket, side, lots, entry, sl, tp, pl } or null'],
      ['PositionClose(ticket)', 'close one you hold']
    ] },
    { group: 'Orders', items: [
      ['Buy(lots, stopPrice, targetPrice)', 'returns { ok, ticket, retcode, comment }'],
      ['Sell(lots, stopPrice, targetPrice)', 'the target is optional; the stop is not'],
      ['—', 'CHECK THE RESULT. ok:false means it did not happen']
    ] },
    { group: 'Surviving a restart', items: [
      ['GlobalVariableSet(name, number)', 'held by the terminal, not by your EA'],
      ['GlobalVariableGet(name)', 'still there after a restart. Module 806']
    ] },
    { group: 'Output', items: [
      ['Print(...)', 'writes to the console below. First 300 lines are kept']
    ] }
  ];

  function apiHtml() {
    return API_DOCS.map(function (g) {
      return '<div class="ea-api-g"><h4>' + esc(g.group) + '</h4><dl>' +
        g.items.map(function (it) {
          return '<dt><code>' + esc(it[0]) + '</code></dt><dd>' + esc(it[1]) + '</dd>';
        }).join('') +
      '</dl></div>';
    }).join('');
  }

  /* ---------------------------------------------------------------------------
     Running one attempt. Resolves with the runtime's reply, or rejects with a
     message a student can act on.
     --------------------------------------------------------------------------- */
  function runInWorker(code, task, onDone) {
    var worker, done = false, timer;

    function finish(payload) {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (worker) { try { worker.terminate(); } catch (e) {} }
      onDone(payload);
    }

    try {
      var v = (window.Content && Content.ASSET_V) ? ('?v=' + Content.ASSET_V) : '';
      worker = new Worker('assets/ea-runtime.js' + v);
    } catch (e) {
      /* Opening index.html straight off the disk gives file:// origins, where
         browsers refuse to start a Worker. Nothing is wrong with the code. */
      finish({ ok: false, phase: 'worker',
        error: 'This browser would not start the code runner. That normally means the page was ' +
               'opened directly from a file rather than through a web address — the code lab needs ' +
               'the site to be served over http or https.' });
      return;
    }

    worker.onmessage = function (ev) { finish(ev.data); };
    worker.onerror = function (ev) {
      finish({ ok: false, phase: 'worker', error: (ev && ev.message) || 'The code runner stopped unexpectedly.' });
    };

    timer = setTimeout(function () {
      finish({ ok: false, phase: 'timeout',
        error: 'Your EA ran for ' + (RUN_TIMEOUT_MS / 1000) + ' seconds without finishing, so it was ' +
               'stopped. That is almost always a loop with no way out — check any `for` or `while` ' +
               'you have written. OnTick is called for you on every price change; it should do its ' +
               'work once and return, never loop waiting for the next one.' });
    }, RUN_TIMEOUT_MS);

    worker.postMessage({ id: 1, code: code, task: task });
  }

  /* ---------------------------------------------------------------------------
     Mount
     --------------------------------------------------------------------------- */
  function mount(host, drill, onProgress) {
    if (!host) return;

    var storeKey = 'n1fx:ea:' + drill.id;
    var saved = null;
    try { saved = localStorage.getItem(storeKey); } catch (e) {}

    host.innerHTML =
      '<div class="ea">' +

        '<div class="ea-brief">' +
          '<h2>' + esc(drill.title) + '</h2>' +
          paras(String(drill.intro || drill.brief).split('\n\n')) +
          '<div class="callout"><p><b>This is JavaScript, not MQL5.</b> Writing an MQL5 interpreter ' +
          'for the browser would be a far bigger job than it is worth, so the language here is ' +
          'JavaScript and the functions are named after their MQL5 equivalents. <b>The syntax does ' +
          'not transfer. The structure and the guards do</b> — and those are what this track is ' +
          'about. Everything you get right here is a thing you would have got right in MetaTrader.</p></div>' +
          '<h3>What it has to do</h3>' +
          '<ul class="ea-goals">' + (drill.goals || []).map(function (g) {
            return '<li>' + md(g) + '</li>';
          }).join('') + '</ul>' +
        '</div>' +

        '<div class="ea-main">' +
          '<div class="ea-pane">' +
            '<div class="ea-bar">' +
              '<span class="ea-file">' + esc(drill.id) + '.js</span>' +
              '<span class="ea-spacer"></span>' +
              '<button class="btn ghost" id="eaReset" type="button">Reset to the original</button>' +
              '<button class="btn" id="eaRun" type="button">Run</button>' +
            '</div>' +
            '<div class="ea-edit">' +
              '<div class="ea-gutter" id="eaGutter"></div>' +
              '<textarea class="ea-code" id="eaCode" spellcheck="false" autocomplete="off" ' +
                'autocapitalize="off" autocorrect="off" wrap="off"></textarea>' +
            '</div>' +
            '<p class="ea-hint">Tab indents. Your work is kept in this browser, so you can close ' +
            'the page and come back to it.</p>' +
          '</div>' +

          '<div class="ea-side">' +
            '<div class="ea-run" id="eaRunPanel">' +
              '<p class="muted">Run it to see what the machine actually does with what you wrote.</p>' +
            '</div>' +
            '<details class="ea-api"><summary>What you can call</summary>' + apiHtml() + '</details>' +
          '</div>' +
        '</div>' +

        '<div class="ea-console-wrap">' +
          '<h3>Console</h3>' +
          '<pre class="ea-console" id="eaConsole">Nothing yet.</pre>' +
        '</div>' +

      '</div>';

    var codeEl = host.querySelector('#eaCode');
    var gutter = host.querySelector('#eaGutter');
    var runBtn = host.querySelector('#eaRun');
    var resetBtn = host.querySelector('#eaReset');
    var panel = host.querySelector('#eaRunPanel');
    var consoleEl = host.querySelector('#eaConsole');

    codeEl.value = saved != null ? saved : (drill.starter || '');

    function syncGutter() {
      var n = codeEl.value.split('\n').length;
      var out = [];
      for (var i = 1; i <= n; i++) out.push(i);
      gutter.textContent = out.join('\n');
      gutter.scrollTop = codeEl.scrollTop;
    }
    syncGutter();

    codeEl.addEventListener('input', function () {
      syncGutter();
      try { localStorage.setItem(storeKey, codeEl.value); } catch (e) {}
    });
    codeEl.addEventListener('scroll', function () { gutter.scrollTop = codeEl.scrollTop; });

    /* Tab indents rather than leaving the field. Shift-Tab outdents. Trapping
       Tab in a textarea is an accessibility trade-off, so Escape then Tab still
       moves on — that is what the hint under the editor is for. */
    codeEl.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { codeEl.blur(); return; }
      if (e.key !== 'Tab') return;
      e.preventDefault();
      var start = codeEl.selectionStart, end = codeEl.selectionEnd, val = codeEl.value;
      if (!e.shiftKey && start === end) {
        codeEl.value = val.slice(0, start) + '   ' + val.slice(end);
        codeEl.selectionStart = codeEl.selectionEnd = start + 3;
      } else {
        var ls = val.lastIndexOf('\n', start - 1) + 1;
        var block = val.slice(ls, end);
        var changed = e.shiftKey
          ? block.replace(/^ {1,3}/gm, '')
          : block.replace(/^/gm, '   ');
        codeEl.value = val.slice(0, ls) + changed + val.slice(end);
        codeEl.selectionStart = ls;
        codeEl.selectionEnd = ls + changed.length;
      }
      syncGutter();
      try { localStorage.setItem(storeKey, codeEl.value); } catch (e2) {}
    });

    resetBtn.onclick = function () {
      if (!window.confirm('Replace what is in the editor with the original starting code? ' +
                          'Anything you have written will be lost.')) return;
      codeEl.value = drill.starter || '';
      syncGutter();
      try { localStorage.setItem(storeKey, codeEl.value); } catch (e) {}
      panel.innerHTML = '<p class="muted">Back to the original. Run it to see what it does.</p>';
      consoleEl.textContent = 'Nothing yet.';
    };

    runBtn.onclick = function () {
      runBtn.disabled = true;
      runBtn.textContent = 'Running…';
      panel.innerHTML = '<p class="muted">Running your EA over ' +
        esc(String(drill.task.bars)) + ' bars of ' +
        esc(FX.INSTRUMENTS[drill.task.instrument].name) + '…</p>';

      runInWorker(codeEl.value, drill.task, function (reply) {
        runBtn.disabled = false;
        runBtn.textContent = 'Run';
        render(reply);
      });
    };

    /* ---- rendering one result ---- */
    function render(reply) {
      if (!reply || !reply.ok) {
        var line = reply && reply.errorLine
          ? ' <span class="ea-line">around line ' + esc(String(reply.errorLine)) + '</span>' : '';
        panel.innerHTML =
          '<div class="ea-verdict bad"><h3>It did not run</h3>' +
          '<p>' + esc((reply && reply.error) || 'Unknown problem.') + line + '</p>' +
          (reply && reply.phase === 'compile'
            ? '<p class="muted">The code could not be read as JavaScript at all, so nothing was ' +
              'executed. A missing bracket or semicolon is the usual cause.</p>'
            : '') +
          '</div>';
        consoleEl.textContent = 'The run did not produce any output.';
        return;
      }

      var r = reply.result;

      // ---- console ----
      var lines = r.prints.map(function (p) {
        return (p.type === 'system' ? '' : 'bar ' + String(p.bar).padStart(4, ' ') + '  ') + p.text;
      });
      if (r.printsTruncated) lines.push('… output stopped after the first 300 lines.');
      if (r.error) lines.push('', '*** ' + r.error);
      consoleEl.textContent = lines.length ? lines.join('\n') : 'Your EA printed nothing.';

      // ---- marking ----
      var results = (drill.checks || []).map(function (c) {
        var ok = false;
        try { ok = !!c.test(r); } catch (e) { ok = false; }
        return { c: c, ok: ok };
      });
      var passed = results.length > 0 && results.every(function (x) { return x.ok; });

      var stats = r.stats;
      var report =
        '<div class="ea-stats">' +
          stat('Bars', r.bars) +
          stat('Order attempts', r.orderAttempts) +
          stat('Positions opened', r.ordersFilled) +
          stat('Most open at once', r.maxOpenPositions) +
          stat('Orders with no stop', r.ordersWithoutStop) +
          stat('Two orders on one bar', r.duplicateBarOrders) +
          stat('Trades closed', stats.trades) +
          stat('Net', money(stats.netPL)) +
          stat('Worst drawdown', stats.maxDrawdownPct.toFixed(1) + '%') +
          (r.restarted ? stat('Opened after the restart, on the bar it had already handled',
                              r.ordersOnRestartBar, r.ordersOnRestartBar > 0) : '') +
        '</div>';

      var checksHtml = results.map(function (x) {
        return '<li class="' + (x.ok ? 'ok' : 'no') + '">' +
          '<span class="ea-mark">' + (x.ok ? '✓' : '✗') + '</span>' +
          '<span><b>' + esc(x.c.label) + '</b>' +
          '<span class="ea-why">' + md(x.ok ? x.c.pass : x.c.fail) + '</span></span></li>';
      }).join('');

      panel.innerHTML =
        (r.error
          ? '<div class="ea-verdict bad"><h3>It stopped early</h3><p>' + esc(r.error) +
            (r.errorLine ? ' <span class="ea-line">around line ' + esc(String(r.errorLine)) + '</span>' : '') +
            '</p></div>'
          : '') +
        '<div class="ea-verdict ' + (passed ? 'good' : 'work') + '">' +
          '<h3>' + (passed ? 'Passed' : 'Not yet') + '</h3>' +
          '<p>' + (passed
            ? md(drill.onPass || 'Every check passed.')
            : 'Some checks did not pass. Each one below says what it wanted and why.') + '</p>' +
        '</div>' +
        '<ul class="ea-checks">' + checksHtml + '</ul>' +
        '<h4>What your EA did</h4>' + report;

      if (passed && onProgress) onProgress({ drill: drill.id, passed: true });
    }

    function stat(label, value, warn) {
      return '<div class="ea-stat' + (warn ? ' warn' : '') + '">' +
        '<span class="ea-stat-v">' + esc(String(value)) + '</span>' +
        '<span class="ea-stat-l">' + esc(label) + '</span></div>';
    }
  }

  window.EALab = {
    isCode: function (d) { return !!d && d.kind === 'code'; },
    mount: mount
  };
})();
