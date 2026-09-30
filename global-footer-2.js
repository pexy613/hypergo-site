(function(){
  const V="97";
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
    /* Keep the same scroll containers and tiles while typing/clearing a query. */
    if(q){if(box)box.hidden=true;return;}
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
  function setSearchFocus(root,on){
    if(!window.matchMedia("(max-width:959px)").matches)return;
    document.documentElement.classList.toggle("hg-search-input-active",!!on);
    if(!root)return;
    const header=root.querySelector(".scheme-global-search-mobile-header"),strip=document.querySelector(".native-status-bar-bg");
    if(header)root.style.setProperty("--hg-search-header-height",header.getBoundingClientRect().height+"px");
    root.style.setProperty("--hg-search-status-height",(strip?strip.getBoundingClientRect().height:0)+"px");
  }
  function keepSearchVisible(root){
    if(!window.matchMedia("(max-width:959px)").matches)return;
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
    const reset=()=>{
      if(window.scrollTo)window.scrollTo(0,0);
      for(let el=root.parentElement;el&&el!==document.body;el=el.parentElement)if(el.scrollTop)el.scrollTop=0;
    };
    if(window.requestAnimationFrame)window.requestAnimationFrame(reset);else setTimeout(reset,0);
  }
  function liveSearch(input){
    if(typeof clearTimeout==="function")clearTimeout(autoSearchTimer);
    const query=String(input.value||"").trim();
    if(query.length===1||composing.has(input))return;
    autoSearchTimer=setTimeout(()=>{
      if(!document.getElementById('MultiVendorSearch')||(input.isConnected===false||(document.contains&&!document.contains(input)))||String(input.value||"").trim()!==query)return;
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
    ensureCart(root);ensureDiscovery(root);tagResults(root);
    if(input&&!bound.has(input)){
      bound.add(input);
      input.addEventListener("focus",()=>{const current=document.getElementById('MultiVendorSearch');if(current){setSearchFocus(current,true);keepSearchVisible(current);}});
      input.addEventListener("input",()=>{const current=document.getElementById('MultiVendorSearch');if(!current){clearTimeout(autoSearchTimer);return;}setSearchFocus(current,true);keepSearchVisible(current);setTimeout(run,0);liveSearch(input);});
      input.addEventListener("compositionstart",()=>{composing.add(input);clearTimeout(autoSearchTimer);});
      input.addEventListener("compositionend",()=>{composing.delete(input);if(document.getElementById('MultiVendorSearch'))liveSearch(input);});
      input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.hgAutoSearch&&!e.isComposing){clearTimeout(autoSearchTimer);if(document.getElementById('MultiVendorSearch'))remember(input.value);}});
      input.addEventListener("blur",()=>{if(document.getElementById('MultiVendorSearch'))remember(input.value);setTimeout(()=>{if(document.activeElement!==input)setSearchFocus(document.getElementById('MultiVendorSearch'),false);},120);});
    }
    /* Only replace the label text; preserve Vuetify's content, slider and ripple nodes. */
    root.querySelectorAll(".v-tab").forEach(t=>{
      const walker=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);let node;
      while((node=walker.nextNode()))if(/^merchants$/i.test(node.nodeValue.trim()))node.nodeValue=(document.documentElement.lang||"").startsWith("ar")?"المتاجر":"Stores";
    });
  }
  run();
  let searchRunTimer;
  new MutationObserver(()=>{clearTimeout(searchRunTimer);searchRunTimer=setTimeout(run,80);}).observe(document.body,{childList:true,subtree:true});
  setInterval(run,1000);
})();
