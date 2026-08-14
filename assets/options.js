/* N1 Forex Academy — options pricing and chain.

   WHY THIS EXISTS. Three things in the options track cannot honestly be taught
   by reading, because students accept them intellectually and do not believe
   them until they happen:

     Module 403  a bought option loses money while nothing happens
     Module 404  you can be right about direction and still lose, to IV crush
     Module 406  the seller's obligation arrives whether or not it suits you

   The analysis labs describe all three. This lets a student watch them.

   NO DOM, no dependencies, deterministic — same contract as engine.js, so a
   chain replays identically for a student and their instructor.

   ON THE MODEL. This is Black-Scholes with a normal-CDF approximation. It is a
   teaching model, not a trading system, and the course says so. What matters
   pedagogically is that the RELATIONSHIPS are right — extrinsic value peaks at
   the money, decay accelerates into expiry, vega collapses when uncertainty
   resolves, delta runs 0 to 1 — and those are all faithful. Do not present
   these numbers as tradeable quotes; real chains carry skew, dividends and
   early-exercise premium this deliberately omits.

   Everything is expressed in YEARS for time, matching the standard formulation.
   One trading day is 1/252. */
(function () {
  'use strict';

  var DAY = 1 / 252;

  /* Abramowitz & Stegun 7.1.26 error-function approximation, ~1e-7 accurate.
     Plenty for teaching, and it avoids pulling in a dependency. */
  function erf(x) {
    var s = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var t = 1 / (1 + 0.3275911 * x);
    var y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t
                  - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
  }
  function cdf(x) { return 0.5 * (1 + erf(x / Math.SQRT2)); }
  function pdf(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }

  /* Price and greeks for one option.
       S underlying, K strike, T years to expiry, v implied vol (annual, 0.30 = 30%),
       r risk-free rate, type 'call' | 'put'.

     At or past expiry the model is undefined, so we return intrinsic value and
     the degenerate greeks. That matters: the terminal must be able to walk a
     position all the way into expiry without producing NaN. */
  function price(S, K, T, v, r, type) {
    var isCall = type !== 'put';
    if (!(T > 0) || !(v > 0)) {
      var intr = isCall ? Math.max(0, S - K) : Math.max(0, K - S);
      return {
        price: intr, intrinsic: intr, extrinsic: 0,
        delta: intr > 0 ? (isCall ? 1 : -1) : 0,
        gamma: 0, theta: 0, vega: 0
      };
    }

    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(S / K) + (r + v * v / 2) * T) / (v * sqrtT);
    var d2 = d1 - v * sqrtT;
    var disc = Math.exp(-r * T);

    var px = isCall
      ? S * cdf(d1) - K * disc * cdf(d2)
      : K * disc * cdf(-d2) - S * cdf(-d1);

    var intrinsic = isCall ? Math.max(0, S - K) : Math.max(0, K - S);

    // Theta per CALENDAR DAY, because "what does a day cost me" is the only
    // form a student can judge. Module 403 makes them convert it to cash.
    var thetaYear = isCall
      ? -(S * pdf(d1) * v) / (2 * sqrtT) - r * K * disc * cdf(d2)
      : -(S * pdf(d1) * v) / (2 * sqrtT) + r * K * disc * cdf(-d2);

    return {
      price: px,
      intrinsic: intrinsic,
      extrinsic: Math.max(0, px - intrinsic),
      delta: isCall ? cdf(d1) : cdf(d1) - 1,
      gamma: pdf(d1) / (S * v * sqrtT),
      theta: thetaYear / 365,
      vega: S * pdf(d1) * sqrtT / 100      // per 1 point of IV, the quoted convention
    };
  }

  /* Build a chain of strikes around the underlying.

     `ivFor` lets a scenario shape the volatility surface — the event-premium
     drill raises IV on the expiry that straddles the announcement, then
     collapses it, which is the only way to stage IV crush. */
  function chain(opts) {
    var S = opts.underlying;
    var step = opts.strikeStep || 5;
    var n = opts.strikes || 9;                 // total, centred on the money
    var r = opts.rate == null ? 0.04 : opts.rate;
    var ivFor = opts.ivFor || function () { return opts.iv || 0.30; };

    var mid = Math.round(S / step) * step;
    var half = Math.floor(n / 2);
    var rows = [];
    for (var i = -half; i <= half; i++) {
      var K = mid + i * step;
      if (K <= 0) continue;
      var Tdays = opts.daysToExpiry;
      var T = Tdays * DAY;
      var v = ivFor(K, Tdays);
      rows.push({
        strike: K,
        iv: v,
        call: price(S, K, T, v, r, 'call'),
        put: price(S, K, T, v, r, 'put')
      });
    }
    return { underlying: S, daysToExpiry: opts.daysToExpiry, rows: rows };
  }

  /* Value an open option position. Positive qty = bought, negative = sold.
     `multiplier` is contracts-to-underlying, 100 for equity options. */
  function positionValue(pos, S, daysLeft, iv, r) {
    var p = price(S, pos.strike, Math.max(0, daysLeft) * DAY, iv, r == null ? 0.04 : r, pos.type);
    var m = pos.multiplier || 100;
    var sign = pos.qty >= 0 ? 1 : -1;
    return {
      mark: p.price,
      value: p.price * pos.qty * m,
      pl: (p.price - pos.premium) * pos.qty * m,
      intrinsic: p.intrinsic,
      extrinsic: p.extrinsic,
      // Position greeks: signed by direction and scaled by size, so they add
      // across legs. Module 405's "read the totals before entering".
      delta: p.delta * pos.qty * m,
      gamma: p.gamma * pos.qty * m,
      theta: p.theta * pos.qty * m,
      vega:  p.vega  * pos.qty * m,
      sign: sign
    };
  }

  /* Sum greeks across legs — the position-level view Module 405 insists on. */
  function bookGreeks(positions, S, daysLeft, iv, r) {
    var t = { delta: 0, gamma: 0, theta: 0, vega: 0, value: 0, pl: 0 };
    (positions || []).forEach(function (pos) {
      var v = positionValue(pos, S, daysLeft, iv, r);
      t.delta += v.delta; t.gamma += v.gamma;
      t.theta += v.theta; t.vega += v.vega;
      t.value += v.value; t.pl += v.pl;
    });
    return t;
  }

  window.OPT = {
    price: price,
    chain: chain,
    positionValue: positionValue,
    bookGreeks: bookGreeks,
    cdf: cdf,
    DAY: DAY
  };
})();
