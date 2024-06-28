let $registerForm = document.querySelector(".SignUp__div__form");

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

let registerNewUser = (e) => {
    e.preventDefault();
    let children = e.target.children;
    let newUser = new User(
        children[0].value,
        children[1].value,
        children[2].value
    );

    fetch(
        "https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register",
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
            if (data.status == "success") {
                alert("Muvaffaqiyatli kirdingiz");
                window.location.href = "../LoginPage/login.html";
            } else {
                alert("Xatolik yuz berdi. Iltimos qaytadan urunib ko'ring");
            }
        });
};
$registerForm.addEventListener("submit", registerNewUser);
