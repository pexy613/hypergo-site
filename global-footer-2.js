/* hg-version 2026-10-07-1721 */
(function(){
  const V="101";
  const CART='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V7a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 .92l1 12A2 2 0 0 1 19 23H5a2 2 0 0 1-2-2.08l1-12A1 1 0 0 1 5 8h2Zm2 0h6V7a3 3 0 0 0-6 0v1Z" fill="#111"/></svg>';
  const esc=t=>String(t==null?"":t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const img=m=>{const x=m&&m.images,l=x&&x.logo&&(x.logo.image_url||x.logo.image_thumb_url),c=x&&x.cover&&(x.cover.image_url||x.cover.image_thumb_url);return l||c||"";};
  const href=(m,loc)=>"/"+loc+"/m/"+encodeURIComponent(m.slug)+"/"+(m._id||m.id);
  function cartData(){
    try{const x=JSON.parse(localStorage.getItem("vuex")||"{}"),a=x.Cart&&x.Cart.cart,c=Array.isArray(a)?a[0]:a;return c||null;}catch(e){return null;}
  }
  function searchInput(root){return root.querySelector(".mobile-search-input input")||root.querySelector("input")||document.querySelector("#AppBar .web-main-search input");}
  function setNativeSearch(q){
    const root=document.getElementById("MultiVendorSearch"),input=root&&searchInput(root);
    if(!input)return;
    const set=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set;
    set.call(input,q);input.dispatchEvent(new Event("input",{bubbles:true}));input.dispatchEvent(new Event("change",{bubbles:true}));input.focus();
  }
  function recent(){
    try{const a=JSON.parse(localStorage.getItem("hg-search-recent")||localStorage.getItem("hypergo_recent_searches")||"[]");return Array.isArray(a)?a.filter(x=>typeof x==="string"&&x.trim()).slice(0,6):[];}catch(e){return [];}
  }
  function remember(q){
    q=String(q||"").trim();if(q.length<2)return;
    const a=recent().filter(x=>x.toLowerCase()!==q.toLowerCase());a.unshift(q);try{localStorage.setItem("hg-search-recent",JSON.stringify(a.slice(0,6)));}catch(e){}
  }
  function ensureCart(root){
    const hdr=root.querySelector(".scheme-global-search-mobile-header");if(!hdr)return;
    let b=document.getElementById("hg-search-cart");if(!b){b=document.createElement("button");b.id="hg-search-cart";b.type="button";b.innerHTML=CART+'<span class="hg-sc-badge"></span>';hdr.appendChild(b);b.onclick=()=>{
      const nativeCart=document.querySelector("#MultiVendorBottomNav [data-hg-nav='cart'] button")||document.querySelector("#AppBar .cart-btn");
      if(nativeCart){nativeCart.click();return;}
      const c=cartData(),id=c&&(c._id||c.id||c.cart_id),loc=(document.documentElement.lang||"en").startsWith("ar")?"ar":"en";
      if(id){const app=document.querySelector("#app"),r=app&&app.__vue_app__&&app.__vue_app__.config.globalProperties.$router;if(r)r.push("/"+loc+"/checkout?cart_id="+encodeURIComponent(id));else location.href="/"+loc+"/checkout?cart_id="+encodeURIComponent(id);}
    };}
    const label=(document.documentElement.lang||"").startsWith("ar")?"سلة التسوق":"Cart";
    if(b.getAttribute("aria-label")!==label)b.setAttribute("aria-label",label);
    const c=cartData(),n=c&&(c.total_items||c.items_count||0),badge=b.querySelector(".hg-sc-badge"),count=String(n||"");
    if(b.classList.contains("has-items")!==!!n)b.classList.toggle("has-items",!!n);
    if(badge.textContent!==count)badge.textContent=count;
  }
  function ensureDiscovery(root){
    const input=searchInput(root),q=input?input.value.trim():"";
    let box=document.getElementById("hg-search-discovery");
    /* Keep the same scroll containers and tiles while typing/clearing a query.
       v99 (app): the discovery sections stay on screen while typing, until the loading state or results replace them,
       so the page no longer flashes blank. */
    if(q){
      const app=document.documentElement.classList.contains("hg-native-app");
      const replaced=root.classList.contains("hg-loading")||root.classList.contains("hg-has-results");
      if(box)box.hidden=!app||replaced;
      return;
    }
    const native=root.querySelector(".recent-searches");if(!native)return;
    if(!box){box=document.createElement("div");box.id="hg-search-discovery";native.insertAdjacentElement("afterend",box);}
    box.hidden=false;
    const ar=(document.documentElement.lang||"").startsWith("ar"),loc=ar?"ar":"en",rec=recent(),merchants=(Array.isArray(window.__hgSearchMerchants)?window.__hgSearchMerchants:[]).filter(m=>img(m)&&m.slug&&(m._id||m.id)).slice(0,12);
    const pops=ar?["برغر","بيتزا","قهوة","صيدلية","ورد","إلكترونيات","عطور","تغذية","سوبرماركت","مستلزمات الحيوانات"]:["Burgers","Pizza","Coffee","Pharmacy","Flowers","Electronics","Perfume","Nutrition","Supermarket","Pet supplies"];
    /* Polling may detect newly loaded merchants, but must not replace a tile every 350ms.
       Compare source data, not innerHTML: other existing scripts translate visible text. */
    const sig=JSON.stringify([V,loc,rec,merchants.map(m=>[m._id||m.id,m.slug,m.name,img(m)])]);
    if(box.dataset.sig===sig)return;
    if(box.dataset.touching==="1")return;
    if(!box.dataset.gestures){
      box.dataset.gestures="1";
      box.addEventListener("touchstart",()=>{box.dataset.touching="1";},{passive:true});
      const release=()=>{box.dataset.touching="0";};
      box.addEventListener("touchend",release,{passive:true});
      box.addEventListener("touchcancel",release,{passive:true});
    }
    let h="";
    if(rec.length)h+='<section class="hg-sd-sec"><div class="hg-sd-head"><div><div class="hg-sd-title">'+(ar?"عمليات البحث الأخيرة":"Recent searches")+'</div></div></div><div class="hg-sd-chips">'+rec.map(x=>'<button class="hg-sd-chip" data-q="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div></section>';
    if(merchants.length)h+='<section class="hg-sd-sec"><div class="hg-sd-head"><div><div class="hg-sd-title">'+(ar?"متاجر قريبة منك":"Brands near you")+'</div><div class="hg-sd-sub">'+(ar?"ادخل مباشرة إلى المتجر":"Jump straight into a store")+'</div></div></div><div class="hg-sd-brands">'+merchants.map(m=>'<a class="hg-sd-brand" href="'+href(m,loc)+'"><div class="hg-sd-brand-img" style="background-image:url(&quot;'+esc(img(m))+'&quot;)"></div><div class="hg-sd-brand-name">'+esc(m.name)+'</div></a>').join("")+'</div></section>';
    h+='<section class="hg-sd-sec hg-sd-popular"><div class="hg-sd-head"><div><div class="hg-sd-title">'+(ar?"اقتراحات للبحث":"Search suggestions")+'</div></div></div><div class="hg-sd-chips">'+pops.map(x=>'<button type="button" class="hg-sd-chip pop" data-q="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div></section>';
    const railKey=el=>el.classList.contains("hg-sd-brands")?"brands":el.closest(".hg-sd-popular")?"suggestions":"recent";
    const scrolls=new Map([...box.querySelectorAll(".hg-sd-chips,.hg-sd-brands")].map(el=>[railKey(el),el.scrollLeft]));
    box.innerHTML=h;box.dataset.v=V;box.dataset.sig=sig;
    box.querySelectorAll(".hg-sd-chips,.hg-sd-brands").forEach(el=>{el.scrollLeft=scrolls.get(railKey(el))||0;});
    box.querySelectorAll("[data-q]").forEach(b=>{b.type="button";b.onclick=()=>{remember(b.dataset.q);setNativeSearch(b.dataset.q);};});
    box.querySelectorAll("a[href]").forEach(a=>a.onclick=e=>{const app=document.querySelector("#app"),r=app&&app.__vue_app__&&app.__vue_app__.config.globalProperties.$router;if(r){e.preventDefault();r.push(a.getAttribute("href"));}});
  }
  function tagResults(root){
    root.querySelectorAll(".product-card-horizontal,.product-horizontal-cards > .v-card").forEach(card=>{
      /* Prefer the actual product wrapper over a nested generic Vuetify card. */
      const pc=card;
      if(pc&&root.contains(pc)){
        if(!pc.classList.contains("hg-search-product-card"))pc.classList.add("hg-search-product-card");
        const rail=pc.closest(".searched-products-rail")?.querySelector('.slider-inner-container')||pc.parentElement;
        if(rail&&!rail.classList.contains("hg-search-product-rail"))rail.classList.add("hg-search-product-rail");
        if(pc.parentElement!==rail&&pc.parentElement.classList.contains("hg-search-product-rail"))pc.parentElement.classList.remove("hg-search-product-rail");
      }
      const group=pc&&pc.closest(".scheme-global-search-product-group,.merchant-card");
      if(group&&!group.classList.contains("hg-search-product-group"))group.classList.add("hg-search-product-group");
    });
    root.querySelectorAll(".hg-search-product-group").forEach(group=>{
      group.querySelectorAll("a,button,.v-btn").forEach(el=>{
        const t=(el.textContent||"").trim();
        if(/^(view all|عرض الكل)$/i.test(t)&&!el.classList.contains("hg-search-view-all"))el.classList.add("hg-search-view-all");
      });
    });
  }
  const bound=new WeakSet(),composing=new WeakSet();
  let autoSearchTimer=null,openedRoot=null;
  /* v98: the two measured sizes used to live on #MultiVendorSearch. Hyperzod rebuilds that element when a query is
     submitted, so they vanished mid-typing and the pinned header snapped under the status bar (76px fallback, top:0).
     They now live on <html> and are re-measured on every run() while the field is active. */
  function measureSearchHeader(root){
    const html=document.documentElement,header=root&&root.querySelector(".scheme-global-search-mobile-header"),strip=document.querySelector(".native-status-bar-bg");
    if(header){const h=header.getBoundingClientRect().height;if(h>40)html.style.setProperty("--hg-search-header-height",h+"px");}
    const sh=strip?strip.getBoundingClientRect().height:0;
    html.style.setProperty("--hg-search-status-height",sh+"px");
    /* v99: while pinned, "left:0" is measured from whatever box contains the header. In the app that box is the search
       canvas, which sits 16px off-screen (gutter fix), so the header landed 16px left with a white gap on the right.
       Measure where it actually is and shift it back so its left edge is the screen edge. Converges in one pass. */
    /* v100: only while the field is really focused. Measuring during the submit/keyboard-close transition read
       positions mid-move and pushed the header down (white strip) and then up (cropped) before it settled. */
    const focusedInput=root&&root.contains(document.activeElement)&&document.activeElement.tagName==="INPUT";
    if(header&&focusedInput&&html.classList.contains("hg-search-input-active")&&getComputedStyle(header).position==="fixed"){
      const r=header.getBoundingClientRect(),cur=parseFloat(html.style.getPropertyValue("--hg-search-fixed-shift"))||0,curV=parseFloat(html.style.getPropertyValue("--hg-search-fixed-vshift"))||0;
      if(Math.abs(r.left)>0.5)html.style.setProperty("--hg-search-fixed-shift",(cur-r.left)+"px");
      /* same for the vertical position: the header must sit right under the status strip */
      if(Math.abs(r.top-sh)>0.5)html.style.setProperty("--hg-search-fixed-vshift",(curV+(sh-r.top))+"px");
    }
  }
  function unpinSearchHeader(){
    const html=document.documentElement;
    if(html.classList.contains("hg-search-input-active"))html.classList.remove("hg-search-input-active");
    html.style.removeProperty("--hg-search-fixed-shift");
    html.style.removeProperty("--hg-search-fixed-vshift");
  }
  /* v101 (app): the native app resizes its web view when the keyboard opens (panel readings: viewport height 852 -> 472,
     offset 0, scroll 0), so the sticky header already stays on screen by itself. Pinning it and resetting the page scroll
     were what moved it: when the pin was released the header sat 17px lower for a few frames (white strip), and on the
     first search the pinned position was wrong (header cut off under the status bar). In the app, never pin and never
     reset the scroll. The website keeps its behaviour. */
  function isNativeApp(){return document.documentElement.classList.contains("hg-native-app");}
  function setSearchFocus(root,on){
    if(!window.matchMedia("(max-width:959px)").matches)return;
    if(isNativeApp()){unpinSearchHeader();return;}
    if(!on){unpinSearchHeader();return;}
    if(root)measureSearchHeader(root);
    document.documentElement.classList.toggle("hg-search-input-active",!!on);
    /* the pinned position only exists after the class is on: measure again right away so any offset is corrected before paint */
    if(root&&on&&window.requestAnimationFrame)requestAnimationFrame(()=>{measureSearchHeader(root);requestAnimationFrame(()=>measureSearchHeader(root));});
  }
  /* Results text that has no class of its own: the "5+ Results" count, "Not Rated", and a "0" delivery time. */
  function tagResultsText(root){
    const ar=(document.documentElement.lang||"").startsWith("ar");
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode())){
      const v=node.nodeValue.trim();if(!v)continue;
      const el=node.parentElement;if(!el||el.closest("#hg-search-discovery,.scheme-global-search-mobile-header,.v-tab,input,textarea"))continue;
      if(/^\d+\+?\s*(results?)$/i.test(v)||/^\d+\+?\s*(نتيجة|نتائج)$/.test(v)){if(!el.classList.contains("hg-search-count"))el.classList.add("hg-search-count");continue;}
      if(/^not rated$/i.test(v)||/^غير مقيم/.test(v)){const r=el.closest("#SearchedMerchantRating")||el;if(!r.classList.contains("hg-search-norating"))r.classList.add("hg-search-norating");continue;}
      if(/^0\s*(mins?|min|دقيقة|دقائق)?$/i.test(v)&&el.closest("#SearchedMerchantAverageTimeAndDistance")){node.nodeValue="";const dot=el.querySelector("div");if(dot&&!dot.classList.contains("hg-search-nodot"))dot.classList.add("hg-search-nodot");}
    }
  }
  function keepSearchVisible(root){
    if(!window.matchMedia("(max-width:959px)").matches)return;
    if(isNativeApp())return;
    const reset=()=>{
      if(window.scrollTo)window.scrollTo(0,0);
      for(let el=root.parentElement;el&&el!==document.body;el=el.parentElement)if(el.scrollTop)el.scrollTop=0;
    };
    reset();
    if(window.requestAnimationFrame)window.requestAnimationFrame(reset);
    setTimeout(reset,40);
  }
  function resetSearchPosition(root){
    if(openedRoot===root)return;
    openedRoot=root;
    if(isNativeApp())return;
    const reset=()=>{
      if(window.scrollTo)window.scrollTo(0,0);
      for(let el=root.parentElement;el&&el!==document.body;el=el.parentElement)if(el.scrollTop)el.scrollTop=0;
    };
    if(window.requestAnimationFrame)window.requestAnimationFrame(reset);else setTimeout(reset,0);
  }
  function liveSearch(input){
    if(typeof clearTimeout==="function")clearTimeout(autoSearchTimer);
    const query=String(input.value||"").trim();
    /* TEMP-DIAGNOSTIC-START (hgperf hook: no live search for the secret words hgperf / hgnoswipe or their first letters) */
    {const ql=query.toLowerCase();if(ql.length>=3&&("hgperf".indexOf(ql)===0||"hgnoswipe".indexOf(ql)===0))return;}
    /* TEMP-DIAGNOSTIC-END */
    if(query.length===1||composing.has(input))return;
    autoSearchTimer=setTimeout(()=>{
      if(!document.getElementById('MultiVendorSearch')||(input.isConnected===false||(document.contains&&!document.contains(input)))||String(input.value||"").trim()!==query)return;
      /* v102 (app): the fake Enter below made Hyperzod's own Enter handling call blur() on the field, which closed the
         keyboard after every pause (hgdiag: blur at the same moment as the fake Enter). Hyperzod keeps the search word in
         the page address (?q=..., hgdiag: /en/search?q=Gh -> /en/search?q=Burg at that Enter), so in the app the search
         is started by putting the word in the address instead. No key press reaches the field, so nothing blurs it and
         the keyboard stays open. The website keeps the Enter.
         v103 (app): v102 still fell back to the fake Enter in two cases - when the field had been emptied (no word, so
         the address branch was skipped) and when the router could not be reached - and that Enter closed the keyboard
         again. In the app the Enter is now never pressed: an emptied field takes the word out of the address the same
         way, and if the router cannot be reached the live search simply waits for the real Return key. */
      if(isNativeApp()){
        try{
          const app=document.querySelector("#app"),r=app&&app.__vue_app__&&app.__vue_app__.config.globalProperties.$router,cur=r&&r.currentRoute&&r.currentRoute.value;
          if(r&&cur&&String((cur.query||{}).q||"")!==query){
            const nq=Object.assign({},cur.query);
            if(query)nq.q=query;else delete nq.q;
            r.replace({path:cur.path,query:nq,hash:cur.hash});
          }
        }catch(e){}
        return;
      }
      ["keydown","keyup"].forEach(type=>{
        let event;
        try{event=new KeyboardEvent(type,{key:"Enter",code:"Enter",keyCode:13,which:13,bubbles:true,cancelable:true});}
        catch(e){event=new Event(type,{bubbles:true,cancelable:true});Object.defineProperty(event,"key",{value:"Enter"});}
        event.hgAutoSearch=true;
        input.dispatchEvent(event);
      });
    },450);
  }
  function run(){
    const root=document.getElementById("MultiVendorSearch");if(!root){clearTimeout(autoSearchTimer);if(document.documentElement.classList.contains("hg-search-input-active"))document.documentElement.classList.remove("hg-search-input-active");openedRoot=null;return;}
    resetSearchPosition(root);
    const input=searchInput(root),q=input?input.value.trim():"";
    if(root.classList.contains("hg-has-query")!==!!q)root.classList.toggle("hg-has-query",!!q);
    /* v99: what the results area currently holds - real results, or Hyperzod's loading skeleton */
    const hasResults=!!root.querySelector(".scheme-global-search-product-group,.tab-item-merchant,.hg-search-count");
    const loading=!hasResults&&!!q&&!!root.querySelector(".v-skeleton-loader,[class*='hz-skeleton']");
    if(root.classList.contains("hg-has-results")!==hasResults)root.classList.toggle("hg-has-results",hasResults);
    if(root.classList.contains("hg-loading")!==loading)root.classList.toggle("hg-loading",loading);
    ensureCart(root);ensureDiscovery(root);tagResults(root);
    try{tagResultsText(root);}catch(e){}
    if(document.documentElement.classList.contains("hg-search-input-active"))measureSearchHeader(root);
    if(input&&!bound.has(input)){
      bound.add(input);
      input.addEventListener("focus",()=>{const current=document.getElementById('MultiVendorSearch');if(current){setSearchFocus(current,true);keepSearchVisible(current);}});
      input.addEventListener("input",()=>{const current=document.getElementById('MultiVendorSearch');if(!current){clearTimeout(autoSearchTimer);return;}if(document.activeElement===input){setSearchFocus(current,true);keepSearchVisible(current);}setTimeout(run,0);liveSearch(input);});
      input.addEventListener("compositionstart",()=>{composing.add(input);clearTimeout(autoSearchTimer);});
      input.addEventListener("compositionend",()=>{composing.delete(input);if(document.getElementById('MultiVendorSearch'))liveSearch(input);});
      input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.hgAutoSearch&&!e.isComposing){clearTimeout(autoSearchTimer);if(document.getElementById('MultiVendorSearch'))remember(input.value);}});
      input.addEventListener("blur",()=>{if(document.getElementById('MultiVendorSearch'))remember(input.value);if(!input.isConnected){unpinSearchHeader();return;}setTimeout(()=>{if(document.activeElement!==input)setSearchFocus(document.getElementById('MultiVendorSearch'),false);},120);});
    }
    /* Only replace the label text; preserve Vuetify's content, slider and ripple nodes. */
    root.querySelectorAll(".v-tab").forEach(t=>{
      const walker=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);let node;
      while((node=walker.nextNode()))if(/^merchants$/i.test(node.nodeValue.trim()))node.nodeValue=(document.documentElement.lang||"").startsWith("ar")?"المتاجر":"Stores";
    });
  }
  run();
  let searchRunTimer;
  new MutationObserver(()=>{
    /* v100: runs before the browser paints. If the search screen was rebuilt, or no field inside it has focus any more,
       the pinned-header mode is dropped right here, so the rebuilt header never shows up pinned with stale offsets. */
    if(document.documentElement.classList.contains("hg-search-input-active")){
      const cur=document.getElementById("MultiVendorSearch"),ae=document.activeElement;
      if(!cur||cur!==openedRoot||!(ae&&ae.tagName==="INPUT"&&cur.contains(ae)))unpinSearchHeader();
    }
    clearTimeout(searchRunTimer);searchRunTimer=setTimeout(run,80);
  }).observe(document.body,{childList:true,subtree:true});
  setInterval(run,1000);
})();
