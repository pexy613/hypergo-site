/* hg-version 2026-10-25-1745 */
/* NATIVE APP FLAG: app-only rules in the Global files are scoped to html.hg-native-app (this file loads only in the app). */
(function () {
  try { document.documentElement.classList.add("hg-native-app"); } catch (e) {}
})();

/* NO WELCOME PAGE IN THE APP (2026-10-25): Hyperzod sends a first-time visitor (not signed in, no address saved) to its
   Welcome page (route "welcome", /en or /ar: the page-builder page with "Shop With HyperGo" / "Sell With HyperGo"). In the
   app we skip it and open Home instead. Home asks for the delivery address itself (Hyperzod opens its address panel when
   none is saved), and "home" is on Hyperzod's list of pages allowed without an address, so this cannot loop. The page is
   hidden while the app moves on, so it never flashes. The website keeps its Welcome page; ?via=admin (Hyperzod's page
   builder preview) is left alone. */
(function () {
  if (window.__hgNoWelcome) return;
  window.__hgNoWelcome = 1;
  try {
    var st = document.createElement("style");
    st.textContent = "html.hg-native-app #WelcomePage{display:none!important}";
    document.head.appendChild(st);
  } catch (e) {}
  var hooked = false;
  function isWelcome(to) { return !!to && to.name === "welcome" && !(to.query && to.query.via === "admin"); }
  function toHome(to) {
    var q = {};
    for (var k in to.query || {}) if (k !== "via") q[k] = to.query[k];
    return { name: "home", params: { lang: (to.params && to.params.lang) || "en" }, query: q, replace: true };
  }
  function hook() {
    var r;
    try { r = document.querySelector("#app").__vue_app__.config.globalProperties.$router; } catch (e) { r = null; }
    if (!r) return false;
    if (!hooked) {
      hooked = true;
      r.beforeEach(function (to) { if (isWelcome(to)) return toHome(to); });
    }
    var cur = r.currentRoute && r.currentRoute.value;
    if (isWelcome(cur)) r.replace(toHome(cur)).catch(function () {});
    return true;
  }
  if (!hook()) {
    var n = 0, t = setInterval(function () { if (hook() || ++n > 150) clearInterval(t); }, 100);
  }
})();

/* NEW APP HOME (2026-10-15): loads app-new.css and app-new.js, which draw the main page header and the new Home in the app.
   global-footer-1.js skips its own header and Home code in the app; every other screen, the Account page and the bottom nav
   stay as they are. */
(function () {
  /* run-once guard (2026-10-20): a second run of this file would add a second app-new.css link */
  if (window.__hgAFLoader) return;
  window.__hgAFLoader = 1;
  try {
    var BASE = "https://pexy613.github.io/hypergo-site/";
    /* GitHub Pages tells phones to keep these files for 10 minutes, so the app could keep showing an older copy after a
       push. A fresh "v" each minute makes the app ask for the newest app-new.css / app-new.js. */
    var V = "?v=" + Math.floor(Date.now() / 60000);
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = BASE + "app-new.css" + V;
    document.head.appendChild(l);
    var s = document.createElement("script");
    s.src = BASE + "app-new.js" + V;
    s.async = false;
    document.head.appendChild(s);
  } catch (e) {}
})();


/* SHARED HELPERS (2026-10-20): one copy, used by the status strip, the tab swipe and the edge swipe-back below
   (each block had its own copy before).
   - relevant(): false when a batch of page changes happened only inside our own drawn or temporary elements (NOISE),
     so they do not wake the strip. NOISE also lists the app-new.js screens.
   - isAr(): Arabic / right-to-left page.
   - tabOf(): "home" / "reorder" / "account" when one of the 3 main tabs is open, else "". Home also matches /en/home
     (the address app-new.js uses, same as its isHomePath). The Stores / Favourites page app-new.js opens over Home
     (html.hgn-page-open) is not a tab, so its back button can be swiped. */
