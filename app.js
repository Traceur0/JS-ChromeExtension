const signInInput = document.querySelector("#sign-in-form input");
const signInBtn = document.querySelector("#sign-in-form button");


function onSignInBtnClick() {
    const name = signInInput.value;
    const name_len = name.length;
    // name 유효성 검사
    if (name_len <= 2) {
        alert("이름은 3자 이상이어야 합니다");
    } else if (name_len >= 15) {
        alert("이름은 15자 미만이어야 합니다");
    } else {
        console.log(name);
    }
}


signInBtn.addEventListener("click", onSignInBtnClick);