/* hg-version 2026-10-05-1428 */
/* HYPERGO LAUNCH COUNTDOWN - homepage section directly under the header, on the website and in the app.
   Loaded by the Global Custom HTML Head box. The image is launch-countdown.jpg in this repo.
   v2: card look from the reference (lavender card, glass tiles, big date, progress bar, flip on change).
   v3: the countdown sits over the middle of the image; after launch "Live now! / Start shopping".
   To remove the section later: empty that box, then delete this file and launch-countdown.jpg. */
(function () {
  "use strict";
  if (window.__hgLaunchLoaded) return;
  window.__hgLaunchLoaded = true;

  /* ===== LAUNCH DATE AND TIME - Bahrain time (+03:00). Change only this line. ===== */
  var LAUNCH_AT = "2026-10-25T00:00:00+03:00";
  /* the progress bar starts filling from here (Bahrain time) */
  var BAR_START = "2026-09-25T00:00:00+03:00";

  var IMAGE = "https://pexy613.github.io/hypergo-site/launch-countdown.jpg";
  /* the download links the site already uses (footer badges) */
  var APP_STORE = "https://apps.apple.com/app/hypergo/id6756649680";
  var GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.customer.hypergo&hl=en";

  var AR_UNITS = ["\u0623\u064a\u0627\u0645", "\u0633\u0627\u0639\u0627\u062a", "\u062f\u0642\u0627\u0626\u0642", "\u062b\u0648\u0627\u0646\u064a"];
  var TEXT = {
    en: { tag: "Launching", date: "October 25", units: ["Days", "Hours", "Minutes", "Seconds"], sub: AR_UNITS,
          foot: "Delivered anywhere in Bahrain", live: "Live now! \ud83c\udf89", shop: "Start shopping", dl: "Download HyperGo", aria: "HyperGo launch countdown" },
    ar: { tag: "\u0627\u0644\u0625\u0637\u0644\u0627\u0642", date: "25 \u0623\u0643\u062a\u0648\u0628\u0631", units: AR_UNITS, sub: null,
          foot: "\u062a\u0648\u0635\u064a\u0644 \u0644\u0643\u0644 \u0645\u0643\u0627\u0646 \u0641\u064a \u0627\u0644\u0628\u062d\u0631\u064a\u0646",
          live: "\u0645\u062a\u0627\u062d\u0648\u0646 \u0627\u0644\u0622\u0646! \ud83c\udf89", shop: "\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0648\u0642", dl: "\u062d\u0645\u0651\u0644 HyperGo",
          aria: "\u0627\u0644\u0639\u062f \u0627\u0644\u062a\u0646\u0627\u0632\u0644\u064a \u0644\u0625\u0637\u0644\u0627\u0642 HyperGo" }
  };

  var LAUNCH_MS = Date.parse(LAUNCH_AT), START_MS = Date.parse(BAR_START);
  var sec = null, tiles = [], els = {}, timer = 0, lastKey = "";

  function isAr() {
    var de = document.documentElement;
    return (de.lang || "").toLowerCase().indexOf("ar") === 0 || de.dir === "rtl";
  }
  function isApp() { return document.documentElement.classList.contains("hg-native-app"); }
  function setText(el, v) { if (el && el.textContent !== v) el.textContent = v; }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function addStyle() {
    if (document.getElementById("hg-launch-style")) return;
    var st = document.createElement("style");
    st.id = "hg-launch-style";
    st.textContent =
      "#hg-launch{box-sizing:border-box;width:100%;padding:14px 16px 8px;background:#fff;}" +
      "@media (min-width:960px){#hg-launch{padding:40px 48px 24px;}}" +
      "#hg-launch *{box-sizing:border-box;}" +
      /* the card */
      "#hg-launch .hg-launch-card{position:relative;max-width:1100px;margin:0 auto;border-radius:26px;overflow:hidden;isolation:isolate;text-align:center;" +
        "font-family:inherit;color:#2e1a87;background:linear-gradient(180deg,#efeaff 0%,#d9d0fd 100%);border:1px solid #ddd5fb;" +
        "box-shadow:0 18px 40px -18px rgba(91,63,208,.55);container-type:inline-size;display:grid;}" +
      /* countdown and image share one spot: the countdown is centred over the image (a little above its middle, clear of the
         bag and the scooter); on phones, where the countdown is taller than the image, the image sits at the bottom behind it */
      "#hg-launch .hg-launch-body{grid-area:1/1;align-self:center;position:relative;z-index:2;padding:24px 14px 18px;padding:clamp(24px,3cqw,40px) clamp(14px,3cqw,40px) clamp(18px,9cqw,110px);}" +
      /* the image: whole picture, never stretched; its empty top fades into the card under the countdown */
      /* phones and narrow cards: the countdown is taller than the image, so it ends just above the bag and the scooter */
      "@media (max-width:860px){#hg-launch .hg-launch-body{padding-bottom:28vw;}}" +
      "@container (max-width:820px){#hg-launch .hg-launch-body{padding-bottom:28cqw;}}" +
      /* wide cards: tiles and bar stay between the bag and the scooter */
      "@container (min-width:821px){#hg-launch .hg-launch-grid{max-width:min(640px,58cqw);}#hg-launch .hg-launch-bar{max-width:min(592px,54cqw);}}" +
      "#hg-launch .hg-launch-img{grid-area:1/1;align-self:end;position:relative;z-index:1;display:block;width:100%;height:auto;aspect-ratio:1672/941;" +
        "-webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 26%);mask-image:linear-gradient(180deg,transparent 0%,#000 26%);}" +
      "#hg-launch .hg-launch-pill{display:inline-block;font-size:11px;font-size:clamp(11px,1.5cqw,15px);font-weight:600;letter-spacing:6px;text-indent:6px;text-transform:uppercase;color:#5b3fd0;}" +
      "html[dir='rtl'] #hg-launch .hg-launch-pill,html[lang^='ar'] #hg-launch .hg-launch-pill{letter-spacing:0;text-indent:0;font-size:13px;font-size:clamp(13px,1.7cqw,17px);}" +
      "#hg-launch .hg-launch-date{display:block;margin:6px 0 16px;font-size:34px;font-size:clamp(34px,5cqw,58px);font-weight:800;line-height:1.05;letter-spacing:-.6px;color:#3b1fa8;}" +
      "html[dir='rtl'] #hg-launch .hg-launch-date,html[lang^='ar'] #hg-launch .hg-launch-date{letter-spacing:0;line-height:1.25;}" +
      /* glass tiles; fixed-width digits so nothing shifts when they change */
      "#hg-launch .hg-launch-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;gap:clamp(8px,1.4cqw,16px);max-width:640px;margin:0 auto;}" +
      "#hg-launch .hg-launch-t{padding:13px 0 9px;padding:clamp(13px,1.8cqw,20px) 0 clamp(9px,1.4cqw,16px);border-radius:18px;background:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.9);" +
        "-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:0 10px 22px -12px rgba(91,63,208,.55);min-width:0;}" +
      "#hg-launch .hg-launch-n{display:block;font-size:30px;font-size:clamp(30px,5cqw,56px);font-weight:800;line-height:1;letter-spacing:-.5px;color:#3b1fa8;font-variant-numeric:tabular-nums;font-feature-settings:'tnum' 1;}" +
      "#hg-launch .hg-launch-n.hg-launch-flip{animation:hgLaunchFlip .45s cubic-bezier(.2,.9,.3,1.2);}" +
      "@keyframes hgLaunchFlip{from{transform:translateY(-45%) scale(.9);opacity:0}to{transform:none;opacity:1}}" +
      "#hg-launch .hg-launch-l{display:block;margin-top:7px;font-size:9px;font-size:clamp(9px,1.2cqw,12px);font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:#6d4fd6;white-space:nowrap;}" +
      "html[dir='rtl'] #hg-launch .hg-launch-l,html[lang^='ar'] #hg-launch .hg-launch-l{letter-spacing:0;font-size:11px;font-size:clamp(11px,1.4cqw,14px);}" +
      "#hg-launch .hg-launch-sub{display:block;margin-top:1px;font-size:10px;font-size:clamp(10px,1.2cqw,13px);color:#8a76e0;font-family:'IBM Plex Sans Arabic','Noto Sans Arabic',sans-serif;}" +
      "#hg-launch .hg-launch-t:last-child{animation:hgLaunchGlow 2s ease-in-out infinite;}" +
      "@keyframes hgLaunchGlow{50%{box-shadow:0 10px 26px -8px rgba(124,58,237,.8)}}" +
      "#hg-launch .hg-launch-bar{height:5px;border-radius:9px;background:rgba(91,63,208,.16);margin:16px 24px 8px;overflow:hidden;max-width:592px;}" +
      "@media (min-width:700px){#hg-launch .hg-launch-bar{margin-left:auto;margin-right:auto;}}" +
      "#hg-launch .hg-launch-bar i{display:block;height:100%;width:0;border-radius:9px;background:linear-gradient(90deg,#7c3aed,#c084fc);transition:width 1.2s ease;}" +
      "html[dir='rtl'] #hg-launch .hg-launch-bar i{background:linear-gradient(270deg,#7c3aed,#c084fc);}" +
      "#hg-launch .hg-launch-foot{display:block;font-size:11.5px;font-size:clamp(11.5px,1.5cqw,16px);font-weight:600;color:#4c2fb8;}" +
      "#hg-launch .hg-launch-live .hg-launch-foot{margin-top:6px;}" +
      "#hg-launch .hg-launch-live b{display:block;font-size:30px;font-size:clamp(30px,5cqw,58px);font-weight:900;line-height:1.15;color:#3b1fa8;}" +
      /* same look as the old section's Become a Vendor button */
      "#hg-launch .hg-launch-dl{display:inline-flex;align-items:center;justify-content:center;margin-top:12px;padding:12px 24px;border-radius:8px;border:2px solid #000;" +
        "background:#000;color:#fff;font-size:14px;font-weight:600;line-height:1.2;text-decoration:none;white-space:nowrap;}" +
      "#hg-launch [hidden]{display:none!important;}" +
      /* the Download HyperGo button is website only */
      "html.hg-native-app #hg-launch .hg-launch-dl{display:none!important;}" +
      "@media (prefers-reduced-motion:reduce){#hg-launch *{animation:none!important;transition:none!important;}}";
    (document.head || document.documentElement).appendChild(st);
  }

  function build() {
    var tile = '<div class="hg-launch-t"><span class="hg-launch-n">00</span><span class="hg-launch-l"></span><span class="hg-launch-sub"></span></div>';
    sec = document.createElement("section");
    sec.id = "hg-launch";
    sec.className = "hg-launch";
    sec.innerHTML =
      '<div class="hg-launch-card">' +
        '<div class="hg-launch-body">' +
          '<div class="hg-launch-wait">' +
            '<span class="hg-launch-pill hg-launch-k"></span>' +
            '<span class="hg-launch-date"></span>' +
            '<div class="hg-launch-grid" role="timer">' + tile + tile + tile + tile + '</div>' +
            '<div class="hg-launch-bar"><i></i></div>' +
            '<span class="hg-launch-foot"></span>' +
          '</div>' +
          '<div class="hg-launch-live" hidden><b></b><span class="hg-launch-foot hg-launch-shop"></span><a class="hg-launch-dl" target="_blank" rel="noopener"></a></div>' +
        '</div>' +
        '<img class="hg-launch-img" alt="" width="1672" height="941" decoding="async">' +
      '</div>';
    sec.querySelector(".hg-launch-img").src = IMAGE;
    els.wait = sec.querySelector(".hg-launch-wait");
    els.k = sec.querySelector(".hg-launch-k");
    els.date = sec.querySelector(".hg-launch-date");
    els.bar = sec.querySelector(".hg-launch-bar i");
    els.foot = sec.querySelector(".hg-launch-foot");
    els.live = sec.querySelector(".hg-launch-live");
    els.liveText = els.live.querySelector("b");
    els.shop = sec.querySelector(".hg-launch-shop");
    els.dl = sec.querySelector(".hg-launch-dl");
    var t = sec.querySelectorAll(".hg-launch-t");
    for (var i = 0; i < t.length; i++) tiles.push({ n: t[i].querySelector(".hg-launch-n"), l: t[i].querySelector(".hg-launch-l"), s: t[i].querySelector(".hg-launch-sub") });
    var apple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent || "");
    els.dl.href = apple ? APP_STORE : GOOGLE_PLAY;
  }

  /* a short flip each time a number changes (restarted by re-adding the class) */
  function setNum(el, v) {
    if (el.textContent === v) return;
    el.textContent = v;
    el.classList.remove("hg-launch-flip");
    void el.offsetWidth;
    el.classList.add("hg-launch-flip");
  }

  /* everything is computed from the real time left, so a background tab or a locked phone shows the right time on return,
     and the device's time zone does not matter (LAUNCH_AT carries Bahrain's +03:00) */
  function render() {
    if (!sec) return;
    var ar = isAr(), t = TEXT[ar ? "ar" : "en"];
    var now = Date.now(), left = LAUNCH_MS - now, live = !(left > 0);
    var key = (ar ? "ar" : "en") + (live ? "1" : "0") + (isApp() ? "a" : "w");
    if (key !== lastKey) {
      lastKey = key;
      sec.setAttribute("aria-label", t.aria);
      setText(els.k, t.tag);
      setText(els.date, t.date);
      for (var i = 0; i < 4; i++) {
        setText(tiles[i].l, t.units[i]);
        setText(tiles[i].s, t.sub ? t.sub[i] : "");
        tiles[i].s.hidden = !t.sub;
      }
      setText(els.foot, t.foot);
      setText(els.liveText, t.live);
      setText(els.shop, t.shop);
      setText(els.dl, t.dl);
      els.wait.hidden = live;
      els.live.hidden = !live;
      els.dl.hidden = isApp();
    }
    if (live) return;
    var s = Math.ceil(left / 1000);
    var v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
    for (var j = 0; j < 4; j++) setNum(tiles[j].n, pad(v[j]));
    if (isFinite(START_MS) && LAUNCH_MS > START_MS) {
      var w = Math.min(100, Math.max(3, (now - START_MS) / (LAUNCH_MS - START_MS) * 100)).toFixed(2) + "%";
      if (els.bar.style.width !== w) els.bar.style.width = w;
    }
  }

  function schedule() {
    clearTimeout(timer);
    render();
    if (Date.now() >= LAUNCH_MS) return; /* launched: no more ticking */
    timer = setTimeout(schedule, 1000 - (Date.now() % 1000) + 15);
  }

  /* keep the section as the first block of the homepage, right under the header; never more than one copy */
  function ensure() {
    var home = document.querySelector("#MultiVendorHome .home-page-content");
    if (!home) return;
    if (!sec) { addStyle(); build(); lastKey = ""; render(); }
    if (home.firstElementChild !== sec) home.insertBefore(sec, home.firstChild);
  }

  var queued = false;
  function queue() {
    if (queued) return;
    queued = true;
    (window.requestAnimationFrame || setTimeout)(function () { queued = false; try { ensure(); } catch (e) {} });
  }

  function start() {
    try { ensure(); } catch (e) {}
    try {
      new MutationObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          var tg = list[i].target;
          if (sec && (tg === sec || sec.contains(tg))) continue; /* our own number changes */
          queue();
          return;
        }
      }).observe(document.body, { childList: true, subtree: true });
      /* language switch: labels, date and button text change right away; the countdown keeps running */
      new MutationObserver(function () { render(); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "dir", "class"] });
    } catch (e) {}
    document.addEventListener("visibilitychange", function () { if (!document.hidden) schedule(); });
    window.addEventListener("pageshow", schedule);
    window.addEventListener("focus", schedule);
    schedule();
  }

  if (!isFinite(LAUNCH_MS)) return;
  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