(function () {
  if (window.__hgAF) return;
  var NOISE = ".hg-ph," +
    "#hgn-home,#hgn-page,#hgn-sres,#hgn-catpage,#hgn-sland,#hgn-stabs,#hgn-sfav,#hgn-shead,#hgn-sinfo,.hgn-acct-fav," +
    "#hg-search-discovery,#hg-search-cart,#hg-cart-btn";
  function relevant(recs) {
    if (!recs || !recs.length) return true;
    for (var i = 0; i < recs.length; i++) {
      var r = recs[i], t = r.target, el = t && (t.nodeType === 1 ? t : t.parentNode);
      if (el && el.nodeType === 1 && el.closest && el.closest(NOISE)) continue;
      if (r.type !== "childList" || r.removedNodes.length) return true;
      var a = r.addedNodes;
      for (var j = 0; j < a.length; j++) if (!(a[j].nodeType === 1 && a[j].matches && a[j].matches(NOISE))) return true;
    }
    return false;
  }
  function isAr() {
    var h = document.documentElement;
    return h.getAttribute("dir") === "rtl" || /^ar/i.test(h.getAttribute("lang") || "");
  }
  function tabOf() {
    var p = location.pathname, h = document.documentElement;
    if (/^\/(en|ar)\/profile\/orders\/?$/.test(p)) return h.classList.contains("hg-orders-acct") ? "" : "reorder";
    if (/^\/(en|ar)\/profile\/?$/.test(p)) return "account";
    if (/^\/((en|ar)(\/home)?\/?)?$/.test(p) && !h.classList.contains("hgn-page-open")) return "home";
    return "";
  }
  window.__hgAF = { relevant: relevant, isAr: isAr, tabOf: tabOf };
})();

(function () {
  /* run-once guard (2026-10-20) */
  if (window.__hgAFBg) return;
  window.__hgAFBg = 1;

  /* the purple is only written again when it is not already there (same colour, same 60ms wait as before). */
  let bgNorm = "";
  function setBg(el) {
    const st = el.style;
    if (bgNorm && st.getPropertyValue("background-color") === bgNorm && st.getPropertyPriority("background-color") === "important") return;
    st.setProperty("background-color", "#5A29DE", "important");
    bgNorm = st.getPropertyValue("background-color");
  }

  function applyAppBackground() {

    setBg(document.documentElement);

    setBg(document.body);

  }

  applyAppBackground();

  let bgTimer = null;

  /* (2026-10-20): watches only the style of <html> and <body>, the one thing that can undo the purple. Before, it woke on
     every element added or removed anywhere on the page, which can never change that style. */
  const bgMO = new MutationObserver(() => {

    clearTimeout(bgTimer);

    bgTimer = setTimeout(applyAppBackground, 60);

  });
  bgMO.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
  bgMO.observe(document.body, { attributes: true, attributeFilter: ["style"] });

})();

/* STATUS BAR STRIP: purple at the top of Home, fades to white as the header scrolls away.
   While the header is still passing underneath, the strip is see-through (so the header shows through as it turns white);
   the moment the header has scrolled past, it snaps to solid white so the clock stays readable over the page content.
   Reuses the app's own strip element (.native-status-bar-bg) - only its background colour is driven here. */
