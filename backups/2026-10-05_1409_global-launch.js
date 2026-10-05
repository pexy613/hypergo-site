/* hg-version 2026-10-05-1410 */
/* HYPERGO LAUNCH COUNTDOWN - homepage section directly under the header, on the website and in the app.
   Loaded by the Global Custom HTML Head box. The image is launch-countdown.jpg in this repo.
   To remove the section later: empty that box, then delete this file and launch-countdown.jpg. */
(function () {
  "use strict";
  if (window.__hgLaunchLoaded) return;
  window.__hgLaunchLoaded = true;

  /* ===== LAUNCH DATE AND TIME - Bahrain time (+03:00). Change only this line. ===== */
  var LAUNCH_AT = "2026-10-25T00:00:00+03:00";

  var IMAGE = "https://pexy613.github.io/hypergo-site/launch-countdown.jpg";
  /* the download links the site already uses (footer badges) */
  var APP_STORE = "https://apps.apple.com/app/hypergo/id6756649680";
  var GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.customer.hypergo&hl=en";

  var TEXT = {
    en: { tag: "Launching", date: "October 25", units: ["Days", "Hours", "Minutes", "Seconds"], live: "We're live", dl: "Download HyperGo", aria: "HyperGo launch countdown" },
    ar: { tag: "\u0627\u0644\u0625\u0637\u0644\u0627\u0642", date: "25 \u0623\u0643\u062a\u0648\u0628\u0631", units: ["\u0623\u064a\u0627\u0645", "\u0633\u0627\u0639\u0627\u062a", "\u062f\u0642\u0627\u0626\u0642", "\u062b\u0648\u0627\u0646\u064a"], live: "\u0646\u062d\u0646 \u0645\u062a\u0627\u062d\u0648\u0646 \u0627\u0644\u0622\u0646", dl: "\u062d\u0645\u0651\u0644 HyperGo", aria: "\u0627\u0644\u0639\u062f \u0627\u0644\u062a\u0646\u0627\u0632\u0644\u064a \u0644\u0625\u0637\u0644\u0627\u0642 HyperGo" }
  };

  var LAUNCH_MS = Date.parse(LAUNCH_AT);
  var sec = null, cells = [], els = {}, timer = 0, lastKey = "";

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
      "#hg-launch{box-sizing:border-box;width:100%;padding:16px 16px 8px;background:#fff;}" +
      "@media (min-width:960px){#hg-launch{padding:48px 48px 24px;}}" +
      "#hg-launch *{box-sizing:border-box;}" +
      /* the image card: whole image, never stretched or cropped, old section's 8px corners and border */
      "#hg-launch .hg-launch-card{position:relative;max-width:1100px;margin:0 auto;aspect-ratio:1672/941;border-radius:8px;border:1px solid #EDEDED;overflow:hidden;background:#F6F6F8;container-type:inline-size;}" +
      "#hg-launch .hg-launch-img{display:block;width:100%;height:100%;object-fit:cover;}" +
      /* countdown centred in the open upper half of the image, above the bag and the scooter */
      "#hg-launch .hg-launch-over{position:absolute;top:0;left:10%;right:10%;height:52%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:inherit;color:#1B2023;}" +
      "#hg-launch .hg-launch-tag{display:flex;align-items:center;gap:.5em;font-weight:700;color:#5A29DE;text-transform:uppercase;letter-spacing:.12em;line-height:1.2;" +
        "font-size:clamp(10px,2.6vw,18px);font-size:clamp(10px,2.3cqw,18px);}" +
      "html[dir='rtl'] #hg-launch .hg-launch-tag,html[lang^='ar'] #hg-launch .hg-launch-tag{letter-spacing:0;text-transform:none;}" +
      "#hg-launch .hg-launch-tag .hg-launch-sep{opacity:.6;}" +
      "#hg-launch .hg-launch-cd{display:flex;justify-content:center;margin-top:8px;margin-top:clamp(8px,1.6cqw,18px);gap:6px;gap:clamp(6px,1.4cqw,16px);}" +
      "#hg-launch .hg-launch-cell{display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,.8);border-radius:12px;border-radius:clamp(8px,1.4cqw,16px);" +
        "box-shadow:0 1px 6px rgba(60,30,140,.12);padding:6px 4px;padding:clamp(6px,1.3cqw,14px) 4px;" +
        "min-width:46px;min-width:clamp(46px,12cqw,120px);}" +
      /* fixed-width digits: the numbers never shift the layout when they change */
      "#hg-launch .hg-launch-n{display:block;font-weight:700;color:#5A29DE;line-height:1.05;font-variant-numeric:tabular-nums;font-feature-settings:'tnum' 1;" +
        "font-size:clamp(20px,5.8vw,64px);font-size:clamp(20px,6.2cqw,64px);}" +
      "#hg-launch .hg-launch-u{display:block;margin-top:3px;font-weight:500;color:#1B2023;line-height:1.2;white-space:nowrap;" +
        "font-size:clamp(9px,2vw,15px);font-size:clamp(9px,1.6cqw,15px);}" +
      "#hg-launch .hg-launch-live{margin-top:8px;margin-top:clamp(8px,1.6cqw,18px);font-weight:700;color:#5A29DE;line-height:1.15;" +
        "font-size:clamp(24px,6.4vw,64px);font-size:clamp(24px,6.4cqw,64px);}" +
      /* same look as the old section's Become a Vendor button */
      "#hg-launch .hg-launch-dl{display:inline-flex;align-items:center;justify-content:center;margin-top:12px;margin-top:clamp(10px,2cqw,24px);" +
        "padding:10px 20px;padding:clamp(10px,1.3cqw,14px) clamp(20px,3cqw,32px);border-radius:8px;border:2px solid #000;background:#000;color:#fff;" +
        "font-size:14px;font-weight:600;line-height:1.2;text-decoration:none;white-space:nowrap;}" +
      "#hg-launch [hidden]{display:none!important;}" +
      /* the Download HyperGo button is website only */
      "html.hg-native-app #hg-launch .hg-launch-dl{display:none!important;}";
    (document.head || document.documentElement).appendChild(st);
  }

  function build() {
    sec = document.createElement("section");
    sec.id = "hg-launch";
    sec.className = "hg-launch";
    sec.innerHTML =
      '<div class="hg-launch-card">' +
        '<img class="hg-launch-img" alt="" width="1672" height="941" decoding="async">' +
        '<div class="hg-launch-over">' +
          '<div class="hg-launch-tag"><span class="hg-launch-k"></span><span class="hg-launch-sep">\u00b7</span><span class="hg-launch-d"></span></div>' +
          '<div class="hg-launch-cd" role="timer">' +
            '<div class="hg-launch-cell"><span class="hg-launch-n">00</span><span class="hg-launch-u"></span></div>' +
            '<div class="hg-launch-cell"><span class="hg-launch-n">00</span><span class="hg-launch-u"></span></div>' +
            '<div class="hg-launch-cell"><span class="hg-launch-n">00</span><span class="hg-launch-u"></span></div>' +
            '<div class="hg-launch-cell"><span class="hg-launch-n">00</span><span class="hg-launch-u"></span></div>' +
          '</div>' +
          '<div class="hg-launch-live" hidden></div>' +
          '<a class="hg-launch-dl" hidden target="_blank" rel="noopener"></a>' +
        '</div>' +
      '</div>';
    sec.querySelector(".hg-launch-img").src = IMAGE;
    els.tag = sec.querySelector(".hg-launch-tag");
    els.k = sec.querySelector(".hg-launch-k");
    els.d = sec.querySelector(".hg-launch-d");
    els.cd = sec.querySelector(".hg-launch-cd");
    els.live = sec.querySelector(".hg-launch-live");
    els.dl = sec.querySelector(".hg-launch-dl");
    var c = sec.querySelectorAll(".hg-launch-cell");
    for (var i = 0; i < c.length; i++) cells.push({ n: c[i].querySelector(".hg-launch-n"), u: c[i].querySelector(".hg-launch-u") });
    var apple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent || "");
    els.dl.href = apple ? APP_STORE : GOOGLE_PLAY;
  }

  /* everything is computed from the real time left, so a background tab or a locked phone shows the right time on return,
     and the device's time zone does not matter (LAUNCH_AT carries Bahrain's +03:00) */
  function render() {
    if (!sec) return;
    var t = TEXT[isAr() ? "ar" : "en"];
    var left = LAUNCH_MS - Date.now();
    var live = !(left > 0);
    var key = (t === TEXT.ar ? "ar" : "en") + (live ? "1" : "0");
    if (key !== lastKey) {
      lastKey = key;
      sec.setAttribute("aria-label", t.aria);
      setText(els.k, t.tag);
      setText(els.d, t.date);
      for (var i = 0; i < 4; i++) setText(cells[i].u, t.units[i]);
      setText(els.live, t.live);
      setText(els.dl, t.dl);
      els.tag.hidden = live;
      els.cd.hidden = live;
      els.live.hidden = !live;
      els.dl.hidden = !live || isApp();
    }
    if (live) return;
    var s = Math.ceil(left / 1000);
    var v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
    for (var j = 0; j < 4; j++) setText(cells[j].n, pad(v[j]));
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
      new MutationObserver(function () { lastKey = ""; render(); })
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
