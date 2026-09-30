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
