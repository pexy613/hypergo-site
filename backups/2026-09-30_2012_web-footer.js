/* hg-version 2026-09-30-2003 */
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
