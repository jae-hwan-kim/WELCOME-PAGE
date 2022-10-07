const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
    event.preventDefault();
    
    logInForm.classList.add(HIDDEN_CLASS);
    const username = logInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `${username}'s DAY`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    logInForm.classList.remove(HIDDEN_CLASS);
    logInForm.addEventListener("submit", onLogInSubmit);
} else {
    paintGreeting(savedUserName);
}
