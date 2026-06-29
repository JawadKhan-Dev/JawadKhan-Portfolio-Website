/* Jawad Khan — portfolio interactions */
const GALLERY = [{"id": "etsy-store-30-day-snapshot", "cat": "ecommerce", "title": "Etsy Store — 30-Day Snapshot", "metric": "55.2K views · $25K revenue", "type": "image", "thumb": "assets/thumbs/etsy-store-30-day-snapshot.webp", "full": "assets/full/etsy-store-30-day-snapshot.webp"}, {"id": "high-value-store-sales-traffic", "cat": "ecommerce", "title": "High-Value Store — Sales & Traffic", "metric": "Analytics breakdown", "type": "image", "thumb": "assets/thumbs/high-value-store-sales-traffic.webp", "full": "assets/full/high-value-store-sales-traffic.webp"}, {"id": "fresh-etsy-account-traffic-growth", "cat": "ecommerce", "title": "Fresh Etsy Account — Traffic Growth", "metric": "0 to ranked", "type": "image", "thumb": "assets/thumbs/fresh-etsy-account-traffic-growth.webp", "full": "assets/full/fresh-etsy-account-traffic-growth.webp"}, {"id": "l-art-etsy-shop-full-management", "cat": "ecommerce", "title": "L'Art Etsy Shop — Full Management", "metric": "End-to-end ops", "type": "image", "thumb": "assets/thumbs/l-art-etsy-shop-full-management.webp", "full": "assets/full/l-art-etsy-shop-full-management.webp"}, {"id": "l-art-etsy-performance", "cat": "ecommerce", "title": "L'Art Etsy — Performance", "metric": "Store metrics", "type": "image", "thumb": "assets/thumbs/l-art-etsy-performance.webp", "full": "assets/full/l-art-etsy-performance.webp"}, {"id": "l-art-etsy-listings-overview", "cat": "ecommerce", "title": "L'Art Etsy — Listings Overview", "metric": "Catalog view", "type": "image", "thumb": "assets/thumbs/l-art-etsy-listings-overview.webp", "full": "assets/full/l-art-etsy-listings-overview.webp"}, {"id": "urban-leather-goods-storefront", "cat": "ecommerce", "title": "Urban Leather Goods — Storefront", "metric": "Branded shopfront", "type": "image", "thumb": "assets/thumbs/urban-leather-goods-storefront.webp", "full": "assets/full/urban-leather-goods-storefront.webp"}, {"id": "urban-leather-goods-admin", "cat": "ecommerce", "title": "Urban Leather Goods — Admin", "metric": "Shop dashboard", "type": "image", "thumb": "assets/thumbs/urban-leather-goods-admin.webp", "full": "assets/full/urban-leather-goods-admin.webp"}, {"id": "1stdibs-listing-automation", "cat": "automation", "title": "1stDibs Listing Automation", "metric": "Chrome extension", "type": "image", "thumb": "assets/thumbs/1stdibs-listing-automation.webp", "full": "assets/full/1stdibs-listing-automation.webp"}, {"id": "chairish-auto-lister", "cat": "automation", "title": "Chairish Auto-Lister", "metric": "Chrome extension", "type": "image", "thumb": "assets/thumbs/chairish-auto-lister.webp", "full": "assets/full/chairish-auto-lister.webp"}, {"id": "etsy-listing-updater", "cat": "automation", "title": "Etsy Listing Updater", "metric": "Chrome extension", "type": "image", "thumb": "assets/thumbs/etsy-listing-updater.webp", "full": "assets/full/etsy-listing-updater.webp"}, {"id": "pinterest-pin-automation", "cat": "automation", "title": "Pinterest Pin Automation", "metric": "Chrome extension", "type": "image", "thumb": "assets/thumbs/pinterest-pin-automation.webp", "full": "assets/full/pinterest-pin-automation.webp"}, {"id": "youtube-automation-tool", "cat": "automation", "title": "YouTube Automation Tool", "metric": "Chrome extension", "type": "image", "thumb": "assets/thumbs/youtube-automation-tool.webp", "full": "assets/full/youtube-automation-tool.webp"}, {"id": "youtube-automation-walkthrough", "cat": "automation", "title": "YouTube Automation — Walkthrough", "metric": "Full demo · Chrome extension", "type": "video", "thumb": "assets/thumbs/youtube-automation-walkthrough.webp", "video": "assets/video/youtube-automation-walkthrough.mp4"}, {"id": "pinterest-automation-demo", "cat": "automation", "title": "Pinterest Automation — Demo", "metric": "Live demo", "type": "video", "thumb": "assets/thumbs/pinterest-automation-demo.webp", "video": "assets/video/pinterest-automation-demo.mp4"}, {"id": "amayra-instagram-insights", "cat": "social", "title": "Amayra — Instagram Insights", "metric": "1.9M views · 118K interactions", "type": "image", "thumb": "assets/thumbs/amayra-instagram-insights.webp", "full": "assets/full/amayra-instagram-insights.webp"}, {"id": "amayra-instagram-content", "cat": "social", "title": "Amayra — Instagram Content", "metric": "Feed curation", "type": "image", "thumb": "assets/thumbs/amayra-instagram-content.webp", "full": "assets/full/amayra-instagram-content.webp"}, {"id": "nova-riley-instagram-insights", "cat": "social", "title": "Nova Riley — Instagram Insights", "metric": "Growth dashboard", "type": "image", "thumb": "assets/thumbs/nova-riley-instagram-insights.webp", "full": "assets/full/nova-riley-instagram-insights.webp"}, {"id": "nova-riley-instagram-content", "cat": "social", "title": "Nova Riley — Instagram Content", "metric": "Feed curation", "type": "image", "thumb": "assets/thumbs/nova-riley-instagram-content.webp", "full": "assets/full/nova-riley-instagram-content.webp"}, {"id": "rug-kilim-pinterest-ads", "cat": "social", "title": "Rug & Kilim — Pinterest Ads", "metric": "Campaign performance", "type": "image", "thumb": "assets/thumbs/rug-kilim-pinterest-ads.webp", "full": "assets/full/rug-kilim-pinterest-ads.webp"}, {"id": "rug-kilim-monthly-stats", "cat": "social", "title": "Rug & Kilim — Monthly Stats", "metric": "Reach & engagement", "type": "image", "thumb": "assets/thumbs/rug-kilim-monthly-stats.webp", "full": "assets/full/rug-kilim-monthly-stats.webp"}, {"id": "rug-kilim-performance-graph", "cat": "social", "title": "Rug & Kilim — Performance Graph", "metric": "Trend over time", "type": "image", "thumb": "assets/thumbs/rug-kilim-performance-graph.webp", "full": "assets/full/rug-kilim-performance-graph.webp"}, {"id": "smartpick-store-pinterest", "cat": "social", "title": "SmartPick Store — Pinterest", "metric": "Profile & boards", "type": "image", "thumb": "assets/thumbs/smartpick-store-pinterest.webp", "full": "assets/full/smartpick-store-pinterest.webp"}, {"id": "smartpick-pinterest-analytics", "cat": "social", "title": "SmartPick — Pinterest Analytics", "metric": "Organic growth", "type": "image", "thumb": "assets/thumbs/smartpick-pinterest-analytics.webp", "full": "assets/full/smartpick-pinterest-analytics.webp"}, {"id": "smartpick-audience-insights", "cat": "social", "title": "SmartPick — Audience Insights", "metric": "Audience breakdown", "type": "image", "thumb": "assets/thumbs/smartpick-audience-insights.webp", "full": "assets/full/smartpick-audience-insights.webp"}, {"id": "magic-tricks-viral-tiktok", "cat": "social", "title": "Magic Tricks — Viral TikTok", "metric": "Viral reach", "type": "image", "thumb": "assets/thumbs/magic-tricks-viral-tiktok.webp", "full": "assets/full/magic-tricks-viral-tiktok.webp"}, {"id": "home-reno-tiktok-stats", "cat": "social", "title": "Home Reno — TikTok Stats", "metric": "Engagement stats", "type": "image", "thumb": "assets/thumbs/home-reno-tiktok-stats.webp", "full": "assets/full/home-reno-tiktok-stats.webp"}, {"id": "aitwo-microsoft-clarity", "cat": "ads", "title": "Aitwo — Microsoft Clarity", "metric": "Behaviour analytics", "type": "image", "thumb": "assets/thumbs/aitwo-microsoft-clarity.webp", "full": "assets/full/aitwo-microsoft-clarity.webp"}, {"id": "aitwo-search-console", "cat": "ads", "title": "Aitwo — Search Console", "metric": "Search performance", "type": "image", "thumb": "assets/thumbs/aitwo-search-console.webp", "full": "assets/full/aitwo-search-console.webp"}, {"id": "paid-social-campaign-results-3", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-3.webp", "full": "assets/full/paid-social-campaign-results-3.webp"}, {"id": "paid-social-sales-clicks-reach", "cat": "ads", "title": "Paid Social — Sales / Clicks / Reach", "metric": "143 engagements", "type": "image", "thumb": "assets/thumbs/paid-social-sales-clicks-reach.webp", "full": "assets/full/paid-social-sales-clicks-reach.webp"}, {"id": "paid-social-campaign-results-4", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-4.webp", "full": "assets/full/paid-social-campaign-results-4.webp"}, {"id": "paid-social-campaign-results-5", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-5.webp", "full": "assets/full/paid-social-campaign-results-5.webp"}, {"id": "paid-social-campaign-results-6", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-6.webp", "full": "assets/full/paid-social-campaign-results-6.webp"}, {"id": "paid-social-campaign-results-7", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-7.webp", "full": "assets/full/paid-social-campaign-results-7.webp"}, {"id": "paid-social-campaign-results-8", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-8.webp", "full": "assets/full/paid-social-campaign-results-8.webp"}, {"id": "paid-social-campaign-results-9", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-9.webp", "full": "assets/full/paid-social-campaign-results-9.webp"}, {"id": "paid-social-campaign-results-10", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-10.webp", "full": "assets/full/paid-social-campaign-results-10.webp"}, {"id": "paid-social-campaign-results-11", "cat": "ads", "title": "Paid Social — Campaign Results", "metric": "Performance report", "type": "image", "thumb": "assets/thumbs/paid-social-campaign-results-11.webp", "full": "assets/full/paid-social-campaign-results-11.webp"}];
const PLATFORMS = [["Amazon", "amazon", "FF9900"], ["Wayfair", "wayfair", "7F187F"], ["Shopify", "shopify", "95BF47"], ["eBay", "ebay", "E53238"], ["Etsy", "etsy", "F1641E"], ["Walmart", "walmart", "0071DC"], ["WooCommerce", "woocommerce", "96588A"], ["Poshmark", "poshmark", "B01E47"], ["Alibaba", "alibabadotcom", "FF6A00"], ["Newegg", "newegg", "E66A1D"], ["Houzz", "houzz", "4DBC15"], ["Faire", "faire", "1C1C1C"], ["1stDibs", "", "1A1A1A"], ["Chairish", "", "C8553D"], ["Pinterest", "pinterest", "BD081C"], ["Instagram", "instagram", "E4405F"], ["TikTok", "tiktok", "010101"], ["LinkedIn", "linkedin", "0A66C2"]];
const CATS = [{"key": "ecommerce", "num": "01", "icon": "fa-store", "title": "E-Commerce & Etsy Management", "sub": "Store builds, listings, analytics & growth", "gold": false, "tags": ["Etsy", "1stDibs", "Wayfair"], "metrics": [{"n": "55.2K", "l": "Monthly store views", "s": [3, 4, 4, 6, 7, 9, 12]}, {"n": "$25K", "l": "Revenue · 30 days", "s": [5, 6, 6, 8, 9, 11, 13]}, {"n": "+20%", "l": "Sales lift", "s": [4, 5, 5, 6, 7, 8, 9]}, {"n": "6+", "l": "Marketplaces", "s": [2, 3, 3, 4, 5, 5, 6]}], "ran": ["Built & scaled storefronts on Etsy, 1stDibs, Chairish & Wayfair", "End-to-end listing creation, SEO copy & pricing strategy", "Inventory, order fulfilment & buyer engagement"], "outcome": ["An Etsy store reached <b>$25K revenue in 30 days</b>", "Urban Leather Goods passed <b>300+ orders</b>", "Consistent <b>+20% sales lift</b> across managed stores"]}, {"key": "automation", "num": "02", "icon": "fa-robot", "title": "Automation Tools", "sub": "Custom Chrome extensions & data workflows", "gold": true, "tags": ["Chrome Extensions", "Sheets", "Scripting"], "metrics": [{"n": "8", "l": "Tools built", "s": [1, 2, 3, 4, 5, 6, 8]}, {"n": "5", "l": "Platforms automated", "s": [1, 2, 2, 3, 4, 4, 5]}, {"n": "Hours→Min", "l": "Listing time", "s": [9, 8, 6, 5, 3, 2, 1]}, {"n": "100s", "l": "Listings / run", "s": [2, 3, 4, 5, 7, 9, 11]}], "ran": ["Built Chrome extensions for 1stDibs, Chairish & Etsy auto-listing", "Pinterest pin & YouTube upload automation", "Sheets-driven bulk data & reporting workflows"], "outcome": ["Cut listing time from <b>hours to minutes</b>", "Removed repetitive manual data entry", "Scaled catalog ops <b>beyond manual limits</b>"]}, {"key": "social", "num": "03", "icon": "fa-hashtag", "title": "AI Influencer & Social Media", "sub": "Instagram, Reels & Pinterest growth", "gold": false, "tags": ["Instagram", "Reels", "Pinterest"], "metrics": [{"n": "1.9M", "l": "Amayra views / mo", "s": [3, 4, 5, 6, 8, 10, 13]}, {"n": "118.2K", "l": "Interactions", "s": [4, 5, 6, 7, 8, 10, 12]}, {"n": "265.7K", "l": "Nyla views / mo", "s": [2, 3, 4, 5, 7, 9, 11]}, {"n": "565.9K", "l": "R&K Pinterest views", "s": [3, 4, 5, 6, 7, 9, 11]}], "ran": ["Concept, content calendar & Reels for @amayramuse, @nyla.monroe1 & @novar.iley", "Hook-led short-form built for shares & saves, not just views", "Pinterest growth for Rug & Kilim & SmartPick"], "outcome": ["Amayra hit <b>1.9M views & 118.2K interactions</b> in 30 days", "One reel out-performed the last five by <b>+2,798%</b>", "Rug & Kilim reached <b>565.9K</b> monthly Pinterest views"]}, {"key": "ads", "num": "04", "icon": "fa-bullhorn", "title": "Paid Ads & Performance", "sub": "Meta, Pinterest & search campaigns", "gold": false, "tags": ["Meta Ads", "Search Console", "Clarity"], "metrics": [{"n": "12.5M", "l": "Search impressions", "s": [3, 4, 5, 6, 8, 10, 12]}, {"n": "4.6%", "l": "Average CTR", "s": [3, 4, 4, 5, 5, 6, 7]}, {"n": "2.1K", "l": "Campaign reach", "s": [2, 3, 4, 5, 6, 7, 8]}, {"n": "80%+", "l": "Scroll depth", "s": [4, 5, 6, 6, 7, 8, 9]}], "ran": ["Meta & Pinterest paid campaigns with full conversion tracking", "Behaviour analytics via Microsoft Clarity & Search Console", "Audience targeting & weekly performance reporting"], "outcome": ["<b>12.5M</b> search impressions at <b>4.6% CTR</b>", "Tracked on-site behaviour to <b>80%+ scroll depth</b>", "Clear, reportable campaign performance"]}];
const CAT_LABEL = {ecommerce:"E-Commerce", automation:"Automation", social:"Social Media", ads:"Ads Campaign"};

