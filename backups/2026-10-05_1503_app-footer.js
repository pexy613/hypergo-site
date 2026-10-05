/* hg-version 2026-10-05-1437 */
/* NATIVE APP FLAG: app-only rules in the Global files are scoped to html.hg-native-app (this file loads only in the app). */
(function () {
  try { document.documentElement.classList.add("hg-native-app"); } catch (e) {}
})();

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

  function updateStrip() {
    ticking = false;
    const strip = document.querySelector(".native-status-bar-bg");
    if (!strip) return;
    const html = document.documentElement;
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
    return out;
  }

  function tick(nowMs) {
    if (!shown || !panel) return;
    try {
      var v = read(), s = "";
      for (var i = 0; i < LINES.length; i++) s += LINES[i] + ": " + v[i] + (i < LINES.length - 1 ? "\n" : "");
      try { s += "\n" + extraLines(typeof nowMs === "number" ? nowMs : Date.now()).join("\n"); } catch (e2) {}
      if (panel.textContent !== s) panel.textContent = s;
    } catch (e) {}
    rafId = requestAnimationFrame(tick);
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
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tick);
  }

  function hide() {
    shown = false;
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
   nothing saved to recent searches, nothing sent anywhere. Any other text is untouched. */
(function () {
  "use strict";
  var SECRET = "hgdiag";
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
      if (window.__hgTempDiagToggle) window.__hgTempDiagToggle();
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
