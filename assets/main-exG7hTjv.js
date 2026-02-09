(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const we="cinemania-theme",V="dark",S="light";function de(e){const t=document.body;t.classList.remove("dark-theme","light-theme"),e===S?t.classList.add("light-theme"):t.classList.add("dark-theme")}function De(){return localStorage.getItem(we)===S?S:V}function Ue(e){localStorage.setItem(we,e)}function Ne(){const e=document.querySelector(".theme-toggle");e&&(de(De()),e.addEventListener("click",()=>{const n=(document.body.classList.contains("light-theme")?S:V)===S?V:S;de(n),Ue(n)}))}function ze(){const e=document.querySelector(".burger-btn"),t=document.querySelector("[data-menu]");if(!e||!t)return;const n=()=>t.classList.remove("is-hidden"),o=()=>t.classList.add("is-hidden");e.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),t.classList.contains("is-hidden")?n():o()}),t.addEventListener("click",r=>{r.target===t&&o()}),t.addEventListener("click",r=>{r.target.closest(".mobile-menu-link")&&o()}),window.addEventListener("keydown",r=>{r.key==="Escape"&&o()})}function Fe(){Ne(),ze()}const v="6e2b9ceff6313b472d60eed2769db38a",b="https://api.themoviedb.org/3",Ye="https://image.tmdb.org/t/p/w500";async function Ge(){try{const e=await fetch(`${b}/trending/movie/week?api_key=${v}`);if(!e.ok)throw new Error("Veri çekilemedi!");return(await e.json()).results}catch(e){return console.error("Hata:",e),[]}}async function je(e){try{return await(await fetch(`${b}/movie/${e}?api_key=${v}`)).json()}catch(t){console.error("Detay Hatası:",t)}}async function Oe(){try{const e=await fetch(`${b}/trending/movie/day?api_key=${v}`);if(!e.ok)throw new Error("Veri çekilemedi!");return(await e.json()).results}catch(e){return console.error("Hata:",e),[]}}const ne=document.getElementById("movie-grid");let P=[];function Ve(){return window.matchMedia("(min-width: 768px)").matches?3:1}function ue(){if(!ne)return;const e=Ve();Je(P.slice(0,e))}async function Ke(){if(ne)try{P=await Ge(),P&&P.length>0&&(ue(),window.addEventListener("resize",ue))}catch(e){console.error("Trend verileri yüklenirken hata oluştu:",e)}}function Je(e){ne.innerHTML=e.map(t=>{const n=t.release_date?t.release_date.split("-")[0]:"2023";return`
        <div class="weekly-trends__item">
            <div class="weekly-trends__card">
                <img src="https://image.tmdb.org/t/p/w500${t.poster_path}" alt="${t.title}" loading="lazy">
                
                <div class="weekly-trends__info">
                    <div class="weekly-trends__text">
                        <div class="weekly-trends__movie-title">${t.title}</div>
                        <div class="weekly-trends__movie-meta">Drama, Action | ${n}</div>
                    </div>
                    <div class="weekly-trends__stars" aria-label="Rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
            </div>
        </div>
    `}).join("")}Ke();const ke="c43a3c633ad33367e1cd1eb02f47a173",Ee="https://api.themoviedb.org/3",Me="https://image.tmdb.org/t/p/original",$e="myLibrary",U=document.getElementById("upcoming-wrapper"),L=document.getElementById("modalBackdrop"),pe=document.getElementById("modalContent"),me=document.getElementById("modalClose");let re={};async function We(){try{await Ze(),await Xe()}catch(e){console.error("Hata:",e),U.innerHTML="<p>Film bilgileri yüklenemedi.</p>"}}function Qe(){if(U)return We()}async function Ze(){(await(await fetch(`${Ee}/genre/movie/list?api_key=${ke}`)).json()).genres.forEach(n=>{re[n.id]=n.name})}async function Xe(){const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=`${t}-${n}-01`,a=(await(await fetch(`${Ee}/discover/movie?api_key=${ke}&primary_release_date.gte=${o}&sort_by=popularity.desc&include_adult=false&include_video=false`)).json()).results;if(a.length>0){const g=Math.floor(Math.random()*a.length);et(a[g])}else U.innerHTML="<p>Bu ay için vizyon filmi bulunamadı.</p>"}function et(e){const t=e.genre_ids.slice(0,2).map(a=>re[a]).join(", "),n=new Date(e.release_date).toLocaleDateString("tr-TR"),o=B(e.id),r=`
    <div class="upcoming-poster-container" id="posterClick">
      <img src="${Me}${e.backdrop_path||e.poster_path}" alt="${e.title}">
    </div>

    <div class="upcoming-info-container">
      <h3 class="upcoming-movie-title" id="titleClick">${e.title}</h3>
      
      <div class="upcoming-meta-grid">
        <span class="meta-label">Release date</span>
        <span class="meta-value highlight-date">${n}</span>

        <span class="meta-label">Vote / Votes</span>
        <span class="meta-value">
          <span class="vote-badge">${e.vote_average.toFixed(1)}</span> / <span class="vote-count">${e.vote_count}</span>
        </span>

        <span class="meta-label">Popularity</span>
        <span class="meta-value">${e.popularity.toFixed(1)}</span>

        <span class="meta-label">Genre</span>
        <span class="meta-value">${t}</span>
      </div>

      <div class="upcoming-about">
        <h4 class="upcoming-about-title">ABOUT</h4>
        <p class="upcoming-overview">${e.overview}</p>
      </div>

      <button class="btn-library ${o?"remove":"add"}" id="libraryBtn">
        ${o?"Remove from my library":"Add to my library"}
      </button>
    </div>
  `;U.innerHTML=r,document.getElementById("posterClick").addEventListener("click",()=>fe(e)),document.getElementById("titleClick").addEventListener("click",()=>fe(e));const i=document.getElementById("libraryBtn");i.addEventListener("click",()=>{Se(e);const a=B(e.id);K(i,a)})}function K(e,t){t?(e.textContent="Remove from my library",e.classList.remove("add"),e.classList.add("remove")):(e.textContent="Add to my library",e.classList.remove("remove"),e.classList.add("add"))}function _e(){return JSON.parse(localStorage.getItem($e))||[]}function B(e){return _e().some(t=>t.id===e)}function Se(e){let t=_e();B(e.id)?t=t.filter(n=>n.id!==e.id):t.push(e),localStorage.setItem($e,JSON.stringify(t))}function fe(e){if(!L||!pe)return;const t=e.genre_ids.map(r=>re[r]).join(", "),n=B(e.id);pe.innerHTML=`
    <img src="${Me}${e.poster_path}" class="modal-poster" alt="${e.title}">
    <div class="modal-info">
      <h3 style="font-size:24px; text-transform:uppercase; margin-bottom:10px;">${e.title}</h3>
      
      <div style="display:grid; grid-template-columns: auto 1fr; gap: 5px 20px; margin-bottom:15px; font-size:14px;">
        <span>Vote / Votes</span> <span>${e.vote_average.toFixed(1)} / ${e.vote_count}</span>
        <span>Popularity</span> <span>${e.popularity.toFixed(1)}</span>
        <span>Genre</span> <span>${t}</span>
      </div>

      <h5 style="margin-bottom:5px;">ABOUT</h5>
      <p style="font-size:14px; line-height:1.5; color:#555; margin-bottom:20px;">${e.overview}</p>

      <button class="btn-library ${n?"remove":"add"}" id="modalLibBtn">
        ${n?"Remove from my library":"Add to my library"}
      </button>
    </div>
  `;const o=document.getElementById("modalLibBtn");o.addEventListener("click",()=>{Se(e),K(o,B(e.id));const r=document.getElementById("libraryBtn");r&&K(r,B(e.id))}),L.classList.add("is-open"),document.body.style.overflow="hidden"}function J(){L&&(L.classList.remove("is-open"),document.body.style.overflow="")}me&&L&&(me.addEventListener("click",J),L.addEventListener("click",e=>{e.target===L&&J()}));document.addEventListener("keydown",e=>{e.key==="Escape"&&L&&L.classList.contains("is-open")&&J()});function tt(){let e="",t="",n=!1,o={};const r=document.getElementById("moviesContainer"),i=document.getElementById("emptyMessage");if(!r||!i)return;const a=document.querySelector(".search-input"),g=document.getElementById("clearSearch"),d=document.querySelector(".search-btn"),c=document.getElementById("yearBtn"),u=document.getElementById("yearDropdown"),N=document.getElementById("selectedYear");sessionStorage.getItem("scrollCatalog")==="true"&&(sessionStorage.removeItem("scrollCatalog"),setTimeout(()=>{const l=document.querySelector(".search-row");if(!l)return;const s=l.getBoundingClientRect().top+window.scrollY-20;window.scrollTo({top:s,behavior:"smooth"})},300));const $=document.querySelector(".search-input");if(!$)return;const C=$.parentElement;if(!C)return;const w=C.querySelector(".search-clear-btn");w&&(w.style.display="none");const ae=g||w;function Wt(l,s){}fetch(`${b}/genre/movie/list?api_key=${v}&language=en-US`).then(l=>l.json()).then(l=>{(l.genres||[]).forEach(s=>o[s.id]=s.name)}).catch(l=>console.error("genre list error:",l)),C.addEventListener("click",l=>{const s=l.target.closest(".search-clear-btn");s&&($.value="",$.focus(),s.style.display="none")}),C.addEventListener("input",l=>{if(l.target!==$)return;const s=C.querySelector(".search-clear-btn");s&&(s.style.display=$.value?"block":"none")}),w&&w.addEventListener("click",()=>{a.value="",a.focus(),w.style.display="none"});function z(l){if(!u||!c)return;u.classList.toggle("open",l),c.classList.toggle("open",l),u.style.transform=l?"scaleY(1)":"scaleY(0)",u.style.opacity=l?"1":"0",u.style.pointerEvents=l?"auto":"none";const s=c.querySelector(".icon-chevron");s&&(s.style.transform=l?"rotate(180deg)":"rotate(0deg)")}c&&u&&(c.addEventListener("click",l=>{l.stopPropagation();const s=!u.classList.contains("open");z(s)}),u.addEventListener("click",l=>{l.stopPropagation(),l.target.tagName==="LI"&&(e=l.target.dataset.year||"",N.textContent=l.target.textContent,z(!1))})),document.addEventListener("click",l=>{!u||!c||u.classList.contains("open")&&!u.contains(l.target)&&!c.contains(l.target)&&z(!1)}),d&&d.addEventListener("click",()=>{if(t=a.value.trim(),n=!0,!t&&!e){n=!1,F(1);return}Ae(1)}),ae&&ae.addEventListener("click",function(){a.value="",w&&(w.style.display="none"),N&&(N.textContent="Year"),t="",e="",n=!1,F(1)});function Ae(l=1){let s="";t?(s=`${b}/search/movie?api_key=${v}&query=${encodeURIComponent(t)}&page=${l}`,e&&(s+=`&year=${e}`)):(s=`${b}/discover/movie?api_key=${v}&page=${l}`,e&&(s+=`&primary_release_year=${e}`)),fetch(s).then(p=>p.json()).then(p=>{se(p.results||[]),p.total_results}).catch(p=>console.error("searchMovies error:",p))}F(1);function F(l=1){i.style.display="none",fetch(`${b}/trending/movie/week?api_key=${v}&page=${l}`).then(s=>s.json()).then(s=>{se(s.results||[]),s.total_results}).catch(s=>console.error("fetchTrending error:",s))}function se(l){if(r.innerHTML="",!l.length){i.style.display=n?"block":"none";return}i.style.display="none",l.slice(0,20).forEach(s=>{var le,ce;const p=document.createElement("a");p.className="movie-card",p.setAttribute("data-id",s.id),p.setAttribute("data-movie-id",s.id),p.href=`catalog.html?id=${s.id}`;const qe=s.poster_path?`${Ye}${s.poster_path}`:"https://placehold.co/600x400",He=((le=s.release_date)==null?void 0:le.slice(0,4))||"N/A",Pe=((ce=s.genre_ids)==null?void 0:ce.map(q=>o[q]).filter(Boolean).slice(0,2).join(", "))||"Unknown";p.innerHTML=`
        <img src="${qe}" alt="${s.title||"Movie"}">
        <div class="movie-card-overlay">
          <div class="movie-card-text">
            <h3>${s.title||"Untitled"}</h3>
            <div class="movie-meta">
              <span class="movie-genre">${Pe}</span>
              <span class="movie-year">| ${He}</span>
            </div>
          </div>
          <div class="movie-rating-stars"></div>
        </div>
      `,p.addEventListener("click",q=>{q.preventDefault(),q.stopPropagation();const Re=p.dataset.movieId;rt(Re)}),r.appendChild(p),nt(p.querySelector(".movie-rating-stars"),s.vote_average)})}}function nt(e,t){if(!e)return;e.innerHTML="";const n=Math.floor(t/2),o=t%2>=1;for(let r=0;r<5;r++){let i="empty";r<n?i="full":r===n&&o&&(i="half");const a=`star-${Math.random().toString(36).slice(2)}`;e.innerHTML+=`
        <svg viewBox="0 0 32 32" width="14" height="14">
        <defs>
          <linearGradient id="${a}-full" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F84119"/>
            <stop offset="100%" stop-color="#F89F19"/>
          </linearGradient>
          <linearGradient id="${a}-half" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#F84119"/>
            <stop offset="50%" stop-color="#F89F19"/>
            <stop offset="50%" stop-color="#bfbfbf"/>
            <stop offset="100%" stop-color="#bfbfbf"/>
          </linearGradient>
        </defs>
        <path
          d="M24.622 30L16 24.173 7.378 30l3.135-9.286L2.388 15.14h10.024L16 5.827l3.588 9.313h10.024l-8.125 5.569z"
          fill="${i==="full"?`url(#${a}-full)`:i==="half"?`url(#${a}-half)`:"#bfbfbf"}"
        />
      </svg>
        `}}const rt=e=>typeof window.openMoviePopup=="function"?(window.openMoviePopup(e),!0):typeof openMoviePopup=="function"?(openMoviePopup(e),!0):(console.warn("openMoviePopup bulunamadı. Popup modülü sayfaya yüklenmemiş olabilir."),!1);function ot(e="Loading..."){const t=document.createElement("div");t.className="app-loader",t.setAttribute("role","status"),t.setAttribute("aria-live","polite");const n=document.createElement("div");n.className="app-loader__spinner",n.setAttribute("aria-hidden","true");const o=document.createElement("span");return o.className="app-loader__text",o.textContent=e,t.appendChild(n),t.appendChild(o),t}const Be="my-library";let R,h,Y,f,W,Q,_,Z;function it(){h=document.querySelector(".popup-modal-overlay"),R=document.querySelector(".popup-loader"),Y=document.querySelector(".popup-modal-close"),f=document.querySelector(".popup-add-library-btn"),W=document.querySelector(".popup-movie-poster img"),Q=document.querySelector(".popup-movie-title"),_=document.querySelectorAll(".popup-movie-info .popup-value"),Z=document.querySelector(".popup-movie-description"),h&&(Y&&Y.addEventListener("click",G),h.addEventListener("click",e=>{e.target===h&&G()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-active")&&G()}))}async function A(e){var t;if(!(!h||!R)){h.classList.add("is-active"),R.classList.remove("is-hidden");try{const n=await je(e);if(W&&(W.src=n.poster_path?`https://image.tmdb.org/t/p/w500${n.poster_path}`:""),Q&&(Q.textContent=n.title||"Unknown title"),_.length>=3){if(n.vote_average){const o=n.vote_average.toFixed(1),r=n.vote_count??0;_[0].innerHTML=`
          <span class="popup-pill">${o}</span>
          <span class="popup-pill-sep">/</span>
          <span class="popup-pill">${r}</span>
        `}else _[0].textContent="N/A";_[1].textContent=n.popularity?n.popularity.toFixed(1):"N/A",_[2].textContent=(t=n.genres)!=null&&t.length?n.genres.map(o=>o.name).join(", "):"Unknown"}if(Z&&(Z.textContent=n.overview||"No description available."),f){const o=Te(n.id);f.textContent=o?"Remove from my library":"Add to my library",f.classList.toggle("is-remove",o),f.onclick=()=>at(n)}}catch(n){console.error("Movie details error:",n)}finally{R.classList.add("is-hidden")}}}function G(){h&&h.classList.remove("is-active")}function Ie(){return JSON.parse(localStorage.getItem(Be))||[]}function Te(e){return Ie().some(t=>t.id===e)}function at(e){if(!f)return;let t=Ie();Te(e.id)?(t=t.filter(n=>n.id!==e.id),f.textContent="Add to my library",f.classList.remove("is-remove")):(t.push(e),f.textContent="Remove from my library",f.classList.add("is-remove")),localStorage.setItem(Be,JSON.stringify(t))}document.addEventListener("DOMContentLoaded",it);typeof window<"u"&&(window.openMoviePopup=A);const st="https://image.tmdb.org/t/p/original",m=e=>document.getElementById(e);async function lt(){mt();try{const e=await Oe();if(e&&e.length>0){const t=e[Math.floor(Math.random()*e.length)];ct(t)}else ge()}catch{ge()}finally{ft()}}function ct(e){const t=m("hero"),n=m("hero-title"),o=m("hero-description"),r=m("watch-trailer"),i=m("more-details"),a=m("hero-rating");if(t&&(t.classList.remove("hero-default"),t.style.backgroundImage=`url(${st}${e.backdrop_path})`),n&&(n.innerText=e.title),o&&(o.innerText=e.overview.slice(0,150)+"..."),r&&(r.onclick=()=>dt(e.id)),i&&(i.onclick=()=>{typeof A=="function"?A(e.id):typeof window<"u"&&typeof window.openMoviePopup=="function"?window.openMoviePopup(e.id):console.log("Details modal is not ready.")}),a){const g=Math.round(e.vote_average/2);let d="";for(let c=1;c<=5;c++){const u=c<=g?"star-filled":"star-empty";d+=`<span class="star-item ${u}"></span>`}a.innerHTML=d}}async function dt(e){try{const o=(await(await fetch(`${b}/movie/${e}/videos?api_key=${v}&language=en-US`)).json()).results.find(r=>r.type==="Trailer"&&r.site==="YouTube");o?ut(o.key):ye()}catch(t){console.error("Fragman yüklenirken hata oluştu:",t),ye()}}function ye(){const e=m("error-popup");e&&e.classList.add("show")}function ut(e){const t=m("video-modal"),n=m("trailer-video");t&&n&&(n.src=`https://www.youtube.com/embed/${e}?autoplay=1`,t.classList.add("show"))}function pt(){const e=m("video-modal"),t=m("error-popup"),n=m("trailer-video"),o=document.querySelector(".close-video");o&&e&&n&&(o.onclick=()=>{e.classList.remove("show"),n.src=""});const r=document.querySelector("#error-popup .close-btn");r&&t&&(r.onclick=()=>{t.classList.remove("show")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(e&&n&&(e.classList.remove("show"),n.src=""),t&&t.classList.remove("show"))}),window.onclick=i=>{i.target===e&&(e.classList.remove("show"),n.src=""),i.target===t&&t.classList.remove("show")}}function ge(){const e=m("hero"),t=m("hero-title"),n=m("hero-description"),o=m("hero-rating"),r=document.querySelector(".hero-buttons");e&&(e.classList.add("hero-default"),e.style.backgroundImage="url(/src/assets/default-cover.png)"),t&&(t.innerText="Let's Make Your Own Cinema"),n&&(n.innerText="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),o&&(o.innerHTML=""),r&&(r.innerHTML='<a class="btn btn-orange" href="/catalog.html">Get Started</a>')}function mt(){const e=document.querySelector(".hero-content");if(!e||e.querySelector(".app-loader"))return;const t=ot("Loading...");t.id="hero-loader",e.prepend(t)}function ft(){const e=document.getElementById("hero-loader");e&&e.remove()}async function yt(){pt(),await lt()}const T=document.querySelector(".library-list"),k=document.querySelector(".load-more-btn"),gt=document.querySelector(".library-empty"),he=document.querySelector(".library-controls"),E=document.getElementById("genreBtn"),y=document.getElementById("genreMenu"),ve=document.getElementById("genreText"),X=document.querySelector(".library-loader"),D=document.querySelector(".library-error"),ht=9;let oe=1,M=[],x=[];function vt(){D&&D.classList.remove("hidden")}function bt(){D&&D.classList.add("hidden")}function Lt(e){var r,i;let t=[];Array.isArray(e.genres)&&e.genres.length&&(t=e.genres.map(a=>a.name));const n=t.length>0?t.slice(0,2).join(", "):"Unknown",o=t.length>0?t[0].toLowerCase():"unknown";return{...e,year:((r=e.release_date)==null?void 0:r.slice(0,4))||e.year||"2023",rating:e.rating||((i=e.vote_average)==null?void 0:i.toFixed(1))||"7.0",genre:n,_genreKey:o}}function wt(e){const t=Number(e)/2,n=Math.round(t),o=5-n;let r="";for(let i=0;i<n;i++)r+='<img class="star" src="/assets/star-icon-filled.svg" alt="star" />';for(let i=0;i<o;i++)r+='<img class="star" src="/assets/star-icon.svg" alt="star" />';return r}const kt="my-library";function Et(){return JSON.parse(localStorage.getItem(kt))||[]}function Mt(e){const t=wt(e.rating);return`
    <li class="library-movie-card" data-id="${e.id}">
      <div class="card-poster">
        <img
          src="https://image.tmdb.org/t/p/w500${e.poster_path}"
          alt="${e.title}"
        />

        <div class="card-overlay">
          <h3 class="movie-title">${e.title.toUpperCase()}</h3>

          <div class="card-bottom">
            <p class="movie-meta">
              ${e.genre} | ${e.year||"2024"}
            </p>

            <div class="movie-rating">
              ${t}
            </div>
          </div>
        </div>
      </div>
    </li>
  `}function $t(e){T.innerHTML=e.map(Mt).join("")}function _t(){return M.slice(0,oe*ht)}function St(e){const t=e.length===0;gt.classList.toggle("hidden",!t),T.classList.toggle("hidden",t),he&&he.classList.remove("hidden"),k&&k.classList.toggle("hidden",t)}function ie(){const e=_t();$t(e),St(M),k&&(e.length<M.length?k.classList.remove("hidden"):k.classList.add("hidden"))}k&&k.addEventListener("click",()=>{oe++,ie()});E&&y&&E.addEventListener("click",()=>{y.classList.toggle("open"),E.classList.toggle("active")});function Bt(){It(),bt();try{setTimeout(()=>{x=Et().map(Lt),M=[...x],Ct(x),ie(),be()},800)}catch(e){console.error(e),be(),vt()}}function It(){X&&(X.classList.remove("hidden"),T.classList.add("hidden"))}function be(){X.classList.add("hidden"),T.classList.remove("hidden")}function Tt(){document.querySelector(".library-section")&&Bt()}function Ct(e){if(!y)return;const t=new Map;e.forEach(n=>{!n.genre||n.genre==="Unknown"||n.genre.split(",").forEach(o=>{const r=o.trim(),i=r.toLowerCase();t.has(i)||t.set(i,r)})}),y.innerHTML=`
    <li data-genre="all" class="active">All Genres</li>
  `,t.forEach((n,o)=>{y.innerHTML+=`
      <li data-genre="${o}">${n}</li>
    `}),xt()}function xt(){if(!y||!ve||!E)return;const e=y.querySelectorAll("li");e.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.genre;e.forEach(o=>o.classList.remove("active")),t.classList.add("active"),y.classList.remove("open"),E.classList.remove("active"),ve.textContent=t.textContent,n==="all"?M=[...x]:M=x.filter(o=>o.genre.toLowerCase().includes(n)),oe=1,ie()})})}document.addEventListener("click",e=>{!y||!E||e.target.closest(".genre-select")||(y.classList.remove("open"),E.classList.remove("active"))});function At(e){console.log("TIKLANAN FILM:",e)}T&&T.addEventListener("click",e=>{const t=e.target.closest(".library-movie-card");if(!t)return;const n=t.dataset.id,o=M.find(r=>String(r.id)===n);o&&At(o)});function qt(){}const Ht="https://image.tmdb.org/t/p/original",Ce="../img/library-hero-image.jpg",I=document.querySelector(".my-library-hero__loader");function Pt(){I==null||I.classList.remove("is-hidden")}function Rt(){I==null||I.classList.add("is-hidden")}function ee(){const e=document.getElementById("my-library-error-popup");e&&e.classList.add("show")}function j(){const e=document.getElementById("my-library-error-popup");e&&e.classList.remove("show")}function Dt(){const e=localStorage.getItem("theme")||"dark";document.body.classList.remove("dark-theme","light-theme"),document.body.classList.add(`${e}-theme`)}function Ut(e){const t=document.getElementById("my-library-video-modal"),n=document.getElementById("my-library-trailer-video");t&&n&&(n.src=`https://www.youtube.com/embed/${e}?autoplay=1`,t.classList.remove("modal-hidden"))}function Nt(e){if(typeof qt=="function")try{const t=document.getElementById("video-modal");if(t&&!t.classList.contains("modal-hidden"))return}catch(t){console.warn("External trailer popup failed, using My Library popup:",t)}Ut(e)}function O(){const e=document.getElementById("my-library-video-modal"),t=document.getElementById("my-library-trailer-video");e&&t&&(e.classList.add("modal-hidden"),t.src="")}async function xe(){try{const e=zt();if(e&&e.length>0){const t=Ft(e);Gt(t)}else te()}catch(e){console.error("Error initializing my library hero:",e),te()}}function zt(){try{const e=localStorage.getItem("my-library");return e?JSON.parse(e):null}catch(e){return console.error("Error reading from localStorage:",e),null}}function Ft(e){if(!e||e.length===0)return null;const t=Math.floor(Math.random()*e.length);return e[t]}function Yt(e){const t=e/2,n=Math.floor(t),o=t%1>=.3,r=5-n-(o?1:0);let i="";for(let a=0;a<n;a++)i+='<span class="star filled">★</span>';o&&(i+='<span class="star half">★</span>');for(let a=0;a<r;a++)i+='<span class="star empty">★</span>';return i}function Gt(e){var a;if(!e){te();return}const t=document.querySelector(".my-library-hero"),n=document.querySelector(".my-library-hero__overlay");if(!t||!n){console.error("Hero elements not found!");return}const o=e.backdrop_path?`${Ht}${e.backdrop_path}`:Ce;t.style.backgroundImage=`url('${o}')`;const r=((a=e.overview)==null?void 0:a.length)>180?`${e.overview.slice(0,180)}...`:e.overview||"No description available.",i=e.vote_average?Yt(e.vote_average):"";n.innerHTML=`
    <h1 class="my-library-hero__title">${e.title}</h1>
    ${i?`<div class="my-library-hero__rating">${i}</div>`:""}
    <p class="my-library-hero__description">${r}</p>
    <div class="my-library-hero__buttons">
      <button class="my-library-hero__btn my-library-hero__btn--trailer" id="my-library-hero-trailer-btn">
        Watch trailer
      </button>
      <button class="my-library-hero__btn my-library-hero__btn--details" id="my-library-hero-details-btn">
        More details
      </button>
    </div>
  `,jt(e.id)}function jt(e){const t=document.getElementById("my-library-hero-details-btn"),n=document.getElementById("my-library-hero-trailer-btn");if(t){const o=t.cloneNode(!0);t.parentNode.replaceChild(o,t),o.addEventListener("click",()=>Ot(e))}if(n){const o=n.cloneNode(!0);n.parentNode.replaceChild(o,n),o.addEventListener("click",()=>Vt(e))}}function Ot(e){typeof A=="function"?A(e):typeof window.openMoviePopup=="function"?window.openMoviePopup(e):(console.error("Movie popup is not ready."),ee())}async function Vt(e){var t;Pt();try{const n=await fetch(`${b}/movie/${e}/videos?api_key=${v}&language=en-us`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const r=(t=(await n.json()).results)==null?void 0:t.find(i=>i.type==="Trailer"&&i.site==="YouTube");r?Nt(r.key):ee()}catch(n){console.error("Error loading trailer:",n),ee()}finally{Rt()}}function te(){const e=document.querySelector(".my-library-hero"),t=document.querySelector(".my-library-hero__overlay");e&&(e.style.backgroundImage=`url('${Ce}')`),t&&(t.innerHTML=`
    <h1 class="my-library-hero__title">Create Your Dream Cinema</h1>
    <p class="my-library-hero__description">
      Is a guide to designing a personalized movie theater experience with the right equipment,
      customized decor, and favorite films.
    </p>
  `)}document.addEventListener("DOMContentLoaded",()=>{if(!document.querySelector(".my-library-hero"))return;Dt(),xe();const e=document.querySelector(".my-library-error__close");e&&e.addEventListener("click",j);const t=document.getElementById("my-library-error-popup");t&&t.addEventListener("click",r=>{r.target.id==="my-library-error-popup"&&j()});const n=document.querySelector(".close-my-library-video");n&&n.addEventListener("click",O);const o=document.getElementById("my-library-video-modal");o&&o.addEventListener("click",r=>{r.target.id==="my-library-video-modal"&&O()}),document.addEventListener("keydown",r=>{if(r.key==="Escape"){const i=document.getElementById("my-library-error-popup");i!=null&&i.classList.contains("show")&&j();const a=document.getElementById("my-library-video-modal");a&&!a.classList.contains("modal-hidden")&&O()}})});const Kt=[{name:"Çiğdem Ergal",role:"Team Lead",image:new URL("/cinemania/assets/cigdem-CDFsF4Yh.webp",import.meta.url).href,github:"https://github.com/CigdemErgal",linkedin:"https://www.linkedin.com/in/%C3%A7i%C4%9Fdem-ergal/"},{name:"Halenur Gürel",role:"Scrum Master",image:new URL("/cinemania/assets/halenur-DoTIAj_A.webp",import.meta.url).href,github:"https://github.com/halenurgurel",linkedin:"https://www.linkedin.com/in/halenurgurel/"},{name:"Ali Hamza Çakmak",role:"Developer",image:new URL("../images/footer/ali.webp",import.meta.url).href,github:"https://github.com/MRMARUL",linkedin:"https://www.linkedin.com/in/ali-hamza-%C3%A7akmak-8112553a8/"},{name:"Aslıhan Erdal",role:"Developer",image:new URL("/cinemania/assets/aslihan-BOCxFPsO.webp",import.meta.url).href,github:"https://github.com/ERDLL0",linkedin:"https://www.linkedin.com/in/aslihan-erdal/"},{name:"Burak Gökay",role:"Developer",image:new URL("/cinemania/assets/burak-BwzLELfX.webp",import.meta.url).href,github:"https://github.com/bgokay007-tech",linkedin:"https://www.linkedin.com/in/burak-g%C3%B6kay-196b66348/"},{name:"Kerem Yıldırım",role:"Developer",image:new URL("/cinemania/assets/kerem-B31FZSud.webp",import.meta.url).href,github:"https://github.com/keremyldrm61",linkedin:"https://www.linkedin.com/in/kerem-y%C4%B1ld%C4%B1r%C4%B1m-0053a5191/"},{name:"Kutluhan Gül",role:"Developer",image:new URL("/cinemania/assets/kutluhan-Bf_P6Q0L.webp",import.meta.url).href,github:"https://github.com/kutluhangil",linkedin:"https://www.linkedin.com/in/kutluhangil/"},{name:"Nur Seda Ağgünlü",role:"Developer",image:new URL("/cinemania/assets/nurseda-DC7mgIBj.webp",import.meta.url).href,github:"https://github.com/nursedaaggunlu",linkedin:"https://www.linkedin.com/in/nur-seda-aggunlu/"},{name:"Yusuf Soylu",role:"Developer",image:new URL("/cinemania/assets/yusuf-whWyECjA.webp",import.meta.url).href,github:"https://github.com/soylu1092",linkedin:"https://www.linkedin.com/in/yusuf-soylu-525236306/"},{name:"Zehra Yazıcı",role:"Developer",image:new URL("/cinemania/assets/zehra-pTW0uimo.webp",import.meta.url).href,github:"https://github.com/zehrayazici",linkedin:"https://www.linkedin.com/in/zehrayazici/"}],Le={github:'<svg class="social-icon-svg" viewBox="0 0 24 24" style="fill: white;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',linkedin:'<svg class="social-icon-svg" viewBox="0 0 24 24" style="fill: white;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'};function Jt(){const e="#footer-link",t="[data-footer-modal]",n="[data-footer-close]",o=".team-list",r=()=>document.querySelector(t),i=()=>{const d=document.querySelector(o);if(!d||d.children.length>0)return;const c=Kt.map(u=>`
            <li class="team-card">
              <img
                src="${u.image}"
                alt="${u.name}"
                class="team-image"
                loading="lazy"
                width="180"
                height="180"
                onerror="this.src='https://placehold.co/180x180?text=${encodeURIComponent(u.name)}'"
              />
              <h3 class="team-name">${u.name}</h3>
              <p class="team-role">${u.role}</p>
              <div class="social-links">
                <a href="${u.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
                  ${Le.github}
                </a>
                <a href="${u.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                  ${Le.linkedin}
                </a>
              </div>
            </li>
        `).join("");d.innerHTML=c},a=d=>{const c=r();c&&(d.preventDefault(),i(),c.classList.remove("is-hidden"),document.body.style.overflow="hidden")},g=()=>{const d=r();d&&(d.classList.add("is-hidden"),document.body.style.overflow="")};document.addEventListener("click",d=>{if(d.target.closest(e)){a(d);return}if(d.target.closest(n)){g();return}const c=r();c&&d.target===c&&g()}),document.addEventListener("keydown",d=>{const c=r();d.key==="Escape"&&c&&!c.classList.contains("is-hidden")&&g()})}const H=document.querySelector(".scroll-to-top");H&&(window.addEventListener("scroll",()=>{window.scrollY>300?H.classList.add("is-visible"):H.classList.remove("is-visible")}),H.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));document.addEventListener("DOMContentLoaded",()=>{Fe(),Jt(),document.querySelector(".library-section")!==null?(xe(),Tt()):(tt(),yt(),Qe())});
//# sourceMappingURL=main-exG7hTjv.js.map
