/* hg-version 2026-10-15-1636 */
/* HYPERGO APP: NEW LAYOUT (rebuild started 2026-10-15)
   Loaded by app-footer.js ONLY while the test switch is on (secret word "hgnewapp" in the app's search field). With the
   switch on, global-footer-1.js and global-footer-2.js stay off and global-footer.css is switched off, so this file and
   app-new.css draw the app from a blank page. Customers never have the switch: they keep the current layout.
   Contents:
   1. KEPT: the main page header (purple header, "Deliver to", cart, search bar, watermark, rotating search text, address
      language) and everything it needs, copied UNCHANGED from global-footer-1.js. The only old code in this file.
   2. NEW: Home screen (category grid, featured stores banner, Stores near you).
   NOT here, on purpose: the Account page and the bottom nav. They stay exactly as they are; with the switch on,
   global-footer-1.js still runs those two parts (and only those). Global, every merchant. English and Arabic (RTL mirrors). */
(function () {
  "use strict";
  if (window.__hgNewApp) return;
  window.__hgNewApp = true;
  document.documentElement.classList.add("hg-new-app");

  /* ================= 1. KEPT FROM global-footer-1.js: MAIN PAGE HEADER (copied unchanged) ================= */
  /* SHAPES — HyperGo arrow icon */
  const LOGO_D = "M0.1 0.1 L0.0 143.6 L0.5 144.4 L221.2 144.2 L222.0 144.6 L222.1 145.8 L221.8 147.0 L221.2 147.8 L220.8 149.9 L220.2 150.6 L219.9 152.4 L219.1 153.6 L218.9 155.0 L218.2 156.0 L217.9 157.5 L217.1 158.9 L216.9 160.0 L216.1 161.2 L215.9 162.4 L215.1 163.5 L214.8 165.0 L214.2 165.6 L213.9 166.9 L213.1 168.0 L212.9 169.0 L212.0 170.5 L211.9 171.2 L211.5 171.6 L210.9 173.2 L210.0 174.6 L209.9 175.2 L209.5 175.6 L208.8 177.4 L208.4 177.8 L207.9 179.1 L207.2 179.9 L205.6 183.1 L205.1 183.6 L204.9 184.5 L204.1 185.5 L203.9 186.2 L203.2 187.0 L202.8 188.1 L202.2 188.6 L202.0 189.4 L201.1 190.5 L200.9 191.2 L198.0 195.5 L197.8 196.1 L197.1 196.8 L197.0 197.2 L196.0 198.5 L194.8 200.6 L193.1 202.6 L193.0 203.1 L191.1 205.5 L190.8 206.2 L183.0 216.2 L177.9 222.2 L174.0 226.5 L165.8 234.9 L159.6 240.6 L153.4 246.0 L146.1 251.8 L141.5 255.0 L140.4 256.0 L138.5 257.1 L137.9 257.8 L133.2 260.9 L130.8 262.4 L130.2 262.9 L129.5 263.1 L128.4 264.0 L127.9 264.1 L127.0 264.9 L126.5 265.0 L125.4 265.9 L124.6 266.1 L124.1 266.6 L123.0 267.1 L122.2 267.8 L121.0 268.2 L120.2 268.9 L119.2 269.2 L118.2 270.0 L117.6 270.1 L117.1 270.6 L115.6 271.2 L115.2 271.6 L113.8 272.2 L113.2 272.8 L111.9 273.2 L111.4 273.8 L110.5 274.0 L109.4 274.8 L108.5 275.0 L107.4 275.8 L105.8 276.4 L105.1 276.9 L104.1 277.1 L103.0 277.9 L102.0 278.1 L101.1 278.8 L99.9 279.1 L98.6 279.9 L97.9 280.0 L96.1 281.0 L95.2 281.1 L92.0 282.8 L90.5 283.1 L89.2 283.9 L88.0 284.1 L87.0 284.8 L85.5 285.1 L84.2 285.9 L82.8 286.1 L81.4 286.9 L80.0 287.1 L79.0 287.8 L77.1 288.1 L76.0 288.8 L74.6 289.0 L72.2 290.0 L71.5 290.0 L69.0 291.0 L67.9 291.1 L66.2 291.9 L64.5 292.1 L63.1 292.8 L61.0 293.1 L59.1 293.9 L57.6 294.0 L55.0 294.9 L53.1 295.1 L50.9 295.9 L48.6 296.1 L46.1 296.9 L43.8 297.1 L41.2 297.9 L38.5 298.1 L35.6 298.9 L32.5 299.1 L29.2 299.9 L24.5 300.2 L21.4 300.9 L16.5 301.1 L10.5 301.9 L2.0 302.1 L0.2 302.4 L0.0 303.0 L0.0 455.5 L0.4 455.9 L9.8 455.6 L19.0 455.0 L26.8 454.8 L33.1 454.0 L38.4 453.8 L43.4 453.0 L47.5 452.8 L51.9 452.0 L55.5 451.8 L59.2 451.0 L62.4 450.8 L65.6 450.0 L68.0 449.9 L71.8 449.0 L74.4 448.8 L77.0 448.0 L79.5 447.8 L82.1 447.0 L84.5 446.8 L87.0 446.0 L89.1 445.8 L91.9 444.9 L93.5 444.8 L95.6 444.0 L98.0 443.6 L99.5 443.0 L101.4 442.8 L102.9 442.1 L105.2 441.8 L107.0 441.0 L108.9 440.8 L110.6 440.0 L112.2 439.8 L113.9 439.0 L115.2 438.9 L116.9 438.1 L118.8 437.8 L120.9 436.9 L122.1 436.8 L123.6 436.0 L124.9 435.8 L126.1 435.1 L128.2 434.6 L129.0 434.1 L131.0 433.6 L132.1 433.0 L133.4 432.8 L134.8 432.0 L136.1 431.8 L137.5 431.0 L139.0 430.6 L140.0 430.0 L141.2 429.8 L142.5 429.0 L144.0 428.6 L145.0 428.0 L146.1 427.8 L149.6 426.0 L150.8 425.8 L152.0 425.0 L153.2 424.6 L153.9 424.1 L155.2 423.8 L156.6 422.9 L157.1 422.9 L158.8 421.9 L159.1 421.9 L160.9 420.9 L161.2 420.9 L164.0 419.5 L164.6 419.0 L166.0 418.5 L166.9 417.9 L167.2 417.9 L170.2 416.1 L171.5 415.6 L172.2 415.0 L173.4 414.6 L173.9 414.1 L175.2 413.6 L175.8 413.1 L177.1 412.5 L177.6 412.0 L178.5 411.8 L179.6 410.9 L180.2 410.8 L180.8 410.2 L182.1 409.6 L182.6 409.1 L183.4 408.9 L184.5 408.0 L185.2 407.8 L186.1 407.0 L187.0 406.6 L187.5 406.1 L191.5 403.8 L192.4 403.0 L193.2 402.6 L199.5 398.1 L200.1 397.9 L208.4 391.8 L219.4 382.8 L228.1 374.8 L236.1 366.8 L243.6 358.8 L250.9 350.4 L252.0 348.8 L254.4 346.0 L254.9 345.1 L255.5 344.6 L256.0 345.0 L256.1 345.4 L256.0 441.4 L256.5 442.4 L394.4 442.5 L394.9 441.8 L394.8 0.1Z";

  const svgUri = (svg) => "data:image/svg+xml," + encodeURIComponent(svg);

  /* big outline watermark (header, fades in on scroll) */
  const LOGO_OUTLINE = svgUri(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 411 472'><path d='" + LOGO_D + "' fill='none' stroke='#fff' stroke-width='6' stroke-linejoin='round'/></svg>"
  );
  /* small filled icon used by the rotating search placeholder */
  const LOGO_FILLED = svgUri(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 395 456'><path d='" + LOGO_D + "' fill='#5A29DE'/></svg>"
  );

  function applyHyperGoHeader() {

    const root =
      document.querySelector("#MultiVendorHeaderRoot");

    const header =
      document.querySelector("#MultiVendorHeader");

    const toolbar =
      header?.querySelector("header.v-toolbar");

    const toolbarContent =
      header?.querySelector(".v-toolbar__content");

    const searchRow =
      document.querySelector(".home-mobile-search-row");

    const search =
      document.querySelector(".home-mobile-search-input");

    const control =
      search?.querySelector(".v-input__control");

    const field =
      search?.querySelector(".v-field");

    const fieldInput =
      search?.querySelector(".v-field__input");

    const filter =
      document.querySelector("#MobileSearchFilterBtn");

    const location =
      document.querySelector("#CurrentLocationBtn");

    const logo =
      document.querySelector(
        '#MultiVendorHeader [aria-label="Mobile site logo"]'
      );

    if (!root || !searchRow) return;

    /* mobile layout only (search row hidden on desktop) — desktop is handled by applyHyperGoDesktop */
    if (getComputedStyle(searchRow).display === "none") return;

    /* header scrolls away with the page (native: sticky, top -57px) */
    root.style.setProperty("position", "relative", "important");
    root.style.setProperty("top", "0px", "important");

    /* darker grey search placeholder via the theme's own variable */
    root.style.setProperty("--scheme-header-search-placeholder", "#1F2430");


    /* TOP HEADER — ONE LAYER ON THE ROOT, FLAT PURPLE, STRAIGHT BOTTOM EDGE, ROUNDED BOTTOM CORNERS
       (tested in Console: root carries color + edge once,
       inner layers transparent, so there is no seam) */

    root.style.setProperty("background-color", "#8640FC", "important");
    root.style.setProperty("background-image", "none", "important");
    root.style.setProperty("border-radius", "0 0 26px 26px", "important");
    root.style.setProperty("box-shadow", "none", "important");

    ensureWatermark(root);
    ensureHeaderCart(root);

    [header, toolbar, toolbarContent, searchRow].forEach(el => {
      if (!el) return;
      el.style.setProperty("background", "transparent", "important");
      el.style.setProperty("box-shadow", "none", "important");
    });


    /* SEARCH AREA — extra bottom space so the purple continues below search */

    searchRow.style.setProperty("padding", "10px 16px 30px", "important");


    /* FILTER: Hyperzod's own filter button, restyled as a tiny icon at the end of the search pill (see hg-extra-style) */

    if (filter) {

      filter.style.removeProperty("display");

    }


    /* REMOVE LOGO
       Exact parent-removal method that worked in preview. */

    if (logo?.parentElement) {

      logo.parentElement.style.setProperty(
        "display",
        "none",
        "important"
      );

    }


    /* LOCATION TEXT WHITE */

    if (location) {

      location.style.setProperty("top", "2px", "important");

      location.style.setProperty(
        "color",
        "#FFFFFF",
        "important"
      );

      location.style.setProperty(
        "font-size",
        "14px",
        "important"
      );

      location.style.setProperty(
        "font-weight",
        "400",
        "important"
      );

      location
        .querySelectorAll("*")
        .forEach(el => {

          el.style.setProperty(
            "color",
            "#FFFFFF",
            "important"
          );

          el.style.setProperty(
            "font-weight",
            "400",
            "important"
          );

        });

    }


    /* "DELIVER TO" LABEL
       Adds a separate label before Hyperzod's dynamic name and never edits
       Hyperzod's own text. Only runs when an address is set
       (name + address line both exist). */

    if (location) {

      const sp = (el, p, v) => el && el.style.setProperty(p, v, "important");
      const locRow = location.firstElementChild;
      const svgs = locRow ? locRow.querySelectorAll("svg") : [];
      const pin = svgs[0];
      const chevron = svgs[1];
      const nameEl = locRow ? locRow.querySelector("span.text") : null;
      const subEl = location.children[1];

      sp(pin && pin.querySelector("path"), "fill", "#FFFFFF");
      sp(chevron && chevron.querySelector("path"), "stroke", "#FFFFFF");
      sp(chevron && chevron.querySelector("path"), "fill", "none");

      if (locRow && nameEl && subEl) {

        let label = locRow.querySelector(".hg-deliver-label");

        if (!label) {
          label = document.createElement("span");
          label.className = "hg-deliver-label";
          label.textContent = hgIsAr() ? "\u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0625\u0644\u0649" : "Deliver to";
          locRow.insertBefore(label, nameEl);
        }

        sp(pin && pin.querySelector("path"), "fill", "#FFFFFF");
        sp(locRow, "max-width", "none");

        sp(label, "color", "#FFFFFF");
        sp(label, "font-size", "14px");
        sp(label, "font-weight", "400");
        sp(label, "white-space", "nowrap");
        sp(label, "margin-inline-start", "4px");

        sp(nameEl, "color", "#FFFFFF");
        sp(nameEl, "font-size", "14px");
        sp(nameEl, "font-weight", "700");

        const chevPath = chevron && chevron.querySelector("path");
        sp(chevPath, "stroke", "#FFFFFF");
        sp(chevPath, "fill", "none");

        sp(subEl, "color", "#FFFFFF");

      }

    }


    /* SEARCH — 36PX */

    [search, control, field].forEach(el => {

      if (!el) return;

      el.style.setProperty(
        "height",
        "36px",
        "important"
      );

      el.style.setProperty(
        "min-height",
        "36px",
        "important"
      );

      el.style.setProperty(
        "max-height",
        "36px",
        "important"
      );

    });


    if (field) {

      field.style.setProperty(
        "position",
        "relative",
        "important"
      );

      field.style.setProperty(
        "background",
        "#FFFFFF",
        "important"
      );

      field.style.setProperty(
        "border-radius",
        "18px",
        "important"
      );

      field.style.setProperty(
        "border",
        "1px solid rgba(27,32,35,.10)",
        "important"
      );

      field.style.setProperty(
        "overflow",
        "hidden",
        "important"
      );

    }


    if (fieldInput) {

      fieldInput.style.setProperty(
        "height",
        "36px",
        "important"
      );

      fieldInput.style.setProperty(
        "min-height",
        "36px",
        "important"
      );

      fieldInput.style.setProperty(
        "padding",
        hgIsAr() ? "0 38px 0 12px" : "0 12px 0 38px",
        "important"
      );

      fieldInput.style.setProperty(
        "font-size",
        "14px",
        "important"
      );

      fieldInput.style.setProperty(
        "line-height",
        "36px",
        "important"
      );

    }


    /* REMOVE HYPERZOD RIGHT SEARCH ICON */

    search
      ?.querySelectorAll(
        ".v-field__append-inner, .v-field__prepend-inner"
      )
      .forEach(el => {

        el.style.setProperty(
          "display",
          "none",
          "important"
        );

      });


    /* LEFT SEARCH ICON
       SVG magnifier, bounding box centred on the middle of the round left end
       (pill is 36px tall: centre = 18px from the left edge, 17px inside the 1px border). */

    if (
      field &&
      !field.querySelector(".hg-search-icon")
    ) {

      const icon = document.createElement("span");
      icon.className = "hg-search-icon";
      icon.style.cssText =
        "position:absolute;left:8px;top:50%;width:18px;height:18px;" +
        "transform:translateY(-50%);z-index:20;pointer-events:none;display:block;";
      icon.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 16 16' style='display:block'>" +
        "<circle cx='6.9' cy='6.9' r='4.9' fill='none' stroke-width='1.8' style='stroke:#2A2F38'/>" +
        "<path d='M10.6 10.6L14 14' stroke-width='1.8' stroke-linecap='round' style='stroke:#2A2F38'/></svg>";
      field.appendChild(icon);

    }


    /* Arabic: mirror the icon to the right */
    const hgIcon = field && field.querySelector(".hg-search-icon");
    if (hgIcon) {
      if (hgIsAr()) {
        hgIcon.style.left = "auto";
        hgIcon.style.right = "8px";
      }
    }

    /* ROTATING PLACEHOLDER: "Search Items" -> categories */

    ensureRotatingPlaceholder(field, { left: 38, size: 14, weight: 400 });

  }

  /* WATERMARK: big outlined HyperGo icon in the mobile/app header, fades in on scroll */

  function ensureWatermark(root) {
    if (!document.getElementById("hg-wm-style")) {
      const st = document.createElement("style");
      st.id = "hg-wm-style";
      st.textContent =
        '#MultiVendorHeaderRoot::before{content:"";position:absolute;right:6px;bottom:-24px;width:190px;height:190px;' +
        'background:url("' + LOGO_OUTLINE + '") no-repeat center/contain;' +
        'opacity:var(--hg-wm-op,0);pointer-events:none;z-index:-1;' +
        /* crop to the purple banner: the logo hangs 24px below the banner, so its bottom 24px and the part outside the
           banner's rounded corner (26px radius, logo sits 6px in from the edge) are cut off */
        'clip-path:inset(0 0 24px 0 round 0 0 20px 0);}';
      document.head.appendChild(st);
    }
    updateWatermark(root);
  }

  function updateWatermark(root) {
    if (!root || !window.matchMedia("(max-width: 959.98px)").matches) return;
    const scrolled = Math.max(0, -root.getBoundingClientRect().top);
    root.style.setProperty("--hg-wm-op", String(Math.min(1, scrolled / 50) * 0.55));
  }

  let wmTicking = false;
  document.addEventListener(
    "scroll",
    () => {
      if (wmTicking) return;
      wmTicking = true;
      requestAnimationFrame(() => {
        wmTicking = false;
        updateWatermark(document.getElementById("MultiVendorHeaderRoot"));
      });
    },
    { capture: true, passive: true }
  );


  /* ROTATING SEARCH PLACEHOLDER
     "Search for" + a word that cycles "All your needs" -> every home category every 4s.
     Switch animation: a small HyperGo icon sweeps left-to-right and erases the old word behind it,
     then the next word fades in. The native placeholder is made transparent (theme variable),
     and this overlay sits exactly where the placeholder text was. English only. */

  function hgIsAr() {
    const de = document.documentElement;
    return (de.lang || "").toLowerCase().indexOf("ar") === 0 || de.dir === "rtl";
  }

  /* ADDRESS LANGUAGE
     The saved delivery location keeps the language it was picked in (Google names the place in the app language at that moment),
     so after switching language the header still shows the old one ("Deliver to Tower السنابس،" in English).
     Fix: ask Google (same key the app already uses) for that exact spot in both languages, pair up the place names
     (area, city, country, road...) and swap them in the header. Pairs are cached on the phone per spot, so it is instant after the first time. */
  const LOC_KEY = "hg_geo1_";
  let locPairs = [];
  const locDone = {};
  const locBusy = {};
  let locTries = 0, locLastTry = 0, mapsKey = null, mapsKeyTry = 0;

  function locStore() {
    try { return document.querySelector("#app").__vue_app__.config.globalProperties.$store; } catch (e) { return null; }
  }
  function locKeyOf(la, ln) { return la.toFixed(3) + "," + ln.toFixed(3); }
  function findLL(o, d) {
    if (!o || typeof o !== "object" || d > 4) return null;
    const num = (k) => { const v = o[k]; const n = typeof v === "number" ? v : (typeof v === "string" && v.trim() !== "" ? parseFloat(v) : NaN); return isFinite(n) ? n : null; };
    const la = num("lat") !== null ? num("lat") : num("latitude");
    const ln = num("lng") !== null ? num("lng") : (num("lon") !== null ? num("lon") : num("longitude"));
    if (la !== null && ln !== null && (la !== 0 || ln !== 0)) return [la, ln];
    const c = o.coordinates;
    if (Array.isArray(c) && c.length === 2 && isFinite(c[0]) && isFinite(c[1])) return [Number(c[1]), Number(c[0])];
    for (const k in o) {
      const r = findLL(o[k], d + 1);
      if (r) return r;
    }
    return null;
  }
  function locCoords() {
    const out = [], seen = {};
    const st = locStore();
    if (!st) return out;
    const add = (o) => {
      const ll = findLL(o, 0);
      if (!ll || Math.abs(ll[0]) > 90 || Math.abs(ll[1]) > 180) return;
      const k = locKeyOf(ll[0], ll[1]);
      if (!seen[k]) { seen[k] = 1; out.push(ll); }
    };
    ["getSelectedLocation", "getSelectedAddress", "getDeliveryAddress", "getCurrentAddress"].forEach((g) => {
      try { add(st.getters[g]); } catch (e) {}
    });
    if (!out.length) {
      try { for (const k in st.state) { if (/location|address/i.test(k)) add(st.state[k]); } } catch (e) {}
    }
    return out;
  }
  function getMapsKey() {
    if (mapsKey) return mapsKey;
    if (Date.now() - mapsKeyTry < 30000) return null;
    mapsKeyTry = Date.now();
    try {
      const m = JSON.stringify(locStore().state).match(/AIza[0-9A-Za-z_-]{20,}/);
      if (m) mapsKey = m[0];
    } catch (e) {}
    return mapsKey;
  }
  function addPairs(list) {
    const have = {};
    locPairs.forEach((p) => { have[p[0]] = 1; });
    (list || []).forEach((p) => { if (p && p[0] && p[1] && !have[p[0]]) { have[p[0]] = 1; locPairs.push(p); } });
  }
  function buildPairs(ar, en) {
    const byId = {};
    en.forEach((r) => { byId[r.place_id] = r; });
    const seen = {}, out = [];
    ar.forEach((ra) => {
      const re = byId[ra.place_id];
      if (!re) return;
      ra.address_components.forEach((ca) => {
        const t = ca.types[0];
        if (t === "plus_code" || t === "postal_code") return;
        const ce = re.address_components.filter((c) => c.types[0] === t)[0];
        if (!ce) return;
        const a = ca.long_name, e = ce.long_name;
        if (!/[ء-ي]/.test(a) || !/[A-Za-z]/.test(e) || seen[a]) return;
        seen[a] = 1;
        out.push([a, e]);
      });
    });
    return out;
  }
  function locFetch(la, ln) {
    const key = locKeyOf(la, ln);
    if (locDone[key] || locBusy[key]) return;
    try {
      const c = localStorage.getItem(LOC_KEY + key);
      if (c) { addPairs(JSON.parse(c)); locDone[key] = 1; return; }
    } catch (e) {}
    const k = getMapsKey();
    if (!k) return;
    const now = Date.now();
    if (now - locLastTry < (locTries >= 3 ? 60000 : 4000)) return;
    locTries++;
    locLastTry = now;
    locBusy[key] = 1;
    const get = (lang) => fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + la + "," + ln + "&language=" + lang + "&key=" + k).then((r) => r.json());
    Promise.all([get("ar"), get("en")]).then((r) => {
      if (r[0].status !== "OK" || r[1].status !== "OK") throw new Error("geo");
      const pairs = buildPairs(r[0].results, r[1].results);
      addPairs(pairs);
      locDone[key] = 1;
      locTries = 0;
      try { localStorage.setItem(LOC_KEY + key, JSON.stringify(pairs)); } catch (e) {}
      delete locBusy[key];
      applyLocLang();
    }).catch(() => { delete locBusy[key]; });
  }
  function locSwap(s, ar) {
    const from = ar ? 1 : 0, to = ar ? 0 : 1;
    let out = s, changed = false;
    locPairs.slice().sort((x, y) => y[from].length - x[from].length).forEach((p) => {
      const src = p[from].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = ar ? new RegExp("(^|[^A-Za-z])(" + src + ")(?![A-Za-z])", "gi") : new RegExp("(^|[^\\u0621-\\u064A])(" + src + ")(?![\\u0621-\\u064A])", "g");
      out = out.replace(re, (m, pre) => { changed = true; return pre + p[to]; });
    });
    if (changed && !ar) out = out.replace(/،/g, ",").replace(/[,\s]+$/, "");
    return out;
  }
  function applyLocLang() {
    const els = document.querySelectorAll("#CurrentLocationBtn");
    if (!els.length) return;
    const ar = hgIsAr();
    const foreign = ar ? /[A-Za-z]/ : /[ء-ي]/;
    const nodes = [];
    els.forEach((el) => {
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = w.nextNode())) {
        if (foreign.test(n.nodeValue) && !(n.parentNode && n.parentNode.closest && n.parentNode.closest(".hg-deliver-label"))) nodes.push(n);
      }
    });
    if (!nodes.length) return;
    locCoords().forEach((ll) => locFetch(ll[0], ll[1]));
    if (!locPairs.length) return;
    nodes.forEach((n) => {
      const v = locSwap(n.nodeValue, ar);
      if (v !== n.nodeValue) n.nodeValue = v;
    });
  }

  /* ARABIC CATEGORY NAMES
     Hyperzod only has English names for the home categories. The Web footer already translates them on the
     website, but that code does not run in the app, so the same names are applied here (Arabic only). */
  const AR_CATS = {
    "food": "\u0645\u0637\u0627\u0639\u0645",
    "retail": "\u062A\u0633\u0648\u0642",
    "retail trade": "\u062A\u0633\u0648\u0642",
    "flowers": "\u0648\u0631\u062F",
    "beauty": "\u062A\u062C\u0645\u064A\u0644",
    "electronics": "\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A",
    "perfumes": "\u0639\u0637\u0648\u0631",
    "fashion": "\u0623\u0632\u064A\u0627\u0621",
    "pharmacy": "\u0635\u064A\u062F\u0644\u064A\u0627\u062A",
    "pharmacies": "\u0635\u064A\u062F\u0644\u064A\u0627\u062A",
    "nutrition": "\u062A\u063A\u0630\u064A\u0629",
    "pets": "\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0623\u0644\u064A\u0641\u0629",
    "grocery": "\u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A",
    "groceries": "\u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A",
    "supermarket": "\u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A",
    "supermarkets": "\u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A",
    "home goods": "\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644",
    "home": "\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644",
    "sports": "\u0631\u064A\u0627\u0636\u0629",
    "toys": "\u0623\u0644\u0639\u0627\u0628",
    "gift shop": "\u0647\u062F\u0627\u064A\u0627",
    "gifts": "\u0647\u062F\u0627\u064A\u0627",
    "baby care": "\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0623\u0637\u0641\u0627\u0644",
    "balloons/party stores": "\u062D\u0641\u0644\u0627\u062A \u0648\u0628\u0627\u0644\u0648\u0646\u0627\u062A",
    "party stores": "\u062D\u0641\u0644\u0627\u062A \u0648\u0628\u0627\u0644\u0648\u0646\u0627\u062A",
    "party": "\u062D\u0641\u0644\u0627\u062A \u0648\u0628\u0627\u0644\u0648\u0646\u0627\u062A"
  };

  function arCat(name) {
    const k = (name || "").replace(/\s+/g, " ").trim().toLowerCase();
    return AR_CATS.hasOwnProperty(k) ? AR_CATS[k] : null;
  }

  const PH_INTERVAL = 4000;
  let phIndex = 0;
  let phTimer = null;

  function phCategories() {
    const ar = hgIsAr();
    const key = ar ? "hg_ph_categories_ar" : "hg_ph_categories";
    const okName = (n) => (ar ? /[\u0600-\u06FF]/.test(n) : true);
    let names = [];
    const grid = document.querySelector(".scheme-collection-grid");
    if (grid) {
      grid.querySelectorAll("h4").forEach((h) => {
        let n = (h.textContent || "").trim();
        if (ar) n = arCat(n) || n;
        if (n && okName(n) && !names.includes(n)) names.push(n);
      });
      if (!names.length && !ar) {
        grid.querySelectorAll("img[alt]").forEach((img) => {
          const n = (img.getAttribute("alt") || "").trim();
          if (n && !names.includes(n)) names.push(n);
        });
      }
      if (names.length) {
        try { localStorage.setItem(key, JSON.stringify(names)); } catch (e) {}
      }
    }
    if (!names.length) {
      try { names = JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { names = []; }
    }
    return names;
  }

  function phWords() {
    return [hgIsAr() ? "\u0643\u0644 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643" : "All your needs"].concat(phCategories());
  }

  function phSwap(ov, next) {
    const word = ov.querySelector(".hg-ph-word");
    const logo = ov.querySelector(".hg-ph-logo");
    if (!word || word.textContent === next) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !word.animate) { word.textContent = next; return; }

    /* the icon travels left -> right across the word and ERASES it behind itself:
       the word is clipped from the left up to the icon's centre. */
    const rtl = ov.getAttribute("data-rtl") === "1";
    const W = word.getBoundingClientRect().width;
    const half = (logo.getBoundingClientRect().width || 12) / 2;
    const D = 1000;
    const ease = "cubic-bezier(.35,0,.35,1)";

    logo.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(" + (rtl ? -(W - half) : (W - half)) + "px)" }
      ],
      { duration: D, easing: ease }
    );
    logo.animate(
      [
        { opacity: 0 },
        { opacity: 1, offset: 0.1 },
        { opacity: 0 }
      ],
      { duration: D }
    );
    const out = word.animate(
      [
        { clipPath: "inset(0px 0px 0px 0px)" },
        { clipPath: rtl ? "inset(0px " + W + "px 0px 0px)" : "inset(0px 0px 0px " + W + "px)" }
      ],
      { duration: D, easing: ease, fill: "forwards" }
    );
    out.onfinish = () => {
      word.textContent = next;
      out.cancel();
      word.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350, easing: "ease-out" });
    };
  }

  function phTick() {
    if (document.hidden) return;
    const words = phWords();
    if (words.length < 2) return;
    phIndex = (phIndex + 1) % words.length;
    document.querySelectorAll(".hg-ph").forEach((ov) => {
      const inp = ov.parentElement && ov.parentElement.querySelector("input");
      if (inp && inp.value) return;
      phSwap(ov, words[phIndex]);
    });
  }

  function ensureRotatingPlaceholder(field, cfg) {
    if (!field) return;
    const ar = hgIsAr();
    const inp = field.querySelector("input");
    if (!inp) return;

    /* hide the native placeholder on every engine (double-ID selector beats the theme's rules,
       including the ones an older iOS WebView applies instead of the scoped theme rule) */
    inp.classList.add("hg-ph-input");
    if (!document.getElementById("hg-ph-style")) {
      const ph = document.createElement("style");
      ph.id = "hg-ph-style";
      ph.textContent =
        "#MultiVendorHeaderRoot#MultiVendorHeaderRoot input.hg-ph-input::placeholder{" +
        "color:transparent !important;-webkit-text-fill-color:transparent !important;opacity:0 !important;}";
      document.head.appendChild(ph);
    }

    let ov = field.querySelector(".hg-ph");
    if (ov && ov.getAttribute("data-rtl") !== (ar ? "1" : "0")) {
      ov.remove();
      ov = null;
    }
    if (!ov) {
      ov = document.createElement("div");
      ov.className = "hg-ph";
      ov.setAttribute("aria-hidden", "true");
      ov.setAttribute("data-rtl", ar ? "1" : "0");
      const side = ar ? "right" : "left";
      ov.innerHTML =
        '<span class="hg-ph-s">' + (ar ? "\u0627\u0628\u062D\u062B \u0639\u0646" : "Search for") + "</span>" +
        '<span class="hg-ph-slot" style="position:relative;display:inline-block;margin-' + side + ':.3em">' +
        '<span class="hg-ph-word" style="display:inline-block"></span>' +
        '<span class="hg-ph-logo" style="position:absolute;' + side + ':0;opacity:0;pointer-events:none;background:#fff"><img alt="" src="' + LOGO_FILLED + '" style="display:block;width:100%;height:100%"></span>' +
        "</span>";
      field.appendChild(ov);
    }

    const logoH = cfg.size;
    const logoW = Math.round(logoH * 395 / 456);
    ov.style.cssText =
      "position:absolute;" + (ar ? "direction:rtl;right:" + cfg.left + "px;left:auto;" : "left:" + cfg.left + "px;") +
      "top:0;bottom:0;display:flex;align-items:center;" +
      "pointer-events:none;white-space:nowrap;z-index:20;color:#1F2430;line-height:1;font-family:inherit;" +
      "font-size:" + cfg.size + "px;font-weight:" + cfg.weight + ";";
    const logo = ov.querySelector(".hg-ph-logo");
    logo.style.width = logoW + "px";
    logo.style.height = logoH + "px";
    logo.style.top = "50%";
    logo.style.marginTop = -(logoH / 2) + "px";

    const word = ov.querySelector(".hg-ph-word");
    if (!word.textContent) {
      const words = phWords();
      word.textContent = words[phIndex] || words[0];
    }

    ov.style.opacity = inp.value ? "0" : "1";

    if (!inp._hgPh) {
      inp._hgPh = true;
      inp.addEventListener("input", () => {
        const o = field.querySelector(".hg-ph");
        if (o) o.style.opacity = inp.value ? "0" : "1";
      });
    }

    /* hide the native placeholder (theme's own variable) */
    const root = document.querySelector("#MultiVendorHeaderRoot");
    if (root) root.style.setProperty("--scheme-header-search-placeholder", "transparent");

    if (!phTimer) phTimer = setInterval(phTick, PH_INTERVAL);
  }

  const NAV_FILES = { "9713d0c5": "home", "3c6f1202": "reorder", "1e78c063": "cart", "6257d1d1": "account" };
  const NAV_LABELS = {
    home: "home", reorder: "reorder", cart: "cart", account: "account",
    "\u0645\u0633\u0643\u0646": "home", "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629": "home",
    "\u0625\u0639\u0627\u062F\u0629 \u062A\u0631\u062A\u064A\u0628": "reorder",
    "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0644\u0628": "reorder",
    "\u0639\u0631\u0628\u0629 \u0627\u0644\u062A\u0633\u0648\u0642": "cart",
    "\u0627\u0644\u062D\u0633\u0627\u0628": "account"
  };
  const NAV_ORDER = ["home", "reorder", "cart", "account"];
  /* Arabic tab names (Hyperzod's own translation calls Home "\u0645\u0633\u0643\u0646" = "dwelling") */
  const NAV_AR = { home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", reorder: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0644\u0628", account: "\u0627\u0644\u062D\u0633\u0627\u0628" };

  function navKey(item, idx, total) {
    const obj = item.querySelector("object");
    const data = obj ? (obj.getAttribute("data") || "") : "";
    for (const k in NAV_FILES) if (data.indexOf(k) !== -1) return NAV_FILES[k];
    const lab = item.querySelector(".nav-label");
    const t = lab ? lab.textContent.trim().toLowerCase() : "";
    if (NAV_LABELS[t]) return NAV_LABELS[t];
    /* icons/labels not resolvable (e.g. right after switching language): fall back to position */
    return total === 4 ? NAV_ORDER[idx] : "";
  }

  function syncCartBadge() {
    const btn = document.getElementById("hg-cart-btn");
    if (!btn) return;
    const badge = btn.querySelector(".hg-cart-badge");
    const nb = document.querySelector("#MultiVendorBottomNav .classic-nav-item[data-hg-nav='cart'] .v-badge__badge");
    const on = !!nb && nb.style.display !== "none";
    const txt = nb ? nb.textContent.trim() : "";
    if (badge.textContent !== (on ? txt : "")) badge.textContent = on ? txt : "";
    badge.classList.toggle("on", on);
    badge.classList.toggle("num", on && !!txt);
  }

  function ensureHeaderCart(root) {
    if (!root) return;

    if (!document.getElementById("hg-cart-style")) {
      const st = document.createElement("style");
      st.id = "hg-cart-style";
      st.textContent =
        "#hg-cart-btn{position:absolute;right:16px;top:calc(var(--native-status-bar-height,0px) + 7px);width:38px;height:38px;border-radius:50%;" +
        "background:rgba(255,255,255,.18) !important;border:0;padding:0;margin:0;display:flex;align-items:center;justify-content:center;z-index:10000;" +
        "cursor:pointer;-webkit-tap-highlight-color:transparent;outline:none;}" +
        "#hg-cart-btn:active{background:rgba(255,255,255,.3) !important;}" +
        "html[lang^='ar'] #hg-cart-btn{right:auto;left:16px;}" +
        "html[lang^='ar'] #MultiVendorHeaderRoot::before{right:auto;left:6px;clip-path:inset(0 0 24px 0 round 0 0 0 20px);}" +
        "#hg-cart-btn .hg-cart-badge{position:absolute;top:0;right:0;box-sizing:border-box;width:11px;height:11px;border-radius:50%;background:#FF3B4E;" +
        "border:2px solid #8640FC;display:none;}" +
        "#hg-cart-btn .hg-cart-badge.on{display:block;}" +
        "#hg-cart-btn .hg-cart-badge.num{top:-3px;right:-3px;width:auto;min-width:17px;height:17px;padding:0 3px;border-radius:9px;text-align:center;" +
        "font-size:10px !important;line-height:13px !important;font-weight:700 !important;color:#fff !important;}";
      document.head.appendChild(st);
    }

    let btn = document.getElementById("hg-cart-btn");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "hg-cart-btn";
      btn.type = "button";
      btn.setAttribute("aria-label", hgIsAr() ? "\u0627\u0644\u0633\u0644\u0629" : "Cart");
      btn.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' style='display:block'>" +
        "<path d='M7 8V7a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 .92l1 12A2 2 0 0 1 19 23H5a2 2 0 0 1-2-2.08l1-12A1 1 0 0 1 5 8h2Zm2 0h6V7a3 3 0 0 0-6 0v1Z' fill='#111'/></svg>" +
        "<span class='hg-cart-badge'></span>";
      btn.addEventListener("click", () => {
        const nb = document.querySelector("#MultiVendorBottomNav .classic-nav-item[data-hg-nav='cart'] button");
        if (nb) nb.click();
      });
    }
    if (btn.parentNode !== root) root.appendChild(btn);
    syncCartBadge();
    if (!window._hgCartTimer) window._hgCartTimer = setInterval(syncCartBadge, 1000);
  }
  /* header CSS that lived in global-footer-1.js (hg-extra-style, "home header: native filter button"), copied unchanged */
  function ensureHeaderExtraStyle() {
    if (document.getElementById("hgn-header-style")) return;
    const st = document.createElement("style");
    st.id = "hgn-header-style";
    const TUNE_IC = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1'/%3E%3Ccircle cx='15' cy='6' r='2'/%3E%3Ccircle cx='9' cy='12' r='2'/%3E%3Ccircle cx='17' cy='18' r='2'/%3E%3C/svg%3E\")";
    st.textContent =
      "@media (max-width:959.98px){" +
      /* home header: native filter button, minimal - just a small icon at the end of the search pill */
      "#app .home-mobile-search-row #MobileSearchFilterBtn{display:inline-flex !important;position:absolute !important;inset-inline-end:16px;top:10px;width:42px !important;min-width:0 !important;height:36px !important;margin:0 !important;padding:0 !important;background:transparent !important;border:0 !important;box-shadow:none !important;border-radius:0 18px 18px 0 !important;color:#5A29DE !important;z-index:4;-webkit-tap-highlight-color:transparent;}" +
      "html[dir='rtl'] #app .home-mobile-search-row #MobileSearchFilterBtn,html[lang^='ar'] #app .home-mobile-search-row #MobileSearchFilterBtn{border-radius:18px 0 0 18px !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn::before{content:'';position:absolute;inset-inline-start:0;top:9px;bottom:9px;width:1px;background:rgba(27,32,35,.14);}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__overlay,#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__underlay{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn svg{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__content::after{content:'';display:block;width:18px;height:18px;background:#5A29DE;-webkit-mask:" + TUNE_IC + " center/contain no-repeat;mask:" + TUNE_IC + " center/contain no-repeat;}" +
      "#app .home-mobile-search-input .v-field__input{padding-inline-end:48px !important;}" +
      "}";
    document.head.appendChild(st);
  }

  /* the header's cart button reads and taps the native Cart tab, found by the data-hg-nav tag below.
     Copied unchanged from applyHyperGoNav() in global-footer-1.js (only the tagging part; the nav's look is still drawn by global-footer-1.js). */
  function tagNativeNav() {
    const nav = document.querySelector("#MultiVendorBottomNav");
    if (!nav) return;
    const navItems = nav.querySelectorAll(".classic-nav-item");
    navItems.forEach((item, idx) => {
      const k = navKey(item, idx, navItems.length);
      item.setAttribute("data-hg-nav", k || "other");
      if (hgIsAr() && NAV_AR[k]) {
        /* edit the existing text node in place so Vue can still patch it */
        const lab = item.querySelector(".nav-label");
        const tn = lab && Array.prototype.find.call(lab.childNodes, (n) => n.nodeType === 3);
        if (tn && tn.nodeValue.trim() !== NAV_AR[k]) tn.nodeValue = NAV_AR[k];
      }
    });
  }
  /* ================= END OF KEPT CODE ================= */


  /* ================= 2. NEW LAYOUT ================= */

  function vueGlobals() {
    try { return document.querySelector("#app").__vue_app__.config.globalProperties; } catch (e) { return null; }
  }
  function lang() { return hgIsAr() ? "ar" : "en"; }
  function currentPath() {
    const g = vueGlobals();
    const r = g && g.$router && g.$router.currentRoute && g.$router.currentRoute.value;
    return r ? r.path : location.pathname;
  }
  function go(path) {
    const g = vueGlobals();
    if (g && g.$router) g.$router.push(path); else location.href = path;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function homeData() {
    const g = vueGlobals();
    const S = g && g.$store && g.$store.state;
    return S && S.homeData;
  }

  const TXT = {
    en: { cats: "Categories", seeAll: "See all", less: "Show less", stores: "Stores near you", shop: "Shop now", featured: "Featured stores",
    },
    ar: { cats: "الفئات", seeAll: "عرض الكل", less: "عرض أقل", stores: "متاجر قريبة منك", shop: "تسوق الآن", featured: "متاجر مميزة",
    }
  };

  /* HyperGo arrow (brand mark), same shape as the logo files */
  const MARK = '<svg viewBox="0 0 394.75 456.09" aria-hidden="true"><path fill="currentColor" d="M394.75,0v442.61h-138.8v-98.54c-8.03,10.28-16.78,19.94-26.15,29.12-28.07,27.3-62.4,48-102.99,62.01-37.53,12.96-79.8,19.94-126.8,20.89v-153.67c38.82-1.43,74.88-10.52,108.06-27.06,36.39-18.22,65.6-43.61,87.59-76.26,11.52-17.02,20.42-35.24,26.73-54.6H0V0h394.75Z"/></svg>';
  const LESS_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const GO_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  /* ---------- data (Hyperzod's own store, nothing invented) ---------- */
  function catLabel(c) {
    const n = (c && c.name) || "";
    return hgIsAr() ? (arCat(n) || n) : n;
  }
  function catHref(c, L) {
    const slug = String(c.name || "").toLowerCase().trim().replace(/[^a-z0-9؀-ۿ]+/g, "-").replace(/^-|-$/g, "") || "category";
    return "/" + L + "/m-category/" + encodeURIComponent(slug) + "/" + (c.id || c._id) + "?categoryCollection=true";
  }
  function storeHref(m, L) { return "/" + L + "/m/" + encodeURIComponent(m.slug) + "/" + (m._id || m.id); }
  function storeImg(m, kind) {
    const im = m && m.images, x = im && im[kind];
    return (x && (x.image_url || x.image_thumb_url)) || "";
  }
  function storeDist(m) {
    const v = parseFloat(m && (m.user_to_merchant_distance_meters != null ? m.user_to_merchant_distance_meters : m.distance));
    return isNaN(v) ? 1e12 : v;
  }
  function featuredStores(hd) {
    const out = [], seen = {};
    const add = (m) => { const id = m && (m._id || m.id); if (!id || seen[id] || !storeImg(m, "cover")) return; seen[id] = true; out.push(m); };
    (hd.featured_merchants || []).forEach(add);
    (hd.merchants || []).forEach((m) => { if (m.is_featured || m.is_sponsored) add(m); });
    return out;
  }

  /* ---------- HOME ---------- */
  let catsOpen = false, homeSig = "";

  function isHomePath(p) { return /^\/(en|ar)(\/home)?\/?$/.test(p); }

  function renderHome() {
    const home = document.getElementById("MultiVendorHome");
    const hdr = document.getElementById("MultiVendorHeaderRoot");
    if (!home || !hdr || hdr.parentElement !== home) return;
    const hd = homeData();
    if (!hd || !Array.isArray(hd.merchant_categories)) return;

    let box = document.getElementById("hgn-home");
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-home";
      box.addEventListener("click", onHomeClick);
      homeSig = "";
    }
    if (box.previousElementSibling !== hdr) hdr.insertAdjacentElement("afterend", box);

    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L];
    const cats = hd.merchant_categories.filter((c) => c && c.status !== false && c.status !== 0)
      .slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    const stores = (hd.merchants || []).slice().sort((a, b) => storeDist(a) - storeDist(b)).slice(0, 10);
    const feat = featuredStores(hd);
    const idOf = (x) => x._id || x.id;
    const sig = [L, catsOpen, cats.map(idOf).join(","), stores.map(idOf).join(","), feat.map(idOf).join(",")].join("|");
    if (sig === homeSig && box.firstChild) return;
    homeSig = sig;

    const catMap = {};
    hd.merchant_categories.forEach((c) => { catMap[c.id || c._id] = c; });

    let html = "";

    /* category grid: 4 per row; 7 categories + "See all" when there are more than 8 */
    const many = cats.length > 8;
    const shown = many && !catsOpen ? cats.slice(0, 7) : cats;
    html += '<section class="hgn-cats" aria-label="' + esc(t.cats) + '"><div class="hgn-cat-grid">';
    shown.forEach((c) => {
      const href = catHref(c, L);
      html += '<a class="hgn-cat" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
        '<span class="hgn-cat-ring">' + (c.image ? '<img src="' + esc(c.image) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
        '<span class="hgn-cat-name">' + esc(catLabel(c)) + "</span></a>";
    });
    if (many) {
      html += '<button type="button" class="hgn-cat hgn-cat-all' + (catsOpen ? " is-open" : "") + '" data-act="cats" aria-expanded="' + catsOpen + '">' +
        '<span class="hgn-cat-ring">' + (catsOpen ? LESS_ICON : MARK) + "</span>" +
        '<span class="hgn-cat-name">' + esc(catsOpen ? t.less : t.seeAll) + "</span></button>";
    }
    html += "</div></section>";

    /* banner: real Featured / Sponsored stores only; hidden while there are none */
    if (feat.length) {
      html += '<section class="hgn-banner" aria-label="' + esc(t.featured) + '"><div class="hgn-slides">';
      feat.forEach((m) => {
        const href = storeHref(m, L);
        const c = (m.merchant_category_ids || []).map((id) => catMap[id]).filter(Boolean)[0];
        html += '<a class="hgn-slide" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<span class="hgn-slide-img"><img src="' + esc(storeImg(m, "cover")) + '" alt="" decoding="async"></span>' +
          '<span class="hgn-slide-text">' +
          '<span class="hgn-slide-top">' + (c ? '<span class="hgn-kicker">' + esc(catLabel(c)) + "</span>" : "") +
          '<span class="hgn-slide-title">' + esc(m.name) + "</span></span>" +
          '<span class="hgn-shop">' + esc(t.shop) + '<span class="hgn-shop-go">' + GO_ARROW + "</span></span>" +
          "</span></a>";
      });
      html += "</div>";
      if (feat.length > 1) {
        html += '<div class="hgn-dots" aria-hidden="true">' + feat.map((m, i) => '<span class="hgn-dot' + (i ? "" : " is-on") + '"></span>').join("") + "</div>";
      }
      html += "</section>";
    }

    /* Stores near you: Hyperzod's nearest stores, tags = the store's own Hyperzod categories */
    if (stores.length) {
      const all = "/" + L + "/m";
      html += '<section class="hgn-stores"><div class="hgn-head"><h2 class="hgn-h2">' + esc(t.stores) + "</h2>" +
        '<a class="hgn-pill" href="' + all + '" data-href="' + all + '">' + esc(t.seeAll) + "</a></div>" +
        '<div class="hgn-store-row">';
      stores.forEach((m) => {
        const href = storeHref(m, L);
        const cover = storeImg(m, "cover"), logo = storeImg(m, "logo");
        const tags = (m.merchant_category_ids || []).map((id) => catMap[id]).filter(Boolean).slice(0, 2);
        html += '<a class="hgn-store" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<span class="hgn-store-img' + (cover ? "" : " is-logo") + '">' +
          ((cover || logo) ? '<img src="' + esc(cover || logo) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
          '<span class="hgn-store-name">' + esc(m.name) + "</span>" +
          (tags.length ? '<span class="hgn-tags">' + tags.map((c) => '<span class="hgn-tag">' + esc(catLabel(c)) + "</span>").join("") + "</span>" : "") +
          "</a>";
      });
      html += "</div></section>";
    }

    box.setAttribute("dir", ar ? "rtl" : "ltr");
    box.innerHTML = html;
    bindSlider(box);
  }

  function onHomeClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && act.getAttribute("data-act") === "cats") {
      catsOpen = !catsOpen;
      renderHome();
      return;
    }
    const a = e.target.closest("[data-href]");
    if (!a) return;
    e.preventDefault();
    go(a.getAttribute("data-href"));
  }

  function bindSlider(box) {
    const track = box.querySelector(".hgn-slides");
    const dots = box.querySelectorAll(".hgn-dot");
    if (!track || dots.length < 2) return;
    let ticking = false;
    track.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const w = track.clientWidth || 1;
        const i = Math.max(0, Math.min(dots.length - 1, Math.round(Math.abs(track.scrollLeft) / w)));
        dots.forEach((d, k) => d.classList.toggle("is-on", k === i));
      });
    }, { passive: true });
  }

  /* ---------- running it ---------- */
  let routerHooked = false;
  function hookRouter() {
    if (routerHooked) return;
    const g = vueGlobals();
    if (g && g.$router && g.$router.afterEach) { g.$router.afterEach(() => schedule()); routerHooked = true; }
  }

  function tick() {
    try {
      hookRouter();
      ensureHeaderExtraStyle();
      tagNativeNav();
      applyHyperGoHeader();
      applyLocLang();
      if (isHomePath(currentPath())) renderHome();
    } catch (e) {}
  }

  let timer = null;
  function schedule() {
    if (timer) return;
    timer = setTimeout(() => { timer = null; tick(); }, 40);
  }

  const NOISE = ".hg-ph,#hgn-home,#hg-temp-perf,#hg-temp-diag,#hg-temp-back,#eruda,#hg-launch";
  function relevant(recs) {
    for (let i = 0; i < recs.length; i++) {
      const r = recs[i], el = r.target && (r.target.nodeType === 1 ? r.target : r.target.parentNode);
      if (el && el.closest && el.closest(NOISE)) continue;
      return true;
    }
    return false;
  }

  function start() {
    tick();
    new MutationObserver((recs) => {
      if (!relevant(recs)) return;
      /* header or Home just (re)created, e.g. coming Back to Home: draw it before the next paint, so nothing flashes */
      const hdr = document.getElementById("MultiVendorHeaderRoot");
      const bareHeader = hdr && !hdr.style.getPropertyValue("background-color") && document.querySelector(".home-mobile-search-row");
      const bareHome = document.getElementById("MultiVendorHome") && !document.getElementById("hgn-home") && isHomePath(currentPath());
      if (bareHeader || bareHome) { tick(); return; }
      schedule();
    }).observe(document.body, { childList: true, subtree: true });
    setInterval(schedule, 1500);
  }

  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
