/* N1 Forex Academy — lessons for Module 205. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[205] = [
    {
      title: 'Reading the curve',
      slides: [0, 1],
      check: [
        { q: 'Why does a normal yield curve slope upward?',
          options: ['Governments prefer it', 'The term premium — extra yield for the uncertainty and duration risk of lending longer', 'Inflation always rises', 'Short bonds are illiquid'],
          a: 1,
          why: 'Lending for thirty years means accepting decades of uncertainty plus duration risk. Upward slope is the default state, so only departures from it carry information.' },
        { q: 'Which part of the curve is most sensitive to current central bank policy?',
          options: ['The 30-year', 'The front end — short maturities', 'The whole curve equally', 'The 10-year only'],
          a: 1,
          why: 'Short maturities are dominated by where policy rates are now and over the next year or two. The long end reflects growth and inflation expectations over decades.' }
      ]
    },
    {
      title: 'Inversion, shape and currencies',
      slides: [2, 3, 4, 5],
      check: [
        { q: 'An inverted yield curve means:',
          options: ['Bonds are mispriced', 'The market expects rates to be lower in future, usually because growth is expected to weaken', 'Inflation is surging', 'Governments are defaulting'],
          a: 1,
          why: 'Inversion prices future cuts, and cuts usually follow weakening growth. It has preceded recessions historically, but with a variable and sometimes very long lag, and with false signals.' },
        { q: 'Someone says "the curve steepened". The essential follow-up question is:',
          options: ['By how many basis points?', 'Which end moved, and why — falling short rates and rising long rates mean very different things', 'Who reported it?', 'What was the volume?'],
          a: 1,
          why: 'Steepening from falling short yields prices rate cuts and weakness. Steepening from rising long yields suggests inflation or supply concerns. Direction alone is nearly meaningless.' }
      ]
    }
  ];
})();
