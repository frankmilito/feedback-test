(function (t, i) {
  typeof exports == "object" && typeof module < "u"
    ? i(exports, require("react"), require("react-dom"))
    : typeof define == "function" && define.amd
    ? define(["exports", "react", "react-dom"], i)
    : ((t = typeof globalThis < "u" ? globalThis : t || self),
      i((t.Feedback = {}), t.React, t.ReactDOM));
})(this, function (t, i, R) {
  "use strict";
  function k(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var a = { exports: {} },
    s = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var _;
  function A() {
    if (_) return s;
    _ = 1;
    var e = i,
      u = Symbol.for("react.element"),
      d = Symbol.for("react.fragment"),
      T = Object.prototype.hasOwnProperty,
      g =
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function v(p, r, h) {
      var o,
        f = {},
        m = null,
        j = null;
      h !== void 0 && (m = "" + h),
        r.key !== void 0 && (m = "" + r.key),
        r.ref !== void 0 && (j = r.ref);
      for (o in r) T.call(r, o) && !w.hasOwnProperty(o) && (f[o] = r[o]);
      if (p && p.defaultProps)
        for (o in ((r = p.defaultProps), r)) f[o] === void 0 && (f[o] = r[o]);
      return {
        $$typeof: u,
        type: p,
        key: m,
        ref: j,
        props: f,
        _owner: g.current,
      };
    }
    return (s.Fragment = d), (s.jsx = v), (s.jsxs = v), s;
  }
  var y;
  function O() {
    return y || ((y = 1), (a.exports = A())), a.exports;
  }
  var n = O();
  const b = () =>
      n.jsx("div", { children: n.jsx("h1", { children: "Test Application" }) }),
    E = i.createContext(null),
    P = ({ apiKey: e, children: u }) => {
      if ((console.log(`Heres is your api key ${e}`), !e)) {
        console.error("API key is required to use Feedback App.");
        return;
      }
      return n.jsx(E.Provider, { value: { apiKey: e }, children: u });
    },
    q = "1.1.9";
  var c = {},
    x;
  function C() {
    if (x) return c;
    x = 1;
    var e = R;
    return (c.createRoot = e.createRoot), (c.hydrateRoot = e.hydrateRoot), c;
  }
  var F = C();
  const I = k(F),
    l = ({ apiKey: e }) => (
      console.log(q), n.jsx(P, { apiKey: e, children: n.jsx(b, {}) })
    );
  I.createRoot(document.getElementById("root")).render(
    n.jsx(l, { apiKey: "test" })
  );
  function S({ apiKey: e, containerId: u }) {
    if (!e) {
      console.error("API key is required to use Feedback App.");
      return;
    }
    const d = document.getElementById(u);
    if (!d) {
      console.error(`Container with ID "${u}" not found.`);
      return;
    }
    R.render(n.jsx(l, { apiKey: e }), d);
  }
  (t.RootApp = l),
    (t.renderFeedbackApp = S),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
});
