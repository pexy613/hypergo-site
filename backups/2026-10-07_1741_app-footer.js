/* hg-version 2026-10-07-1721 */
/* NATIVE APP FLAG: app-only rules in the Global files are scoped to html.hg-native-app (this file loads only in the app). */
(function () {
  try { document.documentElement.classList.add("hg-native-app"); } catch (e) {}
})();

/* TEMP-DIAGNOSTIC-START (hgperf: tap / swipe delay panel + hgnoswipe switch)
   Temporary, hidden, read-only. Secret words, typed in the search field and submitted with Return:
   - hgperf    shows / hides the panel (live numbers about tap and swipe delay).
   - hgnoswipe switches our edge swipe-back and our tab swipe OFF / back ON (their listeners are removed / re-added).
   The panel and all numbers live in memory only (no storage, no network, no console). Nothing shows without a word.
   Listener counting: addEventListener / removeEventListener are wrapped from the moment this file runs. The wrapper calls
   the original first with the exact same arguments and returns its result; it only counts touch, pointer and click
   types (and records the registering file:line for them) and can never throw. Listeners registered before this file
   ran are not seen (the panel's conditions line says whether the page was still loading when it was installed).
   Hooks elsewhere (each marked with the same two start / end comments): the tag lines around the tab swipe and the swipe-back
   blocks in this file, and the secret-word line in liveSearch() in global-footer-2.js. */
