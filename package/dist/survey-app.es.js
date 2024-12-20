import q, { createContext as A } from "react";
import v from "react-dom";
function E(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var d = { exports: {} }, i = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R;
function O() {
  if (R) return i;
  R = 1;
  var e = q, n = Symbol.for("react.element"), u = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, r, f) {
    var t, c = {}, l = null, m = null;
    f !== void 0 && (l = "" + f), r.key !== void 0 && (l = "" + r.key), r.ref !== void 0 && (m = r.ref);
    for (t in r) h.call(r, t) && !k.hasOwnProperty(t) && (c[t] = r[t]);
    if (s && s.defaultProps) for (t in r = s.defaultProps, r) c[t] === void 0 && (c[t] = r[t]);
    return { $$typeof: n, type: s, key: l, ref: m, props: c, _owner: j.current };
  }
  return i.Fragment = u, i.jsx = a, i.jsxs = a, i;
}
var _;
function P() {
  return _ || (_ = 1, d.exports = O()), d.exports;
}
var o = P();
const $ = () => /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("h1", { children: "Test Application" }) }), b = A(null), C = ({
  apiKey: e,
  children: n
}) => {
  if (console.log(`Heres is your api key ${e}`), !e) {
    console.error("API key is required to use Feedback App.");
    return;
  }
  return /* @__PURE__ */ o.jsx(b.Provider, { value: { apiKey: e }, children: n });
}, I = "1.1.9";
var p = {}, x;
function g() {
  if (x) return p;
  x = 1;
  var e = v;
  return p.createRoot = e.createRoot, p.hydrateRoot = e.hydrateRoot, p;
}
var w = g();
const F = /* @__PURE__ */ E(w), y = ({ apiKey: e }) => (console.log(I), /* @__PURE__ */ o.jsx(C, { apiKey: e, children: /* @__PURE__ */ o.jsx($, {}) }));
F.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ o.jsx(y, { apiKey: "test" })
);
function S({ apiKey: e, containerId: n }) {
  if (!e) {
    console.error("API key is required to use Feedback App.");
    return;
  }
  const u = document.getElementById(n);
  if (!u) {
    console.error(`Container with ID "${n}" not found.`);
    return;
  }
  v.render(/* @__PURE__ */ o.jsx(y, { apiKey: e }), u);
}
export {
  y as RootApp,
  S as renderFeedbackApp
};