const $ = (s,p=document)=>p.querySelector(s);
const $$ = (s,p=document)=>[...p.querySelectorAll(s)];

/* sparkline svg from a small series */
function spark(series){
  const w=100,h=30,max=Math.max(...series),min=Math.min(...series),span=(max-min)||1;
  const pts=series.map((v,i)=>{const x=(i/(series.length-1))*w;const y=h-4-((v-min)/span)*(h-8);return [x,y];});
  const line=pts.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
  const area=`0,${h} `+line+` ${w},${h}`;
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
    <polygon points="${area}" fill="url(#sg)"></polygon>
    <polyline points="${line}" fill="none" stroke="var(--emerald)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
  </svg>`;
}

/* platform logo */
function platLogo(slug,color,name){
  if(slug){const img=document.createElement('img');
    img.src=`https://cdn.simpleicons.org/${slug}/${color}`;img.alt=name;img.loading='lazy';img.draggable=false;
    img.onerror=function(){const s=document.createElement('span');s.textContent=name[0];
      s.style.cssText=`font-weight:700;color:#${color};font-family:Fraunces,serif`;this.replaceWith(s);};return img;}
  const s=document.createElement('span');s.textContent=name[0];
  s.style.cssText=`font-weight:700;color:#${color};font-family:Fraunces,serif`;return s;
}
(function(){const track=$('#track');if(!track)return;
  const build=()=>PLATFORMS.forEach(([name,slug,color])=>{const a=document.createElement('span');a.className='plat-logo';
    a.appendChild(platLogo(slug,color,name));const t=document.createElement('span');t.textContent=name;a.appendChild(t);track.appendChild(a);});
  build();build();})();