(function () {
  "use strict";
  var W = window, D = document;
  if (W.__hgPerf) return;
  var P = W.__hgPerf = { tag: "" };
  var ET = EventTarget.prototype, oAdd = ET.addEventListener, oRem = ET.removeEventListener;
  var WATCH = { touchstart: 1, touchmove: 1, touchend: 1, touchcancel: 1, pointerdown: 1, pointermove: 1, pointerup: 1, pointercancel: 1, click: 1 };
  var TYPES = ["touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointercancel", "click"];
  var installedState = D.readyState;
  var visible = false, swipeOn = true, dirty = true;

  /* ---------- listener registry (aggregated counts only; no strong references to page elements) ---------- */
  var byTarget = new WeakMap(), swipeRecs = [];
  var cnt = {}, src = { ours: 0, vendor: 0, temp: 0, "?": 0 }, total = 0, adds = 0, rems = 0, locs = new Map();
  TYPES.forEach(function (t) { cnt[t] = { p: 0, np: 0, u: 0 }; });
  var snap = null;
  function where() {
    var s = "";
    try { s = String(new Error().stack || ""); } catch (e) { return null; }
    var L = s.split("\n"), i = 0;
    for (; i < L.length; i++) if (L[i].indexOf("hgPerfAEL") !== -1) { i++; break; }
    if (i >= L.length) i = 1;
    for (; i < L.length; i++) {
      var m = L[i].match(/(https?:\/\/[^\s()]+?):(\d+):(\d+)/);
      if (!m) continue;
      var url = m[1], file = url.split("/").pop().split("?")[0] || url;
      return { s: /hypergo-site\//.test(url) ? "ours" : (/eruda/i.test(url) ? "temp" : "vendor"), loc: file + ":" + m[2] };
    }
    return null;
  }
  function pass(o) { return (o && typeof o === "object" && "passive" in o) ? (o.passive ? "p" : "np") : "u"; }
  function capt(o) { return o && typeof o === "object" ? !!o.capture : !!o; }
  function bump(rec, d) {
    var c = cnt[rec.type]; if (c) c[rec.pass] += d;
    src[rec.src] = (src[rec.src] || 0) + d; total += d;
    if (d > 0) adds++; else rems++;
    var k = rec.type + "|" + rec.src + "|" + rec.pass + "|" + rec.loc;
    if (locs.has(k) || locs.size < 400) locs.set(k, (locs.get(k) || 0) + d);
    dirty = true;
  }
  function record(target, type, listener, options, forcedSrc, forcedLoc) {
    var list = byTarget.get(target);
    var c = capt(options);
    if (list) { for (var i = 0; i < list.length; i++) if (list[i].type === type && list[i].l === listener && list[i].c === c) return; }
    else { list = []; byTarget.set(target, list); }
    var w = forcedSrc ? null : ((visible || type !== "click") ? where() : null);
    var rec = { type: type, l: listener, c: c, pass: pass(options), src: forcedSrc || (w ? w.s : "?"), loc: forcedLoc || (w ? w.loc : "?") };
    if (P.tag) { rec.src = "ours"; rec.loc = P.tag + (w ? " " + w.loc : ""); swipeRecs.push({ t: target, type: type, l: listener, o: options, rec: rec }); }
    list.push(rec);
    bump(rec, 1);
  }
  function unrecord(target, type, listener, options) {
    var list = byTarget.get(target); if (!list) return;
    var c = capt(options);
    for (var i = 0; i < list.length; i++) if (list[i].type === type && list[i].l === listener && list[i].c === c) { bump(list[i], -1); list.splice(i, 1); return; }
  }
  try {
    ET.addEventListener = function hgPerfAEL(type, listener, options) {
      var r = oAdd.apply(this, arguments);
      try { if (listener && WATCH[type]) record(this, type, listener, options); } catch (e) {}
      return r;
    };
    ET.removeEventListener = function hgPerfREL(type, listener, options) {
      var r = oRem.apply(this, arguments);
      try { if (listener && WATCH[type]) unrecord(this, type, listener, options); } catch (e) {}
      return r;
    };
  } catch (e) {}
  function own(target, type, fn, opts) { oAdd.call(target, type, fn, opts); try { record(target, type, fn, opts, "temp", "hgperf"); } catch (e) {} }

  /* ---------- hgnoswipe: take the swipe-back and tab swipe listeners off / put them back ---------- */
  function setSwipe(on) {
    if (on === swipeOn) return;
    swipeOn = on;
    swipeRecs.forEach(function (s) {
      try {
        if (on) { oAdd.call(s.t, s.type, s.l, s.o); var l = byTarget.get(s.t) || []; l.push(s.rec); byTarget.set(s.t, l); bump(s.rec, 1); }
        else { oRem.call(s.t, s.type, s.l, s.o); unrecord(s.t, s.type, s.l, s.o); }
      } catch (e) {}
    });
    dirty = true;
  }

  /* ---------- measuring (only while the panel is shown) ---------- */
  var types = []; try { types = (W.PerformanceObserver && PerformanceObserver.supportedEntryTypes) || []; } catch (e) {}
  var hasET = types.indexOf("event") !== -1, hasLT = types.indexOf("longtask") !== -1, hasLoAF = types.indexOf("long-animation-frame") !== -1;
  function set() { return { tap: [], te: [], lt: [], ltN: 0, ltMax: 0, noChg: 0, noClick: 0, tapLast: "", teLast: null }; }
  var S = { on: set(), off: set() };
  function cur() { return swipeOn ? S.on : S.off; }
  function push(a, v, n) { a.push(v); if (a.length > n) a.shift(); }
  function now() { return performance.now(); }
  function ts(ev) { var t = ev && ev.timeStamp; if (!(t > 0)) return now(); if (t > 1e12) t -= (performance.timeOrigin || 0); return t; }
  function desc(el) {
    try {
      if (!el || el.nodeType !== 1) return "?";
      var c = (el.getAttribute("class") || "").trim().split(/\s+/)[0];
      return el.tagName.toLowerCase() + (c ? "." + c : "");
    } catch (e) { return "?"; }
  }
  var tap = null, lastType = "", fingerDown = false, tailUntil = 0, mo = null, moTimer = 0, clickTimer = 0;
  function skipMut(n) {
    try {
      var el = n && n.nodeType === 1 ? n : n && n.parentElement;
      return !el || !!(el.closest && el.closest("#hg-temp-perf,#hg-temp-diag,#hg-launch,.hg-ph-slot,.hg-ph-logo"));
    } catch (e) { return true; }
  }
  function disarm() { if (mo) { mo.disconnect(); } clearTimeout(moTimer); }
  function arm(t) {
    if (hasET || !W.MutationObserver) return;
    disarm();
    if (!mo) mo = new MutationObserver(function (recs) {
      var tt = tap; if (!tt || tt.done) { disarm(); return; }
      for (var i = 0; i < recs.length; i++) {
        if (recs[i].type === "attributes" && recs[i].attributeName === "placeholder") continue;
        if (skipMut(recs[i].target)) continue;
        tt.done = true; disarm();
        requestAnimationFrame(function () { var s = tt.set; push(s.tap, now() - tt.t0, 30); s.tapLast = tt.desc; dirty = true; });
        return;
      }
    });
    mo.observe(D.documentElement, { childList: true, subtree: true, attributes: true, characterData: true });
    moTimer = setTimeout(function () { if (tap && !tap.done && !tap.moved) { tap.done = true; tap.set.noChg++; dirty = true; } disarm(); }, 1500);
  }
  if (hasET) {
    try {
      new PerformanceObserver(function (list) {
        if (!visible) return;
        list.getEntries().forEach(function (e) {
          if (!/^(pointerdown|pointerup|click|touchstart|touchend|mousedown)$/.test(e.name)) return;
          var s = cur(); push(s.tap, e.duration, 30); s.tapLast = e.name + " " + desc(e.target); dirty = true;
        });
      }).observe({ type: "event", durationThreshold: 16, buffered: false });
    } catch (e) { hasET = false; }
  }
  function ltRec(dur, what, est) {
    var s = cur(); s.ltN++; if (dur > s.ltMax) s.ltMax = dur;
    var d = new Date();
    push(s.lt, { at: ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2), dur: Math.round(dur), type: lastType || "-", what: what || "", est: est }, 5);
    dirty = true;
  }
  if (hasLoAF) {
    try {
      new PerformanceObserver(function (list) {
        if (!visible) return;
        list.getEntries().forEach(function (e) {
          var sc = (e.scripts || [])[0], w = sc ? ((sc.sourceURL || "").split("/").pop() + " " + (sc.sourceFunctionName || sc.invoker || "")) : "";
          ltRec(e.duration, w, false);
        });
      }).observe({ type: "long-animation-frame", buffered: false });
    } catch (e) { hasLoAF = false; }
  } else if (hasLT) {
    try {
      new PerformanceObserver(function (list) {
        if (!visible) return;
        list.getEntries().forEach(function (e) {
          var a = (e.attribution || [])[0];
          ltRec(e.duration, a ? (a.containerSrc || a.containerName || a.name || "") : "", false);
        });
      }).observe({ type: "longtask", buffered: false });
    } catch (e) { hasLT = false; }
  }
  var frameRunning = false, lastFrame = 0;
  function frameLoop(t) {
    if (!visible || !(fingerDown || now() < tailUntil)) { frameRunning = false; return; }
    if (lastFrame && t - lastFrame > 50) ltRec(t - lastFrame, "", true);
    lastFrame = t;
    requestAnimationFrame(frameLoop);
  }
  function startFrames() {
    if (hasLT || hasLoAF || frameRunning) return;
    frameRunning = true; lastFrame = 0; requestAnimationFrame(frameLoop);
  }
  var OPT = { capture: true, passive: true };
  own(W, "touchstart", function (ev) {
    lastType = "touchstart";
    if (!visible) return;
    try {
      fingerDown = true; startFrames();
      var t = ev.touches && ev.touches[0];
      tap = { t0: ts(ev), x: t ? t.clientX : 0, y: t ? t.clientY : 0, moved: false, done: false, desc: desc(ev.target), set: cur() };
      arm();
    } catch (e) {}
  }, OPT);
  own(W, "touchmove", function (ev) {
    lastType = "touchmove";
    if (!visible || !tap || tap.moved) return;
    try {
      var t = ev.touches && ev.touches[0];
      if (t && (Math.abs(t.clientX - tap.x) > 10 || Math.abs(t.clientY - tap.y) > 10)) { tap.moved = true; tap.done = true; disarm(); }
    } catch (e) {}
  }, OPT);
  own(W, "touchend", function (ev) {
    lastType = "touchend";
    if (!visible) return;
    fingerDown = false; tailUntil = now() + 500;
    if (!tap || tap.moved) return;
    var tp = tap; tp.te = ts(ev);
    clearTimeout(clickTimer);
    clickTimer = setTimeout(function () { if (tp.te && !tp.clicked) { tp.set.noClick++; dirty = true; } }, 800);
  }, OPT);
  own(W, "touchcancel", function () { lastType = "touchcancel"; fingerDown = false; if (tap) { tap.moved = true; tap.done = true; } disarm(); }, OPT);
  own(W, "click", function (ev) {
    if (!visible || !tap || !tap.te || tap.clicked) return;
    tap.clicked = true; clearTimeout(clickTimer);
    var d = ts(ev) - tap.te;
    if (d >= 0 && d < 1000) { push(tap.set.te, d, 30); tap.set.teLast = d; dirty = true; }
  }, OPT);

  /* ---------- panel ---------- */
  var panel = null, timer = 0, diagSeen = null;
  function med(a) { if (!a.length) return null; var b = a.slice().sort(function (x, y) { return x - y; }); return b[b.length >> 1]; }
  function mx(a) { return a.length ? Math.max.apply(null, a) : null; }
  function f(v) { return v == null ? "n/a" : String(Math.round(v)); }
  function stat(a, last) { return a.length ? "last " + f(last != null ? last : a[a.length - 1]) + " med " + f(med(a)) + " max " + f(mx(a)) + " n=" + a.length : "n/a"; }
  function topLocs(type, n) {
    var out = [];
    locs.forEach(function (v, k) { if (v > 0 && k.indexOf(type + "|") === 0) out.push([v, k.split("|")]); });
    out.sort(function (a, b) { return b[0] - a[0]; });
    return out.slice(0, n).map(function (x) { return x[1][1] + ":" + x[1][3] + (x[1][2] !== "u" ? "(" + x[1][2] + ")" : "") + "x" + x[0]; }).join(", ") || "none seen";
  }
  function render() {
    if (!visible || !panel) return;
    var diag = D.getElementById("hg-temp-diag");
    if (!!diag !== diagSeen) { diagSeen = !!diag; place(diag); }
    if (!dirty) return;
    dirty = false;
    var L = [];
    L.push("HGPERF  swipes: " + (swipeOn ? "ON" : "OFF") + "  (hgnoswipe toggles)");
    L.push("cond: hgdiag " + (diag ? "on" : "off") + " | eruda " + (W.eruda ? "loaded" : "no") + " | eventTiming " + (hasET ? "yes" : "n/a") + " | longtask " + (hasLoAF ? "LoAF" : hasLT ? "yes" : "n/a (frame gaps, est.)") + " | counting since " + installedState);
    ["on", "off"].forEach(function (k) {
      var s = S[k], tag = k.toUpperCase();
      L.push("TAP->" + (hasET ? "paint(ET)" : "change+frame") + " " + tag + ": " + stat(s.tap) + " nochange " + s.noChg + (s.tapLast ? " [" + s.tapLast + "]" : ""));
      L.push("TOUCHEND->CLICK " + tag + ": " + stat(s.te, s.teLast) + " noclick " + s.noClick);
      L.push("LONG>50 " + tag + (hasLT || hasLoAF ? "" : " (est)") + ": n=" + s.ltN + " max " + (s.ltN ? s.ltMax.toFixed(0) : "n/a"));
      s.lt.slice().reverse().forEach(function (x) { L.push("  " + x.at + " " + x.dur + "ms " + x.type + (x.what ? " " + x.what : "") + " | " + (x.type !== "-" ? topLocs(x.type, 3) : "")); });
    });
    var g = snap ? total - snap.total : 0;
    L.push("LISTENERS live " + total + " | ours " + src.ours + " vendor " + src.vendor + " temp " + src.temp + " ? " + src["?"] + " | since shown " + (g >= 0 ? "+" : "") + g + " (add " + (snap ? adds - snap.adds : 0) + " rm " + (snap ? rems - snap.rems : 0) + ")");
    TYPES.forEach(function (t) { var c = cnt[t]; if (c.p + c.np + c.u) L.push("  " + t + " p" + c.p + " np" + c.np + " u" + c.u); });
    var warn = [];
    locs.forEach(function (v, k) { var p = k.split("|"); if (v > 0 && p[2] === "np" && (p[0] === "touchstart" || p[0] === "touchmove")) warn.push(p[0] + " " + p[1] + ":" + p[3]); });
    if (warn.length) L.push("WARN non-passive: " + warn.slice(0, 4).join(", "));
    L.push("touchstart: " + topLocs("touchstart", 4));
    L.push("touchmove: " + topLocs("touchmove", 4));
    panel.textContent = L.join("\n");
  }
  function place(diag) {
    if (!panel) return;
    var top = 0;
    try { if (diag) top = diag.getBoundingClientRect().bottom + 6; } catch (e) {}
    panel.style.maxHeight = top ? Math.max(80, W.innerHeight - top - 70) + "px" : "46vh";
  }
  function show(on) {
    visible = on;
    if (on) {
      if (!panel) {
        panel = D.createElement("div");
        panel.id = "hg-temp-perf";
        panel.style.cssText = "position:fixed;left:6px;right:6px;bottom:calc(env(safe-area-inset-bottom,0px) + 64px);max-height:46vh;overflow:hidden;" +
          "background:rgba(0,0,0,.72);color:#fff;font:9px/1.3 ui-monospace,Menlo,monospace;white-space:pre-wrap;word-break:break-all;" +
          "z-index:2147483647;pointer-events:none;direction:ltr;text-align:left;padding:5px 6px;border-radius:6px;";
      }
      if (!panel.isConnected) D.body.appendChild(panel);
      snap = { total: total, adds: adds, rems: rems };
      diagSeen = null; dirty = true; render();
      timer = setInterval(render, 250);
    } else {
      clearInterval(timer); timer = 0; disarm(); tap = null;
      if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
    }
  }

  /* ---------- secret words at the search submit (same pattern as the hgdiag hook) ---------- */
  var stopUpUntil = 0;
  function inField(t) { return !!(t && t.tagName === "INPUT" && t.closest && t.closest("#MultiVendorSearch .mobile-search-input")); }
  oAdd.call(D, "keydown", function (e) {
    try {
      if (!e || e.key !== "Enter" || !inField(e.target)) return;
      var v = String(e.target.value || "").trim().toLowerCase();
      if (v !== "hgperf" && v !== "hgnoswipe") return;
      e.preventDefault(); e.stopImmediatePropagation();
      stopUpUntil = Date.now() + 1000;
      if (e.hgAutoSearch) return;
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(e.target, "");
      if (v === "hgperf") show(!visible); else setSwipe(!swipeOn);
    } catch (err) {}
  }, true);
  oAdd.call(D, "keyup", function (e) {
    try {
      if (!e || e.key !== "Enter" || !inField(e.target) || Date.now() > stopUpUntil) return;
      stopUpUntil = 0; e.preventDefault(); e.stopImmediatePropagation();
    } catch (err) {}
  }, true);
})();
/* TEMP-DIAGNOSTIC-END */

