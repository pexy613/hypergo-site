/* hg-version 2026-10-26-1834 */
/* COMING SOON SCREEN + HIDDEN TEAM ENTRY (2026-10-22, design B1; app and website): HyperGo isn't open to the public yet,
   so the app and the website open on a "coming soon" screen. It shows no password field: the team holds the HyperGo logo
   for 3 seconds, a "Team access" sheet slides up, and the team password unlocks that phone or browser for 24 hours
   (localStorage KEY = hash:time; 2026-10-22, was for good). After that it locks again, on the next opening or
   when the app or tab comes back to the front. Changing PASS_HASH locks everyone again. While unlocked this block adds
   nothing to the page.
   Only a hash of the password is here (fnv()), checked without capitals or spaces at the ends. It runs first in this
   file (Global footer) so it is in place before Hyperzod draws the page. Picture and logo: coming-soon/ in this repo.
   (Moved here from app-footer.js, where it was app only.) */
(function () {
  var PASS_HASH = "3d948b6f";
  /* the unlock is kept under KEY; giving KEY a new name logs out every device at once (v2 2026-10-22: everyone reset) */
  var KEY = "hg-team-ok-v2";
  try { localStorage.removeItem("hg-team-ok"); } catch (e) {}
  var HOLD_MS = 3000;
  var DAY_MS = 24 * 60 * 60 * 1000;
  var BASE = "https://pexy613.github.io/hypergo-site/coming-soon/";
  function fnv(s) {
    var x = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 0x01000193) >>> 0; }
    return x.toString(16);
  }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  /* unlocked = the right hash and a time less than 24 hours ago (an old value without a time counts as locked) */
  function unlocked() {
    var p = String(read() || "").split(":"), t = Number(p[1]), now = Date.now();
    return p[0] === PASS_HASH && t > 0 && now - t < DAY_MS && t <= now + 60000;
  }
  if (window.__hgTeamLock) return;
  window.__hgTeamLock = 1;
  var html = document.documentElement;
  /* language: the address first (/en/..., /ar/...), then the customer's saved choice; Hyperzod's page starts with lang="ar"
     before it switches, so <html lang> is only the last fallback */
  var lm = /^\/(en|ar)(\/|$)/.exec(location.pathname);
  var loc = lm ? lm[1] : null;
  if (!loc) { try { loc = localStorage.getItem("user_selected_locale"); } catch (e) {} }
  var ar = (loc || html.getAttribute("lang") || "en").slice(0, 2) === "ar";
  /* Hyperzod can still change the language after this runs (this file loads deferred): <html lang> changes are followed
     below and the texts redrawn */
  var TXT = { ar: {
    soon: "قريبًا",
    h1a: "كن جزءًا من ",
    h1b: "الحركة.",
    text: "هايبرجو هو الحل الذي يساعد الأعمال المحلية على بيع المزيد والوصول إلى عدد أكبر من الناس والنمو.",
    follow: "تابعنا على \u2066@hypergobh\u2069", /* the handle kept left-to-right inside the Arabic line */
    team: "دخول الفريق",
    teamText: "لفريق هايبرجو فقط.",
    pass: "كلمة المرور",
    enter: "دخول",
    cancel: "إلغاء",
    err: "كلمة المرور غير صحيحة"
  }, en: {
    soon: "Coming soon",
    h1a: "Be part of the ",
    h1b: "movement.",
    text: "HyperGo is the solution that helps local businesses sell more, reach more people and grow.",
    follow: "Follow @hypergobh",
    team: "Team access",
    teamText: "For the HyperGo team only.",
    pass: "Password",
    enter: "Enter",
    cancel: "Cancel",
    err: "Wrong password"
  } };
  /* B1 values: deep purple #361985 behind the picture, off-white #FFFCF9 card with 28 top corners, title 34 bold #262626
     with the key word underlined in Appetite #ACE4AA (7pt line), text 16 grey #767676, purple #5A29DE 52 tall button;
     sheet: field #F6F4FB, 14 corners, 1.5pt border (#5A29DE focused, #E5384F wrong). Wide screens: picture left, card right. */
  var R = "#hg-cs";
  var css =
    "html.hg-team-locked,html.hg-team-locked body{overflow:hidden!important;}" +
    R + "{position:fixed;inset:0;z-index:2147483647;display:flex;flex-direction:column;background:#361985;color:#262626;overflow:hidden;" +
      "font-family:inherit;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;}" +
    R + " *{box-sizing:border-box;font-family:inherit;letter-spacing:0;margin:0;}" +
    R + " .hg-cs-hero{position:relative;flex:0 0 56%;overflow:hidden;}" +
    R + " .hg-cs-hero img.hg-cs-pic{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center bottom;display:block;}" +
    R + " .hg-cs-brand{position:absolute;inset-inline-start:16px;top:calc(var(--native-status-bar-height,env(safe-area-inset-top,0px)) + 10px);" +
      "display:flex;align-items:center;gap:10px;padding:8px;border-radius:14px;cursor:default;touch-action:none;-webkit-touch-callout:none;}" +
    R + " .hg-cs-brand img{width:28px;height:32px;display:block;pointer-events:none;-webkit-user-drag:none;}" +
    R + " .hg-cs-brand span{font-size:20px;line-height:24px;font-weight:700;color:#fff;}" +
    R + " .hg-cs-card{position:relative;flex:1 1 auto;margin-top:-28px;background:#FFFCF9;border-radius:28px 28px 0 0;" +
      "padding:32px 24px calc(32px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:12px;overflow-y:auto;}" +
    R + " .hg-cs-soon{font-size:13px;line-height:16px;font-weight:600;color:#5A29DE;}" +
    R + " h1{font-size:34px;line-height:42px;font-weight:700;color:#262626;}" +
    R + ":not([dir=rtl]) h1{letter-spacing:-.5px;}" +
    R + " h1 u{text-decoration-line:underline;text-decoration-color:#ACE4AA;text-decoration-thickness:7px;text-underline-offset:5px;text-decoration-skip-ink:none;}" +
    R + " .hg-cs-text{font-size:16px;line-height:24px;color:#767676;}" +
    R + " .hg-cs-follow{margin-top:auto;min-height:52px;border-radius:26px;background:#5A29DE;color:#fff;font-size:16px;font-weight:600;" +
      "text-decoration:none;display:flex;align-items:center;justify-content:center;}" +
    "@media (min-width:900px){" +
      R + "{flex-direction:row;}" +
      R + " .hg-cs-hero{flex:0 0 55%;}" +
      R + " .hg-cs-brand{top:24px;inset-inline-start:32px;}" +
      R + " .hg-cs-card{flex:1 1 45%;margin:0;margin-inline-start:-28px;border-radius:28px 0 0 28px;padding:64px;justify-content:center;gap:16px;}" +
      R + "[dir=rtl] .hg-cs-card{border-radius:0 28px 28px 0;}" +
      R + " h1{font-size:44px;line-height:54px;max-width:520px;}" +
      R + " .hg-cs-text{font-size:18px;line-height:28px;max-width:480px;}" +
      R + " .hg-cs-follow{margin-top:16px;max-width:320px;}" +
    "}" +
    R + " .hg-cs-scrim{position:absolute;inset:0;background:rgba(27,24,48,.45);display:none;}" +
    R + ".hg-cs-open .hg-cs-scrim{display:block;}" +
    R + " .hg-cs-sheet{position:absolute;inset-inline:0;bottom:0;background:#FFFCF9;border-radius:28px 28px 0 0;" +
      "padding:12px 24px calc(32px + env(safe-area-inset-bottom,0px));display:none;flex-direction:column;gap:16px;-webkit-user-select:text;user-select:text;}" +
    R + ".hg-cs-open .hg-cs-sheet{display:flex;}" +
    "@media (min-width:900px){" + R + " .hg-cs-sheet{inset-inline:auto;left:50%;bottom:auto;top:50%;transform:translate(-50%,-50%);width:420px;border-radius:28px;padding:24px;}" +
      R + " .hg-cs-grab{display:none;}}" +
    R + " .hg-cs-grab{align-self:center;width:40px;height:5px;border-radius:3px;background:#E5E5E5;}" +
    R + " h2{font-size:20px;line-height:24px;font-weight:700;color:#262626;margin-top:8px;}" +
    R + " .hg-cs-sub{font-size:14px;line-height:20px;color:#767676;margin-top:4px;}" +
    R + " label{display:flex;flex-direction:column;gap:6px;font-size:13px;line-height:16px;font-weight:600;color:#767676;}" +
    R + " input{width:100%;height:52px;padding:0 16px;border:1.5px solid transparent;border-radius:14px;background:#F6F4FB;" +
      "font-size:16px;color:#262626;outline:none;-webkit-appearance:none;appearance:none;}" +
    R + " input:focus{border-color:#5A29DE;}" +
    R + ".hg-cs-bad input{border-color:#E5384F;}" +
    R + " .hg-cs-err{min-height:20px;font-size:14px;line-height:20px;color:#E5384F;}" +
    R + " button{width:100%;border:0;cursor:pointer;font-size:16px;font-weight:600;}" +
    R + " .hg-cs-enter{height:52px;border-radius:26px;background:#5A29DE;color:#fff;}" +
    R + " .hg-cs-cancel{height:44px;background:transparent;color:#767676;font-size:14px;}";
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function build() {
    if (document.getElementById("hg-cs")) return;
    var st = el("style"); st.id = "hg-cs-style"; st.textContent = css;
    (document.head || html).appendChild(st);
    var root = el("div"); root.id = "hg-cs";
    /* picture with the logo on it (the logo is the hidden 3-second press) */
    var hero = el("div", "hg-cs-hero");
    var pic = el("img", "hg-cs-pic"); pic.src = BASE + "hero.jpg?v=2"; /* ?v= : bump when the picture changes (v2 2026-10-22: 1600x2000, was 800x1000) */ pic.alt = ""; pic.setAttribute("aria-hidden", "true"); pic.draggable = false;
    var brand = el("div", "hg-cs-brand");
    var logo = el("img"); logo.src = BASE + "logo-white.svg"; logo.alt = ""; logo.draggable = false;
    brand.appendChild(logo); brand.appendChild(el("span", "", "HyperGo"));
    hero.appendChild(pic); hero.appendChild(brand);
    /* card */
    var card = el("div", "hg-cs-card");
    var soon = el("span", "hg-cs-soon");
    var h1 = el("h1"), h1a = document.createTextNode(""), h1b = el("u");
    h1.appendChild(h1a); h1.appendChild(h1b);
    var text = el("p", "hg-cs-text");
    var follow = el("a", "hg-cs-follow");
    follow.href = "https://instagram.com/hypergobh"; follow.target = "_blank"; follow.rel = "noopener";
    card.appendChild(soon); card.appendChild(h1); card.appendChild(text); card.appendChild(follow);
    /* hidden team sheet */
    var scrim = el("div", "hg-cs-scrim");
    var sheet = el("form", "hg-cs-sheet"); sheet.setAttribute("autocomplete", "off");
    var lab = el("label"), labText = el("span");
    var input = el("input"); input.type = "password"; input.setAttribute("autocomplete", "off");
    input.setAttribute("autocapitalize", "off"); input.setAttribute("enterkeyhint", "go");
    lab.appendChild(labText); lab.appendChild(input);
    var head = el("div"), team = el("h2"), teamText = el("p", "hg-cs-sub");
    head.appendChild(team); head.appendChild(teamText);
    var err = el("div", "hg-cs-err"); err.setAttribute("role", "alert");
    var enter = el("button", "hg-cs-enter"); enter.type = "submit";
    var cancel = el("button", "hg-cs-cancel"); cancel.type = "button";
    sheet.appendChild(el("div", "hg-cs-grab")); sheet.appendChild(head); sheet.appendChild(lab); sheet.appendChild(err);
    sheet.appendChild(enter); sheet.appendChild(cancel);
    root.appendChild(hero); root.appendChild(card); root.appendChild(scrim); root.appendChild(sheet);
    function paint() {
      var T = ar ? TXT.ar : TXT.en;
      root.setAttribute("dir", ar ? "rtl" : "ltr"); root.setAttribute("lang", ar ? "ar" : "en");
      soon.textContent = T.soon; h1a.nodeValue = T.h1a; h1b.textContent = T.h1b; text.textContent = T.text;
      follow.textContent = T.follow; team.textContent = T.team; teamText.textContent = T.teamText;
      labText.textContent = T.pass; enter.textContent = T.enter; cancel.textContent = T.cancel;
      if (err.textContent) err.textContent = T.err;
    }
    paint();
    html.classList.add("hg-team-locked");
    (document.body || html).appendChild(root);
    var langWatch = new MutationObserver(function () {
      var l = (html.getAttribute("lang") || "").slice(0, 2);
      if ((l === "ar" || l === "en") && (l === "ar") !== ar) { ar = l === "ar"; paint(); }
    });
    langWatch.observe(html, { attributes: true, attributeFilter: ["lang"] });

    function openSheet() { root.classList.add("hg-cs-open"); try { input.focus(); } catch (e) {} }
    function closeSheet() {
      root.classList.remove("hg-cs-open", "hg-cs-bad"); err.textContent = ""; input.value = "";
      try { input.blur(); } catch (e) {}
    }
    /* hold the logo for 3 seconds (finger or mouse); moving away or lifting early cancels it */
    var timer = 0;
    function stop() { if (timer) { clearTimeout(timer); timer = 0; } }
    brand.addEventListener("pointerdown", function () { stop(); timer = setTimeout(function () { timer = 0; openSheet(); }, HOLD_MS); });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (t) { brand.addEventListener(t, stop); });
    brand.addEventListener("contextmenu", function (ev) { ev.preventDefault(); });
    scrim.addEventListener("click", closeSheet);
    cancel.addEventListener("click", closeSheet);
    input.addEventListener("input", function () { root.classList.remove("hg-cs-bad"); err.textContent = ""; });
    sheet.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (fnv(String(input.value || "").trim().toLowerCase()) === PASS_HASH) {
        try { localStorage.setItem(KEY, PASS_HASH + ":" + Date.now()); } catch (e) {}
        try { input.blur(); } catch (e) {}
        langWatch.disconnect();
        root.remove(); st.remove();
        html.classList.remove("hg-team-locked");
      } else {
        root.classList.add("hg-cs-bad"); err.textContent = (ar ? TXT.ar : TXT.en).err; input.value = "";
      }
    });
  }
  /* on opening, and again whenever the app or tab comes back to the front (a phone can keep the app open for days) */
  function check(again) {
    if (unlocked()) return;
    if (again) { var l = (html.getAttribute("lang") || "").slice(0, 2); if (l === "ar" || l === "en") ar = l === "ar"; }
    build();
  }
  if (document.body) check(false);
  else document.addEventListener("DOMContentLoaded", function () { check(false); });
  document.addEventListener("visibilitychange", function () { if (!document.hidden) check(true); });
})();

