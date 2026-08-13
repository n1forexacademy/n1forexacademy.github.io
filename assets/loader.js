/* N1 Forex Academy — lazy content loader.

   Only the forex track ships in the initial page load. The equities and bonds
   curricula are fetched the moment a student actually opens them, which for
   most students is never — they are locked until the previous certificate.

   Track DEFINITIONS (content/tracks.js) stay eager and are tiny: the path
   engine and route guards need to know a track exists, and whether it is
   locked, without knowing what is inside it.

   Files within a track load SEQUENTIALLY. Each one does
   `window.COURSE = (window.COURSE || []).concat([...])`, so two loading
   concurrently could read the same array and lose one another's modules. */
(function () {
  'use strict';

  var MANIFEST = {
    forex: [],                       // already in the initial page load
    equities: [
      'content/equities.js',
      'content/equities-2.js',
      'content/lessons-equities.js'
    ],
    bonds: [
      'content/bonds.js',
      'content/bonds-2.js',
      'content/lessons-bonds.js'
    ]
  };

  var loaded = { forex: true };
  var inFlight = {};

  function injectScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () { resolve(src); };
      s.onerror = function () { reject(new Error('Failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  // Sequential, for the concat race described above.
  function loadSeries(files) {
    return files.reduce(function (chain, f) {
      return chain.then(function () { return injectScript(f); });
    }, Promise.resolve());
  }

  function load(trackId) {
    if (!trackId || loaded[trackId]) return Promise.resolve(false);
    if (inFlight[trackId]) return inFlight[trackId];
    var files = MANIFEST[trackId];
    if (!files) { loaded[trackId] = true; return Promise.resolve(false); }

    inFlight[trackId] = loadSeries(files).then(function () {
      loaded[trackId] = true;
      delete inFlight[trackId];
      return true;                                   // true = something was fetched
    }).catch(function (err) {
      delete inFlight[trackId];
      throw err;
    });
    return inFlight[trackId];
  }

  function loadAll() {
    return Object.keys(MANIFEST).reduce(function (chain, id) {
      return chain.then(function () { return load(id); });
    }, Promise.resolve());
  }

  function isLoaded(trackId) { return !!loaded[trackId]; }

  /* Which track a route needs before it can render. Uses only the eager track
     definitions, so it works before any content has been fetched. */
  function trackForRoute(parts) {
    if (!window.Path) return null;
    if (parts[0] === 'm' && parts[1]) return Path.trackOfModule(+parts[1]);
    if (parts[0] === 'certificate') return parts[1] || 'forex';
    if (parts[0] === 'drill' && parts[1]) {
      var hit = null;
      Path.trackList().forEach(function (t) {
        Path.flatSteps(t.id).forEach(function (s) {
          if (s.type === 'drill' && s.ref === parts[1]) hit = t.id;
        });
      });
      return hit;
    }
    return null;
  }

  window.Content = {
    load: load,
    loadAll: loadAll,
    isLoaded: isLoaded,
    trackForRoute: trackForRoute,
    manifest: MANIFEST
  };
})();