(function () {

  function applyAppBackground() {

    document.documentElement.style.setProperty(
      "background-color",
      "#5A29DE",
      "important"
    );

    document.body.style.setProperty(
      "background-color",
      "#5A29DE",
      "important"
    );

  }

  applyAppBackground();

  let bgTimer = null;

  new MutationObserver(() => {

    clearTimeout(bgTimer);

    bgTimer = setTimeout(applyAppBackground, 60);

  }).observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );

})();

/* STATUS BAR STRIP: purple at the top of Home, fades to white as the header scrolls away.
   While the header is still passing underneath, the strip is see-through (so the header shows through as it turns white);
   the moment the header has scrolled past, it snaps to solid white so the clock stays readable over the page content.
   Reuses the app's own strip element (.native-status-bar-bg) - only its background colour is driven here. */
(function () {
  const PURPLE = [134, 64, 252];   /* #8640FC */
  const WHITE = [255, 255, 255];
  const FADE = 56;                 /* px of scrolling over which the colour fades (starts on the first pixel, Talabat-style) */
  const A_HEADER = 0.55;           /* strip opacity (white) while the header is still underneath */
  const A_PAGE = 1;                /* strip opacity (white) once only page content is underneath */
  const SNAP = 12;                 /* px over which it goes from see-through to solid once the header has left the strip */
  let ticking = false;

  function mix(t) {
    return PURPLE.map((p, i) => Math.round(WHITE[i] + (p - WHITE[i]) * t));
  }

  /* the store page is what sits under the strip right now (old screens can stay loaded hidden behind it).
     The address is checked first: when a store is opened from a category, the category page stays loaded until the
     store's items arrive, so the store page isn't on screen yet in the page itself, but the address already is the
     store's (/en/m/<store>/<id>, same pattern hgMerchantHref builds in global-footer-1.js). */
  function storeOnScreen(strip) {
    if (/^\/(en|ar)\/m\/[^/]+\/[^/]+\/?$/.test(location.pathname)) return true;
    try {
      const y = Math.round((strip.getBoundingClientRect().height || 47) + 4);
      const el = document.elementFromPoint(Math.round(window.innerWidth / 2), y);
      return !!(el && el.closest && el.closest(".scheme-merchant-page"));
    } catch (e) { return false; }
  }

  function updateStrip() {
    ticking = false;
    const strip = document.querySelector(".native-status-bar-bg");
    if (!strip) return;
    const html = document.documentElement;
    /* STORE PAGE: the strip is see-through so the store banner shows behind the clock (design intent of the
       global-footer-1.js rule "cover sits under the phone status bar"). That rule is plain CSS, so any purple strip
       rule from a screen that is still loaded (category page #merchants_by_category, Search, Home header) beat it.
       Set here directly, so the store page always wins. Hyperzod's own scrolled "scrim" state is left alone. */
    if (storeOnScreen(strip)) {
      if (/scrim/.test(strip.className)) {
        strip.style.removeProperty("background-color");
        strip.style.removeProperty("transition");
      } else {
        strip.style.setProperty("transition", "none", "important");
        strip.style.setProperty("background-color", "transparent", "important");
      }
      return;
    }
    const root = document.getElementById("MultiVendorHeaderRoot");
    const modal = document.querySelector(".v-overlay--active > .v-overlay__scrim");
    /* Search is its own purple-header page. Do not let the Home scroll-fade logic turn its status strip white. */
    if (document.getElementById("MultiVendorSearch") || html.classList.contains("hg-search-page")) {
      strip.style.setProperty("transition", "none", "important");
      strip.style.setProperty("background-color", "rgb(134,64,252)", "important");
      return;
    }
    if (!root || modal || html.classList.contains("native-status-bar-transparent") || /scrim/.test(strip.className)) {
      strip.style.removeProperty("background-color");
      strip.style.removeProperty("transition");
      return;
    }
    const box = root.getBoundingClientRect();
    /* how far the header has scrolled up (0 at rest) -> fade starts at the first pixel of scrolling */
    const scrolled = Math.max(0, -box.top);
    const t = 1 - Math.min(1, scrolled / FADE);
    /* 0 while the header still covers the strip area, 1 once it has left it */
    const sh = strip.getBoundingClientRect().height || 47;
    const gone = Math.min(1, Math.max(0, (sh + SNAP - box.bottom) / SNAP));
    const aWhite = A_HEADER + (A_PAGE - A_HEADER) * gone;
    const a = 1 - (1 - aWhite) * (1 - t);   /* opaque purple at rest, aWhite once fully faded */
    const c = mix(t);
    strip.style.setProperty("transition", "none", "important");   /* follow the finger exactly, no lag */
    strip.style.setProperty("background-color", "rgba(" + c.join(",") + "," + a.toFixed(3) + ")", "important");
  }

  function schedule() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateStrip); }
  }

  document.addEventListener("scroll", schedule, { capture: true, passive: true });
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  schedule();
})();


