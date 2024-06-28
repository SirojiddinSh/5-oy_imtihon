let LoginForm = document.querySelector(".Login-div__form");
let LoginEmail = document.querySelector(".Login-div__input");
let LoginPassword = document.querySelector(".Login-div__input");
let LoginButton = document.querySelector(".Login-div__button");

function User(email, password) {
    this.email = email;
    this.password = password;
}

let LoginUser = (e) => {
    e.preventDefault();
    let children = e.target.children;
    let newUser = new User(children[0].value, children[1].value);
    fetch(
        "https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.status == "success") {
                LoginButton.textContent = "Loading...";
                alert("Muvaffaqiyatli kirdingiz");
                window.location.href = "../Dashboard/Dashboard.html";
            } else {
                alert("Xatolik yuz berdi. Iltimos qaytadan urunib ko'ring");
            }
        });
};

LoginForm.addEventListener("submit", LoginUser);
