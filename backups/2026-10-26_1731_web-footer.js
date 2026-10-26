/* hg-version 2026-10-25-1757 */
/* NEW DESIGN ON THE WEBSITE (2026-10-20): loads app-new.css and app-new.js, the same new design as the app (Home, Search,
   category pages, store pages, Stores near you), on phones and desktop. The app loads the same two files from app-footer.js.
   html.hg-new-app is set right away, so global-footer-1.js stops drawing the old phone header and Home and the loading
   veil below waits for the new Home. A fresh "v" each minute asks GitHub Pages for the newest copy, so pushes show within
   a minute (same as the app). */
(function () {
  try {
    if (window.__hgWebNewDesign) return;
    window.__hgWebNewDesign = 1;
    document.documentElement.classList.add("hg-new-app");
    var BASE = "https://pexy613.github.io/hypergo-site/";
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

(() => {
  "use strict";
  /* (2026-10-20): run-once guard, like the other blocks in this file */
  if (window.__hgWebTranslate) return;
  window.__hgWebTranslate = true;

  const AR = new Map([
    ["Everything Bahrain Loves, All in One Place", "كل اللي تحبه في البحرين، في مكان واحد."],
    ["Everything Bahrain Loves, All in One Place.", "كل اللي تحبه في البحرين، في مكان واحد."],
    [
      "Discover great products from local stores, enjoy more choice, and get your order delivered anywhere in Bahrain.",
      "اكتشف منتجات من محلات في كل أنحاء البحرين، واستمتع بخيارات أكثر وتوصيل لطلبك في جميع أنحاء البحرين."
    ],
    ["Become a Vendor", "ابدأ البيع معنا"],
    ["Browse Categories", "تصفح الأقسام"],

    ["Food", "مطاعم"],
    ["Retail", "تسوق"],
    ["Retail Trade", "تسوق"],
    ["Flowers", "ورد"],
    ["Beauty", "تجميل"],
    ["Electronics", "إلكترونيات"],
    ["Perfumes", "عطور"],
    ["Fashion", "أزياء"],
    ["Pharmacy", "صيدليات"],
    ["Pharmacies", "صيدليات"],
    ["Nutrition", "تغذية"],
    ["Pets", "حيوانات أليفة"],
    ["Grocery", "سوبرماركت"],
    ["Groceries", "سوبرماركت"],
    ["Supermarket", "سوبرماركت"],
    ["Supermarkets", "سوبرماركت"],
    ["Home Goods", "مستلزمات المنزل"],
    ["Home", "مستلزمات المنزل"],
    ["Sports", "رياضة"],
    ["Toys", "ألعاب"],
    ["Gift Shop", "هدايا"],
    ["Gifts", "هدايا"],
    ["Baby Care", "مستلزمات الأطفال"],
    ["Party Stores", "حفلات وبالونات"],
    ["Balloons/Party Stores", "حفلات وبالونات"],
    ["Party", "حفلات وبالونات"]
  ]);

  /* (2026-10-20): "Home" is also an ordinary link label, so it is translated only inside the home category row and the
     home sections; elsewhere it was turning into "مستلزمات المنزل". The other words are translated everywhere, as before. */
  const SCOPED = new Set(["Home"]);
  const SCOPE_SEL = "#ProductCategories,#hg-cat-rows";

  /* (2026-10-20): the category-image marking (CATEGORY_ALIASES, findCategorySection, closestCategoryCard,
     markCategoryImages) is removed. It ran on every page change, scanning every element's text on pages without
     #ProductCategories, and its data-hg-category-* marks were read by no CSS or JS. The category photos block at the end
     of this file matches the tiles by their alt text. */

  const originals = new Map();

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }
  /* (2026-10-20): shared with the category photos block below, which writes its Arabic label directly */
  window.__hgWebAr = (text) => AR.get(normalize(text)) || null;

  function isArabic() {
    return (document.documentElement.lang || "").toLowerCase().startsWith("ar");
  }

  function blocked(node) {
    const el = node?.parentElement;
    if (!el) return true;

    return Boolean(
      el.closest(
        "script,style,noscript,svg,canvas,iframe,input,textarea,select,option,code,pre,[contenteditable='true']"
      )
    );
  }

  /* =========================================================
     TEXT TRANSLATION
     ========================================================= */

  function translateNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || blocked(node)) return;

    const current=node.nodeValue||"", saved=originals.get(node);
    // Vue can reuse a text node for a different label. Never restore a stale translation over new content.
    if(saved!=null&&normalize(current)!==normalize(saved)&&normalize(current)!==AR.get(normalize(saved)))originals.delete(node);
    const originalRaw = originals.get(node) ?? current;
    const originalText = normalize(originalRaw);
    if (!originalText) return;

    const translation = AR.get(originalText);
    if (!translation) return;
    if (SCOPED.has(originalText) && !(node.parentElement && node.parentElement.closest(SCOPE_SEL))) return;

    if (!originals.has(node)) originals.set(node, node.nodeValue);

    const leading = originalRaw.match(/^\s*/)?.[0] || "";
    const trailing = originalRaw.match(/\s*$/)?.[0] || "";

    const next=leading + translation + trailing;
    if(node.nodeValue!==next)node.nodeValue=next;
  }

  function translateTree(root) {
    if (!root || !isArabic()) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translateNode(walker.currentNode);
  }

  function restoreEnglish() {
    for (const [node, value] of originals.entries()) {
      if (!node.isConnected) {
        originals.delete(node);
        continue;
      }
      if(normalize(node.nodeValue)===AR.get(normalize(value))&&node.nodeValue!==value)node.nodeValue=value;
      originals.delete(node);
    }
  }

  /* =========================================================
     SYNC
     ========================================================= */

  function cleanup() {
    for (const node of originals.keys()) if (!node.isConnected) originals.delete(node);
  }

  function fullSync() {
    cleanup();
    if (isArabic()) translateTree(document.body);
    else restoreEnglish();
  }

  /* (2026-10-20): a page change no longer walks the whole page. Only the nodes the change added, or the text it changed,
     are translated; the whole page is walked at start and when the language (lang/dir) changes. */
  const pending = new Set();
  let fullPending = false;
  let scheduled = false;

  function flush() {
    scheduled = false;
    const all = fullPending, nodes = Array.from(pending);
    fullPending = false;
    pending.clear();
    if (all) { fullSync(); return; }
    cleanup();
    if (!isArabic()) { restoreEnglish(); return; }
    for (const n of nodes) {
      if (!n.isConnected) continue;
      if (n.nodeType === Node.TEXT_NODE) translateNode(n);
      else if (n.nodeType === Node.ELEMENT_NODE) translateTree(n);
    }
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(flush);
  }

  function start() {
    fullSync();

    new MutationObserver(() => { fullPending = true; scheduleSync(); }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"]
    });

    new MutationObserver((recs) => {
      for (const r of recs) {
        if (r.type === "characterData") pending.add(r.target);
        else for (const n of r.addedNodes) pending.add(n);
      }
      scheduleSync();
    }).observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();

/* HOME CATEGORY ROW: scroll buttons (website only, desktop widths >= 960px).
   The row (.hg-cat-icon-grid, set up in global-footer-1.js) is a swipe/trackpad scroller; mouse-only users had no way
   to move it. Adds one button at the left end and one at the right end. Buttons are placed and scroll PHYSICALLY
   (left button always moves the row left, right button right), so they stay correct in Arabic/RTL too.
   Buttons are hidden on mobile widths and when the row doesn't overflow; a button dims when that end is reached.
   The Vue-owned row itself is never moved or rewrapped - buttons are added next to it and re-added if Vue re-renders. */
(() => {
  "use strict";
  if (window.__hgCatNav) return;
  window.__hgCatNav = true;

  const STYLE_ID = "hg-catnav-style";
  const CHEV_L = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEV_R = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function addStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const st = document.createElement("style");
    st.id = STYLE_ID;
    /* matches the "More stores near you" arrows: 36px circle, 1px Opus border, Satin Deep Black chevron.
       left/right are physical on purpose (see note above). */
    st.textContent =
      ".hg-catnav-host{position:relative !important;}" +
      ".hg-catnav-btn{display:none;position:absolute;z-index:5;width:36px;height:36px;margin-top:-18px;padding:0;align-items:center;justify-content:center;border-radius:50%;border:1px solid #CCCBE3;background:#F7F7FB;color:#1B2023;box-shadow:0 2px 8px rgba(27,32,35,.12);cursor:pointer;transition:opacity .15s ease,border-color .15s ease;}" +
      ".hg-catnav-btn:hover{border-color:#1B2023;}" +
      ".hg-catnav-btn[data-dir='left']{left:-6px;}" +
      ".hg-catnav-btn[data-dir='right']{right:-6px;}" +
      ".hg-catnav-btn.is-end{opacity:.35;cursor:default;}" +
      ".hg-catnav-btn.is-end:hover{border-color:#CCCBE3;}" +
      "@media (min-width:960px){.hg-catnav-host.hg-catnav-on>.hg-catnav-btn{display:flex;}}";
    document.head.appendChild(st);
  }

  function edges(grid) {
    const max = grid.scrollWidth - grid.clientWidth;
    const sl = grid.scrollLeft;
    const rtl = getComputedStyle(grid).direction === "rtl";
    /* Chrome/Safari/Firefox: RTL scrollLeft runs 0 .. -max */
    const fromLeft = rtl ? sl + max : sl;
    return { max: max, atLeft: fromLeft <= 1, atRight: fromLeft >= max - 1 };
  }

  function update(grid) {
    const host = grid.parentElement;
    if (!host) return;
    /* (2026-10-20): the buttons only show at 960px and up, so below that nothing is measured (no forced layout on phones
       on every page change). Crossing 960px fires resize, which runs this again. Values are written only when they change. */
    if (!window.matchMedia("(min-width:960px)").matches) return;
    const btns = host.querySelectorAll(":scope > .hg-catnav-btn");
    if (btns.length !== 2) return;
    const e = edges(grid);
    host.classList.toggle("hg-catnav-on", e.max > 2);
    const top = (grid.offsetTop + grid.offsetHeight / 2) + "px";
    btns.forEach((b) => {
      if (b.style.top !== top) b.style.top = top;
      const end = b.dataset.dir === "left" ? e.atLeft : e.atRight;
      b.classList.toggle("is-end", end);
      const aria = end ? "true" : "false";
      if (b.getAttribute("aria-disabled") !== aria) b.setAttribute("aria-disabled", aria);
    });
  }

  function makeBtn(dir, grid) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "hg-catnav-btn";
    b.dataset.dir = dir;
    b.setAttribute("aria-label", dir === "left" ? "Scroll categories left" : "Scroll categories right");
    b.innerHTML = dir === "left" ? CHEV_L : CHEV_R;
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const step = Math.max(120, grid.clientWidth * 0.8);
      grid.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
    });
    return b;
  }

  function attach() {
    const grid = document.querySelector("#ProductCategories .hg-cat-icon-grid") || document.querySelector(".hg-cat-icon-grid");
    if (!grid || !grid.parentElement) return;
    addStyle();
    const host = grid.parentElement;
    host.classList.add("hg-catnav-host");
    if (host.querySelectorAll(":scope > .hg-catnav-btn").length !== 2) {
      host.querySelectorAll(":scope > .hg-catnav-btn").forEach((b) => b.remove());
      host.appendChild(makeBtn("left", grid));
      host.appendChild(makeBtn("right", grid));
    }
    if (!grid.__hgCatNavBound) {
      grid.__hgCatNavBound = true;
      grid.addEventListener("scroll", () => update(grid), { passive: true });
    }
    update(grid);
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      try { attach(); } catch (e) { /* never break the page */ }
    });
  }

  function start() {
    schedule();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", schedule, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();

/* HOME "BRANDS NEAR YOU": tiles fill the full section width (website only).
   The section is generated by global-footer-1.js (#hg-cat-rows .hg-brand-grid). Its desktop layout used fixed 86px tiles,
   so 7 columns only covered the left part of the section. Here the same grid gets fluid columns instead:
   desktop 7 per row (same 2-row, column-by-column placement as before, so the brands keep their exact positions),
   tablet 5 per row, phone 4 per row (reading order = the existing brand order). Tiles stay square, logos scale with
   the tile and are fully contained (never stretched or cropped), names scale up slightly.
   Tile style (radius, light border), title, subtitle and brand order are not touched. */
(() => {
  "use strict";
  if (window.__hgBrandsFill) return;
  window.__hgBrandsFill = true;

  const STYLE_ID = "hg-brands-fill-style";
  const S = "#hg-cat-rows .hg-sec ";

  function addStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent =
      /* phone: 4 per row, wrapping grid (was a 2-row sideways scroller) */
      S + ".hg-brand-grid{grid-auto-flow:row;grid-template-rows:none;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-columns:auto;gap:16px 12px;overflow:visible;scroll-snap-type:none;}" +
      S + ".hg-brand{width:auto;min-width:0;}" +
      S + ".hg-brand-img{width:100%;height:auto;aspect-ratio:1/1;}" +
      /* !important only to beat global-footer.css ("calc(100% + 6px) auto !important"), which crops tall logos */
      "html body " + S + ".hg-brand-img{background-size:contain !important;background-position:center !important;background-repeat:no-repeat !important;}" +
      S + ".hg-brand-name{font-size:11.5px;margin-top:7px;}" +
      /* tablet: 5 per row */
      "@media (min-width:600px){" + S + ".hg-brand-grid{grid-template-columns:repeat(5,minmax(0,1fr));gap:18px 16px;}" + S + ".hg-brand-name{font-size:12.5px;}}" +
      /* desktop: 7 per row, 2 rows filled column by column exactly like before */
      "@media (min-width:960px){" + S + ".hg-brand-grid{grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-template-columns:repeat(7,minmax(0,1fr));gap:22px 20px;}" + S + ".hg-brand-name{font-size:13.5px;margin-top:9px;}}";
    document.head.appendChild(st);
  }

  function start() {
    try { addStyle(); } catch (e) { /* never break the page */ }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();

/* PAGE-LOAD VEIL: release (website only). The veil itself lives in web-head.css so it is on screen from the first paint.
   This lifts it once the page is really showing our design:
   - Hyperzod has rendered the page and its content has stopped arriving for a moment (the page settles),
   - global-footer.css has loaded and global-footer-1.js has run (its #hg-extra-style exists),
   - on the home page: the category row has been placed by our code (.hg-cat-icon-grid) and, when a delivery
     location is set, the new home sections (#hg-cat-rows) are built. With no location they are never built, so
     html.hg-native-nearby is set to let the default list show (see web-head.css).
   Hard cap: the veil is always lifted after 8s, so a slow or failed request never leaves visitors stuck.
   (v2: v1 only checked whether "Nearby Merchants" existed yet, so the veil lifted before the home sections had even
   been drawn; the default content then showed until our code replaced it.) */
(() => {
  "use strict";
  if (window.__hgWebVeil) return;
  window.__hgWebVeil = true;

  const root = document.documentElement;
  const CAP_MS = 8000;
  const NATIVE_CAP_MS = 12000;
  const QUIET_MS = 250;
  const started = Date.now();
  let lastChange = Date.now();
  let done = false;
  let mo = null;

  function isHomeRoute() {
    /* (2026-10-20): /en/home and /ar/home are the home page too (same test as app-new.js isHomePath) */
    return /^\/(en|ar)?(\/home)?\/?$/.test(location.pathname) || !!document.getElementById("MultiVendorHome");
  }

  function globalCssReady() {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter((l) => /global-footer\.css/.test(l.href || ""));
    if (!links.length) return !!document.getElementById("hg-extra-style");
    return links.every((l) => { try { return !!l.sheet; } catch (e) { return true; } });
  }

  function pageRendered() {
    return !!document.querySelector('#app [id^="MultiVendor"], #app [class*="scheme-"], #MainFooter');
  }

  /* true / false once the store knows; null while it doesn't yet */
  function hasLocation() {
    try {
      const app = document.querySelector("#app");
      const store = app && app.__vue_app__ && app.__vue_app__.config.globalProperties.$store;
      const u = store && store.state && store.state.Utils;
      if (!u) return null;
      const loc = u.selectedLocation && u.selectedLocation.location;
      return !!(loc && typeof loc.latitude === "number");
    } catch (e) { return null; }
  }

  function homeReady() {
    if (!isHomeRoute()) return true;
    if (!document.getElementById("MultiVendorHome")) return false;
    /* (2026-10-20) the new design: ready once its Home is drawn (the old category row and sections are not built any more) */
    if (root.classList.contains("hg-new-app")) return !!document.getElementById("hgn-home");
    const grid = document.querySelector('#ProductCategories [class*="tw-grid-cols-8"][class*="lg:tw-grid-cols-13"]');
    if (grid && !grid.classList.contains("hg-cat-icon-grid")) return false;
    if (document.getElementById("hg-cat-rows")) return true;
    const has = hasLocation();
    if (has === false) { root.classList.add("hg-native-nearby"); return !!document.getElementById("NearbyMerchants"); }
    return false;
  }

  function ready() {
    return pageRendered() && globalCssReady() && !!document.getElementById("hg-extra-style") &&
      homeReady() && Date.now() - lastChange >= QUIET_MS;
  }

  function release() {
    if (done) return;
    done = true;
    /* let the global restyle pass (60ms debounce) finish before fading */
    setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        root.classList.add("hg-web-ready");
        setTimeout(() => root.classList.add("hg-web-done"), 300);
      }));
    }, 120);
  }

  let queued = false;
  function check() {
    if (done || queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      try {
        if (ready() || Date.now() - started > CAP_MS) release();
      } catch (e) { release(); }
    });
  }

  function start() {
    mo = new MutationObserver((recs) => {
      for (const r of recs) { if (r.type === "childList" && r.target.closest && r.target.closest("#app")) { lastChange = Date.now(); break; } }
      check();
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener("load", check);
    setTimeout(release, CAP_MS);
    /* stylesheets finishing and quiet periods don't mutate the DOM - keep re-checking */
    const iv = setInterval(() => {
      if (done) {
        /* (2026-10-20) the new design draws its own Home: nothing to watch after the veil */
        if (root.classList.contains("hg-new-app")) { clearInterval(iv); if (mo) mo.disconnect(); return; }
        /* after the veil: if the new home sections still aren't there, stop holding the default list back */
        if (Date.now() - started > NATIVE_CAP_MS || document.getElementById("hg-cat-rows")) {
          if (!document.getElementById("hg-cat-rows") && isHomeRoute()) root.classList.add("hg-native-nearby");
          clearInterval(iv);
          if (mo) mo.disconnect();
        } else if (hasLocation() === false) {
          root.classList.add("hg-native-nearby");
        }
        return;
      }
      check();
    }, 100);
    check();
  }

  start();
})();

