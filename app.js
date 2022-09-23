const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");

const link = document.querySelector("a");

function onLogInSubmit(event) {
    event.preventDefault();
    console.log(event);
}

function onLinkClicked(event) {
    event.preventDefault();
    console.dir(event);
}

logInForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", onLinkClicked);