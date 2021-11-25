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
})({"3vgOL":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "10a2cdc3ff8d8a7b";
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

},{}],"igPAH":[function(require,module,exports) {
/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */ {
    // Lighter to darker.
    const colors = [
        '#f6f6f6',
        '#f0f0f0',
        '#e3e3e3',
        '#d7d7d7',
        '#d0d0d0'
    ];
    // The page turning animations.
    class PageTurn {
        constructor(el, pagesTotal){
            this.DOM = {
                el: el
            };
            this.config = {
                // Duration for each page turn animation.
                duration: 1.6,
                // Delay between the pages. Need to be tuned correctly together with the duration, so that there are no gaps between the pages, otherwise the content switch would be visible.
                pagesDelay: 0.15,
                // Ease for each page turn animation. Needs to be easeInOut
                ease: Quint.easeInOut
            };
            // Both sides.
            this.DOM.pagesWrap = {
                left: this.DOM.el.querySelector('.revealer__item--left'),
                right: this.DOM.el.querySelector('.revealer__item--right')
            };
            // Create the turning pages.
            let pagesHTML = '';
            for(let i = 0; i <= pagesTotal; ++i){
                // Setting the color of the turning page based on the colors array
                // todo: Need to find a better way to do this..
                const color = colors[i] || colors[0];
                pagesHTML += `<div class="revealer__item-inner" style="background-color:${color};"></div>`;
            }
            this.DOM.pagesWrap.left.innerHTML = this.DOM.pagesWrap.right.innerHTML = pagesHTML;
            // All the turning pages.
            this.DOM.pages = {
                left: Array.from(this.DOM.pagesWrap.left.querySelectorAll('.revealer__item-inner')),
                right: Array.from(this.DOM.pagesWrap.right.querySelectorAll('.revealer__item-inner'))
            };
        }
        // The pages will be initially translated to the right or left (100% or -100% on the x-axis) and then animated to the opposite side.
        addTween(side, direction, nmbPages) {
            const pages = this.DOM.pages[side];
            for(let i1 = 0, len = nmbPages - 1; i1 <= len; ++i1){
                const page = pages[i1];
                this.tl.to(page, this.config.duration, {
                    ease: this.config.ease,
                    startAt: {
                        x: direction === 'next' ? '100%' : '-100%'
                    },
                    x: direction === 'next' ? '-100%' : '100%'
                }, i1 * this.config.pagesDelay);
            }
        }
        createTweens(direction, nmbPages) {
            this.addTween('left', direction, nmbPages);
            this.addTween('right', direction, nmbPages);
        }
        turn(direction, nmbPages, middleAnimationCallback) {
            return new Promise((resolve, reject)=>{
                this.tl = new TimelineMax({
                    onComplete: resolve,
                    paused: true
                });
                // Add a callback for the middle of the animation.
                if (middleAnimationCallback) this.tl.addCallback(middleAnimationCallback, (this.config.duration + (nmbPages - 1) * this.config.pagesDelay) / 2);
                this.createTweens(direction, nmbPages);
                this.tl.resume();
            });
        }
    }
    // Window sizes.
    let winsize;
    const calcWinsize = ()=>winsize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    ;
    calcWinsize();
    window.addEventListener('resize', calcWinsize);
    // Class for a content item.
    class Item {
        constructor(el1){
            this.DOM = {
                el: el1
            };
            // The inner contains both the image and reveal elements.
            this.DOM.inner = this.DOM.el.querySelector('.slide__figure-inner');
            // The image.
            this.DOM.image = this.DOM.inner.querySelector('.slide__figure-img');
            // The reveal element (element that is on top of the image and moves away to reveal the image).
            this.DOM.reveal = this.DOM.inner.querySelector('.slide__figure-reveal');
            // Title and description.
            this.DOM.title = this.DOM.el.querySelector('.slide__figure-title');
            this.DOM.description = this.DOM.el.querySelector('.slide__figure-description');
            const calcRect = ()=>this.rect = this.DOM.el.getBoundingClientRect()
            ;
            window.addEventListener('resize', calcRect);
            calcRect();
        }
        // Gets the side where the item is on the slideshow/viewport (left or right).
        getSide() {
            // Item´s center point.
            const center = {
                x: this.rect.left + this.rect.width / 2,
                y: this.rect.top + this.rect.height / 2
            };
            return center.x >= winsize.width / 2 ? 'right' : 'left';
        }
    }
    // A slide is the two "pages" that are currently visible.
    class Slide {
        constructor(el2){
            this.DOM = {
                el: el2
            };
            // Content item instances.
            this.items = [];
            // The figures
            Array.from(this.DOM.el.querySelectorAll('.slide__figure')).forEach((item)=>this.items.push(new Item(item))
            );
        }
        // Show its content items.
        showItems(direction) {
            return new Promise((resolve, reject)=>{
                const duration = 1;
                const ease = Expo.easeOut;
                this.tl = new TimelineMax({
                    onComplete: resolve
                }).add('begin');
                for (const item of this.items){
                    // Animate the main element (translation of the whole item).
                    this.tl.to(item.DOM.el, duration, {
                        ease: ease,
                        startAt: {
                            x: direction === 'next' ? 60 : -60,
                            opacity: 1
                        },
                        x: '0%'
                    }, 'begin');
                    // Animate the rotationZ for the elements that are inside the turning side.
                    if (direction === 'next' && item.getSide() === 'left' || direction === 'prev' && item.getSide() === 'right') {
                        // Animate the perspective element
                        TweenMax.set(item.DOM.inner, {
                            'transform-origin': direction === 'next' ? '100% 50%' : '0% 50%'
                        });
                        this.tl.to(item.DOM.inner, duration, {
                            ease: ease,
                            startAt: {
                                rotationY: direction === 'next' ? 30 : -30
                            },
                            rotationY: 0.1
                        }, 'begin');
                    }
                    // Animate the reveal element away from the image.
                    this.tl.to(item.DOM.reveal, duration, {
                        ease: ease,
                        startAt: {
                            x: '0%'
                        },
                        x: direction === 'next' ? '-100%' : '100%'
                    }, 'begin')// Animate the scale of the image.
                    .to(item.DOM.image, duration, {
                        ease: ease,
                        startAt: {
                            scale: 1.5
                        },
                        scale: 1
                    }, 'begin')// Animate the title in.
                    .to(item.DOM.title, duration * 0.8, {
                        ease: Quart.easeOut,
                        startAt: {
                            x: direction === 'next' ? 15 : -15,
                            opacity: 0
                        },
                        x: '0%',
                        opacity: 1
                    }, 'begin+=0.25')// Animate the description in.
                    .to(item.DOM.description, duration * 0.8, {
                        ease: Quart.easeOut,
                        startAt: {
                            x: direction === 'next' ? 20 : -20,
                            opacity: 0
                        },
                        x: '0%',
                        opacity: 1
                    }, 'begin+=0.3');
                }
            });
        }
        // Reset items after the page turns.
        resetItems() {
            for (const item of this.items){
                TweenMax.set(item.DOM.el, {
                    opacity: 0
                });
                TweenMax.set([
                    item.DOM.title,
                    item.DOM.description
                ], {
                    opacity: 0
                });
            }
        }
    }
    class Slideshow {
        constructor(el3){
            this.DOM = {
                el: el3
            };
            // Current slide´s index.
            this.current = 0;
            // Slide instances.
            this.slides = [];
            Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slide)=>this.slides.push(new Slide(slide))
            );
            this.slidesTotal = this.slides.length;
            // Set the first slide as current.
            this.slides[this.current].DOM.el.classList.add('slide--current');
            // The page turning animations.
            this.pageturn = new PageTurn(this.DOM.el.querySelector('.revealer'), this.slidesTotal);
            // The arrows to navigate the slideshow.
            this.pagination = {
                prevCtrl: this.DOM.el.querySelector('.arrow-nav__item--prev'),
                nextCtrl: this.DOM.el.querySelector('.arrow-nav__item--next')
            };
            // The table of contents element.
            this.DOM.nav = this.DOM.el.querySelector('.nav');
            this.DOM.navCtrl = this.DOM.nav.querySelector('.nav__button');
            // ..Its items.
            this.DOM.tocItems = Array.from(this.DOM.nav.querySelectorAll('.toc > .toc__item'));
            // Set the first one as current.
            this.DOM.tocItems[this.current].classList.add('toc__item--current');
            // Current chapter name (TOC Item that is selected and visible next to the "index+").
            this.DOM.chapter = this.DOM.nav.querySelector('.nav__chapter');
            // The "book" left/right cover indicators.
            this.DOM.indicators = Array.from(this.DOM.el.querySelectorAll('.slideshow__indicator'));
            // The one on the right side is not visible in the beginning while the one on the left is fully visible.
            // We will later change this as we turn the pages.
            TweenMax.set(this.DOM.indicators[1], {
                scaleX: 0
            });
            this.initEvents();
        }
        initEvents() {
            // Clicking on the next and previous arrows will turn the page to right or left.
            const arrowClickPrevFn = ()=>this.pagethrough('prev')
            ;
            const arrowClickNextFn = ()=>this.pagethrough('next')
            ;
            this.pagination.prevCtrl.addEventListener('click', arrowClickPrevFn);
            this.pagination.nextCtrl.addEventListener('click', arrowClickNextFn);
            // Clicking the TOC element reveals or hides the TOC.
            const navClickFn = ()=>this.toggleToc()
            ;
            this.DOM.navCtrl.addEventListener('click', navClickFn);
            // Clicking a link inside the TOC to go to a specific page
            this.DOM.tocItems.forEach((tocItem, pos)=>{
                tocItem.addEventListener('click', (ev)=>{
                    ev.preventDefault();
                    this.navigate(pos);
                });
            });
        }
        // This function is executed at the middle point of the turning pages animation.
        switchPage(newPagePos, direction = 'next') {
            const currentSlide = this.slides[this.current];
            const upcomingSlide = this.slides[newPagePos];
            // Set the upcoming slide as current.
            currentSlide.DOM.el.classList.remove('slide--current');
            currentSlide.resetItems();
            upcomingSlide.DOM.el.style.zIndex = 100;
            upcomingSlide.showItems(direction).then(()=>{
                upcomingSlide.DOM.el.classList.add('slide--current');
                upcomingSlide.DOM.el.style.zIndex = '';
                this.isAnimating = false;
            });
            // Update the side indicators.
            TweenMax.to(this.DOM.indicators[0], 0.5, {
                ease: Expo.easeOut,
                scaleX: 1 - newPagePos / (this.slidesTotal - 1)
            });
            TweenMax.to(this.DOM.indicators[1], 0.5, {
                ease: Expo.easeOut,
                scaleX: newPagePos / (this.slidesTotal - 1)
            });
            // Update TOC
            this.updateToc(newPagePos);
            // Update current value.
            this.current = newPagePos;
            // Update pagination ctrls visibility.
            this.pagination.nextCtrl.style.visibility = this.current === this.slidesTotal - 1 ? 'hidden' : 'visible';
            this.pagination.prevCtrl.style.visibility = this.current === 0 ? 'hidden' : 'visible';
        }
        // Go to the next or previous page.
        pagethrough(direction) {
            if (this.isAnimating || direction === 'next' && this.current === this.slidesTotal - 1 || direction === 'prev' && this.current === 0) return false;
            this.isAnimating = true;
            const newPagePos = direction === 'next' ? this.current + 1 : this.current - 1;
            this.pageturn.turn(direction, 1, ()=>this.switchPage(newPagePos, direction)
            );
        }
        // Show or hide the TOC.
        toggleToc() {
            if (this.isTocOpen) {
                this.DOM.chapter.style.opacity = 1;
                this.DOM.nav.classList.remove('nav--open');
                TweenMax.set(this.DOM.tocItems, {
                    opacity: 0
                });
            } else {
                this.DOM.chapter.style.opacity = 0;
                this.DOM.nav.classList.add('nav--open');
                TweenMax.staggerTo(this.DOM.tocItems, 1, {
                    ease: Expo.easeOut,
                    startAt: {
                        opacity: 0,
                        y: 10
                    },
                    opacity: 1,
                    y: 0
                }, 0.02);
            }
            this.isTocOpen = !this.isTocOpen;
        }
        // Update the current TOC item.
        updateToc(newpos) {
            this.DOM.tocItems[this.current].classList.remove('toc__item--current');
            this.DOM.tocItems[newpos].classList.add('toc__item--current');
            this.DOM.chapter.innerHTML = this.DOM.tocItems[newpos].querySelector('.toc__item-title').innerHTML;
        }
        // Clicking a link inside the TOC will turn as many pages needed and jump to the specified page.
        navigate(newPagePos) {
            if (this.isAnimating || newPagePos === this.current) return false;
            this.isAnimating = true;
            // Close after clicking.
            this.toggleToc();
            const direction = newPagePos > this.current ? 'next' : 'prev';
            // Turn [this.current-newPagePos] pages.
            this.pageturn.turn(direction, Math.abs(this.current - newPagePos), ()=>this.switchPage(newPagePos, direction)
            );
        }
    }
    // Initialize the slideshow.
    const slideshow = new Slideshow(document.querySelector('.slideshow'));
    // Preload all the images in the page.
    imagesLoaded(document.querySelectorAll('.slide__figure-img'), {
        background: true
    }, ()=>document.body.classList.remove('loading')
    );
}
},{}]},["3vgOL","igPAH"], "igPAH", "parcelRequiree1ac")

//# sourceMappingURL=index.ff8d8a7b.js.map