/* TEMP-DIAGNOSTIC-START (hgperf hook: tags the tabswipe listeners so hgnoswipe can take them off) */ if (window.__hgPerf) window.__hgPerf.tag = "tabswipe"; /* TEMP-DIAGNOSTIC-END */
/* TAB SWIPE (app): swipe left/right on Home, Reorder or Account to go to the next/previous bottom tab.
   A tab tap in Hyperzod is a click on the tab's own button in #MultiVendorBottomNav (global-footer-1.js tags each tab
   with data-hg-nav = home / reorder / account / cart). The swipe clicks that same button, so the tab highlight, the page
   and everything else behave exactly as after a tap. Order: Home, Reorder, Account. English: swipe left = next tab.
   Arabic (tabs run right to left): swipe right = next tab. Past the first or last tab nothing happens.
   Ignored: swipes starting within 24px of either screen edge (kept for going back), on any row that scrolls sideways,
   in a field / with the keyboard open, while a pop-up or sheet is open, and on any screen that is not one of the 3 tabs. */
(function () {
  var ORDER = ["home", "reorder", "account"];
  var EDGE = 24, MIN_DX = 70, FAST_DX = 35, FAST_V = 0.45, LOCK = 10;
  var st = null;

  function isAr() {
    var h = document.documentElement;
    return h.getAttribute("dir") === "rtl" || /^ar/i.test(h.getAttribute("lang") || "");
  }
  function currentTab() {
    var p = location.pathname, h = document.documentElement;
    if (/^\/(en|ar)\/profile\/orders\/?$/.test(p)) return h.classList.contains("hg-orders-acct") ? "" : "reorder";
    if (/^\/(en|ar)\/profile\/?$/.test(p)) return "account";
    if (/^\/(en|ar)?\/?$/.test(p) && document.getElementById("MultiVendorHome")) return "home";
    return "";
  }
  function scrollsSideways(el) {
    for (; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
      if (el.classList && (el.classList.contains("swiper") || el.classList.contains("v-slide-group__container") || el.classList.contains("v-window") || el.classList.contains("v-carousel"))) return true;
      if (el.scrollWidth > el.clientWidth + 1) {
        var ox = getComputedStyle(el).overflowX;
        if (ox === "auto" || ox === "scroll") return true;
      }
    }
    return false;
  }
  function blocked(target) {
    var a = document.activeElement;
    if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable)) return true;
    if (document.querySelector(".v-overlay--active")) return true;
    if (target && target.closest && target.closest("#MultiVendorBottomNav,input,textarea,[contenteditable='true']")) return true;
    return false;
  }

  document.addEventListener("touchstart", function (ev) {
    st = null;
    if (ev.touches.length !== 1) return;
    var t = ev.touches[0], w = window.innerWidth;
    if (t.clientX < EDGE || t.clientX > w - EDGE) return;
    if (!currentTab() || blocked(ev.target) || scrollsSideways(ev.target)) return;
    st = { x: t.clientX, y: t.clientY, t: Date.now(), dir: "" };
  }, { passive: true, capture: true });

  document.addEventListener("touchmove", function (ev) {
    if (!st) return;
    if (ev.touches.length !== 1) { st = null; return; }
    var t = ev.touches[0], dx = t.clientX - st.x, dy = t.clientY - st.y;
    if (!st.dir) {
      if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
      st.dir = Math.abs(dx) > Math.abs(dy) * 1.5 ? "h" : "v";
      if (st.dir === "v") st = null;   /* vertical scroll: leave it alone */
    }
  }, { passive: true, capture: true });

  function end(ev) {
    var s = st; st = null;
    if (!s || s.dir !== "h") return;
    var t = ev.changedTouches && ev.changedTouches[0];
    if (!t) return;
    var dx = t.clientX - s.x, dy = t.clientY - s.y, adx = Math.abs(dx), dt = Math.max(1, Date.now() - s.t);
    if (adx < Math.abs(dy) * 2) return;
    if (!(adx >= MIN_DX || (adx >= FAST_DX && adx / dt >= FAST_V))) return;
    var cur = currentTab();
    if (!cur || blocked(null)) return;
    var forward = isAr() ? dx > 0 : dx < 0;
    var i = ORDER.indexOf(cur) + (forward ? 1 : -1);
    if (i < 0 || i >= ORDER.length) return;
    var item = document.querySelector("#MultiVendorBottomNav .classic-nav-item[data-hg-nav='" + ORDER[i] + "']");
    var btn = item && (item.querySelector("button, .classic-footer-btn") || item);
    if (btn) btn.click();
  }
  document.addEventListener("touchend", end, { passive: true, capture: true });
  document.addEventListener("touchcancel", function () { st = null; }, { passive: true, capture: true });
})();
/* TEMP-DIAGNOSTIC-START (hgperf hook) */ if (window.__hgPerf) window.__hgPerf.tag = ""; /* TEMP-DIAGNOSTIC-END */


/* TEMP-DIAGNOSTIC-START (hgperf hook: tags the swipeback listeners so hgnoswipe can take them off) */ if (window.__hgPerf) window.__hgPerf.tag = "swipeback"; /* TEMP-DIAGNOSTIC-END */
/* EDGE SWIPE-BACK (app): a swipe that starts at the screen edge (left in English, right in Arabic) and is long or fast
   enough presses the page's own back arrow the moment it is released - the same element a tap would hit,
   so the destination, history and state are exactly the arrow's. No back arrow on screen (Home, Reorder, Account) = nothing.
   Back arrows found on screen, in this order:
   - #hg-orders-back: My Orders opened from Account (our button, global-footer-1.js syncOrdersBack: router.back()).
   - .scheme-mobile-page-header .back-btn: Hyperzod's header arrow (category pages, Account sub-pages, and any other
     page with the standard header).
   - the arrow inside the search field (#MultiVendorSearch .mobile-search-input .v-field__prepend-inner).
   - the store page's round back button (.merchant-floating-actions .merchant-floating-btn): the one standing apart from
     the filter and search buttons, which sit together.
   Not active while a pop-up or sheet is open (.v-overlay--active). The tab swipe ignores touches within 24px of the
   edges, so the two never overlap. One back per swipe, then 900ms lock. */
