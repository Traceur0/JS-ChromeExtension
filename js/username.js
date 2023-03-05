const signinForm = document.querySelector("#signin-form");
const signinInput = document.querySelector("#signin-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "";


function onSigninBtnClick(event) {
    event.preventDefault();
    signinForm.classList.add(HIDDEN);
    const username = signinInput.value;
    localStorage.setItem('username', username);   
    paintGreeting()
}

function paintGreeting() {
    username = localStorage.getItem(USERNAME);
    greeting.innerText = `Hello ${username}`;
    signinForm.classList.remove(HIDDEN);
}


// if reload page
const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
    // show eventListener
    signinForm.classList.remove(HIDDEN);
    signinForm.addEventListener("submit", onSigninBtnClick);
} else {
    // show greeting
    paintGreeting()
}
