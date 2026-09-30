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
