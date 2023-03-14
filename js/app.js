const signInInput = document.querySelector("#sign-in-form input");
const signInBtn = document.querySelector("#sign-in-form button");

function onSignInBtnClick() {
  const name = signInInput.value;
  console.log(name);
}

signInBtn.addEventListener("click", onSignInBtnClick);

signInBtn.addEventListener("");
