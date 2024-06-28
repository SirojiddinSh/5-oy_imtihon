let CreatePostForm = document.querySelector("#create-post-form");
let CreatePostTitle = document.querySelector(".create-post__title");
let CreatePostImage = document.querySelector(".create-post__image");
let CreatePostTag = document.querySelector(".create-post__tag");
let CreatePostAuthor = document.querySelector(".create-post__author");
let CreatePostDescription = document.querySelector(".create-post__description");
let createPostButton = document.querySelector(".create-post__button");

function Post(title, description, image, tags, author) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.author = author;
}

let NewPost = (e) => {
    e.preventDefault();
    let children = e.target.children;
    let newPost = new Post(
        children[0].value,
        children[4].value,
        children[1].value,
        children[2].value.split(", "),
        children[3].value
    );
    console.log(newPost);

    fetch(
        "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.status == "success") {
                createPostButton.textContent = "Loading...";
                alert("Yangi Post muvaffaqiyatli qo'shildi");
                window.location.href = "../index.html";
            } else {
                console.log(data);
                alert("Xatolik yuz berdi. Iltimos qaytadan urunib ko'ring");
            }
        });
};
CreatePostForm.addEventListener("submit", NewPost);
