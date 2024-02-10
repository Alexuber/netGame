(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === "childList")
        for (const a of n.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(s) {
    const n = {};
    return (
      s.integrity && (n.integrity = s.integrity),
      s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const n = e(s);
    fetch(s.href, n);
  }
})();
var nr = ((i) => (
    (i[(i.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
    (i[(i.WEBGL = 1)] = "WEBGL"),
    (i[(i.WEBGL2 = 2)] = "WEBGL2"),
    i
  ))(nr || {}),
  Eh = ((i) => (
    (i[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.WEBGL = 1)] = "WEBGL"),
    (i[(i.CANVAS = 2)] = "CANVAS"),
    i
  ))(Eh || {}),
  xn = ((i) => (
    (i[(i.COLOR = 16384)] = "COLOR"),
    (i[(i.DEPTH = 256)] = "DEPTH"),
    (i[(i.STENCIL = 1024)] = "STENCIL"),
    i
  ))(xn || {}),
  X = ((i) => (
    (i[(i.NORMAL = 0)] = "NORMAL"),
    (i[(i.ADD = 1)] = "ADD"),
    (i[(i.MULTIPLY = 2)] = "MULTIPLY"),
    (i[(i.SCREEN = 3)] = "SCREEN"),
    (i[(i.OVERLAY = 4)] = "OVERLAY"),
    (i[(i.DARKEN = 5)] = "DARKEN"),
    (i[(i.LIGHTEN = 6)] = "LIGHTEN"),
    (i[(i.COLOR_DODGE = 7)] = "COLOR_DODGE"),
    (i[(i.COLOR_BURN = 8)] = "COLOR_BURN"),
    (i[(i.HARD_LIGHT = 9)] = "HARD_LIGHT"),
    (i[(i.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
    (i[(i.DIFFERENCE = 11)] = "DIFFERENCE"),
    (i[(i.EXCLUSION = 12)] = "EXCLUSION"),
    (i[(i.HUE = 13)] = "HUE"),
    (i[(i.SATURATION = 14)] = "SATURATION"),
    (i[(i.COLOR = 15)] = "COLOR"),
    (i[(i.LUMINOSITY = 16)] = "LUMINOSITY"),
    (i[(i.NORMAL_NPM = 17)] = "NORMAL_NPM"),
    (i[(i.ADD_NPM = 18)] = "ADD_NPM"),
    (i[(i.SCREEN_NPM = 19)] = "SCREEN_NPM"),
    (i[(i.NONE = 20)] = "NONE"),
    (i[(i.SRC_OVER = 0)] = "SRC_OVER"),
    (i[(i.SRC_IN = 21)] = "SRC_IN"),
    (i[(i.SRC_OUT = 22)] = "SRC_OUT"),
    (i[(i.SRC_ATOP = 23)] = "SRC_ATOP"),
    (i[(i.DST_OVER = 24)] = "DST_OVER"),
    (i[(i.DST_IN = 25)] = "DST_IN"),
    (i[(i.DST_OUT = 26)] = "DST_OUT"),
    (i[(i.DST_ATOP = 27)] = "DST_ATOP"),
    (i[(i.ERASE = 26)] = "ERASE"),
    (i[(i.SUBTRACT = 28)] = "SUBTRACT"),
    (i[(i.XOR = 29)] = "XOR"),
    i
  ))(X || {}),
  ae = ((i) => (
    (i[(i.POINTS = 0)] = "POINTS"),
    (i[(i.LINES = 1)] = "LINES"),
    (i[(i.LINE_LOOP = 2)] = "LINE_LOOP"),
    (i[(i.LINE_STRIP = 3)] = "LINE_STRIP"),
    (i[(i.TRIANGLES = 4)] = "TRIANGLES"),
    (i[(i.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
    (i[(i.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"),
    i
  ))(ae || {}),
  w = ((i) => (
    (i[(i.RGBA = 6408)] = "RGBA"),
    (i[(i.RGB = 6407)] = "RGB"),
    (i[(i.RG = 33319)] = "RG"),
    (i[(i.RED = 6403)] = "RED"),
    (i[(i.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
    (i[(i.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
    (i[(i.RG_INTEGER = 33320)] = "RG_INTEGER"),
    (i[(i.RED_INTEGER = 36244)] = "RED_INTEGER"),
    (i[(i.ALPHA = 6406)] = "ALPHA"),
    (i[(i.LUMINANCE = 6409)] = "LUMINANCE"),
    (i[(i.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
    (i[(i.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
    (i[(i.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"),
    i
  ))(w || {}),
  Cr = ((i) => (
    (i[(i.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
    (i[(i.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
    (i[(i.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
    (i[(i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
      "TEXTURE_CUBE_MAP_POSITIVE_X"),
    (i[(i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_X"),
    (i[(i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Y"),
    (i[(i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
    (i[(i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Z"),
    (i[(i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Z"),
    i
  ))(Cr || {}),
  k = ((i) => (
    (i[(i.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
    (i[(i.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
    (i[(i.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
    (i[(i.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
    (i[(i.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
    (i[(i.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
    (i[(i.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
      "UNSIGNED_INT_10F_11F_11F_REV"),
    (i[(i.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
      "UNSIGNED_INT_2_10_10_10_REV"),
    (i[(i.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
    (i[(i.UNSIGNED_INT_5_9_9_9_REV = 35902)] = "UNSIGNED_INT_5_9_9_9_REV"),
    (i[(i.BYTE = 5120)] = "BYTE"),
    (i[(i.SHORT = 5122)] = "SHORT"),
    (i[(i.INT = 5124)] = "INT"),
    (i[(i.FLOAT = 5126)] = "FLOAT"),
    (i[(i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
      "FLOAT_32_UNSIGNED_INT_24_8_REV"),
    (i[(i.HALF_FLOAT = 36193)] = "HALF_FLOAT"),
    i
  ))(k || {}),
  D = ((i) => (
    (i[(i.FLOAT = 0)] = "FLOAT"),
    (i[(i.INT = 1)] = "INT"),
    (i[(i.UINT = 2)] = "UINT"),
    i
  ))(D || {}),
  ge = ((i) => (
    (i[(i.NEAREST = 0)] = "NEAREST"), (i[(i.LINEAR = 1)] = "LINEAR"), i
  ))(ge || {}),
  Oe = ((i) => (
    (i[(i.CLAMP = 33071)] = "CLAMP"),
    (i[(i.REPEAT = 10497)] = "REPEAT"),
    (i[(i.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"),
    i
  ))(Oe || {}),
  ce = ((i) => (
    (i[(i.OFF = 0)] = "OFF"),
    (i[(i.POW2 = 1)] = "POW2"),
    (i[(i.ON = 2)] = "ON"),
    (i[(i.ON_MANUAL = 3)] = "ON_MANUAL"),
    i
  ))(ce || {}),
  Rt = ((i) => (
    (i[(i.NPM = 0)] = "NPM"),
    (i[(i.UNPACK = 1)] = "UNPACK"),
    (i[(i.PMA = 2)] = "PMA"),
    (i[(i.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
    (i[(i.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
    (i[(i.PREMULTIPLIED_ALPHA = 2)] = "PREMULTIPLIED_ALPHA"),
    i
  ))(Rt || {}),
  se = ((i) => (
    (i[(i.NO = 0)] = "NO"),
    (i[(i.YES = 1)] = "YES"),
    (i[(i.AUTO = 2)] = "AUTO"),
    (i[(i.BLEND = 0)] = "BLEND"),
    (i[(i.CLEAR = 1)] = "CLEAR"),
    (i[(i.BLIT = 2)] = "BLIT"),
    i
  ))(se || {}),
  xa = ((i) => ((i[(i.AUTO = 0)] = "AUTO"), (i[(i.MANUAL = 1)] = "MANUAL"), i))(
    xa || {}
  ),
  Ot = ((i) => (
    (i.LOW = "lowp"), (i.MEDIUM = "mediump"), (i.HIGH = "highp"), i
  ))(Ot || {}),
  pt = ((i) => (
    (i[(i.NONE = 0)] = "NONE"),
    (i[(i.SCISSOR = 1)] = "SCISSOR"),
    (i[(i.STENCIL = 2)] = "STENCIL"),
    (i[(i.SPRITE = 3)] = "SPRITE"),
    (i[(i.COLOR = 4)] = "COLOR"),
    i
  ))(pt || {}),
  dt = ((i) => (
    (i[(i.NONE = 0)] = "NONE"),
    (i[(i.LOW = 2)] = "LOW"),
    (i[(i.MEDIUM = 4)] = "MEDIUM"),
    (i[(i.HIGH = 8)] = "HIGH"),
    i
  ))(dt || {}),
  he = ((i) => (
    (i[(i.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER"),
    (i[(i.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
    (i[(i.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"),
    i
  ))(he || {});
const yc = {
    createCanvas: (i, t) => {
      const e = document.createElement("canvas");
      return (e.width = i), (e.height = t), e;
    },
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (i, t) => fetch(i, t),
    parseXML: (i) => new DOMParser().parseFromString(i, "text/xml"),
  },
  F = { ADAPTER: yc, RESOLUTION: 1, CREATE_IMAGE_BITMAP: !1, ROUND_PIXELS: !1 };
var Ls = /iPhone/i,
  ka = /iPod/i,
  Ga = /iPad/i,
  Ha = /\biOS-universal(?:.+)Mac\b/i,
  Ns = /\bAndroid(?:.+)Mobile\b/i,
  $a = /Android/i,
  lr = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  bi = /Silk/i,
  fe = /Windows Phone/i,
  Xa = /\bWindows(?:.+)ARM\b/i,
  Va = /BlackBerry/i,
  Wa = /BB10/i,
  za = /Opera Mini/i,
  ja = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  Ya = /Mobile(?:.+)Firefox\b/i,
  qa = function (i) {
    return (
      typeof i < "u" &&
      i.platform === "MacIntel" &&
      typeof i.maxTouchPoints == "number" &&
      i.maxTouchPoints > 1 &&
      typeof MSStream > "u"
    );
  };
function _c(i) {
  return function (t) {
    return t.test(i);
  };
}
function Ka(i) {
  var t = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !i && typeof navigator < "u"
    ? (t = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      })
    : typeof i == "string"
    ? (t.userAgent = i)
    : i &&
      i.userAgent &&
      (t = {
        userAgent: i.userAgent,
        platform: i.platform,
        maxTouchPoints: i.maxTouchPoints || 0,
      });
  var e = t.userAgent,
    r = e.split("[FBAN");
  typeof r[1] < "u" && (e = r[0]),
    (r = e.split("Twitter")),
    typeof r[1] < "u" && (e = r[0]);
  var s = _c(e),
    n = {
      apple: {
        phone: s(Ls) && !s(fe),
        ipod: s(ka),
        tablet: !s(Ls) && (s(Ga) || qa(t)) && !s(fe),
        universal: s(Ha),
        device: (s(Ls) || s(ka) || s(Ga) || s(Ha) || qa(t)) && !s(fe),
      },
      amazon: { phone: s(lr), tablet: !s(lr) && s(bi), device: s(lr) || s(bi) },
      android: {
        phone: (!s(fe) && s(lr)) || (!s(fe) && s(Ns)),
        tablet: !s(fe) && !s(lr) && !s(Ns) && (s(bi) || s($a)),
        device:
          (!s(fe) && (s(lr) || s(bi) || s(Ns) || s($a))) || s(/\bokhttp\b/i),
      },
      windows: { phone: s(fe), tablet: s(Xa), device: s(fe) || s(Xa) },
      other: {
        blackberry: s(Va),
        blackberry10: s(Wa),
        opera: s(za),
        firefox: s(Ya),
        chrome: s(ja),
        device: s(Va) || s(Wa) || s(za) || s(Ya) || s(ja),
      },
      any: !1,
      phone: !1,
      tablet: !1,
    };
  return (
    (n.any =
      n.apple.device || n.android.device || n.windows.device || n.other.device),
    (n.phone = n.apple.phone || n.android.phone || n.windows.phone),
    (n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet),
    n
  );
}
const vc = Ka.default ?? Ka,
  ye = vc(globalThis.navigator);
F.RETINA_PREFIX = /@([0-9\.]+)x/;
F.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var zi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ah(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
function xc(i) {
  if (i.__esModule) return i;
  var t = i.default;
  if (typeof t == "function") {
    var e = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return (
    Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.keys(i).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(i, r);
      Object.defineProperty(
        e,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return i[r];
              },
            }
      );
    }),
    e
  );
}
var wh = { exports: {} };
(function (i) {
  var t = Object.prototype.hasOwnProperty,
    e = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (e = !1));
  function s(h, l, c) {
    (this.fn = h), (this.context = l), (this.once = c || !1);
  }
  function n(h, l, c, u, d) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(c, u || h, d),
      p = e ? e + l : l;
    return (
      h._events[p]
        ? h._events[p].fn
          ? (h._events[p] = [h._events[p], f])
          : h._events[p].push(f)
        : ((h._events[p] = f), h._eventsCount++),
      h
    );
  }
  function a(h, l) {
    --h._eventsCount === 0 ? (h._events = new r()) : delete h._events[l];
  }
  function o() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (o.prototype.eventNames = function () {
    var l = [],
      c,
      u;
    if (this._eventsCount === 0) return l;
    for (u in (c = this._events)) t.call(c, u) && l.push(e ? u.slice(1) : u);
    return Object.getOwnPropertySymbols
      ? l.concat(Object.getOwnPropertySymbols(c))
      : l;
  }),
    (o.prototype.listeners = function (l) {
      var c = e ? e + l : l,
        u = this._events[c];
      if (!u) return [];
      if (u.fn) return [u.fn];
      for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
        p[d] = u[d].fn;
      return p;
    }),
    (o.prototype.listenerCount = function (l) {
      var c = e ? e + l : l,
        u = this._events[c];
      return u ? (u.fn ? 1 : u.length) : 0;
    }),
    (o.prototype.emit = function (l, c, u, d, f, p) {
      var m = e ? e + l : l;
      if (!this._events[m]) return !1;
      var g = this._events[m],
        _ = arguments.length,
        x,
        y;
      if (g.fn) {
        switch ((g.once && this.removeListener(l, g.fn, void 0, !0), _)) {
          case 1:
            return g.fn.call(g.context), !0;
          case 2:
            return g.fn.call(g.context, c), !0;
          case 3:
            return g.fn.call(g.context, c, u), !0;
          case 4:
            return g.fn.call(g.context, c, u, d), !0;
          case 5:
            return g.fn.call(g.context, c, u, d, f), !0;
          case 6:
            return g.fn.call(g.context, c, u, d, f, p), !0;
        }
        for (y = 1, x = new Array(_ - 1); y < _; y++) x[y - 1] = arguments[y];
        g.fn.apply(g.context, x);
      } else {
        var v = g.length,
          T;
        for (y = 0; y < v; y++)
          switch (
            (g[y].once && this.removeListener(l, g[y].fn, void 0, !0), _)
          ) {
            case 1:
              g[y].fn.call(g[y].context);
              break;
            case 2:
              g[y].fn.call(g[y].context, c);
              break;
            case 3:
              g[y].fn.call(g[y].context, c, u);
              break;
            case 4:
              g[y].fn.call(g[y].context, c, u, d);
              break;
            default:
              if (!x)
                for (T = 1, x = new Array(_ - 1); T < _; T++)
                  x[T - 1] = arguments[T];
              g[y].fn.apply(g[y].context, x);
          }
      }
      return !0;
    }),
    (o.prototype.on = function (l, c, u) {
      return n(this, l, c, u, !1);
    }),
    (o.prototype.once = function (l, c, u) {
      return n(this, l, c, u, !0);
    }),
    (o.prototype.removeListener = function (l, c, u, d) {
      var f = e ? e + l : l;
      if (!this._events[f]) return this;
      if (!c) return a(this, f), this;
      var p = this._events[f];
      if (p.fn)
        p.fn === c && (!d || p.once) && (!u || p.context === u) && a(this, f);
      else {
        for (var m = 0, g = [], _ = p.length; m < _; m++)
          (p[m].fn !== c || (d && !p[m].once) || (u && p[m].context !== u)) &&
            g.push(p[m]);
        g.length ? (this._events[f] = g.length === 1 ? g[0] : g) : a(this, f);
      }
      return this;
    }),
    (o.prototype.removeAllListeners = function (l) {
      var c;
      return (
        l
          ? ((c = e ? e + l : l), this._events[c] && a(this, c))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.addListener = o.prototype.on),
    (o.prefixed = e),
    (o.EventEmitter = o),
    (i.exports = o);
})(wh);
var bc = wh.exports;
const mi = Ah(bc);
var ba = { exports: {} };
ba.exports = Es;
ba.exports.default = Es;
function Es(i, t, e) {
  e = e || 2;
  var r = t && t.length,
    s = r ? t[0] * e : i.length,
    n = Sh(i, 0, s, e, !0),
    a = [];
  if (!n || n.next === n.prev) return a;
  var o, h, l, c, u, d, f;
  if ((r && (n = Sc(i, t, n, e)), i.length > 80 * e)) {
    (o = l = i[0]), (h = c = i[1]);
    for (var p = e; p < s; p += e)
      (u = i[p]),
        (d = i[p + 1]),
        u < o && (o = u),
        d < h && (h = d),
        u > l && (l = u),
        d > c && (c = d);
    (f = Math.max(l - o, c - h)), (f = f !== 0 ? 32767 / f : 0);
  }
  return li(n, a, e, o, h, f, 0), a;
}
function Sh(i, t, e, r, s) {
  var n, a;
  if (s === En(i, t, e, r) > 0)
    for (n = t; n < e; n += r) a = Za(n, i[n], i[n + 1], a);
  else for (n = e - r; n >= t; n -= r) a = Za(n, i[n], i[n + 1], a);
  return a && As(a, a.next) && (ui(a), (a = a.next)), a;
}
function rr(i, t) {
  if (!i) return i;
  t || (t = i);
  var e = i,
    r;
  do
    if (
      ((r = !1), !e.steiner && (As(e, e.next) || at(e.prev, e, e.next) === 0))
    ) {
      if ((ui(e), (e = t = e.prev), e === e.next)) break;
      r = !0;
    } else e = e.next;
  while (r || e !== t);
  return t;
}
function li(i, t, e, r, s, n, a) {
  if (i) {
    !a && n && Mc(i, r, s, n);
    for (var o = i, h, l; i.prev !== i.next; ) {
      if (((h = i.prev), (l = i.next), n ? Ec(i, r, s, n) : Tc(i))) {
        t.push((h.i / e) | 0),
          t.push((i.i / e) | 0),
          t.push((l.i / e) | 0),
          ui(i),
          (i = l.next),
          (o = l.next);
        continue;
      }
      if (((i = l), i === o)) {
        a
          ? a === 1
            ? ((i = Ac(rr(i), t, e)), li(i, t, e, r, s, n, 2))
            : a === 2 && wc(i, t, e, r, s, n)
          : li(rr(i), t, e, r, s, n, 1);
        break;
      }
    }
  }
}
function Tc(i) {
  var t = i.prev,
    e = i,
    r = i.next;
  if (at(t, e, r) >= 0) return !1;
  for (
    var s = t.x,
      n = e.x,
      a = r.x,
      o = t.y,
      h = e.y,
      l = r.y,
      c = s < n ? (s < a ? s : a) : n < a ? n : a,
      u = o < h ? (o < l ? o : l) : h < l ? h : l,
      d = s > n ? (s > a ? s : a) : n > a ? n : a,
      f = o > h ? (o > l ? o : l) : h > l ? h : l,
      p = r.next;
    p !== t;

  ) {
    if (
      p.x >= c &&
      p.x <= d &&
      p.y >= u &&
      p.y <= f &&
      Tr(s, o, n, h, a, l, p.x, p.y) &&
      at(p.prev, p, p.next) >= 0
    )
      return !1;
    p = p.next;
  }
  return !0;
}
function Ec(i, t, e, r) {
  var s = i.prev,
    n = i,
    a = i.next;
  if (at(s, n, a) >= 0) return !1;
  for (
    var o = s.x,
      h = n.x,
      l = a.x,
      c = s.y,
      u = n.y,
      d = a.y,
      f = o < h ? (o < l ? o : l) : h < l ? h : l,
      p = c < u ? (c < d ? c : d) : u < d ? u : d,
      m = o > h ? (o > l ? o : l) : h > l ? h : l,
      g = c > u ? (c > d ? c : d) : u > d ? u : d,
      _ = bn(f, p, t, e, r),
      x = bn(m, g, t, e, r),
      y = i.prevZ,
      v = i.nextZ;
    y && y.z >= _ && v && v.z <= x;

  ) {
    if (
      (y.x >= f &&
        y.x <= m &&
        y.y >= p &&
        y.y <= g &&
        y !== s &&
        y !== a &&
        Tr(o, c, h, u, l, d, y.x, y.y) &&
        at(y.prev, y, y.next) >= 0) ||
      ((y = y.prevZ),
      v.x >= f &&
        v.x <= m &&
        v.y >= p &&
        v.y <= g &&
        v !== s &&
        v !== a &&
        Tr(o, c, h, u, l, d, v.x, v.y) &&
        at(v.prev, v, v.next) >= 0)
    )
      return !1;
    v = v.nextZ;
  }
  for (; y && y.z >= _; ) {
    if (
      y.x >= f &&
      y.x <= m &&
      y.y >= p &&
      y.y <= g &&
      y !== s &&
      y !== a &&
      Tr(o, c, h, u, l, d, y.x, y.y) &&
      at(y.prev, y, y.next) >= 0
    )
      return !1;
    y = y.prevZ;
  }
  for (; v && v.z <= x; ) {
    if (
      v.x >= f &&
      v.x <= m &&
      v.y >= p &&
      v.y <= g &&
      v !== s &&
      v !== a &&
      Tr(o, c, h, u, l, d, v.x, v.y) &&
      at(v.prev, v, v.next) >= 0
    )
      return !1;
    v = v.nextZ;
  }
  return !0;
}
function Ac(i, t, e) {
  var r = i;
  do {
    var s = r.prev,
      n = r.next.next;
    !As(s, n) &&
      Ch(s, r, r.next, n) &&
      ci(s, n) &&
      ci(n, s) &&
      (t.push((s.i / e) | 0),
      t.push((r.i / e) | 0),
      t.push((n.i / e) | 0),
      ui(r),
      ui(r.next),
      (r = i = n)),
      (r = r.next);
  } while (r !== i);
  return rr(r);
}
function wc(i, t, e, r, s, n) {
  var a = i;
  do {
    for (var o = a.next.next; o !== a.prev; ) {
      if (a.i !== o.i && Fc(a, o)) {
        var h = Ih(a, o);
        (a = rr(a, a.next)),
          (h = rr(h, h.next)),
          li(a, t, e, r, s, n, 0),
          li(h, t, e, r, s, n, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function Sc(i, t, e, r) {
  var s = [],
    n,
    a,
    o,
    h,
    l;
  for (n = 0, a = t.length; n < a; n++)
    (o = t[n] * r),
      (h = n < a - 1 ? t[n + 1] * r : i.length),
      (l = Sh(i, o, h, r, !1)),
      l === l.next && (l.steiner = !0),
      s.push(Dc(l));
  for (s.sort(Cc), n = 0; n < s.length; n++) e = Ic(s[n], e);
  return e;
}
function Cc(i, t) {
  return i.x - t.x;
}
function Ic(i, t) {
  var e = Rc(i, t);
  if (!e) return t;
  var r = Ih(e, i);
  return rr(r, r.next), rr(e, e.next);
}
function Rc(i, t) {
  var e = t,
    r = i.x,
    s = i.y,
    n = -1 / 0,
    a;
  do {
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      var o = e.x + ((s - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (
        o <= r &&
        o > n &&
        ((n = o), (a = e.x < e.next.x ? e : e.next), o === r)
      )
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  var h = a,
    l = a.x,
    c = a.y,
    u = 1 / 0,
    d;
  e = a;
  do
    r >= e.x &&
      e.x >= l &&
      r !== e.x &&
      Tr(s < c ? r : n, s, l, c, s < c ? n : r, s, e.x, e.y) &&
      ((d = Math.abs(s - e.y) / (r - e.x)),
      ci(e, i) &&
        (d < u || (d === u && (e.x > a.x || (e.x === a.x && Pc(a, e))))) &&
        ((a = e), (u = d))),
      (e = e.next);
  while (e !== h);
  return a;
}
function Pc(i, t) {
  return at(i.prev, i, t.prev) < 0 && at(t.next, i, i.next) < 0;
}
function Mc(i, t, e, r) {
  var s = i;
  do
    s.z === 0 && (s.z = bn(s.x, s.y, t, e, r)),
      (s.prevZ = s.prev),
      (s.nextZ = s.next),
      (s = s.next);
  while (s !== i);
  (s.prevZ.nextZ = null), (s.prevZ = null), Bc(s);
}
function Bc(i) {
  var t,
    e,
    r,
    s,
    n,
    a,
    o,
    h,
    l = 1;
  do {
    for (e = i, i = null, n = null, a = 0; e; ) {
      for (a++, r = e, o = 0, t = 0; t < l && (o++, (r = r.nextZ), !!r); t++);
      for (h = l; o > 0 || (h > 0 && r); )
        o !== 0 && (h === 0 || !r || e.z <= r.z)
          ? ((s = e), (e = e.nextZ), o--)
          : ((s = r), (r = r.nextZ), h--),
          n ? (n.nextZ = s) : (i = s),
          (s.prevZ = n),
          (n = s);
      e = r;
    }
    (n.nextZ = null), (l *= 2);
  } while (a > 1);
  return i;
}
function bn(i, t, e, r, s) {
  return (
    (i = ((i - e) * s) | 0),
    (t = ((t - r) * s) | 0),
    (i = (i | (i << 8)) & 16711935),
    (i = (i | (i << 4)) & 252645135),
    (i = (i | (i << 2)) & 858993459),
    (i = (i | (i << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    i | (t << 1)
  );
}
function Dc(i) {
  var t = i,
    e = i;
  do (t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next);
  while (t !== i);
  return e;
}
function Tr(i, t, e, r, s, n, a, o) {
  return (
    (s - a) * (t - o) >= (i - a) * (n - o) &&
    (i - a) * (r - o) >= (e - a) * (t - o) &&
    (e - a) * (n - o) >= (s - a) * (r - o)
  );
}
function Fc(i, t) {
  return (
    i.next.i !== t.i &&
    i.prev.i !== t.i &&
    !Oc(i, t) &&
    ((ci(i, t) &&
      ci(t, i) &&
      Lc(i, t) &&
      (at(i.prev, i, t.prev) || at(i, t.prev, t))) ||
      (As(i, t) && at(i.prev, i, i.next) > 0 && at(t.prev, t, t.next) > 0))
  );
}
function at(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function As(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Ch(i, t, e, r) {
  var s = Ei(at(i, t, e)),
    n = Ei(at(i, t, r)),
    a = Ei(at(e, r, i)),
    o = Ei(at(e, r, t));
  return !!(
    (s !== n && a !== o) ||
    (s === 0 && Ti(i, e, t)) ||
    (n === 0 && Ti(i, r, t)) ||
    (a === 0 && Ti(e, i, r)) ||
    (o === 0 && Ti(e, t, r))
  );
}
function Ti(i, t, e) {
  return (
    t.x <= Math.max(i.x, e.x) &&
    t.x >= Math.min(i.x, e.x) &&
    t.y <= Math.max(i.y, e.y) &&
    t.y >= Math.min(i.y, e.y)
  );
}
function Ei(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function Oc(i, t) {
  var e = i;
  do {
    if (
      e.i !== i.i &&
      e.next.i !== i.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      Ch(e, e.next, i, t)
    )
      return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function ci(i, t) {
  return at(i.prev, i, i.next) < 0
    ? at(i, t, i.next) >= 0 && at(i, i.prev, t) >= 0
    : at(i, t, i.prev) < 0 || at(i, i.next, t) < 0;
}
function Lc(i, t) {
  var e = i,
    r = !1,
    s = (i.x + t.x) / 2,
    n = (i.y + t.y) / 2;
  do
    e.y > n != e.next.y > n &&
      e.next.y !== e.y &&
      s < ((e.next.x - e.x) * (n - e.y)) / (e.next.y - e.y) + e.x &&
      (r = !r),
      (e = e.next);
  while (e !== i);
  return r;
}
function Ih(i, t) {
  var e = new Tn(i.i, i.x, i.y),
    r = new Tn(t.i, t.x, t.y),
    s = i.next,
    n = t.prev;
  return (
    (i.next = t),
    (t.prev = i),
    (e.next = s),
    (s.prev = e),
    (r.next = e),
    (e.prev = r),
    (n.next = r),
    (r.prev = n),
    r
  );
}
function Za(i, t, e, r) {
  var s = new Tn(i, t, e);
  return (
    r
      ? ((s.next = r.next), (s.prev = r), (r.next.prev = s), (r.next = s))
      : ((s.prev = s), (s.next = s)),
    s
  );
}
function ui(i) {
  (i.next.prev = i.prev),
    (i.prev.next = i.next),
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function Tn(i, t, e) {
  (this.i = i),
    (this.x = t),
    (this.y = e),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
Es.deviation = function (i, t, e, r) {
  var s = t && t.length,
    n = s ? t[0] * e : i.length,
    a = Math.abs(En(i, 0, n, e));
  if (s)
    for (var o = 0, h = t.length; o < h; o++) {
      var l = t[o] * e,
        c = o < h - 1 ? t[o + 1] * e : i.length;
      a -= Math.abs(En(i, l, c, e));
    }
  var u = 0;
  for (o = 0; o < r.length; o += 3) {
    var d = r[o] * e,
      f = r[o + 1] * e,
      p = r[o + 2] * e;
    u += Math.abs(
      (i[d] - i[p]) * (i[f + 1] - i[d + 1]) -
        (i[d] - i[f]) * (i[p + 1] - i[d + 1])
    );
  }
  return a === 0 && u === 0 ? 0 : Math.abs((u - a) / a);
};
function En(i, t, e, r) {
  for (var s = 0, n = t, a = e - r; n < e; n += r)
    (s += (i[a] - i[n]) * (i[n + 1] + i[a + 1])), (a = n);
  return s;
}
Es.flatten = function (i) {
  for (
    var t = i[0][0].length,
      e = { vertices: [], holes: [], dimensions: t },
      r = 0,
      s = 0;
    s < i.length;
    s++
  ) {
    for (var n = 0; n < i[s].length; n++)
      for (var a = 0; a < t; a++) e.vertices.push(i[s][n][a]);
    s > 0 && ((r += i[s - 1].length), e.holes.push(r));
  }
  return e;
};
var Nc = ba.exports;
const Uc = Ah(Nc);
var ss = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */ ss.exports;
(function (i, t) {
  (function (e) {
    var r = t && !t.nodeType && t,
      s = i && !i.nodeType && i,
      n = typeof zi == "object" && zi;
    (n.global === n || n.window === n || n.self === n) && (e = n);
    var a,
      o = 2147483647,
      h = 36,
      l = 1,
      c = 26,
      u = 38,
      d = 700,
      f = 72,
      p = 128,
      m = "-",
      g = /^xn--/,
      _ = /[^\x20-\x7E]/,
      x = /[\x2E\u3002\uFF0E\uFF61]/g,
      y = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      v = h - l,
      T = Math.floor,
      M = String.fromCharCode,
      A;
    function E(I) {
      throw new RangeError(y[I]);
    }
    function B(I, C) {
      for (var Z = I.length, J = []; Z--; ) J[Z] = C(I[Z]);
      return J;
    }
    function U(I, C) {
      var Z = I.split("@"),
        J = "";
      Z.length > 1 && ((J = Z[0] + "@"), (I = Z[1])), (I = I.replace(x, "."));
      var tt = I.split("."),
        gt = B(tt, C).join(".");
      return J + gt;
    }
    function Y(I) {
      for (var C = [], Z = 0, J = I.length, tt, gt; Z < J; )
        (tt = I.charCodeAt(Z++)),
          tt >= 55296 && tt <= 56319 && Z < J
            ? ((gt = I.charCodeAt(Z++)),
              (gt & 64512) == 56320
                ? C.push(((tt & 1023) << 10) + (gt & 1023) + 65536)
                : (C.push(tt), Z--))
            : C.push(tt);
      return C;
    }
    function P(I) {
      return B(I, function (C) {
        var Z = "";
        return (
          C > 65535 &&
            ((C -= 65536),
            (Z += M(((C >>> 10) & 1023) | 55296)),
            (C = 56320 | (C & 1023))),
          (Z += M(C)),
          Z
        );
      }).join("");
    }
    function b(I) {
      return I - 48 < 10
        ? I - 22
        : I - 65 < 26
        ? I - 65
        : I - 97 < 26
        ? I - 97
        : h;
    }
    function S(I, C) {
      return I + 22 + 75 * (I < 26) - ((C != 0) << 5);
    }
    function G(I, C, Z) {
      var J = 0;
      for (I = Z ? T(I / d) : I >> 1, I += T(I / C); I > (v * c) >> 1; J += h)
        I = T(I / v);
      return T(J + ((v + 1) * I) / (I + u));
    }
    function V(I) {
      var C = [],
        Z = I.length,
        J,
        tt = 0,
        gt = p,
        ct = f,
        yt,
        wt,
        Pt,
        Tt,
        st,
        ut,
        ft,
        Kt,
        Zt;
      for (yt = I.lastIndexOf(m), yt < 0 && (yt = 0), wt = 0; wt < yt; ++wt)
        I.charCodeAt(wt) >= 128 && E("not-basic"), C.push(I.charCodeAt(wt));
      for (Pt = yt > 0 ? yt + 1 : 0; Pt < Z; ) {
        for (
          Tt = tt, st = 1, ut = h;
          Pt >= Z && E("invalid-input"),
            (ft = b(I.charCodeAt(Pt++))),
            (ft >= h || ft > T((o - tt) / st)) && E("overflow"),
            (tt += ft * st),
            (Kt = ut <= ct ? l : ut >= ct + c ? c : ut - ct),
            !(ft < Kt);
          ut += h
        )
          (Zt = h - Kt), st > T(o / Zt) && E("overflow"), (st *= Zt);
        (J = C.length + 1),
          (ct = G(tt - Tt, J, Tt == 0)),
          T(tt / J) > o - gt && E("overflow"),
          (gt += T(tt / J)),
          (tt %= J),
          C.splice(tt++, 0, gt);
      }
      return P(C);
    }
    function $(I) {
      var C,
        Z,
        J,
        tt,
        gt,
        ct,
        yt,
        wt,
        Pt,
        Tt,
        st,
        ut = [],
        ft,
        Kt,
        Zt,
        Vr;
      for (I = Y(I), ft = I.length, C = p, Z = 0, gt = f, ct = 0; ct < ft; ++ct)
        (st = I[ct]), st < 128 && ut.push(M(st));
      for (J = tt = ut.length, tt && ut.push(m); J < ft; ) {
        for (yt = o, ct = 0; ct < ft; ++ct)
          (st = I[ct]), st >= C && st < yt && (yt = st);
        for (
          Kt = J + 1,
            yt - C > T((o - Z) / Kt) && E("overflow"),
            Z += (yt - C) * Kt,
            C = yt,
            ct = 0;
          ct < ft;
          ++ct
        )
          if (((st = I[ct]), st < C && ++Z > o && E("overflow"), st == C)) {
            for (
              wt = Z, Pt = h;
              (Tt = Pt <= gt ? l : Pt >= gt + c ? c : Pt - gt), !(wt < Tt);
              Pt += h
            )
              (Vr = wt - Tt),
                (Zt = h - Tt),
                ut.push(M(S(Tt + (Vr % Zt), 0))),
                (wt = T(Vr / Zt));
            ut.push(M(S(wt, 0))), (gt = G(Z, Kt, J == tt)), (Z = 0), ++J;
          }
        ++Z, ++C;
      }
      return ut.join("");
    }
    function z(I) {
      return U(I, function (C) {
        return g.test(C) ? V(C.slice(4).toLowerCase()) : C;
      });
    }
    function ht(I) {
      return U(I, function (C) {
        return _.test(C) ? "xn--" + $(C) : C;
      });
    }
    if (
      ((a = {
        version: "1.4.1",
        ucs2: { decode: Y, encode: P },
        decode: V,
        encode: $,
        toASCII: ht,
        toUnicode: z,
      }),
      r && s)
    )
      if (i.exports == r) s.exports = a;
      else for (A in a) a.hasOwnProperty(A) && (r[A] = a[A]);
    else e.punycode = a;
  })(zi);
})(ss, ss.exports);
var kc = ss.exports,
  Gc = Error,
  Hc = EvalError,
  $c = RangeError,
  Xc = ReferenceError,
  Rh = SyntaxError,
  gi = TypeError,
  Vc = URIError,
  Wc = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      e = Symbol("test"),
      r = Object(e);
    if (
      typeof e == "string" ||
      Object.prototype.toString.call(e) !== "[object Symbol]" ||
      Object.prototype.toString.call(r) !== "[object Symbol]"
    )
      return !1;
    var s = 42;
    t[e] = s;
    for (e in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var n = Object.getOwnPropertySymbols(t);
    if (
      n.length !== 1 ||
      n[0] !== e ||
      !Object.prototype.propertyIsEnumerable.call(t, e)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(t, e);
      if (a.value !== s || a.enumerable !== !0) return !1;
    }
    return !0;
  },
  Qa = typeof Symbol < "u" && Symbol,
  zc = Wc,
  jc = function () {
    return typeof Qa != "function" ||
      typeof Symbol != "function" ||
      typeof Qa("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : zc();
  },
  Ja = { foo: {} },
  Yc = Object,
  qc = function () {
    return (
      { __proto__: Ja }.foo === Ja.foo && !({ __proto__: null } instanceof Yc)
    );
  },
  Kc = "Function.prototype.bind called on incompatible ",
  Zc = Object.prototype.toString,
  Qc = Math.max,
  Jc = "[object Function]",
  to = function (t, e) {
    for (var r = [], s = 0; s < t.length; s += 1) r[s] = t[s];
    for (var n = 0; n < e.length; n += 1) r[n + t.length] = e[n];
    return r;
  },
  tu = function (t, e) {
    for (var r = [], s = e || 0, n = 0; s < t.length; s += 1, n += 1)
      r[n] = t[s];
    return r;
  },
  eu = function (i, t) {
    for (var e = "", r = 0; r < i.length; r += 1)
      (e += i[r]), r + 1 < i.length && (e += t);
    return e;
  },
  ru = function (t) {
    var e = this;
    if (typeof e != "function" || Zc.apply(e) !== Jc)
      throw new TypeError(Kc + e);
    for (
      var r = tu(arguments, 1),
        s,
        n = function () {
          if (this instanceof s) {
            var c = e.apply(this, to(r, arguments));
            return Object(c) === c ? c : this;
          }
          return e.apply(t, to(r, arguments));
        },
        a = Qc(0, e.length - r.length),
        o = [],
        h = 0;
      h < a;
      h++
    )
      o[h] = "$" + h;
    if (
      ((s = Function(
        "binder",
        "return function (" +
          eu(o, ",") +
          "){ return binder.apply(this,arguments); }"
      )(n)),
      e.prototype)
    ) {
      var l = function () {};
      (l.prototype = e.prototype),
        (s.prototype = new l()),
        (l.prototype = null);
    }
    return s;
  },
  iu = ru,
  Ta = Function.prototype.bind || iu,
  su = Function.prototype.call,
  nu = Object.prototype.hasOwnProperty,
  au = Ta,
  ou = au.call(su, nu),
  K,
  hu = Gc,
  lu = Hc,
  cu = $c,
  uu = Xc,
  Lr = Rh,
  Ir = gi,
  du = Vc,
  Ph = Function,
  Us = function (i) {
    try {
      return Ph('"use strict"; return (' + i + ").constructor;")();
    } catch {}
  },
  Qe = Object.getOwnPropertyDescriptor;
if (Qe)
  try {
    Qe({}, "");
  } catch {
    Qe = null;
  }
var ks = function () {
    throw new Ir();
  },
  fu = Qe
    ? (function () {
        try {
          return arguments.callee, ks;
        } catch {
          try {
            return Qe(arguments, "callee").get;
          } catch {
            return ks;
          }
        }
      })()
    : ks,
  cr = jc(),
  pu = qc(),
  vt =
    Object.getPrototypeOf ||
    (pu
      ? function (i) {
          return i.__proto__;
        }
      : null),
  mr = {},
  mu = typeof Uint8Array > "u" || !vt ? K : vt(Uint8Array),
  Je = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? K : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? K : ArrayBuffer,
    "%ArrayIteratorPrototype%": cr && vt ? vt([][Symbol.iterator]()) : K,
    "%AsyncFromSyncIteratorPrototype%": K,
    "%AsyncFunction%": mr,
    "%AsyncGenerator%": mr,
    "%AsyncGeneratorFunction%": mr,
    "%AsyncIteratorPrototype%": mr,
    "%Atomics%": typeof Atomics > "u" ? K : Atomics,
    "%BigInt%": typeof BigInt > "u" ? K : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? K : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? K : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? K : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": hu,
    "%eval%": eval,
    "%EvalError%": lu,
    "%Float32Array%": typeof Float32Array > "u" ? K : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? K : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? K : FinalizationRegistry,
    "%Function%": Ph,
    "%GeneratorFunction%": mr,
    "%Int8Array%": typeof Int8Array > "u" ? K : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? K : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? K : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": cr && vt ? vt(vt([][Symbol.iterator]())) : K,
    "%JSON%": typeof JSON == "object" ? JSON : K,
    "%Map%": typeof Map > "u" ? K : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !cr || !vt ? K : vt(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? K : Promise,
    "%Proxy%": typeof Proxy > "u" ? K : Proxy,
    "%RangeError%": cu,
    "%ReferenceError%": uu,
    "%Reflect%": typeof Reflect > "u" ? K : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? K : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !cr || !vt ? K : vt(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? K : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": cr && vt ? vt(""[Symbol.iterator]()) : K,
    "%Symbol%": cr ? Symbol : K,
    "%SyntaxError%": Lr,
    "%ThrowTypeError%": fu,
    "%TypedArray%": mu,
    "%TypeError%": Ir,
    "%Uint8Array%": typeof Uint8Array > "u" ? K : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? K : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? K : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? K : Uint32Array,
    "%URIError%": du,
    "%WeakMap%": typeof WeakMap > "u" ? K : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? K : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? K : WeakSet,
  };
if (vt)
  try {
    null.error;
  } catch (i) {
    var gu = vt(vt(i));
    Je["%Error.prototype%"] = gu;
  }
var yu = function i(t) {
    var e;
    if (t === "%AsyncFunction%") e = Us("async function () {}");
    else if (t === "%GeneratorFunction%") e = Us("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") e = Us("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var r = i("%AsyncGeneratorFunction%");
      r && (e = r.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var s = i("%AsyncGenerator%");
      s && vt && (e = vt(s.prototype));
    }
    return (Je[t] = e), e;
  },
  eo = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  yi = Ta,
  ns = ou,
  _u = yi.call(Function.call, Array.prototype.concat),
  vu = yi.call(Function.apply, Array.prototype.splice),
  ro = yi.call(Function.call, String.prototype.replace),
  as = yi.call(Function.call, String.prototype.slice),
  xu = yi.call(Function.call, RegExp.prototype.exec),
  bu =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Tu = /\\(\\)?/g,
  Eu = function (t) {
    var e = as(t, 0, 1),
      r = as(t, -1);
    if (e === "%" && r !== "%")
      throw new Lr("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && e !== "%")
      throw new Lr("invalid intrinsic syntax, expected opening `%`");
    var s = [];
    return (
      ro(t, bu, function (n, a, o, h) {
        s[s.length] = o ? ro(h, Tu, "$1") : a || n;
      }),
      s
    );
  },
  Au = function (t, e) {
    var r = t,
      s;
    if ((ns(eo, r) && ((s = eo[r]), (r = "%" + s[0] + "%")), ns(Je, r))) {
      var n = Je[r];
      if ((n === mr && (n = yu(r)), typeof n > "u" && !e))
        throw new Ir(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: s, name: r, value: n };
    }
    throw new Lr("intrinsic " + t + " does not exist!");
  },
  ar = function (t, e) {
    if (typeof t != "string" || t.length === 0)
      throw new Ir("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof e != "boolean")
      throw new Ir('"allowMissing" argument must be a boolean');
    if (xu(/^%?[^%]*%?$/, t) === null)
      throw new Lr(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = Eu(t),
      s = r.length > 0 ? r[0] : "",
      n = Au("%" + s + "%", e),
      a = n.name,
      o = n.value,
      h = !1,
      l = n.alias;
    l && ((s = l[0]), vu(r, _u([0, 1], l)));
    for (var c = 1, u = !0; c < r.length; c += 1) {
      var d = r[c],
        f = as(d, 0, 1),
        p = as(d, -1);
      if (
        (f === '"' ||
          f === "'" ||
          f === "`" ||
          p === '"' ||
          p === "'" ||
          p === "`") &&
        f !== p
      )
        throw new Lr("property names with quotes must have matching quotes");
      if (
        ((d === "constructor" || !u) && (h = !0),
        (s += "." + d),
        (a = "%" + s + "%"),
        ns(Je, a))
      )
        o = Je[a];
      else if (o != null) {
        if (!(d in o)) {
          if (!e)
            throw new Ir(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (Qe && c + 1 >= r.length) {
          var m = Qe(o, d);
          (u = !!m),
            u && "get" in m && !("originalValue" in m.get)
              ? (o = m.get)
              : (o = o[d]);
        } else (u = ns(o, d)), (o = o[d]);
        u && !h && (Je[a] = o);
      }
    }
    return o;
  },
  Mh = { exports: {} },
  wu = ar,
  An = wu("%Object.defineProperty%", !0),
  wn = function () {
    if (An)
      try {
        return An({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
wn.hasArrayLengthDefineBug = function () {
  if (!wn()) return null;
  try {
    return An([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Bh = wn,
  Su = ar,
  ji = Su("%Object.getOwnPropertyDescriptor%", !0);
if (ji)
  try {
    ji([], "length");
  } catch {
    ji = null;
  }
var Dh = ji,
  Cu = Bh(),
  Iu = ar,
  si = Cu && Iu("%Object.defineProperty%", !0);
if (si)
  try {
    si({}, "a", { value: 1 });
  } catch {
    si = !1;
  }
var Ru = Rh,
  ur = gi,
  io = Dh,
  Pu = function (t, e, r) {
    if (!t || (typeof t != "object" && typeof t != "function"))
      throw new ur("`obj` must be an object or a function`");
    if (typeof e != "string" && typeof e != "symbol")
      throw new ur("`property` must be a string or a symbol`");
    if (
      arguments.length > 3 &&
      typeof arguments[3] != "boolean" &&
      arguments[3] !== null
    )
      throw new ur("`nonEnumerable`, if provided, must be a boolean or null");
    if (
      arguments.length > 4 &&
      typeof arguments[4] != "boolean" &&
      arguments[4] !== null
    )
      throw new ur("`nonWritable`, if provided, must be a boolean or null");
    if (
      arguments.length > 5 &&
      typeof arguments[5] != "boolean" &&
      arguments[5] !== null
    )
      throw new ur("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new ur("`loose`, if provided, must be a boolean");
    var s = arguments.length > 3 ? arguments[3] : null,
      n = arguments.length > 4 ? arguments[4] : null,
      a = arguments.length > 5 ? arguments[5] : null,
      o = arguments.length > 6 ? arguments[6] : !1,
      h = !!io && io(t, e);
    if (si)
      si(t, e, {
        configurable: a === null && h ? h.configurable : !a,
        enumerable: s === null && h ? h.enumerable : !s,
        value: r,
        writable: n === null && h ? h.writable : !n,
      });
    else if (o || (!s && !n && !a)) t[e] = r;
    else
      throw new Ru(
        "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
      );
  },
  Mu = ar,
  so = Pu,
  Bu = Bh(),
  no = Dh,
  ao = gi,
  Du = Mu("%Math.floor%"),
  Fu = function (t, e) {
    if (typeof t != "function") throw new ao("`fn` is not a function");
    if (typeof e != "number" || e < 0 || e > 4294967295 || Du(e) !== e)
      throw new ao("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2],
      s = !0,
      n = !0;
    if ("length" in t && no) {
      var a = no(t, "length");
      a && !a.configurable && (s = !1), a && !a.writable && (n = !1);
    }
    return (
      (s || n || !r) && (Bu ? so(t, "length", e, !0, !0) : so(t, "length", e)),
      t
    );
  };
(function (i) {
  var t = Ta,
    e = ar,
    r = Fu,
    s = gi,
    n = e("%Function.prototype.apply%"),
    a = e("%Function.prototype.call%"),
    o = e("%Reflect.apply%", !0) || t.call(a, n),
    h = e("%Object.defineProperty%", !0),
    l = e("%Math.max%");
  if (h)
    try {
      h({}, "a", { value: 1 });
    } catch {
      h = null;
    }
  i.exports = function (d) {
    if (typeof d != "function") throw new s("a function is required");
    var f = o(t, a, arguments);
    return r(f, 1 + l(0, d.length - (arguments.length - 1)), !0);
  };
  var c = function () {
    return o(t, n, arguments);
  };
  h ? h(i.exports, "apply", { value: c }) : (i.exports.apply = c);
})(Mh);
var Ou = Mh.exports,
  Fh = ar,
  Oh = Ou,
  Lu = Oh(Fh("String.prototype.indexOf")),
  Nu = function (t, e) {
    var r = Fh(t, !!e);
    return typeof r == "function" && Lu(t, ".prototype.") > -1 ? Oh(r) : r;
  };
const Uu = {},
  ku = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Uu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Gu = xc(ku);
var Ea = typeof Map == "function" && Map.prototype,
  Gs =
    Object.getOwnPropertyDescriptor && Ea
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  os = Ea && Gs && typeof Gs.get == "function" ? Gs.get : null,
  oo = Ea && Map.prototype.forEach,
  Aa = typeof Set == "function" && Set.prototype,
  Hs =
    Object.getOwnPropertyDescriptor && Aa
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  hs = Aa && Hs && typeof Hs.get == "function" ? Hs.get : null,
  ho = Aa && Set.prototype.forEach,
  Hu = typeof WeakMap == "function" && WeakMap.prototype,
  ni = Hu ? WeakMap.prototype.has : null,
  $u = typeof WeakSet == "function" && WeakSet.prototype,
  ai = $u ? WeakSet.prototype.has : null,
  Xu = typeof WeakRef == "function" && WeakRef.prototype,
  lo = Xu ? WeakRef.prototype.deref : null,
  Vu = Boolean.prototype.valueOf,
  Wu = Object.prototype.toString,
  zu = Function.prototype.toString,
  ju = String.prototype.match,
  wa = String.prototype.slice,
  Be = String.prototype.replace,
  Yu = String.prototype.toUpperCase,
  co = String.prototype.toLowerCase,
  Lh = RegExp.prototype.test,
  uo = Array.prototype.concat,
  ne = Array.prototype.join,
  qu = Array.prototype.slice,
  fo = Math.floor,
  Sn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  $s = Object.getOwnPropertySymbols,
  Cn =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  Nr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  Ct =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Nr || "symbol")
      ? Symbol.toStringTag
      : null,
  Nh = Object.prototype.propertyIsEnumerable,
  po =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (i) {
          return i.__proto__;
        }
      : null);
function mo(i, t) {
  if (
    i === 1 / 0 ||
    i === -1 / 0 ||
    i !== i ||
    (i && i > -1e3 && i < 1e3) ||
    Lh.call(/e/, t)
  )
    return t;
  var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof i == "number") {
    var r = i < 0 ? -fo(-i) : fo(i);
    if (r !== i) {
      var s = String(r),
        n = wa.call(t, s.length + 1);
      return (
        Be.call(s, e, "$&_") +
        "." +
        Be.call(Be.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return Be.call(t, e, "$&_");
}
var In = Gu,
  go = In.custom,
  yo = kh(go) ? go : null,
  Ku = function i(t, e, r, s) {
    var n = e || {};
    if (
      Ce(n, "quoteStyle") &&
      n.quoteStyle !== "single" &&
      n.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      Ce(n, "maxStringLength") &&
      (typeof n.maxStringLength == "number"
        ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0
        : n.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var a = Ce(n, "customInspect") ? n.customInspect : !0;
    if (typeof a != "boolean" && a !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      Ce(n, "indent") &&
      n.indent !== null &&
      n.indent !== "	" &&
      !(parseInt(n.indent, 10) === n.indent && n.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (Ce(n, "numericSeparator") && typeof n.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var o = n.numericSeparator;
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return Hh(t, n);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var h = String(t);
      return o ? mo(t, h) : h;
    }
    if (typeof t == "bigint") {
      var l = String(t) + "n";
      return o ? mo(t, l) : l;
    }
    var c = typeof n.depth > "u" ? 5 : n.depth;
    if ((typeof r > "u" && (r = 0), r >= c && c > 0 && typeof t == "object"))
      return Rn(t) ? "[Array]" : "[Object]";
    var u = pd(n, r);
    if (typeof s > "u") s = [];
    else if (Gh(s, t) >= 0) return "[Circular]";
    function d(b, S, G) {
      if ((S && ((s = qu.call(s)), s.push(S)), G)) {
        var V = { depth: n.depth };
        return (
          Ce(n, "quoteStyle") && (V.quoteStyle = n.quoteStyle),
          i(b, V, r + 1, s)
        );
      }
      return i(b, n, r + 1, s);
    }
    if (typeof t == "function" && !_o(t)) {
      var f = nd(t),
        p = Ai(t, d);
      return (
        "[Function" +
        (f ? ": " + f : " (anonymous)") +
        "]" +
        (p.length > 0 ? " { " + ne.call(p, ", ") + " }" : "")
      );
    }
    if (kh(t)) {
      var m = Nr
        ? Be.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Cn.call(t);
      return typeof t == "object" && !Nr ? Wr(m) : m;
    }
    if (ud(t)) {
      for (
        var g = "<" + co.call(String(t.nodeName)),
          _ = t.attributes || [],
          x = 0;
        x < _.length;
        x++
      )
        g += " " + _[x].name + "=" + Uh(Zu(_[x].value), "double", n);
      return (
        (g += ">"),
        t.childNodes && t.childNodes.length && (g += "..."),
        (g += "</" + co.call(String(t.nodeName)) + ">"),
        g
      );
    }
    if (Rn(t)) {
      if (t.length === 0) return "[]";
      var y = Ai(t, d);
      return u && !fd(y)
        ? "[" + Pn(y, u) + "]"
        : "[ " + ne.call(y, ", ") + " ]";
    }
    if (Ju(t)) {
      var v = Ai(t, d);
      return !("cause" in Error.prototype) &&
        "cause" in t &&
        !Nh.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            ne.call(uo.call("[cause]: " + d(t.cause), v), ", ") +
            " }"
        : v.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + ne.call(v, ", ") + " }";
    }
    if (typeof t == "object" && a) {
      if (yo && typeof t[yo] == "function" && In)
        return In(t, { depth: c - r });
      if (a !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (ad(t)) {
      var T = [];
      return (
        oo &&
          oo.call(t, function (b, S) {
            T.push(d(S, t, !0) + " => " + d(b, t));
          }),
        vo("Map", os.call(t), T, u)
      );
    }
    if (ld(t)) {
      var M = [];
      return (
        ho &&
          ho.call(t, function (b) {
            M.push(d(b, t));
          }),
        vo("Set", hs.call(t), M, u)
      );
    }
    if (od(t)) return Xs("WeakMap");
    if (cd(t)) return Xs("WeakSet");
    if (hd(t)) return Xs("WeakRef");
    if (ed(t)) return Wr(d(Number(t)));
    if (id(t)) return Wr(d(Sn.call(t)));
    if (rd(t)) return Wr(Vu.call(t));
    if (td(t)) return Wr(d(String(t)));
    if (typeof window < "u" && t === window) return "{ [object Window] }";
    if (t === zi) return "{ [object globalThis] }";
    if (!Qu(t) && !_o(t)) {
      var A = Ai(t, d),
        E = po
          ? po(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        B = t instanceof Object ? "" : "null prototype",
        U =
          !E && Ct && Object(t) === t && Ct in t
            ? wa.call(ke(t), 8, -1)
            : B
            ? "Object"
            : "",
        Y =
          E || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        P =
          Y +
          (U || B
            ? "[" + ne.call(uo.call([], U || [], B || []), ": ") + "] "
            : "");
      return A.length === 0
        ? P + "{}"
        : u
        ? P + "{" + Pn(A, u) + "}"
        : P + "{ " + ne.call(A, ", ") + " }";
    }
    return String(t);
  };
function Uh(i, t, e) {
  var r = (e.quoteStyle || t) === "double" ? '"' : "'";
  return r + i + r;
}
function Zu(i) {
  return Be.call(String(i), /"/g, "&quot;");
}
function Rn(i) {
  return (
    ke(i) === "[object Array]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function Qu(i) {
  return (
    ke(i) === "[object Date]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function _o(i) {
  return (
    ke(i) === "[object RegExp]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function Ju(i) {
  return (
    ke(i) === "[object Error]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function td(i) {
  return (
    ke(i) === "[object String]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function ed(i) {
  return (
    ke(i) === "[object Number]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function rd(i) {
  return (
    ke(i) === "[object Boolean]" && (!Ct || !(typeof i == "object" && Ct in i))
  );
}
function kh(i) {
  if (Nr) return i && typeof i == "object" && i instanceof Symbol;
  if (typeof i == "symbol") return !0;
  if (!i || typeof i != "object" || !Cn) return !1;
  try {
    return Cn.call(i), !0;
  } catch {}
  return !1;
}
function id(i) {
  if (!i || typeof i != "object" || !Sn) return !1;
  try {
    return Sn.call(i), !0;
  } catch {}
  return !1;
}
var sd =
  Object.prototype.hasOwnProperty ||
  function (i) {
    return i in this;
  };
function Ce(i, t) {
  return sd.call(i, t);
}
function ke(i) {
  return Wu.call(i);
}
function nd(i) {
  if (i.name) return i.name;
  var t = ju.call(zu.call(i), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Gh(i, t) {
  if (i.indexOf) return i.indexOf(t);
  for (var e = 0, r = i.length; e < r; e++) if (i[e] === t) return e;
  return -1;
}
function ad(i) {
  if (!os || !i || typeof i != "object") return !1;
  try {
    os.call(i);
    try {
      hs.call(i);
    } catch {
      return !0;
    }
    return i instanceof Map;
  } catch {}
  return !1;
}
function od(i) {
  if (!ni || !i || typeof i != "object") return !1;
  try {
    ni.call(i, ni);
    try {
      ai.call(i, ai);
    } catch {
      return !0;
    }
    return i instanceof WeakMap;
  } catch {}
  return !1;
}
function hd(i) {
  if (!lo || !i || typeof i != "object") return !1;
  try {
    return lo.call(i), !0;
  } catch {}
  return !1;
}
function ld(i) {
  if (!hs || !i || typeof i != "object") return !1;
  try {
    hs.call(i);
    try {
      os.call(i);
    } catch {
      return !0;
    }
    return i instanceof Set;
  } catch {}
  return !1;
}
function cd(i) {
  if (!ai || !i || typeof i != "object") return !1;
  try {
    ai.call(i, ai);
    try {
      ni.call(i, ni);
    } catch {
      return !0;
    }
    return i instanceof WeakSet;
  } catch {}
  return !1;
}
function ud(i) {
  return !i || typeof i != "object"
    ? !1
    : typeof HTMLElement < "u" && i instanceof HTMLElement
    ? !0
    : typeof i.nodeName == "string" && typeof i.getAttribute == "function";
}
function Hh(i, t) {
  if (i.length > t.maxStringLength) {
    var e = i.length - t.maxStringLength,
      r = "... " + e + " more character" + (e > 1 ? "s" : "");
    return Hh(wa.call(i, 0, t.maxStringLength), t) + r;
  }
  var s = Be.call(Be.call(i, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, dd);
  return Uh(s, "single", t);
}
function dd(i) {
  var t = i.charCodeAt(0),
    e = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return e ? "\\" + e : "\\x" + (t < 16 ? "0" : "") + Yu.call(t.toString(16));
}
function Wr(i) {
  return "Object(" + i + ")";
}
function Xs(i) {
  return i + " { ? }";
}
function vo(i, t, e, r) {
  var s = r ? Pn(e, r) : ne.call(e, ", ");
  return i + " (" + t + ") {" + s + "}";
}
function fd(i) {
  for (var t = 0; t < i.length; t++)
    if (
      Gh(
        i[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function pd(i, t) {
  var e;
  if (i.indent === "	") e = "	";
  else if (typeof i.indent == "number" && i.indent > 0)
    e = ne.call(Array(i.indent + 1), " ");
  else return null;
  return { base: e, prev: ne.call(Array(t + 1), e) };
}
function Pn(i, t) {
  if (i.length === 0) return "";
  var e =
    `
` +
    t.prev +
    t.base;
  return (
    e +
    ne.call(i, "," + e) +
    `
` +
    t.prev
  );
}
function Ai(i, t) {
  var e = Rn(i),
    r = [];
  if (e) {
    r.length = i.length;
    for (var s = 0; s < i.length; s++) r[s] = Ce(i, s) ? t(i[s], i) : "";
  }
  var n = typeof $s == "function" ? $s(i) : [],
    a;
  if (Nr) {
    a = {};
    for (var o = 0; o < n.length; o++) a["$" + n[o]] = n[o];
  }
  for (var h in i)
    Ce(i, h) &&
      ((e && String(Number(h)) === h && h < i.length) ||
        (Nr && a["$" + h] instanceof Symbol) ||
        (Lh.call(/[^\w$]/, h)
          ? r.push(t(h, i) + ": " + t(i[h], i))
          : r.push(h + ": " + t(i[h], i))));
  if (typeof $s == "function")
    for (var l = 0; l < n.length; l++)
      Nh.call(i, n[l]) && r.push("[" + t(n[l]) + "]: " + t(i[n[l]], i));
  return r;
}
var $h = ar,
  Gr = Nu,
  md = Ku,
  gd = gi,
  wi = $h("%WeakMap%", !0),
  Si = $h("%Map%", !0),
  yd = Gr("WeakMap.prototype.get", !0),
  _d = Gr("WeakMap.prototype.set", !0),
  vd = Gr("WeakMap.prototype.has", !0),
  xd = Gr("Map.prototype.get", !0),
  bd = Gr("Map.prototype.set", !0),
  Td = Gr("Map.prototype.has", !0),
  Sa = function (i, t) {
    for (var e = i, r; (r = e.next) !== null; e = r)
      if (r.key === t)
        return (e.next = r.next), (r.next = i.next), (i.next = r), r;
  },
  Ed = function (i, t) {
    var e = Sa(i, t);
    return e && e.value;
  },
  Ad = function (i, t, e) {
    var r = Sa(i, t);
    r ? (r.value = e) : (i.next = { key: t, next: i.next, value: e });
  },
  wd = function (i, t) {
    return !!Sa(i, t);
  },
  Sd = function () {
    var t,
      e,
      r,
      s = {
        assert: function (n) {
          if (!s.has(n)) throw new gd("Side channel does not contain " + md(n));
        },
        get: function (n) {
          if (wi && n && (typeof n == "object" || typeof n == "function")) {
            if (t) return yd(t, n);
          } else if (Si) {
            if (e) return xd(e, n);
          } else if (r) return Ed(r, n);
        },
        has: function (n) {
          if (wi && n && (typeof n == "object" || typeof n == "function")) {
            if (t) return vd(t, n);
          } else if (Si) {
            if (e) return Td(e, n);
          } else if (r) return wd(r, n);
          return !1;
        },
        set: function (n, a) {
          wi && n && (typeof n == "object" || typeof n == "function")
            ? (t || (t = new wi()), _d(t, n, a))
            : Si
            ? (e || (e = new Si()), bd(e, n, a))
            : (r || (r = { key: {}, next: null }), Ad(r, n, a));
        },
      };
    return s;
  },
  Cd = String.prototype.replace,
  Id = /%20/g,
  Vs = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Ca = {
    default: Vs.RFC3986,
    formatters: {
      RFC1738: function (i) {
        return Cd.call(i, Id, "+");
      },
      RFC3986: function (i) {
        return String(i);
      },
    },
    RFC1738: Vs.RFC1738,
    RFC3986: Vs.RFC3986,
  },
  Rd = Ca,
  Ws = Object.prototype.hasOwnProperty,
  qe = Array.isArray,
  Qt = (function () {
    for (var i = [], t = 0; t < 256; ++t)
      i.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return i;
  })(),
  Pd = function (t) {
    for (; t.length > 1; ) {
      var e = t.pop(),
        r = e.obj[e.prop];
      if (qe(r)) {
        for (var s = [], n = 0; n < r.length; ++n)
          typeof r[n] < "u" && s.push(r[n]);
        e.obj[e.prop] = s;
      }
    }
  },
  Xh = function (t, e) {
    for (
      var r = e && e.plainObjects ? Object.create(null) : {}, s = 0;
      s < t.length;
      ++s
    )
      typeof t[s] < "u" && (r[s] = t[s]);
    return r;
  },
  Md = function i(t, e, r) {
    if (!e) return t;
    if (typeof e != "object") {
      if (qe(t)) t.push(e);
      else if (t && typeof t == "object")
        ((r && (r.plainObjects || r.allowPrototypes)) ||
          !Ws.call(Object.prototype, e)) &&
          (t[e] = !0);
      else return [t, e];
      return t;
    }
    if (!t || typeof t != "object") return [t].concat(e);
    var s = t;
    return (
      qe(t) && !qe(e) && (s = Xh(t, r)),
      qe(t) && qe(e)
        ? (e.forEach(function (n, a) {
            if (Ws.call(t, a)) {
              var o = t[a];
              o && typeof o == "object" && n && typeof n == "object"
                ? (t[a] = i(o, n, r))
                : t.push(n);
            } else t[a] = n;
          }),
          t)
        : Object.keys(e).reduce(function (n, a) {
            var o = e[a];
            return Ws.call(n, a) ? (n[a] = i(n[a], o, r)) : (n[a] = o), n;
          }, s)
    );
  },
  Bd = function (t, e) {
    return Object.keys(e).reduce(function (r, s) {
      return (r[s] = e[s]), r;
    }, t);
  },
  Dd = function (i, t, e) {
    var r = i.replace(/\+/g, " ");
    if (e === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r);
    } catch {
      return r;
    }
  },
  Fd = function (t, e, r, s, n) {
    if (t.length === 0) return t;
    var a = t;
    if (
      (typeof t == "symbol"
        ? (a = Symbol.prototype.toString.call(t))
        : typeof t != "string" && (a = String(t)),
      r === "iso-8859-1")
    )
      return escape(a).replace(/%u[0-9a-f]{4}/gi, function (c) {
        return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
      });
    for (var o = "", h = 0; h < a.length; ++h) {
      var l = a.charCodeAt(h);
      if (
        l === 45 ||
        l === 46 ||
        l === 95 ||
        l === 126 ||
        (l >= 48 && l <= 57) ||
        (l >= 65 && l <= 90) ||
        (l >= 97 && l <= 122) ||
        (n === Rd.RFC1738 && (l === 40 || l === 41))
      ) {
        o += a.charAt(h);
        continue;
      }
      if (l < 128) {
        o = o + Qt[l];
        continue;
      }
      if (l < 2048) {
        o = o + (Qt[192 | (l >> 6)] + Qt[128 | (l & 63)]);
        continue;
      }
      if (l < 55296 || l >= 57344) {
        o =
          o +
          (Qt[224 | (l >> 12)] +
            Qt[128 | ((l >> 6) & 63)] +
            Qt[128 | (l & 63)]);
        continue;
      }
      (h += 1),
        (l = 65536 + (((l & 1023) << 10) | (a.charCodeAt(h) & 1023))),
        (o +=
          Qt[240 | (l >> 18)] +
          Qt[128 | ((l >> 12) & 63)] +
          Qt[128 | ((l >> 6) & 63)] +
          Qt[128 | (l & 63)]);
    }
    return o;
  },
  Od = function (t) {
    for (
      var e = [{ obj: { o: t }, prop: "o" }], r = [], s = 0;
      s < e.length;
      ++s
    )
      for (
        var n = e[s], a = n.obj[n.prop], o = Object.keys(a), h = 0;
        h < o.length;
        ++h
      ) {
        var l = o[h],
          c = a[l];
        typeof c == "object" &&
          c !== null &&
          r.indexOf(c) === -1 &&
          (e.push({ obj: a, prop: l }), r.push(c));
      }
    return Pd(e), t;
  },
  Ld = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  },
  Nd = function (t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  },
  Ud = function (t, e) {
    return [].concat(t, e);
  },
  kd = function (t, e) {
    if (qe(t)) {
      for (var r = [], s = 0; s < t.length; s += 1) r.push(e(t[s]));
      return r;
    }
    return e(t);
  },
  Vh = {
    arrayToObject: Xh,
    assign: Bd,
    combine: Ud,
    compact: Od,
    decode: Dd,
    encode: Fd,
    isBuffer: Nd,
    isRegExp: Ld,
    maybeMap: kd,
    merge: Md,
  },
  Wh = Sd,
  Yi = Vh,
  oi = Ca,
  Gd = Object.prototype.hasOwnProperty,
  xo = {
    brackets: function (t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function (t, e) {
      return t + "[" + e + "]";
    },
    repeat: function (t) {
      return t;
    },
  },
  me = Array.isArray,
  Hd = Array.prototype.push,
  zh = function (i, t) {
    Hd.apply(i, me(t) ? t : [t]);
  },
  $d = Date.prototype.toISOString,
  bo = oi.default,
  St = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: Yi.encode,
    encodeValuesOnly: !1,
    format: bo,
    formatter: oi.formatters[bo],
    indices: !1,
    serializeDate: function (t) {
      return $d.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Xd = function (t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  },
  zs = {},
  Vd = function i(t, e, r, s, n, a, o, h, l, c, u, d, f, p, m, g) {
    for (var _ = t, x = g, y = 0, v = !1; (x = x.get(zs)) !== void 0 && !v; ) {
      var T = x.get(t);
      if (((y += 1), typeof T < "u")) {
        if (T === y) throw new RangeError("Cyclic object value");
        v = !0;
      }
      typeof x.get(zs) > "u" && (y = 0);
    }
    if (
      (typeof h == "function"
        ? (_ = h(e, _))
        : _ instanceof Date
        ? (_ = u(_))
        : r === "comma" &&
          me(_) &&
          (_ = Yi.maybeMap(_, function (V) {
            return V instanceof Date ? u(V) : V;
          })),
      _ === null)
    ) {
      if (n) return o && !p ? o(e, St.encoder, m, "key", d) : e;
      _ = "";
    }
    if (Xd(_) || Yi.isBuffer(_)) {
      if (o) {
        var M = p ? e : o(e, St.encoder, m, "key", d);
        return [f(M) + "=" + f(o(_, St.encoder, m, "value", d))];
      }
      return [f(e) + "=" + f(String(_))];
    }
    var A = [];
    if (typeof _ > "u") return A;
    var E;
    if (r === "comma" && me(_))
      p && o && (_ = Yi.maybeMap(_, o)),
        (E = [{ value: _.length > 0 ? _.join(",") || null : void 0 }]);
    else if (me(h)) E = h;
    else {
      var B = Object.keys(_);
      E = l ? B.sort(l) : B;
    }
    for (
      var U = s && me(_) && _.length === 1 ? e + "[]" : e, Y = 0;
      Y < E.length;
      ++Y
    ) {
      var P = E[Y],
        b = typeof P == "object" && typeof P.value < "u" ? P.value : _[P];
      if (!(a && b === null)) {
        var S = me(_)
          ? typeof r == "function"
            ? r(U, P)
            : U
          : U + (c ? "." + P : "[" + P + "]");
        g.set(t, y);
        var G = Wh();
        G.set(zs, g),
          zh(
            A,
            i(
              b,
              S,
              r,
              s,
              n,
              a,
              r === "comma" && p && me(_) ? null : o,
              h,
              l,
              c,
              u,
              d,
              f,
              p,
              m,
              G
            )
          );
      }
    }
    return A;
  },
  Wd = function (t) {
    if (!t) return St;
    if (
      t.encoder !== null &&
      typeof t.encoder < "u" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var e = t.charset || St.charset;
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = oi.default;
    if (typeof t.format < "u") {
      if (!Gd.call(oi.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      r = t.format;
    }
    var s = oi.formatters[r],
      n = St.filter;
    return (
      (typeof t.filter == "function" || me(t.filter)) && (n = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == "boolean"
            ? t.addQueryPrefix
            : St.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? St.allowDots : !!t.allowDots,
        charset: e,
        charsetSentinel:
          typeof t.charsetSentinel == "boolean"
            ? t.charsetSentinel
            : St.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? St.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : St.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : St.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == "boolean"
            ? t.encodeValuesOnly
            : St.encodeValuesOnly,
        filter: n,
        format: r,
        formatter: s,
        serializeDate:
          typeof t.serializeDate == "function"
            ? t.serializeDate
            : St.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : St.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == "boolean"
            ? t.strictNullHandling
            : St.strictNullHandling,
      }
    );
  },
  zd = function (i, t) {
    var e = i,
      r = Wd(t),
      s,
      n;
    typeof r.filter == "function"
      ? ((n = r.filter), (e = n("", e)))
      : me(r.filter) && ((n = r.filter), (s = n));
    var a = [];
    if (typeof e != "object" || e === null) return "";
    var o;
    t && t.arrayFormat in xo
      ? (o = t.arrayFormat)
      : t && "indices" in t
      ? (o = t.indices ? "indices" : "repeat")
      : (o = "indices");
    var h = xo[o];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = h === "comma" && t && t.commaRoundTrip;
    s || (s = Object.keys(e)), r.sort && s.sort(r.sort);
    for (var c = Wh(), u = 0; u < s.length; ++u) {
      var d = s[u];
      (r.skipNulls && e[d] === null) ||
        zh(
          a,
          Vd(
            e[d],
            d,
            h,
            l,
            r.strictNullHandling,
            r.skipNulls,
            r.encode ? r.encoder : null,
            r.filter,
            r.sort,
            r.allowDots,
            r.serializeDate,
            r.format,
            r.formatter,
            r.encodeValuesOnly,
            r.charset,
            c
          )
        );
    }
    var f = a.join(r.delimiter),
      p = r.addQueryPrefix === !0 ? "?" : "";
    return (
      r.charsetSentinel &&
        (r.charset === "iso-8859-1"
          ? (p += "utf8=%26%2310003%3B&")
          : (p += "utf8=%E2%9C%93&")),
      f.length > 0 ? p + f : ""
    );
  },
  Ur = Vh,
  Mn = Object.prototype.hasOwnProperty,
  jd = Array.isArray,
  _t = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: Ur.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  Yd = function (i) {
    return i.replace(/&#(\d+);/g, function (t, e) {
      return String.fromCharCode(parseInt(e, 10));
    });
  },
  jh = function (i, t) {
    return i && typeof i == "string" && t.comma && i.indexOf(",") > -1
      ? i.split(",")
      : i;
  },
  qd = "utf8=%26%2310003%3B",
  Kd = "utf8=%E2%9C%93",
  Zd = function (t, e) {
    var r = { __proto__: null },
      s = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
      n = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
      a = s.split(e.delimiter, n),
      o = -1,
      h,
      l = e.charset;
    if (e.charsetSentinel)
      for (h = 0; h < a.length; ++h)
        a[h].indexOf("utf8=") === 0 &&
          (a[h] === Kd ? (l = "utf-8") : a[h] === qd && (l = "iso-8859-1"),
          (o = h),
          (h = a.length));
    for (h = 0; h < a.length; ++h)
      if (h !== o) {
        var c = a[h],
          u = c.indexOf("]="),
          d = u === -1 ? c.indexOf("=") : u + 1,
          f,
          p;
        d === -1
          ? ((f = e.decoder(c, _t.decoder, l, "key")),
            (p = e.strictNullHandling ? null : ""))
          : ((f = e.decoder(c.slice(0, d), _t.decoder, l, "key")),
            (p = Ur.maybeMap(jh(c.slice(d + 1), e), function (m) {
              return e.decoder(m, _t.decoder, l, "value");
            }))),
          p && e.interpretNumericEntities && l === "iso-8859-1" && (p = Yd(p)),
          c.indexOf("[]=") > -1 && (p = jd(p) ? [p] : p),
          Mn.call(r, f) ? (r[f] = Ur.combine(r[f], p)) : (r[f] = p);
      }
    return r;
  },
  Qd = function (i, t, e, r) {
    for (var s = r ? t : jh(t, e), n = i.length - 1; n >= 0; --n) {
      var a,
        o = i[n];
      if (o === "[]" && e.parseArrays) a = [].concat(s);
      else {
        a = e.plainObjects ? Object.create(null) : {};
        var h =
            o.charAt(0) === "[" && o.charAt(o.length - 1) === "]"
              ? o.slice(1, -1)
              : o,
          l = parseInt(h, 10);
        !e.parseArrays && h === ""
          ? (a = { 0: s })
          : !isNaN(l) &&
            o !== h &&
            String(l) === h &&
            l >= 0 &&
            e.parseArrays &&
            l <= e.arrayLimit
          ? ((a = []), (a[l] = s))
          : h !== "__proto__" && (a[h] = s);
      }
      s = a;
    }
    return s;
  },
  Jd = function (t, e, r, s) {
    if (t) {
      var n = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
        a = /(\[[^[\]]*])/,
        o = /(\[[^[\]]*])/g,
        h = r.depth > 0 && a.exec(n),
        l = h ? n.slice(0, h.index) : n,
        c = [];
      if (l) {
        if (
          !r.plainObjects &&
          Mn.call(Object.prototype, l) &&
          !r.allowPrototypes
        )
          return;
        c.push(l);
      }
      for (
        var u = 0;
        r.depth > 0 && (h = o.exec(n)) !== null && u < r.depth;

      ) {
        if (
          ((u += 1),
          !r.plainObjects &&
            Mn.call(Object.prototype, h[1].slice(1, -1)) &&
            !r.allowPrototypes)
        )
          return;
        c.push(h[1]);
      }
      return h && c.push("[" + n.slice(h.index) + "]"), Qd(c, e, r, s);
    }
  },
  tf = function (t) {
    if (!t) return _t;
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var e = typeof t.charset > "u" ? _t.charset : t.charset;
    return {
      allowDots: typeof t.allowDots > "u" ? _t.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == "boolean"
          ? t.allowPrototypes
          : _t.allowPrototypes,
      allowSparse:
        typeof t.allowSparse == "boolean" ? t.allowSparse : _t.allowSparse,
      arrayLimit:
        typeof t.arrayLimit == "number" ? t.arrayLimit : _t.arrayLimit,
      charset: e,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : _t.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : _t.comma,
      decoder: typeof t.decoder == "function" ? t.decoder : _t.decoder,
      delimiter:
        typeof t.delimiter == "string" || Ur.isRegExp(t.delimiter)
          ? t.delimiter
          : _t.delimiter,
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : _t.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == "boolean"
          ? t.interpretNumericEntities
          : _t.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == "number"
          ? t.parameterLimit
          : _t.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == "boolean" ? t.plainObjects : _t.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : _t.strictNullHandling,
    };
  },
  ef = function (i, t) {
    var e = tf(t);
    if (i === "" || i === null || typeof i > "u")
      return e.plainObjects ? Object.create(null) : {};
    for (
      var r = typeof i == "string" ? Zd(i, e) : i,
        s = e.plainObjects ? Object.create(null) : {},
        n = Object.keys(r),
        a = 0;
      a < n.length;
      ++a
    ) {
      var o = n[a],
        h = Jd(o, r[o], e, typeof i == "string");
      s = Ur.merge(s, h, e);
    }
    return e.allowSparse === !0 ? s : Ur.compact(s);
  },
  rf = zd,
  sf = ef,
  nf = Ca,
  af = { formats: nf, parse: sf, stringify: rf },
  of = kc;
function be() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.host = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.query = null),
    (this.pathname = null),
    (this.path = null),
    (this.href = null);
}
var hf = /^([a-z0-9.+-]+:)/i,
  lf = /:[0-9]*$/,
  cf = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  uf = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    `
`,
    "	",
  ],
  df = ["{", "}", "|", "\\", "^", "`"].concat(uf),
  Bn = ["'"].concat(df),
  To = ["%", "/", "?", ";", "#"].concat(Bn),
  Eo = ["/", "?", "#"],
  ff = 255,
  Ao = /^[+a-z0-9A-Z_-]{0,63}$/,
  pf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  mf = { javascript: !0, "javascript:": !0 },
  Dn = { javascript: !0, "javascript:": !0 },
  Rr = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  },
  Fn = af;
function gf(i, t, e) {
  if (i && typeof i == "object" && i instanceof be) return i;
  var r = new be();
  return r.parse(i, t, e), r;
}
be.prototype.parse = function (i, t, e) {
  if (typeof i != "string")
    throw new TypeError("Parameter 'url' must be a string, not " + typeof i);
  var r = i.indexOf("?"),
    s = r !== -1 && r < i.indexOf("#") ? "?" : "#",
    n = i.split(s),
    a = /\\/g;
  (n[0] = n[0].replace(a, "/")), (i = n.join(s));
  var o = i;
  if (((o = o.trim()), !e && i.split("#").length === 1)) {
    var h = cf.exec(o);
    if (h)
      return (
        (this.path = o),
        (this.href = o),
        (this.pathname = h[1]),
        h[2]
          ? ((this.search = h[2]),
            t
              ? (this.query = Fn.parse(this.search.substr(1)))
              : (this.query = this.search.substr(1)))
          : t && ((this.search = ""), (this.query = {})),
        this
      );
  }
  var l = hf.exec(o);
  if (l) {
    l = l[0];
    var c = l.toLowerCase();
    (this.protocol = c), (o = o.substr(l.length));
  }
  if (e || l || o.match(/^\/\/[^@/]+@[^@/]+/)) {
    var u = o.substr(0, 2) === "//";
    u && !(l && Dn[l]) && ((o = o.substr(2)), (this.slashes = !0));
  }
  if (!Dn[l] && (u || (l && !Rr[l]))) {
    for (var d = -1, f = 0; f < Eo.length; f++) {
      var p = o.indexOf(Eo[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var m, g;
    d === -1 ? (g = o.lastIndexOf("@")) : (g = o.lastIndexOf("@", d)),
      g !== -1 &&
        ((m = o.slice(0, g)),
        (o = o.slice(g + 1)),
        (this.auth = decodeURIComponent(m))),
      (d = -1);
    for (var f = 0; f < To.length; f++) {
      var p = o.indexOf(To[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = o.length),
      (this.host = o.slice(0, d)),
      (o = o.slice(d)),
      this.parseHost(),
      (this.hostname = this.hostname || "");
    var _ =
      this.hostname[0] === "[" &&
      this.hostname[this.hostname.length - 1] === "]";
    if (!_)
      for (var x = this.hostname.split(/\./), f = 0, y = x.length; f < y; f++) {
        var v = x[f];
        if (v && !v.match(Ao)) {
          for (var T = "", M = 0, A = v.length; M < A; M++)
            v.charCodeAt(M) > 127 ? (T += "x") : (T += v[M]);
          if (!T.match(Ao)) {
            var E = x.slice(0, f),
              B = x.slice(f + 1),
              U = v.match(pf);
            U && (E.push(U[1]), B.unshift(U[2])),
              B.length && (o = "/" + B.join(".") + o),
              (this.hostname = E.join("."));
            break;
          }
        }
      }
    this.hostname.length > ff
      ? (this.hostname = "")
      : (this.hostname = this.hostname.toLowerCase()),
      _ || (this.hostname = of.toASCII(this.hostname));
    var Y = this.port ? ":" + this.port : "",
      P = this.hostname || "";
    (this.host = P + Y),
      (this.href += this.host),
      _ &&
        ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
        o[0] !== "/" && (o = "/" + o));
  }
  if (!mf[c])
    for (var f = 0, y = Bn.length; f < y; f++) {
      var b = Bn[f];
      if (o.indexOf(b) !== -1) {
        var S = encodeURIComponent(b);
        S === b && (S = escape(b)), (o = o.split(b).join(S));
      }
    }
  var G = o.indexOf("#");
  G !== -1 && ((this.hash = o.substr(G)), (o = o.slice(0, G)));
  var V = o.indexOf("?");
  if (
    (V !== -1
      ? ((this.search = o.substr(V)),
        (this.query = o.substr(V + 1)),
        t && (this.query = Fn.parse(this.query)),
        (o = o.slice(0, V)))
      : t && ((this.search = ""), (this.query = {})),
    o && (this.pathname = o),
    Rr[c] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search)
  ) {
    var Y = this.pathname || "",
      $ = this.search || "";
    this.path = Y + $;
  }
  return (this.href = this.format()), this;
};
be.prototype.format = function () {
  var i = this.auth || "";
  i && ((i = encodeURIComponent(i)), (i = i.replace(/%3A/i, ":")), (i += "@"));
  var t = this.protocol || "",
    e = this.pathname || "",
    r = this.hash || "",
    s = !1,
    n = "";
  this.host
    ? (s = i + this.host)
    : this.hostname &&
      ((s =
        i +
        (this.hostname.indexOf(":") === -1
          ? this.hostname
          : "[" + this.hostname + "]")),
      this.port && (s += ":" + this.port)),
    this.query &&
      typeof this.query == "object" &&
      Object.keys(this.query).length &&
      (n = Fn.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1,
      }));
  var a = this.search || (n && "?" + n) || "";
  return (
    t && t.substr(-1) !== ":" && (t += ":"),
    this.slashes || ((!t || Rr[t]) && s !== !1)
      ? ((s = "//" + (s || "")), e && e.charAt(0) !== "/" && (e = "/" + e))
      : s || (s = ""),
    r && r.charAt(0) !== "#" && (r = "#" + r),
    a && a.charAt(0) !== "?" && (a = "?" + a),
    (e = e.replace(/[?#]/g, function (o) {
      return encodeURIComponent(o);
    })),
    (a = a.replace("#", "%23")),
    t + s + e + a + r
  );
};
be.prototype.resolve = function (i) {
  return this.resolveObject(gf(i, !1, !0)).format();
};
be.prototype.resolveObject = function (i) {
  if (typeof i == "string") {
    var t = new be();
    t.parse(i, !1, !0), (i = t);
  }
  for (var e = new be(), r = Object.keys(this), s = 0; s < r.length; s++) {
    var n = r[s];
    e[n] = this[n];
  }
  if (((e.hash = i.hash), i.href === "")) return (e.href = e.format()), e;
  if (i.slashes && !i.protocol) {
    for (var a = Object.keys(i), o = 0; o < a.length; o++) {
      var h = a[o];
      h !== "protocol" && (e[h] = i[h]);
    }
    return (
      Rr[e.protocol] &&
        e.hostname &&
        !e.pathname &&
        ((e.pathname = "/"), (e.path = e.pathname)),
      (e.href = e.format()),
      e
    );
  }
  if (i.protocol && i.protocol !== e.protocol) {
    if (!Rr[i.protocol]) {
      for (var l = Object.keys(i), c = 0; c < l.length; c++) {
        var u = l[c];
        e[u] = i[u];
      }
      return (e.href = e.format()), e;
    }
    if (((e.protocol = i.protocol), !i.host && !Dn[i.protocol])) {
      for (
        var y = (i.pathname || "").split("/");
        y.length && !(i.host = y.shift());

      );
      i.host || (i.host = ""),
        i.hostname || (i.hostname = ""),
        y[0] !== "" && y.unshift(""),
        y.length < 2 && y.unshift(""),
        (e.pathname = y.join("/"));
    } else e.pathname = i.pathname;
    if (
      ((e.search = i.search),
      (e.query = i.query),
      (e.host = i.host || ""),
      (e.auth = i.auth),
      (e.hostname = i.hostname || i.host),
      (e.port = i.port),
      e.pathname || e.search)
    ) {
      var d = e.pathname || "",
        f = e.search || "";
      e.path = d + f;
    }
    return (e.slashes = e.slashes || i.slashes), (e.href = e.format()), e;
  }
  var p = e.pathname && e.pathname.charAt(0) === "/",
    m = i.host || (i.pathname && i.pathname.charAt(0) === "/"),
    g = m || p || (e.host && i.pathname),
    _ = g,
    x = (e.pathname && e.pathname.split("/")) || [],
    y = (i.pathname && i.pathname.split("/")) || [],
    v = e.protocol && !Rr[e.protocol];
  if (
    (v &&
      ((e.hostname = ""),
      (e.port = null),
      e.host && (x[0] === "" ? (x[0] = e.host) : x.unshift(e.host)),
      (e.host = ""),
      i.protocol &&
        ((i.hostname = null),
        (i.port = null),
        i.host && (y[0] === "" ? (y[0] = i.host) : y.unshift(i.host)),
        (i.host = null)),
      (g = g && (y[0] === "" || x[0] === ""))),
    m)
  )
    (e.host = i.host || i.host === "" ? i.host : e.host),
      (e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname),
      (e.search = i.search),
      (e.query = i.query),
      (x = y);
  else if (y.length)
    x || (x = []),
      x.pop(),
      (x = x.concat(y)),
      (e.search = i.search),
      (e.query = i.query);
  else if (i.search != null) {
    if (v) {
      (e.host = x.shift()), (e.hostname = e.host);
      var T = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
      T &&
        ((e.auth = T.shift()), (e.hostname = T.shift()), (e.host = e.hostname));
    }
    return (
      (e.search = i.search),
      (e.query = i.query),
      (e.pathname !== null || e.search !== null) &&
        (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")),
      (e.href = e.format()),
      e
    );
  }
  if (!x.length)
    return (
      (e.pathname = null),
      e.search ? (e.path = "/" + e.search) : (e.path = null),
      (e.href = e.format()),
      e
    );
  for (
    var M = x.slice(-1)[0],
      A =
        ((e.host || i.host || x.length > 1) && (M === "." || M === "..")) ||
        M === "",
      E = 0,
      B = x.length;
    B >= 0;
    B--
  )
    (M = x[B]),
      M === "."
        ? x.splice(B, 1)
        : M === ".."
        ? (x.splice(B, 1), E++)
        : E && (x.splice(B, 1), E--);
  if (!g && !_) for (; E--; E) x.unshift("..");
  g && x[0] !== "" && (!x[0] || x[0].charAt(0) !== "/") && x.unshift(""),
    A && x.join("/").substr(-1) !== "/" && x.push("");
  var U = x[0] === "" || (x[0] && x[0].charAt(0) === "/");
  if (v) {
    (e.hostname = U ? "" : x.length ? x.shift() : ""), (e.host = e.hostname);
    var T = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
    T &&
      ((e.auth = T.shift()), (e.hostname = T.shift()), (e.host = e.hostname));
  }
  return (
    (g = g || (e.host && x.length)),
    g && !U && x.unshift(""),
    x.length > 0
      ? (e.pathname = x.join("/"))
      : ((e.pathname = null), (e.path = null)),
    (e.pathname !== null || e.search !== null) &&
      (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")),
    (e.auth = i.auth || e.auth),
    (e.slashes = e.slashes || i.slashes),
    (e.href = e.format()),
    e
  );
};
be.prototype.parseHost = function () {
  var i = this.host,
    t = lf.exec(i);
  t &&
    ((t = t[0]),
    t !== ":" && (this.port = t.substr(1)),
    (i = i.substr(0, i.length - t.length))),
    i && (this.hostname = i);
};
const wo = {};
function q(i, t, e = 3) {
  if (wo[t]) return;
  let r = new Error().stack;
  typeof r > "u"
    ? console.warn(
        "PixiJS Deprecation Warning: ",
        `${t}
Deprecated since v${i}`
      )
    : ((r = r
        .split(
          `
`
        )
        .splice(e).join(`
`)),
      console.groupCollapsed
        ? (console.groupCollapsed(
            "%cPixiJS Deprecation Warning: %c%s",
            "color:#614108;background:#fffbe6",
            "font-weight:normal;color:#614108;background:#fffbe6",
            `${t}
Deprecated since v${i}`
          ),
          console.warn(r),
          console.groupEnd())
        : (console.warn(
            "PixiJS Deprecation Warning: ",
            `${t}
Deprecated since v${i}`
          ),
          console.warn(r))),
    (wo[t] = !0);
}
function Gt(i) {
  if (typeof i != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`);
}
function zr(i) {
  return i.split("?")[0].split("#")[0];
}
function yf(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function _f(i, t, e) {
  return i.replace(new RegExp(yf(t), "g"), e);
}
function vf(i, t) {
  let e = "",
    r = 0,
    s = -1,
    n = 0,
    a = -1;
  for (let o = 0; o <= i.length; ++o) {
    if (o < i.length) a = i.charCodeAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(s === o - 1 || n === 1))
        if (s !== o - 1 && n === 2) {
          if (
            e.length < 2 ||
            r !== 2 ||
            e.charCodeAt(e.length - 1) !== 46 ||
            e.charCodeAt(e.length - 2) !== 46
          ) {
            if (e.length > 2) {
              const h = e.lastIndexOf("/");
              if (h !== e.length - 1) {
                h === -1
                  ? ((e = ""), (r = 0))
                  : ((e = e.slice(0, h)),
                    (r = e.length - 1 - e.lastIndexOf("/"))),
                  (s = o),
                  (n = 0);
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              (e = ""), (r = 0), (s = o), (n = 0);
              continue;
            }
          }
          t && (e.length > 0 ? (e += "/..") : (e = ".."), (r = 2));
        } else
          e.length > 0
            ? (e += `/${i.slice(s + 1, o)}`)
            : (e = i.slice(s + 1, o)),
            (r = o - s - 1);
      (s = o), (n = 0);
    } else a === 46 && n !== -1 ? ++n : (n = -1);
  }
  return e;
}
const mt = {
  toPosix(i) {
    return _f(i, "\\", "/");
  },
  isUrl(i) {
    return /^https?:/.test(this.toPosix(i));
  },
  isDataUrl(i) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
      i
    );
  },
  isBlobUrl(i) {
    return i.startsWith("blob:");
  },
  hasProtocol(i) {
    return /^[^/:]+:/.test(this.toPosix(i));
  },
  getProtocol(i) {
    Gt(i), (i = this.toPosix(i));
    const t = /^file:\/\/\//.exec(i);
    if (t) return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(i);
    return e ? e[0] : "";
  },
  toAbsolute(i, t, e) {
    if ((Gt(i), this.isDataUrl(i) || this.isBlobUrl(i))) return i;
    const r = zr(this.toPosix(t ?? F.ADAPTER.getBaseUrl())),
      s = zr(this.toPosix(e ?? this.rootname(r)));
    return (
      (i = this.toPosix(i)),
      i.startsWith("/")
        ? mt.join(s, i.slice(1))
        : this.isAbsolute(i)
        ? i
        : this.join(r, i)
    );
  },
  normalize(i) {
    if ((Gt(i), i.length === 0)) return ".";
    if (this.isDataUrl(i) || this.isBlobUrl(i)) return i;
    i = this.toPosix(i);
    let t = "";
    const e = i.startsWith("/");
    this.hasProtocol(i) && ((t = this.rootname(i)), (i = i.slice(t.length)));
    const r = i.endsWith("/");
    return (
      (i = vf(i, !1)), i.length > 0 && r && (i += "/"), e ? `/${i}` : t + i
    );
  },
  isAbsolute(i) {
    return (
      Gt(i), (i = this.toPosix(i)), this.hasProtocol(i) ? !0 : i.startsWith("/")
    );
  },
  join(...i) {
    if (i.length === 0) return ".";
    let t;
    for (let e = 0; e < i.length; ++e) {
      const r = i[e];
      if ((Gt(r), r.length > 0))
        if (t === void 0) t = r;
        else {
          const s = i[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(s).toLowerCase())
            ? (t += `/../${r}`)
            : (t += `/${r}`);
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  dirname(i) {
    if ((Gt(i), i.length === 0)) return ".";
    i = this.toPosix(i);
    let t = i.charCodeAt(0);
    const e = t === 47;
    let r = -1,
      s = !0;
    const n = this.getProtocol(i),
      a = i;
    i = i.slice(n.length);
    for (let o = i.length - 1; o >= 1; --o)
      if (((t = i.charCodeAt(o)), t === 47)) {
        if (!s) {
          r = o;
          break;
        }
      } else s = !1;
    return r === -1
      ? e
        ? "/"
        : this.isUrl(a)
        ? n + i
        : n
      : e && r === 1
      ? "//"
      : n + i.slice(0, r);
  },
  rootname(i) {
    Gt(i), (i = this.toPosix(i));
    let t = "";
    if (
      (i.startsWith("/") ? (t = "/") : (t = this.getProtocol(i)), this.isUrl(i))
    ) {
      const e = i.indexOf("/", t.length);
      e !== -1 ? (t = i.slice(0, e)) : (t = i), t.endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(i, t) {
    Gt(i), t && Gt(t), (i = zr(this.toPosix(i)));
    let e = 0,
      r = -1,
      s = !0,
      n;
    if (t !== void 0 && t.length > 0 && t.length <= i.length) {
      if (t.length === i.length && t === i) return "";
      let a = t.length - 1,
        o = -1;
      for (n = i.length - 1; n >= 0; --n) {
        const h = i.charCodeAt(n);
        if (h === 47) {
          if (!s) {
            e = n + 1;
            break;
          }
        } else
          o === -1 && ((s = !1), (o = n + 1)),
            a >= 0 &&
              (h === t.charCodeAt(a)
                ? --a === -1 && (r = n)
                : ((a = -1), (r = o)));
      }
      return e === r ? (r = o) : r === -1 && (r = i.length), i.slice(e, r);
    }
    for (n = i.length - 1; n >= 0; --n)
      if (i.charCodeAt(n) === 47) {
        if (!s) {
          e = n + 1;
          break;
        }
      } else r === -1 && ((s = !1), (r = n + 1));
    return r === -1 ? "" : i.slice(e, r);
  },
  extname(i) {
    Gt(i), (i = zr(this.toPosix(i)));
    let t = -1,
      e = 0,
      r = -1,
      s = !0,
      n = 0;
    for (let a = i.length - 1; a >= 0; --a) {
      const o = i.charCodeAt(a);
      if (o === 47) {
        if (!s) {
          e = a + 1;
          break;
        }
        continue;
      }
      r === -1 && ((s = !1), (r = a + 1)),
        o === 46
          ? t === -1
            ? (t = a)
            : n !== 1 && (n = 1)
          : t !== -1 && (n = -1);
    }
    return t === -1 ||
      r === -1 ||
      n === 0 ||
      (n === 1 && t === r - 1 && t === e + 1)
      ? ""
      : i.slice(t, r);
  },
  parse(i) {
    Gt(i);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (i.length === 0) return t;
    i = zr(this.toPosix(i));
    let e = i.charCodeAt(0);
    const r = this.isAbsolute(i);
    let s;
    (t.root = this.rootname(i)), r || this.hasProtocol(i) ? (s = 1) : (s = 0);
    let n = -1,
      a = 0,
      o = -1,
      h = !0,
      l = i.length - 1,
      c = 0;
    for (; l >= s; --l) {
      if (((e = i.charCodeAt(l)), e === 47)) {
        if (!h) {
          a = l + 1;
          break;
        }
        continue;
      }
      o === -1 && ((h = !1), (o = l + 1)),
        e === 46
          ? n === -1
            ? (n = l)
            : c !== 1 && (c = 1)
          : n !== -1 && (c = -1);
    }
    return (
      n === -1 || o === -1 || c === 0 || (c === 1 && n === o - 1 && n === a + 1)
        ? o !== -1 &&
          (a === 0 && r
            ? (t.base = t.name = i.slice(1, o))
            : (t.base = t.name = i.slice(a, o)))
        : (a === 0 && r
            ? ((t.name = i.slice(1, n)), (t.base = i.slice(1, o)))
            : ((t.name = i.slice(a, n)), (t.base = i.slice(a, o))),
          (t.ext = i.slice(n, o))),
      (t.dir = this.dirname(i)),
      t
    );
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"],
};
let js;
async function xf() {
  return (
    js ??
      (js = (async () => {
        var n;
        const i = document.createElement("canvas").getContext("webgl");
        if (!i) return Rt.UNPACK;
        const t = await new Promise((a) => {
          const o = document.createElement("video");
          (o.onloadeddata = () => a(o)),
            (o.onerror = () => a(null)),
            (o.autoplay = !1),
            (o.crossOrigin = "anonymous"),
            (o.preload = "auto"),
            (o.src =
              "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM="),
            o.load();
        });
        if (!t) return Rt.UNPACK;
        const e = i.createTexture();
        i.bindTexture(i.TEXTURE_2D, e);
        const r = i.createFramebuffer();
        i.bindFramebuffer(i.FRAMEBUFFER, r),
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_2D,
            e,
            0
          ),
          i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE),
          i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t);
        const s = new Uint8Array(4);
        return (
          i.readPixels(0, 0, 1, 1, i.RGBA, i.UNSIGNED_BYTE, s),
          i.deleteFramebuffer(r),
          i.deleteTexture(e),
          (n = i.getExtension("WEBGL_lose_context")) == null || n.loseContext(),
          s[0] <= s[3] ? Rt.PMA : Rt.UNPACK
        );
      })()),
    js
  );
}
let Ys;
function bf() {
  return (
    typeof Ys > "u" &&
      (Ys = (function () {
        var t;
        const i = {
          stencil: !0,
          failIfMajorPerformanceCaveat: F.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
        };
        try {
          if (!F.ADAPTER.getWebGLRenderingContext()) return !1;
          const e = F.ADAPTER.createCanvas();
          let r =
            e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
          const s = !!(
            (t = r == null ? void 0 : r.getContextAttributes()) != null &&
            t.stencil
          );
          if (r) {
            const n = r.getExtension("WEBGL_lose_context");
            n && n.loseContext();
          }
          return (r = null), s;
        } catch {
          return !1;
        }
      })()),
    Ys
  );
}
var Tf = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  pe = function (i) {
    return typeof i == "string" ? i.length > 0 : typeof i == "number";
  },
  xt = function (i, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = Math.pow(10, t)),
      Math.round(e * i) / e + 0
    );
  },
  Lt = function (i, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = 1),
      i > e ? e : i > t ? i : t
    );
  },
  Yh = function (i) {
    return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360;
  },
  So = function (i) {
    return {
      r: Lt(i.r, 0, 255),
      g: Lt(i.g, 0, 255),
      b: Lt(i.b, 0, 255),
      a: Lt(i.a),
    };
  },
  qs = function (i) {
    return { r: xt(i.r), g: xt(i.g), b: xt(i.b), a: xt(i.a, 3) };
  },
  Ef = /^#([0-9a-f]{3,8})$/i,
  Ci = function (i) {
    var t = i.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  qh = function (i) {
    var t = i.r,
      e = i.g,
      r = i.b,
      s = i.a,
      n = Math.max(t, e, r),
      a = n - Math.min(t, e, r),
      o = a
        ? n === t
          ? (e - r) / a
          : n === e
          ? 2 + (r - t) / a
          : 4 + (t - e) / a
        : 0;
    return {
      h: 60 * (o < 0 ? o + 6 : o),
      s: n ? (a / n) * 100 : 0,
      v: (n / 255) * 100,
      a: s,
    };
  },
  Kh = function (i) {
    var t = i.h,
      e = i.s,
      r = i.v,
      s = i.a;
    (t = (t / 360) * 6), (e /= 100), (r /= 100);
    var n = Math.floor(t),
      a = r * (1 - e),
      o = r * (1 - (t - n) * e),
      h = r * (1 - (1 - t + n) * e),
      l = n % 6;
    return {
      r: 255 * [r, o, a, a, h, r][l],
      g: 255 * [h, r, r, o, a, a][l],
      b: 255 * [a, a, h, r, r, o][l],
      a: s,
    };
  },
  Co = function (i) {
    return { h: Yh(i.h), s: Lt(i.s, 0, 100), l: Lt(i.l, 0, 100), a: Lt(i.a) };
  },
  Io = function (i) {
    return { h: xt(i.h), s: xt(i.s), l: xt(i.l), a: xt(i.a, 3) };
  },
  Ro = function (i) {
    return Kh(
      ((e = (t = i).s),
      {
        h: t.h,
        s:
          (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0
            ? ((2 * e) / (r + e)) * 100
            : 0,
        v: r + e,
        a: t.a,
      })
    );
    var t, e, r;
  },
  hi = function (i) {
    return {
      h: (t = qh(i)).h,
      s:
        (s = ((200 - (e = t.s)) * (r = t.v)) / 100) > 0 && s < 200
          ? ((e * r) / 100 / (s <= 100 ? s : 200 - s)) * 100
          : 0,
      l: s / 2,
      a: t.a,
    };
    var t, e, r, s;
  },
  Af =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  wf =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Sf =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Cf =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  On = {
    string: [
      [
        function (i) {
          var t = Ef.exec(i);
          return t
            ? (i = t[1]).length <= 4
              ? {
                  r: parseInt(i[0] + i[0], 16),
                  g: parseInt(i[1] + i[1], 16),
                  b: parseInt(i[2] + i[2], 16),
                  a:
                    i.length === 4 ? xt(parseInt(i[3] + i[3], 16) / 255, 2) : 1,
                }
              : i.length === 6 || i.length === 8
              ? {
                  r: parseInt(i.substr(0, 2), 16),
                  g: parseInt(i.substr(2, 2), 16),
                  b: parseInt(i.substr(4, 2), 16),
                  a:
                    i.length === 8
                      ? xt(parseInt(i.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null;
        },
        "hex",
      ],
      [
        function (i) {
          var t = Sf.exec(i) || Cf.exec(i);
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : So({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (i) {
          var t = Af.exec(i) || wf.exec(i);
          if (!t) return null;
          var e,
            r,
            s = Co({
              h:
                ((e = t[1]),
                (r = t[2]),
                r === void 0 && (r = "deg"),
                Number(e) * (Tf[r] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            });
          return Ro(s);
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (i) {
          var t = i.r,
            e = i.g,
            r = i.b,
            s = i.a,
            n = s === void 0 ? 1 : s;
          return pe(t) && pe(e) && pe(r)
            ? So({ r: Number(t), g: Number(e), b: Number(r), a: Number(n) })
            : null;
        },
        "rgb",
      ],
      [
        function (i) {
          var t = i.h,
            e = i.s,
            r = i.l,
            s = i.a,
            n = s === void 0 ? 1 : s;
          if (!pe(t) || !pe(e) || !pe(r)) return null;
          var a = Co({
            h: Number(t),
            s: Number(e),
            l: Number(r),
            a: Number(n),
          });
          return Ro(a);
        },
        "hsl",
      ],
      [
        function (i) {
          var t = i.h,
            e = i.s,
            r = i.v,
            s = i.a,
            n = s === void 0 ? 1 : s;
          if (!pe(t) || !pe(e) || !pe(r)) return null;
          var a = (function (o) {
            return {
              h: Yh(o.h),
              s: Lt(o.s, 0, 100),
              v: Lt(o.v, 0, 100),
              a: Lt(o.a),
            };
          })({ h: Number(t), s: Number(e), v: Number(r), a: Number(n) });
          return Kh(a);
        },
        "hsv",
      ],
    ],
  },
  Po = function (i, t) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e][0](i);
      if (r) return [r, t[e][1]];
    }
    return [null, void 0];
  },
  If = function (i) {
    return typeof i == "string"
      ? Po(i.trim(), On.string)
      : typeof i == "object" && i !== null
      ? Po(i, On.object)
      : [null, void 0];
  },
  Ks = function (i, t) {
    var e = hi(i);
    return { h: e.h, s: Lt(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
  },
  Zs = function (i) {
    return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255;
  },
  Mo = function (i, t) {
    var e = hi(i);
    return { h: e.h, s: e.s, l: Lt(e.l + 100 * t, 0, 100), a: e.a };
  },
  Ln = (function () {
    function i(t) {
      (this.parsed = If(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (i.prototype.isValid = function () {
        return this.parsed !== null;
      }),
      (i.prototype.brightness = function () {
        return xt(Zs(this.rgba), 2);
      }),
      (i.prototype.isDark = function () {
        return Zs(this.rgba) < 0.5;
      }),
      (i.prototype.isLight = function () {
        return Zs(this.rgba) >= 0.5;
      }),
      (i.prototype.toHex = function () {
        return (
          (t = qs(this.rgba)),
          (e = t.r),
          (r = t.g),
          (s = t.b),
          (a = (n = t.a) < 1 ? Ci(xt(255 * n)) : ""),
          "#" + Ci(e) + Ci(r) + Ci(s) + a
        );
        var t, e, r, s, n, a;
      }),
      (i.prototype.toRgb = function () {
        return qs(this.rgba);
      }),
      (i.prototype.toRgbString = function () {
        return (
          (t = qs(this.rgba)),
          (e = t.r),
          (r = t.g),
          (s = t.b),
          (n = t.a) < 1
            ? "rgba(" + e + ", " + r + ", " + s + ", " + n + ")"
            : "rgb(" + e + ", " + r + ", " + s + ")"
        );
        var t, e, r, s, n;
      }),
      (i.prototype.toHsl = function () {
        return Io(hi(this.rgba));
      }),
      (i.prototype.toHslString = function () {
        return (
          (t = Io(hi(this.rgba))),
          (e = t.h),
          (r = t.s),
          (s = t.l),
          (n = t.a) < 1
            ? "hsla(" + e + ", " + r + "%, " + s + "%, " + n + ")"
            : "hsl(" + e + ", " + r + "%, " + s + "%)"
        );
        var t, e, r, s, n;
      }),
      (i.prototype.toHsv = function () {
        return (
          (t = qh(this.rgba)),
          { h: xt(t.h), s: xt(t.s), v: xt(t.v), a: xt(t.a, 3) }
        );
        var t;
      }),
      (i.prototype.invert = function () {
        return Jt({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        });
        var t;
      }),
      (i.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), Jt(Ks(this.rgba, t));
      }),
      (i.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), Jt(Ks(this.rgba, -t));
      }),
      (i.prototype.grayscale = function () {
        return Jt(Ks(this.rgba, -1));
      }),
      (i.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), Jt(Mo(this.rgba, t));
      }),
      (i.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), Jt(Mo(this.rgba, -t));
      }),
      (i.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t);
      }),
      (i.prototype.alpha = function (t) {
        return typeof t == "number"
          ? Jt({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t })
          : xt(this.rgba.a, 3);
        var e;
      }),
      (i.prototype.hue = function (t) {
        var e = hi(this.rgba);
        return typeof t == "number"
          ? Jt({ h: t, s: e.s, l: e.l, a: e.a })
          : xt(e.h);
      }),
      (i.prototype.isEqual = function (t) {
        return this.toHex() === Jt(t).toHex();
      }),
      i
    );
  })(),
  Jt = function (i) {
    return i instanceof Ln ? i : new Ln(i);
  },
  Bo = [],
  Rf = function (i) {
    i.forEach(function (t) {
      Bo.indexOf(t) < 0 && (t(Ln, On), Bo.push(t));
    });
  };
function Pf(i, t) {
  var e = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000",
    },
    r = {};
  for (var s in e) r[e[s]] = s;
  var n = {};
  (i.prototype.toName = function (a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var o,
      h,
      l = r[this.toHex()];
    if (l) return l;
    if (a != null && a.closest) {
      var c = this.toRgb(),
        u = 1 / 0,
        d = "black";
      if (!n.length) for (var f in e) n[f] = new i(e[f]).toRgb();
      for (var p in e) {
        var m =
          ((o = c),
          (h = n[p]),
          Math.pow(o.r - h.r, 2) +
            Math.pow(o.g - h.g, 2) +
            Math.pow(o.b - h.b, 2));
        m < u && ((u = m), (d = p));
      }
      return d;
    }
  }),
    t.string.push([
      function (a) {
        var o = a.toLowerCase(),
          h = o === "transparent" ? "#0000" : e[o];
        return h ? new i(h).toRgb() : null;
      },
      "name",
    ]);
}
Rf([Pf]);
const gr = class qi {
  constructor(t = 16777215) {
    (this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = t);
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    return (this.value = t), this;
  }
  set value(t) {
    if (t instanceof qi)
      (this._value = this.cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components);
    else {
      if (t === null) throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, t)) &&
        (this.normalize(t), (this._value = this.cloneSource(t)));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(t) {
    return typeof t == "string" ||
      typeof t == "number" ||
      t instanceof Number ||
      t === null
      ? t
      : Array.isArray(t) || ArrayBuffer.isView(t)
      ? t.slice(0)
      : typeof t == "object" && t !== null
      ? { ...t }
      : t;
  }
  isSourceEqual(t, e) {
    const r = typeof t;
    if (r !== typeof e) return !1;
    if (r === "number" || r === "string" || t instanceof Number) return t === e;
    if (
      (Array.isArray(t) && Array.isArray(e)) ||
      (ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
    )
      return t.length !== e.length ? !1 : t.every((s, n) => s === e[n]);
    if (t !== null && e !== null) {
      const s = Object.keys(t),
        n = Object.keys(e);
      return s.length !== n.length ? !1 : s.every((a) => t[a] === e[a]);
    }
    return t === e;
  }
  toRgba() {
    const [t, e, r, s] = this._components;
    return { r: t, g: e, b: r, a: s };
  }
  toRgb() {
    const [t, e, r] = this._components;
    return { r: t, g: e, b: r };
  }
  toRgbaString() {
    const [t, e, r] = this.toUint8RgbArray();
    return `rgba(${t},${e},${r},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, r, s] = this._components;
    return (
      (t = t ?? []),
      (t[0] = Math.round(e * 255)),
      (t[1] = Math.round(r * 255)),
      (t[2] = Math.round(s * 255)),
      t
    );
  }
  toRgbArray(t) {
    t = t ?? [];
    const [e, r, s] = this._components;
    return (t[0] = e), (t[1] = r), (t[2] = s), t;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(t) {
    const [e, r, s, n] = qi.temp.setValue(t)._components;
    return (
      (this._components[0] *= e),
      (this._components[1] *= r),
      (this._components[2] *= s),
      (this._components[3] *= n),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  premultiply(t, e = !0) {
    return (
      e &&
        ((this._components[0] *= t),
        (this._components[1] *= t),
        (this._components[2] *= t)),
      (this._components[3] = t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toPremultiplied(t, e = !0) {
    if (t === 1) return (255 << 24) + this._int;
    if (t === 0) return e ? 0 : this._int;
    let r = (this._int >> 16) & 255,
      s = (this._int >> 8) & 255,
      n = this._int & 255;
    return (
      e &&
        ((r = (r * t + 0.5) | 0),
        (s = (s * t + 0.5) | 0),
        (n = (n * t + 0.5) | 0)),
      ((t * 255) << 24) + (r << 16) + (s << 8) + n
    );
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(t) {
    return (this._components[3] = this._clamp(t)), this;
  }
  round(t) {
    const [e, r, s] = this._components;
    return (
      (this._components[0] = Math.round(e * t) / t),
      (this._components[1] = Math.round(r * t) / t),
      (this._components[2] = Math.round(s * t) / t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toArray(t) {
    t = t ?? [];
    const [e, r, s, n] = this._components;
    return (t[0] = e), (t[1] = r), (t[2] = s), (t[3] = n), t;
  }
  normalize(t) {
    let e, r, s, n;
    if (
      (typeof t == "number" || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      const a = t;
      (e = ((a >> 16) & 255) / 255),
        (r = ((a >> 8) & 255) / 255),
        (s = (a & 255) / 255),
        (n = 1);
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([e, r, s, n = 1] = t);
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([e, r, s, n = 255] = t),
        (e /= 255),
        (r /= 255),
        (s /= 255),
        (n /= 255);
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = qi.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = Jt(t);
      a.isValid() &&
        (({ r: e, g: r, b: s, a: n } = a.rgba),
        (e /= 255),
        (r /= 255),
        (s /= 255));
    }
    if (e !== void 0)
      (this._components[0] = e),
        (this._components[1] = r),
        (this._components[2] = s),
        (this._components[3] = n),
        this.refreshInt();
    else throw new Error(`Unable to convert color ${t}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [t, e, r] = this._components;
    this._int = ((t * 255) << 16) + ((e * 255) << 8) + ((r * 255) | 0);
  }
  _clamp(t, e = 0, r = 1) {
    return typeof t == "number"
      ? Math.min(Math.max(t, e), r)
      : (t.forEach((s, n) => {
          t[n] = Math.min(Math.max(s, e), r);
        }),
        t);
  }
};
(gr.shared = new gr()),
  (gr.temp = new gr()),
  (gr.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i);
let rt = gr;
function Mf(i) {
  return (
    q("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
    rt.shared.setValue(i).toHex()
  );
}
function Bf(i) {
  return (
    q("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
    rt.shared.setValue(i).toNumber()
  );
}
function Df() {
  const i = [],
    t = [];
  for (let r = 0; r < 32; r++) (i[r] = r), (t[r] = r);
  (i[X.NORMAL_NPM] = X.NORMAL),
    (i[X.ADD_NPM] = X.ADD),
    (i[X.SCREEN_NPM] = X.SCREEN),
    (t[X.NORMAL] = X.NORMAL_NPM),
    (t[X.ADD] = X.ADD_NPM),
    (t[X.SCREEN] = X.SCREEN_NPM);
  const e = [];
  return e.push(t), e.push(i), e;
}
const Zh = Df();
function Qh(i, t) {
  return Zh[t ? 1 : 0][i];
}
function Ff(i, t = null) {
  const e = i * 6;
  if (((t = t || new Uint16Array(e)), t.length !== e))
    throw new Error(
      `Out buffer length is incorrect, got ${t.length} and expected ${e}`
    );
  for (let r = 0, s = 0; r < e; r += 6, s += 4)
    (t[r + 0] = s + 0),
      (t[r + 1] = s + 1),
      (t[r + 2] = s + 2),
      (t[r + 3] = s + 0),
      (t[r + 4] = s + 2),
      (t[r + 5] = s + 3);
  return t;
}
function Jh(i) {
  if (i.BYTES_PER_ELEMENT === 4)
    return i instanceof Float32Array
      ? "Float32Array"
      : i instanceof Uint32Array
      ? "Uint32Array"
      : "Int32Array";
  if (i.BYTES_PER_ELEMENT === 2) {
    if (i instanceof Uint16Array) return "Uint16Array";
  } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
function ls(i) {
  return (
    (i += i === 0 ? 1 : 0),
    --i,
    (i |= i >>> 1),
    (i |= i >>> 2),
    (i |= i >>> 4),
    (i |= i >>> 8),
    (i |= i >>> 16),
    i + 1
  );
}
function Do(i) {
  return !(i & (i - 1)) && !!i;
}
function Fo(i) {
  let t = (i > 65535 ? 1 : 0) << 4;
  i >>>= t;
  let e = (i > 255 ? 1 : 0) << 3;
  return (
    (i >>>= e),
    (t |= e),
    (e = (i > 15 ? 1 : 0) << 2),
    (i >>>= e),
    (t |= e),
    (e = (i > 3 ? 1 : 0) << 1),
    (i >>>= e),
    (t |= e),
    t | (i >> 1)
  );
}
function Pr(i, t, e) {
  const r = i.length;
  let s;
  if (t >= r || e === 0) return;
  e = t + e > r ? r - t : e;
  const n = r - e;
  for (s = t; s < n; ++s) i[s] = i[s + e];
  i.length = n;
}
function De(i) {
  return i === 0 ? 0 : i < 0 ? -1 : 1;
}
let Of = 0;
function ir() {
  return ++Of;
}
const Nn = class {
  constructor(i, t, e, r) {
    (this.left = i), (this.top = t), (this.right = e), (this.bottom = r);
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Nn.EMPTY = new Nn(0, 0, 0, 0);
let Oo = Nn;
const Lo = {},
  te = Object.create(null),
  Ae = Object.create(null);
class Lf {
  constructor(t, e, r) {
    (this._canvas = F.ADAPTER.createCanvas()),
      (this._context = this._canvas.getContext("2d")),
      (this.resolution = r || F.RESOLUTION),
      this.resize(t, e);
  }
  clear() {
    this._checkDestroyed(),
      this._context.setTransform(1, 0, 0, 1, 0, 0),
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(t, e) {
    this._checkDestroyed(),
      (this._canvas.width = Math.round(t * this.resolution)),
      (this._canvas.height = Math.round(e * this.resolution));
  }
  destroy() {
    (this._context = null), (this._canvas = null);
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed(), (this._canvas.width = Math.round(t));
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed(), (this._canvas.height = Math.round(t));
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null)
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function No(i, t, e) {
  for (let r = 0, s = 4 * e * t; r < t; ++r, s += 4)
    if (i[s + 3] !== 0) return !1;
  return !0;
}
function Uo(i, t, e, r, s) {
  const n = 4 * t;
  for (let a = r, o = r * n + 4 * e; a <= s; ++a, o += n)
    if (i[o + 3] !== 0) return !1;
  return !0;
}
function Nf(i) {
  const { width: t, height: e } = i,
    r = i.getContext("2d", { willReadFrequently: !0 });
  if (r === null) throw new TypeError("Failed to get canvas 2D context");
  const s = r.getImageData(0, 0, t, e).data;
  let n = 0,
    a = 0,
    o = t - 1,
    h = e - 1;
  for (; a < e && No(s, t, a); ) ++a;
  if (a === e) return Oo.EMPTY;
  for (; No(s, t, h); ) --h;
  for (; Uo(s, t, n, a, h); ) ++n;
  for (; Uo(s, t, o, a, h); ) --o;
  return ++o, ++h, new Oo(n, a, o, h);
}
function Uf(i) {
  const t = Nf(i),
    { width: e, height: r } = t;
  let s = null;
  if (!t.isEmpty()) {
    const n = i.getContext("2d");
    if (n === null) throw new TypeError("Failed to get canvas 2D context");
    s = n.getImageData(t.left, t.top, e, r);
  }
  return { width: e, height: r, data: s };
}
function kf(i, t = globalThis.location) {
  if (i.startsWith("data:")) return "";
  t = t || globalThis.location;
  const e = new URL(i, document.baseURI);
  return e.hostname !== t.hostname ||
    e.port !== t.port ||
    e.protocol !== t.protocol
    ? "anonymous"
    : "";
}
function Te(i, t = 1) {
  var r;
  const e = (r = F.RETINA_PREFIX) == null ? void 0 : r.exec(i);
  return e ? parseFloat(e[1]) : t;
}
var R = ((i) => (
  (i.Renderer = "renderer"),
  (i.Application = "application"),
  (i.RendererSystem = "renderer-webgl-system"),
  (i.RendererPlugin = "renderer-webgl-plugin"),
  (i.CanvasRendererSystem = "renderer-canvas-system"),
  (i.CanvasRendererPlugin = "renderer-canvas-plugin"),
  (i.Asset = "asset"),
  (i.LoadParser = "load-parser"),
  (i.ResolveParser = "resolve-parser"),
  (i.CacheParser = "cache-parser"),
  (i.DetectionParser = "detection-parser"),
  i
))(R || {});
const Un = (i) => {
    if (typeof i == "function" || (typeof i == "object" && i.extension)) {
      if (!i.extension)
        throw new Error("Extension class must have an extension object");
      i = {
        ...(typeof i.extension != "object"
          ? { type: i.extension }
          : i.extension),
        ref: i,
      };
    }
    if (typeof i == "object") i = { ...i };
    else throw new Error("Invalid extension type");
    return typeof i.type == "string" && (i.type = [i.type]), i;
  },
  ko = (i, t) => Un(i).priority ?? t,
  L = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...i) {
      return (
        i.map(Un).forEach((t) => {
          t.type.forEach((e) => {
            var r, s;
            return (s = (r = this._removeHandlers)[e]) == null
              ? void 0
              : s.call(r, t);
          });
        }),
        this
      );
    },
    add(...i) {
      return (
        i.map(Un).forEach((t) => {
          t.type.forEach((e) => {
            var n, a;
            const r = this._addHandlers,
              s = this._queue;
            r[e]
              ? (n = r[e]) == null || n.call(r, t)
              : ((s[e] = s[e] || []), (a = s[e]) == null || a.push(t));
          });
        }),
        this
      );
    },
    handle(i, t, e) {
      var a;
      const r = this._addHandlers,
        s = this._removeHandlers;
      if (r[i] || s[i])
        throw new Error(`Extension type ${i} already has a handler`);
      (r[i] = t), (s[i] = e);
      const n = this._queue;
      return (
        n[i] && ((a = n[i]) == null || a.forEach((o) => t(o)), delete n[i]),
        this
      );
    },
    handleByMap(i, t) {
      return this.handle(
        i,
        (e) => {
          e.name && (t[e.name] = e.ref);
        },
        (e) => {
          e.name && delete t[e.name];
        }
      );
    },
    handleByList(i, t, e = -1) {
      return this.handle(
        i,
        (r) => {
          t.includes(r.ref) ||
            (t.push(r.ref), t.sort((s, n) => ko(n, e) - ko(s, e)));
        },
        (r) => {
          const s = t.indexOf(r.ref);
          s !== -1 && t.splice(s, 1);
        }
      );
    },
  };
class kn {
  constructor(t) {
    typeof t == "number"
      ? (this.rawBinaryData = new ArrayBuffer(t))
      : t instanceof Uint8Array
      ? (this.rawBinaryData = t.buffer)
      : (this.rawBinaryData = t),
      (this.uint32View = new Uint32Array(this.rawBinaryData)),
      (this.float32View = new Float32Array(this.rawBinaryData));
  }
  get int8View() {
    return (
      this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
      this._int8View
    );
  }
  get uint8View() {
    return (
      this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
      this._uint8View
    );
  }
  get int16View() {
    return (
      this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
      this._int16View
    );
  }
  get uint16View() {
    return (
      this._uint16View ||
        (this._uint16View = new Uint16Array(this.rawBinaryData)),
      this._uint16View
    );
  }
  get int32View() {
    return (
      this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
      this._int32View
    );
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    (this.rawBinaryData = null),
      (this._int8View = null),
      (this._uint8View = null),
      (this._int16View = null),
      (this._uint16View = null),
      (this._int32View = null),
      (this.uint32View = null),
      (this.float32View = null);
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const Gf = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}",
].join(`
`);
function Hf(i) {
  let t = "";
  for (let e = 0; e < i; ++e)
    e > 0 &&
      (t += `
else `),
      e < i - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function $f(i, t) {
  if (i === 0)
    throw new Error(
      "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
    );
  const e = t.createShader(t.FRAGMENT_SHADER);
  for (;;) {
    const r = Gf.replace(/%forloop%/gi, Hf(i));
    if (
      (t.shaderSource(e, r),
      t.compileShader(e),
      !t.getShaderParameter(e, t.COMPILE_STATUS))
    )
      i = (i / 2) | 0;
    else break;
  }
  return i;
}
const Qs = 0,
  Js = 1,
  tn = 2,
  en = 3,
  rn = 4,
  sn = 5;
class ue {
  constructor() {
    (this.data = 0),
      (this.blendMode = X.NORMAL),
      (this.polygonOffset = 0),
      (this.blend = !0),
      (this.depthMask = !0);
  }
  get blend() {
    return !!(this.data & (1 << Qs));
  }
  set blend(t) {
    !!(this.data & (1 << Qs)) !== t && (this.data ^= 1 << Qs);
  }
  get offsets() {
    return !!(this.data & (1 << Js));
  }
  set offsets(t) {
    !!(this.data & (1 << Js)) !== t && (this.data ^= 1 << Js);
  }
  get culling() {
    return !!(this.data & (1 << tn));
  }
  set culling(t) {
    !!(this.data & (1 << tn)) !== t && (this.data ^= 1 << tn);
  }
  get depthTest() {
    return !!(this.data & (1 << en));
  }
  set depthTest(t) {
    !!(this.data & (1 << en)) !== t && (this.data ^= 1 << en);
  }
  get depthMask() {
    return !!(this.data & (1 << sn));
  }
  set depthMask(t) {
    !!(this.data & (1 << sn)) !== t && (this.data ^= 1 << sn);
  }
  get clockwiseFrontFace() {
    return !!(this.data & (1 << rn));
  }
  set clockwiseFrontFace(t) {
    !!(this.data & (1 << rn)) !== t && (this.data ^= 1 << rn);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    (this.blend = t !== X.NONE), (this._blendMode = t);
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    (this.offsets = !!t), (this._polygonOffset = t);
  }
  static for2d() {
    const t = new ue();
    return (t.depthTest = !1), (t.blend = !0), t;
  }
}
ue.prototype.toString = function () {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const Gn = [];
function tl(i, t) {
  if (!i) return null;
  let e = "";
  if (typeof i == "string") {
    const r = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
    r && (e = r[1].toLowerCase());
  }
  for (let r = Gn.length - 1; r >= 0; --r) {
    const s = Gn[r];
    if (s.test && s.test(i, e)) return new s(i, t);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class zt {
  constructor(t) {
    (this.items = []), (this._name = t), (this._aliasCount = 0);
  }
  emit(t, e, r, s, n, a, o, h) {
    if (arguments.length > 8) throw new Error("max arguments reached");
    const { name: l, items: c } = this;
    this._aliasCount++;
    for (let u = 0, d = c.length; u < d; u++) c[u][l](t, e, r, s, n, a, o, h);
    return c === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 &&
      this.items.length > 1 &&
      ((this._aliasCount = 0), (this.items = this.items.slice(0)));
  }
  add(t) {
    return (
      t[this._name] &&
        (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)),
      this
    );
  }
  remove(t) {
    const e = this.items.indexOf(t);
    return (
      e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
    );
  }
  contains(t) {
    return this.items.includes(t);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), (this.items.length = 0), this;
  }
  destroy() {
    this.removeAll(), (this.items.length = 0), (this._name = "");
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(zt.prototype, {
  dispatch: { value: zt.prototype.emit },
  run: { value: zt.prototype.emit },
});
class di {
  constructor(t = 0, e = 0) {
    (this._width = t),
      (this._height = e),
      (this.destroyed = !1),
      (this.internal = !1),
      (this.onResize = new zt("setRealSize")),
      (this.onUpdate = new zt("update")),
      (this.onError = new zt("onError"));
  }
  bind(t) {
    this.onResize.add(t),
      this.onUpdate.add(t),
      this.onError.add(t),
      (this._width || this._height) &&
        this.onResize.emit(this._width, this._height);
  }
  unbind(t) {
    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
  }
  resize(t, e) {
    (t !== this._width || e !== this._height) &&
      ((this._width = t), (this._height = e), this.onResize.emit(t, e));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(t, e, r) {
    return !1;
  }
  dispose() {}
  destroy() {
    this.destroyed ||
      ((this.destroyed = !0),
      this.dispose(),
      this.onError.removeAll(),
      (this.onError = null),
      this.onResize.removeAll(),
      (this.onResize = null),
      this.onUpdate.removeAll(),
      (this.onUpdate = null));
  }
  static test(t, e) {
    return !1;
  }
}
class ws extends di {
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    if (!r || !s) throw new Error("BufferResource width or height invalid");
    super(r, s),
      (this.data = t),
      (this.unpackAlignment = e.unpackAlignment ?? 4);
  }
  upload(t, e, r) {
    const s = t.gl;
    s.pixelStorei(s.UNPACK_ALIGNMENT, this.unpackAlignment),
      s.pixelStorei(
        s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        e.alphaMode === Rt.UNPACK
      );
    const n = e.realWidth,
      a = e.realHeight;
    return (
      r.width === n && r.height === a
        ? s.texSubImage2D(e.target, 0, 0, 0, n, a, e.format, r.type, this.data)
        : ((r.width = n),
          (r.height = a),
          s.texImage2D(
            e.target,
            0,
            r.internalFormat,
            n,
            a,
            0,
            e.format,
            r.type,
            this.data
          )),
      !0
    );
  }
  dispose() {
    this.data = null;
  }
  static test(t) {
    return (
      t === null ||
      t instanceof Int8Array ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Int16Array ||
      t instanceof Uint16Array ||
      t instanceof Int32Array ||
      t instanceof Uint32Array ||
      t instanceof Float32Array
    );
  }
}
const Xf = { scaleMode: ge.NEAREST, alphaMode: Rt.NPM },
  Hn = class yr extends mi {
    constructor(t = null, e = null) {
      super(), (e = Object.assign({}, yr.defaultOptions, e));
      const {
        alphaMode: r,
        mipmap: s,
        anisotropicLevel: n,
        scaleMode: a,
        width: o,
        height: h,
        wrapMode: l,
        format: c,
        type: u,
        target: d,
        resolution: f,
        resourceOptions: p,
      } = e;
      t && !(t instanceof di) && ((t = tl(t, p)), (t.internal = !0)),
        (this.resolution = f || F.RESOLUTION),
        (this.width = Math.round((o || 0) * this.resolution) / this.resolution),
        (this.height =
          Math.round((h || 0) * this.resolution) / this.resolution),
        (this._mipmap = s),
        (this.anisotropicLevel = n),
        (this._wrapMode = l),
        (this._scaleMode = a),
        (this.format = c),
        (this.type = u),
        (this.target = d),
        (this.alphaMode = r),
        (this.uid = ir()),
        (this.touched = 0),
        (this.isPowerOfTwo = !1),
        this._refreshPOT(),
        (this._glTextures = {}),
        (this.dirtyId = 0),
        (this.dirtyStyleId = 0),
        (this.cacheId = null),
        (this.valid = o > 0 && h > 0),
        (this.textureCacheIds = []),
        (this.destroyed = !1),
        (this.resource = null),
        (this._batchEnabled = 0),
        (this._batchLocation = 0),
        (this.parentTextureArray = null),
        this.setResource(t);
    }
    get realWidth() {
      return Math.round(this.width * this.resolution);
    }
    get realHeight() {
      return Math.round(this.height * this.resolution);
    }
    get mipmap() {
      return this._mipmap;
    }
    set mipmap(t) {
      this._mipmap !== t && ((this._mipmap = t), this.dirtyStyleId++);
    }
    get scaleMode() {
      return this._scaleMode;
    }
    set scaleMode(t) {
      this._scaleMode !== t && ((this._scaleMode = t), this.dirtyStyleId++);
    }
    get wrapMode() {
      return this._wrapMode;
    }
    set wrapMode(t) {
      this._wrapMode !== t && ((this._wrapMode = t), this.dirtyStyleId++);
    }
    setStyle(t, e) {
      let r;
      return (
        t !== void 0 &&
          t !== this.scaleMode &&
          ((this.scaleMode = t), (r = !0)),
        e !== void 0 && e !== this.mipmap && ((this.mipmap = e), (r = !0)),
        r && this.dirtyStyleId++,
        this
      );
    }
    setSize(t, e, r) {
      return (r = r || this.resolution), this.setRealSize(t * r, e * r, r);
    }
    setRealSize(t, e, r) {
      return (
        (this.resolution = r || this.resolution),
        (this.width = Math.round(t) / this.resolution),
        (this.height = Math.round(e) / this.resolution),
        this._refreshPOT(),
        this.update(),
        this
      );
    }
    _refreshPOT() {
      this.isPowerOfTwo = Do(this.realWidth) && Do(this.realHeight);
    }
    setResolution(t) {
      const e = this.resolution;
      return e === t
        ? this
        : ((this.resolution = t),
          this.valid &&
            ((this.width = Math.round(this.width * e) / t),
            (this.height = Math.round(this.height * e) / t),
            this.emit("update", this)),
          this._refreshPOT(),
          this);
    }
    setResource(t) {
      if (this.resource === t) return this;
      if (this.resource) throw new Error("Resource can be set only once");
      return t.bind(this), (this.resource = t), this;
    }
    update() {
      this.valid
        ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
        : this.width > 0 &&
          this.height > 0 &&
          ((this.valid = !0),
          this.emit("loaded", this),
          this.emit("update", this));
    }
    onError(t) {
      this.emit("error", this, t);
    }
    destroy() {
      this.resource &&
        (this.resource.unbind(this),
        this.resource.internal && this.resource.destroy(),
        (this.resource = null)),
        this.cacheId &&
          (delete Ae[this.cacheId],
          delete te[this.cacheId],
          (this.cacheId = null)),
        (this.valid = !1),
        this.dispose(),
        yr.removeFromCache(this),
        (this.textureCacheIds = null),
        (this.destroyed = !0),
        this.emit("destroyed", this),
        this.removeAllListeners();
    }
    dispose() {
      this.emit("dispose", this);
    }
    castToBaseTexture() {
      return this;
    }
    static from(t, e, r = F.STRICT_TEXTURE_CACHE) {
      const s = typeof t == "string";
      let n = null;
      if (s) n = t;
      else {
        if (!t._pixiId) {
          const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
          t._pixiId = `${o}_${ir()}`;
        }
        n = t._pixiId;
      }
      let a = Ae[n];
      if (s && r && !a)
        throw new Error(
          `The cacheId "${n}" does not exist in BaseTextureCache.`
        );
      return a || ((a = new yr(t, e)), (a.cacheId = n), yr.addToCache(a, n)), a;
    }
    static fromBuffer(t, e, r, s) {
      t = t || new Float32Array(e * r * 4);
      const n = new ws(t, {
        width: e,
        height: r,
        ...(s == null ? void 0 : s.resourceOptions),
      });
      let a, o;
      return (
        t instanceof Float32Array
          ? ((a = w.RGBA), (o = k.FLOAT))
          : t instanceof Int32Array
          ? ((a = w.RGBA_INTEGER), (o = k.INT))
          : t instanceof Uint32Array
          ? ((a = w.RGBA_INTEGER), (o = k.UNSIGNED_INT))
          : t instanceof Int16Array
          ? ((a = w.RGBA_INTEGER), (o = k.SHORT))
          : t instanceof Uint16Array
          ? ((a = w.RGBA_INTEGER), (o = k.UNSIGNED_SHORT))
          : t instanceof Int8Array
          ? ((a = w.RGBA), (o = k.BYTE))
          : ((a = w.RGBA), (o = k.UNSIGNED_BYTE)),
        (n.internal = !0),
        new yr(n, Object.assign({}, Xf, { type: o, format: a }, s))
      );
    }
    static addToCache(t, e) {
      e &&
        (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
        Ae[e] &&
          Ae[e] !== t &&
          console.warn(
            `BaseTexture added to the cache with an id [${e}] that already had an entry`
          ),
        (Ae[e] = t));
    }
    static removeFromCache(t) {
      if (typeof t == "string") {
        const e = Ae[t];
        if (e) {
          const r = e.textureCacheIds.indexOf(t);
          return r > -1 && e.textureCacheIds.splice(r, 1), delete Ae[t], e;
        }
      } else if (t != null && t.textureCacheIds) {
        for (let e = 0; e < t.textureCacheIds.length; ++e)
          delete Ae[t.textureCacheIds[e]];
        return (t.textureCacheIds.length = 0), t;
      }
      return null;
    }
  };
(Hn.defaultOptions = {
  mipmap: ce.POW2,
  anisotropicLevel: 0,
  scaleMode: ge.LINEAR,
  wrapMode: Oe.CLAMP,
  alphaMode: Rt.UNPACK,
  target: Cr.TEXTURE_2D,
  format: w.RGBA,
  type: k.UNSIGNED_BYTE,
}),
  (Hn._globalBatch = 0);
let W = Hn;
class $n {
  constructor() {
    (this.texArray = null),
      (this.blend = 0),
      (this.type = ae.TRIANGLES),
      (this.start = 0),
      (this.size = 0),
      (this.data = null);
  }
}
let Vf = 0;
class lt {
  constructor(t, e = !0, r = !1) {
    (this.data = t || new Float32Array(1)),
      (this._glBuffers = {}),
      (this._updateID = 0),
      (this.index = r),
      (this.static = e),
      (this.id = Vf++),
      (this.disposeRunner = new zt("disposeBuffer"));
  }
  update(t) {
    t instanceof Array && (t = new Float32Array(t)),
      (this.data = t || this.data),
      this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), (this.data = null);
  }
  set index(t) {
    this.type = t ? he.ELEMENT_ARRAY_BUFFER : he.ARRAY_BUFFER;
  }
  get index() {
    return this.type === he.ELEMENT_ARRAY_BUFFER;
  }
  static from(t) {
    return t instanceof Array && (t = new Float32Array(t)), new lt(t);
  }
}
class cs {
  constructor(t, e = 0, r = !1, s = k.FLOAT, n, a, o, h = 1) {
    (this.buffer = t),
      (this.size = e),
      (this.normalized = r),
      (this.type = s),
      (this.stride = n),
      (this.start = a),
      (this.instance = o),
      (this.divisor = h);
  }
  destroy() {
    this.buffer = null;
  }
  static from(t, e, r, s, n) {
    return new cs(t, e, r, s, n);
  }
}
const Wf = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function zf(i, t) {
  let e = 0,
    r = 0;
  const s = {};
  for (let h = 0; h < i.length; h++) (r += t[h]), (e += i[h].length);
  const n = new ArrayBuffer(e * 4);
  let a = null,
    o = 0;
  for (let h = 0; h < i.length; h++) {
    const l = t[h],
      c = i[h],
      u = Jh(c);
    s[u] || (s[u] = new Wf[u](n)), (a = s[u]);
    for (let d = 0; d < c.length; d++) {
      const f = ((d / l) | 0) * r + o,
        p = d % l;
      a[f + p] = c[d];
    }
    o += l;
  }
  return new Float32Array(n);
}
const Go = { 5126: 4, 5123: 2, 5121: 1 };
let jf = 0;
const Yf = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };
class Le {
  constructor(t = [], e = {}) {
    (this.buffers = t),
      (this.indexBuffer = null),
      (this.attributes = e),
      (this.glVertexArrayObjects = {}),
      (this.id = jf++),
      (this.instanced = !1),
      (this.instanceCount = 1),
      (this.disposeRunner = new zt("disposeGeometry")),
      (this.refCount = 0);
  }
  addAttribute(t, e, r = 0, s = !1, n, a, o, h = !1) {
    if (!e)
      throw new Error("You must pass a buffer when creating an attribute");
    e instanceof lt ||
      (e instanceof Array && (e = new Float32Array(e)), (e = new lt(e)));
    const l = t.split("|");
    if (l.length > 1) {
      for (let u = 0; u < l.length; u++) this.addAttribute(l[u], e, r, s, n);
      return this;
    }
    let c = this.buffers.indexOf(e);
    return (
      c === -1 && (this.buffers.push(e), (c = this.buffers.length - 1)),
      (this.attributes[t] = new cs(c, r, s, n, a, o, h)),
      (this.instanced = this.instanced || h),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  addIndex(t) {
    return (
      t instanceof lt ||
        (t instanceof Array && (t = new Uint16Array(t)), (t = new lt(t))),
      (t.type = he.ELEMENT_ARRAY_BUFFER),
      (this.indexBuffer = t),
      this.buffers.includes(t) || this.buffers.push(t),
      this
    );
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (
      this.buffers.length === 1 ||
      (this.buffers.length === 2 && this.indexBuffer)
    )
      return this;
    const t = [],
      e = [],
      r = new lt();
    let s;
    for (s in this.attributes) {
      const n = this.attributes[s],
        a = this.buffers[n.buffer];
      t.push(a.data), e.push((n.size * Go[n.type]) / 4), (n.buffer = 0);
    }
    for (r.data = zf(t, e), s = 0; s < this.buffers.length; s++)
      this.buffers[s] !== this.indexBuffer && this.buffers[s].destroy();
    return (
      (this.buffers = [r]),
      this.indexBuffer && this.buffers.push(this.indexBuffer),
      this
    );
  }
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(),
      (this.buffers = null),
      (this.indexBuffer = null),
      (this.attributes = null);
  }
  clone() {
    const t = new Le();
    for (let e = 0; e < this.buffers.length; e++)
      t.buffers[e] = new lt(this.buffers[e].data.slice(0));
    for (const e in this.attributes) {
      const r = this.attributes[e];
      t.attributes[e] = new cs(
        r.buffer,
        r.size,
        r.normalized,
        r.type,
        r.stride,
        r.start,
        r.instance
      );
    }
    return (
      this.indexBuffer &&
        ((t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]),
        (t.indexBuffer.type = he.ELEMENT_ARRAY_BUFFER)),
      t
    );
  }
  static merge(t) {
    const e = new Le(),
      r = [],
      s = [],
      n = [];
    let a;
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        (s[h] = s[h] || 0), (s[h] += a.buffers[h].data.length), (n[h] = 0);
    }
    for (let o = 0; o < a.buffers.length; o++)
      (r[o] = new Yf[Jh(a.buffers[o].data)](s[o])),
        (e.buffers[o] = new lt(r[o]));
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        r[h].set(a.buffers[h].data, n[h]), (n[h] += a.buffers[h].data.length);
    }
    if (((e.attributes = a.attributes), a.indexBuffer)) {
      (e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)]),
        (e.indexBuffer.type = he.ELEMENT_ARRAY_BUFFER);
      let o = 0,
        h = 0,
        l = 0,
        c = 0;
      for (let u = 0; u < a.buffers.length; u++)
        if (a.buffers[u] !== a.indexBuffer) {
          c = u;
          break;
        }
      for (const u in a.attributes) {
        const d = a.attributes[u];
        (d.buffer | 0) === c && (h += (d.size * Go[d.type]) / 4);
      }
      for (let u = 0; u < t.length; u++) {
        const d = t[u].indexBuffer.data;
        for (let f = 0; f < d.length; f++) e.indexBuffer.data[f + l] += o;
        (o += t[u].buffers[c].data.length / h), (l += d.length);
      }
    }
    return e;
  }
}
class el extends Le {
  constructor(t = !1) {
    super(),
      (this._buffer = new lt(null, t, !1)),
      (this._indexBuffer = new lt(null, t, !0)),
      this.addAttribute("aVertexPosition", this._buffer, 2, !1, k.FLOAT)
        .addAttribute("aTextureCoord", this._buffer, 2, !1, k.FLOAT)
        .addAttribute("aColor", this._buffer, 4, !0, k.UNSIGNED_BYTE)
        .addAttribute("aTextureId", this._buffer, 1, !0, k.FLOAT)
        .addIndex(this._indexBuffer);
  }
}
const us = Math.PI * 2,
  qf = 180 / Math.PI,
  Kf = Math.PI / 180;
var At = ((i) => (
  (i[(i.POLY = 0)] = "POLY"),
  (i[(i.RECT = 1)] = "RECT"),
  (i[(i.CIRC = 2)] = "CIRC"),
  (i[(i.ELIP = 3)] = "ELIP"),
  (i[(i.RREC = 4)] = "RREC"),
  i
))(At || {});
class Q {
  constructor(t = 0, e = 0) {
    (this.x = 0), (this.y = 0), (this.x = t), (this.y = e);
  }
  clone() {
    return new Q(this.x, this.y);
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, e = t) {
    return (this.x = t), (this.y = e), this;
  }
}
Q.prototype.toString = function () {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const Ii = [new Q(), new Q(), new Q(), new Q()];
class j {
  constructor(t = 0, e = 0, r = 0, s = 0) {
    (this.x = Number(t)),
      (this.y = Number(e)),
      (this.width = Number(r)),
      (this.height = Number(s)),
      (this.type = At.RECT);
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new j(0, 0, 0, 0);
  }
  clone() {
    return new j(this.x, this.y, this.width, this.height);
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    );
  }
  copyTo(t) {
    return (
      (t.x = this.x),
      (t.y = this.y),
      (t.width = this.width),
      (t.height = this.height),
      t
    );
  }
  contains(t, e) {
    return this.width <= 0 || this.height <= 0
      ? !1
      : t >= this.x &&
          t < this.x + this.width &&
          e >= this.y &&
          e < this.y + this.height;
  }
  intersects(t, e) {
    if (!e) {
      const E = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= E) return !1;
      const B = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > B;
    }
    const r = this.left,
      s = this.right,
      n = this.top,
      a = this.bottom;
    if (s <= r || a <= n) return !1;
    const o = Ii[0].set(t.left, t.top),
      h = Ii[1].set(t.left, t.bottom),
      l = Ii[2].set(t.right, t.top),
      c = Ii[3].set(t.right, t.bottom);
    if (l.x <= o.x || h.y <= o.y) return !1;
    const u = Math.sign(e.a * e.d - e.b * e.c);
    if (
      u === 0 ||
      (e.apply(o, o),
      e.apply(h, h),
      e.apply(l, l),
      e.apply(c, c),
      Math.max(o.x, h.x, l.x, c.x) <= r ||
        Math.min(o.x, h.x, l.x, c.x) >= s ||
        Math.max(o.y, h.y, l.y, c.y) <= n ||
        Math.min(o.y, h.y, l.y, c.y) >= a)
    )
      return !1;
    const d = u * (h.y - o.y),
      f = u * (o.x - h.x),
      p = d * r + f * n,
      m = d * s + f * n,
      g = d * r + f * a,
      _ = d * s + f * a;
    if (
      Math.max(p, m, g, _) <= d * o.x + f * o.y ||
      Math.min(p, m, g, _) >= d * c.x + f * c.y
    )
      return !1;
    const x = u * (o.y - l.y),
      y = u * (l.x - o.x),
      v = x * r + y * n,
      T = x * s + y * n,
      M = x * r + y * a,
      A = x * s + y * a;
    return !(
      Math.max(v, T, M, A) <= x * o.x + y * o.y ||
      Math.min(v, T, M, A) >= x * c.x + y * c.y
    );
  }
  pad(t = 0, e = t) {
    return (
      (this.x -= t),
      (this.y -= e),
      (this.width += t * 2),
      (this.height += e * 2),
      this
    );
  }
  fit(t) {
    const e = Math.max(this.x, t.x),
      r = Math.min(this.x + this.width, t.x + t.width),
      s = Math.max(this.y, t.y),
      n = Math.min(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = Math.max(r - e, 0)),
      (this.y = s),
      (this.height = Math.max(n - s, 0)),
      this
    );
  }
  ceil(t = 1, e = 0.001) {
    const r = Math.ceil((this.x + this.width - e) * t) / t,
      s = Math.ceil((this.y + this.height - e) * t) / t;
    return (
      (this.x = Math.floor((this.x + e) * t) / t),
      (this.y = Math.floor((this.y + e) * t) / t),
      (this.width = r - this.x),
      (this.height = s - this.y),
      this
    );
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x),
      r = Math.max(this.x + this.width, t.x + t.width),
      s = Math.min(this.y, t.y),
      n = Math.max(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = r - e),
      (this.y = s),
      (this.height = n - s),
      this
    );
  }
}
j.prototype.toString = function () {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class Ss {
  constructor(t = 0, e = 0, r = 0) {
    (this.x = t), (this.y = e), (this.radius = r), (this.type = At.CIRC);
  }
  clone() {
    return new Ss(this.x, this.y, this.radius);
  }
  contains(t, e) {
    if (this.radius <= 0) return !1;
    const r = this.radius * this.radius;
    let s = this.x - t,
      n = this.y - e;
    return (s *= s), (n *= n), s + n <= r;
  }
  getBounds() {
    return new j(
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }
}
Ss.prototype.toString = function () {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class Cs {
  constructor(t = 0, e = 0, r = 0, s = 0) {
    (this.x = t),
      (this.y = e),
      (this.width = r),
      (this.height = s),
      (this.type = At.ELIP);
  }
  clone() {
    return new Cs(this.x, this.y, this.width, this.height);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    let r = (t - this.x) / this.width,
      s = (e - this.y) / this.height;
    return (r *= r), (s *= s), r + s <= 1;
  }
  getBounds() {
    return new j(
      this.x - this.width,
      this.y - this.height,
      this.width,
      this.height
    );
  }
}
Cs.prototype.toString = function () {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class tr {
  constructor(...t) {
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const r = [];
      for (let s = 0, n = e.length; s < n; s++) r.push(e[s].x, e[s].y);
      e = r;
    }
    (this.points = e), (this.type = At.POLY), (this.closeStroke = !0);
  }
  clone() {
    const t = this.points.slice(),
      e = new tr(t);
    return (e.closeStroke = this.closeStroke), e;
  }
  contains(t, e) {
    let r = !1;
    const s = this.points.length / 2;
    for (let n = 0, a = s - 1; n < s; a = n++) {
      const o = this.points[n * 2],
        h = this.points[n * 2 + 1],
        l = this.points[a * 2],
        c = this.points[a * 2 + 1];
      h > e != c > e && t < (l - o) * ((e - h) / (c - h)) + o && (r = !r);
    }
    return r;
  }
}
tr.prototype.toString = function () {
  return `[@pixi/math:PolygoncloseStroke=${
    this.closeStroke
  }points=${this.points.reduce((i, t) => `${i}, ${t}`, "")}]`;
};
class Is {
  constructor(t = 0, e = 0, r = 0, s = 0, n = 20) {
    (this.x = t),
      (this.y = e),
      (this.width = r),
      (this.height = s),
      (this.radius = n),
      (this.type = At.RREC);
  }
  clone() {
    return new Is(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    if (
      t >= this.x &&
      t <= this.x + this.width &&
      e >= this.y &&
      e <= this.y + this.height
    ) {
      const r = Math.max(
        0,
        Math.min(this.radius, Math.min(this.width, this.height) / 2)
      );
      if (
        (e >= this.y + r && e <= this.y + this.height - r) ||
        (t >= this.x + r && t <= this.x + this.width - r)
      )
        return !0;
      let s = t - (this.x + r),
        n = e - (this.y + r);
      const a = r * r;
      if (
        s * s + n * n <= a ||
        ((s = t - (this.x + this.width - r)), s * s + n * n <= a) ||
        ((n = e - (this.y + this.height - r)), s * s + n * n <= a) ||
        ((s = t - (this.x + r)), s * s + n * n <= a)
      )
        return !0;
    }
    return !1;
  }
}
Is.prototype.toString = function () {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class it {
  constructor(t = 1, e = 0, r = 0, s = 1, n = 0, a = 0) {
    (this.array = null),
      (this.a = t),
      (this.b = e),
      (this.c = r),
      (this.d = s),
      (this.tx = n),
      (this.ty = a);
  }
  fromArray(t) {
    (this.a = t[0]),
      (this.b = t[1]),
      (this.c = t[3]),
      (this.d = t[4]),
      (this.tx = t[2]),
      (this.ty = t[5]);
  }
  set(t, e, r, s, n, a) {
    return (
      (this.a = t),
      (this.b = e),
      (this.c = r),
      (this.d = s),
      (this.tx = n),
      (this.ty = a),
      this
    );
  }
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const r = e || this.array;
    return (
      t
        ? ((r[0] = this.a),
          (r[1] = this.b),
          (r[2] = 0),
          (r[3] = this.c),
          (r[4] = this.d),
          (r[5] = 0),
          (r[6] = this.tx),
          (r[7] = this.ty),
          (r[8] = 1))
        : ((r[0] = this.a),
          (r[1] = this.c),
          (r[2] = this.tx),
          (r[3] = this.b),
          (r[4] = this.d),
          (r[5] = this.ty),
          (r[6] = 0),
          (r[7] = 0),
          (r[8] = 1)),
      r
    );
  }
  apply(t, e) {
    e = e || new Q();
    const r = t.x,
      s = t.y;
    return (
      (e.x = this.a * r + this.c * s + this.tx),
      (e.y = this.b * r + this.d * s + this.ty),
      e
    );
  }
  applyInverse(t, e) {
    e = e || new Q();
    const r = 1 / (this.a * this.d + this.c * -this.b),
      s = t.x,
      n = t.y;
    return (
      (e.x =
        this.d * r * s +
        -this.c * r * n +
        (this.ty * this.c - this.tx * this.d) * r),
      (e.y =
        this.a * r * n +
        -this.b * r * s +
        (-this.ty * this.a + this.tx * this.b) * r),
      e
    );
  }
  translate(t, e) {
    return (this.tx += t), (this.ty += e), this;
  }
  scale(t, e) {
    return (
      (this.a *= t),
      (this.d *= e),
      (this.c *= t),
      (this.b *= e),
      (this.tx *= t),
      (this.ty *= e),
      this
    );
  }
  rotate(t) {
    const e = Math.cos(t),
      r = Math.sin(t),
      s = this.a,
      n = this.c,
      a = this.tx;
    return (
      (this.a = s * e - this.b * r),
      (this.b = s * r + this.b * e),
      (this.c = n * e - this.d * r),
      (this.d = n * r + this.d * e),
      (this.tx = a * e - this.ty * r),
      (this.ty = a * r + this.ty * e),
      this
    );
  }
  append(t) {
    const e = this.a,
      r = this.b,
      s = this.c,
      n = this.d;
    return (
      (this.a = t.a * e + t.b * s),
      (this.b = t.a * r + t.b * n),
      (this.c = t.c * e + t.d * s),
      (this.d = t.c * r + t.d * n),
      (this.tx = t.tx * e + t.ty * s + this.tx),
      (this.ty = t.tx * r + t.ty * n + this.ty),
      this
    );
  }
  setTransform(t, e, r, s, n, a, o, h, l) {
    return (
      (this.a = Math.cos(o + l) * n),
      (this.b = Math.sin(o + l) * n),
      (this.c = -Math.sin(o - h) * a),
      (this.d = Math.cos(o - h) * a),
      (this.tx = t - (r * this.a + s * this.c)),
      (this.ty = e - (r * this.b + s * this.d)),
      this
    );
  }
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const r = this.a,
        s = this.c;
      (this.a = r * t.a + this.b * t.c),
        (this.b = r * t.b + this.b * t.d),
        (this.c = s * t.a + this.d * t.c),
        (this.d = s * t.b + this.d * t.d);
    }
    return (
      (this.tx = e * t.a + this.ty * t.c + t.tx),
      (this.ty = e * t.b + this.ty * t.d + t.ty),
      this
    );
  }
  decompose(t) {
    const e = this.a,
      r = this.b,
      s = this.c,
      n = this.d,
      a = t.pivot,
      o = -Math.atan2(-s, n),
      h = Math.atan2(r, e),
      l = Math.abs(o + h);
    return (
      l < 1e-5 || Math.abs(us - l) < 1e-5
        ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
        : ((t.rotation = 0), (t.skew.x = o), (t.skew.y = h)),
      (t.scale.x = Math.sqrt(e * e + r * r)),
      (t.scale.y = Math.sqrt(s * s + n * n)),
      (t.position.x = this.tx + (a.x * e + a.y * s)),
      (t.position.y = this.ty + (a.x * r + a.y * n)),
      t
    );
  }
  invert() {
    const t = this.a,
      e = this.b,
      r = this.c,
      s = this.d,
      n = this.tx,
      a = t * s - e * r;
    return (
      (this.a = s / a),
      (this.b = -e / a),
      (this.c = -r / a),
      (this.d = t / a),
      (this.tx = (r * this.ty - s * n) / a),
      (this.ty = -(t * this.ty - e * n) / a),
      this
    );
  }
  identity() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.tx = 0),
      (this.ty = 0),
      this
    );
  }
  clone() {
    const t = new it();
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyTo(t) {
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyFrom(t) {
    return (
      (this.a = t.a),
      (this.b = t.b),
      (this.c = t.c),
      (this.d = t.d),
      (this.tx = t.tx),
      (this.ty = t.ty),
      this
    );
  }
  static get IDENTITY() {
    return new it();
  }
  static get TEMP_MATRIX() {
    return new it();
  }
}
it.prototype.toString = function () {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const Xe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  Ve = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  We = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  ze = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  Xn = [],
  rl = [],
  Ri = Math.sign;
function Zf() {
  for (let i = 0; i < 16; i++) {
    const t = [];
    Xn.push(t);
    for (let e = 0; e < 16; e++) {
      const r = Ri(Xe[i] * Xe[e] + We[i] * Ve[e]),
        s = Ri(Ve[i] * Xe[e] + ze[i] * Ve[e]),
        n = Ri(Xe[i] * We[e] + We[i] * ze[e]),
        a = Ri(Ve[i] * We[e] + ze[i] * ze[e]);
      for (let o = 0; o < 16; o++)
        if (Xe[o] === r && Ve[o] === s && We[o] === n && ze[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let i = 0; i < 16; i++) {
    const t = new it();
    t.set(Xe[i], Ve[i], We[i], ze[i], 0, 0), rl.push(t);
  }
}
Zf();
const nt = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: (i) => Xe[i],
  uY: (i) => Ve[i],
  vX: (i) => We[i],
  vY: (i) => ze[i],
  inv: (i) => (i & 8 ? i & 15 : -i & 7),
  add: (i, t) => Xn[i][t],
  sub: (i, t) => Xn[i][nt.inv(t)],
  rotate180: (i) => i ^ 4,
  isVertical: (i) => (i & 3) === 2,
  byDirection: (i, t) =>
    Math.abs(i) * 2 <= Math.abs(t)
      ? t >= 0
        ? nt.S
        : nt.N
      : Math.abs(t) * 2 <= Math.abs(i)
      ? i > 0
        ? nt.E
        : nt.W
      : t > 0
      ? i > 0
        ? nt.SE
        : nt.SW
      : i > 0
      ? nt.NE
      : nt.NW,
  matrixAppendRotationInv: (i, t, e = 0, r = 0) => {
    const s = rl[nt.inv(t)];
    (s.tx = e), (s.ty = r), i.append(s);
  },
};
class _e {
  constructor(t, e, r = 0, s = 0) {
    (this._x = r), (this._y = s), (this.cb = t), (this.scope = e);
  }
  clone(t = this.cb, e = this.scope) {
    return new _e(t, e, this._x, this._y);
  }
  set(t = 0, e = t) {
    return (
      (this._x !== t || this._y !== e) &&
        ((this._x = t), (this._y = e), this.cb.call(this.scope)),
      this
    );
  }
  copyFrom(t) {
    return (
      (this._x !== t.x || this._y !== t.y) &&
        ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
      this
    );
  }
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && ((this._x = t), this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && ((this._y = t), this.cb.call(this.scope));
  }
}
_e.prototype.toString = function () {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const Vn = class {
  constructor() {
    (this.worldTransform = new it()),
      (this.localTransform = new it()),
      (this.position = new _e(this.onChange, this, 0, 0)),
      (this.scale = new _e(this.onChange, this, 1, 1)),
      (this.pivot = new _e(this.onChange, this, 0, 0)),
      (this.skew = new _e(this.updateSkew, this, 0, 0)),
      (this._rotation = 0),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1),
      (this._localID = 0),
      (this._currentLocalID = 0),
      (this._worldID = 0),
      (this._parentID = 0);
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    (this._cx = Math.cos(this._rotation + this.skew.y)),
      (this._sx = Math.sin(this._rotation + this.skew.y)),
      (this._cy = -Math.sin(this._rotation - this.skew.x)),
      (this._sy = Math.cos(this._rotation - this.skew.x)),
      this._localID++;
  }
  updateLocalTransform() {
    const i = this.localTransform;
    this._localID !== this._currentLocalID &&
      ((i.a = this._cx * this.scale.x),
      (i.b = this._sx * this.scale.x),
      (i.c = this._cy * this.scale.y),
      (i.d = this._sy * this.scale.y),
      (i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c)),
      (i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d)),
      (this._currentLocalID = this._localID),
      (this._parentID = -1));
  }
  updateTransform(i) {
    const t = this.localTransform;
    if (
      (this._localID !== this._currentLocalID &&
        ((t.a = this._cx * this.scale.x),
        (t.b = this._sx * this.scale.x),
        (t.c = this._cy * this.scale.y),
        (t.d = this._sy * this.scale.y),
        (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
        (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
        (this._currentLocalID = this._localID),
        (this._parentID = -1)),
      this._parentID !== i._worldID)
    ) {
      const e = i.worldTransform,
        r = this.worldTransform;
      (r.a = t.a * e.a + t.b * e.c),
        (r.b = t.a * e.b + t.b * e.d),
        (r.c = t.c * e.a + t.d * e.c),
        (r.d = t.c * e.b + t.d * e.d),
        (r.tx = t.tx * e.a + t.ty * e.c + e.tx),
        (r.ty = t.tx * e.b + t.ty * e.d + e.ty),
        (this._parentID = i._worldID),
        this._worldID++;
    }
  }
  setFromMatrix(i) {
    i.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(i) {
    this._rotation !== i && ((this._rotation = i), this.updateSkew());
  }
};
Vn.IDENTITY = new Vn();
let Ia = Vn;
Ia.prototype.toString = function () {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var Qf = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
  Jf = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function Ho(i, t, e) {
  const r = i.createShader(t);
  return i.shaderSource(r, e), i.compileShader(r), r;
}
function nn(i) {
  const t = new Array(i);
  for (let e = 0; e < t.length; e++) t[e] = !1;
  return t;
}
function il(i, t) {
  switch (i) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return nn(2 * t);
    case "bvec3":
      return nn(3 * t);
    case "bvec4":
      return nn(4 * t);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const Mr = [
    {
      test: (i) => i.type === "float" && i.size === 1 && !i.isArray,
      code: (i) => `
            if(uv["${i}"] !== ud["${i}"].value)
            {
                ud["${i}"].value = uv["${i}"]
                gl.uniform1f(ud["${i}"].location, uv["${i}"])
            }
            `,
    },
    {
      test: (i, t) =>
        (i.type === "sampler2D" ||
          i.type === "samplerCube" ||
          i.type === "sampler2DArray") &&
        i.size === 1 &&
        !i.isArray &&
        (t == null || t.castToBaseTexture !== void 0),
      code: (i) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${i}"], t);

            if(ud["${i}"].value !== t)
            {
                ud["${i}"].value = t;
                gl.uniform1i(ud["${i}"].location, t);
; // eslint-disable-line max-len
            }`,
    },
    {
      test: (i, t) =>
        i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== void 0,
      code: (i) => `
            gl.uniformMatrix3fv(ud["${i}"].location, false, uv["${i}"].toArray(true));
            `,
      codeUbo: (i) => `
                var ${i}_matrix = uv.${i}.toArray(true);

                data[offset] = ${i}_matrix[0];
                data[offset+1] = ${i}_matrix[1];
                data[offset+2] = ${i}_matrix[2];
        
                data[offset + 4] = ${i}_matrix[3];
                data[offset + 5] = ${i}_matrix[4];
                data[offset + 6] = ${i}_matrix[5];
        
                data[offset + 8] = ${i}_matrix[6];
                data[offset + 9] = ${i}_matrix[7];
                data[offset + 10] = ${i}_matrix[8];
            `,
    },
    {
      test: (i, t) =>
        i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== void 0,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${i}"].location, v.x, v.y);
                }`,
      codeUbo: (i) => `
                v = uv.${i};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
    },
    {
      test: (i) => i.type === "vec2" && i.size === 1 && !i.isArray,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${i}"].location, v[0], v[1]);
                }
            `,
    },
    {
      test: (i, t) =>
        i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== void 0,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${i}"].location, v.x, v.y, v.width, v.height)
                }`,
      codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
    },
    {
      test: (i, t) =>
        i.type === "vec4" && i.size === 1 && !i.isArray && t.red !== void 0,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${i}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
      codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `,
    },
    {
      test: (i, t) =>
        i.type === "vec3" && i.size === 1 && !i.isArray && t.red !== void 0,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${i}"].location, v.red, v.green, v.blue)
                }`,
      codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `,
    },
    {
      test: (i) => i.type === "vec4" && i.size === 1 && !i.isArray,
      code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${i}"].location, v[0], v[1], v[2], v[3])
                }`,
    },
  ],
  tp = {
    float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
    vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
    int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
    uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
    uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
    uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
    bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
    bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  },
  ep = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    uint: "gl.uniform1uiv(location, v)",
    uvec2: "gl.uniform2uiv(location, v)",
    uvec3: "gl.uniform3uiv(location, v)",
    uvec4: "gl.uniform4uiv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)",
  };
function rp(i, t) {
  var r;
  const e = [
    `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
  ];
  for (const s in i.uniforms) {
    const n = t[s];
    if (!n) {
      ((r = i.uniforms[s]) == null ? void 0 : r.group) === !0 &&
        (i.uniforms[s].ubo
          ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${s}, '${s}');
                    `)
          : e.push(`
                        renderer.shader.syncUniformGroup(uv.${s}, syncData);
                    `));
      continue;
    }
    const a = i.uniforms[s];
    let o = !1;
    for (let h = 0; h < Mr.length; h++)
      if (Mr[h].test(n, a)) {
        e.push(Mr[h].code(s, a)), (o = !0);
        break;
      }
    if (!o) {
      const h = (n.size === 1 && !n.isArray ? tp : ep)[n.type].replace(
        "location",
        `ud["${s}"].location`
      );
      e.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${h};`);
    }
  }
  return new Function(
    "ud",
    "uv",
    "renderer",
    "syncData",
    e.join(`
`)
  );
}
const sl = {};
let dr = sl;
function ip() {
  if (dr === sl || (dr != null && dr.isContextLost())) {
    const i = F.ADAPTER.createCanvas();
    let t;
    F.PREFER_ENV >= nr.WEBGL2 && (t = i.getContext("webgl2", {})),
      t ||
        ((t =
          i.getContext("webgl", {}) || i.getContext("experimental-webgl", {})),
        t ? t.getExtension("WEBGL_draw_buffers") : (t = null)),
      (dr = t);
  }
  return dr;
}
let Pi;
function sp() {
  if (!Pi) {
    Pi = Ot.MEDIUM;
    const i = ip();
    if (i && i.getShaderPrecisionFormat) {
      const t = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
      t && (Pi = t.precision ? Ot.HIGH : Ot.MEDIUM);
    }
  }
  return Pi;
}
function $o(i, t) {
  const e = i
      .getShaderSource(t)
      .split(
        `
`
      )
      .map((l, c) => `${c}: ${l}`),
    r = i.getShaderInfoLog(t),
    s = r.split(`
`),
    n = {},
    a = s
      .map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")))
      .filter((l) => (l && !n[l] ? ((n[l] = !0), !0) : !1)),
    o = [""];
  a.forEach((l) => {
    (e[l - 1] = `%c${e[l - 1]}%c`),
      o.push(
        "background: #FF0000; color:#FFFFFF; font-size: 10px",
        "font-size: 10px"
      );
  });
  const h = e.join(`
`);
  (o[0] = h),
    console.error(r),
    console.groupCollapsed("click to view full shader code"),
    console.warn(...o),
    console.groupEnd();
}
function np(i, t, e, r) {
  i.getProgramParameter(t, i.LINK_STATUS) ||
    (i.getShaderParameter(e, i.COMPILE_STATUS) || $o(i, e),
    i.getShaderParameter(r, i.COMPILE_STATUS) || $o(i, r),
    console.error("PixiJS Error: Could not initialize shader."),
    i.getProgramInfoLog(t) !== "" &&
      console.warn(
        "PixiJS Warning: gl.getProgramInfoLog()",
        i.getProgramInfoLog(t)
      ));
}
const ap = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1,
};
function nl(i) {
  return ap[i];
}
let Mi = null;
const Xo = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
};
function al(i, t) {
  if (!Mi) {
    const e = Object.keys(Xo);
    Mi = {};
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      Mi[i[s]] = Xo[s];
    }
  }
  return Mi[t];
}
function Vo(i, t, e) {
  if (i.substring(0, 9) !== "precision") {
    let r = t;
    return (
      t === Ot.HIGH && e !== Ot.HIGH && (r = Ot.MEDIUM),
      `precision ${r} float;
${i}`
    );
  } else if (e !== Ot.HIGH && i.substring(0, 15) === "precision highp")
    return i.replace("precision highp", "precision mediump");
  return i;
}
let jr;
function op() {
  if (typeof jr == "boolean") return jr;
  try {
    jr =
      new Function(
        "param1",
        "param2",
        "param3",
        "return param1[param2] === param3;"
      )({ a: "b" }, "a", "b") === !0;
  } catch {
    jr = !1;
  }
  return jr;
}
let hp = 0;
const Bi = {},
  Wn = class _r {
    constructor(t, e, r = "pixi-shader", s = {}) {
      (this.extra = {}),
        (this.id = hp++),
        (this.vertexSrc = t || _r.defaultVertexSrc),
        (this.fragmentSrc = e || _r.defaultFragmentSrc),
        (this.vertexSrc = this.vertexSrc.trim()),
        (this.fragmentSrc = this.fragmentSrc.trim()),
        (this.extra = s),
        this.vertexSrc.substring(0, 8) !== "#version" &&
          ((r = r.replace(/\s+/g, "-")),
          Bi[r] ? (Bi[r]++, (r += `-${Bi[r]}`)) : (Bi[r] = 1),
          (this.vertexSrc = `#define SHADER_NAME ${r}
${this.vertexSrc}`),
          (this.fragmentSrc = `#define SHADER_NAME ${r}
${this.fragmentSrc}`),
          (this.vertexSrc = Vo(
            this.vertexSrc,
            _r.defaultVertexPrecision,
            Ot.HIGH
          )),
          (this.fragmentSrc = Vo(
            this.fragmentSrc,
            _r.defaultFragmentPrecision,
            sp()
          ))),
        (this.glPrograms = {}),
        (this.syncUniforms = null);
    }
    static get defaultVertexSrc() {
      return Jf;
    }
    static get defaultFragmentSrc() {
      return Qf;
    }
    static from(t, e, r) {
      const s = t + e;
      let n = Lo[s];
      return n || (Lo[s] = n = new _r(t, e, r)), n;
    }
  };
(Wn.defaultVertexPrecision = Ot.HIGH),
  (Wn.defaultFragmentPrecision = ye.apple.device ? Ot.HIGH : Ot.MEDIUM);
let ve = Wn,
  lp = 0;
class jt {
  constructor(t, e, r) {
    (this.group = !0),
      (this.syncUniforms = {}),
      (this.dirtyId = 0),
      (this.id = lp++),
      (this.static = !!e),
      (this.ubo = !!r),
      t instanceof lt
        ? ((this.buffer = t),
          (this.buffer.type = he.UNIFORM_BUFFER),
          (this.autoManage = !1),
          (this.ubo = !0))
        : ((this.uniforms = t),
          this.ubo &&
            ((this.buffer = new lt(new Float32Array(1))),
            (this.buffer.type = he.UNIFORM_BUFFER),
            (this.autoManage = !0)));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(t, e, r) {
    if (!this.ubo) this.uniforms[t] = new jt(e, r);
    else
      throw new Error(
        "[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them"
      );
  }
  static from(t, e, r) {
    return new jt(t, e, r);
  }
  static uboFrom(t, e) {
    return new jt(t, e ?? !0, !0);
  }
}
class le {
  constructor(t, e) {
    (this.uniformBindCount = 0),
      (this.program = t),
      e
        ? e instanceof jt
          ? (this.uniformGroup = e)
          : (this.uniformGroup = new jt(e))
        : (this.uniformGroup = new jt({})),
      (this.disposeRunner = new zt("disposeShader"));
  }
  checkUniformExists(t, e) {
    if (e.uniforms[t]) return !0;
    for (const r in e.uniforms) {
      const s = e.uniforms[r];
      if (s.group === !0 && this.checkUniformExists(t, s)) return !0;
    }
    return !1;
  }
  destroy() {
    (this.uniformGroup = null),
      this.disposeRunner.emit(this),
      this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(t, e, r) {
    const s = ve.from(t, e);
    return new le(s, r);
  }
}
class cp {
  constructor(t, e) {
    if (
      ((this.vertexSrc = t),
      (this.fragTemplate = e),
      (this.programCache = {}),
      (this.defaultGroupCache = {}),
      !e.includes("%count%"))
    )
      throw new Error('Fragment template must contain "%count%".');
    if (!e.includes("%forloop%"))
      throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const r = new Int32Array(t);
      for (let n = 0; n < t; n++) r[n] = n;
      this.defaultGroupCache[t] = jt.from({ uSamplers: r }, !0);
      let s = this.fragTemplate;
      (s = s.replace(/%count%/gi, `${t}`)),
        (s = s.replace(/%forloop%/gi, this.generateSampleSrc(t))),
        (this.programCache[t] = new ve(this.vertexSrc, s));
    }
    const e = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new it(),
      default: this.defaultGroupCache[t],
    };
    return new le(this.programCache[t], e);
  }
  generateSampleSrc(t) {
    let e = "";
    (e += `
`),
      (e += `
`);
    for (let r = 0; r < t; r++)
      r > 0 &&
        (e += `
else `),
        r < t - 1 && (e += `if(vTextureId < ${r}.5)`),
        (e += `
{`),
        (e += `
	color = texture2D(uSamplers[${r}], vTextureCoord);`),
        (e += `
}`);
    return (
      (e += `
`),
      (e += `
`),
      e
    );
  }
}
class zn {
  constructor() {
    (this.elements = []), (this.ids = []), (this.count = 0);
  }
  clear() {
    for (let t = 0; t < this.count; t++) this.elements[t] = null;
    this.count = 0;
  }
}
function up() {
  return !ye.apple.device;
}
function dp(i) {
  let t = !0;
  const e = F.ADAPTER.getNavigator();
  if (ye.tablet || ye.phone) {
    if (ye.apple.device) {
      const r = e.userAgent.match(/OS (\d+)_(\d+)?/);
      r && parseInt(r[1], 10) < 11 && (t = !1);
    }
    if (ye.android.device) {
      const r = e.userAgent.match(/Android\s([0-9.]*)/);
      r && parseInt(r[1], 10) < 7 && (t = !1);
    }
  }
  return t ? i : 4;
}
class Rs {
  constructor(t) {
    this.renderer = t;
  }
  flush() {}
  destroy() {
    this.renderer = null;
  }
  start() {}
  stop() {
    this.flush();
  }
  render(t) {}
}
var fp = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
  pp = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Kr = class Xt extends Rs {
  constructor(t) {
    super(t),
      this.setShaderGenerator(),
      (this.geometryClass = el),
      (this.vertexSize = 6),
      (this.state = ue.for2d()),
      (this.size = Xt.defaultBatchSize * 4),
      (this._vertexCount = 0),
      (this._indexCount = 0),
      (this._bufferedElements = []),
      (this._bufferedTextures = []),
      (this._bufferSize = 0),
      (this._shader = null),
      (this._packedGeometries = []),
      (this._packedGeometryPoolSize = 2),
      (this._flushId = 0),
      (this._aBuffers = {}),
      (this._iBuffers = {}),
      (this.maxTextures = 1),
      this.renderer.on("prerender", this.onPrerender, this),
      t.runners.contextChange.add(this),
      (this._dcIndex = 0),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      (this._tempBoundTextures = []);
  }
  static get defaultMaxTextures() {
    return (
      (this._defaultMaxTextures = this._defaultMaxTextures ?? dp(32)),
      this._defaultMaxTextures
    );
  }
  static set defaultMaxTextures(t) {
    this._defaultMaxTextures = t;
  }
  static get canUploadSameBuffer() {
    return (
      (this._canUploadSameBuffer = this._canUploadSameBuffer ?? up()),
      this._canUploadSameBuffer
    );
  }
  static set canUploadSameBuffer(t) {
    this._canUploadSameBuffer = t;
  }
  get MAX_TEXTURES() {
    return (
      q(
        "7.1.0",
        "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"
      ),
      this.maxTextures
    );
  }
  static get defaultVertexSrc() {
    return pp;
  }
  static get defaultFragmentTemplate() {
    return fp;
  }
  setShaderGenerator({
    vertex: t = Xt.defaultVertexSrc,
    fragment: e = Xt.defaultFragmentTemplate,
  } = {}) {
    this.shaderGenerator = new cp(t, e);
  }
  contextChange() {
    const t = this.renderer.gl;
    F.PREFER_ENV === nr.WEBGL_LEGACY
      ? (this.maxTextures = 1)
      : ((this.maxTextures = Math.min(
          t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
          Xt.defaultMaxTextures
        )),
        (this.maxTextures = $f(this.maxTextures, t))),
      (this._shader = this.shaderGenerator.generateShader(this.maxTextures));
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const { _drawCallPool: t, _textureArrayPool: e } = Xt,
      r = this.size / 4,
      s = Math.floor(r / this.maxTextures) + 1;
    for (; t.length < r; ) t.push(new $n());
    for (; e.length < s; ) e.push(new zn());
    for (let n = 0; n < this.maxTextures; n++)
      this._tempBoundTextures[n] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(t) {
    t._texture.valid &&
      (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(),
      (this._vertexCount += t.vertexData.length / 2),
      (this._indexCount += t.indices.length),
      (this._bufferedTextures[this._bufferSize] = t._texture.baseTexture),
      (this._bufferedElements[this._bufferSize++] = t));
  }
  buildTexturesAndDrawCalls() {
    const { _bufferedTextures: t, maxTextures: e } = this,
      r = Xt._textureArrayPool,
      s = this.renderer.batch,
      n = this._tempBoundTextures,
      a = this.renderer.textureGC.count;
    let o = ++W._globalBatch,
      h = 0,
      l = r[0],
      c = 0;
    s.copyBoundTextures(n, e);
    for (let u = 0; u < this._bufferSize; ++u) {
      const d = t[u];
      (t[u] = null),
        d._batchEnabled !== o &&
          (l.count >= e &&
            (s.boundArray(l, n, o, e),
            this.buildDrawCalls(l, c, u),
            (c = u),
            (l = r[++h]),
            ++o),
          (d._batchEnabled = o),
          (d.touched = a),
          (l.elements[l.count++] = d));
    }
    l.count > 0 &&
      (s.boundArray(l, n, o, e),
      this.buildDrawCalls(l, c, this._bufferSize),
      ++h,
      ++o);
    for (let u = 0; u < n.length; u++) n[u] = null;
    W._globalBatch = o;
  }
  buildDrawCalls(t, e, r) {
    const {
        _bufferedElements: s,
        _attributeBuffer: n,
        _indexBuffer: a,
        vertexSize: o,
      } = this,
      h = Xt._drawCallPool;
    let l = this._dcIndex,
      c = this._aIndex,
      u = this._iIndex,
      d = h[l];
    (d.start = this._iIndex), (d.texArray = t);
    for (let f = e; f < r; ++f) {
      const p = s[f],
        m = p._texture.baseTexture,
        g = Zh[m.alphaMode ? 1 : 0][p.blendMode];
      (s[f] = null),
        e < f &&
          d.blend !== g &&
          ((d.size = u - d.start),
          (e = f),
          (d = h[++l]),
          (d.texArray = t),
          (d.start = u)),
        this.packInterleavedGeometry(p, n, a, c, u),
        (c += (p.vertexData.length / 2) * o),
        (u += p.indices.length),
        (d.blend = g);
    }
    e < r && ((d.size = u - d.start), ++l),
      (this._dcIndex = l),
      (this._aIndex = c),
      (this._iIndex = u);
  }
  bindAndClearTexArray(t) {
    const e = this.renderer.texture;
    for (let r = 0; r < t.count; r++)
      e.bind(t.elements[r], t.ids[r]), (t.elements[r] = null);
    t.count = 0;
  }
  updateGeometry() {
    const { _packedGeometries: t, _attributeBuffer: e, _indexBuffer: r } = this;
    Xt.canUploadSameBuffer
      ? (t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(r),
        this.renderer.geometry.updateBuffers())
      : (this._packedGeometryPoolSize <= this._flushId &&
          (this._packedGeometryPoolSize++,
          (t[this._flushId] = new this.geometryClass())),
        t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(r),
        this.renderer.geometry.bind(t[this._flushId]),
        this.renderer.geometry.updateBuffers(),
        this._flushId++);
  }
  drawBatches() {
    const t = this._dcIndex,
      { gl: e, state: r } = this.renderer,
      s = Xt._drawCallPool;
    let n = null;
    for (let a = 0; a < t; a++) {
      const { texArray: o, type: h, size: l, start: c, blend: u } = s[a];
      n !== o && ((n = o), this.bindAndClearTexArray(o)),
        (this.state.blendMode = u),
        r.set(this.state),
        e.drawElements(h, l, e.UNSIGNED_SHORT, c * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 &&
      ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
      (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._dcIndex = 0),
      this.buildTexturesAndDrawCalls(),
      this.updateGeometry(),
      this.drawBatches(),
      (this._bufferSize = 0),
      (this._vertexCount = 0),
      (this._indexCount = 0));
  }
  start() {
    this.renderer.state.set(this.state),
      this.renderer.texture.ensureSamplerType(this.maxTextures),
      this.renderer.shader.bind(this._shader),
      Xt.canUploadSameBuffer &&
        this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let t = 0; t < this._packedGeometryPoolSize; t++)
      this._packedGeometries[t] && this._packedGeometries[t].destroy();
    this.renderer.off("prerender", this.onPrerender, this),
      (this._aBuffers = null),
      (this._iBuffers = null),
      (this._packedGeometries = null),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      this._shader && (this._shader.destroy(), (this._shader = null)),
      super.destroy();
  }
  getAttributeBuffer(t) {
    const e = ls(Math.ceil(t / 8)),
      r = Fo(e),
      s = e * 8;
    this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
    let n = this._aBuffers[s];
    return n || (this._aBuffers[s] = n = new kn(s * this.vertexSize * 4)), n;
  }
  getIndexBuffer(t) {
    const e = ls(Math.ceil(t / 12)),
      r = Fo(e),
      s = e * 12;
    this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
    let n = this._iBuffers[r];
    return n || (this._iBuffers[r] = n = new Uint16Array(s)), n;
  }
  packInterleavedGeometry(t, e, r, s, n) {
    const { uint32View: a, float32View: o } = e,
      h = s / this.vertexSize,
      l = t.uvs,
      c = t.indices,
      u = t.vertexData,
      d = t._texture.baseTexture._batchLocation,
      f = Math.min(t.worldAlpha, 1),
      p = rt.shared
        .setValue(t._tintRGB)
        .toPremultiplied(f, t._texture.baseTexture.alphaMode > 0);
    for (let m = 0; m < u.length; m += 2)
      (o[s++] = u[m]),
        (o[s++] = u[m + 1]),
        (o[s++] = l[m]),
        (o[s++] = l[m + 1]),
        (a[s++] = p),
        (o[s++] = d);
    for (let m = 0; m < c.length; m++) r[n++] = h + c[m];
  }
};
(Kr.defaultBatchSize = 4096),
  (Kr.extension = { name: "batch", type: R.RendererPlugin }),
  (Kr._drawCallPool = []),
  (Kr._textureArrayPool = []);
let je = Kr;
L.add(je);
var mp = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
  gp = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const jn = class Zr extends le {
  constructor(t, e, r) {
    const s = ve.from(t || Zr.defaultVertexSrc, e || Zr.defaultFragmentSrc);
    super(s, r),
      (this.padding = 0),
      (this.resolution = Zr.defaultResolution),
      (this.multisample = Zr.defaultMultisample),
      (this.enabled = !0),
      (this.autoFit = !0),
      (this.state = new ue());
  }
  apply(t, e, r, s, n) {
    t.applyFilter(this, e, r, s);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution = t;
  }
  static get defaultVertexSrc() {
    return gp;
  }
  static get defaultFragmentSrc() {
    return mp;
  }
};
(jn.defaultResolution = 1), (jn.defaultMultisample = dt.NONE);
let It = jn;
class ds {
  constructor() {
    (this.clearBeforeRender = !0),
      (this._backgroundColor = new rt(0)),
      (this.alpha = 1);
  }
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender;
    const { backgroundColor: e, background: r, backgroundAlpha: s } = t,
      n = r ?? e;
    n !== void 0 && (this.color = n), (this.alpha = s);
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(t) {
    this._backgroundColor.setValue(t);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {}
}
(ds.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: !0,
}),
  (ds.extension = {
    type: [R.RendererSystem, R.CanvasRendererSystem],
    name: "background",
  });
L.add(ds);
class ol {
  constructor(t) {
    (this.renderer = t),
      (this.emptyRenderer = new Rs(t)),
      (this.currentRenderer = this.emptyRenderer);
  }
  setObjectRenderer(t) {
    this.currentRenderer !== t &&
      (this.currentRenderer.stop(),
      (this.currentRenderer = t),
      this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(t, e) {
    const { boundTextures: r } = this.renderer.texture;
    for (let s = e - 1; s >= 0; --s)
      (t[s] = r[s] || null), t[s] && (t[s]._batchLocation = s);
  }
  boundArray(t, e, r, s) {
    const { elements: n, ids: a, count: o } = t;
    let h = 0;
    for (let l = 0; l < o; l++) {
      const c = n[l],
        u = c._batchLocation;
      if (u >= 0 && u < s && e[u] === c) {
        a[l] = u;
        continue;
      }
      for (; h < s; ) {
        const d = e[h];
        if (d && d._batchEnabled === r && d._batchLocation === h) {
          h++;
          continue;
        }
        (a[l] = h), (c._batchLocation = h), (e[h] = c);
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
ol.extension = { type: R.RendererSystem, name: "batch" };
L.add(ol);
let Wo = 0;
class fs {
  constructor(t) {
    (this.renderer = t),
      (this.webGLVersion = 1),
      (this.extensions = {}),
      (this.supports = { uint32Indices: !1 }),
      (this.handleContextLost = this.handleContextLost.bind(this)),
      (this.handleContextRestored = this.handleContextRestored.bind(this));
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(t) {
    (this.gl = t), (this.renderer.gl = t), (this.renderer.CONTEXT_UID = Wo++);
  }
  init(t) {
    if (t.context) this.initFromContext(t.context);
    else {
      const e = this.renderer.background.alpha < 1,
        r = t.premultipliedAlpha;
      (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
        (this.useContextAlpha = t.useContextAlpha),
        (this.powerPreference = t.powerPreference),
        this.initFromOptions({
          alpha: e,
          premultipliedAlpha: r,
          antialias: t.antialias,
          stencil: !0,
          preserveDrawingBuffer: t.preserveDrawingBuffer,
          powerPreference: t.powerPreference,
        });
    }
  }
  initFromContext(t) {
    (this.gl = t),
      this.validateContext(t),
      (this.renderer.gl = t),
      (this.renderer.CONTEXT_UID = Wo++),
      this.renderer.runners.contextChange.emit(t);
    const e = this.renderer.view;
    e.addEventListener !== void 0 &&
      (e.addEventListener("webglcontextlost", this.handleContextLost, !1),
      e.addEventListener(
        "webglcontextrestored",
        this.handleContextRestored,
        !1
      ));
  }
  initFromOptions(t) {
    const e = this.createContext(this.renderer.view, t);
    this.initFromContext(e);
  }
  createContext(t, e) {
    let r;
    if ((F.PREFER_ENV >= nr.WEBGL2 && (r = t.getContext("webgl2", e)), r))
      this.webGLVersion = 2;
    else if (
      ((this.webGLVersion = 1),
      (r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)),
      !r)
    )
      throw new Error(
        "This browser does not support WebGL. Try using the canvas renderer"
      );
    return (this.gl = r), this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: t } = this,
      e = {
        loseContext: t.getExtension("WEBGL_lose_context"),
        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
        s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: t.getExtension("WEBGL_compressed_texture_etc"),
        etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc:
          t.getExtension("WEBGL_compressed_texture_pvrtc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: t.getExtension("WEBGL_compressed_texture_atc"),
        astc: t.getExtension("WEBGL_compressed_texture_astc"),
        bptc: t.getExtension("EXT_texture_compression_bptc"),
      };
    this.webGLVersion === 1
      ? Object.assign(this.extensions, e, {
          drawBuffers: t.getExtension("WEBGL_draw_buffers"),
          depthTexture: t.getExtension("WEBGL_depth_texture"),
          vertexArrayObject:
            t.getExtension("OES_vertex_array_object") ||
            t.getExtension("MOZ_OES_vertex_array_object") ||
            t.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: t.getExtension("OES_element_index_uint"),
          floatTexture: t.getExtension("OES_texture_float"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          textureHalfFloat: t.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: t.getExtension(
            "OES_texture_half_float_linear"
          ),
        })
      : this.webGLVersion === 2 &&
        Object.assign(this.extensions, e, {
          colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
        });
  }
  handleContextLost(t) {
    t.preventDefault(),
      setTimeout(() => {
        this.gl.isContextLost() &&
          this.extensions.loseContext &&
          this.extensions.loseContext.restoreContext();
      }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    (this.renderer = null),
      t.removeEventListener !== void 0 &&
        (t.removeEventListener("webglcontextlost", this.handleContextLost),
        t.removeEventListener(
          "webglcontextrestored",
          this.handleContextRestored
        )),
      this.gl.useProgram(null),
      this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(t) {
    const e = t.getContextAttributes(),
      r =
        "WebGL2RenderingContext" in globalThis &&
        t instanceof globalThis.WebGL2RenderingContext;
    r && (this.webGLVersion = 2),
      e &&
        !e.stencil &&
        console.warn(
          "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
        );
    const s = r || !!t.getExtension("OES_element_index_uint");
    (this.supports.uint32Indices = s),
      s ||
        console.warn(
          "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
        );
  }
}
(fs.defaultOptions = {
  context: null,
  antialias: !1,
  premultipliedAlpha: !0,
  preserveDrawingBuffer: !1,
  powerPreference: "default",
}),
  (fs.extension = { type: R.RendererSystem, name: "context" });
L.add(fs);
class Yn {
  constructor(t, e) {
    if (
      ((this.width = Math.round(t)),
      (this.height = Math.round(e)),
      !this.width || !this.height)
    )
      throw new Error("Framebuffer width or height is zero");
    (this.stencil = !1),
      (this.depth = !1),
      (this.dirtyId = 0),
      (this.dirtyFormat = 0),
      (this.dirtySize = 0),
      (this.depthTexture = null),
      (this.colorTextures = []),
      (this.glFramebuffers = {}),
      (this.disposeRunner = new zt("disposeFramebuffer")),
      (this.multisample = dt.NONE);
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(t = 0, e) {
    return (
      (this.colorTextures[t] =
        e ||
        new W(null, {
          scaleMode: ge.NEAREST,
          resolution: 1,
          mipmap: ce.OFF,
          width: this.width,
          height: this.height,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  addDepthTexture(t) {
    return (
      (this.depthTexture =
        t ||
        new W(null, {
          scaleMode: ge.NEAREST,
          resolution: 1,
          width: this.width,
          height: this.height,
          mipmap: ce.OFF,
          format: w.DEPTH_COMPONENT,
          type: k.UNSIGNED_SHORT,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  enableDepth() {
    return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(t, e) {
    if (((t = Math.round(t)), (e = Math.round(e)), !t || !e))
      throw new Error("Framebuffer width and height must not be zero");
    if (!(t === this.width && e === this.height)) {
      (this.width = t), (this.height = e), this.dirtyId++, this.dirtySize++;
      for (let r = 0; r < this.colorTextures.length; r++) {
        const s = this.colorTextures[r],
          n = s.resolution;
        s.setSize(t / n, e / n);
      }
      if (this.depthTexture) {
        const r = this.depthTexture.resolution;
        this.depthTexture.setSize(t / r, e / r);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroyDepthTexture() {
    this.depthTexture &&
      (this.depthTexture.destroy(),
      (this.depthTexture = null),
      ++this.dirtyId,
      ++this.dirtyFormat);
  }
}
class hl extends W {
  constructor(t = {}) {
    if (typeof t == "number") {
      const e = arguments[0],
        r = arguments[1],
        s = arguments[2],
        n = arguments[3];
      t = { width: e, height: r, scaleMode: s, resolution: n };
    }
    (t.width = t.width ?? 100),
      (t.height = t.height ?? 100),
      t.multisample ?? (t.multisample = dt.NONE),
      super(null, t),
      (this.mipmap = ce.OFF),
      (this.valid = !0),
      (this._clear = new rt([0, 0, 0, 0])),
      (this.framebuffer = new Yn(
        this.realWidth,
        this.realHeight
      ).addColorTexture(0, this)),
      (this.framebuffer.multisample = t.multisample),
      (this.maskStack = []),
      (this.filterStack = [{}]);
  }
  set clearColor(t) {
    this._clear.setValue(t);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e) {
    this.framebuffer.resize(t * this.resolution, e * this.resolution),
      this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(),
      this.framebuffer.destroyDepthTexture(),
      (this.framebuffer = null);
  }
}
class Ee extends di {
  constructor(t) {
    const e = t,
      r = e.naturalWidth || e.videoWidth || e.displayWidth || e.width,
      s = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
    super(r, s), (this.source = t), (this.noSubImage = !1);
  }
  static crossOrigin(t, e, r) {
    r === void 0 && !e.startsWith("data:")
      ? (t.crossOrigin = kf(e))
      : r !== !1 && (t.crossOrigin = typeof r == "string" ? r : "anonymous");
  }
  upload(t, e, r, s) {
    const n = t.gl,
      a = e.realWidth,
      o = e.realHeight;
    if (
      ((s = s || this.source),
      typeof HTMLImageElement < "u" && s instanceof HTMLImageElement)
    ) {
      if (!s.complete || s.naturalWidth === 0) return !1;
    } else if (
      typeof HTMLVideoElement < "u" &&
      s instanceof HTMLVideoElement &&
      s.readyState <= 1
    )
      return !1;
    return (
      n.pixelStorei(
        n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        e.alphaMode === Rt.UNPACK
      ),
      !this.noSubImage &&
      e.target === n.TEXTURE_2D &&
      r.width === a &&
      r.height === o
        ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, s)
        : ((r.width = a),
          (r.height = o),
          n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, s)),
      !0
    );
  }
  update() {
    if (this.destroyed) return;
    const t = this.source,
      e = t.naturalWidth || t.videoWidth || t.width,
      r = t.naturalHeight || t.videoHeight || t.height;
    this.resize(e, r), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class ll extends Ee {
  constructor(t, e) {
    if (((e = e || {}), typeof t == "string")) {
      const r = new Image();
      Ee.crossOrigin(r, t, e.crossorigin), (r.src = t), (t = r);
    }
    super(t),
      !t.complete &&
        this._width &&
        this._height &&
        ((this._width = 0), (this._height = 0)),
      (this.url = t.src),
      (this._process = null),
      (this.preserveBitmap = !1),
      (this.createBitmap =
        (e.createBitmap ?? F.CREATE_IMAGE_BITMAP) &&
        !!globalThis.createImageBitmap),
      (this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null),
      (this.bitmap = null),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load(t) {
    return this._load
      ? this._load
      : (t !== void 0 && (this.createBitmap = t),
        (this._load = new Promise((e, r) => {
          const s = this.source;
          this.url = s.src;
          const n = () => {
            this.destroyed ||
              ((s.onload = null),
              (s.onerror = null),
              this.update(),
              (this._load = null),
              this.createBitmap ? e(this.process()) : e(this));
          };
          s.complete && s.src
            ? n()
            : ((s.onload = n),
              (s.onerror = (a) => {
                r(a), this.onError.emit(a);
              }));
        })),
        this._load);
  }
  process() {
    const t = this.source;
    if (this._process !== null) return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    const e = globalThis.createImageBitmap,
      r = !t.crossOrigin || t.crossOrigin === "anonymous";
    return (
      (this._process = fetch(t.src, { mode: r ? "cors" : "no-cors" })
        .then((s) => s.blob())
        .then((s) =>
          e(s, 0, 0, t.width, t.height, {
            premultiplyAlpha:
              this.alphaMode === null || this.alphaMode === Rt.UNPACK
                ? "premultiply"
                : "none",
          })
        )
        .then((s) =>
          this.destroyed
            ? Promise.reject()
            : ((this.bitmap = s),
              this.update(),
              (this._process = null),
              Promise.resolve(this))
        )),
      this._process
    );
  }
  upload(t, e, r) {
    if (
      (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
      !this.createBitmap)
    )
      return super.upload(t, e, r);
    if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
    if ((super.upload(t, e, r, this.bitmap), !this.preserveBitmap)) {
      let s = !0;
      const n = e._glTextures;
      for (const a in n) {
        const o = n[a];
        if (o !== r && o.dirtyId !== e.dirtyId) {
          s = !1;
          break;
        }
      }
      s && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
    }
    return !0;
  }
  dispose() {
    (this.source.onload = null),
      (this.source.onerror = null),
      super.dispose(),
      this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
      (this._process = null),
      (this._load = null);
  }
  static test(t) {
    return (
      typeof HTMLImageElement < "u" &&
      (typeof t == "string" || t instanceof HTMLImageElement)
    );
  }
}
class Ra {
  constructor() {
    (this.x0 = 0),
      (this.y0 = 0),
      (this.x1 = 1),
      (this.y1 = 0),
      (this.x2 = 1),
      (this.y2 = 1),
      (this.x3 = 0),
      (this.y3 = 1),
      (this.uvsFloat32 = new Float32Array(8));
  }
  set(t, e, r) {
    const s = e.width,
      n = e.height;
    if (r) {
      const a = t.width / 2 / s,
        o = t.height / 2 / n,
        h = t.x / s + a,
        l = t.y / n + o;
      (r = nt.add(r, nt.NW)),
        (this.x0 = h + a * nt.uX(r)),
        (this.y0 = l + o * nt.uY(r)),
        (r = nt.add(r, 2)),
        (this.x1 = h + a * nt.uX(r)),
        (this.y1 = l + o * nt.uY(r)),
        (r = nt.add(r, 2)),
        (this.x2 = h + a * nt.uX(r)),
        (this.y2 = l + o * nt.uY(r)),
        (r = nt.add(r, 2)),
        (this.x3 = h + a * nt.uX(r)),
        (this.y3 = l + o * nt.uY(r));
    } else
      (this.x0 = t.x / s),
        (this.y0 = t.y / n),
        (this.x1 = (t.x + t.width) / s),
        (this.y1 = t.y / n),
        (this.x2 = (t.x + t.width) / s),
        (this.y2 = (t.y + t.height) / n),
        (this.x3 = t.x / s),
        (this.y3 = (t.y + t.height) / n);
    (this.uvsFloat32[0] = this.x0),
      (this.uvsFloat32[1] = this.y0),
      (this.uvsFloat32[2] = this.x1),
      (this.uvsFloat32[3] = this.y1),
      (this.uvsFloat32[4] = this.x2),
      (this.uvsFloat32[5] = this.y2),
      (this.uvsFloat32[6] = this.x3),
      (this.uvsFloat32[7] = this.y3);
  }
}
Ra.prototype.toString = function () {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const zo = new Ra();
function Di(i) {
  (i.destroy = function () {}),
    (i.on = function () {}),
    (i.once = function () {}),
    (i.emit = function () {});
}
class O extends mi {
  constructor(t, e, r, s, n, a, o) {
    if (
      (super(),
      (this.noFrame = !1),
      e || ((this.noFrame = !0), (e = new j(0, 0, 1, 1))),
      t instanceof O && (t = t.baseTexture),
      (this.baseTexture = t),
      (this._frame = e),
      (this.trim = s),
      (this.valid = !1),
      (this.destroyed = !1),
      (this._uvs = zo),
      (this.uvMatrix = null),
      (this.orig = r || e),
      (this._rotate = Number(n || 0)),
      n === !0)
    )
      this._rotate = 2;
    else if (this._rotate % 2 !== 0)
      throw new Error(
        "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
      );
    (this.defaultAnchor = a ? new Q(a.x, a.y) : new Q(0, 0)),
      (this.defaultBorders = o),
      (this._updateID = 0),
      (this.textureCacheIds = []),
      t.valid
        ? this.noFrame
          ? t.valid && this.onBaseTextureUpdated(t)
          : (this.frame = e)
        : t.once("loaded", this.onBaseTextureUpdated, this),
      this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) return;
      (this._frame.width = t.width),
        (this._frame.height = t.height),
        (this.valid = !0),
        this.updateUvs();
    } else this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const { resource: e } = this.baseTexture;
        e != null && e.url && te[e.url] && O.removeFromCache(e.url),
          this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
        this.baseTexture.off("update", this.onBaseTextureUpdated, this),
        (this.baseTexture = null);
    }
    (this._frame = null),
      (this._uvs = null),
      (this.trim = null),
      (this.orig = null),
      (this.valid = !1),
      O.removeFromCache(this),
      (this.textureCacheIds = null),
      (this.destroyed = !0),
      this.emit("destroyed", this),
      this.removeAllListeners();
  }
  clone() {
    var s;
    const t = this._frame.clone(),
      e = this._frame === this.orig ? t : this.orig.clone(),
      r = new O(
        this.baseTexture,
        !this.noFrame && t,
        e,
        (s = this.trim) == null ? void 0 : s.clone(),
        this.rotate,
        this.defaultAnchor,
        this.defaultBorders
      );
    return this.noFrame && (r._frame = t), r;
  }
  updateUvs() {
    this._uvs === zo && (this._uvs = new Ra()),
      this._uvs.set(this._frame, this.baseTexture, this.rotate),
      this._updateID++;
  }
  static from(t, e = {}, r = F.STRICT_TEXTURE_CACHE) {
    const s = typeof t == "string";
    let n = null;
    if (s) n = t;
    else if (t instanceof W) {
      if (!t.cacheId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        (t.cacheId = `${o}-${ir()}`), W.addToCache(t, t.cacheId);
      }
      n = t.cacheId;
    } else {
      if (!t._pixiId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${ir()}`;
      }
      n = t._pixiId;
    }
    let a = te[n];
    if (s && r && !a)
      throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
    return (
      !a && !(t instanceof W)
        ? (e.resolution || (e.resolution = Te(t)),
          (a = new O(new W(t, e))),
          (a.baseTexture.cacheId = n),
          W.addToCache(a.baseTexture, n),
          O.addToCache(a, n))
        : !a && t instanceof W && ((a = new O(t)), O.addToCache(a, n)),
      a
    );
  }
  static fromURL(t, e) {
    const r = Object.assign(
        { autoLoad: !1 },
        e == null ? void 0 : e.resourceOptions
      ),
      s = O.from(t, Object.assign({ resourceOptions: r }, e), !1),
      n = s.baseTexture.resource;
    return s.baseTexture.valid
      ? Promise.resolve(s)
      : n.load().then(() => Promise.resolve(s));
  }
  static fromBuffer(t, e, r, s) {
    return new O(W.fromBuffer(t, e, r, s));
  }
  static fromLoader(t, e, r, s) {
    const n = new W(
        t,
        Object.assign(
          { scaleMode: W.defaultOptions.scaleMode, resolution: Te(e) },
          s
        )
      ),
      { resource: a } = n;
    a instanceof ll && (a.url = e);
    const o = new O(n);
    return (
      r || (r = e),
      W.addToCache(o.baseTexture, r),
      O.addToCache(o, r),
      r !== e && (W.addToCache(o.baseTexture, e), O.addToCache(o, e)),
      o.baseTexture.valid
        ? Promise.resolve(o)
        : new Promise((h) => {
            o.baseTexture.once("loaded", () => h(o));
          })
    );
  }
  static addToCache(t, e) {
    e &&
      (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
      te[e] &&
        te[e] !== t &&
        console.warn(
          `Texture added to the cache with an id [${e}] that already had an entry`
        ),
      (te[e] = t));
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = te[t];
      if (e) {
        const r = e.textureCacheIds.indexOf(t);
        return r > -1 && e.textureCacheIds.splice(r, 1), delete te[t], e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e)
        te[t.textureCacheIds[e]] === t && delete te[t.textureCacheIds[e]];
      return (t.textureCacheIds.length = 0), t;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(t) {
    (this._frame = t), (this.noFrame = !1);
    const { x: e, y: r, width: s, height: n } = t,
      a = e + s > this.baseTexture.width,
      o = r + n > this.baseTexture.height;
    if (a || o) {
      const h = a && o ? "and" : "or",
        l = `X: ${e} + ${s} = ${e + s} > ${this.baseTexture.width}`,
        c = `Y: ${r} + ${n} = ${r + n} > ${this.baseTexture.height}`;
      throw new Error(
        `Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`
      );
    }
    (this.valid = s && n && this.baseTexture.valid),
      !this.trim && !this.rotate && (this.orig = t),
      this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    (this._rotate = t), this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return (
      O._EMPTY ||
        ((O._EMPTY = new O(new W())), Di(O._EMPTY), Di(O._EMPTY.baseTexture)),
      O._EMPTY
    );
  }
  static get WHITE() {
    if (!O._WHITE) {
      const t = F.ADAPTER.createCanvas(16, 16),
        e = t.getContext("2d");
      (t.width = 16),
        (t.height = 16),
        (e.fillStyle = "white"),
        e.fillRect(0, 0, 16, 16),
        (O._WHITE = new O(W.from(t))),
        Di(O._WHITE),
        Di(O._WHITE.baseTexture);
    }
    return O._WHITE;
  }
}
class or extends O {
  constructor(t, e) {
    super(t, e),
      (this.valid = !0),
      (this.filterFrame = null),
      (this.filterPoolKey = null),
      this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e, r = !0) {
    const s = this.baseTexture.resolution,
      n = Math.round(t * s) / s,
      a = Math.round(e * s) / s;
    (this.valid = n > 0 && a > 0),
      (this._frame.width = this.orig.width = n),
      (this._frame.height = this.orig.height = a),
      r && this.baseTexture.resize(n, a),
      this.updateUvs();
  }
  setResolution(t) {
    const { baseTexture: e } = this;
    e.resolution !== t &&
      (e.setResolution(t), this.resize(e.width, e.height, !1));
  }
  static create(t) {
    return new or(new hl(t));
  }
}
class cl {
  constructor(t) {
    (this.texturePool = {}),
      (this.textureOptions = t || {}),
      (this.enableFullScreen = !1),
      (this._pixelsWidth = 0),
      (this._pixelsHeight = 0);
  }
  createTexture(t, e, r = dt.NONE) {
    const s = new hl(
      Object.assign(
        { width: t, height: e, resolution: 1, multisample: r },
        this.textureOptions
      )
    );
    return new or(s);
  }
  getOptimalTexture(t, e, r = 1, s = dt.NONE) {
    let n;
    (t = Math.max(Math.ceil(t * r - 1e-6), 1)),
      (e = Math.max(Math.ceil(e * r - 1e-6), 1)),
      !this.enableFullScreen ||
      t !== this._pixelsWidth ||
      e !== this._pixelsHeight
        ? ((t = ls(t)),
          (e = ls(e)),
          (n = (((t & 65535) << 16) | (e & 65535)) >>> 0),
          s > 1 && (n += s * 4294967296))
        : (n = s > 1 ? -s : -1),
      this.texturePool[n] || (this.texturePool[n] = []);
    let a = this.texturePool[n].pop();
    return (
      a || (a = this.createTexture(t, e, s)),
      (a.filterPoolKey = n),
      a.setResolution(r),
      a
    );
  }
  getFilterTexture(t, e, r) {
    const s = this.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      r || dt.NONE
    );
    return (s.filterFrame = t.filterFrame), s;
  }
  returnTexture(t) {
    const e = t.filterPoolKey;
    (t.filterFrame = null), this.texturePool[e].push(t);
  }
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  clear(t) {
    if (((t = t !== !1), t))
      for (const e in this.texturePool) {
        const r = this.texturePool[e];
        if (r) for (let s = 0; s < r.length; s++) r[s].destroy(!0);
      }
    this.texturePool = {};
  }
  setScreenSize(t) {
    if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const e in this.texturePool) {
        if (!(Number(e) < 0)) continue;
        const r = this.texturePool[e];
        if (r) for (let s = 0; s < r.length; s++) r[s].destroy(!0);
        this.texturePool[e] = [];
      }
      (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
    }
  }
}
cl.SCREEN_KEY = -1;
class yp extends Le {
  constructor() {
    super(),
      this.addAttribute(
        "aVertexPosition",
        new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      ).addIndex([0, 1, 3, 2]);
  }
}
class ul extends Le {
  constructor() {
    super(),
      (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
      (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
      (this.vertexBuffer = new lt(this.vertices)),
      (this.uvBuffer = new lt(this.uvs)),
      this.addAttribute("aVertexPosition", this.vertexBuffer)
        .addAttribute("aTextureCoord", this.uvBuffer)
        .addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(t, e) {
    let r = 0,
      s = 0;
    return (
      (this.uvs[0] = r),
      (this.uvs[1] = s),
      (this.uvs[2] = r + e.width / t.width),
      (this.uvs[3] = s),
      (this.uvs[4] = r + e.width / t.width),
      (this.uvs[5] = s + e.height / t.height),
      (this.uvs[6] = r),
      (this.uvs[7] = s + e.height / t.height),
      (r = e.x),
      (s = e.y),
      (this.vertices[0] = r),
      (this.vertices[1] = s),
      (this.vertices[2] = r + e.width),
      (this.vertices[3] = s),
      (this.vertices[4] = r + e.width),
      (this.vertices[5] = s + e.height),
      (this.vertices[6] = r),
      (this.vertices[7] = s + e.height),
      this.invalidate(),
      this
    );
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class _p {
  constructor() {
    (this.renderTexture = null),
      (this.target = null),
      (this.legacy = !1),
      (this.resolution = 1),
      (this.multisample = dt.NONE),
      (this.sourceFrame = new j()),
      (this.destinationFrame = new j()),
      (this.bindingSourceFrame = new j()),
      (this.bindingDestinationFrame = new j()),
      (this.filters = []),
      (this.transform = null);
  }
  clear() {
    (this.target = null), (this.filters = null), (this.renderTexture = null);
  }
}
const Fi = [new Q(), new Q(), new Q(), new Q()],
  an = new it();
class dl {
  constructor(t) {
    (this.renderer = t),
      (this.defaultFilterStack = [{}]),
      (this.texturePool = new cl()),
      (this.statePool = []),
      (this.quad = new yp()),
      (this.quadUv = new ul()),
      (this.tempRect = new j()),
      (this.activeState = {}),
      (this.globalUniforms = new jt(
        {
          outputFrame: new j(),
          inputSize: new Float32Array(4),
          inputPixel: new Float32Array(4),
          inputClamp: new Float32Array(4),
          resolution: 1,
          filterArea: new Float32Array(4),
          filterClamp: new Float32Array(4),
        },
        !0
      )),
      (this.forceClear = !1),
      (this.useMaxPadding = !1);
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(t, e) {
    const r = this.renderer,
      s = this.defaultFilterStack,
      n = this.statePool.pop() || new _p(),
      a = r.renderTexture;
    let o, h;
    if (a.current) {
      const g = a.current;
      (o = g.resolution), (h = g.multisample);
    } else (o = r.resolution), (h = r.multisample);
    let l = e[0].resolution || o,
      c = e[0].multisample ?? h,
      u = e[0].padding,
      d = e[0].autoFit,
      f = e[0].legacy ?? !0;
    for (let g = 1; g < e.length; g++) {
      const _ = e[g];
      (l = Math.min(l, _.resolution || o)),
        (c = Math.min(c, _.multisample ?? h)),
        (u = this.useMaxPadding ? Math.max(u, _.padding) : u + _.padding),
        (d = d && _.autoFit),
        (f = f || (_.legacy ?? !0));
    }
    s.length === 1 && (this.defaultFilterStack[0].renderTexture = a.current),
      s.push(n),
      (n.resolution = l),
      (n.multisample = c),
      (n.legacy = f),
      (n.target = t),
      n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
      n.sourceFrame.pad(u);
    const p = this.tempRect.copyFrom(a.sourceFrame);
    r.projection.transform &&
      this.transformAABB(an.copyFrom(r.projection.transform).invert(), p),
      d
        ? (n.sourceFrame.fit(p),
          (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) &&
            ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)))
        : n.sourceFrame.intersects(p) ||
          ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)),
      this.roundFrame(
        n.sourceFrame,
        a.current ? a.current.resolution : r.resolution,
        a.sourceFrame,
        a.destinationFrame,
        r.projection.transform
      ),
      (n.renderTexture = this.getOptimalFilterTexture(
        n.sourceFrame.width,
        n.sourceFrame.height,
        l,
        c
      )),
      (n.filters = e),
      (n.destinationFrame.width = n.renderTexture.width),
      (n.destinationFrame.height = n.renderTexture.height);
    const m = this.tempRect;
    (m.x = 0),
      (m.y = 0),
      (m.width = n.sourceFrame.width),
      (m.height = n.sourceFrame.height),
      (n.renderTexture.filterFrame = n.sourceFrame),
      n.bindingSourceFrame.copyFrom(a.sourceFrame),
      n.bindingDestinationFrame.copyFrom(a.destinationFrame),
      (n.transform = r.projection.transform),
      (r.projection.transform = null),
      a.bind(n.renderTexture, n.sourceFrame, m),
      r.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const t = this.defaultFilterStack,
      e = t.pop(),
      r = e.filters;
    this.activeState = e;
    const s = this.globalUniforms.uniforms;
    (s.outputFrame = e.sourceFrame), (s.resolution = e.resolution);
    const n = s.inputSize,
      a = s.inputPixel,
      o = s.inputClamp;
    if (
      ((n[0] = e.destinationFrame.width),
      (n[1] = e.destinationFrame.height),
      (n[2] = 1 / n[0]),
      (n[3] = 1 / n[1]),
      (a[0] = Math.round(n[0] * e.resolution)),
      (a[1] = Math.round(n[1] * e.resolution)),
      (a[2] = 1 / a[0]),
      (a[3] = 1 / a[1]),
      (o[0] = 0.5 * a[2]),
      (o[1] = 0.5 * a[3]),
      (o[2] = e.sourceFrame.width * n[2] - 0.5 * a[2]),
      (o[3] = e.sourceFrame.height * n[3] - 0.5 * a[3]),
      e.legacy)
    ) {
      const l = s.filterArea;
      (l[0] = e.destinationFrame.width),
        (l[1] = e.destinationFrame.height),
        (l[2] = e.sourceFrame.x),
        (l[3] = e.sourceFrame.y),
        (s.filterClamp = s.inputClamp);
    }
    this.globalUniforms.update();
    const h = t[t.length - 1];
    if ((this.renderer.framebuffer.blit(), r.length === 1))
      r[0].apply(this, e.renderTexture, h.renderTexture, se.BLEND, e),
        this.returnFilterTexture(e.renderTexture);
    else {
      let l = e.renderTexture,
        c = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
      c.filterFrame = l.filterFrame;
      let u = 0;
      for (u = 0; u < r.length - 1; ++u) {
        u === 1 &&
          e.multisample > 1 &&
          ((c = this.getOptimalFilterTexture(l.width, l.height, e.resolution)),
          (c.filterFrame = l.filterFrame)),
          r[u].apply(this, l, c, se.CLEAR, e);
        const d = l;
        (l = c), (c = d);
      }
      r[u].apply(this, l, h.renderTexture, se.BLEND, e),
        u > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture),
        this.returnFilterTexture(l),
        this.returnFilterTexture(c);
    }
    e.clear(), this.statePool.push(e);
  }
  bindAndClear(t, e = se.CLEAR) {
    const { renderTexture: r, state: s } = this.renderer;
    if (
      (t ===
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? (this.renderer.projection.transform = this.activeState.transform)
        : (this.renderer.projection.transform = null),
      t == null ? void 0 : t.filterFrame)
    ) {
      const a = this.tempRect;
      (a.x = 0),
        (a.y = 0),
        (a.width = t.filterFrame.width),
        (a.height = t.filterFrame.height),
        r.bind(t, t.filterFrame, a);
    } else
      t !==
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? r.bind(t)
        : this.renderer.renderTexture.bind(
            t,
            this.activeState.bindingSourceFrame,
            this.activeState.bindingDestinationFrame
          );
    const n = s.stateId & 1 || this.forceClear;
    (e === se.CLEAR || (e === se.BLIT && n)) &&
      this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(t, e, r, s) {
    const n = this.renderer;
    n.state.set(t.state),
      this.bindAndClear(r, s),
      (t.uniforms.uSampler = e),
      (t.uniforms.filterGlobals = this.globalUniforms),
      n.shader.bind(t),
      (t.legacy = !!t.program.attributeData.aTextureCoord),
      t.legacy
        ? (this.quadUv.map(e._frame, e.filterFrame),
          n.geometry.bind(this.quadUv),
          n.geometry.draw(ae.TRIANGLES))
        : (n.geometry.bind(this.quad), n.geometry.draw(ae.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(t, e) {
    const { sourceFrame: r, destinationFrame: s } = this.activeState,
      { orig: n } = e._texture,
      a = t.set(s.width, 0, 0, s.height, r.x, r.y),
      o = e.worldTransform.copyTo(it.TEMP_MATRIX);
    return (
      o.invert(),
      a.prepend(o),
      a.scale(1 / n.width, 1 / n.height),
      a.translate(e.anchor.x, e.anchor.y),
      a
    );
  }
  destroy() {
    (this.renderer = null), this.texturePool.clear(!1);
  }
  getOptimalFilterTexture(t, e, r = 1, s = dt.NONE) {
    return this.texturePool.getOptimalTexture(t, e, r, s);
  }
  getFilterTexture(t, e, r) {
    if (typeof t == "number") {
      const n = t;
      (t = e), (e = n);
    }
    t = t || this.activeState.renderTexture;
    const s = this.texturePool.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      r || dt.NONE
    );
    return (s.filterFrame = t.filterFrame), s;
  }
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  emptyPool() {
    this.texturePool.clear(!0);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(t, e) {
    const r = Fi[0],
      s = Fi[1],
      n = Fi[2],
      a = Fi[3];
    r.set(e.left, e.top),
      s.set(e.left, e.bottom),
      n.set(e.right, e.top),
      a.set(e.right, e.bottom),
      t.apply(r, r),
      t.apply(s, s),
      t.apply(n, n),
      t.apply(a, a);
    const o = Math.min(r.x, s.x, n.x, a.x),
      h = Math.min(r.y, s.y, n.y, a.y),
      l = Math.max(r.x, s.x, n.x, a.x),
      c = Math.max(r.y, s.y, n.y, a.y);
    (e.x = o), (e.y = h), (e.width = l - o), (e.height = c - h);
  }
  roundFrame(t, e, r, s, n) {
    if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
      if (n) {
        const { a, b: o, c: h, d: l } = n;
        if (
          (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4) &&
          (Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4)
        )
          return;
      }
      (n = n ? an.copyFrom(n) : an.identity()),
        n
          .translate(-r.x, -r.y)
          .scale(s.width / r.width, s.height / r.height)
          .translate(s.x, s.y),
        this.transformAABB(n, t),
        t.ceil(e),
        this.transformAABB(n.invert(), t);
    }
  }
}
dl.extension = { type: R.RendererSystem, name: "filter" };
L.add(dl);
class vp {
  constructor(t) {
    (this.framebuffer = t),
      (this.stencil = null),
      (this.dirtyId = -1),
      (this.dirtyFormat = -1),
      (this.dirtySize = -1),
      (this.multisample = dt.NONE),
      (this.msaaBuffer = null),
      (this.blitFramebuffer = null),
      (this.mipLevel = 0);
  }
}
const xp = new j();
class fl {
  constructor(t) {
    (this.renderer = t),
      (this.managedFramebuffers = []),
      (this.unknownFramebuffer = new Yn(10, 10)),
      (this.msaaSamples = null);
  }
  contextChange() {
    this.disposeAll(!0);
    const t = (this.gl = this.renderer.gl);
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.current = this.unknownFramebuffer),
      (this.viewport = new j()),
      (this.hasMRT = !0),
      (this.writeDepthTexture = !0),
      this.renderer.context.webGLVersion === 1)
    ) {
      let e = this.renderer.context.extensions.drawBuffers,
        r = this.renderer.context.extensions.depthTexture;
      F.PREFER_ENV === nr.WEBGL_LEGACY && ((e = null), (r = null)),
        e
          ? (t.drawBuffers = (s) => e.drawBuffersWEBGL(s))
          : ((this.hasMRT = !1), (t.drawBuffers = () => {})),
        r || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = t.getInternalformatParameter(
        t.RENDERBUFFER,
        t.RGBA8,
        t.SAMPLES
      );
  }
  bind(t, e, r = 0) {
    const { gl: s } = this;
    if (t) {
      const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      this.current !== t &&
        ((this.current = t), s.bindFramebuffer(s.FRAMEBUFFER, n.framebuffer)),
        n.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = r)),
        n.dirtyId !== t.dirtyId &&
          ((n.dirtyId = t.dirtyId),
          n.dirtyFormat !== t.dirtyFormat
            ? ((n.dirtyFormat = t.dirtyFormat),
              (n.dirtySize = t.dirtySize),
              this.updateFramebuffer(t, r))
            : n.dirtySize !== t.dirtySize &&
              ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
      for (let a = 0; a < t.colorTextures.length; a++) {
        const o = t.colorTextures[a];
        this.renderer.texture.unbind(o.parentTextureArray || o);
      }
      if ((t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e)) {
        const a = e.width >> r,
          o = e.height >> r,
          h = a / e.width;
        this.setViewport(e.x * h, e.y * h, a, o);
      } else {
        const a = t.width >> r,
          o = t.height >> r;
        this.setViewport(0, 0, a, o);
      }
    } else
      this.current &&
        ((this.current = null), s.bindFramebuffer(s.FRAMEBUFFER, null)),
        e
          ? this.setViewport(e.x, e.y, e.width, e.height)
          : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(t, e, r, s) {
    const n = this.viewport;
    (t = Math.round(t)),
      (e = Math.round(e)),
      (r = Math.round(r)),
      (s = Math.round(s)),
      (n.width !== r || n.height !== s || n.x !== t || n.y !== e) &&
        ((n.x = t),
        (n.y = e),
        (n.width = r),
        (n.height = s),
        this.gl.viewport(t, e, r, s));
  }
  get size() {
    return this.current
      ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
      : {
          x: 0,
          y: 0,
          width: this.renderer.width,
          height: this.renderer.height,
        };
  }
  clear(t, e, r, s, n = xn.COLOR | xn.DEPTH) {
    const { gl: a } = this;
    a.clearColor(t, e, r, s), a.clear(n);
  }
  initFramebuffer(t) {
    const { gl: e } = this,
      r = new vp(e.createFramebuffer());
    return (
      (r.multisample = this.detectSamples(t.multisample)),
      (t.glFramebuffers[this.CONTEXT_UID] = r),
      this.managedFramebuffers.push(t),
      t.disposeRunner.add(this),
      r
    );
  }
  resizeFramebuffer(t) {
    const { gl: e } = this,
      r = t.glFramebuffers[this.CONTEXT_UID];
    if (r.stencil) {
      e.bindRenderbuffer(e.RENDERBUFFER, r.stencil);
      let a;
      this.renderer.context.webGLVersion === 1
        ? (a = e.DEPTH_STENCIL)
        : t.depth && t.stencil
        ? (a = e.DEPTH24_STENCIL8)
        : t.depth
        ? (a = e.DEPTH_COMPONENT24)
        : (a = e.STENCIL_INDEX8),
        r.msaaBuffer
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              r.multisample,
              a,
              t.width,
              t.height
            )
          : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height);
    }
    const s = t.colorTextures;
    let n = s.length;
    e.drawBuffers || (n = Math.min(n, 1));
    for (let a = 0; a < n; a++) {
      const o = s[a],
        h = o.parentTextureArray || o;
      this.renderer.texture.bind(h, 0),
        a === 0 &&
          r.msaaBuffer &&
          (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
          e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            r.multisample,
            h._glTextures[this.CONTEXT_UID].internalFormat,
            t.width,
            t.height
          ));
    }
    t.depthTexture &&
      this.writeDepthTexture &&
      this.renderer.texture.bind(t.depthTexture, 0);
  }
  updateFramebuffer(t, e) {
    const { gl: r } = this,
      s = t.glFramebuffers[this.CONTEXT_UID],
      n = t.colorTextures;
    let a = n.length;
    r.drawBuffers || (a = Math.min(a, 1)),
      s.multisample > 1 && this.canMultisampleFramebuffer(t)
        ? (s.msaaBuffer = s.msaaBuffer || r.createRenderbuffer())
        : s.msaaBuffer &&
          (r.deleteRenderbuffer(s.msaaBuffer),
          (s.msaaBuffer = null),
          s.blitFramebuffer &&
            (s.blitFramebuffer.dispose(), (s.blitFramebuffer = null)));
    const o = [];
    for (let h = 0; h < a; h++) {
      const l = n[h],
        c = l.parentTextureArray || l;
      this.renderer.texture.bind(c, 0),
        h === 0 && s.msaaBuffer
          ? (r.bindRenderbuffer(r.RENDERBUFFER, s.msaaBuffer),
            r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              s.multisample,
              c._glTextures[this.CONTEXT_UID].internalFormat,
              t.width,
              t.height
            ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              s.msaaBuffer
            ))
          : (r.framebufferTexture2D(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + h,
              l.target,
              c._glTextures[this.CONTEXT_UID].texture,
              e
            ),
            o.push(r.COLOR_ATTACHMENT0 + h));
    }
    if (
      (o.length > 1 && r.drawBuffers(o),
      t.depthTexture && this.writeDepthTexture)
    ) {
      const h = t.depthTexture;
      this.renderer.texture.bind(h, 0),
        r.framebufferTexture2D(
          r.FRAMEBUFFER,
          r.DEPTH_ATTACHMENT,
          r.TEXTURE_2D,
          h._glTextures[this.CONTEXT_UID].texture,
          e
        );
    }
    if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
      s.stencil = s.stencil || r.createRenderbuffer();
      let h, l;
      this.renderer.context.webGLVersion === 1
        ? ((h = r.DEPTH_STENCIL_ATTACHMENT), (l = r.DEPTH_STENCIL))
        : t.depth && t.stencil
        ? ((h = r.DEPTH_STENCIL_ATTACHMENT), (l = r.DEPTH24_STENCIL8))
        : t.depth
        ? ((h = r.DEPTH_ATTACHMENT), (l = r.DEPTH_COMPONENT24))
        : ((h = r.STENCIL_ATTACHMENT), (l = r.STENCIL_INDEX8)),
        r.bindRenderbuffer(r.RENDERBUFFER, s.stencil),
        s.msaaBuffer
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              s.multisample,
              l,
              t.width,
              t.height
            )
          : r.renderbufferStorage(r.RENDERBUFFER, l, t.width, t.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, h, r.RENDERBUFFER, s.stencil);
    } else s.stencil && (r.deleteRenderbuffer(s.stencil), (s.stencil = null));
  }
  canMultisampleFramebuffer(t) {
    return (
      this.renderer.context.webGLVersion !== 1 &&
      t.colorTextures.length <= 1 &&
      !t.depthTexture
    );
  }
  detectSamples(t) {
    const { msaaSamples: e } = this;
    let r = dt.NONE;
    if (t <= 1 || e === null) return r;
    for (let s = 0; s < e.length; s++)
      if (e[s] <= t) {
        r = e[s];
        break;
      }
    return r === 1 && (r = dt.NONE), r;
  }
  blit(t, e, r) {
    const { current: s, renderer: n, gl: a, CONTEXT_UID: o } = this;
    if (n.context.webGLVersion !== 2 || !s) return;
    const h = s.glFramebuffers[o];
    if (!h) return;
    if (!t) {
      if (!h.msaaBuffer) return;
      const c = s.colorTextures[0];
      if (!c) return;
      h.blitFramebuffer ||
        ((h.blitFramebuffer = new Yn(s.width, s.height)),
        h.blitFramebuffer.addColorTexture(0, c)),
        (t = h.blitFramebuffer),
        t.colorTextures[0] !== c &&
          ((t.colorTextures[0] = c), t.dirtyId++, t.dirtyFormat++),
        (t.width !== s.width || t.height !== s.height) &&
          ((t.width = s.width),
          (t.height = s.height),
          t.dirtyId++,
          t.dirtySize++);
    }
    e || ((e = xp), (e.width = s.width), (e.height = s.height)), r || (r = e);
    const l = e.width === r.width && e.height === r.height;
    this.bind(t),
      a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer),
      a.blitFramebuffer(
        e.left,
        e.top,
        e.right,
        e.bottom,
        r.left,
        r.top,
        r.right,
        r.bottom,
        a.COLOR_BUFFER_BIT,
        l ? a.NEAREST : a.LINEAR
      ),
      a.bindFramebuffer(
        a.READ_FRAMEBUFFER,
        t.glFramebuffers[this.CONTEXT_UID].framebuffer
      );
  }
  disposeFramebuffer(t, e) {
    const r = t.glFramebuffers[this.CONTEXT_UID],
      s = this.gl;
    if (!r) return;
    delete t.glFramebuffers[this.CONTEXT_UID];
    const n = this.managedFramebuffers.indexOf(t);
    n >= 0 && this.managedFramebuffers.splice(n, 1),
      t.disposeRunner.remove(this),
      e ||
        (s.deleteFramebuffer(r.framebuffer),
        r.msaaBuffer && s.deleteRenderbuffer(r.msaaBuffer),
        r.stencil && s.deleteRenderbuffer(r.stencil)),
      r.blitFramebuffer && this.disposeFramebuffer(r.blitFramebuffer, e);
  }
  disposeAll(t) {
    const e = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t);
  }
  forceStencil() {
    const t = this.current;
    if (!t) return;
    const e = t.glFramebuffers[this.CONTEXT_UID];
    if (!e || (e.stencil && t.stencil)) return;
    t.stencil = !0;
    const r = t.width,
      s = t.height,
      n = this.gl,
      a = (e.stencil = n.createRenderbuffer());
    n.bindRenderbuffer(n.RENDERBUFFER, a);
    let o, h;
    this.renderer.context.webGLVersion === 1
      ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH_STENCIL))
      : t.depth
      ? ((o = n.DEPTH_STENCIL_ATTACHMENT), (h = n.DEPTH24_STENCIL8))
      : ((o = n.STENCIL_ATTACHMENT), (h = n.STENCIL_INDEX8)),
      e.msaaBuffer
        ? n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            e.multisample,
            h,
            r,
            s
          )
        : n.renderbufferStorage(n.RENDERBUFFER, h, r, s),
      n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a);
  }
  reset() {
    (this.current = this.unknownFramebuffer), (this.viewport = new j());
  }
  destroy() {
    this.renderer = null;
  }
}
fl.extension = { type: R.RendererSystem, name: "framebuffer" };
L.add(fl);
const on = { 5126: 4, 5123: 2, 5121: 1 };
class pl {
  constructor(t) {
    (this.renderer = t),
      (this._activeGeometry = null),
      (this._activeVao = null),
      (this.hasVao = !0),
      (this.hasInstance = !0),
      (this.canUseUInt32ElementIndex = !1),
      (this.managedGeometries = {});
  }
  contextChange() {
    this.disposeAll(!0);
    const t = (this.gl = this.renderer.gl),
      e = this.renderer.context;
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID), e.webGLVersion !== 2)
    ) {
      let r = this.renderer.context.extensions.vertexArrayObject;
      F.PREFER_ENV === nr.WEBGL_LEGACY && (r = null),
        r
          ? ((t.createVertexArray = () => r.createVertexArrayOES()),
            (t.bindVertexArray = (s) => r.bindVertexArrayOES(s)),
            (t.deleteVertexArray = (s) => r.deleteVertexArrayOES(s)))
          : ((this.hasVao = !1),
            (t.createVertexArray = () => null),
            (t.bindVertexArray = () => null),
            (t.deleteVertexArray = () => null));
    }
    if (e.webGLVersion !== 2) {
      const r = t.getExtension("ANGLE_instanced_arrays");
      r
        ? ((t.vertexAttribDivisor = (s, n) => r.vertexAttribDivisorANGLE(s, n)),
          (t.drawElementsInstanced = (s, n, a, o, h) =>
            r.drawElementsInstancedANGLE(s, n, a, o, h)),
          (t.drawArraysInstanced = (s, n, a, o) =>
            r.drawArraysInstancedANGLE(s, n, a, o)))
        : (this.hasInstance = !1);
    }
    this.canUseUInt32ElementIndex =
      e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex;
  }
  bind(t, e) {
    e = e || this.renderer.shader.shader;
    const { gl: r } = this;
    let s = t.glVertexArrayObjects[this.CONTEXT_UID],
      n = !1;
    s ||
      ((this.managedGeometries[t.id] = t),
      t.disposeRunner.add(this),
      (t.glVertexArrayObjects[this.CONTEXT_UID] = s = {}),
      (n = !0));
    const a = s[e.program.id] || this.initGeometryVao(t, e, n);
    (this._activeGeometry = t),
      this._activeVao !== a &&
        ((this._activeVao = a),
        this.hasVao ? r.bindVertexArray(a) : this.activateVao(t, e.program)),
      this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const t = this._activeGeometry,
      e = this.renderer.buffer;
    for (let r = 0; r < t.buffers.length; r++) {
      const s = t.buffers[r];
      e.update(s);
    }
  }
  checkCompatibility(t, e) {
    const r = t.attributes,
      s = e.attributeData;
    for (const n in s)
      if (!r[n])
        throw new Error(
          `shader and geometry incompatible, geometry missing the "${n}" attribute`
        );
  }
  getSignature(t, e) {
    const r = t.attributes,
      s = e.attributeData,
      n = ["g", t.id];
    for (const a in r) s[a] && n.push(a, s[a].location);
    return n.join("-");
  }
  initGeometryVao(t, e, r = !0) {
    const s = this.gl,
      n = this.CONTEXT_UID,
      a = this.renderer.buffer,
      o = e.program;
    o.glPrograms[n] || this.renderer.shader.generateProgram(e),
      this.checkCompatibility(t, o);
    const h = this.getSignature(t, o),
      l = t.glVertexArrayObjects[this.CONTEXT_UID];
    let c = l[h];
    if (c) return (l[o.id] = c), c;
    const u = t.buffers,
      d = t.attributes,
      f = {},
      p = {};
    for (const m in u) (f[m] = 0), (p[m] = 0);
    for (const m in d)
      !d[m].size && o.attributeData[m]
        ? (d[m].size = o.attributeData[m].size)
        : d[m].size ||
          console.warn(
            `PIXI Geometry attribute '${m}' size cannot be determined (likely the bound shader does not have the attribute)`
          ),
        (f[d[m].buffer] += d[m].size * on[d[m].type]);
    for (const m in d) {
      const g = d[m],
        _ = g.size;
      g.stride === void 0 &&
        (f[g.buffer] === _ * on[g.type]
          ? (g.stride = 0)
          : (g.stride = f[g.buffer])),
        g.start === void 0 &&
          ((g.start = p[g.buffer]), (p[g.buffer] += _ * on[g.type]));
    }
    (c = s.createVertexArray()), s.bindVertexArray(c);
    for (let m = 0; m < u.length; m++) {
      const g = u[m];
      a.bind(g), r && g._glBuffers[n].refCount++;
    }
    return (
      this.activateVao(t, o),
      (l[o.id] = c),
      (l[h] = c),
      s.bindVertexArray(null),
      a.unbind(he.ARRAY_BUFFER),
      c
    );
  }
  disposeGeometry(t, e) {
    var o;
    if (!this.managedGeometries[t.id]) return;
    delete this.managedGeometries[t.id];
    const r = t.glVertexArrayObjects[this.CONTEXT_UID],
      s = this.gl,
      n = t.buffers,
      a = (o = this.renderer) == null ? void 0 : o.buffer;
    if ((t.disposeRunner.remove(this), !!r)) {
      if (a)
        for (let h = 0; h < n.length; h++) {
          const l = n[h]._glBuffers[this.CONTEXT_UID];
          l && (l.refCount--, l.refCount === 0 && !e && a.dispose(n[h], e));
        }
      if (!e) {
        for (const h in r)
          if (h[0] === "g") {
            const l = r[h];
            this._activeVao === l && this.unbind(), s.deleteVertexArray(l);
          }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const e = Object.keys(this.managedGeometries);
    for (let r = 0; r < e.length; r++)
      this.disposeGeometry(this.managedGeometries[e[r]], t);
  }
  activateVao(t, e) {
    const r = this.gl,
      s = this.CONTEXT_UID,
      n = this.renderer.buffer,
      a = t.buffers,
      o = t.attributes;
    t.indexBuffer && n.bind(t.indexBuffer);
    let h = null;
    for (const l in o) {
      const c = o[l],
        u = a[c.buffer],
        d = u._glBuffers[s];
      if (e.attributeData[l]) {
        h !== d && (n.bind(u), (h = d));
        const f = e.attributeData[l].location;
        if (
          (r.enableVertexAttribArray(f),
          r.vertexAttribPointer(
            f,
            c.size,
            c.type || r.FLOAT,
            c.normalized,
            c.stride,
            c.start
          ),
          c.instance)
        )
          if (this.hasInstance) r.vertexAttribDivisor(f, c.divisor);
          else
            throw new Error(
              "geometry error, GPU Instancing is not supported on this device"
            );
      }
    }
  }
  draw(t, e, r, s) {
    const { gl: n } = this,
      a = this._activeGeometry;
    if (a.indexBuffer) {
      const o = a.indexBuffer.data.BYTES_PER_ELEMENT,
        h = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
      o === 2 || (o === 4 && this.canUseUInt32ElementIndex)
        ? a.instanced
          ? n.drawElementsInstanced(
              t,
              e || a.indexBuffer.data.length,
              h,
              (r || 0) * o,
              s || 1
            )
          : n.drawElements(t, e || a.indexBuffer.data.length, h, (r || 0) * o)
        : console.warn("unsupported index buffer type: uint32");
    } else
      a.instanced
        ? n.drawArraysInstanced(t, r, e || a.getSize(), s || 1)
        : n.drawArrays(t, r, e || a.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null),
      (this._activeVao = null),
      (this._activeGeometry = null);
  }
  destroy() {
    this.renderer = null;
  }
}
pl.extension = { type: R.RendererSystem, name: "geometry" };
L.add(pl);
const jo = new it();
class ml {
  constructor(t, e) {
    (this._texture = t),
      (this.mapCoord = new it()),
      (this.uClampFrame = new Float32Array(4)),
      (this.uClampOffset = new Float32Array(2)),
      (this._textureID = -1),
      (this._updateID = 0),
      (this.clampOffset = 0),
      (this.clampMargin = typeof e > "u" ? 0.5 : e),
      (this.isSimple = !1);
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    (this._texture = t), (this._textureID = -1);
  }
  multiplyUvs(t, e) {
    e === void 0 && (e = t);
    const r = this.mapCoord;
    for (let s = 0; s < t.length; s += 2) {
      const n = t[s],
        a = t[s + 1];
      (e[s] = n * r.a + a * r.c + r.tx), (e[s + 1] = n * r.b + a * r.d + r.ty);
    }
    return e;
  }
  update(t) {
    const e = this._texture;
    if (!e || !e.valid || (!t && this._textureID === e._updateID)) return !1;
    (this._textureID = e._updateID), this._updateID++;
    const r = e._uvs;
    this.mapCoord.set(
      r.x1 - r.x0,
      r.y1 - r.y0,
      r.x3 - r.x0,
      r.y3 - r.y0,
      r.x0,
      r.y0
    );
    const s = e.orig,
      n = e.trim;
    n &&
      (jo.set(
        s.width / n.width,
        0,
        0,
        s.height / n.height,
        -n.x / n.width,
        -n.y / n.height
      ),
      this.mapCoord.append(jo));
    const a = e.baseTexture,
      o = this.uClampFrame,
      h = this.clampMargin / a.resolution,
      l = this.clampOffset;
    return (
      (o[0] = (e._frame.x + h + l) / a.width),
      (o[1] = (e._frame.y + h + l) / a.height),
      (o[2] = (e._frame.x + e._frame.width - h + l) / a.width),
      (o[3] = (e._frame.y + e._frame.height - h + l) / a.height),
      (this.uClampOffset[0] = l / a.realWidth),
      (this.uClampOffset[1] = l / a.realHeight),
      (this.isSimple =
        e._frame.width === a.width &&
        e._frame.height === a.height &&
        e.rotate === 0),
      !0
    );
  }
}
var bp = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
  Tp = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class Ep extends It {
  constructor(t, e, r) {
    let s = null;
    typeof t != "string" &&
      e === void 0 &&
      r === void 0 &&
      ((s = t), (t = void 0), (e = void 0), (r = void 0)),
      super(t || Tp, e || bp, r),
      (this.maskSprite = s),
      (this.maskMatrix = new it());
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    (this._maskSprite = t),
      this._maskSprite && (this._maskSprite.renderable = !1);
  }
  apply(t, e, r, s) {
    const n = this._maskSprite,
      a = n._texture;
    a.valid &&
      (a.uvMatrix || (a.uvMatrix = new ml(a, 0)),
      a.uvMatrix.update(),
      (this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1),
      (this.uniforms.mask = a),
      (this.uniforms.otherMatrix = t
        .calculateSpriteMatrix(this.maskMatrix, n)
        .prepend(a.uvMatrix.mapCoord)),
      (this.uniforms.alpha = n.worldAlpha),
      (this.uniforms.maskClamp = a.uvMatrix.uClampFrame),
      t.applyFilter(this, e, r, s));
  }
}
class Ap {
  constructor(t = null) {
    (this.type = pt.NONE),
      (this.autoDetect = !0),
      (this.maskObject = t || null),
      (this.pooled = !1),
      (this.isMaskData = !0),
      (this.resolution = null),
      (this.multisample = It.defaultMultisample),
      (this.enabled = !0),
      (this.colorMask = 15),
      (this._filters = null),
      (this._stencilCounter = 0),
      (this._scissorCounter = 0),
      (this._scissorRect = null),
      (this._scissorRectLocal = null),
      (this._colorMask = 15),
      (this._target = null);
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(t) {
    t
      ? this._filters
        ? (this._filters[0] = t)
        : (this._filters = [t])
      : (this._filters = null);
  }
  reset() {
    this.pooled &&
      ((this.maskObject = null), (this.type = pt.NONE), (this.autoDetect = !0)),
      (this._target = null),
      (this._scissorRectLocal = null);
  }
  copyCountersOrReset(t) {
    t
      ? ((this._stencilCounter = t._stencilCounter),
        (this._scissorCounter = t._scissorCounter),
        (this._scissorRect = t._scissorRect))
      : ((this._stencilCounter = 0),
        (this._scissorCounter = 0),
        (this._scissorRect = null));
  }
}
class gl {
  constructor(t) {
    (this.renderer = t),
      (this.enableScissor = !0),
      (this.alphaMaskPool = []),
      (this.maskDataPool = []),
      (this.maskStack = []),
      (this.alphaMaskIndex = 0);
  }
  setMaskStack(t) {
    (this.maskStack = t),
      this.renderer.scissor.setMaskStack(t),
      this.renderer.stencil.setMaskStack(t);
  }
  push(t, e) {
    let r = e;
    if (!r.isMaskData) {
      const n = this.maskDataPool.pop() || new Ap();
      (n.pooled = !0), (n.maskObject = e), (r = n);
    }
    const s =
      this.maskStack.length !== 0
        ? this.maskStack[this.maskStack.length - 1]
        : null;
    if (
      (r.copyCountersOrReset(s),
      (r._colorMask = s ? s._colorMask : 15),
      r.autoDetect && this.detect(r),
      (r._target = t),
      r.type !== pt.SPRITE && this.maskStack.push(r),
      r.enabled)
    )
      switch (r.type) {
        case pt.SCISSOR:
          this.renderer.scissor.push(r);
          break;
        case pt.STENCIL:
          this.renderer.stencil.push(r);
          break;
        case pt.SPRITE:
          r.copyCountersOrReset(null), this.pushSpriteMask(r);
          break;
        case pt.COLOR:
          this.pushColorMask(r);
          break;
      }
    r.type === pt.SPRITE && this.maskStack.push(r);
  }
  pop(t) {
    const e = this.maskStack.pop();
    if (!(!e || e._target !== t)) {
      if (e.enabled)
        switch (e.type) {
          case pt.SCISSOR:
            this.renderer.scissor.pop(e);
            break;
          case pt.STENCIL:
            this.renderer.stencil.pop(e.maskObject);
            break;
          case pt.SPRITE:
            this.popSpriteMask(e);
            break;
          case pt.COLOR:
            this.popColorMask(e);
            break;
        }
      if (
        (e.reset(),
        e.pooled && this.maskDataPool.push(e),
        this.maskStack.length !== 0)
      ) {
        const r = this.maskStack[this.maskStack.length - 1];
        r.type === pt.SPRITE &&
          r._filters &&
          (r._filters[0].maskSprite = r.maskObject);
      }
    }
  }
  detect(t) {
    const e = t.maskObject;
    e
      ? e.isSprite
        ? (t.type = pt.SPRITE)
        : this.enableScissor && this.renderer.scissor.testScissor(t)
        ? (t.type = pt.SCISSOR)
        : (t.type = pt.STENCIL)
      : (t.type = pt.COLOR);
  }
  pushSpriteMask(t) {
    const { maskObject: e } = t,
      r = t._target;
    let s = t._filters;
    s ||
      ((s = this.alphaMaskPool[this.alphaMaskIndex]),
      s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Ep()])),
      (s[0].resolution = t.resolution),
      (s[0].multisample = t.multisample),
      (s[0].maskSprite = e);
    const n = r.filterArea;
    (r.filterArea = e.getBounds(!0)),
      this.renderer.filter.push(r, s),
      (r.filterArea = n),
      t._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(t) {
    this.renderer.filter.pop(),
      t._filters
        ? (t._filters[0].maskSprite = null)
        : (this.alphaMaskIndex--,
          (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
  }
  pushColorMask(t) {
    const e = t._colorMask,
      r = (t._colorMask = e & t.colorMask);
    r !== e &&
      this.renderer.gl.colorMask(
        (r & 1) !== 0,
        (r & 2) !== 0,
        (r & 4) !== 0,
        (r & 8) !== 0
      );
  }
  popColorMask(t) {
    const e = t._colorMask,
      r =
        this.maskStack.length > 0
          ? this.maskStack[this.maskStack.length - 1]._colorMask
          : 15;
    r !== e &&
      this.renderer.gl.colorMask(
        (r & 1) !== 0,
        (r & 2) !== 0,
        (r & 4) !== 0,
        (r & 8) !== 0
      );
  }
  destroy() {
    this.renderer = null;
  }
}
gl.extension = { type: R.RendererSystem, name: "mask" };
L.add(gl);
class yl {
  constructor(t) {
    (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(t) {
    const { gl: e } = this.renderer,
      r = this.getStackLength();
    this.maskStack = t;
    const s = this.getStackLength();
    s !== r &&
      (s === 0
        ? e.disable(this.glConst)
        : (e.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {}
  destroy() {
    (this.renderer = null), (this.maskStack = null);
  }
}
const Yo = new it(),
  qo = [],
  _l = class Ki extends yl {
    constructor(t) {
      super(t),
        (this.glConst = F.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
    }
    getStackLength() {
      const t = this.maskStack[this.maskStack.length - 1];
      return t ? t._scissorCounter : 0;
    }
    calcScissorRect(t) {
      if (t._scissorRectLocal) return;
      const e = t._scissorRect,
        { maskObject: r } = t,
        { renderer: s } = this,
        n = s.renderTexture,
        a = r.getBounds(!0, qo.pop() ?? new j());
      this.roundFrameToPixels(
        a,
        n.current ? n.current.resolution : s.resolution,
        n.sourceFrame,
        n.destinationFrame,
        s.projection.transform
      ),
        e && a.fit(e),
        (t._scissorRectLocal = a);
    }
    static isMatrixRotated(t) {
      if (!t) return !1;
      const { a: e, b: r, c: s, d: n } = t;
      return (
        (Math.abs(r) > 1e-4 || Math.abs(s) > 1e-4) &&
        (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
      );
    }
    testScissor(t) {
      const { maskObject: e } = t;
      if (
        !e.isFastRect ||
        !e.isFastRect() ||
        Ki.isMatrixRotated(e.worldTransform) ||
        Ki.isMatrixRotated(this.renderer.projection.transform)
      )
        return !1;
      this.calcScissorRect(t);
      const r = t._scissorRectLocal;
      return r.width > 0 && r.height > 0;
    }
    roundFrameToPixels(t, e, r, s, n) {
      Ki.isMatrixRotated(n) ||
        ((n = n ? Yo.copyFrom(n) : Yo.identity()),
        n
          .translate(-r.x, -r.y)
          .scale(s.width / r.width, s.height / r.height)
          .translate(s.x, s.y),
        this.renderer.filter.transformAABB(n, t),
        t.fit(s),
        (t.x = Math.round(t.x * e)),
        (t.y = Math.round(t.y * e)),
        (t.width = Math.round(t.width * e)),
        (t.height = Math.round(t.height * e)));
    }
    push(t) {
      t._scissorRectLocal || this.calcScissorRect(t);
      const { gl: e } = this.renderer;
      t._scissorRect || e.enable(e.SCISSOR_TEST),
        t._scissorCounter++,
        (t._scissorRect = t._scissorRectLocal),
        this._useCurrent();
    }
    pop(t) {
      const { gl: e } = this.renderer;
      t && qo.push(t._scissorRectLocal),
        this.getStackLength() > 0
          ? this._useCurrent()
          : e.disable(e.SCISSOR_TEST);
    }
    _useCurrent() {
      const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
      let e;
      this.renderer.renderTexture.current
        ? (e = t.y)
        : (e = this.renderer.height - t.height - t.y),
        this.renderer.gl.scissor(t.x, e, t.width, t.height);
    }
  };
_l.extension = { type: R.RendererSystem, name: "scissor" };
let wp = _l;
L.add(wp);
class vl extends yl {
  constructor(t) {
    super(t),
      (this.glConst = F.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._stencilCounter : 0;
  }
  push(t) {
    const e = t.maskObject,
      { gl: r } = this.renderer,
      s = t._stencilCounter;
    s === 0 &&
      (this.renderer.framebuffer.forceStencil(),
      r.clearStencil(0),
      r.clear(r.STENCIL_BUFFER_BIT),
      r.enable(r.STENCIL_TEST)),
      t._stencilCounter++;
    const n = t._colorMask;
    n !== 0 && ((t._colorMask = 0), r.colorMask(!1, !1, !1, !1)),
      r.stencilFunc(r.EQUAL, s, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.INCR),
      (e.renderable = !0),
      e.render(this.renderer),
      this.renderer.batch.flush(),
      (e.renderable = !1),
      n !== 0 &&
        ((t._colorMask = n),
        r.colorMask(
          (n & 1) !== 0,
          (n & 2) !== 0,
          (n & 4) !== 0,
          (n & 8) !== 0
        )),
      this._useCurrent();
  }
  pop(t) {
    const e = this.renderer.gl;
    if (this.getStackLength() === 0) e.disable(e.STENCIL_TEST);
    else {
      const r =
          this.maskStack.length !== 0
            ? this.maskStack[this.maskStack.length - 1]
            : null,
        s = r ? r._colorMask : 15;
      s !== 0 && ((r._colorMask = 0), e.colorMask(!1, !1, !1, !1)),
        e.stencilOp(e.KEEP, e.KEEP, e.DECR),
        (t.renderable = !0),
        t.render(this.renderer),
        this.renderer.batch.flush(),
        (t.renderable = !1),
        s !== 0 &&
          ((r._colorMask = s),
          e.colorMask(
            (s & 1) !== 0,
            (s & 2) !== 0,
            (s & 4) !== 0,
            (s & 8) !== 0
          )),
        this._useCurrent();
    }
  }
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
      t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
vl.extension = { type: R.RendererSystem, name: "stencil" };
L.add(vl);
class xl {
  constructor(t) {
    (this.renderer = t),
      (this.plugins = {}),
      Object.defineProperties(this.plugins, {
        extract: {
          enumerable: !1,
          get() {
            return (
              q(
                "7.0.0",
                "renderer.plugins.extract has moved to renderer.extract"
              ),
              t.extract
            );
          },
        },
        prepare: {
          enumerable: !1,
          get() {
            return (
              q(
                "7.0.0",
                "renderer.plugins.prepare has moved to renderer.prepare"
              ),
              t.prepare
            );
          },
        },
        interaction: {
          enumerable: !1,
          get() {
            return (
              q(
                "7.0.0",
                "renderer.plugins.interaction has been deprecated, use renderer.events"
              ),
              t.events
            );
          },
        },
      });
  }
  init() {
    const t = this.rendererPlugins;
    for (const e in t) this.plugins[e] = new t[e](this.renderer);
  }
  destroy() {
    for (const t in this.plugins)
      this.plugins[t].destroy(), (this.plugins[t] = null);
  }
}
xl.extension = {
  type: [R.RendererSystem, R.CanvasRendererSystem],
  name: "_plugin",
};
L.add(xl);
class bl {
  constructor(t) {
    (this.renderer = t),
      (this.destinationFrame = null),
      (this.sourceFrame = null),
      (this.defaultFrame = null),
      (this.projectionMatrix = new it()),
      (this.transform = null);
  }
  update(t, e, r, s) {
    (this.destinationFrame = t || this.destinationFrame || this.defaultFrame),
      (this.sourceFrame = e || this.sourceFrame || t),
      this.calculateProjection(this.destinationFrame, this.sourceFrame, r, s),
      this.transform && this.projectionMatrix.append(this.transform);
    const n = this.renderer;
    (n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
      n.globalUniforms.update(),
      n.shader.shader &&
        n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
  }
  calculateProjection(t, e, r, s) {
    const n = this.projectionMatrix,
      a = s ? -1 : 1;
    n.identity(),
      (n.a = (1 / e.width) * 2),
      (n.d = a * ((1 / e.height) * 2)),
      (n.tx = -1 - e.x * n.a),
      (n.ty = -a - e.y * n.d);
  }
  setTransform(t) {}
  destroy() {
    this.renderer = null;
  }
}
bl.extension = { type: R.RendererSystem, name: "projection" };
L.add(bl);
const Sp = new Ia(),
  Ko = new j();
class Tl {
  constructor(t) {
    (this.renderer = t), (this._tempMatrix = new it());
  }
  generateTexture(t, e) {
    const { region: r, ...s } = e || {},
      n = (r == null ? void 0 : r.copyTo(Ko)) || t.getLocalBounds(Ko, !0),
      a = s.resolution || this.renderer.resolution;
    (n.width = Math.max(n.width, 1 / a)),
      (n.height = Math.max(n.height, 1 / a)),
      (s.width = n.width),
      (s.height = n.height),
      (s.resolution = a),
      s.multisample ?? (s.multisample = this.renderer.multisample);
    const o = or.create(s);
    (this._tempMatrix.tx = -n.x), (this._tempMatrix.ty = -n.y);
    const h = t.transform;
    return (
      (t.transform = Sp),
      this.renderer.render(t, {
        renderTexture: o,
        transform: this._tempMatrix,
        skipUpdateTransform: !!t.parent,
        blit: !0,
      }),
      (t.transform = h),
      o
    );
  }
  destroy() {}
}
Tl.extension = {
  type: [R.RendererSystem, R.CanvasRendererSystem],
  name: "textureGenerator",
};
L.add(Tl);
const He = new j(),
  Yr = new j();
class El {
  constructor(t) {
    (this.renderer = t),
      (this.defaultMaskStack = []),
      (this.current = null),
      (this.sourceFrame = new j()),
      (this.destinationFrame = new j()),
      (this.viewportFrame = new j());
  }
  contextChange() {
    var e;
    const t =
      (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha);
  }
  bind(t = null, e, r) {
    const s = this.renderer;
    this.current = t;
    let n, a, o;
    t
      ? ((n = t.baseTexture),
        (o = n.resolution),
        e ||
          ((He.width = t.frame.width), (He.height = t.frame.height), (e = He)),
        r ||
          ((Yr.x = t.frame.x),
          (Yr.y = t.frame.y),
          (Yr.width = e.width),
          (Yr.height = e.height),
          (r = Yr)),
        (a = n.framebuffer))
      : ((o = s.resolution),
        e ||
          ((He.width = s._view.screen.width),
          (He.height = s._view.screen.height),
          (e = He)),
        r || ((r = He), (r.width = e.width), (r.height = e.height)));
    const h = this.viewportFrame;
    (h.x = r.x * o),
      (h.y = r.y * o),
      (h.width = r.width * o),
      (h.height = r.height * o),
      t || (h.y = s.view.height - (h.y + h.height)),
      h.ceil(),
      this.renderer.framebuffer.bind(a, h),
      this.renderer.projection.update(r, e, o, !a),
      t
        ? this.renderer.mask.setMaskStack(n.maskStack)
        : this.renderer.mask.setMaskStack(this.defaultMaskStack),
      this.sourceFrame.copyFrom(e),
      this.destinationFrame.copyFrom(r);
  }
  clear(t, e) {
    const r = this.current
        ? this.current.baseTexture.clear
        : this.renderer.background.backgroundColor,
      s = rt.shared.setValue(t || r);
    ((this.current && this.current.baseTexture.alphaMode > 0) ||
      (!this.current && this._rendererPremultipliedAlpha)) &&
      s.premultiply(s.alpha);
    const n = this.destinationFrame,
      a = this.current ? this.current.baseTexture : this.renderer._view.screen,
      o = n.width !== a.width || n.height !== a.height;
    if (o) {
      let { x: h, y: l, width: c, height: u } = this.viewportFrame;
      (h = Math.round(h)),
        (l = Math.round(l)),
        (c = Math.round(c)),
        (u = Math.round(u)),
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
        this.renderer.gl.scissor(h, l, c, u);
    }
    this.renderer.framebuffer.clear(s.red, s.green, s.blue, s.alpha, e),
      o && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
El.extension = { type: R.RendererSystem, name: "renderTexture" };
L.add(El);
class Cp {
  constructor(t, e) {
    (this.program = t),
      (this.uniformData = e),
      (this.uniformGroups = {}),
      (this.uniformDirtyGroups = {}),
      (this.uniformBufferBindings = {});
  }
  destroy() {
    (this.uniformData = null),
      (this.uniformGroups = null),
      (this.uniformDirtyGroups = null),
      (this.uniformBufferBindings = null),
      (this.program = null);
  }
}
function Ip(i, t) {
  const e = {},
    r = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < r; s++) {
    const n = t.getActiveAttrib(i, s);
    if (n.name.startsWith("gl_")) continue;
    const a = al(t, n.type),
      o = {
        type: a,
        name: n.name,
        size: nl(a),
        location: t.getAttribLocation(i, n.name),
      };
    e[n.name] = o;
  }
  return e;
}
function Rp(i, t) {
  const e = {},
    r = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
  for (let s = 0; s < r; s++) {
    const n = t.getActiveUniform(i, s),
      a = n.name.replace(/\[.*?\]$/, ""),
      o = !!n.name.match(/\[.*?\]$/),
      h = al(t, n.type);
    e[a] = {
      name: a,
      index: s,
      type: h,
      size: n.size,
      isArray: o,
      value: il(h, n.size),
    };
  }
  return e;
}
function Pp(i, t) {
  var o;
  const e = Ho(i, i.VERTEX_SHADER, t.vertexSrc),
    r = Ho(i, i.FRAGMENT_SHADER, t.fragmentSrc),
    s = i.createProgram();
  i.attachShader(s, e), i.attachShader(s, r);
  const n = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
  if (
    (n &&
      (typeof i.transformFeedbackVaryings != "function"
        ? console.warn(
            "TransformFeedback is not supported but TransformFeedbackVaryings are given."
          )
        : i.transformFeedbackVaryings(
            s,
            n.names,
            n.bufferMode === "separate"
              ? i.SEPARATE_ATTRIBS
              : i.INTERLEAVED_ATTRIBS
          )),
    i.linkProgram(s),
    i.getProgramParameter(s, i.LINK_STATUS) || np(i, s, e, r),
    (t.attributeData = Ip(s, i)),
    (t.uniformData = Rp(s, i)),
    !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc))
  ) {
    const h = Object.keys(t.attributeData);
    h.sort((l, c) => (l > c ? 1 : -1));
    for (let l = 0; l < h.length; l++)
      (t.attributeData[h[l]].location = l), i.bindAttribLocation(s, l, h[l]);
    i.linkProgram(s);
  }
  i.deleteShader(e), i.deleteShader(r);
  const a = {};
  for (const h in t.uniformData) {
    const l = t.uniformData[h];
    a[h] = { location: i.getUniformLocation(s, h), value: il(l.type, l.size) };
  }
  return new Cp(s, a);
}
function Mp(i, t, e, r, s) {
  e.buffer.update(s);
}
const Bp = {
    float: `
        data[offset] = v;
    `,
    vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
    vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
    vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
    mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
    mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
    mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
  },
  Al = {
    float: 4,
    vec2: 8,
    vec3: 12,
    vec4: 16,
    int: 4,
    ivec2: 8,
    ivec3: 12,
    ivec4: 16,
    uint: 4,
    uvec2: 8,
    uvec3: 12,
    uvec4: 16,
    bool: 4,
    bvec2: 8,
    bvec3: 12,
    bvec4: 16,
    mat2: 16 * 2,
    mat3: 16 * 3,
    mat4: 16 * 4,
  };
function Dp(i) {
  const t = i.map((n) => ({ data: n, offset: 0, dataLen: 0, dirty: 0 }));
  let e = 0,
    r = 0,
    s = 0;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (
      ((e = Al[a.data.type]),
      a.data.size > 1 && (e = Math.max(e, 16) * a.data.size),
      (a.dataLen = e),
      r % e !== 0 && r < 16)
    ) {
      const o = (r % e) % 16;
      (r += o), (s += o);
    }
    r + e > 16
      ? ((s = Math.ceil(s / 16) * 16), (a.offset = s), (s += e), (r = e))
      : ((a.offset = s), (r += e), (s += e));
  }
  return (s = Math.ceil(s / 16) * 16), { uboElements: t, size: s };
}
function Fp(i, t) {
  const e = [];
  for (const r in i) t[r] && e.push(t[r]);
  return e.sort((r, s) => r.index - s.index), e;
}
function Op(i, t) {
  if (!i.autoManage) return { size: 0, syncFunc: Mp };
  const e = Fp(i.uniforms, t),
    { uboElements: r, size: s } = Dp(e),
    n = [
      `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
    ];
  for (let a = 0; a < r.length; a++) {
    const o = r[a],
      h = i.uniforms[o.data.name],
      l = o.data.name;
    let c = !1;
    for (let u = 0; u < Mr.length; u++) {
      const d = Mr[u];
      if (d.codeUbo && d.test(o.data, h)) {
        n.push(`offset = ${o.offset / 4};`, Mr[u].codeUbo(o.data.name, h)),
          (c = !0);
        break;
      }
    }
    if (!c)
      if (o.data.size > 1) {
        const u = nl(o.data.type),
          d = Math.max(Al[o.data.type] / 16, 1),
          f = u / d,
          p = (4 - (f % 4)) % 4;
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
      } else {
        const u = Bp[o.data.type];
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};
                ${u};
                `);
      }
  }
  return (
    n.push(`
       renderer.buffer.update(buffer);
    `),
    {
      size: s,
      syncFunc: new Function(
        "ud",
        "uv",
        "renderer",
        "syncData",
        "buffer",
        n.join(`
`)
      ),
    }
  );
}
let Lp = 0;
const Oi = { textureCount: 0, uboCount: 0 };
class wl {
  constructor(t) {
    (this.destroyed = !1),
      (this.renderer = t),
      this.systemCheck(),
      (this.gl = null),
      (this.shader = null),
      (this.program = null),
      (this.cache = {}),
      (this._uboCache = {}),
      (this.id = Lp++);
  }
  systemCheck() {
    if (!op())
      throw new Error(
        "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
      );
  }
  contextChange(t) {
    (this.gl = t), this.reset();
  }
  bind(t, e) {
    t.disposeRunner.add(this),
      (t.uniforms.globals = this.renderer.globalUniforms);
    const r = t.program,
      s = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    return (
      (this.shader = t),
      this.program !== r && ((this.program = r), this.gl.useProgram(s.program)),
      e ||
        ((Oi.textureCount = 0),
        (Oi.uboCount = 0),
        this.syncUniformGroup(t.uniformGroup, Oi)),
      s
    );
  }
  setUniforms(t) {
    const e = this.shader.program,
      r = e.glPrograms[this.renderer.CONTEXT_UID];
    e.syncUniforms(r.uniformData, t, this.renderer);
  }
  syncUniformGroup(t, e) {
    const r = this.getGlProgram();
    (!t.static || t.dirtyId !== r.uniformDirtyGroups[t.id]) &&
      ((r.uniformDirtyGroups[t.id] = t.dirtyId), this.syncUniforms(t, r, e));
  }
  syncUniforms(t, e, r) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(
      e.uniformData,
      t.uniforms,
      this.renderer,
      r
    );
  }
  createSyncGroups(t) {
    const e = this.getSignature(t, this.shader.program.uniformData, "u");
    return (
      this.cache[e] || (this.cache[e] = rp(t, this.shader.program.uniformData)),
      (t.syncUniforms[this.shader.program.id] = this.cache[e]),
      t.syncUniforms[this.shader.program.id]
    );
  }
  syncUniformBufferGroup(t, e) {
    const r = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !r.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const s = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
      t.buffer.update(),
        s(r.uniformData, t.uniforms, this.renderer, Oi, t.buffer);
    }
    this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e]);
  }
  createSyncBufferGroup(t, e, r) {
    const { gl: s } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const n = this.gl.getUniformBlockIndex(e.program, r);
    (e.uniformBufferBindings[r] = this.shader.uniformBindCount),
      s.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
      this.shader.uniformBindCount++;
    const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let o = this._uboCache[a];
    if (
      (o || (o = this._uboCache[a] = Op(t, this.shader.program.uniformData)),
      t.autoManage)
    ) {
      const h = new Float32Array(o.size / 4);
      t.buffer.update(h);
    }
    return (e.uniformGroups[t.id] = o.syncFunc), e.uniformGroups[t.id];
  }
  getSignature(t, e, r) {
    const s = t.uniforms,
      n = [`${r}-`];
    for (const a in s) n.push(a), e[a] && n.push(e[a].type);
    return n.join("-");
  }
  getGlProgram() {
    return this.shader
      ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
      : null;
  }
  generateProgram(t) {
    const e = this.gl,
      r = t.program,
      s = Pp(e, r);
    return (r.glPrograms[this.renderer.CONTEXT_UID] = s), s;
  }
  reset() {
    (this.program = null), (this.shader = null);
  }
  disposeShader(t) {
    this.shader === t && (this.shader = null);
  }
  destroy() {
    (this.renderer = null), (this.destroyed = !0);
  }
}
wl.extension = { type: R.RendererSystem, name: "shader" };
L.add(wl);
class ps {
  constructor(t) {
    this.renderer = t;
  }
  run(t) {
    const { renderer: e } = this;
    e.runners.init.emit(e.options),
      t.hello &&
        console.log(`PixiJS 7.4.0 - ${e.rendererLogId} - https://pixijs.com`),
      e.resize(e.screen.width, e.screen.height);
  }
  destroy() {}
}
(ps.defaultOptions = { hello: !1 }),
  (ps.extension = {
    type: [R.RendererSystem, R.CanvasRendererSystem],
    name: "startup",
  });
L.add(ps);
function Np(i, t = []) {
  return (
    (t[X.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.ADD] = [i.ONE, i.ONE]),
    (t[X.MULTIPLY] = [
      i.DST_COLOR,
      i.ONE_MINUS_SRC_ALPHA,
      i.ONE,
      i.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[X.SCREEN] = [
      i.ONE,
      i.ONE_MINUS_SRC_COLOR,
      i.ONE,
      i.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[X.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.NONE] = [0, 0]),
    (t[X.NORMAL_NPM] = [
      i.SRC_ALPHA,
      i.ONE_MINUS_SRC_ALPHA,
      i.ONE,
      i.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[X.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE]),
    (t[X.SCREEN_NPM] = [
      i.SRC_ALPHA,
      i.ONE_MINUS_SRC_COLOR,
      i.ONE,
      i.ONE_MINUS_SRC_ALPHA,
    ]),
    (t[X.SRC_IN] = [i.DST_ALPHA, i.ZERO]),
    (t[X.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO]),
    (t[X.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE]),
    (t[X.DST_IN] = [i.ZERO, i.SRC_ALPHA]),
    (t[X.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA]),
    (t[X.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA]),
    (t[X.SUBTRACT] = [
      i.ONE,
      i.ONE,
      i.ONE,
      i.ONE,
      i.FUNC_REVERSE_SUBTRACT,
      i.FUNC_ADD,
    ]),
    t
  );
}
const Up = 0,
  kp = 1,
  Gp = 2,
  Hp = 3,
  $p = 4,
  Xp = 5,
  Sl = class qn {
    constructor() {
      (this.gl = null),
        (this.stateId = 0),
        (this.polygonOffset = 0),
        (this.blendMode = X.NONE),
        (this._blendEq = !1),
        (this.map = []),
        (this.map[Up] = this.setBlend),
        (this.map[kp] = this.setOffset),
        (this.map[Gp] = this.setCullFace),
        (this.map[Hp] = this.setDepthTest),
        (this.map[$p] = this.setFrontFace),
        (this.map[Xp] = this.setDepthMask),
        (this.checks = []),
        (this.defaultState = new ue()),
        (this.defaultState.blend = !0);
    }
    contextChange(t) {
      (this.gl = t),
        (this.blendModes = Np(t)),
        this.set(this.defaultState),
        this.reset();
    }
    set(t) {
      if (((t = t || this.defaultState), this.stateId !== t.data)) {
        let e = this.stateId ^ t.data,
          r = 0;
        for (; e; )
          e & 1 && this.map[r].call(this, !!(t.data & (1 << r))),
            (e = e >> 1),
            r++;
        this.stateId = t.data;
      }
      for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
    }
    forceState(t) {
      t = t || this.defaultState;
      for (let e = 0; e < this.map.length; e++)
        this.map[e].call(this, !!(t.data & (1 << e)));
      for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
      this.stateId = t.data;
    }
    setBlend(t) {
      this.updateCheck(qn.checkBlendMode, t),
        this.gl[t ? "enable" : "disable"](this.gl.BLEND);
    }
    setOffset(t) {
      this.updateCheck(qn.checkPolygonOffset, t),
        this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    }
    setDepthTest(t) {
      this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
    }
    setDepthMask(t) {
      this.gl.depthMask(t);
    }
    setCullFace(t) {
      this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
    }
    setFrontFace(t) {
      this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
    }
    setBlendMode(t) {
      if (t === this.blendMode) return;
      this.blendMode = t;
      const e = this.blendModes[t],
        r = this.gl;
      e.length === 2
        ? r.blendFunc(e[0], e[1])
        : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
        e.length === 6
          ? ((this._blendEq = !0), r.blendEquationSeparate(e[4], e[5]))
          : this._blendEq &&
            ((this._blendEq = !1),
            r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
    }
    setPolygonOffset(t, e) {
      this.gl.polygonOffset(t, e);
    }
    reset() {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
        this.forceState(this.defaultState),
        (this._blendEq = !0),
        (this.blendMode = -1),
        this.setBlendMode(0);
    }
    updateCheck(t, e) {
      const r = this.checks.indexOf(t);
      e && r === -1
        ? this.checks.push(t)
        : !e && r !== -1 && this.checks.splice(r, 1);
    }
    static checkBlendMode(t, e) {
      t.setBlendMode(e.blendMode);
    }
    static checkPolygonOffset(t, e) {
      t.setPolygonOffset(1, e.polygonOffset);
    }
    destroy() {
      this.gl = null;
    }
  };
Sl.extension = { type: R.RendererSystem, name: "state" };
let Vp = Sl;
L.add(Vp);
class Wp extends mi {
  constructor() {
    super(...arguments), (this.runners = {}), (this._systemsHash = {});
  }
  setup(t) {
    this.addRunners(...t.runners);
    const e = (t.priority ?? []).filter((s) => t.systems[s]),
      r = [...e, ...Object.keys(t.systems).filter((s) => !e.includes(s))];
    for (const s of r) this.addSystem(t.systems[s], s);
  }
  addRunners(...t) {
    t.forEach((e) => {
      this.runners[e] = new zt(e);
    });
  }
  addSystem(t, e) {
    const r = new t(this);
    if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
    (this[e] = r), (this._systemsHash[e] = r);
    for (const s in this.runners) this.runners[s].add(r);
    return this;
  }
  emitWithCustomOptions(t, e) {
    const r = Object.keys(this._systemsHash);
    t.items.forEach((s) => {
      const n = r.find((a) => this._systemsHash[a] === s);
      s[t.name](e[n]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((t) => {
      t.destroy();
    }),
      (this._systemsHash = {});
  }
}
const Qr = class Zi {
  constructor(t) {
    (this.renderer = t),
      (this.count = 0),
      (this.checkCount = 0),
      (this.maxIdle = Zi.defaultMaxIdle),
      (this.checkCountMax = Zi.defaultCheckCountMax),
      (this.mode = Zi.defaultMode);
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen &&
      (this.count++,
      this.mode !== xa.MANUAL &&
        (this.checkCount++,
        this.checkCount > this.checkCountMax &&
          ((this.checkCount = 0), this.run())));
  }
  run() {
    const t = this.renderer.texture,
      e = t.managedTextures;
    let r = !1;
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      n.resource &&
        this.count - n.touched > this.maxIdle &&
        (t.destroyTexture(n, !0), (e[s] = null), (r = !0));
    }
    if (r) {
      let s = 0;
      for (let n = 0; n < e.length; n++) e[n] !== null && (e[s++] = e[n]);
      e.length = s;
    }
  }
  unload(t) {
    const e = this.renderer.texture,
      r = t._texture;
    r && !r.framebuffer && e.destroyTexture(r);
    for (let s = t.children.length - 1; s >= 0; s--) this.unload(t.children[s]);
  }
  destroy() {
    this.renderer = null;
  }
};
(Qr.defaultMode = xa.AUTO),
  (Qr.defaultMaxIdle = 60 * 60),
  (Qr.defaultCheckCountMax = 60 * 10),
  (Qr.extension = { type: R.RendererSystem, name: "textureGC" });
let Ye = Qr;
L.add(Ye);
class hn {
  constructor(t) {
    (this.texture = t),
      (this.width = -1),
      (this.height = -1),
      (this.dirtyId = -1),
      (this.dirtyStyleId = -1),
      (this.mipmap = !1),
      (this.wrapMode = 33071),
      (this.type = k.UNSIGNED_BYTE),
      (this.internalFormat = w.RGBA),
      (this.samplerType = 0);
  }
}
function zp(i) {
  let t;
  return (
    "WebGL2RenderingContext" in globalThis &&
    i instanceof globalThis.WebGL2RenderingContext
      ? (t = {
          [i.RGB]: D.FLOAT,
          [i.RGBA]: D.FLOAT,
          [i.ALPHA]: D.FLOAT,
          [i.LUMINANCE]: D.FLOAT,
          [i.LUMINANCE_ALPHA]: D.FLOAT,
          [i.R8]: D.FLOAT,
          [i.R8_SNORM]: D.FLOAT,
          [i.RG8]: D.FLOAT,
          [i.RG8_SNORM]: D.FLOAT,
          [i.RGB8]: D.FLOAT,
          [i.RGB8_SNORM]: D.FLOAT,
          [i.RGB565]: D.FLOAT,
          [i.RGBA4]: D.FLOAT,
          [i.RGB5_A1]: D.FLOAT,
          [i.RGBA8]: D.FLOAT,
          [i.RGBA8_SNORM]: D.FLOAT,
          [i.RGB10_A2]: D.FLOAT,
          [i.RGB10_A2UI]: D.FLOAT,
          [i.SRGB8]: D.FLOAT,
          [i.SRGB8_ALPHA8]: D.FLOAT,
          [i.R16F]: D.FLOAT,
          [i.RG16F]: D.FLOAT,
          [i.RGB16F]: D.FLOAT,
          [i.RGBA16F]: D.FLOAT,
          [i.R32F]: D.FLOAT,
          [i.RG32F]: D.FLOAT,
          [i.RGB32F]: D.FLOAT,
          [i.RGBA32F]: D.FLOAT,
          [i.R11F_G11F_B10F]: D.FLOAT,
          [i.RGB9_E5]: D.FLOAT,
          [i.R8I]: D.INT,
          [i.R8UI]: D.UINT,
          [i.R16I]: D.INT,
          [i.R16UI]: D.UINT,
          [i.R32I]: D.INT,
          [i.R32UI]: D.UINT,
          [i.RG8I]: D.INT,
          [i.RG8UI]: D.UINT,
          [i.RG16I]: D.INT,
          [i.RG16UI]: D.UINT,
          [i.RG32I]: D.INT,
          [i.RG32UI]: D.UINT,
          [i.RGB8I]: D.INT,
          [i.RGB8UI]: D.UINT,
          [i.RGB16I]: D.INT,
          [i.RGB16UI]: D.UINT,
          [i.RGB32I]: D.INT,
          [i.RGB32UI]: D.UINT,
          [i.RGBA8I]: D.INT,
          [i.RGBA8UI]: D.UINT,
          [i.RGBA16I]: D.INT,
          [i.RGBA16UI]: D.UINT,
          [i.RGBA32I]: D.INT,
          [i.RGBA32UI]: D.UINT,
          [i.DEPTH_COMPONENT16]: D.FLOAT,
          [i.DEPTH_COMPONENT24]: D.FLOAT,
          [i.DEPTH_COMPONENT32F]: D.FLOAT,
          [i.DEPTH_STENCIL]: D.FLOAT,
          [i.DEPTH24_STENCIL8]: D.FLOAT,
          [i.DEPTH32F_STENCIL8]: D.FLOAT,
        })
      : (t = {
          [i.RGB]: D.FLOAT,
          [i.RGBA]: D.FLOAT,
          [i.ALPHA]: D.FLOAT,
          [i.LUMINANCE]: D.FLOAT,
          [i.LUMINANCE_ALPHA]: D.FLOAT,
          [i.DEPTH_STENCIL]: D.FLOAT,
        }),
    t
  );
}
function jp(i) {
  let t;
  return (
    "WebGL2RenderingContext" in globalThis &&
    i instanceof globalThis.WebGL2RenderingContext
      ? (t = {
          [k.UNSIGNED_BYTE]: {
            [w.RGBA]: i.RGBA8,
            [w.RGB]: i.RGB8,
            [w.RG]: i.RG8,
            [w.RED]: i.R8,
            [w.RGBA_INTEGER]: i.RGBA8UI,
            [w.RGB_INTEGER]: i.RGB8UI,
            [w.RG_INTEGER]: i.RG8UI,
            [w.RED_INTEGER]: i.R8UI,
            [w.ALPHA]: i.ALPHA,
            [w.LUMINANCE]: i.LUMINANCE,
            [w.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA,
          },
          [k.BYTE]: {
            [w.RGBA]: i.RGBA8_SNORM,
            [w.RGB]: i.RGB8_SNORM,
            [w.RG]: i.RG8_SNORM,
            [w.RED]: i.R8_SNORM,
            [w.RGBA_INTEGER]: i.RGBA8I,
            [w.RGB_INTEGER]: i.RGB8I,
            [w.RG_INTEGER]: i.RG8I,
            [w.RED_INTEGER]: i.R8I,
          },
          [k.UNSIGNED_SHORT]: {
            [w.RGBA_INTEGER]: i.RGBA16UI,
            [w.RGB_INTEGER]: i.RGB16UI,
            [w.RG_INTEGER]: i.RG16UI,
            [w.RED_INTEGER]: i.R16UI,
            [w.DEPTH_COMPONENT]: i.DEPTH_COMPONENT16,
          },
          [k.SHORT]: {
            [w.RGBA_INTEGER]: i.RGBA16I,
            [w.RGB_INTEGER]: i.RGB16I,
            [w.RG_INTEGER]: i.RG16I,
            [w.RED_INTEGER]: i.R16I,
          },
          [k.UNSIGNED_INT]: {
            [w.RGBA_INTEGER]: i.RGBA32UI,
            [w.RGB_INTEGER]: i.RGB32UI,
            [w.RG_INTEGER]: i.RG32UI,
            [w.RED_INTEGER]: i.R32UI,
            [w.DEPTH_COMPONENT]: i.DEPTH_COMPONENT24,
          },
          [k.INT]: {
            [w.RGBA_INTEGER]: i.RGBA32I,
            [w.RGB_INTEGER]: i.RGB32I,
            [w.RG_INTEGER]: i.RG32I,
            [w.RED_INTEGER]: i.R32I,
          },
          [k.FLOAT]: {
            [w.RGBA]: i.RGBA32F,
            [w.RGB]: i.RGB32F,
            [w.RG]: i.RG32F,
            [w.RED]: i.R32F,
            [w.DEPTH_COMPONENT]: i.DEPTH_COMPONENT32F,
          },
          [k.HALF_FLOAT]: {
            [w.RGBA]: i.RGBA16F,
            [w.RGB]: i.RGB16F,
            [w.RG]: i.RG16F,
            [w.RED]: i.R16F,
          },
          [k.UNSIGNED_SHORT_5_6_5]: { [w.RGB]: i.RGB565 },
          [k.UNSIGNED_SHORT_4_4_4_4]: { [w.RGBA]: i.RGBA4 },
          [k.UNSIGNED_SHORT_5_5_5_1]: { [w.RGBA]: i.RGB5_A1 },
          [k.UNSIGNED_INT_2_10_10_10_REV]: {
            [w.RGBA]: i.RGB10_A2,
            [w.RGBA_INTEGER]: i.RGB10_A2UI,
          },
          [k.UNSIGNED_INT_10F_11F_11F_REV]: { [w.RGB]: i.R11F_G11F_B10F },
          [k.UNSIGNED_INT_5_9_9_9_REV]: { [w.RGB]: i.RGB9_E5 },
          [k.UNSIGNED_INT_24_8]: { [w.DEPTH_STENCIL]: i.DEPTH24_STENCIL8 },
          [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
            [w.DEPTH_STENCIL]: i.DEPTH32F_STENCIL8,
          },
        })
      : (t = {
          [k.UNSIGNED_BYTE]: {
            [w.RGBA]: i.RGBA,
            [w.RGB]: i.RGB,
            [w.ALPHA]: i.ALPHA,
            [w.LUMINANCE]: i.LUMINANCE,
            [w.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA,
          },
          [k.UNSIGNED_SHORT_5_6_5]: { [w.RGB]: i.RGB },
          [k.UNSIGNED_SHORT_4_4_4_4]: { [w.RGBA]: i.RGBA },
          [k.UNSIGNED_SHORT_5_5_5_1]: { [w.RGBA]: i.RGBA },
        }),
    t
  );
}
class Cl {
  constructor(t) {
    (this.renderer = t),
      (this.boundTextures = []),
      (this.currentLocation = -1),
      (this.managedTextures = []),
      (this._unknownBoundTextures = !1),
      (this.unknownTexture = new W()),
      (this.hasIntegerTextures = !1);
  }
  contextChange() {
    const t = (this.gl = this.renderer.gl);
    (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.webGLVersion = this.renderer.context.webGLVersion),
      (this.internalFormats = jp(t)),
      (this.samplerTypes = zp(t));
    const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = e;
    for (let s = 0; s < e; s++) this.boundTextures[s] = null;
    this.emptyTextures = {};
    const r = new hn(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, r.texture),
      t.texImage2D(
        t.TEXTURE_2D,
        0,
        t.RGBA,
        1,
        1,
        0,
        t.RGBA,
        t.UNSIGNED_BYTE,
        new Uint8Array(4)
      ),
      (this.emptyTextures[t.TEXTURE_2D] = r),
      (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new hn(t.createTexture())),
      t.bindTexture(
        t.TEXTURE_CUBE_MAP,
        this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
      );
    for (let s = 0; s < 6; s++)
      t.texImage2D(
        t.TEXTURE_CUBE_MAP_POSITIVE_X + s,
        0,
        t.RGBA,
        1,
        1,
        0,
        t.RGBA,
        t.UNSIGNED_BYTE,
        null
      );
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
      t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let s = 0; s < this.boundTextures.length; s++) this.bind(null, s);
  }
  bind(t, e = 0) {
    const { gl: r } = this;
    if (
      ((t = t == null ? void 0 : t.castToBaseTexture()),
      (t == null ? void 0 : t.valid) && !t.parentTextureArray)
    ) {
      t.touched = this.renderer.textureGC.count;
      const s = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      this.boundTextures[e] !== t &&
        (this.currentLocation !== e &&
          ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
        r.bindTexture(t.target, s.texture)),
        s.dirtyId !== t.dirtyId
          ? (this.currentLocation !== e &&
              ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
            this.updateTexture(t))
          : s.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
        (this.boundTextures[e] = t);
    } else
      this.currentLocation !== e &&
        ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
        r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture),
        (this.boundTextures[e] = null);
  }
  reset() {
    (this._unknownBoundTextures = !0),
      (this.hasIntegerTextures = !1),
      (this.currentLocation = -1);
    for (let t = 0; t < this.boundTextures.length; t++)
      this.boundTextures[t] = this.unknownTexture;
  }
  unbind(t) {
    const { gl: e, boundTextures: r } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let s = 0; s < r.length; s++)
        r[s] === this.unknownTexture && this.bind(null, s);
    }
    for (let s = 0; s < r.length; s++)
      r[s] === t &&
        (this.currentLocation !== s &&
          (e.activeTexture(e.TEXTURE0 + s), (this.currentLocation = s)),
        e.bindTexture(t.target, this.emptyTextures[t.target].texture),
        (r[s] = null));
  }
  ensureSamplerType(t) {
    const { boundTextures: e, hasIntegerTextures: r, CONTEXT_UID: s } = this;
    if (r)
      for (let n = t - 1; n >= 0; --n) {
        const a = e[n];
        a &&
          a._glTextures[s].samplerType !== D.FLOAT &&
          this.renderer.texture.unbind(a);
      }
  }
  initTexture(t) {
    const e = new hn(this.gl.createTexture());
    return (
      (e.dirtyId = -1),
      (t._glTextures[this.CONTEXT_UID] = e),
      this.managedTextures.push(t),
      t.on("dispose", this.destroyTexture, this),
      e
    );
  }
  initTextureType(t, e) {
    var r;
    (e.internalFormat =
      ((r = this.internalFormats[t.type]) == null ? void 0 : r[t.format]) ??
      t.format),
      (e.samplerType = this.samplerTypes[e.internalFormat] ?? D.FLOAT),
      this.webGLVersion === 2 && t.type === k.HALF_FLOAT
        ? (e.type = this.gl.HALF_FLOAT)
        : (e.type = t.type);
  }
  updateTexture(t) {
    var s;
    const e = t._glTextures[this.CONTEXT_UID];
    if (!e) return;
    const r = this.renderer;
    if (
      (this.initTextureType(t, e),
      (s = t.resource) == null ? void 0 : s.upload(r, t, e))
    )
      e.samplerType !== D.FLOAT && (this.hasIntegerTextures = !0);
    else {
      const n = t.realWidth,
        a = t.realHeight,
        o = r.gl;
      (e.width !== n || e.height !== a || e.dirtyId < 0) &&
        ((e.width = n),
        (e.height = a),
        o.texImage2D(
          t.target,
          0,
          e.internalFormat,
          n,
          a,
          0,
          t.format,
          e.type,
          null
        ));
    }
    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
      (e.dirtyId = t.dirtyId);
  }
  destroyTexture(t, e) {
    const { gl: r } = this;
    if (
      ((t = t.castToBaseTexture()),
      t._glTextures[this.CONTEXT_UID] &&
        (this.unbind(t),
        r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
        t.off("dispose", this.destroyTexture, this),
        delete t._glTextures[this.CONTEXT_UID],
        !e))
    ) {
      const s = this.managedTextures.indexOf(t);
      s !== -1 && Pr(this.managedTextures, s, 1);
    }
  }
  updateTextureStyle(t) {
    var r;
    const e = t._glTextures[this.CONTEXT_UID];
    e &&
      ((t.mipmap === ce.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo
        ? (e.mipmap = !1)
        : (e.mipmap = t.mipmap >= 1),
      this.webGLVersion !== 2 && !t.isPowerOfTwo
        ? (e.wrapMode = Oe.CLAMP)
        : (e.wrapMode = t.wrapMode),
      ((r = t.resource) != null && r.style(this.renderer, t, e)) ||
        this.setStyle(t, e),
      (e.dirtyStyleId = t.dirtyStyleId));
  }
  setStyle(t, e) {
    const r = this.gl;
    if (
      (e.mipmap && t.mipmap !== ce.ON_MANUAL && r.generateMipmap(t.target),
      r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
      r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
      e.mipmap)
    ) {
      r.texParameteri(
        t.target,
        r.TEXTURE_MIN_FILTER,
        t.scaleMode === ge.LINEAR
          ? r.LINEAR_MIPMAP_LINEAR
          : r.NEAREST_MIPMAP_NEAREST
      );
      const s = this.renderer.context.extensions.anisotropicFiltering;
      if (s && t.anisotropicLevel > 0 && t.scaleMode === ge.LINEAR) {
        const n = Math.min(
          t.anisotropicLevel,
          r.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        );
        r.texParameterf(t.target, s.TEXTURE_MAX_ANISOTROPY_EXT, n);
      }
    } else
      r.texParameteri(
        t.target,
        r.TEXTURE_MIN_FILTER,
        t.scaleMode === ge.LINEAR ? r.LINEAR : r.NEAREST
      );
    r.texParameteri(
      t.target,
      r.TEXTURE_MAG_FILTER,
      t.scaleMode === ge.LINEAR ? r.LINEAR : r.NEAREST
    );
  }
  destroy() {
    this.renderer = null;
  }
}
Cl.extension = { type: R.RendererSystem, name: "texture" };
L.add(Cl);
class Il {
  constructor(t) {
    this.renderer = t;
  }
  contextChange() {
    (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(t) {
    const { gl: e, CONTEXT_UID: r } = this,
      s = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s);
  }
  unbind() {
    const { gl: t } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(t, e) {
    const { gl: r, renderer: s } = this;
    e && s.shader.bind(e), r.beginTransformFeedback(t);
  }
  endTransformFeedback() {
    const { gl: t } = this;
    t.endTransformFeedback();
  }
  createGLTransformFeedback(t) {
    const { gl: e, renderer: r, CONTEXT_UID: s } = this,
      n = e.createTransformFeedback();
    (t._glTransformFeedbacks[s] = n),
      e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
    for (let a = 0; a < t.buffers.length; a++) {
      const o = t.buffers[a];
      o &&
        (r.buffer.update(o),
        o._glBuffers[s].refCount++,
        e.bindBufferBase(
          e.TRANSFORM_FEEDBACK_BUFFER,
          a,
          o._glBuffers[s].buffer || null
        ));
    }
    return (
      e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null),
      t.disposeRunner.add(this),
      n
    );
  }
  disposeTransformFeedback(t, e) {
    const r = t._glTransformFeedbacks[this.CONTEXT_UID],
      s = this.gl;
    t.disposeRunner.remove(this);
    const n = this.renderer.buffer;
    if (n)
      for (let a = 0; a < t.buffers.length; a++) {
        const o = t.buffers[a];
        if (!o) continue;
        const h = o._glBuffers[this.CONTEXT_UID];
        h && (h.refCount--, h.refCount === 0 && !e && n.dispose(o, e));
      }
    r &&
      (e || s.deleteTransformFeedback(r),
      delete t._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
Il.extension = { type: R.RendererSystem, name: "transformFeedback" };
L.add(Il);
class ms {
  constructor(t) {
    this.renderer = t;
  }
  init(t) {
    (this.screen = new j(0, 0, t.width, t.height)),
      (this.element = t.view || F.ADAPTER.createCanvas()),
      (this.resolution = t.resolution || F.RESOLUTION),
      (this.autoDensity = !!t.autoDensity);
  }
  resizeView(t, e) {
    (this.element.width = Math.round(t * this.resolution)),
      (this.element.height = Math.round(e * this.resolution));
    const r = this.element.width / this.resolution,
      s = this.element.height / this.resolution;
    (this.screen.width = r),
      (this.screen.height = s),
      this.autoDensity &&
        ((this.element.style.width = `${r}px`),
        (this.element.style.height = `${s}px`)),
      this.renderer.emit("resize", r, s),
      this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(t) {
    var e;
    t && ((e = this.element.parentNode) == null || e.removeChild(this.element)),
      (this.renderer = null),
      (this.element = null),
      (this.screen = null);
  }
}
(ms.defaultOptions = {
  width: 800,
  height: 600,
  resolution: void 0,
  autoDensity: !1,
}),
  (ms.extension = {
    type: [R.RendererSystem, R.CanvasRendererSystem],
    name: "_view",
  });
L.add(ms);
F.PREFER_ENV = nr.WEBGL2;
F.STRICT_TEXTURE_CACHE = !1;
F.RENDER_OPTIONS = {
  ...fs.defaultOptions,
  ...ds.defaultOptions,
  ...ms.defaultOptions,
  ...ps.defaultOptions,
};
Object.defineProperties(F, {
  WRAP_MODE: {
    get() {
      return W.defaultOptions.wrapMode;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"
      ),
        (W.defaultOptions.wrapMode = i);
    },
  },
  SCALE_MODE: {
    get() {
      return W.defaultOptions.scaleMode;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"
      ),
        (W.defaultOptions.scaleMode = i);
    },
  },
  MIPMAP_TEXTURES: {
    get() {
      return W.defaultOptions.mipmap;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"
      ),
        (W.defaultOptions.mipmap = i);
    },
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return W.defaultOptions.anisotropicLevel;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"
      ),
        (W.defaultOptions.anisotropicLevel = i);
    },
  },
  FILTER_RESOLUTION: {
    get() {
      return (
        q(
          "7.1.0",
          "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"
        ),
        It.defaultResolution
      );
    },
    set(i) {
      It.defaultResolution = i;
    },
  },
  FILTER_MULTISAMPLE: {
    get() {
      return (
        q(
          "7.1.0",
          "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"
        ),
        It.defaultMultisample
      );
    },
    set(i) {
      It.defaultMultisample = i;
    },
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return je.defaultMaxTextures;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"
      ),
        (je.defaultMaxTextures = i);
    },
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return je.defaultBatchSize;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"
      ),
        (je.defaultBatchSize = i);
    },
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return je.canUploadSameBuffer;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"
      ),
        (je.canUploadSameBuffer = i);
    },
  },
  GC_MODE: {
    get() {
      return Ye.defaultMode;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"
      ),
        (Ye.defaultMode = i);
    },
  },
  GC_MAX_IDLE: {
    get() {
      return Ye.defaultMaxIdle;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"
      ),
        (Ye.defaultMaxIdle = i);
    },
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return Ye.defaultCheckCountMax;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"
      ),
        (Ye.defaultCheckCountMax = i);
    },
  },
  PRECISION_VERTEX: {
    get() {
      return ve.defaultVertexPrecision;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"
      ),
        (ve.defaultVertexPrecision = i);
    },
  },
  PRECISION_FRAGMENT: {
    get() {
      return ve.defaultFragmentPrecision;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"
      ),
        (ve.defaultFragmentPrecision = i);
    },
  },
});
var sr = ((i) => (
  (i[(i.INTERACTION = 50)] = "INTERACTION"),
  (i[(i.HIGH = 25)] = "HIGH"),
  (i[(i.NORMAL = 0)] = "NORMAL"),
  (i[(i.LOW = -25)] = "LOW"),
  (i[(i.UTILITY = -50)] = "UTILITY"),
  i
))(sr || {});
class ln {
  constructor(t, e = null, r = 0, s = !1) {
    (this.next = null),
      (this.previous = null),
      (this._destroyed = !1),
      (this.fn = t),
      (this.context = e),
      (this.priority = r),
      (this.once = s);
  }
  match(t, e = null) {
    return this.fn === t && this.context === e;
  }
  emit(t) {
    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
    const e = this.next;
    return (
      this.once && this.destroy(!0), this._destroyed && (this.next = null), e
    );
  }
  connect(t) {
    (this.previous = t),
      t.next && (t.next.previous = this),
      (this.next = t.next),
      (t.next = this);
  }
  destroy(t = !1) {
    (this._destroyed = !0),
      (this.fn = null),
      (this.context = null),
      this.previous && (this.previous.next = this.next),
      this.next && (this.next.previous = this.previous);
    const e = this.next;
    return (this.next = t ? null : e), (this.previous = null), e;
  }
}
const Rl = class Mt {
  constructor() {
    (this.autoStart = !1),
      (this.deltaTime = 1),
      (this.lastTime = -1),
      (this.speed = 1),
      (this.started = !1),
      (this._requestId = null),
      (this._maxElapsedMS = 100),
      (this._minElapsedMS = 0),
      (this._protected = !1),
      (this._lastFrame = -1),
      (this._head = new ln(null, null, 1 / 0)),
      (this.deltaMS = 1 / Mt.targetFPMS),
      (this.elapsedMS = 1 / Mt.targetFPMS),
      (this._tick = (t) => {
        (this._requestId = null),
          this.started &&
            (this.update(t),
            this.started &&
              this._requestId === null &&
              this._head.next &&
              (this._requestId = requestAnimationFrame(this._tick)));
      });
  }
  _requestIfNeeded() {
    this._requestId === null &&
      this._head.next &&
      ((this.lastTime = performance.now()),
      (this._lastFrame = this.lastTime),
      (this._requestId = requestAnimationFrame(this._tick)));
  }
  _cancelIfNeeded() {
    this._requestId !== null &&
      (cancelAnimationFrame(this._requestId), (this._requestId = null));
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(t, e, r = sr.NORMAL) {
    return this._addListener(new ln(t, e, r));
  }
  addOnce(t, e, r = sr.NORMAL) {
    return this._addListener(new ln(t, e, r, !0));
  }
  _addListener(t) {
    let e = this._head.next,
      r = this._head;
    if (!e) t.connect(r);
    else {
      for (; e; ) {
        if (t.priority > e.priority) {
          t.connect(r);
          break;
        }
        (r = e), (e = e.next);
      }
      t.previous || t.connect(r);
    }
    return this._startIfPossible(), this;
  }
  remove(t, e) {
    let r = this._head.next;
    for (; r; ) r.match(t, e) ? (r = r.destroy()) : (r = r.next);
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let t = 0,
      e = this._head;
    for (; (e = e.next); ) t++;
    return t;
  }
  start() {
    this.started || ((this.started = !0), this._requestIfNeeded());
  }
  stop() {
    this.started && ((this.started = !1), this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t; ) t = t.destroy(!0);
      this._head.destroy(), (this._head = null);
    }
  }
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      if (
        ((e = this.elapsedMS = t - this.lastTime),
        e > this._maxElapsedMS && (e = this._maxElapsedMS),
        (e *= this.speed),
        this._minElapsedMS)
      ) {
        const n = (t - this._lastFrame) | 0;
        if (n < this._minElapsedMS) return;
        this._lastFrame = t - (n % this._minElapsedMS);
      }
      (this.deltaMS = e), (this.deltaTime = this.deltaMS * Mt.targetFPMS);
      const r = this._head;
      let s = r.next;
      for (; s; ) s = s.emit(this.deltaTime);
      r.next || this._cancelIfNeeded();
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t),
      r = Math.min(Math.max(0, e) / 1e3, Mt.targetFPMS);
    this._maxElapsedMS = 1 / r;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(t) {
    if (t === 0) this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3);
    }
  }
  static get shared() {
    if (!Mt._shared) {
      const t = (Mt._shared = new Mt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return Mt._shared;
  }
  static get system() {
    if (!Mt._system) {
      const t = (Mt._system = new Mt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return Mt._system;
  }
};
Rl.targetFPMS = 0.06;
let Bt = Rl;
Object.defineProperties(F, {
  TARGET_FPMS: {
    get() {
      return Bt.targetFPMS;
    },
    set(i) {
      q("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),
        (Bt.targetFPMS = i);
    },
  },
});
class Pl {
  static init(t) {
    (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
      Object.defineProperty(this, "ticker", {
        set(e) {
          this._ticker && this._ticker.remove(this.render, this),
            (this._ticker = e),
            e && e.add(this.render, this, sr.LOW);
        },
        get() {
          return this._ticker;
        },
      }),
      (this.stop = () => {
        this._ticker.stop();
      }),
      (this.start = () => {
        this._ticker.start();
      }),
      (this._ticker = null),
      (this.ticker = t.sharedTicker ? Bt.shared : new Bt()),
      t.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      (this.ticker = null), t.destroy();
    }
  }
}
Pl.extension = R.Application;
L.add(Pl);
const Ml = [];
L.handleByList(R.Renderer, Ml);
function Yp(i) {
  for (const t of Ml) if (t.test(i)) return new t(i);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var qp = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
  Kp = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Zp = qp,
  Bl = Kp;
class Dl {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let e;
    if (this.renderer.context.webGLVersion === 1) {
      const r = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null),
        (e = t.getParameter(t.SAMPLES)),
        t.bindFramebuffer(t.FRAMEBUFFER, r);
    } else {
      const r = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        (e = t.getParameter(t.SAMPLES)),
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, r);
    }
    e >= dt.HIGH
      ? (this.multisample = dt.HIGH)
      : e >= dt.MEDIUM
      ? (this.multisample = dt.MEDIUM)
      : e >= dt.LOW
      ? (this.multisample = dt.LOW)
      : (this.multisample = dt.NONE);
  }
  destroy() {}
}
Dl.extension = { type: R.RendererSystem, name: "_multisample" };
L.add(Dl);
class Qp {
  constructor(t) {
    (this.buffer = t || null),
      (this.updateID = -1),
      (this.byteLength = -1),
      (this.refCount = 0);
  }
}
class Fl {
  constructor(t) {
    (this.renderer = t),
      (this.managedBuffers = {}),
      (this.boundBufferBases = {});
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(!0),
      (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(t) {
    const { gl: e, CONTEXT_UID: r } = this,
      s = t._glBuffers[r] || this.createGLBuffer(t);
    e.bindBuffer(t.type, s.buffer);
  }
  unbind(t) {
    const { gl: e } = this;
    e.bindBuffer(t, null);
  }
  bindBufferBase(t, e) {
    const { gl: r, CONTEXT_UID: s } = this;
    if (this.boundBufferBases[e] !== t) {
      const n = t._glBuffers[s] || this.createGLBuffer(t);
      (this.boundBufferBases[e] = t),
        r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer);
    }
  }
  bindBufferRange(t, e, r) {
    const { gl: s, CONTEXT_UID: n } = this;
    r = r || 0;
    const a = t._glBuffers[n] || this.createGLBuffer(t);
    s.bindBufferRange(s.UNIFORM_BUFFER, e || 0, a.buffer, r * 256, 256);
  }
  update(t) {
    const { gl: e, CONTEXT_UID: r } = this,
      s = t._glBuffers[r] || this.createGLBuffer(t);
    if (t._updateID !== s.updateID)
      if (
        ((s.updateID = t._updateID),
        e.bindBuffer(t.type, s.buffer),
        s.byteLength >= t.data.byteLength)
      )
        e.bufferSubData(t.type, 0, t.data);
      else {
        const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
        (s.byteLength = t.data.byteLength), e.bufferData(t.type, t.data, n);
      }
  }
  dispose(t, e) {
    if (!this.managedBuffers[t.id]) return;
    delete this.managedBuffers[t.id];
    const r = t._glBuffers[this.CONTEXT_UID],
      s = this.gl;
    t.disposeRunner.remove(this),
      r &&
        (e || s.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(t) {
    const e = Object.keys(this.managedBuffers);
    for (let r = 0; r < e.length; r++)
      this.dispose(this.managedBuffers[e[r]], t);
  }
  createGLBuffer(t) {
    const { CONTEXT_UID: e, gl: r } = this;
    return (
      (t._glBuffers[e] = new Qp(r.createBuffer())),
      (this.managedBuffers[t.id] = t),
      t.disposeRunner.add(this),
      t._glBuffers[e]
    );
  }
}
Fl.extension = { type: R.RendererSystem, name: "buffer" };
L.add(Fl);
class Ol {
  constructor(t) {
    this.renderer = t;
  }
  render(t, e) {
    const r = this.renderer;
    let s, n, a, o;
    if (
      (e &&
        ((s = e.renderTexture),
        (n = e.clear),
        (a = e.transform),
        (o = e.skipUpdateTransform)),
      (this.renderingToScreen = !s),
      r.runners.prerender.emit(),
      r.emit("prerender"),
      (r.projection.transform = a),
      !r.context.isLost)
    ) {
      if ((s || (this.lastObjectRendered = t), !o)) {
        const h = t.enableTempParent();
        t.updateTransform(), t.disableTempParent(h);
      }
      r.renderTexture.bind(s),
        r.batch.currentRenderer.start(),
        (n ?? r.background.clearBeforeRender) && r.renderTexture.clear(),
        t.render(r),
        r.batch.currentRenderer.flush(),
        s && (e.blit && r.framebuffer.blit(), s.baseTexture.update()),
        r.runners.postrender.emit(),
        (r.projection.transform = null),
        r.emit("postrender");
    }
  }
  destroy() {
    (this.renderer = null), (this.lastObjectRendered = null);
  }
}
Ol.extension = { type: R.RendererSystem, name: "objectRenderer" };
L.add(Ol);
const Qi = class Kn extends Wp {
  constructor(t) {
    super(),
      (this.type = Eh.WEBGL),
      (t = Object.assign({}, F.RENDER_OPTIONS, t)),
      (this.gl = null),
      (this.CONTEXT_UID = 0),
      (this.globalUniforms = new jt({ projectionMatrix: new it() }, !0));
    const e = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize",
      ],
      systems: Kn.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample",
      ],
    };
    this.setup(e),
      "useContextAlpha" in t &&
        (q(
          "7.0.0",
          "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"
        ),
        (t.premultipliedAlpha =
          t.useContextAlpha && t.useContextAlpha !== "notMultiplied"),
        (t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha)),
      (this._plugin.rendererPlugins = Kn.__plugins),
      (this.options = t),
      this.startup.run(this.options);
  }
  static test(t) {
    return t != null && t.forceCanvas ? !1 : bf();
  }
  render(t, e) {
    this.objectRenderer.render(t, e);
  }
  resize(t, e) {
    this._view.resizeView(t, e);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(t = !1) {
    this.runners.destroy.items.reverse(),
      this.emitWithCustomOptions(this.runners.destroy, { _view: t }),
      super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(t) {
    (this._view.resolution = t), this.runners.resolutionChange.emit(t);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return (
      q(
        "7.0.0",
        "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."
      ),
      this.background.clearBeforeRender
    );
  }
  get useContextAlpha() {
    return (
      q(
        "7.0.0",
        "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."
      ),
      this.context.useContextAlpha
    );
  }
  get preserveDrawingBuffer() {
    return (
      q(
        "7.0.0",
        "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"
      ),
      this.context.preserveDrawingBuffer
    );
  }
  get backgroundColor() {
    return (
      q(
        "7.0.0",
        "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
      ),
      this.background.color
    );
  }
  set backgroundColor(t) {
    q(
      "7.0.0",
      "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
    ),
      (this.background.color = t);
  }
  get backgroundAlpha() {
    return (
      q(
        "7.0.0",
        "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
      ),
      this.background.alpha
    );
  }
  set backgroundAlpha(t) {
    q(
      "7.0.0",
      "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
    ),
      (this.background.alpha = t);
  }
  get powerPreference() {
    return (
      q(
        "7.0.0",
        "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"
      ),
      this.context.powerPreference
    );
  }
  generateTexture(t, e) {
    return this.textureGenerator.generateTexture(t, e);
  }
};
(Qi.extension = { type: R.Renderer, priority: 1 }),
  (Qi.__plugins = {}),
  (Qi.__systems = {});
let Pa = Qi;
L.handleByMap(R.RendererPlugin, Pa.__plugins);
L.handleByMap(R.RendererSystem, Pa.__systems);
L.add(Pa);
class Ll extends di {
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    super(r, s), (this.items = []), (this.itemDirtyIds = []);
    for (let n = 0; n < t; n++) {
      const a = new W();
      this.items.push(a), this.itemDirtyIds.push(-2);
    }
    (this.length = t), (this._load = null), (this.baseTexture = null);
  }
  initFromArray(t, e) {
    for (let r = 0; r < this.length; r++)
      t[r] &&
        (t[r].castToBaseTexture
          ? this.addBaseTextureAt(t[r].castToBaseTexture(), r)
          : t[r] instanceof di
          ? this.addResourceAt(t[r], r)
          : this.addResourceAt(tl(t[r], e), r));
  }
  dispose() {
    for (let t = 0, e = this.length; t < e; t++) this.items[t].destroy();
    (this.items = null), (this.itemDirtyIds = null), (this._load = null);
  }
  addResourceAt(t, e) {
    if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
    return (
      t.valid && !this.valid && this.resize(t.width, t.height),
      this.items[e].setResource(t),
      this
    );
  }
  bind(t) {
    if (this.baseTexture !== null)
      throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(t);
    for (let e = 0; e < this.length; e++)
      (this.items[e].parentTextureArray = t),
        this.items[e].on("update", t.update, t);
  }
  unbind(t) {
    super.unbind(t);
    for (let e = 0; e < this.length; e++)
      (this.items[e].parentTextureArray = null),
        this.items[e].off("update", t.update, t);
  }
  load() {
    if (this._load) return this._load;
    const t = this.items
      .map((e) => e.resource)
      .filter((e) => e)
      .map((e) => e.load());
    return (
      (this._load = Promise.all(t).then(() => {
        const { realWidth: e, realHeight: r } = this.items[0];
        return this.resize(e, r), this.update(), Promise.resolve(this);
      })),
      this._load
    );
  }
}
class Jp extends Ll {
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    let n, a;
    Array.isArray(t) ? ((n = t), (a = t.length)) : (a = t),
      super(a, { width: r, height: s }),
      n && this.initFromArray(n, e);
  }
  addBaseTextureAt(t, e) {
    if (t.resource) this.addResourceAt(t.resource, e);
    else throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(t) {
    super.bind(t), (t.target = Cr.TEXTURE_2D_ARRAY);
  }
  upload(t, e, r) {
    const { length: s, itemDirtyIds: n, items: a } = this,
      { gl: o } = t;
    r.dirtyId < 0 &&
      o.texImage3D(
        o.TEXTURE_2D_ARRAY,
        0,
        r.internalFormat,
        this._width,
        this._height,
        s,
        0,
        e.format,
        r.type,
        null
      );
    for (let h = 0; h < s; h++) {
      const l = a[h];
      n[h] < l.dirtyId &&
        ((n[h] = l.dirtyId),
        l.valid &&
          o.texSubImage3D(
            o.TEXTURE_2D_ARRAY,
            0,
            0,
            0,
            h,
            l.resource.width,
            l.resource.height,
            1,
            e.format,
            r.type,
            l.resource.source
          ));
    }
    return !0;
  }
}
class tm extends Ee {
  constructor(t) {
    super(t);
  }
  static test(t) {
    const { OffscreenCanvas: e } = globalThis;
    return e && t instanceof e
      ? !0
      : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
  }
}
const Nl = class Jr extends Ll {
  constructor(t, e) {
    const { width: r, height: s, autoLoad: n, linkBaseTexture: a } = e || {};
    if (t && t.length !== Jr.SIDES)
      throw new Error(`Invalid length. Got ${t.length}, expected 6`);
    super(6, { width: r, height: s });
    for (let o = 0; o < Jr.SIDES; o++)
      this.items[o].target = Cr.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    (this.linkBaseTexture = a !== !1),
      t && this.initFromArray(t, e),
      n !== !1 && this.load();
  }
  bind(t) {
    super.bind(t), (t.target = Cr.TEXTURE_CUBE_MAP);
  }
  addBaseTextureAt(t, e, r) {
    if ((r === void 0 && (r = this.linkBaseTexture), !this.items[e]))
      throw new Error(`Index ${e} is out of bounds`);
    if (
      !this.linkBaseTexture ||
      t.parentTextureArray ||
      Object.keys(t._glTextures).length > 0
    )
      if (t.resource) this.addResourceAt(t.resource, e);
      else
        throw new Error(
          "CubeResource does not support copying of renderTexture."
        );
    else
      (t.target = Cr.TEXTURE_CUBE_MAP_POSITIVE_X + e),
        (t.parentTextureArray = this.baseTexture),
        (this.items[e] = t);
    return (
      t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
      (this.items[e] = t),
      this
    );
  }
  upload(t, e, r) {
    const s = this.itemDirtyIds;
    for (let n = 0; n < Jr.SIDES; n++) {
      const a = this.items[n];
      (s[n] < a.dirtyId || r.dirtyId < e.dirtyId) &&
        (a.valid && a.resource
          ? (a.resource.upload(t, a, r), (s[n] = a.dirtyId))
          : s[n] < -1 &&
            (t.gl.texImage2D(
              a.target,
              0,
              r.internalFormat,
              e.realWidth,
              e.realHeight,
              0,
              e.format,
              r.type,
              null
            ),
            (s[n] = -1)));
    }
    return !0;
  }
  static test(t) {
    return Array.isArray(t) && t.length === Jr.SIDES;
  }
};
Nl.SIDES = 6;
let em = Nl;
class Er extends Ee {
  constructor(t, e) {
    e = e || {};
    let r, s, n;
    typeof t == "string"
      ? ((r = Er.EMPTY), (s = t), (n = !0))
      : ((r = t), (s = null), (n = !1)),
      super(r),
      (this.url = s),
      (this.crossOrigin = e.crossOrigin ?? !0),
      (this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null),
      (this.ownsImageBitmap = e.ownsImageBitmap ?? n),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load
      ? this._load
      : ((this._load = new Promise(async (t, e) => {
          if (this.url === null) {
            t(this);
            return;
          }
          try {
            const r = await F.ADAPTER.fetch(this.url, {
              mode: this.crossOrigin ? "cors" : "no-cors",
            });
            if (this.destroyed) return;
            const s = await r.blob();
            if (this.destroyed) return;
            const n = await createImageBitmap(s, {
              premultiplyAlpha:
                this.alphaMode === null || this.alphaMode === Rt.UNPACK
                  ? "premultiply"
                  : "none",
            });
            if (this.destroyed) {
              n.close();
              return;
            }
            (this.source = n), this.update(), t(this);
          } catch (r) {
            if (this.destroyed) return;
            e(r), this.onError.emit(r);
          }
        })),
        this._load);
  }
  upload(t, e, r) {
    return this.source instanceof ImageBitmap
      ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
        super.upload(t, e, r))
      : (this.load(), !1);
  }
  dispose() {
    this.ownsImageBitmap &&
      this.source instanceof ImageBitmap &&
      this.source.close(),
      super.dispose(),
      (this._load = null);
  }
  static test(t) {
    return (
      !!globalThis.createImageBitmap &&
      typeof ImageBitmap < "u" &&
      (typeof t == "string" || t instanceof ImageBitmap)
    );
  }
  static get EMPTY() {
    return (Er._EMPTY = Er._EMPTY ?? F.ADAPTER.createCanvas(0, 0)), Er._EMPTY;
  }
}
const Zn = class Ji extends Ee {
  constructor(t, e) {
    (e = e || {}),
      super(F.ADAPTER.createCanvas()),
      (this._width = 0),
      (this._height = 0),
      (this.svg = t),
      (this.scale = e.scale || 1),
      (this._overrideWidth = e.width),
      (this._overrideHeight = e.height),
      (this._resolve = null),
      (this._crossorigin = e.crossorigin),
      (this._load = null),
      e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load
      ? this._load
      : ((this._load = new Promise((t) => {
          if (
            ((this._resolve = () => {
              this.update(), t(this);
            }),
            Ji.SVG_XML.test(this.svg.trim()))
          ) {
            if (!btoa)
              throw new Error(
                "Your browser doesn't support base64 conversions."
              );
            this.svg = `data:image/svg+xml;base64,${btoa(
              unescape(encodeURIComponent(this.svg))
            )}`;
          }
          this._loadSvg();
        })),
        this._load);
  }
  _loadSvg() {
    const t = new Image();
    Ee.crossOrigin(t, this.svg, this._crossorigin),
      (t.src = this.svg),
      (t.onerror = (e) => {
        this._resolve && ((t.onerror = null), this.onError.emit(e));
      }),
      (t.onload = () => {
        if (!this._resolve) return;
        const e = t.width,
          r = t.height;
        if (!e || !r)
          throw new Error(
            "The SVG image must have width and height defined (in pixels), canvas API needs them."
          );
        let s = e * this.scale,
          n = r * this.scale;
        (this._overrideWidth || this._overrideHeight) &&
          ((s = this._overrideWidth || (this._overrideHeight / r) * e),
          (n = this._overrideHeight || (this._overrideWidth / e) * r)),
          (s = Math.round(s)),
          (n = Math.round(n));
        const a = this.source;
        (a.width = s),
          (a.height = n),
          (a._pixiId = `canvas_${ir()}`),
          a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, s, n),
          this._resolve(),
          (this._resolve = null);
      });
  }
  static getSize(t) {
    const e = Ji.SVG_SIZE.exec(t),
      r = {};
    return (
      e &&
        ((r[e[1]] = Math.round(parseFloat(e[3]))),
        (r[e[5]] = Math.round(parseFloat(e[7])))),
      r
    );
  }
  dispose() {
    super.dispose(), (this._resolve = null), (this._crossorigin = null);
  }
  static test(t, e) {
    return (
      e === "svg" ||
      (typeof t == "string" && t.startsWith("data:image/svg+xml")) ||
      (typeof t == "string" && Ji.SVG_XML.test(t))
    );
  }
};
(Zn.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
  (Zn.SVG_SIZE =
    /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
let Qn = Zn;
class rm extends Ee {
  constructor(t) {
    super(t);
  }
  static test(t) {
    return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame;
  }
}
const Jn = class ta extends Ee {
  constructor(t, e) {
    if (((e = e || {}), !(t instanceof HTMLVideoElement))) {
      const r = document.createElement("video");
      e.autoLoad !== !1 && r.setAttribute("preload", "auto"),
        e.playsinline !== !1 &&
          (r.setAttribute("webkit-playsinline", ""),
          r.setAttribute("playsinline", "")),
        e.muted === !0 && (r.setAttribute("muted", ""), (r.muted = !0)),
        e.loop === !0 && r.setAttribute("loop", ""),
        e.autoPlay !== !1 && r.setAttribute("autoplay", ""),
        typeof t == "string" && (t = [t]);
      const s = t[0].src || t[0];
      Ee.crossOrigin(r, s, e.crossorigin);
      for (let n = 0; n < t.length; ++n) {
        const a = document.createElement("source");
        let { src: o, mime: h } = t[n];
        if (((o = o || t[n]), o.startsWith("data:")))
          h = o.slice(5, o.indexOf(";"));
        else if (!o.startsWith("blob:")) {
          const l = o.split("?").shift().toLowerCase(),
            c = l.slice(l.lastIndexOf(".") + 1);
          h = h || ta.MIME_TYPES[c] || `video/${c}`;
        }
        (a.src = o), h && (a.type = h), r.appendChild(a);
      }
      t = r;
    }
    super(t),
      (this.noSubImage = !0),
      (this._autoUpdate = !0),
      (this._isConnectedToTicker = !1),
      (this._updateFPS = e.updateFPS || 0),
      (this._msToNextUpdate = 0),
      (this.autoPlay = e.autoPlay !== !1),
      (this._videoFrameRequestCallback =
        this._videoFrameRequestCallback.bind(this)),
      (this._videoFrameRequestCallbackHandle = null),
      (this._load = null),
      (this._resolve = null),
      (this._reject = null),
      (this._onCanPlay = this._onCanPlay.bind(this)),
      (this._onError = this._onError.bind(this)),
      (this._onPlayStart = this._onPlayStart.bind(this)),
      (this._onPlayStop = this._onPlayStop.bind(this)),
      (this._onSeeked = this._onSeeked.bind(this)),
      e.autoLoad !== !1 && this.load();
  }
  update(t = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const e = Bt.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) &&
        (super.update(),
        (this._msToNextUpdate = this._updateFPS
          ? Math.floor(1e3 / this._updateFPS)
          : 0));
    }
  }
  _videoFrameRequestCallback() {
    this.update(),
      this.destroyed
        ? (this._videoFrameRequestCallbackHandle = null)
        : (this._videoFrameRequestCallbackHandle =
            this.source.requestVideoFrameCallback(
              this._videoFrameRequestCallback
            ));
  }
  load() {
    if (this._load) return this._load;
    const t = this.source;
    return (
      (t.readyState === t.HAVE_ENOUGH_DATA ||
        t.readyState === t.HAVE_FUTURE_DATA) &&
        t.width &&
        t.height &&
        (t.complete = !0),
      t.addEventListener("play", this._onPlayStart),
      t.addEventListener("pause", this._onPlayStop),
      t.addEventListener("seeked", this._onSeeked),
      this._isSourceReady()
        ? this._onCanPlay()
        : (t.addEventListener("canplay", this._onCanPlay),
          t.addEventListener("canplaythrough", this._onCanPlay),
          t.addEventListener("error", this._onError, !0)),
      (this._load = new Promise((e, r) => {
        this.valid
          ? e(this)
          : ((this._resolve = e), (this._reject = r), t.load());
      })),
      this._load
    );
  }
  _onError(t) {
    this.source.removeEventListener("error", this._onError, !0),
      this.onError.emit(t),
      this._reject &&
        (this._reject(t), (this._reject = null), (this._resolve = null));
  }
  _isSourcePlaying() {
    const t = this.source;
    return !t.paused && !t.ended;
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    this._autoUpdate &&
      !this._isSourcePlaying() &&
      ((this._msToNextUpdate = 0), this.update(), (this._msToNextUpdate = 0));
  }
  _onCanPlay() {
    const t = this.source;
    t.removeEventListener("canplay", this._onCanPlay),
      t.removeEventListener("canplaythrough", this._onCanPlay);
    const e = this.valid;
    (this._msToNextUpdate = 0),
      this.update(),
      (this._msToNextUpdate = 0),
      !e &&
        this._resolve &&
        (this._resolve(this), (this._resolve = null), (this._reject = null)),
      this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
  }
  dispose() {
    this._configureAutoUpdate();
    const t = this.source;
    t &&
      (t.removeEventListener("play", this._onPlayStart),
      t.removeEventListener("pause", this._onPlayStop),
      t.removeEventListener("seeked", this._onSeeked),
      t.removeEventListener("canplay", this._onCanPlay),
      t.removeEventListener("canplaythrough", this._onCanPlay),
      t.removeEventListener("error", this._onError, !0),
      t.pause(),
      (t.src = ""),
      t.load()),
      super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate &&
      ((this._autoUpdate = t), this._configureAutoUpdate());
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    t !== this._updateFPS &&
      ((this._updateFPS = t), this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying()
      ? !this._updateFPS && this.source.requestVideoFrameCallback
        ? (this._isConnectedToTicker &&
            (Bt.shared.remove(this.update, this),
            (this._isConnectedToTicker = !1),
            (this._msToNextUpdate = 0)),
          this._videoFrameRequestCallbackHandle === null &&
            (this._videoFrameRequestCallbackHandle =
              this.source.requestVideoFrameCallback(
                this._videoFrameRequestCallback
              )))
        : (this._videoFrameRequestCallbackHandle !== null &&
            (this.source.cancelVideoFrameCallback(
              this._videoFrameRequestCallbackHandle
            ),
            (this._videoFrameRequestCallbackHandle = null)),
          this._isConnectedToTicker ||
            (Bt.shared.add(this.update, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (this._videoFrameRequestCallbackHandle !== null &&
          (this.source.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (Bt.shared.remove(this.update, this),
          (this._isConnectedToTicker = !1),
          (this._msToNextUpdate = 0)));
  }
  static test(t, e) {
    return (
      (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
      ta.TYPES.includes(e)
    );
  }
};
(Jn.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]),
  (Jn.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4",
  });
let Ul = Jn;
Gn.push(Er, ll, tm, Ul, rm, Qn, ws, em, Jp);
class gs {
  constructor() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.rect = null),
      (this.updateID = -1);
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0);
  }
  getRectangle(t) {
    return this.minX > this.maxX || this.minY > this.maxY
      ? j.EMPTY
      : ((t = t || new j(0, 0, 1, 1)),
        (t.x = this.minX),
        (t.y = this.minY),
        (t.width = this.maxX - this.minX),
        (t.height = this.maxY - this.minY),
        t);
  }
  addPoint(t) {
    (this.minX = Math.min(this.minX, t.x)),
      (this.maxX = Math.max(this.maxX, t.x)),
      (this.minY = Math.min(this.minY, t.y)),
      (this.maxY = Math.max(this.maxY, t.y));
  }
  addPointMatrix(t, e) {
    const { a: r, b: s, c: n, d: a, tx: o, ty: h } = t,
      l = r * e.x + n * e.y + o,
      c = s * e.x + a * e.y + h;
    (this.minX = Math.min(this.minX, l)),
      (this.maxX = Math.max(this.maxX, l)),
      (this.minY = Math.min(this.minY, c)),
      (this.maxY = Math.max(this.maxY, c));
  }
  addQuad(t) {
    let e = this.minX,
      r = this.minY,
      s = this.maxX,
      n = this.maxY,
      a = t[0],
      o = t[1];
    (e = a < e ? a : e),
      (r = o < r ? o : r),
      (s = a > s ? a : s),
      (n = o > n ? o : n),
      (a = t[2]),
      (o = t[3]),
      (e = a < e ? a : e),
      (r = o < r ? o : r),
      (s = a > s ? a : s),
      (n = o > n ? o : n),
      (a = t[4]),
      (o = t[5]),
      (e = a < e ? a : e),
      (r = o < r ? o : r),
      (s = a > s ? a : s),
      (n = o > n ? o : n),
      (a = t[6]),
      (o = t[7]),
      (e = a < e ? a : e),
      (r = o < r ? o : r),
      (s = a > s ? a : s),
      (n = o > n ? o : n),
      (this.minX = e),
      (this.minY = r),
      (this.maxX = s),
      (this.maxY = n);
  }
  addFrame(t, e, r, s, n) {
    this.addFrameMatrix(t.worldTransform, e, r, s, n);
  }
  addFrameMatrix(t, e, r, s, n) {
    const a = t.a,
      o = t.b,
      h = t.c,
      l = t.d,
      c = t.tx,
      u = t.ty;
    let d = this.minX,
      f = this.minY,
      p = this.maxX,
      m = this.maxY,
      g = a * e + h * r + c,
      _ = o * e + l * r + u;
    (d = g < d ? g : d),
      (f = _ < f ? _ : f),
      (p = g > p ? g : p),
      (m = _ > m ? _ : m),
      (g = a * s + h * r + c),
      (_ = o * s + l * r + u),
      (d = g < d ? g : d),
      (f = _ < f ? _ : f),
      (p = g > p ? g : p),
      (m = _ > m ? _ : m),
      (g = a * e + h * n + c),
      (_ = o * e + l * n + u),
      (d = g < d ? g : d),
      (f = _ < f ? _ : f),
      (p = g > p ? g : p),
      (m = _ > m ? _ : m),
      (g = a * s + h * n + c),
      (_ = o * s + l * n + u),
      (d = g < d ? g : d),
      (f = _ < f ? _ : f),
      (p = g > p ? g : p),
      (m = _ > m ? _ : m),
      (this.minX = d),
      (this.minY = f),
      (this.maxX = p),
      (this.maxY = m);
  }
  addVertexData(t, e, r) {
    let s = this.minX,
      n = this.minY,
      a = this.maxX,
      o = this.maxY;
    for (let h = e; h < r; h += 2) {
      const l = t[h],
        c = t[h + 1];
      (s = l < s ? l : s),
        (n = c < n ? c : n),
        (a = l > a ? l : a),
        (o = c > o ? c : o);
    }
    (this.minX = s), (this.minY = n), (this.maxX = a), (this.maxY = o);
  }
  addVertices(t, e, r, s) {
    this.addVerticesMatrix(t.worldTransform, e, r, s);
  }
  addVerticesMatrix(t, e, r, s, n = 0, a = n) {
    const o = t.a,
      h = t.b,
      l = t.c,
      c = t.d,
      u = t.tx,
      d = t.ty;
    let f = this.minX,
      p = this.minY,
      m = this.maxX,
      g = this.maxY;
    for (let _ = r; _ < s; _ += 2) {
      const x = e[_],
        y = e[_ + 1],
        v = o * x + l * y + u,
        T = c * y + h * x + d;
      (f = Math.min(f, v - n)),
        (m = Math.max(m, v + n)),
        (p = Math.min(p, T - a)),
        (g = Math.max(g, T + a));
    }
    (this.minX = f), (this.minY = p), (this.maxX = m), (this.maxY = g);
  }
  addBounds(t) {
    const e = this.minX,
      r = this.minY,
      s = this.maxX,
      n = this.maxY;
    (this.minX = t.minX < e ? t.minX : e),
      (this.minY = t.minY < r ? t.minY : r),
      (this.maxX = t.maxX > s ? t.maxX : s),
      (this.maxY = t.maxY > n ? t.maxY : n);
  }
  addBoundsMask(t, e) {
    const r = t.minX > e.minX ? t.minX : e.minX,
      s = t.minY > e.minY ? t.minY : e.minY,
      n = t.maxX < e.maxX ? t.maxX : e.maxX,
      a = t.maxY < e.maxY ? t.maxY : e.maxY;
    if (r <= n && s <= a) {
      const o = this.minX,
        h = this.minY,
        l = this.maxX,
        c = this.maxY;
      (this.minX = r < o ? r : o),
        (this.minY = s < h ? s : h),
        (this.maxX = n > l ? n : l),
        (this.maxY = a > c ? a : c);
    }
  }
  addBoundsMatrix(t, e) {
    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
  }
  addBoundsArea(t, e) {
    const r = t.minX > e.x ? t.minX : e.x,
      s = t.minY > e.y ? t.minY : e.y,
      n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
      a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
    if (r <= n && s <= a) {
      const o = this.minX,
        h = this.minY,
        l = this.maxX,
        c = this.maxY;
      (this.minX = r < o ? r : o),
        (this.minY = s < h ? s : h),
        (this.maxX = n > l ? n : l),
        (this.maxY = a > c ? a : c);
    }
  }
  pad(t = 0, e = t) {
    this.isEmpty() ||
      ((this.minX -= t), (this.maxX += t), (this.minY -= e), (this.maxY += e));
  }
  addFramePad(t, e, r, s, n, a) {
    (t -= n),
      (e -= a),
      (r += n),
      (s += a),
      (this.minX = this.minX < t ? this.minX : t),
      (this.maxX = this.maxX > r ? this.maxX : r),
      (this.minY = this.minY < e ? this.minY : e),
      (this.maxY = this.maxY > s ? this.maxY : s);
  }
}
class ot extends mi {
  constructor() {
    super(),
      (this.tempDisplayObjectParent = null),
      (this.transform = new Ia()),
      (this.alpha = 1),
      (this.visible = !0),
      (this.renderable = !0),
      (this.cullable = !1),
      (this.cullArea = null),
      (this.parent = null),
      (this.worldAlpha = 1),
      (this._lastSortedIndex = 0),
      (this._zIndex = 0),
      (this.filterArea = null),
      (this.filters = null),
      (this._enabledFilters = null),
      (this._bounds = new gs()),
      (this._localBounds = null),
      (this._boundsID = 0),
      (this._boundsRect = null),
      (this._localBoundsRect = null),
      (this._mask = null),
      (this._maskRefCount = 0),
      (this._destroyed = !1),
      (this.isSprite = !1),
      (this.isMask = !1);
  }
  static mixin(t) {
    const e = Object.keys(t);
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      Object.defineProperty(
        ot.prototype,
        s,
        Object.getOwnPropertyDescriptor(t, s)
      );
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent
      ? (this.parent._recursivePostUpdateTransform(),
        this.transform.updateTransform(this.parent.transform))
      : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
  }
  getBounds(t, e) {
    return (
      t ||
        (this.parent
          ? (this._recursivePostUpdateTransform(), this.updateTransform())
          : ((this.parent = this._tempDisplayObjectParent),
            this.updateTransform(),
            (this.parent = null))),
      this._bounds.updateID !== this._boundsID &&
        (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
      e ||
        (this._boundsRect || (this._boundsRect = new j()),
        (e = this._boundsRect)),
      this._bounds.getRectangle(e)
    );
  }
  getLocalBounds(t) {
    t ||
      (this._localBoundsRect || (this._localBoundsRect = new j()),
      (t = this._localBoundsRect)),
      this._localBounds || (this._localBounds = new gs());
    const e = this.transform,
      r = this.parent;
    (this.parent = null),
      (this._tempDisplayObjectParent.worldAlpha =
        (r == null ? void 0 : r.worldAlpha) ?? 1),
      (this.transform = this._tempDisplayObjectParent.transform);
    const s = this._bounds,
      n = this._boundsID;
    this._bounds = this._localBounds;
    const a = this.getBounds(!1, t);
    return (
      (this.parent = r),
      (this.transform = e),
      (this._bounds = s),
      (this._bounds.updateID += this._boundsID - n),
      a
    );
  }
  toGlobal(t, e, r = !1) {
    return (
      r ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.apply(t, e)
    );
  }
  toLocal(t, e, r, s) {
    return (
      e && (t = e.toGlobal(t, r, s)),
      s ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.applyInverse(t, r)
    );
  }
  setParent(t) {
    if (!t || !t.addChild)
      throw new Error("setParent: Argument must be a Container");
    return t.addChild(this), t;
  }
  removeFromParent() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  setTransform(t = 0, e = 0, r = 1, s = 1, n = 0, a = 0, o = 0, h = 0, l = 0) {
    return (
      (this.position.x = t),
      (this.position.y = e),
      (this.scale.x = r || 1),
      (this.scale.y = s || 1),
      (this.rotation = n),
      (this.skew.x = a),
      (this.skew.y = o),
      (this.pivot.x = h),
      (this.pivot.y = l),
      this
    );
  }
  destroy(t) {
    this.removeFromParent(),
      (this._destroyed = !0),
      (this.transform = null),
      (this.parent = null),
      (this._bounds = null),
      (this.mask = null),
      (this.cullArea = null),
      (this.filters = null),
      (this.filterArea = null),
      (this.hitArea = null),
      (this.eventMode = "auto"),
      (this.interactiveChildren = !1),
      this.emit("destroyed"),
      this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return (
      this.tempDisplayObjectParent === null &&
        (this.tempDisplayObjectParent = new im()),
      this.tempDisplayObjectParent
    );
  }
  enableTempParent() {
    const t = this.parent;
    return (this.parent = this._tempDisplayObjectParent), t;
  }
  disableTempParent(t) {
    this.parent = t;
  }
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  get angle() {
    return this.transform.rotation * qf;
  }
  set angle(t) {
    this.transform.rotation = t * Kf;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    this._zIndex !== t &&
      ((this._zIndex = t), this.parent && (this.parent.sortDirty = !0));
  }
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible) return !1;
      t = t.parent;
    } while (t);
    return !0;
  }
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (e._maskRefCount--,
          e._maskRefCount === 0 && ((e.renderable = !0), (e.isMask = !1)));
      }
      if (((this._mask = t), this._mask)) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (e._maskRefCount === 0 && ((e.renderable = !1), (e.isMask = !0)),
          e._maskRefCount++);
      }
    }
  }
}
class im extends ot {
  constructor() {
    super(...arguments), (this.sortDirty = null);
  }
}
ot.prototype.displayObjectUpdateTransform = ot.prototype.updateTransform;
const sm = new it();
function nm(i, t) {
  return i.zIndex === t.zIndex
    ? i._lastSortedIndex - t._lastSortedIndex
    : i.zIndex - t.zIndex;
}
const kl = class ea extends ot {
  constructor() {
    super(),
      (this.children = []),
      (this.sortableChildren = ea.defaultSortableChildren),
      (this.sortDirty = !1);
  }
  onChildrenChange(t) {}
  addChild(...t) {
    if (t.length > 1) for (let e = 0; e < t.length; e++) this.addChild(t[e]);
    else {
      const e = t[0];
      e.parent && e.parent.removeChild(e),
        (e.parent = this),
        (this.sortDirty = !0),
        (e.transform._parentID = -1),
        this.children.push(e),
        this._boundsID++,
        this.onChildrenChange(this.children.length - 1),
        this.emit("childAdded", e, this, this.children.length - 1),
        e.emit("added", this);
    }
    return t[0];
  }
  addChildAt(t, e) {
    if (e < 0 || e > this.children.length)
      throw new Error(
        `${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`
      );
    return (
      t.parent && t.parent.removeChild(t),
      (t.parent = this),
      (this.sortDirty = !0),
      (t.transform._parentID = -1),
      this.children.splice(e, 0, t),
      this._boundsID++,
      this.onChildrenChange(e),
      t.emit("added", this),
      this.emit("childAdded", t, this, e),
      t
    );
  }
  swapChildren(t, e) {
    if (t === e) return;
    const r = this.getChildIndex(t),
      s = this.getChildIndex(e);
    (this.children[r] = e),
      (this.children[s] = t),
      this.onChildrenChange(r < s ? r : s);
  }
  getChildIndex(t) {
    const e = this.children.indexOf(t);
    if (e === -1)
      throw new Error(
        "The supplied DisplayObject must be a child of the caller"
      );
    return e;
  }
  setChildIndex(t, e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(
        `The index ${e} supplied is out of bounds ${this.children.length}`
      );
    const r = this.getChildIndex(t);
    Pr(this.children, r, 1),
      this.children.splice(e, 0, t),
      this.onChildrenChange(e);
  }
  getChildAt(t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`getChildAt: Index (${t}) does not exist.`);
    return this.children[t];
  }
  removeChild(...t) {
    if (t.length > 1) for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
    else {
      const e = t[0],
        r = this.children.indexOf(e);
      if (r === -1) return null;
      (e.parent = null),
        (e.transform._parentID = -1),
        Pr(this.children, r, 1),
        this._boundsID++,
        this.onChildrenChange(r),
        e.emit("removed", this),
        this.emit("childRemoved", e, this, r);
    }
    return t[0];
  }
  removeChildAt(t) {
    const e = this.getChildAt(t);
    return (
      (e.parent = null),
      (e.transform._parentID = -1),
      Pr(this.children, t, 1),
      this._boundsID++,
      this.onChildrenChange(t),
      e.emit("removed", this),
      this.emit("childRemoved", e, this, t),
      e
    );
  }
  removeChildren(t = 0, e = this.children.length) {
    const r = t,
      s = e,
      n = s - r;
    let a;
    if (n > 0 && n <= s) {
      a = this.children.splice(r, n);
      for (let o = 0; o < a.length; ++o)
        (a[o].parent = null), a[o].transform && (a[o].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(t);
      for (let o = 0; o < a.length; ++o)
        a[o].emit("removed", this), this.emit("childRemoved", a[o], this, o);
      return a;
    } else if (n === 0 && this.children.length === 0) return [];
    throw new RangeError(
      "removeChildren: numeric values are outside the acceptable range."
    );
  }
  sortChildren() {
    let t = !1;
    for (let e = 0, r = this.children.length; e < r; ++e) {
      const s = this.children[e];
      (s._lastSortedIndex = e), !t && s.zIndex !== 0 && (t = !0);
    }
    t && this.children.length > 1 && this.children.sort(nm),
      (this.sortDirty = !1);
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(),
      this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
    for (let t = 0, e = this.children.length; t < e; ++t) {
      const r = this.children[t];
      r.visible && r.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      if (!(!e.visible || !e.renderable))
        if ((e.calculateBounds(), e._mask)) {
          const r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
          r
            ? (r.calculateBounds(),
              this._bounds.addBoundsMask(e._bounds, r._bounds))
            : this._bounds.addBounds(e._bounds);
        } else
          e.filterArea
            ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
            : this._bounds.addBounds(e._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(t, e = !1) {
    const r = super.getLocalBounds(t);
    if (!e)
      for (let s = 0, n = this.children.length; s < n; ++s) {
        const a = this.children[s];
        a.visible && a.updateTransform();
      }
    return r;
  }
  _calculateBounds() {}
  _renderWithCulling(t) {
    const e = t.renderTexture.sourceFrame;
    if (!(e.width > 0 && e.height > 0)) return;
    let r, s;
    this.cullArea
      ? ((r = this.cullArea), (s = this.worldTransform))
      : this._render !== ea.prototype._render && (r = this.getBounds(!0));
    const n = t.projection.transform;
    if (
      (n && (s ? ((s = sm.copyFrom(s)), s.prepend(n)) : (s = n)),
      r && e.intersects(r, s))
    )
      this._render(t);
    else if (this.cullArea) return;
    for (let a = 0, o = this.children.length; a < o; ++a) {
      const h = this.children[a],
        l = h.cullable;
      (h.cullable = l || !this.cullArea), h.render(t), (h.cullable = l);
    }
  }
  render(t) {
    var e;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
      if (this._mask || ((e = this.filters) != null && e.length))
        this.renderAdvanced(t);
      else if (this.cullable) this._renderWithCulling(t);
      else {
        this._render(t);
        for (let r = 0, s = this.children.length; r < s; ++r)
          this.children[r].render(t);
      }
  }
  renderAdvanced(t) {
    var n, a, o;
    const e = this.filters,
      r = this._mask;
    if (e) {
      this._enabledFilters || (this._enabledFilters = []),
        (this._enabledFilters.length = 0);
      for (let h = 0; h < e.length; h++)
        e[h].enabled && this._enabledFilters.push(e[h]);
    }
    const s =
      (e && ((n = this._enabledFilters) == null ? void 0 : n.length)) ||
      (r &&
        (!r.isMaskData || (r.enabled && (r.autoDetect || r.type !== pt.NONE))));
    if (
      (s && t.batch.flush(),
      e &&
        (a = this._enabledFilters) != null &&
        a.length &&
        t.filter.push(this, this._enabledFilters),
      r && t.mask.push(this, this._mask),
      this.cullable)
    )
      this._renderWithCulling(t);
    else {
      this._render(t);
      for (let h = 0, l = this.children.length; h < l; ++h)
        this.children[h].render(t);
    }
    s && t.batch.flush(),
      r && t.mask.pop(this),
      e && (o = this._enabledFilters) != null && o.length && t.filter.pop();
  }
  _render(t) {}
  destroy(t) {
    super.destroy(), (this.sortDirty = !1);
    const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children,
      r = this.removeChildren(0, this.children.length);
    if (e) for (let s = 0; s < r.length; ++s) r[s].destroy(t);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    e !== 0 ? (this.scale.x = t / e) : (this.scale.x = 1), (this._width = t);
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    e !== 0 ? (this.scale.y = t / e) : (this.scale.y = 1), (this._height = t);
  }
};
kl.defaultSortableChildren = !1;
let Ut = kl;
Ut.prototype.containerUpdateTransform = Ut.prototype.updateTransform;
Object.defineProperties(F, {
  SORTABLE_CHILDREN: {
    get() {
      return Ut.defaultSortableChildren;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"
      ),
        (Ut.defaultSortableChildren = i);
    },
  },
});
const qr = new Q(),
  am = new Uint16Array([0, 1, 2, 0, 2, 3]);
class de extends Ut {
  constructor(t) {
    super(),
      (this._anchor = new _e(
        this._onAnchorUpdate,
        this,
        t ? t.defaultAnchor.x : 0,
        t ? t.defaultAnchor.y : 0
      )),
      (this._texture = null),
      (this._width = 0),
      (this._height = 0),
      (this._tintColor = new rt(16777215)),
      (this._tintRGB = null),
      (this.tint = 16777215),
      (this.blendMode = X.NORMAL),
      (this._cachedTint = 16777215),
      (this.uvs = null),
      (this.texture = t || O.EMPTY),
      (this.vertexData = new Float32Array(8)),
      (this.vertexTrimmedData = null),
      (this._transformID = -1),
      (this._textureID = -1),
      (this._transformTrimmedID = -1),
      (this._textureTrimmedID = -1),
      (this.indices = am),
      (this.pluginName = "batch"),
      (this.isSprite = !0),
      (this._roundPixels = F.ROUND_PIXELS);
  }
  _onTextureUpdate() {
    (this._textureID = -1),
      (this._textureTrimmedID = -1),
      (this._cachedTint = 16777215),
      this._width &&
        (this.scale.x =
          (De(this.scale.x) * this._width) / this._texture.orig.width),
      this._height &&
        (this.scale.y =
          (De(this.scale.y) * this._height) / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    (this._transformID = -1), (this._transformTrimmedID = -1);
  }
  calculateVertices() {
    const t = this._texture;
    if (
      this._transformID === this.transform._worldID &&
      this._textureID === t._updateID
    )
      return;
    this._textureID !== t._updateID &&
      (this.uvs = this._texture._uvs.uvsFloat32),
      (this._transformID = this.transform._worldID),
      (this._textureID = t._updateID);
    const e = this.transform.worldTransform,
      r = e.a,
      s = e.b,
      n = e.c,
      a = e.d,
      o = e.tx,
      h = e.ty,
      l = this.vertexData,
      c = t.trim,
      u = t.orig,
      d = this._anchor;
    let f = 0,
      p = 0,
      m = 0,
      g = 0;
    if (
      (c
        ? ((p = c.x - d._x * u.width),
          (f = p + c.width),
          (g = c.y - d._y * u.height),
          (m = g + c.height))
        : ((p = -d._x * u.width),
          (f = p + u.width),
          (g = -d._y * u.height),
          (m = g + u.height)),
      (l[0] = r * p + n * g + o),
      (l[1] = a * g + s * p + h),
      (l[2] = r * f + n * g + o),
      (l[3] = a * g + s * f + h),
      (l[4] = r * f + n * m + o),
      (l[5] = a * m + s * f + h),
      (l[6] = r * p + n * m + o),
      (l[7] = a * m + s * p + h),
      this._roundPixels)
    ) {
      const _ = F.RESOLUTION;
      for (let x = 0; x < l.length; ++x) l[x] = Math.round(l[x] * _) / _;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
    else if (
      this._transformTrimmedID === this.transform._worldID &&
      this._textureTrimmedID === this._texture._updateID
    )
      return;
    (this._transformTrimmedID = this.transform._worldID),
      (this._textureTrimmedID = this._texture._updateID);
    const t = this._texture,
      e = this.vertexTrimmedData,
      r = t.orig,
      s = this._anchor,
      n = this.transform.worldTransform,
      a = n.a,
      o = n.b,
      h = n.c,
      l = n.d,
      c = n.tx,
      u = n.ty,
      d = -s._x * r.width,
      f = d + r.width,
      p = -s._y * r.height,
      m = p + r.height;
    if (
      ((e[0] = a * d + h * p + c),
      (e[1] = l * p + o * d + u),
      (e[2] = a * f + h * p + c),
      (e[3] = l * p + o * f + u),
      (e[4] = a * f + h * m + c),
      (e[5] = l * m + o * f + u),
      (e[6] = a * d + h * m + c),
      (e[7] = l * m + o * d + u),
      this._roundPixels)
    ) {
      const g = F.RESOLUTION;
      for (let _ = 0; _ < e.length; ++_) e[_] = Math.round(e[_] * g) / g;
    }
  }
  _render(t) {
    this.calculateVertices(),
      t.batch.setObjectRenderer(t.plugins[this.pluginName]),
      t.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const t = this._texture.trim,
      e = this._texture.orig;
    !t || (t.width === e.width && t.height === e.height)
      ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
      : (this.calculateTrimmedVertices(),
        this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(t) {
    return this.children.length === 0
      ? (this._localBounds || (this._localBounds = new gs()),
        (this._localBounds.minX = this._texture.orig.width * -this._anchor._x),
        (this._localBounds.minY = this._texture.orig.height * -this._anchor._y),
        (this._localBounds.maxX =
          this._texture.orig.width * (1 - this._anchor._x)),
        (this._localBounds.maxY =
          this._texture.orig.height * (1 - this._anchor._y)),
        t ||
          (this._localBoundsRect || (this._localBoundsRect = new j()),
          (t = this._localBoundsRect)),
        this._localBounds.getRectangle(t))
      : super.getLocalBounds.call(this, t);
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, qr);
    const e = this._texture.orig.width,
      r = this._texture.orig.height,
      s = -e * this.anchor.x;
    let n = 0;
    return (
      qr.x >= s &&
      qr.x < s + e &&
      ((n = -r * this.anchor.y), qr.y >= n && qr.y < n + r)
    );
  }
  destroy(t) {
    if (
      (super.destroy(t),
      this._texture.off("update", this._onTextureUpdate, this),
      (this._anchor = null),
      typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
    ) {
      const e = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
      this._texture.destroy(!!e);
    }
    this._texture = null;
  }
  static from(t, e) {
    const r = t instanceof O ? t : O.from(t, e);
    return new de(r);
  }
  set roundPixels(t) {
    this._roundPixels !== t &&
      ((this._transformID = -1), (this._transformTrimmedID = -1)),
      (this._roundPixels = t);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const e = De(this.scale.x) || 1;
    (this.scale.x = (e * t) / this._texture.orig.width), (this._width = t);
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const e = De(this.scale.y) || 1;
    (this.scale.y = (e * t) / this._texture.orig.height), (this._height = t);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t),
      (this._tintRGB = this._tintColor.toLittleEndianNumber());
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t &&
      (this._texture &&
        this._texture.off("update", this._onTextureUpdate, this),
      (this._texture = t || O.EMPTY),
      (this._cachedTint = 16777215),
      (this._textureID = -1),
      (this._textureTrimmedID = -1),
      t &&
        (t.baseTexture.valid
          ? this._onTextureUpdate()
          : t.once("update", this._onTextureUpdate, this)));
  }
}
const Gl = new it();
ot.prototype._cacheAsBitmap = !1;
ot.prototype._cacheData = null;
ot.prototype._cacheAsBitmapResolution = null;
ot.prototype._cacheAsBitmapMultisample = null;
class om {
  constructor() {
    (this.textureCacheId = null),
      (this.originalRender = null),
      (this.originalRenderCanvas = null),
      (this.originalCalculateBounds = null),
      (this.originalGetLocalBounds = null),
      (this.originalUpdateTransform = null),
      (this.originalDestroy = null),
      (this.originalMask = null),
      (this.originalFilterArea = null),
      (this.originalContainsPoint = null),
      (this.sprite = null);
  }
}
Object.defineProperties(ot.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(i) {
      i !== this._cacheAsBitmapResolution &&
        ((this._cacheAsBitmapResolution = i),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(i) {
      i !== this._cacheAsBitmapMultisample &&
        ((this._cacheAsBitmapMultisample = i),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(i) {
      if (this._cacheAsBitmap === i) return;
      this._cacheAsBitmap = i;
      let t;
      i
        ? (this._cacheData || (this._cacheData = new om()),
          (t = this._cacheData),
          (t.originalRender = this.render),
          (t.originalRenderCanvas = this.renderCanvas),
          (t.originalUpdateTransform = this.updateTransform),
          (t.originalCalculateBounds = this.calculateBounds),
          (t.originalGetLocalBounds = this.getLocalBounds),
          (t.originalDestroy = this.destroy),
          (t.originalContainsPoint = this.containsPoint),
          (t.originalMask = this._mask),
          (t.originalFilterArea = this.filterArea),
          (this.render = this._renderCached),
          (this.renderCanvas = this._renderCachedCanvas),
          (this.destroy = this._cacheAsBitmapDestroy))
        : ((t = this._cacheData),
          t.sprite && this._destroyCachedDisplayObject(),
          (this.render = t.originalRender),
          (this.renderCanvas = t.originalRenderCanvas),
          (this.calculateBounds = t.originalCalculateBounds),
          (this.getLocalBounds = t.originalGetLocalBounds),
          (this.destroy = t.originalDestroy),
          (this.updateTransform = t.originalUpdateTransform),
          (this.containsPoint = t.originalContainsPoint),
          (this._mask = t.originalMask),
          (this.filterArea = t.originalFilterArea));
    },
  },
});
ot.prototype._renderCached = function (i) {
  !this.visible ||
    this.worldAlpha <= 0 ||
    !this.renderable ||
    (this._initCachedDisplayObject(i),
    (this._cacheData.sprite.transform._worldID = this.transform._worldID),
    (this._cacheData.sprite.worldAlpha = this.worldAlpha),
    this._cacheData.sprite._render(i));
};
ot.prototype._initCachedDisplayObject = function (i) {
  var d, f;
  if ((d = this._cacheData) != null && d.sprite) return;
  const t = this.alpha;
  (this.alpha = 1), i.batch.flush();
  const e = this.getLocalBounds(new j(), !0);
  if ((f = this.filters) != null && f.length) {
    const p = this.filters[0].padding;
    e.pad(p);
  }
  const r = this.cacheAsBitmapResolution || i.resolution;
  e.ceil(r),
    (e.width = Math.max(e.width, 1 / r)),
    (e.height = Math.max(e.height, 1 / r));
  const s = i.renderTexture.current,
    n = i.renderTexture.sourceFrame.clone(),
    a = i.renderTexture.destinationFrame.clone(),
    o = i.projection.transform,
    h = or.create({
      width: e.width,
      height: e.height,
      resolution: r,
      multisample: this.cacheAsBitmapMultisample ?? i.multisample,
    }),
    l = `cacheAsBitmap_${ir()}`;
  (this._cacheData.textureCacheId = l),
    W.addToCache(h.baseTexture, l),
    O.addToCache(h, l);
  const c = this.transform.localTransform
    .copyTo(Gl)
    .invert()
    .translate(-e.x, -e.y);
  (this.render = this._cacheData.originalRender),
    i.render(this, {
      renderTexture: h,
      clear: !0,
      transform: c,
      skipUpdateTransform: !1,
    }),
    i.framebuffer.blit(),
    (i.projection.transform = o),
    i.renderTexture.bind(s, n, a),
    (this.render = this._renderCached),
    (this.updateTransform = this.displayObjectUpdateTransform),
    (this.calculateBounds = this._calculateCachedBounds),
    (this.getLocalBounds = this._getCachedLocalBounds),
    (this._mask = null),
    (this.filterArea = null),
    (this.alpha = t);
  const u = new de(h);
  (u.transform.worldTransform = this.transform.worldTransform),
    (u.anchor.x = -(e.x / e.width)),
    (u.anchor.y = -(e.y / e.height)),
    (u.alpha = t),
    (u._bounds = this._bounds),
    (this._cacheData.sprite = u),
    (this.transform._parentID = -1),
    this.parent
      ? this.updateTransform()
      : (this.enableTempParent(),
        this.updateTransform(),
        this.disableTempParent(null)),
    (this.containsPoint = u.containsPoint.bind(u));
};
ot.prototype._renderCachedCanvas = function (i) {
  !this.visible ||
    this.worldAlpha <= 0 ||
    !this.renderable ||
    (this._initCachedDisplayObjectCanvas(i),
    (this._cacheData.sprite.worldAlpha = this.worldAlpha),
    this._cacheData.sprite._renderCanvas(i));
};
ot.prototype._initCachedDisplayObjectCanvas = function (i) {
  var c;
  if ((c = this._cacheData) != null && c.sprite) return;
  const t = this.getLocalBounds(new j(), !0),
    e = this.alpha;
  this.alpha = 1;
  const r = i.canvasContext.activeContext,
    s = i._projTransform,
    n = this.cacheAsBitmapResolution || i.resolution;
  t.ceil(n),
    (t.width = Math.max(t.width, 1 / n)),
    (t.height = Math.max(t.height, 1 / n));
  const a = or.create({ width: t.width, height: t.height, resolution: n }),
    o = `cacheAsBitmap_${ir()}`;
  (this._cacheData.textureCacheId = o),
    W.addToCache(a.baseTexture, o),
    O.addToCache(a, o);
  const h = Gl;
  this.transform.localTransform.copyTo(h),
    h.invert(),
    (h.tx -= t.x),
    (h.ty -= t.y),
    (this.renderCanvas = this._cacheData.originalRenderCanvas),
    i.render(this, {
      renderTexture: a,
      clear: !0,
      transform: h,
      skipUpdateTransform: !1,
    }),
    (i.canvasContext.activeContext = r),
    (i._projTransform = s),
    (this.renderCanvas = this._renderCachedCanvas),
    (this.updateTransform = this.displayObjectUpdateTransform),
    (this.calculateBounds = this._calculateCachedBounds),
    (this.getLocalBounds = this._getCachedLocalBounds),
    (this._mask = null),
    (this.filterArea = null),
    (this.alpha = e);
  const l = new de(a);
  (l.transform.worldTransform = this.transform.worldTransform),
    (l.anchor.x = -(t.x / t.width)),
    (l.anchor.y = -(t.y / t.height)),
    (l.alpha = e),
    (l._bounds = this._bounds),
    (this._cacheData.sprite = l),
    (this.transform._parentID = -1),
    this.parent
      ? this.updateTransform()
      : ((this.parent = i._tempDisplayObjectParent),
        this.updateTransform(),
        (this.parent = null)),
    (this.containsPoint = l.containsPoint.bind(l));
};
ot.prototype._calculateCachedBounds = function () {
  this._bounds.clear(),
    (this._cacheData.sprite.transform._worldID = this.transform._worldID),
    this._cacheData.sprite._calculateBounds(),
    (this._bounds.updateID = this._boundsID);
};
ot.prototype._getCachedLocalBounds = function () {
  return this._cacheData.sprite.getLocalBounds(null);
};
ot.prototype._destroyCachedDisplayObject = function () {
  this._cacheData.sprite._texture.destroy(!0),
    (this._cacheData.sprite = null),
    W.removeFromCache(this._cacheData.textureCacheId),
    O.removeFromCache(this._cacheData.textureCacheId),
    (this._cacheData.textureCacheId = null);
};
ot.prototype._cacheAsBitmapDestroy = function (i) {
  (this.cacheAsBitmap = !1), this.destroy(i);
};
ot.prototype.name = null;
Ut.prototype.getChildByName = function (i, t) {
  for (let e = 0, r = this.children.length; e < r; e++)
    if (this.children[e].name === i) return this.children[e];
  if (t)
    for (let e = 0, r = this.children.length; e < r; e++) {
      const s = this.children[e];
      if (!s.getChildByName) continue;
      const n = s.getChildByName(i, !0);
      if (n) return n;
    }
  return null;
};
ot.prototype.getGlobalPosition = function (i = new Q(), t = !1) {
  return (
    this.parent
      ? this.parent.toGlobal(this.position, i, t)
      : ((i.x = this.position.x), (i.y = this.position.y)),
    i
  );
};
var hm = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class lm extends It {
  constructor(t = 1) {
    super(Zp, hm, { uAlpha: 1 }), (this.alpha = t);
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const cm = {
    5: [0.153388, 0.221461, 0.250301],
    7: [0.071303, 0.131514, 0.189879, 0.214607],
    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
    11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
    15: [
      489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
      0.197448,
    ],
  },
  um = [
    "varying vec2 vBlurTexCoords[%size%];",
    "uniform sampler2D uSampler;",
    "void main(void)",
    "{",
    "    gl_FragColor = vec4(0.0);",
    "    %blur%",
    "}",
  ].join(`
`);
function dm(i) {
  const t = cm[i],
    e = t.length;
  let r = um,
    s = "";
  const n =
    "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < i; o++) {
    let h = n.replace("%index%", o.toString());
    (a = o),
      o >= e && (a = i - o - 1),
      (h = h.replace("%value%", t[a].toString())),
      (s += h),
      (s += `
`);
  }
  return (
    (r = r.replace("%blur%", s)), (r = r.replace("%size%", i.toString())), r
  );
}
const fm = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function pm(i, t) {
  const e = Math.ceil(i / 2);
  let r = fm,
    s = "",
    n;
  t
    ? (n =
        "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);")
    : (n =
        "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);");
  for (let a = 0; a < i; a++) {
    let o = n.replace("%index%", a.toString());
    (o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`)),
      (s += o),
      (s += `
`);
  }
  return (
    (r = r.replace("%blur%", s)), (r = r.replace("%size%", i.toString())), r
  );
}
class ra extends It {
  constructor(t, e = 8, r = 4, s = It.defaultResolution, n = 5) {
    const a = pm(n, t),
      o = dm(n);
    super(a, o),
      (this.horizontal = t),
      (this.resolution = s),
      (this._quality = 0),
      (this.quality = r),
      (this.blur = e);
  }
  apply(t, e, r, s) {
    if (
      (r
        ? this.horizontal
          ? (this.uniforms.strength = (1 / r.width) * (r.width / e.width))
          : (this.uniforms.strength = (1 / r.height) * (r.height / e.height))
        : this.horizontal
        ? (this.uniforms.strength =
            (1 / t.renderer.width) * (t.renderer.width / e.width))
        : (this.uniforms.strength =
            (1 / t.renderer.height) * (t.renderer.height / e.height)),
      (this.uniforms.strength *= this.strength),
      (this.uniforms.strength /= this.passes),
      this.passes === 1)
    )
      t.applyFilter(this, e, r, s);
    else {
      const n = t.getFilterTexture(),
        a = t.renderer;
      let o = e,
        h = n;
      (this.state.blend = !1), t.applyFilter(this, o, h, se.CLEAR);
      for (let l = 1; l < this.passes - 1; l++) {
        t.bindAndClear(o, se.BLIT), (this.uniforms.uSampler = h);
        const c = h;
        (h = o), (o = c), a.shader.bind(this), a.geometry.draw(5);
      }
      (this.state.blend = !0),
        t.applyFilter(this, h, r, s),
        t.returnFilterTexture(n);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(t) {
    (this.padding = 1 + Math.abs(t) * 2), (this.strength = t);
  }
  get quality() {
    return this._quality;
  }
  set quality(t) {
    (this._quality = t), (this.passes = t);
  }
}
class mm extends It {
  constructor(t = 8, e = 4, r = It.defaultResolution, s = 5) {
    super(),
      (this._repeatEdgePixels = !1),
      (this.blurXFilter = new ra(!0, t, e, r, s)),
      (this.blurYFilter = new ra(!1, t, e, r, s)),
      (this.resolution = r),
      (this.quality = e),
      (this.blur = t),
      (this.repeatEdgePixels = !1);
  }
  apply(t, e, r, s) {
    const n = Math.abs(this.blurXFilter.strength),
      a = Math.abs(this.blurYFilter.strength);
    if (n && a) {
      const o = t.getFilterTexture();
      this.blurXFilter.apply(t, e, o, se.CLEAR),
        this.blurYFilter.apply(t, o, r, s),
        t.returnFilterTexture(o);
    } else
      a
        ? this.blurYFilter.apply(t, e, r, s)
        : this.blurXFilter.apply(t, e, r, s);
  }
  updatePadding() {
    this._repeatEdgePixels
      ? (this.padding = 0)
      : (this.padding =
          Math.max(
            Math.abs(this.blurXFilter.strength),
            Math.abs(this.blurYFilter.strength)
          ) * 2);
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    (this.blurXFilter.blur = this.blurYFilter.blur = t), this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    (this.blurXFilter.blur = t), this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    (this.blurYFilter.blur = t), this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    (this._repeatEdgePixels = t), this.updatePadding();
  }
}
var gm = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class ia extends It {
  constructor() {
    const t = {
      m: new Float32Array([
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
      ]),
      uAlpha: 1,
    };
    super(Bl, gm, t), (this.alpha = 1);
  }
  _loadMatrix(t, e = !1) {
    let r = t;
    e && (this._multiply(r, this.uniforms.m, t), (r = this._colorMatrix(r))),
      (this.uniforms.m = r);
  }
  _multiply(t, e, r) {
    return (
      (t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15]),
      (t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16]),
      (t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17]),
      (t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18]),
      (t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4]),
      (t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15]),
      (t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16]),
      (t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17]),
      (t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18]),
      (t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9]),
      (t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15]),
      (t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16]),
      (t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17]),
      (t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18]),
      (t[14] =
        e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14]),
      (t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15]),
      (t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16]),
      (t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17]),
      (t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18]),
      (t[19] =
        e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19]),
      t
    );
  }
  _colorMatrix(t) {
    const e = new Float32Array(t);
    return (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e;
  }
  brightness(t, e) {
    const r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  tint(t, e) {
    const [r, s, n] = rt.shared.setValue(t).toArray(),
      a = [r, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(a, e);
  }
  greyscale(t, e) {
    const r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  blackAndWhite(t) {
    const e = [
      0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  hue(t, e) {
    t = ((t || 0) / 180) * Math.PI;
    const r = Math.cos(t),
      s = Math.sin(t),
      n = Math.sqrt,
      a = 1 / 3,
      o = n(a),
      h = r + (1 - r) * a,
      l = a * (1 - r) - o * s,
      c = a * (1 - r) + o * s,
      u = a * (1 - r) + o * s,
      d = r + a * (1 - r),
      f = a * (1 - r) - o * s,
      p = a * (1 - r) - o * s,
      m = a * (1 - r) + o * s,
      g = r + a * (1 - r),
      _ = [h, l, c, 0, 0, u, d, f, 0, 0, p, m, g, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(_, e);
  }
  contrast(t, e) {
    const r = (t || 0) + 1,
      s = -0.5 * (r - 1),
      n = [r, 0, 0, 0, s, 0, r, 0, 0, s, 0, 0, r, 0, s, 0, 0, 0, 1, 0];
    this._loadMatrix(n, e);
  }
  saturate(t = 0, e) {
    const r = (t * 2) / 3 + 1,
      s = (r - 1) * -0.5,
      n = [r, s, s, 0, 0, s, r, s, 0, 0, s, s, r, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, e);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(t) {
    const e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  sepia(t) {
    const e = [
      0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0,
      0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(e, t);
  }
  technicolor(t) {
    const e = [
      1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
      11.793603434377337, -0.3087833385928097, 1.7658908555458428,
      -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
      -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  polaroid(t) {
    const e = [
      1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016,
      1.483, 0, 0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(e, t);
  }
  toBGR(t) {
    const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  kodachrome(t) {
    const e = [
      1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
      63.72958762196502, -0.16404339962244616, 1.0835251566291304,
      -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
      -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  browni(t) {
    const e = [
      0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
      47.43192855600873, -0.037703249837783157, 0.8609577587992641,
      0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
      -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0,
      1, 0,
    ];
    this._loadMatrix(e, t);
  }
  vintage(t) {
    const e = [
      0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
      9.651285835294123, 0.02578397704808868, 0.6441188644374771,
      0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
      -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  colorTone(t, e, r, s, n) {
    (t = t || 0.2), (e = e || 0.15), (r = r || 16770432), (s = s || 3375104);
    const a = rt.shared,
      [o, h, l] = a.setValue(r).toArray(),
      [c, u, d] = a.setValue(s).toArray(),
      f = [
        0.3,
        0.59,
        0.11,
        0,
        0,
        o,
        h,
        l,
        t,
        0,
        c,
        u,
        d,
        e,
        0,
        o - c,
        h - u,
        l - d,
        0,
        0,
      ];
    this._loadMatrix(f, n);
  }
  night(t, e) {
    t = t || 0.1;
    const r = [
      t * -2,
      -t,
      0,
      0,
      0,
      -t,
      0,
      t,
      0,
      0,
      0,
      t,
      t * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(r, e);
  }
  predator(t, e) {
    const r = [
      11.224130630493164 * t,
      -4.794486999511719 * t,
      -2.8746118545532227 * t,
      0 * t,
      0.40342438220977783 * t,
      -3.6330697536468506 * t,
      9.193157196044922 * t,
      -2.951810836791992 * t,
      0 * t,
      -1.316135048866272 * t,
      -3.2184197902679443 * t,
      -4.2375030517578125 * t,
      7.476448059082031 * t,
      0 * t,
      0.8044459223747253 * t,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(r, e);
  }
  lsd(t) {
    const e = [
      2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1,
      0,
    ];
    this._loadMatrix(e, t);
  }
  reset() {
    const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, !1);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
ia.prototype.grayscale = ia.prototype.greyscale;
var ym = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
  _m = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class vm extends It {
  constructor(t, e) {
    const r = new it();
    (t.renderable = !1),
      super(_m, ym, {
        mapSampler: t._texture,
        filterMatrix: r,
        scale: { x: 1, y: 1 },
        rotation: new Float32Array([1, 0, 0, 1]),
      }),
      (this.maskSprite = t),
      (this.maskMatrix = r),
      e == null && (e = 20),
      (this.scale = new Q(e, e));
  }
  apply(t, e, r, s) {
    (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
      this.maskMatrix,
      this.maskSprite
    )),
      (this.uniforms.scale.x = this.scale.x),
      (this.uniforms.scale.y = this.scale.y);
    const n = this.maskSprite.worldTransform,
      a = Math.sqrt(n.a * n.a + n.b * n.b),
      o = Math.sqrt(n.c * n.c + n.d * n.d);
    a !== 0 &&
      o !== 0 &&
      ((this.uniforms.rotation[0] = n.a / a),
      (this.uniforms.rotation[1] = n.b / a),
      (this.uniforms.rotation[2] = n.c / o),
      (this.uniforms.rotation[3] = n.d / o)),
      t.applyFilter(this, e, r, s);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var xm = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
  bm = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class Tm extends It {
  constructor() {
    super(bm, xm);
  }
}
var Em = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class Am extends It {
  constructor(t = 0.5, e = Math.random()) {
    super(Bl, Em, { uNoise: 0, uSeed: 0 }), (this.noise = t), (this.seed = e);
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
const Zo = {
  AlphaFilter: lm,
  BlurFilter: mm,
  BlurFilterPass: ra,
  ColorMatrixFilter: ia,
  DisplacementFilter: vm,
  FXAAFilter: Tm,
  NoiseFilter: Am,
};
Object.entries(Zo).forEach(([i, t]) => {
  Object.defineProperty(Zo, i, {
    get() {
      return q("7.1.0", `filters.${i} has moved to ${i}`), t;
    },
  });
});
class wm {
  constructor() {
    (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  init(t) {
    this.removeTickerListener(),
      (this.events = t),
      (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(t) {
    this._pauseUpdate = t;
  }
  addTickerListener() {
    this.tickerAdded ||
      !this.domElement ||
      (Bt.system.add(this.tickerUpdate, this, sr.INTERACTION),
      (this.tickerAdded = !0));
  }
  removeTickerListener() {
    this.tickerAdded &&
      (Bt.system.remove(this.tickerUpdate, this), (this.tickerAdded = !1));
  }
  pointerMoved() {
    this._didMove = !0;
  }
  update() {
    if (!this.domElement || this._pauseUpdate) return;
    if (this._didMove) {
      this._didMove = !1;
      return;
    }
    const t = this.events.rootPointerEvent;
    (this.events.supportsTouchEvents && t.pointerType === "touch") ||
      globalThis.document.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX: t.clientX,
          clientY: t.clientY,
        })
      );
  }
  tickerUpdate(t) {
    (this._deltaTime += t),
      !(this._deltaTime < this.interactionFrequency) &&
        ((this._deltaTime = 0), this.update());
  }
}
const Re = new wm();
class _i {
  constructor(t) {
    (this.bubbles = !0),
      (this.cancelBubble = !0),
      (this.cancelable = !1),
      (this.composed = !1),
      (this.defaultPrevented = !1),
      (this.eventPhase = _i.prototype.NONE),
      (this.propagationStopped = !1),
      (this.propagationImmediatelyStopped = !1),
      (this.layer = new Q()),
      (this.page = new Q()),
      (this.NONE = 0),
      (this.CAPTURING_PHASE = 1),
      (this.AT_TARGET = 2),
      (this.BUBBLING_PHASE = 3),
      (this.manager = t);
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return (
      this.manager &&
        (!this.path || this.path[this.path.length - 1] !== this.target) &&
        (this.path = this.target
          ? this.manager.propagationPath(this.target)
          : []),
      this.path
    );
  }
  initEvent(t, e, r) {
    throw new Error(
      "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  initUIEvent(t, e, r, s, n) {
    throw new Error(
      "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  preventDefault() {
    this.nativeEvent instanceof Event &&
      this.nativeEvent.cancelable &&
      this.nativeEvent.preventDefault(),
      (this.defaultPrevented = !0);
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class ys extends _i {
  constructor() {
    super(...arguments),
      (this.client = new Q()),
      (this.movement = new Q()),
      (this.offset = new Q()),
      (this.global = new Q()),
      (this.screen = new Q());
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(t, e, r) {
    return t.worldTransform.applyInverse(r || this.global, e);
  }
  getModifierState(t) {
    return (
      "getModifierState" in this.nativeEvent &&
      this.nativeEvent.getModifierState(t)
    );
  }
  initMouseEvent(t, e, r, s, n, a, o, h, l, c, u, d, f, p, m) {
    throw new Error("Method not implemented.");
  }
}
class Vt extends ys {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.height = 0),
      (this.isPrimary = !1);
  }
  getCoalescedEvents() {
    return this.type === "pointermove" ||
      this.type === "mousemove" ||
      this.type === "touchmove"
      ? [this]
      : [];
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class Br extends ys {
  constructor() {
    super(...arguments),
      (this.DOM_DELTA_PIXEL = 0),
      (this.DOM_DELTA_LINE = 1),
      (this.DOM_DELTA_PAGE = 2);
  }
}
(Br.DOM_DELTA_PIXEL = 0), (Br.DOM_DELTA_LINE = 1), (Br.DOM_DELTA_PAGE = 2);
const Sm = 2048,
  Cm = new Q(),
  cn = new Q();
class Im {
  constructor(t) {
    (this.dispatch = new mi()),
      (this.moveOnAll = !1),
      (this.enableGlobalMoveEvents = !0),
      (this.mappingState = { trackingData: {} }),
      (this.eventPool = new Map()),
      (this._allInteractiveElements = []),
      (this._hitElements = []),
      (this._isPointerMoveEvent = !1),
      (this.rootTarget = t),
      (this.hitPruneFn = this.hitPruneFn.bind(this)),
      (this.hitTestFn = this.hitTestFn.bind(this)),
      (this.mapPointerDown = this.mapPointerDown.bind(this)),
      (this.mapPointerMove = this.mapPointerMove.bind(this)),
      (this.mapPointerOut = this.mapPointerOut.bind(this)),
      (this.mapPointerOver = this.mapPointerOver.bind(this)),
      (this.mapPointerUp = this.mapPointerUp.bind(this)),
      (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
      (this.mapWheel = this.mapWheel.bind(this)),
      (this.mappingTable = {}),
      this.addEventMapping("pointerdown", this.mapPointerDown),
      this.addEventMapping("pointermove", this.mapPointerMove),
      this.addEventMapping("pointerout", this.mapPointerOut),
      this.addEventMapping("pointerleave", this.mapPointerOut),
      this.addEventMapping("pointerover", this.mapPointerOver),
      this.addEventMapping("pointerup", this.mapPointerUp),
      this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
      this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(t, e) {
    this.mappingTable[t] || (this.mappingTable[t] = []),
      this.mappingTable[t].push({ fn: e, priority: 0 }),
      this.mappingTable[t].sort((r, s) => r.priority - s.priority);
  }
  dispatchEvent(t, e) {
    (t.propagationStopped = !1),
      (t.propagationImmediatelyStopped = !1),
      this.propagate(t, e),
      this.dispatch.emit(e || t.type, t);
  }
  mapEvent(t) {
    if (!this.rootTarget) return;
    const e = this.mappingTable[t.type];
    if (e) for (let r = 0, s = e.length; r < s; r++) e[r].fn(t);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
  }
  hitTest(t, e) {
    Re.pauseUpdate = !0;
    const r =
        this._isPointerMoveEvent && this.enableGlobalMoveEvents
          ? "hitTestMoveRecursive"
          : "hitTestRecursive",
      s = this[r](
        this.rootTarget,
        this.rootTarget.eventMode,
        Cm.set(t, e),
        this.hitTestFn,
        this.hitPruneFn
      );
    return s && s[0];
  }
  propagate(t, e) {
    if (!t.target) return;
    const r = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let s = 0, n = r.length - 1; s < n; s++)
      if (
        ((t.currentTarget = r[s]),
        this.notifyTarget(t, e),
        t.propagationStopped || t.propagationImmediatelyStopped)
      )
        return;
    if (
      ((t.eventPhase = t.AT_TARGET),
      (t.currentTarget = t.target),
      this.notifyTarget(t, e),
      !(t.propagationStopped || t.propagationImmediatelyStopped))
    ) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let s = r.length - 2; s >= 0; s--)
        if (
          ((t.currentTarget = r[s]),
          this.notifyTarget(t, e),
          t.propagationStopped || t.propagationImmediatelyStopped)
        )
          return;
    }
  }
  all(t, e, r = this._allInteractiveElements) {
    if (r.length === 0) return;
    t.eventPhase = t.BUBBLING_PHASE;
    const s = Array.isArray(e) ? e : [e];
    for (let n = r.length - 1; n >= 0; n--)
      s.forEach((a) => {
        (t.currentTarget = r[n]), this.notifyTarget(t, a);
      });
  }
  propagationPath(t) {
    const e = [t];
    for (let r = 0; r < Sm && t !== this.rootTarget; r++) {
      if (!t.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      e.push(t.parent), (t = t.parent);
    }
    return e.reverse(), e;
  }
  hitTestMoveRecursive(t, e, r, s, n, a = !1) {
    let o = !1;
    if (this._interactivePrune(t)) return null;
    if (
      ((t.eventMode === "dynamic" || e === "dynamic") && (Re.pauseUpdate = !1),
      t.interactiveChildren && t.children)
    ) {
      const c = t.children;
      for (let u = c.length - 1; u >= 0; u--) {
        const d = c[u],
          f = this.hitTestMoveRecursive(
            d,
            this._isInteractive(e) ? e : d.eventMode,
            r,
            s,
            n,
            a || n(t, r)
          );
        if (f) {
          if (f.length > 0 && !f[f.length - 1].parent) continue;
          const p = t.isInteractive();
          (f.length > 0 || p) &&
            (p && this._allInteractiveElements.push(t), f.push(t)),
            this._hitElements.length === 0 && (this._hitElements = f),
            (o = !0);
        }
      }
    }
    const h = this._isInteractive(e),
      l = t.isInteractive();
    return (
      h && l && this._allInteractiveElements.push(t),
      a || this._hitElements.length > 0
        ? null
        : o
        ? this._hitElements
        : h && !n(t, r) && s(t, r)
        ? l
          ? [t]
          : []
        : null
    );
  }
  hitTestRecursive(t, e, r, s, n) {
    if (this._interactivePrune(t) || n(t, r)) return null;
    if (
      ((t.eventMode === "dynamic" || e === "dynamic") && (Re.pauseUpdate = !1),
      t.interactiveChildren && t.children)
    ) {
      const h = t.children;
      for (let l = h.length - 1; l >= 0; l--) {
        const c = h[l],
          u = this.hitTestRecursive(
            c,
            this._isInteractive(e) ? e : c.eventMode,
            r,
            s,
            n
          );
        if (u) {
          if (u.length > 0 && !u[u.length - 1].parent) continue;
          const d = t.isInteractive();
          return (u.length > 0 || d) && u.push(t), u;
        }
      }
    }
    const a = this._isInteractive(e),
      o = t.isInteractive();
    return a && s(t, r) ? (o ? [t] : []) : null;
  }
  _isInteractive(t) {
    return t === "static" || t === "dynamic";
  }
  _interactivePrune(t) {
    return !!(
      !t ||
      t.isMask ||
      !t.visible ||
      !t.renderable ||
      t.eventMode === "none" ||
      (t.eventMode === "passive" && !t.interactiveChildren) ||
      t.isMask
    );
  }
  hitPruneFn(t, e) {
    var r;
    if (
      t.hitArea &&
      (t.worldTransform.applyInverse(e, cn), !t.hitArea.contains(cn.x, cn.y))
    )
      return !0;
    if (t._mask) {
      const s = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (s && !((r = s.containsPoint) != null && r.call(s, e))) return !0;
    }
    return !1;
  }
  hitTestFn(t, e) {
    return t.eventMode === "passive"
      ? !1
      : t.hitArea
      ? !0
      : t.containsPoint
      ? t.containsPoint(e)
      : !1;
  }
  notifyTarget(t, e) {
    var n, a;
    e = e ?? t.type;
    const r = `on${e}`;
    (a = (n = t.currentTarget)[r]) == null || a.call(n, t);
    const s =
      t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET
        ? `${e}capture`
        : e;
    this.notifyListeners(t, s),
      t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e);
  }
  mapPointerDown(t) {
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.createPointerEvent(t);
    if ((this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch"))
      this.dispatchEvent(e, "touchstart");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const s = e.button === 2;
      this.dispatchEvent(e, s ? "rightdown" : "mousedown");
    }
    const r = this.trackingData(t.pointerId);
    (r.pressTargetsByButton[t.button] = e.composedPath()), this.freeEvent(e);
  }
  mapPointerMove(t) {
    var h, l;
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (this._isPointerMoveEvent = !0);
    const e = this.createPointerEvent(t);
    this._isPointerMoveEvent = !1;
    const r = e.pointerType === "mouse" || e.pointerType === "pen",
      s = this.trackingData(t.pointerId),
      n = this.findMountedTarget(s.overTargets);
    if (
      ((h = s.overTargets) == null ? void 0 : h.length) > 0 &&
      n !== e.target
    ) {
      const c = t.type === "mousemove" ? "mouseout" : "pointerout",
        u = this.createPointerEvent(t, c, n);
      if (
        (this.dispatchEvent(u, "pointerout"),
        r && this.dispatchEvent(u, "mouseout"),
        !e.composedPath().includes(n))
      ) {
        const d = this.createPointerEvent(t, "pointerleave", n);
        for (
          d.eventPhase = d.AT_TARGET;
          d.target && !e.composedPath().includes(d.target);

        )
          (d.currentTarget = d.target),
            this.notifyTarget(d),
            r && this.notifyTarget(d, "mouseleave"),
            (d.target = d.target.parent);
        this.freeEvent(d);
      }
      this.freeEvent(u);
    }
    if (n !== e.target) {
      const c = t.type === "mousemove" ? "mouseover" : "pointerover",
        u = this.clonePointerEvent(e, c);
      this.dispatchEvent(u, "pointerover"),
        r && this.dispatchEvent(u, "mouseover");
      let d = n == null ? void 0 : n.parent;
      for (; d && d !== this.rootTarget.parent && d !== e.target; )
        d = d.parent;
      if (!d || d === this.rootTarget.parent) {
        const f = this.clonePointerEvent(e, "pointerenter");
        for (
          f.eventPhase = f.AT_TARGET;
          f.target && f.target !== n && f.target !== this.rootTarget.parent;

        )
          (f.currentTarget = f.target),
            this.notifyTarget(f),
            r && this.notifyTarget(f, "mouseenter"),
            (f.target = f.target.parent);
        this.freeEvent(f);
      }
      this.freeEvent(u);
    }
    const a = [],
      o = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll
      ? a.push("pointermove")
      : this.dispatchEvent(e, "pointermove"),
      o && a.push("globalpointermove"),
      e.pointerType === "touch" &&
        (this.moveOnAll
          ? a.splice(1, 0, "touchmove")
          : this.dispatchEvent(e, "touchmove"),
        o && a.push("globaltouchmove")),
      r &&
        (this.moveOnAll
          ? a.splice(1, 0, "mousemove")
          : this.dispatchEvent(e, "mousemove"),
        o && a.push("globalmousemove"),
        (this.cursor = (l = e.target) == null ? void 0 : l.cursor)),
      a.length > 0 && this.all(e, a),
      (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (s.overTargets = e.composedPath()),
      this.freeEvent(e);
  }
  mapPointerOver(t) {
    var a;
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId),
      r = this.createPointerEvent(t),
      s = r.pointerType === "mouse" || r.pointerType === "pen";
    this.dispatchEvent(r, "pointerover"),
      s && this.dispatchEvent(r, "mouseover"),
      r.pointerType === "mouse" &&
        (this.cursor = (a = r.target) == null ? void 0 : a.cursor);
    const n = this.clonePointerEvent(r, "pointerenter");
    for (
      n.eventPhase = n.AT_TARGET;
      n.target && n.target !== this.rootTarget.parent;

    )
      (n.currentTarget = n.target),
        this.notifyTarget(n),
        s && this.notifyTarget(n, "mouseenter"),
        (n.target = n.target.parent);
    (e.overTargets = r.composedPath()), this.freeEvent(r), this.freeEvent(n);
  }
  mapPointerOut(t) {
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId);
    if (e.overTargets) {
      const r = t.pointerType === "mouse" || t.pointerType === "pen",
        s = this.findMountedTarget(e.overTargets),
        n = this.createPointerEvent(t, "pointerout", s);
      this.dispatchEvent(n), r && this.dispatchEvent(n, "mouseout");
      const a = this.createPointerEvent(t, "pointerleave", s);
      for (
        a.eventPhase = a.AT_TARGET;
        a.target && a.target !== this.rootTarget.parent;

      )
        (a.currentTarget = a.target),
          this.notifyTarget(a),
          r && this.notifyTarget(a, "mouseleave"),
          (a.target = a.target.parent);
      (e.overTargets = null), this.freeEvent(n), this.freeEvent(a);
    }
    this.cursor = null;
  }
  mapPointerUp(t) {
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = performance.now(),
      r = this.createPointerEvent(t);
    if ((this.dispatchEvent(r, "pointerup"), r.pointerType === "touch"))
      this.dispatchEvent(r, "touchend");
    else if (r.pointerType === "mouse" || r.pointerType === "pen") {
      const o = r.button === 2;
      this.dispatchEvent(r, o ? "rightup" : "mouseup");
    }
    const s = this.trackingData(t.pointerId),
      n = this.findMountedTarget(s.pressTargetsByButton[t.button]);
    let a = n;
    if (n && !r.composedPath().includes(n)) {
      let o = n;
      for (; o && !r.composedPath().includes(o); ) {
        if (
          ((r.currentTarget = o),
          this.notifyTarget(r, "pointerupoutside"),
          r.pointerType === "touch")
        )
          this.notifyTarget(r, "touchendoutside");
        else if (r.pointerType === "mouse" || r.pointerType === "pen") {
          const h = r.button === 2;
          this.notifyTarget(r, h ? "rightupoutside" : "mouseupoutside");
        }
        o = o.parent;
      }
      delete s.pressTargetsByButton[t.button], (a = o);
    }
    if (a) {
      const o = this.clonePointerEvent(r, "click");
      (o.target = a),
        (o.path = null),
        s.clicksByButton[t.button] ||
          (s.clicksByButton[t.button] = {
            clickCount: 0,
            target: o.target,
            timeStamp: e,
          });
      const h = s.clicksByButton[t.button];
      if (
        (h.target === o.target && e - h.timeStamp < 200
          ? ++h.clickCount
          : (h.clickCount = 1),
        (h.target = o.target),
        (h.timeStamp = e),
        (o.detail = h.clickCount),
        o.pointerType === "mouse")
      ) {
        const l = o.button === 2;
        this.dispatchEvent(o, l ? "rightclick" : "click");
      } else o.pointerType === "touch" && this.dispatchEvent(o, "tap");
      this.dispatchEvent(o, "pointertap"), this.freeEvent(o);
    }
    this.freeEvent(r);
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof Vt)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    const e = this.trackingData(t.pointerId),
      r = this.findMountedTarget(e.pressTargetsByButton[t.button]),
      s = this.createPointerEvent(t);
    if (r) {
      let n = r;
      for (; n; )
        (s.currentTarget = n),
          this.notifyTarget(s, "pointerupoutside"),
          s.pointerType === "touch"
            ? this.notifyTarget(s, "touchendoutside")
            : (s.pointerType === "mouse" || s.pointerType === "pen") &&
              this.notifyTarget(
                s,
                s.button === 2 ? "rightupoutside" : "mouseupoutside"
              ),
          (n = n.parent);
      delete e.pressTargetsByButton[t.button];
    }
    this.freeEvent(s);
  }
  mapWheel(t) {
    if (!(t instanceof Br)) {
      console.warn(
        "EventBoundary cannot map a non-wheel event as a wheel event"
      );
      return;
    }
    const e = this.createWheelEvent(t);
    this.dispatchEvent(e), this.freeEvent(e);
  }
  findMountedTarget(t) {
    if (!t) return null;
    let e = t[0];
    for (let r = 1; r < t.length && t[r].parent === e; r++) e = t[r];
    return e;
  }
  createPointerEvent(t, e, r) {
    const s = this.allocateEvent(Vt);
    return (
      this.copyPointerData(t, s),
      this.copyMouseData(t, s),
      this.copyData(t, s),
      (s.nativeEvent = t.nativeEvent),
      (s.originalEvent = t),
      (s.target =
        r ?? this.hitTest(s.global.x, s.global.y) ?? this._hitElements[0]),
      typeof e == "string" && (s.type = e),
      s
    );
  }
  createWheelEvent(t) {
    const e = this.allocateEvent(Br);
    return (
      this.copyWheelData(t, e),
      this.copyMouseData(t, e),
      this.copyData(t, e),
      (e.nativeEvent = t.nativeEvent),
      (e.originalEvent = t),
      (e.target = this.hitTest(e.global.x, e.global.y)),
      e
    );
  }
  clonePointerEvent(t, e) {
    const r = this.allocateEvent(Vt);
    return (
      (r.nativeEvent = t.nativeEvent),
      (r.originalEvent = t.originalEvent),
      this.copyPointerData(t, r),
      this.copyMouseData(t, r),
      this.copyData(t, r),
      (r.target = t.target),
      (r.path = t.composedPath().slice()),
      (r.type = e ?? r.type),
      r
    );
  }
  copyWheelData(t, e) {
    (e.deltaMode = t.deltaMode),
      (e.deltaX = t.deltaX),
      (e.deltaY = t.deltaY),
      (e.deltaZ = t.deltaZ);
  }
  copyPointerData(t, e) {
    t instanceof Vt &&
      e instanceof Vt &&
      ((e.pointerId = t.pointerId),
      (e.width = t.width),
      (e.height = t.height),
      (e.isPrimary = t.isPrimary),
      (e.pointerType = t.pointerType),
      (e.pressure = t.pressure),
      (e.tangentialPressure = t.tangentialPressure),
      (e.tiltX = t.tiltX),
      (e.tiltY = t.tiltY),
      (e.twist = t.twist));
  }
  copyMouseData(t, e) {
    t instanceof ys &&
      e instanceof ys &&
      ((e.altKey = t.altKey),
      (e.button = t.button),
      (e.buttons = t.buttons),
      e.client.copyFrom(t.client),
      (e.ctrlKey = t.ctrlKey),
      (e.metaKey = t.metaKey),
      e.movement.copyFrom(t.movement),
      e.screen.copyFrom(t.screen),
      (e.shiftKey = t.shiftKey),
      e.global.copyFrom(t.global));
  }
  copyData(t, e) {
    (e.isTrusted = t.isTrusted),
      (e.srcElement = t.srcElement),
      (e.timeStamp = performance.now()),
      (e.type = t.type),
      (e.detail = t.detail),
      (e.view = t.view),
      (e.which = t.which),
      e.layer.copyFrom(t.layer),
      e.page.copyFrom(t.page);
  }
  trackingData(t) {
    return (
      this.mappingState.trackingData[t] ||
        (this.mappingState.trackingData[t] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null,
        }),
      this.mappingState.trackingData[t]
    );
  }
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const e = this.eventPool.get(t).pop() || new t(this);
    return (
      (e.eventPhase = e.NONE),
      (e.currentTarget = null),
      (e.path = null),
      (e.target = null),
      e
    );
  }
  freeEvent(t) {
    if (t.manager !== this)
      throw new Error(
        "It is illegal to free an event not managed by this EventBoundary!"
      );
    const e = t.constructor;
    this.eventPool.has(e) || this.eventPool.set(e, []),
      this.eventPool.get(e).push(t);
  }
  notifyListeners(t, e) {
    const r = t.currentTarget._events[e];
    if (r && t.currentTarget.isInteractive())
      if ("fn" in r)
        r.once && t.currentTarget.removeListener(e, r.fn, void 0, !0),
          r.fn.call(r.context, t);
      else
        for (
          let s = 0, n = r.length;
          s < n && !t.propagationImmediatelyStopped;
          s++
        )
          r[s].once && t.currentTarget.removeListener(e, r[s].fn, void 0, !0),
            r[s].fn.call(r[s].context, t);
  }
}
const Rm = 1,
  Pm = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel",
  },
  sa = class na {
    constructor(t) {
      (this.supportsTouchEvents = "ontouchstart" in globalThis),
        (this.supportsPointerEvents = !!globalThis.PointerEvent),
        (this.domElement = null),
        (this.resolution = 1),
        (this.renderer = t),
        (this.rootBoundary = new Im(null)),
        Re.init(this),
        (this.autoPreventDefault = !0),
        (this.eventsAdded = !1),
        (this.rootPointerEvent = new Vt(null)),
        (this.rootWheelEvent = new Br(null)),
        (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
        (this.features = new Proxy(
          { ...na.defaultEventFeatures },
          {
            set: (e, r, s) => (
              r === "globalMove" &&
                (this.rootBoundary.enableGlobalMoveEvents = s),
              (e[r] = s),
              !0
            ),
          }
        )),
        (this.onPointerDown = this.onPointerDown.bind(this)),
        (this.onPointerMove = this.onPointerMove.bind(this)),
        (this.onPointerUp = this.onPointerUp.bind(this)),
        (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
        (this.onWheel = this.onWheel.bind(this));
    }
    static get defaultEventMode() {
      return this._defaultEventMode;
    }
    init(t) {
      const { view: e, resolution: r } = this.renderer;
      this.setTargetElement(e),
        (this.resolution = r),
        (na._defaultEventMode = t.eventMode ?? "auto"),
        Object.assign(this.features, t.eventFeatures ?? {}),
        (this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove);
    }
    resolutionChange(t) {
      this.resolution = t;
    }
    destroy() {
      this.setTargetElement(null), (this.renderer = null);
    }
    setCursor(t) {
      t = t || "default";
      let e = !0;
      if (
        (globalThis.OffscreenCanvas &&
          this.domElement instanceof OffscreenCanvas &&
          (e = !1),
        this.currentCursor === t)
      )
        return;
      this.currentCursor = t;
      const r = this.cursorStyles[t];
      if (r)
        switch (typeof r) {
          case "string":
            e && (this.domElement.style.cursor = r);
            break;
          case "function":
            r(t);
            break;
          case "object":
            e && Object.assign(this.domElement.style, r);
            break;
        }
      else
        e &&
          typeof t == "string" &&
          !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) &&
          (this.domElement.style.cursor = t);
    }
    get pointer() {
      return this.rootPointerEvent;
    }
    onPointerDown(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this.normalizeToPointerData(t);
      this.autoPreventDefault &&
        e[0].isNormalized &&
        (t.cancelable || !("cancelable" in t)) &&
        t.preventDefault();
      for (let r = 0, s = e.length; r < s; r++) {
        const n = e[r],
          a = this.bootstrapEvent(this.rootPointerEvent, n);
        this.rootBoundary.mapEvent(a);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerMove(t) {
      if (!this.features.move) return;
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        Re.pointerMoved();
      const e = this.normalizeToPointerData(t);
      for (let r = 0, s = e.length; r < s; r++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerUp(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let e = t.target;
      t.composedPath &&
        t.composedPath().length > 0 &&
        (e = t.composedPath()[0]);
      const r = e !== this.domElement ? "outside" : "",
        s = this.normalizeToPointerData(t);
      for (let n = 0, a = s.length; n < a; n++) {
        const o = this.bootstrapEvent(this.rootPointerEvent, s[n]);
        (o.type += r), this.rootBoundary.mapEvent(o);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerOverOut(t) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      const e = this.normalizeToPointerData(t);
      for (let r = 0, s = e.length; r < s; r++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onWheel(t) {
      if (!this.features.wheel) return;
      const e = this.normalizeWheelEvent(t);
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.rootBoundary.mapEvent(e);
    }
    setTargetElement(t) {
      this.removeEvents(),
        (this.domElement = t),
        (Re.domElement = t),
        this.addEvents();
    }
    addEvents() {
      if (this.eventsAdded || !this.domElement) return;
      Re.addTickerListener();
      const t = this.domElement.style;
      t &&
        (globalThis.navigator.msPointerEnabled
          ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
          : this.supportsPointerEvents && (t.touchAction = "none")),
        this.supportsPointerEvents
          ? (globalThis.document.addEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.addEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.addEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.addEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.addEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.addEventListener("wheel", this.onWheel, {
          passive: !0,
          capture: !0,
        }),
        (this.eventsAdded = !0);
    }
    removeEvents() {
      if (!this.eventsAdded || !this.domElement) return;
      Re.removeTickerListener();
      const t = this.domElement.style;
      globalThis.navigator.msPointerEnabled
        ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
        : this.supportsPointerEvents && (t.touchAction = ""),
        this.supportsPointerEvents
          ? (globalThis.document.removeEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.removeEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.removeEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.removeEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.removeEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.removeEventListener("wheel", this.onWheel, !0),
        (this.domElement = null),
        (this.eventsAdded = !1);
    }
    mapPositionToPoint(t, e, r) {
      const s = this.domElement.isConnected
          ? this.domElement.getBoundingClientRect()
          : {
              x: 0,
              y: 0,
              width: this.domElement.width,
              height: this.domElement.height,
              left: 0,
              top: 0,
            },
        n = 1 / this.resolution;
      (t.x = (e - s.left) * (this.domElement.width / s.width) * n),
        (t.y = (r - s.top) * (this.domElement.height / s.height) * n);
    }
    normalizeToPointerData(t) {
      const e = [];
      if (this.supportsTouchEvents && t instanceof TouchEvent)
        for (let r = 0, s = t.changedTouches.length; r < s; r++) {
          const n = t.changedTouches[r];
          typeof n.button > "u" && (n.button = 0),
            typeof n.buttons > "u" && (n.buttons = 1),
            typeof n.isPrimary > "u" &&
              (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"),
            typeof n.width > "u" && (n.width = n.radiusX || 1),
            typeof n.height > "u" && (n.height = n.radiusY || 1),
            typeof n.tiltX > "u" && (n.tiltX = 0),
            typeof n.tiltY > "u" && (n.tiltY = 0),
            typeof n.pointerType > "u" && (n.pointerType = "touch"),
            typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0),
            typeof n.pressure > "u" && (n.pressure = n.force || 0.5),
            typeof n.twist > "u" && (n.twist = 0),
            typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0),
            typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX),
            typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY),
            (n.isNormalized = !0),
            (n.type = t.type),
            e.push(n);
        }
      else if (
        !globalThis.MouseEvent ||
        (t instanceof MouseEvent &&
          (!this.supportsPointerEvents ||
            !(t instanceof globalThis.PointerEvent)))
      ) {
        const r = t;
        typeof r.isPrimary > "u" && (r.isPrimary = !0),
          typeof r.width > "u" && (r.width = 1),
          typeof r.height > "u" && (r.height = 1),
          typeof r.tiltX > "u" && (r.tiltX = 0),
          typeof r.tiltY > "u" && (r.tiltY = 0),
          typeof r.pointerType > "u" && (r.pointerType = "mouse"),
          typeof r.pointerId > "u" && (r.pointerId = Rm),
          typeof r.pressure > "u" && (r.pressure = 0.5),
          typeof r.twist > "u" && (r.twist = 0),
          typeof r.tangentialPressure > "u" && (r.tangentialPressure = 0),
          (r.isNormalized = !0),
          e.push(r);
      } else e.push(t);
      return e;
    }
    normalizeWheelEvent(t) {
      const e = this.rootWheelEvent;
      return (
        this.transferMouseData(e, t),
        (e.deltaX = t.deltaX),
        (e.deltaY = t.deltaY),
        (e.deltaZ = t.deltaZ),
        (e.deltaMode = t.deltaMode),
        this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
        e.global.copyFrom(e.screen),
        e.offset.copyFrom(e.screen),
        (e.nativeEvent = t),
        (e.type = t.type),
        e
      );
    }
    bootstrapEvent(t, e) {
      return (
        (t.originalEvent = null),
        (t.nativeEvent = e),
        (t.pointerId = e.pointerId),
        (t.width = e.width),
        (t.height = e.height),
        (t.isPrimary = e.isPrimary),
        (t.pointerType = e.pointerType),
        (t.pressure = e.pressure),
        (t.tangentialPressure = e.tangentialPressure),
        (t.tiltX = e.tiltX),
        (t.tiltY = e.tiltY),
        (t.twist = e.twist),
        this.transferMouseData(t, e),
        this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
        t.global.copyFrom(t.screen),
        t.offset.copyFrom(t.screen),
        (t.isTrusted = e.isTrusted),
        t.type === "pointerleave" && (t.type = "pointerout"),
        t.type.startsWith("mouse") &&
          (t.type = t.type.replace("mouse", "pointer")),
        t.type.startsWith("touch") && (t.type = Pm[t.type] || t.type),
        t
      );
    }
    transferMouseData(t, e) {
      (t.isTrusted = e.isTrusted),
        (t.srcElement = e.srcElement),
        (t.timeStamp = performance.now()),
        (t.type = e.type),
        (t.altKey = e.altKey),
        (t.button = e.button),
        (t.buttons = e.buttons),
        (t.client.x = e.clientX),
        (t.client.y = e.clientY),
        (t.ctrlKey = e.ctrlKey),
        (t.metaKey = e.metaKey),
        (t.movement.x = e.movementX),
        (t.movement.y = e.movementY),
        (t.page.x = e.pageX),
        (t.page.y = e.pageY),
        (t.relatedTarget = null),
        (t.shiftKey = e.shiftKey);
    }
  };
(sa.extension = {
  name: "events",
  type: [R.RendererSystem, R.CanvasRendererSystem],
}),
  (sa.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0,
  });
let aa = sa;
L.add(aa);
function Qo(i) {
  return i === "dynamic" || i === "static";
}
const Mm = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  _internalInteractive: void 0,
  get interactive() {
    return this._internalInteractive ?? Qo(aa.defaultEventMode);
  },
  set interactive(i) {
    q(
      "7.2.0",
      "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
    ),
      (this._internalInteractive = i),
      (this.eventMode = i ? "static" : "auto");
  },
  _internalEventMode: void 0,
  get eventMode() {
    return this._internalEventMode ?? aa.defaultEventMode;
  },
  set eventMode(i) {
    (this._internalInteractive = Qo(i)), (this._internalEventMode = i);
  },
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  interactiveChildren: !0,
  hitArea: null,
  addEventListener(i, t, e) {
    const r =
        (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
      s = typeof e == "object" ? e.signal : void 0,
      n = typeof e == "object" ? e.once === !0 : !1,
      a = typeof t == "function" ? void 0 : t;
    i = r ? `${i}capture` : i;
    const o = typeof t == "function" ? t : t.handleEvent,
      h = this;
    s &&
      s.addEventListener("abort", () => {
        h.off(i, o, a);
      }),
      n ? h.once(i, o, a) : h.on(i, o, a);
  },
  removeEventListener(i, t, e) {
    const r =
        (typeof e == "boolean" && e) || (typeof e == "object" && e.capture),
      s = typeof t == "function" ? void 0 : t;
    (i = r ? `${i}capture` : i),
      (t = typeof t == "function" ? t : t.handleEvent),
      this.off(i, t, s);
  },
  dispatchEvent(i) {
    if (!(i instanceof _i))
      throw new Error(
        "DisplayObject cannot propagate events outside of the Federated Events API"
      );
    return (
      (i.defaultPrevented = !1),
      (i.path = null),
      (i.target = this),
      i.manager.dispatchEvent(i),
      !i.defaultPrevented
    );
  },
};
ot.mixin(Mm);
const Bm = {
  accessible: !1,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: !1,
  _accessibleDiv: null,
  accessibleType: "button",
  accessiblePointerEvents: "auto",
  accessibleChildren: !0,
  renderId: -1,
};
ot.mixin(Bm);
const Dm = 9,
  Li = 100,
  Fm = 0,
  Om = 0,
  Jo = 2,
  th = 1,
  Lm = -1e3,
  Nm = -1e3,
  Um = 2;
class Hl {
  constructor(t) {
    (this.debug = !1),
      (this._isActive = !1),
      (this._isMobileAccessibility = !1),
      (this.pool = []),
      (this.renderId = 0),
      (this.children = []),
      (this.androidUpdateCount = 0),
      (this.androidUpdateFrequency = 500),
      (this._hookDiv = null),
      (ye.tablet || ye.phone) && this.createTouchHook();
    const e = document.createElement("div");
    (e.style.width = `${Li}px`),
      (e.style.height = `${Li}px`),
      (e.style.position = "absolute"),
      (e.style.top = `${Fm}px`),
      (e.style.left = `${Om}px`),
      (e.style.zIndex = Jo.toString()),
      (this.div = e),
      (this.renderer = t),
      (this._onKeyDown = this._onKeyDown.bind(this)),
      (this._onMouseMove = this._onMouseMove.bind(this)),
      globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const t = document.createElement("button");
    (t.style.width = `${th}px`),
      (t.style.height = `${th}px`),
      (t.style.position = "absolute"),
      (t.style.top = `${Lm}px`),
      (t.style.left = `${Nm}px`),
      (t.style.zIndex = Um.toString()),
      (t.style.backgroundColor = "#FF0000"),
      (t.title = "select to enable accessibility for this content"),
      t.addEventListener("focus", () => {
        (this._isMobileAccessibility = !0),
          this.activate(),
          this.destroyTouchHook();
      }),
      document.body.appendChild(t),
      (this._hookDiv = t);
  }
  destroyTouchHook() {
    this._hookDiv &&
      (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
  }
  activate() {
    var t;
    this._isActive ||
      ((this._isActive = !0),
      globalThis.document.addEventListener("mousemove", this._onMouseMove, !0),
      globalThis.removeEventListener("keydown", this._onKeyDown, !1),
      this.renderer.on("postrender", this.update, this),
      (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
  }
  deactivate() {
    var t;
    !this._isActive ||
      this._isMobileAccessibility ||
      ((this._isActive = !1),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.addEventListener("keydown", this._onKeyDown, !1),
      this.renderer.off("postrender", this.update),
      (t = this.div.parentNode) == null || t.removeChild(this.div));
  }
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren) return;
    t.accessible &&
      t.isInteractive() &&
      (t._accessibleActive || this.addChild(t), (t.renderId = this.renderId));
    const e = t.children;
    if (e)
      for (let r = 0; r < e.length; r++) this.updateAccessibleObjects(e[r]);
  }
  update() {
    const t = performance.now();
    if (
      (ye.android.device && t < this.androidUpdateCount) ||
      ((this.androidUpdateCount = t + this.androidUpdateFrequency),
      !this.renderer.renderingToScreen)
    )
      return;
    this.renderer.lastObjectRendered &&
      this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const {
        x: e,
        y: r,
        width: s,
        height: n,
      } = this.renderer.view.getBoundingClientRect(),
      { width: a, height: o, resolution: h } = this.renderer,
      l = (s / a) * h,
      c = (n / o) * h;
    let u = this.div;
    (u.style.left = `${e}px`),
      (u.style.top = `${r}px`),
      (u.style.width = `${a}px`),
      (u.style.height = `${o}px`);
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId)
        (f._accessibleActive = !1),
          Pr(this.children, d, 1),
          this.div.removeChild(f._accessibleDiv),
          this.pool.push(f._accessibleDiv),
          (f._accessibleDiv = null),
          d--;
      else {
        u = f._accessibleDiv;
        let p = f.hitArea;
        const m = f.worldTransform;
        f.hitArea
          ? ((u.style.left = `${(m.tx + p.x * m.a) * l}px`),
            (u.style.top = `${(m.ty + p.y * m.d) * c}px`),
            (u.style.width = `${p.width * m.a * l}px`),
            (u.style.height = `${p.height * m.d * c}px`))
          : ((p = f.getBounds()),
            this.capHitArea(p),
            (u.style.left = `${p.x * l}px`),
            (u.style.top = `${p.y * c}px`),
            (u.style.width = `${p.width * l}px`),
            (u.style.height = `${p.height * c}px`),
            u.title !== f.accessibleTitle &&
              f.accessibleTitle !== null &&
              (u.title = f.accessibleTitle),
            u.getAttribute("aria-label") !== f.accessibleHint &&
              f.accessibleHint !== null &&
              u.setAttribute("aria-label", f.accessibleHint)),
          (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) &&
            ((u.title = f.accessibleTitle),
            (u.tabIndex = f.tabIndex),
            this.debug && this.updateDebugHTML(u));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  capHitArea(t) {
    t.x < 0 && ((t.width += t.x), (t.x = 0)),
      t.y < 0 && ((t.height += t.y), (t.y = 0));
    const { width: e, height: r } = this.renderer;
    t.x + t.width > e && (t.width = e - t.x),
      t.y + t.height > r && (t.height = r - t.y);
  }
  addChild(t) {
    let e = this.pool.pop();
    e ||
      ((e = document.createElement("button")),
      (e.style.width = `${Li}px`),
      (e.style.height = `${Li}px`),
      (e.style.backgroundColor = this.debug
        ? "rgba(255,255,255,0.5)"
        : "transparent"),
      (e.style.position = "absolute"),
      (e.style.zIndex = Jo.toString()),
      (e.style.borderStyle = "none"),
      navigator.userAgent.toLowerCase().includes("chrome")
        ? e.setAttribute("aria-live", "off")
        : e.setAttribute("aria-live", "polite"),
      navigator.userAgent.match(/rv:.*Gecko\//)
        ? e.setAttribute("aria-relevant", "additions")
        : e.setAttribute("aria-relevant", "text"),
      e.addEventListener("click", this._onClick.bind(this)),
      e.addEventListener("focus", this._onFocus.bind(this)),
      e.addEventListener("focusout", this._onFocusOut.bind(this))),
      (e.style.pointerEvents = t.accessiblePointerEvents),
      (e.type = t.accessibleType),
      t.accessibleTitle && t.accessibleTitle !== null
        ? (e.title = t.accessibleTitle)
        : (!t.accessibleHint || t.accessibleHint === null) &&
          (e.title = `displayObject ${t.tabIndex}`),
      t.accessibleHint &&
        t.accessibleHint !== null &&
        e.setAttribute("aria-label", t.accessibleHint),
      this.debug && this.updateDebugHTML(e),
      (t._accessibleActive = !0),
      (t._accessibleDiv = e),
      (e.displayObject = t),
      this.children.push(t),
      this.div.appendChild(t._accessibleDiv),
      (t._accessibleDiv.tabIndex = t.tabIndex);
  }
  _dispatchEvent(t, e) {
    const { displayObject: r } = t.target,
      s = this.renderer.events.rootBoundary,
      n = Object.assign(new _i(s), { target: r });
    (s.rootTarget = this.renderer.lastObjectRendered),
      e.forEach((a) => s.dispatchEvent(n, a));
  }
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  _onFocus(t) {
    t.target.getAttribute("aria-live") ||
      t.target.setAttribute("aria-live", "assertive"),
      this._dispatchEvent(t, ["mouseover"]);
  }
  _onFocusOut(t) {
    t.target.getAttribute("aria-live") ||
      t.target.setAttribute("aria-live", "polite"),
      this._dispatchEvent(t, ["mouseout"]);
  }
  _onKeyDown(t) {
    t.keyCode === Dm && this.activate();
  }
  _onMouseMove(t) {
    (t.movementX === 0 && t.movementY === 0) || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(),
      (this.div = null),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.removeEventListener("keydown", this._onKeyDown),
      (this.pool = null),
      (this.children = null),
      (this.renderer = null);
  }
}
Hl.extension = {
  name: "accessibility",
  type: [R.RendererPlugin, R.CanvasRendererPlugin],
};
L.add(Hl);
const $l = class oa {
  constructor(t) {
    (this.stage = new Ut()),
      (t = Object.assign({ forceCanvas: !1 }, t)),
      (this.renderer = Yp(t)),
      oa._plugins.forEach((e) => {
        e.init.call(this, t);
      });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.view;
  }
  get screen() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.screen;
  }
  destroy(t, e) {
    const r = oa._plugins.slice(0);
    r.reverse(),
      r.forEach((s) => {
        s.destroy.call(this);
      }),
      this.stage.destroy(e),
      (this.stage = null),
      this.renderer.destroy(t),
      (this.renderer = null);
  }
};
$l._plugins = [];
let Ma = $l;
L.handleByList(R.Application, Ma._plugins);
class Xl {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(e) {
        globalThis.removeEventListener("resize", this.queueResize),
          (this._resizeTo = e),
          e &&
            (globalThis.addEventListener("resize", this.queueResize),
            this.resize());
      },
      get() {
        return this._resizeTo;
      },
    }),
      (this.queueResize = () => {
        this._resizeTo &&
          (this.cancelResize(),
          (this._resizeId = requestAnimationFrame(() => this.resize())));
      }),
      (this.cancelResize = () => {
        this._resizeId &&
          (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
      }),
      (this.resize = () => {
        if (!this._resizeTo) return;
        this.cancelResize();
        let e, r;
        if (this._resizeTo === globalThis.window)
          (e = globalThis.innerWidth), (r = globalThis.innerHeight);
        else {
          const { clientWidth: s, clientHeight: n } = this._resizeTo;
          (e = s), (r = n);
        }
        this.renderer.resize(e, r), this.render();
      }),
      (this._resizeId = null),
      (this._resizeTo = null),
      (this.resizeTo = t.resizeTo || null);
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize),
      this.cancelResize(),
      (this.cancelResize = null),
      (this.queueResize = null),
      (this.resizeTo = null),
      (this.resize = null);
  }
}
Xl.extension = R.Application;
L.add(Xl);
const eh = {
  loader: R.LoadParser,
  resolver: R.ResolveParser,
  cache: R.CacheParser,
  detection: R.DetectionParser,
};
L.handle(
  R.Asset,
  (i) => {
    const t = i.ref;
    Object.entries(eh)
      .filter(([e]) => !!t[e])
      .forEach(([e, r]) =>
        L.add(Object.assign(t[e], { extension: t[e].extension ?? r }))
      );
  },
  (i) => {
    const t = i.ref;
    Object.keys(eh)
      .filter((e) => !!t[e])
      .forEach((e) => L.remove(t[e]));
  }
);
class km {
  constructor(t, e = !1) {
    (this._loader = t),
      (this._assetList = []),
      (this._isLoading = !1),
      (this._maxConcurrent = 1),
      (this.verbose = e);
  }
  add(t) {
    t.forEach((e) => {
      this._assetList.push(e);
    }),
      this.verbose &&
        console.log("[BackgroundLoader] assets: ", this._assetList),
      this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [],
        e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let r = 0; r < e; r++) t.push(this._assetList.pop());
      await this._loader.load(t), (this._isLoading = !1), this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t &&
      ((this._isActive = t), t && !this._isLoading && this._next());
  }
}
function Hr(i, t) {
  if (Array.isArray(t)) {
    for (const e of t) if (i.startsWith(`data:${e}`)) return !0;
    return !1;
  }
  return i.startsWith(`data:${t}`);
}
function Ge(i, t) {
  const e = i.split("?")[0],
    r = mt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(r) : r === t;
}
const Wt = (i, t, e = !1) => (
    Array.isArray(i) || (i = [i]),
    t ? i.map((r) => (typeof r == "string" || e ? t(r) : r)) : i
  ),
  ha = (i, t) => {
    const e = t.split("?")[1];
    return e && (i += `?${e}`), i;
  };
function Vl(i, t, e, r, s) {
  const n = t[e];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    e < t.length - 1
      ? Vl(i.replace(r[e], o), t, e + 1, r, s)
      : s.push(i.replace(r[e], o));
  }
}
function Gm(i) {
  const t = /\{(.*?)\}/g,
    e = i.match(t),
    r = [];
  if (e) {
    const s = [];
    e.forEach((n) => {
      const a = n.substring(1, n.length - 1).split(",");
      s.push(a);
    }),
      Vl(i, s, 0, e, r);
  } else r.push(i);
  return r;
}
const _s = (i) => !Array.isArray(i);
class Hm {
  constructor() {
    (this._parsers = []),
      (this._cache = new Map()),
      (this._cacheMap = new Map());
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const e = this._cache.get(t);
    return (
      e || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), e
    );
  }
  set(t, e) {
    const r = Wt(t);
    let s;
    for (let o = 0; o < this.parsers.length; o++) {
      const h = this.parsers[o];
      if (h.test(e)) {
        s = h.getCacheableAssets(r, e);
        break;
      }
    }
    s ||
      ((s = {}),
      r.forEach((o) => {
        s[o] = e;
      }));
    const n = Object.keys(s),
      a = { cacheKeys: n, keys: r };
    if (
      (r.forEach((o) => {
        this._cacheMap.set(o, a);
      }),
      n.forEach((o) => {
        this._cache.has(o) &&
          this._cache.get(o) !== e &&
          console.warn("[Cache] already has key:", o),
          this._cache.set(o, s[o]);
      }),
      e instanceof O)
    ) {
      const o = e;
      r.forEach((h) => {
        o.baseTexture !== O.EMPTY.baseTexture && W.addToCache(o.baseTexture, h),
          O.addToCache(o, h);
      });
    }
  }
  remove(t) {
    if (!this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((r) => {
      this._cache.delete(r);
    }),
      e.keys.forEach((r) => {
        this._cacheMap.delete(r);
      });
  }
  get parsers() {
    return this._parsers;
  }
}
const Ke = new Hm();
class $m {
  constructor() {
    (this._parsers = []),
      (this._parsersValidated = !1),
      (this.parsers = new Proxy(this._parsers, {
        set: (t, e, r) => ((this._parsersValidated = !1), (t[e] = r), !0),
      })),
      (this.promiseCache = {});
  }
  reset() {
    (this._parsersValidated = !1), (this.promiseCache = {});
  }
  _getLoadPromiseAndParser(t, e) {
    const r = { promise: null, parser: null };
    return (
      (r.promise = (async () => {
        var a, o;
        let s = null,
          n = null;
        if (
          (e.loadParser &&
            ((n = this._parserHash[e.loadParser]),
            n ||
              console.warn(
                `[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`
              )),
          !n)
        ) {
          for (let h = 0; h < this.parsers.length; h++) {
            const l = this.parsers[h];
            if (l.load && (a = l.test) != null && a.call(l, t, e, this)) {
              n = l;
              break;
            }
          }
          if (!n)
            return (
              console.warn(
                `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`
              ),
              null
            );
        }
        (s = await n.load(t, e, this)), (r.parser = n);
        for (let h = 0; h < this.parsers.length; h++) {
          const l = this.parsers[h];
          l.parse &&
            l.parse &&
            (await ((o = l.testParse) == null
              ? void 0
              : o.call(l, s, e, this))) &&
            ((s = (await l.parse(s, e, this)) || s), (r.parser = l));
        }
        return s;
      })()),
      r
    );
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    let r = 0;
    const s = {},
      n = _s(t),
      a = Wt(t, (l) => ({ alias: [l], src: l })),
      o = a.length,
      h = a.map(async (l) => {
        const c = mt.toAbsolute(l.src);
        if (!s[l.src])
          try {
            this.promiseCache[c] ||
              (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)),
              (s[l.src] = await this.promiseCache[c].promise),
              e && e(++r / o);
          } catch (u) {
            throw (
              (delete this.promiseCache[c],
              delete s[l.src],
              new Error(`[Loader.load] Failed to load ${c}.
${u}`))
            );
          }
      });
    return await Promise.all(h), n ? s[a[0].src] : s;
  }
  async unload(t) {
    const e = Wt(t, (r) => ({ alias: [r], src: r })).map(async (r) => {
      var a, o;
      const s = mt.toAbsolute(r.src),
        n = this.promiseCache[s];
      if (n) {
        const h = await n.promise;
        delete this.promiseCache[s],
          (o = (a = n.parser) == null ? void 0 : a.unload) == null ||
            o.call(a, h, r, this);
      }
    });
    await Promise.all(e);
  }
  _validateParsers() {
    (this._parsersValidated = !0),
      (this._parserHash = this._parsers
        .filter((t) => t.name)
        .reduce(
          (t, e) => (
            t[e.name] &&
              console.warn(`[Assets] loadParser name conflict "${e.name}"`),
            { ...t, [e.name]: e }
          ),
          {}
        ));
  }
}
var qt = ((i) => (
  (i[(i.Low = 0)] = "Low"),
  (i[(i.Normal = 1)] = "Normal"),
  (i[(i.High = 2)] = "High"),
  i
))(qt || {});
const Xm = ".json",
  Vm = "application/json",
  Wm = {
    extension: { type: R.LoadParser, priority: qt.Low },
    name: "loadJson",
    test(i) {
      return Hr(i, Vm) || Ge(i, Xm);
    },
    async load(i) {
      return await (await F.ADAPTER.fetch(i)).json();
    },
  };
L.add(Wm);
const zm = ".txt",
  jm = "text/plain",
  Ym = {
    name: "loadTxt",
    extension: { type: R.LoadParser, priority: qt.Low },
    test(i) {
      return Hr(i, jm) || Ge(i, zm);
    },
    async load(i) {
      return await (await F.ADAPTER.fetch(i)).text();
    },
  };
L.add(Ym);
const qm = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  Km = [".ttf", ".otf", ".woff", ".woff2"],
  Zm = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
  Qm = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function Jm(i) {
  const t = mt.extname(i),
    e = mt
      .basename(i, t)
      .replace(/(-|_)/g, " ")
      .toLowerCase()
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase() + n.slice(1));
  let r = e.length > 0;
  for (const n of e)
    if (!n.match(Qm)) {
      r = !1;
      break;
    }
  let s = e.join(" ");
  return r || (s = `"${s.replace(/[\\"]/g, "\\$&")}"`), s;
}
const tg = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function eg(i) {
  return tg.test(i) ? i : encodeURI(i);
}
const rg = {
  extension: { type: R.LoadParser, priority: qt.Low },
  name: "loadWebFont",
  test(i) {
    return Hr(i, Zm) || Ge(i, Km);
  },
  async load(i, t) {
    var r, s, n;
    const e = F.ADAPTER.getFontFaceSet();
    if (e) {
      const a = [],
        o = ((r = t.data) == null ? void 0 : r.family) ?? Jm(i),
        h = ((n = (s = t.data) == null ? void 0 : s.weights) == null
          ? void 0
          : n.filter((c) => qm.includes(c))) ?? ["normal"],
        l = t.data ?? {};
      for (let c = 0; c < h.length; c++) {
        const u = h[c],
          d = new FontFace(o, `url(${eg(i)})`, { ...l, weight: u });
        await d.load(), e.add(d), a.push(d);
      }
      return a.length === 1 ? a[0] : a;
    }
    return (
      console.warn(
        "[loadWebFont] FontFace API is not supported. Skipping loading font"
      ),
      null
    );
  },
  unload(i) {
    (Array.isArray(i) ? i : [i]).forEach((t) =>
      F.ADAPTER.getFontFaceSet().delete(t)
    );
  },
};
L.add(rg);
const ig = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let Dr = null,
  la = class extends Worker {
    constructor() {
      Dr ||
        (Dr = URL.createObjectURL(
          new Blob([ig], { type: "application/javascript" })
        )),
        super(Dr);
    }
  };
la.revokeObjectURL = function () {
  Dr && (URL.revokeObjectURL(Dr), (Dr = null));
};
const sg = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let Fr = null;
class Wl extends Worker {
  constructor() {
    Fr ||
      (Fr = URL.createObjectURL(
        new Blob([sg], { type: "application/javascript" })
      )),
      super(Fr);
  }
}
Wl.revokeObjectURL = function () {
  Fr && (URL.revokeObjectURL(Fr), (Fr = null));
};
let rh = 0,
  un;
class ng {
  constructor() {
    (this._initialized = !1),
      (this._createdWorkers = 0),
      (this.workerPool = []),
      (this.queue = []),
      (this.resolveHash = {});
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0
      ? this._isImageBitmapSupported
      : ((this._isImageBitmapSupported = new Promise((t) => {
          const e = new la();
          e.addEventListener("message", (r) => {
            e.terminate(), la.revokeObjectURL(), t(r.data);
          });
        })),
        this._isImageBitmapSupported);
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  getWorker() {
    un === void 0 && (un = navigator.hardwareConcurrency || 4);
    let t = this.workerPool.pop();
    return (
      !t &&
        this._createdWorkers < un &&
        (this._createdWorkers++,
        (t = new Wl()),
        t.addEventListener("message", (e) => {
          this.complete(e.data), this.returnWorker(e.target), this.next();
        })),
      t
    );
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    t.error !== void 0
      ? this.resolveHash[t.uuid].reject(t.error)
      : this.resolveHash[t.uuid].resolve(t.data),
      (this.resolveHash[t.uuid] = null);
  }
  async _run(t, e) {
    await this._initWorkers();
    const r = new Promise((s, n) => {
      this.queue.push({ id: t, arguments: e, resolve: s, reject: n });
    });
    return this.next(), r;
  }
  next() {
    if (!this.queue.length) return;
    const t = this.getWorker();
    if (!t) return;
    const e = this.queue.pop(),
      r = e.id;
    (this.resolveHash[rh] = { resolve: e.resolve, reject: e.reject }),
      t.postMessage({ data: e.arguments, uuid: rh++, id: r });
  }
}
const ih = new ng();
function vi(i, t, e) {
  i.resource.internal = !0;
  const r = new O(i),
    s = () => {
      delete t.promiseCache[e], Ke.has(e) && Ke.remove(e);
    };
  return (
    r.baseTexture.once("destroyed", () => {
      e in t.promiseCache &&
        (console.warn(
          "[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."
        ),
        s());
    }),
    r.once("destroyed", () => {
      i.destroyed ||
        (console.warn(
          "[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."
        ),
        s());
    }),
    r
  );
}
const ag = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
  og = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function hg(i) {
  const t = await F.ADAPTER.fetch(i);
  if (!t.ok)
    throw new Error(
      `[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`
    );
  const e = await t.blob();
  return await createImageBitmap(e);
}
const Ps = {
  name: "loadTextures",
  extension: { type: R.LoadParser, priority: qt.High },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous",
  },
  test(i) {
    return Hr(i, og) || Ge(i, ag);
  },
  async load(i, t, e) {
    var o;
    const r =
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    let s;
    r
      ? this.config.preferWorkers && (await ih.isImageBitmapSupported())
        ? (s = await ih.loadImageBitmap(i))
        : (s = await hg(i))
      : (s = await new Promise((h, l) => {
          const c = new Image();
          (c.crossOrigin = this.config.crossOrigin),
            (c.src = i),
            c.complete
              ? h(c)
              : ((c.onload = () => h(c)), (c.onerror = (u) => l(u)));
        }));
    const n = { ...t.data };
    n.resolution ?? (n.resolution = Te(i)),
      r &&
        ((o = n.resourceOptions) == null ? void 0 : o.ownsImageBitmap) ===
          void 0 &&
        ((n.resourceOptions = { ...n.resourceOptions }),
        (n.resourceOptions.ownsImageBitmap = !0));
    const a = new W(s, n);
    return (a.resource.src = i), vi(a, e, i);
  },
  unload(i) {
    i.destroy(!0);
  },
};
L.add(Ps);
const lg = ".svg",
  cg = "image/svg+xml",
  ug = {
    extension: { type: R.LoadParser, priority: qt.High },
    name: "loadSVG",
    test(i) {
      return Hr(i, cg) || Ge(i, lg);
    },
    async testParse(i) {
      return Qn.test(i);
    },
    async parse(i, t, e) {
      var n;
      const r = new Qn(
        i,
        (n = t == null ? void 0 : t.data) == null ? void 0 : n.resourceOptions
      );
      await r.load();
      const s = new W(r, {
        resolution: Te(i),
        ...(t == null ? void 0 : t.data),
      });
      return (s.resource.src = t.src), vi(s, e, t.src);
    },
    async load(i, t) {
      return (await F.ADAPTER.fetch(i)).text();
    },
    unload: Ps.unload,
  };
L.add(ug);
const dg = [".mp4", ".m4v", ".webm", ".ogv"],
  fg = ["video/mp4", "video/webm", "video/ogg"],
  pg = {
    name: "loadVideo",
    extension: { type: R.LoadParser, priority: qt.High },
    config: {
      defaultAutoPlay: !0,
      defaultUpdateFPS: 0,
      defaultLoop: !1,
      defaultMuted: !1,
      defaultPlaysinline: !0,
    },
    test(i) {
      return Hr(i, fg) || Ge(i, dg);
    },
    async load(i, t, e) {
      var a;
      let r;
      const s = await (await F.ADAPTER.fetch(i)).blob(),
        n = URL.createObjectURL(s);
      try {
        const o = {
            autoPlay: this.config.defaultAutoPlay,
            updateFPS: this.config.defaultUpdateFPS,
            loop: this.config.defaultLoop,
            muted: this.config.defaultMuted,
            playsinline: this.config.defaultPlaysinline,
            ...((a = t == null ? void 0 : t.data) == null
              ? void 0
              : a.resourceOptions),
            autoLoad: !0,
          },
          h = new Ul(n, o);
        await h.load();
        const l = new W(h, {
          alphaMode: await xf(),
          resolution: Te(i),
          ...(t == null ? void 0 : t.data),
        });
        (l.resource.src = i),
          (r = vi(l, e, i)),
          r.baseTexture.once("destroyed", () => {
            URL.revokeObjectURL(n);
          });
      } catch (o) {
        throw (URL.revokeObjectURL(n), o);
      }
      return r;
    },
    unload(i) {
      i.destroy(!0);
    },
  };
L.add(pg);
class mg {
  constructor() {
    (this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) =>
        e.replace(`${t}${this._bundleIdConnector}`, ""),
    }),
      (this._bundleIdConnector =
        this._defaultBundleIdentifierOptions.connector),
      (this._createBundleAssetId =
        this._defaultBundleIdentifierOptions.createBundleAssetId),
      (this._extractAssetIdFromBundle =
        this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._parsers = []),
      (this._resolverHash = {}),
      (this._bundles = {});
  }
  setBundleIdentifier(t) {
    if (
      ((this._bundleIdConnector = t.connector ?? this._bundleIdConnector),
      (this._createBundleAssetId =
        t.createBundleAssetId ?? this._createBundleAssetId),
      (this._extractAssetIdFromBundle =
        t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
      this._extractAssetIdFromBundle(
        "foo",
        this._createBundleAssetId("foo", "bar")
      ) !== "bar")
    )
      throw new Error(
        "[Resolver] GenerateBundleAssetId are not working correctly"
      );
  }
  prefer(...t) {
    t.forEach((e) => {
      this._preferredOrder.push(e),
        e.priority || (e.priority = Object.keys(e.params));
    }),
      (this._resolverHash = {});
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._resolverHash = {}),
      (this._rootPath = null),
      (this._basePath = null),
      (this._manifest = null),
      (this._bundles = {}),
      (this._defaultSearchParams = null);
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string") this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e)
        .map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`)
        .join("&");
    }
  }
  getAlias(t) {
    const { alias: e, name: r, src: s, srcs: n } = t;
    return Wt(
      e || r || s || n,
      (a) =>
        typeof a == "string"
          ? a
          : Array.isArray(a)
          ? a.map(
              (o) =>
                (o == null ? void 0 : o.src) ??
                (o == null ? void 0 : o.srcs) ??
                o
            )
          : (a != null && a.src) || (a != null && a.srcs)
          ? a.src ?? a.srcs
          : a,
      !0
    );
  }
  addManifest(t) {
    this._manifest &&
      console.warn(
        "[Resolver] Manifest already exists, this will be overwritten"
      ),
      (this._manifest = t),
      t.bundles.forEach((e) => {
        this.addBundle(e.name, e.assets);
      });
  }
  addBundle(t, e) {
    const r = [];
    Array.isArray(e)
      ? e.forEach((s) => {
          const n = s.src ?? s.srcs,
            a = s.alias ?? s.name;
          let o;
          if (typeof a == "string") {
            const h = this._createBundleAssetId(t, a);
            r.push(h), (o = [a, h]);
          } else {
            const h = a.map((l) => this._createBundleAssetId(t, l));
            r.push(...h), (o = [...a, ...h]);
          }
          this.add({ ...s, alias: o, src: n });
        })
      : Object.keys(e).forEach((s) => {
          const n = [s, this._createBundleAssetId(t, s)];
          if (typeof e[s] == "string") this.add({ alias: n, src: e[s] });
          else if (Array.isArray(e[s])) this.add({ alias: n, src: e[s] });
          else {
            const a = e[s],
              o = a.src ?? a.srcs;
            this.add({ ...a, alias: n, src: Array.isArray(o) ? o : [o] });
          }
          r.push(...n);
        }),
      (this._bundles[t] = r);
  }
  add(t, e, r, s, n) {
    const a = [];
    typeof t == "string" || (Array.isArray(t) && typeof t[0] == "string")
      ? (q(
          "7.2.0",
          `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`
        ),
        a.push({ alias: t, src: e, data: r, format: s, loadParser: n }))
      : Array.isArray(t)
      ? a.push(...t)
      : a.push(t);
    let o;
    (o = (h) => {
      this.hasKey(h) &&
        console.warn(`[Resolver] already has key: ${h} overwriting`);
    }),
      Wt(a).forEach((h) => {
        const { src: l, srcs: c } = h;
        let { data: u, format: d, loadParser: f } = h;
        const p = Wt(l || c).map((_) =>
            typeof _ == "string" ? Gm(_) : Array.isArray(_) ? _ : [_]
          ),
          m = this.getAlias(h);
        Array.isArray(m) ? m.forEach(o) : o(m);
        const g = [];
        p.forEach((_) => {
          _.forEach((x) => {
            let y = {};
            if (typeof x != "object") {
              y.src = x;
              for (let v = 0; v < this._parsers.length; v++) {
                const T = this._parsers[v];
                if (T.test(x)) {
                  y = T.parse(x);
                  break;
                }
              }
            } else
              (u = x.data ?? u),
                (d = x.format ?? d),
                (f = x.loadParser ?? f),
                (y = { ...y, ...x });
            if (!m)
              throw new Error(
                `[Resolver] alias is undefined for this asset: ${y.src}`
              );
            (y = this.buildResolvedAsset(y, {
              aliases: m,
              data: u,
              format: d,
              loadParser: f,
            })),
              g.push(y);
          });
        }),
          m.forEach((_) => {
            this._assetMap[_] = g;
          });
      });
  }
  resolveBundle(t) {
    const e = _s(t);
    t = Wt(t);
    const r = {};
    return (
      t.forEach((s) => {
        const n = this._bundles[s];
        if (n) {
          const a = this.resolve(n),
            o = {};
          for (const h in a) {
            const l = a[h];
            o[this._extractAssetIdFromBundle(s, h)] = l;
          }
          r[s] = o;
        }
      }),
      e ? r[t[0]] : r
    );
  }
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const r = {};
      for (const s in e) r[s] = e[s].src;
      return r;
    }
    return e.src;
  }
  resolve(t) {
    const e = _s(t);
    t = Wt(t);
    const r = {};
    return (
      t.forEach((s) => {
        if (!this._resolverHash[s])
          if (this._assetMap[s]) {
            let n = this._assetMap[s];
            const a = n[0],
              o = this._getPreferredOrder(n);
            o == null ||
              o.priority.forEach((h) => {
                o.params[h].forEach((l) => {
                  const c = n.filter((u) => (u[h] ? u[h] === l : !1));
                  c.length && (n = c);
                });
              }),
              (this._resolverHash[s] = n[0] ?? a);
          } else
            this._resolverHash[s] = this.buildResolvedAsset(
              { alias: [s], src: s },
              {}
            );
        r[s] = this._resolverHash[s];
      }),
      e ? r[t[0]] : r
    );
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[0],
        s = this._preferredOrder.find((n) =>
          n.params.format.includes(r.format)
        );
      if (s) return s;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams) return t;
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(t, e) {
    const { aliases: r, data: s, loadParser: n, format: a } = e;
    return (
      (this._basePath || this._rootPath) &&
        (t.src = mt.toAbsolute(t.src, this._basePath, this._rootPath)),
      (t.alias = r ?? t.alias ?? [t.src]),
      (t.src = this._appendDefaultSearchParams(t.src)),
      (t.data = { ...(s || {}), ...t.data }),
      (t.loadParser = n ?? t.loadParser),
      (t.format = a ?? mt.extname(t.src).slice(1)),
      (t.srcs = t.src),
      (t.name = t.alias),
      t
    );
  }
}
class gg {
  constructor() {
    (this._detections = []),
      (this._initialized = !1),
      (this.resolver = new mg()),
      (this.loader = new $m()),
      (this.cache = Ke),
      (this._backgroundLoader = new km(this.loader)),
      (this._backgroundLoader.active = !0),
      this.reset();
  }
  async init(t = {}) {
    var n, a;
    if (this._initialized) {
      console.warn(
        "[Assets]AssetManager already initialized, did you load before calling this Assets.init()?"
      );
      return;
    }
    if (
      ((this._initialized = !0),
      t.defaultSearchParams &&
        this.resolver.setDefaultSearchParams(t.defaultSearchParams),
      t.basePath && (this.resolver.basePath = t.basePath),
      t.bundleIdentifier &&
        this.resolver.setBundleIdentifier(t.bundleIdentifier),
      t.manifest)
    ) {
      let o = t.manifest;
      typeof o == "string" && (o = await this.load(o)),
        this.resolver.addManifest(o);
    }
    const e = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1,
      r = typeof e == "number" ? [e] : e,
      s = await this._detectFormats({
        preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
        skipDetections: t.skipDetections,
        detections: this._detections,
      });
    this.resolver.prefer({ params: { format: s, resolution: r } }),
      t.preferences && this.setPreferences(t.preferences);
  }
  add(t, e, r, s, n) {
    this.resolver.add(t, e, r, s, n);
  }
  async load(t, e) {
    this._initialized || (await this.init());
    const r = _s(t),
      s = Wt(t).map((o) => {
        if (typeof o != "string") {
          const h = this.resolver.getAlias(o);
          return (
            h.some((l) => !this.resolver.hasKey(l)) && this.add(o),
            Array.isArray(h) ? h[0] : h
          );
        }
        return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
      }),
      n = this.resolver.resolve(s),
      a = await this._mapLoadToResolve(n, e);
    return r ? a[s[0]] : a;
  }
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  async loadBundle(t, e) {
    this._initialized || (await this.init());
    let r = !1;
    typeof t == "string" && ((r = !0), (t = [t]));
    const s = this.resolver.resolveBundle(t),
      n = {},
      a = Object.keys(s);
    let o = 0,
      h = 0;
    const l = () => {
        e == null || e(++o / h);
      },
      c = a.map((u) => {
        const d = s[u];
        return (
          (h += Object.keys(d).length),
          this._mapLoadToResolve(d, l).then((f) => {
            n[u] = f;
          })
        );
      });
    return await Promise.all(c), r ? n[t[0]] : n;
  }
  async backgroundLoad(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  async backgroundLoadBundle(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach((r) => {
      this._backgroundLoader.add(Object.values(r));
    });
  }
  reset() {
    this.resolver.reset(),
      this.loader.reset(),
      this.cache.reset(),
      (this._initialized = !1);
  }
  get(t) {
    if (typeof t == "string") return Ke.get(t);
    const e = {};
    for (let r = 0; r < t.length; r++) e[r] = Ke.get(t[r]);
    return e;
  }
  async _mapLoadToResolve(t, e) {
    const r = Object.values(t),
      s = Object.keys(t);
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(r, e);
    this._backgroundLoader.active = !0;
    const a = {};
    return (
      r.forEach((o, h) => {
        const l = n[o.src],
          c = [o.src];
        o.alias && c.push(...o.alias), (a[s[h]] = l), Ke.set(c, l);
      }),
      a
    );
  }
  async unload(t) {
    this._initialized || (await this.init());
    const e = Wt(t).map((s) => (typeof s != "string" ? s.src : s)),
      r = this.resolver.resolve(e);
    await this._unloadFromResolved(r);
  }
  async unloadBundle(t) {
    this._initialized || (await this.init()), (t = Wt(t));
    const e = this.resolver.resolveBundle(t),
      r = Object.keys(e).map((s) => this._unloadFromResolved(e[s]));
    await Promise.all(r);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((r) => {
      Ke.remove(r.src);
    }),
      await this.loader.unload(e);
  }
  async _detectFormats(t) {
    let e = [];
    t.preferredFormats &&
      (e = Array.isArray(t.preferredFormats)
        ? t.preferredFormats
        : [t.preferredFormats]);
    for (const r of t.detections)
      t.skipDetections || (await r.test())
        ? (e = await r.add(e))
        : t.skipDetections || (e = await r.remove(e));
    return (e = e.filter((r, s) => e.indexOf(r) === s)), e;
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return Ps.config.preferWorkers;
  }
  set preferWorkers(t) {
    q(
      "7.2.0",
      "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."
    ),
      this.setPreferences({ preferWorkers: t });
  }
  setPreferences(t) {
    this.loader.parsers.forEach((e) => {
      e.config &&
        Object.keys(e.config)
          .filter((r) => r in t)
          .forEach((r) => {
            e.config[r] = t[r];
          });
    });
  }
}
const Ni = new gg();
L.handleByList(R.LoadParser, Ni.loader.parsers)
  .handleByList(R.ResolveParser, Ni.resolver.parsers)
  .handleByList(R.CacheParser, Ni.cache.parsers)
  .handleByList(R.DetectionParser, Ni.detections);
const yg = {
  extension: R.CacheParser,
  test: (i) => Array.isArray(i) && i.every((t) => t instanceof O),
  getCacheableAssets: (i, t) => {
    const e = {};
    return (
      i.forEach((r) => {
        t.forEach((s, n) => {
          e[r + (n === 0 ? "" : n + 1)] = s;
        });
      }),
      e
    );
  },
};
L.add(yg);
async function zl(i) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      (e.onload = () => {
        t(!0);
      }),
        (e.onerror = () => {
          t(!1);
        }),
        (e.src = i);
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(i)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const _g = {
  extension: { type: R.DetectionParser, priority: 1 },
  test: async () =>
    zl(
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
    ),
  add: async (i) => [...i, "avif"],
  remove: async (i) => i.filter((t) => t !== "avif"),
};
L.add(_g);
const vg = {
  extension: { type: R.DetectionParser, priority: 0 },
  test: async () =>
    zl(
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    ),
  add: async (i) => [...i, "webp"],
  remove: async (i) => i.filter((t) => t !== "webp"),
};
L.add(vg);
const sh = ["png", "jpg", "jpeg"],
  xg = {
    extension: { type: R.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (i) => [...i, ...sh],
    remove: async (i) => i.filter((t) => !sh.includes(t)),
  };
L.add(xg);
const bg =
  "WorkerGlobalScope" in globalThis &&
  globalThis instanceof globalThis.WorkerGlobalScope;
function Ba(i) {
  return bg ? !1 : document.createElement("video").canPlayType(i) !== "";
}
const Tg = {
  extension: { type: R.DetectionParser, priority: 0 },
  test: async () => Ba("video/webm"),
  add: async (i) => [...i, "webm"],
  remove: async (i) => i.filter((t) => t !== "webm"),
};
L.add(Tg);
const Eg = {
  extension: { type: R.DetectionParser, priority: 0 },
  test: async () => Ba("video/mp4"),
  add: async (i) => [...i, "mp4", "m4v"],
  remove: async (i) => i.filter((t) => t !== "mp4" && t !== "m4v"),
};
L.add(Eg);
const Ag = {
  extension: { type: R.DetectionParser, priority: 0 },
  test: async () => Ba("video/ogg"),
  add: async (i) => [...i, "ogv"],
  remove: async (i) => i.filter((t) => t !== "ogv"),
};
L.add(Ag);
const wg = {
  extension: R.ResolveParser,
  test: Ps.test,
  parse: (i) => {
    var t;
    return {
      resolution: parseFloat(
        ((t = F.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) ?? "1"
      ),
      format: mt.extname(i).slice(1),
      src: i,
    };
  },
};
L.add(wg);
var Et = ((i) => (
  (i[(i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
    "COMPRESSED_RGB_S3TC_DXT1_EXT"),
  (i[(i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
    "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
  (i[(i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
    "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
  (i[(i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
    "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
  (i[(i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
  (i[(i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
  (i[(i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
  (i[(i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
    "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
  (i[(i.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
  (i[(i.COMPRESSED_SIGNED_R11_EAC = 37489)] = "COMPRESSED_SIGNED_R11_EAC"),
  (i[(i.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
  (i[(i.COMPRESSED_SIGNED_RG11_EAC = 37491)] = "COMPRESSED_SIGNED_RG11_EAC"),
  (i[(i.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
  (i[(i.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = "COMPRESSED_RGBA8_ETC2_EAC"),
  (i[(i.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
  (i[(i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
    "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
  (i[(i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
    "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (i[(i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
    "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (i[(i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
    "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
  (i[(i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
    "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
  (i[(i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
    "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
  (i[(i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
    "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
  (i[(i.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = "COMPRESSED_RGB_ETC1_WEBGL"),
  (i[(i.COMPRESSED_RGB_ATC_WEBGL = 35986)] = "COMPRESSED_RGB_ATC_WEBGL"),
  (i[(i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987)] =
    "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
  (i[(i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
    "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"),
  (i[(i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
    "COMPRESSED_RGBA_ASTC_4x4_KHR"),
  (i[(i.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492)] =
    "COMPRESSED_RGBA_BPTC_UNORM_EXT"),
  (i[(i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493)] =
    "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"),
  (i[(i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494)] =
    "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT"),
  (i[(i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495)] =
    "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT"),
  i
))(Et || {});
const vs = {
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  37495: 0.5,
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  36196: 0.5,
  35986: 0.5,
  35987: 1,
  34798: 1,
  37808: 1,
  36492: 1,
  36493: 1,
  36494: 1,
  36495: 1,
};
let ee, vr;
function nh() {
  vr = {
    s3tc: ee.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: ee.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    etc: ee.getExtension("WEBGL_compressed_texture_etc"),
    etc1: ee.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc:
      ee.getExtension("WEBGL_compressed_texture_pvrtc") ||
      ee.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: ee.getExtension("WEBGL_compressed_texture_atc"),
    astc: ee.getExtension("WEBGL_compressed_texture_astc"),
    bptc: ee.getExtension("EXT_texture_compression_bptc"),
  };
}
const Sg = {
  extension: { type: R.DetectionParser, priority: 2 },
  test: async () => {
    const i = F.ADAPTER.createCanvas().getContext("webgl");
    return i
      ? ((ee = i), !0)
      : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (i) => {
    vr || nh();
    const t = [];
    for (const e in vr) vr[e] && t.push(e);
    return [...t, ...i];
  },
  remove: async (i) => (vr || nh(), i.filter((t) => !(t in vr))),
};
L.add(Sg);
class Cg extends ws {
  constructor(t, e = { width: 1, height: 1, autoLoad: !0 }) {
    let r, s;
    typeof t == "string"
      ? ((r = t), (s = new Uint8Array()))
      : ((r = null), (s = t)),
      super(s, e),
      (this.origin = r),
      (this.buffer = s ? new kn(s) : null),
      (this._load = null),
      (this.loaded = !1),
      this.origin !== null && e.autoLoad !== !1 && this.load(),
      this.origin === null &&
        this.buffer &&
        ((this._load = Promise.resolve(this)),
        (this.loaded = !0),
        this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(t) {}
  load() {
    return this._load
      ? this._load
      : ((this._load = fetch(this.origin)
          .then((t) => t.blob())
          .then((t) => t.arrayBuffer())
          .then(
            (t) => (
              (this.data = new Uint32Array(t)),
              (this.buffer = new kn(t)),
              (this.loaded = !0),
              this.onBlobLoaded(t),
              this.update(),
              this
            )
          )),
        this._load);
  }
}
class er extends Cg {
  constructor(t, e) {
    super(t, e),
      (this.format = e.format),
      (this.levels = e.levels || 1),
      (this._width = e.width),
      (this._height = e.height),
      (this._extension = er._formatToExtension(this.format)),
      (e.levelBuffers || this.buffer) &&
        (this._levelBuffers =
          e.levelBuffers ||
          er._createLevelBuffers(
            t instanceof Uint8Array ? t : this.buffer.uint8View,
            this.format,
            this.levels,
            4,
            4,
            this.width,
            this.height
          ));
  }
  upload(t, e, r) {
    const s = t.gl;
    if (!t.context.extensions[this._extension])
      throw new Error(
        `${this._extension} textures are not supported on the current machine`
      );
    if (!this._levelBuffers) return !1;
    s.pixelStorei(s.UNPACK_ALIGNMENT, 4);
    for (let n = 0, a = this.levels; n < a; n++) {
      const {
        levelID: o,
        levelWidth: h,
        levelHeight: l,
        levelBuffer: c,
      } = this._levelBuffers[n];
      s.compressedTexImage2D(s.TEXTURE_2D, o, this.format, h, l, 0, c);
    }
    return !0;
  }
  onBlobLoaded() {
    this._levelBuffers = er._createLevelBuffers(
      this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      this.width,
      this.height
    );
  }
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779) return "s3tc";
    if (t >= 35916 && t <= 35919) return "s3tc_sRGB";
    if (t >= 37488 && t <= 37497) return "etc";
    if (t >= 35840 && t <= 35843) return "pvrtc";
    if (t === 36196) return "etc1";
    if (t === 35986 || t === 35987 || t === 34798) return "atc";
    if (t >= 36492 && t <= 36495) return "bptc";
    if (t === 37808) return "astc";
    throw new Error(`Invalid (compressed) texture format given: ${t}`);
  }
  static _createLevelBuffers(t, e, r, s, n, a, o) {
    const h = new Array(r);
    let l = t.byteOffset,
      c = a,
      u = o,
      d = (c + s - 1) & ~(s - 1),
      f = (u + n - 1) & ~(n - 1),
      p = d * f * vs[e];
    for (let m = 0; m < r; m++)
      (h[m] = {
        levelID: m,
        levelWidth: r > 1 ? c : d,
        levelHeight: r > 1 ? u : f,
        levelBuffer: new Uint8Array(t.buffer, l, p),
      }),
        (l += p),
        (c = c >> 1 || 1),
        (u = u >> 1 || 1),
        (d = (c + s - 1) & ~(s - 1)),
        (f = (u + n - 1) & ~(n - 1)),
        (p = d * f * vs[e]);
    return h;
  }
}
const dn = 4,
  Ui = 124,
  Ig = 32,
  ah = 20,
  Rg = 542327876,
  ki = {
    SIZE: 1,
    FLAGS: 2,
    HEIGHT: 3,
    WIDTH: 4,
    MIPMAP_COUNT: 7,
    PIXEL_FORMAT: 19,
  },
  Pg = {
    SIZE: 0,
    FLAGS: 1,
    FOURCC: 2,
    RGB_BITCOUNT: 3,
    R_BIT_MASK: 4,
    G_BIT_MASK: 5,
    B_BIT_MASK: 6,
    A_BIT_MASK: 7,
  },
  Gi = {
    DXGI_FORMAT: 0,
    RESOURCE_DIMENSION: 1,
    MISC_FLAG: 2,
    ARRAY_SIZE: 3,
    MISC_FLAGS2: 4,
  },
  Mg = 1,
  Bg = 2,
  Dg = 4,
  Fg = 64,
  Og = 512,
  Lg = 131072,
  Ng = 827611204,
  Ug = 861165636,
  kg = 894720068,
  Gg = 808540228,
  Hg = 4,
  $g = {
    [Ng]: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    [Ug]: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    [kg]: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  },
  Xg = {
    70: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    71: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    73: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    74: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    76: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    77: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    72: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
    75: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
    78: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
    96: Et.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
    95: Et.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
    98: Et.COMPRESSED_RGBA_BPTC_UNORM_EXT,
    99: Et.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT,
  };
function Vg(i) {
  const t = new Uint32Array(i);
  if (t[0] !== Rg) throw new Error("Invalid DDS file magic word");
  const e = new Uint32Array(i, 0, Ui / Uint32Array.BYTES_PER_ELEMENT),
    r = e[ki.HEIGHT],
    s = e[ki.WIDTH],
    n = e[ki.MIPMAP_COUNT],
    a = new Uint32Array(
      i,
      ki.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
      Ig / Uint32Array.BYTES_PER_ELEMENT
    ),
    o = a[Mg];
  if (o & Dg) {
    const h = a[Pg.FOURCC];
    if (h !== Gg) {
      const x = $g[h],
        y = dn + Ui,
        v = new Uint8Array(i, y);
      return [new er(v, { format: x, width: s, height: r, levels: n })];
    }
    const l = dn + Ui,
      c = new Uint32Array(t.buffer, l, ah / Uint32Array.BYTES_PER_ELEMENT),
      u = c[Gi.DXGI_FORMAT],
      d = c[Gi.RESOURCE_DIMENSION],
      f = c[Gi.MISC_FLAG],
      p = c[Gi.ARRAY_SIZE],
      m = Xg[u];
    if (m === void 0)
      throw new Error(
        `DDSParser cannot parse texture data with DXGI format ${u}`
      );
    if (f === Hg)
      throw new Error("DDSParser does not support cubemap textures");
    if (d === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const g = new Array(),
      _ = dn + Ui + ah;
    if (p === 1) g.push(new Uint8Array(i, _));
    else {
      const x = vs[m];
      let y = 0,
        v = s,
        T = r;
      for (let A = 0; A < n; A++) {
        const E = Math.max(1, (v + 3) & -4),
          B = Math.max(1, (T + 3) & -4),
          U = E * B * x;
        (y += U), (v = v >>> 1), (T = T >>> 1);
      }
      let M = _;
      for (let A = 0; A < p; A++) g.push(new Uint8Array(i, M, y)), (M += y);
    }
    return g.map(
      (x) => new er(x, { format: m, width: s, height: r, levels: n })
    );
  }
  throw o & Fg
    ? new Error("DDSParser does not support uncompressed texture data.")
    : o & Og
    ? new Error("DDSParser does not supported YUV uncompressed texture data.")
    : o & Lg
    ? new Error(
        "DDSParser does not support single-channel (lumninance) texture data!"
      )
    : o & Bg
    ? new Error(
        "DDSParser does not support single-channel (alpha) texture data!"
      )
    : new Error(
        "DDSParser failed to load a texture file due to an unknown reason!"
      );
}
const oh = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
  Wg = 67305985,
  Ht = {
    FILE_IDENTIFIER: 0,
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_TYPE_SIZE: 20,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    GL_BASE_INTERNAL_FORMAT: 32,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60,
  },
  ca = 64,
  hh = {
    [k.UNSIGNED_BYTE]: 1,
    [k.UNSIGNED_SHORT]: 2,
    [k.INT]: 4,
    [k.UNSIGNED_INT]: 4,
    [k.FLOAT]: 4,
    [k.HALF_FLOAT]: 8,
  },
  zg = {
    [w.RGBA]: 4,
    [w.RGB]: 3,
    [w.RG]: 2,
    [w.RED]: 1,
    [w.LUMINANCE]: 1,
    [w.LUMINANCE_ALPHA]: 2,
    [w.ALPHA]: 1,
  },
  jg = {
    [k.UNSIGNED_SHORT_4_4_4_4]: 2,
    [k.UNSIGNED_SHORT_5_5_5_1]: 2,
    [k.UNSIGNED_SHORT_5_6_5]: 2,
  };
function Yg(i, t, e = !1) {
  const r = new DataView(t);
  if (!qg(i, r)) return null;
  const s = r.getUint32(Ht.ENDIANNESS, !0) === Wg,
    n = r.getUint32(Ht.GL_TYPE, s),
    a = r.getUint32(Ht.GL_FORMAT, s),
    o = r.getUint32(Ht.GL_INTERNAL_FORMAT, s),
    h = r.getUint32(Ht.PIXEL_WIDTH, s),
    l = r.getUint32(Ht.PIXEL_HEIGHT, s) || 1,
    c = r.getUint32(Ht.PIXEL_DEPTH, s) || 1,
    u = r.getUint32(Ht.NUMBER_OF_ARRAY_ELEMENTS, s) || 1,
    d = r.getUint32(Ht.NUMBER_OF_FACES, s),
    f = r.getUint32(Ht.NUMBER_OF_MIPMAP_LEVELS, s),
    p = r.getUint32(Ht.BYTES_OF_KEY_VALUE_DATA, s);
  if (l === 0 || c !== 1) throw new Error("Only 2D textures are supported");
  if (d !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (u !== 1) throw new Error("WebGL does not support array textures");
  const m = 4,
    g = 4,
    _ = (h + 3) & -4,
    x = (l + 3) & -4,
    y = new Array(u);
  let v = h * l;
  n === 0 && (v = _ * x);
  let T;
  if (
    (n !== 0 ? (hh[n] ? (T = hh[n] * zg[a]) : (T = jg[n])) : (T = vs[o]),
    T === void 0)
  )
    throw new Error(
      "Unable to resolve the pixel format stored in the *.ktx file!"
    );
  const M = e ? Zg(r, p, s) : null;
  let A = v * T,
    E = h,
    B = l,
    U = _,
    Y = x,
    P = ca + p;
  for (let b = 0; b < f; b++) {
    const S = r.getUint32(P, s);
    let G = P + 4;
    for (let V = 0; V < u; V++) {
      let $ = y[V];
      $ || ($ = y[V] = new Array(f)),
        ($[b] = {
          levelID: b,
          levelWidth: f > 1 || n !== 0 ? E : U,
          levelHeight: f > 1 || n !== 0 ? B : Y,
          levelBuffer: new Uint8Array(t, G, A),
        }),
        (G += A);
    }
    (P += S + 4),
      (P = P % 4 !== 0 ? P + 4 - (P % 4) : P),
      (E = E >> 1 || 1),
      (B = B >> 1 || 1),
      (U = (E + m - 1) & ~(m - 1)),
      (Y = (B + g - 1) & ~(g - 1)),
      (A = U * Y * T);
  }
  return n !== 0
    ? {
        uncompressed: y.map((b) => {
          let S = b[0].levelBuffer,
            G = !1;
          return (
            n === k.FLOAT
              ? (S = new Float32Array(
                  b[0].levelBuffer.buffer,
                  b[0].levelBuffer.byteOffset,
                  b[0].levelBuffer.byteLength / 4
                ))
              : n === k.UNSIGNED_INT
              ? ((G = !0),
                (S = new Uint32Array(
                  b[0].levelBuffer.buffer,
                  b[0].levelBuffer.byteOffset,
                  b[0].levelBuffer.byteLength / 4
                )))
              : n === k.INT &&
                ((G = !0),
                (S = new Int32Array(
                  b[0].levelBuffer.buffer,
                  b[0].levelBuffer.byteOffset,
                  b[0].levelBuffer.byteLength / 4
                ))),
            {
              resource: new ws(S, {
                width: b[0].levelWidth,
                height: b[0].levelHeight,
              }),
              type: n,
              format: G ? Kg(a) : a,
            }
          );
        }),
        kvData: M,
      }
    : {
        compressed: y.map(
          (b) =>
            new er(null, {
              format: o,
              width: h,
              height: l,
              levels: f,
              levelBuffers: b,
            })
        ),
        kvData: M,
      };
}
function qg(i, t) {
  for (let e = 0; e < oh.length; e++)
    if (t.getUint8(e) !== oh[e])
      return console.error(`${i} is not a valid *.ktx file!`), !1;
  return !0;
}
function Kg(i) {
  switch (i) {
    case w.RGBA:
      return w.RGBA_INTEGER;
    case w.RGB:
      return w.RGB_INTEGER;
    case w.RG:
      return w.RG_INTEGER;
    case w.RED:
      return w.RED_INTEGER;
    default:
      return i;
  }
}
function Zg(i, t, e) {
  const r = new Map();
  let s = 0;
  for (; s < t; ) {
    const n = i.getUint32(ca + s, e),
      a = ca + s + 4,
      o = 3 - ((n + 3) % 4);
    if (n === 0 || n > t - s) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let h = 0;
    for (; h < n && i.getUint8(a + h) !== 0; h++);
    if (h === -1) {
      console.error(
        "KTXLoader: Failed to find null byte terminating kvData key"
      );
      break;
    }
    const l = new TextDecoder().decode(new Uint8Array(i.buffer, a, h)),
      c = new DataView(i.buffer, a + h + 1, n - h - 1);
    r.set(l, c), (s += 4 + n + o);
  }
  return r;
}
const Qg = {
  extension: { type: R.LoadParser, priority: qt.High },
  name: "loadDDS",
  test(i) {
    return Ge(i, ".dds");
  },
  async load(i, t, e) {
    const r = await (await F.ADAPTER.fetch(i)).arrayBuffer(),
      s = Vg(r).map((n) => {
        const a = new W(n, {
          mipmap: ce.OFF,
          alphaMode: Rt.NO_PREMULTIPLIED_ALPHA,
          resolution: Te(i),
          ...t.data,
        });
        return vi(a, e, i);
      });
    return s.length === 1 ? s[0] : s;
  },
  unload(i) {
    Array.isArray(i) ? i.forEach((t) => t.destroy(!0)) : i.destroy(!0);
  },
};
L.add(Qg);
const Jg = {
  extension: { type: R.LoadParser, priority: qt.High },
  name: "loadKTX",
  test(i) {
    return Ge(i, ".ktx");
  },
  async load(i, t, e) {
    const r = await (await F.ADAPTER.fetch(i)).arrayBuffer(),
      { compressed: s, uncompressed: n, kvData: a } = Yg(i, r),
      o = s ?? n,
      h = {
        mipmap: ce.OFF,
        alphaMode: Rt.NO_PREMULTIPLIED_ALPHA,
        resolution: Te(i),
        ...t.data,
      },
      l = o.map((c) => {
        o === n && Object.assign(h, { type: c.type, format: c.format });
        const u = c.resource ?? c,
          d = new W(u, h);
        return (d.ktxKeyValueData = a), vi(d, e, i);
      });
    return l.length === 1 ? l[0] : l;
  },
  unload(i) {
    Array.isArray(i) ? i.forEach((t) => t.destroy(!0)) : i.destroy(!0);
  },
};
L.add(Jg);
const ty = {
  extension: R.ResolveParser,
  test: (i) => {
    const t = mt.extname(i).slice(1);
    return ["basis", "ktx", "dds"].includes(t);
  },
  parse: (i) => {
    var e, r;
    const t = mt.extname(i).slice(1);
    if (t === "ktx") {
      const s = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx",
        ".bptc.ktx",
      ];
      if (s.some((n) => i.endsWith(n)))
        return {
          resolution: parseFloat(
            ((e = F.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"
          ),
          format: s.find((n) => i.endsWith(n)),
          src: i,
        };
    }
    return {
      resolution: parseFloat(
        ((r = F.RETINA_PREFIX.exec(i)) == null ? void 0 : r[1]) ?? "1"
      ),
      format: t,
      src: i,
    };
  },
};
L.add(ty);
const Hi = new j(),
  ey = 4,
  jl = class ti {
    constructor(t) {
      (this.renderer = t), (this._rendererPremultipliedAlpha = !1);
    }
    contextChange() {
      var e;
      const t =
        (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
      this._rendererPremultipliedAlpha = !!(
        t &&
        t.alpha &&
        t.premultipliedAlpha
      );
    }
    async image(t, e, r, s) {
      const n = new Image();
      return (n.src = await this.base64(t, e, r, s)), n;
    }
    async base64(t, e, r, s) {
      const n = this.canvas(t, s);
      if (n.toBlob !== void 0)
        return new Promise((a, o) => {
          n.toBlob(
            (h) => {
              if (!h) {
                o(new Error("ICanvas.toBlob failed!"));
                return;
              }
              const l = new FileReader();
              (l.onload = () => a(l.result)),
                (l.onerror = o),
                l.readAsDataURL(h);
            },
            e,
            r
          );
        });
      if (n.toDataURL !== void 0) return n.toDataURL(e, r);
      if (n.convertToBlob !== void 0) {
        const a = await n.convertToBlob({ type: e, quality: r });
        return new Promise((o, h) => {
          const l = new FileReader();
          (l.onload = () => o(l.result)), (l.onerror = h), l.readAsDataURL(a);
        });
      }
      throw new Error(
        "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented"
      );
    }
    canvas(t, e) {
      const {
        pixels: r,
        width: s,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, e);
      a && ti._flipY(r, s, n), o && ti._unpremultiplyAlpha(r);
      const h = new Lf(s, n, 1),
        l = new ImageData(new Uint8ClampedArray(r.buffer), s, n);
      return h.context.putImageData(l, 0, 0), h.canvas;
    }
    pixels(t, e) {
      const {
        pixels: r,
        width: s,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, e);
      return a && ti._flipY(r, s, n), o && ti._unpremultiplyAlpha(r), r;
    }
    _rawPixels(t, e) {
      const r = this.renderer;
      if (!r) throw new Error("The Extract has already been destroyed");
      let s,
        n = !1,
        a = !1,
        o,
        h = !1;
      t &&
        (t instanceof or
          ? (o = t)
          : ((o = r.generateTexture(t, {
              region: e,
              resolution: r.resolution,
              multisample: r.multisample,
            })),
            (h = !0),
            e && ((Hi.width = e.width), (Hi.height = e.height), (e = Hi))));
      const l = r.gl;
      if (o) {
        if (
          ((s = o.baseTexture.resolution),
          (e = e ?? o.frame),
          (n = !1),
          (a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === w.RGBA),
          !h)
        ) {
          r.renderTexture.bind(o);
          const f = o.framebuffer.glFramebuffers[r.CONTEXT_UID];
          f.blitFramebuffer && r.framebuffer.bind(f.blitFramebuffer);
        }
      } else
        (s = r.resolution),
          e || ((e = Hi), (e.width = r.width / s), (e.height = r.height / s)),
          (n = !0),
          (a = this._rendererPremultipliedAlpha),
          r.renderTexture.bind();
      const c = Math.max(Math.round(e.width * s), 1),
        u = Math.max(Math.round(e.height * s), 1),
        d = new Uint8Array(ey * c * u);
      return (
        l.readPixels(
          Math.round(e.x * s),
          Math.round(e.y * s),
          c,
          u,
          l.RGBA,
          l.UNSIGNED_BYTE,
          d
        ),
        h && (o == null || o.destroy(!0)),
        { pixels: d, width: c, height: u, flipY: n, premultipliedAlpha: a }
      );
    }
    destroy() {
      this.renderer = null;
    }
    static _flipY(t, e, r) {
      const s = e << 2,
        n = r >> 1,
        a = new Uint8Array(s);
      for (let o = 0; o < n; o++) {
        const h = o * s,
          l = (r - o - 1) * s;
        a.set(t.subarray(h, h + s)), t.copyWithin(h, l, l + s), t.set(a, l);
      }
    }
    static _unpremultiplyAlpha(t) {
      t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
      const e = t.length;
      for (let r = 0; r < e; r += 4) {
        const s = t[r + 3];
        if (s !== 0) {
          const n = 255.001 / s;
          (t[r] = t[r] * n + 0.5),
            (t[r + 1] = t[r + 1] * n + 0.5),
            (t[r + 2] = t[r + 2] * n + 0.5);
        }
      }
    }
  };
jl.extension = { name: "extract", type: R.RendererSystem };
let ry = jl;
L.add(ry);
const xs = {
  build(i) {
    const t = i.points;
    let e, r, s, n, a, o;
    if (i.type === At.CIRC) {
      const p = i.shape;
      (e = p.x), (r = p.y), (a = o = p.radius), (s = n = 0);
    } else if (i.type === At.ELIP) {
      const p = i.shape;
      (e = p.x), (r = p.y), (a = p.width), (o = p.height), (s = n = 0);
    } else {
      const p = i.shape,
        m = p.width / 2,
        g = p.height / 2;
      (e = p.x + m),
        (r = p.y + g),
        (a = o = Math.max(0, Math.min(p.radius, Math.min(m, g)))),
        (s = m - a),
        (n = g - o);
    }
    if (!(a >= 0 && o >= 0 && s >= 0 && n >= 0)) {
      t.length = 0;
      return;
    }
    const h = Math.ceil(2.3 * Math.sqrt(a + o)),
      l = h * 8 + (s ? 4 : 0) + (n ? 4 : 0);
    if (((t.length = l), l === 0)) return;
    if (h === 0) {
      (t.length = 8),
        (t[0] = t[6] = e + s),
        (t[1] = t[3] = r + n),
        (t[2] = t[4] = e - s),
        (t[5] = t[7] = r - n);
      return;
    }
    let c = 0,
      u = h * 4 + (s ? 2 : 0) + 2,
      d = u,
      f = l;
    {
      const p = s + a,
        m = n,
        g = e + p,
        _ = e - p,
        x = r + m;
      if (((t[c++] = g), (t[c++] = x), (t[--u] = x), (t[--u] = _), n)) {
        const y = r - m;
        (t[d++] = _), (t[d++] = y), (t[--f] = y), (t[--f] = g);
      }
    }
    for (let p = 1; p < h; p++) {
      const m = (Math.PI / 2) * (p / h),
        g = s + Math.cos(m) * a,
        _ = n + Math.sin(m) * o,
        x = e + g,
        y = e - g,
        v = r + _,
        T = r - _;
      (t[c++] = x),
        (t[c++] = v),
        (t[--u] = v),
        (t[--u] = y),
        (t[d++] = y),
        (t[d++] = T),
        (t[--f] = T),
        (t[--f] = x);
    }
    {
      const p = s,
        m = n + o,
        g = e + p,
        _ = e - p,
        x = r + m,
        y = r - m;
      (t[c++] = g),
        (t[c++] = x),
        (t[--f] = y),
        (t[--f] = g),
        s && ((t[c++] = _), (t[c++] = x), (t[--f] = y), (t[--f] = _));
    }
  },
  triangulate(i, t) {
    const e = i.points,
      r = t.points,
      s = t.indices;
    if (e.length === 0) return;
    let n = r.length / 2;
    const a = n;
    let o, h;
    if (i.type !== At.RREC) {
      const c = i.shape;
      (o = c.x), (h = c.y);
    } else {
      const c = i.shape;
      (o = c.x + c.width / 2), (h = c.y + c.height / 2);
    }
    const l = i.matrix;
    r.push(
      i.matrix ? l.a * o + l.c * h + l.tx : o,
      i.matrix ? l.b * o + l.d * h + l.ty : h
    ),
      n++,
      r.push(e[0], e[1]);
    for (let c = 2; c < e.length; c += 2)
      r.push(e[c], e[c + 1]), s.push(n++, a, n);
    s.push(a + 1, a, n);
  },
};
function lh(i, t = !1) {
  const e = i.length;
  if (e < 6) return;
  let r = 0;
  for (let s = 0, n = i[e - 2], a = i[e - 1]; s < e; s += 2) {
    const o = i[s],
      h = i[s + 1];
    (r += (o - n) * (h + a)), (n = o), (a = h);
  }
  if ((!t && r > 0) || (t && r <= 0)) {
    const s = e / 2;
    for (let n = s + (s % 2); n < e; n += 2) {
      const a = e - n - 2,
        o = e - n - 1,
        h = n,
        l = n + 1;
      ([i[a], i[h]] = [i[h], i[a]]), ([i[o], i[l]] = [i[l], i[o]]);
    }
  }
}
const Yl = {
    build(i) {
      i.points = i.shape.points.slice();
    },
    triangulate(i, t) {
      let e = i.points;
      const r = i.holes,
        s = t.points,
        n = t.indices;
      if (e.length >= 6) {
        lh(e, !1);
        const a = [];
        for (let l = 0; l < r.length; l++) {
          const c = r[l];
          lh(c.points, !0), a.push(e.length / 2), (e = e.concat(c.points));
        }
        const o = Uc(e, a, 2);
        if (!o) return;
        const h = s.length / 2;
        for (let l = 0; l < o.length; l += 3)
          n.push(o[l] + h), n.push(o[l + 1] + h), n.push(o[l + 2] + h);
        for (let l = 0; l < e.length; l++) s.push(e[l]);
      }
    },
  },
  iy = {
    build(i) {
      const t = i.shape,
        e = t.x,
        r = t.y,
        s = t.width,
        n = t.height,
        a = i.points;
      (a.length = 0),
        s >= 0 && n >= 0 && a.push(e, r, e + s, r, e + s, r + n, e, r + n);
    },
    triangulate(i, t) {
      const e = i.points,
        r = t.points;
      if (e.length === 0) return;
      const s = r.length / 2;
      r.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]),
        t.indices.push(s, s + 1, s + 2, s + 1, s + 2, s + 3);
    },
  },
  sy = {
    build(i) {
      xs.build(i);
    },
    triangulate(i, t) {
      xs.triangulate(i, t);
    },
  };
var Dt = ((i) => (
    (i.MITER = "miter"), (i.BEVEL = "bevel"), (i.ROUND = "round"), i
  ))(Dt || {}),
  Fe = ((i) => (
    (i.BUTT = "butt"), (i.ROUND = "round"), (i.SQUARE = "square"), i
  ))(Fe || {});
const kr = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(i, t = 20) {
    if (!this.adaptive || !i || isNaN(i)) return t;
    let e = Math.ceil(i / this.maxLength);
    return (
      e < this.minSegments
        ? (e = this.minSegments)
        : e > this.maxSegments && (e = this.maxSegments),
      e
    );
  },
};
class ch {
  static curveTo(t, e, r, s, n, a) {
    const o = a[a.length - 2],
      h = a[a.length - 1] - e,
      l = o - t,
      c = s - e,
      u = r - t,
      d = Math.abs(h * u - l * c);
    if (d < 1e-8 || n === 0)
      return (
        (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e), null
      );
    const f = h * h + l * l,
      p = c * c + u * u,
      m = h * c + l * u,
      g = (n * Math.sqrt(f)) / d,
      _ = (n * Math.sqrt(p)) / d,
      x = (g * m) / f,
      y = (_ * m) / p,
      v = g * u + _ * l,
      T = g * c + _ * h,
      M = l * (_ + x),
      A = h * (_ + x),
      E = u * (g + y),
      B = c * (g + y),
      U = Math.atan2(A - T, M - v),
      Y = Math.atan2(B - T, E - v);
    return {
      cx: v + t,
      cy: T + e,
      radius: n,
      startAngle: U,
      endAngle: Y,
      anticlockwise: l * c > u * h,
    };
  }
  static arc(t, e, r, s, n, a, o, h, l) {
    const c = o - a,
      u = kr._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / us) * 40),
      d = c / (u * 2),
      f = d * 2,
      p = Math.cos(d),
      m = Math.sin(d),
      g = u - 1,
      _ = (g % 1) / g;
    for (let x = 0; x <= g; ++x) {
      const y = x + _ * x,
        v = d + a + f * y,
        T = Math.cos(v),
        M = -Math.sin(v);
      l.push((p * T + m * M) * n + r, (p * -M + m * T) * n + s);
    }
  }
}
class ny {
  constructor() {
    this.reset();
  }
  begin(t, e, r) {
    this.reset(), (this.style = t), (this.start = e), (this.attribStart = r);
  }
  end(t, e) {
    (this.attribSize = e - this.attribStart), (this.size = t - this.start);
  }
  reset() {
    (this.style = null),
      (this.size = 0),
      (this.start = 0),
      (this.attribStart = 0),
      (this.attribSize = 0);
  }
}
class Da {
  static curveLength(t, e, r, s, n, a, o, h) {
    let l = 0,
      c = 0,
      u = 0,
      d = 0,
      f = 0,
      p = 0,
      m = 0,
      g = 0,
      _ = 0,
      x = 0,
      y = 0,
      v = t,
      T = e;
    for (let M = 1; M <= 10; ++M)
      (c = M / 10),
        (u = c * c),
        (d = u * c),
        (f = 1 - c),
        (p = f * f),
        (m = p * f),
        (g = m * t + 3 * p * c * r + 3 * f * u * n + d * o),
        (_ = m * e + 3 * p * c * s + 3 * f * u * a + d * h),
        (x = v - g),
        (y = T - _),
        (v = g),
        (T = _),
        (l += Math.sqrt(x * x + y * y));
    return l;
  }
  static curveTo(t, e, r, s, n, a, o) {
    const h = o[o.length - 2],
      l = o[o.length - 1];
    o.length -= 2;
    const c = kr._segmentsCount(Da.curveLength(h, l, t, e, r, s, n, a));
    let u = 0,
      d = 0,
      f = 0,
      p = 0,
      m = 0;
    o.push(h, l);
    for (let g = 1, _ = 0; g <= c; ++g)
      (_ = g / c),
        (u = 1 - _),
        (d = u * u),
        (f = d * u),
        (p = _ * _),
        (m = p * _),
        o.push(
          f * h + 3 * d * _ * t + 3 * u * p * r + m * n,
          f * l + 3 * d * _ * e + 3 * u * p * s + m * a
        );
  }
}
function uh(i, t, e, r, s, n, a, o) {
  const h = i - e * s,
    l = t - r * s,
    c = i + e * n,
    u = t + r * n;
  let d, f;
  a ? ((d = r), (f = -e)) : ((d = -r), (f = e));
  const p = h + d,
    m = l + f,
    g = c + d,
    _ = u + f;
  return o.push(p, m, g, _), 2;
}
function $e(i, t, e, r, s, n, a, o) {
  const h = e - i,
    l = r - t;
  let c = Math.atan2(h, l),
    u = Math.atan2(s - i, n - t);
  o && c < u ? (c += Math.PI * 2) : !o && c > u && (u += Math.PI * 2);
  let d = c;
  const f = u - c,
    p = Math.abs(f),
    m = Math.sqrt(h * h + l * l),
    g = (((15 * p * Math.sqrt(m)) / Math.PI) >> 0) + 1,
    _ = f / g;
  if (((d += _), o)) {
    a.push(i, t, e, r);
    for (let x = 1, y = d; x < g; x++, y += _)
      a.push(i, t, i + Math.sin(y) * m, t + Math.cos(y) * m);
    a.push(i, t, s, n);
  } else {
    a.push(e, r, i, t);
    for (let x = 1, y = d; x < g; x++, y += _)
      a.push(i + Math.sin(y) * m, t + Math.cos(y) * m, i, t);
    a.push(s, n, i, t);
  }
  return g * 2;
}
function ay(i, t) {
  const e = i.shape;
  let r = i.points || e.points.slice();
  const s = t.closePointEps;
  if (r.length === 0) return;
  const n = i.lineStyle,
    a = new Q(r[0], r[1]),
    o = new Q(r[r.length - 2], r[r.length - 1]),
    h = e.type !== At.POLY || e.closeStroke,
    l = Math.abs(a.x - o.x) < s && Math.abs(a.y - o.y) < s;
  if (h) {
    (r = r.slice()),
      l && (r.pop(), r.pop(), o.set(r[r.length - 2], r[r.length - 1]));
    const $ = (a.x + o.x) * 0.5,
      z = (o.y + a.y) * 0.5;
    r.unshift($, z), r.push($, z);
  }
  const c = t.points,
    u = r.length / 2;
  let d = r.length;
  const f = c.length / 2,
    p = n.width / 2,
    m = p * p,
    g = n.miterLimit * n.miterLimit;
  let _ = r[0],
    x = r[1],
    y = r[2],
    v = r[3],
    T = 0,
    M = 0,
    A = -(x - v),
    E = _ - y,
    B = 0,
    U = 0,
    Y = Math.sqrt(A * A + E * E);
  (A /= Y), (E /= Y), (A *= p), (E *= p);
  const P = n.alignment,
    b = (1 - P) * 2,
    S = P * 2;
  h ||
    (n.cap === Fe.ROUND
      ? (d +=
          $e(
            _ - A * (b - S) * 0.5,
            x - E * (b - S) * 0.5,
            _ - A * b,
            x - E * b,
            _ + A * S,
            x + E * S,
            c,
            !0
          ) + 2)
      : n.cap === Fe.SQUARE && (d += uh(_, x, A, E, b, S, !0, c))),
    c.push(_ - A * b, x - E * b, _ + A * S, x + E * S);
  for (let $ = 1; $ < u - 1; ++$) {
    (_ = r[($ - 1) * 2]),
      (x = r[($ - 1) * 2 + 1]),
      (y = r[$ * 2]),
      (v = r[$ * 2 + 1]),
      (T = r[($ + 1) * 2]),
      (M = r[($ + 1) * 2 + 1]),
      (A = -(x - v)),
      (E = _ - y),
      (Y = Math.sqrt(A * A + E * E)),
      (A /= Y),
      (E /= Y),
      (A *= p),
      (E *= p),
      (B = -(v - M)),
      (U = y - T),
      (Y = Math.sqrt(B * B + U * U)),
      (B /= Y),
      (U /= Y),
      (B *= p),
      (U *= p);
    const z = y - _,
      ht = x - v,
      I = y - T,
      C = M - v,
      Z = z * I + ht * C,
      J = ht * I - C * z,
      tt = J < 0;
    if (Math.abs(J) < 0.001 * Math.abs(Z)) {
      c.push(y - A * b, v - E * b, y + A * S, v + E * S),
        Z >= 0 &&
          (n.join === Dt.ROUND
            ? (d +=
                $e(y, v, y - A * b, v - E * b, y - B * b, v - U * b, c, !1) + 4)
            : (d += 2),
          c.push(y - B * S, v - U * S, y + B * b, v + U * b));
      continue;
    }
    const gt = (-A + _) * (-E + v) - (-A + y) * (-E + x),
      ct = (-B + T) * (-U + v) - (-B + y) * (-U + M),
      yt = (z * ct - I * gt) / J,
      wt = (C * gt - ht * ct) / J,
      Pt = (yt - y) * (yt - y) + (wt - v) * (wt - v),
      Tt = y + (yt - y) * b,
      st = v + (wt - v) * b,
      ut = y - (yt - y) * S,
      ft = v - (wt - v) * S,
      Kt = Math.min(z * z + ht * ht, I * I + C * C),
      Zt = tt ? b : S,
      Vr = Kt + Zt * Zt * m,
      gc = Pt <= Vr;
    let xi = n.join;
    if ((xi === Dt.MITER && Pt / m > g && (xi = Dt.BEVEL), gc))
      switch (xi) {
        case Dt.MITER: {
          c.push(Tt, st, ut, ft);
          break;
        }
        case Dt.BEVEL: {
          tt
            ? c.push(Tt, st, y + A * S, v + E * S, Tt, st, y + B * S, v + U * S)
            : c.push(
                y - A * b,
                v - E * b,
                ut,
                ft,
                y - B * b,
                v - U * b,
                ut,
                ft
              ),
            (d += 2);
          break;
        }
        case Dt.ROUND: {
          tt
            ? (c.push(Tt, st, y + A * S, v + E * S),
              (d +=
                $e(y, v, y + A * S, v + E * S, y + B * S, v + U * S, c, !0) +
                4),
              c.push(Tt, st, y + B * S, v + U * S))
            : (c.push(y - A * b, v - E * b, ut, ft),
              (d +=
                $e(y, v, y - A * b, v - E * b, y - B * b, v - U * b, c, !1) +
                4),
              c.push(y - B * b, v - U * b, ut, ft));
          break;
        }
      }
    else {
      switch ((c.push(y - A * b, v - E * b, y + A * S, v + E * S), xi)) {
        case Dt.MITER: {
          tt ? c.push(ut, ft, ut, ft) : c.push(Tt, st, Tt, st), (d += 2);
          break;
        }
        case Dt.ROUND: {
          tt
            ? (d +=
                $e(y, v, y + A * S, v + E * S, y + B * S, v + U * S, c, !0) + 2)
            : (d +=
                $e(y, v, y - A * b, v - E * b, y - B * b, v - U * b, c, !1) +
                2);
          break;
        }
      }
      c.push(y - B * b, v - U * b, y + B * S, v + U * S), (d += 2);
    }
  }
  (_ = r[(u - 2) * 2]),
    (x = r[(u - 2) * 2 + 1]),
    (y = r[(u - 1) * 2]),
    (v = r[(u - 1) * 2 + 1]),
    (A = -(x - v)),
    (E = _ - y),
    (Y = Math.sqrt(A * A + E * E)),
    (A /= Y),
    (E /= Y),
    (A *= p),
    (E *= p),
    c.push(y - A * b, v - E * b, y + A * S, v + E * S),
    h ||
      (n.cap === Fe.ROUND
        ? (d +=
            $e(
              y - A * (b - S) * 0.5,
              v - E * (b - S) * 0.5,
              y - A * b,
              v - E * b,
              y + A * S,
              v + E * S,
              c,
              !1
            ) + 2)
        : n.cap === Fe.SQUARE && (d += uh(y, v, A, E, b, S, !1, c)));
  const G = t.indices,
    V = kr.epsilon * kr.epsilon;
  for (let $ = f; $ < d + f - 2; ++$)
    (_ = c[$ * 2]),
      (x = c[$ * 2 + 1]),
      (y = c[($ + 1) * 2]),
      (v = c[($ + 1) * 2 + 1]),
      (T = c[($ + 2) * 2]),
      (M = c[($ + 2) * 2 + 1]),
      !(Math.abs(_ * (v - M) + y * (M - x) + T * (x - v)) < V) &&
        G.push($, $ + 1, $ + 2);
}
function oy(i, t) {
  let e = 0;
  const r = i.shape,
    s = i.points || r.points,
    n = r.type !== At.POLY || r.closeStroke;
  if (s.length === 0) return;
  const a = t.points,
    o = t.indices,
    h = s.length / 2,
    l = a.length / 2;
  let c = l;
  for (a.push(s[0], s[1]), e = 1; e < h; e++)
    a.push(s[e * 2], s[e * 2 + 1]), o.push(c, c + 1), c++;
  n && o.push(c, l);
}
function dh(i, t) {
  i.lineStyle.native ? oy(i, t) : ay(i, t);
}
class Fa {
  static curveLength(t, e, r, s, n, a) {
    const o = t - 2 * r + n,
      h = e - 2 * s + a,
      l = 2 * r - 2 * t,
      c = 2 * s - 2 * e,
      u = 4 * (o * o + h * h),
      d = 4 * (o * l + h * c),
      f = l * l + c * c,
      p = 2 * Math.sqrt(u + d + f),
      m = Math.sqrt(u),
      g = 2 * u * m,
      _ = 2 * Math.sqrt(f),
      x = d / m;
    return (
      (g * p +
        m * d * (p - _) +
        (4 * f * u - d * d) * Math.log((2 * m + x + p) / (x + _))) /
      (4 * g)
    );
  }
  static curveTo(t, e, r, s, n) {
    const a = n[n.length - 2],
      o = n[n.length - 1],
      h = kr._segmentsCount(Fa.curveLength(a, o, t, e, r, s));
    let l = 0,
      c = 0;
    for (let u = 1; u <= h; ++u) {
      const d = u / h;
      (l = a + (t - a) * d),
        (c = o + (e - o) * d),
        n.push(l + (t + (r - t) * d - l) * d, c + (e + (s - e) * d - c) * d);
    }
  }
}
const fn = {
    [At.POLY]: Yl,
    [At.CIRC]: xs,
    [At.ELIP]: xs,
    [At.RECT]: iy,
    [At.RREC]: sy,
  },
  fh = [],
  $i = [];
class bs {
  constructor(t, e = null, r = null, s = null) {
    (this.points = []),
      (this.holes = []),
      (this.shape = t),
      (this.lineStyle = r),
      (this.fillStyle = e),
      (this.matrix = s),
      (this.type = t.type);
  }
  clone() {
    return new bs(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    (this.shape = null),
      (this.holes.length = 0),
      (this.holes = null),
      (this.points.length = 0),
      (this.points = null),
      (this.lineStyle = null),
      (this.fillStyle = null);
  }
}
const fr = new Q(),
  ql = class Kl extends el {
    constructor() {
      super(),
        (this.closePointEps = 1e-4),
        (this.boundsPadding = 0),
        (this.uvsFloat32 = null),
        (this.indicesUint16 = null),
        (this.batchable = !1),
        (this.points = []),
        (this.colors = []),
        (this.uvs = []),
        (this.indices = []),
        (this.textureIds = []),
        (this.graphicsData = []),
        (this.drawCalls = []),
        (this.batchDirty = -1),
        (this.batches = []),
        (this.dirty = 0),
        (this.cacheDirty = -1),
        (this.clearDirty = 0),
        (this.shapeIndex = 0),
        (this._bounds = new gs()),
        (this.boundsDirty = -1);
    }
    get bounds() {
      return (
        this.updateBatches(),
        this.boundsDirty !== this.dirty &&
          ((this.boundsDirty = this.dirty), this.calculateBounds()),
        this._bounds
      );
    }
    invalidate() {
      (this.boundsDirty = -1),
        this.dirty++,
        this.batchDirty++,
        (this.shapeIndex = 0),
        (this.points.length = 0),
        (this.colors.length = 0),
        (this.uvs.length = 0),
        (this.indices.length = 0),
        (this.textureIds.length = 0);
      for (let t = 0; t < this.drawCalls.length; t++)
        this.drawCalls[t].texArray.clear(), $i.push(this.drawCalls[t]);
      this.drawCalls.length = 0;
      for (let t = 0; t < this.batches.length; t++) {
        const e = this.batches[t];
        e.reset(), fh.push(e);
      }
      this.batches.length = 0;
    }
    clear() {
      return (
        this.graphicsData.length > 0 &&
          (this.invalidate(),
          this.clearDirty++,
          (this.graphicsData.length = 0)),
        this
      );
    }
    drawShape(t, e = null, r = null, s = null) {
      const n = new bs(t, e, r, s);
      return this.graphicsData.push(n), this.dirty++, this;
    }
    drawHole(t, e = null) {
      if (!this.graphicsData.length) return null;
      const r = new bs(t, null, null, e),
        s = this.graphicsData[this.graphicsData.length - 1];
      return (r.lineStyle = s.lineStyle), s.holes.push(r), this.dirty++, this;
    }
    destroy() {
      super.destroy();
      for (let t = 0; t < this.graphicsData.length; ++t)
        this.graphicsData[t].destroy();
      (this.points.length = 0),
        (this.points = null),
        (this.colors.length = 0),
        (this.colors = null),
        (this.uvs.length = 0),
        (this.uvs = null),
        (this.indices.length = 0),
        (this.indices = null),
        this.indexBuffer.destroy(),
        (this.indexBuffer = null),
        (this.graphicsData.length = 0),
        (this.graphicsData = null),
        (this.drawCalls.length = 0),
        (this.drawCalls = null),
        (this.batches.length = 0),
        (this.batches = null),
        (this._bounds = null);
    }
    containsPoint(t) {
      const e = this.graphicsData;
      for (let r = 0; r < e.length; ++r) {
        const s = e[r];
        if (
          s.fillStyle.visible &&
          s.shape &&
          (s.matrix ? s.matrix.applyInverse(t, fr) : fr.copyFrom(t),
          s.shape.contains(fr.x, fr.y))
        ) {
          let n = !1;
          if (s.holes) {
            for (let a = 0; a < s.holes.length; a++)
              if (s.holes[a].shape.contains(fr.x, fr.y)) {
                n = !0;
                break;
              }
          }
          if (!n) return !0;
        }
      }
      return !1;
    }
    updateBatches() {
      if (!this.graphicsData.length) {
        this.batchable = !0;
        return;
      }
      if (!this.validateBatching()) return;
      this.cacheDirty = this.dirty;
      const t = this.uvs,
        e = this.graphicsData;
      let r = null,
        s = null;
      this.batches.length > 0 &&
        ((r = this.batches[this.batches.length - 1]), (s = r.style));
      for (let h = this.shapeIndex; h < e.length; h++) {
        this.shapeIndex++;
        const l = e[h],
          c = l.fillStyle,
          u = l.lineStyle;
        fn[l.type].build(l),
          l.matrix && this.transformPoints(l.points, l.matrix),
          (c.visible || u.visible) && this.processHoles(l.holes);
        for (let d = 0; d < 2; d++) {
          const f = d === 0 ? c : u;
          if (!f.visible) continue;
          const p = f.texture.baseTexture,
            m = this.indices.length,
            g = this.points.length / 2;
          (p.wrapMode = Oe.REPEAT),
            d === 0 ? this.processFill(l) : this.processLine(l);
          const _ = this.points.length / 2 - g;
          _ !== 0 &&
            (r && !this._compareStyles(s, f) && (r.end(m, g), (r = null)),
            r ||
              ((r = fh.pop() || new ny()),
              r.begin(f, m, g),
              this.batches.push(r),
              (s = f)),
            this.addUvs(this.points, t, f.texture, g, _, f.matrix));
        }
      }
      const n = this.indices.length,
        a = this.points.length / 2;
      if ((r && r.end(n, a), this.batches.length === 0)) {
        this.batchable = !0;
        return;
      }
      const o = a > 65535;
      this.indicesUint16 &&
      this.indices.length === this.indicesUint16.length &&
      o === this.indicesUint16.BYTES_PER_ELEMENT > 2
        ? this.indicesUint16.set(this.indices)
        : (this.indicesUint16 = o
            ? new Uint32Array(this.indices)
            : new Uint16Array(this.indices)),
        (this.batchable = this.isBatchable()),
        this.batchable ? this.packBatches() : this.buildDrawCalls();
    }
    _compareStyles(t, e) {
      return !(
        !t ||
        !e ||
        t.texture.baseTexture !== e.texture.baseTexture ||
        t.color + t.alpha !== e.color + e.alpha ||
        !!t.native != !!e.native
      );
    }
    validateBatching() {
      if (this.dirty === this.cacheDirty || !this.graphicsData.length)
        return !1;
      for (let t = 0, e = this.graphicsData.length; t < e; t++) {
        const r = this.graphicsData[t],
          s = r.fillStyle,
          n = r.lineStyle;
        if (
          (s && !s.texture.baseTexture.valid) ||
          (n && !n.texture.baseTexture.valid)
        )
          return !1;
      }
      return !0;
    }
    packBatches() {
      this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
      const t = this.batches;
      for (let e = 0, r = t.length; e < r; e++) {
        const s = t[e];
        for (let n = 0; n < s.size; n++) {
          const a = s.start + n;
          this.indicesUint16[a] = this.indicesUint16[a] - s.attribStart;
        }
      }
    }
    isBatchable() {
      if (this.points.length > 65535 * 2) return !1;
      const t = this.batches;
      for (let e = 0; e < t.length; e++) if (t[e].style.native) return !1;
      return this.points.length < Kl.BATCHABLE_SIZE * 2;
    }
    buildDrawCalls() {
      let t = ++W._globalBatch;
      for (let u = 0; u < this.drawCalls.length; u++)
        this.drawCalls[u].texArray.clear(), $i.push(this.drawCalls[u]);
      this.drawCalls.length = 0;
      const e = this.colors,
        r = this.textureIds;
      let s = $i.pop();
      s || ((s = new $n()), (s.texArray = new zn())),
        (s.texArray.count = 0),
        (s.start = 0),
        (s.size = 0),
        (s.type = ae.TRIANGLES);
      let n = 0,
        a = null,
        o = 0,
        h = !1,
        l = ae.TRIANGLES,
        c = 0;
      this.drawCalls.push(s);
      for (let u = 0; u < this.batches.length; u++) {
        const d = this.batches[u],
          f = 8,
          p = d.style,
          m = p.texture.baseTexture;
        h !== !!p.native &&
          ((h = !!p.native),
          (l = h ? ae.LINES : ae.TRIANGLES),
          (a = null),
          (n = f),
          t++),
          a !== m &&
            ((a = m),
            m._batchEnabled !== t &&
              (n === f &&
                (t++,
                (n = 0),
                s.size > 0 &&
                  ((s = $i.pop()),
                  s || ((s = new $n()), (s.texArray = new zn())),
                  this.drawCalls.push(s)),
                (s.start = c),
                (s.size = 0),
                (s.texArray.count = 0),
                (s.type = l)),
              (m.touched = 1),
              (m._batchEnabled = t),
              (m._batchLocation = n),
              (m.wrapMode = Oe.REPEAT),
              (s.texArray.elements[s.texArray.count++] = m),
              n++)),
          (s.size += d.size),
          (c += d.size),
          (o = m._batchLocation),
          this.addColors(e, p.color, p.alpha, d.attribSize, d.attribStart),
          this.addTextureIds(r, o, d.attribSize, d.attribStart);
      }
      (W._globalBatch = t), this.packAttributes();
    }
    packAttributes() {
      const t = this.points,
        e = this.uvs,
        r = this.colors,
        s = this.textureIds,
        n = new ArrayBuffer(t.length * 3 * 4),
        a = new Float32Array(n),
        o = new Uint32Array(n);
      let h = 0;
      for (let l = 0; l < t.length / 2; l++)
        (a[h++] = t[l * 2]),
          (a[h++] = t[l * 2 + 1]),
          (a[h++] = e[l * 2]),
          (a[h++] = e[l * 2 + 1]),
          (o[h++] = r[l]),
          (a[h++] = s[l]);
      this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
    }
    processFill(t) {
      t.holes.length
        ? Yl.triangulate(t, this)
        : fn[t.type].triangulate(t, this);
    }
    processLine(t) {
      dh(t, this);
      for (let e = 0; e < t.holes.length; e++) dh(t.holes[e], this);
    }
    processHoles(t) {
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        fn[r.type].build(r),
          r.matrix && this.transformPoints(r.points, r.matrix);
      }
    }
    calculateBounds() {
      const t = this._bounds;
      t.clear(),
        t.addVertexData(this.points, 0, this.points.length),
        t.pad(this.boundsPadding, this.boundsPadding);
    }
    transformPoints(t, e) {
      for (let r = 0; r < t.length / 2; r++) {
        const s = t[r * 2],
          n = t[r * 2 + 1];
        (t[r * 2] = e.a * s + e.c * n + e.tx),
          (t[r * 2 + 1] = e.b * s + e.d * n + e.ty);
      }
    }
    addColors(t, e, r, s, n = 0) {
      const a = rt.shared.setValue(e).toLittleEndianNumber(),
        o = rt.shared.setValue(a).toPremultiplied(r);
      t.length = Math.max(t.length, n + s);
      for (let h = 0; h < s; h++) t[n + h] = o;
    }
    addTextureIds(t, e, r, s = 0) {
      t.length = Math.max(t.length, s + r);
      for (let n = 0; n < r; n++) t[s + n] = e;
    }
    addUvs(t, e, r, s, n, a = null) {
      let o = 0;
      const h = e.length,
        l = r.frame;
      for (; o < n; ) {
        let u = t[(s + o) * 2],
          d = t[(s + o) * 2 + 1];
        if (a) {
          const f = a.a * u + a.c * d + a.tx;
          (d = a.b * u + a.d * d + a.ty), (u = f);
        }
        o++, e.push(u / l.width, d / l.height);
      }
      const c = r.baseTexture;
      (l.width < c.width || l.height < c.height) && this.adjustUvs(e, r, h, n);
    }
    adjustUvs(t, e, r, s) {
      const n = e.baseTexture,
        a = 1e-6,
        o = r + s * 2,
        h = e.frame,
        l = h.width / n.width,
        c = h.height / n.height;
      let u = h.x / h.width,
        d = h.y / h.height,
        f = Math.floor(t[r] + a),
        p = Math.floor(t[r + 1] + a);
      for (let m = r + 2; m < o; m += 2)
        (f = Math.min(f, Math.floor(t[m] + a))),
          (p = Math.min(p, Math.floor(t[m + 1] + a)));
      (u -= f), (d -= p);
      for (let m = r; m < o; m += 2)
        (t[m] = (t[m] + u) * l), (t[m + 1] = (t[m + 1] + d) * c);
    }
  };
ql.BATCHABLE_SIZE = 100;
let hy = ql;
class Ms {
  constructor() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = O.WHITE),
      (this.matrix = null),
      (this.visible = !1),
      this.reset();
  }
  clone() {
    const t = new Ms();
    return (
      (t.color = this.color),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.matrix = this.matrix),
      (t.visible = this.visible),
      t
    );
  }
  reset() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = O.WHITE),
      (this.matrix = null),
      (this.visible = !1);
  }
  destroy() {
    (this.texture = null), (this.matrix = null);
  }
}
class Oa extends Ms {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.alignment = 0.5),
      (this.native = !1),
      (this.cap = Fe.BUTT),
      (this.join = Dt.MITER),
      (this.miterLimit = 10);
  }
  clone() {
    const t = new Oa();
    return (
      (t.color = this.color),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.matrix = this.matrix),
      (t.visible = this.visible),
      (t.width = this.width),
      (t.alignment = this.alignment),
      (t.native = this.native),
      (t.cap = this.cap),
      (t.join = this.join),
      (t.miterLimit = this.miterLimit),
      t
    );
  }
  reset() {
    super.reset(),
      (this.color = 0),
      (this.alignment = 0.5),
      (this.width = 0),
      (this.native = !1),
      (this.cap = Fe.BUTT),
      (this.join = Dt.MITER),
      (this.miterLimit = 10);
  }
}
const pn = {},
  ua = class ts extends Ut {
    constructor(t = null) {
      super(),
        (this.shader = null),
        (this.pluginName = "batch"),
        (this.currentPath = null),
        (this.batches = []),
        (this.batchTint = -1),
        (this.batchDirty = -1),
        (this.vertexData = null),
        (this._fillStyle = new Ms()),
        (this._lineStyle = new Oa()),
        (this._matrix = null),
        (this._holeMode = !1),
        (this.state = ue.for2d()),
        (this._geometry = t || new hy()),
        this._geometry.refCount++,
        (this._transformID = -1),
        (this._tintColor = new rt(16777215)),
        (this.blendMode = X.NORMAL);
    }
    get geometry() {
      return this._geometry;
    }
    clone() {
      return this.finishPoly(), new ts(this._geometry);
    }
    set blendMode(t) {
      this.state.blendMode = t;
    }
    get blendMode() {
      return this.state.blendMode;
    }
    get tint() {
      return this._tintColor.value;
    }
    set tint(t) {
      this._tintColor.setValue(t);
    }
    get fill() {
      return this._fillStyle;
    }
    get line() {
      return this._lineStyle;
    }
    lineStyle(t = null, e = 0, r, s = 0.5, n = !1) {
      return (
        typeof t == "number" &&
          (t = { width: t, color: e, alpha: r, alignment: s, native: n }),
        this.lineTextureStyle(t)
      );
    }
    lineTextureStyle(t) {
      const e = {
        width: 0,
        texture: O.WHITE,
        color: t != null && t.texture ? 16777215 : 0,
        matrix: null,
        alignment: 0.5,
        native: !1,
        cap: Fe.BUTT,
        join: Dt.MITER,
        miterLimit: 10,
      };
      (t = Object.assign(e, t)),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
      const r = t.width > 0 && t.alpha > 0;
      return (
        r
          ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
            Object.assign(this._lineStyle, { visible: r }, t))
          : this._lineStyle.reset(),
        this
      );
    }
    startPoly() {
      if (this.currentPath) {
        const t = this.currentPath.points,
          e = this.currentPath.points.length;
        e > 2 &&
          (this.drawShape(this.currentPath),
          (this.currentPath = new tr()),
          (this.currentPath.closeStroke = !1),
          this.currentPath.points.push(t[e - 2], t[e - 1]));
      } else (this.currentPath = new tr()), (this.currentPath.closeStroke = !1);
    }
    finishPoly() {
      this.currentPath &&
        (this.currentPath.points.length > 2
          ? (this.drawShape(this.currentPath), (this.currentPath = null))
          : (this.currentPath.points.length = 0));
    }
    moveTo(t, e) {
      return (
        this.startPoly(),
        (this.currentPath.points[0] = t),
        (this.currentPath.points[1] = e),
        this
      );
    }
    lineTo(t, e) {
      this.currentPath || this.moveTo(0, 0);
      const r = this.currentPath.points,
        s = r[r.length - 2],
        n = r[r.length - 1];
      return (s !== t || n !== e) && r.push(t, e), this;
    }
    _initCurve(t = 0, e = 0) {
      this.currentPath
        ? this.currentPath.points.length === 0 &&
          (this.currentPath.points = [t, e])
        : this.moveTo(t, e);
    }
    quadraticCurveTo(t, e, r, s) {
      this._initCurve();
      const n = this.currentPath.points;
      return (
        n.length === 0 && this.moveTo(0, 0), Fa.curveTo(t, e, r, s, n), this
      );
    }
    bezierCurveTo(t, e, r, s, n, a) {
      return (
        this._initCurve(),
        Da.curveTo(t, e, r, s, n, a, this.currentPath.points),
        this
      );
    }
    arcTo(t, e, r, s, n) {
      this._initCurve(t, e);
      const a = this.currentPath.points,
        o = ch.curveTo(t, e, r, s, n, a);
      if (o) {
        const {
          cx: h,
          cy: l,
          radius: c,
          startAngle: u,
          endAngle: d,
          anticlockwise: f,
        } = o;
        this.arc(h, l, c, u, d, f);
      }
      return this;
    }
    arc(t, e, r, s, n, a = !1) {
      if (s === n) return this;
      if ((!a && n <= s ? (n += us) : a && s <= n && (s += us), n - s === 0))
        return this;
      const o = t + Math.cos(s) * r,
        h = e + Math.sin(s) * r,
        l = this._geometry.closePointEps;
      let c = this.currentPath ? this.currentPath.points : null;
      if (c) {
        const u = Math.abs(c[c.length - 2] - o),
          d = Math.abs(c[c.length - 1] - h);
        (u < l && d < l) || c.push(o, h);
      } else this.moveTo(o, h), (c = this.currentPath.points);
      return ch.arc(o, h, t, e, r, s, n, a, c), this;
    }
    beginFill(t = 0, e) {
      return this.beginTextureFill({ texture: O.WHITE, color: t, alpha: e });
    }
    normalizeColor(t) {
      const e = rt.shared.setValue(t.color ?? 0);
      (t.color = e.toNumber()), t.alpha ?? (t.alpha = e.alpha);
    }
    beginTextureFill(t) {
      const e = { texture: O.WHITE, color: 16777215, matrix: null };
      (t = Object.assign(e, t)),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
      const r = t.alpha > 0;
      return (
        r
          ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
            Object.assign(this._fillStyle, { visible: r }, t))
          : this._fillStyle.reset(),
        this
      );
    }
    endFill() {
      return this.finishPoly(), this._fillStyle.reset(), this;
    }
    drawRect(t, e, r, s) {
      return this.drawShape(new j(t, e, r, s));
    }
    drawRoundedRect(t, e, r, s, n) {
      return this.drawShape(new Is(t, e, r, s, n));
    }
    drawCircle(t, e, r) {
      return this.drawShape(new Ss(t, e, r));
    }
    drawEllipse(t, e, r, s) {
      return this.drawShape(new Cs(t, e, r, s));
    }
    drawPolygon(...t) {
      let e,
        r = !0;
      const s = t[0];
      s.points
        ? ((r = s.closeStroke), (e = s.points))
        : Array.isArray(t[0])
        ? (e = t[0])
        : (e = t);
      const n = new tr(e);
      return (n.closeStroke = r), this.drawShape(n), this;
    }
    drawShape(t) {
      return (
        this._holeMode
          ? this._geometry.drawHole(t, this._matrix)
          : this._geometry.drawShape(
              t,
              this._fillStyle.clone(),
              this._lineStyle.clone(),
              this._matrix
            ),
        this
      );
    }
    clear() {
      return (
        this._geometry.clear(),
        this._lineStyle.reset(),
        this._fillStyle.reset(),
        this._boundsID++,
        (this._matrix = null),
        (this._holeMode = !1),
        (this.currentPath = null),
        this
      );
    }
    isFastRect() {
      const t = this._geometry.graphicsData;
      return (
        t.length === 1 &&
        t[0].shape.type === At.RECT &&
        !t[0].matrix &&
        !t[0].holes.length &&
        !(t[0].lineStyle.visible && t[0].lineStyle.width)
      );
    }
    _render(t) {
      this.finishPoly();
      const e = this._geometry;
      e.updateBatches(),
        e.batchable
          ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
            this._renderBatched(t))
          : (t.batch.flush(), this._renderDirect(t));
    }
    _populateBatches() {
      const t = this._geometry,
        e = this.blendMode,
        r = t.batches.length;
      (this.batchTint = -1),
        (this._transformID = -1),
        (this.batchDirty = t.batchDirty),
        (this.batches.length = r),
        (this.vertexData = new Float32Array(t.points));
      for (let s = 0; s < r; s++) {
        const n = t.batches[s],
          a = n.style.color,
          o = new Float32Array(
            this.vertexData.buffer,
            n.attribStart * 4 * 2,
            n.attribSize * 2
          ),
          h = new Float32Array(
            t.uvsFloat32.buffer,
            n.attribStart * 4 * 2,
            n.attribSize * 2
          ),
          l = new Uint16Array(t.indicesUint16.buffer, n.start * 2, n.size),
          c = {
            vertexData: o,
            blendMode: e,
            indices: l,
            uvs: h,
            _batchRGB: rt.shared.setValue(a).toRgbArray(),
            _tintRGB: a,
            _texture: n.style.texture,
            alpha: n.style.alpha,
            worldAlpha: 1,
          };
        this.batches[s] = c;
      }
    }
    _renderBatched(t) {
      if (this.batches.length) {
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
          this.calculateVertices(),
          this.calculateTints();
        for (let e = 0, r = this.batches.length; e < r; e++) {
          const s = this.batches[e];
          (s.worldAlpha = this.worldAlpha * s.alpha),
            t.plugins[this.pluginName].render(s);
        }
      }
    }
    _renderDirect(t) {
      const e = this._resolveDirectShader(t),
        r = this._geometry,
        s = this.worldAlpha,
        n = e.uniforms,
        a = r.drawCalls;
      (n.translationMatrix = this.transform.worldTransform),
        rt.shared.setValue(this._tintColor).premultiply(s).toArray(n.tint),
        t.shader.bind(e),
        t.geometry.bind(r, e),
        t.state.set(this.state);
      for (let o = 0, h = a.length; o < h; o++)
        this._renderDrawCallDirect(t, r.drawCalls[o]);
    }
    _renderDrawCallDirect(t, e) {
      const { texArray: r, type: s, size: n, start: a } = e,
        o = r.count;
      for (let h = 0; h < o; h++) t.texture.bind(r.elements[h], h);
      t.geometry.draw(s, n, a);
    }
    _resolveDirectShader(t) {
      let e = this.shader;
      const r = this.pluginName;
      if (!e) {
        if (!pn[r]) {
          const { maxTextures: s } = t.plugins[r],
            n = new Int32Array(s);
          for (let h = 0; h < s; h++) n[h] = h;
          const a = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new it(),
              default: jt.from({ uSamplers: n }, !0),
            },
            o = t.plugins[r]._shader.program;
          pn[r] = new le(o, a);
        }
        e = pn[r];
      }
      return e;
    }
    _calculateBounds() {
      this.finishPoly();
      const t = this._geometry;
      if (!t.graphicsData.length) return;
      const { minX: e, minY: r, maxX: s, maxY: n } = t.bounds;
      this._bounds.addFrame(this.transform, e, r, s, n);
    }
    containsPoint(t) {
      return (
        this.worldTransform.applyInverse(t, ts._TEMP_POINT),
        this._geometry.containsPoint(ts._TEMP_POINT)
      );
    }
    calculateTints() {
      if (this.batchTint !== this.tint) {
        this.batchTint = this._tintColor.toNumber();
        for (let t = 0; t < this.batches.length; t++) {
          const e = this.batches[t];
          e._tintRGB = rt.shared
            .setValue(this._tintColor)
            .multiply(e._batchRGB)
            .toLittleEndianNumber();
        }
      }
    }
    calculateVertices() {
      const t = this.transform._worldID;
      if (this._transformID === t) return;
      this._transformID = t;
      const e = this.transform.worldTransform,
        r = e.a,
        s = e.b,
        n = e.c,
        a = e.d,
        o = e.tx,
        h = e.ty,
        l = this._geometry.points,
        c = this.vertexData;
      let u = 0;
      for (let d = 0; d < l.length; d += 2) {
        const f = l[d],
          p = l[d + 1];
        (c[u++] = r * f + n * p + o), (c[u++] = a * p + s * f + h);
      }
    }
    closePath() {
      const t = this.currentPath;
      return t && ((t.closeStroke = !0), this.finishPoly()), this;
    }
    setMatrix(t) {
      return (this._matrix = t), this;
    }
    beginHole() {
      return this.finishPoly(), (this._holeMode = !0), this;
    }
    endHole() {
      return this.finishPoly(), (this._holeMode = !1), this;
    }
    destroy(t) {
      this._geometry.refCount--,
        this._geometry.refCount === 0 && this._geometry.dispose(),
        (this._matrix = null),
        (this.currentPath = null),
        this._lineStyle.destroy(),
        (this._lineStyle = null),
        this._fillStyle.destroy(),
        (this._fillStyle = null),
        (this._geometry = null),
        (this.shader = null),
        (this.vertexData = null),
        (this.batches.length = 0),
        (this.batches = null),
        super.destroy(t);
    }
  };
(ua.curves = kr), (ua._TEMP_POINT = new Q());
let $r = ua;
class ly {
  constructor(t, e) {
    (this.uvBuffer = t),
      (this.uvMatrix = e),
      (this.data = null),
      (this._bufferUpdateId = -1),
      (this._textureUpdateId = -1),
      (this._updateID = 0);
  }
  update(t) {
    if (
      !t &&
      this._bufferUpdateId === this.uvBuffer._updateID &&
      this._textureUpdateId === this.uvMatrix._updateID
    )
      return;
    (this._bufferUpdateId = this.uvBuffer._updateID),
      (this._textureUpdateId = this.uvMatrix._updateID);
    const e = this.uvBuffer.data;
    (!this.data || this.data.length !== e.length) &&
      (this.data = new Float32Array(e.length)),
      this.uvMatrix.multiplyUvs(e, this.data),
      this._updateID++;
  }
}
const mn = new Q(),
  ph = new tr(),
  Zl = class Ql extends Ut {
    constructor(t, e, r, s = ae.TRIANGLES) {
      super(),
        (this.geometry = t),
        (this.shader = e),
        (this.state = r || ue.for2d()),
        (this.drawMode = s),
        (this.start = 0),
        (this.size = 0),
        (this.uvs = null),
        (this.indices = null),
        (this.vertexData = new Float32Array(1)),
        (this.vertexDirty = -1),
        (this._transformID = -1),
        (this._roundPixels = F.ROUND_PIXELS),
        (this.batchUvs = null);
    }
    get geometry() {
      return this._geometry;
    }
    set geometry(t) {
      this._geometry !== t &&
        (this._geometry &&
          (this._geometry.refCount--,
          this._geometry.refCount === 0 && this._geometry.dispose()),
        (this._geometry = t),
        this._geometry && this._geometry.refCount++,
        (this.vertexDirty = -1));
    }
    get uvBuffer() {
      return this.geometry.buffers[1];
    }
    get verticesBuffer() {
      return this.geometry.buffers[0];
    }
    set material(t) {
      this.shader = t;
    }
    get material() {
      return this.shader;
    }
    set blendMode(t) {
      this.state.blendMode = t;
    }
    get blendMode() {
      return this.state.blendMode;
    }
    set roundPixels(t) {
      this._roundPixels !== t && (this._transformID = -1),
        (this._roundPixels = t);
    }
    get roundPixels() {
      return this._roundPixels;
    }
    get tint() {
      return "tint" in this.shader ? this.shader.tint : null;
    }
    set tint(t) {
      this.shader.tint = t;
    }
    get tintValue() {
      return this.shader.tintValue;
    }
    get texture() {
      return "texture" in this.shader ? this.shader.texture : null;
    }
    set texture(t) {
      this.shader.texture = t;
    }
    _render(t) {
      const e = this.geometry.buffers[0].data;
      this.shader.batchable &&
      this.drawMode === ae.TRIANGLES &&
      e.length < Ql.BATCHABLE_SIZE * 2
        ? this._renderToBatch(t)
        : this._renderDefault(t);
    }
    _renderDefault(t) {
      const e = this.shader;
      (e.alpha = this.worldAlpha),
        e.update && e.update(),
        t.batch.flush(),
        (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(
          !0
        )),
        t.shader.bind(e),
        t.state.set(this.state),
        t.geometry.bind(this.geometry, e),
        t.geometry.draw(
          this.drawMode,
          this.size,
          this.start,
          this.geometry.instanceCount
        );
    }
    _renderToBatch(t) {
      const e = this.geometry,
        r = this.shader;
      r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()),
        this.calculateVertices(),
        (this.indices = e.indexBuffer.data),
        (this._tintRGB = r._tintRGB),
        (this._texture = r.texture);
      const s = this.material.pluginName;
      t.batch.setObjectRenderer(t.plugins[s]), t.plugins[s].render(this);
    }
    calculateVertices() {
      const t = this.geometry.buffers[0],
        e = t.data,
        r = t._updateID;
      if (
        r === this.vertexDirty &&
        this._transformID === this.transform._worldID
      )
        return;
      (this._transformID = this.transform._worldID),
        this.vertexData.length !== e.length &&
          (this.vertexData = new Float32Array(e.length));
      const s = this.transform.worldTransform,
        n = s.a,
        a = s.b,
        o = s.c,
        h = s.d,
        l = s.tx,
        c = s.ty,
        u = this.vertexData;
      for (let d = 0; d < u.length / 2; d++) {
        const f = e[d * 2],
          p = e[d * 2 + 1];
        (u[d * 2] = n * f + o * p + l), (u[d * 2 + 1] = a * f + h * p + c);
      }
      if (this._roundPixels) {
        const d = F.RESOLUTION;
        for (let f = 0; f < u.length; ++f) u[f] = Math.round(u[f] * d) / d;
      }
      this.vertexDirty = r;
    }
    calculateUvs() {
      const t = this.geometry.buffers[1],
        e = this.shader;
      e.uvMatrix.isSimple
        ? (this.uvs = t.data)
        : (this.batchUvs || (this.batchUvs = new ly(t, e.uvMatrix)),
          this.batchUvs.update(),
          (this.uvs = this.batchUvs.data));
    }
    _calculateBounds() {
      this.calculateVertices(),
        this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
    }
    containsPoint(t) {
      if (!this.getBounds().contains(t.x, t.y)) return !1;
      this.worldTransform.applyInverse(t, mn);
      const e = this.geometry.getBuffer("aVertexPosition").data,
        r = ph.points,
        s = this.geometry.getIndex().data,
        n = s.length,
        a = this.drawMode === 4 ? 3 : 1;
      for (let o = 0; o + 2 < n; o += a) {
        const h = s[o] * 2,
          l = s[o + 1] * 2,
          c = s[o + 2] * 2;
        if (
          ((r[0] = e[h]),
          (r[1] = e[h + 1]),
          (r[2] = e[l]),
          (r[3] = e[l + 1]),
          (r[4] = e[c]),
          (r[5] = e[c + 1]),
          ph.contains(mn.x, mn.y))
        )
          return !0;
      }
      return !1;
    }
    destroy(t) {
      super.destroy(t),
        this._cachedTexture &&
          (this._cachedTexture.destroy(), (this._cachedTexture = null)),
        (this.geometry = null),
        (this.shader = null),
        (this.state = null),
        (this.uvs = null),
        (this.indices = null),
        (this.vertexData = null);
    }
  };
Zl.BATCHABLE_SIZE = 100;
let mh = Zl;
class cy extends Le {
  constructor(t, e, r) {
    super();
    const s = new lt(t),
      n = new lt(e, !0),
      a = new lt(r, !0, !0);
    this.addAttribute("aVertexPosition", s, 2, !1, k.FLOAT)
      .addAttribute("aTextureCoord", n, 2, !1, k.FLOAT)
      .addIndex(a),
      (this._updateId = -1);
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var uy = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
  dy = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class gh extends le {
  constructor(t, e) {
    const r = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: it.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1]),
    };
    (e = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, e)),
      e.uniforms && Object.assign(r, e.uniforms),
      super(e.program || ve.from(dy, uy), r),
      (this._colorDirty = !1),
      (this.uvMatrix = new ml(t)),
      (this.batchable = e.program === void 0),
      (this.pluginName = e.pluginName),
      (this._tintColor = new rt(e.tint)),
      (this._tintRGB = this._tintColor.toLittleEndianNumber()),
      (this._colorDirty = !0),
      (this.alpha = e.alpha);
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    this.uniforms.uSampler !== t &&
      (!this.uniforms.uSampler.baseTexture.alphaMode !=
        !t.baseTexture.alphaMode && (this._colorDirty = !0),
      (this.uniforms.uSampler = t),
      (this.uvMatrix.texture = t));
  }
  set alpha(t) {
    t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
  }
  get alpha() {
    return this._alpha;
  }
  set tint(t) {
    t !== this.tint &&
      (this._tintColor.setValue(t),
      (this._tintRGB = this._tintColor.toLittleEndianNumber()),
      (this._colorDirty = !0));
  }
  get tint() {
    return this._tintColor.value;
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = !1;
      const t = this.texture.baseTexture.alphaMode;
      rt.shared
        .setValue(this._tintColor)
        .premultiply(this._alpha, t)
        .toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() &&
      (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class yh {
  constructor(t, e, r) {
    (this.geometry = new Le()),
      (this.indexBuffer = null),
      (this.size = r),
      (this.dynamicProperties = []),
      (this.staticProperties = []);
    for (let s = 0; s < t.length; ++s) {
      let n = t[s];
      (n = {
        attributeName: n.attributeName,
        size: n.size,
        uploadFunction: n.uploadFunction,
        type: n.type || k.FLOAT,
        offset: n.offset,
      }),
        e[s] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
    }
    (this.staticStride = 0),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      (this.dynamicStride = 0),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this._updateID = 0),
      this.initBuffers();
  }
  initBuffers() {
    const t = this.geometry;
    let e = 0;
    (this.indexBuffer = new lt(Ff(this.size), !0, !0)),
      t.addIndex(this.indexBuffer),
      (this.dynamicStride = 0);
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      (o.offset = e), (e += o.size), (this.dynamicStride += o.size);
    }
    const r = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    (this.dynamicData = new Float32Array(r)),
      (this.dynamicDataUint32 = new Uint32Array(r)),
      (this.dynamicBuffer = new lt(this.dynamicData, !1, !1));
    let s = 0;
    this.staticStride = 0;
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      (o.offset = s), (s += o.size), (this.staticStride += o.size);
    }
    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    (this.staticData = new Float32Array(n)),
      (this.staticDataUint32 = new Uint32Array(n)),
      (this.staticBuffer = new lt(this.staticData, !0, !1));
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      t.addAttribute(
        o.attributeName,
        this.dynamicBuffer,
        0,
        o.type === k.UNSIGNED_BYTE,
        o.type,
        this.dynamicStride * 4,
        o.offset * 4
      );
    }
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      t.addAttribute(
        o.attributeName,
        this.staticBuffer,
        0,
        o.type === k.UNSIGNED_BYTE,
        o.type,
        this.staticStride * 4,
        o.offset * 4
      );
    }
  }
  uploadDynamic(t, e, r) {
    for (let s = 0; s < this.dynamicProperties.length; s++) {
      const n = this.dynamicProperties[s];
      n.uploadFunction(
        t,
        e,
        r,
        n.type === k.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
        this.dynamicStride,
        n.offset
      );
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(t, e, r) {
    for (let s = 0; s < this.staticProperties.length; s++) {
      const n = this.staticProperties[s];
      n.uploadFunction(
        t,
        e,
        r,
        n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
        this.staticStride,
        n.offset
      );
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    (this.indexBuffer = null),
      (this.dynamicProperties = null),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this.staticProperties = null),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      this.geometry.destroy();
  }
}
var fy = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
  py = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class Jl extends Rs {
  constructor(t) {
    super(t),
      (this.shader = null),
      (this.properties = null),
      (this.tempMatrix = new it()),
      (this.properties = [
        {
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: this.uploadVertices,
          offset: 0,
        },
        {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: this.uploadPosition,
          offset: 0,
        },
        {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: this.uploadRotation,
          offset: 0,
        },
        {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: this.uploadUvs,
          offset: 0,
        },
        {
          attributeName: "aColor",
          size: 1,
          type: k.UNSIGNED_BYTE,
          uploadFunction: this.uploadTint,
          offset: 0,
        },
      ]),
      (this.shader = le.from(py, fy, {})),
      (this.state = ue.for2d());
  }
  render(t) {
    const e = t.children,
      r = t._maxSize,
      s = t._batchSize,
      n = this.renderer;
    let a = e.length;
    if (a === 0) return;
    a > r && !t.autoResize && (a = r);
    let o = t._buffers;
    o || (o = t._buffers = this.generateBuffers(t));
    const h = e[0]._texture.baseTexture,
      l = h.alphaMode > 0;
    (this.state.blendMode = Qh(t.blendMode, l)), n.state.set(this.state);
    const c = n.gl,
      u = t.worldTransform.copyTo(this.tempMatrix);
    u.prepend(n.globalUniforms.uniforms.projectionMatrix),
      (this.shader.uniforms.translationMatrix = u.toArray(!0)),
      (this.shader.uniforms.uColor = rt.shared
        .setValue(t.tintRgb)
        .premultiply(t.worldAlpha, l)
        .toArray(this.shader.uniforms.uColor)),
      (this.shader.uniforms.uSampler = h),
      this.renderer.shader.bind(this.shader);
    let d = !1;
    for (let f = 0, p = 0; f < a; f += s, p += 1) {
      let m = a - f;
      m > s && (m = s), p >= o.length && o.push(this._generateOneMoreBuffer(t));
      const g = o[p];
      g.uploadDynamic(e, f, m);
      const _ = t._bufferUpdateIDs[p] || 0;
      (d = d || g._updateID < _),
        d && ((g._updateID = t._updateID), g.uploadStatic(e, f, m)),
        n.geometry.bind(g.geometry),
        c.drawElements(c.TRIANGLES, m * 6, c.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(t) {
    const e = [],
      r = t._maxSize,
      s = t._batchSize,
      n = t._properties;
    for (let a = 0; a < r; a += s) e.push(new yh(this.properties, n, s));
    return e;
  }
  _generateOneMoreBuffer(t) {
    const e = t._batchSize,
      r = t._properties;
    return new yh(this.properties, r, e);
  }
  uploadVertices(t, e, r, s, n, a) {
    let o = 0,
      h = 0,
      l = 0,
      c = 0;
    for (let u = 0; u < r; ++u) {
      const d = t[e + u],
        f = d._texture,
        p = d.scale.x,
        m = d.scale.y,
        g = f.trim,
        _ = f.orig;
      g
        ? ((h = g.x - d.anchor.x * _.width),
          (o = h + g.width),
          (c = g.y - d.anchor.y * _.height),
          (l = c + g.height))
        : ((o = _.width * (1 - d.anchor.x)),
          (h = _.width * -d.anchor.x),
          (l = _.height * (1 - d.anchor.y)),
          (c = _.height * -d.anchor.y)),
        (s[a] = h * p),
        (s[a + 1] = c * m),
        (s[a + n] = o * p),
        (s[a + n + 1] = c * m),
        (s[a + n * 2] = o * p),
        (s[a + n * 2 + 1] = l * m),
        (s[a + n * 3] = h * p),
        (s[a + n * 3 + 1] = l * m),
        (a += n * 4);
    }
  }
  uploadPosition(t, e, r, s, n, a) {
    for (let o = 0; o < r; o++) {
      const h = t[e + o].position;
      (s[a] = h.x),
        (s[a + 1] = h.y),
        (s[a + n] = h.x),
        (s[a + n + 1] = h.y),
        (s[a + n * 2] = h.x),
        (s[a + n * 2 + 1] = h.y),
        (s[a + n * 3] = h.x),
        (s[a + n * 3 + 1] = h.y),
        (a += n * 4);
    }
  }
  uploadRotation(t, e, r, s, n, a) {
    for (let o = 0; o < r; o++) {
      const h = t[e + o].rotation;
      (s[a] = h),
        (s[a + n] = h),
        (s[a + n * 2] = h),
        (s[a + n * 3] = h),
        (a += n * 4);
    }
  }
  uploadUvs(t, e, r, s, n, a) {
    for (let o = 0; o < r; ++o) {
      const h = t[e + o]._texture._uvs;
      h
        ? ((s[a] = h.x0),
          (s[a + 1] = h.y0),
          (s[a + n] = h.x1),
          (s[a + n + 1] = h.y1),
          (s[a + n * 2] = h.x2),
          (s[a + n * 2 + 1] = h.y2),
          (s[a + n * 3] = h.x3),
          (s[a + n * 3 + 1] = h.y3),
          (a += n * 4))
        : ((s[a] = 0),
          (s[a + 1] = 0),
          (s[a + n] = 0),
          (s[a + n + 1] = 0),
          (s[a + n * 2] = 0),
          (s[a + n * 2 + 1] = 0),
          (s[a + n * 3] = 0),
          (s[a + n * 3 + 1] = 0),
          (a += n * 4));
    }
  }
  uploadTint(t, e, r, s, n, a) {
    for (let o = 0; o < r; ++o) {
      const h = t[e + o],
        l = rt.shared
          .setValue(h._tintRGB)
          .toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
      (s[a] = l),
        (s[a + n] = l),
        (s[a + n * 2] = l),
        (s[a + n * 3] = l),
        (a += n * 4);
    }
  }
  destroy() {
    super.destroy(),
      this.shader && (this.shader.destroy(), (this.shader = null)),
      (this.tempMatrix = null);
  }
}
Jl.extension = { name: "particle", type: R.RendererPlugin };
L.add(Jl);
var Bs = ((i) => (
  (i[(i.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
  (i[(i.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"),
  i
))(Bs || {});
const Xi = { willReadFrequently: !0 },
  re = class N {
    static get experimentalLetterSpacingSupported() {
      let t = N._experimentalLetterSpacingSupported;
      if (t !== void 0) {
        const e = F.ADAPTER.getCanvasRenderingContext2D().prototype;
        t = N._experimentalLetterSpacingSupported =
          "letterSpacing" in e || "textLetterSpacing" in e;
      }
      return t;
    }
    constructor(t, e, r, s, n, a, o, h, l) {
      (this.text = t),
        (this.style = e),
        (this.width = r),
        (this.height = s),
        (this.lines = n),
        (this.lineWidths = a),
        (this.lineHeight = o),
        (this.maxLineWidth = h),
        (this.fontProperties = l);
    }
    static measureText(t, e, r, s = N._canvas) {
      r = r ?? e.wordWrap;
      const n = e.toFontString(),
        a = N.measureFont(n);
      a.fontSize === 0 && ((a.fontSize = e.fontSize), (a.ascent = e.fontSize));
      const o = s.getContext("2d", Xi);
      o.font = n;
      const h = (r ? N.wordWrap(t, e, s) : t).split(/(?:\r\n|\r|\n)/),
        l = new Array(h.length);
      let c = 0;
      for (let p = 0; p < h.length; p++) {
        const m = N._measureText(h[p], e.letterSpacing, o);
        (l[p] = m), (c = Math.max(c, m));
      }
      let u = c + e.strokeThickness;
      e.dropShadow && (u += e.dropShadowDistance);
      const d = e.lineHeight || a.fontSize + e.strokeThickness;
      let f =
        Math.max(d, a.fontSize + e.strokeThickness * 2) +
        e.leading +
        (h.length - 1) * (d + e.leading);
      return (
        e.dropShadow && (f += e.dropShadowDistance),
        new N(t, e, u, f, h, l, d + e.leading, c, a)
      );
    }
    static _measureText(t, e, r) {
      let s = !1;
      N.experimentalLetterSpacingSupported &&
        (N.experimentalLetterSpacing
          ? ((r.letterSpacing = `${e}px`),
            (r.textLetterSpacing = `${e}px`),
            (s = !0))
          : ((r.letterSpacing = "0px"), (r.textLetterSpacing = "0px")));
      let n = r.measureText(t).width;
      return (
        n > 0 &&
          (s ? (n -= e) : (n += (N.graphemeSegmenter(t).length - 1) * e)),
        n
      );
    }
    static wordWrap(t, e, r = N._canvas) {
      const s = r.getContext("2d", Xi);
      let n = 0,
        a = "",
        o = "";
      const h = Object.create(null),
        { letterSpacing: l, whiteSpace: c } = e,
        u = N.collapseSpaces(c),
        d = N.collapseNewlines(c);
      let f = !u;
      const p = e.wordWrapWidth + l,
        m = N.tokenize(t);
      for (let g = 0; g < m.length; g++) {
        let _ = m[g];
        if (N.isNewline(_)) {
          if (!d) {
            (o += N.addLine(a)), (f = !u), (a = ""), (n = 0);
            continue;
          }
          _ = " ";
        }
        if (u) {
          const y = N.isBreakingSpace(_),
            v = N.isBreakingSpace(a[a.length - 1]);
          if (y && v) continue;
        }
        const x = N.getFromCache(_, l, h, s);
        if (x > p)
          if (
            (a !== "" && ((o += N.addLine(a)), (a = ""), (n = 0)),
            N.canBreakWords(_, e.breakWords))
          ) {
            const y = N.wordWrapSplit(_);
            for (let v = 0; v < y.length; v++) {
              let T = y[v],
                M = T,
                A = 1;
              for (; y[v + A]; ) {
                const B = y[v + A];
                if (!N.canBreakChars(M, B, _, v, e.breakWords)) T += B;
                else break;
                (M = B), A++;
              }
              v += A - 1;
              const E = N.getFromCache(T, l, h, s);
              E + n > p && ((o += N.addLine(a)), (f = !1), (a = ""), (n = 0)),
                (a += T),
                (n += E);
            }
          } else {
            a.length > 0 && ((o += N.addLine(a)), (a = ""), (n = 0));
            const y = g === m.length - 1;
            (o += N.addLine(_, !y)), (f = !1), (a = ""), (n = 0);
          }
        else
          x + n > p && ((f = !1), (o += N.addLine(a)), (a = ""), (n = 0)),
            (a.length > 0 || !N.isBreakingSpace(_) || f) &&
              ((a += _), (n += x));
      }
      return (o += N.addLine(a, !1)), o;
    }
    static addLine(t, e = !0) {
      return (
        (t = N.trimRight(t)),
        (t = e
          ? `${t}
`
          : t),
        t
      );
    }
    static getFromCache(t, e, r, s) {
      let n = r[t];
      return (
        typeof n != "number" && ((n = N._measureText(t, e, s) + e), (r[t] = n)),
        n
      );
    }
    static collapseSpaces(t) {
      return t === "normal" || t === "pre-line";
    }
    static collapseNewlines(t) {
      return t === "normal";
    }
    static trimRight(t) {
      if (typeof t != "string") return "";
      for (let e = t.length - 1; e >= 0; e--) {
        const r = t[e];
        if (!N.isBreakingSpace(r)) break;
        t = t.slice(0, -1);
      }
      return t;
    }
    static isNewline(t) {
      return typeof t != "string" ? !1 : N._newlines.includes(t.charCodeAt(0));
    }
    static isBreakingSpace(t, e) {
      return typeof t != "string"
        ? !1
        : N._breakingSpaces.includes(t.charCodeAt(0));
    }
    static tokenize(t) {
      const e = [];
      let r = "";
      if (typeof t != "string") return e;
      for (let s = 0; s < t.length; s++) {
        const n = t[s],
          a = t[s + 1];
        if (N.isBreakingSpace(n, a) || N.isNewline(n)) {
          r !== "" && (e.push(r), (r = "")), e.push(n);
          continue;
        }
        r += n;
      }
      return r !== "" && e.push(r), e;
    }
    static canBreakWords(t, e) {
      return e;
    }
    static canBreakChars(t, e, r, s, n) {
      return !0;
    }
    static wordWrapSplit(t) {
      return N.graphemeSegmenter(t);
    }
    static measureFont(t) {
      if (N._fonts[t]) return N._fonts[t];
      const e = { ascent: 0, descent: 0, fontSize: 0 },
        r = N._canvas,
        s = N._context;
      s.font = t;
      const n = N.METRICS_STRING + N.BASELINE_SYMBOL,
        a = Math.ceil(s.measureText(n).width);
      let o = Math.ceil(s.measureText(N.BASELINE_SYMBOL).width);
      const h = Math.ceil(N.HEIGHT_MULTIPLIER * o);
      if (((o = (o * N.BASELINE_MULTIPLIER) | 0), a === 0 || h === 0))
        return (N._fonts[t] = e), e;
      (r.width = a),
        (r.height = h),
        (s.fillStyle = "#f00"),
        s.fillRect(0, 0, a, h),
        (s.font = t),
        (s.textBaseline = "alphabetic"),
        (s.fillStyle = "#000"),
        s.fillText(n, 0, o);
      const l = s.getImageData(0, 0, a, h).data,
        c = l.length,
        u = a * 4;
      let d = 0,
        f = 0,
        p = !1;
      for (d = 0; d < o; ++d) {
        for (let m = 0; m < u; m += 4)
          if (l[f + m] !== 255) {
            p = !0;
            break;
          }
        if (!p) f += u;
        else break;
      }
      for (e.ascent = o - d, f = c - u, p = !1, d = h; d > o; --d) {
        for (let m = 0; m < u; m += 4)
          if (l[f + m] !== 255) {
            p = !0;
            break;
          }
        if (!p) f -= u;
        else break;
      }
      return (
        (e.descent = d - o),
        (e.fontSize = e.ascent + e.descent),
        (N._fonts[t] = e),
        e
      );
    }
    static clearMetrics(t = "") {
      t ? delete N._fonts[t] : (N._fonts = {});
    }
    static get _canvas() {
      var t;
      if (!N.__canvas) {
        let e;
        try {
          const r = new OffscreenCanvas(0, 0);
          if ((t = r.getContext("2d", Xi)) != null && t.measureText)
            return (N.__canvas = r), r;
          e = F.ADAPTER.createCanvas();
        } catch {
          e = F.ADAPTER.createCanvas();
        }
        (e.width = e.height = 10), (N.__canvas = e);
      }
      return N.__canvas;
    }
    static get _context() {
      return (
        N.__context || (N.__context = N._canvas.getContext("2d", Xi)),
        N.__context
      );
    }
  };
(re.METRICS_STRING = "|ÉqÅ"),
  (re.BASELINE_SYMBOL = "M"),
  (re.BASELINE_MULTIPLIER = 1.4),
  (re.HEIGHT_MULTIPLIER = 2),
  (re.graphemeSegmenter = (() => {
    if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
      const i = new Intl.Segmenter();
      return (t) => [...i.segment(t)].map((e) => e.segment);
    }
    return (i) => [...i];
  })()),
  (re.experimentalLetterSpacing = !1),
  (re._fonts = {}),
  (re._newlines = [10, 13]),
  (re._breakingSpaces = [
    9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
    12288,
  ]);
let Ie = re;
const my = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
  ],
  tc = class ei {
    constructor(t) {
      (this.styleID = 0), this.reset(), yn(this, t, t);
    }
    clone() {
      const t = {};
      return yn(t, this, ei.defaultStyle), new ei(t);
    }
    reset() {
      yn(this, ei.defaultStyle, ei.defaultStyle);
    }
    get align() {
      return this._align;
    }
    set align(t) {
      this._align !== t && ((this._align = t), this.styleID++);
    }
    get breakWords() {
      return this._breakWords;
    }
    set breakWords(t) {
      this._breakWords !== t && ((this._breakWords = t), this.styleID++);
    }
    get dropShadow() {
      return this._dropShadow;
    }
    set dropShadow(t) {
      this._dropShadow !== t && ((this._dropShadow = t), this.styleID++);
    }
    get dropShadowAlpha() {
      return this._dropShadowAlpha;
    }
    set dropShadowAlpha(t) {
      this._dropShadowAlpha !== t &&
        ((this._dropShadowAlpha = t), this.styleID++);
    }
    get dropShadowAngle() {
      return this._dropShadowAngle;
    }
    set dropShadowAngle(t) {
      this._dropShadowAngle !== t &&
        ((this._dropShadowAngle = t), this.styleID++);
    }
    get dropShadowBlur() {
      return this._dropShadowBlur;
    }
    set dropShadowBlur(t) {
      this._dropShadowBlur !== t &&
        ((this._dropShadowBlur = t), this.styleID++);
    }
    get dropShadowColor() {
      return this._dropShadowColor;
    }
    set dropShadowColor(t) {
      const e = gn(t);
      this._dropShadowColor !== e &&
        ((this._dropShadowColor = e), this.styleID++);
    }
    get dropShadowDistance() {
      return this._dropShadowDistance;
    }
    set dropShadowDistance(t) {
      this._dropShadowDistance !== t &&
        ((this._dropShadowDistance = t), this.styleID++);
    }
    get fill() {
      return this._fill;
    }
    set fill(t) {
      const e = gn(t);
      this._fill !== e && ((this._fill = e), this.styleID++);
    }
    get fillGradientType() {
      return this._fillGradientType;
    }
    set fillGradientType(t) {
      this._fillGradientType !== t &&
        ((this._fillGradientType = t), this.styleID++);
    }
    get fillGradientStops() {
      return this._fillGradientStops;
    }
    set fillGradientStops(t) {
      gy(this._fillGradientStops, t) ||
        ((this._fillGradientStops = t), this.styleID++);
    }
    get fontFamily() {
      return this._fontFamily;
    }
    set fontFamily(t) {
      this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
    }
    get fontSize() {
      return this._fontSize;
    }
    set fontSize(t) {
      this._fontSize !== t && ((this._fontSize = t), this.styleID++);
    }
    get fontStyle() {
      return this._fontStyle;
    }
    set fontStyle(t) {
      this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
    }
    get fontVariant() {
      return this._fontVariant;
    }
    set fontVariant(t) {
      this._fontVariant !== t && ((this._fontVariant = t), this.styleID++);
    }
    get fontWeight() {
      return this._fontWeight;
    }
    set fontWeight(t) {
      this._fontWeight !== t && ((this._fontWeight = t), this.styleID++);
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(t) {
      this._letterSpacing !== t && ((this._letterSpacing = t), this.styleID++);
    }
    get lineHeight() {
      return this._lineHeight;
    }
    set lineHeight(t) {
      this._lineHeight !== t && ((this._lineHeight = t), this.styleID++);
    }
    get leading() {
      return this._leading;
    }
    set leading(t) {
      this._leading !== t && ((this._leading = t), this.styleID++);
    }
    get lineJoin() {
      return this._lineJoin;
    }
    set lineJoin(t) {
      this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
    }
    get miterLimit() {
      return this._miterLimit;
    }
    set miterLimit(t) {
      this._miterLimit !== t && ((this._miterLimit = t), this.styleID++);
    }
    get padding() {
      return this._padding;
    }
    set padding(t) {
      this._padding !== t && ((this._padding = t), this.styleID++);
    }
    get stroke() {
      return this._stroke;
    }
    set stroke(t) {
      const e = gn(t);
      this._stroke !== e && ((this._stroke = e), this.styleID++);
    }
    get strokeThickness() {
      return this._strokeThickness;
    }
    set strokeThickness(t) {
      this._strokeThickness !== t &&
        ((this._strokeThickness = t), this.styleID++);
    }
    get textBaseline() {
      return this._textBaseline;
    }
    set textBaseline(t) {
      this._textBaseline !== t && ((this._textBaseline = t), this.styleID++);
    }
    get trim() {
      return this._trim;
    }
    set trim(t) {
      this._trim !== t && ((this._trim = t), this.styleID++);
    }
    get whiteSpace() {
      return this._whiteSpace;
    }
    set whiteSpace(t) {
      this._whiteSpace !== t && ((this._whiteSpace = t), this.styleID++);
    }
    get wordWrap() {
      return this._wordWrap;
    }
    set wordWrap(t) {
      this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
    }
    get wordWrapWidth() {
      return this._wordWrapWidth;
    }
    set wordWrapWidth(t) {
      this._wordWrapWidth !== t && ((this._wordWrapWidth = t), this.styleID++);
    }
    toFontString() {
      const t =
        typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
      let e = this.fontFamily;
      Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
      for (let r = e.length - 1; r >= 0; r--) {
        let s = e[r].trim();
        !/([\"\'])[^\'\"]+\1/.test(s) && !my.includes(s) && (s = `"${s}"`),
          (e[r] = s);
      }
      return `${this.fontStyle} ${this.fontVariant} ${
        this.fontWeight
      } ${t} ${e.join(",")}`;
    }
  };
tc.defaultStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: Bs.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100,
};
let Ne = tc;
function gn(i) {
  const t = rt.shared,
    e = (r) => {
      const s = t.setValue(r);
      return s.alpha === 1 ? s.toHex() : s.toRgbaString();
    };
  return Array.isArray(i) ? i.map(e) : e(i);
}
function gy(i, t) {
  if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length)
    return !1;
  for (let e = 0; e < i.length; ++e) if (i[e] !== t[e]) return !1;
  return !0;
}
function yn(i, t, e) {
  for (const r in e)
    Array.isArray(t[r]) ? (i[r] = t[r].slice()) : (i[r] = t[r]);
}
const yy = { texture: !0, children: !1, baseTexture: !0 },
  ec = class da extends de {
    constructor(t, e, r) {
      let s = !1;
      r || ((r = F.ADAPTER.createCanvas()), (s = !0)),
        (r.width = 3),
        (r.height = 3);
      const n = O.from(r);
      (n.orig = new j()),
        (n.trim = new j()),
        super(n),
        (this._ownCanvas = s),
        (this.canvas = r),
        (this.context = r.getContext("2d", { willReadFrequently: !0 })),
        (this._resolution = da.defaultResolution ?? F.RESOLUTION),
        (this._autoResolution = da.defaultAutoResolution),
        (this._text = null),
        (this._style = null),
        (this._styleListener = null),
        (this._font = ""),
        (this.text = t),
        (this.style = e),
        (this.localStyleID = -1);
    }
    static get experimentalLetterSpacing() {
      return Ie.experimentalLetterSpacing;
    }
    static set experimentalLetterSpacing(t) {
      q(
        "7.1.0",
        "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"
      ),
        (Ie.experimentalLetterSpacing = t);
    }
    updateText(t) {
      const e = this._style;
      if (
        (this.localStyleID !== e.styleID &&
          ((this.dirty = !0), (this.localStyleID = e.styleID)),
        !this.dirty && t)
      )
        return;
      this._font = this._style.toFontString();
      const r = this.context,
        s = Ie.measureText(
          this._text || " ",
          this._style,
          this._style.wordWrap,
          this.canvas
        ),
        n = s.width,
        a = s.height,
        o = s.lines,
        h = s.lineHeight,
        l = s.lineWidths,
        c = s.maxLineWidth,
        u = s.fontProperties;
      (this.canvas.width = Math.ceil(
        Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution
      )),
        (this.canvas.height = Math.ceil(
          Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution
        )),
        r.scale(this._resolution, this._resolution),
        r.clearRect(0, 0, this.canvas.width, this.canvas.height),
        (r.font = this._font),
        (r.lineWidth = e.strokeThickness),
        (r.textBaseline = e.textBaseline),
        (r.lineJoin = e.lineJoin),
        (r.miterLimit = e.miterLimit);
      let d, f;
      const p = e.dropShadow ? 2 : 1;
      for (let m = 0; m < p; ++m) {
        const g = e.dropShadow && m === 0,
          _ = g ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0,
          x = _ * this._resolution;
        if (g) {
          (r.fillStyle = "black"), (r.strokeStyle = "black");
          const v = e.dropShadowColor,
            T = e.dropShadowBlur * this._resolution,
            M = e.dropShadowDistance * this._resolution;
          (r.shadowColor = rt.shared
            .setValue(v)
            .setAlpha(e.dropShadowAlpha)
            .toRgbaString()),
            (r.shadowBlur = T),
            (r.shadowOffsetX = Math.cos(e.dropShadowAngle) * M),
            (r.shadowOffsetY = Math.sin(e.dropShadowAngle) * M + x);
        } else
          (r.fillStyle = this._generateFillStyle(e, o, s)),
            (r.strokeStyle = e.stroke),
            (r.shadowColor = "black"),
            (r.shadowBlur = 0),
            (r.shadowOffsetX = 0),
            (r.shadowOffsetY = 0);
        let y = (h - u.fontSize) / 2;
        h - u.fontSize < 0 && (y = 0);
        for (let v = 0; v < o.length; v++)
          (d = e.strokeThickness / 2),
            (f = e.strokeThickness / 2 + v * h + u.ascent + y),
            e.align === "right"
              ? (d += c - l[v])
              : e.align === "center" && (d += (c - l[v]) / 2),
            e.stroke &&
              e.strokeThickness &&
              this.drawLetterSpacing(
                o[v],
                d + e.padding,
                f + e.padding - _,
                !0
              ),
            e.fill &&
              this.drawLetterSpacing(o[v], d + e.padding, f + e.padding - _);
      }
      this.updateTexture();
    }
    drawLetterSpacing(t, e, r, s = !1) {
      const n = this._style.letterSpacing;
      let a = !1;
      if (
        (Ie.experimentalLetterSpacingSupported &&
          (Ie.experimentalLetterSpacing
            ? ((this.context.letterSpacing = `${n}px`),
              (this.context.textLetterSpacing = `${n}px`),
              (a = !0))
            : ((this.context.letterSpacing = "0px"),
              (this.context.textLetterSpacing = "0px"))),
        n === 0 || a)
      ) {
        s ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
        return;
      }
      let o = e;
      const h = Ie.graphemeSegmenter(t);
      let l = this.context.measureText(t).width,
        c = 0;
      for (let u = 0; u < h.length; ++u) {
        const d = h[u];
        s ? this.context.strokeText(d, o, r) : this.context.fillText(d, o, r);
        let f = "";
        for (let p = u + 1; p < h.length; ++p) f += h[p];
        (c = this.context.measureText(f).width), (o += l - c + n), (l = c);
      }
    }
    updateTexture() {
      const t = this.canvas;
      if (this._style.trim) {
        const a = Uf(t);
        a.data &&
          ((t.width = a.width),
          (t.height = a.height),
          this.context.putImageData(a.data, 0, 0));
      }
      const e = this._texture,
        r = this._style,
        s = r.trim ? 0 : r.padding,
        n = e.baseTexture;
      (e.trim.width = e._frame.width = t.width / this._resolution),
        (e.trim.height = e._frame.height = t.height / this._resolution),
        (e.trim.x = -s),
        (e.trim.y = -s),
        (e.orig.width = e._frame.width - s * 2),
        (e.orig.height = e._frame.height - s * 2),
        this._onTextureUpdate(),
        n.setRealSize(t.width, t.height, this._resolution),
        e.updateUvs(),
        (this.dirty = !1);
    }
    _render(t) {
      this._autoResolution &&
        this._resolution !== t.resolution &&
        ((this._resolution = t.resolution), (this.dirty = !0)),
        this.updateText(!0),
        super._render(t);
    }
    updateTransform() {
      this.updateText(!0), super.updateTransform();
    }
    getBounds(t, e) {
      return (
        this.updateText(!0),
        this._textureID === -1 && (t = !1),
        super.getBounds(t, e)
      );
    }
    getLocalBounds(t) {
      return this.updateText(!0), super.getLocalBounds.call(this, t);
    }
    _calculateBounds() {
      this.calculateVertices(), this._bounds.addQuad(this.vertexData);
    }
    _generateFillStyle(t, e, r) {
      const s = t.fill;
      if (Array.isArray(s)) {
        if (s.length === 1) return s[0];
      } else return s;
      let n;
      const a = t.dropShadow ? t.dropShadowDistance : 0,
        o = t.padding || 0,
        h = this.canvas.width / this._resolution - a - o * 2,
        l = this.canvas.height / this._resolution - a - o * 2,
        c = s.slice(),
        u = t.fillGradientStops.slice();
      if (!u.length) {
        const d = c.length + 1;
        for (let f = 1; f < d; ++f) u.push(f / d);
      }
      if (
        (c.unshift(s[0]),
        u.unshift(0),
        c.push(s[s.length - 1]),
        u.push(1),
        t.fillGradientType === Bs.LINEAR_VERTICAL)
      ) {
        n = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
        const d = r.fontProperties.fontSize + t.strokeThickness;
        for (let f = 0; f < e.length; f++) {
          const p = r.lineHeight * (f - 1) + d,
            m = r.lineHeight * f;
          let g = m;
          f > 0 && p > m && (g = (m + p) / 2);
          const _ = m + d,
            x = r.lineHeight * (f + 1);
          let y = _;
          f + 1 < e.length && x < _ && (y = (_ + x) / 2);
          const v = (y - g) / l;
          for (let T = 0; T < c.length; T++) {
            let M = 0;
            typeof u[T] == "number" ? (M = u[T]) : (M = T / c.length);
            let A = Math.min(1, Math.max(0, g / l + M * v));
            (A = Number(A.toFixed(5))), n.addColorStop(A, c[T]);
          }
        }
      } else {
        n = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
        const d = c.length + 1;
        let f = 1;
        for (let p = 0; p < c.length; p++) {
          let m;
          typeof u[p] == "number" ? (m = u[p]) : (m = f / d),
            n.addColorStop(m, c[p]),
            f++;
        }
      }
      return n;
    }
    destroy(t) {
      typeof t == "boolean" && (t = { children: t }),
        (t = Object.assign({}, yy, t)),
        super.destroy(t),
        this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
        (this.context = null),
        (this.canvas = null),
        (this._style = null);
    }
    get width() {
      return (
        this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
      );
    }
    set width(t) {
      this.updateText(!0);
      const e = De(this.scale.x) || 1;
      (this.scale.x = (e * t) / this._texture.orig.width), (this._width = t);
    }
    get height() {
      return (
        this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
      );
    }
    set height(t) {
      this.updateText(!0);
      const e = De(this.scale.y) || 1;
      (this.scale.y = (e * t) / this._texture.orig.height), (this._height = t);
    }
    get style() {
      return this._style;
    }
    set style(t) {
      (t = t || {}),
        t instanceof Ne ? (this._style = t) : (this._style = new Ne(t)),
        (this.localStyleID = -1),
        (this.dirty = !0);
    }
    get text() {
      return this._text;
    }
    set text(t) {
      (t = String(t ?? "")),
        this._text !== t && ((this._text = t), (this.dirty = !0));
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      (this._autoResolution = !1),
        this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
    }
  };
ec.defaultAutoResolution = !0;
let Xr = ec;
class _y {
  constructor(t) {
    (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function vy(i, t) {
  var r;
  let e = !1;
  if ((r = i == null ? void 0 : i._textures) != null && r.length) {
    for (let s = 0; s < i._textures.length; s++)
      if (i._textures[s] instanceof O) {
        const n = i._textures[s].baseTexture;
        t.includes(n) || (t.push(n), (e = !0));
      }
  }
  return e;
}
function xy(i, t) {
  if (i.baseTexture instanceof W) {
    const e = i.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function by(i, t) {
  if (i._texture && i._texture instanceof O) {
    const e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function Ty(i, t) {
  return t instanceof Xr ? (t.updateText(!0), !0) : !1;
}
function Ey(i, t) {
  if (t instanceof Ne) {
    const e = t.toFontString();
    return Ie.measureFont(e), !0;
  }
  return !1;
}
function Ay(i, t) {
  if (i instanceof Xr) {
    t.includes(i.style) || t.push(i.style), t.includes(i) || t.push(i);
    const e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function wy(i, t) {
  return i instanceof Ne ? (t.includes(i) || t.push(i), !0) : !1;
}
const rc = class ic {
  constructor(t) {
    (this.limiter = new _y(ic.uploadsPerFrame)),
      (this.renderer = t),
      (this.uploadHookHelper = null),
      (this.queue = []),
      (this.addHooks = []),
      (this.uploadHooks = []),
      (this.completes = []),
      (this.ticking = !1),
      (this.delayedTick = () => {
        this.queue && this.prepareItems();
      }),
      this.registerFindHook(Ay),
      this.registerFindHook(wy),
      this.registerFindHook(vy),
      this.registerFindHook(xy),
      this.registerFindHook(by),
      this.registerUploadHook(Ty),
      this.registerUploadHook(Ey);
  }
  upload(t) {
    return new Promise((e) => {
      t && this.add(t),
        this.queue.length
          ? (this.completes.push(e),
            this.ticking ||
              ((this.ticking = !0),
              Bt.system.addOnce(this.tick, this, sr.UTILITY)))
          : e();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (
      this.limiter.beginFrame();
      this.queue.length && this.limiter.allowedToUpload();

    ) {
      const t = this.queue[0];
      let e = !1;
      if (t && !t._destroyed) {
        for (let r = 0, s = this.uploadHooks.length; r < s; r++)
          if (this.uploadHooks[r](this.uploadHookHelper, t)) {
            this.queue.shift(), (e = !0);
            break;
          }
      }
      e || this.queue.shift();
    }
    if (this.queue.length) Bt.system.addOnce(this.tick, this, sr.UTILITY);
    else {
      this.ticking = !1;
      const t = this.completes.slice(0);
      this.completes.length = 0;
      for (let e = 0, r = t.length; e < r; e++) t[e]();
    }
  }
  registerFindHook(t) {
    return t && this.addHooks.push(t), this;
  }
  registerUploadHook(t) {
    return t && this.uploadHooks.push(t), this;
  }
  add(t) {
    for (
      let e = 0, r = this.addHooks.length;
      e < r && !this.addHooks[e](t, this.queue);
      e++
    );
    if (t instanceof Ut)
      for (let e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
    return this;
  }
  destroy() {
    this.ticking && Bt.system.remove(this.tick, this),
      (this.ticking = !1),
      (this.addHooks = null),
      (this.uploadHooks = null),
      (this.renderer = null),
      (this.completes = null),
      (this.queue = null),
      (this.limiter = null),
      (this.uploadHookHelper = null);
  }
};
rc.uploadsPerFrame = 4;
let fa = rc;
Object.defineProperties(F, {
  UPLOADS_PER_FRAME: {
    get() {
      return fa.uploadsPerFrame;
    },
    set(i) {
      q(
        "7.1.0",
        "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"
      ),
        (fa.uploadsPerFrame = i);
    },
  },
});
function sc(i, t) {
  return t instanceof W
    ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t), !0)
    : !1;
}
function Sy(i, t) {
  if (!(t instanceof $r)) return !1;
  const { geometry: e } = t;
  t.finishPoly(), e.updateBatches();
  const { batches: r } = e;
  for (let s = 0; s < r.length; s++) {
    const { texture: n } = r[s].style;
    n && sc(i, n.baseTexture);
  }
  return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)), !0;
}
function Cy(i, t) {
  return i instanceof $r ? (t.push(i), !0) : !1;
}
class nc extends fa {
  constructor(t) {
    super(t),
      (this.uploadHookHelper = this.renderer),
      this.registerFindHook(Cy),
      this.registerUploadHook(sc),
      this.registerUploadHook(Sy);
  }
}
nc.extension = { name: "prepare", type: R.RendererSystem };
L.add(nc);
var Iy = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
  Ry = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  Py = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
  _h = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  My = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const Vi = new it();
class ac extends Rs {
  constructor(t) {
    super(t),
      t.runners.contextChange.add(this),
      (this.quad = new ul()),
      (this.state = ue.for2d());
  }
  contextChange() {
    const t = this.renderer,
      e = { globals: t.globalUniforms };
    (this.simpleShader = le.from(_h, My, e)),
      (this.shader =
        t.context.webGLVersion > 1 ? le.from(Ry, Iy, e) : le.from(_h, Py, e));
  }
  render(t) {
    const e = this.renderer,
      r = this.quad;
    let s = r.vertices;
    (s[0] = s[6] = t._width * -t.anchor.x),
      (s[1] = s[3] = t._height * -t.anchor.y),
      (s[2] = s[4] = t._width * (1 - t.anchor.x)),
      (s[5] = s[7] = t._height * (1 - t.anchor.y));
    const n = t.uvRespectAnchor ? t.anchor.x : 0,
      a = t.uvRespectAnchor ? t.anchor.y : 0;
    (s = r.uvs),
      (s[0] = s[6] = -n),
      (s[1] = s[3] = -a),
      (s[2] = s[4] = 1 - n),
      (s[5] = s[7] = 1 - a),
      r.invalidate();
    const o = t._texture,
      h = o.baseTexture,
      l = h.alphaMode > 0,
      c = t.tileTransform.localTransform,
      u = t.uvMatrix;
    let d =
      h.isPowerOfTwo &&
      o.frame.width === h.width &&
      o.frame.height === h.height;
    d &&
      (h._glTextures[e.CONTEXT_UID]
        ? (d = h.wrapMode !== Oe.CLAMP)
        : h.wrapMode === Oe.CLAMP && (h.wrapMode = Oe.REPEAT));
    const f = d ? this.simpleShader : this.shader,
      p = o.width,
      m = o.height,
      g = t._width,
      _ = t._height;
    Vi.set(
      (c.a * p) / g,
      (c.b * p) / _,
      (c.c * m) / g,
      (c.d * m) / _,
      c.tx / g,
      c.ty / _
    ),
      Vi.invert(),
      d
        ? Vi.prepend(u.mapCoord)
        : ((f.uniforms.uMapCoord = u.mapCoord.toArray(!0)),
          (f.uniforms.uClampFrame = u.uClampFrame),
          (f.uniforms.uClampOffset = u.uClampOffset)),
      (f.uniforms.uTransform = Vi.toArray(!0)),
      (f.uniforms.uColor = rt.shared
        .setValue(t.tint)
        .premultiply(t.worldAlpha, l)
        .toArray(f.uniforms.uColor)),
      (f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0)),
      (f.uniforms.uSampler = o),
      e.shader.bind(f),
      e.geometry.bind(r),
      (this.state.blendMode = Qh(t.blendMode, l)),
      e.state.set(this.state),
      e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
ac.extension = { name: "tilingSprite", type: R.RendererPlugin };
L.add(ac);
const oc = class ri {
  constructor(t, e, r) {
    (this.linkedSheets = []),
      (t instanceof W || t instanceof O) &&
        (t = { texture: t, data: e, resolutionFilename: r });
    const {
      texture: s,
      data: n,
      resolutionFilename: a = null,
      cachePrefix: o = "",
    } = t;
    (this.cachePrefix = o),
      (this._texture = s instanceof O ? s : null),
      (this.baseTexture = s instanceof W ? s : this._texture.baseTexture),
      (this.textures = {}),
      (this.animations = {}),
      (this.data = n);
    const h = this.baseTexture.resource;
    (this.resolution = this._updateResolution(a || (h ? h.url : null))),
      (this._frames = this.data.frames),
      (this._frameKeys = Object.keys(this._frames)),
      (this._batchIndex = 0),
      (this._callback = null);
  }
  _updateResolution(t = null) {
    const { scale: e } = this.data.meta;
    let r = Te(t, null);
    return (
      r === null && (r = typeof e == "number" ? e : parseFloat(e ?? "1")),
      r !== 1 && this.baseTexture.setResolution(r),
      r
    );
  }
  parse() {
    return new Promise((t) => {
      (this._callback = t),
        (this._batchIndex = 0),
        this._frameKeys.length <= ri.BATCH_SIZE
          ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete())
          : this._nextBatch();
    });
  }
  _processFrames(t) {
    let e = t;
    const r = ri.BATCH_SIZE;
    for (; e - t < r && e < this._frameKeys.length; ) {
      const s = this._frameKeys[e],
        n = this._frames[s],
        a = n.frame;
      if (a) {
        let o = null,
          h = null;
        const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame,
          c = new j(
            0,
            0,
            Math.floor(l.w) / this.resolution,
            Math.floor(l.h) / this.resolution
          );
        n.rotated
          ? (o = new j(
              Math.floor(a.x) / this.resolution,
              Math.floor(a.y) / this.resolution,
              Math.floor(a.h) / this.resolution,
              Math.floor(a.w) / this.resolution
            ))
          : (o = new j(
              Math.floor(a.x) / this.resolution,
              Math.floor(a.y) / this.resolution,
              Math.floor(a.w) / this.resolution,
              Math.floor(a.h) / this.resolution
            )),
          n.trimmed !== !1 &&
            n.spriteSourceSize &&
            (h = new j(
              Math.floor(n.spriteSourceSize.x) / this.resolution,
              Math.floor(n.spriteSourceSize.y) / this.resolution,
              Math.floor(a.w) / this.resolution,
              Math.floor(a.h) / this.resolution
            )),
          (this.textures[s] = new O(
            this.baseTexture,
            o,
            c,
            h,
            n.rotated ? 2 : 0,
            n.anchor,
            n.borders
          )),
          O.addToCache(this.textures[s], this.cachePrefix + s.toString());
      }
      e++;
    }
  }
  _processAnimations() {
    const t = this.data.animations || {};
    for (const e in t) {
      this.animations[e] = [];
      for (let r = 0; r < t[e].length; r++) {
        const s = t[e][r];
        this.animations[e].push(this.textures[s]);
      }
    }
  }
  _parseComplete() {
    const t = this._callback;
    (this._callback = null),
      (this._batchIndex = 0),
      t.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * ri.BATCH_SIZE),
      this._batchIndex++,
      setTimeout(() => {
        this._batchIndex * ri.BATCH_SIZE < this._frameKeys.length
          ? this._nextBatch()
          : (this._processAnimations(), this._parseComplete());
      }, 0);
  }
  destroy(t = !1) {
    var e;
    for (const r in this.textures) this.textures[r].destroy();
    (this._frames = null),
      (this._frameKeys = null),
      (this.data = null),
      (this.textures = null),
      t &&
        ((e = this._texture) == null || e.destroy(),
        this.baseTexture.destroy()),
      (this._texture = null),
      (this.baseTexture = null),
      (this.linkedSheets = []);
  }
};
oc.BATCH_SIZE = 1e3;
let vh = oc;
const By = ["jpg", "png", "jpeg", "avif", "webp"];
function hc(i, t, e) {
  const r = {};
  if (
    (i.forEach((s) => {
      r[s] = t;
    }),
    Object.keys(t.textures).forEach((s) => {
      r[`${t.cachePrefix}${s}`] = t.textures[s];
    }),
    !e)
  ) {
    const s = mt.dirname(i[0]);
    t.linkedSheets.forEach((n, a) => {
      Object.assign(
        r,
        hc([`${s}/${t.data.meta.related_multi_packs[a]}`], n, !0)
      );
    });
  }
  return r;
}
const Dy = {
  extension: R.Asset,
  cache: {
    test: (i) => i instanceof vh,
    getCacheableAssets: (i, t) => hc(i, t, !1),
  },
  resolver: {
    test: (i) => {
      const t = i.split("?")[0].split("."),
        e = t.pop(),
        r = t.pop();
      return e === "json" && By.includes(r);
    },
    parse: (i) => {
      var e;
      const t = i.split(".");
      return {
        resolution: parseFloat(
          ((e = F.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"
        ),
        format: t[t.length - 2],
        src: i,
      };
    },
  },
  loader: {
    name: "spritesheetLoader",
    extension: { type: R.LoadParser, priority: qt.Normal },
    async testParse(i, t) {
      return mt.extname(t.src).toLowerCase() === ".json" && !!i.frames;
    },
    async parse(i, t, e) {
      var c, u;
      const {
        texture: r,
        imageFilename: s,
        cachePrefix: n,
      } = (t == null ? void 0 : t.data) ?? {};
      let a = mt.dirname(t.src);
      a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
      let o;
      if (r && r.baseTexture) o = r;
      else {
        const d = ha(a + (s ?? i.meta.image), t.src);
        o = (await e.load([d]))[d];
      }
      const h = new vh({
        texture: o.baseTexture,
        data: i,
        resolutionFilename: t.src,
        cachePrefix: n,
      });
      await h.parse();
      const l =
        (c = i == null ? void 0 : i.meta) == null
          ? void 0
          : c.related_multi_packs;
      if (Array.isArray(l)) {
        const d = [];
        for (const p of l) {
          if (typeof p != "string") continue;
          let m = a + p;
          ((u = t.data) != null && u.ignoreMultiPack) ||
            ((m = ha(m, t.src)),
            d.push(e.load({ src: m, data: { ignoreMultiPack: !0 } })));
        }
        const f = await Promise.all(d);
        (h.linkedSheets = f),
          f.forEach((p) => {
            p.linkedSheets = [h].concat(h.linkedSheets.filter((m) => m !== p));
          });
      }
      return h;
    },
    unload(i) {
      i.destroy(!0);
    },
  },
};
L.add(Dy);
class Ts {
  constructor() {
    (this.info = []),
      (this.common = []),
      (this.page = []),
      (this.char = []),
      (this.kerning = []),
      (this.distanceField = []);
  }
}
class es {
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  static parse(t) {
    const e = t.match(/^[a-z]+\s+.+$/gm),
      r = {
        info: [],
        common: [],
        page: [],
        char: [],
        chars: [],
        kerning: [],
        kernings: [],
        distanceField: [],
      };
    for (const n in e) {
      const a = e[n].match(/^[a-z]+/gm)[0],
        o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
        h = {};
      for (const l in o) {
        const c = o[l].split("="),
          u = c[0],
          d = c[1].replace(/"/gm, ""),
          f = parseFloat(d),
          p = isNaN(f) ? d : f;
        h[u] = p;
      }
      r[a].push(h);
    }
    const s = new Ts();
    return (
      r.info.forEach((n) =>
        s.info.push({ face: n.face, size: parseInt(n.size, 10) })
      ),
      r.common.forEach((n) =>
        s.common.push({ lineHeight: parseInt(n.lineHeight, 10) })
      ),
      r.page.forEach((n) =>
        s.page.push({ id: parseInt(n.id, 10), file: n.file })
      ),
      r.char.forEach((n) =>
        s.char.push({
          id: parseInt(n.id, 10),
          page: parseInt(n.page, 10),
          x: parseInt(n.x, 10),
          y: parseInt(n.y, 10),
          width: parseInt(n.width, 10),
          height: parseInt(n.height, 10),
          xoffset: parseInt(n.xoffset, 10),
          yoffset: parseInt(n.yoffset, 10),
          xadvance: parseInt(n.xadvance, 10),
        })
      ),
      r.kerning.forEach((n) =>
        s.kerning.push({
          first: parseInt(n.first, 10),
          second: parseInt(n.second, 10),
          amount: parseInt(n.amount, 10),
        })
      ),
      r.distanceField.forEach((n) =>
        s.distanceField.push({
          distanceRange: parseInt(n.distanceRange, 10),
          fieldType: n.fieldType,
        })
      ),
      s
    );
  }
}
class pa {
  static test(t) {
    const e = t;
    return (
      typeof t != "string" &&
      "getElementsByTagName" in t &&
      e.getElementsByTagName("page").length &&
      e.getElementsByTagName("info")[0].getAttribute("face") !== null
    );
  }
  static parse(t) {
    const e = new Ts(),
      r = t.getElementsByTagName("info"),
      s = t.getElementsByTagName("common"),
      n = t.getElementsByTagName("page"),
      a = t.getElementsByTagName("char"),
      o = t.getElementsByTagName("kerning"),
      h = t.getElementsByTagName("distanceField");
    for (let l = 0; l < r.length; l++)
      e.info.push({
        face: r[l].getAttribute("face"),
        size: parseInt(r[l].getAttribute("size"), 10),
      });
    for (let l = 0; l < s.length; l++)
      e.common.push({
        lineHeight: parseInt(s[l].getAttribute("lineHeight"), 10),
      });
    for (let l = 0; l < n.length; l++)
      e.page.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file"),
      });
    for (let l = 0; l < a.length; l++) {
      const c = a[l];
      e.char.push({
        id: parseInt(c.getAttribute("id"), 10),
        page: parseInt(c.getAttribute("page"), 10) || 0,
        x: parseInt(c.getAttribute("x"), 10),
        y: parseInt(c.getAttribute("y"), 10),
        width: parseInt(c.getAttribute("width"), 10),
        height: parseInt(c.getAttribute("height"), 10),
        xoffset: parseInt(c.getAttribute("xoffset"), 10),
        yoffset: parseInt(c.getAttribute("yoffset"), 10),
        xadvance: parseInt(c.getAttribute("xadvance"), 10),
      });
    }
    for (let l = 0; l < o.length; l++)
      e.kerning.push({
        first: parseInt(o[l].getAttribute("first"), 10),
        second: parseInt(o[l].getAttribute("second"), 10),
        amount: parseInt(o[l].getAttribute("amount"), 10),
      });
    for (let l = 0; l < h.length; l++)
      e.distanceField.push({
        fieldType: h[l].getAttribute("fieldType"),
        distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10),
      });
    return e;
  }
}
class ma {
  static test(t) {
    return typeof t == "string" && t.includes("<font>")
      ? pa.test(F.ADAPTER.parseXML(t))
      : !1;
  }
  static parse(t) {
    return pa.parse(F.ADAPTER.parseXML(t));
  }
}
const _n = [es, pa, ma];
function Fy(i) {
  for (let t = 0; t < _n.length; t++) if (_n[t].test(i)) return _n[t];
  return null;
}
function Oy(i, t, e, r, s, n) {
  const a = e.fill;
  if (Array.isArray(a)) {
    if (a.length === 1) return a[0];
  } else return a;
  let o;
  const h = e.dropShadow ? e.dropShadowDistance : 0,
    l = e.padding || 0,
    c = i.width / r - h - l * 2,
    u = i.height / r - h - l * 2,
    d = a.slice(),
    f = e.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let m = 1; m < p; ++m) f.push(m / p);
  }
  if (
    (d.unshift(a[0]),
    f.unshift(0),
    d.push(a[a.length - 1]),
    f.push(1),
    e.fillGradientType === Bs.LINEAR_VERTICAL)
  ) {
    o = t.createLinearGradient(c / 2, l, c / 2, u + l);
    let p = 0;
    const m = (n.fontProperties.fontSize + e.strokeThickness) / u;
    for (let g = 0; g < s.length; g++) {
      const _ = n.lineHeight * g;
      for (let x = 0; x < d.length; x++) {
        let y = 0;
        typeof f[x] == "number" ? (y = f[x]) : (y = x / d.length);
        const v = _ / u + y * m;
        let T = Math.max(p, v);
        (T = Math.min(T, 1)), o.addColorStop(T, d[x]), (p = T);
      }
    }
  } else {
    o = t.createLinearGradient(l, u / 2, c + l, u / 2);
    const p = d.length + 1;
    let m = 1;
    for (let g = 0; g < d.length; g++) {
      let _;
      typeof f[g] == "number" ? (_ = f[g]) : (_ = m / p),
        o.addColorStop(_, d[g]),
        m++;
    }
  }
  return o;
}
function Ly(i, t, e, r, s, n, a) {
  const o = e.text,
    h = e.fontProperties;
  t.translate(r, s), t.scale(n, n);
  const l = a.strokeThickness / 2,
    c = -(a.strokeThickness / 2);
  if (
    ((t.font = a.toFontString()),
    (t.lineWidth = a.strokeThickness),
    (t.textBaseline = a.textBaseline),
    (t.lineJoin = a.lineJoin),
    (t.miterLimit = a.miterLimit),
    (t.fillStyle = Oy(i, t, a, n, [o], e)),
    (t.strokeStyle = a.stroke),
    a.dropShadow)
  ) {
    const u = a.dropShadowColor,
      d = a.dropShadowBlur * n,
      f = a.dropShadowDistance * n;
    (t.shadowColor = rt.shared
      .setValue(u)
      .setAlpha(a.dropShadowAlpha)
      .toRgbaString()),
      (t.shadowBlur = d),
      (t.shadowOffsetX = Math.cos(a.dropShadowAngle) * f),
      (t.shadowOffsetY = Math.sin(a.dropShadowAngle) * f);
  } else
    (t.shadowColor = "black"),
      (t.shadowBlur = 0),
      (t.shadowOffsetX = 0),
      (t.shadowOffsetY = 0);
  a.stroke &&
    a.strokeThickness &&
    t.strokeText(o, l, c + e.lineHeight - h.descent),
    a.fill && t.fillText(o, l, c + e.lineHeight - h.descent),
    t.setTransform(1, 0, 0, 1, 0, 0),
    (t.fillStyle = "rgba(0, 0, 0, 0)");
}
function rs(i) {
  return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0);
}
function lc(i) {
  return Array.from ? Array.from(i) : i.split("");
}
function Ny(i) {
  typeof i == "string" && (i = [i]);
  const t = [];
  for (let e = 0, r = i.length; e < r; e++) {
    const s = i[e];
    if (Array.isArray(s)) {
      if (s.length !== 2)
        throw new Error(
          `[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`
        );
      const n = s[0].charCodeAt(0),
        a = s[1].charCodeAt(0);
      if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = n, h = a; o <= h; o++) t.push(String.fromCharCode(o));
    } else t.push(...lc(s));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const we = class ie {
  constructor(t, e, r) {
    var c;
    const [s] = t.info,
      [n] = t.common,
      [a] = t.page,
      [o] = t.distanceField,
      h = Te(a.file),
      l = {};
    (this._ownsTextures = r),
      (this.font = s.face),
      (this.size = s.size),
      (this.lineHeight = n.lineHeight / h),
      (this.chars = {}),
      (this.pageTextures = l);
    for (let u = 0; u < t.page.length; u++) {
      const { id: d, file: f } = t.page[u];
      (l[d] = e instanceof Array ? e[u] : e[f]),
        o != null &&
          o.fieldType &&
          o.fieldType !== "none" &&
          ((l[d].baseTexture.alphaMode = Rt.NO_PREMULTIPLIED_ALPHA),
          (l[d].baseTexture.mipmap = ce.OFF));
    }
    for (let u = 0; u < t.char.length; u++) {
      const { id: d, page: f } = t.char[u];
      let {
        x: p,
        y: m,
        width: g,
        height: _,
        xoffset: x,
        yoffset: y,
        xadvance: v,
      } = t.char[u];
      (p /= h), (m /= h), (g /= h), (_ /= h), (x /= h), (y /= h), (v /= h);
      const T = new j(p + l[f].frame.x / h, m + l[f].frame.y / h, g, _);
      this.chars[d] = {
        xOffset: x,
        yOffset: y,
        xAdvance: v,
        kerning: {},
        texture: new O(l[f].baseTexture, T),
        page: f,
      };
    }
    for (let u = 0; u < t.kerning.length; u++) {
      let { first: d, second: f, amount: p } = t.kerning[u];
      (d /= h),
        (f /= h),
        (p /= h),
        this.chars[f] && (this.chars[f].kerning[d] = p);
    }
    (this.distanceFieldRange = o == null ? void 0 : o.distanceRange),
      (this.distanceFieldType =
        ((c = o == null ? void 0 : o.fieldType) == null
          ? void 0
          : c.toLowerCase()) ?? "none");
  }
  destroy() {
    for (const t in this.chars)
      this.chars[t].texture.destroy(), (this.chars[t].texture = null);
    for (const t in this.pageTextures)
      this._ownsTextures && this.pageTextures[t].destroy(!0),
        (this.pageTextures[t] = null);
    (this.chars = null), (this.pageTextures = null);
  }
  static install(t, e, r) {
    let s;
    if (t instanceof Ts) s = t;
    else {
      const a = Fy(t);
      if (!a) throw new Error("Unrecognized data format for font.");
      s = a.parse(t);
    }
    e instanceof O && (e = [e]);
    const n = new ie(s, e, r);
    return (ie.available[n.font] = n), n;
  }
  static uninstall(t) {
    const e = ie.available[t];
    if (!e) throw new Error(`No font found named '${t}'`);
    e.destroy(), delete ie.available[t];
  }
  static from(t, e, r) {
    if (!t) throw new Error("[BitmapFont] Property `name` is required.");
    const {
        chars: s,
        padding: n,
        resolution: a,
        textureWidth: o,
        textureHeight: h,
        ...l
      } = Object.assign({}, ie.defaultOptions, r),
      c = Ny(s),
      u = e instanceof Ne ? e : new Ne(e),
      d = o,
      f = new Ts();
    (f.info[0] = { face: u.fontFamily, size: u.fontSize }),
      (f.common[0] = { lineHeight: u.fontSize });
    let p = 0,
      m = 0,
      g,
      _,
      x,
      y = 0;
    const v = [];
    for (let M = 0; M < c.length; M++) {
      g ||
        ((g = F.ADAPTER.createCanvas()),
        (g.width = o),
        (g.height = h),
        (_ = g.getContext("2d")),
        (x = new W(g, { resolution: a, ...l })),
        v.push(new O(x)),
        f.page.push({ id: v.length - 1, file: "" }));
      const A = c[M],
        E = Ie.measureText(A, u, !1, g),
        B = E.width,
        U = Math.ceil(E.height),
        Y = Math.ceil((u.fontStyle === "italic" ? 2 : 1) * B);
      if (m >= h - U * a) {
        if (m === 0)
          throw new Error(
            `[BitmapFont] textureHeight ${h}px is too small (fontFamily: '${u.fontFamily}', fontSize: ${u.fontSize}px, char: '${A}')`
          );
        --M, (g = null), (_ = null), (x = null), (m = 0), (p = 0), (y = 0);
        continue;
      }
      if (((y = Math.max(U + E.fontProperties.descent, y)), Y * a + p >= d)) {
        if (p === 0)
          throw new Error(
            `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${u.fontFamily}', fontSize: ${u.fontSize}px, char: '${A}')`
          );
        --M, (m += y * a), (m = Math.ceil(m)), (p = 0), (y = 0);
        continue;
      }
      Ly(g, _, E, p, m, a, u);
      const P = rs(E.text);
      f.char.push({
        id: P,
        page: v.length - 1,
        x: p / a,
        y: m / a,
        width: Y,
        height: U,
        xoffset: 0,
        yoffset: 0,
        xadvance:
          B -
          (u.dropShadow ? u.dropShadowDistance : 0) -
          (u.stroke ? u.strokeThickness : 0),
      }),
        (p += (Y + 2 * n) * a),
        (p = Math.ceil(p));
    }
    if (!(r != null && r.skipKerning))
      for (let M = 0, A = c.length; M < A; M++) {
        const E = c[M];
        for (let B = 0; B < A; B++) {
          const U = c[B],
            Y = _.measureText(E).width,
            P = _.measureText(U).width,
            b = _.measureText(E + U).width - (Y + P);
          b && f.kerning.push({ first: rs(E), second: rs(U), amount: b });
        }
      }
    const T = new ie(f, v, !0);
    return (
      ie.available[t] !== void 0 && ie.uninstall(t), (ie.available[t] = T), T
    );
  }
};
(we.ALPHA = [["a", "z"], ["A", "Z"], " "]),
  (we.NUMERIC = [["0", "9"]]),
  (we.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
  (we.ASCII = [[" ", "~"]]),
  (we.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: we.ALPHANUMERIC,
  }),
  (we.available = {});
let Se = we;
var Uy = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,
  ky = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const xh = [],
  bh = [],
  Th = [],
  Gy = class cc extends Ut {
    constructor(t, e = {}) {
      super();
      const {
        align: r,
        tint: s,
        maxWidth: n,
        letterSpacing: a,
        fontName: o,
        fontSize: h,
      } = Object.assign({}, cc.styleDefaults, e);
      if (!Se.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
      (this._activePagesMeshData = []),
        (this._textWidth = 0),
        (this._textHeight = 0),
        (this._align = r),
        (this._tintColor = new rt(s)),
        (this._font = void 0),
        (this._fontName = o),
        (this._fontSize = h),
        (this.text = t),
        (this._maxWidth = n),
        (this._maxLineHeight = 0),
        (this._letterSpacing = a),
        (this._anchor = new _e(
          () => {
            this.dirty = !0;
          },
          this,
          0,
          0
        )),
        (this._roundPixels = F.ROUND_PIXELS),
        (this.dirty = !0),
        (this._resolution = F.RESOLUTION),
        (this._autoResolution = !0),
        (this._textureCache = {});
    }
    updateText() {
      var Y;
      const t = Se.available[this._fontName],
        e = this.fontSize,
        r = e / t.size,
        s = new Q(),
        n = [],
        a = [],
        o = [],
        h =
          this._text.replace(
            /(?:\r\n|\r)/g,
            `
`
          ) || " ",
        l = lc(h),
        c = (this._maxWidth * t.size) / e,
        u = t.distanceFieldType === "none" ? xh : bh;
      let d = null,
        f = 0,
        p = 0,
        m = 0,
        g = -1,
        _ = 0,
        x = 0,
        y = 0,
        v = 0;
      for (let P = 0; P < l.length; P++) {
        const b = l[P],
          S = rs(b);
        if (
          (/(?:\s)/.test(b) && ((g = P), (_ = f), v++),
          b === "\r" ||
            b ===
              `
`)
        ) {
          a.push(f),
            o.push(-1),
            (p = Math.max(p, f)),
            ++m,
            ++x,
            (s.x = 0),
            (s.y += t.lineHeight),
            (d = null),
            (v = 0);
          continue;
        }
        const G = t.chars[S];
        if (!G) continue;
        d && G.kerning[d] && (s.x += G.kerning[d]);
        const V = Th.pop() || {
          texture: O.EMPTY,
          line: 0,
          charCode: 0,
          prevSpaces: 0,
          position: new Q(),
        };
        (V.texture = G.texture),
          (V.line = m),
          (V.charCode = S),
          (V.position.x = Math.round(
            s.x + G.xOffset + this._letterSpacing / 2
          )),
          (V.position.y = Math.round(s.y + G.yOffset)),
          (V.prevSpaces = v),
          n.push(V),
          (f =
            V.position.x +
            Math.max(G.xAdvance - G.xOffset, G.texture.orig.width)),
          (s.x += G.xAdvance + this._letterSpacing),
          (y = Math.max(y, G.yOffset + G.texture.height)),
          (d = S),
          g !== -1 &&
            c > 0 &&
            s.x > c &&
            (++x,
            Pr(n, 1 + g - x, 1 + P - g),
            (P = g),
            (g = -1),
            a.push(_),
            o.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0),
            (p = Math.max(p, _)),
            m++,
            (s.x = 0),
            (s.y += t.lineHeight),
            (d = null),
            (v = 0));
      }
      const T = l[l.length - 1];
      T !== "\r" &&
        T !==
          `
` &&
        (/(?:\s)/.test(T) && (f = _),
        a.push(f),
        (p = Math.max(p, f)),
        o.push(-1));
      const M = [];
      for (let P = 0; P <= m; P++) {
        let b = 0;
        this._align === "right"
          ? (b = p - a[P])
          : this._align === "center"
          ? (b = (p - a[P]) / 2)
          : this._align === "justify" && (b = o[P] < 0 ? 0 : (p - a[P]) / o[P]),
          M.push(b);
      }
      const A = n.length,
        E = {},
        B = [],
        U = this._activePagesMeshData;
      u.push(...U);
      for (let P = 0; P < A; P++) {
        const b = n[P].texture,
          S = b.baseTexture.uid;
        if (!E[S]) {
          let G = u.pop();
          if (!G) {
            const $ = new cy();
            let z, ht;
            t.distanceFieldType === "none"
              ? ((z = new gh(O.EMPTY)), (ht = X.NORMAL))
              : ((z = new gh(O.EMPTY, {
                  program: ve.from(ky, Uy),
                  uniforms: { uFWidth: 0 },
                })),
                (ht = X.NORMAL_NPM));
            const I = new mh($, z);
            (I.blendMode = ht),
              (G = {
                index: 0,
                indexCount: 0,
                vertexCount: 0,
                uvsCount: 0,
                total: 0,
                mesh: I,
                vertices: null,
                uvs: null,
                indices: null,
              });
          }
          (G.index = 0),
            (G.indexCount = 0),
            (G.vertexCount = 0),
            (G.uvsCount = 0),
            (G.total = 0);
          const { _textureCache: V } = this;
          (V[S] = V[S] || new O(b.baseTexture)),
            (G.mesh.texture = V[S]),
            (G.mesh.tint = this._tintColor.value),
            B.push(G),
            (E[S] = G);
        }
        E[S].total++;
      }
      for (let P = 0; P < U.length; P++)
        B.includes(U[P]) || this.removeChild(U[P].mesh);
      for (let P = 0; P < B.length; P++)
        B[P].mesh.parent !== this && this.addChild(B[P].mesh);
      this._activePagesMeshData = B;
      for (const P in E) {
        const b = E[P],
          S = b.total;
        if (
          !(((Y = b.indices) == null ? void 0 : Y.length) > 6 * S) ||
          b.vertices.length < mh.BATCHABLE_SIZE * 2
        )
          (b.vertices = new Float32Array(4 * 2 * S)),
            (b.uvs = new Float32Array(4 * 2 * S)),
            (b.indices = new Uint16Array(6 * S));
        else {
          const G = b.total,
            V = b.vertices;
          for (let $ = G * 4 * 2; $ < V.length; $++) V[$] = 0;
        }
        b.mesh.size = 6 * S;
      }
      for (let P = 0; P < A; P++) {
        const b = n[P];
        let S =
          b.position.x +
          M[b.line] * (this._align === "justify" ? b.prevSpaces : 1);
        this._roundPixels && (S = Math.round(S));
        const G = S * r,
          V = b.position.y * r,
          $ = b.texture,
          z = E[$.baseTexture.uid],
          ht = $.frame,
          I = $._uvs,
          C = z.index++;
        (z.indices[C * 6 + 0] = 0 + C * 4),
          (z.indices[C * 6 + 1] = 1 + C * 4),
          (z.indices[C * 6 + 2] = 2 + C * 4),
          (z.indices[C * 6 + 3] = 0 + C * 4),
          (z.indices[C * 6 + 4] = 2 + C * 4),
          (z.indices[C * 6 + 5] = 3 + C * 4),
          (z.vertices[C * 8 + 0] = G),
          (z.vertices[C * 8 + 1] = V),
          (z.vertices[C * 8 + 2] = G + ht.width * r),
          (z.vertices[C * 8 + 3] = V),
          (z.vertices[C * 8 + 4] = G + ht.width * r),
          (z.vertices[C * 8 + 5] = V + ht.height * r),
          (z.vertices[C * 8 + 6] = G),
          (z.vertices[C * 8 + 7] = V + ht.height * r),
          (z.uvs[C * 8 + 0] = I.x0),
          (z.uvs[C * 8 + 1] = I.y0),
          (z.uvs[C * 8 + 2] = I.x1),
          (z.uvs[C * 8 + 3] = I.y1),
          (z.uvs[C * 8 + 4] = I.x2),
          (z.uvs[C * 8 + 5] = I.y2),
          (z.uvs[C * 8 + 6] = I.x3),
          (z.uvs[C * 8 + 7] = I.y3);
      }
      (this._textWidth = p * r), (this._textHeight = (s.y + t.lineHeight) * r);
      for (const P in E) {
        const b = E[P];
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
          let $ = 0;
          const z = this._textWidth * this.anchor.x,
            ht = this._textHeight * this.anchor.y;
          for (let I = 0; I < b.total; I++)
            (b.vertices[$++] -= z),
              (b.vertices[$++] -= ht),
              (b.vertices[$++] -= z),
              (b.vertices[$++] -= ht),
              (b.vertices[$++] -= z),
              (b.vertices[$++] -= ht),
              (b.vertices[$++] -= z),
              (b.vertices[$++] -= ht);
        }
        this._maxLineHeight = y * r;
        const S = b.mesh.geometry.getBuffer("aVertexPosition"),
          G = b.mesh.geometry.getBuffer("aTextureCoord"),
          V = b.mesh.geometry.getIndex();
        (S.data = b.vertices),
          (G.data = b.uvs),
          (V.data = b.indices),
          S.update(),
          G.update(),
          V.update();
      }
      for (let P = 0; P < n.length; P++) Th.push(n[P]);
      (this._font = t), (this.dirty = !1);
    }
    updateTransform() {
      this.validate(), this.containerUpdateTransform();
    }
    _render(t) {
      this._autoResolution &&
        this._resolution !== t.resolution &&
        ((this._resolution = t.resolution), (this.dirty = !0));
      const {
        distanceFieldRange: e,
        distanceFieldType: r,
        size: s,
      } = Se.available[this._fontName];
      if (r !== "none") {
        const { a: n, b: a, c: o, d: h } = this.worldTransform,
          l = Math.sqrt(n * n + a * a),
          c = Math.sqrt(o * o + h * h),
          u = (Math.abs(l) + Math.abs(c)) / 2,
          d = this.fontSize / s,
          f = t._view.resolution;
        for (const p of this._activePagesMeshData)
          p.mesh.shader.uniforms.uFWidth = u * e * d * f;
      }
      super._render(t);
    }
    getLocalBounds() {
      return this.validate(), super.getLocalBounds();
    }
    validate() {
      const t = Se.available[this._fontName];
      if (!t) throw new Error(`Missing BitmapFont "${this._fontName}"`);
      this._font !== t && (this.dirty = !0), this.dirty && this.updateText();
    }
    get tint() {
      return this._tintColor.value;
    }
    set tint(t) {
      if (this.tint !== t) {
        this._tintColor.setValue(t);
        for (let e = 0; e < this._activePagesMeshData.length; e++)
          this._activePagesMeshData[e].mesh.tint = t;
      }
    }
    get align() {
      return this._align;
    }
    set align(t) {
      this._align !== t && ((this._align = t), (this.dirty = !0));
    }
    get fontName() {
      return this._fontName;
    }
    set fontName(t) {
      if (!Se.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
      this._fontName !== t && ((this._fontName = t), (this.dirty = !0));
    }
    get fontSize() {
      return this._fontSize ?? Se.available[this._fontName].size;
    }
    set fontSize(t) {
      this._fontSize !== t && ((this._fontSize = t), (this.dirty = !0));
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(t) {
      typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
    }
    get text() {
      return this._text;
    }
    set text(t) {
      (t = String(t ?? "")),
        this._text !== t && ((this._text = t), (this.dirty = !0));
    }
    get maxWidth() {
      return this._maxWidth;
    }
    set maxWidth(t) {
      this._maxWidth !== t && ((this._maxWidth = t), (this.dirty = !0));
    }
    get maxLineHeight() {
      return this.validate(), this._maxLineHeight;
    }
    get textWidth() {
      return this.validate(), this._textWidth;
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(t) {
      this._letterSpacing !== t &&
        ((this._letterSpacing = t), (this.dirty = !0));
    }
    get roundPixels() {
      return this._roundPixels;
    }
    set roundPixels(t) {
      t !== this._roundPixels && ((this._roundPixels = t), (this.dirty = !0));
    }
    get textHeight() {
      return this.validate(), this._textHeight;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      (this._autoResolution = !1),
        this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
    }
    destroy(t) {
      const { _textureCache: e } = this,
        r = Se.available[this._fontName].distanceFieldType === "none" ? xh : bh;
      r.push(...this._activePagesMeshData);
      for (const s of this._activePagesMeshData) this.removeChild(s.mesh);
      (this._activePagesMeshData = []),
        r
          .filter((s) => e[s.mesh.texture.baseTexture.uid])
          .forEach((s) => {
            s.mesh.texture = O.EMPTY;
          });
      for (const s in e) e[s].destroy(), delete e[s];
      (this._font = null),
        (this._tintColor = null),
        (this._textureCache = null),
        super.destroy(t);
    }
  };
Gy.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0,
};
const Hy = [".xml", ".fnt"],
  $y = {
    extension: { type: R.LoadParser, priority: qt.Normal },
    name: "loadBitmapFont",
    test(i) {
      return Hy.includes(mt.extname(i).toLowerCase());
    },
    async testParse(i) {
      return es.test(i) || ma.test(i);
    },
    async parse(i, t, e) {
      const r = es.test(i) ? es.parse(i) : ma.parse(i),
        { src: s } = t,
        { page: n } = r,
        a = [];
      for (let l = 0; l < n.length; ++l) {
        const c = n[l].file;
        let u = mt.join(mt.dirname(s), c);
        (u = ha(u, s)), a.push(u);
      }
      const o = await e.load(a),
        h = a.map((l) => o[l]);
      return Se.install(r, h, !0);
    },
    async load(i, t) {
      return (await F.ADAPTER.fetch(i)).text();
    },
    unload(i) {
      i.destroy();
    },
  };
L.add($y);
const ga = class xr extends Ne {
  constructor() {
    super(...arguments),
      (this._fonts = []),
      (this._overrides = []),
      (this._stylesheet = ""),
      (this.fontsDirty = !1);
  }
  static from(t) {
    return new xr(
      Object.keys(xr.defaultOptions).reduce((e, r) => ({ ...e, [r]: t[r] }), {})
    );
  }
  cleanFonts() {
    this._fonts.length > 0 &&
      (this._fonts.forEach((t) => {
        URL.revokeObjectURL(t.src),
          t.refs--,
          t.refs === 0 &&
            (t.fontFace && document.fonts.delete(t.fontFace),
            delete xr.availableFonts[t.originalUrl]);
      }),
      (this.fontFamily = "Arial"),
      (this._fonts.length = 0),
      this.styleID++,
      (this.fontsDirty = !0));
  }
  loadFont(t, e = {}) {
    const { availableFonts: r } = xr;
    if (r[t]) {
      const s = r[t];
      return (
        this._fonts.push(s),
        s.refs++,
        this.styleID++,
        (this.fontsDirty = !0),
        Promise.resolve()
      );
    }
    return F.ADAPTER.fetch(t)
      .then((s) => s.blob())
      .then(
        async (s) =>
          new Promise((n, a) => {
            const o = URL.createObjectURL(s),
              h = new FileReader();
            (h.onload = () => n([o, h.result])),
              (h.onerror = a),
              h.readAsDataURL(s);
          })
      )
      .then(async ([s, n]) => {
        const a = Object.assign(
          {
            family: mt.basename(t, mt.extname(t)),
            weight: "normal",
            style: "normal",
            display: "auto",
            src: s,
            dataSrc: n,
            refs: 1,
            originalUrl: t,
            fontFace: null,
          },
          e
        );
        (r[t] = a), this._fonts.push(a), this.styleID++;
        const o = new FontFace(a.family, `url(${a.src})`, {
          weight: a.weight,
          style: a.style,
          display: a.display,
        });
        (a.fontFace = o),
          await o.load(),
          document.fonts.add(o),
          await document.fonts.ready,
          this.styleID++,
          (this.fontsDirty = !0);
      });
  }
  addOverride(...t) {
    const e = t.filter((r) => !this._overrides.includes(r));
    e.length > 0 && (this._overrides.push(...e), this.styleID++);
  }
  removeOverride(...t) {
    const e = t.filter((r) => this._overrides.includes(r));
    e.length > 0 &&
      ((this._overrides = this._overrides.filter((r) => !e.includes(r))),
      this.styleID++);
  }
  toCSS(t) {
    return [
      `transform: scale(${t})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []),
      ...(this.wordWrap
        ? [
            `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
            `max-width: ${this.wordWrapWidth}px`,
          ]
        : []),
      ...(this.strokeThickness
        ? [
            `-webkit-text-stroke-width: ${this.strokeThickness}px`,
            `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            `text-stroke-width: ${this.strokeThickness}px`,
            `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            "paint-order: stroke",
          ]
        : []),
      ...(this.dropShadow ? [this.dropShadowToCSS()] : []),
      ...this._overrides,
    ].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce(
      (t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`,
      this._stylesheet
    );
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(t) {
    this._stylesheet !== t && ((this._stylesheet = t), this.styleID++);
  }
  normalizeColor(t) {
    return Array.isArray(t) && (t = Bf(t)), typeof t == "number" ? Mf(t) : t;
  }
  dropShadowToCSS() {
    let t = this.normalizeColor(this.dropShadowColor);
    const e = this.dropShadowAlpha,
      r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance),
      s = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    t.startsWith("#") &&
      e < 1 &&
      (t += ((e * 255) | 0).toString(16).padStart(2, "0"));
    const n = `${r}px ${s}px`;
    return this.dropShadowBlur > 0
      ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}`
      : `text-shadow: ${n} ${t}`;
  }
  reset() {
    Object.assign(this, xr.defaultOptions);
  }
  onBeforeDraw() {
    const { fontsDirty: t } = this;
    return (
      (this.fontsDirty = !1),
      this.isSafari && this._fonts.length > 0 && t
        ? new Promise((e) => setTimeout(e, 100))
        : Promise.resolve()
    );
  }
  get isSafari() {
    const { userAgent: t } = F.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(t);
  }
  set fillGradientStops(t) {
    console.warn(
      "[HTMLTextStyle] fillGradientStops is not supported by HTMLText"
    );
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(t) {
    console.warn(
      "[HTMLTextStyle] fillGradientType is not supported by HTMLText"
    );
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(t) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(t) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(t) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(t) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(t) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
(ga.availableFonts = {}),
  (ga.defaultOptions = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    whiteSpace: "normal",
    wordWrap: !1,
    wordWrapWidth: 100,
  });
let vn = ga;
const Wi = class br extends de {
  constructor(t = "", e = {}) {
    super(O.EMPTY),
      (this._text = null),
      (this._style = null),
      (this._autoResolution = !0),
      (this.localStyleID = -1),
      (this.dirty = !1),
      (this._updateID = 0),
      (this.ownsStyle = !1);
    const r = new Image(),
      s = O.from(r, {
        scaleMode: F.SCALE_MODE,
        resourceOptions: { autoLoad: !1 },
      });
    (s.orig = new j()), (s.trim = new j()), (this.texture = s);
    const n = "http://www.w3.org/2000/svg",
      a = "http://www.w3.org/1999/xhtml",
      o = document.createElementNS(n, "svg"),
      h = document.createElementNS(n, "foreignObject"),
      l = document.createElementNS(a, "div"),
      c = document.createElementNS(a, "style");
    h.setAttribute("width", "10000"),
      h.setAttribute("height", "10000"),
      (h.style.overflow = "hidden"),
      o.appendChild(h),
      (this.maxWidth = br.defaultMaxWidth),
      (this.maxHeight = br.defaultMaxHeight),
      (this._domElement = l),
      (this._styleElement = c),
      (this._svgRoot = o),
      (this._foreignObject = h),
      this._foreignObject.appendChild(c),
      this._foreignObject.appendChild(l),
      (this._image = r),
      (this._loadImage = new Image()),
      (this._autoResolution = br.defaultAutoResolution),
      (this._resolution = br.defaultResolution ?? F.RESOLUTION),
      (this.text = t),
      (this.style = e);
  }
  measureText(t) {
    var c, u;
    const {
      text: e,
      style: r,
      resolution: s,
    } = Object.assign(
      { text: this._text, style: this._style, resolution: this._resolution },
      t
    );
    Object.assign(this._domElement, { innerHTML: e, style: r.toCSS(s) }),
      (this._styleElement.textContent = r.toGlobalCSS()),
      document.body.appendChild(this._svgRoot);
    const n = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width: a, height: o } = n;
    (a > this.maxWidth || o > this.maxHeight) &&
      console.warn(
        "[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property."
      );
    const h = Math.min(this.maxWidth, Math.ceil(a)),
      l = Math.min(this.maxHeight, Math.ceil(o));
    return (
      this._svgRoot.setAttribute("width", h.toString()),
      this._svgRoot.setAttribute("height", l.toString()),
      e !== this._text && (this._domElement.innerHTML = this._text),
      r !== this._style &&
        (Object.assign(this._domElement, {
          style: (c = this._style) == null ? void 0 : c.toCSS(s),
        }),
        (this._styleElement.textContent =
          (u = this._style) == null ? void 0 : u.toGlobalCSS())),
      { width: h + r.padding * 2, height: l + r.padding * 2 }
    );
  }
  async updateText(t = !0) {
    const { style: e, _image: r, _loadImage: s } = this;
    if (
      (this.localStyleID !== e.styleID &&
        ((this.dirty = !0), (this.localStyleID = e.styleID)),
      !this.dirty && t)
    )
      return;
    const { width: n, height: a } = this.measureText();
    (r.width = s.width = Math.ceil(Math.max(1, n))),
      (r.height = s.height = Math.ceil(Math.max(1, a))),
      this._updateID++;
    const o = this._updateID;
    await new Promise((h) => {
      s.onload = async () => {
        if (o < this._updateID) {
          h();
          return;
        }
        await e.onBeforeDraw(),
          (r.src = s.src),
          (s.onload = null),
          (s.src = ""),
          this.updateTexture(),
          h();
      };
      const l = new XMLSerializer().serializeToString(this._svgRoot);
      s.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(l)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const { style: t, texture: e, _image: r, resolution: s } = this,
      { padding: n } = t,
      { baseTexture: a } = e;
    (e.trim.width = e._frame.width = r.width / s),
      (e.trim.height = e._frame.height = r.height / s),
      (e.trim.x = -n),
      (e.trim.y = -n),
      (e.orig.width = e._frame.width - n * 2),
      (e.orig.height = e._frame.height - n * 2),
      this._onTextureUpdate(),
      a.setRealSize(r.width, r.height, s),
      (this.dirty = !1);
  }
  _render(t) {
    this._autoResolution &&
      this._resolution !== t.resolution &&
      ((this._resolution = t.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._render(t);
  }
  _renderCanvas(t) {
    this._autoResolution &&
      this._resolution !== t.resolution &&
      ((this._resolution = t.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._renderCanvas(t);
  }
  getLocalBounds(t) {
    return this.updateText(!0), super.getLocalBounds(t);
  }
  _calculateBounds() {
    this.updateText(!0),
      this.calculateVertices(),
      this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = !0;
  }
  destroy(t) {
    var r, s, n, a, o;
    typeof t == "boolean" && (t = { children: t }),
      (t = Object.assign({}, br.defaultDestroyOptions, t)),
      super.destroy(t);
    const e = null;
    this.ownsStyle && ((r = this._style) == null || r.cleanFonts()),
      (this._style = e),
      (s = this._svgRoot) == null || s.remove(),
      (this._svgRoot = e),
      (n = this._domElement) == null || n.remove(),
      (this._domElement = e),
      (a = this._foreignObject) == null || a.remove(),
      (this._foreignObject = e),
      (o = this._styleElement) == null || o.remove(),
      (this._styleElement = e),
      (this._loadImage.src = ""),
      (this._loadImage.onload = null),
      (this._loadImage = e),
      (this._image.src = ""),
      (this._image = e);
  }
  get width() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.x) * this._image.width) / this.resolution
    );
  }
  set width(t) {
    this.updateText(!0);
    const e = De(this.scale.x) || 1;
    (this.scale.x = (e * t) / this._image.width / this.resolution),
      (this._width = t);
  }
  get height() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.y) * this._image.height) / this.resolution
    );
  }
  set height(t) {
    this.updateText(!0);
    const e = De(this.scale.y) || 1;
    (this.scale.y = (e * t) / this._image.height / this.resolution),
      (this._height = t);
  }
  get style() {
    return this._style;
  }
  set style(t) {
    this._style !== t &&
      ((t = t || {}),
      t instanceof vn
        ? ((this.ownsStyle = !1), (this._style = t))
        : t instanceof Ne
        ? (console.warn(
            "[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"
          ),
          (this.ownsStyle = !0),
          (this._style = vn.from(t)))
        : ((this.ownsStyle = !0), (this._style = new vn(t))),
      (this.localStyleID = -1),
      (this.dirty = !0));
  }
  get text() {
    return this._text;
  }
  set text(t) {
    (t = String(t === "" || t === null || t === void 0 ? " " : t)),
      (t = this.sanitiseText(t)),
      this._text !== t && ((this._text = t), (this.dirty = !0));
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    (this._autoResolution = !1),
      this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
  }
  sanitiseText(t) {
    return t
      .replace(/<br>/gi, "<br/>")
      .replace(/<hr>/gi, "<hr/>")
      .replace(/&nbsp;/gi, "&#160;");
  }
};
(Wi.defaultDestroyOptions = { texture: !0, children: !1, baseTexture: !0 }),
  (Wi.defaultMaxWidth = 2024),
  (Wi.defaultMaxHeight = 2024),
  (Wi.defaultAutoResolution = !0);
const pr = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0,
  autoStart: !0,
  antialias: !0,
  transparent: !1,
  resolution: 1,
};
new Ma({
  width: pr.width,
  height: pr.height,
  backgroundColor: pr.backgroundColor,
  autoStart: pr.autoStart,
  antialias: pr.antialias,
  resolution: pr.resolution,
});
const H = new Ma({ width: 1280, height: 720 }),
  Xy = H.view;
document.body.appendChild(Xy);
const kt = { gameTime: 60, asteroidsCount: 7, bulletsCount: 10, bossHP: 4 };
let bt,
  ii = [],
  fi,
  Ze = [],
  et,
  $t,
  Ft,
  Pe,
  Nt = kt.bulletsCount,
  xe = kt.gameTime,
  ya = !1,
  Ds = 0,
  Me = !1;
const uc = kt.bossHP;
let dc = !1,
  oe = !1,
  pi = !1,
  La,
  fc,
  Fs,
  is,
  _a;
const Ar = {
    win: "YOU WIN!",
    lose: "YOU LOSE!",
    levelTwo: `PERFECT!
 
  LEVEL 2
 
  READY!`,
  },
  Vy = O.from("/netGame/assets/image/background/pngwing.com.png"),
  Na = new de(Vy);
Na.width = H.screen.width;
Na.height = H.screen.height - 70;
const hr = new Ut(),
  Yt = new $r();
Yt.beginFill(0);
Yt.lineStyle(2, 16777215);
Yt.drawRect(0, 0, 200, 50);
Yt.endFill();
const Ua = new Xr("Start Game", { fill: 16777215 });
Ua.anchor.set(0.5);
Ua.position.set(Yt.width / 2, Yt.height / 2);
hr.addChild(Yt, Ua);
hr.position.set(
  H.screen.width / 2 - Yt.width / 2,
  H.screen.height - Yt.height - 5
);
hr.eventMode = "dynamic";
hr.on("pointerover", s_);
hr.on("pointerout", n_);
hr.on("pointerdown", jy);
const Wy = O.from("/netGame/assets/image/others/asteroid.png");
let Ue = new Xr(xe, { fill: 14423100 });
Ue.position.set(H.screen.width - 20 - Ue.width, 20);
const zy = O.from("/netGame/assets/image/others/player-rocket.png");
bt = new de(zy);
bt.width = 120;
bt.height = 190;
bt.position.set(H.screen.width / 2 - bt.width / 2, H.screen.height - 260);
fi = new Xr(`bullets: ${Nt}/${kt.bulletsCount}`, { fill: 14423100 });
fi.position.set(20, 20);
function Or() {
  a_(),
    (Ue.text = kt.gameTime),
    Os(),
    H.stage.addChild(Na),
    H.stage.addChild(hr),
    H.stage.addChild(fi),
    H.stage.addChild(bt),
    H.stage.addChild(Ue);
}
function jy() {
  ya ||
    (window.addEventListener("keydown", o_),
    (oe = !1),
    H.stage.removeChild(Pe),
    (xe = kt.gameTime),
    (Nt = kt.bulletsCount),
    (Ze = []),
    (pi = !1),
    (Me = !1),
    H.stage.removeChild(Pe),
    H.stage.addChild(Ue),
    pc(),
    Yy(),
    (ya = !0));
}
function Yy() {
  let i = 0;
  _a = setInterval(() => {
    qy(), i++, i >= kt.asteroidsCount && clearInterval(_a);
  }, 1e3);
}
function qy() {
  const i = new de(Wy);
  (i.width = 100), (i.height = 100);
  const t = bt.width / 2;
  let e = Math.random() * (H.screen.width - i.width),
    r = 30 + Math.random() * (H.screen.height / 3);
  for (; Math.abs(e - bt.x) < t; )
    e = Math.random() * (H.screen.width - i.width);
  i.position.set(e, r), H.stage.addChild(i), Ze.push(i);
}
function pc() {
  (xe = kt.gameTime),
    (La = setInterval(() => {
      xe--, (Ue.text = `${xe}`), xe <= 0 && va();
    }, 1e3));
}
function Ky() {
  const i = Zy(),
    t = setInterval(() => {
      (i.y -= 5),
        i.y < 0 &&
          (clearInterval(t),
          H.stage.removeChild(i),
          (ii = ii.filter((e) => e !== i)),
          Os(),
          Nt === 1 && ((pi = !0), console.log("bilc1 -->")),
          Nt === 0 &&
            setTimeout(() => {
              (pi = !1), va();
            }, 1e3));
      for (let e = 0; e < Ze.length; e++)
        if (i.getBounds().intersects(Ze[e].getBounds())) {
          clearInterval(t),
            H.stage.removeChild(i),
            H.stage.removeChild(Ze[e]),
            (ii = ii.filter((r) => r !== i)),
            Ze.splice(e, 1),
            (oe = !1),
            (dc = !0),
            va();
          break;
        }
      Me &&
        et &&
        i.getBounds().intersects(et.getBounds()) &&
        (clearInterval(t),
        H.stage.removeChild(i),
        r_(),
        Ds === 0 &&
          ((oe = !0),
          wr(Ar.win),
          H.stage.removeChild(et),
          H.stage.removeChild(Ft),
          clearInterval(Fs),
          Sr(),
          clearInterval(Nt),
          setTimeout(() => {
            H.stage.removeChildren(), Or();
          }, 2e3)));
    }, 16);
}
function Zy() {
  const i = new $r(),
    t = 7;
  return (
    i.beginFill(16776960),
    i.drawCircle(0, -10, t),
    i.endFill(),
    i.position.set(bt.x + bt.width / 2, bt.y),
    H.stage.addChild(i),
    ii.push(i),
    i
  );
}
function va() {
  (oe && dc) ||
    (!Me && !pi && (Nt === 0 || xe <= 0)
      ? (wr(Ar.lose),
        Sr(),
        (oe = !1),
        setTimeout(() => {
          H.stage.removeChildren(), Or();
        }, 2e3))
      : !Me && Ze.length === 0
      ? (wr(Ar.levelTwo),
        Sr(),
        clearInterval(Nt),
        (Me = !0),
        setTimeout(Qy, 3e3),
        (oe = !0))
      : Me && xe <= 0
      ? (wr(Ar.lose),
        (oe = !0),
        Sr(),
        setTimeout(() => {
          H.stage.removeChildren(), Or();
        }, 2e3))
      : Me &&
        Nt <= 0 &&
        (wr(Ar.lose),
        Sr(),
        setTimeout(() => {
          H.stage.removeChildren(), Or();
        }, 2e3)),
    (ya = !1));
}
function wr(i) {
  (Pe = new Xr(i, { fill: 16777215, fontSize: 64 })),
    Pe.position.set(
      H.screen.width / 2 - Pe.width / 2,
      H.screen.height / 3 - Pe.height / 2
    ),
    H.stage.addChild(Pe);
}
function Qy() {
  (pi = !1),
    (Nt = kt.bulletsCount),
    (oe = !1),
    H.stage.removeChild(Pe),
    pc(),
    H.stage.addChild(Ue),
    Os(),
    Jy(),
    (Fs = setInterval(t_, 2e3));
}
function Sr() {
  clearInterval(La), (xe = kt.gameTime), H.stage.removeChild(Ue);
}
function Jy() {
  const i = O.from("/netGame/assets/image/others/boss.png");
  (et = new de(i)),
    (et.width = 200),
    (et.height = 200),
    et.position.set(H.screen.width / 2, 100),
    H.stage.addChild(et),
    (Ft = new $r()),
    Ft.beginFill(16711680),
    Ft.drawRect(0, 0, 200, 20),
    Ft.endFill(),
    Ft.position.set(H.screen.width / 2 - 100, 50),
    H.stage.addChild(Ft),
    (Ds = uc),
    e_();
}
function t_() {
  ($t = new $r()),
    $t.beginFill(16711680),
    $t.drawCircle(et.x + et.width / 2, et.y + et.height, 10),
    $t.endFill(),
    H.stage.addChild($t),
    (is = setInterval(() => {
      ($t.y += 5),
        ($t.y > H.screen.height || $t.getBounds().intersects(bt.getBounds())) &&
          (clearInterval(is),
          H.stage.removeChild($t),
          $t.getBounds().intersects(bt.getBounds()) &&
            (H.stage.removeChild(et),
            H.stage.removeChild(Ft),
            wr(Ar.lose),
            (oe = !0),
            clearInterval(Fs),
            setTimeout(() => {
              Sr(),
                setTimeout(() => {
                  H.stage.removeChildren(), Or();
                }, 2e3);
            }, 2e3)));
    }, 16)),
    !et && !Me && (clearInterval(is), H.stage.removeChild($t));
}
function e_() {
  requestAnimationFrame(() => {
    fc = setInterval(() => {
      const e = Math.random() * (H.screen.width - et.width);
      et.x < e ? (et.x += 100) : et.x > e && (et.x -= 100),
        et.x < 0
          ? (et.x = 0)
          : et.x > H.screen.width - et.width &&
            (et.x = H.screen.width - et.width);
    }, 500);
  });
}
function r_() {
  Ds--, i_();
}
function i_() {
  const t = 200 * (Ds / uc);
  Ft.clear(), Ft.beginFill(16711680), Ft.drawRect(0, 0, t, 20), Ft.endFill();
}
function s_() {
  Yt.tint = 6710886;
}
function n_() {
  Yt.tint = 16777215;
}
function a_() {
  clearInterval(La),
    clearInterval(fc),
    clearInterval(Fs),
    clearInterval(is),
    clearInterval(_a);
}
function o_(i) {
  i.key === "ArrowLeft"
    ? bt.x - 30 >= 0 && (bt.x -= 30)
    : i.key === "ArrowRight"
    ? bt.x + bt.width + 30 <= H.screen.width && (bt.x += 30)
    : i.key === " " && !oe && Nt > 0 && (Ky(), Nt--, Os());
}
function Os() {
  fi && (fi.text = `bullets: ${Nt}/${kt.bulletsCount}`);
}
function mc() {
  const i = new Audio("/netGame/assets/audio/1.mp3");
  (i.loop = !0),
    (i.volume = 0.3),
    i.play(),
    document.removeEventListener("click", mc);
}
Or();
document.addEventListener("click", mc);
