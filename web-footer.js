/* hg-version 2026-10-05-1655 */
(() => {
  "use strict";

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
    ["Balloons/Party Stores", "حفلات وبالونات"],
    ["Party", "حفلات وبالونات"]
  ]);

  const CATEGORY_ALIASES = {
    "food": "food",
    "مطاعم": "food",

    "retail": "retail",
    "retail trade": "retail",
    "تسوق": "retail",

    "flowers": "flowers",
    "ورد": "flowers",

    "beauty": "beauty",
    "تجميل": "beauty",

    "electronics": "electronics",
    "إلكترونيات": "electronics",

    "perfumes": "perfumes",
    "عطور": "perfumes",

    "fashion": "fashion",
    "أزياء": "fashion",

    "pharmacy": "pharmacy",
    "pharmacies": "pharmacy",
    "صيدليات": "pharmacy",

    "nutrition": "nutrition",
    "تغذية": "nutrition",

    "pets": "pets",
    "حيوانات أليفة": "pets",

    "grocery": "grocery",
    "groceries": "grocery",
    "supermarket": "grocery",
    "supermarkets": "grocery",
    "سوبرماركت": "grocery",

    "home goods": "home-goods",
    "home": "home-goods",
    "مستلزمات المنزل": "home-goods",
    "للمنزل": "home-goods",

    "sports": "sports",
    "رياضة": "sports",

    "toys": "toys",
    "ألعاب": "toys",

    "gift shop": "gift-shop",
    "gifts": "gift-shop",
    "هدايا": "gift-shop",

    "baby care": "baby-care",
    "مستلزمات الأطفال": "baby-care",

    "balloons/party stores": "party",
    "party": "party",
    "حفلات وبالونات": "party"
  };

  const originals = new Map();

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function keyForLabel(text) {
    return CATEGORY_ALIASES[normalize(text).toLowerCase()] || null;
  }

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
     FIND THE REAL CATEGORIES SECTION
     ========================================================= */

  function findCategorySection() {
    const native=document.getElementById("ProductCategories");
    if(native)return native;
    const all = document.querySelectorAll("h1,h2,h3,h4,h5,p,span,div");

    for (const el of all) {
      const text = normalize(el.textContent);

      if (text !== "Browse Categories" && text !== "تصفح الأقسام") continue;

      let current = el;

      for (let i = 0; i < 7 && current; i++) {
        const imgs = current.querySelectorAll("img").length;

        let matches = 0;
        for (const candidate of current.querySelectorAll("span,p,a,div,h3,h4,h5")) {
          if (keyForLabel(candidate.textContent)) matches++;
        }

        if (imgs >= 4 && matches >= 4) {
          current.dataset.hgCategoriesSection = "1";
          return current;
        }

        current = current.parentElement;
      }
    }

    return null;
  }

  function closestCategoryCard(labelEl, section) {
    let current = labelEl.parentElement;

    for (let i = 0; i < 6 && current && current !== section; i++) {
      const imgs = current.querySelectorAll("img");

      if (imgs.length === 1) {
        return { card: current, img: imgs[0] };
      }

      if (imgs.length > 4) return null;

      current = current.parentElement;
    }

    return null;
  }

  function markCategoryImages() {
    const section = findCategorySection();
    if (!section) return;

    const marked=new Set();

    const possibleLabels = section.querySelectorAll("span,p,a,div,h3,h4,h5");

    for (const labelEl of possibleLabels) {
      if (labelEl.children.length > 2) continue;

      const key = keyForLabel(labelEl.textContent);
      if (!key) continue;

      const result = closestCategoryCard(labelEl, section);
      if (!result?.img) continue;

      marked.add(result.img);
      if(result.img.dataset.hgCategoryKey!==key)result.img.dataset.hgCategoryKey = key;
      result.img.dataset.hgCategoryImage = "1";

      if (result.img.parentElement) {
        result.img.parentElement.dataset.hgCategoryImageWrapper = "1";
      }
    }
    section.querySelectorAll('img[data-hg-category-key]').forEach(img=>{
      if(marked.has(img))return;
      delete img.dataset.hgCategoryKey;
      delete img.dataset.hgCategoryImage;
      if(img.parentElement)delete img.parentElement.dataset.hgCategoryImageWrapper;
    });
  }

  /* =========================================================
     SYNC
     ========================================================= */

  function sync() {
    for(const node of originals.keys())if(!node.isConnected)originals.delete(node);
    markCategoryImages();

    if (isArabic()) translateTree(document.body);
    else restoreEnglish();
  }

  let scheduled = false;

  function scheduleSync() {
    if (scheduled) return;

    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      sync();
    });
  }

  function start() {
    sync();

    new MutationObserver(scheduleSync).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"]
    });

    new MutationObserver(scheduleSync).observe(document.body, {
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
    const btns = host.querySelectorAll(":scope > .hg-catnav-btn");
    if (btns.length !== 2) return;
    const e = edges(grid);
    host.classList.toggle("hg-catnav-on", e.max > 2);
    const mid = grid.offsetTop + grid.offsetHeight / 2;
    btns.forEach((b) => {
      b.style.top = mid + "px";
      const end = b.dataset.dir === "left" ? e.atLeft : e.atRight;
      b.classList.toggle("is-end", end);
      b.setAttribute("aria-disabled", end ? "true" : "false");
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
    return /^\/(en|ar)?\/?$/.test(location.pathname) || !!document.getElementById("MultiVendorHome");
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
   moved or re-created, so the "+" button and opening a product work as before. */
(() => {
  "use strict";
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
    /* slider leftovers: copies a slider adds for endless scrolling, and the arrow buttons */
    ".scheme-merchant-page .hg-sp-row>.swiper-slide-duplicate,.scheme-merchant-page .hg-sp-arrow{display:none !important;}";

  function addStyle() {
    if (document.getElementById("hg-sp-style")) return;
    const st = document.createElement("style");
    st.id = "hg-sp-style";
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  function countProducts(el) {
    let n = 0;
    return el.querySelectorAll(".product-name").length;
  }

  /* the product a name belongs to: the closest element around the name that also holds the "+" button */
  function productOf(name, page) {
    for (let el = name.parentElement; el && el !== page; el = el.parentElement) {
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

  function apply() {
    const page = document.querySelector(".scheme-merchant-page");
    if (!page) return;
    addStyle();
    page.querySelectorAll(".product-name").forEach((name) => {
      if (name.closest(".hg-sp-cell") || name.closest(".scheme-product-recommendation-section")) return;
      const prod = productOf(name, page);
      if (!prod) return;
      /* walk up from the product until an element holds two or more products: that is the row; the step below it is the cell */
      let cell = prod, row = prod.parentElement;
      while (row && row !== page && countProducts(row) < 2) { cell = row; row = row.parentElement; }
      if (!row || row === page) return;
      if (styledRow(row)) return;
      if (!row.classList.contains("hg-sp-row")) row.classList.add("hg-sp-row");
      if (!cell.classList.contains("hg-sp-cell")) cell.classList.add("hg-sp-cell");
      markImage(cell);
      /* section = the closest ancestor of the row that also holds a heading */
      let section = row.parentElement;
      while (section && section !== page && !section.querySelector("h1,h2,h3,h4")) section = section.parentElement;
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
        if (t && t.nodeType === 1 && t.closest && t.closest(".hg-sp-cell")) continue;
        queue();
        return;
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
  queue();
})();
