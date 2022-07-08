const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDNE_CLASSNAME);
    paintGreeting(userName);
    localStorage.setItem(USERNAME_KEY,userName);
}

function paintGreeting(userNames) {
    greeting.innerText = "hellow " + userNames;
    greeting.classList.remove(HIDDNE_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if ( saveUsername === null ) {
    loginForm.classList.remove(HIDDNE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(saveUsername);
}