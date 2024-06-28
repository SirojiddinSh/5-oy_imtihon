let HomePageCards = document.querySelector(".HomePage__cards");

let renderData = (data) => {
    HomePageCards.innerHTML = "";
    data.forEach((item) => {
        HomePageCards.innerHTML += `
        <div class="HomePage__card">
            <a href="./Pages.html?card-id=${item._id}">
                <img src="${item.image}" alt=""/>
            </a>
            <div class="HomePage__card__content">
                <h2 class="HomePage__card__title">${item.title}</h2>
                <p class="HomePage__card__text">${item.description}</p> 
                <p>${item.author}</p>
            </div>
        </div>
        `;
    });
};

fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/")
    .then((res) => res.json())
    .then((data) => renderData(data.data));