(function () {
  var EDGE = 24, MIN_DX = 90, FAST_DX = 45, FAST_V = 0.5, LOCK_MS = 900;
  var st = null, lockUntil = 0;

  function isAr() {
    var h = document.documentElement;
    return h.getAttribute("dir") === "rtl" || /^ar/i.test(h.getAttribute("lang") || "");
  }
  function onScreen(el) {
    if (!el || !el.getClientRects().length) return false;
    var r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4 || r.bottom <= 0 || r.top >= window.innerHeight) return false;
    var cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none" && parseFloat(cs.opacity || "1") > 0.05;
  }
  function storeBack() {
    var btns = Array.prototype.filter.call(document.querySelectorAll(".merchant-floating-actions .merchant-floating-btn"), onScreen);
    if (btns.length < 2) return btns[0] || null;
    var best = null, bestGap = -1;
    btns.forEach(function (b) {
      var r = b.getBoundingClientRect(), gap = Infinity;
      btns.forEach(function (o) {
        if (o === b) return;
        var q = o.getBoundingClientRect();
        gap = Math.min(gap, Math.max(q.left - r.right, r.left - q.right, 0));
      });
      if (gap > bestGap) { bestGap = gap; best = b; }
    });
    return best;
  }
  function findBack() {
    var el = document.getElementById("hg-orders-back");
    if (onScreen(el)) return el;
    var list = document.querySelectorAll(".scheme-mobile-page-header .back-btn");
    for (var i = 0; i < list.length; i++) if (onScreen(list[i])) return list[i];
    var pre = document.querySelector("#MultiVendorSearch .mobile-search-input .v-field__prepend-inner");
    if (onScreen(pre)) return pre.querySelector("button, .v-icon, i") || pre;
    return storeBack();
  }
  function mainTab() {
    var p = location.pathname, h = document.documentElement;
    if (/^\/(en|ar)\/profile\/orders\/?$/.test(p)) return !h.classList.contains("hg-orders-acct");
    return /^\/(en|ar)\/profile\/?$/.test(p) || /^\/(en|ar)?\/?$/.test(p);
  }
  function blocked() {
    return !!document.querySelector(".v-overlay--active") || Date.now() < lockUntil;
  }

  /* 2026-10-07: back runs the moment the swipe is released. The old version first slid #app off the screen over a white
     cover (180ms) and only then pressed the arrow, and kept #app off-screen until the address changed (+60ms) - that was
     the blank white gap in the recording. Removed: the page no longer moves; only the app's own back transition shows. */
  function pressBack(btn) {
    lockUntil = Date.now() + LOCK_MS;
    try { btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window })); } catch (e) {}
  }

  document.addEventListener("touchstart", function (ev) {
    st = null;
    if (ev.touches.length !== 1 || blocked() || mainTab()) return;
    var t = ev.touches[0], w = window.innerWidth;
    var atEdge = isAr() ? t.clientX > w - EDGE : t.clientX < EDGE;
    if (!atEdge) return;
    st = { x: t.clientX, y: t.clientY, t: Date.now() };
  }, { passive: true, capture: true });

  document.addEventListener("touchend", function (ev) {
    var s = st; st = null;
    if (!s) return;
    var t = ev.changedTouches && ev.changedTouches[0];
    if (!t) return;
    var dx = (t.clientX - s.x) * (isAr() ? -1 : 1), dy = Math.abs(t.clientY - s.y);
    var dt = Math.max(1, Date.now() - s.t);
    if (dx <= 0 || dx < dy * 1.5) return;
    if (!(dx >= MIN_DX || (dx >= FAST_DX && dx / dt >= FAST_V))) return;
    if (blocked() || mainTab()) return;
    var btn = findBack();
    if (btn) pressBack(btn);
  }, { passive: true, capture: true });
  document.addEventListener("touchcancel", function () { st = null; }, { passive: true, capture: true });
})();
/* TEMP-DIAGNOSTIC-START (hgperf hook) */ if (window.__hgPerf) window.__hgPerf.tag = ""; /* TEMP-DIAGNOSTIC-END */

/* TEMP-DIAGNOSTIC-START
   Temporary, hidden, read-only diagnostic panel for the Search header jump. Nothing here runs or shows unless the
   secret word is submitted in the search field (see the matching hook below). Remove this whole block and the hook
   block to delete the feature completely. No storage, no network, no console output. */
