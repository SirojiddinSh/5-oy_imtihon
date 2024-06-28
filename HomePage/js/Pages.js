let url = location.search;
let cardId = new URLSearchParams(url).get("card-id");
let SinglePageImg = document.querySelector(".SinglePage-div__img");
let SinglePageH2 = document.querySelector(".SinglePage-div__h2");
let SinglePageText = document.querySelector(".SinglePage-text");

let renderData = (Id) => {
    SinglePageImg.src = Id.image;
    SinglePageH2.textContent = Id.title;
    SinglePageText.textContent = Id.description;
};

let loadData = () => {
    fetch(
        `https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${cardId}`
    )
        .then((res) => res.json())
        .then((data) => {
            renderData(data.data);
            console.log(data.data);
        });
};

loadData();