(function(){const grid=$('#platGrid');if(!grid)return;
  PLATFORMS.slice(0,12).forEach(([name,slug,color])=>{const d=document.createElement('div');d.className='plat';
    const ic=document.createElement('span');ic.className='plat-ic';ic.appendChild(platLogo(slug,color,name));
    const t=document.createElement('span');t.textContent=name;d.append(ic,t);grid.appendChild(d);});})();

/* ---------- case-study work sections ---------- */
const workEl=$('#workSections');
const flat=[];
CATS.forEach(cat=>{
  const items=GALLERY.filter(g=>g.cat===cat.key);
  if(!items.length)return;
  const block=document.createElement('div');
  block.className='case reveal'+(cat.gold?' gold':'');

  const metrics=cat.metrics.map(m=>`
    <div class="metric"><span class="metric-num">${m.n}</span><span class="metric-lbl">${m.l}</span>${spark(m.s)}</div>`).join('');
  const tags=cat.tags.map(t=>`<span class="case-tag">${t}</span>`).join('');
  const ran=cat.ran.map(x=>`<li>${x}</li>`).join('');
  const out=cat.outcome.map(x=>`<li>${x}</li>`).join('');

  block.innerHTML=`
    <div class="case-head">
      <span class="case-num">${cat.num}</span>
      <span class="case-ic"><i class="fa-solid ${cat.icon}"></i></span>
      <div class="case-titles"><h3>${cat.title}</h3><span>${cat.sub}</span></div>
      <div class="case-tags">${tags}</div>
    </div>
    <div class="metrics">${metrics}</div>
    <div class="case-notes">
      <div class="note"><h4><i class="fa-solid fa-list-check"></i> What I ran</h4><ul>${ran}</ul></div>
      <div class="note"><h4><i class="fa-solid fa-arrow-trend-up"></i> The outcome</h4><ul class="out">${out}</ul></div>
    </div>
    <div class="cat-grid r-${cat.key}"></div>`;

  const grid=block.querySelector('.cat-grid');
  items.forEach(g=>{
    const idx=flat.length; flat.push(g);
    const t=document.createElement('div');
    t.className='tile'+(g.type==='video'?' video':'');
    t.innerHTML=`
      <img src="${g.thumb}" alt="${g.title}" loading="lazy" draggable="false">
      <div class="tile-zoom"><i class="fa-solid fa-${g.type==='video'?'play':'expand'}"></i></div>
      ${g.type==='video'?'<div class="tile-play"><i class="fa-solid fa-play"></i></div>':''}
      <div class="tile-overlay"><span class="tile-cat">${CAT_LABEL[g.cat]}</span>
        <span class="tile-title">${g.title}</span><span class="tile-metric">${g.metric}</span></div>
      <div class="shield"></div>`;
    t.querySelector('.shield').addEventListener('click',()=>openLightbox(idx));
    grid.appendChild(t);
  });
  workEl.appendChild(block);
});

