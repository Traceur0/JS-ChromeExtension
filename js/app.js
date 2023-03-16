// HTML요소 JS로 변수 할당
const signinForm = document.querySelector("#sign-in-form");
const signinInput = document.querySelector("#sign-in-form input");
const greeting = document.querySelector("#greeting");

// 자주 쓰이는 STRING KEYWORD 지정
const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

// 버튼 입력시에 작동하는 동작
// Default Action
function onSigninBtnSubmit(event) {
  event.preventDefault();
  signinForm.classList.add(CLASSNAME_HIDDEN);
  const username = signinInput.value;
  localStorage.setItem(KEY_USERNAME, username);
  createGreeting();
}

// H1(greeting) 생성 함수
function createGreeting() {
  const username = localStorage.getItem(KEY_USERNAME);
  greeting.innerText = `name: ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

// 브라우저 로컬스토리지 변수 JS로 변수 할당
const savedUsername = localStorage.getItem(KEY_USERNAME);

// STATUS 확인 후 상황에 따른 동작 설정
if (savedUsername === null) {
  signinForm.classList.remove(CLASSNAME_HIDDEN);
  signinForm.addEventListener("submit", onSigninBtnSubmit);
} else {
  createGreeting();
}
