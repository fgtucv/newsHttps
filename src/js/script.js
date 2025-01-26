const list = document.querySelector(".news-list");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    getNews().then((data) => {
        createMarkup(data.articles);
    });
})

const createMarkup = (arr) => {

    let html;

    list.innerHTML = "";
    html = "";

    html = arr.map((obj) => {
        return `<li class="news-list__item">
            <h2 class="news-list__title">${obj.author}</h2>
            <p class="news-list__text">${obj.content}</p>
            <a href="" class="news-list__url">${obj.url}</a>
            <span class="news-list__date">${obj.publishedAt}</span>
        </li>`;
    }).join("");

    list.innerHTML = html;
};


const getNews = () => {
    return fetch(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=7bab116baf184c4689a16929a05cfb49`).then((data) => {
        return data.json();
    });
};