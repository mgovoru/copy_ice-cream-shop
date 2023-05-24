/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let i = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (i.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    i = (t = 500) => {
      let i = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (i.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function r(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function n(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i]);
    });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return n(e, s), e;
  }
  const o = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    const e = "undefined" != typeof window ? window : {};
    return n(e, o), e;
  }
  function d(e, t = 0) {
    return setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function c(e, t = "x") {
    const i = l();
    let r, n, s;
    const a = (function (e) {
      const t = l();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (s = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = s.toString().split(","))),
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? s.m41
          : 16 === r.length
          ? parseFloat(r[12])
          : parseFloat(r[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? s.m42
          : 16 === r.length
          ? parseFloat(r[13])
          : parseFloat(r[5])),
      n || 0
    );
  }
  function p(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function h(...e) {
    const t = Object(e[0]),
      i = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const s = e[n];
      if (
        null != s &&
        ((r = s),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? r instanceof HTMLElement
          : r && (1 === r.nodeType || 11 === r.nodeType)))
      ) {
        const e = Object.keys(Object(s)).filter((e) => i.indexOf(e) < 0);
        for (let i = 0, r = e.length; i < r; i += 1) {
          const r = e[i],
            n = Object.getOwnPropertyDescriptor(s, r);
          void 0 !== n &&
            n.enumerable &&
            (p(t[r]) && p(s[r])
              ? s[r].__swiper__
                ? (t[r] = s[r])
                : h(t[r], s[r])
              : !p(t[r]) && p(s[r])
              ? ((t[r] = {}), s[r].__swiper__ ? (t[r] = s[r]) : h(t[r], s[r]))
              : (t[r] = s[r]));
        }
      }
    }
    var r;
    return t;
  }
  function f(e, t, i) {
    e.style.setProperty(t, i);
  }
  function m({ swiper: e, targetPosition: t, side: i }) {
    const r = l(),
      n = -e.translate;
    let s,
      a = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > n ? "next" : "prev",
      u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      c = () => {
        (s = new Date().getTime()), null === a && (a = s);
        const l = Math.max(Math.min((s - a) / o, 1), 0),
          d = 0.5 - Math.cos(l * Math.PI) / 2;
        let p = n + d * (t - n);
        if ((u(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), u(p, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: p });
            }),
            void r.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = r.requestAnimationFrame(c);
      };
    c();
  }
  function g(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function v(e, t = []) {
    const i = document.createElement(e);
    return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
  }
  function _(e, t) {
    return l().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      i = e;
    if (i) {
      for (t = 0; null !== (i = i.previousSibling); )
        1 === i.nodeType && (t += 1);
      return t;
    }
  }
  function w(e, t) {
    const i = [];
    let r = e.parentElement;
    for (; r; )
      t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
    return i;
  }
  function b(e, t, i) {
    const r = l();
    return i
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let T, x, S;
  function E() {
    return (
      T ||
        (T = (function () {
          const e = l(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      T
    );
  }
  function C(e = {}) {
    return (
      x ||
        (x = (function ({ userAgent: e } = {}) {
          const t = E(),
            i = l(),
            r = i.navigator.platform,
            n = e || i.navigator.userAgent,
            s = { ios: !1, android: !1 },
            a = i.screen.width,
            o = i.screen.height,
            d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = n.match(/(iPad).*OS\s([\d_]+)/);
          const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === r;
          let f = "MacIntel" === r;
          return (
            !u &&
              f &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((u = n.match(/(Version)\/([\d.]+)/)),
              u || (u = [0, 1, "13_0_0"]),
              (f = !1)),
            d && !h && ((s.os = "android"), (s.android = !0)),
            (u || p || c) && ((s.os = "ios"), (s.ios = !0)),
            s
          );
        })(e)),
      x
    );
  }
  function M() {
    return (
      S ||
        (S = (function () {
          const e = l();
          let t = !1;
          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (i()) {
            const i = String(e.navigator.userAgent);
            if (i.includes("Version/")) {
              const [e, r] = i
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && r < 2);
            }
          }
          return {
            isSafari: t || i(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      S
    );
  }
  const k = {
    on(e, t, i) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ("function" != typeof t) return r;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          r.eventsListeners[e] || (r.eventsListeners[e] = []),
            r.eventsListeners[e][n](t);
        }),
        r
      );
    },
    once(e, t, i) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ("function" != typeof t) return r;
      function n(...i) {
        r.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(r, i);
      }
      return (n.__emitterProxy = t), r.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof e) return i;
      const r = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((r, n) => {
                  (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let i, r, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (r = e.slice(1, e.length)), (n = t))
        : ((i = e[0].events), (r = e[0].data), (n = e[0].context || t)),
        r.unshift(n);
      return (
        (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...r]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, r);
              });
        }),
        t
      );
    },
  };
  const P = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const i = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (i) {
        const t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    O = (e, t) => {
      if (!e.slides[t]) return;
      const i = e.slides[t].querySelector('[loading="lazy"]');
      i && i.removeAttribute("loading");
    },
    A = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const i = e.slides.length;
      if (!i || !t || t < 0) return;
      t = Math.min(t, i);
      const r =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        n = e.activeIndex,
        s = n + r - 1;
      if (e.params.rewind)
        for (let r = n - t; r <= s + t; r += 1) {
          const t = ((r % i) + i) % i;
          t !== n && t > s && O(e, t);
        }
      else
        for (let r = Math.max(s - t, 0); r <= Math.min(s + t, i - 1); r += 1)
          r !== n && r > s && O(e, r);
    };
  const L = {
    updateSize: function () {
      const e = this;
      let t, i;
      const r = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : r.clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : r.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(_(r, "padding-left") || 0, 10) -
            parseInt(_(r, "padding-right") || 0, 10)),
          (i =
            i -
            parseInt(_(r, "padding-top") || 0, 10) -
            parseInt(_(r, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const r = e.params,
        {
          wrapperEl: n,
          slidesEl: s,
          size: a,
          rtlTranslate: o,
          wrongRTL: l,
        } = e,
        d = e.virtual && r.virtual.enabled,
        u = d ? e.virtual.slides.length : e.slides.length,
        c = g(s, `.${e.params.slideClass}, swiper-slide`),
        p = d ? e.virtual.slides.length : c.length;
      let h = [];
      const m = [],
        v = [];
      let y = r.slidesOffsetBefore;
      "function" == typeof y && (y = r.slidesOffsetBefore.call(e));
      let w = r.slidesOffsetAfter;
      "function" == typeof w && (w = r.slidesOffsetAfter.call(e));
      const T = e.snapGrid.length,
        x = e.slidesGrid.length;
      let S = r.spaceBetween,
        E = -y,
        C = 0,
        M = 0;
      if (void 0 === a) return;
      "string" == typeof S &&
        S.indexOf("%") >= 0 &&
        (S = (parseFloat(S.replace("%", "")) / 100) * a),
        (e.virtualSize = -S),
        c.forEach((e) => {
          o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        r.centeredSlides &&
          r.cssMode &&
          (f(n, "--swiper-centered-offset-before", ""),
          f(n, "--swiper-centered-offset-after", ""));
      const k = r.grid && r.grid.rows > 1 && e.grid;
      let P;
      k && e.grid.initSlides(p);
      const O =
        "auto" === r.slidesPerView &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (e) => void 0 !== r.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        let s;
        if (
          ((P = 0),
          c[n] && (s = c[n]),
          k && e.grid.updateSlide(n, s, p, t),
          !c[n] || "none" !== _(s, "display"))
        ) {
          if ("auto" === r.slidesPerView) {
            O && (c[n].style[t("width")] = "");
            const a = getComputedStyle(s),
              o = s.style.transform,
              l = s.style.webkitTransform;
            if (
              (o && (s.style.transform = "none"),
              l && (s.style.webkitTransform = "none"),
              r.roundLengths)
            )
              P = e.isHorizontal() ? b(s, "width", !0) : b(s, "height", !0);
            else {
              const e = i(a, "width"),
                t = i(a, "padding-left"),
                r = i(a, "padding-right"),
                n = i(a, "margin-left"),
                o = i(a, "margin-right"),
                l = a.getPropertyValue("box-sizing");
              if (l && "border-box" === l) P = e + n + o;
              else {
                const { clientWidth: i, offsetWidth: a } = s;
                P = e + t + r + n + o + (a - i);
              }
            }
            o && (s.style.transform = o),
              l && (s.style.webkitTransform = l),
              r.roundLengths && (P = Math.floor(P));
          } else
            (P = (a - (r.slidesPerView - 1) * S) / r.slidesPerView),
              r.roundLengths && (P = Math.floor(P)),
              c[n] && (c[n].style[t("width")] = `${P}px`);
          c[n] && (c[n].swiperSlideSize = P),
            v.push(P),
            r.centeredSlides
              ? ((E = E + P / 2 + C / 2 + S),
                0 === C && 0 !== n && (E = E - a / 2 - S),
                0 === n && (E = E - a / 2 - S),
                Math.abs(E) < 0.001 && (E = 0),
                r.roundLengths && (E = Math.floor(E)),
                M % r.slidesPerGroup == 0 && h.push(E),
                m.push(E))
              : (r.roundLengths && (E = Math.floor(E)),
                (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                  e.params.slidesPerGroup ==
                  0 && h.push(E),
                m.push(E),
                (E = E + P + S)),
            (e.virtualSize += P + S),
            (C = P),
            (M += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + w),
        o &&
          l &&
          ("slide" === r.effect || "coverflow" === r.effect) &&
          (n.style.width = `${e.virtualSize + r.spaceBetween}px`),
        r.setWrapperSize &&
          (n.style[t("width")] = `${e.virtualSize + r.spaceBetween}px`),
        k && e.grid.updateWrapperSize(P, h, t),
        !r.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < h.length; i += 1) {
          let n = h[i];
          r.roundLengths && (n = Math.floor(n)),
            h[i] <= e.virtualSize - a && t.push(n);
        }
        (h = t),
          Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 &&
            h.push(e.virtualSize - a);
      }
      if (d && r.loop) {
        const t = v[0] + S;
        if (r.slidesPerGroup > 1) {
          const i = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                r.slidesPerGroup
            ),
            n = t * r.slidesPerGroup;
          for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + n);
        }
        for (
          let i = 0;
          i < e.virtual.slidesBefore + e.virtual.slidesAfter;
          i += 1
        )
          1 === r.slidesPerGroup && h.push(h[h.length - 1] + t),
            m.push(m[m.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === h.length && (h = [0]), 0 !== r.spaceBetween)) {
        const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter(
          (e, t) => !(r.cssMode && !r.loop) || t !== c.length - 1
        ).forEach((e) => {
          e.style[i] = `${S}px`;
        });
      }
      if (r.centeredSlides && r.centeredSlidesBounds) {
        let e = 0;
        v.forEach((t) => {
          e += t + (r.spaceBetween ? r.spaceBetween : 0);
        }),
          (e -= r.spaceBetween);
        const t = e - a;
        h = h.map((e) => (e < 0 ? -y : e > t ? t + w : e));
      }
      if (r.centerInsufficientSlides) {
        let e = 0;
        if (
          (v.forEach((t) => {
            e += t + (r.spaceBetween ? r.spaceBetween : 0);
          }),
          (e -= r.spaceBetween),
          e < a)
        ) {
          const t = (a - e) / 2;
          h.forEach((e, i) => {
            h[i] = e - t;
          }),
            m.forEach((e, i) => {
              m[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: h,
          slidesGrid: m,
          slidesSizesGrid: v,
        }),
        r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
      ) {
        f(n, "--swiper-centered-offset-before", -h[0] + "px"),
          f(
            n,
            "--swiper-centered-offset-after",
            e.size / 2 - v[v.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      if (
        (p !== u && e.emit("slidesLengthChange"),
        h.length !== T &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        m.length !== x && e.emit("slidesGridLengthChange"),
        r.watchSlidesProgress && e.updateSlidesOffset(),
        !(d || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
      ) {
        const t = `${r.containerModifierClass}backface-hidden`,
          i = e.el.classList.contains(t);
        p <= r.maxBackfaceHiddenSlides
          ? i || e.el.classList.add(t)
          : i && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        r = t.virtual && t.params.virtual.enabled;
      let n,
        s = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !r) break;
            i.push(a(e));
          }
      else i.push(a(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          s = e > s ? e : s;
        }
      (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        i = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset =
          (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
          i -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        i = t.params,
        { slides: r, rtlTranslate: n, snapGrid: s } = t;
      if (0 === r.length) return;
      void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        r.forEach((e) => {
          e.classList.remove(i.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < r.length; e += 1) {
        const o = r[e];
        let l = o.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= r[0].swiperSlideOffset);
        const d =
            (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + i.spaceBetween),
          u =
            (a - s[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + i.spaceBetween),
          c = -(a - l),
          p = c + t.slidesSizesGrid[e];
        ((c >= 0 && c < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (c <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          r[e].classList.add(i.slideVisibleClass)),
          (o.progress = n ? -d : d),
          (o.originalProgress = n ? -u : u);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        r = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: s, isEnd: a, progressLoop: o } = t;
      const l = s,
        d = a;
      if (0 === r) (n = 0), (s = !0), (a = !0);
      else {
        n = (e - t.minTranslate()) / r;
        const i = Math.abs(e - t.minTranslate()) < 1,
          o = Math.abs(e - t.maxTranslate()) < 1;
        (s = i || n <= 0), (a = o || n >= 1), i && (n = 0), o && (n = 1);
      }
      if (i.loop) {
        const i = t.getSlideIndexByData(0),
          r = t.getSlideIndexByData(t.slides.length - 1),
          n = t.slidesGrid[i],
          s = t.slidesGrid[r],
          a = t.slidesGrid[t.slidesGrid.length - 1],
          l = Math.abs(e);
        (o = l >= n ? (l - n) / a : (l + a - s) / a), o > 1 && (o -= 1);
      }
      Object.assign(t, {
        progress: n,
        progressLoop: o,
        isBeginning: s,
        isEnd: a,
      }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        s && !l && t.emit("reachBeginning toEdge"),
        a && !d && t.emit("reachEnd toEdge"),
        ((l && !s) || (d && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: i, slidesEl: r, activeIndex: n } = e,
        s = e.virtual && i.virtual.enabled,
        a = (e) => g(r, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
      let o;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            i.slideActiveClass,
            i.slideNextClass,
            i.slidePrevClass
          );
        }),
        s)
      )
        if (i.loop) {
          let t = n - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = a(`[data-swiper-slide-index="${t}"]`));
        } else o = a(`[data-swiper-slide-index="${n}"]`);
      else o = t[n];
      if (o) {
        o.classList.add(i.slideActiveClass);
        let e = (function (e, t) {
          const i = [];
          for (; e.nextElementSibling; ) {
            const r = e.nextElementSibling;
            t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
          }
          return i;
        })(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
        let r = (function (e, t) {
          const i = [];
          for (; e.previousElementSibling; ) {
            const r = e.previousElementSibling;
            t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
          }
          return i;
        })(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && 0 === !r && (r = t[t.length - 1]),
          r && r.classList.add(i.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: r,
          params: n,
          activeIndex: s,
          realIndex: a,
          snapIndex: o,
        } = t;
      let l,
        d = e;
      const u = (e) => {
        let i = e - t.virtual.slidesBefore;
        return (
          i < 0 && (i = t.virtual.slides.length + i),
          i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
          i
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: i } = e,
              r = e.rtlTranslate ? e.translate : -e.translate;
            let n;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (n = e)
                  : r >= t[e] && r < t[e + 1] && (n = e + 1)
                : r >= t[e] && (n = e);
            return (
              i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            );
          })(t)),
        r.indexOf(i) >= 0)
      )
        l = r.indexOf(i);
      else {
        const e = Math.min(n.slidesPerGroupSkip, d);
        l = e + Math.floor((d - e) / n.slidesPerGroup);
      }
      if ((l >= r.length && (l = r.length - 1), d === s))
        return (
          l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = u(d))
          )
        );
      let c;
      (c =
        t.virtual && n.virtual.enabled && n.loop
          ? u(d)
          : t.slides[d]
          ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
          : d),
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: a,
          realIndex: c,
          previousIndex: s,
          activeIndex: d,
        }),
        t.initialized && A(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== c && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        r = e.closest(`.${i.slideClass}, swiper-slide`);
      let n,
        s = !1;
      if (r)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === r) {
            (s = !0), (n = e);
            break;
          }
      if (!r || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const z = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -r : r;
      if (t.cssMode) return r;
      let s = c(n, e);
      return (s += this.cssOverflowAdjustment()), i && (s = -s), s || 0;
    },
    setTranslate: function (e, t) {
      const i = this,
        { rtlTranslate: r, params: n, wrapperEl: s, progress: a } = i;
      let o,
        l = 0,
        d = 0;
      i.isHorizontal() ? (l = r ? -e : e) : (d = e),
        n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? l : d),
        n.cssMode
          ? (s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -l
              : -d)
          : n.virtualTranslate ||
            (i.isHorizontal()
              ? (l -= i.cssOverflowAdjustment())
              : (d -= i.cssOverflowAdjustment()),
            (s.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
      const u = i.maxTranslate() - i.minTranslate();
      (o = 0 === u ? 0 : (e - i.minTranslate()) / u),
        o !== a && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, i = !0, r = !0, n) {
      const s = this,
        { params: a, wrapperEl: o } = s;
      if (s.animating && a.preventInteractionOnTransition) return !1;
      const l = s.minTranslate(),
        d = s.maxTranslate();
      let u;
      if (
        ((u = r && e > l ? l : r && e < d ? d : e),
        s.updateProgress(u),
        a.cssMode)
      ) {
        const e = s.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u;
        else {
          if (!s.support.smoothScroll)
            return (
              m({ swiper: s, targetPosition: -u, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (s.setTransition(0),
            s.setTranslate(u),
            i &&
              (s.emit("beforeTransitionStart", t, n), s.emit("transitionEnd")))
          : (s.setTransition(t),
            s.setTranslate(u),
            i &&
              (s.emit("beforeTransitionStart", t, n),
              s.emit("transitionStart")),
            s.animating ||
              ((s.animating = !0),
              s.onTranslateToWrapperTransitionEnd ||
                (s.onTranslateToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    i && s.emit("transitionEnd"));
                }),
              s.wrapperEl.addEventListener(
                "transitionend",
                s.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function I({ swiper: e, runCallbacks: t, direction: i, step: r }) {
    const { activeIndex: n, previousIndex: s } = e;
    let a = i;
    if (
      (a || (a = n > s ? "next" : n < s ? "prev" : "reset"),
      e.emit(`transition${r}`),
      t && n !== s)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${r}`);
      e.emit(`slideChangeTransition${r}`),
        "next" === a
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  const D = {
    slideTo: function (e = 0, t = this.params.speed, i = !0, r, n) {
      "string" == typeof e && (e = parseInt(e, 10));
      const s = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: u,
        activeIndex: c,
        rtlTranslate: p,
        wrapperEl: h,
        enabled: f,
      } = s;
      if ((s.animating && o.preventInteractionOnTransition) || (!f && !r && !n))
        return !1;
      const g = Math.min(s.params.slidesPerGroupSkip, a);
      let v = g + Math.floor((a - g) / s.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1);
      const _ = -l[v];
      if (o.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * _),
            i = Math.floor(100 * d[e]),
            r = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= i && t < r - (r - i) / 2
              ? (a = e)
              : t >= i && t < r && (a = e + 1)
            : t >= i && (a = e);
        }
      if (s.initialized && a !== c) {
        if (!s.allowSlideNext && _ < s.translate && _ < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          _ > s.translate &&
          _ > s.maxTranslate() &&
          (c || 0) !== a
        )
          return !1;
      }
      let y;
      if (
        (a !== (u || 0) && i && s.emit("beforeSlideChangeStart"),
        s.updateProgress(_),
        (y = a > c ? "next" : a < c ? "prev" : "reset"),
        (p && -_ === s.translate) || (!p && _ === s.translate))
      )
        return (
          s.updateActiveIndex(a),
          o.autoHeight && s.updateAutoHeight(),
          s.updateSlidesClasses(),
          "slide" !== o.effect && s.setTranslate(_),
          "reset" !== y && (s.transitionStart(i, y), s.transitionEnd(i, y)),
          !1
        );
      if (o.cssMode) {
        const e = s.isHorizontal(),
          i = p ? _ : -_;
        if (0 === t) {
          const t = s.virtual && s.params.virtual.enabled;
          t &&
            ((s.wrapperEl.style.scrollSnapType = "none"),
            (s._immediateVirtual = !0)),
            t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
              ? ((s._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = i;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (s.wrapperEl.style.scrollSnapType = ""),
                  (s._immediateVirtual = !1);
              });
        } else {
          if (!s.support.smoothScroll)
            return (
              m({ swiper: s, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        s.setTransition(t),
        s.setTranslate(_),
        s.updateActiveIndex(a),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", t, r),
        s.transitionStart(i, y),
        0 === t
          ? s.transitionEnd(i, y)
          : s.animating ||
            ((s.animating = !0),
            s.onSlideToWrapperTransitionEnd ||
              (s.onSlideToWrapperTransitionEnd = function (e) {
                s &&
                  !s.destroyed &&
                  e.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(i, y));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, i = !0, r) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const n = this;
      let s = e;
      return (
        n.params.loop &&
          (n.virtual && n.params.virtual.enabled
            ? (s += n.virtual.slidesBefore)
            : (s = n.getSlideIndexByData(s))),
        n.slideTo(s, t, i, r)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, i) {
      const r = this,
        { enabled: n, params: s, animating: a } = r;
      if (!n) return r;
      let o = s.slidesPerGroup;
      "auto" === s.slidesPerView &&
        1 === s.slidesPerGroup &&
        s.slidesPerGroupAuto &&
        (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
      const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
        d = r.virtual && s.virtual.enabled;
      if (s.loop) {
        if (a && !d && s.loopPreventsSliding) return !1;
        r.loopFix({ direction: "next" }),
          (r._clientLeft = r.wrapperEl.clientLeft);
      }
      return s.rewind && r.isEnd
        ? r.slideTo(0, e, t, i)
        : r.slideTo(r.activeIndex + l, e, t, i);
    },
    slidePrev: function (e = this.params.speed, t = !0, i) {
      const r = this,
        {
          params: n,
          snapGrid: s,
          slidesGrid: a,
          rtlTranslate: o,
          enabled: l,
          animating: d,
        } = r;
      if (!l) return r;
      const u = r.virtual && n.virtual.enabled;
      if (n.loop) {
        if (d && !u && n.loopPreventsSliding) return !1;
        r.loopFix({ direction: "prev" }),
          (r._clientLeft = r.wrapperEl.clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? r.translate : -r.translate),
        h = s.map((e) => c(e));
      let f = s[h.indexOf(p) - 1];
      if (void 0 === f && n.cssMode) {
        let e;
        s.forEach((t, i) => {
          p >= t && (e = i);
        }),
          void 0 !== e && (f = s[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== f &&
          ((m = a.indexOf(f)),
          m < 0 && (m = r.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((m = m - r.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        n.rewind && r.isBeginning)
      ) {
        const n =
          r.params.virtual && r.params.virtual.enabled && r.virtual
            ? r.virtual.slides.length - 1
            : r.slides.length - 1;
        return r.slideTo(n, e, t, i);
      }
      return r.slideTo(m, e, t, i);
    },
    slideReset: function (e = this.params.speed, t = !0, i) {
      return this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function (e = this.params.speed, t = !0, i, r = 0.5) {
      const n = this;
      let s = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, s),
        o = a + Math.floor((s - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[o]) {
        const e = n.snapGrid[o];
        l - e > (n.snapGrid[o + 1] - e) * r && (s += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[o - 1];
        l - e <= (n.snapGrid[o] - e) * r && (s -= n.params.slidesPerGroup);
      }
      return (
        (s = Math.max(s, 0)),
        (s = Math.min(s, n.slidesGrid.length - 1)),
        n.slideTo(s, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: i } = e,
        r =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        s = e.clickedIndex;
      const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? s < e.loopedSlides - r / 2 ||
              s > e.slides.length - e.loopedSlides + r / 2
              ? (e.loopFix(),
                (s = e.getSlideIndex(
                  g(i, `${a}[data-swiper-slide-index="${n}"]`)[0]
                )),
                d(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s)
            : s > e.slides.length - r
            ? (e.loopFix(),
              (s = e.getSlideIndex(
                g(i, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              d(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s);
      } else e.slideTo(s);
    },
  };
  const B = {
    loopCreate: function (e) {
      const t = this,
        { params: i, slidesEl: r } = t;
      if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
      g(r, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: i.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      byController: s,
      byMousewheel: a,
    } = {}) {
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: l,
        allowSlidePrev: d,
        allowSlideNext: u,
        slidesEl: c,
        params: p,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && p.virtual.enabled)
      )
        return (
          t &&
            (p.centeredSlides || 0 !== o.snapIndex
              ? p.centeredSlides && o.snapIndex < p.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = d),
          (o.allowSlideNext = u),
          void o.emit("loopFix")
        );
      const h =
        "auto" === p.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(p.slidesPerView, 10));
      let f = p.loopedSlides || h;
      f % p.slidesPerGroup != 0 &&
        (f += p.slidesPerGroup - (f % p.slidesPerGroup)),
        (o.loopedSlides = f);
      const m = [],
        g = [];
      let v = o.activeIndex;
      void 0 === n
        ? (n = o.getSlideIndex(
            o.slides.filter((e) => e.classList.contains(p.slideActiveClass))[0]
          ))
        : (v = n);
      const _ = "next" === i || !i,
        y = "prev" === i || !i;
      let w = 0,
        b = 0;
      if (n < f) {
        w = Math.max(f - n, p.slidesPerGroup);
        for (let e = 0; e < f - n; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          m.push(l.length - t - 1);
        }
      } else if (n > o.slides.length - 2 * f) {
        b = Math.max(n - (o.slides.length - 2 * f), p.slidesPerGroup);
        for (let e = 0; e < b; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          g.push(t);
        }
      }
      if (
        (y &&
          m.forEach((e) => {
            c.prepend(o.slides[e]);
          }),
        _ &&
          g.forEach((e) => {
            c.append(o.slides[e]);
          }),
        o.recalcSlides(),
        "auto" === p.slidesPerView && o.updateSlides(),
        p.watchSlidesProgress && o.updateSlidesOffset(),
        t)
      )
        if (m.length > 0 && y)
          if (void 0 === e) {
            const e = o.slidesGrid[v],
              t = o.slidesGrid[v + w] - e;
            a
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(v + w, 0, !1, !0),
                r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else r && o.slideToLoop(e, 0, !1, !0);
        else if (g.length > 0 && _)
          if (void 0 === e) {
            const e = o.slidesGrid[v],
              t = o.slidesGrid[v - b] - e;
            a
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(v - b, 0, !1, !0),
                r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else o.slideToLoop(e, 0, !1, !0);
      if (
        ((o.allowSlidePrev = d),
        (o.allowSlideNext = u),
        o.controller && o.controller.control && !s)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: i,
          setTranslate: r,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((e) => {
              !e.destroyed && e.params.loop && e.loopFix(t);
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix(t);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: i } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const r = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        r[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        r.forEach((e) => {
          i.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function F(e) {
    const t = this,
      i = a(),
      r = l(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: s, touches: o, enabled: d } = t;
    if (!d) return;
    if (!s.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && s.preventInteractionOnTransition) return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let c = e;
    c.originalEvent && (c = c.originalEvent);
    let p = c.target;
    if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in c && 3 === c.which) return;
    if ("button" in c && c.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const h = !!s.noSwipingClass && "" !== s.noSwipingClass,
      f = e.composedPath ? e.composedPath() : e.path;
    h && c.target && c.target.shadowRoot && f && (p = f[0]);
    const m = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      g = !(!c.target || !c.target.shadowRoot);
    if (
      s.noSwiping &&
      (g
        ? (function (e, t = this) {
            return (function t(i) {
              if (!i || i === a() || i === l()) return null;
              i.assignedSlot && (i = i.assignedSlot);
              const r = i.closest(e);
              return r || i.getRootNode ? r || t(i.getRootNode().host) : null;
            })(t);
          })(m, p)
        : p.closest(m))
    )
      return void (t.allowClick = !0);
    if (s.swipeHandler && !p.closest(s.swipeHandler)) return;
    (o.currentX = c.pageX), (o.currentY = c.pageY);
    const v = o.currentX,
      _ = o.currentY,
      y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      w = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (y && (v <= w || v >= r.innerWidth - w)) {
      if ("prevent" !== y) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = v),
      (o.startY = _),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      s.threshold > 0 && (n.allowThresholdMove = !1);
    let b = !0;
    p.matches(n.focusableElements) &&
      ((b = !1), "SELECT" === p.nodeName && (n.isTouched = !1)),
      i.activeElement &&
        i.activeElement.matches(n.focusableElements) &&
        i.activeElement !== p &&
        i.activeElement.blur();
    const T = b && t.allowTouchMove && s.touchStartPreventDefault;
    (!s.touchStartForcePreventDefault && !T) ||
      p.isContentEditable ||
      c.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !s.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", c);
  }
  function R(e) {
    const t = a(),
      i = this,
      r = i.touchEventsData,
      { params: n, touches: s, rtlTranslate: o, enabled: l } = i;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !r.isTouched))
      return void (
        r.startMoving &&
        r.isScrolling &&
        i.emit("touchMoveOpposite", d)
      );
    const c = r.evCache.findIndex((e) => e.pointerId === d.pointerId);
    c >= 0 && (r.evCache[c] = d);
    const p = r.evCache.length > 1 ? r.evCache[0] : d,
      h = p.pageX,
      f = p.pageY;
    if (d.preventedByNestedSwiper) return (s.startX = h), void (s.startY = f);
    if (!i.allowTouchMove)
      return (
        d.target.matches(r.focusableElements) || (i.allowClick = !1),
        void (
          r.isTouched &&
          (Object.assign(s, {
            startX: h,
            startY: f,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: h,
            currentY: f,
          }),
          (r.touchStartTime = u()))
        )
      );
    if (n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (f < s.startY && i.translate <= i.maxTranslate()) ||
          (f > s.startY && i.translate >= i.minTranslate())
        )
          return (r.isTouched = !1), void (r.isMoved = !1);
      } else if (
        (h < s.startX && i.translate <= i.maxTranslate()) ||
        (h > s.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      d.target === t.activeElement &&
      d.target.matches(r.focusableElements)
    )
      return (r.isMoved = !0), void (i.allowClick = !1);
    if (
      (r.allowTouchCallbacks && i.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (s.currentX = h), (s.currentY = f);
    const m = s.currentX - s.startX,
      g = s.currentY - s.startY;
    if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold)
      return;
    if (void 0 === r.isScrolling) {
      let e;
      (i.isHorizontal() && s.currentY === s.startY) ||
      (i.isVertical() && s.currentX === s.startX)
        ? (r.isScrolling = !1)
        : m * m + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
          (r.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (r.isScrolling && i.emit("touchMoveOpposite", d),
      void 0 === r.startMoving &&
        ((s.currentX === s.startX && s.currentY === s.startY) ||
          (r.startMoving = !0)),
      r.isScrolling ||
        (i.zoom &&
          i.params.zoom &&
          i.params.zoom.enabled &&
          r.evCache.length > 1))
    )
      return void (r.isTouched = !1);
    if (!r.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
    let v = i.isHorizontal() ? m : g,
      _ = i.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (_ = Math.abs(_) * (o ? 1 : -1))),
      (s.diff = v),
      (v *= n.touchRatio),
      o && ((v = -v), (_ = -_));
    const y = i.touchesDirection;
    (i.swipeDirection = v > 0 ? "prev" : "next"),
      (i.touchesDirection = _ > 0 ? "prev" : "next");
    const w = i.params.loop && !n.cssMode;
    if (!r.isMoved) {
      if (
        (w && i.loopFix({ direction: i.swipeDirection }),
        (r.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        i.wrapperEl.dispatchEvent(e);
      }
      (r.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", d);
    }
    let b;
    r.isMoved &&
      y !== i.touchesDirection &&
      w &&
      Math.abs(v) >= 1 &&
      (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (b = !0)),
      i.emit("sliderMove", d),
      (r.isMoved = !0),
      (r.currentTranslate = v + r.startTranslate);
    let T = !0,
      x = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (x = 0),
      v > 0
        ? (w &&
            !b &&
            r.currentTranslate >
              (n.centeredSlides
                ? i.minTranslate() - i.size / 2
                : i.minTranslate()) &&
            i.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > i.minTranslate() &&
            ((T = !1),
            n.resistance &&
              (r.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + r.startTranslate + v) ** x)))
        : v < 0 &&
          (w &&
            !b &&
            r.currentTranslate <
              (n.centeredSlides
                ? i.maxTranslate() + i.size / 2
                : i.maxTranslate()) &&
            i.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                i.slides.length -
                ("auto" === n.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          r.currentTranslate < i.maxTranslate() &&
            ((T = !1),
            n.resistance &&
              (r.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - r.startTranslate - v) ** x))),
      T && (d.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (r.currentTranslate = r.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(v) > n.threshold || r.allowThresholdMove))
        return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove)
        return (
          (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          void (s.diff = i.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(r.currentTranslate),
      i.setTranslate(r.currentTranslate));
  }
  function G(e) {
    const t = this,
      i = t.touchEventsData,
      r = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (r >= 0 && i.evCache.splice(r, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: n,
      touches: s,
      rtlTranslate: a,
      slidesGrid: o,
      enabled: l,
    } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", c),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    n.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const p = u(),
      h = p - i.touchStartTime;
    if (t.allowClick) {
      const e = c.path || (c.composedPath && c.composedPath());
      t.updateClickedSlide((e && e[0]) || c.target),
        t.emit("tap click", c),
        h < 300 &&
          p - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", c);
    }
    if (
      ((i.lastClickTime = u()),
      d(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let f;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (f = n.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      n.cssMode)
    )
      return;
    if (t.params.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: f });
    let m = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== o[e + t]
        ? f >= o[e] && f < o[e + t] && ((m = e), (g = o[e + t] - o[e]))
        : f >= o[e] && ((m = e), (g = o[o.length - 1] - o[o.length - 2]));
    }
    let v = null,
      _ = null;
    n.rewind &&
      (t.isBeginning
        ? (_ =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const y = (f - o[m]) / g,
      w = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (h > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (y >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? v : m + w)
          : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (y > 1 - n.longSwipesRatio
            ? t.slideTo(m + w)
            : null !== _ && y < 0 && Math.abs(y) > n.longSwipesRatio
            ? t.slideTo(_)
            : t.slideTo(m));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
        ? c.target === t.navigation.nextEl
          ? t.slideTo(m + w)
          : t.slideTo(m)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + w),
          "prev" === t.swipeDirection && t.slideTo(null !== _ ? _ : m));
    }
  }
  function $() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: n, snapGrid: s } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    o
      ? e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = r),
      e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function N(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function V() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: r } = e;
    if (!r) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const s = e.maxTranslate() - e.minTranslate();
    (n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    P(this, e.target), this.update();
  }
  let H = !1;
  function j() {}
  const Y = (e, t) => {
    const i = a(),
      { params: r, el: n, wrapperEl: s, device: o } = e,
      l = !!r.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    n[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      i[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) &&
        n[d]("click", e.onClick, !0),
      r.cssMode && s[d]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            $,
            !0
          )
        : e[u]("observerUpdate", $, !0),
      n[d]("load", e.onLoad, { capture: !0 });
  };
  const W = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const X = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function U(e, t) {
    return function (i = {}) {
      const r = Object.keys(i)[0],
        n = i[r];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
            !0 === e[r] &&
            (e[r] = { auto: !0 }),
          r in e && "enabled" in n
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "object" != typeof e[r] ||
                "enabled" in e[r] ||
                (e[r].enabled = !0),
              e[r] || (e[r] = { enabled: !1 }),
              h(t, i))
            : h(t, i))
        : h(t, i);
    };
  }
  const Q = {
      eventsEmitter: k,
      update: L,
      translate: z,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const i = this,
            { params: r } = i;
          r.cssMode ||
            (r.autoHeight && i.updateAutoHeight(),
            I({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const i = this,
            { params: r } = i;
          (i.animating = !1),
            r.cssMode ||
              (i.setTransition(0),
              I({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: D,
      loop: B,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (i.style.cursor = "move"),
            (i.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: i } = e;
          (e.onTouchStart = F.bind(e)),
            (e.onTouchMove = R.bind(e)),
            (e.onTouchEnd = G.bind(e)),
            i.cssMode && (e.onScroll = V.bind(e)),
            (e.onClick = N.bind(e)),
            (e.onLoad = q.bind(e)),
            H || (t.addEventListener("touchstart", j), (H = !0)),
            Y(e, "on");
        },
        detachEvents: function () {
          Y(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: i, params: r, el: n } = e,
            s = r.breakpoints;
          if (!s || (s && 0 === Object.keys(s).length)) return;
          const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const o = (a in s ? s[a] : void 0) || e.originalParams,
            l = W(e, r),
            d = W(e, o),
            u = r.enabled;
          l && !d
            ? (n.classList.remove(
                `${r.containerModifierClass}grid`,
                `${r.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              d &&
              (n.classList.add(`${r.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === r.grid.fill)) &&
                n.classList.add(`${r.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const i = r[t] && r[t].enabled,
                n = o[t] && o[t].enabled;
              i && !n && e[t].disable(), !i && n && e[t].enable();
            });
          const c = o.direction && o.direction !== r.direction,
            p = r.loop && (o.slidesPerView !== r.slidesPerView || c);
          c && i && e.changeDirection(), h(e.params, o);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", o),
            p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", i) {
          if (!e || ("container" === t && !i)) return;
          let r = !1;
          const n = l(),
            s = "window" === t ? n.innerHeight : i.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: s, value: o } = a[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${o}px)`).matches && (r = s)
              : o <= i.clientWidth && (r = s);
          }
          return r || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: r } = i;
          if (r) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: i, rtl: r, el: n, device: s } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && i.push(t + r);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: r },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...a), n.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    K = {};
  class Z {
    constructor(...e) {
      let t, i;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (i = e[0])
        : ([t, i] = e),
        i || (i = {}),
        (i = h({}, i)),
        t && !i.el && (i.el = t);
      const r = a();
      if (
        i.el &&
        "string" == typeof i.el &&
        r.querySelectorAll(i.el).length > 1
      ) {
        const e = [];
        return (
          r.querySelectorAll(i.el).forEach((t) => {
            const r = h({}, i, { el: t });
            e.push(new Z(r));
          }),
          e
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = E()),
        (n.device = C({ userAgent: i.userAgent })),
        (n.browser = M()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
      const s = {};
      n.modules.forEach((e) => {
        e({
          params: i,
          swiper: n,
          extendParams: U(i, s),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const o = h({}, X, s);
      return (
        (n.params = h({}, o, K, i)),
        (n.originalParams = h({}, n.params)),
        (n.passedParams = h({}, i)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((e) => {
            n.on(e, n.params.on[e]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === n.params.direction,
          isVertical: () => "vertical" === n.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: n.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = y(g(t, `.${i.slideClass}, swiper-slide`)[0]);
      return y(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = g(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        n = (i.maxTranslate() - r) * e + r;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: i,
        slides: r,
        slidesGrid: n,
        slidesSizesGrid: s,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let e,
          t = r[o].swiperSlideSize;
        for (let i = o + 1; i < r.length; i += 1)
          r[i] &&
            !e &&
            ((t += r[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let i = o - 1; i >= 0; i -= 1)
          r[i] &&
            !e &&
            ((t += r[i].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < r.length; e += 1) {
          (t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          n[o] - n[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function r() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (
        (i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && P(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        r(), e.params.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(t.length - 1, 0, !1, !0);
        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const i = this,
        r = i.params.direction;
      return (
        e || (e = "horizontal" === r ? "vertical" : "horizontal"),
        e === r ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if (("string" == typeof i && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t), i.shadowEl && (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (i && i.shadowRoot && i.shadowRoot.querySelector) {
          return i.shadowRoot.querySelector(r());
        }
        return g(i, r())[0];
      })();
      return (
        !n &&
          t.params.createElements &&
          ((n = v("div", t.params.wrapperClass)),
          i.append(n),
          g(i, `.${t.params.slideClass}`).forEach((e) => {
            n.append(e);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: n,
          slidesEl: t.isElement ? i : n,
          mounted: !0,
          rtl: "rtl" === i.dir.toLowerCase() || "rtl" === _(i, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === i.dir.toLowerCase() || "rtl" === _(i, "direction")),
          wrongRTL: "-webkit-box" === _(n, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? P(t, e)
              : e.addEventListener("load", (e) => {
                  P(t, e.target);
                });
          }),
          A(t),
          (t.initialized = !0),
          A(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const i = this,
        { params: r, el: n, wrapperEl: s, slides: a } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttribute("style"),
            s.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((e) => {
                e.classList.remove(
                  r.slideVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      h(K, e);
    }
    static get extendedDefaults() {
      return K;
    }
    static get defaults() {
      return X;
    }
    static installModule(e) {
      Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
      const t = Z.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Z.installModule(e)), Z)
        : (Z.installModule(e), Z);
    }
  }
  Object.keys(Q).forEach((e) => {
    Object.keys(Q[e]).forEach((t) => {
      Z.prototype[t] = Q[e][t];
    });
  }),
    Z.use([
      function ({ swiper: e, on: t, emit: i }) {
        const r = l();
        let n = null,
          s = null;
        const a = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (i("beforeResize"), i("resize"));
          },
          o = () => {
            e && !e.destroyed && e.initialized && i("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== r.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                s = r.requestAnimationFrame(() => {
                  const { width: i, height: r } = e;
                  let n = i,
                    s = r;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: i, target: r }) => {
                      (r && r !== e.el) ||
                        ((n = i ? i.width : (t[0] || t).inlineSize),
                        (s = i ? i.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === i && s === r) || a();
                });
              })),
              n.observe(e.el))
            : (r.addEventListener("resize", a),
              r.addEventListener("orientationchange", o));
        }),
          t("destroy", () => {
            s && r.cancelAnimationFrame(s),
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              r.removeEventListener("resize", a),
              r.removeEventListener("orientationchange", o);
          });
      },
      function ({ swiper: e, extendParams: t, on: i, emit: r }) {
        const n = [],
          s = l(),
          a = (t, i = {}) => {
            const a = new (s.MutationObserver || s.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void r("observerUpdate", t[0]);
                const i = function () {
                  r("observerUpdate", t[0]);
                };
                s.requestAnimationFrame
                  ? s.requestAnimationFrame(i)
                  : s.setTimeout(i, 0);
              }
            );
            a.observe(t, {
              attributes: void 0 === i.attributes || i.attributes,
              childList: void 0 === i.childList || i.childList,
              characterData: void 0 === i.characterData || i.characterData,
            }),
              n.push(a);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = w(e.el);
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.el, { childList: e.params.observeSlideChildren }),
                a(e.wrapperEl, { attributes: !1 });
            }
          }),
          i("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const J = Z;
  function ee(e, t, i, r) {
    return (
      e.params.createElements &&
        Object.keys(r).forEach((n) => {
          if (!i[n] && !0 === i.auto) {
            let s = g(e.el, `.${r[n]}`)[0];
            s || ((s = v("div", r[n])), (s.className = r[n]), e.el.append(s)),
              (i[n] = s),
              (t[n] = s);
          }
        }),
      i
    );
  }
  function te({ swiper: e, extendParams: t, on: i, emit: r }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function s(t) {
      let i;
      return t &&
        "string" == typeof t &&
        e.isElement &&
        ((i = e.el.shadowRoot.querySelector(t)), i)
        ? i
        : (t &&
            ("string" == typeof t && (i = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              i.length > 1 &&
              1 === e.el.querySelectorAll(t).length &&
              (i = e.el.querySelector(t))),
          t && !i ? t : i);
    }
    function a(t, i) {
      const r = e.params.navigation;
      (t = n(t)).forEach((t) => {
        t &&
          (t.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
          "BUTTON" === t.tagName && (t.disabled = i),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](r.lockClass));
      });
    }
    function o() {
      const { nextEl: t, prevEl: i } = e.navigation;
      if (e.params.loop) return a(i, !1), void a(t, !1);
      a(i, e.isBeginning && !e.params.rewind),
        a(t, e.isEnd && !e.params.rewind);
    }
    function l(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function d(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function u() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = ee(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      let i = s(t.nextEl),
        r = s(t.prevEl);
      Object.assign(e.navigation, { nextEl: i, prevEl: r }),
        (i = n(i)),
        (r = n(r));
      const a = (i, r) => {
        i && i.addEventListener("click", "next" === r ? d : l),
          !e.enabled && i && i.classList.add(...t.lockClass.split(" "));
      };
      i.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
    }
    function c() {
      let { nextEl: t, prevEl: i } = e.navigation;
      (t = n(t)), (i = n(i));
      const r = (t, i) => {
        t.removeEventListener("click", "next" === i ? d : l),
          t.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      t.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
    }
    i("init", () => {
      !1 === e.params.navigation.enabled ? p() : (u(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        c();
      }),
      i("enable disable", () => {
        let { nextEl: t, prevEl: i } = e.navigation;
        (t = n(t)),
          (i = n(i)),
          [...t, ...i]
            .filter((e) => !!e)
            .forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.navigation.lockClass
              )
            );
      }),
      i("click", (t, i) => {
        let { nextEl: s, prevEl: a } = e.navigation;
        (s = n(s)), (a = n(a));
        const o = i.target;
        if (
          e.params.navigation.hideOnClick &&
          !a.includes(o) &&
          !s.includes(o)
        ) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === o || e.pagination.el.contains(o))
          )
            return;
          let t;
          s.length
            ? (t = s[0].classList.contains(e.params.navigation.hiddenClass))
            : a.length &&
              (t = a[0].classList.contains(e.params.navigation.hiddenClass)),
            r(!0 === t ? "navigationShow" : "navigationHide"),
            [...s, ...a]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const p = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        c();
    };
    Object.assign(e.navigation, {
      enable: () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u(),
          o();
      },
      disable: p,
      update: o,
      init: u,
      destroy: c,
    });
  }
  function ie(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function re({ swiper: e, extendParams: t, on: i, emit: r }) {
    const n = "swiper-pagination";
    let s;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let a = 0;
    const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
      );
    }
    function d(t, i) {
      const { bulletActiveClass: r } = e.params.pagination;
      t &&
        (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
        (t.classList.add(`${r}-${i}`),
        (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
          t.classList.add(`${r}-${i}-${i}`));
    }
    function u(t) {
      const i = t.target.closest(ie(e.params.pagination.bulletClass));
      if (!i) return;
      t.preventDefault();
      const r = y(i) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === r) return;
        const t = e.getSlideIndexByData(r),
          i = e.getSlideIndexByData(e.realIndex);
        t > e.slides.length - e.loopedSlides &&
          e.loopFix({
            direction: t > i ? "next" : "prev",
            activeSlideIndex: t,
            slideTo: !1,
          }),
          e.slideToLoop(r);
      } else e.slideTo(r);
    }
    function c() {
      const t = e.rtl,
        i = e.params.pagination;
      if (l()) return;
      let n,
        u,
        c = e.pagination.el;
      c = o(c);
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        h = e.params.loop
          ? Math.ceil(p / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((u = e.previousRealIndex || 0),
            (n =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : void 0 !== e.snapIndex
          ? ((n = e.snapIndex), (u = e.previousSnapIndex))
          : ((u = e.previousIndex || 0), (n = e.activeIndex || 0)),
        "bullets" === i.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const r = e.pagination.bullets;
        let o, l, p;
        if (
          (i.dynamicBullets &&
            ((s = b(r[0], e.isHorizontal() ? "width" : "height", !0)),
            c.forEach((t) => {
              t.style[e.isHorizontal() ? "width" : "height"] =
                s * (i.dynamicMainBullets + 4) + "px";
            }),
            i.dynamicMainBullets > 1 &&
              void 0 !== u &&
              ((a += n - (u || 0)),
              a > i.dynamicMainBullets - 1
                ? (a = i.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (o = Math.max(n - a, 0)),
            (l = o + (Math.min(r.length, i.dynamicMainBullets) - 1)),
            (p = (l + o) / 2)),
          r.forEach((e) => {
            const t = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((e) => `${i.bulletActiveClass}${e}`),
            ]
              .map((e) =>
                "string" == typeof e && e.includes(" ") ? e.split(" ") : e
              )
              .flat();
            e.classList.remove(...t);
          }),
          c.length > 1)
        )
          r.forEach((e) => {
            const t = y(e);
            t === n && e.classList.add(...i.bulletActiveClass.split(" ")),
              i.dynamicBullets &&
                (t >= o &&
                  t <= l &&
                  e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),
                t === o && d(e, "prev"),
                t === l && d(e, "next"));
          });
        else {
          const e = r[n];
          if (
            (e && e.classList.add(...i.bulletActiveClass.split(" ")),
            i.dynamicBullets)
          ) {
            const e = r[o],
              t = r[l];
            for (let e = o; e <= l; e += 1)
              r[e] &&
                r[e].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
            d(e, "prev"), d(t, "next");
          }
        }
        if (i.dynamicBullets) {
          const n = Math.min(r.length, i.dynamicMainBullets + 4),
            a = (s * n - s) / 2 - p * s,
            o = t ? "right" : "left";
          r.forEach((t) => {
            t.style[e.isHorizontal() ? o : "top"] = `${a}px`;
          });
        }
      }
      c.forEach((t, s) => {
        if (
          ("fraction" === i.type &&
            (t.querySelectorAll(ie(i.currentClass)).forEach((e) => {
              e.textContent = i.formatFractionCurrent(n + 1);
            }),
            t.querySelectorAll(ie(i.totalClass)).forEach((e) => {
              e.textContent = i.formatFractionTotal(h);
            })),
          "progressbar" === i.type)
        ) {
          let r;
          r = i.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const s = (n + 1) / h;
          let a = 1,
            o = 1;
          "horizontal" === r ? (a = s) : (o = s),
            t.querySelectorAll(ie(i.progressbarFillClass)).forEach((t) => {
              (t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                (t.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        "custom" === i.type && i.renderCustom
          ? ((t.innerHTML = i.renderCustom(e, n + 1, h)),
            0 === s && r("paginationRender", t))
          : (0 === s && r("paginationRender", t), r("paginationUpdate", t)),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](i.lockClass);
      });
    }
    function p() {
      const t = e.params.pagination;
      if (l()) return;
      const i =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length;
      let n = e.pagination.el;
      n = o(n);
      let s = "";
      if ("bullets" === t.type) {
        let r = e.params.loop
          ? Math.ceil(i / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && r > i && (r = i);
        for (let i = 0; i < r; i += 1)
          t.renderBullet
            ? (s += t.renderBullet.call(e, i, t.bulletClass))
            : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
      }
      "fraction" === t.type &&
        (s = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        "progressbar" === t.type &&
          (s = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
        (e.pagination.bullets = []),
        n.forEach((i) => {
          "custom" !== t.type && (i.innerHTML = s || ""),
            "bullets" === t.type &&
              e.pagination.bullets.push(
                ...i.querySelectorAll(ie(t.bulletClass))
              );
        }),
        "custom" !== t.type && r("paginationRender", n[0]);
    }
    function h() {
      e.params.pagination = ee(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let i;
      "string" == typeof t.el &&
        e.isElement &&
        (i = e.el.shadowRoot.querySelector(t.el)),
        i ||
          "string" != typeof t.el ||
          (i = [...document.querySelectorAll(t.el)]),
        i || (i = t.el),
        i &&
          0 !== i.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            Array.isArray(i) &&
            i.length > 1 &&
            ((i = [...e.el.querySelectorAll(t.el)]),
            i.length > 1 &&
              (i = i.filter((t) => w(t, ".swiper")[0] === e.el)[0])),
          Array.isArray(i) && 1 === i.length && (i = i[0]),
          Object.assign(e.pagination, { el: i }),
          (i = o(i)),
          i.forEach((i) => {
            "bullets" === t.type &&
              t.clickable &&
              i.classList.add(t.clickableClass),
              i.classList.add(t.modifierClass + t.type),
              i.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (i.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                (a = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                i.classList.add(t.progressbarOppositeClass),
              t.clickable && i.addEventListener("click", u),
              e.enabled || i.classList.add(t.lockClass);
          }));
    }
    function f() {
      const t = e.params.pagination;
      if (l()) return;
      let i = e.pagination.el;
      i &&
        ((i = o(i)),
        i.forEach((i) => {
          i.classList.remove(t.hiddenClass),
            i.classList.remove(t.modifierClass + t.type),
            i.classList.remove(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            t.clickable && i.removeEventListener("click", u);
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((e) =>
            e.classList.remove(...t.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const t = e.params.pagination;
      let { el: i } = e.pagination;
      (i = o(i)),
        i.forEach((i) => {
          i.classList.remove(t.horizontalClass, t.verticalClass),
            i.classList.add(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            );
        });
    }),
      i("init", () => {
        !1 === e.params.pagination.enabled ? m() : (h(), p(), c());
      }),
      i("activeIndexChange", () => {
        void 0 === e.snapIndex && c();
      }),
      i("snapIndexChange", () => {
        c();
      }),
      i("snapGridLengthChange", () => {
        p(), c();
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        c();
      }),
      i("click", (t, i) => {
        const n = i.target;
        let { el: s } = e.pagination;
        if (
          (Array.isArray(s) || (s = [s].filter((e) => !!e)),
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            s &&
            s.length > 0 &&
            !n.classList.contains(e.params.pagination.bulletClass))
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
              (e.navigation.prevEl && n === e.navigation.prevEl))
          )
            return;
          const t = s[0].classList.contains(e.params.pagination.hiddenClass);
          r(!0 === t ? "paginationShow" : "paginationHide"),
            s.forEach((t) =>
              t.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const m = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: t } = e.pagination;
      t &&
        ((t = o(t)),
        t.forEach((t) =>
          t.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        f();
    };
    Object.assign(e.pagination, {
      enable: () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          h(),
          p(),
          c();
      },
      disable: m,
      render: p,
      update: c,
      init: h,
      destroy: f,
    });
  }
  function ne({ swiper: e, extendParams: t, on: i, emit: r, params: n }) {
    let s, o;
    (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    let l,
      d,
      u,
      c,
      p,
      h,
      f,
      m = n && n.autoplay ? n.autoplay.delay : 3e3,
      g = n && n.autoplay ? n.autoplay.delay : 3e3,
      v = new Date().getTime;
    function _(t) {
      e &&
        !e.destroyed &&
        e.wrapperEl &&
        t.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", _), S());
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (d = !0) : d && ((g = l), (d = !1));
        const t = e.autoplay.paused ? l : v + g - new Date().getTime();
        (e.autoplay.timeLeft = t),
          r("autoplayTimeLeft", t, t / m),
          (o = requestAnimationFrame(() => {
            y();
          }));
      },
      w = (t) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), y();
        let i = void 0 === t ? e.params.autoplay.delay : t;
        (m = e.params.autoplay.delay), (g = e.params.autoplay.delay);
        const n = (() => {
          let t;
          if (
            ((t =
              e.virtual && e.params.virtual.enabled
                ? e.slides.filter((e) =>
                    e.classList.contains("swiper-slide-active")
                  )[0]
                : e.slides[e.activeIndex]),
            !t)
          )
            return;
          return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(n) &&
          n > 0 &&
          void 0 === t &&
          ((i = n), (m = n), (g = n)),
          (l = i);
        const a = e.params.speed,
          d = () => {
            e &&
              !e.destroyed &&
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(a, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, a, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(a, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, a, !0, !0), r("autoplay")),
              e.params.cssMode &&
                ((v = new Date().getTime()),
                requestAnimationFrame(() => {
                  w();
                })));
          };
        return (
          i > 0
            ? (clearTimeout(s),
              (s = setTimeout(() => {
                d();
              }, i)))
            : requestAnimationFrame(() => {
                d();
              }),
          i
        );
      },
      b = () => {
        (e.autoplay.running = !0), w(), r("autoplayStart");
      },
      T = () => {
        (e.autoplay.running = !1),
          clearTimeout(s),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      x = (t, i) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(s), t || (f = !0);
        const n = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", _)
              : S();
        };
        if (((e.autoplay.paused = !0), i))
          return h && (l = e.params.autoplay.delay), (h = !1), void n();
        const a = l || e.params.autoplay.delay;
        (l = a - (new Date().getTime() - v)),
          (e.isEnd && l < 0 && !e.params.loop) || (l < 0 && (l = 0), n());
      },
      S = () => {
        (e.isEnd && l < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((v = new Date().getTime()),
          f ? ((f = !1), w(l)) : w(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      E = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const t = a();
        "hidden" === t.visibilityState && ((f = !0), x(!0)),
          "visible" === t.visibilityState && S();
      },
      C = (e) => {
        "mouse" === e.pointerType && ((f = !0), x(!0));
      },
      M = (t) => {
        "mouse" === t.pointerType && e.autoplay.paused && S();
      };
    i("init", () => {
      e.params.autoplay.enabled &&
        (e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", C),
          e.el.addEventListener("pointerleave", M)),
        a().addEventListener("visibilitychange", E),
        (v = new Date().getTime()),
        b());
    }),
      i("destroy", () => {
        e.el.removeEventListener("pointerenter", C),
          e.el.removeEventListener("pointerleave", M),
          a().removeEventListener("visibilitychange", E),
          e.autoplay.running && T();
      }),
      i("beforeTransitionStart", (t, i, r) => {
        !e.destroyed &&
          e.autoplay.running &&
          (r || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : T());
      }),
      i("sliderFirstMove", () => {
        !e.destroyed &&
          e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction
            ? T()
            : ((u = !0),
              (c = !1),
              (f = !1),
              (p = setTimeout(() => {
                (f = !0), (c = !0), x(!0);
              }, 200))));
      }),
      i("touchEnd", () => {
        if (!e.destroyed && e.autoplay.running && u) {
          if (
            (clearTimeout(p),
            clearTimeout(s),
            e.params.autoplay.disableOnInteraction)
          )
            return (c = !1), void (u = !1);
          c && e.params.cssMode && S(), (c = !1), (u = !1);
        }
      }),
      i("slideChange", () => {
        !e.destroyed && e.autoplay.running && (h = !0);
      }),
      Object.assign(e.autoplay, { start: b, stop: T, pause: x, resume: S });
  }
  function se() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    se(),
      document.querySelector(".swiper") &&
        new J(".swiper", {
          modules: [te, ne],
          effect: "fade",
          autoplay: { delay: 500, disableOnInteraction: !1 },
          centeredSlides: !0,
          observer: !0,
          observeParents: !0,
          slidesPerView: 6,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1268: { slidesPerView: 4, spaceBetween: 30 },
            1440: { slidesPerView: 5, spaceBetween: 30 },
          },
          on: {},
        }),
      document.querySelector(".swiper2") &&
        new J(".swiper2", {
          modules: [te, re],
          slidesPerView: 3,
          spaceBetween: 30,
          autoHeight: !0,
          centeredSlides: !0,
          speed: 800,
          pagination: {
            el: ".swiper2-pagination",
            type: "bullets",
            clickable: !0,
          },
          navigation: {
            nextEl: ".swiper2-button-next",
            prevEl: ".swiper2-button-prev",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
          },
          on: {},
        });
  });
  let ae = !1;
  function oe(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function le(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  setTimeout(() => {
    if (ae) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var de,
    ue,
    ce,
    pe,
    he,
    fe,
    me,
    ge,
    ve,
    _e,
    ye,
    we,
    be,
    Te,
    xe,
    Se = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Ee = { duration: 0.5, overwrite: !1, delay: 0 },
    Ce = 1e8,
    Me = 1e-8,
    ke = 2 * Math.PI,
    Pe = ke / 4,
    Oe = 0,
    Ae = Math.sqrt,
    Le = Math.cos,
    ze = Math.sin,
    Ie = function (e) {
      return "string" == typeof e;
    },
    De = function (e) {
      return "function" == typeof e;
    },
    Be = function (e) {
      return "number" == typeof e;
    },
    Fe = function (e) {
      return void 0 === e;
    },
    Re = function (e) {
      return "object" == typeof e;
    },
    Ge = function (e) {
      return !1 !== e;
    },
    $e = function () {
      return "undefined" != typeof window;
    },
    Ne = function (e) {
      return De(e) || Ie(e);
    },
    Ve =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    qe = Array.isArray,
    He = /(?:-?\.?\d|\.)+/gi,
    je = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ye = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    We = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Xe = /[+-]=-?[.\d]+/,
    Ue = /[^,'"\[\]\s]+/gi,
    Qe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ke = {},
    Ze = {},
    Je = function (e) {
      return (Ze = kt(e, Ke)) && kr;
    },
    et = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    tt = function (e, t) {
      return !t && console.warn(e);
    },
    it = function (e, t) {
      return (e && (Ke[e] = t) && Ze && (Ze[e] = t)) || Ke;
    },
    rt = function () {
      return 0;
    },
    nt = { suppressEvents: !0, isStart: !0, kill: !1 },
    st = { suppressEvents: !0, kill: !1 },
    at = { suppressEvents: !0 },
    ot = {},
    lt = [],
    dt = {},
    ut = {},
    ct = {},
    pt = 30,
    ht = [],
    ft = "",
    mt = function (e) {
      var t,
        i,
        r = e[0];
      if ((Re(r) || De(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
        for (i = ht.length; i-- && !ht[i].targetTest(r); );
        t = ht[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new qi(e[i], t)))) ||
          e.splice(i, 1);
      return e;
    },
    gt = function (e) {
      return e._gsap || mt(ai(e))[0]._gsap;
    },
    vt = function (e, t, i) {
      return (i = e[t]) && De(i)
        ? e[t]()
        : (Fe(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    _t = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    yt = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    wt = function (e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    },
    bt = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        "+" === i ? e + r : "-" === i ? e - r : "*" === i ? e * r : e / r
      );
    },
    Tt = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    xt = function () {
      var e,
        t,
        i = lt.length,
        r = lt.slice(0);
      for (dt = {}, lt.length = 0, e = 0; e < i; e++)
        (t = r[e]) &&
          t._lazy &&
          (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    },
    St = function (e, t, i, r) {
      lt.length && !ue && xt(),
        e.render(t, i, r || (ue && t < 0 && (e._initted || e._startAt))),
        lt.length && !ue && xt();
    },
    Et = function (e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(Ue).length < 2
        ? t
        : Ie(e)
        ? e.trim()
        : e;
    },
    Ct = function (e) {
      return e;
    },
    Mt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    kt = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Pt = function e(t, i) {
      for (var r in i)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (t[r] = Re(i[r]) ? e(t[r] || (t[r] = {}), i[r]) : i[r]);
      return t;
    },
    Ot = function (e, t) {
      var i,
        r = {};
      for (i in e) i in t || (r[i] = e[i]);
      return r;
    },
    At = function (e) {
      var t,
        i = e.parent || pe,
        r = e.keyframes
          ? ((t = qe(e.keyframes)),
            function (e, i) {
              for (var r in i)
                r in e ||
                  ("duration" === r && t) ||
                  "ease" === r ||
                  (e[r] = i[r]);
            })
          : Mt;
      if (Ge(e.inherit))
        for (; i; ) r(e, i.vars.defaults), (i = i.parent || i._dp);
      return e;
    },
    Lt = function (e, t, i, r, n) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var s,
        a = e[r];
      if (n) for (s = t[n]; a && a[n] > s; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    },
    zt = function (e, t, i, r) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var n = t._prev,
        s = t._next;
      n ? (n._next = s) : e[i] === t && (e[i] = s),
        s ? (s._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    It = function (e, t) {
      e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
        (e._act = 0);
    },
    Dt = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Bt = function (e, t, i, r) {
      return (
        e._startAt &&
        (ue
          ? e._startAt.revert(st)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Ft = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    Rt = function (e) {
      return e._repeat ? Gt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Gt = function (e, t) {
      var i = Math.floor((e /= t));
      return e && i === e ? i - 1 : i;
    },
    $t = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Nt = function (e) {
      return (e._end = wt(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || Me) || 0)
      ));
    },
    Vt = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = wt(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Nt(e),
          i._dirty || Dt(i, e)),
        e
      );
    },
    qt = function (e, t) {
      var i;
      if (
        ((t._time || (t._initted && !t._dur)) &&
          ((i = $t(e.rawTime(), t)),
          (!t._dur || ti(0, t.totalDuration(), i) - t._tTime > Me) &&
            t.render(i, !0)),
        Dt(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -1e-8;
      }
    },
    Ht = function (e, t, i, r) {
      return (
        t.parent && It(t),
        (t._start = wt(
          (Be(i) ? i : i || e !== pe ? Zt(e, i, t) : e._time) + t._delay
        )),
        (t._end = wt(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Lt(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Xt(t) || (e._recent = t),
        r || qt(e, t),
        e._ts < 0 && Vt(e, e._tTime),
        e
      );
    },
    jt = function (e, t) {
      return (
        (Ke.ScrollTrigger || et("scrollTrigger", t)) &&
        Ke.ScrollTrigger.create(t, e)
      );
    },
    Yt = function (e, t, i, r, n) {
      return (
        Ki(e, t, n),
        e._initted
          ? !i &&
            e._pt &&
            !ue &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            ve !== Oi.frame
            ? (lt.push(e), (e._lazy = [n, r]), 1)
            : void 0
          : 1
      );
    },
    Wt = function e(t) {
      var i = t.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e(i));
    },
    Xt = function (e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t;
    },
    Ut = function (e, t, i, r) {
      var n = e._repeat,
        s = wt(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !r && (e._time *= s / e._dur),
        (e._dur = s),
        (e._tDur = n ? (n < 0 ? 1e10 : wt(s * (n + 1) + e._rDelay * n)) : s),
        a > 0 && !r && Vt(e, (e._tTime = e._tDur * a)),
        e.parent && Nt(e),
        i || Dt(e.parent, e),
        e
      );
    },
    Qt = function (e) {
      return e instanceof ji ? Dt(e) : Ut(e, e._dur);
    },
    Kt = { _start: 0, endTime: rt, totalDuration: rt },
    Zt = function e(t, i, r) {
      var n,
        s,
        a,
        o = t.labels,
        l = t._recent || Kt,
        d = t.duration() >= Ce ? l.endTime(!1) : t._dur;
      return Ie(i) && (isNaN(i) || i in o)
        ? ((s = i.charAt(0)),
          (a = "%" === i.substr(-1)),
          (n = i.indexOf("=")),
          "<" === s || ">" === s
            ? (n >= 0 && (i = i.replace(/=/, "")),
              ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                  (a ? (n < 0 ? l : r).totalDuration() / 100 : 1))
            : n < 0
            ? (i in o || (o[i] = d), o[i])
            : ((s = parseFloat(i.charAt(n - 1) + i.substr(n + 1))),
              a && r && (s = (s / 100) * (qe(r) ? r[0] : r).totalDuration()),
              n > 1 ? e(t, i.substr(0, n - 1), r) + s : d + s))
        : null == i
        ? d
        : +i;
    },
    Jt = function (e, t, i) {
      var r,
        n,
        s = Be(t[1]),
        a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];
      if ((s && (o.duration = t[1]), (o.parent = i), e)) {
        for (r = o, n = i; n && !("immediateRender" in r); )
          (r = n.vars.defaults || {}), (n = Ge(n.vars.inherit) && n.parent);
        (o.immediateRender = Ge(r.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
      }
      return new ir(t[0], o, t[a + 1]);
    },
    ei = function (e, t) {
      return e || 0 === e ? t(e) : t;
    },
    ti = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    ii = function (e, t) {
      return Ie(e) && (t = Qe.exec(e)) ? t[1] : "";
    },
    ri = [].slice,
    ni = function (e, t) {
      return (
        e &&
        Re(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && Re(e[0]))) &&
        !e.nodeType &&
        e !== he
      );
    },
    si = function (e, t, i) {
      return (
        void 0 === i && (i = []),
        e.forEach(function (e) {
          var r;
          return (Ie(e) && !t) || ni(e, 1)
            ? (r = i).push.apply(r, ai(e))
            : i.push(e);
        }) || i
      );
    },
    ai = function (e, t, i) {
      return ce && !t && ce.selector
        ? ce.selector(e)
        : !Ie(e) || i || (!fe && Ai())
        ? qe(e)
          ? si(e, i)
          : ni(e)
          ? ri.call(e, 0)
          : e
          ? [e]
          : []
        : ri.call((t || me).querySelectorAll(e), 0);
    },
    oi = function (e) {
      return (
        (e = ai(e)[0] || tt("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ai(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? tt("Invalid scope") || me.createElement("div")
              : e
          );
        }
      );
    },
    li = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    di = function (e) {
      if (De(e)) return e;
      var t = Re(e) ? e : { each: e },
        i = Ri(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        s = {},
        a = r > 0 && r < 1,
        o = isNaN(r) || a,
        l = t.axis,
        d = r,
        u = r;
      return (
        Ie(r)
          ? (d = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && o && ((d = r[0]), (u = r[1])),
        function (e, a, c) {
          var p,
            h,
            f,
            m,
            g,
            v,
            _,
            y,
            w,
            b = (c || t).length,
            T = s[b];
          if (!T) {
            if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, Ce])[1])) {
              for (
                _ = -Ce;
                _ < (_ = c[w++].getBoundingClientRect().left) && w < b;

              );
              w--;
            }
            for (
              T = s[b] = [],
                p = o ? Math.min(w, b) * d - 0.5 : r % w,
                h = w === Ce ? 0 : o ? (b * u) / w - 0.5 : (r / w) | 0,
                _ = 0,
                y = Ce,
                v = 0;
              v < b;
              v++
            )
              (f = (v % w) - p),
                (m = h - ((v / w) | 0)),
                (T[v] = g =
                  l ? Math.abs("y" === l ? m : f) : Ae(f * f + m * m)),
                g > _ && (_ = g),
                g < y && (y = g);
            "random" === r && li(T),
              (T.max = _ - y),
              (T.min = y),
              (T.v = b =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (w > b
                      ? b - 1
                      : l
                      ? "y" === l
                        ? b / w
                        : w
                      : Math.max(w, b / w)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (T.b = b < 0 ? n - b : n),
              (T.u = ii(t.amount || t.each) || 0),
              (i = i && b < 0 ? Bi(i) : i);
          }
          return (
            (b = (T[e] - T.min) / T.max || 0),
            wt(T.b + (i ? i(b) : b) * T.v) + T.u
          );
        }
      );
    },
    ui = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = wt(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (Be(i) ? 0 : ii(i));
      };
    },
    ci = function (e, t) {
      var i,
        r,
        n = qe(e);
      return (
        !n &&
          Re(e) &&
          ((i = n = e.radius || Ce),
          e.values
            ? ((e = ai(e.values)), (r = !Be(e[0])) && (i *= i))
            : (e = ui(e.increment))),
        ei(
          t,
          n
            ? De(e)
              ? function (t) {
                  return (r = e(t)), Math.abs(r - t) <= i ? r : t;
                }
              : function (t) {
                  for (
                    var n,
                      s,
                      a = parseFloat(r ? t.x : t),
                      o = parseFloat(r ? t.y : 0),
                      l = Ce,
                      d = 0,
                      u = e.length;
                    u--;

                  )
                    (n = r
                      ? (n = e[u].x - a) * n + (s = e[u].y - o) * s
                      : Math.abs(e[u] - a)) < l && ((l = n), (d = u));
                  return (
                    (d = !i || l <= i ? e[d] : t),
                    r || d === t || Be(t) ? d : d + ii(t)
                  );
                }
            : ui(e)
        )
      );
    },
    pi = function (e, t, i, r) {
      return ei(qe(e) ? !t : !0 === i ? !!(i = 0) : !r, function () {
        return qe(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    hi = function (e, t, i) {
      return ei(i, function (i) {
        return e[~~t(i)];
      });
    },
    fi = function (e) {
      for (var t, i, r, n, s = 0, a = ""; ~(t = e.indexOf("random(", s)); )
        (r = e.indexOf(")", t)),
          (n = "[" === e.charAt(t + 7)),
          (i = e.substr(t + 7, r - t - 7).match(n ? Ue : He)),
          (a +=
            e.substr(s, t - s) +
            pi(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (s = r + 1);
      return a + e.substr(s, e.length - s);
    },
    mi = function (e, t, i, r, n) {
      var s = t - e,
        a = r - i;
      return ei(n, function (t) {
        return i + (((t - e) / s) * a || 0);
      });
    },
    gi = function (e, t, i) {
      var r,
        n,
        s,
        a = e.labels,
        o = Ce;
      for (r in a)
        (n = a[r] - t) < 0 == !!i &&
          n &&
          o > (n = Math.abs(n)) &&
          ((s = r), (o = n));
      return s;
    },
    vi = function (e, t, i) {
      var r,
        n,
        s,
        a = e.vars,
        o = a[t],
        l = ce,
        d = e._ctx;
      if (o)
        return (
          (r = a[t + "Params"]),
          (n = a.callbackScope || e),
          i && lt.length && xt(),
          d && (ce = d),
          (s = r ? o.apply(n, r) : o.call(n)),
          (ce = l),
          s
        );
    },
    _i = function (e) {
      return (
        It(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!ue),
        e.progress() < 1 && vi(e, "onInterrupt"),
        e
      );
    },
    yi = [],
    wi = function (e) {
      if ($e()) {
        var t = (e = (!e.name && e.default) || e).name,
          i = De(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: rt,
            render: cr,
            add: Ui,
            kill: hr,
            modifier: pr,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: or,
            aliases: {},
            register: 0,
          };
        if ((Ai(), e !== r)) {
          if (ut[t]) return;
          Mt(r, Mt(Ot(e, n), s)),
            kt(r.prototype, kt(n, Ot(e, s))),
            (ut[(r.prop = t)] = r),
            e.targetTest && (ht.push(r), (ot[t] = 1)),
            (t =
              ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        it(t, r), e.register && e.register(kr, r, gr);
      } else yi.push(e);
    },
    bi = 255,
    Ti = {
      aqua: [0, bi, bi],
      lime: [0, bi, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, bi],
      navy: [0, 0, 128],
      white: [bi, bi, bi],
      olive: [128, 128, 0],
      yellow: [bi, bi, 0],
      orange: [bi, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [bi, 0, 0],
      pink: [bi, 192, 203],
      cyan: [0, bi, bi],
      transparent: [bi, bi, bi, 0],
    },
    xi = function (e, t, i) {
      return (
        ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : 3 * e < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          bi +
          0.5) |
        0
      );
    },
    Si = function (e, t, i) {
      var r,
        n,
        s,
        a,
        o,
        l,
        d,
        u,
        c,
        p,
        h = e ? (Be(e) ? [e >> 16, (e >> 8) & bi, e & bi] : 0) : Ti.black;
      if (!h) {
        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Ti[e]))
          h = Ti[e];
        else if ("#" === e.charAt(0)) {
          if (
            (e.length < 6 &&
              ((r = e.charAt(1)),
              (n = e.charAt(2)),
              (s = e.charAt(3)),
              (e =
                "#" +
                r +
                r +
                n +
                n +
                s +
                s +
                (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
            9 === e.length)
          )
            return [
              (h = parseInt(e.substr(1, 6), 16)) >> 16,
              (h >> 8) & bi,
              h & bi,
              parseInt(e.substr(7), 16) / 255,
            ];
          h = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & bi, e & bi];
        } else if ("hsl" === e.substr(0, 3))
          if (((h = p = e.match(He)), t)) {
            if (~e.indexOf("="))
              return (h = e.match(je)), i && h.length < 4 && (h[3] = 1), h;
          } else
            (a = (+h[0] % 360) / 360),
              (o = +h[1] / 100),
              (r =
                2 * (l = +h[2] / 100) -
                (n = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
              h.length > 3 && (h[3] *= 1),
              (h[0] = xi(a + 1 / 3, r, n)),
              (h[1] = xi(a, r, n)),
              (h[2] = xi(a - 1 / 3, r, n));
        else h = e.match(He) || Ti.transparent;
        h = h.map(Number);
      }
      return (
        t &&
          !p &&
          ((r = h[0] / bi),
          (n = h[1] / bi),
          (s = h[2] / bi),
          (l = ((d = Math.max(r, n, s)) + (u = Math.min(r, n, s))) / 2),
          d === u
            ? (a = o = 0)
            : ((c = d - u),
              (o = l > 0.5 ? c / (2 - d - u) : c / (d + u)),
              (a =
                d === r
                  ? (n - s) / c + (n < s ? 6 : 0)
                  : d === n
                  ? (s - r) / c + 2
                  : (r - n) / c + 4),
              (a *= 60)),
          (h[0] = ~~(a + 0.5)),
          (h[1] = ~~(100 * o + 0.5)),
          (h[2] = ~~(100 * l + 0.5))),
        i && h.length < 4 && (h[3] = 1),
        h
      );
    },
    Ei = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Mi).forEach(function (e) {
          var n = e.match(Ye) || [];
          t.push.apply(t, n), i.push((r += n.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Ci = function (e, t, i) {
      var r,
        n,
        s,
        a,
        o = "",
        l = (e + o).match(Mi),
        d = t ? "hsla(" : "rgba(",
        u = 0;
      if (!l) return e;
      if (
        ((l = l.map(function (e) {
          return (
            (e = Si(e, t, 1)) &&
            d +
              (t
                ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                : e.join(",")) +
              ")"
          );
        })),
        i && ((s = Ei(e)), (r = i.c).join(o) !== s.c.join(o)))
      )
        for (a = (n = e.replace(Mi, "1").split(Ye)).length - 1; u < a; u++)
          o +=
            n[u] +
            (~r.indexOf(u)
              ? l.shift() || d + "0,0,0,0)"
              : (s.length ? s : l.length ? l : i).shift());
      if (!n)
        for (a = (n = e.split(Mi)).length - 1; u < a; u++) o += n[u] + l[u];
      return o + n[a];
    },
    Mi = (function () {
      var e,
        t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in Ti) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    ki = /hsl[a]?\(/,
    Pi = function (e) {
      var t,
        i = e.join(" ");
      if (((Mi.lastIndex = 0), Mi.test(i)))
        return (
          (t = ki.test(i)),
          (e[1] = Ci(e[1], t)),
          (e[0] = Ci(e[0], t, Ei(e[1]))),
          !0
        );
    },
    Oi = (function () {
      var e,
        t,
        i,
        r,
        n,
        s,
        a = Date.now,
        o = 500,
        l = 33,
        d = a(),
        u = d,
        c = 1e3 / 240,
        p = c,
        h = [],
        f = function i(f) {
          var m,
            g,
            v,
            _,
            y = a() - u,
            w = !0 === f;
          if (
            (y > o && (d += y - l),
            ((m = (v = (u += y) - d) - p) > 0 || w) &&
              ((_ = ++r.frame),
              (n = v - 1e3 * r.time),
              (r.time = v /= 1e3),
              (p += m + (m >= c ? 4 : c - m)),
              (g = 1)),
            w || (e = t(i)),
            g)
          )
            for (s = 0; s < h.length; s++) h[s](v, n, _, f);
        };
      return (r = {
        time: 0,
        frame: 0,
        tick: function () {
          f(!0);
        },
        deltaRatio: function (e) {
          return n / (1e3 / (e || 60));
        },
        wake: function () {
          ge &&
            (!fe &&
              $e() &&
              ((he = fe = window),
              (me = he.document || {}),
              (Ke.gsap = kr),
              (he.gsapVersions || (he.gsapVersions = [])).push(kr.version),
              Je(Ze || he.GreenSockGlobals || (!he.gsap && he) || {}),
              (i = he.requestAnimationFrame),
              yi.forEach(wi)),
            e && r.sleep(),
            (t =
              i ||
              function (e) {
                return setTimeout(e, (p - 1e3 * r.time + 1) | 0);
              }),
            (ye = 1),
            f(2));
        },
        sleep: function () {
          (i ? he.cancelAnimationFrame : clearTimeout)(e), (ye = 0), (t = rt);
        },
        lagSmoothing: function (e, t) {
          (o = e || 1 / 0), (l = Math.min(t || 33, o));
        },
        fps: function (e) {
          (c = 1e3 / (e || 240)), (p = 1e3 * r.time + c);
        },
        add: function (e, t, i) {
          var n = t
            ? function (t, i, s, a) {
                e(t, i, s, a), r.remove(n);
              }
            : e;
          return r.remove(e), h[i ? "unshift" : "push"](n), Ai(), n;
        },
        remove: function (e, t) {
          ~(t = h.indexOf(e)) && h.splice(t, 1) && s >= t && s--;
        },
        _listeners: h,
      });
    })(),
    Ai = function () {
      return !ye && Oi.wake();
    },
    Li = {},
    zi = /^[\d.\-M][\d.\-,\s]/,
    Ii = /["']/g,
    Di = function (e) {
      for (
        var t,
          i,
          r,
          n = {},
          s = e.substr(1, e.length - 3).split(":"),
          a = s[0],
          o = 1,
          l = s.length;
        o < l;
        o++
      )
        (i = s[o]),
          (t = o !== l - 1 ? i.lastIndexOf(",") : i.length),
          (r = i.substr(0, t)),
          (n[a] = isNaN(r) ? r.replace(Ii, "").trim() : +r),
          (a = i.substr(t + 1).trim());
      return n;
    },
    Bi = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Fi = function e(t, i) {
      for (var r, n = t._first; n; )
        n instanceof ji
          ? e(n, i)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === i ||
            (n.timeline
              ? e(n.timeline, i)
              : ((r = n._ease),
                (n._ease = n._yEase),
                (n._yEase = r),
                (n._yoyo = i))),
          (n = n._next);
    },
    Ri = function (e, t) {
      return (
        (e &&
          (De(e)
            ? e
            : Li[e] ||
              (function (e) {
                var t,
                  i,
                  r,
                  n,
                  s = (e + "").split("("),
                  a = Li[s[0]];
                return a && s.length > 1 && a.config
                  ? a.config.apply(
                      null,
                      ~e.indexOf("{")
                        ? [Di(s[1])]
                        : ((t = e),
                          (i = t.indexOf("(") + 1),
                          (r = t.indexOf(")")),
                          (n = t.indexOf("(", i)),
                          t.substring(
                            i,
                            ~n && n < r ? t.indexOf(")", r + 1) : r
                          ))
                            .split(",")
                            .map(Et)
                    )
                  : Li._CE && zi.test(e)
                  ? Li._CE("", e)
                  : a;
              })(e))) ||
        t
      );
    },
    Gi = function (e, t, i, r) {
      void 0 === i &&
        (i = function (e) {
          return 1 - t(1 - e);
        }),
        void 0 === r &&
          (r = function (e) {
            return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
          });
      var n,
        s = { easeIn: t, easeOut: i, easeInOut: r };
      return (
        _t(e, function (e) {
          for (var t in ((Li[e] = Ke[e] = s),
          (Li[(n = e.toLowerCase())] = i),
          s))
            Li[
              n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
            ] = Li[e + "." + t] = s[t];
        }),
        s
      );
    },
    $i = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
      };
    },
    Ni = function e(t, i, r) {
      var n = i >= 1 ? i : 1,
        s = (r || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        a = (s / ke) * (Math.asin(1 / n) || 0),
        o = function (e) {
          return 1 === e ? 1 : n * Math.pow(2, -10 * e) * ze((e - a) * s) + 1;
        },
        l =
          "out" === t
            ? o
            : "in" === t
            ? function (e) {
                return 1 - o(1 - e);
              }
            : $i(o);
      return (
        (s = ke / s),
        (l.config = function (i, r) {
          return e(t, i, r);
        }),
        l
      );
    },
    Vi = function e(t, i) {
      void 0 === i && (i = 1.70158);
      var r = function (e) {
          return e ? --e * e * ((i + 1) * e + i) + 1 : 0;
        },
        n =
          "out" === t
            ? r
            : "in" === t
            ? function (e) {
                return 1 - r(1 - e);
              }
            : $i(r);
      return (
        (n.config = function (i) {
          return e(t, i);
        }),
        n
      );
    };
  _t("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var i = t < 5 ? t + 1 : t;
    Gi(
      e + ",Power" + (i - 1),
      t
        ? function (e) {
            return Math.pow(e, i);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, i);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(2 * e, i) / 2
          : 1 - Math.pow(2 * (1 - e), i) / 2;
      }
    );
  }),
    (Li.Linear.easeNone = Li.none = Li.Linear.easeIn),
    Gi("Elastic", Ni("in"), Ni("out"), Ni()),
    (we = 7.5625),
    (Te = 1 / (be = 2.75)),
    Gi(
      "Bounce",
      function (e) {
        return 1 - xe(1 - e);
      },
      (xe = function (e) {
        return e < Te
          ? we * e * e
          : e < 0.7272727272727273
          ? we * Math.pow(e - 1.5 / be, 2) + 0.75
          : e < 0.9090909090909092
          ? we * (e -= 2.25 / be) * e + 0.9375
          : we * Math.pow(e - 2.625 / be, 2) + 0.984375;
      })
    ),
    Gi("Expo", function (e) {
      return e ? Math.pow(2, 10 * (e - 1)) : 0;
    }),
    Gi("Circ", function (e) {
      return -(Ae(1 - e * e) - 1);
    }),
    Gi("Sine", function (e) {
      return 1 === e ? 1 : 1 - Le(e * Pe);
    }),
    Gi("Back", Vi("in"), Vi("out"), Vi()),
    (Li.SteppedEase =
      Li.steps =
      Ke.SteppedEase =
        {
          config: function (e, t) {
            void 0 === e && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0;
            return function (e) {
              return (((r * ti(0, 0.99999999, e)) | 0) + n) * i;
            };
          },
        }),
    (Ee.ease = Li["quad.out"]),
    _t(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (ft += e + "," + e + "Params,");
      }
    );
  var qi = function (e, t) {
      (this.id = Oe++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : vt),
        (this.set = t ? t.getSetter : or);
    },
    Hi = (function () {
      function e(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          Ut(this, +e.duration, 1, 1),
          (this.data = e.data),
          ce && ((this._ctx = ce), ce.data.push(this)),
          ye || Oi.wake();
      }
      var t = e.prototype;
      return (
        (t.delay = function (e) {
          return e || 0 === e
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              Ut(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, t) {
          if ((Ai(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (
              Vt(this, e), !i._dp || i.parent || qt(i, this);
              i && i.parent;

            )
              i.parent._time !==
                i._start +
                  (i._ts >= 0
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              Ht(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === Me) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), St(this, e, t)),
            this
          );
        }),
        (t.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + Rt(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (t.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (t.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                  Rt(this),
                t
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (t.iteration = function (e, t) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * i, t)
            : this._repeat
            ? Gt(this._tTime, i) + 1
            : 1;
        }),
        (t.timeScale = function (e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          var t =
            this.parent && this._ts ? $t(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
            this.totalTime(ti(-Math.abs(this._delay), this._tDur, t), !0),
            Nt(this),
            (function (e) {
              for (var t = e.parent; t && t.parent; )
                (t._dirty = 1), t.totalDuration(), (t = t.parent);
              return e;
            })(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ai(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== Me &&
                        (this._tTime -= Me)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return (
              t && (t._sort || !this.parent) && Ht(t, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (Ge(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? $t(t.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          void 0 === e && (e = at);
          var t = ue;
          return (
            (ue = e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            (ue = t),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
            (i = t._start + i / (t._ts || 1)), (t = t._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1
              : this._sat.globalTime(e)
            : i;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Qt(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var t = this._time;
            return (this._rDelay = e), Qt(this), t ? this.time(t) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, t) {
          return this.totalTime(Zt(this, e), Ge(t));
        }),
        (t.restart = function (e, t) {
          return this.play().totalTime(e ? -this._delay : 0, Ge(t));
        }),
        (t.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (t.isActive = function () {
          var e,
            t = this.parent || this._dp,
            i = this._start;
          return !(
            t &&
            !(
              this._ts &&
              this._initted &&
              t.isActive() &&
              (e = t.rawTime(!0)) >= i &&
              e < this.endTime(!0) - Me
            )
          );
        }),
        (t.eventCallback = function (e, t, i) {
          var r = this.vars;
          return arguments.length > 1
            ? (t
                ? ((r[e] = t),
                  i && (r[e + "Params"] = i),
                  "onUpdate" === e && (this._onUpdate = t))
                : delete r[e],
              this)
            : r[e];
        }),
        (t.then = function (e) {
          var t = this;
          return new Promise(function (i) {
            var r = De(e) ? e : Ct,
              n = function () {
                var e = t.then;
                (t.then = null),
                  De(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                  i(r),
                  (t.then = e);
              };
            (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
            (!t._tTime && t._ts < 0)
              ? n()
              : (t._prom = n);
          });
        }),
        (t.kill = function () {
          _i(this);
        }),
        e
      );
    })();
  Mt(Hi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var ji = (function (e) {
    function t(t, i) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = e.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = Ge(t.sortChildren)),
        pe && Ht(t.parent || pe, oe(r), i),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && jt(oe(r), t.scrollTrigger),
        r
      );
    }
    le(t, e);
    var i = t.prototype;
    return (
      (i.to = function (e, t, i) {
        return Jt(0, arguments, this), this;
      }),
      (i.from = function (e, t, i) {
        return Jt(1, arguments, this), this;
      }),
      (i.fromTo = function (e, t, i, r) {
        return Jt(2, arguments, this), this;
      }),
      (i.set = function (e, t, i) {
        return (
          (t.duration = 0),
          (t.parent = this),
          At(t).repeatDelay || (t.repeat = 0),
          (t.immediateRender = !!t.immediateRender),
          new ir(e, t, Zt(this, i), 1),
          this
        );
      }),
      (i.call = function (e, t, i) {
        return Ht(this, ir.delayedCall(0, e, t), i);
      }),
      (i.staggerTo = function (e, t, i, r, n, s, a) {
        return (
          (i.duration = t),
          (i.stagger = i.stagger || r),
          (i.onComplete = s),
          (i.onCompleteParams = a),
          (i.parent = this),
          new ir(e, i, Zt(this, n)),
          this
        );
      }),
      (i.staggerFrom = function (e, t, i, r, n, s, a) {
        return (
          (i.runBackwards = 1),
          (At(i).immediateRender = Ge(i.immediateRender)),
          this.staggerTo(e, t, i, r, n, s, a)
        );
      }),
      (i.staggerFromTo = function (e, t, i, r, n, s, a, o) {
        return (
          (r.startAt = i),
          (At(r).immediateRender = Ge(r.immediateRender)),
          this.staggerTo(e, t, r, n, s, a, o)
        );
      }),
      (i.render = function (e, t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          d,
          u,
          c,
          p,
          h,
          f,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          _ = e <= 0 ? 0 : wt(e),
          y = this._zTime < 0 != e < 0 && (this._initted || !v);
        if (
          (this !== pe && _ > g && e >= 0 && (_ = g),
          _ !== this._tTime || i || y)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((_ += this._time - m), (e += this._time - m)),
            (r = _),
            (c = this._start),
            (l = !(u = this._ts)),
            y && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
            this._repeat)
          ) {
            if (
              ((h = this._yoyo),
              (o = v + this._rDelay),
              this._repeat < -1 && e < 0)
            )
              return this.totalTime(100 * o + e, t, i);
            if (
              ((r = wt(_ % o)),
              _ === g
                ? ((a = this._repeat), (r = v))
                : ((a = ~~(_ / o)) && a === _ / o && ((r = v), a--),
                  r > v && (r = v)),
              (p = Gt(this._tTime, o)),
              !m &&
                this._tTime &&
                p !== a &&
                this._tTime - p * o - this._dur <= 0 &&
                (p = a),
              h && 1 & a && ((r = v - r), (f = 1)),
              a !== p && !this._lock)
            ) {
              var w = h && 1 & p,
                b = w === (h && 1 & a);
              if (
                (a < p && (w = !w),
                (m = w ? 0 : v),
                (this._lock = 1),
                (this.render(m || (f ? 0 : wt(a * o)), t, !v)._lock = 0),
                (this._tTime = _),
                !t && this.parent && vi(this, "onRepeat"),
                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                b &&
                  ((this._lock = 2),
                  (m = w ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !f && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              Fi(this, f);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((d = (function (e, t, i) {
                var r;
                if (i > t)
                  for (r = e._first; r && r._start <= i; ) {
                    if ("isPause" === r.data && r._start > t) return r;
                    r = r._next;
                  }
                else
                  for (r = e._last; r && r._start >= i; ) {
                    if ("isPause" === r.data && r._start < t) return r;
                    r = r._prev;
                  }
              })(this, wt(m), wt(r))),
              d && (_ -= r - (r = d._start))),
            (this._tTime = _),
            (this._time = r),
            (this._act = !u),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (m = 0)),
            !m && r && !t && !a && (vi(this, "onStart"), this._tTime !== _))
          )
            return this;
          if (r >= m && e >= 0)
            for (n = this._first; n; ) {
              if (
                ((s = n._next), (n._act || r >= n._start) && n._ts && d !== n)
              ) {
                if (n.parent !== this) return this.render(e, t, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (r - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (r - n._start) * n._ts,
                    t,
                    i
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (d = 0), s && (_ += this._zTime = -1e-8);
                  break;
                }
              }
              n = s;
            }
          else {
            n = this._last;
            for (var T = e < 0 ? e : r; n; ) {
              if (
                ((s = n._prev), (n._act || T <= n._end) && n._ts && d !== n)
              ) {
                if (n.parent !== this) return this.render(e, t, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (T - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (T - n._start) * n._ts,
                    t,
                    i || (ue && (n._initted || n._startAt))
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (d = 0), s && (_ += this._zTime = T ? -1e-8 : Me);
                  break;
                }
              }
              n = s;
            }
          }
          if (
            d &&
            !t &&
            (this.pause(),
            (d.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
            this._ts)
          )
            return (this._start = c), Nt(this), this.render(e, t, i);
          this._onUpdate && !t && vi(this, "onUpdate", !0),
            ((_ === g && this._tTime >= this.totalDuration()) || (!_ && m)) &&
              ((c !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                this._lock ||
                ((e || !v) &&
                  ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                  It(this, 1),
                t ||
                  (e < 0 && !m) ||
                  (!_ && !m && g) ||
                  (vi(
                    this,
                    _ === g && e >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(_ < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (e, t) {
        var i = this;
        if ((Be(t) || (t = Zt(this, t, e)), !(e instanceof Hi))) {
          if (qe(e))
            return (
              e.forEach(function (e) {
                return i.add(e, t);
              }),
              this
            );
          if (Ie(e)) return this.addLabel(e, t);
          if (!De(e)) return this;
          e = ir.delayedCall(0, e);
        }
        return this !== e ? Ht(this, e, t) : this;
      }),
      (i.getChildren = function (e, t, i, r) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          void 0 === i && (i = !0),
          void 0 === r && (r = -Ce);
        for (var n = [], s = this._first; s; )
          s._start >= r &&
            (s instanceof ir
              ? t && n.push(s)
              : (i && n.push(s),
                e && n.push.apply(n, s.getChildren(!0, t, i)))),
            (s = s._next);
        return n;
      }),
      (i.getById = function (e) {
        for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
          if (t[i].vars.id === e) return t[i];
      }),
      (i.remove = function (e) {
        return Ie(e)
          ? this.removeLabel(e)
          : De(e)
          ? this.killTweensOf(e)
          : (zt(this, e),
            e === this._recent && (this._recent = this._last),
            Dt(this));
      }),
      (i.totalTime = function (t, i) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = wt(
                Oi.time -
                  (this._ts > 0
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            e.prototype.totalTime.call(this, t, i),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (e, t) {
        return (this.labels[e] = Zt(this, t)), this;
      }),
      (i.removeLabel = function (e) {
        return delete this.labels[e], this;
      }),
      (i.addPause = function (e, t, i) {
        var r = ir.delayedCall(0, t || rt, i);
        return (
          (r.data = "isPause"), (this._hasPause = 1), Ht(this, r, Zt(this, e))
        );
      }),
      (i.removePause = function (e) {
        var t = this._first;
        for (e = Zt(this, e); t; )
          t._start === e && "isPause" === t.data && It(t), (t = t._next);
      }),
      (i.killTweensOf = function (e, t, i) {
        for (var r = this.getTweensOf(e, i), n = r.length; n--; )
          Yi !== r[n] && r[n].kill(e, t);
        return this;
      }),
      (i.getTweensOf = function (e, t) {
        for (var i, r = [], n = ai(e), s = this._first, a = Be(t); s; )
          s instanceof ir
            ? Tt(s._targets, n) &&
              (a
                ? (!Yi || (s._initted && s._ts)) &&
                  s.globalTime(0) <= t &&
                  s.globalTime(s.totalDuration()) > t
                : !t || s.isActive()) &&
              r.push(s)
            : (i = s.getTweensOf(n, t)).length && r.push.apply(r, i),
            (s = s._next);
        return r;
      }),
      (i.tweenTo = function (e, t) {
        t = t || {};
        var i,
          r = this,
          n = Zt(r, e),
          s = t,
          a = s.startAt,
          o = s.onStart,
          l = s.onStartParams,
          d = s.immediateRender,
          u = ir.to(
            r,
            Mt(
              {
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  t.duration ||
                  Math.abs(
                    (n - (a && "time" in a ? a.time : r._time)) / r.timeScale()
                  ) ||
                  Me,
                onStart: function () {
                  if ((r.pause(), !i)) {
                    var e =
                      t.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : r._time)) /
                          r.timeScale()
                      );
                    u._dur !== e && Ut(u, e, 0, 1).render(u._time, !0, !0),
                      (i = 1);
                  }
                  o && o.apply(u, l || []);
                },
              },
              t
            )
          );
        return d ? u.render(0) : u;
      }),
      (i.tweenFromTo = function (e, t, i) {
        return this.tweenTo(t, Mt({ startAt: { time: Zt(this, e) } }, i));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (e) {
        return void 0 === e && (e = this._time), gi(this, Zt(this, e));
      }),
      (i.previousLabel = function (e) {
        return void 0 === e && (e = this._time), gi(this, Zt(this, e), 1);
      }),
      (i.currentLabel = function (e) {
        return arguments.length
          ? this.seek(e, !0)
          : this.previousLabel(this._time + Me);
      }),
      (i.shiftChildren = function (e, t, i) {
        void 0 === i && (i = 0);
        for (var r, n = this._first, s = this.labels; n; )
          n._start >= i && ((n._start += e), (n._end += e)), (n = n._next);
        if (t) for (r in s) s[r] >= i && (s[r] += e);
        return Dt(this);
      }),
      (i.invalidate = function (t) {
        var i = this._first;
        for (this._lock = 0; i; ) i.invalidate(t), (i = i._next);
        return e.prototype.invalidate.call(this, t);
      }),
      (i.clear = function (e) {
        void 0 === e && (e = !0);
        for (var t, i = this._first; i; )
          (t = i._next), this.remove(i), (i = t);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          e && (this.labels = {}),
          Dt(this)
        );
      }),
      (i.totalDuration = function (e) {
        var t,
          i,
          r,
          n = 0,
          s = this,
          a = s._last,
          o = Ce;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -e : e)
          );
        if (s._dirty) {
          for (r = s.parent; a; )
            (t = a._prev),
              a._dirty && a.totalDuration(),
              (i = a._start) > o && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (Ht(s, a, i - a._delay, 1)._lock = 0))
                : (o = i),
              i < 0 &&
                a._ts &&
                ((n -= i),
                ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                  ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                s.shiftChildren(-i, !1, -Infinity),
                (o = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = t);
          Ut(s, s === pe && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (t.updateRoot = function (e) {
        if ((pe._ts && (St(pe, $t(e, pe)), (ve = Oi.frame)), Oi.frame >= pt)) {
          pt += Se.autoSleep || 120;
          var t = pe._first;
          if ((!t || !t._ts) && Se.autoSleep && Oi._listeners.length < 2) {
            for (; t && !t._ts; ) t = t._next;
            t || Oi.sleep();
          }
        }
      }),
      t
    );
  })(Hi);
  Mt(ji.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Yi,
    Wi,
    Xi = function (e, t, i, r, n, s, a) {
      var o,
        l,
        d,
        u,
        c,
        p,
        h,
        f,
        m = new gr(this._pt, e, t, 0, 1, ur, null, n),
        g = 0,
        v = 0;
      for (
        m.b = i,
          m.e = r,
          i += "",
          (h = ~(r += "").indexOf("random(")) && (r = fi(r)),
          s && (s((f = [i, r]), e, t), (i = f[0]), (r = f[1])),
          l = i.match(We) || [];
        (o = We.exec(r));

      )
        (u = o[0]),
          (c = r.substring(g, o.index)),
          d ? (d = (d + 1) % 5) : "rgba(" === c.substr(-5) && (d = 1),
          u !== l[v++] &&
            ((p = parseFloat(l[v - 1]) || 0),
            (m._pt = {
              _next: m._pt,
              p: c || 1 === v ? c : ",",
              s: p,
              c: "=" === u.charAt(1) ? bt(p, u) - p : parseFloat(u) - p,
              m: d && d < 4 ? Math.round : 0,
            }),
            (g = We.lastIndex));
      return (
        (m.c = g < r.length ? r.substring(g, r.length) : ""),
        (m.fp = a),
        (Xe.test(r) || h) && (m.e = 0),
        (this._pt = m),
        m
      );
    },
    Ui = function (e, t, i, r, n, s, a, o, l, d) {
      De(r) && (r = r(n || 0, e, s));
      var u,
        c = e[t],
        p =
          "get" !== i
            ? i
            : De(c)
            ? l
              ? e[
                  t.indexOf("set") || !De(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : c,
        h = De(c) ? (l ? sr : nr) : rr;
      if (
        (Ie(r) &&
          (~r.indexOf("random(") && (r = fi(r)),
          "=" === r.charAt(1) &&
            ((u = bt(p, r) + (ii(p) || 0)) || 0 === u) &&
            (r = u)),
        !d || p !== r || Wi)
      )
        return isNaN(p * r) || "" === r
          ? (!c && !(t in e) && et(t, r),
            Xi.call(this, e, t, p, r, h, o || Se.stringFilter, l))
          : ((u = new gr(
              this._pt,
              e,
              t,
              +p || 0,
              r - (p || 0),
              "boolean" == typeof c ? dr : lr,
              0,
              h
            )),
            l && (u.fp = l),
            a && u.modifier(a, this, e),
            (this._pt = u));
    },
    Qi = function (e, t, i, r, n, s) {
      var a, o, l, d;
      if (
        ut[e] &&
        !1 !==
          (a = new ut[e]()).init(
            n,
            a.rawVars
              ? t[e]
              : (function (e, t, i, r, n) {
                  if (
                    (De(e) && (e = Ji(e, n, t, i, r)),
                    !Re(e) || (e.style && e.nodeType) || qe(e) || Ve(e))
                  )
                    return Ie(e) ? Ji(e, n, t, i, r) : e;
                  var s,
                    a = {};
                  for (s in e) a[s] = Ji(e[s], n, t, i, r);
                  return a;
                })(t[e], r, n, s, i),
            i,
            r,
            s
          ) &&
        ((i._pt = o = new gr(i._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
        i !== _e)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], d = a._props.length; d--; )
          l[a._props[d]] = o;
      return a;
    },
    Ki = function e(t, i, r) {
      var n,
        s,
        a,
        o,
        l,
        d,
        u,
        c,
        p,
        h,
        f,
        m,
        g,
        v = t.vars,
        _ = v.ease,
        y = v.startAt,
        w = v.immediateRender,
        b = v.lazy,
        T = v.onUpdate,
        x = v.onUpdateParams,
        S = v.callbackScope,
        E = v.runBackwards,
        C = v.yoyoEase,
        M = v.keyframes,
        k = v.autoRevert,
        P = t._dur,
        O = t._startAt,
        A = t._targets,
        L = t.parent,
        z = L && "nested" === L.data ? L.vars.targets : A,
        I = "auto" === t._overwrite && !de,
        D = t.timeline;
      if (
        (D && (!M || !_) && (_ = "none"),
        (t._ease = Ri(_, Ee.ease)),
        (t._yEase = C ? Bi(Ri(!0 === C ? _ : C, Ee.ease)) : 0),
        C &&
          t._yoyo &&
          !t._repeat &&
          ((C = t._yEase), (t._yEase = t._ease), (t._ease = C)),
        (t._from = !D && !!v.runBackwards),
        !D || (M && !v.stagger))
      ) {
        if (
          ((m = (c = A[0] ? gt(A[0]).harness : 0) && v[c.prop]),
          (n = Ot(v, ot)),
          O &&
            (O._zTime < 0 && O.progress(1),
            i < 0 && E && w && !k
              ? O.render(-1, !0)
              : O.revert(E && P ? st : nt),
            (O._lazy = 0)),
          y)
        ) {
          if (
            (It(
              (t._startAt = ir.set(
                A,
                Mt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: L,
                    immediateRender: !0,
                    lazy: !O && Ge(b),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: x,
                    callbackScope: S,
                    stagger: 0,
                  },
                  y
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (ue || (!w && !k)) && t._startAt.revert(st),
            w && P && i <= 0 && r <= 0)
          )
            return void (i && (t._zTime = i));
        } else if (E && P && !O)
          if (
            (i && (w = !1),
            (a = Mt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: w && !O && Ge(b),
                immediateRender: w,
                stagger: 0,
                parent: L,
              },
              n
            )),
            m && (a[c.prop] = m),
            It((t._startAt = ir.set(A, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (ue ? t._startAt.revert(st) : t._startAt.render(-1, !0)),
            (t._zTime = i),
            w)
          ) {
            if (!i) return;
          } else e(t._startAt, Me, Me);
        for (
          t._pt = t._ptCache = 0, b = (P && Ge(b)) || (b && !P), s = 0;
          s < A.length;
          s++
        ) {
          if (
            ((u = (l = A[s])._gsap || mt(A)[s]._gsap),
            (t._ptLookup[s] = h = {}),
            dt[u.id] && lt.length && xt(),
            (f = z === A ? s : z.indexOf(l)),
            c &&
              !1 !== (p = new c()).init(l, m || n, t, f, z) &&
              ((t._pt = o =
                new gr(t._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (e) {
                h[e] = o;
              }),
              p.priority && (d = 1)),
            !c || m)
          )
            for (a in n)
              ut[a] && (p = Qi(a, n, t, f, l, z))
                ? p.priority && (d = 1)
                : (h[a] = o =
                    Ui.call(t, l, a, "get", n[a], f, z, 0, v.stringFilter));
          t._op && t._op[s] && t.kill(l, t._op[s]),
            I &&
              t._pt &&
              ((Yi = t),
              pe.killTweensOf(l, h, t.globalTime(i)),
              (g = !t.parent),
              (Yi = 0)),
            t._pt && b && (dt[u.id] = 1);
        }
        d && mr(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = T),
        (t._initted = (!t._op || t._pt) && !g),
        M && i <= 0 && D.render(Ce, !0, !0);
    },
    Zi = function (e, t, i, r) {
      var n,
        s,
        a = t.ease || r || "power1.inOut";
      if (qe(t))
        (s = i[e] || (i[e] = [])),
          t.forEach(function (e, i) {
            return s.push({ t: (i / (t.length - 1)) * 100, v: e, e: a });
          });
      else
        for (n in t)
          (s = i[n] || (i[n] = [])),
            "ease" === n || s.push({ t: parseFloat(e), v: t[n], e: a });
    },
    Ji = function (e, t, i, r, n) {
      return De(e)
        ? e.call(t, i, r, n)
        : Ie(e) && ~e.indexOf("random(")
        ? fi(e)
        : e;
    },
    er = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    tr = {};
  _t(er + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (tr[e] = 1);
  });
  var ir = (function (e) {
    function t(t, i, r, n) {
      var s;
      "number" == typeof i && ((r.duration = i), (i = r), (r = null));
      var a,
        o,
        l,
        d,
        u,
        c,
        p,
        h,
        f = (s = e.call(this, n ? i : At(i)) || this).vars,
        m = f.duration,
        g = f.delay,
        v = f.immediateRender,
        _ = f.stagger,
        y = f.overwrite,
        w = f.keyframes,
        b = f.defaults,
        T = f.scrollTrigger,
        x = f.yoyoEase,
        S = i.parent || pe,
        E = (qe(t) || Ve(t) ? Be(t[0]) : "length" in i) ? [t] : ai(t);
      if (
        ((s._targets = E.length
          ? mt(E)
          : tt(
              "GSAP target " + t + " not found. https://greensock.com",
              !Se.nullTargetWarn
            ) || []),
        (s._ptLookup = []),
        (s._overwrite = y),
        w || _ || Ne(m) || Ne(g))
      ) {
        if (
          ((i = s.vars),
          (a = s.timeline =
            new ji({
              data: "nested",
              defaults: b || {},
              targets: S && "nested" === S.data ? S.vars.targets : E,
            })).kill(),
          (a.parent = a._dp = oe(s)),
          (a._start = 0),
          _ || Ne(m) || Ne(g))
        ) {
          if (((d = E.length), (p = _ && di(_)), Re(_)))
            for (u in _) ~er.indexOf(u) && (h || (h = {}), (h[u] = _[u]));
          for (o = 0; o < d; o++)
            ((l = Ot(i, tr)).stagger = 0),
              x && (l.yoyoEase = x),
              h && kt(l, h),
              (c = E[o]),
              (l.duration = +Ji(m, oe(s), o, c, E)),
              (l.delay = (+Ji(g, oe(s), o, c, E) || 0) - s._delay),
              !_ &&
                1 === d &&
                l.delay &&
                ((s._delay = g = l.delay), (s._start += g), (l.delay = 0)),
              a.to(c, l, p ? p(o, c, E) : 0),
              (a._ease = Li.none);
          a.duration() ? (m = g = 0) : (s.timeline = 0);
        } else if (w) {
          At(Mt(a.vars.defaults, { ease: "none" })),
            (a._ease = Ri(w.ease || i.ease || "none"));
          var C,
            M,
            k,
            P = 0;
          if (qe(w))
            w.forEach(function (e) {
              return a.to(E, e, ">");
            }),
              a.duration();
          else {
            for (u in ((l = {}), w))
              "ease" === u || "easeEach" === u || Zi(u, w[u], l, w.easeEach);
            for (u in l)
              for (
                C = l[u].sort(function (e, t) {
                  return e.t - t.t;
                }),
                  P = 0,
                  o = 0;
                o < C.length;
                o++
              )
                ((k = {
                  ease: (M = C[o]).e,
                  duration: ((M.t - (o ? C[o - 1].t : 0)) / 100) * m,
                })[u] = M.v),
                  a.to(E, k, P),
                  (P += k.duration);
            a.duration() < m && a.to({}, { duration: m - a.duration() });
          }
        }
        m || s.duration((m = a.duration()));
      } else s.timeline = 0;
      return (
        !0 !== y || de || ((Yi = oe(s)), pe.killTweensOf(E), (Yi = 0)),
        Ht(S, oe(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        (v ||
          (!m &&
            !w &&
            s._start === wt(S._time) &&
            Ge(v) &&
            Ft(oe(s)) &&
            "nested" !== S.data)) &&
          ((s._tTime = -1e-8), s.render(Math.max(0, -g) || 0)),
        T && jt(oe(s), T),
        s
      );
    }
    le(t, e);
    var i = t.prototype;
    return (
      (i.render = function (e, t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          d,
          u,
          c,
          p = this._time,
          h = this._tDur,
          f = this._dur,
          m = e < 0,
          g = e > h - Me && !m ? h : e < Me ? 0 : e;
        if (f) {
          if (
            g !== this._tTime ||
            !e ||
            i ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m)
          ) {
            if (((r = g), (u = this.timeline), this._repeat)) {
              if (((a = f + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + e, t, i);
              if (
                ((r = wt(g % a)),
                g === h
                  ? ((s = this._repeat), (r = f))
                  : ((s = ~~(g / a)) && s === g / a && ((r = f), s--),
                    r > f && (r = f)),
                (l = this._yoyo && 1 & s) && ((c = this._yEase), (r = f - r)),
                (o = Gt(this._tTime, a)),
                r === p && !i && this._initted)
              )
                return (this._tTime = g), this;
              s !== o &&
                (u && this._yEase && Fi(u, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = i = 1),
                  (this.render(wt(a * s), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Yt(this, m ? e : r, i, t, g)) return (this._tTime = 0), this;
              if (p !== this._time) return this;
              if (f !== this._dur) return this.render(e, t, i);
            }
            if (
              ((this._tTime = g),
              (this._time = r),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = d = (c || this._ease)(r / f)),
              this._from && (this.ratio = d = 1 - d),
              r && !p && !t && !s && (vi(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (n = this._pt; n; ) n.r(d, n.d), (n = n._next);
            (u &&
              u.render(
                e < 0 ? e : !r && l ? -1e-8 : u._dur * u._ease(r / this._dur),
                t,
                i
              )) ||
              (this._startAt && (this._zTime = e)),
              this._onUpdate &&
                !t &&
                (m && Bt(this, e, 0, i), vi(this, "onUpdate")),
              this._repeat &&
                s !== o &&
                this.vars.onRepeat &&
                !t &&
                this.parent &&
                vi(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (m && !this._onUpdate && Bt(this, e, 0, !0),
                (e || !f) &&
                  ((g === this._tDur && this._ts > 0) ||
                    (!g && this._ts < 0)) &&
                  It(this, 1),
                t ||
                  (m && !p) ||
                  !(g || p || l) ||
                  (vi(this, g === h ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(g < h && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (e, t, i, r) {
            var n,
              s,
              a,
              o = e.ratio,
              l =
                t < 0 ||
                (!t &&
                  ((!e._start && Wt(e) && (e._initted || !Xt(e))) ||
                    ((e._ts < 0 || e._dp._ts < 0) && !Xt(e))))
                  ? 0
                  : 1,
              d = e._rDelay,
              u = 0;
            if (
              (d &&
                e._repeat &&
                ((u = ti(0, e._tDur, t)),
                (s = Gt(u, d)),
                e._yoyo && 1 & s && (l = 1 - l),
                s !== Gt(e._tTime, d) &&
                  ((o = 1 - l),
                  e.vars.repeatRefresh && e._initted && e.invalidate())),
              l !== o || ue || r || e._zTime === Me || (!t && e._zTime))
            ) {
              if (!e._initted && Yt(e, t, r, i, u)) return;
              for (
                a = e._zTime,
                  e._zTime = t || (i ? Me : 0),
                  i || (i = t && !a),
                  e.ratio = l,
                  e._from && (l = 1 - l),
                  e._time = 0,
                  e._tTime = u,
                  n = e._pt;
                n;

              )
                n.r(l, n.d), (n = n._next);
              t < 0 && Bt(e, t, 0, !0),
                e._onUpdate && !i && vi(e, "onUpdate"),
                u && e._repeat && !i && e.parent && vi(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                  e.ratio === l &&
                  (l && It(e, 1),
                  i ||
                    ue ||
                    (vi(e, l ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()));
            } else e._zTime || (e._zTime = t);
          })(this, e, t, i);
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function (t) {
        return (
          (!t || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          e.prototype.invalidate.call(this, t)
        );
      }),
      (i.resetTo = function (e, t, i, r) {
        ye || Oi.wake(), this._ts || this.play();
        var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Ki(this, n),
          (function (e, t, i, r, n, s, a) {
            var o,
              l,
              d,
              u,
              c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
            if (!c)
              for (
                c = e._ptCache[t] = [], d = e._ptLookup, u = e._targets.length;
                u--;

              ) {
                if ((o = d[u][t]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t; ) o = o._next;
                if (!o)
                  return (Wi = 1), (e.vars[t] = "+=0"), Ki(e, a), (Wi = 0), 1;
                c.push(o);
              }
            for (u = c.length; u--; )
              ((o = (l = c[u])._pt || l).s =
                (!r && 0 !== r) || n ? o.s + (r || 0) + s * o.c : r),
                (o.c = i - o.s),
                l.e && (l.e = yt(i) + ii(l.e)),
                l.b && (l.b = o.s + ii(l.b));
          })(this, e, t, i, r, this._ease(n / this._dur), n)
            ? this.resetTo(e, t, i, r)
            : (Vt(this, 0),
              this.parent ||
                Lt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (i.kill = function (e, t) {
        if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
          return (this._lazy = this._pt = 0), this.parent ? _i(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(e, t, Yi && !0 !== Yi.vars.overwrite)
              ._first || _i(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Ut(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var r,
          n,
          s,
          a,
          o,
          l,
          d,
          u = this._targets,
          c = e ? ai(e) : u,
          p = this._ptLookup,
          h = this._pt;
        if (
          (!t || "all" === t) &&
          (function (e, t) {
            for (
              var i = e.length, r = i === t.length;
              r && i-- && e[i] === t[i];

            );
            return i < 0;
          })(u, c)
        )
          return "all" === t && (this._pt = 0), _i(this);
        for (
          r = this._op = this._op || [],
            "all" !== t &&
              (Ie(t) &&
                ((o = {}),
                _t(t, function (e) {
                  return (o[e] = 1);
                }),
                (t = o)),
              (t = (function (e, t) {
                var i,
                  r,
                  n,
                  s,
                  a = e[0] ? gt(e[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return t;
                for (r in ((i = kt({}, t)), o))
                  if ((r in i))
                    for (n = (s = o[r].split(",")).length; n--; )
                      i[s[n]] = i[r];
                return i;
              })(u, t))),
            d = u.length;
          d--;

        )
          if (~c.indexOf(u[d]))
            for (o in ((n = p[d]),
            "all" === t
              ? ((r[d] = t), (a = n), (s = {}))
              : ((s = r[d] = r[d] || {}), (a = t)),
            a))
              (l = n && n[o]) &&
                (("kill" in l.d && !0 !== l.d.kill(o)) || zt(this, l, "_pt"),
                delete n[o]),
                "all" !== s && (s[o] = 1);
        return this._initted && !this._pt && h && _i(this), this;
      }),
      (t.to = function (e, i) {
        return new t(e, i, arguments[2]);
      }),
      (t.from = function (e, t) {
        return Jt(1, arguments);
      }),
      (t.delayedCall = function (e, i, r, n) {
        return new t(i, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: e,
          onComplete: i,
          onReverseComplete: i,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: n,
        });
      }),
      (t.fromTo = function (e, t, i) {
        return Jt(2, arguments);
      }),
      (t.set = function (e, i) {
        return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new t(e, i);
      }),
      (t.killTweensOf = function (e, t, i) {
        return pe.killTweensOf(e, t, i);
      }),
      t
    );
  })(Hi);
  Mt(ir.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _t("staggerTo,staggerFrom,staggerFromTo", function (e) {
      ir[e] = function () {
        var t = new ji(),
          i = ri.call(arguments, 0);
        return i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i);
      };
    });
  var rr = function (e, t, i) {
      return (e[t] = i);
    },
    nr = function (e, t, i) {
      return e[t](i);
    },
    sr = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    ar = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    or = function (e, t) {
      return De(e[t]) ? nr : Fe(e[t]) && e.setAttribute ? ar : rr;
    },
    lr = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
    },
    dr = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    ur = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (1 === e && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    cr = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    pr = function (e, t, i, r) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === r && s.modifier(e, t, i), (s = n);
    },
    hr = function (e) {
      for (var t, i, r = this._pt; r; )
        (i = r._next),
          (r.p === e && !r.op) || r.op === e
            ? zt(this, r, "_pt")
            : r.dep || (t = 1),
          (r = i);
      return !t;
    },
    fr = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    mr = function (e) {
      for (var t, i, r, n, s = e._pt; s; ) {
        for (t = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
        (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
          (s._next = i) ? (i._prev = s) : (n = s),
          (s = t);
      }
      e._pt = r;
    },
    gr = (function () {
      function e(e, t, i, r, n, s, a, o, l) {
        (this.t = t),
          (this.s = r),
          (this.c = n),
          (this.p = i),
          (this.r = s || lr),
          (this.d = a || this),
          (this.set = o || rr),
          (this.pr = l || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      return (
        (e.prototype.modifier = function (e, t, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = fr),
            (this.m = e),
            (this.mt = i),
            (this.tween = t);
        }),
        e
      );
    })();
  _t(
    ft +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (ot[e] = 1);
    }
  ),
    (Ke.TweenMax = Ke.TweenLite = ir),
    (Ke.TimelineLite = Ke.TimelineMax = ji),
    (pe = new ji({
      sortChildren: !1,
      defaults: Ee,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Se.stringFilter = Pi);
  var vr = [],
    _r = {},
    yr = [],
    wr = 0,
    br = function (e) {
      return (_r[e] || yr).map(function (e) {
        return e();
      });
    },
    Tr = function () {
      var e = Date.now(),
        t = [];
      e - wr > 2 &&
        (br("matchMediaInit"),
        vr.forEach(function (e) {
          var i,
            r,
            n,
            s,
            a = e.queries,
            o = e.conditions;
          for (r in a)
            (i = he.matchMedia(a[r]).matches) && (n = 1),
              i !== o[r] && ((o[r] = i), (s = 1));
          s && (e.revert(), n && t.push(e));
        }),
        br("matchMediaRevert"),
        t.forEach(function (e) {
          return e.onMatch(e);
        }),
        (wr = e),
        br("matchMedia"));
    },
    xr = (function () {
      function e(e, t) {
        (this.selector = t && oi(t)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          e && this.add(e);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, i) {
          De(e) && ((i = t), (t = e), (e = De));
          var r = this,
            n = function () {
              var e,
                n = ce,
                s = r.selector;
              return (
                n && n !== r && n.data.push(r),
                i && (r.selector = oi(i)),
                (ce = r),
                (e = t.apply(r, arguments)),
                De(e) && r._r.push(e),
                (ce = n),
                (r.selector = s),
                (r.isReverted = !1),
                e
              );
            };
          return (r.last = n), e === De ? n(r) : e ? (r[e] = n) : n;
        }),
        (t.ignore = function (e) {
          var t = ce;
          (ce = null), e(this), (ce = t);
        }),
        (t.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof e
                ? t.push.apply(t, i.getTweens())
                : i instanceof ir &&
                    !(i.parent && "nested" === i.parent.data) &&
                    t.push(i);
            }),
            t
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, t) {
          var i = this;
          if (e) {
            var r = this.getTweens();
            this.data.forEach(function (e) {
              "isFlip" === e.data &&
                (e.revert(),
                e.getChildren(!0, !0, !1).forEach(function (e) {
                  return r.splice(r.indexOf(e), 1);
                }));
            }),
              r
                .map(function (e) {
                  return { g: e.globalTime(0), t: e };
                })
                .sort(function (e, t) {
                  return t.g - e.g || -1;
                })
                .forEach(function (t) {
                  return t.t.revert(e);
                }),
              this.data.forEach(function (t) {
                return !(t instanceof Hi) && t.revert && t.revert(e);
              }),
              this._r.forEach(function (t) {
                return t(e, i);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (e) {
              return e.kill && e.kill();
            });
          if ((this.clear(), t)) {
            var n = vr.indexOf(this);
            ~n && vr.splice(n, 1);
          }
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        e
      );
    })(),
    Sr = (function () {
      function e(e) {
        (this.contexts = []), (this.scope = e);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, i) {
          Re(e) || (e = { matches: e });
          var r,
            n,
            s,
            a = new xr(0, i || this.scope),
            o = (a.conditions = {});
          for (n in (this.contexts.push(a),
          (t = a.add("onMatch", t)),
          (a.queries = e),
          e))
            "all" === n
              ? (s = 1)
              : (r = he.matchMedia(e[n])) &&
                (vr.indexOf(a) < 0 && vr.push(a),
                (o[n] = r.matches) && (s = 1),
                r.addListener
                  ? r.addListener(Tr)
                  : r.addEventListener("change", Tr));
          return s && t(a), this;
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (t) {
            return t.kill(e, !0);
          });
        }),
        e
      );
    })(),
    Er = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (e) {
          return wi(e);
        });
      },
      timeline: function (e) {
        return new ji(e);
      },
      getTweensOf: function (e, t) {
        return pe.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Ie(e) && (e = ai(e)[0]);
        var n = gt(e || {}).get,
          s = i ? Ct : Et;
        return (
          "native" === i && (i = ""),
          e
            ? t
              ? s(((ut[t] && ut[t].get) || n)(e, t, i, r))
              : function (t, i, r) {
                  return s(((ut[t] && ut[t].get) || n)(e, t, i, r));
                }
            : e
        );
      },
      quickSetter: function (e, t, i) {
        if ((e = ai(e)).length > 1) {
          var r = e.map(function (e) {
              return kr.quickSetter(e, t, i);
            }),
            n = r.length;
          return function (e) {
            for (var t = n; t--; ) r[t](e);
          };
        }
        e = e[0] || {};
        var s = ut[t],
          a = gt(e),
          o = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = s
            ? function (t) {
                var r = new s();
                (_e._pt = 0),
                  r.init(e, i ? t + i : t, _e, 0, [e]),
                  r.render(1, r),
                  _e._pt && cr(1, _e);
              }
            : a.set(e, o);
        return s
          ? l
          : function (t) {
              return l(e, o, i ? t + i : t, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = kr.to(
            e,
            kt((((r = {})[t] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          s = function (e, i, r) {
            return n.resetTo(t, e, i, r);
          };
        return (s.tween = n), s;
      },
      isTweening: function (e) {
        return pe.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Ri(e.ease, Ee.ease)), Pt(Ee, e || {});
      },
      config: function (e) {
        return Pt(Se, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          n = e.defaults,
          s = e.extendTimeline;
        (r || "").split(",").forEach(function (e) {
          return (
            e &&
            !ut[e] &&
            !Ke[e] &&
            tt(t + " effect requires " + e + " plugin.")
          );
        }),
          (ct[t] = function (e, t, r) {
            return i(ai(e), Mt(t || {}, n), r);
          }),
          s &&
            (ji.prototype[t] = function (e, i, r) {
              return this.add(ct[t](e, Re(i) ? i : (r = i) && {}, this), r);
            });
      },
      registerEase: function (e, t) {
        Li[e] = Ri(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Ri(e, t) : Li;
      },
      getById: function (e) {
        return pe.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var i,
          r,
          n = new ji(e);
        for (
          n.smoothChildTiming = Ge(e.smoothChildTiming),
            pe.remove(n),
            n._dp = 0,
            n._time = n._tTime = pe._time,
            i = pe._first;
          i;

        )
          (r = i._next),
            (!t &&
              !i._dur &&
              i instanceof ir &&
              i.vars.onComplete === i._targets[0]) ||
              Ht(n, i, i._start - i._delay),
            (i = r);
        return Ht(pe, n, 0), n;
      },
      context: function (e, t) {
        return e ? new xr(e, t) : ce;
      },
      matchMedia: function (e) {
        return new Sr(e);
      },
      matchMediaRefresh: function () {
        return (
          vr.forEach(function (e) {
            var t,
              i,
              r = e.conditions;
            for (i in r) r[i] && ((r[i] = !1), (t = 1));
            t && e.revert();
          }) || Tr()
        );
      },
      addEventListener: function (e, t) {
        var i = _r[e] || (_r[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = _r[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: function e(t, i, r) {
          var n = i - t;
          return qe(t)
            ? hi(t, e(0, t.length), i)
            : ei(r, function (e) {
                return ((n + ((e - t) % n)) % n) + t;
              });
        },
        wrapYoyo: function e(t, i, r) {
          var n = i - t,
            s = 2 * n;
          return qe(t)
            ? hi(t, e(0, t.length - 1), i)
            : ei(r, function (e) {
                return t + ((e = (s + ((e - t) % s)) % s || 0) > n ? s - e : e);
              });
        },
        distribute: di,
        random: pi,
        snap: ci,
        normalize: function (e, t, i) {
          return mi(e, t, 0, 1, i);
        },
        getUnit: ii,
        clamp: function (e, t, i) {
          return ei(i, function (i) {
            return ti(e, t, i);
          });
        },
        splitColor: Si,
        toArray: ai,
        selector: oi,
        mapRange: mi,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (i) {
            return e(parseFloat(i)) + (t || ii(i));
          };
        },
        interpolate: function e(t, i, r, n) {
          var s = isNaN(t + i)
            ? 0
            : function (e) {
                return (1 - e) * t + e * i;
              };
          if (!s) {
            var a,
              o,
              l,
              d,
              u,
              c = Ie(t),
              p = {};
            if ((!0 === r && (n = 1) && (r = null), c))
              (t = { p: t }), (i = { p: i });
            else if (qe(t) && !qe(i)) {
              for (l = [], d = t.length, u = d - 2, o = 1; o < d; o++)
                l.push(e(t[o - 1], t[o]));
              d--,
                (s = function (e) {
                  e *= d;
                  var t = Math.min(u, ~~e);
                  return l[t](e - t);
                }),
                (r = i);
            } else n || (t = kt(qe(t) ? [] : {}, t));
            if (!l) {
              for (a in i) Ui.call(p, t, a, "get", i[a]);
              s = function (e) {
                return cr(e, p) || (c ? t.p : t);
              };
            }
          }
          return ei(r, s);
        },
        shuffle: li,
      },
      install: Je,
      effects: ct,
      ticker: Oi,
      updateRoot: ji.updateRoot,
      plugins: ut,
      globalTimeline: pe,
      core: {
        PropTween: gr,
        globals: it,
        Tween: ir,
        Timeline: ji,
        Animation: Hi,
        getCache: gt,
        _removeLinkedListItem: zt,
        reverting: function () {
          return ue;
        },
        context: function (e) {
          return e && ce && (ce.data.push(e), (e._ctx = ce)), ce;
        },
        suppressOverwrites: function (e) {
          return (de = e);
        },
      },
    };
  _t("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (Er[e] = ir[e]);
  }),
    Oi.add(ji.updateRoot),
    (_e = Er.to({}, { duration: 0 }));
  var Cr = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Mr = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (e, i, r) {
          r._onInit = function (e) {
            var r, n;
            if (
              (Ie(i) &&
                ((r = {}),
                _t(i, function (e) {
                  return (r[e] = 1);
                }),
                (i = r)),
              t)
            ) {
              for (n in ((r = {}), i)) r[n] = t(i[n]);
              i = r;
            }
            !(function (e, t) {
              var i,
                r,
                n,
                s = e._targets;
              for (i in t)
                for (r = s.length; r--; )
                  (n = e._ptLookup[r][i]) &&
                    (n = n.d) &&
                    (n._pt && (n = Cr(n, i)),
                    n && n.modifier && n.modifier(t[i], e, s[r], i));
            })(e, i);
          };
        },
      };
    },
    kr =
      Er.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, n) {
            var s, a, o;
            for (s in ((this.tween = i), t))
              (o = e.getAttribute(s) || ""),
                ((a = this.add(
                  e,
                  "setAttribute",
                  (o || 0) + "",
                  t[s],
                  r,
                  n,
                  0,
                  0,
                  s
                )).op = s),
                (a.b = o),
                this._props.push(s);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              ue ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Mr("roundProps", ui),
        Mr("modifiers"),
        Mr("snap", ci)
      ) || Er;
  (ir.version = ji.version = kr.version = "3.11.5"), (ge = 1), $e() && Ai();
  Li.Power0,
    Li.Power1,
    Li.Power2,
    Li.Power3,
    Li.Power4,
    Li.Linear,
    Li.Quad,
    Li.Cubic,
    Li.Quart,
    Li.Quint,
    Li.Strong,
    Li.Elastic,
    Li.Back,
    Li.SteppedEase,
    Li.Bounce,
    Li.Sine,
    Li.Expo,
    Li.Circ;
  var Pr,
    Or,
    Ar,
    Lr,
    zr,
    Ir,
    Dr,
    Br,
    Fr = {},
    Rr = 180 / Math.PI,
    Gr = Math.PI / 180,
    $r = Math.atan2,
    Nr = /([A-Z])/g,
    Vr = /(left|right|width|margin|padding|x)/i,
    qr = /[\s,\(]\S/,
    Hr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    jr = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    },
    Yr = function (e, t) {
      return t.set(
        t.t,
        t.p,
        1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
        t
      );
    },
    Wr = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
        t
      );
    },
    Xr = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Ur = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Qr = function (e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    },
    Kr = function (e, t, i) {
      return (e.style[t] = i);
    },
    Zr = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Jr = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    en = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    tn = function (e, t, i, r, n) {
      var s = e._gsap;
      (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
    },
    rn = function (e, t, i, r, n) {
      var s = e._gsap;
      (s[t] = i), s.renderTransform(n, s);
    },
    nn = "transform",
    sn = nn + "Origin",
    an = function e(t, i) {
      var r = this,
        n = this.target,
        s = n.style;
      if (t in Fr) {
        if (((this.tfm = this.tfm || {}), "transform" === t))
          return Hr.transform.split(",").forEach(function (t) {
            return e.call(r, t, i);
          });
        if (
          (~(t = Hr[t] || t).indexOf(",")
            ? t.split(",").forEach(function (e) {
                return (r.tfm[e] = Sn(n, e));
              })
            : (this.tfm[t] = n._gsap.x ? n._gsap[t] : Sn(n, t)),
          this.props.indexOf(nn) >= 0)
        )
          return;
        n._gsap.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(sn, i, "")),
          (t = nn);
      }
      (s || i) && this.props.push(t, i, s[t]);
    },
    on = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    ln = function () {
      var e,
        t,
        i = this.props,
        r = this.target,
        n = r.style,
        s = r._gsap;
      for (e = 0; e < i.length; e += 3)
        i[e + 1]
          ? (r[i[e]] = i[e + 2])
          : i[e + 2]
          ? (n[i[e]] = i[e + 2])
          : n.removeProperty(
              "--" === i[e].substr(0, 2)
                ? i[e]
                : i[e].replace(Nr, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (t in this.tfm) s[t] = this.tfm[t];
        s.svg &&
          (s.renderTransform(),
          r.setAttribute("data-svg-origin", this.svgo || "")),
          ((e = Dr()) && e.isStart) || n[nn] || (on(n), (s.uncache = 1));
      }
    },
    dn = function (e, t) {
      var i = { target: e, props: [], revert: ln, save: an };
      return (
        e._gsap || kr.core.getCache(e),
        t &&
          t.split(",").forEach(function (e) {
            return i.save(e);
          }),
        i
      );
    },
    un = function (e, t) {
      var i = Or.createElementNS
        ? Or.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Or.createElement(e);
      return i.style ? i : Or.createElement(e);
    },
    cn = function e(t, i, r) {
      var n = getComputedStyle(t);
      return (
        n[i] ||
        n.getPropertyValue(i.replace(Nr, "-$1").toLowerCase()) ||
        n.getPropertyValue(i) ||
        (!r && e(t, hn(i) || i, 1)) ||
        ""
      );
    },
    pn = "O,Moz,ms,Ms,Webkit".split(","),
    hn = function (e, t, i) {
      var r = (t || zr).style,
        n = 5;
      if (e in r && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        n-- && !(pn[n] + e in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? pn[n] : "") + e;
    },
    fn = function () {
      "undefined" != typeof window &&
        window.document &&
        ((Pr = window),
        (Or = Pr.document),
        (Ar = Or.documentElement),
        (zr = un("div") || { style: {} }),
        un("div"),
        (nn = hn(nn)),
        (sn = nn + "Origin"),
        (zr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Br = !!hn("perspective")),
        (Dr = kr.core.reverting),
        (Lr = 1));
    },
    mn = function e(t) {
      var i,
        r = un(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        a = this.style.cssText;
      if (
        (Ar.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (i = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = e);
        } catch (e) {}
      else this._gsapBBox && (i = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        Ar.removeChild(r),
        (this.style.cssText = a),
        i
      );
    },
    gn = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    vn = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch (i) {
        t = mn.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === mn ||
          (t = mn.call(e, !0)),
        !t || t.width || t.x || t.y
          ? t
          : {
              x: +gn(e, ["x", "cx", "x1"]) || 0,
              y: +gn(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    _n = function (e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !vn(e));
    },
    yn = function (e, t) {
      if (t) {
        var i = e.style;
        t in Fr && t !== sn && (t = nn),
          i.removeProperty
            ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                (t = "-" + t),
              i.removeProperty(t.replace(Nr, "-$1").toLowerCase()))
            : i.removeAttribute(t);
      }
    },
    wn = function (e, t, i, r, n, s) {
      var a = new gr(e._pt, t, i, 0, 1, s ? Qr : Ur);
      return (e._pt = a), (a.b = r), (a.e = n), e._props.push(i), a;
    },
    bn = { deg: 1, rad: 1, turn: 1 },
    Tn = { grid: 1, flex: 1 },
    xn = function e(t, i, r, n) {
      var s,
        a,
        o,
        l,
        d = parseFloat(r) || 0,
        u = (r + "").trim().substr((d + "").length) || "px",
        c = zr.style,
        p = Vr.test(i),
        h = "svg" === t.tagName.toLowerCase(),
        f = (h ? "client" : "offset") + (p ? "Width" : "Height"),
        m = 100,
        g = "px" === n,
        v = "%" === n;
      return n === u || !d || bn[n] || bn[u]
        ? d
        : ("px" !== u && !g && (d = e(t, i, r, "px")),
          (l = t.getCTM && _n(t)),
          (!v && "%" !== u) || (!Fr[i] && !~i.indexOf("adius"))
            ? ((c[p ? "width" : "height"] = m + (g ? u : n)),
              (a =
                ~i.indexOf("adius") || ("em" === n && t.appendChild && !h)
                  ? t
                  : t.parentNode),
              l && (a = (t.ownerSVGElement || {}).parentNode),
              (a && a !== Or && a.appendChild) || (a = Or.body),
              (o = a._gsap) &&
              v &&
              o.width &&
              p &&
              o.time === Oi.time &&
              !o.uncache
                ? yt((d / o.width) * m)
                : ((v || "%" === u) &&
                    !Tn[cn(a, "display")] &&
                    (c.position = cn(t, "position")),
                  a === t && (c.position = "static"),
                  a.appendChild(zr),
                  (s = zr[f]),
                  a.removeChild(zr),
                  (c.position = "absolute"),
                  p && v && (((o = gt(a)).time = Oi.time), (o.width = a[f])),
                  yt(g ? (s * d) / m : s && d ? (m / s) * d : 0)))
            : ((s = l ? t.getBBox()[p ? "width" : "height"] : t[f]),
              yt(v ? (d / s) * m : (d / 100) * s)));
    },
    Sn = function (e, t, i, r) {
      var n;
      return (
        Lr || fn(),
        t in Hr &&
          "transform" !== t &&
          ~(t = Hr[t]).indexOf(",") &&
          (t = t.split(",")[0]),
        Fr[t] && "transform" !== t
          ? ((n = Dn(e, r)),
            (n =
              "transformOrigin" !== t
                ? n[t]
                : n.svg
                ? n.origin
                : Bn(cn(e, sn)) + " " + n.zOrigin + "px"))
          : (!(n = e.style[t]) ||
              "auto" === n ||
              r ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (kn[t] && kn[t](e, t, i)) ||
              cn(e, t) ||
              vt(e, t) ||
              ("opacity" === t ? 1 : 0)),
        i && !~(n + "").trim().indexOf(" ") ? xn(e, t, n, i) + i : n
      );
    },
    En = function (e, t, i, r) {
      if (!i || "none" === i) {
        var n = hn(t, e, 1),
          s = n && cn(e, n, 1);
        s && s !== i
          ? ((t = n), (i = s))
          : "borderColor" === t && (i = cn(e, "borderTopColor"));
      }
      var a,
        o,
        l,
        d,
        u,
        c,
        p,
        h,
        f,
        m,
        g,
        v = new gr(this._pt, e.style, t, 0, 1, ur),
        _ = 0,
        y = 0;
      if (
        ((v.b = i),
        (v.e = r),
        (i += ""),
        "auto" === (r += "") &&
          ((e.style[t] = r), (r = cn(e, t) || r), (e.style[t] = i)),
        Pi((a = [i, r])),
        (r = a[1]),
        (l = (i = a[0]).match(Ye) || []),
        (r.match(Ye) || []).length)
      ) {
        for (; (o = Ye.exec(r)); )
          (p = o[0]),
            (f = r.substring(_, o.index)),
            u
              ? (u = (u + 1) % 5)
              : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                (u = 1),
            p !== (c = l[y++] || "") &&
              ((d = parseFloat(c) || 0),
              (g = c.substr((d + "").length)),
              "=" === p.charAt(1) && (p = bt(d, p) + g),
              (h = parseFloat(p)),
              (m = p.substr((h + "").length)),
              (_ = Ye.lastIndex - m.length),
              m ||
                ((m = m || Se.units[t] || g),
                _ === r.length && ((r += m), (v.e += m))),
              g !== m && (d = xn(e, t, c, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: f || 1 === y ? f : ",",
                s: d,
                c: h - d,
                m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
              }));
        v.c = _ < r.length ? r.substring(_, r.length) : "";
      } else v.r = "display" === t && "none" === r ? Qr : Ur;
      return Xe.test(r) && (v.e = 0), (this._pt = v), v;
    },
    Cn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Mn = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i,
          r,
          n,
          s = t.t,
          a = s.style,
          o = t.u,
          l = s._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (r = 1);
        else
          for (n = (o = o.split(",")).length; --n > -1; )
            (i = o[n]),
              Fr[i] && ((r = 1), (i = "transformOrigin" === i ? sn : nn)),
              yn(s, i);
        r &&
          (yn(s, nn),
          l &&
            (l.svg && s.removeAttribute("transform"),
            Dn(s, 1),
            (l.uncache = 1),
            on(a)));
      }
    },
    kn = {
      clearProps: function (e, t, i, r, n) {
        if ("isFromStart" !== n.data) {
          var s = (e._pt = new gr(e._pt, t, i, 0, 0, Mn));
          return (s.u = r), (s.pr = -10), (s.tween = n), e._props.push(i), 1;
        }
      },
    },
    Pn = [1, 0, 0, 1, 0, 0],
    On = {},
    An = function (e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    },
    Ln = function (e) {
      var t = cn(e, nn);
      return An(t) ? Pn : t.substr(7).match(je).map(yt);
    },
    zn = function (e, t) {
      var i,
        r,
        n,
        s,
        a = e._gsap || gt(e),
        o = e.style,
        l = Ln(e);
      return a.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (n = e.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? Pn
          : l
        : (l !== Pn ||
            e.offsetParent ||
            e === Ar ||
            a.svg ||
            ((n = o.display),
            (o.display = "block"),
            ((i = e.parentNode) && e.offsetParent) ||
              ((s = 1), (r = e.nextElementSibling), Ar.appendChild(e)),
            (l = Ln(e)),
            n ? (o.display = n) : yn(e, "display"),
            s &&
              (r
                ? i.insertBefore(e, r)
                : i
                ? i.appendChild(e)
                : Ar.removeChild(e))),
          t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    In = function (e, t, i, r, n, s) {
      var a,
        o,
        l,
        d = e._gsap,
        u = n || zn(e, !0),
        c = d.xOrigin || 0,
        p = d.yOrigin || 0,
        h = d.xOffset || 0,
        f = d.yOffset || 0,
        m = u[0],
        g = u[1],
        v = u[2],
        _ = u[3],
        y = u[4],
        w = u[5],
        b = t.split(" "),
        T = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0;
      i
        ? u !== Pn &&
          (o = m * _ - g * v) &&
          ((l = T * (-g / o) + x * (m / o) - (m * w - g * y) / o),
          (T = T * (_ / o) + x * (-v / o) + (v * w - _ * y) / o),
          (x = l))
        : ((T = (a = vn(e)).x + (~b[0].indexOf("%") ? (T / 100) * a.width : T)),
          (x =
            a.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * a.height : x))),
        r || (!1 !== r && d.smooth)
          ? ((y = T - c),
            (w = x - p),
            (d.xOffset = h + (y * m + w * v) - y),
            (d.yOffset = f + (y * g + w * _) - w))
          : (d.xOffset = d.yOffset = 0),
        (d.xOrigin = T),
        (d.yOrigin = x),
        (d.smooth = !!r),
        (d.origin = t),
        (d.originIsAbsolute = !!i),
        (e.style[sn] = "0px 0px"),
        s &&
          (wn(s, d, "xOrigin", c, T),
          wn(s, d, "yOrigin", p, x),
          wn(s, d, "xOffset", h, d.xOffset),
          wn(s, d, "yOffset", f, d.yOffset)),
        e.setAttribute("data-svg-origin", T + " " + x);
    },
    Dn = function (e, t) {
      var i = e._gsap || new qi(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r,
        n,
        s,
        a,
        o,
        l,
        d,
        u,
        c,
        p,
        h,
        f,
        m,
        g,
        v,
        _,
        y,
        w,
        b,
        T,
        x,
        S,
        E,
        C,
        M,
        k,
        P,
        O,
        A,
        L,
        z,
        I,
        D = e.style,
        B = i.scaleX < 0,
        F = "px",
        R = "deg",
        G = getComputedStyle(e),
        $ = cn(e, sn) || "0";
      return (
        (r = n = s = l = d = u = c = p = h = 0),
        (a = o = 1),
        (i.svg = !(!e.getCTM || !_n(e))),
        G.translate &&
          (("none" === G.translate &&
            "none" === G.scale &&
            "none" === G.rotate) ||
            (D[nn] =
              ("none" !== G.translate
                ? "translate3d(" +
                  (G.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== G.rotate ? "rotate(" + G.rotate + ") " : "") +
              ("none" !== G.scale
                ? "scale(" + G.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== G[nn] ? G[nn] : "")),
          (D.scale = D.rotate = D.translate = "none")),
        (g = zn(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((M = e.getBBox()),
              ($ = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px"),
              (C = ""))
            : (C = !t && e.getAttribute("data-svg-origin")),
          In(e, C || $, !!C || i.originIsAbsolute, !1 !== i.smooth, g)),
        (f = i.xOrigin || 0),
        (m = i.yOrigin || 0),
        g !== Pn &&
          ((w = g[0]),
          (b = g[1]),
          (T = g[2]),
          (x = g[3]),
          (r = S = g[4]),
          (n = E = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(w * w + b * b)),
              (o = Math.sqrt(x * x + T * T)),
              (l = w || b ? $r(b, w) * Rr : 0),
              (c = T || x ? $r(T, x) * Rr + l : 0) &&
                (o *= Math.abs(Math.cos(c * Gr))),
              i.svg && ((r -= f - (f * w + m * T)), (n -= m - (f * b + m * x))))
            : ((I = g[6]),
              (L = g[7]),
              (P = g[8]),
              (O = g[9]),
              (A = g[10]),
              (z = g[11]),
              (r = g[12]),
              (n = g[13]),
              (s = g[14]),
              (d = (v = $r(I, A)) * Rr),
              v &&
                ((C = S * (_ = Math.cos(-v)) + P * (y = Math.sin(-v))),
                (M = E * _ + O * y),
                (k = I * _ + A * y),
                (P = S * -y + P * _),
                (O = E * -y + O * _),
                (A = I * -y + A * _),
                (z = L * -y + z * _),
                (S = C),
                (E = M),
                (I = k)),
              (u = (v = $r(-T, A)) * Rr),
              v &&
                ((_ = Math.cos(-v)),
                (z = x * (y = Math.sin(-v)) + z * _),
                (w = C = w * _ - P * y),
                (b = M = b * _ - O * y),
                (T = k = T * _ - A * y)),
              (l = (v = $r(b, w)) * Rr),
              v &&
                ((C = w * (_ = Math.cos(v)) + b * (y = Math.sin(v))),
                (M = S * _ + E * y),
                (b = b * _ - w * y),
                (E = E * _ - S * y),
                (w = C),
                (S = M)),
              d &&
                Math.abs(d) + Math.abs(l) > 359.9 &&
                ((d = l = 0), (u = 180 - u)),
              (a = yt(Math.sqrt(w * w + b * b + T * T))),
              (o = yt(Math.sqrt(E * E + I * I))),
              (v = $r(S, E)),
              (c = Math.abs(v) > 2e-4 ? v * Rr : 0),
              (h = z ? 1 / (z < 0 ? -z : z) : 0)),
          i.svg &&
            ((C = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !An(cn(e, nn))),
            C && e.setAttribute("transform", C))),
        Math.abs(c) > 90 &&
          Math.abs(c) < 270 &&
          (B
            ? ((a *= -1),
              (c += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((o *= -1), (c += c <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          r -
          ((i.xPercent =
            r &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          F),
        (i.y =
          n -
          ((i.yPercent =
            n &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          F),
        (i.z = s + F),
        (i.scaleX = yt(a)),
        (i.scaleY = yt(o)),
        (i.rotation = yt(l) + R),
        (i.rotationX = yt(d) + R),
        (i.rotationY = yt(u) + R),
        (i.skewX = c + R),
        (i.skewY = p + R),
        (i.transformPerspective = h + F),
        (i.zOrigin = parseFloat($.split(" ")[2]) || 0) && (D[sn] = Bn($)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Se.force3D),
        (i.renderTransform = i.svg ? qn : Br ? Vn : Rn),
        (i.uncache = 0),
        i
      );
    },
    Bn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Fn = function (e, t, i) {
      var r = ii(t);
      return yt(parseFloat(t) + parseFloat(xn(e, "x", i + "px", r))) + r;
    },
    Rn = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Vn(e, t);
    },
    Gn = "0deg",
    $n = "0px",
    Nn = ") ",
    Vn = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        a = i.y,
        o = i.z,
        l = i.rotation,
        d = i.rotationY,
        u = i.rotationX,
        c = i.skewX,
        p = i.skewY,
        h = i.scaleX,
        f = i.scaleY,
        m = i.transformPerspective,
        g = i.force3D,
        v = i.target,
        _ = i.zOrigin,
        y = "",
        w = ("auto" === g && e && 1 !== e) || !0 === g;
      if (_ && (u !== Gn || d !== Gn)) {
        var b,
          T = parseFloat(d) * Gr,
          x = Math.sin(T),
          S = Math.cos(T);
        (T = parseFloat(u) * Gr),
          (b = Math.cos(T)),
          (s = Fn(v, s, x * b * -_)),
          (a = Fn(v, a, -Math.sin(T) * -_)),
          (o = Fn(v, o, S * b * -_ + _));
      }
      m !== $n && (y += "perspective(" + m + Nn),
        (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
        (w || s !== $n || a !== $n || o !== $n) &&
          (y +=
            o !== $n || w
              ? "translate3d(" + s + ", " + a + ", " + o + ") "
              : "translate(" + s + ", " + a + Nn),
        l !== Gn && (y += "rotate(" + l + Nn),
        d !== Gn && (y += "rotateY(" + d + Nn),
        u !== Gn && (y += "rotateX(" + u + Nn),
        (c === Gn && p === Gn) || (y += "skew(" + c + ", " + p + Nn),
        (1 === h && 1 === f) || (y += "scale(" + h + ", " + f + Nn),
        (v.style[nn] = y || "translate(0, 0)");
    },
    qn = function (e, t) {
      var i,
        r,
        n,
        s,
        a,
        o = t || this,
        l = o.xPercent,
        d = o.yPercent,
        u = o.x,
        c = o.y,
        p = o.rotation,
        h = o.skewX,
        f = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        _ = o.xOrigin,
        y = o.yOrigin,
        w = o.xOffset,
        b = o.yOffset,
        T = o.forceCSS,
        x = parseFloat(u),
        S = parseFloat(c);
      (p = parseFloat(p)),
        (h = parseFloat(h)),
        (f = parseFloat(f)) && ((h += f = parseFloat(f)), (p += f)),
        p || h
          ? ((p *= Gr),
            (h *= Gr),
            (i = Math.cos(p) * m),
            (r = Math.sin(p) * m),
            (n = Math.sin(p - h) * -g),
            (s = Math.cos(p - h) * g),
            h &&
              ((f *= Gr),
              (a = Math.tan(h - f)),
              (n *= a = Math.sqrt(1 + a * a)),
              (s *= a),
              f &&
                ((a = Math.tan(f)), (i *= a = Math.sqrt(1 + a * a)), (r *= a))),
            (i = yt(i)),
            (r = yt(r)),
            (n = yt(n)),
            (s = yt(s)))
          : ((i = m), (s = g), (r = n = 0)),
        ((x && !~(u + "").indexOf("px")) || (S && !~(c + "").indexOf("px"))) &&
          ((x = xn(v, "x", u, "px")), (S = xn(v, "y", c, "px"))),
        (_ || y || w || b) &&
          ((x = yt(x + _ - (_ * i + y * n) + w)),
          (S = yt(S + y - (_ * r + y * s) + b))),
        (l || d) &&
          ((a = v.getBBox()),
          (x = yt(x + (l / 100) * a.width)),
          (S = yt(S + (d / 100) * a.height))),
        (a =
          "matrix(" +
          i +
          "," +
          r +
          "," +
          n +
          "," +
          s +
          "," +
          x +
          "," +
          S +
          ")"),
        v.setAttribute("transform", a),
        T && (v.style[nn] = a);
    },
    Hn = function (e, t, i, r, n) {
      var s,
        a,
        o = 360,
        l = Ie(n),
        d = parseFloat(n) * (l && ~n.indexOf("rad") ? Rr : 1) - r,
        u = r + d + "deg";
      return (
        l &&
          ("short" === (s = n.split("_")[1]) &&
            (d %= o) !== d % 180 &&
            (d += d < 0 ? o : -360),
          "cw" === s && d < 0
            ? (d = ((d + 36e9) % o) - ~~(d / o) * o)
            : "ccw" === s && d > 0 && (d = ((d - 36e9) % o) - ~~(d / o) * o)),
        (e._pt = a = new gr(e._pt, t, i, r, d, Yr)),
        (a.e = u),
        (a.u = "deg"),
        e._props.push(i),
        a
      );
    },
    jn = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Yn = function (e, t, i) {
      var r,
        n,
        s,
        a,
        o,
        l,
        d,
        u = jn({}, i._gsap),
        c = i.style;
      for (n in (u.svg
        ? ((s = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (c[nn] = t),
          (r = Dn(i, 1)),
          yn(i, nn),
          i.setAttribute("transform", s))
        : ((s = getComputedStyle(i)[nn]),
          (c[nn] = t),
          (r = Dn(i, 1)),
          (c[nn] = s)),
      Fr))
        (s = u[n]) !== (a = r[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((o = ii(s) !== (d = ii(a)) ? xn(i, n, s, d) : parseFloat(s)),
          (l = parseFloat(a)),
          (e._pt = new gr(e._pt, r, n, o, l - o, jr)),
          (e._pt.u = d || 0),
          e._props.push(n));
      jn(r, u);
    };
  _t("padding,margin,Width,Radius", function (e, t) {
    var i = "Top",
      r = "Right",
      n = "Bottom",
      s = "Left",
      a = (t < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (
        i
      ) {
        return t < 2 ? e + i : "border" + i + e;
      });
    kn[t > 1 ? "border" + e : e] = function (e, t, i, r, n) {
      var s, o;
      if (arguments.length < 4)
        return (
          (s = a.map(function (t) {
            return Sn(e, t, i);
          })),
          5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
        );
      (s = (r + "").split(" ")),
        (o = {}),
        a.forEach(function (e, t) {
          return (o[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
        }),
        e.init(t, o, n);
    };
  });
  var Wn,
    Xn,
    Un,
    Qn = {
      name: "css",
      register: fn,
      targetTest: function (e) {
        return e.style && e.nodeType;
      },
      init: function (e, t, i, r, n) {
        var s,
          a,
          o,
          l,
          d,
          u,
          c,
          p,
          h,
          f,
          m,
          g,
          v,
          _,
          y,
          w,
          b,
          T,
          x,
          S,
          E = this._props,
          C = e.style,
          M = i.vars.startAt;
        for (c in (Lr || fn(),
        (this.styles = this.styles || dn(e)),
        (w = this.styles.props),
        (this.tween = i),
        t))
          if (
            "autoRound" !== c &&
            ((a = t[c]), !ut[c] || !Qi(c, t, i, r, e, n))
          )
            if (
              ((d = typeof a),
              (u = kn[c]),
              "function" === d && (d = typeof (a = a.call(i, r, e, n))),
              "string" === d && ~a.indexOf("random(") && (a = fi(a)),
              u)
            )
              u(this, e, c, a, i) && (y = 1);
            else if ("--" === c.substr(0, 2))
              (s = (getComputedStyle(e).getPropertyValue(c) + "").trim()),
                (a += ""),
                (Mi.lastIndex = 0),
                Mi.test(s) || ((p = ii(s)), (h = ii(a))),
                h ? p !== h && (s = xn(e, c, s, h) + h) : p && (a += p),
                this.add(C, "setProperty", s, a, r, n, 0, 0, c),
                E.push(c),
                w.push(c, 0, C[c]);
            else if ("undefined" !== d) {
              if (
                (M && c in M
                  ? ((s =
                      "function" == typeof M[c] ? M[c].call(i, r, e, n) : M[c]),
                    Ie(s) && ~s.indexOf("random(") && (s = fi(s)),
                    ii(s + "") || (s += Se.units[c] || ii(Sn(e, c)) || ""),
                    "=" === (s + "").charAt(1) && (s = Sn(e, c)))
                  : (s = Sn(e, c)),
                (l = parseFloat(s)),
                (f = "string" === d && "=" === a.charAt(1) && a.substr(0, 2)) &&
                  (a = a.substr(2)),
                (o = parseFloat(a)),
                c in Hr &&
                  ("autoAlpha" === c &&
                    (1 === l &&
                      "hidden" === Sn(e, "visibility") &&
                      o &&
                      (l = 0),
                    w.push("visibility", 0, C.visibility),
                    wn(
                      this,
                      C,
                      "visibility",
                      l ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== c &&
                    "transform" !== c &&
                    ~(c = Hr[c]).indexOf(",") &&
                    (c = c.split(",")[0])),
                (m = c in Fr))
              )
                if (
                  (this.styles.save(c),
                  g ||
                    (((v = e._gsap).renderTransform && !t.parseTransform) ||
                      Dn(e, t.parseTransform),
                    (_ = !1 !== t.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new gr(
                        this._pt,
                        C,
                        nn,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new gr(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (f ? bt(v.scaleY, f + o) : o) - v.scaleY || 0,
                    jr
                  )),
                    (this._pt.u = 0),
                    E.push("scaleY", c),
                    (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    w.push(sn, 0, C[sn]),
                      (T = void 0),
                      (x = void 0),
                      (S = void 0),
                      (T = (b = a).split(" ")),
                      (x = T[0]),
                      (S = T[1] || "50%"),
                      ("top" !== x &&
                        "bottom" !== x &&
                        "left" !== S &&
                        "right" !== S) ||
                        ((b = x), (x = S), (S = b)),
                      (T[0] = Cn[x] || x),
                      (T[1] = Cn[S] || S),
                      (a = T.join(" ")),
                      v.svg
                        ? In(e, a, 0, _, 0, this)
                        : ((h = parseFloat(a.split(" ")[2]) || 0) !==
                            v.zOrigin && wn(this, v, "zOrigin", v.zOrigin, h),
                          wn(this, C, c, Bn(s), Bn(a)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    In(e, a, 1, _, 0, this);
                    continue;
                  }
                  if (c in On) {
                    Hn(this, v, c, l, f ? bt(l, f + a) : a);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    wn(this, v, "smooth", v.smooth, a);
                    continue;
                  }
                  if ("force3D" === c) {
                    v[c] = a;
                    continue;
                  }
                  if ("transform" === c) {
                    Yn(this, a, e);
                    continue;
                  }
                }
              else c in C || (c = hn(c) || c);
              if (
                m ||
                ((o || 0 === o) && (l || 0 === l) && !qr.test(a) && c in C)
              )
                o || (o = 0),
                  (p = (s + "").substr((l + "").length)) !==
                    (h = ii(a) || (c in Se.units ? Se.units[c] : p)) &&
                    (l = xn(e, c, s, h)),
                  (this._pt = new gr(
                    this._pt,
                    m ? v : C,
                    c,
                    l,
                    (f ? bt(l, f + o) : o) - l,
                    m || ("px" !== h && "zIndex" !== c) || !1 === t.autoRound
                      ? jr
                      : Xr
                  )),
                  (this._pt.u = h || 0),
                  p !== h && "%" !== h && ((this._pt.b = s), (this._pt.r = Wr));
              else if (c in C) En.call(this, e, c, s, f ? f + a : a);
              else if (c in e) this.add(e, c, s || e[c], f ? f + a : a, r, n);
              else if ("parseTransform" !== c) {
                et(c, a);
                continue;
              }
              m || (c in C ? w.push(c, 0, C[c]) : w.push(c, 1, s || e[c])),
                E.push(c);
            }
        y && mr(this);
      },
      render: function (e, t) {
        if (t.tween._time || !Dr())
          for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
        else t.styles.revert();
      },
      get: Sn,
      aliases: Hr,
      getSetter: function (e, t, i) {
        var r = Hr[t];
        return (
          r && r.indexOf(",") < 0 && (t = r),
          t in Fr && t !== sn && (e._gsap.x || Sn(e, "x"))
            ? i && Ir === i
              ? "scale" === t
                ? en
                : Jr
              : (Ir = i || {}) && ("scale" === t ? tn : rn)
            : e.style && !Fe(e.style[t])
            ? Kr
            : ~t.indexOf("-")
            ? Zr
            : or(e, t)
        );
      },
      core: { _removeProperty: yn, _getMatrix: zn },
    };
  (kr.utils.checkPrefix = hn),
    (kr.core.getStyleSaver = dn),
    (Un = _t(
      (Wn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Xn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (e) {
        Fr[e] = 1;
      }
    )),
    _t(Xn, function (e) {
      (Se.units[e] = "deg"), (On[e] = 1);
    }),
    (Hr[Un[13]] = Wn + "," + Xn),
    _t(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (e) {
        var t = e.split(":");
        Hr[t[1]] = Un[t[0]];
      }
    ),
    _t(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        Se.units[e] = "px";
      }
    ),
    kr.registerPlugin(Qn);
  var Kn = kr.registerPlugin(Qn) || kr;
  Kn.core.Tween;
  let Zn = [];
  Zn.length = 10;
  let Jn = Zn.fill([
    "img/brand/1.png",
    "img/brand/2.png",
    "img/brand/3.png",
    "img/brand/4.png",
  ]).flat();
  const es = document.querySelector(".page__line-brand");
  for (let e = 0; e < 2 * Jn.length; e++) {
    const t = document.createElement("img");
    (t.src = Jn[e % Jn.length]), es.appendChild(t);
  }
  const ts = document.getElementById("brand");
  !(function () {
    const e = ts.offsetWidth,
      t = window.innerWidth;
    (ts.style.left = `${t}`), (ts.style.transform = "none");
    const i = Kn.timeline({
      repeat: -1,
      defaults: { duration: 60, ease: "none", force3D: !0 },
    });
    i.fromTo(ts, { x: 0 }, { x: -e, onComplete: () => i.time(0) });
  })(),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.getElementById("cursorWrapper"),
        t = document.querySelectorAll(".swiper-slide"),
        i = [
          "Strong espresso coffee",
          "Choco Rocko",
          "Текст 3",
          "Текст 4",
          "Текст 5",
        ];
      t.forEach((t) => {
        t.addEventListener("mousemove", (t) => {
          t.clientX, t.clientY;
          (e.style.top = t.pageY - 50 + "px"),
            (e.style.left = t.pageX - 50 + "px");
        }),
          t.addEventListener("mouseover", (t) => {
            const r = t.target.tagName.toLowerCase();
            if ("body" === r || "html" === r) return;
            (e.style.display = "flex"), (e.style.opacity = 1);
            const n = Math.floor(Math.random() * i.length);
            e.innerHTML = `<span class="cursor-text">${i[n]}</span>`;
          }),
          t.addEventListener("mouseout", (t) => {
            (e.style.display = "none"),
              (e.innerHTML = ""),
              (e.style.opacity = 0);
          });
      });
    });
  const is = document.querySelector(".move-text__wrapper"),
    rs = document.querySelectorAll(".move-text__item"),
    ns = (rs.offsetWidth, window.innerWidth),
    ss = Math.ceil(ns / 450) + 1;
  function as() {
    for (let e = 0; e < 4; e++) {
      const t = rs[e].querySelector(".move-text__p");
      for (let i = 1; i < 4 * ss; i++) {
        const i = t.cloneNode(!0);
        rs[e].appendChild(i);
      }
    }
  }
  function os() {
    const e = Kn.timeline({
      repeat: -1,
      defaults: { duration: 60, ease: "none", force3D: !0 },
    });
    e.fromTo(is, { x: 0 }, { x: -ns, onComplete: () => e.time(0) });
  }
  as(),
    os(),
    window.addEventListener("resize", () => {
      Kn.timeline().set(is, { clearProps: "all" }), as(), os();
    });
  const ls = document.querySelectorAll(".js-star");
  window.addEventListener("scroll", () => {
    const e = window.scrollY;
    ls.forEach((t) => (t.style.transform = `rotate(${e}deg)`));
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let r = document.querySelector(".icon-menu"),
        n = document.querySelector(".menu__body");
      r &&
        (n.classList.toggle("unvisible"),
        r.addEventListener("click", function (r) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : i(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        }));
    })();
})();
