var Q = Object.defineProperty, Z = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty, G = Object.prototype.propertyIsEnumerable;
var B = (e, t, n) => t in e ? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, g = (e, t) => {
  for (var n in t || (t = {}))
    Y.call(t, n) && B(e, n, t[n]);
  if (k)
    for (var n of k(t))
      G.call(t, n) && B(e, n, t[n]);
  return e;
}, _ = (e, t) => Z(e, J(t));
var F = (e, t) => {
  var n = {};
  for (var i in e)
    Y.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && k)
    for (var i of k(e))
      t.indexOf(i) < 0 && G.call(e, i) && (n[i] = e[i]);
  return n;
};
var H = (e, t, n) => new Promise((i, r) => {
  var o = (c) => {
    try {
      a(n.next(c));
    } catch (d) {
      r(d);
    }
  }, s = (c) => {
    try {
      a(n.throw(c));
    } catch (d) {
      r(d);
    }
  }, a = (c) => c.done ? i(c.value) : Promise.resolve(c.value).then(o, s);
  a((n = n.apply(e, t)).next());
});
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CHHHE9GZ.js";
import "./_sentry-release-injection-file-5vXBPsuY.js";
try {
  let e = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {}, t = new e.Error().stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9bf0c79b-76da-48ca-85b8-9e15f61dc1d1", e._sentryDebugIdIdentifier = "sentry-dbid-9bf0c79b-76da-48ca-85b8-9e15f61dc1d1");
} catch (e) {
}
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, previousDevice = window.device, device$1 = {}, changeOrientationList = [];
window.device = device$1;
var documentElement = window.document.documentElement, userAgent = window.navigator.userAgent.toLowerCase(), television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"];
device$1.macos = function() {
  return find("mac");
};
device$1.ios = function() {
  return device$1.iphone() || device$1.ipod() || device$1.ipad();
};
device$1.iphone = function() {
  return !device$1.windows() && find("iphone");
};
device$1.ipod = function() {
  return find("ipod");
};
device$1.ipad = function() {
  var e = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return find("ipad") || e;
};
device$1.android = function() {
  return !device$1.windows() && find("android");
};
device$1.androidPhone = function() {
  return device$1.android() && find("mobile");
};
device$1.androidTablet = function() {
  return device$1.android() && !find("mobile");
};
device$1.blackberry = function() {
  return find("blackberry") || find("bb10");
};
device$1.blackberryPhone = function() {
  return device$1.blackberry() && !find("tablet");
};
device$1.blackberryTablet = function() {
  return device$1.blackberry() && find("tablet");
};
device$1.windows = function() {
  return find("windows");
};
device$1.windowsPhone = function() {
  return device$1.windows() && find("phone");
};
device$1.windowsTablet = function() {
  return device$1.windows() && find("touch") && !device$1.windowsPhone();
};
device$1.fxos = function() {
  return (find("(mobile") || find("(tablet")) && find(" rv:");
};
device$1.fxosPhone = function() {
  return device$1.fxos() && find("mobile");
};
device$1.fxosTablet = function() {
  return device$1.fxos() && find("tablet");
};
device$1.meego = function() {
  return find("meego");
};
device$1.cordova = function() {
  return window.cordova && location.protocol === "file:";
};
device$1.nodeWebkit = function() {
  return _typeof(window.process) === "object";
};
device$1.mobile = function() {
  return device$1.androidPhone() || device$1.iphone() || device$1.ipod() || device$1.windowsPhone() || device$1.blackberryPhone() || device$1.fxosPhone() || device$1.meego();
};
device$1.tablet = function() {
  return device$1.ipad() || device$1.androidTablet() || device$1.blackberryTablet() || device$1.windowsTablet() || device$1.fxosTablet();
};
device$1.desktop = function() {
  return !device$1.tablet() && !device$1.mobile();
};
device$1.television = function() {
  for (var e = 0; e < television.length; ) {
    if (find(television[e]))
      return !0;
    e++;
  }
  return !1;
};
device$1.portrait = function() {
  return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? includes(screen.orientation.type, "portrait") : device$1.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? Math.abs(window.orientation) !== 90 : window.innerHeight / window.innerWidth > 1;
};
device$1.landscape = function() {
  return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? includes(screen.orientation.type, "landscape") : device$1.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? Math.abs(window.orientation) === 90 : window.innerHeight / window.innerWidth < 1;
};
device$1.noConflict = function() {
  return window.device = previousDevice, this;
};
function includes(e, t) {
  return e.indexOf(t) !== -1;
}
function find(e) {
  return includes(userAgent, e);
}
function hasClass(e) {
  return documentElement.className.match(new RegExp(e, "i"));
}
function addClass(e) {
  var t = null;
  hasClass(e) || (t = documentElement.className.replace(/^\s+|\s+$/g, ""), documentElement.className = t + " " + e);
}
function removeClass(e) {
  hasClass(e) && (documentElement.className = documentElement.className.replace(" " + e, ""));
}
device$1.ios() ? device$1.ipad() ? addClass("ios ipad tablet") : device$1.iphone() ? addClass("ios iphone mobile") : device$1.ipod() && addClass("ios ipod mobile") : device$1.macos() ? addClass("macos desktop") : device$1.android() ? device$1.androidTablet() ? addClass("android tablet") : addClass("android mobile") : device$1.blackberry() ? device$1.blackberryTablet() ? addClass("blackberry tablet") : addClass("blackberry mobile") : device$1.windows() ? device$1.windowsTablet() ? addClass("windows tablet") : device$1.windowsPhone() ? addClass("windows mobile") : addClass("windows desktop") : device$1.fxos() ? device$1.fxosTablet() ? addClass("fxos tablet") : addClass("fxos mobile") : device$1.meego() ? addClass("meego mobile") : device$1.nodeWebkit() ? addClass("node-webkit") : device$1.television() ? addClass("television") : device$1.desktop() && addClass("desktop");
device$1.cordova() && addClass("cordova");
function handleOrientation() {
  device$1.landscape() ? (removeClass("portrait"), addClass("landscape"), walkOnChangeOrientationList("landscape")) : (removeClass("landscape"), addClass("portrait"), walkOnChangeOrientationList("portrait")), setOrientationCache();
}
function walkOnChangeOrientationList(e) {
  for (var t = 0; t < changeOrientationList.length; t++)
    changeOrientationList[t](e);
}
device$1.onChangeOrientation = function(e) {
  typeof e == "function" && changeOrientationList.push(e);
};
var orientationEvent = "resize";
Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (orientationEvent = "orientationchange");
window.addEventListener ? window.addEventListener(orientationEvent, handleOrientation, !1) : window.attachEvent ? window.attachEvent(orientationEvent, handleOrientation) : window[orientationEvent] = handleOrientation;
handleOrientation();
function findMatch(e) {
  for (var t = 0; t < e.length; t++)
    if (device$1[e[t]]())
      return e[t];
  return "unknown";
}
device$1.type = findMatch(["mobile", "tablet", "desktop"]);
device$1.os = findMatch(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television"]);
function setOrientationCache() {
  device$1.orientation = findMatch(["portrait", "landscape"]);
}
setOrientationCache();
var objectAssignDeep$1 = { exports: {} }, hasRequiredObjectAssignDeep;
function requireObjectAssignDeep() {
  if (hasRequiredObjectAssignDeep) return objectAssignDeep$1.exports;
  hasRequiredObjectAssignDeep = 1;
  function e(o) {
    return o === null ? "null" : typeof o == "undefined" ? "undefined" : typeof o == "object" ? Array.isArray(o) ? "array" : "object" : typeof o;
  }
  function t(o) {
    return e(o) === "object" ? i(o) : e(o) === "array" ? n(o) : o;
  }
  function n(o) {
    return o.map(t);
  }
  function i(o) {
    const s = {};
    for (const a in o)
      o.hasOwnProperty(a) && (s[a] = t(o[a]));
    return s;
  }
  function r(o, s = [], a = {}) {
    const c = {
      arrayBehaviour: a.arrayBehaviour || "replace"
      // Can be "merge" or "replace".
    }, d = s.map((l) => l || {}), u = o || {};
    for (let l = 0; l < d.length; l++) {
      const p = d[l], f = Object.keys(p);
      for (let m = 0; m < f.length; m++) {
        const I = f[m], A = p[I], h = e(A), M = e(u[I]);
        if (h === "object")
          if (M !== "undefined") {
            const E = M === "object" ? u[I] : {};
            u[I] = r({}, [E, i(A)], c);
          } else
            u[I] = i(A);
        else if (h === "array")
          if (M === "array") {
            const E = n(A);
            u[I] = c.arrayBehaviour === "merge" ? u[I].concat(E) : E;
          } else
            u[I] = n(A);
        else
          u[I] = A;
      }
    }
    return u;
  }
  return objectAssignDeep$1.exports = function(s, ...a) {
    return r(s, a);
  }, objectAssignDeep$1.exports.noMutate = function(...s) {
    return r({}, s);
  }, objectAssignDeep$1.exports.withOptions = function(s, a, c) {
    return r(s, a, c);
  }, objectAssignDeep$1.exports;
}
var objectAssignDeepExports = requireObjectAssignDeep();
const objectAssignDeep = /* @__PURE__ */ getDefaultExportFromCjs(objectAssignDeepExports);
window.dbg || (window.dbg = console.debug.bind(console, "%cDBG", "color: green"));
window.info || (window.info = console.log.bind(console, "%cINFO", "color: blue"));
window.warn || (window.warn = console.warn.bind(console, "%cWARN", "color: orange"));
window.err || (window.err = console.error.bind(console, "%cERR", "color: red"));
function getQueryVariables() {
  if (window.location.search.length <= 0) return {};
  const e = window.location.search.substring(1).split("&"), t = {};
  for (var n = 0; n < e.length; n++) {
    var i = e[n], r = !0;
    const o = i.search("=");
    o > 0 && (r = decodeURIComponent(i.substring(o + 1)), i = i.substring(0, o)), t[decodeURIComponent(i)] = r;
  }
  return t;
}
const urlParams = window.urlParams = getQueryVariables();
function absoluteUrl$1(e) {
  return e.startsWith("http") || e.startsWith("file") ? e : (config.frontendRootPath || location.protocol + "//" + location.host + location.pathname.match(/.*\//)[0]) + e;
}
window.absoluteUrl = absoluteUrl$1;
function absoluteRunnerUrl(e) {
  return e.startsWith("http") ? e : (config.runnerRootPath || location.protocol + "//" + location.host) + e;
}
window.absoluteRunnerUrl = absoluteRunnerUrl;
function importElement(e, t, n, i, r, o = !0) {
  const s = absoluteUrl$1(n), a = Array.prototype.slice.call(e.childNodes).find((c) => c.tagName && c.src && c.tagName.toLowerCase() == t && absoluteUrl$1(c.src) == s);
  return a ? (i && a.classList.add(...i), Promise.resolve(a)) : (dbg("import", t, n, "classes", i, r), new Promise(function(c, d) {
    const u = document.createElement(t);
    var l;
    function p() {
      clearTimeout(l), c(u);
    }
    function f(I) {
      l && (clearTimeout(l), l = void 0, err(t, s, "load error", I), e.removeChild(u), I instanceof Error ? d(I) : d(new Error(`${t}: failed to load ${s} (${I})`)));
    }
    if (u.onload = p, u.onerror = f, r)
      for (const [I, A] of Object.entries(r))
        u.setAttribute(I, A);
    i && u.classList.add(...i);
    let m;
    if (o)
      try {
        let I;
        [m, I] = request2("GET", s, void 0, void 0, "blob"), I.then((A) => {
          l && (u.src = URL.createObjectURL(A));
        }).catch(f);
      } catch (I) {
        err("failed to request using xhr (blob support?):", I), u.src = s;
      }
    else
      u.src = s;
    e.appendChild(u), l = setTimeout(function() {
      f("timeout"), m && !m.status && m.abort();
    }, config.importTimeout);
  }));
}
function preloadImage(e) {
  const t = document.getElementById("n2i");
  return importElement(t, "img", e, ["n2i-hidden"]).then(function(n) {
    t.removeChild(n);
  });
}
function importScript(e, t, n = config.importScriptAsBlob) {
  return importElement(document.head, "script", e, void 0, t, n);
}
window.importScript = importScript;
function importLink(e, t, n, i) {
  i = i || document;
  const r = absoluteUrl$1(n);
  return Array.prototype.slice.call(i.head.childNodes).find((s) => s.tagName && s.rel && s.href && s.tagName.toLowerCase() == "link" && s.rel == e && (!s.type || s.type == t) && absoluteUrl$1(s.href) == r) ? Promise.resolve() : (dbg("import link", e, t, n, "to", i), new Promise(function(s, a) {
    const c = document.createElement("link");
    c.rel = e, t && (c.type = t), c.href = r, i.head.appendChild(c), s();
  }));
}
window.importLink = importLink;
function debounce(e, t) {
  var n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, i);
    }, t);
  };
}
window.debounce = debounce;
function request3$1(e, t, n) {
  const {
    headers: i,
    data: r,
    responseType: o,
    timeout: s,
    withCredentials: a
  } = n, c = new XMLHttpRequest();
  return [c, new Promise((d, u) => {
    let l;
    c.open(e, t);
    const p = c.onerror = (f) => {
      clearTimeout(l), l = void 0;
      let m = new Error(`xhr: failed to load ${t} (${f})`);
      c.status == 429 && (m.retryDelay = c.getResponseHeader("Retry-After")), m.httpStatus = f == "timeout" ? 408 : c.status, u(m);
    };
    if (c.onload = () => {
      clearTimeout(l), l = void 0, c.status >= 200 && c.status < 300 ? d(c.response) : c.onerror(`http error ${c.status}`);
    }, o && (c.responseType = o), i)
      for (const f of Object.keys(i))
        c.setRequestHeader(f, i[f]);
    s && (l = setTimeout(function() {
      p("timeout"), c && !c.status && c.abort();
    }, s)), c.withCredentials = a != null ? a : !1, c.send(r);
  })];
}
window.request3 = request3$1;
function request2(e, t, n, i, r, o, s = !1) {
  return request3$1(e, t, { headers: n, data: i, responseType: r, timeout: o, withCredentials: s });
}
window.request2 = request2;
function request$1() {
  return request2.apply(null, arguments)[1];
}
window.request = request$1;
function str2arr$1(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
window.str2arr = str2arr$1;
const timeEvents = {};
function dispatchCustomEvent$1(e, t, n, i) {
  !i && config.timeEvents && timeEvents[e] === void 0 && (timeEvents[e] = 0, addEventListener(e + "_start", function(o) {
    dbg("event", e + "_start", o.detail), console.time(e + timeEvents[e]);
  }), addEventListener(e + "_end", function(o) {
    dbg("event", e + "_end", o.detail), console.timeEnd(e + timeEvents[e]++);
  }), addEventListener(e + "_fail", function(o) {
    dbg("event", e + "_fail", o.detail), console.timeEnd(e + timeEvents[e]++);
  }), addEventListener(e, function(o) {
    const s = timeEvents[e]++;
    dbg("event", e, o.detail), console.time(e + s), setTimeout(function() {
      console.timeEnd(e + s);
    }, 10);
  }));
  const r = e + (n ? "_" + n : "");
  dispatchEvent(new CustomEvent(r, { detail: t }));
}
window.dispatchCustomEvent = dispatchCustomEvent$1;
function dispatchCustomEventStart$1(e, t) {
  return dispatchCustomEvent$1(e, t, "start");
}
window.dispatchCustomEventStart = dispatchCustomEventStart$1;
function dispatchCustomEventEnd$1(e, t) {
  return dispatchCustomEvent$1(e, t, "end");
}
window.dispatchCustomEventEnd = dispatchCustomEventEnd$1;
function dispatchCustomEventFail$1(e, t) {
  return dispatchCustomEvent$1(e, t, "fail");
}
window.dispatchCustomEventFail = dispatchCustomEventFail$1;
function captureException$1(e, t) {
  window.sentryCaptureException && (e instanceof Error || (warn("throwing a non-error object will result in a bad stack trace"), e = new Error(e)), t ? setTimeout(() => {
    captureException$1(new Error(`${t}: ${e.message}`));
  }) : sentryCaptureException(e));
}
window.asyncThrow = window.n2iCaptureException = captureException$1;
function captureExceptionHandler(e, t) {
  return function(n) {
    e && err(e, n), captureException$1(n, t);
  };
}
window.n2iCaptureExceptionHandler = captureExceptionHandler;
function getWindowWidth() {
  return window.innerWidth;
}
function getWindowHeight() {
  return window.innerHeight;
}
function getWindowTopOffset() {
  const e = document.getElementById("n2i");
  try {
    return e.getClientRects()[0].height;
  } catch (t) {
    return 0;
  }
}
function getWindowBottomOffset() {
  const e = document.getElementById("n2i-footer");
  try {
    return e.getClientRects()[0].height;
  } catch (t) {
    return 0;
  }
}
function getWindowSideOffset() {
  let e = config.sideOffset;
  return e > 0 && e < 1 && (e *= window.innerWidth), e;
}
function getWindowResolution() {
  let e = getWindowWidth() - getWindowSideOffset() * 2, t = getWindowHeight() - getWindowTopOffset() - getWindowBottomOffset(), n;
  const i = config.naturalOrientation;
  if (i == "landscape" && e < t || i == "portrait" && e > t) {
    const l = e;
    e = t, t = l, n = 1;
  } else
    n = 0;
  const r = Math.min(Math.max(e / t, config.minAR), config.maxAR);
  e = Math.min(t * r, e), t = Math.min(e / r, t), e *= window.devicePixelRatio, t *= window.devicePixelRatio;
  const o = e, s = config.fixedSize, a = config.fixedDensity, c = s || config.minSize, d = s || config.maxSize;
  c && (e = Math.max(e, c), t = Math.max(e / r, c), e = t * r), d && (e = Math.min(e, d), t = Math.min(e / r, d), e = t * r), e = Math.round(e), t = Math.round(t);
  const u = a || Math.round(e / o * window.devicePixelRatio * 150);
  return { width: e, height: t, density: u, orientation: n };
}
function postMessage(e) {
  dbg("event", e), window.postMessage(e), window.parent !== window.self && window.parent.postMessage(e, "*");
}
window.n2iPostMessage = postMessage;
function createHtmlElement(e, t, n, i, r) {
  let o = document.getElementById(n), s = !1;
  if (o || (o = document.createElement(t), n && (o.id = n), s = !0), i)
    for (const a of i)
      o.classList.add(a);
  return r && (o.innerText = r), s && e.appendChild(o), o;
}
window.n2iCreateHtmlElement = createHtmlElement;
function queryEncode(e) {
  if (!Object.keys(e).length) return "";
  let t = [];
  for (const n in e)
    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return "?" + t.join("&");
}
window.queryEncode = queryEncode;
function sendEvent(e, t, n = !1) {
  var r, o, s;
  (r = t.timestamp) != null || (t.timestamp = Date.now()), (o = t.runnerConfig) != null || (t.runnerConfig = config.runnerConfig), (s = t.campaignId) != null || (t.campaignId = config.campaignId);
  let i;
  typeof t == "object" && !Array.isArray(t) && t !== null ? i = t : i = { raw_event: t };
  try {
    BACKEND.sendEvent(e, i).catch(captureExceptionHandler(!1, "sendEvent"));
  } catch (a) {
    n || info("Could not send event, sending later: ", a), dispatchCustomEvent$1("n2i_sendevent_failed", a), setTimeout((c, d) => {
      sendEvent(c, d, !0);
    }, 1e3, e, i);
  }
}
window.sendEvent = sendEvent;
function getInputInformation$1(e) {
  var t, n, i, r, o, s, a, c, d, u, l, p, f, m, I, A, h;
  return {
    type: (t = e.changedTouches) != null && t[0] ? "touch" : "mouse",
    screenX: (o = (r = (i = (n = e.changedTouches) == null ? void 0 : n[0]) == null ? void 0 : i.screenX) != null ? r : e.screenX) != null ? o : void 0,
    screenY: (d = (c = (a = (s = e.changedTouches) == null ? void 0 : s[0]) == null ? void 0 : a.screenY) != null ? c : e.screenY) != null ? d : void 0,
    pageX: (f = (p = (l = (u = e.changedTouches) == null ? void 0 : u[0]) == null ? void 0 : l.pageX) != null ? p : e.pageX) != null ? f : void 0,
    pageY: (h = (A = (I = (m = e.changedTouches) == null ? void 0 : m[0]) == null ? void 0 : I.pageY) != null ? A : e.pageY) != null ? h : void 0
  };
}
window.getInputInformation = getInputInformation$1;
function restrictInput(e, t) {
  function n(o, s) {
    const a = document.getElementById("n2i-canvas").getClientRects()[0];
    return o = (o - a.left) / (a.right - a.left), s = (s - a.top) / (a.bottom - a.top), [o, s];
  }
  function i(o, s) {
    const [a, c] = n(o, s), { minX: d, minY: u, maxX: l, maxY: p } = t;
    return a < d || a > l || c < u || c > p;
  }
  const r = e.changedTouches ? e.changedTouches[0] : e;
  return i(r.clientX, r.clientY) ? (info(`rejected input at ${r.clientX}x${r.clientY}`), e.stopImmediatePropagation(), !0) : !1;
}
function sleep(e) {
  return new Promise((t) => setTimeout(t, e));
}
function setIntervalImmediate(e, t, ...n) {
  return {
    timeout: setTimeout(e, ...n),
    interval: setInterval(e, t, ...n)
  };
}
function clearIntervalImmediate(e) {
  clearTimeout(e.timeout), clearInterval(e.interval);
}
function setTimeoutSyncIf0(e, t, ...n) {
  if (t <= 0)
    e(...n);
  else
    return setTimeout(e, t, ...n);
}
window.n2iSetTimeoutSyncIf0 = setTimeoutSyncIf0;
function Promisify(e) {
  try {
    const t = e();
    return Promise.resolve(t);
  } catch (t) {
    return Promise.reject(t);
  }
}
window.n2iPromisify = Promisify;
function addParamToLocation(e, t) {
  const n = new URL(window.location.href);
  n.searchParams.set(e, t), window.history.replaceState({}, null, n.href);
}
window.n2iAddParamToLocation = addParamToLocation;
function removeParamsFromLocation(...e) {
  const t = new URL(window.location.href);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    t.searchParams.has(i) && t.searchParams.delete(i);
  }
  window.history.replaceState({}, null, t.href);
}
window.n2iRemoveParamsFromLocation = removeParamsFromLocation;
function openUrlWithPolicy(e, t) {
  let n = !1;
  switch (t) {
    case "disable":
      break;
    case "external":
      dispatchCustomEvent$1("n2i_opened_window", { window: window.open(e), url: e });
      break;
    case "push":
      config.messageLevel = 100, n2iPageClosedReason = "navigating", window.location.href = e;
      break;
    case "replace":
      config.messageLevel = 100, n2iPageClosedReason = "navigating", window.location.replace(e);
      break;
    case "notify":
      dispatchCustomEvent$1("n2i_open_url_notify", e);
      break;
    case "iframeWithHeader":
      n = !0;
    // fallthrough
    case "iframe":
      const i = new URL(e);
      location.protocol == "https:" && i.protocol == "http:" && (warn("cannot load HTTP iframe in HTTPS document, rewrite URL to HTTPS"), i.protocol = "https:"), n2iLoadIframe(i.href, n);
      break;
    default:
      err(`unknown url policy ${t}`);
      break;
  }
}
window.n2iOpenUrlWithPolicy = openUrlWithPolicy;
function openUrlWithConfig(e, t) {
  if (typeof t == "object") {
    let n = !1;
    for (const [i, r] of t)
      if (new RegExp(i).exec(e)) {
        n = !0, openUrlWithPolicy(e, r);
        break;
      }
    n || err(`no matching pattern for url ${e}`);
  } else typeof t == "string" && openUrlWithPolicy(e, t);
}
window.n2iOpenUrlWithConfig = openUrlWithConfig;
let toastTimer;
function showToast(e, t) {
  var i;
  const n = document.getElementById("n2i-toast");
  n.innerHTML = e;
  for (const r of n.style)
    n.style.removeProperty(r);
  if (t != null && t.style)
    for (const [r, o] of Object.entries(t.style))
      n.style[r] = o;
  n.classList.remove("n2i-hidden", "n2i-hidden-fadeout"), clearTimeout(toastTimer), toastTimer = setTimeout(() => {
    n.classList.add("n2i-hidden-fadeout");
  }, (i = t == null ? void 0 : t.duration) != null ? i : config.toastDuration);
}
window.n2iShowToast = showToast;
function importModule(e, t) {
  return import(
    /* @vite-ignore */
    `${location.origin}${location.pathname}${e}`
  );
}
window.n2iImportModule = importModule;
let embed = !0;
try {
  embed = window.self != window.top;
} catch (e) {
}
const defaultConfig = {
  styles: [],
  domStyles: {},
  addons: [],
  player: null,
  lazyPlayerInit: !1,
  backend: null,
  adNetwork: null,
  adNetworkTest: !1,
  ad: {
    loadErrorFatal: !1,
    dismissedOnShowError: !0,
    popStateTimeout: 200
  },
  title: "PIP3D",
  favicon: null,
  console: !1,
  status: !1,
  preloadImages: [],
  beautifulTransition: !0,
  appAdditionalDelay: 0,
  appRestoreAdditionalDelay: 0,
  latency: 3,
  // legacy, use jitterBufferMax instead
  clientLatency: 1,
  // legacy, use jitterBufferMin instead
  downJitterSampleTime: -1,
  jitterBufferMin: -1,
  jitterBufferMax: -1,
  jitterBufferFactor: -1,
  jitterBufferTolerance: -1,
  workarounds: "",
  connectAudioAtFirstFrame: !1,
  audioTimeout: 1e4,
  pip3dConnectTimeout: 2e4,
  importTimeout: 1e4,
  importScriptAsBlob: !0,
  startApp: !0,
  hideUntilAppStarted: !1,
  hideUntilAppStartedTimeout: 0,
  hideUntilAppStartedEvent: "n2i_app_start_end",
  retryOnDisconnected: !1,
  retryOnDisconnectedReasons: [
    "invisibility"
  ],
  retryOnLoadError: !0,
  retryOnConnectionTimeout: !0,
  retryOnError: !0,
  retryOnTimeout: !1,
  retryOtherRunner: !0,
  closeOnDisconnected: !1,
  backOnDisconnected: !1,
  showMessages: !1,
  messageLevel: 10,
  disconnectedMessage: "Disconnected",
  inactivityDisconnectedMessage: "Disconnected because of inactivity",
  timeoutMessage: "Timeout",
  showReloadOnDisconnect: !0,
  reloadMessage: "Play again",
  disableMotion: !0,
  urlOpen: "external",
  dataEventFallback: !1,
  clearUrlQuery: !1,
  clickOnConnectX: -1,
  clickOnConnectY: -1,
  clickOnConnectOrientation: -1,
  clickOnConnectDelay: 0,
  backupAtConnect: !1,
  backupAtConnectAfterInputs: 0,
  backupCustomPacketSplitSize: 3e4,
  appBackupsName: "appBackups",
  hideUIWhilePlaying: !1,
  sendPlayerEvents: !0,
  backOnPlaybackEnd: !1,
  drawDetectors: {},
  drawDetectorsThreshold: -1,
  initWidth: -1,
  initHeight: -1,
  initRotation: -1,
  initDensity: -1,
  maxRetry: 3,
  maxRetryBeforeConnected: 3,
  maxRetryOnError: 1,
  maxRetryDelay: 15e3,
  minRetryDelay: 500,
  resetRetryDelayAfter: 5e3,
  cdnJsRetry: 2,
  idleDelay: 1e3,
  inactivityDisconnectDelay: 0,
  inactivityDisconnectDelay2: 0,
  invisibilityDisconnectDelay: 0,
  invisibilityDisconnectDelay2: 0,
  cancelInactivityOnInput: !1,
  pip3dJsFromFrontend: !1,
  a2hs: !0,
  a2hsRepeat: !1,
  a2hsEvents: {
    default: [
      "n2i_show_a2hs",
      "n2i_show_a2hs_from_url"
    ]
  },
  a2hsPromptIframe: !1,
  // absolute, or static url relative to imagesCommonBaseUrl
  a2hsPrivateUrlRegex: "^n2i://a2hs(/.+)?$",
  minAR: 0,
  maxAR: 99,
  postMessage: [],
  postMessage2: [],
  aliveInterval: 5e3,
  appByTitleId: [],
  duration: 0,
  autofitOnConnect: !1,
  autofitOnRestore: !1,
  menu: !1,
  menuButtons: {},
  menuFullscreenButton: !0,
  menuBackButton: !1,
  autoUnmute: !0,
  muteOnBlur: !1,
  apiKeyHeader: "X-API-KEY",
  compressUp: !1,
  cta: {
    enabled: !1,
    mode: "redirect",
    // redirect / overlay / auto
    events: ["n2i_disconnected"],
    url: "call-to-action/"
  },
  android: { cta: {} },
  ios: { cta: {} },
  deeplinksService: !1,
  offlineStream: {
    enabled: !1,
    webglVersion: 1048576,
    loop: !1
  },
  restrictFirstInput: {
    enabled: !1,
    minX: 0,
    minY: 0,
    maxX: 1,
    maxY: 1
  },
  maxFps: -1,
  getContainerOnInit: !0,
  keepLastFrameVisible: !1,
  reuseConnectionId: !1,
  // reuse connectionId during browser session
  reuseSessionIdOnRetry: !1,
  sendEvent: {},
  // sendEvent: object{map{list[]}}
  heartbeat: {
    enabled: !1,
    interval: 5e3,
    lastBreath: 3e4
  },
  countdown: {
    enabled: !1,
    color: "white",
    size: 1
  },
  api: {
    enabled: !0,
    back: !0,
    disconnect: !0,
    sendCustomPacket: !0,
    sendDeeplink: !0,
    unloadIframe: !0,
    ads: !0
  },
  tutorial: {
    enabled: !1,
    startEvent: "n2i_pip3d_first_frame",
    steps: []
  },
  invertNaturalOrientation: !1,
  graph: !1,
  infos: !1,
  networkQuality: {
    enabled: !0,
    goodThreshold: 150,
    // in ms
    badThreshold: 300,
    // in ms
    throttleDelay: 3e3,
    // in ms
    gracePeriod: 1e4
    // in ms
  },
  disableRestore: !1,
  disableRestoreOnNavigate: !0,
  statusDataThrottling: 0,
  // in ms
  cropCanvas: {
    enabled: !1,
    minX: 0,
    minY: 0,
    maxX: 1,
    maxY: 1
  },
  pip3dSettings: {},
  pip3dAudioSettings: {},
  wakeLock: !0,
  shareMode: "open",
  facebook: !1,
  facebookUrlOpen: "push",
  footerStyle: {},
  connectionGlobalTimeout: 0,
  // in ms
  forwardBack: !1,
  preventExit: !1,
  iframe: {
    enabled: !1,
    closeOnDisconnected: !0,
    header: {
      enabled: !1,
      height: 5,
      style: {
        background: "white",
        fontSize: "3vh"
      }
    }
  },
  waitVisible: !0,
  connectedEventKeys: [
    "pip3dLibsVersion",
    "newClient",
    "restored"
  ],
  storeClientId: embed,
  initValues: {},
  toastDuration: 2e3,
  sentry: {
    enabled: !1,
    env: "dev",
    dsn: "https://23e2954118f80d3d9f84667491a5a951@o990538.ingest.us.sentry.io/4509548295749632",
    tracesSampleRate: 1
  },
  newClient: {},
  returningClient: {},
  sideOffset: 0,
  setLocale: !1,
  a2hsForwardQueries: !1,
  waitValidWindowSize: !0,
  waitValidWindowSizeTimeout: 5e3,
  splash: !1,
  speedtest: {
    enabled: !1,
    maxJitter: 0,
    // maximal jitter to continue initialization
    maxDuration: 0,
    // max duration to interpret results
    ignoreErrors: !0,
    config: {
      downloadApiUrl: "/service/__down",
      uploadApiUrl: "/service/__up",
      latencyPercentile: 0.9,
      measurements: [
        { type: "latency", numPackets: 50 }
      ]
    }
  }
}, available_styles = window.available_styles = {}, available_addons = window.available_addons = {}, available_players = window.available_players = {}, available_backends = window.available_backends = {};
window.available_ad_networks = {};
const pointer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAA0GVYSWZJSSoACAAAAAoAAAEEAAEAAAAAAQAAAQEEAAEAAAAAAQAAAgEDAAMAAACGAAAAEgEDAAEAAAABAAAAGgEFAAEAAACMAAAAGwEFAAEAAACUAAAAKAEDAAEAAAACAAAAMQECAA0AAACcAAAAMgECABQAAACqAAAAaYcEAAEAAAC+AAAAAAAAAAgACAAIAEgAAAABAAAASAAAAAEAAABHSU1QIDIuMTAuMzYAADIwMjQ6MDI6MjggMTM6NTQ6NTkAAQABoAMAAQAAAAEAAAAAAAAAD7suFQAAAYNpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAHMVfU6UiFQc7iHTIUJ0siIo6ahWKUCHUCq06mFz6BU0akhQXR8G14ODHYtXBxVlXB1dBEPwAcXZwUnSREv+XFFrEeHDcj3f3HnfvAKFRYZrVNQtoum2mkwkxm1sVQ68QEEUYY5iWmWXMSVIKvuPrHgG+3sV5lv+5P0efmrcYEBCJZ5lh2sQbxFObtsF5nzjCSrJKfE48atIFiR+5rnj8xrnossAzI2YmPU8cIRaLHax0MCuZGvEkcUzVdMoXsh6rnLc4a5Uaa92TvzCc11eWuU4ziiQWsQQJIhTUUEYFNuK06qRYSNN+wsc/5PolcinkKoORYwFVaJBdP/gf/O7WKkyMe0nhBND94jgfw0BoF2jWHef72HGaJ0DwGbjS2/5qA5j5JL3e1mJHQP82cHHd1pQ94HIHGHwyZFN2pSBNoVAA3s/om3LAwC3Qu+b11trH6QOQoa5SN8DBITBSpOx1n3f3dPb275lWfz8Hz3LioThxJgAADXhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6YjIzMTU1YWEtNjEyMy00NGMyLWE2OWQtODY0MGQ4YmNhYTYzIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2MGYyMDllLTc2MGEtNGU5OC1iZDE3LTRiZjUxMTBmYWJiZCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmRjM2ZmYmI2LWI2MDItNGM0OC05NGI5LTU2ZTE0N2Y0YWFlYyIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTcwOTEyNDg5OTM5MTMyNyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM2IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDowMjoyOFQxMzo1NDo1OSswMTowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MDI6MjhUMTM6NTQ6NTkrMDE6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZmUwZGFiMy1iNjAwLTQyZTItYjFiZi04Zjc1MjRlZTVhYjQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAyLTI4VDEzOjU0OjU5KzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Prhi3YkAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoAhwMNjtnwQk9AAAVVUlEQVR42u2de5RX1XXHP3cGeQiCODwEAYlBMWh8RqJGrcTYldasVmurWKMx0RRT06DWqInGJK2NiX1JfIT4qit9GExjTWqMJigqoDgj4IDooHFAGF4CgyDPYZjTP84l2pH5nXN/z3Pv/X7WusslvzP3nrvP2fvufR77gBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIUIjkgiCox44ATgWOCK+DgP6A4Pj/wJsAzbF/30LeCO+moGFwB6JUoh0MAq4GvhfYDNgSrzeBX4JfA04ROIVIjz6AZcCv42/1qZCVyfwFPB5oK/ELkRtGQBMBVZVUOl7ut4BvgMMUjMIUV32A74OtNdA8btfG4Br4zoJISrMGcDiABS/+9UCfEbNI0Rl6AvcA3QFqPx7ry7gh0AfNZcQ5WMs8FLAit/9mg+MU7PlC60DqAxnA/8NDCzy7zuBJmBu7KYvxQ4avgtsjdtt77qAUcB44EjgNOBE7FqCYtgMnAfMUhMKURwXAruK+ALvjI3GucABJTx/IHA+8FgJ9fhzNaMQyZlC8jn9dcCN8de83AwBvoUd9U+6duAKNacQyb78SZR/C3AddkFQpRkAfDMOH5IYAXkCQnjG/Enc7UeAkTWo5xjgFwnDgU+reYXomcPxX7+/DfhiAHX+CrDDs86bsJuRhBDd6IvdeeejSMuBowKq+3FAm2fdm9A6ASE+xD2eCrSYMHflHQq87vkO09TcQrzPmfit8FsMHFTE/euBU4GbgJ8DS7D7CDriqz3+t5/HZU6huPn/oZ5GoAv4lJpdCLuJZomH0iwj+WDfocDtFLdbcBXwA2B0wmeOAVZ63L8Z6KXmF3nneg9l2QpMSHDPYcB98de91GW9u4Dp2HUAScYEfAYGr1bzizwzEL8tvZcmuOclVGab8Ebg4gT1mOJxz/W8n5ZMiNxxg4eSPOx5r97AA1R+o8+9+O/9/x+P+12rbiDySD9gLe58fCM87tUfeJLq7fZ7AtjfczzAtWJwFUovJnLIpWWKkfersvLvvX7l6Qnc6HGvv1R3EHljpkMpVnt+Ge+ndvv+f+Tpnax33OfX6g4iT4zGvdnnOo/7XJxQYZcbB8CKhPe80KOeN+HeLDRC3ULkhWscCrEdd7bdodiReR8lXWESgv/S3vW4Fyc14N7gdJW6hcgLj1P6yP90HwVdu3btO6ZIWlpalnkagTs96vuo4x6PqluIPNAL946/cxz3GOXxRTXlwsMA7PBw4f/McY92oE7dQ2SdibhX3rkWx3y/kl/+7jQ2Ni71MAK3Ouo8CNjtuMcJ6h4i61zhUILZjr+vw73WfoUpM9hZCdcWZVdi2HmOe1ym7pFe5L75Md7x+1wPD2JUoQLGmNHlrrQxxuXiH4rNIlyIOSXKRsgAZN4AtDh+n+T4fUUF6766xLq1yADIAOSdsY7flzp+/4TjSz2mUhU3xowspW4e7zZW3UMGIOu4DvhoS/FXcnyJ76aThmUAcm8A3nP8PjLgdxtR4rsdoO4hA5B1Bjh+3+b4PeT98wNlAGQARGEKTZUZ7Fx5ob/t7fj7WuLK9ttRgmyEDEAm2C4RFO39CBkAdfIMs1UikAHIOhslgh5plwhkALLOMomgR1olAhkAdXIZRyEDkFlaJIIeWSoRyABknZckgh55USJIL5rD9aMem+57XwuCjMOQRthz9XrCGGMq2g5RVPD2pdR/Cza12B51EXkAWWYP8ILE8CHmSvllAPLCLyWCD/GYRKAQIC8cgs3qEykEgPjfRgFr1DXkAeSBVbiz4+SJ56X8MgB548cSwe/5kUSgECBv9I7DgGE5DwHWYvMJdqhLyAPIEx3AXRID06T88gDyygDs0uChOfUANgCH4U4UIuQBZJKtwD/m+P1vk/LLA9BYACwEJuTMA1gCHE/hDEhCHkAuxgKupPbpvKqJAaZI+WUAhGU2+ZoKuxP3CUhC5Io+wHyPMKvQ2XpdpsK4nu9R/2agn5pbYwDiwxwOvJnxMYBxjncUMgAiowZAaAxACCEDIISQARBCyAAIIWQAhBAyAEIIGQAhhAyAEEIGQAghAyCEkAEQQsgACCECoZdEIAp8HI4GJgGnA2OxeRCHxL9vjK+3sOclzMFmSdJRYUJ8gLTlAxgOfAt7EIpJeLUB38GeoiSESJEBOBCb4WhnEYrf/doN3A0MVvMLGYDwDcBfAKvLoPjdr3eAS9QFwu6covIyDjkhSDW4F/gqSigqAyADkEsDAPBb4Fxgu7pEOGgaUFSLs4FH0MyTDIDILecA90gMCgEUAqQnBFhhjBnjuP9KYHSCe14A/Mzj43QycCZwEjb78kjgAOwA41ZgDdACLABmAS+hdQgiQAMQ8ixAT9fKIp7T5nnvdby/oKg7o4HvJ7jXB6/V2HMbD1W3EzIARRqA1tbWlcU+q7m5+Xeez5neTU5DsWsHOih9+rEDuB+7qEkIGQDfq4rP3AEcHMvoQuyx4+Veh7AJ+IK6oAYBhQctLS3Ly3WvxsbGNxxF+gLXAHcBPwUaKvBKBwIPAQ9iT3QWGgTUIGAPrDLGHFLm564BRgTSDjOB87CDh0IGQAagWyVqaXyqxSzgj4Bd6pYKAcT7rKzgvVcH9J6T0DqEzHoARwOfA44FjgIGxtfuuBOuAF7D7lufC7wrD6CyX/8yeQGVWIdwKfDvUv/0G4A67CjvVcCJCf6uC3gBeBi7PHWDDEBwBqDNGDMq4XNW4ZeLYBMwHlgvE5BePgk0UZ454xnx/SplAIKeBszpOoQfS4XS6wFMwU4flXtjyQvAd4HfyAOojQdQrrp4PLMDGFfh8Y9UuNBpM1j/hF1FVoldZacCTwFPAxNz0gdMKBWp8jqE3tgcBSJF/APlXy1WKFPOQ8CwjIcAoaxEbKvAc11ZjtqAeoUA6eAi4L9q8Nx24JvYrDamSBmHHALkfR3CKcA8hQBhMxy4s0bPPigOOZ5Gu8wqRS3XIUzSGED4fAO/teJdzc3Nbxlj2Nc1efLk5yg+L90kYBHwJelrmQchjBldwXuPdBQpNH08BDgfuAN4DLuG5HXsWQgLgCeBadh1BaPUkpVhMHb9tiuGXJIwPlxQwvjAw0B/jQFkYhpyUbf26gdcjp1i7krYL5qAv8EmLRFl4mIPwS8otnNMnTr1+SKNwKvYxSQyAOk2AHsXA/UBbo7/v9QB5HbgltiYiBL5iUPY28rUSRYV0dCbYxdRBiC9BmAncBp2mXi5Z5JagbNCVq40zAIsAI6v1uhxFEWbgUFJwkzgn+Nxis4eZKxZgHCfv7cNK1WHLuBW7JFpJjTlSsMg4EeqPCA1qLm5+a2ERvQ67H7zoXLYUklUYR27BbumZD95AMnZRYFsLpVcxhpF0bvYrDK+/A74bDxKLA8gPR5AtfgP7IxBMJ5AGjyAmrWeMeZA7P4AX8bF5U/SR1Xsg8/H4YBCgARsrOXDjTGnxl5Gl+efDMNmnjlH/T0TrOhpXcnei2QLmW6MvUQZAE+CyChjjKnD7iP3oT924cgV0p/U0hYr+BiPvjE6NgRtnjp3HzBABsCPJaFUxBgzGFjsWbxX3NDflS6li5UrV65Jmowk7h+jWltbfYzAKOCmXMfXCfhb7BbgnphvjDmxmhVat27d+oMPPrhcI/4aBAxoELCK+Qi2AWOpbDaqTHgAzzl+P77aFRo+fPjQSifRELX58pfrXh65DfoDV8oDcFOPXZ45uNJWu0hL31WiIZUHEIYH0FaM2+94ritH4ZvY5eQ168Bp8AD2AI87BL2shuMCddhjrkSKKbfyx/d0JSg9HDhGIYAb11HSH6lx5+lX61hOlMSKCt7bNSj4aRkAN09hj5Qu5AU8U2MjMAS7ElDsI0QrcEUB1G9MBe/t8iwmygC46cBOqQVrSePGHofdvCSEL0fIAPgxHUc2n5kzZ74agBE4gRznmBOJqWkmobSdCzADuKCw/pkg3imKoueBM/xsRrZH4QNoC2eIUsPn7wD2lwfgx51uWUezAol7z4hzEIrAhyhq/Py+8gCS8QI2lXPNLHoSZs6c+erZZ599tDyAYD2Amsu/lh/iNDb8WdjkG4VoMcYcGUqF29vbNzU0NAyWAZABkAEoD0/jGPUPcaluDx1BBkAGQAYgIROxI+2F6r/RGNOQgs6YeQXMOyEbgLqUyrQReMJRpiHIirsPrRRCBsCDm7D7BApZ3j2hVfqkk046YurUqbPV9UQQ3knK6z8dmOIo02SMCS5HXxRFzwJnKgRQCKAxgOIZArxBga3CcZAdaseYB3xSBkAGQCFAcWwAvu3RAO0hVt4YczLwslREyAMonl7YDTgfT6MXIOQByAMojU7gr3Es6QzocAghgqEuI+8xB7tRyGWJ31aTC5GtEGAvw4HXSemAoFAIIA+gNNYBN3g0Rpe6pBDZMwAA9wOu1GB1URQtVtMLka0QYC9HAM049lkrFBAKAbLnAYBdGPQDj0bZpa4pFAJkk9uA1xxl+tQ6k7AQCgEqx0Rs9qB6hQJCIUC+PACwW4b/1aNxNquLCoUA2eRm7NqAQgxqamrSHn2hECCjnALMViggFALkzwMAeBG426ORdLafkAeQUfoDi4DD5AUIeQD58gAAtgGXAl0lNJQQmaMuR+86F7jHw1qvVrcQCgGyyf7AK8DhCgWEQoB8eQAA24HLPEIBWQChECCjvADc5Tba0TJ1D6EQQKGAEAoBMhgKfAH3wSJKHiIUAmSUF4EfuuQTRdHr6iZCIUB2Q4GF2CQiCgWEQoAchgKXeYQCHerGQiFAdkOBOxxlekdR9JJEJRQCZJM+2NOFJigUEAoB8scu4HKPUOA9iUooBMgm84B/cZQ5YM6cOZoVEAoBFAoIoRAgi6HAFR6hgJKHCIUAGcUng9AQiUkoBMgu+2MzCH20cCRgJD+hECCDbAe+HDdOgXaNlktUQiFANpkF3OcoM1ZiEgoBsstA4FVgdIEyncaYXhKVUAiQPbYAVzrK9IqiaIFEJeQBZJeHgckFzbjWBogUegAyAH4MwR4xVmj6b4cxpp9EJRIagE5gP4UAYbMBuMFRpt9FF130nEQlErJLIUB6wqWngUkKBUQZPYB2oEEeQPgYYAqw09HYayQqkYAdtXy4DEAy3gRudZQZITGJBLTLAKSL24HFDi9gj8QkPNkoA5AudgN/ReHTheqjKGqUqIQMQDaZBzzoKDNRYhIerJIBSCc3uqx3FEWbJKZ8E0XRM44iy2UA0uu6fcNRZrDElHs+5vi9pmdQah1A6QZ0LnBygTLKG5BvD8BV5Bgcg8ryAMKlC7iKwinEoiiKXpOoxD7oAJYqBEg3C4DpjjITJCaxD1piIyADkHJuBtY5XMFtElO+mDhx4ixHkcW1rqMMQHl4F7jeUab/0qVLl0tU+aGpqekUR5F5ta6jBqfKK8vZwKcKFdJmoRx1CPcA4PHAK/IAsoEBrqNwIlGiKFohUQlstimFABljHvBTR5kxElMuvv6umZ/ncRxAIwOQTq7HphUv1Dk6JKbM45r5+XUIlZQBKD9tuA8Z7R1F0bMSVa55MghPRe1QEQZgF3iMLDhooAHBrLr/Gymc5WcJcLQ8gOyyFbjJo6PokNFs4krxNSOUisoAVI6fAC87yuiQ0YwxZ86c1z2K/SwYb0VNVlFOw472FpJzlzFGhjg77r9xtPcC4ER5ADn5IGAPFSnYBlEULZaosmMDHL8/mKbKitI5BLvpY0ChQhoQzMTXfw9QX6DIjrg/BJMoRh5A5VkFfM+j83RKVKmn3vH7IyEpvzyA6tEHe8rwOEe5xcaYj0tcqfz6dwKFTok2wHHAopDqLQ+gOuwCrvUoJ+VPIcuWLWtzKD/Ab0JTfnkA1ecXwJ84ymhWIH1ff59in8EeLRcU6mjV5UrcJ8HURVG0TqJKjfK3ehSbG6LyywBUnzXA1zzKDX/ggQeaJK5UcJhHmZuDNWBqv5rwKHCeq5CmBoP/+u8E+jqKPQV8VgZAfJCh2FmBYY5ye4wx9RJXkMo/j8Lp4AE6sVl/Xg31PRQC1Ib1wFc9ytXHO8tEeJzsUWZ6yMovD6D2TAemeJRbZIw5RuIK5utvPHRnHTYpSHvI7yIPoLZMxb1jEOAYZRQORvnbPT+cV4eu/PIAwmAsMB84yFVQg4I1V/4XgVM8iv4K+Fwa3kkeQO1ZDlyCPWbM1QElrRrR3t6+yVP5NwFfSct7yQCEwRPAbQniT1FlGhoafE96vhxYmRqvRk0blDF+GLjAo6yWC1fX9fctei9+g7oyAGKf9MVuGjldRiAY5TeeejIfmwFqpwyAKIVB2CPGfHYGGmOM2rByyt/lGSa3A58AlqXR7RRhsRm7Y3CNXx+NuiSyirn9PvqxOw7blqXxPWUAwmQ58MeAzyrAOs0O1CzmJ475n07ru8oAhMsr2D3kG3w7bZyYQlRP+f8O+LdUv6+aPHg+BjwDHOxrOIwxx0lsiRV/Lo6j3btxN377OWQARMkcGRuBEZ7ltxhjBkps3sq/NoGBBXvoyxfxWLwlAyDKxQTsibK+x4trhsBP+V2pvLvzEHAFARztrTGAfPEadgvqy/59OyKKokUS3YeZNm3avDjeT6L8dwFfyoryywNIJ/2B/wT+NMHfdBpjekl0v7eM22I5JuHvgVuyJgt5AOljG3A+cEeCv+kVewNv5FzxF8Zf/STKvzv+6t+SSZlIn1LNJcA9OI4d2wfPGmPOVKzvZCNwISme55cByD7jsefNH5vw73IxSOiZuHNfzI89rbezLB+FAOlnKXZwcHpy3YiIosjMmDFjQQYVf0fs7hej/PdiN/a8re4l0sS52MNITZHXQpNysCfwFvv+G/BI1y5EyAyKvYGuEhRhZ2tr68oUKf3yEt517/U49uhuITLB6UBLGRRjS2Nj49IAlX42dj6+1PdbB0xWdxFZpA9wTezamjJdbTVU+rYyvsdu4E48krEKkYWw4HvYNQSmAteqyZMnP1suRe/q6toDLAQ6KlTfp4Cj1C1E3hiJ3cVWKUMQ+vUc8AfqBiLvDMGubFuXA6Xvir/4Z6nZhfj/9AW+jN1glDXF347duXesmlkIN0cBt1PaOoIQrgXAVcCBalIhklMP/CF262trSpR+CfBtbOIUIUQZmQB8HXteweZAFH4LduHOVcBH1UTFo81AIgl1sUE4GXtO3jHYzUgHVPCZu7H7HRYB84C5QDMZSsohAyDSziGx+z0em1tvBDAcGAoMA3pj9+DXYdckALwHdAK7sNtu915t2Bz7y4G3sKsZOyRiIYQQQgghhBBCCCGEEEIIIYQQQojC/B98ZnRQgtQBnwAAAABJRU5ErkJggg==";
var urlJoin$2 = { exports: {} }, urlJoin$1 = urlJoin$2.exports, hasRequiredUrlJoin;
function requireUrlJoin() {
  return hasRequiredUrlJoin || (hasRequiredUrlJoin = 1, function(e) {
    (function(t, n, i) {
      e.exports ? e.exports = i() : n[t] = i();
    })("urljoin", urlJoin$1, function() {
      function t(n) {
        var i = [];
        if (n.length === 0)
          return "";
        if (typeof n[0] != "string")
          throw new TypeError("Url must be a string. Received " + n[0]);
        if (n[0].match(/^[^/:]+:\/*$/) && n.length > 1) {
          var r = n.shift();
          n[0] = r + n[0];
        }
        n[0].match(/^file:\/\/\//) ? n[0] = n[0].replace(/^([^/:]+):\/*/, "$1:///") : n[0] = n[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          if (typeof s != "string")
            throw new TypeError("Url must be a string. Received " + s);
          s !== "" && (o > 0 && (s = s.replace(/^[\/]+/, "")), o < n.length - 1 ? s = s.replace(/[\/]+$/, "") : s = s.replace(/[\/]+$/, "/"), i.push(s));
        }
        var a = i.join("/");
        a = a.replace(/\/(\?|&|#[^!])/g, "$1");
        var c = a.split("?");
        return a = c.shift() + (c.length > 0 ? "?" : "") + c.join("&"), a;
      }
      return function() {
        var n;
        return typeof arguments[0] == "object" ? n = arguments[0] : n = [].slice.call(arguments), t(n);
      };
    });
  }(urlJoin$2)), urlJoin$2.exports;
}
var urlJoinExports = requireUrlJoin();
const urlJoin = /* @__PURE__ */ getDefaultExportFromCjs(urlJoinExports);
let connectingReject, disconnectingResolve;
function _dispatchCustomEvent(e, t) {
  return function() {
    t || dbg.apply(null, ["pip3d event", e].concat(Array.prototype.slice.call(arguments))), dispatchCustomEvent(e, arguments, null, t);
  };
}
const defaultSettings = {
  onInitializing: _dispatchCustomEvent("n2i_pip3d_initializing"),
  onConnected: _dispatchCustomEvent("n2i_pip3d_connected"),
  onDisconnected: _dispatchCustomEvent("n2i_pip3d_disconnected"),
  onError: _dispatchCustomEvent("n2i_pip3d_error"),
  onNotice: _dispatchCustomEvent("n2i_pip3d_notice"),
  onCustomPacket: _dispatchCustomEvent("n2i_pip3d_custom_packet"),
  onDisplayInfoUpdate: _dispatchCustomEvent("n2i_pip3d_display_info_update"),
  onViewportChanged: _dispatchCustomEvent("n2i_pip3d_viewport_changed"),
  onStatus: _dispatchCustomEvent("n2i_pip3d_status", !0),
  onBack: _dispatchCustomEvent("n2i_pip3d_back"),
  onNewFrame: _dispatchCustomEvent("n2i_pip3d_frame", !0),
  onInput: _dispatchCustomEvent("n2i_pip3d_input", !0),
  onAppConfig: _dispatchCustomEvent("n2i_pip3d_app_config", !0),
  onDrawDetected: function(e, t) {
    const n = "n2i_pip3d_draw_" + e;
    dbg(`${n} ${t}`), t ? dispatchCustomEventStart(n) : dispatchCustomEventEnd(n);
  },
  isSsl: location.protocol == "https:",
  host: location.host
};
function initPip3d() {
  return defaultSettings.compressUp = config.compressUp, defaultSettings.workarounds = config.workarounds, defaultSettings.disableMotion = config.disableMotion, defaultSettings.imgWorkers = config.imgWorkers, defaultSettings.quotaBytes = config.quotaBytes, defaultSettings.quotaMinSwaps = config.quotaMinSwaps, config.initHeight >= 0 && (defaultSettings.height = config.initHeight), config.initWidth >= 0 && (defaultSettings.width = config.initWidth), config.initRotation >= 0 && (defaultSettings.rotation = config.initRotation), config.initDensity >= 0 && (defaultSettings.density = config.initDensity), defaultSettings.drawDetectors = config.drawDetectors, config.drawDetectorsThreshold >= 0 && (defaultSettings.drawDetectorsThreshold = config.drawDetectorsThreshold), config.maxFps >= 0 && (defaultSettings.maxFps = config.maxFps), config.clientLatency >= 0 && (defaultSettings.clientLatency = config.clientLatency * 1e3 / 60), config.latency && (defaultSettings.latency = config.latency * 1e3 / 60), config.downJitterSampleTime >= 0 && (defaultSettings.downJitterSampleTime = config.downJitterSampleTime), config.jitterBufferMin >= 0 && (defaultSettings.jitterBufferMin = config.jitterBufferMin * 1e3 / 60), config.jitterBufferMax >= 0 && (defaultSettings.jitterBufferMax = config.jitterBufferMax * 1e3 / 60), config.jitterBufferFactor >= 0 && (defaultSettings.jitterBufferFactor = config.jitterBufferFactor), config.jitterBufferTolerance >= 0 && (defaultSettings.jitterBufferTolerance = config.jitterBufferTolerance * 1e3 / 60), new Promise(function(e, t) {
    function n(s) {
      info(`pip3d disconnected (${s.type})`), window.pip3d_ctx = void 0, window.PIP3D_AUDIO !== void 0 && PIP3D_AUDIO.stop2();
      let a = !0;
      if (window.PIP3D && PIP3D.unload && (unloadPip3d(), a = !1), a && unloadPip3dLibs(), connectingReject) {
        const c = new Error(s.detail ? s.detail[0] : "unknow error during connection");
        c.event = s, connectingReject(c);
      } else disconnectingResolve && disconnectingResolve();
    }
    addEventListener("n2i_pip3d_connection_timeout", n), addEventListener("n2i_pip3d_load_error", n), addEventListener("n2i_pip3d_disconnected", n), addEventListener("n2i_pip3d_error", n);
    let i, r, o;
    addEventListener("n2i_pip3d_status", function(s) {
      var c;
      dispatchCustomEvent("n2i_status", s.detail, null, !0);
      const a = s.detail[1];
      if (a && (dispatchCustomEvent("n2i_status_data", a, null, !0), config.statusDataThrottling)) {
        const d = ["downJitterMs", "jitterBufferExpMs", "jitterBufferMs", "maxNetworkDelayMs"];
        if (o = o != null ? o : {}, a.networkStatus)
          for (const p of d)
            o[p] = Math.max((c = o[p]) != null ? c : -1, a.networkStatus[p]);
        const u = Date.now(), l = i ? i + config.statusDataThrottling : u;
        clearTimeout(r), r = setTimeoutSyncIf0(() => {
          a.networkStatus = o, o = void 0, dispatchCustomEvent("n2i_status_data_throttled", a, null, !0), i = l;
        }, l - u);
      }
    }), window.PIP3D && loadPip3d(defaultSettings), e();
  });
}
let pip3dLoaded = !1;
function loadPip3d(e) {
  pip3dLoaded || (dispatchCustomEventStart("n2i_pip3d_load"), PIP3D.load(function() {
    info("pip3d loaded"), dispatchCustomEventEnd("n2i_pip3d_load");
  }, e), pip3dLoaded = !0);
}
function unloadPip3d() {
  if (pip3dLoaded) {
    dispatchCustomEventStart("n2i_pip3d_unload");
    try {
      PIP3D.unload(function() {
        info("pip3d unloaded"), dispatchCustomEventEnd("n2i_pip3d_unload");
      });
    } catch (e) {
      dispatchCustomEventFail("n2i_pip3d_unload");
    }
    pip3dLoaded = !1;
  }
}
function connectAudio(e) {
  var r;
  const t = (r = e.iceServer) != null ? r : config.iceServer, n = t ? "stun:" + t + ":3478,turn:" + t + ":3478" : config.iceServers ? config.iceServers : void 0;
  info(`connecting audio iceServers=${n}`);
  const i = g(g(_(g({}, config.pip3dAudioSettings), {
    stateCb: _dispatchCustomEvent("n2i_pip3d_audio_state")
  }), config.autoUnmute && { unmuteCb: _dispatchCustomEvent("n2i_pip3d_audio_unmute") }), config.autoUnmuteElementId && { autoUnmuteElement: document.getElementById(config.autoUnmuteElementId) });
  return e.staticAudio ? i.staticUrl = e.audioURL : (i.signalingUrl = e.audioURL, i.iceServers = n, i.connectTimeout = config.audioTimeout), PIP3D_AUDIO.start2(i).catch(function(o) {
    throw err("failed to connect audio", o), captureException$1(o), o;
  });
}
let libpip3d_client, pip3d_final, pip3d_audio_final, loadedPip3dLibsVersion;
function unloadPip3dLibs() {
  loadedPip3dLibsVersion && (libpip3d_client && (document.head.removeChild(libpip3d_client), libpip3d_client = void 0, PIP3DModule = void 0), pip3d_final && (window.PIP3D && unloadPip3d(), document.head.removeChild(pip3d_final), pip3d_final = void 0, PIP3D = void 0), pip3d_audio_final && (document.head.removeChild(pip3d_audio_final), pip3d_audio_final = void 0, PIP3D_AUDIO = void 0), loadedPip3dLibsVersion = void 0);
}
function connectPip3d(e, t) {
  return new Promise(function(n, i) {
    const r = [], o = e.STATIC_BASE_URL;
    e.pip3dLibsVersion != loadedPip3dLibsVersion && unloadPip3dLibs(), window.PIP3DModule === void 0 && r.push(importScript(urlJoin(o, "libpip3d_client.js")).then(function(s) {
      libpip3d_client = s;
    })), window.PIP3D === void 0 && r.push(importScript(urlJoin(o, "pip3d_final.js")).then(function(s) {
      pip3d_final = s;
    })), window.PIP3D_AUDIO === void 0 && r.push(importScript(urlJoin(o, "pip3d_audio_final.js")).then(function(s) {
      pip3d_audio_final = s;
    })), pip3dLoaded = !1, Promise.all(r).then(function() {
      var d;
      loadedPip3dLibsVersion = (d = e.pip3dLibsVersion) != null ? d : "unknown", window.CustomPacketTypes = PIP3D.CustomPacketTypes;
      const s = Object.assign({}, defaultSettings);
      if (!config.pip3dJsFromFrontend) {
        const u = new URL(e.STATIC_BASE_URL);
        s.host = u.host, s.isSsl = u.protocol == "https:", s.rootpath = new URL(e.STATIC_BASE_URL).pathname + "/", s.locateFile = function(l, p) {
          return l.endsWith(".mem") ? (s.isSsl ? "https://" : "http://") + s.host + s.rootpath + l : p + l;
        };
      }
      if (config.autofit && !config.clickOnConnect || config.autofitOnConnect && !e.restored) {
        const u = getWindowResolution();
        s.width = u.width, s.height = u.height, s.rotation = u.orientation, s.density = u.density;
      }
      s.canvas = document.getElementById("n2i-canvas"), e.MAX_FPS && (s.maxFps = e.MAX_FPS);
      const a = s.onConnected, c = setTimeout(() => {
        dispatchCustomEvent("n2i_pip3d_connection_timeout", ["pip3d connection timeout"]);
      }, config.pip3dConnectTimeout);
      if (s.onConnected = function(u) {
        info("pip3d connected"), clearTimeout(c), connectingReject = void 0, n(u.ctx), a(u);
      }, Object.assign(s, t), dbg("pip3d settings", s), loadPip3d(s), PIP3D.start(e, s), config.connectAudioAtFirstFrame) {
        const u = function() {
          removeEventListener("n2i_pip3d_first_frame", u), connectAudio(e);
        };
        addEventListener("n2i_pip3d_first_frame", u);
      } else e.audioURL && connectAudio(e);
      connectingReject = function(u) {
        clearTimeout(c), connectingReject = void 0, i(u);
      };
    }).catch(function(s) {
      err("failed to load pip3d assets", s), dispatchCustomEvent("n2i_pip3d_load_error", [s]), i(s);
    });
  });
}
function disconnectPip3d(e, t) {
  return new Promise(function(n) {
    e != null || (e = window.pip3d_ctx), e ? (disconnectingResolve = function() {
      disconnectingResolve = void 0, n();
    }, e.close(t)) : n();
  });
}
function initAudio() {
  return new Promise(function(e, t) {
    var n = !1;
    function i() {
      if (config.noMutedImg) return;
      const a = document.getElementById("n2i-muted");
      n ? a.classList.remove("n2i-hidden") : (a.classList.add("n2i-hidden"), a.classList.remove("n2i-hidden2"));
    }
    function r(a = !0) {
      n = a;
    }
    function o() {
      r(!1), i();
    }
    let s = 0;
    addEventListener("n2i_pip3d_audio_state", function(a) {
      const [c, d] = a.detail;
      switch (c) {
        case "connected":
          r(), i(), s = 0;
          break;
        case "error":
          s++ == 0 && captureException$1(d);
          break;
      }
    }), addEventListener("n2i_pip3d_audio_unmute", function(a) {
    }), addEventListener("n2i_pip3d_error", o), addEventListener("n2i_pip3d_disconnected", o), e();
  });
}
function sendCustomPacket(e, t) {
  if (window.pip3d_ctx)
    return pip3d_ctx.sendCustomPacket(e, t);
}
function back() {
  return window.pip3d_ctx ? (pip3d_ctx.injectKeyEvent(1, 1), pip3d_ctx.injectKeyEvent(1, 0), !0) : !1;
}
function cmdApp(e, t, n, i) {
  var s;
  if (!window.pip3d_ctx) return;
  const r = [];
  if (config.appSuffix) {
    let a = {};
    typeof config.appSuffix == "object" ? a = config.appSuffix : typeof config.appSuffix == "string" && (typeof t == "string" ? (a[t] = config.appSuffix, a.surfaceflinger = config.appSuffix) : a[""] = config.appSuffix);
    for (const [c, d] of Object.entries(a))
      r.push(`${c ? c + ":" : ""}.${d}`);
  }
  const o = g(g(g(g(g({
    cmd: e
  }, typeof t == "string" && { package: t }), r.length && { appSuffixes: r }), typeof n == "string" && { uri: n }), i && { startIntent: i }), e === "start" && config.setLocale && { locale: (s = config.locale) != null ? s : navigator.language });
  info(`app custom packet: ${JSON.stringify(o)}`), dispatchCustomEventStart("n2i_app_" + e), pip3d_ctx.setAppSuffix && pip3d_ctx.setAppSuffix(r.join()), pip3d_ctx.sendCustomPacket(CustomPacketTypes.APP, JSON.stringify(o) + "\0");
}
function startApp(e, t, n) {
  return cmdApp("start", e, t, n);
}
function backupApp$1(e) {
  return cmdApp("backup", e);
}
window.backupApp = backupApp$1;
addEventListener("n2i_pip3d_custom_packet", function(e) {
  const t = e.detail[0], n = new Uint8Array(e.detail[1]);
  let i, r;
  for (r = 0; r < n.length && n[r] != 0; r++)
    ;
  const o = utf8Decoder.decode(n.slice(0, r));
  r < n.length && (i = n.slice(r + 1, n.length)), dbg(`custom packet type ${t}: ${o} (binary data: ${i ? i.length : "undefined"})`), dispatchCustomEvent("n2i_pip3d_custom_packet_data", {
    type: t,
    data: n,
    str: o,
    binData: i
  });
});
const AD_NETWORK_CUSTOM_PACKET_ID = 1633972992, AD_NETWORK_CUSTOM_PACKET_VERSION = 0, customPacketId = AD_NETWORK_CUSTOM_PACKET_ID + AD_NETWORK_CUSTOM_PACKET_VERSION, prerollId = 100001;
let currentId = -1;
function isInAd() {
  return currentId !== -1;
}
function setState(e, t, n) {
  if (e.state == t) {
    warn(`ad ${e.id} already in state ${t}`);
    return;
  }
  let i;
  const r = `${e.state} -> ${t}`;
  switch (dbg(`ad transition ${r}`), !0) {
    case /.* -> loaded/.test(r):
      break;
    case /.* -> showed/.test(r):
      i = "start";
      break;
    case /showed -> dismissed/.test(r):
      i = "end";
      break;
    case /.* -> dismissed/.test(r):
      warn("ad dismissed but not showed, this must not happen"), i = "dismissed";
      break;
    case /.* -> show error/.test(r):
      i = "fail";
      break;
    default:
      warn(`unhandled transition ${r}`);
  }
  e.state = t, i && (dispatchCustomEvent(`n2i_ad_${i}`, e.id), dispatchCustomEvent(`n2i_ad_${e.type}_${i}`, g({
    id: e.id,
    network: config.adNetwork
  }, (n == null ? void 0 : n.code) && { reason: n.code })));
}
const ads = {};
function handleAdEvent(e, t, n = {}) {
  let i;
  function r() {
    clearTimeout(i), removeEventListener("popstate", r), currentId = -1, sessionStorageImpersonator.removeItem("currentAdId"), delete ads[e];
  }
  const o = ads[e];
  if (!o) {
    warn(`ad ${e} already closed`);
    return;
  }
  if (t == "rewarded")
    dispatchCustomEvent("n2i_ad_reward", g({ id: e }, n));
  else {
    let s;
    switch (t) {
      case "load success":
        s = "loaded";
        break;
      case "show success":
        s = "showed";
        break;
      case "viewed":
      case "dismissed":
        s = "dismissed", addEventListener("popstate", r), i = setTimeout(r, config.ad.popStateTimeout);
        break;
      default:
        err(t, n.error), s = t;
        break;
    }
    setState(o, s, n.error);
  }
  e != prerollId && (t == "show error" && config.ad.dismissedOnShowError && (info("replace ad show error by dimissed"), t = "dismissed", n = {}), info(`send ad ${e} event '${t}' data '${JSON.stringify(n)}'`), n2i.sendCustomPacket(customPacketId, JSON.stringify(Object.assign(n, {
    adId: e,
    callback: t
  }))));
}
function showAd(e, t) {
  return ads[e] = { id: e, type: t, state: "showing" }, currentId = e, sessionStorageImpersonator.setItem("currentAdId", e), Promisify(() => AD_NETWORK.show(e, t)).then(() => handleAdEvent(e, "show success")).catch((n) => handleAdEvent(e, "show error", { code: -1, error: n }));
}
function loadAd(e, t) {
  return ads[e] = { id: e, type: t, state: "loading" }, Promisify(() => AD_NETWORK.load(e)).then(() => handleAdEvent(e, "load success")).catch((n) => handleAdEvent(e, "load error", { code: -1, error: n != null ? n : "unknown" }));
}
function registerCustomPacketHandler() {
  addEventListener("n2i_pip3d_custom_packet_data", function(e) {
    if (e.detail.type != customPacketId) return;
    e.detail.data;
    const n = e.detail.str, i = JSON.parse(n);
    switch (info("ad event", i), i.cmd) {
      case "load":
        loadAd(i.adId, i.type);
        break;
      case "show":
        showAd(i.adId, i.type);
        break;
    }
  }), info("ads init done");
}
function initAdNetwork() {
  if (config.adNetwork)
    return config.adPrerollEvent && addEventListener(config.adPrerollEvent, function(e) {
      dbg("show preroll ad"), showAd(prerollId, "interstitial");
    }), new Promise(function(e, t) {
      function n(r) {
        config.ad.loadErrorFatal ? t(r) : e();
      }
      addEventListener("n2i_ad_network_init_end", function(r) {
        registerCustomPacketHandler(), Promisify(() => AD_NETWORK.setup(handleAdEvent)).then(e).catch(n);
      }), addEventListener("n2i_ad_network_init_fail", function(r) {
        n("init failed");
      });
      const i = sessionStorageImpersonator.getItem("currentAdId");
      sessionStorageImpersonator.removeItem("currentAdId"), i && addEventListener("n2i_connection_end", (r) => {
        var o;
        (o = r.detail) != null && o.restored && (info(`dismiss previously loaded ad ${i}`), handleAdEvent(i, "dismissed"));
      }, { once: !0 });
    });
}
const CUSTOM_PACKET_PLAYER = 8192;
function stop() {
  Promise.resolve(PLAYER.stop()).then(function() {
    dbg("playback stopped"), delete PLAYER.url, config.sendPlayerEvents && sendCustomPacket(CUSTOM_PACKET_PLAYER, utf8Encoder.encode(JSON.stringify({
      status: "stopped"
    }))), dispatchCustomEventEnd("n2i_player_playback");
  });
}
let initPromise;
function init$1() {
  return removeEventListener("n2i_idle", init$1), initPromise || (initPromise = PLAYER.init()), initPromise;
}
function initPlayer() {
  if (!config.player)
    return;
  addEventListener("n2i_pip3d_custom_packet", function(c) {
    const d = c.detail[0], u = c.detail[1];
    switch (d) {
      case CUSTOM_PACKET_PLAYER:
        init$1().then(function() {
          dbg("received custom player packet");
          const l = utf8Decoder.decode(new Uint8Array(u));
          if (l.length == 0) {
            err("failed to convert custom packet data to string");
            return;
          }
          dbg(l);
          const p = JSON.parse(l);
          switch (p.cmd) {
            case "play":
              Promise.resolve(PLAYER.load(p.url, p.drm)).then(function() {
                dbg("media loaded"), PLAYER.url = p.url, Promise.resolve(PLAYER.play()).then(function() {
                  dbg("playback started"), dispatchCustomEventStart("n2i_player_playback"), config.sendPlayerEvents && sendCustomPacket(CUSTOM_PACKET_PLAYER, utf8Encoder.encode(JSON.stringify({
                    status: "playing",
                    url: p.url
                  })));
                });
              });
              break;
            case "stop":
              stop();
              break;
          }
        });
        break;
    }
  });
  const e = /* @__PURE__ */ new Map();
  function t(c, d, u, l) {
    if (l) {
      const p = e.get(c);
      p === void 0 ? (e.set(c, !1), d()) : p === !1 && (e.set(c, !0), u());
    } else
      e.delete(c);
  }
  function n() {
    return Promise.resolve(PLAYER.pause()).then(function() {
      dbg("playback paused");
    });
  }
  function i() {
    return Promise.resolve(PLAYER.play()).then(function() {
      dbg("playback resumed");
    });
  }
  function r() {
    return Promise.resolve(PLAYER.seek(0));
  }
  function o() {
    return Promise.resolve(PLAYER.getDuration()).then(function(c) {
      return PLAYER.seek(c - 10);
    });
  }
  const s = {
    Rewind: "U+019C",
    Forward: "U+01A1",
    Play: "U+019F",
    PlayPause: "U+01F7",
    Pause: "U+019B",
    Stop: "U+019D"
  };
  function a(c, d) {
    if (!PLAYER.url) return;
    const u = c.keyIdentifier || c.key;
    switch (u) {
      case "Left":
      case "ArrowLeft":
      case "Rewind":
      case "XF86AudioRewind":
      case s.Rewind:
        t("left", PLAYER.seekBack, r, d);
        break;
      case "Right":
      case "ArrowRight":
      case "Forward":
      case "XF86AudioNext":
      case s.Forward:
        t("right", PLAYER.seekForward, o, d);
        break;
      case "XF86PreviousChapter":
        r();
        break;
      case "XF86NextChapter":
        o();
        break;
      default:
        switch (u) {
          case "Enter":
          case "PlayPause":
          case s.PlayPause:
            if (d) break;
            Promise.resolve(PLAYER.getPaused()).then(function(l) {
              l ? i() : n();
            });
            break;
          case "Play":
          case "XF86AudioPlay":
          case s.Play:
            if (d) break;
            Promise.resolve(PLAYER.getPaused()).then(function(l) {
              l && i();
            });
            break;
          case "Pause":
          case "XF86AudioPause":
          case s.Pause:
            if (d) break;
            n();
            break;
          case "Stop":
          case "XF86AudioStop":
          case s.Stop:
            if (d) break;
            stop();
            break;
          default:
            return;
        }
        break;
    }
    c.preventDefault(), c.stopImmediatePropagation();
  }
  return document.addEventListener("keydown", function(c) {
    PLAYER.url && a(c, !0);
  }), document.addEventListener("keyup", function(c) {
    PLAYER.url && a(c, !1);
  }), addEventListener("n2i_pip3d_back", function(c) {
    config.stopOnBack && PLAYER.url && stop();
  }), addEventListener("n2i_player_playback_ended", function(c) {
    PLAYER.url && (stop(), config.backOnPlaybackEnd && (pip3d_ctx.injectKeyEvent(1, 1), pip3d_ctx.injectKeyEvent(1, 0)));
  }), config.lazyPlayerInit ? (addEventListener("n2i_idle", init$1), Promise.resolve()) : init$1();
}
const objectToString$2 = Object.prototype.toString;
function isError$1(e) {
  switch (objectToString$2.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return isInstanceOf$2(e, Error);
  }
}
function isBuiltin$2(e, t) {
  return objectToString$2.call(e) === `[object ${t}]`;
}
function isString$2(e) {
  return isBuiltin$2(e, "String");
}
function isParameterizedString$1(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function isPrimitive$1(e) {
  return e === null || isParameterizedString$1(e) || typeof e != "object" && typeof e != "function";
}
function isPlainObject$1(e) {
  return isBuiltin$2(e, "Object");
}
function isEvent$1(e) {
  return typeof Event != "undefined" && isInstanceOf$2(e, Event);
}
function isElement$1(e) {
  return typeof Element != "undefined" && isInstanceOf$2(e, Element);
}
function isRegExp$1(e) {
  return isBuiltin$2(e, "RegExp");
}
function isThenable$1(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function isSyntheticEvent$1(e) {
  return isPlainObject$1(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function isNaN$2(e) {
  return typeof e == "number" && e !== e;
}
function isInstanceOf$2(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return !1;
  }
}
function isVueViewModel$1(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function truncate$1(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function isMatchingPattern$1(e, t, n = !1) {
  return isString$2(e) ? isRegExp$1(t) ? t.test(e) : isString$2(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function stringMatchesSomePattern$1(e, t = [], n = !1) {
  return t.some((i) => isMatchingPattern$1(e, i, n));
}
function isGlobalObj$2(e) {
  return e && e.Math == Math ? e : void 0;
}
const GLOBAL_OBJ$2 = typeof globalThis == "object" && isGlobalObj$2(globalThis) || // eslint-disable-next-line no-restricted-globals
typeof window == "object" && isGlobalObj$2(window) || typeof self == "object" && isGlobalObj$2(self) || typeof global == "object" && isGlobalObj$2(global) || /* @__PURE__ */ function() {
  return this;
}() || {};
function getGlobalObject$2() {
  return GLOBAL_OBJ$2;
}
function getGlobalSingleton(e, t, n) {
  const i = n || GLOBAL_OBJ$2, r = i.__SENTRY__ = i.__SENTRY__ || {};
  return r[e] || (r[e] = t());
}
const WINDOW$d = getGlobalObject$2(), DEFAULT_MAX_STRING_LENGTH$2 = 80;
function htmlTreeAsString$2(e, t = {}) {
  if (!e)
    return "<unknown>";
  try {
    let n = e;
    const i = 5, r = [];
    let o = 0, s = 0;
    const a = " > ", c = a.length;
    let d;
    const u = Array.isArray(t) ? t : t.keyAttrs, l = !Array.isArray(t) && t.maxStringLength || DEFAULT_MAX_STRING_LENGTH$2;
    for (; n && o++ < i && (d = _htmlElementAsString$2(n, u), !(d === "html" || o > 1 && s + r.length * c + d.length >= l)); )
      r.push(d), s += d.length, n = n.parentNode;
    return r.reverse().join(a);
  } catch (n) {
    return "<unknown>";
  }
}
function _htmlElementAsString$2(e, t) {
  const n = e, i = [];
  let r, o, s, a, c;
  if (!n || !n.tagName)
    return "";
  if (WINDOW$d.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent)
    return n.dataset.sentryComponent;
  i.push(n.tagName.toLowerCase());
  const d = t && t.length ? t.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)]) : null;
  if (d && d.length)
    d.forEach((l) => {
      i.push(`[${l[0]}="${l[1]}"]`);
    });
  else if (n.id && i.push(`#${n.id}`), r = n.className, r && isString$2(r))
    for (o = r.split(/\s+/), c = 0; c < o.length; c++)
      i.push(`.${o[c]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < u.length; c++)
    s = u[c], a = n.getAttribute(s), a && i.push(`[${s}="${a}"]`);
  return i.join("");
}
const DEBUG_BUILD$5 = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__, PREFIX$2 = "Sentry Logger ", CONSOLE_LEVELS$2 = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
], originalConsoleMethods$2 = {};
function consoleSandbox$2(e) {
  if (!("console" in GLOBAL_OBJ$2))
    return e();
  const t = GLOBAL_OBJ$2.console, n = {}, i = Object.keys(originalConsoleMethods$2);
  i.forEach((r) => {
    const o = originalConsoleMethods$2[r];
    n[r] = t[r], t[r] = o;
  });
  try {
    return e();
  } finally {
    i.forEach((r) => {
      t[r] = n[r];
    });
  }
}
function makeLogger$2() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e
  };
  return DEBUG_BUILD$5 ? CONSOLE_LEVELS$2.forEach((n) => {
    t[n] = (...i) => {
      e && consoleSandbox$2(() => {
        GLOBAL_OBJ$2.console[n](`${PREFIX$2}[${n}]:`, ...i);
      });
    };
  }) : CONSOLE_LEVELS$2.forEach((n) => {
    t[n] = () => {
    };
  }), t;
}
const logger$2 = makeLogger$2(), DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(e) {
  return e === "http" || e === "https";
}
function dsnToString$1(e, t = !1) {
  const { host: n, path: i, pass: r, port: o, projectId: s, protocol: a, publicKey: c } = e;
  return `${a}://${c}${t && r ? `:${r}` : ""}@${n}${o ? `:${o}` : ""}/${i && `${i}/`}${s}`;
}
function dsnFromString(e) {
  const t = DSN_REGEX.exec(e);
  if (!t) {
    consoleSandbox$2(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, i, r = "", o, s = "", a] = t.slice(1);
  let c = "", d = a;
  const u = d.split("/");
  if (u.length > 1 && (c = u.slice(0, -1).join("/"), d = u.pop()), d) {
    const l = d.match(/^\d+/);
    l && (d = l[0]);
  }
  return dsnFromComponents({ host: o, pass: r, path: c, projectId: d, port: s, protocol: n, publicKey: i });
}
function dsnFromComponents(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function validateDsn(e) {
  if (!DEBUG_BUILD$5)
    return !0;
  const { port: t, projectId: n, protocol: i } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((s) => e[s] ? !1 : (logger$2.error(`Invalid Sentry Dsn: ${s} missing`), !0)) ? !1 : n.match(/^\d+$/) ? isValidProtocol(i) ? t && isNaN(parseInt(t, 10)) ? (logger$2.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (logger$2.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (logger$2.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function makeDsn(e) {
  const t = typeof e == "string" ? dsnFromString(e) : dsnFromComponents(e);
  if (!(!t || !validateDsn(t)))
    return t;
}
class SentryError extends Error {
  /** Display name of this error instance. */
  constructor(t, n = "warn") {
    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = n;
  }
}
function addNonEnumerableProperty$2(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: n,
      writable: !0,
      configurable: !0
    });
  } catch (i) {
    DEBUG_BUILD$5 && logger$2.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function getOriginalFunction$1(e) {
  return e.__sentry_original__;
}
function urlEncode(e) {
  return Object.keys(e).map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");
}
function convertToPlainObject$1(e) {
  if (isError$1(e))
    return g({
      message: e.message,
      name: e.name,
      stack: e.stack
    }, getOwnProperties$1(e));
  if (isEvent$1(e)) {
    const t = g({
      type: e.type,
      target: serializeEventTarget$1(e.target),
      currentTarget: serializeEventTarget$1(e.currentTarget)
    }, getOwnProperties$1(e));
    return typeof CustomEvent != "undefined" && isInstanceOf$2(e, CustomEvent) && (t.detail = e.detail), t;
  } else
    return e;
}
function serializeEventTarget$1(e) {
  try {
    return isElement$1(e) ? htmlTreeAsString$2(e) : Object.prototype.toString.call(e);
  } catch (t) {
    return "<unknown>";
  }
}
function getOwnProperties$1(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else
    return {};
}
function dropUndefinedKeys(e) {
  return _dropUndefinedKeys(e, /* @__PURE__ */ new Map());
}
function _dropUndefinedKeys(e, t) {
  if (isPojo(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const i = {};
    t.set(e, i);
    for (const r of Object.keys(e))
      typeof e[r] != "undefined" && (i[r] = _dropUndefinedKeys(e[r], t));
    return i;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const i = [];
    return t.set(e, i), e.forEach((r) => {
      i.push(_dropUndefinedKeys(r, t));
    }), i;
  }
  return e;
}
function isPojo(e) {
  if (!isPlainObject$1(e))
    return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch (t) {
    return !0;
  }
}
const defaultFunctionName$2 = "<anonymous>";
function getFunctionName$2(e) {
  try {
    return !e || typeof e != "function" ? defaultFunctionName$2 : e.name || defaultFunctionName$2;
  } catch (t) {
    return defaultFunctionName$2;
  }
}
const handlers$3 = {}, instrumented$3 = {};
function addHandler$3(e, t) {
  handlers$3[e] = handlers$3[e] || [], handlers$3[e].push(t);
}
function maybeInstrument$2(e, t) {
  instrumented$3[e] || (t(), instrumented$3[e] = !0);
}
function triggerHandlers$3(e, t) {
  const n = e && handlers$3[e];
  if (n)
    for (const i of n)
      try {
        i(t);
      } catch (r) {
        DEBUG_BUILD$5 && logger$2.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${getFunctionName$2(i)}
Error:`,
          r
        );
      }
}
function uuid4$2() {
  const e = GLOBAL_OBJ$2, t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID)
      return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (n = () => {
      const i = new Uint8Array(1);
      return t.getRandomValues(i), i[0];
    });
  } catch (i) {
  }
  return ("10000000100040008000" + 1e11).replace(
    /[018]/g,
    (i) => (
      // eslint-disable-next-line no-bitwise
      (i ^ (n() & 15) >> i / 4).toString(16)
    )
  );
}
function getFirstException$1(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function getEventDescription$1(e) {
  const { message: t, event_id: n } = e;
  if (t)
    return t;
  const i = getFirstException$1(e);
  return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>";
}
function addExceptionMechanism$1(e, t) {
  const n = getFirstException$1(e);
  if (!n)
    return;
  const i = { type: "generic", handled: !0 }, r = n.mechanism;
  if (n.mechanism = g(g(g({}, i), r), t), t && "data" in t) {
    const o = g(g({}, r && r.data), t.data);
    n.mechanism.data = o;
  }
}
function checkOrSetAlreadyCaught(e) {
  if (e && e.__sentry_captured__)
    return !0;
  try {
    addNonEnumerableProperty$2(e, "__sentry_captured__", !0);
  } catch (t) {
  }
  return !1;
}
function arrayify(e) {
  return Array.isArray(e) ? e : [e];
}
let _oldOnErrorHandler$1 = null;
function addGlobalErrorInstrumentationHandler$1(e) {
  const t = "error";
  addHandler$3(t, e), maybeInstrument$2(t, instrumentError$1);
}
function instrumentError$1() {
  _oldOnErrorHandler$1 = GLOBAL_OBJ$2.onerror, GLOBAL_OBJ$2.onerror = function(e, t, n, i, r) {
    return triggerHandlers$3("error", {
      column: i,
      error: r,
      line: n,
      msg: e,
      url: t
    }), _oldOnErrorHandler$1 && !_oldOnErrorHandler$1.__SENTRY_LOADER__ ? _oldOnErrorHandler$1.apply(this, arguments) : !1;
  }, GLOBAL_OBJ$2.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let _oldOnUnhandledRejectionHandler$1 = null;
function addGlobalUnhandledRejectionInstrumentationHandler$1(e) {
  const t = "unhandledrejection";
  addHandler$3(t, e), maybeInstrument$2(t, instrumentUnhandledRejection$1);
}
function instrumentUnhandledRejection$1() {
  _oldOnUnhandledRejectionHandler$1 = GLOBAL_OBJ$2.onunhandledrejection, GLOBAL_OBJ$2.onunhandledrejection = function(e) {
    return triggerHandlers$3("unhandledrejection", e), _oldOnUnhandledRejectionHandler$1 && !_oldOnUnhandledRejectionHandler$1.__SENTRY_LOADER__ ? _oldOnUnhandledRejectionHandler$1.apply(this, arguments) : !0;
  }, GLOBAL_OBJ$2.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function memoBuilder$1() {
  const e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
  function n(r) {
    if (e)
      return t.has(r) ? !0 : (t.add(r), !1);
    for (let o = 0; o < t.length; o++)
      if (t[o] === r)
        return !0;
    return t.push(r), !1;
  }
  function i(r) {
    if (e)
      t.delete(r);
    else
      for (let o = 0; o < t.length; o++)
        if (t[o] === r) {
          t.splice(o, 1);
          break;
        }
  }
  return [n, i];
}
function normalize$1(e, t = 100, n = 1 / 0) {
  try {
    return visit$1("", e, t, n);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function visit$1(e, t, n = 1 / 0, i = 1 / 0, r = memoBuilder$1()) {
  const [o, s] = r;
  if (t == null || // this matches null and undefined -> eqeq not eqeqeq
  ["number", "boolean", "string"].includes(typeof t) && !isNaN$2(t))
    return t;
  const a = stringifyValue$1(e, t);
  if (!a.startsWith("[object "))
    return a;
  if (t.__sentry_skip_normalization__)
    return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
  if (c === 0)
    return a.replace("object ", "");
  if (o(t))
    return "[Circular ~]";
  const d = t;
  if (d && typeof d.toJSON == "function")
    try {
      const f = d.toJSON();
      return visit$1("", f, c - 1, i, r);
    } catch (f) {
    }
  const u = Array.isArray(t) ? [] : {};
  let l = 0;
  const p = convertToPlainObject$1(t);
  for (const f in p) {
    if (!Object.prototype.hasOwnProperty.call(p, f))
      continue;
    if (l >= i) {
      u[f] = "[MaxProperties ~]";
      break;
    }
    const m = p[f];
    u[f] = visit$1(f, m, c - 1, i, r), l++;
  }
  return s(t), u;
}
function stringifyValue$1(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter")
      return "[DomainEmitter]";
    if (typeof global != "undefined" && t === global)
      return "[Global]";
    if (typeof window != "undefined" && t === window)
      return "[Window]";
    if (typeof document != "undefined" && t === document)
      return "[Document]";
    if (isVueViewModel$1(t))
      return "[VueViewModel]";
    if (isSyntheticEvent$1(t))
      return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t)
      return "[NaN]";
    if (typeof t == "function")
      return `[Function: ${getFunctionName$2(t)}]`;
    if (typeof t == "symbol")
      return `[${String(t)}]`;
    if (typeof t == "bigint")
      return `[BigInt: ${String(t)}]`;
    const n = getConstructorName$1(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function getConstructorName$1(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
var States$1;
(function(e) {
  e[e.PENDING = 0] = "PENDING";
  const n = 1;
  e[e.RESOLVED = n] = "RESOLVED";
  const i = 2;
  e[e.REJECTED = i] = "REJECTED";
})(States$1 || (States$1 = {}));
function resolvedSyncPromise$1(e) {
  return new SyncPromise$1((t) => {
    t(e);
  });
}
function rejectedSyncPromise$1(e) {
  return new SyncPromise$1((t, n) => {
    n(e);
  });
}
let SyncPromise$1 = class b {
  constructor(t) {
    b.prototype.__init.call(this), b.prototype.__init2.call(this), b.prototype.__init3.call(this), b.prototype.__init4.call(this), this._state = States$1.PENDING, this._handlers = [];
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  /** JSDoc */
  then(t, n) {
    return new b((i, r) => {
      this._handlers.push([
        !1,
        (o) => {
          if (!t)
            i(o);
          else
            try {
              i(t(o));
            } catch (s) {
              r(s);
            }
        },
        (o) => {
          if (!n)
            r(o);
          else
            try {
              i(n(o));
            } catch (s) {
              r(s);
            }
        }
      ]), this._executeHandlers();
    });
  }
  /** JSDoc */
  catch(t) {
    return this.then((n) => n, t);
  }
  /** JSDoc */
  finally(t) {
    return new b((n, i) => {
      let r, o;
      return this.then(
        (s) => {
          o = !1, r = s, t && t();
        },
        (s) => {
          o = !0, r = s, t && t();
        }
      ).then(() => {
        if (o) {
          i(r);
          return;
        }
        n(r);
      });
    });
  }
  /** JSDoc */
  __init() {
    this._resolve = (t) => {
      this._setResult(States$1.RESOLVED, t);
    };
  }
  /** JSDoc */
  __init2() {
    this._reject = (t) => {
      this._setResult(States$1.REJECTED, t);
    };
  }
  /** JSDoc */
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === States$1.PENDING) {
        if (isThenable$1(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        this._state = t, this._value = n, this._executeHandlers();
      }
    };
  }
  /** JSDoc */
  __init4() {
    this._executeHandlers = () => {
      if (this._state === States$1.PENDING)
        return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((n) => {
        n[0] || (this._state === States$1.RESOLVED && n[1](this._value), this._state === States$1.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
};
function makePromiseBuffer(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function i(s) {
    return t.splice(t.indexOf(s), 1)[0];
  }
  function r(s) {
    if (!n())
      return rejectedSyncPromise$1(new SentryError("Not adding Promise because buffer limit was reached."));
    const a = s();
    return t.indexOf(a) === -1 && t.push(a), a.then(() => i(a)).then(
      null,
      () => i(a).then(null, () => {
      })
    ), a;
  }
  function o(s) {
    return new SyncPromise$1((a, c) => {
      let d = t.length;
      if (!d)
        return a(!0);
      const u = setTimeout(() => {
        s && s > 0 && a(!1);
      }, s);
      t.forEach((l) => {
        resolvedSyncPromise$1(l).then(() => {
          --d || (clearTimeout(u), a(!0));
        }, c);
      });
    });
  }
  return {
    $: t,
    add: r,
    drain: o
  };
}
const ONE_SECOND_IN_MS$2 = 1e3;
function dateTimestampInSeconds$2() {
  return Date.now() / ONE_SECOND_IN_MS$2;
}
function createUnixTimestampInSecondsFunc$2() {
  const { performance: e } = GLOBAL_OBJ$2;
  if (!e || !e.now)
    return dateTimestampInSeconds$2;
  const t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / ONE_SECOND_IN_MS$2;
}
const timestampInSeconds = createUnixTimestampInSecondsFunc$2();
(() => {
  const { performance: e } = GLOBAL_OBJ$2;
  if (!e || !e.now)
    return;
  const t = 3600 * 1e3, n = e.now(), i = Date.now(), r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t, o = r < t, s = e.timing && e.timing.navigationStart, c = typeof s == "number" ? Math.abs(s + n - i) : t, d = c < t;
  return o || d ? r <= c ? e.timeOrigin : s : i;
})();
function generateSentryTraceHeader$1(e = uuid4$2(), t = uuid4$2().substring(16), n) {
  let i = "";
  return n !== void 0 && (i = n ? "-1" : "-0"), `${e}-${t}${i}`;
}
function createEnvelope$1(e, t = []) {
  return [e, t];
}
function addItemToEnvelope(e, t) {
  const [n, i] = e;
  return [n, [...i, t]];
}
function forEachEnvelopeItem(e, t) {
  const n = e[1];
  for (const i of n) {
    const r = i[0].type;
    if (t(i, r))
      return !0;
  }
  return !1;
}
function encodeUTF8(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function serializeEnvelope(e, t) {
  const [n, i] = e;
  let r = JSON.stringify(n);
  function o(s) {
    typeof r == "string" ? r = typeof s == "string" ? r + s : [encodeUTF8(r, t), s] : r.push(typeof s == "string" ? encodeUTF8(s, t) : s);
  }
  for (const s of i) {
    const [a, c] = s;
    if (o(`
${JSON.stringify(a)}
`), typeof c == "string" || c instanceof Uint8Array)
      o(c);
    else {
      let d;
      try {
        d = JSON.stringify(c);
      } catch (u) {
        d = JSON.stringify(normalize$1(c));
      }
      o(d);
    }
  }
  return typeof r == "string" ? r : concatBuffers(r);
}
function concatBuffers(e) {
  const t = e.reduce((r, o) => r + o.length, 0), n = new Uint8Array(t);
  let i = 0;
  for (const r of e)
    n.set(r, i), i += r.length;
  return n;
}
function createAttachmentEnvelopeItem(e, t) {
  const n = typeof e.data == "string" ? encodeUTF8(e.data, t) : e.data;
  return [
    dropUndefinedKeys({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType
    }),
    n
  ];
}
const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket"
};
function envelopeItemTypeToDataCategory(e) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[e];
}
function getSdkMetadataForEnvelopeHeader(e) {
  if (!e || !e.sdk)
    return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function createEventEnvelopeHeaders(e, t, n, i) {
  const r = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return g(g(g({
    event_id: e.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, t && { sdk: t }), !!n && i && { dsn: dsnToString$1(i) }), r && {
    trace: dropUndefinedKeys(g({}, r))
  });
}
const DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n))
    return n * 1e3;
  const i = Date.parse(`${e}`);
  return isNaN(i) ? DEFAULT_RETRY_AFTER : i - t;
}
function disabledUntil(e, t) {
  return e[t] || e.all || 0;
}
function isRateLimited(e, t, n = Date.now()) {
  return disabledUntil(e, t) > n;
}
function updateRateLimits(e, { statusCode: t, headers: n }, i = Date.now()) {
  const r = g({}, e), o = n && n["x-sentry-rate-limits"], s = n && n["retry-after"];
  if (o)
    for (const a of o.trim().split(",")) {
      const [c, d, , , u] = a.split(":", 5), l = parseInt(c, 10), p = (isNaN(l) ? 60 : l) * 1e3;
      if (!d)
        r.all = i + p;
      else
        for (const f of d.split(";"))
          f === "metric_bucket" ? (!u || u.split(";").includes("custom")) && (r[f] = i + p) : r[f] = i + p;
    }
  else s ? r.all = i + parseRetryAfterHeader(s, i) : t === 429 && (r.all = i + 60 * 1e3);
  return r;
}
const DEBUG_BUILD$4 = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__, DEFAULT_ENVIRONMENT = "production";
function getGlobalEventProcessors() {
  return getGlobalSingleton("globalEventProcessors", () => []);
}
function addGlobalEventProcessor(e) {
  getGlobalEventProcessors().push(e);
}
function notifyEventProcessors(e, t, n, i = 0) {
  return new SyncPromise$1((r, o) => {
    const s = e[i];
    if (t === null || typeof s != "function")
      r(t);
    else {
      const a = s(g({}, t), n);
      DEBUG_BUILD$4 && s.id && a === null && logger$2.log(`Event processor "${s.id}" dropped event`), isThenable$1(a) ? a.then((c) => notifyEventProcessors(e, c, n, i + 1).then(r)).then(null, o) : notifyEventProcessors(e, a, n, i + 1).then(r).then(null, o);
    }
  });
}
function makeSession(e) {
  const t = timestampInSeconds(), n = {
    sid: uuid4$2(),
    init: !0,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: !1,
    toJSON: () => sessionToJSON(n)
  };
  return e && updateSession(n, e), n;
}
function updateSession(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || timestampInSeconds(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : uuid4$2()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function closeSession(e, t) {
  let n = {};
  e.status === "ok" && (n = { status: "exited" }), updateSession(e, n);
}
function sessionToJSON(e) {
  return dropUndefinedKeys({
    sid: `${e.sid}`,
    init: e.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent
    }
  });
}
const TRACE_FLAG_NONE = 0, TRACE_FLAG_SAMPLED = 1;
function spanToTraceContext(e) {
  const { spanId: t, traceId: n } = e.spanContext(), { data: i, op: r, parent_span_id: o, status: s, tags: a, origin: c } = spanToJSON(e);
  return dropUndefinedKeys({
    data: i,
    op: r,
    parent_span_id: o,
    span_id: t,
    status: s,
    tags: a,
    trace_id: n,
    origin: c
  });
}
function spanToTraceHeader(e) {
  const { traceId: t, spanId: n } = e.spanContext(), i = spanIsSampled(e);
  return generateSentryTraceHeader$1(t, n, i);
}
function spanTimeInputToSeconds(e) {
  return typeof e == "number" ? ensureTimestampInSeconds(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? ensureTimestampInSeconds(e.getTime()) : timestampInSeconds();
}
function ensureTimestampInSeconds(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function spanToJSON(e) {
  return spanIsSpanClass(e) ? e.getSpanJSON() : typeof e.toJSON == "function" ? e.toJSON() : {};
}
function spanIsSpanClass(e) {
  return typeof e.getSpanJSON == "function";
}
function spanIsSampled(e) {
  const { traceFlags: t } = e.spanContext();
  return !!(t & TRACE_FLAG_SAMPLED);
}
function prepareEvent(e, t, n, i, r, o) {
  const { normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3 } = e, c = _(g({}, t), {
    event_id: t.event_id || n.event_id || uuid4$2(),
    timestamp: t.timestamp || dateTimestampInSeconds$2()
  }), d = n.integrations || e.integrations.map((A) => A.name);
  applyClientOptions(c, e), applyIntegrationsMetadata(c, d), t.type === void 0 && applyDebugIds(c, e.stackParser);
  const u = getFinalScope(i, n.captureContext);
  n.mechanism && addExceptionMechanism$1(c, n.mechanism);
  const l = r && r.getEventProcessors ? r.getEventProcessors() : [], p = getGlobalScope().getScopeData();
  if (o) {
    const A = o.getScopeData();
    mergeScopeData(p, A);
  }
  if (u) {
    const A = u.getScopeData();
    mergeScopeData(p, A);
  }
  const f = [...n.attachments || [], ...p.attachments];
  f.length && (n.attachments = f), applyScopeDataToEvent(c, p);
  const m = [
    ...l,
    // eslint-disable-next-line deprecation/deprecation
    ...getGlobalEventProcessors(),
    // Run scope event processors _after_ all other processors
    ...p.eventProcessors
  ];
  return notifyEventProcessors(m, c, n).then((A) => (A && applyDebugMeta(A), typeof s == "number" && s > 0 ? normalizeEvent(A, s, a) : A));
}
function applyClientOptions(e, t) {
  const { environment: n, release: i, dist: r, maxValueLength: o = 250 } = t;
  "environment" in e || (e.environment = "environment" in t ? n : DEFAULT_ENVIRONMENT), e.release === void 0 && i !== void 0 && (e.release = i), e.dist === void 0 && r !== void 0 && (e.dist = r), e.message && (e.message = truncate$1(e.message, o));
  const s = e.exception && e.exception.values && e.exception.values[0];
  s && s.value && (s.value = truncate$1(s.value, o));
  const a = e.request;
  a && a.url && (a.url = truncate$1(a.url, o));
}
const debugIdStackParserCache = /* @__PURE__ */ new WeakMap();
function applyDebugIds(e, t) {
  const n = GLOBAL_OBJ$2._sentryDebugIds;
  if (!n)
    return;
  let i;
  const r = debugIdStackParserCache.get(t);
  r ? i = r : (i = /* @__PURE__ */ new Map(), debugIdStackParserCache.set(t, i));
  const o = Object.keys(n).reduce((s, a) => {
    let c;
    const d = i.get(a);
    d ? c = d : (c = t(a), i.set(a, c));
    for (let u = c.length - 1; u >= 0; u--) {
      const l = c[u];
      if (l.filename) {
        s[l.filename] = n[a];
        break;
      }
    }
    return s;
  }, {});
  try {
    e.exception.values.forEach((s) => {
      s.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = o[a.filename]);
      });
    });
  } catch (s) {
  }
}
function applyDebugMeta(e) {
  const t = {};
  try {
    e.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((r) => {
        r.debug_id && (r.abs_path ? t[r.abs_path] = r.debug_id : r.filename && (t[r.filename] = r.debug_id), delete r.debug_id);
      });
    });
  } catch (i) {
  }
  if (Object.keys(t).length === 0)
    return;
  e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
  const n = e.debug_meta.images;
  Object.keys(t).forEach((i) => {
    n.push({
      type: "sourcemap",
      code_file: i,
      debug_id: t[i]
    });
  });
}
function applyIntegrationsMetadata(e, t) {
  t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t]);
}
function normalizeEvent(e, t, n) {
  if (!e)
    return null;
  const i = g(g(g(g(g({}, e), e.breadcrumbs && {
    breadcrumbs: e.breadcrumbs.map((r) => g(g({}, r), r.data && {
      data: normalize$1(r.data, t, n)
    }))
  }), e.user && {
    user: normalize$1(e.user, t, n)
  }), e.contexts && {
    contexts: normalize$1(e.contexts, t, n)
  }), e.extra && {
    extra: normalize$1(e.extra, t, n)
  });
  return e.contexts && e.contexts.trace && i.contexts && (i.contexts.trace = e.contexts.trace, e.contexts.trace.data && (i.contexts.trace.data = normalize$1(e.contexts.trace.data, t, n))), e.spans && (i.spans = e.spans.map((r) => {
    const o = spanToJSON(r).data;
    return o && (r.data = normalize$1(o, t, n)), r;
  })), i;
}
function getFinalScope(e, t) {
  if (!t)
    return e;
  const n = e ? e.clone() : new Scope();
  return n.update(t), n;
}
function parseEventHintOrCaptureContext(e) {
  if (e)
    return hintIsScopeOrFunction(e) ? { captureContext: e } : hintIsScopeContext(e) ? {
      captureContext: e
    } : e;
}
function hintIsScopeOrFunction(e) {
  return e instanceof Scope || typeof e == "function";
}
const captureContextKeys = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext"
];
function hintIsScopeContext(e) {
  return Object.keys(e).some((t) => captureContextKeys.includes(t));
}
function captureException(e, t) {
  return getCurrentHub().captureException(e, parseEventHintOrCaptureContext(t));
}
function captureEvent(e, t) {
  return getCurrentHub().captureEvent(e, t);
}
function addBreadcrumb(e, t) {
  getCurrentHub().addBreadcrumb(e, t);
}
function setTag(e, t) {
  getCurrentHub().setTag(e, t);
}
function withScope(...e) {
  const t = getCurrentHub();
  if (e.length === 2) {
    const [n, i] = e;
    return n ? t.withScope(() => (t.getStackTop().scope = n, i(n))) : t.withScope(i);
  }
  return t.withScope(e[0]);
}
function getClient() {
  return getCurrentHub().getClient();
}
function getCurrentScope() {
  return getCurrentHub().getScope();
}
function startSession(e) {
  const t = getClient(), n = getIsolationScope(), i = getCurrentScope(), { release: r, environment: o = DEFAULT_ENVIRONMENT } = t && t.getOptions() || {}, { userAgent: s } = GLOBAL_OBJ$2.navigator || {}, a = makeSession(g(g({
    release: r,
    environment: o,
    user: i.getUser() || n.getUser()
  }, s && { userAgent: s }), e)), c = n.getSession();
  return c && c.status === "ok" && updateSession(c, { status: "exited" }), endSession(), n.setSession(a), i.setSession(a), a;
}
function endSession() {
  const e = getIsolationScope(), t = getCurrentScope(), n = t.getSession() || e.getSession();
  n && closeSession(n), _sendSessionUpdate(), e.setSession(), t.setSession();
}
function _sendSessionUpdate() {
  const e = getIsolationScope(), t = getCurrentScope(), n = getClient(), i = t.getSession() || e.getSession();
  i && n && n.captureSession && n.captureSession(i);
}
function captureSession(e = !1) {
  if (e) {
    endSession();
    return;
  }
  _sendSessionUpdate();
}
function getRootSpan(e) {
  return e.transaction;
}
function getDynamicSamplingContextFromClient(e, t, n) {
  const i = t.getOptions(), { publicKey: r } = t.getDsn() || {}, { segment: o } = n && n.getUser() || {}, s = dropUndefinedKeys({
    environment: i.environment || DEFAULT_ENVIRONMENT,
    release: i.release,
    user_segment: o,
    public_key: r,
    trace_id: e
  });
  return t.emit && t.emit("createDsc", s), s;
}
function getDynamicSamplingContextFromSpan(e) {
  const t = getClient();
  if (!t)
    return {};
  const n = getDynamicSamplingContextFromClient(spanToJSON(e).trace_id || "", t, getCurrentScope()), i = getRootSpan(e);
  if (!i)
    return n;
  const r = i && i._frozenDynamicSamplingContext;
  if (r)
    return r;
  const { sampleRate: o, source: s } = i.metadata;
  o != null && (n.sample_rate = `${o}`);
  const a = spanToJSON(i);
  return s && s !== "url" && (n.transaction = a.description), n.sampled = String(spanIsSampled(i)), t.emit && t.emit("createDsc", n), n;
}
function applyScopeDataToEvent(e, t) {
  const { fingerprint: n, span: i, breadcrumbs: r, sdkProcessingMetadata: o } = t;
  applyDataToEvent(e, t), i && applySpanToEvent(e, i), applyFingerprintToEvent(e, n), applyBreadcrumbsToEvent(e, r), applySdkMetadataToEvent(e, o);
}
function mergeScopeData(e, t) {
  const {
    extra: n,
    tags: i,
    user: r,
    contexts: o,
    level: s,
    sdkProcessingMetadata: a,
    breadcrumbs: c,
    fingerprint: d,
    eventProcessors: u,
    attachments: l,
    propagationContext: p,
    // eslint-disable-next-line deprecation/deprecation
    transactionName: f,
    span: m
  } = t;
  mergeAndOverwriteScopeData(e, "extra", n), mergeAndOverwriteScopeData(e, "tags", i), mergeAndOverwriteScopeData(e, "user", r), mergeAndOverwriteScopeData(e, "contexts", o), mergeAndOverwriteScopeData(e, "sdkProcessingMetadata", a), s && (e.level = s), f && (e.transactionName = f), m && (e.span = m), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), d.length && (e.fingerprint = [...e.fingerprint, ...d]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), l.length && (e.attachments = [...e.attachments, ...l]), e.propagationContext = g(g({}, e.propagationContext), p);
}
function mergeAndOverwriteScopeData(e, t, n) {
  if (n && Object.keys(n).length) {
    e[t] = g({}, e[t]);
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[t][i] = n[i]);
  }
}
function applyDataToEvent(e, t) {
  const {
    extra: n,
    tags: i,
    user: r,
    contexts: o,
    level: s,
    // eslint-disable-next-line deprecation/deprecation
    transactionName: a
  } = t, c = dropUndefinedKeys(n);
  c && Object.keys(c).length && (e.extra = g(g({}, c), e.extra));
  const d = dropUndefinedKeys(i);
  d && Object.keys(d).length && (e.tags = g(g({}, d), e.tags));
  const u = dropUndefinedKeys(r);
  u && Object.keys(u).length && (e.user = g(g({}, u), e.user));
  const l = dropUndefinedKeys(o);
  l && Object.keys(l).length && (e.contexts = g(g({}, l), e.contexts)), s && (e.level = s), a && (e.transaction = a);
}
function applyBreadcrumbsToEvent(e, t) {
  const n = [...e.breadcrumbs || [], ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function applySdkMetadataToEvent(e, t) {
  e.sdkProcessingMetadata = g(g({}, e.sdkProcessingMetadata), t);
}
function applySpanToEvent(e, t) {
  e.contexts = g({ trace: spanToTraceContext(t) }, e.contexts);
  const n = getRootSpan(t);
  if (n) {
    e.sdkProcessingMetadata = g({
      dynamicSamplingContext: getDynamicSamplingContextFromSpan(t)
    }, e.sdkProcessingMetadata);
    const i = spanToJSON(n).description;
    i && (e.tags = g({ transaction: i }, e.tags));
  }
}
function applyFingerprintToEvent(e, t) {
  e.fingerprint = e.fingerprint ? arrayify(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
}
const DEFAULT_MAX_BREADCRUMBS = 100;
let globalScope;
class Scope {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called after {@link applyToEvent}. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  // eslint-disable-next-line deprecation/deprecation
  /**
   * Transaction Name
   */
  /** Span */
  /** Session */
  /** Request Mode Session Status */
  /** The client on this scope */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = generatePropagationContext();
  }
  /**
   * Inherit values from the parent scope.
   * @deprecated Use `scope.clone()` and `new Scope()` instead.
   */
  static clone(t) {
    return t ? t.clone() : new Scope();
  }
  /**
   * Clone this scope instance.
   */
  clone() {
    const t = new Scope();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = g({}, this._tags), t._extra = g({}, this._extra), t._contexts = g({}, this._contexts), t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = g({}, this._sdkProcessingMetadata), t._propagationContext = g({}, this._propagationContext), t._client = this._client, t;
  }
  /** Update the client on the scope. */
  setClient(t) {
    this._client = t;
  }
  /**
   * Get the client assigned to this scope.
   *
   * It is generally recommended to use the global function `Sentry.getClient()` instead, unless you know what you are doing.
   */
  getClient() {
    return this._client;
  }
  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  /**
   * @inheritDoc
   */
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  /**
   * @inheritDoc
   */
  setUser(t) {
    return this._user = t || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      segment: void 0,
      username: void 0
    }, this._session && updateSession(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getUser() {
    return this._user;
  }
  /**
   * @inheritDoc
   */
  getRequestSession() {
    return this._requestSession;
  }
  /**
   * @inheritDoc
   */
  setRequestSession(t) {
    return this._requestSession = t, this;
  }
  /**
   * @inheritDoc
   */
  setTags(t) {
    return this._tags = g(g({}, this._tags), t), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setTag(t, n) {
    return this._tags = _(g({}, this._tags), { [t]: n }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtras(t) {
    return this._extra = g(g({}, this._extra), t), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtra(t, n) {
    return this._extra = _(g({}, this._extra), { [t]: n }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the transaction name on the scope for future events.
   */
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setContext(t, n) {
    return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the Span on the scope.
   * @param span Span
   * @deprecated Instead of setting a span on a scope, use `startSpan()`/`startSpanManual()` instead.
   */
  setSpan(t) {
    return this._span = t, this._notifyScopeListeners(), this;
  }
  /**
   * Returns the `Span` if there is one.
   * @deprecated Use `getActiveSpan()` instead.
   */
  getSpan() {
    return this._span;
  }
  /**
   * Returns the `Transaction` attached to the scope (if there is one).
   * @deprecated You should not rely on the transaction, but just use `startSpan()` APIs instead.
   */
  getTransaction() {
    const t = this._span;
    return t && t.transaction;
  }
  /**
   * @inheritDoc
   */
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getSession() {
    return this._session;
  }
  /**
   * @inheritDoc
   */
  update(t) {
    if (!t)
      return this;
    const n = typeof t == "function" ? t(this) : t;
    if (n instanceof Scope) {
      const i = n.getScopeData();
      this._tags = g(g({}, this._tags), i.tags), this._extra = g(g({}, this._extra), i.extra), this._contexts = g(g({}, this._contexts), i.contexts), i.user && Object.keys(i.user).length && (this._user = i.user), i.level && (this._level = i.level), i.fingerprint.length && (this._fingerprint = i.fingerprint), n.getRequestSession() && (this._requestSession = n.getRequestSession()), i.propagationContext && (this._propagationContext = i.propagationContext);
    } else if (isPlainObject$1(n)) {
      const i = t;
      this._tags = g(g({}, this._tags), i.tags), this._extra = g(g({}, this._extra), i.extra), this._contexts = g(g({}, this._contexts), i.contexts), i.user && (this._user = i.user), i.level && (this._level = i.level), i.fingerprint && (this._fingerprint = i.fingerprint), i.requestSession && (this._requestSession = i.requestSession), i.propagationContext && (this._propagationContext = i.propagationContext);
    }
    return this;
  }
  /**
   * @inheritDoc
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = generatePropagationContext(), this;
  }
  /**
   * @inheritDoc
   */
  addBreadcrumb(t, n) {
    const i = typeof n == "number" ? n : DEFAULT_MAX_BREADCRUMBS;
    if (i <= 0)
      return this;
    const r = g({
      timestamp: dateTimestampInSeconds$2()
    }, t), o = this._breadcrumbs;
    return o.push(r), this._breadcrumbs = o.length > i ? o.slice(-i) : o, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * @inheritDoc
   */
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  /**
   * @inheritDoc
   * @deprecated Use `getScopeData()` instead.
   */
  getAttachments() {
    return this.getScopeData().attachments;
  }
  /**
   * @inheritDoc
   */
  clearAttachments() {
    return this._attachments = [], this;
  }
  /** @inheritDoc */
  getScopeData() {
    const {
      _breadcrumbs: t,
      _attachments: n,
      _contexts: i,
      _tags: r,
      _extra: o,
      _user: s,
      _level: a,
      _fingerprint: c,
      _eventProcessors: d,
      _propagationContext: u,
      _sdkProcessingMetadata: l,
      _transactionName: p,
      _span: f
    } = this;
    return {
      breadcrumbs: t,
      attachments: n,
      contexts: i,
      tags: r,
      extra: o,
      user: s,
      level: a,
      fingerprint: c || [],
      eventProcessors: d,
      propagationContext: u,
      sdkProcessingMetadata: l,
      transactionName: p,
      span: f
    };
  }
  /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   * @deprecated Use `applyScopeDataToEvent()` directly
   */
  applyToEvent(t, n = {}, i = []) {
    applyScopeDataToEvent(t, this.getScopeData());
    const r = [
      ...i,
      // eslint-disable-next-line deprecation/deprecation
      ...getGlobalEventProcessors(),
      ...this._eventProcessors
    ];
    return notifyEventProcessors(r, t, n);
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = g(g({}, this._sdkProcessingMetadata), t), this;
  }
  /**
   * @inheritDoc
   */
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  /**
   * @inheritDoc
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @param exception The exception to capture.
   * @param hint Optinal additional data to attach to the Sentry event.
   * @returns the id of the captured Sentry event.
   */
  captureException(t, n) {
    const i = n && n.event_id ? n.event_id : uuid4$2();
    if (!this._client)
      return logger$2.warn("No client configured on scope - will not capture exception!"), i;
    const r = new Error("Sentry syntheticException");
    return this._client.captureException(
      t,
      _(g({
        originalException: t,
        syntheticException: r
      }, n), {
        event_id: i
      }),
      this
    ), i;
  }
  /**
   * Capture a message for this scope.
   *
   * @param message The message to capture.
   * @param level An optional severity level to report the message with.
   * @param hint Optional additional data to attach to the Sentry event.
   * @returns the id of the captured message.
   */
  captureMessage(t, n, i) {
    const r = i && i.event_id ? i.event_id : uuid4$2();
    if (!this._client)
      return logger$2.warn("No client configured on scope - will not capture message!"), r;
    const o = new Error(t);
    return this._client.captureMessage(
      t,
      n,
      _(g({
        originalException: t,
        syntheticException: o
      }, i), {
        event_id: r
      }),
      this
    ), r;
  }
  /**
   * Captures a manually created event for this scope and sends it to Sentry.
   *
   * @param exception The event to capture.
   * @param hint Optional additional data to attach to the Sentry event.
   * @returns the id of the captured event.
   */
  captureEvent(t, n) {
    const i = n && n.event_id ? n.event_id : uuid4$2();
    return this._client ? (this._client.captureEvent(t, _(g({}, n), { event_id: i }), this), i) : (logger$2.warn("No client configured on scope - will not capture event!"), i);
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
function getGlobalScope() {
  return globalScope || (globalScope = new Scope()), globalScope;
}
function generatePropagationContext() {
  return {
    traceId: uuid4$2(),
    spanId: uuid4$2().substring(16)
  };
}
const SDK_VERSION = "7.120.3", API_VERSION = parseFloat(SDK_VERSION), DEFAULT_BREADCRUMBS = 100;
class Hub {
  /** Is a {@link Layer}[] containing the client and scope */
  /** Contains the last event id of a captured event.  */
  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   *
   * @deprecated Instantiation of Hub objects is deprecated and the constructor will be removed in version 8 of the SDK.
   *
   * If you are currently using the Hub for multi-client use like so:
   *
   * ```
   * // OLD
   * const hub = new Hub();
   * hub.bindClient(client);
   * makeMain(hub)
   * ```
   *
   * instead initialize the client as follows:
   *
   * ```
   * // NEW
   * Sentry.withIsolationScope(() => {
   *    Sentry.setCurrentClient(client);
   *    client.init();
   * });
   * ```
   *
   * If you are using the Hub to capture events like so:
   *
   * ```
   * // OLD
   * const client = new Client();
   * const hub = new Hub(client);
   * hub.captureException()
   * ```
   *
   * instead capture isolated events as follows:
   *
   * ```
   * // NEW
   * const client = new Client();
   * const scope = new Scope();
   * scope.setClient(client);
   * scope.captureException();
   * ```
   */
  constructor(t, n, i, r = API_VERSION) {
    this._version = r;
    let o;
    n ? o = n : (o = new Scope(), o.setClient(t));
    let s;
    i ? s = i : (s = new Scope(), s.setClient(t)), this._stack = [{ scope: o }], t && this.bindClient(t), this._isolationScope = s;
  }
  /**
   * Checks if this hub's version is older than the given version.
   *
   * @param version A version number to compare to.
   * @return True if the given version is newer; otherwise false.
   *
   * @deprecated This will be removed in v8.
   */
  isOlderThan(t) {
    return this._version < t;
  }
  /**
   * This binds the given client to the current scope.
   * @param client An SDK client (client) instance.
   *
   * @deprecated Use `initAndBind()` directly, or `setCurrentClient()` and/or `client.init()` instead.
   */
  bindClient(t) {
    const n = this.getStackTop();
    n.client = t, n.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations();
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `withScope` instead.
   */
  pushScope() {
    const t = this.getScope().clone();
    return this.getStack().push({
      // eslint-disable-next-line deprecation/deprecation
      client: this.getClient(),
      scope: t
    }), t;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `withScope` instead.
   */
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.withScope()` instead.
   */
  withScope(t) {
    const n = this.pushScope();
    let i;
    try {
      i = t(n);
    } catch (r) {
      throw this.popScope(), r;
    }
    return isThenable$1(i) ? i.then(
      (r) => (this.popScope(), r),
      (r) => {
        throw this.popScope(), r;
      }
    ) : (this.popScope(), i);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.getClient()` instead.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   *
   * @deprecated Use `Sentry.getCurrentScope()` instead.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * @deprecated Use `Sentry.getIsolationScope()` instead.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the scope stack for domains or the process.
   * @deprecated This will be removed in v8.
   */
  getStack() {
    return this._stack;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   * @deprecated This will be removed in v8.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.captureException()` instead.
   */
  captureException(t, n) {
    const i = this._lastEventId = n && n.event_id ? n.event_id : uuid4$2(), r = new Error("Sentry syntheticException");
    return this.getScope().captureException(t, _(g({
      originalException: t,
      syntheticException: r
    }, n), {
      event_id: i
    })), i;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use  `Sentry.captureMessage()` instead.
   */
  captureMessage(t, n, i) {
    const r = this._lastEventId = i && i.event_id ? i.event_id : uuid4$2(), o = new Error(t);
    return this.getScope().captureMessage(t, n, _(g({
      originalException: t,
      syntheticException: o
    }, i), {
      event_id: r
    })), r;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.captureEvent()` instead.
   */
  captureEvent(t, n) {
    const i = n && n.event_id ? n.event_id : uuid4$2();
    return t.type || (this._lastEventId = i), this.getScope().captureEvent(t, _(g({}, n), { event_id: i })), i;
  }
  /**
   * @inheritDoc
   *
   * @deprecated This will be removed in v8.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.addBreadcrumb()` instead.
   */
  addBreadcrumb(t, n) {
    const { scope: i, client: r } = this.getStackTop();
    if (!r) return;
    const { beforeBreadcrumb: o = null, maxBreadcrumbs: s = DEFAULT_BREADCRUMBS } = r.getOptions && r.getOptions() || {};
    if (s <= 0) return;
    const a = dateTimestampInSeconds$2(), c = g({ timestamp: a }, t), d = o ? consoleSandbox$2(() => o(c, n)) : c;
    d !== null && (r.emit && r.emit("beforeAddBreadcrumb", d, n), i.addBreadcrumb(d, s));
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setUser()` instead.
   */
  setUser(t) {
    this.getScope().setUser(t), this.getIsolationScope().setUser(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setTags()` instead.
   */
  setTags(t) {
    this.getScope().setTags(t), this.getIsolationScope().setTags(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setExtras()` instead.
   */
  setExtras(t) {
    this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setTag()` instead.
   */
  setTag(t, n) {
    this.getScope().setTag(t, n), this.getIsolationScope().setTag(t, n);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setExtra()` instead.
   */
  setExtra(t, n) {
    this.getScope().setExtra(t, n), this.getIsolationScope().setExtra(t, n);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setContext()` instead.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setContext(t, n) {
    this.getScope().setContext(t, n), this.getIsolationScope().setContext(t, n);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `getScope()` directly.
   */
  configureScope(t) {
    const { scope: n, client: i } = this.getStackTop();
    i && t(n);
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
  run(t) {
    const n = makeMain(this);
    try {
      t(this);
    } finally {
      makeMain(n);
    }
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.getClient().getIntegrationByName()` instead.
   */
  getIntegration(t) {
    const n = this.getClient();
    if (!n) return null;
    try {
      return n.getIntegration(t);
    } catch (i) {
      return DEBUG_BUILD$4 && logger$2.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null;
    }
  }
  /**
   * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
   *
   * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
   * new child span within the transaction or any span, call the respective `.startChild()` method.
   *
   * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
   *
   * The transaction must be finished with a call to its `.end()` method, at which point the transaction with all its
   * finished child spans will be sent to Sentry.
   *
   * @param context Properties of the new `Transaction`.
   * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
   * default values). See {@link Options.tracesSampler}.
   *
   * @returns The transaction which was just started
   *
   * @deprecated Use `startSpan()`, `startSpanManual()` or `startInactiveSpan()` instead.
   */
  startTransaction(t, n) {
    const i = this._callExtensionMethod("startTransaction", t, n);
    return DEBUG_BUILD$4 && !i && (this.getClient() ? logger$2.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : logger$2.warn(
      "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
    )), i;
  }
  /**
   * @inheritDoc
   * @deprecated Use `spanToTraceHeader()` instead.
   */
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use top level `captureSession` instead.
   */
  captureSession(t = !1) {
    if (t)
      return this.endSession();
    this._sendSessionUpdate();
  }
  /**
   * @inheritDoc
   * @deprecated Use top level `endSession` instead.
   */
  endSession() {
    const n = this.getStackTop().scope, i = n.getSession();
    i && closeSession(i), this._sendSessionUpdate(), n.setSession();
  }
  /**
   * @inheritDoc
   * @deprecated Use top level `startSession` instead.
   */
  startSession(t) {
    const { scope: n, client: i } = this.getStackTop(), { release: r, environment: o = DEFAULT_ENVIRONMENT } = i && i.getOptions() || {}, { userAgent: s } = GLOBAL_OBJ$2.navigator || {}, a = makeSession(g(g({
      release: r,
      environment: o,
      user: n.getUser()
    }, s && { userAgent: s }), t)), c = n.getSession && n.getSession();
    return c && c.status === "ok" && updateSession(c, { status: "exited" }), this.endSession(), n.setSession(a), a;
  }
  /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   *
   * @deprecated Use top-level `getClient().getOptions().sendDefaultPii` instead. This function
   * only unnecessarily increased API surface but only wrapped accessing the option.
   */
  shouldSendDefaultPii() {
    const t = this.getClient(), n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  /**
   * Sends the current Session on the scope
   */
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(), i = t.getSession();
    i && n && n.captureSession && n.captureSession(i);
  }
  /**
   * Calls global extension method and binding current instance to the function call
   */
  // @ts-expect-error Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _callExtensionMethod(t, ...n) {
    const r = getMainCarrier().__SENTRY__;
    if (r && r.extensions && typeof r.extensions[t] == "function")
      return r.extensions[t].apply(this, n);
    DEBUG_BUILD$4 && logger$2.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function getMainCarrier() {
  return GLOBAL_OBJ$2.__SENTRY__ = GLOBAL_OBJ$2.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, GLOBAL_OBJ$2;
}
function makeMain(e) {
  const t = getMainCarrier(), n = getHubFromCarrier(t);
  return setHubOnCarrier(t, e), n;
}
function getCurrentHub() {
  const e = getMainCarrier();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t)
      return t;
  }
  return getGlobalHub(e);
}
function getIsolationScope() {
  return getCurrentHub().getIsolationScope();
}
function getGlobalHub(e = getMainCarrier()) {
  return (!hasHubOnCarrier(e) || // eslint-disable-next-line deprecation/deprecation
  getHubFromCarrier(e).isOlderThan(API_VERSION)) && setHubOnCarrier(e, new Hub()), getHubFromCarrier(e);
}
function hasHubOnCarrier(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function getHubFromCarrier(e) {
  return getGlobalSingleton("hub", () => new Hub(), e);
}
function setHubOnCarrier(e, t) {
  if (!e) return !1;
  const n = e.__SENTRY__ = e.__SENTRY__ || {};
  return n.hub = t, !0;
}
function getActiveTransaction(e) {
  return getCurrentHub().getScope().getTransaction();
}
let errorsInstrumented = !1;
function registerErrorInstrumentation() {
  errorsInstrumented || (errorsInstrumented = !0, addGlobalErrorInstrumentationHandler$1(errorCallback), addGlobalUnhandledRejectionInstrumentationHandler$1(errorCallback));
}
function errorCallback() {
  const e = getActiveTransaction();
  if (e) {
    const t = "internal_error";
    DEBUG_BUILD$4 && logger$2.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t);
  }
}
errorCallback.tag = "sentry_tracingErrorCallback";
var SpanStatus;
(function(e) {
  const t = "ok";
  e.Ok = t;
  const n = "deadline_exceeded";
  e.DeadlineExceeded = n;
  const i = "unauthenticated";
  e.Unauthenticated = i;
  const r = "permission_denied";
  e.PermissionDenied = r;
  const o = "not_found";
  e.NotFound = o;
  const s = "resource_exhausted";
  e.ResourceExhausted = s;
  const a = "invalid_argument";
  e.InvalidArgument = a;
  const c = "unimplemented";
  e.Unimplemented = c;
  const d = "unavailable";
  e.Unavailable = d;
  const u = "internal_error";
  e.InternalError = u;
  const l = "unknown_error";
  e.UnknownError = l;
  const p = "cancelled";
  e.Cancelled = p;
  const f = "already_exists";
  e.AlreadyExists = f;
  const m = "failed_precondition";
  e.FailedPrecondition = m;
  const I = "aborted";
  e.Aborted = I;
  const A = "out_of_range";
  e.OutOfRange = A;
  const h = "data_loss";
  e.DataLoss = h;
})(SpanStatus || (SpanStatus = {}));
function getSpanStatusFromHttpCode(e) {
  if (e < 400 && e >= 100)
    return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function setHttpStatus(e, t) {
  e.setTag("http.status_code", String(t)), e.setData("http.response.status_code", t);
  const n = getSpanStatusFromHttpCode(t);
  n !== "unknown_error" && e.setStatus(n);
}
function hasTracingEnabled(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
    return !1;
  const t = getClient(), n = e || t && t.getOptions();
  return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
}
function startInactiveSpan(e) {
  if (!hasTracingEnabled())
    return;
  const t = normalizeContext(e), n = getCurrentHub(), i = e.scope ? (
    // eslint-disable-next-line deprecation/deprecation
    e.scope.getSpan()
  ) : getActiveSpan();
  if (e.onlyIfParent && !i)
    return;
  const s = (e.scope || getCurrentScope()).clone();
  return createChildSpanOrTransaction(n, {
    parentSpan: i,
    spanContext: t,
    forceTransaction: e.forceTransaction,
    scope: s
  });
}
function getActiveSpan() {
  return getCurrentScope().getSpan();
}
function createChildSpanOrTransaction(e, {
  parentSpan: t,
  spanContext: n,
  forceTransaction: i,
  scope: r
}) {
  if (!hasTracingEnabled())
    return;
  const o = getIsolationScope();
  let s;
  if (t && !i)
    s = t.startChild(n);
  else if (t) {
    const a = getDynamicSamplingContextFromSpan(t), { traceId: c, spanId: d } = t.spanContext(), u = spanIsSampled(t);
    s = e.startTransaction(_(g({
      traceId: c,
      parentSpanId: d,
      parentSampled: u
    }, n), {
      metadata: g({
        dynamicSamplingContext: a
      }, n.metadata)
    }));
  } else {
    const { traceId: a, dsc: c, parentSpanId: d, sampled: u } = g(g({}, o.getPropagationContext()), r.getPropagationContext());
    s = e.startTransaction(_(g({
      traceId: a,
      parentSpanId: d,
      parentSampled: u
    }, n), {
      metadata: g({
        dynamicSamplingContext: c
      }, n.metadata)
    }));
  }
  return r.setSpan(s), setCapturedScopesOnSpan(s, r, o), s;
}
function normalizeContext(e) {
  if (e.startTime) {
    const t = g({}, e);
    return t.startTimestamp = spanTimeInputToSeconds(e.startTime), delete t.startTime, t;
  }
  return e;
}
const SCOPE_ON_START_SPAN_FIELD = "_sentryScope", ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
function setCapturedScopesOnSpan(e, t, n) {
  e && (addNonEnumerableProperty$2(e, ISOLATION_SCOPE_ON_START_SPAN_FIELD, n), addNonEnumerableProperty$2(e, SCOPE_ON_START_SPAN_FIELD, t));
}
function getCapturedScopesOnSpan(e) {
  return {
    scope: e[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: e[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
  };
}
function getMetricSummaryJsonForSpan(e) {
}
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source", SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate", SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op", SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin", SEMANTIC_ATTRIBUTE_PROFILE_ID = "profile_id";
class SpanRecorder {
  constructor(t = 1e3) {
    this._maxlen = t, this.spans = [];
  }
  /**
   * This is just so that we don't run out of memory while recording a lot
   * of spans. At some point we just stop and flush out the start of the
   * trace tree (i.e.the first n spans with the smallest
   * start_timestamp).
   */
  add(t) {
    this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t);
  }
}
class Span {
  /**
   * Tags for the span.
   * @deprecated Use `spanToJSON(span).atttributes` instead.
   */
  /**
   * Data for the span.
   * @deprecated Use `spanToJSON(span).atttributes` instead.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  /**
   * List of spans that were finalized
   *
   * @deprecated This property will no longer be public. Span recording will be handled internally.
   */
  /**
   * @inheritDoc
   * @deprecated Use top level `Sentry.getRootSpan()` instead
   */
  /**
   * The instrumenter that created this span.
   *
   * TODO (v8): This can probably be replaced by an `instanceOf` check of the span class.
   *            the instrumenter can only be sentry or otel so we can check the span instance
   *            to verify which one it is and remove this field entirely.
   *
   * @deprecated This field will be removed.
   */
  /** Epoch timestamp in seconds when the span started. */
  /** Epoch timestamp in seconds when the span ended. */
  /** Internal keeper of the status */
  /**
   * You should never call the constructor manually, always use `Sentry.startTransaction()`
   * or call `startChild()` on an existing span.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(t = {}) {
    this._traceId = t.traceId || uuid4$2(), this._spanId = t.spanId || uuid4$2().substring(16), this._startTime = t.startTimestamp || timestampInSeconds(), this.tags = t.tags ? g({}, t.tags) : {}, this.data = t.data ? g({}, t.data) : {}, this.instrumenter = t.instrumenter || "sentry", this._attributes = {}, this.setAttributes(g({
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: t.origin || "manual",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: t.op
    }, t.attributes)), this._name = t.name || t.description, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.status && (this._status = t.status), t.endTimestamp && (this._endTime = t.endTimestamp), t.exclusiveTime !== void 0 && (this._exclusiveTime = t.exclusiveTime), this._measurements = t.measurements ? g({}, t.measurements) : {};
  }
  // This rule conflicts with another eslint rule :(
  /* eslint-disable @typescript-eslint/member-ordering */
  /**
   * An alias for `description` of the Span.
   * @deprecated Use `spanToJSON(span).description` instead.
   */
  get name() {
    return this._name || "";
  }
  /**
   * Update the name of the span.
   * @deprecated Use `spanToJSON(span).description` instead.
   */
  set name(t) {
    this.updateName(t);
  }
  /**
   * Get the description of the Span.
   * @deprecated Use `spanToJSON(span).description` instead.
   */
  get description() {
    return this._name;
  }
  /**
   * Get the description of the Span.
   * @deprecated Use `spanToJSON(span).description` instead.
   */
  set description(t) {
    this._name = t;
  }
  /**
   * The ID of the trace.
   * @deprecated Use `spanContext().traceId` instead.
   */
  get traceId() {
    return this._traceId;
  }
  /**
   * The ID of the trace.
   * @deprecated You cannot update the traceId of a span after span creation.
   */
  set traceId(t) {
    this._traceId = t;
  }
  /**
   * The ID of the span.
   * @deprecated Use `spanContext().spanId` instead.
   */
  get spanId() {
    return this._spanId;
  }
  /**
   * The ID of the span.
   * @deprecated You cannot update the spanId of a span after span creation.
   */
  set spanId(t) {
    this._spanId = t;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `startSpan` functions instead.
   */
  set parentSpanId(t) {
    this._parentSpanId = t;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `spanToJSON(span).parent_span_id` instead.
   */
  get parentSpanId() {
    return this._parentSpanId;
  }
  /**
   * Was this span chosen to be sent as part of the sample?
   * @deprecated Use `isRecording()` instead.
   */
  get sampled() {
    return this._sampled;
  }
  /**
   * Was this span chosen to be sent as part of the sample?
   * @deprecated You cannot update the sampling decision of a span after span creation.
   */
  set sampled(t) {
    this._sampled = t;
  }
  /**
   * Attributes for the span.
   * @deprecated Use `spanToJSON(span).atttributes` instead.
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Attributes for the span.
   * @deprecated Use `setAttributes()` instead.
   */
  set attributes(t) {
    this._attributes = t;
  }
  /**
   * Timestamp in seconds (epoch time) indicating when the span started.
   * @deprecated Use `spanToJSON()` instead.
   */
  get startTimestamp() {
    return this._startTime;
  }
  /**
   * Timestamp in seconds (epoch time) indicating when the span started.
   * @deprecated In v8, you will not be able to update the span start time after creation.
   */
  set startTimestamp(t) {
    this._startTime = t;
  }
  /**
   * Timestamp in seconds when the span ended.
   * @deprecated Use `spanToJSON()` instead.
   */
  get endTimestamp() {
    return this._endTime;
  }
  /**
   * Timestamp in seconds when the span ended.
   * @deprecated Set the end time via `span.end()` instead.
   */
  set endTimestamp(t) {
    this._endTime = t;
  }
  /**
   * The status of the span.
   *
   * @deprecated Use `spanToJSON().status` instead to get the status.
   */
  get status() {
    return this._status;
  }
  /**
   * The status of the span.
   *
   * @deprecated Use `.setStatus()` instead to set or update the status.
   */
  set status(t) {
    this._status = t;
  }
  /**
   * Operation of the span
   *
   * @deprecated Use `spanToJSON().op` to read the op instead.
   */
  get op() {
    return this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP];
  }
  /**
   * Operation of the span
   *
   * @deprecated Use `startSpan()` functions to set or `span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, 'op')
   *             to update the span instead.
   */
  set op(t) {
    this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, t);
  }
  /**
   * The origin of the span, giving context about what created the span.
   *
   * @deprecated Use `spanToJSON().origin` to read the origin instead.
   */
  get origin() {
    return this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
  }
  /**
   * The origin of the span, giving context about what created the span.
   *
   * @deprecated Use `startSpan()` functions to set the origin instead.
   */
  set origin(t) {
    this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, t);
  }
  /* eslint-enable @typescript-eslint/member-ordering */
  /** @inheritdoc */
  spanContext() {
    const { _spanId: t, _traceId: n, _sampled: i } = this;
    return {
      spanId: t,
      traceId: n,
      traceFlags: i ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
    };
  }
  /**
   * Creates a new `Span` while setting the current `Span.id` as `parentSpanId`.
   * Also the `sampled` decision will be inherited.
   *
   * @deprecated Use `startSpan()`, `startSpanManual()` or `startInactiveSpan()` instead.
   */
  startChild(t) {
    const n = new Span(_(g({}, t), {
      parentSpanId: this._spanId,
      sampled: this._sampled,
      traceId: this._traceId
    }));
    n.spanRecorder = this.spanRecorder, n.spanRecorder && n.spanRecorder.add(n);
    const i = getRootSpan(this);
    if (n.transaction = i, DEBUG_BUILD$4 && i) {
      const r = t && t.op || "< unknown op >", o = spanToJSON(n).description || "< unknown name >", s = i.spanContext().spanId, a = `[Tracing] Starting '${r}' span on transaction '${o}' (${s}).`;
      logger$2.log(a), this._logMessage = a;
    }
    return n;
  }
  /**
   * Sets the tag attribute on the current span.
   *
   * Can also be used to unset a tag, by passing `undefined`.
   *
   * @param key Tag key
   * @param value Tag value
   * @deprecated Use `setAttribute()` instead.
   */
  setTag(t, n) {
    return this.tags = _(g({}, this.tags), { [t]: n }), this;
  }
  /**
   * Sets the data attribute on the current span
   * @param key Data key
   * @param value Data value
   * @deprecated Use `setAttribute()` instead.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData(t, n) {
    return this.data = _(g({}, this.data), { [t]: n }), this;
  }
  /** @inheritdoc */
  setAttribute(t, n) {
    n === void 0 ? delete this._attributes[t] : this._attributes[t] = n;
  }
  /** @inheritdoc */
  setAttributes(t) {
    Object.keys(t).forEach((n) => this.setAttribute(n, t[n]));
  }
  /**
   * @inheritDoc
   */
  setStatus(t) {
    return this._status = t, this;
  }
  /**
   * @inheritDoc
   * @deprecated Use top-level `setHttpStatus()` instead.
   */
  setHttpStatus(t) {
    return setHttpStatus(this, t), this;
  }
  /**
   * @inheritdoc
   *
   * @deprecated Use `.updateName()` instead.
   */
  setName(t) {
    this.updateName(t);
  }
  /**
   * @inheritDoc
   */
  updateName(t) {
    return this._name = t, this;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `spanToJSON(span).status === 'ok'` instead.
   */
  isSuccess() {
    return this._status === "ok";
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `.end()` instead.
   */
  finish(t) {
    return this.end(t);
  }
  /** @inheritdoc */
  end(t) {
    if (this._endTime)
      return;
    const n = getRootSpan(this);
    if (DEBUG_BUILD$4 && // Don't call this for transactions
    n && n.spanContext().spanId !== this._spanId) {
      const i = this._logMessage;
      i && logger$2.log(i.replace("Starting", "Finishing"));
    }
    this._endTime = spanTimeInputToSeconds(t);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `spanToTraceHeader()` instead.
   */
  toTraceparent() {
    return spanToTraceHeader(this);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `spanToJSON()` or access the fields directly instead.
   */
  toContext() {
    return dropUndefinedKeys({
      data: this._getData(),
      description: this._name,
      endTimestamp: this._endTime,
      // eslint-disable-next-line deprecation/deprecation
      op: this.op,
      parentSpanId: this._parentSpanId,
      sampled: this._sampled,
      spanId: this._spanId,
      startTimestamp: this._startTime,
      status: this._status,
      // eslint-disable-next-line deprecation/deprecation
      tags: this.tags,
      traceId: this._traceId
    });
  }
  /**
   * @inheritDoc
   *
   * @deprecated Update the fields directly instead.
   */
  updateWithContext(t) {
    return this.data = t.data || {}, this._name = t.name || t.description, this._endTime = t.endTimestamp, this.op = t.op, this._parentSpanId = t.parentSpanId, this._sampled = t.sampled, this._spanId = t.spanId || this._spanId, this._startTime = t.startTimestamp || this._startTime, this._status = t.status, this.tags = t.tags || {}, this._traceId = t.traceId || this._traceId, this;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `spanToTraceContext()` util function instead.
   */
  getTraceContext() {
    return spanToTraceContext(this);
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return dropUndefinedKeys({
      data: this._getData(),
      description: this._name,
      op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: this._status,
      // eslint-disable-next-line deprecation/deprecation
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      _metrics_summary: void 0,
      profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._exclusiveTime,
      measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
    });
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * Convert the object to JSON.
   * @deprecated Use `spanToJSON(span)` instead.
   */
  toJSON() {
    return this.getSpanJSON();
  }
  /**
   * Get the merged data for this span.
   * For now, this combines `data` and `attributes` together,
   * until eventually we can ingest `attributes` directly.
   */
  _getData() {
    const { data: t, _attributes: n } = this, i = Object.keys(t).length > 0, r = Object.keys(n).length > 0;
    if (!(!i && !r))
      return i && r ? g(g({}, t), n) : i ? t : n;
  }
}
class Transaction extends Span {
  /**
   * The reference to the current hub.
   */
  // eslint-disable-next-line deprecation/deprecation
  // DO NOT yet remove this property, it is used in a hack for v7 backwards compatibility.
  /**
   * This constructor should never be called manually. Those instrumenting tracing should use
   * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
   * @internal
   * @hideconstructor
   * @hidden
   *
   * @deprecated Transactions will be removed in v8. Use spans instead.
   */
  // eslint-disable-next-line deprecation/deprecation
  constructor(t, n) {
    super(t), this._contexts = {}, this._hub = n || getCurrentHub(), this._name = t.name || "", this._metadata = g({}, t.metadata), this._trimEnd = t.trimEnd, this.transaction = this;
    const i = this._metadata.dynamicSamplingContext;
    i && (this._frozenDynamicSamplingContext = g({}, i));
  }
  // This sadly conflicts with the getter/setter ordering :(
  /* eslint-disable @typescript-eslint/member-ordering */
  /**
   * Getter for `name` property.
   * @deprecated Use `spanToJSON(span).description` instead.
   */
  get name() {
    return this._name;
  }
  /**
   * Setter for `name` property, which also sets `source` as custom.
   * @deprecated Use `updateName()` and `setMetadata()` instead.
   */
  set name(t) {
    this.setName(t);
  }
  /**
   * Get the metadata for this transaction.
   * @deprecated Use `spanGetMetadata(transaction)` instead.
   */
  get metadata() {
    return g(g(g({
      // Defaults
      // eslint-disable-next-line deprecation/deprecation
      source: "custom",
      spanMetadata: {}
    }, this._metadata), this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
      source: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
    }), this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
      sampleRate: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]
    });
  }
  /**
   * Update the metadata for this transaction.
   * @deprecated Use `spanGetMetadata(transaction)` instead.
   */
  set metadata(t) {
    this._metadata = t;
  }
  /* eslint-enable @typescript-eslint/member-ordering */
  /**
   * Setter for `name` property, which also sets `source` on the metadata.
   *
   * @deprecated Use `.updateName()` and `.setAttribute()` instead.
   */
  setName(t, n = "custom") {
    this._name = t, this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, n);
  }
  /** @inheritdoc */
  updateName(t) {
    return this._name = t, this;
  }
  /**
   * Attaches SpanRecorder to the span itself
   * @param maxlen maximum number of spans that can be recorded
   */
  initSpanRecorder(t = 1e3) {
    this.spanRecorder || (this.spanRecorder = new SpanRecorder(t)), this.spanRecorder.add(this);
  }
  /**
   * Set the context of a transaction event.
   * @deprecated Use either `.setAttribute()`, or set the context on the scope before creating the transaction.
   */
  setContext(t, n) {
    n === null ? delete this._contexts[t] : this._contexts[t] = n;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use top-level `setMeasurement()` instead.
   */
  setMeasurement(t, n, i = "") {
    this._measurements[t] = { value: n, unit: i };
  }
  /**
   * Store metadata on this transaction.
   * @deprecated Use attributes or store data on the scope instead.
   */
  setMetadata(t) {
    this._metadata = g(g({}, this._metadata), t);
  }
  /**
   * @inheritDoc
   */
  end(t) {
    const n = spanTimeInputToSeconds(t), i = this._finishTransaction(n);
    if (i)
      return this._hub.captureEvent(i);
  }
  /**
   * @inheritDoc
   */
  toContext() {
    const t = super.toContext();
    return dropUndefinedKeys(_(g({}, t), {
      name: this._name,
      trimEnd: this._trimEnd
    }));
  }
  /**
   * @inheritDoc
   */
  updateWithContext(t) {
    return super.updateWithContext(t), this._name = t.name || "", this._trimEnd = t.trimEnd, this;
  }
  /**
   * @inheritdoc
   *
   * @experimental
   *
   * @deprecated Use top-level `getDynamicSamplingContextFromSpan` instead.
   */
  getDynamicSamplingContext() {
    return getDynamicSamplingContextFromSpan(this);
  }
  /**
   * Override the current hub with a new one.
   * Used if you want another hub to finish the transaction.
   *
   * @internal
   */
  // eslint-disable-next-line deprecation/deprecation
  setHub(t) {
    this._hub = t;
  }
  /**
   * Get the profile id of the transaction.
   */
  getProfileId() {
    if (this._contexts !== void 0 && this._contexts.profile !== void 0)
      return this._contexts.profile.profile_id;
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _finishTransaction(t) {
    if (this._endTime !== void 0)
      return;
    this._name || (DEBUG_BUILD$4 && logger$2.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(t);
    const n = this._hub.getClient();
    if (n && n.emit && n.emit("finishTransaction", this), this._sampled !== !0) {
      DEBUG_BUILD$4 && logger$2.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), n && n.recordDroppedEvent("sample_rate", "transaction");
      return;
    }
    const i = this.spanRecorder ? (
      // eslint-disable-next-line deprecation/deprecation
      this.spanRecorder.spans.filter((u) => u !== this && spanToJSON(u).timestamp)
    ) : [];
    if (this._trimEnd && i.length > 0) {
      const u = i.map((l) => spanToJSON(l).timestamp).filter(Boolean);
      this._endTime = u.reduce((l, p) => l > p ? l : p);
    }
    const { scope: r, isolationScope: o } = getCapturedScopesOnSpan(this), { metadata: s } = this, { source: a } = s, c = g({
      contexts: _(g({}, this._contexts), {
        // We don't want to override trace context
        trace: spanToTraceContext(this)
      }),
      // TODO: Pass spans serialized via `spanToJSON()` here instead in v8.
      spans: i,
      start_timestamp: this._startTime,
      // eslint-disable-next-line deprecation/deprecation
      tags: this.tags,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: g(_(g({}, s), {
        capturedSpanScope: r,
        capturedSpanIsolationScope: o
      }), dropUndefinedKeys({
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(this)
      })),
      _metrics_summary: void 0
    }, a && {
      transaction_info: {
        source: a
      }
    });
    return Object.keys(this._measurements).length > 0 && (DEBUG_BUILD$4 && logger$2.log(
      "[Measurements] Adding measurements to transaction",
      JSON.stringify(this._measurements, void 0, 2)
    ), c.measurements = this._measurements), DEBUG_BUILD$4 && logger$2.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), c;
  }
}
const TRACING_DEFAULTS = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  heartbeatInterval: 5e3
}, FINISH_REASON_TAG = "finishReason", IDLE_TRANSACTION_FINISH_REASONS = [
  "heartbeatFailed",
  "idleTimeout",
  "documentHidden",
  "finalTimeout",
  "externalFinish",
  "cancelled"
];
class IdleTransactionSpanRecorder extends SpanRecorder {
  constructor(t, n, i, r) {
    super(r), this._pushActivity = t, this._popActivity = n, this.transactionSpanId = i;
  }
  /**
   * @inheritDoc
   */
  add(t) {
    if (t.spanContext().spanId !== this.transactionSpanId) {
      const n = t.end;
      t.end = (...i) => (this._popActivity(t.spanContext().spanId), n.apply(t, i)), spanToJSON(t).timestamp === void 0 && this._pushActivity(t.spanContext().spanId);
    }
    super.add(t);
  }
}
class IdleTransaction extends Transaction {
  // Activities store a list of active spans
  // Track state of activities in previous heartbeat
  // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
  // We should not use heartbeat if we finished a transaction
  // Idle timeout was canceled and we should finish the transaction with the last span end.
  /**
   * Timer that tracks Transaction idleTimeout
   */
  /**
   * @deprecated Transactions will be removed in v8. Use spans instead.
   */
  constructor(t, n, i = TRACING_DEFAULTS.idleTimeout, r = TRACING_DEFAULTS.finalTimeout, o = TRACING_DEFAULTS.heartbeatInterval, s = !1, a = !1) {
    super(t, n), this._idleHub = n, this._idleTimeout = i, this._finalTimeout = r, this._heartbeatInterval = o, this._onScope = s, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[4], this._autoFinishAllowed = !a, s && (DEBUG_BUILD$4 && logger$2.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), n.getScope().setSpan(this)), a || this._restartIdleTimeout(), setTimeout(() => {
      this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[3], this.end());
    }, this._finalTimeout);
  }
  /** {@inheritDoc} */
  end(t) {
    const n = spanTimeInputToSeconds(t);
    if (this._finished = !0, this.activities = {}, this.op === "ui.action.click" && this.setAttribute(FINISH_REASON_TAG, this._finishReason), this.spanRecorder) {
      DEBUG_BUILD$4 && // eslint-disable-next-line deprecation/deprecation
      logger$2.log("[Tracing] finishing IdleTransaction", new Date(n * 1e3).toISOString(), this.op);
      for (const i of this._beforeFinishCallbacks)
        i(this, n);
      this.spanRecorder.spans = this.spanRecorder.spans.filter((i) => {
        if (i.spanContext().spanId === this.spanContext().spanId)
          return !0;
        spanToJSON(i).timestamp || (i.setStatus("cancelled"), i.end(n), DEBUG_BUILD$4 && logger$2.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(i, void 0, 2)));
        const { start_timestamp: r, timestamp: o } = spanToJSON(i), s = r && r < n, a = (this._finalTimeout + this._idleTimeout) / 1e3, c = o && r && o - r < a;
        if (DEBUG_BUILD$4) {
          const d = JSON.stringify(i, void 0, 2);
          s ? c || logger$2.log("[Tracing] discarding Span since it finished after Transaction final timeout", d) : logger$2.log("[Tracing] discarding Span since it happened after Transaction was finished", d);
        }
        return s && c;
      }), DEBUG_BUILD$4 && logger$2.log("[Tracing] flushing IdleTransaction");
    } else
      DEBUG_BUILD$4 && logger$2.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const i = this._idleHub.getScope();
      i.getTransaction() === this && i.setSpan(void 0);
    }
    return super.end(t);
  }
  /**
   * Register a callback function that gets executed before the transaction finishes.
   * Useful for cleanup or if you want to add any additional spans based on current context.
   *
   * This is exposed because users have no other way of running something before an idle transaction
   * finishes.
   */
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  /**
   * @inheritDoc
   */
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (r) => {
        this._finished || this._pushActivity(r);
      }, i = (r) => {
        this._finished || this._popActivity(r);
      };
      this.spanRecorder = new IdleTransactionSpanRecorder(n, i, this.spanContext().spanId, t), DEBUG_BUILD$4 && logger$2.log("Starting heartbeat"), this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }
  /**
   * Cancels the existing idle timeout, if there is one.
   * @param restartOnChildSpanChange Default is `true`.
   *                                 If set to false the transaction will end
   *                                 with the last child span.
   */
  cancelIdleTimeout(t, {
    restartOnChildSpanChange: n
  } = {
    restartOnChildSpanChange: !0
  }) {
    this._idleTimeoutCanceledPermanently = n === !1, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently && (this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5], this.end(t)));
  }
  /**
   * Temporary method used to externally set the transaction's `finishReason`
   *
   * ** WARNING**
   * This is for the purpose of experimentation only and will be removed in the near future, do not use!
   *
   * @internal
   *
   */
  setFinishReason(t) {
    this._finishReason = t;
  }
  /**
   * Permits the IdleTransaction to automatically end itself via the idle timeout and heartbeat mechanisms when the `delayAutoFinishUntilSignal` option was set to `true`.
   */
  sendAutoFinishSignal() {
    this._autoFinishAllowed || (DEBUG_BUILD$4 && logger$2.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0);
  }
  /**
   * Restarts idle timeout, if there is no running idle timeout it will start one.
   */
  _restartIdleTimeout(t) {
    this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
      !this._finished && Object.keys(this.activities).length === 0 && (this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[1], this.end(t));
    }, this._idleTimeout);
  }
  /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */
  _pushActivity(t) {
    this.cancelIdleTimeout(void 0, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently }), DEBUG_BUILD$4 && logger$2.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, DEBUG_BUILD$4 && logger$2.log("[Tracing] new activities count", Object.keys(this.activities).length);
  }
  /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */
  _popActivity(t) {
    if (this.activities[t] && (DEBUG_BUILD$4 && logger$2.log(`[Tracing] popActivity ${t}`), delete this.activities[t], DEBUG_BUILD$4 && logger$2.log("[Tracing] new activities count", Object.keys(this.activities).length)), Object.keys(this.activities).length === 0) {
      const n = timestampInSeconds();
      this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5], this.end(n)) : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  /**
   * Checks when entries of this.activities are not changing for 3 beats.
   * If this occurs we finish the transaction.
   */
  _beat() {
    if (this._finished)
      return;
    const t = Object.keys(this.activities).join("");
    t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (DEBUG_BUILD$4 && logger$2.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[0], this.end()) : this._pingHeartbeat();
  }
  /**
   * Pings the heartbeat
   */
  _pingHeartbeat() {
    DEBUG_BUILD$4 && logger$2.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
      this._beat();
    }, this._heartbeatInterval);
  }
}
function sampleTransaction(e, t, n) {
  if (!hasTracingEnabled(t))
    return e.sampled = !1, e;
  if (e.sampled !== void 0)
    return e.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(e.sampled)), e;
  let i;
  return typeof t.tracesSampler == "function" ? (i = t.tracesSampler(n), e.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(i))) : n.parentSampled !== void 0 ? i = n.parentSampled : typeof t.tracesSampleRate != "undefined" ? (i = t.tracesSampleRate, e.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(i))) : (i = 1, e.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, i)), isValidSampleRate(i) ? i ? (e.sampled = Math.random() < i, e.sampled ? (DEBUG_BUILD$4 && // eslint-disable-next-line deprecation/deprecation
  logger$2.log(`[Tracing] starting ${e.op} transaction - ${spanToJSON(e).description}`), e) : (DEBUG_BUILD$4 && logger$2.log(
    `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
      i
    )})`
  ), e)) : (DEBUG_BUILD$4 && logger$2.log(
    `[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
  ), e.sampled = !1, e) : (DEBUG_BUILD$4 && logger$2.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1, e);
}
function isValidSampleRate(e) {
  return isNaN$2(e) || !(typeof e == "number" || typeof e == "boolean") ? (DEBUG_BUILD$4 && logger$2.warn(
    `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
      e
    )} of type ${JSON.stringify(typeof e)}.`
  ), !1) : e < 0 || e > 1 ? (DEBUG_BUILD$4 && logger$2.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`), !1) : !0;
}
function traceHeaders() {
  const t = this.getScope().getSpan();
  return t ? {
    "sentry-trace": spanToTraceHeader(t)
  } : {};
}
function _startTransaction(e, t) {
  const n = this.getClient(), i = n && n.getOptions() || {}, r = i.instrumenter || "sentry", o = e.instrumenter || "sentry";
  r !== o && (DEBUG_BUILD$4 && logger$2.error(
    `A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${r}\` instrumenter.
The transaction will not be sampled. Please use the ${r} instrumentation to start transactions.`
  ), e.sampled = !1);
  let s = new Transaction(e, this);
  return s = sampleTransaction(s, i, g({
    name: e.name,
    parentSampled: e.parentSampled,
    transactionContext: e,
    attributes: g(g({}, e.data), e.attributes)
  }, t)), s.isRecording() && s.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", s), s;
}
function startIdleTransaction(e, t, n, i, r, o, s, a = !1) {
  const c = e.getClient(), d = c && c.getOptions() || {};
  let u = new IdleTransaction(
    t,
    e,
    n,
    i,
    s,
    r,
    a
  );
  return u = sampleTransaction(u, d, g({
    name: t.name,
    parentSampled: t.parentSampled,
    transactionContext: t,
    attributes: g(g({}, t.data), t.attributes)
  }, o)), u.isRecording() && u.initSpanRecorder(d._experiments && d._experiments.maxSpans), c && c.emit && c.emit("startTransaction", u), u;
}
function addTracingExtensions() {
  const e = getMainCarrier();
  e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = _startTransaction), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = traceHeaders), registerErrorInstrumentation());
}
function setMeasurement(e, t, n) {
  const i = getActiveTransaction();
  i && i.setMeasurement(e, t, n);
}
function enhanceEventWithSdkInfo(e, t) {
  return t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]), e;
}
function createSessionEnvelope(e, t, n, i) {
  const r = getSdkMetadataForEnvelopeHeader(n), o = g(g({
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, r && { sdk: r }), !!i && t && { dsn: dsnToString$1(t) }), s = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()];
  return createEnvelope$1(o, [s]);
}
function createEventEnvelope(e, t, n, i) {
  const r = getSdkMetadataForEnvelopeHeader(n), o = e.type && e.type !== "replay_event" ? e.type : "event";
  enhanceEventWithSdkInfo(e, n && n.sdk);
  const s = createEventEnvelopeHeaders(e, r, i, t);
  return delete e.sdkProcessingMetadata, createEnvelope$1(s, [[{ type: o }, e]]);
}
const SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(e) {
  const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function _getIngestEndpoint(e) {
  return `${getBaseApiEndpoint(e)}${e.projectId}/envelope/`;
}
function _encodedAuth(e, t) {
  return urlEncode(g({
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    sentry_key: e.publicKey,
    sentry_version: SENTRY_API_VERSION
  }, t && { sentry_client: `${t.name}/${t.version}` }));
}
function getEnvelopeEndpointWithUrlEncodedAuth(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel, i = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${_getIngestEndpoint(e)}?${_encodedAuth(e, i)}`;
}
const installedIntegrations = [];
function filterDuplicates(e) {
  const t = {};
  return e.forEach((n) => {
    const { name: i } = n, r = t[i];
    r && !r.isDefaultInstance && n.isDefaultInstance || (t[i] = n);
  }), Object.keys(t).map((n) => t[n]);
}
function getIntegrationsToSetup(e) {
  const t = e.defaultIntegrations || [], n = e.integrations;
  t.forEach((s) => {
    s.isDefaultInstance = !0;
  });
  let i;
  Array.isArray(n) ? i = [...t, ...n] : typeof n == "function" ? i = arrayify(n(t)) : i = t;
  const r = filterDuplicates(i), o = findIndex(r, (s) => s.name === "Debug");
  if (o !== -1) {
    const [s] = r.splice(o, 1);
    r.push(s);
  }
  return r;
}
function setupIntegrations(e, t) {
  const n = {};
  return t.forEach((i) => {
    i && setupIntegration(e, i, n);
  }), n;
}
function afterSetupIntegrations(e, t) {
  for (const n of t)
    n && n.afterAllSetup && n.afterAllSetup(e);
}
function setupIntegration(e, t, n) {
  if (n[t.name]) {
    DEBUG_BUILD$4 && logger$2.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (n[t.name] = t, installedIntegrations.indexOf(t.name) === -1 && (t.setupOnce(addGlobalEventProcessor, getCurrentHub), installedIntegrations.push(t.name)), t.setup && typeof t.setup == "function" && t.setup(e), e.on && typeof t.preprocessEvent == "function") {
    const i = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (r, o) => i(r, o, e));
  }
  if (e.addEventProcessor && typeof t.processEvent == "function") {
    const i = t.processEvent.bind(t), r = Object.assign((o, s) => i(o, s, e), {
      id: t.name
    });
    e.addEventProcessor(r);
  }
  DEBUG_BUILD$4 && logger$2.log(`Integration installed: ${t.name}`);
}
function findIndex(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]) === !0)
      return n;
  return -1;
}
function convertIntegrationFnToClass(e, t) {
  return Object.assign(
    function(...i) {
      return t(...i);
    },
    { id: e }
  );
}
function defineIntegration(e) {
  return e;
}
function serializeMetricBuckets(e) {
  let t = "";
  for (const n of e) {
    const i = Object.entries(n.tags), r = i.length > 0 ? `|#${i.map(([o, s]) => `${o}:${s}`).join(",")}` : "";
    t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`;
  }
  return t;
}
function createMetricEnvelope(e, t, n, i) {
  const r = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  n && n.sdk && (r.sdk = {
    name: n.sdk.name,
    version: n.sdk.version
  }), i && t && (r.dsn = dsnToString$1(t));
  const o = createMetricEnvelopeItem(e);
  return createEnvelope$1(r, [o]);
}
function createMetricEnvelopeItem(e) {
  const t = serializeMetricBuckets(e);
  return [{
    type: "statsd",
    length: t.length
  }, t];
}
const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
class BaseClient {
  /**
   * A reference to a metrics aggregator
   *
   * @experimental Note this is alpha API. It may experience breaking changes in the future.
   */
  /** Options passed to the SDK. */
  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
  /** Array of set up integrations. */
  /** Indicates whether this client's integrations have been set up. */
  /** Number of calls being processed */
  /** Holds flushable  */
  // eslint-disable-next-line @typescript-eslint/ban-types
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(t) {
    if (this._options = t, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = makeDsn(t.dsn) : DEBUG_BUILD$4 && logger$2.warn("No DSN provided, client will not send events."), this._dsn) {
      const n = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, t);
      this._transport = t.transport(_(g({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, t.transportOptions), {
        url: n
      }));
    }
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  captureException(t, n, i) {
    if (checkOrSetAlreadyCaught(t)) {
      DEBUG_BUILD$4 && logger$2.log(ALREADY_SEEN_ERROR);
      return;
    }
    let r = n && n.event_id;
    return this._process(
      this.eventFromException(t, n).then((o) => this._captureEvent(o, n, i)).then((o) => {
        r = o;
      })
    ), r;
  }
  /**
   * @inheritDoc
   */
  captureMessage(t, n, i, r) {
    let o = i && i.event_id;
    const s = isParameterizedString$1(t) ? t : String(t), a = isPrimitive$1(t) ? this.eventFromMessage(s, n, i) : this.eventFromException(t, i);
    return this._process(
      a.then((c) => this._captureEvent(c, i, r)).then((c) => {
        o = c;
      })
    ), o;
  }
  /**
   * @inheritDoc
   */
  captureEvent(t, n, i) {
    if (n && n.originalException && checkOrSetAlreadyCaught(n.originalException)) {
      DEBUG_BUILD$4 && logger$2.log(ALREADY_SEEN_ERROR);
      return;
    }
    let r = n && n.event_id;
    const s = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(
      this._captureEvent(t, n, s || i).then((a) => {
        r = a;
      })
    ), r;
  }
  /**
   * @inheritDoc
   */
  captureSession(t) {
    typeof t.release != "string" ? DEBUG_BUILD$4 && logger$2.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), updateSession(t, { init: !1 }));
  }
  /**
   * @inheritDoc
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * @inheritDoc
   */
  getOptions() {
    return this._options;
  }
  /**
   * @see SdkMetadata in @sentry/types
   *
   * @return The metadata of the SDK
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * @inheritDoc
   */
  getTransport() {
    return this._transport;
  }
  /**
   * @inheritDoc
   */
  flush(t) {
    const n = this._transport;
    return n ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(t).then((i) => n.flush(t).then((r) => i && r))) : resolvedSyncPromise$1(!0);
  }
  /**
   * @inheritDoc
   */
  close(t) {
    return this.flush(t).then((n) => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), n));
  }
  /** Get all installed event processors. */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /** @inheritDoc */
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  /**
   * This is an internal function to setup all integrations that should run on the client.
   * @deprecated Use `client.init()` instead.
   */
  setupIntegrations(t) {
    (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations();
  }
  /** @inheritdoc */
  init() {
    this._isEnabled() && this._setupIntegrations();
  }
  /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   * @deprecated Use `getIntegrationByName()` instead.
   */
  getIntegrationById(t) {
    return this.getIntegrationByName(t);
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  /**
   * Returns the client's instance of the given integration class, it any.
   * @deprecated Use `getIntegrationByName()` instead.
   */
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch (n) {
      return DEBUG_BUILD$4 && logger$2.warn(`Cannot retrieve integration ${t.id} from the current Client`), null;
    }
  }
  /**
   * @inheritDoc
   */
  addIntegration(t) {
    const n = this._integrations[t.name];
    setupIntegration(this, t, this._integrations), n || afterSetupIntegrations(this, [t]);
  }
  /**
   * @inheritDoc
   */
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let i = createEventEnvelope(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || [])
      i = addItemToEnvelope(
        i,
        createAttachmentEnvelopeItem(
          o,
          this._options.transportOptions && this._options.transportOptions.textEncoder
        )
      );
    const r = this._sendEnvelope(i);
    r && r.then((o) => this.emit("afterSendEvent", t, o), null);
  }
  /**
   * @inheritDoc
   */
  sendSession(t) {
    const n = createSessionEnvelope(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  /**
   * @inheritDoc
   */
  recordDroppedEvent(t, n, i) {
    if (this._options.sendClientReports) {
      const r = typeof i == "number" ? i : 1, o = `${t}:${n}`;
      DEBUG_BUILD$4 && logger$2.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`), this._outcomes[o] = (this._outcomes[o] || 0) + r;
    }
  }
  /**
   * @inheritDoc
   */
  captureAggregateMetrics(t) {
    DEBUG_BUILD$4 && logger$2.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    const n = createMetricEnvelope(
      t,
      this._dsn,
      this._options._metadata,
      this._options.tunnel
    );
    this._sendEnvelope(n);
  }
  // Keep on() & emit() signatures in sync with types' client.ts interface
  /* eslint-disable @typescript-eslint/unified-signatures */
  /** @inheritdoc */
  /** @inheritdoc */
  on(t, n) {
    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
  }
  /** @inheritdoc */
  /** @inheritdoc */
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((i) => i(...n));
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const { integrations: t } = this._options;
    this._integrations = setupIntegrations(this, t), afterSetupIntegrations(this, t), this._integrationsInitialized = !0;
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(t, n) {
    let i = !1, r = !1;
    const o = n.exception && n.exception.values;
    if (o) {
      r = !0;
      for (const c of o) {
        const d = c.mechanism;
        if (d && d.handled === !1) {
          i = !0;
          break;
        }
      }
    }
    const s = t.status === "ok";
    (s && t.errors === 0 || s && i) && (updateSession(t, _(g({}, i && { status: "crashed" }), {
      errors: t.errors || Number(r || i)
    })), this.captureSession(t));
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  _isClientDoneProcessing(t) {
    return new SyncPromise$1((n) => {
      let i = 0;
      const r = 1, o = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(o), n(!0)) : (i += r, t && i >= t && (clearInterval(o), n(!1)));
      }, r);
    });
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(t, n, i, r = getIsolationScope()) {
    const o = this.getOptions(), s = Object.keys(this._integrations);
    return !n.integrations && s.length > 0 && (n.integrations = s), this.emit("preprocessEvent", t, n), prepareEvent(o, t, n, i, this, r).then((a) => {
      if (a === null)
        return a;
      const c = g(g({}, r.getPropagationContext()), i ? i.getPropagationContext() : void 0);
      if (!(a.contexts && a.contexts.trace) && c) {
        const { traceId: u, spanId: l, parentSpanId: p, dsc: f } = c;
        a.contexts = g({
          trace: {
            trace_id: u,
            span_id: l,
            parent_span_id: p
          }
        }, a.contexts);
        const m = f || getDynamicSamplingContextFromClient(u, this, i);
        a.sdkProcessingMetadata = g({
          dynamicSamplingContext: m
        }, a.sdkProcessingMetadata);
      }
      return a;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(t, n = {}, i) {
    return this._processEvent(t, n, i).then(
      (r) => r.event_id,
      (r) => {
        if (DEBUG_BUILD$4) {
          const o = r;
          o.logLevel === "log" ? logger$2.log(o.message) : logger$2.warn(o);
        }
      }
    );
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(t, n, i) {
    const r = this.getOptions(), { sampleRate: o } = r, s = isTransactionEvent(t), a = isErrorEvent$1(t), c = t.type || "error", d = `before send for type \`${c}\``;
    if (a && typeof o == "number" && Math.random() > o)
      return this.recordDroppedEvent("sample_rate", "error", t), rejectedSyncPromise$1(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${o})`,
          "log"
        )
      );
    const u = c === "replay_event" ? "replay" : c, p = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, i, p).then((f) => {
      if (f === null)
        throw this.recordDroppedEvent("event_processor", u, t), new SentryError("An event processor returned `null`, will not send event.", "log");
      if (n.data && n.data.__sentry__ === !0)
        return f;
      const I = processBeforeSend(r, f, n);
      return _validateBeforeSendResult(I, d);
    }).then((f) => {
      if (f === null) {
        if (this.recordDroppedEvent("before_send", u, t), s) {
          const h = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", h);
        }
        throw new SentryError(`${d} returned \`null\`, will not send event.`, "log");
      }
      const m = i && i.getSession();
      if (!s && m && this._updateSessionFromEvent(m, f), s) {
        const A = f.sdkProcessingMetadata && f.sdkProcessingMetadata.spanCountBeforeProcessing || 0, h = f.spans ? f.spans.length : 0, M = A - h;
        M > 0 && this.recordDroppedEvent("before_send", "span", M);
      }
      const I = f.transaction_info;
      if (s && I && f.transaction !== t.transaction) {
        const A = "custom";
        f.transaction_info = _(g({}, I), {
          source: A
        });
      }
      return this.sendEvent(f, n), f;
    }).then(null, (f) => {
      throw f instanceof SentryError ? f : (this.captureException(f, {
        data: {
          __sentry__: !0
        },
        originalException: f
      }), new SentryError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${f}`
      ));
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(t) {
    this._numProcessing++, t.then(
      (n) => (this._numProcessing--, n),
      (n) => (this._numProcessing--, n)
    );
  }
  /**
   * @inheritdoc
   */
  _sendEnvelope(t) {
    if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport)
      return this._transport.send(t).then(null, (n) => {
        DEBUG_BUILD$4 && logger$2.error("Error while sending event:", n);
      });
    DEBUG_BUILD$4 && logger$2.error("Transport disabled");
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const t = this._outcomes;
    return this._outcomes = {}, Object.keys(t).map((n) => {
      const [i, r] = n.split(":");
      return {
        reason: i,
        category: r,
        quantity: t[n]
      };
    });
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
}
function _validateBeforeSendResult(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (isThenable$1(e))
    return e.then(
      (i) => {
        if (!isPlainObject$1(i) && i !== null)
          throw new SentryError(n);
        return i;
      },
      (i) => {
        throw new SentryError(`${t} rejected with ${i}`);
      }
    );
  if (!isPlainObject$1(e) && e !== null)
    throw new SentryError(n);
  return e;
}
function processBeforeSend(e, t, n) {
  const { beforeSend: i, beforeSendTransaction: r } = e;
  if (isErrorEvent$1(t) && i)
    return i(t, n);
  if (isTransactionEvent(t) && r) {
    if (t.spans) {
      const o = t.spans.length;
      t.sdkProcessingMetadata = _(g({}, t.sdkProcessingMetadata), {
        spanCountBeforeProcessing: o
      });
    }
    return r(t, n);
  }
  return t;
}
function isErrorEvent$1(e) {
  return e.type === void 0;
}
function isTransactionEvent(e) {
  return e.type === "transaction";
}
function initAndBind(e, t) {
  t.debug === !0 && (DEBUG_BUILD$4 ? logger$2.enable() : consoleSandbox$2(() => {
    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
  })), getCurrentScope().update(t.initialScope);
  const i = new e(t);
  setCurrentClient(i), initializeClient(i);
}
function setCurrentClient(e) {
  const n = getCurrentHub().getStackTop();
  n.client = e, n.scope.setClient(e);
}
function initializeClient(e) {
  e.init ? e.init() : e.setupIntegrations && e.setupIntegrations();
}
const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
function createTransport(e, t, n = makePromiseBuffer(
  e.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let i = {};
  const r = (s) => n.drain(s);
  function o(s) {
    const a = [];
    if (forEachEnvelopeItem(s, (l, p) => {
      const f = envelopeItemTypeToDataCategory(p);
      if (isRateLimited(i, f)) {
        const m = getEventForEnvelopeItem(l, p);
        e.recordDroppedEvent("ratelimit_backoff", f, m);
      } else
        a.push(l);
    }), a.length === 0)
      return resolvedSyncPromise$1();
    const c = createEnvelope$1(s[0], a), d = (l) => {
      forEachEnvelopeItem(c, (p, f) => {
        const m = getEventForEnvelopeItem(p, f);
        e.recordDroppedEvent(l, envelopeItemTypeToDataCategory(f), m);
      });
    }, u = () => t({ body: serializeEnvelope(c, e.textEncoder) }).then(
      (l) => (l.statusCode !== void 0 && (l.statusCode < 200 || l.statusCode >= 300) && DEBUG_BUILD$4 && logger$2.warn(`Sentry responded with status code ${l.statusCode} to sent event.`), i = updateRateLimits(i, l), l),
      (l) => {
        throw d("network_error"), l;
      }
    );
    return n.add(u).then(
      (l) => l,
      (l) => {
        if (l instanceof SentryError)
          return DEBUG_BUILD$4 && logger$2.error("Skipped sending event because buffer is full."), d("queue_overflow"), resolvedSyncPromise$1();
        throw l;
      }
    );
  }
  return o.__sentry__baseTransport__ = !0, {
    send: o,
    flush: r
  };
}
function getEventForEnvelopeItem(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
function createSpanEnvelope(e, t) {
  const n = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  t && (n.dsn = dsnToString$1(t));
  const i = e.map(createSpanItem);
  return createEnvelope$1(n, i);
}
function createSpanItem(e) {
  return [{
    type: "span"
  }, e];
}
function applySdkMetadata(e, t, n = [t], i = "npm") {
  const r = e._metadata || {};
  r.sdk || (r.sdk = {
    name: `sentry.javascript.${t}`,
    packages: n.map((o) => ({
      name: `${i}:@sentry/${o}`,
      version: SDK_VERSION
    })),
    version: SDK_VERSION
  }), e._metadata = r;
}
const DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  /^Cannot redefine property: googletag$/
], DEFAULT_IGNORE_TRANSACTIONS = [
  /^.*\/healthcheck$/,
  /^.*\/healthy$/,
  /^.*\/live$/,
  /^.*\/ready$/,
  /^.*\/heartbeat$/,
  /^.*\/health$/,
  /^.*\/healthz$/
], INTEGRATION_NAME$7 = "InboundFilters", _inboundFiltersIntegration = (e = {}) => ({
  name: INTEGRATION_NAME$7,
  // TODO v8: Remove this
  setupOnce() {
  },
  // eslint-disable-line @typescript-eslint/no-empty-function
  processEvent(t, n, i) {
    const r = i.getOptions(), o = _mergeOptions(e, r);
    return _shouldDropEvent$1(t, o) ? null : t;
  }
}), inboundFiltersIntegration = _inboundFiltersIntegration;
convertIntegrationFnToClass(
  INTEGRATION_NAME$7,
  inboundFiltersIntegration
);
function _mergeOptions(e = {}, t = {}) {
  return {
    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
    ignoreErrors: [
      ...e.ignoreErrors || [],
      ...t.ignoreErrors || [],
      ...e.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
    ],
    ignoreTransactions: [
      ...e.ignoreTransactions || [],
      ...t.ignoreTransactions || [],
      ...e.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
  };
}
function _shouldDropEvent$1(e, t) {
  return t.ignoreInternal && _isSentryError(e) ? (DEBUG_BUILD$4 && logger$2.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription$1(e)}`), !0) : _isIgnoredError(e, t.ignoreErrors) ? (DEBUG_BUILD$4 && logger$2.warn(
    `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription$1(e)}`
  ), !0) : _isIgnoredTransaction(e, t.ignoreTransactions) ? (DEBUG_BUILD$4 && logger$2.warn(
    `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription$1(e)}`
  ), !0) : _isDeniedUrl(e, t.denyUrls) ? (DEBUG_BUILD$4 && logger$2.warn(
    `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription$1(
      e
    )}.
Url: ${_getEventFilterUrl(e)}`
  ), !0) : _isAllowedUrl(e, t.allowUrls) ? !1 : (DEBUG_BUILD$4 && logger$2.warn(
    `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription$1(
      e
    )}.
Url: ${_getEventFilterUrl(e)}`
  ), !0);
}
function _isIgnoredError(e, t) {
  return e.type || !t || !t.length ? !1 : _getPossibleEventMessages(e).some((n) => stringMatchesSomePattern$1(n, t));
}
function _isIgnoredTransaction(e, t) {
  if (e.type !== "transaction" || !t || !t.length)
    return !1;
  const n = e.transaction;
  return n ? stringMatchesSomePattern$1(n, t) : !1;
}
function _isDeniedUrl(e, t) {
  if (!t || !t.length)
    return !1;
  const n = _getEventFilterUrl(e);
  return n ? stringMatchesSomePattern$1(n, t) : !1;
}
function _isAllowedUrl(e, t) {
  if (!t || !t.length)
    return !0;
  const n = _getEventFilterUrl(e);
  return n ? stringMatchesSomePattern$1(n, t) : !0;
}
function _getPossibleEventMessages(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch (i) {
  }
  return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), DEBUG_BUILD$4 && t.length === 0 && logger$2.error(`Could not extract message for event ${getEventDescription$1(e)}`), t;
}
function _isSentryError(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch (t) {
  }
  return !1;
}
function _getLastValidUrl(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function _getEventFilterUrl(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch (n) {
    }
    return t ? _getLastValidUrl(t) : null;
  } catch (t) {
    return DEBUG_BUILD$4 && logger$2.error(`Cannot extract url for event ${getEventDescription$1(e)}`), null;
  }
}
let originalFunctionToString;
const INTEGRATION_NAME$6 = "FunctionToString", SETUP_CLIENTS = /* @__PURE__ */ new WeakMap(), _functionToStringIntegration = () => ({
  name: INTEGRATION_NAME$6,
  setupOnce() {
    originalFunctionToString = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...e) {
        const t = getOriginalFunction$1(this), n = SETUP_CLIENTS.has(getClient()) && t !== void 0 ? t : this;
        return originalFunctionToString.apply(n, e);
      };
    } catch (e) {
    }
  },
  setup(e) {
    SETUP_CLIENTS.set(e, !0);
  }
}), functionToStringIntegration = _functionToStringIntegration;
convertIntegrationFnToClass(
  INTEGRATION_NAME$6,
  functionToStringIntegration
);
const objectToString$1 = Object.prototype.toString;
function isBuiltin$1(e, t) {
  return objectToString$1.call(e) === `[object ${t}]`;
}
function isString$1(e) {
  return isBuiltin$1(e, "String");
}
function isRegExp(e) {
  return isBuiltin$1(e, "RegExp");
}
function isInstanceOf$1(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return !1;
  }
}
function isMatchingPattern(e, t, n = !1) {
  return isString$1(e) ? isRegExp(t) ? t.test(e) : isString$1(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function stringMatchesSomePattern(e, t = [], n = !1) {
  return t.some((i) => isMatchingPattern(e, i, n));
}
function isGlobalObj$1(e) {
  return e && e.Math == Math ? e : void 0;
}
const GLOBAL_OBJ$1 = typeof globalThis == "object" && isGlobalObj$1(globalThis) || // eslint-disable-next-line no-restricted-globals
typeof window == "object" && isGlobalObj$1(window) || typeof self == "object" && isGlobalObj$1(self) || typeof global == "object" && isGlobalObj$1(global) || /* @__PURE__ */ function() {
  return this;
}() || {};
function getGlobalObject$1() {
  return GLOBAL_OBJ$1;
}
const WINDOW$c = getGlobalObject$1(), DEFAULT_MAX_STRING_LENGTH$1 = 80;
function htmlTreeAsString$1(e, t = {}) {
  if (!e)
    return "<unknown>";
  try {
    let n = e;
    const i = 5, r = [];
    let o = 0, s = 0;
    const a = " > ", c = a.length;
    let d;
    const u = Array.isArray(t) ? t : t.keyAttrs, l = !Array.isArray(t) && t.maxStringLength || DEFAULT_MAX_STRING_LENGTH$1;
    for (; n && o++ < i && (d = _htmlElementAsString$1(n, u), !(d === "html" || o > 1 && s + r.length * c + d.length >= l)); )
      r.push(d), s += d.length, n = n.parentNode;
    return r.reverse().join(a);
  } catch (n) {
    return "<unknown>";
  }
}
function _htmlElementAsString$1(e, t) {
  const n = e, i = [];
  let r, o, s, a, c;
  if (!n || !n.tagName)
    return "";
  if (WINDOW$c.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent)
    return n.dataset.sentryComponent;
  i.push(n.tagName.toLowerCase());
  const d = t && t.length ? t.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)]) : null;
  if (d && d.length)
    d.forEach((l) => {
      i.push(`[${l[0]}="${l[1]}"]`);
    });
  else if (n.id && i.push(`#${n.id}`), r = n.className, r && isString$1(r))
    for (o = r.split(/\s+/), c = 0; c < o.length; c++)
      i.push(`.${o[c]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < u.length; c++)
    s = u[c], a = n.getAttribute(s), a && i.push(`[${s}="${a}"]`);
  return i.join("");
}
function getDomElement(e) {
  return WINDOW$c.document && WINDOW$c.document.querySelector ? WINDOW$c.document.querySelector(e) : null;
}
function getComponentName$1(e) {
  if (!WINDOW$c.HTMLElement)
    return null;
  let t = e;
  const n = 5;
  for (let i = 0; i < n; i++) {
    if (!t)
      return null;
    if (t instanceof HTMLElement && t.dataset.sentryComponent)
      return t.dataset.sentryComponent;
    t = t.parentNode;
  }
  return null;
}
const DEBUG_BUILD$3 = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__, PREFIX$1 = "Sentry Logger ", CONSOLE_LEVELS$1 = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
], originalConsoleMethods$1 = {};
function consoleSandbox$1(e) {
  if (!("console" in GLOBAL_OBJ$1))
    return e();
  const t = GLOBAL_OBJ$1.console, n = {}, i = Object.keys(originalConsoleMethods$1);
  i.forEach((r) => {
    const o = originalConsoleMethods$1[r];
    n[r] = t[r], t[r] = o;
  });
  try {
    return e();
  } finally {
    i.forEach((r) => {
      t[r] = n[r];
    });
  }
}
function makeLogger$1() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e
  };
  return DEBUG_BUILD$3 ? CONSOLE_LEVELS$1.forEach((n) => {
    t[n] = (...i) => {
      e && consoleSandbox$1(() => {
        GLOBAL_OBJ$1.console[n](`${PREFIX$1}[${n}]:`, ...i);
      });
    };
  }) : CONSOLE_LEVELS$1.forEach((n) => {
    t[n] = () => {
    };
  }), t;
}
const logger$1 = makeLogger$1();
function fill$1(e, t, n) {
  if (!(t in e))
    return;
  const i = e[t], r = n(i);
  typeof r == "function" && markFunctionWrapped$1(r, i), e[t] = r;
}
function addNonEnumerableProperty$1(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: n,
      writable: !0,
      configurable: !0
    });
  } catch (i) {
    DEBUG_BUILD$3 && logger$1.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function markFunctionWrapped$1(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = t.prototype = n, addNonEnumerableProperty$1(e, "__sentry_original__", t);
  } catch (n) {
  }
}
const defaultFunctionName$1 = "<anonymous>";
function getFunctionName$1(e) {
  try {
    return !e || typeof e != "function" ? defaultFunctionName$1 : e.name || defaultFunctionName$1;
  } catch (t) {
    return defaultFunctionName$1;
  }
}
const handlers$2 = {}, instrumented$2 = {};
function addHandler$2(e, t) {
  handlers$2[e] = handlers$2[e] || [], handlers$2[e].push(t);
}
function maybeInstrument$1(e, t) {
  instrumented$2[e] || (t(), instrumented$2[e] = !0);
}
function triggerHandlers$2(e, t) {
  const n = e && handlers$2[e];
  if (n)
    for (const i of n)
      try {
        i(t);
      } catch (r) {
        DEBUG_BUILD$3 && logger$1.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${getFunctionName$1(i)}
Error:`,
          r
        );
      }
}
function uuid4$1() {
  const e = GLOBAL_OBJ$1, t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID)
      return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (n = () => {
      const i = new Uint8Array(1);
      return t.getRandomValues(i), i[0];
    });
  } catch (i) {
  }
  return ("10000000100040008000" + 1e11).replace(
    /[018]/g,
    (i) => (
      // eslint-disable-next-line no-bitwise
      (i ^ (n() & 15) >> i / 4).toString(16)
    )
  );
}
const WINDOW$b = getGlobalObject$1();
function supportsFetch$1() {
  if (!("fetch" in WINDOW$b))
    return !1;
  try {
    return new Headers(), new Request("http://www.example.com"), new Response(), !0;
  } catch (e) {
    return !1;
  }
}
function isNativeFetch$1(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function supportsNativeFetch$1() {
  if (typeof EdgeRuntime == "string")
    return !0;
  if (!supportsFetch$1())
    return !1;
  if (isNativeFetch$1(WINDOW$b.fetch))
    return !0;
  let e = !1;
  const t = WINDOW$b.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = isNativeFetch$1(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (n) {
      DEBUG_BUILD$3 && logger$1.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
  return e;
}
function addFetchInstrumentationHandler$1(e) {
  const t = "fetch";
  addHandler$2(t, e), maybeInstrument$1(t, instrumentFetch$1);
}
function instrumentFetch$1() {
  supportsNativeFetch$1() && fill$1(GLOBAL_OBJ$1, "fetch", function(e) {
    return function(...t) {
      const { method: n, url: i } = parseFetchArgs$1(t), r = {
        args: t,
        fetchData: {
          method: n,
          url: i
        },
        startTimestamp: Date.now()
      };
      return triggerHandlers$2("fetch", g({}, r)), e.apply(GLOBAL_OBJ$1, t).then(
        (o) => {
          const s = _(g({}, r), {
            endTimestamp: Date.now(),
            response: o
          });
          return triggerHandlers$2("fetch", s), o;
        },
        (o) => {
          const s = _(g({}, r), {
            endTimestamp: Date.now(),
            error: o
          });
          throw triggerHandlers$2("fetch", s), o;
        }
      );
    };
  });
}
function hasProp$1(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function getUrlFromResource$1(e) {
  return typeof e == "string" ? e : e ? hasProp$1(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function parseFetchArgs$1(e) {
  if (e.length === 0)
    return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, i] = e;
    return {
      url: getUrlFromResource$1(n),
      method: hasProp$1(i, "method") ? String(i.method).toUpperCase() : "GET"
    };
  }
  const t = e[0];
  return {
    url: getUrlFromResource$1(t),
    method: hasProp$1(t, "method") ? String(t.method).toUpperCase() : "GET"
  };
}
const WINDOW$a = getGlobalObject$1();
function supportsHistory$1() {
  const e = WINDOW$a.chrome, t = e && e.app && e.app.runtime, n = "history" in WINDOW$a && !!WINDOW$a.history.pushState && !!WINDOW$a.history.replaceState;
  return !t && n;
}
const WINDOW$9 = GLOBAL_OBJ$1;
let lastHref$1;
function addHistoryInstrumentationHandler$1(e) {
  const t = "history";
  addHandler$2(t, e), maybeInstrument$1(t, instrumentHistory$1);
}
function instrumentHistory$1() {
  if (!supportsHistory$1())
    return;
  const e = WINDOW$9.onpopstate;
  WINDOW$9.onpopstate = function(...n) {
    const i = WINDOW$9.location.href, r = lastHref$1;
    if (lastHref$1 = i, triggerHandlers$2("history", { from: r, to: i }), e)
      try {
        return e.apply(this, n);
      } catch (s) {
      }
  };
  function t(n) {
    return function(...i) {
      const r = i.length > 2 ? i[2] : void 0;
      if (r) {
        const o = lastHref$1, s = String(r);
        lastHref$1 = s, triggerHandlers$2("history", { from: o, to: s });
      }
      return n.apply(this, i);
    };
  }
  fill$1(WINDOW$9.history, "pushState", t), fill$1(WINDOW$9.history, "replaceState", t);
}
const WINDOW$8 = GLOBAL_OBJ$1, SENTRY_XHR_DATA_KEY$1 = "__sentry_xhr_v3__";
function addXhrInstrumentationHandler$1(e) {
  const t = "xhr";
  addHandler$2(t, e), maybeInstrument$1(t, instrumentXHR$1);
}
function instrumentXHR$1() {
  if (!WINDOW$8.XMLHttpRequest)
    return;
  const e = XMLHttpRequest.prototype;
  fill$1(e, "open", function(t) {
    return function(...n) {
      const i = Date.now(), r = isString$1(n[0]) ? n[0].toUpperCase() : void 0, o = parseUrl$3(n[1]);
      if (!r || !o)
        return t.apply(this, n);
      this[SENTRY_XHR_DATA_KEY$1] = {
        method: r,
        url: o,
        request_headers: {}
      }, r === "POST" && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
      const s = () => {
        const a = this[SENTRY_XHR_DATA_KEY$1];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch (d) {
          }
          const c = {
            args: [r, o],
            endTimestamp: Date.now(),
            startTimestamp: i,
            xhr: this
          };
          triggerHandlers$2("xhr", c);
        }
      };
      return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? fill$1(this, "onreadystatechange", function(a) {
        return function(...c) {
          return s(), a.apply(this, c);
        };
      }) : this.addEventListener("readystatechange", s), fill$1(this, "setRequestHeader", function(a) {
        return function(...c) {
          const [d, u] = c, l = this[SENTRY_XHR_DATA_KEY$1];
          return l && isString$1(d) && isString$1(u) && (l.request_headers[d.toLowerCase()] = u), a.apply(this, c);
        };
      }), t.apply(this, n);
    };
  }), fill$1(e, "send", function(t) {
    return function(...n) {
      const i = this[SENTRY_XHR_DATA_KEY$1];
      if (!i)
        return t.apply(this, n);
      n[0] !== void 0 && (i.body = n[0]);
      const r = {
        args: [i.method, i.url],
        startTimestamp: Date.now(),
        xhr: this
      };
      return triggerHandlers$2("xhr", r), t.apply(this, n);
    };
  });
}
function parseUrl$3(e) {
  if (isString$1(e))
    return e;
  try {
    return e.toString();
  } catch (t) {
  }
}
function parseUrl$2(e) {
  if (!e)
    return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t)
    return {};
  const n = t[6] || "", i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: i,
    relative: t[5] + n + i
    // everything minus origin
  };
}
const ONE_SECOND_IN_MS$1 = 1e3;
function dateTimestampInSeconds$1() {
  return Date.now() / ONE_SECOND_IN_MS$1;
}
function createUnixTimestampInSecondsFunc$1() {
  const { performance: e } = GLOBAL_OBJ$1;
  if (!e || !e.now)
    return dateTimestampInSeconds$1;
  const t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / ONE_SECOND_IN_MS$1;
}
createUnixTimestampInSecondsFunc$1();
const browserPerformanceTimeOrigin = (() => {
  const { performance: e } = GLOBAL_OBJ$1;
  if (!e || !e.now)
    return;
  const t = 3600 * 1e3, n = e.now(), i = Date.now(), r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t, o = r < t, s = e.timing && e.timing.navigationStart, c = typeof s == "number" ? Math.abs(s + n - i) : t, d = c < t;
  return o || d ? r <= c ? e.timeOrigin : s : i;
})(), BAGGAGE_HEADER_NAME = "baggage", SENTRY_BAGGAGE_KEY_PREFIX = "sentry-", SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/, MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(e) {
  if (!isString$1(e) && !Array.isArray(e))
    return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((i, r) => {
      const o = baggageHeaderToObject(r);
      for (const s of Object.keys(o))
        i[s] = o[s];
      return i;
    }, {});
  else {
    if (!e)
      return;
    t = baggageHeaderToObject(e);
  }
  const n = Object.entries(t).reduce((i, [r, o]) => {
    if (r.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const s = r.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      i[s] = o;
    }
    return i;
  }, {});
  if (Object.keys(n).length > 0)
    return n;
}
function dynamicSamplingContextToSentryBaggageHeader(e) {
  if (!e)
    return;
  const t = Object.entries(e).reduce(
    (n, [i, r]) => (r && (n[`${SENTRY_BAGGAGE_KEY_PREFIX}${i}`] = r), n),
    {}
  );
  return objectToBaggageHeader(t);
}
function baggageHeaderToObject(e) {
  return e.split(",").map((t) => t.split("=").map((n) => decodeURIComponent(n.trim()))).reduce((t, [n, i]) => (t[n] = i, t), {});
}
function objectToBaggageHeader(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, i], r) => {
      const o = `${encodeURIComponent(n)}=${encodeURIComponent(i)}`, s = r === 0 ? o : `${t},${o}`;
      return s.length > MAX_BAGGAGE_STRING_LENGTH ? (DEBUG_BUILD$3 && logger$1.warn(
        `Not adding key: ${n} with val: ${i} to baggage header due to exceeding baggage size limits.`
      ), t) : s;
    }, "");
}
const TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  // whitespace
);
function extractTraceparentData(e) {
  if (!e)
    return;
  const t = e.match(TRACEPARENT_REGEXP);
  if (!t)
    return;
  let n;
  return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1), {
    traceId: t[1],
    parentSampled: n,
    parentSpanId: t[2]
  };
}
function propagationContextFromHeaders(e, t) {
  const n = extractTraceparentData(e), i = baggageHeaderToDynamicSamplingContext(t), { traceId: r, parentSpanId: o, parentSampled: s } = n || {};
  return n ? {
    traceId: r || uuid4$1(),
    parentSpanId: o || uuid4$1().substring(16),
    spanId: uuid4$1().substring(16),
    sampled: s,
    dsc: i || {}
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
  } : {
    traceId: r || uuid4$1(),
    spanId: uuid4$1().substring(16)
  };
}
function generateSentryTraceHeader(e = uuid4$1(), t = uuid4$1().substring(16), n) {
  let i = "";
  return n !== void 0 && (i = n ? "-1" : "-0"), `${e}-${t}${i}`;
}
const DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__, WINDOW$7 = GLOBAL_OBJ$1;
function registerBackgroundTabDetection() {
  WINDOW$7.document ? WINDOW$7.document.addEventListener("visibilitychange", () => {
    const e = getActiveTransaction();
    if (WINDOW$7.document.hidden && e) {
      const t = "cancelled", { op: n, status: i } = spanToJSON(e);
      DEBUG_BUILD$2 && logger$1.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`), i || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.end();
    }
  }) : DEBUG_BUILD$2 && logger$1.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
const bindReporter = (e, t, n) => {
  let i, r;
  return (o) => {
    t.value >= 0 && (o || n) && (r = t.value - (i || 0), (r || i === void 0) && (i = t.value, t.delta = r, e(t)));
  };
}, generateUniqueID = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, getNavigationEntryFromPerformanceTiming = () => {
  const e = WINDOW$7.performance.timing, t = WINDOW$7.performance.navigation.type, n = {
    entryType: "navigation",
    startTime: 0,
    type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate"
  };
  for (const i in e)
    i !== "navigationStart" && i !== "toJSON" && (n[i] = Math.max(e[i] - e.navigationStart, 0));
  return n;
}, getNavigationEntry = () => WINDOW$7.__WEB_VITALS_POLYFILL__ ? WINDOW$7.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || getNavigationEntryFromPerformanceTiming()) : WINDOW$7.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0], getActivationStart = () => {
  const e = getNavigationEntry();
  return e && e.activationStart || 0;
}, initMetric = (e, t) => {
  const n = getNavigationEntry();
  let i = "navigate";
  return n && (WINDOW$7.document && WINDOW$7.document.prerendering || getActivationStart() > 0 ? i = "prerender" : i = n.type.replace(/_/g, "-")), {
    name: e,
    value: typeof t == "undefined" ? -1 : t,
    rating: "good",
    // Will be updated if the value changes.
    delta: 0,
    entries: [],
    id: generateUniqueID(),
    navigationType: i
  };
}, observe = (e, t, n) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      const i = new PerformanceObserver((r) => {
        t(r.getEntries());
      });
      return i.observe(
        Object.assign(
          {
            type: e,
            buffered: !0
          },
          n || {}
        )
      ), i;
    }
  } catch (i) {
  }
}, onHidden = (e, t) => {
  const n = (i) => {
    (i.type === "pagehide" || WINDOW$7.document.visibilityState === "hidden") && (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
  };
  WINDOW$7.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0));
}, onCLS = (e, t = {}) => {
  const n = initMetric("CLS", 0);
  let i, r = 0, o = [];
  const s = (c) => {
    c.forEach((d) => {
      if (!d.hadRecentInput) {
        const u = o[0], l = o[o.length - 1];
        r && o.length !== 0 && d.startTime - l.startTime < 1e3 && d.startTime - u.startTime < 5e3 ? (r += d.value, o.push(d)) : (r = d.value, o = [d]), r > n.value && (n.value = r, n.entries = o, i && i());
      }
    });
  }, a = observe("layout-shift", s);
  if (a) {
    i = bindReporter(e, n, t.reportAllChanges);
    const c = () => {
      s(a.takeRecords()), i(!0);
    };
    return onHidden(c), c;
  }
};
let firstHiddenTime = -1;
const initHiddenTime = () => {
  WINDOW$7.document && WINDOW$7.document.visibilityState && (firstHiddenTime = WINDOW$7.document.visibilityState === "hidden" && !WINDOW$7.document.prerendering ? 0 : 1 / 0);
}, trackChanges = () => {
  onHidden(({ timeStamp: e }) => {
    firstHiddenTime = e;
  }, !0);
}, getVisibilityWatcher = () => (firstHiddenTime < 0 && (initHiddenTime(), trackChanges()), {
  get firstHiddenTime() {
    return firstHiddenTime;
  }
}), onFID = (e) => {
  const t = getVisibilityWatcher(), n = initMetric("FID");
  let i;
  const r = (a) => {
    a.startTime < t.firstHiddenTime && (n.value = a.processingStart - a.startTime, n.entries.push(a), i(!0));
  }, o = (a) => {
    a.forEach(r);
  }, s = observe("first-input", o);
  i = bindReporter(e, n), s && onHidden(() => {
    o(s.takeRecords()), s.disconnect();
  }, !0);
};
let interactionCountEstimate = 0, minKnownInteractionId = 1 / 0, maxKnownInteractionId = 0;
const updateEstimate = (e) => {
  e.forEach((t) => {
    t.interactionId && (minKnownInteractionId = Math.min(minKnownInteractionId, t.interactionId), maxKnownInteractionId = Math.max(maxKnownInteractionId, t.interactionId), interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0);
  });
};
let po;
const getInteractionCount = () => po ? interactionCountEstimate : performance.interactionCount || 0, initInteractionCountPolyfill = () => {
  "interactionCount" in performance || po || (po = observe("event", updateEstimate, {
    type: "event",
    buffered: !0,
    durationThreshold: 0
  }));
}, getInteractionCountForNavigation = () => getInteractionCount(), MAX_INTERACTIONS_TO_CONSIDER = 10, longestInteractionList = [], longestInteractionMap = {}, processEntry = (e) => {
  const t = longestInteractionList[longestInteractionList.length - 1], n = longestInteractionMap[e.interactionId];
  if (n || longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER || e.duration > t.latency) {
    if (n)
      n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
    else {
      const i = {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: e.interactionId,
        latency: e.duration,
        entries: [e]
      };
      longestInteractionMap[i.id] = i, longestInteractionList.push(i);
    }
    longestInteractionList.sort((i, r) => r.latency - i.latency), longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER).forEach((i) => {
      delete longestInteractionMap[i.id];
    });
  }
}, estimateP98LongestInteraction = () => {
  const e = Math.min(
    longestInteractionList.length - 1,
    Math.floor(getInteractionCountForNavigation() / 50)
  );
  return longestInteractionList[e];
}, onINP = (e, t) => {
  t = t || {}, initInteractionCountPolyfill();
  const n = initMetric("INP");
  let i;
  const r = (s) => {
    s.forEach((c) => {
      c.interactionId && processEntry(c), c.entryType === "first-input" && !longestInteractionList.some((u) => u.entries.some((l) => c.duration === l.duration && c.startTime === l.startTime)) && processEntry(c);
    });
    const a = estimateP98LongestInteraction();
    a && a.latency !== n.value && (n.value = a.latency, n.entries = a.entries, i());
  }, o = observe("event", r, {
    // Event Timing entries have their durations rounded to the nearest 8ms,
    // so a duration of 40ms would be any event that spans 2.5 or more frames
    // at 60Hz. This threshold is chosen to strike a balance between usefulness
    // and performance. Running this callback for any interaction that spans
    // just one or two frames is likely not worth the insight that could be
    // gained.
    durationThreshold: t.durationThreshold || 40
  });
  i = bindReporter(e, n, t.reportAllChanges), o && (o.observe({ type: "first-input", buffered: !0 }), onHidden(() => {
    r(o.takeRecords()), n.value < 0 && getInteractionCountForNavigation() > 0 && (n.value = 0, n.entries = []), i(!0);
  }));
}, reportedMetricIDs = {}, onLCP = (e) => {
  const t = getVisibilityWatcher(), n = initMetric("LCP");
  let i;
  const r = (s) => {
    const a = s[s.length - 1];
    if (a) {
      const c = Math.max(a.startTime - getActivationStart(), 0);
      c < t.firstHiddenTime && (n.value = c, n.entries = [a], i());
    }
  }, o = observe("largest-contentful-paint", r);
  if (o) {
    i = bindReporter(e, n);
    const s = () => {
      reportedMetricIDs[n.id] || (r(o.takeRecords()), o.disconnect(), reportedMetricIDs[n.id] = !0, i(!0));
    };
    return ["keydown", "click"].forEach((a) => {
      WINDOW$7.document && addEventListener(a, s, { once: !0, capture: !0 });
    }), onHidden(s, !0), s;
  }
}, whenReady = (e) => {
  WINDOW$7.document && (WINDOW$7.document.prerendering ? addEventListener("prerenderingchange", () => whenReady(e), !0) : WINDOW$7.document.readyState !== "complete" ? addEventListener("load", () => whenReady(e), !0) : setTimeout(e, 0));
}, onTTFB = (e, t) => {
  t = t || {};
  const n = initMetric("TTFB"), i = bindReporter(e, n, t.reportAllChanges);
  whenReady(() => {
    const r = getNavigationEntry();
    if (r) {
      if (n.value = Math.max(r.responseStart - getActivationStart(), 0), n.value < 0 || n.value > performance.now()) return;
      n.entries = [r], i(!0);
    }
  });
}, handlers$1 = {}, instrumented$1 = {};
let _previousCls, _previousFid, _previousLcp, _previousTtfb, _previousInp;
function addClsInstrumentationHandler(e, t = !1) {
  return addMetricObserver("cls", e, instrumentCls, _previousCls, t);
}
function addLcpInstrumentationHandler(e, t = !1) {
  return addMetricObserver("lcp", e, instrumentLcp, _previousLcp, t);
}
function addTtfbInstrumentationHandler(e) {
  return addMetricObserver("ttfb", e, instrumentTtfb, _previousTtfb);
}
function addFidInstrumentationHandler(e) {
  return addMetricObserver("fid", e, instrumentFid, _previousFid);
}
function addInpInstrumentationHandler(e) {
  return addMetricObserver("inp", e, instrumentInp, _previousInp);
}
function addPerformanceInstrumentationHandler(e, t) {
  return addHandler$1(e, t), instrumented$1[e] || (instrumentPerformanceObserver(e), instrumented$1[e] = !0), getCleanupCallback(e, t);
}
function triggerHandlers$1(e, t) {
  const n = handlers$1[e];
  if (!(!n || !n.length))
    for (const i of n)
      try {
        i(t);
      } catch (r) {
        DEBUG_BUILD$2 && logger$1.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${getFunctionName$1(i)}
Error:`,
          r
        );
      }
}
function instrumentCls() {
  return onCLS(
    (e) => {
      triggerHandlers$1("cls", {
        metric: e
      }), _previousCls = e;
    },
    { reportAllChanges: !0 }
  );
}
function instrumentFid() {
  return onFID((e) => {
    triggerHandlers$1("fid", {
      metric: e
    }), _previousFid = e;
  });
}
function instrumentLcp() {
  return onLCP((e) => {
    triggerHandlers$1("lcp", {
      metric: e
    }), _previousLcp = e;
  });
}
function instrumentTtfb() {
  return onTTFB((e) => {
    triggerHandlers$1("ttfb", {
      metric: e
    }), _previousTtfb = e;
  });
}
function instrumentInp() {
  return onINP((e) => {
    triggerHandlers$1("inp", {
      metric: e
    }), _previousInp = e;
  });
}
function addMetricObserver(e, t, n, i, r = !1) {
  addHandler$1(e, t);
  let o;
  return instrumented$1[e] || (o = n(), instrumented$1[e] = !0), i && t({ metric: i }), getCleanupCallback(e, t, r ? o : void 0);
}
function instrumentPerformanceObserver(e) {
  const t = {};
  e === "event" && (t.durationThreshold = 0), observe(
    e,
    (n) => {
      triggerHandlers$1(e, { entries: n });
    },
    t
  );
}
function addHandler$1(e, t) {
  handlers$1[e] = handlers$1[e] || [], handlers$1[e].push(t);
}
function getCleanupCallback(e, t, n) {
  return () => {
    n && n();
    const i = handlers$1[e];
    if (!i)
      return;
    const r = i.indexOf(t);
    r !== -1 && i.splice(r, 1);
  };
}
function isMeasurementValue(e) {
  return typeof e == "number" && isFinite(e);
}
function _startChild(e, i) {
  var r = i, { startTimestamp: t } = r, n = F(r, ["startTimestamp"]);
  return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild(g({
    startTimestamp: t
  }, n));
}
const MAX_INT_AS_BYTES = 2147483647;
function msToSec(e) {
  return e / 1e3;
}
function getBrowserPerformanceAPI() {
  return WINDOW$7 && WINDOW$7.addEventListener && WINDOW$7.performance;
}
let _performanceCursor = 0, _measurements = {}, _lcpEntry, _clsEntry;
function startTrackingWebVitals() {
  const e = getBrowserPerformanceAPI();
  if (e && browserPerformanceTimeOrigin) {
    e.mark && WINDOW$7.performance.mark("sentry-tracing-init");
    const t = _trackFID(), n = _trackCLS(), i = _trackLCP(), r = _trackTtfb();
    return () => {
      t(), n(), i(), r();
    };
  }
  return () => {
  };
}
function startTrackingLongTasks() {
  addPerformanceInstrumentationHandler("longtask", ({ entries: e }) => {
    for (const t of e) {
      const n = getActiveTransaction();
      if (!n)
        return;
      const i = msToSec(browserPerformanceTimeOrigin + t.startTime), r = msToSec(t.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: i,
        endTimestamp: i + r
      });
    }
  });
}
function startTrackingInteractions() {
  addPerformanceInstrumentationHandler("event", ({ entries: e }) => {
    for (const t of e) {
      const n = getActiveTransaction();
      if (!n)
        return;
      if (t.name === "click") {
        const i = msToSec(browserPerformanceTimeOrigin + t.startTime), r = msToSec(t.duration), o = {
          description: htmlTreeAsString$1(t.target),
          op: `ui.interaction.${t.name}`,
          origin: "auto.ui.browser.metrics",
          startTimestamp: i,
          endTimestamp: i + r
        }, s = getComponentName$1(t.target);
        s && (o.attributes = { "ui.component_name": s }), n.startChild(o);
      }
    }
  });
}
function startTrackingINP(e, t) {
  if (getBrowserPerformanceAPI() && browserPerformanceTimeOrigin) {
    const i = _trackINP(e, t);
    return () => {
      i();
    };
  }
  return () => {
  };
}
function _trackCLS() {
  return addClsInstrumentationHandler(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding CLS"), _measurements.cls = { value: e.value, unit: "" }, _clsEntry = t);
  }, !0);
}
function _trackLCP() {
  return addLcpInstrumentationHandler(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding LCP"), _measurements.lcp = { value: e.value, unit: "millisecond" }, _lcpEntry = t);
  }, !0);
}
function _trackFID() {
  return addFidInstrumentationHandler(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    if (!t)
      return;
    const n = msToSec(browserPerformanceTimeOrigin), i = msToSec(t.startTime);
    DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding FID"), _measurements.fid = { value: e.value, unit: "millisecond" }, _measurements["mark.fid"] = { value: n + i, unit: "second" };
  });
}
function _trackTtfb() {
  return addTtfbInstrumentationHandler(({ metric: e }) => {
    e.entries[e.entries.length - 1] && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding TTFB"), _measurements.ttfb = { value: e.value, unit: "millisecond" });
  });
}
const INP_ENTRY_MAP = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press"
};
function _trackINP(e, t) {
  return addInpInstrumentationHandler(({ metric: n }) => {
    if (n.value === void 0)
      return;
    const i = n.entries.find(
      (E) => E.duration === n.value && INP_ENTRY_MAP[E.name] !== void 0
    ), r = getClient();
    if (!i || !r)
      return;
    const o = INP_ENTRY_MAP[i.name], s = r.getOptions(), a = msToSec(browserPerformanceTimeOrigin + i.startTime), c = msToSec(n.value), d = i.interactionId !== void 0 ? e[i.interactionId] : void 0;
    if (d === void 0)
      return;
    const { routeName: u, parentContext: l, activeTransaction: p, user: f, replayId: m } = d, I = f !== void 0 ? f.email || f.id || f.ip_address : void 0, A = p !== void 0 ? p.getProfileId() : void 0, h = new Span({
      startTimestamp: a,
      endTimestamp: a + c,
      op: `ui.interaction.${o}`,
      name: htmlTreeAsString$1(i.target),
      attributes: g(g(g({
        release: s.release,
        environment: s.environment,
        transaction: u
      }, I !== void 0 && I !== "" ? { user: I } : {}), A !== void 0 ? { profile_id: A } : {}), m !== void 0 ? { replay_id: m } : {}),
      exclusiveTime: n.value,
      measurements: {
        inp: { value: n.value, unit: "millisecond" }
      }
    }), M = getSampleRate(l, s, t);
    if (M && Math.random() < M) {
      const E = h ? createSpanEnvelope([h], r.getDsn()) : void 0, y = r && r.getTransport();
      y && E && y.send(E).then(null, (C) => {
        DEBUG_BUILD$2 && logger$1.error("Error while sending interaction:", C);
      });
      return;
    }
  });
}
function addPerformanceEntries(e) {
  const t = getBrowserPerformanceAPI();
  if (!t || !WINDOW$7.performance.getEntries || !browserPerformanceTimeOrigin)
    return;
  DEBUG_BUILD$2 && logger$1.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = msToSec(browserPerformanceTimeOrigin), i = t.getEntries(), { op: r, start_timestamp: o } = spanToJSON(e);
  if (i.slice(_performanceCursor).forEach((s) => {
    const a = msToSec(s.startTime), c = msToSec(s.duration);
    if (!(e.op === "navigation" && o && n + a < o))
      switch (s.entryType) {
        case "navigation": {
          _addNavigationSpans(e, s, n);
          break;
        }
        case "mark":
        case "paint":
        case "measure": {
          _addMeasureSpans(e, s, a, c, n);
          const d = getVisibilityWatcher(), u = s.startTime < d.firstHiddenTime;
          s.name === "first-paint" && u && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding FP"), _measurements.fp = { value: s.startTime, unit: "millisecond" }), s.name === "first-contentful-paint" && u && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding FCP"), _measurements.fcp = { value: s.startTime, unit: "millisecond" });
          break;
        }
        case "resource": {
          _addResourceSpans(e, s, s.name, a, c, n);
          break;
        }
      }
  }), _performanceCursor = Math.max(i.length - 1, 0), _trackNavigator(e), r === "pageload") {
    _addTtfbRequestTimeToMeasurements(_measurements), ["fcp", "fp", "lcp"].forEach((a) => {
      if (!_measurements[a] || !o || n >= o)
        return;
      const c = _measurements[a].value, d = n + msToSec(c), u = Math.abs((d - o) * 1e3), l = u - c;
      DEBUG_BUILD$2 && logger$1.log(`[Measurements] Normalized ${a} from ${c} to ${u} (${l})`), _measurements[a].value = u;
    });
    const s = _measurements["mark.fid"];
    s && _measurements.fid && (_startChild(e, {
      description: "first input delay",
      endTimestamp: s.value + msToSec(_measurements.fid.value),
      op: "ui.action",
      origin: "auto.ui.browser.metrics",
      startTimestamp: s.value
    }), delete _measurements["mark.fid"]), "fcp" in _measurements || delete _measurements.cls, Object.keys(_measurements).forEach((a) => {
      setMeasurement(a, _measurements[a].value, _measurements[a].unit);
    }), _tagMetricInfo(e);
  }
  _lcpEntry = void 0, _clsEntry = void 0, _measurements = {};
}
function _addMeasureSpans(e, t, n, i, r) {
  const o = r + n, s = o + i;
  return _startChild(e, {
    description: t.name,
    endTimestamp: s,
    op: t.entryType,
    origin: "auto.resource.browser.metrics",
    startTimestamp: o
  }), o;
}
function _addNavigationSpans(e, t, n) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((i) => {
    _addPerformanceNavigationTiming(e, t, i, n);
  }), _addPerformanceNavigationTiming(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), _addPerformanceNavigationTiming(e, t, "fetch", n, "cache", "domainLookupStart"), _addPerformanceNavigationTiming(e, t, "domainLookup", n, "DNS"), _addRequest(e, t, n);
}
function _addPerformanceNavigationTiming(e, t, n, i, r, o) {
  const s = o ? t[o] : t[`${n}End`], a = t[`${n}Start`];
  !a || !s || _startChild(e, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: r || n,
    startTimestamp: i + msToSec(a),
    endTimestamp: i + msToSec(s)
  });
}
function _addRequest(e, t, n) {
  t.responseEnd && (_startChild(e, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: "request",
    startTimestamp: n + msToSec(t.requestStart),
    endTimestamp: n + msToSec(t.responseEnd)
  }), _startChild(e, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: "response",
    startTimestamp: n + msToSec(t.responseStart),
    endTimestamp: n + msToSec(t.responseEnd)
  }));
}
function _addResourceSpans(e, t, n, i, r, o) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const s = parseUrl$2(n), a = {};
  setResourceEntrySizeData(a, t, "transferSize", "http.response_transfer_size"), setResourceEntrySizeData(a, t, "encodedBodySize", "http.response_content_length"), setResourceEntrySizeData(a, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus), s.protocol && (a["url.scheme"] = s.protocol.split(":").pop()), s.host && (a["server.address"] = s.host), a["url.same_origin"] = n.includes(WINDOW$7.location.origin);
  const c = o + i, d = c + r;
  _startChild(e, {
    description: n.replace(WINDOW$7.location.origin, ""),
    endTimestamp: d,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: c,
    data: a
  });
}
function _trackNavigator(e) {
  const t = WINDOW$7.navigator;
  if (!t)
    return;
  const n = t.connection;
  n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), isMeasurementValue(n.rtt) && (_measurements["connection.rtt"] = { value: n.rtt, unit: "millisecond" })), isMeasurementValue(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), isMeasurementValue(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
}
function _tagMetricInfo(e) {
  _lcpEntry && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding LCP Data"), _lcpEntry.element && e.setTag("lcp.element", htmlTreeAsString$1(_lcpEntry.element)), _lcpEntry.id && e.setTag("lcp.id", _lcpEntry.id), _lcpEntry.url && e.setTag("lcp.url", _lcpEntry.url.trim().slice(0, 200)), e.setTag("lcp.size", _lcpEntry.size)), _clsEntry && _clsEntry.sources && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding CLS Data"), _clsEntry.sources.forEach(
    (t, n) => (
      // TODO: Can we rewrite this to an attribute?
      // eslint-disable-next-line deprecation/deprecation
      e.setTag(`cls.source.${n + 1}`, htmlTreeAsString$1(t.node))
    )
  ));
}
function setResourceEntrySizeData(e, t, n, i) {
  const r = t[n];
  r != null && r < MAX_INT_AS_BYTES && (e[i] = r);
}
function _addTtfbRequestTimeToMeasurements(e) {
  const t = getNavigationEntry();
  if (!t)
    return;
  const { responseStart: n, requestStart: i } = t;
  i <= n && (DEBUG_BUILD$2 && logger$1.log("[Measurements] Adding TTFB Request Time"), e["ttfb.requestTime"] = {
    value: n - i,
    unit: "millisecond"
  });
}
function getSampleRate(e, t, n) {
  if (!hasTracingEnabled(t))
    return !1;
  let i;
  return e !== void 0 && typeof t.tracesSampler == "function" ? i = t.tracesSampler({
    transactionContext: e,
    name: e.name,
    parentSampled: e.parentSampled,
    attributes: g(g({}, e.data), e.attributes),
    location: WINDOW$7.location
  }) : e !== void 0 && e.sampled !== void 0 ? i = e.sampled : typeof t.tracesSampleRate != "undefined" ? i = t.tracesSampleRate : i = 1, isValidSampleRate(i) ? i === !0 ? n : i === !1 ? 0 : i * n : (DEBUG_BUILD$2 && logger$1.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1);
}
function instrumentFetchRequest(e, t, n, i, r = "auto.http.browser") {
  if (!hasTracingEnabled() || !e.fetchData)
    return;
  const o = t(e.fetchData.url);
  if (e.endTimestamp && o) {
    const f = e.fetchData.__span;
    if (!f) return;
    const m = i[f];
    m && (endSpan(m, e), delete i[f]);
    return;
  }
  const s = getCurrentScope(), a = getClient(), { method: c, url: d } = e.fetchData, u = getFullURL$1(d), l = u ? parseUrl$2(u).host : void 0, p = o ? startInactiveSpan({
    name: `${c} ${d}`,
    onlyIfParent: !0,
    attributes: {
      url: d,
      type: "fetch",
      "http.method": c,
      "http.url": u,
      "server.address": l,
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: r
    },
    op: "http.client"
  }) : void 0;
  if (p && (e.fetchData.__span = p.spanContext().spanId, i[p.spanContext().spanId] = p), n(e.fetchData.url) && a) {
    const f = e.args[0];
    e.args[1] = e.args[1] || {};
    const m = e.args[1];
    m.headers = addTracingHeadersToFetchRequest(f, a, s, m, p);
  }
  return p;
}
function addTracingHeadersToFetchRequest(e, t, n, i, r) {
  const o = r || n.getSpan(), s = getIsolationScope(), { traceId: a, spanId: c, sampled: d, dsc: u } = g(g({}, s.getPropagationContext()), n.getPropagationContext()), l = o ? spanToTraceHeader(o) : generateSentryTraceHeader(a, c, d), p = dynamicSamplingContextToSentryBaggageHeader(
    u || (o ? getDynamicSamplingContextFromSpan(o) : getDynamicSamplingContextFromClient(a, t, n))
  ), f = i.headers || (typeof Request != "undefined" && isInstanceOf$1(e, Request) ? e.headers : void 0);
  if (f)
    if (typeof Headers != "undefined" && isInstanceOf$1(f, Headers)) {
      const m = new Headers(f);
      return m.append("sentry-trace", l), p && m.append(BAGGAGE_HEADER_NAME, p), m;
    } else if (Array.isArray(f)) {
      const m = [...f, ["sentry-trace", l]];
      return p && m.push([BAGGAGE_HEADER_NAME, p]), m;
    } else {
      const m = "baggage" in f ? f.baggage : void 0, I = [];
      return Array.isArray(m) ? I.push(...m) : m && I.push(m), p && I.push(p), _(g({}, f), {
        "sentry-trace": l,
        baggage: I.length > 0 ? I.join(",") : void 0
      });
    }
  else return { "sentry-trace": l, baggage: p };
}
function getFullURL$1(e) {
  try {
    return new URL(e).href;
  } catch (t) {
    return;
  }
}
function endSpan(e, t) {
  if (t.response) {
    setHttpStatus(e, t.response.status);
    const n = t.response && t.response.headers && t.response.headers.get("content-length");
    if (n) {
      const i = parseInt(n);
      i > 0 && e.setAttribute("http.response_content_length", i);
    }
  } else t.error && e.setStatus("internal_error");
  e.end();
}
const DEFAULT_TRACE_PROPAGATION_TARGETS = ["localhost", /^\/(?!\/)/], defaultRequestInstrumentationOptions = {
  traceFetch: !0,
  traceXHR: !0,
  enableHTTPTimings: !0,
  // TODO (v8): Remove this property
  tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
  tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS
};
function instrumentOutgoingRequests(e) {
  const {
    traceFetch: t,
    traceXHR: n,
    // eslint-disable-next-line deprecation/deprecation
    tracePropagationTargets: i,
    // eslint-disable-next-line deprecation/deprecation
    tracingOrigins: r,
    shouldCreateSpanForRequest: o,
    enableHTTPTimings: s
  } = g({
    traceFetch: defaultRequestInstrumentationOptions.traceFetch,
    traceXHR: defaultRequestInstrumentationOptions.traceXHR
  }, e), a = typeof o == "function" ? o : (u) => !0, c = (u) => shouldAttachHeaders(u, i || r), d = {};
  t && addFetchInstrumentationHandler$1((u) => {
    const l = instrumentFetchRequest(u, a, c, d);
    if (l) {
      const p = getFullURL(u.fetchData.url), f = p ? parseUrl$2(p).host : void 0;
      l.setAttributes({
        "http.url": p,
        "server.address": f
      });
    }
    s && l && addHTTPTimings(l);
  }), n && addXhrInstrumentationHandler$1((u) => {
    const l = xhrCallback(u, a, c, d);
    s && l && addHTTPTimings(l);
  });
}
function isPerformanceResourceTiming(e) {
  return e.entryType === "resource" && "initiatorType" in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest");
}
function addHTTPTimings(e) {
  const { url: t } = spanToJSON(e).data || {};
  if (!t || typeof t != "string")
    return;
  const n = addPerformanceInstrumentationHandler("resource", ({ entries: i }) => {
    i.forEach((r) => {
      isPerformanceResourceTiming(r) && r.name.endsWith(t) && (resourceTimingEntryToSpanData(r).forEach((s) => e.setAttribute(...s)), setTimeout(n));
    });
  });
}
function extractNetworkProtocol(e) {
  let t = "unknown", n = "unknown", i = "";
  for (const r of e) {
    if (r === "/") {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(r))) {
      t = i === "h" ? "http" : i, n = e.split(i)[1];
      break;
    }
    i += r;
  }
  return i === e && (t = i), { name: t, version: n };
}
function getAbsoluteTime(e = 0) {
  return ((browserPerformanceTimeOrigin || performance.timeOrigin) + e) / 1e3;
}
function resourceTimingEntryToSpanData(e) {
  const { name: t, version: n } = extractNetworkProtocol(e.nextHopProtocol), i = [];
  return i.push(["network.protocol.version", n], ["network.protocol.name", t]), browserPerformanceTimeOrigin ? [
    ...i,
    ["http.request.redirect_start", getAbsoluteTime(e.redirectStart)],
    ["http.request.fetch_start", getAbsoluteTime(e.fetchStart)],
    ["http.request.domain_lookup_start", getAbsoluteTime(e.domainLookupStart)],
    ["http.request.domain_lookup_end", getAbsoluteTime(e.domainLookupEnd)],
    ["http.request.connect_start", getAbsoluteTime(e.connectStart)],
    ["http.request.secure_connection_start", getAbsoluteTime(e.secureConnectionStart)],
    ["http.request.connection_end", getAbsoluteTime(e.connectEnd)],
    ["http.request.request_start", getAbsoluteTime(e.requestStart)],
    ["http.request.response_start", getAbsoluteTime(e.responseStart)],
    ["http.request.response_end", getAbsoluteTime(e.responseEnd)]
  ] : i;
}
function shouldAttachHeaders(e, t) {
  return stringMatchesSomePattern(e, t || DEFAULT_TRACE_PROPAGATION_TARGETS);
}
function xhrCallback(e, t, n, i) {
  const r = e.xhr, o = r && r[SENTRY_XHR_DATA_KEY$1];
  if (!hasTracingEnabled() || !r || r.__sentry_own_request__ || !o)
    return;
  const s = t(o.url);
  if (e.endTimestamp && s) {
    const f = r.__sentry_xhr_span_id__;
    if (!f) return;
    const m = i[f];
    m && o.status_code !== void 0 && (setHttpStatus(m, o.status_code), m.end(), delete i[f]);
    return;
  }
  const a = getCurrentScope(), c = getIsolationScope(), d = getFullURL(o.url), u = d ? parseUrl$2(d).host : void 0, l = s ? startInactiveSpan({
    name: `${o.method} ${o.url}`,
    onlyIfParent: !0,
    attributes: {
      type: "xhr",
      "http.method": o.method,
      "http.url": d,
      url: o.url,
      "server.address": u,
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser"
    },
    op: "http.client"
  }) : void 0;
  l && (r.__sentry_xhr_span_id__ = l.spanContext().spanId, i[r.__sentry_xhr_span_id__] = l);
  const p = getClient();
  if (r.setRequestHeader && n(o.url) && p) {
    const { traceId: f, spanId: m, sampled: I, dsc: A } = g(g({}, c.getPropagationContext()), a.getPropagationContext()), h = l ? spanToTraceHeader(l) : generateSentryTraceHeader(f, m, I), M = dynamicSamplingContextToSentryBaggageHeader(
      A || (l ? getDynamicSamplingContextFromSpan(l) : getDynamicSamplingContextFromClient(f, p, a))
    );
    setHeaderOnXhr(r, h, M);
  }
  return l;
}
function setHeaderOnXhr(e, t, n) {
  try {
    e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(BAGGAGE_HEADER_NAME, n);
  } catch (i) {
  }
}
function getFullURL(e) {
  try {
    return new URL(e, WINDOW$7.location.origin).href;
  } catch (t) {
    return;
  }
}
const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing", DEFAULT_BROWSER_TRACING_OPTIONS = g(_(g({}, TRACING_DEFAULTS), {
  instrumentNavigation: !0,
  instrumentPageLoad: !0,
  markBackgroundSpan: !0,
  enableLongTask: !0,
  enableInp: !1,
  interactionsSampleRate: 1,
  _experiments: {}
}), defaultRequestInstrumentationOptions), browserTracingIntegration = (e = {}) => {
  const t = DEBUG_BUILD$2 ? !!// eslint-disable-next-line deprecation/deprecation
  (e.tracePropagationTargets || e.tracingOrigins) : !1;
  addTracingExtensions(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
  const n = g(g({}, DEFAULT_BROWSER_TRACING_OPTIONS), e), i = startTrackingWebVitals(), r = {};
  n.enableInp && startTrackingINP(r, n.interactionsSampleRate), n.enableLongTask && startTrackingLongTasks(), n._experiments.enableInteractions && startTrackingInteractions();
  const o = {
    name: void 0,
    context: void 0
  };
  function s(a) {
    const c = getCurrentHub(), { beforeStartSpan: d, idleTimeout: u, finalTimeout: l, heartbeatInterval: p } = n, f = a.op === "pageload";
    let m;
    if (f) {
      const M = f ? getMetaContent("sentry-trace") : "", E = f ? getMetaContent("baggage") : void 0, { traceId: y, dsc: C, parentSpanId: N, sampled: T } = propagationContextFromHeaders(M, E);
      m = _(g({
        traceId: y,
        parentSpanId: N,
        parentSampled: T
      }, a), {
        metadata: _(g({}, a.metadata), {
          dynamicSamplingContext: C
        }),
        trimEnd: !0
      });
    } else
      m = g({
        trimEnd: !0
      }, a);
    const I = d ? d(m) : m;
    I.metadata = I.name !== m.name ? (
      // eslint-disable-next-line deprecation/deprecation
      _(g({}, I.metadata), { source: "custom" })
    ) : (
      // eslint-disable-next-line deprecation/deprecation
      I.metadata
    ), o.name = I.name, o.context = I, I.sampled === !1 && DEBUG_BUILD$2 && logger$1.log(`[Tracing] Will not send ${I.op} transaction because of beforeNavigate.`), DEBUG_BUILD$2 && logger$1.log(`[Tracing] Starting ${I.op} transaction on scope`);
    const { location: A } = WINDOW$7, h = startIdleTransaction(
      c,
      I,
      u,
      l,
      !0,
      { location: A },
      // for use in the tracesSampler
      p,
      f
      // should wait for finish signal if it's a pageload transaction
    );
    return f && WINDOW$7.document && (WINDOW$7.document.addEventListener("readystatechange", () => {
      ["interactive", "complete"].includes(WINDOW$7.document.readyState) && h.sendAutoFinishSignal();
    }), ["interactive", "complete"].includes(WINDOW$7.document.readyState) && h.sendAutoFinishSignal()), h.registerBeforeFinishCallback((M) => {
      i(), addPerformanceEntries(M);
    }), h;
  }
  return {
    name: BROWSER_TRACING_INTEGRATION_ID,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupOnce: () => {
    },
    afterAllSetup(a) {
      const c = a.getOptions(), { markBackgroundSpan: d, traceFetch: u, traceXHR: l, shouldCreateSpanForRequest: p, enableHTTPTimings: f, _experiments: m } = n, I = c && c.tracePropagationTargets, A = I || n.tracePropagationTargets;
      DEBUG_BUILD$2 && t && I && logger$1.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
      );
      let h, M = WINDOW$7.location && WINDOW$7.location.href;
      if (a.on && (a.on("startNavigationSpan", (E) => {
        h && (DEBUG_BUILD$2 && logger$1.log(`[Tracing] Finishing current transaction with op: ${spanToJSON(h).op}`), h.end()), h = s(g({
          op: "navigation"
        }, E));
      }), a.on("startPageLoadSpan", (E) => {
        h && (DEBUG_BUILD$2 && logger$1.log(`[Tracing] Finishing current transaction with op: ${spanToJSON(h).op}`), h.end()), h = s(g({
          op: "pageload"
        }, E));
      })), n.instrumentPageLoad && a.emit && WINDOW$7.location) {
        const E = {
          name: WINDOW$7.location.pathname,
          // pageload should always start at timeOrigin (and needs to be in s, not ms)
          startTimestamp: browserPerformanceTimeOrigin ? browserPerformanceTimeOrigin / 1e3 : void 0,
          origin: "auto.pageload.browser",
          attributes: {
            [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
          }
        };
        startBrowserTracingPageLoadSpan(a, E);
      }
      n.instrumentNavigation && a.emit && WINDOW$7.location && addHistoryInstrumentationHandler$1(({ to: E, from: y }) => {
        if (y === void 0 && M && M.indexOf(E) !== -1) {
          M = void 0;
          return;
        }
        if (y !== E) {
          M = void 0;
          const C = {
            name: WINDOW$7.location.pathname,
            origin: "auto.navigation.browser",
            attributes: {
              [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
            }
          };
          startBrowserTracingNavigationSpan(a, C);
        }
      }), d && registerBackgroundTabDetection(), m.enableInteractions && registerInteractionListener(n, o), n.enableInp && registerInpInteractionListener(r, o), instrumentOutgoingRequests({
        traceFetch: u,
        traceXHR: l,
        tracePropagationTargets: A,
        shouldCreateSpanForRequest: p,
        enableHTTPTimings: f
      });
    },
    // TODO v8: Remove this again
    // This is private API that we use to fix converted BrowserTracing integrations in Next.js & SvelteKit
    options: n
  };
};
function startBrowserTracingPageLoadSpan(e, t) {
  if (!e.emit)
    return;
  e.emit("startPageLoadSpan", t);
  const n = getActiveSpan();
  return (n && spanToJSON(n).op) === "pageload" ? n : void 0;
}
function startBrowserTracingNavigationSpan(e, t) {
  if (!e.emit)
    return;
  e.emit("startNavigationSpan", t);
  const n = getActiveSpan();
  return (n && spanToJSON(n).op) === "navigation" ? n : void 0;
}
function getMetaContent(e) {
  const t = getDomElement(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
function registerInteractionListener(e, t) {
  let n;
  const i = () => {
    const { idleTimeout: r, finalTimeout: o, heartbeatInterval: s } = e, a = "ui.action.click", c = getActiveTransaction();
    if (c && c.op && ["navigation", "pageload"].includes(c.op)) {
      DEBUG_BUILD$2 && logger$1.warn(
        `[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`
      );
      return;
    }
    if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !t.name) {
      DEBUG_BUILD$2 && logger$1.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);
      return;
    }
    const { location: d } = WINDOW$7, u = {
      name: t.name,
      op: a,
      trimEnd: !0,
      data: {
        [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: t.context ? getSource(t.context) : "url"
      }
    };
    n = startIdleTransaction(
      // eslint-disable-next-line deprecation/deprecation
      getCurrentHub(),
      u,
      r,
      o,
      !0,
      { location: d },
      // for use in the tracesSampler
      s
    );
  };
  ["click"].forEach((r) => {
    WINDOW$7.document && addEventListener(r, i, { once: !1, capture: !0 });
  });
}
function isPerformanceEventTiming(e) {
  return "duration" in e;
}
const MAX_INTERACTIONS = 10;
function registerInpInteractionListener(e, t) {
  const n = ({ entries: i }) => {
    const r = getClient(), o = r !== void 0 && r.getIntegrationByName !== void 0 ? r.getIntegrationByName("Replay") : void 0, s = o !== void 0 ? o.getReplayId() : void 0, a = getActiveTransaction(), c = getCurrentScope(), d = c !== void 0 ? c.getUser() : void 0;
    i.forEach((u) => {
      if (isPerformanceEventTiming(u)) {
        const l = u.interactionId;
        if (l === void 0)
          return;
        const p = e[l], f = u.duration, m = u.startTime, I = Object.keys(e), A = I.length > 0 ? I.reduce((h, M) => e[h].duration < e[M].duration ? h : M) : void 0;
        if (u.entryType === "first-input" && I.map((M) => e[M]).some((M) => M.duration === f && M.startTime === m) || !l)
          return;
        if (p)
          p.duration = Math.max(p.duration, f);
        else if (I.length < MAX_INTERACTIONS || A === void 0 || f > e[A].duration) {
          const h = t.name, M = t.context;
          h && M && (A && Object.keys(e).length >= MAX_INTERACTIONS && delete e[A], e[l] = {
            routeName: h,
            duration: f,
            parentContext: M,
            user: d,
            activeTransaction: a,
            replayId: s,
            startTime: m
          });
        }
      }
    });
  };
  addPerformanceInstrumentationHandler("event", n), addPerformanceInstrumentationHandler("first-input", n);
}
function getSource(e) {
  const t = e.attributes && e.attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE], n = e.data && e.data[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE], i = e.metadata && e.metadata.source;
  return t || n || i;
}
const objectToString = Object.prototype.toString;
function isError(e) {
  switch (objectToString.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return isInstanceOf(e, Error);
  }
}
function isBuiltin(e, t) {
  return objectToString.call(e) === `[object ${t}]`;
}
function isErrorEvent(e) {
  return isBuiltin(e, "ErrorEvent");
}
function isDOMError(e) {
  return isBuiltin(e, "DOMError");
}
function isDOMException(e) {
  return isBuiltin(e, "DOMException");
}
function isString(e) {
  return isBuiltin(e, "String");
}
function isParameterizedString(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function isPrimitive(e) {
  return e === null || isParameterizedString(e) || typeof e != "object" && typeof e != "function";
}
function isPlainObject(e) {
  return isBuiltin(e, "Object");
}
function isEvent(e) {
  return typeof Event != "undefined" && isInstanceOf(e, Event);
}
function isElement(e) {
  return typeof Element != "undefined" && isInstanceOf(e, Element);
}
function isThenable(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function isSyntheticEvent(e) {
  return isPlainObject(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function isNaN$1(e) {
  return typeof e == "number" && e !== e;
}
function isInstanceOf(e, t) {
  try {
    return e instanceof t;
  } catch (n) {
    return !1;
  }
}
function isVueViewModel(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function truncate(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function safeJoin(e, t) {
  if (!Array.isArray(e))
    return "";
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    try {
      isVueViewModel(r) ? n.push("[VueViewModel]") : n.push(String(r));
    } catch (o) {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function applyAggregateErrorsToEvent(e, t, n = 250, i, r, o, s) {
  if (!o.exception || !o.exception.values || !s || !isInstanceOf(s.originalException, Error))
    return;
  const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  a && (o.exception.values = truncateAggregateExceptions(
    aggregateExceptionsFromError(
      e,
      t,
      r,
      s.originalException,
      i,
      o.exception.values,
      a,
      0
    ),
    n
  ));
}
function aggregateExceptionsFromError(e, t, n, i, r, o, s, a) {
  if (o.length >= n + 1)
    return o;
  let c = [...o];
  if (isInstanceOf(i[r], Error)) {
    applyExceptionGroupFieldsForParentException(s, a);
    const d = e(t, i[r]), u = c.length;
    applyExceptionGroupFieldsForChildException(d, r, u, a), c = aggregateExceptionsFromError(
      e,
      t,
      n,
      i[r],
      r,
      [d, ...c],
      d,
      u
    );
  }
  return Array.isArray(i.errors) && i.errors.forEach((d, u) => {
    if (isInstanceOf(d, Error)) {
      applyExceptionGroupFieldsForParentException(s, a);
      const l = e(t, d), p = c.length;
      applyExceptionGroupFieldsForChildException(l, `errors[${u}]`, p, a), c = aggregateExceptionsFromError(
        e,
        t,
        n,
        d,
        r,
        [l, ...c],
        l,
        p
      );
    }
  }), c;
}
function applyExceptionGroupFieldsForParentException(e, t) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = _(g(g({}, e.mechanism), e.type === "AggregateError" && { is_exception_group: !0 }), {
    exception_id: t
  });
}
function applyExceptionGroupFieldsForChildException(e, t, n, i) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = _(g({}, e.mechanism), {
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: i
  });
}
function truncateAggregateExceptions(e, t) {
  return e.map((n) => (n.value && (n.value = truncate(n.value, t)), n));
}
function isGlobalObj(e) {
  return e && e.Math == Math ? e : void 0;
}
const GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || // eslint-disable-next-line no-restricted-globals
typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || /* @__PURE__ */ function() {
  return this;
}() || {};
function getGlobalObject() {
  return GLOBAL_OBJ;
}
const WINDOW$6 = getGlobalObject(), DEFAULT_MAX_STRING_LENGTH = 80;
function htmlTreeAsString(e, t = {}) {
  if (!e)
    return "<unknown>";
  try {
    let n = e;
    const i = 5, r = [];
    let o = 0, s = 0;
    const a = " > ", c = a.length;
    let d;
    const u = Array.isArray(t) ? t : t.keyAttrs, l = !Array.isArray(t) && t.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    for (; n && o++ < i && (d = _htmlElementAsString(n, u), !(d === "html" || o > 1 && s + r.length * c + d.length >= l)); )
      r.push(d), s += d.length, n = n.parentNode;
    return r.reverse().join(a);
  } catch (n) {
    return "<unknown>";
  }
}
function _htmlElementAsString(e, t) {
  const n = e, i = [];
  let r, o, s, a, c;
  if (!n || !n.tagName)
    return "";
  if (WINDOW$6.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent)
    return n.dataset.sentryComponent;
  i.push(n.tagName.toLowerCase());
  const d = t && t.length ? t.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)]) : null;
  if (d && d.length)
    d.forEach((l) => {
      i.push(`[${l[0]}="${l[1]}"]`);
    });
  else if (n.id && i.push(`#${n.id}`), r = n.className, r && isString(r))
    for (o = r.split(/\s+/), c = 0; c < o.length; c++)
      i.push(`.${o[c]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < u.length; c++)
    s = u[c], a = n.getAttribute(s), a && i.push(`[${s}="${a}"]`);
  return i.join("");
}
function getLocationHref() {
  try {
    return WINDOW$6.document.location.href;
  } catch (e) {
    return "";
  }
}
function getComponentName(e) {
  if (!WINDOW$6.HTMLElement)
    return null;
  let t = e;
  const n = 5;
  for (let i = 0; i < n; i++) {
    if (!t)
      return null;
    if (t instanceof HTMLElement && t.dataset.sentryComponent)
      return t.dataset.sentryComponent;
    t = t.parentNode;
  }
  return null;
}
const DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__, PREFIX = "Sentry Logger ", CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
], originalConsoleMethods = {};
function consoleSandbox(e) {
  if (!("console" in GLOBAL_OBJ))
    return e();
  const t = GLOBAL_OBJ.console, n = {}, i = Object.keys(originalConsoleMethods);
  i.forEach((r) => {
    const o = originalConsoleMethods[r];
    n[r] = t[r], t[r] = o;
  });
  try {
    return e();
  } finally {
    i.forEach((r) => {
      t[r] = n[r];
    });
  }
}
function makeLogger() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e
  };
  return DEBUG_BUILD$1 ? CONSOLE_LEVELS.forEach((n) => {
    t[n] = (...i) => {
      e && consoleSandbox(() => {
        GLOBAL_OBJ.console[n](`${PREFIX}[${n}]:`, ...i);
      });
    };
  }) : CONSOLE_LEVELS.forEach((n) => {
    t[n] = () => {
    };
  }), t;
}
const logger = makeLogger();
function dsnToString(e, t = !1) {
  const { host: n, path: i, pass: r, port: o, projectId: s, protocol: a, publicKey: c } = e;
  return `${a}://${c}${t && r ? `:${r}` : ""}@${n}${o ? `:${o}` : ""}/${i && `${i}/`}${s}`;
}
function fill(e, t, n) {
  if (!(t in e))
    return;
  const i = e[t], r = n(i);
  typeof r == "function" && markFunctionWrapped(r, i), e[t] = r;
}
function addNonEnumerableProperty(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: n,
      writable: !0,
      configurable: !0
    });
  } catch (i) {
    DEBUG_BUILD$1 && logger.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function markFunctionWrapped(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = t.prototype = n, addNonEnumerableProperty(e, "__sentry_original__", t);
  } catch (n) {
  }
}
function getOriginalFunction(e) {
  return e.__sentry_original__;
}
function convertToPlainObject(e) {
  if (isError(e))
    return g({
      message: e.message,
      name: e.name,
      stack: e.stack
    }, getOwnProperties(e));
  if (isEvent(e)) {
    const t = g({
      type: e.type,
      target: serializeEventTarget(e.target),
      currentTarget: serializeEventTarget(e.currentTarget)
    }, getOwnProperties(e));
    return typeof CustomEvent != "undefined" && isInstanceOf(e, CustomEvent) && (t.detail = e.detail), t;
  } else
    return e;
}
function serializeEventTarget(e) {
  try {
    return isElement(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e);
  } catch (t) {
    return "<unknown>";
  }
}
function getOwnProperties(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else
    return {};
}
function extractExceptionKeysForMessage(e, t = 40) {
  const n = Object.keys(convertToPlainObject(e));
  if (n.sort(), !n.length)
    return "[object has no keys]";
  if (n[0].length >= t)
    return truncate(n[0], t);
  for (let i = n.length; i > 0; i--) {
    const r = n.slice(0, i).join(", ");
    if (!(r.length > t))
      return i === n.length ? r : truncate(r, t);
  }
  return "";
}
const STACKTRACE_FRAME_LIMIT = 50, WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/, STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...e) {
  const t = e.sort((n, i) => n[0] - i[0]).map((n) => n[1]);
  return (n, i = 0) => {
    const r = [], o = n.split(`
`);
    for (let s = i; s < o.length; s++) {
      const a = o[s];
      if (a.length > 1024)
        continue;
      const c = WEBPACK_ERROR_REGEXP.test(a) ? a.replace(WEBPACK_ERROR_REGEXP, "$1") : a;
      if (!c.match(/\S*Error: /)) {
        for (const d of t) {
          const u = d(c);
          if (u) {
            r.push(u);
            break;
          }
        }
        if (r.length >= STACKTRACE_FRAME_LIMIT)
          break;
      }
    }
    return stripSentryFramesAndReverse(r);
  };
}
function stackParserFromStackParserOptions(e) {
  return Array.isArray(e) ? createStackParser(...e) : e;
}
function stripSentryFramesAndReverse(e) {
  if (!e.length)
    return [];
  const t = Array.from(e);
  return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), STRIP_FRAME_REGEXP.test(t[t.length - 1].function || "") && (t.pop(), STRIP_FRAME_REGEXP.test(t[t.length - 1].function || "") && t.pop()), t.slice(0, STACKTRACE_FRAME_LIMIT).map((n) => _(g({}, n), {
    filename: n.filename || t[t.length - 1].filename,
    function: n.function || "?"
  }));
}
const defaultFunctionName = "<anonymous>";
function getFunctionName(e) {
  try {
    return !e || typeof e != "function" ? defaultFunctionName : e.name || defaultFunctionName;
  } catch (t) {
    return defaultFunctionName;
  }
}
const handlers = {}, instrumented = {};
function addHandler(e, t) {
  handlers[e] = handlers[e] || [], handlers[e].push(t);
}
function maybeInstrument(e, t) {
  instrumented[e] || (t(), instrumented[e] = !0);
}
function triggerHandlers(e, t) {
  const n = e && handlers[e];
  if (n)
    for (const i of n)
      try {
        i(t);
      } catch (r) {
        DEBUG_BUILD$1 && logger.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${getFunctionName(i)}
Error:`,
          r
        );
      }
}
function addConsoleInstrumentationHandler(e) {
  const t = "console";
  addHandler(t, e), maybeInstrument(t, instrumentConsole);
}
function instrumentConsole() {
  "console" in GLOBAL_OBJ && CONSOLE_LEVELS.forEach(function(e) {
    e in GLOBAL_OBJ.console && fill(GLOBAL_OBJ.console, e, function(t) {
      return originalConsoleMethods[e] = t, function(...n) {
        triggerHandlers("console", { args: n, level: e });
        const r = originalConsoleMethods[e];
        r && r.apply(GLOBAL_OBJ.console, n);
      };
    });
  });
}
function uuid4() {
  const e = GLOBAL_OBJ, t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID)
      return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (n = () => {
      const i = new Uint8Array(1);
      return t.getRandomValues(i), i[0];
    });
  } catch (i) {
  }
  return ("10000000100040008000" + 1e11).replace(
    /[018]/g,
    (i) => (
      // eslint-disable-next-line no-bitwise
      (i ^ (n() & 15) >> i / 4).toString(16)
    )
  );
}
function getFirstException(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function getEventDescription(e) {
  const { message: t, event_id: n } = e;
  if (t)
    return t;
  const i = getFirstException(e);
  return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>";
}
function addExceptionTypeValue(e, t, n) {
  const i = e.exception = e.exception || {}, r = i.values = i.values || [], o = r[0] = r[0] || {};
  o.value || (o.value = t || ""), o.type || (o.type = "Error");
}
function addExceptionMechanism(e, t) {
  const n = getFirstException(e);
  if (!n)
    return;
  const i = { type: "generic", handled: !0 }, r = n.mechanism;
  if (n.mechanism = g(g(g({}, i), r), t), t && "data" in t) {
    const o = g(g({}, r && r.data), t.data);
    n.mechanism.data = o;
  }
}
const WINDOW$5 = GLOBAL_OBJ, DEBOUNCE_DURATION = 1e3;
let debounceTimerID, lastCapturedEventType, lastCapturedEventTargetId;
function addClickKeypressInstrumentationHandler(e) {
  const t = "dom";
  addHandler(t, e), maybeInstrument(t, instrumentDOM);
}
function instrumentDOM() {
  if (!WINDOW$5.document)
    return;
  const e = triggerHandlers.bind(null, "dom"), t = makeDOMEventHandler(e, !0);
  WINDOW$5.document.addEventListener("click", t, !1), WINDOW$5.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((n) => {
    const i = WINDOW$5[n] && WINDOW$5[n].prototype;
    !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (fill(i, "addEventListener", function(r) {
      return function(o, s, a) {
        if (o === "click" || o == "keypress")
          try {
            const c = this, d = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {}, u = d[o] = d[o] || { refCount: 0 };
            if (!u.handler) {
              const l = makeDOMEventHandler(e);
              u.handler = l, r.call(this, o, l, a);
            }
            u.refCount++;
          } catch (c) {
          }
        return r.call(this, o, s, a);
      };
    }), fill(
      i,
      "removeEventListener",
      function(r) {
        return function(o, s, a) {
          if (o === "click" || o == "keypress")
            try {
              const c = this, d = c.__sentry_instrumentation_handlers__ || {}, u = d[o];
              u && (u.refCount--, u.refCount <= 0 && (r.call(this, o, u.handler, a), u.handler = void 0, delete d[o]), Object.keys(d).length === 0 && delete c.__sentry_instrumentation_handlers__);
            } catch (c) {
            }
          return r.call(this, o, s, a);
        };
      }
    ));
  });
}
function isSimilarToLastCapturedEvent(e) {
  if (e.type !== lastCapturedEventType)
    return !1;
  try {
    if (!e.target || e.target._sentryId !== lastCapturedEventTargetId)
      return !1;
  } catch (t) {
  }
  return !0;
}
function shouldSkipDOMEvent(e, t) {
  return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
}
function makeDOMEventHandler(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured)
      return;
    const i = getEventTarget(n);
    if (shouldSkipDOMEvent(n.type, i))
      return;
    addNonEnumerableProperty(n, "_sentryCaptured", !0), i && !i._sentryId && addNonEnumerableProperty(i, "_sentryId", uuid4());
    const r = n.type === "keypress" ? "input" : n.type;
    isSimilarToLastCapturedEvent(n) || (e({ event: n, name: r, global: t }), lastCapturedEventType = n.type, lastCapturedEventTargetId = i ? i._sentryId : void 0), clearTimeout(debounceTimerID), debounceTimerID = WINDOW$5.setTimeout(() => {
      lastCapturedEventTargetId = void 0, lastCapturedEventType = void 0;
    }, DEBOUNCE_DURATION);
  };
}
function getEventTarget(e) {
  try {
    return e.target;
  } catch (t) {
    return null;
  }
}
const WINDOW$4 = getGlobalObject();
function supportsFetch() {
  if (!("fetch" in WINDOW$4))
    return !1;
  try {
    return new Headers(), new Request("http://www.example.com"), new Response(), !0;
  } catch (e) {
    return !1;
  }
}
function isNativeFetch(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function supportsNativeFetch() {
  if (typeof EdgeRuntime == "string")
    return !0;
  if (!supportsFetch())
    return !1;
  if (isNativeFetch(WINDOW$4.fetch))
    return !0;
  let e = !1;
  const t = WINDOW$4.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = isNativeFetch(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (n) {
      DEBUG_BUILD$1 && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
  return e;
}
function addFetchInstrumentationHandler(e) {
  const t = "fetch";
  addHandler(t, e), maybeInstrument(t, instrumentFetch);
}
function instrumentFetch() {
  supportsNativeFetch() && fill(GLOBAL_OBJ, "fetch", function(e) {
    return function(...t) {
      const { method: n, url: i } = parseFetchArgs(t), r = {
        args: t,
        fetchData: {
          method: n,
          url: i
        },
        startTimestamp: Date.now()
      };
      return triggerHandlers("fetch", g({}, r)), e.apply(GLOBAL_OBJ, t).then(
        (o) => {
          const s = _(g({}, r), {
            endTimestamp: Date.now(),
            response: o
          });
          return triggerHandlers("fetch", s), o;
        },
        (o) => {
          const s = _(g({}, r), {
            endTimestamp: Date.now(),
            error: o
          });
          throw triggerHandlers("fetch", s), o;
        }
      );
    };
  });
}
function hasProp(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function getUrlFromResource(e) {
  return typeof e == "string" ? e : e ? hasProp(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function parseFetchArgs(e) {
  if (e.length === 0)
    return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, i] = e;
    return {
      url: getUrlFromResource(n),
      method: hasProp(i, "method") ? String(i.method).toUpperCase() : "GET"
    };
  }
  const t = e[0];
  return {
    url: getUrlFromResource(t),
    method: hasProp(t, "method") ? String(t.method).toUpperCase() : "GET"
  };
}
let _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(e) {
  const t = "error";
  addHandler(t, e), maybeInstrument(t, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = GLOBAL_OBJ.onerror, GLOBAL_OBJ.onerror = function(e, t, n, i, r) {
    return triggerHandlers("error", {
      column: i,
      error: r,
      line: n,
      msg: e,
      url: t
    }), _oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__ ? _oldOnErrorHandler.apply(this, arguments) : !1;
  }, GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let _oldOnUnhandledRejectionHandler = null;
function addGlobalUnhandledRejectionInstrumentationHandler(e) {
  const t = "unhandledrejection";
  addHandler(t, e), maybeInstrument(t, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection, GLOBAL_OBJ.onunhandledrejection = function(e) {
    return triggerHandlers("unhandledrejection", e), _oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__ ? _oldOnUnhandledRejectionHandler.apply(this, arguments) : !0;
  }, GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
const WINDOW$3 = getGlobalObject();
function supportsHistory() {
  const e = WINDOW$3.chrome, t = e && e.app && e.app.runtime, n = "history" in WINDOW$3 && !!WINDOW$3.history.pushState && !!WINDOW$3.history.replaceState;
  return !t && n;
}
const WINDOW$2 = GLOBAL_OBJ;
let lastHref;
function addHistoryInstrumentationHandler(e) {
  const t = "history";
  addHandler(t, e), maybeInstrument(t, instrumentHistory);
}
function instrumentHistory() {
  if (!supportsHistory())
    return;
  const e = WINDOW$2.onpopstate;
  WINDOW$2.onpopstate = function(...n) {
    const i = WINDOW$2.location.href, r = lastHref;
    if (lastHref = i, triggerHandlers("history", { from: r, to: i }), e)
      try {
        return e.apply(this, n);
      } catch (s) {
      }
  };
  function t(n) {
    return function(...i) {
      const r = i.length > 2 ? i[2] : void 0;
      if (r) {
        const o = lastHref, s = String(r);
        lastHref = s, triggerHandlers("history", { from: o, to: s });
      }
      return n.apply(this, i);
    };
  }
  fill(WINDOW$2.history, "pushState", t), fill(WINDOW$2.history, "replaceState", t);
}
const WINDOW$1 = GLOBAL_OBJ, SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
function addXhrInstrumentationHandler(e) {
  const t = "xhr";
  addHandler(t, e), maybeInstrument(t, instrumentXHR);
}
function instrumentXHR() {
  if (!WINDOW$1.XMLHttpRequest)
    return;
  const e = XMLHttpRequest.prototype;
  fill(e, "open", function(t) {
    return function(...n) {
      const i = Date.now(), r = isString(n[0]) ? n[0].toUpperCase() : void 0, o = parseUrl$1(n[1]);
      if (!r || !o)
        return t.apply(this, n);
      this[SENTRY_XHR_DATA_KEY] = {
        method: r,
        url: o,
        request_headers: {}
      }, r === "POST" && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
      const s = () => {
        const a = this[SENTRY_XHR_DATA_KEY];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch (d) {
          }
          const c = {
            args: [r, o],
            endTimestamp: Date.now(),
            startTimestamp: i,
            xhr: this
          };
          triggerHandlers("xhr", c);
        }
      };
      return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? fill(this, "onreadystatechange", function(a) {
        return function(...c) {
          return s(), a.apply(this, c);
        };
      }) : this.addEventListener("readystatechange", s), fill(this, "setRequestHeader", function(a) {
        return function(...c) {
          const [d, u] = c, l = this[SENTRY_XHR_DATA_KEY];
          return l && isString(d) && isString(u) && (l.request_headers[d.toLowerCase()] = u), a.apply(this, c);
        };
      }), t.apply(this, n);
    };
  }), fill(e, "send", function(t) {
    return function(...n) {
      const i = this[SENTRY_XHR_DATA_KEY];
      if (!i)
        return t.apply(this, n);
      n[0] !== void 0 && (i.body = n[0]);
      const r = {
        args: [i.method, i.url],
        startTimestamp: Date.now(),
        xhr: this
      };
      return triggerHandlers("xhr", r), t.apply(this, n);
    };
  });
}
function parseUrl$1(e) {
  if (isString(e))
    return e;
  try {
    return e.toString();
  } catch (t) {
  }
}
function getSDKSource() {
  return "npm";
}
function memoBuilder() {
  const e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
  function n(r) {
    if (e)
      return t.has(r) ? !0 : (t.add(r), !1);
    for (let o = 0; o < t.length; o++)
      if (t[o] === r)
        return !0;
    return t.push(r), !1;
  }
  function i(r) {
    if (e)
      t.delete(r);
    else
      for (let o = 0; o < t.length; o++)
        if (t[o] === r) {
          t.splice(o, 1);
          break;
        }
  }
  return [n, i];
}
function normalize(e, t = 100, n = 1 / 0) {
  try {
    return visit("", e, t, n);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function normalizeToSize(e, t = 3, n = 100 * 1024) {
  const i = normalize(e, t);
  return jsonSize(i) > n ? normalizeToSize(e, t - 1, n) : i;
}
function visit(e, t, n = 1 / 0, i = 1 / 0, r = memoBuilder()) {
  const [o, s] = r;
  if (t == null || // this matches null and undefined -> eqeq not eqeqeq
  ["number", "boolean", "string"].includes(typeof t) && !isNaN$1(t))
    return t;
  const a = stringifyValue(e, t);
  if (!a.startsWith("[object "))
    return a;
  if (t.__sentry_skip_normalization__)
    return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
  if (c === 0)
    return a.replace("object ", "");
  if (o(t))
    return "[Circular ~]";
  const d = t;
  if (d && typeof d.toJSON == "function")
    try {
      const f = d.toJSON();
      return visit("", f, c - 1, i, r);
    } catch (f) {
    }
  const u = Array.isArray(t) ? [] : {};
  let l = 0;
  const p = convertToPlainObject(t);
  for (const f in p) {
    if (!Object.prototype.hasOwnProperty.call(p, f))
      continue;
    if (l >= i) {
      u[f] = "[MaxProperties ~]";
      break;
    }
    const m = p[f];
    u[f] = visit(f, m, c - 1, i, r), l++;
  }
  return s(t), u;
}
function stringifyValue(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter")
      return "[DomainEmitter]";
    if (typeof global != "undefined" && t === global)
      return "[Global]";
    if (typeof window != "undefined" && t === window)
      return "[Window]";
    if (typeof document != "undefined" && t === document)
      return "[Document]";
    if (isVueViewModel(t))
      return "[VueViewModel]";
    if (isSyntheticEvent(t))
      return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t)
      return "[NaN]";
    if (typeof t == "function")
      return `[Function: ${getFunctionName(t)}]`;
    if (typeof t == "symbol")
      return `[${String(t)}]`;
    if (typeof t == "bigint")
      return `[BigInt: ${String(t)}]`;
    const n = getConstructorName(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function getConstructorName(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function utf8Length(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function jsonSize(e) {
  return utf8Length(JSON.stringify(e));
}
var States;
(function(e) {
  e[e.PENDING = 0] = "PENDING";
  const n = 1;
  e[e.RESOLVED = n] = "RESOLVED";
  const i = 2;
  e[e.REJECTED = i] = "REJECTED";
})(States || (States = {}));
function resolvedSyncPromise(e) {
  return new SyncPromise((t) => {
    t(e);
  });
}
function rejectedSyncPromise(e) {
  return new SyncPromise((t, n) => {
    n(e);
  });
}
class SyncPromise {
  constructor(t) {
    SyncPromise.prototype.__init.call(this), SyncPromise.prototype.__init2.call(this), SyncPromise.prototype.__init3.call(this), SyncPromise.prototype.__init4.call(this), this._state = States.PENDING, this._handlers = [];
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  /** JSDoc */
  then(t, n) {
    return new SyncPromise((i, r) => {
      this._handlers.push([
        !1,
        (o) => {
          if (!t)
            i(o);
          else
            try {
              i(t(o));
            } catch (s) {
              r(s);
            }
        },
        (o) => {
          if (!n)
            r(o);
          else
            try {
              i(n(o));
            } catch (s) {
              r(s);
            }
        }
      ]), this._executeHandlers();
    });
  }
  /** JSDoc */
  catch(t) {
    return this.then((n) => n, t);
  }
  /** JSDoc */
  finally(t) {
    return new SyncPromise((n, i) => {
      let r, o;
      return this.then(
        (s) => {
          o = !1, r = s, t && t();
        },
        (s) => {
          o = !0, r = s, t && t();
        }
      ).then(() => {
        if (o) {
          i(r);
          return;
        }
        n(r);
      });
    });
  }
  /** JSDoc */
  __init() {
    this._resolve = (t) => {
      this._setResult(States.RESOLVED, t);
    };
  }
  /** JSDoc */
  __init2() {
    this._reject = (t) => {
      this._setResult(States.REJECTED, t);
    };
  }
  /** JSDoc */
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === States.PENDING) {
        if (isThenable(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        this._state = t, this._value = n, this._executeHandlers();
      }
    };
  }
  /** JSDoc */
  __init4() {
    this._executeHandlers = () => {
      if (this._state === States.PENDING)
        return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((n) => {
        n[0] || (this._state === States.RESOLVED && n[1](this._value), this._state === States.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
}
function parseUrl(e) {
  if (!e)
    return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t)
    return {};
  const n = t[6] || "", i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: i,
    relative: t[5] + n + i
    // everything minus origin
  };
}
const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
function severityLevelFromString(e) {
  return e === "warn" ? "warning" : validSeverityLevels.includes(e) ? e : "log";
}
const ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
  return Date.now() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
  const { performance: e } = GLOBAL_OBJ;
  if (!e || !e.now)
    return dateTimestampInSeconds;
  const t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / ONE_SECOND_IN_MS;
}
createUnixTimestampInSecondsFunc();
(() => {
  const { performance: e } = GLOBAL_OBJ;
  if (!e || !e.now)
    return;
  const t = 3600 * 1e3, n = e.now(), i = Date.now(), r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t, o = r < t, s = e.timing && e.timing.navigationStart, c = typeof s == "number" ? Math.abs(s + n - i) : t, d = c < t;
  return o || d ? r <= c ? e.timeOrigin : s : i;
})();
function createEnvelope(e, t = []) {
  return [e, t];
}
function createClientReportEnvelope(e, t, n) {
  const i = [
    { type: "client_report" },
    {
      timestamp: dateTimestampInSeconds(),
      discarded_events: e
    }
  ];
  return createEnvelope(t ? { dsn: t } : {}, [i]);
}
const WINDOW = GLOBAL_OBJ;
let ignoreOnError = 0;
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
function ignoreNextOnError() {
  ignoreOnError++, setTimeout(() => {
    ignoreOnError--;
  });
}
function wrap(e, t = {}, n) {
  if (typeof e != "function")
    return e;
  try {
    const r = e.__sentry_wrapped__;
    if (r)
      return typeof r == "function" ? r : e;
    if (getOriginalFunction(e))
      return e;
  } catch (r) {
    return e;
  }
  const i = function() {
    const r = Array.prototype.slice.call(arguments);
    try {
      const o = r.map((s) => wrap(s, t));
      return e.apply(this, o);
    } catch (o) {
      throw ignoreNextOnError(), withScope((s) => {
        s.addEventProcessor((a) => (t.mechanism && (addExceptionTypeValue(a, void 0), addExceptionMechanism(a, t.mechanism)), a.extra = _(g({}, a.extra), {
          arguments: r
        }), a)), captureException(o);
      }), o;
    }
  };
  try {
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
  } catch (r) {
  }
  markFunctionWrapped(i, e), addNonEnumerableProperty(e, "__sentry_wrapped__", i);
  try {
    Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
      get() {
        return e.name;
      }
    });
  } catch (r) {
  }
  return i;
}
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ == "undefined" || __SENTRY_DEBUG__;
function exceptionFromError(e, t) {
  const n = parseStackFrames(e, t), i = {
    type: t && t.name,
    value: extractMessage(t)
  };
  return n.length && (i.stacktrace = { frames: n }), i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"), i;
}
function eventFromPlainObject(e, t, n, i) {
  const r = getClient(), o = r && r.getOptions().normalizeDepth, s = {
    exception: {
      values: [
        {
          type: isEvent(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
          value: getNonErrorObjectExceptionValue(t, { isUnhandledRejection: i })
        }
      ]
    },
    extra: {
      __serialized__: normalizeToSize(t, o)
    }
  };
  if (n) {
    const a = parseStackFrames(e, n);
    a.length && (s.exception.values[0].stacktrace = { frames: a });
  }
  return s;
}
function eventFromError(e, t) {
  return {
    exception: {
      values: [exceptionFromError(e, t)]
    }
  };
}
function parseStackFrames(e, t) {
  const n = t.stacktrace || t.stack || "", i = getPopSize(t);
  try {
    return e(n, i);
  } catch (r) {
  }
  return [];
}
const reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(e) {
  if (e) {
    if (typeof e.framesToPop == "number")
      return e.framesToPop;
    if (reactMinifiedRegexp.test(e.message))
      return 1;
  }
  return 0;
}
function extractMessage(e) {
  const t = e && e.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function eventFromException(e, t, n, i) {
  const r = n && n.syntheticException || void 0, o = eventFromUnknownInput(e, t, r, i);
  return addExceptionMechanism(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), resolvedSyncPromise(o);
}
function eventFromMessage(e, t, n = "info", i, r) {
  const o = i && i.syntheticException || void 0, s = eventFromString(e, t, o, r);
  return s.level = n, i && i.event_id && (s.event_id = i.event_id), resolvedSyncPromise(s);
}
function eventFromUnknownInput(e, t, n, i, r) {
  let o;
  if (isErrorEvent(t) && t.error)
    return eventFromError(e, t.error);
  if (isDOMError(t) || isDOMException(t)) {
    const s = t;
    if ("stack" in t)
      o = eventFromError(e, t);
    else {
      const a = s.name || (isDOMError(s) ? "DOMError" : "DOMException"), c = s.message ? `${a}: ${s.message}` : a;
      o = eventFromString(e, c, n, i), addExceptionTypeValue(o, c);
    }
    return "code" in s && (o.tags = _(g({}, o.tags), { "DOMException.code": `${s.code}` })), o;
  }
  return isError(t) ? eventFromError(e, t) : isPlainObject(t) || isEvent(t) ? (o = eventFromPlainObject(e, t, n, r), addExceptionMechanism(o, {
    synthetic: !0
  }), o) : (o = eventFromString(e, t, n, i), addExceptionTypeValue(o, `${t}`), addExceptionMechanism(o, {
    synthetic: !0
  }), o);
}
function eventFromString(e, t, n, i) {
  const r = {};
  if (i && n) {
    const o = parseStackFrames(e, n);
    o.length && (r.exception = {
      values: [{ value: t, stacktrace: { frames: o } }]
    });
  }
  if (isParameterizedString(t)) {
    const { __sentry_template_string__: o, __sentry_template_values__: s } = t;
    return r.logentry = {
      message: o,
      params: s
    }, r;
  }
  return r.message = t, r;
}
function getNonErrorObjectExceptionValue(e, { isUnhandledRejection: t }) {
  const n = extractExceptionKeysForMessage(e), i = t ? "promise rejection" : "exception";
  return isErrorEvent(e) ? `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\`` : isEvent(e) ? `Event \`${getObjectClassName(e)}\` (type=${e.type}) captured as ${i}` : `Object captured as ${i} with keys: ${n}`;
}
function getObjectClassName(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch (t) {
  }
}
function createUserFeedbackEnvelope(e, {
  metadata: t,
  tunnel: n,
  dsn: i
}) {
  const r = g(g({
    event_id: e.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, t && t.sdk && {
    sdk: {
      name: t.sdk.name,
      version: t.sdk.version
    }
  }), !!n && !!i && { dsn: dsnToString(i) }), o = createUserFeedbackEnvelopeItem(e);
  return createEnvelope(r, [o]);
}
function createUserFeedbackEnvelopeItem(e) {
  return [{
    type: "user_report"
  }, e];
}
class BrowserClient extends BaseClient {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  constructor(t) {
    const n = WINDOW.SENTRY_SDK_SOURCE || getSDKSource();
    applySdkMetadata(t, "browser", ["browser"], n), super(t), t.sendClientReports && WINDOW.document && WINDOW.document.addEventListener("visibilitychange", () => {
      WINDOW.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  /**
   * @inheritDoc
   */
  eventFromException(t, n) {
    return eventFromException(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(t, n = "info", i) {
    return eventFromMessage(this._options.stackParser, t, n, i, this._options.attachStacktrace);
  }
  /**
   * Sends user feedback to Sentry.
   */
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      DEBUG_BUILD && logger.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = createUserFeedbackEnvelope(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this._sendEnvelope(n);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(t, n, i) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, n, i);
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      DEBUG_BUILD && logger.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      DEBUG_BUILD && logger.log("No dsn provided, will not send outcomes");
      return;
    }
    DEBUG_BUILD && logger.log("Sending outcomes:", t);
    const n = createClientReportEnvelope(t, this._options.tunnel && dsnToString(this._dsn));
    this._sendEnvelope(n);
  }
}
let cachedFetchImpl;
function getNativeFetchImplementation() {
  if (cachedFetchImpl)
    return cachedFetchImpl;
  if (isNativeFetch(WINDOW.fetch))
    return cachedFetchImpl = WINDOW.fetch.bind(WINDOW);
  const e = WINDOW.document;
  let t = WINDOW.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      n.hidden = !0, e.head.appendChild(n);
      const i = n.contentWindow;
      i && i.fetch && (t = i.fetch), e.head.removeChild(n);
    } catch (n) {
      DEBUG_BUILD && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
  return cachedFetchImpl = t.bind(WINDOW);
}
function clearCachedFetchImplementation() {
  cachedFetchImpl = void 0;
}
function makeFetchTransport(e, t = getNativeFetchImplementation()) {
  let n = 0, i = 0;
  function r(o) {
    const s = o.body.length;
    n += s, i++;
    const a = g({
      body: o.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
      //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
      //   We will therefore only activate the flag when we're below that limit.
      // There is also a limit of requests that can be open at the same time, so we also limit this to 15
      // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
      keepalive: n <= 6e4 && i < 15
    }, e.fetchOptions);
    try {
      return t(e.url, a).then((c) => (n -= s, i--, {
        statusCode: c.status,
        headers: {
          "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": c.headers.get("Retry-After")
        }
      }));
    } catch (c) {
      return clearCachedFetchImplementation(), n -= s, i--, rejectedSyncPromise(c);
    }
  }
  return createTransport(e, r);
}
const XHR_READYSTATE_DONE = 4;
function makeXHRTransport(e) {
  function t(n) {
    return new SyncPromise((i, r) => {
      const o = new XMLHttpRequest();
      o.onerror = r, o.onreadystatechange = () => {
        o.readyState === XHR_READYSTATE_DONE && i({
          statusCode: o.status,
          headers: {
            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
            "retry-after": o.getResponseHeader("Retry-After")
          }
        });
      }, o.open("POST", e.url);
      for (const s in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, s) && o.setRequestHeader(s, e.headers[s]);
      o.send(n.body);
    });
  }
  return createTransport(e, t);
}
const UNKNOWN_FUNCTION = "?", CHROME_PRIORITY = 30, WINJS_PRIORITY = 40, GECKO_PRIORITY = 50;
function createFrame(e, t, n, i) {
  const r = {
    filename: e,
    function: t,
    in_app: !0
    // All browser frames are considered in_app
  };
  return n !== void 0 && (r.lineno = n), i !== void 0 && (r.colno = i), r;
}
const chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/, chromeStackParserFn = (e) => {
  const t = chromeRegex.exec(e);
  if (t) {
    if (t[2] && t[2].indexOf("eval") === 0) {
      const o = chromeEvalRegex.exec(t[2]);
      o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]);
    }
    const [i, r] = extractSafariExtensionDetails(t[1] || UNKNOWN_FUNCTION, t[2]);
    return createFrame(r, i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
  }
}, chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn], geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, gecko = (e) => {
  const t = geckoREgex.exec(e);
  if (t) {
    if (t[3] && t[3].indexOf(" > eval") > -1) {
      const o = geckoEvalRegex.exec(t[3]);
      o && (t[1] = t[1] || "eval", t[3] = o[1], t[4] = o[2], t[5] = "");
    }
    let i = t[3], r = t[1] || UNKNOWN_FUNCTION;
    return [r, i] = extractSafariExtensionDetails(r, i), createFrame(i, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
  }
}, geckoStackLineParser = [GECKO_PRIORITY, gecko], winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, winjs = (e) => {
  const t = winjsRegex.exec(e);
  return t ? createFrame(t[2], t[1] || UNKNOWN_FUNCTION, +t[3], t[4] ? +t[4] : void 0) : void 0;
}, winjsStackLineParser = [WINJS_PRIORITY, winjs], defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser], defaultStackParser = createStackParser(...defaultStackLineParsers), extractSafariExtensionDetails = (e, t) => {
  const n = e.indexOf("safari-extension") !== -1, i = e.indexOf("safari-web-extension") !== -1;
  return n || i ? [
    e.indexOf("@") !== -1 ? e.split("@")[0] : UNKNOWN_FUNCTION,
    n ? `safari-extension:${t}` : `safari-web-extension:${t}`
  ] : [e, t];
}, MAX_ALLOWED_STRING_LENGTH = 1024, INTEGRATION_NAME$5 = "Breadcrumbs", _breadcrumbsIntegration = (e = {}) => {
  const t = g({
    console: !0,
    dom: !0,
    fetch: !0,
    history: !0,
    sentry: !0,
    xhr: !0
  }, e);
  return {
    name: INTEGRATION_NAME$5,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    setup(n) {
      t.console && addConsoleInstrumentationHandler(_getConsoleBreadcrumbHandler(n)), t.dom && addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(n, t.dom)), t.xhr && addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(n)), t.fetch && addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(n)), t.history && addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(n)), t.sentry && n.on && n.on("beforeSendEvent", _getSentryBreadcrumbHandler(n));
    }
  };
}, breadcrumbsIntegration = _breadcrumbsIntegration;
convertIntegrationFnToClass(INTEGRATION_NAME$5, breadcrumbsIntegration);
function _getSentryBreadcrumbHandler(e) {
  return function(n) {
    getClient() === e && addBreadcrumb(
      {
        category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
        event_id: n.event_id,
        level: n.level,
        message: getEventDescription(n)
      },
      {
        event: n
      }
    );
  };
}
function _getDomBreadcrumbHandler(e, t) {
  return function(i) {
    if (getClient() !== e)
      return;
    let r, o, s = typeof t == "object" ? t.serializeAttribute : void 0, a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
    a && a > MAX_ALLOWED_STRING_LENGTH && (DEBUG_BUILD && logger.warn(
      `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${a} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
    ), a = MAX_ALLOWED_STRING_LENGTH), typeof s == "string" && (s = [s]);
    try {
      const d = i.event, u = _isEvent(d) ? d.target : d;
      r = htmlTreeAsString(u, { keyAttrs: s, maxStringLength: a }), o = getComponentName(u);
    } catch (d) {
      r = "<unknown>";
    }
    if (r.length === 0)
      return;
    const c = {
      category: `ui.${i.name}`,
      message: r
    };
    o && (c.data = { "ui.component_name": o }), addBreadcrumb(c, {
      event: i.event,
      name: i.name,
      global: i.global
    });
  };
}
function _getConsoleBreadcrumbHandler(e) {
  return function(n) {
    if (getClient() !== e)
      return;
    const i = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: severityLevelFromString(n.level),
      message: safeJoin(n.args, " ")
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        i.message = `Assertion failed: ${safeJoin(n.args.slice(1), " ") || "console.assert"}`, i.data.arguments = n.args.slice(1);
      else
        return;
    addBreadcrumb(i, {
      input: n.args,
      level: n.level
    });
  };
}
function _getXhrBreadcrumbHandler(e) {
  return function(n) {
    if (getClient() !== e)
      return;
    const { startTimestamp: i, endTimestamp: r } = n, o = n.xhr[SENTRY_XHR_DATA_KEY];
    if (!i || !r || !o)
      return;
    const { method: s, url: a, status_code: c, body: d } = o, u = {
      method: s,
      url: a,
      status_code: c
    }, l = {
      xhr: n.xhr,
      input: d,
      startTimestamp: i,
      endTimestamp: r
    };
    addBreadcrumb(
      {
        category: "xhr",
        data: u,
        type: "http"
      },
      l
    );
  };
}
function _getFetchBreadcrumbHandler(e) {
  return function(n) {
    if (getClient() !== e)
      return;
    const { startTimestamp: i, endTimestamp: r } = n;
    if (r && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
      if (n.error) {
        const o = n.fetchData, s = {
          data: n.error,
          input: n.args,
          startTimestamp: i,
          endTimestamp: r
        };
        addBreadcrumb(
          {
            category: "fetch",
            data: o,
            level: "error",
            type: "http"
          },
          s
        );
      } else {
        const o = n.response, s = _(g({}, n.fetchData), {
          status_code: o && o.status
        }), a = {
          input: n.args,
          response: o,
          startTimestamp: i,
          endTimestamp: r
        };
        addBreadcrumb(
          {
            category: "fetch",
            data: s,
            type: "http"
          },
          a
        );
      }
  };
}
function _getHistoryBreadcrumbHandler(e) {
  return function(n) {
    if (getClient() !== e)
      return;
    let i = n.from, r = n.to;
    const o = parseUrl(WINDOW.location.href);
    let s = i ? parseUrl(i) : void 0;
    const a = parseUrl(r);
    (!s || !s.path) && (s = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === s.protocol && o.host === s.host && (i = s.relative), addBreadcrumb({
      category: "navigation",
      data: {
        from: i,
        to: r
      }
    });
  };
}
function _isEvent(e) {
  return !!e && !!e.target;
}
const INTEGRATION_NAME$4 = "Dedupe", _dedupeIntegration = () => {
  let e;
  return {
    name: INTEGRATION_NAME$4,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    processEvent(t) {
      if (t.type)
        return t;
      try {
        if (_shouldDropEvent(t, e))
          return DEBUG_BUILD && logger.warn("Event dropped due to being a duplicate of previously captured event."), null;
      } catch (n) {
      }
      return e = t;
    }
  };
}, dedupeIntegration = _dedupeIntegration;
convertIntegrationFnToClass(INTEGRATION_NAME$4, dedupeIntegration);
function _shouldDropEvent(e, t) {
  return t ? !!(_isSameMessageEvent(e, t) || _isSameExceptionEvent(e, t)) : !1;
}
function _isSameMessageEvent(e, t) {
  const n = e.message, i = t.message;
  return !(!n && !i || n && !i || !n && i || n !== i || !_isSameFingerprint(e, t) || !_isSameStacktrace(e, t));
}
function _isSameExceptionEvent(e, t) {
  const n = _getExceptionFromEvent(t), i = _getExceptionFromEvent(e);
  return !(!n || !i || n.type !== i.type || n.value !== i.value || !_isSameFingerprint(e, t) || !_isSameStacktrace(e, t));
}
function _isSameStacktrace(e, t) {
  let n = _getFramesFromEvent(e), i = _getFramesFromEvent(t);
  if (!n && !i)
    return !0;
  if (n && !i || !n && i || (n = n, i = i, i.length !== n.length))
    return !1;
  for (let r = 0; r < i.length; r++) {
    const o = i[r], s = n[r];
    if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function)
      return !1;
  }
  return !0;
}
function _isSameFingerprint(e, t) {
  let n = e.fingerprint, i = t.fingerprint;
  if (!n && !i)
    return !0;
  if (n && !i || !n && i)
    return !1;
  n = n, i = i;
  try {
    return n.join("") === i.join("");
  } catch (r) {
    return !1;
  }
}
function _getExceptionFromEvent(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function _getFramesFromEvent(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch (n) {
      return;
    }
}
const INTEGRATION_NAME$3 = "GlobalHandlers", _globalHandlersIntegration = (e = {}) => {
  const t = g({
    onerror: !0,
    onunhandledrejection: !0
  }, e);
  return {
    name: INTEGRATION_NAME$3,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      t.onerror && (_installGlobalOnErrorHandler(n), globalHandlerLog("onerror")), t.onunhandledrejection && (_installGlobalOnUnhandledRejectionHandler(n), globalHandlerLog("onunhandledrejection"));
    }
  };
}, globalHandlersIntegration = _globalHandlersIntegration;
convertIntegrationFnToClass(
  INTEGRATION_NAME$3,
  globalHandlersIntegration
);
function _installGlobalOnErrorHandler(e) {
  addGlobalErrorInstrumentationHandler((t) => {
    const { stackParser: n, attachStacktrace: i } = getOptions();
    if (getClient() !== e || shouldIgnoreOnError())
      return;
    const { msg: r, url: o, line: s, column: a, error: c } = t, d = c === void 0 && isString(r) ? _eventFromIncompleteOnError(r, o, s, a) : _enhanceEventWithInitialFrame(
      eventFromUnknownInput(n, c || r, void 0, i, !1),
      o,
      s,
      a
    );
    d.level = "error", captureEvent(d, {
      originalException: c,
      mechanism: {
        handled: !1,
        type: "onerror"
      }
    });
  });
}
function _installGlobalOnUnhandledRejectionHandler(e) {
  addGlobalUnhandledRejectionInstrumentationHandler((t) => {
    const { stackParser: n, attachStacktrace: i } = getOptions();
    if (getClient() !== e || shouldIgnoreOnError())
      return;
    const r = _getUnhandledRejectionError(t), o = isPrimitive(r) ? _eventFromRejectionWithPrimitive(r) : eventFromUnknownInput(n, r, void 0, i, !0);
    o.level = "error", captureEvent(o, {
      originalException: r,
      mechanism: {
        handled: !1,
        type: "onunhandledrejection"
      }
    });
  });
}
function _getUnhandledRejectionError(e) {
  if (isPrimitive(e))
    return e;
  const t = e;
  try {
    if ("reason" in t)
      return t.reason;
    if ("detail" in t && "reason" in t.detail)
      return t.detail.reason;
  } catch (n) {
  }
  return e;
}
function _eventFromRejectionWithPrimitive(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
          value: `Non-Error promise rejection captured with value: ${String(e)}`
        }
      ]
    }
  };
}
function _eventFromIncompleteOnError(e, t, n, i) {
  const r = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let o = isErrorEvent(e) ? e.message : e, s = "Error";
  const a = o.match(r);
  return a && (s = a[1], o = a[2]), _enhanceEventWithInitialFrame({
    exception: {
      values: [
        {
          type: s,
          value: o
        }
      ]
    }
  }, t, n, i);
}
function _enhanceEventWithInitialFrame(e, t, n, i) {
  const r = e.exception = e.exception || {}, o = r.values = r.values || [], s = o[0] = o[0] || {}, a = s.stacktrace = s.stacktrace || {}, c = a.frames = a.frames || [], d = isNaN(parseInt(i, 10)) ? void 0 : i, u = isNaN(parseInt(n, 10)) ? void 0 : n, l = isString(t) && t.length > 0 ? t : getLocationHref();
  return c.length === 0 && c.push({
    colno: d,
    filename: l,
    function: "?",
    in_app: !0,
    lineno: u
  }), e;
}
function globalHandlerLog(e) {
  DEBUG_BUILD && logger.log(`Global Handler attached: ${e}`);
}
function getOptions() {
  const e = getClient();
  return e && e.getOptions() || {
    stackParser: () => [],
    attachStacktrace: !1
  };
}
const INTEGRATION_NAME$2 = "HttpContext", _httpContextIntegration = () => ({
  name: INTEGRATION_NAME$2,
  // TODO v8: Remove this
  setupOnce() {
  },
  // eslint-disable-line @typescript-eslint/no-empty-function
  preprocessEvent(e) {
    if (!WINDOW.navigator && !WINDOW.location && !WINDOW.document)
      return;
    const t = e.request && e.request.url || WINDOW.location && WINDOW.location.href, { referrer: n } = WINDOW.document || {}, { userAgent: i } = WINDOW.navigator || {}, r = g(g(g({}, e.request && e.request.headers), n && { Referer: n }), i && { "User-Agent": i }), o = _(g(g({}, e.request), t && { url: t }), { headers: r });
    e.request = o;
  }
}), httpContextIntegration = _httpContextIntegration;
convertIntegrationFnToClass(INTEGRATION_NAME$2, httpContextIntegration);
const DEFAULT_KEY = "cause", DEFAULT_LIMIT = 5, INTEGRATION_NAME$1 = "LinkedErrors", _linkedErrorsIntegration = (e = {}) => {
  const t = e.limit || DEFAULT_LIMIT, n = e.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME$1,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    preprocessEvent(i, r, o) {
      const s = o.getOptions();
      applyAggregateErrorsToEvent(
        // This differs from the LinkedErrors integration in core by using a different exceptionFromError function
        exceptionFromError,
        s.stackParser,
        s.maxValueLength,
        n,
        t,
        i,
        r
      );
    }
  };
}, linkedErrorsIntegration = _linkedErrorsIntegration;
convertIntegrationFnToClass(INTEGRATION_NAME$1, linkedErrorsIntegration);
const DEFAULT_EVENT_TARGET = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "BroadcastChannel",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "SharedWorker",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload"
], INTEGRATION_NAME = "TryCatch", _browserApiErrorsIntegration = (e = {}) => {
  const t = g({
    XMLHttpRequest: !0,
    eventTarget: !0,
    requestAnimationFrame: !0,
    setInterval: !0,
    setTimeout: !0
  }, e);
  return {
    name: INTEGRATION_NAME,
    // TODO: This currently only works for the first client this is setup
    // We may want to adjust this to check for client etc.
    setupOnce() {
      t.setTimeout && fill(WINDOW, "setTimeout", _wrapTimeFunction), t.setInterval && fill(WINDOW, "setInterval", _wrapTimeFunction), t.requestAnimationFrame && fill(WINDOW, "requestAnimationFrame", _wrapRAF), t.XMLHttpRequest && "XMLHttpRequest" in WINDOW && fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      const n = t.eventTarget;
      n && (Array.isArray(n) ? n : DEFAULT_EVENT_TARGET).forEach(_wrapEventTarget);
    }
  };
}, browserApiErrorsIntegration = _browserApiErrorsIntegration;
convertIntegrationFnToClass(
  INTEGRATION_NAME,
  browserApiErrorsIntegration
);
function _wrapTimeFunction(e) {
  return function(...t) {
    const n = t[0];
    return t[0] = wrap(n, {
      mechanism: {
        data: { function: getFunctionName(e) },
        handled: !1,
        type: "instrument"
      }
    }), e.apply(this, t);
  };
}
function _wrapRAF(e) {
  return function(t) {
    return e.apply(this, [
      wrap(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: getFunctionName(e)
          },
          handled: !1,
          type: "instrument"
        }
      })
    ]);
  };
}
function _wrapXHR(e) {
  return function(...t) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      r in n && typeof n[r] == "function" && fill(n, r, function(o) {
        const s = {
          mechanism: {
            data: {
              function: r,
              handler: getFunctionName(o)
            },
            handled: !1,
            type: "instrument"
          }
        }, a = getOriginalFunction(o);
        return a && (s.mechanism.data.handler = getFunctionName(a)), wrap(o, s);
      });
    }), e.apply(this, t);
  };
}
function _wrapEventTarget(e) {
  const t = WINDOW, n = t[e] && t[e].prototype;
  !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (fill(n, "addEventListener", function(i) {
    return function(r, o, s) {
      try {
        typeof o.handleEvent == "function" && (o.handleEvent = wrap(o.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: getFunctionName(o),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }));
      } catch (a) {
      }
      return i.apply(this, [
        r,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        wrap(o, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: getFunctionName(o),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }),
        s
      ]);
    };
  }), fill(
    n,
    "removeEventListener",
    function(i) {
      return function(r, o, s) {
        const a = o;
        try {
          const c = a && a.__sentry_wrapped__;
          c && i.call(this, r, c, s);
        } catch (c) {
        }
        return i.call(this, r, a, s);
      };
    }
  ));
}
const defaultIntegrations = [
  inboundFiltersIntegration(),
  functionToStringIntegration(),
  browserApiErrorsIntegration(),
  breadcrumbsIntegration(),
  globalHandlersIntegration(),
  linkedErrorsIntegration(),
  dedupeIntegration(),
  httpContextIntegration()
];
function getDefaultIntegrations(e) {
  return [
    // eslint-disable-next-line deprecation/deprecation
    ...defaultIntegrations
  ];
}
function init(e = {}) {
  e.defaultIntegrations === void 0 && (e.defaultIntegrations = getDefaultIntegrations()), e.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (e.release = __SENTRY_RELEASE__), WINDOW.SENTRY_RELEASE && WINDOW.SENTRY_RELEASE.id && (e.release = WINDOW.SENTRY_RELEASE.id)), e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), e.sendClientReports === void 0 && (e.sendClientReports = !0);
  const t = _(g({}, e), {
    stackParser: stackParserFromStackParserOptions(e.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(e),
    transport: e.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
  });
  initAndBind(BrowserClient, t), e.autoSessionTracking && startSessionTracking();
}
function startSessionTracking() {
  if (typeof WINDOW.document == "undefined") {
    DEBUG_BUILD && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
    return;
  }
  startSession({ ignoreDuration: !0 }), captureSession(), addHistoryInstrumentationHandler(({ from: e, to: t }) => {
    e !== void 0 && e !== t && (startSession({ ignoreDuration: !0 }), captureSession());
  });
}
function initSentry() {
  if (config.sentryDsn && (config.sentry.enabled = !0), !config.sentry.enabled) return;
  const e = _(g({
    dsn: config.sentry.dsn,
    release: pip3dFrontendVersion
  }, config.sentry.env && { environment: config.sentry.env }), {
    integrations: [
      browserTracingIntegration(),
      globalHandlersIntegration({
        onerror: !0,
        // disable unhandled promise reject as we always handle important promise rejection
        onunhandledrejection: !1
      })
    ],
    tracesSampleRate: config.sentry.tracesSampleRate,
    sendDefaultPii: !0
  });
  info("initialize sentry with config", e), init(e), setTag("frontend.version", pip3dFrontendVersion), window.sentryCaptureException = captureException;
}
function sentrySetTag(e, t) {
  try {
    setTag(e, t);
  } catch (n) {
    err(`failed to set sentry tag ${e}=${t} with error`, n);
  }
}
function initMenu() {
  if (config.menu)
    return new Promise(function(e, t) {
      const n = document.getElementById("n2i-menu"), i = document.getElementById("audio"), r = g(g({
        toggle: {
          handler: (o, s) => {
            o.classList.toggle("alt"), n.style.maxHeight.length ? n.style.maxHeight = "" : n.style.maxHeight = `${Object.keys(r).length * 2.5 + 0.5}em`;
          }
        },
        audio: {
          handler: () => {
            i.muted = !i.muted, i.play();
          },
          iconEvents: [
            {
              obj: i,
              name: "volumechange",
              value: () => i.muted
            },
            {
              obj: i,
              name: "play",
              value: () => i.muted
            }
          ]
        }
      }, config.menuFullscreenButton && device$1.os != "ios" && {
        fullscreen: {
          handler: () => {
            document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
          },
          iconEvents: [
            {
              obj: document,
              name: "fullscreenchange",
              value: () => !document.fullscreenElement
            }
          ]
        }
      }), config.menuBackButton && {
        back: {
          handler: () => {
            n2i.back();
          }
        }
      });
      Object.assign(r, config.menuButtons);
      for (const o in r) {
        const s = r[o], a = createHtmlElement(n, "div", `n2i-menu-button-${o}`, ["n2i-menu-button"]);
        if (s.image && (a.style["background-image"] = `url(${s.image})`), s.iconEvents)
          for (const c of s.iconEvents)
            c.obj.addEventListener(c.name, function(d) {
              c.value(d) ? a.classList.remove("alt") : a.classList.add("alt");
            });
        a.addEventListener("click", function(c) {
          if (n.moved) return;
          const d = s.handler;
          d && d(a, c);
          const u = s.message;
          u && postMessage(u), dispatchCustomEvent(`n2i_menu_button_${o}_click`);
        });
      }
      n.classList.remove("n2i-hidden"), e();
    });
}
let pointerClass;
function showPointer(e) {
  const t = document.getElementById("n2i-pointer-hole"), { minX: n, minY: i, maxX: r, maxY: o, style: s, name: a } = e;
  if (t.removeAttribute("style"), t.style.width = `${(r - n) * 100}%`, t.style.height = `${(o - i) * 100}%`, t.style.left = `${n * 100}%`, t.style.top = `${i * 100}%`, s)
    for (const [c, d] of Object.entries(s))
      t.style[c] = d;
  t.classList.remove("n2i-hidden"), pointerClass && (t.classList.remove(pointerClass), pointerClass = void 0), a && (t.classList.add(a), pointerClass = a);
}
function hidePointer() {
  const e = document.getElementById("n2i-pointer-hole");
  e && e.classList.add("n2i-hidden");
}
function handleSeekOnClick(e) {
  if (!config.offlineStream.seekOnClick) return;
  const t = [...config.offlineStream.seekOnClick];
  addEventListener("n2i_pip3d_frame", function() {
    let n = !1, i, r = 0;
    const o = Date.now(), s = document.getElementById("n2i-canvas");
    function a() {
      const l = Date.now() - o + r, p = t.find((m) => m.time * 1e3 >= l), f = !!config.offlineStream.seekOnClick.find((m) => m.time * 1e3 <= l && l < (m.time + m.restrict) * 1e3);
      p != null && p.pointer && !f ? (showPointer(p.pointer), p.pointer.noInputRestriction || (i = p.pointer)) : (hidePointer(), i = void 0);
    }
    const c = setInterval(a, 100);
    addEventListener("n2i_offline_stream_playing_end", () => clearInterval(c));
    function d(u) {
      if (i && restrictInput(u, i)) return;
      const l = Date.now();
      if (!(n && l < n))
        for (dispatchCustomEvent("n2i_offline_stream_input", u), n = !1; t.length > 0; ) {
          const p = t.shift(), f = p.restrict ? p.restrict * 1e3 : 0, m = l - o + r - p.time * 1e3;
          if (m < 0) {
            p.audio !== !1 && PIP3D_AUDIO.seek(p.time), e.seek(p.time * 1e3, !0), f && (n = l + f), r += -m, a();
            break;
          } else if (f > m) {
            n = l + f - m;
            return;
          }
        }
    }
    s.addEventListener(device.type == "desktop" ? "mousedown" : "touchstart", d);
  }, { once: !0 });
}
function initOfflineStream() {
  config.offlineStream.enabled && addEventListener("n2i_init_end", function() {
    if (!config.pip3dLibsVersion)
      throw new Error("pip3dLibsVersion must be set");
    if (!config.imagesCommonBaseUrl)
      throw new Error("imagesCommonBaseUrl must be set");
    let e = config.offlineStream.url;
    !e.startsWith("http") && !e.startsWith("file") && (e = `${config.imagesCommonBaseUrl}/dumps/${e}`);
    let t = config.offlineStream.audioUrl;
    t && !t.startsWith("http") && !t.startsWith("file") && (t = `${config.imagesCommonBaseUrl}/dumps/${t}`);
    let n = !1;
    connectPip3d(g({
      STATIC_BASE_URL: `${config.imagesCommonBaseUrl}/scripts/by-version/${config.pip3dLibsVersion}`,
      IMAGES_COMMON_BASE_URL: config.imagesCommonBaseUrl,
      URL: e,
      URL_TYPE: "file",
      WEBGL_VERSION: config.offlineStream.webglVersion,
      LOOP: config.offlineStream.loop,
      MAX_FPS: config.offlineStream.maxFps,
      SEEK_ON_CLICK: config.offlineStream.seekOnClick
    }, t && {
      audioURL: t,
      staticAudio: !0
    }), {
      onInitializing: null,
      onDisconnected: function() {
        dispatchCustomEventEnd("n2i_offline_stream_playing"), n || dispatchCustomEvent("n2i_pip3d_disconnected");
      }
    }).then(function(i) {
      dispatchCustomEventStart("n2i_offline_stream_playing", i), handleSeekOnClick(i);
      function r() {
        removeEventListener("n2i_pip3d_initializing", r), info("live stream initializing, disconnect offline stream"), n = !0, disconnectPip3d(i);
      }
      addEventListener("n2i_pip3d_initializing", r), addEventListener("n2i_inactivity_timeout", function() {
        disconnectPip3d(i);
      });
    }).catch(function(i) {
      err("failed to load offline stream", e, i), captureException$1(i);
    });
  });
}
const star = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDU3NiA1MTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0YXItc29saWQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoYjBhODQ4NjU0MSwgMjAyMi0xMi0wMSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjEuNDUxMTcxOSIKICAgICBpbmtzY2FwZTpjeD0iMjg4LjA0MzA3IgogICAgIGlua3NjYXBlOmN5PSIyNTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNTY1IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjkzMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjI2IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIxMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc0IiAvPgogIDwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi4zLjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPgogIDxwYXRoCiAgICAgZD0iTTMxNi45IDE4QzMxMS42IDcgMzAwLjQgMCAyODguMSAwcy0yMy40IDctMjguOCAxOEwxOTUgMTUwLjMgNTEuNCAxNzEuNWMtMTIgMS44LTIyIDEwLjItMjUuNyAyMS43cy0uNyAyNC4yIDcuOSAzMi43TDEzNy44IDMyOSAxMTMuMiA0NzQuN2MtMiAxMiAzIDI0LjIgMTIuOSAzMS4zczIzIDggMzMuOCAyLjNsMTI4LjMtNjguNSAxMjguMyA2OC41YzEwLjggNS43IDIzLjkgNC45IDMzLjgtMi4zczE0LjktMTkuMyAxMi45LTMxLjNMNDM4LjUgMzI5IDU0Mi43IDIyNS45YzguNi04LjUgMTEuNy0yMS4yIDcuOS0zMi43cy0xMy43LTE5LjktMjUuNy0yMS43TDM4MS4yIDE1MC4zIDMxNi45IDE4eiIKICAgICBpZD0icGF0aDIiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9zdmc+Cg==", halfStar = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDU3NiA1MTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0YXItaGFsZi1zdHJva2Utc29saWQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoYjBhODQ4NjU0MSwgMjAyMi0xMi0wMSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjEuNDUxMTcxOSIKICAgICBpbmtzY2FwZTpjeD0iMjg4LjM4NzYyIgogICAgIGlua3NjYXBlOmN5PSIyNTUuNjU1NDUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc0IiAvPgogIDwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi4zLjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPgogIDxwYXRoCiAgICAgZD0iTTI4OCAzNzYuNGwuMS0uMSAyNi40IDE0LjEgODUuMiA0NS41LTE2LjUtOTcuNi00LjgtMjguNyAyMC43LTIwLjUgNzAuMS02OS4zLTk2LjEtMTQuMi0yOS4zLTQuMy0xMi45LTI2LjZMMjg4LjEgODYuOWwtLjEgLjNWMzc2LjR6bTE3NS4xIDk4LjNjMiAxMi0zIDI0LjItMTIuOSAzMS4zcy0yMyA4LTMzLjggMi4zTDI4OC4xIDQzOS44IDE1OS44IDUwOC4zQzE0OSA1MTQgMTM1LjkgNTEzLjEgMTI2IDUwNnMtMTQuOS0xOS4zLTEyLjktMzEuM0wxMzcuOCAzMjkgMzMuNiAyMjUuOWMtOC42LTguNS0xMS43LTIxLjItNy45LTMyLjdzMTMuNy0xOS45IDI1LjctMjEuN0wxOTUgMTUwLjMgMjU5LjQgMThjNS40LTExIDE2LjUtMTggMjguOC0xOHMyMy40IDcgMjguOCAxOGw2NC4zIDEzMi4zIDE0My42IDIxLjJjMTIgMS44IDIyIDEwLjIgMjUuNyAyMS43cy43IDI0LjItNy45IDMyLjdMNDM4LjUgMzI5bDI0LjYgMTQ1Ljd6IgogICAgIGlkPSJwYXRoMiIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L3N2Zz4K", appStore = "data:image/svg+xml;base64,PHN2ZyBpZD0ibGl2ZXR5cGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjExOS42NjQwNyIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDExOS42NjQwNyA0MCI+CiAgPHRpdGxlPkRvd25sb2FkX29uX3RoZV9BcHBfU3RvcmVfQmFkZ2VfVVMtVUtfUkdCX3dodF8wOTI5MTc8L3RpdGxlPgogIDxnPgogICAgPGc+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTAuMTM0NzcsMEg5LjUzNDY4Yy0uMzY2NywwLS43MjksMC0xLjA5NDczLjAwMi0uMzA2MTUuMDAyLS42MDk4Ni4wMDc4MS0uOTE4OTUuMDEyN0ExMy4yMTQ3NiwxMy4yMTQ3NiwwLDAsMCw1LjUxNzEuMTkxNDFhNi42NjUwOSw2LjY2NTA5LDAsMCwwLTEuOTAwODguNjI3QTYuNDM3NzksNi40Mzc3OSwwLDAsMCwxLjk5NzU3LDEuOTk3MDcsNi4yNTg0NCw2LjI1ODQ0LDAsMCwwLC44MTkzNSwzLjYxODE2YTYuNjAxMTksNi42MDExOSwwLDAsMC0uNjI1LDEuOTAzMzIsMTIuOTkzLDEyLjk5MywwLDAsMC0uMTc5MiwyLjAwMkMuMDA1ODcsNy44MzAwOC4wMDQ4OSw4LjEzNzcsMCw4LjQ0NDM0VjMxLjU1ODZjLjAwNDg5LjMxMDUuMDA1ODcuNjExMy4wMTUxNS45MjE5YTEyLjk5MjMyLDEyLjk5MjMyLDAsMCwwLC4xNzkyLDIuMDAxOSw2LjU4NzU2LDYuNTg3NTYsMCwwLDAsLjYyNSwxLjkwNDNBNi4yMDc3OCw2LjIwNzc4LDAsMCwwLDEuOTk3NTcsMzguMDAxYTYuMjc0NDUsNi4yNzQ0NSwwLDAsMCwxLjYxODY1LDEuMTc4Nyw2LjcwMDgyLDYuNzAwODIsMCwwLDAsMS45MDA4OC42MzA4LDEzLjQ1NTE0LDEzLjQ1NTE0LDAsMCwwLDIuMDAzOS4xNzY4Yy4zMDkwOS4wMDY4LjYxMjguMDEwNy45MTg5NS4wMTA3QzguODA1NjcsNDAsOS4xNjgsNDAsOS41MzQ2OCw0MEgxMTAuMTM0NzdjLjM1OTQsMCwuNzI0NiwwLDEuMDg0LS4wMDIuMzA0NywwLC42MTcyLS4wMDM5LjkyMTktLjAxMDdhMTMuMjc5LDEzLjI3OSwwLDAsMCwyLS4xNzY4LDYuODA0MzIsNi44MDQzMiwwLDAsMCwxLjkwODItLjYzMDgsNi4yNzc0Miw2LjI3NzQyLDAsMCwwLDEuNjE3Mi0xLjE3ODcsNi4zOTQ4Miw2LjM5NDgyLDAsMCwwLDEuMTgxNi0xLjYxNDMsNi42MDQxMyw2LjYwNDEzLDAsMCwwLC42MTkxLTEuOTA0MywxMy41MDY0MywxMy41MDY0MywwLDAsMCwuMTg1Ni0yLjAwMTljLjAwMzktLjMxMDYuMDAzOS0uNjExNC4wMDM5LS45MjE5LjAwNzgtLjM2MzMuMDA3OC0uNzI0Ni4wMDc4LTEuMDkzOFY5LjUzNjEzYzAtLjM2NjIxLDAtLjcyOTQ5LS4wMDc4LTEuMDkxNzksMC0uMzA2NjQsMC0uNjE0MjYtLjAwMzktLjkyMDlhMTMuNTA3MSwxMy41MDcxLDAsMCwwLS4xODU2LTIuMDAyLDYuNjE3Nyw2LjYxNzcsMCwwLDAtLjYxOTEtMS45MDMzMiw2LjQ2NjE5LDYuNDY2MTksMCwwLDAtMi43OTg4LTIuNzk5OCw2Ljc2NzU0LDYuNzY3NTQsMCwwLDAtMS45MDgyLS42MjcsMTMuMDQzOTQsMTMuMDQzOTQsMCwwLDAtMi0uMTc2NzZjLS4zMDQ3LS4wMDQ4OC0uNjE3Mi0uMDEwNzQtLjkyMTktLjAxMjY5LS4zNTk0LS4wMDItLjcyNDYtLjAwMi0xLjA4NC0uMDAyWiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjQ0NDgzLDM5LjEyNWMtLjMwNDY4LDAtLjYwMi0uMDAzOS0uOTA0MjktLjAxMDdhMTIuNjg3MTQsMTIuNjg3MTQsMCwwLDEtMS44NjkxNC0uMTYzMSw1Ljg4MzgxLDUuODgzODEsMCwwLDEtMS42NTY3NC0uNTQ3OSw1LjQwNTczLDUuNDA1NzMsMCwwLDEtMS4zOTctMS4wMTY2LDUuMzIwODIsNS4zMjA4MiwwLDAsMS0xLjAyMDUxLTEuMzk2NSw1LjcyMTg2LDUuNzIxODYsMCwwLDEtLjU0My0xLjY1NzIsMTIuNDEzNTEsMTIuNDEzNTEsMCwwLDEtLjE2NjUtMS44NzVjLS4wMDYzNC0uMjEwOS0uMDE0NjQtLjkxMzEtLjAxNDY0LS45MTMxVjguNDQ0MzRTLjg4MTg1LDcuNzUyOTMuODg3Nyw3LjU0OThhMTIuMzcwMzksMTIuMzcwMzksMCwwLDEsLjE2NTUzLTEuODcyMDcsNS43NTU1LDUuNzU1NSwwLDAsMSwuNTQzNDYtMS42NjIxQTUuMzczNDksNS4zNzM0OSwwLDAsMSwyLjYxMTgzLDIuNjE3NjgsNS41NjU0Myw1LjU2NTQzLDAsMCwxLDQuMDE0MTcsMS41OTUyMWE1LjgyMzA5LDUuODIzMDksMCwwLDEsMS42NTMzMi0uNTQzOTRBMTIuNTg1ODksMTIuNTg1ODksMCwwLDEsNy41NDMuODg3MjFMOC40NDUzMi44NzVIMTExLjIxMzg3bC45MTMxLjAxMjdhMTIuMzg0OTMsMTIuMzg0OTMsMCwwLDEsMS44NTg0LjE2MjU5LDUuOTM4MzMsNS45MzgzMywwLDAsMSwxLjY3MDkuNTQ3ODUsNS41OTM3NCw1LjU5Mzc0LDAsMCwxLDIuNDE1LDIuNDE5OTMsNS43NjI2Nyw1Ljc2MjY3LDAsMCwxLC41MzUyLDEuNjQ4OTIsMTIuOTk1LDEyLjk5NSwwLDAsMSwuMTczOCwxLjg4NzIxYy4wMDI5LjI4MzIuMDAyOS41ODc0LjAwMjkuODkwMTQuMDA3OS4zNzUuMDA3OS43MzE5My4wMDc5LDEuMDkxNzlWMzAuNDY0OGMwLC4zNjMzLDAsLjcxNzgtLjAwNzksMS4wNzUyLDAsLjMyNTIsMCwuNjIzMS0uMDAzOS45Mjk3YTEyLjczMTI2LDEyLjczMTI2LDAsMCwxLS4xNzA5LDEuODUzNSw1LjczOSw1LjczOSwwLDAsMS0uNTQsMS42Nyw1LjQ4MDI5LDUuNDgwMjksMCwwLDEtMS4wMTU2LDEuMzg1Nyw1LjQxMjksNS40MTI5LDAsMCwxLTEuMzk5NCwxLjAyMjUsNS44NjE2OCw1Ljg2MTY4LDAsMCwxLTEuNjY4LjU0OTgsMTIuNTQyMTgsMTIuNTQyMTgsMCwwLDEtMS44NjkyLjE2MzFjLS4yOTI5LjAwNjgtLjU5OTYuMDEwNy0uODk3NC4wMTA3bC0xLjA4NC4wMDJaIiBzdHlsZT0iZmlsbDogI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJfR3JvdXBfIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPgogICAgICAgIDxnIGlkPSJfR3JvdXBfMiIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij4KICAgICAgICAgIDxnIGlkPSJfR3JvdXBfMyIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij4KICAgICAgICAgICAgPHBhdGggaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik0yNC45OTY3MSwxOS44ODkzNWE1LjE0NjI1LDUuMTQ2MjUsMCwwLDEsMi40NTA1OC00LjMxNzcxLDUuMjY3NzYsNS4yNjc3NiwwLDAsMC00LjE1MDM5LTIuMjQzNzZjLTEuNzQ2MjQtLjE4MzMtMy40MzkxMywxLjA0NDkyLTQuMzI5LDEuMDQ0OTItLjkwNzA3LDAtMi4yNzcxMy0xLjAyNjcyLTMuNzUyNDctLjk5NjM3YTUuNTI3MzUsNS41MjczNSwwLDAsMC00LjY1MTM3LDIuODM2N2MtMi4wMTExMSwzLjQ4Mi0uNTExLDguNTk5MzksMS40MTU1MSwxMS40MTQuOTYzODgsMS4zNzgyMywyLjA5MDM3LDIuOTE3NzQsMy41NjQzOCwyLjg2MzE1LDEuNDQyNC0uMDU5ODMsMS45ODExMS0uOTE5NzcsMy43MjIyLS45MTk3NywxLjcyNDk0LDAsMi4yMzAzNS45MTk3NywzLjczNDI3Ljg4NTA2LDEuNTQ3NzctLjAyNTEyLDIuNTIyOTItMS4zODQzNSwzLjQ1My0yLjc3NTYzYTExLjM5OTMxLDExLjM5OTMxLDAsMCwwLDEuNTc5LTMuMjE1ODlBNC45NzI4NCw0Ljk3Mjg0LDAsMCwxLDI0Ljk5NjcxLDE5Ljg4OTM1WiIvPgogICAgICAgICAgICA8cGF0aCBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik0yMi4xNTYxMSwxMS40NzY4MWE1LjA2Njg3LDUuMDY2ODcsMCwwLDAsMS4xNTktMy42Mjk4OSw1LjE1NTI0LDUuMTU1MjQsMCwwLDAtMy4zMzU1NSwxLjcyNTgyLDQuODIxMzEsNC44MjEzMSwwLDAsMC0xLjE4OTM0LDMuNDk1NUE0LjI2MjU5LDQuMjYyNTksMCwwLDAsMjIuMTU2MTEsMTEuNDc2ODFaIi8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgPHBhdGggZD0iTTQyLjMwMTc4LDI3LjEzOTY1aC00LjczMzRsLTEuMTM2NzIsMy4zNTY0NUgzNC40MjY3OGw0LjQ4MzQtMTIuNDE4aDIuMDgzbDQuNDgzNCwxMi40MThINDMuNDM3NTJabS00LjI0MzE2LTEuNTQ4ODNoMy43NTJMMzkuOTYxLDIwLjE0MzU1SDM5LjkwOTJaIi8+CiAgICAgICAgICA8cGF0aCBkPSJNNTUuMTU5MiwyNS45Njk3M2MwLDIuODEzNDgtMS41MDU4Niw0LjYyMTA5LTMuNzc4MzIsNC42MjEwOWEzLjA2OTMsMy4wNjkzLDAsMCwxLTIuODQ4NjMtMS41ODRoLS4wNDN2NC40ODQzOGgtMS44NTg0VjIxLjQ0MjM4aDEuNzk4ODN2MS41MDU4NmguMDM0MThhMy4yMTE2MiwzLjIxMTYyLDAsMCwxLDIuODgyODEtMS42MDA1OUM1My42NDQ1NSwyMS4zNDc2Niw1NS4xNTkyLDIzLjE2NDA2LDU1LjE1OTIsMjUuOTY5NzNabS0xLjkxMDE2LDBjMC0xLjgzMy0uOTQ3MjctMy4wMzgwOS0yLjM5MjU4LTMuMDM4MDktMS40MTk5MiwwLTIuMzc1LDEuMjMwNDctMi4zNzUsMy4wMzgwOSwwLDEuODI0MjIuOTU1MDgsMy4wNDU5LDIuMzc1LDMuMDQ1OUM1Mi4zMDE3OCwyOS4wMTU2Myw1My4yNDksMjcuODE5MzQsNTMuMjQ5LDI1Ljk2OTczWiIvPgogICAgICAgICAgPHBhdGggZD0iTTY1LjEyNDUzLDI1Ljk2OTczYzAsMi44MTM0OC0xLjUwNjM1LDQuNjIxMDktMy43Nzg4MSw0LjYyMTA5YTMuMDY5MywzLjA2OTMsMCwwLDEtMi44NDg2My0xLjU4NGgtLjA0M3Y0LjQ4NDM4aC0xLjg1ODRWMjEuNDQyMzhoMS43OTg4M3YxLjUwNTg2aC4wMzQxOGEzLjIxMTYyLDMuMjExNjIsMCwwLDEsMi44ODI4MS0xLjYwMDU5QzYzLjYwOTQsMjEuMzQ3NjYsNjUuMTI0NTMsMjMuMTY0MDYsNjUuMTI0NTMsMjUuOTY5NzNabS0xLjkxMDY0LDBjMC0xLjgzMy0uOTQ3MjctMy4wMzgwOS0yLjM5MjU4LTMuMDM4MDktMS40MTk5MiwwLTIuMzc1LDEuMjMwNDctMi4zNzUsMy4wMzgwOSwwLDEuODI0MjIuOTU1MDgsMy4wNDU5LDIuMzc1LDMuMDQ1OUM2Mi4yNjY2MiwyOS4wMTU2Myw2My4yMTM4OSwyNy44MTkzNCw2My4yMTM4OSwyNS45Njk3M1oiLz4KICAgICAgICAgIDxwYXRoIGQ9Ik03MS43MDk0OSwyNy4wMzYxM2MuMTM3NywxLjIzMTQ1LDEuMzM0LDIuMDQsMi45Njg3NSwyLjA0LDEuNTY2NDEsMCwyLjY5MzM2LS44MDg1OSwyLjY5MzM2LTEuOTE4OTUsMC0uOTYzODctLjY3OTY5LTEuNTQxLTIuMjg5MDYtMS45MzY1MmwtMS42MDkzNy0uMzg3N2MtMi4yODAyNy0uNTUwNzgtMy4zMzg4Ny0xLjYxNzE5LTMuMzM4ODctMy4zNDc2NiwwLTIuMTQyNTgsMS44NjcxOS0zLjYxNDI2LDQuNTE3NTgtMy42MTQyNiwyLjYyNSwwLDQuNDIzODMsMS40NzE2OCw0LjQ4NDM4LDMuNjE0MjZoLTEuODc2Yy0uMTEyMy0xLjIzOTI2LTEuMTM2NzItMS45ODczLTIuNjMzNzktMS45ODczcy0yLjUyMTQ4Ljc1Njg0LTIuNTIxNDgsMS44NTg0YzAsLjg3NzkzLjY1NDMsMS4zOTQ1MywyLjI1NDg4LDEuNzlsMS4zNjgxNi4zMzU5NGMyLjU0Nzg1LjYwMjU0LDMuNjA1NDcsMS42MjYsMy42MDU0NywzLjQ0MjM4LDAsMi4zMjMyNC0xLjg0OTYxLDMuNzc4MzItNC43OTMsMy43NzgzMi0yLjc1MzkxLDAtNC42MTMyOC0xLjQyMDktNC43MzM0LTMuNjY3WiIvPgogICAgICAgICAgPHBhdGggZD0iTTgzLjM0NjIxLDE5LjI5OTh2Mi4xNDI1OGgxLjcyMTY4djEuNDcxNjhIODMuMzQ2MjF2NC45OTEyMWMwLC43NzUzOS4zNDQ3MywxLjEzNjcyLDEuMTAxNTYsMS4xMzY3MmE1LjgwNzUyLDUuODA3NTIsMCwwLDAsLjYxMTMzLS4wNDN2MS40NjI4OWE1LjEwMzUxLDUuMTAzNTEsMCwwLDEtMS4wMzIyMy4wODU5NGMtMS44MzMsMC0yLjU0Nzg1LS42ODg0OC0yLjU0Nzg1LTIuNDQ0MzRWMjIuOTE0MDZIODAuMTYyNjJWMjEuNDQyMzhIODEuNDc5VjE5LjI5OThaIi8+CiAgICAgICAgICA8cGF0aCBkPSJNODYuMDY0LDI1Ljk2OTczYzAtMi44NDg2MywxLjY3NzczLTQuNjM4NjcsNC4yOTM5NS00LjYzODY3LDIuNjI1LDAsNC4yOTQ5MiwxLjc5LDQuMjk0OTIsNC42Mzg2NywwLDIuODU2NDUtMS42NjExMyw0LjYzODY3LTQuMjk0OTIsNC42Mzg2N0M4Ny43MjUxMiwzMC42MDg0LDg2LjA2NCwyOC44MjYxNyw4Ni4wNjQsMjUuOTY5NzNabTYuNjk1MzEsMGMwLTEuOTU0MS0uODk1NTEtMy4xMDc0Mi0yLjQwMTM3LTMuMTA3NDJzLTIuNDAxMzcsMS4xNjIxMS0yLjQwMTM3LDMuMTA3NDJjMCwxLjk2MTkxLjg5NTUxLDMuMTA2NDUsMi40MDEzNywzLjEwNjQ1UzkyLjc1OTMsMjcuOTMxNjQsOTIuNzU5MywyNS45Njk3M1oiLz4KICAgICAgICAgIDxwYXRoIGQ9Ik05Ni4xODUwOCwyMS40NDIzOGgxLjc3MjQ2djEuNTQxaC4wNDNhMi4xNTk0LDIuMTU5NCwwLDAsMSwyLjE3NzczLTEuNjM1NzQsMi44NjYxNiwyLjg2NjE2LDAsMCwxLC42MzY3Mi4wNjkzNHYxLjczODI4YTIuNTk3OTQsMi41OTc5NCwwLDAsMC0uODM1LS4xMTIzLDEuODcyNjQsMS44NzI2NCwwLDAsMC0xLjkzNjUyLDIuMDgzdjUuMzcwMTJoLTEuODU4NFoiLz4KICAgICAgICAgIDxwYXRoIGQ9Ik0xMDkuMzgzMzIsMjcuODM2OTFjLS4yNSwxLjY0MzU1LTEuODUwNTksMi43NzE0OC0zLjg5ODQ0LDIuNzcxNDgtMi42MzM3OSwwLTQuMjY4NTUtMS43NjQ2NS00LjI2ODU1LTQuNTk1NywwLTIuODM5ODQsMS42NDM1NS00LjY4MTY0LDQuMTkwNDMtNC42ODE2NCwyLjUwNDg4LDAsNC4wODAwOCwxLjcyMDcsNC4wODAwOCw0LjQ2NTgydi42MzY3MmgtNi4zOTQ1M3YuMTEyM2EyLjM1OCwyLjM1OCwwLDAsMCwyLjQzNTU1LDIuNTY0NDUsMi4wNDgzNCwyLjA0ODM0LDAsMCwwLDIuMDkwODItMS4yNzM0NFptLTYuMjgyMjMtMi43MDIxNWg0LjUyNjM3YTIuMTc3MywyLjE3NzMsMCwwLDAtMi4yMjA3LTIuMjk3ODVBMi4yOTIsMi4yOTIsMCwwLDAsMTAzLjEwMTA5LDI1LjEzNDc3WiIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9Il9Hcm91cF80IiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMzcuODI2MTksOC43MzFhMi42Mzk2NCwyLjYzOTY0LDAsMCwxLDIuODA3NjIsMi45NjQ4NGMwLDEuOTA2MjUtMS4wMzAyNywzLjAwMi0yLjgwNzYyLDMuMDAySDM1LjY3MDkyVjguNzMxWm0tMS4yMjg1Miw1LjEyM2gxLjEyNWExLjg3NTg4LDEuODc1ODgsMCwwLDAsMS45Njc3Ny0yLjE0NiwxLjg4MSwxLjg4MSwwLDAsMC0xLjk2Nzc3LTIuMTMzNzloLTEuMTI1WiIvPgogICAgICAgIDxwYXRoIGQ9Ik00MS42ODA2OCwxMi40NDQzNGEyLjEzMzIzLDIuMTMzMjMsMCwxLDEsNC4yNDcwNywwLDIuMTMzNTgsMi4xMzM1OCwwLDEsMS00LjI0NzA3LDBabTMuMzMzLDBjMC0uOTc2MDctLjQzODQ4LTEuNTQ2ODctMS4yMDgtMS41NDY4Ny0uNzcyNDYsMC0xLjIwNy41NzA4LTEuMjA3LDEuNTQ2ODgsMCwuOTgzODkuNDM0NTcsMS41NTAyOSwxLjIwNywxLjU1MDI5QzQ0LjU3NTIyLDEzLjk5NDYzLDQ1LjAxMzY5LDEzLjQyNDMyLDQ1LjAxMzY5LDEyLjQ0NDM0WiIvPgogICAgICAgIDxwYXRoIGQ9Ik01MS41NzMyNiwxNC42OTc3NWgtLjkyMTg3bC0uOTMwNjYtMy4zMTY0MWgtLjA3MDMxbC0uOTI2NzYsMy4zMTY0MWgtLjkxMzA5bC0xLjI0MTIxLTQuNTAyOTNoLjkwMTM3bC44MDY2NCwzLjQzNmguMDY2NDFsLjkyNTc4LTMuNDM2aC44NTI1NGwuOTI1NzgsMy40MzZoLjA3MDMxbC44MDI3My0zLjQzNmguODg4NjdaIi8+CiAgICAgICAgPHBhdGggZD0iTTUzLjg1MzU0LDEwLjE5NDgySDU0LjcwOXYuNzE1MzNoLjA2NjQxYTEuMzQ4LDEuMzQ4LDAsMCwxLDEuMzQzNzUtLjgwMjI1LDEuNDY0NTYsMS40NjQ1NiwwLDAsMSwxLjU1ODU5LDEuNjc0OHYyLjkxNWgtLjg4ODY3VjEyLjAwNTg2YzAtLjcyMzYzLS4zMTQ0NS0xLjA4MzUtLjk3MTY4LTEuMDgzNWExLjAzMjk0LDEuMDMyOTQsMCwwLDAtMS4wNzUyLDEuMTQxMTF2Mi42MzQyOGgtLjg4ODY3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik01OS4wOTM3Nyw4LjQzN2guODg4Njd2Ni4yNjA3NGgtLjg4ODY3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik02MS4yMTc3OSwxMi40NDQzNGEyLjEzMzQ2LDIuMTMzNDYsMCwxLDEsNC4yNDc1NiwwLDIuMTMzOCwyLjEzMzgsMCwxLDEtNC4yNDc1NiwwWm0zLjMzMywwYzAtLjk3NjA3LS40Mzg0OC0xLjU0Njg3LTEuMjA4LTEuNTQ2ODctLjc3MjQ2LDAtMS4yMDcuNTcwOC0xLjIwNywxLjU0Njg4LDAsLjk4Mzg5LjQzNDU3LDEuNTUwMjksMS4yMDcsMS41NTAyOUM2NC4xMTIzMiwxMy45OTQ2Myw2NC41NTA4LDEzLjQyNDMyLDY0LjU1MDgsMTIuNDQ0MzRaIi8+CiAgICAgICAgPHBhdGggZD0iTTY2LjQwMDksMTMuNDI0MzJjMC0uODEwNTUuNjAzNTItMS4yNzc4MywxLjY3NDgtMS4zNDQyNGwxLjIxOTczLS4wNzAzMXYtLjM4ODY3YzAtLjQ3NTU5LS4zMTQ0NS0uNzQ0MTQtLjkyMTg3LS43NDQxNC0uNDk2MDksMC0uODM5ODQuMTgyMTMtLjkzODQ4LjUwMDQ5aC0uODYwMzVjLjA5MDgyLS43NzM0NC44MTgzNi0xLjI2OTUzLDEuODM5ODQtMS4yNjk1MywxLjEyODkxLDAsMS43NjU2My41NjIsMS43NjU2MywxLjUxMzE4djMuMDc2NjZoLS44NTU0N3YtLjYzMjgxaC0uMDcwMzFhMS41MTUsMS41MTUsMCwwLDEtMS4zNTI1NC43MDdBMS4zNjAyNiwxLjM2MDI2LDAsMCwxLDY2LjQwMDksMTMuNDI0MzJabTIuODk0NTMtLjM4NDc3di0uMzc2NDZsLTEuMDk5NjEuMDcwMzFjLS42MjAxMi4wNDE1LS45MDEzNy4yNTI0NC0uOTAxMzcuNjQ5NDEsMCwuNDA1MjcuMzUxNTYuNjQxMTEuODM1LjY0MTExQTEuMDYxNSwxLjA2MTUsMCwwLDAsNjkuMjk1NDMsMTMuMDM5NTVaIi8+CiAgICAgICAgPHBhdGggZD0iTTcxLjM0ODE2LDEyLjQ0NDM0YzAtMS40MjI4NS43MzE0NS0yLjMyNDIyLDEuODY5MTQtMi4zMjQyMmExLjQ4NCwxLjQ4NCwwLDAsMSwxLjM4MDg2Ljc5aC4wNjY0MVY4LjQzN2guODg4Njd2Ni4yNjA3NGgtLjg1MTU2di0uNzExNDNoLS4wNzAzMWExLjU2Mjg0LDEuNTYyODQsMCwwLDEtMS40MTQwNi43ODU2NEM3Mi4wNzE4LDE0Ljc3Miw3MS4zNDgxNiwxMy44NzA2MSw3MS4zNDgxNiwxMi40NDQzNFptLjkxOCwwYzAsLjk1NTA4LjQ1MDIsMS41Mjk3OSwxLjIwMzEzLDEuNTI5NzkuNzQ5LDAsMS4yMTE5MS0uNTgzLDEuMjExOTEtMS41MjU4OCwwLS45Mzg0OC0uNDY3NzctMS41Mjk3OS0xLjIxMTkxLTEuNTI5NzlDNzIuNzIxMjEsMTAuOTE4NDYsNzIuMjY2MTMsMTEuNDk3MDcsNzIuMjY2MTMsMTIuNDQ0MzRaIi8+CiAgICAgICAgPHBhdGggZD0iTTc5LjIzLDEyLjQ0NDM0YTIuMTMzMjMsMi4xMzMyMywwLDEsMSw0LjI0NzA3LDAsMi4xMzM1OCwyLjEzMzU4LDAsMSwxLTQuMjQ3MDcsMFptMy4zMzMsMGMwLS45NzYwNy0uNDM4NDgtMS41NDY4Ny0xLjIwOC0xLjU0Njg3LS43NzI0NiwwLTEuMjA3LjU3MDgtMS4yMDcsMS41NDY4OCwwLC45ODM4OS40MzQ1NywxLjU1MDI5LDEuMjA3LDEuNTUwMjlDODIuMTI0NTMsMTMuOTk0NjMsODIuNTYzLDEzLjQyNDMyLDgyLjU2MywxMi40NDQzNFoiLz4KICAgICAgICA8cGF0aCBkPSJNODQuNjY5NDUsMTAuMTk0ODJoLjg1NTQ3di43MTUzM2guMDY2NDFhMS4zNDgsMS4zNDgsMCwwLDEsMS4zNDM3NS0uODAyMjUsMS40NjQ1NiwxLjQ2NDU2LDAsMCwxLDEuNTU4NTksMS42NzQ4djIuOTE1SDg3LjYwNVYxMi4wMDU4NmMwLS43MjM2My0uMzE0NDUtMS4wODM1LS45NzE2OC0xLjA4MzVhMS4wMzI5NCwxLjAzMjk0LDAsMCwwLTEuMDc1MiwxLjE0MTExdjIuNjM0MjhoLS44ODg2N1oiLz4KICAgICAgICA8cGF0aCBkPSJNOTMuNTE1MTYsOS4wNzM3M3YxLjE0MTZoLjk3NTU5di43NDg1NGgtLjk3NTU5VjEzLjI3OTNjMCwuNDcxNjguMTk0MzQuNjc4MjIuNjM2NzIuNjc4MjJhMi45NjY1NywyLjk2NjU3LDAsMCwwLC4zMzg4Ny0uMDIwNTF2Ljc0MDIzYTIuOTE1NSwyLjkxNTUsMCwwLDEtLjQ4MzQuMDQ1NDFjLS45ODgyOCwwLTEuMzgxODQtLjM0NzY2LTEuMzgxODQtMS4yMTU4MnYtMi41NDNoLS43MTQ4NHYtLjc0ODU0aC43MTQ4NFY5LjA3MzczWiIvPgogICAgICAgIDxwYXRoIGQ9Ik05NS43MDQ2MSw4LjQzN2guODgwODZ2Mi40ODE0NWguMDcwMzFhMS4zODU2LDEuMzg1NiwwLDAsMSwxLjM3My0uODA2NjQsMS40ODMzOSwxLjQ4MzM5LDAsMCwxLDEuNTUwNzgsMS42Nzg3MXYyLjkwNzIzSDk4LjY5di0yLjY4OGMwLS43MTkyNC0uMzM1LTEuMDgzNS0uOTYyODktMS4wODM1YTEuMDUxOTQsMS4wNTE5NCwwLDAsMC0xLjEzMzc5LDEuMTQxNnYyLjYyOTg4aC0uODg4NjdaIi8+CiAgICAgICAgPHBhdGggZD0iTTEwNC43NjEyNSwxMy40ODE5M2ExLjgyOCwxLjgyOCwwLDAsMS0xLjk1MTE3LDEuMzAyNzNBMi4wNDUzMSwyLjA0NTMxLDAsMCwxLDEwMC43MywxMi40NjA0NWEyLjA3Njg1LDIuMDc2ODUsMCwwLDEsMi4wNzYxNy0yLjM1MjU0YzEuMjUyOTMsMCwyLjAwODc5Ljg1NiwyLjAwODc5LDIuMjdWMTIuNjg4aC0zLjE3OTY5di4wNDk4YTEuMTkwMiwxLjE5MDIsMCwwLDAsMS4xOTkyMiwxLjI5LDEuMDc5MzQsMS4wNzkzNCwwLDAsMCwxLjA3MTI5LS41NDU5Wm0tMy4xMjYtMS40NTExN2gyLjI3NDQxYTEuMDg2NDcsMS4wODY0NywwLDAsMC0xLjEwODQtMS4xNjY1QTEuMTUxNjIsMS4xNTE2MiwwLDAsMCwxMDEuNjM1MjcsMTIuMDMwNzZaIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=", playStore = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnNTEiIHdpZHRoPSIxODAiIGhlaWdodD0iNTMuMzMzIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxODAgNTMuMzMzIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOSI+PHJkZjpSREY+PGNjOldvcmsgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PHBhdGggaWQ9InBhdGgxMSIgZD0ibTE3My4zMyA1My4zMzNoLTE2Ni42NmMtMy42NjY2IDAtNi42NjY1LTIuOTk5OS02LjY2NjUtNi42NjY1di0zOS45OTljMC0zLjY2NjYgMi45OTk5LTYuNjY2NSA2LjY2NjUtNi42NjY1aDE2Ni42NmMzLjY2NjYgMCA2LjY2NjUgMi45OTk5IDYuNjY2NSA2LjY2NjV2MzkuOTk5YzAgMy42NjY2LTIuOTk5OSA2LjY2NjUtNi42NjY1IDYuNjY2NSIgZmlsbD0iIzEwMGYwZCIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDEzIiBkPSJtMTczLjMzIDFlLTNoLTE2Ni42NmMtMy42NjY2IDAtNi42NjY1IDIuOTk5OS02LjY2NjUgNi42NjY1djM5Ljk5OWMwIDMuNjY2NiAyLjk5OTkgNi42NjY1IDYuNjY2NSA2LjY2NjVoMTY2LjY2YzMuNjY2NiAwIDYuNjY2NS0yLjk5OTkgNi42NjY1LTYuNjY2NXYtMzkuOTk5YzAtMy42NjY2LTIuOTk5OS02LjY2NjUtNi42NjY1LTYuNjY2NXptMCAxLjA2NjFjMy4wODc5IDAgNS41OTk5IDIuNTEyNSA1LjU5OTkgNS42MDA0djM5Ljk5OWMwIDMuMDg3OS0yLjUxMTkgNS42MDA0LTUuNTk5OSA1LjYwMDRoLTE2Ni42NmMtMy4wODc5IDAtNS41OTkzLTIuNTEyNS01LjU5OTMtNS42MDA0di0zOS45OTljMC0zLjA4NzkgMi41MTE0LTUuNjAwNCA1LjU5OTMtNS42MDA0aDE2Ni42NiIgZmlsbD0iI2EyYTJhMSIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDM1IiBkPSJtMTQyLjU4IDQwaDIuNDg3OXYtMTYuNjY5aC0yLjQ4Nzl6bTIyLjQwOS0xMC42NjQtMi44NTE5IDcuMjI2NGgtMC4wODUzbC0yLjk1OTktNy4yMjY0aC0yLjY3OTlsNC40Mzk5IDEwLjEtMi41MzE5IDUuNjE4NWgyLjU5NDZsNi44NDEyLTE1LjcxOHptLTE0LjExIDguNzcwNmMtMC44MTMzMSAwLTEuOTUwNi0wLjQwNzg2LTEuOTUwNi0xLjQxNTYgMC0xLjI4NjUgMS40MTYtMS43Nzk3IDIuNjM3My0xLjc3OTcgMS4wOTMzIDAgMS42MDkzIDAuMjM1NDYgMi4yNzMzIDAuNTU3MzItMC4xOTMzMyAxLjU0NDItMS41MjI2IDIuNjM3OS0yLjk1OTkgMi42Mzc5em0wLjMwMTMzLTkuMTM1MmMtMS44MDEzIDAtMy42NjY2IDAuNzkzNzEtNC40Mzg2IDIuNTUyMWwyLjIwOCAwLjkyMTg0YzAuNDcxOTgtMC45MjE4NCAxLjM1MDYtMS4yMjE4IDIuMjczMy0xLjIyMTggMS4yODY2IDAgMi41OTQ2IDAuNzcxMzEgMi42MTU5IDIuMTQ0MnYwLjE3MTMzYy0wLjQ1MDY2LTAuMjU3MzMtMS40MTYtMC42NDMxOC0yLjU5NDYtMC42NDMxOC0yLjM4MTMgMC00LjgwMzkgMS4zMDc3LTQuODAzOSAzLjc1MjQgMCAyLjIzMDIgMS45NTIgMy42NjcxIDQuMTM4NiAzLjY2NzEgMS42NzIgMCAyLjU5NTktMC43NTA1NCAzLjE3MzItMS42MzAxaDAuMDg2N3YxLjI4NzRoMi40MDI2di02LjM5MWMwLTIuOTU5My0yLjIxMDYtNC42MTAzLTUuMDYxMi00LjYxMDN6bS0xNS4zNzYgMi4zOTM3aC0zLjUzODZ2LTUuNzEzM2gzLjUzODZjMS44NiAwIDIuOTE1OSAxLjUzOTYgMi45MTU5IDIuODU2NiAwIDEuMjkxNy0xLjA1NiAyLjg1NjctMi45MTU5IDIuODU2N3ptLTAuMDY0LTguMDMzN2gtNS45NjE0djE2LjY2OWgyLjQ4Njl2LTYuMzE0OWgzLjQ3NDZjMi43NTczIDAgNS40Njc5LTEuOTk1OCA1LjQ2NzktNS4xNzY1IDAtMy4xODAxLTIuNzEwNi01LjE3NjktNS40Njc5LTUuMTc2OXptLTMyLjUwNyAxNC43NzhjLTEuNzE4OCAwLTMuMTU3My0xLjQzOTYtMy4xNTczLTMuNDE1IDAtMS45OTg0IDEuNDM4NS0zLjQ1ODMgMy4xNTczLTMuNDU4MyAxLjY5NjkgMCAzLjAyODYgMS40NiAzLjAyODYgMy40NTgzIDAgMS45NzU0LTEuMzMxNyAzLjQxNS0zLjAyODYgMy40MTV6bTIuODU2Ny03Ljg0MDNoLTAuMDg2Yy0wLjU1ODI2LTAuNjY1NzItMS42MzI4LTEuMjY3Mi0yLjk4NTMtMS4yNjcyLTIuODM1OSAwLTUuNDM0OCAyLjQ5MjEtNS40MzQ4IDUuNjkyNSAwIDMuMTc4NiAyLjU5ODkgNS42NDg4IDUuNDM0OCA1LjY0ODggMS4zNTI1IDAgMi40MjctMC42MDE2IDIuOTg1My0xLjI4ODVoMC4wODZ2MC44MTU1OGMwIDIuMTcwMy0xLjE1OTggMy4zMjk2LTMuMDI4NiAzLjMyOTYtMS41MjQ1IDAtMi40Njk3LTEuMDk1My0yLjg1NjctMi4wMTg4bC0yLjE2OTEgMC45MDIwNmMwLjYyMjM4IDEuNTAzIDIuMjc1OSAzLjM1MSA1LjAyNTkgMy4zNTEgMi45MjE4IDAgNS4zOTItMS43MTg4IDUuMzkyLTUuOTA3N3YtMTAuMTgxaC0yLjM2MzR6bTQuMDgyMiA5LjczMDRoMi40OTA2di0xNi42NjloLTIuNDkwNnptNi4xNjQtNS40OTg4Yy0wLjA2NDEtMi4xOTExIDEuNjk3OC0zLjMwNzggMi45NjQ1LTMuMzA3OCAwLjk4ODUxIDAgMS44MjU0IDAuNDk0MjUgMi4xMDU3IDEuMjAyNnptNy43MzI2LTEuODkwNmMtMC40NzIzOC0xLjI2NjYtMS45MTE0LTMuNjA4Mi00Ljg1NDEtMy42MDgyLTIuOTIxOCAwLTUuMzQ4OCAyLjI5ODMtNS4zNDg4IDUuNjcwNyAwIDMuMTc5MSAyLjQwNjIgNS42NzA3IDUuNjI3NSA1LjY3MDcgMi41OTg5IDAgNC4xMDMxLTEuNTg5IDQuNzI2NC0yLjUxM2wtMS45MzMzLTEuMjg5Yy0wLjY0NDY1IDAuOTQ1MzEtMS41MjQ5IDEuNTY4Mi0yLjc5MzEgMS41NjgyLTEuMjY2NiAwLTIuMTY5Mi0wLjU4MDEyLTIuNzQ4My0xLjcxODZsNy41ODE1LTMuMTM1OXptLTYwLjQwOS0xLjg2ODJ2Mi40MDU3aDUuNzU2NWMtMC4xNzE4NiAxLjM1MzItMC42MjI5MiAyLjM0MTEtMS4zMTA0IDMuMDI4Ni0wLjgzNzk4IDAuODM3NDUtMi4xNDgzIDEuNzYxNC00LjQ0NjIgMS43NjE0LTMuNTQ0MyAwLTYuMzE1LTIuODU2Ny02LjMxNS02LjQwMDlzMi43NzA3LTYuNDAxMyA2LjMxNS02LjQwMTNjMS45MTE4IDAgMy4zMDc3IDAuNzUxOTggNC4zMzg4IDEuNzE4NmwxLjY5NzQtMS42OTczYy0xLjQzOTYtMS4zNzQ1LTMuMzUxLTIuNDI3LTYuMDM2Mi0yLjQyNy00Ljg1NTIgMC04LjkzNjMgMy45NTI0LTguOTM2MyA4LjgwNyAwIDQuODU0MSA0LjA4MTEgOC44MDY2IDguOTM2MyA4LjgwNjYgMi42MjAyIDAgNC41OTY3LTAuODU5MzIgNi4xNDMtMi40NzAyIDEuNTg5Ni0xLjU4OTYgMi4wODM4LTMuODIzNCAyLjA4MzgtNS42MjggMC0wLjU1Nzg1LTAuMDQzMzMtMS4wNzM0LTAuMTI5Mi0xLjUwMzJ6bTE0Ljc3MiA3LjM2NzVjLTEuNzE4OCAwLTMuMjAxLTEuNDE3Ny0zLjIwMS0zLjQzNjggMC0yLjA0MDYgMS40ODIyLTMuNDM2NCAzLjIwMS0zLjQzNjQgMS43MTgxIDAgMy4yMDAzIDEuMzk1OCAzLjIwMDMgMy40MzY0IDAgMi4wMTkxLTEuNDgyMiAzLjQzNjgtMy4yMDAzIDMuNDM2OHptMC05LjEwNzVjLTMuMTM3IDAtNS42OTI3IDIuMzg0Mi01LjY5MjcgNS42NzA3IDAgMy4yNjUgMi41NTU3IDUuNjcwNyA1LjY5MjcgNS42NzA3IDMuMTM1OCAwIDUuNjkyLTIuNDA1NyA1LjY5Mi01LjY3MDcgMC0zLjI4NjUtMi41NTYyLTUuNjcwNy01LjY5Mi01LjY3MDd6bTEyLjQxNyA5LjEwNzVjLTEuNzE3NiAwLTMuMjAwMy0xLjQxNzctMy4yMDAzLTMuNDM2OCAwLTIuMDQwNiAxLjQ4MjgtMy40MzY0IDMuMjAwMy0zLjQzNjQgMS43MTg4IDAgMy4yMDA1IDEuMzk1OCAzLjIwMDUgMy40MzY0IDAgMi4wMTkxLTEuNDgxNyAzLjQzNjgtMy4yMDA1IDMuNDM2OHptMC05LjEwNzVjLTMuMTM1OCAwLTUuNjkxNSAyLjM4NDItNS42OTE1IDUuNjcwNyAwIDMuMjY1IDIuNTU1NyA1LjY3MDcgNS42OTE1IDUuNjcwNyAzLjEzNyAwIDUuNjkyNy0yLjQwNTcgNS42OTI3LTUuNjcwNyAwLTMuMjg2NS0yLjU1NTctNS42NzA3LTUuNjkyNy01LjY3MDciIGZpbGw9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjEzMzMzIi8+PHBhdGggaWQ9InBhdGgzNyIgZD0ibTI3LjYyMiAyNS44OTktMTQuMTk0IDE1LjA2NmM1LjM0ZS00IDAuMDAzMSAwLjAwMTYgMC4wMDU3IDAuMDAyMSAwLjAwODkgMC40MzUzMiAxLjYzNiAxLjkyOTYgMi44NDA2IDMuNzAzIDIuODQwNiAwLjcwODkyIDAgMS4zNzQ1LTAuMTkxNjYgMS45NDUzLTAuNTI4MTJsMC4wNDUzMy0wLjAyNjU2IDE1Ljk3OC05LjIyLTcuNDc5LTguMTQxIiBmaWxsPSIjZWIzMTMxIiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoMzkiIGQ9Im00MS45ODMgMjMuMzM0LTAuMDEzNi0wLjAwOTMtNi44OTgyLTMuOTk5LTcuNzcxNyA2LjkxNTYgNy43OTg3IDcuNzk3NyA2Ljg2MTgtMy45NTkyYzEuMjAzLTAuNjQ5NDUgMi4wMTk3LTEuOTE3NyAyLjAxOTctMy4zODAyIDAtMS40NTItMC44MDU3MS0yLjcxMzktMS45OTY4LTMuMzY1NSIgZmlsbD0iI2Y2YjYwYiIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDQxIiBkPSJtMTMuNDI2IDEyLjM3Yy0wLjA4NTMzIDAuMzE0NjYtMC4xMzAxOCAwLjY0NDI1LTAuMTMwMTggMC45ODY1MXYyNi42MjNjMCAwLjM0MTYyIDAuMDQ0MzIgMC42NzIzMyAwLjEzMDcyIDAuOTg1ODdsMTQuNjg0LTE0LjY4MS0xNC42ODQtMTMuOTE0IiBmaWxsPSIjNTc3OGM1IiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoNDMiIGQ9Im0yNy43MjcgMjYuNjY4IDcuMzQ3My03LjM0NTEtMTUuOTYtOS4yNTM0Yy0wLjU4MDEyLTAuMzQ3NDYtMS4yNTcyLTAuNTQ3OTktMS45ODE3LTAuNTQ3OTktMS43NzM0IDAtMy4yNjk3IDEuMjA2OC0zLjcwNTEgMi44NDQ3LTUuMzRlLTQgMC4wMDE2LTUuMzRlLTQgMC4wMDI3LTUuMzRlLTQgMC4wMDQxbDE0LjMgMTQuMjk4IiBmaWxsPSIjM2JhZDQ5IiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoMzMiIGQ9Im02My4xOTMgMTMuMDQyaC0zLjg4OTV2MC45NjI1MWgyLjkxNDZjLTAuMDc5MiAwLjc4NTQ1LTAuMzkxNzIgMS40MDIxLTAuOTE4NzggMS44NS0wLjUyNzA1IDAuNDQ3OTktMS4yIDAuNjcyOTItMS45OTU4IDAuNjcyOTItMC44NzI5MSAwLTEuNjEyNS0wLjMwNDEzLTIuMjE4Ni0wLjkwODI0LTAuNTkzODUtMC42MTY2NS0wLjg5NTg0LTEuMzc5Mi0wLjg5NTg0LTIuMjk3OSAwLTAuOTE4NjQgMC4zMDE5OS0xLjY4MTIgMC44OTU4NC0yLjI5NzggMC42MDYxMi0wLjYwNDEyIDEuMzQ1Ny0wLjkwNjI0IDIuMjE4Ni0wLjkwNjI0IDAuNDQ3OTkgMCAwLjg3NTA0IDAuMDc3MDcgMS4yNjY2IDAuMjQ1ODYgMC4zOTE3MiAwLjE2ODY2IDAuNzA2MjUgMC40MDQxMiAwLjk1MjExIDAuNzA2MjVsMC43Mzk1OC0wLjczOTU4Yy0wLjMzNTQ2LTAuMzgxMzItMC43NjAzOC0wLjY3MjkyLTEuMjg3Ni0wLjg4NTQ0LTAuNTI3MDUtMC4yMTI1My0xLjA3Ny0wLjMxNDUzLTEuNjcwOC0wLjMxNDUzLTEuMTY0NSAwLTIuMTUxOSAwLjQwNDEyLTIuOTU4MiAxLjIxMDQtMC44MDYyNSAwLjgwODI1LTEuMjEwNCAxLjgwNDEtMS4yMTA0IDIuOTgxMSAwIDEuMTc3IDAuNDA0MTIgMi4xNzUgMS4yMTA0IDIuOTgxMyAwLjgwNjI1IDAuODA2MTEgMS43OTM3IDEuMjEwNCAyLjk1ODIgMS4yMTA0IDEuMjIyOSAwIDIuMTk3OS0wLjM5MTcyIDIuOTQ3OS0xLjE4NzYgMC42NjAzOC0wLjY2MjM4IDAuOTk3ODQtMS41NTgyIDAuOTk3ODQtMi42NzkgMC0wLjE4OTYtMC4wMjI5My0wLjM5MTcyLTAuMDU2MjctMC42MDQyNXptMS41MDY4LTMuNzMzMnY4LjAyNDloNC42ODUydi0wLjk4NTQ0aC0zLjY1NHYtMi41NDU3aDMuMjk1OHYtMC45NjI1MWgtMy4yOTU4di0yLjU0MzdoMy42NTR2LTAuOTg3NTh6bTExLjI1NSAwLjk4NzU4di0wLjk4NzU4aC01LjUxNDV2MC45ODc1OGgyLjI0MTd2Ny4wMzczaDEuMDMxMnYtNy4wMzczem00Ljk5MjUtMC45ODc1OGgtMS4wMzEydjguMDI0OWgxLjAzMTJ6bTYuODA2NiAwLjk4NzU4di0wLjk4NzU4aC01LjUxNDR2MC45ODc1OGgyLjI0MTV2Ny4wMzczaDEuMDMxMnYtNy4wMzczem0xMC40MDYgMC4wNTYyNmMtMC43OTU4NS0wLjgxODc3LTEuNzcwOC0xLjIyMjktMi45MzU0LTEuMjIyOS0xLjE2NjYgMC0yLjE0MTUgMC40MDQxMi0yLjkzNzQgMS4yMTA0LTAuNzk1ODUgMC43OTU4NS0xLjE4NzQgMS43OTM3LTEuMTg3NCAyLjk4MTFzMC4zOTE1OSAyLjE4NTQgMS4xODc0IDIuOTgxM2MwLjc5NTg1IDAuODA2MTEgMS43NzA4IDEuMjEwNCAyLjkzNzQgMS4yMTA0IDEuMTU0MSAwIDIuMTM5NS0wLjQwNDI2IDIuOTM1NC0xLjIxMDQgMC43OTU4NS0wLjc5NTg1IDEuMTg3NC0xLjc5MzggMS4xODc0LTIuOTgxMyAwLTEuMTc3LTAuMzkxNTktMi4xNzI5LTEuMTg3NC0yLjk2ODZ6bS01LjEzMzIgMC42NzA3OGMwLjU5MzcyLTAuNjA0MTIgMS4zMjI5LTAuOTA2MjQgMi4xOTc4LTAuOTA2MjQgMC44NzI5MSAwIDEuNjAyMSAwLjMwMjEzIDIuMTg1NCAwLjkwNjI0IDAuNTkzNzIgMC41OTM3MiAwLjg4NTMxIDEuMzY4NiAwLjg4NTMxIDIuMjk3OCAwIDAuOTMxMzEtMC4yOTE1OSAxLjcwNDEtMC44ODUzMSAyLjI5NzktMC41ODMzMiAwLjYwNDEyLTEuMzEyNSAwLjkwODI0LTIuMTg1NCAwLjkwODI0LTAuODc0OTEgMC0xLjYwNDEtMC4zMDQxMy0yLjE5NzgtMC45MDgyNC0wLjU4MTMyLTAuNjA2MjUtMC44NzI5MS0xLjM2NjYtMC44NzI5MS0yLjI5NzkgMC0wLjkyOTE4IDAuMjkxNTktMS42OTE2IDAuODcyOTEtMi4yOTc4em04Ljc3MDYgMS4zMTI1LTAuMDQzNy0xLjU0OGgwLjA0MzdsNC4wNzkxIDYuNTQ1N2gxLjA3N3YtOC4wMjQ5aC0xLjAzMTJ2NC42OTU3bDAuMDQzNyAxLjU0OGgtMC4wNDM3bC0zLjg5OTktNi4yNDM3aC0xLjI1NjJ2OC4wMjQ5aDEuMDMxMnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9Ii4yNjY2NiIvPjwvc3ZnPgo=";
let hasFocus$1 = !0;
addEventListener("blur", function() {
  hasFocus$1 = !1;
});
addEventListener("focus", function() {
  hasFocus$1 = !0;
});
function redirectCTA(e, t) {
  info("Trigger CTA", e), dispatchCustomEvent$1("n2i_cta_open", e), sleep(100).then(() => {
    location.replace(e), t && setTimeout(function() {
      hasFocus$1 && (info("CTA failed to load, trigger fallback CTA", t), dispatchCustomEvent$1("n2i_cta_open", t), sleep(100).then(() => location.replace(t)));
    }, 1e3);
  });
}
function initCTA$1(e, t = "") {
  const n = config.cta;
  e.innerHTML = `
    <div class="w-screen h-screen flex flex-col">
        <a href="#" class="section grow flex justify-center items-center">
          <div class="scale-[1.5] flex flex-col sm-lan:flex-row object-bottom items-center rounded-xl gap-x-3 gap-y-3">
            <div class="w-36 aspect-square flex justify-between items-center mt-2 sm-lan:mt-0">
              <img id="n2i-cta-app-logo" class="object-contain drop-shadow-lg rounded-3xl" alt="application logo"/>
            </div>
            <div class="flex flex-col items-center gap-y-3">
              <div class="">
                <h3 id="n2i-cta-app-name" class="text-white font-bold text-3xl"></h3>
                <div class="flex h-4 gap-x-1 ${n.noStars && "n2i-hidden"}">
                  <img src="${star}" alt="star"/>
                  <img src="${star}" alt="star"/>
                  <img src="${star}" alt="star"/>
                  <img src="${star}" alt="star"/>
                  <img src="${halfStar}" alt="half star"/>
                </div>
                <p id="n2i-cta-app-publisher" class="text-zinc-200 text-sm font-medium"></p>
              </div>
              <div class="">
                <img id="n2i-cta-google-store-img" class="hidden object-contain" src="${playStore}" alt="Google Play install logo"/>
                <img id="n2i-cta-apple-store-img" class="hidden object-contain" src="${appStore}" alt="App Store install logo"/>
              </div>
            </div>
          </div>
        </a>
    </div>
    `, config.noDynamicAssets || importLink("stylesheet", "text/css", `${t}index.css`);
  let i = n.url, r;
  i == "call-to-action/" ? (r = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent), r && n.apple && n.apple.name && n.apple.id ? i = `https://apps.apple.com/us/app/${n.apple.name}/id${n.apple.id}` : (i = `https://play.google.com/store/apps/details?id=${n.android.name}`, r = !1)) : r = i.startsWith("https://apps.apple.com"), e.onclick = () => {
    dispatchCustomEvent$1("n2i_cta_click"), config.cta.mode == "ad-network" && window.redirectCTAAdNetwork ? redirectCTAAdNetwork() : redirectCTA(i, config.cta.fallbackUrl);
  }, r ? document.getElementById("n2i-cta-apple-store-img").classList.remove("hidden") : document.getElementById("n2i-cta-google-store-img").classList.remove("hidden");
  const o = document.getElementById("n2i-cta-app-logo");
  o.src = n.logo;
  const s = document.getElementById("n2i-cta-app-name");
  s.innerHTML = n.name.replace(/\n/g, "</br>");
  const a = document.getElementById("n2i-cta-app-publisher");
  a.textContent = n.publisher, n.gradient ? e.style.background = `linear-gradient(${n.gradient.from}, ${n.gradient.to})` : n.background && (e.style.background = n.background);
}
function initTutorial() {
  config.tutorial.enabled && addEventListener(config.tutorial.startEvent, function() {
    const e = document.getElementById("n2i"), t = ["touchstart", "mousedown"], n = [...config.tutorial.steps];
    let i, r = 0;
    function o(s) {
      if (Date.now() < r) {
        s.stopImmediatePropagation();
        return;
      }
      if (i && restrictInput(s, i)) return;
      const c = n.shift();
      if (!c) {
        for (const d of t)
          e.removeEventListener(d, o, !0);
        hidePointer();
        return;
      }
      c.restrict ? (setTimeout(() => {
        showPointer(c.pointer);
      }, c.restrict * 1e3), hidePointer(), r = Date.now() + c.restrict * 1e3) : showPointer(c.pointer), i = c.pointer;
    }
    for (const s of t)
      e.addEventListener(s, o, !0);
    o();
  }, { once: !0 });
}
const initEvent$2 = "n2i_init_start";
addEventListener(initEvent$2, () => {
  config.postMessage.includes(initEvent$2) && postMessage(initEvent$2);
  for (const e of config.postMessage)
    addEventListener(e, () => {
      postMessage(e);
    });
  for (const e of config.postMessage2)
    addEventListener(e, (t) => {
      setTimeout(function() {
        var i, r, o;
        const n = {
          type: t.type,
          detail: t.detail
        };
        postMessage(n), window.n2iWebView && n2iWebView.onEvent(t.type, typeof t.detail == "object" ? JSON.stringify(t.detail) : t.detail), (o = (r = (i = window.webkit) == null ? void 0 : i.messageHandlers) == null ? void 0 : r.n2iWebView) != null && o.postMessage && webkit.messageHandlers.n2iWebView.postMessage(JSON.stringify({
          type: "event",
          data: n
        }));
      });
    });
});
const initEvent$1 = "n2i_init_end";
addEventListener(initEvent$1, (e) => {
  var n, i;
  (i = (n = config.sendEvent) == null ? void 0 : n.common) != null && i.includes(initEvent$1) && sendEvent(e.type, {
    value: e.detail
  });
  let t = /* @__PURE__ */ new Set();
  for (const [r, o] of Object.entries(config.sendEvent))
    for (const s of o)
      t.add(s);
  for (const r of Array.from(t))
    addEventListener(r, (o) => {
      sendEvent(o.type, {
        value: o.detail
      });
    });
  if (config.heartbeat.enabled) {
    let r = 0, o = 0, s = 0, a = 0, c, d, u = 0, l = 0;
    addEventListener("mousedown", () => {
      r += 1, c != null || (c = Date.now());
    }), addEventListener("touchstart", (f) => {
      o += f.changedTouches.length, d != null || (d = Date.now());
    }), addEventListener("mouseup", (f) => {
      f.buttons == 0 && (u += c ? Date.now() - c : 0, c = void 0);
    }), addEventListener("touchend", (f) => {
      f.touches.length == 0 && (l += d ? Date.now() - d : 0, d = void 0);
    }), addEventListener("n2i_pip3d_frame", () => {
      s += 1;
    }), addEventListener("n2i_sendevent_failed", () => {
      a += 1;
    });
    let p = setInterval(() => {
      sendEvent("n2i_heartbeat", {
        value: {
          clicks: r,
          touches: o,
          frames: s,
          sendEventFailed: a,
          visibility: document.visibilityState,
          clicksCumulatedDuration: u + (c ? Date.now() - c : 0),
          touchesCumulatedDuration: l + (d ? Date.now() - d : 0)
        }
      });
    }, config.heartbeat.interval);
    addEventListener("n2i_disconnected", () => {
      setTimeout(() => {
        clearInterval(p);
      }, config.heartbeat.lastBreath);
    });
  }
});
const initEvent = "n2i_init_start";
addEventListener(initEvent, () => {
  if (config.aliveStartEvent != "") {
    let e = function() {
      setInterval(() => {
        postMessage("n2i_alive");
      }, config.aliveInterval);
    };
    config.aliveStartEvent == initEvent ? e() : addEventListener(config.aliveStartEvent, () => {
      e();
    });
  }
});
Promise.allSettled = Promise.allSettled || ((e) => Promise.all(e.map(
  (t) => t.then((n) => ({
    status: "fulfilled",
    value: n
  })).catch((n) => ({
    status: "rejected",
    reason: n
  }))
)));
let configPromise = importModule("config.js");
window.objectAssignDeep = objectAssignDeep;
window.pip3dFrontendVersion = "3.12.0";
window.config = defaultConfig;
function enableAddon(e) {
  config.addons.find((t) => t === e) === void 0 && config.addons.push(e);
}
function disableAddon(e) {
  const t = config.addons.findIndex((n) => n === e);
  t >= 0 && config.addons.splice(t, 1);
}
function enableStyle(e) {
  config.styles.find((t) => t === e) === void 0 && config.styles.push(e);
}
let isPWA = !1, displayMode = "browser";
function setDisplayMode() {
  const e = [
    "browser",
    "fullscreen",
    "minimal-ui",
    "picture-in-picture",
    "standalone",
    "window-controls-overlay"
  ];
  for (const t of e)
    if (window.matchMedia(`(display-mode: ${t})`).matches) {
      displayMode = t;
      break;
    }
  displayMode != "browser" && (isPWA = !0);
}
function handleQueryConfig() {
  dbg("query parameters", urlParams);
  const e = {}, t = sessionStorageImpersonator.getItem("query");
  if (t) {
    const n = JSON.parse(t);
    dbg("session parameters", n), objectAssignDeep(e, n);
  }
  objectAssignDeep(e, urlParams), dbg("final query parameters", e);
  for (const n in e) {
    const i = e[n];
    if (config[n] !== void 0 && config[n] !== null)
      switch (typeof config[n]) {
        case "boolean":
          switch (i) {
            case !0:
            case "true":
              config[n] = !0;
              continue;
            case !1:
            case "false":
              config[n] = !1;
              continue;
          }
          break;
        case "number":
          config[n] = Number(i);
          continue;
        case "object":
          if (Array.isArray(config[n]))
            config[n] = i.split(",");
          else {
            let r = i;
            try {
              r = JSON.parse(i);
            } catch (o) {
              err("Error while trying to parse value", i);
            }
            objectAssignDeep(config[n], r);
          }
          continue;
      }
    switch (i) {
      case "null":
        config[n] = null;
        break;
      case "undefined":
        delete config[n];
        break;
      default:
        config[n] = e[n];
        break;
    }
  }
  config.clearUrlQuery ? (history.replaceState({}, "", location.href.split("?")[0]), sessionStorageImpersonator.setItem("query", JSON.stringify(e))) : sessionStorageImpersonator.removeItem("query");
}
function fixupConfig() {
  var a, c, d, u, l;
  dbg("original config", config);
  const e = config[device$1.os];
  delete config.ios, delete config.android, dbg(`${device$1.os} os config`, e), objectAssignDeep(config, e);
  const t = config[device$1.type];
  delete config.mobile, delete config.tablet, delete config.desktop, dbg(`${device$1.type} device config`, t), objectAssignDeep(config, t);
  const n = isPWA ? "pwa" : "browser", i = config[n];
  if (delete config.pwa, delete config.browser, dbg(`${n} web config`, i), objectAssignDeep(config, i), sentrySetTag("pwa", isPWA), embed) {
    const p = config.embed;
    delete config.embed, dbg("embed config", p), objectAssignDeep(config, p);
  }
  if (sentrySetTag("embed", embed), handleQueryConfig(), !config.titleId && location.pathname != "/" && (config.titleId = location.pathname.match(/.*\//)[0].slice(1, -1)), config.startApp === !0 && ((a = config.titleId) == null ? void 0 : a.length) > 0)
    config.startApp = (c = config.appByTitleId[config.titleId]) != null ? c : config.titleId;
  else if (config.startIntent) {
    let p = function(m) {
      return m.split("/")[0];
    };
    typeof config.startIntent == "string" && (config.startIntent = JSON.parse(config.startIntent));
    const f = config.startIntent.component;
    f && (config.startApp = p(f), info(`derived startApp=${config.startApp} from startIntent`));
  }
  config.costs && (config.graph = !0, config.infos = !0, config.deciles = !0);
  let r = config[config.titleId];
  !r && typeof config.startApp == "string" && (r = config[config.startApp]), r || (r = config[config.deeplinksApp]), dbg("app config", r), objectAssignDeep(config, r);
  let s = (l = (u = (d = config.runnerConfig) != null ? d : config.titleId) != null ? u : config.deeplinksApp) != null ? l : config.startApp;
  if (config.customConfigKeyName) {
    const p = config[config.customConfigKeyName], f = config[p];
    delete config[p], dbg(`${p} custom config`, f), objectAssignDeep(config, f), s = p;
  }
  switch (config.campaignId && config.cta.mode != "ad-network" && (config.campaignId += `-${s}`), !window.TextDecoder || !window.TextEncoder ? enableAddon("text-encoding") : disableAddon("text-encoding"), config.clickOnConnectX >= 0 && config.clickOnConnectY >= 0 && (config.clickOnConnect = !0, enableAddon("click-on-connect")), config.rootPath && !config.frontendRootPath && (config.frontendRootPath = config.rootPath), config.rootPath && !config.apiRootPath && (config.apiRootPath = config.rootPath), config.rootPath && !config.runnerRootPath && (config.runnerRootPath = config.rootPath), config.graph && (enableAddon("graph"), enableStyle("graph")), config.facebook && enableAddon("facebook_login"), config.infos && enableAddon("infos"), config.googleTags && enableAddon("google"), config.speedtest.enabled && enableAddon("speedtest"), config.adNetwork) {
    case null:
    case void 0:
    case "h5":
      break;
    case "crazygames":
      config.restorePackageBackupFromCache = !1;
    default:
      config.muteOnBlur = !0, config.noMutedImg = !0;
      break;
  }
  info("config", config);
}
let inIframe = !1;
function initDom() {
  let e = document.getElementById("n2i");
  e || (e = document.createElement("div"), e.id = "n2i", document.body.appendChild(e));
  const t = function(h, M) {
    const E = createHtmlElement(e, ...arguments), y = config.domStyles[M];
    if (y) {
      const C = {
        IMAGES_COMMON_BASE_URL: config.imagesCommonBaseUrl
      };
      for (let [N, T] of Object.entries(y)) {
        for (const [S, L] of Object.entries(C))
          T = T.replaceAll(S, L);
        E.style[N] = T;
      }
    }
    return E;
  }, n = t("audio", "audio", null, "Your browser does not support HTML5 audio");
  n.autoplay = !0, n.muted = !0;
  const i = t("img", "n2i-muted", ["n2i-hidden"]);
  config.noDynamicAssets || (i.src = (config.frontendRootPath || "") + "muted.png");
  const r = t("div", "n2i-message", ["n2i-hidden", "n2i-absolute"]), o = t("div", "n2i-reload", ["n2i-hidden", "n2i-absolute", "n2i-dark-transparent"]), s = createHtmlElement(o, "div", "n2i-reload-button", null, config.reloadMessage);
  if (s.onclick = () => {
    r.classList.add("n2i-hidden"), o.classList.add("n2i-hidden"), backendGetContainer();
  }, config.offlineStream.enabled || config.tutorial.enabled) {
    const h = t("div", "n2i-pointer", ["n2i-centered"]), M = createHtmlElement(h, "div", "n2i-pointer-hole", ["n2i-hidden"]), E = createHtmlElement(M, "div"), y = createHtmlElement(E, "img");
    y.src = pointer, addEventListener("n2i_canvas_resized", function(C) {
      const { width: N, height: T, scale: S } = C.detail;
      h.style.width = `${N / S}px`, h.style.height = `${T / S}px`, h.style.transform = `translate(-50%, -50%) scale(${S})`;
    });
  }
  if (config.countdown) {
    const h = t("div", "n2i-countdown", ["n2i-hidden"]);
    h.innerHTML = `
          <svg>
            <circle cx="50%" cy="50%" r="40%"/>
            <circle cx="50%" cy="50%" r="40%" pathLength="1" />
            <text x="50%" y="50%" font-weight="bold" text-anchor="middle" alignment-baseline="middle" dominant-baseline="middle">
              <tspan id="n2i-countdown-remaining" text-anchor="middle" alignment-baseline="middle" dominant-baseline="middle"></tspan>
            </text>
          </svg>
        `;
  }
  if (config.cta.enabled && t("div", "n2i-cta", ["n2i-hidden"]), config.networkQuality.enabled) {
    let h = function(D) {
      for (let w = 0; w < j; w += 1)
        x[w].style.display = D == w ? "" : "none";
      N.classList.add("n2i-blink"), N.style.animationIterationCount = D ? "infinite" : T + 3;
    }, M = function(D) {
      T == -1 ? h(D) : S = D, dispatchCustomEvent$1("n2i_network_quality", D);
    }, E = function(D) {
      var z, U, P;
      const [w, v] = D.detail, $ = (P = (z = v == null ? void 0 : v.networkStatus) == null ? void 0 : z.maxNetworkDelayMs) != null ? P : (U = v == null ? void 0 : v.networkStatus) == null ? void 0 : U.downJitterMs;
      if ($ === void 0) return;
      const O = $ <= config.networkQuality.goodThreshold ? 0 : $ > config.networkQuality.badThreshold ? 2 : 1;
      O != L && (O > L && M(O), W(O), L = O);
    }, y = function() {
      R = setTimeout(function() {
        dbg("network quality animation grace perdiod over"), N.classList.remove("n2i-hidden"), addEventListener("n2i_status", E);
      }, config.networkQuality.gracePeriod);
    }, C = function() {
      clearTimeout(R), N.classList.add("n2i-hidden"), removeEventListener("n2i_status", E), L = T = 0, S = void 0;
    };
    const N = t("div", "n2i-network-quality", ["n2i-blink", "n2i-hidden"]);
    let T = 0, S, L = 0;
    const j = 3, x = [];
    for (let D = 0; D < j; D += 1) {
      const w = x[D] = createHtmlElement(N, "img", void 0, ["n2i-network-quality-img"]);
      w.style.display = "none", w.src = (config.frontendRootPath || "") + `wifi${D}.png`;
    }
    N.addEventListener("animationiteration", () => {
      S !== void 0 && (h(S), S = void 0), T++;
    }), N.addEventListener("animationstart", (D) => {
      T = 0;
    }), N.addEventListener("animationend", (D) => {
      T = -1, N.classList.remove("n2i-blink");
    });
    const W = debounce(M, config.networkQuality.throttleDelay);
    let R;
    addEventListener("n2i_pip3d_connected", y), addEventListener("n2i_pip3d_disconnected", C);
  }
  if (config.footerStyle.height) {
    const h = t("div", "n2i-footer");
    for (const [M, E] of Object.entries(config.footerStyle))
      h.style[M] = E;
  }
  if (config.iframe.enabled) {
    const h = t("div", "n2i-iframe-header", ["n2i-hidden", "n2i-absolute"]);
    h.innerHTML = "&Cross;&nbsp;", h.onclick = () => n2iUnloadIframe("cross-click"), h.style.height = `${config.iframe.header.height}vh`;
    for (const [E, y] of Object.entries(config.iframe.header.style))
      h.style[E] = y;
    const M = "n2i-iframe";
    window.n2iLoadIframe = function(E, y = !1) {
      var N;
      const C = (N = document.getElementById(M)) != null ? N : t("iframe", M, ["n2i-hidden", "n2i-absolute"]);
      config.iframe.allow && C.setAttribute("allow", config.iframe.allow), C.style.top = y ? h.style.height : 0, C.style.height = y ? `${100 - config.iframe.header.height}vh` : "100%", C.onload = () => {
        var T;
        (T = C.src) != null && T.startsWith("http") && (info("iframe: url", C.src, "loaded"), C.classList.remove("n2i-hidden"), y && h.classList.remove("n2i-hidden"), dispatchCustomEventEnd$1("n2i_iframe_load", C.src), inIframe = !0);
      }, info(`iframe: load ${E}`), C.src = E, dispatchCustomEventStart$1("n2i_iframe_load", E);
    }, window.n2iUnloadIframe = function(E = "unknown") {
      info(`iframe: unload (${E})`);
      const y = document.getElementById(M);
      y != null && (y.remove(), y.src = "about:blank", y.classList.add("n2i-hidden"), inIframe = !1, dispatchCustomEvent$1("n2i_iframe_unload", E)), h.classList.add("n2i-hidden");
    }, config.iframe.closeOnDisconnected && addEventListener("n2i_pip3d_disconnected", () => {
      n2iUnloadIframe("disconnected");
    });
  }
  const a = t("div", "n2i-toast", ["n2i-absolute", "n2i-hidden", "n2i-hidden-fadeout"]);
  a.addEventListener("transitionend", (h) => {
    a.classList.add("n2i-hidden"), a.innerHTML = "";
    for (const M of a.style)
      a.style.removeProperty(M);
  }), t("canvas", "n2i-canvas", ["n2i-hidden", config.cropCanvas.enabled ? "n2i-absolute" : "n2i-centered"]), t("div", "n2i-player", ["n2i-centered", "n2i-landscape"]), t("mark", "n2i-statusBar", ["n2i-hidden"], " Pip3D "), t("div", "n2i-console", ["n2i-centered"]);
  const c = t("div", "n2i-spinner", ["n2i-dark-transparent"]);
  createHtmlElement(c, "div"), config.splash && (c.classList.add("n2i-splash-visible"), t("div", "n2i-splash")), t("div", "n2i-rotator", ["n2i-hidden"]), t("div", "n2i-menu", ["n2i-hidden", "n2i-movable"]);
  let d, u, l, p, f;
  function m(h, M) {
    p = getWindowWidth(), f = getWindowHeight(), d = h, h.moved = !1, u = M.clientX - parseInt(getComputedStyle(d).left), l = M.clientY - parseInt(getComputedStyle(d).top);
  }
  function I(h) {
    if (d === void 0) return !1;
    const M = d.getClientRects()[0], E = Math.max(0, Math.min(p - M.width, h.clientX - u)), y = Math.max(0, Math.min(f - M.height, h.clientY - l));
    return d.style.left = E + "px", d.style.top = y + "px", d.moved = !0, !0;
  }
  function A(h) {
    d = void 0;
  }
  addEventListener("n2i_assets_load_end", function() {
    document.querySelectorAll(".n2i-movable").forEach(function(h) {
      h.addEventListener("contextmenu", (M) => {
        M.preventDefault();
      }), h.addEventListener("mousedown", function(M) {
        M.button == 0 && m(h, M);
      }), h.addEventListener("touchstart", function(M) {
        m(h, M.changedTouches[0]);
      });
    }), document.addEventListener("mousemove", I), document.addEventListener("touchmove", function(h) {
      I(h.changedTouches[0]) && h.preventDefault();
    }, { passive: !1 }), addEventListener("mouseup", function(h) {
      h.button == 0 && A();
    }), document.addEventListener("touchend", function(h) {
      A(h.changedTouches[0]);
    });
  });
}
function loadAssets() {
  const e = [];
  if (!config.noDynamicAssets) {
    const s = config.styles;
    for (const a of s) {
      dbg("import style", a);
      try {
        const c = [];
        if (dispatchCustomEventStart$1("n2i_style_" + a + "_init"), available_styles[a])
          for (const d of available_styles[a])
            c.push(importLink("stylesheet", "text/css", d));
        else
          c.push(importLink("stylesheet", "text/css", a + ".css"));
        e.push(Promise.all(c).then(function() {
          dispatchCustomEventEnd$1("n2i_style_" + a + "_init");
        }));
      } catch (c) {
        err("failed importing style", a), dispatchCustomEventFail("n2i_style_" + a + "_init"), captureException$1(c);
      }
    }
  }
  const t = config.addons;
  for (const s of t) {
    dbg("import addon", s);
    try {
      const a = [];
      if (dispatchCustomEventStart$1("n2i_addon_" + s + "_init"), !config.noDynamicAssets)
        if (available_addons[s])
          for (const c of available_addons[s])
            a.push(importScript(c));
        else
          a.push(importModule(`addons/${s}.js`).then((c) => {
            if (c.init) return c.init();
          }));
      e.push(
        Promise.all(a).then(function() {
          const c = window["n2i_addon_" + s + "_init"];
          if (c) return c();
        }).then(function() {
          dispatchCustomEventEnd$1("n2i_addon_" + s + "_init");
        })
      );
    } catch (a) {
      err("failed importing addon", s), dispatchCustomEventFail("n2i_addon_" + s + "_init"), captureException$1(a);
    }
  }
  const n = config.player;
  if (n) {
    dbg("import player", n);
    try {
      const s = [];
      if (dispatchCustomEventStart$1("n2i_player_init"), available_players[n])
        for (const a of available_players[n])
          s.push(importScript(a));
      else
        s.push(importModule(`player/${n}.js`).then((a) => {
          window.PLAYER = a.PLAYER;
        }));
      e.push(Promise.all(s).then(function() {
        window.PLAYER || (window.PLAYER = window["PLAYER_" + config.player.toUpperCase()].PLAYER), dispatchCustomEventEnd$1("n2i_player_init");
      }));
    } catch (s) {
      err("failed importing player", n), dispatchCustomEventFail("n2i_player_init"), captureException$1(s);
    }
  }
  const i = config.backend;
  if (i) {
    dbg("import backend", i);
    try {
      const s = [];
      dispatchCustomEventStart$1("n2i_backend_init");
      const a = "BACKEND_" + i.toUpperCase();
      if (window[a] === void 0)
        if (available_backends[i])
          for (const c of available_backends[i])
            s.push(importScript(c));
        else
          s.push(importModule(`backend/${i}.js`).then((c) => {
            window.BACKEND = c.BACKEND;
          }));
      e.push(Promise.all(s).then(function(c) {
        return window.BACKEND || (window.BACKEND = window[a].BACKEND), Promise.resolve(BACKEND.init()).then(function() {
          dispatchCustomEventEnd$1("n2i_backend_init");
        });
      }));
    } catch (s) {
      err("failed importing backend", i), dispatchCustomEventFail("n2i_backend_init"), captureException$1(s);
    }
  }
  const r = config.adNetwork;
  if (r) {
    dbg("import ad network", r);
    try {
      const s = [];
      dispatchCustomEventStart$1("n2i_ad_network_init");
      const a = "AD_NETWORK_" + r.toUpperCase();
      if (window[a] === void 0)
        if (available_ad_networks[r])
          for (const c of available_ad_networks[r])
            s.push(importScript(c));
        else
          s.push(importModule(`ad_network/${r}.js`).then((c) => {
            window.AD_NETWORK = c.AD_NETWORK;
          }));
      e.push(Promise.all(s).then(function() {
        return window.AD_NETWORK || (window.AD_NETWORK = window[a].AD_NETWORK), Promisify(() => AD_NETWORK.init(config.adClientId)).then(function() {
          dispatchCustomEventEnd$1("n2i_ad_network_init");
        }).catch((c) => {
          if (dispatchCustomEventFail("n2i_ad_network_init"), config.adNetworkLoadFatal)
            throw c;
        });
      }));
    } catch (s) {
      err("failed importing ad network", r), dispatchCustomEventFail("n2i_ad_network_init"), captureException$1(s);
    }
  }
  const o = config.favicon;
  if (o && (dispatchCustomEventStart$1("n2i_favicon_init"), e.push(importLink("shortcut icon", "image/x-icon", o).then(function() {
    dispatchCustomEventEnd$1("n2i_favicon_init");
  }))), config.preloadImages.length > 0) {
    dispatchCustomEventStart$1("n2i_preload_images");
    const s = [];
    for (const a of config.preloadImages)
      a.startsWith("http") || (a = config.imagesCommonBaseUrl + a), dbg("preload image", a), s.push(preloadImage(a).then(function() {
        dbg("image", a, "preloaded");
      }).catch(function(c) {
        err("failed preloading image", a, c), captureException$1(c);
      }));
    e.push(Promise.all(s).then(function() {
      dispatchCustomEventEnd$1("n2i_preload_images");
    }));
  }
  return Promise.all(e);
}
function initA2HS() {
  if (!config.a2hs) return;
  let e = "default";
  const t = config.startApp, n = config.deeplinksApp || config.deeplinkApp, i = config.runnerConfig;
  typeof t == "string" ? e = t : n ? e = n : i && (e = i), e = e.replace(new RegExp("\\.", "g"), "-"), addEventListener("n2i_backend_request_container_end", (d) => {
    var m;
    const u = d.detail;
    let l = new URL(absoluteUrl(`manifests/${e}.webmanifest`));
    const p = ((m = u.IMAGES_COMMON_BASE_URL) != null ? m : u.IMAGES_BASE_URL) + "backups";
    function f() {
      config.restorePackageBackupFromCache && (l.searchParams.append("clientId", u.clientId), l.searchParams.append("backupBaseUrl", p));
      let I = [];
      Array.isArray(config.a2hsForwardQueries) ? I = config.a2hsForwardQueries : config.a2hsForwardQueries === !0 && (I = Object.keys(urlParams));
      for (const A of I)
        config[A] !== void 0 && l.searchParams.append(A, config[A]);
    }
    f(), request("GET", l.href).then(() => {
      importLink("manifest", void 0, l.toString());
    }).catch((I) => {
      err(`failed to import ${e} manifest`, I), e !== "default" && (dbg("retry with default manifest"), l = new URL(absoluteUrl("manifests/default.webmanifest")), f(), importLink("manifest", void 0, l.toString()));
    }), request("GET", absoluteUrl(`manifests/${e}-icon.png`)).then(() => {
      importLink("apple-touch-icon", void 0, `manifests/${e}-icon.png`);
    }).catch((I) => {
      err(`failed to import ${e} icon`, I), e !== "default" && (dbg("retry with default icon"), importLink("apple-touch-icon", void 0, "manifests/default-icon.png"));
    });
  }), navigator.serviceWorker ? config.rootPath && !config.rootPath.startsWith(location.origin) ? info("service worker disabled from cross-origin") : navigator.serviceWorker.register(absoluteUrl("sw.js"), {
    type: "module"
  }) : err("service worker not supported");
  const r = /* @__PURE__ */ new Set();
  for (const [d, u] of Object.entries(config.a2hsEvents))
    for (const l of u)
      r.add(l);
  const o = Array.from(r), s = `a2hs-${e}`;
  let a;
  function c(d) {
    if (info("calling promptA2HS"), !isPWA && !(!config.a2hsPromptOnClicksAfterClose && !config.a2hsRepeat && localStorageImpersonator.getItem(s) === "dismissed")) {
      if (dispatchCustomEvent$1("n2i_prompt_a2hs_request", { srcEvent: d.type, data: d.detail }), config.a2hsPromptIframe) {
        const u = new URL(config.a2hsPromptIframe, config.imagesCommonBaseUrl);
        n2iLoadIframe(u.href), device$1.ios() && localStorageImpersonator.setItem(s, "dismissed");
      }
      a && a.prompt().then(() => {
        if (!config.a2hsRepeat)
          for (const u of o)
            removeEventListener(u, c);
        a.userChoice.then((u) => {
          info(`A2HS choice: ${u.outcome}`), dispatchCustomEvent$1("n2i_prompt_a2hs", u.outcome), localStorageImpersonator.setItem(s, u.outcome);
        }), a = void 0;
      }).catch((u) => {
        err("failed to prompt A2HS", u);
      });
    }
  }
  for (const d of o)
    addEventListener(d, c);
  config.a2hsPromptOnClicksAfterClose && addEventListener("n2i_close", () => {
    const d = document.getElementById("n2i-canvas");
    d.addEventListener("touchend", c), d.addEventListener("mouseup", c);
  }), addEventListener("beforeinstallprompt", (d) => {
    d.preventDefault(), a = d, info("A2HS ready");
  }), addEventListener("appinstalled", () => {
    info("A2HS installed"), localStorageImpersonator.removeItem(s);
  });
}
function initCTA() {
  if (!config.cta.enabled) return;
  const e = document.getElementById("n2i-cta");
  function t(o) {
    for (const s of config.cta.events)
      addEventListener(s, o);
  }
  function n(o) {
    for (const s of config.cta.events)
      removeEventListener(s, o);
  }
  function i() {
    dispatchCustomEvent$1("n2i_cta_show"), e.classList.remove("n2i-hidden");
  }
  function r() {
    return window.redirectCTAAdNetwork ? redirectCTAAdNetwork() : redirectCTA(config.cta.url, config.cta.fallbackUrl);
  }
  switch (config.cta.mode != "redirect" && (config.cta.url == "call-to-action/" || !config.cta.logo || !config.cta.name || !config.cta.publisher ? (err("CTA url not configured, switching to CTA mode redirect"), config.cta.mode = "redirect") : initCTA$1(e, "call-to-action/")), config.cta.mode) {
    case "overlay":
      t(i);
      break;
    case "redirect":
      t(r);
      break;
    case "auto":
    case "ad-network":
      t(i), addEventListener("n2i_first_input", () => {
        n(i), t(r);
      }, { once: !0 });
      break;
    default:
      err(`unknown CTA mode ${config.cta.mode}`);
      break;
  }
}
function initApi() {
  config.api.enabled && (window.n2i = {}, n2i.frontendVersion = pip3dFrontendVersion, n2i.device = device$1, n2i.connected = function() {
    return connected;
  }, config.api.back && (n2i.back = back), config.api.disconnect && (n2i.disconnect = function(e, t) {
    return disconnectedReason = "api", retryOnDisconnected = !1, disconnectPip3d(e, disconnectedReason);
  }), config.api.sendCustomPacket && (n2i.sendCustomPacket = sendCustomPacket), config.api.sendDeeplink && (n2i.sendDeeplink = sendDeeplink), config.api.unloadIframe && (n2i.unloadIframe = window.n2iUnloadIframe), config.api.ads && (n2i.showAd = showAd, n2i.loadAd = loadAd), addEventListener("message", function(e) {
    var t;
    if (config.messageOrigin && !e.origin.match(new RegExp(config.messageOrigin))) {
      err("blocked message from origin", e.origin);
      return;
    }
    typeof e.data != "object" || !e.data.type || n2i[e.data.type] && n2i[e.data.type](...(t = e.data.detail) != null ? t : []);
  }), dispatchCustomEvent$1("n2i_api_ready"));
}
function initBack() {
  if (!config.forwardBack) return;
  function e() {
    history.pushState({}, ""), inIframe ? n2iUnloadIframe("back") : isInAd() || (info("forward back"), back());
  }
  addEventListener("n2i_connected", function() {
    history.pushState({}, ""), addEventListener("popstate", e);
  }), addEventListener("n2i_disconnected", function() {
    removeEventListener("popstate", e), history.back();
  });
}
function initExit() {
  if (window.n2iSkipNPreventExit = 0, !config.preventExit) return;
  function e(t) {
    if (window.n2iSkipNPreventExit > 0) {
      window.n2iSkipNPreventExit--;
      return;
    }
    t.preventDefault(), t.returnValue = !0;
  }
  addEventListener("n2i_pip3d_connected", function() {
    addEventListener("beforeunload", e);
  }), addEventListener("n2i_pip3d_disconnected", function() {
    removeEventListener("beforeunload", e);
  });
}
function initVisible() {
  if (!(!config.waitVisible || document.visibilityState == "visible"))
    return new Promise(function(e) {
      visibleCallback = () => {
        info("now visible"), e();
      }, info("waiting visibility");
    });
}
function initBackend() {
  return new Promise(function(e, t) {
    addEventListener("n2i_backend_init_end", function(n) {
      e();
    });
  });
}
function initStatus() {
  const e = document.getElementById("n2i-statusBar");
  return new Promise(function(t, n) {
    config.status && (e.classList.remove("n2i-hidden"), addEventListener("n2i_status", function(i) {
      e.textContent = i.detail[0];
    })), t();
  });
}
function setElementClasses(e, t, n = [], i = []) {
  typeof t == "boolean" && (t ? e.classList.remove("n2i-hidden") : e.classList.add("n2i-hidden"));
  for (let r of n)
    e.classList.add(r);
  for (let r of i)
    e.classList.remove(r);
}
let requestingContainer, disconnectedMessage, disconnectedReason, keepLastFrameVisible, runnerConnectedCount = 0;
function initTransition() {
  const e = document.getElementById("n2i-spinner"), t = document.getElementById("n2i-splash");
  let n = !1;
  function i(r, o, s) {
    setElementClasses(e, r, o, s), typeof r == "boolean" && (r === !1 ? n || (n = !0, dispatchCustomEvent$1("n2i_ready")) : n = !1);
  }
  return new Promise(function(r, o) {
    var s;
    let a, c = "n2i_connection_end";
    config.offlineStream.enabled ? (i(!0, ["n2i-blue-border"], ["n2i-green-border"]), a = "n2i_offline_stream_playing_start", c = "n2i_pip3d_first_frame") : (a = "n2i_connection_end", addEventListener("n2i_backend_request_container_start", function(m) {
      var h, M;
      if (config.beautifulTransition && !((h = m.detail) != null && h.first) && !s) {
        s = document.getElementById("n2i-canvas"), s.id = "old_canvas";
        const E = document.createElement("canvas");
        E.id = "n2i-canvas", E.classList.add("n2i-centered"), E.classList.add("n2i-hidden"), s.parentElement.appendChild(E);
      }
      const A = ["n2i-blue-border"];
      t && ((M = m.detail) != null && M.first) && (t.classList.remove("n2i-hidden"), A.push("n2i-splash-visible")), i(!0, A, ["n2i-green-border"]);
    }));
    function d() {
      const m = document.getElementById("n2i-canvas");
      i(!1, [], ["n2i-splash-visible"]), t == null || t.classList.add("n2i-hidden"), m.classList.remove("n2i-hidden");
    }
    let u;
    function l() {
      clearTimeout(u), s ? setTimeoutSyncIf0(function() {
        var m;
        (m = s.parentElement) == null || m.removeChild(s), s = void 0, d();
      }, config.appRestoreAdditionalDelay) : setTimeoutSyncIf0(d, config.appAdditionalDelay);
    }
    addEventListener("n2i_pip3d_disconnected", function() {
      clearTimeout(u);
    }), addEventListener(a, function(m) {
      var I;
      document.getElementById("n2i-canvas"), i(null, ["n2i-green-border"], ["n2i-blue-border"]), dispatchCustomEvent$1("n2i_green_event"), (runnerConnectedCount > 1 || (I = m.detail) != null && I.restored) && (config.hideUntilAppStarted ? addEventListener("n2i_pip3d_first_frame", l, { once: !0 }) : d());
    }), config.hideUntilAppStarted ? (config.hideUntilAppStartedTimeout > 0 && addEventListener(c, () => {
      u = setTimeout(() => {
        warn("timeout waiting for application started"), l();
      }, config.hideUntilAppStartedTimeout);
    }), addEventListener(config.hideUntilAppStartedEvent, l)) : addEventListener(c, l), config.hideUIWhilePlaying && (addEventListener("n2i_player_playback_start", function() {
      const m = document.getElementById("n2i-canvas");
      e.classList.add("n2i-hidden2"), m.classList.add("n2i-hidden2");
    }), addEventListener("n2i_player_playback_end", function() {
      const m = document.getElementById("n2i-canvas");
      e.classList.remove("n2i-hidden2"), m.classList.remove("n2i-hidden2");
    }));
    let p;
    function f(m) {
      var A, h;
      if (requestingContainer) return;
      let I;
      if (config.timeoutMessage && ((h = (A = m.detail) == null ? void 0 : A.code) == null ? void 0 : h.httpStatus) == 408 ? I = config.timeoutMessage : config.disconnectedMessage && (I = disconnectedMessage != null ? disconnectedMessage : config.disconnectedMessage), printMessage(I, MESSAGE_USER), (p != null ? p : config.showReloadOnDisconnect) && document.getElementById("n2i-reload").classList.remove("n2i-hidden"), !(keepLastFrameVisible != null ? keepLastFrameVisible : config.keepLastFrameVisible)) {
        document.getElementById("n2i-canvas").classList.add("n2i-hidden");
        const E = document.getElementById("old_canvas");
        E && E.parentElement.removeChild(E);
      }
      n = !0, i(!1);
    }
    addEventListener("n2i_disconnected", f), addEventListener("n2i_init_fail", (m) => {
      var A;
      const I = m.detail;
      disconnectedMessage = `Initialization failure: ${(A = I == null ? void 0 : I.message) != null ? A : I}`, p = !1, f();
    }), r();
  });
}
const MESSAGE_ERROR = 5, MESSAGE_USER = 10;
function printMessage(e, t = 5) {
  if (e && t >= config.messageLevel) {
    const n = document.getElementById("n2i-message");
    n.classList = `n2i-absolute n2i-message-${t}`, n.textContent = e;
  }
}
window.printMessage = printMessage;
window.MESSAGE_ERROR = MESSAGE_ERROR;
window.MESSAGE_USER = MESSAGE_USER;
function initMessage() {
  const e = document.getElementById("n2i-message");
  return config.showMessages ? new Promise(function(t, n) {
    addEventListener("n2i_connection_fail", function(i) {
      printMessage(i.detail.message, MESSAGE_ERROR);
    }), addEventListener("n2i_connection_end", function(i) {
      e.classList.add("n2i-hidden");
    }), t();
  }) : Promise.resolve();
}
function initAssets() {
  return dispatchCustomEventStart$1("n2i_assets_load"), loadAssets().then(function() {
    window.utf8Decoder = new TextDecoder("utf-8"), window.utf8Encoder = new TextEncoder("utf-8"), dispatchCustomEventEnd$1("n2i_assets_load"), info("assets loaded");
  }).catch(function(e) {
    throw err("failed to load assets", e), dispatchCustomEventFail("n2i_assets_load"), e;
  });
}
function waitValidWindowSize() {
  if (!config.waitValidWindowSize) return;
  function e() {
    return getWindowWidth() && getWindowHeight() ? (info("window size valid"), Promise.resolve()) : (warn("window size not valid, wait resize..."), new Promise((t) => {
      addEventListener("resize", () => {
        e().then(t);
      });
    }));
  }
  return new Promise((t) => {
    const n = setTimeout(() => {
      err("timeout waiting for valid window size"), t();
    }, config.waitValidWindowSizeTimeout);
    e().then((i) => {
      clearTimeout(n), t(i);
    });
  });
}
function initAutoResize() {
  var e, t, n, i, r, o, s;
  function a() {
    if (!e || !t) return;
    n || (n = getWindowWidth()), i || (i = getWindowHeight()), r || (r = getWindowTopOffset()), o || (o = getWindowBottomOffset()), s || (s = getWindowSideOffset());
    const u = document.getElementById("n2i-canvas"), { enabled: l, minX: p, minY: f, maxX: m, maxY: I } = config.cropCanvas, A = n - s * 2, h = i - r - o, M = e / t, E = A / h, y = l ? m - p : 1, C = l ? I - f : 1, N = e * y / (t * C);
    let T, S;
    if (E > N ? (S = h / C, T = S * M) : (T = A / y, S = T / M), l) {
      const L = r - f * S + (h - S * (I - f)) / 2, j = s - p * T + (A - T * (m - p)) / 2;
      u.style.top = `${L}px`, u.style.left = `${j}px`;
    } else
      u.style.marginTop = `${(r - o) / 2}px`;
    u.style.width = `${T}px`, u.style.height = `${S}px`, dispatchCustomEvent$1("n2i_canvas_resized", { width: T, height: S, scale: T / e });
  }
  const c = getWindowResolution();
  function d() {
    n = getWindowWidth(), i = getWindowHeight();
    let { width: u, height: l, density: p, orientation: f } = getWindowResolution();
    if (config.keepInitialResolution) {
      if (!window.pip3d_ctx) return;
      f == c.orientation ? (u = c.width, l = c.height) : (u = c.height, l = c.width), sendCustomPacket(CustomPacketTypes.DISPLAY_INFO, `-1 -1 ${u} ${l} ${p} ${f} \0`), a();
    } else if (config.autofit) {
      if (!window.pip3d_ctx) return;
      sendCustomPacket(CustomPacketTypes.DISPLAY_INFO, `-1 -1 ${u} ${l} ${p} ${f} \0`);
    }
    a();
  }
  return new Promise(function(u, l) {
    addEventListener("n2i_pip3d_viewport_changed", function(I) {
      [e, t] = I.detail, a();
    });
    function p() {
      if (config.forcedNaturalOrientation && config.naturalOrientation) {
        const { orientation: I } = getWindowResolution(), A = document.getElementById("n2i-rotator");
        if (I == 0 != config.invertNaturalOrientation)
          u(), A.classList.add("n2i-hidden");
        else {
          info("incorrect device orientation"), A.classList.remove("n2i-hidden");
          const h = config.naturalOrientation == "portrait" ? "landscape" : "portrait", M = config.invertNaturalOrientation ? h : config.naturalOrientation, E = M == "portrait" ? "landscape" : "portrait";
          A.classList.add(`n2i-rotator-${M}`), A.classList.remove(`n2i-rotator-${E}`);
        }
      } else
        u();
      return d();
    }
    const f = device$1.os == "ios" ? 1e3 : 100, m = debounce(p, f);
    addEventListener("resize", m), addEventListener("orientationchange", m), config.clickOnConnect ? (addEventListener("n2i_click_on_connect", m), u()) : p();
  });
}
function initAutoFullscreen() {
  function e() {
    config.fullscreen && (dbg("request fullscreen"), document.documentElement.requestFullscreen(), document.removeEventListener("mousedown", e), document.removeEventListener("touchend", e));
  }
  return new Promise(function(t, n) {
    function i(r) {
      dbg("fullscreen changed: " + !!document.fullscreenElement), document.fullscreenElement || (document.addEventListener("mousedown", e), document.addEventListener("touchend", e));
    }
    document.addEventListener("fullscreenchange", i), i(), t();
  });
}
function initBackup() {
  if (localStorageImpersonator.getItem(config.appBackupsName) || !config.restorePackageBackupFromCache || !config.backupBaseUrl || !config.clientId) return;
  info("try to download backups from cloud cache"), dispatchCustomEventStart$1("n2i_restore_backup_from_cache", { backupBaseUrl: config.backupBaseUrl, clientId: config.clientId });
  const e = [], t = {}, n = { "@pm@": 1 };
  n[config.restorePackageBackupFromCache] = 2;
  for (const [i, r] of Object.entries(n))
    e.push(request3("GET", `${config.backupBaseUrl}/${config.clientId}/${i}.${r}`, { responseType: "arraybuffer" })[1].then((o) => {
      if (t[i] = {
        type: r,
        data: Array.from(new Uint8Array(o))
      }, !t[i].data.length)
        throw `failed to restore ${i} data`;
    }));
  return Promise.all(e).then(() => {
    localStorageImpersonator.setItem(config.appBackupsName, JSON.stringify(t)), info("backups restored to local storage"), dispatchCustomEventEnd$1("n2i_restore_backup_from_cache");
  }).catch((i) => {
    warn("failed to restore backups:", i), dispatchCustomEventFail("n2i_restore_backup_from_cache");
  });
}
let retryCount = 0, retryRunner = !0, retryRunnerCount = 0, retryOtherRunner = !0, maxRetry = -1, connectionStartTime;
function backendGetContainer() {
  const e = {
    first: connectedCount == 0,
    startOnInput: config.offlineStream.enabled
  };
  return requestingContainer || (connectionStartTime || (connectionStartTime = Date.now()), retryOnDisconnected = keepLastFrameVisible = void 0, maxRetry == -1 && (maxRetry = config.maxRetryBeforeConnected), dispatchCustomEventStart$1("n2i_backend_request_container", e), requestingContainer = BACKEND.getContainer({
    first: e.first,
    retry: retryCount,
    retryRunner
  }).catch(function(t) {
    throw err("failed to get container", t), t.httpStatus == 404 && (retryRunner = !1), requestingContainer = void 0, dispatchCustomEventFail("n2i_backend_request_container", t), t;
  }).then(function(t) {
    dispatchCustomEventEnd$1("n2i_backend_request_container", t), dispatchCustomEventStart$1("n2i_connection", t);
    function n() {
      const r = {
        startOnInput: e.startOnInput
      };
      if (Object.assign(r, config.pip3dSettings), t)
        return connectPip3d(t, r).then(function(o) {
          window.pip3d_ctx = o, requestingContainer = void 0, disconnectedReason = disconnectedMessage = void 0, retryOtherRunner = config.retryOtherRunner, maxRetry = config.maxRetry, connectedCount++, runnerConnectedCount++, dispatchCustomEventEnd$1("n2i_connection", t);
          const s = {};
          for (const a of config.connectedEventKeys)
            s[a] = t[a];
          dispatchCustomEvent$1("n2i_connected", s);
        });
      throw new Error("no available container");
    }
    let i;
    return e.startOnInput ? i = n() : i = disconnectPip3d(window.pip3d_ctx, "reconnection").then(n), i.catch(function(r) {
      throw err("failed to connect to container", r), dispatchCustomEventFail("n2i_connection", r), r;
    });
  }).catch(function(t) {
    throw requestingContainer = void 0, t;
  }), requestingContainer);
}
let connectedCount = 0, offlineStreamCtx;
function getContainer() {
  if (config.offlineStream.enabled)
    addEventListener("n2i_offline_stream_playing_start", function() {
      dispatchCustomEvent$1("n2i_connected"), backendGetContainer();
    });
  else
    return backendGetContainer();
  return Promise.resolve();
}
try {
  window.n2iNavigationType = performance.getEntriesByType("navigation")[0].type;
} catch (e) {
  err("Could not read navigationType value", e);
}
let dynamicInitValues = {};
function setInitValue(e, t) {
  if (!dynamicInitValues) {
    err("too late to set init value");
    return;
  }
  dynamicInitValues[e] = t;
}
window.n2iSetInitValue = setInitValue;
const staticInitValues = {
  referrer: "document.referrer",
  visibility: "document.visibilityState",
  userAgent: "window.navigator.userAgent",
  displayMode: "displayMode",
  device: {
    type: "device.type",
    os: "device.os",
    orientation: "device.orientation"
  },
  sizes: {
    screenWidth: "window.screen.width",
    screenHeight: "window.screen.height",
    innerWidth: "window.innerWidth",
    innerHeight: "window.innerHeight",
    outerWidth: "window.outerWidth",
    outerHeight: "window.outerHeight",
    devicePixelRatio: "window.devicePixelRatio"
  },
  navigationType: "n2iNavigationType"
}, initValues = {
  version: "3.12.0",
  iframe: embed
};
function getInitValues() {
  function loadValues(dest, values) {
    for (const [key, value] of Object.entries(values))
      if (typeof value == "object")
        dest[key] === void 0 && (dest[key] = {}), loadValues(dest[key], value);
      else
        try {
          dest[key] = eval(value);
        } catch (e) {
          warn(`failed to evaluate init value ${key} = ${value} with error`, e), dest[key] = value;
        }
  }
  return loadValues(initValues, staticInitValues), Object.assign(initValues, dynamicInitValues), dynamicInitValues = void 0, info("initial values", initValues), initValues;
}
addEventListener("n2i_init_end", function(e) {
  const t = ["touchstart", "mousedown"];
  function n(r) {
    if (!(config.restrictFirstInput.enabled && restrictInput(r, config.restrictFirstInput))) {
      info("first input"), firstInputSent = !0, dispatchCustomEvent$1("n2i_first_input", getInputInformation(r));
      for (const o of t)
        i.removeEventListener(o, n, !0);
    }
  }
  dispatchCustomEvent$1("n2i_init_values", getInitValues());
  let i = document.getElementById("n2i");
  for (const r of t)
    i.addEventListener(r, n, !0);
  config.getContainerOnInit && getContainer(), info("initialization done");
});
let retryDelay = 0, retrying = !1;
function retryGetContainer(e, t) {
  if (retrying) return;
  retryCount++, retrying = !0;
  function n() {
    retrying = !1, backendGetContainer();
  }
  document.visibilityState !== "visible" ? (config.reloadMessage ? (document.getElementById("n2i-reload").classList.remove("n2i-hidden"), retrying = !1) : visibleCallback = n, info("document not visible, retry postponed on visible event")) : (retryDelay = Math.min(config.maxRetryDelay, Math.max(t, retryDelay)), info(`retry get container in ${retryDelay} ms`), setTimeout(n, retryDelay), e !== void 0 ? retryDelay = e * 1e3 : retryDelay == 0 ? retryDelay = 1e3 : retryDelay *= 2);
}
let resetRetryDelay;
function cancelResetRetryDelay() {
  clearTimeout(resetRetryDelay);
}
function scheduleResetRetryDelay() {
  cancelResetRetryDelay(), resetRetryDelay = setTimeout(function() {
    info("reset retry delay"), retryDelay = 0, retryCount = 0, retryRunner = !0, retryRunnerCount = 0, connectionStartTime = void 0;
  }, config.resetRetryDelayAfter);
}
let retryOnDisconnected, offlineStreamEnded = !1;
addEventListener("n2i_offline_stream_playing_start", function(e) {
  offlineStreamCtx = e.detail;
});
addEventListener("n2i_offline_stream_playing_end", function(e) {
  offlineStreamEnded = !0, offlineStreamCtx = void 0;
});
addEventListener("n2i_request_new_container", () => getContainer());
function disconnected(e) {
  var o, s;
  hidePointer(), cancelResetRetryDelay();
  let t = (o = e.detail) != null && o.length ? e.detail[0] : e.detail, n = !offlineStreamEnded, i = disconnectedReason;
  maxRetry > -1 && retryRunnerCount++ >= maxRetry && (retryRunner = !1), retryRunner || (retryRunnerCount = 0, runnerConnectedCount = 0), n && (n = retryCount == 0 || retryRunner || retryOtherRunner), dbg("disconnected event", e.type);
  let r = !1;
  switch (e.type) {
    case "n2i_backend_request_container_fail":
      n && (n = config.retryOnTimeout || (t == null ? void 0 : t.httpStatus) != 408), t != null || (t = "unknown backend request error"), i != null || (i = "network");
      break;
    case "n2i_pip3d_load_error":
      n &= config.retryOnLoadError, t != null || (t = "unknown pip3d load error"), i = "load error";
      break;
    case "n2i_pip3d_connection_timeout":
      n &= config.retryOnConnectionTimeout, t != null || (t = "unexpected pip3d connection timeout"), i = "connection timeout", r = !0;
      break;
    case "n2i_pip3d_disconnected":
      n && (n = config.retryOnDisconnected || config.retryOnDisconnectedReasons.find((c) => c == disconnectedReason)), n && (n = retryOnDisconnected !== !1), t != null || (t = "disconnected"), i != null || (i = "network");
      break;
    case "n2i_pip3d_error":
      n && (n = config.retryOnError && retryCount < config.maxRetryOnError), t != null || (t = "unknown pip3d error"), i = "error";
      const a = (s = window.PIP3D) == null ? void 0 : s.P3dRetTypes;
      if (a)
        switch (t) {
          // do not capture timeouts
          case a.toString(a.P3D_RET_KEEP_ALIVE_TIMEOUT):
          case a.toString(a.P3D_RET_FRAME_READY_TIMEOUT):
            break;
          default:
            r = !0;
            break;
        }
      else
        r = !0;
  }
  if ((r || (t == null ? void 0 : t.httpStatus) > 400 && (t == null ? void 0 : t.httpStatus) != 404 && (t == null ? void 0 : t.httpStatus) != 408) && captureException$1(t), config.connectionGlobalTimeout && connectionStartTime) {
    const a = Date.now() - connectionStartTime;
    info(`connection delay: ${a / 1e3}s / ${config.connectionGlobalTimeout / 1e3}s`), a > config.connectionGlobalTimeout && (n = !1, i = "connection global timeout");
  }
  if (n) {
    let a = config.minRetryDelay;
    e.type == "n2i_backend_request_container_fail" && (t == null ? void 0 : t.httpStatus) == 404 && (a = 0), retryGetContainer(t == null ? void 0 : t.retryDelay, a);
  } else
    info(`this is the end (reason: ${i}, error: ${t})`), dispatchCustomEvent$1("n2i_disconnected", {
      reason: i,
      code: t
    }), (!requestingContainer || offlineStreamEnded) && i != "navigating" && (config.closeOnDisconnected ? dispatchCustomEvent$1("n2i_close", "disconnected and closeOnDisconnected set") : config.backOnDisconnected && history.back());
}
addEventListener("n2i_backend_request_container_fail", disconnected);
addEventListener("n2i_connection_fail", (e) => {
  var t;
  disconnected((t = e.detail.event) != null ? t : e);
});
addEventListener("n2i_pip3d_disconnected", disconnected);
addEventListener("n2i_pip3d_error", disconnected);
addEventListener("n2i_pip3d_notice", (e) => {
  const [t, n] = e.detail;
  dispatchCustomEvent$1("n2i_notice", { code: t, message: n });
});
addEventListener("n2i_close", function(e) {
  config.overrideDefaultClose || (console.log("closing window"), window.close());
});
let frames, scheduleInactivity, firstInputSent = !1;
addEventListener("n2i_pip3d_connected", function() {
  disconnectedReason = void 0, scheduleResetRetryDelay(), config.inactivityDisconnectDelay > 0 && !scheduleInactivity && (scheduleInactivity = debounce(function() {
    var t;
    if (config.cancelInactivityOnInput && firstInputSent) return;
    dispatchCustomEvent$1("n2i_inactivity_timeout");
    const e = (t = window.pip3d_ctx) != null ? t : offlineStreamCtx;
    e && setTimeout(function() {
      info("disconnect because of inactivity"), disconnectedMessage = config.inactivityDisconnectedMessage, disconnectedReason = "inactivity", retryOnDisconnected = !1, keepLastFrameVisible = !0, disconnectPip3d(e, disconnectedReason);
    }, config.inactivityDisconnectDelay2);
  }, config.inactivityDisconnectDelay)), frames = 0;
});
const scheduleIdle = debounce(function() {
  dispatchCustomEvent$1("n2i_idle");
}, config.idleDelay);
let firstFrameTimer;
addEventListener("n2i_pip3d_frame", function() {
  function e() {
    dispatchCustomEvent$1("n2i_pip3d_first_frame"), scheduleInactivity && scheduleInactivity(), firstFrameTimer = void 0;
  }
  frames == 0 ? firstFrameTimer = setTimeout(e, 100) : firstFrameTimer && (clearTimeout(firstFrameTimer), e()), frames++, scheduleIdle();
});
function onInput(e) {
  var n;
  document.getElementById("n2i-canvas").focus(), scheduleIdle(), scheduleInactivity && scheduleInactivity(), (e.buttons === 0 || ((n = e.touches) == null ? void 0 : n.length) === 0) && dispatchCustomEvent$1("n2i_input");
}
addEventListener("n2i_pip3d_input", onInput);
addEventListener("n2i_offline_stream_input", onInput);
let invisibilityTimeout;
function cancelInvisibilityTimeout() {
  clearTimeout(invisibilityTimeout), invisibilityTimeout = void 0;
}
function scheduleInvisibilityTimeout() {
  config.invisibilityDisconnectDelay <= 0 || invisibilityTimeout || (invisibilityTimeout = setTimeout(function() {
    var t;
    const e = (t = window.pip3d_ctx) != null ? t : offlineStreamCtx;
    e && (dispatchCustomEvent$1("n2i_invisibility_timeout"), setTimeout(function() {
      info("disconnect because of invisibility"), disconnectedMessage = config.inactivityDisconnectedMessage, disconnectedReason = "invisibility", retryOnDisconnected = !1, keepLastFrameVisible = !0, disconnectPip3d(e, disconnectedReason);
    }, config.invisibilityDisconnectDelay2));
  }, config.invisibilityDisconnectDelay));
}
let showingAd = !1, audioMutedRestore;
function computeMuted() {
  if (!alreadyUnmuted) return;
  const e = document.getElementById("audio"), t = document.visibilityState !== "visible", n = document.hasFocus(), i = t || showingAd || config.muteOnBlur && !n, r = document.getElementById("n2i-muted"), o = e.muted;
  i ? audioMutedRestore === void 0 && (audioMutedRestore = e.muted, e.muted = !0, audioMutedRestore === !1 && info(`mute audio (document hidden: ${t}, showing ad: ${showingAd}`)) : audioMutedRestore !== void 0 && (audioMutedRestore === !1 && info("unmute audio"), e.muted = audioMutedRestore, audioMutedRestore = void 0), (!o || !e.muted) && r.classList.add("n2i-hidden2");
}
addEventListener("n2i_pip3d_audio_unmute", () => {
  audioMutedRestore = void 0, computeMuted();
});
let alreadyUnmuted = !1;
addEventListener("n2i_pip3d_audio_unmute", function(e) {
  alreadyUnmuted = !0, audioMutedRestore = void 0, computeMuted();
});
let connected = !1, wakeLock, wakeLockPermission = !0;
function requestWakeLock() {
  wakeLock || (dispatchCustomEventStart$1("n2i_wake_lock"), navigator.wakeLock.request().then((e) => {
    function t() {
      e.removeEventListener("release", t), dbg("Screen Wake Lock released:", wakeLock.released), dispatchCustomEventEnd$1("n2i_wake_lock"), wakeLock = void 0;
    }
    if (e.addEventListener("release", t), e.released)
      throw "not acquired";
    dbg("Screen Wake Lock acquired"), wakeLock = e;
  }).catch((e) => {
    err("failed to acquire Wake Lock:", e), dispatchCustomEventFail("n2i_wake_lock"), wakeLock = void 0, e.message && e.message.includes("permissions policy") && (info("disable wake lock because of permissions policy"), wakeLockPermission = !1);
  }), wakeLock = !0);
}
function releaseWakeLock() {
  if (wakeLock != null && wakeLock.release)
    return wakeLock.release();
}
function refreshWakeLock() {
  !navigator.wakeLock || !config.wakeLock || !wakeLockPermission || (document.visibilityState === "visible" && connected ? requestWakeLock() : releaseWakeLock());
}
addEventListener("n2i_connected", function(e) {
  connected = !0, refreshWakeLock();
});
addEventListener("n2i_disconnected", function(e) {
  connected = !1, refreshWakeLock();
});
let hasFocus = !0;
function checkFocus() {
  hasFocus != document.hasFocus() && (dbg("Focus changed to: ", document.hasFocus()), hasFocus = document.hasFocus(), computeMuted());
}
setInterval(checkFocus, 200);
document.addEventListener("focus", checkFocus);
document.addEventListener("blur", checkFocus);
let visibleCallback;
function checkVisibility() {
  document.visibilityState === "visible" ? (cancelInvisibilityTimeout(), visibleCallback && (visibleCallback(), visibleCallback = void 0)) : scheduleInvisibilityTimeout(), computeMuted(), refreshWakeLock();
}
setInterval(checkVisibility, 1e3);
document.addEventListener("visibilitychange", checkVisibility);
document.addEventListener("visibilitychange", () => {
  dispatchCustomEvent$1("n2i_visibility_change", document.visibilityState);
});
function adShowed(e) {
  showingAd = !0, computeMuted();
}
function adHidden(e) {
  showingAd = !1, computeMuted();
}
addEventListener("n2i_ad_start", adShowed);
addEventListener("n2i_ad_end", adHidden);
let appBackupsInc = {};
addEventListener("n2i_pip3d_custom_packet_data", function(e) {
  const t = e.detail.type;
  e.detail.data;
  const n = e.detail.str, i = e.detail.binData;
  switch (t) {
    case CustomPacketTypes.RECENT_TASK: {
      const r = JSON.parse(n);
      switch (r.cmd) {
        case "backup":
          sessionStorageImpersonator.setItem("recentTaskBackup", JSON.stringify(r.data)), info("task backup saved, asking new container"), dispatchCustomEvent$1("n2i_request_new_container");
          break;
      }
      break;
    }
    case CustomPacketTypes.APP: {
      const r = JSON.parse(n);
      switch (r.cmd) {
        case "backup":
          let o = null;
          if (r.flags !== void 0 ? (r.flags.includes("S") && (appBackupsInc[r.package] = {
            type: r.type,
            data: []
          }), appBackupsInc[r.package].data = appBackupsInc[r.package].data.concat(Array.from(i)), r.flags.includes("E") && (o = {
            [r.package]: appBackupsInc[r.package]
          }, delete appBackupsInc[r.package])) : o = {
            [r.package]: {
              type: r.type,
              data: Array.from(i)
            }
          }, o) {
            const s = localStorageImpersonator.getItem(config.appBackupsName);
            let a = s ? JSON.parse(s) : {};
            a = g(g({}, a), o);
            const c = JSON.stringify(a);
            localStorageImpersonator.setItem(config.appBackupsName, c), info(`${r.package} backup saved to local storage, total size=${c.length}`), dispatchCustomEventEnd$1("n2i_app_backup", r.package, c.length);
          }
          break;
      }
      switch (r.event) {
        case "started":
          info(`${r.package} started`), dispatchCustomEventEnd$1("n2i_app_start", r.package);
          break;
        case "restored":
          if (info(`${r.package} restored`), r.package) {
            if (dispatchCustomEventEnd$1("n2i_app_restore", r.package), config.autofitOnRestore) {
              const { width: s, height: a, density: c, orientation: d } = getWindowResolution();
              sendCustomPacket(CustomPacketTypes.DISPLAY_INFO, `-1 -1 ${s} ${a} ${c} ${d} \0`);
            }
          } else
            dispatchCustomEventFail("n2i_app_restore");
          break;
        case "backup_error":
          err("backup_error", r), dispatchCustomEventFail("n2i_app_backup", r == null ? void 0 : r.error);
          break;
        case "url":
          info(`url opened from app: ${r.url}`), dispatchCustomEvent$1("n2i_open_url", r.url);
          break;
        case "data":
          info(`data from app: data: ${r.data} extras: ${JSON.stringify(r.extras)}`);
          const o = g(g({}, r.data && { data: r.data }), r.extras && { extras: r.extras });
          dispatchCustomEvent$1("n2i_data", o), config.dataEventFallback && r.data && dispatchCustomEvent$1("n2i_open_url", r.data);
          break;
        case "share":
          info(`share opened from app: title=${r.title} text=${r.text}`), dispatchCustomEvent$1("n2i_share", {
            title: r.title,
            text: r.text
          });
          break;
      }
      break;
    }
  }
  (t & CustomPacketTypes.P3D) != CustomPacketTypes.P3D && t != 4342338 && dispatchCustomEvent$1("n2i_custom_packet", e.detail);
});
function backupAtConnect() {
  if (config.backupAtConnect)
    if (info(`backupAtConnect ${config.backupAtConnect} after ${config.backupAtConnectAfterInputs} inputs`), config.backupAtConnectAfterInputs <= 0)
      backupApp(config.backupAtConnect);
    else {
      let e = 0;
      const t = function(n) {
        ++e < config.backupAtConnectAfterInputs || (removeEventListener("mouseup", t), removeEventListener("touchend", t), removeEventListener("keyup", t), info(`trigger backup after ${e} inputs`), backupApp(config.backupAtConnect));
      };
      addEventListener("mouseup", t), addEventListener("touchend", t), addEventListener("keyup", t);
    }
}
addEventListener("n2i_connection_end", function(e) {
  const t = e.detail;
  let n = localStorageImpersonator.getItem(config.appBackupsName);
  function i() {
    backupAtConnect(), removeEventListener("n2i_app_restore_fail", r), removeEventListener("n2i_app_restore_fail", i);
    const c = sessionStorageImpersonator.getItem("recentTaskBackup");
    if (c) {
      if (n) {
        const d = {
          cmd: "restore",
          data: JSON.parse(c)
        };
        info("restore task backup..."), pip3d_ctx.sendCustomPacket(CustomPacketTypes.RECENT_TASK, JSON.stringify(d) + "\0");
      } else
        err("restore task backup not supported without application backup");
      sessionStorageImpersonator.removeItem("recentTaskBackup");
    }
    if (!config.deeplinksService && runnerConnectedCount == 1) {
      const d = config.deeplinksApp || config.deeplinkApp || config.startApp;
      d && startApp(d, config.deeplinksURI, config.startIntent);
    }
  }
  function r() {
    removeEventListener("n2i_app_restore_end", i), err("backup restoration failure"), disconnectedReason = "restore_fail", retryRunner = !1, disconnectPip3d(window.pip3d_ctx, disconnectedReason);
  }
  addEventListener("n2i_app_restore_end", i, { once: !0 }), dispatchCustomEventStart$1("n2i_app_restore");
  let o, s;
  n && (dbg("backup exists"), o = JSON.parse(n), s = Object.keys(o), s.length == 1 && s[0] == "@pm@" && (dbg("skip backup containing only @pm@"), n = void 0));
  const a = {
    cmd: "restore",
    clientId: t.clientId
  };
  if (n) {
    const c = config.backupCustomPacketSplitSize;
    for (const d of s) {
      const u = o[d];
      info(`restore ${d} backup from local storage`);
      const l = new Uint8Array(u.data);
      let p = 0, f = l.length, m = "S";
      for (; f > 0; ) {
        let I = Math.min(f, c);
        f <= c && (m += "E");
        const A = str2arr(JSON.stringify(_(g({}, a), {
          package: d,
          type: u.type,
          flags: m
        })) + "\0"), h = new Uint8Array(A.length + I);
        h.set(A), h.set(l.slice(p, p + I), A.length), pip3d_ctx.sendCustomPacket(CustomPacketTypes.APP, h), p += I, f -= I, m = "";
      }
    }
    addEventListener("n2i_app_restore_fail", r, { once: !0 });
  } else config.restorePackageBackupFromCache && t.clientId && !t.newClient ? (info("try restore backup from cache"), pip3d_ctx.sendCustomPacket(CustomPacketTypes.APP, JSON.stringify(a) + "\0"), addEventListener("n2i_app_restore_fail", i, { once: !0 })) : (info("no backup exists"), dispatchCustomEventEnd$1("n2i_app_restore", null));
});
function sendDeeplink(e, t) {
  info(`opening deeplinks app ${e} URI ${t}`), pip3d_ctx.sendCustomPacket(CustomPacketTypes.DEEP_LINKS, t + "	" + (e ? e + "	" : "") + "\0");
}
addEventListener("n2i_app_restore_end", function() {
  if (config.deeplinksService) {
    const e = config.deeplinksApp || config.deeplinkApp, t = config.deeplinksURI || "";
    e && sendDeeplink(e, t);
  }
});
function handlePrivateUrl(e) {
  var t;
  switch (dbg(`handle private url ${e}`), e) {
    case "https://n2i/close":
    case "n2i://close":
      const n = (t = window.pip3d_ctx) != null ? t : offlineStreamCtx;
      n && (disconnectedReason = e, retryOnDisconnected = !1, disconnectPip3d(n, disconnectedReason));
      break;
    case "n2i://gameplay/start":
      dispatchCustomEventStart$1("n2i_game");
      break;
    case "n2i://gameplay/stop":
      dispatchCustomEventEnd$1("n2i_game");
      break;
  }
  switch (!0) {
    case new RegExp(config.a2hsPrivateUrlRegex).test(e):
      dispatchCustomEvent$1("n2i_show_a2hs_from_url", e);
      break;
    case /^n2i:\/\/custom\/(.*)$/.test(e):
      const n = e.replace(/n2i:\/\/custom\/(.*)$/, "$1");
      dispatchCustomEvent$1("n2i_custom_event", n);
      break;
  }
}
addEventListener("n2i_open_url", function(e) {
  const t = e.detail;
  if (new URL(t), t.startsWith("n2i:") || t.startsWith("https://n2i/")) {
    handlePrivateUrl(t);
    return;
  }
  openUrlWithConfig(t, config.urlOpen);
});
addEventListener("n2i_share", function(e) {
  const t = e.detail;
  switch (config.shareMode) {
    case "disable":
      break;
    case "notify":
      dispatchCustomEvent$1("n2i_share_notify", t);
      break;
    case "open":
      let n = function(i) {
        dispatchCustomEvent$1("n2i_share_failed", t), err("failed to share:", i);
      };
      try {
        if (!navigator.canShare || !navigator.canShare(t))
          throw "not supported";
        const i = navigator.share(t);
        dispatchCustomEvent$1("n2i_share_opened", { share: i, shareData: t }), i.catch((r) => {
          r.name == "AbortError" ? dispatchCustomEvent$1("n2i_share_cancelled", t) : n(r);
        });
      } catch (i) {
        n(i);
      }
      break;
    default:
      err(`unsupported share mode=${config.share.mode}`);
      break;
  }
});
addEventListener("n2i_pip3d_first_frame", function(e) {
  if (config.duration) {
    dbg("setup duration", config.duration);
    const t = setTimeout(() => {
      var i;
      info(`duration (${config.duration}s) end`);
      const n = (i = window.pip3d_ctx) != null ? i : offlineStreamCtx;
      n && (disconnectedReason = "duration", retryOnDisconnected = !1, disconnectPip3d(n, disconnectedReason));
    }, config.duration * 1e3);
    if (addEventListener("n2i_pip3d_disconnected", () => {
      clearTimeout(t);
    }), config.countdown.enabled) {
      let n = function() {
        clearIntervalImmediate(d), o.classList.add("n2i-hidden");
      }, i = config.duration;
      const r = config.countdown.size, o = document.getElementById("n2i-countdown");
      o.style.width = `${r * 3}rem`, o.style.height = `${r * 3}rem`;
      const s = document.getElementById("n2i-countdown-remaining");
      s.style.fill = config.countdown.color, s.style.fontSize = `${r}rem`, o.querySelectorAll("svg > circle").forEach((u) => {
        u.style.stroke = config.countdown.color, u.style.strokeWidth = `${r * 0.3}rem`;
      });
      const c = o.querySelector("svg > circle + circle");
      c.style.strokeDashoffset = 0, o.classList.remove("n2i-hidden");
      const d = setIntervalImmediate(function() {
        i > 0 ? (s.innerHTML = i--, c.style.strokeDashoffset = (config.duration - i) / config.duration) : n();
      }, 1e3);
      addEventListener("n2i_pip3d_disconnected", n);
    }
  }
});
window.n2iPageClosedReason = void 0;
let pageClosedHandlerDone = !1;
function pageClosedHandler() {
  var t;
  if (pageClosedHandlerDone) return;
  disconnectedMessage = !1;
  const e = (t = window.pip3d_ctx) != null ? t : offlineStreamCtx;
  disconnectedReason = n2iPageClosedReason != null ? n2iPageClosedReason : "page closed", retryOnDisconnected = !1, disconnectPip3d(e, disconnectedReason), pageClosedHandlerDone = !0, n2iPageClosedReason = void 0, dbg("page closed");
}
addEventListener("unload", pageClosedHandler);
addEventListener("pagehide", pageClosedHandler);
document.addEventListener("DOMContentLoaded", function() {
  return H(this, null, function* () {
    info(`pip3d-frontend version ${pip3dFrontendVersion}`), config = objectAssignDeep(config, (yield configPromise).default), dispatchCustomEvent$1("n2i_config_loaded"), initSentry(), setDisplayMode(), info(`device type ${device$1.type} os ${device$1.os} display mode ${displayMode}`), fixupConfig();
    const e = [];
    dispatchCustomEventStart$1("n2i_init"), config.title && (document.title = config.title), initDom(), initA2HS(), initCTA(), initApi(), initTutorial(), initBack(), initExit(), e.push(initVisible()), e.push(initBackend()), e.push(initAdNetwork()), e.push(initStatus()), e.push(initTransition()), e.push(initMessage()), e.push(initAudio()), e.push(initMenu()), e.push(initAutoFullscreen()), e.push(initPip3d()), e.push(initOfflineStream()), e.push(initBackup()), e.push(initAssets().then(() => {
      const t = [];
      return t.push(initPlayer()), t.push(waitValidWindowSize().then(initAutoResize)), Promise.all(t);
    })), Promise.all(e).then(function() {
      dispatchCustomEventEnd$1("n2i_init");
    }).catch(function(t) {
      throw err("failed to initialize", t), dispatchCustomEventFail("n2i_init", t), captureException$1(t), t;
    });
  });
});
function isSessionStorageAvailable() {
  var e = "testKey", t = "testValue";
  try {
    sessionStorage.setItem(e, t);
    let n = sessionStorage.getItem(e);
    if (sessionStorage.removeItem(e), n != t)
      throw dbg("Stored value in sessionStorage is erroneous on get."), new Error("Stored value in sessionStorage is erroneous on get.");
    return dbg("sessionStorage is available"), !0;
  } catch (n) {
    return dbg("sessionStorage not available: ", n), !1;
  }
}
isSessionStorageAvailable() ? window.sessionStorageImpersonator = sessionStorage : (console.log("Session storage is not available, redefining it"), window.sessionStorageImpersonator = {
  storage: {},
  setItem: function(e, t) {
    this.storage[e] = t;
  },
  getItem: function(e) {
    return this.storage[e];
  },
  removeItem: function(e) {
    delete this.storage[e];
  },
  clear: function() {
    this.storage = {};
  },
  key: function(e) {
    err("calling undefined key method on redefined sessionStorageImpersonator");
  }
});
function isLocalStorageAvailable() {
  var e = "testKey", t = "testValue";
  try {
    localStorage.setItem(e, t);
    let n = localStorage.getItem(e);
    if (localStorage.removeItem(e), n != t)
      throw dbg("Stored value in localStorage is erroneous on get."), new Error("Stored value in localStorage is erroneous on get.");
    return dbg("LocalStorage is available"), !0;
  } catch (n) {
    return dbg("LocalStorage not available: ", n), !1;
  }
}
isLocalStorageAvailable() ? window.localStorageImpersonator = localStorage : (console.log("Local storage is not available, redefining it"), window.localStorageImpersonator = {
  storage: {},
  setItem: function(e, t) {
    this.storage[e] = t;
  },
  getItem: function(e) {
    return this.storage[e];
  },
  removeItem: function(e) {
    delete this.storage[e];
  },
  clear: function() {
    this.storage = {};
  },
  key: function(e) {
    error("calling undefined key method on redefined localStorageImpersonator");
  }
});
//# sourceMappingURL=pip3d-frontend.js.map
