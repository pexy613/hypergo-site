/* hg-version 2026-10-04-1829 */
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
  var LINES = ["hdr top", "vv offset", "vv height", "scrollY", "pinned"];

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
    return out;
  }

  function tick() {
    if (!shown || !panel) return;
    try {
      var v = read(), s = "";
      for (var i = 0; i < LINES.length; i++) s += LINES[i] + ": " + v[i] + (i < LINES.length - 1 ? "\n" : "");
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
      /* below the header, above the keyboard, over everything, never touchable, never part of the layout */
      panel.style.cssText = "position:fixed;top:170px;left:8px;z-index:2147483647;margin:0;padding:8px 10px;border-radius:8px;" +
        "background:rgba(0,0,0,.72);color:#fff;font:12px/1.5 Menlo,Consolas,monospace;text-align:left;direction:ltr;" +
        "white-space:pre;pointer-events:none;user-select:none;-webkit-user-select:none;";
      document.documentElement.appendChild(panel);
    }
    shown = true;
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
