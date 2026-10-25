/* hg-version 2026-10-25-2010 */
/* HYPERGO APP: NEW HOME (rebuild started 2026-10-15)
   Loaded by app-footer.js in the app and, since 2026-10-20, by web-footer.js on the website (phones and desktop; desktop
   gets a wide layout in app-new.css). global-footer-1.js skips its own phone header and Home code wherever this runs;
   every other screen, the desktop header, the Account page and the bottom nav are still drawn by the old code.
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
    /* (2026-10-21) the bar is as tall as Talabat's (172 with the clock) even with our address line:
       4 on top, the two text lines in a 42 row, the search box 8 under them and 21 above the bottom edge */
    root.style.setProperty("padding-top", "4px", "important");

    /* darker grey search placeholder via the theme's own variable */
    root.style.setProperty("--scheme-header-search-placeholder", "#1F2430");


    /* TOP HEADER — ONE LAYER ON THE ROOT, FLAT PURPLE, STRAIGHT BOTTOM EDGE, ROUNDED BOTTOM CORNERS
       (tested in Console: root carries color + edge once,
       inner layers transparent, so there is no seam) */

    root.style.setProperty("background-color", "#8640FC", "important");
    /* (2026-10-22, appetite accents) a soft gloss: the top stays #8640FC (the status bar strip colour), deeper at the bottom */
    root.style.setProperty("background-image", "linear-gradient(180deg,#8640FC 0%,#8640FC 40%,#7432EE 100%)", "important");
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

    searchRow.style.setProperty("padding", "8px 16px 21px", "important"); /* 2026-10-21: Talabat's 21 under the search box (was 10 / 22) */
    if (toolbarContent) { /* 2026-10-21: 42 tall (was Hyperzod's 50), set at once (its 0.2s height animation would make the bar shrink on load) */
      toolbarContent.style.setProperty("height", "42px", "important");
      toolbarContent.style.setProperty("transition", "none", "important");
    }


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

      /* Talabat sizes (2026-10-20): "Deliver to" 16pt regular, the place 16pt semibold, the address 13pt */
      location.style.setProperty(
        "font-size",
        "calc(var(--hg-fs, 1px) * 16)",
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
        sp(label, "font-size", "calc(var(--hg-fs, 1px) * 14)"); /* (2026-10-22) Deliver to 14, place 14 semibold, address 12 (were 16 / 16 / 13) */
        sp(label, "font-weight", "400");
        sp(label, "white-space", "nowrap");
        sp(label, "margin-inline-start", "4px");

        sp(nameEl, "color", "#FFFFFF");
        sp(nameEl, "font-size", "calc(var(--hg-fs, 1px) * 14)");
        sp(nameEl, "font-weight", "600");

        const chevPath = chevron && chevron.querySelector("path");
        sp(chevPath, "stroke", "#FFFFFF");
        sp(chevPath, "fill", "none");

        sp(subEl, "color", "#FFFFFF");
        sp(subEl, "font-size", "calc(var(--hg-fs, 1px) * 12)");

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
        "1px solid #E5E5E5",
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
      fieldInput.style.setProperty("padding-inline-start", "41px", "important");
      fieldInput.style.setProperty("padding-inline-end", "48px", "important");

      fieldInput.style.setProperty(
        "font-size",
        "calc(var(--hg-fs, 1px) * 16)",
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
       Talabat's magnifier (2026-10-20): 15pt with a thin line, 15 inside the box; the text starts 10 after it. */

    if (
      field &&
      !field.querySelector(".hg-search-icon")
    ) {

      const icon = document.createElement("span");
      icon.className = "hg-search-icon";
      icon.style.cssText =
        "position:absolute;inset-inline-start:15px;top:50%;width:16px;height:16px;" + /* logical (2026-10-20): mirrors in Arabic */
        "transform:translateY(-50%);z-index:20;pointer-events:none;display:block;";
      icon.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' style='display:block'>" +
        "<circle cx='6.5' cy='6.35' r='5.17' fill='none' stroke-width='1.5' style='stroke:#2A2F38'/>" +
        "<path d='M10.25 10.1L15 14.8' stroke-width='1.5' stroke-linecap='round' style='stroke:#2A2F38'/></svg>";
      field.appendChild(icon);

    }


    /* ROTATING PLACEHOLDER: "Search Items" -> categories */

    ensureRotatingPlaceholder(field, { left: 41, size: 16, weight: 400 });

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
  const SIDEWAYS = "#hgn-home,.hgn-slides,.hgn-store-row,.hgn-sp-chips,.hgn-circles,.hgn-tabs,.hgn-filters,.hgn-sb-prods,.hgn-cp-pills,.hgn-occ-row,.hgn-joy-row,.hgn-mib-row";
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
        "font-size:calc(var(--hg-fs, 1px) * " + cfg.size + ");font-weight:" + cfg.weight + ";letter-spacing:var(--hg-ls, 0);";
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
        "#hg-cart-btn{position:absolute;right:16px;top:calc(var(--native-status-bar-height,0px) + 7px);width:40px;height:40px;border-radius:50%;" + /* 40 (Talabat), centred on the two text lines (2026-10-21) */
        "background:linear-gradient(180deg,#FFFFFF,#F1ECFF) !important;box-shadow:0 4px 10px rgba(54,25,133,.25),inset 0 -2px 0 rgba(90,41,222,.08);" + /* glossy white circle (2026-10-22) */
        "border:0;padding:0;margin:0;display:flex;align-items:center;justify-content:center;z-index:10000;" +
        "cursor:pointer;-webkit-tap-highlight-color:transparent;outline:none;}" +
        "#hg-cart-btn:active{background:#F2F2F2 !important;}" +
        "html[lang^='ar'] #hg-cart-btn{right:auto;left:16px;}" +
        "html[lang^='ar'] #MultiVendorHeaderRoot::before{right:auto;left:6px;clip-path:inset(0 0 24px 0 round 0 0 0 20px);}" +
        /* badge on the inline end corner (2026-10-20, was right): mirrors in Arabic */
        "#hg-cart-btn .hg-cart-badge{position:absolute;top:0;inset-inline-end:0;box-sizing:border-box;width:11px;height:11px;border-radius:50%;" +
        "background:radial-gradient(circle at 35% 30%,#EFFFEC 0%,#ACE4AA 55%,#7CC878 100%);" + /* green pearl (2026-10-22, was red) */
        "border:2px solid #8640FC;display:none;}" +
        "#hg-cart-btn .hg-cart-badge.on{display:block;}" +
        "#hg-cart-btn .hg-cart-badge.num{top:-3px;inset-inline-end:-3px;width:auto;min-width:17px;height:17px;padding:0 3px;border-radius:9px;text-align:center;" +
        "font-size:10px !important;line-height:13px !important;font-weight:800 !important;color:#1B2023 !important;}";
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
  /* Shop by occasion cards: title in English and Arabic and the Hyperzod category each one opens.
     (2026-10-22) Pictures: the stores' own photos (Nouf's Merchants folder: Arham Gift, Golden Petals, Supplemento,
     Rocky and Eva), cropped with the product in the middle, in the repo's occasion-photos folder. The category
     pictures are only used on the category tiles (Nouf, 2026-10-22); the old occasion-cutouts folder is no longer used. */
  const OCC_IMG_BASE = "https://pexy613.github.io/hypergo-site/occasion-photos/";
  const OCCASIONS = [
    { en: "Birthday", ar: "عيد ميلاد", cat: "6a9bf0d4288fb9d9e903a7e9", img: "birthday" },
    { en: "Get well soon", ar: "سلامتك", cat: "6a9bee55dda6795f8c065932", img: "get-well-soon" },
    { en: "Gym day", ar: "يوم التمرين", cat: "6a9befca288fb9d9e903a7e7", img: "gym-day" },
    { en: "Party night", ar: "ليلة الحفلة", cat: "6a9befa1fbfc7198220f95d2", img: "party-night" }
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

  /* ---------- APPETITE ACCENTS (2026-10-22, from "HyperGo Appetite Accents", chosen by Nouf) ----------
     Two display fonts for a few words only: Plus Jakarta Sans 800 and Instrument Serif italic (Google Fonts, loaded once).
     In Arabic both fall back to the phone's own font (see app-new.css), so no Arabic word is ever drawn in a Latin font.
     Every part below shows only what Hyperzod's own data says; a part with nothing true to show is left out. */
  function ensureAccentFonts() {
    if (document.getElementById("hgn-accent-fonts")) return;
    const l = document.createElement("link");
    l.id = "hgn-accent-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Plus+Jakarta+Sans:wght@700;800&display=swap";
    (document.head || document.documentElement).appendChild(l);
  }
  const ATXT = {
    en: { joysA: "Little", joysB: "joys", joysSub: "Gifts and flowers from shops near you", joysFree: "Gifts and flowers, delivered free",
      mibA: "Made in", mibB: "Bahrain", mibEye: "NEW ON HYPERGO", isNew: "New",
      mibSub: (n) => "<b>" + n + "</b> local shop" + (n === 1 ? "" : "s") + " joined in the last 2 weeks",
      age: (d) => d <= 0 ? "Joined today" : d === 1 ? "Joined yesterday" : "Joined " + d + " days ago",
      your: "Your order", from: "Your order from ", more: (n) => "+" + n + " more",
      st: { 1: "Order placed", 2: "Being prepared", 3: "Ready, waiting for the rider", 4: "On the way to you" },
      pst: { 3: "Ready for pickup", 4: "Collected" }, route: ["Shop", "On the way", "Your door"] },
    ar: { joysA: "أفراح", joysB: "صغيرة", joysSub: "هدايا وورد من محلات قريبة منك", joysFree: "هدايا وورد، والتوصيل مجاني",
      mibA: "صُنع في", mibB: "البحرين", mibEye: "جديد على هايبرجو", isNew: "جديد",
      mibSub: (n) => "محلات محلية جديدة خلال آخر أسبوعين: <b>" + n + "</b>",
      age: (d) => d <= 0 ? "انضم اليوم" : d === 1 ? "انضم أمس" : d === 2 ? "انضم قبل يومين" : "انضم قبل " + d + (d <= 10 ? " أيام" : " يومًا"),
      your: "طلبك", from: "طلبك من ", more: (n) => "+" + n + " " + (n === 1 ? "طلب آخر" : "طلبات أخرى"),
      st: { 1: "تم استلام الطلب", 2: "قيد التحضير", 3: "جاهز، بانتظار المندوب", 4: "في الطريق إليك" },
      pst: { 3: "جاهز للاستلام", 4: "تم الاستلام" }, route: ["المتجر", "في الطريق", "بابك"] }
  };

  /* Campaign banners (design A, chosen 2026-10-22): mixed into the banner carousel, one of ours then one shop banner.
     Each one opens its store and shows only while that store is in the customer's nearby list and taking orders.
     Photos: the stores' own photos (Nouf's Merchants folder), cropped to each frame, in the repo's campaigns folder.
     The "This weekend only, free delivery" banner is NOT here on purpose (not true yet). */
  const CAMP_BASE = "https://pexy613.github.io/hypergo-site/campaigns/";
  const CAMPAIGNS = [
    { id: "6a92c1dce473eb7393060782", kind: "k1", img: "make-their-day",
      en: { a: "Make their", b: "day.", cta: "Shop flowers" }, ar: { a: "اصنع", b: "يومهم.", cta: "تسوّق الورد" } },
    { id: "6a89808c7a915655e2058cb3", kind: "k2", img: "made-in-bahrain",
      en: { eye: "LOCAL FLORISTS", a: "Made in", b: "Bahrain." }, ar: { eye: "محلات ورد محلية", a: "صُنع في", b: "البحرين." } },
    { id: "6a801c8b4873cca9ba0a9c43", kind: "k3", img: "gym-day",
      en: { eye: "SUPPLEMENTS", a: "Gym day,", b: "sorted.", cta: "Shop now" }, ar: { eye: "مكملات غذائية", a: "يوم الجيم،", b: "جاهز.", cta: "تسوّق الآن" } },
    { id: "6a957cd366d1657db70e7742", kind: "k4", img: "party",
      en: { eye: "GIFT SHOPS", a: "Bring the", b: "party", c: " home." }, ar: { eye: "محلات الهدايا", a: "خلّ", b: "الحفلة", c: " في البيت." } }
  ];
  function campaignsFor(hd) {
    const byId = {};
    nearStores(hd).forEach((m) => { byId[m._id || m.id] = m; });
    return CAMPAIGNS.map((c) => ({ c: c, m: byId[c.id] })).filter((x) => x.m && x.m.slug && x.m.is_accepting_orders !== false);
  }
  function campSlide(c, m, L) {
    const T = c[L], href = storeHref(m, L);
    seenStores[m._id || m.id] = m;
    const img = '<img src="' + esc(CAMP_BASE + c.img + ".webp") + '" alt="" decoding="async">';
    const eye = T.eye ? '<span class="hgn-k-eye">' + esc(T.eye) + "</span>" : "";
    const cta = T.cta ? '<span class="hgn-k-cta">' + esc(T.cta) + "</span>" : "";
    let h = "", pic = "", extra = "";
    if (c.kind === "k1") {
      h = esc(T.a) + '<br><span class="hgn-serif hgn-k1-b">' + esc(T.b) + "</span>";
      pic = '<span class="hgn-k-pic hgn-k1-pic">' + img + '<span class="hgn-k1-gloss" aria-hidden="true"></span></span>';
    } else if (c.kind === "k2") {
      h = esc(T.a) + '<br><span class="hgn-k2-b">' + esc(T.b) + "</span>";
      pic = '<span class="hgn-k-pic hgn-k2-pic">' + img + "</span>";
    } else if (c.kind === "k3") {
      h = esc(T.a) + '<br><span class="hgn-k3-b">' + esc(T.b) + "</span>";
      pic = '<span class="hgn-k-pic hgn-k3-pic">' + img + "</span>";
      extra = '<span class="hgn-k3-fade" aria-hidden="true"></span>';
    } else {
      h = esc(T.a) + '<br><span class="hgn-k4-b">' + esc(T.b) + "</span>" + esc(T.c);
      pic = '<span class="hgn-k-pic hgn-k4-pic">' + img + "</span>";
      extra = '<span class="hgn-k4-c hgn-k4-c1" aria-hidden="true"></span><span class="hgn-k4-c hgn-k4-c2" aria-hidden="true"></span><span class="hgn-k4-c hgn-k4-c3" aria-hidden="true"></span>';
    }
    const label = [T.eye, T.a + " " + T.b + (T.c || ""), m.name].filter(Boolean).join(", ");
    return '<a class="hgn-slide hgn-camp hgn-' + c.kind + '" href="' + esc(href) + '" data-href="' + esc(href) + '" aria-label="' + esc(label) + '">' +
      (c.kind === "k3" ? pic + extra : extra) +
      '<span class="hgn-k-txt">' + eye + '<span class="hgn-k-h hgn-jak">' + h + "</span>" + cta + "</span>" +
      (c.kind === "k3" ? "" : pic) + "</a>";
  }

  /* New shops: the date a store joined Hyperzod is inside its id (the first 8 characters are its creation time).
     "New" = joined in the last 14 days (chosen by Nouf 2026-10-22). The store called "HyperGo" itself is left out. */
  const NEW_DAYS = 14;
  function joinedAt(m) {
    const id = String((m && (m._id || m.id)) || "");
    return /^[0-9a-f]{24}$/i.test(id) ? parseInt(id.slice(0, 8), 16) * 1000 : 0;
  }
  let newMemo = { src: null, at: 0, out: [] };
  function newStores(hd) {
    const src = nearStores(hd), now = Date.now();
    if (newMemo.src === src && now - newMemo.at < 60000) return newMemo.out;
    const out = src.filter((m) => {
      const t = joinedAt(m);
      return t && t <= now + 864e5 && now - t <= NEW_DAYS * 864e5 && !/^\s*hypergo\s*$/i.test(m.name || "");
    });
    newMemo = { src: src, at: now, out: out };
    return out;
  }
  /* at most 2 tiles get the tag (2026-10-22): new shops are in most categories, and a tag on every tile says nothing.
     Only tiles shown on Home count; the two with the most new shops win (then the most recent one). */
  function newCatIds(hd, shownIds) {
    const n = {}, last = {}, ids = {};
    newStores(hd).forEach((m) => {
      const t = joinedAt(m);
      (m.merchant_category_ids || []).forEach((c) => {
        if (shownIds.indexOf(c) === -1) return;
        n[c] = (n[c] || 0) + 1;
        if (!last[c] || t > last[c]) last[c] = t;
      });
    });
    Object.keys(n).sort((a, b) => n[b] - n[a] || last[b] - last[a]).slice(0, 2).forEach((c) => { ids[c] = true; });
    return ids;
  }

  /* ORDER CARD: only while the customer has an order in progress (Hyperzod status 1 placed, 2 accepted, 3 ready,
     4 collected; 5 completed and 6 cancelled never show). The list is Hyperzod's own (getOnGoingOrders), kept live by
     Hyperzod's order updates (watchOrders). It is loaded here the same way Hyperzod's own order strip loads it, every
     60 seconds at most, only when signed in. An order whose last status change is older than 48 hours is not shown. */
  const orderFetch = { at: 0, busy: false, user: "" };
  const orderWatched = {};
  let orderShown = {};
  function orderStore() { const g = vueGlobals(); return g && g.$store; }
  function loadOrders(st, uid) {
    let tok = "";
    try { tok = String(localStorage.getItem("access_token") || "").replace(/^"|"$/g, ""); } catch (e) {}
    if (!tok || orderFetch.busy || (orderFetch.user === uid && Date.now() - orderFetch.at < 60000)) return;
    orderFetch.busy = true;
    orderFetch.user = uid;
    orderFetch.at = Date.now();
    fetch("https://api.hyperzod.app/store/v1/order/getOrdersByUserId?user_id=" + encodeURIComponent(uid) + "&per_page=3&page=1", {
      headers: { accept: "application/json", authorization: "Bearer " + tok, "x-tenant": location.host, "x-client-device": "web" }
    }).then((r) => r.json()).then((j) => {
      const d = j && j.data;
      const list = d && Array.isArray(d.data) ? d.data : (Array.isArray(d) ? d : null);
      if (!list) return;
      const on = list.filter((o) => o && [5, 6].indexOf(o.order_status) === -1);
      const fresh = on.filter((o) => o.order_uuid && !orderWatched[o.order_uuid]);
      fresh.forEach((o) => { orderWatched[o.order_uuid] = true; });
      try { if (fresh.length) st.dispatch("watchOrders", fresh); } catch (e) {}
      st.commit("setOnGoingOrders", on);
    }).catch(() => {}).then(() => { orderFetch.busy = false; schedule(); });
  }
  function parseT(v) {
    if (typeof v === "number") return v < 1e12 ? v * 1000 : v;
    const t = Date.parse(String(v || "").replace(" ", "T"));
    return isNaN(t) ? 0 : t;
  }
  function orderTime(o) {
    let t = 0;
    (Array.isArray(o.order_status_history) ? o.order_status_history : []).forEach((x) => { const v = parseT(x && x.timestamp); if (v > t) t = v; });
    return t || parseT(o.updated_at) || parseT(o.created_at);
  }
  function activeOrders() {
    const st = orderStore();
    const u = st && st.getters && st.getters.getLoggedInUser;
    if (!u || !u.id) return [];
    loadOrders(st, String(u.id));
    const now = Date.now(), seen = {};
    return (st.getters.getOnGoingOrders || []).filter((o) => {
      if (!o || !o.order_id || seen[o.order_id]) return false;
      seen[o.order_id] = true;
      if ([1, 2, 3, 4].indexOf(o.order_status) === -1) return false;
      const t = orderTime(o);
      return !t || now - t < 48 * 3600e3;
    }).sort((a, b) => orderTime(b) - orderTime(a));
  }
  const OICON = {
    bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M9 17h6l-3-8H8M15 9h3l3 5"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="#1B2023" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9H4z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>'
  };
  function orderCardHtml(list, L) {
    orderShown = {};
    if (!list.length) return "";
    const o = list[0], A = ATXT[L], s = o.order_status;
    orderShown[o.order_id] = o;
    const type = String(o.order_type || "");
    const label = (type === "pickup" && A.pst[s]) || A.st[s];
    const shop = o.merchant ? (nameOf(o.merchant) || o.merchant.name || "") : "";
    const href = "/" + L + "/profile/order/" + encodeURIComponent(o.order_id);
    const stage = s === 4 ? 1 : 0;
    let route = "";
    if (type === "delivery") {
      route = '<span class="hgn-oc-route" aria-hidden="true"><span class="hgn-oc-dot"></span>' +
        '<span class="hgn-oc-line' + (stage ? " is-done" : "") + '"></span><span class="hgn-oc-bike' + (stage ? " is-on" : "") + '">' + OICON.bike + "</span>" +
        '<span class="hgn-oc-line"></span><span class="hgn-oc-home">' + OICON.home + "</span></span>" +
        '<span class="hgn-oc-lbl">' + A.route.map((r, i) => '<span' + (i === stage ? ' class="is-on"' : "") + ">" + esc(r) + "</span>").join("") + "</span>";
    }
    return '<a class="hgn-oc" href="' + esc(href) + '" data-href="' + esc(href) + '" data-act="order" data-id="' + esc(o.order_id) + '">' +
      '<span class="hgn-oc-top"><span class="hgn-oc-t">' + (shop ? esc(A.from) + "<b>" + esc(shop) + "</b>" : esc(A.your)) + "</span>" +
      '<span class="hgn-oc-go">' + OICON.chev + "</span></span>" +
      '<span class="hgn-oc-st"><span class="hgn-oc-pill">' + esc(label) + "</span>" +
      (list.length > 1 ? '<span class="hgn-oc-more">' + esc(A.more(list.length - 1)) + "</span>" : "") + "</span>" +
      route + "</a>";
  }

  /* Little joys (chosen 2026-10-22): real products from the 4 nearest open Gifts and Flowers stores (their Hyperzod menus,
     with photo, in stock, featured first), up to 3 per store, 10 in all. Shown only once every one of those menus has
     loaded and there are at least 3 products. "delivered free" only when every one of those stores delivers free. */
  const JOY_CATS = ["6a9bf0d4288fb9d9e903a7e9", "6a9bee55dda6795f8c065932"];
  const SPARK = '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="hgn-lj-g" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#F4FFF2"/><stop offset=".55" stop-color="#ACE4AA"/><stop offset="1" stop-color="#6FBF6B"/></radialGradient></defs><path d="M12 2l2.6 6.9L22 12l-7.4 3.1L12 22l-2.6-6.9L2 12l7.4-3.1Z" fill="url(#hgn-lj-g)"/></svg>';
  let joyWaitAt = 0;
  function joysHtml(hd, L) {
    const stores = nearStores(hd).filter((m) => m.is_open !== false && m.is_accepting_orders !== false &&
      (m.merchant_category_ids || []).some((c) => JOY_CATS.indexOf(c) !== -1)).slice(0, 4);
    if (!stores.length) return "";
    const lists = stores.map((m) => storeProducts(m._id || m.id));
    const A0 = ATXT[L], free0 = stores.every((m) => storeFee(m) === 0);
    /* (2026-10-25) while the stores' menus load, the section is already there with soft blocks of the same size, so it
       doesn't push Made in Bahrain and the rest down when the products arrive (Nouf's recording); 8 seconds at most */
    if (lists.some((l) => !l)) {
      if (!joyWaitAt) joyWaitAt = Date.now();
      if (Date.now() - joyWaitAt > 8000) return "";
      setTimeout(schedule, 400);
      const ph = '<span class="hgn-joy is-ph" aria-hidden="true"><span class="hgn-joy-pic"></span><span class="hgn-joy-n"></span><span class="hgn-joy-s"></span><span class="hgn-joy-p"></span></span>';
      return '<section class="hgn-joys" aria-busy="true"><div class="hgn-joy-head"><h2 class="hgn-joy-h"><span class="hgn-jak">' + esc(A0.joysA) + "</span>" +
        '<span class="hgn-serif">' + esc(A0.joysB) + "</span>" + SPARK + "</h2>" +
        '<span class="hgn-joy-sub">' + esc(free0 ? A0.joysFree : A0.joysSub) + "</span></div>" +
        '<div class="hgn-joy-row">' + ph + ph + ph + "</div></section>";
    }
    const items = [];
    for (let k = 0; k < 3 && items.length < 10; k++) {
      stores.forEach((m, i) => { const p = lists[i][k]; if (p && items.length < 10) items.push({ m: m, p: p }); });
    }
    if (items.length < 3) return "";
    const A = ATXT[L];
    const free = stores.every((m) => storeFee(m) === 0);
    return '<section class="hgn-joys"><div class="hgn-joy-head"><h2 class="hgn-joy-h"><span class="hgn-jak">' + esc(A.joysA) + "</span>" +
      '<span class="hgn-serif">' + esc(A.joysB) + "</span>" + SPARK + "</h2>" +
      '<span class="hgn-joy-sub">' + esc(free ? A.joysFree : A.joysSub) + "</span></div>" +
      '<div class="hgn-joy-row">' + items.map(({ m, p }) => {
        seenStores[m._id || m.id] = m;
        const href = storeHref(m, L);
        return '<a class="hgn-joy" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<span class="hgn-joy-pic"><img src="' + esc(prodImg(p)) + '" alt="" loading="lazy" decoding="async"></span>' +
          '<span class="hgn-joy-n">' + esc(nameOf(p)) + "</span>" +
          '<span class="hgn-joy-s">' + esc(nameOf(m) || m.name) + "</span>" +
          '<span class="hgn-joy-p">' + prodPrice(p) + "</span></a>";
      }).join("") + "</div></section>";
  }

  /* Made in Bahrain (redesigned 2026-10-22): the shops near the customer that joined in the last 14 days, nearest
     first (10 cards at most; the count is all of them). Each card: the store's own cover photo and logo from Hyperzod
     (a purple gloss and the initials when it has none), its category and how many days ago it joined (from its id). */
  const SERR = '<span class="hgn-mib-serr" aria-hidden="true"><svg viewBox="0 0 84 300" preserveAspectRatio="none"><path fill="currentColor" d="M84 0H30L0 30L30 60L0 90L30 120L0 150L30 180L0 210L30 240L0 270L30 300H84Z"/></svg></span>';
  function initials(n) {
    return String(n || "").trim().split(/\s+/).slice(0, 2).map((w) => w.charAt(0)).join("").toUpperCase();
  }
  function mibHtml(hd, L, catMap) {
    const all = newStores(hd).filter((m) => m.is_accepting_orders !== false);
    if (!all.length) return "";
    const A = ATXT[L], now = Date.now();
    return '<section class="hgn-mib">' + SERR + '<div class="hgn-mib-head"><span class="hgn-mib-eye">' + esc(A.mibEye) + "</span>" +
      '<h2 class="hgn-mib-h hgn-jak">' + esc(A.mibA) + '<span class="hgn-mib-ring"><span>' + esc(A.mibB) + "</span></span></h2>" +
      '<span class="hgn-mib-sub">' + A.mibSub(all.length) + "</span></div>" +
      '<div class="hgn-mib-row">' + all.slice(0, 10).map((m) => {
        seenStores[m._id || m.id] = m;
        const href = storeHref(m, L), cover = storeImg(m, "cover"), logo = storeImg(m, "logo");
        const c = catMap[(m.merchant_category_ids || [])[0]];
        const name = nameOf(m) || m.name;
        const days = Math.max(0, Math.floor((now - joinedAt(m)) / 864e5));
        return '<a class="hgn-mib-card" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<span class="hgn-mib-cover' + (cover ? "" : " is-empty") + '">' + (cover ? '<img src="' + esc(cover) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
          '<span class="hgn-mib-logo">' + (logo ? '<img src="' + esc(logo) + '" alt="" loading="lazy" decoding="async">' : esc(initials(name))) + "</span>" +
          '<span class="hgn-mib-body"><span class="hgn-mib-n">' + esc(name) + "</span>" +
          (c ? '<span class="hgn-mib-c">' + esc(catLabel(c)) + "</span>" : "") +
          '<span class="hgn-mib-age">' + esc(A.age(days)) + "</span></span></a>";
      }).join("") + "</div></section>";
  }

  /* the three parts under the banner are filled on their own (every run, only rewritten when their content changes),
     so the rows keep their scroll and a new order status shows within 1.5 seconds without redrawing Home */
  function setSlot(id, html) {
    const el = document.getElementById(id);
    if (!el || el.__hgHtml === html) return;
    el.__hgHtml = html;
    el.innerHTML = html;
    el.hidden = !html;
  }
  function fillSlots(hd, L) {
    if (!document.getElementById("hgn-order-slot")) return;
    const orders = activeOrders();
    setSlot("hgn-order-slot", orderCardHtml(orders, L));
    document.documentElement.classList.toggle("hgn-order-on", orders.length > 0);
    setSlot("hgn-joys-slot", joysHtml(hd, L));
    setSlot("hgn-mib-slot", mibHtml(hd, L, catMapOf(hd)));
  }

  /* ---------- HOME ---------- */
  let homeSig = "";
  /* desktop width (website, 2026-10-20): more stores in the Stores near you panel and more categories on Search.
     Crossing the width redraws those parts. */
  const WIDE = window.matchMedia("(min-width: 960px)");
  try { WIDE.addEventListener("change", () => { homeSig = ""; slandSig = ""; schedule(); }); } catch (e) {}

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
    const fl = feeLabel(m, L);
    const on = !!favIds[id];
    return '<a class="hgn-store" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-store-img' + (cover ? "" : " is-logo") + '">' +
      ((cover || logo) ? '<img src="' + esc(cover || logo) + '" alt="" loading="lazy" decoding="async">' : "") +
      '<button type="button" class="hgn-fav' + (on ? " is-on" : "") + '" data-act="fav" data-id="' + esc(id) + '" aria-pressed="' + on + '" aria-label="' + esc(on ? t.unfav : t.fav) + '">' + TOP_ICON.heart + "</button></span>" +
      '<span class="hgn-store-name">' + esc(m.name) + "</span>" +
      ((extra || tags.length || fl) ? '<span class="hgn-tags">' + (extra || "") + (fl ? '<span class="hgn-tag hgn-tag-fee"><bdi>' + esc(fl) + "</bdi></span>" : "") +
        tags.map((c) => '<span class="hgn-tag">' + esc(catLabel(c)) + "</span>").join("") + "</span>" : "") +
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
    /* 4 rows on phones, 8 (two columns) on desktop */
    const list = d.stores.filter((m) => !panelCat || (m.merchant_category_ids || []).indexOf(panelCat) !== -1).slice(0, WIDE.matches ? 8 : 4);
    return list.map((m) => {
      seenStores[m._id || m.id] = m;
      const href = storeHref(m, d.L), img = storeImg(m, "logo") || storeImg(m, "cover"); /* the logo first (2026-10-21) */
      const c = d.catMap[(m.merchant_category_ids || [])[0]];
      const fee = storeFee(m);
      const meta = [c ? catLabel(c) : "", storeTime(m), fee ? feeLabel(m, d.L) : ""].filter(Boolean).join(" · ");
      return '<a class="hgn-sp-row" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
        '<span class="hgn-sp-img">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
        '<span class="hgn-sp-txt"><span class="hgn-sp-name">' + esc(m.name) + "</span>" +
        (meta ? '<span class="hgn-sp-meta">' + esc(meta) + "</span>" : "") +
        (storeFee(m) === 0 ? '<span class="hgn-sp-free">' + esc(TXT[d.L].free) + "</span>" : "") + "</span></a>";
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
     even when a fee is charged, so it is not used.
     (2026-10-24, Nouf: "always ensure that their deliveries fees show up") A fee of null means the store has no delivery
     fee set in Hyperzod (no delivery setting, or its type "none"; read from Hyperzod's search data), and Hyperzod then
     charges no delivery fee at checkout (tested signed in, Ramik Perfumes: fee 0), so it counts as free delivery.
     Without delivery_data, a store's fixed fee setting is used (store page opened straight from a link). */
  function storeFee(m) {
    const d = m && m.delivery_data;
    if (d && typeof d === "object") return typeof d.fee === "number" ? d.fee : 0;
    const ds = m && m.delivery_setting, fx = ds && ds.default_type === "fixed" && ds.types && ds.types.fixed;
    return fx && typeof fx.amount === "number" ? fx.amount : null;
  }
  /* "BHD 1.000 delivery" / "Free delivery" (Arabic: "توصيل 1.000 د.ب." / "توصيل مجاني"), "" when unknown */
  function feeLabel(m, L) {
    const fee = storeFee(m), T = LTXT[L];
    if (fee === null) return "";
    if (fee === 0) return T.free;
    return L === "ar" ? T.fee + money(fee, true) : money(fee, true) + T.fee;
  }

  function renderHome() {
    const home = document.getElementById("MultiVendorHome");
    const hdr = document.getElementById("MultiVendorHeaderRoot");
    if (!home) return;
    /* phones: the header is inside #MultiVendorHome and Home goes right under it. Desktop website (found 2026-10-20):
       Hyperzod puts the header above, in .v-application__wrap, so Home goes first inside #MultiVendorHome, before its
       own (hidden) <main>; without this the desktop Home stayed blank. */
    const inHome = !!hdr && hdr.parentElement === home;
    const main = home.querySelector(":scope > main");
    if (!inHome && !(WIDE.matches && main)) return;
    const hd = homeData();
    if (!hd || !Array.isArray(hd.merchant_categories)) return;

    /* (2026-10-25, Nouf's screen recording: on opening, "the things move around") Home was drawn before the nearby stores
       had loaded, then drawn again when they arrived: a shop banner showed first and our campaign banner took its place,
       and the parts below moved. The first drawing now waits for the nearby stores (2.5 seconds at most); the opening
       veil (app-footer.js, web-head.css) stays on meanwhile, so Home appears once, complete. */
    if (!document.getElementById("hgn-home") && !nearReady()) {
      if (!homeWaitAt) homeWaitAt = Date.now();
      if (Date.now() - homeWaitAt < 2500) { setTimeout(schedule, 120); return; }
    }

    let box = document.getElementById("hgn-home");
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-home";
      box.addEventListener("click", onHomeClick);
      homeSig = "";
    }
    if (inHome) { if (box.previousElementSibling !== hdr) hdr.insertAdjacentElement("afterend", box); }
    else if (box.nextElementSibling !== main) main.insertAdjacentElement("beforebegin", box);

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
    /* (2026-10-22) campaign banners and New tags: both depend on the nearby stores, so they are in the signature */
    const camps = campaignsFor(hd);
    const newCats = newCatIds(hd, cats.slice(0, cats.length > 8 ? 7 : cats.length).map(idOf));
    const sig = [L, WIDE.matches, cats.map(idOf).join(","), stores.map(idOf).join(","), feat.map(idOf).join(","),
      camps.map((x) => x.c.id).join(","), Object.keys(newCats).sort().join(",")].join("|");
    if (sig === homeSig && box.firstChild) { fillSlots(hd, L); return; }
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
        '<span class="hgn-cat-ring' + (newCats[idOf(c)] ? " has-new" : "") + '">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") +
        (newCats[idOf(c)] ? '<span class="hgn-cat-new">' + esc(ATXT[L].isNew) + "</span>" : "") + "</span>" +
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
    /* mixed carousel (design A, chosen 2026-10-22): one of our campaign banners, then one shop banner, and so on; a shop
       whose campaign banner is already in the row is not shown twice */
    const campIds = {};
    camps.forEach((x) => { campIds[x.c.id] = true; });
    const shops = feat.filter((m) => !campIds[idOf(m)]);
    const slides = [];
    for (let i = 0, j = 0; i < camps.length || j < shops.length;) {
      if (i < camps.length) slides.push(camps[i++]);
      if (j < shops.length) slides.push({ m: shops[j++] });
    }
    if (slides.length) {
      html += '<section class="hgn-banner' + (slides.length > 1 ? " has-dots" : "") + '" aria-label="' + esc(t.featured) + '"><div class="hgn-slides">';
      slides.forEach((x) => {
        if (x.c) { html += campSlide(x.c, x.m, L); return; }
        const m = x.m;
        const href = storeHref(m, L);
        html += '<a class="hgn-slide" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
          '<img class="hgn-slide-photo" src="' + esc(storeImg(m, "cover")) + '" alt="" decoding="async">' +
          '<span class="hgn-shop hgn-shop-c1" aria-label="' + esc(t.shop + " " + m.name) + '">' + esc(t.shop) + '<span class="hgn-shop-go">' + GO_ARROW + "</span></span>" +
          "</a>";
      });
      html += "</div>";
      if (slides.length > 1) {
        html += '<div class="hgn-dots" aria-hidden="true">' + slides.map((x, i) => '<span class="hgn-dot' + (x.c ? " is-ours" : "") + (i ? "" : " is-on") + '"></span>').join("") + "</div>";
      }
      html += "</section>";
    }
    /* (2026-10-22) order card, Little joys and Made in Bahrain: filled by fillSlots */
    html += '<div id="hgn-order-slot" hidden></div><div id="hgn-joys-slot" hidden></div><div id="hgn-mib-slot" hidden></div>';

    /* Shop by occasion (O4, chosen 2026-10-19, in place of Popular right now): purple cards, each opens a Hyperzod category.
       A card whose category is missing or switched off is left out. */
    const occ = OCCASIONS.map((o) => ({ o, c: catMap[o.cat] })).filter((x) => x.c && x.c.status !== false && x.c.status !== 0);
    if (occ.length) {
      html += '<section class="hgn-occs"><div class="hgn-head"><h2 class="hgn-h2">' + esc(t.occ) + '</h2></div><div class="hgn-occ-row">' +
        occ.map(({ o, c }) => {
          const href = catHref(c, L);
          /* ticket card (2026-10-22): the photo, then a perforated stub with the occasion, its category and a go button */
          return '<a class="hgn-tk" href="' + esc(href) + '" data-href="' + esc(href) + '" aria-label="' + esc(o[L] + ", " + catLabel(c)) + '">' +
            '<span class="hgn-tk-pic"><img src="' + esc(OCC_IMG_BASE + o.img + ".webp") + '" alt="" loading="lazy" decoding="async"></span>' +
            '<span class="hgn-tk-stub"><span class="hgn-tk-t hgn-jak">' + esc(o[L]) + "</span>" +
            '<span class="hgn-tk-s">' + esc(catLabel(c)) + "</span>" +
            '<span class="hgn-tk-go">' + GO_ARROW + "</span></span></a>";
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
    fillSlots(hd, L);
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
    if (act && act.getAttribute("data-act") === "order") {
      e.preventDefault();
      const o = orderShown[act.getAttribute("data-id")];
      try { if (o) orderStore().commit("setViewOrder", o); } catch (x) {}
      go(act.getAttribute("data-href"));
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
  /* one slide's width plus the gap between slides (2026-10-20): phones show one slide, desktop two side by side */
  function slideStep(track) {
    const first = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return ((first && first.getBoundingClientRect().width) || track.clientWidth || 1) + gap;
  }
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
      /* positions the row can stop at: every slide on phones; on desktop (two showing) one fewer, so it loops back */
      const w = slideStep(track), per = Math.max(1, Math.round((track.clientWidth + 1) / w)), n = Math.max(1, dots.length - per + 1);
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
        const w = slideStep(track);
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
    bag: '<path d="M5.5 8h13l-1 12.5h-11z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/>',
    close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'
  };
  function sIcon(k) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + SICON[k] + "</svg>";
  }
  function isStorePath(p) { return /^\/(en|ar)\/m\/[^/]+\/[^/]+\/?$/.test(p); }
  function storeState() {
    const g = vueGlobals();
    return g && g.$store && g.$store.state;
  }
  /* (2026-10-25) a store opened straight from a link (or on computers) is in none of our lists, so its delivery time and
     fee were missing from the info card. Its entry is then fetched once from Hyperzod's store search (the same data
     the Search results use), by the store's name, and matched by id. */
  const sinfoFetched = {};
  function storeInfoFetch(md, id) {
    if (!md || !id || !md.name) return null;
    const got = sinfoFetched[id];
    if (got) return got.data;
    const S = storeState();
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    if (!sel || typeof sel.latitude !== "number" || typeof sel.longitude !== "number") return null;
    const rec = sinfoFetched[id] = { data: null };
    const url = "https://api.hyperzod.app/store/v1/search?location%5B%5D=" + sel.latitude + "&location%5B%5D=" + sel.longitude +
      "&q=" + encodeURIComponent(md.name) + "&locale=" + lang() + "&search_type=merchant";
    fetch(url, { headers: { accept: "application/json", "x-tenant": location.host, "x-client-device": "web" } })
      .then((r) => r.json())
      .then((j) => {
        const m = (j && Array.isArray(j.data) ? j.data : []).find((x) => x && (x._id || x.id) === id);
        if (m) { rec.data = m; schedule(); }
      }, () => {});
    return null;
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
  const CUR_EN = "BHD\u00a0", CUR_AR = "\u00a0\u062F.\u0628.\u200f";
  function moneyVal(n, three) {
    return three ? Number(n).toFixed(3) : Number(n).toLocaleString("en-US", { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 3 });
  }
  function money(n, three) {
    const v = moneyVal(n, three);
    return hgIsAr() ? v + CUR_AR : CUR_EN + v;
  }
  /* (2026-10-21) Talabat prices: the label regular, the amount in <b> (semibold). The label sits in its own span so the
     currency pass in global-footer-1.js sees "BHD" next to a number and leaves it as it is. */
  function moneyHtml(n, three) {
    const v = moneyVal(n, three);
    return hgIsAr() ? "<b>" + v + "</b><span class=\"hgn-cur\">" + CUR_AR + "</span>" : "<span class=\"hgn-cur\">" + CUR_EN + "</span><b>" + v + "</b>";
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
      /* (2026-10-24) Hyperzod's own photo arriving later used to replace ours, so the photo jumped to another size and
         crop a moment after showing (Nouf's recording, Moroccan Soap). Ours stays once it has loaded (Hyperzod's is
         hidden under it, app-new.css); ours is only taken out when Hyperzod's came first. */
      if (real) { if (mine && !(mine.complete && mine.naturalWidth > 0)) mine.remove(); return; }
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
      img.loading = "eager"; /* (2026-10-24) was lazy: boxes stayed empty while scrolling, the + alone on them */
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
  /* (2026-10-25, speed) asked up to six times per run, and each time it measured every store page, which makes the
     phone work out the whole page layout again after the parts before it changed something; now measured once per run */
  let osMemo, osInTick = false;
  function openStorePage() {
    if (osInTick && osMemo !== undefined) return osMemo;
    const r = openStorePageNow();
    if (osInTick) osMemo = r;
    return r;
  }
  /* (2026-10-25, speed) checkVisibility() only needs the page's styles, not its layout (offsetWidth made the phone lay out
     the whole page first); older phones without it keep the old test */
  function shown(p) { return p.checkVisibility ? p.checkVisibility() : (p.offsetWidth > 0 && p.getClientRects().length > 0); }
  function openStorePageNow() {
    const pages = Array.prototype.filter.call(document.querySelectorAll(".scheme-merchant-page"), shown);
    if (!pages.length) return null;
    const sheet = pages.filter((p) => p.closest(".v-overlay-container")).pop();
    if (sheet) return sheet;
    /* (2026-10-22) a store page still on screen counts even when the address has already moved on: going back, Hyperzod
       keeps the store on screen for about half a second while it builds the next page, and it showed in the old look
       because this switched off with the address. Item pages (/product/) have their own look, so they stay out. */
    return /\/product\//.test(currentPath()) ? null : pages[pages.length - 1];
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
    const entry = storeListEntry(id) || storeInfoFetch(md, id) || {};

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
      if (mm && +mm[1] > 0 && entry.show_delivery_time !== false) items.push(["clock", mm[1] + T.mins, T.time]); /* 0: not shown (2026-10-24) */
      const distEl = gutter.querySelector(":scope > .tw-mt-4 span");
      const dm = distEl && distEl.textContent.match(/([\d.]+)\s*(km|كم)/i);
      if (dm) items.push(["pin", dm[1] + T.km, T.dist]);
      /* the delivery fee, always when Hyperzod gives one (2026-10-24): from the store lists, else from the store itself */
      let fee = storeFee(entry);
      if (fee === null) fee = storeFee(md);
      if (typeof fee === "number") items.push(["bike", fee === 0 ? T.free : money(fee), T.fee]);
      /* the minimum order: on phones only when there is no fee to show (three fit), on computers always (2026-10-25) */
      if ((typeof fee !== "number" || WIDE.matches) && typeof md.min_order_amount === "number") items.push(["bag", md.min_order_amount > 0 ? money(md.min_order_amount) : T.nomin, T.min]);
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

    page.querySelectorAll(".cat-section .product-price, .scheme-product-recommendation-section .product-price").forEach(splitPrice);
  }
  /* (2026-10-21) Talabat prices on the store page: "BHD" regular, the amount bold. Hyperzod writes the price as one text
     node; that node is kept (emptied) and the label and amount are added after it, so when Hyperzod writes a new price
     into its node again, the next run sees digits there and splits it afresh. The label has its own span so the currency
     pass in global-footer-1.js sees "BHD" next to a number and leaves it alone. */
  const PRICE_EN = /^\s*(?:BHD|BD)[\s\u00a0]*([\d.,]+)\s*$/, PRICE_AR = /^\s*([\d.,\u0660-\u0669]+)[\s\u00a0\u200f]*\u062F\.\s?\u0628\.?[\u200e\u200f]*\s*$/;
  function splitPrice(el) {
    const raw = Array.prototype.find.call(el.childNodes, (n) => n.nodeType === 3 && /\d/.test(n.nodeValue));
    if (!raw) return;
    el.querySelectorAll(":scope > .hgn-cur, :scope > b.hgn-amt").forEach((x) => x.remove());
    if (el.children.length) return; /* an old (struck) price or other parts: leave Hyperzod's text as it is */
    const ar = hgIsAr(), m = (ar ? PRICE_AR : PRICE_EN).exec(raw.nodeValue);
    if (!m) return;
    const cur = document.createElement("span"), amt = document.createElement("b");
    cur.className = "hgn-cur"; amt.className = "hgn-amt";
    cur.textContent = ar ? CUR_AR : CUR_EN; amt.textContent = m[1];
    raw.nodeValue = "";
    if (ar) el.append(amt, cur); else el.append(cur, amt);
  }

  /* ---------- running it ---------- */
  let routerHooked = false;
  /* LEAVING A STORE'S SEARCH PAGE (2026-10-24): on the way back from Filtered Results, Hyperzod first redraws that page
     empty ("Search In Undefined", Relevance) and only then shows the store, so an old-looking page flashed (Nouf's
     screen recording). The page is hidden as soon as the way back starts; the class goes once it is gone (3s at most). */
  let msLeaveAt = 0;
  function msLeaveDone() {
    const de = document.documentElement;
    if (!de.classList.contains("hgn-ms-leaving")) return;
    if (document.getElementById("MerchantSearchPage") && Date.now() - msLeaveAt < 3000) return;
    de.classList.remove("hgn-ms-leaving");
  }
  function hookRouter() {
    msLeaveDone();
    if (routerHooked) return;
    const g = vueGlobals();
    if (g && g.$router && g.$router.afterEach) {
      g.$router.afterEach(() => schedule());
      if (g.$router.beforeEach) {
        g.$router.beforeEach((to, from) => {
          if (from && to && /\/m\/[^/]+\/[^/]+\/search\/?$/.test(from.path || "") && to.path !== from.path) {
            document.documentElement.classList.add("hgn-ms-leaving");
            msLeaveAt = Date.now();
            setTimeout(msLeaveDone, 3100);
          }
        });
      }
      routerHooked = true;
    }
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
  function prodPrice(p) { /* (2026-10-21) html: "BHD" + <b>amount</b> */
    const v = p && (p.product_pricing ? p.product_pricing.price_display : p.price_display);
    return typeof v === "number" ? moneyHtml(v, true) : "";
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
      '<span class="hgn-sb-pp">' + prodPrice(p) + "</span></a>").join("");
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
    if (document.getElementById("hgn-joys-slot")) schedule(); /* (2026-10-22) Little joys waits for its menus */
  }
  /* (2026-10-24) a delivery time of 0 is not shown (Ateaya Plus Shoe Store: Hyperzod gives "0", it showed "0 mins" and
     "0 · Free delivery"); a bare number gets "mins" (Zee Shop: "35" showed as "35") */
  function storeTime(m) {
    const d = m && m.delivery_data;
    if (!d || !d.time || m.show_delivery_time === false) return "";
    const n = parseInt(d.time, 10);
    if (isNaN(n) || n <= 0) return "";
    if (lang() === "ar") return n + " " + LTXT.ar.mins;
    return /^\s*\d+\s*$/.test(String(d.time)) ? n + " " + LTXT.en.mins : String(d.time);
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
    const fl = feeLabel(m, L);
    if (fl) meta.push("<bdi>" + esc(fl) + "</bdi>");
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
  /* category tabs, shared by the store lists and the Search start screen (2026-10-20): the label sits in a <span> so the
     underline can be as wide as the text + 31 (Talabat, app-new.css) */
  function tabButtons(cats, cur, t) {
    const tab = (cid, label) => '<button type="button" role="tab" class="hgn-tab' + (cur === cid ? " is-on" : "") + '" aria-selected="' + (cur === cid) + '" data-act="lcat" data-id="' + esc(cid) + '"><span>' + esc(label) + "</span></button>";
    return tab("", t.all) + cats.map((c) => tab(String(c.id || c._id), catLabel(c))).join("");
  }
  function tabsHtml(cats, cur, t) { return '<div class="hgn-tabs" role="tablist">' + tabButtons(cats, cur, t) + "</div>"; }
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
    if (withTabs && cats.length > 1) html += tabsHtml(cats, st.cat, t);
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
  const nearAll = { key: "", list: [], busy: false, failKey: "", failAt: 0, fails: 0 };
  /* (2026-10-22) gave up on this address: 3 loads in a row failed (then waits 30s before trying again) */
  function nearGaveUp(key) { return nearAll.failKey === key && nearAll.fails >= 3 && Date.now() - nearAll.failAt < 30000; }
  function loadNearAll() {
    const S = storeState();
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    if (!sel || typeof sel.latitude !== "number" || typeof sel.longitude !== "number") return;
    const L = lang(), key = sel.latitude.toFixed(5) + "," + sel.longitude.toFixed(5) + "|" + L;
    if (nearAll.key === key || nearAll.busy) return;
    /* failed: try again after 2s, up to 3 times, then after 30s (2026-10-22; was always 30s, and Hyperzod's old category
       list showed for those 30s) */
    if (nearAll.failKey === key && Date.now() - nearAll.failAt < (nearAll.fails >= 3 ? 30000 : 2000)) return;
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
    }).catch((e) => { if (p === 1) throw e; }); /* (2026-10-22) a later page failing keeps the stores already loaded */
    /* (2026-10-20): the key is only stored on success, so a failed load is retried and Hyperzod's own category list stays meanwhile */
    page(1).then(() => { nearAll.list = all; nearAll.key = key; nearAll.fails = 0; nearAll.failKey = ""; },
      () => { nearAll.fails = nearAll.failKey === key ? nearAll.fails + 1 : 1; nearAll.failKey = key; nearAll.failAt = Date.now(); })
      .then(() => { nearAll.busy = false; pageSig = ""; catSig = ""; schedule(); });
  }
  /* (2026-10-25) true once the nearby stores for this address are in (or can't load, or there is no address yet) */
  let homeWaitAt = 0;
  function nearReady() {
    loadNearAll();
    const S = storeState();
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    if (!sel || typeof sel.latitude !== "number" || typeof sel.longitude !== "number") return true;
    const key = sel.latitude.toFixed(5) + "," + sel.longitude.toFixed(5) + "|" + lang();
    return nearAll.key === key || nearAll.failKey === key;
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
     A store opens as its own page. Grey loading rows show while the nearby stores load (2026-10-22); Hyperzod's own list
     shows only when they can't load (no address, or the load failed). */
  const CTXT = {
    en: { n1: " store near you", n: " stores near you", sort: "Sort: ", closed: "Closed" },
    ar: { n1: " متجر قريب منك", n: " متاجر قريبة منك", sort: "ترتيب: ", closed: "مغلق" }
  };
  const CICON = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>'
  };
  let catSig = "", catSt = newListState(), catWas = "", catPath = "", catT0 = 0;
  function nearKey() {
    const S = storeState();
    const sel = S && S.Utils && S.Utils.selectedLocation && S.Utils.selectedLocation.location;
    return sel && typeof sel.latitude === "number" && typeof sel.longitude === "number" ? sel.latitude.toFixed(5) + "," + sel.longitude.toFixed(5) + "|" + lang() : "";
  }
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
    const cat = (m.merchant_category_ids || []).map((x) => catMap[x]).filter(Boolean)[0];
    /* the delivery time and fee (2026-10-24, option A of the "HyperGo Store Card Delivery Info" canvas, chosen by Nouf):
       one line under the name, "(clock) 30 mins • (bike) Free delivery • Food"; free in green, a fee in dark. Nothing on
       the photo any more (she did not like "30 mins · Free delivery" on top of the banner). */
    const fl = feeLabel(m, L), fee = storeFee(m);
    const meta = [];
    if (tm) meta.push('<span class="hgn-cc-mi">' + sIcon("clock") + "<bdi>" + esc(tm) + "</bdi></span>");
    if (fl) meta.push('<span class="hgn-cc-mi hgn-cc-fee' + (fee === 0 ? " is-free" : "") + '">' + sIcon("bike") + "<bdi>" + esc(fl) + "</bdi></span>");
    if (cat) meta.push('<span class="hgn-cc-mi">' + esc(catLabel(cat)) + "</span>");
    const closed = m.is_open === false || m.is_accepting_orders === false;
    return '<a class="hgn-cc' + (closed ? " is-closed" : "") + '" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
      '<span class="hgn-cc-img' + (cover ? "" : " is-logo") + '">' + ((cover || logo) ? '<img src="' + esc(cover || logo) + '" alt="" loading="lazy" decoding="async">' : "") +
      (closed ? '<span class="hgn-cc-closed">' + esc(C.closed) + "</span>" : "") + "</span>" +
      '<span class="hgn-cc-row"><span class="hgn-cc-name">' + esc(nameOf(m) || m.name) + "</span>" +
      (km ? '<span class="hgn-cc-dist">' + sIcon("pin") + /* same pin as the store info card */ "<bdi>" + esc(km) + "</bdi></span>" : "") + "</span>" +
      (meta.length ? '<span class="hgn-cc-meta">' + meta.join('<i aria-hidden="true">•</i>') + "</span>" : "") +
      "</a>";
  }
  function renderCategoryPage() {
    const r = catRoute();
    const root = document.getElementById("merchants_by_category");
    const de = document.documentElement;
    let box = document.getElementById("hgn-catpage");
    const off = () => { de.classList.toggle("hgn-cat-on", false); de.classList.toggle("hgn-cat-native", false); if (box) box.remove(); catSig = ""; }; /* toggle (2026-10-20): no class rewrite when already off */
    /* (2026-10-22) Hyperzod's own (old) list: only when our list really can't be made (see app-new.css, CATEGORY PAGE) */
    const native = () => { off(); de.classList.toggle("hgn-cat-native", true); };
    const wait = () => {
      place();
      if (catSig !== "loading") { catSig = "loading"; box.innerHTML = '<div class="hgn-sres-loading hgn-cp-wait"><span></span><span></span><span></span><span></span></div>'; }
    };
    const place = () => {
      de.classList.toggle("hgn-cat-on", true);
      if (!box) {
        box = document.createElement("div");
        box.id = "hgn-catpage";
        box.addEventListener("click", onCatClick);
        catSig = "";
      }
      if (root.firstElementChild !== box) root.insertAdjacentElement("afterbegin", box);
    };
    /* (2026-10-22) going back, Hyperzod keeps the category page on screen for about half a second after the address has
       changed; our page stays until it leaves, so Hyperzod's old list never shows in between */
    if (!r && root && box && root.getClientRects().length) return;
    if (!r || !root) { off(); return; }
    /* OLD DESIGN SHOWING SOMETIMES (2026-10-22, found in the code): Hyperzod's old list showed whenever our list could not
       be drawn at once: Home's data not loaded yet or the address not known yet (e.g. a category opened soon after the
       app starts), or one failed load of the nearby stores (then for 30 seconds). Now the grey loading rows show while
       any of these is still on its way (up to 8 seconds), with quick retries, and the old list only after that. */
    if (catPath !== location.pathname) { catPath = location.pathname; catT0 = Date.now(); }
    const late = Date.now() - catT0 > 8000;
    const hd = homeData();
    if (!hd) { if (late) native(); else wait(); return; }
    const cid = String(r.params.id);
    if (cid !== catWas) { catWas = cid; catSt = newListState(); }
    const all = nearStores(hd);
    /* nearby stores still loading (2026-10-22): grey loading rows (as on Search) instead of Hyperzod's old list. Not
       loading at all (no address, or the load failed): Hyperzod's own list stays */
    if (!nearAll.key) {
      const k = nearKey();
      if (nearAll.busy || (!late && !(k && nearGaveUp(k)))) wait(); else native();
      return;
    }
    const ar = hgIsAr(), L = ar ? "ar" : "en", t = TXT[L], T = LTXT[L], C = CTXT[L];
    const catMap = catMapOf(hd);
    const cat = catMap[cid] || (hd.merchant_categories || []).find((c) => String(c.id || c._id) === cid);
    const list = all.filter((m) => (m.merchant_category_ids || []).some((x) => String(x) === cid));
    place();
    de.classList.toggle("hgn-cat-native", false);
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
    /* (2026-10-22) going back from results to a page other than Search, Hyperzod keeps Search on screen for about half a
       second; our results stay until it leaves */
    /* (2026-10-24) opening a store from the results: the address changes ~100 ms after the tap while Search stays on
       screen ~400 ms more, sliding away. Our results came off at once and Hyperzod's own results page (hidden under
       ours by html.hgn-sres-on) showed in their place: "Product | Merchant · 13 Results", grey photos, ADD ITEM (Nouf's
       recording at 0:11 and 0:34; measured in the pane: off at 204 ms, Hyperzod's page shown until 500 ms). The test
       above looked at Hyperzod's results, which are hidden while ours show, so it never held. Now the Search page itself
       is what counts: while it is still on screen, our results stay. */
    const spage = wrap && wrap.closest("#MultiVendorSearch");
    if (!q && box && !/^\/(en|ar)\/search\/?$/.test(currentPath()) && spage && spage.getClientRects().length) return;
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

  /* ---------- SEARCH START SCREEN (Talabat sizes, approved 2026-10-20; was E2 from 2026-10-19) ----------
     Before the customer types: one bar (back, search box, bag), category tabs under it (a tab shows that category's
     stores), then Recent and Popular searches as outlined chips and all categories in one sideways row (8 + See all on
     desktop). The searches come from global-footer-2.js (window.hgSearch; the buttons in #hg-search-discovery, hidden in
     the new design, are the fallback). Hidden while there is text in the search box or search results are showing. */
  let slandSig = "", slandAll = false, slandCat = "", stabsSig = "";
  const STXT2 = {
    en: { back: "Back", recent: "Recent searches", popular: "Popular searches" },
    ar: { back: "رجوع", recent: "عمليات البحث الأخيرة", popular: "عمليات بحث شائعة" }
  };
  const SL_ICON = {
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    /* Talabat's icons (2026-10-20): a clock with a turn-back arrow for recent searches, a rising arrow for popular ones */
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>'
  };
  function renderSearchLanding() {
    const de = document.documentElement;
    const root = document.getElementById("MultiVendorSearch");
    /* (2026-10-22) going back from Search, Hyperzod keeps it on screen for about half a second after the address has
       changed; our top bar and start screen stay until it leaves, so its old search page never shows in between */
    if (root && !/^\/(en|ar)\/search\/?$/.test(currentPath()) && root.getClientRects().length && document.getElementById("hgn-shead")) return;
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
      /* (2026-10-20) back button only: the "Search" title went with the one-row Talabat bar */
      const th = '<button type="button" class="hgn-shead-back" data-act="sback" aria-label="' + esc(s2.back) + '">' + SL_ICON.back + "</button>";
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
    let tabs = document.getElementById("hgn-stabs");
    const off = () => {
      de.classList.toggle("hgn-sland-on", false); de.classList.toggle("hgn-scat-on", false);
      if (box) box.remove();
      if (tabs) tabs.remove();
      slandSig = ""; stabsSig = "";
      if (!onSearch) slandCat = ""; /* a chosen tab is kept while typing or with results, forgotten when Search is left */
    };
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
    /* category tabs right under the search bar (Talabat, 2026-10-20): its own row above the favourites and the start screen
       (the favourites row places itself right above #hgn-sland, so the tabs go above whichever of the two comes first) */
    if (slandCat && !cats.some((c) => String(c.id || c._id) === slandCat)) slandCat = "";
    if (cats.length) {
      if (!tabs) {
        tabs = document.createElement("div");
        tabs.id = "hgn-stabs";
        tabs.className = "hgn-tabs";
        tabs.setAttribute("role", "tablist");
        tabs.addEventListener("click", onStabsClick);
        stabsSig = "";
      }
      const fav = document.getElementById("hgn-sfav");
      const first = fav && fav.nextElementSibling === box ? fav : box;
      if (tabs.nextElementSibling !== first) first.insertAdjacentElement("beforebegin", tabs);
      const tsig = [L, slandCat, cats.map((c) => c.id || c._id).join(",")].join("#");
      if (tsig !== stabsSig) {
        stabsSig = tsig;
        tabs.setAttribute("dir", ar ? "rtl" : "ltr");
        tabs.innerHTML = tabButtons(cats, slandCat, t);
      }
    } else if (tabs) { tabs.remove(); stabsSig = ""; }
    de.classList.toggle("hgn-scat-on", !!slandCat);
    /* a chosen tab: that category's stores near the customer (the shared store list), instead of the searches */
    const catList = slandCat ? nearStores(hd).filter((m) => (m.merchant_category_ids || []).some((x) => String(x) === slandCat)) : null;
    const sig = [L, slandAll, WIDE.matches, recent.join("|"), popular.join("|"), cats.map((c) => c.id || c._id).join(","),
      slandCat, catList ? catList.map((m) => m._id || m.id).join(",") : ""].join("#");
    if (sig === slandSig) return;
    slandSig = sig;
    box.setAttribute("dir", ar ? "rtl" : "ltr");
    if (catList) {
      const favIds = {};
      favList().forEach((f) => { favIds[f.id] = true; });
      box.innerHTML = '<div class="hgn-sl-stores">' + (catList.length ? storeListHtml(newListState(), catList, L, t, favIds, hd, null, false)
        : '<p class="hgn-page-empty">' + esc(LTXT[L].nores) + "</p>") + "</div>";
      watchProdRows(box);
      return;
    }
    /* recent and popular searches: outlined chips with Talabat's icons (2026-10-20) */
    const chips = (list, icon, cls) => '<div class="hgn-sl-chips">' + list.map((q) =>
      '<button type="button" class="hgn-sl-chip ' + cls + '" data-act="sq" data-q="' + esc(q) + '"><span class="hgn-sl-ic">' + icon + '</span><span class="hgn-sl-q">' + esc(q) + "</span></button>").join("") + "</div>";
    let html = "";
    if (recent.length) html += '<section class="hgn-sl-sec"><h2 class="hgn-sl-h">' + esc(s2.recent) + "</h2>" + chips(recent, SL_ICON.history, "is-recent") + "</section>";
    if (popular.length) html += '<section class="hgn-sl-sec"><h2 class="hgn-sl-h">' + esc(s2.popular) + "</h2>" + chips(popular, SL_ICON.trend, "is-popular") + "</section>";
    if (cats.length) {
      /* phones: all of them in one sideways row (Talabat, 2026-10-20); desktop: one row of 8 with See all */
      const few = WIDE.matches ? 8 : cats.length;
      const shown = slandAll ? cats : cats.slice(0, few);
      html += '<section class="hgn-sl-sec"><div class="hgn-sl-head"><h2 class="hgn-sl-h">' + esc(t.cats) + "</h2>" +
        (cats.length > few ? '<button type="button" class="hgn-sl-all" data-act="sall">' + esc(slandAll ? t.less : t.seeAll) + "</button>" : "") + "</div>" +
        '<div class="hgn-cat-grid">' + shown.map((c) => {
          const href = catHref(c, L), photo = catPhoto(c), img = photo || c.image;
          return '<a class="hgn-cat' + (photo ? " hgn-cat-photo" : "") + '" href="' + esc(href) + '" data-href="' + esc(href) + '">' +
            '<span class="hgn-cat-ring">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">' : "") + "</span>" +
            '<span class="hgn-cat-name">' + esc(catLabel(c)) + "</span></a>";
        }).join("") + "</div></section>";
    }
    box.innerHTML = html;
  }
  function onStabsClick(e) {
    const act = e.target.closest("[data-act=lcat]");
    if (!act) return;
    const v = act.getAttribute("data-id") || "";
    if (v === slandCat) return;
    slandCat = v; slandSig = ""; stabsSig = "";
    renderSearchLanding();
    window.scrollTo(0, 0);
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

  /* ---------- CART SHEET (2026-10-24, "HyperGo Quick Checkout" board 2, chosen by Nouf) ----------
     Phones and the app. The store's purple bar ("View cart") now opens Hyperzod's own phone cart as a sheet that slides
     up over the store (its items, + and - work as before), with "You may also like" at the end of it, then Checkout goes
     straight to the checkout page. Before, the bar went to Hyperzod's full-page "You May Also Like" step first
     (Hyperzod's "last minute" recommendations, its checkout journey): that step is switched off here for every screen,
     so the cart panel on the website goes straight to checkout too. The look is in app-new.css (CART SHEET). */
  const CS_TXT = {
    en: { title: "Your cart", also: "You may also like", add: "Add" },
    ar: { title: "سلّتك", also: "قد يعجبك أيضًا", add: "أضف" }
  };
  function csStore() { const g = vueGlobals(); return g && g.$store; }
  /* Hyperzod's "last minute" step before checkout: off (the recommendations themselves stay on, we show them in the cart) */
  function csJourneyOff(S) {
    const b = S.state.Utils && S.state.Utils.bootSettings;
    const si = b && b.recommendations && b.recommendations.similar_items;
    if (si && si.last_minute) si.last_minute = false;
  }
  function csOpen() {
    const S = csStore();
    if (!S) return false;
    const md = S.state.Merchant && S.state.Merchant.merchantData;
    const mid = md && md.merchant_id;
    const carts = (S.state.Cart && S.state.Cart.cart) || [];
    const cart = carts.find((c) => c && c.cart_items && c.cart_items[0] && c.cart_items[0].merchant_id === mid) || S.getters.getCart;
    if (!cart) return false;
    S.commit("setSelectedCart", cart);
    S.commit("sidePanel", ["cart", true]);
    return true;
  }
  /* EDIT ON THE CHECKOUT (2026-10-24): Nouf: "it should take u back to the store page with the cart open" (the sheet over
     the checkout looked wrong). Edit goes back to the cart's store (history back when the checkout was opened from that
     store, so Back from the store does not return to the checkout; otherwise the store is opened), and the cart sheet
     opens there as soon as the store page and its cart are loaded (renderViewCart). Gives up after 8 seconds. */
  let coEditOpen = null;
  function coEditInStore() {
    const S = csStore(), g = vueGlobals();
    const m = S && S.getters.getCartMerchant;
    if (!m || !m.slug || !m.merchant_id || !g || !g.$router) { csOpen(); return; }
    const path = "/" + lang() + "/m/" + encodeURIComponent(m.slug) + "/" + m.merchant_id;
    coEditOpen = { id: m.merchant_id, until: Date.now() + 8000 };
    const back = history.state && typeof history.state.back === "string" ? history.state.back.split("?")[0] : "";
    let same = false;
    try { same = !!back && decodeURIComponent(back) === decodeURIComponent(path); } catch (e) {}
    if (same) g.$router.back(); else g.$router.push(path);
    setTimeout(schedule, 400);
  }
  /* LEAVING THE CART SHEET (2026-10-24): when Checkout is pressed, Hyperzod first switches the sheet to its list of
     every store's cart ("Golden Petals · VIEW STORE · CHECKOUT", ...) and only then opens the checkout, so that list
     flashed for a moment (Nouf's screen recording). Now the sheet slides down as soon as Checkout is pressed and is
     hidden before the list can show. It is shown normally again once the sheet has closed over the checkout (at most 5
     seconds), or after 2.5 seconds if the checkout did not open (for example a store minimum not reached). */
  let csLeaveAt = 0;
  function csLeaveDone() {
    const de = document.documentElement;
    if (!de.classList.contains("hgn-cs-leaving")) return;
    const open = !!document.querySelector(".v-dialog--fullscreen .scheme-cart-panel");
    const t = Date.now() - csLeaveAt, onCo = /\/checkout/.test(currentPath());
    if (open && t < (onCo ? 5000 : 2500)) return;
    de.classList.remove("hgn-cs-leaving");
  }
  function csBindLeave() {
    document.addEventListener("click", (ev) => {
      const t = ev.target;
      if (!t || !t.closest || !t.closest(".v-dialog--fullscreen .scheme-cart-panel > .v-card-actions .bg-button_normal")) return;
      const de = document.documentElement;
      de.classList.add("hgn-cs-leaving");
      csLeaveAt = Date.now();
      setTimeout(csLeaveDone, 2600);
      setTimeout(csLeaveDone, 5100);
    }, true);
  }
  /* "You may also like": Hyperzod's own recommendations for this cart, loaded once per cart */
  const csRec = { key: "", list: null, busy: false };
  function csKey(S) {
    const c = S.getters.getCart, m = S.getters.getCartMerchant;
    const ids = ((c && c.cart_items) || []).map((x) => x.product_id).filter(Boolean).sort();
    return (m && m.merchant_id ? m.merchant_id : "") + "|" + ids.join(",");
  }
  function csLoad(S) {
    const key = csKey(S);
    if (key === csRec.key && (csRec.list || csRec.busy)) return;
    csRec.key = key; csRec.list = null; csRec.busy = true;
    const c = S.getters.getCart, m = S.getters.getCartMerchant, tn = S.getters.getTenantByDomain;
    const products = ((c && c.cart_items) || []).filter((x) => x && x.product_id)
      .map((x) => ({ product_id: x.product_id, product_price: x.product_price || x.price || null })).slice(0, 10);
    if (!m || !m.merchant_id || !tn || !tn.id || !products.length) { csRec.busy = false; csRec.list = []; return; }
    Promise.resolve(S.dispatch("getSimilarItems", { tenant_id: tn.id, merchant_id: m.merchant_id, n: 10, location: "last_minute", products: products }))
      .then((r) => { if (csRec.key === key) csRec.list = (r && r.success && r.products) || []; }, () => { if (csRec.key === key) csRec.list = []; })
      .then(() => { csRec.busy = false; schedule(); });
  }
  function csAdd(p, btn) {
    const S = csStore();
    if (!S || !p) return;
    const m = S.getters.getCartMerchant;
    const sm = S.getters.getMerchant;
    const merchant = sm && m && sm.merchant_id === m.merchant_id ? sm : m;
    /* a product with choices or a note opens its own page, like tapping it in the store */
    if (p.has_product_options || p.product_instruction_enabled) {
      S.commit("sidePanel", ["cart", false]);
      go("/" + lang() + "/m/" + ((m && m.slug) || "store") + "/" + p.merchant_id + "/product/" + p._id);
      return;
    }
    const q = p.is_quantity_enabled && p.product_quantity && p.product_quantity.min_quantity > 1 ? p.product_quantity.min_quantity : 1;
    const img = p.product_images && p.product_images[0] ? p.product_images[0].file_url : null;
    const item = { merchant_id: p.merchant_id, product_id: p._id, item_image_url: img, product_name: p.name, quantity: q,
      product_price: p.price, product_options: [], sub_total_amount: p.price * q,
      unit: p.product_pricing ? p.product_pricing.unit : undefined, is_recommended_product: true };
    if (btn) btn.disabled = true;
    Promise.resolve(S.dispatch("addToCart", [item, "inc", q, merchant, null, p, null, { getSimilarItems: false }]))
      .finally(() => { if (btn) btn.disabled = false; });
  }
  /* prices with 2 decimals, like Hyperzod's cart rows above them */
  function csPrice(p) {
    const v = p && (p.product_pricing ? p.product_pricing.price_display : p.price_display);
    return typeof v === "number" ? moneyHtml(v) : "";
  }
  function renderCartSheet() {
    csLeaveDone();
    const S = csStore();
    if (!S) return;
    csJourneyOff(S);
    const panel = document.querySelector(".v-dialog--fullscreen .scheme-cart-panel");
    if (!panel) return;
    const L = lang(), T = CS_TXT[L];
    const m = S.getters.getCartMerchant;
    /* title: "Your cart" and the store's name */
    const head = panel.querySelector(":scope > .v-card-title");
    if (head) {
      let h = head.querySelector(".hgn-cs-head");
      if (!h) { h = document.createElement("div"); h.className = "hgn-cs-head"; head.insertBefore(h, head.firstChild); }
      const html = '<span class="hgn-cs-t">' + esc(T.title) + '</span><span class="hgn-cs-s">' + esc(nameOf(m)) + "</span>";
      if (h.dataset.sig !== html) { h.innerHTML = html; h.dataset.sig = html; }
    }
    /* You may also like, at the end of the list */
    const body = panel.querySelector(":scope > .v-card-text");
    if (!body) return;
    csLoad(S);
    const inCart = {};
    (((S.getters.getCart || {}).cart_items) || []).forEach((x) => { inCart[x.product_id] = true; });
    const list = (csRec.list || []).filter((p) => p && p._id && !inCart[p._id] && p.in_stock !== false && prodImg(p)).slice(0, 8);
    let sec = body.querySelector(":scope > .hgn-cs-also");
    if (!list.length) { if (sec) sec.remove(); return; }
    if (!sec) {
      sec = document.createElement("section");
      sec.className = "hgn-cs-also";
      sec.addEventListener("click", (ev) => {
        const b = ev.target.closest && ev.target.closest("[data-pid]");
        if (!b) return;
        ev.preventDefault();
        ev.stopPropagation();
        csAdd((csRec.list || []).find((p) => p._id === b.getAttribute("data-pid")), b);
      });
    }
    if (sec.parentNode !== body || sec.nextSibling) body.appendChild(sec);
    const html = '<h3 class="hgn-cs-h">' + esc(T.also) + '</h3><div class="hgn-cs-row">' + list.map((p) =>
      '<button type="button" class="hgn-cs-p" data-pid="' + esc(p._id) + '" aria-label="' + esc(T.add + " " + nameOf(p)) + '">' +
      '<span class="hgn-cs-pi"><img src="' + esc(prodImg(p)) + '" alt="" loading="lazy" decoding="async"><span class="hgn-cs-plus" aria-hidden="true">+</span></span>' +
      '<span class="hgn-cs-pn">' + esc(nameOf(p)) + '</span><span class="hgn-cs-pp">' + csPrice(p) + "</span></button>").join("") + "</div>";
    if (sec.dataset.sig !== html) { sec.innerHTML = html; sec.dataset.sig = html; }
  }

  /* STORE TAGS (2026-10-24): the tags under a store's name are now separate chips (app-new.css), so the comma Hyperzod
     writes after each one ("Retail Trade, ") is taken off the chip's text. */
  function renderStoreTags() {
    const page = document.documentElement.classList.contains("hgn-store") ? openStorePage() : null;
    const box = page && page.querySelector("#merchant-header-v2 .v-card-text>div>div>div:last-child");
    if (!box) return;
    /* Hyperzod writes the name and the comma as separate bits of text ("Retail Trade" + ", "): every comma bit is emptied */
    box.querySelectorAll(":scope > span").forEach((sp) => {
      sp.childNodes.forEach((n) => {
        if (n.nodeType === 3 && /[,\u060C][\s\u00A0]*$/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/[\s\u00A0]*[,\u060C][\s\u00A0]*$/, "");
      });
    });
  }

  /* STORE FILTER BY THE CATEGORIES (2026-10-24, "HyperGo Store Top Buttons", Nouf: option D with the filter of B).
     Phones and the app. Hyperzod's Filter button left the top of the store (app-new.css, STORE TOP BUTTONS); ours, a
     soft round purple button, starts the row of category tabs and simply presses Hyperzod's (hidden) one, so its filter
     sheet opens as before. A number on Hyperzod's button (filters in use) is shown on ours too. */
  const SF_ICON = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>';
  /* Filter rides with the tabs (2026-10-25, option B): Hyperzod's tab row is a Swiper. Its start space
     (slidesOffsetBefore, 12px) is widened to Filter's width + 8px, so the first tab starts after Filter, and Filter is
     moved by exactly what the row moves (Swiper's own translate and transition time), so the two scroll as one row. */
  const sfRides = new WeakSet();
  /* (2026-10-25) when every tab fits beside Filter, the row stays at its start and can't be dragged: on a store with few
     tabs (Eclerano Kunafa, 3 tabs) Swiper still had a few pixels to scroll and opened on its second stop, so Filter sat
     half off the screen. Returns true when it moved the row back (the move that follows redraws Filter). */
  function sfPin(s, b) {
    const nav = b.parentNode;
    if (!nav || !nav.closest(".merchant-mobile-view")) return false;
    const sl = s.slides;
    if (!sl || !sl.length) return false;
    const dx = (s.rtlTranslate ? -1 : 1) * (sfT(s) - s.minTranslate());
    const nr = nav.getBoundingClientRect(), lr = sl[sl.length - 1].getBoundingClientRect();
    if (!nr.width || !lr.width) return false;
    const fits = s.rtlTranslate ? lr.left - dx >= nr.left + 16 : lr.right - dx <= nr.right - 16;
    if (s.allowTouchMove === fits) s.allowTouchMove = !fits;
    if (fits && Math.abs(sfT(s) - s.minTranslate()) > 0.5 && !sfPinning) {
      sfPinning = true;
      try { sfSet(s, s.minTranslate()); } finally { sfPinning = false; }
      return true;
    }
    return false;
  }
  let sfPinning = false;
  const sfMeasured = new WeakMap(), sfFirst = new WeakMap(), sfRO = new WeakMap();
  let sfDirty = new WeakSet();
  /* (2026-10-25) in Arabic Swiper keeps s.translate with the opposite sign of the position it works with (minTranslate,
     maxTranslate, setTranslate), so it is read through sfT. Reading it directly put Filter in the wrong place in Arabic
     and pushed the tabs' start space the wrong way (found in the pane: start space -429, Filter on top of the tabs). */
  function sfT(s) { return s.rtlTranslate ? -s.translate : s.translate; }
  function sfSet(s, t) { s.setTranslate(t); }
  function sfRide(nav, b) {
    const sw = nav.querySelector(".swiper");
    const s = sw && sw.swiper;
    if (!s || !s.params || s.destroyed) return;
    if (sw.dataset.hgnSob == null) sw.dataset.hgnSob = String(s.params.slidesOffsetBefore || 0);
    /* (2026-10-25, speed) the measuring below only runs again when something that moves the row changed: other tabs,
       Filter's text, the screen size or language, or a size change seen by the ResizeObserver. Before, it measured on
       every run, and each time the phone had to lay out the whole store page again first. */
    const sig = s.slides.length + "|" + (b.dataset.sig || "") + "|" + (WIDE.matches ? 1 : 0) + "|" + lang() + "|" + (nav.closest(".merchant-mobile-view") ? 1 : 0);
    if (sfMeasured.get(nav) === sig && sfFirst.get(nav) === s.slides[0] && !sfDirty.has(nav)) return;
    if (window.ResizeObserver && !sfRO.has(nav)) {
      const ro = new ResizeObserver(() => { sfDirty.add(nav); schedule(); });
      ro.observe(nav); ro.observe(b);
      sfRO.set(nav, ro);
    }
    const ro = sfRO.get(nav);
    if (ro && s.slides[0] && sfFirst.get(nav) !== s.slides[0]) { ro.observe(s.slides[0]); ro.observe(s.slides[s.slides.length - 1]); }
    sfMeasured.set(nav, sig); sfFirst.set(nav, s.slides[0]); sfDirty.delete(nav);
    /* the row's start: 16px on phones; on computers the page column's edge (the store header's), so Filter lines up
       with the banner and the name above it (2026-10-25) */
    let start = 16;
    if (!nav.closest(".merchant-mobile-view")) {
      const g = document.querySelector("#merchant-header-v2 .storefront-gutter");
      const nr = nav.getBoundingClientRect(), gr = g && g.getBoundingClientRect();
      if (gr && gr.width) start = Math.max(16, Math.round(document.documentElement.dir === "rtl" || hgIsAr() ? nr.right - gr.right : gr.left - nr.left));
    }
    const q = nav.querySelector(":scope > .hgn-ssearch");
    if (q && q.style.marginInlineEnd !== start + "px") q.style.marginInlineEnd = start + "px";
    /* computers (2026-10-25): Filter simply sits before the tabs in the row (app-new.css, STORE PAGE ON COMPUTERS), it doesn't
       ride on the tabs. In Arabic the riding put Filter on top of the first tab: there the whole row fits, so Swiper ignored
       the start space and the measuring kept pushing it the wrong way. The row starts at the page column's edge. */
    if (!nav.closest(".merchant-mobile-view")) {
      if (nav.style.paddingInlineStart !== start + "px") nav.style.setProperty("padding-inline-start", start + "px", "important");
      if (b.style.transform) b.style.transform = "";
      if (b.style.insetInlineStart) b.style.insetInlineStart = "";
      const orig = Number(sw.dataset.hgnSob) || 0;
      if ((s.params.slidesOffsetBefore || 0) !== orig) {
        s.params.slidesOffsetBefore = orig;
        try { s.update(); sfSet(s, Math.max(s.maxTranslate(), Math.min(s.minTranslate(), sfT(s)))); } catch (e) {}
      }
      return;
    }
    if (nav.style.paddingInlineStart) nav.style.removeProperty("padding-inline-start");
    if (b.style.insetInlineStart !== start + "px") b.style.insetInlineStart = start + "px";
    const move = () => {
      if (!b.isConnected || s.destroyed) return;
      if (sfPin(s, b)) return;
      const dx = (s.rtlTranslate ? -1 : 1) * (sfT(s) - s.minTranslate());
      b.style.transform = dx ? "translateX(" + Math.round(dx * 10) / 10 + "px)" : "";
    };
    if (!sfRides.has(s)) {
      sfRides.add(s);
      /* (2026-10-25) Hyperzod moves the row to the tab of the section in view, counting its own first section ("Our
         favourites"), so a store opened with the row one stop in: the first tab was already in view, yet the row slid
         about 90px and Filter sat half off the screen (Eclerano Kunafa). A move to a tab that is already fully in view
         is now skipped; a tab out of view still slides in. Swiper's own internal moves are left alone. */
      const slideTo0 = s.slideTo;
      s.slideTo = function (i, speed, cb, internal) {
        try {
          if (!internal && b.isConnected) {
            const sl = s.slides && s.slides[i];
            const nr = nav.getBoundingClientRect(), br = b.getBoundingClientRect(), r = sl && sl.getBoundingClientRect();
            if (r && r.width && (s.rtlTranslate ? (r.right <= br.left - 4 && r.left >= nr.left + 8) : (r.left >= br.right + 4 && r.right <= nr.right - 8))) return false;
          }
        } catch (e) {}
        return slideTo0.apply(this, arguments);
      };
      s.on("setTranslate", move);
      s.on("setTransition", (sw2, ms) => { if (b.isConnected) b.style.transitionDuration = (ms || 0) + "ms"; });
    }
    move();
    /* the first tab starts 10px after Filter: measured, since the row's own padding differs between phones and computers
       (Swiper's start space alone put it 48px too far on computers). Filter moves with the row, so the gap is the same at
       any scroll position. */
    const sl = s.slides && s.slides[0];
    if (sl && b.offsetWidth > 0) {
      const pr = b.getBoundingClientRect(), sr = sl.getBoundingClientRect();
      const gap = s.rtlTranslate ? pr.left - sr.right : sr.left - pr.right;
      const prev = s.params.slidesOffsetBefore || 0;
      const want = Math.round(prev - (gap - 10));
      if (Math.abs(want - prev) > 1) {
        s.params.slidesOffsetBefore = want;
        try {
          s.update();
          /* update() keeps the old position (found in the pane: the tabs stayed 92px too far to the start); move the row
             by the same amount the start space changed, within the row's ends */
          /* (2026-10-25) when the tab in use is the first or second, the row goes to its start: Hyperzod had already
             slid the row one stop in (it counts its own "Our favourites" section), and keeping that put Filter half off
             the screen (Eclerano Kunafa) */
          const act = nav.querySelector(".scheme-category-primary-nav__item.is-active");
          const ai = act ? Array.prototype.findIndex.call(s.slides, (x) => x.contains(act)) : 0;
          sfSet(s, ai <= 1 ? s.minTranslate() : Math.max(s.maxTranslate(), Math.min(s.minTranslate(), sfT(s) + (want - prev))));
        } catch (e) {}
        move();
      }
    }
  }
  function renderStoreFilter() {
    const page = document.documentElement.classList.contains("hgn-store") ? openStorePage() : null;
    /* (2026-10-25) computers too: there Hyperzod's store filter is the Filter button in the top bar (#AppBar .filter-btn) */
    const mob = !!page && page.classList.contains("merchant-mobile-view");
    const nav = page ? page.querySelector("#ProductCategoriesNav") : null;
    const native = !page ? null : mob ? page.querySelector(".merchant-floating-actions .merchant-floating-btn.tw-relative") : document.querySelector("#AppBar .filter-btn");
    document.querySelectorAll(".hgn-sfilter").forEach((b) => { if (!nav || !native || b.parentNode !== nav) b.remove(); });
    if (!nav || !native) return;
    let b = nav.querySelector(":scope > .hgn-sfilter");
    if (!b) {
      b = document.createElement("button");
      b.type = "button";
      b.className = "hgn-sfilter";
      b.addEventListener("click", (ev) => {
        ev.preventDefault();
        const pg = openStorePage();
        const nb = pg && (pg.classList.contains("merchant-mobile-view") ? pg.querySelector(".merchant-floating-actions .merchant-floating-btn.tw-relative") : document.querySelector("#AppBar .filter-btn"));
        if (nb) nb.click();
      });
      nav.insertBefore(b, nav.firstChild);
    }
    const label = native.getAttribute("aria-label") || (lang() === "ar" ? "تصفية" : "Filter");
    const n = (native.textContent || "").replace(/\D+/g, "");
    /* (2026-10-24, later) the word too ("Filter"), with the number of filters in use after it */
    const word = lang() === "ar" ? "تصفية" : "Filter";
    const html = SF_ICON + "<span>" + esc(word) + "</span>" + (n ? '<span class="hgn-sfilter-n">' + esc(n) + "</span>" : "");
    if (b.getAttribute("aria-label") !== label) b.setAttribute("aria-label", label);
    if (b.dataset.sig !== html) { b.innerHTML = html; b.dataset.sig = html; }
    /* computers (2026-10-25, option A): "Search <store>" at the end of the tabs.
       (2026-10-25, later) a real search field: typing filters this page's products in place (STORE SEARCH IN PLACE
       below), it no longer opens Hyperzod's separate store search page. */
    let q = nav.querySelector(":scope > .hgn-ssearch");
    if (mob) { if (q) q.remove(); sfRide(nav, b); return; }
    if (!q) {
      q = document.createElement("label");
      q.className = "hgn-ssearch";
      q.innerHTML = sIcon("search") + '<input type="search" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="hgn-ssearch-x" hidden>' + sIcon("close") + "</button>";
      const inp = q.querySelector("input"), x = q.querySelector(".hgn-ssearch-x");
      inp.addEventListener("input", () => { x.hidden = !inp.value; sqApply(true); });
      inp.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape" && inp.value) { ev.preventDefault(); inp.value = ""; x.hidden = true; sqApply(true); }
        if (ev.key === "Enter") ev.preventDefault();
      });
      x.addEventListener("click", (ev) => { ev.preventDefault(); inp.value = ""; x.hidden = true; sqApply(true); inp.focus(); });
      /* a category tab while searching: the search is cleared first, so the tab's section is there to scroll to */
      nav.addEventListener("click", (ev) => {
        if (!inp.value || !ev.target.closest || !ev.target.closest(".swiper-slide")) return;
        inp.value = ""; x.hidden = true; sqApply(true);
      }, true);
      nav.appendChild(q);
    } else if (nav.lastElementChild !== q) nav.appendChild(q);
    const S = storeState(), md = S && S.Merchant && S.Merchant.merchantData;
    const nm = md ? (nameOf(md) || md.name || "") : "";
    const ph = (lang() === "ar" ? "ابحث في " : "Search ") + nm;
    const qi = q.querySelector("input");
    if (qi && qi.placeholder !== ph) { qi.placeholder = ph; qi.setAttribute("aria-label", ph); }
    const qx = q.querySelector(".hgn-ssearch-x"), xl = lang() === "ar" ? "مسح البحث" : "Clear search";
    if (qx && qx.getAttribute("aria-label") !== xl) qx.setAttribute("aria-label", xl);
    sfRide(nav, b);
  }

  /* ---------- STORE SEARCH IN PLACE (computers, 2026-10-25) ----------
     The "Search <store>" field at the end of the category tabs filters the store page itself: while something is typed,
     only products whose name holds the typed words stay, categories with none left are hidden, and so are Recommended
     and "Our favourites". Nothing typed: the page as it was. Nothing is removed or re-created (the products are only
     hidden), so "+" and opening a product work as before. When none match: a short line saying so. A store whose
     categories load more products later (Hyperzod's is_paginated) may hold more than the page shows, so there the line
     also offers Hyperzod's full store search instead of saying there is nothing. Phones keep the search button. */
  function sqNorm(t) {
    return String(t || "").toLowerCase().replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();
  }
  function sqSet(el, off) {
    if (off) { if (el.getAttribute("data-hgn-sq") !== "0") el.setAttribute("data-hgn-sq", "0"); }
    else if (el.hasAttribute("data-hgn-sq")) el.removeAttribute("data-hgn-sq");
  }
  function sqApply(typed) {
    const root = document.documentElement;
    const page = root.classList.contains("hgn-store") ? openStorePage() : null;
    const inp = page && !page.classList.contains("merchant-mobile-view") ? page.querySelector("#ProductCategoriesNav > .hgn-ssearch input") : null;
    const words = inp ? sqNorm(inp.value).split(" ").filter(Boolean) : [];
    const on = words.length > 0;
    if (root.classList.contains("hgn-sq-on") !== on) root.classList.toggle("hgn-sq-on", on);
    let none = document.getElementById("hgn-sq-none");
    if (!on) {
      if (none) none.remove();
      if (document.querySelector("[data-hgn-sq]")) document.querySelectorAll("[data-hgn-sq]").forEach((el) => el.removeAttribute("data-hgn-sq"));
      return;
    }
    const secs = page.querySelectorAll(".cat-section");
    let hits = 0;
    secs.forEach((sec) => {
      let n = 0;
      sec.querySelectorAll(".product-card-horizontal,.scheme-merchant-product-grid-card").forEach((c) => {
        const nm = c.querySelector(".product-name");
        const t = sqNorm(nm && nm.textContent);
        const hit = words.every((w) => t.indexOf(w) !== -1);
        sqSet(c, !hit);
        if (hit) n++;
      });
      sqSet(sec, n === 0);
      hits += n;
    });
    const S = storeState(), cp = S && S.Merchant && S.Merchant.categoryProducts;
    const more = Array.isArray(cp) && cp.some((c) => c && c.is_paginated);
    const ar = lang() === "ar";
    if (hits && !more) { if (none) none.remove(); }
    else if (secs[0]) {
      if (!none) {
        none = document.createElement("div");
        none.id = "hgn-sq-none";
        none.innerHTML = "<p></p>";
      }
      if (none.nextElementSibling !== secs[0]) secs[0].parentNode.insertBefore(none, secs[0]);
      const msg = hits ? (ar ? "قد تجد المزيد في كل منتجات المتجر." : "There may be more in the store's full list.")
        : (ar ? "لا توجد منتجات تطابق \"" + inp.value.trim() + "\"" : "No products match \"" + inp.value.trim() + "\"");
      const p = none.querySelector("p");
      if (p.textContent !== msg) p.textContent = msg;
      let a = none.querySelector("button");
      if (more && !a) {
        a = document.createElement("button");
        a.type = "button";
        a.addEventListener("click", (ev) => {
          ev.preventDefault();
          const m = currentPath().match(/^\/(en|ar)\/m\/[^/]+\/[^/?#]+/);
          if (m) go(m[0] + "/search");
        });
        none.appendChild(a);
      } else if (!more && a) a.remove();
      const al = ar ? "ابحث في كل المنتجات" : "Search all products";
      if (a && a.textContent !== al) a.textContent = al;
    }
    /* typing far down the page: the list gets shorter and the first results end up behind the bars at the top (the tabs
       row stays stuck under Hyperzod's top bar), so the page goes back up until they start just under the tabs */
    if (typed) {
      const nav = page.querySelector("#ProductCategoriesNav");
      const first = Array.prototype.find.call(secs, (x) => !x.hasAttribute("data-hgn-sq")) || none;
      if (nav && first) {
        const d = first.getBoundingClientRect().top - nav.getBoundingClientRect().bottom - 8;
        if (d < 0) window.scrollBy(0, d);
      }
    }
  }

  /* ---------- VIEW CART BAR (2026-10-24, "HyperGo Quick Checkout" board 1) ----------
     Phones and the app, store pages. Our own purple bar at the bottom: the number of items in a green circle,
     "View cart", and the cart total (the old price struck through when there is a discount). Tapping it opens the
     cart sheet (CART SHEET above). Before, the bar was Hyperzod's own button dressed up: on every add it grew in,
     showed its loading circle with no price for a moment, flashed its own "Checkout" text and changed width, so the
     bar flickered and shook. Hyperzod's button is now hidden (app-new.css, VIEW CART BAR) and ours only slides up
     once, when the cart has its first item, then just changes its number and price. It reads this store's cart
     straight from Hyperzod's store, and redraws as soon as the cart changes. */
  const VC_TXT = { en: "View cart", ar: "عرض السلة" };
  let vcWatch = false;
  function vcCart(S) {
    const md = S.state.Merchant && S.state.Merchant.merchantData;
    const mid = md && md.merchant_id;
    const carts = (S.state.Cart && S.state.Cart.cart) || [];
    return mid ? carts.find((c) => c && c.cart_items && c.cart_items[0] && c.cart_items[0].merchant_id === mid) : null;
  }
  /* Edit on the checkout (coEditInStore): once the store page and its cart are loaded, the cart opens (the sheet on phones,
     Hyperzod's cart panel on computers) */
  function coEditTick(page) {
    if (!coEditOpen) return;
    const S = csStore();
    if (Date.now() > coEditOpen.until || !S) { coEditOpen = null; return; }
    const md = S.state.Merchant && S.state.Merchant.merchantData;
    const cart = vcCart(S);
    if (page && cart && cart.total_items > 0 && md && md.merchant_id === coEditOpen.id && !/\/checkout/.test(currentPath())) { coEditOpen = null; csOpen(); }
    else setTimeout(schedule, 300);
  }
  function renderViewCart() {
    const page = document.documentElement.classList.contains("hgn-store") ? openStorePage() : null;
    coEditTick(page);
    let bar = document.getElementById("hgn-vc");
    if (!page || !page.classList.contains("merchant-mobile-view")) { if (bar) bar.remove(); return; }
    const S = csStore();
    if (!S) return;
    if (!vcWatch && S.subscribe) { vcWatch = true; S.subscribe((m) => { if (m && /cart/i.test(m.type)) schedule(); }); }
    const cart = vcCart(S);
    const n = cart ? cart.total_items || 0 : 0;
    if (!bar) {
      bar = document.createElement("button");
      bar.type = "button";
      bar.id = "hgn-vc";
      bar.addEventListener("click", () => {
        if (csOpen()) return;
        /* no cart found in the store: Hyperzod's own (hidden) button does its usual thing */
        const nb = bar.parentNode && bar.parentNode.querySelector("button.v-btn--fixed.rounded-pill");
        if (nb) nb.click();
      });
    }
    if (bar.parentNode !== page) page.appendChild(bar);
    if (n > 0) {
      const total = cart.total_amount || 0, disc = cart.discount_amount || 0;
      const html = '<span class="hgn-vc-n">' + n + '</span><span class="hgn-vc-t">' + esc(VC_TXT[lang()]) + '</span>' +
        '<span class="hgn-vc-p">' + (disc > 0 ? '<s class="hgn-vc-s">' + moneyHtml(total + disc) + "</s>" : "") + moneyHtml(total) + "</span>";
      if (bar.dataset.sig !== html) { bar.innerHTML = html; bar.dataset.sig = html; }
      if (!bar.classList.contains("is-on")) requestAnimationFrame(() => bar.classList.add("is-on"));
    } else bar.classList.remove("is-on");
    /* (2026-10-25, speed) written only when they change (they were rewritten on every run) */
    if (bar.tabIndex !== (n > 0 ? 0 : -1)) bar.tabIndex = n > 0 ? 0 : -1;
    if (bar.getAttribute("aria-hidden") !== (n > 0 ? "false" : "true")) bar.setAttribute("aria-hidden", n > 0 ? "false" : "true");
  }

  /* ---------- CHECKOUT TOP (2026-10-24, "HyperGo Quick Checkout" board 3, chosen by Nouf) ----------
     Phones and the app. On top of the checkout page: "Checkout" with the store's name in the header, then a card with
     a small map of the delivery address (Mapbox map pictures from Hyperzod's own Mapbox key; the map pictures are
     asked for by map square, so the exact address is never put in a web address), "Deliver to", the address and a
     Change button (it opens Hyperzod's own address list, the one the address line in the bottom bar opened; that line
     is hidden while this card shows). Delivery instructions fold into one row that opens the choices. The order of the
     sections and the rest of the look: app-new.css (CHECKOUT ORDER, CHECKOUT TOP). No address yet: nothing changes. */
  const CO_TXT = {
    en: { title: "Checkout", to: "Deliver to", change: "Change", instr: "Delivery instructions",
      need: "Choose your delivery address", needSub: "Needed for the delivery fee and to place your order", choose: "Choose",
      types: { home: "Home", office: "Work", work: "Work", others: "Other", other: "Other" } },
    ar: { title: "إتمام الطلب", to: "التوصيل إلى",
      change: "تغيير", instr: "تعليمات التوصيل",
      need: "اختر عنوان التوصيل", needSub: "مطلوب لحساب رسوم التوصيل وإتمام الطلب", choose: "اختيار",
      types: { home: "المنزل", office: "العمل", work: "العمل",
        others: "أخرى", other: "أخرى" } }
  };
  const CO_PIN = '<svg aria-hidden="true" width="32" height="40" viewBox="0 0 32 40"><path d="M16 39s13-12.4 13-23A13 13 0 0 0 3 16c0 10.6 13 23 13 23z" fill="#5A29DE"/><circle cx="16" cy="16" r="5" fill="#FFFFFF"/></svg>';
  const CO_ICON_INSTR = '<svg class="hgn-co-ic" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A29DE" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h7"/></svg>';
  /* map squares (256px, zoom 16) around the address, the address in the middle of the box */
  function coMapHtml(lat, lon, W, H, token) {
    const z = 16, TS = 256, n = Math.pow(2, z);
    const px = (lon + 180) / 360 * n * TS;
    const s = Math.sin(lat * Math.PI / 180);
    const py = (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * n * TS;
    const x0 = px - W / 2, y0 = py - H / 2;
    let html = "";
    for (let tx = Math.floor(x0 / TS); tx <= Math.floor((x0 + W) / TS); tx++) {
      for (let ty = Math.floor(y0 / TS); ty <= Math.floor((y0 + H) / TS); ty++) {
        html += '<img alt="" decoding="async" src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/' + z + "/" + tx + "/" + ty +
          "@2x?access_token=" + encodeURIComponent(token) + '" style="left:' + Math.round(tx * TS - x0) + "px;top:" + Math.round(ty * TS - y0) + 'px">';
      }
    }
    return html;
  }
  function renderCheckoutTop() {
    const de = document.documentElement;
    const ck = document.getElementById("checkout");
    /* (2026-10-25, speed) the screen-width question (WIDE), not window.innerWidth: reading innerWidth makes the phone
       redo the page layout, and this part runs on every page */
    const phone = !WIDE.matches;
    /* computers (website, 2026-10-24, Nouf: "u just forgot to apply the checkout to the websites"): the same look in
       Hyperzod's two columns. The address card goes on top of the start column (delivery and payment), next to the
       order column (#CartCard). Found from the DOM: grid > [start column > box with the cards] [end column > #CartCard]. */
    let grid = null;
    if (ck && phone) grid = ck.querySelector("div:has(> div > #CartCard)");
    else if (ck) {
      const rc = ck.querySelector("#CartCard");
      const colS = rc && rc.parentElement && rc.parentElement.previousElementSibling;
      grid = colS && colS.firstElementChild && !colS.firstElementChild.contains(rc) ? colS.firstElementChild : null;
    }
    const old = document.getElementById("hgn-co-addr");
    /* (2026-10-24, later) the new checkout look (html.hgn-co) is on for every phone checkout. Before, all of it waited
       for a delivery address with map coordinates, so without one the checkout stayed Hyperzod's (reported in the app). */
    if (!grid) {
      if (old) old.remove();
      /* (2026-10-25, speed) only when one of them is there: removing a class that isn't there still rewrites <html>'s
         class, which wakes every watcher on the page and restyles the whole page, on every run on every page */
      if (de.classList.contains("hgn-co") || de.classList.contains("hgn-co-top")) de.classList.remove("hgn-co", "hgn-co-top");
      return;
    }
    if (!de.classList.contains("hgn-co")) de.classList.add("hgn-co");
    const S = csStore();
    const L = lang(), T = CO_TXT[L];
    /* header: "Checkout" over the store's name */
    const hs = document.querySelector(".scheme-mobile-page-header__surface");
    const hm = hs && hs.querySelector(".scheme-mobile-page-header__title");
    if (hs && hm) {
      let ht = hs.querySelector(".hgn-co-title");
      if (!ht) { ht = document.createElement("div"); ht.className = "hgn-co-title"; hs.appendChild(ht); }
      const m = S && S.getters.getCartMerchant;
      const h = '<span class="hgn-co-t1">' + esc(T.title) + '</span><span class="hgn-co-t2">' + esc(m ? nameOf(m) : hm.textContent.trim()) + "</span>";
      if (ht.dataset.sig !== h) { ht.innerHTML = h; ht.dataset.sig = h; }
    }
    /* delivery instructions: one row that opens the choices */
    const sl = ck.querySelector("#slinstruction-slider");
    const box = sl && sl.closest(".simple-slider");
    const blk = box && box.parentElement;
    if (blk) {
      let tg = blk.querySelector(":scope > .hgn-co-instr");
      if (!tg) {
        tg = document.createElement("button");
        tg.type = "button";
        tg.className = "hgn-co-instr";
        tg.setAttribute("aria-expanded", "false");
        tg.addEventListener("click", (ev) => {
          ev.preventDefault();
          const open = !blk.classList.contains("hgn-open");
          blk.classList.toggle("hgn-open", open);
          tg.setAttribute("aria-expanded", open ? "true" : "false");
        });
        blk.insertBefore(tg, blk.firstChild);
      }
      const h = CO_ICON_INSTR + '<span class="hgn-co-instr-t">' + esc(T.instr) + '</span><svg class="hgn-co-chev" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>';
      if (tg.dataset.sig !== h) { tg.innerHTML = h; tg.dataset.sig = h; }
    }
    /* the address card: the chosen delivery address.
       (2026-10-24, later) Without one, the card used to show the location picked on the phone as "Other" and Hyperzod's
       own address line was hidden. But Hyperzod only shows the Place order button, works out the delivery fee and checks
       the order once a delivery address is chosen, so customers saw no way to pay (Nouf: "there is no button to pay").
       Now, without a chosen address, the card asks for one ("Choose your delivery address", Choose opens Hyperzod's
       address list) and Hyperzod's own address line stays in the bottom bar. */
    const real = S && S.state.Address && S.state.Address.deliveryAddress;
    const hasReal = !!(real && real.address && Array.isArray(real.location_lat_lon) && real.location_lat_lon.length > 1);
    let da = hasReal ? real : null;
    if (!da) {
      const sel = S && ((S.state.Address && S.state.Address.selectedAddress) || (S.state.Utils && S.state.Utils.selectedLocation));
      da = sel && sel.location ? { address: sel.address || "", location_lat_lon: [sel.location.latitude, sel.location.longitude] } : null;
    }
    const ll = da && Array.isArray(da.location_lat_lon) ? da.location_lat_lon : null;
    let card = old;
    if (!card) {
      card = document.createElement("section");
      card.id = "hgn-co-addr";
      card.addEventListener("click", (ev) => {
        if (!ev.target.closest || !ev.target.closest(".hgn-co-change")) return;
        ev.preventDefault();
        /* what Hyperzod's own address line does (its openSelections): open the saved addresses list. On computers,
           Hyperzod's (hidden) Delivery Location card opens its own address list, so that card is tapped instead. */
        const ac = WIDE.matches && document.querySelector("#checkout #AddressCard");
        if (ac) { ac.click(); return; }
        const st = csStore();
        if (st) st.commit("sidePanel", ["addressList", true]);
      });
    }
    if (card.parentNode !== grid || grid.firstElementChild !== card) grid.insertBefore(card, grid.firstElementChild);
    const lat = ll ? +ll[0] : NaN, lon = ll ? +ll[1] : NaN;
    const maps = S.state.Utils && S.state.Utils.bootSettings && S.state.Utils.bootSettings.api_keys && S.state.Utils.bootSettings.api_keys.map_keys;
    const token = maps && typeof maps.mapbox === "string" ? maps.mapbox : "";
    const W = Math.max(200, Math.round(grid.clientWidth || 358)), H = phone ? 150 : 200;
    const type = hasReal ? (String(da.custom_address_type || "").trim() || T.types[String(da.address_type || "").toLowerCase()] || T.types.other) : T.need;
    const line = hasReal ? [da.building, da.address].filter(Boolean).join(", ") : T.needSub;
    const sig = [L, hasReal ? 1 : 0, lat, lon, W, token ? 1 : 0, type, line].join("|");
    if (card.dataset.sig !== sig) {
      card.innerHTML =
        (token && isFinite(lat) && isFinite(lon)
          ? '<div class="hgn-co-map" role="img" aria-label="' + esc(hasReal ? T.to + " " + type : T.need) + '">' + coMapHtml(lat, lon, W, H, token) +
            (hasReal ? '<span class="hgn-co-pin">' + CO_PIN + "</span>" : "") + '<span class="hgn-co-attr">© Mapbox © OpenStreetMap</span></div>'
          : "") +
        '<div class="hgn-co-row"><div class="hgn-co-txt">' + (hasReal ? '<span class="hgn-co-to">' + esc(T.to) + "</span>" : "") +
        '<span class="hgn-co-type">' + esc(type) + '</span><span class="hgn-co-line">' + esc(line) + '</span></div>' +
        '<button type="button" class="hgn-co-change' + (hasReal ? "" : " is-need") + '">' + esc(hasReal ? T.change : T.choose) + "</button></div>";
      card.dataset.sig = sig;
    }
    card.classList.toggle("is-need", !hasReal);
    /* Hyperzod's address line in the bottom bar is hidden only when a delivery address is really chosen */
    de.classList.toggle("hgn-co-top", hasReal);
  }

  /* ---------- CHECKOUT CARDS (2026-10-24, "HyperGo Quick Checkout" board 3) ----------
     Phones and the app, on every phone checkout page (html.hgn-co). Adds small things to
     Hyperzod's own sections; their look is in app-new.css (CHECKOUT CARDS):
     - "Your order · 2 items" on top of the items;
     - "Tip your rider (optional)" over the tip choices (Hyperzod's says only "TIP");
     - the bill as plain rows (Items, delivery fee when there is one, tax, tip, coupon discount, Total) from Hyperzod's
       own cart numbers, instead of one "Grand Total" line that had to be tapped open. Total is Hyperzod's total. */
  const CC_TXT = {
    en: { order: "Your order", edit: "Edit", item: "item", items: "items", tip: "Tip your rider", opt: "(optional)", sub: "Items",
      fee: "Delivery fee", free: "Free", tax: "Tax", dtax: "Delivery tax", tipr: "Tip", disc: "Coupon discount", total: "Total" },
    ar: { order: "طلبك", edit: "تعديل", item: "منتج", items: "منتجات", tip: "إكرامية للسائق", opt: "(اختياري)", sub: "المنتجات",
      fee: "رسوم التوصيل", free: "مجاني", tax: "الضريبة", dtax: "ضريبة التوصيل", tipr: "الإكرامية", disc: "خصم القسيمة", total: "المجموع" }
  };
  function ccPut(host, cls, html, first) {
    let el = host.querySelector(":scope > ." + cls);
    if (!el) { el = document.createElement("div"); el.className = cls; }
    if (first ? host.firstElementChild !== el : el.parentNode !== host) { if (first) host.insertBefore(el, host.firstChild); else host.appendChild(el); }
    if (el.dataset.sig !== html) { el.innerHTML = html; el.dataset.sig = html; }
  }
  let ccPayKey = "";
  function renderCheckoutCards() {
    const ck = document.getElementById("checkout");
    if (!ck || !document.documentElement.classList.contains("hgn-co")) return;
    const S = csStore();
    const c = S && S.state.Cart && S.state.Cart.selectedCart;
    if (!c || typeof c.total_amount !== "number") return;
    const T = CC_TXT[lang()];
    const num = (v) => (typeof v === "number" && isFinite(v) ? v : 0);
    /* your order: a short list (2 × name, price) and Edit, which opens the cart sheet with its + and - */
    const items = ck.querySelector("#CartCard > div > .tw-flex-col > :has(#cartItems)");
    if (items) {
      const list = (c.cart_items || []).filter((x) => x && x.product_name);
      const n = c.total_items || list.reduce((s, x) => s + (x.quantity || 0), 0);
      const h = '<div class="hgn-co-oh"><span class="hgn-co-oh-t">' + esc(T.order) + '</span><span class="hgn-co-oh-n">· ' + n + " " + esc(n === 1 ? T.item : T.items) +
        '</span><button type="button" class="hgn-co-edit">' + esc(T.edit) + "</button></div>" +
        list.map((x) => '<div class="hgn-co-it"><span class="hgn-co-it-q">' + (x.quantity || 1) + '×</span><span class="hgn-co-it-n">' + esc(x.product_name) +
          '</span><span class="hgn-co-it-p">' + moneyHtml(num(x.sub_total_amount != null ? x.sub_total_amount : x.total_amount)) + "</span></div>").join("");
      let el = items.querySelector(":scope > .hgn-co-sum");
      if (!el) {
        el = document.createElement("div");
        el.className = "hgn-co-sum";
        el.addEventListener("click", (ev) => {
          if (!ev.target.closest || !ev.target.closest(".hgn-co-edit")) return;
          ev.preventDefault();
          coEditInStore();
        });
      }
      if (items.firstElementChild !== el) items.insertBefore(el, items.firstChild);
      if (el.dataset.sig !== h) { el.innerHTML = h; el.dataset.sig = h; }
    }
    /* payment: with one way to pay and none chosen yet, it is chosen for the customer (one tap less) */
    const pms = ck.querySelectorAll("#payment-card .payment-method");
    const key = String(c.id || c.cart_id || "") + "|" + pms.length;
    if (pms.length === 1 && ccPayKey !== key) {
      ccPayKey = key;
      const r = pms[0].querySelector("input[type=radio]");
      if (r && !r.checked && !c.payment_mode_id) pms[0].click();
    }
    /* tip */
    const tg = ck.querySelector("#CartCard .tw-grid.tw-grid-cols-4");
    const tb = tg && tg.parentElement;
    if (tb && tb !== items) ccPut(tb, "hgn-co-tiph", esc(T.tip) + ' <span class="hgn-co-opt">' + esc(T.opt) + "</span>", true);
    /* bill */
    const bill = ck.querySelector("#CartCard > div > :has(#summary)");
    if (bill) {
      const row = (k, v, cls) => '<div class="hgn-co-br' + (cls ? " " + cls : "") + '"><span>' + esc(k) + "</span><span>" + v + "</span></div>";
      /* delivery fee (2026-10-24): Hyperzod prices delivery only once an address is chosen (validateCart), so before that the
         bill had no fee and the total was the items only. A store with a fixed fee (its Hyperzod delivery setting, e.g.
         Zee Shop BHD 1) charges that same fee wherever the address is (tested signed in: BHD 5 + 1 = BHD 6), so it is shown
         and added to the total straight away, with its delivery tax when the store has one. Stores priced by location
         show their fee once the address is chosen, and "Free" when Hyperzod then charges none. */
      const ot = S.getters.getOrderType, cm = S.getters.getCartMerchant;
      const isDel = !ot || ot === "delivery";
      const vd = S.state.Cart.validateCartData;
      const ve = S.state.Cart.validateError;
      const priced = !!(vd && vd.address_id && S.getters.getDeliveryAddress) && !(ve && typeof ve === "object" ? Object.keys(ve).length : ve);
      const ds = cm && cm.delivery_setting, fx = ds && ds.default_type === "fixed" && ds.types && ds.types.fixed;
      let early = 0, earlyTax = 0;
      if (isDel && !c.is_delivery_fee_applied && !priced && fx && num(fx.amount) > 0) {
        early = num(fx.amount);
        earlyTax = ds.delivery_tax_enabled && num(ds.delivery_tax_percent) > 0 ? Math.round(early * num(ds.delivery_tax_percent) * 10) / 1000 : 0;
      }
      let h = row(T.sub, moneyHtml(num(c.sub_total_amount)));
      if (c.is_delivery_fee_applied) h += row(T.fee, num(c.delivery_fee) > 0 ? moneyHtml(num(c.delivery_fee)) : esc(T.free));
      else if (early > 0) h += row(T.fee, moneyHtml(early));
      else if (isDel && priced) h += row(T.fee, esc(T.free));
      if (num(c.tax) > 0) h += row(T.tax, moneyHtml(num(c.tax)));
      if (num(c.delivery_tax) > 0) h += row(T.dtax, moneyHtml(num(c.delivery_tax)));
      else if (earlyTax > 0) h += row(T.dtax, moneyHtml(earlyTax));
      if (num(c.tip_amount) > 0) h += row(T.tipr, moneyHtml(num(c.tip_amount)));
      if (num(c.merchant_tip_amount) > 0) h += row(T.tipr, moneyHtml(num(c.merchant_tip_amount)));
      if (num(c.discount_amount) > 0) h += row(T.disc, "−" + moneyHtml(num(c.discount_amount)), "is-disc");
      h += row(T.total, moneyHtml(Math.round((num(c.total_amount) + early + earlyTax) * 1000) / 1000), "is-total");
      ccPut(bill, "hgn-co-bill", h, false);
    }
  }

  /* ---------- ORDER PLACED (2026-10-24, "HyperGo Quick Checkout" board 4) ----------
     Phones and the app. Right after an order is placed Hyperzod shows its short success animation, then opens the
     order's page (/<lang>/order/success/<order id>) with the tracking. On that page, once Hyperzod has loaded the order,
     this draws a calm "Order placed" screen over it: a green check, "Order placed", which store has it, then a card with
     the order number, the scheduled time (only for scheduled orders), the delivery address and the total, and two
     buttons: "Track order" (shows Hyperzod's tracking page underneath, for that order from then on) and "Back to Home".
     Everything comes from Hyperzod's own order data; nothing is placed or changed. The look: app-new.css (ORDER PLACED). */
  const OD_TXT = {
    en: { title: "Order placed", sent: "We've sent your order to", order: "Order", when: "Scheduled for", to: "To", total: "Total",
      track: "Track order", home: "Back to Home" },
    ar: { title: "تم إرسال طلبك", sent: "أرسلنا طلبك إلى", order: "الطلب", when: "موعد التوصيل", to: "إلى", total: "المجموع",
      track: "تتبّع الطلب", home: "العودة للرئيسية" }
  };
  const OD_CHECK = '<svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function odSeen(id, set) {
    try {
      const k = "hgn-done-seen", list = JSON.parse(sessionStorage.getItem(k) || "[]");
      if (set) { list.push(id); sessionStorage.setItem(k, JSON.stringify(list.slice(-20))); }
      return list.indexOf(id) >= 0;
    } catch (e) { return !!set; }
  }
  function renderOrderPlaced() {
    const m = currentPath().match(/^\/(en|ar)\/order\/success\/([^/?#]+)/);
    let box = document.getElementById("hgn-done");
    const S = csStore();
    const o = S && S.getters && S.getters.getViewOrder;
    const id = m ? decodeURIComponent(m[2]) : "";
    const ok = m && !WIDE.matches && o && String(o.order_id) === id && !odSeen(id);
    if (!ok) { if (box) box.remove(); if (document.documentElement.classList.contains("hgn-done-on")) document.documentElement.classList.remove("hgn-done-on"); return; }
    const T = OD_TXT[lang()];
    const da = o.delivery_address;
    const addr = typeof da === "string" ? da : da ? [da.building, da.address].filter(Boolean).join(", ") : "";
    const total = o.cart && typeof o.cart.total_amount === "number" ? moneyHtml(o.cart.total_amount) : "";
    const th = o.delivery_timestamp_human;
    const when = o.is_scheduled && th ? [th.local_date, th.local_time].filter(Boolean).join(" · ") : "";
    const row = (k, v, cls) => '<div class="hgn-done-r' + (cls ? " " + cls : "") + '"><span>' + esc(k) + "</span><span>" + v + "</span></div>";
    const html =
      '<div class="hgn-done-in"><span class="hgn-done-ok" role="img" aria-label="' + esc(T.title) + '">' + OD_CHECK + "</span>" +
      '<div class="hgn-done-hd"><h1>' + esc(T.title) + "</h1>" +
      (o.merchant && o.merchant.name ? '<p>' + esc(T.sent) + " " + esc(o.merchant.name) + "</p>" : "") + "</div>" +
      '<section class="hgn-done-card">' + row(T.order, "#" + esc(o.order_id)) + (when ? row(T.when, esc(when)) : "") +
      (addr ? row(T.to, esc(addr), "is-addr") : "") + (total ? row(T.total, total, "is-total") : "") + "</section></div>" +
      '<div class="hgn-done-bt"><button type="button" class="hgn-done-track">' + esc(T.track) + '</button>' +
      '<button type="button" class="hgn-done-home">' + esc(T.home) + "</button></div>";
    if (!box) {
      box = document.createElement("div");
      box.id = "hgn-done";
      box.addEventListener("click", (ev) => {
        const b = ev.target.closest && ev.target.closest("button");
        if (!b) return;
        const cur = (currentPath().match(/\/order\/success\/([^/?#]+)/) || [])[1];
        if (cur) odSeen(decodeURIComponent(cur), true);
        if (b.classList.contains("hgn-done-home")) go("/" + lang() + "/home");
        schedule();
      });
      document.body.appendChild(box);
    }
    if (box.dataset.sig !== html) { box.innerHTML = html; box.dataset.sig = html; }
    document.documentElement.classList.add("hgn-done-on");
  }

  /* ARABIC WORDING (2026-10-25, Arabic check): a few of Hyperzod's machine-translated words read wrong, so they are
     replaced where they show: the checkout button "مكان الامر" ("the place of the matter", for Place order) becomes
     "تأكيد الطلب", the product button "يضيف" ("he adds") becomes "أضف", "يعدل أو يكيف" (for Customizable) becomes
     "قابل للتخصيص", and the store search field's "يبحث في <store>" ("he searches in") becomes "ابحث في <store>".
     Runs at most twice a second, Arabic only. */
  const AR_WORDS = { "مكان الامر": "تأكيد الطلب", "يضيف": "أضف", "يعدل أو يكيف": "قابل للتخصيص" };
  let arWordsAt = 0;
  function fixArabicWords() {
    if (!hgIsAr()) return;
    const now = Date.now();
    if (now - arWordsAt < 500) return;
    arWordsAt = now;
    const root = document.getElementById("app");
    if (!root) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    while (w.nextNode()) {
      const n = w.currentNode, t = n.nodeValue;
      if (t && t.length < 20) { const k = t.trim(); if (AR_WORDS[k]) hits.push([n, k]); }
    }
    hits.forEach((h) => { h[0].nodeValue = h[0].nodeValue.replace(h[1], AR_WORDS[h[1]]); });
    root.querySelectorAll("input[placeholder^='يبحث في ']").forEach((i) => {
      i.setAttribute("placeholder", "ابحث في " + i.getAttribute("placeholder").slice(8));
    });
  }

  /* STORE OPENING HEAD START (2026-10-25, Nouf's recording: a store took about 2 seconds to open). Opening a store,
     Hyperzod first asks its server for that store's page layout and only then for the menu, one after the other.
     Hyperzod keeps each store's layout once it has it (fetchMerchantPage skips a store it already has), so the layout of
     the stores on the page (Home, Stores near you, category pages, search; in page order, 30 at most) is asked for
     ahead, two at a time, starting 3 seconds after the app opens; a store being touched goes first. Opening it then
     waits only for the menu. */
  const WARM_RE = /\/m\/[^/?#]+\/([0-9a-f]{24})(?:[/?#]|$)/;
  const warmDone = new Set(), warmQ = [], warmSeen = new WeakSet(), warmFrom = Date.now() + 3000;
  let warmBusy = 0, warmOn = false, warmAt = 0;
  function warmId(el) { const m = WARM_RE.exec((el && (el.getAttribute("data-href") || el.getAttribute("href"))) || ""); return m ? m[1] : ""; }
  function warmStore(id, first) {
    if (!id || warmDone.has(id) || (!first && warmDone.size >= 30)) return;
    warmDone.add(id);
    if (first) warmQ.unshift(id); else warmQ.push(id);
    warmPump();
  }
  function warmPump() {
    if (Date.now() < warmFrom) { setTimeout(warmPump, warmFrom - Date.now() + 50); return; }
    const S = csStore();
    const tid = S && S.getters && S.getters.getBootSettings && S.getters.getBootSettings.tenant_id;
    if (!tid || typeof S.dispatch !== "function") return;
    while (warmBusy < 2 && warmQ.length) {
      const id = warmQ.shift();
      warmBusy++;
      Promise.resolve().then(() => S.dispatch("fetchMerchantPage", { tenant_id: tid, merchant_id: id, locale: lang() }))
        .catch(() => {}).then(() => { warmBusy--; setTimeout(warmPump, 120); });
    }
  }
  function warmStores() {
    const now = Date.now();
    if (now - warmAt < 1000) return;
    warmAt = now;
    if (!warmOn) {
      warmOn = true;
      document.addEventListener("pointerdown", (ev) => {
        const a = ev.target && ev.target.closest && ev.target.closest('a[href*="/m/"], [data-href*="/m/"]');
        if (a) warmStore(warmId(a), true);
      }, true);
    }
    document.querySelectorAll('#app a[href*="/m/"], #app [data-href*="/m/"]').forEach((el) => {
      if (warmSeen.has(el)) return;
      warmSeen.add(el);
      warmStore(warmId(el));
    });
    if (warmQ.length) warmPump();
  }

  /* each part runs on its own (2026-10-18): before, one error in any part (for example the header on a screen it
     doesn't expect) silently stopped every part after it, so Home or the store design could fail to draw */
  const PARTS = [
    /* renderSearchFav after renderSearchLanding (2026-10-20): it sits above the start screen it draws */
    hookRouter, ensureAccentFonts, renderPage, renderAccountFav, renderSearchResults, renderSearchLanding, renderSearchFav, renderCategoryPage,
    applyHyperGoHeader, applyLocLang,
    () => { if (isHomePath(currentPath())) renderHome(); else if (document.documentElement.classList.contains("hgn-order-on")) document.documentElement.classList.remove("hgn-order-on"); },
    renderStore, renderStoreTags, renderStoreFilter, () => sqApply(false), renderViewCart, renderCartSheet, renderCheckoutTop, renderCheckoutCards, renderOrderPlaced, fixArabicWords, warmStores
  ];
  function tick() {
    osMemo = undefined;
    osInTick = true;
    for (let i = 0; i < PARTS.length; i++) {
      try { PARTS[i](); } catch (e) {}
    }
    osInTick = false;
    osMemo = undefined;
  }

  let timer = null;
  function schedule() {
    if (timer) return;
    timer = setTimeout(() => { timer = null; tick(); }, 40);
  }

  /* + #hgn-sland, #hgn-shead and both cart buttons (2026-10-20): changes inside our own boxes never need a re-run */
  const NOISE = ".hgn-sfilter,.hgn-ssearch,#hgn-sq-none,#hgn-done,#hgn-vc,.hgn-co-sum,.hgn-co-oh,.hgn-co-tiph,.hgn-co-bill,.hgn-cs-also,#hgn-co-addr,.hgn-co-title,.hgn-co-instr,#hgn-page,#hgn-sres,#hgn-catpage,#hgn-sfav,.hgn-acct-fav,#hgn-sinfo,.hgn-open,.hgn-thumb,.hg-ph,#hgn-home,#hgn-sland,#hgn-stabs,#hgn-shead,#hg-cart-btn,#hg-search-cart";
  function relevant(recs) {
    for (let i = 0; i < recs.length; i++) {
      const r = recs[i], el = r.target && (r.target.nodeType === 1 ? r.target : r.target.parentNode);
      if (el && el.closest && el.closest(NOISE)) continue;
      return true;
    }
    return false;
  }

  /* KEYBOARD WITH THE SEARCH PAGE (2026-10-22): tapping Home's search bar opens the Search page with the keyboard up.
     The phone only opens the keyboard for a field that is focused during the tap itself, and the Search page's field
     does not exist yet at that moment. So, during the tap, an invisible field (outside <body>, so no page watcher
     reacts to it) takes the focus and opens the keyboard; as soon as the Search page's field is on screen the focus
     moves to it and the invisible field is removed. Hyperzod's own tap still opens the Search page as before. If the
     page has not appeared after 4 seconds, or something else takes the focus, the invisible field is simply removed. */
  function keyboardHandoff() {
    document.addEventListener("click", (ev) => {
      const t = ev.target;
      if (!t || !t.closest || !t.closest(".home-mobile-search-input")) return;
      const old = document.getElementById("hg-kb-proxy");
      if (old) old.remove();
      const p = document.createElement("input");
      p.id = "hg-kb-proxy";
      p.type = "text";
      p.tabIndex = -1;
      p.setAttribute("aria-hidden", "true");
      p.style.cssText = "position:fixed;left:16px;top:0;width:1px;height:36px;opacity:0;font-size:16px;border:0;padding:0;margin:0;" +
        "pointer-events:none;caret-color:transparent;z-index:-1;";
      document.documentElement.appendChild(p);
      try { p.focus({ preventScroll: true }); } catch (e) { p.focus(); }
      const t0 = Date.now();
      (function hand() {
        const f = document.getElementById("mobileSearchInput");
        if (f && f.getClientRects().length && /^\/(en|ar)\/search\/?$/.test(currentPath())) {
          try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); }
          p.remove();
          return;
        }
        if (Date.now() - t0 > 4000 || document.activeElement !== p) { p.remove(); return; }
        setTimeout(hand, 30);
      })();
    }, true);
  }

  let syncFrame = false;
  function start() {
    tick();
    keyboardHandoff();
    csBindLeave();
    new MutationObserver((recs) => {
      if (!relevant(recs)) return;
      /* header or Home just (re)created, e.g. coming Back to Home: draw it before the next paint, so nothing flashes */
      const hdr = document.getElementById("MultiVendorHeaderRoot");
      const bareHeader = hdr && !hdr.style.getPropertyValue("background-color") && document.querySelector(".home-mobile-search-row");
      const bareHome = document.getElementById("MultiVendorHome") && !document.getElementById("hgn-home") && isHomePath(currentPath());
      /* (2026-10-20) a new Search screen too (e.g. Back from a store): its header and start screen were drawn 40ms late */
      const sr = document.getElementById("MultiVendorSearch");
      const bareSearch = sr && !sr.querySelector("#hgn-shead") && /^\/(en|ar)\/search\/?$/.test(currentPath());
      /* (2026-10-22) a new category page too: ours was drawn up to 40ms after Hyperzod's old list had shown */
      const mbc = document.getElementById("merchants_by_category");
      const bareCat = mbc && !mbc.querySelector("#hgn-catpage") && !document.documentElement.classList.contains("hgn-cat-native") && !!catRoute();
      /* at most once per frame (2026-10-20): while Home's data is still loading these stay true, and every change ran a full tick */
      /* (2026-10-24) a new checkout too: Hyperzod's header (the store's name) showed for a moment before ours */
      /* (2026-10-25, speed) WIDE, not window.innerWidth: this runs on every change Hyperzod makes while it draws a page, and
         reading innerWidth made the phone redo the whole page layout each time */
      const bareCo = !!document.getElementById("checkout") && !WIDE.matches && !document.documentElement.classList.contains("hgn-co");
      if ((bareHeader || bareHome || bareSearch || bareCat || bareCo) && !syncFrame) {
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
