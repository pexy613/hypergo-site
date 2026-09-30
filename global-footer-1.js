(function () {

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


  /* DESKTOP HEADER (width >= 960) — tested in Console, same approach:
     inline !important styles on the fixed #AppBar, re-applied by the observer */
  function applyHyperGoDesktop() {
    try {
      if (!window.matchMedia("(min-width: 960px)").matches) return;

      const P = "#8640FC", W = "#FFFFFF", G = "#1F2430", IC = "#2A2F38";
      const bar = document.querySelector("#AppBar");
      if (!bar) return;

      const s = (el, k, v) => el.style.setProperty(k, v, "important");

      /* header scrolls away with the page (native: position fixed) */
      s(bar, "position", "absolute");

      /* darker grey search placeholder via the theme's own variable */
      const rootEl = document.querySelector("#MultiVendorHeaderRoot");
      if (rootEl) rootEl.style.setProperty("--scheme-header-search-placeholder", G);

      s(bar, "background-color", P);
      s(bar, "background-image", "none");
      s(bar, "border-radius", "0 0 24px 24px");
      s(bar, "box-shadow", "none");

      /* white text + icons (search box and logo excluded) */
      bar.querySelectorAll("*").forEach((el) => {
        if (el.closest(".d-md-flex") || el.closest("#Logo")) return;
        s(el, "color", W);
        if (el instanceof SVGElement) {
          const st = el.getAttribute("stroke"), fi = el.getAttribute("fill");
          if (st && st !== "none") s(el, "stroke", W);
          if (fi && fi !== "none") s(el, "fill", W);
        }
      });

      /* cart with items: Hyperzod switches the button to its theme fill (white), which hid the white icon + text.
         Keep it on the purple bar as a soft translucent pill instead. */
      bar.querySelectorAll(".cart-btn--filled").forEach((b) => s(b, "background-color", "rgba(255,255,255,.18)"));

      /* "Deliver to" */
      const loc = bar.querySelector("#CurrentLocationBtn");
      if (loc && !loc.querySelector(".hg-deliver-label")) {
        const nameEl = loc.querySelector("span.text");
        if (nameEl) {
          const lab = document.createElement("span");
          lab.className = "hg-deliver-label";
          lab.textContent = hgIsAr() ? "\u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0625\u0644\u0649" : "Deliver to";
          lab.style.cssText =
            "color:#fff;font-size:14px;font-weight:400;white-space:nowrap;margin-inline-start:4px;margin-inline-end:4px";
          nameEl.parentNode.insertBefore(lab, nameEl);
          s(nameEl, "font-weight", "700");
        }
      }

      /* search pill */
      const f = bar.querySelector(".d-md-flex .v-field");
      if (f) {
        s(f, "background-color", W);
        s(f, "border-radius", "21px");
        s(f, "height", "42px");
        s(f, "min-height", "42px");
        const ctl = f.closest(".v-input__control");
        if (ctl) { s(ctl, "height", "42px"); s(ctl, "min-height", "42px"); }
        s(f, "overflow", "hidden");
        const o = f.querySelector(".v-field__outline");
        if (o) s(o, "display", "none");

        /* search icon on the LEFT: centred on the middle of the round left end.
           grid-area:auto makes the padding box (not the grid cell) the reference. */
        const ap = f.querySelector(".v-field__append-inner");
        if (ap) {
          s(ap, "grid-area", "auto");
          s(ap, "position", "absolute");
          if (hgIsAr()) {
            s(ap, "left", "auto");
            s(ap, "right", "11px");
          } else {
            s(ap, "left", "11px");
          }
          s(ap, "top", "0");
          s(ap, "bottom", "0");
          s(ap, "padding", "0");
          s(ap, "display", "flex");
          s(ap, "align-items", "center");
        }
        const inp = f.querySelector("input");
        if (inp) {
          if (hgIsAr()) {
            s(inp, "padding-right", "42px");
            s(inp, "padding-left", "16px");
          } else {
            s(inp, "padding-left", "42px");
          }
          s(inp, "height", "42px");
          s(inp, "min-height", "42px");
          s(inp, "font-size", "15px");
        }
        const ic = f.querySelector(".header-search-append svg");
        if (ic) {
          s(ic, "display", "block");
          s(ic, "width", "18px");
          s(ic, "height", "18px");
          ic.querySelectorAll("g, path").forEach((e) => s(e, "fill", IC));
        }

        ensureRotatingPlaceholder(f, { left: 42, size: 15, weight: 500 });
      }

      /* logo */
      const img = bar.querySelector("#Logo img");
      if (img)
        s(img, "filter", "brightness(0) invert(1)");   /* plain white icon on the purple bar: no glow, no purple-on-purple */
    } catch (e) {}
  }

  /* WATERMARK: big outlined HyperGo icon in the mobile/app header, fades in on scroll */

  function ensureWatermark(root) {
    if (!document.getElementById("hg-wm-style")) {
      const st = document.createElement("style");
      st.id = "hg-wm-style";
      st.textContent =
        '#MultiVendorHeaderRoot::before{content:"";position:absolute;right:6px;bottom:-24px;width:190px;height:190px;' +
        'background:url("' + LOGO_OUTLINE + '") no-repeat center/contain;' +
        'opacity:var(--hg-wm-op,0);pointer-events:none;z-index:-1;}';
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

  /* HOME: NEARBY MERCHANTS — brand logo instead of their cover banner
     The card only ever renders the merchant's cover photo, never the logo, so the logo has to be read straight out of
     Vue's component data (Vue production hides instances, same walk-the-vnode-tree trick as findHome() below) and
     swapped into the <img> by hand. Scoped to #NearbyMerchants only - the merchant's own shop page is untouched and
     keeps showing their cover banner as normal. */
  function findVueComponentByName(name) {
    const app = document.getElementById("app");
    const seen = new Set();
    let hit = null;
    function walk(inst, d) {
      if (!inst || hit || seen.has(inst) || d > 120) return;
      seen.add(inst);
      if (inst.type && inst.type.name === name) { hit = inst; return; }
      walkVN(inst.subTree, d + 1);
    }
    function walkVN(vn, d) {
      if (!vn || hit) return;
      if (vn.component) walk(vn.component, d);
      if (vn.suspense) walkVN(vn.suspense.activeBranch, d + 1);
      if (Array.isArray(vn.children)) vn.children.forEach((ch) => walkVN(ch, d + 1));
    }
    if (app && app._vnode) walkVN(app._vnode, 0);
    return hit;
  }
  function getMerchantLogoUrl(item, proxy) {
    const L = item && item.images && item.images.logo;
    if (!L) return null;
    /* the site's own image resolver (CDN sizing etc.) - same one the cards already use for the cover photo */
    try {
      if (proxy && typeof proxy.imgToDisplay === "function") {
        const u = proxy.imgToDisplay(L, false, true, null);
        if (u) return u;
      }
    } catch (e) {}
    if (typeof L === "string") return L;
    return L.image_url || L.url || L.src || null;
  }
  const nearbyMQ = window.matchMedia("(max-width: 959.98px)");
  function applyNearbyLogos() {
    if (!nearbyMQ.matches) return;
    const root = document.getElementById("NearbyMerchants");
    if (!root) return;
    const cards = root.querySelectorAll(".merchant-card[data-merchant-id]:not([data-hg-logo])");
    if (!cards.length) return;
    const c = findVueComponentByName("nearby-merchants");
    const list = c && c.proxy && Array.isArray(c.proxy.merchants) ? c.proxy.merchants : null;
    if (!list || !list.length) return;
    const byId = {};
    list.forEach((m) => {
      const id = m && (m._id || m.merchant_id);
      if (id) byId[String(id)] = m;
    });
    cards.forEach((card) => {
      const id = card.getAttribute("data-merchant-id");
      const item = byId[id];
      const url = item && getMerchantLogoUrl(item, c.proxy);
      if (!url) {
        /* data may still be settling (image not uploaded through, or not loaded yet) - retry a few times, then give up and leave the cover photo showing */
        const tries = (parseInt(card.getAttribute("data-hg-logo-tries") || "0", 10)) + 1;
        card.setAttribute("data-hg-logo-tries", String(tries));
        if (tries >= 15) card.setAttribute("data-hg-logo", "1");
        return;
      }
      card.setAttribute("data-hg-logo", "1");
      const img = card.querySelector(".cover-img img, .cover-img .v-img__img");
      if (img) img.src = url;
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

  /* search page: category names in the "shop by category" list + back arrow pointing the right way in Arabic */
  function applyArabicSearchPage() {
    if (!hgIsAr()) return;
    if (!document.getElementById("hg-rtl-style")) {
      const st = document.createElement("style");
      st.id = "hg-rtl-style";
      st.textContent = "html[lang^='ar'] .mobile-search-input .v-field__prepend-inner .v-icon svg{transform:scaleX(-1);}";
      document.head.appendChild(st);
    }
    const root = document.getElementById("MultiVendorSearch");
    if (!root) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    while (w.nextNode()) {
      const n = w.currentNode;
      const p = n.parentNode;
      if (!n.nodeValue || !p || /^(SCRIPT|STYLE|INPUT|TEXTAREA)$/.test(p.nodeName)) continue;
      if (arCat(n.nodeValue)) hits.push(n);
    }
    hits.forEach((n) => {
      const t = arCat(n.nodeValue);
      if (t && n.nodeValue.trim() !== t) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), t);
    });
  }

  function applyArabicCategories() {
    if (!hgIsAr()) return;
    document.querySelectorAll(".scheme-collection-grid h4").forEach((h) => {
      h.childNodes.forEach((n) => {
        if (n.nodeType !== 3) return;
        const t = arCat(n.nodeValue);
        if (t && n.nodeValue.trim() !== t) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), t);
      });
    });
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


  /* ================= BOTTOM NAV + CART IN THE HEADER (mobile / app) =================
     - Bottom nav: white bar, soft top shadow, purple active item with a light purple pill,
       one consistent icon set (masks, follow the text colour), Cart item hidden.
       Hyperzod's dark nav colours come from --scheme-background / --scheme-text, forced here.
     - Cart: round button in the top-right of the header; taps the (hidden) native Cart
       button so Hyperzod's own cart logic runs; the red badge mirrors the native one. */

  const NAV_ICONS = {
    home: "<path d='M3.5 10.6 12 3.5l8.5 7.1V19a1.5 1.5 0 0 1-1.5 1.5h-3.8v-5.7H8.8v5.7H5A1.5 1.5 0 0 1 3.5 19z'/>",
    reorder: "<path d='M20 12a8 8 0 0 1-13.7 5.6'/><path d='M4 12a8 8 0 0 1 13.7-5.6'/><path d='M17.7 3.2v3.2h-3.2'/><path d='M6.3 20.8v-3.2h3.2'/>",
    account: "<circle cx='12' cy='8.2' r='3.9'/><path d='M4.6 20c.7-3.6 3.7-5.6 7.4-5.6s6.7 2 7.4 5.6'/>"
  };
  const navMask = (inner) =>
    'url("' + svgUri("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#000' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'>" + inner + "</svg>") + '")';

  const homeMask = 'url("' + svgUri("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 395 456'><path d='" + LOGO_D + "' fill='#000'/></svg>") + '")';

  const ARROW_URL = 'url("' + svgUri("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 12H5M12 19l-7-7 7-7'/></svg>") + '")';

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

  function applyHyperGoNav() {
    const nav = document.querySelector("#MultiVendorBottomNav");
    if (!nav) return;

    if (!document.getElementById("hg-nav-style")) {
      const N = "#MultiVendorBottomNav#MultiVendorBottomNav";
      const C = " .classic-nav-item[data-hg-nav='";
      const st = document.createElement("style");
      st.id = "hg-nav-style";
      st.textContent =
        "@media (max-width:959.98px){" +
        N + "{background:#fff !important;color:#6B7280 !important;box-shadow:0 -6px 24px rgba(27,32,35,.07) !important;border-top:1px solid rgba(27,32,35,.06) !important;}" +
        N + " .classic-nav-container{background:#fff !important;background-image:none !important;padding-top:0 !important;padding-bottom:0 !important;transform:none !important;}" +
        N + "{transform:none !important;bottom:0 !important;opacity:1 !important;visibility:visible !important;}" +
        N + C + "cart']{display:none !important;}" +
        N + " .classic-footer-btn{color:#6B7280 !important;}" +
        N + " .classic-footer-btn.classic-tab-active{color:#5A29DE !important;}" +
        N + " .classic-footer-btn .nav-label{color:inherit !important;font-size:9.5px !important;line-height:1.2 !important;position:relative;z-index:1;}" +
        "html[lang^='ar'] " + N + " .classic-footer-btn .nav-label{overflow:visible !important;height:auto !important;line-height:1.6 !important;font-size:10.5px !important;-webkit-line-clamp:unset !important;display:block !important;}" +
        "html[lang^='ar'] " + N + " .classic-nav-container .classic-footer-btn__content--with-label{padding-top:6px !important;padding-bottom:3px !important;}" +
        N + " .classic-nav-container .classic-footer-btn__content--with-label{position:relative;min-height:0 !important;padding:8px 12px 5px !important;gap:2px !important;}" +
        N + " .classic-nav-item[data-hg-nav]:not([data-hg-nav='other']) .classic-footer-btn__content object{display:none !important;}" +
        N + " .classic-nav-item[data-hg-nav]:not([data-hg-nav='other']) .classic-footer-btn__content::before{content:'';display:block;position:relative;z-index:1;width:19px;height:19px;background:currentColor;" +
          "-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;}" +
        N + C + "home'] .classic-footer-btn__content::before{width:15px;height:17px;margin:1px 0;-webkit-mask-image:" + homeMask + ";mask-image:" + homeMask + ";}" +
        N + C + "reorder'] .classic-footer-btn__content::before{-webkit-mask-image:" + navMask(NAV_ICONS.reorder) + ";mask-image:" + navMask(NAV_ICONS.reorder) + ";}" +
        N + C + "account'] .classic-footer-btn__content::before{-webkit-mask-image:" + navMask(NAV_ICONS.account) + ";mask-image:" + navMask(NAV_ICONS.account) + ";}" +
        /* Orders opened from Account keeps the Account tab lit (not Reorder) */
        "html.hg-orders-acct " + N + C + "reorder'] .classic-footer-btn{color:#6B7280 !important;}" +
        "html.hg-orders-acct " + N + C + "account'] .classic-footer-btn{color:#5A29DE !important;}" +
        N + " .v-btn__overlay, "+N+" .v-btn__underlay{display:none !important;}" +
        N + " .v-badge--dot .v-badge__badge{bottom:calc(100% - 15px) !important;inset-inline-start:calc(50% + 9px) !important;}" +
        "}";
      document.head.appendChild(st);
    }

    /* Hyperzod colour scheme (dark) -> white / grey */
    nav.style.setProperty("--scheme-background", "#FFFFFF", "important");
    nav.style.setProperty("--scheme-text", "#6B7280", "important");

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
        "html[lang^='ar'] #MultiVendorHeaderRoot::before{right:auto;left:6px;}" +
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


  /* ================= CURRENCY LABEL =================
     English page  -> "BHD 2.000"
     Arabic page   -> "BD 2.000"
     Rewrites the label only (BHD / BD / Arabic dinar sign) next to a price; digits are left untouched. */

  const CUR_LABEL = "(BHD|BD|\\u062F\\.\\s?\\u0628\\.?)";
  const CUR_NUM = "([\\d\\u0660-\\u0669][\\d\\u0660-\\u0669.,\\u066B\\u066C]*)";
  const CUR_WS = "[\\u200e\\u200f\\s\\u00a0]*";
  const CUR_A = new RegExp("(^|[^A-Za-z0-9_#])" + CUR_LABEL + CUR_WS + CUR_NUM, "g");
  const CUR_TAIL = "[\\u200e\\u200f]*";
  const CUR_B = new RegExp(CUR_NUM + CUR_WS + CUR_LABEL + CUR_TAIL + "(?![A-Za-z])", "g");
  const CUR_QUICK = /BHD|BD|\u062F\.\s?\u0628/;
  const CUR_ONLY = new RegExp("^" + CUR_WS + CUR_LABEL + CUR_WS + "$");

  function applyCurrency() {
    if (!document.body) return;
    const de = document.documentElement;
    const isAr = (de.lang || "").toLowerCase().indexOf("ar") === 0 || de.dir === "rtl";
    /* English: "BHD 2.000"   Arabic: "2.000 د.ب." (number first, Arabic dinar sign, RLM keeps the final dot in place) */
    const T = isAr ? "\u062F.\u0628.\u200f" : "BHD";
    const NB = "\u00a0";
    const fmt = (num) => {
      const tr = /[.,\u066B\u066C]+$/.exec(num);
      const core = tr ? num.slice(0, tr.index) : num;
      const tail = tr ? tr[0] : "";
      return (isAr ? core + NB + T : T + NB + core) + tail;
    };

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const v = n.nodeValue;
        if (!v || !CUR_QUICK.test(v)) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest(".hg-ph,[contenteditable='true']")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const hits = [];
    while (walker.nextNode()) hits.push(walker.currentNode);

    hits.forEach((n) => {
      const v = n.nodeValue;
      let out;
      if (CUR_ONLY.test(v)) {
        /* label sits alone in its own element next to the number (<span>BHD</span><span>2.000</span>) */
        const host = n.parentNode;
        const kids = host.parentNode ? Array.prototype.slice.call(host.parentNode.childNodes) : [];
        const at = kids.indexOf(host);
        const digit = /[\d\u0660-\u0669]/;
        const before = kids.slice(0, at).some((k) => digit.test(k.textContent || ""));
        const after = kids.slice(at + 1).some((k) => digit.test(k.textContent || ""));
        if (!before && !after) return;
        out = before ? NB + T : T + NB;
      } else {
        out = v
          .replace(CUR_A, (m, pre, lab, num) => pre + fmt(num))
          .replace(CUR_B, (m, num, lab) => fmt(num));
      }
      if (out !== v) n.nodeValue = out;
    });
  }

  /* throttle (not debounce): some pages keep the DOM busy, a debounce would never fire.
     v62: was 150ms - reported symptom was a visible flash to the raw Arabic-formatted price ("6.15.ب.د")
     right after picking an add-on option, before this corrects it to "BHD 6.15". Root cause: Hyperzod
     re-renders that price node (a characterData change, which this already observes) the instant the
     add-on selection changes, but the correction was waiting out the full 150ms throttle window before
     re-running - long enough at 60fps (~9 frames) to be clearly visible as a flash. Shortened to 40ms
     (~2-3 frames, at the edge of perceptible) - short enough that the flash should no longer read as a
     visible color/language change, while still well above a single-frame cost on pages that keep the DOM
     continuously busy (the reason this is a throttle and not a debounce in the first place). */
  let curPending = false;
  function scheduleCurrency() {
    if (curPending) return;
    curPending = true;
    setTimeout(() => {
      curPending = false;
      applyCurrency();
    }, 40);
  }

  /* ================= ACCOUNT PAGE (mobile / app) =================
     Purple header + profile card, white grouped rows with purple icon tiles.
     Works from Hyperzod's own rows (.scheme-profile-nav-item), so links/logic stay native.
     Arabic mirrors automatically (logical CSS properties + flipped arrows). */

  const AC_TXT = {
    en: {
      welcome: "Welcome back",
      act: "Activity",
      pref: "Preferences",
      hello: "Welcome to HyperGo",
      sub: "Log in to track your orders and save your addresses",
      cta: "Log in or sign up",
      lang: "English"
    },
    ar: {
      welcome: "أهلاً بعودتك",
      act: "نشاطي",
      pref: "التفضيلات",
      hello: "أهلاً بك في HyperGo",
      sub: "سجّل الدخول لتتبّع طلباتك وحفظ عناوينك",
      cta: "تسجيل الدخول / إنشاء حساب",
      lang: "العربية"
    }
  };

  function acStore() {
    try {
      const app = document.querySelector("#app");
      return app && app.__vue_app__ ? app.__vue_app__.config.globalProperties.$store : null;
    } catch (e) { return null; }
  }

  function ensureAccountStyle() {
    if (document.getElementById("hg-acct-style")) return;
    const st = document.createElement("style");
    st.id = "hg-acct-style";
    st.textContent =
      "@media (max-width:959.98px){" +
      /* v75: restored, matching v57 exactly - see the big note above applyAll() for why the whole JS status-bar
         mechanism (v57-v74) was removed and replaced with the plain CSS this file used before v57 ever existed. */
      "html.hg-acct-page .native-status-bar-bg:not(.native-status-bar-scrim):not(.native-status-bar-scrim-hold){background-color:#8640FC !important;}" +
      /* page + header */
      "#app .scheme-profile-page.scheme-profile-page{padding-top:calc(60px + var(--native-status-bar-height,0px)) !important;background:#fff;}" +
      "#app .scheme-profile-page.hg-acct-root{background:#fff;}" +
      "#app .scheme-profile-page.hg-acct-root .hpz-page-surface{background:transparent !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header{background:#8640FC !important;box-shadow:none !important;}" +
      "#app .scheme-profile-page:not(.hg-acct-root) .scheme-mobile-page-header{border-radius:0 0 22px 22px;box-shadow:0 6px 18px rgba(90,41,222,.18) !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header__surface{background:transparent !important;box-shadow:none !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header__title{color:#fff !important;mix-blend-mode:normal !important;transform:none !important;font-size:17px !important;font-weight:700 !important;padding-inline:56px !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header .back-btn svg path{fill:#fff !important;stroke:#fff !important;}" +
      "html[lang^='ar'] #app .scheme-profile-page .scheme-mobile-page-header .back-btn svg{transform:scaleX(-1);}" +
      /* hero: left-aligned greeting (no avatar), smaller type */
      "#hg-acct-hero{position:relative;overflow:hidden;background:#8640FC;border-radius:0 0 26px 26px;padding:12px 20px 22px;margin-top:-1px;color:#fff;font-family:inherit;}" +
      "#hg-acct-hero .hg-wm{position:absolute;inset-inline-end:-22px;bottom:-40px;width:150px;height:150px;background-position:center;background-repeat:no-repeat;background-size:contain;opacity:.3;pointer-events:none;}" +
      "#hg-acct-hero .hg-row{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:14px;}" +
      "#hg-acct-hero .hg-txt{min-width:0;flex:1;}" +
      "#hg-acct-hero .hg-hi{font-size:12px;line-height:1.3;opacity:.86;}" +
      "#hg-acct-hero .hg-name{font-size:22px;font-weight:700;line-height:1.25;letter-spacing:-.01em;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" +
      "#hg-acct-hero .hg-sub{font-size:12px;line-height:1.4;opacity:.88;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" +
      "#hg-acct-hero.hg-guest .hg-name{font-size:19px;white-space:normal;}" +
      "#hg-acct-hero.hg-guest .hg-sub{white-space:normal;max-width:290px;margin-top:5px;}" +
      "#hg-acct-hero .hg-edit{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.2);border:0;display:flex;align-items:center;justify-content:center;flex:none;cursor:pointer;margin-top:2px;}" +
      "#hg-acct-hero .hg-edit svg{width:15px;height:15px;}" +
      "#hg-acct-hero .hg-cta{position:relative;margin-top:14px;height:40px;padding:0 22px;border-radius:999px;background:#fff;color:#5A29DE;font-size:14px;font-weight:700;border:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font-family:inherit;}" +
      /* rows: flat list on the page, plain icons, a very faint lavender line between rows (no bubbles) */
      "#app .hg-acct-root #ProfileSideBar{padding:0 20px !important;margin-bottom:120px !important;}" +
      "#app .hg-acct-root #ProfileSideBar hr{display:none !important;}" +
      "#app .hg-acct-root #profile{margin-top:0 !important;}" +
      "#app .hg-acct-root #ProfileSideBar .navigation-list{background:transparent !important;box-shadow:none !important;border-radius:0 !important;padding:0 !important;margin-top:4px !important;overflow:visible !important;}" +
      "#app .hg-acct-root #ProfileSideBar .navigation-list{display:flex !important;flex-direction:column;}" +
      "#app .hg-acct-root .hg-l-act{order:9;}#app .hg-acct-root .hg-g-act{order:10;}#app .hg-acct-root .hg-l-pref{order:19;}#app .hg-acct-root .hg-g-pref{order:20;}#app .hg-acct-root .hg-l-out{order:29;}#app .hg-acct-root .hg-g-out{order:30;}" +
      "#app .hg-acct-root .hg-acct-label{font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:#8A849C;font-weight:600;line-height:1.2;margin:18px 0 2px;}" +
      "#app .hg-acct-root .hg-acct-sep{height:14px;}" +
      "#app .hg-acct-root .scheme-profile-nav-item{background:transparent !important;border:0 !important;border-bottom:1px solid #F0EBFA !important;border-radius:0 !important;margin:0 !important;padding:0 !important;min-height:50px;box-shadow:none !important;overflow:visible;}" +
      "#app .hg-acct-root .scheme-profile-nav-item.hg-last{border-bottom:0 !important;}" +
      "#app .scheme-profile-page .user-details{display:none !important;}" +
      /* logged in: native header becomes a white identity block (fixed) - replaced by our hero */
      "#app .scheme-profile-page.hg-nohdr{padding-top:0 !important;}" +
      "#app .scheme-profile-page.hg-nohdr .scheme-mobile-page-header{display:none !important;}" +
      "#app .scheme-profile-page.hg-nohdr #hg-acct-hero{padding-top:calc(var(--native-status-bar-height,0px) + 20px);margin-top:0;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__overlay,.hg-acct-root .scheme-profile-nav-item .v-list-item__underlay{display:none !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item{-webkit-tap-highlight-color:rgba(0,0,0,0) !important;-webkit-touch-callout:none;touch-action:manipulation;}" +
      "#app .hg-acct-root .scheme-profile-nav-item:hover,#app .hg-acct-root .scheme-profile-nav-item:focus,#app .hg-acct-root .scheme-profile-nav-item:focus-visible{background:transparent !important;outline:none !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item:active{background:#FAF8FF !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__prepend>div:not(.v-list-item__spacer){width:24px;height:24px;border-radius:0;background:transparent;display:flex;align-items:center;justify-content:center;margin-inline-end:14px !important;flex:none;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__spacer{display:none !important;width:0 !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon{width:18px !important;height:18px !important;margin:0 !important;display:block;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg{width:18px;height:18px;display:block;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg [stroke]:not([stroke='none']){stroke:#5A29DE !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg [fill]:not([fill='none']){fill:#5A29DE !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item-title{font-size:14px !important;font-weight:500 !important;line-height:1.3 !important;color:#262A33 !important;text-transform:none !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__append{display:flex;align-items:center;gap:8px;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__append .v-icon{color:#CFC9DF !important;font-size:16px !important;width:16px !important;height:16px !important;}" +
      "html[lang^='ar'] #app .hg-acct-root .scheme-profile-nav-item .v-list-item__append .v-icon{transform:scaleX(-1);}" +
      "#app .hg-acct-root .hg-acct-val{font-size:12px;font-weight:500;color:#8A849C;}" +
      "#app .hg-acct-root .scheme-profile-nav-item.hg-danger .v-list-item-title{color:#E5384F !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item.hg-danger .scheme-profile-icon svg [stroke]:not([stroke='none']){stroke:#E5384F !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item.hg-danger .scheme-profile-icon svg [fill]:not([fill='none']){fill:#E5384F !important;}" +
      "}";
    document.head.appendChild(st);
  }

  /* v72: Adam's diagnostic readout (v70) caught something concrete - on the plain, static home page, the status
     bar's real computed background-color was smoothly animating from white through lavender blends to solid
     #8640FC purple, then snapping to white again. Our own code never produces that: every write in
     applyStatusBarColor() is an instant, solid, !important hex color - it can't blend through fractional alpha
     steps. A smooth blend like that only happens under a CSS "transition" - meaning something native (outside
     this file) has background-color transitions on this element, and it's genuinely being asked to go purple
     while sitting on the home page. Since purple only ever comes from onCategory / hg-acct-page / hg-search-page /
     hg-addr-editor being true, and onCategory was already ruled out (confirmed absent from the DOM on home, even
     mid-scroll), the likely culprit is one of the other three page-detector functions false-positiving: each of
     them finds its target element with a plain querySelector/getElementById and never checks whether that element
     is actually visible. Vue apps commonly keep an overlay/panel component mounted in the DOM (hidden via
     display:none or 0-size) rather than destroying it, for faster reopening - meaning "the search/account/address
     element exists somewhere in the DOM" and "the user is currently looking at that screen" are NOT the same
     thing, and every detector here was treating them as if they were. Adding a visibility check closes that gap. */
  function isVisible(el) {
    if (!el) return false;
    // Inert native drawers are closed. A page behind a modal can be aria-hidden while still visually present.
    if (el.closest('.v-navigation-drawer[inert]')) return false;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.right > 0 && r.bottom > 0 && r.left < window.innerWidth && r.top < window.innerHeight;
  }

  /* during page transitions two profile-layout pages can exist at once: prefer the one with the account list */
  function acctPage() {
    const all = document.querySelectorAll(".scheme-profile-page");
    for (let i = 0; i < all.length; i++) if (all[i].querySelector("#ProfileSideBar") && isVisible(all[i])) return all[i];
    for (let i = 0; i < all.length; i++) if (isVisible(all[i])) return all[i];
    return null;
  }

  function applyHyperGoAccount() {
    const mobile = window.matchMedia("(max-width: 959.98px)").matches;
    const page = acctPage();
    const side = page ? page.querySelector("#ProfileSideBar") : null;
    let hero = page ? page.querySelector("#hg-acct-hero") : document.getElementById("hg-acct-hero");

    document.documentElement.classList.toggle("hg-acct-page", !!(mobile && page));
    if (page && mobile) ensureAccountStyle();

    if (!mobile || !page || !side) {
      if (hero) hero.remove();
      if (page) {
        /* classList.add/remove always queue a mutation, even when nothing changes: only touch when needed */
        if (page.classList.contains("hg-acct-root")) page.classList.remove("hg-acct-root");
        if (page.classList.contains("hg-nohdr")) page.classList.remove("hg-nohdr");
      }
      return;
    }

    ensureAccountStyle();
    page.classList.toggle("hg-acct-root", true);

    /* native header without its title bar = logged-in identity block; hide it (and any desktop-style copy) */
    const hdr = page.querySelector(".scheme-mobile-page-header");
    page.classList.toggle("hg-nohdr", !hdr || !hdr.querySelector(".scheme-mobile-page-header__surface"));
    side.querySelectorAll(".user-details").forEach((u) => {
      u.style.display = "none";
      const par = u.parentElement;
      if (par && par !== side && par.children.length === 1 && /v-card-text/.test(par.className)) par.style.display = "none";
    });

    const ar = hgIsAr();
    const T = AC_TXT[ar ? "ar" : "en"];
    const st = acStore();
    let user = null, logged = false;
    try {
      logged = !!(st && st.getters.isLoggedIn);
      user = logged ? st.getters.getLoggedInUser : null;
    } catch (e) {}

    const name = (user && (user.full_name || ((user.first_name || "") + " " + (user.last_name || "")).trim())) || "";
    const sub = user ? (user.mobile || user.email || "") : "";
    const key = [logged, name, sub, ar].join("|");

    if (!hero) {
      hero = document.createElement("div");
      hero.id = "hg-acct-hero";
      const container = Array.prototype.slice.call(page.children).find((c) => /v-container/.test(c.className));
      if (container) page.insertBefore(hero, container);
      else page.appendChild(hero);
    }

    if (hero.getAttribute("data-key") !== key) {
      hero.setAttribute("data-key", key);
      hero.className = logged ? "hg-user" : "hg-guest";
      const esc = (x) => String(x).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
      const wm = '<span class="hg-wm"></span>';
      if (logged) {
        hero.innerHTML =
          wm +
          '<div class="hg-row"><div class="hg-txt"><div class="hg-hi">' + esc(T.welcome) + '</div><div class="hg-name">' + esc(name || "HyperGo") + '</div>' +
          (sub ? '<div class="hg-sub"><bdi dir="ltr">' + esc(sub) + "</bdi></div>" : "") + "</div>" +
          '<button type="button" class="hg-edit" aria-label="Edit">' +
          "<svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 20h9'/><path d='M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'/></svg></button></div>";
        const eb = hero.querySelector(".hg-edit");
        eb.addEventListener("click", () => {
          const s2 = acStore();
          if (s2) s2.commit("sidePanel", ["editProfile", true]);
        });
      } else {
        hero.innerHTML =
          wm +
          '<div class="hg-name">' + esc(T.hello) + '</div><div class="hg-sub">' + esc(T.sub) + "</div>" +
          '<button type="button" class="hg-cta">' + esc(T.cta) + "</button>";
        hero.querySelector(".hg-cta").addEventListener("click", () => {
          const nativeLogin=[...page.querySelectorAll(".scheme-profile-nav-item")].find(el=>/^(login|تسجيل الدخول)$/i.test(el.textContent.trim()));
          if(nativeLogin){nativeLogin.click();return;}
          const s2 = acStore();
          if (!s2) return;
          s2.commit("setAuthTab", "login-signup");
          s2.commit("sidePanel", ["auth", true]);
        });
      }
    }

    const wmEl = hero.querySelector(".hg-wm");
    if (wmEl && !wmEl.style.backgroundImage) wmEl.style.backgroundImage = 'url("' + LOGO_OUTLINE + '")';

    /* group the rows: Activity / Preferences, Log out on its own */
    const navList = page.querySelector(".navigation-list");
    if (navList) {
      const navRows = Array.prototype.filter.call(navList.children, (c) => c.classList && c.classList.contains("scheme-profile-nav-item"));
      const sig = navRows.map((r) => (r.getAttribute("href") || "") + (r.textContent || "").trim()).join("|") + "|" + ar;
      if (navRows.length && (navList.getAttribute("data-hg-sig") !== sig || !navList.querySelector(".hg-acct-label,.hg-acct-sep"))) {
        navList.setAttribute("data-hg-sig", sig);
        navList.querySelectorAll(".hg-acct-label,.hg-acct-sep").forEach((n) => n.remove());
        const groupOf = (r) => {
          const t = ((r.getAttribute("href") || "") + " " + (r.textContent || "")).toLowerCase();
          if (/log\s?out|sign\s?out|\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C/.test(t)) return "out";
          if (/\/profile\/(orders|address|addresses|wallet|favou?rites?)|my orders|address|wallet|\u0637\u0644\u0628|\u0639\u0646\u0627\u0648\u064A\u0646|\u0645\u062D\u0641\u0638/.test(t)) return "act";
          return "pref";
        };
        const seen = {};
        navRows.forEach((r, i) => {
          const g = groupOf(r);
          const cls = "hg-g-" + g;
          if (!r.classList.contains(cls)) { r.classList.remove("hg-g-act", "hg-g-pref", "hg-g-out"); r.classList.add(cls); }
          if (!seen[g]) {
            seen[g] = true;
            const el = document.createElement("div");
            if (g === "out") el.className = "hg-acct-sep hg-l-out";
            else { el.className = "hg-acct-label hg-l-" + g; el.textContent = g === "act" ? T.act : T.pref; }
            navList.insertBefore(el, r);
          }
          let last = true;
          for (let k = i + 1; k < navRows.length; k++) if (groupOf(navRows[k]) === g) { last = false; break; }
          if (r.classList.contains("hg-last") !== last) r.classList.toggle("hg-last", last);
        });
      }
    }

    /* row tags: red for log out, current language on the language row */
    page.querySelectorAll(".scheme-profile-nav-item").forEach((row) => {
      const txt = (row.textContent || "").trim().toLowerCase();
      row.classList.toggle("hg-danger", /log\s?out|sign\s?out|تسجيل الخروج/.test(txt));
      const href = row.getAttribute("href") || "";
      if (/\/profile\/language$/.test(href)) {
        const app = row.querySelector(".v-list-item__append");
        if (app && !app.querySelector(".hg-acct-val")) {
          const v = document.createElement("span");
          v.className = "hg-acct-val";
          v.textContent = T.lang;
          app.insertBefore(v, app.firstChild);
        }
      }
    });
  }

  /* LANGUAGE PAGE (mobile/app): card-style options, proper title, native language names */
  function ensureLanguageStyle() {
    if (document.getElementById("hg-lang-style")) return;
    const st = document.createElement("style");
    st.id = "hg-lang-style";
    st.textContent =
      "@media (max-width:959.98px){" +
      "#app .scheme-profile-page #Languages{margin:0 !important;padding:22px 4px 0 !important;}" +
      "#app #Languages .v-card{background:transparent !important;box-shadow:none !important;}" +
      "#app #Languages .v-card-text{padding:0 !important;}" +
      "#app #Languages ul.languages{margin:0 !important;padding:0 !important;}" +
      "#app #Languages ul.languages hr{display:none !important;}" +
      "#app #Languages .v-card-actions{display:none !important;}" +
      "#app #Languages li.language{background:#fff;border:2px solid #EFEAFB;border-radius:16px;margin:0 0 12px !important;padding:0 !important;box-shadow:0 2px 10px rgba(60,30,140,.06);}" +
      "#app #Languages li.language:has(input:checked){border-color:#5A29DE;background:#F8F5FF;}" +
      "#app #Languages li.language label{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:64px;padding:0 18px;cursor:pointer;}" +
      "#app #Languages li.language .name{font-size:15px !important;font-weight:600;color:#262A33;}" +
      "#app #Languages input.radio{-webkit-appearance:none;appearance:none;width:24px;height:24px;border-radius:50%;border:2px solid #C9C2DD;background:#fff;margin:0;flex:none;position:relative;}" +
      "#app #Languages input.radio:checked{border-color:#5A29DE;background:#5A29DE;}" +
      "#app #Languages input.radio:checked::after{content:'';position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#fff;}" +
      "}";
    document.head.appendChild(st);
  }

  function langNeedsFix() {
    const root = document.getElementById("Languages");
    if (!root) return false;
    const page = root.closest(".scheme-profile-page");
    const h1 = page && page.querySelector(".scheme-mobile-page-header__title");
    if (h1 && /choose language title|\u0627\u062E\u062A\u0631 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0644\u063A\u0629/i.test(h1.textContent)) return true;
    const nm = root.querySelectorAll(".language .name");
    for (let i = 0; i < nm.length; i++) if (/^\s*arabic\s*$/i.test(nm[i].textContent)) return true;
    return false;
  }

  function applyHyperGoLanguage() {
    const root = document.getElementById("Languages");
    if (!root) return;
    if (window.matchMedia("(max-width: 959.98px)").matches) ensureLanguageStyle();
    const page = root.closest(".scheme-profile-page");
    const h1 = page && page.querySelector(".scheme-mobile-page-header__title");
    if (h1 && /choose language title|\u0627\u062E\u062A\u0631 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0644\u063A\u0629/i.test(h1.textContent)) h1.textContent = hgIsAr() ? "اللغة" : "Language";
    root.querySelectorAll(".language .name").forEach((n) => {
      if (/^\s*arabic\s*$/i.test(n.textContent)) n.textContent = "العربية";
    });
  }

  /* ORDERS: "My Orders" (Account) and the Reorder tab are the same Hyperzod page. When it is opened from
     Account, keep the Account tab highlighted so it feels like part of Account, not a tab switch. */
  let ordersFromAcct = false, ordersClickTs = 0;
  function syncOrdersNav() {
    const onOrders = /\/profile\/orders\/?$/.test(location.pathname);
    if (ordersFromAcct && !onOrders && Date.now() - ordersClickTs > 1500) ordersFromAcct = false;
    document.documentElement.classList.toggle("hg-orders-acct", ordersFromAcct);
  }
  document.addEventListener(
    "click",
    (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      if (t.closest("#ProfileSideBar [href$='/profile/orders']")) {
        ordersFromAcct = true;
        ordersClickTs = Date.now();
        document.documentElement.classList.add("hg-orders-acct");
      } else if (t.closest("#MultiVendorBottomNav .classic-nav-item[data-hg-nav='reorder']")) {
        ordersFromAcct = false;
        document.documentElement.classList.remove("hg-orders-acct");
      }
    },
    true
  );

  /* FORMS: Edit Profile sheet + Add/Edit Address screen (mobile/app), and spelling fixes in Hyperzod's own text */
  function ensureFormsStyle() {
    if (document.getElementById("hg-forms-style")) return;
    const st = document.createElement("style");
    st.id = "hg-forms-style";
    const P = "#5A29DE", L = "#F6F4FB", B = "#E4DEF5";
    const EP = "html body .scheme-edit-profile-panel ";
    const AE = "html body [data-color-scheme] .scheme-address-editor ";
    st.textContent =
      "@media (max-width:959.98px){" +
      /* v75: restored, matching v57 exactly (no scrim exclusion here - that's how v57 had it) */
      "html.hg-addr-editor .native-status-bar-bg{background-color:#8640FC !important;}" +
      /* ---- EDIT PROFILE (bottom sheet) ---- */
      EP + ".v-overlay__content{border-radius:26px 26px 0 0 !important;overflow:hidden;}" +
      EP + ".scheme-edit-profile-surface{border-radius:26px 26px 0 0 !important;background:#fff !important;position:relative;}" +
      EP + ".scheme-edit-profile-surface::before{content:'';position:absolute;top:9px;left:50%;width:42px;height:4px;margin-left:-21px;border-radius:4px;background:#DCD5EE;}" +
      EP + ".v-card-title{padding:28px 22px 2px !important;}" +
      EP + ".v-card-title .text-h5{font-size:22px !important;font-weight:700 !important;line-height:1.3 !important;letter-spacing:0 !important;color:#000 !important;}" +
      EP + ".v-card-text{padding:6px 22px 0 !important;}" +
      EP + ".v-card-text .v-container{padding:0 !important;}" +
      EP + "form label.tw-font-semibold{font-size:13px !important;font-weight:600 !important;color:#5B5670 !important;margin:16px 0 8px 2px !important;}" +
      EP + ".v-field{background:" + L + " !important;border:1.5px solid transparent;border-radius:14px !important;box-shadow:none !important;}" +
      EP + ".v-field__outline{display:none !important;}" +
      EP + ".v-field__input{font-size:16px !important;color:#262A33 !important;min-height:52px !important;padding:0 16px !important;}" +
      EP + ".v-field--focused{background:#fff !important;border-color:" + P + " !important;box-shadow:0 0 0 4px rgba(90,41,222,.12) !important;}" +
      EP + ".v-input--error .v-field{border-color:#E5384F !important;}" +
      EP + ".v-input__details{padding:2px 4px 0 !important;min-height:0 !important;}" +
      EP + ".v-counter{direction:ltr;unicode-bidi:isolate;}" +
      EP + "#login-input," + EP + "#login-input *," + AE + "#login-input," + AE + "#login-input *{direction:ltr !important;}" +
      EP + ".scheme-edit-profile-actions{display:grid !important;grid-template-columns:1fr 1fr;gap:10px;padding:14px 22px calc(18px + env(safe-area-inset-bottom,0px)) !important;border-top:1px solid #F0ECF8;background:#fff;align-items:stretch;}" +
      EP + ".scheme-edit-profile-actions .v-spacer{display:none !important;}" +
      EP + ".scheme-edit-profile-actions .v-btn{height:52px !important;min-width:0 !important;width:100%;border-radius:16px !important;font-size:15px !important;font-weight:700 !important;text-transform:none !important;letter-spacing:0 !important;box-shadow:none !important;}" +
      EP + ".scheme-edit-profile-actions .v-btn__overlay," + EP + ".scheme-edit-profile-actions .v-btn__underlay{display:none !important;}" +
      EP + ".scheme-edit-profile-actions .scheme-edit-profile-primary{grid-column:1/-1;order:1;background:" + P + " !important;color:#fff !important;box-shadow:0 8px 20px rgba(90,41,222,.28) !important;}" +
      EP + ".scheme-edit-profile-actions .scheme-edit-profile-secondary{order:2;background:#F2ECFF !important;color:" + P + " !important;}" +
      EP + ".scheme-edit-profile-actions .v-btn:not(.scheme-edit-profile-primary):not(.scheme-edit-profile-secondary){order:3;background:#FFECEF !important;color:#E5384F !important;}" +

      /* ---- ADD / EDIT ADDRESS (full screen) ---- */
      AE + ".scheme-address-editor__header{background:#8640FC !important;margin-top:calc(-1 * var(--native-status-bar-height,0px));padding-top:var(--native-status-bar-height,0px);border-radius:0 0 24px 24px;box-shadow:0 8px 22px rgba(90,41,222,.2);}" +
      AE + ".scheme-address-editor__header>div:first-child{background:transparent !important;box-shadow:none !important;}" +
      AE + ".scheme-address-editor__header>div:first-child span{color:#fff !important;font-size:17px !important;font-weight:700 !important;}" +
      AE + ".scheme-address-editor__header>div:first-child img{filter:brightness(0) invert(1);}" +
      AE + ".scheme-address-editor__header>div:first-child>div:first-child{margin-inline-start:5px;}" +
      AE + ".scheme-address-editor__header>div:first-child>div:first-child img{display:none !important;}" +
      AE + ".scheme-address-editor__header>div:first-child>div:first-child::before{content:'';display:block;width:22px;height:22px;background:#fff;-webkit-mask:" + ARROW_URL + " center/contain no-repeat;mask:" + ARROW_URL + " center/contain no-repeat;}" +
      "html[lang^='ar'] .scheme-address-editor__header>div:first-child>div:first-child::before{transform:scaleX(-1);}" +
      AE + ".scheme-address-editor__header>div:nth-child(2){padding:2px 16px 18px !important;background:transparent !important;}" +
      AE + ".scheme-address-editor__header .v-field{background:#fff !important;border-radius:14px !important;box-shadow:0 6px 18px rgba(40,10,120,.22) !important;}" +
      AE + "#locationConfirm h2{font-size:18px !important;font-weight:700 !important;color:#000 !important;}" +
      AE + "#addAddressForm .tw-border-b{border-color:" + B + " !important;margin-bottom:18px !important;}" +
      AE + "#addAddressForm .address-form>div{margin:0 0 12px !important;}" +
      AE + "#addAddressForm .v-field{background:" + L + " !important;border:1.5px solid transparent;border-radius:14px !important;padding:0 16px !important;min-height:58px;box-shadow:none !important;}" +
      AE + "#addAddressForm .v-field__outline::before{display:none !important;}" +
      AE + "#addAddressForm .v-field__outline::after{display:none !important;}" +
      AE + "#addAddressForm .v-field-label{text-transform:none !important;letter-spacing:0 !important;font-size:14px !important;font-weight:600 !important;color:#8A849C !important;}" +
      AE + "#addAddressForm .v-field__input{font-size:16px !important;color:#262A33 !important;}" +
      /* filled / focused: small label on top, value underneath (no overlap) */
      AE + "#addAddressForm .v-field--active .v-field-label--floating{font-size:11.5px !important;top:9px !important;transform:none !important;line-height:1.2 !important;}" +
      AE + "#addAddressForm .v-field--active .v-field-label--floating{inset-inline-start:16px !important;inset-inline-end:auto !important;max-width:calc(100% - 32px);}" +
      AE + "#addAddressForm .v-field--active .v-field__input{padding-top:22px !important;padding-bottom:4px !important;}" +
      AE + "#addAddressForm .v-input__details{min-height:0 !important;padding:0 !important;}" +
      /* phone: flag, +973 and number on one centred line */
      AE + "#AddressInputContactPhoneNumber #login-input{height:58px;margin:0 !important;}" +
      AE + "#AddressInputContactPhoneNumber .v-input__prepend-outer{position:absolute !important;left:0;top:0;height:58px !important;display:flex !important;align-items:center;z-index:3;margin:0 !important;}" +
      AE + "#AddressInputContactPhoneNumber .country-select{height:auto !important;}" +
      AE + "#AddressInputContactPhoneNumber .country-select-toggle{padding:0 0 0 16px !important;height:58px !important;display:flex !important;align-items:center;gap:2px;}" +
      AE + "#AddressInputContactPhoneNumber .v-field__prepend-inner{align-items:center !important;padding:0 !important;}" +
      AE + "#AddressInputContactPhoneNumber .v-field__field{align-items:center !important;}" +
      AE + "#AddressInputContactPhoneNumber .v-field__input," + AE + "#AddressInputContactPhoneNumber .v-field--active .v-field__input{padding:0 !important;min-height:58px !important;height:58px !important;}" +
      AE + "#addAddressForm .v-field--focused{background:#fff !important;border-color:" + P + " !important;box-shadow:0 0 0 4px rgba(90,41,222,.12) !important;}" +
      AE + "#addAddressForm .v-input--error .v-field{border-color:#E5384F !important;}" +
      AE + "#AddressSelectType label{font-size:13px !important;font-weight:600 !important;color:#5B5670 !important;text-transform:none !important;letter-spacing:0 !important;margin-bottom:10px;display:block;}" +
      AE + "#AddressSelectType .v-chip{height:46px !important;border-radius:14px !important;background:" + L + " !important;border:1.5px solid transparent !important;color:#1B1F2A !important;font-weight:600;padding:0 18px !important;opacity:1;}" +
      AE + "#AddressSelectType .v-chip__overlay{display:none;}" +
      AE + "#AddressSelectType .v-chip--selected," + AE + "#AddressSelectType .v-chip.text-primary{background:#F2ECFF !important;border-color:" + P + " !important;color:" + P + " !important;}" +
      AE + "#AddressSelectType .v-chip--disabled{opacity:.45 !important;}" +
      AE + ".scheme-address-editor__mobile-footer{background:#fff !important;box-shadow:0 -8px 24px rgba(27,32,35,.08);border-radius:20px 20px 0 0;}" +
      AE + ".scheme-address-editor__submit{background:" + P + " !important;color:#fff !important;height:54px !important;border-radius:16px !important;font-size:16px !important;font-weight:700 !important;text-transform:none !important;letter-spacing:0 !important;box-shadow:0 8px 20px rgba(90,41,222,.28) !important;}" +
      AE + ".scheme-address-editor__submit[disabled]," + AE + ".scheme-address-editor__submit.v-btn--disabled{opacity:.5 !important;}" +
      "}";
    document.head.appendChild(st);
  }

  const TYPO_MAP = {
    Adress: "Address", adress: "address", ADRESS: "ADDRESS",
    Adresses: "Addresses", adresses: "addresses", ADRESSES: "ADDRESSES",
    addreses: "addresses", Addreses: "Addresses", ADDRESES: "ADDRESSES"
  };
  const TYPO_RE = new RegExp("\\b(" + Object.keys(TYPO_MAP).join("|") + ")\\b", "g");

  function fixTypos(root) {
    if (!root || !/adress|addreses/i.test(root.textContent || "")) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    while (w.nextNode()) {
      const n = w.currentNode;
      if (n.nodeValue && /adress|addreses/i.test(n.nodeValue)) hits.push(n);
    }
    hits.forEach((n) => {
      const v = n.nodeValue.replace(TYPO_RE, (m) => TYPO_MAP[m]);
      if (v !== n.nodeValue) n.nodeValue = v;
    });
  }

  const AR_FORM_FIX = {
    "\u0642\u0631\u064A\u0628": "\u0625\u063A\u0644\u0627\u0642",           /* Close was translated as "near" */
    "\u064A\u062D\u0641\u0638": "\u062D\u0641\u0638",                       /* Save */
    "\u064A\u062A\u0627\u0628\u0639": "\u0645\u062A\u0627\u0628\u0639\u0629",   /* Proceed */
    "Save address as": "\u062D\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0643\u0640",
    "Country": "\u0627\u0644\u062F\u0648\u0644\u0629"
  };
  function fixArabicForms() {
    if (!hgIsAr()) return;
    const roots = document.querySelectorAll(".scheme-edit-profile-panel, .scheme-address-editor");
    roots.forEach((root) => {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const hits = [];
      while (w.nextNode()) {
        const n = w.currentNode;
        const t = n.nodeValue && n.nodeValue.trim();
        if (t && AR_FORM_FIX[t]) hits.push(n);
      }
      hits.forEach((n) => { n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), AR_FORM_FIX[n.nodeValue.trim()]); });
      root.querySelectorAll("input[placeholder='Search for area or address']").forEach((i) => i.setAttribute("placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0646\u0637\u0642\u0629 \u0623\u0648 \u0639\u0646\u0648\u0627\u0646"));
    });
  }

  function applyHyperGoForms() {
    const mobile = window.matchMedia("(max-width: 959.98px)").matches;
    const ed = [...document.querySelectorAll(".scheme-address-editor")].find(isVisible);
    document.documentElement.classList.toggle("hg-addr-editor", !!(mobile && ed && isVisible(ed)));
    if (mobile && (ed || document.querySelector(".scheme-edit-profile-panel"))) ensureFormsStyle();
    fixTypos(document.body);
    fixArabicForms();
  }

  /* EXTRA STYLES (mobile/app): back button on My Orders (when opened from Account) + Talabat-style search page */
  function ensureExtraStyle() {
    if (document.getElementById("hg-extra-style")) return;
    const st = document.createElement("style");
    st.id = "hg-extra-style";
    const HG_ZOOM = 1; /* v80: was 0.88 (about 12% smaller than native) - shrinking the whole app down also shrinks
       every gap and margin right along with it, which is very likely the literal cause of Adam's "everything
       feels cramped/too zoomed in" complaint: content packs in tighter as a direct side effect of the shrink,
       even though each element is individually smaller. Restored to 1 (full native size) as the first, highest-
       leverage move before touching individual paddings/gaps one by one. */
    const S = "html body [data-color-scheme] #MultiVendorSearch ";
    const TUNE_IC = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1'/%3E%3Ccircle cx='15' cy='6' r='2'/%3E%3Ccircle cx='9' cy='12' r='2'/%3E%3Ccircle cx='17' cy='18' r='2'/%3E%3C/svg%3E\")";
    const SEARCH_IC = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='M21 21l-4.3-4.3'/%3E%3C/svg%3E\")";
    const ARROW = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12H5M12 19l-7-7 7-7'/%3E%3C/svg%3E\")";
    st.textContent =
      /* v80: HyperGo's brand guide explicitly bans pure white (#FFFFFF) and pure black (#000000) for
         UI surfaces/text - "Global Constraint: Pure White and Pure Black typography, icons, and UI elements
         are strictly banned." The whole app currently sits on a literal #FFFFFF background (confirmed live:
         both <body> and Vuetify's .v-application compute to rgb(255,255,255)), which is a big part of the
         "black and white, choking" feeling. Replacing with the brand's own Opus color at its lightest
         documented tint (#FAFAFC, Opus 90% tint) - close enough to white to change nothing about legibility,
         but on-brand and noticeably warmer than stark white. Not gated to mobile - applies everywhere. */
      "body,.v-application{background-color:#FAFAFC !important;}" +
      "@media (max-width:959.98px){" +
      /* orders back button */
      "#hg-orders-back{position:absolute;inset-inline-start:8px;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;background:transparent;display:flex;align-items:center;justify-content:center;z-index:75;padding:0;margin:0;-webkit-tap-highlight-color:transparent;cursor:pointer;}" +
      "#hg-orders-back svg{display:none !important;}" +
      "#hg-orders-back::before,#app .scheme-mobile-page-header .back-btn::before{content:'';display:block;width:22px;height:22px;background:#262A33;-webkit-mask:" + ARROW + " center/contain no-repeat;mask:" + ARROW + " center/contain no-repeat;}" +
      "#hg-orders-back::before,#app .scheme-profile-page .scheme-mobile-page-header .back-btn::before{background:#fff;}" +
      "#app .scheme-mobile-page-header .back-btn{width:44px !important;height:44px !important;min-width:44px !important;margin-inline-start:8px !important;display:flex !important;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;}" +
      "#app .scheme-mobile-page-header .back-btn>.v-icon{display:none !important;}" +
      "#app .scheme-mobile-page-header .back-btn svg{display:none !important;}" +
      "html[lang^='ar'] #hg-orders-back::before,html[lang^='ar'] #app .scheme-mobile-page-header .back-btn::before{transform:scaleX(-1);}" +
      "#app .scheme-mobile-page-header__surface:has(>#hg-orders-back){position:relative !important;}" +
      /* APP-WIDE SIZE: page content is scaled down (HG_ZOOM) so text/icons/spacing feel like a normal-sized app. Header, bottom nav and status strip keep their size. */
      "#app .v-main:not(#MultiVendorSearch){zoom:" + HG_ZOOM + ";}" +
      "#app .scheme-profile-page>.v-container{zoom:" + HG_ZOOM + ";}" +
      /* Home: no over-scroll above the header; own pull-to-refresh below it */
      "#MultiVendorHome{overscroll-behavior-y:none;}" +
      "#hg-ptr{position:absolute;left:0;right:0;height:0;overflow:hidden;display:none;pointer-events:none;z-index:0;opacity:0;}" +
      "#hg-ptr .hg-goo{position:absolute;left:50%;top:50%;width:60px;height:24px;margin:-12px 0 0 -30px;overflow:visible;opacity:.85;}" +
      "#hg-ptr .hg-goo circle{fill:#8B62F1;}" +
      "#hg-ptr.hg-loading .hg-goo circle{animation:hgGoo 1.8s ease-in-out infinite backwards;}" +
      "#hg-ptr.hg-done .hg-goo circle{transition:transform .25s ease;}" +
      "#hg-ptr.hg-loading .hg-goo .g1{animation-delay:.24s;}" +
      "#hg-ptr.hg-loading .hg-goo .g2{animation-delay:.48s;}" +
      "@keyframes hgGoo{0%{transform:translateX(0);}25%{transform:translateX(13px);}75%{transform:translateX(-13px);}100%{transform:translateX(0);}}" +
      /* home header: native filter button, minimal - just a small icon at the end of the search pill */
      "#app .home-mobile-search-row #MobileSearchFilterBtn{display:inline-flex !important;position:absolute !important;inset-inline-end:16px;top:10px;width:42px !important;min-width:0 !important;height:36px !important;margin:0 !important;padding:0 !important;background:transparent !important;border:0 !important;box-shadow:none !important;border-radius:0 18px 18px 0 !important;color:#5A29DE !important;z-index:4;-webkit-tap-highlight-color:transparent;}" +
      "html[dir='rtl'] #app .home-mobile-search-row #MobileSearchFilterBtn,html[lang^='ar'] #app .home-mobile-search-row #MobileSearchFilterBtn{border-radius:18px 0 0 18px !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn::before{content:'';position:absolute;inset-inline-start:0;top:9px;bottom:9px;width:1px;background:rgba(27,32,35,.14);}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__overlay,#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__underlay{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn svg{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__content::after{content:'';display:block;width:18px;height:18px;background:#5A29DE;-webkit-mask:" + TUNE_IC + " center/contain no-repeat;mask:" + TUNE_IC + " center/contain no-repeat;}" +
      "#app .home-mobile-search-input .v-field__input{padding-inline-end:48px !important;}" +
      /* search page: compact Talabat-sized header - round back button beside a slim pill with the search icon inside */
      S + "{background:#fff !important;}" +
      /* v75: restored, matching v57 exactly */
      "html.hg-search-page .native-status-bar-bg:not(.native-status-bar-scrim):not(.native-status-bar-scrim-hold){background-color:#8640FC !important;}" +
      S + ".scheme-global-search-mobile-header{background:#8640FC !important;margin-left:-16px !important;margin-right:-16px !important;padding:11px 16px !important;border-radius:0 0 22px 22px !important;box-shadow:none !important;border-bottom:0 !important;}" +
      S + ".mobile-search-input .v-input__control{padding-inline-start:38px !important;}" +
      S + ".mobile-search-input .v-field{display:flex !important;align-items:center;min-height:38px !important;height:38px !important;background:#fff !important;border:0 !important;border-radius:999px !important;box-shadow:none !important;overflow:visible !important;padding:0 12px !important;}" +
      S + ".mobile-search-input .v-field__overlay,html body [data-color-scheme] #MultiVendorSearch .mobile-search-input .v-field__outline{display:none !important;}" +
      S + ".mobile-search-input .v-field__prepend-inner{position:absolute !important;inset-inline-start:-42px;top:50%;transform:translateY(-50%);width:34px;height:34px;padding:0 !important;margin:0 !important;display:flex !important;align-items:center;justify-content:center;background:transparent;border:0;border-radius:0;box-sizing:border-box;}" +
      S + ".mobile-search-input .v-field__prepend-inner .v-icon{width:22px !important;height:22px !important;font-size:22px !important;display:flex !important;align-items:center;justify-content:center;}" +
      S + ".mobile-search-input .v-field__prepend-inner .v-icon svg{display:none !important;}" +
      S + ".mobile-search-input .v-field__prepend-inner .v-icon::before{content:'';display:block;width:22px;height:22px;background:#fff;-webkit-mask:" + ARROW + " center/contain no-repeat;mask:" + ARROW + " center/contain no-repeat;}" +
      "html[lang^='ar'] " + S.replace("html body ", "body ") + ".mobile-search-input .v-field__prepend-inner .v-icon::before{transform:scaleX(-1);}" +
      S + ".mobile-search-input .v-field__append-inner{order:-1;padding:0 8px 0 0 !important;margin:0 !important;display:flex;align-items:center;}" +
      "html[lang^='ar'] " + S.replace("html body ", "body ") + ".mobile-search-input .v-field__append-inner{padding:0 0 0 8px !important;}" +
      S + ".mobile-search-input .v-field__append-inner svg{display:none !important;}" +
      S + ".mobile-search-input .v-field__append-inner>div::before{content:'';display:block;width:18px;height:18px;background:#6B7280;-webkit-mask:" + SEARCH_IC + " center/contain no-repeat;mask:" + SEARCH_IC + " center/contain no-repeat;}" +
      S + ".mobile-search-input .v-field__field{flex:1 1 auto;min-width:0;height:38px;}" +
      S + ".mobile-search-input .v-field__input{min-height:38px !important;height:38px !important;padding:0 !important;font-size:14px !important;font-weight:400 !important;color:#262A33 !important;}" +
      S + ".mobile-search-input input::placeholder{color:#8A8F95 !important;opacity:1 !important;}" +
      /* categories: compact swipeable 2-row strip of round images instead of one huge grid */
      S + ".hg-search-tabs{display:none !important;}" +
      S + ".recent-searches{width:100% !important;max-width:none !important;padding:2px 0 32px !important;}" +
      S + ".recent-searches>div:has(+ .tw-grid),html body [data-color-scheme] #MultiVendorSearch .recent-searches .recent-search-heading{height:auto !important;margin:26px 0 16px !important;padding:0 18px !important;color:#000 !important;font-family:inherit !important;font-size:17px !important;line-height:1.2 !important;font-weight:600 !important;text-transform:none !important;}" +
      S + "[class*='Axiforma'],html body [data-color-scheme] #MultiVendorSearch input{font-family:inherit !important;}" +
      S + ".recent-searches>div:has(+ .tw-grid)>div,html body [data-color-scheme] #MultiVendorSearch .recent-searches .recent-search-heading>div{font-size:17px !important;font-weight:600 !important;text-transform:none !important;font-family:inherit !important;}" +
      S + ".recent-searches .tw-grid{display:grid !important;grid-auto-flow:column !important;grid-template-columns:none !important;grid-template-rows:repeat(2,auto) !important;grid-auto-columns:68px !important;gap:14px 4px !important;overflow-x:auto !important;overflow-y:hidden !important;padding:2px 18px 8px !important;justify-content:start !important;-webkit-overflow-scrolling:touch;scrollbar-width:none;overscroll-behavior-x:contain;}" +
      S + ".recent-searches .tw-grid::-webkit-scrollbar{display:none;}" +
      S + ".recent-searches .tw-grid>div{display:flex;flex-direction:column;align-items:center;width:68px;-webkit-tap-highlight-color:transparent;}" +
      S + ".recent-searches .tw-grid .category-img{width:58px !important;height:58px !important;flex:0 0 58px;border-radius:50% !important;padding:0 !important;box-shadow:0 1px 6px rgba(60,30,140,.12);}" +
      S + ".recent-searches .tw-grid .category-img img,html body [data-color-scheme] #MultiVendorSearch .recent-searches .tw-grid .category-img .v-img{width:100% !important;height:100% !important;object-fit:cover !important;}" +
      S + ".recent-searches .tw-grid>div>div:last-child{font-size:11.5px !important;line-height:1.25 !important;margin-top:5px !important;color:#262A33;font-weight:500;width:68px;padding:0 2px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-align:center;}" +
      /* HOME: Nearby merchants - 2 rows, scrolls sideways, brand logo tile instead of the tall cover banner.
         Tile shrunk 112px->80px and padding/radius/gaps cut down to read tighter (closer to Keeta's density).
         object-fit switched from contain to cover: for a normal square logo this looks identical to contain
         (no cropping happens when the image already fills the box), but for a merchant whose "logo" is actually
         a wide banner-shaped file (confirmed real example: Master Muscles, a 376x176 SVG) it now fills the tile
         and crops the sides instead of floating small in a sea of white space. */
      "#NearbyMerchants .merchant-card-list{display:grid !important;grid-auto-flow:column !important;grid-template-rows:repeat(2,auto) !important;grid-auto-columns:80px !important;gap:16px 12px !important;overflow-x:auto !important;overflow-y:hidden !important;padding:0 16px 4px !important;margin:0 !important;-webkit-overflow-scrolling:touch;scrollbar-width:none;}" +
      "#NearbyMerchants .merchant-card-list::-webkit-scrollbar{display:none;}" +
      "#NearbyMerchants .merchant-card-list>.v-col{width:80px !important;max-width:80px !important;flex:0 0 80px !important;padding:0 !important;}" +
      /* Hyperzod's own scoped CSS puts container-type:inline-size + width:100% on .merchant-card, which inside
         our 80px grid track was computing down to ~56px wide (height stayed a correct 80px) - tiles came out
         tall and narrow instead of square. Force the width explicitly so it can't shrink like that. */
      "#NearbyMerchants .merchant-card{display:block !important;width:80px !important;max-width:80px !important;}" +
      "#NearbyMerchants .merchant-card .cover-img{width:80px !important;height:80px !important;border-radius:14px !important;background:#f5f5f5 !important;padding:0 !important;box-sizing:border-box !important;}" +
      "#NearbyMerchants .merchant-card .cover-img img,#NearbyMerchants .merchant-card .cover-img .v-img__img{object-fit:cover !important;border-radius:14px !important;}" +
      "#NearbyMerchants .merchant-card .merchant-card-body{padding:10px 1px 0 !important;}" +
      "#NearbyMerchants .merchant-card .merchant-card-title{font-size:12px !important;line-height:15px !important;}" +
      "#NearbyMerchants .merchant-card .merchant-card-info{font-size:10px !important;line-height:13px !important;margin-top:1px !important;}" +
      "#NearbyMerchants .merchant-card #AverageRating{font-size:10px !important;margin-top:1px !important;}" +
      "#NearbyMerchants .merchant-card #AverageRating span{font-size:10px !important;}" +
      "#NearbyMerchants .merchant-card .merchant-image-pill,#NearbyMerchants .merchant-card .merchant-sponsored-tag,#NearbyMerchants .merchant-card .merchant-off,#NearbyMerchants .merchant-card .merchant-coupon,#NearbyMerchants .merchant-card .merchant-offer-chips{display:none !important;}" +
      /* HOME: category icon grid ("Food/Electronics/Nutrition/..."), native Hyperzod block, id="ProductCategories" - tighten its gap/padding to match */
      "#ProductCategories{margin-top:8px !important;margin-bottom:8px !important;}" +
      "#ProductCategories>.tw-px-4{padding-bottom:0 !important;}" +
      "#ProductCategories .tw-grid{gap:14px !important;}" +
      "#ProductCategories .tw-aspect-square{border-radius:12px !important;}" +
      "#ProductCategories .tw-h-10{height:28px !important;margin-top:4px !important;}" +
      /* HOME: Recommended for you - compact rows (thumbnail left, info right) instead of tall stacked cards.
         NOTE: the real rendered wrapper does NOT have id="MerchantRecommendations" - Hyperzod's page-builder
         gives it a numeric id (e.g. id="130857") and puts the component name in the class instead
         (class="... MerchantRecommendation--130857"). Match on that class substring so this keeps working
         no matter what numeric section id this block gets. */
      "[class*='MerchantRecommendation--'] .merchant-card-list{margin:0 !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card-list>.v-col{padding:0 !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card{display:flex !important;flex-direction:row !important;align-items:center !important;gap:16px !important;padding:16px 16px !important;margin:0 !important;border-radius:0 !important;border-bottom:1px solid rgba(27,32,35,.08) !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card-list>.v-col:last-child .merchant-card{border-bottom:0 !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card .cover-img{width:84px !important;height:84px !important;min-width:84px !important;flex:0 0 84px !important;border-radius:14px !important;box-shadow:0 2px 6px rgba(0,0,0,.10) !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card .merchant-card-body{flex:1 1 auto !important;min-width:0 !important;padding:0 !important;}" +
      "[class*='MerchantRecommendation--'] .merchant-card .merchant-image-pill,[class*='MerchantRecommendation--'] .merchant-card .merchant-sponsored-tag,[class*='MerchantRecommendation--'] .merchant-card .merchant-off,[class*='MerchantRecommendation--'] .merchant-card .merchant-coupon{display:none !important;}" +
      /* SEARCH RESULTS: the "Merchants" tab (search bar -> type a query -> Merchants tab) - same compact-row
         treatment as Recommended for you (uniform thumbnail size, divider lines between rows) but keeping the
         rating stars, delivery fee and discount/offer chips VISIBLE since they're already colored natively and
         that's exactly the "add some color" ask - just reflowed to fit a row instead of a big stacked card.
         Scoped to .tab-item-merchant, Vuetify's own stable class for this tab's content (not a page-builder id). */
      ".tab-item-merchant .merchant-card-list{margin:0 !important;}" +
      ".tab-item-merchant .merchant-card-list>.v-col{padding:0 !important;}" +
      ".tab-item-merchant .merchant-card{display:flex !important;flex-direction:row !important;align-items:center !important;gap:16px !important;padding:16px 4px !important;margin:0 !important;border-radius:0 !important;border-bottom:1px solid rgba(27,32,35,.08) !important;}" +
      ".tab-item-merchant .merchant-card-list>.v-col:last-child .merchant-card{border-bottom:0 !important;}" +
      ".tab-item-merchant .merchant-card .cover-img{width:76px !important;height:76px !important;min-width:76px !important;flex:0 0 76px !important;border-radius:14px !important;box-shadow:0 2px 6px rgba(0,0,0,.10) !important;}" +
      ".tab-item-merchant .merchant-card .cover-img img,.tab-item-merchant .merchant-card .cover-img .v-img__img{object-fit:cover !important;}" +
      ".tab-item-merchant .merchant-card .merchant-card-body{flex:1 1 auto !important;min-width:0 !important;padding:0 !important;gap:3px !important;}" +
      ".tab-item-merchant .merchant-card .merchant-card-title{font-size:14px !important;}" +
      ".tab-item-merchant .merchant-card .merchant-image-pill,.tab-item-merchant .merchant-card .merchant-sponsored-tag{display:none !important;}" +
      /* offer/discount ribbon and coupon tag: keep them, just move out of the (now much smaller) photo and lay them as small colored chips under the info line instead of overlaid on the image */
      ".tab-item-merchant .merchant-card .merchant-off,.tab-item-merchant .merchant-card .merchant-coupon{position:static !important;display:inline-flex !important;margin-top:2px !important;}" +
      ".tab-item-merchant .merchant-card .merchant-offer-chips{position:static !important;margin-top:4px !important;max-width:100% !important;}" +

      /* CATEGORY BROWSE PAGE ("Shop by category" -> a category icon, e.g. /en/m-category/pharmacies/...):
         same compact-row treatment as the other merchant lists. This page still used Hyperzod's default tall
         banner card (image on top, aspect-ratio box via v-responsive, text below) - the same merchant-card
         component as everywhere else, just unstyled here. Scoped to #merchants_by_category, a literal id. */
      "#merchants_by_category .v-row>.v-col{padding:4px 16px !important;}" +
      "#merchants_by_category .merchant-card{display:flex !important;flex-direction:row !important;align-items:center !important;gap:16px !important;padding:16px 0 !important;margin:0 !important;border-radius:0 !important;border-bottom:1px solid rgba(27,32,35,.08) !important;box-shadow:none !important;}" +
      "#merchants_by_category .v-row>.v-col:last-child .merchant-card{border-bottom:0 !important;}" +
      "#merchants_by_category .merchant-card .cover-img{width:76px !important;height:76px !important;min-width:76px !important;flex:0 0 76px !important;border-radius:14px !important;box-shadow:0 2px 6px rgba(0,0,0,.10) !important;}" +
      "#merchants_by_category .merchant-card .cover-img img,#merchants_by_category .merchant-card .cover-img .v-img__img{object-fit:cover !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-body{flex:1 1 auto !important;min-width:0 !important;padding:0 !important;gap:3px !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-title{font-size:14px !important;}" +
      "#merchants_by_category .merchant-card .merchant-image-pill,#merchants_by_category .merchant-card .merchant-sponsored-tag{display:none !important;}" +
      "#merchants_by_category .merchant-card .merchant-off,#merchants_by_category .merchant-card .merchant-coupon{position:static !important;display:inline-flex !important;margin-top:2px !important;}" +
      "#merchants_by_category .merchant-card .merchant-offer-chips{position:static !important;margin-top:4px !important;max-width:100% !important;}" +
      /* category page, matched to the home "More stores near you" list + account-style purple header */
      "@media (max-width:959.98px){" +
      /* v75: restored, matching v57 exactly */
      "html:has(#merchants_by_category) .native-status-bar-bg:not(.native-status-bar-scrim):not(.native-status-bar-scrim-hold){background-color:#8640FC !important;}" +
      "#merchants_by_category>.scheme-mobile-page-header{background:#8640FC !important;border-radius:0 0 22px 22px;box-shadow:0 6px 18px rgba(90,41,222,.18) !important;}" +
      "#merchants_by_category>.scheme-mobile-page-header .scheme-mobile-page-header__surface{background:transparent !important;box-shadow:none !important;}" +
      "#merchants_by_category>.scheme-mobile-page-header h1{color:#fff !important;font-size:17px !important;font-weight:700 !important;text-transform:capitalize !important;-webkit-font-smoothing:antialiased;white-space:nowrap;max-width:calc(100% - 112px);overflow:hidden;text-overflow:ellipsis;}" +
      "#merchants_by_category>.scheme-mobile-page-header .back-btn svg,#merchants_by_category>.scheme-mobile-page-header .back-btn svg *{color:#fff !important;fill:#fff !important;stroke:#fff !important;}" +
      "html[lang^='ar'] #merchants_by_category>.scheme-mobile-page-header .back-btn svg{transform:scaleX(-1);}" +
      "#merchants_by_category .merchant-card{padding:16px 0 !important;border-bottom:1px solid #F0F0F0 !important;}" +
      "#merchants_by_category .merchant-card .cover-img{width:72px !important;height:72px !important;min-width:72px !important;flex:0 0 72px !important;border:0 !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-title{font-size:15px !important;font-weight:600 !important;line-height:1.3 !important;color:#1B2023 !important;text-transform:none !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-info{font-size:13px !important;line-height:1.35 !important;color:#767676 !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-info+div{font-size:12.5px !important;line-height:1.35 !important;color:#8A849C !important;}" +
      "}" +
      "}" +
      /* PRODUCT PAGE (bottom sheet .product-popup, mobile/app) - Talabat-style: no header bar, white top, image first,
         floating 40px white round back button, plain 20px title + 14px grey description, no top price (the Add button
         shows the live total incl. options/add-ons), 50px outlined stepper + 50px purple "Add item" pill. */
      "@media (max-width:959.98px){" +
      "html body .v-bottom-sheet__content>.v-card.product-popup{background:#fff !important;}" +
      "html body .v-card.product-popup>.v-card-title{position:absolute !important;top:0;left:0;right:0;z-index:5;height:0 !important;min-height:0 !important;padding:0 !important;overflow:visible !important;background:transparent !important;background-color:transparent !important;box-shadow:none !important;pointer-events:none;}" +
      "html body .v-card.product-popup>.v-card-title>div{display:none !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn{pointer-events:auto;position:absolute !important;top:calc(var(--native-status-bar-height,0px) + 12px) !important;left:16px !important;right:auto !important;transform:none !important;margin:0 !important;width:40px !important;height:40px !important;min-width:40px !important;min-height:40px !important;border-radius:50% !important;background:#fff !important;border:1px solid #E5E5E5 !important;box-shadow:none !important;}" +
      "html[lang^='ar'] body .v-card.product-popup>.v-card-title>.v-btn{left:auto !important;right:16px !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn .v-btn__overlay,html body .v-card.product-popup>.v-card-title>.v-btn .v-btn__underlay{opacity:0 !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn .v-icon{color:#1B2023 !important;font-size:18px !important;}" +
      "html body .v-card.product-popup>.v-card-text{padding-top:0 !important;background:#fff !important;}" +
      /* app: Hyperzod pads fullscreen dialogs for the status bar, which left a white strip above the photo. Photo goes to the very top,
         under the status bar, with the back button floating on it */
      "html body .v-overlay.v-overlay .v-overlay__content>.v-card.product-popup:first-child{padding-top:0 !important;}" +
      /* discount badge: darker tone of our "Ultimate orange" #FF4000 (#D93600 keeps white text at 4.7:1), small rounded rectangle */
      "html body .product-discount-badge{background:#D93600 !important;color:#fff !important;font-size:12px !important;font-weight:700 !important;line-height:1.2 !important;border-radius:6px !important;padding:4px 7px !important;letter-spacing:.02em;opacity:1 !important;z-index:3;}" +
      /* v75: restored, matching v57 exactly */
      "html:has(.v-overlay--active .product-popup) .native-status-bar-bg,html:has(.v-overlay--active .product-popup) .native-under-sheet-status-cover{background-color:transparent !important;}" +
      "html body .v-card.product-popup .product-image-slider,html body .v-card.product-popup .product-image-slider .v-card{background:#fff !important;}" +
      "html body .v-card.product-popup #productInfo .product-category-name,html body .v-card.product-popup #productInfo .product-price,html body .v-card.product-popup .v-card-text>hr{display:none !important;}" +
      "html body .v-card.product-popup #productInfo .product-name{font-size:20px !important;font-weight:700 !important;line-height:1.3 !important;color:#1B2023 !important;margin:6px 0 8px !important;-webkit-line-clamp:unset;}" +
      "html body .v-card.product-popup #ProductDescription,html body .v-card.product-popup #ProductDescription *{font-size:14px !important;line-height:20px !important;color:#767676 !important;font-weight:400 !important;}" +
      "html body .v-card.product-popup #ProductDescription br,html body .v-card.product-popup #ProductDescription .mmupi-feat-icon{display:none !important;}" +
      "html body .v-card.product-popup #ProductDescription .mmupi-feat{display:block !important;margin:0 !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app{padding:12px 16px 24px 20px !important;gap:20px !important;border-top:1px solid #F2F2F2;background:#fff !important;}" +
      "html[lang^='ar'] body .v-card.product-popup #add_to_cart_hide_from_mobile_app{padding:12px 20px 24px 16px !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child{width:127px !important;height:50px !important;border-radius:999px !important;border:1px solid #E5E5E5 !important;background:#fff !important;overflow:hidden;justify-content:space-between !important;padding:0 6px !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn{height:48px !important;border-radius:0 !important;background:transparent !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn .v-btn__overlay{opacity:0 !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn:first-child *{color:#9E9E9E !important;fill:#9E9E9E !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn:last-child *{color:#5A29DE !important;fill:#5A29DE !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child input{font-size:17px !important;font-weight:600 !important;color:#1B2023 !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn{height:50px !important;border-radius:999px !important;background:#5A29DE !important;box-shadow:none !important;padding:0 22px !important;letter-spacing:0 !important;text-transform:none !important;-webkit-font-smoothing:antialiased;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content{width:100%;justify-content:space-between !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content,html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content *{color:#fff !important;font-size:15px !important;font-weight:600 !important;}" +
      "}" +
      /* STORE PAGE (mobile/app): 200px cover with rounded bottom (like our header), info on white below it (62px logo, 20px name,
         category, purple distance pill), round white floating buttons, categories bar right under the info and Recommended
         Products as one sideways row UNDER the bar (visual order via flex, DOM untouched), 14px tabs (#5C5C5C, active purple),
         22px section titles, 2-col grid on #F5F5F5 tiles with 40px white + button.
         Also: space under the home "More stores near you" list so the last store clears the bottom nav. */
      "@media (max-width:959.98px){" +
      "#hg-cat-rows{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px));}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2{box-shadow:none !important;background:transparent !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .merchant-header-img{top:0 !important;width:62px !important;height:62px !important;border:1px solid #E5E5E5 !important;border-radius:12px !important;box-shadow:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content{background:transparent !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content .v-card-text>div{margin:0 !important;padding:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content .v-card-text>div>div{margin-inline-start:74px !important;padding:0 !important;top:0 !important;min-height:62px !important;display:flex;flex-direction:column;justify-content:center;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .store-name{font-size:20px !important;font-weight:700 !important;line-height:1.25 !important;color:#1B2023 !important;letter-spacing:-.01em;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 #MerchantAddress{display:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content .v-card-text>div>div>div:last-child{font-size:14px !important;font-weight:400 !important;color:#767676 !important;margin-top:4px;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 span{font-weight:500 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div>div::before{content:none !important;display:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .merchant-floating-actions:not(.cover-scrolled) .merchant-floating-btn{background:#fff !important;color:#1B2023 !important;box-shadow:0 2px 8px rgba(0,0,0,.14) !important;backdrop-filter:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-heading,.scheme-merchant-page.merchant-mobile-view h3.category-name{font-size:22px !important;font-weight:700 !important;color:#1B2023 !important;letter-spacing:-.01em;margin-bottom:18px !important;padding-bottom:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .v-row{margin:0 -16px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .v-col{padding:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .v-col>.tw-grid{display:flex !important;gap:20px !important;overflow-x:auto;padding:0 16px 4px !important;margin:0 !important;scroll-snap-type:x mandatory;scroll-padding-inline:16px;scrollbar-width:none;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .v-col>.tw-grid::-webkit-scrollbar{display:none;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal{flex:0 0 171px !important;width:171px !important;box-shadow:none !important;border:0 !important;background:transparent !important;scroll-snap-align:start;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal>.v-card-text{padding:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal .v-card-text>.tw-grid{display:flex !important;flex-direction:column-reverse !important;justify-content:flex-end !important;gap:8px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal .v-card-text>.tw-grid>div{width:100% !important;padding:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img{position:relative !important;width:171px !important;height:171px !important;margin:0 !important;border:0 !important;border-radius:14px !important;background:#F5F5F5 !important;overflow:hidden !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>div:first-child{border-radius:14px;overflow:hidden;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>.tw-absolute{bottom:8px !important;inset-inline-end:8px !important;left:auto;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-name{font-size:16px !important;font-weight:400 !important;color:#1B2023 !important;line-height:1.3 !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-description,.scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-description{display:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .price{margin-top:4px;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .price *,.scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .price h4{font-size:16px !important;font-weight:500 !important;color:#1B2023 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #ProductCategoriesNav{border-bottom:1px solid #E5E5E5 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .v-card{background:transparent !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-image-frame{background:#F5F5F5 !important;border:0 !important;border-radius:14px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-image{border-radius:14px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control{position:absolute !important;bottom:8px !important;inset-inline-end:8px !important;left:auto;right:auto;}" +
      "html:not([dir='rtl']):not([lang^='ar']) .scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control{right:8px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control .add-product-btn,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .add-product-btn{padding:0 !important;margin:0 !important;}" +
      /* v77: the circle was stretching into an oval on some stores - width/min-width were pinned to 30px but
         height had no min-height/max-height partner, the same flex-item auto-size gap found twice already this
         session on .pro-card-h (v58/v60): a flex or inline-flex box (this button, or Vuetify's own .v-btn
         internals) can expand past its declared height if nothing stops it. Pinning height fully now, same as
         width, so it can't stretch either way. */
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .add-btn,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .add-btn{width:30px !important;height:30px !important;min-width:30px !important;max-width:30px !important;min-height:30px !important;max-height:30px !important;padding:0 !important;border-radius:50% !important;background:#fff !important;box-shadow:0 1px 4px rgba(0,0,0,.10) !important;font-size:0 !important;border:0 !important;flex:0 0 30px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .add-btn svg,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .add-btn svg{width:13px !important;height:13px !important;margin:0 !important;color:#5A29DE !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .add-btn svg *,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .add-btn svg *{stroke:#5A29DE !important;}" +
      /* v78: the stretched-oval "+" was still happening in sections whose exact ancestor markup we hadn't seen -
         confirmed via Adam's own DevTools inspect that the native button carries Tailwind "tw-h-[32px]" for
         height but NO width utility at all, so its width is whatever the padding+icon add up to - never square
         unless something pins both. The per-section rules above only fire when that exact ancestor chain
         matches (.scheme-merchant-page.merchant-mobile-view / :not(.merchant-mobile-view)), so any section that
         reuses this same "Add Item" button component outside a single-merchant shop page - e.g. a home/category
         browse grid pulling products from multiple stores, which is what Adam's screenshot with mismatched
         "Jet Fan 2" / "Electronic Devices" rows on one screen looks like - fell through with no fix at all,
         since .scheme-merchant-page was never in its ancestor chain. Dropping the page-scope requirement
         entirely: ".add-btn" (confirmed via the inspected DOM as a dedicated, semantic class - "Add Item" label,
         "add-btn__icon" svg) is specific enough to be a safe global hook. The old page-scoped rules above stay
         as-is (redundant now on the merchant page itself, harmless either way).
         v79: that global ".add-btn" rule broke the full-width "Add To Cart - BHD X" button on the product detail
         page's bottom sheet, squeezing it into a tiny 44x30 box - confirmed live on hypergo.bh: Hyperzod reuses
         the exact same "add-btn" class name for two structurally different buttons (the small circular quick-add
         "+" on product tiles, and this full-width text+price button on the product page). The only reliable,
         page-agnostic way to tell them apart is Vuetify's own "v-btn--block" class, which only the full-width one
         carries - so excluding that instead of re-adding page scoping (which is what caused the original bug). */
      ".add-btn:not(.v-btn--block){width:30px !important;height:30px !important;min-width:30px !important;max-width:30px !important;min-height:30px !important;max-height:30px !important;padding:0 !important;border-radius:50% !important;background:#fff !important;box-shadow:0 1px 4px rgba(0,0,0,.10) !important;font-size:0 !important;border:0 !important;flex:0 0 30px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;box-sizing:border-box !important;}" +
      ".add-btn:not(.v-btn--block) svg{width:13px !important;height:13px !important;margin:0 !important;color:#5A29DE !important;}" +
      ".add-btn:not(.v-btn--block) svg *{stroke:#5A29DE !important;}" +
      /* v79: the REAL reason tapping a product image never opened the product - confirmed live, nothing to do
         with our own placeholder/fallback at all. Every Vuetify v-card renders a ".v-card__loader" div (its
         built-in loading-progress-bar container) as "position:absolute;inset:0;pointer-events:auto;z-index:1" -
         i.e. it sits on top of and captures clicks across the ENTIRE card, at all times, whether or not it's
         actually showing a loading bar. Verified directly on hypergo.bh: with this div's pointer-events forced
         to none, a tap that previously did nothing correctly navigated to the product (URL gained "?pid=..."-
         without it, the tap always lands on this loader div and goes nowhere, real photo or not. This is a
         native Hyperzod/Vuetify default, so it silently swallows taps on every product tile everywhere unless
         overridden - not something scoped to any one page or shop. */
      ".v-card__loader{pointer-events:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .v-card-text{padding:12px 4px 0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-name{font-size:16px !important;font-weight:400 !important;color:#1B2023 !important;line-height:1.3 !important;margin-bottom:4px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal .v-card-text,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal .v-card-text>.tw-grid,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .product-card-horizontal .tw-h-full{height:auto !important;min-height:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .rec-item-title{max-width:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .v-card-text{justify-content:flex-start !important;flex-grow:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .card-footer{margin-top:0 !important;}" +
      /* v69: Adam wants the SAME row layout we built for restaurants (.product-horizontal-cards.merchant-list-view -
         108px square photo on the left, price/description on the right with real spacing) applied to every store in
         every category, including shop/retail categories that Hyperzod renders with a different native component
         (.scheme-merchant-product-grid-card, a 2-column card grid - image on top, text below - completely different
         markup from the restaurant list rows). Can't change which Vue component Hyperzod picks, but can restyle this
         one to be laid out exactly like the other: force its parent out of a 2-column grid into a single stacked
         column, then lay each card out as a horizontal row - image fixed at 108px on the left, name/description/price
         stacked on the right - matching the list-view spec value for value (108px, 16px corner radius, add button
         4px into the bottom corner, 15px name, 13px single-line description, 14.5px price). The parent container's
         real class is unknown (varies by Hyperzod build/theme and isn't reachable to inspect right now - hypergo.bh
         redirects every route to the launch placeholder), so it's targeted structurally instead of by name: ":has(>
         .scheme-merchant-product-grid-card)" matches whatever wraps these cards directly, regardless of what it's
         called or whether it's using CSS grid or flexbox natively. */
      ".scheme-merchant-page.merchant-mobile-view *:has(>.scheme-merchant-product-grid-card){display:flex !important;flex-direction:column !important;grid-template-columns:1fr !important;gap:0 !important;padding:0 !important;width:100% !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card{flex:0 0 100% !important;width:100% !important;max-width:100% !important;padding:0 !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card>.v-card{display:flex !important;flex-direction:row !important;align-items:center !important;gap:16px !important;background:transparent !important;box-shadow:none !important;border:0 !important;border-bottom:1px solid #F0F0F0 !important;border-radius:0 !important;padding:18px 4px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-image-frame{position:relative !important;flex:0 0 108px !important;width:108px !important;height:108px !important;min-width:108px !important;max-width:108px !important;min-height:108px !important;max-height:108px !important;padding-bottom:0 !important;border-radius:16px !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-image-frame>.product-image{position:absolute !important;inset:0 !important;height:100% !important;width:100% !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-image .v-responsive__sizer{padding-bottom:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control{bottom:4px !important;}" +
      "html:not([dir='rtl']):not([lang^='ar']) .scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control{right:4px !important;}" +
      "html[dir='rtl'] .scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control,html[lang^='ar'] .scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .grid-add-control{left:4px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .v-card-text{flex:1 1 auto !important;min-width:0 !important;padding:0 !important;display:flex !important;flex-direction:column !important;justify-content:center !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-name{font-size:15px !important;font-weight:400 !important;line-height:1.3 !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .product-description{display:-webkit-box !important;font-size:13px !important;color:#8A8A8A !important;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;margin-top:3px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .price{margin-top:4px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .price *,.scheme-merchant-page.merchant-mobile-view .scheme-merchant-product-grid-card .price h4{font-size:14.5px !important;font-weight:500 !important;color:#1B2023 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>div:first-child,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>div:first-child .v-img,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>div:first-child .v-responsive{height:100% !important;width:100% !important;}" +
      ".scheme-merchant-page.merchant-mobile-view{display:flex !important;flex-direction:column !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img *:not(img):not(.add-btn):not(.add-btn *):not(.product-discount-badge):not(.counter-btn):not(.counter-btn *){background-color:transparent !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>div:first-child{position:absolute !important;inset:0 !important;height:auto !important;width:auto !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img .v-img,.scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img .v-responsive{height:100% !important;width:100% !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img img{width:100% !important;height:100% !important;object-fit:cover !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section .pro-card-h-img>.tw-absolute{z-index:2;}" +
      ".scheme-merchant-page.merchant-mobile-view>*{flex:none;width:100%;order:9;}" +
      ".scheme-merchant-page.merchant-mobile-view>.scheme-merchant-products-section{display:contents !important;}" +
      ".scheme-merchant-page.merchant-mobile-view>.page-builder-section-surface:has(#merchant-header-v2){order:1;}" +
      ".scheme-merchant-page.merchant-mobile-view #mobileStickyHeader{order:2;}" +
      ".scheme-merchant-page.merchant-mobile-view>.page-builder-section-surface:has(.scheme-product-recommendation-section){order:3;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-content{order:4;}" +
      ".scheme-merchant-page.merchant-mobile-view>.page-builder-section-surface:not(:has(#merchant-header-v2)):not(:has(.scheme-product-recommendation-section)){order:5;}" +
      /* height stays a plain 200px (NOT +status-bar-height): the box already starts at y:0 and bleeds under
         the notch fine on its own. Adding the status-bar height on top of that forced a much taller box on a
         fixed-width screen, so cover-cropping it pushed way more width off both edges than intended - on a
         1200x600 cover this was chewing off ~24% of the banner (confirmed: cut off "Explore the Collection"
         text on AL Haramain Perfumes). Plain 200px keeps the crop to what the 2:1 banner template expects. */
      /* v71: Adam's screenshot shows a solid white strip above the cover image, exactly where the time/battery
         icons sit - not a flicker, a permanent gap. applyStatusBarColor() already sets this page's status-bar
         element to "transparent" (onMerchant branch), which is correct - the bug isn't the color, it's that the
         cover image below never actually reaches y:0 to be seen THROUGH that transparent overlay. This div had
         height:200px and margin:0, i.e. it starts wherever normal document flow puts it - below whatever top
         inset the page reserves for the status bar - so a transparent status bar over that gap just shows the
         plain white page background behind it. Every other page in this file that's meant to bleed under the
         status bar (address editor header, account hero) uses the same fix: pull the element up by the status
         bar's own height with a negative top margin, and grow its height by the same amount so everything below
         it stays exactly where it was. Applying that here instead of just a flat height. */
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2>div:first-child{aspect-ratio:auto !important;height:calc(200px + var(--native-status-bar-height,0px)) !important;border-radius:0 0 24px 24px;margin:0 !important;margin-top:calc(-1 * var(--native-status-bar-height,0px)) !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2>.storefront-gutter{position:relative;margin:0 !important;padding:16px 16px 18px !important;min-height:0 !important;background:#fff;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4{margin:12px 0 0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div{justify-content:flex-start !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div{gap:0 6px;row-gap:2px;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div>div{background:none !important;padding:0 !important;border-radius:0 !important;font-size:14px !important;color:#5C5C5C !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 span,.scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 div{color:#5C5C5C !important;font-weight:500 !important;font-size:14px !important;}" +
      /* cover sits under the phone status bar: no white strip over it, and no pull-down bounce at the top */
      /* v75: restored, matching v57 exactly */
      "html:has(.scheme-merchant-page.merchant-mobile-view) .native-status-bar-bg:not(.native-status-bar-scrim):not(.native-status-bar-scrim-hold){background-color:transparent !important;}" +
      ".scheme-merchant-page.merchant-mobile-view{overscroll-behavior-y:none !important;}" +
      /* merchant tagline: plain grey line under the info, no bordered box; first letter capital */
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4{padding:0 !important;margin-top:10px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div{border:0 !important;background:none !important;border-radius:0 !important;padding:0 !important;text-align:start !important;font-size:14px !important;line-height:1.4 !important;color:#5C5C5C !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div::first-letter{text-transform:uppercase;}" +
      /* "Not accepting orders": small rounded rectangle at the bottom of the cover instead of a pill over the middle of the banner */
      ".scheme-merchant-page.merchant-mobile-view .merchant-cover-warning{top:calc(200px - 46px) !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-order-warning{border-radius:8px !important;padding:0 10px !important;box-shadow:0 2px 8px rgba(0,0,0,.12) !important;background:#FFF3E5 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-merchant-order-warning__text{font-size:13px !important;font-weight:600 !important;color:#9A4508 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .scheme-product-recommendation-section{margin-top:30px !important;margin-bottom:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #ProductCategoriesNav a.scheme-category-primary-nav__item{font-size:14px !important;font-weight:500 !important;color:#5C5C5C !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #ProductCategoriesNav a.scheme-category-primary-nav__item.is-active{color:#5A29DE !important;font-weight:600 !important;}" +
      "}" +
      /* ALL SIZES: every product tile is a perfect square (tall photos are cropped), and name + price sit right under it
         (no stretched gap when a neighbour has a longer name).
         v78: this used to require ".scheme-merchant-page" as an ancestor, so it only fired on a single shop's own
         page. Adam confirmed this same card component shows up elsewhere too (home/category browse, wherever
         products from multiple shops are listed together) and got none of this sizing - which is why two rows on
         one screen looked like two different sizes. Per Adam: this isn't about any one shop, it must apply
         everywhere the card renders, on every shop now and later - so dropping the page-scope requirement here too,
         same as the "+" button fix above. */
      ".scheme-merchant-product-grid-card .product-image-frame{position:relative !important;height:0 !important;padding-bottom:100% !important;overflow:hidden !important;}" +
      ".scheme-merchant-product-grid-card .product-image-frame>.product-image{position:absolute !important;inset:0 !important;height:100% !important;width:100% !important;}" +
      ".scheme-merchant-product-grid-card .product-image .v-responsive__sizer{padding-bottom:0 !important;}" +
      ".scheme-merchant-product-grid-card .product-image img{object-fit:cover !important;}" +
      ".scheme-merchant-product-grid-card .grid-add-control{z-index:2;}" +
      ".scheme-merchant-page .scheme-merchant-product-grid-card,.scheme-merchant-page .scheme-merchant-product-grid-card>.v-card{height:auto !important;align-self:start !important;}" +
      ".scheme-merchant-page .cat-section .special-listing-inner>.tw-grid,.scheme-merchant-page .scheme-product-recommendation-section .v-col>.tw-grid{align-items:start !important;}" +
      ".scheme-merchant-page .scheme-product-recommendation-section .product-card-horizontal{align-self:start !important;}" +
      ".scheme-merchant-page .scheme-product-recommendation-section .product-card-horizontal .tw-justify-between{justify-content:flex-start !important;height:auto !important;}" +
      ".scheme-merchant-page .scheme-product-recommendation-section .product-card-horizontal .tw-justify-between>.price{margin-top:6px !important;}" +
      "@media (min-width:960px){.scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img{height:0 !important;padding-bottom:100% !important;aspect-ratio:auto !important;}}" +
      /* PRODUCT TILES in the "list" layout some stores use (Amjad, Le Cadeau...) and in Recommended: same square tile as the grid.
         (the photo box is found by its class, not position: its first child is a hidden loader)
         v78: de-scoped from ".scheme-merchant-page" for the same reason as the grid-card block above - this card
         shows up outside a single shop's own page too, and per Adam it must be fixed everywhere, not per-shop. */
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card){box-shadow:none !important;border:0 !important;background:transparent !important;margin:0 !important;height:auto !important;min-height:0 !important;align-self:start !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card)>.v-card-text{padding:0 !important;height:auto !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .v-card-text>.tw-grid{display:flex !important;flex-direction:column-reverse !important;justify-content:flex-end !important;gap:10px !important;height:auto !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .v-card-text>.tw-grid>div{width:100% !important;padding:0 !important;height:auto !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .tw-justify-between{justify-content:flex-start !important;height:auto !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .rec-item-title{max-width:none !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img{position:relative !important;width:100% !important;height:0 !important;padding-bottom:100% !important;aspect-ratio:auto !important;margin:0 !important;border:0 !important;border-radius:14px !important;background:#F5F5F5 !important;overflow:hidden !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img>.tw-cursor-pointer{position:absolute !important;inset:0 !important;height:100% !important;width:100% !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img .v-responsive{height:100% !important;width:100% !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img .v-responsive__sizer{padding-bottom:0 !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img img{object-fit:cover !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img>.tw-absolute{left:auto !important;right:10px !important;bottom:10px !important;transform:none !important;z-index:2;}" +
      "html[lang^='ar'] :is(.product-card-horizontal,.product-horizontal-cards>.v-card) .pro-card-h-img>.tw-absolute{right:auto !important;left:10px !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .add-product-btn{padding:0 !important;margin:0 !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .add-btn{width:30px !important;height:30px !important;min-width:30px !important;min-height:30px !important;padding:0 !important;border-radius:50% !important;background:#fff !important;box-shadow:0 1px 4px rgba(0,0,0,.10) !important;font-size:0 !important;border:0 !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .add-btn svg{width:13px !important;height:13px !important;margin:0 !important;color:#5A29DE !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .add-btn svg *{stroke:#5A29DE !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .product-name{font-size:16px !important;font-weight:400 !important;color:#1B2023 !important;line-height:1.3 !important;margin:0 !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .product-description{display:none !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .price{margin-top:6px !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .price *{font-size:16px !important;font-weight:500 !important;color:#1B2023 !important;}" +
      ".scheme-merchant-page .product-horizontal-cards{display:grid !important;grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:32px 20px !important;align-items:start !important;}" +
      "@media (min-width:960px){.scheme-merchant-page .product-horizontal-cards{grid-template-columns:repeat(5,minmax(0,1fr)) !important;gap:40px 28px !important;}}" +
      /* IN-STORE PRODUCT LIST (mobile, stores set to Hyperzod's "list" layout - the common case): compact single-column
         rows instead of a 2-up grid of big square tiles - bigger photo left (fixed size), name/description/price on the
         right with a tight photo-to-text gap and clear breathing room between the description and price. Only
         ".cat-section .product-horizontal-cards.merchant-list-view" (the tabbed product listing) is touched -
         "Recommended Products" uses a different container (".scheme-product-recommendation-section") and keeps its own
         horizontal-scroll square-tile style, untouched.
         Real DOM (confirmed live, not assumed): the add-to-cart button is NOT a sibling of the text block - it's nested
         INSIDE .pro-card-h-img itself (Vuetify renders it absolutely positioned, centered under the photo, bleeding
         below the photo's bottom edge by design for the square-tile layout). Left alone, that bleed is what was
         reading as "dead space" between the photo and the text: the button floats in open space to the photo's right
         instead of sitting on the photo. Fixed by pinning it fully inside the photo's bottom-right corner instead.
         v60: measured the live row (not eyeballed) and found two more bugs behind the still-visible gap and the
         cramped price:
         1) .pro-card-h (the OUTER photo wrapper, not .pro-card-h-img which is the actual 108x108 image box inside
            it) was only constrained with width/height, no min/max-width - so its flex-item auto-minimum-width (driven
            by its own inner content) rendered it ~156px wide, ~48px wider than the 108px image sitting inside it.
            That 48px of invisible wrapper padding, plus the 10px flex gap, is what was still reading as "dead space"
            between the visible photo and the text (same min/max bug pattern as the earlier height fix, just on the
            width axis this time). Pinning min-width/max-width to 108px too collapses the wrapper onto the image.
         2) The text column (name/description/price) already ships its own "flex flex-col justify-between h-full"
            Tailwind classes - built to pin the name to the top and the price to the bottom of the row - but our
            tw-grid row had align-items:center, which sizes that column to its own content height instead of
            stretching it to match the 108px photo. With no extra height to distribute, justify-content:space-between
            had nothing to do, so the price just sat directly under the description. Switching to align-items:stretch
            lets that column fill the full 108px and its own space-between do what it was already built to do. */
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view{display:grid !important;grid-template-columns:1fr !important;gap:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view>.v-card{border-bottom:1px solid #F0F0F0 !important;border-radius:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view>.v-card>.v-card-text{position:relative !important;display:flex !important;align-items:center !important;gap:10px !important;padding:18px 4px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view>.v-card>.v-card-text>.clickable{position:absolute !important;inset:0 !important;z-index:0;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view>.v-card>.v-card-text>.tw-grid{display:flex !important;flex-direction:row !important;align-items:stretch !important;gap:10px !important;flex:1 1 auto !important;min-width:0 !important;width:auto !important;height:108px !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view>.v-card>.v-card-text>.tw-grid>div:not(.pro-card-h){order:1;flex:1 1 auto !important;min-width:0 !important;width:auto !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h{order:0;position:relative !important;flex:0 0 108px !important;width:108px !important;height:108px !important;min-width:108px !important;max-width:108px !important;min-height:108px !important;max-height:108px !important;margin:0 !important;}" +
      /* Vuetify's v-img sets an inline padding-bottom % on its own internal sizer div based on the actual photo's
         aspect ratio (e.g. a tall product photo -> a tall sizer), and that in turn drives a dynamic min-height on
         this wrapper - taller than our fixed box whenever a photo isn't square, which is what was overriding a plain
         height (min-height always wins over height when it's the bigger of the two). Pin min/max too, and clip the
         now-oversized inner sizer so nothing pokes out past the box. */
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img{width:108px !important;height:108px !important;min-height:108px !important;max-height:108px !important;padding-bottom:0 !important;border-radius:16px !important;overflow:hidden !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img .v-responsive__sizer{padding-bottom:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img .v-responsive,.scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img img{width:100% !important;height:100% !important;}" +
      /* Add button: pin fully inside the photo's bottom-right corner (was centered and bleeding below the photo,
         which is what got clipped into a stray floating shape by the overflow:hidden above and read as clutter/dead
         space between the photo and the text). Also strip its wrapper's built-in padding/negative-margin so it sits
         flush in the corner instead of offset. */
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img .tw-absolute.tw--bottom-4{left:auto !important;right:4px !important;bottom:4px !important;top:auto !important;transform:none !important;z-index:2;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .pro-card-h-img .add-product-btn{padding:0 !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .product-name{font-size:15px !important;line-height:1.3 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .product-description{display:-webkit-box !important;font-size:13px !important;color:#8A8A8A !important;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;margin-top:3px !important;}" +
      /* No manual margin-top here anymore - the column's own justify-content:space-between (freed up above) now
         does the work of pushing the price to the bottom of the row on its own. */
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .price{margin-top:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view .cat-section .product-horizontal-cards.merchant-list-view .price *{font-size:14.5px !important;}" +
      /* CHECKOUT BAR: native floating pill (small, centered, gap below it, no price) -> full-width bar flush to the
         very bottom, purple gradient, rounded only on the top edge (reads as pinned, not floating). Own content is
         hidden and our .hg-co-bar (built in applyCheckoutBar()) takes over the whole clickable area - the button's
         own click handler is untouched, only what's painted inside it changes. */
      ".scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill.hg-checkout-bar{position:fixed !important;left:0 !important;right:0 !important;bottom:0 !important;top:auto !important;width:100% !important;max-width:100% !important;transform:none !important;border-radius:18px 18px 0 0 !important;height:auto !important;min-height:60px !important;padding:14px 18px calc(14px + env(safe-area-inset-bottom,0px)) 18px !important;display:flex !important;align-items:center !important;justify-content:center !important;background:linear-gradient(135deg,#6C35F0,#5A29DE) !important;box-shadow:0 -6px 24px rgba(90,41,222,.28) !important;}" +
      ".scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill.hg-checkout-bar .v-btn__prepend,.scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill.hg-checkout-bar .v-btn__content{display:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill.hg-checkout-bar .v-btn__overlay,.scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill.hg-checkout-bar .v-btn__underlay{border-radius:inherit !important;}" +
      ".hg-co-bar{display:flex !important;align-items:center !important;justify-content:space-between !important;width:100%;position:relative;z-index:1;}" +
      ".hg-co-left{display:flex;align-items:center;gap:10px;}" +
      ".hg-co-cart{position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:#fff;}" +
      ".hg-co-cart svg{width:21px;height:21px;}" +
      ".hg-co-badge{position:absolute;top:-8px;right:-9px;min-width:17px;height:17px;padding:0 4px;background:#fff;color:#5A29DE;font-size:10.5px;font-weight:800;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1;box-sizing:border-box;}" +
      ".hg-co-label{color:#fff;font-weight:700;font-size:15px;}" +
      ".hg-co-right{display:flex;flex-direction:column;align-items:flex-end;line-height:1.25;}" +
      ".hg-co-strike{color:rgba(255,255,255,.62);font-size:11px;text-decoration:line-through;}" +
      ".hg-co-price{color:#fff;font-weight:800;font-size:16.5px;}" +
      "html[lang^='ar'] .hg-co-badge{right:auto;left:-9px;}" +
      /* SORT & FILTERS sheet: our tokens (18px bold title, purple active tab + indicator, 11.5px uppercase label, 50px rows,
         purple radios, pill Clear/Apply). STORE "- 1 +" after tapping +: white pill with purple -/+ and a dark number (was white on white) */
      "html body [data-color-scheme] .scheme-filter-host{border-radius:22px 22px 0 0 !important;overflow:hidden !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__header{padding:20px 16px 16px 20px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__title{font-size:18px !important;font-weight:700 !important;color:#1B2023 !important;line-height:1.3 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__close{width:36px !important;height:36px !important;border-radius:50% !important;background:#F5F5F5 !important;color:#1B2023 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-divider{background:#F0F0F0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-rail{background:#FAFAFA !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab{padding:0 14px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab span:last-child{font-size:14px !important;font-weight:500 !important;color:#5C5C5C !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab--active{background:#fff !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab--active span:last-child{color:#5A29DE !important;font-weight:600 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-active-indicator{background:#5A29DE !important;width:3px !important;border-radius:2px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__content .tw-uppercase{font-size:11.5px !important;letter-spacing:.08em !important;color:#8A849C !important;font-weight:600 !important;margin-bottom:6px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row{min-height:50px !important;border-bottom:1px solid #F0F0F0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row:last-child{border-bottom:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row .v-label,html body [data-color-scheme] .scheme-filter-panel .v-selection-control .v-label{font-size:15px !important;color:#1B2023 !important;opacity:1 !important;font-weight:400 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control__input .v-icon{color:#C9C3D9 !important;opacity:1 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control--dirty .v-selection-control__input .v-icon{color:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control--dirty .v-label{font-weight:600 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control__input::before{opacity:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer{padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px)) !important;border-top:1px solid #F0F0F0 !important;gap:12px !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .v-btn{height:50px !important;border-radius:999px !important;font-size:15px !important;font-weight:600 !important;letter-spacing:0 !important;text-transform:none !important;box-shadow:none !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-clear{border:1px solid #E5E5E5 !important;color:#1B2023 !important;background:#fff !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-clear .v-btn__overlay,html body [data-color-scheme] .scheme-filter-footer .scheme-filter-apply .v-btn__overlay{opacity:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-apply{background:#5A29DE !important;color:#fff !important;border:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-apply *{color:#fff !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn{--counter-w:104px;width:104px !important;height:40px !important;border-radius:999px !important;background:#fff !important;box-shadow:0 2px 8px rgba(0,0,0,.16) !important;justify-content:space-between !important;padding:0 4px !important;margin-inline-start:auto;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .decrement-btn,html body [data-color-scheme] .scheme-merchant-page .counter-btn .increment-btn{height:40px !important;padding:0 8px !important;background:transparent !important;color:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn svg,html body [data-color-scheme] .scheme-merchant-page .counter-btn svg *{color:#5A29DE !important;stroke:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .counter-input{background:transparent !important;color:#1B2023 !important;font-size:15px !important;font-weight:700 !important;width:auto !important;flex:1 !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .counter-input *{color:#1B2023 !important;}" +
      "html body .scheme-merchant-page .pro-card-h-img>.tw-absolute:has(.counter-btn){left:auto !important;right:10px !important;transform:none !important;}" +
      "html body .scheme-merchant-page .pro-card-h-img>.tw-absolute .add-product-btn:has(.counter-btn){padding:0 !important;margin:0 !important;}" +
      /* desktop: our header scrolls away, so the sticky category bar must stick to the very top until Hyperzod's own
         store bar (#MerchantStickyHeader, 96px) appears - otherwise it floated 64px down with products showing above it */
      "@media (min-width:960px){.scheme-merchant-page:not(.merchant-mobile-view) #mobileStickyHeader{top:0 !important;background:#fff !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view):has(#MerchantStickyHeader:not([style*='display: none'])) #mobileStickyHeader{top:96px !important;}}" +
      /* DESKTOP (>=960px): same look as mobile, laid out in a centered 1200px column. Home rows wrap 4-up + 2-col list;
         store page: contained 1200x320 banner (20px corners), 88px logo, 28px name, tabs under the info, Recommended under the tabs,
         5-col product tiles; category pages: purple title band + 3-col list rows; product modal: no top price, pill Add Item bar. */
      "@media (min-width:960px){" +
      "#hg-cat-rows{max-width:1200px;margin:8px auto 40px !important;padding:0 24px 40px !important;box-sizing:border-box;}" +
      "#hg-cat-rows .hg-cr-h{padding:0 !important;}" +
      "#hg-cat-rows .hg-cr-t{font-size:22px !important;}" +
      "#hg-cat-rows .hg-cr-s,#hg-cat-rows .hg-cr-s.two{grid-auto-flow:row !important;grid-template-columns:repeat(4,minmax(0,1fr)) !important;grid-template-rows:none !important;grid-auto-columns:auto !important;overflow:visible !important;padding:2px 0 4px !important;gap:18px !important;}" +
      "#hg-cat-rows .hg-ml{display:grid;grid-template-columns:1fr 1fr;column-gap:40px;padding:0 !important;}" +
      "#hg-cat-rows .hg-ml>.hg-cr-t{grid-column:1/-1;}" +
      "#hg-cat-rows .hg-mr:last-child{border-bottom:1px solid #F0F0F0;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view){display:flex !important;flex-direction:column !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>*{flex:none;width:100%;order:9;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.scheme-merchant-products-section{display:contents !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.page-builder-section-surface:has(#merchant-header-v2){order:1;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #mobileStickyHeader{order:2;margin-top:24px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.page-builder-section-surface:has(.scheme-product-recommendation-section){order:3;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-content{order:4;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2{max-width:1200px;margin:20px auto 0 !important;box-shadow:none !important;background:transparent !important;padding:0 24px;box-sizing:content-box;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2>.cover-image{height:320px !important;border-radius:20px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2>.cover-image img{object-fit:cover !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2>.storefront-gutter{padding:20px 0 0 !important;min-height:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .merchant-header-img{top:0 !important;width:88px !important;height:88px !important;border:1px solid #E5E5E5 !important;border-radius:16px !important;box-shadow:none !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content{background:transparent !important;margin:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div{margin:0 !important;padding:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div>div{margin-inline-start:104px !important;padding:0 !important;top:0 !important;min-height:88px !important;display:flex;flex-direction:column;justify-content:center;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .store-name{font-size:28px !important;font-weight:700 !important;line-height:1.25 !important;color:#1B2023 !important;letter-spacing:-.01em;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 #MerchantAddress{display:none !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div>div>div:last-child{font-size:15px !important;font-weight:400 !important;color:#767676 !important;margin-top:4px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4{margin:14px 0 0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>div:first-child{margin:0 !important;gap:0 8px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4 span,.scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4 div{color:#5C5C5C !important;font-weight:500 !important;font-size:15px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4{padding:0 !important;margin-top:8px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div{border:0 !important;background:none !important;border-radius:0 !important;padding:0 !important;text-align:start !important;font-weight:400 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div::first-letter{text-transform:uppercase;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #ProductCategoriesNav{border-bottom:1px solid #E5E5E5 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #ProductCategoriesNav .product-categories-nav__scroller{padding-inline:max(24px,calc((100% - 1200px) / 2 + 24px)) !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #ProductCategoriesNav a.scheme-category-primary-nav__item{font-size:15px !important;font-weight:500 !important;color:#5C5C5C !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #ProductCategoriesNav a.scheme-category-primary-nav__item.is-active{color:#5A29DE !important;font-weight:600 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section,.scheme-merchant-page:not(.merchant-mobile-view) #merchant-content>.storefront-gutter{max-width:1200px;margin-left:auto !important;margin-right:auto !important;padding-left:24px !important;padding-right:24px !important;box-sizing:content-box;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-content>.storefront-gutter>div{padding-left:0 !important;padding-right:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section{margin-top:44px !important;margin-bottom:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-heading,.scheme-merchant-page:not(.merchant-mobile-view) h3.category-name{font-size:26px !important;font-weight:700 !important;color:#1B2023 !important;letter-spacing:-.01em;margin-bottom:22px !important;padding-bottom:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .v-col{padding:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .v-col>.tw-grid,.scheme-merchant-page:not(.merchant-mobile-view) #merchant-content .cat-section .special-listing-inner>.tw-grid{display:grid !important;grid-template-columns:repeat(5,minmax(0,1fr)) !important;gap:40px 28px !important;margin:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-card-horizontal{box-shadow:none !important;border:0 !important;background:transparent !important;margin:0 !important;height:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-card-horizontal>.v-card-text{padding:0 !important;height:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-card-horizontal .v-card-text>.tw-grid{display:flex !important;flex-direction:column-reverse !important;justify-content:flex-end !important;gap:10px !important;height:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-card-horizontal .v-card-text>.tw-grid>div{width:100% !important;padding:0 !important;height:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-card-horizontal .tw-h-full{height:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .rec-item-title{max-width:none !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img{position:relative !important;width:100% !important;height:auto !important;aspect-ratio:1;margin:0 !important;border:0 !important;border-radius:14px !important;background:#F5F5F5 !important;overflow:hidden !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img>div:first-child{position:absolute !important;inset:0 !important;height:auto !important;width:auto !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img .v-img,.scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img .v-responsive{height:100% !important;width:100% !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img img{width:100% !important;height:100% !important;object-fit:cover !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .pro-card-h-img>.tw-absolute{z-index:2;bottom:10px !important;inset-inline-end:10px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .product-name,.scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .product-name{font-size:16px !important;font-weight:400 !important;color:#1B2023 !important;line-height:1.3 !important;margin:0 0 4px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .product-description{display:none !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .price *,.scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .price h4{font-size:16px !important;font-weight:500 !important;color:#1B2023 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .v-card{background:transparent !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .product-image-frame{background:#F5F5F5 !important;border:0 !important;border-radius:14px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .product-image{border-radius:14px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .grid-add-control{position:absolute !important;bottom:10px !important;right:10px !important;left:auto !important;}" +
      "html[lang^='ar'] .scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .grid-add-control{right:auto !important;left:10px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .add-product-btn{padding:0 !important;margin:0 !important;}" +
      /* v77: same fix as the mobile version above - full width+height pin so the circle can't stretch. */
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .add-btn,.scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section .add-btn{width:30px !important;height:30px !important;min-width:30px !important;max-width:30px !important;min-height:30px !important;max-height:30px !important;padding:0 !important;border-radius:50% !important;background:#fff !important;box-shadow:0 1px 4px rgba(0,0,0,.10) !important;font-size:0 !important;border:0 !important;flex:0 0 30px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .add-btn svg{width:13px !important;height:13px !important;margin:0 !important;color:#5A29DE !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .add-btn svg *{stroke:#5A29DE !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .v-card-text{padding:16px 4px 0 !important;justify-content:flex-start !important;flex-grow:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-merchant-product-grid-card .card-footer{margin-top:0 !important;}" +
      "html body .product-discount-badge{background:#D93600 !important;color:#fff !important;font-size:12px !important;font-weight:700 !important;line-height:1.2 !important;border-radius:6px !important;padding:4px 7px !important;letter-spacing:.02em;opacity:1 !important;z-index:3;}" +
      "#merchants_by_category .v-container{max-width:1248px !important;}" +
      "#merchants_by_category .v-container .tw-flex.tw-mb-4:has(>h1){background:#8640FC;border-radius:20px;padding:22px 28px;margin-bottom:8px !important;}" +
      "#merchants_by_category .v-container h1{color:#fff !important;font-size:26px !important;font-weight:700 !important;line-height:1.2 !important;text-transform:capitalize !important;-webkit-font-smoothing:antialiased;}" +
      "#merchants_by_category .v-row>div{padding:6px 8px !important;}" +
      "#merchants_by_category .merchant-card{display:flex !important;flex-direction:row !important;align-items:center !important;gap:12px !important;padding:12px !important;margin:0 !important;border:1px solid #F0F0F0 !important;border-radius:14px !important;box-shadow:none !important;height:100%;}" +
      "#merchants_by_category .merchant-card .cover-img{width:72px !important;height:72px !important;min-width:72px !important;flex:0 0 72px !important;border-radius:14px !important;border:0 !important;box-shadow:0 2px 6px rgba(0,0,0,.10) !important;}" +
      "#merchants_by_category .merchant-card .cover-img img{object-fit:cover !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-body{flex:1 1 auto !important;min-width:0 !important;padding:0 !important;gap:3px !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-title{font-size:15px !important;font-weight:600 !important;line-height:1.3 !important;color:#1B2023 !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-info{font-size:13px !important;line-height:1.35 !important;color:#767676 !important;}" +
      "#merchants_by_category .merchant-card .merchant-card-info+div{font-size:12.5px !important;color:#8A849C !important;}" +
      "#merchants_by_category .merchant-card .merchant-image-pill,#merchants_by_category .merchant-card .merchant-sponsored-tag{display:none !important;}" +
      "#merchants_by_category .merchant-card .merchant-off,#merchants_by_category .merchant-card .merchant-coupon,#merchants_by_category .merchant-card .merchant-offer-chips{position:static !important;}" +
      ".v-overlay__content:has(>.product-popup.product-model){border-radius:20px !important;}" +
      ".product-popup.product-model #productInfo .product-price,.product-popup.product-model #productInfo .product-category-name{display:none !important;}" +
      ".product-popup.product-model #productInfo .product-name{font-size:22px !important;font-weight:700 !important;line-height:1.3 !important;color:#1B2023 !important;margin-bottom:10px !important;}" +
      ".product-popup.product-model #ProductDescription,.product-popup.product-model #ProductDescription *{font-size:14px !important;line-height:20px !important;color:#767676 !important;font-weight:400 !important;}" +
      ".product-popup.product-model #ProductDescription br,.product-popup.product-model #ProductDescription .mmupi-feat-icon{display:none !important;}" +
      ".product-popup.product-model #ProductDescription .mmupi-feat{display:block !important;margin:0 !important;}" +
      ".product-popup.product-model .v-card-text>.v-btn.v-btn--icon{background:#fff !important;border:1px solid #E5E5E5 !important;border-radius:50% !important;}" +
      ".product-popup.product-model .v-card-text>.v-btn.v-btn--icon .v-btn__overlay,.product-popup.product-model .v-card-text>.v-btn.v-btn--icon .v-btn__underlay{opacity:0 !important;}" +
      ".product-popup.product-model .v-card-actions{padding:12px 20px !important;gap:16px !important;border-top:1px solid #F2F2F2 !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child{width:127px !important;height:50px !important;border-radius:999px !important;border:1px solid #E5E5E5 !important;background:#fff !important;overflow:hidden;justify-content:space-between !important;padding:0 6px !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn{height:48px !important;background:transparent !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn .v-btn__overlay{opacity:0 !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn:first-child *{color:#9E9E9E !important;fill:#9E9E9E !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn:last-child *{color:#5A29DE !important;fill:#5A29DE !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child input{font-size:17px !important;font-weight:600 !important;color:#1B2023 !important;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn{height:50px !important;border-radius:999px !important;background:#5A29DE !important;box-shadow:none !important;padding:0 22px !important;letter-spacing:0 !important;text-transform:none !important;-webkit-font-smoothing:antialiased;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content{width:100%;justify-content:space-between !important;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content,.product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content *{color:#fff !important;font-size:15px !important;font-weight:600 !important;}" +
      "}";
    document.head.appendChild(st);

    /* v88 HOME BASE — screenshot-tuned spacing, category labels and white canvas */
    ["hg-home-v81","hg-home-v82","hg-home-v83","hg-home-v84","hg-home-v85","hg-home-v86","hg-home-v87"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    if (!document.getElementById("hg-home-v88")) {
      const home = document.createElement("style");
      home.id = "hg-home-v88";
      home.textContent =
        "body:has(#MultiVendorHome),#app:has(#MultiVendorHome),#MultiVendorHome,#MultiVendorHome .page-builder-section-surface,#ProductCategories{background:#FFFFFF !important;}" +
        "@media (max-width:959.98px){" +
        "#MultiVendorHome{background:#FFFFFF !important;color:#1B2023 !important;}" +
        "#MultiVendorHome .page-builder-section-surface{margin-bottom:32px !important;}" +
        "#ProductCategories{margin:6px 0 24px !important;padding-top:2px !important;}" +
        "#ProductCategories>.tw-px-4{padding-left:16px !important;padding-right:16px !important;padding-bottom:0 !important;}" +
        "#ProductCategories .tw-grid{gap:9px 10px !important;}" +
        "#ProductCategories .tw-aspect-square{border-radius:11px !important;background:transparent !important;box-shadow:none !important;overflow:hidden !important;}" +
        "#ProductCategories .tw-h-10{display:block !important;height:auto !important;min-height:0 !important;margin-top:5px !important;font-size:11px !important;line-height:13px !important;font-weight:650 !important;color:#1B2023 !important;text-align:center !important;white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;}" +
        "#MultiVendorHome .v-divider{border-color:#EAE7EE !important;}" +
        "}";
      document.head.appendChild(home);
    }
  }

  /* search page (English): friendlier section title */
  /* purple status strip + purple bar on the search page (mobile/app) */
  function syncSearchClass() {
    const el = document.getElementById("MultiVendorSearch");
    const on = !!el && isVisible(el) && window.matchMedia("(max-width: 959.98px)").matches;
    const cl = document.documentElement.classList;
    if (cl.contains("hg-search-page") !== on) cl.toggle("hg-search-page", on);
  }

  function applySearchPage() {
    syncSearchClass();
    const root = document.getElementById("MultiVendorSearch");
    if (!root || hgIsAr()) return;
    const h = root.querySelector(".recent-searches>div:has(+ .tw-grid)>div") || root.querySelector(".recent-searches>div:has(+ .tw-grid)");
    if (h && h.children.length === 0 && /^\s*(shop by categor(y|ies)|categories)\s*$/i.test(h.textContent) && h.textContent.trim() !== "Shop by category") {
      h.textContent = "Shop by category";
    }
  }

  /* MY ORDERS opened from Account has no back button (Hyperzod treats it as a root tab) -> add one */
  const BACK_SVG =
    '<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1868 43.9947L9.7144 30.5228H52.5144C53.9067 30.5228 55.0368 29.3927 55.0368 28.0004C55.0368 26.608 53.9067 25.478 52.5144 25.478H9.71438L23.1868 12.0056C24.1727 11.0196 24.1727 9.42543 23.1868 8.43947L23.1867 8.4394C22.2003 7.45357 20.6061 7.45347 19.6201 8.43947L1.84253 26.2149L1.84169 26.2158C1.60841 26.4509 1.4251 26.7307 1.29779 27.0358L1.29746 27.0366C1.04251 27.6525 1.04251 28.3483 1.29746 28.9642L1.29779 28.965C1.4252 29.2703 1.60852 29.5494 1.84142 29.7848L1.84253 29.7859L19.62 47.5612C20.1116 48.0534 20.758 48.3004 21.4035 48.3004C22.0485 48.3004 22.6948 48.0533 23.1868 47.5613C24.1728 46.5753 24.1727 44.9812 23.1868 43.9947L23.1868 43.9947Z" fill="#fff" stroke="#fff" stroke-width="0.6"/></svg>';
  function syncOrdersBack() {
    const cls = document.documentElement.classList;
    const existing = document.querySelectorAll("#hg-orders-back");
    if (!cls.contains("hg-orders-acct")) {
      existing.forEach((e) => e.remove());
      return;
    }
    if (!/\/profile\/orders\/?$/.test(location.pathname)) return;
    document.querySelectorAll(".scheme-profile-page .scheme-mobile-page-header").forEach((hdr) => {
      if (hdr.querySelector(".back-btn, #hg-orders-back")) return;
      const page = hdr.closest(".scheme-profile-page");
      if (page && page.querySelector("#ProfileSideBar")) return;
      const surf = hdr.querySelector(".scheme-mobile-page-header__surface") || hdr.firstElementChild;
      if (!surf) return;
      const b = document.createElement("button");
      b.id = "hg-orders-back";
      b.type = "button";
      b.setAttribute("aria-label", hgIsAr() ? "\u0631\u062C\u0648\u0639" : "Back");
      b.innerHTML = BACK_SVG;
      b.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const app = document.querySelector("#app");
        const g = app && app.__vue_app__ && app.__vue_app__.config.globalProperties;
        const r = g && g.$router;
        if (!r) { history.back(); return; }
        if (history.length > 1) r.back();
        else r.push({ name: "profile", params: { lang: (document.documentElement.lang || "en").slice(0, 2) } });
      });
      surf.appendChild(b);
    });
  }

  /* clear any lingering focus/pressed state on the Account rows when a finger swipes away from them */
  document.addEventListener(
    "touchmove",
    () => {
      const a = document.activeElement;
      if (a && a.classList && a.classList.contains("scheme-profile-nav-item")) a.blur();
    },
    { passive: true }
  );

  /* SEARCH PAGE back button: it sits inside the search field, so Vuetify focuses the input on press. On iPhone that pops the keyboard
     toolbar (arrows + Done) and flashes the screen before the page changes. Stop that press reaching Vuetify; the tap itself still goes back. */
  document.addEventListener(
    "mousedown",
    (e) => {
      const t = e.target;
      if (t && t.closest && t.closest("#MultiVendorSearch .mobile-search-input .v-field__prepend-inner")) e.stopPropagation();
    },
    true
  );

  /* PULL TO REFRESH (Home): the header never moves. Pulling down at the top slides the HyperGo logo along under the header
     (following the finger, smoothed); at the end the home content reloads IN PLACE (no page reload) while the logo drifts
     back and forth on a faint line; then everything eases away. Deliberately soft and slow. */
  (function initPullToRefresh() {
    const isAr = () => /^ar/i.test(document.documentElement.lang || "");
    const FINGER = 230;      /* px of finger travel until the refresh starts (a deliberate pull, not a nudge) */
    const GAP = 30;          /* px the content is pushed down to make room for the goo */
    const MIN_LOAD = 700;    /* ms the loading state is shown at least, so it never flashes by */
    let st = null, busy = false, ind = null;
    const cur = { s: 0, p: 0 }, tgt = { s: 0, p: 0 };
    let raf = 0, last = 0, tau = 90, wantTrigger = false, closing = false;

    function els() {
      const home = document.getElementById("MultiVendorHome");
      if (!home) return null;
      const hdr = document.getElementById("MultiVendorHeaderRoot");
      const main = home.querySelector(":scope > main");
      return home && hdr && main ? { home, hdr, main } : null;
    }
    function overlayOpen() {
      return !!document.querySelector(".v-overlay--active, .scheme-side-panel--open, #hg-lang-veil");
    }
    function ensureInd(e) {
      if (!ind || !ind.isConnected) {
        ind = document.createElement("div");
        ind.id = "hg-ptr";
        ind.innerHTML =
          '<svg class="hg-goo" viewBox="0 0 60 24" width="60" height="24" aria-hidden="true"><defs>' +
          '<filter id="hg-goo-f" filterUnits="userSpaceOnUse" x="0" y="0" width="60" height="24" color-interpolation-filters="sRGB">' +
          '<feGaussianBlur in="SourceGraphic" stdDeviation="2"/>' +
          '<feColorMatrix mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"/></filter></defs>' +
          '<g filter="url(#hg-goo-f)"><circle class="g0" cx="30" cy="12" r="1"/><circle class="g1" cx="30" cy="12" r="1"/><circle class="g2" cx="30" cy="12" r="1"/></g></svg>';
      }
      if (ind.parentNode !== e.home) e.home.insertBefore(ind, e.main);
      ind.style.top = e.hdr.getBoundingClientRect().bottom - e.home.getBoundingClientRect().top + e.home.scrollTop + "px";
      ind.style.display = "block";
      return ind;
    }
    function paint(e, s, p) {
      ensureInd(e);
      /* Vuetify puts a .2s transition on v-main: keep only the opacity fade, movement is smoothed here. CSS zoom scales translate, so undo it. */
      e.main.style.transition = "opacity .5s ease";
      const z = parseFloat(getComputedStyle(e.main).zoom) || 1;
      e.main.style.transform = s > 0.1 ? "translate3d(0," + (s / z).toFixed(2) + "px,0)" : "";
      ind.style.height = Math.max(0, s).toFixed(2) + "px";
      ind.style.opacity = String(Math.max(0, Math.min(1, (s - 8) / 20)));
      /* a small piece of goo: grows and stretches a little as you pull; while loading the CSS animation moves the three drops */
      const cs = ind.querySelectorAll("circle");
      const r = (1 + 2.4 * p).toFixed(2);
      for (let i = 0; i < cs.length; i++) {
        cs[i].setAttribute("r", r);
        if (!ind.classList.contains("hg-loading")) cs[i].style.transform = "translateX(" + ((i === 1 ? 1 : i === 2 ? -1 : 0) * p * 3.5).toFixed(2) + "px)";
      }
    }
    function tick(now) {
      raf = 0;
      const e = els();
      if (!e) { cur.s = cur.p = tgt.s = tgt.p = 0; closing = false; if (ind) ind.style.display = "none"; return; }
      const dt = Math.min(48, now - (last || now)); last = now;
      const k = 1 - Math.exp(-dt / tau);
      cur.s += (tgt.s - cur.s) * k;
      cur.p += (tgt.p - cur.p) * k;
      if (Math.abs(tgt.s - cur.s) < 0.08) cur.s = tgt.s;
      if (Math.abs(tgt.p - cur.p) < 0.002) cur.p = tgt.p;
      paint(e, cur.s, cur.p);
      if (wantTrigger && cur.p >= 0.985) { wantTrigger = false; doRefresh(e); }
      if (cur.s !== tgt.s || cur.p !== tgt.p) { raf = requestAnimationFrame(tick); return; }
      last = 0;
      if (tgt.s === 0 && !busy) {           /* fully closed: clean up */
        e.main.style.transform = ""; e.main.style.opacity = ""; e.main.style.transition = "";
        if (ind) { ind.style.display = "none"; ind.classList.remove("hg-loading"); ind.classList.remove("hg-done"); }
        closing = false;
      }
    }
    function go(s, p, t) {
      tgt.s = s; tgt.p = p; tau = t;
      if (!raf) { last = 0; raf = requestAnimationFrame(tick); }
    }
    function findHome() {
      /* Vue (production) hides component instances; reach the home component through the mounted vnode tree */
      const a = document.getElementById("app");
      const seen = new Set();
      let hit = null;
      const home = document.getElementById("MultiVendorHome");
      let c = home && home.__vueParentComponent;
      for (let i = 0; c && i < 10; i++, c = c.parent) {
        if (c.type && c.type.methods && c.type.methods.getHomeData) return c;
      }
      function walk(inst, d) {
        if (!inst || hit || seen.has(inst) || d > 90) return;
        seen.add(inst);
        if (inst.type && inst.type.methods && inst.type.methods.getHomeData) { hit = inst; return; }
        walkVN(inst.subTree, d + 1);
      }
      function walkVN(vn, d) {
        if (!vn || hit) return;
        if (vn.component) walk(vn.component, d);
        if (vn.suspense) walkVN(vn.suspense.activeBranch, d + 1);
        if (Array.isArray(vn.children)) vn.children.forEach((ch) => walkVN(ch, d + 1));
      }
      if (a && a._vnode) walkVN(a._vnode, 0);
      return hit;
    }
    function doRefresh(e) {
      busy = true; closing = false;
      ensureInd(e);
      ind.classList.add("hg-loading");
      ind.querySelectorAll("circle").forEach((c) => { c.style.transform = ""; });   /* the CSS animation takes over */
      e.main.style.opacity = ".9";
      go(GAP, 1, 200);
      const t0 = Date.now();
      let p = Promise.resolve();
      try {
        const c = findHome();
        if (c && c.proxy && c.proxy.selectedLocation && typeof c.proxy.getHomeData === "function") {
          p = Promise.resolve(c.proxy.getHomeData(c.proxy.selectedLocation));
        }
      } catch (err) { p = Promise.resolve(); }
      let done = false;
      const finish = () => {
        if (done) return; done = true;
        setTimeout(() => {
          const e2 = els();
          busy = false; closing = true;
          /* reload finished: stop the goo animation right away (drops merge back together) and ease everything away */
          if (ind) {
            ind.classList.remove("hg-loading"); ind.classList.add("hg-done");
            ind.querySelectorAll("circle").forEach((c) => { c.style.transform = "translateX(0)"; });
          }
          if (e2) e2.main.style.opacity = "1";
          go(0, 0, 130);
          if (!e2 && ind) ind.style.display = "none";
        }, Math.max(0, MIN_LOAD - (Date.now() - t0)));
      };
      p.then(finish, finish);
      setTimeout(finish, 9000);
    }

    const app = document.getElementById("app");
    if (!app) return;
    app.addEventListener("touchstart", (ev) => {
      st = null;
      if (busy || closing || ev.touches.length !== 1) return;
      const e = els();
      if (!e || !e.home.contains(ev.target) || overlayOpen()) return;
      st = { x: ev.touches[0].clientX, y: e.home.scrollTop <= 0 ? ev.touches[0].clientY : null, active: false };
    }, { passive: true });
    app.addEventListener("touchmove", (ev) => {
      if (!st || busy) return;
      const e = els();
      if (!e) { st = null; return; }
      const t = ev.touches[0];
      if (e.home.scrollTop > 0) { if (st.active) { st.active = false; wantTrigger = false; go(0, 0, 90); } st.y = null; return; }
      if (st.y === null) { st.y = t.clientY; return; }
      const dy = t.clientY - st.y, dx = Math.abs(t.clientX - st.x);
      if (!st.active && (dy < 10 || dx > dy)) return;
      if (dy <= 0) { if (st.active) { st.active = false; wantTrigger = false; go(0, 0, 90); } return; }
      st.active = true;
      if (ev.cancelable) ev.preventDefault();   /* stops the native rubber-band: the header stays put */
      const progress = Math.min(1, dy / FINGER);
      const ease = 1 - Math.pow(1 - progress, 1.6);   /* gap opens gently, then settles */
      go(GAP * ease, progress, 90);
      if (progress >= 1) { wantTrigger = true; st = null; }
    }, { passive: false });
    const end = () => {
      if (st && st.active && !busy) { wantTrigger = false; closing = true; go(0, 0, 170); }
      st = null;
    };
    app.addEventListener("touchend", end, { passive: true });
    app.addEventListener("touchcancel", end, { passive: true });
  })();

  /* HOME: one horizontal row per merchant category (Talabat-style), replacing the long "Nearby Merchants" list.
     Data comes from Hyperzod's own home data in the store (state.homeData: merchants + merchant_categories),
     so no extra API calls. Rows follow the category sort order; empty categories are skipped. */
  let hgCatSig = "";
  function hgCatStyle() {
    const current = document.getElementById("hg-cat-style");
    if (current && current.dataset.v === "92") return;
    if (current) current.remove();
    const st = document.createElement("style");
    st.id = "hg-cat-style";
    st.dataset.v = "92";
    st.textContent =
      "#NearbyMerchants.hg-cat-hidden{display:none !important;}" +
      ".hg-rec-hidden{display:none !important;}" +
      "#hg-cat-rows{margin:4px 0 38px;background:#FFFFFF;font-family:inherit;color:#1B2023;}" +
      "#hg-cat-rows *{box-sizing:border-box;}" +
      "#hg-cat-rows a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent;}" +
      "#hg-cat-rows .hg-hero{position:relative;overflow:hidden;margin:4px 16px 30px;padding:20px 18px 17px;min-height:148px;border-radius:20px;background:linear-gradient(120deg,#4D22C7 0%,#6C35E8 58%,#8640FC 100%);color:#fff;box-shadow:0 2px 6px rgba(73,35,178,.05);}" +
      "#hg-cat-rows .hg-hero:before{content:'';position:absolute;width:150px;height:150px;border-radius:50%;right:-52px;top:-58px;background:#FF7A2F;opacity:.95;}" +
      "#hg-cat-rows .hg-hero:after{content:'';position:absolute;width:118px;height:118px;border-radius:50%;right:36px;bottom:-76px;background:#ACE4AA;opacity:.95;}" +
      "#hg-cat-rows .hg-hero-copy{position:relative;z-index:2;max-width:72%;}" +
      "#hg-cat-rows .hg-hero-k{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;opacity:.78;margin-bottom:6px;}" +
      "#hg-cat-rows .hg-hero-h{font-size:24px;font-weight:800;line-height:1.05;letter-spacing:-.035em;max-width:260px;}" +
      "#hg-cat-rows .hg-hero-p{font-size:12.5px;line-height:1.35;margin-top:7px;opacity:.88;max-width:250px;}" +
      "#hg-cat-rows .hg-hero-links{position:relative;z-index:3;display:flex;gap:7px;overflow-x:auto;margin-top:16px;padding-bottom:1px;scrollbar-width:none;}" +
      "#hg-cat-rows .hg-hero-links::-webkit-scrollbar{display:none;}" +
      "#hg-cat-rows .hg-hero-link{flex:0 0 auto;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);font-size:11px;font-weight:700;color:#fff;backdrop-filter:blur(8px);}" +
      "#hg-cat-rows .hg-hero-logos{position:absolute;z-index:2;right:14px;top:38px;width:98px;height:78px;}" +
      "#hg-cat-rows .hg-hero-logo{position:absolute;width:46px;height:46px;border-radius:13px;background:#fff center/contain no-repeat;border:1px solid rgba(255,255,255,.9);box-shadow:0 2px 4px rgba(20,12,49,.06);}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(1){right:39px;top:0;transform:rotate(-7deg);}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(2){right:0;top:18px;transform:rotate(7deg);}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(3){right:42px;top:38px;transform:rotate(4deg);}" +
      "#hg-cat-rows .hg-sec{margin:0 0 32px;}" +
      "#hg-cat-rows .hg-sec.soft{padding:2px 0 4px;background:#FFFFFF;}" +
      "#hg-cat-rows .hg-sec-h{display:flex;align-items:flex-end;justify-content:space-between;padding:0 16px;margin-bottom:12px;gap:12px;}" +
      "#hg-cat-rows .hg-sec-title{font-size:17.5px;font-weight:760;line-height:1.18;letter-spacing:-.018em;}" +
      "#hg-cat-rows .hg-sec-sub{font-size:11.5px;color:#77727F;margin-top:3px;}" +
      "#hg-cat-rows .hg-all{flex:0 0 auto;color:#5A29DE;font-size:12px;font-weight:750;white-space:nowrap;padding:5px 9px;border-radius:999px;background:#F6F2FF;border:1px solid #E9E0FF;line-height:1;}" +
      "#hg-cat-rows .hg-all:after{content:'' !important;display:none !important;}" +
      "#hg-cat-rows .hg-feature-rail{display:flex;gap:11px;overflow-x:auto;padding:1px 16px 3px;scroll-snap-type:x mandatory;scroll-padding-inline:16px;scrollbar-width:none;}" +
      "#hg-cat-rows .hg-feature-rail::-webkit-scrollbar,#hg-cat-rows .hg-brand-grid::-webkit-scrollbar{display:none;}" +
      "#hg-cat-rows .hg-feature{flex:0 0 158px;scroll-snap-align:start;background:#fff;border:1px solid #ECEAEF;border-radius:15px;overflow:hidden;box-shadow:0 1px 2px rgba(27,32,35,.02);}" +
      "#hg-cat-rows .hg-feature-img{height:100px;background:#F7F7F8 center/cover no-repeat;}" +
      "#hg-cat-rows .hg-feature-body{padding:8px 9px 9px;min-height:54px;}" +
      "#hg-cat-rows .hg-feature-name{font-size:12.5px;font-weight:710;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      "#hg-cat-rows .hg-meta{font-size:11.5px;color:#77727F;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      "#hg-cat-rows .hg-meta .dot{margin:0 4px;color:#AAA4B0;}" +
      "#hg-cat-rows .hg-brand-grid{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:68px;gap:13px 11px;overflow-x:auto;padding:1px 16px 3px;scroll-snap-type:x mandatory;scroll-padding-inline:16px;scrollbar-width:none;}" +
      "#hg-cat-rows .hg-brand{width:68px;text-align:center;scroll-snap-align:start;}" +
      "#hg-cat-rows .hg-brand-img{width:68px;height:68px;border-radius:14px;background-color:#fff;background-position:center;background-size:calc(100% + 6px) calc(100% + 6px);background-repeat:no-repeat;border:1px solid #ECEAEF;box-shadow:0 1px 2px rgba(27,32,35,.018);}" +
      "#hg-cat-rows .hg-brand-name{font-size:10px;font-weight:650;line-height:1.2;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      "#hg-cat-rows .hg-cat-block{position:relative;margin:0 0 31px;padding:0 0 2px;}" +
      "#hg-cat-rows .hg-cat-block:before{content:'';position:absolute;left:0;top:-10px;width:3px;height:30px;border-radius:0 4px 4px 0;background:#5A29DE;opacity:.82;}" +
      "#hg-cat-rows .hg-cat-block + .hg-cat-block{border-top:1px solid #F2F0F3;padding-top:24px;}" +
      "#hg-cat-rows .hg-cat-block + .hg-cat-block:before{top:14px;}" +
      "#hg-cat-rows .hg-logo-rail{display:flex;gap:12px;overflow-x:auto;padding:1px 16px 3px 18px;scroll-snap-type:x mandatory;scroll-padding-inline:18px;scrollbar-width:none;}" +
      "#hg-cat-rows .hg-logo-card{flex:0 0 88px;min-width:88px;scroll-snap-align:start;text-align:center;display:flex;flex-direction:column;align-items:center;}" +
      "#hg-cat-rows .hg-logo-img{width:88px;height:88px;flex:0 0 88px;border-radius:15px;background-color:#fff;background-position:center;background-size:calc(100% + 8px) calc(100% + 8px);background-repeat:no-repeat;border:1px solid #ECEAEF;box-shadow:0 1px 2px rgba(27,32,35,.018);}" +
      "#hg-cat-rows .hg-logo-name{display:block;width:88px;max-width:88px;height:27px;font-size:10.5px;font-weight:680;line-height:13px;margin-top:6px;white-space:normal;overflow:hidden;text-overflow:clip;text-align:center;}" +
      "#hg-cat-rows .hg-compact-rail{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,64px);grid-auto-columns:216px;gap:8px 10px;overflow-x:auto;padding:1px 16px 3px 18px;scroll-snap-type:x mandatory;scroll-padding-inline:18px;scrollbar-width:none;}" +
      "#hg-cat-rows .hg-compact{display:flex;height:64px;border:1px solid #ECEAEF;border-radius:12px;background:#fff;overflow:hidden;scroll-snap-align:start;box-shadow:0 1px 2px rgba(27,32,35,.018);}" +
      "#hg-cat-rows .hg-compact-img{flex:0 0 64px;width:64px;height:64px;background:#fff center/contain no-repeat;border-inline-end:1px solid #F0EEF2;}" +
      "#hg-cat-rows .hg-compact-body{min-width:0;align-self:center;padding:0 10px;}" +
      "#hg-cat-rows .hg-compact-name{font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      "#hg-cat-rows .hg-more{margin:2px 16px 0;padding-top:2px;}" +
      "#hg-cat-rows .hg-more .hg-sec-h{padding:0;margin-bottom:7px;}" +
      "#hg-cat-rows .hg-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #EFEDF1;}" +
      "#hg-cat-rows .hg-row:last-child{border-bottom:0;}" +
      "#hg-cat-rows .hg-row-img{flex:0 0 64px;width:64px;height:64px;border-radius:13px;background:#fff center/contain no-repeat;border:1px solid #ECEAEF;}" +
      "#hg-cat-rows .hg-row-body{min-width:0;flex:1;}" +
      "#hg-cat-rows .hg-row-name{font-size:14px;font-weight:700;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      "#hg-cat-rows .hg-row-cat{font-size:11.5px;color:#918B98;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}" +
      ".hg-cat-icon-grid{display:grid !important;grid-auto-flow:column !important;grid-template-columns:none !important;grid-template-rows:repeat(2,minmax(0,1fr)) !important;grid-auto-columns:calc((100% - 30px)/4) !important;gap:9px 10px !important;overflow-x:auto !important;overflow-y:hidden !important;scroll-snap-type:x mandatory !important;scroll-padding-inline:16px !important;-webkit-overflow-scrolling:touch;scrollbar-width:none;}" +
      ".hg-cat-icon-grid::-webkit-scrollbar{display:none;}" +
      ".hg-cat-icon-grid>*{scroll-snap-align:start;border-radius:14px !important;padding:5px 5px 6px !important;box-sizing:border-box !important;background:#fff !important;border:1px solid #ECE9EF !important;box-shadow:0 1px 2px rgba(27,32,35,.018) !important;}" +
      ".hg-cat-icon-grid>*:active{background:#F7F5FA !important;transform:scale(.985);}" +
      ".hg-cat-icon-grid img{border-radius:12px !important;}" +
      "@media (min-width:960px){" +
      ".hg-cat-icon-grid{grid-template-rows:none !important;grid-auto-columns:98px !important;gap:12px !important;}" +
      "#hg-cat-rows{max-width:1240px;margin:16px auto 50px;padding:0 20px;}" +
      "#hg-cat-rows .hg-hero{margin:10px 0 36px;min-height:180px;padding:28px 30px 24px;border-radius:22px;}" +
      "#hg-cat-rows .hg-hero-copy{max-width:58%;}" +
      "#hg-cat-rows .hg-hero-h{font-size:32px;max-width:430px;}" +
      "#hg-cat-rows .hg-hero-p{font-size:14px;max-width:430px;}" +
      "#hg-cat-rows .hg-hero-links{margin-top:20px;}" +
      "#hg-cat-rows .hg-hero-link{font-size:12px;padding:8px 13px;}" +
      "#hg-cat-rows .hg-hero-logos{right:60px;top:42px;width:190px;height:110px;}" +
      "#hg-cat-rows .hg-hero-logo{width:70px;height:70px;border-radius:19px;}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(1){right:82px;}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(2){right:10px;top:24px;}" +
      "#hg-cat-rows .hg-hero-logo:nth-child(3){right:92px;top:62px;}" +
      "#hg-cat-rows .hg-sec,#hg-cat-rows .hg-cat-block{margin-bottom:40px;}" +
      "#hg-cat-rows .hg-sec.soft{border-radius:0;padding:6px 0 8px;}" +
      "#hg-cat-rows .hg-sec-h{padding:0 4px;margin-bottom:16px;}" +
      "#hg-cat-rows .hg-sec.soft .hg-sec-h{padding:0 24px;}" +
      "#hg-cat-rows .hg-sec-title{font-size:22px;}" +
      "#hg-cat-rows .hg-feature-rail,#hg-cat-rows .hg-logo-rail,#hg-cat-rows .hg-compact-rail{padding-left:4px;padding-right:4px;}" +
      "#hg-cat-rows .hg-sec.soft .hg-brand-grid{padding-left:24px;padding-right:24px;}" +
      "#hg-cat-rows .hg-feature{flex-basis:208px;}" +
      "#hg-cat-rows .hg-feature-img{height:132px;}" +
      "#hg-cat-rows .hg-brand-grid{grid-template-rows:repeat(2,auto);grid-auto-columns:86px;gap:16px 16px;}" +
      "#hg-cat-rows .hg-brand,#hg-cat-rows .hg-brand-img{width:86px;}" +
      "#hg-cat-rows .hg-brand-img{height:86px;}" +
      "#hg-cat-rows .hg-logo-card{flex-basis:108px;}" +
      "#hg-cat-rows .hg-logo-img{width:108px;height:108px;}" +
      "#hg-cat-rows .hg-compact-rail{grid-template-rows:repeat(2,74px);grid-auto-columns:286px;}" +
      "#hg-cat-rows .hg-compact{height:74px;}" +
      "#hg-cat-rows .hg-compact-img{width:74px;height:74px;flex-basis:74px;}" +
      "#hg-cat-rows .hg-more{margin-left:4px;margin-right:4px;max-width:860px;}" +
      "}";
    document.head.appendChild(st);
  }
  function hgEsc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  /* all merchants for the selected location, from the same API the category pages use (paged, 20 per page) */
  const hgCat = { key: "", list: null, busy: false };
  function hgCatFetch(key, loc, locale) {
    hgCat.busy = true;
    const H = { "content-type": "application/json", accept: "application/json", "x-tenant": location.host, "x-client-device": "web" };
    let all = [];
    const page = (p) => fetch("https://api.hyperzod.app/store/v1/search/merchant/nearby", {
      method: "POST", headers: H,
      body: JSON.stringify({ user_location: loc, filters: [], sort_by: [], page: p, locale: locale })
    }).then((r) => r.json()).then((j) => {
      const d = j && j.data;
      const list = Array.isArray(d) ? d : (d && Array.isArray(d.data) ? d.data : []);
      all = all.concat(list);
      if (list.length && p < 15) return page(p + 1);
    });
    page(1).then(() => { hgCat.key = key; hgCat.list = all; }, () => {}).then(() => { hgCat.busy = false; applyCategoryRows(); });
  }
  function hgKm(m) {
    const t = String(m.user_to_merchant_distance || "");
    const v = parseFloat(t);
    return isNaN(v) ? null : v;
  }
  function hgHideRec() {
    document.querySelectorAll("[class*='MerchantRecommendation--']").forEach((r) => {
      const sec = r.closest(".page-builder-section-surface") || r;
      if (!sec.classList.contains("hg-rec-hidden")) sec.classList.add("hg-rec-hidden");
    });
  }
  /* HOME PAGE CATEGORY ICON GRID: was a plain wrapping grid (4 columns x 4 rows on mobile - the whole thing dumped
     on screen at once, one column count per breakpoint via Tailwind's own xs:/lg:/xl: classes). Adam wants it
     swipeable instead - 4 icons on top, 4 on the bottom, swipe right for the next 8 - and the same idea on desktop
     as a single swipeable row. Rather than hardcoding positions for exactly 16 icons (fragile if Adam adds/removes
     categories later in Hyperzod admin), this computes the placement from however many icons actually exist, so it
     keeps working if that count changes. Explicit grid-row/grid-column placement is used (not grid-auto-flow, which
     would fill column-by-column - i.e. pair icon 1 with icon 2 top-to-bottom in the same column - instead of
     keeping the original reading order intact within each 4-wide page). */
  function applyHomeCategoryGrid() {
    const grid = document.querySelector(
      '[class*="tw-grid-cols-8"][class*="xs:tw-grid-cols-4"][class*="lg:tw-grid-cols-13"]'
    );
    if (!grid) return;
    grid.classList.add("hg-cat-icon-grid");
    const kids = Array.from(grid.children);
    const isDesktop = window.innerWidth >= 960;
    kids.forEach((el, i) => {
      if (isDesktop) {
        /* single swipeable row - natural order, left to right */
        el.style.setProperty("grid-row", "1", "important");
        el.style.setProperty("grid-column", String(i + 1), "important");
      } else {
        /* 4 wide x 2 tall pages, filled in reading order within each page */
        const perPage = 8;
        const withinPage = i % perPage;
        const page = Math.floor(i / perPage);
        const row = Math.floor(withinPage / 4);
        const col = page * 4 + (withinPage % 4);
        el.style.setProperty("grid-row", String(row + 1), "important");
        el.style.setProperty("grid-column", String(col + 1), "important");
      }
    });
  }
  let hgCatGridResizeTimer = null;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(hgCatGridResizeTimer);
      hgCatGridResizeTimer = setTimeout(applyHomeCategoryGrid, 120);
    },
    { passive: true }
  );

  function hgImg(m, kind) {
    const im=m&&m.images;if(!im)return "";const logo=im.logo&&(im.logo.image_url||im.logo.image_thumb_url),cover=im.cover&&(im.cover.image_url||im.cover.image_thumb_url);return kind==="cover"?(cover||logo||""):(logo||cover||"");
  }
  function hgMetaHtml(m,ar){const bits=[],rating=parseFloat(m&&m.average_rating);if(!isNaN(rating)&&rating>0)bits.push("&#9733; "+rating.toFixed(1));if(m&&m.delivery_data&&parseFloat(m.delivery_data.time)>0){let t=String(m.delivery_data.time);if(ar)t=t.replace(/(\d)\s*mins?\b/i,"$1 "+String.fromCharCode(1583,1602,1610,1602,1577));bits.push("<bdi>"+hgEsc(t)+"</bdi>");}const km=hgKm(m);if(km!=null&&km<100)bits.push("<bdi>"+km.toFixed(1)+(ar?" &#1603;&#1605;":" km")+"</bdi>");return bits.join('<span class="dot">&#8226;</span>');}
  function hgMerchantHref(m,loc){return "/"+loc+"/m/"+encodeURIComponent(m.slug)+"/"+(m._id||m.id);}
  function hgCategoryHref(c,loc){const slug=String(c.name||"").toLowerCase().trim().replace(/[^a-z0-9\u0600-\u06ff]+/g,"-").replace(/^-|-$/g,"")||"category";return "/"+loc+"/m-category/"+encodeURIComponent(slug)+"/"+c.id+"?categoryCollection=true";}
  function applyCategoryRows(){
    try{
      const nearby=document.getElementById("NearbyMerchants"),st=acStore(),S=st&&st.state,hd=S&&S.homeData;if(!nearby||!hd||!Array.isArray(hd.merchant_categories))return;
      const sel=S.Utils&&S.Utils.selectedLocation&&S.Utils.selectedLocation.location;if(!sel||typeof sel.latitude!=="number")return;
      const ar=(document.documentElement.lang||"").startsWith("ar"),loc=ar?"ar":"en",key=sel.latitude.toFixed(5)+","+sel.longitude.toFixed(5)+"|"+loc;
      if(hgCat.key!==key){if(!hgCat.busy)hgCatFetch(key,[sel.latitude,sel.longitude],loc);return;}
      const merchants=(hgCat.list||[]).slice().sort((a,b)=>{const x=hgKm(a),y=hgKm(b);return(x==null?1e9:x)-(y==null?1e9:y);});window.__hgSearchMerchants=merchants;
      const MAIN=["6a9beeebdda6795f8c065933","6a9bee55dda6795f8c065932","6a9beef4dda6795f8c065934","6a9bee60288fb9d9e903a7e2","6a9bef06288fb9d9e903a7e3"],allCats=hd.merchant_categories,cats=MAIN.map(id=>allCats.find(c=>c.id===id)).filter(Boolean);
      const sig=key+"|"+merchants.length+"|"+cats.map(c=>c.id).join(",")+"|v92";let box=document.getElementById("hg-cat-rows");
      if(box&&box.dataset.sig===sig&&box.nextElementSibling===nearby){nearby.classList.add("hg-cat-hidden");hgHideRec();return;}hgCatStyle();
      const catMap={};allCats.forEach(c=>{catMap[c.id]=c.name;});const inCat=c=>merchants.filter(m=>(m.merchant_category_ids||[]).includes(c.id));const allLink=c=>'<a class="hg-all" href="'+hgCategoryHref(c,loc)+'">'+(ar?"&#1593;&#1585;&#1590; &#1575;&#1604;&#1603;&#1604;":"See all")+"</a>";
      const heroLogos=merchants.filter(m=>hgImg(m,"logo")).slice(0,3);let html='<section class="hg-hero"><div class="hg-hero-copy"><div class="hg-hero-k">'+(ar?"&#1607;&#1575;&#1610;&#1576;&#1585;&#1602;&#1608; &#1575;&#1604;&#1576;&#1581;&#1585;&#1610;&#1606;":"HYPERGO BAHRAIN")+'</div><div class="hg-hero-h">'+(ar?"&#1603;&#1604; &#1605;&#1575; &#1578;&#1581;&#1578;&#1575;&#1580;&#1607;&#1548; &#1601;&#1610; &#1605;&#1603;&#1575;&#1606; &#1608;&#1575;&#1581;&#1583;":"Bahrain, all in one place.")+'</div><div class="hg-hero-p">'+(ar?"&#1571;&#1603;&#1604;&#1548; &#1608;&#1585;&#1583;&#1548; &#1573;&#1604;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&#1575;&#1578;&#1548; &#1589;&#1610;&#1583;&#1604;&#1610;&#1575;&#1578; &#1608;&#1571;&#1603;&#1579;&#1585;.":"Food, flowers, tech, pharmacy and more.")+'</div></div>';
      if(heroLogos.length)html+='<div class="hg-hero-logos">'+heroLogos.map(m=>'<span class="hg-hero-logo" style="background-image:url(&quot;'+hgEsc(hgImg(m,"logo"))+'&quot;)"></span>').join("")+"</div>";
      if(cats.length)html+='<div class="hg-hero-links">'+cats.slice(0,4).map(c=>'<a class="hg-hero-link" href="'+hgCategoryHref(c,loc)+'">'+hgEsc(c.name)+"</a>").join("")+"</div>";html+="</section>";
      let featured=merchants.filter(m=>(m.is_featured||m.is_sponsored)&&hgImg(m,"cover"));if(featured.length<4){const used=new Set(featured.map(m=>m._id||m.id));merchants.filter(m=>hgImg(m,"cover")&&!used.has(m._id||m.id)).slice(0,6-featured.length).forEach(m=>featured.push(m));}featured=featured.slice(0,6);
      if(featured.length){html+='<section class="hg-sec"><div class="hg-sec-h"><div><div class="hg-sec-title">'+(ar?"&#1575;&#1603;&#1578;&#1588;&#1601; &#1575;&#1604;&#1602;&#1585;&#1610;&#1576; &#1605;&#1606;&#1603;":"Discover near you")+'</div><div class="hg-sec-sub">'+(ar?"&#1605;&#1578;&#1575;&#1580;&#1585; &#1605;&#1582;&#1578;&#1575;&#1585;&#1577; &#1576;&#1575;&#1604;&#1602;&#1585;&#1576; &#1605;&#1606;&#1603;":"A quick look at stores around you")+'</div></div></div><div class="hg-feature-rail">';featured.forEach(m=>{const meta=hgMetaHtml(m,ar);html+='<a class="hg-feature" href="'+hgMerchantHref(m,loc)+'"><div class="hg-feature-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"cover"))+'&quot;)"></div><div class="hg-feature-body"><div class="hg-feature-name">'+hgEsc(m.name)+'</div>'+(meta?'<div class="hg-meta">'+meta+"</div>":"")+"</div></a>";});html+="</div></section>";}
      const brands=merchants.filter(m=>hgImg(m,"logo")).slice(0,14);if(brands.length){html+='<section class="hg-sec soft"><div class="hg-sec-h"><div><div class="hg-sec-title">'+(ar?"&#1605;&#1578;&#1575;&#1580;&#1585; &#1602;&#1585;&#1610;&#1576;&#1577; &#1605;&#1606;&#1603;":"Brands near you")+'</div><div class="hg-sec-sub">'+(ar?"&#1578;&#1589;&#1601;&#1581; &#1576;&#1587;&#1585;&#1593;&#1577; &#1581;&#1587;&#1576; &#1575;&#1604;&#1605;&#1578;&#1580;&#1585;":"Jump straight into a store")+'</div></div></div><div class="hg-brand-grid">';brands.forEach(m=>{html+='<a class="hg-brand" href="'+hgMerchantHref(m,loc)+'"><div class="hg-brand-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"logo"))+'&quot;)"></div><div class="hg-brand-name">'+hgEsc(m.name)+"</div></a>";});html+="</div></section>";}
      cats.forEach((c,i)=>{const list=inCat(c).slice(0,10);if(!list.length)return;const mode=i===0||i===2?"feature":(i===3?"compact":"logo");html+='<section class="hg-cat-block"><div class="hg-sec-h"><div class="hg-sec-title">'+hgEsc(c.name)+"</div>"+allLink(c)+"</div>";if(mode==="feature"){html+='<div class="hg-feature-rail">';list.forEach(m=>{const meta=hgMetaHtml(m,ar);html+='<a class="hg-feature" href="'+hgMerchantHref(m,loc)+'"><div class="hg-feature-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"cover"))+'&quot;)"></div><div class="hg-feature-body"><div class="hg-feature-name">'+hgEsc(m.name)+'</div>'+(meta?'<div class="hg-meta">'+meta+"</div>":"")+"</div></a>";});html+="</div>";}else if(mode==="logo"){html+='<div class="hg-logo-rail">';list.forEach(m=>{html+='<a class="hg-logo-card" href="'+hgMerchantHref(m,loc)+'"><div class="hg-logo-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"logo"))+'&quot;)"></div><div class="hg-logo-name">'+hgEsc(m.name)+"</div></a>";});html+="</div>";}else{html+='<div class="hg-compact-rail">';list.forEach(m=>{const meta=hgMetaHtml(m,ar);html+='<a class="hg-compact" href="'+hgMerchantHref(m,loc)+'"><div class="hg-compact-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"logo"))+'&quot;)"></div><div class="hg-compact-body"><div class="hg-compact-name">'+hgEsc(m.name)+'</div>'+(meta?'<div class="hg-meta">'+meta+"</div>":"")+"</div></a>";});html+="</div>";}html+="</section>";});
      const rest=[],seen={};merchants.forEach(m=>{const id=m._id||m.id,ids=m.merchant_category_ids||[];if(seen[id]||ids.some(x=>MAIN.includes(x)))return;seen[id]=true;rest.push(m);});if(rest.length){html+='<section class="hg-more"><div class="hg-sec-h"><div class="hg-sec-title">'+(ar?"&#1575;&#1604;&#1605;&#1586;&#1610;&#1583; &#1605;&#1606; &#1575;&#1604;&#1605;&#1578;&#1575;&#1580;&#1585; &#1575;&#1604;&#1602;&#1585;&#1610;&#1576;&#1577;":"More stores near you")+"</div></div>";rest.forEach(m=>{const meta=hgMetaHtml(m,ar),cn=(m.merchant_category_ids||[]).map(x=>catMap[x]).filter(Boolean).join(", ");html+='<a class="hg-row" href="'+hgMerchantHref(m,loc)+'"><div class="hg-row-img" style="background-image:url(&quot;'+hgEsc(hgImg(m,"logo"))+'&quot;)"></div><div class="hg-row-body"><div class="hg-row-name">'+hgEsc(m.name)+'</div>'+(meta?'<div class="hg-meta">'+meta+"</div>":"")+(cn?'<div class="hg-row-cat">'+hgEsc(cn)+"</div>":"")+"</div></a>";});html+="</section>";}
      if(!html)return;if(!box){box=document.createElement("div");box.id="hg-cat-rows";box.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a)return;const app=document.querySelector("#app"),r=app&&app.__vue_app__&&app.__vue_app__.config.globalProperties.$router;if(r){e.preventDefault();r.push(a.getAttribute("href"));}});}box.innerHTML=html;box.dataset.sig=sig;if(box.nextElementSibling!==nearby)nearby.parentNode.insertBefore(box,nearby);nearby.classList.add("hg-cat-hidden");hgHideRec();
    }catch(e){}
  }

  /* MERCHANT CARDS (all lists): Hyperzod prints "km" with no number for merchants without a map location, "0" for a missing
     time and thousands of km for a 0,0 location. Hide those parts (and a leading dot) instead of showing junk. */
  function applyMerchantInfoClean() {
    document.querySelectorAll(".merchant-card-info").forEach((info) => {
      const sig = info.textContent;
      if (info.dataset.hgc === sig) return;
      const parts = [...info.children].filter((c) => c.tagName === "SPAN");
      let first = true;
      parts.forEach((sp) => {
        const t = sp.textContent.replace(/\u00a0/g, " ").trim();
        let bad = !t;
        if (sp.id === "merchantDistance") {
          const v = parseFloat(t.replace(/[^\d.]/g, ""));
          bad = isNaN(v) || v > 100;
        } else if (sp.id === "AverageTime") {
          bad = !/[1-9]/.test(t);
        }
        /* Hyperzod's tailwind display classes are !important, so ours must be too */
        if (bad) sp.style.setProperty("display", "none", "important"); else sp.style.removeProperty("display");
        const dot = sp.querySelector(".merchant-card-info__dot");
        if (!bad) { if (dot) { if (first) dot.style.setProperty("display", "none", "important"); else dot.style.removeProperty("display"); } first = false; }
      });
      info.dataset.hgc = info.textContent;
    });

    /* store page header line ("30 mins • 6143.22 km • BHD 1.00 Delivery"): same rule for the distance */
    document.querySelectorAll("#merchant-header-v2 .storefront-gutter>.tw-mt-4>div:first-child").forEach((row) => {
      const sig = row.textContent;
      if (row.dataset.hgc === sig) return;
      let first = true;
      [...row.children].forEach((it) => {
        const tx = it.textContent.replace(/\u00a0/g, " ").replace(/•/g, "").trim();
        let bad = !tx || /^0(?:[.,]0+)?(?:\s*(?:min(?:ute)?s?|hours?|دقيقة|دقائق|ساعة))?$/i.test(tx);
        if (/\bkm\b|كم/.test(tx)) { const v = parseFloat(tx.replace(/[^\d.]/g, "")); bad = isNaN(v) || v > 100; }
        if (bad) it.style.setProperty("display", "none", "important"); else it.style.removeProperty("display");
        if (!bad) {
          [...it.querySelectorAll("*")].filter((d) => d.children.length === 0 && (d.textContent.trim() === "•" || d.matches(".tw-w-1.tw-h-1.tw-rounded-full"))).forEach((d) => {
            if (first) d.style.setProperty("display", "none", "important"); else d.style.removeProperty("display");
          });
          first = false;
        }
      });
      row.dataset.hgc = row.textContent;
    });
  }

  /* PRODUCT PAGE: Hyperzod's button just says "Add" (Arabic: the machine-translated "يضيف"). Rename to "Add item" / "أضف للسلة". */
  function applyProductAddLabel() {
    document.querySelectorAll(".product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn__content>span>span").forEach((s) => {
      const t = s.textContent.replace(/\u00a0/g, " ").trim();
      if (t === "Add") s.textContent = "Add item";
      else if (t === "يضيف" || t === "إضافة" || t === "أضف") s.textContent = "أضف للسلة";
    });
  }

  /* PRODUCT LISTS (store pages): Vuetify's v-img renders an empty box (no <img> at all) when a product
     has no photo uploaded. With nothing to anchor it, the floating "Add Item" button ends up overlapping
     the product name/price next to it. Fix: drop in a plain grey placeholder image so the box always has
     real image content, same as every other product tile. */
  const HG_NOIMG_SVG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>" +
      "<rect width='200' height='200' fill='#F0F0F0'/>" +
      "<path d='M46 146l38-48 30 34 24-28 32 42z' fill='#DCDCDC'/>" +
      "<circle cx='70' cy='72' r='16' fill='#DCDCDC'/>" +
      "</svg>"
    );
  /* v77: Adam reported the placeholder showing up on products that DO have a real photo set. Root cause: this
     function used to add the placeholder if no <img> existed yet and then never look at that box again once
     added - fine for a product that genuinely has no photo, wrong for one whose photo is just lazy-loaded (not
     yet scrolled into view, or still fetching) when this happened to run. The first time it ran before the real
     <img> arrived, it permanently welded our fallback in, and since our own fallback IS an <img>, the old
     "if (box.querySelector('img')) return" guard then treated the box as already handled forever - even after
     Vue inserted the real photo right alongside it. Fixed by distinguishing our own fallback (tagged
     "hg-noimg-fallback") from a real image, and removing a stale fallback the moment a real one shows up, every
     time this runs - instead of a one-shot check that can never undo itself.

     v78: still happening on the "Recommended Products" carousel, on products confirmed (via their own product
     page) to have a real photo. Attempted fix: also treat a CSS background-image as proof of a real photo, not
     just an <img> tag - but still scoped the check to ".v-responsive__content" only, which was the actual bug
     (see v79 below), so this didn't fix it either.

     v79: root-caused for real by loading the live site directly (hypergo.bh still resolves behind its own
     "launching" banner - the search page works) and dumping the actual DOM of a broken card. Vuetify's v-img
     renders the real photo as "<img class='v-img__img'>" as a DIRECT CHILD of ".v-responsive" - a SIBLING of
     ".v-responsive__content", not inside it. Our own fallback gets appended INTO ".v-responsive__content" (so
     it stacks on top, positioned correctly) - but the "does a real photo already exist" check was also scoped
     to content.querySelectorAll("img"), which can only ever see the fallback it just added, never the real
     <img> sitting right next to it. That's why the fallback never got removed even when a real photo had
     already loaded: this bug existed in every version since v77, this file has never actually detected a real
     photo correctly. Confirmed live: forcing the check to look at the whole box (not just content) correctly
     finds the real image and removes the stale fallback. This also happens to be *why* tapping the image did
     nothing - the stuck fallback (sized to fill its box) sat inside ".v-responsive__content", which itself is
     always a full-size, click-capturing overlay div (Vuetify's own default), so as long as our fallback stayed
     there taking up "content", nothing about that click ever reached whatever native handling exists further
     up. Removing the fallback correctly is the actual fix for both bugs at once. */
  function hgBoxHasRealPhoto(box) {
    const realImg = Array.prototype.find.call(box.querySelectorAll("img"), (i) => !i.classList.contains("hg-noimg-fallback"));
    if (realImg) return true;
    const bgCandidates = box.querySelectorAll(".v-img__img, [style*='background-image']");
    for (let i = 0; i < bgCandidates.length; i++) {
      const bg = getComputedStyle(bgCandidates[i]).backgroundImage;
      if (bg && bg !== "none") return true;
    }
    return false;
  }
  function applyNoImagePlaceholder() {
    document.querySelectorAll(".pro-card-h-img, .scheme-merchant-product-grid-card .product-image-frame .product-image").forEach((box) => {
      const content = box.querySelector(".v-responsive__content") || box;
      const fallback = content.querySelector("img.hg-noimg-fallback");
      if (hgBoxHasRealPhoto(box)) {
        if (fallback) fallback.remove();
        return;
      }
      if (fallback) return;
      const img = document.createElement("img");
      img.src = HG_NOIMG_SVG;
      img.className = "hg-noimg-fallback";
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;";
      content.appendChild(img);
    });
  }

  /* CHECKOUT BAR: Hyperzod's native "floating cart" button is a small rounded pill that hovers with a gap
     above the bottom edge, centered, no price shown (just "Checkout • N"). Redesigned as a full-width bar
     pinned flush to the very bottom - a HyperGo-branded combination of Talabat's cart-icon+count-badge and
     Keeta's bold, prominent price - rather than either one copied outright.
     The button itself is left alone functionally (same element, same click handler -> /checkout?cart_id=...,
     untouched), only restyled: its native icon+text content is hidden and our own markup is layered in
     as a sibling, since Vue re-renders that native content reactively and fighting it would be fragile.
     The one piece Hyperzod's own DOM doesn't expose here is the price. It doesn't need a network call for
     that, though: the live cart total is already kept in localStorage under the "vuex" key (Cart.cart[0]),
     written there by Hyperzod itself and rehydrated on page load - confirmed live, with and without a
     reload - so reading it is just a plain localStorage read, no interception needed. */
  function hgReadCart() {
    try {
      const raw = localStorage.getItem("vuex");
      if (!raw) return null;
      const cart = JSON.parse(raw).Cart && JSON.parse(raw).Cart.cart;
      const c = Array.isArray(cart) ? cart[0] : cart;
      if (!c || typeof c.total_amount !== "number") return null;
      return { total: c.total_amount, count: c.total_items || 0, discount: c.discount_amount || 0 };
    } catch (e) {
      return null;
    }
  }

  function hgFmtMoney(num) {
    const isAr = (document.documentElement.lang || "").toLowerCase().indexOf("ar") === 0 || document.documentElement.dir === "rtl";
    const T = isAr ? "د.ب.‏" : "BHD";
    const NB = " ";
    const n = Number(num).toLocaleString("en-US", {useGrouping:false, minimumFractionDigits:2, maximumFractionDigits:3});
    return isAr ? n + NB + T : T + NB + n;
  }

  const HG_CART_SVG =
    '<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#hgcartclip)">' +
    '<path d="M14.2502 12.75C13.0127 12.75 12.0059 13.7568 12.0059 14.9944C12.0059 16.2319 13.0127 17.2388 14.2502 17.2388C15.4878 17.2388 16.4946 16.2319 16.4946 14.9944C16.4946 13.7568 15.4878 12.75 14.2502 12.75ZM14.2502 15.8921C13.7551 15.8921 13.3525 15.4895 13.3525 14.9944C13.3525 14.4993 13.7551 14.0966 14.2502 14.0966C14.7454 14.0966 15.148 14.4993 15.148 14.9944C15.148 15.4895 14.7454 15.8921 14.2502 15.8921Z" fill="currentColor"></path>' +
    '<path d="M17.8569 4.0724C17.7294 3.90924 17.5339 3.81407 17.3268 3.81407H4.1562L3.5502 1.27859C3.47771 0.975611 3.2068 0.761719 2.89527 0.761719H0.673316C0.301431 0.761684 0 1.06312 0 1.435C0 1.80689 0.301431 2.10832 0.673316 2.10832H2.36381L4.55209 11.2646C4.62459 11.5678 4.8955 11.7814 5.20702 11.7814H15.6884C15.9979 11.7814 16.2677 11.5705 16.3419 11.2702L17.9804 4.64918C18.03 4.44812 17.9844 4.23556 17.8569 4.0724ZM15.1616 10.4348H5.73848L4.47802 5.16071H16.4665L15.1616 10.4348Z" fill="currentColor"></path>' +
    '<path d="M6.10376 12.75C4.86619 12.75 3.85938 13.7568 3.85938 14.9944C3.85938 16.2319 4.86622 17.2388 6.10376 17.2388C7.34131 17.2388 8.34815 16.2319 8.34815 14.9944C8.34815 13.7568 7.34131 12.75 6.10376 12.75ZM6.10376 15.8921C5.60865 15.8921 5.20601 15.4895 5.20601 14.9944C5.20601 14.4993 5.60865 14.0966 6.10376 14.0966C6.59887 14.0966 7.00152 14.4993 7.00152 14.9944C7.00152 15.4895 6.59887 15.8921 6.10376 15.8921Z" fill="currentColor"></path>' +
    '</g><defs><clipPath id="hgcartclip"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>';

  function applyCheckoutBar() {
    const btn = document.querySelector(".scheme-merchant-page.merchant-mobile-view button.v-btn--fixed.rounded-pill");
    if (!btn) return;
    btn.classList.add("hg-checkout-bar");
    let bar = btn.querySelector(".hg-co-bar");
    if (!bar) {
      bar = document.createElement("span");
      bar.className = "hg-co-bar";
      bar.innerHTML =
        '<span class="hg-co-left"><span class="hg-co-cart">' + HG_CART_SVG + '<span class="hg-co-badge"></span></span>' +
        '<span class="hg-co-label"></span></span>' +
        '<span class="hg-co-right"><span class="hg-co-strike"></span><span class="hg-co-price"></span></span>';
      btn.appendChild(bar);
    }
    const cart = hgReadCart();
    const count = cart ? cart.count : (parseInt((btn.querySelector(".v-btn__content")?.textContent || "").replace(/\D+/g, ""), 10) || 0);
    const isAr = (document.documentElement.lang || "").toLowerCase().indexOf("ar") === 0;
    const write=(el,value)=>{if(el.textContent!==value)el.textContent=value;};
    write(bar.querySelector(".hg-co-badge"), String(count));
    write(bar.querySelector(".hg-co-label"), isAr ? "الدفع" : "Checkout");
    const priceEl = bar.querySelector(".hg-co-price");
    const strikeEl = bar.querySelector(".hg-co-strike");
    if (cart) {
      write(priceEl, hgFmtMoney(cart.total));
      if (cart.discount > 0) {
        write(strikeEl, hgFmtMoney(cart.total + cart.discount));
        strikeEl.style.display = "";
      } else {
        strikeEl.style.display = "none";
      }
    } else {
      write(priceEl, "");
      strikeEl.style.display = "none";
    }
  }

  /* v75: Adam asked, correctly, why not just go back to a version that didn't have this problem and diff it
     against what changed. Did exactly that - pulled every archived version and grepped for when JS started
     touching the status bar at all. v1-v56 (the whole run before this feature existed) had ZERO JS controlling
     this element - just six plain CSS rules below (":has()" / class selectors, one per page state), each setting
     the color once via the stylesheet and leaving it alone. v57 introduced the first JS "safety net"
     (applyStatusBarColor) for one narrow, specific bug: a stale purple color sometimes stuck around after
     navigating category -> merchant on the real native app. That's a one-time-per-navigation staleness, not a
     continuous flicker. Everything from v61 through v74 escalated that narrow safety net - faster reaction,
     unconditional polling, a per-frame RAF loop, removing the scrim exclusion, forcing transition:none, a
     dedicated per-element guard observer - chasing a flicker that, per Adam, wasn't there before this machinery
     existed ("we literally had it perfectly down").
     Rather than adding a 5th layer on top of a JS mechanism that has been fighting something for 4 versions
     straight without winning, this removes that JS mechanism entirely and goes back to the pure-CSS approach
     v1-v56 used - the six rules restored below, matching v57's exact selectors (including its scrim exclusion
     where v57 had it). With no JS writing to this element at all anymore, there is nothing left on our side for
     anything native to be fighting - whatever shows up now is either correct on its own (CSS is genuinely
     reactive via :has()) or it's the native side's own unmodified behavior, with no interference from us either
     way. The trade-off: the one narrow bug v57 was built for (a stale color surviving one specific navigation)
     could return. That's a far smaller, rarer problem than an ongoing flicker, and it's a known, well-understood
     bug if it does resurface - worth that trade to stop guessing at a mechanism that hasn't worked in 4 tries. */

  /* v76: Adam confirmed the status bar is fixed. The v70 diagnostic readout (small green-on-black box, bottom-
     left) did its job - it was explicitly temporary, so it's removed now rather than left running in production. */

  // Customer presentation integrates with existing Hyperzod controls; it never owns cart/auth/payment state.
  let customerLabelId = 0, customerKeyboardBound = false;
  function applyCustomerExperience() {
    const ar=(document.documentElement.lang||'').startsWith('ar');
    const attr=(el,key,value)=>{if(el&&el.getAttribute(key)!==value)el.setAttribute(key,value);};
    const label=(el,en,arabic)=>{if(el&&!el.textContent.trim()&&!el.getAttribute('aria-labelledby'))attr(el,'aria-label',ar?arabic:en);};
    const publicTitles={'about-us':['About Us','من نحن'],'contact-us':['Contact Us','تواصل معنا'],'privacy-policy':['Privacy Policy','سياسة الخصوصية'],'terms-and-conditions':['Terms and Conditions','الشروط والأحكام']};
    const pageKey=location.pathname.match(/^\/(?:en|ar)\/page\/([^/]+)\/?$/)?.[1];
    const publicHeader=document.querySelector('.scheme-mobile-page-header__title');
    if(publicTitles[pageKey]&&publicHeader&&!publicHeader.textContent.trim())publicHeader.textContent=publicTitles[pageKey][ar?1:0];
    document.querySelectorAll('.scheme-mobile-page-header .back-btn').forEach(el=>label(el,'Back','رجوع'));
    document.querySelectorAll('#ProfileSideBar .scheme-profile-edit').forEach(el=>label(el,'Edit profile','تعديل الملف الشخصي'));
    document.querySelectorAll('#ProceedToCheckoutBottomFixedContainer .cart-panel-btn').forEach(el=>label(el,'Open cart','فتح سلة التسوق'));
    document.querySelectorAll('#hg-acct-hero .hg-edit').forEach(el=>attr(el,'aria-label',ar?'تعديل الملف الشخصي':'Edit profile'));
    if(/^\/(en|ar)\/profile\/address\/?$/.test(location.pathname))document.querySelectorAll('#app-router-view h1,#app-router-view h2,#app-router-view h3').forEach(el=>{
      if(el.textContent.trim()==='Manage addreses')el.textContent=ar?'إدارة العناوين':'Manage addresses';
    });
    if(/^\/(en|ar)\/profile\/language\/?$/.test(location.pathname)){
      const title=document.querySelector('#Languages .v-card-title h1');
      if(title&&/^Choose Language Title$/i.test(title.textContent.trim()))title.textContent=ar?'اختر اللغة':'Choose your language';
    }
    const enable=(el)=>{
      if(!el||el.matches('a,button,input,select,textarea')||el.querySelector('a,button,input,select,textarea'))return;
      attr(el,'role','button');attr(el,'tabindex','0');attr(el,'data-hg-keyboard','1');
      if(el.tagName==='IMG'&&el.alt)attr(el,'aria-label',ar?(arCat(el.alt)||el.alt):el.alt);
    };
    document.querySelectorAll('#CurrentLocationBtn,#ProfileSideBar .scheme-profile-nav-item,#ProductCategories .hg-cat-icon-grid img').forEach(enable);
    document.querySelectorAll('.cart-qty-button').forEach(q=>{
      label(q.querySelector('.decrement-btn'),'Decrease quantity','تقليل الكمية');
      label(q.querySelector('.increment-btn'),'Increase quantity','زيادة الكمية');
    });
    document.querySelectorAll('.product-popup .v-card-actions>div:first-child,#add_to_cart_hide_from_mobile_app>div:first-child').forEach(q=>{
      const buttons=q.querySelectorAll('button');
      if(buttons.length===2){label(buttons[0],'Decrease quantity','تقليل الكمية');label(buttons[1],'Increase quantity','زيادة الكمية');}
      const input=q.querySelector('input');if(input&&!input.getAttribute('aria-label'))attr(input,'aria-label',ar?'الكمية':'Quantity');
    });
    document.querySelectorAll('#ProductPopupForm .v-list-item').forEach(row=>{
      const title=row.querySelector('.v-list-item-title'),input=row.querySelector('input[type=radio],input[type=checkbox]');
      if(!title||!input||input.labels?.length||input.getAttribute('aria-label')||input.getAttribute('aria-labelledby'))return;
      if(!title.id)title.id='hg-option-label-'+(++customerLabelId);
      attr(input,'aria-labelledby',title.id);
    });
    document.querySelectorAll('.scheme-edit-profile-panel :is(#firstNameEdit,#lastNameEdit,#phoneEdit,#emailEdit)').forEach(input=>{
      if(input.getAttribute('aria-label')||input.labels?.length)return;
      const existing=input.getAttribute('aria-labelledby');
      if(existing&&document.getElementById(existing)?.textContent.trim())return;
      const title=input.closest('.v-col')?.querySelector('label');if(!title)return;
      if(!title.id)title.id='hg-profile-label-'+(++customerLabelId);
      attr(input,'aria-labelledby',title.id);
    });
    document.querySelectorAll('.scheme-auth-panel,.scheme-cart-panel,.scheme-location-search,.scheme-address-editor,.scheme-edit-profile-panel,.scheme-filter-host').forEach(panel=>{
      // The first native button is the verified panel close/back control; leave named actions untouched.
      label(panel.querySelector('button'),'Close','إغلاق');
    });
    document.querySelectorAll('.scheme-address-editor #contactPhoneNumber').forEach(el=>attr(el,'aria-label',ar?'رقم التواصل':'Contact number'));
    document.querySelectorAll('.scheme-coupon-panel .scheme-coupon-content #coupon').forEach(header=>{
      const panel=header.closest('.scheme-coupon-panel');
      if(!panel.querySelector('.v-overlay__scrim'))return;
      let title=header.querySelector('.hg-coupon-title');
      if(!title){title=document.createElement('h3');title.className='hg-coupon-title';header.appendChild(title);}
      const text=ar?'القسائم':'Coupons';if(title.textContent!==text)title.textContent=text;
      let close=header.querySelector('.hg-coupon-close');
      if(!close){
        close=document.createElement('button');close.type='button';close.className='hg-coupon-close';
        close.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
        // Vuetify owns dismissal, focus restoration and overlay state.
        close.addEventListener('click',()=>panel.querySelector('.v-overlay__scrim')?.click());
        header.appendChild(close);
      }
      attr(close,'aria-label',ar?'إغلاق':'Close');
      attr(panel.querySelector('#couponInput'),'aria-label',ar?'رمز القسيمة':'Coupon code');
    });
    document.querySelectorAll('.hg-landing a[href]').forEach(a=>{
      try{const url=new URL(a.href);if(url.hostname!=='www.hypergo.bh'&&url.hostname!=='hypergo.bh')return;
        if(/^\/(en|ar)\//.test(url.pathname)){url.pathname=url.pathname.replace(/^\/(en|ar)\//,ar?'/ar/':'/en/');attr(a,'href',url.href);}
      }catch(e){}
    });
    // Hide only a distance unit with no value. Preserve the platform's delivery time and valid distance.
    document.querySelectorAll('#MultiVendorSearch #SearchedMerchantAverageTimeAndDistance>span').forEach(span=>{
      const tail=span.lastChild;if(tail?.nodeType!==3)return;
      const empty=/^\s*(km|كم)\s*$/.test(tail.nodeValue);
      span.classList.toggle('hg-missing-distance',empty);
      if(empty)tail.nodeValue='';
      // Keep the hidden separator hidden until Vue supplies a numeric distance again.
      else if(!tail.nodeValue.trim())span.classList.add('hg-missing-distance');
    });
    if(!customerKeyboardBound){
      customerKeyboardBound=true;
      document.addEventListener('keydown',e=>{
        if(e.key!=='Enter'&&e.key!==' ')return;
        const el=e.target.closest?.('[data-hg-keyboard="1"]');
        if(el&&e.target===el){e.preventDefault();el.click();}
      });
    }
  }

  function applyAll() {
    ensureExtraStyle();
    applyHyperGoHeader();
    applyHyperGoDesktop();
    applyHyperGoNav();
    applyLocLang();
    applyNearbyLogos();
    applyArabicCategories();
    applyArabicSearchPage();
    applyHyperGoAccount();
    applyHyperGoLanguage();
    applyHyperGoForms();
    syncOrdersNav();
    syncOrdersBack();
    applyProductAddLabel();
    applyCategoryRows();
    applyHomeCategoryGrid();
    applyMerchantInfoClean();
    applyNoImagePlaceholder();
    applyCheckoutBar();
    applySearchPage();
    applyCustomerExperience();
    if (renderObserver) renderObserver.takeRecords();
  }


  let renderObserver = null;
  applyAll();
  applyCurrency();


  let renderTimer = null;

  renderObserver = new MutationObserver(() => {

    clearTimeout(renderTimer);

    renderTimer =
      setTimeout(
        applyAll,
        60
      );

  });
  renderObserver.observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );
  renderObserver.observe(document.documentElement, {attributes:true,attributeFilter:["lang","dir"]});

  /* v75: the popstate listener that used to live here called applyStatusBarColor(), which no longer exists (see
     the big note above applyAll() - the whole JS status-bar mechanism was removed, back to the plain CSS rules
     this file used before v57). Nothing needs to run on popstate for this anymore, since the CSS ":has()"/class
     rules are reactive on their own without any JS asking them to re-check. */

  /* LANGUAGE SWITCH VEIL: Hyperzod tears the app down and rebuilds it in the new language (blank flash, a few seconds
     on slow phones). Cover that with a calm loading screen and lift it once the new language has rendered and settled. */
  function showLangVeil() {
    if (document.getElementById("hg-lang-veil")) return;
    const before = document.documentElement.lang;
    const veil = document.createElement("div");
    veil.id = "hg-lang-veil";
    veil.setAttribute("style", "position:fixed;inset:0;z-index:2147483000;background:#fff;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .12s ease;");
    veil.innerHTML = "<style>@keyframes hgspin{to{transform:rotate(360deg)}}</style><div style=\"width:38px;height:38px;border-radius:50%;border:4px solid #EDE7FF;border-top-color:#5A29DE;animation:hgspin .8s linear infinite\"></div>";
    document.documentElement.appendChild(veil);
    requestAnimationFrame(() => { veil.style.opacity = "1"; });
    const t0 = Date.now();
    let last = Date.now();
    const mo = new MutationObserver(() => { last = Date.now(); });
    mo.observe(document.body, { childList: true, subtree: true });
    const timer = setInterval(() => {
      const changed = document.documentElement.lang !== before;
      const quiet = Date.now() - last > 450;
      const ready = changed && quiet && Date.now() - t0 > 500;
      if (ready || Date.now() - t0 > 12000) {
        clearInterval(timer);
        mo.disconnect();
        veil.style.transition = "opacity .25s ease";
        veil.style.opacity = "0";
        setTimeout(() => veil.remove(), 300);
      }
    }, 100);
  }

  /* LANGUAGE PAGE (Account > Language): Hyperzod only ticks the radio; the language changes only after
     its Submit button is pressed, and that button is not visible here. So submit as soon as a language is picked.
     Delay lets Hyperzod store the new choice first. */
  document.addEventListener(
    "change",
    (e) => {
      const t = e.target;
      if (!t || !t.matches || !t.matches("#Languages input[type='radio']")) return;
      setTimeout(() => {
        const b = document.querySelector("#Languages .submit-btn");
        if (!b || b.disabled) return;
        showLangVeil();
        b.click();
      }, 100);
    },
    true
  );

  /* ACCOUNT PAGE, instant: runs before the browser paints, so the default Hyperzod layout never flashes
     when the account page is (re)opened, e.g. after pressing Back from a sub-page. */
  const acctMQ = window.matchMedia("(max-width: 959.98px)");
  let acctRuns = 0, acctWin = 0;
  const acctMO = new MutationObserver((records, observer) => {
    try {
    if (!acctMQ.matches) return;
    syncSearchClass();
    /* home header: style it the moment it is (re)created (e.g. coming Back from Search) so the default white header never flashes */
    const hdrRoot = document.getElementById("MultiVendorHeaderRoot");
    if (hdrRoot && !hdrRoot.style.getPropertyValue("background-color") && document.querySelector(".home-mobile-search-row")) { applyHyperGoHeader(); applyLocLang(); }
    /* bottom nav: restyle the moment it is (re)created so the default nav never shows */
    const nav = document.getElementById("MultiVendorBottomNav");
    if (nav && nav.querySelector(".classic-nav-item:not([data-hg-nav])")) applyHyperGoNav();
    if (langNeedsFix()) applyHyperGoLanguage();
    if (document.documentElement.classList.contains("hg-orders-acct")) syncOrdersBack();
    const ed = [...document.querySelectorAll(".scheme-address-editor")].find(isVisible);
    const epp = document.querySelector(".scheme-edit-profile-panel");
    if (ed || epp) {
      ensureFormsStyle();
      /* v72: this toggle used to run with no visibility check at all, on every single DOM mutation while on
         mobile - a second, independent writer of the exact same class applyHyperGoForms() already guards with
         isVisible(). Two detectors racing to set the same class from two different signals (one visibility-aware,
         one not) is exactly how you get a class - and therefore the status bar color - flapping true/false in
         quick succession even while sitting still on an unrelated page. Matching the same isVisible() guard here. */
      document.documentElement.classList.toggle("hg-addr-editor", !!(ed && isVisible(ed)));
      fixTypos(ed || epp);
      fixArabicForms();
    } else if (document.documentElement.classList.contains("hg-addr-editor")) {
      document.documentElement.classList.remove("hg-addr-editor");
    }
    const pg = acctPage();
    if (!pg || !pg.querySelector("#ProfileSideBar")) return;
    const hdr = pg.querySelector(".scheme-mobile-page-header");
    const noHdr = !hdr || !hdr.querySelector(".scheme-mobile-page-header__surface");
    if (
      pg.classList.contains("hg-acct-root") &&
      pg.classList.contains("hg-nohdr") === noHdr &&
      pg.querySelector("#hg-acct-hero") &&
      (!pg.querySelector(".scheme-profile-nav-item") || pg.querySelector(".hg-acct-label,.hg-acct-sep"))
    ) return;
    /* safety valve: never let this run away (max 60 runs per second) */
    const now = Date.now();
    if (now - acctWin > 1000) { acctWin = now; acctRuns = 0; }
    if (++acctRuns > 60) return;
    applyHyperGoAccount();
    } finally { observer.takeRecords(); }
  });
  acctMO.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  });

  new MutationObserver(scheduleCurrency).observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });

})();