(function () {
  "use strict";
  var panel = null, rafId = 0, shown = false;
  var LINES = ["hdr top", "vv offset", "vv height", "scrollY", "pinned", "below sb", "hdr parent h", "hdr position", "hdr replaced"];
  /* v2: reference to the header element seen last frame, and how many times a different element took its place */
  var lastHdr = null, replaced = 0;
  var HDR = "#MultiVendorSearch .scheme-global-search-mobile-header";

  /* The point sampled for "below sb": horizontal centre of the screen, 4px under the native status bar. The status bar
     height comes from the --native-status-bar-height variable the code already uses, else from the .native-status-bar-bg
     strip, else 0. The panel has pointer-events:none, so elementFromPoint can never return the panel itself. */
  function statusBarHeight() {
    var n = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--native-status-bar-height"));
    if (isFinite(n) && n > 0) return n;
    var bg = document.querySelector(".native-status-bar-bg");
    if (bg) { var bh = bg.getBoundingClientRect().height; if (isFinite(bh) && bh > 0) return bh; }
    return 0;
  }
  function describe(el) {
    if (!el) return "none";
    var t = String(el.tagName || "").toLowerCase();
    var id = el.id ? "#" + el.id : "";
    var cls = (typeof el.className === "string" && el.className.trim()) ? "." + el.className.trim().split(/\s+/).join(".") : "";
    return t + id + cls;
  }

  function fmt(v) { return (typeof v === "number" && isFinite(v)) ? v.toFixed(1) + "px" : "n/a"; }

  function read() {
    var out = [];
    try { var h = document.querySelector("#MultiVendorSearch .scheme-global-search-mobile-header"); out.push(h ? fmt(h.getBoundingClientRect().top) : "n/a"); } catch (e) { out.push("n/a"); }
    try { out.push(window.visualViewport ? fmt(window.visualViewport.offsetTop) : "n/a"); } catch (e) { out.push("n/a"); }
    try { out.push(window.visualViewport ? fmt(window.visualViewport.height) : "n/a"); } catch (e) { out.push("n/a"); }
    try { out.push(fmt(window.scrollY)); } catch (e) { out.push("n/a"); }
    try {
      var hh = document.querySelector("#MultiVendorSearch .scheme-global-search-mobile-header");
      var pos = hh ? getComputedStyle(hh).position : "n/a";
      var flag = document.documentElement.classList.contains("hg-search-input-active") ? "on" : "off";
      out.push((pos === "fixed" ? "YES" : "NO") + " " + pos + " flag=" + flag);
    } catch (e) { out.push("n/a"); }
    /* v2 line 1: element at the point just below the status bar */
    try {
      var y = statusBarHeight() + 4, x = Math.round(window.innerWidth / 2);
      out.push("@" + x + "," + y.toFixed(0) + " " + describe(document.elementFromPoint(x, y)));
    } catch (e) { out.push("n/a"); }
    /* v2 line 2: height of the header's parent */
    try { var hp = document.querySelector(HDR); out.push(hp && hp.parentElement ? fmt(hp.parentElement.getBoundingClientRect().height) : "n/a"); } catch (e) { out.push("n/a"); }
    /* v2 line 3: computed position of the header, read live */
    try { var hc = document.querySelector(HDR); out.push(hc ? String(getComputedStyle(hc).position || "n/a") : "n/a"); } catch (e) { out.push("n/a"); }
    /* v2 line 4: is the header still the same element as before */
    try {
      var hr = document.querySelector(HDR);
      if (!hr) out.push("missing" + (replaced ? " (REPLACED x" + replaced + ")" : ""));
      else {
        if (lastHdr && hr !== lastHdr) replaced++;
        lastHdr = hr;
        out.push(replaced ? "REPLACED x" + replaced : "same");
      }
    } catch (e) { out.push("n/a"); }
    return out;
  }

  /* v3: width, direction and ancestor lines for the Arabic search shift. Read-only: only getBoundingClientRect,
     getComputedStyle, attributes, scrollWidth/clientWidth and scroll positions are read. The panel itself is skipped. */
  var scanText = "", lastScan = 0;
  function n1(v) { return (typeof v === "number" && isFinite(v)) ? v.toFixed(1) : "n/a"; }
  function px(v) { return n1(v) + "px"; }
  function box(el) {
    if (!el || !el.getBoundingClientRect) return "n/a";
    var r = el.getBoundingClientRect();
    return "L " + px(r.left) + " R " + px(r.right) + " W " + px(r.width);
  }
  function mine(el) { return !!(panel && el && (el === panel || panel.contains(el))); }
  function extraLines(nowMs) {
    var out = [], de = document.documentElement, body = document.body, hdr = null;
    try { hdr = document.querySelector(HDR); } catch (e) {}
    /* 1. language and direction */
    try {
      var ha = function (el, a) { var v = el.getAttribute(a); return (v === null || v === "") ? "none" : v; };
      out.push("lang/dir: html lang=" + ha(de, "lang") + " dir=" + ha(de, "dir") + " comp=" + getComputedStyle(de).direction +
        " | body dir=" + (body ? ha(body, "dir") : "n/a") + " comp=" + (body ? getComputedStyle(body).direction : "n/a"));
    } catch (e) { out.push("lang/dir: n/a"); }
    /* 2. screen widths */
    try {
      out.push("widths: inner " + px(window.innerWidth) + " client " + px(de.clientWidth) +
        " vv " + (window.visualViewport ? px(window.visualViewport.width) : "n/a") + " screen " + px(window.screen ? screen.width : NaN));
    } catch (e) { out.push("widths: n/a"); }
    /* 3. header box, 4. header parent box */
    try { out.push("hdr box: " + (hdr ? box(hdr) : "n/a")); } catch (e) { out.push("hdr box: n/a"); }
    try { out.push("hdr parent box: " + (hdr && hdr.parentElement ? box(hdr.parentElement) : "n/a")); } catch (e) { out.push("hdr parent box: n/a"); }
    /* 5. page container (#MultiVendorSearch, the search route root that holds the header and everything below it) and body */
    try { var pc = document.getElementById("MultiVendorSearch"); out.push("page container: " + (pc ? describe(pc) + " " + box(pc) : "n/a")); } catch (e) { out.push("page container: n/a"); }
    try { out.push("body: " + (body ? box(body) : "n/a")); } catch (e) { out.push("body: n/a"); }
    /* 6. overflow check */
    try {
      var dsw = de.scrollWidth, bsw = body ? body.scrollWidth : NaN, cw = de.clientWidth, over = Math.max(dsw, isFinite(bsw) ? bsw : 0) - cw;
      out.push("overflow: html SW " + px(dsw) + " body SW " + px(bsw) + " client " + px(cw) + " scrollX " + px(window.scrollX) +
        " " + (over > 0 ? "OVERFLOW by " + px(over) : "ok"));
    } catch (e) { out.push("overflow: n/a"); }
    /* 7. ancestors of the header, parent up to html, with only the non-default values */
    try {
      if (!hdr) out.push("ancestors: n/a");
      else {
        var k = 0;
        for (var a = hdr.parentElement; a; a = a.parentElement) {
          k++;
          var cs = getComputedStyle(a), extra = "";
          if (cs.transform && cs.transform !== "none") extra += " transform=" + cs.transform;
          if (parseFloat(cs.marginLeft)) extra += " ml=" + px(parseFloat(cs.marginLeft));
          if (parseFloat(cs.marginRight)) extra += " mr=" + px(parseFloat(cs.marginRight));
          if (parseFloat(cs.paddingLeft)) extra += " pl=" + px(parseFloat(cs.paddingLeft));
          if (parseFloat(cs.paddingRight)) extra += " pr=" + px(parseFloat(cs.paddingRight));
          if (cs.position && cs.position !== "static") extra += " pos=" + cs.position;
          if (cs.overflowX && cs.overflowX !== "visible") extra += " ox=" + cs.overflowX;
          out.push("anc" + k + ": " + describe(a) + " " + box(a) + extra);
          if (a === document.documentElement) break;
        }
      }
    } catch (e) { out.push("ancestors: n/a"); }
    /* 8. widest elements: rescanned about 4 times per second, shown from the last scan in between */
    if (!scanText || nowMs - lastScan >= 250) {
      lastScan = nowMs;
      try {
        var all = document.body ? document.body.getElementsByTagName("*") : [], vw = de.clientWidth;
        var wide = null, wideW = -1, pastR = null, pastRv = 0, pastL = null, pastLv = 0;
        for (var i = 0; i < all.length; i++) {
          var el = all[i];
          if (mine(el)) continue;
          var r = el.getBoundingClientRect();
          if (!(r.width > 0 && r.height > 0)) continue;
          if (r.width > wideW) { wideW = r.width; wide = el; }
          if (r.right - vw > pastRv) { pastRv = r.right - vw; pastR = el; }
          if (-r.left > pastLv) { pastLv = -r.left; pastL = el; }
        }
        scanText = "widest: " + (wide ? describe(wide) + " " + box(wide) : "none") +
          "\npast right: " + (pastR ? describe(pastR) + " " + box(pastR) : "none") +
          "\npast left: " + (pastL ? describe(pastL) + " " + box(pastL) : "none");
      } catch (e) { scanText = "widest: n/a\npast right: n/a\npast left: n/a"; }
    }
    out.push(scanText);
    /* v4: header watermark (the faded logo on the home banner) - is the new crop loaded and applied? */
    try {
      var wst = document.getElementById("hg-wm-style");
      out.push("wm style: " + (wst ? (wst.textContent.indexOf("clip-path") >= 0 ? "has crop" : "OLD (no crop)") : "none"));
      var hr2 = document.getElementById("MultiVendorHeaderRoot");
      if (!hr2) out.push("wm: no header root");
      else {
        var pcs = getComputedStyle(hr2, "::before"), rcs = getComputedStyle(hr2);
        out.push("wm before: clip=" + (pcs.clipPath || pcs.webkitClipPath || "n/a") + " wclip=" + (pcs.webkitClipPath || "n/a") +
          " bottom=" + pcs.bottom + " h=" + pcs.height + " op=" + pcs.opacity + " content=" + pcs.content);
        out.push("hdr root: " + box(hr2) + " T " + px(hr2.getBoundingClientRect().top) + " B " + px(hr2.getBoundingClientRect().bottom) +
          " radius=" + rcs.borderRadius + " ox=" + rcs.overflowX + " pos=" + rcs.position + " z=" + rcs.zIndex);
      }
      var lc = document.getElementById("hg-launch");
      out.push("launch top: " + (lc ? px(lc.getBoundingClientRect().top) : "none"));
    } catch (e) { out.push("wm: n/a"); }
    /* v5: search keyboard closing while typing - who takes focus away, and when (times are seconds since the panel opened) */
    try {
      var fld = null;
      try { fld = document.querySelector("#MultiVendorSearch .mobile-search-input input"); } catch (e1) {}
      var root3 = document.getElementById("MultiVendorSearch");
      /* v8: page-address history (last 5 changes) and a log of each field/page replacement with the address at that moment */
      var urlNow = location.pathname + location.search + location.hash;
      try { urlNow = decodeURIComponent(urlNow); } catch (e3) {}
      if (urlNow !== kbLastUrl) { kbUrlLog.push(ts() + " " + urlNow); if (kbUrlLog.length > 5) kbUrlLog.shift(); kbPrevUrl = kbLastUrl; kbLastUrl = urlNow; }
      if (fld && lastField && fld !== lastField) { fieldReplaced++; kb.fieldRepAt = ts(); kbRepLog.push("field " + ts() + " at " + urlNow + (lastField.isConnected ? " (old still on page)" : " (old removed)")); if (kbRepLog.length > 4) kbRepLog.shift(); }
      if (fld) lastField = fld;
      if (root3 && lastRoot && root3 !== lastRoot) { rootReplaced++; kb.rootRepAt = ts(); kbRepLog.push("root " + ts() + " at " + urlNow + " (address before: " + (kbPrevUrl || "-") + ")"); if (kbRepLog.length > 4) kbRepLog.shift(); }
      if (root3) lastRoot = root3;
      out.push("kb focus now: " + describe(document.activeElement) + (fld && document.activeElement === fld ? " (= search field)" : ""));
      out.push("kb field: " + (fld ? (fieldReplaced ? "REPLACED x" + fieldReplaced : "same") : "missing" + (fieldReplaced ? " (REPLACED x" + fieldReplaced + ")" : "")) +
        " | root: " + (root3 ? (rootReplaced ? "REPLACED x" + rootReplaced : "same") : "missing" + (rootReplaced ? " (REPLACED x" + rootReplaced + ")" : "")));
      out.push("kb auto-search Enter: " + (kb.auto ? "t=" + kb.auto : "none yet"));
      out.push("kb last blur: " + (kb.blur || "none yet"));
      out.push("kb blur() call: " + (kb.blurCall || "none yet"));
      out.push("kb focus() call: " + (kb.focusCall || "none yet"));
      /* v6: what the Enter press does inside Hyperzod - page address change, when the field/page get replaced,
         and which Vue component owns the search field (its own function names), so the search can be started without Enter */
      out.push("kb url now: " + location.pathname + location.search + location.hash);
      out.push("kb url at Enter: " + (kb.urlBefore ? kb.urlBefore + " -> " + (kb.urlAfter || "(same so far)") : "none yet"));
      out.push("kb replaced at: field " + (kb.fieldRepAt || "-") + " | root " + (kb.rootRepAt || "-"));
      out.push("kb vue: " + vueInfo(fld));
      out.push("kb last typing: " + (kb.lastInput || "none yet"));
      out.push("kb address log: " + (kbUrlLog.length ? kbUrlLog.join(" | ") : "none"));
      out.push("kb replace log: " + (kbRepLog.length ? kbRepLog.join(" | ") : "none"));
    } catch (e) { out.push("kb: n/a"); }
    return out;
  }

  function tick(nowMs) {
    if (!shown || !panel) return;
    /* v7: the panel lives on <html>, outside the app, so page rebuilds do not touch it; if anything removes it anyway,
       it is put back on the next frame with all its readings and counters as they were */
    try { if (!panel.isConnected) document.documentElement.appendChild(panel); } catch (e0) {}
    try {
      var v = read(), s = "";
      for (var i = 0; i < LINES.length; i++) s += LINES[i] + ": " + v[i] + (i < LINES.length - 1 ? "\n" : "");
      try { s += "\n" + extraLines(typeof nowMs === "number" ? nowMs : Date.now()).join("\n"); } catch (e2) {}
      if (panel.textContent !== s) panel.textContent = s;
    } catch (e) {}
    rafId = requestAnimationFrame(tick);
  }

  /* v5 recorders: listen only, and the two wrappers call the original blur()/focus() unchanged, so nothing behaves differently.
     Installed when the panel opens, removed when it closes. */
  var lastField = null, fieldReplaced = 0, lastRoot = null, rootReplaced = 0, kb = {}, t0 = 0, kbOn = false, origBlur = null, origFocus = null;
  var kbUrlLog = [], kbRepLog = [], kbLastUrl = "", kbPrevUrl = ""; /* v8 */
  function onInput(e) { try { var t = e.target; if (t && t.closest && t.closest("#MultiVendorSearch .mobile-search-input")) kb.lastInput = ts() + ' "' + String(t.value || "").slice(0, 20) + '"'; } catch (x) {} }
  function ts() { return ((Date.now() - t0) / 1000).toFixed(2) + "s"; }
  function frames() {
    try {
      var st = String(new Error().stack || "").split("\n").slice(3, 6), out = [];
      for (var i = 0; i < st.length; i++) {
        var f = st[i].trim().replace(/^at\s+/, "").replace(/https?:\/\/[^\s)]*\/([^\/\s)]+)/g, "$1");
        if (f) out.push(f.slice(0, 70));
      }
      return out.join(" < ") || "no stack";
    } catch (e) { return "no stack"; }
  }
  function onKey(e) {
    try {
      if (e && e.key === "Enter" && e.hgAutoSearch && e.type === "keydown") {
        kb.auto = ts();
        var before = location.pathname + location.search + location.hash;
        kb.urlBefore = before; kb.urlAfter = "";
        setTimeout(function () { var a = location.pathname + location.search + location.hash; kb.urlAfter = a === before ? "(same after 0.6s)" : a; }, 600);
      }
    } catch (x) {}
  }
  /* v6: read-only look at the Vue component that owns the search field: its name, its own functions and data keys.
     Looked up at most once a second; nothing is called or changed. */
  var vueCache = "", vueAt = 0;
  function vueInfo(fld) {
    try {
      if (!fld) return "no field";
      if (Date.now() - vueAt < 1000 && vueCache) return vueCache;
      vueAt = Date.now();
      var app = document.getElementById("app"), va = app && app.__vue_app__, best = null, bestDepth = -1;
      var direct = fld.__vueParentComponent || null;
      if (!direct && va && va._instance) {
        var walk = function (vn, depth, n) {
          if (!vn || n.c++ > 6000) return;
          if (vn.component) {
            var c = vn.component, el = c.subTree && c.subTree.el;
            if (el && el.nodeType === 1 && el.contains(fld) && depth > bestDepth) { best = c; bestDepth = depth; }
            walk(c.subTree, depth + 1, n);
            return;
          }
          var ch = vn.children;
          if (Array.isArray(ch)) for (var i = 0; i < ch.length; i++) if (ch[i] && typeof ch[i] === "object") walk(ch[i], depth, n);
          if (vn.dynamicChildren && !Array.isArray(ch)) for (var j = 0; j < vn.dynamicChildren.length; j++) walk(vn.dynamicChildren[j], depth, n);
        };
        walk(va._instance.subTree, 0, { c: 0 });
      }
      var chain = [], c2 = direct || best, out = [];
      for (var k = 0; c2 && k < 6; k++, c2 = c2.parent) {
        var t = c2.type || {}, nm = t.name || t.__name || "anon";
        var fns = [];
        var ss = c2.setupState || {}, ks = [];
        try { ks = Object.keys(ss); } catch (e1) {}
        for (var q = 0; q < ks.length && fns.length < 14; q++) { try { if (typeof ss[ks[q]] === "function") fns.push(ks[q]); } catch (e2) {} }
        var ms = t.methods ? Object.keys(t.methods).slice(0, 14) : [];
        chain.push(nm + (fns.length ? " fn[" + fns.join(",") + "]" : "") + (ms.length ? " methods[" + ms.join(",") + "]" : ""));
      }
      vueCache = (direct ? "direct " : (best ? "found " : "not found ")) + (chain.join(" < ") || "-");
      return vueCache;
    } catch (e) { return "n/a"; }
  }
  function onFocusOut(e) {
    try {
      var t = e.target;
      if (!t || !t.closest || !t.closest("#MultiVendorSearch .mobile-search-input")) return;
      kb.blur = ts() + " " + e.type + " to " + (e.relatedTarget ? describe(e.relatedTarget) : "nothing") + (t.isConnected ? "" : " (field removed)");
    } catch (x) {}
  }
  function kbInstall() {
    if (kbOn) return;
    kbOn = true; t0 = Date.now(); kb = {}; lastField = null; fieldReplaced = 0; lastRoot = null; rootReplaced = 0;
    kbUrlLog = []; kbRepLog = []; kbLastUrl = ""; kbPrevUrl = "";
    document.addEventListener("input", onInput, { capture: true, passive: true });
    document.addEventListener("keydown", onKey, { capture: true, passive: true });
    document.addEventListener("focusout", onFocusOut, { capture: true, passive: true });
    try {
      origBlur = HTMLElement.prototype.blur; origFocus = HTMLElement.prototype.focus;
      HTMLElement.prototype.blur = function () {
        try { if (this.closest && this.closest("#MultiVendorSearch")) kb.blurCall = ts() + " on " + describe(this) + " during " + (window.event ? window.event.type : "no event") + " from " + frames(); } catch (x) {}
        return origBlur.apply(this, arguments);
      };
      HTMLElement.prototype.focus = function () {
        try { if (!(panel && panel.contains(this))) kb.focusCall = ts() + " on " + describe(this) + " from " + frames(); } catch (x) {}
        return origFocus.apply(this, arguments);
      };
    } catch (e) {}
  }
  function kbRemove() {
    if (!kbOn) return;
    kbOn = false;
    document.removeEventListener("keydown", onKey, { capture: true });
    document.removeEventListener("focusout", onFocusOut, { capture: true });
    document.removeEventListener("input", onInput, { capture: true });
    try { if (origBlur) HTMLElement.prototype.blur = origBlur; if (origFocus) HTMLElement.prototype.focus = origFocus; } catch (e) {}
  }

  function show() {
    if (!panel) {
      panel = document.createElement("pre");
      panel.id = "hg-temp-diag";
      panel.setAttribute("dir", "ltr");
      panel.setAttribute("aria-hidden", "true");
      /* below the header, above the keyboard, over everything, never touchable, never part of the layout.
         v3: smaller text, pinned 8px from both screen edges (left and right, no width of its own) so it can never be wider
         than the screen or add scroll width in Arabic or English; long class names wrap instead of being cut off. */
      panel.style.cssText = "position:fixed;top:140px;left:8px;right:8px;z-index:2147483647;margin:0;padding:6px 8px;border-radius:8px;" +
        "background:rgba(0,0,0,.72);color:#fff;font:9px/1.3 Menlo,Consolas,monospace;text-align:left;direction:ltr;unicode-bidi:isolate;" +
        "white-space:pre-wrap;overflow-wrap:anywhere;word-break:break-all;box-sizing:border-box;overflow:hidden;" +
        "pointer-events:none;user-select:none;-webkit-user-select:none;";
      document.documentElement.appendChild(panel);
    }
    shown = true;
    lastHdr = null; replaced = 0; /* v2: the replaced counter starts fresh each time the panel is shown */
    scanText = ""; lastScan = 0; /* v3: fresh scan each time the panel is shown */
    kbInstall(); /* v5 */
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tick);
  }

  function hide() {
    shown = false;
    kbRemove(); /* v5 */
    cancelAnimationFrame(rafId);
    if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
    panel = null;
  }

  window.__hgTempDiagToggle = function () { if (shown) hide(); else show(); };
})();
/* TEMP-DIAGNOSTIC-END */