(function () {
  /* run-once guard (2026-10-20) */
  if (window.__hgAFStrip) return;
  window.__hgAFStrip = 1;
  const PURPLE = [134, 64, 252];   /* #8640FC */
  const WHITE = [255, 255, 255];
  const FADE = 56;                 /* px of scrolling over which the colour fades (starts on the first pixel, Talabat-style) */
  const A_HEADER = 0.55;           /* strip opacity (white) while the header is still underneath */
  const A_PAGE = 1;                /* strip opacity (white) once only page content is underneath */
  const SNAP = 12;                 /* px over which it goes from see-through to solid once the header has left the strip */
  let ticking = false;

  /* observer trim (2026-10-08): changes inside our own drawn and temporary elements do not schedule a re-measure
     (shared relevant() / NOISE list at the top of this file, 2026-10-20), and the strip's colour is only written when it
     actually differs from what is already set. */
  const relevant = window.__hgAF.relevant;
  const lastSet = {};
  function setIf(st, prop, val) {
    const l = lastSet[prop];
    if (l && l.raw === val && st.getPropertyValue(prop) === l.norm && st.getPropertyPriority(prop) === "important") return;
    st.setProperty(prop, val, "important");
    lastSet[prop] = { raw: val, norm: st.getPropertyValue(prop) };
  }
  function removeIf(st, prop) {
    if (st.getPropertyValue(prop)) st.removeProperty(prop);
  }

  function mix(t) {
    return PURPLE.map((p, i) => Math.round(WHITE[i] + (p - WHITE[i]) * t));
  }

  /* the store page is what sits under the strip right now (old screens can stay loaded hidden behind it).
     The address is checked first: when a store is opened from a category, the category page stays loaded until the
     store's items arrive, so the store page isn't on screen yet in the page itself, but the address already is the
     store's (/en/m/<store>/<id>, same pattern hgMerchantHref builds in global-footer-1.js). */
  /* (2026-10-20): the point test (elementFromPoint) and the strip height are measured only after page changes, not on
     every scroll frame. Scrolling does not change which screen sits under the strip; page changes do. */
  let needHit = true, hitStore = false, hitCat = false, stripH = 47, leaveT0 = 0;
  const SD = window.__hgStripDbg = { n: 0, t: 0, br: "-", hit: "-", y: 0, cat: "-", age: "-" }; /* TEMP-DIAGNOSTIC */ /* read-only readings for the hgstrip panel */
  /* what sits just under the strip: a store page, or our category page (#hgn-catpage) */
  function readHit() {
    if (!needHit) return;
    needHit = false;
    try {
      const y = Math.round(stripH + 4);
      const el = document.elementFromPoint(Math.round(window.innerWidth / 2), y);
      hitStore = !!(el && el.closest && el.closest(".scheme-merchant-page"));
      hitCat = !!(el && el.closest && el.closest("#hgn-catpage"));
      SD.hit = el ? ((el.id ? "#" + el.id : "") + "." + String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).slice(0, 24)) : "none"; SD.y = y; /* TEMP-DIAGNOSTIC */
    } catch (e) { hitStore = false; hitCat = false; }
  }
  function storeOnScreen(strip) {
    if (/^\/(en|ar)\/m\/[^/]+\/[^/]+\/?$/.test(location.pathname)) return true;
    readHit();
    return hitStore;
  }
  /* (2026-10-22) WHITE STRIP AFTER BACK TO HOME, cause found with the hgstrip panel (Nouf's recording): going back from a
     category page, html.hgn-cat-on stays on for about half a second (app-new.js keeps our category page while Hyperzod
     still shows the old page), but Home's purple header is already under the strip from about 0.2s. The strip followed
     the class, so it stayed off-white over Home's purple header (panel: /en/home, under .v-toolbar__content, html
     hgn-cat-on, strip rgb(255,252,249), until +558ms). Now, once the address is no longer a category page, the class
     only counts while our category page really is under the strip; this is checked every frame until the class goes
     (at most 2 seconds). */
  function catOnScreen(html) {
    if (!html.classList.contains("hgn-cat-on")) { leaveT0 = 0; return false; }
    if (/^\/(en|ar)\/m-category\//.test(location.pathname)) { leaveT0 = 0; return true; }
    const now = Date.now();
    if (!leaveT0) leaveT0 = now;
    needHit = true;
    readHit();
    if (now - leaveT0 < 2000) schedule();
    SD.cat = hitCat; SD.age = now - leaveT0; /* TEMP-DIAGNOSTIC */
    return hitCat;
  }

  function updateStrip() {
    ticking = false;
    SD.n++; SD.t = performance.now(); SD.br = "start"; /* TEMP-DIAGNOSTIC */
    const strip = document.querySelector(".native-status-bar-bg");
    if (!strip) return;
    if (needHit) stripH = strip.getBoundingClientRect().height || 47;
    const html = document.documentElement;
    /* STORE PAGE: the strip is see-through so the store banner shows behind the clock (design intent of the
       global-footer-1.js rule "cover sits under the phone status bar"). That rule is plain CSS, so any purple strip
       rule from a screen that is still loaded (category page #merchants_by_category, Search, Home header) beat it.
       Set here directly, so the store page always wins. Hyperzod's own scrolled "scrim" state is left alone. */
    if (storeOnScreen(strip)) {
      if (/scrim/.test(strip.className)) {
        removeIf(strip.style, "background-color");
        removeIf(strip.style, "transition");
      } else {
        setIf(strip.style, "transition", "none");
        setIf(strip.style, "background-color", "transparent");
      }
      SD.br = "store"; /* TEMP-DIAGNOSTIC */
      return;
    }
    const root = document.getElementById("MultiVendorHeaderRoot");
    const modal = document.querySelector(".v-overlay--active > .v-overlay__scrim");
    /* (2026-10-20): a pop-up / sheet with a scrim, or Hyperzod's own scrim state, is checked before Search. Before, the
       Search purple was written first as an inline !important, which beat the scrim and the product pop-up's
       transparent strip rule (global-footer-1.js) while a pop-up was open on Search. */
    if (modal || /scrim/.test(strip.className)) {
      removeIf(strip.style, "background-color");
      removeIf(strip.style, "transition");
      SD.br = "pop-up"; /* TEMP-DIAGNOSTIC */
      return;
    }
    /* Search has its own one-colour bar (page colour #FFFCF9 since 2026-10-20, was purple). Do not let the Home
       scroll-fade logic change its status strip. */
    /* (2026-10-21) our category page (html.hgn-cat-on) has an off-white header, so the strip is off-white too (was purple:
       Home's header, still loaded under it, made the strip purple). Same for our Stores near you / Favourites pages
       (html.hgn-page-open): their bar is off-white too, and they open over Home. */
    if (document.getElementById("MultiVendorSearch") || html.classList.contains("hg-search-page") || catOnScreen(html) || html.classList.contains("hgn-page-open")) {
      setIf(strip.style, "transition", "none");
      setIf(strip.style, "background-color", "rgb(255,252,249)");
      SD.br = "off-white"; /* TEMP-DIAGNOSTIC */
      return;
    }
    if (!root || html.classList.contains("native-status-bar-transparent")) {
      removeIf(strip.style, "background-color");
      removeIf(strip.style, "transition");
      SD.br = "no header"; /* TEMP-DIAGNOSTIC */
      return;
    }
    const box = root.getBoundingClientRect();
    /* how far the header has scrolled up (0 at rest) -> fade starts at the first pixel of scrolling */
    const scrolled = Math.max(0, -box.top);
    const t = 1 - Math.min(1, scrolled / FADE);
    /* 0 while the header still covers the strip area, 1 once it has left it */
    const sh = stripH;
    const gone = Math.min(1, Math.max(0, (sh + SNAP - box.bottom) / SNAP));
    const aWhite = A_HEADER + (A_PAGE - A_HEADER) * gone;
    const a = 1 - (1 - aWhite) * (1 - t);   /* opaque purple at rest, aWhite once fully faded */
    const c = mix(t);
    setIf(strip.style, "transition", "none");   /* follow the finger exactly, no lag */
    setIf(strip.style, "background-color", "rgba(" + c.join(",") + "," + a.toFixed(3) + ")");
    SD.br = "home"; /* TEMP-DIAGNOSTIC */
  }

  function schedule() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateStrip); }
  }

  /* (2026-10-20): sideways scrolls (Home banner sliding by itself every 4s, category rows) are skipped: only a change of
     scrollTop can move the header under the strip. The page itself (document) always counts. */
  const lastTop = new WeakMap();
  function onScroll(ev) {
    const t = ev.target;
    /* app-new.js's own sideways rows (window.__hgnSideways) are skipped without reading any size (2026-10-20) */
    if (t && t.nodeType === 1 && window.__hgnSideways && t.closest(window.__hgnSideways)) return;
    if (t && t.nodeType === 1) {
      const y = t.scrollTop;
      if (lastTop.get(t) === y) return;
      lastTop.set(t, y);
    }
    schedule();
  }

  document.addEventListener("scroll", onScroll, { capture: true, passive: true });
  new MutationObserver((recs) => { if (relevant(recs)) { needHit = true; schedule(); } }).observe(document.body, { childList: true, subtree: true });
  /* (2026-10-21) a page class on <html> (hgn-cat-on, hg-search-page...) can arrive after the page's own content, and our own
     drawn pages are left out of the observer above, so the strip also re-checks when those classes change */
  new MutationObserver(() => { needHit = true; schedule(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  schedule();
})();


/* TAB SWIPE (app): swipe left/right on Home, Reorder or Account to go to the next/previous bottom tab.
   A tab tap in Hyperzod is a click on the tab's own button in #MultiVendorBottomNav (global-footer-1.js tags each tab
   with data-hg-nav = home / reorder / account / cart). The swipe clicks that same button, so the tab highlight, the page
   and everything else behave exactly as after a tap. Order: Home, Reorder, Account. English: swipe left = next tab.
   Arabic (tabs run right to left): swipe right = next tab. Past the first or last tab nothing happens.
   Ignored: swipes starting within 24px of either screen edge (kept for going back), on any row that scrolls sideways,
   in a field / with the keyboard open, while a pop-up or sheet is open, and on any screen that is not one of the 3 tabs. */
(function () {
  /* run-once guard (2026-10-20) */
  if (window.__hgAFTabSwipe) return;
  window.__hgAFTabSwipe = 1;
  var ORDER = ["home", "reorder", "account"];
  var EDGE = 24, MIN_DX = 70, FAST_DX = 35, FAST_V = 0.45, LOCK = 10;
  var st = null;

  /* (2026-10-20): shared helpers (top of this file); Home now also matches /en/home */
  var isAr = window.__hgAF.isAr;
  function currentTab() {
    var k = window.__hgAF.tabOf();
    return k === "home" && !document.getElementById("MultiVendorHome") ? "" : k;
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
    if (!currentTab() || blocked(ev.target)) return;
    /* (2026-10-20): the sideways-row check (it reads sizes and styles of every parent) moved to the moment the swipe
       turns out to be horizontal, once per swipe, instead of on every touch */
    st = { x: t.clientX, y: t.clientY, t: Date.now(), dir: "", el: ev.target };
  }, { passive: true, capture: true });

  document.addEventListener("touchmove", function (ev) {
    if (!st) return;
    if (ev.touches.length !== 1) { st = null; return; }
    var t = ev.touches[0], dx = t.clientX - st.x, dy = t.clientY - st.y;
    if (!st.dir) {
      if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
      st.dir = Math.abs(dx) > Math.abs(dy) * 1.5 ? "h" : "v";
      if (st.dir === "v") st = null;   /* vertical scroll: leave it alone */
      else if (scrollsSideways(st.el)) st = null;   /* a row that scrolls sideways: leave it alone */
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
  /* run-once guard (2026-10-20) */
  if (window.__hgAFSwipeBack) return;
  window.__hgAFSwipeBack = 1;
  var EDGE = 24, MIN_DX = 90, FAST_DX = 45, FAST_V = 0.5, LOCK_MS = 900;
  var st = null, lockUntil = 0;

  var isAr = window.__hgAF.isAr;   /* (2026-10-20): shared helper, top of this file */
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
    /* (2026-10-20): app-new.js draws its own back buttons on Search, the category page and the Stores / Favourites page,
       and app-new.css hides Hyperzod's arrows there, so the swipe found nothing on those screens */
    var mine = document.querySelectorAll("#hgn-shead .hgn-shead-back, #hgn-catpage [data-act=back], #hgn-page .hgn-page-back");
    for (var k = 0; k < mine.length; k++) if (onScreen(mine[k])) return mine[k];
    var pre = document.querySelector("#MultiVendorSearch .mobile-search-input .v-field__prepend-inner");
    if (onScreen(pre)) return pre.querySelector("button, .v-icon, i") || pre;
    return storeBack();
  }
  /* (2026-10-20): shared tab test; Home also matches /en/home, and the Stores / Favourites page over Home is not a tab */
  function mainTab() { return !!window.__hgAF.tabOf(); }
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

/* TEMP-DIAGNOSTIC-START (2026-10-22): white top strip after going back to Home. Read-only: it changes nothing on the page.
   Switch on/off: type hgstrip in the search box. A dark box at the bottom then shows live numbers for the top strip and,
   below them, the last changes with the time since the last back press. Its box hangs on <html>, outside <body>, so the
   strip's own page watcher (body only) never sees it. Remove this whole block once the cause is found. */
(function () {
  if (window.__hgDiagStrip) return;
  window.__hgDiagStrip = 1;
  var FLAG = "hg-diag-strip", WORD = "hgstrip";
  var on = false, box = null, log = [], last = "", tBack = 0, iv = 0;
  function get() { try { return localStorage.getItem(FLAG) === "1"; } catch (e) { return false; } }
  function put(v) { try { if (v) localStorage.setItem(FLAG, "1"); else localStorage.removeItem(FLAG); } catch (e) {} }
  function r(n) { return Math.round(n); }
  function rect(el) { if (!el) return "none"; var b = el.getBoundingClientRect(); return "top " + r(b.top) + " bottom " + r(b.bottom) + " h " + r(b.height) + " " + getComputedStyle(el).display; }
  function read() {
    var html = document.documentElement, strip = document.querySelector(".native-status-bar-bg");
    var cs = strip ? getComputedStyle(strip) : null;
    var hv = getComputedStyle(html);
    var sh = strip ? strip.getBoundingClientRect().height || 47 : 47;
    var hit = document.elementFromPoint(Math.round(innerWidth / 2), Math.round(sh + 4));
    var root = document.getElementById("MultiVendorHeaderRoot"), mvs = document.getElementById("MultiVendorSearch");
    var cls = Array.prototype.filter.call(html.classList, function (c) { return /native|hgn-|hg-search|hg-acct|locked|hero|overlay/.test(c); }).join(" ");
    return {
      path: location.pathname.replace(/\/[0-9a-f]{24}/g, "/:id"),
      strip: cs ? cs.backgroundColor : "none",
      inl: strip ? (strip.style.backgroundColor || "-") : "-",
      scls: strip ? strip.className.replace("native-status-bar-bg", "").trim() || "-" : "-",
      srect: rect(strip),
      vh: hv.getPropertyValue("--native-status-bar-height").trim() || "-",
      fill: hv.getPropertyValue("--native-status-bar-fill").trim() || "-",
      cls: cls || "-",
      under: hit ? ((hit.id ? "#" + hit.id : "") + "." + String(hit.className && hit.className.baseVal !== undefined ? hit.className.baseVal : hit.className).slice(0, 40)) : "none",
      store: !!(hit && hit.closest && hit.closest(".scheme-merchant-page")),
      modal: !!document.querySelector(".v-overlay--active > .v-overlay__scrim"),
      mvs: mvs ? (mvs.getClientRects().length ? "shown" : "hidden") : "no",
      root: rect(root),
      home: document.getElementById("hgn-home") ? "yes" : "no",
      code: (function (q) { return q ? q.br + " #" + q.n + " " + r(performance.now() - q.t) + "ms ago, hit " + q.hit + " y" + q.y + ", cat " + q.cat + ", leave " + q.age : "none"; })(window.__hgStripDbg),
      codeKey: (function (q) { return q ? q.br + " hit " + q.hit + " cat " + q.cat : "none"; })(window.__hgStripDbg),
      scroll: r(window.scrollY) + " / " + (document.getElementById("MultiVendorHome") ? r(document.getElementById("MultiVendorHome").scrollTop) : "-")
    };
  }
  function tick() {
    var d = read();
    var key = d.path + " | strip " + d.strip + " (inline " + d.inl + ", class " + d.scls + ") | html " + d.cls + " | under " + d.under +
      " | search " + d.mvs + " | header " + d.root + " | home " + d.home + " | code " + d.codeKey;
    if (key !== last) {
      last = key;
      log.unshift((tBack ? "+" + r(performance.now() - tBack) + "ms " : "") + key); /* newest first */
      if (log.length > 8) log.pop();
    }
  }
  function draw() {
    if (!box) return;
    var d = read();
    box.textContent = "STRIP DIAGNOSTIC (type hgstrip again to hide)\n" +
      "page " + d.path + "   back pressed " + (tBack ? r((performance.now() - tBack) / 100) / 10 + "s ago" : "-") + "\n" +
      "strip colour " + d.strip + "   inline " + d.inl + "   class " + d.scls + "\n" +
      "strip box " + d.srect + "   --native-status-bar-height " + d.vh + "   --native-status-bar-fill " + d.fill + "\n" +
      "html " + d.cls + "\n" +
      "under strip " + d.under + "   store " + d.store + "   pop-up " + d.modal + "   search page " + d.mvs + "\n" +
      "home header " + d.root + "   our home " + d.home + "   scroll " + d.scroll + "\n" +
      "strip code: " + d.code + "\n" +
      "--- changes, newest first ---\n" + log.join("\n");
  }
  function show(v) {
    on = v;
    if (v && !box) {
      box = document.createElement("div");
      box.id = "hg-diag-strip";
      box.style.cssText = "position:fixed;left:6px;right:6px;bottom:calc(64px + env(safe-area-inset-bottom,0px));max-height:52vh;overflow:hidden;" +
        "z-index:2147483646;background:rgba(0,0,0,.86);color:#fff;font:10px/1.35 ui-monospace,Menlo,monospace;padding:6px 8px;border-radius:8px;" +
        "white-space:pre-wrap;word-break:break-all;pointer-events:none;direction:ltr;text-align:left;";
      document.documentElement.appendChild(box);
      iv = setInterval(function () { tick(); draw(); }, 16);
    } else if (!v && box) {
      clearInterval(iv); box.remove(); box = null; log = []; last = "";
    }
  }
  window.addEventListener("popstate", function () { tBack = performance.now(); });
  /* (2026-10-22-1655) the word is now found in more ways, because on the phone the plain input check did nothing:
     any key or typing event, the field that has focus (checked every half second), any search field, and the search
     word the live search puts in the page address (?q=hgstrip). Letters only and any case count ("Hg strip" too).
     Any of these switches it on. Only typing the word again in the focused field switches it off, so going back to a
     search page that still holds the word never hides it. Each switch waits until the word is gone before the next. */
  var armOn = true, armOff = false;
  function has(v) { return typeof v === "string" && v.toLowerCase().replace(/[^a-z]/g, "").indexOf(WORD) !== -1; }
  function typed() { var a = document.activeElement; return !!(a && has(a.value)); }
  function elsewhere() {
    var q = "";
    try { q = decodeURIComponent(location.search + " " + location.hash); } catch (e) { q = location.search; }
    if (has(q)) return true;
    var f = document.querySelectorAll("#MultiVendorSearch input, input[type=search]");
    for (var i = 0; i < f.length; i++) if (has(f[i].value)) return true;
    return false;
  }
  function check() {
    var t = typed(), any = t || elsewhere();
    if (!any) armOn = true;
    if (!t) armOff = true;
    if (!on && any && armOn) { armOn = false; armOff = !t; put(true); show(true); }
    else if (on && t && armOff) { armOff = false; armOn = false; put(false); show(false); }
  }
  ["input", "keyup", "change", "compositionend"].forEach(function (t) {
    document.addEventListener(t, function () { setTimeout(check, 0); }, true);
  });
  setInterval(check, 500);
  if (get()) { show(true); armOff = !typed(); }
})();
/* TEMP-DIAGNOSTIC-END */
