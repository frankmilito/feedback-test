import y, { createContext as j } from "react";
import k from "react-dom";
var l = { exports: {} }, i = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m;
function A() {
  if (m) return i;
  m = 1;
  var e = y, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(u, r, f) {
    var o, c = {}, p = null, x = null;
    f !== void 0 && (p = "" + f), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (x = r.ref);
    for (o in r) a.call(r, o) && !v.hasOwnProperty(o) && (c[o] = r[o]);
    if (u && u.defaultProps) for (o in r = u.defaultProps, r) c[o] === void 0 && (c[o] = r[o]);
    return { $$typeof: t, type: u, key: p, ref: x, props: c, _owner: R.current };
  }
  return i.Fragment = s, i.jsx = d, i.jsxs = d, i;
}
var _;
function h() {
  return _ || (_ = 1, l.exports = A()), l.exports;
}
var n = h();
const O = () => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("h1", { children: "Test Application" }) }), q = j(null), E = ({
  apiKey: e,
  children: t
}) => {
  if (console.log(`Heres is your api key ${e}`), !e) {
    console.error("API key is required to use Feedback App.");
    return;
  }
  return /* @__PURE__ */ n.jsx(q.Provider, { value: { apiKey: e }, children: t });
}, P = "1.2.0", b = ({ apiKey: e }) => (console.log(P), /* @__PURE__ */ n.jsx(E, { apiKey: e, children: /* @__PURE__ */ n.jsx(O, {}) }));
function w({ apiKey: e, containerId: t }) {
  if (!e) {
    console.error("API key is required to use Feedback App.");
    return;
  }
  const s = document.getElementById(t);
  if (!s) {
    console.error(`Container with ID "${t}" not found.`);
    return;
  }
  k.render(/* @__PURE__ */ n.jsx(b, { apiKey: e }), s);
}
export {
  b as RootApp,
  w as renderFeedbackApp
};
