/* hg-version 2026-10-20-1953 */
/* HYPERGO APP: NEW HOME (rebuild started 2026-10-15)
   Loaded by app-footer.js in the app (every customer). global-footer-1.js skips its own header and Home code in the app;
   every other screen, the Account page and the bottom nav are still drawn by the old code until each is rebuilt.
   Contents:
   1. KEPT: the main page header (purple header, "Deliver to", cart, search bar, watermark, rotating search text, address
      language) and everything it needs, copied UNCHANGED from global-footer-1.js.
   2. NEW: Home screen (category grid, featured stores banner, Stores near you).
   Global, every merchant. English and Arabic (RTL mirrors). */
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
    /* media query (2026-10-20): same 960px breakpoint that hides the row, without a style recalc on every run */
    if (!window.matchMedia("(max-width: 959.98px)").matches) return;

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

    searchRow.style.setProperty("padding", "10px 16px 22px", "important"); /* 2026-10-18: 8px shorter header (was 30px) */


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

      /* logical sides (2026-10-20): one rule for English and Arabic; the end side keeps the 48px room for the filter
         button (the old physical inline shorthand overrode that rule) */
      fieldInput.style.setProperty("padding-block", "0", "important");
      fieldInput.style.setProperty("padding-inline-start", "38px", "important");
      fieldInput.style.setProperty("padding-inline-end", "48px", "important");

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
        "position:absolute;inset-inline-start:8px;top:50%;width:18px;height:18px;" + /* logical (2026-10-20): mirrors in Arabic */
        "transform:translateY(-50%);z-index:20;pointer-events:none;display:block;";
      icon.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 16 16' style='display:block'>" +
        "<circle cx='6.9' cy='6.9' r='4.9' fill='none' stroke-width='1.8' style='stroke:#2A2F38'/>" +
        "<path d='M10.6 10.6L14 14' stroke-width='1.8' stroke-linecap='round' style='stroke:#2A2F38'/></svg>";
      field.appendChild(icon);

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
    /* once per header (2026-10-20): measuring on every run forced a layout; the scroll listener below keeps it up to date */
    if (!root._hgnWm) { root._hgnWm = true; updateWatermark(root); }
  }

  const WM_MQ = window.matchMedia("(max-width: 959.98px)"); /* one query, not a new one on every frame (2026-10-20) */
  function updateWatermark(root) {
    if (!root || !WM_MQ.matches) return;
    const scrolled = Math.max(0, -root.getBoundingClientRect().top);
    root.style.setProperty("--hg-wm-op", String(Math.min(1, scrolled / 50) * 0.55));
  }

  let wmTicking = false;
  /* our sideways rows (banner sliding by itself every 4s, category, store, product and filter rows) never move the header:
     their scroll events are skipped (2026-10-20); the header only moves when the page itself scrolls. Shared with app-footer.js. */
  const SIDEWAYS = "#hgn-home,.hgn-slides,.hgn-store-row,.hgn-sp-chips,.hgn-circles,.hgn-tabs,.hgn-filters,.hgn-sb-prods,.hgn-cp-pills,.hgn-occ-row";
  window.__hgnSideways = SIDEWAYS;
  document.addEventListener(
    "scroll",
    (ev) => {
      const t = ev.target;
      if (t && t.nodeType === 1 && t.closest(SIDEWAYS)) return;
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
    inp.classList.toggle("hg-ph-input", true); /* toggle (2026-10-20): add() rewrote the class attribute on every run */
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
        '<span class="hg-ph-logo" style="position:absolute;' + side + ':0;opacity:0;pointer-events:none;background:#FFFCF9"><img alt="" src="' + LOGO_FILLED + '" style="display:block;width:100%;height:100%"></span>' +
        "</span>";
      /* set once, when created (2026-10-20): rewriting cssText on every run restyled the overlay each time */
      ov.style.cssText =
        "position:absolute;" + (ar ? "direction:rtl;right:" + cfg.left + "px;left:auto;" : "left:" + cfg.left + "px;") +
        "top:0;bottom:0;display:flex;align-items:center;" +
        "pointer-events:none;white-space:nowrap;z-index:20;color:#1F2430;line-height:1;font-family:inherit;" +
        "font-size:" + cfg.size + "px;font-weight:" + cfg.weight + ";";
      field.appendChild(ov);
    }

    const logoH = cfg.size;
    const logoW = Math.round(logoH * 395 / 456);
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

  /* the bottom tabs' data-hg-nav tags (read below) come from global-footer-1.js applyHyperGoNav, which runs in the app
     (removed the copy here 2026-10-20) */
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
        /* badge on the inline end corner (2026-10-20, was right): mirrors in Arabic */
        "#hg-cart-btn .hg-cart-badge{position:absolute;top:0;inset-inline-end:0;box-sizing:border-box;width:11px;height:11px;border-radius:50%;background:#FF3B4E;" +
        "border:2px solid #8640FC;display:none;}" +
        "#hg-cart-btn .hg-cart-badge.on{display:block;}" +
        "#hg-cart-btn .hg-cart-badge.num{top:-3px;inset-inline-end:-3px;width:auto;min-width:17px;height:17px;padding:0 3px;border-radius:9px;text-align:center;" +
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
  /* (2026-10-20) removed ensureHeaderExtraStyle and tagNativeNav: global-footer-1.js injects the same filter-button rules
     (hg-extra-style, checked identical) and tags the bottom tabs (applyHyperGoNav) in the app */
  /* ================= END OF KEPT CODE ================= */


  /* ================= 2. NEW LAYOUT ================= */

  function vueGlobals() {
    try { return document.querySelector("#app").__vue_app__.config.globalProperties; } catch (e) { return null; }
  }
  function lang() { return hgIsAr() ? "ar" : "en"; }
  /* the router's current route (one helper since 2026-10-20; it was written out in 4 places) */
  function curRoute() {
    const g = vueGlobals();
    return (g && g.$router && g.$router.currentRoute && g.$router.currentRoute.value) || null;
  }
  function currentPath() {
    const r = curRoute();
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
    en: { back: "Back", near: "Stores near you", nofavs: "No favourites yet. Tap the heart on a store to save it here.", favRow: "Favourites", top: "Top rated", free: "Free delivery", favs: "Your favourites", fav: "Save to favourites", unfav: "Remove from favourites", cats: "Categories", seeAll: "See all", less: "Show less", shop: "Shop now", featured: "Featured stores", occ: "Shop by occasion", all: "All"
    },
    ar: { back: "رجوع", near: "متاجر قريبة منك", nofavs: "لا توجد مفضلة بعد. اضغط على القلب في أي متجر لحفظه هنا.", favRow: "المفضلة", top: "الأعلى تقييمًا", free: "توصيل مجاني", favs: "مفضلتك", fav: "أضف إلى المفضلة", unfav: "إزالة من المفضلة", cats: "الفئات", seeAll: "عرض الكل", less: "عرض أقل", shop: "تسوق الآن", featured: "متاجر مميزة", occ: "تسوّق حسب المناسبة", all: "الكل"
    }
  };

  /* HyperGo arrow (brand mark), same shape as the logo files */
  const MARK = '<svg viewBox="0 0 394.75 456.09" aria-hidden="true"><path fill="currentColor" d="M394.75,0v442.61h-138.8v-98.54c-8.03,10.28-16.78,19.94-26.15,29.12-28.07,27.3-62.4,48-102.99,62.01-37.53,12.96-79.8,19.94-126.8,20.89v-153.67c38.82-1.43,74.88-10.52,108.06-27.06,36.39-18.22,65.6-43.61,87.59-76.26,11.52-17.02,20.42-35.24,26.73-54.6H0V0h394.75Z"/></svg>';
  const GO_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  /* ---------- data (Hyperzod's own store, nothing invented) ---------- */
  /* Home category tiles (chosen 2026-10-19): the HyperGo category icons made in Higgsfield (the ones uploaded in Hyperzod),
     each put on the same cream-peach background with a soft glow and shadow, stored in the repo's cat-icons folder and
     matched by Hyperzod category id. A category not listed keeps Hyperzod's own image.
     (Older sets: cat-photos = product cut-outs, cat-photos-real = real-scene photos.) */
  const CAT_PHOTO_BASE = "https://pexy613.github.io/hypergo-site/cat-icons/";
  const CAT_PHOTOS = {
    "6a9beeebdda6795f8c065933": "food", "6a9bf071dda6795f8c065936": "retail-trade", "6a9bee55dda6795f8c065932": "flowers",
    "6a9bef69288fb9d9e903a7e4": "beauty", "6a9bee60288fb9d9e903a7e2": "electronics", "6a9bf0ae288fb9d9e903a7e8": "perfumes",
    "6a9bef4fdda6795f8c065935": "fashion", "6a9bef06288fb9d9e903a7e3": "pharmacies", "6a9beef4dda6795f8c065934": "groceries",
    "6a9bef74288fb9d9e903a7e5": "pets", "6a9befca288fb9d9e903a7e7": "nutrition", "6a9befa1fbfc7198220f95d2": "party-stores",
    "6a9befd6fbfc7198220f95d3": "baby-care", "6a9bf0d4288fb9d9e903a7e9": "gifts", "6a9bf205dda6795f8c065937": "toys",
    "6a9bf4e4dda6795f8c065939": "sports", "6a9bef89288fb9d9e903a7e6": "home-goods"
  };
  /* Shop by occasion cards (O4, chosen 2026-10-19): title in English and Arabic, the Hyperzod category each one opens,
     and its picture: the product from that category's icon without a background, in the repo's occasion-cutouts folder */
  const OCC_IMG_BASE = "https://pexy613.github.io/hypergo-site/occasion-cutouts/";
  const OCCASIONS = [
    { en: "Birthday", ar: "عيد ميلاد", cat: "6a9bf0d4288fb9d9e903a7e9", img: "gifts" },
    { en: "Get well soon", ar: "سلامتك", cat: "6a9bee55dda6795f8c065932", img: "flowers" },
    { en: "Gym day", ar: "يوم التمرين", cat: "6a9befca288fb9d9e903a7e7", img: "nutrition" },
    { en: "Party night", ar: "ليلة الحفلة", cat: "6a9befa1fbfc7198220f95d2", img: "party-stores" }
  ];
  function catPhoto(c) {
    const slug = CAT_PHOTOS[c && (c.id || c._id)];
    return slug ? CAT_PHOTO_BASE + slug + ".webp" : "";
  }
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
  /* Featured collection (2026-10-17): the "Featured" Merchant Collection section on the Hyperzod home page (page builder).
     Its store ids come from Hyperzod's own boot settings; the stores are loaded once by id, with the same call Hyperzod's
     own section makes. A collection titled "Featured" wins; otherwise the first Merchant Collection on a page is used. */
  const featColl = { key: "", list: [], busy: false };
  function featuredCollectionIds() {
    try {
      const S = vueGlobals().$store.state;
      const pages = (S.Utils && S.Utils.bootSettings && S.Utils.bootSettings.page_builder_boot && S.Utils.bootSettings.page_builder_boot.primaryPages) || [];
      let pick = null;
      pages.forEach((pg) => (pg.sections || []).forEach((sec) => {
        if (!sec || sec.type !== "MerchantCollection" || sec.is_visible === false) return;
        const a = (sec.attributes || []).find((x) => x && x.key === "MerchantCollectionConfig");
        const v = a && a.value;
        if (!v || !Array.isArray(v.merchantIds) || !v.merchantIds.length) return;
        const isFeat = /featured|\u0645\u0645\u064a\u0632/i.test(String(v.title || ""));
        if (!pick || (isFeat && !pick.feat)) pick = { ids: v.merchantIds.slice(), feat: isFeat };
      }));
      return pick ? pick.ids : [];
    } catch (e) { return []; }
  }
  function loadFeaturedCollection(ids) {
    const key = ids.join(",");
    if (featColl.key === key || featColl.busy) return;
    featColl.busy = true;
    const qs = ids.map((id) => "merchant_ids%5B%5D=" + encodeURIComponent(id)).join("&");
    fetch("https://api.hyperzod.app/store/v1/merchant/listByIds?" + qs, {
      headers: { accept: "application/json", "x-tenant": location.host, "x-client-device": "web" }
    }).then((r) => r.json()).then((j) => {
      const d = j && j.data;
      const list = Array.isArray(d) ? d : (d && Array.isArray(d.data) ? d.data : []);
      const byId = {};
      list.forEach((m) => { if (m) byId[m._id || m.id] = m; });
      featColl.list = ids.map((id) => byId[id]).filter(Boolean);
    }, () => { featColl.list = []; }).then(() => { featColl.key = key; featColl.busy = false; schedule(); });
  }
  function featuredStores(hd) {
    const out = [], seen = {};
    const add = (m) => { const id = m && (m._id || m.id); if (!id || seen[id] || !storeImg(m, "cover")) return; seen[id] = true; out.push(m); };
    const ids = featuredCollectionIds();
    if (ids.length) {
      loadFeaturedCollection(ids);
      if (featColl.key === ids.join(",")) featColl.list.forEach(add);
    }
    (hd.featured_merchants || []).forEach(add);
    (hd.merchants || []).forEach((m) => { if (m.is_featured || m.is_sponsored) add(m); });
    return out;
  }

  /* ---------- HOME ---------- */
  let homeSig = "";

  function isHomePath(p) { return /^\/(en|ar)(\/home)?\/?$/.test(p); }

  /* icons for Home, copied from the approved design (the heart sits on each Stores near you photo) */
  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FF4000" d="M12 3.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.5l6.1-.7z"/></svg>';
  const TOP_ICON = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="#1B2023" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/></svg>'
  };
  /* FAVOURITES (2026-10-18): Hyperzod has no favourites, so a hearted store is saved on this phone (localStorage,
     key "hgn_favs": id, name, slug, photo). It stays after closing the app; it is not shared between phones. */
  const FAV_KEY = "hgn_favs";
  function favList() {
    try { const v = JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); return Array.isArray(v) ? v.filter((x) => x && x.id) : []; } catch (e) { return []; }
  }
  function favSave(list) { try { localStorage.setItem(FAV_KEY, JSON.stringify(list.slice(0, 40))); } catch (e) {} }
  function favToggle(m) {
    const list = favList(), id = m && (m._id || m.id);
    if (!id) return;
    const i = list.findIndex((x) => x.id === id);
    if (i >= 0) list.splice(i, 1);
    else list.unshift({ id: id, name: m.name || "", slug: m.slug || "", cover: storeImg(m, "cover"), logo: storeImg(m, "logo") });
    favSave(list);
  }
  /* every store seen on Home, by id, so a heart tap can save the store's name and photo */
  const seenStores = {};

  /* one store card (Stores near you, Top rated, Free delivery, Your favourites) */
  function storeCard(m, L, catMap, t, favIds, extra) {
    const id = m._id || m.id;
    seenStores[id] = m;
    const href = storeHref(m, L);
    const cover = storeImg(m, "cover"), logo = storeImg(m, "logo");
    const tags = (m.merchant_category_ids || []).map((x) => catMap[x]).filter(Boolean).slice(0, 2);
    const on = !!favIds[id];
    return '<a class="hgn-store" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-store-img' + (cover ? "" : " is-logo") + '">' +
      ((cover || logo) ? '<img src="' + esc(cover || logo) + '" alt="" loading="lazy" decoding="async">' : "") +
      '<button type="button" class="hgn-fav' + (on ? " is-on" : "") + '" data-act="fav" data-id="' + esc(id) + '" aria-pressed="' + on + '" aria-label="' + esc(on ? t.unfav : t.fav) + '">' + TOP_ICON.heart + "</button></span>" +
      '<span class="hgn-store-name">' + esc(m.name) + "</span>" +
      ((extra || tags.length) ? '<span class="hgn-tags">' + (extra || "") + tags.map((c) => '<span class="hgn-tag">' + esc(catLabel(c)) + "</span>").join("") + "</span>" : "") +
      "</a>";
  }
  function storeRow(title, list, L, catMap, t, favIds, extraFn) {
    if (!list.length) return "";
    return '<section class="hgn-stores"><div class="hgn-head"><h2 class="hgn-h2">' + esc(title) + "</h2></div>" +
      '<div class="hgn-store-row">' + list.map((m) => storeCard(m, L, catMap, t, favIds, extraFn ? extraFn(m) : "")).join("") + "</div></section>";
  }
  /* Stores near you panel (E, chosen 2026-10-19): one white panel, filter chips (All + the most common categories among the
     nearest stores), then 4 rows: store photo, name, category and delivery time from Hyperzod. Tapping a row opens the store;
     tapping a chip changes only the rows. */
  let panelCat = "", panelData = null;
  function storePanelRows() {
    const d = panelData;
    if (!d) return "";
    const list = d.stores.filter((m) => !panelCat || (m.merchant_category_ids || []).indexOf(panelCat) !== -1).slice(0, 4);
    return list.map((m) => {
      seenStores[m._id || m.id] = m;
      const href = storeHref(m, d.L), img = storeImg(m, "cover") || storeImg(m, "logo");
      const c = d.catMap[(m.merchant_category_ids || [])[0]];
      const meta = [c ? catLabel(c) : "", storeTime(m)].filter(Boolean).join(" · ");
      return '<a class="hgn-sp-row" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
        '<span class="hgn-sp-img">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
        '<span class="hgn-sp-txt"><span class="hgn-sp-name">' + esc(m.name) + "</span>" +
        (meta ? '<span class="hgn-sp-meta">' + esc(meta) + "</span>" : "") + "</span></a>";
    }).join("");
  }
  function storePanel(title, stores, L, catMap, t, seeAll) {
    if (!stores.length) return "";
    panelData = { stores, catMap, L };
    const count = {};
    stores.forEach((m) => { const id = (m.merchant_category_ids || [])[0]; if (id && catMap[id]) count[id] = (count[id] || 0) + 1; });
    const top = Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, 3);
    if (panelCat && top.indexOf(panelCat) === -1) panelCat = "";
    const chip = (id, label) => '<button type="button" class="hgn-sp-chip' + (panelCat === id ? " is-on" : "") + '" data-act="spf" data-cat="' + esc(id) + '">' + esc(label) + "</button>";
    return '<section class="hgn-stores"><div class="hgn-head"><h2 class="hgn-h2">' + esc(title) + "</h2>" +
      (seeAll ? '<a class="hgn-pill" href="' + esc(seeAll) + '" data-href="' + esc(seeAll) + '">' + esc(t.seeAll) + "</a>" : "") + "</div>" +
      '<div class="hgn-sp">' + (top.length > 1 ? '<div class="hgn-sp-chips">' + chip("", t.all) + top.map((id) => chip(id, catLabel(catMap[id]))).join("") + "</div>" : "") +
      '<div class="hgn-sp-rows">' + storePanelRows() + "</div></div></section>";
  }
  /* the stores a page or row needs: every store on Home (nearest first, the banner stores included once) and the favourites */
  /* cached per Home data and Featured collection state (2026-10-20): it was rebuilt and re-sorted on every run */
  let homeMemo = { hd: null, sig: "", out: [] };
  function homeStores(hd) {
    const sig = [(hd.merchants || []).length, featColl.key, featColl.list.length].join("|");
    if (homeMemo.hd === hd && homeMemo.sig === sig) {
      if (!featColl.key && !featColl.busy) featuredStores(hd); /* still starts the Featured collection load */
      return homeMemo.out;
    }
    const out = [], seen = {};
    (hd.merchants || []).concat(featuredStores(hd)).forEach((m) => { const id = m && (m._id || m.id); if (id && !seen[id]) { seen[id] = true; out.push(m); } });
    out.sort((a, b) => storeDist(a) - storeDist(b));
    homeMemo = { hd: hd, sig: [(hd.merchants || []).length, featColl.key, featColl.list.length].join("|"), out: out };
    return out;
  }
  function favStoresOf(hd) {
    const byId = {};
    homeStores(hd).forEach((m) => { byId[m._id || m.id] = m; });
    return favList().map((f) => byId[f.id] || { _id: f.id, name: f.name, slug: f.slug,
      images: { cover: f.cover ? { image_url: f.cover } : null, logo: f.logo ? { image_url: f.logo } : null } });
  }
  function catMapOf(hd) {
    const m = {};
    (hd.merchant_categories || []).forEach((c) => { m[c.id || c._id] = c; });
    return m;
  }
  function storeRating(m) { const v = parseFloat(m && m.average_rating); return isNaN(v) ? 0 : v; }
  /* only Hyperzod's delivery fee for this customer counts (delivery_data.fee); "delivery_amount" is 0 for most stores
     even when a fee is charged, so it is not used */
  function storeFee(m) {
    const d = m && m.delivery_data;
    return d && typeof d.fee === "number" ? d.fee : null;
  }

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
    const feat = featuredStores(hd);
    const idOf = (x) => x._id || x.id;
    /* Stores near you leaves out the stores already in the banner, so the two never repeat each other */
    const featIds = {};
    feat.forEach((m) => { featIds[idOf(m)] = true; });
    const stores = (hd.merchants || []).filter((m) => m && !featIds[idOf(m)])
      .sort((a, b) => storeDist(a) - storeDist(b)).slice(0, 10);
    const favs = favList(), favIds = {};
    favs.forEach((f) => { favIds[f.id] = true; });
    /* favourites are not in the signature (2026-10-20): a heart tap flips the hearts in place (onHomeClick), so the rows keep their scroll */
    const sig = [L, cats.map(idOf).join(","), stores.map(idOf).join(","), feat.map(idOf).join(",")].join("|");
    if (sig === homeSig && box.firstChild) return;
    homeSig = sig;

    const catMap = catMapOf(hd);

    let html = "";

    /* category grid: 4 per row; 7 categories + "See all" when there are more than 8 */
    const many = cats.length > 8;
    const shown = many ? cats.slice(0, 7) : cats;
    html += '<section class="hgn-cats" aria-label="' + esc(t.cats) + '"><div class="hgn-cat-grid">';
    shown.forEach((c) => {
      const href = catHref(c, L);
      const photo = catPhoto(c);
      const img = photo || c.image;
      html += '<a class="hgn-cat' + (photo ? " hgn-cat-photo" : "") + '" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
        '<span class="hgn-cat-ring">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
        '<span class="hgn-cat-name">' + esc(catLabel(c)) + "</span></a>";
    });
    /* "See all" opens the Search page, which lists every category ("Shop by category") */
    if (many) {
      const allHref = "/" + L + "/search";
      html += '<a class="hgn-cat hgn-cat-all" href="' + esc(allHref) + '" data-href="' + esc(allHref) + '">' +
        '<span class="hgn-cat-ring">' + MARK + "</span>" +
        '<span class="hgn-cat-name">' + esc(t.seeAll) + "</span></a>";
    }
    html += "</div></section>";

    /* banner (C1, chosen 2026-10-18): the store's own banner photo as it is (it already shows the store's name and logo,
       so we add no text on it), with only a small "Shop now" pill in the corner. Slides = the stores in the Featured collection (Hyperzod page builder), then
       any Featured / Sponsored stores; a store without a cover photo is left out; hidden while there are none. */
    if (feat.length) {
      html += '<section class="hgn-banner" aria-label="' + esc(t.featured) + '"><div class="hgn-slides">';
      feat.forEach((m) => {
        const href = storeHref(m, L);
        html += '<a class="hgn-slide" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<img class="hgn-slide-photo" src="' + esc(storeImg(m, "cover")) + '" alt="" decoding="async">' +
          '<span class="hgn-shop hgn-shop-c1" aria-label="' + esc(t.shop + " " + m.name) + '">' + esc(t.shop) + '<span class="hgn-shop-go">' + GO_ARROW + "</span></span>" +
          "</a>";
      });
      html += "</div>";
      if (feat.length > 1) {
        html += '<div class="hgn-dots" aria-hidden="true">' + feat.map((m, i) => '<span class="hgn-dot' + (i ? "" : " is-on") + '"></span>').join("") + "</div>";
      }
      html += "</section>";
    }

    /* Shop by occasion (O4, chosen 2026-10-19, in place of Popular right now): purple cards, each opens a Hyperzod category.
       A card whose category is missing or switched off is left out. */
    const occ = OCCASIONS.map((o) => ({ o, c: catMap[o.cat] })).filter((x) => x.c && x.c.status !== false && x.c.status !== 0);
    if (occ.length) {
      html += '<section class="hgn-occs"><div class="hgn-head"><h2 class="hgn-h2">' + esc(t.occ) + '</h2></div><div class="hgn-occ-row">' +
        occ.map(({ o, c }) => {
          const href = catHref(c, L);
          return '<a class="hgn-occ" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
            '<span class="hgn-occ-t">' + esc(o[L]) + "</span>" +
            '<span class="hgn-occ-go">' + esc(t.shop) + "</span>" +
            '<span class="hgn-occ-glow" aria-hidden="true"></span>' +
            '<img class="hgn-occ-img" src="' + esc(OCC_IMG_BASE + o.img + ".webp") + '" alt="" loading="lazy" decoding="async"></a>';
        }).join("") + "</div></section>";
    }

    /* Stores near you: Hyperzod's nearest stores, tags = the store's own Hyperzod categories */
    /* shown as one white panel with category filters (E, chosen 2026-10-19), not a sideways row; See all opens the full list */
    html += storePanel(t.near, stores, L, catMap, t, "/" + L + "/home?hgn=stores");

    /* Your favourites row is not shown on Home (2026-10-18): the hearts still save, and the saved stores show in
       Account (Favourites) and on the Search page */

    /* Top rated: Hyperzod's store rating, best first, only stores that have a rating */
    const all = (hd.merchants || []).concat(feat.filter((m) => !(hd.merchants || []).some((x) => idOf(x) === idOf(m))));
    const rated = all.filter((m) => storeRating(m) > 0).sort((a, b) => storeRating(b) - storeRating(a)).slice(0, 10);
    html += storeRow(t.top, rated, L, catMap, t, favIds, (m) => '<span class="hgn-tag hgn-rate">' + STAR + storeRating(m).toFixed(1) + "</span>");

    /* Free delivery: stores whose delivery fee is 0 (Hyperzod's own delivery data) */
    const free = all.filter((m) => storeFee(m) === 0).sort((a, b) => storeDist(a) - storeDist(b)).slice(0, 10);
    html += storeRow(t.free, free, L, catMap, t, favIds);

    box.setAttribute("dir", ar ? "rtl" : "ltr");
    box.innerHTML = html;
    bindSlider(box);
  }

  function onHomeClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && act.getAttribute("data-act") === "fav") {
      e.preventDefault();
      e.stopPropagation();
      const id = act.getAttribute("data-id");
      const saved = favList().find((f) => f.id === id);
      favToggle(seenStores[id] || (saved && { _id: id, name: saved.name }));
      /* in place (2026-10-20): every heart of this store flips, so open lists keep their scroll and photos; the views
         that list the favourites themselves (Favourites page, Search favourites row) redraw because their store list changed */
      const on = favList().some((f) => f.id === id), tt = TXT[lang()];
      document.querySelectorAll('[data-act="fav"][data-id="' + cssEsc(id) + '"]').forEach((b) => {
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-pressed", String(on));
        b.setAttribute("aria-label", on ? tt.unfav : tt.fav);
      });
      tick();
      return;
    }
    if (act && act.getAttribute("data-act") === "spf") {
      e.preventDefault();
      panelCat = act.getAttribute("data-cat") || "";
      const box = act.closest(".hgn-sp");
      box.querySelectorAll(".hgn-sp-chip").forEach((b) => b.classList.toggle("is-on", b === act));
      box.querySelector(".hgn-sp-rows").innerHTML = storePanelRows();
      return;
    }
    const a = e.target.closest("[data-href]");
    if (!a) return;
    e.preventDefault();
    go(a.getAttribute("data-href"));
  }

  /* banner slides by itself every 4 seconds (pauses for 6 seconds after the customer touches it; off with reduce-motion) */
  let slideTimer = 0;
  function bindSlider(box) {
    const track = box.querySelector(".hgn-slides");
    const dots = box.querySelectorAll(".hgn-dot");
    if (slideTimer) { clearInterval(slideTimer); slideTimer = 0; }
    if (!track || dots.length < 2) return;
    let pausedUntil = 0;
    const pause = () => { pausedUntil = Date.now() + 6000; };
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("pointerdown", pause, { passive: true });
    /* she asked for it to slide every 4 seconds; with reduce-motion on it jumps instead of gliding */
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slideTimer = setInterval(() => {
      if (!track.isConnected) { clearInterval(slideTimer); slideTimer = 0; return; }
      if (document.hidden || Date.now() < pausedUntil) return;
      const w = track.clientWidth || 1, n = dots.length;
      const cur = Math.round(Math.abs(track.scrollLeft) / w);
      const next = (cur + 1) % n;
      const sign = getComputedStyle(track).direction === "rtl" ? -1 : 1;
      const left = sign * next * w;
      if (reduce || next === 0) { track.scrollLeft = left; return; }
      track.scrollTo({ left: left, behavior: "smooth" });
      /* some phone webviews ignore a smooth scroll on a snapping row: then move it directly */
      setTimeout(() => { if (track.isConnected && Math.round(Math.abs(track.scrollLeft) / w) !== next) track.scrollLeft = left; }, 900);
    }, 4000);
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

  /* ---------- STORE PAGE (2026-10-15) ----------
     Hyperzod draws the store page; the look comes from app-new.css (html.hgn-store). This part only adds:
     - html.hgn-store while a store page is open (so the CSS applies to store pages only)
     - the "Open now" badge and the info card (delivery time, distance, delivery fee or minimum order),
       all read from Hyperzod's own store data; a value Hyperzod doesn't give is left out, never guessed
     - product photos in the lists: Hyperzod leaves the list photo empty (the product's photo only shows
       inside the product pop-up), so the same photo (its thumbnail) is put into the list box
     - --hgn-logo (the store's logo) for products that really have no photo */
  const STXT = {
    en: { open: "Open now", closed: "Closed", time: "Arrives in", dist: "Away", fee: "Delivery", free: "Free", min: "Min. order", nomin: "No minimum", mins: " mins", km: " km" },
    ar: { open: "مفتوح الآن", closed: "مغلق", time: "وقت التوصيل", dist: "المسافة", fee: "التوصيل", free: "مجاني", min: "الحد الأدنى", nomin: "بدون حد أدنى", mins: " دقيقة", km: " كم" }
  };
  const SICON = {
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    bike: '<circle cx="6" cy="16.5" r="3"/><circle cx="18" cy="16.5" r="3"/><path d="M6 16.5l3.5-7h5l3.5 7M9.5 9.5L8 6.5H6M14.5 9.5l1.5-3h2"/>',
    bag: '<path d="M5.5 8h13l-1 12.5h-11z"/><path d="M9 8a3 3 0 0 1 6 0"/>'
  };
  function sIcon(k) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + SICON[k] + "</svg>";
  }
  function isStorePath(p) { return /^\/(en|ar)\/m\/[^/]+\/[^/]+\/?$/.test(p); }
  function storeState() {
    const g = vueGlobals();
    return g && g.$store && g.$store.state;
  }
  function storeListEntry(id) {
    const S = storeState();
    /* (2026-10-20): also our own lists (nearby stores, search results, Featured collection), so a store opened from Search or a
       category page gets its time and fee; window.__hgSearchMerchants is only filled on the website */
    const lists = [(S && S.homeData && S.homeData.merchants) || [], nearAll.list, (sres && sres.list) || [], featColl.list,
      Array.isArray(window.__hgSearchMerchants) ? window.__hgSearchMerchants : []];
    for (let i = 0; i < lists.length; i++) {
      const m = lists[i].find((x) => (x._id || x.id) === id);
      if (m) return m;
    }
    return null;
  }
  /* prices (2026-10-20, money3 merged in): written exactly the way global-footer-1.js's currency pass writes them (no-break
     space; Arabic "د.ب." + RLM), so that pass no longer rewrites our text a moment later. three: always 3 decimals (BHD 4.200) */
  function money(n, three) {
    const v = three ? Number(n).toFixed(3) : Number(n).toLocaleString("en-US", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 3 });
    return hgIsAr() ? v + "\u00a0\u062F.\u0628.\u200f" : "BHD\u00a0" + v;
  }
  function cssEsc(s) { return window.CSS && CSS.escape ? CSS.escape(s) : s; }
  /* all products Hyperzod has loaded for this store, by id */
  function productPhotos() {
    const S = storeState(), out = {};
    const add = (p) => {
      const id = p && (p._id || p.id), im = p && Array.isArray(p.product_images) && (p.product_images.find((x) => x && x.is_cover) || p.product_images[0]);
      const u = im && (im.thumb_url || im.file_url);
      if (id && u) out[id] = u;
    };
    try { (S.Merchant.categoryProducts || []).forEach((c) => (c.category_products || []).forEach(add)); } catch (e) {}
    try {
      (function walk(o, d) {
        if (!o || typeof o !== "object" || d > 5) return;
        if (Array.isArray(o.product_images)) { add(o); return; }
        for (const k in o) walk(o[k], d + 1);
      })(S.Recommendations, 0);
    } catch (e) {}
    return out;
  }
  const noPhoto = new WeakMap(); /* photo box -> { id, t }: no photo found at time t (2026-10-20) */
  function fillProductPhotos(page) {
    const boxes = page.querySelectorAll(".pro-card-h-img");
    if (!boxes.length) return;
    let photos = null;
    boxes.forEach((box) => {
      const card = box.closest(".v-card[id]:not(.pro-card-h-img)");
      const id = card && card.id;
      if (!id) return;
      const real = box.querySelector("img.v-img__img");
      const mine = box.querySelector("img.hgn-thumb");
      if (real) { if (mine) mine.remove(); return; }
      if (mine && mine.getAttribute("data-pid") === id) return;
      /* (2026-10-20): a product without a photo used to re-read all of Hyperzod's product data on every run; now every 3s */
      const np = noPhoto.get(box);
      if (np && np.id === id && Date.now() - np.t < 3000) return;
      if (!photos) photos = productPhotos();
      const u = photos[id];
      if (!u) { if (mine) mine.remove(); noPhoto.set(box, { id: id, t: Date.now() }); return; }
      const host = box.querySelector(".v-responsive") || box;
      const img = mine || document.createElement("img");
      img.className = "hgn-thumb";
      img.alt = "";
      img.decoding = "async";
      img.loading = "lazy";
      img.setAttribute("data-pid", id);
      img.src = u;
      if (!mine) host.appendChild(img);
    });
  }
  /* A store opens in two ways in the phone app (found 2026-10-18):
     1. as its own page: the address is /en/m/<slug>/<id>, inside #app (our Home, Stores page, Search results);
     2. as a full-screen sheet that slides up over the current screen: Hyperzod's "merchant" side panel, used whenever
        window.ReactNativeWebView exists (the app) and the store is tapped in Hyperzod's own sections: category pages,
        Featured stores, banners, the cart, notifications. The address stays on the old screen (e.g. /m-category/...)
        and the sheet lives outside #app, under body > .v-overlay-container.
     So "a store is open" is decided by the visible store screen itself, never by the address alone, and every store
     rule in app-new.css is scoped to :is(#app,.v-overlay-container), not #app. */
  function openStorePage() {
    const pages = Array.prototype.filter.call(document.querySelectorAll(".scheme-merchant-page"), (p) => p.offsetWidth > 0 && p.getClientRects().length > 0);
    if (!pages.length) return null;
    const sheet = pages.filter((p) => p.closest(".v-overlay-container")).pop();
    if (sheet) return sheet;
    return isStorePath(currentPath()) ? pages[pages.length - 1] : null;
  }
  function renderStore() {
    const de = document.documentElement;
    const page = openStorePage();
    const on = !!page;
    de.classList.toggle("hgn-store", on);
    if (!on) return;
    const hdr = page && page.querySelector("#merchant-header-v2");
    if (!hdr) return;
    const T = STXT[lang()];
    const S = storeState();
    const md = (S && S.Merchant && S.Merchant.merchantData) || {};
    const id = md._id || md.id || (page.id || "");
    const entry = storeListEntry(id) || {};

    /* logo for products with no photo */
    const logoImg = hdr.querySelector(".merchant-header-img img");
    const logo = logoImg && logoImg.getAttribute("src");
    if (logo && page.getAttribute("data-hgn-logo") !== logo) {
      page.setAttribute("data-hgn-logo", logo);
      page.style.setProperty("--hgn-logo", 'url("' + logo.replace(/"/g, "%22") + '")');
    }

    /* Open now / Closed */
    const nameEl = hdr.querySelector("h1");
    if (nameEl && typeof md.is_open === "boolean") {
      const txt = md.is_open ? T.open : T.closed;
      let b = nameEl.parentNode.querySelector(":scope > .hgn-open");
      if (!b) { b = document.createElement("span"); nameEl.insertAdjacentElement("afterend", b); }
      const cls = "hgn-open" + (md.is_open ? "" : " is-closed");
      if (b.className !== cls) b.className = cls;
      if (b.textContent !== txt) b.textContent = txt;
    }

    /* info card */
    const gutter = hdr.querySelector(".storefront-gutter");
    if (gutter) {
      const items = [];
      const tm = entry.delivery_data && entry.delivery_data.time;
      const mm = tm && String(tm).match(/(\d+)/);
      if (mm && entry.show_delivery_time !== false) items.push(["clock", mm[1] + T.mins, T.time]);
      const distEl = gutter.querySelector(":scope > .tw-mt-4 span");
      const dm = distEl && distEl.textContent.match(/([\d.]+)\s*(km|كم)/i);
      if (dm) items.push(["pin", dm[1] + T.km, T.dist]);
      const fee = entry.delivery_data && entry.delivery_data.fee;
      if (typeof fee === "number") items.push(["bike", fee === 0 ? T.free : money(fee), T.fee]);
      else if (typeof md.min_order_amount === "number") items.push(["bag", md.min_order_amount > 0 ? money(md.min_order_amount) : T.nomin, T.min]);
      const html = items.map((x) => '<span class="hgn-sstat">' + sIcon(x[0]) + '<span class="hgn-sstat-t"><b>' + esc(x[1]) + "</b><small>" + esc(x[2]) + "</small></span></span>").join("");
      let card = gutter.querySelector(":scope > #hgn-sinfo");
      if (!items.length) { if (card) card.remove(); }
      else {
        if (!card) {
          card = document.createElement("div");
          card.id = "hgn-sinfo";
          const after = gutter.querySelector(":scope > .tw-relative");
          if (after) after.insertAdjacentElement("afterend", card); else gutter.appendChild(card);
        }
        if (card.getAttribute("data-sig") !== html) { card.setAttribute("data-sig", html); card.innerHTML = html; }
      }
    }

    fillProductPhotos(page);

    /* store sections (S3, 2026-10-19): how many products each section has (shown in the header's bubble) */
    page.querySelectorAll(".cat-section").forEach((sec) => {
      const h = sec.querySelector(".category-name");
      if (!h) return;
      const n = String(sec.querySelectorAll(".product-card-horizontal, .scheme-merchant-product-grid-card").length);
      if (n !== "0" && h.getAttribute("data-hgn-count") !== n) h.setAttribute("data-hgn-count", n);
    });
  }

  /* ---------- running it ---------- */
  let routerHooked = false;
  function hookRouter() {
    if (routerHooked) return;
    const g = vueGlobals();
    if (g && g.$router && g.$router.afterEach) { g.$router.afterEach(() => schedule()); routerHooked = true; }
  }

  /* ---------- STORE LIST LAYOUT (2026-10-18, from Nouf's example) ----------
     Used by the "Stores near you" page (See all), the Favourites page and the Search results.
     Each store: square logo with a heart, name, delivery time and fee (and rating once a store has one), then a row of
     its products. Products come from Hyperzod's own store menu (the same call the store page makes); on Search they are
     the products that matched the search. Above the list: category tabs and the filter buttons. */
  const LTXT = {
    en: { sortBy: "Sort by", nearest: "Nearest", fastest: "Fastest delivery", az: "A to Z", open: "Open now", top: "Top rated",
      free: "Free delivery", fee: " delivery", none: "No stores match these filters.", norated: "No stores have ratings yet.", nores: "No stores found.", mins: "mins" },
    ar: { sortBy: "ترتيب", nearest: "الأقرب", fastest: "الأسرع توصيلًا", az: "أبجديًا", open: "مفتوح الآن", top: "الأعلى تقييمًا",
      free: "توصيل مجاني", fee: "توصيل ", none: "لا توجد متاجر تطابق هذه الفلاتر.", norated: "لا توجد متاجر مقيّمة بعد.", nores: "لم يتم العثور على متاجر.", mins: "دقيقة" }
  };
  const LICON = {
    sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
  };
  function nameOf(o) {
    const tr = o && Array.isArray(o.language_translation) && o.language_translation.find((x) => x && x.key === "name" && x.locale === lang());
    return (tr && tr.value) || (o && o.name) || "";
  }
  function prodImg(p) {
    const im = p && Array.isArray(p.product_images) && (p.product_images.find((x) => x && x.is_cover) || p.product_images[0]);
    return (im && (im.thumb_url || im.file_url)) || "";
  }
  function prodPrice(p) {
    const v = p && (p.product_pricing ? p.product_pricing.price_display : p.price_display);
    return typeof v === "number" ? money(v, true) : "";
  }
  /* products of a store from its Hyperzod menu (page 1), with photo, featured first; loaded once per store */
  const menuCache = {};
  let menuQueue = [], menuBusy = 0;
  function storeProducts(id) {
    const c = menuCache[id];
    if (c) return c.list;
    menuCache[id] = { list: null };
    menuQueue.push(id);
    pumpMenus();
    return null;
  }
  function pumpMenus() {
    while (menuBusy < 3 && menuQueue.length) {
      const id = menuQueue.shift();
      menuBusy++;
      fetch("https://api.hyperzod.app/store/v1/merchant/menu?merchant_id=" + encodeURIComponent(id) + "&locale=" + lang() + "&page=1", {
        headers: { accept: "application/json", "x-tenant": location.host, "x-client-device": "web" }
      }).then((r) => r.json()).then((j) => {
        const all = [];
        ((j && j.data && j.data.category_products) || []).forEach((c) => (c.category_products || []).forEach((p) => { if (p && prodImg(p) && p.in_stock !== false) all.push(p); }));
        all.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
        menuCache[id].list = all.slice(0, 10);
      }, () => { menuCache[id].list = []; }).then(() => { menuBusy--; fillProducts(id); pumpMenus(); });
    }
  }
  function prodsHtml(m, list, L) {
    if (!list) return '<span class="hgn-sb-ph"></span><span class="hgn-sb-ph"></span><span class="hgn-sb-ph"></span>';
    const href = storeHref(m, L);
    return list.map((p) => '<a class="hgn-sb-p" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-sb-pi"><img src="' + esc(prodImg(p)) + '" alt="" loading="lazy" decoding="async"></span>' +
      '<span class="hgn-sb-pn">' + esc(nameOf(p)) + "</span>" +
      '<span class="hgn-sb-pp">' + esc(prodPrice(p)) + "</span></a>").join("");
  }
  /* a store's product row arrived: put it into every list showing that store */
  function fillProducts(id) {
    const c = menuCache[id];
    document.querySelectorAll('.hgn-sb-prods[data-id="' + cssEsc(id) + '"]').forEach((row) => {
      const m = seenStores[id];
      if (!m || !c || !c.list) return;
      if (!c.list.length) { row.remove(); return; }
      row.innerHTML = prodsHtml(m, c.list, lang());
    });
  }
  function storeTime(m) {
    const d = m && m.delivery_data;
    if (!d || !d.time || m.show_delivery_time === false) return "";
    const n = parseInt(d.time, 10);
    return isNaN(n) ? "" : (lang() === "ar" ? n + " " + LTXT.ar.mins : String(d.time));
  }
  function storeBlock(m, L, t, favIds, prods) {
    const id = m._id || m.id;
    seenStores[id] = m;
    const T = LTXT[L], href = storeHref(m, L);
    const logo = storeImg(m, "logo") || storeImg(m, "cover");
    const meta = [];
    const rate = storeRating(m);
    if (rate > 0) meta.push('<span class="hgn-sb-rate">' + STAR + rate.toFixed(1) + "</span>");
    const tm = storeTime(m);
    if (tm) meta.push("<bdi>" + esc(tm) + "</bdi>");
    const fee = storeFee(m);
    if (fee === 0) meta.push(esc(T.free));
    else if (fee) meta.push("<bdi>" + esc(L === "ar" ? T.fee + money(fee, true) : money(fee, true) + T.fee) + "</bdi>");
    const on = !!favIds[id];
    /* products load only when the store comes near the screen (watchProdRows), never all stores at once:
       a page of 80+ stores would otherwise ask Hyperzod for 80+ menus in one go */
    const cached = menuCache[id];
    const list = prods !== undefined ? prods : (cached ? cached.list : null);
    const wait = prods === undefined && !cached;
    return '<div class="hgn-sb">' +
      '<a class="hgn-sb-head" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-sb-logo">' + (logo ? '<img src="' + esc(logo) + '" alt="" loading="lazy" decoding="async">' : "") +
      '<button type="button" class="hgn-sb-fav' + (on ? " is-on" : "") + '" data-act="fav" data-id="' + esc(id) + '" aria-pressed="' + on + '" aria-label="' + esc(on ? t.unfav : t.fav) + '">' + LICON.heart + "</button></span>" +
      '<span class="hgn-sb-info"><span class="hgn-sb-name">' + esc(nameOf(m) || m.name) + "</span>" +
      (meta.length ? '<span class="hgn-sb-meta">' + meta.join('<i aria-hidden="true">•</i>') + "</span>" : "") + "</span></a>" +
      ((list && !list.length) ? "" : '<div class="hgn-sb-prods" data-id="' + esc(id) + '"' + (wait ? " data-wait" : "") + ">" + prodsHtml(m, list, L) + "</div>") +
      "</div>";
  }
  let prodObs = null;
  function watchProdRows(root) {
    /* (2026-10-20): rows from the previous draw are gone; stop watching them (they never come on screen, so the observer
       kept them forever). Only one list view is open at a time. */
    if (prodObs) prodObs.disconnect();
    const rows = root.querySelectorAll(".hgn-sb-prods[data-wait]");
    if (!rows.length) return;
    if (!("IntersectionObserver" in window)) { rows.forEach((r, i) => { if (i < 6) { r.removeAttribute("data-wait"); storeProducts(r.getAttribute("data-id")); } }); return; }
    if (!prodObs) {
      prodObs = new IntersectionObserver((ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          prodObs.unobserve(e.target);
          e.target.removeAttribute("data-wait");
          const id = e.target.getAttribute("data-id");
          if (storeProducts(id)) fillProducts(id);
        });
      }, { rootMargin: "400px 0px" });
    }
    rows.forEach((r) => prodObs.observe(r));
  }
  /* tabs + filter buttons + the list, for one view (its own state object) */
  function newListState() { return { cat: "", sort: "nearest", free: false, open: false, top: false, menu: false }; }
  /* sort + sort menu shared by the lists and the category page (2026-10-20, each was written out twice) */
  function deliveryMins(m) { const n = parseInt(m.delivery_data && m.delivery_data.time, 10); return isNaN(n) ? 1e9 : n; }
  function sortStores(list, sort, L) {
    if (sort === "fastest") list.sort((a, b) => deliveryMins(a) - deliveryMins(b) || storeDist(a) - storeDist(b));
    else if (sort === "az") list.sort((a, b) => (nameOf(a) || a.name || "").localeCompare(nameOf(b) || b.name || "", L));
    else list.sort((a, b) => storeDist(a) - storeDist(b));
  }
  function sortMenuHtml(st, T) {
    return '<div class="hgn-sortmenu">' + [["nearest", T.nearest], ["fastest", T.fastest], ["az", T.az]].map((o) =>
      '<button type="button" class="hgn-sortopt' + (st.sort === o[0] ? " is-on" : "") + '" data-act="lsortopt" data-id="' + o[0] + '"><span>' + esc(o[1]) + '</span><span class="hgn-rad"></span></button>').join("") + "</div>";
  }
  function storeListHtml(st, list, L, t, favIds, hd, prodsOf, withTabs) {
    const T = LTXT[L];
    const have = {};
    list.forEach((m) => (m.merchant_category_ids || []).forEach((x) => { have[String(x)] = true; }));
    const cats = (hd.merchant_categories || []).filter((c) => c && have[String(c.id || c._id)])
      .slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    if (st.cat && !have[st.cat]) st.cat = "";
    let shown = list.slice();
    if (st.cat) shown = shown.filter((m) => (m.merchant_category_ids || []).some((x) => String(x) === st.cat));
    if (st.free) shown = shown.filter((m) => storeFee(m) === 0);
    if (st.open) shown = shown.filter((m) => m.is_open !== false);
    if (st.top) shown = shown.filter((m) => storeRating(m) > 0);
    if (st.top) shown.sort((a, b) => storeRating(b) - storeRating(a));
    else if (st.sort !== "nearest" || !prodsOf) sortStores(shown, st.sort, L); /* search results keep their order on "Nearest" */
    let html = "";
    if (withTabs && cats.length > 1) {
      html += '<div class="hgn-tabs" role="tablist">' +
        '<button type="button" role="tab" class="hgn-tab' + (st.cat ? "" : " is-on") + '" data-act="lcat" data-id="">' + esc(t.all) + "</button>" +
        cats.map((c) => { const cid = String(c.id || c._id); return '<button type="button" role="tab" class="hgn-tab' + (st.cat === cid ? " is-on" : "") + '" data-act="lcat" data-id="' + esc(cid) + '">' + esc(catLabel(c)) + "</button>"; }).join("") +
        "</div>";
    }
    if (withTabs) {
      const sortLbl = st.sort === "fastest" ? T.fastest : st.sort === "az" ? T.az : T.sortBy;
      html += '<div class="hgn-filters">' +
        '<button type="button" class="hgn-flt hgn-flt-sort' + (st.sort !== "nearest" ? " is-on" : "") + '" data-act="lsort" aria-expanded="' + st.menu + '">' + LICON.sort + "<span>" + esc(sortLbl) + "</span>" + LICON.chev + "</button>" +
        '<button type="button" class="hgn-flt' + (st.free ? " is-on" : "") + '" data-act="lflt" data-id="free">' + esc(T.free) + "</button>" +
        '<button type="button" class="hgn-flt' + (st.open ? " is-on" : "") + '" data-act="lflt" data-id="open">' + esc(T.open) + "</button>" +
        '<button type="button" class="hgn-flt' + (st.top ? " is-on" : "") + '" data-act="lflt" data-id="top">' + esc(T.top) + "</button>" +
        "</div>";
      if (st.menu) html += sortMenuHtml(st, T);
    }
    html += shown.length ? '<div class="hgn-sblist">' + shown.map((m) => storeBlock(m, L, t, favIds, prodsOf ? prodsOf(m) : undefined)).join("") + "</div>"
      : '<p class="hgn-page-empty">' + esc(st.top ? T.norated : (list.length ? T.none : T.nores)) + "</p>";
    return html;
  }
  /* tab / filter / sort taps; returns true when the tap was one of these */
  function listClick(act, st) {
    const a = act.getAttribute("data-act"), v = act.getAttribute("data-id") || "";
    if (a === "lcat") { st.cat = v; st.menu = false; return true; }
    if (a === "lsort") { st.menu = !st.menu; return true; }
    if (a === "lsortopt") { st.sort = v; st.menu = false; return true; }
    if (a === "lflt") { st[v] = !st[v]; st.menu = false; return true; }
    return false;
  }
  /* every store near the customer: Hyperzod's nearby list for the chosen address (the same call Hyperzod's category
     pages use, 20 per page), plus the Home stores. Loaded once per address and language. */
  const nearAll = { key: "", list: [], busy: false, failKey: "", failAt: 0 };
  function loadNearAll() {
    const S = storeState();
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    if (!sel || typeof sel.latitude !== "number" || typeof sel.longitude !== "number") return;
    const L = lang(), key = sel.latitude.toFixed(5) + "," + sel.longitude.toFixed(5) + "|" + L;
    if (nearAll.key === key || nearAll.busy) return;
    if (nearAll.failKey === key && Date.now() - nearAll.failAt < 30000) return; /* failed: try again after 30s (2026-10-20) */
    nearAll.busy = true;
    const H = { "content-type": "application/json", accept: "application/json", "x-tenant": location.host, "x-client-device": "web" };
    let all = [];
    const page = (p) => fetch("https://api.hyperzod.app/store/v1/search/merchant/nearby", {
      method: "POST", headers: H,
      body: JSON.stringify({ user_location: [sel.latitude, sel.longitude], filters: [], sort_by: [], page: p, locale: L })
    }).then((r) => r.json()).then((j) => {
      const d = j && j.data;
      const list = Array.isArray(d) ? d : (d && Array.isArray(d.data) ? d.data : []);
      all = all.concat(list);
      if (list.length && p < 15) return page(p + 1);
    });
    /* (2026-10-20): the key is only stored on success, so a failed load is retried and Hyperzod's own category list stays meanwhile */
    page(1).then(() => { nearAll.list = all; nearAll.key = key; }, () => { nearAll.failKey = key; nearAll.failAt = Date.now(); })
      .then(() => { nearAll.busy = false; pageSig = ""; catSig = ""; schedule(); });
  }
  /* cached until one of its source lists changes (2026-10-20): up to 300 stores were merged and sorted on every run */
  const NO_LIST = [];
  let nearMemo = { near: null, sm: null, home: null, out: [] };
  function nearStores(hd) {
    loadNearAll();
    const sm = Array.isArray(window.__hgSearchMerchants) ? window.__hgSearchMerchants : NO_LIST, home = homeStores(hd);
    if (nearMemo.near === nearAll.list && nearMemo.sm === sm && nearMemo.home === home) return nearMemo.out;
    const out = [], seen = {};
    nearAll.list.concat(sm, home).forEach((m) => {
      const id = m && (m._id || m.id);
      if (id && !seen[id] && m.slug) { seen[id] = true; out.push(m); }
    });
    out.sort((a, b) => storeDist(a) - storeDist(b));
    nearMemo = { near: nearAll.list, sm: sm, home: home, out: out };
    return out;
  }

  /* ---------- CATEGORY PAGE (2026-10-18, from "HyperGo App Redesign", 5 · Category) ----------
     On /<lang>/m-category/<slug>/<id> our list replaces Hyperzod's: back button, category name and how many stores,
     Sort / Open now / Free delivery, then one big card per store (cover photo, delivery time, name, distance, tags).
     A store opens as its own page. Hyperzod's list stays until the nearby stores have loaded. */
  const CTXT = {
    en: { n1: " store near you", n: " stores near you", sort: "Sort: ", closed: "Closed" },
    ar: { n1: " متجر قريب منك", n: " متاجر قريبة منك", sort: "ترتيب: ", closed: "مغلق" }
  };
  const CICON = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>'
  };
  let catSig = "", catSt = newListState(), catWas = "";
  function catRoute() {
    const r = curRoute();
    return r && r.name === "merchant-category" && r.params && r.params.id ? r : null;
  }
  function storeKm(m) {
    const t = String((m && m.user_to_merchant_distance) || "");
    const v = parseFloat(t);
    if (!isNaN(v) && v > 0 && v < 100) return v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, "") + (lang() === "ar" ? " كم" : " km");
    const mt = storeDist(m);
    return mt > 0 && mt < 1e8 ? (mt / 1000).toFixed(1) + (lang() === "ar" ? " كم" : " km") : "";
  }
  function catCard(m, L, catMap) {
    const id = m._id || m.id;
    seenStores[id] = m;
    const href = storeHref(m, L), cover = storeImg(m, "cover"), logo = storeImg(m, "logo");
    const T = LTXT[L], C = CTXT[L];
    const tm = storeTime(m), km = storeKm(m);
    const tags = (m.merchant_category_ids || []).map((x) => catMap[x]).filter(Boolean).slice(0, 2).map((c) => catLabel(c));
    if (storeFee(m) === 0) tags.push(T.free);
    const closed = m.is_open === false || m.is_accepting_orders === false;
    return '<a class="hgn-cc' + (closed ? " is-closed" : "") + '" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-cc-img' + (cover ? "" : " is-logo") + '">' + ((cover || logo) ? '<img src="' + esc(cover || logo) + '" alt="" loading="lazy" decoding="async">' : "") +
      (tm ? '<span class="hgn-cc-time">' + CICON.clock + "<bdi>" + esc(tm) + "</bdi></span>" : "") +
      (closed ? '<span class="hgn-cc-closed">' + esc(C.closed) + "</span>" : "") + "</span>" +
      '<span class="hgn-cc-row"><span class="hgn-cc-name">' + esc(nameOf(m) || m.name) + "</span>" +
      (km ? '<span class="hgn-cc-dist">' + sIcon("pin") + /* same pin as the store info card */ "<bdi>" + esc(km) + "</bdi></span>" : "") + "</span>" +
      (tags.length ? '<span class="hgn-cc-tags">' + tags.map((x) => '<span class="hgn-cc-tag">' + esc(x) + "</span>").join("") + "</span>" : "") +
      "</a>";
  }
  function renderCategoryPage() {
    const r = catRoute();
    const root = document.getElementById("merchants_by_category");
    const de = document.documentElement;
    let box = document.getElementById("hgn-catpage");
    const off = () => { de.classList.toggle("hgn-cat-on", false); if (box) box.remove(); catSig = ""; }; /* toggle (2026-10-20): no class rewrite when already off */
    if (!r || !root) { off(); return; }
    const hd = homeData();
    if (!hd) { off(); return; }
    const cid = String(r.params.id);
    if (cid !== catWas) { catWas = cid; catSt = newListState(); }
    const all = nearStores(hd);
    if (!nearAll.key) { off(); return; } /* nearby stores not loaded yet: Hyperzod's own list stays meanwhile */
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L], T = LTXT[L], C = CTXT[L];
    const catMap = catMapOf(hd);
    const cat = catMap[cid] || (hd.merchant_categories || []).find((c) => String(c.id || c._id) === cid);
    const list = all.filter((m) => (m.merchant_category_ids || []).some((x) => String(x) === cid));
    de.classList.toggle("hgn-cat-on", true);
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-catpage";
      box.addEventListener("click", onCatClick);
      catSig = "";
    }
    if (root.firstElementChild !== box) root.insertAdjacentElement("afterbegin", box);
    const sig = [cid, L, JSON.stringify(catSt), list.map((m) => m._id || m.id).join(",")].join("|");
    if (sig === catSig) return;
    catSig = sig;
    let shown = list.slice();
    if (catSt.free) shown = shown.filter((m) => storeFee(m) === 0);
    if (catSt.open) shown = shown.filter((m) => m.is_open !== false && m.is_accepting_orders !== false);
    sortStores(shown, catSt.sort, L);
    const sortLbl = catSt.sort === "fastest" ? T.fastest : catSt.sort === "az" ? T.az : T.nearest;
    box.setAttribute("dir", ar ? "rtl" : "ltr");
    box.innerHTML =
      '<div class="hgn-cp-top"><button type="button" class="hgn-cp-btn" data-act="back" aria-label="' + esc(t.back) + '">' + BACK_CHEV + "</button>" +
      '<div class="hgn-cp-title"><h1>' + esc(cat ? catLabel(cat) : "") + "</h1><p>" + list.length + esc(list.length === 1 ? C.n1 : C.n) + "</p></div>" +
      '<button type="button" class="hgn-cp-btn" data-act="csearch" aria-label="' + esc(L === "ar" ? "بحث" : "Search") + '">' + SEARCH_IC + "</button></div>" +
      '<div class="hgn-cp-pills">' +
      '<button type="button" class="hgn-cp-pill is-dark" data-act="lsort" aria-expanded="' + catSt.menu + '">' + CICON.sliders + "<span>" + esc(C.sort + sortLbl) + "</span></button>" +
      '<button type="button" class="hgn-cp-pill' + (catSt.open ? " is-on" : "") + '" data-act="lflt" data-id="open">' + esc(T.open) + "</button>" +
      '<button type="button" class="hgn-cp-pill' + (catSt.free ? " is-on" : "") + '" data-act="lflt" data-id="free">' + esc(T.free) + "</button></div>" +
      (catSt.menu ? sortMenuHtml(catSt, T) : "") +
      (shown.length ? '<div class="hgn-cp-list">' + shown.map((m) => catCard(m, L, catMap)).join("") + "</div>"
        : '<p class="hgn-page-empty">' + esc(list.length ? T.none : T.nores) + "</p>");
  }
  const BACK_CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  const SEARCH_IC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
  function onCatClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && act.getAttribute("data-act") === "back") {
      if (history.length > 1) history.back(); else go("/" + lang() + "/home");
      return;
    }
    if (act && act.getAttribute("data-act") === "csearch") { go("/" + lang() + "/search"); return; }
    if (act && listClick(act, catSt)) { catSig = ""; renderCategoryPage(); return; }
    onHomeClick(e);
  }

  /* ---------- PAGES (2026-10-18): "Stores near you" (See all) and "Favourites" ----------
     Hyperzod has no page for these, so they open on top of Home: /home?hgn=stores and /home?hgn=favs.
     Back goes to where the customer came from. */
  let pageSig = "", pageWas = "", pageSt = newListState();
  function pageQuery() {
    const r = curRoute();
    const q = r && r.query && r.query.hgn;
    return isHomePath(currentPath()) && (q === "stores" || q === "favs") ? q : "";
  }
  function renderPage() {
    const q = pageQuery();
    let pg = document.getElementById("hgn-page");
    if (q !== pageWas) { pageWas = q; pageSt = newListState(); }
    const hd = q ? homeData() : null;
    /* scroll lock only once the page can be drawn (2026-10-20): it was set before the Home data check, freezing the screen with no page */
    document.documentElement.classList.toggle("hgn-page-open", !!(q && hd));
    if (!q) { if (pg) pg.remove(); pageSig = ""; return; }
    if (!hd) return;
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L];
    const list = q === "favs" ? favStoresOf(hd) : nearStores(hd);
    const favIds = {};
    favList().forEach((f) => { favIds[f.id] = true; });
    const sig = [q, L, JSON.stringify(pageSt), list.map((m) => m._id || m.id).join(",")].join("|"); /* no favourites (2026-10-20): hearts flip in place */
    if (!pg) {
      pg = document.createElement("div");
      pg.id = "hgn-page";
      pg.addEventListener("click", onPageClick);
      document.body.appendChild(pg);
      pageSig = "";
    }
    if (sig === pageSig) return;
    pageSig = sig;
    pg.setAttribute("dir", ar ? "rtl" : "ltr");
    const body = (q === "favs" && !list.length) ? '<p class="hgn-page-empty">' + esc(t.nofavs) + "</p>"
      : storeListHtml(pageSt, list, L, t, favIds, hd, null, q === "stores");
    pg.innerHTML = '<div class="hgn-page-top"><div class="hgn-page-bar"><button type="button" class="hgn-page-back" data-act="back" aria-label="' + esc(t.back) + '">' + LICON.back + "</button>" +
      '<h1 class="hgn-page-title">' + esc(q === "favs" ? t.favs : t.near) + "</h1></div></div>" + body;
    watchProdRows(pg);
  }
  function onPageClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && act.getAttribute("data-act") === "back") {
      if (history.length > 1) history.back(); else go("/" + lang() + "/home");
      return;
    }
    if (act && listClick(act, pageSt)) {
      const wasCat = act.getAttribute("data-act") === "lcat";
      pageSig = "";
      renderPage();
      const pg = document.getElementById("hgn-page");
      if (pg && wasCat) pg.scrollTop = 0;
      return;
    }
    onHomeClick(e);
  }

  /* ---------- SEARCH RESULTS (2026-10-18) ----------
     With a search on the Search page, our list replaces Hyperzod's results: the stores whose products matched (with
     those products), then the stores whose name matched. Same two searches Hyperzod's own page makes. If they fail,
     Hyperzod's own results stay. */
  let sres = { key: "", busy: false, list: null, prods: {}, failed: false }, sresSig = "", sresSt = newListState(), sresQ = "";
  function searchQuery() {
    const r = curRoute();
    /* just emptied (2026-10-20): the address keeps the old word for ~450ms until global-footer-2.js takes it out; while the
       focused box is empty there is no search, so the results step aside at once */
    const inp = document.querySelector("#MultiVendorSearch input");
    if (inp && document.activeElement === inp && !inp.value.trim()) return "";
    /* Hyperzod writes the search into the address bar itself (history.replaceState), so the router's query stays
       empty when the customer types or taps a suggestion; read the address bar first (found 2026-10-19) */
    let q = new URLSearchParams(location.search).get("q");
    if (typeof q !== "string") q = r && r.query && r.query.q;
    return /^\/(en|ar)\/search\/?$/.test(currentPath()) && typeof q === "string" ? q.trim() : "";
  }
  function loadSearch(key, q, sel, L) {
    sres = { key: key, busy: true, list: null, prods: {}, failed: false };
    const base = "https://api.hyperzod.app/store/v1/search?location%5B%5D=" + sel.latitude + "&location%5B%5D=" + sel.longitude +
      "&q=" + encodeURIComponent(q) + "&locale=" + L + "&search_type=";
    const H = { headers: { accept: "application/json", "x-tenant": location.host, "x-client-device": "web" } };
    const get = (type) => fetch(base + type, H).then((r) => r.json()).then((j) => (j && Array.isArray(j.data) ? j.data : []));
    Promise.all([get("product"), get("merchant")]).then((res) => {
      if (sres.key !== key) return;
      const out = [], seen = {}, prods = {};
      res[0].forEach((m) => {
        const id = m && (m._id || m.id);
        if (!id || seen[id]) return;
        seen[id] = true; out.push(m);
        prods[id] = (m.products || []).filter((p) => prodImg(p)).slice(0, 10);
      });
      res[1].forEach((m) => { const id = m && (m._id || m.id); if (id && !seen[id]) { seen[id] = true; out.push(m); } });
      sres.list = out; sres.prods = prods;
    }, () => { if (sres.key === key) sres.failed = true; }).then(() => { if (sres.key === key) { sres.busy = false; sresSig = ""; schedule(); } });
  }
  function renderSearchResults() {
    const q = searchQuery();
    const wrap = document.querySelector("#MultiVendorSearch .scheme-global-search-results");
    let box = document.getElementById("hgn-sres");
    const de = document.documentElement;
    const off = () => { de.classList.toggle("hgn-sres-on", false); if (box) box.remove(); sresSig = ""; }; /* toggle (2026-10-20) */
    if (!q || !wrap) { off(); return; }
    const g = vueGlobals(), S = g && g.$store && g.$store.state;
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    const hd = homeData();
    if (!sel || typeof sel.latitude !== "number" || typeof sel.longitude !== "number" || !hd) { off(); return; }
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L];
    if (q !== sresQ) { sresQ = q; sresSt = newListState(); }
    const key = [q, L, sel.latitude.toFixed(5), sel.longitude.toFixed(5)].join("|");
    if (sres.key !== key) loadSearch(key, q, sel, L);
    if (sres.failed) { off(); return; }
    de.classList.toggle("hgn-sres-on", true);
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-sres";
      box.addEventListener("click", onSresClick);
      sresSig = "";
    }
    if (box.nextElementSibling !== wrap) wrap.insertAdjacentElement("beforebegin", box);
    const favIds = {};
    favList().forEach((f) => { favIds[f.id] = true; });
    const sig = [key, sres.busy, JSON.stringify(sresSt), sres.list ? sres.list.length : -1].join("|"); /* no favourites (2026-10-20): hearts flip in place */
    if (sig === sresSig) return;
    sresSig = sig;
    box.setAttribute("dir", ar ? "rtl" : "ltr");
    if (!sres.list) { box.innerHTML = '<div class="hgn-sres-loading"><span></span><span></span><span></span></div>'; return; }
    box.innerHTML = storeListHtml(sresSt, sres.list, L, t, favIds, hd, (m) => {
      const p = sres.prods[m._id || m.id];
      return p && p.length ? p : undefined;
    }, true);
    watchProdRows(box);
  }
  function onSresClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && listClick(act, sresSt)) { sresSig = ""; renderSearchResults(); return; }
    onHomeClick(e);
  }

  /* Favourites row in Account (Activity group, under My Orders): opens the Favourites page */
  function renderAccountFav() {
    if (!/^\/(en|ar)\/profile\/?$/.test(currentPath())) return;
    const list = document.querySelector("#ProfileSideBar .navigation-list");
    const orders = list && list.querySelector('a.scheme-profile-nav-item[href$="/profile/orders"]');
    if (!orders) return;
    const L = lang(), t = TXT[L];
    let row = list.querySelector(".hgn-acct-fav");
    if (!row) {
      row = orders.cloneNode(true);
      row.classList.add("hgn-acct-fav");
      row.removeAttribute("data-test-id");
      row.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); go("/" + lang() + "/home?hgn=favs"); });
      const ic = row.querySelector(".scheme-profile-icon");
      if (ic) ic.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/></svg>';
    }
    /* href under /profile/ so the Account page groups it with My Orders (Activity) */
    const href = "/" + L + "/profile/favourites";
    if (row.getAttribute("href") !== href) row.setAttribute("href", href);
    const ttl = row.querySelector(".nav-text");
    if (ttl && ttl.textContent !== t.favRow) ttl.textContent = t.favRow;
    if (row.previousElementSibling !== orders) orders.insertAdjacentElement("afterend", row);
  }

  /* Favourites row at the top of the Search page (only while the start screen shows, not with search results)
     (2026-10-20): it sits right above our start screen (#hgn-sland) and runs after it. Both used to claim the spot above
     Hyperzod's start screen, so they swapped places on every run, which re-ran everything about 25 times a second; it also
     stayed up while typing and with results, because Hyperzod keeps its start screen in the page then. */
  let searchFavSig = "";
  function renderSearchFav() {
    const land = document.documentElement.classList.contains("hgn-sland-on") && document.getElementById("hgn-sland");
    let box = document.getElementById("hgn-sfav");
    const hd = homeData();
    const list = land && hd ? favStoresOf(hd) : [];
    if (!list.length) { if (box) box.remove(); searchFavSig = ""; return; }
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L];
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-sfav";
      box.addEventListener("click", onHomeClick);
      searchFavSig = "";
    }
    if (box.nextElementSibling !== land) land.insertAdjacentElement("beforebegin", box);
    const sig = [L, list.map((m) => m._id || m.id).join(",")].join("|");
    if (sig === searchFavSig) return;
    searchFavSig = sig;
    box.setAttribute("dir", ar ? "rtl" : "ltr");
    /* D2 (chosen 2026-10-18): round store pictures with the name underneath */
    const all = "/" + L + "/home?hgn=favs";
    box.innerHTML = '<section class="hgn-stores"><div class="hgn-head"><h2 class="hgn-h2">' + esc(t.favs) + "</h2>" +
      '<a class="hgn-pill" href="' + esc(all) + '" data-href="' + esc(all) + '">' + esc(t.seeAll) + "</a></div>" +
      '<div class="hgn-circles">' + list.map((m) => {
        const href = storeHref(m, L), img = storeImg(m, "logo") || storeImg(m, "cover");
        return '<a class="hgn-circ" href="' + esc(href) + '" data-href="' + esc(href) + '"><span class="hgn-circ-img">' +
          (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
          '<span class="hgn-circ-name">' + esc(m.name) + "</span></a>";
      }).join("") + "</div></section>";
  }

  /* ---------- SEARCH START SCREEN (E2, chosen 2026-10-19) ----------
     Before the customer types: a top row like Home's (back, "Search", bag) above the white search box, then
     Recent searches as clean rows (E2), Popular searches as lavender pills (E1), then 4 categories with See all (opens all of them in place).
     The searches are the same ones the website's search screen already keeps (global-footer-2.js builds them as buttons in
     #hg-search-discovery, which stays hidden in the app); tapping a row presses that button, so the search runs the same way.
     Hidden while there is text in the search box or search results are showing. */
  let slandSig = "", slandAll = false;
  const STXT2 = {
    en: { search: "Search", back: "Back", recent: "Recent searches", popular: "Popular searches" },
    ar: { search: "بحث", back: "رجوع", recent: "عمليات البحث الأخيرة", popular: "عمليات بحث شائعة" }
  };
  const SL_ICON = {
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    go: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  function renderSearchLanding() {
    const de = document.documentElement;
    const root = document.getElementById("MultiVendorSearch");
    const onSearch = /^\/(en|ar)\/search\/?$/.test(currentPath()) && root;
    const hdr = onSearch && root.querySelector(".scheme-global-search-mobile-header");
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L], s2 = STXT2[L];
    /* top row of the header (on the start screen and with results) */
    let top = document.getElementById("hgn-shead");
    if (hdr) {
      if (!top) {
        top = document.createElement("div");
        top.id = "hgn-shead";
        top.addEventListener("click", (e) => {
          if (!e.target.closest("[data-act=sback]")) return;
          const g = vueGlobals();
          if (history.length > 1 && g && g.$router) g.$router.back(); else go("/" + lang() + "/home");
        });
      }
      if (top.parentElement !== hdr || hdr.firstElementChild !== top) hdr.insertAdjacentElement("afterbegin", top);
      const th = '<button type="button" class="hgn-shead-back" data-act="sback" aria-label="' + esc(s2.back) + '">' + SL_ICON.back + '</button><span class="hgn-shead-title">' + esc(s2.search) + "</span>";
      if (top.getAttribute("data-l") !== L) { top.setAttribute("data-l", L); top.innerHTML = th; }
      de.classList.toggle("hgn-shead-on", true); /* toggle (2026-10-20): no class rewrite on every run */
    } else {
      de.classList.toggle("hgn-shead-on", false);
      if (top) top.remove();
    }
    /* start screen body */
    const start = onSearch && root.querySelector(".scheme-global-search-recent");
    const input = onSearch && root.querySelector("input");
    const typing = !!(input && input.value.trim());
    let box = document.getElementById("hgn-sland");
    const off = () => { de.classList.toggle("hgn-sland-on", false); if (box) box.remove(); slandSig = ""; };
    /* (2026-10-20) stays up while typing until our results (or their loading rows, html.hgn-sres-on) replace it, so the
       screen is never blank in between (Hyperzod's own results box, hidden while this shows, held only an empty or loading
       box for about half a second). It steps aside while typing only when our search failed, so Hyperzod's own results
       show instead. Hyperzod's old start screen is hidden by app-new.css whatever happens here. */
    if (!start || de.classList.contains("hgn-sres-on") || (typing && sres.failed)) { off(); return; }
    /* recent and popular searches (2026-10-20): from global-footer-2.js (window.hgSearch); the buttons in
       #hg-search-discovery are read only when hgSearch is missing. They need no Home data; only the categories do. */
    const hs = window.hgSearch;
    const words = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === "string" && x.trim()) : []);
    let recent = [], popular = [];
    if (hs && typeof hs.recent === "function" && typeof hs.popular === "function") {
      try { recent = words(hs.recent()).slice(0, 3); popular = words(hs.popular(ar)).slice(0, 6); } catch (e) {}
    } else {
      const disc = document.getElementById("hg-search-discovery");
      const qs = (sel) => disc ? [...disc.querySelectorAll(sel)].map((b) => b.getAttribute("data-q")).filter(Boolean) : [];
      recent = qs(".hg-sd-chip:not(.pop)").slice(0, 3);
      popular = qs(".hg-sd-chip.pop").slice(0, 6);
    }
    const hd = homeData();
    const cats = hd ? (hd.merchant_categories || []).filter((c) => c && c.status !== false && c.status !== 0)
      .slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)) : [];
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-sland";
      box.addEventListener("click", onSlandClick);
      slandSig = "";
    }
    if (box.nextElementSibling !== start) start.insertAdjacentElement("beforebegin", box);
    de.classList.toggle("hgn-sland-on", true);
    const sig = [L, slandAll, recent.join("|"), popular.join("|"), cats.map((c) => c.id || c._id).join(",")].join("#");
    if (sig === slandSig) return;
    slandSig = sig;
    box.setAttribute("dir", ar ? "rtl" : "ltr");
    const rows = (list, icon, cls) => '<div class="hgn-sl-rows">' + list.map((q) =>
      '<button type="button" class="hgn-sl-row ' + cls + '" data-act="sq" data-q="' + esc(q) + '"><span class="hgn-sl-ic">' + icon + '</span><span class="hgn-sl-q">' + esc(q) + '</span><span class="hgn-sl-go">' + SL_ICON.go + "</span></button>").join("") + "</div>";
    let html = "";
    if (recent.length) html += '<section class="hgn-sl-sec"><h2 class="hgn-sl-h">' + esc(s2.recent) + "</h2>" + rows(recent, SL_ICON.clock, "is-recent") + "</section>";
    if (popular.length) html += '<section class="hgn-sl-sec"><h2 class="hgn-sl-h">' + esc(s2.popular) + "</h2>" + '<div class="hgn-sl-pills">' + popular.map((q) =>
      '<button type="button" class="hgn-sl-pill" data-act="sq" data-q="' + esc(q) + '">' + esc(q) + "</button>").join("") + "</div></section>";
    if (cats.length) {
      const shown = slandAll ? cats : cats.slice(0, 4);
      html += '<section class="hgn-sl-sec"><div class="hgn-sl-head"><h2 class="hgn-sl-h">' + esc(t.cats) + "</h2>" +
        (cats.length > 4 ? '<button type="button" class="hgn-sl-all" data-act="sall">' + esc(slandAll ? t.less : t.seeAll) + "</button>" : "") + "</div>" +
        '<div class="hgn-cat-grid">' + shown.map((c) => {
          const href = catHref(c, L), photo = catPhoto(c), img = photo || c.image;
          return '<a class="hgn-cat' + (photo ? " hgn-cat-photo" : "") + '" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
            '<span class="hgn-cat-ring">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
            '<span class="hgn-cat-name">' + esc(catLabel(c)) + "</span></a>";
        }).join("") + "</div></section>";
    }
    box.innerHTML = html;
  }
  function onSlandClick(e) {
    const act = e.target.closest("[data-act]");
    if (act && act.getAttribute("data-act") === "sall") { slandAll = !slandAll; slandSig = ""; renderSearchLanding(); return; }
    if (act && act.getAttribute("data-act") === "sq") {
      const q = act.getAttribute("data-q");
      /* (2026-10-20) global-footer-2.js runs it (remembers it, types it into Hyperzod's box); the old button is the fallback */
      const hs = window.hgSearch;
      if (hs && typeof hs.run === "function") { try { hs.run(q); } catch (e) {} return; }
      const disc = document.getElementById("hg-search-discovery");
      const b = disc && [...disc.querySelectorAll("[data-q]")].find((x) => x.getAttribute("data-q") === q);
      if (b) b.click();
      return;
    }
    onHomeClick(e);
  }

  /* each part runs on its own (2026-10-18): before, one error in any part (for example the header on a screen it
     doesn't expect) silently stopped every part after it, so Home or the store design could fail to draw */
  const PARTS = [
    /* renderSearchFav after renderSearchLanding (2026-10-20): it sits above the start screen it draws */
    hookRouter, renderPage, renderAccountFav, renderSearchResults, renderSearchLanding, renderSearchFav, renderCategoryPage,
    applyHyperGoHeader, applyLocLang,
    () => { if (isHomePath(currentPath())) renderHome(); },
    renderStore
  ];
  function tick() {
    for (let i = 0; i < PARTS.length; i++) {
      try { PARTS[i](); } catch (e) {}
    }
  }

  let timer = null;
  function schedule() {
    if (timer) return;
    timer = setTimeout(() => { timer = null; tick(); }, 40);
  }

  /* + #hgn-sland, #hgn-shead and both cart buttons (2026-10-20): changes inside our own boxes never need a re-run */
  const NOISE = "#hgn-page,#hgn-sres,#hgn-catpage,#hgn-sfav,.hgn-acct-fav,#hgn-sinfo,.hgn-open,.hgn-thumb,.hg-ph,#hgn-home,#hgn-sland,#hgn-shead,#hg-cart-btn,#hg-search-cart,#hg-launch";
  function relevant(recs) {
    for (let i = 0; i < recs.length; i++) {
      const r = recs[i], el = r.target && (r.target.nodeType === 1 ? r.target : r.target.parentNode);
      if (el && el.closest && el.closest(NOISE)) continue;
      return true;
    }
    return false;
  }

  let syncFrame = false;
  function start() {
    tick();
    new MutationObserver((recs) => {
      if (!relevant(recs)) return;
      /* header or Home just (re)created, e.g. coming Back to Home: draw it before the next paint, so nothing flashes */
      const hdr = document.getElementById("MultiVendorHeaderRoot");
      const bareHeader = hdr && !hdr.style.getPropertyValue("background-color") && document.querySelector(".home-mobile-search-row");
      const bareHome = document.getElementById("MultiVendorHome") && !document.getElementById("hgn-home") && isHomePath(currentPath());
      /* (2026-10-20) a new Search screen too (e.g. Back from a store): its header and start screen were drawn 40ms late */
      const sr = document.getElementById("MultiVendorSearch");
      const bareSearch = sr && !sr.querySelector("#hgn-shead") && /^\/(en|ar)\/search\/?$/.test(currentPath());
      /* at most once per frame (2026-10-20): while Home's data is still loading these stay true, and every change ran a full tick */
      if ((bareHeader || bareHome || bareSearch) && !syncFrame) {
        syncFrame = true;
        requestAnimationFrame(() => { syncFrame = false; });
        tick();
        return;
      }
      schedule();
    }).observe(document.body, { childList: true, subtree: true });
    setInterval(schedule, 1500);
  }

  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
