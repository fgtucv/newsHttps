const e=document.querySelector(".news-list"),t=document.querySelector(".input");document.querySelector(".button").addEventListener("click",()=>{n().then(e=>{console.log(e),console.log("test"),s(e.articles)})});const s=t=>{let s;e.innerHTML="",s="",s=t.map(e=>`<li class="news-list__item">
            <h2 class="news-list__title">${e.author}</h2>
            <p class="news-list__text">${e.content}</p>
            <a href="" class="news-list__url">${e.url}</a>
            <span class="news-list__date">${e.publishedAt}</span>
        </li>`).join(""),e.innerHTML=s},n=()=>fetch(`https://newsapi.org/v2/everything?q=${t.value}&apiKey=7bab116baf184c4689a16929a05cfb49`).then(e=>e.json());
//# sourceMappingURL=index.72d0319f.js.map
