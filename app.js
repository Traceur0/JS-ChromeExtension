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
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

signinForm.addEventListener("submit", onSigninBtnClick);


// if reload page
const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
    onSigninBtnClick();
} else {
    signinForm.classList.add(HIDDEN);
    onSigninBtnClick();
}