const tileIO=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){
  $$('.tile',e.target).forEach((t,i)=>setTimeout(()=>t.classList.add('in'),35*i));tileIO.unobserve(e.target);}});},{threshold:.05});
$$('.case').forEach(b=>tileIO.observe(b));

/* ---------- lightbox (protected) ---------- */
const lb=$('#lightbox'),lbStage=$('#lbStage'),lbCap=$('#lbCaption');
let lbList=[],lbPos=0;
function openLightbox(idx){const item=flat[idx];lbList=GALLERY.filter(g=>g.cat===item.cat);
  lbPos=lbList.findIndex(x=>x.id===item.id);showLb();
  lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function showLb(){const g=lbList[lbPos];lbStage.innerHTML='';
  if(g.type==='video'){const v=document.createElement('video');v.src=g.video;v.controls=true;v.autoplay=true;v.playsInline=true;v.loop=true;
    v.controlsList='nodownload noplaybackrate noremoteplayback';v.disablePictureInPicture=true;v.oncontextmenu=()=>false;lbStage.appendChild(v);}
  else{const img=document.createElement('img');img.src=g.full;img.alt=g.title;img.draggable=false;lbStage.appendChild(img);}
  const sh=document.createElement('div');sh.className='lb-shield';lbStage.appendChild(sh);
  lbCap.textContent=`${g.title} · ${g.metric}`;}
function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';lbStage.innerHTML='';}
function step(d){lbPos=(lbPos+d+lbList.length)%lbList.length;showLb();}
$('#lbClose').addEventListener('click',closeLb);
$('#lbPrev').addEventListener('click',e=>{e.stopPropagation();step(-1);});
$('#lbNext').addEventListener('click',e=>{e.stopPropagation();step(1);});
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('lb-shield'))closeLb();});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);});

