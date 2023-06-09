function dg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var to =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Gp(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Xp = { exports: {} },
  Is = {},
  Yp = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Di = Symbol.for("react.element"),
  fg = Symbol.for("react.portal"),
  pg = Symbol.for("react.fragment"),
  hg = Symbol.for("react.strict_mode"),
  mg = Symbol.for("react.profiler"),
  gg = Symbol.for("react.provider"),
  yg = Symbol.for("react.context"),
  vg = Symbol.for("react.forward_ref"),
  xg = Symbol.for("react.suspense"),
  wg = Symbol.for("react.memo"),
  Sg = Symbol.for("react.lazy"),
  Od = Symbol.iterator;
function bg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Od && e[Od]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zp = Object.assign,
  e0 = {};
function Lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = e0),
    (this.updater = n || Jp);
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function t0() {}
t0.prototype = Lr.prototype;
function zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = e0),
    (this.updater = n || Jp);
}
var Du = (zu.prototype = new t0());
Du.constructor = zu;
Zp(Du, Lr.prototype);
Du.isPureReactComponent = !0;
var Nd = Array.isArray,
  n0 = Object.prototype.hasOwnProperty,
  $u = { current: null },
  r0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function i0(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      n0.call(t, r) && !r0.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Di,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: $u.current,
  };
}
function jg(e, t) {
  return {
    $$typeof: Di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Di;
}
function kg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pd = /\/+/g;
function bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kg("" + e.key)
    : t.toString(36);
}
function ko(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Di:
          case fg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + bl(s, 0) : r),
      Nd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Pd, "$&/") + "/"),
          ko(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Fu(i) &&
            (i = jg(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Pd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Nd(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + bl(o, l);
      s += ko(o, t, n, u, i);
    }
  else if (((u = bg(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + bl(o, l++)), (s += ko(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function no(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ko(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Cg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  Co = { transition: null },
  Eg = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Co,
    ReactCurrentOwner: $u,
  };
B.Children = {
  map: no,
  forEach: function (e, t, n) {
    no(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      no(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      no(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Lr;
B.Fragment = pg;
B.Profiler = mg;
B.PureComponent = zu;
B.StrictMode = hg;
B.Suspense = xg;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eg;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zp({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = $u.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      n0.call(t, u) &&
        !r0.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Di, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: yg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gg, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = i0;
B.createFactory = function (e) {
  var t = i0.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: vg, render: e };
};
B.isValidElement = Fu;
B.lazy = function (e) {
  return { $$typeof: Sg, _payload: { _status: -1, _result: e }, _init: Cg };
};
B.memo = function (e, t) {
  return { $$typeof: wg, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Co.transition;
  Co.transition = {};
  try {
    e();
  } finally {
    Co.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Me.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
B.useId = function () {
  return Me.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Me.current.useRef(e);
};
B.useState = function (e) {
  return Me.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Me.current.useTransition();
};
B.version = "18.2.0";
Yp.exports = B;
var b = Yp.exports;
const _g = Kp(b),
  ha = dg({ __proto__: null, default: _g }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Og = b,
  Ng = Symbol.for("react.element"),
  Pg = Symbol.for("react.fragment"),
  Rg = Object.prototype.hasOwnProperty,
  Tg = Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function o0(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Rg.call(t, r) && !Lg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ng,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Tg.current,
  };
}
Is.Fragment = Pg;
Is.jsx = o0;
Is.jsxs = o0;
Xp.exports = Is;
var a = Xp.exports,
  ma = {},
  s0 = { exports: {} },
  nt = {},
  l0 = { exports: {} },
  a0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, D) {
    var $ = R.length;
    R.push(D);
    e: for (; 0 < $; ) {
      var te = ($ - 1) >>> 1,
        X = R[te];
      if (0 < i(X, D)) (R[te] = D), (R[$] = X), ($ = te);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var D = R[0],
      $ = R.pop();
    if ($ !== D) {
      R[0] = $;
      e: for (var te = 0, X = R.length, Vn = X >>> 1; te < Vn; ) {
        var Qe = 2 * (te + 1) - 1,
          Sl = R[Qe],
          En = Qe + 1,
          eo = R[En];
        if (0 > i(Sl, $))
          En < X && 0 > i(eo, Sl)
            ? ((R[te] = eo), (R[En] = $), (te = En))
            : ((R[te] = Sl), (R[Qe] = $), (te = Qe));
        else if (En < X && 0 > i(eo, $)) (R[te] = eo), (R[En] = $), (te = En);
        else break e;
      }
    }
    return D;
  }
  function i(R, D) {
    var $ = R.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : R.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    v = !1,
    y = !1,
    m = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= R)
        r(c), (D.sortIndex = D.expirationTime), t(u, D);
      else break;
      D = n(c);
    }
  }
  function S(R) {
    if (((m = !1), x(R), !y))
      if (n(u) !== null) (y = !0), qe(j);
      else {
        var D = n(c);
        D !== null && jt(S, D.startTime - R);
      }
  }
  function j(R, D) {
    (y = !1), m && ((m = !1), g(C), (C = -1)), (v = !0);
    var $ = h;
    try {
      for (
        x(D), f = n(u);
        f !== null && (!(f.expirationTime > D) || (R && !A()));

      ) {
        var te = f.callback;
        if (typeof te == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var X = te(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(u) && r(u),
            x(D);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Vn = !0;
      else {
        var Qe = n(c);
        Qe !== null && jt(S, Qe.startTime - D), (Vn = !1);
      }
      return Vn;
    } finally {
      (f = null), (h = $), (v = !1);
    }
  }
  var k = !1,
    E = null,
    C = -1,
    P = 5,
    O = -1;
  function A() {
    return !(e.unstable_now() - O < P);
  }
  function M() {
    if (E !== null) {
      var R = e.unstable_now();
      O = R;
      var D = !0;
      try {
        D = E(!0, R);
      } finally {
        D ? I() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var I;
  if (typeof p == "function")
    I = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(),
      ue = st.port2;
    (st.port1.onmessage = M),
      (I = function () {
        ue.postMessage(null);
      });
  } else
    I = function () {
      w(M, 0);
    };
  function qe(R) {
    (E = R), k || ((k = !0), I());
  }
  function jt(R, D) {
    C = w(function () {
      R(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), qe(j));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = h;
      }
      var $ = h;
      h = D;
      try {
        return R();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, D) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = h;
      h = R;
      try {
        return D();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, D, $) {
      var te = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? te + $ : te))
          : ($ = te),
        R)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = $ + X),
        (R = {
          id: d++,
          callback: D,
          priorityLevel: R,
          startTime: $,
          expirationTime: X,
          sortIndex: -1,
        }),
        $ > te
          ? ((R.sortIndex = $),
            t(c, R),
            n(u) === null &&
              R === n(c) &&
              (m ? (g(C), (C = -1)) : (m = !0), jt(S, $ - te)))
          : ((R.sortIndex = X), t(u, R), y || v || ((y = !0), qe(j))),
        R
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (R) {
      var D = h;
      return function () {
        var $ = h;
        h = D;
        try {
          return R.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    });
})(a0);
l0.exports = a0;
var Ag = l0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0 = b,
  tt = Ag;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var c0 = new Set(),
  fi = {};
function Fn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (fi[e] = t, e = 0; e < t.length; e++) c0.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ga = Object.prototype.hasOwnProperty,
  Ig =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rd = {},
  Td = {};
function Mg(e) {
  return ga.call(Td, e)
    ? !0
    : ga.call(Rd, e)
    ? !1
    : Ig.test(e)
    ? (Td[e] = !0)
    : ((Rd[e] = !0), !1);
}
function zg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Dg(e, t, n, r) {
  if (t === null || typeof t > "u" || zg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hu = /[\-:]([a-z])/g;
function Uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hu, Uu);
    Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hu, Uu);
    Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hu, Uu);
  Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bu(e, t, n, r) {
  var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Dg(t, n, i, r) && (n = null),
    r || i === null
      ? Mg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ro = Symbol.for("react.element"),
  Zn = Symbol.for("react.portal"),
  er = Symbol.for("react.fragment"),
  Wu = Symbol.for("react.strict_mode"),
  ya = Symbol.for("react.profiler"),
  d0 = Symbol.for("react.provider"),
  f0 = Symbol.for("react.context"),
  Vu = Symbol.for("react.forward_ref"),
  va = Symbol.for("react.suspense"),
  xa = Symbol.for("react.suspense_list"),
  qu = Symbol.for("react.memo"),
  tn = Symbol.for("react.lazy"),
  p0 = Symbol.for("react.offscreen"),
  Ld = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ld && e[Ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  jl;
function Yr(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var kl = !1;
function Cl(e, t) {
  if (!e || kl) return "";
  kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yr(e) : "";
}
function $g(e) {
  switch (e.tag) {
    case 5:
      return Yr(e.type);
    case 16:
      return Yr("Lazy");
    case 13:
      return Yr("Suspense");
    case 19:
      return Yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return "";
  }
}
function wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case er:
      return "Fragment";
    case Zn:
      return "Portal";
    case ya:
      return "Profiler";
    case Wu:
      return "StrictMode";
    case va:
      return "Suspense";
    case xa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case f0:
        return (e.displayName || "Context") + ".Consumer";
      case d0:
        return (e._context.displayName || "Context") + ".Provider";
      case Vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qu:
        return (
          (t = e.displayName || null), t !== null ? t : wa(e.type) || "Memo"
        );
      case tn:
        (t = e._payload), (e = e._init);
        try {
          return wa(e(t));
        } catch {}
    }
  return null;
}
function Fg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wa(t);
    case 8:
      return t === Wu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function h0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Hg(e) {
  var t = h0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function io(e) {
  e._valueTracker || (e._valueTracker = Hg(e));
}
function m0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = h0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ad(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function g0(e, t) {
  (t = t.checked), t != null && Bu(e, "checked", t, !1);
}
function ba(e, t) {
  g0(e, t);
  var n = wn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ja(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ja(e, t.type, wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Id(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ja(e, t, n) {
  (t !== "number" || Qo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jr = Array.isArray;
function dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Md(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Jr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wn(n) };
}
function y0(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function v0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ca(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? v0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var oo,
  x0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        oo = oo || document.createElement("div"),
          oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ti = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function (e) {
  Ug.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ti[t] = ti[e]);
  });
});
function w0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ti.hasOwnProperty(e) && ti[e])
    ? ("" + t).trim()
    : t + "px";
}
function S0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = w0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Bg = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ea(e, t) {
  if (t) {
    if (Bg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function _a(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oa = null;
function Qu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Na = null,
  fr = null,
  pr = null;
function Dd(e) {
  if ((e = Hi(e))) {
    if (typeof Na != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), Na(e.stateNode, e.type, t));
  }
}
function b0(e) {
  fr ? (pr ? pr.push(e) : (pr = [e])) : (fr = e);
}
function j0() {
  if (fr) {
    var e = fr,
      t = pr;
    if (((pr = fr = null), Dd(e), t)) for (e = 0; e < t.length; e++) Dd(t[e]);
  }
}
function k0(e, t) {
  return e(t);
}
function C0() {}
var El = !1;
function E0(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return k0(e, t, n);
  } finally {
    (El = !1), (fr !== null || pr !== null) && (C0(), j0());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Pa = !1;
if (Vt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        Pa = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    Pa = !1;
  }
function Wg(e, t, n, r, i, o, s, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ni = !1,
  Ko = null,
  Go = !1,
  Ra = null,
  Vg = {
    onError: function (e) {
      (ni = !0), (Ko = e);
    },
  };
function qg(e, t, n, r, i, o, s, l, u) {
  (ni = !1), (Ko = null), Wg.apply(Vg, arguments);
}
function Qg(e, t, n, r, i, o, s, l, u) {
  if ((qg.apply(this, arguments), ni)) {
    if (ni) {
      var c = Ko;
      (ni = !1), (Ko = null);
    } else throw Error(N(198));
    Go || ((Go = !0), (Ra = c));
  }
}
function Hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $d(e) {
  if (Hn(e) !== e) throw Error(N(188));
}
function Kg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return $d(i), e;
        if (o === r) return $d(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function O0(e) {
  return (e = Kg(e)), e !== null ? N0(e) : null;
}
function N0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = N0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var P0 = tt.unstable_scheduleCallback,
  Fd = tt.unstable_cancelCallback,
  Gg = tt.unstable_shouldYield,
  Xg = tt.unstable_requestPaint,
  pe = tt.unstable_now,
  Yg = tt.unstable_getCurrentPriorityLevel,
  Ku = tt.unstable_ImmediatePriority,
  R0 = tt.unstable_UserBlockingPriority,
  Xo = tt.unstable_NormalPriority,
  Jg = tt.unstable_LowPriority,
  T0 = tt.unstable_IdlePriority,
  Ms = null,
  Tt = null;
function Zg(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function")
    try {
      Tt.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : ny,
  ey = Math.log,
  ty = Math.LN2;
function ny(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ey(e) / ty) | 0)) | 0;
}
var so = 64,
  lo = 4194304;
function Zr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Zr(l)) : ((o &= s), o !== 0 && (r = Zr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Zr(s)) : o !== 0 && (r = Zr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ry(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function iy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - xt(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = ry(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ta(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function L0() {
  var e = so;
  return (so <<= 1), !(so & 4194240) && (so = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $i(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function oy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - xt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function A0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var I0,
  Xu,
  M0,
  z0,
  D0,
  La = !1,
  ao = [],
  dn = null,
  fn = null,
  pn = null,
  mi = new Map(),
  gi = new Map(),
  on = [],
  sy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      fn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function Hr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Hi(t)), t !== null && Xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ly(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (dn = Hr(dn, e, t, n, r, i)), !0;
    case "dragenter":
      return (fn = Hr(fn, e, t, n, r, i)), !0;
    case "mouseover":
      return (pn = Hr(pn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return mi.set(o, Hr(mi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), gi.set(o, Hr(gi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function $0(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _0(n)), t !== null)) {
          (e.blockedOn = t),
            D0(e.priority, function () {
              M0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oa = r), n.target.dispatchEvent(r), (Oa = null);
    } else return (t = Hi(n)), t !== null && Xu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ud(e, t, n) {
  Eo(e) && n.delete(t);
}
function ay() {
  (La = !1),
    dn !== null && Eo(dn) && (dn = null),
    fn !== null && Eo(fn) && (fn = null),
    pn !== null && Eo(pn) && (pn = null),
    mi.forEach(Ud),
    gi.forEach(Ud);
}
function Ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    La ||
      ((La = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, ay)));
}
function yi(e) {
  function t(i) {
    return Ur(i, e);
  }
  if (0 < ao.length) {
    Ur(ao[0], e);
    for (var n = 1; n < ao.length; n++) {
      var r = ao[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dn !== null && Ur(dn, e),
      fn !== null && Ur(fn, e),
      pn !== null && Ur(pn, e),
      mi.forEach(t),
      gi.forEach(t),
      n = 0;
    n < on.length;
    n++
  )
    (r = on[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < on.length && ((n = on[0]), n.blockedOn === null); )
    $0(n), n.blockedOn === null && on.shift();
}
var hr = Yt.ReactCurrentBatchConfig,
  Jo = !0;
function uy(e, t, n, r) {
  var i = G,
    o = hr.transition;
  hr.transition = null;
  try {
    (G = 1), Yu(e, t, n, r);
  } finally {
    (G = i), (hr.transition = o);
  }
}
function cy(e, t, n, r) {
  var i = G,
    o = hr.transition;
  hr.transition = null;
  try {
    (G = 4), Yu(e, t, n, r);
  } finally {
    (G = i), (hr.transition = o);
  }
}
function Yu(e, t, n, r) {
  if (Jo) {
    var i = Aa(e, t, n, r);
    if (i === null) zl(e, t, r, Zo, n), Hd(e, r);
    else if (ly(i, e, t, n, r)) r.stopPropagation();
    else if ((Hd(e, r), t & 4 && -1 < sy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Hi(i);
        if (
          (o !== null && I0(o),
          (o = Aa(e, t, n, r)),
          o === null && zl(e, t, r, Zo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var Zo = null;
function Aa(e, t, n, r) {
  if (((Zo = null), (e = Qu(r)), (e = Nn(e)), e !== null))
    if (((t = Hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zo = e), null;
}
function F0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yg()) {
        case Ku:
          return 1;
        case R0:
          return 4;
        case Xo:
        case Jg:
          return 16;
        case T0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var an = null,
  Ju = null,
  _o = null;
function H0() {
  if (_o) return _o;
  var e,
    t = Ju,
    n = t.length,
    r,
    i = "value" in an ? an.value : an.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (_o = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function uo() {
  return !0;
}
function Bd() {
  return !1;
}
function rt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? uo
        : Bd),
      (this.isPropagationStopped = Bd),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = uo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = uo));
      },
      persist: function () {},
      isPersistent: uo,
    }),
    t
  );
}
var Ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zu = rt(Ar),
  Fi = ae({}, Ar, { view: 0, detail: 0 }),
  dy = rt(Fi),
  Ol,
  Nl,
  Br,
  zs = ae({}, Fi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Br &&
            (Br && e.type === "mousemove"
              ? ((Ol = e.screenX - Br.screenX), (Nl = e.screenY - Br.screenY))
              : (Nl = Ol = 0),
            (Br = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  Wd = rt(zs),
  fy = ae({}, zs, { dataTransfer: 0 }),
  py = rt(fy),
  hy = ae({}, Fi, { relatedTarget: 0 }),
  Pl = rt(hy),
  my = ae({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gy = rt(my),
  yy = ae({}, Ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vy = rt(yy),
  xy = ae({}, Ar, { data: 0 }),
  Vd = rt(xy),
  wy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  by = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = by[e]) ? !!t[e] : !1;
}
function ec() {
  return jy;
}
var ky = ae({}, Fi, {
    key: function (e) {
      if (e.key) {
        var t = wy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function (e) {
      return e.type === "keypress" ? Oo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Cy = rt(ky),
  Ey = ae({}, zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qd = rt(Ey),
  _y = ae({}, Fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ec,
  }),
  Oy = rt(_y),
  Ny = ae({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Py = rt(Ny),
  Ry = ae({}, zs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ty = rt(Ry),
  Ly = [9, 13, 27, 32],
  tc = Vt && "CompositionEvent" in window,
  ri = null;
Vt && "documentMode" in document && (ri = document.documentMode);
var Ay = Vt && "TextEvent" in window && !ri,
  U0 = Vt && (!tc || (ri && 8 < ri && 11 >= ri)),
  Qd = String.fromCharCode(32),
  Kd = !1;
function B0(e, t) {
  switch (e) {
    case "keyup":
      return Ly.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function W0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var tr = !1;
function Iy(e, t) {
  switch (e) {
    case "compositionend":
      return W0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Kd = !0), Qd);
    case "textInput":
      return (e = t.data), e === Qd && Kd ? null : e;
    default:
      return null;
  }
}
function My(e, t) {
  if (tr)
    return e === "compositionend" || (!tc && B0(e, t))
      ? ((e = H0()), (_o = Ju = an = null), (tr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return U0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zy[e.type] : t === "textarea";
}
function V0(e, t, n, r) {
  b0(r),
    (t = es(t, "onChange")),
    0 < t.length &&
      ((n = new Zu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ii = null,
  vi = null;
function Dy(e) {
  nh(e, 0);
}
function Ds(e) {
  var t = ir(e);
  if (m0(t)) return e;
}
function $y(e, t) {
  if (e === "change") return t;
}
var q0 = !1;
if (Vt) {
  var Rl;
  if (Vt) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var Xd = document.createElement("div");
      Xd.setAttribute("oninput", "return;"),
        (Tl = typeof Xd.oninput == "function");
    }
    Rl = Tl;
  } else Rl = !1;
  q0 = Rl && (!document.documentMode || 9 < document.documentMode);
}
function Yd() {
  ii && (ii.detachEvent("onpropertychange", Q0), (vi = ii = null));
}
function Q0(e) {
  if (e.propertyName === "value" && Ds(vi)) {
    var t = [];
    V0(t, vi, e, Qu(e)), E0(Dy, t);
  }
}
function Fy(e, t, n) {
  e === "focusin"
    ? (Yd(), (ii = t), (vi = n), ii.attachEvent("onpropertychange", Q0))
    : e === "focusout" && Yd();
}
function Hy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ds(vi);
}
function Uy(e, t) {
  if (e === "click") return Ds(t);
}
function By(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function Wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : Wy;
function xi(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ga.call(t, i) || !St(e[i], t[i])) return !1;
  }
  return !0;
}
function Jd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zd(e, t) {
  var n = Jd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Jd(n);
  }
}
function K0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? K0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function G0() {
  for (var e = window, t = Qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qo(e.document);
  }
  return t;
}
function nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vy(e) {
  var t = G0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    K0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Zd(n, o));
        var s = Zd(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var qy = Vt && "documentMode" in document && 11 >= document.documentMode,
  nr = null,
  Ia = null,
  oi = null,
  Ma = !1;
function ef(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ma ||
    nr == null ||
    nr !== Qo(r) ||
    ((r = nr),
    "selectionStart" in r && nc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (oi && xi(oi, r)) ||
      ((oi = r),
      (r = es(Ia, "onSelect")),
      0 < r.length &&
        ((t = new Zu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = nr))));
}
function co(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var rr = {
    animationend: co("Animation", "AnimationEnd"),
    animationiteration: co("Animation", "AnimationIteration"),
    animationstart: co("Animation", "AnimationStart"),
    transitionend: co("Transition", "TransitionEnd"),
  },
  Ll = {},
  X0 = {};
Vt &&
  ((X0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete rr.animationend.animation,
    delete rr.animationiteration.animation,
    delete rr.animationstart.animation),
  "TransitionEvent" in window || delete rr.transitionend.transition);
function $s(e) {
  if (Ll[e]) return Ll[e];
  if (!rr[e]) return e;
  var t = rr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in X0) return (Ll[e] = t[n]);
  return e;
}
var Y0 = $s("animationend"),
  J0 = $s("animationiteration"),
  Z0 = $s("animationstart"),
  eh = $s("transitionend"),
  th = new Map(),
  tf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(e, t) {
  th.set(e, t), Fn(t, [e]);
}
for (var Al = 0; Al < tf.length; Al++) {
  var Il = tf[Al],
    Qy = Il.toLowerCase(),
    Ky = Il[0].toUpperCase() + Il.slice(1);
  bn(Qy, "on" + Ky);
}
bn(Y0, "onAnimationEnd");
bn(J0, "onAnimationIteration");
bn(Z0, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(eh, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
Fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ei =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));
function nf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qg(r, t, void 0, e), (e.currentTarget = null);
}
function nh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          nf(i, l, c), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          nf(i, l, c), (o = u);
        }
    }
  }
  if (Go) throw ((e = Ra), (Go = !1), (Ra = null), e);
}
function Z(e, t) {
  var n = t[Ha];
  n === void 0 && (n = t[Ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rh(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
  var r = 0;
  t && (r |= 4), rh(n, e, r, t);
}
var fo = "_reactListening" + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[fo]) {
    (e[fo] = !0),
      c0.forEach(function (n) {
        n !== "selectionchange" && (Gy.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fo] || ((t[fo] = !0), Ml("selectionchange", !1, t));
  }
}
function rh(e, t, n, r) {
  switch (F0(t)) {
    case 1:
      var i = uy;
      break;
    case 4:
      i = cy;
      break;
    default:
      i = Yu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Pa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Nn(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  E0(function () {
    var c = o,
      d = Qu(n),
      f = [];
    e: {
      var h = th.get(e);
      if (h !== void 0) {
        var v = Zu,
          y = e;
        switch (e) {
          case "keypress":
            if (Oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Cy;
            break;
          case "focusin":
            (y = "focus"), (v = Pl);
            break;
          case "focusout":
            (y = "blur"), (v = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = py;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Oy;
            break;
          case Y0:
          case J0:
          case Z0:
            v = gy;
            break;
          case eh:
            v = Py;
            break;
          case "scroll":
            v = dy;
            break;
          case "wheel":
            v = Ty;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = vy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = qd;
        }
        var m = (t & 4) !== 0,
          w = !m && e === "scroll",
          g = m ? (h !== null ? h + "Capture" : null) : h;
        m = [];
        for (var p = c, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              g !== null && ((S = hi(p, g)), S != null && m.push(Si(p, S, x)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((h = new v(h, y, null, n, d)), f.push({ event: h, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Oa &&
            (y = n.relatedTarget || n.fromElement) &&
            (Nn(y) || y[qt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = c),
              (y = y ? Nn(y) : null),
              y !== null &&
                ((w = Hn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = c)),
          v !== y)
        ) {
          if (
            ((m = Wd),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = qd),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (w = v == null ? h : ir(v)),
            (x = y == null ? h : ir(y)),
            (h = new m(S, p + "leave", v, n, d)),
            (h.target = w),
            (h.relatedTarget = x),
            (S = null),
            Nn(d) === c &&
              ((m = new m(g, p + "enter", y, n, d)),
              (m.target = x),
              (m.relatedTarget = w),
              (S = m)),
            (w = S),
            v && y)
          )
            t: {
              for (m = v, g = y, p = 0, x = m; x; x = qn(x)) p++;
              for (x = 0, S = g; S; S = qn(S)) x++;
              for (; 0 < p - x; ) (m = qn(m)), p--;
              for (; 0 < x - p; ) (g = qn(g)), x--;
              for (; p--; ) {
                if (m === g || (g !== null && m === g.alternate)) break t;
                (m = qn(m)), (g = qn(g));
              }
              m = null;
            }
          else m = null;
          v !== null && rf(f, h, v, m, !1),
            y !== null && w !== null && rf(f, w, y, m, !0);
        }
      }
      e: {
        if (
          ((h = c ? ir(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var j = $y;
        else if (Gd(h))
          if (q0) j = By;
          else {
            j = Hy;
            var k = Fy;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = Uy);
        if (j && (j = j(e, c))) {
          V0(f, j, n, d);
          break e;
        }
        k && k(e, h, c),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            ja(h, "number", h.value);
      }
      switch (((k = c ? ir(c) : window), e)) {
        case "focusin":
          (Gd(k) || k.contentEditable === "true") &&
            ((nr = k), (Ia = c), (oi = null));
          break;
        case "focusout":
          oi = Ia = nr = null;
          break;
        case "mousedown":
          Ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ma = !1), ef(f, n, d);
          break;
        case "selectionchange":
          if (qy) break;
        case "keydown":
        case "keyup":
          ef(f, n, d);
      }
      var E;
      if (tc)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        tr
          ? B0(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (U0 &&
          n.locale !== "ko" &&
          (tr || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && tr && (E = H0())
            : ((an = d),
              (Ju = "value" in an ? an.value : an.textContent),
              (tr = !0))),
        (k = es(c, C)),
        0 < k.length &&
          ((C = new Vd(C, e, null, n, d)),
          f.push({ event: C, listeners: k }),
          E ? (C.data = E) : ((E = W0(n)), E !== null && (C.data = E)))),
        (E = Ay ? Iy(e, n) : My(e, n)) &&
          ((c = es(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Vd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = E)));
    }
    nh(f, t);
  });
}
function Si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = hi(e, n)),
      o != null && r.unshift(Si(e, o, i)),
      (o = hi(e, t)),
      o != null && r.push(Si(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((u = hi(n, o)), u != null && s.unshift(Si(n, u, l)))
        : i || ((u = hi(n, o)), u != null && s.push(Si(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Xy = /\r\n?/g,
  Yy = /\u0000|\uFFFD/g;
function of(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xy,
      `
`
    )
    .replace(Yy, "");
}
function po(e, t, n) {
  if (((t = of(t)), of(e) !== t && n)) throw Error(N(425));
}
function ts() {}
var za = null,
  Da = null;
function $a(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fa = typeof setTimeout == "function" ? setTimeout : void 0,
  Jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sf = typeof Promise == "function" ? Promise : void 0,
  Zy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sf < "u"
      ? function (e) {
          return sf.resolve(null).then(e).catch(ev);
        }
      : Fa;
function ev(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  yi(t);
}
function hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function lf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ir = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + Ir,
  bi = "__reactProps$" + Ir,
  qt = "__reactContainer$" + Ir,
  Ha = "__reactEvents$" + Ir,
  tv = "__reactListeners$" + Ir,
  nv = "__reactHandles$" + Ir;
function Nn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lf(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hi(e) {
  return (
    (e = e[Nt] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Fs(e) {
  return e[bi] || null;
}
var Ua = [],
  or = -1;
function jn(e) {
  return { current: e };
}
function ee(e) {
  0 > or || ((e.current = Ua[or]), (Ua[or] = null), or--);
}
function J(e, t) {
  or++, (Ua[or] = e.current), (e.current = t);
}
var Sn = {},
  Te = jn(Sn),
  Ue = jn(!1),
  In = Sn;
function Sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function ns() {
  ee(Ue), ee(Te);
}
function af(e, t, n) {
  if (Te.current !== Sn) throw Error(N(168));
  J(Te, t), J(Ue, n);
}
function ih(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, Fg(e) || "Unknown", i));
  return ae({}, n, r);
}
function rs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    (In = Te.current),
    J(Te, e),
    J(Ue, Ue.current),
    !0
  );
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = ih(e, t, In)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Ue),
      ee(Te),
      J(Te, e))
    : ee(Ue),
    J(Ue, n);
}
var $t = null,
  Hs = !1,
  $l = !1;
function oh(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function rv(e) {
  (Hs = !0), oh(e);
}
function kn() {
  if (!$l && $t !== null) {
    $l = !0;
    var e = 0,
      t = G;
    try {
      var n = $t;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (Hs = !1);
    } catch (i) {
      throw ($t !== null && ($t = $t.slice(e + 1)), P0(Ku, kn), i);
    } finally {
      (G = t), ($l = !1);
    }
  }
  return null;
}
var sr = [],
  lr = 0,
  is = null,
  os = 0,
  lt = [],
  at = 0,
  Mn = null,
  Ft = 1,
  Ht = "";
function _n(e, t) {
  (sr[lr++] = os), (sr[lr++] = is), (is = e), (os = t);
}
function sh(e, t, n) {
  (lt[at++] = Ft), (lt[at++] = Ht), (lt[at++] = Mn), (Mn = e);
  var r = Ft;
  e = Ht;
  var i = 32 - xt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - xt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ft = (1 << (32 - xt(t) + i)) | (n << i) | r),
      (Ht = o + e);
  } else (Ft = (1 << o) | (n << i) | r), (Ht = e);
}
function rc(e) {
  e.return !== null && (_n(e, 1), sh(e, 1, 0));
}
function ic(e) {
  for (; e === is; )
    (is = sr[--lr]), (sr[lr] = null), (os = sr[--lr]), (sr[lr] = null);
  for (; e === Mn; )
    (Mn = lt[--at]),
      (lt[at] = null),
      (Ht = lt[--at]),
      (lt[at] = null),
      (Ft = lt[--at]),
      (lt[at] = null);
}
var Ze = null,
  Ye = null,
  ie = !1,
  yt = null;
function lh(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Ye = hn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mn !== null ? { id: Ft, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ba(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wa(e) {
  if (ie) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!cf(e, t)) {
        if (Ba(e)) throw Error(N(418));
        t = hn(n.nextSibling);
        var r = Ze;
        t && cf(e, t)
          ? lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e));
      }
    } else {
      if (Ba(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e);
    }
  }
}
function df(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function ho(e) {
  if (e !== Ze) return !1;
  if (!ie) return df(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Ba(e)) throw (ah(), Error(N(418)));
    for (; t; ) lh(e, t), (t = hn(t.nextSibling));
  }
  if ((df(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Ze ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function ah() {
  for (var e = Ye; e; ) e = hn(e.nextSibling);
}
function br() {
  (Ye = Ze = null), (ie = !1);
}
function oc(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var iv = Yt.ReactCurrentBatchConfig;
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ss = jn(null),
  ls = null,
  ar = null,
  sc = null;
function lc() {
  sc = ar = ls = null;
}
function ac(e) {
  var t = ss.current;
  ee(ss), (e._currentValue = t);
}
function Va(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mr(e, t) {
  (ls = e),
    (sc = ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (sc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
      if (ls === null) throw Error(N(308));
      (ar = e), (ls.dependencies = { lanes: 0, firstContext: e });
    } else ar = ar.next = e;
  return t;
}
var Pn = null;
function uc(e) {
  Pn === null ? (Pn = [e]) : Pn.push(e);
}
function uh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), uc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function cc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ch(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), uc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function No(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
  }
}
function ff(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  nn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), s === null ? (o = c) : (s.next = c), (s = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (d = c = u = null), (l = o);
    do {
      var h = l.lane,
        v = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            m = l;
          switch (((h = t), (v = n), m.tag)) {
            case 1:
              if (((y = m.payload), typeof y == "function")) {
                f = y.call(v, f, h);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = m.payload),
                (h = typeof y == "function" ? y.call(v, f, h) : y),
                h == null)
              )
                break e;
              f = ae({}, f, h);
              break e;
            case 2:
              nn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (u = f)) : (d = d.next = v),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function pf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var dh = new u0.Component().refs;
function qa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      i = yn(e),
      o = Ut(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (wt(t, e, i, r), No(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      i = yn(e),
      o = Ut(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (wt(t, e, i, r), No(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = yn(e),
      i = Ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = mn(e, i, r)),
      t !== null && (wt(t, e, r, n), No(t, e, r));
  },
};
function hf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xi(n, r) || !xi(i, o)
      : !0
  );
}
function fh(e, t, n) {
  var r = !1,
    i = Sn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ft(o))
      : ((i = Be(t) ? In : Te.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Sr(e, i) : Sn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function mf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = dh), cc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ft(o))
    : ((o = Be(t) ? In : Te.current), (i.context = Sr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Us.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === dh && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function mo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gf(e) {
  var t = e._init;
  return t(e._payload);
}
function ph(e) {
  function t(g, p) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [p]), (g.flags |= 16)) : x.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function i(g, p) {
    return (g = vn(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((g.flags |= 2), p) : x)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, x, S) {
    return p === null || p.tag !== 6
      ? ((p = ql(x, g.mode, S)), (p.return = g), p)
      : ((p = i(p, x)), (p.return = g), p);
  }
  function u(g, p, x, S) {
    var j = x.type;
    return j === er
      ? d(g, p, x.props.children, S, x.key)
      : p !== null &&
        (p.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === tn &&
            gf(j) === p.type))
      ? ((S = i(p, x.props)), (S.ref = Wr(g, p, x)), (S.return = g), S)
      : ((S = Io(x.type, x.key, x.props, null, g.mode, S)),
        (S.ref = Wr(g, p, x)),
        (S.return = g),
        S);
  }
  function c(g, p, x, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = Ql(x, g.mode, S)), (p.return = g), p)
      : ((p = i(p, x.children || [])), (p.return = g), p);
  }
  function d(g, p, x, S, j) {
    return p === null || p.tag !== 7
      ? ((p = Ln(x, g.mode, S, j)), (p.return = g), p)
      : ((p = i(p, x)), (p.return = g), p);
  }
  function f(g, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ql("" + p, g.mode, x)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ro:
          return (
            (x = Io(p.type, p.key, p.props, null, g.mode, x)),
            (x.ref = Wr(g, null, p)),
            (x.return = g),
            x
          );
        case Zn:
          return (p = Ql(p, g.mode, x)), (p.return = g), p;
        case tn:
          var S = p._init;
          return f(g, S(p._payload), x);
      }
      if (Jr(p) || $r(p))
        return (p = Ln(p, g.mode, x, null)), (p.return = g), p;
      mo(g, p);
    }
    return null;
  }
  function h(g, p, x, S) {
    var j = p !== null ? p.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return j !== null ? null : l(g, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ro:
          return x.key === j ? u(g, p, x, S) : null;
        case Zn:
          return x.key === j ? c(g, p, x, S) : null;
        case tn:
          return (j = x._init), h(g, p, j(x._payload), S);
      }
      if (Jr(x) || $r(x)) return j !== null ? null : d(g, p, x, S, null);
      mo(g, x);
    }
    return null;
  }
  function v(g, p, x, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(x) || null), l(p, g, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ro:
          return (g = g.get(S.key === null ? x : S.key) || null), u(p, g, S, j);
        case Zn:
          return (g = g.get(S.key === null ? x : S.key) || null), c(p, g, S, j);
        case tn:
          var k = S._init;
          return v(g, p, x, k(S._payload), j);
      }
      if (Jr(S) || $r(S)) return (g = g.get(x) || null), d(p, g, S, j, null);
      mo(p, S);
    }
    return null;
  }
  function y(g, p, x, S) {
    for (
      var j = null, k = null, E = p, C = (p = 0), P = null;
      E !== null && C < x.length;
      C++
    ) {
      E.index > C ? ((P = E), (E = null)) : (P = E.sibling);
      var O = h(g, E, x[C], S);
      if (O === null) {
        E === null && (E = P);
        break;
      }
      e && E && O.alternate === null && t(g, E),
        (p = o(O, p, C)),
        k === null ? (j = O) : (k.sibling = O),
        (k = O),
        (E = P);
    }
    if (C === x.length) return n(g, E), ie && _n(g, C), j;
    if (E === null) {
      for (; C < x.length; C++)
        (E = f(g, x[C], S)),
          E !== null &&
            ((p = o(E, p, C)), k === null ? (j = E) : (k.sibling = E), (k = E));
      return ie && _n(g, C), j;
    }
    for (E = r(g, E); C < x.length; C++)
      (P = v(E, g, C, x[C], S)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? C : P.key),
          (p = o(P, p, C)),
          k === null ? (j = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        E.forEach(function (A) {
          return t(g, A);
        }),
      ie && _n(g, C),
      j
    );
  }
  function m(g, p, x, S) {
    var j = $r(x);
    if (typeof j != "function") throw Error(N(150));
    if (((x = j.call(x)), x == null)) throw Error(N(151));
    for (
      var k = (j = null), E = p, C = (p = 0), P = null, O = x.next();
      E !== null && !O.done;
      C++, O = x.next()
    ) {
      E.index > C ? ((P = E), (E = null)) : (P = E.sibling);
      var A = h(g, E, O.value, S);
      if (A === null) {
        E === null && (E = P);
        break;
      }
      e && E && A.alternate === null && t(g, E),
        (p = o(A, p, C)),
        k === null ? (j = A) : (k.sibling = A),
        (k = A),
        (E = P);
    }
    if (O.done) return n(g, E), ie && _n(g, C), j;
    if (E === null) {
      for (; !O.done; C++, O = x.next())
        (O = f(g, O.value, S)),
          O !== null &&
            ((p = o(O, p, C)), k === null ? (j = O) : (k.sibling = O), (k = O));
      return ie && _n(g, C), j;
    }
    for (E = r(g, E); !O.done; C++, O = x.next())
      (O = v(E, g, C, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? C : O.key),
          (p = o(O, p, C)),
          k === null ? (j = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        E.forEach(function (M) {
          return t(g, M);
        }),
      ie && _n(g, C),
      j
    );
  }
  function w(g, p, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === er &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ro:
          e: {
            for (var j = x.key, k = p; k !== null; ) {
              if (k.key === j) {
                if (((j = x.type), j === er)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (p = i(k, x.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  k.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === tn &&
                    gf(j) === k.type)
                ) {
                  n(g, k.sibling),
                    (p = i(k, x.props)),
                    (p.ref = Wr(g, k, x)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            x.type === er
              ? ((p = Ln(x.props.children, g.mode, S, x.key)),
                (p.return = g),
                (g = p))
              : ((S = Io(x.type, x.key, x.props, null, g.mode, S)),
                (S.ref = Wr(g, p, x)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Zn:
          e: {
            for (k = x.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  n(g, p.sibling),
                    (p = i(p, x.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = Ql(x, g.mode, S)), (p.return = g), (g = p);
          }
          return s(g);
        case tn:
          return (k = x._init), w(g, p, k(x._payload), S);
      }
      if (Jr(x)) return y(g, p, x, S);
      if ($r(x)) return m(g, p, x, S);
      mo(g, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = i(p, x)), (p.return = g), (g = p))
          : (n(g, p), (p = ql(x, g.mode, S)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return w;
}
var jr = ph(!0),
  hh = ph(!1),
  Ui = {},
  Lt = jn(Ui),
  ji = jn(Ui),
  ki = jn(Ui);
function Rn(e) {
  if (e === Ui) throw Error(N(174));
  return e;
}
function dc(e, t) {
  switch ((J(ki, t), J(ji, e), J(Lt, Ui), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ca(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ca(t, e));
  }
  ee(Lt), J(Lt, t);
}
function kr() {
  ee(Lt), ee(ji), ee(ki);
}
function mh(e) {
  Rn(ki.current);
  var t = Rn(Lt.current),
    n = Ca(t, e.type);
  t !== n && (J(ji, e), J(Lt, n));
}
function fc(e) {
  ji.current === e && (ee(Lt), ee(ji));
}
var se = jn(0);
function us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fl = [];
function pc() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Po = Yt.ReactCurrentDispatcher,
  Hl = Yt.ReactCurrentBatchConfig,
  zn = 0,
  le = null,
  ve = null,
  Se = null,
  cs = !1,
  si = !1,
  Ci = 0,
  ov = 0;
function _e() {
  throw Error(N(321));
}
function hc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function mc(e, t, n, r, i, o) {
  if (
    ((zn = o),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Po.current = e === null || e.memoizedState === null ? uv : cv),
    (e = n(r, i)),
    si)
  ) {
    o = 0;
    do {
      if (((si = !1), (Ci = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        (Po.current = dv),
        (e = n(r, i));
    } while (si);
  }
  if (
    ((Po.current = ds),
    (t = ve !== null && ve.next !== null),
    (zn = 0),
    (Se = ve = le = null),
    (cs = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function gc() {
  var e = Ci !== 0;
  return (Ci = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function pt() {
  if (ve === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? le.memoizedState : Se.next;
  if (t !== null) (Se = t), (ve = e);
  else {
    if (e === null) throw Error(N(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ul(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ve,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((zn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = f), (s = r)) : (u = u.next = f),
          (le.lanes |= d),
          (Dn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (s = r) : (u.next = l),
      St(r, t.memoizedState) || (He = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (le.lanes |= o), (Dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    St(o, t.memoizedState) || (He = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function gh() {}
function yh(e, t) {
  var n = le,
    r = pt(),
    i = t(),
    o = !St(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (He = !0)),
    (r = r.queue),
    yc(wh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _i(9, xh.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(N(349));
    zn & 30 || vh(n, t, i);
  }
  return i;
}
function vh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sh(t) && bh(e);
}
function wh(e, t, n) {
  return n(function () {
    Sh(t) && bh(e);
  });
}
function Sh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function bh(e) {
  var t = Qt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function yf(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = av.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function _i(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jh() {
  return pt().memoizedState;
}
function Ro(e, t, n, r) {
  var i = Et();
  (le.flags |= e),
    (i.memoizedState = _i(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bs(e, t, n, r) {
  var i = pt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ve !== null) {
    var s = ve.memoizedState;
    if (((o = s.destroy), r !== null && hc(r, s.deps))) {
      i.memoizedState = _i(t, n, o, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = _i(1 | t, n, o, r));
}
function vf(e, t) {
  return Ro(8390656, 8, e, t);
}
function yc(e, t) {
  return Bs(2048, 8, e, t);
}
function kh(e, t) {
  return Bs(4, 2, e, t);
}
function Ch(e, t) {
  return Bs(4, 4, e, t);
}
function Eh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _h(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bs(4, 4, Eh.bind(null, t, e), n)
  );
}
function vc() {}
function Oh(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Nh(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ph(e, t, n) {
  return zn & 21
    ? (St(n, t) || ((n = L0()), (le.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function sv(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Hl.transition = r);
  }
}
function Rh() {
  return pt().memoizedState;
}
function lv(e, t, n) {
  var r = yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Th(e))
  )
    Lh(t, n);
  else if (((n = uh(e, t, n, r)), n !== null)) {
    var i = Ie();
    wt(n, e, r, i), Ah(n, t, r);
  }
}
function av(e, t, n) {
  var r = yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Th(e)) Lh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), St(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), uc(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = uh(e, t, i, r)),
      n !== null && ((i = Ie()), wt(n, e, r, i), Ah(n, t, r));
  }
}
function Th(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Lh(e, t) {
  si = cs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ah(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
  }
}
var ds = {
    readContext: ft,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  uv = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ro(4194308, 4, Eh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ro(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ro(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lv.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yf,
    useDebugValue: vc,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = yf(!1),
        t = e[0];
      return (e = sv.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = Et();
      if (ie) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(N(349));
        zn & 30 || vh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        vf(wh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        _i(9, xh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = be.identifierPrefix;
      if (ie) {
        var n = Ht,
          r = Ft;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ci++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ov++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: ft,
    useCallback: Oh,
    useContext: ft,
    useEffect: yc,
    useImperativeHandle: _h,
    useInsertionEffect: kh,
    useLayoutEffect: Ch,
    useMemo: Nh,
    useReducer: Ul,
    useRef: jh,
    useState: function () {
      return Ul(Ei);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = pt();
      return Ph(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Ei)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: gh,
    useSyncExternalStore: yh,
    useId: Rh,
    unstable_isNewReconciler: !1,
  },
  dv = {
    readContext: ft,
    useCallback: Oh,
    useContext: ft,
    useEffect: yc,
    useImperativeHandle: _h,
    useInsertionEffect: kh,
    useLayoutEffect: Ch,
    useMemo: Nh,
    useReducer: Bl,
    useRef: jh,
    useState: function () {
      return Bl(Ei);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = pt();
      return ve === null ? (t.memoizedState = e) : Ph(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Ei)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: gh,
    useSyncExternalStore: yh,
    useId: Rh,
    unstable_isNewReconciler: !1,
  };
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $g(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fv = typeof WeakMap == "function" ? WeakMap : Map;
function Ih(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ps || ((ps = !0), (iu = r)), Ka(e, t);
    }),
    n
  );
}
function Mh(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ka(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ka(e, t),
          typeof r != "function" &&
            (gn === null ? (gn = new Set([this])) : gn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ev.bind(null, e, t, n)), t.then(e, e));
}
function wf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pv = Yt.ReactCurrentOwner,
  He = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? hh(t, null, n, r) : jr(t, e.child, n, r);
}
function bf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    mr(t, i),
    (r = mc(e, t, n, r, o, i)),
    (n = gc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (ie && n && rc(t), (t.flags |= 1), Ae(e, t, r, i), t.child)
  );
}
function jf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ec(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), zh(e, t, o, r, i))
      : ((e = Io(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xi), n(s, r) && e.ref === t.ref)
    )
      return Kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = vn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xi(o, r) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (He = !0);
      else return (t.lanes = e.lanes), Kt(e, t, i);
  }
  return Ga(e, t, n, r, i);
}
function Dh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(cr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          J(cr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        J(cr, Ge),
        (Ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(cr, Ge),
      (Ge |= r);
  return Ae(e, t, i, n), t.child;
}
function $h(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ga(e, t, n, r, i) {
  var o = Be(n) ? In : Te.current;
  return (
    (o = Sr(t, o)),
    mr(t, i),
    (n = mc(e, t, n, r, o, i)),
    (r = gc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (ie && r && rc(t), (t.flags |= 1), Ae(e, t, n, i), t.child)
  );
}
function kf(e, t, n, r, i) {
  if (Be(n)) {
    var o = !0;
    rs(t);
  } else o = !1;
  if ((mr(t, i), t.stateNode === null))
    To(e, t), fh(t, n, r), Qa(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ft(c))
      : ((c = Be(n) ? In : Te.current), (c = Sr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && mf(t, s, r, c)),
      (nn = !1);
    var h = t.memoizedState;
    (s.state = h),
      as(t, r, s, i),
      (u = t.memoizedState),
      l !== r || h !== u || Ue.current || nn
        ? (typeof d == "function" && (qa(t, n, d, r), (u = t.memoizedState)),
          (l = nn || hf(t, n, l, r, h, u, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      ch(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : mt(t.type, l)),
      (s.props = c),
      (f = t.pendingProps),
      (h = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ft(u))
        : ((u = Be(n) ? In : Te.current), (u = Sr(t, u)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== u) && mf(t, s, r, u)),
      (nn = !1),
      (h = t.memoizedState),
      (s.state = h),
      as(t, r, s, i);
    var y = t.memoizedState;
    l !== f || h !== y || Ue.current || nn
      ? (typeof v == "function" && (qa(t, n, v, r), (y = t.memoizedState)),
        (c = nn || hf(t, n, c, r, h, y, u) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xa(e, t, n, r, o, i);
}
function Xa(e, t, n, r, i, o) {
  $h(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && uf(t, n, !1), Kt(e, t, o);
  (r = t.stateNode), (pv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = jr(t, e.child, null, o)), (t.child = jr(t, null, l, o)))
      : Ae(e, t, l, o),
    (t.memoizedState = r.state),
    i && uf(t, n, !0),
    t.child
  );
}
function Fh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? af(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && af(e, t.context, !1),
    dc(e, t.containerInfo);
}
function Cf(e, t, n, r, i) {
  return br(), oc(i), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var Ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hh(e, t, n) {
  var r = t.pendingProps,
    i = se.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    J(se, i & 1),
    e === null)
  )
    return (
      Wa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = qs(s, r, 0, null)),
              (e = Ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ja(n)),
              (t.memoizedState = Ya),
              e)
            : xc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return hv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = vn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = vn(l, o)) : ((o = Ln(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ja(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ya),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = vn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xc(e, t) {
  return (
    (t = qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function go(e, t, n, r) {
  return (
    r !== null && oc(r),
    jr(t, e.child, null, n),
    (e = xc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(N(422)))), go(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = qs({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ln(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && jr(t, e.child, null, s),
        (t.child.memoizedState = Ja(s)),
        (t.memoizedState = Ya),
        o);
  if (!(t.mode & 1)) return go(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(N(419))), (r = Wl(o, r, void 0)), go(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), He || l)) {
    if (((r = be), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Qt(e, i), wt(r, e, i, -1));
    }
    return Cc(), (r = Wl(Error(N(421)))), go(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _v.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ye = hn(i.nextSibling)),
      (Ze = t),
      (ie = !0),
      (yt = null),
      e !== null &&
        ((lt[at++] = Ft),
        (lt[at++] = Ht),
        (lt[at++] = Mn),
        (Ft = e.id),
        (Ht = e.overflow),
        (Mn = t)),
      (t = xc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ef(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Va(e.return, t, n);
}
function Vl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ae(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ef(e, n, t);
        else if (e.tag === 19) Ef(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && us(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Vl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && us(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Vl(t, !0, n, null, o);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function To(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mv(e, t, n) {
  switch (t.tag) {
    case 3:
      Fh(t), br();
      break;
    case 5:
      mh(t);
      break;
    case 1:
      Be(t.type) && rs(t);
      break;
    case 4:
      dc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      J(ss, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Hh(e, t, n)
          : (J(se, se.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      J(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        J(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dh(e, t, n);
  }
  return Kt(e, t, n);
}
var Bh, Za, Wh, Vh;
Bh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Za = function () {};
Wh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rn(Lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Sa(e, i)), (r = Sa(e, r)), (o = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = ka(e, i)), (r = ka(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ts);
    }
    Ea(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (fi.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (fi.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Z("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Vh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gv(e, t, n) {
  var r = t.pendingProps;
  switch ((ic(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Be(t.type) && ns(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kr(),
        ee(Ue),
        ee(Te),
        pc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (lu(yt), (yt = null)))),
        Za(e, t),
        Oe(t),
        null
      );
    case 5:
      fc(t);
      var i = Rn(ki.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Oe(t), null;
        }
        if (((e = Rn(Lt.current)), ho(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nt] = t), (r[bi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ei.length; i++) Z(ei[i], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Ad(r, o), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              Md(r, o), Z("invalid", r);
          }
          Ea(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      po(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      po(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : fi.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              io(r), Id(r, o, !0);
              break;
            case "textarea":
              io(r), zd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ts);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = v0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Nt] = t),
            (e[bi] = r),
            Bh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = _a(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ei.length; i++) Z(ei[i], e);
                i = r;
                break;
              case "source":
                Z("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (i = r);
                break;
              case "details":
                Z("toggle", e), (i = r);
                break;
              case "input":
                Ad(e, r), (i = Sa(e, r)), Z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                Md(e, r), (i = ka(e, r)), Z("invalid", e);
                break;
              default:
                i = r;
            }
            Ea(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? S0(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && x0(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && pi(e, u)
                    : typeof u == "number" && pi(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (fi.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Z("scroll", e)
                      : u != null && Bu(e, o, u, s));
              }
            switch (n) {
              case "input":
                io(e), Id(e, r, !1);
                break;
              case "textarea":
                io(e), zd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? dr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ts);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) Vh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Rn(ki.current)), Rn(Lt.current), ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ee(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ye !== null && t.mode & 1 && !(t.flags & 128))
          ah(), br(), (t.flags |= 98560), (o = !1);
        else if (((o = ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Nt] = t;
          } else
            br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else yt !== null && (lu(yt), (yt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? xe === 0 && (xe = 3) : Cc())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        kr(), Za(e, t), e === null && wi(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return ac(t.type._context), Oe(t), null;
    case 17:
      return Be(t.type) && ns(), Oe(t), null;
    case 19:
      if ((ee(se), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Vr(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = us(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Vr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return J(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > Er &&
            ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = us(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie)
            )
              return Oe(t), null;
          } else
            2 * pe() - o.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = se.current),
          J(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        kc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function yv(e, t) {
  switch ((ic(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kr(),
        ee(Ue),
        ee(Te),
        pc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fc(t), null;
    case 13:
      if (
        (ee(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        br();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(se), null;
    case 4:
      return kr(), null;
    case 10:
      return ac(t.type._context), null;
    case 22:
    case 23:
      return kc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yo = !1,
  Re = !1,
  vv = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ur(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function eu(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var _f = !1;
function xv(e, t) {
  if (((za = Jo), (e = G0()), nc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (h = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (l = s),
                h === o && ++d === r && (u = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = v;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Da = { focusedElem: e, selectionRange: n }, Jo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var m = y.memoizedProps,
                    w = y.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : mt(t.type, m),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          fe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = _f), (_f = !1), y;
}
function li(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && eu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ws(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function tu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[bi], delete t[Ha], delete t[tv], delete t[nv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Of(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; ) nu(e, t, n), (e = e.sibling);
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
var je = null,
  gt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Kh(e, t, n), (n = n.sibling);
}
function Kh(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function")
    try {
      Tt.onCommitFiberUnmount(Ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || ur(n, t);
    case 6:
      var r = je,
        i = gt;
      (je = null),
        Zt(e, t, n),
        (je = r),
        (gt = i),
        je !== null &&
          (gt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (gt
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            yi(e))
          : Dl(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (i = gt),
        (je = n.stateNode.containerInfo),
        (gt = !0),
        Zt(e, t, n),
        (je = r),
        (gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && eu(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (ur(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Zt(e, t, n), (Re = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Nf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vv()),
      t.forEach(function (r) {
        var i = Ov.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (je = l.stateNode), (gt = !1);
              break e;
            case 3:
              (je = l.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (je = l.stateNode.containerInfo), (gt = !0);
              break e;
          }
          l = l.return;
        }
        if (je === null) throw Error(N(160));
        Kh(o, s, i), (je = null), (gt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        fe(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gh(t, e), (t = t.sibling);
}
function Gh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), kt(e), r & 4)) {
        try {
          li(3, e, e.return), Ws(3, e);
        } catch (m) {
          fe(e, e.return, m);
        }
        try {
          li(5, e, e.return);
        } catch (m) {
          fe(e, e.return, m);
        }
      }
      break;
    case 1:
      ht(t, e), kt(e), r & 512 && n !== null && ur(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        kt(e),
        r & 512 && n !== null && ur(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          pi(i, "");
        } catch (m) {
          fe(e, e.return, m);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && g0(i, o),
              _a(l, s);
            var c = _a(l, o);
            for (s = 0; s < u.length; s += 2) {
              var d = u[s],
                f = u[s + 1];
              d === "style"
                ? S0(i, f)
                : d === "dangerouslySetInnerHTML"
                ? x0(i, f)
                : d === "children"
                ? pi(i, f)
                : Bu(i, d, f, c);
            }
            switch (l) {
              case "input":
                ba(i, o);
                break;
              case "textarea":
                y0(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? dr(i, !!o.multiple, v, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? dr(i, !!o.multiple, o.defaultValue, !0)
                      : dr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[bi] = o;
          } catch (m) {
            fe(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((ht(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (m) {
          fe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yi(t.containerInfo);
        } catch (m) {
          fe(e, e.return, m);
        }
      break;
    case 4:
      ht(t, e), kt(e);
      break;
    case 13:
      ht(t, e),
        kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (bc = pe())),
        r & 4 && Nf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (c = Re) || d), ht(t, e), (Re = c)) : ht(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (f = L = d; L !== null; ) {
              switch (((h = L), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  li(4, h, h.return);
                  break;
                case 1:
                  ur(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (m) {
                      fe(r, n, m);
                    }
                  }
                  break;
                case 5:
                  ur(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Rf(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (L = v)) : Rf(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = w0("display", s)));
              } catch (m) {
                fe(e, e.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (m) {
                fe(e, e.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), kt(e), r & 4 && Nf(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (pi(i, ""), (r.flags &= -33));
          var o = Of(e);
          ru(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Of(e);
          nu(e, l, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      fe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wv(e, t, n) {
  (L = e), Xh(e);
}
function Xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yo;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Re;
        l = yo;
        var c = Re;
        if (((yo = s), (Re = u) && !c))
          for (L = i; L !== null; )
            (s = L),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Tf(i)
                : u !== null
                ? ((u.return = s), (L = u))
                : Tf(i);
        for (; o !== null; ) (L = o), Xh(o), (o = o.sibling);
        (L = i), (yo = l), (Re = c);
      }
      Pf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : Pf(e);
  }
}
function Pf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Ws(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && pf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && yi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Re || (t.flags & 512 && tu(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Rf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Tf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ws(4, t);
          } catch (u) {
            fe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              fe(t, i, u);
            }
          }
          var o = t.return;
          try {
            tu(t);
          } catch (u) {
            fe(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            tu(t);
          } catch (u) {
            fe(t, s, u);
          }
      }
    } catch (u) {
      fe(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var Sv = Math.ceil,
  fs = Yt.ReactCurrentDispatcher,
  wc = Yt.ReactCurrentOwner,
  ct = Yt.ReactCurrentBatchConfig,
  V = 0,
  be = null,
  ge = null,
  Ce = 0,
  Ge = 0,
  cr = jn(0),
  xe = 0,
  Oi = null,
  Dn = 0,
  Vs = 0,
  Sc = 0,
  ai = null,
  Fe = null,
  bc = 0,
  Er = 1 / 0,
  Dt = null,
  ps = !1,
  iu = null,
  gn = null,
  vo = !1,
  un = null,
  hs = 0,
  ui = 0,
  ou = null,
  Lo = -1,
  Ao = 0;
function Ie() {
  return V & 6 ? pe() : Lo !== -1 ? Lo : (Lo = pe());
}
function yn(e) {
  return e.mode & 1
    ? V & 2 && Ce !== 0
      ? Ce & -Ce
      : iv.transition !== null
      ? (Ao === 0 && (Ao = L0()), Ao)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : F0(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < ui) throw ((ui = 0), (ou = null), Error(N(185)));
  $i(e, n, r),
    (!(V & 2) || e !== be) &&
      (e === be && (!(V & 2) && (Vs |= n), xe === 4 && sn(e, Ce)),
      We(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Er = pe() + 500), Hs && kn()));
}
function We(e, t) {
  var n = e.callbackNode;
  iy(e, t);
  var r = Yo(e, e === be ? Ce : 0);
  if (r === 0)
    n !== null && Fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fd(n), t === 1))
      e.tag === 0 ? rv(Lf.bind(null, e)) : oh(Lf.bind(null, e)),
        Zy(function () {
          !(V & 6) && kn();
        }),
        (n = null);
    else {
      switch (A0(r)) {
        case 1:
          n = Ku;
          break;
        case 4:
          n = R0;
          break;
        case 16:
          n = Xo;
          break;
        case 536870912:
          n = T0;
          break;
        default:
          n = Xo;
      }
      n = im(n, Yh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yh(e, t) {
  if (((Lo = -1), (Ao = 0), V & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (gr() && e.callbackNode !== n) return null;
  var r = Yo(e, e === be ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var o = Zh();
    (be !== e || Ce !== t) && ((Dt = null), (Er = pe() + 500), Tn(e, t));
    do
      try {
        kv();
        break;
      } catch (l) {
        Jh(e, l);
      }
    while (1);
    lc(),
      (fs.current = o),
      (V = i),
      ge !== null ? (t = 0) : ((be = null), (Ce = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ta(e)), i !== 0 && ((r = i), (t = su(e, i)))), t === 1)
    )
      throw ((n = Oi), Tn(e, 0), sn(e, r), We(e, pe()), n);
    if (t === 6) sn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !bv(i) &&
          ((t = ms(e, r)),
          t === 2 && ((o = Ta(e)), o !== 0 && ((r = o), (t = su(e, o)))),
          t === 1))
      )
        throw ((n = Oi), Tn(e, 0), sn(e, r), We(e, pe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          On(e, Fe, Dt);
          break;
        case 3:
          if (
            (sn(e, r), (r & 130023424) === r && ((t = bc + 500 - pe()), 10 < t))
          ) {
            if (Yo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Fa(On.bind(null, e, Fe, Dt), t);
            break;
          }
          On(e, Fe, Dt);
          break;
        case 4:
          if ((sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - xt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fa(On.bind(null, e, Fe, Dt), r);
            break;
          }
          On(e, Fe, Dt);
          break;
        case 5:
          On(e, Fe, Dt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return We(e, pe()), e.callbackNode === n ? Yh.bind(null, e) : null;
}
function su(e, t) {
  var n = ai;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = ms(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && lu(t)),
    e
  );
}
function lu(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function bv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!St(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function sn(e, t) {
  for (
    t &= ~Sc,
      t &= ~Vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Lf(e) {
  if (V & 6) throw Error(N(327));
  gr();
  var t = Yo(e, 0);
  if (!(t & 1)) return We(e, pe()), null;
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ta(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = Oi), Tn(e, 0), sn(e, t), We(e, pe()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    On(e, Fe, Dt),
    We(e, pe()),
    null
  );
}
function jc(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Er = pe() + 500), Hs && kn());
  }
}
function $n(e) {
  un !== null && un.tag === 0 && !(V & 6) && gr();
  var t = V;
  V |= 1;
  var n = ct.transition,
    r = G;
  try {
    if (((ct.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (ct.transition = n), (V = t), !(V & 6) && kn();
  }
}
function kc() {
  (Ge = cr.current), ee(cr);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jy(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((ic(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ns();
          break;
        case 3:
          kr(), ee(Ue), ee(Te), pc();
          break;
        case 5:
          fc(r);
          break;
        case 4:
          kr();
          break;
        case 13:
          ee(se);
          break;
        case 19:
          ee(se);
          break;
        case 10:
          ac(r.type._context);
          break;
        case 22:
        case 23:
          kc();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ge = e = vn(e.current, null)),
    (Ce = Ge = t),
    (xe = 0),
    (Oi = null),
    (Sc = Vs = Dn = 0),
    (Fe = ai = null),
    Pn !== null)
  ) {
    for (t = 0; t < Pn.length; t++)
      if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Pn = null;
  }
  return e;
}
function Jh(e, t) {
  do {
    var n = ge;
    try {
      if ((lc(), (Po.current = ds), cs)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        cs = !1;
      }
      if (
        ((zn = 0),
        (Se = ve = le = null),
        (si = !1),
        (Ci = 0),
        (wc.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (Oi = t), (ge = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = Ce),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = wf(s);
          if (v !== null) {
            (v.flags &= -257),
              Sf(v, s, l, o, t),
              v.mode & 1 && xf(o, c, t),
              (t = v),
              (u = c);
            var y = t.updateQueue;
            if (y === null) {
              var m = new Set();
              m.add(u), (t.updateQueue = m);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              xf(o, c, t), Cc();
              break e;
            }
            u = Error(N(426));
          }
        } else if (ie && l.mode & 1) {
          var w = wf(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Sf(w, s, l, o, t),
              oc(Cr(u, l));
            break e;
          }
        }
        (o = u = Cr(u, l)),
          xe !== 4 && (xe = 2),
          ai === null ? (ai = [o]) : ai.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = Ih(o, u, t);
              ff(o, g);
              break e;
            case 1:
              l = u;
              var p = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (gn === null || !gn.has(x))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Mh(o, l, t);
                ff(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tm(n);
    } catch (j) {
      (t = j), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Zh() {
  var e = fs.current;
  return (fs.current = ds), e === null ? ds : e;
}
function Cc() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    be === null || (!(Dn & 268435455) && !(Vs & 268435455)) || sn(be, Ce);
}
function ms(e, t) {
  var n = V;
  V |= 2;
  var r = Zh();
  (be !== e || Ce !== t) && ((Dt = null), Tn(e, t));
  do
    try {
      jv();
      break;
    } catch (i) {
      Jh(e, i);
    }
  while (1);
  if ((lc(), (V = n), (fs.current = r), ge !== null)) throw Error(N(261));
  return (be = null), (Ce = 0), xe;
}
function jv() {
  for (; ge !== null; ) em(ge);
}
function kv() {
  for (; ge !== null && !Gg(); ) em(ge);
}
function em(e) {
  var t = rm(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? tm(e) : (ge = t),
    (wc.current = null);
}
function tm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yv(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ge = null);
        return;
      }
    } else if (((n = gv(n, t, Ge)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function On(e, t, n) {
  var r = G,
    i = ct.transition;
  try {
    (ct.transition = null), (G = 1), Cv(e, t, n, r);
  } finally {
    (ct.transition = i), (G = r);
  }
  return null;
}
function Cv(e, t, n, r) {
  do gr();
  while (un !== null);
  if (V & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (oy(e, o),
    e === be && ((ge = be = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vo ||
      ((vo = !0),
      im(Xo, function () {
        return gr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var s = G;
    G = 1;
    var l = V;
    (V |= 4),
      (wc.current = null),
      xv(e, n),
      Gh(n, e),
      Vy(Da),
      (Jo = !!za),
      (Da = za = null),
      (e.current = n),
      wv(n),
      Xg(),
      (V = l),
      (G = s),
      (ct.transition = o);
  } else e.current = n;
  if (
    (vo && ((vo = !1), (un = e), (hs = i)),
    (o = e.pendingLanes),
    o === 0 && (gn = null),
    Zg(n.stateNode),
    We(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ps) throw ((ps = !1), (e = iu), (iu = null), e);
  return (
    hs & 1 && e.tag !== 0 && gr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ou ? ui++ : ((ui = 0), (ou = e))) : (ui = 0),
    kn(),
    null
  );
}
function gr() {
  if (un !== null) {
    var e = A0(hs),
      t = ct.transition,
      n = G;
    try {
      if (((ct.transition = null), (G = 16 > e ? 16 : e), un === null))
        var r = !1;
      else {
        if (((e = un), (un = null), (hs = 0), V & 6)) throw Error(N(331));
        var i = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (L = c; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        v = d.return;
                      if ((qh(d), d === c)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (L = h);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var m = y.child;
                if (m !== null) {
                  y.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    li(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (L = g);
                break e;
              }
              L = o.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (L = x);
          else
            e: for (s = p; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(9, l);
                  }
                } catch (j) {
                  fe(l, l.return, j);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (L = S);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((V = i), kn(), Tt && typeof Tt.onPostCommitFiberRoot == "function")
        )
          try {
            Tt.onPostCommitFiberRoot(Ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (ct.transition = t);
    }
  }
  return !1;
}
function Af(e, t, n) {
  (t = Cr(n, t)),
    (t = Ih(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = Ie()),
    e !== null && ($i(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Af(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Af(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gn === null || !gn.has(r)))
        ) {
          (e = Cr(n, e)),
            (e = Mh(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = Ie()),
            t !== null && ($i(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ev(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Ce & n) === n &&
      (xe === 4 || (xe === 3 && (Ce & 130023424) === Ce && 500 > pe() - bc)
        ? Tn(e, 0)
        : (Sc |= n)),
    We(e, t);
}
function nm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = lo), (lo <<= 1), !(lo & 130023424) && (lo = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Qt(e, t)), e !== null && ($i(e, t, n), We(e, n));
}
function _v(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nm(e, n);
}
function Ov(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), nm(e, n);
}
var rm;
rm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), mv(e, t, n);
      He = !!(e.flags & 131072);
    }
  else (He = !1), ie && t.flags & 1048576 && sh(t, os, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      To(e, t), (e = t.pendingProps);
      var i = Sr(t, Te.current);
      mr(t, n), (i = mc(null, t, r, e, i, n));
      var o = gc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((o = !0), rs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            cc(t),
            (i.updater = Us),
            (t.stateNode = i),
            (i._reactInternals = t),
            Qa(t, r, e, n),
            (t = Xa(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && rc(t), Ae(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (To(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Pv(r)),
          (e = mt(r, e)),
          i)
        ) {
          case 0:
            t = Ga(null, t, r, e, n);
            break e;
          case 1:
            t = kf(null, t, r, e, n);
            break e;
          case 11:
            t = bf(null, t, r, e, n);
            break e;
          case 14:
            t = jf(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Ga(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        kf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Fh(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ch(e, t),
          as(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Cr(Error(N(423)), t)), (t = Cf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Cr(Error(N(424)), t)), (t = Cf(e, t, r, n, i));
            break e;
          } else
            for (
              Ye = hn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ie = !0,
                yt = null,
                n = hh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((br(), r === i)) {
            t = Kt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mh(t),
        e === null && Wa(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        $a(r, i) ? (s = null) : o !== null && $a(r, o) && (t.flags |= 32),
        $h(e, t),
        Ae(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Wa(t), null;
    case 13:
      return Hh(e, t, n);
    case 4:
      return (
        dc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        bf(e, t, r, i, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          J(ss, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (St(o.value, s)) {
            if (o.children === i.children && !Ue.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ut(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Va(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Va(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ae(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = mt(r, t.pendingProps)),
        (i = mt(r.type, i)),
        jf(e, t, r, i, n)
      );
    case 15:
      return zh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        To(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), rs(t)) : (e = !1),
        mr(t, n),
        fh(t, r, i),
        Qa(t, r, i, n),
        Xa(null, t, r, !0, e, n)
      );
    case 19:
      return Uh(e, t, n);
    case 22:
      return Dh(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function im(e, t) {
  return P0(e, t);
}
function Nv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Nv(e, t, n, r);
}
function Ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pv(e) {
  if (typeof e == "function") return Ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vu)) return 11;
    if (e === qu) return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Io(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ec(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case er:
        return Ln(n.children, i, o, t);
      case Wu:
        (s = 8), (i |= 8);
        break;
      case ya:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = ya), (e.lanes = o), e
        );
      case va:
        return (e = ut(13, n, t, i)), (e.elementType = va), (e.lanes = o), e;
      case xa:
        return (e = ut(19, n, t, i)), (e.elementType = xa), (e.lanes = o), e;
      case p0:
        return qs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case d0:
              s = 10;
              break e;
            case f0:
              s = 9;
              break e;
            case Vu:
              s = 11;
              break e;
            case qu:
              s = 14;
              break e;
            case tn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ln(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function qs(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = p0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ql(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function _c(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new Rv(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cc(o),
    e
  );
}
function Tv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function om(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return ih(e, n, t);
  }
  return t;
}
function sm(e, t, n, r, i, o, s, l, u) {
  return (
    (e = _c(n, r, !0, e, i, o, s, l, u)),
    (e.context = om(null)),
    (n = e.current),
    (r = Ie()),
    (i = yn(n)),
    (o = Ut(r, i)),
    (o.callback = t ?? null),
    mn(n, o, i),
    (e.current.lanes = i),
    $i(e, i, r),
    We(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var i = t.current,
    o = Ie(),
    s = yn(i);
  return (
    (n = om(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(i, t, s)),
    e !== null && (wt(e, i, s, o), No(e, i, s)),
    s
  );
}
function gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function If(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oc(e, t) {
  If(e, t), (e = e.alternate) && If(e, t);
}
function Lv() {
  return null;
}
var lm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nc(e) {
  this._internalRoot = e;
}
Ks.prototype.render = Nc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Qs(e, t, null, null);
};
Ks.prototype.unmount = Nc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $n(function () {
      Qs(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Ks(e) {
  this._internalRoot = e;
}
Ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = z0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++);
    on.splice(n, 0, e), n === 0 && $0(e);
  }
};
function Pc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mf() {}
function Av(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = gs(s);
        o.call(c);
      };
    }
    var s = sm(t, r, e, 0, null, !1, !1, "", Mf);
    return (
      (e._reactRootContainer = s),
      (e[qt] = s.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = gs(u);
      l.call(c);
    };
  }
  var u = _c(e, 0, !1, null, null, !1, !1, "", Mf);
  return (
    (e._reactRootContainer = u),
    (e[qt] = u.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      Qs(t, u, n, r);
    }),
    u
  );
}
function Xs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = gs(s);
        l.call(u);
      };
    }
    Qs(t, s, e, i);
  } else s = Av(n, t, e, i, r);
  return gs(s);
}
I0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zr(t.pendingLanes);
        n !== 0 &&
          (Gu(t, n | 1), We(t, pe()), !(V & 6) && ((Er = pe() + 500), kn()));
      }
      break;
    case 13:
      $n(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var i = Ie();
          wt(r, e, 1, i);
        }
      }),
        Oc(e, 1);
  }
};
Xu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      wt(t, e, 134217728, n);
    }
    Oc(e, 134217728);
  }
};
M0 = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Ie();
      wt(n, e, t, r);
    }
    Oc(e, t);
  }
};
z0 = function () {
  return G;
};
D0 = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Na = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ba(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fs(r);
            if (!i) throw Error(N(90));
            m0(r), ba(r, i);
          }
        }
      }
      break;
    case "textarea":
      y0(e, n);
      break;
    case "select":
      (t = n.value), t != null && dr(e, !!n.multiple, t, !1);
  }
};
k0 = jc;
C0 = $n;
var Iv = { usingClientEntryPoint: !1, Events: [Hi, ir, Fs, b0, j0, jc] },
  qr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Mv = {
    bundleType: qr.bundleType,
    version: qr.version,
    rendererPackageName: qr.rendererPackageName,
    rendererConfig: qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = O0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qr.findFiberByHostInstance || Lv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xo.isDisabled && xo.supportsFiber)
    try {
      (Ms = xo.inject(Mv)), (Tt = xo);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iv;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pc(t)) throw Error(N(200));
  return Tv(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Pc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = lm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = _c(e, 1, !1, null, null, n, !1, r, i)),
    (e[qt] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new Nc(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = O0(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return $n(e);
};
nt.hydrate = function (e, t, n) {
  if (!Gs(t)) throw Error(N(200));
  return Xs(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Pc(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = lm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = sm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[qt] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ks(t);
};
nt.render = function (e, t, n) {
  if (!Gs(t)) throw Error(N(200));
  return Xs(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!Gs(e)) throw Error(N(40));
  return e._reactRootContainer
    ? ($n(function () {
        Xs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = jc;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gs(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Xs(e, t, n, !1, r);
};
nt.version = "18.2.0-next-9e3b772b8-20220608";
function am() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am);
    } catch (e) {
      console.error(e);
    }
}
am(), (s0.exports = nt);
var zv = s0.exports,
  zf = zv;
(ma.createRoot = zf.createRoot), (ma.hydrateRoot = zf.hydrateRoot);
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ni() {
  return (
    (Ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ni.apply(this, arguments)
  );
}
var cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(cn || (cn = {}));
const Df = "popstate";
function Dv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return au(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ys(i);
  }
  return Fv(t, n, null, e);
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $v() {
  return Math.random().toString(36).substr(2, 8);
}
function $f(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function au(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ni(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Mr(t) : t,
      { state: n, key: (t && t.key) || r || $v() }
    )
  );
}
function ys(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Mr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Fv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = cn.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), s.replaceState(Ni({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = cn.Pop;
    let w = d(),
      g = w == null ? null : w - c;
    (c = w), u && u({ action: l, location: m.location, delta: g });
  }
  function h(w, g) {
    l = cn.Push;
    let p = au(m.location, w, g);
    n && n(p, w), (c = d() + 1);
    let x = $f(p, c),
      S = m.createHref(p);
    try {
      s.pushState(x, "", S);
    } catch {
      i.location.assign(S);
    }
    o && u && u({ action: l, location: m.location, delta: 1 });
  }
  function v(w, g) {
    l = cn.Replace;
    let p = au(m.location, w, g);
    n && n(p, w), (c = d());
    let x = $f(p, c),
      S = m.createHref(p);
    s.replaceState(x, "", S),
      o && u && u({ action: l, location: m.location, delta: 0 });
  }
  function y(w) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : ys(w);
    return (
      ye(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, g)
    );
  }
  let m = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Df, f),
        (u = w),
        () => {
          i.removeEventListener(Df, f), (u = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let g = y(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: v,
    go(w) {
      return s.go(w);
    },
  };
  return m;
}
var Ff;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ff || (Ff = {}));
function Hv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Mr(t) : t,
    i = Tc(r.pathname || "/", n);
  if (i == null) return null;
  let o = um(e);
  Uv(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = Yv(o[l], e2(i));
  return s;
}
function um(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (ye(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = xn([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (ye(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      um(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: Gv(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let u of cm(o.path)) i(o, s, u);
    }),
    t
  );
}
function cm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = cm(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Uv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Xv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bv = /^:\w+$/,
  Wv = 3,
  Vv = 2,
  qv = 1,
  Qv = 10,
  Kv = -2,
  Hf = (e) => e === "*";
function Gv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hf) && (r += Kv),
    t && (r += Vv),
    n
      .filter((i) => !Hf(i))
      .reduce((i, o) => i + (Bv.test(o) ? Wv : o === "" ? qv : Qv), r)
  );
}
function Xv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Yv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = Jv(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: xn([i, d.pathname]),
      pathnameBase: i2(xn([i, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (i = xn([i, d.pathnameBase]));
  }
  return o;
}
function Jv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Zv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      if (d === "*") {
        let h = l[f] || "";
        s = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (c[d] = t2(l[f] || "", d)), c;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Zv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Rc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function e2(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Rc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function t2(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Rc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Tc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function n2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Mr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : r2(n, t)) : t,
    search: o2(r),
    hash: s2(i),
  };
}
function r2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Kl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Mr(e))
    : ((i = Ni({}, e)),
      ye(
        !i.pathname || !i.pathname.includes("?"),
        Kl("?", "pathname", "search", i)
      ),
      ye(
        !i.pathname || !i.pathname.includes("#"),
        Kl("#", "pathname", "hash", i)
      ),
      ye(!i.search || !i.search.includes("#"), Kl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = n2(i, l),
    c = s && s !== "/" && s.endsWith("/"),
    d = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const xn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  o2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  s2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function l2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vs() {
  return (
    (vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vs.apply(this, arguments)
  );
}
const Lc = b.createContext(null),
  pm = b.createContext(null),
  Un = b.createContext(null),
  Ys = b.createContext(null),
  Bn = b.createContext({ outlet: null, matches: [] }),
  hm = b.createContext(null);
function a2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Bi() || ye(!1);
  let { basename: r, navigator: i } = b.useContext(Un),
    { hash: o, pathname: s, search: l } = Ic(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : xn([r, s])),
    i.createHref({ pathname: u, search: l, hash: o })
  );
}
function Bi() {
  return b.useContext(Ys) != null;
}
function Wi() {
  return Bi() || ye(!1), b.useContext(Ys).location;
}
function mm(e) {
  b.useContext(Un).static || b.useLayoutEffect(e);
}
function Js() {
  return b.useContext(Lc) != null ? S2() : u2();
}
function u2() {
  Bi() || ye(!1);
  let { basename: e, navigator: t } = b.useContext(Un),
    { matches: n } = b.useContext(Bn),
    { pathname: r } = Wi(),
    i = JSON.stringify(dm(n).map((l) => l.pathnameBase)),
    o = b.useRef(!1);
  return (
    mm(() => {
      o.current = !0;
    }),
    b.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let c = fm(l, JSON.parse(i), r, u.relative === "path");
        e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : xn([e, c.pathname])),
          (u.replace ? t.replace : t.push)(c, u.state, u);
      },
      [e, t, i, r]
    )
  );
}
function Ac() {
  let { matches: e } = b.useContext(Bn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ic(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = b.useContext(Bn),
    { pathname: i } = Wi(),
    o = JSON.stringify(dm(r).map((s) => s.pathnameBase));
  return b.useMemo(() => fm(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function c2(e, t) {
  return d2(e, t);
}
function d2(e, t, n) {
  Bi() || ye(!1);
  let { navigator: r } = b.useContext(Un),
    { matches: i } = b.useContext(Bn),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Wi(),
    c;
  if (t) {
    var d;
    let m = typeof t == "string" ? Mr(t) : t;
    l === "/" || ((d = m.pathname) != null && d.startsWith(l)) || ye(!1),
      (c = m);
  } else c = u;
  let f = c.pathname || "/",
    h = l === "/" ? f : f.slice(l.length) || "/",
    v = Hv(e, { pathname: h }),
    y = g2(
      v &&
        v.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, s, m.params),
            pathname: xn([
              l,
              r.encodeLocation
                ? r.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? l
                : xn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? b.createElement(
        Ys.Provider,
        {
          value: {
            location: vs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: cn.Pop,
          },
        },
        y
      )
    : y;
}
function f2() {
  let e = w2(),
    t = l2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: i }, n) : null,
    o
  );
}
const p2 = b.createElement(f2, null);
class h2 extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? b.createElement(
          Bn.Provider,
          { value: this.props.routeContext },
          b.createElement(hm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function m2(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = b.useContext(Lc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Bn.Provider, { value: t }, r)
  );
}
function g2(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let l = o.findIndex(
      (u) => u.route.id && (s == null ? void 0 : s[u.route.id])
    );
    l >= 0 || ye(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, u, c) => {
    let d = u.route.id ? (s == null ? void 0 : s[u.route.id]) : null,
      f = null;
    n && (f = u.route.errorElement || p2);
    let h = t.concat(o.slice(0, c + 1)),
      v = () => {
        let y;
        return (
          d ? (y = f) : u.route.element ? (y = u.route.element) : (y = l),
          b.createElement(m2, {
            match: u,
            routeContext: { outlet: l, matches: h },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? b.createElement(h2, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: d,
          children: v(),
          routeContext: { outlet: null, matches: h },
        })
      : v();
  }, null);
}
var uu;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(uu || (uu = {}));
var Pi;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Pi || (Pi = {}));
function y2(e) {
  let t = b.useContext(Lc);
  return t || ye(!1), t;
}
function v2(e) {
  let t = b.useContext(pm);
  return t || ye(!1), t;
}
function x2(e) {
  let t = b.useContext(Bn);
  return t || ye(!1), t;
}
function gm(e) {
  let t = x2(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ye(!1), n.route.id;
}
function w2() {
  var e;
  let t = b.useContext(hm),
    n = v2(Pi.UseRouteError),
    r = gm(Pi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function S2() {
  let { router: e } = y2(uu.UseNavigateStable),
    t = gm(Pi.UseNavigateStable),
    n = b.useRef(!1);
  return (
    mm(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, vs({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function $e(e) {
  ye(!1);
}
function b2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = cn.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  Bi() && ye(!1);
  let l = t.replace(/^\/*/, "/"),
    u = b.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = Mr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    y = b.useMemo(() => {
      let m = Tc(c, l);
      return m == null
        ? null
        : {
            location: { pathname: m, search: d, hash: f, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, h, v, i]);
  return y == null
    ? null
    : b.createElement(
        Un.Provider,
        { value: u },
        b.createElement(Ys.Provider, { children: n, value: y })
      );
}
function j2(e) {
  let { children: t, location: n } = e;
  return c2(cu(t), n);
}
var Uf;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Uf || (Uf = {}));
new Promise(() => {});
function cu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, i) => {
      if (!b.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === b.Fragment) {
        n.push.apply(n, cu(r.props.children, o));
        return;
      }
      r.type !== $e && ye(!1), !r.props.index || !r.props.children || ye(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = cu(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xs.apply(this, arguments)
  );
}
function ym(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function k2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function C2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !k2(e);
}
const E2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  _2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function O2(e) {
  let { basename: t, children: n, window: r } = e,
    i = b.useRef();
  i.current == null && (i.current = Dv({ window: r, v5Compat: !0 }));
  let o = i.current,
    [s, l] = b.useState({ action: o.action, location: o.location });
  return (
    b.useLayoutEffect(() => o.listen(l), [o]),
    b.createElement(b2, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
    })
  );
}
const N2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  P2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R2 = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: c,
        preventScrollReset: d,
      } = t,
      f = ym(t, E2),
      { basename: h } = b.useContext(Un),
      v,
      y = !1;
    if (typeof c == "string" && P2.test(c) && ((v = c), N2))
      try {
        let p = new URL(window.location.href),
          x = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          S = Tc(x.pathname, h);
        x.origin === p.origin && S != null
          ? (c = S + x.search + x.hash)
          : (y = !0);
      } catch {}
    let m = a2(c, { relative: i }),
      w = T2(c, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: d,
        relative: i,
      });
    function g(p) {
      r && r(p), p.defaultPrevented || w(p);
    }
    return b.createElement(
      "a",
      xs({}, f, { href: v || m, onClick: y || o ? r : g, ref: n, target: u })
    );
  }),
  Y = b.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: l,
        to: u,
        children: c,
      } = t,
      d = ym(t, _2),
      f = Ic(u, { relative: d.relative }),
      h = Wi(),
      v = b.useContext(pm),
      { navigator: y } = b.useContext(Un),
      m = y.encodeLocation ? y.encodeLocation(f).pathname : f.pathname,
      w = h.pathname,
      g =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    i ||
      ((w = w.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (m = m.toLowerCase()));
    let p = w === m || (!s && w.startsWith(m) && w.charAt(m.length) === "/"),
      x =
        g != null &&
        (g === m || (!s && g.startsWith(m) && g.charAt(m.length) === "/")),
      S = p ? r : void 0,
      j;
    typeof o == "function"
      ? (j = o({ isActive: p, isPending: x }))
      : (j = [o, p ? "active" : null, x ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let k = typeof l == "function" ? l({ isActive: p, isPending: x }) : l;
    return b.createElement(
      R2,
      xs({}, d, { "aria-current": S, className: j, ref: n, style: k, to: u }),
      typeof c == "function" ? c({ isActive: p, isPending: x }) : c
    );
  });
var Bf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Bf || (Bf = {}));
var Wf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wf || (Wf = {}));
function T2(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
    } = t === void 0 ? {} : t,
    l = Js(),
    u = Wi(),
    c = Ic(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (C2(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : ys(u) === ys(c);
        l(e, { replace: f, state: i, preventScrollReset: o, relative: s });
      }
    },
    [u, l, c, r, i, n, e, o, s]
  );
}
const L2 = "/assets/menu-242d80a8.svg",
  A2 = "/assets/close-ad0e0ca6.svg",
  I2 = "/assets/Logo-22ad0666.svg",
  M2 = "/assets/Logo-e01e2459.png",
  z2 = "/assets/insta-ed655d2f.svg",
  D2 = "/assets/twitter-bd840309.svg",
  $2 = "/assets/Discord-262fb731.svg",
  F2 = "/assets/Banner-639ad07c.jpg",
  H2 = "/assets/company_1-56ae60cb.jpg",
  U2 = "/assets/company_2-a392943d.jpg",
  B2 = "/assets/company_3-efcbcecb.jpg",
  W2 = "/assets/company_4-0fc3cb59.jpg",
  V2 = "/assets/company_5-b1514897.jpg",
  q2 = "/assets/company_6-ac9def8b.jpg",
  Q2 = "/assets/company_7-a411b8a8.jpg",
  K2 = "/assets/company_8-a3561f3c.jpg",
  G2 = "/assets/company_9-ae30505a.jpg",
  X2 = "/assets/company_10-1ee3742a.jpg",
  Y2 =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QB4RXhpZgAATU0AKgAAABBFeGlmTWV0YQAFARoABQAAAAEAAABSARsABQAAAAEAAABaASgAAwAAAAEAAgAAATEAAgAAAA4AAABiAhMAAwAAAAEAAQAAAAAAAAAAAEgAAAABAAAASAAAAAFTcGVlZFNpemUuY29tAP/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/AAAsIAKwArAEBEQD/xAAdAAEAAAcBAQAAAAAAAAAAAAAAAQIFBgcICQQD/8QAPxAAAQMCBAMGAwUFBwUAAAAAAQACAwQFBgcRURIUIQgTFTFBUmFioQkyQnGBIiNykbEWM1ODksHCgpOis/D/2gAIAQEAAD8A6poiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKGo3TUbpqN01G6ajdNRumo3TUbpqN01G6ajdNRumo3UUREREXwnqBH+yPP1XyFSSnMFOYKcwU5gpzBURUbleC/Ypw9ha1y3vE9+t1nt0H97WV9Uynhj/AInvIaP1K+eGcYYWxpZ4cRYOxNar9aqkvbDX2ysjqqeQscWuDZIyWnRzS06HoQR6Kqd8PcnfD3J3w9yd8Pcpm1DQertQvuCCNQooiIvhWVIpYS/8R6NHxVE5x0jiXFR5o7pzR9yc0fcoc18yc3831URVa/iWMe0b2g8Idm/Ky6ZmYvkdMykAhoaCKQNmuFW/pHBHr5anUudoeFrXO0Omh4RdoDtQ5w9pPEct7zGxPPLRNlc+hs9O4x0NC0+TY4gdNdANXu1cdOpOgXavsG4BuWUPZVwHg++scy4uopLnVRkaGJ9XM+oEZG7Wytafi0rPxqy7yKcy7f6pzLt/qnMu3+qcy7dVK3VzXkQvd1P3VUUREVo3m8tqKtzIn6xxnhbp67lU7nD7lNzp3TnDunOHdSvrDuotqyR0Kjzbh11XKH7YbH10vma2CMr6eGY0lqs7rq0NJPf1FVM6IDgHmWim6ev7wqh9h37PXFuPsTW3M3O7DtRZsHW2WOrprXWxFlTd5GkOY10R0cyDUAuLhq4dAOpI66RyiMBkY0a0aAbBfYVbh6oK4+rlHnfmUprj7k547qLa97XBzXkEHUEK87ZWsuFHHUtI1I0cNnDzXqRFTMR3EWu0T1Ido9wEbP4ndPoNT+ixpzhLvvKZ1cd1EVp0+8o88fd9UFafctTe2D2/8M9niSbA+EKKDEWOixj300jyKW3scNQ6dzepeRoRECDoQSWgjXnXiv7QLta4ruL65+bdfaYydWUtphipYY/gOFvE4fxOKu/Lb7TztP4IqI24jvtDjOha4ccF2pmskLdhLEGuB+J4lnS9fa2YIqrU270GQD5cWCPu2S1tZC+GH8pRH3jh8NG/mtb8xPtGe1Xj+rkfTY/OF6NxIZSWGBtNwN66Dvesp8/PjVs4a7cnauwvXx19JnbiOs7t2phuU4rYnjYtmDun8it/uyF9pPa84bpSZcZw0lDYMUVRbFQXGF3BR3GU6ARFpP7qVxJ0Gpa7yBBIB3ZFwbroHaqcVhI6FSmsdr5pzjt0FWT6q5sDXJzaua3SO/Zlb3jP4h5/zH9FeqIrBzSuradtDb+L7xdM4fl0b/Vyx8Ljr+JRFw+ZTeIfMniHzrG3aMzqZklkziXMWOKOett1MGUEEjtGy1Uj2xxA7gOcHEerWuXCy+Xy74lvFbiC/XCauuNxnfU1VTM7ifLK86ucTuSVT0REXRD7P/sXWK72Wjz0zctBqmzSd7h601LdI+BpBbWSN83anXgaemg4jxBzdOjArtD5r6tuRHqniR3TxI7p4kd1UbBfTR3qinL9Gtma1x+UnQ/QlZqRFhPNqudLi58GvSmpo49Pz1d/yVlc5w9OJOeHuUef+b6pz/zfVaQ/aoYmrI8tsF4biqHtp7hepquaNp6PMEPC3XfTviua6lREXusNsN5vlvtAfw89VRU3FtxvDdfqu9dkpqTDllt+H7YCykttLFSQN18o42hrfoAveK3X8Sjz3zKHPH3Jzx9yc8fcnPuHUP6hbMW6p5y30tZ/jwsk/wBTQf8AdehFrXnBcZYMw7tEHEBvcaf9iMqzPEnHqXJ4ifcniJ9yeIn3LS77Tijmr8B4Mu7YnvjorrUQPeBq1nexAjU+mvd/Rc8VKiIvRbqyW3V9NXwO4ZaaVkzDs5pBH9F26y3zBtuYuX9gxraayKoiu1DFUPdGejZS0d4wj0LX8TSPQgq4uf0/EniHzp4h86eIfOniHzp4h8y2twhIZcJ2SV3m+3Uzj+sTVV0WrHaAldQZj1hII5iCCUflwBv/ABWNxcXaeaeIu3KeIu3KeIu3KxD2ssK1OYGQ2JrXRUnM1tFCy5UrA0ueXwOD3cIHUuLA8ADz109VymUqIiLP/Zg7Vt8yHqpLBdaea54UrpDJNTRuAlpZToDLFr06gdWnTXodQR16W2HFNFiWwWzE1pnfJQXejhr6V7mlpdFKwPYSD1GrXDovb4i7cp4i7cp4i7cp4i7cp4i73Fbt4Wp3UmGbRSvGjoaCnjI+IjaFVEWsXa1onUN/sl7DdG1lG+mJHuifxf0l+iwMLmdPvKPiZ96eJn3p4mfeniZH4ly57Q2WcuVmaF0sTCX2+rca+3ycBaHQSEkNG/CdW/p8VjJERFduVOX1xzPx5acHUDH8NZO01UrR0gpwQZJCfTRuunxIHqurNvlp7PbKOy2yMQ0VvgjpaeMeTImNDWt/QABeoXOT1Kn8TPqU8T+ZPE/mVSwzHJf8RWyxxAudcKyGmGnzvDdfqugTWhrQ1oAAGgA9FFFh7tS4YffcsJbpTx8U9jqGVnQdTEf2JB+QDg4/wLSrmDunMHdOYO6cwd05grF/aDympM4MHcjEyOO9W0OmtlQ7po/TrG4+x2mh2Oh9FzuxBYLvhq7VNlvtvmoq6leWSwyt0LT/ALj4joqcqvHg7F01PzcWFru+D/FbQyln8+HRUlzXMcWPaWuadCCNCDsp6amqKyoipKSCSaeZ4jjjjaXOe4nQAAeZJW/nZeySGVGHJL3iGnYcTXhjTN68nB0IgB9xPV5HTXQdeHU5yFQV9OZdopeYKcwU5grMHZbw5JiLNCC5yR601jp5Kx5I6GQjgjH56u4h/AVuoiLy3O3Ud4ttXabhEJaWtgfTzMP4o3tLXD+RK5vY7wvccCYuumFLiSZbdUOja8jTvY/Njx8HNLXfqre5o7pzR3TmjunNn3JzR3VnZi5UYEzSpmR4ptLX1MTeGKshPBURjYP9R8DqFTME5CZW4EkbU2rDkFRVs6iprQJ5Ad2lw0b/ANICyMKhkbQ1ugA8gFZmNMoMssw2PdibC9LJUvHWshb3VQP8xvU/rqvBgPIzLLLapNdh6zd7WA6tqqwtmlZ8GuI/Z/Tqr+NUSei+grCBpqpucO6c4nOJzi3i7K+BH4Uy5ZfK6Esr8RubWOBGhbTgEQt/UFz/APMWZkRFrb2w8q5b1ZIcyrHSl9ZaGdzcmMHWSk11EnxMZJ1+VxJ6NWmvea+qd4neJ3id4nendR7526l4z7lESub6oZHO/EocZ3TvfinfHdO+O6d8d1knIPLCqzWx5TW2aJ/g9vLaq6SjUARA9Iwfc8/sj104j+FdEYoo4ImQwxtjjjaGsa0aBoHQAD0CnREUk0MNTDJT1ETJYpWlkkb2hzXtI0IIPQgj0XPbtKZJ1+UWJjc7RDJJhe7SudRS+fLSHUmnedx1LSfNu5a5YaFW8feKjzh3TnDunOHdOcO6c4d05w7pzh3TnDunOHdOcO6c4d05w7/VVTDFlveML9RYaw7QyVlwuEohgib6k+ZJ8g0DUknoACSukWTeVVqyjwbBh2jcyetlInuNWBoaicjqR6hjfJo2GvmTrfSIiIqTirCthxtYKzDGJbfHW26uj7uWJ/0c0+bXA6EEdQQCudmfuQWJsmLuZuGW4YcqpCKK5BnltFNp0bIB+jgNR6gYi787qPfO3Tvnbp3zt07526d87dO+dunfO3Tvnbp3zt0Ex9SqxhjD9+xle6XDmGbXPcLjWP4IoIm6k7knya0DqXHQAdSV0M7PfZ8tGTVm56vMVdieujArKwDVsLfPuYteoaD5nzcRqegAGYUREREXjvFntWILZU2W+W6nrqCsYY56eeMPjkafQg//AGq0nz07El7s0tRibJ/vLnbyTJJZpH61MA8z3Lj/AHrflP7fkBxlaoVYq7fVS0NdTy09RA8xyxSsLHscDoWuaeoI2K+XNpzahzZ3TmzunNndObO6c2d1Hm1lfJrs65kZy1EdVa6A22xcWkt3rGFsOgPURjzld8G9NfNzV0ByiyRwRk1aDQ4aozNXVDQKy5VABqKk7E/hZr5MHTfU6k5ARERERERY/wAzsiMsM3IT/bHDcUlaG8Mdxpj3NXGPT9437wHo14c34LU/MP7PnF9ufLWZa4po7xT9S2juI5aoA9oeNY3n4ng/Ja+4tySzhwO5/wDabLm+UscZIdOyldPAP82Pij/8lYrqgscWOaQ5p0II6gqHNDZOaGyrOHsJ4wxdKIMK4Uu94kJ04aGikn0/PgB0WbcC9iHPHFj45r3bqLC9G7QmS5Th0pb8sUXE7X4P4FtDlf2JMpsByQ3LEbJcXXOPR3FcGBtIxw9W041B/KQvWwcMMVPEyCCJkcUbQxjGNAa1oGgAA8gFOiIiIiIiIiKlXXCmFr8Sb5hq1XEnz5ujjm1/1AqgyZK5Nyv7yXKXBj3efE6w0pP/AK17bfljltaHiS1Ze4aonN8nU9pp4yP9LArkZGyJgjjY1jWjQNaNAB+SmREREREREREREREREREREX//2Q==",
  J2 = "/assets/company_12-bfa2d3eb.jpg",
  Z2 = "/assets/Ipad-f555c6e1.jpg",
  ex = "/assets/Iphone_14-2ce848e9.jpg",
  tx = "/assets/Iwatch-a2b26c1d.jpg",
  nx = "/assets/macbook-354d4b30.jpg",
  rx = "/assets/airpods-4e07655a.jpg",
  ix = () =>
    a.jsx("img", {
      src: F2,
      alt: "Banner",
      style: { width: "100%", height: "100%", objectFit: "cover" },
    });
var Mc = {},
  vm = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(vm);
var it = vm.exports,
  Gl = {};
function U() {
  return (
    (U = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    U.apply(this, arguments)
  );
}
function Jn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function xm(e) {
  if (!Jn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = xm(e[n]);
    }),
    t
  );
}
function Bt(e, t, n = { clone: !0 }) {
  const r = n.clone ? U({}, e) : e;
  return (
    Jn(e) &&
      Jn(t) &&
      Object.keys(t).forEach((i) => {
        i !== "__proto__" &&
          (Jn(t[i]) && i in e && Jn(e[i])
            ? (r[i] = Bt(e[i], t[i], n))
            : n.clone
            ? (r[i] = Jn(t[i]) ? xm(t[i]) : t[i])
            : (r[i] = t[i]));
      }),
    r
  );
}
var wm = { exports: {} },
  ox = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  sx = ox,
  lx = sx;
function Sm() {}
function bm() {}
bm.resetWarningCache = Sm;
var ax = function () {
  function e(r, i, o, s, l, u) {
    if (u !== lx) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: bm,
    resetWarningCache: Sm,
  };
  return (n.PropTypes = n), n;
};
wm.exports = ax();
var jm = wm.exports;
function _r(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function At(e) {
  if (typeof e != "string") throw new Error(_r(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ux(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          },
    () => {}
  );
}
function cx(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), (n = setTimeout(o, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function dx(e, t) {
  return () => null;
}
function fx(e, t) {
  return b.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function km(e) {
  return (e && e.ownerDocument) || document;
}
function px(e) {
  return km(e).defaultView || window;
}
function hx(e, t) {
  return () => null;
}
function Cm(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const mx = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  Em = mx;
let Vf = 0;
function gx(e) {
  const [t, n] = b.useState(e),
    r = e || t;
  return (
    b.useEffect(() => {
      t == null && ((Vf += 1), n(`mui-${Vf}`));
    }, [t]),
    r
  );
}
const qf = ha["useId"];
function yx(e) {
  if (qf !== void 0) {
    const t = qf();
    return e ?? t;
  }
  return gx(e);
}
function vx(e, t, n, r, i) {
  return null;
}
function xx({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: i } = b.useRef(e !== void 0),
    [o, s] = b.useState(t),
    l = i ? e : o,
    u = b.useCallback((c) => {
      i || s(c);
    }, []);
  return [l, u];
}
function wx(e) {
  const t = b.useRef(e);
  return (
    Em(() => {
      t.current = e;
    }),
    b.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Sx(...e) {
  return b.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Cm(n, t);
            });
          },
    e
  );
}
let Zs = !0,
  du = !1,
  Qf;
const bx = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function jx(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && bx[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function kx(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Zs = !0);
}
function Xl() {
  Zs = !1;
}
function Cx() {
  this.visibilityState === "hidden" && du && (Zs = !0);
}
function Ex(e) {
  e.addEventListener("keydown", kx, !0),
    e.addEventListener("mousedown", Xl, !0),
    e.addEventListener("pointerdown", Xl, !0),
    e.addEventListener("touchstart", Xl, !0),
    e.addEventListener("visibilitychange", Cx, !0);
}
function _x(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Zs || jx(t);
}
function Ox() {
  const e = b.useCallback((i) => {
      i != null && Ex(i.ownerDocument);
    }, []),
    t = b.useRef(!1);
  function n() {
    return t.current
      ? ((du = !0),
        window.clearTimeout(Qf),
        (Qf = window.setTimeout(() => {
          du = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(i) {
    return _x(i) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function _m(e, t) {
  const n = U({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = U({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r];
        (n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
            ? (n[r] = o)
            : ((n[r] = U({}, o)),
              Object.keys(i).forEach((s) => {
                n[r][s] = _m(i[s], o[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Nx(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, s) => {
          if (s) {
            const l = t(s);
            l !== "" && o.push(l), n && n[s] && o.push(n[s]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Kf = (e) => e,
  Px = () => {
    let e = Kf;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Kf;
      },
    };
  },
  Rx = Px(),
  Om = Rx,
  Tx = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function Nm(e, t, n = "Mui") {
  const r = Tx[t];
  return r ? `${n}-${r}` : `${Om.generate(e)}-${t}`;
}
function Lx(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = Nm(e, i, n);
    }),
    r
  );
}
function Jt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pm(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ax() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pm(e)) && (r && (r += " "), (r += t));
  return r;
}
function Rm(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ix =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Mx = Rm(function (e) {
    return (
      Ix.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function zx(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Dx(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var $x = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Dx(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = zx(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ne = "-ms-",
  ws = "-moz-",
  q = "-webkit-",
  Tm = "comm",
  zc = "rule",
  Dc = "decl",
  Fx = "@import",
  Lm = "@keyframes",
  Hx = Math.abs,
  el = String.fromCharCode,
  Ux = Object.assign;
function Bx(e, t) {
  return ke(e, 0) ^ 45
    ? (((((((t << 2) ^ ke(e, 0)) << 2) ^ ke(e, 1)) << 2) ^ ke(e, 2)) << 2) ^
        ke(e, 3)
    : 0;
}
function Am(e) {
  return e.trim();
}
function Wx(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function fu(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ri(e, t, n) {
  return e.slice(t, n);
}
function _t(e) {
  return e.length;
}
function $c(e) {
  return e.length;
}
function wo(e, t) {
  return t.push(e), e;
}
function Vx(e, t) {
  return e.map(t).join("");
}
var tl = 1,
  Or = 1,
  Im = 0,
  Ve = 0,
  me = 0,
  zr = "";
function nl(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: tl,
    column: Or,
    length: s,
    return: "",
  };
}
function Qr(e, t) {
  return Ux(nl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qx() {
  return me;
}
function Qx() {
  return (
    (me = Ve > 0 ? ke(zr, --Ve) : 0), Or--, me === 10 && ((Or = 1), tl--), me
  );
}
function et() {
  return (
    (me = Ve < Im ? ke(zr, Ve++) : 0), Or++, me === 10 && ((Or = 1), tl++), me
  );
}
function It() {
  return ke(zr, Ve);
}
function Mo() {
  return Ve;
}
function Vi(e, t) {
  return Ri(zr, e, t);
}
function Ti(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mm(e) {
  return (tl = Or = 1), (Im = _t((zr = e))), (Ve = 0), [];
}
function zm(e) {
  return (zr = ""), e;
}
function zo(e) {
  return Am(Vi(Ve - 1, pu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kx(e) {
  for (; (me = It()) && me < 33; ) et();
  return Ti(e) > 2 || Ti(me) > 3 ? "" : " ";
}
function Gx(e, t) {
  for (
    ;
    --t &&
    et() &&
    !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97));

  );
  return Vi(e, Mo() + (t < 6 && It() == 32 && et() == 32));
}
function pu(e) {
  for (; et(); )
    switch (me) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pu(me);
        break;
      case 40:
        e === 41 && pu(e);
        break;
      case 92:
        et();
        break;
    }
  return Ve;
}
function Xx(e, t) {
  for (; et() && e + me !== 47 + 10; )
    if (e + me === 42 + 42 && It() === 47) break;
  return "/*" + Vi(t, Ve - 1) + "*" + el(e === 47 ? e : et());
}
function Yx(e) {
  for (; !Ti(It()); ) et();
  return Vi(e, Ve);
}
function Jx(e) {
  return zm(Do("", null, null, null, [""], (e = Mm(e)), 0, [0], e));
}
function Do(e, t, n, r, i, o, s, l, u) {
  for (
    var c = 0,
      d = 0,
      f = s,
      h = 0,
      v = 0,
      y = 0,
      m = 1,
      w = 1,
      g = 1,
      p = 0,
      x = "",
      S = i,
      j = o,
      k = r,
      E = x;
    w;

  )
    switch (((y = p), (p = et()))) {
      case 40:
        if (y != 108 && ke(E, f - 1) == 58) {
          fu((E += Q(zo(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += zo(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Kx(y);
        break;
      case 92:
        E += Gx(Mo() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            wo(Zx(Xx(et(), Mo()), t, n), u);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        l[c++] = _t(E) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            g == -1 && (E = Q(E, /\f/g, "")),
              v > 0 &&
                _t(E) - f &&
                wo(
                  v > 32
                    ? Xf(E + ";", r, n, f - 1)
                    : Xf(Q(E, " ", "") + ";", r, n, f - 2),
                  u
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (wo((k = Gf(E, t, n, c, d, i, l, x, (S = []), (j = []), f)), o),
              p === 123)
            )
              if (d === 0) Do(E, t, k, k, S, o, f, l, j);
              else
                switch (h === 99 && ke(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    Do(
                      e,
                      k,
                      k,
                      r && wo(Gf(e, k, k, 0, 0, i, l, x, i, (S = []), f), j),
                      i,
                      j,
                      f,
                      l,
                      r ? S : j
                    );
                    break;
                  default:
                    Do(E, k, k, k, [""], j, 0, l, j);
                }
        }
        (c = d = v = 0), (m = g = 1), (x = E = ""), (f = s);
        break;
      case 58:
        (f = 1 + _t(E)), (v = y);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && Qx() == 125) continue;
        }
        switch (((E += el(p)), p * m)) {
          case 38:
            g = d > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (l[c++] = (_t(E) - 1) * g), (g = 1);
            break;
          case 64:
            It() === 45 && (E += zo(et())),
              (h = It()),
              (d = f = _t((x = E += Yx(Mo())))),
              p++;
            break;
          case 45:
            y === 45 && _t(E) == 2 && (m = 0);
        }
    }
  return o;
}
function Gf(e, t, n, r, i, o, s, l, u, c, d) {
  for (
    var f = i - 1, h = i === 0 ? o : [""], v = $c(h), y = 0, m = 0, w = 0;
    y < r;
    ++y
  )
    for (var g = 0, p = Ri(e, f + 1, (f = Hx((m = s[y])))), x = e; g < v; ++g)
      (x = Am(m > 0 ? h[g] + " " + p : Q(p, /&\f/g, h[g]))) && (u[w++] = x);
  return nl(e, t, n, i === 0 ? zc : l, u, c, d);
}
function Zx(e, t, n) {
  return nl(e, t, n, Tm, el(qx()), Ri(e, 2, -2), 0);
}
function Xf(e, t, n, r) {
  return nl(e, t, n, Dc, Ri(e, 0, r), Ri(e, r + 1, -1), r);
}
function yr(e, t) {
  for (var n = "", r = $c(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function e3(e, t, n, r) {
  switch (e.type) {
    case Fx:
    case Dc:
      return (e.return = e.return || e.value);
    case Tm:
      return "";
    case Lm:
      return (e.return = e.value + "{" + yr(e.children, r) + "}");
    case zc:
      e.value = e.props.join(",");
  }
  return _t((n = yr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function t3(e) {
  var t = $c(e);
  return function (n, r, i, o) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, i, o) || "";
    return s;
  };
}
function n3(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var r3 = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = It()), i === 38 && o === 12 && (n[r] = 1), !Ti(o);

    )
      et();
    return Vi(t, Ve);
  },
  i3 = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Ti(i)) {
        case 0:
          i === 38 && It() === 12 && (n[r] = 1), (t[r] += r3(Ve - 1, n, r));
          break;
        case 2:
          t[r] += zo(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = It() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += el(i);
      }
    while ((i = et()));
    return t;
  },
  o3 = function (t, n) {
    return zm(i3(Mm(t), n));
  },
  Yf = new WeakMap(),
  s3 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Yf.get(r)) &&
        !i
      ) {
        Yf.set(t, !0);
        for (
          var o = [], s = o3(n, o), l = r.props, u = 0, c = 0;
          u < s.length;
          u++
        )
          for (var d = 0; d < l.length; d++, c++)
            t.props[c] = o[u] ? s[u].replace(/&\f/g, l[d]) : l[d] + " " + s[u];
      }
    }
  },
  l3 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Dm(e, t) {
  switch (Bx(e, t)) {
    case 5103:
      return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + ws + e + Ne + e + e;
    case 6828:
    case 4268:
      return q + e + Ne + e + e;
    case 6165:
      return q + e + Ne + "flex-" + e + e;
    case 5187:
      return (
        q + e + Q(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Ne + "flex-$1$2") + e
      );
    case 5443:
      return q + e + Ne + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        q +
        e +
        Ne +
        "flex-line-pack" +
        Q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return q + e + Ne + Q(e, "shrink", "negative") + e;
    case 5292:
      return q + e + Ne + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        q +
        "box-" +
        Q(e, "-grow", "") +
        q +
        e +
        Ne +
        Q(e, "grow", "positive") +
        e
      );
    case 4554:
      return q + Q(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return (
        Q(Q(Q(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Ne + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (_t(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  q +
                  "$2-$3$1" +
                  ws +
                  (ke(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fu(e, "stretch")
              ? Dm(Q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, _t(e) - 3 - (~fu(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + q) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                q +
                (ke(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                q +
                "$2$3$1" +
                Ne +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return q + e + Ne + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + Ne + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + Ne + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + Ne + e + e;
  }
  return e;
}
var a3 = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Dc:
          t.return = Dm(t.value, t.length);
          break;
        case Lm:
          return yr([Qr(t, { value: Q(t.value, "@", "@" + q) })], i);
        case zc:
          if (t.length)
            return Vx(t.props, function (o) {
              switch (Wx(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return yr(
                    [Qr(t, { props: [Q(o, /:(read-\w+)/, ":" + ws + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return yr(
                    [
                      Qr(t, {
                        props: [Q(o, /:(plac\w+)/, ":" + q + "input-$1")],
                      }),
                      Qr(t, { props: [Q(o, /:(plac\w+)/, ":" + ws + "$1")] }),
                      Qr(t, { props: [Q(o, /:(plac\w+)/, Ne + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  u3 = [a3],
  c3 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var w = m.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || u3,
      o = {},
      s,
      l = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var w = m.getAttribute("data-emotion").split(" "), g = 1;
            g < w.length;
            g++
          )
            o[w[g]] = !0;
          l.push(m);
        }
      );
    var u,
      c = [s3, l3];
    {
      var d,
        f = [
          e3,
          n3(function (m) {
            d.insert(m);
          }),
        ],
        h = t3(c.concat(i, f)),
        v = function (w) {
          return yr(Jx(w), h);
        };
      u = function (w, g, p, x) {
        (d = p),
          v(w ? w + "{" + g.styles + "}" : g.styles),
          x && (y.inserted[g.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new $x({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: u,
    };
    return y.sheet.hydrate(l), y;
  },
  d3 = !0;
function f3(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var $m = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || d3 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  p3 = function (t, n, r) {
    $m(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function h3(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var m3 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  g3 = /[A-Z]|^ms/g,
  y3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Fm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Jf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Yl = Rm(function (e) {
    return Fm(e) ? e : e.replace(g3, "-$&").toLowerCase();
  }),
  Zf = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(y3, function (r, i, o) {
            return (Ot = { name: i, styles: o, next: Ot }), i;
          });
    }
    return m3[t] !== 1 && !Fm(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Li(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ot = { name: n.name, styles: n.styles, next: Ot }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ot = { name: r.name, styles: r.styles, next: Ot }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return v3(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = Ot,
          s = n(e);
        return (Ot = o), Li(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function v3(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += Li(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += o + "{" + t[s] + "}")
          : Jf(s) && (r += Yl(o) + ":" + Zf(o, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var l = 0; l < s.length; l++)
          Jf(s[l]) && (r += Yl(o) + ":" + Zf(o, s[l]) + ";");
      else {
        var u = Li(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            r += Yl(o) + ":" + u + ";";
            break;
          }
          default:
            r += o + "{" + u + "}";
        }
      }
    }
  return r;
}
var ep = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ot,
  x3 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    Ot = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((i = !1), (o += Li(r, n, s)))
      : (o += s[0]);
    for (var l = 1; l < t.length; l++) (o += Li(r, n, t[l])), i && (o += s[l]);
    ep.lastIndex = 0;
    for (var u = "", c; (c = ep.exec(o)) !== null; ) u += "-" + c[1];
    var d = h3(o) + u;
    return { name: d, styles: o, next: Ot };
  },
  w3 = function (t) {
    return t();
  },
  S3 = ha["useInsertionEffect"] ? ha["useInsertionEffect"] : !1,
  b3 = S3 || w3,
  Hm = b.createContext(typeof HTMLElement < "u" ? c3({ key: "css" }) : null);
Hm.Provider;
var j3 = function (t) {
    return b.forwardRef(function (n, r) {
      var i = b.useContext(Hm);
      return t(n, i, r);
    });
  },
  Um = b.createContext({}),
  k3 = Mx,
  C3 = function (t) {
    return t !== "theme";
  },
  tp = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? k3 : C3;
  },
  np = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  E3 = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      $m(n, r, i),
      b3(function () {
        return p3(n, r, i);
      }),
      null
    );
  },
  _3 = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var l = np(t, n, r),
      u = l || tp(i),
      c = !u("as");
    return function () {
      var d = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push("label:" + o + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d);
      else {
        f.push(d[0][0]);
        for (var h = d.length, v = 1; v < h; v++) f.push(d[v], d[0][v]);
      }
      var y = j3(function (m, w, g) {
        var p = (c && m.as) || i,
          x = "",
          S = [],
          j = m;
        if (m.theme == null) {
          j = {};
          for (var k in m) j[k] = m[k];
          j.theme = b.useContext(Um);
        }
        typeof m.className == "string"
          ? (x = f3(w.registered, S, m.className))
          : m.className != null && (x = m.className + " ");
        var E = x3(f.concat(S), w.registered, j);
        (x += w.key + "-" + E.name), s !== void 0 && (x += " " + s);
        var C = c && l === void 0 ? tp(p) : u,
          P = {};
        for (var O in m) (c && O === "as") || (C(O) && (P[O] = m[O]));
        return (
          (P.className = x),
          (P.ref = g),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(E3, {
              cache: w,
              serialized: E,
              isStringTag: typeof p == "string",
            }),
            b.createElement(p, P)
          )
        );
      });
      return (
        (y.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = i),
        (y.__emotion_styles = f),
        (y.__emotion_forwardProp = l),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (y.withComponent = function (m, w) {
          return e(m, U({}, n, w, { shouldForwardProp: np(y, w, !0) })).apply(
            void 0,
            f
          );
        }),
        y
      );
    };
  };
const O3 = _3;
var N3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  hu = O3.bind();
N3.forEach(function (e) {
  hu[e] = hu(e);
});
const P3 = hu;
/**
 * @mui/styled-engine v5.12.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function R3(e, t) {
  return P3(e, t);
}
const T3 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  L3 = ["values", "unit", "step"],
  A3 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => U({}, n, { [r.key]: r.val }), {})
    );
  };
function I3(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    i = Jt(e, L3),
    o = A3(t),
    s = Object.keys(o);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function u(h) {
    return `@media (max-width:${
      (typeof t[h] == "number" ? t[h] : h) - r / 100
    }${n})`;
  }
  function c(h, v) {
    const y = s.indexOf(v);
    return `@media (min-width:${
      typeof t[h] == "number" ? t[h] : h
    }${n}) and (max-width:${
      (y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : v) - r / 100
    }${n})`;
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? c(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function f(h) {
    const v = s.indexOf(h);
    return v === 0
      ? l(s[1])
      : v === s.length - 1
      ? u(s[v])
      : c(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return U(
    {
      keys: s,
      values: o,
      up: l,
      down: u,
      between: c,
      only: d,
      not: f,
      unit: n,
    },
    i
  );
}
const M3 = { borderRadius: 4 },
  z3 = M3;
function ci(e, t) {
  return t ? Bt(e, t, { clone: !1 }) : e;
}
const Fc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  rp = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Fc[e]}px)`,
  };
function Gt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || rp;
    return t.reduce((s, l, u) => ((s[o.up(o.keys[u])] = n(t[u])), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || rp;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(o.values || Fc).indexOf(l) !== -1) {
        const u = o.up(l);
        s[u] = n(t[l], l);
      } else {
        const u = l;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return n(t);
}
function D3(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function $3(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function rl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function Ss(e, t, n, r = n) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = rl(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function K(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const l = s[t],
        u = s.theme,
        c = rl(u, r) || {};
      return Gt(s, l, (f) => {
        let h = Ss(c, i, f);
        return (
          f === h &&
            typeof f == "string" &&
            (h = Ss(c, i, `${t}${f === "default" ? "" : At(f)}`, f)),
          n === !1 ? h : { [n]: h }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function F3(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const H3 = { m: "margin", p: "padding" },
  U3 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ip = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  B3 = F3((e) => {
    if (e.length > 2)
      if (ip[e]) e = ip[e];
      else return [e];
    const [t, n] = e.split(""),
      r = H3[t],
      i = U3[n] || "";
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Hc = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Uc = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Hc, ...Uc];
function qi(e, t, n, r) {
  var i;
  const o = (i = rl(e, t, !1)) != null ? i : n;
  return typeof o == "number"
    ? (s) => (typeof s == "string" ? s : o * s)
    : Array.isArray(o)
    ? (s) => (typeof s == "string" ? s : o[s])
    : typeof o == "function"
    ? o
    : () => {};
}
function Bm(e) {
  return qi(e, "spacing", 8);
}
function Qi(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function W3(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = Qi(t, n)), r), {});
}
function V3(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = B3(n),
    o = W3(i, r),
    s = e[n];
  return Gt(e, s, o);
}
function Wm(e, t) {
  const n = Bm(e.theme);
  return Object.keys(e)
    .map((r) => V3(e, t, r, n))
    .reduce(ci, {});
}
function ce(e) {
  return Wm(e, Hc);
}
ce.propTypes = {};
ce.filterProps = Hc;
function de(e) {
  return Wm(e, Uc);
}
de.propTypes = {};
de.filterProps = Uc;
function q3(e = 8) {
  if (e.mui) return e;
  const t = Bm({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const s = t(o);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function il(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? ci(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function Pt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Q3 = K({ prop: "border", themeKey: "borders", transform: Pt }),
  K3 = K({ prop: "borderTop", themeKey: "borders", transform: Pt }),
  G3 = K({ prop: "borderRight", themeKey: "borders", transform: Pt }),
  X3 = K({ prop: "borderBottom", themeKey: "borders", transform: Pt }),
  Y3 = K({ prop: "borderLeft", themeKey: "borders", transform: Pt }),
  J3 = K({ prop: "borderColor", themeKey: "palette" }),
  Z3 = K({ prop: "borderTopColor", themeKey: "palette" }),
  e4 = K({ prop: "borderRightColor", themeKey: "palette" }),
  t4 = K({ prop: "borderBottomColor", themeKey: "palette" }),
  n4 = K({ prop: "borderLeftColor", themeKey: "palette" }),
  ol = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = qi(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Qi(t, r) });
      return Gt(e, e.borderRadius, n);
    }
    return null;
  };
ol.propTypes = {};
ol.filterProps = ["borderRadius"];
il(Q3, K3, G3, X3, Y3, J3, Z3, e4, t4, n4, ol);
const sl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qi(e.theme, "spacing", 8),
      n = (r) => ({ gap: Qi(t, r) });
    return Gt(e, e.gap, n);
  }
  return null;
};
sl.propTypes = {};
sl.filterProps = ["gap"];
const ll = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qi(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Qi(t, r) });
    return Gt(e, e.columnGap, n);
  }
  return null;
};
ll.propTypes = {};
ll.filterProps = ["columnGap"];
const al = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qi(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Qi(t, r) });
    return Gt(e, e.rowGap, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ["rowGap"];
const r4 = K({ prop: "gridColumn" }),
  i4 = K({ prop: "gridRow" }),
  o4 = K({ prop: "gridAutoFlow" }),
  s4 = K({ prop: "gridAutoColumns" }),
  l4 = K({ prop: "gridAutoRows" }),
  a4 = K({ prop: "gridTemplateColumns" }),
  u4 = K({ prop: "gridTemplateRows" }),
  c4 = K({ prop: "gridTemplateAreas" }),
  d4 = K({ prop: "gridArea" });
il(sl, ll, al, r4, i4, o4, s4, l4, a4, u4, c4, d4);
function vr(e, t) {
  return t === "grey" ? t : e;
}
const f4 = K({ prop: "color", themeKey: "palette", transform: vr }),
  p4 = K({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: vr,
  }),
  h4 = K({ prop: "backgroundColor", themeKey: "palette", transform: vr });
il(f4, p4, h4);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const m4 = K({ prop: "width", transform: Xe }),
  Bc = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i, o;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (i = r.breakpoints) == null ||
            (o = i.values) == null
              ? void 0
              : o[n]) ||
            Fc[n] ||
            Xe(n),
        };
      };
      return Gt(e, e.maxWidth, t);
    }
    return null;
  };
Bc.filterProps = ["maxWidth"];
const g4 = K({ prop: "minWidth", transform: Xe }),
  y4 = K({ prop: "height", transform: Xe }),
  v4 = K({ prop: "maxHeight", transform: Xe }),
  x4 = K({ prop: "minHeight", transform: Xe });
K({ prop: "size", cssProperty: "width", transform: Xe });
K({ prop: "size", cssProperty: "height", transform: Xe });
const w4 = K({ prop: "boxSizing" });
il(m4, Bc, g4, y4, v4, x4, w4);
const S4 = {
    border: { themeKey: "borders", transform: Pt },
    borderTop: { themeKey: "borders", transform: Pt },
    borderRight: { themeKey: "borders", transform: Pt },
    borderBottom: { themeKey: "borders", transform: Pt },
    borderLeft: { themeKey: "borders", transform: Pt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: ol },
    color: { themeKey: "palette", transform: vr },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: vr,
    },
    backgroundColor: { themeKey: "palette", transform: vr },
    p: { style: de },
    pt: { style: de },
    pr: { style: de },
    pb: { style: de },
    pl: { style: de },
    px: { style: de },
    py: { style: de },
    padding: { style: de },
    paddingTop: { style: de },
    paddingRight: { style: de },
    paddingBottom: { style: de },
    paddingLeft: { style: de },
    paddingX: { style: de },
    paddingY: { style: de },
    paddingInline: { style: de },
    paddingInlineStart: { style: de },
    paddingInlineEnd: { style: de },
    paddingBlock: { style: de },
    paddingBlockStart: { style: de },
    paddingBlockEnd: { style: de },
    m: { style: ce },
    mt: { style: ce },
    mr: { style: ce },
    mb: { style: ce },
    ml: { style: ce },
    mx: { style: ce },
    my: { style: ce },
    margin: { style: ce },
    marginTop: { style: ce },
    marginRight: { style: ce },
    marginBottom: { style: ce },
    marginLeft: { style: ce },
    marginX: { style: ce },
    marginY: { style: ce },
    marginInline: { style: ce },
    marginInlineStart: { style: ce },
    marginInlineEnd: { style: ce },
    marginBlock: { style: ce },
    marginBlockStart: { style: ce },
    marginBlockEnd: { style: ce },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: sl },
    rowGap: { style: al },
    columnGap: { style: ll },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Xe },
    maxWidth: { style: Bc },
    minWidth: { transform: Xe },
    height: { transform: Xe },
    maxHeight: { transform: Xe },
    minHeight: { transform: Xe },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Wc = S4;
function b4(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function j4(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function k4() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      l = o[n];
    if (!l) return { [n]: r };
    const { cssProperty: u = n, themeKey: c, transform: d, style: f } = l;
    if (r == null) return null;
    if (c === "typography" && r === "inherit") return { [n]: r };
    const h = rl(i, c) || {};
    return f
      ? f(s)
      : Gt(s, r, (y) => {
          let m = Ss(h, d, y);
          return (
            y === m &&
              typeof y == "string" &&
              (m = Ss(h, d, `${n}${y === "default" ? "" : At(y)}`, y)),
            u === !1 ? m : { [u]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const s = (r = o.unstable_sxConfig) != null ? r : Wc;
    function l(u) {
      let c = u;
      if (typeof u == "function") c = u(o);
      else if (typeof u != "object") return u;
      if (!c) return null;
      const d = D3(o.breakpoints),
        f = Object.keys(d);
      let h = d;
      return (
        Object.keys(c).forEach((v) => {
          const y = j4(c[v], o);
          if (y != null)
            if (typeof y == "object")
              if (s[v]) h = ci(h, e(v, y, o, s));
              else {
                const m = Gt({ theme: o }, y, (w) => ({ [v]: w }));
                b4(m, y) ? (h[v] = t({ sx: y, theme: o })) : (h = ci(h, m));
              }
            else h = ci(h, e(v, y, o, s));
        }),
        $3(f, h)
      );
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Vm = k4();
Vm.filterProps = ["sx"];
const Vc = Vm,
  C4 = ["breakpoints", "palette", "spacing", "shape"];
function qc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    s = Jt(e, C4),
    l = I3(n),
    u = q3(i);
  let c = Bt(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: U({ mode: "light" }, r),
      spacing: u,
      shape: U({}, z3, o),
    },
    s
  );
  return (
    (c = t.reduce((d, f) => Bt(d, f), c)),
    (c.unstable_sxConfig = U({}, Wc, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Vc({ sx: f, theme: this });
    }),
    c
  );
}
function E4(e) {
  return Object.keys(e).length === 0;
}
function _4(e = null) {
  const t = b.useContext(Um);
  return !t || E4(t) ? e : t;
}
const O4 = qc();
function N4(e = O4) {
  return _4(e);
}
const P4 = ["variant"];
function op(e) {
  return e.length === 0;
}
function qm(e) {
  const { variant: t } = e,
    n = Jt(e, P4);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((i) => {
        i === "color"
          ? (r += op(r) ? e[i] : At(e[i]))
          : (r += `${op(r) ? i : At(i)}${At(e[i].toString())}`);
      }),
    r
  );
}
const R4 = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function T4(e) {
  return Object.keys(e).length === 0;
}
function L4(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const A4 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  I4 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((i) => {
        const o = qm(i.props);
        r[o] = i.style;
      }),
      r
    );
  },
  M4 = (e, t, n, r) => {
    var i, o;
    const { ownerState: s = {} } = e,
      l = [],
      u =
        n == null || (i = n.components) == null || (o = i[r]) == null
          ? void 0
          : o.variants;
    return (
      u &&
        u.forEach((c) => {
          let d = !0;
          Object.keys(c.props).forEach((f) => {
            s[f] !== c.props[f] && e[f] !== c.props[f] && (d = !1);
          }),
            d && l.push(t[qm(c.props)]);
        }),
      l
    );
  };
function $o(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const z4 = qc();
function Kr({ defaultTheme: e, theme: t, themeId: n }) {
  return T4(t) ? e : t[n] || t;
}
function D4(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = z4,
      rootShouldForwardProp: r = $o,
      slotShouldForwardProp: i = $o,
    } = e,
    o = (s) =>
      Vc(U({}, s, { theme: Kr(U({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (o.__mui_systemSx = !0),
    (s, l = {}) => {
      T3(s, (S) => S.filter((j) => !(j != null && j.__mui_systemSx)));
      const {
          name: u,
          slot: c,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: h,
        } = l,
        v = Jt(l, R4),
        y = d !== void 0 ? d : (c && c !== "Root") || !1,
        m = f || !1;
      let w,
        g = $o;
      c === "Root" ? (g = r) : c ? (g = i) : L4(s) && (g = void 0);
      const p = R3(s, U({ shouldForwardProp: g, label: w }, v)),
        x = (S, ...j) => {
          const k = j
            ? j.map((O) =>
                typeof O == "function" && O.__emotion_real !== O
                  ? (A) =>
                      O(
                        U({}, A, {
                          theme: Kr(U({}, A, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : O
              )
            : [];
          let E = S;
          u &&
            h &&
            k.push((O) => {
              const A = Kr(U({}, O, { defaultTheme: n, themeId: t })),
                M = A4(u, A);
              if (M) {
                const I = {};
                return (
                  Object.entries(M).forEach(([st, ue]) => {
                    I[st] =
                      typeof ue == "function" ? ue(U({}, O, { theme: A })) : ue;
                  }),
                  h(O, I)
                );
              }
              return null;
            }),
            u &&
              !y &&
              k.push((O) => {
                const A = Kr(U({}, O, { defaultTheme: n, themeId: t }));
                return M4(O, I4(u, A), A, u);
              }),
            m || k.push(o);
          const C = k.length - j.length;
          if (Array.isArray(S) && C > 0) {
            const O = new Array(C).fill("");
            (E = [...S, ...O]), (E.raw = [...S.raw, ...O]);
          } else
            typeof S == "function" &&
              S.__emotion_real !== S &&
              (E = (O) =>
                S(
                  U({}, O, {
                    theme: Kr(U({}, O, { defaultTheme: n, themeId: t })),
                  })
                ));
          const P = p(E, ...k);
          return s.muiName && (P.muiName = s.muiName), P;
        };
      return p.withConfig && (x.withConfig = p.withConfig), x;
    }
  );
}
function $4(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : _m(t.components[n].defaultProps, r);
}
function F4({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = N4(n);
  return r && (i = i[r] || i), $4({ theme: i, name: t, props: e });
}
function Qm(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function H4(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Nr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Nr(H4(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(_r(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        i
      ) === -1)
    )
      throw new Error(_r(10, i));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
function Qc(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function U4(e) {
  e = Nr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (c, d = (c + n / 30) % 12) =>
      i - o * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const u = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), u.push(t[3])), Qc({ type: l, values: u })
  );
}
function sp(e) {
  e = Nr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nr(U4(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function B4(e, t) {
  const n = sp(e),
    r = sp(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function W4(e, t) {
  if (((e = Nr(e)), (t = Qm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Qc(e);
}
function V4(e, t) {
  if (((e = Nr(e)), (t = Qm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Qc(e);
}
function q4(e, t) {
  return U(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const Q4 = { black: "#000", white: "#fff" },
  Ai = Q4,
  K4 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  G4 = K4,
  X4 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Qn = X4,
  Y4 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Kn = Y4,
  J4 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Gr = J4,
  Z4 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Gn = Z4,
  ew = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Xn = ew,
  tw = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Yn = tw,
  nw = ["mode", "contrastThreshold", "tonalOffset"],
  lp = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ai.white, default: Ai.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Jl = {
    text: {
      primary: Ai.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ai.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function ap(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = V4(e.main, i))
      : t === "dark" && (e.dark = W4(e.main, o)));
}
function rw(e = "light") {
  return e === "dark"
    ? { main: Gn[200], light: Gn[50], dark: Gn[400] }
    : { main: Gn[700], light: Gn[400], dark: Gn[800] };
}
function iw(e = "light") {
  return e === "dark"
    ? { main: Qn[200], light: Qn[50], dark: Qn[400] }
    : { main: Qn[500], light: Qn[300], dark: Qn[700] };
}
function ow(e = "light") {
  return e === "dark"
    ? { main: Kn[500], light: Kn[300], dark: Kn[700] }
    : { main: Kn[700], light: Kn[400], dark: Kn[800] };
}
function sw(e = "light") {
  return e === "dark"
    ? { main: Xn[400], light: Xn[300], dark: Xn[700] }
    : { main: Xn[700], light: Xn[500], dark: Xn[900] };
}
function lw(e = "light") {
  return e === "dark"
    ? { main: Yn[400], light: Yn[300], dark: Yn[700] }
    : { main: Yn[800], light: Yn[500], dark: Yn[900] };
}
function aw(e = "light") {
  return e === "dark"
    ? { main: Gr[400], light: Gr[300], dark: Gr[700] }
    : { main: "#ed6c02", light: Gr[500], dark: Gr[900] };
}
function uw(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = Jt(e, nw),
    o = e.primary || rw(t),
    s = e.secondary || iw(t),
    l = e.error || ow(t),
    u = e.info || sw(t),
    c = e.success || lw(t),
    d = e.warning || aw(t);
  function f(m) {
    return B4(m, Jl.text.primary) >= n ? Jl.text.primary : lp.text.primary;
  }
  const h = ({
      color: m,
      name: w,
      mainShade: g = 500,
      lightShade: p = 300,
      darkShade: x = 700,
    }) => {
      if (
        ((m = U({}, m)),
        !m.main && m[g] && (m.main = m[g]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(_r(11, w ? ` (${w})` : "", g));
      if (typeof m.main != "string")
        throw new Error(_r(12, w ? ` (${w})` : "", JSON.stringify(m.main)));
      return (
        ap(m, "light", p, r),
        ap(m, "dark", x, r),
        m.contrastText || (m.contrastText = f(m.main)),
        m
      );
    },
    v = { dark: Jl, light: lp };
  return Bt(
    U(
      {
        common: U({}, Ai),
        mode: t,
        primary: h({ color: o, name: "primary" }),
        secondary: h({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: h({ color: l, name: "error" }),
        warning: h({ color: d, name: "warning" }),
        info: h({ color: u, name: "info" }),
        success: h({ color: c, name: "success" }),
        grey: G4,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: h,
        tonalOffset: r,
      },
      v[t]
    ),
    i
  );
}
const cw = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function dw(e) {
  return Math.round(e * 1e5) / 1e5;
}
const up = { textTransform: "uppercase" },
  cp = '"Roboto", "Helvetica", "Arial", sans-serif';
function fw(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = cp,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: u = 700,
      htmlFontSize: c = 16,
      allVariants: d,
      pxToRem: f,
    } = n,
    h = Jt(n, cw),
    v = i / 14,
    y = f || ((g) => `${(g / c) * v}rem`),
    m = (g, p, x, S, j) =>
      U(
        { fontFamily: r, fontWeight: g, fontSize: y(p), lineHeight: x },
        r === cp ? { letterSpacing: `${dw(S / p)}em` } : {},
        j,
        d
      ),
    w = {
      h1: m(o, 96, 1.167, -1.5),
      h2: m(o, 60, 1.2, -0.5),
      h3: m(s, 48, 1.167, 0),
      h4: m(s, 34, 1.235, 0.25),
      h5: m(s, 24, 1.334, 0),
      h6: m(l, 20, 1.6, 0.15),
      subtitle1: m(s, 16, 1.75, 0.15),
      subtitle2: m(l, 14, 1.57, 0.1),
      body1: m(s, 16, 1.5, 0.15),
      body2: m(s, 14, 1.43, 0.15),
      button: m(l, 14, 1.75, 0.4, up),
      caption: m(s, 12, 1.66, 0.4),
      overline: m(s, 12, 2.66, 1, up),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Bt(
    U(
      {
        htmlFontSize: c,
        pxToRem: y,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: u,
      },
      w
    ),
    h,
    { clone: !1 }
  );
}
const pw = 0.2,
  hw = 0.14,
  mw = 0.12;
function ne(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pw})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hw})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mw})`,
  ].join(",");
}
const gw = [
    "none",
    ne(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ne(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ne(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ne(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ne(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ne(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ne(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ne(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ne(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ne(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ne(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ne(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ne(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ne(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ne(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ne(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ne(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ne(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ne(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ne(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ne(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ne(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ne(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ne(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  yw = gw,
  vw = ["duration", "easing", "delay"],
  xw = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  ww = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function dp(e) {
  return `${Math.round(e)}ms`;
}
function Sw(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function bw(e) {
  const t = U({}, xw, e.easing),
    n = U({}, ww, e.duration);
  return U(
    {
      getAutoHeightDuration: Sw,
      create: (i = ["all"], o = {}) => {
        const {
          duration: s = n.standard,
          easing: l = t.easeInOut,
          delay: u = 0,
        } = o;
        return (
          Jt(o, vw),
          (Array.isArray(i) ? i : [i])
            .map(
              (c) =>
                `${c} ${typeof s == "string" ? s : dp(s)} ${l} ${
                  typeof u == "string" ? u : dp(u)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const jw = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  kw = jw,
  Cw = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Ew(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    s = Jt(e, Cw);
  if (e.vars) throw new Error(_r(18));
  const l = uw(r),
    u = qc(e);
  let c = Bt(u, {
    mixins: q4(u.breakpoints, n),
    palette: l,
    shadows: yw.slice(),
    typography: fw(l, o),
    transitions: bw(i),
    zIndex: U({}, kw),
  });
  return (
    (c = Bt(c, s)),
    (c = t.reduce((d, f) => Bt(d, f), c)),
    (c.unstable_sxConfig = U({}, Wc, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Vc({ sx: f, theme: this });
    }),
    c
  );
}
const _w = Ew(),
  Km = _w,
  Gm = "$$material";
function Ow({ props: e, name: t }) {
  return F4({ props: e, name: t, defaultTheme: Km, themeId: Gm });
}
const Nw = (e) => $o(e) && e !== "classes",
  Pw = D4({ themeId: Gm, defaultTheme: Km, rootShouldForwardProp: Nw }),
  Rw = Pw;
function Tw(e) {
  return Nm("MuiSvgIcon", e);
}
Lx("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const Lw = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  Aw = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      i = {
        root: ["root", t !== "inherit" && `color${At(t)}`, `fontSize${At(n)}`],
      };
    return Nx(i, Tw, r);
  },
  Iw = Rw("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${At(n.color)}`],
        t[`fontSize${At(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, i, o, s, l, u, c, d, f, h, v, y, m, w, g, p;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (i = e.transitions) == null || (o = i.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 20)) || "1.25rem",
        medium:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 24)) || "1.5rem",
        large:
          ((d = e.typography) == null || (f = d.pxToRem) == null
            ? void 0
            : f.call(d, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (h =
          (v = (e.vars || e).palette) == null || (y = v[t.color]) == null
            ? void 0
            : y.main) != null
          ? h
          : {
              action:
                (m = (e.vars || e).palette) == null || (w = m.action) == null
                  ? void 0
                  : w.active,
              disabled:
                (g = (e.vars || e).palette) == null || (p = g.action) == null
                  ? void 0
                  : p.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Xm = b.forwardRef(function (t, n) {
    const r = Ow({ props: t, name: "MuiSvgIcon" }),
      {
        children: i,
        className: o,
        color: s = "inherit",
        component: l = "svg",
        fontSize: u = "medium",
        htmlColor: c,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: h = "0 0 24 24",
      } = r,
      v = Jt(r, Lw),
      y = U({}, r, {
        color: s,
        component: l,
        fontSize: u,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: h,
      }),
      m = {};
    d || (m.viewBox = h);
    const w = Aw(y);
    return a.jsxs(
      Iw,
      U(
        {
          as: l,
          className: Ax(w.root, o),
          focusable: "false",
          color: c,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        m,
        v,
        {
          ownerState: y,
          children: [i, f ? a.jsx("title", { children: f }) : null],
        }
      )
    );
  });
Xm.muiName = "SvgIcon";
const fp = Xm;
function Mw(e, t) {
  function n(r, i) {
    return a.jsx(
      fp,
      U({ "data-testid": `${t}Icon`, ref: i }, r, { children: e })
    );
  }
  return (n.muiName = fp.muiName), b.memo(b.forwardRef(n));
}
const zw = {
    configure: (e) => {
      Om.configure(e);
    },
  },
  Dw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: At,
        createChainedFunction: ux,
        createSvgIcon: Mw,
        debounce: cx,
        deprecatedPropType: dx,
        isMuiElement: fx,
        ownerDocument: km,
        ownerWindow: px,
        requirePropFactory: hx,
        setRef: Cm,
        unstable_ClassNameGenerator: zw,
        unstable_useEnhancedEffect: Em,
        unstable_useId: yx,
        unsupportedProp: vx,
        useControlled: xx,
        useEventCallback: wx,
        useForkRef: Sx,
        useIsFocusVisible: Ox,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $w = Gp(Dw);
var pp;
function ot() {
  return (
    pp ||
      ((pp = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = $w;
      })(Gl)),
    Gl
  );
}
var Fw = it;
Object.defineProperty(Mc, "__esModule", { value: !0 });
var Kc = (Mc.default = void 0),
  Hw = Fw(ot()),
  Uw = a,
  Bw = (0, Hw.default)(
    (0, Uw.jsx)("path", {
      d: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    }),
    "LocalShipping"
  );
Kc = Mc.default = Bw;
var Gc = {},
  Ww = it;
Object.defineProperty(Gc, "__esModule", { value: !0 });
var Xc = (Gc.default = void 0),
  Vw = Ww(ot()),
  qw = a,
  Qw = (0, Vw.default)(
    (0, qw.jsx)("path", {
      d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    }),
    "Security"
  );
Xc = Gc.default = Qw;
var Yc = {},
  Kw = it;
Object.defineProperty(Yc, "__esModule", { value: !0 });
var Ym = (Yc.default = void 0),
  Gw = Kw(ot()),
  Xw = a,
  Yw = (0, Gw.default)(
    (0, Xw.jsx)("path", {
      d: "M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z",
    }),
    "CurrencyRupee"
  );
Ym = Yc.default = Yw;
var Jc = {},
  Jw = it;
Object.defineProperty(Jc, "__esModule", { value: !0 });
var Jm = (Jc.default = void 0),
  Zw = Jw(ot()),
  e5 = a,
  t5 = (0, Zw.default)(
    (0, e5.jsx)("path", {
      d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z",
    }),
    "CreditScore"
  );
Jm = Jc.default = t5;
const n5 = () =>
  a.jsxs("div", {
    className:
      "w-[80%]  mx-auto flex flex-wrap gap-4 text-white font-semibold justify-between items-center md:items-stretch pt-12 pb-20 ",
    children: [
      a.jsxs("div", {
        className:
          "basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ",
        children: [
          a.jsx("div", {
            className:
              "bg-green-600 rounded-full w-[50px] h-[50px] flex justify-center items-center",
            children: a.jsx(Kc, {}),
          }),
          a.jsx("p", {
            className: "px-2 py-1",
            children: "Swiftly delivered to your door",
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ",
        children: [
          a.jsx("div", {
            className:
              "bg-cyan-600 rounded-full w-[50px] h-[50px] flex justify-center items-center",
            children: a.jsx(Xc, {}),
          }),
          a.jsx("p", {
            className: "px-2 py-1",
            children: "From our hands to your doorstep, without any contact",
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ",
        children: [
          a.jsx("div", {
            className:
              "bg-yellow-600 rounded-full w-[50px] h-[50px] flex justify-center items-center",
            children: a.jsx(Ym, {}),
          }),
          a.jsx("p", {
            className: "px-2 py-1",
            children:
              "Your satisfaction guaranteed or your money back - no questions asked!",
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "basis-[100%] py-2  mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ",
        children: [
          a.jsx("div", {
            className:
              "bg-indigo-600 rounded-full w-[50px] h-[50px] flex justify-center items-center",
            children: a.jsx(Jm, {}),
          }),
          a.jsx("p", {
            className: "px-2 py-1",
            children:
              "Shop with confidence, thanks to our ultra-secure payment system.",
          }),
        ],
      }),
    ],
  });
var Zm = {},
  e1 = {},
  ul = {},
  t1 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
      animating: !1,
      autoplaying: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      dragging: !1,
      edgeDragged: !1,
      initialized: !1,
      lazyLoadedList: [],
      listHeight: null,
      listWidth: null,
      scrolling: !1,
      slideCount: null,
      slideHeight: null,
      slideWidth: null,
      swipeLeft: null,
      swiped: !1,
      swiping: !1,
      touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0,
    },
    n = t;
  e.default = n;
})(t1);
var r5 = "Expected a function",
  hp = 0 / 0,
  i5 = "[object Symbol]",
  o5 = /^\s+|\s+$/g,
  s5 = /^[-+]0x[0-9a-f]+$/i,
  l5 = /^0b[01]+$/i,
  a5 = /^0o[0-7]+$/i,
  u5 = parseInt,
  c5 = typeof to == "object" && to && to.Object === Object && to,
  d5 = typeof self == "object" && self && self.Object === Object && self,
  f5 = c5 || d5 || Function("return this")(),
  p5 = Object.prototype,
  h5 = p5.toString,
  m5 = Math.max,
  g5 = Math.min,
  Zl = function () {
    return f5.Date.now();
  };
function y5(e, t, n) {
  var r,
    i,
    o,
    s,
    l,
    u,
    c = 0,
    d = !1,
    f = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(r5);
  (t = mp(t) || 0),
    mu(n) &&
      ((d = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? m5(mp(n.maxWait) || 0, t) : o),
      (h = "trailing" in n ? !!n.trailing : h));
  function v(k) {
    var E = r,
      C = i;
    return (r = i = void 0), (c = k), (s = e.apply(C, E)), s;
  }
  function y(k) {
    return (c = k), (l = setTimeout(g, t)), d ? v(k) : s;
  }
  function m(k) {
    var E = k - u,
      C = k - c,
      P = t - E;
    return f ? g5(P, o - C) : P;
  }
  function w(k) {
    var E = k - u,
      C = k - c;
    return u === void 0 || E >= t || E < 0 || (f && C >= o);
  }
  function g() {
    var k = Zl();
    if (w(k)) return p(k);
    l = setTimeout(g, m(k));
  }
  function p(k) {
    return (l = void 0), h && r ? v(k) : ((r = i = void 0), s);
  }
  function x() {
    l !== void 0 && clearTimeout(l), (c = 0), (r = u = i = l = void 0);
  }
  function S() {
    return l === void 0 ? s : p(Zl());
  }
  function j() {
    var k = Zl(),
      E = w(k);
    if (((r = arguments), (i = this), (u = k), E)) {
      if (l === void 0) return y(u);
      if (f) return (l = setTimeout(g, t)), v(u);
    }
    return l === void 0 && (l = setTimeout(g, t)), s;
  }
  return (j.cancel = x), (j.flush = S), j;
}
function mu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function v5(e) {
  return !!e && typeof e == "object";
}
function x5(e) {
  return typeof e == "symbol" || (v5(e) && h5.call(e) == i5);
}
function mp(e) {
  if (typeof e == "number") return e;
  if (x5(e)) return hp;
  if (mu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mu(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(o5, "");
  var n = l5.test(e);
  return n || a5.test(e) ? u5(e.slice(2), n ? 2 : 8) : s5.test(e) ? hp : +e;
}
var w5 = y5,
  n1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (s === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var u in o) t.call(o, u) && o[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(n1);
var Ki = n1.exports,
  T = {};
Object.defineProperty(T, "__esModule", { value: !0 });
T.checkSpecKeys =
  T.checkNavigable =
  T.changeSlide =
  T.canUseDOM =
  T.canGoNext =
    void 0;
T.clamp = r1;
T.swipeStart =
  T.swipeMove =
  T.swipeEnd =
  T.slidesOnRight =
  T.slidesOnLeft =
  T.slideHandler =
  T.siblingDirection =
  T.safePreventDefault =
  T.lazyStartIndex =
  T.lazySlidesOnRight =
  T.lazySlidesOnLeft =
  T.lazyEndIndex =
  T.keyHandler =
  T.initializedState =
  T.getWidth =
  T.getTrackLeft =
  T.getTrackCSS =
  T.getTrackAnimateCSS =
  T.getTotalSlides =
  T.getSwipeDirection =
  T.getSlideCount =
  T.getRequiredLazySlides =
  T.getPreClones =
  T.getPostClones =
  T.getOnDemandLazySlides =
  T.getNavigableIndexes =
  T.getHeight =
  T.extractObject =
    void 0;
var S5 = b5(b);
function b5(e) {
  return e && e.__esModule ? e : { default: e };
}
function gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gp(Object(n), !0).forEach(function (r) {
          j5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function j5(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function r1(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var An = function (t) {
  var n = ["onTouchStart", "onTouchMove", "onWheel"];
  n.includes(t._reactName) || t.preventDefault();
};
T.safePreventDefault = An;
var Zc = function (t) {
  for (var n = [], r = ed(t), i = td(t), o = r; o < i; o++)
    t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
  return n;
};
T.getOnDemandLazySlides = Zc;
var k5 = function (t) {
  for (var n = [], r = ed(t), i = td(t), o = r; o < i; o++) n.push(o);
  return n;
};
T.getRequiredLazySlides = k5;
var ed = function (t) {
  return t.currentSlide - i1(t);
};
T.lazyStartIndex = ed;
var td = function (t) {
  return t.currentSlide + o1(t);
};
T.lazyEndIndex = td;
var i1 = function (t) {
  return t.centerMode
    ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
    : 0;
};
T.lazySlidesOnLeft = i1;
var o1 = function (t) {
  return t.centerMode
    ? Math.floor((t.slidesToShow - 1) / 2) +
        1 +
        (parseInt(t.centerPadding) > 0 ? 1 : 0)
    : t.slidesToShow;
};
T.lazySlidesOnRight = o1;
var bs = function (t) {
  return (t && t.offsetWidth) || 0;
};
T.getWidth = bs;
var nd = function (t) {
  return (t && t.offsetHeight) || 0;
};
T.getHeight = nd;
var rd = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    r,
    i,
    o,
    s;
  return (
    (r = t.startX - t.curX),
    (i = t.startY - t.curY),
    (o = Math.atan2(i, r)),
    (s = Math.round((o * 180) / Math.PI)),
    s < 0 && (s = 360 - Math.abs(s)),
    (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
      ? "left"
      : s >= 135 && s <= 225
      ? "right"
      : n === !0
      ? s >= 35 && s <= 135
        ? "up"
        : "down"
      : "vertical"
  );
};
T.getSwipeDirection = rd;
var id = function (t) {
  var n = !0;
  return (
    t.infinite ||
      (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
        t.slideCount <= t.slidesToShow ||
        t.currentSlide >= t.slideCount - t.slidesToShow) &&
        (n = !1)),
    n
  );
};
T.canGoNext = id;
var C5 = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
T.extractObject = C5;
var E5 = function (t) {
  var n = S5.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(bs(r)),
    o = t.trackRef && t.trackRef.node,
    s = Math.ceil(bs(o)),
    l;
  if (t.vertical) l = i;
  else {
    var u = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (u *= i / 100),
      (l = Math.ceil((i - u) / t.slidesToShow));
  }
  var c = r && nd(r.querySelector('[data-index="0"]')),
    d = c * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var h = t.lazyLoadedList || [],
    v = Zc(re(re({}, t), {}, { currentSlide: f, lazyLoadedList: h }));
  h = h.concat(v);
  var y = {
    slideCount: n,
    slideWidth: l,
    listWidth: i,
    trackWidth: s,
    currentSlide: f,
    slideHeight: c,
    listHeight: d,
    lazyLoadedList: h,
  };
  return t.autoplaying === null && t.autoplay && (y.autoplaying = "playing"), y;
};
T.initializedState = E5;
var _5 = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    s = t.index,
    l = t.slideCount,
    u = t.lazyLoad,
    c = t.currentSlide,
    d = t.centerMode,
    f = t.slidesToScroll,
    h = t.slidesToShow,
    v = t.useCSS,
    y = t.lazyLoadedList;
  if (n && r) return {};
  var m = s,
    w,
    g,
    p,
    x = {},
    S = {},
    j = o ? s : r1(s, 0, l - 1);
  if (i) {
    if (!o && (s < 0 || s >= l)) return {};
    s < 0 ? (m = s + l) : s >= l && (m = s - l),
      u && y.indexOf(m) < 0 && (y = y.concat(m)),
      (x = {
        animating: !0,
        currentSlide: m,
        lazyLoadedList: y,
        targetSlide: m,
      }),
      (S = { animating: !1, targetSlide: m });
  } else
    (w = m),
      m < 0
        ? ((w = m + l), o ? l % f !== 0 && (w = l - (l % f)) : (w = 0))
        : !id(t) && m > c
        ? (m = w = c)
        : d && m >= l
        ? ((m = o ? l : l - 1), (w = o ? 0 : l - 1))
        : m >= l && ((w = m - l), o ? l % f !== 0 && (w = 0) : (w = l - h)),
      !o && m + h >= l && (w = l - h),
      (g = Mi(re(re({}, t), {}, { slideIndex: m }))),
      (p = Mi(re(re({}, t), {}, { slideIndex: w }))),
      o || (g === p && (m = w), (g = p)),
      u && (y = y.concat(Zc(re(re({}, t), {}, { currentSlide: m })))),
      v
        ? ((x = {
            animating: !0,
            currentSlide: w,
            trackStyle: od(re(re({}, t), {}, { left: g })),
            lazyLoadedList: y,
            targetSlide: j,
          }),
          (S = {
            animating: !1,
            currentSlide: w,
            trackStyle: Ii(re(re({}, t), {}, { left: p })),
            swipeLeft: null,
            targetSlide: j,
          }))
        : (x = {
            currentSlide: w,
            trackStyle: Ii(re(re({}, t), {}, { left: p })),
            lazyLoadedList: y,
            targetSlide: j,
          });
  return { state: x, nextState: S };
};
T.slideHandler = _5;
var O5 = function (t, n) {
  var r,
    i,
    o,
    s,
    l,
    u = t.slidesToScroll,
    c = t.slidesToShow,
    d = t.slideCount,
    f = t.currentSlide,
    h = t.targetSlide,
    v = t.lazyLoad,
    y = t.infinite;
  if (((s = d % u !== 0), (r = s ? 0 : (d - f) % u), n.message === "previous"))
    (o = r === 0 ? u : c - r),
      (l = f - o),
      v && !y && ((i = f - o), (l = i === -1 ? d - 1 : i)),
      y || (l = h - u);
  else if (n.message === "next")
    (o = r === 0 ? u : r),
      (l = f + o),
      v && !y && (l = ((f + u) % d) + r),
      y || (l = h + u);
  else if (n.message === "dots") l = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((l = n.index), y)) {
      var m = u1(re(re({}, t), {}, { targetSlide: l }));
      l > n.currentSlide && m === "left"
        ? (l = l - d)
        : l < n.currentSlide && m === "right" && (l = l + d);
    }
  } else n.message === "index" && (l = Number(n.index));
  return l;
};
T.changeSlide = O5;
var N5 = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
T.keyHandler = N5;
var P5 = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && An(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
T.swipeStart = P5;
var R5 = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    s = n.swipeToSlide,
    l = n.verticalSwiping,
    u = n.rtl,
    c = n.currentSlide,
    d = n.edgeFriction,
    f = n.edgeDragged,
    h = n.onEdge,
    v = n.swiped,
    y = n.swiping,
    m = n.slideCount,
    w = n.slidesToScroll,
    g = n.infinite,
    p = n.touchObject,
    x = n.swipeEvent,
    S = n.listHeight,
    j = n.listWidth;
  if (!r) {
    if (i) return An(t);
    o && s && l && An(t);
    var k,
      E = {},
      C = Mi(n);
    (p.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (p.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (p.swipeLength = Math.round(Math.sqrt(Math.pow(p.curX - p.startX, 2))));
    var P = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
    if (!l && !y && P > 10) return { scrolling: !0 };
    l && (p.swipeLength = P);
    var O = (u ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
    l && (O = p.curY > p.startY ? 1 : -1);
    var A = Math.ceil(m / w),
      M = rd(n.touchObject, l),
      I = p.swipeLength;
    return (
      g ||
        (((c === 0 && (M === "right" || M === "down")) ||
          (c + 1 >= A && (M === "left" || M === "up")) ||
          (!id(n) && (M === "left" || M === "up"))) &&
          ((I = p.swipeLength * d),
          f === !1 && h && (h(M), (E.edgeDragged = !0)))),
      !v && x && (x(M), (E.swiped = !0)),
      o ? (k = C + I * (S / j) * O) : u ? (k = C - I * O) : (k = C + I * O),
      l && (k = C + I * O),
      (E = re(
        re({}, E),
        {},
        {
          touchObject: p,
          swipeLeft: k,
          trackStyle: Ii(re(re({}, n), {}, { left: k })),
        }
      )),
      Math.abs(p.curX - p.startX) < Math.abs(p.curY - p.startY) * 0.8 ||
        (p.swipeLength > 10 && ((E.swiping = !0), An(t))),
      E
    );
  }
};
T.swipeMove = R5;
var T5 = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    s = n.listWidth,
    l = n.touchThreshold,
    u = n.verticalSwiping,
    c = n.listHeight,
    d = n.swipeToSlide,
    f = n.scrolling,
    h = n.onSwipe,
    v = n.targetSlide,
    y = n.currentSlide,
    m = n.infinite;
  if (!r) return i && An(t), {};
  var w = u ? c / l : s / l,
    g = rd(o, u),
    p = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !o.swipeLength) return p;
  if (o.swipeLength > w) {
    An(t), h && h(g);
    var x,
      S,
      j = m ? y : v;
    switch (g) {
      case "left":
      case "up":
        (S = j + yu(n)), (x = d ? gu(n, S) : S), (p.currentDirection = 0);
        break;
      case "right":
      case "down":
        (S = j - yu(n)), (x = d ? gu(n, S) : S), (p.currentDirection = 1);
        break;
      default:
        x = j;
    }
    p.triggerSlideHandler = x;
  } else {
    var k = Mi(n);
    p.trackStyle = od(re(re({}, n), {}, { left: k }));
  }
  return p;
};
T.swipeEnd = T5;
var s1 = function (t) {
  for (
    var n = t.infinite ? t.slideCount * 2 : t.slideCount,
      r = t.infinite ? t.slidesToShow * -1 : 0,
      i = t.infinite ? t.slidesToShow * -1 : 0,
      o = [];
    r < n;

  )
    o.push(r),
      (r = i + t.slidesToScroll),
      (i += Math.min(t.slidesToScroll, t.slidesToShow));
  return o;
};
T.getNavigableIndexes = s1;
var gu = function (t, n) {
  var r = s1(t),
    i = 0;
  if (n > r[r.length - 1]) n = r[r.length - 1];
  else
    for (var o in r) {
      if (n < r[o]) {
        n = i;
        break;
      }
      i = r[o];
    }
  return n;
};
T.checkNavigable = gu;
var yu = function (t) {
  var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
  if (t.swipeToSlide) {
    var r,
      i = t.listRef,
      o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
    if (
      (Array.from(o).every(function (u) {
        if (t.vertical) {
          if (u.offsetTop + nd(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
        } else if (u.offsetLeft - n + bs(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
        return !0;
      }),
      !r)
    )
      return 0;
    var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
      l = Math.abs(r.dataset.index - s) || 1;
    return l;
  } else return t.slidesToScroll;
};
T.getSlideCount = yu;
var cl = function (t, n) {
  return n.reduce(function (r, i) {
    return r && t.hasOwnProperty(i);
  }, !0)
    ? null
    : console.error("Keys Missing:", t);
};
T.checkSpecKeys = cl;
var Ii = function (t) {
  cl(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var n,
    r,
    i = t.slideCount + 2 * t.slidesToShow;
  t.vertical ? (r = i * t.slideHeight) : (n = a1(t) * t.slideWidth);
  var o = { opacity: 1, transition: "", WebkitTransition: "" };
  if (t.useTransform) {
    var s = t.vertical
        ? "translate3d(0px, " + t.left + "px, 0px)"
        : "translate3d(" + t.left + "px, 0px, 0px)",
      l = t.vertical
        ? "translate3d(0px, " + t.left + "px, 0px)"
        : "translate3d(" + t.left + "px, 0px, 0px)",
      u = t.vertical
        ? "translateY(" + t.left + "px)"
        : "translateX(" + t.left + "px)";
    o = re(re({}, o), {}, { WebkitTransform: s, transform: l, msTransform: u });
  } else t.vertical ? (o.top = t.left) : (o.left = t.left);
  return (
    t.fade && (o = { opacity: 1 }),
    n && (o.width = n),
    r && (o.height = r),
    window &&
      !window.addEventListener &&
      window.attachEvent &&
      (t.vertical
        ? (o.marginTop = t.left + "px")
        : (o.marginLeft = t.left + "px")),
    o
  );
};
T.getTrackCSS = Ii;
var od = function (t) {
  cl(t, [
    "left",
    "variableWidth",
    "slideCount",
    "slidesToShow",
    "slideWidth",
    "speed",
    "cssEase",
  ]);
  var n = Ii(t);
  return (
    t.useTransform
      ? ((n.WebkitTransition =
          "-webkit-transform " + t.speed + "ms " + t.cssEase),
        (n.transition = "transform " + t.speed + "ms " + t.cssEase))
      : t.vertical
      ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
      : (n.transition = "left " + t.speed + "ms " + t.cssEase),
    n
  );
};
T.getTrackAnimateCSS = od;
var Mi = function (t) {
  if (t.unslick) return 0;
  cl(t, [
    "slideIndex",
    "trackRef",
    "infinite",
    "centerMode",
    "slideCount",
    "slidesToShow",
    "slidesToScroll",
    "slideWidth",
    "listWidth",
    "variableWidth",
    "slideHeight",
  ]);
  var n = t.slideIndex,
    r = t.trackRef,
    i = t.infinite,
    o = t.centerMode,
    s = t.slideCount,
    l = t.slidesToShow,
    u = t.slidesToScroll,
    c = t.slideWidth,
    d = t.listWidth,
    f = t.variableWidth,
    h = t.slideHeight,
    v = t.fade,
    y = t.vertical,
    m = 0,
    w,
    g,
    p = 0;
  if (v || t.slideCount === 1) return 0;
  var x = 0;
  if (
    (i
      ? ((x = -di(t)),
        s % u !== 0 && n + u > s && (x = -(n > s ? l - (n - s) : s % u)),
        o && (x += parseInt(l / 2)))
      : (s % u !== 0 && n + u > s && (x = l - (s % u)),
        o && (x = parseInt(l / 2))),
    (m = x * c),
    (p = x * h),
    y ? (w = n * h * -1 + p) : (w = n * c * -1 + m),
    f === !0)
  ) {
    var S,
      j = r && r.node;
    if (
      ((S = n + di(t)),
      (g = j && j.childNodes[S]),
      (w = g ? g.offsetLeft * -1 : 0),
      o === !0)
    ) {
      (S = i ? n + di(t) : n), (g = j && j.children[S]), (w = 0);
      for (var k = 0; k < S; k++)
        w -= j && j.children[k] && j.children[k].offsetWidth;
      (w -= parseInt(t.centerPadding)), (w += g && (d - g.offsetWidth) / 2);
    }
  }
  return w;
};
T.getTrackLeft = Mi;
var di = function (t) {
  return t.unslick || !t.infinite
    ? 0
    : t.variableWidth
    ? t.slideCount
    : t.slidesToShow + (t.centerMode ? 1 : 0);
};
T.getPreClones = di;
var l1 = function (t) {
  return t.unslick || !t.infinite ? 0 : t.slideCount;
};
T.getPostClones = l1;
var a1 = function (t) {
  return t.slideCount === 1 ? 1 : di(t) + t.slideCount + l1(t);
};
T.getTotalSlides = a1;
var u1 = function (t) {
  return t.targetSlide > t.currentSlide
    ? t.targetSlide > t.currentSlide + c1(t)
      ? "left"
      : "right"
    : t.targetSlide < t.currentSlide - d1(t)
    ? "right"
    : "left";
};
T.siblingDirection = u1;
var c1 = function (t) {
  var n = t.slidesToShow,
    r = t.centerMode,
    i = t.rtl,
    o = t.centerPadding;
  if (r) {
    var s = (n - 1) / 2 + 1;
    return parseInt(o) > 0 && (s += 1), i && n % 2 === 0 && (s += 1), s;
  }
  return i ? 0 : n - 1;
};
T.slidesOnRight = c1;
var d1 = function (t) {
  var n = t.slidesToShow,
    r = t.centerMode,
    i = t.rtl,
    o = t.centerPadding;
  if (r) {
    var s = (n - 1) / 2 + 1;
    return parseInt(o) > 0 && (s += 1), !i && n % 2 === 0 && (s += 1), s;
  }
  return i ? n - 1 : 0;
};
T.slidesOnLeft = d1;
var L5 = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
T.canUseDOM = L5;
var dl = {};
function vu(e) {
  return (
    (vu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vu(e)
  );
}
Object.defineProperty(dl, "__esModule", { value: !0 });
dl.Track = void 0;
var rn = f1(b),
  ea = f1(Ki),
  ta = T;
function f1(e) {
  return e && e.__esModule ? e : { default: e };
}
function xu() {
  return (
    (xu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    xu.apply(this, arguments)
  );
}
function A5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function I5(e, t, n) {
  return (
    t && yp(e.prototype, t),
    n && yp(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function M5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wu(e, t);
}
function wu(e, t) {
  return (
    (wu =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    wu(e, t)
  );
}
function z5(e) {
  var t = $5();
  return function () {
    var r = js(e),
      i;
    if (t) {
      var o = js(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return D5(this, i);
  };
}
function D5(e, t) {
  if (t && (vu(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Su(e);
}
function Su(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function $5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function js(e) {
  return (
    (js = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    js(e)
  );
}
function vp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vp(Object(n), !0).forEach(function (r) {
          bu(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bu(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var na = function (t) {
    var n, r, i, o, s;
    t.rtl ? (s = t.slideCount - 1 - t.index) : (s = t.index),
      (i = s < 0 || s >= t.slideCount),
      t.centerMode
        ? ((o = Math.floor(t.slidesToShow / 2)),
          (r = (s - t.currentSlide) % t.slideCount === 0),
          s > t.currentSlide - o - 1 && s <= t.currentSlide + o && (n = !0))
        : (n = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow);
    var l;
    t.targetSlide < 0
      ? (l = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (l = t.targetSlide - t.slideCount)
      : (l = t.targetSlide);
    var u = s === l;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": u,
    };
  },
  F5 = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  ra = function (t, n) {
    return t.key || n;
  },
  H5 = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      s = rn.default.Children.count(t.children),
      l = (0, ta.lazyStartIndex)(t),
      u = (0, ta.lazyEndIndex)(t);
    return (
      rn.default.Children.forEach(t.children, function (c, d) {
        var f,
          h = {
            message: "children",
            index: d,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0)
          ? (f = c)
          : (f = rn.default.createElement("div", null));
        var v = F5(De(De({}, t), {}, { index: d })),
          y = f.props.className || "",
          m = na(De(De({}, t), {}, { index: d }));
        if (
          (r.push(
            rn.default.cloneElement(f, {
              key: "original" + ra(f, d),
              "data-index": d,
              className: (0, ea.default)(m, y),
              tabIndex: "-1",
              "aria-hidden": !m["slick-active"],
              style: De(De({ outline: "none" }, f.props.style || {}), v),
              onClick: function (p) {
                f.props && f.props.onClick && f.props.onClick(p),
                  t.focusOnSelect && t.focusOnSelect(h);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var w = s - d;
          w <= (0, ta.getPreClones)(t) &&
            s !== t.slidesToShow &&
            ((n = -w),
            n >= l && (f = c),
            (m = na(De(De({}, t), {}, { index: n }))),
            i.push(
              rn.default.cloneElement(f, {
                key: "precloned" + ra(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, ea.default)(m, y),
                "aria-hidden": !m["slick-active"],
                style: De(De({}, f.props.style || {}), v),
                onClick: function (p) {
                  f.props && f.props.onClick && f.props.onClick(p),
                    t.focusOnSelect && t.focusOnSelect(h);
                },
              })
            )),
            s !== t.slidesToShow &&
              ((n = s + d),
              n < u && (f = c),
              (m = na(De(De({}, t), {}, { index: n }))),
              o.push(
                rn.default.cloneElement(f, {
                  key: "postcloned" + ra(f, n),
                  "data-index": n,
                  tabIndex: "-1",
                  className: (0, ea.default)(m, y),
                  "aria-hidden": !m["slick-active"],
                  style: De(De({}, f.props.style || {}), v),
                  onClick: function (p) {
                    f.props && f.props.onClick && f.props.onClick(p),
                      t.focusOnSelect && t.focusOnSelect(h);
                  },
                })
              ));
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  },
  U5 = (function (e) {
    M5(n, e);
    var t = z5(n);
    function n() {
      var r;
      A5(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        bu(Su(r), "node", null),
        bu(Su(r), "handleRef", function (l) {
          r.node = l;
        }),
        r
      );
    }
    return (
      I5(n, [
        {
          key: "render",
          value: function () {
            var i = H5(this.props),
              o = this.props,
              s = o.onMouseEnter,
              l = o.onMouseOver,
              u = o.onMouseLeave,
              c = { onMouseEnter: s, onMouseOver: l, onMouseLeave: u };
            return rn.default.createElement(
              "div",
              xu(
                {
                  ref: this.handleRef,
                  className: "slick-track",
                  style: this.props.trackStyle,
                },
                c
              ),
              i
            );
          },
        },
      ]),
      n
    );
  })(rn.default.PureComponent);
dl.Track = U5;
var fl = {};
function ju(e) {
  return (
    (ju =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ju(e)
  );
}
Object.defineProperty(fl, "__esModule", { value: !0 });
fl.Dots = void 0;
var So = p1(b),
  B5 = p1(Ki),
  xp = T;
function p1(e) {
  return e && e.__esModule ? e : { default: e };
}
function wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function W5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wp(Object(n), !0).forEach(function (r) {
          V5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function V5(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function q5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Q5(e, t, n) {
  return (
    t && Sp(e.prototype, t),
    n && Sp(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function K5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ku(e, t);
}
function ku(e, t) {
  return (
    (ku =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ku(e, t)
  );
}
function G5(e) {
  var t = J5();
  return function () {
    var r = ks(e),
      i;
    if (t) {
      var o = ks(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return X5(this, i);
  };
}
function X5(e, t) {
  if (t && (ju(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Y5(e);
}
function Y5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function J5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ks(e) {
  return (
    (ks = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ks(e)
  );
}
var Z5 = function (t) {
    var n;
    return (
      t.infinite
        ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
        : (n =
            Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
      n
    );
  },
  e6 = (function (e) {
    K5(n, e);
    var t = G5(n);
    function n() {
      return q5(this, n), t.apply(this, arguments);
    }
    return (
      Q5(n, [
        {
          key: "clickHandler",
          value: function (i, o) {
            o.preventDefault(), this.props.clickHandler(i);
          },
        },
        {
          key: "render",
          value: function () {
            for (
              var i = this.props,
                o = i.onMouseEnter,
                s = i.onMouseOver,
                l = i.onMouseLeave,
                u = i.infinite,
                c = i.slidesToScroll,
                d = i.slidesToShow,
                f = i.slideCount,
                h = i.currentSlide,
                v = Z5({
                  slideCount: f,
                  slidesToScroll: c,
                  slidesToShow: d,
                  infinite: u,
                }),
                y = { onMouseEnter: o, onMouseOver: s, onMouseLeave: l },
                m = [],
                w = 0;
              w < v;
              w++
            ) {
              var g = (w + 1) * c - 1,
                p = u ? g : (0, xp.clamp)(g, 0, f - 1),
                x = p - (c - 1),
                S = u ? x : (0, xp.clamp)(x, 0, f - 1),
                j = (0, B5.default)({
                  "slick-active": u ? h >= S && h <= p : h === S,
                }),
                k = {
                  message: "dots",
                  index: w,
                  slidesToScroll: c,
                  currentSlide: h,
                },
                E = this.clickHandler.bind(this, k);
              m = m.concat(
                So.default.createElement(
                  "li",
                  { key: w, className: j },
                  So.default.cloneElement(this.props.customPaging(w), {
                    onClick: E,
                  })
                )
              );
            }
            return So.default.cloneElement(
              this.props.appendDots(m),
              W5({ className: this.props.dotsClass }, y)
            );
          },
        },
      ]),
      n
    );
  })(So.default.PureComponent);
fl.Dots = e6;
var Pr = {};
function Cu(e) {
  return (
    (Cu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cu(e)
  );
}
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.PrevArrow = Pr.NextArrow = void 0;
var xr = m1(b),
  h1 = m1(Ki),
  t6 = T;
function m1(e) {
  return e && e.__esModule ? e : { default: e };
}
function Cs() {
  return (
    (Cs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Cs.apply(this, arguments)
  );
}
function bp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bp(Object(n), !0).forEach(function (r) {
          n6(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : bp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function n6(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function g1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function y1(e, t, n) {
  return (
    t && jp(e.prototype, t),
    n && jp(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function v1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Eu(e, t);
}
function Eu(e, t) {
  return (
    (Eu =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Eu(e, t)
  );
}
function x1(e) {
  var t = o6();
  return function () {
    var r = _s(e),
      i;
    if (t) {
      var o = _s(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return r6(this, i);
  };
}
function r6(e, t) {
  if (t && (Cu(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return i6(e);
}
function i6(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function o6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _s(e) {
  return (
    (_s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    _s(e)
  );
}
var s6 = (function (e) {
  v1(n, e);
  var t = x1(n);
  function n() {
    return g1(this, n), t.apply(this, arguments);
  }
  return (
    y1(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "0",
              "data-role": "none",
              className: (0, h1.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.prevArrow
              ? (u = xr.default.cloneElement(
                  this.props.prevArrow,
                  Es(Es({}, s), l)
                ))
              : (u = xr.default.createElement(
                  "button",
                  Cs({ key: "0", type: "button" }, s),
                  " ",
                  "Previous"
                )),
            u
          );
        },
      },
    ]),
    n
  );
})(xr.default.PureComponent);
Pr.PrevArrow = s6;
var l6 = (function (e) {
  v1(n, e);
  var t = x1(n);
  function n() {
    return g1(this, n), t.apply(this, arguments);
  }
  return (
    y1(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, t6.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "1",
              "data-role": "none",
              className: (0, h1.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.nextArrow
              ? (u = xr.default.cloneElement(
                  this.props.nextArrow,
                  Es(Es({}, s), l)
                ))
              : (u = xr.default.createElement(
                  "button",
                  Cs({ key: "1", type: "button" }, s),
                  " ",
                  "Next"
                )),
            u
          );
        },
      },
    ]),
    n
  );
})(xr.default.PureComponent);
Pr.NextArrow = l6;
var w1 = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var s = o[i];
            n.call(r, s[1], s[0]);
          }
        }),
        t
      );
    })();
  })(),
  _u =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Os = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  a6 = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Os)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  u6 = 2;
function c6(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && l();
  }
  function s() {
    a6(o);
  }
  function l() {
    var u = Date.now();
    if (n) {
      if (u - i < u6) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(s, t);
    i = u;
  }
  return l;
}
var d6 = 20,
  f6 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  p6 = typeof MutationObserver < "u",
  h6 = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = c6(this.refresh.bind(this), d6));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !_u ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          p6
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !_u ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = f6.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  S1 = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Rr = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Os;
  },
  b1 = pl(0, 0, 0, 0);
function Ns(e) {
  return parseFloat(e) || 0;
}
function kp(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + Ns(o);
  }, 0);
}
function m6(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      s = e["padding-" + o];
    n[o] = Ns(s);
  }
  return n;
}
function g6(e) {
  var t = e.getBBox();
  return pl(0, 0, t.width, t.height);
}
function y6(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return b1;
  var r = Rr(e).getComputedStyle(e),
    i = m6(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    l = Ns(r.width),
    u = Ns(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(l + o) !== t && (l -= kp(r, "left", "right") + o),
      Math.round(u + s) !== n && (u -= kp(r, "top", "bottom") + s)),
    !x6(e))
  ) {
    var c = Math.round(l + o) - t,
      d = Math.round(u + s) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(d) !== 1 && (u -= d);
  }
  return pl(i.left, i.top, l, u);
}
var v6 = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof Rr(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Rr(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function x6(e) {
  return e === Rr(e).document.documentElement;
}
function w6(e) {
  return _u ? (v6(e) ? g6(e) : y6(e)) : b1;
}
function S6(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype);
  return (
    S1(s, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    s
  );
}
function pl(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var b6 = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = pl(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = w6(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  j6 = (function () {
    function e(t, n) {
      var r = S6(n);
      S1(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  k6 = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new w1()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Rr(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new b6(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Rr(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new j6(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  j1 = typeof WeakMap < "u" ? new WeakMap() : new w1(),
  k1 = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = h6.getInstance(),
        r = new k6(t, n, this);
      j1.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  k1.prototype[e] = function () {
    var t;
    return (t = j1.get(this))[e].apply(t, arguments);
  };
});
var C6 = (function () {
  return typeof Os.ResizeObserver < "u" ? Os.ResizeObserver : k1;
})();
const E6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C6 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _6 = Gp(E6);
Object.defineProperty(ul, "__esModule", { value: !0 });
ul.InnerSlider = void 0;
var Le = Gi(b),
  O6 = Gi(t1),
  N6 = Gi(w5),
  P6 = Gi(Ki),
  oe = T,
  R6 = dl,
  T6 = fl,
  Cp = Pr,
  L6 = Gi(_6);
function Gi(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ps(e) {
  return (
    (Ps =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ps(e)
  );
}
function Rs() {
  return (
    (Rs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Rs.apply(this, arguments)
  );
}
function A6(e, t) {
  if (e == null) return {};
  var n = I6(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function I6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ep(Object(n), !0).forEach(function (r) {
          H(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ep(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function M6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _p(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function z6(e, t, n) {
  return (
    t && _p(e.prototype, t),
    n && _p(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function D6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ou(e, t);
}
function Ou(e, t) {
  return (
    (Ou =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Ou(e, t)
  );
}
function $6(e) {
  var t = H6();
  return function () {
    var r = Ts(e),
      i;
    if (t) {
      var o = Ts(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return F6(this, i);
  };
}
function F6(e, t) {
  if (t && (Ps(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return F(e);
}
function F(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function H6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ts(e) {
  return (
    (Ts = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ts(e)
  );
}
function H(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var U6 = (function (e) {
  D6(n, e);
  var t = $6(n);
  function n(r) {
    var i;
    M6(this, n),
      (i = t.call(this, r)),
      H(F(i), "listRefHandler", function (s) {
        return (i.list = s);
      }),
      H(F(i), "trackRefHandler", function (s) {
        return (i.track = s);
      }),
      H(F(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var s = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, oe.getHeight)(s) + "px";
        }
      }),
      H(F(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var s = (0, oe.getOnDemandLazySlides)(z(z({}, i.props), i.state));
          s.length > 0 &&
            (i.setState(function (u) {
              return { lazyLoadedList: u.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s));
        }
        var l = z({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(l, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new L6.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (u) {
                (u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      H(F(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (s) {
              return clearTimeout(s);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      H(F(i), "componentDidUpdate", function (s) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var l = (0, oe.getOnDemandLazySlides)(z(z({}, i.props), i.state));
          l.length > 0 &&
            (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(l) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(l));
        }
        i.adaptHeight();
        var u = z(z({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          c = i.didPropsChange(s);
        c &&
          i.updateState(u, c, function () {
            i.state.currentSlide >=
              Le.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  Le.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      H(F(i), "onWindowResized", function (s) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, N6.default)(function () {
            return i.resizeWindow(s);
          }, 50)),
          i.debouncedResize();
      }),
      H(F(i), "resizeWindow", function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          l = !!(i.track && i.track.node);
        if (l) {
          var u = z(
            z({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(u, s, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      H(F(i), "updateState", function (s, l, u) {
        var c = (0, oe.initializedState)(s);
        s = z(z(z({}, s), c), {}, { slideIndex: c.currentSlide });
        var d = (0, oe.getTrackLeft)(s);
        s = z(z({}, s), {}, { left: d });
        var f = (0, oe.getTrackCSS)(s);
        (l ||
          Le.default.Children.count(i.props.children) !==
            Le.default.Children.count(s.children)) &&
          (c.trackStyle = f),
          i.setState(c, u);
      }),
      H(F(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var s = 0,
            l = 0,
            u = [],
            c = (0, oe.getPreClones)(
              z(
                z(z({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            d = (0, oe.getPostClones)(
              z(
                z(z({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (E) {
            u.push(E.props.style.width), (s += E.props.style.width);
          });
          for (var f = 0; f < c; f++)
            (l += u[u.length - 1 - f]), (s += u[u.length - 1 - f]);
          for (var h = 0; h < d; h++) s += u[h];
          for (var v = 0; v < i.state.currentSlide; v++) l += u[v];
          var y = { width: s + "px", left: -l + "px" };
          if (i.props.centerMode) {
            var m = "".concat(u[i.state.currentSlide], "px");
            y.left = "calc("
              .concat(y.left, " + (100% - ")
              .concat(m, ") / 2 ) ");
          }
          return { trackStyle: y };
        }
        var w = Le.default.Children.count(i.props.children),
          g = z(z(z({}, i.props), i.state), {}, { slideCount: w }),
          p = (0, oe.getPreClones)(g) + (0, oe.getPostClones)(g) + w,
          x = (100 / i.props.slidesToShow) * p,
          S = 100 / p,
          j = (-S * ((0, oe.getPreClones)(g) + i.state.currentSlide) * x) / 100;
        i.props.centerMode && (j += (100 - (S * x) / 100) / 2);
        var k = { width: x + "%", left: j + "%" };
        return { slideWidth: S + "%", trackStyle: k };
      }),
      H(F(i), "checkImagesLoad", function () {
        var s =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          l = s.length,
          u = 0;
        Array.prototype.forEach.call(s, function (c) {
          var d = function () {
            return ++u && u >= l && i.onWindowResized();
          };
          if (!c.onclick)
            c.onclick = function () {
              return c.parentNode.focus();
            };
          else {
            var f = c.onclick;
            c.onclick = function () {
              f(), c.parentNode.focus();
            };
          }
          c.onload ||
            (i.props.lazyLoad
              ? (c.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((c.onload = d),
                (c.onerror = function () {
                  d(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      H(F(i), "progressiveLazyLoad", function () {
        for (
          var s = [], l = z(z({}, i.props), i.state), u = i.state.currentSlide;
          u < i.state.slideCount + (0, oe.getPostClones)(l);
          u++
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            s.push(u);
            break;
          }
        for (
          var c = i.state.currentSlide - 1;
          c >= -(0, oe.getPreClones)(l);
          c--
        )
          if (i.state.lazyLoadedList.indexOf(c) < 0) {
            s.push(c);
            break;
          }
        s.length > 0
          ? (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      H(F(i), "slideHandler", function (s) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = i.props,
          c = u.asNavFor,
          d = u.beforeChange,
          f = u.onLazyLoad,
          h = u.speed,
          v = u.afterChange,
          y = i.state.currentSlide,
          m = (0, oe.slideHandler)(
            z(
              z(z({ index: s }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !l }
            )
          ),
          w = m.state,
          g = m.nextState;
        if (w) {
          d && d(y, w.currentSlide);
          var p = w.lazyLoadedList.filter(function (x) {
            return i.state.lazyLoadedList.indexOf(x) < 0;
          });
          f && p.length > 0 && f(p),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              v && v(y),
              delete i.animationEndCallback),
            i.setState(w, function () {
              c &&
                i.asNavForIndex !== s &&
                ((i.asNavForIndex = s), c.innerSlider.slideHandler(s)),
                g &&
                  (i.animationEndCallback = setTimeout(function () {
                    var x = g.animating,
                      S = A6(g, ["animating"]);
                    i.setState(S, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: x });
                        }, 10)
                      ),
                        v && v(w.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, h));
            });
        }
      }),
      H(F(i), "changeSlide", function (s) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = z(z({}, i.props), i.state),
          c = (0, oe.changeSlide)(u, s);
        if (
          !(c !== 0 && !c) &&
          (l === !0 ? i.slideHandler(c, l) : i.slideHandler(c),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var d = i.list.querySelectorAll(".slick-current");
          d[0] && d[0].focus();
        }
      }),
      H(F(i), "clickHandler", function (s) {
        i.clickable === !1 && (s.stopPropagation(), s.preventDefault()),
          (i.clickable = !0);
      }),
      H(F(i), "keyHandler", function (s) {
        var l = (0, oe.keyHandler)(s, i.props.accessibility, i.props.rtl);
        l !== "" && i.changeSlide({ message: l });
      }),
      H(F(i), "selectHandler", function (s) {
        i.changeSlide(s);
      }),
      H(F(i), "disableBodyScroll", function () {
        var s = function (u) {
          (u = u || window.event),
            u.preventDefault && u.preventDefault(),
            (u.returnValue = !1);
        };
        window.ontouchmove = s;
      }),
      H(F(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      H(F(i), "swipeStart", function (s) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var l = (0, oe.swipeStart)(s, i.props.swipe, i.props.draggable);
        l !== "" && i.setState(l);
      }),
      H(F(i), "swipeMove", function (s) {
        var l = (0, oe.swipeMove)(
          s,
          z(
            z(z({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        l && (l.swiping && (i.clickable = !1), i.setState(l));
      }),
      H(F(i), "swipeEnd", function (s) {
        var l = (0, oe.swipeEnd)(
          s,
          z(
            z(z({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (l) {
          var u = l.triggerSlideHandler;
          delete l.triggerSlideHandler,
            i.setState(l),
            u !== void 0 &&
              (i.slideHandler(u),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      H(F(i), "touchEnd", function (s) {
        i.swipeEnd(s), (i.clickable = !0);
      }),
      H(F(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      H(F(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      H(F(i), "slickGoTo", function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((s = Number(s)), isNaN(s))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: s,
                currentSlide: i.state.currentSlide,
              },
              l
            );
          }, 0)
        );
      }),
      H(F(i), "play", function () {
        var s;
        if (i.props.rtl) s = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, oe.canGoNext)(z(z({}, i.props), i.state)))
          s = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(s);
      }),
      H(F(i), "autoPlay", function (s) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var l = i.state.autoplaying;
        if (s === "update") {
          if (l === "hovered" || l === "focused" || l === "paused") return;
        } else if (s === "leave") {
          if (l === "paused" || l === "focused") return;
        } else if (s === "blur" && (l === "paused" || l === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      H(F(i), "pause", function (s) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var l = i.state.autoplaying;
        s === "paused"
          ? i.setState({ autoplaying: "paused" })
          : s === "focused"
          ? (l === "hovered" || l === "playing") &&
            i.setState({ autoplaying: "focused" })
          : l === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      H(F(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      H(F(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      H(F(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      H(F(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      H(F(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      H(F(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      H(F(i), "render", function () {
        var s = (0, P6.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          l = z(z({}, i.props), i.state),
          u = (0, oe.extractObject)(l, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          c = i.props.pauseOnHover;
        u = z(
          z({}, u),
          {},
          {
            onMouseEnter: c ? i.onTrackOver : null,
            onMouseLeave: c ? i.onTrackLeave : null,
            onMouseOver: c ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var d;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var f = (0, oe.extractObject)(l, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            h = i.props.pauseOnDotsHover;
          (f = z(
            z({}, f),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: h ? i.onDotsLeave : null,
              onMouseOver: h ? i.onDotsOver : null,
              onMouseLeave: h ? i.onDotsLeave : null,
            }
          )),
            (d = Le.default.createElement(T6.Dots, f));
        }
        var v,
          y,
          m = (0, oe.extractObject)(l, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (m.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((v = Le.default.createElement(Cp.PrevArrow, m)),
            (y = Le.default.createElement(Cp.NextArrow, m)));
        var w = null;
        i.props.vertical && (w = { height: i.state.listHeight });
        var g = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (g = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (g = { padding: i.props.centerPadding + " 0px" });
        var p = z(z({}, w), g),
          x = i.props.touchMove,
          S = {
            className: "slick-list",
            style: p,
            onClick: i.clickHandler,
            onMouseDown: x ? i.swipeStart : null,
            onMouseMove: i.state.dragging && x ? i.swipeMove : null,
            onMouseUp: x ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && x ? i.swipeEnd : null,
            onTouchStart: x ? i.swipeStart : null,
            onTouchMove: i.state.dragging && x ? i.swipeMove : null,
            onTouchEnd: x ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && x ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          j = { className: s, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((S = { className: "slick-list" }), (j = { className: s })),
          Le.default.createElement(
            "div",
            j,
            i.props.unslick ? "" : v,
            Le.default.createElement(
              "div",
              Rs({ ref: i.listRefHandler }, S),
              Le.default.createElement(
                R6.Track,
                Rs({ ref: i.trackRefHandler }, u),
                i.props.children
              )
            ),
            i.props.unslick ? "" : y,
            i.props.unslick ? "" : d
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = z(
        z({}, O6.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          slideCount: Le.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = z(z({}, i.state), o)), i;
  }
  return (
    z6(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, s = 0, l = Object.keys(this.props);
            s < l.length;
            s++
          ) {
            var u = l[s];
            if (!i.hasOwnProperty(u)) {
              o = !0;
              break;
            }
            if (
              !(Ps(i[u]) === "object" || typeof i[u] == "function") &&
              i[u] !== this.props[u]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            Le.default.Children.count(this.props.children) !==
              Le.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(Le.default.Component);
ul.InnerSlider = U6;
var B6 = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  W6 = B6,
  V6 = W6,
  q6 = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  Op = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = V6(r)),
          q6(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  Q6 = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += Op(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : Op(e);
  },
  K6 = Q6,
  C1 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(b);
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function (s) {
        return t.default.createElement(
          "ul",
          { style: { display: "block" } },
          s
        );
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function (s) {
        return t.default.createElement("button", null, s + 1);
      },
      dots: !1,
      dotsClass: "slick-dots",
      draggable: !0,
      easing: "linear",
      edgeFriction: 0.35,
      fade: !1,
      focusOnSelect: !1,
      infinite: !0,
      initialSlide: 0,
      lazyLoad: null,
      nextArrow: null,
      onEdge: null,
      onInit: null,
      onLazyLoadError: null,
      onReInit: null,
      pauseOnDotsHover: !1,
      pauseOnFocus: !1,
      pauseOnHover: !0,
      prevArrow: null,
      responsive: null,
      rows: 1,
      rtl: !1,
      slide: "div",
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: !0,
      swipeEvent: null,
      swipeToSlide: !1,
      touchMove: !0,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      waitForAnimate: !0,
    },
    i = r;
  e.default = i;
})(C1);
var ia, Np;
function G6() {
  if (Np) return ia;
  Np = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (ia = e),
    ia
  );
}
var oa, Pp;
function E1() {
  if (Pp) return oa;
  Pp = 1;
  function e(r, i) {
    var o = 0,
      s = r.length,
      l;
    for (o; o < s && ((l = i(r[o], o)), l !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (oa = { isFunction: n, isArray: t, each: e }), oa;
}
var sa, Rp;
function X6() {
  if (Rp) return sa;
  Rp = 1;
  var e = G6(),
    t = E1().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (s) {
      (o.mql = s.currentTarget || s), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, s) {
          if (o.equals(r)) return o.destroy(), !i.splice(s, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (sa = n),
    sa
  );
}
var la, Tp;
function Y6() {
  if (Tp) return la;
  Tp = 1;
  var e = X6(),
    t = E1(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (s, l, u) {
        var c = this.queries,
          d = u && this.browserIsIncapable;
        return (
          c[s] || (c[s] = new e(s, d)),
          r(l) && (l = { match: l }),
          i(l) || (l = [l]),
          n(l, function (f) {
            r(f) && (f = { match: f }), c[s].addHandler(f);
          }),
          this
        );
      },
      unregister: function (s, l) {
        var u = this.queries[s];
        return (
          u && (l ? u.removeHandler(l) : (u.clear(), delete this.queries[s])),
          this
        );
      },
    }),
    (la = o),
    la
  );
}
var aa, Lp;
function J6() {
  if (Lp) return aa;
  Lp = 1;
  var e = Y6();
  return (aa = new e()), aa;
}
(function (e) {
  function t(C) {
    return (
      (t =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (P) {
              return typeof P;
            }
          : function (P) {
              return P &&
                typeof Symbol == "function" &&
                P.constructor === Symbol &&
                P !== Symbol.prototype
                ? "symbol"
                : typeof P;
            }),
      t(C)
    );
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var n = l(b),
    r = ul,
    i = l(K6),
    o = l(C1),
    s = T;
  function l(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function u() {
    return (
      (u =
        Object.assign ||
        function (C) {
          for (var P = 1; P < arguments.length; P++) {
            var O = arguments[P];
            for (var A in O)
              Object.prototype.hasOwnProperty.call(O, A) && (C[A] = O[A]);
          }
          return C;
        }),
      u.apply(this, arguments)
    );
  }
  function c(C, P) {
    var O = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(C);
      P &&
        (A = A.filter(function (M) {
          return Object.getOwnPropertyDescriptor(C, M).enumerable;
        })),
        O.push.apply(O, A);
    }
    return O;
  }
  function d(C) {
    for (var P = 1; P < arguments.length; P++) {
      var O = arguments[P] != null ? arguments[P] : {};
      P % 2
        ? c(Object(O), !0).forEach(function (A) {
            j(C, A, O[A]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(O))
        : c(Object(O)).forEach(function (A) {
            Object.defineProperty(C, A, Object.getOwnPropertyDescriptor(O, A));
          });
    }
    return C;
  }
  function f(C, P) {
    if (!(C instanceof P))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(C, P) {
    for (var O = 0; O < P.length; O++) {
      var A = P[O];
      (A.enumerable = A.enumerable || !1),
        (A.configurable = !0),
        "value" in A && (A.writable = !0),
        Object.defineProperty(C, A.key, A);
    }
  }
  function v(C, P, O) {
    return (
      P && h(C.prototype, P),
      O && h(C, O),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      C
    );
  }
  function y(C, P) {
    if (typeof P != "function" && P !== null)
      throw new TypeError("Super expression must either be null or a function");
    (C.prototype = Object.create(P && P.prototype, {
      constructor: { value: C, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      P && m(C, P);
  }
  function m(C, P) {
    return (
      (m =
        Object.setPrototypeOf ||
        function (A, M) {
          return (A.__proto__ = M), A;
        }),
      m(C, P)
    );
  }
  function w(C) {
    var P = x();
    return function () {
      var A = S(C),
        M;
      if (P) {
        var I = S(this).constructor;
        M = Reflect.construct(A, arguments, I);
      } else M = A.apply(this, arguments);
      return g(this, M);
    };
  }
  function g(C, P) {
    if (P && (t(P) === "object" || typeof P == "function")) return P;
    if (P !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return p(C);
  }
  function p(C) {
    if (C === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return C;
  }
  function x() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function S(C) {
    return (
      (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (O) {
            return O.__proto__ || Object.getPrototypeOf(O);
          }),
      S(C)
    );
  }
  function j(C, P, O) {
    return (
      P in C
        ? Object.defineProperty(C, P, {
            value: O,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (C[P] = O),
      C
    );
  }
  var k = (0, s.canUseDOM)() && J6(),
    E = (function (C) {
      y(O, C);
      var P = w(O);
      function O(A) {
        var M;
        return (
          f(this, O),
          (M = P.call(this, A)),
          j(p(M), "innerSliderRefHandler", function (I) {
            return (M.innerSlider = I);
          }),
          j(p(M), "slickPrev", function () {
            return M.innerSlider.slickPrev();
          }),
          j(p(M), "slickNext", function () {
            return M.innerSlider.slickNext();
          }),
          j(p(M), "slickGoTo", function (I) {
            var st =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            return M.innerSlider.slickGoTo(I, st);
          }),
          j(p(M), "slickPause", function () {
            return M.innerSlider.pause("paused");
          }),
          j(p(M), "slickPlay", function () {
            return M.innerSlider.autoPlay("play");
          }),
          (M.state = { breakpoint: null }),
          (M._responsiveMediaHandlers = []),
          M
        );
      }
      return (
        v(O, [
          {
            key: "media",
            value: function (M, I) {
              k.register(M, I),
                this._responsiveMediaHandlers.push({ query: M, handler: I });
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              var M = this;
              if (this.props.responsive) {
                var I = this.props.responsive.map(function (ue) {
                  return ue.breakpoint;
                });
                I.sort(function (ue, qe) {
                  return ue - qe;
                }),
                  I.forEach(function (ue, qe) {
                    var jt;
                    qe === 0
                      ? (jt = (0, i.default)({ minWidth: 0, maxWidth: ue }))
                      : (jt = (0, i.default)({
                          minWidth: I[qe - 1] + 1,
                          maxWidth: ue,
                        })),
                      (0, s.canUseDOM)() &&
                        M.media(jt, function () {
                          M.setState({ breakpoint: ue });
                        });
                  });
                var st = (0, i.default)({ minWidth: I.slice(-1)[0] });
                (0, s.canUseDOM)() &&
                  this.media(st, function () {
                    M.setState({ breakpoint: null });
                  });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this._responsiveMediaHandlers.forEach(function (M) {
                k.unregister(M.query, M.handler);
              });
            },
          },
          {
            key: "render",
            value: function () {
              var M = this,
                I,
                st;
              this.state.breakpoint
                ? ((st = this.props.responsive.filter(function (Qe) {
                    return Qe.breakpoint === M.state.breakpoint;
                  })),
                  (I =
                    st[0].settings === "unslick"
                      ? "unslick"
                      : d(d(d({}, o.default), this.props), st[0].settings)))
                : (I = d(d({}, o.default), this.props)),
                I.centerMode && (I.slidesToScroll > 1, (I.slidesToScroll = 1)),
                I.fade &&
                  (I.slidesToShow > 1,
                  I.slidesToScroll > 1,
                  (I.slidesToShow = 1),
                  (I.slidesToScroll = 1));
              var ue = n.default.Children.toArray(this.props.children);
              (ue = ue.filter(function (Qe) {
                return typeof Qe == "string" ? !!Qe.trim() : !!Qe;
              })),
                I.variableWidth &&
                  (I.rows > 1 || I.slidesPerRow > 1) &&
                  (console.warn(
                    "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                  ),
                  (I.variableWidth = !1));
              for (
                var qe = [], jt = null, R = 0;
                R < ue.length;
                R += I.rows * I.slidesPerRow
              ) {
                for (
                  var D = [], $ = R;
                  $ < R + I.rows * I.slidesPerRow;
                  $ += I.slidesPerRow
                ) {
                  for (
                    var te = [], X = $;
                    X < $ + I.slidesPerRow &&
                    (I.variableWidth &&
                      ue[X].props.style &&
                      (jt = ue[X].props.style.width),
                    !(X >= ue.length));
                    X += 1
                  )
                    te.push(
                      n.default.cloneElement(ue[X], {
                        key: 100 * R + 10 * $ + X,
                        tabIndex: -1,
                        style: {
                          width: "".concat(100 / I.slidesPerRow, "%"),
                          display: "inline-block",
                        },
                      })
                    );
                  D.push(
                    n.default.createElement("div", { key: 10 * R + $ }, te)
                  );
                }
                I.variableWidth
                  ? qe.push(
                      n.default.createElement(
                        "div",
                        { key: R, style: { width: jt } },
                        D
                      )
                    )
                  : qe.push(n.default.createElement("div", { key: R }, D));
              }
              if (I === "unslick") {
                var Vn = "regular slider " + (this.props.className || "");
                return n.default.createElement("div", { className: Vn }, ue);
              } else qe.length <= I.slidesToShow && (I.unslick = !0);
              return n.default.createElement(
                r.InnerSlider,
                u(
                  { style: this.props.style, ref: this.innerSliderRefHandler },
                  I
                ),
                qe
              );
            },
          },
        ]),
        O
      );
    })(n.default.Component);
  e.default = E;
})(e1);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(e1);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = t.default;
  e.default = r;
})(Zm);
const Z6 = Kp(Zm);
var eS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const tS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _1 = (e, t) => {
    const n = b.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          children: l,
          ...u
        },
        c
      ) =>
        b.createElement(
          "svg",
          {
            ref: c,
            ...eS,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
            className: `lucide lucide-${tS(e)}`,
            ...u,
          },
          [
            ...t.map(([d, f]) => b.createElement(d, f)),
            ...((Array.isArray(l) ? l : [l]) || []),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  },
  nS = _1("ChevronDown", [
    ["polyline", { points: "6 9 12 15 18 9", key: "1do0m2" }],
  ]),
  rS = _1("ChevronUp", [
    ["polyline", { points: "18 15 12 9 6 15", key: "1uugdp" }],
  ]),
  iS = () => {
    const e = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
      },
      t = [H2, U2, B2, W2, V2, q2, Q2, K2, G2, X2, Y2, J2],
      [n, r] = b.useState(null),
      i = (s) => {
        r(n === s ? null : s);
      },
      o = [
        {
          question: "How do I get started?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
        },
        {
          question: "What is the difference between a free and paid account?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
        },
        {
          question: "How can I cancel my subscription?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
        },
      ];
    return a.jsxs("section", {
      className: "bg-primary-500",
      children: [
        a.jsx(ix, {}),
        a.jsxs("div", {
          className: "w-[80%] mx-auto",
          children: [
            a.jsx("h3", {
              className: "text-3xl text-white font-extrabold ",
              children: "Apple at ShopZilla",
            }),
            a.jsxs("div", {
              className:
                "flex flex-wrap justify-between items-baseline space-y-3",
              children: [
                a.jsx(Y, {
                  to: "/product/646340403d0e52ded74a7855",
                  className: "basis-[48%]",
                  children: a.jsx("div", {
                    className: "mx-auto ",
                    children: a.jsx("img", {
                      src: nx,
                      alt: "",
                      className: "rounded-lg cursor-pointer",
                    }),
                  }),
                }),
                a.jsx(Y, {
                  to: "/product/646343833d0e52ded74a78d1",
                  className: "basis-[48%]",
                  children: a.jsx("div", {
                    className: "mx-auto ",
                    children: a.jsx("img", {
                      src: ex,
                      alt: "",
                      className: "rounded-lg cursor-pointer",
                    }),
                  }),
                }),
                a.jsx(Y, {
                  to: "/product/646345093d0e52ded74a78db",
                  className: "basis-[30%]",
                  children: a.jsx("div", {
                    className: "mx-auto ",
                    children: a.jsx("img", {
                      src: rx,
                      alt: "",
                      className: "rounded-lg cursor-pointer",
                    }),
                  }),
                }),
                a.jsx(Y, {
                  to: "/product/646346093d0e52ded74a78e5",
                  className: "basis-[30%]",
                  children: a.jsx("div", {
                    className: "mx-auto ",
                    children: a.jsx("img", {
                      src: Z2,
                      alt: "",
                      className: "rounded-lg cursor-pointer",
                    }),
                  }),
                }),
                a.jsx(Y, {
                  to: "/product/646346f23d0e52ded74a78f1",
                  className: "basis-[30%]",
                  children: a.jsx("div", {
                    className: "mx-auto ",
                    children: a.jsx("img", {
                      src: tx,
                      alt: "",
                      className: "rounded-lg cursor-pointer",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        a.jsx(n5, {}),
        a.jsxs("div", {
          className: "w-[80%] mx-auto",
          children: [
            a.jsx("h3", {
              className: "text-3xl text-white font-extrabold ",
              children: "Top Brands",
            }),
            a.jsx("div", {
              className: "relative my-6",
              children: a.jsx(Z6, {
                ...e,
                children: t.map((s) =>
                  a.jsx(
                    "div",
                    {
                      className: "",
                      children: a.jsx("img", {
                        src: s,
                        alt: "slide",
                        className: "object-contain w-[100px] rounded-full",
                      }),
                    },
                    s
                  )
                ),
              }),
            }),
          ],
        }),
        a.jsx("section", {
          className: "mx-auto max-w-7xl px-2 py-10 md:px-0 ",
          children: a.jsxs("div", {
            children: [
              a.jsxs("div", {
                className: "mx-auto max-w-2xl lg:text-center",
                children: [
                  a.jsx("h2", {
                    className:
                      "text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl",
                    children: "Frequently Asked Questions",
                  }),
                  a.jsx("p", {
                    className:
                      "mt-4 max-w-xl text-base leading-relaxed text-gray-300 lg:mx-auto",
                    children:
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "mx-auto mt-8 max-w-3xl space-y-4 md:mt-16",
                children: o.map((s, l) =>
                  a.jsxs(
                    "div",
                    {
                      className:
                        "cursor-pointer rounded-md border border-gray-400 transition-all duration-200",
                      children: [
                        a.jsxs("button", {
                          type: "button",
                          className:
                            "flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center",
                          onClick: () => i(l),
                          children: [
                            a.jsx("span", {
                              className:
                                "flex text-start text-lg font-semibold text-white",
                              children: s.question,
                            }),
                            n === l
                              ? a.jsx(rS, {
                                  className: "h-5 w-5 text-gray-200",
                                })
                              : a.jsx(nS, {
                                  className: "h-5 w-5 text-gray-200",
                                }),
                          ],
                        }),
                        n === l &&
                          a.jsx("div", {
                            className: "px-4 pb-5 sm:px-6 sm:pb-6",
                            children: a.jsx("p", {
                              className: "text-gray-200",
                              children: s.answer,
                            }),
                          }),
                      ],
                    },
                    l
                  )
                ),
              }),
              a.jsxs("p", {
                className: "textbase mt-6 text-center text-gray-300",
                children: [
                  "Can't find what you're looking for?",
                  " ",
                  a.jsx("a", {
                    href: "#",
                    title: "",
                    className: "font-semibold text-white hover:underline",
                    children: "Contact our support",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  oS = () =>
    a.jsx(a.Fragment, {
      children: a.jsx("div", {
        class: "bg-white",
        children: a.jsxs("div", {
          class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          children: [
            a.jsxs("div", {
              class:
                "flex flex-col items-center justify-center space-y-8 pt-20 pb-10",
              children: [
                a.jsx("p", {
                  class:
                    "text-center text-base font-semibold leading-normal text-purple-700",
                  children: "About the company",
                }),
                a.jsx("p", {
                  class:
                    "text-center text-5xl font-semibold leading-10 text-gray-900",
                  children: "Made with love, right here in India",
                }),
                a.jsx("p", {
                  class: "text-center text-xl leading-loose text-gray-600",
                  children:
                    "Come visit our friendly team at one of our offices.",
                }),
              ],
            }),
            a.jsx("div", {
              class: "w-full space-y-4",
              children: a.jsx("img", {
                class: " ",
                src: "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg",
                alt: "",
              }),
            }),
            a.jsxs("div", {
              class:
                "my-8 flex flex-col items-center justify-around gap-y-6 text-center md:flex-row",
              children: [
                a.jsxs("div", {
                  class:
                    "flex flex-col items-center justify-center space-y-2 md:w-1/4 lg:w-1/5",
                  children: [
                    a.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      class: "h-6 w-6 text-purple-700",
                      children: [
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                        }),
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      class:
                        "w-full text-center text-xl font-semibold text-gray-900",
                      children: "Bengaluru office",
                    }),
                    a.jsx("p", {
                      class: "w-full text-center text-base text-gray-600",
                      children: "Mon-Sat 9am to 5pm.",
                    }),
                    a.jsx("p", {
                      class:
                        "text-center text-base font-semibold text-purple-700",
                      children:
                        "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class:
                    "flex flex-col items-center justify-center space-y-2 md:w-1/4 lg:w-1/5",
                  children: [
                    a.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      class: "h-6 w-6 text-purple-700",
                      children: [
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                        }),
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      class:
                        "w-full text-center text-xl font-semibold text-gray-900",
                      children: "Head office",
                    }),
                    a.jsx("p", {
                      class: "w-full text-center text-base text-gray-600",
                      children: "Mon-Sat 9am to 5pm.",
                    }),
                    a.jsx("p", {
                      class:
                        "text-center text-base font-semibold text-purple-700",
                      children:
                        "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class:
                    "flex flex-col items-center justify-center space-y-2 md:w-1/4 lg:w-1/5",
                  children: [
                    a.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      class: "h-6 w-6 text-purple-700",
                      children: [
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                        }),
                        a.jsx("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      class:
                        "w-full text-center text-xl font-semibold text-gray-900",
                      children: "Karnataka office",
                    }),
                    a.jsx("p", {
                      class: "w-full text-center text-base text-gray-600",
                      children: "Mon-Sat 9am to 5pm.",
                    }),
                    a.jsx("p", {
                      class:
                        "text-center text-base font-semibold text-purple-700",
                      children:
                        "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              class: "my-24 flex items-center justify-center text-center",
              children: a.jsxs("div", {
                class: "space-y-4 md:w-3/4",
                children: [
                  a.jsx("p", {
                    class:
                      "text-center text-base font-semibold text-purple-700",
                    children: "Join us!",
                  }),
                  a.jsx("p", {
                    class: "text-center text-4xl font-semibold text-gray-900",
                    children: "Meet our team",
                  }),
                  a.jsx("p", {
                    class: "text-center text-xl text-gray-600",
                    children:
                      "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
                  }),
                  a.jsx("div", {}),
                ],
              }),
            }),
            a.jsxs("div", {
              class:
                "grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-16 md:grid-cols-2 lg:grid-cols-4",
              children: [
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                      alt: "Gabrielle Fernandez",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Gabrielle Fernandez",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Marketing Lead",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
                      alt: "Victória Silva",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Victória Silva",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Back-end developer",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
                      alt: "Gabrielle Fernandez",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Gabrielle Fernandez",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Sales",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
                      alt: "Sadie Lewis",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Sadie Lewis",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Sales",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
                      alt: "Thilde Olaisen",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Thilde Olaisen",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Marketing Lead",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
                      alt: "Deepika Ramesh",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Deepika Ramesh",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Front-end developer",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                      alt: "Jordi Santiago",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Jordi Santiago",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Front-end developer",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  class: "space-y-2",
                  children: [
                    a.jsx("img", {
                      src: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
                      alt: "Kerim Fahri",
                      class: "w-full",
                    }),
                    a.jsx("p", {
                      class: "w-full text-xl font-semibold text-gray-900",
                      children: "Kerim Fahri",
                    }),
                    a.jsx("p", {
                      class: "w-full text-lg text-purple-700",
                      children: "Back-end developer",
                    }),
                    a.jsxs("div", {
                      class: "flex gap-x-4",
                      children: [
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            viewBox: "-5 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: a.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                              children: a.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-385.000000, -7399.000000)",
                                class: "h-4 w-4 fill-gray-400",
                                children: a.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: a.jsx("path", {
                                    d: "M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512.002 512.002",
                            children: a.jsx("path", {
                              d: "M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193 c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764 c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201 c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075 c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568 c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468 c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638 c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665 c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736 c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451 c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906 C507.7,94.204,503.76,93.294,500.398,94.784z",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          children: a.jsx("svg", {
                            class: "h-4 w-4 fill-gray-400",
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-143 145 512 512",
                            children: a.jsx("path", {
                              d: "M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              class:
                "flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row",
              children: [
                a.jsxs("div", {
                  class: "space-y-6",
                  children: [
                    a.jsx("p", {
                      class: "text-base font-semibold text-purple-700",
                      children: "Join our team",
                    }),
                    a.jsx("p", {
                      class: "text-4xl font-semibold text-gray-900",
                      children: "We’re just getting started",
                    }),
                    a.jsx("p", {
                      class: "text-xl text-gray-600",
                      children:
                        "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
                    }),
                    a.jsx("button", {
                      class:
                        "rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 text-base font-semibold text-white shadow",
                      children: "We’re hiring!",
                    }),
                  ],
                }),
                a.jsx("div", {
                  class: "w-full",
                  children: a.jsx("img", {
                    src: "https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
                    alt: "Getting Started",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
function O1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sS } = Object.prototype,
  { getPrototypeOf: sd } = Object,
  hl = ((e) => (t) => {
    const n = sS.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Mt = (e) => ((e = e.toLowerCase()), (t) => hl(t) === e),
  ml = (e) => (t) => typeof t === e,
  { isArray: Dr } = Array,
  zi = ml("undefined");
function lS(e) {
  return (
    e !== null &&
    !zi(e) &&
    e.constructor !== null &&
    !zi(e.constructor) &&
    dt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const N1 = Mt("ArrayBuffer");
function aS(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && N1(e.buffer)),
    t
  );
}
const uS = ml("string"),
  dt = ml("function"),
  P1 = ml("number"),
  gl = (e) => e !== null && typeof e == "object",
  cS = (e) => e === !0 || e === !1,
  Fo = (e) => {
    if (hl(e) !== "object") return !1;
    const t = sd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  dS = Mt("Date"),
  fS = Mt("File"),
  pS = Mt("Blob"),
  hS = Mt("FileList"),
  mS = (e) => gl(e) && dt(e.pipe),
  gS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (dt(e.append) &&
          ((t = hl(e)) === "formdata" ||
            (t === "object" &&
              dt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  yS = Mt("URLSearchParams"),
  vS = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Dr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function R1(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const T1 = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  L1 = (e) => !zi(e) && e !== T1;
function Nu() {
  const { caseless: e } = (L1(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && R1(t, i)) || i;
      Fo(t[o]) && Fo(r)
        ? (t[o] = Nu(t[o], r))
        : Fo(r)
        ? (t[o] = Nu({}, r))
        : Dr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Xi(arguments[r], n);
  return t;
}
const xS = (e, t, n, { allOwnKeys: r } = {}) => (
    Xi(
      t,
      (i, o) => {
        n && dt(i) ? (e[o] = O1(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  wS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  SS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  bS = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && sd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  jS = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  kS = (e) => {
    if (!e) return null;
    if (Dr(e)) return e;
    let t = e.length;
    if (!P1(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  CS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && sd(Uint8Array)),
  ES = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  _S = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  OS = Mt("HTMLFormElement"),
  NS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Ap = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  PS = Mt("RegExp"),
  A1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Xi(n, (i, o) => {
      t(i, o, e) !== !1 && (r[o] = i);
    }),
      Object.defineProperties(e, r);
  },
  RS = (e) => {
    A1(e, (t, n) => {
      if (dt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (dt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  TS = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Dr(e) ? r(e) : r(String(e).split(t)), n;
  },
  LS = () => {},
  AS = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ua = "abcdefghijklmnopqrstuvwxyz",
  Ip = "0123456789",
  I1 = { DIGIT: Ip, ALPHA: ua, ALPHA_DIGIT: ua + ua.toUpperCase() + Ip },
  IS = (e = 16, t = I1.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function MS(e) {
  return !!(
    e &&
    dt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const zS = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (gl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Dr(r) ? [] : {};
            return (
              Xi(r, (s, l) => {
                const u = n(s, i + 1);
                !zi(u) && (o[l] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  DS = Mt("AsyncFunction"),
  $S = (e) => e && (gl(e) || dt(e)) && dt(e.then) && dt(e.catch),
  _ = {
    isArray: Dr,
    isArrayBuffer: N1,
    isBuffer: lS,
    isFormData: gS,
    isArrayBufferView: aS,
    isString: uS,
    isNumber: P1,
    isBoolean: cS,
    isObject: gl,
    isPlainObject: Fo,
    isUndefined: zi,
    isDate: dS,
    isFile: fS,
    isBlob: pS,
    isRegExp: PS,
    isFunction: dt,
    isStream: mS,
    isURLSearchParams: yS,
    isTypedArray: CS,
    isFileList: hS,
    forEach: Xi,
    merge: Nu,
    extend: xS,
    trim: vS,
    stripBOM: wS,
    inherits: SS,
    toFlatObject: bS,
    kindOf: hl,
    kindOfTest: Mt,
    endsWith: jS,
    toArray: kS,
    forEachEntry: ES,
    matchAll: _S,
    isHTMLForm: OS,
    hasOwnProperty: Ap,
    hasOwnProp: Ap,
    reduceDescriptors: A1,
    freezeMethods: RS,
    toObjectSet: TS,
    toCamelCase: NS,
    noop: LS,
    toFiniteNumber: AS,
    findKey: R1,
    global: T1,
    isContextDefined: L1,
    ALPHABET: I1,
    generateString: IS,
    isSpecCompliantForm: MS,
    toJSONObject: zS,
    isAsyncFn: DS,
    isThenable: $S,
  };
function W(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
_.inherits(W, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const M1 = W.prototype,
  z1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  z1[e] = { value: e };
});
Object.defineProperties(W, z1);
Object.defineProperty(M1, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, i, o) => {
  const s = Object.create(M1);
  return (
    _.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    W.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const FS = null;
function Pu(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function D1(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = D1(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function HS(e) {
  return _.isArray(e) && !e.some(Pu);
}
const US = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function yl(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, w) {
        return !_.isUndefined(w[m]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (_.isDate(y)) return y.toISOString();
    if (!u && _.isBlob(y))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(y) || _.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, m, w) {
    let g = y;
    if (y && !w && typeof y == "object") {
      if (_.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (_.isArray(y) && HS(y)) ||
        ((_.isFileList(y) || _.endsWith(m, "[]")) && (g = _.toArray(y)))
      )
        return (
          (m = D1(m)),
          g.forEach(function (x, S) {
            !(_.isUndefined(x) || x === null) &&
              t.append(
                s === !0 ? Mp([m], S, o) : s === null ? m : m + "[]",
                c(x)
              );
          }),
          !1
        );
    }
    return Pu(y) ? !0 : (t.append(Mp(w, m, o), c(y)), !1);
  }
  const f = [],
    h = Object.assign(US, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: Pu,
    });
  function v(y, m) {
    if (!_.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(y),
        _.forEach(y, function (g, p) {
          (!(_.isUndefined(g) || g === null) &&
            i.call(t, g, _.isString(p) ? p.trim() : p, m, h)) === !0 &&
            v(g, m ? m.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function zp(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ld(e, t) {
  (this._pairs = []), e && yl(e, this, t);
}
const $1 = ld.prototype;
$1.append = function (t, n) {
  this._pairs.push([t, n]);
};
$1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, zp);
      }
    : zp;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function BS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function F1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || BS,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = _.isURLSearchParams(t) ? t.toString() : new ld(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class WS {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Dp = WS,
  H1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  VS = typeof URLSearchParams < "u" ? URLSearchParams : ld,
  qS = typeof FormData < "u" ? FormData : null,
  QS = typeof Blob < "u" ? Blob : null,
  KS = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  GS = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Rt = {
    isBrowser: !0,
    classes: { URLSearchParams: VS, FormData: qS, Blob: QS },
    isStandardBrowserEnv: KS,
    isStandardBrowserWebWorkerEnv: GS,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function XS(e, t) {
  return yl(
    e,
    new Rt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Rt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function YS(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function JS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function U1(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    const l = Number.isFinite(+s),
      u = o >= n.length;
    return (
      (s = !s && _.isArray(i) ? i.length : s),
      u
        ? (_.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !_.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && _.isArray(i[s]) && (i[s] = JS(i[s])),
          !l)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, i) => {
        t(YS(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const ZS = { "Content-Type": void 0 };
function e7(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const vl = {
  transitional: H1,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = _.isObject(t);
      if ((o && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return i && i ? JSON.stringify(U1(t)) : t;
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t)
      )
        return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return XS(t, this.formSerializer).toString();
        if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return yl(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), e7(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || vl.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && _.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? W.from(l, W.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Rt.classes.FormData, Blob: Rt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
_.forEach(["delete", "get", "head"], function (t) {
  vl.headers[t] = {};
});
_.forEach(["post", "put", "patch"], function (t) {
  vl.headers[t] = _.merge(ZS);
});
const ad = vl,
  t7 = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  n7 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && t7[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  $p = Symbol("internals");
function Xr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ho(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Ho) : String(e);
}
function r7(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const i7 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ca(e, t, n, r, i) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function o7(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function s7(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class xl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, c) {
      const d = Xr(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = _.findKey(i, d);
      (!f || i[f] === void 0 || c === !0 || (c === void 0 && i[f] !== !1)) &&
        (i[f || u] = Ho(l));
    }
    const s = (l, u) => _.forEach(l, (c, d) => o(c, d, u));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : _.isString(t) && (t = t.trim()) && !i7(t)
        ? s(n7(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Xr(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return r7(i);
        if (_.isFunction(n)) return n.call(this, i, r);
        if (_.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Xr(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ca(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = Xr(s)), s)) {
        const l = _.findKey(r, s);
        l && (!n || ca(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return _.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ca(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (i, o) => {
        const s = _.findKey(r, o);
        if (s) {
          (n[s] = Ho(i)), delete n[o];
          return;
        }
        const l = t ? o7(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Ho(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && _.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[$p] = this[$p] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = Xr(s);
      r[l] || (s7(i, s), (r[l] = !0));
    }
    return _.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
xl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.freezeMethods(xl.prototype);
_.freezeMethods(xl);
const Wt = xl;
function da(e, t) {
  const n = this || ad,
    r = t || n,
    i = Wt.from(r.headers);
  let o = r.data;
  return (
    _.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function B1(e) {
  return !!(e && e.__CANCEL__);
}
function Yi(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
_.inherits(Yi, W, { __CANCEL__: !0 });
function l7(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new W(
          "Request failed with status code " + n.status,
          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const a7 = Rt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, s, l) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            _.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()),
            _.isString(o) && u.push("path=" + o),
            _.isString(s) && u.push("domain=" + s),
            l === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function u7(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function c7(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function W1(e, t) {
  return e && !u7(t) ? c7(e, t) : t;
}
const d7 = Rt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let s = o;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (s) {
          const l = _.isString(s) ? i(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function f7(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function p7(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[o];
      s || (s = c), (n[i] = u), (r[i] = c);
      let f = o,
        h = 0;
      for (; f !== i; ) (h += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), c - s < t)) return;
      const v = d && c - d;
      return v ? Math.round((h * 1e3) / v) : void 0;
    }
  );
}
function Fp(e, t) {
  let n = 0;
  const r = p7(50, 250);
  return (i) => {
    const o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      l = o - n,
      u = r(l),
      c = o <= s;
    n = o;
    const d = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && c ? (s - o) / u : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const h7 = typeof XMLHttpRequest < "u",
  m7 =
    h7 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = Wt.from(e.headers).normalize(),
          s = e.responseType;
        let l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        _.isFormData(i) &&
          (Rt.isStandardBrowserEnv || Rt.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(v + ":" + y));
        }
        const d = W1(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), F1(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function f() {
          if (!c) return;
          const v = Wt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            m = {
              data:
                !s || s === "text" || s === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          l7(
            function (g) {
              n(g), u();
            },
            function (g) {
              r(g), u();
            },
            m
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = f)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (c.onabort = function () {
            c &&
              (r(new W("Request aborted", W.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new W("Network Error", W.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || H1;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(
                new W(
                  y,
                  m.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          Rt.isStandardBrowserEnv)
        ) {
          const v =
            (e.withCredentials || d7(d)) &&
            e.xsrfCookieName &&
            a7.read(e.xsrfCookieName);
          v && o.set(e.xsrfHeaderName, v);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            _.forEach(o.toJSON(), function (y, m) {
              c.setRequestHeader(m, y);
            }),
          _.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && s !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Fp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Fp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (v) => {
              c &&
                (r(!v || v.type ? new Yi(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const h = f7(d);
        if (h && Rt.protocols.indexOf(h) === -1) {
          r(new W("Unsupported protocol " + h + ":", W.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  Uo = { http: FS, xhr: m7 };
_.forEach(Uo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const g7 = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = _.isString(n) ? Uo[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new W(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            _.hasOwnProp(Uo, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!_.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Uo,
};
function fa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Yi(null, e);
}
function Hp(e) {
  return (
    fa(e),
    (e.headers = Wt.from(e.headers)),
    (e.data = da.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    g7
      .getAdapter(e.adapter || ad.adapter)(e)
      .then(
        function (r) {
          return (
            fa(e),
            (r.data = da.call(e, e.transformResponse, r)),
            (r.headers = Wt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            B1(r) ||
              (fa(e),
              r &&
                r.response &&
                ((r.response.data = da.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Wt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Up = (e) => (e instanceof Wt ? e.toJSON() : e);
function Tr(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f) {
    return _.isPlainObject(c) && _.isPlainObject(d)
      ? _.merge.call({ caseless: f }, c, d)
      : _.isPlainObject(d)
      ? _.merge({}, d)
      : _.isArray(d)
      ? d.slice()
      : d;
  }
  function i(c, d, f) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, d, f);
  }
  function o(c, d) {
    if (!_.isUndefined(d)) return r(void 0, d);
  }
  function s(c, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function l(c, d, f) {
    if (f in t) return r(c, d);
    if (f in e) return r(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, d) => i(Up(c), Up(d), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = u[d] || i,
        h = f(e[d], t[d], d);
      (_.isUndefined(h) && f !== l) || (n[d] = h);
    }),
    n
  );
}
const V1 = "1.4.0",
  ud = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ud[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Bp = {};
ud.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      V1 +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new W(
        i(s, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return (
      n &&
        !Bp[s] &&
        ((Bp[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function y7(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e);
      if (u !== !0)
        throw new W("option " + o + " must be " + u, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new W("Unknown option " + o, W.ERR_BAD_OPTION);
  }
}
const Ru = { assertOptions: y7, validators: ud },
  en = Ru.validators;
class Ls {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Dp(), response: new Dp() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Tr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Ru.assertOptions(
        r,
        {
          silentJSONParsing: en.transitional(en.boolean),
          forcedJSONParsing: en.transitional(en.boolean),
          clarifyTimeoutError: en.transitional(en.boolean),
        },
        !1
      ),
      i != null &&
        (_.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Ru.assertOptions(
              i,
              { encode: en.function, serialize: en.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s;
    (s = o && _.merge(o.common, o[n.method])),
      s &&
        _.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (y) => {
            delete o[y];
          }
        ),
      (n.headers = Wt.concat(s, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((u = u && m.synchronous), l.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (m) {
      c.push(m.fulfilled, m.rejected);
    });
    let d,
      f = 0,
      h;
    if (!u) {
      const y = [Hp.bind(this), void 0];
      for (
        y.unshift.apply(y, l),
          y.push.apply(y, c),
          h = y.length,
          d = Promise.resolve(n);
        f < h;

      )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    h = l.length;
    let v = n;
    for (f = 0; f < h; ) {
      const y = l[f++],
        m = l[f++];
      try {
        v = y(v);
      } catch (w) {
        m.call(this, w);
        break;
      }
    }
    try {
      d = Hp.call(this, v);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, h = c.length; f < h; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = Tr(this.defaults, t);
    const n = W1(t.baseURL, t.url);
    return F1(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function (t) {
  Ls.prototype[t] = function (n, r) {
    return this.request(
      Tr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        Tr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (Ls.prototype[t] = n()), (Ls.prototype[t + "Form"] = n(!0));
});
const Bo = Ls;
class cd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new Yi(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new cd(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const v7 = cd;
function x7(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function w7(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const Tu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Tu).forEach(([e, t]) => {
  Tu[t] = e;
});
const S7 = Tu;
function q1(e) {
  const t = new Bo(e),
    n = O1(Bo.prototype.request, t);
  return (
    _.extend(n, Bo.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return q1(Tr(e, i));
    }),
    n
  );
}
const we = q1(ad);
we.Axios = Bo;
we.CanceledError = Yi;
we.CancelToken = v7;
we.isCancel = B1;
we.VERSION = V1;
we.toFormData = yl;
we.AxiosError = W;
we.Cancel = we.CanceledError;
we.all = function (t) {
  return Promise.all(t);
};
we.spread = x7;
we.isAxiosError = w7;
we.mergeConfig = Tr;
we.AxiosHeaders = Wt;
we.formToJSON = (e) => U1(_.isHTMLForm(e) ? new FormData(e) : e);
we.HttpStatusCode = S7;
we.default = we;
const bt = we,
  b7 = (e, t) => {
    switch (t.type) {
      case "SET_LOADING":
        return { ...e, isLoading: !0 };
      case "SET_SINGLE_LOADING":
        return { ...e, isSingleLoading: !0 };
      case "Top_PRODUCT_DATA":
        const n = t.payload.filter((r) => r.featured === !0);
        return { ...e, isLoading: !1, product: t.payload, featureProducts: n };
      case "SET_SINGLE_PRODUCT":
        return { ...e, isSingleLoading: !1, singleProduct: t.payload };
      case "API_ERROR":
        return { ...e, isLoading: !1, isError: !0 };
      case "SET_SINGLE_ERROR":
        return { ...e, isSingleLoading: !1, isError: !0 };
      default:
        return { ...e };
    }
  },
  Q1 = b.createContext(),
  j7 = "https://shopzilla-z3p7.onrender.com/api/v1/getAllProducts",
  k7 = {
    isAuthenticated: !1,
    isLoading: !1,
    isError: !1,
    product: [],
    featureProducts: [],
    isSingleLoading: !1,
    singleProduct: {},
  },
  C7 = ({ children: e }) => {
    const [t, n] = b.useReducer(b7, k7),
      r = async (o) => {
        var s;
        n({ type: "SET_LOADING" });
        try {
          const l = await bt.get(o);
          console.log(l);
          const u = await ((s = l == null ? void 0 : l.data) == null
            ? void 0
            : s.products);
          n({ type: "Top_PRODUCT_DATA", payload: u });
        } catch {
          n({ type: "API_ERROR" });
        }
      },
      i = async (o) => {
        var s;
        n({ type: "SET_SINGLE_LOADING" });
        try {
          const l = await bt.get(o);
          console.log(l.data);
          const u = await ((s = l == null ? void 0 : l.data) == null
            ? void 0
            : s.product);
          console.log(u), n({ type: "SET_SINGLE_PRODUCT", payload: u });
        } catch {
          n({ type: "SET_SINGLE_ERROR" });
        }
      };
    return (
      b.useEffect(() => {
        r(j7);
      }, []),
      a.jsx(Q1.Provider, { value: { ...t, getSingleProduct: i }, children: e })
    );
  },
  K1 = () => b.useContext(Q1),
  E7 = (e, t) => {
    switch (t.type) {
      case "LOAD_FILTER_PRODUCTS":
        const n = [...t.payload].map((w) => w.price);
        let r = Math.max(...n),
          i = Math.min(...n);
        return {
          ...e,
          filterProducts: [...t.payload],
          allProducts: [...t.payload],
          filters: { ...e.filters, maxPrice: r, minPrice: i, price: r },
        };
      case "GET_SORT_VALUE":
        return { ...e, sorting_value: t.payload };
      case "SORTING_PRODUCTS":
        let o,
          s = [...e.filterProducts];
        if (
          (e.sorting_value === "A-to-Z" &&
            (o = s.sort((w, g) => w.name.localeCompare(g.name))),
          e.sorting_value === "Z-to-A" &&
            (o = s.sort((w, g) => g.name.localeCompare(w.name))),
          e.sorting_value === "lowest")
        ) {
          const w = (g, p) => g.price - p.price;
          o = s.sort(w);
        }
        if (e.sorting_value === "highest") {
          const w = (g, p) => p.price - g.price;
          o = s.sort(w);
        }
        return { ...e, filterProducts: o };
      case "UPDATE_FILTER_VALUE":
        const { name: l, value: u } = t.payload;
        return { ...e, filters: { ...e.filters, [l]: u } };
      case "FILTER_PRODUCT":
        let { allProducts: c } = e,
          d = [...c];
        const {
          text: f,
          category: h,
          company: v,
          color: y,
          price: m,
        } = e.filters;
        return (
          f && (d = d.filter((w) => w.name.toLowerCase().includes(f))),
          h.toLowerCase() !== "all" && (d = d.filter((w) => w.category === h)),
          v.toLowerCase() !== "all" &&
            (d = d.filter((w) => w.company.toLowerCase() === v.toLowerCase())),
          y.toLowerCase() !== "all" &&
            (d = d.filter((w) => w.colors.includes(y))),
          m && (d = d.filter((w) => w.price <= m)),
          { ...e, filterProducts: d }
        );
      case "CLEAR_FILTER":
        return {
          ...e,
          filters: {
            ...e.filters,
            text: "",
            category: "All",
            company: "All",
            color: "All",
            maxPrice: e.filters.maxPrice,
            price: e.filters.maxPrice,
            minPrice: e.filters.minPrice,
          },
        };
      default:
        return { ...e };
    }
  },
  G1 = b.createContext(),
  _7 = {
    filterProducts: [],
    allProducts: [],
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "All",
      company: "All",
      color: "All",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  },
  O7 = ({ children: e }) => {
    const { product: t } = K1(),
      [n, r] = b.useReducer(E7, _7),
      i = (l) => {
        let u = l.target.value;
        r({ type: "GET_SORT_VALUE", payload: u });
      },
      o = (l) => {
        let u = l.target.name,
          c = l.target.value;
        return r({
          type: "UPDATE_FILTER_VALUE",
          payload: { name: u, value: c },
        });
      },
      s = () => {
        r({ type: "CLEAR_FILTER" });
      };
    return (
      b.useEffect(() => {
        r({ type: "FILTER_PRODUCT" }),
          r({ type: "SORTING_PRODUCTS", payload: t });
      }, [t, n.sorting_value, n.filters]),
      b.useEffect(() => {
        r({ type: "LOAD_FILTER_PRODUCTS", payload: t });
      }, [t]),
      a.jsx(G1.Provider, {
        value: { ...n, sorting: i, updateFilter: o, clearFilter: s },
        children: e,
      })
    );
  },
  dd = () => b.useContext(G1),
  Pe = ({ price: e }) =>
    Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(e),
  N7 = () => {
    const {
        filters: {
          text: e,
          category: t,
          color: n,
          price: r,
          maxPrice: i,
          minPrice: o,
        },
        allProducts: s,
        updateFilter: l,
        clearFilter: u,
      } = dd(),
      c = (v, y) => {
        let m = v.map((w) => w[y]);
        return (
          y === "colors" && (m = m.flat()), (m = ["All", ...new Set(m)]), m
        );
      },
      d = c(s, "category"),
      f = c(s, "company"),
      h = c(s, "colors");
    return a.jsxs("div", {
      className: "text-white bg-primary-500 h-full px-3 py-5 ",
      children: [
        a.jsx("div", {
          className: "filter-search",
          children: a.jsx("form", {
            onSubmit: (v) => v.preventDefault(),
            children: a.jsx("input", {
              type: "text",
              name: "text",
              value: e,
              onChange: l,
              className:
                "placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              placeholder: "Search product here...",
            }),
          }),
        }),
        a.jsx("hr", { className: "my-3 w-[80%] mx-auto" }),
        a.jsxs("div", {
          className: "category text-lg",
          children: [
            a.jsx("h2", { children: "Category :" }),
            a.jsx("div", {
              className: "flex flex-col",
              children: d.map((v, y) =>
                a.jsx(
                  "button",
                  {
                    type: "button",
                    name: "category",
                    value: v,
                    onClick: l,
                    className: "font-thin hover:font-semibold transition",
                    children: v,
                  },
                  y
                )
              ),
            }),
          ],
        }),
        a.jsx("hr", { className: "my-3 w-[80%] mx-auto" }),
        a.jsxs("div", {
          className: "company-category",
          children: [
            a.jsx("h2", { className: "mb-3", children: "Company : " }),
            a.jsx("form", {
              action: "#",
              children: a.jsx("select", {
                name: "company",
                id: "company",
                onClick: l,
                className:
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                children: f.map((v, y) =>
                  a.jsx("option", { value: v, name: "company", children: v }, y)
                ),
              }),
            }),
          ],
        }),
        a.jsx("hr", { className: "my-3 w-[80%] mx-auto" }),
        a.jsxs("div", {
          className: "colorFilter ",
          children: [
            a.jsx("h1", { className: "mb-3", children: "Color :" }),
            a.jsx("div", {
              className: "flex gap-1 ",
              children: h.map((v, y) =>
                v === "All"
                  ? a.jsx(
                      "button",
                      {
                        className:
                          " text-white rounded-full w-10 h-10 bg-indigo-500",
                        onClick: l,
                        value: v,
                        name: "color",
                        type: "button",
                        children: "All",
                      },
                      y
                    )
                  : a.jsx(
                      "button",
                      {
                        style: { backgroundColor: `${v}` },
                        className: "  rounded-full w-10 h-10",
                        onClick: l,
                        value: v,
                        name: "color",
                        type: "button",
                        children: n === v ? "" : null,
                      },
                      y
                    )
              ),
            }),
          ],
        }),
        a.jsx("hr", { className: "my-3 w-[80%] mx-auto" }),
        a.jsxs("div", {
          className: "priceFilter",
          children: [
            a.jsxs("h2", {
              className: "mb-3",
              children: ["Price : ", a.jsx(Pe, { price: r })],
            }),
            a.jsx("input", {
              type: "range",
              name: "price",
              id: "price",
              min: o,
              max: i,
              value: r,
              onChange: l,
              className:
                "w-[60%] mx-auto h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            }),
          ],
        }),
        a.jsx("hr", { className: "my-3 w-[80%] mx-auto" }),
        a.jsx("div", {
          className: "w-[70%] mx-auto",
          children: a.jsx("button", {
            onClick: u,
            type: "button",
            className:
              "w-full my-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
            children: "Clear Filter",
          }),
        }),
      ],
    });
  },
  P7 = ({ length: e }) => {
    const { sorting: t } = dd();
    return a.jsxs("div", {
      className: "w-full flex justify-around gap-12 ",
      children: [
        a.jsxs("div", {
          children: [a.jsx("span", { children: e }), " Product Available now"],
        }),
        a.jsx("div", {
          className: "dropdown ",
          children: a.jsxs("form", {
            action: "#",
            className: "",
            children: [
              a.jsx("label", { htmlFor: "sort" }),
              a.jsxs("select", {
                name: "sort",
                id: "sort",
                className: "bg-slate-900 text-white",
                onClick: t,
                children: [
                  a.jsx("option", { value: "lowest", children: "Low to High" }),
                  a.jsx("option", { value: "#", disabled: !0 }),
                  a.jsx("option", {
                    value: "highest",
                    children: "High to low",
                  }),
                  a.jsx("option", { value: "#", disabled: !0 }),
                  a.jsx("option", { value: "A-to-Z", children: "A to Z" }),
                  a.jsx("option", { value: "#", disabled: !0 }),
                  a.jsx("option", { value: "Z-to-A", children: "Z to A" }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
var X1 = {},
  fd = {},
  pd = {};
Object.defineProperty(pd, "__esModule", { value: !0 });
var R7 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  T7 = b,
  bo = hd(T7),
  L7 = Ki,
  A7 = hd(L7),
  I7 = jm,
  he = hd(I7);
function hd(e) {
  return e && e.__esModule ? e : { default: e };
}
function M7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function z7(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function D7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Y1 = (function (e) {
  D7(t, e);
  function t() {
    return (
      M7(this, t),
      z7(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    R7(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            i = r.changeRating,
            o = r.hoverOverStar,
            s = r.unHoverOverStar,
            l = r.svgIconViewBox,
            u = r.svgIconPath;
          return bo.default.createElement(
            "div",
            {
              className: "star-container",
              style: this.starContainerStyle,
              onMouseEnter: o,
              onMouseLeave: s,
              onClick: i,
            },
            bo.default.createElement(
              "svg",
              {
                viewBox: l,
                className: this.starClasses,
                style: this.starSvgStyle,
              },
              bo.default.createElement("path", {
                className: "star",
                style: this.pathStyle,
                d: u,
              })
            )
          );
        },
      },
      {
        key: "starContainerStyle",
        get: function () {
          var r = this.props,
            i = r.changeRating,
            o = r.starSpacing,
            s = r.isFirstStar,
            l = r.isLastStar,
            u = r.ignoreInlineStyles,
            c = {
              position: "relative",
              display: "inline-block",
              verticalAlign: "middle",
              paddingLeft: s ? void 0 : o,
              paddingRight: l ? void 0 : o,
              cursor: i ? "pointer" : void 0,
            };
          return u ? {} : c;
        },
      },
      {
        key: "starSvgStyle",
        get: function () {
          var r = this.props,
            i = r.ignoreInlineStyles,
            o = r.isCurrentHoveredStar,
            s = r.starDimension,
            l = {
              width: s,
              height: s,
              transition: "transform .2s ease-in-out",
              transform: o ? "scale(1.1)" : void 0,
            };
          return i ? {} : l;
        },
      },
      {
        key: "pathStyle",
        get: function () {
          var r = this.props,
            i = r.isStarred,
            o = r.isPartiallyFullStar,
            s = r.isHovered,
            l = r.hoverMode,
            u = r.starEmptyColor,
            c = r.starRatedColor,
            d = r.starHoverColor,
            f = r.gradientPathName,
            h = r.fillId,
            v = r.ignoreInlineStyles,
            y = void 0;
          l
            ? s
              ? (y = d)
              : (y = u)
            : o
            ? (y = "url('" + f + "#" + h + "')")
            : i
            ? (y = c)
            : (y = u);
          var m = { fill: y, transition: "fill .2s ease-in-out" };
          return v ? {} : m;
        },
      },
      {
        key: "starClasses",
        get: function () {
          var r = this.props,
            i = r.isSelected,
            o = r.isPartiallyFullStar,
            s = r.isHovered,
            l = r.isCurrentHoveredStar,
            u = r.ignoreInlineStyles,
            c = (0, A7.default)({
              "widget-svg": !0,
              "widget-selected": i,
              "multi-widget-selected": o,
              hovered: s,
              "current-hovered": l,
            });
          return u ? {} : c;
        },
      },
    ]),
    t
  );
})(bo.default.Component);
Y1.propTypes = {
  fillId: he.default.string.isRequired,
  changeRating: he.default.func,
  hoverOverStar: he.default.func,
  unHoverOverStar: he.default.func,
  isStarred: he.default.bool.isRequired,
  isPartiallyFullStar: he.default.bool.isRequired,
  isHovered: he.default.bool.isRequired,
  hoverMode: he.default.bool.isRequired,
  isCurrentHoveredStar: he.default.bool.isRequired,
  isFirstStar: he.default.bool.isRequired,
  isLastStar: he.default.bool.isRequired,
  starDimension: he.default.string.isRequired,
  starSpacing: he.default.string.isRequired,
  starHoverColor: he.default.string.isRequired,
  starRatedColor: he.default.string.isRequired,
  starEmptyColor: he.default.string.isRequired,
  gradientPathName: he.default.string.isRequired,
  ignoreInlineStyles: he.default.bool.isRequired,
  svgIconPath: he.default.string.isRequired,
  svgIconViewBox: he.default.string.isRequired,
};
pd.default = Y1;
Object.defineProperty(fd, "__esModule", { value: !0 });
var $7 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  F7 = b,
  Ct = md(F7),
  H7 = jm,
  Ke = md(H7),
  U7 = pd,
  B7 = md(U7);
function md(e) {
  return e && e.__esModule ? e : { default: e };
}
function W7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wp(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function V7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var gd = (function (e) {
  V7(t, e);
  function t() {
    var n, r, i, o;
    W7(this, t);
    for (var s = arguments.length, l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u];
    return (
      (o =
        ((r =
          ((i = Wp(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(l)
            )
          )),
          i)),
        (i.state = { highestStarHovered: -1 / 0 }),
        (i.fillId = "starGrad" + Math.random().toFixed(15).slice(2)),
        (i.hoverOverStar = function (c) {
          return function () {
            i.setState({ highestStarHovered: c });
          };
        }),
        (i.unHoverOverStar = function () {
          i.setState({ highestStarHovered: -1 / 0 });
        }),
        r)),
      Wp(i, o)
    );
  }
  return (
    $7(t, [
      {
        key: "stopColorStyle",
        value: function (r) {
          var i = { stopColor: r, stopOpacity: "1" };
          return this.props.ignoreInlineStyles ? {} : i;
        },
      },
      {
        key: "render",
        value: function () {
          var r = this.props,
            i = r.starRatedColor,
            o = r.starEmptyColor;
          return Ct.default.createElement(
            "div",
            {
              className: "star-ratings",
              title: this.titleText,
              style: this.starRatingsStyle,
            },
            Ct.default.createElement(
              "svg",
              { className: "star-grad", style: this.starGradientStyle },
              Ct.default.createElement(
                "defs",
                null,
                Ct.default.createElement(
                  "linearGradient",
                  { id: this.fillId, x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                  Ct.default.createElement("stop", {
                    offset: "0%",
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  Ct.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  Ct.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-final",
                    style: this.stopColorStyle(o),
                  }),
                  Ct.default.createElement("stop", {
                    offset: "100%",
                    className: "stop-color-final",
                    style: this.stopColorStyle(o),
                  })
                )
              )
            ),
            this.renderStars
          );
        },
      },
      {
        key: "starRatingsStyle",
        get: function () {
          var r = {
            position: "relative",
            boxSizing: "border-box",
            display: "inline-block",
          };
          return this.props.ignoreInlineStyles ? {} : r;
        },
      },
      {
        key: "starGradientStyle",
        get: function () {
          var r = {
            position: "absolute",
            zIndex: "0",
            width: "0",
            height: "0",
            visibility: "hidden",
          };
          return this.props.ignoreInlineStyles ? {} : r;
        },
      },
      {
        key: "titleText",
        get: function () {
          var r = this.props,
            i = r.typeOfWidget,
            o = r.rating,
            s = this.state.highestStarHovered,
            l = s > 0 ? s : o,
            u = parseFloat(l.toFixed(2)).toString();
          Number.isInteger(l) && (u = String(l));
          var c = i + "s";
          return u === "1" && (c = i), u + " " + c;
        },
      },
      {
        key: "offsetValue",
        get: function () {
          var r = this.props.rating,
            i = Number.isInteger(r),
            o = "0%";
          if (!i) {
            var s = r.toFixed(2).split(".")[1].slice(0, 2);
            o = s + "%";
          }
          return o;
        },
      },
      {
        key: "renderStars",
        get: function () {
          var r = this,
            i = this.props,
            o = i.changeRating,
            s = i.rating,
            l = i.numberOfStars,
            u = i.starDimension,
            c = i.starSpacing,
            d = i.starRatedColor,
            f = i.starEmptyColor,
            h = i.starHoverColor,
            v = i.gradientPathName,
            y = i.ignoreInlineStyles,
            m = i.svgIconPath,
            w = i.svgIconViewBox,
            g = i.name,
            p = this.state.highestStarHovered,
            x = Array.apply(null, Array(l));
          return x.map(function (S, j) {
            var k = j + 1,
              E = k <= s,
              C = p > 0,
              P = k <= p,
              O = k === p,
              A = k > s && k - 1 < s,
              M = k === 1,
              I = k === l;
            return Ct.default.createElement(B7.default, {
              key: k,
              fillId: r.fillId,
              changeRating: o
                ? function () {
                    return o(k, g);
                  }
                : null,
              hoverOverStar: o ? r.hoverOverStar(k) : null,
              unHoverOverStar: o ? r.unHoverOverStar : null,
              isStarred: E,
              isPartiallyFullStar: A,
              isHovered: P,
              hoverMode: C,
              isCurrentHoveredStar: O,
              isFirstStar: M,
              isLastStar: I,
              starDimension: u,
              starSpacing: c,
              starHoverColor: h,
              starRatedColor: d,
              starEmptyColor: f,
              gradientPathName: v,
              ignoreInlineStyles: y,
              svgIconPath: m,
              svgIconViewBox: w,
            });
          });
        },
      },
    ]),
    t
  );
})(Ct.default.Component);
gd.propTypes = {
  rating: Ke.default.number.isRequired,
  numberOfStars: Ke.default.number.isRequired,
  changeRating: Ke.default.func,
  starHoverColor: Ke.default.string.isRequired,
  starRatedColor: Ke.default.string.isRequired,
  starEmptyColor: Ke.default.string.isRequired,
  starDimension: Ke.default.string.isRequired,
  starSpacing: Ke.default.string.isRequired,
  gradientPathName: Ke.default.string.isRequired,
  ignoreInlineStyles: Ke.default.bool.isRequired,
  svgIconPath: Ke.default.string.isRequired,
  svgIconViewBox: Ke.default.string.isRequired,
  name: Ke.default.string,
};
gd.defaultProps = {
  rating: 0,
  typeOfWidget: "Star",
  numberOfStars: 5,
  changeRating: null,
  starHoverColor: "rgb(230, 67, 47)",
  starRatedColor: "rgb(109, 122, 130)",
  starEmptyColor: "rgb(203, 211, 227)",
  starDimension: "50px",
  starSpacing: "7px",
  gradientPathName: "",
  ignoreInlineStyles: !1,
  svgIconPath: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
  svgIconViewBox: "0 0 51 48",
};
fd.default = gd;
Object.defineProperty(X1, "__esModule", { value: !0 });
var q7 = fd,
  Q7 = K7(q7);
function K7(e) {
  return e && e.__esModule ? e : { default: e };
}
Number.isInteger =
  Number.isInteger ||
  function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
var G7 = (X1.default = Q7.default);
const X7 = ({ stars: e, reviews: t }) =>
    a.jsxs("div", {
      className: "flex gap-3 items-baseline",
      children: [
        a.jsx(G7, {
          rating: Math.round(3),
          starRatedColor: "gold",
          starDimension: "20px",
          starSpacing: "1px",
        }),
        a.jsxs("p", { children: [45, " customers review"] }),
      ],
    }),
  Y7 = (e) => {
    const {
      _id: t,
      images: n,
      company: r,
      name: i,
      price: o,
      category: s,
      description: l,
      colors: u,
      stars: c,
      reviews: d,
    } = e;
    return (
      console.log(e),
      a.jsx(Y, {
        to: `/product/${t}`,
        className: "my-1 bg-gray-100 mx-auto",
        children: a.jsxs("div", {
          className:
            "flex max-w-2xl flex-col items-center rounded-md border md:flex-row",
          children: [
            a.jsx("div", {
              className: "h-full w-full md:h-[200px] md:w-[300px]",
              children: a.jsx("img", {
                src: n[0].secure_url,
                alt: "Laptop",
                className: "h-full w-full rounded-md object-cover",
              }),
            }),
            a.jsx("div", {
              children: a.jsxs("div", {
                className: "p-4",
                children: [
                  a.jsx("h1", {
                    className: "inline-flex items-center text-lg font-semibold",
                    children: i,
                  }),
                  a.jsx("p", {
                    className: "mt-3 text-sm text-gray-600",
                    children: l.slice(0, 100) + "...",
                  }),
                  a.jsxs("div", {
                    className: "mt-4",
                    children: [
                      a.jsxs("span", {
                        className:
                          "mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",
                        children: ["#", i.slice(0, 30) + "..."],
                      }),
                      a.jsxs("span", {
                        className:
                          "mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",
                        children: ["#", r],
                      }),
                      a.jsxs("span", {
                        className:
                          "mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",
                        children: ["#", s],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "mt-3 flex items-center space-x-2",
                    children: a.jsx("ul", {
                      class: "colors -mr-3 flex flex-wrap",
                      children: u.map((f) =>
                        a.jsx(
                          "li",
                          {
                            style: { backgroundColor: f },
                            class:
                              "text-heading mb-2 mr-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm",
                            children: a.jsx("span", {
                              class: "block h-full w-full rounded",
                            }),
                          },
                          f
                        )
                      ),
                    }),
                  }),
                  a.jsxs("span", {
                    className: "",
                    children: [
                      "Only in",
                      " ",
                      a.jsx("span", {
                        className: "text-lg font-bold",
                        children: a.jsx(Pe, { price: o }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  J7 = ({ products: e }) =>
    e
      ? a.jsx("div", {
          className: "product-container flex flex-wrap",
          children: e.map((t) => a.jsx(Y7, { ...t }, t.id)),
        })
      : null,
  Z7 = () => {
    const { filterProducts: e } = dd();
    return a.jsx("div", {
      className: " bg-gray-50",
      children: a.jsxs("div", {
        className: "w-full mx-auto  product-container flex",
        children: [
          a.jsx("div", {
            className: "category-section hidden md:block basis-[25%] ",
            children: a.jsx(N7, {}),
          }),
          a.jsxs("div", {
            className: "product-list   ",
            children: [
              a.jsx("div", {
                className: " bg-primary-300 py-4 text-white mb-2",
                children: a.jsx(P7, { length: e == null ? void 0 : e.length }),
              }),
              a.jsx(J7, { products: e }),
            ],
          }),
        ],
      }),
    });
  },
  e9 = () =>
    a.jsxs("div", {
      className: "bg-primary-500 overflow-hidden py-8",
      children: [
        a.jsx("h1", {
          className: "text-2xl font-bold text-white text-center py-3",
          children: "Contact Us",
        }),
        a.jsx("iframe", {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.675621094893!2d74.24499673860855!3d16.709988212087797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10056bf54a2e1%3A0xcee17ff88bd63587!2sKadamwadi%2C%20Kolhapur%2C%20Maharashtra%20416005!5e0!3m2!1sen!2sin!4v1682840320119!5m2!1sen!2sin",
          width: "100%",
          height: "450",
          style: { border: "0" },
          allowFullScreen: "",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
        }),
        a.jsx("div", {
          className: "form-container w-[80%] mx-auto my-3 rounded-md p-6 ",
          children: a.jsxs("form", {
            action: "https://formspree.io/f/meqwnoop",
            method: "POST",
            className: "flex flex-col space-y-3 ",
            children: [
              a.jsx("input", {
                type: "text",
                name: "username",
                id: "",
                autoComplete: "off",
                required: !0,
                placeholder: "Username",
                className:
                  " placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              }),
              a.jsx("input", {
                type: "email",
                name: "email",
                id: "",
                autoComplete: "off",
                required: !0,
                placeholder: "Email Address",
                className:
                  " placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              }),
              a.jsx("textarea", {
                name: "message",
                id: "",
                cols: "30",
                rows: "10",
                autoComplete: "off",
                required: !0,
                placeholder: "Enter Your Message",
                className:
                  " placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
              }),
              a.jsx("button", {
                type: "submit",
                value: "send",
                className:
                  " bg-green-500 mx-2 text-xl py-2 font-bold text-white hover:bg-green-600 rounded-lg mx-auto",
                children: "Submit",
              }),
            ],
          }),
        }),
      ],
    });
var yd = {},
  t9 = it;
Object.defineProperty(yd, "__esModule", { value: !0 });
var J1 = (yd.default = void 0),
  n9 = t9(ot()),
  r9 = a,
  i9 = (0, n9.default)(
    (0, r9.jsx)("path", {
      d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z",
    }),
    "ArrowCircleRight"
  );
J1 = yd.default = i9;
var vd = {},
  o9 = it;
Object.defineProperty(vd, "__esModule", { value: !0 });
var Z1 = (vd.default = void 0),
  s9 = o9(ot()),
  l9 = a,
  a9 = (0, s9.default)(
    (0, l9.jsx)("path", {
      d: "M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z",
    }),
    "ArrowCircleLeft"
  );
Z1 = vd.default = a9;
const u9 = ({ images: e = [{ secure_url: "" }] }) => {
    var o, s;
    const [t, n] = b.useState(0),
      r = () => {
        const l = t === 0 ? e.length - 1 : t - 1;
        n(l);
      },
      i = () => {
        const l = t === e.length - 1 ? 0 : t + 1;
        n(l);
      };
    return a.jsx("div", {
      className: "flex flex-col",
      children: a.jsxs("div", {
        className: "w-[400px] flex items-center justify-center relative ",
        children: [
          a.jsx("div", {
            className: "absolute top-50% left-12 md:left-0 ",
            children: a.jsx(Z1, { onClick: r }),
          }),
          a.jsx("img", {
            src: (o = e[t]) == null ? void 0 : o.secure_url,
            alt: (s = e[t]) == null ? void 0 : s.id,
            width: "100%",
            height: "300px",
            className:
              "object-contain aspect-video mx-auto w-[380px] rounded-md",
          }),
          a.jsx("div", {
            className: "absolute  top-50% right-12 md:right-0 ",
            children: a.jsx(J1, { onClick: i }),
          }),
        ],
      }),
    });
  },
  c9 = (e) =>
    a.jsxs("div", {
      className: "text-black font-semibold my-2",
      children: [
        a.jsx(Y, {
          to: "/",
          className: "text-green-600 font-semibold hover:underline",
          children: "Home",
        }),
        "/",
        `${e.title}`,
      ],
    });
var xd = {},
  d9 = it;
Object.defineProperty(xd, "__esModule", { value: !0 });
var eg = (xd.default = void 0),
  f9 = d9(ot()),
  p9 = a,
  h9 = (0, f9.default)(
    (0, p9.jsx)("path", {
      d: "m17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66 1.41 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3z",
    }),
    "PublishedWithChanges"
  );
eg = xd.default = h9;
var wd = {},
  m9 = it;
Object.defineProperty(wd, "__esModule", { value: !0 });
var tg = (wd.default = void 0),
  g9 = m9(ot()),
  y9 = a,
  v9 = (0, g9.default)(
    (0, y9.jsx)("path", {
      d: "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z",
    }),
    "Store"
  );
tg = wd.default = v9;
var Sd = {},
  x9 = it;
Object.defineProperty(Sd, "__esModule", { value: !0 });
var ng = (Sd.default = void 0),
  w9 = x9(ot()),
  S9 = a,
  b9 = (0, w9.default)(
    (0, S9.jsx)("path", {
      d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
    }),
    "Done"
  );
ng = Sd.default = b9;
const j9 = (e, t) => {
    switch (t.type) {
      case "ADD_TO_CART":
        let {
          _id: n,
          pickColor: r,
          productsQuantity: i,
          product: o,
        } = t.payload;
        if (e.cart.find((h) => h._id === n + r)) {
          let h = e.cart.map((v) => {
            if (v._id === n + r) {
              let y = v.productsQuantity + i;
              return y >= v.max && (y = v.max), { ...v, productsQuantity: y };
            } else return { ...v };
          });
          return { ...e, cart: h };
        } else {
          let h = {
            _id: n + r,
            name: o.name,
            pickColor: r,
            productsQuantity: i,
            image: o.images[0].secure_url,
            price: o.price,
            max: o.stock,
          };
          return { ...e, cart: [...e.cart, h] };
        }
      case "REMOVE_ITEM":
        let l = e.cart.filter((h) => h._id != t.payload);
        return { ...e, cart: l };
      case "SET_INCREMENT":
        let u = e.cart.map((h) => {
          if (h._id === t.payload) {
            let v = h.productsQuantity + 1;
            return v >= h.max && (v = h.max), { ...h, productsQuantity: v };
          } else return { ...h };
        });
        return { ...e, cart: u };
      case "SET_DECREMENT":
        let c = e.cart.map((h) => {
          if (h._id === t.payload) {
            let v = 1;
            return (
              h.productsQuantity > 1 && (v = h.productsQuantity - 1),
              { ...h, productsQuantity: v }
            );
          } else return { ...h };
        });
        return { ...e, cart: c };
      case "CART_TOTAL_PRICE":
        let d = e.cart.reduce((h, v) => {
          let { price: y, productsQuantity: m } = v;
          return (h += y * m), h;
        }, 0);
        return { ...e, total_amount: d };
      case "CART_TOTAL_ITEM":
        let f = e.cart.reduce((h, v) => {
          let { productsQuantity: y } = v;
          return (h += y), h;
        }, 0);
        return { ...e, total_item: f };
      default:
        return { ...e };
    }
  },
  rg = b.createContext(),
  k9 = () => {
    let e = localStorage.getItem("productCart");
    return e && Array.isArray(JSON.parse(e)) && JSON.parse(e).length > 0
      ? JSON.parse(e)
      : [];
  },
  C9 = { cart: k9(), total_item: "", total_amount: "", shipping_fee: 500 },
  E9 = ({ children: e }) => {
    const [t, n] = b.useReducer(j9, C9),
      r = (l, u, c, d) => {
        n({
          type: "ADD_TO_CART",
          payload: { _id: l, pickColor: u, productsQuantity: c, product: d },
        });
      },
      i = (l) => {
        n({ type: "REMOVE_ITEM", payload: l });
      },
      o = (l) => {
        n({ type: "SET_INCREMENT", payload: l });
      },
      s = (l) => {
        n({ type: "SET_DECREMENT", payload: l });
      };
    return (
      b.useEffect(() => {
        n({ type: "CART_TOTAL_ITEM" }),
          n({ type: "CART_TOTAL_PRICE" }),
          localStorage.setItem("productCart", JSON.stringify(t.cart));
      }, [t.cart]),
      a.jsx(rg.Provider, {
        value: {
          ...t,
          addToCart: r,
          removeItem: i,
          setIncreseQuantity: o,
          setDecreseQuantity: s,
        },
        children: e,
      })
    );
  },
  bd = () => b.useContext(rg);
var jd = {},
  _9 = it;
Object.defineProperty(jd, "__esModule", { value: !0 });
var ig = (jd.default = void 0),
  O9 = _9(ot()),
  N9 = a,
  P9 = (0, O9.default)(
    (0, N9.jsx)("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
    }),
    "AddBox"
  );
ig = jd.default = P9;
var kd = {},
  R9 = it;
Object.defineProperty(kd, "__esModule", { value: !0 });
var og = (kd.default = void 0),
  T9 = R9(ot()),
  L9 = a,
  A9 = (0, T9.default)(
    (0, L9.jsx)("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox"
  );
og = kd.default = A9;
const sg = ({
    productsQuantity: e,
    increaseQuantity: t,
    decreaseQuantity: n,
  }) =>
    a.jsxs("div", {
      className:
        "quantity group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12",
      children: [
        a.jsx("button", {
          onClick: () => t(),
          type: "button",
          className:
            "text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12",
          children: a.jsx(ig, {}),
        }),
        a.jsx("p", {
          className:
            "duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24",
          children: e,
        }),
        a.jsx("button", {
          onClick: () => n(),
          className:
            "text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12",
          type: "button",
          children: a.jsx(og, {}),
        }),
      ],
    }),
  I9 = ({ product: e }) => {
    const { addToCart: t } = bd(),
      { _id: n, colors: r, stock: i } = e,
      [o, s] = b.useState(r[0]),
      [l, u] = b.useState(1),
      c = () => {
        l < i ? u(l + 1) : u(i);
      },
      d = () => {
        l > 1 ? u(l - 1) : u(1);
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          className: "colors",
          children: a.jsxs("div", {
            className: "flex  items-center",
            children: [
              "Colors :",
              r.map((f, h) =>
                a.jsx(
                  "button",
                  {
                    style: { backgroundColor: `${f}` },
                    className: `bg-[${f}] w-7 h-7 mx-1 rounded-full`,
                    onClick: () => s(f),
                    type: "button",
                    children: o === f ? a.jsx(ng, {}) : null,
                  },
                  h
                )
              ),
            ],
          }),
        }),
        a.jsxs("div", {
          className: "flex  flex-wrap justify-around items-center",
          children: [
            a.jsx(sg, {
              productsQuantity: l,
              increaseQuantity: c,
              decreaseQuantity: d,
              className: "basis-[48%]",
            }),
            a.jsx(Y, {
              to: "/cart",
              onClick: () => t(n, o, l, e),
              className:
                "basis-[48%] text-center h-11 w-full rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
              children: a.jsx("button", { children: "Add to Cart" }),
            }),
          ],
        }),
      ],
    });
  },
  M9 = "https://shopzilla-z3p7.onrender.com/api/v1",
  z9 = () => {
    const { getSingleProduct: e, isSingleLoading: t, singleProduct: n } = K1(),
      { id: r } = Ac(),
      {
        category: i,
        colors: o,
        company: s,
        description: l,
        featured: u,
        images: c,
        name: d,
        price: f,
        reviews: h,
        stars: v,
        stock: y,
      } = n;
    return (
      console.log(n),
      b.useEffect(() => {
        e(`${M9}/product/${r}`);
      }, []),
      a.jsxs("div", {
        className: " w-[100vw] py-6 bg-gray-200 text-black",
        children: [
          a.jsx(c9, { title: d }),
          a.jsxs("div", {
            className:
              "product-container bg-gray-50  rounded-2xl w-[80%] mx-auto flex flex-wrap justify-around py-20",
            children: [
              a.jsx("div", {
                className:
                  "image-container  basis-[40%] flex justify-center py-10",
                children: a.jsx(u9, { images: c }),
              }),
              a.jsxs("div", {
                className: "product-details basis-[40%] space-y-3",
                children: [
                  a.jsx("h2", {
                    className:
                      "text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl",
                    children: d,
                  }),
                  a.jsx(X7, { stars: v, reviews: h }),
                  a.jsxs("div", {
                    className:
                      "Product-price font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl",
                    children: [
                      "MRP :",
                      a.jsx("del", {
                        className: "mx-1",
                        children: a.jsx(Pe, {
                          price:
                            f +
                            (Math.floor(Math.random() * (3e3 - 1e3 + 1)) + 1e3),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("p", {
                    className:
                      "text-heading pr-2 text-base font-bold md:pr-0 text-lg lg:pr-2 2xl:pr-0 ",
                    children: [
                      "Deal of the Day:",
                      " ",
                      a.jsx("span", { children: a.jsx(Pe, { price: f }) }),
                    ],
                  }),
                  a.jsxs("p", {
                    className:
                      "text-body text-sm leading-6  lg:text-base lg:leading-8",
                    children: [
                      a.jsx("p", {
                        className: "text-lg font-medium",
                        children: "Description ",
                      }),
                      l,
                    ],
                  }),
                  a.jsxs("div", {
                    className: "service-details flex justify-between ",
                    children: [
                      a.jsxs("div", {
                        className:
                          "basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1",
                        children: [
                          a.jsx("div", {
                            className:
                              "bg-green-400 w-[50%] rounded-full p-2 text-center",
                            children: a.jsx(Kc, {}),
                          }),
                          a.jsx("p", {
                            className: "text-sm text-center",
                            children: "Free Delivery",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1",
                        children: [
                          a.jsx("div", {
                            className:
                              "bg-pink-300 w-[50%] rounded-full p-2 text-center",
                            children: a.jsx(eg, {}),
                          }),
                          a.jsxs("p", {
                            className: "text-sm text-center",
                            children: [
                              " ",
                              Math.floor(Math.random() * (15 - 3 + 1)) + 3,
                              " Days Replacement",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1",
                        children: [
                          a.jsx("div", {
                            className:
                              "bg-yellow-400 w-[50%] rounded-full p-2 text-center",
                            children: a.jsx(Xc, {}),
                          }),
                          a.jsxs("p", {
                            className: "text-sm text-center",
                            children: [
                              Math.floor(Math.random() * (2 - 1 + 1)) + 1,
                              " Warranty",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1",
                        children: [
                          a.jsx("div", {
                            className:
                              "bg-red-400 w-[50%] rounded-full p-2 text-center",
                            children: a.jsx(tg, {}),
                          }),
                          a.jsx("p", {
                            className: "text-sm text-center",
                            children: "Connect to Store",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "product-avaliblity",
                    children: a.jsx("p", {
                      className: `${
                        y > 0 ? "bg-green-600 " : "bg-red-600 "
                      } text-lg font-semibold w-[40%]  text-center rounded-md text-white mx-auto`,
                      children: y > 0 ? "Available" : "Not Available",
                    }),
                  }),
                  a.jsx("hr", { className: "w-[90%] mx-auto my-3" }),
                  y > 0 && a.jsx(I9, { product: n }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
var Cd = {},
  D9 = it;
Object.defineProperty(Cd, "__esModule", { value: !0 });
var Ji = (Cd.default = void 0),
  $9 = D9(ot()),
  Vp = a,
  F9 = (0, $9.default)(
    [
      (0, Vp.jsx)(
        "path",
        { d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" },
        "0"
      ),
      (0, Vp.jsx)(
        "path",
        { d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" },
        "1"
      ),
    ],
    "KeyboardDoubleArrowRight"
  );
Ji = Cd.default = F9;
const H9 = () => {
    const {
      cart: e,
      removeItem: t,
      setIncreseQuantity: n,
      setDecreseQuantity: r,
      total_amount: i,
      shipping_fee: o,
      total_item: s,
    } = bd();
    return a.jsx("div", {
      className: "bg-gray-100 dark:bg-gray-900  dark:nx-bg-neutral-900",
      children: a.jsxs("div", {
        className:
          "mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8",
        children: [
          a.jsx("h1", {
            className:
              "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
            children: "Shopping Cart",
          }),
          a.jsxs("form", {
            className:
              "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",
            children: [
              a.jsxs("section", {
                "aria-labelledby": "cart-heading",
                className: "lg:col-span-8 bg-white dark:bg-slate-600",
                children: [
                  a.jsx("h2", {
                    id: "cart-heading",
                    className: "sr-only",
                    children: "Items in your shopping cart",
                  }),
                  a.jsx("ul", {
                    role: "list",
                    className:
                      "divide-y divide-gray-200 border-t border-b border-gray-200",
                    children: e.map((l, u) =>
                      a.jsxs(
                        "div",
                        {
                          className: "px-4",
                          children: [
                            a.jsxs("li", {
                              className: "flex py-6 sm:py-6 ",
                              children: [
                                a.jsx("div", {
                                  className: "flex-shrink-0",
                                  children: a.jsx("img", {
                                    src: l.image,
                                    alt: l.name,
                                    className:
                                      "h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38",
                                  }),
                                }),
                                a.jsx("div", {
                                  className:
                                    "ml-4 flex flex-1 flex-col justify-between sm:ml-6",
                                  children: a.jsx("div", {
                                    className:
                                      "relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",
                                    children: a.jsxs("div", {
                                      children: [
                                        a.jsx("div", {
                                          className: "flex justify-between",
                                          children: a.jsx("h3", {
                                            className: "text-sm",
                                            children: a.jsx("a", {
                                              href: "#",
                                              className:
                                                "font-medium text-lg text-gray-700 dark:text-white",
                                              children: l.name,
                                            }),
                                          }),
                                        }),
                                        a.jsx("div", {
                                          className: "mt-1 flex text-sm",
                                          children: a.jsx("p", {
                                            className:
                                              "text-gray-500 dark:text-gray-200 w-10 h-10 rounded-full",
                                            style: {
                                              backgroundColor: `${l.pickColor}`,
                                            },
                                          }),
                                        }),
                                        a.jsxs("div", {
                                          className: "mt-1 flex items-end",
                                          children: [
                                            a.jsx("p", {
                                              className:
                                                "text-xs line-through font-medium text-gray-500 dark:text-gray-100",
                                              children: a.jsx(Pe, {
                                                price:
                                                  l.price +
                                                  (Math.floor(
                                                    Math.random() * 3e3
                                                  ) +
                                                    1e5) *
                                                    l.productsQuantity,
                                              }),
                                            }),
                                            a.jsxs("p", {
                                              className:
                                                "text-sm font-medium text-gray-900 dark:text-white",
                                              children: [
                                                "  ",
                                                a.jsx(Pe, {
                                                  price:
                                                    l.price *
                                                    l.productsQuantity,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "flex mb-2",
                              children: [
                                a.jsx("div", {
                                  className: "flex min-w-24 dark:text-white",
                                  children: a.jsx(sg, {
                                    productsQuantity: l.productsQuantity,
                                    increaseQuantity: () => n(l._id),
                                    decreaseQuantity: () => r(l._id),
                                  }),
                                }),
                                a.jsxs("div", {
                                  className:
                                    "ml-4 flex flex-1 sm:ml-6 dark:text-white",
                                  children: [
                                    a.jsx("button", {
                                      className: "font-medium mr-4 ",
                                      type: "button",
                                      children: "SAVE FOR LATTER",
                                    }),
                                    a.jsx("button", {
                                      className: "font-medium ",
                                      onClick: () => t(l._id),
                                      type: "button",
                                      children: "REMOVE",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        l._id
                      )
                    ),
                  }),
                ],
              }),
              a.jsxs("section", {
                "aria-labelledby": "summary-heading",
                className:
                  "mt-16 rounded-md bg-white dark:bg-slate-600 lg:col-span-4 lg:mt-0 lg:p-0",
                children: [
                  a.jsx("h2", {
                    id: "summary-heading",
                    className:
                      " px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 dark:text-gray-200",
                    children: "Price Details",
                  }),
                  a.jsx("div", {
                    children: a.jsxs("dl", {
                      className: " space-y-1  px-6 py-4 sm:p-6",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            a.jsxs("dt", {
                              className:
                                "text-sm text-gray-800 dark:text-gray-200",
                              children: ["Price (", s, " item)"],
                            }),
                            a.jsx("dd", {
                              className:
                                "text-sm font-medium text-gray-900 dark:text-gray-100",
                              children: a.jsx(Pe, { price: i }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex items-center justify-between py-4",
                          children: [
                            a.jsx("dt", {
                              className:
                                "flex text-sm text-gray-800 dark:text-gray-200",
                              children: a.jsx("span", {
                                children: "Delivery Charges",
                              }),
                            }),
                            a.jsx("dd", {
                              className:
                                "text-sm font-medium text-green-700 dark:text-green-400",
                              children:
                                s > 0
                                  ? a.jsx(Pe, { price: o })
                                  : a.jsx(Pe, { price: 0 }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className:
                            "flex items-center justify-between py-4 border-y border-dashed ",
                          children: [
                            a.jsx("dt", {
                              className:
                                "text-base font-medium text-gray-900 dark:text-white",
                              children: "Total Amount",
                            }),
                            a.jsx("dd", {
                              className:
                                "text-base font-medium text-gray-900 dark:text-white",
                              children:
                                s > 0
                                  ? a.jsx(Pe, { price: o + i })
                                  : a.jsx(Pe, { price: 0 }),
                            }),
                          ],
                        }),
                        s > 0
                          ? a.jsx(Y, {
                              to: "/order",
                              children: a.jsxs("button", {
                                type: "submit",
                                className:
                                  "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",
                                children: [
                                  "Create Order",
                                  " ",
                                  a.jsx(Ji, { className: "ml-2", size: 16 }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  U9 = () =>
    a.jsx("div", {
      className: "w-full h-[70vh] bg-[#0f0429f1] text-white",
      children: a.jsxs("div", {
        className:
          "container flex flex-col items-center gap-8 mx-auto h-full pt-10",
        children: [
          a.jsx("h2", {
            className: "text-5xl font-extrabold",
            children: "404",
          }),
          a.jsx("h3", {
            className: "text-3xl font-bold",
            children:
              "Oops! Looks like you took a wrong turn. Let's get you back on track!",
          }),
          a.jsx(Y, {
            to: "/",
            className:
              "bg-blue-600 hover:bg-blue-700 px-3 py-1 text-lg font-semibold text-white rounded-md",
            children: "Home",
          }),
        ],
      }),
    });
var Ed = {},
  B9 = it;
Object.defineProperty(Ed, "__esModule", { value: !0 });
var Lu = (Ed.default = void 0),
  W9 = B9(ot()),
  V9 = a,
  q9 = (0, W9.default)(
    (0, V9.jsx)("path", {
      d: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z",
    }),
    "ShoppingBag"
  );
Lu = Ed.default = q9;
const Q9 = (e, t) => {
    switch (t.type) {
      case "SET_AUTH_USER":
        return {
          ...e,
          isAuthenticated: t.payload.isAuthenticated,
          userProfile: t.payload.userProfile,
        };
      default:
        return { ...e };
    }
  },
  lg = b.createContext(),
  pa = {
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || !1,
    userProfile: JSON.parse(localStorage.getItem("userProfile")) || {},
  },
  K9 = ({ children: e }) => {
    const t = "https://shopzilla-z3p7.onrender.com/api/v1",
      [n, r] = b.useReducer(Q9, pa),
      i = (d, f) => {
        localStorage.setItem("isAuthenticated", JSON.stringify(d)),
          localStorage.setItem("userProfile", JSON.stringify(f)),
          r({
            type: "SET_AUTH_USER",
            payload: { isAuthenticated: d, userProfile: f },
          });
      },
      o = (d) => {
        localStorage.setItem("token", d);
      },
      s = () => {
        localStorage.removeItem("token");
      },
      l = () => localStorage.getItem("token"),
      u = () => !!localStorage.getItem("token"),
      c = async () => {
        try {
          await bt.get(`${t}/logout`),
            s(),
            localStorage.removeItem("isAuthenticated"),
            localStorage.removeItem("userProfile"),
            i(!1, {}),
            (window.location.href = "/signin");
        } catch (d) {
          console.error(d);
        }
      };
    return (
      b.useEffect(() => {
        const d = JSON.parse(localStorage.getItem("isAuthenticated")),
          f = JSON.parse(localStorage.getItem("userProfile"));
        (d !== pa.isAuthenticated || f !== pa.userProfile) &&
          r({
            type: "SET_AUTH_USER",
            payload: { isAuthenticated: d, userProfile: f },
          });
      }, []),
      a.jsx(lg.Provider, {
        value: {
          ...n,
          setAuthStatusAndUserProfile: i,
          handleLogout: c,
          setToken: o,
          deleteToken: s,
          checkToken: u,
          getToken: l,
        },
        children: e,
      })
    );
  },
  _d = () => b.useContext(lg),
  G9 = ({ user: e, visible: t, onClose: n }) => {
    if (!t) return null;
    const { isAuthenticated: r, handleLogout: i } = _d();
    return (
      console.log("modal called", e),
      r &&
        a.jsx("section", {
          id: "modal-container",
          onClick: (o) => {
            o.target.id === "modal-container" && n();
          },
          className:
            "fixed z-50 text-white inset-0 bg-black bg-opacity-30 backdrop-blur flex justify-center items-center",
          children: a.jsxs("div", {
            className:
              "modal-body bg-gray-950  rounded-lg flex flex-col items-start px-16 py-8 space-y-3",
            children: [
              a.jsxs("h3", {
                className: "text-2xl",
                children: ["Name : ", (e == null ? void 0 : e.name) || "User"],
              }),
              a.jsx("img", {
                src: e == null ? void 0 : e.photo.secure_url,
                alt: "",
                className: "w-[200px] h-[200px] rounded-full object-fill",
              }),
              a.jsxs("p", {
                children: [
                  "Email :",
                  " ",
                  a.jsx("span", {
                    className: "text-sm underline text-blue-600",
                    children: e == null ? void 0 : e.email,
                  }),
                ],
              }),
              a.jsxs("p", {
                children: [
                  "Role :",
                  " ",
                  a.jsx("span", {
                    className: "text-sm  text-blue-600",
                    children:
                      (e == null ? void 0 : e.role) === "user"
                        ? "Customer"
                        : "Admin",
                  }),
                ],
              }),
              a.jsx("button", {
                type: "button",
                onClick: i,
                className:
                  "mx-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                children: "Logout",
              }),
            ],
          }),
        })
    );
  },
  X9 = () => {
    var y;
    const e = "https://shopzilla-z3p7.onrender.com/api/v1",
      [t, n] = b.useState(!1),
      { total_item: r } = bd(),
      {
        isAuthenticated: i,
        userProfile: o,
        handleLogout: s,
        getToken: l,
      } = _d(),
      [u, c] = b.useState(!1),
      [d, f] = b.useState(null),
      h = async () => {
        console.log("calling user");
        try {
          const m = l(),
            w = await bt.get(`${e}/userdashboard`, {
              headers: { Authorization: `Bearer ${m}` },
            });
          console.log(w), f(w.data.user);
        } catch (m) {
          console.log(m);
        }
        c(!0);
      },
      v = () => {
        c(!1);
      };
    return a.jsxs("nav", {
      className: "md:basis-[40%]",
      children: [
        a.jsx("div", {
          className: "",
          children: a.jsxs("ul", {
            className: "hidden md:flex list-none  text-white justify-between",
            children: [
              a.jsx("li", {
                children: a.jsx(Y, { to: "/", children: "Home" }),
              }),
              a.jsx("li", {
                children: a.jsx(Y, { to: "/about", children: "About" }),
              }),
              a.jsx("li", {
                children: a.jsx(Y, { to: "/products", children: "Products" }),
              }),
              a.jsx("li", {
                children: a.jsx(Y, { to: "/contact", children: "Contact" }),
              }),
              i &&
                a.jsx("li", {
                  children: a.jsx(Y, {
                    to: "/myorders",
                    children: "My orders",
                  }),
                }),
              a.jsx("li", {
                children: a.jsxs(Y, {
                  to: "/cart",
                  className: "relative",
                  children: [
                    a.jsx(Lu, { className: "" }),
                    a.jsx("span", {
                      className:
                        "absolute top-[-0.2rem] right-[-0.5rem] z-10 bg-yellow-300 text-black rounded-full w-5 h-5 text-center text-sm",
                      children: r,
                    }),
                  ],
                }),
              }),
              i
                ? a.jsx("li", {
                    onClick: h,
                    children: a.jsxs(Y, {
                      className: "relative",
                      children: [
                        a.jsx("img", {
                          className: "h-9 w-9 rounded-full object-cover ",
                          src: `${
                            (y = o == null ? void 0 : o.photo) == null
                              ? void 0
                              : y.secure_url
                          }`,
                          alt: "Dan_Abromov",
                        }),
                        a.jsx("span", {
                          className:
                            "absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-1 ring-white",
                        }),
                      ],
                    }),
                  })
                : a.jsx("li", {
                    children: a.jsxs(Y, {
                      to: "/signin",
                      className: "relative",
                      children: [
                        a.jsx("img", {
                          className: "h-9 w-9 rounded-full object-cover ",
                          src: "https://eliaslealblog.files.wordpress.com/2014/03/user-200.png?w=700",
                          alt: "Dan_Abromov",
                        }),
                        a.jsx("span", {
                          className:
                            "absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-1 ring-white",
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        }),
        a.jsxs("div", {
          className: "md:hidden  ",
          children: [
            a.jsx("button", {
              onClick: () => {
                n(!t);
              },
              type: "button",
              children: a.jsx("img", { src: t ? A2 : L2, alt: "" }),
            }),
            a.jsx("div", {
              className: ` ${
                t ? "absolute " : "hidden "
              }w-[100vw] h-40 bg-primary-500 inset-0 top-16 z-50`,
              children: a.jsxs("ul", {
                className:
                  "list-none flex flex-col items-center gap-2 text-white justify-between",
                children: [
                  a.jsx("li", {
                    children: a.jsx(Y, {
                      to: "/",
                      onClick: () => {
                        n(!t);
                      },
                      children: "Home",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx(Y, {
                      to: "/about",
                      onClick: () => {
                        n(!t);
                      },
                      children: "About",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx(Y, {
                      to: "/products",
                      onClick: () => {
                        n(!t);
                      },
                      children: "Products",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx(Y, {
                      to: "/contact",
                      onClick: () => {
                        n(!t);
                      },
                      children: "Contact",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsxs(Y, {
                      to: "/cart",
                      className: "relative",
                      onClick: () => {
                        n(!t);
                      },
                      children: [
                        a.jsx(Lu, { className: "" }),
                        a.jsx("span", {
                          className:
                            "absolute top-[-0.2rem] right-[-0.5rem] z-10 bg-yellow-300 text-black rounded-full w-5 h-5 text-center text-sm p-1",
                          children: r,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsx(G9, { user: d, onClose: v, visible: u }),
      ],
    });
  },
  Y9 = () =>
    a.jsxs("header", {
      className: "bg-black flex justify-between items-center px-6 relative",
      children: [
        a.jsx(Y, {
          to: "/",
          children: a.jsx("img", {
            src: I2,
            alt: "",
            className: "w-[200px] h-[70px] px-6 py-0",
          }),
        }),
        a.jsx(X9, {}),
      ],
    }),
  J9 = [
    { id: 1, title: "Help support" },
    { id: 2, title: "Warranty" },
    { id: 3, title: "Product Help" },
    { id: 4, title: "Order Status" },
  ],
  Z9 = [
    { id: 1, title: "Bulk Orders" },
    { id: 2, title: "Custom Product" },
    { id: 3, title: "Recycling" },
    { id: 4, title: "Sound Advice" },
  ],
  eb = [
    { id: 1, title: "About" },
    { id: 2, title: "Born in PC" },
    { id: 3, title: "Careers" },
    { id: 4, title: "Contact Us" },
  ],
  tb = () =>
    a.jsx(a.Fragment, {
      children: a.jsxs("footer", {
        className: "bg-primary-500 w-full text-white px-6 py-16 relative",
        children: [
          a.jsxs("div", {
            className:
              " flex flex-wrap gap-6 flex-col md:flex-row md:gap-3 my-5",
            children: [
              a.jsx("a", {
                href: "/",
                className: "object-contain basis-[20%] mx-auto ",
                children: a.jsx("img", {
                  src: M2,
                  alt: "Compay_Logo",
                  className: "w-[120px] h-[120px] ",
                }),
              }),
              a.jsxs("div", {
                className:
                  "footer_container flex justify-between basis-[40%] max-w-[560px] mx-auto",
                children: [
                  a.jsx("ul", {
                    className: "list-none mx-6",
                    children: J9.map((e) =>
                      a.jsxs(
                        "li",
                        {
                          className: "hover:text-gray-400",
                          children: [" ", e.title],
                        },
                        e.id
                      )
                    ),
                  }),
                  a.jsx("ul", {
                    className: "list-none mx-6",
                    children: Z9.map((e) =>
                      a.jsxs(
                        "li",
                        {
                          className: "hover:text-gray-400",
                          children: [" ", e.title],
                        },
                        e.id
                      )
                    ),
                  }),
                  a.jsx("ul", {
                    className: "list-none mx-6",
                    children: eb.map((e) =>
                      a.jsxs(
                        "li",
                        {
                          className: "hover:text-gray-400",
                          children: [" ", e.title],
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "Followus basis-[20%] mx-auto",
                children: [
                  a.jsx("h1", {
                    className: "text-3xl font-extrabold ",
                    children: "Follow Us",
                  }),
                  a.jsxs("div", {
                    className: "flex  my-4 ",
                    children: [
                      a.jsx("img", {
                        className: "w-[50px] h-[50px] cursor-pointer ",
                        src: $2,
                        alt: "",
                      }),
                      a.jsx("img", {
                        className: "w-[50px] h-[50px] cursor-pointer",
                        src: z2,
                        alt: "",
                      }),
                      a.jsx("img", {
                        className: "w-[50px] h-[50px] cursor-pointer",
                        src: D2,
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx("hr", { className: "mx-5" }),
          a.jsx("div", { className: "sub-footer" }),
        ],
      }),
    });
let nb = { data: "" },
  rb = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || nb,
  ib = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  ob = /\/\*[^]*?\*\/|  +/g,
  qp = /\n+/g,
  ln = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let o in e) {
      let s = e[o];
      o[0] == "@"
        ? o[1] == "i"
          ? (n = o + " " + s + ";")
          : (r +=
              o[1] == "f"
                ? ln(s, o)
                : o + "{" + ln(s, o[1] == "k" ? "" : t) + "}")
        : typeof s == "object"
        ? (r += ln(
            s,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  o.replace(/(^:.*)|([^,])+/g, (u) =>
                    /&/.test(u) ? u.replace(/&/g, l) : l ? l + " " + u : u
                  )
                )
              : o
          ))
        : s != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (i += ln.p ? ln.p(o, s) : o + ":" + s + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  zt = {},
  ag = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + ag(e[n]);
      return t;
    }
    return e;
  },
  sb = (e, t, n, r, i) => {
    let o = ag(e),
      s =
        zt[o] ||
        (zt[o] = ((u) => {
          let c = 0,
            d = 11;
          for (; c < u.length; ) d = (101 * d + u.charCodeAt(c++)) >>> 0;
          return "go" + d;
        })(o));
    if (!zt[s]) {
      let u =
        o !== e
          ? e
          : ((c) => {
              let d,
                f,
                h = [{}];
              for (; (d = ib.exec(c.replace(ob, ""))); )
                d[4]
                  ? h.shift()
                  : d[3]
                  ? ((f = d[3].replace(qp, " ").trim()),
                    h.unshift((h[0][f] = h[0][f] || {})))
                  : (h[0][d[1]] = d[2].replace(qp, " ").trim());
              return h[0];
            })(e);
      zt[s] = ln(i ? { ["@keyframes " + s]: u } : u, n ? "" : "." + s);
    }
    let l = n && zt.g ? zt.g : null;
    return (
      n && (zt.g = zt[s]),
      ((u, c, d, f) => {
        f
          ? (c.data = c.data.replace(f, u))
          : c.data.indexOf(u) === -1 && (c.data = d ? u + c.data : c.data + u);
      })(zt[s], t, r, l),
      s
    );
  },
  lb = (e, t, n) =>
    e.reduce((r, i, o) => {
      let s = t[o];
      if (s && s.call) {
        let l = s(n),
          u = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        s = u
          ? "." + u
          : l && typeof l == "object"
          ? l.props
            ? ""
            : ln(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + i + (s ?? "");
    }, "");
function wl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return sb(
    n.unshift
      ? n.raw
        ? lb(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    rb(t.target),
    t.g,
    t.o,
    t.k
  );
}
let ug, Au, Iu;
wl.bind({ g: 1 });
let Xt = wl.bind({ k: 1 });
function ab(e, t, n, r) {
  (ln.p = t), (ug = e), (Au = n), (Iu = r);
}
function Cn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(o, s) {
      let l = Object.assign({}, o),
        u = l.className || i.className;
      (n.p = Object.assign({ theme: Au && Au() }, l)),
        (n.o = / *go\d+/.test(u)),
        (l.className = wl.apply(n, r) + (u ? " " + u : "")),
        t && (l.ref = s);
      let c = e;
      return (
        e[0] && ((c = l.as || e), delete l.as), Iu && c[0] && Iu(l), ug(c, l)
      );
    }
    return t ? t(i) : i;
  };
}
var ub = (e) => typeof e == "function",
  As = (e, t) => (ub(e) ? e(t) : e),
  cb = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  cg = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  db = 20,
  Wo = new Map(),
  fb = 1e3,
  Qp = (e) => {
    if (Wo.has(e)) return;
    let t = setTimeout(() => {
      Wo.delete(e), Wn({ type: 4, toastId: e });
    }, fb);
    Wo.set(e, t);
  },
  pb = (e) => {
    let t = Wo.get(e);
    t && clearTimeout(t);
  },
  Mu = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, db) };
      case 1:
        return (
          t.toast.id && pb(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((o) => o.id === n.id)
          ? Mu(e, { type: 1, toast: n })
          : Mu(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? Qp(r)
            : e.toasts.forEach((o) => {
                Qp(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === r || r === void 0 ? { ...o, visible: !1 } : o
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + i,
          })),
        };
    }
  },
  Vo = [],
  qo = { toasts: [], pausedAt: void 0 },
  Wn = (e) => {
    (qo = Mu(qo, e)),
      Vo.forEach((t) => {
        t(qo);
      });
  },
  hb = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  mb = (e = {}) => {
    let [t, n] = b.useState(qo);
    b.useEffect(
      () => (
        Vo.push(n),
        () => {
          let i = Vo.indexOf(n);
          i > -1 && Vo.splice(i, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((i) => {
      var o, s;
      return {
        ...e,
        ...e[i.type],
        ...i,
        duration:
          i.duration ||
          ((o = e[i.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          hb[i.type],
        style: {
          ...e.style,
          ...((s = e[i.type]) == null ? void 0 : s.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  gb = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || cb(),
  }),
  Zi = (e) => (t, n) => {
    let r = gb(t, e, n);
    return Wn({ type: 2, toast: r }), r.id;
  },
  Je = (e, t) => Zi("blank")(e, t);
Je.error = Zi("error");
Je.success = Zi("success");
Je.loading = Zi("loading");
Je.custom = Zi("custom");
Je.dismiss = (e) => {
  Wn({ type: 3, toastId: e });
};
Je.remove = (e) => Wn({ type: 4, toastId: e });
Je.promise = (e, t, n) => {
  let r = Je.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (i) => (
          Je.success(As(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          i
        )
      )
      .catch((i) => {
        Je.error(As(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var yb = (e, t) => {
    Wn({ type: 1, toast: { id: e, height: t } });
  },
  vb = () => {
    Wn({ type: 5, time: Date.now() });
  },
  xb = (e) => {
    let { toasts: t, pausedAt: n } = mb(e);
    b.useEffect(() => {
      if (n) return;
      let o = Date.now(),
        s = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let u = (l.duration || 0) + l.pauseDuration - (o - l.createdAt);
          if (u < 0) {
            l.visible && Je.dismiss(l.id);
            return;
          }
          return setTimeout(() => Je.dismiss(l.id), u);
        });
      return () => {
        s.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = b.useCallback(() => {
        n && Wn({ type: 6, time: Date.now() });
      }, [n]),
      i = b.useCallback(
        (o, s) => {
          let {
              reverseOrder: l = !1,
              gutter: u = 8,
              defaultPosition: c,
            } = s || {},
            d = t.filter(
              (v) => (v.position || c) === (o.position || c) && v.height
            ),
            f = d.findIndex((v) => v.id === o.id),
            h = d.filter((v, y) => y < f && v.visible).length;
          return d
            .filter((v) => v.visible)
            .slice(...(l ? [h + 1] : [0, h]))
            .reduce((v, y) => v + (y.height || 0) + u, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: yb,
        startPause: vb,
        endPause: r,
        calculateOffset: i,
      },
    };
  },
  wb = Xt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Sb = Xt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  bb = Xt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  jb = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Sb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  kb = Xt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Cb = Cn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${kb} 1s linear infinite;
`,
  Eb = Xt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  _b = Xt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Ob = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Eb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_b} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Nb = Cn("div")`
  position: absolute;
`,
  Pb = Cn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Rb = Xt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Tb = Cn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Rb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Lb = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? b.createElement(Tb, null, t)
        : t
      : n === "blank"
      ? null
      : b.createElement(
          Pb,
          null,
          b.createElement(Cb, { ...r }),
          n !== "loading" &&
            b.createElement(
              Nb,
              null,
              n === "error"
                ? b.createElement(jb, { ...r })
                : b.createElement(Ob, { ...r })
            )
        );
  },
  Ab = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Ib = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Mb = "0%{opacity:0;} 100%{opacity:1;}",
  zb = "0%{opacity:1;} 100%{opacity:0;}",
  Db = Cn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  $b = Cn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Fb = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, i] = cg() ? [Mb, zb] : [Ab(n), Ib(n)];
    return {
      animation: t
        ? `${Xt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Xt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Hb = b.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? Fb(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = b.createElement(Lb, { toast: e }),
      s = b.createElement($b, { ...e.ariaProps }, As(e.message, e));
    return b.createElement(
      Db,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: s })
        : b.createElement(b.Fragment, null, o, s)
    );
  });
ab(b.createElement);
var Ub = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let o = b.useCallback(
      (s) => {
        if (s) {
          let l = () => {
            let u = s.getBoundingClientRect().height;
            r(e, u);
          };
          l(),
            new MutationObserver(l).observe(s, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return b.createElement("div", { ref: o, className: t, style: n }, i);
  },
  Bb = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: cg() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  Wb = wl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  jo = 16,
  Vb = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: o,
    containerClassName: s,
  }) => {
    let { toasts: l, handlers: u } = xb(n);
    return b.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: jo,
          left: jo,
          right: jo,
          bottom: jo,
          pointerEvents: "none",
          ...o,
        },
        className: s,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      l.map((c) => {
        let d = c.position || t,
          f = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          h = Bb(d, f);
        return b.createElement(
          Ub,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? Wb : "",
            style: h,
          },
          c.type === "custom"
            ? As(c.message, c)
            : i
            ? i(c)
            : b.createElement(Hb, { toast: c, position: d })
        );
      })
    );
  },
  vt = Je;
const qb = () => {
    const { setAuthStatusAndUserProfile: e, setToken: t } = _d(),
      n = "https://shopzilla-z3p7.onrender.com/api/v1",
      r = Js(),
      [i, o] = b.useState(""),
      [s, l] = b.useState(""),
      u = async (d) => {
        d.preventDefault();
        try {
          const f = await bt.post(`${n}/login`, { email: i, password: s });
          f.status === 200
            ? (console.log(f),
              vt.success("Login successful"),
              t(f.data.token),
              e(!0, f.data.user),
              r("/"))
            : (!i || !s) && vt.error("Please provide email and password");
        } catch {
          vt.error("Email or Password does not match or exist");
        }
      },
      c = async (d) => {
        if ((d.preventDefault(), i))
          try {
            const h = await (
              await fetch(`${n}/forgotpassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: i }),
              })
            ).json();
            vt.success("Check your Gmail");
          } catch (f) {
            vt.error("Please register first"), console.error(f);
          }
        else vt.error("Provide Email'Id first");
      };
    return a.jsx("section", {
      className: "bg-white",
      children: a.jsx("div", {
        className:
          "flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",
        children: a.jsxs("div", {
          className: "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",
          children: [
            a.jsx("h2", {
              className:
                "text-center text-2xl font-bold leading-tight text-black",
              children: "Sign in to your account",
            }),
            a.jsxs("p", {
              className: "mt-2 text-center text-sm text-gray-600 ",
              children: [
                "Don't have an account?",
                " ",
                a.jsx("button", {
                  onClick: () => r("/signup"),
                  className:
                    "font-semibold text-black transition-all duration-200 hover:underline",
                  children: "Create a free account",
                }),
              ],
            }),
            a.jsx("form", {
              onSubmit: u,
              className: "mt-8",
              children: a.jsxs("div", {
                className: "space-y-5",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        htmlFor: "",
                        className: "text-base font-medium text-gray-900",
                        children: [" ", "Email address", " "],
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "email",
                          name: "email",
                          value: i,
                          placeholder: "Email",
                          onChange: (d) => o(d.target.value),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          a.jsxs("label", {
                            htmlFor: "",
                            className: "text-base font-medium text-gray-900",
                            children: [" ", "Password", " "],
                          }),
                          a.jsxs("button", {
                            onClick: c,
                            type: "button",
                            className:
                              "text-sm font-semibold text-black hover:underline",
                            children: [" ", "Forgot password?", " "],
                          }),
                        ],
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "password",
                          name: "password",
                          value: s,
                          onChange: (d) => l(d.target.value),
                          placeholder: "Password",
                        }),
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    children: a.jsxs("button", {
                      type: "submit",
                      className:
                        "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",
                      children: [
                        "Get started",
                        " ",
                        a.jsx(Ji, { className: "ml-2", size: 16 }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Qb = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(""),
      [i, o] = b.useState(""),
      [s, l] = b.useState(null),
      u = Js(),
      c = (y) => {
        t(y.target.value);
      },
      d = (y) => {
        r(y.target.value);
      },
      f = (y) => {
        o(y.target.value);
      },
      h = (y) => {
        l(y.target.files[0]);
      },
      v = async (y) => {
        y.preventDefault();
        const m = "https://shopzilla-z3p7.onrender.com/api/v1";
        !e || !n || !i || !s
          ? vt.error("All fields are required")
          : i.length < 8 && vt.error("Password should have 8 Characters"),
          console.log(e, n, i, s);
        const w = new FormData();
        w.append("name", e),
          w.append("email", n),
          w.append("password", i),
          w.append("photo", s),
          console.log(w, " ", "  method calling ");
        try {
          const g = await bt.post(`${m}/signup`, w, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(g),
            g.status === 200 && (vt.success("Successfully registered"), u("/"));
        } catch (g) {
          console.log(g.response);
        }
      };
    return a.jsx("section", {
      className: "bg-white",
      children: a.jsx("div", {
        className:
          "flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",
        children: a.jsxs("div", {
          className: "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",
          children: [
            a.jsx("h2", {
              className:
                "text-center text-2xl font-bold leading-tight text-black",
              children: "Sign up to create account",
            }),
            a.jsxs("p", {
              className: "mt-2 text-center text-base text-gray-600",
              children: [
                "Already have an account?",
                " ",
                a.jsx("button", {
                  onClick: () => u("/signin"),
                  className:
                    "font-medium text-black transition-all duration-200 hover:underline",
                  children: "Sign In",
                }),
              ],
            }),
            a.jsx("form", {
              onSubmit: v,
              children: a.jsxs("div", {
                className: "space-y-5",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        htmlFor: "name",
                        className: "text-base font-medium text-gray-900",
                        children: [" ", "Full Name", " "],
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "text",
                          placeholder: "Full Name",
                          id: "name",
                          value: e,
                          onChange: c,
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        htmlFor: "email",
                        className: "text-base font-medium text-gray-900",
                        children: [" ", "Email address", " "],
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "email",
                          placeholder: "Email",
                          id: "email",
                          value: n,
                          onChange: d,
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "flex items-center justify-between",
                        children: a.jsxs("label", {
                          htmlFor: "password",
                          className: "text-base font-medium text-gray-900",
                          children: [" ", "Password", " "],
                        }),
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "password",
                          placeholder: "Password",
                          id: "password",
                          value: i,
                          onChange: f,
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "flex items-center justify-between",
                        children: a.jsxs("label", {
                          htmlFor: "file",
                          className: "text-base font-medium text-gray-900",
                          children: [" ", "Profile photo", " "],
                        }),
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "file",
                          id: "photo",
                          name: "photo",
                          onChange: h,
                        }),
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    children: a.jsxs("button", {
                      type: "submit",
                      className:
                        "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",
                      children: [
                        "Create Account",
                        " ",
                        a.jsx(Ji, { className: "ml-2", size: 16 }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Kb = () => {
    const e = "https://shopzilla-z3p7.onrender.com/api/v1",
      [t, n] = b.useState(""),
      [r, i] = b.useState(""),
      { token: o } = Ac(),
      s = async (l) => {
        if ((l.preventDefault(), t !== r)) {
          alert("Password and Confirm Password do not match");
          return;
        }
        try {
          const u = await bt.post(`${e}/password/reset/${o}`, {
            password: t,
            confirmPassword: r,
          });
          console.log(u.data), history("/signin");
        } catch (u) {
          console.error(u);
        }
      };
    return a.jsx("section", {
      className: "bg-white",
      children: a.jsx("div", {
        className:
          "flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",
        children: a.jsxs("div", {
          className: "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",
          children: [
            a.jsx("div", {
              className: "mb-2 flex justify-center",
              children: a.jsx("svg", {
                width: "50",
                height: "56",
                viewBox: "0 0 50 56",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: a.jsx("path", {
                  d: "M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",
                  fill: "black",
                }),
              }),
            }),
            a.jsx("h2", {
              className:
                "text-center text-2xl font-bold leading-tight text-black",
              children: "Sign in to your account",
            }),
            a.jsxs("p", {
              className: "mt-2 text-center text-sm text-gray-600 ",
              children: [
                "Don't have an account?",
                " ",
                a.jsx("button", {
                  onClick: () => history("/signup"),
                  className:
                    "font-semibold text-black transition-all duration-200 hover:underline",
                  children: "Create a free account",
                }),
              ],
            }),
            a.jsx("form", {
              className: "mt-8",
              onSubmit: s,
              children: a.jsxs("div", {
                className: "space-y-5",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        htmlFor: "password",
                        className: "text-base font-medium text-gray-900",
                        children: [" ", "Password", " "],
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "text",
                          name: "password",
                          value: t,
                          placeholder: "Password",
                          onChange: (l) => n(l.target.value),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "flex items-center justify-between",
                        children: a.jsxs("label", {
                          htmlFor: "confirmpassword",
                          className: "text-base font-medium text-gray-900",
                          children: [" ", "Confirm Password", " "],
                        }),
                      }),
                      a.jsx("div", {
                        className: "mt-2",
                        children: a.jsx("input", {
                          className:
                            "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                          type: "password",
                          name: "confirmPassword",
                          id: "confirmpassword",
                          value: r,
                          onChange: (l) => i(l.target.value),
                          placeholder: "Password",
                        }),
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    children: a.jsxs("button", {
                      type: "submit",
                      className:
                        "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",
                      children: [
                        "Continue",
                        " ",
                        a.jsx(Ji, { className: "ml-2", size: 16 }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Gb = () => {
    const e = Js(),
      t = localStorage.getItem("token"),
      n = "https://shopzilla-z3p7.onrender.com/api/v1",
      [r, i] = b.useState({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
      }),
      [o, s] = b.useState([]),
      [l, u] = b.useState(0),
      [c, d] = b.useState(0),
      [f, h] = b.useState(0);
    b.useEffect(() => {
      const m = JSON.parse(localStorage.getItem("productCart")),
        w = m.map((p) => ({
          name: p.name,
          quantity: p.productsQuantity,
          image: p.image,
          price: p.price,
          product: p._id.split("#")[0],
          color: p.pickColor,
        })),
        g = m.reduce((p, x) => p + x.price * x.productsQuantity, 0);
      u(g * 0.1), d(m.length * 10), h(g + l + c), s(w);
    }, []);
    const v = b.useRef(null),
      y = async () => {
        try {
          const m = await bt.post(
            `${n}/create/order`,
            {
              shippingInfo: r,
              orderItems: o,
              paymentInfo: null,
              taxAmount: l,
              shippingAmount: c,
              totalAmount: f,
            },
            { headers: { Authorization: `Bearer ${t}` } }
          );
          console.log(m.data),
            (v.current = m.data.order._id),
            console.log(m.data.order._id);
          const w = m.data.order.paymentInfo,
            g = document.createElement("script");
          (g.src = "https://checkout.razorpay.com/v1/checkout.js"),
            (g.async = !0),
            (g.onload = async function () {
              new window.Razorpay({
                key: "rzp_test_RZZjkWLyMb6I1E",
                amount: f * 100,
                currency: "INR",
                name: "ShopZilla",
                description: "Payment for order",
                order_id: w,
                prefill: {
                  name: r.name,
                  email: "ShopzillaSupport@gmail.com",
                  contact: "YOUR_PHONE_NUMBER",
                },
                handler: async function (x) {
                  try {
                    console.log("orderId", v.current),
                      console.log("response", x);
                    const S = await bt.put(
                      `${n}/orders/${v.current}`,
                      { paymentInfo: x.razorpay_payment_id },
                      { headers: { Authorization: `Bearer ${t}` } }
                    );
                    console.log(S.data),
                      vt.success("Order is placed"),
                      e(`/order_details/${S.data.order._id}`);
                  } catch (S) {
                    vt.error("Try again"),
                      console.error(S),
                      setPaymentError(
                        "Something went wrong. Please try again later."
                      );
                  }
                },
              }).open();
            }),
            document.body.appendChild(g);
        } catch (m) {
          console.error(m),
            setPaymentError("Something went wrong. Please try again later.");
        }
      };
    return a.jsx("div", {
      className: "mx-auto p-5 my-4 max-w-4xl md:my-6 bg-white",
      children: a.jsx("div", {
        className: "overflow-hidden  rounded-xl shadow",
        children: a.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2",
          children: [
            a.jsx("div", {
              className: "px-5 py-6 text-gray-900 md:px-8",
              children: a.jsx("div", {
                className: "flow-root",
                children: a.jsx("div", {
                  className: "-my-6 divide-y divide-gray-200",
                  children: a.jsx("div", {
                    className: "py-6",
                    children: a.jsx("form", {
                      children: a.jsxs("div", {
                        className:
                          "mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0",
                        children: [
                          a.jsxs("div", {
                            children: [
                              a.jsx("h3", {
                                id: "contact-info-heading",
                                className:
                                  "text-lg font-semibold text-gray-900",
                                children: "Contact information",
                              }),
                              a.jsxs("div", {
                                className: "mt-4 w-full",
                                children: [
                                  a.jsx("label", {
                                    className:
                                      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                    htmlFor: "name",
                                    children: "Full Name",
                                  }),
                                  a.jsx("input", {
                                    className:
                                      "flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                                    type: "text",
                                    placeholder: "Enter your name",
                                    id: "name",
                                    name: "name",
                                    value: r.name,
                                    onChange: (m) =>
                                      i({ ...r, name: m.target.value }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsx("hr", { className: "my-8" }),
                          a.jsxs("div", {
                            className: "mt-10",
                            children: [
                              a.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-900",
                                children: "Shipping address",
                              }),
                              a.jsxs("div", {
                                className:
                                  "mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3",
                                children: [
                                  a.jsxs("div", {
                                    className: "sm:col-span-3",
                                    children: [
                                      a.jsx("label", {
                                        htmlFor: "address",
                                        className:
                                          "block text-sm font-medium text-gray-700",
                                        children: "Address",
                                      }),
                                      a.jsx("div", {
                                        className: "mt-1",
                                        children: a.jsx("input", {
                                          type: "text",
                                          id: "address",
                                          name: "address",
                                          autoComplete: "street-address",
                                          className:
                                            "flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                                          value: r.address,
                                          onChange: (m) =>
                                            i({
                                              ...r,
                                              address: m.target.value,
                                            }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        htmlFor: "city",
                                        className:
                                          "block text-sm font-medium text-gray-700",
                                        children: "City",
                                      }),
                                      a.jsx("div", {
                                        className: "mt-1",
                                        children: a.jsx("input", {
                                          type: "text",
                                          id: "city",
                                          name: "city",
                                          autoComplete: "address-level2",
                                          value: r.city,
                                          onChange: (m) =>
                                            i({ ...r, city: m.target.value }),
                                          className:
                                            "flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        htmlFor: "state",
                                        className:
                                          "block text-sm font-medium text-gray-700",
                                        children: "State / Province",
                                      }),
                                      a.jsx("div", {
                                        className: "mt-1",
                                        children: a.jsx("input", {
                                          type: "text",
                                          id: "state",
                                          name: "state",
                                          autoComplete: "address-level1",
                                          value: r.state,
                                          onChange: (m) =>
                                            i({ ...r, state: m.target.value }),
                                          className:
                                            "flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        htmlFor: "postalCode",
                                        className:
                                          "block text-sm font-medium text-gray-700",
                                        children: "Postal code",
                                      }),
                                      a.jsx("div", {
                                        className: "mt-1",
                                        children: a.jsx("input", {
                                          type: "text",
                                          id: "postalCode",
                                          name: "postalCode",
                                          autoComplete: "postal-code",
                                          value: r.postalCode,
                                          onChange: (m) =>
                                            i({
                                              ...r,
                                              postalCode: m.target.value,
                                            }),
                                          className:
                                            "flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsx("div", {
                            className:
                              "mt-10 flex justify-end border-t border-gray-200 pt-6",
                            children: a.jsx("button", {
                              onClick: y,
                              type: "button",
                              className:
                                "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                              children: "Make payment",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
            a.jsxs("div", {
              className: "bg-gray-100 px-5 py-6 md:px-8",
              children: [
                a.jsx("div", {
                  className: "flow-root",
                  children: a.jsx("ul", {
                    className: "-my-7 divide-y divide-gray-200",
                    children: o.map((m) =>
                      a.jsxs(
                        "li",
                        {
                          className:
                            "flex items-stretch justify-between space-x-5 py-7",
                          children: [
                            a.jsxs("div", {
                              className: "flex flex-1 items-stretch",
                              children: [
                                a.jsx("div", {
                                  className: "flex-shrink-0",
                                  children: a.jsx("img", {
                                    className:
                                      "h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain",
                                    src: m.image,
                                    alt: m.image,
                                  }),
                                }),
                                a.jsxs("div", {
                                  className:
                                    "ml-5 flex flex-col justify-between",
                                  children: [
                                    a.jsx("div", {
                                      className: "flex-1",
                                      children: a.jsx("p", {
                                        className: "text-sm font-bold",
                                        children: m.name,
                                      }),
                                    }),
                                    a.jsx("p", {
                                      className: "mt-4 text-xs font-medium ",
                                      children: "x 1",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className:
                                "ml-auto flex flex-col items-end justify-between",
                              children: [
                                a.jsx("p", {
                                  className:
                                    "text-right text-sm font-bold text-gray-900",
                                  children: m.price,
                                }),
                                a.jsx("button", {
                                  type: "button",
                                  className:
                                    "-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",
                                  children: a.jsx("span", {
                                    className: "sr-only",
                                    children: "Remove",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        m.product
                      )
                    ),
                  }),
                }),
                a.jsx("hr", { className: "mt-6 border-gray-200" }),
                a.jsx("ul", {
                  className: "mt-6 space-y-3",
                  children: a.jsxs("li", {
                    className:
                      "flex items-center justify-between text-gray-900",
                    children: [
                      a.jsx("p", {
                        className: "text-sm font-medium ",
                        children: "Total",
                      }),
                      a.jsx("p", {
                        className: "text-sm font-bold ",
                        children: a.jsx(Pe, { price: f }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Xb = () => {
    const e = localStorage.getItem("token"),
      t = "https://shopzilla-z3p7.onrender.com/api/v1",
      { orderId: n } = Ac(),
      [r, i] = b.useState(null);
    return (
      b.useEffect(() => {
        (async () => {
          try {
            const s = await bt.get(`${t}/order_details/${n}`, {
              headers: { Authorization: `Bearer ${e}` },
            });
            i(s.data.order);
          } catch (s) {
            console.error(s);
          }
        })();
      }, [n]),
      console.log(r),
      r &&
        a.jsxs("div", {
          className: "mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0 bg-white",
          children: [
            a.jsx("h2", {
              className: "text-3xl font-bold",
              children: "Order Details",
            }),
            a.jsx("div", {
              className: "mt-3 text-sm",
              children:
                "Check the status of recent and old orders & discover more products",
            }),
            a.jsxs("div", {
              className:
                "mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row",
              children: [
                a.jsx("div", {
                  className:
                    "w-full border-r border-gray-300 bg-gray-100 md:max-w-xs",
                  children: a.jsx("div", {
                    className: "p-8",
                    children: a.jsxs("div", {
                      className:
                        "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1",
                      children: [
                        a.jsxs("div", {
                          className: "mb-4",
                          children: [
                            a.jsx("div", {
                              className: "text-sm font-semibold",
                              children: "Order ID",
                            }),
                            a.jsx("div", {
                              className: "text-sm font-medium text-gray-700",
                              children: r._id,
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "mb-4",
                          children: [
                            a.jsx("div", {
                              className: "text-sm font-semibold",
                              children: "Date",
                            }),
                            a.jsx("div", {
                              className: "text-sm font-medium text-gray-700",
                              children: r.createdAt.substring(0, 10),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "mb-4",
                          children: [
                            a.jsx("div", {
                              className: "text-sm font-semibold",
                              children: "Total amount",
                            }),
                            a.jsx("div", {
                              className: "text-sm font-medium text-gray-700",
                              children: a.jsx(Pe, { price: r.totalAmount }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "mb-4",
                          children: [
                            a.jsx("div", {
                              className: "text-sm font-semibold",
                              children: "Order status",
                            }),
                            a.jsx("div", {
                              className: "text-sm font-medium text-gray-700",
                              children: r.orderStatus,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                a.jsx("div", {
                  className: "flex-1",
                  children: a.jsxs("div", {
                    className: "p-8",
                    children: [
                      a.jsx("ul", {
                        className: "-my-7 divide-y divide-gray-200",
                        children: r.orderItems.map((o) =>
                          a.jsxs(
                            "li",
                            {
                              className:
                                "flex flex-col justify-between space-x-5 py-7 md:flex-row",
                              children: [
                                a.jsxs("div", {
                                  className: "flex flex-1 items-stretch",
                                  children: [
                                    a.jsx("div", {
                                      className: "flex-shrink-0",
                                      children: a.jsx("img", {
                                        className:
                                          "h-20 w-20 rounded-lg border border-gray-200 object-contain",
                                        src: o.image,
                                        alt: o.image,
                                      }),
                                    }),
                                    a.jsxs("div", {
                                      className:
                                        "ml-5 flex flex-col justify-between",
                                      children: [
                                        a.jsxs("div", {
                                          className: "flex-1",
                                          children: [
                                            a.jsx("p", {
                                              className:
                                                "text-sm font-bold text-gray-900",
                                              children: o.name,
                                            }),
                                            a.jsx("p", {
                                              className:
                                                "mt-1.5 text-sm font-medium text-gray-500 w-7 h-7 rounded-full",
                                              style: {
                                                backgroundColor: o.color,
                                              },
                                            }),
                                          ],
                                        }),
                                        a.jsxs("p", {
                                          className:
                                            "mt-4 text-sm font-medium text-gray-500",
                                          children: ["x ", o.quantity],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx("div", {
                                  className:
                                    "ml-auto flex flex-col items-end justify-between",
                                  children: a.jsx("p", {
                                    className:
                                      "text-right text-sm font-bold text-gray-900",
                                    children: a.jsx(Pe, { price: o.price }),
                                  }),
                                }),
                              ],
                            },
                            o._id
                          )
                        ),
                      }),
                      a.jsx("hr", {
                        className: "my-8 border-t border-t-gray-200",
                      }),
                      a.jsxs("div", {
                        className: "space-x-4",
                        children: [
                          a.jsx(Y, {
                            type: "button",
                            to: "/myorders",
                            className:
                              "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                            children: "View Orders",
                          }),
                          a.jsx("a", {
                            href: `${t}/orders/${r._id}/invoice`,
                            target: "_blank",
                            type: "button",
                            className:
                              "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                            children: "Download Invoice",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
    );
  },
  Yb = () => {
    const e = "https://shopzilla-z3p7.onrender.com/api/v1",
      [t, n] = b.useState(null);
    return (
      b.useEffect(() => {
        (async () => {
          try {
            const i = localStorage.getItem("token"),
              o = await bt.get(`${e}/myorder`, {
                headers: { Authorization: `Bearer ${i}` },
              });
            n(o.data.order);
          } catch (i) {
            console.error(i);
          }
        })();
      }, []),
      console.log(t),
      t &&
        a.jsx("div", {
          children: t.map((r) =>
            a.jsxs(
              "div",
              {
                className: "mx-auto my-4 max-w-6xl p-5 bg-white",
                children: [
                  a.jsx("h2", {
                    className: "text-3xl font-bold",
                    children: "Order Details",
                  }),
                  a.jsx("div", {
                    className: "mt-3 text-sm",
                    children:
                      "Check the status of recent and old orders & discover more products",
                  }),
                  a.jsxs("div", {
                    className:
                      "mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row",
                    children: [
                      a.jsx("div", {
                        className:
                          "w-full border-r border-gray-300 bg-gray-100 md:max-w-xs",
                        children: a.jsx("div", {
                          className: "p-8",
                          children: a.jsxs("div", {
                            className:
                              "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1",
                            children: [
                              a.jsxs("div", {
                                className: "mb-4",
                                children: [
                                  a.jsx("div", {
                                    className: "text-sm font-semibold",
                                    children: "Order ID",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: r._id,
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "mb-4",
                                children: [
                                  a.jsx("div", {
                                    className: "text-sm font-semibold",
                                    children: "Date",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: r.createdAt.substring(0, 10),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "mb-4",
                                children: [
                                  a.jsx("div", {
                                    className: "text-sm font-semibold",
                                    children: "Total amount",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: a.jsx(Pe, {
                                      price: r.totalAmount,
                                    }),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "mb-4",
                                children: [
                                  a.jsx("div", {
                                    className: "text-sm font-semibold",
                                    children: "Order status",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: r.orderStatus,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      a.jsx("div", {
                        className: "flex-1",
                        children: a.jsxs("div", {
                          className: "p-8",
                          children: [
                            a.jsx("ul", {
                              className: "-my-7 divide-y divide-gray-200",
                              children: r.orderItems.map((i) =>
                                a.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex flex-col justify-between space-x-5 py-7 md:flex-row",
                                    children: [
                                      a.jsxs("div", {
                                        className: "flex flex-1 items-stretch",
                                        children: [
                                          a.jsx("div", {
                                            className: "flex-shrink-0",
                                            children: a.jsx("img", {
                                              className:
                                                "h-20 w-20 rounded-lg border border-gray-200 object-contain",
                                              src: i.image,
                                              alt: i.image,
                                            }),
                                          }),
                                          a.jsxs("div", {
                                            className:
                                              "ml-5 flex flex-col justify-between",
                                            children: [
                                              a.jsxs("div", {
                                                className: "flex-1",
                                                children: [
                                                  a.jsx("p", {
                                                    className:
                                                      "text-sm font-bold text-gray-900",
                                                    children: i.name,
                                                  }),
                                                  a.jsx("p", {
                                                    className:
                                                      "mt-1.5 text-sm font-medium text-gray-500 w-7 h-7 rounded-full",
                                                    style: {
                                                      backgroundColor: i.color,
                                                    },
                                                  }),
                                                ],
                                              }),
                                              a.jsxs("p", {
                                                className:
                                                  "mt-4 text-sm font-medium text-gray-500",
                                                children: ["x ", i.quantity],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      a.jsx("div", {
                                        className:
                                          "ml-auto flex flex-col items-end justify-between",
                                        children: a.jsx("p", {
                                          className:
                                            "text-right text-sm font-bold text-gray-900",
                                          children: a.jsx(Pe, {
                                            price: i.price,
                                          }),
                                        }),
                                      }),
                                    ],
                                  },
                                  i._id
                                )
                              ),
                            }),
                            a.jsx("hr", {
                              className: "my-8 border-t border-t-gray-200",
                            }),
                            a.jsxs("div", {
                              className: "space-x-4",
                              children: [
                                a.jsx(Y, {
                                  type: "button",
                                  to: "/myorders",
                                  className:
                                    "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                                  children: "View Orders",
                                }),
                                a.jsx("a", {
                                  href: `${e}/orders/${r._id}/invoice`,
                                  target: "_blank",
                                  type: "button",
                                  className:
                                    "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                                  children: "Download Invoice",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
              r._id
            )
          ),
        })
    );
  };
function Jb() {
  return a.jsx("main", {
    className: "overflow-x-hidden bg-gray-200",
    children: a.jsxs(O2, {
      children: [
        a.jsx(Y9, {}),
        a.jsxs(j2, {
          children: [
            a.jsx($e, { exact: !0, path: "/", element: a.jsx(iS, {}) }),
            a.jsx($e, { exact: !0, path: "/about", element: a.jsx(oS, {}) }),
            a.jsx($e, { exact: !0, path: "/products", element: a.jsx(Z7, {}) }),
            a.jsx($e, { exact: !0, path: "/contact", element: a.jsx(e9, {}) }),
            a.jsx($e, {
              exact: !0,
              path: "/product/:id",
              element: a.jsx(z9, {}),
            }),
            a.jsx($e, { exact: !0, path: "/cart", element: a.jsx(H9, {}) }),
            a.jsx($e, { exact: !0, path: "/signup", element: a.jsx(Qb, {}) }),
            a.jsx($e, { exact: !0, path: "/signin", element: a.jsx(qb, {}) }),
            a.jsx($e, { exact: !0, path: "/order", element: a.jsx(Gb, {}) }),
            a.jsx($e, { exact: !0, path: "/myorders", element: a.jsx(Yb, {}) }),
            a.jsx($e, {
              exact: !0,
              path: "/order_details/:orderId",
              element: a.jsx(Xb, {}),
            }),
            a.jsx($e, {
              exact: !0,
              path: "/password/reset/:token",
              element: a.jsx(Kb, {}),
            }),
            a.jsx($e, { exact: !0, path: "*", element: a.jsx(U9, {}) }),
          ],
        }),
        a.jsx("hr", { className: "mx-5 " }),
        a.jsx(tb, {}),
      ],
    }),
  });
}
ma.createRoot(document.getElementById("root")).render(
  a.jsx(K9, {
    children: a.jsx(C7, {
      children: a.jsx(O7, {
        children: a.jsxs(E9, { children: [a.jsx(Vb, {}), a.jsx(Jb, {})] }),
      }),
    }),
  })
);