/* TEMP-DIAGNOSTIC-START (hook at the search submit)
   Catches the return key in the search field before Hyperzod and our own search code see it. If the field holds the
   secret word, the panel is toggled, the field is cleared and the key press goes no further: no search, no results,
   nothing saved to recent searches, nothing sent anywhere. Any other text is untouched.
   v7: only the real Return key toggles the panel. The live search's own automatic Enter (450ms after typing stops)
   used to toggle it too, so the panel opened by itself and the real Return then closed it again. That automatic
   Enter is now just stopped (no search for the secret word, no toggle). The key-up that follows a stopped Enter is
   stopped as well, so Hyperzod does not run a search for the secret word afterwards. */
(function () {
  "use strict";
  var SECRET = "hgdiag", stopUpUntil = 0;
  function inField(t) { return !!(t && t.tagName === "INPUT" && t.closest && t.closest("#MultiVendorSearch .mobile-search-input")); }
  document.addEventListener("keydown", function (e) {
    try {
      if (!e || e.key !== "Enter") return;
      var t = e.target;
      if (!inField(t)) return;
      if (String(t.value || "").trim().toLowerCase() !== SECRET) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      stopUpUntil = Date.now() + 1000;
      if (e.hgAutoSearch) return; /* automatic Enter from the live search: stopped, no toggle */
      var set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
      set.call(t, "");
      if (window.__hgTempDiagToggle) window.__hgTempDiagToggle();
    } catch (err) {}
  }, true);
  document.addEventListener("keyup", function (e) {
    try {
      if (!e || e.key !== "Enter" || !inField(e.target)) return;
      if (Date.now() > stopUpUntil) return;
      stopUpUntil = 0;
      e.preventDefault();
      e.stopImmediatePropagation();
    } catch (err) {}
  }, true);
})();
/* TEMP-DIAGNOSTIC-END */