(function () {
  /* The phone header and Home are drawn by app-new.js (loaded by app-footer.js in the app and web-footer.js on the website).
     This file draws the computer top bar, the Account page, the bottom nav, forms and the other shared fixes.
     (2026-10-26) the old phone header, old Home, pull-to-refresh and old View cart bar are removed: this file runs before
     web-footer.js, so on the website their first pass ran and the old design flashed in. */
  /* (2026-10-20): one shared phone-width query instead of a new matchMedia() on every call */
  const hgMobileMQ = window.matchMedia("(max-width: 959.98px)");

  /* SHAPES — HyperGo arrow icon */
  const LOGO_D = "M0.1 0.1 L0.0 143.6 L0.5 144.4 L221.2 144.2 L222.0 144.6 L222.1 145.8 L221.8 147.0 L221.2 147.8 L220.8 149.9 L220.2 150.6 L219.9 152.4 L219.1 153.6 L218.9 155.0 L218.2 156.0 L217.9 157.5 L217.1 158.9 L216.9 160.0 L216.1 161.2 L215.9 162.4 L215.1 163.5 L214.8 165.0 L214.2 165.6 L213.9 166.9 L213.1 168.0 L212.9 169.0 L212.0 170.5 L211.9 171.2 L211.5 171.6 L210.9 173.2 L210.0 174.6 L209.9 175.2 L209.5 175.6 L208.8 177.4 L208.4 177.8 L207.9 179.1 L207.2 179.9 L205.6 183.1 L205.1 183.6 L204.9 184.5 L204.1 185.5 L203.9 186.2 L203.2 187.0 L202.8 188.1 L202.2 188.6 L202.0 189.4 L201.1 190.5 L200.9 191.2 L198.0 195.5 L197.8 196.1 L197.1 196.8 L197.0 197.2 L196.0 198.5 L194.8 200.6 L193.1 202.6 L193.0 203.1 L191.1 205.5 L190.8 206.2 L183.0 216.2 L177.9 222.2 L174.0 226.5 L165.8 234.9 L159.6 240.6 L153.4 246.0 L146.1 251.8 L141.5 255.0 L140.4 256.0 L138.5 257.1 L137.9 257.8 L133.2 260.9 L130.8 262.4 L130.2 262.9 L129.5 263.1 L128.4 264.0 L127.9 264.1 L127.0 264.9 L126.5 265.0 L125.4 265.9 L124.6 266.1 L124.1 266.6 L123.0 267.1 L122.2 267.8 L121.0 268.2 L120.2 268.9 L119.2 269.2 L118.2 270.0 L117.6 270.1 L117.1 270.6 L115.6 271.2 L115.2 271.6 L113.8 272.2 L113.2 272.8 L111.9 273.2 L111.4 273.8 L110.5 274.0 L109.4 274.8 L108.5 275.0 L107.4 275.8 L105.8 276.4 L105.1 276.9 L104.1 277.1 L103.0 277.9 L102.0 278.1 L101.1 278.8 L99.9 279.1 L98.6 279.9 L97.9 280.0 L96.1 281.0 L95.2 281.1 L92.0 282.8 L90.5 283.1 L89.2 283.9 L88.0 284.1 L87.0 284.8 L85.5 285.1 L84.2 285.9 L82.8 286.1 L81.4 286.9 L80.0 287.1 L79.0 287.8 L77.1 288.1 L76.0 288.8 L74.6 289.0 L72.2 290.0 L71.5 290.0 L69.0 291.0 L67.9 291.1 L66.2 291.9 L64.5 292.1 L63.1 292.8 L61.0 293.1 L59.1 293.9 L57.6 294.0 L55.0 294.9 L53.1 295.1 L50.9 295.9 L48.6 296.1 L46.1 296.9 L43.8 297.1 L41.2 297.9 L38.5 298.1 L35.6 298.9 L32.5 299.1 L29.2 299.9 L24.5 300.2 L21.4 300.9 L16.5 301.1 L10.5 301.9 L2.0 302.1 L0.2 302.4 L0.0 303.0 L0.0 455.5 L0.4 455.9 L9.8 455.6 L19.0 455.0 L26.8 454.8 L33.1 454.0 L38.4 453.8 L43.4 453.0 L47.5 452.8 L51.9 452.0 L55.5 451.8 L59.2 451.0 L62.4 450.8 L65.6 450.0 L68.0 449.9 L71.8 449.0 L74.4 448.8 L77.0 448.0 L79.5 447.8 L82.1 447.0 L84.5 446.8 L87.0 446.0 L89.1 445.8 L91.9 444.9 L93.5 444.8 L95.6 444.0 L98.0 443.6 L99.5 443.0 L101.4 442.8 L102.9 442.1 L105.2 441.8 L107.0 441.0 L108.9 440.8 L110.6 440.0 L112.2 439.8 L113.9 439.0 L115.2 438.9 L116.9 438.1 L118.8 437.8 L120.9 436.9 L122.1 436.8 L123.6 436.0 L124.9 435.8 L126.1 435.1 L128.2 434.6 L129.0 434.1 L131.0 433.6 L132.1 433.0 L133.4 432.8 L134.8 432.0 L136.1 431.8 L137.5 431.0 L139.0 430.6 L140.0 430.0 L141.2 429.8 L142.5 429.0 L144.0 428.6 L145.0 428.0 L146.1 427.8 L149.6 426.0 L150.8 425.8 L152.0 425.0 L153.2 424.6 L153.9 424.1 L155.2 423.8 L156.6 422.9 L157.1 422.9 L158.8 421.9 L159.1 421.9 L160.9 420.9 L161.2 420.9 L164.0 419.5 L164.6 419.0 L166.0 418.5 L166.9 417.9 L167.2 417.9 L170.2 416.1 L171.5 415.6 L172.2 415.0 L173.4 414.6 L173.9 414.1 L175.2 413.6 L175.8 413.1 L177.1 412.5 L177.6 412.0 L178.5 411.8 L179.6 410.9 L180.2 410.8 L180.8 410.2 L182.1 409.6 L182.6 409.1 L183.4 408.9 L184.5 408.0 L185.2 407.8 L186.1 407.0 L187.0 406.6 L187.5 406.1 L191.5 403.8 L192.4 403.0 L193.2 402.6 L199.5 398.1 L200.1 397.9 L208.4 391.8 L219.4 382.8 L228.1 374.8 L236.1 366.8 L243.6 358.8 L250.9 350.4 L252.0 348.8 L254.4 346.0 L254.9 345.1 L255.5 344.6 L256.0 345.0 L256.1 345.4 L256.0 441.4 L256.5 442.4 L394.4 442.5 L394.9 441.8 L394.8 0.1Z";

  const svgUri = (svg) => "data:image/svg+xml," + encodeURIComponent(svg);

  /* big outline logo (the Account page's header card) */
  const LOGO_OUTLINE = svgUri(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 411 472'><path d='" + LOGO_D + "' fill='none' stroke='#fff' stroke-width='6' stroke-linejoin='round'/></svg>"
  );
  /* small filled icon used by the rotating search placeholder (computer top bar) */
  const LOGO_FILLED = svgUri(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 395 456'><path d='" + LOGO_D + "' fill='#5A29DE'/></svg>"
  );

  /* (2026-10-20): the one thing a full header run also kept in sync: the rotating text hides while the search field has a value */
  function hgSyncPhOpacity(field) {
    const ov = field && field.querySelector(".hg-ph"), inp = field && field.querySelector("input");
    if (!ov || !inp) return;
    const o = inp.value ? "0" : "1";
    if (ov.style.opacity !== o) ov.style.opacity = o;
    if (!phTimer) phTimer = setInterval(phTick, PH_INTERVAL);
  }

  /* DESKTOP HEADER (width >= 960) — tested in Console, same approach:
     inline !important styles on the fixed #AppBar, re-applied by the observer.
     (2026-10-24, header option A) a clean white bar: the flat purple bar blended with the purple page and looked cheap.
     White, straight bottom edge, a hairline and a soft shadow; its items line up with the page column (--hg-page, app-new.css).
     The full colour HyperGo wordmark fills the old empty logo slot and goes Home; Home and Stores links sit next
     to it (Stores = our "Stores near you" page, /home?hgn=stores, with its category chips; a Categories link to the Search
     page was dropped 2026-10-25: it reached the same stores); the hamburger, which only held Language, becomes a globe
     button at the end that opens the same Language menu; the cart is a purple pill with a green count. 72px tall, 28px between items. */
  const HG_WORDMARK = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 725.11 152.55'><polygon fill='#1B2023' points='81.92 53.7 15.05 53.7 15.05 2.05 0 2.05 0 120.05 15.05 120.05 15.05 67.72 81.92 67.72 81.92 120.05 96.97 120.05 96.97 2.05 81.92 2.05 81.92 53.7'/><polygon fill='#1B2023' points='159.73 103.36 129.8 32.84 113.73 32.84 152 119.66 142.89 139.55 125.36 139.55 125.36 152.55 152.72 152.55 205.56 32.84 189.66 32.84 159.73 103.36'/><path fill='#1B2023' d='M291.5,36.77c-6.67-3.99-14.11-5.99-22.32-5.99s-14.97,1.99-21.29,5.99c-5.37,3.39-9.72,7.85-13.08,13.37v-17.31h-14.02v119.71h14.02v-49.8c3.36,5.52,7.71,9.99,13.08,13.37,6.33,3.99,13.42,5.99,21.29,5.99s15.65-1.99,22.32-5.99c6.67-3.99,11.91-9.46,15.73-16.42,3.82-6.95,5.73-14.71,5.73-23.26s-1.91-16.3-5.73-23.26c-3.82-6.95-9.06-12.43-15.73-16.42ZM294.23,92.78c-2.79,4.85-6.61,8.67-11.46,11.46-4.85,2.79-10.23,4.19-16.16,4.19s-11.46-1.4-16.25-4.19c-4.79-2.79-8.58-6.64-11.37-11.54-2.8-4.9-4.19-10.32-4.19-16.25s1.39-11.48,4.19-16.33c2.79-4.85,6.61-8.66,11.46-11.46,4.84-2.79,10.23-4.19,16.16-4.19s11.46,1.4,16.25,4.19c4.79,2.8,8.58,6.64,11.37,11.54,2.79,4.9,4.19,10.32,4.19,16.25s-1.4,11.49-4.19,16.33Z'/><path fill='#1B2023' d='M397.1,36.77c-7.07-3.99-14.94-5.99-23.6-5.99s-16.53,1.99-23.6,5.99c-7.07,3.99-12.63,9.46-16.67,16.42-4.05,6.96-6.07,14.71-6.07,23.26s2.02,16.3,6.07,23.26c4.05,6.95,9.6,12.43,16.67,16.42,7.07,3.99,14.94,5.99,23.6,5.99,10.49,0,19.72-2.73,27.7-8.21,7.98-5.47,13.57-12.71,16.76-21.72h-15.39c-2.39,5.13-6.19,9.23-11.37,12.31-5.19,3.08-11.09,4.62-17.7,4.62-5.93,0-11.32-1.42-16.16-4.27-4.85-2.85-8.67-6.76-11.46-11.71-1.86-3.3-3.08-6.86-3.7-10.69h77.16c.34-1.71.51-3.7.51-5.99,0-8.55-2.03-16.3-6.07-23.26-4.05-6.95-9.61-12.43-16.67-16.42ZM342.3,69.6c.65-3.5,1.81-6.78,3.49-9.83,2.74-4.96,6.52-8.86,11.37-11.71,4.85-2.85,10.29-4.27,16.33-4.27s11.12,1.37,15.9,4.11c4.79,2.73,8.57,6.47,11.37,11.2,1.9,3.23,3.2,6.74,3.91,10.52h-62.38Z'/><path fill='#1B2023' d='M452.85,49.21v-16.37h-14.02v87.22h14.02v-43.95c0-6.04,1.14-11.31,3.42-15.82,2.28-4.5,5.61-8.01,10-10.52,4.39-2.51,9.55-3.76,15.48-3.76v-14.54c-6.5,0-12.29,1.65-17.36,4.96-4.67,3.05-8.52,7.32-11.54,12.78Z'/><path fill='#5A29DE' d='M557,74.39h35.75c-1.01,3.5-2.54,6.78-4.62,9.83-3.53,5.19-8.15,9.26-13.85,12.23-5.7,2.97-11.97,4.45-18.82,4.45-7.41,0-14.14-1.74-20.18-5.22-6.04-3.48-10.77-8.24-14.2-14.28-3.42-6.04-5.13-12.83-5.13-20.35s1.71-14.31,5.13-20.35c3.42-6.04,8.15-10.8,14.2-14.28,6.04-3.48,12.77-5.22,20.18-5.22s14.28,1.8,20.27,5.39c5.99,3.59,10.52,8.41,13.6,14.45h24.46c-2.05-7.87-5.9-14.93-11.54-21.21-5.64-6.27-12.51-11.14-20.61-14.62-8.1-3.47-16.82-5.22-26.17-5.22-11.63,0-22.17,2.68-31.64,8.04-9.47,5.36-16.93,12.69-22.4,21.98-5.47,9.29-8.21,19.64-8.21,31.04s2.74,21.75,8.21,31.04c5.47,9.29,12.94,16.62,22.4,21.97,9.46,5.36,20.01,8.04,31.64,8.04,7.87,0,14.94-1.14,21.21-3.42,6.27-2.28,11.57-5.56,15.9-9.83,1.68-1.65,3.21-3.45,4.61-5.36v16.57h19.33V54.38h-59.52v20.01Z'/><path fill='#5A29DE' d='M719.04,53.19c-4.05-6.95-9.64-12.43-16.76-16.42-7.13-3.99-15.08-5.99-23.86-5.99s-16.9,1.99-24.03,5.99c-7.13,3.99-12.72,9.46-16.76,16.42-4.05,6.96-6.07,14.71-6.07,23.26s2.03,16.3,6.07,23.26c4.04,6.95,9.63,12.43,16.76,16.42,7.12,3.99,15.13,5.99,24.03,5.99s16.73-1.99,23.86-5.99c7.12-3.99,12.71-9.46,16.76-16.42,4.04-6.95,6.07-14.71,6.07-23.26s-2.03-16.3-6.07-23.26ZM700.4,89.44c-2.22,3.88-5.27,6.93-9.15,9.15-3.87,2.22-8.21,3.34-12.99,3.34s-9.09-1.11-12.91-3.34c-3.82-2.22-6.84-5.27-9.06-9.15-2.22-3.87-3.33-8.21-3.33-13s1.11-9.12,3.33-13c2.22-3.87,5.27-6.93,9.15-9.15,3.87-2.22,8.21-3.34,13-3.34s9.09,1.11,12.91,3.34c3.82,2.22,6.84,5.27,9.06,9.15,2.22,3.88,3.34,8.21,3.34,13s-1.11,9.12-3.34,13Z'/></svg>");
  const HG_GLOBE = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#3A3F42' stroke-width='1.9' stroke-linecap='round'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9s1.3-6.3 3.9-9z'/></svg>");
  const HG_PERSON = "<svg aria-hidden='true' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='8' r='4'/><path d='M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6'/></svg>";
  const HG_HOUSE = "<svg aria-hidden='true' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linejoin='round'><path d='M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z'/></svg>";
  /* which link of the bar is the current page: Home, the Stores page, or none */
  function hgDeskNavOn() {
    if (!/^\/(en|ar)(\/home)?\/?$/.test(location.pathname)) return "";
    const q = new URLSearchParams(location.search).get("hgn");
    return q === "stores" ? "stores" : q ? "" : "home";
  }
  /* what the bar shows: when none of this changed, the full run is skipped (2026-10-20; one copy since 2026-10-24) */
  function hgDeskSig(bar) {
    const loc = bar.querySelector("#CurrentLocationBtn");
    return bar.getElementsByTagName("*").length + "|" + (loc ? loc.textContent : "") + "|" + bar.querySelectorAll(".cart-btn--filled").length +
      "|" + hgIsAr() + "|" + hgDeskNavOn() + "|" + hgDeskCount(bar);
  }
  /* the cart count Hyperzod keeps on its own badge ("" when the cart is empty) */
  function hgDeskCount(bar) {
    const b = bar.querySelector(".v-badge__badge");
    const n = b ? b.textContent.trim() : "";
    return n && n !== "0" ? n : "";
  }
  function hgDeskRouter() {
    const app = document.querySelector("#app");
    return app && app.__vue_app__ && app.__vue_app__.config.globalProperties.$router;
  }
  function hgDeskGo(path) {
    const r = hgDeskRouter();
    if (r) r.push(path).catch(() => {}); else location.href = path;
  }
  /* Home <-> Stores changes no part of the page the observer watches, so the bar also re-checks after every page change */
  let hgDeskHooked = false;
  function hgDeskHook() {
    if (hgDeskHooked) return;
    const r = hgDeskRouter();
    if (!r || !r.afterEach) return;
    hgDeskHooked = true;
    r.afterEach(() => setTimeout(applyHyperGoDesktop, 0));
  }
  /* (2026-10-24) every fixed size and colour of the bar lives in this stylesheet with !important. Hyperzod redraws parts
     of the bar while you type (the toolbar height back to 65px, the search field back to white); inline styles were only
     put back on the next run 60ms later, so the whole bar jumped on every key. A stylesheet !important rule wins over
     Hyperzod's own inline values, so nothing moves (the toolbar's 0.2s height animation is off too). */
  function hgDeskStyle() {
    if (document.getElementById("hg-desk-style")) return;
    const SIDE = "max(var(--hg-gut,48px),calc((100% - var(--hg-page,1600px)) / 2))";
    const BTN = "#AppBar :is(#CurrentLocationBtn,#FilterBtn,#ProfileBtn,#NavBtn)";
    const st = document.createElement("style");
    st.id = "hg-desk-style";
    /* every rule starts with #MultiVendorHeaderRoot #AppBar#AppBar (3 ids): Hyperzod's own !important colour and shadow
       rules on the bar use up to 2 ids */
    const css =
      "@media (min-width:960px){" +
      /* the bar: white, 72px, straight edge; the header box in the page flow keeps the same height so the page starts
         under it; it scrolls away with the page (native: position fixed) */
      "#MultiVendorHeaderRoot{height:72px !important;}" +
      "#AppBar{position:absolute !important;height:72px !important;background-color:#FFFFFF !important;background-image:none !important;" +
        "border-radius:0 !important;box-shadow:0 1px 0 #ECE8F6,0 6px 18px rgba(54,25,133,.06) !important;}" +
      "#AppBar .v-toolbar__content{height:72px !important;padding-left:" + SIDE + " !important;padding-right:" + SIDE + " !important;" +
        "gap:var(--hg-bar-gap,28px) !important;transition:none !important;}" +
      /* Filter, Account and Cart: the same gap as every item of the bar (Hyperzod: 6px); its spacer would add a second gap */
      "#AppBar :has(>#ProfileBtn){gap:var(--hg-bar-gap,28px) !important;}" +
      "#AppBar .v-spacer{display:none !important;}" +
      /* dark text + icons on the buttons */
      BTN + "," + BTN + " *{color:#3A3F42 !important;}" +
      BTN + " :is(svg,svg *)[stroke]:not([stroke='none']){stroke:currentColor !important;}" +
      BTN + " :is(svg,svg *)[fill]:not([fill='none']){fill:currentColor !important;}" +
      /* logo: the full colour wordmark (Hyperzod's icon-only logo left most of its 150px slot empty); goes Home */
      "#AppBar #Logo{width:auto !important;max-width:none !important;flex:none !important;margin:0 !important;}" +
      "#AppBar #Logo .v-img{display:none !important;}" +
      "#AppBar .hg-wordmark{display:flex;align-items:center;cursor:pointer;}" +
      "#AppBar .hg-wordmark img{height:30px;width:auto;display:block;}" +
      /* Home, Stores and Categories */
      "#AppBar .hg-dnav{display:flex;align-items:center;gap:4px;flex:none;}" +
      "#AppBar .hg-dnav a{height:36px;padding:0 14px;border-radius:10px;display:flex;align-items:center;gap:7px;font-size:15px;" +
        "font-weight:600;line-height:1;color:#3A3F42;text-decoration:none;white-space:nowrap;transition:background-color .15s,color .15s;}" +
      "#AppBar .hg-dnav a:hover{background:#F6F3FD;color:#1B2023;}" +
      "#AppBar .hg-dnav a.is-on{background:#F1ECFF;color:#5A29DE;}" +
      "#AppBar .hg-dnav a:focus-visible,#AppBar .hg-wordmark:focus-visible{outline:3px solid #5A29DE;outline-offset:2px;}" +
      /* location: an outlined 40px chip on one line, purple pin, area name, grey chevron (no "Deliver to", no address line) */
      "#AppBar #CurrentLocationBtn{box-shadow:inset 0 0 0 1px #E6E1F3 !important;border-radius:10px !important;height:40px !important;" +
        "padding:0 12px !important;display:flex !important;align-items:center !important;max-width:240px !important;flex:none !important;}" +
      "#AppBar #CurrentLocationBtn>div+div,#AppBar #CurrentLocationBtn .hg-deliver-label{display:none !important;}" +
      "#AppBar #CurrentLocationBtn>div:first-child{gap:7px;}" +
      "#AppBar #CurrentLocationBtn>div:first-child>svg:first-of-type,#AppBar #CurrentLocationBtn>div:first-child>svg:first-of-type *{color:#5A29DE !important;}" +
      "#AppBar #CurrentLocationBtn>div:first-child>svg:last-of-type,#AppBar #CurrentLocationBtn>div:first-child>svg:last-of-type *{color:#6E6880 !important;}" +
      "#AppBar #CurrentLocationBtn span.text{font-size:14px !important;font-weight:700 !important;color:#1B2023 !important;}" +
      /* search field: soft lilac, rounded 12px, 44px, purple icon 13px in from the start side */
      "#AppBar .d-md-flex{margin-left:0 !important;margin-right:0 !important;}" +
      "#AppBar .web-main-search{border-radius:12px !important;}" +   /* the focus ring (global-footer.css) follows this corner */
      "#AppBar .d-md-flex .v-input__control{height:44px !important;min-height:44px !important;}" +
      "#AppBar .d-md-flex .v-field{background-color:#F4F2FA !important;box-shadow:inset 0 0 0 1px #E6E1F3 !important;border-radius:12px !important;" +
        "height:44px !important;min-height:44px !important;overflow:hidden !important;}" +
      "#AppBar .d-md-flex .v-field__outline{display:none !important;}" +
      /* grid-area:auto makes the field's padding box, not the grid cell, the reference */
      "#AppBar .d-md-flex .v-field__append-inner{grid-area:auto !important;position:absolute !important;inset-inline-start:13px !important;" +
        "inset-inline-end:auto !important;top:0 !important;bottom:0 !important;padding:0 !important;display:flex !important;align-items:center !important;}" +
      "#AppBar .d-md-flex input{padding-inline-start:42px !important;padding-inline-end:16px !important;height:44px !important;min-height:44px !important;font-size:15px !important;}" +
      "#AppBar .header-search-append svg{display:block !important;width:18px !important;height:18px !important;}" +
      "#AppBar .header-search-append svg :is(g,path){fill:#5A29DE !important;}" +
      /* Filter is an icon button (its name stays on aria-label), so the search keeps its room */
      "#AppBar #FilterBtn{min-width:40px !important;width:40px !important;padding:0 !important;border-radius:10px !important;}" +
      "#AppBar #FilterBtn .text{display:none !important;}" +
      /* Account: person icon + "Account" (Hyperzod shows Login + a door icon when signed out; the button works the same) */
      "#AppBar #ProfileBtn{padding:0 6px !important;min-width:0 !important;}" +
      "#AppBar #ProfileBtn .v-btn__content>:not(.hg-acct){display:none !important;}" +
      "#AppBar .hg-acct{display:flex;align-items:center;gap:7px;font-size:15px;font-weight:600;text-transform:none;letter-spacing:0;}" +
      /* cart: a purple pill (also with items: Hyperzod switches a filled cart to its own white), the count inside it */
      "#AppBar .v-badge .v-btn{background-color:#5A29DE !important;border-radius:20px !important;height:40px !important;padding:0 16px !important;}" +
      "#AppBar .v-badge .v-btn,#AppBar .v-badge .v-btn *{color:#FFFFFF !important;}" +
      "#AppBar .v-badge .v-btn :is(svg,svg *)[stroke]:not([stroke='none']){stroke:currentColor !important;}" +
      "#AppBar .v-badge .v-btn :is(svg,svg *)[fill]:not([fill='none']){fill:currentColor !important;}" +
      "#AppBar .v-badge__badge{display:none !important;}" +
      "#AppBar .v-badge .v-btn .hg-cart-n{min-width:20px;height:20px;padding:0 5px;box-sizing:border-box;border-radius:10px;background:#ACE4AA;color:#1B2023 !important;" +
        "font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;margin-inline-start:8px;}" +
      "#AppBar .hg-cart-n:empty{display:none !important;}" +
      /* the hamburger (its menu only holds Language) is a globe button at the end of the bar */
      "#AppBar .v-toolbar__prepend{order:99 !important;margin:0 !important;}" +
      "#AppBar #NavBtn{width:40px !important;height:40px !important;max-width:none !important;max-height:none !important;margin:0 !important;" +
        "border-radius:10px !important;box-shadow:inset 0 0 0 1px #E6E1F3 !important;background:url(\"" + HG_GLOBE + "\") center/20px no-repeat !important;}" +
      "#AppBar #NavBtn:hover{background-color:#F6F3FD !important;}" +
      "#AppBar #NavBtn .v-icon{visibility:hidden;}" +
      "}" +
      /* narrower windows: the Account word goes first, then the Stores and Categories links, then the gaps get smaller */
      "@media (max-width:1299px){#AppBar .hg-acct-t{display:none;}}" +
      "@media (max-width:1199px){#AppBar .hg-dnav a:not([data-k='home']){display:none;}}" +
      "@media (max-width:1099px){#AppBar{--hg-bar-gap:16px;}}";
    st.textContent = css.split("#AppBar").join("#MultiVendorHeaderRoot #AppBar#AppBar");
    document.head.appendChild(st);
  }

  let deskLast = null, deskLastTxt = "";
  function applyHyperGoDesktop() {
    try {
      if (!window.matchMedia("(min-width: 960px)").matches) return;

      const bar = document.querySelector("#AppBar");
      if (!bar) return;
      hgDeskStyle();

      /* (2026-10-20): skip the run when nothing in the bar changed since the last full run */
      if (deskLast === bar && deskLastTxt === hgDeskSig(bar)) {
        hgSyncPhOpacity(bar.querySelector(".d-md-flex .v-field"));
        return;
      }
      const ar = hgIsAr(), L = ar ? "ar" : "en";
      hgDeskHook();

      /* darker grey search placeholder via the theme's own variable */
      const rootEl = document.querySelector("#MultiVendorHeaderRoot");
      if (rootEl) rootEl.style.setProperty("--scheme-header-search-placeholder", "#1F2430");

      /* logo: our wordmark link inside Hyperzod's logo box */
      const logoBox = bar.querySelector("#Logo");
      if (logoBox) {
        let wm = logoBox.querySelector(".hg-wordmark");
        if (!wm) {
          wm = document.createElement("a");
          wm.className = "hg-wordmark";
          wm.setAttribute("aria-label", "HyperGo");
          wm.innerHTML = '<img src="' + HG_WORDMARK + '" alt="" draggable="false">';
          wm.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            hgDeskGo("/" + (hgIsAr() ? "ar" : "en") + "/home");
          });
          logoBox.appendChild(wm);
        }
        wm.href = "/" + L + "/home";
      }

      /* Home and Stores links next to the logo */
      let nav = bar.querySelector(".hg-dnav");
      if (!nav && logoBox) {
        nav = document.createElement("nav");
        nav.className = "hg-dnav";
        nav.addEventListener("click", (ev) => {
          const a = ev.target.closest("a[href]");
          if (!a) return;
          ev.preventDefault();
          hgDeskGo(a.getAttribute("href"));
        });
        logoBox.insertAdjacentElement("afterend", nav);
      }
      if (nav) {
        const on = hgDeskNavOn();
        const html =
          '<a data-k="home" href="/' + L + '/home"' + (on === "home" ? ' class="is-on" aria-current="page"' : "") + ">" + HG_HOUSE + (ar ? "الرئيسية" : "Home") + "</a>" +
          /* (2026-10-25) no Categories link any more: it led to the same stores as Stores' category chips (Nouf) */
          '<a data-k="stores" href="/' + L + '/home?hgn=stores"' + (on === "stores" ? ' class="is-on" aria-current="page"' : "") + ">" + (ar ? "المتاجر" : "Stores") + "</a>";
        if (nav.dataset.sig !== html) { nav.innerHTML = html; nav.dataset.sig = html; }
      }

      /* the moving "Search for ..." words */
      const f = bar.querySelector(".d-md-flex .v-field");
      if (f) ensureRotatingPlaceholder(f, { left: 42, size: 15, weight: 500 });

      /* cart count inside the pill */
      const cartIn = bar.querySelector(".v-badge .v-btn .v-btn__content");
      if (cartIn) {
        let n = cartIn.querySelector(".hg-cart-n");
        if (!n) { n = document.createElement("span"); n.className = "hg-cart-n"; cartIn.appendChild(n); }
        const cnt = hgDeskCount(bar);
        if (n.textContent !== cnt) n.textContent = cnt;
      }

      /* Account: our person icon + word in Hyperzod's button */
      const prof = bar.querySelector("#ProfileBtn");
      const profIn = prof && prof.querySelector(".v-btn__content");
      if (profIn) {
        const at = ar ? "الحساب" : "Account";
        let acct = profIn.querySelector(".hg-acct");
        if (!acct) { acct = document.createElement("span"); acct.className = "hg-acct"; profIn.appendChild(acct); }
        const html = HG_PERSON + '<span class="hg-acct-t">' + at + "</span>";
        if (acct.dataset.sig !== html) { acct.innerHTML = html; acct.dataset.sig = html; }
        if (prof.getAttribute("aria-label") !== at) prof.setAttribute("aria-label", at);
      }

      /* icon-only buttons keep their name for screen readers */
      const fb = bar.querySelector("#FilterBtn"), ft = fb && fb.querySelector(".text");
      const fname = ft && ft.textContent.trim();
      if (fname && fb.getAttribute("aria-label") !== fname) fb.setAttribute("aria-label", fname);
      const nb = bar.querySelector("#NavBtn");
      if (nb) {
        const lt = ar ? "اللغة" : "Language";
        if (nb.getAttribute("aria-label") !== lt) { nb.setAttribute("aria-label", lt); nb.title = lt; }
        if (!nb.hasAttribute("aria-haspopup")) nb.setAttribute("aria-haspopup", "menu"); /* it opens the language list (web-footer.js) */
      }

      /* (2026-10-20): remember what was checked (measured after our links/placeholder were added) */
      deskLast = bar;
      deskLastTxt = hgDeskSig(bar);
    } catch (e) {}
  }

  /* ROTATING SEARCH PLACEHOLDER
     "Search for" + a word that cycles "All your needs" -> every home category every 4s.
     Switch animation: a small HyperGo icon sweeps left-to-right and erases the old word behind it,
     then the next word fades in. The native placeholder is made transparent (theme variable),
     and this overlay sits exactly where the placeholder text was. English only. */

  /* (2026-10-20): the only Arabic check in this file (7 copies merged; Arabic = lang "ar..." or dir "rtl") */
  function hgIsAr() {
    const de = document.documentElement;
    return (de.lang || "").toLowerCase().indexOf("ar") === 0 || de.dir === "rtl";
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
  /* (2026-10-20): the whole search page is walked once per search screen; after that only the parts that changed are walked
     (passed in as "scope" by the currency observer and the pre-paint account observer). app-new.js's own search parts are skipped. */
  const hgArSearchSeen = new WeakSet();
  const HG_AR_SEARCH_SKIP = "#hgn-sres,#hgn-sland,#hgn-stabs,#hgn-sfav";
  function applyArabicSearchPage(scope) {
    if (!hgIsAr()) return;
    if (!document.getElementById("hg-rtl-style")) {
      const st = document.createElement("style");
      st.id = "hg-rtl-style";
      st.textContent = "html[lang^='ar'] .mobile-search-input .v-field__prepend-inner .v-icon svg{transform:scaleX(-1);}";
      document.head.appendChild(st);
    }
    const root = document.getElementById("MultiVendorSearch");
    if (!root) return;
    let start = root;
    if (scope) {
      if (scope === root || root.contains(scope)) start = scope;
      else if (!(scope.contains && scope.contains(root))) return;
    } else {
      if (hgArSearchSeen.has(root)) return;
      hgArSearchSeen.add(root);
    }
    const w = document.createTreeWalker(start, NodeFilter.SHOW_TEXT);
    const hits = [];
    while (w.nextNode()) {
      const n = w.currentNode;
      const p = n.parentNode;
      if (!n.nodeValue || !p || /^(SCRIPT|STYLE|INPUT|TEXTAREA)$/.test(p.nodeName)) continue;
      if (arCat(n.nodeValue) && !(p.closest && p.closest(HG_AR_SEARCH_SKIP))) hits.push(n);
    }
    hits.forEach((n) => {
      const t = arCat(n.nodeValue);
      if (t && n.nodeValue.trim() !== t) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), t);
    });
  }

  const PH_INTERVAL = 4000;
  let phIndex = 0;
  let phTimer = null;
  const phSaved = {};

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
        /* (2026-10-20): only write when the list changed (this ran every 4s) */
        const s = JSON.stringify(names);
        if (phSaved[key] !== s) { try { localStorage.setItem(key, s); phSaved[key] = s; } catch (e) {} }
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
    /* (2026-10-20): stop when no rotating text is on the page; ensureRotatingPlaceholder / hgSyncPhOpacity start it again */
    if (!document.querySelector(".hg-ph")) { clearInterval(phTimer); phTimer = null; return; }
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
        '<span class="hg-ph-logo" style="position:absolute;' + side + ':0;opacity:0;pointer-events:none;background:#FFFCF9"><img alt="" src="' + LOGO_FILLED + '" style="display:block;width:100%;height:100%"></span>' +
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
        /* Talabat sizes (2026-10-20): a 1pt line on top (no shadow), 20pt icons 15 under it, 12pt labels (baseline 49 under the line), 53 tall */
        N + "{background:#FFFCF9 !important;color:#6B7280 !important;box-shadow:none !important;border-top:1px solid #E5E5E5 !important;}" +
        N + " .classic-nav-container{background:#FFFCF9 !important;background-image:none !important;padding-top:0 !important;padding-bottom:0 !important;transform:none !important;}" +
        N + "{transform:none !important;bottom:0 !important;opacity:1 !important;visibility:visible !important;}" +
        N + C + "cart']{display:none !important;}" +
        N + " .classic-footer-btn{color:#6B7280 !important;}" +
        N + " .classic-footer-btn.classic-tab-active{color:#5A29DE !important;}" +
        N + " .classic-footer-btn .nav-label{color:inherit !important;font-size:calc(var(--hg-fs, 1px) * 12) !important;font-weight:400 !important;line-height:1.2 !important;position:relative;z-index:1;}" +
        /* active tab: purple icon, dark label (Talabat style, 2026-10-21) */
        N + " .classic-footer-btn.classic-tab-active .nav-label{font-weight:500 !important;color:#262626 !important;}" +
        "html[lang^='ar'] " + N + " .classic-footer-btn .nav-label{overflow:visible !important;height:auto !important;line-height:1.6 !important;-webkit-line-clamp:unset !important;display:block !important;}" +
        "html[lang^='ar'] " + N + " .classic-nav-container .classic-footer-btn__content--with-label{padding-top:6px !important;padding-bottom:3px !important;}" +
        N + " .classic-nav-container .classic-footer-btn__content--with-label{position:relative;min-height:0 !important;padding:14px 12px 1px !important;gap:3px !important;}" + /* 53 tall with the line, label baseline 49 under it (Talabat, 2026-10-21; was 50) */
        N + " .classic-nav-item[data-hg-nav]:not([data-hg-nav='other']) .classic-footer-btn__content object{display:none !important;}" +
        N + " .classic-nav-item[data-hg-nav]:not([data-hg-nav='other']) .classic-footer-btn__content::before{content:'';display:block;position:relative;z-index:1;width:20px;height:20px;background:currentColor;" +
          "-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;}" +
        /* [data-hg-nav] again so this ties with the 20x20 rule above and wins by order (without it the home icon stayed 20x20 + 2 margin and sat 1pt lower) */
        N + C + "home'][data-hg-nav] .classic-footer-btn__content::before{width:16px;height:18px;margin:1px 0;-webkit-mask-image:" + homeMask + ";mask-image:" + homeMask + ";}" +
        N + C + "reorder'] .classic-footer-btn__content::before{-webkit-mask-image:" + navMask(NAV_ICONS.reorder) + ";mask-image:" + navMask(NAV_ICONS.reorder) + ";}" +
        N + C + "account'] .classic-footer-btn__content::before{-webkit-mask-image:" + navMask(NAV_ICONS.account) + ";mask-image:" + navMask(NAV_ICONS.account) + ";}" +
        /* Orders opened from Account keeps the Account tab lit (not Reorder) */
        "html.hg-orders-acct " + N + C + "reorder'] .classic-footer-btn{color:#6B7280 !important;}" +
        "html.hg-orders-acct " + N + C + "account'] .classic-footer-btn{color:#5A29DE !important;}" +
        "html.hg-orders-acct " + N + C + "reorder'] .classic-footer-btn .nav-label{color:inherit !important;font-weight:400 !important;}" +
        "html.hg-orders-acct " + N + C + "account'] .classic-footer-btn .nav-label{color:#262626 !important;font-weight:500 !important;}" +
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

  /* ================= OUR OWN NOISE (observer trim, 2026-10-08) =================
     Changes inside these never matter to our whole-page observers: the rotating search placeholder (.hg-ph, swaps its word
     every few seconds). (The launch countdown and the temporary test panels were removed 2026-10-20.)
     A batch of changes is "relevant" if any one change is outside them. Adding one of them counts as noise (only our own code
     adds them); removing one stays relevant (the app may have thrown it away and it has to be rebuilt).
     classMode (acctMO only): a class change counts as noise when it only ADDED hg- classes (our own markers); any removed
     class, or any added non-hg class, stays relevant (e.g. the app's own re-render wiping our classes). */
  const HG_NOISE = ".hg-ph";
  /* (2026-10-20): renderObserver + acctMO also ignore what app-new.js and global-footer-2.js draw themselves, and our header
     cart button, so the files stop waking each other up. The currency observer keeps the short list (prices inside still convert). */
  const HG_NOISE_EXT = HG_NOISE + ",#hgn-home,#hgn-page,#hgn-sres,#hgn-catpage,#hgn-sland,#hgn-stabs,#hgn-sfav,#hgn-shead,#hgn-sinfo,.hgn-acct-fav," +
    "#hg-search-discovery,#hg-search-cart,#hg-cart-btn";
  function hgInNoise(n, sel) {
    const el = n && (n.nodeType === 1 ? n : n.parentNode);
    return !!(el && el.nodeType === 1 && el.closest && el.closest(sel || HG_NOISE));
  }
  function hgOnlyAddedHg(before, after) {
    const b = (before || "").split(/\s+/), a = (after || "").split(/\s+/);
    for (let i = 0; i < b.length; i++) if (b[i] && a.indexOf(b[i]) < 0) return false;
    for (let i = 0; i < a.length; i++) if (a[i] && b.indexOf(a[i]) < 0 && a[i].indexOf("hg-") !== 0) return false;
    return true;
  }
  function hgMutRelevant(recs, sel, classMode) {
    if (!recs || !recs.length) return true;
    sel = sel || HG_NOISE;
    const de = document.documentElement;
    let after = null;
    for (let i = recs.length - 1; i >= 0; i--) {
      const r = recs[i];
      if (r.type === "attributes") {
        if (r.target === de) return true;
        if (hgInNoise(r.target, sel)) continue;
        if (!classMode || r.attributeName !== "class") return true;
        if (!after) after = new Map();
        const now = after.has(r.target) ? after.get(r.target) : r.target.getAttribute("class");
        after.set(r.target, r.oldValue);
        if (!hgOnlyAddedHg(r.oldValue, now)) return true;
        continue;
      }
      if (hgInNoise(r.target, sel)) continue;
      if (r.type !== "childList" || r.removedNodes.length) return true;
      const a = r.addedNodes;
      for (let j = 0; j < a.length; j++) if (!(a[j].nodeType === 1 && a[j].matches && a[j].matches(sel))) return true;
    }
    return false;
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

  function applyCurrency(root) {
    if (!document.body) return;
    const isAr = hgIsAr();
    /* English: "BHD 2.000"   Arabic: "2.000 د.ب." (number first, Arabic dinar sign, RLM keeps the final dot in place) */
    const T = isAr ? "\u062F.\u0628.\u200f" : "BHD";
    const NB = "\u00a0";
    const fmt = (num) => {
      const tr = /[.,\u066B\u066C]+$/.exec(num);
      const core = tr ? num.slice(0, tr.index) : num;
      const tail = tr ? tr[0] : "";
      return (isAr ? core + NB + T : T + NB + core) + tail;
    };

    const walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
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
  /* observer trim (2026-10-08): only the parts of the page that were added or changed are re-checked, not the whole page.
     Each changed spot is re-checked a few levels up (a lone "BHD" label is converted by looking at its neighbours, so a
     neighbour's new number must re-check the label too). The whole page is re-checked when the language changed, when
     there are too many spots, or when called without a list. Our own label rewrites are dropped afterwards, so they no
     longer wake this up again. Same 40ms throttle as before. */
  let curPending = false, curFull = false, curKey = "", curMO = null;
  const curRoots = new Set();
  function curLangKey() {
    const de = document.documentElement;
    return (de.lang || "") + "|" + (de.dir || "");
  }
  function curUp(n, k) {
    const b = document.body;
    while (k-- > 0 && n && n !== b && n.parentNode) n = n.parentNode;
    if (!n || n.nodeType !== 1 || !b || !b.contains(n)) return null;
    return n;
  }
  function curAdd(el) {
    if (!el) return;
    if (curRoots.size >= 400) curFull = true;
    else curRoots.add(el);
  }
  function curCollect(recs) {
    for (let i = 0; i < recs.length && !curFull; i++) {
      const r = recs[i];
      if (hgInNoise(r.target)) continue;
      if (r.type === "characterData") { curAdd(curUp(r.target, 3)); continue; }
      if (r.type !== "childList") continue;
      const a = r.addedNodes;
      for (let j = 0; j < a.length && !curFull; j++) {
        const x = a[j];
        if (x.nodeType === 3) curAdd(curUp(x, 3));
        else if (x.nodeType === 1 && !(x.matches && x.matches(HG_NOISE))) curAdd(curUp(x, 2));
      }
    }
  }
  function curFlush() {
    curPending = false;
    const full = curFull || curLangKey() !== curKey;
    const roots = full ? [] : Array.from(curRoots);
    curFull = false;
    curRoots.clear();
    curKey = curLangKey();
    /* (2026-10-20): the spelling fixes and the Arabic search-page category names now run here, on the changed parts only
       (they used to re-read or re-walk the whole page / whole search screen on every applyAll) */
    if (full) { applyCurrency(); fixTypos(document.body); applyArabicSearchPage(document.body); }
    else {
      const set = new Set(roots);
      roots.forEach((el) => {
        if (!el.isConnected) return;
        for (let p = el.parentNode; p; p = p.parentNode) if (set.has(p)) return;
        applyCurrency(el);
        fixTypos(el);
        applyArabicSearchPage(el);
      });
    }
    if (curMO) curMO.takeRecords();
  }
  function scheduleCurrency(recs) {
    if (!recs || !recs.length || curLangKey() !== curKey) curFull = true;
    else curCollect(recs);
    if (!curFull && !curRoots.size) return;
    if (curPending) return;
    curPending = true;
    setTimeout(curFlush, 40);
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
      /* v75: plain CSS status-bar colour (the old JS status-bar code was removed) */
      "html.hg-acct-page .native-status-bar-bg:not(.native-status-bar-scrim):not(.native-status-bar-scrim-hold){background-color:#8640FC !important;}" +
      /* page + header */
      "#app .scheme-profile-page.scheme-profile-page{padding-top:calc(60px + var(--native-status-bar-height,0px)) !important;background:#FFFCF9;}" +
      "#app .scheme-profile-page.hg-acct-root{background:#FFFCF9;}" +
      "#app .scheme-profile-page.hg-acct-root .hpz-page-surface{background:transparent !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header{background:#8640FC !important;box-shadow:none !important;}" +
      "#app .scheme-profile-page:not(.hg-acct-root) .scheme-mobile-page-header{border-radius:0 0 22px 22px;box-shadow:0 6px 18px rgba(90,41,222,.18) !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header__surface{background:transparent !important;box-shadow:none !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header__title{color:#fff !important;mix-blend-mode:normal !important;transform:none !important;font-size:16px !important;font-weight:600 !important;padding-inline:56px !important;}" +
      "#app .scheme-profile-page .scheme-mobile-page-header .back-btn svg path{fill:#fff !important;stroke:#fff !important;}" +
      "html[lang^='ar'] #app .scheme-profile-page .scheme-mobile-page-header .back-btn svg{transform:scaleX(-1);}" +
      /* hero: left-aligned greeting (no avatar), smaller type */
      /* (2026-10-21) account sub-page titles (Orders, addresses, language...) 16 semibold like Talabat's headers (were 17 bold) */
      /* (Talabat account, 2026-10-21) name 18 bold, rows 52 tall, 20pt icons, labels 14 semibold, values 14 grey */
      "#hg-acct-hero{position:relative;overflow:hidden;background:#8640FC;border-radius:0 0 26px 26px;padding:12px 20px 22px;margin-top:-1px;color:#fff;font-family:inherit;}" +
      "#hg-acct-hero .hg-wm{position:absolute;inset-inline-end:-22px;bottom:-40px;width:150px;height:150px;background-position:center;background-repeat:no-repeat;background-size:contain;opacity:.3;pointer-events:none;}" +
      "#hg-acct-hero .hg-row{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:14px;}" +
      "#hg-acct-hero .hg-txt{min-width:0;flex:1;}" +
      "#hg-acct-hero .hg-hi{font-size:12px;line-height:1.3;opacity:.86;}" +
      "#hg-acct-hero .hg-name{font-size:18px;font-weight:700;line-height:1.25;letter-spacing:-.01em;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" +
      "#hg-acct-hero .hg-sub{font-size:12px;line-height:1.4;opacity:.88;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" +
      "#hg-acct-hero.hg-guest .hg-name{font-size:19px;white-space:normal;}" +
      "#hg-acct-hero.hg-guest .hg-sub{white-space:normal;max-width:290px;margin-top:5px;}" +
      "#hg-acct-hero .hg-edit{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.2);border:0;display:flex;align-items:center;justify-content:center;flex:none;cursor:pointer;margin-top:2px;}" +
      "#hg-acct-hero .hg-edit svg{width:15px;height:15px;}" +
      "#hg-acct-hero .hg-cta{position:relative;margin-top:14px;height:40px;padding:0 22px;border-radius:999px;background:#FFFCF9;color:#5A29DE;font-size:14px;font-weight:700;border:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font-family:inherit;}" +
      /* rows: flat list on the page, plain icons, a very faint lavender line between rows (no bubbles) */
      "#app .hg-acct-root #ProfileSideBar{padding:0 20px !important;margin-bottom:120px !important;}" +
      "#app .hg-acct-root #ProfileSideBar hr{display:none !important;}" +
      "#app .hg-acct-root #profile{margin-top:0 !important;}" +
      "#app .hg-acct-root #ProfileSideBar .navigation-list{background:transparent !important;box-shadow:none !important;border-radius:0 !important;padding:0 !important;margin-top:4px !important;overflow:visible !important;}" +
      "#app .hg-acct-root #ProfileSideBar .navigation-list{display:flex !important;flex-direction:column;}" +
      "#app .hg-acct-root .hg-l-act{order:9;}#app .hg-acct-root .hg-g-act{order:10;}#app .hg-acct-root .hg-l-pref{order:19;}#app .hg-acct-root .hg-g-pref{order:20;}#app .hg-acct-root .hg-l-out{order:29;}#app .hg-acct-root .hg-g-out{order:30;}" +
      "#app .hg-acct-root .hg-acct-label{font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:#8A849C;font-weight:600;line-height:1.2;margin:18px 0 2px;}" +
      "#app .hg-acct-root .hg-acct-sep{height:14px;}" +
      "#app .hg-acct-root .scheme-profile-nav-item{background:transparent !important;border:0 !important;border-bottom:1px solid #F0EBFA !important;border-radius:0 !important;margin:0 !important;padding:0 !important;min-height:52px;box-shadow:none !important;overflow:visible;}" +
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
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon{width:20px !important;height:20px !important;margin:0 !important;display:block;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg{width:20px;height:20px;display:block;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg [stroke]:not([stroke='none']){stroke:#5A29DE !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .scheme-profile-icon svg [fill]:not([fill='none']){fill:#5A29DE !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item-title{font-size:14px !important;font-weight:600 !important;line-height:20px !important;color:#262626 !important;text-transform:none !important;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__append{display:flex;align-items:center;gap:8px;}" +
      "#app .hg-acct-root .scheme-profile-nav-item .v-list-item__append .v-icon{color:#CFC9DF !important;font-size:16px !important;width:16px !important;height:16px !important;}" +
      "html[lang^='ar'] #app .hg-acct-root .scheme-profile-nav-item .v-list-item__append .v-icon{transform:scaleX(-1);}" +
      "#app .hg-acct-root .hg-acct-val{font-size:14px;font-weight:400;color:#767676;}" +
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
      const esc = hgEsc; /* (2026-10-20): was a second copy of hgEsc */
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

  /* LANGUAGE PAGE (mobile/app): card-style options, proper title, native language names.
     Talabat sizes (2026-10-21): 16 at the sides (was 4), 16 under the bar (28 here: the page sits 12 up under it), 52 tall rows with their 2pt border (were 68),
     labels 14 semibold (were 15) */
  function ensureLanguageStyle() {
    if (document.getElementById("hg-lang-style")) return;
    const st = document.createElement("style");
    st.id = "hg-lang-style";
    st.textContent =
      "@media (max-width:959.98px){" +
      "#app .scheme-profile-page #Languages{margin:0 !important;padding:28px 16px 0 !important;}" +
      "#app #Languages .v-card{background:transparent !important;box-shadow:none !important;}" +
      "#app #Languages .v-card-text{padding:0 !important;}" +
      "#app #Languages ul.languages{margin:0 !important;padding:0 !important;}" +
      "#app #Languages ul.languages hr{display:none !important;}" +
      "#app #Languages .v-card-actions{display:none !important;}" +
      "#app #Languages li.language{background:#FFFCF9;border:2px solid #EFEAFB;border-radius:16px;margin:0 0 12px !important;padding:0 !important;box-shadow:0 2px 10px rgba(60,30,140,.06);}" +
      "#app #Languages li.language:has(input:checked){border-color:#5A29DE;background:#F8F5FF;}" +
      "#app #Languages li.language label{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:48px;padding:0 16px;cursor:pointer;}" +
      "#app #Languages li.language .name{font-size:14px !important;font-weight:600;color:#262626;}" +
      "#app #Languages input.radio{-webkit-appearance:none;appearance:none;width:24px;height:24px;border-radius:50%;border:2px solid #C9C2DD;background:#FFFCF9;margin:0;flex:none;position:relative;}" +
      "#app #Languages input.radio:checked{border-color:#5A29DE;background:#5A29DE;}" +
      "#app #Languages input.radio:checked::after{content:'';position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#FFFCF9;}" +
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
      EP + ".scheme-edit-profile-surface{border-radius:26px 26px 0 0 !important;background:#FFFCF9 !important;position:relative;}" +
      EP + ".scheme-edit-profile-surface::before{content:'';position:absolute;top:9px;left:50%;width:42px;height:4px;margin-left:-21px;border-radius:4px;background:#DCD5EE;}" +
      EP + ".v-card-title{padding:28px 22px 2px !important;}" +
      EP + ".v-card-title .text-h5{font-size:22px !important;font-weight:700 !important;line-height:1.3 !important;letter-spacing:0 !important;color:#000 !important;}" +
      EP + ".v-card-text{padding:6px 22px 0 !important;}" +
      EP + ".v-card-text .v-container{padding:0 !important;}" +
      EP + "form label.tw-font-semibold{font-size:13px !important;font-weight:600 !important;color:#5B5670 !important;margin:16px 0 8px 2px !important;}" +
      EP + ".v-field{background:" + L + " !important;border:1.5px solid transparent;border-radius:14px !important;box-shadow:none !important;}" +
      EP + ".v-field__outline{display:none !important;}" +
      EP + ".v-field__input{font-size:16px !important;color:#262A33 !important;min-height:52px !important;padding:0 16px !important;}" +
      EP + ".v-field--focused{background:#FFFCF9 !important;border-color:" + P + " !important;box-shadow:0 0 0 4px rgba(90,41,222,.12) !important;}" +
      EP + ".v-input--error .v-field{border-color:#E5384F !important;}" +
      EP + ".v-input__details{padding:2px 4px 0 !important;min-height:0 !important;}" +
      EP + ".v-counter{direction:ltr;unicode-bidi:isolate;}" +
      EP + "#login-input," + EP + "#login-input *," + AE + "#login-input," + AE + "#login-input *{direction:ltr !important;}" +
      EP + ".scheme-edit-profile-actions{display:grid !important;grid-template-columns:1fr 1fr;gap:10px;padding:14px 22px calc(18px + env(safe-area-inset-bottom,0px)) !important;border-top:1px solid #F0ECF8;background:#FFFCF9;align-items:stretch;}" +
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
      AE + ".scheme-address-editor__header>div:first-child>div:first-child::before{content:'';display:block;width:22px;height:22px;background:#FFFCF9;-webkit-mask:" + ARROW_URL + " center/contain no-repeat;mask:" + ARROW_URL + " center/contain no-repeat;}" +
      "html[lang^='ar'] .scheme-address-editor__header>div:first-child>div:first-child::before{transform:scaleX(-1);}" +
      AE + ".scheme-address-editor__header>div:nth-child(2){padding:2px 16px 18px !important;background:transparent !important;}" +
      AE + ".scheme-address-editor__header .v-field{background:#FFFCF9 !important;border-radius:14px !important;box-shadow:0 6px 18px rgba(40,10,120,.22) !important;}" +
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
      AE + "#addAddressForm .v-field--focused{background:#FFFCF9 !important;border-color:" + P + " !important;box-shadow:0 0 0 4px rgba(90,41,222,.12) !important;}" +
      AE + "#addAddressForm .v-input--error .v-field{border-color:#E5384F !important;}" +
      AE + "#AddressSelectType label{font-size:13px !important;font-weight:600 !important;color:#5B5670 !important;text-transform:none !important;letter-spacing:0 !important;margin-bottom:10px;display:block;}" +
      AE + "#AddressSelectType .v-chip{height:46px !important;border-radius:14px !important;background:" + L + " !important;border:1.5px solid transparent !important;color:#1B1F2A !important;font-weight:600;padding:0 18px !important;opacity:1;}" +
      AE + "#AddressSelectType .v-chip__overlay{display:none;}" +
      AE + "#AddressSelectType .v-chip--selected," + AE + "#AddressSelectType .v-chip.text-primary{background:#F2ECFF !important;border-color:" + P + " !important;color:" + P + " !important;}" +
      AE + "#AddressSelectType .v-chip--disabled{opacity:.45 !important;}" +
      AE + ".scheme-address-editor__mobile-footer{background:#FFFCF9 !important;box-shadow:0 -8px 24px rgba(27,32,35,.08);border-radius:20px 20px 0 0;}" +
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
    document.documentElement.classList.toggle("hg-addr-editor", !!(mobile && ed)); /* (2026-10-20): ed is already visible, no second measure */
    if (mobile && (ed || document.querySelector(".scheme-edit-profile-panel"))) ensureFormsStyle();
    /* (2026-10-20): fixTypos(document.body) moved to the currency observer (changed parts only) */
    fixArabicForms();
  }

  /* EXTRA STYLES: back button on My Orders (when opened from Account), the phone header's filter button, Hyperzod's own
     search, category, store and product screens where ours don't replace them.
     (2026-10-26) rules of the old design that the new design (app-new.css) fully overrides, or whose elements no longer
     exist (old Home, pull-to-refresh, old View cart bar), are removed: each one was checked on Home, Stores near you,
     Search, a category, two stores, a product, the cart and the Account pages, phone and computer, English and Arabic. */
  function ensureExtraStyle() {
    if (document.getElementById("hg-extra-style")) return;
    const st = document.createElement("style");
    st.id = "hg-extra-style";
    /* (2026-10-20): HG_ZOOM (fixed at 1 since v80) and its two zoom:1 rules removed - they did nothing */
    const S = "html body [data-color-scheme] #MultiVendorSearch ";
    const TUNE_IC = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1'/%3E%3Ccircle cx='15' cy='6' r='2'/%3E%3Ccircle cx='9' cy='12' r='2'/%3E%3Ccircle cx='17' cy='18' r='2'/%3E%3C/svg%3E\")";
    const SEARCH_IC = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='M21 21l-4.3-4.3'/%3E%3C/svg%3E\")";
    const ARROW = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12H5M12 19l-7-7 7-7'/%3E%3C/svg%3E\")";
    st.textContent =
      "@media (max-width:959.98px){" +
      /* orders back button */
      "#hg-orders-back{position:absolute;inset-inline-start:8px;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;background:transparent;display:flex;align-items:center;justify-content:center;z-index:75;padding:0;margin:0;-webkit-tap-highlight-color:transparent;cursor:pointer;}" +
      "#hg-orders-back svg{display:none !important;}" +
      "#hg-orders-back::before,#app .scheme-mobile-page-header .back-btn::before{content:'';display:block;width:22px;height:22px;background:#262A33;-webkit-mask:" + ARROW + " center/contain no-repeat;mask:" + ARROW + " center/contain no-repeat;}" +
      "#hg-orders-back::before,#app .scheme-profile-page .scheme-mobile-page-header .back-btn::before{background:#FFFCF9;}" +
      "#app .scheme-mobile-page-header .back-btn{width:44px !important;height:44px !important;min-width:44px !important;margin-inline-start:8px !important;display:flex !important;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;}" +
      "#app .scheme-mobile-page-header .back-btn>.v-icon{display:none !important;}" +
      "#app .scheme-mobile-page-header .back-btn svg{display:none !important;}" +
      "html[lang^='ar'] #hg-orders-back::before,html[lang^='ar'] #app .scheme-mobile-page-header .back-btn::before{transform:scaleX(-1);}" +
      "#app .scheme-mobile-page-header__surface:has(>#hg-orders-back){position:relative !important;}" +
      /* home header: native filter button, minimal - just a small icon at the end of the search pill */
      "#app .home-mobile-search-row #MobileSearchFilterBtn{display:inline-flex !important;position:absolute !important;inset-inline-end:16px;top:10px;width:42px !important;min-width:0 !important;height:36px !important;margin:0 !important;padding:0 !important;background:transparent !important;border:0 !important;box-shadow:none !important;border-radius:0 18px 18px 0 !important;color:#5A29DE !important;z-index:4;-webkit-tap-highlight-color:transparent;}" +
      "html[dir='rtl'] #app .home-mobile-search-row #MobileSearchFilterBtn,html[lang^='ar'] #app .home-mobile-search-row #MobileSearchFilterBtn{border-radius:18px 0 0 18px !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn::before{content:'';position:absolute;inset-inline-start:0;top:9px;bottom:9px;width:1px;background:rgba(27,32,35,.14);}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__overlay,#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__underlay{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn svg{display:none !important;}" +
      "#app .home-mobile-search-row #MobileSearchFilterBtn .v-btn__content::after{content:'';display:block;width:18px;height:18px;background:#5A29DE;-webkit-mask:" + TUNE_IC + " center/contain no-repeat;mask:" + TUNE_IC + " center/contain no-repeat;}" +
      /* v75: restored, matching v57 exactly */
      S + ".scheme-global-search-mobile-header{background:#8640FC !important;margin-left:-16px !important;margin-right:-16px !important;padding:11px 16px !important;border-radius:0 0 22px 22px !important;box-shadow:none !important;border-bottom:0 !important;}" +
      S + ".mobile-search-input .v-field{display:flex !important;align-items:center;min-height:38px !important;height:38px !important;background:#FFFCF9 !important;border:0 !important;border-radius:999px !important;box-shadow:none !important;overflow:visible !important;padding:0 12px !important;}" +
      S + ".mobile-search-input .v-field__overlay,html body [data-color-scheme] #MultiVendorSearch .mobile-search-input .v-field__outline{display:none !important;}" +
      S + ".mobile-search-input .v-field__append-inner{order:-1;padding:0 8px 0 0 !important;margin:0 !important;display:flex;align-items:center;}" +
      S + ".mobile-search-input .v-field__append-inner svg{display:none !important;}" +
      S + ".mobile-search-input .v-field__append-inner>div::before{content:'';display:block;width:18px;height:18px;background:#6B7280;-webkit-mask:" + SEARCH_IC + " center/contain no-repeat;mask:" + SEARCH_IC + " center/contain no-repeat;}" +
      S + ".mobile-search-input .v-field__field{flex:1 1 auto;min-width:0;height:38px;}" +
      S + ".mobile-search-input input::placeholder{color:#8A8F95 !important;opacity:1 !important;}" +
      /* categories: compact swipeable 2-row strip of round images instead of one huge grid */
      S + "[class*='Axiforma'],html body [data-color-scheme] #MultiVendorSearch input{font-family:inherit !important;}" +
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
      /* (2026-10-21) Talabat item sheet sizes: 128x52 stepper (16 semibold number), 52 tall Add button with 16 semibold text, 16 close icon; store page round buttons get a 1pt line instead of a shadow */
      /* PRODUCT PAGE (bottom sheet .product-popup, mobile/app) - Talabat-style: no header bar, white top, image first,
         floating 40px white round back button, plain 20px title + 14px grey description, no top price (the Add button
         shows the live total incl. options/add-ons), 50px outlined stepper + 50px purple "Add item" pill. */
      "@media (max-width:959.98px){" +
      "html body .v-card.product-popup>.v-card-title{position:absolute !important;top:0;left:0;right:0;z-index:5;height:0 !important;min-height:0 !important;padding:0 !important;overflow:visible !important;background:transparent !important;background-color:transparent !important;box-shadow:none !important;pointer-events:none;}" +
      "html body .v-card.product-popup>.v-card-title>div{display:none !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn{pointer-events:auto;position:absolute !important;top:calc(var(--native-status-bar-height,0px) + 12px) !important;left:16px !important;right:auto !important;transform:none !important;margin:0 !important;width:40px !important;height:40px !important;min-width:40px !important;min-height:40px !important;border-radius:50% !important;background:#FFFCF9 !important;border:1px solid #E5E5E5 !important;box-shadow:none !important;}" +
      "html[lang^='ar'] body .v-card.product-popup>.v-card-title>.v-btn{left:auto !important;right:16px !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn .v-btn__overlay,html body .v-card.product-popup>.v-card-title>.v-btn .v-btn__underlay{opacity:0 !important;}" +
      "html body .v-card.product-popup>.v-card-title>.v-btn .v-icon{color:#1B2023 !important;font-size:16px !important;}" +
      "html body .v-card.product-popup>.v-card-text{padding-top:0 !important;background:#FFFCF9 !important;}" +
      /* app: Hyperzod pads fullscreen dialogs for the status bar, which left a white strip above the photo. Photo goes to the very top,
         under the status bar, with the back button floating on it */
      "html body .v-overlay.v-overlay .v-overlay__content>.v-card.product-popup:first-child{padding-top:0 !important;}" +
      /* v75: restored, matching v57 exactly */
      "html body .v-card.product-popup .product-image-slider,html body .v-card.product-popup .product-image-slider .v-card{background:#FFFCF9 !important;}" +
      "html body .v-card.product-popup #productInfo .product-category-name,html body .v-card.product-popup #productInfo .product-price,html body .v-card.product-popup .v-card-text>hr{display:none !important;}" +
      "html body .v-card.product-popup #productInfo .product-name{font-size:20px !important;font-weight:700 !important;line-height:1.3 !important;color:#1B2023 !important;margin:6px 0 8px !important;-webkit-line-clamp:unset;}" +
      "html body .v-card.product-popup #ProductDescription br,html body .v-card.product-popup #ProductDescription .mmupi-feat-icon{display:none !important;}" +
      "html body .v-card.product-popup #ProductDescription .mmupi-feat{display:block !important;margin:0 !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app{padding:12px 16px 24px 20px !important;gap:20px !important;border-top:1px solid #F2F2F2;background:#FFFCF9 !important;}" +
      "html[lang^='ar'] body .v-card.product-popup #add_to_cart_hide_from_mobile_app{padding:12px 20px 24px 16px !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child{width:128px !important;height:52px !important;border-radius:999px !important;border:1px solid #E5E5E5 !important;background:#FFFCF9 !important;overflow:hidden;justify-content:space-between !important;padding:0 6px !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn{height:50px !important;border-radius:0 !important;background:transparent !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn:first-child *{color:#9E9E9E !important;fill:#9E9E9E !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child .v-btn:last-child *{color:#5A29DE !important;fill:#5A29DE !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app>div:first-child input{font-size:16px !important;font-weight:600 !important;color:#1B2023 !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn{height:52px !important;border-radius:999px !important;background:#5A29DE !important;box-shadow:none !important;padding:0 22px !important;letter-spacing:0 !important;text-transform:none !important;-webkit-font-smoothing:antialiased;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content{width:100%;justify-content:space-between !important;}" +
      "html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content,html body .v-card.product-popup #add_to_cart_hide_from_mobile_app .tw-flex-1 .v-btn .v-btn__content *{color:#fff !important;font-size:16px !important;font-weight:600 !important;}" +
      "}" +
      /* discount badge (2026-10-20: one rule for all widths; was the same rule twice, phone and desktop): darker tone of our "Ultimate orange" #FF4000 (#D93600 keeps white text at 4.7:1), small rounded rectangle */
      "html body .product-discount-badge{background:#D93600 !important;color:#fff !important;font-size:12px !important;font-weight:700 !important;line-height:1.2 !important;border-radius:6px !important;padding:4px 7px !important;letter-spacing:.02em;opacity:1 !important;z-index:3;}" +
      /* STORE PAGE (mobile/app): 200px cover with rounded bottom (like our header), info on white below it (62px logo, 20px name,
         category, purple distance pill), round white floating buttons, categories bar right under the info and Recommended
         Products as one sideways row UNDER the bar (visual order via flex, DOM untouched), 14px tabs (#5C5C5C, active purple),
         22px section titles, 2-col grid on #F5F5F5 tiles with 40px white + button.
         Also: space under the home "More stores near you" list so the last store clears the bottom nav. */
      "@media (max-width:959.98px){" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content .v-card-text>div>div{margin-inline-start:74px !important;padding:0 !important;top:0 !important;min-height:62px !important;display:flex;flex-direction:column;justify-content:center;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 #MerchantAddress{display:none !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .header-content .v-card-text>div>div>div:last-child{font-size:14px !important;font-weight:400 !important;color:#767676 !important;margin-top:4px;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 span{font-weight:500 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div>div::before{content:none !important;display:none !important;}" +
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
      ".add-btn:not(.v-btn--block){width:29px !important;height:29px !important;min-width:29px !important;max-width:29px !important;min-height:29px !important;max-height:29px !important;padding:0 !important;border-radius:50% !important;background:#FFFCF9 !important;box-shadow:0 1px 4px rgba(0,0,0,.10) !important;font-size:0 !important;border:0 !important;flex:0 0 29px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;box-sizing:border-box !important;}" +
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
      ".scheme-merchant-page.merchant-mobile-view{display:flex !important;flex-direction:column !important;}" +
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
      /* 2026-10-05: the app now starts the page at the very top of the screen, under the status bar (proven on the
         Karachi Star screenshot: banner bottom at ~200px = -59px pull-up + 259px height). The pull-up above therefore
         pushed the banner's top 59px off the screen, cutting off the top of the artwork. The banner now starts at the
         top of the screen, 200px tall, so its bottom edge and everything below stay exactly where they were, and the
         whole photo is on screen (its top part behind the see-through status bar). On the website the status-bar
         height is 0, so nothing changes there. */
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2>div:first-child{aspect-ratio:auto !important;height:200px !important;border-radius:0 0 24px 24px;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div{justify-content:flex-start !important;margin:0 !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div{gap:0 6px;row-gap:2px;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4>div>div{background:none !important;padding:0 !important;border-radius:0 !important;font-size:14px !important;color:#5C5C5C !important;}" +
      ".scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 span,.scheme-merchant-page.merchant-mobile-view #merchant-header-v2 .storefront-gutter>.tw-mt-4 div{color:#5C5C5C !important;font-weight:500 !important;font-size:14px !important;}" +
      /* cover sits under the phone status bar: no white strip over it, and no pull-down bounce at the top */
      /* v75: restored, matching v57 exactly */
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
      /* PRODUCT TILES in the "list" layout some stores use (Amjad, Le Cadeau...) and in Recommended: same square tile as the grid.
         (the photo box is found by its class, not position: its first child is a hidden loader)
         v78: de-scoped from ".scheme-merchant-page" for the same reason as the grid-card block above - this card
         shows up outside a single shop's own page too, and per Adam it must be fixed everywhere, not per-shop. */
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card){box-shadow:none !important;border:0 !important;background:transparent !important;margin:0 !important;height:auto !important;min-height:0 !important;align-self:start !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .v-card-text>.tw-grid{display:flex !important;flex-direction:column-reverse !important;justify-content:flex-end !important;gap:10px !important;height:auto !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .add-btn svg *{stroke:#5A29DE !important;}" +
      ":is(.product-card-horizontal,.product-horizontal-cards>.v-card) .price *{font-size:16px !important;font-weight:500 !important;color:#1B2023 !important;}" +
      /* SORT & FILTERS sheet: our tokens (18px bold title, purple active tab + indicator, 11.5px uppercase label, 50px rows,
         purple radios, pill Clear/Apply). STORE "- 1 +" after tapping +: white pill with purple -/+ and a dark number (was white on white) */
      "html body [data-color-scheme] .scheme-filter-host{border-radius:22px 22px 0 0 !important;overflow:hidden !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__header{padding:20px 16px 16px 20px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__title{font-size:18px !important;font-weight:700 !important;color:#1B2023 !important;line-height:1.3 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__close{width:36px !important;height:36px !important;border-radius:50% !important;background:#F5F5F5 !important;color:#1B2023 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-divider{background:#F0F0F0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-rail{background:#FAFAFA !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab{padding:0 14px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab--active{background:#FFFCF9 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .scheme-filter-tab--active span:last-child{color:#5A29DE !important;font-weight:600 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-sheet__content .tw-uppercase{font-size:11.5px !important;letter-spacing:.08em !important;color:#8A849C !important;font-weight:600 !important;margin-bottom:6px !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row{min-height:50px !important;border-bottom:1px solid #F0F0F0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row:last-child{border-bottom:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .filter-row .v-label,html body [data-color-scheme] .scheme-filter-panel .v-selection-control .v-label{font-size:15px !important;color:#1B2023 !important;opacity:1 !important;font-weight:400 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control__input .v-icon{color:#C9C3D9 !important;opacity:1 !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control--dirty .v-selection-control__input .v-icon{color:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-filter-panel .v-selection-control--dirty .v-label{font-weight:600 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer{padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px)) !important;border-top:1px solid #F0F0F0 !important;gap:12px !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .v-btn{height:50px !important;border-radius:999px !important;font-size:15px !important;font-weight:600 !important;letter-spacing:0 !important;text-transform:none !important;box-shadow:none !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-clear{border:1px solid #E5E5E5 !important;color:#1B2023 !important;background:#FFFCF9 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-apply{background:#5A29DE !important;color:#fff !important;border:0 !important;}" +
      "html body [data-color-scheme] .scheme-filter-footer .scheme-filter-apply *{color:#fff !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn{--counter-w:104px;width:104px !important;height:40px !important;border-radius:999px !important;background:#FFFCF9 !important;box-shadow:0 2px 8px rgba(0,0,0,.16) !important;justify-content:space-between !important;padding:0 4px !important;margin-inline-start:auto;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .decrement-btn,html body [data-color-scheme] .scheme-merchant-page .counter-btn .increment-btn{height:40px !important;padding:0 8px !important;background:transparent !important;color:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn svg,html body [data-color-scheme] .scheme-merchant-page .counter-btn svg *{color:#5A29DE !important;stroke:#5A29DE !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .counter-input{background:transparent !important;color:#1B2023 !important;font-size:15px !important;font-weight:700 !important;width:auto !important;flex:1 !important;}" +
      "html body [data-color-scheme] .scheme-merchant-page .counter-btn .counter-input *{color:#1B2023 !important;}" +
      /* desktop: our header scrolls away, so the sticky category bar must stick to the very top until Hyperzod's own
         store bar (#MerchantStickyHeader, 96px) appears - otherwise it floated 64px down with products showing above it */
      "@media (min-width:960px){.scheme-merchant-page:not(.merchant-mobile-view) #mobileStickyHeader{top:0 !important;background:#FFFCF9 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view):has(#MerchantStickyHeader:not([style*='display: none'])) #mobileStickyHeader{top:96px !important;}}" +
      /* DESKTOP (>=960px): same look as mobile, laid out in a centered column (store page: the page column, --hg-page /
         --hg-gut in app-new.css, 1600px with 48px sides since 2026-10-24; it was 1200px with 24px sides). Home rows wrap 4-up + 2-col list;
         store page: contained 1200x320 banner (20px corners), 88px logo, 28px name, tabs under the info, Recommended under the tabs,
         5-col product tiles; category pages: purple title band + 3-col list rows; product modal: no top price, pill Add Item bar. */
      "@media (min-width:960px){" +
      ".scheme-merchant-page:not(.merchant-mobile-view){display:flex !important;flex-direction:column !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>*{flex:none;width:100%;order:9;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.scheme-merchant-products-section{display:contents !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.page-builder-section-surface:has(#merchant-header-v2){order:1;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #mobileStickyHeader{order:2;margin-top:24px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view)>.page-builder-section-surface:has(.scheme-product-recommendation-section){order:3;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-content{order:4;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2{max-width:var(--hg-page,1600px);margin:20px auto 0 !important;box-shadow:none !important;background:transparent !important;padding:0 var(--hg-gut,48px);box-sizing:content-box;}" +
      /* 2026-10-08: store banners are uploaded at 2:1 (e.g. 2000x1000). The old fixed 320px height on the 1200px column (3.75:1)
         cut off almost half of the image. The banner now spans the same 1200px column as the logo, name and tabs (edges line up)
         at 3:1 (about 1200x400): only a thin strip at the top and bottom of a 2:1 image is trimmed, the middle (logo, text) stays.
         !important on height, min-height, max-height, max-width and margin only to beat the earlier fixed height and any Hyperzod
         size on .cover-image. */
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2>.storefront-gutter{padding:20px 0 0 !important;min-height:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .merchant-header-img{top:0 !important;width:88px !important;height:88px !important;border:1px solid #E5E5E5 !important;border-radius:16px !important;box-shadow:none !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div{margin:0 !important;padding:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div>div{margin-inline-start:104px !important;padding:0 !important;top:0 !important;min-height:88px !important;display:flex;flex-direction:column;justify-content:center;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .store-name{font-size:28px !important;font-weight:700 !important;line-height:1.25 !important;color:#1B2023 !important;letter-spacing:-.01em;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .header-content .v-card-text>div>div>div:last-child{font-size:15px !important;font-weight:400 !important;color:#767676 !important;margin-top:4px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>div:first-child{margin:0 !important;gap:0 8px;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4 span,.scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4 div{color:#5C5C5C !important;font-weight:500 !important;font-size:15px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4{padding:0 !important;margin-top:8px !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div{border:0 !important;background:none !important;border-radius:0 !important;padding:0 !important;text-align:start !important;font-weight:400 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) #merchant-header-v2 .storefront-gutter>.tw-mt-4>.tw-px-4>div::first-letter{text-transform:uppercase;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section,.scheme-merchant-page:not(.merchant-mobile-view) #merchant-content>.storefront-gutter{max-width:var(--hg-page,1600px);margin-left:auto !important;margin-right:auto !important;padding-left:var(--hg-gut,48px) !important;padding-right:var(--hg-gut,48px) !important;box-sizing:content-box;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-section{margin-top:44px !important;margin-bottom:0 !important;}" +
      ".scheme-merchant-page:not(.merchant-mobile-view) .scheme-product-recommendation-heading,.scheme-merchant-page:not(.merchant-mobile-view) h3.category-name{font-size:26px !important;font-weight:700 !important;color:#1B2023 !important;letter-spacing:-.01em;margin-bottom:22px !important;padding-bottom:0 !important;}" +
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
      /* (2026-10-26) the price is hidden above because the Add button at the bottom shows it; a closed store has no Add button,
         so the sheet showed no price at all. Then the price stays (phones and computers). */
      "html body .v-card.product-popup:not(:has(.v-card-actions)) #productInfo .product-price{display:block !important;}" +
      ".product-popup.product-model #productInfo .product-name{font-size:22px !important;font-weight:700 !important;line-height:1.3 !important;color:#1B2023 !important;margin-bottom:10px !important;}" +
      ".product-popup.product-model #ProductDescription,.product-popup.product-model #ProductDescription *{font-size:14px !important;line-height:20px !important;color:#767676 !important;font-weight:400 !important;}" +
      ".product-popup.product-model #ProductDescription br,.product-popup.product-model #ProductDescription .mmupi-feat-icon{display:none !important;}" +
      ".product-popup.product-model #ProductDescription .mmupi-feat{display:block !important;margin:0 !important;}" +
      ".product-popup.product-model .v-card-text>.v-btn.v-btn--icon{background:#FFFCF9 !important;border:1px solid #E5E5E5 !important;border-radius:50% !important;}" +
      ".product-popup.product-model .v-card-text>.v-btn.v-btn--icon .v-btn__overlay,.product-popup.product-model .v-card-text>.v-btn.v-btn--icon .v-btn__underlay{opacity:0 !important;}" +
      ".product-popup.product-model .v-card-actions{padding:12px 20px !important;gap:16px !important;border-top:1px solid #F2F2F2 !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child{width:127px !important;height:50px !important;border-radius:999px !important;border:1px solid #E5E5E5 !important;background:#FFFCF9 !important;overflow:hidden;justify-content:space-between !important;padding:0 6px !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn{height:48px !important;background:transparent !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn:first-child *{color:#9E9E9E !important;fill:#9E9E9E !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child .v-btn:last-child *{color:#5A29DE !important;fill:#5A29DE !important;}" +
      ".product-popup.product-model .v-card-actions>div:first-child input{font-size:17px !important;font-weight:600 !important;color:#1B2023 !important;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn{height:50px !important;border-radius:999px !important;background:#5A29DE !important;box-shadow:none !important;padding:0 22px !important;letter-spacing:0 !important;text-transform:none !important;-webkit-font-smoothing:antialiased;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content{width:100%;justify-content:space-between !important;}" +
      ".product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content,.product-popup.product-model .v-card-actions .flex-1 .v-btn .v-btn__content *{color:#fff !important;font-size:15px !important;font-weight:600 !important;}" +
      "}";
    document.head.appendChild(st);

  }

  /* purple status strip + purple bar on the search page (mobile/app) */
  /* v94: Hyperzod rebuilds #MultiVendorSearch when a query is submitted. For a few frames the element is gone, which used
     to drop html.hg-search-page -> the app's status strip lost its purple and got it back (visible flicker). The flag now
     survives a short gap (600ms) unless another page root has taken over. */
  let hgSearchSeenAt = 0;
  function syncSearchClass() {
    const el = document.getElementById("MultiVendorSearch");
    const mobile = hgMobileMQ.matches;
    let on = !!el && mobile && isVisible(el); /* (2026-10-20): width checked first, so desktop never measures */
    const cl = document.documentElement.classList;
    if (on) hgSearchSeenAt = Date.now();
    else if (mobile && cl.contains("hg-search-page") && Date.now() - hgSearchSeenAt < 600 &&
      !document.querySelector("#MultiVendorHome, .scheme-merchant-page, .scheme-profile-page, .scheme-merchant-search-page")) on = true;
    if (cl.contains("hg-search-page") !== on) cl.toggle("hg-search-page", on);
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

  function hgEsc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

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
    /* (2026-10-20): read the inline style first (no style recalculation); the computed style is read only for a
       non-<img> .v-img__img without an inline background, which is the one case the inline value cannot answer */
    for (let i = 0; i < bgCandidates.length; i++) {
      const c = bgCandidates[i];
      let bg = c.style.backgroundImage;
      if ((!bg || bg === "none") && c.tagName !== "IMG" && c.classList.contains("v-img__img")) bg = getComputedStyle(c).backgroundImage;
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

  /* (2026-10-20): the long v75/v76 notes about the removed JS status-bar code were deleted; the status bar is plain CSS
     (the "v75: restored" rules in the style blocks above). */

  // Customer presentation integrates with existing Hyperzod controls; it never owns cart/auth/payment state.
  let customerLabelId = 0, customerKeyboardBound = false;
  function applyCustomerExperience() {
    const ar=hgIsAr();
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
      // Keep the hidden separator hidden until Vue supplies a numeric distance again.
      // (2026-10-20): decide once and touch the class only when it changes (it was removed and re-added on every run)
      const miss=empty||!tail.nodeValue.trim();
      if(empty)tail.nodeValue='';
      if(span.classList.contains('hg-missing-distance')!==miss)span.classList.toggle('hg-missing-distance',miss);
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
    applyHyperGoDesktop();
    applyHyperGoNav();
    applyArabicSearchPage();
    applyHyperGoAccount();
    applyHyperGoLanguage();
    applyHyperGoForms();
    syncOrdersNav();
    syncOrdersBack();
    applyProductAddLabel();
    applyMerchantInfoClean();
    applyNoImagePlaceholder();
    syncSearchClass();
    applyCustomerExperience();
    if (renderObserver) renderObserver.takeRecords();
  }

  let renderObserver = null;
  applyAll();
  applyCurrency();
  fixTypos(document.body); /* (2026-10-20): first full pass (later passes run on changed parts, in curFlush) */

  let renderTimer = null;

  /* observer trim (2026-10-08): changes inside our own countdown, rotating placeholder and temporary panels no longer
     restart applyAll; everything else works exactly as before (same 60ms wait). */
  renderObserver = new MutationObserver((recs) => {

    if (!hgMutRelevant(recs, HG_NOISE_EXT)) return; /* (2026-10-20): extended noise list */

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

  /* LANGUAGE SWITCH VEIL: Hyperzod tears the app down and rebuilds it in the new language (blank flash, a few seconds
     on slow phones). Cover that with a calm loading screen and lift it once the new language has rendered and settled. */
  function showLangVeil() {
    if (document.getElementById("hg-lang-veil")) return;
    const before = document.documentElement.lang;
    const veil = document.createElement("div");
    veil.id = "hg-lang-veil";
    veil.setAttribute("style", "position:fixed;inset:0;z-index:2147483000;background:#FFFCF9;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .12s ease;");
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
  const acctMQ = hgMobileMQ;
  let acctRuns = 0, acctWin = 0;
  /* (2026-10-20): the work below measures the page (isVisible = computed style + layout). It used to run on EVERY mutation batch,
     so Vuetify's class changes while typing or animating forced a layout each time. Now: the first relevant batch of a frame
     runs it straight away (same timing as before), later batches in that frame are merged into one requestAnimationFrame run,
     which still happens before that frame is painted. */
  let acctRaf = 0, acctPending = false;
  function acctFrame() {
    acctRaf = 0;
    if (acctPending) { acctPending = false; acctRun(); }
  }
  function acctRun() {
    try {
    if (!acctMQ.matches) return;
    syncSearchClass();
    /* home header: style it the moment it is (re)created (e.g. coming Back from Search) so the default white header never flashes */
    const hdrRoot = document.getElementById("MultiVendorHeaderRoot");
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
      document.documentElement.classList.toggle("hg-addr-editor", !!ed); /* (2026-10-20): ed is already visible, no second measure */
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
    } finally { acctMO.takeRecords(); } /* drops the records of our own writes, as before */
  }
  /* observer trim (2026-10-08): skips batches that only touched our countdown, placeholder or temporary panels, or that only
     added our own hg- classes. It still has to watch the app's own class changes on every page: the header, bottom nav,
     search and address-editor parts below are global, not just the Account page. */
  const acctMO = new MutationObserver((records, observer) => {
    try {
    if (!acctMQ.matches) return;
    if (!hgMutRelevant(records, HG_NOISE_EXT, true)) return; /* (2026-10-20): extended noise list */
    if (acctRaf) { acctPending = true; return; }
    acctRun();
    acctRaf = requestAnimationFrame(acctFrame);
    } finally { observer.takeRecords(); }
  });
  acctMO.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
    attributeOldValue: true
  });

  curMO = new MutationObserver(scheduleCurrency);
  curMO.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });

})();
