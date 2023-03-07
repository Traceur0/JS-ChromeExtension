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
    const span = event.value.getAttribute('span');
    // span.style.textDecorationLine = "line-through";
    console.log(span)
}


todoForm.addEventListener("submit", handleTodoSubmit);