/* TEMP-ERUDA-START
   Temporary, hidden on-page DevTools (Eruda 3.4.3, loaded from https://cdn.jsdelivr.net/npm/eruda@3.4.3/eruda.js).
   Nothing here downloads, runs or shows unless the secret word is submitted in the search field (see the matching
   hook below). Remove this whole block and the hook block to delete the feature completely. This file loads only in
   the app, and the toggle also checks the existing html.hg-native-app flag, so the website can never run it. */
(function () {
  "use strict";
  var SRC = "https://cdn.jsdelivr.net/npm/eruda@3.4.3/eruda.js";
  var script = null, loading = false, visible = false;

  function isApp() { return document.documentElement.classList.contains("hg-native-app"); }

  function open() {
    try { window.eruda.init(); visible = true; } catch (e) { visible = false; }
  }
  function close() {
    try { if (window.eruda && window.eruda.destroy) window.eruda.destroy(); } catch (e) {}
    visible = false;
  }
  function load() {
    if (loading) return;
    loading = true;
    script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.onload = function () { loading = false; if (window.eruda) open(); };
    /* no connection or blocked: show nothing, keep the app as it was, allow a retry on the next submit */
    script.onerror = function () { loading = false; if (script && script.parentNode) script.parentNode.removeChild(script); script = null; };
    document.documentElement.appendChild(script);
  }

  window.__hgTempErudaToggle = function () {
    try {
      if (!isApp()) return;
      if (visible) { close(); return; }
      if (window.eruda && window.eruda.init) { open(); return; }
      load();
    } catch (e) {}
  };
})();
/* TEMP-ERUDA-END */

/* TEMP-ERUDA-START (hook at the search submit)
   Same pattern as the hgdiag hook: catches the return key in the search field before Hyperzod and our search code
   see it. If the field holds the secret word (any capitals, spaces around it ignored), Eruda is shown or hidden,
   the field is cleared and the key press goes no further: no search, no results, nothing saved to recent searches,
   nothing sent anywhere. Any other text is untouched. */
(function () {
  "use strict";
  var SECRET = "hgeruda";
  document.addEventListener("keydown", function (e) {
    try {
      if (!e || e.key !== "Enter") return;
      var t = e.target;
      if (!t || t.tagName !== "INPUT" || !t.closest || !t.closest("#MultiVendorSearch .mobile-search-input")) return;
      if (String(t.value || "").trim().toLowerCase() !== SECRET) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      var set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
      set.call(t, "");
      if (window.__hgTempErudaToggle) window.__hgTempErudaToggle();
    } catch (err) {}
  }, true);
})();
/* TEMP-ERUDA-END */
