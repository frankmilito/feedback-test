import j, { createContext as q } from "react";
import E from "react-dom";
var l = { exports: {} }, n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x;
function O() {
  if (x) return n;
  x = 1;
  var r = j, p = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, e, d) {
    var t, u = {}, c = null, f = null;
    d !== void 0 && (c = "" + d), e.key !== void 0 && (c = "" + e.key), e.ref !== void 0 && (f = e.ref);
    for (t in e) v.call(e, t) && !h.hasOwnProperty(t) && (u[t] = e[t]);
    if (i && i.defaultProps) for (t in e = i.defaultProps, e) u[t] === void 0 && (u[t] = e[t]);
    return { $$typeof: p, type: i, key: c, ref: f, props: u, _owner: y.current };
  }
  return n.Fragment = _, n.jsx = a, n.jsxs = a, n;
}
var m;
function $() {
  return m || (m = 1, l.exports = O()), l.exports;
}
var o = $(), s = {}, R;
function k() {
  if (R) return s;
  R = 1;
  var r = E;
  return s.createRoot = r.createRoot, s.hydrateRoot = r.hydrateRoot, s;
}
var A = k();
const w = () => /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("h1", { children: "Hello App" }) }), C = q(null), P = ({
  apiKey: r,
  children: p
}) => {
  if (console.log(`Heres is your api key ${r}`), !r)
    throw new Error("Api key is required");
  return /* @__PURE__ */ o.jsx(C.Provider, { value: { apiKey: r }, children: p });
}, J = ({ apiKey: r }) => /* @__PURE__ */ o.jsx(P, { apiKey: r, children: /* @__PURE__ */ o.jsx(w, {}) });
A.createRoot(document.getElementById("root")).render(/* @__PURE__ */ o.jsx(J, { apiKey: "test" }));
export {
  J as RootApp
};
