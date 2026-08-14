/* N1 Forex Academy — options practice surface.

   A drill with `kind: 'optsim'` comes here. It renders a live chain from
   assets/options.js, lets the student take a position, then advances time and
   price so they can WATCH the three things the options track describes:

     decay      hold something and do nothing; the extrinsic value drains
     IV crush   an event resolves, implied volatility collapses, and a correct
                directional call still loses
     assignment sell an option and discover the obligation is not yours to time

   Deliberately not the full trading terminal. The terminal is built around a
   candle feed, a margin model and a risk guard, none of which describe an
   options book. Bolting a chain onto it would have meant compromising both.

   Progress is recorded into progress.drills exactly as every other drill and
   lab does, so the path engine cannot tell the difference. */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) {
    return esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
                 .replace(/`([^`]+)`/g, '<code>$1</code>');
  }
  function money(n) {
    var s = (n < 0 ? '-' : '') + '$' + Math.abs(n).toFixed(2);
    return '<span class="' + (n < 0 ? 'dn' : n > 0 ? 'up' : '') + '">' + s + '</span>';
  }

  function mount(host, d, onProgress) {
    var cfg = d.sim || {};
    var mult = cfg.multiplier || 100;

    /* World state. Deterministic: the student can reset and replay identically. */
    var st = {
      day: 0,
      underlying: cfg.underlying,
      daysToExpiry: cfg.daysToExpiry,
      iv: cfg.iv,
      positions: [],
      cash: 0,
      log: [],
      eventFired: false
    };

    function reset() {
      st.day = 0;
      st.underlying = cfg.underlying;
      st.daysToExpiry = cfg.daysToExpiry;
      st.iv = cfg.iv;
      st.positions = [];
      st.cash = 0;
      st.log = [];
      st.eventFired = false;
      draw();
    }

    /* One step forward. The scenario decides what happens to price and IV —
       that is how an event is staged rather than simulated. */
    function step() {
      if (st.daysToExpiry <= 0) return;
      st.day++;
      st.daysToExpiry--;

      var ev = (cfg.schedule || []).filter(function (e) { return e.onDay === st.day; })[0];
      if (ev) {
        if (ev.movePct != null) st.underlying = st.underlying * (1 + ev.movePct);
        if (ev.setIv != null) st.iv = ev.setIv;
        st.eventFired = true;
        st.log.push({ day: st.day, msg: ev.label });
      } else if (cfg.driftPct) {
        st.underlying = st.underlying * (1 + cfg.driftPct);
      }
      draw();
    }

    function runTo(days) {
      var guard = 0;
      while (st.daysToExpiry > days && guard++ < 400) step();
    }

    function take(strike, type, qty) {
      var p = OPT.price(st.underlying, strike, st.daysToExpiry * OPT.DAY, st.iv, cfg.rate, type);
      st.positions.push({
        strike: strike, type: type, qty: qty,
        premium: p.price, multiplier: mult,
        openedDay: st.day, openIv: st.iv, openUnderlying: st.underlying
      });
      // Buying pays out cash; selling collects it.
      st.cash -= p.price * qty * mult;
      st.log.push({
        day: st.day,
        msg: (qty > 0 ? 'Bought ' : 'Sold ') + Math.abs(qty) + ' × ' + strike + ' ' + type +
             ' at ' + p.price.toFixed(2) + ' (IV ' + Math.round(st.iv * 100) + ')'
      });
      draw();
    }

    function ctx() {
      var book = OPT.bookGreeks(st.positions, st.underlying, st.daysToExpiry, st.iv, cfg.rate);
      return {
        state: st, book: book, cfg: cfg,
        // Convenience for drill tests: what each leg has done.
        legs: st.positions.map(function (pos) {
          return Object.assign({ pos: pos },
            OPT.positionValue(pos, st.underlying, st.daysToExpiry, st.iv, cfg.rate));
        })
      };
    }

    /* ---------- rendering ---------- */

    function chainHtml() {
      var ch = OPT.chain({
        underlying: st.underlying, strikeStep: cfg.strikeStep, strikes: cfg.strikes,
        daysToExpiry: st.daysToExpiry, iv: st.iv, rate: cfg.rate
      });
      var rows = ch.rows.map(function (r) {
        var atm = Math.abs(r.strike - st.underlying) < (cfg.strikeStep || 5) / 2;
        return '<tr' + (atm ? ' class="atm"' : '') + '>' +
          '<td class="num">' + r.call.price.toFixed(2) + '</td>' +
          '<td class="num muted">' + r.call.extrinsic.toFixed(2) + '</td>' +
          '<td class="num muted">' + r.call.delta.toFixed(2) + '</td>' +
          '<td class="px">' + r.strike + '</td>' +
          '<td class="num muted">' + r.put.delta.toFixed(2) + '</td>' +
          '<td class="num muted">' + r.put.extrinsic.toFixed(2) + '</td>' +
          '<td class="num">' + r.put.price.toFixed(2) + '</td>' +
          '<td class="acts">' +
            '<button class="mini" data-buy="' + r.strike + '" data-type="call">+C</button>' +
            '<button class="mini" data-sell="' + r.strike + '" data-type="call">−C</button>' +
            '<button class="mini" data-buy="' + r.strike + '" data-type="put">+P</button>' +
            '<button class="mini" data-sell="' + r.strike + '" data-type="put">−P</button>' +
          '</td></tr>';
      }).join('');

      return '<div class="table-wrap"><table class="optchain">' +
        '<thead><tr><th colspan="3">Calls</th><th>Strike</th><th colspan="3">Puts</th><th></th></tr>' +
        '<tr><th>Price</th><th>Extr</th><th>Δ</th><th></th><th>Δ</th><th>Extr</th><th>Price</th><th>Trade</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>';
    }

    function bookHtml() {
      if (!st.positions.length) return '<p class="muted">No position yet. Use the buttons on the chain to take one.</p>';
      var c = ctx();
      var rows = c.legs.map(function (l) {
        return '<tr><td>' + (l.pos.qty > 0 ? 'Long' : 'Short') + ' ' + Math.abs(l.pos.qty) + '</td>' +
          '<td>' + l.pos.strike + ' ' + l.pos.type + '</td>' +
          '<td class="num">' + l.pos.premium.toFixed(2) + '</td>' +
          '<td class="num">' + l.mark.toFixed(2) + '</td>' +
          '<td class="num">' + l.intrinsic.toFixed(2) + '</td>' +
          '<td class="num">' + l.extrinsic.toFixed(2) + '</td>' +
          '<td class="num">' + money(l.pl) + '</td></tr>';
      }).join('');
      return '<div class="table-wrap"><table class="optbook">' +
        '<thead><tr><th>Side</th><th>Leg</th><th>Paid</th><th>Mark</th><th>Intr</th><th>Extr</th><th>P/L</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>' +
        '<div class="optgreeks">' +
          '<span><b>Δ</b> ' + c.book.delta.toFixed(1) + '</span>' +
          '<span><b>Γ</b> ' + c.book.gamma.toFixed(3) + '</span>' +
          '<span><b>Θ</b> ' + money(c.book.theta) + ' / day</span>' +
          '<span><b>V</b> ' + c.book.vega.toFixed(1) + ' per IV pt</span>' +
          '<span class="tot"><b>P/L</b> ' + money(c.book.pl) + '</span>' +
        '</div>';
    }

    function draw() {
      var c = ctx();
      var res = d.test ? d.test(c) : { pass: false, progress: 0, detail: '' };

      host.innerHTML =
        '<div class="panel optsim">' +
          '<div class="optbar">' +
            '<span><b>Underlying</b> ' + st.underlying.toFixed(2) + '</span>' +
            '<span><b>Days to expiry</b> ' + st.daysToExpiry + '</span>' +
            '<span><b>Implied vol</b> ' + Math.round(st.iv * 100) + '</span>' +
            '<span><b>Day</b> ' + st.day + '</span>' +
          '</div>' +

          (cfg.note ? '<div class="callout"><p>' + md(cfg.note) + '</p></div>' : '') +

          '<h4>Chain</h4>' + chainHtml() +
          '<p class="muted">+C buys a call, −C sells one. Extr is extrinsic value — the part that has to reach zero by expiry.</p>' +

          '<h4>Your position</h4>' + bookHtml() +

          '<div class="optctl">' +
            '<button class="btn" id="oStep">Advance one day →</button>' +
            '<button class="btn" id="oWeek">Advance a week →</button>' +
            '<button class="btn" id="oExpiry">Run to expiry →</button>' +
            '<button class="btn" id="oReset">Reset</button>' +
          '</div>' +

          (st.log.length
            ? '<h4>What happened</h4><ul class="tight optlog">' +
              st.log.slice(-8).map(function (e) { return '<li><b>Day ' + e.day + '</b> — ' + esc(e.msg) + '</li>'; }).join('') +
              '</ul>'
            : '') +

          '<div class="drill-box' + (res.pass ? ' passed' : '') + '">' +
            '<div class="drill-h">' + (res.pass ? '✓ Drill passed' : 'Drill objective') + '</div>' +
            '<div class="drill-bar"><i style="width:' + Math.round((res.progress || 0) * 100) + '%"></i></div>' +
            '<p>' + md(res.detail || '') + '</p>' +
          '</div>' +
        '</div>';

      host.querySelectorAll('[data-buy]').forEach(function (b) {
        b.onclick = function () { take(+b.dataset.buy, b.dataset.type, cfg.qty || 1); };
      });
      host.querySelectorAll('[data-sell]').forEach(function (b) {
        b.onclick = function () { take(+b.dataset.sell, b.dataset.type, -(cfg.qty || 1)); };
      });
      host.querySelector('#oStep').onclick = step;
      host.querySelector('#oWeek').onclick = function () { for (var i = 0; i < 5; i++) step(); };
      host.querySelector('#oExpiry').onclick = function () { runTo(0); };
      host.querySelector('#oReset').onclick = reset;

      if (onProgress) onProgress({ drill: d.id, passed: !!res.pass });
    }

    draw();
  }

  window.OptSim = {
    isSim: function (d) { return !!d && d.kind === 'optsim'; },
    mount: mount
  };
})();