/* ---------- download protection ---------- */
function block(e){e.preventDefault();return false;}
document.addEventListener('contextmenu',e=>{if(e.target.closest('.tile,.lb-stage,.photo-frame,img,video'))return block(e);});
document.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG')return block(e);});
document.addEventListener('keydown',e=>{const k=e.key.toLowerCase();
  if((e.ctrlKey||e.metaKey)&&(k==='s'||k==='u'))return block(e);});

/* ---------- nav + progress ---------- */
const nav=$('#nav'),prog=$('#progress');
function onScroll(){const y=window.scrollY;nav.classList.toggle('scrolled',y>30);
  const h=document.documentElement.scrollHeight-window.innerHeight;prog.style.width=(h>0?(y/h*100):0)+'%';}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
const toggle=$('#navToggle'),links=$('#navLinks');
toggle.addEventListener('click',()=>{toggle.classList.toggle('open');links.classList.toggle('open');});
$$('#navLinks a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('open');links.classList.remove('open');}));

/* ---------- reveal + count up ---------- */
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach(el=>io.observe(el));
const cio=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;
  const el=e.target,target=+el.dataset.count,suf=el.dataset.suffix||'';const dur=1400,t0=performance.now();
  const fmt=v=>v>=1000?(v/1000).toFixed(v%1000?1:0)+'K':Math.round(v);
  (function tick(t){const p=Math.min((t-t0)/dur,1);const e2=1-Math.pow(1-p,3);
    el.textContent=fmt(target*e2)+suf;if(p<1)requestAnimationFrame(tick);else el.textContent=fmt(target)+suf;})(t0);
  cio.unobserve(el);});},{threshold:.5});
$$('.stat-num').forEach(c=>cio.observe(c));
(function(){const d=document.createElement('div');d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';d.innerHTML='<svg><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">'+'<stop offset="0" stop-color="var(--emerald)" stop-opacity="0.28"/>'+'<stop offset="1" stop-color="var(--emerald)" stop-opacity="0"/></linearGradient></defs></svg>';document.body.appendChild(d);})();
$('#yr').textContent=new Date().getFullYear();
