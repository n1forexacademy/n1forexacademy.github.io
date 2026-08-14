/* N1 Forex Academy — lazy content loader.

   Nothing but the 6.8 KB catalogue ships in the initial page load. A module's
   slides, lab, quiz and lessons are fetched the first time it is opened.

   Two things stay eager because everything else depends on them:
     content/tracks.js   — track definitions, so the path engine knows a track
                           exists and whether it is locked
     content/catalog.js  — module titles and taglines, so the journey and
                           library render without fetching content

   Each module's files load SEQUENTIALLY. Both do
   `window.COURSE = (window.COURSE || []).concat([...])` style appends, and two
   running concurrently could read the same array and lose one another's work.
   Different modules load in parallel safely — the guard is per module. */
(function () {
  'use strict';

  /* Bumped by tools/bump-assets.mjs so a deploy invalidates cached module
     files. Without it a returning student keeps the old lesson text. */
  var ASSET_V = '19';

  var loaded = {};        // moduleId -> true
  var inFlight = {};      // moduleId -> Promise

  function filesFor(id) {
    var q = ASSET_V ? '?v=' + ASSET_V : '';
    return ['content/modules/m' + id + '.js' + q, 'content/lessons/l' + id + '.js' + q];
  }

  function injectScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () { resolve(src); };
      // A missing lessons file is not fatal — the module falls back to the
      // slides-then-one-test view, which is how unauthored modules behave.
      s.onerror = function () {
        if (src.indexOf('/lessons/') > -1) resolve(null);
        else reject(new Error('Could not load ' + src));
      };
      document.head.appendChild(s);
    });
  }

  function loadSeries(files) {
    return files.reduce(function (chain, f) {
      return chain.then(function () { return injectScript(f); });
    }, Promise.resolve());
  }

  /* Load one module's content. Resolves immediately if already present. */
  function loadModule(id) {
    id = +id;
    if (!id || loaded[id]) return Promise.resolve(false);
    // Already present from a previous load or an eager include.
    if ((window.COURSE || []).some(function (m) { return m.id === id; })) {
      loaded[id] = true;
      return Promise.resolve(false);
    }
    if (inFlight[id]) return inFlight[id];

    inFlight[id] = loadSeries(filesFor(id)).then(function () {
      loaded[id] = true;
      delete inFlight[id];
      return true;
    }).catch(function (err) {
      delete inFlight[id];
      throw err;
    });
    return inFlight[id];
  }

  function loadModules(ids) {
    return Promise.all((ids || []).map(loadModule));
  }

  /* Every module belonging to a track, from the catalogue. */
  function moduleIdsOfTrack(trackId) {
    return (window.CATALOG || [])
      .filter(function (c) { return (c.track || 'forex') === trackId; })
      .map(function (c) { return c.id; });
  }

  function loadTrack(trackId) { return loadModules(moduleIdsOfTrack(trackId)); }

  function loadAll() {
    return loadModules((window.CATALOG || []).map(function (c) { return c.id; }));
  }

  function isModuleLoaded(id) {
    return !!loaded[+id] || (window.COURSE || []).some(function (m) { return m.id === +id; });
  }
  function isTrackLoaded(trackId) {
    return moduleIdsOfTrack(trackId).every(isModuleLoaded);
  }

  /* Metadata without content — used by the journey and library. */
  function meta(id) {
    return (window.CATALOG || []).filter(function (c) { return c.id === +id; })[0] || null;
  }

  /* What a route needs before it can render. Uses only eager data. */
  function needsFor(parts) {
    var NEEDS_ALL = { library: 1, glossary: 1, plan: 1 };
    if (NEEDS_ALL[parts[0]]) return { all: true };
    if (parts[0] === 'm' && parts[1]) return { modules: [+parts[1]] };
    if (parts[0] === 'certificate') {
      // The certificate counts completed steps; it needs its track's modules.
      return { track: parts[1] || 'forex' };
    }
    return null;
  }

  window.Content = {
    loadModule: loadModule,
    loadModules: loadModules,
    loadTrack: loadTrack,
    loadAll: loadAll,
    isModuleLoaded: isModuleLoaded,
    isTrackLoaded: isTrackLoaded,
    moduleIdsOfTrack: moduleIdsOfTrack,
    meta: meta,
    needsFor: needsFor
  };
})();
