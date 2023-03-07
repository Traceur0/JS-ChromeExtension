const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");



function onDelBtnClick(event) {
    const li = event.target.parentElement;
    li.remove();
    console.dir(todoList)
}

function createTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    span.innerText = newTodo;
    checkBtn.innerText = "✔";
    delBtn.innerText = "✖";
    checkBtn.addEventListener("click", onCheckBtnClick);
    delBtn.addEventListener("click", onDelBtnClick);
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    createTodo(newTodo);
}

function onCheckBtnClick(event) {
    /*
        체크 버튼을 누르면 span의 글자에 취소선을 긋는 함수
        버튼과 span은 같은 부모를 가지고 같은 계층에 위치해 있다
    */
    const span = event.value.getAttribute('span');
    // span.style.textDecorationLine = "line-through";
    console.log(span)
}


todoForm.addEventListener("submit", handleTodoSubmit);