/* STORE SECTIONS — one look for every product section on every store page (website).
   Our grid rules only reached the three Hyperzod product layouts named in the code (Recommended Products,
   .scheme-merchant-product-grid-card and .product-horizontal-cards). Some stores also get a fourth layout - bordered
   cards in one sideways row, sometimes with arrows - which none of those rules reach, so it kept Hyperzod's own look.
   This finds product rows by what they hold instead of by class name: a product is the box around a product name
   (.product-name) that also holds its "+" button (.add-btn / .add-product-btn); a row is the element that holds two
   or more product names. The
   rows our rules already lay out as the grid (.product-horizontal-cards, the category grid .special-listing-inner>.tw-grid
   and Recommended Products) are left alone. Every other row is marked and laid out like the
   styled grid (5 per row on desktop, same gaps, no borders, no arrows, no sideways scrolling). Nothing is removed,
   moved or re-created, so the "+" button and opening a product work as before.
   Text (2026-10-05): our name/price rules are also tied to class names (Recommended, .cat-section, the card classes),
   so sections Hyperzod renders another way kept Hyperzod's own text (lighter grey, or bolder). Every product found on
   the store page - in every section, Recommended included - is now marked .hg-sp-txt and gets the one text style we
   use: name 16px / 400 / #1B2023 / 1.3, price 16px / 500 / #1B2023 (design-system 10a #7, #8).
   Fix (2026-10-05): a section with only one product made the "walk up until two products" step climb past its own
   section to the box holding ALL sections, which was then laid out as the 5-column grid (sections side by side, tiny
   products). A row may now never hold a section title: a heading that is not inside a product. If the walk reaches
   a title before it finds two products, that product is left alone. */
