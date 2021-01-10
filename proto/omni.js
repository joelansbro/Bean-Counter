! function() {
    "use strict";
    var t = "https://www.omnicalculator.com";

    function e(t) {
        var e, r;

        function n(e, r) {
            try {
                var a = t[e](r),
                    i = a.value,
                    c = i instanceof
                function(t) {
                    this.wrapped = t
                };
                Promise.resolve(c ? i.wrapped : i).then(function(t) {
                    c ? n("return" === e ? "return" : "next", t) : o(a.done ? "return" : "normal", t)
                }, function(t) {
                    n("throw", t)
                })
            } catch (t) {
                o("throw", t)
            }
        }

        function o(t, o) {
            switch (t) {
                case "return":
                    e.resolve({
                        value: o,
                        done: !0
                    });
                    break;
                case "throw":
                    e.reject(o);
                    break;
                default:
                    e.resolve({
                        value: o,
                        done: !1
                    })
            }(e = e.next) ? n(e.key, e.arg): r = null
        }
        this._invoke = function(t, o) {
            return new Promise(function(a, i) {
                var c = {
                    key: t,
                    arg: o,
                    resolve: a,
                    reject: i,
                    next: null
                };
                r ? r = r.next = c : (e = r = c, n(t, o))
            })
        }, "function" != typeof t.return && (this.return = void 0)
    }

    function r(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(o), !0).forEach(function(e) {
                r(t, e, o[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return t
    }
    "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
        return this
    }), e.prototype.next = function(t) {
        return this._invoke("next", t)
    }, e.prototype.throw = function(t) {
        return this._invoke("throw", t)
    }, e.prototype.return = function(t) {
        return this._invoke("return", t)
    };
    var a = Array.prototype.forEach,
        i = {
            visibility: "visible",
            opacity: 1
        },
        c = {
            iframe: o(o({}, i), {}, {
                display: "block",
                border: "none",
                width: "100%",
                margin: 0,
                padding: 0
            }),
        },
        l = "omni-calculator-loading",
        s = "omni-calculator-loaded";

    function u(t, e) {
        Object.keys(e).forEach(function(r) {
            t.style[r] = e[r]
        })
    }

    function d(t) {
        return t.getElementsByClassName("omni-calculator-header")[0]
    }

    function f(t) {
        return t.getElementsByClassName("omni-calculator-footer")[0]
    }! function(e, r) {
        if (!e.OmniC) {
            var n, o = 0,
                i = /^\d+$/,
                p = function() {
                    var t = r.getElementsByClassName("omni-calculator");
                    a.call(t, g)
                },
                m = function(t, e) {
                    return t.substring(0, e.length) === e
                };
            n = function() {
                e.addEventListener("message", y, !1), p()
            }, "loading" !== r.readyState ? n() : r.addEventListener("DOMContentLoaded", n), e.OmniC = e.OmniC || {
                parse: p
            }
        }

        function g(e) {
            if (!e.hasAttribute("data-parsed")) {
                var n = d(e),
                    s = f(e);
                if (s && n) {
                    var p = e.getAttribute("data-calculator");
                    if (p) {
                        var g = s.getElementsByTagName("a");
                        a.call(g, function(t) {
                            var e;
                            (e = t).target || (e.target = "_blank")
                        });
                        var y = Array.prototype.some.call(g, function(t) {
                            return m(t.href, "https://www.omnicalculator.com")
                        });
                        e.style.width = "360px";
                        var h = e.getAttribute("data-version") || 1,
                            b = ++o,
                            v = r.createElement("iframe");
                        v.className = "omni-calculator-frame", v.setAttribute("data-calculator-id", "" + b), v.src = t + "/embed/" + p + "#id=" + b + "&hasLink=" + y + "&version=" + h, u(v, c.iframe), v.style.height = "0", e.insertBefore(v, s);
                        var w = e.getAttribute("data-width");
                        w && (w.match(i) && (w += "px"), e.style.width = w), y || s.parentElement.removeChild(s), e.setAttribute("data-parsed", "1"), e.classList && e.classList.add(l)
                    }
                }
            }
        }

        function y(e) {
            if (e.origin === t) {
                var r, n, o, i, p = e.data;
                if (p) switch (p.type) {
                    case "CHANGE_HEIGHT":
                        return n = (r = p).calculatorId, o = r.value, void((i = h(n)) && (i.style.height = o + "px"));
                    case "LOADED":
                        return void
                        function(e) {
                            var r = h(e.calculatorId),
                                n = r.parentNode;
                            if (!n) return;
                            var o, a = n.getAttribute("data-currency"),
                                i = n.getAttribute("data-config");
                            if (i) try {
                                o = JSON.parse(i)
                            } catch (t) {}
                            o = o || {};
                            var c = n.getAttribute("data-show-row-controls");
                            ! function(e, r) {
                                e.contentWindow.postMessage(r, t)
                            }(r, {
                                type: "CONFIG",
                                config: o,
                                currency: a,
                                showRowControls: "false" !== c
                            })
                        }(p);
                    case "READY":
                        return void
                        function(t) {
                            var e = t.parentNode,
                                r = d(e),
                                n = f(e);
                            if (u(r, c.header), u(e, c.container), n) {
                                u(n, c.footer);
                                var o = n.getElementsByTagName("a");
                                a.call(o, function(t) {
                                    u(t, c.link)
                                });
                                var i = n.getElementsByClassName("omni-calculator-img-link");
                                a.call(i, function(t) {
                                    u(t, c.omniImageLink)
                                });
                                var p = n.getElementsByClassName("omni-calculator-logo");
                                a.call(p, function(t) {
                                    u(t, c.logo)
                                })
                            }
                            var m = e.getElementsByClassName("omni-calculator-placeholder");
                            a.call(m, function(t) {
                                t.parentNode.removeChild(t)
                            }), e.classList && (e.classList.remove(l), e.classList.add(s))
                        }(h(p.calculatorId))
                }
            }
        }

        function h(t) {
            return r.querySelector('.omni-calculator-frame[data-calculator-id="' + t + '"]')
        }
    }(window, document)
}();