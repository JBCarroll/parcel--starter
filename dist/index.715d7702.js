// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hF5PD":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "c5fcb9cb715d7702";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9TZQu":[function(require,module,exports) {
!function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
    function t() {
    }
    var e = t.prototype;
    return e.on = function(t1, e1) {
        if (t1 && e1) {
            var i = this._events = this._events || {
            }, n = i[t1] = i[t1] || [];
            return -1 == n.indexOf(e1) && n.push(e1), this;
        }
    }, e.once = function(t1, e1) {
        if (t1 && e1) {
            this.on(t1, e1);
            var i = this._onceEvents = this._onceEvents || {
            }, n = i[t1] = i[t1] || {
            };
            return n[e1] = !0, this;
        }
    }, e.off = function(t1, e1) {
        var i = this._events && this._events[t1];
        if (i && i.length) {
            var n = i.indexOf(e1);
            return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function(t1, e1) {
        var i = this._events && this._events[t1];
        if (i && i.length) {
            var n = 0, o = i[n];
            e1 = e1 || [];
            for(var r = this._onceEvents && this._onceEvents[t1]; o;){
                var s = r && r[o];
                s && (this.off(t1, o), delete r[o]), o.apply(this, e1), n += s ? 0 : 1, o = i[n];
            }
            return this;
        }
    }, t;
}), (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([
        "ev-emitter/ev-emitter"
    ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
})(window, function(t, e1) {
    function i(t1, e1) {
        for(var i1 in e1)t1[i1] = e1[i1];
        return t1;
    }
    function n(t1) {
        var e1 = [];
        if (Array.isArray(t1)) e1 = t1;
        else if ("number" == typeof t1.length) for(var i1 = 0; i1 < t1.length; i1++)e1.push(t1[i1]);
        else e1.push(t1);
        return e1;
    }
    function o(t1, e1, r) {
        return this instanceof o ? ("string" == typeof t1 && (t1 = document.querySelectorAll(t1)), this.elements = n(t1), this.options = i({
        }, this.options), "function" == typeof e1 ? r = e1 : i(this.options, e1), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout((function() {
            this.check();
        }).bind(this))) : new o(t1, e1, r);
    }
    function r(t1) {
        this.img = t1;
    }
    function s(t1, e1) {
        this.url = t1, this.element = e1, this.img = new Image;
    }
    var h = t.jQuery, a = t.console;
    o.prototype = Object.create(e1.prototype), o.prototype.options = {
    }, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
    }, o.prototype.addElementImages = function(t1) {
        "IMG" == t1.nodeName && this.addImage(t1), this.options.background === !0 && this.addElementBackgroundImages(t1);
        var e1 = t1.nodeType;
        if (e1 && d[e1]) {
            for(var i1 = t1.querySelectorAll("img"), n1 = 0; n1 < i1.length; n1++){
                var o1 = i1[n1];
                this.addImage(o1);
            }
            if ("string" == typeof this.options.background) {
                var r1 = t1.querySelectorAll(this.options.background);
                for(n1 = 0; n1 < r1.length; n1++){
                    var s1 = r1[n1];
                    this.addElementBackgroundImages(s1);
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t1) {
        var e1 = getComputedStyle(t1);
        if (e1) for(var i2 = /url\((['"])?(.*?)\1\)/gi, n2 = i2.exec(e1.backgroundImage); null !== n2;){
            var o2 = n2 && n2[2];
            o2 && this.addBackground(o2, t1), n2 = i2.exec(e1.backgroundImage);
        }
    }, o.prototype.addImage = function(t1) {
        var e1 = new r(t1);
        this.images.push(e1);
    }, o.prototype.addBackground = function(t1, e1) {
        var i2 = new s(t1, e1);
        this.images.push(i2);
    }, o.prototype.check = function() {
        function t1(t2, i2, n2) {
            setTimeout(function() {
                e2.progress(t2, i2, n2);
            });
        }
        var e2 = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e3) {
            e3.once("progress", t1), e3.check();
        }) : void this.complete();
    }, o.prototype.progress = function(t1, e2, i2) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t1.isLoaded, this.emitEvent("progress", [
            this,
            t1,
            e2
        ]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t1), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i2, t1, e2);
    }, o.prototype.complete = function() {
        var t1 = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t1, [
            this
        ]), this.emitEvent("always", [
            this
        ]), this.jqDeferred) {
            var e2 = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e2](this);
        }
    }, r.prototype = Object.create(e1.prototype), r.prototype.check = function() {
        var t1 = this.getIsImageComplete();
        return t1 ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && (void 0) !== this.img.naturalWidth;
    }, r.prototype.confirm = function(t1, e3) {
        this.isLoaded = t1, this.emitEvent("progress", [
            this,
            this.img,
            e3
        ]);
    }, r.prototype.handleEvent = function(t1) {
        var e3 = "on" + t1.type;
        this[e3] && this[e3](t1);
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t1 = this.getIsImageComplete();
        t1 && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, s.prototype.confirm = function(t1, e3) {
        this.isLoaded = t1, this.emitEvent("progress", [
            this,
            this.element,
            e3
        ]);
    }, o.makeJQueryPlugin = function(e3) {
        e3 = e3 || t.jQuery, e3 && (h = e3, h.fn.imagesLoaded = function(t1, e4) {
            var i2 = new o(this, t1, e4);
            return i2.jqDeferred.promise(h(this));
        });
    }, o.makeJQueryPlugin(), o;
});

},{"ev-emitter":"5rw2i"}],"5rw2i":[function(require,module,exports) {
(function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == 'function' && define.amd) // AMD - RequireJS
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {
    }
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {
        };
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {
        };
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {
        };
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}]},["hF5PD","9TZQu"], "9TZQu", "parcelRequiree1ac")

//# sourceMappingURL=index.715d7702.js.map