(() => {
  "use strict";
  /* (2026-10-20): run-once guard, like the other blocks in this file */
  if (window.__hgStoreSections) return;
  window.__hgStoreSections = true;
  function styledRow(row) {
    return row.matches(".product-horizontal-cards,.special-listing-inner>.tw-grid") || !!row.closest(".scheme-product-recommendation-section,.product-horizontal-cards");
  }
  const CSS =
    /* the row: wrapping grid, same columns and gaps as the styled sections */
    ".scheme-merchant-page .hg-sp-row{display:grid !important;grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:28px 12px !important;align-items:start !important;" +
      "width:100% !important;max-width:none !important;margin:0 !important;padding:0 !important;overflow:visible !important;transform:none !important;flex-wrap:wrap !important;}" +
    "@media (min-width:600px){.scheme-merchant-page .hg-sp-row{grid-template-columns:repeat(3,minmax(0,1fr)) !important;gap:32px 20px !important;}}" +
    "@media (min-width:960px){.scheme-merchant-page .hg-sp-row{grid-template-columns:repeat(5,minmax(0,1fr)) !important;gap:40px 28px !important;}}" +
    /* wrappers between the section and the row that clipped it into one sideways line */
    ".scheme-merchant-page .hg-sp-clip{overflow:visible !important;transform:none !important;width:100% !important;max-width:none !important;}" +
    /* each product: no card, no border, no fixed slider width */
    ".scheme-merchant-page .hg-sp-cell{width:auto !important;min-width:0 !important;max-width:none !important;flex:none !important;margin:0 !important;padding:0 !important;" +
      "transform:none !important;height:auto !important;border:0 !important;border-radius:0 !important;background:transparent !important;box-shadow:none !important;}" +
    ".scheme-merchant-page .hg-sp-cell :is(.v-card,.v-card-text,div,a):not(.add-btn):not(.add-product-btn){border-color:transparent !important;box-shadow:none !important;}" +
    ".scheme-merchant-page .hg-sp-cell .v-card{background:transparent !important;}" +
    ".scheme-merchant-page .hg-sp-cell .v-card__underlay,.scheme-merchant-page .hg-sp-cell .v-card::before,.scheme-merchant-page .hg-sp-cell .v-card::after{display:none !important;}" +
    ".scheme-merchant-page .hg-sp-cell .v-card-text{padding:0 !important;}" +
    /* the picture: square, rounded, same grey backing as the styled sections, never stretched */
    ".scheme-merchant-page .hg-sp-img{position:relative !important;width:100% !important;height:auto !important;aspect-ratio:1/1 !important;margin:0 !important;border:0 !important;" +
      "border-radius:14px !important;background:#F5F5F5 !important;overflow:hidden !important;}" +
    ".scheme-merchant-page .hg-sp-img img{width:100% !important;height:100% !important;object-fit:cover !important;}" +
    ".scheme-merchant-page .hg-sp-img .v-responsive,.scheme-merchant-page .hg-sp-img .v-img{width:100% !important;height:100% !important;}" +
    ".scheme-merchant-page .hg-sp-img .v-responsive__sizer{padding-bottom:0 !important;}" +
    /* name and price: the values the styled sections use on desktop */
    ".scheme-merchant-page .hg-sp-cell .product-name{margin:10px 0 0 !important;color:#1B2023 !important;font-size:16px !important;font-weight:400 !important;line-height:1.3 !important;" +
      "min-height:41.6px !important;display:-webkit-box !important;-webkit-box-orient:vertical !important;-webkit-line-clamp:2 !important;overflow:hidden !important;overflow-wrap:anywhere !important;}" +
    ".scheme-merchant-page .hg-sp-cell .price{margin-top:10px !important;}" +
    ".scheme-merchant-page .hg-sp-cell .price,.scheme-merchant-page .hg-sp-cell .price *{font-size:16px !important;font-weight:500 !important;color:#1B2023 !important;}" +
    ".scheme-merchant-page .hg-sp-cell .product-description{display:none !important;}" +
    /* text for every product in every section; id + doubled classes only to beat the existing #app rules in global-footer.css (!important there too).
       2026-10-08: not for .product-card-horizontal / .scheme-merchant-product-grid-card - the STORE PRODUCT CARDS rules in global-footer.css
       style those on the website and in the app alike (this file runs on the website only). */
    "html body #app .scheme-merchant-page .hg-sp-txt.hg-sp-txt .product-name.product-name:not(:is(.product-card-horizontal,.scheme-merchant-product-grid-card) *){color:#1B2023 !important;font-size:16px !important;font-weight:400 !important;line-height:1.3 !important;}" +
    "html body #app .scheme-merchant-page .hg-sp-txt.hg-sp-txt .price.price:not(:is(.product-card-horizontal,.scheme-merchant-product-grid-card) *),html body #app .scheme-merchant-page .hg-sp-txt.hg-sp-txt .price.price:not(:is(.product-card-horizontal,.scheme-merchant-product-grid-card) *) *{color:#1B2023 !important;font-size:16px !important;font-weight:500 !important;}" +
    /* slider leftovers: copies a slider adds for endless scrolling, and the arrow buttons */
    ".scheme-merchant-page .hg-sp-row>.swiper-slide-duplicate,.scheme-merchant-page .hg-sp-arrow{display:none !important;}";

  function addStyle() {
    if (document.getElementById("hg-sp-style")) return;
    const st = document.createElement("style");
    st.id = "hg-sp-style";
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  /* (2026-10-20): during pass 2 the product count and the section-title test of each element are remembered, so
     products that share the same ancestors no longer repeat the same searches. Pass 2 only adds hg-sp-row/-cell/-img/
     -clip/-arrow classes, which neither test reads, so the answers cannot change during the pass. */
  let countMemo = null, titleMemo = null;
  function countProducts(el) {
    if (countMemo && countMemo.has(el)) return countMemo.get(el);
    const n = el.querySelectorAll(".product-name").length;
    if (countMemo) countMemo.set(el, n);
    return n;
  }

  /* the product a name belongs to: the closest element around the name that also holds the "+" button.
     (2026-10-24): a product holds exactly one name. A name whose own card has no "+" (Hyperzod hides it while a category is
     scheduled or unavailable) used to climb to a box holding other products' "+" buttons - sometimes the whole menu, which
     was then marked as one product and squeezed into the first grid column. The climb now stops at the first box that holds
     two or more names (a row or a whole menu, never a product): that name is left alone. */
  function productOf(name, page) {
    for (let el = name.parentElement; el && el !== page; el = el.parentElement) {
      if (countProducts(el) > 1) return null;
      if (el.querySelector(".add-btn,.add-product-btn")) return el;
    }
    return null;
  }

  function markImage(cell) {
    if (cell.querySelector(".hg-sp-img")) return;
    const img = cell.querySelector("img");
    if (!img) return;
    /* the outermost box around the picture that does not also hold the name or price */
    let frame = img.parentElement, best = null;
    for (let el = frame; el && el !== cell; el = el.parentElement) {
      if (el.querySelector(".product-name,.price")) break;
      best = el;
    }
    if (best) best.classList.add("hg-sp-img");
  }

  /* a section title: a heading that is not inside a product (product names and prices are headings too) */
  function hasTitle(el) {
    if (titleMemo && titleMemo.has(el)) return titleMemo.get(el);
    const v = Array.prototype.some.call(el.querySelectorAll("h1,h2,h3,h4"), (h) => !h.closest(".hg-sp-txt"));
    if (titleMemo) titleMemo.set(el, v);
    return v;
  }

  function apply() {
    const page = document.querySelector(".scheme-merchant-page");
    if (!page) return;
    addStyle();
    /* pass 1: mark every product, so headings inside products can be told apart from section titles */
    const found = [];
    page.querySelectorAll(".product-name").forEach((name) => {
      if (name.closest(".product-popup,.scheme-cart-panel,#cartItems,#cartItems2")) return;
      const prod = productOf(name, page);
      if (!prod) return;
      if (!prod.classList.contains("hg-sp-txt")) prod.classList.add("hg-sp-txt");
      found.push([name, prod]);
    });
    /* pass 2: lay out the rows */
    countMemo = new Map(); titleMemo = new Map();
    const doneRows = new Set();
    try { found.forEach(([name, prod]) => {
      if (name.closest(".hg-sp-cell") || name.closest(".scheme-product-recommendation-section")) return;
      /* walk up from the product until an element holds two or more products: that is the row; the step below it is the cell.
         Stop if the walk reaches a section title: the product's own section ends there, so it is never a row. */
      let cell = prod, row = prod.parentElement;
      while (row && row !== page && countProducts(row) < 2) {
        if (hasTitle(row)) return;
        cell = row; row = row.parentElement;
      }
      if (!row || row === page || hasTitle(row)) return;
      if (styledRow(row)) return;
      if (!row.classList.contains("hg-sp-row")) row.classList.add("hg-sp-row");
      if (!cell.classList.contains("hg-sp-cell")) cell.classList.add("hg-sp-cell");
      markImage(cell);
      /* (2026-10-20): the section, clipping and arrow work below depends only on the row: once per row per pass */
      if (doneRows.has(row)) return;
      doneRows.add(row);
      /* section = the closest ancestor of the row that also holds a section title */
      let section = row.parentElement;
      while (section && section !== page && !hasTitle(section)) section = section.parentElement;
      if (!section || section === page) return;
      /* undo the sideways clipping between the section and the row */
      for (let el = row.parentElement; el && el !== section; el = el.parentElement) {
        const cs = getComputedStyle(el);
        if ((cs.overflowX !== "visible" || cs.transform !== "none" || cs.display === "flex") && !el.classList.contains("hg-sp-clip")) el.classList.add("hg-sp-clip");
      }
      /* arrow buttons: buttons in the section that are outside every product and have no text */
      section.querySelectorAll("button").forEach((b) => {
        if (b.closest(".hg-sp-row") || b.classList.contains("hg-sp-arrow")) return;
        if (b.closest("#ProductCategoriesNav")) return;
        if ((b.textContent || "").trim()) return;
        if (!b.querySelector("svg,i,.v-icon")) return;
        b.classList.add("hg-sp-arrow");
      });
    }); } finally { countMemo = null; titleMemo = null; }
  }

  let queued = false;
  function queue() {
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; try { apply(); } catch (e) {} }, 120);
  }
  try {
    new MutationObserver((recs) => {
      for (const r of recs) {
        const t = r.target;
        if (t && t.nodeType === 1 && t.closest && t.closest(".hg-sp-cell")) continue;
        queue();
        return;
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
  queue();
})();

/* HOME CATEGORY PHOTOS (website, 2026-10-18): the category row uses our own cut-out product photos (the same ones as the
   app, stored in the repo's cat-photos folder) on a pink-lavender tile, with the category name under the tile.
   The tile is matched by the image's alt text (the category name Hyperzod puts there). A category not listed keeps
   Hyperzod's own image. Only the image address and our own classes/label are changed; the Vue-owned row is not moved. */
(() => {
  "use strict";
  if (window.__hgCatPhotos) return;
  window.__hgCatPhotos = true;

  const BASE = "https://pexy613.github.io/hypergo-site/cat-photos/";
  const BY_NAME = {
    "food": ["food", "Food"], "مطاعم": ["food", "Food"],
    "retail": ["retail-trade", "Retail Trade"], "retail trade": ["retail-trade", "Retail Trade"], "تسوق": ["retail-trade", "Retail Trade"],
    "flowers": ["flowers", "Flowers"], "ورد": ["flowers", "Flowers"],
    "beauty": ["beauty", "Beauty"], "تجميل": ["beauty", "Beauty"],
    "electronics": ["electronics", "Electronics"], "إلكترونيات": ["electronics", "Electronics"],
    "perfumes": ["perfumes", "Perfumes"], "عطور": ["perfumes", "Perfumes"],
    "fashion": ["fashion", "Fashion"], "أزياء": ["fashion", "Fashion"],
    "pharmacy": ["pharmacies", "Pharmacies"], "pharmacies": ["pharmacies", "Pharmacies"], "صيدليات": ["pharmacies", "Pharmacies"],
    "groceries": ["groceries", "Groceries"], "grocery": ["groceries", "Groceries"], "سوبرماركت": ["groceries", "Groceries"],
    "pets": ["pets", "Pets"], "حيوانات أليفة": ["pets", "Pets"],
    "nutrition": ["nutrition", "Nutrition"], "تغذية": ["nutrition", "Nutrition"],
    "party stores": ["party-stores", "Party Stores"], "party": ["party-stores", "Party Stores"], "حفلات وبالونات": ["party-stores", "Party Stores"],
    "baby care": ["baby-care", "Baby Care"], "مستلزمات الأطفال": ["baby-care", "Baby Care"],
    "gifts": ["gifts", "Gifts"], "gift shop": ["gifts", "Gifts"], "هدايا": ["gifts", "Gifts"],
    "toys": ["toys", "Toys"], "ألعاب": ["toys", "Toys"],
    "sports": ["sports", "Sports"], "رياضة": ["sports", "Sports"],
    "home goods": ["home-goods", "Home Goods"], "home": ["home-goods", "Home Goods"], "مستلزمات المنزل": ["home-goods", "Home Goods"]
  };
  const STYLE_ID = "hg-catph-style";
  function isAr() { return (document.documentElement.lang || "").toLowerCase().startsWith("ar"); }
  function addStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent =
      "html body #ProductCategories .hg-cat-icon-grid>.hg-catph{background:transparent !important;border:0 !important;box-shadow:none !important;padding:0 !important;}" +
      "html body #ProductCategories .hg-cat-icon-grid>.hg-catph:active{transform:scale(.97);}" +
      "html body #ProductCategories .hg-catph .hg-catph-box{position:relative;display:flex !important;align-items:center;justify-content:center;background:#DFC4F3 !important;border-radius:14px !important;}" +
      "html body #ProductCategories .hg-catph .hg-catph-box::after{content:'';position:absolute;inset-inline:22%;bottom:9%;height:8%;border-radius:50%;background:rgba(52,26,118,.28);filter:blur(4px);}" +
      "html body #ProductCategories .hg-catph img{position:relative;z-index:1;width:60% !important;height:60% !important;margin-top:-4%;object-fit:contain !important;border-radius:0 !important;background:none !important;}" +
      "html body #ProductCategories .hg-catph .hg-catph-name{display:block;width:100%;margin-top:6px;font-size:12px;line-height:1.3;font-weight:550;color:#1B2023;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}";
    document.head.appendChild(st);
  }
  function apply() {
    const imgs = document.querySelectorAll("#ProductCategories .hg-cat-icon-grid img");
    if (!imgs.length) return;
    addStyle();
    imgs.forEach((img) => {
      const hit = BY_NAME[String(img.getAttribute("alt") || "").replace(/\s+/g, " ").trim().toLowerCase()];
      if (!hit) return;
      const url = BASE + hit[0] + ".webp";
      if (img.getAttribute("src") !== url) img.setAttribute("src", url);
      const box = img.parentElement;
      if (box && !box.classList.contains("hg-catph-box")) box.classList.add("hg-catph-box");
      const card = img.closest(".hg-cat-icon-grid>*");
      if (!card) return;
      if (!card.classList.contains("hg-catph")) card.classList.add("hg-catph");
      let name = card.querySelector(":scope>.hg-catph-name");
      if (!name) {
        name = document.createElement("span");
        name.className = "hg-catph-name";
        card.appendChild(name);
      }
      /* (2026-10-20): in Arabic the label is written in Arabic right away (same words the translation block used), instead of
         English first and translated a frame later */
      const label = (isAr() && typeof window.__hgWebAr === "function" && window.__hgWebAr(hit[1])) || hit[1];
      if (name.getAttribute("data-en") !== hit[1] || name.textContent !== label) { name.setAttribute("data-en", hit[1]); name.textContent = label; }
    });
  }
  let queued = false;
  function queue() {
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; try { apply(); } catch (e) {} }, 120);
  }
  try {
    new MutationObserver((recs) => {
      for (const r of recs) {
        const t = r.target;
        if (t && t.nodeType === 1 && t.closest && t.closest(".hg-catph-name")) continue;
        queue();
        return;
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
    /* (2026-10-20): the label's language follows a language switch */
    new MutationObserver(queue).observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "dir"] });
  } catch (e) {}
  queue();
})();

/* STORE SEARCH IN PLACE (website, 2026-10-24): the search bar in the store's top bar (#MerchantStickyHeader, shown on
   desktop store pages once you scroll) searches inside the store page itself.
   Hyperzod puts an invisible click layer over that bar that opens its separate store search screen ("merchant-search").
   That layer is made click-through, so a click goes straight into Hyperzod's own field. While text is in the field, the
   store page shows only the products whose name holds every word typed (capitals, Arabic alef/ya/ta marbuta forms and
   accents are ignored); categories with no match and Recommended Products are hidden, the menu is scrolled into view, and
   a line says when nothing matches. Clearing the field shows the whole store again. Nothing is removed or moved: the
   products are only hidden, so the "+" button and opening a product work as before. */
(() => {
  "use strict";
  if (window.__hgStoreSearch) return;
  window.__hgStoreSearch = true;
  const CSS =
    "#MerchantStickyHeader .tw-w-full.tw-relative>.tw-absolute.tw-cursor-pointer{pointer-events:none !important;}" +
    ".scheme-merchant-page .hg-ss-hide{display:none !important;}" +
    ".scheme-merchant-page.hg-ss-on .page-builder-section-surface:has(.scheme-product-recommendation-section){display:none !important;}" +
    /* the top bar shows only while the page is scrolled down to the menu (Hyperzod's #anchor): while searching the page
       stays tall enough to stay there, and the gap under #anchor keeps the results clear of the top bar and the tabs */
    ".scheme-merchant-page.hg-ss-on #merchant-content{min-height:100vh;}" +
    ".scheme-merchant-page.hg-ss-on #anchor{height:var(--hg-ss-gap,150px);}" +
    /* the count next to a category name is the whole category, not the matches: hidden while searching */
    "html.hg-new-app.hgn-store body :is(#app,.v-overlay-container) .scheme-merchant-page.merchant-page.hg-ss-on .cat-section .category-name[data-hgn-count]::after{display:none !important;}" +
    "#hg-ss-empty{padding:48px 16px;text-align:center;color:#1B2023;font-size:16px;font-weight:600;line-height:1.4;}";
  function addStyle() {
    if (document.getElementById("hg-ss-style")) return;
    const st = document.createElement("style");
    st.id = "hg-ss-style";
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }
  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFKD")
      .replace(/[\u0300-\u036f\u064b-\u065f\u0670\u0640]/g, "")
      .replace(/[\u0622\u0623\u0625\u0671]/g, "\u0627").replace(/\u0649/g, "\u064a").replace(/\u0629/g, "\u0647")
      .replace(/\s+/g, " ").trim();
  }
  function field() { return document.getElementById("headerSearchProducts"); }
  let lastQ = "";
  function apply() {
    const inp = field();
    const page = (inp && inp.closest(".scheme-merchant-page")) || document.querySelector(".scheme-merchant-page");
    if (!page) return;
    const q = norm(inp ? inp.value : "");
    const on = !!q;
    if (!on && !page.classList.contains("hg-ss-on")) { lastQ = ""; return; }
    addStyle();
    page.classList.toggle("hg-ss-on", on);
    const content = page.querySelector("#merchant-content");
    let found = 0;
    const words = q.split(" ");
    page.querySelectorAll(".cat-section").forEach((sec) => {
      let shown = 0;
      sec.querySelectorAll(".product-card-horizontal, .scheme-merchant-product-grid-card").forEach((card) => {
        const nameEl = card.querySelector(".product-name");
        const name = norm(nameEl ? nameEl.textContent : "");
        const hit = !on || words.every((w) => name.indexOf(w) !== -1);
        card.classList.toggle("hg-ss-hide", !hit);
        if (hit) shown++;
      });
      sec.classList.toggle("hg-ss-hide", on && !shown);
      found += shown;
    });
    let empty = document.getElementById("hg-ss-empty");
    if (on && !found && content) {
      if (!empty) {
        empty = document.createElement("div"); empty.id = "hg-ss-empty";
        const anchor = content.querySelector("#anchor");
        if (anchor) anchor.insertAdjacentElement("afterend", empty); else content.insertBefore(empty, content.firstChild);
      }
      const raw = String(inp.value).trim();
      const txt = (document.documentElement.lang || "").indexOf("ar") === 0
        ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0646\u062a\u062c\u0627\u062a \u062a\u0637\u0627\u0628\u0642 \u00ab" + raw + "\u00bb"
        : "No products match \u201c" + raw + "\u201d";
      if (empty.textContent !== txt) empty.textContent = txt;
    } else if (empty) empty.remove();
    /* a new search: scroll to the top of the menu (just past #anchor, so the top bar and its search field stay on screen) */
    const anchor = content && content.querySelector("#anchor");
    if (on && q !== lastQ && anchor) {
      const bar = document.getElementById("MerchantStickyHeader");
      const tabs = page.querySelector("#mobileStickyHeader");
      const barH = (bar && bar.getBoundingClientRect().height) || 96;
      page.style.setProperty("--hg-ss-gap", Math.round(barH + (tabs ? tabs.getBoundingClientRect().height : 0) + 16) + "px");
      const y = Math.ceil(anchor.getBoundingClientRect().top + window.scrollY) + 1;
      if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y });
    }
    lastQ = on ? q : "";
  }
  let timer = 0;
  function queue(ms) {
    clearTimeout(timer);
    timer = setTimeout(() => { try { apply(); } catch (e) {} }, ms);
  }
  document.addEventListener("input", (ev) => { if (ev.target && ev.target.id === "headerSearchProducts") queue(150); }, true);
  /* Hyperzod's clear (x) button empties the field without an input event */
  document.addEventListener("click", (ev) => {
    const t = ev.target;
    if (t && t.closest && t.closest("#MerchantStickyHeader .v-field__clearable")) queue(60);
  }, true);
  /* products drawn later (another store opened, more products loaded) follow the search still in the field */
  try {
    new MutationObserver((recs) => {
      const inp = field();
      if (!(inp && inp.value) && !document.querySelector(".scheme-merchant-page.hg-ss-on")) return;
      for (const r of recs) {
        const t = r.target;
        if (t && t.nodeType === 1 && t.closest && t.closest("#hg-ss-empty")) continue;
        queue(150);
        return;
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
  addStyle();
})();

/* TOP BAR SEARCH ON A STORE PAGE (website, 2026-10-24): the purple top bar's search field (#navSearchBar) opened
   Hyperzod's own store search screen (/<lang>/m/<store>/search) whenever a store page was open (Hyperzod's header sends it
   there when it has a store loaded). On store pages and that store search screen, a click on the field now opens our Search
   page (/<lang>/search, the same page it opens from Home); the field keeps the focus, so typing carries on there with our
   results. The field's own buttons (Ask) are left alone. Elsewhere the field works as before. */
(() => {
  "use strict";
  if (window.__hgTopSearch) return;
  window.__hgTopSearch = true;
  document.addEventListener("click", (ev) => {
    const t = ev.target;
    if (!t || !t.closest || !t.closest("#navSearchBar, .web-main-search") || t.closest("button")) return;
    let R = null, r = null;
    try { R = document.querySelector("#app").__vue_app__.config.globalProperties.$router; r = R.currentRoute.value; } catch (e) {}
    if (!R || !r || !/^\/(en|ar)\/m\//.test(r.path)) return;
    ev.stopPropagation();
    const inp = document.getElementById("navSearchBar");
    if (inp && document.activeElement !== inp) { try { inp.focus({ preventScroll: true }); } catch (e) { inp.focus(); } }
    const lang = (r.params && r.params.lang) || (/^\/ar\//.test(r.path) ? "ar" : "en");
    R.push("/" + lang + "/search").catch(() => {});
  }, true);
})();

/* DRAG TO SCROLL ON DESKTOP (website, 2026-10-24): every sideways row (banners, Little joys, Our favourites, category tiles,
   tabs and chips, the products in a store card, ...) is a native sideways scroller with its scrollbar hidden. A finger can
   swipe it, but with a mouse there was no way to move it. With a mouse (not touch, not a pen), press and drag any row that
   scrolls sideways to move it. A drag of 6px or more does not count as a click, so dragging over a product or store does
   not open it; a plain click still does. The row's snapping is paused while dragging and comes back on release, so it
   settles on a card like a swipe does. Nothing changes on phones or in the app. */
(() => {
  "use strict";
  if (window.__hgDragRows) return;
  window.__hgDragRows = true;
  const MIN = 6;
  function rowOf(el) {
    for (let n = el; n && n !== document.body && n.nodeType === 1; n = n.parentElement) {
      if (n.scrollWidth <= n.clientWidth + 1) continue;
      const ox = getComputedStyle(n).overflowX;
      if (ox === "auto" || ox === "scroll") return n;
    }
    return null;
  }
  let row = null, x0 = 0, left0 = 0, moved = false, snap = "", behavior = "";
  function end() {
    if (!row) return;
    const r = row;
    row = null;
    document.documentElement.classList.remove("hg-dragging");
    if (moved) {
      r.style.scrollSnapType = snap;   /* restoring the snapping settles the row on the nearest card */
      r.style.scrollBehavior = behavior;
    }
  }
  document.addEventListener("pointerdown", (ev) => {
    if (ev.pointerType !== "mouse" || ev.button !== 0) return;
    const t = ev.target;
    if (!t || !t.closest || t.closest("input,textarea,select,[contenteditable='true']")) return;
    const r = rowOf(t);
    if (!r) return;
    row = r; x0 = ev.clientX; left0 = r.scrollLeft; moved = false;
  }, true);
  document.addEventListener("pointermove", (ev) => {
    if (!row) return;
    if (!(ev.buttons & 1)) { end(); return; }
    const dx = ev.clientX - x0;
    if (!moved) {
      if (Math.abs(dx) < MIN) return;
      moved = true;
      snap = row.style.scrollSnapType; behavior = row.style.scrollBehavior;
      row.style.scrollSnapType = "none";
      row.style.scrollBehavior = "auto";
      document.documentElement.classList.add("hg-dragging");
    }
    row.scrollLeft = left0 - dx;
    ev.preventDefault();
  }, true);
  document.addEventListener("pointerup", () => {
    if (row && moved) {
      /* the click that follows this release is the end of a drag, not a tap */
      const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
      document.addEventListener("click", stop, { capture: true, once: true });
      setTimeout(() => document.removeEventListener("click", stop, true), 0);
    }
    end();
  }, true);
  document.addEventListener("pointercancel", end, true);
  /* no ghost image of a picture or link while dragging a row */
  document.addEventListener("dragstart", (ev) => { if (ev.target && ev.target.closest && rowOf(ev.target)) ev.preventDefault(); }, true);
  try {
    const st = document.createElement("style");
    st.textContent = "html.hg-dragging,html.hg-dragging *{cursor:grabbing !important;user-select:none !important;}";
    (document.head || document.documentElement).appendChild(st);
  } catch (e) {}
})();

/* LANGUAGE DROPDOWN ON THE GLOBE (website computers, 960px and wider, 2026-10-25): the globe at the end of the top bar is
   Hyperzod's menu button (#NavBtn); it opened a side panel whose only item is Language, which then opened the language list.
   Now the globe opens a small list right under it: English and العربية, the current one purple with a tick. Picking one
   calls Hyperzod's own language switch (setLocale of its side-menu), the same thing its list did. If that can't be found,
   the globe opens Hyperzod's panel as before. Closes on a click outside, Escape, scrolling or resizing. */
(function () {
  "use strict";
  if (window.__hgLangDD) return;
  window.__hgLangDD = 1;
  var WIDE = window.matchMedia("(min-width: 960px)");
  var LABEL = { en: "English", ar: "العربية" };
  var TICK = "<svg aria-hidden='true' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12.5l4.5 4.5L19 7.5'/></svg>";
  var menu = null, btn = null, cmp = null;
  function store() { try { return document.querySelector("#app").__vue_app__.config.globalProperties.$store; } catch (e) { return null; } }
  /* Hyperzod's side-menu component (it holds setLocale and the list of languages) */
  function sideMenu() {
    if (cmp && !cmp.isUnmounted) return cmp;
    cmp = null;
    try {
      var root = document.querySelector("#app").__vue_app__._container._vnode.component;
      var seen = new Set();
      var walk = function (v, d) {
        if (!v || cmp || d > 400) return;
        if (v.component) {
          var c = v.component;
          if (seen.has(c)) return;
          seen.add(c);
          if (c.proxy && typeof c.proxy.setLocale === "function" && Array.isArray(c.proxy.locales)) { cmp = c; return; }
          walk(c.subTree, d + 1);
          return;
        }
        if (Array.isArray(v.children)) for (var i = 0; i < v.children.length; i++) walk(v.children[i], d + 1);
        if (v.suspense) walk(v.suspense.activeBranch, d + 1);
      };
      walk(root.subTree, 0);
    } catch (e) {}
    return cmp;
  }
  function cur() {
    var l = (document.documentElement.getAttribute("lang") || "en").slice(0, 2);
    return l === "ar" ? "ar" : "en";
  }
  function style() {
    if (document.getElementById("hg-langdd-style")) return;
    var st = document.createElement("style");
    st.id = "hg-langdd-style";
    st.textContent =
      "#hg-langdd{position:fixed;z-index:20000;min-width:180px;padding:6px;box-sizing:border-box;border-radius:16px;background:#FFFFFF;" +
        "box-shadow:0 12px 24px -14px rgba(54,25,133,.45),0 0 0 1px rgba(54,25,133,.06);display:flex;flex-direction:column;gap:2px;}" +
      "#hg-langdd button{display:flex;align-items:center;justify-content:space-between;gap:12px;height:40px;padding:0 12px;border:0;border-radius:10px;" +
        "background:none;font:inherit;font-size:14px;color:#1B2023;cursor:pointer;text-align:start;}" +
      "#hg-langdd button:hover,#hg-langdd button:focus-visible{background:#F6F3FD;outline:none;}" +
      "#hg-langdd button[aria-checked='true']{color:#5A29DE;font-weight:700;}" +
      "#hg-langdd button[aria-checked='false'] svg{visibility:hidden;}" +
      "#hg-langdd button[lang='ar']{font-family:inherit;}";
    document.head.appendChild(st);
  }
  function close() {
    if (menu) { menu.remove(); menu = null; }
    if (btn) btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", onKey, true);
  }
  function onKey(e) { if (e.key === "Escape") { close(); if (btn) btn.focus(); } }
  function place() {
    if (!menu || !btn) return;
    var r = btn.getBoundingClientRect();
    menu.style.top = Math.round(r.bottom + 8) + "px";
    var rtl = getComputedStyle(btn).direction === "rtl";
    menu.setAttribute("dir", rtl ? "rtl" : "ltr");
    if (rtl) { menu.style.left = Math.round(r.left) + "px"; menu.style.right = "auto"; }
    else { menu.style.right = Math.round(window.innerWidth - r.right) + "px"; menu.style.left = "auto"; }
  }
  function open(b) {
    var sm = sideMenu();
    if (!sm) return false;
    style();
    btn = b;
    var now = cur();
    var list = (sm.proxy.locales || []).filter(function (l) { return l && (l.locale === "en" || l.locale === "ar"); });
    if (!list.length) return false;
    menu = document.createElement("div");
    menu.id = "hg-langdd";
    menu.setAttribute("role", "menu");
    list.forEach(function (l) {
      var it = document.createElement("button");
      it.type = "button";
      it.setAttribute("role", "menuitemradio");
      it.setAttribute("lang", l.locale);
      it.setAttribute("aria-checked", l.locale === now ? "true" : "false");
      it.innerHTML = "<span>" + LABEL[l.locale] + "</span>" + TICK;
      it.addEventListener("click", function () {
        close();
        if (l.locale === cur()) return;
        try { sideMenu().proxy.setLocale(l); } catch (e) {}
      });
      menu.appendChild(it);
    });
    document.body.appendChild(menu);
    b.setAttribute("aria-expanded", "true");
    place();
    document.addEventListener("keydown", onKey, true);
    var first = menu.querySelector("[aria-checked='true']") || menu.firstChild;
    if (first) first.focus({ preventScroll: true });
    return true;
  }
  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest("#AppBar #NavBtn") : null;
    if (b && WIDE.matches) {
      if (menu) { e.preventDefault(); e.stopImmediatePropagation(); close(); return; }
      if (open(b)) { e.preventDefault(); e.stopImmediatePropagation(); try { var s = store(); if (s) s.commit("sidePanel", ["menu", false]); } catch (x) {} }
      return;
    }
    if (menu && !menu.contains(e.target)) close();
  }, true);
  window.addEventListener("scroll", function () { if (menu) close(); }, true);
  window.addEventListener("resize", function () { if (menu) close(); });
  /* the globe says what it is */
  setInterval(function () {
    var b = document.querySelector("#AppBar #NavBtn");
    if (!b) return;
    var want = cur() === "ar" ? "اللغة" : "Language";
    if (b.getAttribute("aria-label") !== want) b.setAttribute("aria-label", want);
    if (!b.hasAttribute("aria-haspopup")) b.setAttribute("aria-haspopup", "menu");
  }, 1000);
})();
